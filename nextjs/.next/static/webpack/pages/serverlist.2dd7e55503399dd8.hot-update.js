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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AlertPopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/globals.css */ \"./app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst test = {\n    id: 1,\n    name: \"Vanilla\",\n    status: true,\n    version: \"1.20\",\n    curp: 0,\n    maxp: 5,\n    gamemode: 0,\n    difficulty: 2,\n    whitelist: false,\n    cracked: false,\n    fly: false,\n    entities: true,\n    resourcepack: \"\"\n};\nfunction AlertPopup(closePopup) {\n    _s();\n    const [overPopup, setOverPopup] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    function checkActive() {\n        //se sì fa aprire il nuovo popup (setta overPopup=true), altrimenti si procede con il salvataggio dei dati normalmente\n        console.log(\"diarrea\");\n        if (closePopup.serverUp.serverInstance.id == closePopup.serverUp.active && closePopup.newProps != closePopup.serverUp.serverInstance) setOverPopup(true) //apre il popup alert\n        ;\n        else console.log(\"diarrea\");\n        closePopup.closePopupBack(false) //non c'è conflutto, callback per far chiudere il primo popup (la pagina delle impostazioni)\n        ;\n        closePopup.serverUp.updateCallback(closePopup.newProps) //modifica\n        ;\n    }\n    function onClickSaveOver() {\n        setOverPopup(false);\n        closePopup.newProps.status = false;\n        closePopup.serverUp.updateActiveBack(0);\n        closePopup.closePopupBack(false);\n        closePopup.serverUp.updateCallback(closePopup.newProps);\n    }\n    function handleClick() {\n        alert(\"You clicked me!\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                type: \"button\",\n                onClick: ()=>checkActive(),\n                children: \"Save Changes\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this),\n            overPopup ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-auto my-6 mx-auto max-w-3xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none {/*bg-white*/}\",\n                                style: {\n                                    backgroundImage: \"url('/assets/bg4.jpg')\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mx-3 my-3 flex items-start justify-between p-2 border-b border-solid bg-white rounded-md shadow-md border-slate-200\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-slate-500 text-3xl font-semibold\",\n                                            children: \"Warning\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mx-3 mt-4 my-3 relative px-4 py-3 flex-auto bg-white rounded-md shadow-md\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \" text-slate-500 text-lg leading-relaxed\",\n                                            children: [\n                                                \"Changes cannot be applied while the server is running.\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 23\n                                                }, this),\n                                                \"Do you want to turn it off and save?\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-end p-6 border-solid border-slate-200 rounded-b\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-red-500  active:bg-red-600 bg-white rounded-md shadow-md font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>setOverPopup(false),\n                                                children: \"Close\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>onClickSaveOver(),\n                                                children: \"Ok\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"opacity-50 fixed inset-0 z-40 bg-black\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(AlertPopup, \"edksnCucCQ/8XlQAALnWaLPUf+Y=\");\n_c = AlertPopup;\nvar _c;\n$RefreshReg$(_c, \"AlertPopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FsZXJ0U2VydmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBb0J4QyxNQUFNRSxPQUFNO0lBQUVDLElBQUk7SUFBR0MsTUFBTTtJQUFXQyxRQUFRO0lBQU1DLFNBQVM7SUFBUUMsTUFBTTtJQUFHQyxNQUFNO0lBQUdDLFVBQVU7SUFDbkZDLFlBQVk7SUFBR0MsV0FBVztJQUFPQyxTQUFTO0lBQU9DLEtBQUs7SUFBT0MsVUFBVTtJQUFNQyxjQUFjO0FBQUU7QUFFNUYsU0FBU0MsV0FBV0MsVUFBc0I7O0lBRXJELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHbEIsK0NBQVFBLENBQUM7SUFFM0MsU0FBU21CO1FBQ1ksc0hBQXNIO1FBRXJJQyxRQUFRQyxJQUFJO1FBQ2hCLElBQUlMLFdBQVdNLFNBQVNDLGVBQWVyQixNQUFNYyxXQUFXTSxTQUFTRSxVQUMvRFIsV0FBV1MsWUFBWVQsV0FBV00sU0FBU0MsZ0JBQ3pDTCxhQUFhLE1BQU0scUJBQXFCOzthQUV4Q0UsUUFBUUMsSUFBSTtRQUNaTCxXQUFXVSxlQUFlLE9BQU8sNEZBQTRGOztRQUM3SFYsV0FBV00sU0FBU0ssZUFBZVgsV0FBV1MsVUFBVSxVQUFVOztJQUN4RTtJQUVBLFNBQVNHO1FBQ0xWLGFBQWE7UUFDYkYsV0FBV1MsU0FBU3JCLFNBQVM7UUFDN0JZLFdBQVdNLFNBQVNPLGlCQUFpQjtRQUNyQ2IsV0FBV1UsZUFBZTtRQUMxQlYsV0FBV00sU0FBU0ssZUFBZVgsV0FBV1M7SUFDbEQ7SUFFQSxTQUFTSztRQUNMQyxNQUFNO0lBQ1Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUNHQyxXQUFVO2dCQUNWQyxNQUFLO2dCQUNMQyxTQUFTLElBQU1oQjswQkFDaEI7Ozs7OztZQUdGRiwwQkFDQzs7a0NBQ0UsOERBQUNtQjt3QkFDQ0gsV0FBVTtrQ0FFViw0RUFBQ0c7NEJBQUlILFdBQVU7c0NBRWIsNEVBQUNHO2dDQUFJSCxXQUFVO2dDQUNmSSxPQUFPO29DQUNIQyxpQkFBa0I7Z0NBQ2xCOztrREFFRiw4REFBQ0Y7d0NBQUlILFdBQVU7a0RBQ2IsNEVBQUNNOzRDQUFHTixXQUFVO3NEQUF3Qzs7Ozs7Ozs7Ozs7a0RBS3hELDhEQUFDRzt3Q0FBSUgsV0FBVTtrREFDYiw0RUFBQ087NENBQUVQLFdBQVU7O2dEQUEwQzs4REFFckQsOERBQUNROzs7OztnREFBSTs7Ozs7Ozs7Ozs7O2tEQUtULDhEQUFDTDt3Q0FBSUgsV0FBVTs7MERBQ2IsOERBQUNEO2dEQUNDQyxXQUFVO2dEQUNWQyxNQUFLO2dEQUNMQyxTQUFTLElBQU1qQixhQUFhOzBEQUM3Qjs7Ozs7OzBEQUdELDhEQUFDYztnREFDQ0MsV0FBVTtnREFDVkMsTUFBSztnREFDTEMsU0FBUyxJQUFNUDswREFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBT1QsOERBQUNRO3dCQUFJSCxXQUFVOzs7Ozs7OytCQUVmOzs7QUFHVjtHQXhGc0JsQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FsZXJ0U2VydmVyLnRzeD8xNGQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9hcHAvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU2VydmVyVXBkYXRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9TZXJ2ZXInO1xyXG5pbXBvcnQgeyBDbG9zZVBvcHVwIH0gZnJvbSAnQC9jb21wb25lbnRzL0VkaXRQb3B1cCc7XHJcblxyXG50eXBlIFByb3BlcnRpZXMgPSB7XHJcbiAgICBpZDogbnVtYmVyXHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIHN0YXR1czogYm9vbGVhbiAvL2ZhbHNlLU9mZmxpbmUgIHRydWUtT25saW5lXHJcbiAgICB2ZXJzaW9uOiBzdHJpbmdcclxuICAgIGN1cnA6IG51bWJlclxyXG4gICAgbWF4cDogbnVtYmVyXHJcbiAgICBnYW1lbW9kZTogbnVtYmVyIC8vMC1zdXJ2aXZhbCAgMS1DcmVhdGl2ZSAgMi1BZHZlbnR1cmUgIDMtU3BlY3RhdG9yXHJcbiAgICBkaWZmaWN1bHR5OiBudW1iZXIgLy8wLVBlYWNlZnVsICAxLUVhc3kgIDItTm9ybWFsICAzLUhhcmRcclxuICAgIHdoaXRlbGlzdDogYm9vbGVhblxyXG4gICAgY3JhY2tlZDogYm9vbGVhblxyXG4gICAgZmx5OiBib29sZWFuXHJcbiAgICBlbnRpdGllczogYm9vbGVhblxyXG4gICAgcmVzb3VyY2VwYWNrOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgdGVzdD0geyBpZDogMSwgbmFtZTogJ1ZhbmlsbGEnLCBzdGF0dXM6IHRydWUsIHZlcnNpb246ICcxLjIwJywgY3VycDogMCwgbWF4cDogNSwgZ2FtZW1vZGU6IDAsXHJcbiAgICAgICAgICAgICAgZGlmZmljdWx0eTogMiwgd2hpdGVsaXN0OiBmYWxzZSwgY3JhY2tlZDogZmFsc2UsIGZseTogZmFsc2UsIGVudGl0aWVzOiB0cnVlLCByZXNvdXJjZXBhY2s6IFwiXCJ9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGVydFBvcHVwKGNsb3NlUG9wdXA6IENsb3NlUG9wdXApIHtcclxuXHJcbiAgICBjb25zdCBbb3ZlclBvcHVwLCBzZXRPdmVyUG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrQWN0aXZlKCkgeyAvL2NvbnRyb2xsYSBzZSBpbCBzZXJ2ZXIgcnVubmluZyBlIHF1ZWxsbyB2aXN1YWxpenphdG8gY29pbmNpZG9ubyBFIHNlIGxlIG51b3ZlIGltcG9zdGF6aW9uaSBkaWZmZXJpc2Nvbm8gZGFsbGUgcHJlY2VkZW50aSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2Ugc8OsIGZhIGFwcmlyZSBpbCBudW92byBwb3B1cCAoc2V0dGEgb3ZlclBvcHVwPXRydWUpLCBhbHRyaW1lbnRpIHNpIHByb2NlZGUgY29uIGlsIHNhbHZhdGFnZ2lvIGRlaSBkYXRpIG5vcm1hbG1lbnRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdkaWFycmVhJylcclxuICAgICAgaWYgKGNsb3NlUG9wdXAuc2VydmVyVXAuc2VydmVySW5zdGFuY2UuaWQgPT0gY2xvc2VQb3B1cC5zZXJ2ZXJVcC5hY3RpdmUgJiZcclxuICAgICAgICBjbG9zZVBvcHVwLm5ld1Byb3BzICE9IGNsb3NlUG9wdXAuc2VydmVyVXAuc2VydmVySW5zdGFuY2UpIFxyXG4gICAgICAgICAgc2V0T3ZlclBvcHVwKHRydWUpIC8vYXByZSBpbCBwb3B1cCBhbGVydFxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGlhcnJlYScpXHJcbiAgICAgICAgICBjbG9zZVBvcHVwLmNsb3NlUG9wdXBCYWNrKGZhbHNlKSAvL25vbiBjJ8OoIGNvbmZsdXR0bywgY2FsbGJhY2sgcGVyIGZhciBjaGl1ZGVyZSBpbCBwcmltbyBwb3B1cCAobGEgcGFnaW5hIGRlbGxlIGltcG9zdGF6aW9uaSlcclxuICAgICAgICAgIGNsb3NlUG9wdXAuc2VydmVyVXAudXBkYXRlQ2FsbGJhY2soY2xvc2VQb3B1cC5uZXdQcm9wcykgLy9tb2RpZmljYVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2xpY2tTYXZlT3ZlcigpIHsgLy9QTFVTQU5URSBcIlNBVkVcIiBkZWwgcG9wdXAgc3VwZXJpb3JlXHJcbiAgICAgICAgc2V0T3ZlclBvcHVwKGZhbHNlKVxyXG4gICAgICAgIGNsb3NlUG9wdXAubmV3UHJvcHMuc3RhdHVzID0gZmFsc2VcclxuICAgICAgICBjbG9zZVBvcHVwLnNlcnZlclVwLnVwZGF0ZUFjdGl2ZUJhY2soMClcclxuICAgICAgICBjbG9zZVBvcHVwLmNsb3NlUG9wdXBCYWNrKGZhbHNlKVxyXG4gICAgICAgIGNsb3NlUG9wdXAuc2VydmVyVXAudXBkYXRlQ2FsbGJhY2soY2xvc2VQb3B1cC5uZXdQcm9wcylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICBhbGVydCgnWW91IGNsaWNrZWQgbWUhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWVtZXJhbGQtNTAwIHRleHQtd2hpdGUgYWN0aXZlOmJnLWVtZXJhbGQtNjAwIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1zbSBweC02IHB5LTMgcm91bmRlZCBzaGFkb3cgaG92ZXI6c2hhZG93LWxnIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGVja0FjdGl2ZSgpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgU2F2ZSBDaGFuZ2VzXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAge292ZXJQb3B1cCA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleCBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gZml4ZWQgaW5zZXQtMCB6LTUwIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWF1dG8gbXktNiBteC1hdXRvIG1heC13LTN4bFwiPlxyXG4gICAgICAgICAgICAgICAgey8qY29udGVudCovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMCByb3VuZGVkLWxnIHNoYWRvdy1sZyByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIHctZnVsbCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIHsvKmJnLXdoaXRlKi99XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcvYXNzZXRzL2JnNC5qcGcnKWBcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgey8qaGVhZGVyKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMyBteS0zIGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIHAtMiBib3JkZXItYiBib3JkZXItc29saWQgYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctbWQgYm9yZGVyLXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTUwMCB0ZXh0LTN4bCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBXYXJuaW5nIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7Lypib2R5Ki99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMyBtdC00IG15LTMgcmVsYXRpdmUgcHgtNCBweS0zIGZsZXgtYXV0byBiZy13aGl0ZSByb3VuZGVkLW1kIHNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiB0ZXh0LXNsYXRlLTUwMCB0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2hhbmdlcyBjYW5ub3QgYmUgYXBwbGllZCB3aGlsZSB0aGUgc2VydmVyIGlzIHJ1bm5pbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRG8geW91IHdhbnQgdG8gdHVybiBpdCBvZmYgYW5kIHNhdmU/XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qZm9vdGVyKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgcC02IGJvcmRlci1zb2xpZCBib3JkZXItc2xhdGUtMjAwIHJvdW5kZWQtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCAgYWN0aXZlOmJnLXJlZC02MDAgYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctbWQgZm9udC1ib2xkIHVwcGVyY2FzZSBweC02IHB5LTMgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIG1yLTEgbWItMSBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPdmVyUG9wdXAoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZW1lcmFsZC01MDAgdGV4dC13aGl0ZSBhY3RpdmU6YmctZW1lcmFsZC02MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNtIHB4LTYgcHktMyByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGlja1NhdmVPdmVyKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgT2tcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eS01MCBmaXhlZCBpbnNldC0wIHotNDAgYmctYmxhY2tcIj48L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidGVzdCIsImlkIiwibmFtZSIsInN0YXR1cyIsInZlcnNpb24iLCJjdXJwIiwibWF4cCIsImdhbWVtb2RlIiwiZGlmZmljdWx0eSIsIndoaXRlbGlzdCIsImNyYWNrZWQiLCJmbHkiLCJlbnRpdGllcyIsInJlc291cmNlcGFjayIsIkFsZXJ0UG9wdXAiLCJjbG9zZVBvcHVwIiwib3ZlclBvcHVwIiwic2V0T3ZlclBvcHVwIiwiY2hlY2tBY3RpdmUiLCJjb25zb2xlIiwibG9nIiwic2VydmVyVXAiLCJzZXJ2ZXJJbnN0YW5jZSIsImFjdGl2ZSIsIm5ld1Byb3BzIiwiY2xvc2VQb3B1cEJhY2siLCJ1cGRhdGVDYWxsYmFjayIsIm9uQ2xpY2tTYXZlT3ZlciIsInVwZGF0ZUFjdGl2ZUJhY2siLCJoYW5kbGVDbGljayIsImFsZXJ0IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwidHlwZSIsIm9uQ2xpY2siLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImgzIiwicCIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AlertServer.tsx\n"));

/***/ })

});