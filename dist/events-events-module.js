(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"],{

/***/ "./src/app/admin/events/events-display.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/events/events-display.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n        <div class=\"col-md-6\" *ngFor=\"let event of events\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h3 class=\"card-title\">{{event}}</h3>\r\n                    <h6 class=\"card-subtitle\">This is basic Default pagination</h6>\r\n                    <ngb-tabset>\r\n                      <ngb-tab title=\"Simple\">\r\n                        <ng-template ngbTabContent>\r\n                          <p class=\"p-t-20\">event description tab1</p>\r\n                        </ng-template>\r\n                      </ngb-tab>\r\n                      <ngb-tab>\r\n                        <ng-template ngbTabTitle><b>Fancy</b></ng-template>\r\n                        <ng-template ngbTabContent>\r\n                          <p class=\"p-t-20\">event descirption tab2</p>\r\n                        </ng-template>\r\n                      </ngb-tab>\r\n                      <ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n                        <ng-template ngbTabContent>\r\n                          <p class=\"p-t-20\">event descr tab3</p>\r\n                        </ng-template>\r\n                      </ngb-tab>\r\n                    </ngb-tabset>\r\n                  </div>\r\n            </div>\r\n        </div>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EventsDisplayComponent = /** @class */ (function () {
    function EventsDisplayComponent() {
        this.events = ['Event1', 'event2', 'event3'];
    }
    EventsDisplayComponent.prototype.beforeChange = function ($event) {
        if ($event.nextId === 'tab-preventchange2') {
            $event.preventDefault();
        }
    };
    ;
    EventsDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./events-display.component.html */ "./src/app/admin/events/events-display.component.html")
        })
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _events_routing_module__WEBPACK_IMPORTED_MODULE_1__["EventsRoutingModule"]
            ],
            declarations: [
                _events_display_component__WEBPACK_IMPORTED_MODULE_2__["EventsDisplayComponent"]
            ]
        })
    ], EventsModule);
    return EventsModule;
}());



/***/ })

}]);
//# sourceMappingURL=events-events-module.js.map