(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = 'https://apiitec2018tm.herokuapp.com';
    }
    UserService.prototype.login = function (user) {
        return this.http.post(this.apiUrl + '/login', user);
    };
    UserService.prototype.saveUserInLocalStorage = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
    };
    UserService.prototype.getUserFromLocalStorage = function () {
        return JSON.parse(localStorage.getItem('user'));
    };
    UserService.prototype.logout = function () {
        localStorage.clear();
    };
    UserService.prototype.register = function (user) {
        return this.http.post(this.apiUrl + '/register', user);
    };
    UserService.prototype.confirm = function (email) {
        return this.http.post(this.apiUrl + '/admin/user/update/isConfirmed/' + email, null);
    };
    UserService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + '/admin/user');
    };
    UserService.prototype.modifyAdminRole = function (email) {
        return this.http.post(this.apiUrl + '/admin/user/update/isAdmin/' + email, null);
    };
    UserService.prototype.ngOnInit = function () {
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/signup/signup-confirm.component.html":
/*!******************************************************!*\
  !*** ./src/app/signup/signup-confirm.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"confirmed\" class=\"success-box\">\r\n        <div class=\"success-body text-center\">\r\n                <h3 class=\"text-uppercase\">Success</h3>\r\n                <p class=\"text-muted m-t-30 m-b-30\">You've successfully confirmed your account! You can log in now. </p>\r\n                <a class=\"btn btn-info btn-rounded waves-effect waves-light m-b-40\" [routerLink]=\"['/']\">Go to Login</a>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/signup/signup-confirm.component.ts":
/*!****************************************************!*\
  !*** ./src/app/signup/signup-confirm.component.ts ***!
  \****************************************************/
/*! exports provided: SignupConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupConfirmComponent", function() { return SignupConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupConfirmComponent = /** @class */ (function () {
    function SignupConfirmComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.confirmed = false;
    }
    SignupConfirmComponent.prototype.confirm = function (email) {
        var _this = this;
        this.userService.confirm(email)
            .subscribe(function (response) {
            _this.confirmed = true;
            console.log('confirmed');
        }, function (error) {
            console.log(error);
        });
    };
    SignupConfirmComponent.prototype.ngOnInit = function () {
        var email = this.route.snapshot.paramMap.get('email');
        this.confirm(email);
    };
    SignupConfirmComponent.prototype.ngAfterViewInit = function () {
        $(function () {
            $(".preloader").fadeOut();
        });
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
        $('#to-recover').on("click", function () {
            $("#loginform").slideUp();
            $("#recoverform").fadeIn();
        });
    };
    SignupConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./signup-confirm.component.html */ "./src/app/signup/signup-confirm.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SignupConfirmComponent);
    return SignupConfirmComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _signup_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup-confirm.component */ "./src/app/signup/signup-confirm.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"] },
    { path: 'confirm/:email', component: _signup_confirm_component__WEBPACK_IMPORTED_MODULE_3__["SignupConfirmComponent"] }
];
var SignupRoutingModule = /** @class */ (function () {
    function SignupRoutingModule() {
    }
    SignupRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SignupRoutingModule);
    return SignupRoutingModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-register\" style=\"background-image:url(assets/images/background/login-register.jpg);\">\r\n  <div class=\"login-box card\">\r\n    <div class=\"card-body\">\r\n      <form class=\"form-horizontal form-material\" id=\"loginform\" [formGroup]=\"registerForm\" (submit)=\"onRegister()\">\r\n        <h3 class=\"box-title m-b-20\">Sign Up</h3>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-xs-12\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Name\" formControlName=\"name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group \">\r\n          <div class=\"col-xs-12\">\r\n            <input class=\"form-control\" type=\"email\" placeholder=\"Email\" formControlName=\"email\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-xs-12\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Image\" formControlName=\"image\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-xs-12\">\r\n              <input class=\"form-control\" type=\"text\" placeholder=\"Phone\" formControlName=\"phone\">\r\n            </div>\r\n          </div>\r\n        <div class=\"form-group \">\r\n          <div class=\"col-xs-12\">\r\n            <input class=\"form-control\" type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-xs-12\">\r\n            <input class=\"form-control\" type=\"password\" placeholder=\"Confirm Password\" formControlName=\"confirmPassword\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group text-center m-t-20\" *ngIf=\"errorMessage != null\">\r\n          <div class=\"col-xs-12\">\r\n            <ngb-alert [dismissible]=\"false\">\r\n              <strong>Error!</strong> {{errorMessage}}\r\n            </ngb-alert>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group text-center p-b-20\">\r\n          <div class=\"col-xs-12\">\r\n            <button type=\"submit\" class=\"btn btn-info btn-lg btn-block btn-rounded text-uppercase waves-effect waves-light\"\r\n              [disabled]=\"!registerForm.valid\">Sign\r\n              Up</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group m-b-0\">\r\n          <div class=\"col-sm-12 text-center\">\r\n            Already have an account? <a class=\"text-info m-l-5\" [routerLink]=\"['/']\" [queryParams]=\"{returnUrl: returnUrl}\"><b>Sign In</b></a>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.errorMessage = null;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    SignupComponent.prototype.onRegister = function () {
        var _this = this;
        var user = this.registerForm.value;
        if (user.password != user.confirmPassword) {
            this.errorMessage = 'Password doesn\'t match! Try again!';
            return;
        }
        var registerUser = {
            name: user.name,
            email: user.email,
            password: user.password,
            image: user.image,
            phone: user.phone,
            confirmUrl: 'https://quizzmee.herokuapp.com/#/signup/confirm/' + user.email
        };
        this.userService.register(registerUser).toPromise()
            .then(function (response) {
            if (response == null) {
                _this.errorMessage = 'This user already exists!';
            }
            else {
                _this.router.navigate(['/'], { queryParams: { returnUrl: _this.returnUrl } });
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    SignupComponent.prototype.ngAfterViewInit = function () {
        $(function () {
            $(".preloader").fadeOut();
        });
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
        $('#to-recover').on("click", function () {
            $("#loginform").slideUp();
            $("#recoverform").fadeIn();
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _signup_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-confirm.component */ "./src/app/signup/signup-confirm.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignupRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            declarations: [
                _signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
                _signup_confirm_component__WEBPACK_IMPORTED_MODULE_6__["SignupConfirmComponent"]
            ]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map