"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"eb0ce8ccfe4a\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/OGQwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImViMGNlOGNjZmU0YVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/header.tsx":
/*!***************************************!*\
  !*** ./src/app/components/header.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _icons_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/cart */ \"(app-pages-browser)/./src/app/components/icons/cart.tsx\");\n/* harmony import */ var _icons_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/location */ \"(app-pages-browser)/./src/app/components/icons/location.tsx\");\n/* harmony import */ var _icons_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/logo */ \"(app-pages-browser)/./src/app/components/icons/logo.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ \"(app-pages-browser)/./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _icons_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/user */ \"(app-pages-browser)/./src/app/components/icons/user.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ Header auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const cookie = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)();\n        if (cookie[\"@coffee-delivery:userId\"]) {\n            setUserId(cookie[\"@coffee-delivery:userId\"]);\n        }\n    }, [\n        userId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full bg-background flex justify-between py-8 px-40\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_logo__WEBPACK_IMPORTED_MODULE_3__.Logo, {}, void 0, false, {\n                fileName: \"/home/matteus/Documentos/coffee-delivery/src/app/components/header.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-4\",\n                children: userId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            disabled: true,\n                            className: \"flex gap-1 rounded-[0.375rem] items-center p-2 bg-purple-light\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_location__WEBPACK_IMPORTED_MODULE_2__.Location, {}, void 0, false, {\n                                    fileName: \"/home/matteus/Documentos/coffee-delivery/src/app/components/header.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-roboto text-[1.125rem] leading-[160%]\",\n                                    children: \"Porto Alegre, RS\"\n                                }, void 0, false, {\n                                    fileName: \"/home/matteus/Documentos/coffee-delivery/src/app/components/header.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/matteus/Documentos/coffee-delivery/src/app/components/header.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"\",\n                            className: \"flex items-center p-2 bg-yellow-light rounded-[0.375rem]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-yellow-dark absolute rounded-full p-1 px-3 -mt-10 ml-2\",\n                                    children: \"3\"\n                                }, void 0, false, {\n                                    fileName: \"/home/matteus/Documentos/coffee-delivery/src/app/components/header.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_cart__WEBPACK_IMPORTED_MODULE_1__.Cart, {\n                                    color: \"yellow\"\n                                }, void 0, false, {\n                                    fileName: \"/home/matteus/Documentos/coffee-delivery/src/app/components/header.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/matteus/Documentos/coffee-delivery/src/app/components/header.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                        href: \"/register\",\n                        className: \"flex gap-1 rounded-[0.375rem] items-center py-2 px-4 bg-purple-light hover:bg-purple transition-all disabled:hover:bg-purple-light font-roboto text-[1.125rem] font-medium leading-[160%]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_user__WEBPACK_IMPORTED_MODULE_6__.User, {}, void 0, false, {\n                                fileName: \"/home/matteus/Documentos/coffee-delivery/src/app/components/header.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, this),\n                            \"Registrar\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/matteus/Documentos/coffee-delivery/src/app/components/header.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/home/matteus/Documentos/coffee-delivery/src/app/components/header.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/matteus/Documentos/coffee-delivery/src/app/components/header.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"l6NdcVNUgjpAolqMX62ICwIYxVo=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ21DO0FBQ1E7QUFDUjtBQUNlO0FBQ1o7QUFDSDtBQUNQO0FBRXJCLFNBQVNTOztJQUNkLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUVyQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxTQUFTTixxREFBWUE7UUFDM0IsSUFBSU0sTUFBTSxDQUFDLDBCQUEwQixFQUFFO1lBQ3JDRCxVQUFVQyxNQUFNLENBQUMsMEJBQTBCO1FBQzdDO0lBQ0YsR0FBRztRQUFDRjtLQUFPO0lBRVgscUJBQ0UsOERBQUNHO1FBQU9DLFdBQVU7OzBCQUNoQiw4REFBQ1osNkNBQUlBOzs7OzswQkFFTCw4REFBQ2E7Z0JBQUlELFdBQVU7MEJBQ1pKLHVCQUNDOztzQ0FDRSw4REFBQ007NEJBQ0NDLFFBQVE7NEJBQ1JILFdBQVU7OzhDQUVWLDhEQUFDYixxREFBUUE7Ozs7OzhDQUNULDhEQUFDaUI7b0NBQUVKLFdBQVU7OENBQTZDOzs7Ozs7Ozs7Ozs7c0NBSTVELDhEQUFDSzs0QkFDQ0MsTUFBSzs0QkFDTE4sV0FBVTs7OENBRVYsOERBQUNDO29DQUFJRCxXQUFVOzhDQUE0RDs7Ozs7OzhDQUczRSw4REFBQ2QsNkNBQUlBO29DQUFDcUIsT0FBTTs7Ozs7Ozs7Ozs7OztpREFJaEI7OEJBQ0UsNEVBQUNiLGtEQUFJQTt3QkFDSFksTUFBSzt3QkFDTE4sV0FBVTs7MENBRVYsOERBQUNQLDZDQUFJQTs7Ozs7NEJBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdEI7R0FsRGdCRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyLnRzeD80NGE1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4vaWNvbnMvY2FydCdcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnLi9pY29ucy9sb2NhdGlvbidcbmltcG9ydCB7IExvZ28gfSBmcm9tICcuL2ljb25zL2xvZ28nXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSAnbm9va2llcydcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL2ljb25zL3VzZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSgnJylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNvb2tpZSA9IHBhcnNlQ29va2llcygpXG4gICAgaWYgKGNvb2tpZVsnQGNvZmZlZS1kZWxpdmVyeTp1c2VySWQnXSkge1xuICAgICAgc2V0VXNlcklkKGNvb2tpZVsnQGNvZmZlZS1kZWxpdmVyeTp1c2VySWQnXSlcbiAgICB9XG4gIH0sIFt1c2VySWRdKVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctYmFja2dyb3VuZCBmbGV4IGp1c3RpZnktYmV0d2VlbiBweS04IHB4LTQwXCI+XG4gICAgICA8TG9nbyAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTRcIj5cbiAgICAgICAge3VzZXJJZCA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGdhcC0xIHJvdW5kZWQtWzAuMzc1cmVtXSBpdGVtcy1jZW50ZXIgcC0yIGJnLXB1cnBsZS1saWdodFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMb2NhdGlvbiAvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXJvYm90byB0ZXh0LVsxLjEyNXJlbV0gbGVhZGluZy1bMTYwJV1cIj5cbiAgICAgICAgICAgICAgICBQb3J0byBBbGVncmUsIFJTXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cIlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtMiBiZy15ZWxsb3ctbGlnaHQgcm91bmRlZC1bMC4zNzVyZW1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy15ZWxsb3ctZGFyayBhYnNvbHV0ZSByb3VuZGVkLWZ1bGwgcC0xIHB4LTMgLW10LTEwIG1sLTJcIj5cbiAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Q2FydCBjb2xvcj1cInllbGxvd1wiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9XCIvcmVnaXN0ZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGdhcC0xIHJvdW5kZWQtWzAuMzc1cmVtXSBpdGVtcy1jZW50ZXIgcHktMiBweC00IGJnLXB1cnBsZS1saWdodCBob3ZlcjpiZy1wdXJwbGUgdHJhbnNpdGlvbi1hbGwgZGlzYWJsZWQ6aG92ZXI6YmctcHVycGxlLWxpZ2h0IGZvbnQtcm9ib3RvIHRleHQtWzEuMTI1cmVtXSBmb250LW1lZGl1bSBsZWFkaW5nLVsxNjAlXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxVc2VyIC8+XG4gICAgICAgICAgICAgIFJlZ2lzdHJhclxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJDYXJ0IiwiTG9jYXRpb24iLCJMb2dvIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInBhcnNlQ29va2llcyIsIlVzZXIiLCJMaW5rIiwiSGVhZGVyIiwidXNlcklkIiwic2V0VXNlcklkIiwiY29va2llIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJwIiwiYSIsImhyZWYiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/header.tsx\n"));

/***/ })

});