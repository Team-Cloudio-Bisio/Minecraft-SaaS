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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AlertPopup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/globals.css */ \"./app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst test = {\n    id: 1,\n    name: \"Vanilla\",\n    status: true,\n    version: \"1.20\",\n    curp: 0,\n    maxp: 5,\n    gamemode: 0,\n    difficulty: 2,\n    whitelist: false,\n    cracked: false,\n    fly: false,\n    entities: true,\n    resourcepack: \"\"\n};\nfunction AlertPopup(closePopup) {\n    _s();\n    const [propsPopup, setPropsPopup] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [overPopup, setOverPopup] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    function onClickSave() {\n        closePopup.closePopupBack(false);\n        closePopup.serverUp.updateCallback(closePopup.serverUp.serverInstance);\n    }\n    function handleClick() {\n        alert(\"You clicked me!\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                type: \"button\",\n                onClick: onClickSave,\n                children: \"Save Changes\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this),\n            overPopup ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-auto my-6 mx-auto max-w-3xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none {/*bg-white*/}\",\n                                style: {\n                                    backgroundImage: \"url('/assets/bg4.jpg')\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mx-3 my-3 flex items-start justify-between p-2 border-b border-solid bg-white rounded-md shadow-md border-slate-200\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-slate-500 text-3xl font-semibold\",\n                                                children: \"Properties AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n                                                onClick: ()=>setOverPopup(false)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mx-3 mt-4 my-3 relative px-4 py-3 flex-auto bg-white rounded-md shadow-md\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \" text-slate-500 text-lg leading-relaxed\",\n                                            children: \"Do you want to change the active server?\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-end p-6 border-solid border-slate-200 rounded-b\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-red-500  active:bg-red-600 bg-white rounded-md shadow-md font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>setPropsPopup(false),\n                                                children: \"Close\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>onClickSave,\n                                                children: \"Ok\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"opacity-50 fixed inset-0 z-40 bg-black\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\AlertServer.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(AlertPopup, \"Xy/bAAr3NGOAq2Vu5hGYpPmzaUY=\");\n_c = AlertPopup;\nvar _c;\n$RefreshReg$(_c, \"AlertPopup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FsZXJ0U2VydmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBb0J4QyxNQUFNRSxPQUFNO0lBQUVDLElBQUk7SUFBR0MsTUFBTTtJQUFXQyxRQUFRO0lBQU1DLFNBQVM7SUFBUUMsTUFBTTtJQUFHQyxNQUFNO0lBQUdDLFVBQVU7SUFDbkZDLFlBQVk7SUFBR0MsV0FBVztJQUFPQyxTQUFTO0lBQU9DLEtBQUs7SUFBT0MsVUFBVTtJQUFNQyxjQUFjO0FBQUU7QUFFNUYsU0FBU0MsV0FBV0MsVUFBc0I7O0lBRXJELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHbEIsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDbUIsV0FBV0MsYUFBYSxHQUFHcEIsK0NBQVFBLENBQUM7SUFFM0MsU0FBU3FCO1FBQ0hMLFdBQVdNLGVBQWU7UUFDMUJOLFdBQVdPLFNBQVNDLGVBQWVSLFdBQVdPLFNBQVNFO0lBQzdEO0lBRUEsU0FBU0M7UUFDTEMsTUFBTTtJQUNWO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFDYUMsV0FBVTtnQkFDVkMsTUFBSztnQkFDTEMsU0FBU1Y7MEJBQ1Y7Ozs7OztZQUdaRiwwQkFDQzs7a0NBQ0UsOERBQUNhO3dCQUNDSCxXQUFVO2tDQUVWLDRFQUFDRzs0QkFBSUgsV0FBVTtzQ0FFYiw0RUFBQ0c7Z0NBQUlILFdBQVU7Z0NBQ2ZJLE9BQU87b0NBQ0hDLGlCQUFrQjtnQ0FDbEI7O2tEQUVGLDhEQUFDRjt3Q0FBSUgsV0FBVTs7MERBQ2IsOERBQUNNO2dEQUFHTixXQUFVOzBEQUF3Qzs7Ozs7OzBEQUl0RCw4REFBQ0Q7Z0RBQ0NDLFdBQVU7Z0RBQ1ZFLFNBQVMsSUFBTVgsYUFBYTs7Ozs7Ozs7Ozs7O2tEQUtoQyw4REFBQ1k7d0NBQUlILFdBQVU7a0RBQ2IsNEVBQUNPOzRDQUFFUCxXQUFVO3NEQUEwQzs7Ozs7Ozs7Ozs7a0RBS3pELDhEQUFDRzt3Q0FBSUgsV0FBVTs7MERBQ2IsOERBQUNEO2dEQUNDQyxXQUFVO2dEQUNWQyxNQUFLO2dEQUNMQyxTQUFTLElBQU1iLGNBQWM7MERBQzlCOzs7Ozs7MERBR0QsOERBQUNVO2dEQUNDQyxXQUFVO2dEQUNWQyxNQUFLO2dEQUNMQyxTQUFTLElBQU1WOzBEQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPVCw4REFBQ1c7d0JBQUlILFdBQVU7Ozs7Ozs7K0JBRWY7OztBQUdWO0dBN0VzQmQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BbGVydFNlcnZlci50c3g/MTRkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0AvYXBwL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNlcnZlclVwZGF0ZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvU2VydmVyJztcclxuaW1wb3J0IHsgQ2xvc2VQb3B1cCB9IGZyb20gJ0AvY29tcG9uZW50cy9FZGl0UG9wdXAnO1xyXG5cclxudHlwZSBQcm9wZXJ0aWVzID0ge1xyXG4gICAgaWQ6IG51bWJlclxyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICBzdGF0dXM6IGJvb2xlYW4gLy9mYWxzZS1PZmZsaW5lICB0cnVlLU9ubGluZVxyXG4gICAgdmVyc2lvbjogc3RyaW5nXHJcbiAgICBjdXJwOiBudW1iZXJcclxuICAgIG1heHA6IG51bWJlclxyXG4gICAgZ2FtZW1vZGU6IG51bWJlciAvLzAtc3Vydml2YWwgIDEtQ3JlYXRpdmUgIDItQWR2ZW50dXJlICAzLVNwZWN0YXRvclxyXG4gICAgZGlmZmljdWx0eTogbnVtYmVyIC8vMC1QZWFjZWZ1bCAgMS1FYXN5ICAyLU5vcm1hbCAgMy1IYXJkXHJcbiAgICB3aGl0ZWxpc3Q6IGJvb2xlYW5cclxuICAgIGNyYWNrZWQ6IGJvb2xlYW5cclxuICAgIGZseTogYm9vbGVhblxyXG4gICAgZW50aXRpZXM6IGJvb2xlYW5cclxuICAgIHJlc291cmNlcGFjazogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IHRlc3Q9IHsgaWQ6IDEsIG5hbWU6ICdWYW5pbGxhJywgc3RhdHVzOiB0cnVlLCB2ZXJzaW9uOiAnMS4yMCcsIGN1cnA6IDAsIG1heHA6IDUsIGdhbWVtb2RlOiAwLFxyXG4gICAgICAgICAgICAgIGRpZmZpY3VsdHk6IDIsIHdoaXRlbGlzdDogZmFsc2UsIGNyYWNrZWQ6IGZhbHNlLCBmbHk6IGZhbHNlLCBlbnRpdGllczogdHJ1ZSwgcmVzb3VyY2VwYWNrOiBcIlwifVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxlcnRQb3B1cChjbG9zZVBvcHVwOiBDbG9zZVBvcHVwKSB7XHJcblxyXG4gICAgY29uc3QgW3Byb3BzUG9wdXAsIHNldFByb3BzUG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuICAgIGNvbnN0IFtvdmVyUG9wdXAsIHNldE92ZXJQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb25DbGlja1NhdmUoKSB7XHJcbiAgICAgICAgICBjbG9zZVBvcHVwLmNsb3NlUG9wdXBCYWNrKGZhbHNlKVxyXG4gICAgICAgICAgY2xvc2VQb3B1cC5zZXJ2ZXJVcC51cGRhdGVDYWxsYmFjayhjbG9zZVBvcHVwLnNlcnZlclVwLnNlcnZlckluc3RhbmNlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgICAgIGFsZXJ0KCdZb3UgY2xpY2tlZCBtZSEnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWVtZXJhbGQtNTAwIHRleHQtd2hpdGUgYWN0aXZlOmJnLWVtZXJhbGQtNjAwIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1zbSBweC02IHB5LTMgcm91bmRlZCBzaGFkb3cgaG92ZXI6c2hhZG93LWxnIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tTYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTYXZlIENoYW5nZXNcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAge292ZXJQb3B1cCA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleCBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gZml4ZWQgaW5zZXQtMCB6LTUwIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWF1dG8gbXktNiBteC1hdXRvIG1heC13LTN4bFwiPlxyXG4gICAgICAgICAgICAgICAgey8qY29udGVudCovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMCByb3VuZGVkLWxnIHNoYWRvdy1sZyByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIHctZnVsbCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIHsvKmJnLXdoaXRlKi99XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcvYXNzZXRzL2JnNC5qcGcnKWBcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgey8qaGVhZGVyKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMyBteS0zIGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIHAtMiBib3JkZXItYiBib3JkZXItc29saWQgYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctbWQgYm9yZGVyLXNsYXRlLTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTUwMCB0ZXh0LTN4bCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0aWVzIFxyXG4gICAgICAgICAgQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIG1sLWF1dG8gYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgdGV4dC1ibGFjayBvcGFjaXR5LTUgZmxvYXQtcmlnaHQgdGV4dC0zeGwgbGVhZGluZy1ub25lIGZvbnQtc2VtaWJvbGQgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPdmVyUG9wdXAoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKmJvZHkqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0zIG10LTQgbXktMyByZWxhdGl2ZSBweC00IHB5LTMgZmxleC1hdXRvIGJnLXdoaXRlIHJvdW5kZWQtbWQgc2hhZG93LW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHQtc2xhdGUtNTAwIHRleHQtbGcgbGVhZGluZy1yZWxheGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEbyB5b3Ugd2FudCB0byBjaGFuZ2UgdGhlIGFjdGl2ZSBzZXJ2ZXI/XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qZm9vdGVyKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgcC02IGJvcmRlci1zb2xpZCBib3JkZXItc2xhdGUtMjAwIHJvdW5kZWQtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCAgYWN0aXZlOmJnLXJlZC02MDAgYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctbWQgZm9udC1ib2xkIHVwcGVyY2FzZSBweC02IHB5LTMgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIG1yLTEgbWItMSBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQcm9wc1BvcHVwKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWVtZXJhbGQtNTAwIHRleHQtd2hpdGUgYWN0aXZlOmJnLWVtZXJhbGQtNjAwIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1zbSBweC02IHB5LTMgcm91bmRlZCBzaGFkb3cgaG92ZXI6c2hhZG93LWxnIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tTYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIE9rXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHktNTAgZml4ZWQgaW5zZXQtMCB6LTQwIGJnLWJsYWNrXCI+PC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInRlc3QiLCJpZCIsIm5hbWUiLCJzdGF0dXMiLCJ2ZXJzaW9uIiwiY3VycCIsIm1heHAiLCJnYW1lbW9kZSIsImRpZmZpY3VsdHkiLCJ3aGl0ZWxpc3QiLCJjcmFja2VkIiwiZmx5IiwiZW50aXRpZXMiLCJyZXNvdXJjZXBhY2siLCJBbGVydFBvcHVwIiwiY2xvc2VQb3B1cCIsInByb3BzUG9wdXAiLCJzZXRQcm9wc1BvcHVwIiwib3ZlclBvcHVwIiwic2V0T3ZlclBvcHVwIiwib25DbGlja1NhdmUiLCJjbG9zZVBvcHVwQmFjayIsInNlcnZlclVwIiwidXBkYXRlQ2FsbGJhY2siLCJzZXJ2ZXJJbnN0YW5jZSIsImhhbmRsZUNsaWNrIiwiYWxlcnQiLCJidXR0b24iLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DbGljayIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaDMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AlertServer.tsx\n"));

/***/ })

});