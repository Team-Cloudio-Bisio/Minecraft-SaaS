"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/serverlist",{

/***/ "./components/AlertServer.tsx":
/*!************************************!*\
  !*** ./components/AlertServer.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AlertPopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/globals.css */ \"./app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst test = {\n    id: 1,\n    name: \"Vanilla\",\n    status: true,\n    version: \"1.20\",\n    curp: 0,\n    maxp: 5,\n    gamemode: 0,\n    difficulty: 2,\n    whitelist: false,\n    cracked: false,\n    fly: false,\n    entities: true,\n    resourcepack: \"\"\n};\nfunction AlertPopup(closePopup) {\n    _s();\n    const [overPopup, setOverPopup] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    function checkID() {\n        if (closePopup.serverUp.serverInstance.id == closePopup.serverUp.active) setOverPopup(true);\n        else closePopup.closePopupBack(false) //callback per far chiudere il primo popup (la pagina delle impostazioni)\n        ;\n        closePopup.serverUp.updateCallback(closePopup.newProps) //modifica\n        ;\n    }\n    function onClickSaveOver() {\n        setOverPopup(false);\n        closePopup.newProps.status = false;\n        closePopup.serverUp.updateActiveBack(0);\n        closePopup.closePopupBack(false);\n        closePopup.serverUp.updateCallback(closePopup.newProps);\n    }\n    function handleClick() {\n        alert(\"You clicked me!\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                type: \"button\",\n                onClick: checkID,\n                children: \"Save Changes\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this),\n            overPopup ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-auto my-6 mx-auto max-w-3xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none {/*bg-white*/}\",\n                                style: {\n                                    backgroundImage: \"url('/assets/bg4.jpg')\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mx-3 my-3 flex items-start justify-between p-2 border-b border-solid bg-white rounded-md shadow-md border-slate-200\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-slate-500 text-3xl font-semibold\",\n                                                children: \"Warning\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n                                                onClick: ()=>setOverPopup(false)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mx-3 mt-4 my-3 relative px-4 py-3 flex-auto bg-white rounded-md shadow-md\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \" text-slate-500 text-lg leading-relaxed\",\n                                            children: \"Changes cannot be applied while the server is running. Do you want to turn it off and save?\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-end p-6 border-solid border-slate-200 rounded-b\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-red-500  active:bg-red-600 bg-white rounded-md shadow-md font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>setOverPopup(false),\n                                                children: \"Close\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>onClickSaveOver(),\n                                                children: \"Ok\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"opacity-50 fixed inset-0 z-40 bg-black\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(AlertPopup, \"edksnCucCQ/8XlQAALnWaLPUf+Y=\");\n_c = AlertPopup;\nvar _c;\n$RefreshReg$(_c, \"AlertPopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FsZXJ0U2VydmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBb0J4QyxNQUFNRSxPQUFNO0lBQUVDLElBQUk7SUFBR0MsTUFBTTtJQUFXQyxRQUFRO0lBQU1DLFNBQVM7SUFBUUMsTUFBTTtJQUFHQyxNQUFNO0lBQUdDLFVBQVU7SUFDbkZDLFlBQVk7SUFBR0MsV0FBVztJQUFPQyxTQUFTO0lBQU9DLEtBQUs7SUFBT0MsVUFBVTtJQUFNQyxjQUFjO0FBQUU7QUFFNUYsU0FBU0MsV0FBV0MsVUFBc0I7O0lBRXJELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHbEIsK0NBQVFBLENBQUM7SUFFM0MsU0FBU21CO1FBQ1AsSUFBSUgsV0FBV0ksU0FBU0MsZUFBZW5CLE1BQU1jLFdBQVdJLFNBQVNFLFFBQzdESixhQUFhO2FBRWJGLFdBQVdPLGVBQWUsT0FBTyx5RUFBeUU7O1FBQzFHUCxXQUFXSSxTQUFTSSxlQUFlUixXQUFXUyxVQUFVLFVBQVU7O0lBQ3hFO0lBRUEsU0FBU0M7UUFDTFIsYUFBYTtRQUNiRixXQUFXUyxTQUFTckIsU0FBUztRQUM3QlksV0FBV0ksU0FBU08saUJBQWlCO1FBQ3JDWCxXQUFXTyxlQUFlO1FBQzFCUCxXQUFXSSxTQUFTSSxlQUFlUixXQUFXUztJQUNsRDtJQUVBLFNBQVNHO1FBQ0xDLE1BQU07SUFDVjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQ0dDLFdBQVU7Z0JBQ1ZDLE1BQUs7Z0JBQ0xDLFNBQVNkOzBCQUNWOzs7Ozs7WUFHRkYsMEJBQ0M7O2tDQUNFLDhEQUFDaUI7d0JBQ0NILFdBQVU7a0NBRVYsNEVBQUNHOzRCQUFJSCxXQUFVO3NDQUViLDRFQUFDRztnQ0FBSUgsV0FBVTtnQ0FDZkksT0FBTztvQ0FDSEMsaUJBQWtCO2dDQUNsQjs7a0RBRUYsOERBQUNGO3dDQUFJSCxXQUFVOzswREFDYiw4REFBQ007Z0RBQUdOLFdBQVU7MERBQXdDOzs7Ozs7MERBR3RELDhEQUFDRDtnREFDQ0MsV0FBVTtnREFDVkUsU0FBUyxJQUFNZixhQUFhOzs7Ozs7Ozs7Ozs7a0RBS2hDLDhEQUFDZ0I7d0NBQUlILFdBQVU7a0RBQ2IsNEVBQUNPOzRDQUFFUCxXQUFVO3NEQUEwQzs7Ozs7Ozs7Ozs7a0RBTXpELDhEQUFDRzt3Q0FBSUgsV0FBVTs7MERBQ2IsOERBQUNEO2dEQUNDQyxXQUFVO2dEQUNWQyxNQUFLO2dEQUNMQyxTQUFTLElBQU1mLGFBQWE7MERBQzdCOzs7Ozs7MERBR0QsOERBQUNZO2dEQUNDQyxXQUFVO2dEQUNWQyxNQUFLO2dEQUNMQyxTQUFTLElBQU1QOzBEQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPVCw4REFBQ1E7d0JBQUlILFdBQVU7Ozs7Ozs7K0JBRWY7OztBQUdWO0dBdkZzQmhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWxlcnRTZXJ2ZXIudHN4PzE0ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL2FwcC9nbG9iYWxzLmNzcydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTZXJ2ZXJVcGRhdGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL1NlcnZlcic7XHJcbmltcG9ydCB7IENsb3NlUG9wdXAgfSBmcm9tICdAL2NvbXBvbmVudHMvRWRpdFBvcHVwJztcclxuXHJcbnR5cGUgUHJvcGVydGllcyA9IHtcclxuICAgIGlkOiBudW1iZXJcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgc3RhdHVzOiBib29sZWFuIC8vZmFsc2UtT2ZmbGluZSAgdHJ1ZS1PbmxpbmVcclxuICAgIHZlcnNpb246IHN0cmluZ1xyXG4gICAgY3VycDogbnVtYmVyXHJcbiAgICBtYXhwOiBudW1iZXJcclxuICAgIGdhbWVtb2RlOiBudW1iZXIgLy8wLXN1cnZpdmFsICAxLUNyZWF0aXZlICAyLUFkdmVudHVyZSAgMy1TcGVjdGF0b3JcclxuICAgIGRpZmZpY3VsdHk6IG51bWJlciAvLzAtUGVhY2VmdWwgIDEtRWFzeSAgMi1Ob3JtYWwgIDMtSGFyZFxyXG4gICAgd2hpdGVsaXN0OiBib29sZWFuXHJcbiAgICBjcmFja2VkOiBib29sZWFuXHJcbiAgICBmbHk6IGJvb2xlYW5cclxuICAgIGVudGl0aWVzOiBib29sZWFuXHJcbiAgICByZXNvdXJjZXBhY2s6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCB0ZXN0PSB7IGlkOiAxLCBuYW1lOiAnVmFuaWxsYScsIHN0YXR1czogdHJ1ZSwgdmVyc2lvbjogJzEuMjAnLCBjdXJwOiAwLCBtYXhwOiA1LCBnYW1lbW9kZTogMCxcclxuICAgICAgICAgICAgICBkaWZmaWN1bHR5OiAyLCB3aGl0ZWxpc3Q6IGZhbHNlLCBjcmFja2VkOiBmYWxzZSwgZmx5OiBmYWxzZSwgZW50aXRpZXM6IHRydWUsIHJlc291cmNlcGFjazogXCJcIn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsZXJ0UG9wdXAoY2xvc2VQb3B1cDogQ2xvc2VQb3B1cCkge1xyXG5cclxuICAgIGNvbnN0IFtvdmVyUG9wdXAsIHNldE92ZXJQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tJRCgpIHsgLy9jb250cm9sbGEgc2UgaWwgcnVubmluZyBlIGlsIHNlbGV6aW9uYXRvIGNvaW5jaWRvbm8sIHNlIHPDrCBmYSBhcHJpcmUgaWwgbnVvdm8gcG9wdXAgKHNldHRhIG92ZXJQb3B1cCksIGFsdHJpbWVudGkgc2kgcHJvY2VkZSBjb24gaWwgc2FsdmF0YWdnaW8gZGVpIGRhdGkgbm9ybWFsbWVudGVcclxuICAgICAgaWYgKGNsb3NlUG9wdXAuc2VydmVyVXAuc2VydmVySW5zdGFuY2UuaWQgPT0gY2xvc2VQb3B1cC5zZXJ2ZXJVcC5hY3RpdmUpIFxyXG4gICAgICAgICAgc2V0T3ZlclBvcHVwKHRydWUpXHJcbiAgICAgIGVsc2VcclxuICAgICAgICAgIGNsb3NlUG9wdXAuY2xvc2VQb3B1cEJhY2soZmFsc2UpIC8vY2FsbGJhY2sgcGVyIGZhciBjaGl1ZGVyZSBpbCBwcmltbyBwb3B1cCAobGEgcGFnaW5hIGRlbGxlIGltcG9zdGF6aW9uaSlcclxuICAgICAgICAgIGNsb3NlUG9wdXAuc2VydmVyVXAudXBkYXRlQ2FsbGJhY2soY2xvc2VQb3B1cC5uZXdQcm9wcykgLy9tb2RpZmljYVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2xpY2tTYXZlT3ZlcigpIHtcclxuICAgICAgICBzZXRPdmVyUG9wdXAoZmFsc2UpXHJcbiAgICAgICAgY2xvc2VQb3B1cC5uZXdQcm9wcy5zdGF0dXMgPSBmYWxzZVxyXG4gICAgICAgIGNsb3NlUG9wdXAuc2VydmVyVXAudXBkYXRlQWN0aXZlQmFjaygwKVxyXG4gICAgICAgIGNsb3NlUG9wdXAuY2xvc2VQb3B1cEJhY2soZmFsc2UpXHJcbiAgICAgICAgY2xvc2VQb3B1cC5zZXJ2ZXJVcC51cGRhdGVDYWxsYmFjayhjbG9zZVBvcHVwLm5ld1Byb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgICAgIGFsZXJ0KCdZb3UgY2xpY2tlZCBtZSEnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZW1lcmFsZC01MDAgdGV4dC13aGl0ZSBhY3RpdmU6YmctZW1lcmFsZC02MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNtIHB4LTYgcHktMyByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NoZWNrSUR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICBTYXZlIENoYW5nZXNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7b3ZlclBvcHVwID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4IG92ZXJmbG93LXgtaGlkZGVuIG92ZXJmbG93LXktYXV0byBmaXhlZCBpbnNldC0wIHotNTAgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctYXV0byBteS02IG14LWF1dG8gbWF4LXctM3hsXCI+XHJcbiAgICAgICAgICAgICAgICB7Lypjb250ZW50Ki99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0wIHJvdW5kZWQtbGcgc2hhZG93LWxnIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgdy1mdWxsIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgey8qYmctd2hpdGUqL31cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJy9hc3NldHMvYmc0LmpwZycpYFxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICB7LypoZWFkZXIqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0zIG15LTMgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gcC0yIGJvcmRlci1iIGJvcmRlci1zb2xpZCBiZy13aGl0ZSByb3VuZGVkLW1kIHNoYWRvdy1tZCBib3JkZXItc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNTAwIHRleHQtM3hsIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFdhcm5pbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEgbWwtYXV0byBiZy10cmFuc3BhcmVudCBib3JkZXItMCB0ZXh0LWJsYWNrIG9wYWNpdHktNSBmbG9hdC1yaWdodCB0ZXh0LTN4bCBsZWFkaW5nLW5vbmUgZm9udC1zZW1pYm9sZCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE92ZXJQb3B1cChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qYm9keSovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTMgbXQtNCBteS0zIHJlbGF0aXZlIHB4LTQgcHktMyBmbGV4LWF1dG8gYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgdGV4dC1zbGF0ZS01MDAgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENoYW5nZXMgY2Fubm90IGJlIGFwcGxpZWQgd2hpbGUgdGhlIHNlcnZlciBpcyBydW5uaW5nLiYjMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBEbyB5b3Ugd2FudCB0byB0dXJuIGl0IG9mZiBhbmQgc2F2ZT9cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7Lypmb290ZXIqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBwLTYgYm9yZGVyLXNvbGlkIGJvcmRlci1zbGF0ZS0yMDAgcm91bmRlZC1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwICBhY3RpdmU6YmctcmVkLTYwMCBiZy13aGl0ZSByb3VuZGVkLW1kIHNoYWRvdy1tZCBmb250LWJvbGQgdXBwZXJjYXNlIHB4LTYgcHktMyB0ZXh0LXNtIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE92ZXJQb3B1cChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1lbWVyYWxkLTUwMCB0ZXh0LXdoaXRlIGFjdGl2ZTpiZy1lbWVyYWxkLTYwMCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtc20gcHgtNiBweS0zIHJvdW5kZWQgc2hhZG93IGhvdmVyOnNoYWRvdy1sZyBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIG1yLTEgbWItMSBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrU2F2ZU92ZXIoKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBPa1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5LTUwIGZpeGVkIGluc2V0LTAgei00MCBiZy1ibGFja1wiPjwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ0ZXN0IiwiaWQiLCJuYW1lIiwic3RhdHVzIiwidmVyc2lvbiIsImN1cnAiLCJtYXhwIiwiZ2FtZW1vZGUiLCJkaWZmaWN1bHR5Iiwid2hpdGVsaXN0IiwiY3JhY2tlZCIsImZseSIsImVudGl0aWVzIiwicmVzb3VyY2VwYWNrIiwiQWxlcnRQb3B1cCIsImNsb3NlUG9wdXAiLCJvdmVyUG9wdXAiLCJzZXRPdmVyUG9wdXAiLCJjaGVja0lEIiwic2VydmVyVXAiLCJzZXJ2ZXJJbnN0YW5jZSIsImFjdGl2ZSIsImNsb3NlUG9wdXBCYWNrIiwidXBkYXRlQ2FsbGJhY2siLCJuZXdQcm9wcyIsIm9uQ2xpY2tTYXZlT3ZlciIsInVwZGF0ZUFjdGl2ZUJhY2siLCJoYW5kbGVDbGljayIsImFsZXJ0IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwidHlwZSIsIm9uQ2xpY2siLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AlertServer.tsx\n"));

/***/ })

});