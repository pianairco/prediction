(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\me-project\multi-shop\multishop-ui\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/authentication-service.service */ "XOPY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_share_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/share-state.service */ "sdx3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _picture_box_picture_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../picture-box/picture-box.component */ "o05m");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function HeaderComponent_div_1_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 14);
} }
function HeaderComponent_div_1_div_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 15);
} }
function HeaderComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_1_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.isEditedMode = !ctx_r8.isEditedMode; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HeaderComponent_div_1_div_3_span_2_Template, 1, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeaderComponent_div_1_div_3_span_3_Template, 1, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isEditedMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isEditedMode);
} }
function HeaderComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_1_div_5_Template_li_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.tabChange("text"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0645\u062A\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_1_div_5_Template_li_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.tabChange("image"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u062A\u0635\u0648\u06CC\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-active-tab", ctx_r2.tabName === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-active-tab", ctx_r2.tabName === "image");
} }
function HeaderComponent_div_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-picture-box", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function HeaderComponent_div_1_ng_container_9_Template_app_picture_box_onSelect_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.selectImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("image", ctx_r3.siteInfo.headerImage)("isUpload", true);
} }
function HeaderComponent_div_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HeaderComponent_div_1_ng_container_10_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.siteInfo.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "textarea", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HeaderComponent_div_1_ng_container_10_Template_textarea_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.siteInfo.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_1_ng_container_10_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.updateSiteInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u062B\u0628\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.siteInfo.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.siteInfo.description);
} }
function HeaderComponent_div_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.siteInfo.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.siteInfo.description, " ");
} }
const _c0 = function (a0) { return { "background": a0 }; };
const _c1 = function (a0) { return { "border": a0 }; };
function HeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeaderComponent_div_1_div_3_Template, 4, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HeaderComponent_div_1_div_5_Template, 8, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HeaderComponent_div_1_ng_container_9_Template, 3, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HeaderComponent_div_1_ng_container_10_Template, 11, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HeaderComponent_div_1_ng_container_11_Template, 5, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, "url(" + ctx_r0.siteInfo.headerImage + ") no-repeat 0 0 / cover"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 8, ctx_r0.authService.authSubject).isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isEditedMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 10, ctx_r0.authService.authSubject).isAdmin ? "0px" : "0px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isEditedMode && ctx_r0.tabName === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isEditedMode && ctx_r0.tabName === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isEditedMode);
} }
class HeaderComponent {
    // bac = 'https://shop.piana.ir:8443/assets/header/4Tb9tC59dg1Wd0…tJJHiPn10uDUml5jz2G424JWWUyjoLbjtwiG3C84TvB9.jpeg';
    constructor(authService, shareStateService) {
        this.authService = authService;
        this.shareStateService = shareStateService;
        this.siteInfo = new _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_0__["SiteInfo"]();
        this.isEditedMode = false;
        this.tabName = 'text';
        this.image = null;
    }
    ngOnInit() {
        this.authService.authSubject.subscribe(appInfo => {
            this.siteInfo = appInfo.siteInfo;
            console.log(this.siteInfo.headerImage);
            this.siteInfo.headerImage = this.siteInfo.headerImage.replace(/\s/g, '');
            console.log(this.siteInfo.headerImage);
        });
    }
    updateSiteInfo() {
        this.authService.updateSiteInfo(this.siteInfo);
    }
    tabChange(tabName) {
        this.tabName = tabName;
    }
    selectImage(image) {
        this.image = image;
        console.log(this.image);
        this.siteInfo.headerImage = this.image;
        this.authService.updateSiteInfo(this.siteInfo);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_share_state_service__WEBPACK_IMPORTED_MODULE_2__["ShareStateService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 1, consts: [[1, "hero", "is-fullheight", 2, "background-color", "#b9dbff"], ["class", "hero-body ", 3, "ngStyle", 4, "ngIf"], [1, "hero-body", 3, "ngStyle"], [1, "container", "description"], [1, "message", "is-fullwidth", "description"], ["class", "message-header", 4, "ngIf"], ["class", "tabs is-centered", 4, "ngIf"], [1, "message-body"], [1, "container", "has-text-centered", "description", "py-2", "is-centered"], [4, "ngIf"], [1, "message-header"], [1, "edit", "is-medium", 3, "click"], ["class", "fa fa-edit", 4, "ngIf"], ["class", "fa fa-eye", 4, "ngIf"], [1, "fa", "fa-edit"], [1, "fa", "fa-eye"], [1, "tabs", "is-centered"], [3, "click"], [3, "image", "isUpload", "onSelect"], ["pictureBox", ""], [1, "columns"], [1, "column", "is-10-mobile", "is-4-desktop", "is-offset-1-mobile", "is-offset-4-desktop"], ["type", "text", "placeholder", "\u0639\u0646\u0648\u0627\u0646", 1, "input", "is-small", 2, "font-family", "IranNastaliq", "text-align", "center", 3, "ngModel", "ngModelChange"], [1, "columns", "is-center"], [1, "textarea", "is-small", 3, "ngModel", "ngModelChange"], [1, "button", "is-success", "is-small", 3, "click"], [1, "title", 2, "font-family", "IranNastaliq", "font-size", "28px"], [1, "subtitle"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderComponent_div_1_Template, 12, 16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.siteInfo.headerImage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _picture_box_picture_box_component__WEBPACK_IMPORTED_MODULE_4__["PictureBoxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".header-background[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n  backgroundRepeat: 'no-repeat';\r\n  \r\n  \r\n}\r\n\r\n.description[_ngcontent-%COMP%] {\r\n  background-color: rgba(100,190,180, 0.1);\r\n  border-radius: 12px;\r\n}\r\n\r\n.description[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(100,190,180, 0.5);\r\n}\r\n\r\n.subtitle[_ngcontent-%COMP%] {\r\n  color: black;\r\n  font-family: IranNastaliq; font-size: 22px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.message-header[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%] {\r\n  flex-grow: 0;\r\n  flex-shrink: 0;\r\n  margin-right: 0.75em;\r\n}\r\n\r\n.is-medium.edit[_ngcontent-%COMP%] {\r\n  height: 24px;\r\n  max-height: 24px;\r\n  max-width: 24px;\r\n  min-height: 24px;\r\n  min-width: 24px;\r\n  width: 24px;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%] {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n  background-color: inherit;\r\n  color: rgb(255, 255, 255);\r\n  border: none;\r\n  border-radius: 290486px;\r\n  cursor: pointer;\r\n  pointer-events: auto;\r\n  display: inline-block;\r\n  flex-grow: 0;\r\n  flex-shrink: 0;\r\n  \r\n  height: 20px;\r\n  max-height: 20px;\r\n  max-width: 20px;\r\n  min-height: 20px;\r\n  min-width: 20px;\r\n  outline: none;\r\n  position: relative;\r\n  vertical-align: top;\r\n  width: 20px;\r\n}\r\n\r\n.is-active-tab[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  background-color: inherit;\r\n}\r\n\r\n.hero[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  border-bottom: inset;\r\n}\r\n\r\n.tabs[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n.is-active-tab[_ngcontent-%COMP%] {\r\n  background-color: #c2dfe8;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3Qiw0REFBNEQ7RUFDNUQsOERBQThEO0FBQ2hFOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUIsRUFBRSxlQUFlO0FBQzVDOztBQUVBLGlCQUFpQjs7QUFDakIsaUJBQWlCOztBQUNqQixnQkFBZ0I7O0FBQ2hCLElBQUk7O0FBRUosaUJBQWlCOztBQUNqQiw2QkFBNkI7O0FBQzdCLGlCQUFpQjs7QUFDakIsb0JBQW9COztBQUNwQixlQUFlOztBQUNmLHdCQUF3Qjs7QUFDeEIsY0FBYzs7QUFDZCx5REFBeUQ7O0FBQ3pELFlBQVk7O0FBQ1osT0FBTzs7QUFDUCxxQ0FBcUM7O0FBQ3JDLElBQUk7O0FBRUo7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JztcclxuICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zaG9wLmpwZycpOyovXHJcbiAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLnN2ZycpOyovXHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsMTkwLDE4MCwgMC4xKTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAwLDE5MCwxODAsIDAuNSk7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBJcmFuTmFzdGFsaXE7IGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLyouZWRpdDo6YWZ0ZXIgeyovXHJcbi8qICBoZWlnaHQ6IDUwJTsqL1xyXG4vKiAgd2lkdGg6IDJweDsqL1xyXG4vKn0qL1xyXG5cclxuLyouZWRpdDo6YWZ0ZXIgeyovXHJcbi8qICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsqL1xyXG4vKiAgY29udGVudDogXCJcIjsqL1xyXG4vKiAgZGlzcGxheTogYmxvY2s7Ki9cclxuLyogIGxlZnQ6IDUwJTsqL1xyXG4vKiAgcG9zaXRpb246IGFic29sdXRlOyovXHJcbi8qICB0b3A6IDUwJTsqL1xyXG4vKiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKCovXHJcbi8qICAgIDQ1ZGVnKi9cclxuLyogICk7Ki9cclxuLyogIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7Ki9cclxuLyp9Ki9cclxuXHJcbi5tZXNzYWdlLWhlYWRlciAuZWRpdCB7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMC43NWVtO1xyXG59XHJcblxyXG4uaXMtbWVkaXVtLmVkaXQge1xyXG4gIGhlaWdodDogMjRweDtcclxuICBtYXgtaGVpZ2h0OiAyNHB4O1xyXG4gIG1heC13aWR0aDogMjRweDtcclxuICBtaW4taGVpZ2h0OiAyNHB4O1xyXG4gIG1pbi13aWR0aDogMjRweDtcclxuICB3aWR0aDogMjRweDtcclxufVxyXG5cclxuLmVkaXQge1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAyOTA0ODZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBmbGV4LXNocmluazogMDtcclxuICAvKmZvbnQtc2l6ZTogMDsqL1xyXG4gIGhlaWdodDogMjBweDtcclxuICBtYXgtaGVpZ2h0OiAyMHB4O1xyXG4gIG1heC13aWR0aDogMjBweDtcclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gIG1pbi13aWR0aDogMjBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4uaXMtYWN0aXZlLXRhYiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLmhlcm8gLnRhYnMgdWwge1xyXG4gIGJvcmRlci1ib3R0b206IGluc2V0O1xyXG59XHJcblxyXG4udGFicyA+IHVsID4gbGkgPiBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaXMtYWN0aXZlLXRhYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyZGZlODtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "7ch9":
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoadingService {
    constructor() {
        this.editState = false;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.stateSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.editState);
        this.currentState = this.stateSource.asObservable();
    }
    changeState(state) {
        this.stateSource.next(state);
    }
}
LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(); };
LoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9hFD":
/*!***********************************************!*\
  !*** ./src/app/services/ajax-call.service.ts ***!
  \***********************************************/
/*! exports provided: AjaxCallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxCallService", function() { return AjaxCallService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.service */ "J+td");



class AjaxCallService {
    constructor(constantService, injector) {
        this.constantService = constantService;
        this.injector = injector;
        this.remoteServer = "";
    }
    read(url) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(this.constantService.getRemoteServer() + "/" + url, { headers: {} });
    }
    save(url, obj) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(this.constantService.getRemoteServer() + "/" + url, obj, { headers: { "content-type": "application/json" } });
    }
    update(url, obj) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(this.constantService.getRemoteServer() + "/" + url, obj, { headers: { "content-type": "application/json" } });
    }
    delete(url, id) {
        return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(this.constantService.getRemoteServer() + "/" + url + "/" + id, { headers: { "content-type": "application/json" } });
    }
}
AjaxCallService.ɵfac = function AjaxCallService_Factory(t) { return new (t || AjaxCallService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_constant_service__WEBPACK_IMPORTED_MODULE_2__["ConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
AjaxCallService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AjaxCallService, factory: AjaxCallService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9ldr":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/notification.service */ "OC8m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class NotificationComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.selectedMessage = null;
        this.showMessage = false;
    }
    ngOnInit() {
        this.notificationService.currentMessage.subscribe(message => {
            this.selectedMessage = message;
            // console.log(message);
            if (this.selectedMessage instanceof _services_notification_service__WEBPACK_IMPORTED_MODULE_0__["NotificationModel"] && this.selectedMessage.isShow) {
                console.log(this.selectedMessage);
                this.showMessage = true;
            }
            else {
                this.showMessage = false;
            }
            // console.log(message.message);
        }); //<= Always get current value!
    }
    clear() {
        this.showMessage = false;
        this.notificationService.clear();
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_0__["NotificationService"])); };
NotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], decls: 7, vars: 11, consts: [[1, "modal", 2, "z-index", "41"], [1, "modal-background"], [1, "modal-card"], [1, "modal-card-head"], ["aria-label", "close", 1, "delete", 3, "click"], [1, "modal-card-body"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_4_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-active", ctx.showMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-background-success", ctx.selectedMessage.type === "success")("has-background-danger", ctx.selectedMessage.type === "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-text-success", ctx.selectedMessage.type === "success")("has-text-danger", ctx.selectedMessage.type === "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.selectedMessage.message, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Acff":
/*!******************************************************!*\
  !*** ./src/app/services/product-category.service.ts ***!
  \******************************************************/
/*! exports provided: ProductCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryService", function() { return ProductCategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _rest_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-client.service */ "YrvC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _piana_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./piana-storage.service */ "OsEf");






class ProductCategoryService {
    constructor(injector, router, pianaStorageService) {
        this.injector = injector;
        this.router = router;
        this.pianaStorageService = pianaStorageService;
        this._categories = [];
        this._selected = null;
        this._categoriesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this._categories);
        this._selectedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this._selected);
    }
    get categoriesSubject() {
        return this._categoriesSubject.asObservable();
    }
    set categories(_categories) {
        this._categories = _categories;
        this._categoriesSubject.next(this._categories);
    }
    set selected(_selected) {
        this._selected = _selected;
        this._selectedSubject.next(this._selected);
    }
    get selectedSubject() {
        return this._selectedSubject.asObservable();
    }
    addCategory(_category) {
        let index = -1;
        for (let i = 0; i < this._categories.length; i++) {
            if (this._categories[i].id === _category.id) {
                index = i;
                break;
            }
        }
        if (index > -1) {
            this._categories[index] = _category;
        }
        else {
            this._categories.push(_category);
        }
        this._categoriesSubject.next(this._categories);
    }
    removeCategory(_category) {
        let index = -1;
        for (let i = 0; i < this._categories.length; i++) {
            if (this._categories[i].id === _category.id) {
                index = i;
                break;
            }
        }
        if (index > -1) {
            this._categories.splice(index, 1);
            this._categoriesSubject.next(this._categories);
        }
    }
    get categories() {
        return this._categories;
    }
    renew() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let res = yield this.injector.get(_rest_client_service__WEBPACK_IMPORTED_MODULE_2__["RestClientService"]).categoryList();
            if (res.status == 200) {
                this.categories = res.data;
            }
        });
    }
    setAsSelectedCategory(category) {
        // console.log("bbbbbb", category)
        this.pianaStorageService.putObject("selected-category", { "selected": category });
        this.selected = category;
    }
    checkCategory(routerLink) {
        console.log(routerLink);
        if (this._selected && this._selected.routerLink === routerLink) {
            return true;
        }
        else {
            let selectedCategory = this.pianaStorageService.getObject("selected-category");
            if (selectedCategory && selectedCategory.hasOwnProperty('selected')) {
                let selected = selectedCategory['selected'];
                if (selected.routerLink === routerLink) {
                    this.selected = selected;
                    return true;
                }
            }
        }
        this.router.navigate(['/tile/shop/products-gallery']);
        // else if(this._selected && this._selected.routerLink != routerLink) {
        //   this.router.navigate(['/tile/shop/products-gallery'])
        // } else if(!this._selected && this._categories && this._categories.length > 0) {
        //   this._categories.forEach(c => {
        //     if(c.routerLink === routerLink) {
        //       this._selected = c;
        //       return;
        //     }
        //   });
        // }
    }
    getSelectedCategory() {
        return this._selected;
    }
    getCategoryId(routerLink) {
        console.log("dddddd");
        this.checkCategory(routerLink);
        for (let category of this._categories) {
            if (category.routerLink == routerLink)
                return category.id;
        }
        return 0;
    }
}
ProductCategoryService.ɵfac = function ProductCategoryService_Factory(t) { return new (t || ProductCategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_piana_storage_service__WEBPACK_IMPORTED_MODULE_5__["PianaStorageService"])); };
ProductCategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ProductCategoryService, factory: ProductCategoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "J+td":
/*!**********************************************!*\
  !*** ./src/app/services/constant.service.ts ***!
  \**********************************************/
/*! exports provided: ConstantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantService", function() { return ConstantService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ConstantService {
    constructor() {
        this.remoteServer = "";
    }
    getRemoteServer() {
        return this.remoteServer;
    }
}
ConstantService.ɵfac = function ConstantService_Factory(t) { return new (t || ConstantService)(); };
ConstantService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConstantService, factory: ConstantService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/authentication-service.service */ "XOPY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class FooterComponent {
    constructor(authService) {
        this.authService = authService;
        this.siteInfo = new _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_0__["SiteInfo"]();
    }
    ngOnInit() {
        this.authService.authSubject.subscribe(appInfo => {
            this.siteInfo = appInfo.siteInfo;
        });
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 78, vars: 10, consts: [[1, "footer"], [1, "container"], [1, "columns"], [1, "column", "is-4"], [1, "footer-link-title", "has-text-weight-bold"], ["href", "https://biron.bironthemes.com/", 1, "navbar-item", "nav-home", "is-active"], ["href", "https://biron.bironthemes.com/style-guide/", 1, "navbar-item", "nav-style-guide"], ["href", "https://biron.bironthemes.com/features/", 1, "navbar-item", "nav-features"], ["href", "https://biron.bironthemes.com/tag/technology/", 1, "navbar-item", "nav-tech"], ["href", "https://biron.bironthemes.com/tag/web/", 1, "navbar-item", "nav-web"], [1, "social-media"], ["target", "_blank", "title", "Facebook", "aria-label", "Facebook", 1, "social-link", "facebook", 3, "href"], [1, "icon", "facebook"], [1, "icon__svg"], [0, "xlink", "href", "#facebook"], [1, "fab", "fa-facebook"], ["target", "_blank", "title", "Instagram", "aria-label", "Instagram", 1, "social-link", "instagram", 3, "href"], [1, "icon", "instagram"], [0, "xlink", "href", "#instagram"], [1, "fab", "fa-instagram"], ["target", "_blank", "title", "whatsapp", "aria-label", "Linkedin", 1, "social-link", "whatsapp", 3, "href"], [1, "icon", "whatsapp"], [0, "xlink", "href", "#whatsapp"], [1, "fab", "fa-whatsapp"], ["href", "", "target", "_blank", "title", "tel", "aria-label", "tel", 1, "social-link", "tel"], [1, "icon", "tel"], [0, "xlink", "href", "#tel"], [1, "fa", "fa-phone"], [1, "footer-text"], ["method", "post", "action", "/subscribe/", 1, ""], ["type", "hidden", "name", "confirm", 1, "confirm"], ["type", "hidden", "name", "location", "value", "https://biron.bironthemes.com/", 1, "location"], ["type", "hidden", "name", "referrer", "value", "", 1, "referrer"], [1, "form-group"], ["type", "email", "name", "email", "placeholder", "\u0627\u06CC\u0645\u06CC\u0644 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F", 1, "input", "is-rounded"], ["type", "submit", 1, "button", "is-primary", "is-rounded", "has-text-weight-bold"], [1, "footer-bottom", "has-text-centered"], ["href", "http://vavishka.piana.ir", 1, "piana-social-link"], [1, "has-text-centered", "is-centered"], ["target", "_blank", "title", "\u067E\u06CC\u0627\u0646\u0627 \u062F\u0631 \u0641\u06CC\u0633\u0628\u0648\u06A9", "aria-label", "\u067E\u06CC\u0627\u0646\u0627 \u062F\u0631 \u0641\u06CC\u0633\u0628\u0648\u06A9", 1, "piana-social-link", "mx-2", 3, "href"], ["target", "_blank", "title", "\u067E\u06CC\u0627\u0646\u0627 \u062F\u0631 \u0648\u0627\u062A\u0633 \u0627\u067E", "aria-label", "\u067E\u06CC\u0627\u0646\u0627 \u062F\u0631 \u0648\u0627\u062A\u0633 \u0627\u067E", 1, "piana-social-link", "mx-2", 3, "href"], ["target", "_blank", "title", "\u067E\u06CC\u0627\u0646\u0627 \u062F\u0631 \u0627\u06CC\u0646\u0633\u062A\u0627\u06AF\u0631\u0627\u0645", "aria-label", "\u067E\u06CC\u0627\u0646\u0627 \u062F\u0631 \u0627\u06CC\u0646\u0633\u062A\u0627\u06AF\u0631\u0627\u0645", 1, "piana-social-link", "mx-2", 3, "href"], ["target", "_blank", "title", "\u062A\u0645\u0627\u0633 \u0628\u0627 \u067E\u06CC\u0627\u0646\u0627", "aria-label", "\u062A\u0645\u0627\u0633 \u0628\u0627 \u067E\u06CC\u0627\u0646\u0627", 1, "piana-social-link", "mx-2", 3, "href"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0642\u0648\u0627\u0646\u06CC\u0646 \u0648 \u0645\u0642\u0631\u0631\u0627\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u062D\u0631\u06CC\u0645 \u062E\u0635\u0648\u0635\u06CC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u062E\u0631\u06CC\u062F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "use", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " \u0641\u06CC\u0633\u0628\u0648\u06A9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "use", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " \u0627\u06CC\u0646\u0633\u062A\u0627\u06AF\u0631\u0627\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "use", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " \u0648\u0627\u062A\u0633 \u0627\u067E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "use", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " \u0634\u0645\u0627\u0631\u0647 \u062A\u0645\u0627\u0633");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u0627\u0634\u062A\u0631\u0627\u06A9 \u062E\u0628\u0631\u0646\u0627\u0645\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\u062C\u0647\u062A \u0627\u0637\u0644\u0627\u0639 \u0627\u0632 \u0622\u062E\u0631\u06CC\u0646 \u0622\u0645\u0648\u0632\u0634 \u0647\u0627 \u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F \u0648 \u062F\u0631 \u062E\u0628\u0631\u0646\u0627\u0645\u0647 \u0645\u0634\u062A\u0631\u06A9 \u0634\u0648\u06CC\u062F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "form", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u0645\u0634\u062A\u0631\u06A9 \u0634\u0648\u06CC\u062F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\u06A9\u0644\u06CC\u0647 \u062D\u0642\u0648\u0642 \u0627\u06CC\u0646 \u0648\u0628 \u0633\u0627\u06CC\u062A \u0645\u062A\u0639\u0644\u0642 \u0628\u0647 \u06AF\u0631\u0648\u0647 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Piana");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " \u0627\u0633\u062A.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.siteInfo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u062F\u0631\u0628\u0627\u0631\u0647 ", ctx.siteInfo.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.siteInfo.title, " \u062F\u0631 \u0634\u0628\u06A9\u0647 \u0647\u0627\u06CC \u0627\u062C\u062A\u0645\u0627\u0639\u06CC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.siteInfo.facebookLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.siteInfo.instagramLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.siteInfo.whatsappLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.siteInfo.facebookLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.siteInfo.facebookLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.siteInfo.facebookLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.siteInfo.facebookLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".footer[_ngcontent-%COMP%] {\r\n  margin-top: 16px;\r\n  padding: 2em 1.5em\r\n}\r\n\r\n.footer-link-title[_ngcontent-%COMP%] {\r\n  margin-bottom: 1em\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .navbar-item[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin-bottom: .25em\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .footer-text[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 1em\r\n}\r\n\r\n.social-link[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-bottom: .5em\r\n}\r\n\r\n.social-link[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n  margin-right: .5em\r\n}\r\n\r\n.social-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  line-height: 25px\r\n}\r\n\r\n.has-text-weight-semibold[_ngcontent-%COMP%] {\r\n  font-weight: 600!important\r\n}\r\n\r\n.has-text-weight-bold[_ngcontent-%COMP%] {\r\n  font-weight: 700!important\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  border: none;\r\n  display: block;\r\n  height: 2px;\r\n  margin: 1.5rem 0\r\n}\r\n\r\ncode[_ngcontent-%COMP%], hr[_ngcontent-%COMP%] {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.piana-social-link[_ngcontent-%COMP%] {\r\n  color: hotpink;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsVUFBVTtFQUNWO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBSUUsYUFBYTtFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0VBQ1g7QUFDRjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDJlbSAxLjVlbVxyXG59XHJcblxyXG4uZm9vdGVyLWxpbmstdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbVxyXG59XHJcblxyXG4uZm9vdGVyIC5uYXZiYXItaXRlbSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW4tYm90dG9tOiAuMjVlbVxyXG59XHJcblxyXG4uZm9vdGVyIC5mb290ZXItdGV4dCwuZm9vdGVyIC5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxZW1cclxufVxyXG5cclxuLnNvY2lhbC1saW5rIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiAuNWVtXHJcbn1cclxuXHJcbi5zb2NpYWwtbGluayAuaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuNWVtXHJcbn1cclxuXHJcbi5zb2NpYWwtbGluayBwIHtcclxuICBsaW5lLWhlaWdodDogMjVweFxyXG59XHJcblxyXG4uaGFzLXRleHQtd2VpZ2h0LXNlbWlib2xkIHtcclxuICBmb250LXdlaWdodDogNjAwIWltcG9ydGFudFxyXG59XHJcblxyXG4uaGFzLXRleHQtd2VpZ2h0LWJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDAhaW1wb3J0YW50XHJcbn1cclxuXHJcbmhyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luOiAxLjVyZW0gMFxyXG59XHJcblxyXG5jb2RlLCBociB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLnBpYW5hLXNvY2lhbC1saW5rIHtcclxuICBjb2xvcjogaG90cGluaztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Mm/0":
/*!*******************************************************!*\
  !*** ./src/app/components/topbar/topbar.component.ts ***!
  \*******************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../..//services/authentication-service.service */ "XOPY");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loading.service */ "7ch9");
/* harmony import */ var _services_piana_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/piana-storage.service */ "OsEf");
/* harmony import */ var _services_constant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/constant.service */ "J+td");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = ["toggled"];
function TopbarComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopbarComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.openLoginWindow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0648\u0631\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TopbarComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u067E\u0646\u0644 \u06A9\u0627\u0631\u0628\u0631\u06CC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TopbarComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopbarComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.authenticationService.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u062E\u0631\u0648\u062C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/tile/home"]; };
const _c2 = function () { return ["/tile/shop"]; };
class TopbarComponent {
    constructor(authenticationService, loadingService, pianaStorageService, constantService, route, router) {
        this.authenticationService = authenticationService;
        this.loadingService = loadingService;
        this.pianaStorageService = pianaStorageService;
        this.constantService = constantService;
        this.route = route;
        this.router = router;
        this.istoggled = false;
        this.forceShow = false;
        this.windowRef = null;
        this.interval = 0;
    }
    ngOnInit() {
        // console.log(this.toggled['display'])
    }
    ngAfterViewChecked() {
        if (this.toggled) {
            // console.log(window.getComputedStyle(this.toggled.nativeElement).visibility)
            this.istoggled = true;
        }
    }
    forceShowClick() {
        // console.log(window.getComputedStyle(this.toggled.nativeElement).visibility)
        // console.log("asfasd", this.toggled.nativeElement.getAttribute('display'), this.toggled.nativeElement)
        if (this.toggled)
            this.istoggled = true;
        this.forceShow = !this.forceShow;
    }
    openLoginWindow() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(localStorage.getItem('currentUser'));
            // console.log(localStorage.getItem('currentUser')['username']);
            this.authenticationService.initialToSignIn().then(redirectUrl => {
                if (redirectUrl) {
                    this.windowRef = window.open(redirectUrl, "child", "toolbar=no,location=no,directories=no,status=no,menubar=no,titlebar=no,fullscreen=no,scrollbars=1,resizable=no,width=430,height=520,left=500,top=100");
                    this.interval = setInterval(() => { this.loginWindowClosedCheck(); }, 1000);
                }
            }, err => {
                console.log("error");
            });
        });
    }
    loginWindowClosedCheck() {
        if (this.windowRef.closed) {
            console.log("closed");
            clearInterval(this.interval);
            this.loadingService.changeState(true);
            this.authenticationService.login().then(res => {
                this.loadingService.changeState(false);
            }, err => {
                this.loadingService.changeState(false);
            });
        }
    }
}
TopbarComponent.ɵfac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_piana_storage_service__WEBPACK_IMPORTED_MODULE_4__["PianaStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_constant_service__WEBPACK_IMPORTED_MODULE_5__["ConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
TopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopbarComponent, selectors: [["app-topbar"]], viewQuery: function TopbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.toggled = _t.first);
    } }, decls: 24, vars: 15, consts: [["role", "navigation", "aria-label", "main navigation", 1, "navbar", "is-black", 2, "direction", "rtl"], [1, "navbar-brand"], ["href", "#", 1, "navbar-item"], ["src", "../../assets/images/topbar-logo.png", "width", "112", "height", "28"], ["role", "button", "aria-label", "menu", "aria-expanded", "false", "data-target", "navbarBasicExample", 1, "navbar-burger", 3, "click"], ["toggled", ""], ["aria-hidden", "true"], ["id", "navbarBasicExample", 1, "navbar-menu"], [1, "navbar-start"], ["routerLinkActive", "menu-active-link", 1, "navbar-item", 3, "routerLink"], [1, "navbar-end"], [1, "navbar-item"], [1, "buttons"], ["class", "button is-danger", 3, "click", 4, "ngIf"], ["class", "button is-success", 4, "ngIf"], [1, "button", "is-danger", 3, "click"], [1, "button", "is-success"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopbarComponent_Template_a_click_4_listener() { return ctx.forceShowClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u062E\u0627\u0646\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0641\u0631\u0648\u0634\u06AF\u0627\u0647");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TopbarComponent_button_18_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, TopbarComponent_button_20_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, TopbarComponent_button_22_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-active", ctx.istoggled && ctx.forceShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 7, ctx.authenticationService.authSubject).isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 9, ctx.authenticationService.authSubject).isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 11, ctx.authenticationService.authSubject).isLoggedIn);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3BiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "OC8m":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService, NotificationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModel", function() { return NotificationModel; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotificationService {
    constructor() {
        this.editDataDetails = {};
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.editDataDetails);
        this.currentMessage = this.messageSource.asObservable();
    }
    changeMessage(type, message) {
        this.messageSource.next(new NotificationModel(type, message, true));
    }
    clear() {
        this.messageSource.next(new NotificationModel(null, null, false));
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
class NotificationModel {
    constructor(type, message, isShow) {
        this.isShow = isShow;
        this.type = type;
        this.message = message;
    }
}


/***/ }),

/***/ "OsEf":
/*!***************************************************!*\
  !*** ./src/app/services/piana-storage.service.ts ***!
  \***************************************************/
/*! exports provided: PianaStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PianaStorageService", function() { return PianaStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PianaStorageService {
    constructor() { }
    putObject(key, obj) {
        localStorage.setItem(key, JSON.stringify(obj));
    }
    getObject(key) {
        let item = localStorage.getItem(key);
        if (item)
            return JSON.parse(item);
        return null;
    }
    getFieldValue(key, field) {
        let item = this.getObject(key);
        if (item)
            return item[field];
        return null;
    }
    setFieldValue(key, field, value) {
        let item = this.getObject(key);
        if (item) {
            item[field] = value;
            this.putObject(key, item);
        }
    }
}
PianaStorageService.ɵfac = function PianaStorageService_Factory(t) { return new (t || PianaStorageService)(); };
PianaStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PianaStorageService, factory: PianaStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "UgR2":
/*!************************************************************!*\
  !*** ../multishop-cp/src/app/services/constant.service.ts ***!
  \************************************************************/
/*! exports provided: ConstantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantService", function() { return ConstantService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ConstantService {
    constructor() {
        this.remoteServer = "";
    }
    getRemoteServer() {
        return this.remoteServer;
    }
}
ConstantService.ɵfac = function ConstantService_Factory(t) { return new (t || ConstantService)(); };
ConstantService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConstantService, factory: ConstantService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "VniK":
/*!***********************************************************!*\
  !*** ../multishop-cp/src/app/services/loading.service.ts ***!
  \***********************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoadingService {
    constructor() {
        this.editState = false;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.stateSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.editState);
        this.currentState = this.stateSource.asObservable();
    }
    changeState(state) {
        this.stateSource.next(state);
    }
}
LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(); };
LoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "XOPY":
/*!************************************************************!*\
  !*** ./src/app/services/authentication-service.service.ts ***!
  \************************************************************/
/*! exports provided: AuthenticationService, SiteInfo, AppInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteInfo", function() { return SiteInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInfo", function() { return AppInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant.service */ "J+td");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading.service */ "7ch9");
/* harmony import */ var _piana_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./piana-storage.service */ "OsEf");







// import {GoogleLoginProvider, SocialAuthService} from "angularx-social-login";
const googleLoginOptions = {
    scope: 'profile email',
    prompt: 'select_account'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig
class AuthenticationService {
    constructor(
    /*private authService: SocialAuthService,*/
    constantService, loadingService, pianaStorageService) {
        this.constantService = constantService;
        this.loadingService = loadingService;
        this.pianaStorageService = pianaStorageService;
        this.uuid = null;
        this._appInfo = null;
        this._appInfo = new AppInfo(false, null, null, false, false);
        this._authSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this._appInfo);
    }
    setAppInfo(appInfo) {
        this._appInfo = appInfo;
        console.log(this._appInfo);
        this._authSubject.next(this._appInfo);
    }
    get authSubject() {
        return this._authSubject.asObservable();
    }
    isLoggedIn() {
        return this._appInfo.isLoggedIn;
    }
    isAdmin() {
        return this._appInfo.isAdmin;
    }
    initialToSignIn() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let res = yield axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('api/sign-in/sub-domain', {}, { headers: { "content-type": "application/json" } });
                this.uuid = res.data['uuid'];
                return res.data['redirect'];
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getAppInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let res = yield axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('api/app-info', {}, { headers: {} });
            if (res.status === 200) {
                this.setAppInfo(res['data']);
                // console.log(appInfo);
                // console.log(JSON.stringify(appInfo));
                // console.log(localStorage.getItem('appInfo'));
                // this.pianaStorageService.putObject('appInfo', this.appInfo);
                // localStorage.setItem('currentUser', JSON.stringify(appInfo))
                // console.log(this.pianaStorageService.getObject('appInfo')['username'])
                // console.log(this.pianaStorageService.getFieldValue('appInfo', 'username'))
                // console.log(JSON.parse(localStorage.getItem('appInfo'))['username'])
            }
        });
    }
    /*  getSiteInfo(siteInfo): Promise<SiteInfo> {
        return new Promise((resolve, reject) => {
          axios.put('/api/modules/site/info', siteInfo, {headers: {}}).then(
            res => {
              if (res.status === 200) {
                // this._appInfo.siteInfo.title = res['data']['data']['title'];
                // this._appInfo.siteInfo.description = res['data']['data']['description'];
                // this.setAppInfo(this._appInfo);
              }
            }, err => {
            }
          );
    
        });
      }*/
    updateSiteInfo(siteInfo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let res = yield axios__WEBPACK_IMPORTED_MODULE_1___default.a.put('/api/modules/site/site-info', siteInfo, { headers: {} });
            if (res.status === 200) {
                this._appInfo.siteInfo.title = res['data']['data']['title'];
                this._appInfo.siteInfo.description = res['data']['data']['description'];
                this.setAppInfo(this._appInfo);
                // console.log(appInfo);
                // console.log(JSON.stringify(appInfo));
                // console.log(localStorage.getItem('appInfo'));
                // this.pianaStorageService.putObject('appInfo', this.appInfo);
                // localStorage.setItem('currentUser', JSON.stringify(appInfo))
                // console.log(this.pianaStorageService.getObject('appInfo')['username'])
                // console.log(this.pianaStorageService.getFieldValue('appInfo', 'username'))
                // console.log(JSON.parse(localStorage.getItem('appInfo'))['username'])
            }
        });
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let res = yield axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(this.constantService.getRemoteServer() + '/api/sign-in', { uuid: this.uuid }, { headers: { 'Content-Type': 'APPLICATION/JSON' } });
                console.log(res);
                this.setAppInfo(res['data']);
                // this.pianaStorageService.putObject('appInfo', this._appInfo);
                // return this.appInfo;
                return this._appInfo;
            }
            catch (err) {
                throw err;
            }
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("auth service logout");
            // remove user from local storage to log user out
            try {
                // let appInfo = this.pianaStorageService.getObject('appInfo');
                if (!this._appInfo.isLoggedIn)
                    return;
                let res = yield axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('api/sign-out', { headers: {} });
                console.log(res);
                if (res.status == 200) {
                    this.setAppInfo(res['data']);
                    // this.setAppInfo(new AppInfo(null, null, null, false, false));
                    // this.pianaStorageService.putObject('appInfo', res['data']);
                    // localStorage.removeItem('currentUser');
                }
            }
            catch (err) {
                // this.timeStamp = this.timeStamp + 1;
                throw err;
            }
        });
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_constant_service__WEBPACK_IMPORTED_MODULE_4__["ConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_piana_storage_service__WEBPACK_IMPORTED_MODULE_6__["PianaStorageService"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
class SiteInfo {
}
class AppInfo {
    constructor(username, email, pictureUrl, isLoggedIn, isAdmin) {
        this.username = username;
        this.email = email;
        this.pictureUrl = pictureUrl;
        this.isLoggedIn = isLoggedIn;
        this.isAdmin = isAdmin;
    }
}


/***/ }),

/***/ "YrvC":
/*!*************************************************!*\
  !*** ./src/app/services/rest-client.service.ts ***!
  \*************************************************/
/*! exports provided: RestClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestClientService", function() { return RestClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.service */ "J+td");
/* harmony import */ var _ajax_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajax-call.service */ "9hFD");
/* harmony import */ var _product_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-category.service */ "Acff");




class RestClientService {
    constructor(constantService, ajaxCallService, categoryService) {
        this.constantService = constantService;
        this.ajaxCallService = ajaxCallService;
        this.categoryService = categoryService;
        this.ajaxUrlMap = {
            'product': 'api/modules/shop/product',
            'category': 'api/modules/shop/category'
        };
        this.remoteServer = "";
    }
    categoryList() {
        return this.ajaxCallService.read(this.ajaxUrlMap.category + '/list');
    }
    categoryPersist(category) {
        if (category.id === 0) {
            return this.ajaxCallService.save(this.ajaxUrlMap.category, category);
        }
        else {
            return this.ajaxCallService.update(this.ajaxUrlMap.category, category);
        }
    }
    categoryDelete(category) {
        if (category.id > 0) {
            return this.ajaxCallService.delete(this.ajaxUrlMap.category, category.id);
        }
    }
    productList(routerLink) {
        // console.log(this.categoryService.getCategoryId(routerLink))
        return this.ajaxCallService.read(this.ajaxUrlMap.product + '/list/' +
            this.categoryService.getCategoryId(routerLink));
        // return this.ajaxCallService.read(this.ajaxUrlMap.product + '/list/' + routerLink);
    }
    productPersist(product) {
        if (product.id === 0) {
            product.categoryId = this.categoryService.getSelectedCategory().id;
            return this.ajaxCallService.save(this.ajaxUrlMap.product, product);
        }
        else {
            return this.ajaxCallService.update(this.ajaxUrlMap.product, product);
        }
    }
    productDelete(product) {
        if (product.id > 0) {
            return this.ajaxCallService.delete(this.ajaxUrlMap.product, product.id);
        }
    }
}
RestClientService.ɵfac = function RestClientService_Factory(t) { return new (t || RestClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_constant_service__WEBPACK_IMPORTED_MODULE_1__["ConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ajax_call_service__WEBPACK_IMPORTED_MODULE_2__["AjaxCallService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_product_category_service__WEBPACK_IMPORTED_MODULE_3__["ProductCategoryService"])); };
RestClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RestClientService, factory: RestClientService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _views_root_root_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/root/root.component */ "z5mB");
/* harmony import */ var _views_home_view_home_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/home-view/home-view.component */ "vWU6");
/* harmony import */ var _views_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/page-not-found/page-not-found.component */ "r4Iu");
/* harmony import */ var _views_tile_tile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/tile/tile.component */ "rEg3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/authentication-service.service */ "XOPY");
/* harmony import */ var _services_initializer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/initializer.service */ "fAbG");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/shared.module */ "iWjc");











// import {GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from "angularx-social-login";





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_views_root_root_component__WEBPACK_IMPORTED_MODULE_5__["RootComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"],
        _services_initializer_service__WEBPACK_IMPORTED_MODULE_12__["InitializerService"],
        // {
        //   provide: 'SocialAuthServiceConfig',
        //   useValue: {
        //     autoLogin: false,
        //     providers: [
        //       {
        //         id: GoogleLoginProvider.PROVIDER_ID,
        //         provider: new GoogleLoginProvider(
        //           '290205995528-g4ieuas6ffi6vk19dftm312uqlfma2er.apps.googleusercontent.com'
        //         )
        //       }
        //     ]
        //   } as SocialAuthServiceConfig,
        // },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
            useFactory: (initializerService) => () => initializerService.load(),
            deps: [_services_initializer_service__WEBPACK_IMPORTED_MODULE_12__["InitializerService"]],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production }),
            // SocialLoginModule,
            _components_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
        ], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_views_root_root_component__WEBPACK_IMPORTED_MODULE_5__["RootComponent"],
        _views_home_view_home_view_component__WEBPACK_IMPORTED_MODULE_6__["HomeViewComponent"],
        _views_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
        _views_tile_tile_component__WEBPACK_IMPORTED_MODULE_8__["TileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"], 
        // SocialLoginModule,
        _components_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]], exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "fAbG":
/*!*************************************************!*\
  !*** ./src/app/services/initializer.service.ts ***!
  \*************************************************/
/*! exports provided: InitializerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitializerService", function() { return InitializerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _piana_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piana-storage.service */ "OsEf");
/* harmony import */ var _product_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-category.service */ "Acff");
/* harmony import */ var _authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication-service.service */ "XOPY");




class InitializerService {
    constructor(pianaStorageService, categoryService, authenticationService) {
        this.pianaStorageService = pianaStorageService;
        this.categoryService = categoryService;
        this.authenticationService = authenticationService;
    }
    load() {
        this.categoryService.renew();
        return this.authenticationService.getAppInfo();
        /*return new Promise((resolve, reject) => {
          // let appInfo = {
          //   username: "anonymousUser",
          //   email: null,
          //   pictureUrl: null,
          //   isLoggedIn: false,
          //   isFormPassword: false,
          //   isAdmin: false
          // };
          // this.pianaStorageService.putObject('appInfo', appInfo);
          // resolve.apply(appInfo);
          axios.post('api/app-info', {}, {headers: {}}).then(res => {
            if(res.status === 200) {
              let appInfo = res['data'];
              // console.log(appInfo);
              // console.log(JSON.stringify(appInfo));
              // console.log(localStorage.getItem('appInfo'));
    
              this.pianaStorageService.putObject('appInfo', appInfo);
              // localStorage.setItem('currentUser', JSON.stringify(appInfo))
              // console.log(this.pianaStorageService.getObject('appInfo')['username'])
              // console.log(this.pianaStorageService.getFieldValue('appInfo', 'username'))
              // console.log(JSON.parse(localStorage.getItem('appInfo'))['username'])
    
              resolve.apply(appInfo);
            } else {
              reject()
            }
          }, err => {
            reject(err);
          });
        });*/
        // try {
        //   let res = await axios.post('api/app-info', {}, {headers: {}});
        // } catch (err) {
        //
        // }
    }
}
InitializerService.ɵfac = function InitializerService_Factory(t) { return new (t || InitializerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_piana_storage_service__WEBPACK_IMPORTED_MODULE_1__["PianaStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_product_category_service__WEBPACK_IMPORTED_MODULE_2__["ProductCategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
InitializerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InitializerService, factory: InitializerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fWy/":
/*!****************************************************!*\
  !*** ../multishop-cp/src/app/guards/auth.guard.ts ***!
  \****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication-service.service */ "z+Ja");
/* harmony import */ var _services_piana_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/piana-storage.service */ "xZqh");
/* harmony import */ var _services_constant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/constant.service */ "UgR2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AuthGuard {
    constructor(authenticationService, pianaStorageService, constantService, router, route) {
        this.authenticationService = authenticationService;
        this.pianaStorageService = pianaStorageService;
        this.constantService = constantService;
        this.router = router;
        this.route = route;
    }
    canActivate(route, state) {
        // console.log(route)
        // console.log(route['routeConfig']['path'])
        // console.log(state['url'])
        // console.log(state['url'].startsWith('/login'))
        // console.log(localStorage.getItem('currentUser'))
        // console.log(((state['url'].startsWith('login') || state['url'].startsWith('/login')) && localStorage.getItem('currentUser') != null))
        // console.log(state)
        // console.log(route)
        // console.log(localStorage.getItem('currentUser'));
        let appInfo = this.pianaStorageService.getObject('appInfo');
        // console.log(appInfo);
        console.log("subdomain0", state['url']);
        // return false;
        if (state['url'].startsWith('login') || state['url'].startsWith('/login')) {
            console.log("subdomain00", state.root.queryParams['subDomain']);
            if (appInfo === null || appInfo['isLoggedIn'] === false) {
                console.log("subdomain01", state['url']);
                // if((route['routeConfig']['path'].startsWith('login') || route['routeConfig']['path'].startsWith('/login')) && localStorage.getItem('currentUser')) {
                // this.router.navigate(['/home'], { queryParams: { returnUrl: state.url }});
                return true;
            }
            else {
                let subDomain = state.root.queryParams['sub-domain'];
                if (subDomain) {
                    console.log("has sub-domain", subDomain);
                    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(this.constantService.getRemoteServer() + '/api/sign-in/sub-domain/set-principal', { uuid: subDomain }, { headers: { 'Content-Type': 'APPLICATION/JSON', 'auth-type': 'principal' } }).then(res => {
                        if (res.status == 200) {
                            window.close();
                            return true;
                        }
                    }, err => {
                    });
                }
                this.router.navigate(['/tile/home']);
                return false;
            }
        }
        else if (state['url'].startsWith('logout') || state['url'].startsWith('/logout')) {
            // console.log("gaurd => logout", appInfo)
            if (appInfo === null || appInfo['isLoggedIn'] === false) {
                // if((route['routeConfig']['path'].startsWith('login') || route['routeConfig']['path'].startsWith('/login')) && localStorage.getItem('currentUser')) {
                // this.router.navigate(['/home'], { queryParams: { returnUrl: state.url }});
                return false;
            }
            else {
                try {
                    this.authenticationService.logout();
                    return true;
                }
                catch (err) {
                    return false;
                }
            }
        }
        else {
            if (appInfo['isLoggedIn'] === true) {
                if (appInfo['isFormPassword'] === false) {
                    if (state['url'].startsWith('tile/password-setting') || state['url'].startsWith('/tile/password-setting')) {
                        return true;
                    }
                    else {
                        this.router.navigate(['/tile/password-setting'], { queryParams: { returnUrl: state.url } });
                        return false;
                    }
                }
                else {
                    // logged in so return true
                    // console.log(localStorage.getItem('currentUser'))
                    return true;
                }
            }
            else {
                // not logged in so redirect to login page with the return url
                // console.log(state.url)
                this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                return false;
            }
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_piana_storage_service__WEBPACK_IMPORTED_MODULE_3__["PianaStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_constant_service__WEBPACK_IMPORTED_MODULE_4__["ConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "iWjc":
/*!*********************************************!*\
  !*** ./src/app/components/shared.module.ts ***!
  \*********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topbar/topbar.component */ "Mm/0");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _form_maker_form_maker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-maker/form-maker.component */ "wgya");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification/notification.component */ "9ldr");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading/loading.component */ "qQYQ");
/* harmony import */ var _picture_box_picture_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./picture-box/picture-box.component */ "o05m");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "2MiI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");





// import {GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from "angularx-social-login";






class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__["TopbarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _form_maker_form_maker_component__WEBPACK_IMPORTED_MODULE_2__["FormMakerComponent"],
        _notification_notification_component__WEBPACK_IMPORTED_MODULE_3__["NotificationComponent"],
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"],
        _picture_box_picture_box_component__WEBPACK_IMPORTED_MODULE_5__["PictureBoxComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]], exports: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__["TopbarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _form_maker_form_maker_component__WEBPACK_IMPORTED_MODULE_2__["FormMakerComponent"],
        _notification_notification_component__WEBPACK_IMPORTED_MODULE_3__["NotificationComponent"],
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"],
        _picture_box_picture_box_component__WEBPACK_IMPORTED_MODULE_5__["PictureBoxComponent"]] }); })();


/***/ }),

/***/ "o05m":
/*!*****************************************************************!*\
  !*** ./src/app/components/picture-box/picture-box.component.ts ***!
  \*****************************************************************/
/*! exports provided: PictureBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureBoxComponent", function() { return PictureBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = ["fileInput"];
function PictureBoxComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", 256, "px")("max-height", 256, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.item.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PictureBoxComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", 256, "px")("max-height", 256, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PictureBoxComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", 256, "px")("max-height", 256, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.images[ctx_r2.idx], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PictureBoxComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", 256, "px")("max-height", 256, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.unknownURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PictureBoxComponent_div_8_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PictureBoxComponent_div_8_i_4_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.selectImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PictureBoxComponent_div_8_i_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PictureBoxComponent_div_8_i_5_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.selectImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PictureBoxComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PictureBoxComponent_div_8_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.handleFileUpload($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PictureBoxComponent_div_8_i_4_Template, 1, 0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PictureBoxComponent_div_8_i_5_Template, 1, 0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.image);
} }
function PictureBoxComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PictureBoxComponent_div_10_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PictureBoxComponent_div_10_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PictureBoxComponent {
    constructor() {
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unknownURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAADOhJREFUeJzt3XvMHUUdxvHvS1+gLaUtImCbcm0QEMGEoIhyE5EqIBirKCAVFDHI3RhREqMx/uEFuaioiahoQIlCoqCNWgigxpiAIBW02JY7FqGUQgstb2/+8TsH377s7Oz2nZ2Z3fN8kk3aPefszu45z7uXmZ0BERERERERERERERERERERERERERERERERERERERERERERERERERERERGRcZsETExdCJEcTQYWAL9FIRHZTD8cm3qTQiLSMzYcColIzySKw6GQSCts1fDyNwEjJa8fB9yEQiIDbCJ2pHAdRXQkkYGnkIh4KCQiHgqJiIdCIuKhkIh4KCQiHgqJiIdCIuKhkIh4KCSSnaHUBRhjItY267iS98wH5gJro5So2B7AuxOuf0vMBx5LXQgZv9yPJK8DlnrKl+P0b2CnBvaHJJBrSKYB93rKlfN0N7B98L0iSeQWkonAHZ7ytGG6Ddg27K6RVHIJyQTgV55ytGm6keafBZJIcgjJDz3rb+P0/aB7qKNyu4vlkvLu1leBS0peXwA8FHidocwGjil5/SvAFyKVRRqW4kjyac/6cj9VqXJqeEGy0klwMUMyD9hYsp62XOxOBO7EvR0bgVOTlU6CixGS44F1Jctv2+1S3+3pEdpX8SklmgzJ24GXSpb7IO2scNsFWIJ7u14E3pqsdBJcEyF5I7CiZHlPAruHKX4Ss4FluLfvWeANyUonwYUOyVkly1kB7B+w7Km8CViJezsfB3ZLVjoJLnRIzi/4/IvA24KWOq0jgDW499ci4LXJSpeRNtSDTAMOBl4P7Axsx6tvrQ4DJwJ7liynTj3JBcBVvX+vB07qfb5LTsLqliY4Xr8PuDXwOjdh+/+/2LXcXdjRTGqaBpwH/AX7gZYdHepMdY4kFwIbgI+E2KBMnUm4fbsl0wbsOz4PmNrwtnbCZODLwPM096XUCcmBAbYpd5eQNiT96Xngi9hvQAocBjxCnC9DTyZu7jLSB6Q/PYT9FmSUcwl7KqWQ1DMEXEv6cPSndcA5TW5wm1xKui9CIfm/YeAW0odj9FTWSDSK1HexzgJ+UOF9TwB/xmqCX8B2XhXDwEeBfUvek8Mz7rmYBHwS229N2R7YGzuN2rXC+8/Ejm4D5yDsR1n2F+Rmxn8+msPzJFLscPxHrbVY5eZAGQYW4t4pT2MNBkNRSPJ2AvAM7u/mHtz1NZ10Du6d8TCwVwPrVEjyNht4FPd38/F0RYtrGPft3JXY+WlTFJK87YO7DmwpeT+cFszxuH+cMWqtFZK8ldXuz0lYrmh+SvHG3xWxDApJvoZwP9x1TcJyRfMk6Y4eoykk+TqD4u/j0YRlimIXijd8HWkeYVVI8jQda8hY9H1EbYYfu6LwMOBPBfMXku5ed6ouhSZjFZh7ATOAHXplWQ+s6k1PYX3qLsGeGx8kD1D8dOOhwF8jlyWaEyn+q3BzykIR50gyCdv+q7FnLeq0PVvf+8yVvWVsN45ytMV8ivfFCSkL1bQPUbzRN6QsVE9TITkSuA5Y7Vl2nWkV8BPgaNI3F2rKjRRv+9yUhWrah8k3IBA+JHM9ywox3Yf94elaHYErIB+IWYiu7dTxWov9qMserz0Ou2apEpKbgIsDlKvMgdgfmIXAUQ2va+AoIK8WOiRXAhcFKJfP/sDt2OncjhHWNxCabNbcZv2QlN3d6oekyt2tq7DTg6vGzF8G3I+1P3sa67Bua2AKdldrNtb8YmaNsp+GXfecgj0iIC2S+zXIWKGvSc4DfgmcDsyqUY5ZWF/BN1De6+PoaR3Nn941KYtrkNjaFhDIrzJxKnA2Vj9SJSjfoJ13uhQQ2hEQyC8kYM9HnIr1hOgLyTW0LyQKCO0JCOQZErDrlctwN83oT1+PXK7xUkBoV0DAfvz/JL+QALwL67GwrGwXJijXlsoiILrNW8+hWBeoZercAg5pAdZF679K3nMZ3epjuHEKSHU7AtdT7dnoVCF5HGsQ6nq2Zhg7Wr8mWolaTgGp7mqs1W1VqUKyAhstynUk2RW4PF5x2k0BqWYO1t6pyMsln0sZkjlYTyFF5mFd7oiHAuI3Afdf3I34h0ZIebp1OnZhO9YQ8B3ad+u389p4F2se5ZVwkO8tYIArSsr0/gTlqSqLu1ixtS0gQ9iTbUVlfgR7CKov15Bsj7sfgL9FLksdWQREp1jl3ol7UMvPY8OY9YVuBRzKKqysRQ7ChmMTBwWk3Ccc8xdRfNTLNSTXY+NuFJkXsRyto4C4TQHe63jtcoovfiHPkGwAvul47YNsfqoooyggbsdS/MNZDfzM89kcQ/Jzim9JT8WeH5ECCojbsY75t2DDQvvkFpLngN84Xjs6wvpbSQFxc41LckuNZeQWkt855isgDgpIscnAfo7X7qi5rJxCcptj/gEM2PgbVSkgxfaleN88gT1HXlcuIXkYWF4wfxtgzwbX21oKSDHXAD4PjGOZuYTkQcf8fRpcZ2spIMVcrXYfGedycwjJEsf8XRpaX6spIMWmO+YXnZ7UlTokKx3zU/Sunz0FpJjrh7nGMb+ulCFZ5Zg/NfB6OkEBqSfknZ5UIVnnmK9OBAsoIMVcD0FNCbyeFCFxDZ0Q6ujYKQpIsecc83doYF2xQ7KzY75rmweaAlLMVdcxu6H1xQyJq77jP+NcbicpIMVcTcObrCuIFRLX8y1Lx7HMzlJAii3Cnjcfayb1Op2uq+mQ7AXsVDB/BFi8BcvrPAWk2Eu4u81pumFfkyFxlX0h7rtbA00BcXONrVE2Gm4oTYXE9QDYH2ssY6AoIG5/cMw/kTiVak2EZIFjvqsZvETWpl5NpuAerObsiOUI3VvK+WM++xw2qlVu1KtJ5lbjfjjqM8R7fiL0keTbbN7L+43o+iMbbTqCgA0p4PqrfWrksoQ+klzY+8xbgpc0jCyOILG1LSBlHcc9TvimJz6hQ3JSA2UMJYuA6BSr3Cbga47XZgFfilcUIPzp1q9DFKrLFBC/63HXiVyMnYbFlPp5koGigPhtwD2c8lbAddiYGzEpJJEoINX8HviF47Wde6/HHrVJIYlAAanuXOApx2v7YZVtCknHKCDVLccGpNngeP3NWPMUnW51iAJSz63A50pe3w8bc2NOnOK8Yi1wDeUVfgpJC7StHsTlasrrIjZiIzvF6ClkKvC93jrLypRyEJ8tkUU9SGxdCcgQ8GP8P8YnsfE3mmiWMoyNX7KsQjnaGBIFhPYGBCwk36LaD3Ip8CnCPNM+HWtwuLTiutsaEgVk1NTGgPRdDKyn2o9yLfbFn0W9vnB3B87AriHWVFzXCPAPz3tyDkkWAVFfSON3BfB3rMJwpue922J3nOb2/r8c6yt3Cdbj4SrsQns7rH5ld2B/3D2RuDyG/TG6FwuV6yGv/oX7XCy8klgXjyB9O2LNUsZz2hNi+hEwbVS5ch191yeLI4hu84bzLHAacAx2ahPbPdhQah8Dnh81X/UkLdLlI8hoWwGnAPfR/BHjXuyv6pCnTG07kmRxBIltUAIy2juwU6/VhAvFC8C1wOE1y9KmkCggo6YuB6RvEnACdmv4HuwuU9VAjGA19FcA78Eu9rdUW0KSRUB0FyueNdgos/2RZrcB9sY6c5uBNXSciJ0qrcE6U1iG1XcsxkISQv+aRHe3MjTIR5Dc5H4kyeIIortYg0t3typQQAabQuIROyBFHUKD/xalNKdtIdkUc2WxA/KSY37s7nNkczmGxPWoQKdHwjqE4guvRSkLJa/I6cLd1Vr54AjrTmYHijd6I8XjVkh8OYRkRsm6Oz8a72KKN/zclIWSzaQOyUWOdbr6J+uU71K88YtRxWVOUoVkG2wIvKL1XRl4XVk6HPcOvyRhueTVUoTk0pJ1HRJwPVlztXIdoX4DPGlWzJAcibuN2t0Blt8ac3Hv7JXAYemKJgVihOQIrJWya/mu4eM661bcO+Nl4g5SI35NhWQY+Cz2nbuWW1Y/01m7ASso3+GLsK5tpicqo2wudEhmYt9x2fKewf+sf2NSN/E4Fmv+7RsjbwNwP9a5wQu4m6xI8yYA76S8i9X5VG8qfxH2nEuREew3cmedAnbNydR7eEhTO6YtGQ5u9PQy8L6Kn++8OfhPtzS1b6oTkgtGfW45cFTFzw2MPYDbSf+lakoXkvOxsVZmVXz/QDoZu95I/cVqShMSqWAIOBrr0v9R0n/BmgY0JKnvYlU1A9gHa/E7BdWP5Ghr4BzggJL31Lm7JdI5qVsBi2RPIRHxUEhEPBQSEQ+FRMRDIRHxUEhEPBQSEQ+FRMRDIRHxUEhEPBQSEQ+FRMRDIRHxUEhEPBQSEQ+FRMRDIRHxUEhEPLIIiYaBllxVGVhUZOC5jiQ6xRLpGRsShUNkjH5IFA4Rh4koHCIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiMf0PUWtWcapWKpwAAAAASUVORK5CYII=';
        this.idx = 0;
        this.file = '';
        this.item = {
            image: false
        };
    }
    ngOnInit() {
        // console.log(this.images)
        // console.log(this.image)
    }
    clear() {
        this.item.image = false;
    }
    next() {
        this.idx++;
        if (this.idx >= this.images.length)
            this.idx = 0;
    }
    prev() {
        this.idx--;
        if (this.idx < 0)
            this.idx = this.images.length - 1;
    }
    selectImage() {
        this.fileInput.nativeElement.click();
    }
    handleFileUpload(event) {
        // console.log(event.target.files[0]);
        // console.log(this.$refs.file.files[0]);
        this.file = this.fileInput.nativeElement.files[0];
        this.createImage(this.file);
    }
    createImage(file) {
        var image = new Image();
        var reader = new FileReader();
        reader.onload = (e) => {
            this.item.image = e.target.result;
            this.onSelect.emit(this.item.image);
        };
        reader.readAsDataURL(file);
    }
}
PictureBoxComponent.ɵfac = function PictureBoxComponent_Factory(t) { return new (t || PictureBoxComponent)(); };
PictureBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PictureBoxComponent, selectors: [["app-picture-box"]], viewQuery: function PictureBoxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
    } }, inputs: { isUpload: "isUpload", images: "images", image: "image", title: "title" }, outputs: { onSelect: "onSelect" }, decls: 12, vars: 10, consts: [[1, "card-image", "has-text-centered"], [1, "image", "is-4by3"], [3, "src", "max-width", "max-height", 4, "ngIf"], ["alt", "Placeholder image", 3, "src", "max-width", "max-height", 4, "ngIf"], [1, "columns", "is-mobile", "is-vcentered", "is-overlay", "is-multiline", 2, "margin", "0px"], [1, "column", "is-full", 2, "height", "20%"], ["class", "columns", "style", "padding: 0px; margin: 0px;", 4, "ngIf"], [1, "column", "is-full", "is-info", 2, "height", "60%"], ["class", "columns is-mobile is-vcentered is-multiline picture-box-center-control-container", "style", "margin-top: auto; margin-bottom: auto;", 4, "ngIf"], [1, "column", "is-full", "is-info", 2, "height", "20%"], [3, "src"], ["alt", "Placeholder image", 3, "src"], [1, "columns", 2, "padding", "0px", "margin", "0px"], [1, "column", 2, "padding", "0px", "margin", "0px"], ["type", "file", 1, "is-white", "fa", "fa-angle-right", 2, "display", "none", 3, "change"], ["fileInput", ""], ["class", "fa fa-edit picture-upload-plus", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["class", "fa fa-plus picture-upload-plus", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-edit", "picture-upload-plus", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus", "picture-upload-plus", 3, "click"], [1, "columns", "is-mobile", "is-vcentered", "is-multiline", "picture-box-center-control-container", 2, "margin-top", "auto", "margin-bottom", "auto"], [1, "column", "is-narrow"], [1, "button", "is-white", "fa", "fa-angle-right", 2, "opacity", "0.4", 3, "click"], [1, "column"], [1, "button", "is-white", "is-transparent", "fa", "fa-angle-left", 2, "opacity", "0.4", 3, "click"]], template: function PictureBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PictureBoxComponent_img_2_Template, 1, 5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PictureBoxComponent_img_3_Template, 1, 5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PictureBoxComponent_img_4_Template, 1, 5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PictureBoxComponent_img_5_Template, 1, 5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PictureBoxComponent_div_8_Template, 6, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PictureBoxComponent_div_10_Template, 7, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", 256, "px")("max-height", 256, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.item.image && ctx.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.item.image && ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.item.image && !ctx.images && !ctx.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images && ctx.images.length > 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".picture-box-center-control-container[_ngcontent-%COMP%] {\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n  height: 100%;\r\n}\r\n\r\n.picture-upload-plus[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  color: green;\r\n  opacity: 0.8;\r\n}\r\n\r\n.picture-upload-plus[_ngcontent-%COMP%]:hover {\r\n  background-color: #c69500;\r\n  padding: 4px;\r\n  border-radius: 6px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY3R1cmUtYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoicGljdHVyZS1ib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWN0dXJlLWJveC1jZW50ZXItY29udHJvbC1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucGljdHVyZS11cGxvYWQtcGx1cyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuLnBpY3R1cmUtdXBsb2FkLXBsdXM6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNjk1MDA7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "qQYQ":
/*!*********************************************************!*\
  !*** ./src/app/components/loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/loading.service */ "7ch9");


class LoadingComponent {
    constructor(loadingService) {
        this.loadingService = loadingService;
        this.showLoading = false;
    }
    ngOnInit() {
        this.loadingService.currentState.subscribe(state => {
            this.showLoading = state;
            // console.log(state);
        }); //<= Always get current value!
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"])); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 6, vars: 2, consts: [[1, "modal", 2, "z-index", "41"], [1, "modal-background"], [1, "modal-card"], [1, "modal-card-body"], ["max", "100", 1, "progress", "is-small", "is-primary"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "progress", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-active", ctx.showLoading);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "r4Iu":
/*!******************************************************************!*\
  !*** ./src/app/views/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Page Not Founded!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "rEg3":
/*!**********************************************!*\
  !*** ./src/app/views/tile/tile.component.ts ***!
  \**********************************************/
/*! exports provided: TileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileComponent", function() { return TileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_share_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/share-state.service */ "sdx3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/topbar/topbar.component */ "Mm/0");
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/notification/notification.component */ "9ldr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");







function TileComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-topbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TileComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class TileComponent {
    constructor(shareStateService) {
        this.shareStateService = shareStateService;
    }
    ngOnInit() {
    }
}
TileComponent.ɵfac = function TileComponent_Factory(t) { return new (t || TileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_share_state_service__WEBPACK_IMPORTED_MODULE_1__["ShareStateService"])); };
TileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TileComponent, selectors: [["app-tile"]], decls: 4, vars: 6, consts: [[4, "ngIf"]], template: function TileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TileComponent_ng_container_0_Template, 5, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TileComponent_ng_container_2_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.shareStateService.editModeSubject).editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.shareStateService.editModeSubject).editMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_3__["TopbarComponent"], _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aWxlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "sdx3":
/*!*************************************************!*\
  !*** ./src/app/services/share-state.service.ts ***!
  \*************************************************/
/*! exports provided: ShareStateService, EditModeObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareStateService", function() { return ShareStateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModeObject", function() { return EditModeObject; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-category.service */ "Acff");
/* harmony import */ var _authentication_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication-service.service */ "XOPY");
/* harmony import */ var _piana_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./piana-storage.service */ "OsEf");






class ShareStateService {
    constructor(router, categoryService, authService, pianaStorageService) {
        this.router = router;
        this.categoryService = categoryService;
        this.authService = authService;
        this.pianaStorageService = pianaStorageService;
        this.urlMap = {
            product: '/tile/shop/product-editor',
            'product-creator': '/tile/shop/product-creator',
            category: '/tile/shop/category-editor',
            'category-creator': '/tile/shop/category-creator'
        };
        this._editModeObject = null;
        this._lastLink = null;
        this.LAST_LINK = "last-link";
        this.EDIT_MODE_STATE = "edit-mode-state";
        router.events.subscribe((val) => {
            if (val['routerEvent']) {
                // console.log(val['routerEvent'].url)
                if (val['routerEvent'].url === '/tile/shop' ||
                    val['routerEvent'].url === '/tile/shop/') {
                    this.navigateToShop(null);
                }
            }
        });
        this._lastLink = pianaStorageService.getObject(this.LAST_LINK);
        if (!this._lastLink) {
            this._lastLink = {};
            pianaStorageService.putObject(this.LAST_LINK, this._lastLink);
        }
        this._editModeObject = pianaStorageService.getObject(this.EDIT_MODE_STATE);
        // console.log(this._editModeObject)
        if (!this._editModeObject || !this._editModeObject.hasOwnProperty('changeable')) {
            this._editModeObject = new EditModeObject(false, null, null, null);
            pianaStorageService.putObject(this.EDIT_MODE_STATE, this._editModeObject);
        }
        if (this._editModeObject) {
            if (this._editModeObject['editMode'] && !authService.isAdmin()) {
                this._editModeObject = new EditModeObject(false, null, null, null);
                this._editModeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this._editModeObject);
            }
            else {
                this._editModeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this._editModeObject);
            }
        }
        else {
            this._editModeObject = new EditModeObject(false, null, null, null);
            pianaStorageService.putObject(this.EDIT_MODE_STATE, this._editModeObject);
            this._editModeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this._editModeObject);
        }
        this.editModeSubject.subscribe(next => {
            // console.log(next)
            if (next.editMode)
                this.router.navigate([this.urlMap[next.urlKey]], { queryParams: { order: 'popular' } });
            // this.router.navigate([this.urlMap[next.urlKey]], { queryParams: { returnUrl: next.returnUrl } })
        });
    }
    get editModeSubject() {
        return this._editModeSubject.asObservable();
    }
    get editModeObject() {
        return this._editModeObject;
    }
    set editModeObject(editModeObject) {
        this._editModeObject = editModeObject;
        this.pianaStorageService.putObject(this.EDIT_MODE_STATE, this._editModeObject);
        this._editModeSubject.next(this._editModeObject);
    }
    setEditModeObject(editMode, changeable, urlKey, returnUrl) {
        this.editModeObject = new EditModeObject(editMode, changeable, urlKey, returnUrl);
    }
    clearEditModeObject() {
        this.editModeObject = new EditModeObject(false, null, null, null);
    }
    navigateReturn() {
        this.router.navigate([this._editModeObject.returnUrl]);
    }
    navigateToShop(category) {
        console.log(category);
        if (category) {
            this.pianaStorageService.setFieldValue(this.LAST_LINK, 'shop-category', category);
            this.categoryService.setAsSelectedCategory(category);
            this.router.navigate(['/tile/shop/products-gallery/' + category.routerLink]);
        }
        else {
            category = this.pianaStorageService.getFieldValue(this.LAST_LINK, 'shop-category');
            if (category) {
                this.categoryService.setAsSelectedCategory(category);
                this.router.navigate(['/tile/shop/products-gallery/' + category.routerLink]);
            }
            else {
                this.categoryService.setAsSelectedCategory(null);
                this.pianaStorageService.setFieldValue(this.LAST_LINK, 'shop-category', { routerLink: 'default' });
                this.router.navigate(['/tile/shop/products-gallery/default']);
            }
        }
    }
    isCategoryActive(category) {
        // console.log(category)
        let cat = this.pianaStorageService.getFieldValue(this.LAST_LINK, 'shop-category');
        // console.log(cat)
        if (cat != null && this.router.url.startsWith('/tile/shop/products-gallery/')
            && cat['routerLink'] === category.routerLink)
            return true;
        return false;
    }
}
ShareStateService.ɵfac = function ShareStateService_Factory(t) { return new (t || ShareStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_product_category_service__WEBPACK_IMPORTED_MODULE_3__["ProductCategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_piana_storage_service__WEBPACK_IMPORTED_MODULE_5__["PianaStorageService"])); };
ShareStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ShareStateService, factory: ShareStateService.ɵfac, providedIn: 'root' });
class EditModeObject {
    constructor(editMode, changeable, urlKey, returnUrl) {
        this.editMode = editMode;
        this.changeable = changeable;
        this.urlKey = urlKey;
        this.returnUrl = returnUrl;
    }
}
;


/***/ }),

/***/ "vWU6":
/*!********************************************************!*\
  !*** ./src/app/views/home-view/home-view.component.ts ***!
  \********************************************************/
/*! exports provided: HomeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewComponent", function() { return HomeViewComponent; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication-service.service */ "XOPY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/constant.service */ "J+td");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");






class HomeViewComponent {
    constructor(constantService, authService) {
        this.constantService = constantService;
        this.authService = authService;
        this.siteInfo = new _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_1__["SiteInfo"]();
        this.windowRef = null;
        this.uuid = null;
        this.interval = 0;
    }
    ngOnInit() {
        this.authService.authSubject.subscribe(appInfo => {
            this.siteInfo = appInfo.siteInfo;
        });
        // axios.get('/api/message').then(res => {
        //   console.log(res);
        // }, err => {
        //   console.log(err);
        // })
    }
    openLoginWindow() {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('api/sign-in/sub-domain', {}, { headers: { "content-type": "application/json" } })
            .then(res => {
            this.uuid = res.data['uuid'];
            this.windowRef = window.open(res.data['redirect'], "child", "toolbar=no,location=no,directories=no,status=no,menubar=no,titlebar=no,fullscreen=no,scrollbars=1,resizable=no,width=430,height=220,left=500,top=100");
            this.interval = setInterval(() => { this.loginWindowClosedCheck(); }, 1000);
        }, err => {
            console.log(err);
        });
        // this.windowRef= window.open("https://shop.piana.ir:8443/#/child-view","child", "toolbar=no,location=no,directories=no,status=no,menubar=no,titlebar=no,fullscreen=no,scrollbars=1,resizable=no,width=430,height=220,left=500,top=100");
        // if (this.windowRef.addEventListener) {
        //   console.log("addEventListener")
        //   this.windowRef.addEventListener("message", this.receivemessage.bind(this), true);
        // } else {
        //   console.log("attachEvent")
        //   this.windowRef.attachEvent("onmessage", this.receivemessage.bind(this));
        // }
    }
    loginWindowClosedCheck() {
        if (this.windowRef.closed) {
            console.log("closed");
            clearInterval(this.interval);
            axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(this.constantService.getRemoteServer() + '/api/sign-in', { uuid: this.uuid }, { headers: { 'Content-Type': 'APPLICATION/JSON', 'auth-type': 'g-oauth2' } });
        }
    }
}
HomeViewComponent.ɵfac = function HomeViewComponent_Factory(t) { return new (t || HomeViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_constant_service__WEBPACK_IMPORTED_MODULE_3__["ConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
HomeViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeViewComponent, selectors: [["app-home-view"]], decls: 71, vars: 2, consts: [[1, "section", 2, "padding", "8px"], [1, "container", "is-fluid", "has-text-centered", 2, "padding", "4px"], [1, "title"], [1, "columns", "is-centered", 2, "padding", "0px"], [1, "column"], [1, "card"], [1, "card-image"], [1, "image", "is-2by1"], ["src", "../../../assets/images/256x256.png", "alt", "Placeholder image"], [1, "card-content"], [1, "media"], [1, "media-content"], [1, "title", "is-4"], [1, "subtitle", "is-6"], [1, "content"], ["href", "#"]], template: function HomeViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "figure", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "@johnsmith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "@bulmaio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "#css");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "#responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "figure", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "@johnsmith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "@bulmaio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "#css");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "#responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "figure", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "@johnsmith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "@bulmaio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "#css");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "#responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.siteInfo.tipTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.siteInfo.tipDescription);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_tile_tile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/tile/tile.component */ "rEg3");
/* harmony import */ var _views_home_view_home_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/home-view/home-view.component */ "vWU6");
/* harmony import */ var _components_form_maker_form_maker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form-maker/form-maker.component */ "wgya");
/* harmony import */ var _views_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/page-not-found/page-not-found.component */ "r4Iu");
/* harmony import */ var _multishop_cp_src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../multishop-cp/src/app/guards/auth.guard */ "fWy/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: '', children: [
            { path: '', children: [
                    { path: '', redirectTo: '/tile/home', pathMatch: 'full' },
                    { path: 'tile', component: _views_tile_tile_component__WEBPACK_IMPORTED_MODULE_1__["TileComponent"], children: [
                            { path: '', redirectTo: '/home', pathMatch: 'full' },
                            { path: 'home', component: _views_home_view_home_view_component__WEBPACK_IMPORTED_MODULE_2__["HomeViewComponent"] },
                            { path: 'shop',
                                loadChildren: () => __webpack_require__.e(/*! import() | views-shop-shop-module */ "views-shop-shop-module").then(__webpack_require__.bind(null, /*! ./views/shop/shop.module */ "Ev+t")).then(m => m.ShopModule)
                            },
                            { path: 'add-user/:groupName/:formName', component: _components_form_maker_form_maker_component__WEBPACK_IMPORTED_MODULE_3__["FormMakerComponent"], canActivate: [_multishop_cp_src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] }
                        ] },
                ]
            }
        ]
    },
    { path: 'shop', loadChildren: () => __webpack_require__.e(/*! import() | views-shop-shop-module */ "views-shop-shop-module").then(__webpack_require__.bind(null, /*! ./views/shop/shop.module */ "Ev+t")).then(m => m.ShopModule) },
    { path: '**', component: _views_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wgya":
/*!***************************************************************!*\
  !*** ./src/app/components/form-maker/form-maker.component.ts ***!
  \***************************************************************/
/*! exports provided: FormMakerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormMakerComponent", function() { return FormMakerComponent; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loading.service */ "7ch9");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/notification.service */ "OC8m");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function FormMakerComponent_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormMakerComponent_div_0_div_1_div_1_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r9.form[ctx_r9.formDef["fields"][item_r3.key]["field"]] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.formDef["fields"][item_r3.key]["title"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.form[ctx_r6.formDef["fields"][item_r3.key]["field"]]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("placeholder", ctx_r6.formDef["fields"][item_r3.key]["placeholder"]);
} }
function FormMakerComponent_div_0_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormMakerComponent_div_0_div_1_div_2_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r13.form[ctx_r13.formDef["fields"][item_r3.key]["field"]] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.formDef["fields"][item_r3.key]["title"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r7.form[ctx_r7.formDef["fields"][item_r3.key]["field"]]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("placeholder", ctx_r7.formDef["fields"][item_r3.key]["placeholder"]);
} }
function FormMakerComponent_div_0_div_1_label_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormMakerComponent_div_0_div_1_label_3_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r17.form[ctx_r17.formDef["fields"][item_r3.key]["field"]] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r8.form[ctx_r8.formDef["fields"][item_r3.key]["field"]]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r8.formDef["fields"][item_r3.key]["title"], " ");
} }
function FormMakerComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormMakerComponent_div_0_div_1_div_1_Template, 5, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FormMakerComponent_div_0_div_1_div_2_Template, 5, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FormMakerComponent_div_0_div_1_label_3_Template, 3, 2, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("className", ctx_r2.parseColumn(ctx_r2.formDef["fields"][item_r3.key]["size"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.formDef["fields"][item_r3.key]["type"] === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.formDef["fields"][item_r3.key]["type"] === "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.formDef["fields"][item_r3.key]["type"] === "boolean");
} }
function FormMakerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormMakerComponent_div_0_div_1_Template, 4, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx_r0.formDef["layout"]["style"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, ctx_r0.formDef["fields"]));
} }
function FormMakerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormMakerComponent_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const item_r21 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.applyActivities(ctx_r24.formDef["buttons"][item_r21.key]["activities"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("className", ctx_r1.parseColumn(ctx_r1.formDef["buttons"][item_r21.key]["size"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("className", ctx_r1.formDef["buttons"][item_r21.key]["class"].concat(" button is-fullwidth"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.formDef["buttons"][item_r21.key]["title"], "");
} }
class FormMakerComponent {
    constructor(route, loadingService, notificationService) {
        this.route = route;
        this.loadingService = loadingService;
        this.notificationService = notificationService;
        this.formDef = { layout: {}, fields: [], buttons: [] };
        this.formJson = null;
        this.form = {};
        this.initialized = false;
    }
    okClick() {
        console.log(this.form);
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.groupName = params['groupName']; // (+) converts string 'id' to a number
            this.formName = params['formName']; // (+) converts string 'id' to a number
            console.log(this.groupName, this.formName);
            axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('api/form/def', { "group-name": "user", "form-name": "add-user" }, { headers: { "content-type": "application/json" } })
                .then(res => {
                // console.log(res);
                if (res.status === 200) {
                    console.log(res['data']);
                    console.log(JSON.stringify(res['data']));
                    this.formDef = res['data'];
                    this.formDef['fields'] = this.parseField(res['data']['fields']);
                    this.formDef['buttons'] = this.parseButtons(res['data']['buttons']);
                    this.formDef['layout'] = res['data']['layout'];
                    console.log(this.formDef['layout']['style']);
                    this.initialized = true;
                    // this.formDef['container'] = this.parseLayout(res['data']['layout']);
                    console.log(this.formDef);
                    console.log(this.form);
                }
            }, err => {
                console.log(err);
            });
            // In a real app: dispatch action to load the details here.
        });
    }
    parseColumn(val) {
        if (val === "1")
            return "column is-12";
        else if (val == "1/2")
            return "column is-6";
        else if (val == "1/3")
            return "column is-4";
        else if (val == "1/4")
            return "column is-3";
        return "column";
    }
    parseField(fields) {
        let keyOrder = [];
        let keyParsed = {};
        let parsed = {};
        let defaultMap = {};
        let i = 0;
        for (let field of Object.keys(fields)) {
            let splited = field.split('.');
            if (!keyParsed[splited[0]]) {
                keyParsed[splited[0]] = {};
                parsed[i++] = { 'field': splited[0] };
                defaultMap[splited[0]] = {};
                this.form[splited[0]] = null;
            }
            if (splited[1] === 'default') {
                defaultMap[splited[0]]['default'] = fields[field];
            }
            if (splited[1] === 'type') {
                defaultMap[splited[0]]['type'] = fields[field];
                if (this.form[splited[0]] == null) {
                    if (fields[field] === 'text')
                        this.form[splited[0]] = '';
                    else if (fields[field] === 'number')
                        this.form[splited[0]] = 0;
                    else if (fields[field] === 'password')
                        this.form[splited[0]] = '';
                    else if (fields[field] === 'boolean')
                        this.form[splited[0]] = false;
                }
            }
            parsed[i - 1][splited[1]] = fields[field];
        }
        // console.log(defaultMap)
        for (let field of Object.keys(defaultMap)) {
            // console.log(field, defaultMap[field])
            if (defaultMap[field].hasOwnProperty('default') && defaultMap[field].hasOwnProperty('default')) {
                if (defaultMap[field]['type'] === 'text')
                    this.form[field] = defaultMap[field]['default'];
                else if (defaultMap[field]['type'] === 'number')
                    this.form[field] = +defaultMap[field]['default'];
                else if (defaultMap[field]['type'] === 'password')
                    this.form[field] = '';
                else if (defaultMap[field]['type'] === 'boolean') {
                    this.form[field] = defaultMap[field]['default'] === 'true';
                }
            }
        }
        // console.log(parsed)
        // console.log(this.form)
        this.formJson = JSON.stringify(this.form);
        return parsed;
    }
    parseButtons(buttons) {
        let keyParsed = {};
        let activities = {};
        let buttonToIndex = {};
        let parsed = {};
        let i = 0;
        for (let button of Object.keys(buttons)) {
            let splited = button.split('.');
            // console.log(splited)
            if (!keyParsed[splited[0]]) {
                keyParsed[splited[0]] = {};
                buttonToIndex[splited[0]] = i;
                parsed[i++] = { 'button': splited[0] };
            }
            if (splited.length == 2) {
                parsed[i - 1][splited[1]] = buttons[button];
            }
            else if (splited.length == 3) {
                if (!parsed[i - 1][splited[1]]) {
                    parsed[i - 1][splited[1]] = [];
                }
                parsed[i - 1][splited[1]].splice(+splited[2], 0, buttons[button]);
            }
            else if (splited.length == 4) {
                // console.log(splited[1], splited[2], splited[3])
                if (!activities[buttonToIndex[splited[0]]]) {
                    activities[buttonToIndex[splited[0]]] = {};
                }
                if (!activities[buttonToIndex[splited[0]]][splited[2]]) {
                    activities[buttonToIndex[splited[0]]][splited[2]] = { key: '', value: '' };
                }
                if (splited[3] == 'key') {
                    activities[buttonToIndex[splited[0]]][splited[2]]['key'] = buttons[button];
                }
                else if (splited[3] == 'value') {
                    activities[buttonToIndex[splited[0]]][splited[2]]['value'] = buttons[button];
                }
            }
        }
        for (let index of Object.keys(parsed)) {
            let i = index;
            parsed[i]['activities'] = [];
            for (let j of Object.keys(activities[i])) {
                let obj = {};
                obj[activities[i][j]['key']] = activities[i][j]['value'];
                parsed[i]['activities'][j] = obj;
            }
        }
        // console.log(activities)
        // console.log(parsed)
        return parsed;
    }
    resetForm() {
        this.form = JSON.parse(this.formJson);
    }
    applyActivities(activities) {
        console.log(activities);
        if (activities[0].hasOwnProperty('url')) {
            this.loadingService.changeState(true);
            axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(activities[0]['url'], this.form, { headers: { "content-type": "application/json" } }).then(res => {
                console.log(res);
                this.loadingService.changeState(false);
                this.notificationService.changeMessage('success', 'با موفقیت انجام شد');
                this.resetForm();
            }, err => {
                console.log(err);
                this.loadingService.changeState(false);
                this.notificationService.changeMessage('error', 'با خطا مواجه شد');
            });
        }
    }
}
FormMakerComponent.ɵfac = function FormMakerComponent_Factory(t) { return new (t || FormMakerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"])); };
FormMakerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormMakerComponent, selectors: [["app-form-maker"]], inputs: { groupName: "groupName", formName: "formName" }, decls: 4, vars: 6, consts: [["class", "columns is-multiline", 3, "style", 4, "ngIf"], [1, "columns", "is-multiline"], [3, "className", 4, "ngFor", "ngForOf"], [3, "className"], ["class", "field", 4, "ngIf"], ["class", "checkbox", 4, "ngIf"], [1, "field"], [1, "label"], [1, "control"], ["type", "text", 1, "input", 3, "ngModel", "ngModelChange"], ["type", "password", 1, "input", 3, "ngModel", "ngModelChange"], [1, "checkbox"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [3, "className", "click"]], template: function FormMakerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FormMakerComponent_div_0_Template, 3, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FormMakerComponent_div_2_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.initialized);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx.formDef["layout"]["style"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.formDef["buttons"]));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["KeyValuePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLW1ha2VyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "xZqh":
/*!*****************************************************************!*\
  !*** ../multishop-cp/src/app/services/piana-storage.service.ts ***!
  \*****************************************************************/
/*! exports provided: PianaStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PianaStorageService", function() { return PianaStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PianaStorageService {
    constructor() { }
    putObject(key, obj) {
        localStorage.setItem(key, JSON.stringify(obj));
    }
    getObject(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    getFieldValue(key, field) {
        return JSON.parse(localStorage.getItem(key))[field];
    }
    removeObject(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
}
PianaStorageService.ɵfac = function PianaStorageService_Factory(t) { return new (t || PianaStorageService)(); };
PianaStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PianaStorageService, factory: PianaStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "z+Ja":
/*!**************************************************************************!*\
  !*** ../multishop-cp/src/app/services/authentication-service.service.ts ***!
  \**************************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "kIj8");
/* harmony import */ var _constant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant.service */ "UgR2");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading.service */ "VniK");
/* harmony import */ var _piana_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./piana-storage.service */ "xZqh");









const googleLoginOptions = {
    scope: 'profile email',
    prompt: 'select_account'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig
class AuthenticationService {
    constructor(authService, constantService, loadingService, pianaStorageService) {
        this.authService = authService;
        this.constantService = constantService;
        this.loadingService = loadingService;
        this.pianaStorageService = pianaStorageService;
        this.appInfo = null;
    }
    getToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                console.log("service googleSignIn");
                let socialUser = yield this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID, googleLoginOptions);
                let accessToken = socialUser['authToken'];
                return accessToken;
            }
            catch (e) {
            }
        });
    }
    getAppInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let res = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('api/app-info', {}, { headers: {} });
            if (res.status === 200) {
                this.appInfo = res['data'];
                // console.log(appInfo);
                // console.log(JSON.stringify(appInfo));
                // console.log(localStorage.getItem('appInfo'));
                this.pianaStorageService.putObject('appInfo', this.appInfo);
                // localStorage.setItem('currentUser', JSON.stringify(appInfo))
                // console.log(this.pianaStorageService.getObject('appInfo')['username'])
                // console.log(this.pianaStorageService.getFieldValue('appInfo', 'username'))
                // console.log(JSON.parse(localStorage.getItem('appInfo'))['username'])
            }
        });
    }
    googleSignIn(subDomain) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                console.log("service googleSignIn");
                let accessToken = null;
                this.loadingService.changeState(true);
                if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && false) {
                    console.log("is-dev");
                    accessToken = "1234";
                    //   .then(res => {
                    //     console.log(res);
                    //   }, err => {
                    //     console.log(err);
                    //   });
                }
                else {
                    console.log("is-prod");
                    let socialUser = yield this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID, googleLoginOptions);
                    accessToken = socialUser['authToken'];
                    // console.log(accessToken, socialUser)
                }
                if (accessToken == null) {
                    return;
                }
                if (subDomain != null) {
                    let res = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.constantService.getRemoteServer() + '/api/sign-in/sub-domain/set-token', { 'accessToken': accessToken, uuid: subDomain }, { headers: { 'Content-Type': 'APPLICATION/JSON', 'auth-type': 'g-oauth2' } });
                    if (res.status == 200) {
                        return "close";
                    }
                }
                else {
                    let res = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.constantService.getRemoteServer() + '/api/sign-in', { 'accessToken': accessToken }, { headers: { 'Content-Type': 'APPLICATION/JSON', 'auth-type': 'g-oauth2' } });
                    let appInfo = res['data'];
                    this.pianaStorageService.putObject('appInfo', appInfo);
                    return appInfo;
                }
            }
            catch (error) {
                throw error;
                //on fail do something
            }
        });
    }
    login(loginInfo, subDomain) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (subDomain != null) {
                    loginInfo.uuid = subDomain;
                    let res = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.constantService.getRemoteServer() + '/api/sign-in/sub-domain/set-login-info', loginInfo, { headers: { 'Content-Type': 'APPLICATION/JSON', 'auth-type': 'form' } });
                    if (res.status == 200) {
                        return "close";
                    }
                }
                else {
                    let res = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('api/sign-in', loginInfo, { headers: { 'auth-type': 'form' } });
                    console.log(res);
                    let appInfo = res['data'];
                    // console.log(appInfo);
                    // console.log(JSON.stringify(appInfo));
                    // localStorage.setItem('currentUser', JSON.stringify(appInfo));
                    this.pianaStorageService.putObject('appInfo', appInfo);
                    // console.log(localStorage.getItem('currentUser'));
                    return appInfo;
                }
            }
            catch (err) {
                // this.timeStamp = this.timeStamp + 1;
                throw err;
            }
        });
    }
    changePassword(password, passwordRepeat) {
        return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('api/change-password', { password: password, passwordRepeat: passwordRepeat }, { headers: { 'content-type': 'application/json' } });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("auth service logout");
            // remove user from local storage to log user out
            try {
                let appInfo = this.pianaStorageService.getObject('appInfo');
                if (appInfo == null)
                    return;
                let res = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('api/sign-out', { headers: {} });
                console.log(res);
                if (res.status == 200) {
                    this.pianaStorageService.putObject('appInfo', res['data']);
                    // localStorage.removeItem('currentUser');
                }
            }
            catch (err) {
                // this.timeStamp = this.timeStamp + 1;
                throw err;
            }
        });
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["SocialAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_constant_service__WEBPACK_IMPORTED_MODULE_4__["ConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_piana_storage_service__WEBPACK_IMPORTED_MODULE_6__["PianaStorageService"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "z5mB":
/*!**********************************************!*\
  !*** ./src/app/views/root/root.component.ts ***!
  \**********************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication-service.service */ "XOPY");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/loading/loading.component */ "qQYQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class RootComponent {
    constructor(titleService, authenticationService) {
        this.titleService = titleService;
        this.authenticationService = authenticationService;
        authenticationService.authSubject.subscribe(appInfo => {
            this.titleService.setTitle(appInfo.siteInfo.title);
        });
    }
}
RootComponent.ɵfac = function RootComponent_Factory(t) { return new (t || RootComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
RootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RootComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function RootComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUFDNUIsK0JBQStCO0FBQy9CLHFCQUFxQjtBQUNyQixjQUFjO0FBQ2QsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2QixJQUFJO0FBRUosMEJBQTBCO0FBQzFCLCtCQUErQjtBQUMvQixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixJQUFJIiwiZmlsZSI6InJvb3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLm5vdGlmaWNhdGlvbi1jb250YWluZXIgeyovXHJcbi8qICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0OyovXHJcbi8qICBwb3NpdGlvbjogZml4ZWQ7Ki9cclxuLyogIHJpZ2h0OiAwOyovXHJcbi8qICB0b3A6IDA7Ki9cclxuLyogIGhlaWdodDogMTAwJTsqL1xyXG4vKiAgd2lkdGg6IDUwJTsqL1xyXG4vKiAgISpvcGFjaXR5OiAwLjU7KiEqL1xyXG4vKiAgcGFkZGluZzogNTBweCA1cHg7Ki9cclxuLyp9Ki9cclxuXHJcbi8qLm5vdGlmaWNhdGlvbi1tZXNzYWdlIHsqL1xyXG4vKiAgYmFja2dyb3VuZC1jb2xvcjogI2RjOTI5MjsqL1xyXG4vKiAgei1pbmRleDogMTAwMDsqL1xyXG4vKiAgb3BhY2l0eTogMTsqL1xyXG4vKiAgbWFyZ2luOiAycHg7Ki9cclxuLyp9Ki9cclxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map