"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "(api)/./pages/api/users.ts":
/*!****************************!*\
  !*** ./pages/api/users.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    const getUsers = async ()=>{\n        const response = await fetch(\"http://localhost:5115/User\", {\n            method: \"GET\"\n        });\n        return response.json();\n    };\n    getUsers().then((data)=>{\n        res.status(200).json(data);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVlLFNBQVNBLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CO0lBRXJFLE1BQU1DLFdBQVc7UUFDYixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sOEJBQThCO1lBQ3ZEQyxRQUFRO1FBUVo7UUFFQSxPQUFPRixTQUFTRztJQUNwQjtJQUVBSixXQUFXSyxLQUFLLENBQUNDO1FBQ2JQLElBQUlRLE9BQU8sS0FBS0gsS0FBS0U7SUFDekI7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QvLi9wYWdlcy9hcGkvdXNlcnMudHM/ODg3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuXG4gICAgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUxMTUvVXNlclwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAvKmhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBhbGxvd09yaWdpbnM6IFwiaHR0cHM6Ly8qXCIsXG4gICAgICAgICAgICAgICAgYWxsb3dDcmVkZW50aWFsczogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgbWF4QWdlOiBcIjMwMFwiLFxuICAgICAgICAgICAgICAgIGFsbG93TWV0aG9kczogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBhbGxvd0hlYWRlcnM6IFwiKlwiXG4gICAgICAgICAgICB9LCovXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuXG4gICAgZ2V0VXNlcnMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xuICAgIH0pO1xuXG59Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJnZXRVc2VycyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJqc29uIiwidGhlbiIsImRhdGEiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/users.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users.ts"));
module.exports = __webpack_exports__;

})();