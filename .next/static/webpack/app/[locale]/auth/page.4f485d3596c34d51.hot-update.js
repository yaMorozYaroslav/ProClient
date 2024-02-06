"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/auth/page",{

/***/ "(app-pages-browser)/./comps/AuthForm/AuthForm.js":
/*!************************************!*\
  !*** ./comps/AuthForm/AuthForm.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthForm: function() { return /* binding */ AuthForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_form_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-form.styled */ \"(app-pages-browser)/./comps/AuthForm/auth-form.styled.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../navigation */ \"(app-pages-browser)/./navigation.ts\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-intl */ \"(app-pages-browser)/./node_modules/next-intl/dist/development/index.react-client.js\");\n/* harmony import */ var next_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_intl__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _context_user_UserState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/user/UserState */ \"(app-pages-browser)/./context/user/UserState.js\");\n/* __next_internal_client_entry_do_not_use__ AuthForm auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst initialState = {\n    name: \"\",\n    email: \"\",\n    password: \"\",\n    confPass: \"\"\n};\nfunction AuthForm() {\n    _s();\n    const t = (0,next_intl__WEBPACK_IMPORTED_MODULE_6__.useTranslations)(\"AuthForm\");\n    const router = (0,_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { userData, setFromStorage, signIn, signUp, logout, error, clearError } = (0,_context_user_UserState__WEBPACK_IMPORTED_MODULE_5__.useUserContext)();\n    const [source, setSource] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(initialState);\n    const [registered, setRegistered] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    function handSubmit(e) {\n        e.preventDefault();\n        if (registered) {\n            signIn(source);\n        } else {\n            if (source.password !== source.confPass) {\n                alert(\"Passwords do not match.\");\n            } else {\n                signUp(source);\n            }\n        }\n    }\n    const handChange = (e)=>setSource({\n            ...source,\n            [e.target.name]: e.target.value\n        });\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (userData.user) router.push(\"/\");\n    }, [\n        userData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_form_styled__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_form_styled__WEBPACK_IMPORTED_MODULE_2__.Form, {\n                onSubmit: handSubmit,\n                id: \"form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_form_styled__WEBPACK_IMPORTED_MODULE_2__.Title, {\n                        children: registered ? t(\"sign_up\") : t(\"sign_in\")\n                    }, void 0, false, {\n                        fileName: \"/home/yaro/ShopCli/comps/AuthForm/AuthForm.js\",\n                        lineNumber: 42,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_form_styled__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                        children: [\n                            t(\"e_mail\"),\n                            \":\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yaro/ShopCli/comps/AuthForm/AuthForm.js\",\n                        lineNumber: 43,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_form_styled__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        name: \"email\",\n                        placeholder: t(\"p_mail\"),\n                        onChange: handChange,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/home/yaro/ShopCli/comps/AuthForm/AuthForm.js\",\n                        lineNumber: 44,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/yaro/ShopCli/comps/AuthForm/AuthForm.js\",\n                        lineNumber: 45,\n                        columnNumber: 44\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_form_styled__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                        text: \"green\",\n                        children: [\n                            t(\"password\"),\n                            \":\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/yaro/ShopCli/comps/AuthForm/AuthForm.js\",\n                        lineNumber: 46,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_form_styled__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        text: \"black\",\n                        placeholder: t(\"p_create\"),\n                        name: \"password\",\n                        onChange: handChange,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/home/yaro/ShopCli/comps/AuthForm/AuthForm.js\",\n                        lineNumber: 47,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/yaro/ShopCli/comps/AuthForm/AuthForm.js\",\n                        lineNumber: 48,\n                        columnNumber: 44\n                    }, this),\n                    !registered && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_form_styled__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                                children: [\n                                    t(\"name\"),\n                                    \":\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/yaro/ShopCli/comps/AuthForm/AuthForm.js\",\n                                lineNumber: 50,\n                                columnNumber: 3\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_form_styled__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                name: \"name\",\n                                placeholder: t(\"p_name\"),\n                                onChange: handChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/home/yaro/ShopCli/comps/AuthForm/AuthForm.js\",\n                                lineNumber: 51,\n                                columnNumber: 3\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/yaro/ShopCli/comps/AuthForm/AuthForm.js\",\n                                lineNumber: 52,\n                                columnNumber: 44\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_form_styled__WEBPACK_IMPORTED_MODULE_2__.Label, {\n                                children: [\n                                    t(\"password\"),\n                                    \":\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/yaro/ShopCli/comps/AuthForm/AuthForm.js\",\n                                lineNumber: 54,\n                                columnNumber: 3\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_form_styled__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                placeholder: t(\"p_confirm\"),\n                                name: \"confPass\",\n                                onChange: handChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/home/yaro/ShopCli/comps/AuthForm/AuthForm.js\",\n                                lineNumber: 55,\n                                columnNumber: 3\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/yaro/ShopCli/comps/AuthForm/AuthForm.js\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_form_styled__WEBPACK_IMPORTED_MODULE_2__.Submit, {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/home/yaro/ShopCli/comps/AuthForm/AuthForm.js\",\n                        lineNumber: 58,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/yaro/ShopCli/comps/AuthForm/AuthForm.js\",\n                        lineNumber: 58,\n                        columnNumber: 44\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/yaro/ShopCli/comps/AuthForm/AuthForm.js\",\n                lineNumber: 41,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_form_styled__WEBPACK_IMPORTED_MODULE_2__.Toggler, {\n                className: \"styledLink\",\n                onClick: ()=>setRegistered(!registered),\n                children: registered ? t(\"sign_in\") : t(\"sign_up\")\n            }, void 0, false, {\n                fileName: \"/home/yaro/ShopCli/comps/AuthForm/AuthForm.js\",\n                lineNumber: 61,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth_form_styled__WEBPACK_IMPORTED_MODULE_2__.StyledLink, {\n                className: \"styledLink\",\n                href: \"/\",\n                children: t(\"menu\")\n            }, void 0, false, {\n                fileName: \"/home/yaro/ShopCli/comps/AuthForm/AuthForm.js\",\n                lineNumber: 66,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yaro/ShopCli/comps/AuthForm/AuthForm.js\",\n        lineNumber: 40,\n        columnNumber: 11\n    }, this);\n}\n_s(AuthForm, \"QguLpbclSEi33RPWHhjftkSMBAk=\", false, function() {\n    return [\n        next_intl__WEBPACK_IMPORTED_MODULE_6__.useTranslations,\n        _navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _context_user_UserState__WEBPACK_IMPORTED_MODULE_5__.useUserContext\n    ];\n});\n_c = AuthForm;\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBzL0F1dGhGb3JtL0F1dGhGb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeUI7QUFDYztBQUNDO0FBRVo7QUFDZ0I7QUFDSDtBQUVrQjtBQUUzRCxNQUFNTyxlQUFlO0lBQUNDLE1BQU07SUFBSUMsT0FBTztJQUFJQyxVQUFVO0lBQUlDLFVBQVU7QUFBRTtBQUU5RCxTQUFTQzs7SUFDZixNQUFNQyxJQUFJUiwwREFBZUEsQ0FBQztJQUMxQixNQUFNUyxTQUFTVixzREFBU0E7SUFFeEIsTUFBTSxFQUFDVyxRQUFRLEVBQUVDLGNBQWMsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFDN0JDLEtBQUssRUFBRUMsVUFBVSxFQUFDLEdBQUlmLHVFQUFjQTtJQUU5RCxNQUFNLENBQUNnQixRQUFRQyxVQUFVLEdBQUd2QixxREFBYyxDQUFDTztJQUUzQyxNQUFNLENBQUNrQixZQUFZQyxjQUFjLEdBQUcxQixxREFBYyxDQUFDO0lBRW5ELFNBQVMyQixXQUFXQyxDQUFDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2YsSUFBR0osWUFBVztZQUFDUixPQUFPSztRQUNwQixPQUFLO1lBQ0wsSUFBSUEsT0FBT1osUUFBUSxLQUFLWSxPQUFPWCxRQUFRLEVBQUU7Z0JBQy9CbUIsTUFBTTtZQUNYLE9BQUs7Z0JBQUNaLE9BQU9JO1lBQ2Q7UUFBQztJQUFDO0lBRVYsTUFBTVMsYUFBWSxDQUFDSCxJQUFLTCxVQUFVO1lBQUMsR0FBR0QsTUFBTTtZQUFFLENBQUNNLEVBQUVJLE1BQU0sQ0FBQ3hCLElBQUksQ0FBQyxFQUFFb0IsRUFBRUksTUFBTSxDQUFDQyxLQUFLO1FBQUE7SUFFMUVqQyxzREFBZSxDQUFDO1FBQ2hCLElBQUdlLFNBQVNvQixJQUFJLEVBQUNyQixPQUFPc0IsSUFBSSxDQUFDO0lBQy9CLEdBQUU7UUFBQ3JCO0tBQVM7SUFFWixxQkFBUSw4REFBQ2Qsd0RBQVc7OzBCQUNsQiw4REFBQ0EsbURBQU07Z0JBQUNzQyxVQUFVWjtnQkFBWWEsSUFBRzs7a0NBQ2hDLDhEQUFDdkMsb0RBQU87a0NBQUV3QixhQUFXWixFQUFFLGFBQVdBLEVBQUU7Ozs7OztrQ0FDdkMsOERBQUNaLG9EQUFPOzs0QkFBRVksRUFBRTs0QkFBVTs7Ozs7OztrQ0FDdEIsOERBQUNaLG9EQUFPO3dCQUFDTyxNQUFLO3dCQUFRbUMsYUFBYTlCLEVBQUU7d0JBQzVCK0IsVUFBVWI7d0JBQVljLFFBQVE7Ozs7OztrQ0FBRSw4REFBQ0M7Ozs7O2tDQUMxQyw4REFBQzdDLG9EQUFPO3dCQUFDOEMsTUFBSzs7NEJBQVNsQyxFQUFFOzRCQUFZOzs7Ozs7O2tDQUNyQyw4REFBQ1osb0RBQU87d0JBQUM4QyxNQUFLO3dCQUFRSixhQUFhOUIsRUFBRTt3QkFBYUwsTUFBSzt3QkFDOUNvQyxVQUFVYjt3QkFBWWMsUUFBUTs7Ozs7O2tDQUFFLDhEQUFDQzs7Ozs7b0JBQ3pDLENBQUNyQiw0QkFBZTs7MENBQ2pCLDhEQUFDeEIsb0RBQU87O29DQUFFWSxFQUFFO29DQUFROzs7Ozs7OzBDQUNwQiw4REFBQ1osb0RBQU87Z0NBQUNPLE1BQUs7Z0NBQU9tQyxhQUFhOUIsRUFBRTtnQ0FDM0IrQixVQUFVYjtnQ0FBWWMsUUFBUTs7Ozs7OzBDQUFFLDhEQUFDQzs7Ozs7MENBRTFDLDhEQUFDN0Msb0RBQU87O29DQUFFWSxFQUFFO29DQUFZOzs7Ozs7OzBDQUN4Qiw4REFBQ1osb0RBQU87Z0NBQUMwQyxhQUFhOUIsRUFBRTtnQ0FBY0wsTUFBSztnQ0FDbENvQyxVQUFVYjtnQ0FBWWMsUUFBUTs7Ozs7OzBDQUNyQiw4REFBQ0M7Ozs7Ozs7a0NBQ25CLDhEQUFDN0MscURBQVE7d0JBQUNnRCxNQUFLO2tDQUFTOzs7Ozs7a0NBQWlCLDhEQUFDSDs7Ozs7Ozs7Ozs7MEJBRzFDLDhEQUFDN0Msc0RBQVM7Z0JBQUNrRCxXQUFVO2dCQUNWQyxTQUFTLElBQUkxQixjQUFjLENBQUNEOzBCQUNmQSxhQUFXWixFQUFFLGFBQ3RCQSxFQUFFOzs7Ozs7MEJBRWhCLDhEQUFDWix5REFBWTtnQkFBQ2tELFdBQVU7Z0JBQWFHLE1BQU07MEJBQU16QyxFQUFFOzs7Ozs7Ozs7Ozs7QUFFckQ7R0F0RGVEOztRQUNMUCxzREFBZUE7UUFDVkQsa0RBQVNBO1FBR3dCRSxtRUFBY0E7OztLQUwvQ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcHMvQXV0aEZvcm0vQXV0aEZvcm0uanM/NGE3NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9hdXRoLWZvcm0uc3R5bGVkJ1xuaW1wb3J0IHtMYWJlbH0gZnJvbSAnLi9hdXRoLWZvcm0uc3R5bGVkJ1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuLi8uLi9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHt1c2VUcmFuc2xhdGlvbnN9IGZyb20gJ25leHQtaW50bCdcblxuaW1wb3J0IHt1c2VVc2VyQ29udGV4dH0gZnJvbSAnLi4vLi4vY29udGV4dC91c2VyL1VzZXJTdGF0ZSdcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge25hbWU6ICcnLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJywgY29uZlBhc3M6ICcnfVxuXG5leHBvcnQgZnVuY3Rpb24gQXV0aEZvcm0oKXtcblx0Y29uc3QgdCA9IHVzZVRyYW5zbGF0aW9ucyhcIkF1dGhGb3JtXCIpXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cdFxuXHRjb25zdCB7dXNlckRhdGEsIHNldEZyb21TdG9yYWdlLCBzaWduSW4sIHNpZ25VcCwgbG9nb3V0LFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciwgY2xlYXJFcnJvcn0gPSAgdXNlVXNlckNvbnRleHQoKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICBcblx0Y29uc3QgW3NvdXJjZSwgc2V0U291cmNlXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxTdGF0ZSlcblx0XG5cdGNvbnN0IFtyZWdpc3RlcmVkLCBzZXRSZWdpc3RlcmVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVx0XG5cdFxuXHRmdW5jdGlvbiBoYW5kU3VibWl0KGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKVx0XHRcdCBcblx0XHRcdGlmKHJlZ2lzdGVyZWQpe3NpZ25Jbihzb3VyY2UpXG5cdFx0ICAgfWVsc2V7XG5cdFx0XHQgIGlmKChzb3VyY2UucGFzc3dvcmQgIT09IHNvdXJjZS5jb25mUGFzcykpe1xuXHQgICAgICAgICAgICAgIGFsZXJ0KCdQYXNzd29yZHMgZG8gbm90IG1hdGNoLicpXG5cdCAgICAgICAgIH1lbHNle3NpZ25VcChzb3VyY2UpXG4gICAgICAgICB9fX0gICAgIFxuXHQgICAgIFxuXHRjb25zdCBoYW5kQ2hhbmdlID0oZSk9PiBzZXRTb3VyY2Uoey4uLnNvdXJjZSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZX0pXG4gICAgXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XG5cdFx0ICBpZih1c2VyRGF0YS51c2VyKXJvdXRlci5wdXNoKCcvJylcblx0XHR9LFt1c2VyRGF0YV0pXG5cdFx0XG4gIHJldHVybiAgPFMuQ29udGFpbmVyPlxuICAgIDxTLkZvcm0gb25TdWJtaXQ9e2hhbmRTdWJtaXR9IGlkPSdmb3JtJz5cbiAgICAgPFMuVGl0bGU+e3JlZ2lzdGVyZWQ/dChcInNpZ25fdXBcIik6dChcInNpZ25faW5cIil9PC9TLlRpdGxlPlxuXHQgPFMuTGFiZWw+e3QoJ2VfbWFpbCcpfTo8L1MuTGFiZWw+XG5cdCA8Uy5JbnB1dCBuYW1lPSdlbWFpbCcgcGxhY2Vob2xkZXI9e3QoJ3BfbWFpbCcpfVxuXHQgICAgICAgICAgb25DaGFuZ2U9e2hhbmRDaGFuZ2V9IHJlcXVpcmVkLz48YnIvPlxuXHQgPFMuTGFiZWwgdGV4dD0nZ3JlZW4nPnt0KCdwYXNzd29yZCcpfTo8L1MuTGFiZWw+XG5cdCA8Uy5JbnB1dCB0ZXh0PSdibGFjaycgcGxhY2Vob2xkZXI9e3QoJ3BfY3JlYXRlJyl9IG5hbWU9J3Bhc3N3b3JkJ1xuXHQgICAgICAgICAgb25DaGFuZ2U9e2hhbmRDaGFuZ2V9IHJlcXVpcmVkLz48YnIvPlxuXHQgeyFyZWdpc3RlcmVkICYmICg8PlxuXHQgPFMuTGFiZWw+e3QoJ25hbWUnKX06PC9TLkxhYmVsPlxuXHQgPFMuSW5wdXQgbmFtZT0nbmFtZScgcGxhY2Vob2xkZXI9e3QoJ3BfbmFtZScpfVxuXHQgICAgICAgICAgb25DaGFuZ2U9e2hhbmRDaGFuZ2V9IHJlcXVpcmVkLz48YnIvPlxuXHQgXG5cdCA8Uy5MYWJlbD57dCgncGFzc3dvcmQnKX06PC9TLkxhYmVsPlxuXHQgPFMuSW5wdXQgcGxhY2Vob2xkZXI9e3QoJ3BfY29uZmlybScpfSBuYW1lPSdjb25mUGFzcydcblx0ICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kQ2hhbmdlfSByZXF1aXJlZC8+XG5cdCAgICAgICAgICAgICAgICAgICA8YnIvPjwvPil9ICAgXG5cdCA8Uy5TdWJtaXQgdHlwZT0nc3VibWl0Jz5TdWJtaXQ8L1MuU3VibWl0Pjxici8+ICAgICAgICAgIFxuXHQgXG5cdDwvUy5Gb3JtPlxuXHQgPFMuVG9nZ2xlciBjbGFzc05hbWU9J3N0eWxlZExpbmsnXG5cdCAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5zZXRSZWdpc3RlcmVkKCFyZWdpc3RlcmVkKX0+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHtyZWdpc3RlcmVkP3QoXCJzaWduX2luXCIpXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICA6dChcInNpZ25fdXBcIil9PC9TLlRvZ2dsZXI+XG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICBcblx0ICA8Uy5TdHlsZWRMaW5rIGNsYXNzTmFtZT0nc3R5bGVkTGluaycgaHJlZj17Jy8nfT57dCgnbWVudScpfTwvUy5TdHlsZWRMaW5rPlxuICA8L1MuQ29udGFpbmVyPlxuXHR9XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTIiwiTGFiZWwiLCJMaW5rIiwidXNlUm91dGVyIiwidXNlVHJhbnNsYXRpb25zIiwidXNlVXNlckNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZQYXNzIiwiQXV0aEZvcm0iLCJ0Iiwicm91dGVyIiwidXNlckRhdGEiLCJzZXRGcm9tU3RvcmFnZSIsInNpZ25JbiIsInNpZ25VcCIsImxvZ291dCIsImVycm9yIiwiY2xlYXJFcnJvciIsInNvdXJjZSIsInNldFNvdXJjZSIsInVzZVN0YXRlIiwicmVnaXN0ZXJlZCIsInNldFJlZ2lzdGVyZWQiLCJoYW5kU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJoYW5kQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJ1c2VyIiwicHVzaCIsIkNvbnRhaW5lciIsIkZvcm0iLCJvblN1Ym1pdCIsImlkIiwiVGl0bGUiLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImJyIiwidGV4dCIsIlN1Ym1pdCIsInR5cGUiLCJUb2dnbGVyIiwiY2xhc3NOYW1lIiwib25DbGljayIsIlN0eWxlZExpbmsiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./comps/AuthForm/AuthForm.js\n"));

/***/ })

});