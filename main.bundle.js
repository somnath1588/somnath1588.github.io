webpackJsonp([1,4],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_dashboard_routing_module__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_dashboard_customer_dashboard_component__ = __webpack_require__(332);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDashboardModule", function() { return CustomerDashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerDashboardModule = (function () {
    function CustomerDashboardModule() {
    }
    CustomerDashboardModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__customer_dashboard_routing_module__["a" /* CustomerDashboardRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__customer_dashboard_customer_dashboard_component__["a" /* CustomerDashboardComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__customer_dashboard_customer_dashboard_component__["a" /* CustomerDashboardComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomerDashboardModule);
    return CustomerDashboardModule;
}());
//# sourceMappingURL=C:/angular2projects/angularProduct/src/customer-dashboard.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerDashboardComponent = (function () {
    function CustomerDashboardComponent() {
        this.listDashboardUser = [];
    }
    CustomerDashboardComponent.prototype.ngOnInit = function () {
        console.log('dashboard customer component');
        this.listDashboardUser = JSON.parse(localStorage.getItem('loginUsers'));
    };
    CustomerDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-customer-dashboard',
            template: __webpack_require__(678),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomerDashboardComponent);
    return CustomerDashboardComponent;
}());
//# sourceMappingURL=C:/angular2projects/angularProduct/src/customer-dashboard.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginService_login_check_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeDashboardComponent = (function () {
    function HomeDashboardComponent(route, loginCheckService) {
        this.route = route;
        this.loginCheckService = loginCheckService;
    }
    HomeDashboardComponent.prototype.ngOnInit = function () {
        this.currentUser = localStorage.getItem('currentUser');
    };
    HomeDashboardComponent.prototype.logOut = function () {
        console.log(this.currentUser);
        var val = this.loginCheckService.isLoggedOut();
        if (val == true) {
            this.route.navigate(['/login']);
        }
    };
    HomeDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-home-dashboard',
            template: __webpack_require__(679),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__loginService_login_check_service__["a" /* LoginCheckService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__loginService_login_check_service__["a" /* LoginCheckService */]) === 'function' && _b) || Object])
    ], HomeDashboardComponent);
    return HomeDashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/angular2projects/angularProduct/src/home-dashboard.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_dashboard_login_dashboard_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_dashboard_routing_module__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_dashboard_home_dashboard_component__ = __webpack_require__(333);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDashboardModule", function() { return LoginDashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginDashboardModule = (function () {
    function LoginDashboardModule() {
    }
    LoginDashboardModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__login_dashboard_routing_module__["a" /* LoginDashboardRoutingModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__login_dashboard_login_dashboard_component__["a" /* LoginDashboardComponent */], __WEBPACK_IMPORTED_MODULE_5__home_dashboard_home_dashboard_component__["a" /* HomeDashboardComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__home_dashboard_home_dashboard_component__["a" /* HomeDashboardComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginDashboardModule);
    return LoginDashboardModule;
}());
//# sourceMappingURL=C:/angular2projects/angularProduct/src/login-dashboard.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginService_login_check_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginDashboardComponent = (function () {
    function LoginDashboardComponent(route, loginCheckService) {
        this.route = route;
        this.loginCheckService = loginCheckService;
        this.User = {};
        this.ListUser = [];
        this.username = 'type your value';
        this.submitted = false;
        this.User = {
            email: '',
            password: ''
        };
        console.log('Service login' + loginCheckService.isLoggedIn());
    }
    LoginDashboardComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    LoginDashboardComponent.prototype.sendDatacity = function (val) {
        this.loginCheckService.subjectObj.next(val);
        this.loginCheckService.subjectObj.error('catch error');
    };
    LoginDashboardComponent.prototype.getUsers = function () {
        var item = localStorage.getItem('loginUsers');
        if (item.length > 0) {
            this.ListUser = JSON.parse(localStorage.getItem('loginUsers'));
            console.log(this.ListUser);
        }
    };
    LoginDashboardComponent.prototype.onSave = function (formValues, myform) {
        var _this = this;
        this.loginCheckService.storeUserOneSession(formValues.name);
        this.ListUser.push(formValues);
        localStorage.setItem('loginUsers', JSON.stringify(this.ListUser));
        myform.reset();
        this.submitted = true;
        setTimeout(function () { _this.submitted = false; }, 10000);
        this.route.navigate(['/home']);
    };
    LoginDashboardComponent.prototype.ngAfterViewInit = function () {
        //render Dom of login form
        console.log(this.loginform.nativeElement);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ViewChild */])('Loginform'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ElementRef */]) === 'function' && _a) || Object)
    ], LoginDashboardComponent.prototype, "loginform", void 0);
    LoginDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-login-dashboard',
            template: __webpack_require__(680),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__loginService_login_check_service__["a" /* LoginCheckService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__loginService_login_check_service__["a" /* LoginCheckService */]) === 'function' && _c) || Object])
    ], LoginDashboardComponent);
    return LoginDashboardComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/angular2projects/angularProduct/src/login-dashboard.component.js.map

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/customer-dashboard/customer-dashboard.module": [
		331
	],
	"app/login-dashboard/login-dashboard.module": [
		334
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 394;


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(513);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/angular2projects/angularProduct/src/main.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_login_dashboard_loginService_login_check_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(logincheckservice) {
        var _this = this;
        this.logincheckservice = logincheckservice;
        this.title = 'Product Management!';
        this.myname = ' By somnath';
        this.headerlogo = '../assets/logo.png';
        this.cssClass = '';
        this.imageCount = 0;
        this.logincheckservice.createSubjectAsObservable().subscribe(function (data) {
            _this.city = data;
        }, function (error) {
            console.log(error);
        });
    }
    AppComponent.prototype.sliderRun = function () {
        this.cssClass = '';
        switch (this.imageCount) {
            case 0: {
                this.cssClass = "one";
                this.logo = "../assets/test_" + this.imageCount + ".jpg";
                break;
            }
            case 1: {
                this.cssClass = "two";
                this.logo = "../assets/test_" + this.imageCount + ".jpg";
                break;
            }
            case 2: {
                this.cssClass = "three";
                this.logo = "../assets/test_" + this.imageCount + ".jpg";
                break;
            }
        }
        console.log(this.imageCount);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('dsf' + this.logincheckservice.isLoggedIn());
        setInterval(function () {
            if (_this.imageCount < 3) {
                _this.sliderRun();
                _this.imageCount++;
            }
            else {
                _this.imageCount = 0;
            }
        }, 3000);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(677),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_login_dashboard_loginService_login_check_service__["a" /* LoginCheckService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_login_dashboard_loginService_login_check_service__["a" /* LoginCheckService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/angular2projects/angularProduct/src/app.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_dashboard_customer_dashboard_module__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_dashboard_login_dashboard_module__ = __webpack_require__(334);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { LoginCheckService } from './login-dashboard/loginService/login-check.service';
//import { ErrorInterceptor } from './components/_helpers/error.interceptor'
var appRoutes = [
    {
        path: 'dashboard',
        loadChildren: 'app/customer-dashboard/customer-dashboard.module#CustomerDashboardModule'
    },
    {
        path: 'login',
        loadChildren: 'app/login-dashboard/login-dashboard.module#LoginDashboardModule'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__customer_dashboard_customer_dashboard_module__["CustomerDashboardModule"],
                __WEBPACK_IMPORTED_MODULE_7__login_dashboard_login_dashboard_module__["LoginDashboardModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/angular2projects/angularProduct/src/app.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_dashboard_customer_dashboard_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_guard_service__ = __webpack_require__(515);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDashboardRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__customer_dashboard_customer_dashboard_component__["a" /* CustomerDashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__dashboard_guard_service__["a" /* DashboardGuardService */]]
    }
];
var CustomerDashboardRoutingModule = (function () {
    function CustomerDashboardRoutingModule() {
    }
    CustomerDashboardRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__dashboard_guard_service__["a" /* DashboardGuardService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomerDashboardRoutingModule);
    return CustomerDashboardRoutingModule;
}());
//# sourceMappingURL=C:/angular2projects/angularProduct/src/customer-dashboard-routing.module.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_dashboard_loginService_login_check_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardGuardService = (function () {
    function DashboardGuardService(loginCheckService) {
        this.loginCheckService = loginCheckService;
        console.log('dashboard constructor');
    }
    DashboardGuardService.prototype.canActivate = function () {
        console.log('Dashboard activate value' + this.loginCheckService.isLoggedIn());
        return this.loginCheckService.isLoggedIn();
    };
    DashboardGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_dashboard_loginService_login_check_service__["a" /* LoginCheckService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__login_dashboard_loginService_login_check_service__["a" /* LoginCheckService */]) === 'function' && _a) || Object])
    ], DashboardGuardService);
    return DashboardGuardService;
    var _a;
}());
//# sourceMappingURL=C:/angular2projects/angularProduct/src/dashboard-guard.service.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_dashboard_login_dashboard_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_dashboard_home_dashboard_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loginService_login_check_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loginGuard_login_route_guard_service__ = __webpack_require__(517);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginDashboardRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_dashboard_login_dashboard_component__["a" /* LoginDashboardComponent */],
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_3__home_dashboard_home_dashboard_component__["a" /* HomeDashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__loginGuard_login_route_guard_service__["a" /* LoginRouteGuardService */]]
    }
];
var LoginDashboardRoutingModule = (function () {
    function LoginDashboardRoutingModule() {
    }
    LoginDashboardRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__loginService_login_check_service__["a" /* LoginCheckService */], __WEBPACK_IMPORTED_MODULE_5__loginGuard_login_route_guard_service__["a" /* LoginRouteGuardService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginDashboardRoutingModule);
    return LoginDashboardRoutingModule;
}());
//# sourceMappingURL=C:/angular2projects/angularProduct/src/login-dashboard-routing.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loginService_login_check_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRouteGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginRouteGuardService = (function () {
    function LoginRouteGuardService(loginCheckService) {
        this.loginCheckService = loginCheckService;
    }
    LoginRouteGuardService.prototype.canActivate = function () {
        console.log(this.loginCheckService.isLoggedIn());
        return this.loginCheckService.isLoggedIn();
    };
    LoginRouteGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__loginService_login_check_service__["a" /* LoginCheckService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__loginService_login_check_service__["a" /* LoginCheckService */]) === 'function' && _a) || Object])
    ], LoginRouteGuardService);
    return LoginRouteGuardService;
    var _a;
}());
//# sourceMappingURL=C:/angular2projects/angularProduct/src/login-route-guard.service.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/angular2projects/angularProduct/src/environment.js.map

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "#header {\r\n    padding: 0px 0px 20px 0px;\r\n    position: relative;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    transition: all 0.5s;\r\n    z-index: 997;\r\n    background: #fff !important;\r\n    min-height: 100px;\r\n}\r\n\r\n#header.header-scrolled {\r\n    box-shadow: -21.213px 21.213px 30px 0px rgba(158, 158, 158, 0.3);\r\n    background: rgba(255, 255, 255, 0.9);\r\n    transition: all 0.5s;\r\n   \r\n}\r\n\r\n.container {\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n\r\n\r\n.main-menu {\r\n    padding-top: 20px;\r\n}\r\n\r\n.align-items-center {\r\n    -ms-flex-align: center !important;\r\n        align-items: center !important;\r\n}\r\n\r\n#nav-menu-container {\r\n    float: right;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n#nav-menu-container  li {\r\n    margin-left: 10px;\r\n    float: left;\r\n    height: 30px;\r\n    background: orange;\r\n    margin: 3px;\r\n    list-style-type: none;\r\n}\r\n\r\n.nav-menu a {\r\n    padding:8px;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    color: #222;\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    outline: none;\r\n}\r\n.nav-menu li a:hover{\r\nbackground: green;\r\ncolor: white;\r\n}\r\n\r\n.mainArea{\r\n    min-height: 500px;\r\n    margin: 1%;\r\n    padding: 10px;\r\n    float: left;\r\n    background:tan;\r\n    width: 98%;\r\n    \r\n}\r\n\r\nfooter{\r\n    min-height: auto;\r\n    margin: 1%;\r\n    padding: 10px;\r\n    float: left;\r\n    background-color: skyblue;\r\n    width: 98%;\r\n}\r\n\r\n.sliders{\r\n    width: auto;\r\n    margin: 0px;\r\n    padding: 5px;\r\n   \r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n /* ANIMATION */\r\n @keyframes one {\r\n    0%  { opacity: 0; } /* Original Position */\r\n    50% { opacity: 0.5; }/* Starts moving after 16% to this position */\r\n    100% { opacity: 1; }\r\n   \r\n }\r\n \r\n @keyframes two {\r\n    0%  { opacity: 0; } /* Original Position */\r\n    50% { opacity: 0.5; }/* Starts moving after 16% to this position */\r\n    100% { opacity: 1; }\r\n   \r\n }\r\n \r\n @keyframes three {\r\n    0%  { opacity: 0; } /* Original Position */\r\n    50% { opacity: 0.5; }/* Starts moving after 16% to this position */\r\n    100% { opacity: 1; }\r\n   \r\n }\r\n \r\n #logo{ \r\n    animation: one 3s  ease infinite;\r\n }\r\n\r\n #logo{ \r\n     animation: two 3s  ease infinite;\r\n    }\r\n\r\n    #logo{ \r\n        animation: three 3s ease infinite;\r\n       }\r\n\r\n "

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = ".home ul{\r\n    margin:0px;\r\n    padding: 0px;\r\n    float: right;\r\n}\r\n.home ul li{\r\n  padding: 5px;\r\n  background: green;\r\n  display: inline;\r\n  margin: 5px;\r\n}\r\n\r\na{\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\na:hover{\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ".formSubmit{\r\n    color:green;\r\n    text-align: center;\r\n    font-size: 16px;\r\n}\r\n\r\n.formLogin{\r\n    background:white;\r\n    border-radius: 5px;\r\n}\r\n"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "    <h1>{{title}} {{myname}} living in {{city}}</h1>\n\n    <header id=\"header\" class=\"header-scrolled\">\n        <div class=\"container main-menu\">\n          <div class=\"row align-items-center justify-content-between d-flex\">\n            <div id=\"logo\">\n              <a href=\"index.html\"><img [src]=\"headerlogo\" alt=\"\" title=\"\" width=\"200\" ></a>\n            </div>\n            <nav id=\"nav-menu-container\">\n              <ul class=\"nav-menu sf-js-enabled sf-arrows\" style=\"touch-action: pan-y;\">\n                    <li>\n                      <a routerLink='/dashboard' routerLinkActive='active'>Dashboard</a>\n                    </li>\n                    <li> <a routerLink=\"/login\" routerLinkActive=\"active\">Login Center</a>\n                    </li>\n                \n              </ul>\n            </nav><!-- #nav-menu-container -->\t\t    \t\t\n          </div>\n        </div>\n    </header>\n\n  <section class=\"mainArea row\">\n    <div class='col-md-2'>\n        <div class='sliders'>\n          <div id=\"logo\" [(class)]=\"cssClass\">\n            <a href=\"index.html\"><img [src]=\"logo\" [class]=\"cssClass\" alt=\"\" title=\"\" width=\"200\"></a>\n          </div>\n          </div>\n    </div>\n       <div class=\"col-md-10\">\n          <router-outlet></router-outlet>\n       </div> \n      \n  </section>\n<footer>\n  <app-home-dashboard></app-home-dashboard>\n<p style=\"text-align:center;padding:0px;vertical-align:middle\">This is secured product</p>\n</footer>\n\n \n "

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-push-1 col-md-11\">\n    <h3> customer-dashboard Module separtely work from main app module works! </h3>\n<table class=\"table-responsive table table-striped\">\n  <thead>\n    <tr>\n      <th>Username</th>\n      <th>Password</th>    \n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor='let item of listDashboardUser'>\n      <td>{{item.name}}</td>\n      <td>{{item.password}}</td>\n    </tr>\n    </tbody>\n    </table>\n    </div>\n"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n  <nav id=\"nav-menu-container\">\n    <ul class=\"nav-menu sf-js-enabled sf-arrows\" style=\"touch-action: pan-y;\">\n      <li>\n        <a>Current User <b>{{currentUser}}</b></a>\n      </li>\n          <li>\n            <a (click)=\"logOut()\" routerLinkActive='active'>Log Out</a>\n          </li> \n    </ul>\n  </nav><!-- #nav-menu-container -->\n  <div class=\"col-md-push-2 col-md-8\">\n   <h3>You are in here home page </h3>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-push-1 col-md-11 formLogin\">\n    <nav id=\"nav-menu-container\">\n        <ul class=\"nav-menu sf-js-enabled sf-arrows\" style=\"touch-action: pan-y;\">\n              <li>\n                <a routerLink='/home' routerLinkActive='active'>Home</a>\n              </li>\n        </ul>\n</nav>\n    <h2> Login-dashboard Module separtely works! from main module. </h2>\n    {{User|json }}\n  <div *ngIf='submitted' method='POST' [ngClass]='{formSubmit:submitted}'>Form has been submitted ..</div>\n \n  <form  #Loginform=\"ngForm\" (ngSubmit)='onSave(Loginform.value,Loginform)'>\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" required\n      pattern=\"[a-zA-Z][a-zA-Z ]+\"\n      [(ngModel)]=\"User.email\" name=\"name\"\n      #name=\"ngModel\">\n      <div [hidden]=\"name.valid || name.pristine  || name.dirty\"\n         class=\"alert alert-danger\">\n         <div [hidden]=\"!name.hasError('required')\">Name is required</div>\n         <div [hidden]=\"!name.hasError('pattern')\">Only alphabets allowed</div>\n      </div>\n   </div>\n\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" required class='form-control' name='password'\n       #password=\"ngModel\" minlength=\"8\"\n        [(ngModel)]='User.password'> \n        <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">\n            <div [hidden]=\"!password.hasError('minlength')\">Password min 8 char</div>\n            <div [hidden]=\"!password.hasError('required')\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">{{Loginform.form.invalid}}\n      <input type=\"submit\" class='btn btn-primary' [disabled]='!Loginform.form.valid' name='submit' value=\"submit\"> \n    </div>\n  </form>\n\n  \n</div>\n<div class=\"col-md-10\" [hidden]='false'>\n  <input type='text' [value]='username' (input)='username=$event.target.value'>\n   {{username}}\n   <input type='text' [(ngModel)]='city' />\n   <button name='button' (click)='sendDatacity(city)' value='send city'>send city</button>\n  <br>\n</div>\n\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(395);


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginCheckService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginCheckService = (function () {
    function LoginCheckService() {
        this.UserLoggedIn = false;
        //subject to transfer data between two different component
        this.subjectObj = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.user = '';
    }
    //make as asObservable
    LoginCheckService.prototype.createSubjectAsObservable = function () {
        return this.subjectObj.asObservable();
    };
    //store session
    LoginCheckService.prototype.storeUserOneSession = function (val) {
        localStorage.setItem('currentUser', val);
    };
    //check userLogged in or not
    LoginCheckService.prototype.isLoggedIn = function () {
        this.user = localStorage.getItem('currentUser');
        if (this.user != null && this.user != undefined) {
            this.UserLoggedIn = true;
        }
        return this.UserLoggedIn;
    };
    LoginCheckService.prototype.isLoggedOut = function () {
        localStorage.removeItem('currentUser');
        return true;
    };
    //remove session
    LoginCheckService.prototype.removeUserOneSession = function () {
        localStorage.removeItem('currentUser');
        this.UserLoggedIn = false;
    };
    LoginCheckService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], LoginCheckService);
    return LoginCheckService;
}());
//# sourceMappingURL=C:/angular2projects/angularProduct/src/login-check.service.js.map

/***/ })

},[713]);
//# sourceMappingURL=main.bundle.map