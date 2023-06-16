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

/***/ "./components/Server.tsx":
/*!*******************************!*\
  !*** ./components/Server.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Server; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/globals.css */ \"./app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_EditPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/EditPopup */ \"./components/EditPopup.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst initState = [\n    {\n        id: 1,\n        name: \"Vanilla\",\n        ip: \"Vanilla\",\n        status: true,\n        version: \"1.20\",\n        curp: 0,\n        maxp: 5,\n        gamemode: 0,\n        difficulty: 2,\n        whitelist: false,\n        cracked: false,\n        fly: false,\n        resourcepack: \"\"\n    },\n    {\n        id: 2,\n        name: \"Modded\",\n        ip: \"Modded\",\n        status: false,\n        version: \"1.20\",\n        curp: 0,\n        maxp: 5,\n        gamemode: 0,\n        difficulty: 2,\n        whitelist: false,\n        cracked: false,\n        fly: false,\n        resourcepack: \"\"\n    }\n];\nvar serverCount = Object.keys(initState).length;\nvar maxIndex = Object.keys(initState).length;\nvar selected = 0;\nfunction Server() {\n    _s();\n    const [servers, setServers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initState); //primo el: stato, secondo el: funzione per aggiornarlo\n    const curServer = initState[1];\n    function update(props) {\n        setServers((s)=>{\n            return s.map((server)=>{\n                if (server.id === props.id) {\n                    return {\n                        ...server,\n                        ...props\n                    };\n                }\n                return server;\n            });\n        });\n    /* quello che fin'ora funziona meglio\r\n        setServers(servers.filter((s) => s.id !== props.id));\r\n        const newServer = { id: props.id, name: props.name, status: props.status, version: props.version, curp: props.curp, maxp: 5, gamemode: 0,\r\n        difficulty: 2, whitelist: false, cracked: false, fly: false, resourcepack: \"\" }\r\n        setServers(s => [...s, newServer])\r\n        */ //servers.filter(s => s.id == props.id)\n    /*curServer.id = props.id\r\n        curServer.name = props.name\r\n        curServer.status = props.status\r\n        curServer.version = props.version*/ }\n    /* useEffect con GET dal DB\r\n    useEffect(() => {\r\n        fetch('https://jsonplaceholder.typicode.com/users')\r\n        .then(res => res.json())\r\n        .then(res => setUsers(res))\r\n        console.log('load data here')\r\n      }, []) //secondo parametro: dipendenze (se vuoto, questo useEffect è chiamato solo quando il componente viene montato, poi basta)\r\n    */ function removeServer(id) {\n        serverCount--;\n        setServers(servers.filter((s)=>s.id !== id));\n    }\n    function addServer() {\n        serverCount++;\n        maxIndex++;\n        const newServer = {\n            id: maxIndex,\n            name: \"server\" + maxIndex,\n            ip: \"server\" + maxIndex,\n            status: false,\n            version: \"1.20\",\n            curp: 0,\n            maxp: 5,\n            gamemode: 0,\n            difficulty: 2,\n            whitelist: false,\n            cracked: false,\n            fly: false,\n            resourcepack: \"\"\n        };\n        setServers((s)=>[\n                ...s,\n                newServer\n            ]);\n    // aggiorna stato con POST (aggiunge l'utente aggiornando la lista sul DB)\n    /*\r\n        fetch('https://jsonplaceholder.typicode.com/users', {\r\n        headers: {\r\n          \"Content-Type\": \"application/json\",\r\n        },\r\n        method: 'POST',\r\n        body: JSON.stringify({ name: `user ${Math.random()}`})    \r\n        })\r\n        .then(res => res.json())\r\n        .then(res => setUsers(s => [...s, res]))\r\n      */ // versione in locale\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-96 mx-3 px-3 py-2 bg-white rounded-md shadow-md \",\n                style: {\n                    backgroundImage: \"url('/assets/bg3.jpg')\",\n                    height: \"700px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                        className: \"grid grid-cols-6 gap-20 mx-3 mt-3 px-3 py-2 bg-white rounded-md shadow-md\",\n                        children: [\n                            \"Name\",\n                            \"     \",\n                            \"Status\",\n                            \"   \",\n                            \"Version\",\n                            \"      \",\n                            \"\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 17\n                    }, this),\n                    servers.map((server)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                            className: \"grid grid-cols-6 gap-20 mx-3 mt-3 px-3 py-2 bg-white rounded-md shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\",\n                                    children: server.name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 41\n                                }, this),\n                                server.status ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\",\n                                    style: {\n                                        color: \"green\"\n                                    },\n                                    children: \"Online\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 37\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\",\n                                    style: {\n                                        color: \"red\"\n                                    },\n                                    children: \"Offline\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                                    lineNumber: 127,\n                                    columnNumber: 37\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\",\n                                    children: server.version\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 37\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EditPopup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            serverInstance: server,\n                                            updateCallback: update\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                                            lineNumber: 135,\n                                            columnNumber: 41\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"pl-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-10\",\n                                            onClick: ()=>removeServer(server.id),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                className: \"w-4 h-4 mr-2\",\n                                                viewBox: \"0 0 17 15\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    d: \"M4.91666667,14.8888889 C4.91666667,15.3571429 5.60416667,16 6.0625,16 L12.9375,16 C13.3958333,16 14.0833333,15.3571429 14.0833333,14.8888889 L14.0833333,6 L4.91666667,6 L4.91666667,14.8888889 L4.91666667,14.8888889 L4.91666667,14.8888889 Z M15,3.46500003 L12.5555556,3.46500003 L11.3333333,2 L7.66666667,2 L6.44444444,3.46500003 L4,3.46500003 L4,4.93000007 L15,4.93000007 L15,3.46500003 L15,3.46500003 L15,3.46500003 Z\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                                                    lineNumber: 140,\n                                                    columnNumber: 49\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                                                lineNumber: 138,\n                                                columnNumber: 45\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                                            lineNumber: 136,\n                                            columnNumber: 41\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                                    lineNumber: 134,\n                                    columnNumber: 37\n                                }, this)\n                            ]\n                        }, server.id, true, {\n                            fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 32\n                        }, this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mx-3 mt-3 px-3 py-2 bg-white rounded-md shadow-md\",\n                        onClick: addServer,\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                        lineNumber: 146,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                lineNumber: 106,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center ml-20 mt-3 px-3 py-2 bg-white rounded-md shadow-md\",\n                style: {\n                    backgroundImage: \"url('/assets/bg2.png')\",\n                    height: \"500px\",\n                    width: \"1000px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"self-start mx-50 px-2 bg-white rounded-md shadow-md\",\n                    children: \"Active server\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                    lineNumber: 155,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                lineNumber: 149,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n        lineNumber: 105,\n        columnNumber: 9\n    }, this);\n}\n_s(Server, \"EQbch9L/b6tthclpTr0HIHmPvTQ=\");\n_c = Server;\nvar _c;\n$RefreshReg$(_c, \"Server\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlcnZlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ2xCO0FBQ3NCO0FBbUJoRCxNQUFNRSxZQUFvQztJQUN0QztRQUFFQyxJQUFJO1FBQUdDLE1BQU07UUFBV0MsSUFBSTtRQUFXQyxRQUFRO1FBQU1DLFNBQVM7UUFBUUMsTUFBTTtRQUFHQyxNQUFNO1FBQUdDLFVBQVU7UUFDcEdDLFlBQVk7UUFBR0MsV0FBVztRQUFPQyxTQUFTO1FBQU9DLEtBQUs7UUFBT0MsY0FBYztJQUFFO0lBQzdFO1FBQUVaLElBQUk7UUFBR0MsTUFBTTtRQUFVQyxJQUFJO1FBQVVDLFFBQVE7UUFBT0MsU0FBUztRQUFRQyxNQUFNO1FBQUdDLE1BQU07UUFBR0MsVUFBVTtRQUNuR0MsWUFBWTtRQUFHQyxXQUFXO1FBQU9DLFNBQVM7UUFBT0MsS0FBSztRQUFPQyxjQUFjO0lBQUU7Q0FDOUU7QUFPSCxJQUFJQyxjQUFjQyxPQUFPQyxLQUFLaEIsV0FBV2lCO0FBQ3pDLElBQUlDLFdBQVdILE9BQU9DLEtBQUtoQixXQUFXaUI7QUFDdEMsSUFBSUUsV0FBVztBQUVBLFNBQVNDOztJQUNwQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR3hCLCtDQUFRQSxDQUFDRSxZQUFZLHVEQUF1RDtJQUUxRyxNQUFNdUIsWUFBOEJ2QixTQUFTLENBQUMsRUFBRTtJQUVoRCxTQUFTd0IsT0FBT0MsS0FBdUI7UUFFbkNILFdBQVdJLENBQUFBO1lBQ1AsT0FBT0EsRUFBRUMsSUFBSUMsQ0FBQUE7Z0JBQ1QsSUFBSUEsT0FBTzNCLE9BQU93QixNQUFNeEIsSUFBSTtvQkFDeEIsT0FBTzt3QkFBQyxHQUFHMkIsTUFBTTt3QkFBQyxHQUFHSCxLQUFLO29CQUFBO2dCQUM5QjtnQkFDQSxPQUFPRztZQUNYO1FBQ0o7SUFFQTs7Ozs7UUFLQSxHQUVBLHVDQUF1QztJQUN2Qzs7O3lDQUdpQyxHQUNyQztJQUVBOzs7Ozs7O0lBT0EsR0FDQSxTQUFTQyxhQUFhNUIsRUFBVTtRQUM1QmE7UUFDQVEsV0FBV0QsUUFBUVMsT0FBTyxDQUFDSixJQUFNQSxFQUFFekIsT0FBT0E7SUFDOUM7SUFFQSxTQUFTOEI7UUFDTGpCO1FBQ0FJO1FBQ0EsTUFBTWMsWUFBWTtZQUFFL0IsSUFBSWlCO1lBQVVoQixNQUFNLFdBQVNnQjtZQUFVZixJQUFJLFdBQVNlO1lBQVVkLFFBQVE7WUFBT0MsU0FBUztZQUFRQyxNQUFNO1lBQUdDLE1BQU07WUFBR0MsVUFBVTtZQUM5SUMsWUFBWTtZQUFHQyxXQUFXO1lBQU9DLFNBQVM7WUFBT0MsS0FBSztZQUFPQyxjQUFjO1FBQUc7UUFDOUVTLFdBQVdJLENBQUFBLElBQUs7bUJBQUlBO2dCQUFHTTthQUFVO0lBRW5DLDBFQUEwRTtJQUMxRTs7Ozs7Ozs7OztNQVVBLEdBRUEscUJBQXFCO0lBQ3ZCO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFDR0MsV0FBVTtnQkFDVkMsT0FBTztvQkFDUEMsaUJBQWtCO29CQUNsQkMsUUFBUTtnQkFDUjs7a0NBQ0EsOERBQUNDO3dCQUFJSixXQUFVOzs0QkFDVjs0QkFBTzs0QkFBc0I7NEJBQVM7NEJBQVk7NEJBQVU7NEJBQU87Ozs7Ozs7b0JBRXZFYixRQUFRTSxJQUFJQyxDQUFBQTt3QkFDTCxxQkFBTyw4REFBQ1U7NEJBQUlKLFdBQVU7OzhDQUVOLDhEQUFDSztvQ0FBS0wsV0FBVTs4Q0FDWE4sT0FBTzFCOzs7Ozs7Z0NBRVAwQixPQUFPeEIsdUJBQ2hCLDhEQUFDbUM7b0NBQUtMLFdBQVU7b0NBQ1ZDLE9BQU87d0NBQUVLLE9BQU87b0NBQVE7OENBQ3pCOzs7Ozt5REFHTCw4REFBQ0Q7b0NBQUtMLFdBQVU7b0NBQ1ZDLE9BQU87d0NBQUVLLE9BQU87b0NBQU07OENBQ3ZCOzs7Ozs7OENBRUwsOERBQUNEO29DQUFLTCxXQUFVOzhDQUNYTixPQUFPdkI7Ozs7Ozs4Q0FFWiw4REFBQ2tDO29DQUFLTCxXQUFVOztzREFDWiw4REFBQ25DLDZEQUFXQTs0Q0FBQzBDLGdCQUFnQmI7NENBQVFjLGdCQUFnQmxCOzs7Ozs7c0RBQ3JELDhEQUFDbUI7NENBQU9ULFdBQVU7NENBQ1ZVLFNBQVMsSUFBTWYsYUFBYUQsT0FBTzNCO3NEQUN2Qyw0RUFBQzRDO2dEQUFJWCxXQUFVO2dEQUNYWSxTQUFROzBEQUNSLDRFQUFDQztvREFBS0MsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBdkJmcEIsT0FBTzNCOzs7OztvQkE0QmhDO2tDQUNBLDhEQUFDMEM7d0JBQU9ULFdBQVU7d0JBQ1ZVLFNBQVNiO2tDQUFXOzs7Ozs7Ozs7Ozs7MEJBRWhDLDhEQUFDRTtnQkFBSUMsV0FBVTtnQkFDVkMsT0FBTztvQkFDUEMsaUJBQWtCO29CQUNsQkMsUUFBUTtvQkFDUlksT0FBTztnQkFDUDswQkFDRCw0RUFBQ2hCO29CQUFJQyxXQUFVOzhCQUFzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakY7R0EzSG9CZDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlcnZlci50c3g/ZThjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ0AvYXBwL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgUG9wdXBCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL0VkaXRQb3B1cCdcclxuXHJcblxyXG5leHBvcnQgdHlwZSBTZXJ2ZXJQcm9wZXJ0aWVzID0ge1xyXG4gICAgaWQ6IG51bWJlclxyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICBpcDogc3RyaW5nXHJcbiAgICBzdGF0dXM6IGJvb2xlYW4gLy9mYWxzZS1PZmZsaW5lICB0cnVlLU9ubGluZVxyXG4gICAgdmVyc2lvbjogc3RyaW5nXHJcbiAgICBjdXJwOiBudW1iZXJcclxuICAgIG1heHA6IG51bWJlclxyXG4gICAgZ2FtZW1vZGU6IG51bWJlciAvLzAtc3Vydml2YWwgIDEtQ3JlYXRpdmUgIDItQWR2ZW50dXJlICAzLVNwZWN0YXRvclxyXG4gICAgZGlmZmljdWx0eTogbnVtYmVyIC8vMC1QZWFjZWZ1bCAgMS1FYXN5ICAyLU5vcm1hbCAgMy1IYXJkXHJcbiAgICB3aGl0ZWxpc3Q6IGJvb2xlYW5cclxuICAgIGNyYWNrZWQ6IGJvb2xlYW5cclxuICAgIGZseTogYm9vbGVhblxyXG4gICAgcmVzb3VyY2VwYWNrOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgaW5pdFN0YXRlOiBBcnJheTxTZXJ2ZXJQcm9wZXJ0aWVzPj0gW1xyXG4gICAgeyBpZDogMSwgbmFtZTogJ1ZhbmlsbGEnLCBpcDogJ1ZhbmlsbGEnLCBzdGF0dXM6IHRydWUsIHZlcnNpb246ICcxLjIwJywgY3VycDogMCwgbWF4cDogNSwgZ2FtZW1vZGU6IDAsXHJcbiAgICBkaWZmaWN1bHR5OiAyLCB3aGl0ZWxpc3Q6IGZhbHNlLCBjcmFja2VkOiBmYWxzZSwgZmx5OiBmYWxzZSwgcmVzb3VyY2VwYWNrOiBcIlwifSxcclxuICAgIHsgaWQ6IDIsIG5hbWU6ICdNb2RkZWQnLCBpcDogJ01vZGRlZCcsIHN0YXR1czogZmFsc2UsIHZlcnNpb246ICcxLjIwJywgY3VycDogMCwgbWF4cDogNSwgZ2FtZW1vZGU6IDAsXHJcbiAgICBkaWZmaWN1bHR5OiAyLCB3aGl0ZWxpc3Q6IGZhbHNlLCBjcmFja2VkOiBmYWxzZSwgZmx5OiBmYWxzZSwgcmVzb3VyY2VwYWNrOiBcIlwifSxcclxuICBdO1xyXG5cclxuZXhwb3J0IHR5cGUgQ3VsbyA9IHtcclxuICAgIHNlcnZlckluc3RhbmNlOiBTZXJ2ZXJQcm9wZXJ0aWVzXHJcbiAgICB1cGRhdGVDYWxsYmFjazogKHByb3BzOiBTZXJ2ZXJQcm9wZXJ0aWVzKSA9PiB2b2lkXHJcbn1cclxuICBcclxudmFyIHNlcnZlckNvdW50ID0gT2JqZWN0LmtleXMoaW5pdFN0YXRlKS5sZW5ndGhcclxudmFyIG1heEluZGV4ID0gT2JqZWN0LmtleXMoaW5pdFN0YXRlKS5sZW5ndGhcclxudmFyIHNlbGVjdGVkID0gMFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmVyKCkge1xyXG4gICAgY29uc3QgW3NlcnZlcnMsIHNldFNlcnZlcnNdID0gdXNlU3RhdGUoaW5pdFN0YXRlKTsgLy9wcmltbyBlbDogc3RhdG8sIHNlY29uZG8gZWw6IGZ1bnppb25lIHBlciBhZ2dpb3JuYXJsb1xyXG5cclxuICAgIGNvbnN0IGN1clNlcnZlcjogU2VydmVyUHJvcGVydGllcyA9IGluaXRTdGF0ZVsxXVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZShwcm9wczogU2VydmVyUHJvcGVydGllcykgeyAvL2RhIHBhc3NhcmUgYWwgcG9wdXBcclxuICAgICAgICBcclxuICAgICAgICBzZXRTZXJ2ZXJzKHMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcy5tYXAoc2VydmVyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzZXJ2ZXIuaWQgPT09IHByb3BzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zZXJ2ZXIsLi4ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VydmVyXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLyogcXVlbGxvIGNoZSBmaW4nb3JhIGZ1bnppb25hIG1lZ2xpb1xyXG4gICAgICAgIHNldFNlcnZlcnMoc2VydmVycy5maWx0ZXIoKHMpID0+IHMuaWQgIT09IHByb3BzLmlkKSk7XHJcbiAgICAgICAgY29uc3QgbmV3U2VydmVyID0geyBpZDogcHJvcHMuaWQsIG5hbWU6IHByb3BzLm5hbWUsIHN0YXR1czogcHJvcHMuc3RhdHVzLCB2ZXJzaW9uOiBwcm9wcy52ZXJzaW9uLCBjdXJwOiBwcm9wcy5jdXJwLCBtYXhwOiA1LCBnYW1lbW9kZTogMCxcclxuICAgICAgICBkaWZmaWN1bHR5OiAyLCB3aGl0ZWxpc3Q6IGZhbHNlLCBjcmFja2VkOiBmYWxzZSwgZmx5OiBmYWxzZSwgcmVzb3VyY2VwYWNrOiBcIlwiIH1cclxuICAgICAgICBzZXRTZXJ2ZXJzKHMgPT4gWy4uLnMsIG5ld1NlcnZlcl0pXHJcbiAgICAgICAgKi9cclxuICAgICAgICBcclxuICAgICAgICAvL3NlcnZlcnMuZmlsdGVyKHMgPT4gcy5pZCA9PSBwcm9wcy5pZClcclxuICAgICAgICAvKmN1clNlcnZlci5pZCA9IHByb3BzLmlkXHJcbiAgICAgICAgY3VyU2VydmVyLm5hbWUgPSBwcm9wcy5uYW1lXHJcbiAgICAgICAgY3VyU2VydmVyLnN0YXR1cyA9IHByb3BzLnN0YXR1c1xyXG4gICAgICAgIGN1clNlcnZlci52ZXJzaW9uID0gcHJvcHMudmVyc2lvbiovXHJcbiAgICB9XHJcblxyXG4gICAgLyogdXNlRWZmZWN0IGNvbiBHRVQgZGFsIERCXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiBzZXRVc2VycyhyZXMpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2FkIGRhdGEgaGVyZScpXHJcbiAgICAgIH0sIFtdKSAvL3NlY29uZG8gcGFyYW1ldHJvOiBkaXBlbmRlbnplIChzZSB2dW90bywgcXVlc3RvIHVzZUVmZmVjdCDDqCBjaGlhbWF0byBzb2xvIHF1YW5kbyBpbCBjb21wb25lbnRlIHZpZW5lIG1vbnRhdG8sIHBvaSBiYXN0YSlcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiByZW1vdmVTZXJ2ZXIoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHNlcnZlckNvdW50LS1cclxuICAgICAgICBzZXRTZXJ2ZXJzKHNlcnZlcnMuZmlsdGVyKChzKSA9PiBzLmlkICE9PSBpZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFNlcnZlcigpIHtcclxuICAgICAgICBzZXJ2ZXJDb3VudCsrXHJcbiAgICAgICAgbWF4SW5kZXgrK1xyXG4gICAgICAgIGNvbnN0IG5ld1NlcnZlciA9IHsgaWQ6IG1heEluZGV4LCBuYW1lOiBcInNlcnZlclwiK21heEluZGV4LCBpcDogXCJzZXJ2ZXJcIittYXhJbmRleCwgc3RhdHVzOiBmYWxzZSwgdmVyc2lvbjogJzEuMjAnLCBjdXJwOiAwLCBtYXhwOiA1LCBnYW1lbW9kZTogMCxcclxuICAgICAgICBkaWZmaWN1bHR5OiAyLCB3aGl0ZWxpc3Q6IGZhbHNlLCBjcmFja2VkOiBmYWxzZSwgZmx5OiBmYWxzZSwgcmVzb3VyY2VwYWNrOiBcIlwiIH1cclxuICAgICAgICBzZXRTZXJ2ZXJzKHMgPT4gWy4uLnMsIG5ld1NlcnZlcl0pXHJcblxyXG4gICAgICAvLyBhZ2dpb3JuYSBzdGF0byBjb24gUE9TVCAoYWdnaXVuZ2UgbCd1dGVudGUgYWdnaW9ybmFuZG8gbGEgbGlzdGEgc3VsIERCKVxyXG4gICAgICAvKlxyXG4gICAgICAgIGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWU6IGB1c2VyICR7TWF0aC5yYW5kb20oKX1gfSkgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXMgPT4gc2V0VXNlcnMocyA9PiBbLi4ucywgcmVzXSkpXHJcbiAgICAgICovXHJcbiAgICBcclxuICAgICAgLy8gdmVyc2lvbmUgaW4gbG9jYWxlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTk2IG14LTMgcHgtMyBweS0yIGJnLXdoaXRlIHJvdW5kZWQtbWQgc2hhZG93LW1kIFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcvYXNzZXRzL2JnMy5qcGcnKWAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MDBweCdcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy02IGdhcC0yMCBteC0zIG10LTMgcHgtMyBweS0yIGJnLXdoaXRlIHJvdW5kZWQtbWQgc2hhZG93LW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeydOYW1lJ30gJiMwOTsmIzA5OyYjMDk7JiMwOTt7J1N0YXR1cyd9ICYjMDk7JiMwOTt7J1ZlcnNpb24nfSAgICAgIHsnJ31cclxuICAgICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICAgICAge3NlcnZlcnMubWFwKHNlcnZlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8cHJlIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTYgZ2FwLTIwIG14LTMgbXQtMyBweC0zIHB5LTIgYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NlcnZlci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZlci5zdGF0dXMgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnT25saW5lJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J09mZmxpbmUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2ZXIudmVyc2lvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3B1cEJ1dHRvbiBzZXJ2ZXJJbnN0YW5jZT17c2VydmVyfSB1cGRhdGVDYWxsYmFjaz17dXBkYXRlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBsLTEgcHktMSByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVTZXJ2ZXIoc2VydmVyLmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE3IDE1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNC45MTY2NjY2NywxNC44ODg4ODg5IEM0LjkxNjY2NjY3LDE1LjM1NzE0MjkgNS42MDQxNjY2NywxNiA2LjA2MjUsMTYgTDEyLjkzNzUsMTYgQzEzLjM5NTgzMzMsMTYgMTQuMDgzMzMzMywxNS4zNTcxNDI5IDE0LjA4MzMzMzMsMTQuODg4ODg4OSBMMTQuMDgzMzMzMyw2IEw0LjkxNjY2NjY3LDYgTDQuOTE2NjY2NjcsMTQuODg4ODg4OSBMNC45MTY2NjY2NywxNC44ODg4ODg5IEw0LjkxNjY2NjY3LDE0Ljg4ODg4ODkgWiBNMTUsMy40NjUwMDAwMyBMMTIuNTU1NTU1NiwzLjQ2NTAwMDAzIEwxMS4zMzMzMzMzLDIgTDcuNjY2NjY2NjcsMiBMNi40NDQ0NDQ0NCwzLjQ2NTAwMDAzIEw0LDMuNDY1MDAwMDMgTDQsNC45MzAwMDAwNyBMMTUsNC45MzAwMDAwNyBMMTUsMy40NjUwMDAwMyBMMTUsMy40NjUwMDAwMyBMMTUsMy40NjUwMDAwMyBaXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJteC0zIG10LTMgcHgtMyBweS0yIGJnLXdoaXRlIHJvdW5kZWQtbWQgc2hhZG93LW1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkU2VydmVyfT5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtbC0yMCBtdC0zIHB4LTMgcHktMiBiZy13aGl0ZSByb3VuZGVkLW1kIHNoYWRvdy1tZFwiXHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJy9hc3NldHMvYmcyLnBuZycpYCxcclxuICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTAwcHhcIixcclxuICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAwcHhcIlxyXG4gICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxmLXN0YXJ0IG14LTUwIHB4LTIgYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctbWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBBY3RpdmUgc2VydmVyXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUG9wdXBCdXR0b24iLCJpbml0U3RhdGUiLCJpZCIsIm5hbWUiLCJpcCIsInN0YXR1cyIsInZlcnNpb24iLCJjdXJwIiwibWF4cCIsImdhbWVtb2RlIiwiZGlmZmljdWx0eSIsIndoaXRlbGlzdCIsImNyYWNrZWQiLCJmbHkiLCJyZXNvdXJjZXBhY2siLCJzZXJ2ZXJDb3VudCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJtYXhJbmRleCIsInNlbGVjdGVkIiwiU2VydmVyIiwic2VydmVycyIsInNldFNlcnZlcnMiLCJjdXJTZXJ2ZXIiLCJ1cGRhdGUiLCJwcm9wcyIsInMiLCJtYXAiLCJzZXJ2ZXIiLCJyZW1vdmVTZXJ2ZXIiLCJmaWx0ZXIiLCJhZGRTZXJ2ZXIiLCJuZXdTZXJ2ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImhlaWdodCIsInByZSIsInNwYW4iLCJjb2xvciIsInNlcnZlckluc3RhbmNlIiwidXBkYXRlQ2FsbGJhY2siLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwidmlld0JveCIsInBhdGgiLCJkIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Server.tsx\n"));

/***/ })

});