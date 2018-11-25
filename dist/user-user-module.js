(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/user/quiz.component.html":
/*!******************************************!*\
  !*** ./src/app/user/quiz.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"background:white\" *ngIf=\"!errorMessage; else errorTemplate\">\r\n    <div class=\"col-md-12\" *ngFor=\"let question of questions\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h3 class=\"card-title\">{{question.text}}  - {{question.score}}</h3>\r\n                <h6 class=\"card-subtitle\">A typeahead example that gets values from a static string</h6>\r\n                <div *ngFor=\"let answer of question.answersList\">\r\n                    <span *ngIf=\"answer.checked; else uncheckedAnswer\"><button type=\"button\" class=\"btn btn-success\"\r\n                            (click)=\"toggleChecked(question.id, answer.id)\"></button>\r\n                        {{answer.value}}</span>\r\n                    <ng-template #uncheckedAnswer>\r\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"toggleChecked(question.id,answer.id)\"></button>\r\n                        {{answer.value}}\r\n                    </ng-template>\r\n                    {{answer.correct}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <img [src]=\"question.image\" alt=\"QuestionImage\">\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n            <button type=\"button\" class=\"btn btn-info btn-lg\" (click)=\"submitQuiz()\">Submit Quiz</button>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #errorTemplate>\r\n    <div class=\"alert alert-danger\">{{errorMessage}}</div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/user/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz.service */ "./src/app/user/quiz.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizComponent = /** @class */ (function () {
    function QuizComponent(quizService, route, userService, router) {
        this.quizService = quizService;
        this.route = route;
        this.userService = userService;
        this.router = router;
    }
    QuizComponent.prototype.ngOnInit = function () {
        this.quizId = Number(this.route.snapshot.paramMap.get('id'));
        this.email = this.route.snapshot.paramMap.get('email');
        var loggedUser = this.userService.getUserFromLocalStorage();
        if (loggedUser.email !== this.email) {
            this.errorMessage = 'You are not allowed to enter this page!';
            console.log(this.errorMessage);
            this.router.navigateByUrl('/404');
        }
        this.getQuizCompleted();
    };
    QuizComponent.prototype.getQuizCompleted = function () {
        var _this = this;
        this.quizService.getQuizCompleted(this.email, this.quizId)
            .subscribe(function (response) {
            if (response) {
                _this.errorMessage = 'You have already completed this quiz!';
                console.log(_this.errorMessage);
                _this.router.navigateByUrl('/404');
            }
            else {
                _this.errorMessage = undefined;
                _this.getQuestions();
            }
        });
    };
    QuizComponent.prototype.getQuestions = function () {
        var _this = this;
        this.quizService.getQuestions(this.quizId)
            .subscribe(function (response) {
            console.log(response);
            _this.questions = response;
            for (var i = 0; i < _this.questions.length; i++) {
                for (var j = 0; j < _this.questions[i].answersList.length; j++) {
                    _this.questions[i].answersList[j].checked = false;
                }
            }
            console.log(_this.questions);
        }, function (error) {
            console.log(error);
        });
    };
    QuizComponent.prototype.toggleChecked = function (questionId, answerId) {
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].id == questionId) {
                for (var j = 0; j < this.questions[i].answersList.length; j++) {
                    if (this.questions[i].answersList[j].id == answerId) {
                        var a = this.questions[i].answersList[j];
                        a.checked = a.checked ? false : true;
                        break;
                    }
                }
                break;
            }
        }
    };
    QuizComponent.prototype.submitQuiz = function () {
        var _this = this;
        var score = 0;
        var responseModel = {
            quizId: this.quizId,
            emailUser: this.email,
            score: 0,
            answerModels: []
        };
        for (var i = 0; i < this.questions.length; i++) {
            var q = this.questions[i];
            var correct = true;
            for (var j = 0; j < q.answersList.length; j++) {
                var a = q.answersList[j];
                if (a.correct !== a.checked) {
                    correct = false;
                    break;
                }
            }
            if (correct) {
                score = score + q.score;
            }
            responseModel.answerModels.push({ questionId: q.id, isCorrect: correct });
        }
        responseModel.score = score;
        console.log(responseModel);
        this.quizService.postResult(responseModel)
            .subscribe(function (_) {
            console.log('success');
            _this.getQuizCompleted();
        }, function (error) {
            console.log(error);
        });
    };
    QuizComponent.prototype.ngAfterViewInit = function () {
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
    QuizComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/user/quiz.component.html")
        }),
        __metadata("design:paramtypes", [_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/user/quiz.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/quiz.service.ts ***!
  \**************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
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


var QuizService = /** @class */ (function () {
    function QuizService(http) {
        this.http = http;
        this.apiUrl = 'https://apiitec2018tm.herokuapp.com';
    }
    QuizService.prototype.getQuestions = function (quizId) {
        return this.http.get(this.apiUrl + '/question/test/' + quizId);
    };
    QuizService.prototype.postResult = function (result) {
        return this.http.post(this.apiUrl + '/result', result);
    };
    QuizService.prototype.getQuizCompleted = function (email, quizId) {
        return this.http.get(this.apiUrl + '/result/' + email + '/' + quizId);
    };
    QuizService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuizService);
    return QuizService;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.routing-module */ "./src/app/user/user.routing-module.ts");
/* harmony import */ var _quiz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz.component */ "./src/app/user/quiz.component.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin/admin.module */ "./src/app/admin/admin.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__["AdminModule"],
            ],
            declarations: [
                _quiz_component__WEBPACK_IMPORTED_MODULE_5__["QuizComponent"],
            ],
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/user.routing-module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user.routing-module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quiz_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quiz.component */ "./src/app/user/quiz.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'quiz/:id/:email',
        component: _quiz_component__WEBPACK_IMPORTED_MODULE_2__["QuizComponent"]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map