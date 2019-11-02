webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Footer.tsx");
var _jsxFileName = "/Users/william.ariza/viajaenvan/venvan-home/components/Layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];




var layoutStyle = {
  display: "flex",
  flex: 1,
  "flex-direction": "column",
  border: "1px solid #DDD",
  backgroundColor: "white",
  color: "black",
  height: "100vh",
  fontFamily: "'Dosis', 'sans-serif'"
};

var Layout = function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return __jsx("div", {
    style: layoutStyle,
    className: "jsx-3381586007",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3381586007",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, title), __jsx("meta", {
    charSet: "utf-8",
    className: "jsx-3381586007",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-3381586007",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Dosis&display=swap",
    rel: "stylesheet",
    className: "jsx-3381586007",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3381586007",
    __self: this
  }, "body{margin:0px;}.container-children{height:calc(100% - 110px);}.triangulo-2{width:0;height:0;border-left:100px solid #f0ad4e;border-top:50px solid transparent;border-bottom:50px solid transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtLmFyaXphL3ZpYWphZW52YW4vdmVudmFuLWhvbWUvY29tcG9uZW50cy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCdUIsQUFHb0IsQUFHZSxBQUdqQixRQUNILEdBTlIsTUFPK0IsU0FKL0IsdUJBS2lDLGtDQUNHLHFDQUNwQyIsImZpbGUiOiIvVXNlcnMvd2lsbGlhbS5hcml6YS92aWFqYWVudmFuL3ZlbnZhbi1ob21lL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG50eXBlIExheW91dFByb3BzID0ge1xuICB0aXRsZT86IHN0cmluZztcbn07XG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXg6IDEsXG4gIFwiZmxleC1kaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgYm9yZGVyOiBcIjFweCBzb2xpZCAjREREXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICBjb2xvcjogXCJibGFja1wiLFxuICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgZm9udEZhbWlseTogXCInRG9zaXMnLCAnc2Fucy1zZXJpZidcIlxufTtcblxuXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PExheW91dFByb3BzPiA9ICh7IGNoaWxkcmVuLCB0aXRsZSB9KSA9PiAoXG4gIDxkaXYgc3R5bGU9e2xheW91dFN0eWxlfT5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PURvc2lzJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj5cbiAgICAgIDwvbGluaz5cbiAgICA8L0hlYWQ+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXItY2hpbGRyZW4ge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDExMHB4KTtcbiAgICAgIH1cbiAgICAgIC50cmlhbmd1bG8tMiB7XG4gICAgICAgICB3aWR0aDogMDsgXG4gICAgIGhlaWdodDogMDsgXG4gICAgIGJvcmRlci1sZWZ0OiAxMDBweCBzb2xpZCAjZjBhZDRlO1xuICAgICBib3JkZXItdG9wOiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICBib3JkZXItYm90dG9tOiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50OyBcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPEhlYWRlcj48L0hlYWRlcj5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXItY2hpbGRyZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpYW5ndWxvLTJcIj48L2Rpdj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3NlY3Rpb24+XG4gICAgPEZvb3Rlcj48L0Zvb3Rlcj5cbiAgPC9kaXY+XG4pO1xuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/william.ariza/viajaenvan/venvan-home/components/Layout.tsx */"), __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("section", {
    className: "jsx-3381586007" + " " + "container-children",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3381586007" + " " + "triangulo-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.a195fa2e56458b3da78b.hot-update.js.map