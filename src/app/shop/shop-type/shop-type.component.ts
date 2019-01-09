import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NzModalService, NzMessageService } from 'ng-zorro-antd';

import { fadeIn } from '../../animations/fade-in';
import { ShopService } from '../services/shop.service';
import { ShopType } from '../model/shop';
import { FieldBase, Textbox  } from "../../shared/components/dynamic-form/form-field";

@Component({
  selector: 'app-shop-type',
  templateUrl: './shop-type.component.html',
  styleUrls: ['./shop-type.component.css'],
  animations: [fadeIn]
})
export class ShopTypeComponent implements OnInit {
  shopTypeList: ShopType[] = [];
  allChecked: boolean = false;
  indeterminate: boolean = false;
  pageIndex: number = 1;
  pageSize: number = 10;
  loading: boolean = true;
  
  // 搜索栏条目
  serachList: FieldBase<any>[] = [
    new Textbox({
      key: 'typeName',
      label: '分类名称',
      placeholder: '请输入分类名称关键词'
    })
  ]

  constructor(
    private shopService: ShopService,
    private confirmServ: NzModalService,
    private messageServ: NzMessageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getShopTypeList();
  }

  // 搜索
  getSearchList(value) {
    console.log(value);
  }

  getShopTypeList() {
    this.loading = true;
    this.shopService.getShopTypeList().subscribe(res => {
      console.log(res);
      this.loading = false;
      this.shopTypeList = res;
    });
  }
  
  delShopTypeById(typeId) {
    this.confirmServ.confirm({
      title: '是否要删除该分类？',
      onOk: () => {
        this.shopService.delShopTypeById(typeId);
        this.messageServ.success('删除成功！');
      }
    });
  }

  batchDel() {
    if (this.indeterminate || this.allChecked) {
      this.confirmServ.confirm({
        title: '是否批量删除分类？',
        onOk: () => {
          this.messageServ.success('删除成功！');
        }
      });
    } else {
      this.messageServ.create('warning', '请至少选择一行！');
    }
  }

  gotoEdit(typeId?: string) {
    this.router.navigate(['./edit', typeId ? { id: typeId } : {}], { relativeTo: this.route });
  }

  updateAllChecked() {
    this.indeterminate = false;
    if(this.allChecked) {
      this.shopTypeList.forEach(item => item.checked = true);
    } else {
      this.shopTypeList.forEach(item => item.checked = false);
    }
  }

  updateSingleChecked() {
    if (this.shopTypeList.every(item => !!item.checked === false)){
      this.indeterminate = false;
      this.allChecked = false;
    } else if (this.shopTypeList.every(item => item.checked === true)) {
      this.indeterminate = false;
      this.allChecked = true;
    } else {
      this.indeterminate = true;
      this.allChecked = false;
    }
  }

}
