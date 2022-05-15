"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_products_products_module_ts"],{

/***/ 4352:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule),
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);



class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    }
}
Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) { return new (t || Ng2SearchPipe)(); };
Ng2SearchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: Ng2SearchPipe, pure: false });
Ng2SearchPipe.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Ng2SearchPipe, factory: Ng2SearchPipe.ɵfac });
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'filter',
                pure: false
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], null, null); })();

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) { return new (t || Ng2SearchPipeModule)(); };
Ng2SearchPipeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Ng2SearchPipeModule });
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, { declarations: [Ng2SearchPipe], exports: [Ng2SearchPipe] }); })();

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 2020:
/*!***********************************************************!*\
  !*** ./src/app/pages/products/products-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPageRoutingModule": () => (/* binding */ ProductsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.page */ 9293);




const routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_0__.ProductsPage
    }
];
let ProductsPageRoutingModule = class ProductsPageRoutingModule {
};
ProductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductsPageRoutingModule);



/***/ }),

/***/ 7827:
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPageModule": () => (/* binding */ ProductsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 4352);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-routing.module */ 2020);
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.page */ 9293);








let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _products_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProductsPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule
        ],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_2__.ProductsPage]
    })
], ProductsPageModule);



/***/ }),

/***/ 9293:
/*!*************************************************!*\
  !*** ./src/app/pages/products/products.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPage": () => (/* binding */ ProductsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_All_Prime_Tech_02_Desktop_Projects_postgresql_client_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./products.page.html */ 6256);
/* harmony import */ var _products_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.page.scss */ 9862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/blog.service */ 4786);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);






let ProductsPage = class ProductsPage {
    constructor(blogService, route) {
        this.blogService = blogService;
        this.route = route;
        this.posts = [];
        this.searchString = '';
    }
    ngOnInit() {
        this.blogService.get('/api/v1/posts').subscribe((response) => {
            this.posts = response.info;
        });
    }
    signin() {
        this.route.navigate(['/login']);
    }
};
ProductsPage.ctorParameters = () => [
    { type: src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_2__.BlogService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ProductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-products',
        template: _C_Users_All_Prime_Tech_02_Desktop_Projects_postgresql_client_node_modules_ngtools_webpack_src_loaders_direct_resource_js_products_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_products_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductsPage);



/***/ }),

/***/ 6256:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/products/products.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header collapse=\"fade\" [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"secondary\">\r\n      <ion-button (click)=\"signin()\">\r\n        <ion-icon name=\"log-in-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button>\r\n        <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <!-- <ion-buttons slot=\"primary\">\r\n      <ion-button color=\"secondary\">\r\n        <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-title>Blog</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"homescreen\">\r\n    <h2 class=\"homescreen__title\">Latest Posts</h2>\r\n    <ion-searchbar showCancelButton=\"always\" [(ngModel)]=\"searchString\"></ion-searchbar>\r\n    <div class=\"homescreen__products\">\r\n      <div class=\"product\" *ngFor=\"let post of posts | filter:searchString\">\r\n        <img src='{{post.photo}}' alt=\"blog-image\" />\r\n  \r\n        <div class=\"product__info\">\r\n          <p class=\"info__name\">{{post.title}}</p>\r\n  \r\n          <p class=\"info__description\">{{post.content.substring(0, 100)}}...</p>\r\n  \r\n          <!-- <p class=\"info__price\">${{product.price}}</p> -->\r\n  \r\n          <a [routerLink]=\"['/post', post.id]\" class=\"info__button\">\r\n            View\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 9862:
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ".navbar {\n  width: 100%;\n  background-color: #171717;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1rem;\n  z-index: 50;\n}\n\n.navbar__logo h2 {\n  color: #f4f4f4;\n  font-size: 1.4rem;\n  cursor: pointer;\n}\n\n.navbar__links {\n  display: flex;\n  list-style: none;\n  align-items: center;\n}\n\n.navbar__links > li {\n  padding-left: 1.5rem;\n}\n\n.navbar__links > li > a {\n  text-decoration: none;\n  color: #f4f4f4;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n}\n\n.navbar__links > li > a > span {\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n}\n\n.cart__link {\n  background: #333;\n  padding: 10px;\n  border-radius: 8px;\n}\n\n.cart__link:hover {\n  background: #dd219e;\n  color: #f4f4f4;\n}\n\n.cartlogo__badge {\n  width: 30px;\n  height: 30px;\n  background-color: #f4f4f4;\n  border-radius: 50%;\n  margin-left: 8px;\n  color: #171717;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n}\n\n.hamburger__menu {\n  display: none;\n  width: 30px;\n  height: 30px;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n}\n\n.hamburger__menu:hover > div {\n  background: #dd219e;\n}\n\n.hamburger__menu > div {\n  width: 100%;\n  height: 3px;\n  background: #f4f4f4;\n}\n\n@media (max-width: 960px) {\n  .navbar__links {\n    display: none;\n  }\n\n  .hamburger__menu {\n    display: flex;\n  }\n}\n\n@media (max-width: 500px) {\n  .navbar__logo h2 {\n    font-size: 1rem;\n  }\n}\n\n.homescreen {\n  max-width: 1300px;\n  margin: 1rem auto;\n}\n\n.homescreen__title {\n  font-size: 1.5rem;\n  color: #fff;\n  margin-bottom: 1rem;\n  margin-left: 8px;\n}\n\n.homescreen__products {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n\n@media (max-width: 1232px) {\n  .homescreen__products {\n    grid-template-columns: repeat(3, auto);\n  }\n}\n\n@media (max-width: 950px) {\n  .homescreen__products {\n    grid-template-columns: repeat(2, auto);\n  }\n}\n\n@media (max-width: 630px) {\n  .homescreen__products {\n    grid-template-columns: 1fr;\n  }\n}\n\n.product {\n  width: 300px;\n  padding: 1rem;\n  background: #fff;\n  cursor: pointer;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n  margin: 8px auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-direction: column;\n}\n\n.product > img {\n  width: 100%;\n  height: 170px;\n  object-fit: contain;\n  border-radius: 8px;\n}\n\n.product__info > p {\n  margin-bottom: 8px;\n}\n\n.info__price {\n  font-weight: bold;\n  color: #000;\n}\n\n.info__name {\n  font-size: 1rem;\n  overflow: hidden;\n  color: #000;\n}\n\n.info__description {\n  font-size: 0.8rem;\n  color: #000;\n}\n\n.info__button {\n  display: block;\n  text-decoration: none;\n  text-align: center;\n  color: #171717;\n  width: 100%;\n  padding: 8px 16px;\n  background-color: #f4f4f4;\n  border: 1px solid #171717;\n  font-size: 1rem;\n}\n\n.info__button:hover {\n  background: #171717;\n  color: #f4f4f4;\n}\n\n@media (max-width: 1232px) {\n  .product {\n    width: 360px;\n  }\n}\n\n@media (max-width: 1115px) {\n  .product {\n    width: 330px;\n  }\n}\n\n@media (max-width: 1028px) {\n  .product {\n    width: 300px;\n  }\n}\n\n@media (max-width: 950px) {\n  .product {\n    width: 400px;\n  }\n}\n\n@media (max-width: 830px) {\n  .product {\n    width: 330px;\n  }\n}\n\n@media (max-width: 700px) {\n  .product {\n    width: 290px;\n  }\n}\n\n@media (max-width: 630px) {\n  .product {\n    width: 450px;\n  }\n}\n\n@media (max-width: 500px) {\n  .product {\n    width: 350px;\n  }\n}\n\n@media (max-width: 400px) {\n  .product {\n    width: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFBO0VBQ0Y7O0VBRUE7SUFDRSxhQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBQTtFQUFGO0FBQ0Y7O0FBTUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBSko7O0FBT0U7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSko7O0FBT0U7RUFDRSxhQUFBO0VBQ0EscUNBQUE7QUFKSjs7QUFPRTtFQUNFO0lBQ0Usc0NBQUE7RUFKSjtBQUNGOztBQU9FO0VBQ0U7SUFDRSxzQ0FBQTtFQUxKO0FBQ0Y7O0FBUUU7RUFDRTtJQUNFLDBCQUFBO0VBTko7QUFDRjs7QUFVRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUFSSjs7QUFXRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVJKOztBQVdFO0VBQ0Usa0JBQUE7QUFSSjs7QUFXRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQVJKOztBQVdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVJKOztBQVdFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBUko7O0FBV0U7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQVJKOztBQVdFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBUko7O0FBV0U7RUFDRTtJQUNFLFlBQUE7RUFSSjtBQUNGOztBQVdFO0VBQ0U7SUFDRSxZQUFBO0VBVEo7QUFDRjs7QUFZRTtFQUNFO0lBQ0UsWUFBQTtFQVZKO0FBQ0Y7O0FBYUU7RUFDRTtJQUNFLFlBQUE7RUFYSjtBQUNGOztBQWNFO0VBQ0U7SUFDRSxZQUFBO0VBWko7QUFDRjs7QUFlRTtFQUNFO0lBQ0UsWUFBQTtFQWJKO0FBQ0Y7O0FBZ0JFO0VBQ0U7SUFDRSxZQUFBO0VBZEo7QUFDRjs7QUFpQkU7RUFDRTtJQUNFLFlBQUE7RUFmSjtBQUNGOztBQWtCRTtFQUNFO0lBQ0UsWUFBQTtFQWhCSjtBQUNGIiwiZmlsZSI6InByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcclxuICB6LWluZGV4OiA1MDtcclxufVxyXG5cclxuLm5hdmJhcl9fbG9nbyBoMiB7XHJcbiAgY29sb3I6ICNmNGY0ZjQ7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2YmFyX19saW5rcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZiYXJfX2xpbmtzID4gbGkge1xyXG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG59XHJcblxyXG4ubmF2YmFyX19saW5rcyA+IGxpID4gYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjZjRmNGY0O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmJhcl9fbGlua3MgPiBsaSA+IGEgPiBzcGFuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmNhcnRfX2xpbmsge1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJ0X19saW5rOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZGQyMTllO1xyXG4gIGNvbG9yOiAjZjRmNGY0O1xyXG59XHJcblxyXG4uY2FydGxvZ29fX2JhZGdlIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBjb2xvcjogIzE3MTcxNztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyX19tZW51IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhhbWJ1cmdlcl9fbWVudTpob3ZlciA+IGRpdiB7XHJcbiAgYmFja2dyb3VuZDogI2RkMjE5ZTtcclxufVxyXG5cclxuLmhhbWJ1cmdlcl9fbWVudSA+IGRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgLm5hdmJhcl9fbGlua3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5oYW1idXJnZXJfX21lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5uYXZiYXJfX2xvZ28gaDIge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLmhvbWVzY3JlZW4ge1xyXG4gICAgbWF4LXdpZHRoOiAxMzAwcHg7XHJcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmhvbWVzY3JlZW5fX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmhvbWVzY3JlZW5fX3Byb2R1Y3RzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTIzMnB4KSB7XHJcbiAgICAuaG9tZXNjcmVlbl9fcHJvZHVjdHMge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICAuaG9tZXNjcmVlbl9fcHJvZHVjdHMge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XHJcbiAgICAuaG9tZXNjcmVlbl9fcHJvZHVjdHMge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIC5wcm9kdWN0IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIG1hcmdpbjogOHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0ID4gaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0X19pbmZvID4gcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbmZvX19wcmljZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMDAwXHJcbiAgfVxyXG4gIFxyXG4gIC5pbmZvX19uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjb2xvcjogIzAwMFxyXG4gIH1cclxuICBcclxuICAuaW5mb19fZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBjb2xvcjogIzAwMFxyXG4gIH1cclxuICBcclxuICAuaW5mb19fYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMxNzE3MTc7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNzE3MTc7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5pbmZvX19idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzE3MTcxNztcclxuICAgIGNvbG9yOiAjZjRmNGY0O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogMTIzMnB4KSB7XHJcbiAgICAucHJvZHVjdCB7XHJcbiAgICAgIHdpZHRoOiAzNjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExMTVweCkge1xyXG4gICAgLnByb2R1Y3Qge1xyXG4gICAgICB3aWR0aDogMzMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI4cHgpIHtcclxuICAgIC5wcm9kdWN0IHtcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgIC5wcm9kdWN0IHtcclxuICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogODMwcHgpIHtcclxuICAgIC5wcm9kdWN0IHtcclxuICAgICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5wcm9kdWN0IHtcclxuICAgICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNjMwcHgpIHtcclxuICAgIC5wcm9kdWN0IHtcclxuICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5wcm9kdWN0IHtcclxuICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIC5wcm9kdWN0IHtcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_products_products_module_ts.js.map