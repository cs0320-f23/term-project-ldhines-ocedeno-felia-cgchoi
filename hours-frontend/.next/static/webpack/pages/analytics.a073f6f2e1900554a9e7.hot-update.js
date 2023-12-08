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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Analytics; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_x_charts_BarChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-charts/BarChart */ \"./node_modules/@mui/x-charts/esm/BarChart/index.js\");\n/* harmony import */ var _components_shared_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/shared/AppLayout */ \"./src/components/shared/AppLayout/index.tsx\");\n/* harmony import */ var _util_auth_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/auth/hooks */ \"./src/util/auth/hooks.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/francescaelia/Documents/CS32/term-project-ldhines-ocedeno-felia-cgchoi/hours-frontend/src/pages/analytics.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Analytics() {\n  _s();\n\n  var _this = this;\n\n  var _useAuth = (0,_util_auth_hooks__WEBPACK_IMPORTED_MODULE_2__.useAuth)(),\n      currentUser = _useAuth.currentUser,\n      isAuthenticated = _useAuth.isAuthenticated;\n\n  var isTA = isAuthenticated && currentUser && currentUser.coursePermissions && Object.keys(currentUser.coursePermissions).length > 0;\n  var rows = [createData(\"Rattytoullie\", 159, 24, 4.0), createData(\"AndyBot\", 237, 37, 4.3), createData(\"Pong\", 262, 24, 6.0), createData(\"TicTacToe\", 305, 67, 4.3), createData(\"Fruit Ninja\", 356, 49, 3.9), createData(\"Cartoon\", 159, 55, 4.4), createData(\"DoodleJump\", 222, 40, 3.7), createData(\"Tetris\", 398, 72, 4.1), createData(\"Final Project\", 304, 86, 3.2)];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_shared_AppLayout__WEBPACK_IMPORTED_MODULE_1__.default, {\n    maxWidth: false,\n    children: [!isTA && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      mb: 2,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n        mt: 18,\n        spacing: 2,\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n          variant: \"h6\",\n          mb: 2,\n          children: \"You do not currently have access to any course analytics.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }, this), isTA && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      mb: 2,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper, {\n        sx: {\n          overflow: \"hidden\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n          width: \"100%\",\n          p: [2, null, 3],\n          color: \"#fff\",\n          position: \"relative\",\n          sx: {\n            bgcolor: \"#2196f3\"\n          } //light blue\n          ,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            height: 120\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 17\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n              direction: \"row\",\n              spacing: 0.5,\n              alignItems: \"center\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"body1\",\n                noWrap: true,\n                children: \"cs0150: Introduction to Object-Oriented Programming and Computer Science\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 19\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n              direction: \"row\",\n              spacing: 1,\n              alignItems: \"center\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"h4\",\n                fontWeight: 600,\n                children: \"Analytics\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 15\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableContainer, {\n          component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Table, {\n            sx: {\n              minWidth: 650\n            },\n            \"aria-label\": \"table\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableHead, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  children: \"Project Name\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 75,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  align: \"right\",\n                  children: \"Number of Visits\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 76,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  align: \"right\",\n                  children: \"Average Wait Time\\xA0(min)\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 77,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  align: \"right\",\n                  children: \"Carbs\\xA0(g)\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 78,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  align: \"right\",\n                  children: \"Protein\\xA0(g)\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 79,\n                  columnNumber: 23\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 19\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableBody, {\n              children: rows.map(function (row) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                  sx: {\n                    \"&:last-child td, &:last-child th\": {\n                      border: 0\n                    }\n                  },\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    component: \"th\",\n                    scope: \"row\",\n                    children: row.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 90,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: row.calories\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 93,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: row.fat\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 94,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: row.carbs\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 95,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: row.protein\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 96,\n                    columnNumber: 25\n                  }, _this)]\n                }, row.name, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 84,\n                  columnNumber: 23\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 15\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_x_charts_BarChart__WEBPACK_IMPORTED_MODULE_5__.BarChart, {\n          xAxis: [{\n            scaleType: \"band\",\n            data: [\"Rattytoullie\", \"AndyBot\", \"Pong\", \"TicTacToe\", \"Fruit Ninja\", \"Cartoon\", \"DoodleJump\", \"Tetris\", \"Final Project\"]\n          }],\n          series: [{\n            data: [4, 3, 5, 6, 4, 6, 7, 9, 10],\n            color: \"#673ab7\"\n          }],\n          width: 1000,\n          height: 300\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 7\n  }, this);\n\n  function createData(name, visits, waittime) {\n    return {\n      name: name,\n      visits: visits,\n      waittime: waittime\n    };\n  } // const rows = [\n  //   createData(\"Frozen yoghurt\", 159, 6.0, 24, 4.0),\n  //   createData(\"Ice cream sandwich\", 237, 9.0, 37, 4.3),\n  //   createData(\"Eclair\", 262, 16.0, 24, 6.0),\n  //   createData(\"Cupcake\", 305, 3.7, 67, 4.3),\n  //   createData(\"Gingerbread\", 356, 16.0, 49, 3.9),\n  // ];\n  // export default function BasicTable() {\n  //   return (\n  //     <TableContainer component={Paper}>\n  //       <Table sx={{ minWidth: 650 }} aria-label=\"simple table\">\n  //         <TableHead>\n  //           <TableRow>\n  //             <TableCell>Dessert (100g serving)</TableCell>\n  //             <TableCell align=\"right\">Calories</TableCell>\n  //             <TableCell align=\"right\">Fat&nbsp;(g)</TableCell>\n  //             <TableCell align=\"right\">Carbs&nbsp;(g)</TableCell>\n  //             <TableCell align=\"right\">Protein&nbsp;(g)</TableCell>\n  //           </TableRow>\n  //         </TableHead>\n  //         <TableBody>\n  //           {rows.map((row) => (\n  //             <TableRow\n  //               key={row.name}\n  //               sx={{ \"&:last-child td, &:last-child th\": { border: 0 } }}\n  //             >\n  //               <TableCell component=\"th\" scope=\"row\">\n  //                 {row.name}\n  //               </TableCell>\n  //               <TableCell align=\"right\">{row.calories}</TableCell>\n  //               <TableCell align=\"right\">{row.fat}</TableCell>\n  //               <TableCell align=\"right\">{row.carbs}</TableCell>\n  //               <TableCell align=\"right\">{row.protein}</TableCell>\n  //             </TableRow>\n  //           ))}\n  //         </TableBody>\n  //       </Table>\n  //     </TableContainer>\n  //   );\n  // }\n\n}\n\n_s(Analytics, \"XeX8hU9z7ftdw0oZYvglkzqiEGA=\", false, function () {\n  return [_util_auth_hooks__WEBPACK_IMPORTED_MODULE_2__.useAuth];\n});\n\n_c = Analytics;\n\nvar _c;\n\n$RefreshReg$(_c, \"Analytics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztHQXhLdUJ6QjtVQUVtQkQ7OztLQUZuQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FuYWx5dGljcy50c3g/MDVlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0JveCwgRGl2aWRlciwgUGFwZXIsIEdyaWQsIFN0YWNrLCBUeXBvZ3JhcGh5LCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGUsIFRhYmxlUm93LCBUYWJsZUNvbnRhaW5lciwgVGFibGVIZWFkfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQmFyQ2hhcnQgfSBmcm9tIFwiQG11aS94LWNoYXJ0cy9CYXJDaGFydFwiO1xuaW1wb3J0IHt1c2VRdWV1ZXN9IGZyb20gXCJAdXRpbC9xdWV1ZS9ob29rc1wiO1xuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkL0FwcExheW91dFwiO1xuaW1wb3J0IFF1ZXVlQ2FyZCBmcm9tIFwiQGNvbXBvbmVudHMvaG9tZS9RdWV1ZUNhcmRcIjtcbmltcG9ydCBDcmVhdGVRdWV1ZURpYWxvZyBmcm9tIFwiQGNvbXBvbmVudHMvaG9tZS9DcmVhdGVRdWV1ZURpYWxvZ1wiO1xuaW1wb3J0IHt1c2VBdXRofSBmcm9tIFwiQHV0aWwvYXV0aC9ob29rc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQGNvbXBvbmVudHMvc2hhcmVkL0J1dHRvblwiO1xuaW1wb3J0IEFkZENpcmNsZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkQ2lyY2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuYWx5dGljcygpIHtcblxuICAgIGNvbnN0IHtjdXJyZW50VXNlciwgaXNBdXRoZW50aWNhdGVkfSA9IHVzZUF1dGgoKTtcbiAgICBjb25zdCBpc1RBID0gaXNBdXRoZW50aWNhdGVkICYmIGN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyLmNvdXJzZVBlcm1pc3Npb25zICYmIChPYmplY3Qua2V5cyhjdXJyZW50VXNlci5jb3Vyc2VQZXJtaXNzaW9ucykubGVuZ3RoID4gMCk7XG5cbiAgICBjb25zdCByb3dzID0gW1xuICAgICAgY3JlYXRlRGF0YShcIlJhdHR5dG91bGxpZVwiLCAxNTksIDI0LCA0LjApLFxuICAgICAgY3JlYXRlRGF0YShcIkFuZHlCb3RcIiwgMjM3LCAzNywgNC4zKSxcbiAgICAgIGNyZWF0ZURhdGEoXCJQb25nXCIsIDI2MiwgMjQsIDYuMCksXG4gICAgICBjcmVhdGVEYXRhKFwiVGljVGFjVG9lXCIsIDMwNSwgNjcsIDQuMyksXG4gICAgICBjcmVhdGVEYXRhKFwiRnJ1aXQgTmluamFcIiwgMzU2LCA0OSwgMy45KSxcbiAgICAgIGNyZWF0ZURhdGEoXCJDYXJ0b29uXCIsIDE1OSwgNTUsIDQuNCksXG4gICAgICBjcmVhdGVEYXRhKFwiRG9vZGxlSnVtcFwiLCAyMjIsIDQwLCAzLjcpLFxuICAgICAgY3JlYXRlRGF0YShcIlRldHJpc1wiLCAzOTgsIDcyLCA0LjEpLFxuICAgICAgY3JlYXRlRGF0YShcIkZpbmFsIFByb2plY3RcIiwgMzA0LCA4NiwgMy4yKSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBcHBMYXlvdXQgbWF4V2lkdGg9e2ZhbHNlfT5cbiAgICAgICAgeyFpc1RBICYmIChcbiAgICAgICAgICA8Qm94IG1iPXsyfT5cbiAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICBtdD17MTh9XG4gICAgICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIG1iPXsyfT5cbiAgICAgICAgICAgICAgICBZb3UgZG8gbm90IGN1cnJlbnRseSBoYXZlIGFjY2VzcyB0byBhbnkgY291cnNlIGFuYWx5dGljcy5cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgICAge2lzVEEgJiYgKFxuICAgICAgICAgIDxCb3ggbWI9ezJ9PlxuICAgICAgICAgICAgPFBhcGVyIHN4PXt7IG92ZXJmbG93OiBcImhpZGRlblwiIH19PlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICBwPXtbMiwgbnVsbCwgM119XG4gICAgICAgICAgICAgICAgY29sb3I9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICBzeD17eyBiZ2NvbG9yOiBcIiMyMTk2ZjNcIiB9fSAvL2xpZ2h0IGJsdWVcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3ggaGVpZ2h0PXsxMjB9PjwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MC41fSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIG5vV3JhcD5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNzMDE1MDogSW50cm9kdWN0aW9uIHRvIE9iamVjdC1PcmllbnRlZCBQcm9ncmFtbWluZyBhbmQgQ29tcHV0ZXIgU2NpZW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezF9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgZm9udFdlaWdodD17NjAwfT5cbiAgICAgICAgICAgICAgICAgICAgICBBbmFseXRpY3NcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgICAgICAgICAgICA8VGFibGUgc3g9e3sgbWluV2lkdGg6IDY1MCB9fSBhcmlhLWxhYmVsPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlByb2plY3QgTmFtZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPk51bWJlciBvZiBWaXNpdHM8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5BdmVyYWdlIFdhaXQgVGltZSZuYnNwOyhtaW4pPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+Q2FyYnMmbmJzcDsoZyk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5Qcm90ZWluJm5ic3A7KGcpPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtyb3dzLm1hcCgocm93KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Jvdy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCImOmxhc3QtY2hpbGQgdGQsICY6bGFzdC1jaGlsZCB0aFwiOiB7IGJvcmRlcjogMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmNhbG9yaWVzfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5mYXR9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmNhcmJzfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5wcm90ZWlufTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPEJhckNoYXJ0XG4gICAgICAgICAgICAgICAgeEF4aXM9e1tcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVUeXBlOiBcImJhbmRcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgICAgICAgIFwiUmF0dHl0b3VsbGllXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJBbmR5Qm90XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJQb25nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJUaWNUYWNUb2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIkZydWl0IE5pbmphXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJDYXJ0b29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJEb29kbGVKdW1wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJUZXRyaXNcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIkZpbmFsIFByb2plY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBzZXJpZXM9e1tcbiAgICAgICAgICAgICAgICAgIHsgZGF0YTogWzQsIDMsIDUsIDYsIDQsIDYsIDcsIDksIDEwXSwgY29sb3I6IFwiIzY3M2FiN1wiIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICB3aWR0aD17MTAwMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0FwcExheW91dD5cbiAgICApO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGF0YShcbiAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgIHZpc2l0czogbnVtYmVyLFxuICAgICAgd2FpdHRpbWU6IG51bWJlcixcbiAgICApIHtcbiAgICAgIHJldHVybiB7IG5hbWUsIHZpc2l0cywgd2FpdHRpbWUgfTtcbiAgICB9XG5cbiAgICAvLyBjb25zdCByb3dzID0gW1xuICAgIC8vICAgY3JlYXRlRGF0YShcIkZyb3plbiB5b2dodXJ0XCIsIDE1OSwgNi4wLCAyNCwgNC4wKSxcbiAgICAvLyAgIGNyZWF0ZURhdGEoXCJJY2UgY3JlYW0gc2FuZHdpY2hcIiwgMjM3LCA5LjAsIDM3LCA0LjMpLFxuICAgIC8vICAgY3JlYXRlRGF0YShcIkVjbGFpclwiLCAyNjIsIDE2LjAsIDI0LCA2LjApLFxuICAgIC8vICAgY3JlYXRlRGF0YShcIkN1cGNha2VcIiwgMzA1LCAzLjcsIDY3LCA0LjMpLFxuICAgIC8vICAgY3JlYXRlRGF0YShcIkdpbmdlcmJyZWFkXCIsIDM1NiwgMTYuMCwgNDksIDMuOSksXG4gICAgLy8gXTtcblxuICAgIC8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhc2ljVGFibGUoKSB7XG4gICAgLy8gICByZXR1cm4gKFxuICAgIC8vICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XG4gICAgLy8gICAgICAgPFRhYmxlIHN4PXt7IG1pbldpZHRoOiA2NTAgfX0gYXJpYS1sYWJlbD1cInNpbXBsZSB0YWJsZVwiPlxuICAgIC8vICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAvLyAgICAgICAgICAgPFRhYmxlUm93PlxuICAgIC8vICAgICAgICAgICAgIDxUYWJsZUNlbGw+RGVzc2VydCAoMTAwZyBzZXJ2aW5nKTwvVGFibGVDZWxsPlxuICAgIC8vICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkNhbG9yaWVzPC9UYWJsZUNlbGw+XG4gICAgLy8gICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+RmF0Jm5ic3A7KGcpPC9UYWJsZUNlbGw+XG4gICAgLy8gICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+Q2FyYnMmbmJzcDsoZyk8L1RhYmxlQ2VsbD5cbiAgICAvLyAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5Qcm90ZWluJm5ic3A7KGcpPC9UYWJsZUNlbGw+XG4gICAgLy8gICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgLy8gICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAvLyAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgLy8gICAgICAgICAgIHtyb3dzLm1hcCgocm93KSA9PiAoXG4gICAgLy8gICAgICAgICAgICAgPFRhYmxlUm93XG4gICAgLy8gICAgICAgICAgICAgICBrZXk9e3Jvdy5uYW1lfVxuICAgIC8vICAgICAgICAgICAgICAgc3g9e3sgXCImOmxhc3QtY2hpbGQgdGQsICY6bGFzdC1jaGlsZCB0aFwiOiB7IGJvcmRlcjogMCB9IH19XG4gICAgLy8gICAgICAgICAgICAgPlxuICAgIC8vICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG4gICAgLy8gICAgICAgICAgICAgICAgIHtyb3cubmFtZX1cbiAgICAvLyAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgIC8vICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5jYWxvcmllc308L1RhYmxlQ2VsbD5cbiAgICAvLyAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuZmF0fTwvVGFibGVDZWxsPlxuICAgIC8vICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5jYXJic308L1RhYmxlQ2VsbD5cbiAgICAvLyAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cucHJvdGVpbn08L1RhYmxlQ2VsbD5cbiAgICAvLyAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgIC8vICAgICAgICAgICApKX1cbiAgICAvLyAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgIC8vICAgICAgIDwvVGFibGU+XG4gICAgLy8gICAgIDwvVGFibGVDb250YWluZXI+XG4gICAgLy8gICApO1xuICAgIC8vIH1cbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJQYXBlciIsIlN0YWNrIiwiVHlwb2dyYXBoeSIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlIiwiVGFibGVSb3ciLCJUYWJsZUNvbnRhaW5lciIsIlRhYmxlSGVhZCIsIkJhckNoYXJ0IiwiQXBwTGF5b3V0IiwidXNlQXV0aCIsIkFuYWx5dGljcyIsImN1cnJlbnRVc2VyIiwiaXNBdXRoZW50aWNhdGVkIiwiaXNUQSIsImNvdXJzZVBlcm1pc3Npb25zIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInJvd3MiLCJjcmVhdGVEYXRhIiwib3ZlcmZsb3ciLCJiZ2NvbG9yIiwibWluV2lkdGgiLCJtYXAiLCJyb3ciLCJib3JkZXIiLCJuYW1lIiwiY2Fsb3JpZXMiLCJmYXQiLCJjYXJicyIsInByb3RlaW4iLCJzY2FsZVR5cGUiLCJkYXRhIiwiY29sb3IiLCJ2aXNpdHMiLCJ3YWl0dGltZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/analytics.tsx\n");

/***/ })

});