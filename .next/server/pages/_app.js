(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _manahippo_aptos_wallet_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(736);
/* harmony import */ var _manahippo_aptos_wallet_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_manahippo_aptos_wallet_adapter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);
react_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function MyApp({ Component , pageProps  }) {
    const wallets = [
        new _manahippo_aptos_wallet_adapter__WEBPACK_IMPORTED_MODULE_2__.RiseWalletAdapter(),
        // new HippoWalletAdapter(),
        new _manahippo_aptos_wallet_adapter__WEBPACK_IMPORTED_MODULE_2__.MartianWalletAdapter(),
        new _manahippo_aptos_wallet_adapter__WEBPACK_IMPORTED_MODULE_2__.AptosWalletAdapter(),
        new _manahippo_aptos_wallet_adapter__WEBPACK_IMPORTED_MODULE_2__.FewchaWalletAdapter(),
        // new HippoExtensionWalletAdapter(),
        new _manahippo_aptos_wallet_adapter__WEBPACK_IMPORTED_MODULE_2__.PontemWalletAdapter(),
        new _manahippo_aptos_wallet_adapter__WEBPACK_IMPORTED_MODULE_2__.SpikaWalletAdapter(),
        new _manahippo_aptos_wallet_adapter__WEBPACK_IMPORTED_MODULE_2__.FletchWalletAdapter()
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_manahippo_aptos_wallet_adapter__WEBPACK_IMPORTED_MODULE_2__.WalletProvider, {
        wallets: wallets,
        autoConnect: false,
        onError: (error)=>{
            console.log("Handle Error Message", error);
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 819:
/***/ (() => {



/***/ }),

/***/ 736:
/***/ ((module) => {

"use strict";
module.exports = require("@manahippo/aptos-wallet-adapter");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(510));
module.exports = __webpack_exports__;

})();