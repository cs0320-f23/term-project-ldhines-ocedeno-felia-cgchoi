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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Analytics; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_x_charts_BarChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-charts/BarChart */ \"./node_modules/@mui/x-charts/esm/BarChart/index.js\");\n/* harmony import */ var _components_shared_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/shared/AppLayout */ \"./src/components/shared/AppLayout/index.tsx\");\n/* harmony import */ var _util_auth_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @util/auth/hooks */ \"./src/util/auth/hooks.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/gabychoi/Desktop/cs32/term-project-ldhines-ocedeno-felia-cgchoi/hours-frontend/src/pages/analytics.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Analytics() {\n  _s();\n\n  var _this = this;\n\n  var _useAuth = (0,_util_auth_hooks__WEBPACK_IMPORTED_MODULE_2__.useAuth)(),\n      currentUser = _useAuth.currentUser,\n      isAuthenticated = _useAuth.isAuthenticated;\n\n  var isTA = isAuthenticated && currentUser && currentUser.coursePermissions && Object.keys(currentUser.coursePermissions).length > 0;\n  var rows = [createData(\"Rattytoullie\", 159, 24), createData(\"AndyBot\", 237, 37), createData(\"Pong\", 262, 24), createData(\"TicTacToe\", 305, 67), createData(\"Fruit Ninja\", 356, 49), createData(\"Cartoon\", 159, 55), createData(\"DoodleJump\", 222, 40), createData(\"Tetris\", 398, 72), createData(\"Final Project\", 304, 86)];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_shared_AppLayout__WEBPACK_IMPORTED_MODULE_1__.default, {\n    maxWidth: false,\n    children: [!isTA && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      mb: 2,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n        mt: 18,\n        spacing: 2,\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n          variant: \"h6\",\n          mb: 2,\n          children: \"You do not currently have access to any course analytics.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 15\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }, this), isTA && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      mb: 2,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper, {\n        sx: {\n          overflow: \"hidden\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n          width: \"100%\",\n          p: [2, null, 3],\n          color: \"#fff\",\n          position: \"relative\",\n          sx: {\n            bgcolor: \"#2196f3\"\n          } //light blue\n          ,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            height: 120\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 17\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n              direction: \"row\",\n              spacing: 0.5,\n              alignItems: \"center\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"body1\",\n                noWrap: true,\n                children: \"cs0150: Introduction to Object-Oriented Programming and Computer Science\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 19\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n              direction: \"row\",\n              spacing: 1,\n              alignItems: \"center\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"h4\",\n                fontWeight: 600,\n                children: \"Analytics\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 15\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableContainer, {\n          component: _mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Table, {\n            sx: {\n              minWidth: 650\n            },\n            \"aria-label\": \"table\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableHead, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  children: \"Project Name\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 76,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  align: \"right\",\n                  children: \"Number of Visits\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 77,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                  align: \"right\",\n                  children: \"Average Wait Time\\xA0(min)\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 78,\n                  columnNumber: 23\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 19\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableBody, {\n              children: rows.map(function (row) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableRow, {\n                  sx: {\n                    \"&:last-child td, &:last-child th\": {\n                      border: 0\n                    }\n                  },\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    component: \"th\",\n                    scope: \"row\",\n                    children: row.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 89,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: row.visits\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 92,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.TableCell, {\n                    align: \"right\",\n                    children: row.waittime\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 93,\n                    columnNumber: 25\n                  }, _this)]\n                }, row.name, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 83,\n                  columnNumber: 23\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 15\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_x_charts_BarChart__WEBPACK_IMPORTED_MODULE_5__.BarChart, {\n          xAxis: [{\n            scaleType: \"band\",\n            data: [\"Rattytoullie\", \"AndyBot\", \"Pong\", \"TicTacToe\", \"Fruit Ninja\", \"Cartoon\", \"DoodleJump\", \"Tetris\", \"Final Project\"]\n          }],\n          series: [{\n            data: [4, 3, 5, 6, 4, 6, 7, 9, 10],\n            color: \"#673ab7\"\n          }],\n          width: 1000,\n          height: 300\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 7\n  }, this);\n\n  function createData(name, visits, waittime) {\n    return {\n      name: name,\n      visits: visits,\n      waittime: waittime\n    };\n  }\n}\n\n_s(Analytics, \"XeX8hU9z7ftdw0oZYvglkzqiEGA=\", false, function () {\n  return [_util_auth_hooks__WEBPACK_IMPORTED_MODULE_2__.useAuth];\n});\n\n_c = Analytics;\n\nvar _c;\n\n$RefreshReg$(_c, \"Analytics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYW5hbHl0aWNzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFHQTs7QUFJZSxTQUFTYyxTQUFULEdBQXFCO0FBQUE7O0FBQUE7O0FBRWhDLGlCQUF1Q0QseURBQU8sRUFBOUM7QUFBQSxNQUFPRSxXQUFQLFlBQU9BLFdBQVA7QUFBQSxNQUFvQkMsZUFBcEIsWUFBb0JBLGVBQXBCOztBQUNBLE1BQU1DLElBQUksR0FBR0QsZUFBZSxJQUFJRCxXQUFuQixJQUFrQ0EsV0FBVyxDQUFDRyxpQkFBOUMsSUFBb0VDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxXQUFXLENBQUNHLGlCQUF4QixFQUEyQ0csTUFBM0MsR0FBb0QsQ0FBckk7QUFHQSxNQUFNQyxJQUFJLEdBQUcsQ0FDWEMsVUFBVSxDQUFDLGNBQUQsRUFBaUIsR0FBakIsRUFBc0IsRUFBdEIsQ0FEQyxFQUVYQSxVQUFVLENBQUMsU0FBRCxFQUFZLEdBQVosRUFBaUIsRUFBakIsQ0FGQyxFQUdYQSxVQUFVLENBQUMsTUFBRCxFQUFTLEdBQVQsRUFBYyxFQUFkLENBSEMsRUFJWEEsVUFBVSxDQUFDLFdBQUQsRUFBYyxHQUFkLEVBQW1CLEVBQW5CLENBSkMsRUFLWEEsVUFBVSxDQUFDLGFBQUQsRUFBZ0IsR0FBaEIsRUFBcUIsRUFBckIsQ0FMQyxFQU1YQSxVQUFVLENBQUMsU0FBRCxFQUFZLEdBQVosRUFBaUIsRUFBakIsQ0FOQyxFQU9YQSxVQUFVLENBQUMsWUFBRCxFQUFlLEdBQWYsRUFBb0IsRUFBcEIsQ0FQQyxFQVFYQSxVQUFVLENBQUMsUUFBRCxFQUFXLEdBQVgsRUFBZ0IsRUFBaEIsQ0FSQyxFQVNYQSxVQUFVLENBQUMsZUFBRCxFQUFrQixHQUFsQixFQUF1QixFQUF2QixDQVRDLENBQWI7QUFZQSxzQkFDRSw4REFBQyxpRUFBRDtBQUFXLFlBQVEsRUFBRSxLQUFyQjtBQUFBLGVBQ0csQ0FBQ04sSUFBRCxpQkFDQyw4REFBQyw4Q0FBRDtBQUFLLFFBQUUsRUFBRSxDQUFUO0FBQUEsNkJBQ0UsOERBQUMsZ0RBQUQ7QUFDRSxVQUFFLEVBQUUsRUFETjtBQUVFLGVBQU8sRUFBRSxDQUZYO0FBR0Usc0JBQWMsRUFBQyxRQUhqQjtBQUlFLGtCQUFVLEVBQUMsUUFKYjtBQUFBLCtCQU1FLDhEQUFDLHFEQUFEO0FBQVksaUJBQU8sRUFBQyxJQUFwQjtBQUF5QixZQUFFLEVBQUUsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBZUdBLElBQUksaUJBQ0gsOERBQUMsOENBQUQ7QUFBSyxRQUFFLEVBQUUsQ0FBVDtBQUFBLDZCQUNFLDhEQUFDLGdEQUFEO0FBQU8sVUFBRSxFQUFFO0FBQUVPLFVBQUFBLFFBQVEsRUFBRTtBQUFaLFNBQVg7QUFBQSxnQ0FDRSw4REFBQyw4Q0FBRDtBQUNFLGVBQUssRUFBQyxNQURSO0FBRUUsV0FBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLENBRkw7QUFHRSxlQUFLLEVBQUMsTUFIUjtBQUlFLGtCQUFRLEVBQUMsVUFKWDtBQUtFLFlBQUUsRUFBRTtBQUFFQyxZQUFBQSxPQUFPLEVBQUU7QUFBWCxXQUxOLENBSzhCO0FBTDlCO0FBQUEsa0NBT0UsOERBQUMsOENBQUQ7QUFBSyxrQkFBTSxFQUFFO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRixlQVFFLDhEQUFDLDhDQUFEO0FBQUEsb0NBQ0UsOERBQUMsZ0RBQUQ7QUFBTyx1QkFBUyxFQUFDLEtBQWpCO0FBQXVCLHFCQUFPLEVBQUUsR0FBaEM7QUFBcUMsd0JBQVUsRUFBQyxRQUFoRDtBQUFBLHFDQUNFLDhEQUFDLHFEQUFEO0FBQVksdUJBQU8sRUFBQyxPQUFwQjtBQUE0QixzQkFBTSxNQUFsQztBQUFBLDBCQUVJO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFRRSw4REFBQyxnREFBRDtBQUFPLHVCQUFTLEVBQUMsS0FBakI7QUFBdUIscUJBQU8sRUFBRSxDQUFoQztBQUFtQyx3QkFBVSxFQUFDLFFBQTlDO0FBQUEscUNBQ0UsOERBQUMscURBQUQ7QUFBWSx1QkFBTyxFQUFDLElBQXBCO0FBQXlCLDBCQUFVLEVBQUUsR0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUF3QkUsOERBQUMseURBQUQ7QUFBZ0IsbUJBQVMsRUFBRXZCLGdEQUEzQjtBQUFBLGlDQUNFLDhEQUFDLGdEQUFEO0FBQU8sY0FBRSxFQUFFO0FBQUV3QixjQUFBQSxRQUFRLEVBQUU7QUFBWixhQUFYO0FBQThCLDBCQUFXLE9BQXpDO0FBQUEsb0NBQ0UsOERBQUMsb0RBQUQ7QUFBQSxxQ0FDRSw4REFBQyxtREFBRDtBQUFBLHdDQUNFLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBRUUsOERBQUMsb0RBQUQ7QUFBVyx1QkFBSyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGLGVBR0UsOERBQUMsb0RBQUQ7QUFBVyx1QkFBSyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFRRSw4REFBQyxvREFBRDtBQUFBLHdCQUNHSixJQUFJLENBQUNLLEdBQUwsQ0FBUyxVQUFDQyxHQUFEO0FBQUEsb0NBQ1IsOERBQUMsbURBQUQ7QUFFRSxvQkFBRSxFQUFFO0FBQ0Ysd0RBQW9DO0FBQUVDLHNCQUFBQSxNQUFNLEVBQUU7QUFBVjtBQURsQyxtQkFGTjtBQUFBLDBDQU1FLDhEQUFDLG9EQUFEO0FBQVcsNkJBQVMsRUFBQyxJQUFyQjtBQUEwQix5QkFBSyxFQUFDLEtBQWhDO0FBQUEsOEJBQ0dELEdBQUcsQ0FBQ0U7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5GLGVBU0UsOERBQUMsb0RBQUQ7QUFBVyx5QkFBSyxFQUFDLE9BQWpCO0FBQUEsOEJBQTBCRixHQUFHLENBQUNHO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBVEYsZUFVRSw4REFBQyxvREFBRDtBQUFXLHlCQUFLLEVBQUMsT0FBakI7QUFBQSw4QkFBMEJILEdBQUcsQ0FBQ0k7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFWRjtBQUFBLG1CQUNPSixHQUFHLENBQUNFLElBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEUTtBQUFBLGVBQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBeEJGLGVBbURFLDhEQUFDLDREQUFEO0FBQ0UsZUFBSyxFQUFFLENBQ0w7QUFDRUcsWUFBQUEsU0FBUyxFQUFFLE1BRGI7QUFFRUMsWUFBQUEsSUFBSSxFQUFFLENBQ0osY0FESSxFQUVKLFNBRkksRUFHSixNQUhJLEVBSUosV0FKSSxFQUtKLGFBTEksRUFNSixTQU5JLEVBT0osWUFQSSxFQVFKLFFBUkksRUFTSixlQVRJO0FBRlIsV0FESyxDQURUO0FBaUJFLGdCQUFNLEVBQUUsQ0FDTjtBQUFFQSxZQUFBQSxJQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixFQUF6QixDQUFSO0FBQXNDQyxZQUFBQSxLQUFLLEVBQUU7QUFBN0MsV0FETSxDQWpCVjtBQW9CRSxlQUFLLEVBQUUsSUFwQlQ7QUFxQkUsZ0JBQU0sRUFBRTtBQXJCVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5ERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGOztBQWtHQSxXQUFTWixVQUFULENBQ0VPLElBREYsRUFFRUMsTUFGRixFQUdFQyxRQUhGLEVBSUU7QUFDQSxXQUFPO0FBQUVGLE1BQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRQyxNQUFBQSxNQUFNLEVBQU5BLE1BQVI7QUFBZ0JDLE1BQUFBLFFBQVEsRUFBUkE7QUFBaEIsS0FBUDtBQUNEO0FBQ0o7O0dBM0h1QmxCO1VBRW1CRDs7O0tBRm5CQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYW5hbHl0aWNzLnRzeD8wNWU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Qm94LCBEaXZpZGVyLCBQYXBlciwgR3JpZCwgU3RhY2ssIFR5cG9ncmFwaHksIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZSwgVGFibGVSb3csIFRhYmxlQ29udGFpbmVyLCBUYWJsZUhlYWR9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBCYXJDaGFydCB9IGZyb20gXCJAbXVpL3gtY2hhcnRzL0JhckNoYXJ0XCI7XG5pbXBvcnQge3VzZVF1ZXVlc30gZnJvbSBcIkB1dGlsL3F1ZXVlL2hvb2tzXCI7XG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWQvQXBwTGF5b3V0XCI7XG5pbXBvcnQgUXVldWVDYXJkIGZyb20gXCJAY29tcG9uZW50cy9ob21lL1F1ZXVlQ2FyZFwiO1xuaW1wb3J0IENyZWF0ZVF1ZXVlRGlhbG9nIGZyb20gXCJAY29tcG9uZW50cy9ob21lL0NyZWF0ZVF1ZXVlRGlhbG9nXCI7XG5pbXBvcnQge3VzZUF1dGh9IGZyb20gXCJAdXRpbC9hdXRoL2hvb2tzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAY29tcG9uZW50cy9zaGFyZWQvQnV0dG9uXCI7XG5pbXBvcnQgQWRkQ2lyY2xlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BZGRDaXJjbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5hbHl0aWNzKCkge1xuXG4gICAgY29uc3Qge2N1cnJlbnRVc2VyLCBpc0F1dGhlbnRpY2F0ZWR9ID0gdXNlQXV0aCgpO1xuICAgIGNvbnN0IGlzVEEgPSBpc0F1dGhlbnRpY2F0ZWQgJiYgY3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIuY291cnNlUGVybWlzc2lvbnMgJiYgKE9iamVjdC5rZXlzKGN1cnJlbnRVc2VyLmNvdXJzZVBlcm1pc3Npb25zKS5sZW5ndGggPiAwKTtcblxuICAgIFxuICAgIGNvbnN0IHJvd3MgPSBbXG4gICAgICBjcmVhdGVEYXRhKFwiUmF0dHl0b3VsbGllXCIsIDE1OSwgMjQpLFxuICAgICAgY3JlYXRlRGF0YShcIkFuZHlCb3RcIiwgMjM3LCAzNyksXG4gICAgICBjcmVhdGVEYXRhKFwiUG9uZ1wiLCAyNjIsIDI0KSxcbiAgICAgIGNyZWF0ZURhdGEoXCJUaWNUYWNUb2VcIiwgMzA1LCA2NyksXG4gICAgICBjcmVhdGVEYXRhKFwiRnJ1aXQgTmluamFcIiwgMzU2LCA0OSksXG4gICAgICBjcmVhdGVEYXRhKFwiQ2FydG9vblwiLCAxNTksIDU1KSxcbiAgICAgIGNyZWF0ZURhdGEoXCJEb29kbGVKdW1wXCIsIDIyMiwgNDApLFxuICAgICAgY3JlYXRlRGF0YShcIlRldHJpc1wiLCAzOTgsIDcyKSxcbiAgICAgIGNyZWF0ZURhdGEoXCJGaW5hbCBQcm9qZWN0XCIsIDMwNCwgODYpXG4gICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8QXBwTGF5b3V0IG1heFdpZHRoPXtmYWxzZX0+XG4gICAgICAgIHshaXNUQSAmJiAoXG4gICAgICAgICAgPEJveCBtYj17Mn0+XG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgbXQ9ezE4fVxuICAgICAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBtYj17Mn0+XG4gICAgICAgICAgICAgICAgWW91IGRvIG5vdCBjdXJyZW50bHkgaGF2ZSBhY2Nlc3MgdG8gYW55IGNvdXJzZSBhbmFseXRpY3MuXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICAgIHtpc1RBICYmIChcbiAgICAgICAgICA8Qm94IG1iPXsyfT5cbiAgICAgICAgICAgIDxQYXBlciBzeD17eyBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fT5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgcD17WzIsIG51bGwsIDNdfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAgc3g9e3sgYmdjb2xvcjogXCIjMjE5NmYzXCIgfX0gLy9saWdodCBibHVlXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm94IGhlaWdodD17MTIwfT48L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezAuNX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBub1dyYXA+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjczAxNTA6IEludHJvZHVjdGlvbiB0byBPYmplY3QtT3JpZW50ZWQgUHJvZ3JhbW1pbmcgYW5kIENvbXB1dGVyIFNjaWVuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIiBzcGFjaW5nPXsxfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGZvbnRXZWlnaHQ9ezYwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgQW5hbHl0aWNzXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICAgICAgICAgICAgPFRhYmxlIHN4PXt7IG1pbldpZHRoOiA2NTAgfX0gYXJpYS1sYWJlbD1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Qcm9qZWN0IE5hbWU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5OdW1iZXIgb2YgVmlzaXRzPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+QXZlcmFnZSBXYWl0IFRpbWUmbmJzcDsobWluKTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICAgICAgICB7cm93cy5tYXAoKHJvdykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvd1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyb3cubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiJjpsYXN0LWNoaWxkIHRkLCAmOmxhc3QtY2hpbGQgdGhcIjogeyBib3JkZXI6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3Jvdy52aXNpdHN9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57cm93LndhaXR0aW1lfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPEJhckNoYXJ0XG4gICAgICAgICAgICAgICAgeEF4aXM9e1tcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVUeXBlOiBcImJhbmRcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgICAgICAgIFwiUmF0dHl0b3VsbGllXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJBbmR5Qm90XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJQb25nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJUaWNUYWNUb2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIkZydWl0IE5pbmphXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJDYXJ0b29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJEb29kbGVKdW1wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJUZXRyaXNcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIkZpbmFsIFByb2plY3RcIixcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBzZXJpZXM9e1tcbiAgICAgICAgICAgICAgICAgIHsgZGF0YTogWzQsIDMsIDUsIDYsIDQsIDYsIDcsIDksIDEwXSwgY29sb3I6IFwiIzY3M2FiN1wiIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICB3aWR0aD17MTAwMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0FwcExheW91dD5cbiAgICApO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGF0YShcbiAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgIHZpc2l0czogbnVtYmVyLFxuICAgICAgd2FpdHRpbWU6IG51bWJlcixcbiAgICApIHtcbiAgICAgIHJldHVybiB7IG5hbWUsIHZpc2l0cywgd2FpdHRpbWUgfTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiUGFwZXIiLCJTdGFjayIsIlR5cG9ncmFwaHkiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZSIsIlRhYmxlUm93IiwiVGFibGVDb250YWluZXIiLCJUYWJsZUhlYWQiLCJCYXJDaGFydCIsIkFwcExheW91dCIsInVzZUF1dGgiLCJBbmFseXRpY3MiLCJjdXJyZW50VXNlciIsImlzQXV0aGVudGljYXRlZCIsImlzVEEiLCJjb3Vyc2VQZXJtaXNzaW9ucyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJyb3dzIiwiY3JlYXRlRGF0YSIsIm92ZXJmbG93IiwiYmdjb2xvciIsIm1pbldpZHRoIiwibWFwIiwicm93IiwiYm9yZGVyIiwibmFtZSIsInZpc2l0cyIsIndhaXR0aW1lIiwic2NhbGVUeXBlIiwiZGF0YSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/analytics.tsx\n");

/***/ })

});