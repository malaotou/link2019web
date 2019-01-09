webpackJsonp([1],{

/***/ "../../../../../src/app/order/order-profile/order-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item-list {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n}\r\n.item-list .item:last-child {\r\n  border: none;\r\n}\r\n.item {\r\n  width: 20%;\r\n  padding: 10px 20px;\r\n  border-right: 1px solid #f4f4f4;\r\n}\r\n.item p {\r\n  font-size: 14px;\r\n}\r\n.item .item-num {\r\n  font-size: 20px;\r\n}\r\n.my-echart {\r\n  width: 100%;\r\n  height: 400px;\r\n  display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order/order-profile/order-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"order-profile-container\" [@fadeIn]>\r\n  <nz-breadcrumb style=\"margin: 12px 0\">\r\n    <nz-breadcrumb-item>\r\n      <i class=\"anticon anticon-shop\"></i>\r\n      <span>订单</span>\r\n    </nz-breadcrumb-item>\r\n    <nz-breadcrumb-item>订单概况</nz-breadcrumb-item>\r\n  </nz-breadcrumb>\r\n\r\n  <div class=\"box box-primary\">\r\n    <div class=\"box-header with-border\">\r\n      <h3 class=\"box-title\">数据统计</h3>\r\n    </div>\r\n    <div class=\"box-body item-list\">\r\n      <div class=\"item\">\r\n        <p>30天下单单数</p>\r\n        <p class=\"item-num\">246</p>\r\n      </div>\r\n      <div class=\"item\">\r\n        <p>待付款</p>\r\n        <p class=\"item-num\">12</p>\r\n      </div>\r\n      <div class=\"item\">\r\n        <p>待发货</p>\r\n        <p class=\"item-num\">45</p>\r\n      </div>\r\n      <div class=\"item\">\r\n        <p>售后积压</p>\r\n        <p class=\"item-num\">2</p>\r\n      </div>\r\n      <div class=\"item\">\r\n        <p>30天收入</p>\r\n        <p class=\"item-num\">1000 元</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"box box-primary\">\r\n    <div class=\"box-header with-border\">\r\n      <h3 class=\"box-title\">30天订单趋势</h3>\r\n    </div>\r\n    <div class=\"box-body\">\r\n      <echart [chartType]=\"option\" class=\"my-echart\"></echart>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/order/order-profile/order-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_fade_in__ = __webpack_require__("../../../../../src/app/animations/fade-in.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__("../../../../../src/app/order/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_common_public_function__ = __webpack_require__("../../../../../src/app/shared/common/public-function.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderProfileComponent = (function () {
    function OrderProfileComponent(orderService) {
        this.orderService = orderService;
        this.option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['下单数', '售后订单数']
            },
            color: ['#fc9982', '#3c8dbc', '#00c0ef', '#d9ebb1', '#90d0c2', '#fee298', '#a9cce0', '#f2aeb9', '#bda2ee', "#bebc96"],
            grid: {
                left: '3%',
                right: '4%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [],
                axisLabel: {
                    interval: 0,
                    rotate: 60
                }
            },
            yAxis: {
                type: 'value',
                splitNumber: 1,
                axisLabel: {
                    formatter: '{value} 单'
                }
            },
            series: [
                {
                    name: '下单数',
                    type: 'line',
                    data: [],
                    markPoint: {
                        data: [
                            {
                                type: 'max',
                                name: '最大值'
                            },
                            {
                                type: 'min',
                                name: '最小值'
                            }
                        ]
                    }
                },
                {
                    name: '售后订单数',
                    type: 'line',
                    data: [],
                    markPoint: {
                        data: [
                            {
                                type: 'max',
                                name: '最大值'
                            },
                            {
                                type: 'min',
                                name: '最小值'
                            }
                        ]
                    }
                }
            ]
        };
    }
    OrderProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 获取前30天的日期数组
        this.option.xAxis.data = __WEBPACK_IMPORTED_MODULE_3__shared_common_public_function__["a" /* PublicFunction */].getDateArray(30);
        this.orderService.getOrderProfile().subscribe(function (res) {
            var orderNum = [];
            var refundNum = [];
            var orderProfile = res;
            orderProfile.forEach(function (item) {
                orderNum.push(item.orderNum);
                refundNum.push(item.refundNum);
            });
            _this.option.series[0].data = orderNum;
            _this.option.series[1].data = refundNum;
            // 改变对象的引用，触发输入属性的 ngOnChanges 事件
            _this.option = Object.assign({}, _this.option);
        });
    };
    return OrderProfileComponent;
}());
OrderProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-order-profile',
        template: __webpack_require__("../../../../../src/app/order/order-profile/order-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/order/order-profile/order-profile.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_fade_in__["a" /* fadeIn */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]) === "function" && _a || Object])
], OrderProfileComponent);

var _a;
//# sourceMappingURL=order-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/order/order-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_services_auth_guard_service__ = __webpack_require__("../../../../../src/app/login/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_profile_order_profile_component__ = __webpack_require__("../../../../../src/app/order/order-profile/order-profile.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrderRoutingModule = (function () {
    function OrderRoutingModule() {
    }
    return OrderRoutingModule;
}());
OrderRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                {
                    path: '',
                    canActivate: [__WEBPACK_IMPORTED_MODULE_2__login_services_auth_guard_service__["a" /* AuthGuard */]],
                    children: [
                        {
                            path: 'profile',
                            component: __WEBPACK_IMPORTED_MODULE_3__order_profile_order_profile_component__["a" /* OrderProfileComponent */]
                        }
                    ]
                }
            ])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], OrderRoutingModule);

//# sourceMappingURL=order-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/order/order.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__ = __webpack_require__("../../../../ng-zorro-antd/esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_routing_module__ = __webpack_require__("../../../../../src/app/order/order-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_profile_order_profile_component__ = __webpack_require__("../../../../../src/app/order/order-profile/order-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_order_service__ = __webpack_require__("../../../../../src/app/order/services/order.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var OrderModule = (function () {
    function OrderModule() {
    }
    return OrderModule;
}());
OrderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__order_routing_module__["a" /* OrderRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["a" /* NgZorroAntdModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__order_profile_order_profile_component__["a" /* OrderProfileComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */]]
    })
], OrderModule);

//# sourceMappingURL=order.module.js.map

/***/ }),

/***/ "../../../../../src/app/order/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = (function () {
    function OrderService(http) {
        this.http = http;
    }
    /**
     * 获取30天订单概况
     */
    OrderService.prototype.getOrderProfile = function () {
        var url = 'mock-data/order-profile.json';
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || 'Server error'); });
    };
    return OrderService;
}());
OrderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], OrderService);

var _a;
//# sourceMappingURL=order.service.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map