"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/analytics",{

/***/ "./src/util/data/dataTransfer.ts":
/*!***************************************!*\
  !*** ./src/util/data/dataTransfer.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _util_firebase_firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/firebase/firebase_app */ \"./src/util/firebase/firebase_app.ts\");\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n // fetch data from firestore\n\nfunction fetchFirebaseData() {\n  return _fetchFirebaseData.apply(this, arguments);\n} // convert data to json, send to java backend\n\n\nfunction _fetchFirebaseData() {\n  _fetchFirebaseData = (0,_Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var db, courseCollection, docSnapshot, data;\n    return _Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)(_util_firebase_firebase_app__WEBPACK_IMPORTED_MODULE_3__.default);\n            courseCollection = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"courses\");\n            _context.next = 5;\n            return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(courseCollection);\n\n          case 5:\n            docSnapshot = _context.sent;\n            data = docSnapshot.docs.map(function (doc) {\n              return _objectSpread({\n                id: doc.id\n              }, doc.data());\n            });\n            return _context.abrupt(\"return\", data);\n\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](0);\n            console.error(\"Error fetching data from Firestore: \", _context.t0);\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 10]]);\n  }));\n  return _fetchFirebaseData.apply(this, arguments);\n}\n\nfunction sendJSONtoBackend(_x, _x2) {\n  return _sendJSONtoBackend.apply(this, arguments);\n}\n\nfunction _sendJSONtoBackend() {\n  _sendJSONtoBackend = (0,_Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(backendUrl, data) {\n    var response;\n    return _Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return fetch(backendUrl, {\n              method: 'POST',\n              headers: {\n                'Content-Type': 'application/json'\n              },\n              body: JSON.stringify(data)\n            });\n\n          case 3:\n            response = _context2.sent;\n\n            if (response.ok) {\n              _context2.next = 6;\n              break;\n            }\n\n            throw new Error(\"HTTP error! Status: \".concat(response.status));\n\n          case 6:\n            _context2.next = 11;\n            break;\n\n          case 8:\n            _context2.prev = 8;\n            _context2.t0 = _context2[\"catch\"](0);\n            console.error(\"Error sending data to backend:\", _context2.t0);\n\n          case 11:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 8]]);\n  }));\n  return _sendJSONtoBackend.apply(this, arguments);\n}\n\nfunction fetchJSONfromBackend(_x3) {\n  return _fetchJSONfromBackend.apply(this, arguments);\n}\n\nfunction _fetchJSONfromBackend() {\n  _fetchJSONfromBackend = (0,_Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(backendUrl) {\n    var response, contentType, data;\n    return _Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return fetch(backendUrl, {\n              method: 'GET',\n              headers: {\n                'Content-Type': 'application/json'\n              }\n            });\n\n          case 3:\n            response = _context3.sent;\n            console.log(response.text());\n\n            if (response.ok) {\n              _context3.next = 7;\n              break;\n            }\n\n            throw new Error(\"HTTP error - status: \".concat(response.status));\n\n          case 7:\n            contentType = response.headers.get(\"content-type\");\n\n            if (!(contentType && contentType.indexOf(\"application/json\") !== -1)) {\n              _context3.next = 15;\n              break;\n            }\n\n            _context3.next = 11;\n            return response.json();\n\n          case 11:\n            data = _context3.sent;\n            return _context3.abrupt(\"return\", data);\n\n          case 15:\n            throw new Error(\"Not a JSON response\");\n\n          case 16:\n            _context3.next = 21;\n            break;\n\n          case 18:\n            _context3.prev = 18;\n            _context3.t0 = _context3[\"catch\"](0);\n            console.error(\"Error fetching data from backend:\", _context3.t0);\n\n          case 21:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 18]]);\n  }));\n  return _fetchJSONfromBackend.apply(this, arguments);\n}\n\nvar DataTransferAPI = {\n  fetchFirebaseData: fetchFirebaseData,\n  sendJSONtoBackend: sendJSONtoBackend,\n  fetchJSONfromBackend: fetchJSONfromBackend\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataTransferAPI);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsS0FBUixDQUFjLG1DQUFkOztBQXJCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQStCSSxJQUFNb0IsZUFBZSxHQUFHO0FBQ3BCOUIsRUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFEb0I7QUFFcEJXLEVBQUFBLGlCQUFpQixFQUFqQkEsaUJBRm9CO0FBR3BCWSxFQUFBQSxvQkFBb0IsRUFBcEJBO0FBSG9CLENBQXhCO0FBTUEsK0RBQWVPLGVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWwvZGF0YS9kYXRhVHJhbnNmZXIudHM/ZDQyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2VBcHAgZnJvbSBcIkB1dGlsL2ZpcmViYXNlL2ZpcmViYXNlX2FwcFwiO1xuaW1wb3J0IHtUaW1lc3RhbXAsIGRvYywgZ2V0RG9jLCBnZXREb2NzLCB1cGRhdGVEb2MsIGdldEZpcmVzdG9yZSwgY29sbGVjdGlvbn0gZnJvbSBcIkBmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuLy8gZmV0Y2ggZGF0YSBmcm9tIGZpcmVzdG9yZVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEZpcmViYXNlRGF0YSgpIDogUHJvbWlzZTxhbnk+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkYiA9IGdldEZpcmVzdG9yZShmaXJlYmFzZUFwcCk7XG4gICAgICAgIGNvbnN0IGNvdXJzZUNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uKGRiLCBcImNvdXJzZXNcIik7XG4gICAgICAgIGNvbnN0IGRvY1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb3Vyc2VDb2xsZWN0aW9uKTtcblxuICAgICAgICBjb25zdCBkYXRhID0gZG9jU25hcHNob3QuZG9jcy5tYXAoZG9jID0+ICh7XG4gICAgICAgICAgICBpZDogZG9jLmlkLFxuICAgICAgICAgICAgLi4uZG9jLmRhdGEoKVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGEgZnJvbSBGaXJlc3RvcmU6IFwiLCBlcnJvcik7XG4gICAgfVxuICAgIH1cblxuICAgIC8vIGNvbnZlcnQgZGF0YSB0byBqc29uLCBzZW5kIHRvIGphdmEgYmFja2VuZFxuYXN5bmMgZnVuY3Rpb24gc2VuZEpTT050b0JhY2tlbmQoYmFja2VuZFVybDogc3RyaW5nLCBkYXRhOiBhbnkpIDogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChiYWNrZW5kVXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICB9IFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzZW5kaW5nIGRhdGEgdG8gYmFja2VuZDpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEpTT05mcm9tQmFja2VuZChiYWNrZW5kVXJsOiBzdHJpbmcpIDogUHJvbWlzZTxhbnk+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGJhY2tlbmRVcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsIFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UudGV4dCgpKVxuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciAtIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKTtcbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluZGV4T2YoXCJhcHBsaWNhdGlvbi9qc29uXCIpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgXG4gICAgICAgICAgICByZXR1cm4gZGF0YTsgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSBKU09OIHJlc3BvbnNlXCIpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGEgZnJvbSBiYWNrZW5kOlwiLCBlcnJvcik7XG4gICAgfVxuXG4gICAgLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7IFxuICAgIC8vICAgICByZXR1cm4gZGF0YTsgXG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGEgZnJvbSBiYWNrZW5kOlwiLCBlcnJvcik7XG4gICAgLy8gfVxufVxuXG4gICAgY29uc3QgRGF0YVRyYW5zZmVyQVBJID0ge1xuICAgICAgICBmZXRjaEZpcmViYXNlRGF0YSxcbiAgICAgICAgc2VuZEpTT050b0JhY2tlbmQsXG4gICAgICAgIGZldGNoSlNPTmZyb21CYWNrZW5kXG4gICAgfTtcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCBEYXRhVHJhbnNmZXJBUEk7XG5cblxuIl0sIm5hbWVzIjpbImZpcmViYXNlQXBwIiwiZ2V0RG9jcyIsImdldEZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJmZXRjaEZpcmViYXNlRGF0YSIsImRiIiwiY291cnNlQ29sbGVjdGlvbiIsImRvY1NuYXBzaG90IiwiZGF0YSIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZCIsImNvbnNvbGUiLCJlcnJvciIsInNlbmRKU09OdG9CYWNrZW5kIiwiYmFja2VuZFVybCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZmV0Y2hKU09OZnJvbUJhY2tlbmQiLCJsb2ciLCJ0ZXh0IiwiY29udGVudFR5cGUiLCJnZXQiLCJpbmRleE9mIiwianNvbiIsIkRhdGFUcmFuc2ZlckFQSSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/util/data/dataTransfer.ts\n");

/***/ })

});