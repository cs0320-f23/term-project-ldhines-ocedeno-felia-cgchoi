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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _util_firebase_firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @util/firebase/firebase_app */ \"./src/util/firebase/firebase_app.ts\");\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n // fetch data from firestore\n\nfunction fetchFirebaseData() {\n  return _fetchFirebaseData.apply(this, arguments);\n} // convert data to json, send to java backend\n\n\nfunction _fetchFirebaseData() {\n  _fetchFirebaseData = (0,_Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var db, courseCollection, docSnapshot, data;\n    return _Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)(_util_firebase_firebase_app__WEBPACK_IMPORTED_MODULE_3__.default);\n            courseCollection = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"courses\");\n            _context.next = 5;\n            return (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(courseCollection);\n\n          case 5:\n            docSnapshot = _context.sent;\n            data = docSnapshot.docs.map(function (doc) {\n              return _objectSpread({\n                id: doc.id\n              }, doc.data());\n            });\n            return _context.abrupt(\"return\", data);\n\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](0);\n            console.error(\"Error fetching data from Firestore: \", _context.t0);\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 10]]);\n  }));\n  return _fetchFirebaseData.apply(this, arguments);\n}\n\nfunction sendJSONtoBackend(_x, _x2) {\n  return _sendJSONtoBackend.apply(this, arguments);\n}\n\nfunction _sendJSONtoBackend() {\n  _sendJSONtoBackend = (0,_Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(backendUrl, data) {\n    var response;\n    return _Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return fetch(backendUrl, {\n              method: 'POST',\n              headers: {\n                'Content-Type': 'application/json'\n              },\n              body: JSON.stringify(data)\n            });\n\n          case 3:\n            response = _context2.sent;\n\n            if (response.ok) {\n              _context2.next = 6;\n              break;\n            }\n\n            throw new Error(\"HTTP error! Status: \".concat(response.status));\n\n          case 6:\n            _context2.next = 11;\n            break;\n\n          case 8:\n            _context2.prev = 8;\n            _context2.t0 = _context2[\"catch\"](0);\n            console.error(\"Error sending data to backend:\", _context2.t0);\n\n          case 11:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 8]]);\n  }));\n  return _sendJSONtoBackend.apply(this, arguments);\n}\n\nfunction fetchJSONfromBackend(_x3) {\n  return _fetchJSONfromBackend.apply(this, arguments);\n}\n\nfunction _fetchJSONfromBackend() {\n  _fetchJSONfromBackend = (0,_Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(backendUrl) {\n    var response, contentType, data;\n    return _Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return fetch(backendUrl, {\n              method: 'GET',\n              headers: {\n                'Content-Type': 'application/json'\n              }\n            });\n\n          case 3:\n            response = _context3.sent;\n            console.log(response.text)();\n\n            if (response.ok) {\n              _context3.next = 7;\n              break;\n            }\n\n            throw new Error(\"HTTP error - status: \".concat(response.status));\n\n          case 7:\n            contentType = response.headers.get(\"content-type\");\n\n            if (!(contentType && contentType.indexOf(\"application/json\") !== -1)) {\n              _context3.next = 15;\n              break;\n            }\n\n            _context3.next = 11;\n            return response.json();\n\n          case 11:\n            data = _context3.sent;\n            return _context3.abrupt(\"return\", data);\n\n          case 15:\n            throw new Error(\"Not a JSON response\");\n\n          case 16:\n            _context3.next = 21;\n            break;\n\n          case 18:\n            _context3.prev = 18;\n            _context3.t0 = _context3[\"catch\"](0);\n            console.error(\"Error fetching data from backend:\", _context3.t0);\n\n          case 21:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 18]]);\n  }));\n  return _fetchJSONfromBackend.apply(this, arguments);\n}\n\nvar DataTransferAPI = {\n  fetchFirebaseData: fetchFirebaseData,\n  sendJSONtoBackend: sendJSONtoBackend,\n  fetchJSONfromBackend: fetchJSONfromBackend\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataTransferAPI);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFSLENBQWMsbUNBQWQ7O0FBckJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBK0JJLElBQU1vQixlQUFlLEdBQUc7QUFDcEI5QixFQUFBQSxpQkFBaUIsRUFBakJBLGlCQURvQjtBQUVwQlcsRUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFGb0I7QUFHcEJZLEVBQUFBLG9CQUFvQixFQUFwQkE7QUFIb0IsQ0FBeEI7QUFNQSwrREFBZU8sZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXRpbC9kYXRhL2RhdGFUcmFuc2Zlci50cz9kNDJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZUFwcCBmcm9tIFwiQHV0aWwvZmlyZWJhc2UvZmlyZWJhc2VfYXBwXCI7XG5pbXBvcnQge1RpbWVzdGFtcCwgZG9jLCBnZXREb2MsIGdldERvY3MsIHVwZGF0ZURvYywgZ2V0RmlyZXN0b3JlLCBjb2xsZWN0aW9ufSBmcm9tIFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG4vLyBmZXRjaCBkYXRhIGZyb20gZmlyZXN0b3JlXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRmlyZWJhc2VEYXRhKCkgOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGZpcmViYXNlQXBwKTtcbiAgICAgICAgY29uc3QgY291cnNlQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24oZGIsIFwiY291cnNlc1wiKTtcbiAgICAgICAgY29uc3QgZG9jU25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvdXJzZUNvbGxlY3Rpb24pO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBkb2NTbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4gKHtcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgICAgICAuLi5kb2MuZGF0YSgpXG4gICAgICAgIH0pKTtcblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YSBmcm9tIEZpcmVzdG9yZTogXCIsIGVycm9yKTtcbiAgICB9XG4gICAgfVxuXG4gICAgLy8gY29udmVydCBkYXRhIHRvIGpzb24sIHNlbmQgdG8gamF2YSBiYWNrZW5kXG5hc3luYyBmdW5jdGlvbiBzZW5kSlNPTnRvQmFja2VuZChiYWNrZW5kVXJsOiBzdHJpbmcsIGRhdGE6IGFueSkgOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGJhY2tlbmRVcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH0gXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNlbmRpbmcgZGF0YSB0byBiYWNrZW5kOlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoSlNPTmZyb21CYWNrZW5kKGJhY2tlbmRVcmw6IHN0cmluZykgOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYmFja2VuZFVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJywgXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS50ZXh0KSgpXG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yIC0gc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpO1xuICAgICAgICBpZiAoY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5kZXhPZihcImFwcGxpY2F0aW9uL2pzb25cIikgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyBcbiAgICAgICAgICAgIHJldHVybiBkYXRhOyBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBhIEpTT04gcmVzcG9uc2VcIik7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YSBmcm9tIGJhY2tlbmQ6XCIsIGVycm9yKTtcbiAgICB9XG5cbiAgICAvLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgXG4gICAgLy8gICAgIHJldHVybiBkYXRhOyBcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YSBmcm9tIGJhY2tlbmQ6XCIsIGVycm9yKTtcbiAgICAvLyB9XG59XG5cbiAgICBjb25zdCBEYXRhVHJhbnNmZXJBUEkgPSB7XG4gICAgICAgIGZldGNoRmlyZWJhc2VEYXRhLFxuICAgICAgICBzZW5kSlNPTnRvQmFja2VuZCxcbiAgICAgICAgZmV0Y2hKU09OZnJvbUJhY2tlbmRcbiAgICB9O1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IERhdGFUcmFuc2ZlckFQSTtcblxuXG4iXSwibmFtZXMiOlsiZmlyZWJhc2VBcHAiLCJnZXREb2NzIiwiZ2V0RmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImZldGNoRmlyZWJhc2VEYXRhIiwiZGIiLCJjb3Vyc2VDb2xsZWN0aW9uIiwiZG9jU25hcHNob3QiLCJkYXRhIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiY29uc29sZSIsImVycm9yIiwic2VuZEpTT050b0JhY2tlbmQiLCJiYWNrZW5kVXJsIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJmZXRjaEpTT05mcm9tQmFja2VuZCIsImxvZyIsInRleHQiLCJjb250ZW50VHlwZSIsImdldCIsImluZGV4T2YiLCJqc29uIiwiRGF0YVRyYW5zZmVyQVBJIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/util/data/dataTransfer.ts\n");

/***/ })

});