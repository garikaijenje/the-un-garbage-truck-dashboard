"use strict";
(self["webpackChunkthe_un_garbage_truck"] = self["webpackChunkthe_un_garbage_truck"] || []).push([["react_pages_Dashboard_js"],{

/***/ "./react/pages/Dashboard.js":
/*!**********************************!*\
  !*** ./react/pages/Dashboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qrcode */ "./node_modules/qrcode/lib/browser.js");



const Dashboard = () => {
  const [src, setSrc] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [src2, setSrc2] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [contents, setContents] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('3fddc774-5fde-4516-ba0d-7ba94c9554a5');
  const [contents2, setContents2] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('https://google.com asdasd asd asdasdas asd asdasds dsd asdasd asdasd sad sd asd asd asd ');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    qrcode__WEBPACK_IMPORTED_MODULE_1__.toDataURL(contents).then(data => {
      setSrc(data);
    });
    qrcode__WEBPACK_IMPORTED_MODULE_1__.toDataURL(contents2).then(data => {
      setSrc2(data);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex flex-col justify-center items-center w-full h-screen bg-gradient-to-r from-indigo-50 to-indigo-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "p-5 bg-white shadow-md rounded-xl w-96"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "text-4xl text-center"
  }, "This is ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "font-bold"
  }, "not garbage!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex w-40 bg-orange"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "object-contain w-full ",
    src: src
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-xl break-normal"
  }, "Scan with the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "font-bold"
  }, "UGT"), " app to claim your deposit!")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ })

}]);
//# sourceMappingURL=react_pages_Dashboard_js.bundle.js.map