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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Analytics; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_x_charts_BarChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-charts/BarChart */ \"./node_modules/@mui/x-charts/esm/BarChart/index.js\");\n/* harmony import */ var _components_shared_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/shared/AppLayout */ \"./src/components/shared/AppLayout/index.tsx\");\n/* harmony import */ var _util_auth_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/auth/hooks */ \"./src/util/auth/hooks.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/francescaelia/Documents/CS32/term-project-ldhines-ocedeno-felia-cgchoi/hours-frontend/src/pages/analytics.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Analytics() {\n  _s();\n\n  var _this = this;\n\n  var _useAuth = (0,_util_auth_hooks__WEBPACK_IMPORTED_MODULE_2__.useAuth)(),\n      currentUser = _useAuth.currentUser,\n      isAuthenticated = _useAuth.isAuthenticated;\n\n  var isTA = isAuthenticated && currentUser && currentUser.coursePermissions && Object.keys(currentUser.coursePermissions).length > 0;\n  var rows = [createData(\"Rattytoullie\", 159, 6.0, 24, 4.0), createData(\"AndyBot\", 237, 9.0, 37, 4.3), createData(\"Pong\", 262, 16.0, 24, 6.0), createData(\"TicTacToe\", 305, 3.7, 67, 4.3), createData(\"Fruit Ninja\", 356, 16.0, 49, 3.9), createData(\"Cartoon\", 356, 16.0, 49, 3.9), createData(\"FruitNinja\", 356, 16.0, 49, 3.9)];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_shared_AppLayout__WEBPACK_IMPORTED_MODULE_1__.default, {\n    maxWidth: false,\n    children: [!isTA && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      mb: 2,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n        mt: 18,\n        spacing: 2,\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n          variant: \"h6\",\n          mb: 2,\n          children: \"You do not currently have access to any course analytics.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }, this), isTA && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      mb: 2,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper, {\n        sx: {\n          overflow: \"hidden\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n          width: \"100%\",\n          p: [2, null, 3],\n          color: \"#fff\",\n          position: \"relative\",\n          sx: {\n            bgcolor: \"#2196f3\"\n          } //light blue\n          ,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            height: 120\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 17\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n              direction: \"row\",\n              spacing: 0.5,\n              alignItems: \"center\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"body1\",\n                noWrap: true,\n                children: \"cs0150: Introduction to Object-Oriented Programming and Computer Science\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 19\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n              direction: \"row\",\n              spacing: 1,\n              alignItems: \"center\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"h4\",\n                fontWeight: 600,\n                children: \"Analytics\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 15\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableContainer, {\n          component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Table, {\n            sx: {\n              minWidth: 650\n            },\n            \"aria-label\": \"table\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableHead, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  children: \"Dessert (100g serving)\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 73,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  align: \"right\",\n                  children: \"Calories\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  align: \"right\",\n                  children: \"Fat\\xA0(g)\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 75,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  align: \"right\",\n                  children: \"Carbs\\xA0(g)\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 76,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  align: \"right\",\n                  children: \"Protein\\xA0(g)\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 77,\n                  columnNumber: 23\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 19\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableBody, {\n              children: rows.map(function (row) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                  sx: {\n                    \"&:last-child td, &:last-child th\": {\n                      border: 0\n                    }\n                  },\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    component: \"th\",\n                    scope: \"row\",\n                    children: row.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 88,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: row.calories\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 91,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: row.fat\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 92,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: row.carbs\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 93,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: row.protein\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 94,\n                    columnNumber: 25\n                  }, _this)]\n                }, row.name, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 82,\n                  columnNumber: 23\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 15\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_x_charts_BarChart__WEBPACK_IMPORTED_MODULE_5__.BarChart, {\n          xAxis: [{\n            scaleType: \"band\",\n            data: [\"Rattytoullie\", \"AndyBot\", \"Pong\", \"TicTacToe\", \"Fruit Ninja\", \"Cartoon\", \"DoodleJump\", \"Tetris\", \"Final Project\"]\n          }],\n          series: [{\n            data: [4, 3, 5, 6, 4, 6, 7, 9, 10],\n            color: \"#673ab7\"\n          }],\n          width: 1000,\n          height: 300\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 7\n  }, this);\n\n  function createData(name, calories, fat, carbs, protein) {\n    return {\n      name: name,\n      calories: calories,\n      fat: fat,\n      carbs: carbs,\n      protein: protein\n    };\n  } // const rows = [\n  //   createData(\"Frozen yoghurt\", 159, 6.0, 24, 4.0),\n  //   createData(\"Ice cream sandwich\", 237, 9.0, 37, 4.3),\n  //   createData(\"Eclair\", 262, 16.0, 24, 6.0),\n  //   createData(\"Cupcake\", 305, 3.7, 67, 4.3),\n  //   createData(\"Gingerbread\", 356, 16.0, 49, 3.9),\n  // ];\n  // export default function BasicTable() {\n  //   return (\n  //     <TableContainer component={Paper}>\n  //       <Table sx={{ minWidth: 650 }} aria-label=\"simple table\">\n  //         <TableHead>\n  //           <TableRow>\n  //             <TableCell>Dessert (100g serving)</TableCell>\n  //             <TableCell align=\"right\">Calories</TableCell>\n  //             <TableCell align=\"right\">Fat&nbsp;(g)</TableCell>\n  //             <TableCell align=\"right\">Carbs&nbsp;(g)</TableCell>\n  //             <TableCell align=\"right\">Protein&nbsp;(g)</TableCell>\n  //           </TableRow>\n  //         </TableHead>\n  //         <TableBody>\n  //           {rows.map((row) => (\n  //             <TableRow\n  //               key={row.name}\n  //               sx={{ \"&:last-child td, &:last-child th\": { border: 0 } }}\n  //             >\n  //               <TableCell component=\"th\" scope=\"row\">\n  //                 {row.name}\n  //               </TableCell>\n  //               <TableCell align=\"right\">{row.calories}</TableCell>\n  //               <TableCell align=\"right\">{row.fat}</TableCell>\n  //               <TableCell align=\"right\">{row.carbs}</TableCell>\n  //               <TableCell align=\"right\">{row.protein}</TableCell>\n  //             </TableRow>\n  //           ))}\n  //         </TableBody>\n  //       </Table>\n  //     </TableContainer>\n  //   );\n  // }\n\n}\n\n_s(Analytics, \"XeX8hU9z7ftdw0oZYvglkzqiEGA=\", false, function () {\n  return [_util_auth_hooks__WEBPACK_IMPORTED_MODULE_2__.useAuth];\n});\n\n_c = Analytics;\n\nvar _c;\n\n$RefreshReg$(_c, \"Analytics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0g7O0dBeEt1QnBCO1VBRW1CRDs7O0tBRm5CQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYW5hbHl0aWNzLnRzeD8wNWU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Qm94LCBEaXZpZGVyLCBQYXBlciwgR3JpZCwgU3RhY2ssIFR5cG9ncmFwaHksIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZSwgVGFibGVSb3csIFRhYmxlQ29udGFpbmVyLCBUYWJsZUhlYWR9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBCYXJDaGFydCB9IGZyb20gXCJAbXVpL3gtY2hhcnRzL0JhckNoYXJ0XCI7XG5pbXBvcnQge3VzZVF1ZXVlc30gZnJvbSBcIkB1dGlsL3F1ZXVlL2hvb2tzXCI7XG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWQvQXBwTGF5b3V0XCI7XG5pbXBvcnQgUXVldWVDYXJkIGZyb20gXCJAY29tcG9uZW50cy9ob21lL1F1ZXVlQ2FyZFwiO1xuaW1wb3J0IENyZWF0ZVF1ZXVlRGlhbG9nIGZyb20gXCJAY29tcG9uZW50cy9ob21lL0NyZWF0ZVF1ZXVlRGlhbG9nXCI7XG5pbXBvcnQge3VzZUF1dGh9IGZyb20gXCJAdXRpbC9hdXRoL2hvb2tzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWQvQnV0dG9uXCI7XG5pbXBvcnQgQWRkQ2lyY2xlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BZGRDaXJjbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5hbHl0aWNzKCkge1xuXG4gICAgY29uc3Qge2N1cnJlbnRVc2VyLCBpc0F1dGhlbnRpY2F0ZWR9ID0gdXNlQXV0aCgpO1xuICAgIGNvbnN0IGlzVEEgPSBpc0F1dGhlbnRpY2F0ZWQgJiYgY3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIuY291cnNlUGVybWlzc2lvbnMgJiYgKE9iamVjdC5rZXlzKGN1cnJlbnRVc2VyLmNvdXJzZVBlcm1pc3Npb25zKS5sZW5ndGggPiAwKTtcblxuICAgIGNvbnN0IHJvd3MgPSBbXG4gICAgICBjcmVhdGVEYXRhKFwiUmF0dHl0b3VsbGllXCIsIDE1OSwgNi4wLCAyNCwgNC4wKSxcbiAgICAgIGNyZWF0ZURhdGEoXCJBbmR5Qm90XCIsIDIzNywgOS4wLCAzNywgNC4zKSxcbiAgICAgIGNyZWF0ZURhdGEoXCJQb25nXCIsIDI2MiwgMTYuMCwgMjQsIDYuMCksXG4gICAgICBjcmVhdGVEYXRhKFwiVGljVGFjVG9lXCIsIDMwNSwgMy43LCA2NywgNC4zKSxcbiAgICAgIGNyZWF0ZURhdGEoXCJGcnVpdCBOaW5qYVwiLCAzNTYsIDE2LjAsIDQ5LCAzLjkpLFxuICAgICAgY3JlYXRlRGF0YShcIkNhcnRvb25cIiwgMzU2LCAxNi4wLCA0OSwgMy45KSxcbiAgICAgIGNyZWF0ZURhdGEoXCJGcnVpdE5pbmphXCIsIDM1NiwgMTYuMCwgNDksIDMuOSksXG4gICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8QXBwTGF5b3V0IG1heFdpZHRoPXtmYWxzZX0+XG4gICAgICAgIHshaXNUQSAmJiAoXG4gICAgICAgICAgPEJveCBtYj17Mn0+XG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgbXQ9ezE4fVxuICAgICAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBtYj17Mn0+XG4gICAgICAgICAgICAgICAgWW91IGRvIG5vdCBjdXJyZW50bHkgaGF2ZSBhY2Nlc3MgdG8gYW55IGNvdXJzZSBhbmFseXRpY3MuXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICAgIHtpc1RBICYmIChcbiAgICAgICAgICA8Qm94IG1iPXsyfT5cbiAgICAgICAgICAgIDxQYXBlciBzeD17eyBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fT5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgcD17WzIsIG51bGwsIDNdfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAgc3g9e3sgYmdjb2xvcjogXCIjMjE5NmYzXCIgfX0gLy9saWdodCBibHVlXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm94IGhlaWdodD17MTIwfT48L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezAuNX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBub1dyYXA+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjczAxNTA6IEludHJvZHVjdGlvbiB0byBPYmplY3QtT3JpZW50ZWQgUHJvZ3JhbW1pbmcgYW5kIENvbXB1dGVyIFNjaWVuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGZvbnRXZWlnaHQ9ezYwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgQW5hbHl0aWNzXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICAgICAgICAgICAgPFRhYmxlIHN4PXt7IG1pbldpZHRoOiA2NTAgfX0gYXJpYS1sYWJlbD1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5EZXNzZXJ0ICgxMDBnIHNlcnZpbmcpPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+Q2Fsb3JpZXM8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5GYXQmbmJzcDsoZyk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5DYXJicyZuYnNwOyhnKTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlByb3RlaW4mbmJzcDsoZyk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgICAgICAgICAge3Jvd3MubWFwKChyb3cpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cm93Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiY6bGFzdC1jaGlsZCB0ZCwgJjpsYXN0LWNoaWxkIHRoXCI6IHsgYm9yZGVyOiAwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuY2Fsb3JpZXN9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmZhdH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuY2FyYnN9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LnByb3RlaW59PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8QmFyQ2hhcnRcbiAgICAgICAgICAgICAgICB4QXhpcz17W1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzY2FsZVR5cGU6IFwiYmFuZFwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgICAgXCJSYXR0eXRvdWxsaWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIkFuZHlCb3RcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIlBvbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIlRpY1RhY1RvZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiRnJ1aXQgTmluamFcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIkNhcnRvb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBcIkRvb2RsZUp1bXBcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIlRldHJpc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiRmluYWwgUHJvamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIHNlcmllcz17W1xuICAgICAgICAgICAgICAgICAgeyBkYXRhOiBbNCwgMywgNSwgNiwgNCwgNiwgNywgOSwgMTBdLCBjb2xvcjogXCIjNjczYWI3XCIgfSxcbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIHdpZHRoPXsxMDAwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQXBwTGF5b3V0PlxuICAgICk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEYXRhKFxuICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgY2Fsb3JpZXM6IG51bWJlcixcbiAgICAgIGZhdDogbnVtYmVyLFxuICAgICAgY2FyYnM6IG51bWJlcixcbiAgICAgIHByb3RlaW46IG51bWJlclxuICAgICkge1xuICAgICAgcmV0dXJuIHsgbmFtZSwgY2Fsb3JpZXMsIGZhdCwgY2FyYnMsIHByb3RlaW4gfTtcbiAgICB9XG5cbiAgICAvLyBjb25zdCByb3dzID0gW1xuICAgIC8vICAgY3JlYXRlRGF0YShcIkZyb3plbiB5b2dodXJ0XCIsIDE1OSwgNi4wLCAyNCwgNC4wKSxcbiAgICAvLyAgIGNyZWF0ZURhdGEoXCJJY2UgY3JlYW0gc2FuZHdpY2hcIiwgMjM3LCA5LjAsIDM3LCA0LjMpLFxuICAgIC8vICAgY3JlYXRlRGF0YShcIkVjbGFpclwiLCAyNjIsIDE2LjAsIDI0LCA2LjApLFxuICAgIC8vICAgY3JlYXRlRGF0YShcIkN1cGNha2VcIiwgMzA1LCAzLjcsIDY3LCA0LjMpLFxuICAgIC8vICAgY3JlYXRlRGF0YShcIkdpbmdlcmJyZWFkXCIsIDM1NiwgMTYuMCwgNDksIDMuOSksXG4gICAgLy8gXTtcblxuICAgIC8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhc2ljVGFibGUoKSB7XG4gICAgLy8gICByZXR1cm4gKFxuICAgIC8vICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XG4gICAgLy8gICAgICAgPFRhYmxlIHN4PXt7IG1pbldpZHRoOiA2NTAgfX0gYXJpYS1sYWJlbD1cInNpbXBsZSB0YWJsZVwiPlxuICAgIC8vICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAvLyAgICAgICAgICAgPFRhYmxlUm93PlxuICAgIC8vICAgICAgICAgICAgIDxUYWJsZUNlbGw+RGVzc2VydCAoMTAwZyBzZXJ2aW5nKTwvVGFibGVDZWxsPlxuICAgIC8vICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkNhbG9yaWVzPC9UYWJsZUNlbGw+XG4gICAgLy8gICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+RmF0Jm5ic3A7KGcpPC9UYWJsZUNlbGw+XG4gICAgLy8gICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+Q2FyYnMmbmJzcDsoZyk8L1RhYmxlQ2VsbD5cbiAgICAvLyAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5Qcm90ZWluJm5ic3A7KGcpPC9UYWJsZUNlbGw+XG4gICAgLy8gICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgLy8gICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAvLyAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgLy8gICAgICAgICAgIHtyb3dzLm1hcCgocm93KSA9PiAoXG4gICAgLy8gICAgICAgICAgICAgPFRhYmxlUm93XG4gICAgLy8gICAgICAgICAgICAgICBrZXk9e3Jvdy5uYW1lfVxuICAgIC8vICAgICAgICAgICAgICAgc3g9e3sgXCImOmxhc3QtY2hpbGQgdGQsICY6bGFzdC1jaGlsZCB0aFwiOiB7IGJvcmRlcjogMCB9IH19XG4gICAgLy8gICAgICAgICAgICAgPlxuICAgIC8vICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG4gICAgLy8gICAgICAgICAgICAgICAgIHtyb3cubmFtZX1cbiAgICAvLyAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgIC8vICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5jYWxvcmllc308L1RhYmxlQ2VsbD5cbiAgICAvLyAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuZmF0fTwvVGFibGVDZWxsPlxuICAgIC8vICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5jYXJic308L1RhYmxlQ2VsbD5cbiAgICAvLyAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cucHJvdGVpbn08L1RhYmxlQ2VsbD5cbiAgICAvLyAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgIC8vICAgICAgICAgICApKX1cbiAgICAvLyAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgIC8vICAgICAgIDwvVGFibGU+XG4gICAgLy8gICAgIDwvVGFibGVDb250YWluZXI+XG4gICAgLy8gICApO1xuICAgIC8vIH1cbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJQYXBlciIsIlN0YWNrIiwiVHlwb2dyYXBoeSIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlIiwiVGFibGVSb3ciLCJUYWJsZUNvbnRhaW5lciIsIlRhYmxlSGVhZCIsIkJhckNoYXJ0IiwiQXBwTGF5b3V0IiwidXNlQXV0aCIsIkFuYWx5dGljcyIsImN1cnJlbnRVc2VyIiwiaXNBdXRoZW50aWNhdGVkIiwiaXNUQSIsImNvdXJzZVBlcm1pc3Npb25zIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInJvd3MiLCJjcmVhdGVEYXRhIiwib3ZlcmZsb3ciLCJiZ2NvbG9yIiwibWluV2lkdGgiLCJtYXAiLCJyb3ciLCJib3JkZXIiLCJuYW1lIiwiY2Fsb3JpZXMiLCJmYXQiLCJjYXJicyIsInByb3RlaW4iLCJzY2FsZVR5cGUiLCJkYXRhIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/analytics.tsx\n");

/***/ })

});