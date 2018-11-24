(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"],{

/***/ "./src/app/admin/events/events-create.component.html":
/*!***********************************************************!*\
  !*** ./src/app/admin/events/events-create.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <h3 class=\"card-title\">\r\n            Create new event\r\n        </h3>\r\n        <form class=\"form-horizontal form-material\" id=\"eventCreateForm\" (submit)=\"saveEvent()\" [formGroup]=\"eventCreateForm\">\r\n            <input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Name\" formControlName=\"name\">\r\n            <input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Description\" formControlName=\"description\">\r\n            <input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"StartDate\" formControlName=\"startDate\">\r\n            <input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"EndDate\" formControlName=\"endDate\">\r\n            <div class=\"text-center m-t-20\">\r\n                <button type=\"submit\" [disabled]=\"eventCreateForm.invalid\" class=\"btn btn-info btn-md btn-block text-uppercase waves-effect waves-light\">\r\n                    Save</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/events/events-create.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/events/events-create.component.ts ***!
  \*********************************************************/
/*! exports provided: EventsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsCreateComponent", function() { return EventsCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.service */ "./src/app/admin/events/events.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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




var EventsCreateComponent = /** @class */ (function () {
    function EventsCreateComponent(eventsService, router, route) {
        this.eventsService = eventsService;
        this.router = router;
        this.route = route;
    }
    EventsCreateComponent.prototype.ngOnInit = function () {
        this.eventCreateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            quizzes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.name = this.route.snapshot.paramMap.get('name');
        if (this.name) {
            this.getEventByName(this.name);
        }
    };
    EventsCreateComponent.prototype.addEvent = function () {
        var _this = this;
        this.eventsService.create(this.eventCreateForm.value)
            .subscribe(function (response) {
            console.log(response);
            _this.router.navigateByUrl('/admin/events');
        }, function (error) {
            console.log(error);
        });
    };
    EventsCreateComponent.prototype.saveEvent = function () {
        if (this.name) {
            this.updateEvent();
        }
        else {
            this.addEvent();
        }
    };
    EventsCreateComponent.prototype.updateEvent = function () {
        var _this = this;
        //const formValue = this.eventCreateForm.value;
        //const event = { name: formValue.name, description: formValue.description, startDate: formValue.startDate, endDate: formValue.endDate };
        this.eventsService.update(this.name, this.eventCreateForm.value)
            .subscribe(function (response) {
            console.log(response);
            _this.router.navigateByUrl('/admin/events');
        }, function (error) {
            console.log(error);
        });
    };
    EventsCreateComponent.prototype.getEventByName = function (name) {
        var _this = this;
        this.eventsService.getByName(name).subscribe(function (response) {
            console.log(response);
            _this.eventCreateForm.setValue(response);
        }, function (error) { return console.log(error); });
    };
    EventsCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events-create',
            template: __webpack_require__(/*! ./events-create.component.html */ "./src/app/admin/events/events-create.component.html")
        }),
        __metadata("design:paramtypes", [_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EventsCreateComponent);
    return EventsCreateComponent;
}());



/***/ }),

/***/ "./src/app/admin/events/events-display.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/events/events-display.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <a routerLink=\"/admin/events/create\" class=\"btn btn-info btn-large\">Create new event</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\" *ngFor=\"let event of events\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h3 class=\"card-title\">\r\n          {{event.name}}\r\n          <div style=\"float:right;\">\r\n              <button type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"editEvent(event.name)\">Edit</button>\r\n              <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"deleteEvent(event.name)\">Delete</button>\r\n          </div>\r\n        </h3>\r\n        <h6 class=\"card-subtitle\">{{event.description}}</h6>\r\n        <ngb-tabset>\r\n          <ngb-tab title=\"Dates\">\r\n            <ng-template ngbTabContent>\r\n              <p class=\"p-t-20\">Begins: {{event.startDate}}</p>\r\n              <p class=\"p-t-20\">Ends: {{event.endDate}}</p>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Leaderboard</b></ng-template>\r\n            <ng-template ngbTabContent>\r\n              <p class=\"p-t-20\">Leaderboard</p>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Statistics\">\r\n            <ng-template ngbTabContent>\r\n              <p class=\"p-t-20\">Statistics</p>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/admin/events/events-display.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/events/events-display.component.ts ***!
  \**********************************************************/
/*! exports provided: EventsDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsDisplayComponent", function() { return EventsDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.service */ "./src/app/admin/events/events.service.ts");
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



var EventsDisplayComponent = /** @class */ (function () {
    function EventsDisplayComponent(eventsService, router) {
        this.eventsService = eventsService;
        this.router = router;
    }
    EventsDisplayComponent.prototype.beforeChange = function ($event) {
        if ($event.nextId === 'tab-preventchange2') {
            $event.preventDefault();
        }
    };
    ;
    EventsDisplayComponent.prototype.getAll = function () {
        var _this = this;
        this.eventsService.getAll().subscribe(function (events) {
            _this.events = events;
        }, function (error) {
            console.log(error);
        });
    };
    EventsDisplayComponent.prototype.deleteEvent = function (name) {
        var _this = this;
        this.eventsService.delete(name).subscribe(function (_) {
            _this.getAll();
        }, function (error) {
            console.log(error);
        });
    };
    EventsDisplayComponent.prototype.editEvent = function (name) {
        this.router.navigateByUrl('/admin/events/create/' + name);
    };
    EventsDisplayComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    EventsDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./events-display.component.html */ "./src/app/admin/events/events-display.component.html")
        }),
        __metadata("design:paramtypes", [_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EventsDisplayComponent);
    return EventsDisplayComponent;
}());



/***/ }),

/***/ "./src/app/admin/events/events-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/events/events-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EventsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsRoutingModule", function() { return EventsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _events_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events-display.component */ "./src/app/admin/events/events-display.component.ts");
/* harmony import */ var _events_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-create.component */ "./src/app/admin/events/events-create.component.ts");
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
            title: 'Events - Display',
            urls: [{ title: 'Dashboard', url: '/' }, { title: 'ngComponent' }, { title: 'Tabs' }]
        },
        component: _events_display_component__WEBPACK_IMPORTED_MODULE_2__["EventsDisplayComponent"],
    },
    {
        path: 'create',
        component: _events_create_component__WEBPACK_IMPORTED_MODULE_3__["EventsCreateComponent"]
    },
    {
        path: 'create/:name',
        component: _events_create_component__WEBPACK_IMPORTED_MODULE_3__["EventsCreateComponent"]
    }
];
var EventsRoutingModule = /** @class */ (function () {
    function EventsRoutingModule() {
    }
    EventsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EventsRoutingModule);
    return EventsRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/events/events.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/events/events.module.ts ***!
  \***********************************************/
/*! exports provided: EventsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsModule", function() { return EventsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _events_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events-routing.module */ "./src/app/admin/events/events-routing.module.ts");
/* harmony import */ var _events_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events-display.component */ "./src/app/admin/events/events-display.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _events_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events-create.component */ "./src/app/admin/events/events-create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EventsModule = /** @class */ (function () {
    function EventsModule() {
    }
    EventsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _events_routing_module__WEBPACK_IMPORTED_MODULE_1__["EventsRoutingModule"]
            ],
            declarations: [
                _events_display_component__WEBPACK_IMPORTED_MODULE_2__["EventsDisplayComponent"],
                _events_create_component__WEBPACK_IMPORTED_MODULE_6__["EventsCreateComponent"]
            ]
        })
    ], EventsModule);
    return EventsModule;
}());



/***/ }),

/***/ "./src/app/admin/events/events.service.ts":
/*!************************************************!*\
  !*** ./src/app/admin/events/events.service.ts ***!
  \************************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
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


var EventsService = /** @class */ (function () {
    function EventsService(http) {
        this.http = http;
        this.apiUrl = 'https://apiitec2018tm.herokuapp.com/event/';
    }
    EventsService.prototype.getAll = function () {
        return this.http.get(this.apiUrl);
    };
    EventsService.prototype.delete = function (name) {
        return this.http.delete(this.apiUrl + name);
    };
    EventsService.prototype.getByName = function (name) {
        return this.http.get(this.apiUrl + name);
    };
    EventsService.prototype.create = function (event) {
        return this.http.post(this.apiUrl, event);
    };
    EventsService.prototype.update = function (name, event) {
        return this.http.put(this.apiUrl + name, event);
    };
    EventsService.prototype.ngOnInit = function () {
    };
    EventsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EventsService);
    return EventsService;
}());



/***/ })

}]);
//# sourceMappingURL=events-events-module.js.map