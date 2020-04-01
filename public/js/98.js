(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/User/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/User/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    users: Object
  },
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/User/Index.vue?vue&type=template&id=2be8c6f7&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/User/Index.vue?vue&type=template&id=2be8c6f7& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "layout",
    { attrs: { title: "Users" } },
    [
      _c(
        "div",
        { staticClass: "router-header flex flex-wrap items-center mb-6" },
        [
          _c(
            "div",
            {
              staticClass:
                "content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
            },
            [_c("h2", { staticClass: "mb-1" }, [_vm._v("Users")])]
          ),
          _vm._v(" "),
          _c("vx-breadcrumb", {
            attrs: {
              links: [
                {
                  title: "Dashboard",
                  url: _vm.route("admin.dashboard")
                },
                {
                  title: "Users",
                  active: true
                }
              ]
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-row",
        { attrs: { "vs-type": "flex" } },
        [
          _c(
            "vs-col",
            {
              staticClass: "mb-2",
              attrs: {
                "vs-type": "flex",
                "vs-justify": "center",
                "vs-align": "center",
                "vs-w": "3",
                "vs-sm": "12",
                "vs-xs": "12"
              }
            },
            [
              _c(
                "vx-card",
                [
                  _c(
                    "vs-row",
                    [
                      _c(
                        "vs-col",
                        {
                          attrs: { "vs-type": "flex", "vs-justify": "flex-end" }
                        },
                        [
                          _c(
                            "vs-dropdown",
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "flex items-center",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("feather-icon", {
                                    attrs: {
                                      icon: "MoreHorizontalIcon",
                                      svgClasses: "w-6 h-6 text-grey"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-dropdown-menu",
                                [
                                  _c(
                                    "inertia-link",
                                    {
                                      attrs: {
                                        href: _vm.route(
                                          "admin.roles.edit",
                                          _vm.users.admin.superAdminId
                                        )
                                      }
                                    },
                                    [
                                      _c("vs-dropdown-item", [
                                        _vm._v("Super Admin Permissions")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "inertia-link",
                                    {
                                      attrs: {
                                        href: _vm.route(
                                          "admin.roles.edit",
                                          _vm.users.admin.schoolAdminId
                                        )
                                      }
                                    },
                                    [
                                      _c("vs-dropdown-item", [
                                        _vm._v("School Admin Permissions")
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "inertia-link",
                    { attrs: { href: _vm.route("admin.admins.index") } },
                    [
                      _c("vs-avatar", {
                        staticClass: "mx-auto mb-6 block",
                        attrs: {
                          size: "80px",
                          src: "/images/icons/users/admins.svg"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex items-center w-full justify-center"
                          },
                          [
                            _c("h4", [_vm._v("Admins")]),
                            _vm._v(" "),
                            _c(
                              "vs-chip",
                              {
                                staticClass: "ml-1",
                                attrs: { color: "primary" }
                              },
                              [_vm._v(_vm._s(_vm.users.admin.count))]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-grey" }, [
                          _vm._v(_vm._s(_vm.users.admin.description))
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-col",
            {
              staticClass: "mb-2",
              attrs: {
                "vs-type": "flex",
                "vs-justify": "center",
                "vs-align": "center",
                "vs-w": "3",
                "vs-sm": "12",
                "vs-xs": "12"
              }
            },
            [
              _c(
                "vx-card",
                [
                  _c(
                    "vs-row",
                    [
                      _c(
                        "vs-col",
                        {
                          attrs: { "vs-type": "flex", "vs-justify": "flex-end" }
                        },
                        [
                          _c(
                            "vs-dropdown",
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "flex items-center",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("feather-icon", {
                                    attrs: {
                                      icon: "MoreHorizontalIcon",
                                      svgClasses: "w-6 h-6 text-grey"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-dropdown-menu",
                                [
                                  _c(
                                    "inertia-link",
                                    {
                                      attrs: {
                                        href: _vm.route(
                                          "admin.roles.edit",
                                          _vm.users.teacher.headTeacherId
                                        )
                                      }
                                    },
                                    [
                                      _c("vs-dropdown-item", [
                                        _vm._v("Head Teacher Permissions")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "inertia-link",
                                    {
                                      attrs: {
                                        href: _vm.route(
                                          "admin.roles.edit",
                                          _vm.users.teacher.teacherId
                                        )
                                      }
                                    },
                                    [
                                      _c("vs-dropdown-item", [
                                        _vm._v("Teacher Permissions")
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "inertia-link",
                    { attrs: { href: _vm.route("admin.teachers.index") } },
                    [
                      _c("vs-avatar", {
                        staticClass: "mx-auto mb-6 block",
                        attrs: {
                          size: "80px",
                          src: "/images/icons/users/teachers.svg"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex items-center w-full justify-center"
                          },
                          [
                            _c("h4", [_vm._v("Teachers")]),
                            _vm._v(" "),
                            _c(
                              "vs-chip",
                              {
                                staticClass: "ml-1",
                                attrs: { color: "primary" }
                              },
                              [_vm._v(_vm._s(_vm.users.teacher.count))]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-grey" }, [
                          _vm._v(_vm._s(_vm.users.teacher.description))
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-col",
            {
              staticClass: "mb-2",
              attrs: {
                "vs-type": "flex",
                "vs-justify": "center",
                "vs-align": "center",
                "vs-w": "3",
                "vs-sm": "12",
                "vs-xs": "12"
              }
            },
            [
              _c(
                "vx-card",
                [
                  _c(
                    "vs-row",
                    [
                      _c(
                        "vs-col",
                        {
                          attrs: { "vs-type": "flex", "vs-justify": "flex-end" }
                        },
                        [
                          _c(
                            "vs-dropdown",
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "flex items-center",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("feather-icon", {
                                    attrs: {
                                      icon: "MoreHorizontalIcon",
                                      svgClasses: "w-6 h-6 text-grey"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-dropdown-menu",
                                [
                                  _c(
                                    "inertia-link",
                                    {
                                      attrs: {
                                        href: _vm.route(
                                          "admin.roles.edit",
                                          _vm.users.accountant.id
                                        )
                                      }
                                    },
                                    [
                                      _c("vs-dropdown-item", [
                                        _vm._v("Permissions")
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "inertia-link",
                    { attrs: { href: _vm.route("admin.accountants.index") } },
                    [
                      _c("vs-avatar", {
                        staticClass: "mx-auto mb-6 block",
                        attrs: {
                          size: "80px",
                          src: "/images/icons/users/accountants.svg"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex items-center w-full justify-center"
                          },
                          [
                            _c("h4", [_vm._v("Accountants")]),
                            _vm._v(" "),
                            _c(
                              "vs-chip",
                              {
                                staticClass: "ml-1",
                                attrs: { color: "primary" }
                              },
                              [_vm._v(_vm._s(_vm.users.accountant.count))]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-grey" }, [
                          _vm._v(_vm._s(_vm.users.accountant.description))
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-col",
            {
              staticClass: "mb-2",
              attrs: {
                "vs-type": "flex",
                "vs-justify": "center",
                "vs-align": "center",
                "vs-w": "3",
                "vs-sm": "12",
                "vs-xs": "12"
              }
            },
            [
              _c(
                "vx-card",
                [
                  _c(
                    "vs-row",
                    [
                      _c(
                        "vs-col",
                        {
                          attrs: { "vs-type": "flex", "vs-justify": "flex-end" }
                        },
                        [
                          _c(
                            "vs-dropdown",
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "flex items-center",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("feather-icon", {
                                    attrs: {
                                      icon: "MoreHorizontalIcon",
                                      svgClasses: "w-6 h-6 text-grey"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-dropdown-menu",
                                [
                                  _c(
                                    "inertia-link",
                                    {
                                      attrs: {
                                        href: _vm.route(
                                          "admin.roles.edit",
                                          _vm.users.parent.id
                                        )
                                      }
                                    },
                                    [
                                      _c("vs-dropdown-item", [
                                        _vm._v("Permissions")
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "inertia-link",
                    { attrs: { href: _vm.route("admin.parents.index") } },
                    [
                      _c("vs-avatar", {
                        staticClass: "mx-auto mb-6 block",
                        attrs: {
                          size: "80px",
                          src: "/images/icons/users/parents.svg"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex items-center w-full justify-center"
                          },
                          [
                            _c("h4", [_vm._v("Parents")]),
                            _vm._v(" "),
                            _c(
                              "vs-chip",
                              {
                                staticClass: "ml-1",
                                attrs: { color: "primary" }
                              },
                              [_vm._v(_vm._s(_vm.users.parent.count))]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-grey" }, [
                          _vm._v(_vm._s(_vm.users.parent.description))
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-col",
            {
              staticClass: "mb-2",
              attrs: {
                "vs-type": "flex",
                "vs-justify": "center",
                "vs-align": "center",
                "vs-w": "3",
                "vs-sm": "12",
                "vs-xs": "12"
              }
            },
            [
              _c(
                "vx-card",
                [
                  _c(
                    "vs-row",
                    [
                      _c(
                        "vs-col",
                        {
                          attrs: { "vs-type": "flex", "vs-justify": "flex-end" }
                        },
                        [
                          _c(
                            "vs-dropdown",
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "flex items-center",
                                  attrs: { href: "#" }
                                },
                                [
                                  _c("feather-icon", {
                                    attrs: {
                                      icon: "MoreHorizontalIcon",
                                      svgClasses: "w-6 h-6 text-grey"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-dropdown-menu",
                                [
                                  _c(
                                    "inertia-link",
                                    {
                                      attrs: {
                                        href: _vm.route(
                                          "admin.roles.edit",
                                          _vm.users.student.id
                                        )
                                      }
                                    },
                                    [
                                      _c("vs-dropdown-item", [
                                        _vm._v("Permissions")
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "inertia-link",
                    { attrs: { href: _vm.route("admin.students.index") } },
                    [
                      _c("vs-avatar", {
                        staticClass: "mx-auto mb-6 block",
                        attrs: {
                          size: "80px",
                          src: "/images/icons/users/students.svg"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "flex items-center w-full justify-center"
                          },
                          [
                            _c("h4", [_vm._v("Students")]),
                            _vm._v(" "),
                            _c(
                              "vs-chip",
                              {
                                staticClass: "ml-1",
                                attrs: { color: "primary" }
                              },
                              [_vm._v(_vm._s(_vm.users.student.count))]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-grey" }, [
                          _vm._v(_vm._s(_vm.users.student.description))
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Admin/User/Index.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Admin/User/Index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_2be8c6f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=2be8c6f7& */ "./resources/js/Pages/Admin/User/Index.vue?vue&type=template&id=2be8c6f7&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/User/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_2be8c6f7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_2be8c6f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/User/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/User/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Admin/User/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/User/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/User/Index.vue?vue&type=template&id=2be8c6f7&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/User/Index.vue?vue&type=template&id=2be8c6f7& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2be8c6f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=2be8c6f7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/User/Index.vue?vue&type=template&id=2be8c6f7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2be8c6f7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2be8c6f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);