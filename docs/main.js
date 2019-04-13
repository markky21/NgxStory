(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9OZ3hTdG9yeS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(RoutingService) {
        this.RoutingService = RoutingService;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/components/content/content.component.ts");
/* harmony import */ var _components_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/iframe/iframe.component */ "./src/app/components/iframe/iframe.component.ts");
/* harmony import */ var _components_iframe_iframe_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/iframe/iframe.service */ "./src/app/components/iframe/iframe.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_nav_tree_nav_tree_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nav-tree/nav-tree.component */ "./src/app/components/nav-tree/nav-tree.component.ts");
/* harmony import */ var _playground_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./playground.routing */ "./src/app/playground.routing.ts");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tab/tab.component */ "./src/app/components/tab/tab.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_stories_wrapper_stories_wrapper_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/stories-wrapper/stories-wrapper.component */ "./src/app/components/stories-wrapper/stories-wrapper.component.ts");
/* harmony import */ var _shared_services_app_communication_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/services/app-communication.service */ "./src/app/shared/services/app-communication.service.ts");
/* harmony import */ var _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");
/* harmony import */ var _components_viewport_customizer_viewport_customizer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/viewport-customizer/viewport-customizer.component */ "./src/app/components/viewport-customizer/viewport-customizer.component.ts");
/* harmony import */ var _components_story_wrapper_story_wrapper_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/story-wrapper/story-wrapper.module */ "./src/app/components/story-wrapper/story-wrapper.module.ts");














// Additional Imports






var additionalModules = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
                _components_nav_tree_nav_tree_component__WEBPACK_IMPORTED_MODULE_11__["NavTreeComponent"],
                _components_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_7__["IframeComponent"],
                _components_content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"],
                _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_13__["TabComponent"],
                _components_stories_wrapper_stories_wrapper_component__WEBPACK_IMPORTED_MODULE_15__["StoriesWrapperComponent"],
                _components_viewport_customizer_viewport_customizer_component__WEBPACK_IMPORTED_MODULE_18__["ViewportCustomizerComponent"]
            ],
            providers: [_components_iframe_iframe_service__WEBPACK_IMPORTED_MODULE_8__["IframeService"], _shared_services_app_communication_service__WEBPACK_IMPORTED_MODULE_16__["AppCommunicationService"], _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_17__["RoutingService"]],
            imports: additionalModules.concat([
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
                _playground_routing__WEBPACK_IMPORTED_MODULE_12__["NgxStoryRouting"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _components_story_wrapper_story_wrapper_module__WEBPACK_IMPORTED_MODULE_19__["StoryWrapperModule"]
            ]),
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/content/content.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/content/content.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main id=\"main\">\n  <section id=\"iframe\">\n    <ngx-story-iframe></ngx-story-iframe>\n  </section>\n  <aside id=\"config\">\n    <ngx-story-tab></ngx-story-tab>\n  </aside>\n</main>\n"

/***/ }),

/***/ "./src/app/components/content/content.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/content/content.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/******************************\n  Layout Grid\n******************************/\n#main {\n  height: 100%;\n  width: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr;\n  -ms-grid-rows: 1fr 300px;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 300px;\n  padding: -4px -4px;\n  grid-template-areas: 'iframe' 'config'; }\n@supports (grid-gap: 8px) {\n    #main {\n      padding: 0 0;\n      grid-gap: 8px 8px; } }\n#iframe {\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n  -ms-grid-row-span: 1;\n  -ms-grid-column-span: 1;\n  grid-column: 1;\n  grid-row: 1;\n  grid-column-end: span 1;\n  grid-row-end: span 1;\n  grid-area: iframe;\n  padding: 4px;\n  overflow: scroll; }\n@supports (grid-gap: 8px) {\n    #iframe {\n      padding: 0; } }\n#config {\n  -ms-grid-row: 2;\n  -ms-grid-column: 1;\n  -ms-grid-row-span: 1;\n  -ms-grid-column-span: 1;\n  grid-column: 1;\n  grid-row: 2;\n  grid-column-end: span 1;\n  grid-row-end: span 1;\n  grid-area: config;\n  padding: 4px; }\n@supports (grid-gap: 8px) {\n    #config {\n      padding: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1Byb2plY3RzL1dvcmsvTmd4U3Rvcnlib29rL3Byb2plY3RzL05neFN0b3J5L3NyYy9zdHlsZXMvX21peGlucy5zY3NzIiwicHJvamVjdHMvTmd4U3Rvcnkvc3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyIsIi9Wb2x1bWVzL1Byb2plY3RzL1dvcmsvTmd4U3Rvcnlib29rL3Byb2plY3RzL05neFN0b3J5L3NyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzhCQ0M4QjtBQ0E5QjtFQUNFLFlBQVk7RUFDWixXQUFXO0VGQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixxQkVGb0M7RUZHcEMsd0JFSCtCO0VGSS9CLDBCRUpvQztFRktwQyw2QkVMK0I7RUZPL0Isa0JBQWdGO0VFTmhGLHNDQUVVLEVBQUE7QUZLcUI7SUVYakM7TUZZSSxZQVYrRTtNQVcvRSxpQkFBbUMsRUFBQSxFRU50QztBQUVEO0VGU0UsZUVSNEI7RUZTNUIsa0JFVCtCO0VGVS9CLG9CQUhpRDtFQUlqRCx1QkFKK0Q7RUFNL0QsY0ViK0I7RUZjL0IsV0VkNEI7RUZlNUIsdUJBUitEO0VBUy9ELG9CQVRpRDtFQVVqRCxpQkVqQnlCO0VGbUJ6QixZQUFzQjtFRWxCdEIsZ0JBQWdCLEVBQUE7QUZtQmU7SUVyQmpDO01Gc0JJLFVBQVUsRUFBQSxFRW5CYjtBQUVEO0VGSUUsZUVINEI7RUZJNUIsa0JFSitCO0VGSy9CLG9CQUhpRDtFQUlqRCx1QkFKK0Q7RUFNL0QsY0VSK0I7RUZTL0IsV0VUNEI7RUZVNUIsdUJBUitEO0VBUy9ELG9CQVRpRDtFQVVqRCxpQkVaeUI7RUZjekIsWUFBc0IsRUFBQTtBQUNTO0lFaEJqQztNRmlCSSxVQUFVLEVBQUEsRUVmYiIsImZpbGUiOiJwcm9qZWN0cy9OZ3hTdG9yeS9zcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIExheW91dCBHcmlkXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWl4aW4gZGlzcGxheS1ncmlkKCRyb3dzLCAkY29sdW1ucywgJHBhZGRpbmctdG9wLWJvdHRvbTogMCwgJHBhZGRpbmctbGVmdC1yaWdodDogMCwgJGdyaWQtZ2FwOiA4cHgpIHtcbiAgZGlzcGxheTogLW1zLWdyaWQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIC1tcy1ncmlkLWNvbHVtbnM6ICRjb2x1bW5zO1xuICAtbXMtZ3JpZC1yb3dzOiAkcm93cztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAkY29sdW1ucztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAkcm93cztcblxuICBwYWRkaW5nOiAoJHBhZGRpbmctdG9wLWJvdHRvbSAtICRncmlkLWdhcC8yKSAoJHBhZGRpbmctbGVmdC1yaWdodCAtICRncmlkLWdhcC8yKTtcbiAgQHN1cHBvcnRzIChncmlkLWdhcDogJGdyaWQtZ2FwKSB7XG4gICAgcGFkZGluZzogJHBhZGRpbmctdG9wLWJvdHRvbSAkcGFkZGluZy1sZWZ0LXJpZ2h0O1xuICAgIGdyaWQtZ2FwOiAjeyRncmlkLWdhcH0gI3skZ3JpZC1nYXB9O1xuICB9XG59XG5cbkBtaXhpbiBncmlkLWNlbGwoJGFyZWEsICRyb3csICRjb2x1bW4sICRyb3ctc3BhbjogMSwgJGNvbC1zcGFuOiAxLCAkZ3JpZC1nYXA6IDhweCkge1xuICAtbXMtZ3JpZC1yb3c6ICRyb3c7XG4gIC1tcy1ncmlkLWNvbHVtbjogJGNvbHVtbjtcbiAgLW1zLWdyaWQtcm93LXNwYW46ICRyb3ctc3BhbjtcbiAgLW1zLWdyaWQtY29sdW1uLXNwYW46ICRjb2wtc3BhbjtcblxuICBncmlkLWNvbHVtbjogJGNvbHVtbjtcbiAgZ3JpZC1yb3c6ICRyb3c7XG4gIGdyaWQtY29sdW1uLWVuZDogc3BhbiAkY29sLXNwYW47XG4gIGdyaWQtcm93LWVuZDogc3BhbiAkcm93LXNwYW47XG4gIGdyaWQtYXJlYTogJGFyZWE7XG5cbiAgcGFkZGluZzogJGdyaWQtZ2FwIC8gMjtcbiAgQHN1cHBvcnRzIChncmlkLWdhcDogJGdyaWQtZ2FwKSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG5AbWl4aW4gZ3JpZC1jZWxsLWFsaWduZWQtdG8taW5wdXQoJHZhbHVlOiAkc3RvcnlhcHAtY29sdW1ucy1nYXApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCR2YWx1ZSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuQG1peGluIGdyaWQtY2VsbC1qdXN0aWZ5LWVuZCgpIHtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICA+ICoge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG59XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIExheW91dCBHcmlkXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4jbWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IC1tcy1ncmlkO1xuICBkaXNwbGF5OiBncmlkO1xuICAtbXMtZ3JpZC1jb2x1bW5zOiAxZnI7XG4gIC1tcy1ncmlkLXJvd3M6IDFmciAzMDBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDMwMHB4O1xuICBwYWRkaW5nOiAtNHB4IC00cHg7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdpZnJhbWUnICdjb25maWcnOyB9XG4gIEBzdXBwb3J0cyAoZ3JpZC1nYXA6IDhweCkge1xuICAgICNtYWluIHtcbiAgICAgIHBhZGRpbmc6IDAgMDtcbiAgICAgIGdyaWQtZ2FwOiA4cHggOHB4OyB9IH1cblxuI2lmcmFtZSB7XG4gIC1tcy1ncmlkLXJvdzogMTtcbiAgLW1zLWdyaWQtY29sdW1uOiAxO1xuICAtbXMtZ3JpZC1yb3ctc3BhbjogMTtcbiAgLW1zLWdyaWQtY29sdW1uLXNwYW46IDE7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiBzcGFuIDE7XG4gIGdyaWQtcm93LWVuZDogc3BhbiAxO1xuICBncmlkLWFyZWE6IGlmcmFtZTtcbiAgcGFkZGluZzogNHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsOyB9XG4gIEBzdXBwb3J0cyAoZ3JpZC1nYXA6IDhweCkge1xuICAgICNpZnJhbWUge1xuICAgICAgcGFkZGluZzogMDsgfSB9XG5cbiNjb25maWcge1xuICAtbXMtZ3JpZC1yb3c6IDI7XG4gIC1tcy1ncmlkLWNvbHVtbjogMTtcbiAgLW1zLWdyaWQtcm93LXNwYW46IDE7XG4gIC1tcy1ncmlkLWNvbHVtbi1zcGFuOiAxO1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDI7XG4gIGdyaWQtY29sdW1uLWVuZDogc3BhbiAxO1xuICBncmlkLXJvdy1lbmQ6IHNwYW4gMTtcbiAgZ3JpZC1hcmVhOiBjb25maWc7XG4gIHBhZGRpbmc6IDRweDsgfVxuICBAc3VwcG9ydHMgKGdyaWQtZ2FwOiA4cHgpIHtcbiAgICAjY29uZmlnIHtcbiAgICAgIHBhZGRpbmc6IDA7IH0gfVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9taXhpbnNcIjtcblxuI21haW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBAaW5jbHVkZSBkaXNwbGF5LWdyaWQoMWZyIDMwMHB4LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICdpZnJhbWUnXG4gICAgJ2NvbmZpZyc7XG59XG5cbiNpZnJhbWUge1xuICBAaW5jbHVkZSBncmlkLWNlbGwoaWZyYW1lLCAxLCAxKTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuI2NvbmZpZyB7XG4gIEBpbmNsdWRlIGdyaWQtY2VsbChjb25maWcsIDIsIDEpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/content/content.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/content/content.component.ts ***!
  \*********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'storyapp-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/components/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/components/content/content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/components/iframe/iframe.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/iframe/iframe.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe\n  #iframe\n  [attr.src]=\"storyRoute\"\n  [height]=\"!deviceViewPort.orientationHorizontal ? deviceViewPort.width : deviceViewPort.height\"\n  [width]=\"!deviceViewPort.orientationHorizontal ? deviceViewPort.height : deviceViewPort.width\"\n  webkitallowfullscreen mozallowfullscreen allowfullscreen\n  id=\"Iframe\"\n></iframe>\n"

/***/ }),

/***/ "./src/app/components/iframe/iframe.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/iframe/iframe.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Iframe {\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1Byb2plY3RzL1dvcmsvTmd4U3Rvcnlib29rL3Byb2plY3RzL05neFN0b3J5L3NyYy9hcHAvY29tcG9uZW50cy9pZnJhbWUvaWZyYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InByb2plY3RzL05neFN0b3J5L3NyYy9hcHAvY29tcG9uZW50cy9pZnJhbWUvaWZyYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI0lmcmFtZSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/iframe/iframe.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/iframe/iframe.component.ts ***!
  \*******************************************************/
/*! exports provided: IframeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeComponent", function() { return IframeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _iframe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iframe.service */ "./src/app/components/iframe/iframe.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");





var IframeComponent = /** @class */ (function () {
    function IframeComponent(iframeService, sanitizer) {
        var _this = this;
        this.iframeService = iframeService;
        this.sanitizer = sanitizer;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.storyRoute = sanitizer.bypassSecurityTrustResourceUrl(window.origin + '/story/sample-story'); // TODO move to global settings
        this.currentRoute$ = this.iframeService.getCurrentRoute();
        this.subscriptions.add(this.iframeService.getDeviceVewPort().subscribe(function (device) {
            _this.deviceViewPort = device;
        }));
    }
    Object.defineProperty(IframeComponent.prototype, "iframeSetter", {
        set: function (iframe) {
            this.iframe = iframe;
            this.iframeService.initIframe(iframe);
        },
        enumerable: true,
        configurable: true
    });
    IframeComponent.prototype.ngOnInit = function () {
        console.log(this.iframe);
    };
    IframeComponent.prototype.ngOnDestroy = function () {
        this.iframeService.unmountIframe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('iframe'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], IframeComponent.prototype, "iframeSetter", null);
    IframeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-story-iframe',
            template: __webpack_require__(/*! ./iframe.component.html */ "./src/app/components/iframe/iframe.component.html"),
            styles: [__webpack_require__(/*! ./iframe.component.scss */ "./src/app/components/iframe/iframe.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_iframe_service__WEBPACK_IMPORTED_MODULE_3__["IframeService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], IframeComponent);
    return IframeComponent;
}());



/***/ }),

/***/ "./src/app/components/iframe/iframe.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/iframe/iframe.service.ts ***!
  \*****************************************************/
/*! exports provided: Devices, IframeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Devices", function() { return Devices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeService", function() { return IframeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "../../node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "../../node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_services_app_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/app-communication.service */ "./src/app/shared/services/app-communication.service.ts");





var Devices = [
    {
        name: 'Desktop responsive',
        width: '100%',
        height: '100%',
        orientationHorizontal: true
    },
    {
        name: 'Desktop HD',
        width: '1200px',
        height: '100%',
        orientationHorizontal: true
    },
    {
        name: 'iPhoneX',
        width: '812px',
        height: '375px',
        orientationHorizontal: false
    },
    {
        name: 'iPhone 6/7/8 Plus',
        width: '736px',
        height: '414px',
        orientationHorizontal: false
    }
];
var IframeService = /** @class */ (function () {
    function IframeService(appCommunicationService) {
        var _this = this;
        this.appCommunicationService = appCommunicationService;
        this.deviceViewPort$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](Devices[0]);
        this.currentRoute$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.currentDevice$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentDevice$.subscribe(function (value) {
            _this.currentDevice = value;
        });
    }
    IframeService.prototype.initIframe = function (iframe) {
        this.iframe = iframe;
        this.setDevice(Devices[0]);
        this.appCommunicationService.initCommunicationWithChild(iframe);
    };
    IframeService.prototype.setDevice = function (device) {
        this.currentDevice$.next(device);
        this.setDeviceVewPort(device);
    };
    IframeService.prototype.getCurrentRoute = function () {
        return this.currentRoute$.asObservable();
    };
    IframeService.prototype.getDeviceVewPort = function () {
        return this.deviceViewPort$.asObservable();
    };
    IframeService.prototype.getCurrentViewPort = function () {
        return this.deviceViewPort$.value;
    };
    IframeService.prototype.getDevicesSelectOption = function () {
        var options = [];
        Devices.forEach(function (device) {
            options.push({ viewValue: device.name, value: device });
        });
        return options;
    };
    IframeService.prototype.setDeviceVewPort = function (device) {
        this.deviceViewPort$.next(device);
    };
    IframeService.prototype.unmountIframe = function () { };
    IframeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_app_communication_service__WEBPACK_IMPORTED_MODULE_4__["AppCommunicationService"]])
    ], IframeService);
    return IframeService;
}());



/***/ }),

/***/ "./src/app/components/nav-tree/nav-tree.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/nav-tree/nav-tree.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding=\"8px\" matTreeNodePaddingIndent=\"16px\">\n    <button mat-button (click)=\"setRouteInIframe(node.route)\">\n      <mat-icon class=\"type-icon\" [attr.aria-label]=\"node.type + 'icon'\">\n        {{ node.type === 'file' ? 'description' : 'folder' }}\n      </mat-icon>\n      {{node.name}}\n    </button>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding=\"8px\" matTreeNodePaddingIndent=\"16px\">\n    <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n\n    <button mat-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\n      <mat-icon class=\"type-icon\" [attr.aria-label]=\"node.type + 'icon'\">\n        {{ node.type === 'file' ? 'description' : 'folder' }}\n      </mat-icon>\n      {{node.name}}\n    </button>\n\n  </mat-tree-node>\n</mat-tree>\n"

/***/ }),

/***/ "./src/app/components/nav-tree/nav-tree.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/nav-tree/nav-tree.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".type-icon {\n  color: #757575;\n  margin-right: 0px; }\n\n.mat-button:not(:last-child),\n.mat-raised-button:not(:last-child),\n.mat-icon-button:not(:last-child),\n.mat-stroked-button:not(:last-child),\n.mat-flat-button:not(:last-child),\n.mat-fab:not(:last-child),\n.mat-mini-fab:not(:last-child) {\n  margin-right: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1Byb2plY3RzL1dvcmsvTmd4U3Rvcnlib29rL3Byb2plY3RzL05neFN0b3J5L3NyYy9hcHAvY29tcG9uZW50cy9uYXYtdHJlZS9uYXYtdHJlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHbkI7Ozs7Ozs7RUFPRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9OZ3hTdG9yeS9zcmMvYXBwL2NvbXBvbmVudHMvbmF2LXRyZWUvbmF2LXRyZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHlwZS1pY29uIHtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4ubWF0LWJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpLFxuLm1hdC1yYWlzZWQtYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCksXG4ubWF0LWljb24tYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCksXG4ubWF0LXN0cm9rZWQtYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCksXG4ubWF0LWZsYXQtYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCksXG4ubWF0LWZhYjpub3QoOmxhc3QtY2hpbGQpLFxuLm1hdC1taW5pLWZhYjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/nav-tree/nav-tree.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-tree/nav-tree.component.ts ***!
  \***********************************************************/
/*! exports provided: NavTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavTreeComponent", function() { return NavTreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _stories_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../stories.config */ "./src/stories.config.ts");
/* harmony import */ var _shared_services_app_communication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/app-communication.service */ "./src/app/shared/services/app-communication.service.ts");







var NavTreeComponent = /** @class */ (function () {
    function NavTreeComponent(appCommunicationService) {
        this.appCommunicationService = appCommunicationService;
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.dataSource.data = _stories_config__WEBPACK_IMPORTED_MODULE_5__["storiesSideNav"];
    }
    /** Transform the data to something the tree can read. */
    NavTreeComponent.prototype.transformer = function (node, level) {
        return {
            name: node.name,
            type: node.type,
            route: node.route,
            level: level,
            expandable: !!node.children
        };
    };
    /** Get the level of the node */
    NavTreeComponent.prototype.getLevel = function (node) {
        return node.level;
    };
    /** Get whether the node is expanded or not. */
    NavTreeComponent.prototype.isExpandable = function (node) {
        return node.expandable;
    };
    /** Get whether the node has children or not. */
    NavTreeComponent.prototype.hasChild = function (index, node) {
        return node.expandable;
    };
    /** Get the children for the node. */
    NavTreeComponent.prototype.getChildren = function (node) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(node.children);
    };
    NavTreeComponent.prototype.setRouteInIframe = function (route) {
        this.appCommunicationService.setStoryRoute(route);
    };
    NavTreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-story-nav-tree',
            template: __webpack_require__(/*! ./nav-tree.component.html */ "./src/app/components/nav-tree/nav-tree.component.html"),
            styles: [__webpack_require__(/*! ./nav-tree.component.scss */ "./src/app/components/nav-tree/nav-tree.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_app_communication_service__WEBPACK_IMPORTED_MODULE_6__["AppCommunicationService"]])
    ], NavTreeComponent);
    return NavTreeComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n\n  <mat-sidenav\n    #drawer class=\"sidenav\" fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\"\n  >\n    <mat-toolbar>Menu</mat-toolbar>\n    <ngx-story-nav-tree></ngx-story-nav-tree>\n  </mat-sidenav>\n\n  <mat-sidenav-content class=\"Sidenav\">\n    <mat-toolbar color=\"primary\">\n      <div class=\"MatToolbar-wrapper\">\n        <div>\n          <button\n            type=\"button\"\n            aria-label=\"Toggle sidenav\"\n            mat-icon-button\n            (click)=\"drawer.toggle()\"\n            *ngIf=\"isHandset$ | async\">\n            <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n          </button>\n          <span>NgxStory</span>\n        </div>\n        <div>\n          <ngx-story-viewport-customizer></ngx-story-viewport-customizer>\n        </div>\n      </div>\n\n    </mat-toolbar>\n\n    <storyapp-content></storyapp-content>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 200px; }\n\n.sidenav .mat-toolbar {\n  background: inherit; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n.Sidenav {\n  height: 100vh;\n  overflow: hidden; }\n\n.Iframe {\n  width: 100%;\n  height: 100%; }\n\n.MatToolbar-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1Byb2plY3RzL1dvcmsvTmd4U3Rvcnlib29rL3Byb2plY3RzL05neFN0b3J5L3NyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVSxFQUFBOztBQUVaO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixXQUFXLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvTmd4U3Rvcnkvc3JjL2FwcC9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4uU2lkZW5hdiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uSWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLk1hdFRvb2xiYXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_app_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/app-communication.service */ "./src/app/shared/services/app-communication.service.ts");





var NavComponent = /** @class */ (function () {
    function NavComponent(breakpointObserver, appCommunicationService) {
        this.breakpointObserver = breakpointObserver;
        this.appCommunicationService = appCommunicationService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    NavComponent.prototype.onMessage = function (event) {
        this.appCommunicationService.onMessageReceiveFromChild(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:message', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NavComponent.prototype, "onMessage", null);
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ngx-story-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/components/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _shared_services_app_communication_service__WEBPACK_IMPORTED_MODULE_4__["AppCommunicationService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/sample-story/sample-story.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/sample-story/sample-story.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre *ngFor=\"let message of messages\">{{ message }}</pre>\n\n<ngx-story-wrapper\n  title=\"Component Name\"\n  subtitle=\"Subtitle for component\"\n  teaser=\"Teaser for component. Teaser for component. Teaser for component. Teaser for component. \"\n>\n  <storyapp-typography-story></storyapp-typography-story>\n</ngx-story-wrapper>\n"

/***/ }),

/***/ "./src/app/components/sample-story/sample-story.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/sample-story/sample-story.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9OZ3hTdG9yeS9zcmMvYXBwL2NvbXBvbmVudHMvc2FtcGxlLXN0b3J5L3NhbXBsZS1zdG9yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/sample-story/sample-story.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/sample-story/sample-story.component.ts ***!
  \*******************************************************************/
/*! exports provided: SampleStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleStoryComponent", function() { return SampleStoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var SampleStoryComponent = /** @class */ (function () {
    function SampleStoryComponent() {
        this.messages = [];
    }
    SampleStoryComponent.prototype.onMessage = function (event) {
        typeof event.data === 'string' && this.messages.unshift(event.data);
    };
    SampleStoryComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:message', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SampleStoryComponent.prototype, "onMessage", null);
    SampleStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'storyapp-sample-story',
            template: __webpack_require__(/*! ./sample-story.component.html */ "./src/app/components/sample-story/sample-story.component.html"),
            styles: [__webpack_require__(/*! ./sample-story.component.scss */ "./src/app/components/sample-story/sample-story.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SampleStoryComponent);
    return SampleStoryComponent;
}());



/***/ }),

/***/ "./src/app/components/stories-wrapper/stories-wrapper.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/stories-wrapper/stories-wrapper.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"StoriesWrapper-background  StoriesWrapper-background--checkerboard\"></div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/stories-wrapper/stories-wrapper.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/stories-wrapper/stories-wrapper.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".StoriesWrapper-background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1000;\n  opacity: 0.1; }\n\n.StoriesWrapper-background--checkerboard {\n  background-image: linear-gradient(45deg, #808080 25%, transparent 25%), linear-gradient(-45deg, #808080 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #808080 75%), linear-gradient(-45deg, transparent 75%, #808080 75%);\n  background-size: 20px 20px;\n  background-position: 0 0, 10px 0, 10px -10px, 0px 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1Byb2plY3RzL1dvcmsvTmd4U3Rvcnlib29rL3Byb2plY3RzL05neFN0b3J5L3NyYy9hcHAvY29tcG9uZW50cy9zdG9yaWVzLXdyYXBwZXIvc3Rvcmllcy13cmFwcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUVkO0VBQ0UsME9BQzZHO0VBRTdHLDBCQUEwQjtFQUMxQixzREFBc0QsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9OZ3hTdG9yeS9zcmMvYXBwL2NvbXBvbmVudHMvc3Rvcmllcy13cmFwcGVyL3N0b3JpZXMtd3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQGltcG9ydCAnc3R5bGVzJztcblxuLlN0b3JpZXNXcmFwcGVyLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTEwMDA7XG4gIG9wYWNpdHk6IDAuMTtcbn1cbi5TdG9yaWVzV3JhcHBlci1iYWNrZ3JvdW5kLS1jaGVja2VyYm9hcmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM4MDgwODAgMjUlLCB0cmFuc3BhcmVudCAyNSUpLCBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjODA4MDgwIDI1JSwgdHJhbnNwYXJlbnQgMjUlKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDc1JSwgIzgwODA4MCA3NSUpLCBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCB0cmFuc3BhcmVudCA3NSUsICM4MDgwODAgNzUlKTtcblxuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLCAxMHB4IDAsIDEwcHggLTEwcHgsIDBweCAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/stories-wrapper/stories-wrapper.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/stories-wrapper/stories-wrapper.component.ts ***!
  \*************************************************************************/
/*! exports provided: StoriesWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesWrapperComponent", function() { return StoriesWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_app_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/app-communication.service */ "./src/app/shared/services/app-communication.service.ts");



var StoriesWrapperComponent = /** @class */ (function () {
    function StoriesWrapperComponent(appCommunicationService) {
        this.appCommunicationService = appCommunicationService;
    }
    StoriesWrapperComponent.prototype.onMessage = function (event) {
        this.appCommunicationService.onMessageReceiveFromHost(event);
    };
    StoriesWrapperComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:message', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], StoriesWrapperComponent.prototype, "onMessage", null);
    StoriesWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'storyapp-stories-wrapper',
            template: __webpack_require__(/*! ./stories-wrapper.component.html */ "./src/app/components/stories-wrapper/stories-wrapper.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./stories-wrapper.component.scss */ "./src/app/components/stories-wrapper/stories-wrapper.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_app_communication_service__WEBPACK_IMPORTED_MODULE_2__["AppCommunicationService"]])
    ], StoriesWrapperComponent);
    return StoriesWrapperComponent;
}());



/***/ }),

/***/ "./src/app/components/story-wrapper/story-wrapper.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/story-wrapper/story-wrapper.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <h1 class=\"card-title\">{{ title }}</h1>\n      <h6 *ngIf=\"subtitle\" class=\"card-subtitle mb-2 text-muted\">{{ subtitle }}</h6>\n      <p *ngIf=\"teaser\" class=\"card-text\">{{ teaser }}</p>\n    </div>\n  </div>\n\n  <div class=\"card card--component\">\n    <ng-content></ng-content>\n  </div>\n\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <h6 class=\"card-title\">API</h6>\n      <table class=\"table table-sm\">\n        <thead>\n          <tr>\n            <th scope=\"col\">property</th>\n            <th scope=\"col\">propType</th>\n            <th scope=\"col\">required</th>\n            <th scope=\"col\">default</th>\n            <th scope=\"col\">description</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td colspan=\"2\">Larry the Bird</td>\n            <td>@twitter</td>\n            <td>@twitter</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</article>\n"

/***/ }),

/***/ "./src/app/components/story-wrapper/story-wrapper.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/story-wrapper/story-wrapper.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "article {\n  width: 100%;\n  padding: 20px; }\n\n.card {\n  margin-bottom: 16px; }\n\n.card--component {\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1Byb2plY3RzL1dvcmsvTmd4U3Rvcnlib29rL3Byb2plY3RzL05neFN0b3J5L3NyYy9hcHAvY29tcG9uZW50cy9zdG9yeS13cmFwcGVyL3N0b3J5LXdyYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUVmO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsVUFBVSxFQUFBIiwiZmlsZSI6InByb2plY3RzL05neFN0b3J5L3NyYy9hcHAvY29tcG9uZW50cy9zdG9yeS13cmFwcGVyL3N0b3J5LXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcnRpY2xlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uY2FyZC0tY29tcG9uZW50IHtcbiAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/story-wrapper/story-wrapper.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/story-wrapper/story-wrapper.component.ts ***!
  \*********************************************************************/
/*! exports provided: StoryWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryWrapperComponent", function() { return StoryWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var StoryWrapperComponent = /** @class */ (function () {
    function StoryWrapperComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StoryWrapperComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StoryWrapperComponent.prototype, "subtitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StoryWrapperComponent.prototype, "teaser", void 0);
    StoryWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-story-wrapper',
            template: __webpack_require__(/*! ./story-wrapper.component.html */ "./src/app/components/story-wrapper/story-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./story-wrapper.component.scss */ "./src/app/components/story-wrapper/story-wrapper.component.scss")]
        })
    ], StoryWrapperComponent);
    return StoryWrapperComponent;
}());



/***/ }),

/***/ "./src/app/components/story-wrapper/story-wrapper.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/story-wrapper/story-wrapper.module.ts ***!
  \******************************************************************/
/*! exports provided: StoryWrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryWrapperModule", function() { return StoryWrapperModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _story_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./story-wrapper.component */ "./src/app/components/story-wrapper/story-wrapper.component.ts");




var StoryWrapperModule = /** @class */ (function () {
    function StoryWrapperModule() {
    }
    StoryWrapperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_story_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["StoryWrapperComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_story_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["StoryWrapperComponent"]]
        })
    ], StoryWrapperModule);
    return StoryWrapperModule;
}());



/***/ }),

/***/ "./src/app/components/tab/tab.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/tab/tab.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      Settings/knobs\n    </ng-template>\n    <p>Settings/knobs</p>\n  </mat-tab>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      Actions\n    </ng-template>\n    <p>Actions</p>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/components/tab/tab.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/tab/tab.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9OZ3hTdG9yeS9zcmMvYXBwL2NvbXBvbmVudHMvdGFiL3RhYi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/tab/tab.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/tab/tab.component.ts ***!
  \*************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TabComponent = /** @class */ (function () {
    function TabComponent() {
    }
    TabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-story-tab',
            template: __webpack_require__(/*! ./tab.component.html */ "./src/app/components/tab/tab.component.html"),
            styles: [__webpack_require__(/*! ./tab.component.scss */ "./src/app/components/tab/tab.component.scss")]
        })
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/components/viewport-customizer/viewport-customizer.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/viewport-customizer/viewport-customizer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"ViewPort\" [formGroup]=\"form\">\n\n  <div class=\"ViewPort-element\">\n    <mat-form-field>\n      <mat-label>Viewport</mat-label>\n      <mat-select\n        [formControlName]=\"'device'\"\n      >\n        <mat-option *ngFor=\"let device of selectDevice\" [value]=\"device.value\">\n          {{device.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <div class=\"ViewPort-element\">\n    <mat-form-field>\n      <mat-label>Width</mat-label>\n      <input matInput [formControlName]=\"'width'\"/>\n    </mat-form-field>\n  </div>\n\n  <div class=\"ViewPort-element\">\n    <mat-form-field>\n      <mat-label>Height</mat-label>\n      <input matInput [formControlName]=\"'height'\"/>\n    </mat-form-field>\n  </div>\n\n  <div class=\"ViewPort-element\">\n      <mat-checkbox [formControlName]=\"'orientationHorizontal'\">Landscape</mat-checkbox>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/viewport-customizer/viewport-customizer.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/viewport-customizer/viewport-customizer.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ViewPort {\n  display: flex;\n  align-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1Byb2plY3RzL1dvcmsvTmd4U3Rvcnlib29rL3Byb2plY3RzL05neFN0b3J5L3NyYy9hcHAvY29tcG9uZW50cy92aWV3cG9ydC1jdXN0b21pemVyL3ZpZXdwb3J0LWN1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvTmd4U3Rvcnkvc3JjL2FwcC9jb21wb25lbnRzL3ZpZXdwb3J0LWN1c3RvbWl6ZXIvdmlld3BvcnQtY3VzdG9taXplci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5WaWV3UG9ydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLlZpZXdQb3J0LWVsZW1lbnQge1xuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/viewport-customizer/viewport-customizer.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/viewport-customizer/viewport-customizer.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ViewportCustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportCustomizerComponent", function() { return ViewportCustomizerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _iframe_iframe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../iframe/iframe.service */ "./src/app/components/iframe/iframe.service.ts");





var ViewportCustomizerComponent = /** @class */ (function () {
    function ViewportCustomizerComponent(iframeService) {
        this.iframeService = iframeService;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.selectDevice = this.iframeService.getDevicesSelectOption();
    }
    ViewportCustomizerComponent.prototype.ngOnInit = function () {
        this.formBuild();
        this.formPatch(this.iframeService.getCurrentViewPort());
        this.handleSelectDevices();
    };
    ViewportCustomizerComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.unsubscribe();
    };
    ViewportCustomizerComponent.prototype.formBuild = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            device: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            width: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            orientationHorizontal: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false)
        });
    };
    ViewportCustomizerComponent.prototype.formPatch = function (values) {
        if (!values) {
            return;
        }
        console.log({ values: values });
        this.form.patchValue({
            width: values.width,
            height: values.height,
            orientationHorizontal: values.orientationHorizontal
        }, { emitEvent: false });
        !values.device && this.form.get('device').setValue(values, { emitEvent: false });
    };
    ViewportCustomizerComponent.prototype.handleSelectDevices = function () {
        var _this = this;
        this.subscriptions.add(this.form.get('device').valueChanges.subscribe(function (device) {
            _this.formPatch(device);
            _this.setDevice();
        }));
        this.subscriptions.add(this.form.get('orientationHorizontal').valueChanges.subscribe(function (value) {
            _this.setDevice({ orientationHorizontal: value });
        }));
    };
    ViewportCustomizerComponent.prototype.setDevice = function (device) {
        var formValues = this.form.value;
        this.iframeService.setDevice(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, formValues, device));
    };
    ViewportCustomizerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-story-viewport-customizer',
            template: __webpack_require__(/*! ./viewport-customizer.component.html */ "./src/app/components/viewport-customizer/viewport-customizer.component.html"),
            styles: [__webpack_require__(/*! ./viewport-customizer.component.scss */ "./src/app/components/viewport-customizer/viewport-customizer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_iframe_iframe_service__WEBPACK_IMPORTED_MODULE_4__["IframeService"]])
    ], ViewportCustomizerComponent);
    return ViewportCustomizerComponent;
}());



/***/ }),

/***/ "./src/app/playground.routing.ts":
/*!***************************************!*\
  !*** ./src/app/playground.routing.ts ***!
  \***************************************/
/*! exports provided: NgxStoryRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxStoryRouting", function() { return NgxStoryRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _stories_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stories.config */ "./src/stories.config.ts");
/* harmony import */ var _components_stories_wrapper_stories_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/stories-wrapper/stories-wrapper.component */ "./src/app/components/stories-wrapper/stories-wrapper.component.ts");
/* harmony import */ var _components_story_wrapper_story_wrapper_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/story-wrapper/story-wrapper.module */ "./src/app/components/story-wrapper/story-wrapper.module.ts");









var routes = [
    { path: '', component: _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"] },
    {
        path: 'story',
        component: _components_stories_wrapper_stories_wrapper_component__WEBPACK_IMPORTED_MODULE_7__["StoriesWrapperComponent"],
        children: [{ path: '', redirectTo: '', pathMatch: 'full' }].concat(_stories_config__WEBPACK_IMPORTED_MODULE_6__["storiesRoutes"])
    },
    { path: '**', component: _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"] }
];
var NgxStoryRouting = /** @class */ (function () {
    function NgxStoryRouting() {
    }
    NgxStoryRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: _stories_config__WEBPACK_IMPORTED_MODULE_6__["storiesComponents"].slice(),
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]].concat(_stories_config__WEBPACK_IMPORTED_MODULE_6__["storiesComponents"]),
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes), _stories_config__WEBPACK_IMPORTED_MODULE_6__["storiesModules"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_story_wrapper_story_wrapper_module__WEBPACK_IMPORTED_MODULE_8__["StoryWrapperModule"]],
            providers: _stories_config__WEBPACK_IMPORTED_MODULE_6__["storiesServices"].slice()
        })
    ], NgxStoryRouting);
    return NgxStoryRouting;
}());



/***/ }),

/***/ "./src/app/shared/services/app-communication.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/app-communication.service.ts ***!
  \**************************************************************/
/*! exports provided: AppCommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCommunicationService", function() { return AppCommunicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "../../node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/interval */ "../../node_modules/rxjs/internal/observable/interval.js");
/* harmony import */ var rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");






var AppCommunicationService = /** @class */ (function () {
    function AppCommunicationService() {
        var _this = this;
        this.connectedWithHost$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.messageBusIn$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.messageBusOut$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(this.messageBusOut$, this.connectedWithHost$)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var message = _a[0];
            return message;
        }))
            .subscribe(function (message) {
            _this.sendMessageByPostMessage(message);
        });
    }
    /**
     *  Method for retrieving information from connected app
     *  @return Observable<CommunicationBusInterface>
     */
    AppCommunicationService.prototype.getMessageBusObservable = function () {
        return this.messageBusIn$.asObservable();
    };
    /**
     *  Method for sending component props settings
     *  @param transfer: Object
     */
    AppCommunicationService.prototype.sendConfigurationSettings = function (transfer) {
        this.sendMessage({ type: "ConfigureSettings" /* ConfigureSettings */, transfer: transfer });
    };
    /**
     *  Method for setting route in iframe
     *  @param route: string
     */
    AppCommunicationService.prototype.setStoryRoute = function (route) {
        this.sendMessage({ type: "SetStoryRoute" /* SetStoryRoute */, transfer: route });
    };
    /**
     * PRIVATES
     */
    AppCommunicationService.prototype.sendMessage = function (message) {
        this.messageBusOut$.next(message);
    };
    AppCommunicationService.prototype.initCommunicationWithChild = function (iframe) {
        var _this = this;
        this.iframe = iframe;
        Object(rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_3__["interval"])(200)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(20), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.connectedWithHost$))
            .subscribe(function () {
            _this.sendMessageToChild({ type: "ConnectionTest" /* ConnectionTest */ });
        });
    };
    AppCommunicationService.prototype.onMessageReceiveFromHost = function (event) {
        if (event.origin !== window.origin || typeof event.data !== 'string') {
            return;
        }
        var data = JSON.parse(event.data);
        if (data.type === "ConnectionTest" /* ConnectionTest */) {
            this.hostSource = event.source;
            this.hostOrigin = event.origin;
            this.sendMessageToHost({ type: "ConnectionEstablished" /* ConnectionEstablished */ });
        }
        else {
            console.log('onMessageReceiveFromHost: ', data);
            this.messageBusIn$.next(data);
        }
    };
    AppCommunicationService.prototype.onMessageReceiveFromChild = function (event) {
        if (event.origin !== window.origin || typeof event.data !== 'string') {
            return;
        }
        var data = JSON.parse(event.data);
        if (data.type === "ConnectionEstablished" /* ConnectionEstablished */) {
            this.connectedWithHost$.next(true);
        }
        else {
            console.log('onMessageReceiveFromChild: ', data);
            this.messageBusIn$.next(data);
        }
    };
    AppCommunicationService.prototype.sendMessageToHost = function (messageType, transfer) {
        this.hostSource.postMessage(JSON.stringify(messageType), this.hostOrigin, transfer);
    };
    AppCommunicationService.prototype.sendMessageToChild = function (messageType, transfer) {
        this.iframe.nativeElement.contentWindow.postMessage(JSON.stringify(messageType), window.origin, transfer);
    };
    AppCommunicationService.prototype.sendMessageByPostMessage = function (message, transfer) {
        this.hostSource ? this.sendMessageToHost(message, transfer) : this.sendMessageToChild(message, transfer);
    };
    AppCommunicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppCommunicationService);
    return AppCommunicationService;
}());



/***/ }),

/***/ "./src/app/shared/services/routing.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/routing.service.ts ***!
  \****************************************************/
/*! exports provided: RoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingService", function() { return RoutingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-communication.service */ "./src/app/shared/services/app-communication.service.ts");





var RoutingService = /** @class */ (function () {
    function RoutingService(appCommunicationService, router) {
        this.appCommunicationService = appCommunicationService;
        this.router = router;
        this.handleChangeRouteRequest();
    }
    RoutingService.prototype.handleChangeRouteRequest = function () {
        var _this = this;
        this.appCommunicationService
            .getMessageBusObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (message) { return message.type === "SetStoryRoute" /* SetStoryRoute */; }))
            .subscribe(function (message) {
            _this.router.navigate(["/story/" + message.transfer]);
        });
    };
    RoutingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_communication_service__WEBPACK_IMPORTED_MODULE_4__["AppCommunicationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RoutingService);
    return RoutingService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/stories.config.ts":
/*!*******************************!*\
  !*** ./src/stories.config.ts ***!
  \*******************************/
/*! exports provided: storiesModules, storiesComponents, storiesServices, storiesRoutes, storiesSideNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storiesModules", function() { return storiesModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storiesComponents", function() { return storiesComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storiesServices", function() { return storiesServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storiesRoutes", function() { return storiesRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storiesSideNav", function() { return storiesSideNav; });
/* harmony import */ var _stories_typography_story_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stories/typography-story.component */ "./src/stories/typography-story.component.ts");
/* harmony import */ var _app_components_sample_story_sample_story_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/components/sample-story/sample-story.component */ "./src/app/components/sample-story/sample-story.component.ts");


// Modules to be imported
var storiesModules = [];
// Components to be imported
var storiesComponents = [_stories_typography_story_component__WEBPACK_IMPORTED_MODULE_0__["TypographyStoryComponent"], _app_components_sample_story_sample_story_component__WEBPACK_IMPORTED_MODULE_1__["SampleStoryComponent"]];
// Services to be imported
var storiesServices = [];
var storiesRoutes = [
    { path: '', redirectTo: 'story/sample-story', pathMatch: 'full' },
    { path: 'sample-story', component: _app_components_sample_story_sample_story_component__WEBPACK_IMPORTED_MODULE_1__["SampleStoryComponent"] },
    { path: 'typography', component: _stories_typography_story_component__WEBPACK_IMPORTED_MODULE_0__["TypographyStoryComponent"] }
];
var storiesSideNav = [
    {
        name: 'Principies',
        type: 'folder',
        children: [{ name: 'SampleStory', type: 'file', route: 'sample-story' }, { name: 'Typography', type: 'file', route: 'typography' }]
    }
];


/***/ }),

/***/ "./src/stories/typography-story.component.ts":
/*!***************************************************!*\
  !*** ./src/stories/typography-story.component.ts ***!
  \***************************************************/
/*! exports provided: TypographyStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyStoryComponent", function() { return TypographyStoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TypographyStoryComponent = /** @class */ (function () {
    function TypographyStoryComponent() {
    }
    TypographyStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'storyapp-typography-story',
            template: "\n    <div class=\"container\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-4\">\n        <span class=\"caption font-light-secondary\">\n          Display 4\n          <br>(Single Line)\n          <br>h1\n        </span>\n        </div>\n        <div class=\"col-8\">\n          <h1>Light 112pt</h1>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row align-items-center\">\n        <div class=\"col-4\">\n        <span class=\"caption font-light-secondary\">\n          Display 3\n          <br>(Single Line)\n          <br>h2\n        </span>\n        </div>\n        <div class=\"col-8\">\n          <h2>Regular 56pt</h2>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row align-items-center\">\n        <div class=\"col-4\">\n        <span class=\"caption font-light-secondary\">\n          Display 2\n          <br>(Single Line)\n          <br>h3\n        </span>\n        </div>\n        <div class=\"col-8\">\n          <h3>Regular 45pt</h3>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row align-items-center\">\n        <div class=\"col-4\">\n        <span class=\"caption font-light-secondary\">\n          Display 1\n          <br>(Single Line)\n          <br>h4\n        </span>\n        </div>\n        <div class=\"col-8\">\n          <h4>Regular 34pt</h4>\n        </div>\n      </div>\n      <hr>\n      <br>\n      <br>\n\n      <div class=\"row align-items-center\">\n        <div class=\"col-4\">\n        <span class=\"caption font-light-secondary\">\n          Heading\n          <br>h5\n        </span>\n        </div>\n        <div class=\"col-8\">\n          <h5>Regular 24pt</h5>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row align-items-center\">\n        <div class=\"col-4\">\n        <span class=\"caption font-light-secondary\">\n          Title\n          <br>h6\n        </span>\n        </div>\n        <div class=\"col-8\">\n          <h6>Bold 20pt</h6>\n        </div>\n      </div>\n      <hr>\n      <br>\n\n      <div class=\"row align-items-center\">\n        <div class=\"col-4\">\n        <span class=\"caption font-light-secondary\">\n          Subheading\n          <br>h6.subheading\n        </span>\n        </div>\n        <div class=\"col-8\">\n          <h6 class=\"subheading\">Regular 15pt</h6>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row align-items-center\">\n        <div class=\"col-4\">\n        <span class=\"caption font-light-secondary\">\n          Body emphasis\n          <br>.emphasis\n        </span>\n        </div>\n        <div class=\"col-8\">\n          <span class=\"emphasis\">Bold 13pt</span>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row align-items-center\">\n        <div class=\"col-4\">\n        <span class=\"caption font-light-secondary\">\n          Body regular\n        </span>\n        </div>\n        <div class=\"col-8\">\n          <span>Regular 13pt</span>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row align-items-center\">\n        <div class=\"col-4\">\n        <span class=\"caption font-light-secondary\">\n          Caption\n          <br>.caption\n        </span>\n        </div>\n        <div class=\"col-8\">\n          <span class=\"caption\">Regular 11pt</span>\n        </div>\n      </div>\n      <hr>\n      <br>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-4\">\n          <h5>Heading</h5>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget leo non purus eleifend lacinia. Integer bibendum aliquam\n          metus, ac pretium nisl fermentum a. Etiam in vulputate turpis. Ut finibus massa ex, quis vulputate nisl rhoncus quis. Pellentesque\n          rutrum feugiat diam lacinia pharetra. Curabitur consectetur dolor sit amet consequat varius. Integer eleifend, justo eu pharetra\n          laoreet, ipsum nisl auctor velit, quis efficitur erat eros eget odio. Vestibulum porttitor diam felis, vel luctus ligula mattis\n          at. Quisque non leo quis nunc feugiat cursus. Aliquam id cursus sem, vel lobortis nisl. In erat nibh, volutpat eu auctor\n          fermentum, porttitor vel eros. Vestibulum condimentum nisi odio, vitae auctor elit maximus eget. Phasellus a tempor enim. Proin\n          vel suscipit odio. Donec scelerisque eget risus ac ornare. Vestibulum pulvinar ipsum ut nunc tempor commodo a a mauris.\n        </div>\n        <div class=\"col-4\">\n          <h6>Title</h6>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget leo non purus eleifend lacinia. Integer bibendum aliquam\n            metus, ac pretium nisl fermentum a. Etiam in vulputate turpis. Ut finibus massa ex, quis vulputate nisl rhoncus quis.\n            Pellentesque rutrum feugiat diam lacinia pharetra. Curabitur consectetur dolor sit amet consequat varius. Integer eleifend,\n            justo eu pharetra laoreet, ipsum nisl auctor velit, quis efficitur erat eros eget odio. Vestibulum porttitor diam felis, vel\n            luctus ligula mattis at. Quisque non leo quis nunc feugiat cursus. Aliquam id cursus sem, vel lobortis nisl. In erat nibh,\n            volutpat eu auctor fermentum, porttitor vel eros. Vestibulum condimentum nisi odio, vitae auctor elit maximus eget. Phasellus a\n            tempor enim. Proin vel suscipit odio. Donec scelerisque eget risus ac ornare. Vestibulum pulvinar ipsum ut nunc tempor commodo a\n            a mauris.</p>\n        </div>\n        <div class=\"col-4\">\n          <h6 class=\"subheading\">Subheading</h6>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget leo non purus eleifend lacinia. Integer bibendum aliquam\n            metus, ac pretium nisl fermentum a. Etiam in vulputate turpis. Ut finibus massa ex, quis vulputate nisl rhoncus quis.\n            Pellentesque rutrum feugiat diam lacinia pharetra. Curabitur consectetur dolor sit amet consequat varius. Integer eleifend,\n            justo eu pharetra laoreet, ipsum nisl auctor velit, quis efficitur erat eros eget odio. Vestibulum porttitor diam felis, vel\n            luctus ligula mattis at. Quisque non leo quis nunc feugiat cursus. Aliquam id cursus sem, vel lobortis nisl. In erat nibh,\n            volutpat eu auctor fermentum, porttitor vel eros. Vestibulum condimentum nisi odio, vitae auctor elit maximus eget. Phasellus a\n            tempor enim. Proin vel suscipit odio. Donec scelerisque eget risus ac ornare. Vestibulum pulvinar ipsum ut nunc tempor commodo a\n            a mauris.</p>\n        </div>\n      </div>\n\n    </div>\n  "
        })
    ], TypographyStoryComponent);
    return TypographyStoryComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Projects/Work/NgxStorybook/projects/NgxStory/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map