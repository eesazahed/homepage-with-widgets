"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Gradient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Gradient */ \"./components/Gradient.tsx\");\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Link */ \"./components/Link.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0), reposCount = ref[0], setReposCount = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        fetch(\"https://api.github.com/users/eesazahed\").then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            return setReposCount(data.public_repos);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Homepage\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kids/Desktop/dev/homepage-with-widgets/pages/index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Homepage\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kids/Desktop/dev/homepage-with-widgets/pages/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"./assets/images/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kids/Desktop/dev/homepage-with-widgets/pages/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kids/Desktop/dev/homepage-with-widgets/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"py-16 leading-8 text-xl grid min-h-screen place-items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"my-8 text-6xl md:text-8xl text-center font-bold\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Gradient__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            text: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kids/Desktop/dev/homepage-with-widgets/pages/index.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, _this),\n                        \" \\uD83C\\uDFE0\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kids/Desktop/dev/homepage-with-widgets/pages/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/kids/Desktop/dev/homepage-with-widgets/pages/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"py-16 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Designed and developed by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            text: \"Eesa Zahed\",\n                            href: \"https://github.com/eesazahed/\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kids/Desktop/dev/homepage-with-widgets/pages/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kids/Desktop/dev/homepage-with-widgets/pages/index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/kids/Desktop/dev/homepage-with-widgets/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kids/Desktop/dev/homepage-with-widgets/pages/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUM2QjtBQUVpQjtBQUVSO0FBQ007QUFFNUMsSUFBTUssSUFBSSxHQUFhLFdBQU07O0lBQzNCLElBQW9DRCxHQUFtQixHQUFuQkEsK0NBQVEsQ0FBUyxDQUFDLENBQUMsRUFBaERFLFVBQVUsR0FBbUJGLEdBQW1CLEdBQXRDLEVBQUVHLGFBQWEsR0FBSUgsR0FBbUIsR0FBdkI7SUFFaENELGdEQUFTLENBQUMsV0FBTTtRQUNkSyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FDNUNDLElBQUksQ0FBQyxTQUFDQyxRQUFRO21CQUFLQSxRQUFRLENBQUNDLElBQUksRUFBRTtTQUFBLENBQUMsQ0FDbkNGLElBQUksQ0FBQyxTQUFDRyxJQUFJO21CQUFLTCxhQUFhLENBQUNLLElBQUksQ0FBQ0MsWUFBWSxDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBQ3RELENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxNQUFNOzswQkFDbkIsOERBQUNmLGtEQUFJOztrQ0FDSCw4REFBQ2dCLE9BQUs7a0NBQUMsVUFBUTs7Ozs7NkJBQVE7a0NBQ3ZCLDhEQUFDQyxNQUFJO3dCQUFDQyxJQUFJLEVBQUMsYUFBYTt3QkFBQ0MsT0FBTyxFQUFDLFVBQVU7Ozs7OzZCQUFHO2tDQUM5Qyw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyw2QkFBNkI7Ozs7OzZCQUFHOzs7Ozs7cUJBQ2pEOzBCQUVQLDhEQUFDQyxNQUFJO2dCQUFDUixTQUFTLEVBQUMsOERBQThEOzBCQUM1RSw0RUFBQ1MsSUFBRTtvQkFBQ1QsU0FBUyxFQUFDLGlEQUFpRDs7c0NBQzdELDhEQUFDZCw0REFBUTs0QkFBQ3dCLElBQUksRUFBQyxNQUFNOzs7OztpQ0FBRzt3QkFBQSxlQUMxQjs7Ozs7O3lCQUFLOzs7OztxQkFDQTswQkFFUCw4REFBQ0MsUUFBTTtnQkFBQ1gsU0FBUyxFQUFDLG1CQUFtQjswQkFDbkMsNEVBQUNZLEdBQUM7O3dCQUFDLDJCQUN3Qjt3QkFBQyxHQUFHO3NDQUM3Qiw4REFBQ3pCLHdEQUFJOzRCQUFDdUIsSUFBSSxFQUFDLFlBQVk7NEJBQUNILElBQUksRUFBQywrQkFBK0I7Ozs7O2lDQUFHOzs7Ozs7eUJBQzdEOzs7OztxQkFDRzs7Ozs7O2FBQ0wsQ0FDTjtBQUNKLENBQUM7R0EvQktqQixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFpQ1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBHcmFkaWVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9HcmFkaWVudFwiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RJdGVtXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vY29tcG9uZW50cy9MaW5rXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcmVwb3NDb3VudCwgc2V0UmVwb3NDb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2Vlc2F6YWhlZFwiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0UmVwb3NDb3VudChkYXRhLnB1YmxpY19yZXBvcykpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LThcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SG9tZXBhZ2U8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSG9tZXBhZ2VcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi4vYXNzZXRzL2ltYWdlcy9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInB5LTE2IGxlYWRpbmctOCB0ZXh0LXhsIGdyaWQgbWluLWgtc2NyZWVuIHBsYWNlLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXktOCB0ZXh0LTZ4bCBtZDp0ZXh0LTh4bCB0ZXh0LWNlbnRlciBmb250LWJvbGRcIj5cbiAgICAgICAgICA8R3JhZGllbnQgdGV4dD1cIkhvbWVcIiAvPiDwn4+gXG4gICAgICAgIDwvaDE+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicHktMTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieXtcIiBcIn1cbiAgICAgICAgICA8TGluayB0ZXh0PVwiRWVzYSBaYWhlZFwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZWVzYXphaGVkL1wiIC8+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiR3JhZGllbnQiLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwicmVwb3NDb3VudCIsInNldFJlcG9zQ291bnQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicHVibGljX3JlcG9zIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsInRleHQiLCJmb290ZXIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});