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

/***/ "./src/pages/analytics.tsx":
/*!*********************************!*\
  !*** ./src/pages/analytics.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Analytics; }\n/* harmony export */ });\n/* harmony import */ var _Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_x_charts_BarChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/x-charts/BarChart */ \"./node_modules/@mui/x-charts/esm/BarChart/index.js\");\n/* harmony import */ var _components_shared_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/shared/AppLayout */ \"./src/components/shared/AppLayout/index.tsx\");\n/* harmony import */ var _util_auth_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @util/auth/hooks */ \"./src/util/auth/hooks.ts\");\n/* harmony import */ var _util_data_dataTransfer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @util/data/dataTransfer */ \"./src/util/data/dataTransfer.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/gabychoi/Desktop/cs32/term-project-ldhines-ocedeno-felia-cgchoi/hours-frontend/src/pages/analytics.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Analytics() {\n  _s();\n\n  var _this = this;\n\n  var _useAuth = (0,_util_auth_hooks__WEBPACK_IMPORTED_MODULE_4__.useAuth)(),\n      currentUser = _useAuth.currentUser,\n      isAuthenticated = _useAuth.isAuthenticated;\n\n  var isTA = isAuthenticated && currentUser && currentUser.coursePermissions && Object.keys(currentUser.coursePermissions).length > 0;\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var fetchDataAndUpdate = /*#__PURE__*/function () {\n      var _ref = (0,_Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var dataFromFirestore, processedData;\n        return _Users_gabychoi_Desktop_cs32_term_project_ldhines_ocedeno_felia_cgchoi_hours_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return _util_data_dataTransfer__WEBPACK_IMPORTED_MODULE_5__.default.fetchFirebaseData();\n\n              case 3:\n                dataFromFirestore = _context.sent;\n                _context.next = 6;\n                return _util_data_dataTransfer__WEBPACK_IMPORTED_MODULE_5__.default.sendJSONtoBackend(\"url\", dataFromFirestore);\n\n              case 6:\n                _context.next = 8;\n                return _util_data_dataTransfer__WEBPACK_IMPORTED_MODULE_5__.default.fetchJSONfromBackend;\n\n              case 8:\n                processedData = _context.sent;\n                _context.next = 14;\n                break;\n\n              case 11:\n                _context.prev = 11;\n                _context.t0 = _context[\"catch\"](0);\n                console.error(\"Error - unable to retrieve data: \", _context.t0);\n\n              case 14:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 11]]);\n      }));\n\n      return function fetchDataAndUpdate() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchDataAndUpdate();\n  }, []); // empty array -> updates whenever analytics page is opened\n\n  var rows = [createData(\"Rattytoullie\", 159, 24), createData(\"AndyBot\", 237, 37), createData(\"Pong\", 262, 24), createData(\"TicTacToe\", 305, 67), createData(\"Fruit Ninja\", 356, 49), createData(\"Cartoon\", 159, 55), createData(\"DoodleJump\", 222, 40), createData(\"Tetris\", 398, 72), createData(\"Final Project\", 304, 86)];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_shared_AppLayout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    maxWidth: false,\n    children: [!isTA && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n      mb: 2,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {\n        mt: 18,\n        spacing: 2,\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n          variant: \"h6\",\n          mb: 2,\n          children: \"You do not currently have access to any course analytics.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }, this), isTA && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n      mb: 2,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Paper, {\n        sx: {\n          overflow: \"hidden\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n          width: \"100%\",\n          p: [2, null, 3],\n          color: \"#fff\",\n          position: \"relative\",\n          sx: {\n            bgcolor: \"#2196f3\"\n          } //light blue\n          ,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n            height: 120\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 17\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {\n              direction: \"row\",\n              spacing: 0.5,\n              alignItems: \"center\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                variant: \"body1\",\n                noWrap: true,\n                children: \"cs0150: Introduction to Object-Oriented Programming and Computer Science\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 19\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Stack, {\n              direction: \"row\",\n              spacing: 1,\n              alignItems: \"center\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                variant: \"h4\",\n                fontWeight: 600,\n                children: \"Analytics\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 85,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 15\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TableContainer, {\n          component: _mui_material__WEBPACK_IMPORTED_MODULE_7__.Paper,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Table, {\n            sx: {\n              minWidth: 650\n            },\n            \"aria-label\": \"table\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TableHead, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TableRow, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TableCell, {\n                  children: \"Project Name\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 95,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TableCell, {\n                  align: \"right\",\n                  children: \"Number of Visits\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TableCell, {\n                  align: \"right\",\n                  children: \"Average Wait Time\\xA0(min)\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 97,\n                  columnNumber: 23\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 94,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 93,\n              columnNumber: 19\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TableBody, {\n              children: rows.map(function (row) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TableRow, {\n                  sx: {\n                    \"&:last-child td, &:last-child th\": {\n                      border: 0\n                    }\n                  },\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TableCell, {\n                    component: \"th\",\n                    scope: \"row\",\n                    children: row.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 108,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TableCell, {\n                    align: \"right\",\n                    children: row.visits\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 111,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TableCell, {\n                    align: \"right\",\n                    children: row.waittime\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 112,\n                    columnNumber: 25\n                  }, _this)]\n                }, row.name, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 102,\n                  columnNumber: 23\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 15\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_x_charts_BarChart__WEBPACK_IMPORTED_MODULE_8__.BarChart, {\n          xAxis: [{\n            scaleType: \"band\",\n            data: [\"Rattytoullie\", \"AndyBot\", \"Pong\", \"TicTacToe\", \"Fruit Ninja\", \"Cartoon\", \"DoodleJump\", \"Tetris\", \"Final Project\"]\n          }],\n          series: [{\n            data: [4, 3, 5, 6, 4, 6, 7, 9, 10],\n            color: \"#673ab7\"\n          }],\n          width: 1000,\n          height: 300\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 7\n  }, this);\n\n  function createData(name, visits, waittime) {\n    return {\n      name: name,\n      visits: visits,\n      waittime: waittime\n    };\n  }\n}\n\n_s(Analytics, \"2ySKng7Du8bOcyrETyD2ffs54ZU=\", false, function () {\n  return [_util_auth_hooks__WEBPACK_IMPORTED_MODULE_4__.useAuth];\n});\n\n_c = Analytics;\n\nvar _c;\n\n$RefreshReg$(_c, \"Analytics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBQUE7QUFBQSxnQkF4QkYsZUFtREUsOERBQUMsNERBQUQ7QUFDRSxlQUFLLEVBQUUsQ0FDTDtBQUNFRyxZQUFBQSxTQUFTLEVBQUUsTUFEYjtBQUVFQyxZQUFBQSxJQUFJLEVBQUUsQ0FDSixjQURJLEVBRUosU0FGSSxFQUdKLE1BSEksRUFJSixXQUpJLEVBS0osYUFMSSxFQU1KLFNBTkksRUFPSixZQVBJLEVBUUosUUFSSSxFQVNKLGVBVEk7QUFGUixXQURLLENBRFQ7QUFpQkUsZ0JBQU0sRUFBRSxDQUNOO0FBQUVBLFlBQUFBLElBQUksRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEVBQXpCLENBQVI7QUFBc0NDLFlBQUFBLEtBQUssRUFBRTtBQUE3QyxXQURNLENBakJWO0FBb0JFLGVBQUssRUFBRSxJQXBCVDtBQXFCRSxnQkFBTSxFQUFFO0FBckJWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7O0FBa0dBLFdBQVNaLFVBQVQsQ0FDRU8sSUFERixFQUVFQyxNQUZGLEVBR0VDLFFBSEYsRUFJRTtBQUNBLFdBQU87QUFBRUYsTUFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFDLE1BQUFBLE1BQU0sRUFBTkEsTUFBUjtBQUFnQkMsTUFBQUEsUUFBUSxFQUFSQTtBQUFoQixLQUFQO0FBQ0Q7QUFDSjs7R0E3SXVCMUI7VUFFbUJGOzs7S0FGbkJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hbmFseXRpY3MudHN4PzA1ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0JveCwgRGl2aWRlciwgUGFwZXIsIEdyaWQsIFN0YWNrLCBUeXBvZ3JhcGh5LCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGUsIFRhYmxlUm93LCBUYWJsZUNvbnRhaW5lciwgVGFibGVIZWFkfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQmFyQ2hhcnQgfSBmcm9tIFwiQG11aS94LWNoYXJ0cy9CYXJDaGFydFwiO1xuaW1wb3J0IHt1c2VRdWV1ZXN9IGZyb20gXCJAdXRpbC9xdWV1ZS9ob29rc1wiO1xuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkL0FwcExheW91dFwiO1xuaW1wb3J0IFF1ZXVlQ2FyZCBmcm9tIFwiQGNvbXBvbmVudHMvaG9tZS9RdWV1ZUNhcmRcIjtcbmltcG9ydCBDcmVhdGVRdWV1ZURpYWxvZyBmcm9tIFwiQGNvbXBvbmVudHMvaG9tZS9DcmVhdGVRdWV1ZURpYWxvZ1wiO1xuaW1wb3J0IHt1c2VBdXRofSBmcm9tIFwiQHV0aWwvYXV0aC9ob29rc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkL0J1dHRvblwiO1xuaW1wb3J0IEFkZENpcmNsZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkQ2lyY2xlXCI7XG5pbXBvcnQgRGF0YVRyYW5zZmVyQVBJIGZyb20gXCJAdXRpbC9kYXRhL2RhdGFUcmFuc2ZlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmFseXRpY3MoKSB7XG5cbiAgICBjb25zdCB7Y3VycmVudFVzZXIsIGlzQXV0aGVudGljYXRlZH0gPSB1c2VBdXRoKCk7XG4gICAgY29uc3QgaXNUQSA9IGlzQXV0aGVudGljYXRlZCAmJiBjdXJyZW50VXNlciAmJiBjdXJyZW50VXNlci5jb3Vyc2VQZXJtaXNzaW9ucyAmJiAoT2JqZWN0LmtleXMoY3VycmVudFVzZXIuY291cnNlUGVybWlzc2lvbnMpLmxlbmd0aCA+IDApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGZldGNoRGF0YUFuZFVwZGF0ZSA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGRhdGFGcm9tRmlyZXN0b3JlID0gYXdhaXQgRGF0YVRyYW5zZmVyQVBJLmZldGNoRmlyZWJhc2VEYXRhKCk7XG5cbiAgICAgICAgICBhd2FpdCBEYXRhVHJhbnNmZXJBUEkuc2VuZEpTT050b0JhY2tlbmQoXCJ1cmxcIiwgZGF0YUZyb21GaXJlc3RvcmUpO1xuXG4gICAgICAgICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGF3YWl0IERhdGFUcmFuc2ZlckFQSS5mZXRjaEpTT05mcm9tQmFja2VuZDtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgLSB1bmFibGUgdG8gcmV0cmlldmUgZGF0YTogXCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gZmV0Y2ggZGF0YSBmcm9tIGZpcmVzdG9yZVxuXG4gICAgfTsgXG4gICAgZmV0Y2hEYXRhQW5kVXBkYXRlKCk7XG4gIH0sIFtdKTsgLy8gZW1wdHkgYXJyYXkgLT4gdXBkYXRlcyB3aGVuZXZlciBhbmFseXRpY3MgcGFnZSBpcyBvcGVuZWRcblxuICAgIGNvbnN0IHJvd3MgPSBbXG4gICAgICBjcmVhdGVEYXRhKFwiUmF0dHl0b3VsbGllXCIsIDE1OSwgMjQpLFxuICAgICAgY3JlYXRlRGF0YShcIkFuZHlCb3RcIiwgMjM3LCAzNyksXG4gICAgICBjcmVhdGVEYXRhKFwiUG9uZ1wiLCAyNjIsIDI0KSxcbiAgICAgIGNyZWF0ZURhdGEoXCJUaWNUYWNUb2VcIiwgMzA1LCA2NyksXG4gICAgICBjcmVhdGVEYXRhKFwiRnJ1aXQgTmluamFcIiwgMzU2LCA0OSksXG4gICAgICBjcmVhdGVEYXRhKFwiQ2FydG9vblwiLCAxNTksIDU1KSxcbiAgICAgIGNyZWF0ZURhdGEoXCJEb29kbGVKdW1wXCIsIDIyMiwgNDApLFxuICAgICAgY3JlYXRlRGF0YShcIlRldHJpc1wiLCAzOTgsIDcyKSxcbiAgICAgIGNyZWF0ZURhdGEoXCJGaW5hbCBQcm9qZWN0XCIsIDMwNCwgODYpXG4gICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8QXBwTGF5b3V0IG1heFdpZHRoPXtmYWxzZX0+XG4gICAgICAgIHshaXNUQSAmJiAoXG4gICAgICAgICAgPEJveCBtYj17Mn0+XG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgbXQ9ezE4fVxuICAgICAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBtYj17Mn0+XG4gICAgICAgICAgICAgICAgWW91IGRvIG5vdCBjdXJyZW50bHkgaGF2ZSBhY2Nlc3MgdG8gYW55IGNvdXJzZSBhbmFseXRpY3MuXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICAgIHtpc1RBICYmIChcbiAgICAgICAgICA8Qm94IG1iPXsyfT5cbiAgICAgICAgICAgIDxQYXBlciBzeD17eyBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fT5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgcD17WzIsIG51bGwsIDNdfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAgc3g9e3sgYmdjb2xvcjogXCIjMjE5NmYzXCIgfX0gLy9saWdodCBibHVlXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm94IGhlaWdodD17MTIwfT48L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezAuNX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBub1dyYXA+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjczAxNTA6IEludHJvZHVjdGlvbiB0byBPYmplY3QtT3JpZW50ZWQgUHJvZ3JhbW1pbmcgYW5kIENvbXB1dGVyIFNjaWVuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGZvbnRXZWlnaHQ9ezYwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgQW5hbHl0aWNzXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICAgICAgICAgICAgPFRhYmxlIHN4PXt7IG1pbldpZHRoOiA2NTAgfX0gYXJpYS1sYWJlbD1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Qcm9qZWN0IE5hbWU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5OdW1iZXIgb2YgVmlzaXRzPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+QXZlcmFnZSBXYWl0IFRpbWUmbmJzcDsobWluKTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvd1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyb3cubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiJjpsYXN0LWNoaWxkIHRkLCAmOmxhc3QtY2hpbGQgdGhcIjogeyBib3JkZXI6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy52aXNpdHN9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LndhaXR0aW1lfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPEJhckNoYXJ0XG4gICAgICAgICAgICAgICAgeEF4aXM9e1tcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVUeXBlOiBcImJhbmRcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgICAgICAgIFwiUmF0dHl0b3VsbGllXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJBbmR5Qm90XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJQb25nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJUaWNUYWNUb2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIkZydWl0IE5pbmphXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJDYXJ0b29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJEb29kbGVKdW1wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJUZXRyaXNcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIkZpbmFsIFByb2plY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBzZXJpZXM9e1tcbiAgICAgICAgICAgICAgICAgIHsgZGF0YTogWzQsIDMsIDUsIDYsIDQsIDYsIDcsIDksIDEwXSwgY29sb3I6IFwiIzY3M2FiN1wiIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICB3aWR0aD17MTAwMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0FwcExheW91dD5cbiAgICApO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGF0YShcbiAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgIHZpc2l0czogbnVtYmVyLFxuICAgICAgd2FpdHRpbWU6IG51bWJlcixcbiAgICApIHtcbiAgICAgIHJldHVybiB7IG5hbWUsIHZpc2l0cywgd2FpdHRpbWUgfTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiQm94IiwiUGFwZXIiLCJTdGFjayIsIlR5cG9ncmFwaHkiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZSIsIlRhYmxlUm93IiwiVGFibGVDb250YWluZXIiLCJUYWJsZUhlYWQiLCJCYXJDaGFydCIsIkFwcExheW91dCIsInVzZUF1dGgiLCJEYXRhVHJhbnNmZXJBUEkiLCJBbmFseXRpY3MiLCJjdXJyZW50VXNlciIsImlzQXV0aGVudGljYXRlZCIsImlzVEEiLCJjb3Vyc2VQZXJtaXNzaW9ucyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJmZXRjaERhdGFBbmRVcGRhdGUiLCJmZXRjaEZpcmViYXNlRGF0YSIsImRhdGFGcm9tRmlyZXN0b3JlIiwic2VuZEpTT050b0JhY2tlbmQiLCJmZXRjaEpTT05mcm9tQmFja2VuZCIsInByb2Nlc3NlZERhdGEiLCJjb25zb2xlIiwiZXJyb3IiLCJyb3dzIiwiY3JlYXRlRGF0YSIsIm92ZXJmbG93IiwiYmdjb2xvciIsIm1pbldpZHRoIiwibWFwIiwicm93IiwiYm9yZGVyIiwibmFtZSIsInZpc2l0cyIsIndhaXR0aW1lIiwic2NhbGVUeXBlIiwiZGF0YSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/analytics.tsx\n");

/***/ })

});