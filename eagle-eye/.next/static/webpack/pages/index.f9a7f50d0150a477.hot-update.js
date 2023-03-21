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

/***/ "./components/SearchBar.tsx":
/*!**********************************!*\
  !*** ./components/SearchBar.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst SearchBar = (param)=>{\n    let { onResults , setLoading  } = param;\n    _s();\n    const searchInputRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const onSubmit = async (event)=>{\n        var _searchInputRef_current;\n        event.preventDefault();\n        setLoading(true);\n        const response = await fetch(\"/api/get_courses\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                query: (_searchInputRef_current = searchInputRef.current) === null || _searchInputRef_current === void 0 ? void 0 : _searchInputRef_current.value,\n                searchResults: 5\n            })\n        });\n        const jsonResponse = await response.json();\n        setLoading(false);\n        onResults(jsonResponse.matches);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-2.5 flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-4 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2 mx-auto sm:mx-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex items-center\",\n                onSubmit: onSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: searchInputRef,\n                        type: \"text\",\n                        className: \"w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:shadow\",\n                        placeholder: \"Search for courses...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jakeottiger/Desktop/Programming/eagle-eye/eagle-eye/components/SearchBar.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"ml-4 px-4 py-2 bg-red-800 text-white font-semibold rounded-lg focus:outline-none active:bg-red-900 active:shadow-inner\",\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jakeottiger/Desktop/Programming/eagle-eye/eagle-eye/components/SearchBar.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jakeottiger/Desktop/Programming/eagle-eye/eagle-eye/components/SearchBar.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/jakeottiger/Desktop/Programming/eagle-eye/eagle-eye/components/SearchBar.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jakeottiger/Desktop/Programming/eagle-eye/eagle-eye/components/SearchBar.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchBar, \"1Huwt9f9sVQqX6JpiuuE0oS3qT8=\");\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaEJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQVExQixNQUFNQyxZQUFzQyxTQUErQjtRQUE5QixFQUFFQyxVQUFTLEVBQUVDLFdBQVUsRUFBRTs7SUFFcEUsTUFBTUMsaUJBQWlCSixtREFBWSxDQUFtQixJQUFJO0lBRTFELE1BQU1NLFdBQVcsT0FBT0MsUUFBNEM7WUFTdkRIO1FBUlhHLE1BQU1DLGNBQWM7UUFFcEJMLFdBQVcsSUFBSTtRQUVmLE1BQU1NLFdBQVcsTUFBTUMsTUFBTSxvQkFBb0I7WUFDL0NDLFFBQVE7WUFDUkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7WUFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDbkJDLE9BQU9aLENBQUFBLDBCQUFBQSxlQUFlYSxPQUFPLGNBQXRCYixxQ0FBQUEsS0FBQUEsSUFBQUEsd0JBQXdCYyxLQUFLO2dCQUNwQ0MsZUFBZTtZQUNqQjtRQUNGO1FBRUEsTUFBTUMsZUFBZSxNQUFNWCxTQUFTWSxJQUFJO1FBRXhDbEIsV0FBVyxLQUFLO1FBRWhCRCxVQUFVa0IsYUFBYUUsT0FBTztJQUVoQztJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDQztnQkFBS0QsV0FBVTtnQkFBb0JsQixVQUFVQTs7a0NBQzVDLDhEQUFDb0I7d0JBQ0NDLEtBQUt2Qjt3QkFDTHdCLE1BQUs7d0JBQ0xKLFdBQVU7d0JBQ1ZLLGFBQVk7Ozs7OztrQ0FFZCw4REFBQ0M7d0JBQ0NGLE1BQUs7d0JBQ0xKLFdBQVU7a0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQTlDTXZCO0tBQUFBO0FBZ0ROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VhcmNoQmFyLnRzeD8xNzk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLy8gRGVmaW5lIHRoZSB0eXBlIGZvciB0aGUgU2VhcmNoQmFyIHByb3BzXG50eXBlIFNlYXJjaEJhclByb3BzID0ge1xuICBvblJlc3VsdHM6IChtYXRjaGVzOiBhbnlbXSkgPT4gdm9pZDtcbiAgc2V0TG9hZGluZzogKGxvYWRpbmc6IGJvb2xlYW4pID0+IHZvaWQ7XG59O1xuXG5jb25zdCBTZWFyY2hCYXI6IFJlYWN0LkZDPFNlYXJjaEJhclByb3BzPiA9ICh7IG9uUmVzdWx0cywgc2V0TG9hZGluZyB9KSA9PiB7XG5cbiAgY29uc3Qgc2VhcmNoSW5wdXRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2V0X2NvdXJzZXNcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgcXVlcnk6IHNlYXJjaElucHV0UmVmLmN1cnJlbnQ/LnZhbHVlLFxuICAgICAgICBzZWFyY2hSZXN1bHRzOiA1LFxuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcblxuICAgIG9uUmVzdWx0cyhqc29uUmVzcG9uc2UubWF0Y2hlcyk7XG5cbiAgfTtcbiAgICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIuNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBzaGFkb3ctbGcgdy1mdWxsIHNtOnctMy80IG1kOnctMi8zIGxnOnctMS8yIHhsOnctMS8yIG14LWF1dG8gc206bXgtNFwiPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e3NlYXJjaElucHV0UmVmfVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvd1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgY291cnNlcy4uLlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTQgcHgtNCBweS0yIGJnLXJlZC04MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGFjdGl2ZTpiZy1yZWQtOTAwIGFjdGl2ZTpzaGFkb3ctaW5uZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNlYXJjaEJhciIsIm9uUmVzdWx0cyIsInNldExvYWRpbmciLCJzZWFyY2hJbnB1dFJlZiIsInVzZVJlZiIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsImN1cnJlbnQiLCJ2YWx1ZSIsInNlYXJjaFJlc3VsdHMiLCJqc29uUmVzcG9uc2UiLCJqc29uIiwibWF0Y2hlcyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJpbnB1dCIsInJlZiIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SearchBar.tsx\n"));

/***/ })

});