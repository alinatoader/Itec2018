(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quizzes-quizzes-module"],{

/***/ "./src/app/admin/quizzes/quizzes-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/quizzes/quizzes-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: QuizzesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizzesRoutingModule", function() { return QuizzesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _quizzes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quizzes.component */ "./src/app/admin/quizzes/quizzes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        data: {
            title: 'Quizzes - Display',
            urls: [{ title: 'Dashboard', url: '/' }, { title: 'ngComponent' }, { title: 'Accordion' }]
        },
        component: _quizzes_component__WEBPACK_IMPORTED_MODULE_5__["QuizzesComponent"],
    }
];
var QuizzesRoutingModule = /** @class */ (function () {
    function QuizzesRoutingModule() {
    }
    QuizzesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], QuizzesRoutingModule);
    return QuizzesRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/quizzes/quizzes.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/quizzes/quizzes.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"quizzes\">\r\n    <div class=\"row\" *ngFor=\"let quiz of quizzes\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h3 class=\"card-title\">{{quiz.name}}\r\n                    </h3>\r\n                    <h4 class=\"card-subtitle\">\r\n                        <div *ngFor=\"let rule of quiz.ruleList\">\r\n                            #{{rule.category}} - {{rule.difficulty}} : {{rule.nrOfQuiestion}} \r\n                        </div>\r\n                        <div style=\"float:right;\">\r\n                            <a class=\"btn btn-light btn-lg\" *ngIf=\"quiz.result!==null\">{{quiz.result.score}}/{{quiz.score}}</a>\r\n                            <button *ngIf=\"quiz.result === null\" type=\"button\" class=\"btn btn-info btn-lg\" (click)=\"goToQuiz(quiz.id)\">Start</button>\r\n                        </div>\r\n                    </h4>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/quizzes/quizzes.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/quizzes/quizzes.component.ts ***!
  \****************************************************/
/*! exports provided: QuizzesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizzesComponent", function() { return QuizzesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user/quiz.service */ "./src/app/user/quiz.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizzesComponent = /** @class */ (function () {
    function QuizzesComponent(quizzesService, userService, router) {
        this.quizzesService = quizzesService;
        this.userService = userService;
        this.router = router;
    }
    QuizzesComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            console.log('if 1');
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            console.log('if2');
            $event.preventDefault();
        }
    };
    QuizzesComponent.prototype.getAll = function () {
        var _this = this;
        this.quizzesService.getAll()
            .subscribe(function (quizzes) {
            _this.quizzes = quizzes;
            var user = _this.userService.getUserFromLocalStorage();
            var _loop_1 = function (i) {
                _this.quizzesService.getQuizCompleted(user.email, _this.quizzes[i].id).subscribe(function (response) {
                    _this.quizzes[i].result = response;
                });
            };
            for (var i = 0; i < _this.quizzes.length; i++) {
                _loop_1(i);
            }
            console.log(_this.quizzes);
        }, function (error) {
            console.log(error);
        });
    };
    QuizzesComponent.prototype.goToQuiz = function (quizId) {
        var loggedUser = this.userService.getUserFromLocalStorage();
        this.router.navigateByUrl('/user/quiz/' + quizId + '/' + loggedUser.email);
    };
    QuizzesComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    QuizzesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./quizzes.component.html */ "./src/app/admin/quizzes/quizzes.component.html")
        }),
        __metadata("design:paramtypes", [_user_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuizzesComponent);
    return QuizzesComponent;
}());



/***/ }),

/***/ "./src/app/admin/quizzes/quizzes.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/quizzes/quizzes.module.ts ***!
  \*************************************************/
/*! exports provided: QuizzesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizzesModule", function() { return QuizzesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _quizzes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quizzes.component */ "./src/app/admin/quizzes/quizzes.component.ts");
/* harmony import */ var _quizzes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quizzes-routing.module */ "./src/app/admin/quizzes/quizzes-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var QuizzesModule = /** @class */ (function () {
    function QuizzesModule() {
    }
    QuizzesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _quizzes_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuizzesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
            ],
            declarations: [
                _quizzes_component__WEBPACK_IMPORTED_MODULE_4__["QuizzesComponent"]
            ]
        })
    ], QuizzesModule);
    return QuizzesModule;
}());



/***/ }),

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
        //apiUrl = 'https://apiitec2018tm.herokuapp.com';
        this.apiUrl = 'http://localhost:8080';
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



/***/ })

}]);
//# sourceMappingURL=quizzes-quizzes-module.js.map