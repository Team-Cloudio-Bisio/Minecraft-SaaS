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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AlertPopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/globals.css */ \"./app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst test = {\n    id: 1,\n    name: \"Vanilla\",\n    status: true,\n    version: \"1.20\",\n    curp: 0,\n    maxp: 5,\n    gamemode: 0,\n    difficulty: 2,\n    whitelist: false,\n    cracked: false,\n    fly: false,\n    entities: true,\n    resourcepack: \"\"\n};\nfunction AlertPopup(closePopup) {\n    _s();\n    const [propsPopup, setPropsPopup] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [overPopup, setOverPopup] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    function checkID() {\n        if (closePopup.serverUp.serverInstance.id == closePopup.serverUp.active) setOverPopup(true);\n        else closePopup.closePopupBack(false) //callback per far chiudere il primo popup (la pagina delle impostazioni)\n        ;\n        closePopup.serverUp.updateCallback(closePopup.newProps) //modifica\n        ;\n    }\n    function onClickSaveOver() {\n        setOverPopup(false);\n        closePopup.newProps.status = false;\n        closePopup.serverUp.active = 0;\n        closePopup.serverUp.updateActiveBack(0);\n        closePopup.serverUp.updateCallback(closePopup.newProps);\n    }\n    function handleClick() {\n        alert(\"You clicked me!\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                type: \"button\",\n                onClick: checkID,\n                children: \"Save Changes\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this),\n            overPopup ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-auto my-6 mx-auto max-w-3xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none {/*bg-white*/}\",\n                                style: {\n                                    backgroundImage: \"url('/assets/bg4.jpg')\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mx-3 my-3 flex items-start justify-between p-2 border-b border-solid bg-white rounded-md shadow-md border-slate-200\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-slate-500 text-3xl font-semibold\",\n                                                children: \"Properties AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n                                                onClick: ()=>setOverPopup(false)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mx-3 mt-4 my-3 relative px-4 py-3 flex-auto bg-white rounded-md shadow-md\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \" text-slate-500 text-lg leading-relaxed\",\n                                            children: \"Do you want to change the active server?\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-end p-6 border-solid border-slate-200 rounded-b\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-red-500  active:bg-red-600 bg-white rounded-md shadow-md font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>setPropsPopup(false),\n                                                children: \"Close\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>onClickSaveOver,\n                                                children: \"Ok\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"opacity-50 fixed inset-0 z-40 bg-black\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(AlertPopup, \"Xy/bAAr3NGOAq2Vu5hGYpPmzaUY=\");\n_c = AlertPopup;\nvar _c;\n$RefreshReg$(_c, \"AlertPopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FsZXJ0U2VydmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBb0J4QyxNQUFNRSxPQUFNO0lBQUVDLElBQUk7SUFBR0MsTUFBTTtJQUFXQyxRQUFRO0lBQU1DLFNBQVM7SUFBUUMsTUFBTTtJQUFHQyxNQUFNO0lBQUdDLFVBQVU7SUFDbkZDLFlBQVk7SUFBR0MsV0FBVztJQUFPQyxTQUFTO0lBQU9DLEtBQUs7SUFBT0MsVUFBVTtJQUFNQyxjQUFjO0FBQUU7QUFFNUYsU0FBU0MsV0FBV0MsVUFBc0I7O0lBRXJELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHbEIsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDbUIsV0FBV0MsYUFBYSxHQUFHcEIsK0NBQVFBLENBQUM7SUFFM0MsU0FBU3FCO1FBQ1AsSUFBSUwsV0FBV00sU0FBU0MsZUFBZXJCLE1BQU1jLFdBQVdNLFNBQVNFLFFBQzdESixhQUFhO2FBRWJKLFdBQVdTLGVBQWUsT0FBTyx5RUFBeUU7O1FBQzFHVCxXQUFXTSxTQUFTSSxlQUFlVixXQUFXVyxVQUFVLFVBQVU7O0lBQ3hFO0lBRUEsU0FBU0M7UUFDTFIsYUFBYTtRQUNiSixXQUFXVyxTQUFTdkIsU0FBUztRQUM3QlksV0FBV00sU0FBU0UsU0FBUztRQUM3QlIsV0FBV00sU0FBU08saUJBQWlCO1FBQ3JDYixXQUFXTSxTQUFTSSxlQUFlVixXQUFXVztJQUNsRDtJQUVBLFNBQVNHO1FBQ0xDLE1BQU07SUFDVjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQ0dDLFdBQVU7Z0JBQ1ZDLE1BQUs7Z0JBQ0xDLFNBQVNkOzBCQUNWOzs7Ozs7WUFHRkYsMEJBQ0M7O2tDQUNFLDhEQUFDaUI7d0JBQ0NILFdBQVU7a0NBRVYsNEVBQUNHOzRCQUFJSCxXQUFVO3NDQUViLDRFQUFDRztnQ0FBSUgsV0FBVTtnQ0FDZkksT0FBTztvQ0FDSEMsaUJBQWtCO2dDQUNsQjs7a0RBRUYsOERBQUNGO3dDQUFJSCxXQUFVOzswREFDYiw4REFBQ007Z0RBQUdOLFdBQVU7MERBQXdDOzs7Ozs7MERBSXRELDhEQUFDRDtnREFDQ0MsV0FBVTtnREFDVkUsU0FBUyxJQUFNZixhQUFhOzs7Ozs7Ozs7Ozs7a0RBS2hDLDhEQUFDZ0I7d0NBQUlILFdBQVU7a0RBQ2IsNEVBQUNPOzRDQUFFUCxXQUFVO3NEQUEwQzs7Ozs7Ozs7Ozs7a0RBS3pELDhEQUFDRzt3Q0FBSUgsV0FBVTs7MERBQ2IsOERBQUNEO2dEQUNDQyxXQUFVO2dEQUNWQyxNQUFLO2dEQUNMQyxTQUFTLElBQU1qQixjQUFjOzBEQUM5Qjs7Ozs7OzBEQUdELDhEQUFDYztnREFDQ0MsV0FBVTtnREFDVkMsTUFBSztnREFDTEMsU0FBUyxJQUFNUDswREFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBT1QsOERBQUNRO3dCQUFJSCxXQUFVOzs7Ozs7OytCQUVmOzs7QUFHVjtHQXhGc0JsQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FsZXJ0U2VydmVyLnRzeD8xNGQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9hcHAvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU2VydmVyVXBkYXRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9TZXJ2ZXInO1xyXG5pbXBvcnQgeyBDbG9zZVBvcHVwIH0gZnJvbSAnQC9jb21wb25lbnRzL0VkaXRQb3B1cCc7XHJcblxyXG50eXBlIFByb3BlcnRpZXMgPSB7XHJcbiAgICBpZDogbnVtYmVyXHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIHN0YXR1czogYm9vbGVhbiAvL2ZhbHNlLU9mZmxpbmUgIHRydWUtT25saW5lXHJcbiAgICB2ZXJzaW9uOiBzdHJpbmdcclxuICAgIGN1cnA6IG51bWJlclxyXG4gICAgbWF4cDogbnVtYmVyXHJcbiAgICBnYW1lbW9kZTogbnVtYmVyIC8vMC1zdXJ2aXZhbCAgMS1DcmVhdGl2ZSAgMi1BZHZlbnR1cmUgIDMtU3BlY3RhdG9yXHJcbiAgICBkaWZmaWN1bHR5OiBudW1iZXIgLy8wLVBlYWNlZnVsICAxLUVhc3kgIDItTm9ybWFsICAzLUhhcmRcclxuICAgIHdoaXRlbGlzdDogYm9vbGVhblxyXG4gICAgY3JhY2tlZDogYm9vbGVhblxyXG4gICAgZmx5OiBib29sZWFuXHJcbiAgICBlbnRpdGllczogYm9vbGVhblxyXG4gICAgcmVzb3VyY2VwYWNrOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgdGVzdD0geyBpZDogMSwgbmFtZTogJ1ZhbmlsbGEnLCBzdGF0dXM6IHRydWUsIHZlcnNpb246ICcxLjIwJywgY3VycDogMCwgbWF4cDogNSwgZ2FtZW1vZGU6IDAsXHJcbiAgICAgICAgICAgICAgZGlmZmljdWx0eTogMiwgd2hpdGVsaXN0OiBmYWxzZSwgY3JhY2tlZDogZmFsc2UsIGZseTogZmFsc2UsIGVudGl0aWVzOiB0cnVlLCByZXNvdXJjZXBhY2s6IFwiXCJ9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGVydFBvcHVwKGNsb3NlUG9wdXA6IENsb3NlUG9wdXApIHtcclxuXHJcbiAgICBjb25zdCBbcHJvcHNQb3B1cCwgc2V0UHJvcHNQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7IFxyXG4gICAgY29uc3QgW292ZXJQb3B1cCwgc2V0T3ZlclBvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0lEKCkgeyAvL2NvbnRyb2xsYSBzZSBpbCBydW5uaW5nIGUgaWwgc2VsZXppb25hdG8gY29pbmNpZG9ubywgc2Ugc8OsIGZhIGFwcmlyZSBpbCBudW92byBwb3B1cCAoc2V0dGEgb3ZlclBvcHVwKSwgYWx0cmltZW50aSBzaSBwcm9jZWRlIGNvbiBpbCBzYWx2YXRhZ2dpbyBkZWkgZGF0aSBub3JtYWxtZW50ZVxyXG4gICAgICBpZiAoY2xvc2VQb3B1cC5zZXJ2ZXJVcC5zZXJ2ZXJJbnN0YW5jZS5pZCA9PSBjbG9zZVBvcHVwLnNlcnZlclVwLmFjdGl2ZSkgXHJcbiAgICAgICAgICBzZXRPdmVyUG9wdXAodHJ1ZSlcclxuICAgICAgZWxzZVxyXG4gICAgICAgICAgY2xvc2VQb3B1cC5jbG9zZVBvcHVwQmFjayhmYWxzZSkgLy9jYWxsYmFjayBwZXIgZmFyIGNoaXVkZXJlIGlsIHByaW1vIHBvcHVwIChsYSBwYWdpbmEgZGVsbGUgaW1wb3N0YXppb25pKVxyXG4gICAgICAgICAgY2xvc2VQb3B1cC5zZXJ2ZXJVcC51cGRhdGVDYWxsYmFjayhjbG9zZVBvcHVwLm5ld1Byb3BzKSAvL21vZGlmaWNhXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DbGlja1NhdmVPdmVyKCkge1xyXG4gICAgICAgIHNldE92ZXJQb3B1cChmYWxzZSlcclxuICAgICAgICBjbG9zZVBvcHVwLm5ld1Byb3BzLnN0YXR1cyA9IGZhbHNlXHJcbiAgICAgICAgY2xvc2VQb3B1cC5zZXJ2ZXJVcC5hY3RpdmUgPSAwXHJcbiAgICAgICAgY2xvc2VQb3B1cC5zZXJ2ZXJVcC51cGRhdGVBY3RpdmVCYWNrKDApXHJcbiAgICAgICAgY2xvc2VQb3B1cC5zZXJ2ZXJVcC51cGRhdGVDYWxsYmFjayhjbG9zZVBvcHVwLm5ld1Byb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgICAgIGFsZXJ0KCdZb3UgY2xpY2tlZCBtZSEnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZW1lcmFsZC01MDAgdGV4dC13aGl0ZSBhY3RpdmU6YmctZW1lcmFsZC02MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNtIHB4LTYgcHktMyByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NoZWNrSUR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICBTYXZlIENoYW5nZXNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7b3ZlclBvcHVwID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4IG92ZXJmbG93LXgtaGlkZGVuIG92ZXJmbG93LXktYXV0byBmaXhlZCBpbnNldC0wIHotNTAgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctYXV0byBteS02IG14LWF1dG8gbWF4LXctM3hsXCI+XHJcbiAgICAgICAgICAgICAgICB7Lypjb250ZW50Ki99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0wIHJvdW5kZWQtbGcgc2hhZG93LWxnIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgdy1mdWxsIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgey8qYmctd2hpdGUqL31cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJy9hc3NldHMvYmc0LmpwZycpYFxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICB7LypoZWFkZXIqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0zIG15LTMgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gcC0yIGJvcmRlci1iIGJvcmRlci1zb2xpZCBiZy13aGl0ZSByb3VuZGVkLW1kIHNoYWRvdy1tZCBib3JkZXItc2xhdGUtMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNTAwIHRleHQtM3hsIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFByb3BlcnRpZXMgXHJcbiAgICAgICAgICBBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEgbWwtYXV0byBiZy10cmFuc3BhcmVudCBib3JkZXItMCB0ZXh0LWJsYWNrIG9wYWNpdHktNSBmbG9hdC1yaWdodCB0ZXh0LTN4bCBsZWFkaW5nLW5vbmUgZm9udC1zZW1pYm9sZCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE92ZXJQb3B1cChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qYm9keSovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTMgbXQtNCBteS0zIHJlbGF0aXZlIHB4LTQgcHktMyBmbGV4LWF1dG8gYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgdGV4dC1zbGF0ZS01MDAgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIERvIHlvdSB3YW50IHRvIGNoYW5nZSB0aGUgYWN0aXZlIHNlcnZlcj9cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7Lypmb290ZXIqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBwLTYgYm9yZGVyLXNvbGlkIGJvcmRlci1zbGF0ZS0yMDAgcm91bmRlZC1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwICBhY3RpdmU6YmctcmVkLTYwMCBiZy13aGl0ZSByb3VuZGVkLW1kIHNoYWRvdy1tZCBmb250LWJvbGQgdXBwZXJjYXNlIHB4LTYgcHktMyB0ZXh0LXNtIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFByb3BzUG9wdXAoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZW1lcmFsZC01MDAgdGV4dC13aGl0ZSBhY3RpdmU6YmctZW1lcmFsZC02MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNtIHB4LTYgcHktMyByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGlja1NhdmVPdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIE9rXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHktNTAgZml4ZWQgaW5zZXQtMCB6LTQwIGJnLWJsYWNrXCI+PC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInRlc3QiLCJpZCIsIm5hbWUiLCJzdGF0dXMiLCJ2ZXJzaW9uIiwiY3VycCIsIm1heHAiLCJnYW1lbW9kZSIsImRpZmZpY3VsdHkiLCJ3aGl0ZWxpc3QiLCJjcmFja2VkIiwiZmx5IiwiZW50aXRpZXMiLCJyZXNvdXJjZXBhY2siLCJBbGVydFBvcHVwIiwiY2xvc2VQb3B1cCIsInByb3BzUG9wdXAiLCJzZXRQcm9wc1BvcHVwIiwib3ZlclBvcHVwIiwic2V0T3ZlclBvcHVwIiwiY2hlY2tJRCIsInNlcnZlclVwIiwic2VydmVySW5zdGFuY2UiLCJhY3RpdmUiLCJjbG9zZVBvcHVwQmFjayIsInVwZGF0ZUNhbGxiYWNrIiwibmV3UHJvcHMiLCJvbkNsaWNrU2F2ZU92ZXIiLCJ1cGRhdGVBY3RpdmVCYWNrIiwiaGFuZGxlQ2xpY2siLCJhbGVydCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsInR5cGUiLCJvbkNsaWNrIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoMyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AlertServer.tsx\n"));

/***/ })

});