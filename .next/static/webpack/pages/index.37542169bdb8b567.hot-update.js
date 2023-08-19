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

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerFavorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakerFavorite */ \"./src/components/SpeakerFavorite.js\");\n\n\nfunction Session(param) {\n    let { title, room } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 7,\n                columnNumber: 33\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    let { sessions } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n            ...sessions[0]\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 15,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    let { id, first, last } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/images/speakers-\".concat(id, \".jpg\"),\n            alt: \"\".concat(first, \" \").concat(last),\n            className: \"contain-fit\",\n            width: \"300\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_c2 = SpeakerImage;\nfunction SpeakerDemographics(param) {\n    let { first, last, bio, company, twitterHandle, favorite, onFavoriteToggle: onFavoriteToggle1 } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerFavorite__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                favorite: favorite,\n                onFavoriteToggle: onFavoriteToggle1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, this);\n}\n_c3 = SpeakerDemographics;\nfunction Speaker(param) {\n    let { speaker, showSessions } = param;\n    const { id, first, last, sessions } = speaker;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, {\n                        ...speaker,\n                        onFavoriteToggle: onFavoriteToggle\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this),\n            showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, this);\n}\n_c4 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerDemographics\");\n$RefreshReg$(_c4, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStDO0FBRS9DLFNBQVNDLFFBQVEsS0FBYTtRQUFiLEVBQUNDLEtBQUssRUFBRUMsSUFBSSxFQUFDLEdBQWI7SUFDYixxQkFDSSw4REFBQ0M7UUFBS0MsV0FBVTs7WUFDU0g7MEJBQ0QsOERBQUNJOztvQkFBTztvQkFBT0gsS0FBS0ksSUFBSTs7Ozs7Ozs7Ozs7OztBQUd4RDtLQVBTTjtBQVNULFNBQVNPLFNBQVMsS0FBVTtRQUFWLEVBQUNDLFFBQVEsRUFBQyxHQUFWO0lBQ2QscUJBQ0ksOERBQUNDO1FBQUlMLFdBQVU7a0JBQ2YsNEVBQUNKO1lBQVMsR0FBR1EsUUFBUSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7O0FBS2hDO01BUlNEO0FBU1QsU0FBU0csYUFBYSxLQUFpQjtRQUFqQixFQUFDQyxFQUFFLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFDLEdBQWpCO0lBQ2xCLHFCQUNJLDhEQUFDSjtRQUFJTCxXQUFVO2tCQUNmLDRFQUFDVTtZQUFJQyxLQUFLLG9CQUF1QixPQUFISixJQUFHO1lBQU9LLEtBQUssR0FBWUgsT0FBVEQsT0FBTSxLQUFRLE9BQUxDO1lBQVFULFdBQVU7WUFBY2EsT0FBTTs7Ozs7Ozs7Ozs7QUFJdkc7TUFQU1A7QUFTVCxTQUFTUSxvQkFBb0IsS0FDNEM7UUFENUMsRUFDekJOLEtBQUssRUFBRUMsSUFBSSxFQUFFTSxHQUFHLEVBQUVDLE9BQU8sRUFBRUMsYUFBYSxFQUFFQyxRQUFRLEVBQUVDLGtCQUFBQSxpQkFBZ0IsRUFBQyxHQUQ1QztJQUV6QixxQkFDSSw4REFBQ2Q7UUFBSUwsV0FBVTs7MEJBQ2YsOERBQUNLO2dCQUFJTCxXQUFVOzBCQUNYLDRFQUFDb0I7b0JBQUdwQixXQUFVOzt3QkFDVFE7d0JBQU07d0JBQUVDOzs7Ozs7Ozs7Ozs7MEJBR2pCLDhEQUFDZCx3REFBZUE7Z0JBQ2hCdUIsVUFBV0E7Z0JBQ1hDLGtCQUFrQkE7Ozs7OzswQkFDbEIsOERBQUNkOztrQ0FDRyw4REFBQ2dCO3dCQUFFckIsV0FBVTtrQ0FDUGU7Ozs7OztrQ0FFTiw4REFBQ1Y7d0JBQUlMLFdBQVU7OzBDQUNYLDhEQUFDSztnQ0FBSUwsV0FBVTs7a0RBQ1gsOERBQUNzQjtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQztrREFBSVA7Ozs7Ozs7Ozs7OzswQ0FHVCw4REFBQ1g7Z0NBQUlMLFdBQVU7O2tEQUNYLDhEQUFDc0I7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0M7a0RBQUlOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVekI7TUFsQ1NIO0FBcUNULFNBQVNVLFFBQVEsS0FBdUI7UUFBdkIsRUFBQ0MsT0FBTyxFQUFFQyxZQUFZLEVBQUMsR0FBdkI7SUFDYixNQUFNLEVBQUNuQixFQUFFLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFTCxRQUFRLEVBQUMsR0FBR3FCO0lBQ3BDLHFCQUNJLDhEQUFDcEI7UUFBSUwsV0FBVTs7MEJBQ2YsOERBQUNLO2dCQUFJTCxXQUFVOztrQ0FDZiw4REFBQ007d0JBQWFDLElBQUlBO3dCQUFJQyxPQUFPQTt3QkFBT0MsTUFBTUE7Ozs7OztrQ0FDMUMsOERBQUNLO3dCQUFzQixHQUFHVyxPQUFPO3dCQUFHTixrQkFBa0JBOzs7Ozs7Ozs7Ozs7WUFHckRPLGlCQUFpQixxQkFDbEIsOERBQUN2QjtnQkFBU0MsVUFBVUE7Ozs7O3VCQUFjOzs7Ozs7O0FBSTFDO01BZFNvQjtBQWdCVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzPzI5MmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXJGYXZvcml0ZSBmcm9tIFwiLi9TcGVha2VyRmF2b3JpdGVcIlxyXG5cclxuZnVuY3Rpb24gU2Vzc2lvbih7dGl0bGUsIHJvb219KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBTZXNzaW9ucyh7c2Vzc2lvbnN9KXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxyXG4gICAgICAgIDxTZXNzaW9uIHsuLi5zZXNzaW9uc1swXX0gLz5cclxuXHJcblxyXG4gICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmZ1bmN0aW9uIFNwZWFrZXJJbWFnZSh7aWQsIGZpcnN0LCBsYXN0fSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtgL2ltYWdlcy9zcGVha2Vycy0ke2lkfS5qcGdgfSBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH0gY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIiB3aWR0aD1cIjMwMFwiIC8+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJEZW1vZ3JhcGhpY3Moe1xyXG4gICAgZmlyc3QsIGxhc3QsIGJpbywgY29tcGFueSwgdHdpdHRlckhhbmRsZSwgZmF2b3JpdGUsIG9uRmF2b3JpdGVUb2dnbGV9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAge2ZpcnN0fSB7bGFzdH1cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8U3BlYWtlckZhdm9yaXRlXHJcbiAgICAgICAgZmF2b3JpdGUgPXtmYXZvcml0ZX1cclxuICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlPXtvbkZhdm9yaXRlVG9nZ2xlfS8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgIHtiaW99XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5Db21wYW55PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+e2NvbXBhbnl9PC9oNj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5Ud2l0dGVyPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8aDY+e3R3aXR0ZXJIYW5kbGV9PC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXIoe3NwZWFrZXIsIHNob3dTZXNzaW9uc30pe1xyXG4gICAgY29uc3Qge2lkLCBmaXJzdCwgbGFzdCwgc2Vzc2lvbnN9ID0gc3BlYWtlcjtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxyXG4gICAgICAgIDxTcGVha2VySW1hZ2UgaWQ9e2lkfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IC8+XHJcbiAgICAgICAgPFNwZWFrZXJEZW1vZ3JhcGhpY3MgIHsuLi5zcGVha2VyfSAgb25GYXZvcml0ZVRvZ2dsZT17b25GYXZvcml0ZVRvZ2dsZX0vPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c2hvd1Nlc3Npb25zID09PSB0cnVlID9cclxuICAgICAgICA8U2Vzc2lvbnMgc2Vzc2lvbnM9e3Nlc3Npb25zfS8+IDogbnVsbH1cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjsiXSwibmFtZXMiOlsiU3BlYWtlckZhdm9yaXRlIiwiU2Vzc2lvbiIsInRpdGxlIiwicm9vbSIsInNwYW4iLCJjbGFzc05hbWUiLCJzdHJvbmciLCJuYW1lIiwiU2Vzc2lvbnMiLCJzZXNzaW9ucyIsImRpdiIsIlNwZWFrZXJJbWFnZSIsImlkIiwiZmlyc3QiLCJsYXN0IiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJTcGVha2VyRGVtb2dyYXBoaWNzIiwiYmlvIiwiY29tcGFueSIsInR3aXR0ZXJIYW5kbGUiLCJmYXZvcml0ZSIsIm9uRmF2b3JpdGVUb2dnbGUiLCJoMyIsInAiLCJoNSIsImg2IiwiU3BlYWtlciIsInNwZWFrZXIiLCJzaG93U2Vzc2lvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ })

});