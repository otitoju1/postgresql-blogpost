"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 6215:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 9004);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 2371:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 6215);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 9004);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 9004:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_All_Prime_Tech_02_Desktop_Projects_postgresql_client_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 7230);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);





let LoginPage = class LoginPage {
    constructor(router) {
        this.router = router;
        this.focusedEmail = false;
        this.focusedPassword = false;
    }
    ngOnInit() {
    }
    onBlur(event) {
        const value = event.target.value;
        if (!value) {
            this.focusedEmail = false;
        }
    }
    onBlurPassword(event) {
        const value = event.target.value;
        if (!value) {
            this.focusedPassword = false;
        }
    }
    dashboard() {
        this.router.navigateByUrl('/dashboard');
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login',
        template: _C_Users_All_Prime_Tech_02_Desktop_Projects_postgresql_client_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7230:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/login/login.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <h1>Welcome,</h1>\r\n  <h3>Sign in to continue!</h3>\r\n  <form>\r\n    <div class=\"form-field\">\r\n      <label [ngClass]=\"focusedEmail ? 'label-focused' : '' \" for=\"email\">Email ID</label>\r\n      <input type=\"email\"  (focus)=\"focusedEmail = true\" (blur)=\"onBlur($event)\"/>\r\n    </div>\r\n\r\n    <div class=\"form-field\">\r\n      <label [ngClass]=\"focusedPassword ? 'label-focused' : '' \" for=\"email\">Password</label>\r\n      <input type=\"password\" (focus)=\"focusedPassword = true\" (blur)=\"onBlurPassword($event)\" />\r\n    </div>\r\n    <a routerLink=\"#\" class=\"forgot-password-link\">Forgot Password?</a>\r\n\r\n    <ion-button (click)=\"dashboard()\" expand=\"block\" class=\"ion-margin-top\" color=\"primary\"> <ion-icon name=\"log-in-outline\"></ion-icon>SIGN IN</ion-button>\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ 8918:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "content {\n  background-color: #1b1b20;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  margin-top: 15%;\n  margin-bottom: 10px;\n  font-size: 32px;\n  font-weight: 700;\n}\n\nh3 {\n  color: #939fab;\n  font-weight: 600;\n}\n\nform {\n  margin-top: 6rem;\n}\n\nform .forgot-password-link {\n  text-decoration: none;\n  display: inline-block;\n  width: 100%;\n  text-align: right;\n  font-weight: 600;\n  font-size: 14px;\n  color: #4a4a4a;\n}\n\n.form-field {\n  position: relative;\n  margin-bottom: 1rem;\n  height: 50px;\n}\n\n.form-field label {\n  position: absolute;\n  left: 1rem;\n  top: 1rem;\n  padding: 0 0.25rem;\n  color: #939fab;\n  font-size: 1rem;\n  transition: 0.3s;\n}\n\n.form-field input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  font-size: 17px;\n  font-weight: 600;\n  border: 2px solid #e7ebee;\n  border-radius: 10px;\n  outline: none;\n  padding: 1rem;\n  background: none;\n  z-index: 1;\n  color: #171c25;\n}\n\n.form-field input:focus {\n  border-color: #fa578e;\n}\n\n.form-field .label-focused {\n  top: -0.5rem;\n  left: 0.8rem;\n  font-size: 14px;\n  font-weight: 600;\n  background-color: #fff;\n  z-index: 10;\n}\n\nion-button {\n  --box-shadow: none;\n  --border-radius: 10px;\n  height: 48px;\n  font-size: 17px;\n  color: #fff;\n  margin-bottom: 0.5rem;\n  margin-top: 0.5rem;\n  text-transform: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBQUk7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVSOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBUjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFEUjs7QUFJSTtFQUNJLHFCQUFBO0FBRlI7O0FBS0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUhSOztBQVFBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUxKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIyMDtcclxufVxyXG4qIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBjb2xvcjogIzkzOWZhYjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogNnJlbTtcclxuXHJcbiAgICAuZm9yZ290LXBhc3N3b3JkLWxpbmsge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICM0YTRhNGE7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxcmVtO1xyXG4gICAgICAgIHRvcDogMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwIDAuMjVyZW07XHJcbiAgICAgICAgY29sb3I6ICM5MzlmYWI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2U3ZWJlZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgY29sb3I6ICMxNzFjMjU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZhNTc4ZTtcclxuICAgIH1cclxuXHJcbiAgICAubGFiZWwtZm9jdXNlZCB7XHJcbiAgICAgICAgdG9wOiAtMC41cmVtO1xyXG4gICAgICAgIGxlZnQ6IDAuOHJlbTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map