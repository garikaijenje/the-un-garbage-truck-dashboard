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
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spinners/ClipLoader */ "./node_modules/react-spinners/ClipLoader.js");
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_1__);
 // import QRCode from 'qrcode';



const Dashboard = () => {
  const [src, setSrc] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // const [src2, setSrc2] = useState('')
  // const [contents, setContents] = useState('3fddc774-5fde-4516-ba0d-7ba94c9554a5')
  // const [contents2, setContents2] = useState('https://google.com asdasd asd asdasdas asd asdasds dsd asdasd asdasd sad sd asd asd asd ')
  // useEffect(() => {
  //   QRCode.toDataURL(contents).then((data) => {
  //    setSrc(data)
  //   })
  //   QRCode.toDataURL(contents2).then((data) => {
  //    setSrc2(data)
  //   })
  // }, [])

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let url = "http://the-un-garbage-truck.local/qr"; // GET request using fetch inside useEffect React hook

    setLoading(true);
    fetch(url).then(response => response.json()).then(data => {
      setSrc(data.qrcode);
      setLoading(false);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex flex-col justify-center items-center w-full h-screen bg-gradient-to-r from-indigo-50 to-indigo-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "p-5 bg-white shadow-md rounded-xl w-96"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "text-4xl text-center mb-2"
  }, "This is ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "font-bold"
  }, "not garbage!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex w-full bg-orange"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex w-full justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_1___default()), {
    color: "#005C47",
    loading: true,
    size: 30
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "object-contain w-full ",
    src: src
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-xl break-normal text-center font-bold"
  }, "Scan to claim your deposit!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./node_modules/react-spinners/ClipLoader.js":
/*!***************************************************!*\
  !*** ./node_modules/react-spinners/ClipLoader.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_1 = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var clip = react_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {transform: rotate(0deg) scale(1)}\n  50% {transform: rotate(180deg) scale(0.8)}\n  100% {transform: rotate(360deg) scale(1)}\n"], ["\n  0% {transform: rotate(0deg) scale(1)}\n  50% {transform: rotate(180deg) scale(0.8)}\n  100% {transform: rotate(360deg) scale(1)}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function () {
            var _a = _this.props, size = _a.size, color = _a.color, speedMultiplier = _a.speedMultiplier;
            return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background: transparent !important;\n      width: ", ";\n      height: ", ";\n      border-radius: 100%;\n      border: 2px solid;\n      border-color: ", ";\n      border-bottom-color: transparent;\n      display: inline-block;\n      animation: ", " ", "s 0s infinite linear;\n      animation-fill-mode: both;\n    "], ["\n      background: transparent !important;\n      width: ", ";\n      height: ", ";\n      border-radius: 100%;\n      border: 2px solid;\n      border-color: ", ";\n      border-bottom-color: transparent;\n      display: inline-block;\n      animation: ", " ", "s 0s infinite linear;\n      animation-fill-mode: both;\n    "])), helpers_1.cssValue(size), helpers_1.cssValue(size), color, clip, 0.75 / speedMultiplier);
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? react_1.jsx("span", { css: [this.style(), css] }) : null;
    };
    Loader.defaultProps = helpers_1.sizeDefaults(35);
    return Loader;
}(React.PureComponent));
exports["default"] = Loader;
var templateObject_1, templateObject_2;


/***/ })

}]);
//# sourceMappingURL=react_pages_Dashboard_js.bundle.js.map