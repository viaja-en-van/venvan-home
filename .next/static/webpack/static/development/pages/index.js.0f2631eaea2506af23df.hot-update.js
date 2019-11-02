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
    className: "jsx-4049304713",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-4049304713",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, title), __jsx("meta", {
    charSet: "utf-8",
    className: "jsx-4049304713",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-4049304713",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Dosis&display=swap",
    rel: "stylesheet",
    className: "jsx-4049304713",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4049304713",
    __self: this
  }, "body{margin:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtLmFyaXphL3ZpYWphZW52YW4vdmVudmFuLWhvbWUvY29tcG9uZW50cy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCdUIsQUFHb0IsV0FDYiIsImZpbGUiOiIvVXNlcnMvd2lsbGlhbS5hcml6YS92aWFqYWVudmFuL3ZlbnZhbi1ob21lL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG50eXBlIExheW91dFByb3BzID0ge1xuICB0aXRsZT86IHN0cmluZztcbn07XG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXg6IDEsXG4gIFwiZmxleC1kaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgYm9yZGVyOiBcIjFweCBzb2xpZCAjREREXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICBjb2xvcjogXCJibGFja1wiLFxuICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgZm9udEZhbWlseTogXCInRG9zaXMnLCAnc2Fucy1zZXJpZidcIlxufTtcblxuY29uc3QgTGF5b3V0OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxMYXlvdXRQcm9wcz4gPSAoeyBjaGlsZHJlbiwgdGl0bGUgfSkgPT4gKFxuICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Eb3NpcyZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+XG4gICAgICA8L2xpbms+XG4gICAgPC9IZWFkPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxIZWFkZXI+PC9IZWFkZXI+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyLWNoaWxkcmVuXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9zZWN0aW9uPlxuICAgIDxGb290ZXI+PC9Gb290ZXI+XG4gIDwvZGl2PlxuKTtcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/william.ariza/viajaenvan/venvan-home/components/Layout.tsx */"), __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("section", {
    className: "jsx-4049304713" + " " + "container-children",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.0f2631eaea2506af23df.hot-update.js.map