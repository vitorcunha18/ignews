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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"(api)/./src/services/fauna.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.CLIENT_ID_GITHUB,\n            clientSecret: process.env.SECRET_ID_GITHUB,\n            authorization: {\n                params: {\n                    scope: \"read:user\"\n                }\n            }\n        }), \n    ],\n    callbacks: {\n        async signIn ({ user , profile  }) {\n            const { email  } = user;\n            console.log(user, email);\n            try {\n                await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), {\n                    data: {\n                        email\n                    }\n                }));\n                return true;\n            } catch  {\n                return false;\n            }\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNvQztBQUNKO0FBQ3VCO0FBR1I7QUFFL0MsaUVBQWVFLGdEQUFRLENBQUM7SUFDdEJHLFNBQVMsRUFBRTtRQUNURixpRUFBYyxDQUFDO1lBQ2JHLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csZ0JBQWdCO1lBQzFDQyxhQUFhLEVBQUU7Z0JBQ2JDLE1BQU0sRUFBRTtvQkFDTkMsS0FBSyxFQUFFLFdBQVc7aUJBQ25CO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7SUFFREMsU0FBUyxFQUFDO1FBQ1IsTUFBTUMsTUFBTSxFQUFDLEVBQUVDLElBQUksR0FBR0MsT0FBTyxHQUFFLEVBQUU7WUFDOUIsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBR0YsSUFBSTtZQUN2QkcsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUksRUFBRUUsS0FBSyxDQUFDO1lBRXhCLElBQUc7Z0JBQ0QsTUFBTWYsd0RBQVcsQ0FDZkgsaURBQVEsQ0FDTkEscURBQVksQ0FBQyxPQUFPLENBQUMsRUFDckI7b0JBQUV1QixJQUFJLEVBQUU7d0JBQUVMLEtBQUs7cUJBQUU7aUJBQUMsQ0FDbkIsQ0FDRjtnQkFFRCxPQUFPLElBQUk7YUFFWixRQUFLO2dCQUVKLE9BQU8sS0FBSzthQUNiO1NBQ0Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz81MGExIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSBcImZhdW5hZGJcIlxyXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXHJcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIlxyXG5cclxuXHJcbmltcG9ydCB7IGZhdW5hIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2ZhdW5hXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdpdGh1YlByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkNMSUVOVF9JRF9HSVRIVUIsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVUX0lEX0dJVEhVQixcclxuICAgICAgYXV0aG9yaXphdGlvbjoge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgc2NvcGU6ICdyZWFkOnVzZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG5cclxuICBjYWxsYmFja3M6e1xyXG4gICAgYXN5bmMgc2lnbkluKHsgdXNlciwgIHByb2ZpbGUgfSkge1xyXG4gICAgICAgY29uc3QgeyBlbWFpbCB9ID0gdXNlciBcclxuICAgICAgY29uc29sZS5sb2codXNlciwgZW1haWwpXHJcblxyXG4gICAgICB0cnl7XHJcbiAgICAgICAgYXdhaXQgZmF1bmEucXVlcnkoXHJcbiAgICAgICAgICBxLkNyZWF0ZShcclxuICAgICAgICAgICAgcS5Db2xsZWN0aW9uKCd1c2VycycpLFxyXG4gICAgICAgICAgICB7IGRhdGE6IHsgZW1haWwgfX1cclxuICAgICAgICAgIClcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcblxyXG4gICAgICB9Y2F0Y2h7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfVxyXG59KSJdLCJuYW1lcyI6WyJxdWVyeSIsInEiLCJOZXh0QXV0aCIsIkdpdGh1YlByb3ZpZGVyIiwiZmF1bmEiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJDTElFTlRfSURfR0lUSFVCIiwiY2xpZW50U2VjcmV0IiwiU0VDUkVUX0lEX0dJVEhVQiIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJzY29wZSIsImNhbGxiYWNrcyIsInNpZ25JbiIsInVzZXIiLCJwcm9maWxlIiwiZW1haWwiLCJjb25zb2xlIiwibG9nIiwiQ3JlYXRlIiwiQ29sbGVjdGlvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.SECRET_KEY_FAUNA\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBR3pCLE1BQU1DLEtBQUssR0FBRyxJQUFJRCwyQ0FBTSxDQUFDO0lBQzVCRSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0I7Q0FDdkMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9mYXVuYS50cz8zMjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gJ2ZhdW5hZGInXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGZhdW5hID0gbmV3IENsaWVudCh7XHJcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVF9LRVlfRkFVTkFcclxufSkiXSwibmFtZXMiOlsiQ2xpZW50IiwiZmF1bmEiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUX0tFWV9GQVVOQSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/services/fauna.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();