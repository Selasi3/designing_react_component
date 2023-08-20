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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SpeakersList(param) {\n    let { showSessions } = param;\n    _s();\n    const [speakersData, setSpeakersData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [hasErrored, setHasErrored] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function delayFunc() {\n            await delay(2000);\n            setIsLoading(false);\n            setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data);\n        }\n        delayFunc();\n    }, []);\n    function onFavoriteToggle(id) {\n        const speakersRecPrevious = speakersData.find(function(rec) {\n            return rec.id == id;\n        });\n        const speakerRecUpdated = {\n            ...speakersRecPrevious,\n            favorite: !speakersRecPrevious.favorite\n        };\n        const speakersDataNew = speakersData.map(function(rec) {\n            return rec.id === id ? speakerRecUpdated : rec;\n        });\n        setSpeakersData(speakersDataNew);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakersData.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onFavoriteToggle: ()=>{\n                        onFavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 47,\n                    columnNumber: 28\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 44,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\SELASI\\\\Desktop\\\\React training\\\\designing_react_component\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakersList, \"Y/cxgZmb17p6gOyWNrmQILd1wAw=\");\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStCO0FBQ1U7QUFDRztBQUU1QyxTQUFTSSxhQUFhLEtBQWU7UUFBZixFQUFDQyxZQUFZLEVBQUUsR0FBZjs7SUFDbEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUNuRCxNQUFNLENBQUNNLFdBQVVDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDMUMsTUFBTSxDQUFDUSxZQUFZQyxjQUFjLEdBQUVULCtDQUFRQSxDQUFDO0lBQzVDLE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUluQyxNQUFNWSxRQUFRLENBQUNDLEtBQU8sSUFBSUMsUUFBUSxDQUFDQyxVQUFZQyxXQUFXRCxTQUFRRjtJQUdsRVosZ0RBQVNBLENBQUM7UUFDTixlQUFlZ0I7WUFDZixNQUFNTCxNQUFNO1lBQ1pMLGFBQWE7WUFDYkYsZ0JBQWdCTiw4Q0FBSUE7UUFHeEI7UUFDQWtCO0lBQ0EsR0FBRyxFQUFFO0lBR0wsU0FBU0MsaUJBQWlCQyxFQUFFO1FBQ3hCLE1BQU1DLHNCQUFzQmhCLGFBQWFpQixJQUFJLENBQUMsU0FBVUMsR0FBRztZQUN2RCxPQUFPQSxJQUFJSCxFQUFFLElBQUdBO1FBQ3BCO1FBQ0EsTUFBTUksb0JBQW9CO1lBQ3RCLEdBQUdILG1CQUFtQjtZQUN0QkksVUFBVSxDQUFDSixvQkFBb0JJLFFBQVE7UUFDM0M7UUFDQSxNQUFNQyxrQkFBa0JyQixhQUFhc0IsR0FBRyxDQUFDLFNBQVVKLEdBQUc7WUFDbEQsT0FBT0EsSUFBSUgsRUFBRSxLQUFLQSxLQUFLSSxvQkFBb0JEO1FBQy9DO1FBRUFqQixnQkFBZ0JvQjtJQUNwQjtJQUNBLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNWeEIsYUFBYXNCLEdBQUcsQ0FBQyxTQUFTRyxPQUFPO2dCQUU5QixxQkFBTyw4REFBQy9CLGdEQUFPQTtvQkFFZitCLFNBQVNBO29CQUNUMUIsY0FBY0E7b0JBQ2RlLGtCQUFrQjt3QkFDZEEsaUJBQWlCVyxRQUFRVixFQUFFO29CQUMvQjttQkFMS1UsUUFBUVYsRUFBRTs7Ozs7WUFNbkI7Ozs7Ozs7Ozs7O0FBS2hCO0dBdERTakI7S0FBQUE7QUF1RFQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzPzJhNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiXHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gU3BlYWtlcnNMaXN0KHtzaG93U2Vzc2lvbnMgfSl7XHJcbiAgICBjb25zdCBbc3BlYWtlcnNEYXRhLCBzZXRTcGVha2Vyc0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZyxzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbaGFzRXJyb3JlZCwgc2V0SGFzRXJyb3JlZF0gPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSxtcykpXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKXtcclxuICAgICAgICBhd2FpdCBkZWxheSgyMDAwKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldFNwZWFrZXJzRGF0YShkYXRhKTtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgZGVsYXlGdW5jKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIG9uRmF2b3JpdGVUb2dnbGUoaWQpe1xyXG4gICAgICAgIGNvbnN0IHNwZWFrZXJzUmVjUHJldmlvdXMgPSBzcGVha2Vyc0RhdGEuZmluZChmdW5jdGlvbiAocmVjKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PWlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHNwZWFrZXJSZWNVcGRhdGVkID0ge1xyXG4gICAgICAgICAgICAuLi5zcGVha2Vyc1JlY1ByZXZpb3VzLFxyXG4gICAgICAgICAgICBmYXZvcml0ZTogIXNwZWFrZXJzUmVjUHJldmlvdXMuZmF2b3JpdGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHNwZWFrZXJzRGF0YU5ldyA9IHNwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHJlYykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVjLmlkID09PSBpZCA/IHNwZWFrZXJSZWNVcGRhdGVkIDogcmVjO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRTcGVha2Vyc0RhdGEoc3BlYWtlcnNEYXRhTmV3KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAge3NwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24oc3BlYWtlcil7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8U3BlYWtlclxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cclxuICAgICAgICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZShzcGVha2VyLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNMaXN0OyJdLCJuYW1lcyI6WyJTcGVha2VyIiwiZGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU3BlYWtlcnNMaXN0Iiwic2hvd1Nlc3Npb25zIiwic3BlYWtlcnNEYXRhIiwic2V0U3BlYWtlcnNEYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFzRXJyb3JlZCIsInNldEhhc0Vycm9yZWQiLCJlcnJvciIsInNldEVycm9yIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImRlbGF5RnVuYyIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpZCIsInNwZWFrZXJzUmVjUHJldmlvdXMiLCJmaW5kIiwicmVjIiwic3BlYWtlclJlY1VwZGF0ZWQiLCJmYXZvcml0ZSIsInNwZWFrZXJzRGF0YU5ldyIsIm1hcCIsImRpdiIsImNsYXNzTmFtZSIsInNwZWFrZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n"));

/***/ })

});