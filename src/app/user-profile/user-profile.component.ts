import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { NzNotificationService } from 'ng-zorro-antd';
import { fadeIn } from '../animations/fade-in';
import { User } from '../login/model/user';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css' ],
  animations: [fadeIn]
})
export class UserProfileComponent implements OnInit {
  userProfileForm: FormGroup;
  user: User = <User>{};
  checkPassword: string;
  hasGetCaptcha: boolean;
  second: number = 60;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private loginService: LoginService,
    private notificationServ: NzNotificationService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    console.log(this.user.headImgUrl);
    this.buildForm();
  }

  getImgUrl(url: string) {
    // 选取图片后，接收组件传递过来的 url，并设置表单的值
    this.userProfileForm.patchValue({
      headImgUrl: url
    });
  }

  buildForm() {
    this.userProfileForm = this.fb.group({
      headImgUrl: this.user.headImgUrl,
      userName: [ this.user.userName, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      checkPassword: [ this.checkPassword, [ Validators.required, this.confirmationValidator ] ],
      phonePrefix: [ '+86' ],
      phone: [ null, [ Validators.required ] ],
      captcha: [ null, [ Validators.required ] ]
    })
  }

  updateConfirmValidator() {
    setTimeout(_ => {
      this.userProfileForm.controls['checkPassword'].updateValueAndValidity();
    });
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.userProfileForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
  };

  getFormControl(name) {
    return this.userProfileForm.controls[name];
  }

  getCaptcha(e: MouseEvent) {
    this.hasGetCaptcha = true;
    this.second = 60;

    let timer = setInterval(() => {
      if (this.second <= 0) {
        clearInterval(timer);
        this.hasGetCaptcha = false;
      } else {
        this.second--;
      }
    }, 1000);
    
    e.preventDefault();
  }

  cancel() {
    this.location.back();
  }

  submitForm() {
    console.log(this.userProfileForm.value);
    // this.notificationServ.create('success', '用户中心', '个人信息修改成功');
    // this.location.back();
  }

}
