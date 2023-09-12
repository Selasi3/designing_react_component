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

/***/ "./src/hooks/useRequestDelay.js":
/*!**************************************!*\
  !*** ./src/hooks/useRequestDelay.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   REQUEST_STATUS: function() { return /* binding */ REQUEST_STATUS; }\n/* harmony export */ });\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\nconst REQUEST_STATUS = {\n    LOADING: \"loading\",\n    SUCCESS: \"success\",\n    FAILURE: \"failure\"\n};\nfunction useRequestDelay() {\n    let delayTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000, initialData = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData);\n    const [requestStatus, setRequestStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(REQUEST_STATUS.LOADING);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function delayFunc() {\n            try {\n                await delay(delayTime);\n                // throw \"Had Error\";\n                setRequestStatus(REQUEST_STATUS.SUCCESS);\n                setData(data);\n            } catch (e) {\n                setRequestStatus(REQUEST_STATUS.FAILURE);\n                setError(e);\n            }\n        }\n        delayFunc();\n    }, []);\n    function updateRecord(recordUpdated, doneCallBack) {\n        const originalRecords = [\n            ...data\n        ];\n        const newRecord = data.map(function(rec) {\n            return rec.id === recordUpdated.id ? recordUpdated : rec;\n        });\n        async function delayFunction() {\n            try {\n                setData(newRecord);\n                await delay(delayTime);\n                if (doneCallBack) {\n                    doneCallBack();\n                }\n            } catch (error) {\n                console.log(\"error thrown inside delayFunction\", error);\n                if (doneCallBack) {\n                    doneCallBack();\n                }\n                setData(originalRecords);\n            }\n        }\n        delayFunction();\n    }\n    return {\n        data,\n        requestStatus,\n        error,\n        updateRecord\n    };\n}\n_s(useRequestDelay, \"/Q5hd3zsV2Ij7JDh84VFSCYTHHg=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequestDelay);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlUmVxdWVzdERlbGF5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlDO0FBQ0c7QUFFckMsTUFBTUcsaUJBQWlCO0lBQzFCQyxTQUFTO0lBQ1RDLFNBQVM7SUFDVEMsU0FBUztBQUNiLEVBQUM7QUFFRCxTQUFTQztRQUFnQkMsWUFBQUEsaUVBQVksTUFBTUMsY0FBQUEsaUVBQWMsRUFBRTs7SUFDdkQsTUFBTSxDQUFDVCxNQUFNVSxRQUFRLEdBQUdULCtDQUFRQSxDQUFDUTtJQUNqQyxNQUFNLENBQUNFLGVBQWVDLGlCQUFpQixHQUFHWCwrQ0FBUUEsQ0FBQ0UsZUFBZUMsT0FBTztJQUN6RSxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQUM7SUFJbkMsTUFBTWMsUUFBUSxDQUFDQyxLQUFPLElBQUlDLFFBQVEsQ0FBQ0MsVUFBWUMsV0FBV0QsU0FBU0Y7SUFHbkVkLGdEQUFTQSxDQUFDO1FBQ04sZUFBZWtCO1lBQ1gsSUFBSTtnQkFDQSxNQUFNTCxNQUFNUDtnQkFDWixxQkFBcUI7Z0JBQ3JCSSxpQkFBaUJULGVBQWVFLE9BQU87Z0JBQ3ZDSyxRQUFRVjtZQUNaLEVBQUUsT0FBT3FCLEdBQUc7Z0JBQ1JULGlCQUFpQlQsZUFBZUcsT0FBTztnQkFFdkNRLFNBQVNPO1lBQ2I7UUFHSjtRQUNBRDtJQUNKLEdBQUcsRUFBRTtJQUdMLFNBQVNFLGFBQWFDLGFBQWEsRUFBRUMsWUFBWTtRQUM3QyxNQUFNQyxrQkFBa0I7ZUFBSXpCO1NBQUs7UUFDakMsTUFBTTBCLFlBQVkxQixLQUFLMkIsR0FBRyxDQUFDLFNBQVNDLEdBQUc7WUFDbkMsT0FBT0EsSUFBSUMsRUFBRSxLQUFLTixjQUFjTSxFQUFFLEdBQUdOLGdCQUFnQks7UUFDekQ7UUFFQSxlQUFlRTtZQUNYLElBQUk7Z0JBQ0FwQixRQUFRZ0I7Z0JBRVIsTUFBTVgsTUFBTVA7Z0JBQ1osSUFBSWdCLGNBQWM7b0JBQ2RBO2dCQUNKO1lBRUosRUFBRSxPQUFPWCxPQUFPO2dCQUNaa0IsUUFBUUMsR0FBRyxDQUFDLHFDQUFxQ25CO2dCQUNqRCxJQUFJVyxjQUFjO29CQUNkQTtnQkFDSjtnQkFDQWQsUUFBUWU7WUFDWjtRQUVKO1FBQ0FLO0lBQ0o7SUFDQSxPQUFPO1FBQ0g5QjtRQUNBVztRQUNBRTtRQUNBUztJQUNKO0FBQ0o7R0E3RFNmO0FBOERULCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VSZXF1ZXN0RGVsYXkuanM/OGVlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcclxuICAgIExPQURJTkc6IFwibG9hZGluZ1wiLFxyXG4gICAgU1VDQ0VTUzogXCJzdWNjZXNzXCIsXHJcbiAgICBGQUlMVVJFOiBcImZhaWx1cmVcIlxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VSZXF1ZXN0RGVsYXkoZGVsYXlUaW1lID0gMTAwMCwgaW5pdGlhbERhdGEgPSBbXSkge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoaW5pdGlhbERhdGEpO1xyXG4gICAgY29uc3QgW3JlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXNdID0gdXNlU3RhdGUoUkVRVUVTVF9TVEFUVVMuTE9BRElORylcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuYygpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aHJvdyBcIkhhZCBFcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5TVUNDRVNTKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZSlcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGF5RnVuYygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVSZWNvcmQocmVjb3JkVXBkYXRlZCwgZG9uZUNhbGxCYWNrKSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxSZWNvcmRzID0gWy4uLmRhdGFdO1xyXG4gICAgICAgIGNvbnN0IG5ld1JlY29yZCA9IGRhdGEubWFwKGZ1bmN0aW9uKHJlYykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVjLmlkID09PSByZWNvcmRVcGRhdGVkLmlkID8gcmVjb3JkVXBkYXRlZCA6IHJlYztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHNldERhdGEobmV3UmVjb3JkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvbmVDYWxsQmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmVDYWxsQmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChkb25lQ2FsbEJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lQ2FsbEJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldERhdGEob3JpZ2luYWxSZWNvcmRzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsYXlGdW5jdGlvbigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIHJlcXVlc3RTdGF0dXMsXHJcbiAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgdXBkYXRlUmVjb3JkXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3REZWxheTsiXSwibmFtZXMiOlsiZGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUkVRVUVTVF9TVEFUVVMiLCJMT0FESU5HIiwiU1VDQ0VTUyIsIkZBSUxVUkUiLCJ1c2VSZXF1ZXN0RGVsYXkiLCJkZWxheVRpbWUiLCJpbml0aWFsRGF0YSIsInNldERhdGEiLCJyZXF1ZXN0U3RhdHVzIiwic2V0UmVxdWVzdFN0YXR1cyIsImVycm9yIiwic2V0RXJyb3IiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZGVsYXlGdW5jIiwiZSIsInVwZGF0ZVJlY29yZCIsInJlY29yZFVwZGF0ZWQiLCJkb25lQ2FsbEJhY2siLCJvcmlnaW5hbFJlY29yZHMiLCJuZXdSZWNvcmQiLCJtYXAiLCJyZWMiLCJpZCIsImRlbGF5RnVuY3Rpb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useRequestDelay.js\n"));

/***/ })

});