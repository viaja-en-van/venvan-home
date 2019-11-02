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
    className: "jsx-2360538304",
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
    className: "jsx-2360538304",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, title), __jsx("meta", {
    charSet: "utf-8",
    className: "jsx-2360538304",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-2360538304",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Dosis&display=swap",
    rel: "stylesheet",
    className: "jsx-2360538304",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2360538304",
    __self: this
  }, "body{margin:0px;}.container-children{height:calc(100% - 110px);}.triangulo-2{width:0;height:0;border-left:100px solid #f0ad4e;border-top:50px solid transparent;border-bottom:50px solid transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtLmFyaXphL3ZpYWphZW52YW4vdmVudmFuLWhvbWUvY29tcG9uZW50cy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCdUIsQUFHb0IsQUFHZSxBQUdsQixRQUNDLEdBTlgsTUFPa0MsU0FKbEMsdUJBS29DLGtDQUNHLHFDQUN2QyIsImZpbGUiOiIvVXNlcnMvd2lsbGlhbS5hcml6YS92aWFqYWVudmFuL3ZlbnZhbi1ob21lL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG50eXBlIExheW91dFByb3BzID0ge1xuICB0aXRsZT86IHN0cmluZztcbn07XG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXg6IDEsXG4gIFwiZmxleC1kaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgYm9yZGVyOiBcIjFweCBzb2xpZCAjREREXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICBjb2xvcjogXCJibGFja1wiLFxuICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgZm9udEZhbWlseTogXCInRG9zaXMnLCAnc2Fucy1zZXJpZidcIlxufTtcblxuXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PExheW91dFByb3BzPiA9ICh7IGNoaWxkcmVuLCB0aXRsZSB9KSA9PiAoXG4gIDxkaXYgc3R5bGU9e2xheW91dFN0eWxlfT5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PURvc2lzJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj5cbiAgICAgIDwvbGluaz5cbiAgICA8L0hlYWQ+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXItY2hpbGRyZW4ge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDExMHB4KTtcbiAgICAgIH1cbiAgICAgIC50cmlhbmd1bG8tMiB7XG4gICAgICAgIHdpZHRoOiAwOyBcbiAgICAgICAgaGVpZ2h0OiAwOyBcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDEwMHB4IHNvbGlkICNmMGFkNGU7XG4gICAgICAgIGJvcmRlci10b3A6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7IFxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8SGVhZGVyPjwvSGVhZGVyPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lci1jaGlsZHJlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlhbmd1bG8tMlwiPjwvZGl2PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvc2VjdGlvbj5cbiAgICA8Rm9vdGVyPjwvRm9vdGVyPlxuICA8L2Rpdj5cbik7XG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/william.ariza/viajaenvan/venvan-home/components/Layout.tsx */"), __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("section", {
    className: "jsx-2360538304" + " " + "container-children",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2360538304" + " " + "triangulo-2",
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
//# sourceMappingURL=index.js.fec57211239602578d80.hot-update.js.map