(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["questions-questions-module"],{

/***/ "./src/app/admin/questions/questions-create.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/admin/questions/questions-create.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <h3 class=\"card-title\">\r\n            Create new question\r\n        </h3>\r\n        <form class=\"form-horizontal form-material\" id=\"questionCreateForm\" (submit)=\"saveQuestion()\" [formGroup]=\"questionCreateForm\">\r\n            <select class=\"form-control\" formControlName=\"category\" title=\"Category\">\r\n                <option value=\"\" disabled selected>Category</option>\r\n                <option>SCIENCE</option>\r\n                <option>FOOTBALL</option>\r\n                <option>HISTORY </option>\r\n                <option>MATH</option>\r\n            </select>\r\n            <select class=\"form-control\" formControlName=\"difficulty\" title=\"Difficulty\">\r\n                <option value=\"\" disabled selected>Difficulty</option>\r\n                <option>BEGINNER</option>\r\n                <option>EASY</option>\r\n                <option>MEDIUM</option>\r\n                <option>HARD</option>\r\n                <option>LEGEND</option>\r\n            </select>\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Text\" formControlName=\"text\" title=\"Text\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Image\" formControlName=\"image\" title=\"Image\">\r\n            <input class=\"form-control\" type=\"number\" placeholder=\"Time\" formControlName=\"time\" title=\"Time\">\r\n            <input class=\"form-control\" type=\"number\" placeholder=\"Score\" formControlName=\"score\" title=\"Score\">\r\n            <hr />\r\n            <fieldset formArrayName=\"answersList\">\r\n                <h4>Answers: </h4>\r\n                <div class=\"form-group row\" *ngFor=\"let answer of questionCreateForm.get('answersList').controls; let i=index\"\r\n                    [formGroup]=\"answer\">\r\n                    <div class=\"col-md-9\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"value\" placeholder=\"Text\">\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <select formControlName=\"correct\" placeholder=\"Is Correct\" class=\"form-control\">\r\n                            <option>true</option>\r\n                            <option>false</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-sm-1 py-1\">\r\n                        <button type=\"button\" class=\"btn\" (click)=\"questionCreateForm.get('answersList').removeAt(i)\">-</button>\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-sm-2 col-sm-offset-10\">\r\n                    <div class=\"form-group row\" >\r\n                        <button type=\"button\" class=\"btn btn-link\" (click)=\"addNewAnswer()\">+</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"text-center m-t-20\">\r\n                <button type=\"submit\" [disabled]=\"questionCreateForm.invalid\" class=\"btn btn-info btn-md btn-block text-uppercase waves-effect waves-light\">\r\n                    Save</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/questions/questions-create.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/questions/questions-create.component.ts ***!
  \***************************************************************/
/*! exports provided: QuestionsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsCreateComponent", function() { return QuestionsCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questions.service */ "./src/app/admin/questions/questions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionsCreateComponent = /** @class */ (function () {
    function QuestionsCreateComponent(questionsService, router, route) {
        this.questionsService = questionsService;
        this.router = router;
        this.route = route;
    }
    QuestionsCreateComponent.prototype.ngOnInit = function () {
        this.questionCreateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            quizId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            answersList: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]),
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            difficulty: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            score: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        if (this.id) {
            this.getQuestionById(this.id);
        }
    };
    QuestionsCreateComponent.prototype.addNewAnswer = function () {
        this.questionCreateForm.get('answersList').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            correct: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        }));
    };
    QuestionsCreateComponent.prototype.addQuestion = function () {
        var _this = this;
        console.log(this.questionCreateForm.value);
        this.questionsService.create(this.questionCreateForm.value)
            .subscribe(function (response) {
            console.log(response);
            _this.router.navigateByUrl('/admin/questions');
        }, function (error) {
            console.log(error);
        });
    };
    QuestionsCreateComponent.prototype.saveQuestion = function () {
        if (this.id) {
            this.updateQuestion();
        }
        else {
            this.addQuestion();
        }
    };
    QuestionsCreateComponent.prototype.updateQuestion = function () {
        var _this = this;
        this.questionsService.update(this.id, this.questionCreateForm.value)
            .subscribe(function (response) {
            _this.router.navigateByUrl('/admin/questions');
        }, function (error) {
            console.log(error);
        });
    };
    QuestionsCreateComponent.prototype.getQuestionById = function (id) {
        var _this = this;
        this.questionsService.getById(id).subscribe(function (response) {
            var question = response;
            console.log(question);
            _this.questionCreateForm.get('text').setValue(question.text);
            _this.questionCreateForm.get('image').setValue(question.image);
            _this.questionCreateForm.get('time').setValue(question.time);
            _this.questionCreateForm.get('difficulty').setValue(question.difficulty);
            _this.questionCreateForm.get('score').setValue(question.score);
            _this.questionCreateForm.get('category').setValue(question.category);
            for (var index = 0; index < question.answersList.length; index++) {
                _this.questionCreateForm.get('answersList').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](question.answersList[index].value),
                    correct: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](question.answersList[index].correct)
                }));
            }
        }, function (error) { return console.log(error); });
    };
    QuestionsCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./questions-create.component.html */ "./src/app/admin/questions/questions-create.component.html")
        }),
        __metadata("design:paramtypes", [_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], QuestionsCreateComponent);
    return QuestionsCreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/questions/questions-display.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/questions/questions-display.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <a routerLink=\"/admin/questions/create\" class=\"btn btn-info btn-large\">Create new question</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"categories\">\r\n    <div class=\"row\" *ngFor=\"let category of categories\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h3 class=\"card-title\">{{category}} </h3>\r\n                    <form role=\"search\" class=\"app-search hidden-sm-down\">\r\n                        <input type=\"text\" placeholder=\"Search...\" class=\"form-control\"> <a href=\"\"><i class=\"fa fa-search\"></i></a>\r\n                    </form>\r\n                    <ngb-accordion #acc=\"ngbAccordion\">\r\n                        <span *ngFor=\"let question of questions[category]\">\r\n                            <ngb-panel [id]=\"question.text\" [title]=\"question.text\">\r\n                                <ng-template ngbPanelContent>\r\n                                    <button type=\"button\" style=\"margin-right:5px;\" class=\"btn btn-warning btn-sm\"\r\n                                        (click)=\"editQuestion(question.id)\">Edit</button>\r\n                                    <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteQuestion(question.id)\">Delete</button>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div><label class=\"control-label\">Time: {{question.time}}</label></div>\r\n                                            <div><label class=\"control-label\">Difficulty: {{question.difficulty}}</label></div>\r\n                                            <div><label class=\"control-label\">Score: {{question.score}}</label></div>\r\n                                            <div><label class=\"control-label\">Category: {{question.category}}</label></div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\"><img [src]=\"question.image\" alt=\"question image\" style=\"max-height:100px\" /></div>\r\n                                    </div>\r\n                                    <h4>Answers</h4>\r\n                                    <div class=\"row\">\r\n                                        <div  class=\"col-md-6\" *ngFor=\"let answer of question.answersList\">\r\n                                            <div [ngClass]=\"answer.correct ? 'text-success' : 'text-danger'\">{{answer.value}}</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </ngb-panel>\r\n                        </span>\r\n                    </ngb-accordion>\r\n                    <!-- <p>\r\n                    <button class=\"btn btn-sm btn-outline-primary\" (click)=\"acc.toggle('toggle-1')\">Toggle first</button>\r\n                    <button class=\"btn btn-sm btn-outline-primary\" (click)=\"acc.toggle('toggle-2')\">Toggle second</button>\r\n                </p> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/questions/questions-display.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/questions/questions-display.component.ts ***!
  \****************************************************************/
/*! exports provided: QuestionsDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsDisplayComponent", function() { return QuestionsDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions.service */ "./src/app/admin/questions/questions.service.ts");
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



var QuestionsDisplayComponent = /** @class */ (function () {
    function QuestionsDisplayComponent(questionsService, router) {
        this.questionsService = questionsService;
        this.router = router;
    }
    QuestionsDisplayComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            console.log('if 1');
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            console.log('if2');
            $event.preventDefault();
        }
    };
    QuestionsDisplayComponent.prototype.getAll = function () {
        var _this = this;
        this.questionsService.getAll()
            .subscribe(function (questions) {
            _this.questions = questions;
            _this.categories = [];
            for (var category in _this.questions) {
                _this.categories.push(category);
            }
        }, function (error) {
            console.log(error);
        });
    };
    QuestionsDisplayComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    QuestionsDisplayComponent.prototype.editQuestion = function (id) {
        this.router.navigateByUrl('/admin/questions/create/' + id);
    };
    QuestionsDisplayComponent.prototype.deleteQuestion = function (id) {
        var _this = this;
        this.questionsService.delete(id).subscribe(function (_) {
            _this.getAll();
        }, function (error) {
            console.log(error);
        });
    };
    QuestionsDisplayComponent.prototype.searchByText = function (category, text) {
        var myquestions = this.questions[category];
        var m = myquestions.find(function (q) { return q.text.indexOf(text) > -1; });
        console.log(m);
    };
    QuestionsDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./questions-display.component.html */ "./src/app/admin/questions/questions-display.component.html")
        }),
        __metadata("design:paramtypes", [_questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuestionsDisplayComponent);
    return QuestionsDisplayComponent;
}());



/***/ }),

/***/ "./src/app/admin/questions/questions-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/questions/questions-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: QuestionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsRoutingModule", function() { return QuestionsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _questions_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions-display.component */ "./src/app/admin/questions/questions-display.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _questions_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questions-create.component */ "./src/app/admin/questions/questions-create.component.ts");
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
            title: 'Questions - Display',
            urls: [{ title: 'Dashboard', url: '/' }, { title: 'ngComponent' }, { title: 'Accordion' }]
        },
        component: _questions_display_component__WEBPACK_IMPORTED_MODULE_2__["QuestionsDisplayComponent"],
    },
    {
        path: 'create',
        component: _questions_create_component__WEBPACK_IMPORTED_MODULE_6__["QuestionsCreateComponent"]
    },
    {
        path: 'create/:id',
        component: _questions_create_component__WEBPACK_IMPORTED_MODULE_6__["QuestionsCreateComponent"]
    }
];
var QuestionsRoutingModule = /** @class */ (function () {
    function QuestionsRoutingModule() {
    }
    QuestionsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], QuestionsRoutingModule);
    return QuestionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/questions/questions.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/questions/questions.module.ts ***!
  \*****************************************************/
/*! exports provided: QuestionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsModule", function() { return QuestionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _questions_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions-display.component */ "./src/app/admin/questions/questions-display.component.ts");
/* harmony import */ var _questions_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questions-routing.module */ "./src/app/admin/questions/questions-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _questions_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questions-create.component */ "./src/app/admin/questions/questions-create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var QuestionsModule = /** @class */ (function () {
    function QuestionsModule() {
    }
    QuestionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _questions_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuestionsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
            ],
            declarations: [
                _questions_display_component__WEBPACK_IMPORTED_MODULE_2__["QuestionsDisplayComponent"],
                _questions_create_component__WEBPACK_IMPORTED_MODULE_6__["QuestionsCreateComponent"]
            ]
        })
    ], QuestionsModule);
    return QuestionsModule;
}());



/***/ }),

/***/ "./src/app/admin/questions/questions.service.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/questions/questions.service.ts ***!
  \******************************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionsService = /** @class */ (function () {
    function QuestionsService(http) {
        this.http = http;
        this.apiUrl = 'https://apiitec2018tm.herokuapp.com/question/';
    }
    QuestionsService.prototype.getAll = function () {
        return this.http.get(this.apiUrl);
    };
    QuestionsService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + id);
    };
    QuestionsService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + id);
    };
    QuestionsService.prototype.create = function (question) {
        return this.http.post(this.apiUrl, question);
    };
    QuestionsService.prototype.update = function (id, question) {
        return this.http.put(this.apiUrl + id, question);
    };
    QuestionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], QuestionsService);
    return QuestionsService;
}());



/***/ })

}]);
//# sourceMappingURL=questions-questions-module.js.map