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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Analytics; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_shared_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/shared/AppLayout */ \"./src/components/shared/AppLayout/index.tsx\");\n/* harmony import */ var _util_auth_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/auth/hooks */ \"./src/util/auth/hooks.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/francescaelia/Documents/CS32/term-project-ldhines-ocedeno-felia-cgchoi/hours-frontend/src/pages/analytics.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Analytics() {\n  _s();\n\n  var _this = this;\n\n  var _useAuth = (0,_util_auth_hooks__WEBPACK_IMPORTED_MODULE_2__.useAuth)(),\n      currentUser = _useAuth.currentUser,\n      isAuthenticated = _useAuth.isAuthenticated;\n\n  var isTA = isAuthenticated && currentUser && currentUser.coursePermissions && Object.keys(currentUser.coursePermissions).length > 0;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_shared_AppLayout__WEBPACK_IMPORTED_MODULE_1__.default, {\n    maxWidth: false,\n    children: [!isTA && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      mb: 2,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n        mt: 18,\n        spacing: 2,\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n          variant: \"h6\",\n          mb: 2,\n          children: \"You do not currently have access to any course analytics.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }, this), isTA && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      mb: 2,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper, {\n        sx: {\n          overflow: \"hidden\"\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n          width: \"100%\",\n          p: [2, null, 3],\n          color: \"#fff\",\n          position: \"relative\",\n          sx: {\n            bgcolor: \"#2196f3\"\n          } //light blue\n          ,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            height: 120\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 17\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n              direction: \"row\",\n              spacing: 0.5,\n              alignItems: \"center\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"body1\",\n                noWrap: true,\n                children: \"cs0150: Introduction to Object-Oriented Programming and Computer Science\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 19\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n              direction: \"row\",\n              spacing: 1,\n              alignItems: \"center\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"h4\",\n                fontWeight: 600,\n                children: \"Analytics\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 17\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableContainer, {\n            component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Table, {\n              sx: {\n                minWidth: 650\n              },\n              \"aria-label\": \"table\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableHead, {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    children: \"Dessert (100g serving)\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 62,\n                    columnNumber: 25\n                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: \"Calories\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 63,\n                    columnNumber: 25\n                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: \"Fat\\xA0(g)\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 64,\n                    columnNumber: 25\n                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: \"Carbs\\xA0(g)\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 65,\n                    columnNumber: 25\n                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: \"Protein\\xA0(g)\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 66,\n                    columnNumber: 25\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 61,\n                  columnNumber: 23\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 21\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableBody, {\n                children: rows.map(function (row) {\n                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                    sx: {\n                      \"&:last-child td, &:last-child th\": {\n                        border: 0\n                      }\n                    },\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                      component: \"th\",\n                      scope: \"row\",\n                      children: row.name\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 77,\n                      columnNumber: 27\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                      align: \"right\",\n                      children: row.calories\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 80,\n                      columnNumber: 27\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                      align: \"right\",\n                      children: row.fat\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 81,\n                      columnNumber: 27\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                      align: \"right\",\n                      children: row.carbs\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 82,\n                      columnNumber: 27\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                      align: \"right\",\n                      children: row.protein\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 83,\n                      columnNumber: 27\n                    }, _this)]\n                  }, row.name, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 71,\n                    columnNumber: 25\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 21\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 19\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 7\n  }, this);\n\n  function createData(name, calories, fat, carbs, protein) {\n    return {\n      name: name,\n      calories: calories,\n      fat: fat,\n      carbs: carbs,\n      protein: protein\n    };\n  } // const rows = [\n  //   createData(\"Frozen yoghurt\", 159, 6.0, 24, 4.0),\n  //   createData(\"Ice cream sandwich\", 237, 9.0, 37, 4.3),\n  //   createData(\"Eclair\", 262, 16.0, 24, 6.0),\n  //   createData(\"Cupcake\", 305, 3.7, 67, 4.3),\n  //   createData(\"Gingerbread\", 356, 16.0, 49, 3.9),\n  // ];\n  // export default function BasicTable() {\n  //   return (\n  //     <TableContainer component={Paper}>\n  //       <Table sx={{ minWidth: 650 }} aria-label=\"simple table\">\n  //         <TableHead>\n  //           <TableRow>\n  //             <TableCell>Dessert (100g serving)</TableCell>\n  //             <TableCell align=\"right\">Calories</TableCell>\n  //             <TableCell align=\"right\">Fat&nbsp;(g)</TableCell>\n  //             <TableCell align=\"right\">Carbs&nbsp;(g)</TableCell>\n  //             <TableCell align=\"right\">Protein&nbsp;(g)</TableCell>\n  //           </TableRow>\n  //         </TableHead>\n  //         <TableBody>\n  //           {rows.map((row) => (\n  //             <TableRow\n  //               key={row.name}\n  //               sx={{ \"&:last-child td, &:last-child th\": { border: 0 } }}\n  //             >\n  //               <TableCell component=\"th\" scope=\"row\">\n  //                 {row.name}\n  //               </TableCell>\n  //               <TableCell align=\"right\">{row.calories}</TableCell>\n  //               <TableCell align=\"right\">{row.fat}</TableCell>\n  //               <TableCell align=\"right\">{row.carbs}</TableCell>\n  //               <TableCell align=\"right\">{row.protein}</TableCell>\n  //             </TableRow>\n  //           ))}\n  //         </TableBody>\n  //       </Table>\n  //     </TableContainer>\n  //   );\n  // }\n\n}\n\n_s(Analytics, \"XeX8hU9z7ftdw0oZYvglkzqiEGA=\", false, function () {\n  return [_util_auth_hooks__WEBPACK_IMPORTED_MODULE_2__.useAuth];\n});\n\n_c = Analytics;\n\nvar _c;\n\n$RefreshReg$(_c, \"Analytics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly9fTl9FLy4vc3JjL3BhZ2VzL2FuYWx5dGljcy50c3g/MDVlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0JveCwgRGl2aWRlciwgUGFwZXIsIEdyaWQsIFN0YWNrLCBUeXBvZ3JhcGh5LCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGUsIFRhYmxlUm93LCBUYWJsZUNvbnRhaW5lciwgVGFibGVIZWFkfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5pbXBvcnQge3VzZVF1ZXVlc30gZnJvbSBcIkB1dGlsL3F1ZXVlL2hvb2tzXCI7XG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWQvQXBwTGF5b3V0XCI7XG5pbXBvcnQgUXVldWVDYXJkIGZyb20gXCJAY29tcG9uZW50cy9ob21lL1F1ZXVlQ2FyZFwiO1xuaW1wb3J0IENyZWF0ZVF1ZXVlRGlhbG9nIGZyb20gXCJAY29tcG9uZW50cy9ob21lL0NyZWF0ZVF1ZXVlRGlhbG9nXCI7XG5pbXBvcnQge3VzZUF1dGh9IGZyb20gXCJAdXRpbC9hdXRoL2hvb2tzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWQvQnV0dG9uXCI7XG5pbXBvcnQgQWRkQ2lyY2xlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BZGRDaXJjbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5hbHl0aWNzKCkge1xuXG4gICAgY29uc3Qge2N1cnJlbnRVc2VyLCBpc0F1dGhlbnRpY2F0ZWR9ID0gdXNlQXV0aCgpO1xuICAgIGNvbnN0IGlzVEEgPSBpc0F1dGhlbnRpY2F0ZWQgJiYgY3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIuY291cnNlUGVybWlzc2lvbnMgJiYgKE9iamVjdC5rZXlzKGN1cnJlbnRVc2VyLmNvdXJzZVBlcm1pc3Npb25zKS5sZW5ndGggPiAwKTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPEFwcExheW91dCBtYXhXaWR0aD17ZmFsc2V9PlxuICAgICAgICB7IWlzVEEgJiYgKFxuICAgICAgICAgIDxCb3ggbWI9ezJ9PlxuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgIG10PXsxOH1cbiAgICAgICAgICAgICAgc3BhY2luZz17Mn1cbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgbWI9ezJ9PlxuICAgICAgICAgICAgICAgIFlvdSBkbyBub3QgY3VycmVudGx5IGhhdmUgYWNjZXNzIHRvIGFueSBjb3Vyc2UgYW5hbHl0aWNzLlxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuICAgICAgICB7aXNUQSAmJiAoXG4gICAgICAgICAgPEJveCBtYj17Mn0+XG4gICAgICAgICAgICA8UGFwZXIgc3g9e3sgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX0+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIHA9e1syLCBudWxsLCAzXX1cbiAgICAgICAgICAgICAgICBjb2xvcj1cIiNmZmZcIlxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgIHN4PXt7IGJnY29sb3I6IFwiIzIxOTZmM1wiIH19IC8vbGlnaHQgYmx1ZVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJveCBoZWlnaHQ9ezEyMH0+PC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXswLjV9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgbm9XcmFwPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY3MwMTUwOiBJbnRyb2R1Y3Rpb24gdG8gT2JqZWN0LU9yaWVudGVkIFByb2dyYW1taW5nIGFuZCBDb21wdXRlciBTY2llbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCIgc3BhY2luZz17MX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBmb250V2VpZ2h0PXs2MDB9PlxuICAgICAgICAgICAgICAgICAgICAgIEFuYWx5dGljc1xuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZSBzeD17eyBtaW5XaWR0aDogNjUwIH19IGFyaWEtbGFiZWw9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RGVzc2VydCAoMTAwZyBzZXJ2aW5nKTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+Q2Fsb3JpZXM8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkZhdCZuYnNwOyhnKTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+Q2FyYnMmbmJzcDsoZyk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPlByb3RlaW4mbmJzcDsoZyk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cm93Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCImOmxhc3QtY2hpbGQgdGQsICY6bGFzdC1jaGlsZCB0aFwiOiB7IGJvcmRlcjogMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmNhbG9yaWVzfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LmZhdH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5jYXJic308L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5wcm90ZWlufTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQXBwTGF5b3V0PlxuICAgICk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEYXRhKFxuICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgY2Fsb3JpZXM6IG51bWJlcixcbiAgICAgIGZhdDogbnVtYmVyLFxuICAgICAgY2FyYnM6IG51bWJlcixcbiAgICAgIHByb3RlaW46IG51bWJlclxuICAgICkge1xuICAgICAgcmV0dXJuIHsgbmFtZSwgY2Fsb3JpZXMsIGZhdCwgY2FyYnMsIHByb3RlaW4gfTtcbiAgICB9XG5cbiAgICAvLyBjb25zdCByb3dzID0gW1xuICAgIC8vICAgY3JlYXRlRGF0YShcIkZyb3plbiB5b2dodXJ0XCIsIDE1OSwgNi4wLCAyNCwgNC4wKSxcbiAgICAvLyAgIGNyZWF0ZURhdGEoXCJJY2UgY3JlYW0gc2FuZHdpY2hcIiwgMjM3LCA5LjAsIDM3LCA0LjMpLFxuICAgIC8vICAgY3JlYXRlRGF0YShcIkVjbGFpclwiLCAyNjIsIDE2LjAsIDI0LCA2LjApLFxuICAgIC8vICAgY3JlYXRlRGF0YShcIkN1cGNha2VcIiwgMzA1LCAzLjcsIDY3LCA0LjMpLFxuICAgIC8vICAgY3JlYXRlRGF0YShcIkdpbmdlcmJyZWFkXCIsIDM1NiwgMTYuMCwgNDksIDMuOSksXG4gICAgLy8gXTtcblxuICAgIC8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhc2ljVGFibGUoKSB7XG4gICAgLy8gICByZXR1cm4gKFxuICAgIC8vICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XG4gICAgLy8gICAgICAgPFRhYmxlIHN4PXt7IG1pbldpZHRoOiA2NTAgfX0gYXJpYS1sYWJlbD1cInNpbXBsZSB0YWJsZVwiPlxuICAgIC8vICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAvLyAgICAgICAgICAgPFRhYmxlUm93PlxuICAgIC8vICAgICAgICAgICAgIDxUYWJsZUNlbGw+RGVzc2VydCAoMTAwZyBzZXJ2aW5nKTwvVGFibGVDZWxsPlxuICAgIC8vICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPkNhbG9yaWVzPC9UYWJsZUNlbGw+XG4gICAgLy8gICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+RmF0Jm5ic3A7KGcpPC9UYWJsZUNlbGw+XG4gICAgLy8gICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+Q2FyYnMmbmJzcDsoZyk8L1RhYmxlQ2VsbD5cbiAgICAvLyAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5Qcm90ZWluJm5ic3A7KGcpPC9UYWJsZUNlbGw+XG4gICAgLy8gICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgLy8gICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAvLyAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgLy8gICAgICAgICAgIHtyb3dzLm1hcCgocm93KSA9PiAoXG4gICAgLy8gICAgICAgICAgICAgPFRhYmxlUm93XG4gICAgLy8gICAgICAgICAgICAgICBrZXk9e3Jvdy5uYW1lfVxuICAgIC8vICAgICAgICAgICAgICAgc3g9e3sgXCImOmxhc3QtY2hpbGQgdGQsICY6bGFzdC1jaGlsZCB0aFwiOiB7IGJvcmRlcjogMCB9IH19XG4gICAgLy8gICAgICAgICAgICAgPlxuICAgIC8vICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG4gICAgLy8gICAgICAgICAgICAgICAgIHtyb3cubmFtZX1cbiAgICAvLyAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgIC8vICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5jYWxvcmllc308L1RhYmxlQ2VsbD5cbiAgICAvLyAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cuZmF0fTwvVGFibGVDZWxsPlxuICAgIC8vICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy5jYXJic308L1RhYmxlQ2VsbD5cbiAgICAvLyAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPntyb3cucHJvdGVpbn08L1RhYmxlQ2VsbD5cbiAgICAvLyAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgIC8vICAgICAgICAgICApKX1cbiAgICAvLyAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgIC8vICAgICAgIDwvVGFibGU+XG4gICAgLy8gICAgIDwvVGFibGVDb250YWluZXI+XG4gICAgLy8gICApO1xuICAgIC8vIH1cbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJQYXBlciIsIlN0YWNrIiwiVHlwb2dyYXBoeSIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlIiwiVGFibGVSb3ciLCJUYWJsZUNvbnRhaW5lciIsIlRhYmxlSGVhZCIsIkFwcExheW91dCIsInVzZUF1dGgiLCJBbmFseXRpY3MiLCJjdXJyZW50VXNlciIsImlzQXV0aGVudGljYXRlZCIsImlzVEEiLCJjb3Vyc2VQZXJtaXNzaW9ucyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJvdmVyZmxvdyIsImJnY29sb3IiLCJtaW5XaWR0aCIsInJvd3MiLCJtYXAiLCJyb3ciLCJib3JkZXIiLCJuYW1lIiwiY2Fsb3JpZXMiLCJmYXQiLCJjYXJicyIsInByb3RlaW4iLCJjcmVhdGVEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/analytics.tsx\n");

/***/ })

});