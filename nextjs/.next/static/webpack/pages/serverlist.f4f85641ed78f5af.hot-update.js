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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AlertPopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/globals.css */ \"./app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst test = {\n    id: 1,\n    name: \"Vanilla\",\n    status: true,\n    version: \"1.20\",\n    curp: 0,\n    maxp: 5,\n    gamemode: 0,\n    difficulty: 2,\n    whitelist: false,\n    cracked: false,\n    fly: false,\n    entities: true,\n    resourcepack: \"\"\n};\nfunction AlertPopup(closePopup) {\n    _s();\n    const [propsPopup, setPropsPopup] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    function onClickSave() {\n        closePopup.closePopupBack(false);\n        closePopup.serverUp.updateCallback(closePopup.serverUp.serverInstance);\n    }\n    function handleClick() {\n        alert(\"You clicked me!\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"pl-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-10\",\n                type: \"button\",\n                onClick: ()=>setPropsPopup(true),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"w-4 h-4 mr-2\",\n                    fill: \"#000000\",\n                    viewBox: \"0 0 369.793 340.792\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M320.83,140.434l-1.759-0.627l-6.87-16.399l0.745-1.685c20.812-47.201,19.377-48.609,15.925-52.031L301.11,42.61 c-1.135-1.126-3.128-1.918-4.846-1.918c-1.562,0-6.293,0-47.294,18.57L247.326,60l-16.916-6.812l-0.679-1.684 C210.45,3.762,208.475,3.762,203.677,3.762h-39.205c-4.78,0-6.957,0-24.836,47.825l-0.673,1.741l-16.828,6.86l-1.609-0.669 C92.774,47.819,76.57,41.886,72.346,41.886c-1.714,0-3.714,0.769-4.854,1.892l-27.787,27.16 c-3.525,3.477-4.987,4.933,16.915,51.149l0.805,1.714l-6.881,16.381l-1.684,0.651C0,159.715,0,161.556,0,166.474v38.418 c0,4.931,0,6.979,48.957,24.524l1.75,0.618l6.882,16.333l-0.739,1.669c-20.812,47.223-19.492,48.501-15.949,52.025L68.62,327.18 c1.162,1.117,3.173,1.915,4.888,1.915c1.552,0,6.272,0,47.3-18.561l1.643-0.769l16.927,6.846l0.658,1.693 c19.293,47.726,21.275,47.726,26.076,47.726h39.217c4.924,0,6.966,0,24.859-47.857l0.667-1.742l16.855-6.814l1.604,0.654 c27.729,11.733,43.925,17.654,48.122,17.654c1.699,0,3.717-0.745,4.876-1.893l27.832-27.219 c3.501-3.495,4.96-4.924-16.981-51.096l-0.816-1.734l6.869-16.31l1.64-0.643c48.938-18.981,48.938-20.831,48.938-25.755v-38.395 C369.793,159.95,369.793,157.914,320.83,140.434z M184.896,247.203c-35.038,0-63.542-27.959-63.542-62.3 c0-34.342,28.505-62.264,63.542-62.264c35.023,0,63.522,27.928,63.522,62.264C248.419,219.238,219.92,247.203,184.896,247.203z\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            propsPopup ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-auto my-6 mx-auto max-w-3xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none {/*bg-white*/}\",\n                                style: {\n                                    backgroundImage: \"url('/assets/bg4.jpg')\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mx-3 my-3 flex items-start justify-between p-2 border-b border-solid bg-white rounded-md shadow-md border-slate-200\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-slate-500 text-3xl font-semibold\",\n                                                children: \"Another server is running!\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n                                                onClick: ()=>setPropsPopup(false)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mx-3 mt-4 my-3 relative px-4 py-3 flex-auto bg-white rounded-md shadow-md\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \" text-slate-500 text-lg leading-relaxed\",\n                                            children: \"Do you want to change the active server?\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-end p-6 border-solid border-slate-200 rounded-b\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-red-500  active:bg-red-600 bg-white rounded-md shadow-md font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>setPropsPopup(false),\n                                                children: \"Close\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>serverUpdater.updateActiveBack(0),\n                                                children: \"Ok\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"opacity-25 fixed inset-0 z-40 bg-black\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(AlertPopup, \"zjFe9kHl3/wezOU4GVoUgyUGbgk=\");\n_c = AlertPopup;\nvar _c;\n$RefreshReg$(_c, \"AlertPopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FsZXJ0U2VydmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBb0J4QyxNQUFNRSxPQUFNO0lBQUVDLElBQUk7SUFBR0MsTUFBTTtJQUFXQyxRQUFRO0lBQU1DLFNBQVM7SUFBUUMsTUFBTTtJQUFHQyxNQUFNO0lBQUdDLFVBQVU7SUFDbkZDLFlBQVk7SUFBR0MsV0FBVztJQUFPQyxTQUFTO0lBQU9DLEtBQUs7SUFBT0MsVUFBVTtJQUFNQyxjQUFjO0FBQUU7QUFFNUYsU0FBU0MsV0FBV0MsVUFBc0I7O0lBRXJELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHbEIsK0NBQVFBLENBQUM7SUFFN0MsU0FBU21CO1FBQ0hILFdBQVdJLGVBQWU7UUFDMUJKLFdBQVdLLFNBQVNDLGVBQWVOLFdBQVdLLFNBQVNFO0lBQzdEO0lBRUEsU0FBU0M7UUFDTEMsTUFBTTtJQUNWO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFDQ0MsV0FBVztnQkFDWEMsTUFBSztnQkFDTEMsU0FBUyxJQUFNWCxjQUFjOzBCQUUzQiw0RUFBQ1k7b0JBQUlILFdBQVU7b0JBQ1ZJLE1BQUs7b0JBQ0xDLFNBQVE7OEJBQ1QsNEVBQUNDO3dCQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7O1lBR2ZqQiwyQkFDQzs7a0NBQ0UsOERBQUNrQjt3QkFDQ1IsV0FBVTtrQ0FFViw0RUFBQ1E7NEJBQUlSLFdBQVU7c0NBRWIsNEVBQUNRO2dDQUFJUixXQUFVO2dDQUNmUyxPQUFPO29DQUNIQyxpQkFBa0I7Z0NBQ2xCOztrREFFRiw4REFBQ0Y7d0NBQUlSLFdBQVU7OzBEQUNiLDhEQUFDVztnREFBR1gsV0FBVTswREFBd0M7Ozs7OzswREFHdEQsOERBQUNEO2dEQUNDQyxXQUFVO2dEQUNWRSxTQUFTLElBQU1YLGNBQWM7Ozs7Ozs7Ozs7OztrREFLakMsOERBQUNpQjt3Q0FBSVIsV0FBVTtrREFDYiw0RUFBQ1k7NENBQUVaLFdBQVU7c0RBQTBDOzs7Ozs7Ozs7OztrREFLekQsOERBQUNRO3dDQUFJUixXQUFVOzswREFDYiw4REFBQ0Q7Z0RBQ0NDLFdBQVU7Z0RBQ1ZDLE1BQUs7Z0RBQ0xDLFNBQVMsSUFBTVgsY0FBYzswREFDOUI7Ozs7OzswREFHRCw4REFBQ1E7Z0RBQ0NDLFdBQVU7Z0RBQ1ZDLE1BQUs7Z0RBQ0xDLFNBQVMsSUFBTVcsY0FBY0MsaUJBQWlCOzBEQUMvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPVCw4REFBQ047d0JBQUlSLFdBQVU7Ozs7Ozs7K0JBRWY7OztBQUdWO0dBL0VzQlo7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbGVydFNlcnZlci50c3g/MTRkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0AvYXBwL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNlcnZlclVwZGF0ZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvU2VydmVyJztcclxuaW1wb3J0IHsgQ2xvc2VQb3B1cCB9IGZyb20gJ0AvY29tcG9uZW50cy9FZGl0UG9wdXAnO1xyXG5cclxudHlwZSBQcm9wZXJ0aWVzID0ge1xyXG4gICAgaWQ6IG51bWJlclxyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICBzdGF0dXM6IGJvb2xlYW4gLy9mYWxzZS1PZmZsaW5lICB0cnVlLU9ubGluZVxyXG4gICAgdmVyc2lvbjogc3RyaW5nXHJcbiAgICBjdXJwOiBudW1iZXJcclxuICAgIG1heHA6IG51bWJlclxyXG4gICAgZ2FtZW1vZGU6IG51bWJlciAvLzAtc3Vydml2YWwgIDEtQ3JlYXRpdmUgIDItQWR2ZW50dXJlICAzLVNwZWN0YXRvclxyXG4gICAgZGlmZmljdWx0eTogbnVtYmVyIC8vMC1QZWFjZWZ1bCAgMS1FYXN5ICAyLU5vcm1hbCAgMy1IYXJkXHJcbiAgICB3aGl0ZWxpc3Q6IGJvb2xlYW5cclxuICAgIGNyYWNrZWQ6IGJvb2xlYW5cclxuICAgIGZseTogYm9vbGVhblxyXG4gICAgZW50aXRpZXM6IGJvb2xlYW5cclxuICAgIHJlc291cmNlcGFjazogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IHRlc3Q9IHsgaWQ6IDEsIG5hbWU6ICdWYW5pbGxhJywgc3RhdHVzOiB0cnVlLCB2ZXJzaW9uOiAnMS4yMCcsIGN1cnA6IDAsIG1heHA6IDUsIGdhbWVtb2RlOiAwLFxyXG4gICAgICAgICAgICAgIGRpZmZpY3VsdHk6IDIsIHdoaXRlbGlzdDogZmFsc2UsIGNyYWNrZWQ6IGZhbHNlLCBmbHk6IGZhbHNlLCBlbnRpdGllczogdHJ1ZSwgcmVzb3VyY2VwYWNrOiBcIlwifVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxlcnRQb3B1cChjbG9zZVBvcHVwOiBDbG9zZVBvcHVwKSB7XHJcblxyXG4gICAgY29uc3QgW3Byb3BzUG9wdXAsIHNldFByb3BzUG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuXHJcbiAgICBmdW5jdGlvbiBvbkNsaWNrU2F2ZSgpIHtcclxuICAgICAgICAgIGNsb3NlUG9wdXAuY2xvc2VQb3B1cEJhY2soZmFsc2UpXHJcbiAgICAgICAgICBjbG9zZVBvcHVwLnNlcnZlclVwLnVwZGF0ZUNhbGxiYWNrKGNsb3NlUG9wdXAuc2VydmVyVXAuc2VydmVySW5zdGFuY2UpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XHJcbiAgICAgICAgYWxlcnQoJ1lvdSBjbGlja2VkIG1lIScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPSBcInBsLTEgcHktMSByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTBcIlxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQcm9wc1BvcHVwKHRydWUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTJcIiBcclxuICAgICAgICAgICAgICAgICBmaWxsPVwiIzAwMDAwMFwiXHJcbiAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzNjkuNzkzIDM0MC43OTJcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzIwLjgzLDE0MC40MzRsLTEuNzU5LTAuNjI3bC02Ljg3LTE2LjM5OWwwLjc0NS0xLjY4NWMyMC44MTItNDcuMjAxLDE5LjM3Ny00OC42MDksMTUuOTI1LTUyLjAzMUwzMDEuMTEsNDIuNjEgYy0xLjEzNS0xLjEyNi0zLjEyOC0xLjkxOC00Ljg0Ni0xLjkxOGMtMS41NjIsMC02LjI5MywwLTQ3LjI5NCwxOC41N0wyNDcuMzI2LDYwbC0xNi45MTYtNi44MTJsLTAuNjc5LTEuNjg0IEMyMTAuNDUsMy43NjIsMjA4LjQ3NSwzLjc2MiwyMDMuNjc3LDMuNzYyaC0zOS4yMDVjLTQuNzgsMC02Ljk1NywwLTI0LjgzNiw0Ny44MjVsLTAuNjczLDEuNzQxbC0xNi44MjgsNi44NmwtMS42MDktMC42NjkgQzkyLjc3NCw0Ny44MTksNzYuNTcsNDEuODg2LDcyLjM0Niw0MS44ODZjLTEuNzE0LDAtMy43MTQsMC43NjktNC44NTQsMS44OTJsLTI3Ljc4NywyNy4xNiBjLTMuNTI1LDMuNDc3LTQuOTg3LDQuOTMzLDE2LjkxNSw1MS4xNDlsMC44MDUsMS43MTRsLTYuODgxLDE2LjM4MWwtMS42ODQsMC42NTFDMCwxNTkuNzE1LDAsMTYxLjU1NiwwLDE2Ni40NzR2MzguNDE4IGMwLDQuOTMxLDAsNi45NzksNDguOTU3LDI0LjUyNGwxLjc1LDAuNjE4bDYuODgyLDE2LjMzM2wtMC43MzksMS42NjljLTIwLjgxMiw0Ny4yMjMtMTkuNDkyLDQ4LjUwMS0xNS45NDksNTIuMDI1TDY4LjYyLDMyNy4xOCBjMS4xNjIsMS4xMTcsMy4xNzMsMS45MTUsNC44ODgsMS45MTVjMS41NTIsMCw2LjI3MiwwLDQ3LjMtMTguNTYxbDEuNjQzLTAuNzY5bDE2LjkyNyw2Ljg0NmwwLjY1OCwxLjY5MyBjMTkuMjkzLDQ3LjcyNiwyMS4yNzUsNDcuNzI2LDI2LjA3Niw0Ny43MjZoMzkuMjE3YzQuOTI0LDAsNi45NjYsMCwyNC44NTktNDcuODU3bDAuNjY3LTEuNzQybDE2Ljg1NS02LjgxNGwxLjYwNCwwLjY1NCBjMjcuNzI5LDExLjczMyw0My45MjUsMTcuNjU0LDQ4LjEyMiwxNy42NTRjMS42OTksMCwzLjcxNy0wLjc0NSw0Ljg3Ni0xLjg5M2wyNy44MzItMjcuMjE5IGMzLjUwMS0zLjQ5NSw0Ljk2LTQuOTI0LTE2Ljk4MS01MS4wOTZsLTAuODE2LTEuNzM0bDYuODY5LTE2LjMxbDEuNjQtMC42NDNjNDguOTM4LTE4Ljk4MSw0OC45MzgtMjAuODMxLDQ4LjkzOC0yNS43NTV2LTM4LjM5NSBDMzY5Ljc5MywxNTkuOTUsMzY5Ljc5MywxNTcuOTE0LDMyMC44MywxNDAuNDM0eiBNMTg0Ljg5NiwyNDcuMjAzYy0zNS4wMzgsMC02My41NDItMjcuOTU5LTYzLjU0Mi02Mi4zIGMwLTM0LjM0MiwyOC41MDUtNjIuMjY0LDYzLjU0Mi02Mi4yNjRjMzUuMDIzLDAsNjMuNTIyLDI3LjkyOCw2My41MjIsNjIuMjY0QzI0OC40MTksMjE5LjIzOCwyMTkuOTIsMjQ3LjIwMywxODQuODk2LDI0Ny4yMDN6XCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7cHJvcHNQb3B1cCA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleCBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gZml4ZWQgaW5zZXQtMCB6LTUwIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWF1dG8gbXktNiBteC1hdXRvIG1heC13LTN4bFwiPlxyXG4gICAgICAgICAgICAgICAgey8qY29udGVudCovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMCByb3VuZGVkLWxnIHNoYWRvdy1sZyByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIHctZnVsbCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIHsvKmJnLXdoaXRlKi99XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcvYXNzZXRzL2JnNC5qcGcnKWBcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgey8qaGVhZGVyKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMyBteS0zIGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIHAtMiBib3JkZXItYiBib3JkZXItc29saWQgYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctbWQgYm9yZGVyLXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTUwMCB0ZXh0LTN4bCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBBbm90aGVyIHNlcnZlciBpcyBydW5uaW5nIVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIG1sLWF1dG8gYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgdGV4dC1ibGFjayBvcGFjaXR5LTUgZmxvYXQtcmlnaHQgdGV4dC0zeGwgbGVhZGluZy1ub25lIGZvbnQtc2VtaWJvbGQgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQcm9wc1BvcHVwKGZhbHNlKX0gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qYm9keSovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTMgbXQtNCBteS0zIHJlbGF0aXZlIHB4LTQgcHktMyBmbGV4LWF1dG8gYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgdGV4dC1zbGF0ZS01MDAgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIERvIHlvdSB3YW50IHRvIGNoYW5nZSB0aGUgYWN0aXZlIHNlcnZlcj9cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7Lypmb290ZXIqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBwLTYgYm9yZGVyLXNvbGlkIGJvcmRlci1zbGF0ZS0yMDAgcm91bmRlZC1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwICBhY3RpdmU6YmctcmVkLTYwMCBiZy13aGl0ZSByb3VuZGVkLW1kIHNoYWRvdy1tZCBmb250LWJvbGQgdXBwZXJjYXNlIHB4LTYgcHktMyB0ZXh0LXNtIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFByb3BzUG9wdXAoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZW1lcmFsZC01MDAgdGV4dC13aGl0ZSBhY3RpdmU6YmctZW1lcmFsZC02MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNtIHB4LTYgcHktMyByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VydmVyVXBkYXRlci51cGRhdGVBY3RpdmVCYWNrKDApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIE9rXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHktMjUgZml4ZWQgaW5zZXQtMCB6LTQwIGJnLWJsYWNrXCI+PC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInRlc3QiLCJpZCIsIm5hbWUiLCJzdGF0dXMiLCJ2ZXJzaW9uIiwiY3VycCIsIm1heHAiLCJnYW1lbW9kZSIsImRpZmZpY3VsdHkiLCJ3aGl0ZWxpc3QiLCJjcmFja2VkIiwiZmx5IiwiZW50aXRpZXMiLCJyZXNvdXJjZXBhY2siLCJBbGVydFBvcHVwIiwiY2xvc2VQb3B1cCIsInByb3BzUG9wdXAiLCJzZXRQcm9wc1BvcHVwIiwib25DbGlja1NhdmUiLCJjbG9zZVBvcHVwQmFjayIsInNlcnZlclVwIiwidXBkYXRlQ2FsbGJhY2siLCJzZXJ2ZXJJbnN0YW5jZSIsImhhbmRsZUNsaWNrIiwiYWxlcnQiLCJidXR0b24iLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DbGljayIsInN2ZyIsImZpbGwiLCJ2aWV3Qm94IiwicGF0aCIsImQiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImgzIiwicCIsInNlcnZlclVwZGF0ZXIiLCJ1cGRhdGVBY3RpdmVCYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AlertServer.tsx\n"));

/***/ })

});