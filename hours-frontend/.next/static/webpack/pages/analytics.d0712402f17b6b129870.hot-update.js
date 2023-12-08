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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Analytics; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_x_charts_BarChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-charts/BarChart */ \"./node_modules/@mui/x-charts/esm/BarChart/index.js\");\n/* harmony import */ var _components_shared_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/shared/AppLayout */ \"./src/components/shared/AppLayout/index.tsx\");\n/* harmony import */ var _util_auth_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/auth/hooks */ \"./src/util/auth/hooks.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/francescaelia/Documents/CS32/term-project-ldhines-ocedeno-felia-cgchoi/hours-frontend/src/pages/analytics.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Analytics() {\n  _s();\n\n  var _this = this;\n\n  var _useAuth = (0,_util_auth_hooks__WEBPACK_IMPORTED_MODULE_2__.useAuth)(),\n      currentUser = _useAuth.currentUser,\n      isAuthenticated = _useAuth.isAuthenticated;\n\n  var isTA = isAuthenticated && currentUser && currentUser.coursePermissions && Object.keys(currentUser.coursePermissions).length > 0;\n  var rows = [createData(\"Rattytoullie\", 159, 6.0, 24, 4.0), createData(\"AndyBot\", 237, 9.0, 37, 4.3), createData(\"Eclair\", 262, 16.0, 24, 6.0), createData(\"Cupcake\", 305, 3.7, 67, 4.3), createData(\"Gingerbread\", 356, 16.0, 49, 3.9)];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_shared_AppLayout__WEBPACK_IMPORTED_MODULE_1__.default, {\n    maxWidth: false,\n    children: [!isTA && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      mb: 2,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n        mt: 18,\n        spacing: 2,\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n          variant: \"h6\",\n          mb: 2,\n          children: \"You do not currently have access to any course analytics.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }, this), isTA && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      mb: 2,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper, {\n        sx: {\n          overflow: \"hidden\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n          width: \"100%\",\n          p: [2, null, 3],\n          color: \"#fff\",\n          position: \"relative\",\n          sx: {\n            bgcolor: \"#2196f3\"\n          } //light blue\n          ,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            height: 120\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 17\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n              direction: \"row\",\n              spacing: 0.5,\n              alignItems: \"center\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"body1\",\n                noWrap: true,\n                children: \"cs0150: Introduction to Object-Oriented Programming and Computer Science\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 19\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n              direction: \"row\",\n              spacing: 1,\n              alignItems: \"center\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"h4\",\n                fontWeight: 600,\n                children: \"Analytics\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 15\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableContainer, {\n          component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Table, {\n            sx: {\n              minWidth: 650\n            },\n            \"aria-label\": \"table\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableHead, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  children: \"Dessert (100g serving)\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 71,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  align: \"right\",\n                  children: \"Calories\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 72,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  align: \"right\",\n                  children: \"Fat\\xA0(g)\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 73,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  align: \"right\",\n                  children: \"Carbs\\xA0(g)\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  align: \"right\",\n                  children: \"Protein\\xA0(g)\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 75,\n                  columnNumber: 23\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 19\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableBody, {\n              children: rows.map(function (row) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                  sx: {\n                    \"&:last-child td, &:last-child th\": {\n                      border: 0\n                    }\n                  },\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    component: \"th\",\n                    scope: \"row\",\n                    children: row.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 86,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: row.calories\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 89,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: row.fat\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 90,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: row.carbs\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 91,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: row.protein\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 92,\n                    columnNumber: 25\n                  }, _this)]\n                }, row.name, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 80,\n                  columnNumber: 23\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 15\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_x_charts_BarChart__WEBPACK_IMPORTED_MODULE_5__.BarChart, {\n          xAxis: [{\n            scaleType: \"band\",\n            data: [\"Rattytoullie\", \"AndyBot\", \"Pong\", \"TicTacToe\", \"Fruit Ninja\", \"Cartoon\", \"DoodleJump\", \"Tetris\", \"Final Project\"]\n          }],\n          series: [{\n            data: [4, 3, 5, 6, 4, 6, 7, 9, 10],\n            color: \"#673ab7\"\n          }],\n          width: 1000,\n          height: 300\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 7\n  }, this);\n\n  function createData(name, calories, fat, carbs, protein) {\n    return {\n      name: name,\n      calories: calories,\n      fat: fat,\n      carbs: carbs,\n      protein: protein\n    };\n  } // const rows = [\n  //   createData(\"Frozen yoghurt\", 159, 6.0, 24, 4.0),\n  //   createData(\"Ice cream sandwich\", 237, 9.0, 37, 4.3),\n  //   createData(\"Eclair\", 262, 16.0, 24, 6.0),\n  //   createData(\"Cupcake\", 305, 3.7, 67, 4.3),\n  //   createData(\"Gingerbread\", 356, 16.0, 49, 3.9),\n  // ];\n  // export default function BasicTable() {\n  //   return (\n  //     <TableContainer component={Paper}>\n  //       <Table sx={{ minWidth: 650 }} aria-label=\"simple table\">\n  //         <TableHead>\n  //           <TableRow>\n  //             <TableCell>Dessert (100g serving)</TableCell>\n  //             <TableCell align=\"right\">Calories</TableCell>\n  //             <TableCell align=\"right\">Fat&nbsp;(g)</TableCell>\n  //             <TableCell align=\"right\">Carbs&nbsp;(g)</TableCell>\n  //             <TableCell align=\"right\">Protein&nbsp;(g)</TableCell>\n  //           </TableRow>\n  //         </TableHead>\n  //         <TableBody>\n  //           {rows.map((row) => (\n  //             <TableRow\n  //               key={row.name}\n  //               sx={{ \"&:last-child td, &:last-child th\": { border: 0 } }}\n  //             >\n  //               <TableCell component=\"th\" scope=\"row\">\n  //                 {row.name}\n  //               </TableCell>\n  //               <TableCell align=\"right\">{row.calories}</TableCell>\n  //               <TableCell align=\"right\">{row.fat}</TableCell>\n  //               <TableCell align=\"right\">{row.carbs}</TableCell>\n  //               <TableCell align=\"right\">{row.protein}</TableCell>\n  //             </TableRow>\n  //           ))}\n  //         </TableBody>\n  //       </Table>\n  //     </TableContainer>\n  //   );\n  // }\n\n}\n\n_s(Analytics, \"XeX8hU9z7ftdw0oZYvglkzqiEGA=\", false, function () {\n  return [_util_auth_hooks__WEBPACK_IMPORTED_MODULE_2__.useAuth];\n});\n\n_c = Analytics;\n\nvar _c;\n\n$RefreshReg$(_c, \"Analytics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlCRSxnQkFBTSxFQUFFLENBQ047QUFBRUEsWUFBQUEsSUFBSSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsRUFBekIsQ0FBUjtBQUFzQ0MsWUFBQUEsS0FBSyxFQUFFO0FBQTdDLFdBRE0sQ0FqQlY7QUFvQkUsZUFBSyxFQUFFLElBcEJUO0FBcUJFLGdCQUFNLEVBQUU7QUFyQlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjs7QUFzR0EsV0FBU2QsVUFBVCxDQUNFTyxJQURGLEVBRUVDLFFBRkYsRUFHRUMsR0FIRixFQUlFQyxLQUpGLEVBS0VDLE9BTEYsRUFNRTtBQUNBLFdBQU87QUFBRUosTUFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFDLE1BQUFBLFFBQVEsRUFBUkEsUUFBUjtBQUFrQkMsTUFBQUEsR0FBRyxFQUFIQSxHQUFsQjtBQUF1QkMsTUFBQUEsS0FBSyxFQUFMQSxLQUF2QjtBQUE4QkMsTUFBQUEsT0FBTyxFQUFQQTtBQUE5QixLQUFQO0FBQ0QsR0EzSCtCLENBNkhoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDSDs7R0F0S3VCcEI7VUFFbUJEOzs7S0FGbkJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hbmFseXRpY3MudHN4PzA1ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtCb3gsIERpdmlkZXIsIFBhcGVyLCBHcmlkLCBTdGFjaywgVHlwb2dyYXBoeSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlLCBUYWJsZVJvdywgVGFibGVDb250YWluZXIsIFRhYmxlSGVhZH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEJhckNoYXJ0IH0gZnJvbSBcIkBtdWkveC1jaGFydHMvQmFyQ2hhcnRcIjtcbmltcG9ydCB7dXNlUXVldWVzfSBmcm9tIFwiQHV0aWwvcXVldWUvaG9va3NcIjtcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZC9BcHBMYXlvdXRcIjtcbmltcG9ydCBRdWV1ZUNhcmQgZnJvbSBcIkBjb21wb25lbnRzL2hvbWUvUXVldWVDYXJkXCI7XG5pbXBvcnQgQ3JlYXRlUXVldWVEaWFsb2cgZnJvbSBcIkBjb21wb25lbnRzL2hvbWUvQ3JlYXRlUXVldWVEaWFsb2dcIjtcbmltcG9ydCB7dXNlQXV0aH0gZnJvbSBcIkB1dGlsL2F1dGgvaG9va3NcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBjb21wb25lbnRzL3NoYXJlZC9CdXR0b25cIjtcbmltcG9ydCBBZGRDaXJjbGVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FkZENpcmNsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmFseXRpY3MoKSB7XG5cbiAgICBjb25zdCB7Y3VycmVudFVzZXIsIGlzQXV0aGVudGljYXRlZH0gPSB1c2VBdXRoKCk7XG4gICAgY29uc3QgaXNUQSA9IGlzQXV0aGVudGljYXRlZCAmJiBjdXJyZW50VXNlciAmJiBjdXJyZW50VXNlci5jb3Vyc2VQZXJtaXNzaW9ucyAmJiAoT2JqZWN0LmtleXMoY3VycmVudFVzZXIuY291cnNlUGVybWlzc2lvbnMpLmxlbmd0aCA+IDApO1xuXG4gICAgY29uc3Qgcm93cyA9IFtcbiAgICAgICAgY3JlYXRlRGF0YShcIlJhdHR5dG91bGxpZVwiLCAxNTksIDYuMCwgMjQsIDQuMCksXG4gICAgICAgIGNyZWF0ZURhdGEoXCJBbmR5Qm90XCIsIDIzNywgOS4wLCAzNywgNC4zKSxcbiAgICAgICAgY3JlYXRlRGF0YShcIkVjbGFpclwiLCAyNjIsIDE2LjAsIDI0LCA2LjApLFxuICAgICAgICBjcmVhdGVEYXRhKFwiQ3VwY2FrZVwiLCAzMDUsIDMuNywgNjcsIDQuMyksXG4gICAgICAgIGNyZWF0ZURhdGEoXCJHaW5nZXJicmVhZFwiLCAzNTYsIDE2LjAsIDQ5LCAzLjkpLFxuICAgIF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFwcExheW91dCBtYXhXaWR0aD17ZmFsc2V9PlxuICAgICAgICB7IWlzVEEgJiYgKFxuICAgICAgICAgIDxCb3ggbWI9ezJ9PlxuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgIG10PXsxOH1cbiAgICAgICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgbWI9ezJ9PlxuICAgICAgICAgICAgICAgIFlvdSBkbyBub3QgY3VycmVudGx5IGhhdmUgYWNjZXNzIHRvIGFueSBjb3Vyc2UgYW5hbHl0aWNzLlxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgICB7aXNUQSAmJiAoXG4gICAgICAgICAgPEJveCBtYj17Mn0+XG4gICAgICAgICAgICA8UGFwZXIgc3g9e3sgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX0+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIHA9e1syLCBudWxsLCAzXX1cbiAgICAgICAgICAgICAgICBjb2xvcj1cIiNmZmZcIlxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgIHN4PXt7IGJnY29sb3I6IFwiIzIxOTZmM1wiIH19IC8vbGlnaHQgYmx1ZVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJveCBoZWlnaHQ9ezEyMH0+PC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXswLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgbm9XcmFwPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY3MwMTUwOiBJbnRyb2R1Y3Rpb24gdG8gT2JqZWN0LU9yaWVudGVkIFByb2dyYW1taW5nIGFuZCBDb21wdXRlciBTY2llbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBmb250V2VpZ2h0PXs2MDB9PlxuICAgICAgICAgICAgICAgICAgICAgIEFuYWx5dGljc1xuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgICAgICAgICAgIDxUYWJsZSBzeD17eyBtaW5XaWR0aDogNjUwIH19IGFyaWEtbGFiZWw9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RGVzc2VydCAoMTAwZyBzZXJ2aW5nKTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkNhbG9yaWVzPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+RmF0Jm5ic3A7KGcpPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+Q2FyYnMmbmJzcDsoZyk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5Qcm90ZWluJm5ic3A7KGcpPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtyb3dzLm1hcCgocm93KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Jvdy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCImOmxhc3QtY2hpbGQgdGQsICY6bGFzdC1jaGlsZCB0aFwiOiB7IGJvcmRlcjogMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmNhbG9yaWVzfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5mYXR9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmNhcmJzfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5wcm90ZWlufTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPEJhckNoYXJ0XG4gICAgICAgICAgICAgICAgeEF4aXM9e1tcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVUeXBlOiBcImJhbmRcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgICAgICAgIFwiUmF0dHl0b3VsbGllXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJBbmR5Qm90XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJQb25nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJUaWNUYWNUb2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIkZydWl0IE5pbmphXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJDYXJ0b29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJEb29kbGVKdW1wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJUZXRyaXNcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIkZpbmFsIFByb2plY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBzZXJpZXM9e1tcbiAgICAgICAgICAgICAgICAgIHsgZGF0YTogWzQsIDMsIDUsIDYsIDQsIDYsIDcsIDksIDEwXSwgY29sb3I6IFwiIzY3M2FiN1wiIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICB3aWR0aD17MTAwMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0FwcExheW91dD5cbiAgICApO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGF0YShcbiAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgIGNhbG9yaWVzOiBudW1iZXIsXG4gICAgICBmYXQ6IG51bWJlcixcbiAgICAgIGNhcmJzOiBudW1iZXIsXG4gICAgICBwcm90ZWluOiBudW1iZXJcbiAgICApIHtcbiAgICAgIHJldHVybiB7IG5hbWUsIGNhbG9yaWVzLCBmYXQsIGNhcmJzLCBwcm90ZWluIH07XG4gICAgfVxuXG4gICAgLy8gY29uc3Qgcm93cyA9IFtcbiAgICAvLyAgIGNyZWF0ZURhdGEoXCJGcm96ZW4geW9naHVydFwiLCAxNTksIDYuMCwgMjQsIDQuMCksXG4gICAgLy8gICBjcmVhdGVEYXRhKFwiSWNlIGNyZWFtIHNhbmR3aWNoXCIsIDIzNywgOS4wLCAzNywgNC4zKSxcbiAgICAvLyAgIGNyZWF0ZURhdGEoXCJFY2xhaXJcIiwgMjYyLCAxNi4wLCAyNCwgNi4wKSxcbiAgICAvLyAgIGNyZWF0ZURhdGEoXCJDdXBjYWtlXCIsIDMwNSwgMy43LCA2NywgNC4zKSxcbiAgICAvLyAgIGNyZWF0ZURhdGEoXCJHaW5nZXJicmVhZFwiLCAzNTYsIDE2LjAsIDQ5LCAzLjkpLFxuICAgIC8vIF07XG5cbiAgICAvLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXNpY1RhYmxlKCkge1xuICAgIC8vICAgcmV0dXJuIChcbiAgICAvLyAgICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxuICAgIC8vICAgICAgIDxUYWJsZSBzeD17eyBtaW5XaWR0aDogNjUwIH19IGFyaWEtbGFiZWw9XCJzaW1wbGUgdGFibGVcIj5cbiAgICAvLyAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgLy8gICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAvLyAgICAgICAgICAgICA8VGFibGVDZWxsPkRlc3NlcnQgKDEwMGcgc2VydmluZyk8L1RhYmxlQ2VsbD5cbiAgICAvLyAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5DYWxvcmllczwvVGFibGVDZWxsPlxuICAgIC8vICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkZhdCZuYnNwOyhnKTwvVGFibGVDZWxsPlxuICAgIC8vICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkNhcmJzJm5ic3A7KGcpPC9UYWJsZUNlbGw+XG4gICAgLy8gICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+UHJvdGVpbiZuYnNwOyhnKTwvVGFibGVDZWxsPlxuICAgIC8vICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgIC8vICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgLy8gICAgICAgICA8VGFibGVCb2R5PlxuICAgIC8vICAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxuICAgIC8vICAgICAgICAgICAgIDxUYWJsZVJvd1xuICAgIC8vICAgICAgICAgICAgICAga2V5PXtyb3cubmFtZX1cbiAgICAvLyAgICAgICAgICAgICAgIHN4PXt7IFwiJjpsYXN0LWNoaWxkIHRkLCAmOmxhc3QtY2hpbGQgdGhcIjogeyBib3JkZXI6IDAgfSB9fVxuICAgIC8vICAgICAgICAgICAgID5cbiAgICAvLyAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxuICAgIC8vICAgICAgICAgICAgICAgICB7cm93Lm5hbWV9XG4gICAgLy8gICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAvLyAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuY2Fsb3JpZXN9PC9UYWJsZUNlbGw+XG4gICAgLy8gICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmZhdH08L1RhYmxlQ2VsbD5cbiAgICAvLyAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuY2FyYnN9PC9UYWJsZUNlbGw+XG4gICAgLy8gICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LnByb3RlaW59PC9UYWJsZUNlbGw+XG4gICAgLy8gICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAvLyAgICAgICAgICAgKSl9XG4gICAgLy8gICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAvLyAgICAgICA8L1RhYmxlPlxuICAgIC8vICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgIC8vICAgKTtcbiAgICAvLyB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiUGFwZXIiLCJTdGFjayIsIlR5cG9ncmFwaHkiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZSIsIlRhYmxlUm93IiwiVGFibGVDb250YWluZXIiLCJUYWJsZUhlYWQiLCJCYXJDaGFydCIsIkFwcExheW91dCIsInVzZUF1dGgiLCJBbmFseXRpY3MiLCJjdXJyZW50VXNlciIsImlzQXV0aGVudGljYXRlZCIsImlzVEEiLCJjb3Vyc2VQZXJtaXNzaW9ucyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJyb3dzIiwiY3JlYXRlRGF0YSIsIm92ZXJmbG93IiwiYmdjb2xvciIsIm1pbldpZHRoIiwibWFwIiwicm93IiwiYm9yZGVyIiwibmFtZSIsImNhbG9yaWVzIiwiZmF0IiwiY2FyYnMiLCJwcm90ZWluIiwic2NhbGVUeXBlIiwiZGF0YSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/analytics.tsx\n");

/***/ })

});