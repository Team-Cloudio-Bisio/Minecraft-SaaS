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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Server; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/globals.css */ \"./app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_EditPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/EditPopup */ \"./components/EditPopup.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst initState = [\n    {\n        id: 1,\n        name: \"Vanilla\",\n        ip: \"Vanilla\",\n        status: true,\n        version: \"1.20\",\n        curp: 0,\n        maxp: 5,\n        gamemode: 0,\n        difficulty: 2,\n        whitelist: false,\n        cracked: false,\n        fly: false,\n        resourcepack: \"\"\n    },\n    {\n        id: 2,\n        name: \"Modded\",\n        ip: \"Modded\",\n        status: false,\n        version: \"1.20\",\n        curp: 0,\n        maxp: 5,\n        gamemode: 0,\n        difficulty: 2,\n        whitelist: false,\n        cracked: false,\n        fly: false,\n        resourcepack: \"\"\n    }\n];\nvar serverCount = Object.keys(initState).length;\nvar maxIndex = Object.keys(initState).length;\nvar selected = 0;\nfunction Server() {\n    _s();\n    const [servers, setServers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initState); //primo el: stato, secondo el: funzione per aggiornarlo\n    const curServer = initState[1];\n    function update(props) {\n        setServers((s)=>{\n            return s.map((server)=>{\n                if (server.id === props.id) {\n                    return {\n                        ...server,\n                        ...props\n                    };\n                }\n                return server;\n            });\n        });\n    /* quello che fin'ora funziona meglio\r\n        setServers(servers.filter((s) => s.id !== props.id));\r\n        const newServer = { id: props.id, name: props.name, status: props.status, version: props.version, curp: props.curp, maxp: 5, gamemode: 0,\r\n        difficulty: 2, whitelist: false, cracked: false, fly: false, resourcepack: \"\" }\r\n        setServers(s => [...s, newServer])\r\n        */ //servers.filter(s => s.id == props.id)\n    /*curServer.id = props.id\r\n        curServer.name = props.name\r\n        curServer.status = props.status\r\n        curServer.version = props.version*/ }\n    /* useEffect con GET dal DB\r\n    useEffect(() => {\r\n        fetch('https://jsonplaceholder.typicode.com/users')\r\n        .then(res => res.json())\r\n        .then(res => setUsers(res))\r\n        console.log('load data here')\r\n      }, []) //secondo parametro: dipendenze (se vuoto, questo useEffect è chiamato solo quando il componente viene montato, poi basta)\r\n    */ function removeServer(id) {\n        serverCount--;\n        setServers(servers.filter((s)=>s.id !== id));\n    }\n    function addServer() {\n        serverCount++;\n        maxIndex++;\n        const newServer = {\n            id: maxIndex,\n            name: \"server\" + maxIndex,\n            ip: \"server\" + maxIndex,\n            status: false,\n            version: \"1.20\",\n            curp: 0,\n            maxp: 5,\n            gamemode: 0,\n            difficulty: 2,\n            whitelist: false,\n            cracked: false,\n            fly: false,\n            resourcepack: \"\"\n        };\n        setServers((s)=>[\n                ...s,\n                newServer\n            ]);\n    // aggiorna stato con POST (aggiunge l'utente aggiornando la lista sul DB)\n    /*\r\n        fetch('https://jsonplaceholder.typicode.com/users', {\r\n        headers: {\r\n          \"Content-Type\": \"application/json\",\r\n        },\r\n        method: 'POST',\r\n        body: JSON.stringify({ name: `user ${Math.random()}`})    \r\n        })\r\n        .then(res => res.json())\r\n        .then(res => setUsers(s => [...s, res]))\r\n      */ // versione in locale\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"width mx-3 px-3 py-2 bg-white rounded-md shadow-md \",\n                style: {\n                    backgroundImage: \"url('/assets/bg3.jpg')\",\n                    height: \"700px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                        className: \"mx-3 mt-3 px-3 py-2 bg-white rounded-md shadow-md\",\n                        children: [\n                            \"Name\",\n                            \"     \",\n                            \"Status\",\n                            \"   \",\n                            \"Version\",\n                            \"      \",\n                            \"\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 17\n                    }, this),\n                    servers.map((server)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                            className: \"grid grid-flow-col auto-cols-max mx-3 mt-3 px-3 py-2 bg-white rounded-md shadow-md\",\n                            children: [\n                                server.name,\n                                \"   \",\n                                server.status ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        color: \"green\"\n                                    },\n                                    children: \"Online\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 37\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        color: \"red\"\n                                    },\n                                    children: \"Offline\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 37\n                                }, this),\n                                \"\\xa0 \",\n                                server.version,\n                                \"\\xa0\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EditPopup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    serverInstance: server,\n                                    updateCallback: update\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 37\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"pl-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-10\",\n                                    onClick: ()=>removeServer(server.id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        className: \"w-4 h-4 mr-2\",\n                                        viewBox: \"0 0 17 15\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            d: \"M4.91666667,14.8888889 C4.91666667,15.3571429 5.60416667,16 6.0625,16 L12.9375,16 C13.3958333,16 14.0833333,15.3571429 14.0833333,14.8888889 L14.0833333,6 L4.91666667,6 L4.91666667,14.8888889 L4.91666667,14.8888889 L4.91666667,14.8888889 Z M15,3.46500003 L12.5555556,3.46500003 L11.3333333,2 L7.66666667,2 L6.44444444,3.46500003 L4,3.46500003 L4,4.93000007 L15,4.93000007 L15,3.46500003 L15,3.46500003 L15,3.46500003 Z\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                                            lineNumber: 130,\n                                            columnNumber: 45\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 41\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                                    lineNumber: 126,\n                                    columnNumber: 37\n                                }, this)\n                            ]\n                        }, server.id, true, {\n                            fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 32\n                        }, this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mx-3 mt-3 px-3 py-2 bg-white rounded-md shadow-md\",\n                        onClick: addServer,\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                lineNumber: 106,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center ml-20 mt-3 px-3 py-2 bg-white rounded-md shadow-md\",\n                style: {\n                    backgroundImage: \"url('/assets/bg2.png')\",\n                    height: \"500px\",\n                    width: \"1000px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"self-start mx-50 px-2 bg-white rounded-md shadow-md\",\n                    children: \"Active server\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                    lineNumber: 144,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n                lineNumber: 138,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Root\\\\Utenti\\\\Utente\\\\Documenti\\\\GitHub\\\\Minecraft-SaaS\\\\nextjs\\\\components\\\\Server.tsx\",\n        lineNumber: 105,\n        columnNumber: 9\n    }, this);\n}\n_s(Server, \"EQbch9L/b6tthclpTr0HIHmPvTQ=\");\n_c = Server;\nvar _c;\n$RefreshReg$(_c, \"Server\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzRDO3dDQUFJWCxXQUFVO3dDQUNWWSxTQUFRO2tEQUNULDRFQUFDQzs0Q0FBS0MsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBYlhwQixPQUFPM0I7Ozs7O29CQWlCaEM7a0NBQ0EsOERBQUMwQzt3QkFBT1QsV0FBVTt3QkFDVlUsU0FBU2I7a0NBQVc7Ozs7Ozs7Ozs7OzswQkFFaEMsOERBQUNFO2dCQUFJQyxXQUFVO2dCQUNWQyxPQUFPO29CQUNQQyxpQkFBa0I7b0JBQ2xCQyxRQUFRO29CQUNSWSxPQUFPO2dCQUNQOzBCQUNELDRFQUFDaEI7b0JBQUlDLFdBQVU7OEJBQXNEOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRjtHQWhIb0JkO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VydmVyLnRzeD9lOGM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnQC9hcHAvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCBQb3B1cEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvRWRpdFBvcHVwJ1xyXG5cclxuXHJcbmV4cG9ydCB0eXBlIFNlcnZlclByb3BlcnRpZXMgPSB7XHJcbiAgICBpZDogbnVtYmVyXHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIGlwOiBzdHJpbmdcclxuICAgIHN0YXR1czogYm9vbGVhbiAvL2ZhbHNlLU9mZmxpbmUgIHRydWUtT25saW5lXHJcbiAgICB2ZXJzaW9uOiBzdHJpbmdcclxuICAgIGN1cnA6IG51bWJlclxyXG4gICAgbWF4cDogbnVtYmVyXHJcbiAgICBnYW1lbW9kZTogbnVtYmVyIC8vMC1zdXJ2aXZhbCAgMS1DcmVhdGl2ZSAgMi1BZHZlbnR1cmUgIDMtU3BlY3RhdG9yXHJcbiAgICBkaWZmaWN1bHR5OiBudW1iZXIgLy8wLVBlYWNlZnVsICAxLUVhc3kgIDItTm9ybWFsICAzLUhhcmRcclxuICAgIHdoaXRlbGlzdDogYm9vbGVhblxyXG4gICAgY3JhY2tlZDogYm9vbGVhblxyXG4gICAgZmx5OiBib29sZWFuXHJcbiAgICByZXNvdXJjZXBhY2s6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBpbml0U3RhdGU6IEFycmF5PFNlcnZlclByb3BlcnRpZXM+PSBbXHJcbiAgICB7IGlkOiAxLCBuYW1lOiAnVmFuaWxsYScsIGlwOiAnVmFuaWxsYScsIHN0YXR1czogdHJ1ZSwgdmVyc2lvbjogJzEuMjAnLCBjdXJwOiAwLCBtYXhwOiA1LCBnYW1lbW9kZTogMCxcclxuICAgIGRpZmZpY3VsdHk6IDIsIHdoaXRlbGlzdDogZmFsc2UsIGNyYWNrZWQ6IGZhbHNlLCBmbHk6IGZhbHNlLCByZXNvdXJjZXBhY2s6IFwiXCJ9LFxyXG4gICAgeyBpZDogMiwgbmFtZTogJ01vZGRlZCcsIGlwOiAnTW9kZGVkJywgc3RhdHVzOiBmYWxzZSwgdmVyc2lvbjogJzEuMjAnLCBjdXJwOiAwLCBtYXhwOiA1LCBnYW1lbW9kZTogMCxcclxuICAgIGRpZmZpY3VsdHk6IDIsIHdoaXRlbGlzdDogZmFsc2UsIGNyYWNrZWQ6IGZhbHNlLCBmbHk6IGZhbHNlLCByZXNvdXJjZXBhY2s6IFwiXCJ9LFxyXG4gIF07XHJcblxyXG5leHBvcnQgdHlwZSBDdWxvID0ge1xyXG4gICAgc2VydmVySW5zdGFuY2U6IFNlcnZlclByb3BlcnRpZXNcclxuICAgIHVwZGF0ZUNhbGxiYWNrOiAocHJvcHM6IFNlcnZlclByb3BlcnRpZXMpID0+IHZvaWRcclxufVxyXG4gIFxyXG52YXIgc2VydmVyQ291bnQgPSBPYmplY3Qua2V5cyhpbml0U3RhdGUpLmxlbmd0aFxyXG52YXIgbWF4SW5kZXggPSBPYmplY3Qua2V5cyhpbml0U3RhdGUpLmxlbmd0aFxyXG52YXIgc2VsZWN0ZWQgPSAwXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2ZXIoKSB7XHJcbiAgICBjb25zdCBbc2VydmVycywgc2V0U2VydmVyc10gPSB1c2VTdGF0ZShpbml0U3RhdGUpOyAvL3ByaW1vIGVsOiBzdGF0bywgc2Vjb25kbyBlbDogZnVuemlvbmUgcGVyIGFnZ2lvcm5hcmxvXHJcblxyXG4gICAgY29uc3QgY3VyU2VydmVyOiBTZXJ2ZXJQcm9wZXJ0aWVzID0gaW5pdFN0YXRlWzFdXHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlKHByb3BzOiBTZXJ2ZXJQcm9wZXJ0aWVzKSB7IC8vZGEgcGFzc2FyZSBhbCBwb3B1cFxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFNlcnZlcnMocyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzLm1hcChzZXJ2ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlcnZlci5pZCA9PT0gcHJvcHMuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gey4uLnNlcnZlciwuLi5wcm9wc31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2ZXJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvKiBxdWVsbG8gY2hlIGZpbidvcmEgZnVuemlvbmEgbWVnbGlvXHJcbiAgICAgICAgc2V0U2VydmVycyhzZXJ2ZXJzLmZpbHRlcigocykgPT4gcy5pZCAhPT0gcHJvcHMuaWQpKTtcclxuICAgICAgICBjb25zdCBuZXdTZXJ2ZXIgPSB7IGlkOiBwcm9wcy5pZCwgbmFtZTogcHJvcHMubmFtZSwgc3RhdHVzOiBwcm9wcy5zdGF0dXMsIHZlcnNpb246IHByb3BzLnZlcnNpb24sIGN1cnA6IHByb3BzLmN1cnAsIG1heHA6IDUsIGdhbWVtb2RlOiAwLFxyXG4gICAgICAgIGRpZmZpY3VsdHk6IDIsIHdoaXRlbGlzdDogZmFsc2UsIGNyYWNrZWQ6IGZhbHNlLCBmbHk6IGZhbHNlLCByZXNvdXJjZXBhY2s6IFwiXCIgfVxyXG4gICAgICAgIHNldFNlcnZlcnMocyA9PiBbLi4ucywgbmV3U2VydmVyXSlcclxuICAgICAgICAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vc2VydmVycy5maWx0ZXIocyA9PiBzLmlkID09IHByb3BzLmlkKVxyXG4gICAgICAgIC8qY3VyU2VydmVyLmlkID0gcHJvcHMuaWRcclxuICAgICAgICBjdXJTZXJ2ZXIubmFtZSA9IHByb3BzLm5hbWVcclxuICAgICAgICBjdXJTZXJ2ZXIuc3RhdHVzID0gcHJvcHMuc3RhdHVzXHJcbiAgICAgICAgY3VyU2VydmVyLnZlcnNpb24gPSBwcm9wcy52ZXJzaW9uKi9cclxuICAgIH1cclxuXHJcbiAgICAvKiB1c2VFZmZlY3QgY29uIEdFVCBkYWwgREJcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHNldFVzZXJzKHJlcykpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvYWQgZGF0YSBoZXJlJylcclxuICAgICAgfSwgW10pIC8vc2Vjb25kbyBwYXJhbWV0cm86IGRpcGVuZGVuemUgKHNlIHZ1b3RvLCBxdWVzdG8gdXNlRWZmZWN0IMOoIGNoaWFtYXRvIHNvbG8gcXVhbmRvIGlsIGNvbXBvbmVudGUgdmllbmUgbW9udGF0bywgcG9pIGJhc3RhKVxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVNlcnZlcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc2VydmVyQ291bnQtLVxyXG4gICAgICAgIHNldFNlcnZlcnMoc2VydmVycy5maWx0ZXIoKHMpID0+IHMuaWQgIT09IGlkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkU2VydmVyKCkge1xyXG4gICAgICAgIHNlcnZlckNvdW50KytcclxuICAgICAgICBtYXhJbmRleCsrXHJcbiAgICAgICAgY29uc3QgbmV3U2VydmVyID0geyBpZDogbWF4SW5kZXgsIG5hbWU6IFwic2VydmVyXCIrbWF4SW5kZXgsIGlwOiBcInNlcnZlclwiK21heEluZGV4LCBzdGF0dXM6IGZhbHNlLCB2ZXJzaW9uOiAnMS4yMCcsIGN1cnA6IDAsIG1heHA6IDUsIGdhbWVtb2RlOiAwLFxyXG4gICAgICAgIGRpZmZpY3VsdHk6IDIsIHdoaXRlbGlzdDogZmFsc2UsIGNyYWNrZWQ6IGZhbHNlLCBmbHk6IGZhbHNlLCByZXNvdXJjZXBhY2s6IFwiXCIgfVxyXG4gICAgICAgIHNldFNlcnZlcnMocyA9PiBbLi4ucywgbmV3U2VydmVyXSlcclxuXHJcbiAgICAgIC8vIGFnZ2lvcm5hIHN0YXRvIGNvbiBQT1NUIChhZ2dpdW5nZSBsJ3V0ZW50ZSBhZ2dpb3JuYW5kbyBsYSBsaXN0YSBzdWwgREIpXHJcbiAgICAgIC8qXHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZTogYHVzZXIgJHtNYXRoLnJhbmRvbSgpfWB9KSAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiBzZXRVc2VycyhzID0+IFsuLi5zLCByZXNdKSlcclxuICAgICAgKi9cclxuICAgIFxyXG4gICAgICAvLyB2ZXJzaW9uZSBpbiBsb2NhbGVcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpZHRoIG14LTMgcHgtMyBweS0yIGJnLXdoaXRlIHJvdW5kZWQtbWQgc2hhZG93LW1kIFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcvYXNzZXRzL2JnMy5qcGcnKWAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MDBweCdcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJteC0zIG10LTMgcHgtMyBweS0yIGJnLXdoaXRlIHJvdW5kZWQtbWQgc2hhZG93LW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeydOYW1lJ30gJiMwOTsmIzA5OyYjMDk7JiMwOTt7J1N0YXR1cyd9ICYjMDk7JiMwOTt7J1ZlcnNpb24nfSAgICAgIHsnJ31cclxuICAgICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICAgICAge3NlcnZlcnMubWFwKHNlcnZlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8cHJlIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1mbG93LWNvbCBhdXRvLWNvbHMtbWF4IG14LTMgbXQtMyBweC0zIHB5LTIgYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NlcnZlci5pZH0+e3NlcnZlci5uYW1lfSAgIHtzZXJ2ZXIuc3RhdHVzID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7J09ubGluZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydPZmZsaW5lJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPn0mbmJzcDsge3NlcnZlci52ZXJzaW9ufSZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wdXBCdXR0b24gc2VydmVySW5zdGFuY2U9e3NlcnZlcn0gdXBkYXRlQ2FsbGJhY2s9e3VwZGF0ZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBsLTEgcHktMSByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZVNlcnZlcihzZXJ2ZXIuaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy00IGgtNCBtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNyAxNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNC45MTY2NjY2NywxNC44ODg4ODg5IEM0LjkxNjY2NjY3LDE1LjM1NzE0MjkgNS42MDQxNjY2NywxNiA2LjA2MjUsMTYgTDEyLjkzNzUsMTYgQzEzLjM5NTgzMzMsMTYgMTQuMDgzMzMzMywxNS4zNTcxNDI5IDE0LjA4MzMzMzMsMTQuODg4ODg4OSBMMTQuMDgzMzMzMyw2IEw0LjkxNjY2NjY3LDYgTDQuOTE2NjY2NjcsMTQuODg4ODg4OSBMNC45MTY2NjY2NywxNC44ODg4ODg5IEw0LjkxNjY2NjY3LDE0Ljg4ODg4ODkgWiBNMTUsMy40NjUwMDAwMyBMMTIuNTU1NTU1NiwzLjQ2NTAwMDAzIEwxMS4zMzMzMzMzLDIgTDcuNjY2NjY2NjcsMiBMNi40NDQ0NDQ0NCwzLjQ2NTAwMDAzIEw0LDMuNDY1MDAwMDMgTDQsNC45MzAwMDAwNyBMMTUsNC45MzAwMDAwNyBMMTUsMy40NjUwMDAwMyBMMTUsMy40NjUwMDAwMyBMMTUsMy40NjUwMDAwMyBaXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm14LTMgbXQtMyBweC0zIHB5LTIgYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRTZXJ2ZXJ9PkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1sLTIwIG10LTMgcHgtMyBweS0yIGJnLXdoaXRlIHJvdW5kZWQtbWQgc2hhZG93LW1kXCJcclxuICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnL2Fzc2V0cy9iZzIucG5nJylgLFxyXG4gICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MDBweFwiLFxyXG4gICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGYtc3RhcnQgbXgtNTAgcHgtMiBiZy13aGl0ZSByb3VuZGVkLW1kIHNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEFjdGl2ZSBzZXJ2ZXJcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJQb3B1cEJ1dHRvbiIsImluaXRTdGF0ZSIsImlkIiwibmFtZSIsImlwIiwic3RhdHVzIiwidmVyc2lvbiIsImN1cnAiLCJtYXhwIiwiZ2FtZW1vZGUiLCJkaWZmaWN1bHR5Iiwid2hpdGVsaXN0IiwiY3JhY2tlZCIsImZseSIsInJlc291cmNlcGFjayIsInNlcnZlckNvdW50IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIm1heEluZGV4Iiwic2VsZWN0ZWQiLCJTZXJ2ZXIiLCJzZXJ2ZXJzIiwic2V0U2VydmVycyIsImN1clNlcnZlciIsInVwZGF0ZSIsInByb3BzIiwicyIsIm1hcCIsInNlcnZlciIsInJlbW92ZVNlcnZlciIsImZpbHRlciIsImFkZFNlcnZlciIsIm5ld1NlcnZlciIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaGVpZ2h0IiwicHJlIiwic3BhbiIsImNvbG9yIiwic2VydmVySW5zdGFuY2UiLCJ1cGRhdGVDYWxsYmFjayIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdmciLCJ2aWV3Qm94IiwicGF0aCIsImQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Server.tsx\n"));

/***/ })

});