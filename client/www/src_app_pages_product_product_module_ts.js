"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_product_product_module_ts"],{

/***/ 7510:
/*!*********************************************************!*\
  !*** ./src/app/pages/product/product-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageRoutingModule": () => (/* binding */ ProductPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.page */ 6340);




const routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_0__.ProductPage
    }
];
let ProductPageRoutingModule = class ProductPageRoutingModule {
};
ProductPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductPageRoutingModule);



/***/ }),

/***/ 8559:
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageModule": () => (/* binding */ ProductPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-routing.module */ 7510);
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.page */ 6340);







let ProductPageModule = class ProductPageModule {
};
ProductPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductPageRoutingModule
        ],
        declarations: [_product_page__WEBPACK_IMPORTED_MODULE_1__.ProductPage]
    })
], ProductPageModule);



/***/ }),

/***/ 6340:
/*!***********************************************!*\
  !*** ./src/app/pages/product/product.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPage": () => (/* binding */ ProductPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_All_Prime_Tech_02_Desktop_Projects_postgresql_client_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./product.page.html */ 1238);
/* harmony import */ var _product_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.page.scss */ 1684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/blog.service */ 4786);







let ProductPage = class ProductPage {
    constructor(blogService, activatedRoute, toastController, route) {
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.route = route;
        this.post = {};
        this.products = [];
        this.comments = [];
        this.post_id = null;
        this.commentData = {
            name: '',
            content: ''
        };
    }
    ngOnInit() {
        this.getPost();
    }
    getPost() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('postId')) {
                return;
            }
            const postId = paramMap.get('postId');
            this.blogService.get(`/api/v1/post/${postId}`).subscribe((post) => {
                this.post = post.info;
                this.comments = post.info.comments;
                this.post_id = postId;
            });
        });
    }
    validateInputs() {
        let name = this.commentData.name.trim();
        let message = this.commentData.content.trim();
        return (this.commentData.content && this.commentData.content && name.length > 0 && message.length > 0);
    }
    handleComment() {
        if (this.validateInputs()) {
            this.blogService.post(`/api/v1/post/comment/${this.post_id}`, this.commentData).subscribe((res) => {
                this.toast("Comment successfully added", "success");
                this.getPost();
            });
        }
        else {
            this.toast("Please fill all empty fields.", "danger");
        }
    }
    toast(msg, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'COMMENT INFORMATION',
                message: msg,
                icon: 'information-circle',
                duration: 4000,
                position: 'top',
                color: color
            });
            yield toast.present();
        });
    }
    signin() {
        this.route.navigate(['/login']);
    }
};
ProductPage.ctorParameters = () => [
    { type: src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_2__.BlogService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ProductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-product',
        template: _C_Users_All_Prime_Tech_02_Desktop_Projects_postgresql_client_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductPage);



/***/ }),

/***/ 1238:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/product/product.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header collapse=\"fade\" [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"secondary\">\r\n      <ion-button (click)=\"signin()\">\r\n        <ion-icon name=\"log-in-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button>\r\n        <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Blog Post</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"productscreen\">\r\n        <div class=\"productscreen__left\">\r\n          <div class=\"left__image\">\r\n            <img src='{{post.photo}}' alt=\"\" />\r\n          </div>\r\n          <div class=\"left__info\">\r\n            <ion-card>\r\n              <ion-card-content>\r\n                    <p class=\"left__name\">{{post.title}}</p>\r\n                    <p class=\"content-body\">\r\n                     <!-- {{comment.timeStamp | date : 'H:mm a'}} -->\r\n\r\n                     <!-- {{post.content.charAt(0).toUpperCase() + post.content.slice(1)}} -->\r\n\r\n                     {{post.content}}\r\n                    </p>\r\n              </ion-card-content>\r\n             \r\n            </ion-card>\r\n            <!-- <p class=\"left__name\">{{post.title}}</p>\r\n            <p>Description: {{post.content}}</p> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"productscreen__right\">\r\n          <!-- <div class=\"right__info\"> -->\r\n              \r\n          <!-- </div> -->\r\n\r\n          <div class=\"comment-box\">\r\n            <p class=\"comment-title\">Comments <ion-icon name=\"chatbubble-ellipses-outline\"></ion-icon></p>\r\n            <ion-card *ngFor=\"let c of comments\">\r\n              <ion-card-content>\r\n                <strong>{{c.name}}</strong>\r\n                    <!-- <strong>{{c.name.charAt(0).toUpperCase() + c.name.slice(1)}}</strong> -->\r\n                    <p class=\"comment-text\">\r\n                     <!-- {{comment.timeStamp | date : 'H:mm a'}} -->\r\n\r\n                     <!-- {{c.content.charAt(0).toUpperCase() + c.content.slice(1)}} -->\r\n                     {{c.content}}\r\n                    </p>\r\n                    <p class=\"date\">\r\n                      {{c.createdAt | date : 'H:mm a'}}\r\n                    </p>\r\n              </ion-card-content>\r\n             \r\n            </ion-card>\r\n\r\n            \r\n          </div>\r\n        </div>\r\n  </div>\r\n\r\n  \r\n</ion-content>\r\n\r\n<ion-footer class=\"padding\">\r\n  \r\n  <ion-input placeholder=\"Your name...\" type=\"text\" name=\"name\" [(ngModel)]=\"commentData.name\"></ion-input>\r\n  <ion-textarea  type=\"text\" [(ngModel)]=\"commentData.content\" placeholder=\"Comment here .... \"></ion-textarea>\r\n  <ion-button shape=\"round\" (click)=\"handleComment()\">Send</ion-button>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 1684:
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = ".productscreen {\n  max-width: 1300px;\n  margin: 1rem auto;\n  display: flex;\n}\n\n.productscreen__left {\n  display: flex;\n  flex: 0.8;\n}\n\n.left__image {\n  margin: 1rem;\n  flex: 0.6;\n}\n\n.left__info {\n  margin: 1rem;\n  flex: 0.4;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-size: 0.9rem;\n  color: #000;\n}\n\n.left__name {\n  font-weight: bold;\n  font-size: 1.3rem;\n  color: white;\n  margin-bottom: 15px;\n}\n\n.content-body {\n  font-size: 1rem;\n}\n\n.left__info > p,\n.right__info > p {\n  padding: 1rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.left__info > p:last-child,\n.right__info > p:last-child {\n  border: none;\n}\n\n.productscreen__right {\n  flex: 0.2;\n  color: #000;\n}\n\n.right__info {\n  width: 250px;\n  margin: 1rem;\n  background: #fff;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n}\n\n.right__info p {\n  padding: 1rem;\n  font-size: 0.8rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.right__info p > button {\n  grid-column: 1/-1;\n  width: 100%;\n  padding: 10px 16px;\n  background: #171717;\n  color: #f4f4f4;\n  border: 1px solid #171717;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.right__info select {\n  padding: 10px 16px;\n}\n\nion-textarea {\n  border-bottom: 1px solid #000000;\n  margin: 0px 5px;\n  color: #fff;\n}\n\nion-input {\n  border-bottom: 1px solid #000000;\n  margin: 0px 5px;\n  color: #fff;\n}\n\np {\n  text-align: justify;\n}\n\n.comment-box {\n  height: auto;\n}\n\n.comment-title {\n  font-weight: bold;\n  font-size: 1.3rem;\n  color: white;\n}\n\n.comment-text {\n  font-size: 0.8rem;\n}\n\n.date {\n  margin-top: 5px;\n  font-size: 0.6rem;\n}\n\n@media (max-width: 960px) {\n  .productscreen {\n    flex-direction: column;\n  }\n\n  .productscreen__left {\n    flex-direction: column;\n    flex: 1;\n  }\n\n  .left__image {\n    flex: 1;\n  }\n\n  .left__info {\n    flex: 1;\n  }\n\n  .productscreen__right {\n    flex: 1;\n    padding: 1rem;\n  }\n\n  .right__info {\n    width: 100%;\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFMSjs7QUFRRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBTEo7O0FBUUU7RUFDRSxZQUFBO0VBQ0EsU0FBQTtBQUxKOztBQVFFO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBTEo7O0FBUUU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBUUU7RUFDRSxlQUFBO0FBTEo7O0FBUUU7O0VBRUUsYUFBQTtFQUNBLDJDQUFBO0FBTEo7O0FBUUU7O0VBRUUsWUFBQTtBQUxKOztBQVFFO0VBQ0UsU0FBQTtFQUNBLFdBQUE7QUFMSjs7QUFRRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtBQUxKOztBQVFFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0FBTEo7O0FBUUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTEo7O0FBUUU7RUFDRSxrQkFBQTtBQUxKOztBQVFFO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUxKOztBQVFFO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUxKOztBQU9FO0VBQ0ksbUJBQUE7QUFKTjs7QUFNRTtFQUVJLFlBQUE7QUFKTjs7QUFPRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBSko7O0FBT0U7RUFDRSxpQkFBQTtBQUpKOztBQU9FO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBSko7O0FBT0U7RUFDRTtJQUNFLHNCQUFBO0VBSko7O0VBT0U7SUFDRSxzQkFBQTtJQUNBLE9BQUE7RUFKSjs7RUFPRTtJQUNFLE9BQUE7RUFKSjs7RUFPRTtJQUNFLE9BQUE7RUFKSjs7RUFPRTtJQUNFLE9BQUE7SUFDQSxhQUFBO0VBSko7O0VBT0U7SUFDRSxXQUFBO0lBQ0EsU0FBQTtFQUpKO0FBQ0YiLCJmaWxlIjoicHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tZm9vdGVye1xyXG4gIFxyXG4vLyAgIG1hcmdpbi1ib3R0b206IDEwJTsgXHJcbi8vICAgcGFkZGluZy10b3A6IC41ZW07XHJcbi8vICAgcGFkZGluZy1ib3R0b206IC41ZW07XHJcbi8vIH1cclxuLnByb2R1Y3RzY3JlZW4ge1xyXG4gICAgbWF4LXdpZHRoOiAxMzAwcHg7XHJcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0c2NyZWVuX19sZWZ0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAwLjg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZWZ0X19pbWFnZSB7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBmbGV4OiAwLjY7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZWZ0X19pbmZvIHtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIGZsZXg6IDAuNDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGNvbG9yOiAjMDAwXHJcbiAgfVxyXG4gIFxyXG4gIC5sZWZ0X19uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtYm9keSB7XHJcbiAgICBmb250LXNpemU6IDEuMHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmxlZnRfX2luZm8gPiBwLFxyXG4gIC5yaWdodF9faW5mbyA+IHAge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZWZ0X19pbmZvID4gcDpsYXN0LWNoaWxkLFxyXG4gIC5yaWdodF9faW5mbyA+IHA6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0c2NyZWVuX19yaWdodCB7XHJcbiAgICBmbGV4OiAwLjI7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgXHJcbiAgLnJpZ2h0X19pbmZvIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIH1cclxuICBcclxuICAucmlnaHRfX2luZm8gcCB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICB9XHJcbiAgXHJcbiAgLnJpZ2h0X19pbmZvIHAgPiBidXR0b24ge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICMxNzE3MTc7XHJcbiAgICBjb2xvcjogI2Y0ZjRmNDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNzE3MTc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5yaWdodF9faW5mbyBzZWxlY3Qge1xyXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRleHRhcmVhIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiAgaW9uLWlucHV0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIH1cclxuICAuY29tbWVudC1ib3gge1xyXG4gICAgICAvL292ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jb21tZW50LXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuY29tbWVudC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxuXHJcbiAgLmRhdGUge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgLnByb2R1Y3RzY3JlZW4ge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnByb2R1Y3RzY3JlZW5fX2xlZnQge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmxlZnRfX2ltYWdlIHtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICBcclxuICAgIC5sZWZ0X19pbmZvIHtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuICBcclxuICAgIC5wcm9kdWN0c2NyZWVuX19yaWdodCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucmlnaHRfX2luZm8ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product_product_module_ts.js.map