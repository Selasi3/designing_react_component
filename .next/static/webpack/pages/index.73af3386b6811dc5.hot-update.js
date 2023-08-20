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

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useRequestDelay */ \"./src/hooks/useRequestDelay.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction SpeakersList(param) {\n    let { showSessions } = param;\n    _s();\n    const { speakersData, requestStatus, error, onFavoriteToggle } = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(2000);\n    if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__.REQUEST_STATUS.FAILURE) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-danger\",\n            children: [\n                \"ERROR: \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: [\n                        \"Loading Speaker Data Failed \",\n                        error\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 11,\n                    columnNumber: 24\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, this);\n    }\n    // if(requestStatus === REQUEST_STATUS.LOADING) return <div>Loading...</div>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakersData.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onFavoriteToggle: ()=>{\n                        onFavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 22,\n                    columnNumber: 32\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 19,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakersList, \"8hng8sbIPsKHzQtKzA3JwD/4uwY=\", false, function() {\n    return [\n        _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQUM2QztBQUU1RSxTQUFTRyxhQUFhLEtBQWU7UUFBZixFQUFDQyxZQUFZLEVBQUUsR0FBZjs7SUFDbEIsTUFBTSxFQUFDQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMsS0FBSyxFQUFFQyxnQkFBZ0IsRUFDMUQsR0FBR1Asa0VBQWtCQSxDQUFDO0lBRXZCLElBQUdLLGtCQUFrQkosa0VBQWNBLENBQUNPLE9BQU8sRUFBQztRQUN4QyxxQkFDSSw4REFBQ0M7WUFBSUMsV0FBVTs7Z0JBQWM7OEJBQ2xCLDhEQUFDQzs7d0JBQUU7d0JBQTZCTDs7Ozs7Ozs7Ozs7OztJQUduRDtJQUVBLDRFQUE0RTtJQUM1RSxxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDUCw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDVk4sYUFBYVEsR0FBRyxDQUFDLFNBQVNDLE9BQU87Z0JBRTlCLHFCQUFPLDhEQUFDZCxnREFBT0E7b0JBRWZjLFNBQVNBO29CQUNUVixjQUFjQTtvQkFDZEksa0JBQWtCO3dCQUNkQSxpQkFBaUJNLFFBQVFDLEVBQUU7b0JBQy9CO21CQUxLRCxRQUFRQyxFQUFFOzs7OztZQU1uQjs7Ozs7Ozs7Ozs7QUFLcEI7R0E5QlNaOztRQUVERiw4REFBa0JBOzs7S0FGakJFO0FBK0JULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcz8yYTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2VyIGZyb20gXCIuL1NwZWFrZXJcIlxyXG5pbXBvcnQgdXNlUmVxdWVzdFNwZWFrZXJzLCB7UkVRVUVTVF9TVEFUVVN9IGZyb20gXCIuLi9ob29rcy91c2VSZXF1ZXN0RGVsYXlcIjtcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJzTGlzdCh7c2hvd1Nlc3Npb25zIH0pe1xyXG4gICAgY29uc3Qge3NwZWFrZXJzRGF0YSwgcmVxdWVzdFN0YXR1cywgZXJyb3IsIG9uRmF2b3JpdGVUb2dnbGVcclxuICAgIH0gPSB1c2VSZXF1ZXN0U3BlYWtlcnMoMjAwMCk7XHJcblxyXG4gICAgaWYocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgRVJST1I6IDxiPkxvYWRpbmcgU3BlYWtlciBEYXRhIEZhaWxlZCB7ZXJyb3J9PC9iPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuTE9BRElORykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uKHNwZWFrZXIpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxTcGVha2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlcj17c3BlYWtlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzTGlzdDsiXSwibmFtZXMiOlsiU3BlYWtlciIsInVzZVJlcXVlc3RTcGVha2VycyIsIlJFUVVFU1RfU1RBVFVTIiwiU3BlYWtlcnNMaXN0Iiwic2hvd1Nlc3Npb25zIiwic3BlYWtlcnNEYXRhIiwicmVxdWVzdFN0YXR1cyIsImVycm9yIiwib25GYXZvcml0ZVRvZ2dsZSIsIkZBSUxVUkUiLCJkaXYiLCJjbGFzc05hbWUiLCJiIiwibWFwIiwic3BlYWtlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n"));

/***/ }),

/***/ "./src/hooks/useRequestDelay.js":
/*!**************************************!*\
  !*** ./src/hooks/useRequestDelay.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   REQUEST_STATUS: function() { return /* binding */ REQUEST_STATUS; }\n/* harmony export */ });\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\nconst REQUEST_STATUS = {\n    LOADING: \"loading\",\n    SUCCESS: \"success\",\n    FAILURE: \"failure\"\n};\nfunction useRequestDelay() {\n    let delayTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000, initialData = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData);\n    const [requestStatus, setRequestStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(REQUEST_STATUS.LOADING);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function delayFunc() {\n            try {\n                await delay(delayTime);\n                // throw \"Had Error\";\n                setRequestStatus(REQUEST_STATUS.SUCCESS);\n                setData(data);\n            } catch (e) {\n                setRequestStatus(REQUEST_STATUS.FAILURE);\n                setError(e);\n            }\n        }\n        delayFunc();\n    }, []);\n    function updateRecord(recordUpdated) {\n        const newRecord = data.map(function(rec) {\n            return rec.id === recordUpdated.id ? recordUpdated : rec;\n        });\n        async function delayFunction() {\n            try {\n                await delay(delayTime);\n                setData(newRecord);\n            } catch (error) {\n                console.log(\"error thrown inside delayFunction\", error);\n            }\n        }\n        delayFunction();\n    }\n    return {\n        speakersData,\n        requestStatus,\n        error,\n        updateRecord\n    };\n}\n_s(useRequestDelay, \"/Q5hd3zsV2Ij7JDh84VFSCYTHHg=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequestDelay);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlUmVxdWVzdERlbGF5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlDO0FBQ0c7QUFFckMsTUFBTUcsaUJBQWlCO0lBQzFCQyxTQUFTO0lBQ1RDLFNBQVM7SUFDVEMsU0FBUztBQUNiLEVBQUM7QUFFRCxTQUFTQztRQUFnQkMsWUFBQUEsaUVBQVksTUFBTUMsY0FBQUEsaUVBQWMsRUFBRTs7SUFDdkQsTUFBTSxDQUFDVCxNQUFNVSxRQUFRLEdBQUdULCtDQUFRQSxDQUFDUTtJQUNqQyxNQUFNLENBQUNFLGVBQWVDLGlCQUFpQixHQUFHWCwrQ0FBUUEsQ0FBQ0UsZUFBZUMsT0FBTztJQUN6RSxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQUM7SUFJbkMsTUFBTWMsUUFBUSxDQUFDQyxLQUFPLElBQUlDLFFBQVEsQ0FBQ0MsVUFBWUMsV0FBV0QsU0FBU0Y7SUFHbkVkLGdEQUFTQSxDQUFDO1FBQ04sZUFBZWtCO1lBQ1gsSUFBSTtnQkFDQSxNQUFNTCxNQUFNUDtnQkFDWixxQkFBcUI7Z0JBQ3JCSSxpQkFBaUJULGVBQWVFLE9BQU87Z0JBQ3ZDSyxRQUFRVjtZQUNaLEVBQUUsT0FBT3FCLEdBQUc7Z0JBQ1JULGlCQUFpQlQsZUFBZUcsT0FBTztnQkFFdkNRLFNBQVNPO1lBQ2I7UUFHSjtRQUNBRDtJQUNKLEdBQUcsRUFBRTtJQUdMLFNBQVNFLGFBQWFDLGFBQWE7UUFDL0IsTUFBTUMsWUFBWXhCLEtBQUt5QixHQUFHLENBQUMsU0FBU0MsR0FBRztZQUNuQyxPQUFPQSxJQUFJQyxFQUFFLEtBQUtKLGNBQWNJLEVBQUUsR0FBR0osZ0JBQWdCRztRQUN6RDtRQUVBLGVBQWVFO1lBQ1gsSUFBSTtnQkFDQSxNQUFNYixNQUFNUDtnQkFDWkUsUUFBUWM7WUFFWixFQUFFLE9BQU9YLE9BQU87Z0JBQ1pnQixRQUFRQyxHQUFHLENBQUMscUNBQXFDakI7WUFDckQ7UUFFSjtRQUNBZTtJQUNKO0lBQ0EsT0FBTztRQUNIRztRQUNBcEI7UUFDQUU7UUFDQVM7SUFDSjtBQUNKO0dBcERTZjtBQXFEVCwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlUmVxdWVzdERlbGF5LmpzPzhlZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVRVUVTVF9TVEFUVVMgPSB7XHJcbiAgICBMT0FESU5HOiBcImxvYWRpbmdcIixcclxuICAgIFNVQ0NFU1M6IFwic3VjY2Vzc1wiLFxyXG4gICAgRkFJTFVSRTogXCJmYWlsdXJlXCJcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlUmVxdWVzdERlbGF5KGRlbGF5VGltZSA9IDEwMDAsIGluaXRpYWxEYXRhID0gW10pIHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcclxuICAgIGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpXHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhyb3cgXCJIYWQgRXJyb3JcIjtcclxuICAgICAgICAgICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGUpXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxheUZ1bmMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUmVjb3JkKHJlY29yZFVwZGF0ZWQpIHtcclxuICAgICAgICBjb25zdCBuZXdSZWNvcmQgPSBkYXRhLm1hcChmdW5jdGlvbihyZWMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gcmVjb3JkVXBkYXRlZC5pZCA/IHJlY29yZFVwZGF0ZWQgOiByZWM7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShuZXdSZWNvcmQpO1xyXG5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsYXlGdW5jdGlvbigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzcGVha2Vyc0RhdGEsXHJcbiAgICAgICAgcmVxdWVzdFN0YXR1cyxcclxuICAgICAgICBlcnJvcixcclxuICAgICAgICB1cGRhdGVSZWNvcmRcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdERlbGF5OyJdLCJuYW1lcyI6WyJkYXRhIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNDRVNTIiwiRkFJTFVSRSIsInVzZVJlcXVlc3REZWxheSIsImRlbGF5VGltZSIsImluaXRpYWxEYXRhIiwic2V0RGF0YSIsInJlcXVlc3RTdGF0dXMiLCJzZXRSZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJkZWxheUZ1bmMiLCJlIiwidXBkYXRlUmVjb3JkIiwicmVjb3JkVXBkYXRlZCIsIm5ld1JlY29yZCIsIm1hcCIsInJlYyIsImlkIiwiZGVsYXlGdW5jdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJzcGVha2Vyc0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useRequestDelay.js\n"));

/***/ })

});