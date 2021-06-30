/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/projects";
exports.ids = ["pages/api/projects"];
exports.modules = {

/***/ "./pages/api/projects/index.ts":
/*!*************************************!*\
  !*** ./pages/api/projects/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/settings */ \"./src/settings/index.ts\");\n\n\n\nconst {\n  exec,\n  execSync\n} = __webpack_require__(/*! child_process */ \"child_process\");\n\nfunction handler(req, res) {\n  const {\n    name\n  } = req.query;\n  const appNameSerialize = name.replaceAll(' ', '-');\n  const appName = `${_src_settings__WEBPACK_IMPORTED_MODULE_1__.settings.API}/${appNameSerialize}`;\n\n  if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(appName)) {\n    return res.status(404).json({});\n  }\n\n  let generateTemplate = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(`${_src_settings__WEBPACK_IMPORTED_MODULE_1__.settings.template}/initial/main.txt`, 'utf8');\n  let routerInitial = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(`${_src_settings__WEBPACK_IMPORTED_MODULE_1__.settings.template}/initial/router.json`, 'utf8');\n  let controller = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(`${_src_settings__WEBPACK_IMPORTED_MODULE_1__.settings.template}/controller.txt`, 'utf8');\n  fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(appName);\n  fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(`${appName}/controllers`);\n  fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(`${appName}/routes`);\n  fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(`${appName}/repository`);\n  const routeInitialRS = JSON.parse(routerInitial).map(item => {\n    return `\\tr.${item.method}(\"${item.route}\", controllers.${item.routeName}())`;\n  }).join(\"\\n\");\n  generateTemplate = generateTemplate.replace('{generate}', routeInitialRS);\n\n  if (routerInitial) {\n    generateTemplate = generateTemplate.replace(\"{libraries}\", `\"${appNameSerialize}/controllers\"`);\n  }\n\n  fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(`${appName}/main.go`, generateTemplate);\n  JSON.parse(routerInitial).forEach(item => {\n    let data = controller;\n    data = data.replace(\"{name}\", item.routeName);\n    fs__WEBPACK_IMPORTED_MODULE_0___default().writeFile(`${appName}/controllers/${item.routeName}.go`, data, () => {});\n  });\n  exec(`cd ${appName} &&  go mod init ${appNameSerialize} && go mod tidy`, (error, stdout, stderr) => {\n    if (error) {\n      console.log(`error: ${error.message}`);\n      return;\n    }\n\n    if (stderr) {\n      console.log(`stderr: ${stderr}`);\n      return;\n    }\n\n    execSync(`cd ${appName} &&  go get github.com/gin-gonic/gin`);\n    console.log(`stdout: ${stdout}`);\n  });\n  res.status(200).json({\n    name,\n    method: req.method\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcHJvamVjdHMvaW5kZXgudHM/NmY1MSJdLCJuYW1lcyI6WyJleGVjIiwiZXhlY1N5bmMiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm5hbWUiLCJxdWVyeSIsImFwcE5hbWVTZXJpYWxpemUiLCJyZXBsYWNlQWxsIiwiYXBwTmFtZSIsInNldHRpbmdzIiwiZnMiLCJzdGF0dXMiLCJqc29uIiwiZ2VuZXJhdGVUZW1wbGF0ZSIsInJvdXRlckluaXRpYWwiLCJjb250cm9sbGVyIiwicm91dGVJbml0aWFsUlMiLCJKU09OIiwicGFyc2UiLCJtYXAiLCJpdGVtIiwibWV0aG9kIiwicm91dGUiLCJyb3V0ZU5hbWUiLCJqb2luIiwicmVwbGFjZSIsImZvckVhY2giLCJkYXRhIiwiZXJyb3IiLCJzdGRvdXQiLCJzdGRlcnIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTTtBQUFDQSxNQUFEO0FBQU9DO0FBQVAsSUFBbUJDLG1CQUFPLENBQUMsb0NBQUQsQ0FBaEM7O0FBRWUsU0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ3RDLFFBQU07QUFDRkM7QUFERSxNQUVGRixHQUFHLENBQUNHLEtBRlI7QUFHQSxRQUFNQyxnQkFBZ0IsR0FBR0YsSUFBSSxDQUFDRyxVQUFMLENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBQXpCO0FBQ0EsUUFBTUMsT0FBTyxHQUFJLEdBQUVDLHVEQUFhLElBQUdILGdCQUFpQixFQUFwRDs7QUFFQSxNQUFJSSxvREFBQSxDQUFjRixPQUFkLENBQUosRUFBNEI7QUFDeEIsV0FBT0wsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsRUFBckIsQ0FBUDtBQUNIOztBQUVELE1BQUlDLGdCQUFnQixHQUFHSCxzREFBQSxDQUFpQixHQUFFRCw0REFBa0IsbUJBQXJDLEVBQXlELE1BQXpELENBQXZCO0FBQ0EsTUFBSUssYUFBYSxHQUFHSixzREFBQSxDQUFpQixHQUFFRCw0REFBa0Isc0JBQXJDLEVBQTRELE1BQTVELENBQXBCO0FBQ0EsTUFBSU0sVUFBVSxHQUFHTCxzREFBQSxDQUFpQixHQUFFRCw0REFBa0IsaUJBQXJDLEVBQXVELE1BQXZELENBQWpCO0FBRUFDLHFEQUFBLENBQWFGLE9BQWI7QUFDQUUscURBQUEsQ0FBYyxHQUFFRixPQUFRLGNBQXhCO0FBQ0FFLHFEQUFBLENBQWMsR0FBRUYsT0FBUSxTQUF4QjtBQUNBRSxxREFBQSxDQUFjLEdBQUVGLE9BQVEsYUFBeEI7QUFFQSxRQUFNUSxjQUFjLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixhQUFYLEVBQTBCSyxHQUExQixDQUE4QkMsSUFBSSxJQUFJO0FBQ3pELFdBQVEsT0FBTUEsSUFBSSxDQUFDQyxNQUFPLEtBQUlELElBQUksQ0FBQ0UsS0FBTSxrQkFBaUJGLElBQUksQ0FBQ0csU0FBVSxLQUF6RTtBQUNILEdBRnNCLEVBRXBCQyxJQUZvQixDQUVmLElBRmUsQ0FBdkI7QUFJQVgsa0JBQWdCLEdBQUdBLGdCQUFnQixDQUFDWSxPQUFqQixDQUF5QixZQUF6QixFQUF1Q1QsY0FBdkMsQ0FBbkI7O0FBRUEsTUFBSUYsYUFBSixFQUFtQjtBQUNmRCxvQkFBZ0IsR0FBR0EsZ0JBQWdCLENBQUNZLE9BQWpCLENBQXlCLGFBQXpCLEVBQXlDLElBQUduQixnQkFBaUIsZUFBN0QsQ0FBbkI7QUFDSDs7QUFFREkseURBQUEsQ0FBa0IsR0FBRUYsT0FBUSxVQUE1QixFQUF1Q0ssZ0JBQXZDO0FBRUFJLE1BQUksQ0FBQ0MsS0FBTCxDQUFXSixhQUFYLEVBQTBCWSxPQUExQixDQUFrQ04sSUFBSSxJQUFJO0FBQ3RDLFFBQUlPLElBQUksR0FBR1osVUFBWDtBQUNBWSxRQUFJLEdBQUdBLElBQUksQ0FBQ0YsT0FBTCxDQUFhLFFBQWIsRUFBdUJMLElBQUksQ0FBQ0csU0FBNUIsQ0FBUDtBQUVBYix1REFBQSxDQUFjLEdBQUVGLE9BQVEsZ0JBQWVZLElBQUksQ0FBQ0csU0FBVSxLQUF0RCxFQUE0REksSUFBNUQsRUFBa0UsTUFBTSxDQUV2RSxDQUZEO0FBR0gsR0FQRDtBQVNBN0IsTUFBSSxDQUFFLE1BQUtVLE9BQVEsb0JBQW1CRixnQkFBaUIsaUJBQW5ELEVBQXFFLENBQUNzQixLQUFELEVBQVFDLE1BQVIsRUFBZ0JDLE1BQWhCLEtBQTJCO0FBQ2hHLFFBQUlGLEtBQUosRUFBVztBQUNQRyxhQUFPLENBQUNDLEdBQVIsQ0FBYSxVQUFTSixLQUFLLENBQUNLLE9BQVEsRUFBcEM7QUFDQTtBQUNIOztBQUNELFFBQUlILE1BQUosRUFBWTtBQUNSQyxhQUFPLENBQUNDLEdBQVIsQ0FBYSxXQUFVRixNQUFPLEVBQTlCO0FBQ0E7QUFDSDs7QUFDRC9CLFlBQVEsQ0FBRSxNQUFLUyxPQUFRLHNDQUFmLENBQVI7QUFDQXVCLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLFdBQVVILE1BQU8sRUFBOUI7QUFDSCxHQVhHLENBQUo7QUFZQTFCLEtBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNSLFFBQUQ7QUFBT2lCLFVBQU0sRUFBRW5CLEdBQUcsQ0FBQ21CO0FBQW5CLEdBQXJCO0FBQ0giLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvamVjdHMvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4uLy4uLy4uL3NyYy9zZXR0aW5nc1wiO1xuXG5jb25zdCB7ZXhlYywgZXhlY1N5bmN9ID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIG5hbWVcbiAgICB9ID0gcmVxLnF1ZXJ5O1xuICAgIGNvbnN0IGFwcE5hbWVTZXJpYWxpemUgPSBuYW1lLnJlcGxhY2VBbGwoJyAnLCAnLScpO1xuICAgIGNvbnN0IGFwcE5hbWUgPSBgJHtzZXR0aW5ncy5BUEl9LyR7YXBwTmFtZVNlcmlhbGl6ZX1gO1xuXG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoYXBwTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHt9KTtcbiAgICB9XG5cbiAgICBsZXQgZ2VuZXJhdGVUZW1wbGF0ZSA9IGZzLnJlYWRGaWxlU3luYyhgJHtzZXR0aW5ncy50ZW1wbGF0ZX0vaW5pdGlhbC9tYWluLnR4dGAsICd1dGY4JylcbiAgICBsZXQgcm91dGVySW5pdGlhbCA9IGZzLnJlYWRGaWxlU3luYyhgJHtzZXR0aW5ncy50ZW1wbGF0ZX0vaW5pdGlhbC9yb3V0ZXIuanNvbmAsICd1dGY4JylcbiAgICBsZXQgY29udHJvbGxlciA9IGZzLnJlYWRGaWxlU3luYyhgJHtzZXR0aW5ncy50ZW1wbGF0ZX0vY29udHJvbGxlci50eHRgLCAndXRmOCcpXG5cbiAgICBmcy5ta2RpclN5bmMoYXBwTmFtZSk7XG4gICAgZnMubWtkaXJTeW5jKGAke2FwcE5hbWV9L2NvbnRyb2xsZXJzYCk7XG4gICAgZnMubWtkaXJTeW5jKGAke2FwcE5hbWV9L3JvdXRlc2ApO1xuICAgIGZzLm1rZGlyU3luYyhgJHthcHBOYW1lfS9yZXBvc2l0b3J5YCk7XG5cbiAgICBjb25zdCByb3V0ZUluaXRpYWxSUyA9IEpTT04ucGFyc2Uocm91dGVySW5pdGlhbCkubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gYFxcdHIuJHtpdGVtLm1ldGhvZH0oXCIke2l0ZW0ucm91dGV9XCIsIGNvbnRyb2xsZXJzLiR7aXRlbS5yb3V0ZU5hbWV9KCkpYDtcbiAgICB9KS5qb2luKFwiXFxuXCIpO1xuXG4gICAgZ2VuZXJhdGVUZW1wbGF0ZSA9IGdlbmVyYXRlVGVtcGxhdGUucmVwbGFjZSgne2dlbmVyYXRlfScsIHJvdXRlSW5pdGlhbFJTKTtcblxuICAgIGlmIChyb3V0ZXJJbml0aWFsKSB7XG4gICAgICAgIGdlbmVyYXRlVGVtcGxhdGUgPSBnZW5lcmF0ZVRlbXBsYXRlLnJlcGxhY2UoXCJ7bGlicmFyaWVzfVwiLCBgXCIke2FwcE5hbWVTZXJpYWxpemV9L2NvbnRyb2xsZXJzXCJgKVxuICAgIH1cblxuICAgIGZzLndyaXRlRmlsZVN5bmMoYCR7YXBwTmFtZX0vbWFpbi5nb2AsIGdlbmVyYXRlVGVtcGxhdGUpO1xuXG4gICAgSlNPTi5wYXJzZShyb3V0ZXJJbml0aWFsKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBsZXQgZGF0YSA9IGNvbnRyb2xsZXI7XG4gICAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoXCJ7bmFtZX1cIiwgaXRlbS5yb3V0ZU5hbWUpO1xuXG4gICAgICAgIGZzLndyaXRlRmlsZShgJHthcHBOYW1lfS9jb250cm9sbGVycy8ke2l0ZW0ucm91dGVOYW1lfS5nb2AsIGRhdGEsICgpID0+IHtcblxuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgZXhlYyhgY2QgJHthcHBOYW1lfSAmJiAgZ28gbW9kIGluaXQgJHthcHBOYW1lU2VyaWFsaXplfSAmJiBnbyBtb2QgdGlkeWAsIChlcnJvciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RkZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc3RkZXJyOiAke3N0ZGVycn1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBleGVjU3luYyhgY2QgJHthcHBOYW1lfSAmJiAgZ28gZ2V0IGdpdGh1Yi5jb20vZ2luLWdvbmljL2dpbmApO1xuICAgICAgICBjb25zb2xlLmxvZyhgc3Rkb3V0OiAke3N0ZG91dH1gKTtcbiAgICB9KTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bmFtZSwgbWV0aG9kOiByZXEubWV0aG9kfSlcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/projects/index.ts\n");

/***/ }),

/***/ "./src/settings/index.ts":
/*!*******************************!*\
  !*** ./src/settings/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"settings\": function() { return /* binding */ settings; }\n/* harmony export */ });\nconst settings = {\n  template: \"../front/src/templates\",\n  API: \"../api\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvaW5kZXgudHM/MWQ4YSJdLCJuYW1lcyI6WyJzZXR0aW5ncyIsInRlbXBsYXRlIiwiQVBJIl0sIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsUUFBUSxHQUFHO0FBQ3BCQyxVQUFRLEVBQUUsd0JBRFU7QUFFcEJDLEtBQUcsRUFBRTtBQUZlLENBQWpCIiwiZmlsZSI6Ii4vc3JjL3NldHRpbmdzL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xuICAgIHRlbXBsYXRlOiBcIi4uL2Zyb250L3NyYy90ZW1wbGF0ZXNcIixcbiAgICBBUEk6IFwiLi4vYXBpXCJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/settings/index.ts\n");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("child_process");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/projects/index.ts"));
module.exports = __webpack_exports__;

})();