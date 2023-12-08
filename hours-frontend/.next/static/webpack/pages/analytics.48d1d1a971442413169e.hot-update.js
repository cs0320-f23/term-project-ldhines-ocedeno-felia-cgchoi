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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Analytics; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_x_charts_BarChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-charts/BarChart */ \"./node_modules/@mui/x-charts/esm/BarChart/index.js\");\n/* harmony import */ var _components_shared_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/shared/AppLayout */ \"./src/components/shared/AppLayout/index.tsx\");\n/* harmony import */ var _util_auth_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/auth/hooks */ \"./src/util/auth/hooks.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/francescaelia/Documents/CS32/term-project-ldhines-ocedeno-felia-cgchoi/hours-frontend/src/pages/analytics.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Analytics() {\n  _s();\n\n  var _this = this;\n\n  var _useAuth = (0,_util_auth_hooks__WEBPACK_IMPORTED_MODULE_2__.useAuth)(),\n      currentUser = _useAuth.currentUser,\n      isAuthenticated = _useAuth.isAuthenticated;\n\n  var isTA = isAuthenticated && currentUser && currentUser.coursePermissions && Object.keys(currentUser.coursePermissions).length > 0;\n  var rows = [createData(\"Rattytoullie\", 159, 6.0, 24, 4.0), createData(\"AndyBot\", 237, 9.0, 37, 4.3), createData(\"Pong\", 262, 16.0, 24, 6.0), createData(\"TicTacToe\", 305, 3.7, 67, 4.3), createData(\"FruitNinja\", 356, 16.0, 49, 3.9)];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_shared_AppLayout__WEBPACK_IMPORTED_MODULE_1__.default, {\n    maxWidth: false,\n    children: [!isTA && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      mb: 2,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n        mt: 18,\n        spacing: 2,\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n          variant: \"h6\",\n          mb: 2,\n          children: \"You do not currently have access to any course analytics.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }, this), isTA && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      mb: 2,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper, {\n        sx: {\n          overflow: \"hidden\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n          width: \"100%\",\n          p: [2, null, 3],\n          color: \"#fff\",\n          position: \"relative\",\n          sx: {\n            bgcolor: \"#2196f3\"\n          } //light blue\n          ,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            height: 120\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 17\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n              direction: \"row\",\n              spacing: 0.5,\n              alignItems: \"center\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"body1\",\n                noWrap: true,\n                children: \"cs0150: Introduction to Object-Oriented Programming and Computer Science\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 19\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n              direction: \"row\",\n              spacing: 1,\n              alignItems: \"center\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"h4\",\n                fontWeight: 600,\n                children: \"Analytics\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 15\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableContainer, {\n          component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Table, {\n            sx: {\n              minWidth: 650\n            },\n            \"aria-label\": \"table\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableHead, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  children: \"Dessert (100g serving)\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 71,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  align: \"right\",\n                  children: \"Calories\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 72,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  align: \"right\",\n                  children: \"Fat\\xA0(g)\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 73,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  align: \"right\",\n                  children: \"Carbs\\xA0(g)\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  align: \"right\",\n                  children: \"Protein\\xA0(g)\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 75,\n                  columnNumber: 23\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 19\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableBody, {\n              children: rows.map(function (row) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                  sx: {\n                    \"&:last-child td, &:last-child th\": {\n                      border: 0\n                    }\n                  },\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    component: \"th\",\n                    scope: \"row\",\n                    children: row.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 86,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: row.calories\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 89,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: row.fat\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 90,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: row.carbs\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 91,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: row.protein\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 92,\n                    columnNumber: 25\n                  }, _this)]\n                }, row.name, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 80,\n                  columnNumber: 23\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 15\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_x_charts_BarChart__WEBPACK_IMPORTED_MODULE_5__.BarChart, {\n          xAxis: [{\n            scaleType: \"band\",\n            data: [\"Rattytoullie\", \"AndyBot\", \"Pong\", \"TicTacToe\", \"Fruit Ninja\", \"Cartoon\", \"DoodleJump\", \"Tetris\", \"Final Project\"]\n          }],\n          series: [{\n            data: [4, 3, 5, 6, 4, 6, 7, 9, 10],\n            color: \"#673ab7\"\n          }],\n          width: 1000,\n          height: 300\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 7\n  }, this);\n\n  function createData(name, calories, fat, carbs, protein) {\n    return {\n      name: name,\n      calories: calories,\n      fat: fat,\n      carbs: carbs,\n      protein: protein\n    };\n  } // const rows = [\n  //   createData(\"Frozen yoghurt\", 159, 6.0, 24, 4.0),\n  //   createData(\"Ice cream sandwich\", 237, 9.0, 37, 4.3),\n  //   createData(\"Eclair\", 262, 16.0, 24, 6.0),\n  //   createData(\"Cupcake\", 305, 3.7, 67, 4.3),\n  //   createData(\"Gingerbread\", 356, 16.0, 49, 3.9),\n  // ];\n  // export default function BasicTable() {\n  //   return (\n  //     <TableContainer component={Paper}>\n  //       <Table sx={{ minWidth: 650 }} aria-label=\"simple table\">\n  //         <TableHead>\n  //           <TableRow>\n  //             <TableCell>Dessert (100g serving)</TableCell>\n  //             <TableCell align=\"right\">Calories</TableCell>\n  //             <TableCell align=\"right\">Fat&nbsp;(g)</TableCell>\n  //             <TableCell align=\"right\">Carbs&nbsp;(g)</TableCell>\n  //             <TableCell align=\"right\">Protein&nbsp;(g)</TableCell>\n  //           </TableRow>\n  //         </TableHead>\n  //         <TableBody>\n  //           {rows.map((row) => (\n  //             <TableRow\n  //               key={row.name}\n  //               sx={{ \"&:last-child td, &:last-child th\": { border: 0 } }}\n  //             >\n  //               <TableCell component=\"th\" scope=\"row\">\n  //                 {row.name}\n  //               </TableCell>\n  //               <TableCell align=\"right\">{row.calories}</TableCell>\n  //               <TableCell align=\"right\">{row.fat}</TableCell>\n  //               <TableCell align=\"right\">{row.carbs}</TableCell>\n  //               <TableCell align=\"right\">{row.protein}</TableCell>\n  //             </TableRow>\n  //           ))}\n  //         </TableBody>\n  //       </Table>\n  //     </TableContainer>\n  //   );\n  // }\n\n}\n\n_s(Analytics, \"XeX8hU9z7ftdw0oZYvglkzqiEGA=\", false, function () {\n  return [_util_auth_hooks__WEBPACK_IMPORTED_MODULE_2__.useAuth];\n});\n\n_c = Analytics;\n\nvar _c;\n\n$RefreshReg$(_c, \"Analytics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdCQUFNLEVBQUUsQ0FDTjtBQUFFQSxZQUFBQSxJQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixFQUF6QixDQUFSO0FBQXNDQyxZQUFBQSxLQUFLLEVBQUU7QUFBN0MsV0FETSxDQWpCVjtBQW9CRSxlQUFLLEVBQUUsSUFwQlQ7QUFxQkUsZ0JBQU0sRUFBRTtBQXJCVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGOztBQXNHQSxXQUFTZCxVQUFULENBQ0VPLElBREYsRUFFRUMsUUFGRixFQUdFQyxHQUhGLEVBSUVDLEtBSkYsRUFLRUMsT0FMRixFQU1FO0FBQ0EsV0FBTztBQUFFSixNQUFBQSxJQUFJLEVBQUpBLElBQUY7QUFBUUMsTUFBQUEsUUFBUSxFQUFSQSxRQUFSO0FBQWtCQyxNQUFBQSxHQUFHLEVBQUhBLEdBQWxCO0FBQXVCQyxNQUFBQSxLQUFLLEVBQUxBLEtBQXZCO0FBQThCQyxNQUFBQSxPQUFPLEVBQVBBO0FBQTlCLEtBQVA7QUFDRCxHQTNIK0IsQ0E2SGhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNIOztHQXRLdUJwQjtVQUVtQkQ7OztLQUZuQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FuYWx5dGljcy50c3g/MDVlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0JveCwgRGl2aWRlciwgUGFwZXIsIEdyaWQsIFN0YWNrLCBUeXBvZ3JhcGh5LCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGUsIFRhYmxlUm93LCBUYWJsZUNvbnRhaW5lciwgVGFibGVIZWFkfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQmFyQ2hhcnQgfSBmcm9tIFwiQG11aS94LWNoYXJ0cy9CYXJDaGFydFwiO1xuaW1wb3J0IHt1c2VRdWV1ZXN9IGZyb20gXCJAdXRpbC9xdWV1ZS9ob29rc1wiO1xuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkL0FwcExheW91dFwiO1xuaW1wb3J0IFF1ZXVlQ2FyZCBmcm9tIFwiQGNvbXBvbmVudHMvaG9tZS9RdWV1ZUNhcmRcIjtcbmltcG9ydCBDcmVhdGVRdWV1ZURpYWxvZyBmcm9tIFwiQGNvbXBvbmVudHMvaG9tZS9DcmVhdGVRdWV1ZURpYWxvZ1wiO1xuaW1wb3J0IHt1c2VBdXRofSBmcm9tIFwiQHV0aWwvYXV0aC9ob29rc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkL0J1dHRvblwiO1xuaW1wb3J0IEFkZENpcmNsZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkQ2lyY2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuYWx5dGljcygpIHtcblxuICAgIGNvbnN0IHtjdXJyZW50VXNlciwgaXNBdXRoZW50aWNhdGVkfSA9IHVzZUF1dGgoKTtcbiAgICBjb25zdCBpc1RBID0gaXNBdXRoZW50aWNhdGVkICYmIGN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyLmNvdXJzZVBlcm1pc3Npb25zICYmIChPYmplY3Qua2V5cyhjdXJyZW50VXNlci5jb3Vyc2VQZXJtaXNzaW9ucykubGVuZ3RoID4gMCk7XG5cbiAgICBjb25zdCByb3dzID0gW1xuICAgICAgICBjcmVhdGVEYXRhKFwiUmF0dHl0b3VsbGllXCIsIDE1OSwgNi4wLCAyNCwgNC4wKSxcbiAgICAgICAgY3JlYXRlRGF0YShcIkFuZHlCb3RcIiwgMjM3LCA5LjAsIDM3LCA0LjMpLFxuICAgICAgICBjcmVhdGVEYXRhKFwiUG9uZ1wiLCAyNjIsIDE2LjAsIDI0LCA2LjApLFxuICAgICAgICBjcmVhdGVEYXRhKFwiVGljVGFjVG9lXCIsIDMwNSwgMy43LCA2NywgNC4zKSxcbiAgICAgICAgY3JlYXRlRGF0YShcIkZydWl0TmluamFcIiwgMzU2LCAxNi4wLCA0OSwgMy45KSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBcHBMYXlvdXQgbWF4V2lkdGg9e2ZhbHNlfT5cbiAgICAgICAgeyFpc1RBICYmIChcbiAgICAgICAgICA8Qm94IG1iPXsyfT5cbiAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICBtdD17MTh9XG4gICAgICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIG1iPXsyfT5cbiAgICAgICAgICAgICAgICBZb3UgZG8gbm90IGN1cnJlbnRseSBoYXZlIGFjY2VzcyB0byBhbnkgY291cnNlIGFuYWx5dGljcy5cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgICAge2lzVEEgJiYgKFxuICAgICAgICAgIDxCb3ggbWI9ezJ9PlxuICAgICAgICAgICAgPFBhcGVyIHN4PXt7IG92ZXJmbG93OiBcImhpZGRlblwiIH19PlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICBwPXtbMiwgbnVsbCwgM119XG4gICAgICAgICAgICAgICAgY29sb3I9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICBzeD17eyBiZ2NvbG9yOiBcIiMyMTk2ZjNcIiB9fSAvL2xpZ2h0IGJsdWVcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3ggaGVpZ2h0PXsxMjB9PjwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MC41fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIG5vV3JhcD5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNzMDE1MDogSW50cm9kdWN0aW9uIHRvIE9iamVjdC1PcmllbnRlZCBQcm9ncmFtbWluZyBhbmQgQ29tcHV0ZXIgU2NpZW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgZm9udFdlaWdodD17NjAwfT5cbiAgICAgICAgICAgICAgICAgICAgICBBbmFseXRpY3NcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgICAgICAgICAgICA8VGFibGUgc3g9e3sgbWluV2lkdGg6IDY1MCB9fSBhcmlhLWxhYmVsPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkRlc3NlcnQgKDEwMGcgc2VydmluZyk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5DYWxvcmllczwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkZhdCZuYnNwOyhnKTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkNhcmJzJm5ic3A7KGcpPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+UHJvdGVpbiZuYnNwOyhnKTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvd1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyb3cubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiJjpsYXN0LWNoaWxkIHRkLCAmOmxhc3QtY2hpbGQgdGhcIjogeyBib3JkZXI6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5jYWxvcmllc308L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuZmF0fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5jYXJic308L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cucHJvdGVpbn08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XG4gICAgICAgICAgICAgIDxCYXJDaGFydFxuICAgICAgICAgICAgICAgIHhBeGlzPXtbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNjYWxlVHlwZTogXCJiYW5kXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgICAgICAgICAgICBcIlJhdHR5dG91bGxpZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiQW5keUJvdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiUG9uZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiVGljVGFjVG9lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJGcnVpdCBOaW5qYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiQ2FydG9vblwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiRG9vZGxlSnVtcFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiVGV0cmlzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJGaW5hbCBQcm9qZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgc2VyaWVzPXtbXG4gICAgICAgICAgICAgICAgICB7IGRhdGE6IFs0LCAzLCA1LCA2LCA0LCA2LCA3LCA5LCAxMF0sIGNvbG9yOiBcIiM2NzNhYjdcIiB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgd2lkdGg9ezEwMDB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURhdGEoXG4gICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICBjYWxvcmllczogbnVtYmVyLFxuICAgICAgZmF0OiBudW1iZXIsXG4gICAgICBjYXJiczogbnVtYmVyLFxuICAgICAgcHJvdGVpbjogbnVtYmVyXG4gICAgKSB7XG4gICAgICByZXR1cm4geyBuYW1lLCBjYWxvcmllcywgZmF0LCBjYXJicywgcHJvdGVpbiB9O1xuICAgIH1cblxuICAgIC8vIGNvbnN0IHJvd3MgPSBbXG4gICAgLy8gICBjcmVhdGVEYXRhKFwiRnJvemVuIHlvZ2h1cnRcIiwgMTU5LCA2LjAsIDI0LCA0LjApLFxuICAgIC8vICAgY3JlYXRlRGF0YShcIkljZSBjcmVhbSBzYW5kd2ljaFwiLCAyMzcsIDkuMCwgMzcsIDQuMyksXG4gICAgLy8gICBjcmVhdGVEYXRhKFwiRWNsYWlyXCIsIDI2MiwgMTYuMCwgMjQsIDYuMCksXG4gICAgLy8gICBjcmVhdGVEYXRhKFwiQ3VwY2FrZVwiLCAzMDUsIDMuNywgNjcsIDQuMyksXG4gICAgLy8gICBjcmVhdGVEYXRhKFwiR2luZ2VyYnJlYWRcIiwgMzU2LCAxNi4wLCA0OSwgMy45KSxcbiAgICAvLyBdO1xuXG4gICAgLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFzaWNUYWJsZSgpIHtcbiAgICAvLyAgIHJldHVybiAoXG4gICAgLy8gICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAvLyAgICAgICA8VGFibGUgc3g9e3sgbWluV2lkdGg6IDY1MCB9fSBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYmxlXCI+XG4gICAgLy8gICAgICAgICA8VGFibGVIZWFkPlxuICAgIC8vICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgLy8gICAgICAgICAgICAgPFRhYmxlQ2VsbD5EZXNzZXJ0ICgxMDBnIHNlcnZpbmcpPC9UYWJsZUNlbGw+XG4gICAgLy8gICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+Q2Fsb3JpZXM8L1RhYmxlQ2VsbD5cbiAgICAvLyAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5GYXQmbmJzcDsoZyk8L1RhYmxlQ2VsbD5cbiAgICAvLyAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5DYXJicyZuYnNwOyhnKTwvVGFibGVDZWxsPlxuICAgIC8vICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlByb3RlaW4mbmJzcDsoZyk8L1RhYmxlQ2VsbD5cbiAgICAvLyAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAvLyAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgIC8vICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAvLyAgICAgICAgICAge3Jvd3MubWFwKChyb3cpID0+IChcbiAgICAvLyAgICAgICAgICAgICA8VGFibGVSb3dcbiAgICAvLyAgICAgICAgICAgICAgIGtleT17cm93Lm5hbWV9XG4gICAgLy8gICAgICAgICAgICAgICBzeD17eyBcIiY6bGFzdC1jaGlsZCB0ZCwgJjpsYXN0LWNoaWxkIHRoXCI6IHsgYm9yZGVyOiAwIH0gfX1cbiAgICAvLyAgICAgICAgICAgICA+XG4gICAgLy8gICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cbiAgICAvLyAgICAgICAgICAgICAgICAge3Jvdy5uYW1lfVxuICAgIC8vICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgLy8gICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmNhbG9yaWVzfTwvVGFibGVDZWxsPlxuICAgIC8vICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5mYXR9PC9UYWJsZUNlbGw+XG4gICAgLy8gICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmNhcmJzfTwvVGFibGVDZWxsPlxuICAgIC8vICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5wcm90ZWlufTwvVGFibGVDZWxsPlxuICAgIC8vICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgLy8gICAgICAgICAgICkpfVxuICAgIC8vICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgLy8gICAgICAgPC9UYWJsZT5cbiAgICAvLyAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAvLyAgICk7XG4gICAgLy8gfVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIlBhcGVyIiwiU3RhY2siLCJUeXBvZ3JhcGh5IiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGUiLCJUYWJsZVJvdyIsIlRhYmxlQ29udGFpbmVyIiwiVGFibGVIZWFkIiwiQmFyQ2hhcnQiLCJBcHBMYXlvdXQiLCJ1c2VBdXRoIiwiQW5hbHl0aWNzIiwiY3VycmVudFVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJpc1RBIiwiY291cnNlUGVybWlzc2lvbnMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicm93cyIsImNyZWF0ZURhdGEiLCJvdmVyZmxvdyIsImJnY29sb3IiLCJtaW5XaWR0aCIsIm1hcCIsInJvdyIsImJvcmRlciIsIm5hbWUiLCJjYWxvcmllcyIsImZhdCIsImNhcmJzIiwicHJvdGVpbiIsInNjYWxlVHlwZSIsImRhdGEiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/analytics.tsx\n");

/***/ })

});