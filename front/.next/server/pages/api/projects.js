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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/settings */ \"./src/settings/index.ts\");\n\n\n\nconst {\n  exec,\n  execSync\n} = __webpack_require__(/*! child_process */ \"child_process\");\n\nfunction handler(req, res) {\n  const {\n    name\n  } = req.query;\n  const appNameSerialize = name.replaceAll(' ', '-');\n  const appName = `${_src_settings__WEBPACK_IMPORTED_MODULE_1__.settings.API}/${appNameSerialize}`;\n\n  if (fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(appName)) {\n    return res.status(404).json({});\n  }\n\n  let generateTemplate = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(`${_src_settings__WEBPACK_IMPORTED_MODULE_1__.settings.template}/initial/main.txt`, 'utf8');\n  let routerInitial = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(`${_src_settings__WEBPACK_IMPORTED_MODULE_1__.settings.template}/initial/router.json`, 'utf8');\n  let controller = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(`${_src_settings__WEBPACK_IMPORTED_MODULE_1__.settings.template}/controller.txt`, 'utf8');\n  const routeSettingApp = `${_src_settings__WEBPACK_IMPORTED_MODULE_1__.settings.settings.app}/${appNameSerialize}`;\n  fs__WEBPACK_IMPORTED_MODULE_0___default().mkdir(routeSettingApp, () => {\n    fs__WEBPACK_IMPORTED_MODULE_0___default().writeFile(`${routeSettingApp}/router.json`, routerInitial, () => console.log(\"GENERATE ROUTE\"));\n  });\n  fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(appName);\n  fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(`${appName}/controllers`);\n  fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(`${appName}/routes`);\n  fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(`${appName}/repository`);\n  const routeInitialRS = JSON.parse(routerInitial).map(item => {\n    return `\\tr.${item.method}(\"${item.route}\", controllers.${item.routeName}())`;\n  }).join(\"\\n\");\n  generateTemplate = generateTemplate.replace('{generate}', routeInitialRS);\n\n  if (routerInitial) {\n    generateTemplate = generateTemplate.replace(\"{libraries}\", `\"${appNameSerialize}/controllers\"`);\n  }\n\n  fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(`${appName}/main.go`, generateTemplate);\n  JSON.parse(routerInitial).forEach(item => {\n    let data = controller;\n    data = data.replace(\"{name}\", item.routeName);\n    fs__WEBPACK_IMPORTED_MODULE_0___default().writeFile(`${appName}/controllers/${item.routeName}.go`, data, () => {});\n  });\n  exec(`cd ${appName} &&  go mod init ${appNameSerialize} && go mod tidy`, (error, stdout, stderr) => {\n    if (error) {\n      console.log(`error: ${error.message}`);\n      return;\n    }\n\n    if (stderr) {\n      console.log(`stderr: ${stderr}`);\n      return;\n    }\n\n    execSync(`cd ${appName} &&  go get github.com/gin-gonic/gin`);\n    console.log(`stdout: ${stdout}`);\n  });\n  res.status(200).json({\n    name,\n    method: req.method\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcHJvamVjdHMvaW5kZXgudHM/NmY1MSJdLCJuYW1lcyI6WyJleGVjIiwiZXhlY1N5bmMiLCJyZXF1aXJlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm5hbWUiLCJxdWVyeSIsImFwcE5hbWVTZXJpYWxpemUiLCJyZXBsYWNlQWxsIiwiYXBwTmFtZSIsInNldHRpbmdzIiwiZnMiLCJzdGF0dXMiLCJqc29uIiwiZ2VuZXJhdGVUZW1wbGF0ZSIsInJvdXRlckluaXRpYWwiLCJjb250cm9sbGVyIiwicm91dGVTZXR0aW5nQXBwIiwiY29uc29sZSIsImxvZyIsInJvdXRlSW5pdGlhbFJTIiwiSlNPTiIsInBhcnNlIiwibWFwIiwiaXRlbSIsIm1ldGhvZCIsInJvdXRlIiwicm91dGVOYW1lIiwiam9pbiIsInJlcGxhY2UiLCJmb3JFYWNoIiwiZGF0YSIsImVycm9yIiwic3Rkb3V0Iiwic3RkZXJyIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTTtBQUFDQSxNQUFEO0FBQU9DO0FBQVAsSUFBbUJDLG1CQUFPLENBQUMsb0NBQUQsQ0FBaEM7O0FBRWUsU0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ3RDLFFBQU07QUFDRkM7QUFERSxNQUVGRixHQUFHLENBQUNHLEtBRlI7QUFHQSxRQUFNQyxnQkFBZ0IsR0FBR0YsSUFBSSxDQUFDRyxVQUFMLENBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBQXpCO0FBQ0EsUUFBTUMsT0FBTyxHQUFJLEdBQUVDLHVEQUFhLElBQUdILGdCQUFpQixFQUFwRDs7QUFFQSxNQUFJSSxvREFBQSxDQUFjRixPQUFkLENBQUosRUFBNEI7QUFDeEIsV0FBT0wsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsRUFBckIsQ0FBUDtBQUNIOztBQUVELE1BQUlDLGdCQUFnQixHQUFHSCxzREFBQSxDQUFpQixHQUFFRCw0REFBa0IsbUJBQXJDLEVBQXlELE1BQXpELENBQXZCO0FBQ0EsTUFBSUssYUFBYSxHQUFHSixzREFBQSxDQUFpQixHQUFFRCw0REFBa0Isc0JBQXJDLEVBQTRELE1BQTVELENBQXBCO0FBQ0EsTUFBSU0sVUFBVSxHQUFHTCxzREFBQSxDQUFpQixHQUFFRCw0REFBa0IsaUJBQXJDLEVBQXVELE1BQXZELENBQWpCO0FBQ0EsUUFBTU8sZUFBZSxHQUFJLEdBQUVQLGdFQUFzQixJQUFHSCxnQkFBaUIsRUFBckU7QUFDQUksaURBQUEsQ0FBU00sZUFBVCxFQUEwQixNQUFNO0FBQzVCTix1REFBQSxDQUFjLEdBQUVNLGVBQWdCLGNBQWhDLEVBQStDRixhQUEvQyxFQUE4RCxNQUFNRyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixDQUFwRTtBQUNILEdBRkQ7QUFJQVIscURBQUEsQ0FBYUYsT0FBYjtBQUNBRSxxREFBQSxDQUFjLEdBQUVGLE9BQVEsY0FBeEI7QUFDQUUscURBQUEsQ0FBYyxHQUFFRixPQUFRLFNBQXhCO0FBQ0FFLHFEQUFBLENBQWMsR0FBRUYsT0FBUSxhQUF4QjtBQUVBLFFBQU1XLGNBQWMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdQLGFBQVgsRUFBMEJRLEdBQTFCLENBQThCQyxJQUFJLElBQUk7QUFDekQsV0FBUSxPQUFNQSxJQUFJLENBQUNDLE1BQU8sS0FBSUQsSUFBSSxDQUFDRSxLQUFNLGtCQUFpQkYsSUFBSSxDQUFDRyxTQUFVLEtBQXpFO0FBQ0gsR0FGc0IsRUFFcEJDLElBRm9CLENBRWYsSUFGZSxDQUF2QjtBQUlBZCxrQkFBZ0IsR0FBR0EsZ0JBQWdCLENBQUNlLE9BQWpCLENBQXlCLFlBQXpCLEVBQXVDVCxjQUF2QyxDQUFuQjs7QUFFQSxNQUFJTCxhQUFKLEVBQW1CO0FBQ2ZELG9CQUFnQixHQUFHQSxnQkFBZ0IsQ0FBQ2UsT0FBakIsQ0FBeUIsYUFBekIsRUFBeUMsSUFBR3RCLGdCQUFpQixlQUE3RCxDQUFuQjtBQUNIOztBQUVESSx5REFBQSxDQUFrQixHQUFFRixPQUFRLFVBQTVCLEVBQXVDSyxnQkFBdkM7QUFFQU8sTUFBSSxDQUFDQyxLQUFMLENBQVdQLGFBQVgsRUFBMEJlLE9BQTFCLENBQWtDTixJQUFJLElBQUk7QUFDdEMsUUFBSU8sSUFBSSxHQUFHZixVQUFYO0FBQ0FlLFFBQUksR0FBR0EsSUFBSSxDQUFDRixPQUFMLENBQWEsUUFBYixFQUF1QkwsSUFBSSxDQUFDRyxTQUE1QixDQUFQO0FBRUFoQix1REFBQSxDQUFjLEdBQUVGLE9BQVEsZ0JBQWVlLElBQUksQ0FBQ0csU0FBVSxLQUF0RCxFQUE0REksSUFBNUQsRUFBa0UsTUFBTSxDQUV2RSxDQUZEO0FBR0gsR0FQRDtBQVNBaEMsTUFBSSxDQUFFLE1BQUtVLE9BQVEsb0JBQW1CRixnQkFBaUIsaUJBQW5ELEVBQXFFLENBQUN5QixLQUFELEVBQVFDLE1BQVIsRUFBZ0JDLE1BQWhCLEtBQTJCO0FBQ2hHLFFBQUlGLEtBQUosRUFBVztBQUNQZCxhQUFPLENBQUNDLEdBQVIsQ0FBYSxVQUFTYSxLQUFLLENBQUNHLE9BQVEsRUFBcEM7QUFDQTtBQUNIOztBQUNELFFBQUlELE1BQUosRUFBWTtBQUNSaEIsYUFBTyxDQUFDQyxHQUFSLENBQWEsV0FBVWUsTUFBTyxFQUE5QjtBQUNBO0FBQ0g7O0FBQ0RsQyxZQUFRLENBQUUsTUFBS1MsT0FBUSxzQ0FBZixDQUFSO0FBQ0FTLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLFdBQVVjLE1BQU8sRUFBOUI7QUFDSCxHQVhHLENBQUo7QUFZQTdCLEtBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUNSLFFBQUQ7QUFBT29CLFVBQU0sRUFBRXRCLEdBQUcsQ0FBQ3NCO0FBQW5CLEdBQXJCO0FBQ0giLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvamVjdHMvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4uLy4uLy4uL3NyYy9zZXR0aW5nc1wiO1xuXG5jb25zdCB7ZXhlYywgZXhlY1N5bmN9ID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIG5hbWVcbiAgICB9ID0gcmVxLnF1ZXJ5O1xuICAgIGNvbnN0IGFwcE5hbWVTZXJpYWxpemUgPSBuYW1lLnJlcGxhY2VBbGwoJyAnLCAnLScpO1xuICAgIGNvbnN0IGFwcE5hbWUgPSBgJHtzZXR0aW5ncy5BUEl9LyR7YXBwTmFtZVNlcmlhbGl6ZX1gO1xuXG4gICAgaWYgKGZzLmV4aXN0c1N5bmMoYXBwTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHt9KTtcbiAgICB9XG5cbiAgICBsZXQgZ2VuZXJhdGVUZW1wbGF0ZSA9IGZzLnJlYWRGaWxlU3luYyhgJHtzZXR0aW5ncy50ZW1wbGF0ZX0vaW5pdGlhbC9tYWluLnR4dGAsICd1dGY4JylcbiAgICBsZXQgcm91dGVySW5pdGlhbCA9IGZzLnJlYWRGaWxlU3luYyhgJHtzZXR0aW5ncy50ZW1wbGF0ZX0vaW5pdGlhbC9yb3V0ZXIuanNvbmAsICd1dGY4JylcbiAgICBsZXQgY29udHJvbGxlciA9IGZzLnJlYWRGaWxlU3luYyhgJHtzZXR0aW5ncy50ZW1wbGF0ZX0vY29udHJvbGxlci50eHRgLCAndXRmOCcpXG4gICAgY29uc3Qgcm91dGVTZXR0aW5nQXBwID0gYCR7c2V0dGluZ3Muc2V0dGluZ3MuYXBwfS8ke2FwcE5hbWVTZXJpYWxpemV9YFxuICAgIGZzLm1rZGlyKHJvdXRlU2V0dGluZ0FwcCwgKCkgPT4ge1xuICAgICAgICBmcy53cml0ZUZpbGUoYCR7cm91dGVTZXR0aW5nQXBwfS9yb3V0ZXIuanNvbmAsIHJvdXRlckluaXRpYWwsICgpID0+IGNvbnNvbGUubG9nKFwiR0VORVJBVEUgUk9VVEVcIikpO1xuICAgIH0pO1xuXG4gICAgZnMubWtkaXJTeW5jKGFwcE5hbWUpO1xuICAgIGZzLm1rZGlyU3luYyhgJHthcHBOYW1lfS9jb250cm9sbGVyc2ApO1xuICAgIGZzLm1rZGlyU3luYyhgJHthcHBOYW1lfS9yb3V0ZXNgKTtcbiAgICBmcy5ta2RpclN5bmMoYCR7YXBwTmFtZX0vcmVwb3NpdG9yeWApO1xuXG4gICAgY29uc3Qgcm91dGVJbml0aWFsUlMgPSBKU09OLnBhcnNlKHJvdXRlckluaXRpYWwpLm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGBcXHRyLiR7aXRlbS5tZXRob2R9KFwiJHtpdGVtLnJvdXRlfVwiLCBjb250cm9sbGVycy4ke2l0ZW0ucm91dGVOYW1lfSgpKWA7XG4gICAgfSkuam9pbihcIlxcblwiKTtcblxuICAgIGdlbmVyYXRlVGVtcGxhdGUgPSBnZW5lcmF0ZVRlbXBsYXRlLnJlcGxhY2UoJ3tnZW5lcmF0ZX0nLCByb3V0ZUluaXRpYWxSUyk7XG5cbiAgICBpZiAocm91dGVySW5pdGlhbCkge1xuICAgICAgICBnZW5lcmF0ZVRlbXBsYXRlID0gZ2VuZXJhdGVUZW1wbGF0ZS5yZXBsYWNlKFwie2xpYnJhcmllc31cIiwgYFwiJHthcHBOYW1lU2VyaWFsaXplfS9jb250cm9sbGVyc1wiYClcbiAgICB9XG5cbiAgICBmcy53cml0ZUZpbGVTeW5jKGAke2FwcE5hbWV9L21haW4uZ29gLCBnZW5lcmF0ZVRlbXBsYXRlKTtcblxuICAgIEpTT04ucGFyc2Uocm91dGVySW5pdGlhbCkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSBjb250cm9sbGVyO1xuICAgICAgICBkYXRhID0gZGF0YS5yZXBsYWNlKFwie25hbWV9XCIsIGl0ZW0ucm91dGVOYW1lKTtcblxuICAgICAgICBmcy53cml0ZUZpbGUoYCR7YXBwTmFtZX0vY29udHJvbGxlcnMvJHtpdGVtLnJvdXRlTmFtZX0uZ29gLCBkYXRhLCAoKSA9PiB7XG5cbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgIGV4ZWMoYGNkICR7YXBwTmFtZX0gJiYgIGdvIG1vZCBpbml0ICR7YXBwTmFtZVNlcmlhbGl6ZX0gJiYgZ28gbW9kIHRpZHlgLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYGVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ZGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYHN0ZGVycjogJHtzdGRlcnJ9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZXhlY1N5bmMoYGNkICR7YXBwTmFtZX0gJiYgIGdvIGdldCBnaXRodWIuY29tL2dpbi1nb25pYy9naW5gKTtcbiAgICAgICAgY29uc29sZS5sb2coYHN0ZG91dDogJHtzdGRvdXR9YCk7XG4gICAgfSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe25hbWUsIG1ldGhvZDogcmVxLm1ldGhvZH0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/projects/index.ts\n");

/***/ }),

/***/ "./src/settings/index.ts":
/*!*******************************!*\
  !*** ./src/settings/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"settings\": function() { return /* binding */ settings; }\n/* harmony export */ });\nconst settings = {\n  template: \"../front/src/templates\",\n  API: \"../api\",\n  settings: {\n    app: \"./src/settings/apps\"\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvaW5kZXgudHM/MWQ4YSJdLCJuYW1lcyI6WyJzZXR0aW5ncyIsInRlbXBsYXRlIiwiQVBJIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsUUFBUSxHQUFHO0FBQ3BCQyxVQUFRLEVBQUUsd0JBRFU7QUFFcEJDLEtBQUcsRUFBRSxRQUZlO0FBR3BCRixVQUFRLEVBQUU7QUFDTkcsT0FBRyxFQUFFO0FBREM7QUFIVSxDQUFqQiIsImZpbGUiOiIuL3NyYy9zZXR0aW5ncy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICB0ZW1wbGF0ZTogXCIuLi9mcm9udC9zcmMvdGVtcGxhdGVzXCIsXG4gICAgQVBJOiBcIi4uL2FwaVwiLFxuICAgIHNldHRpbmdzOiB7XG4gICAgICAgIGFwcDogXCIuL3NyYy9zZXR0aW5ncy9hcHBzXCJcbiAgICB9XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/settings/index.ts\n");

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