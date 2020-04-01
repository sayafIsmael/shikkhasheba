(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Role/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Role/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
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
    requests: Object,
    roles: Object
  },
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      filters: {
        search: this.requests.search,
        page: this.roles.pagination.current_page
      }
    };
  },
  mounted: function mounted() {},
  watch: {
    "filters.search": function filtersSearch() {
      this.filters.page = 1;
      this.filter();
    },
    "filters.page": function filtersPage() {
      this.filter();
    }
  },
  methods: {
    filter: function filter() {
      var query = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pickBy(this.filters);

      this.$inertia.replace(this.route("admin.roles.index", Object.keys(query).length ? query : {
        remember: "forget"
      }), {
        preserveScroll: true,
        preserveState: true
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Role/Index.vue?vue&type=template&id=7281c1e2&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Role/Index.vue?vue&type=template&id=7281c1e2& ***!
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
    { attrs: { title: "Role" } },
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
            [_c("h2", { staticClass: "mb-1" }, [_vm._v("Roles")])]
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
                  title: "Roles",
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
        "vs-card",
        [
          _c(
            "vs-row",
            { attrs: { "vs-type": "flex", "vs-justify": "space-between" } },
            [
              _c(
                "vs-col",
                {
                  staticClass: "mb-2",
                  attrs: {
                    "vs-type": "flex",
                    "vs-lg": "12",
                    "vs-sm": "12",
                    "vs-xs": "12"
                  }
                },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: {
                      icon: "icon-search",
                      "icon-pack": "feather",
                      placeholder: "Search"
                    },
                    model: {
                      value: _vm.filters.search,
                      callback: function($$v) {
                        _vm.$set(_vm.filters, "search", $$v)
                      },
                      expression: "filters.search"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-collapse",
            {
              staticClass: "p-0 mt-5 mb-2",
              attrs: { id: "div-with-loading", accordion: "", type: "margin" }
            },
            [
              _c(
                "vs-row",
                { staticClass: "header-collapse" },
                [
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-w": "2",
                        "vs-type": "flex",
                        "vs-align": "center"
                      }
                    },
                    [_vm._v("Sl.")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-w": "3",
                        "vs-type": "flex",
                        "vs-align": "center"
                      }
                    },
                    [_vm._v("Name")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-w": "3",
                        "vs-type": "flex",
                        "vs-align": "center"
                      }
                    },
                    [_vm._v("Description")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-w": "2",
                        "vs-type": "flex",
                        "vs-align": "center"
                      }
                    },
                    [_vm._v("Users in role")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-w": "2",
                        "vs-type": "flex",
                        "vs-align": "center"
                      }
                    },
                    [_vm._v("Permissions")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.roles.data.length
                ? _c(
                    "div",
                    _vm._l(_vm.roles.data, function(role, index) {
                      return _c(
                        "vs-collapse-item",
                        {
                          key: index,
                          attrs: {
                            "icon-pack": "feather",
                            "icon-arrow": "icon-arrow-down"
                          }
                        },
                        [
                          _c(
                            "div",
                            { attrs: { slot: "header" }, slot: "header" },
                            [
                              _c(
                                "vs-row",
                                [
                                  _c(
                                    "vs-col",
                                    {
                                      staticClass: "mb_1",
                                      attrs: {
                                        "vs-lg": "2",
                                        "vs-sm": "6",
                                        "vs-xs": "12",
                                        "vs-type": "flex",
                                        "vs-align": "center"
                                      }
                                    },
                                    [_vm._v(_vm._s(index + 1))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-col",
                                    {
                                      staticClass: "text-truncate mb_1",
                                      attrs: {
                                        "vs-lg": "3",
                                        "vs-sm": "6",
                                        "vs-xs": "12",
                                        "vs-type": "flex",
                                        "vs-align": "center"
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "customer-icon mr-1",
                                          attrs: {
                                            radius: "",
                                            "vs-type": "flex",
                                            "vs-align": "center"
                                          }
                                        },
                                        [
                                          _c("vs-icon", {
                                            attrs: {
                                              "icon-pack": "feather",
                                              icon: "icon-user"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(role.name) +
                                          "\n              "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-col",
                                    {
                                      staticClass: "text-truncate mb_1",
                                      attrs: {
                                        "vs-lg": "3",
                                        "vs-sm": "6",
                                        "vs-xs": "12",
                                        "vs-type": "flex",
                                        "vs-align": "center"
                                      }
                                    },
                                    [_vm._v(_vm._s(role.description))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-col",
                                    {
                                      staticClass: "text-truncate mb_1",
                                      attrs: {
                                        "vs-lg": "2",
                                        "vs-sm": "6",
                                        "vs-xs": "12",
                                        "vs-type": "flex",
                                        "vs-align": "center"
                                      }
                                    },
                                    [
                                      _c(
                                        "vs-chip",
                                        { attrs: { color: "primary" } },
                                        [_vm._v(_vm._s(role.users_count))]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-col",
                                    {
                                      staticClass: "text-truncate mb_1",
                                      attrs: {
                                        "vs-lg": "2",
                                        "vs-sm": "6",
                                        "vs-xs": "12",
                                        "vs-type": "flex",
                                        "vs-align": "center"
                                      }
                                    },
                                    [
                                      _c(
                                        "vs-chip",
                                        { attrs: { color: "success" } },
                                        [_vm._v(_vm._s(role.permissions_count))]
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
                            "vs-row",
                            {
                              attrs: {
                                "vs-type": "flex",
                                "vs-justify": "flex-end"
                              }
                            },
                            [
                              _c(
                                "vx-tooltip",
                                {
                                  attrs: {
                                    color: "primary",
                                    title: "Edit user info",
                                    text: "Can edit user info clicking here!"
                                  }
                                },
                                [
                                  _c(
                                    "inertia-link",
                                    {
                                      attrs: {
                                        href: _vm.route(
                                          "admin.roles.edit",
                                          role.id
                                        )
                                      }
                                    },
                                    [
                                      _c("vs-button", {
                                        staticClass: "mx-1",
                                        attrs: {
                                          radius: "",
                                          color: "primary",
                                          type: "border",
                                          "icon-pack": "feather",
                                          icon: "icon-edit-2"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              role.editable
                                ? _c(
                                    "vx-tooltip",
                                    {
                                      attrs: {
                                        color: "danger",
                                        title: "Delete user",
                                        text: "Can delete this user."
                                      }
                                    },
                                    [
                                      _c("vs-button", {
                                        staticClass: "mx-1",
                                        attrs: {
                                          radius: "",
                                          color: "danger",
                                          type: "border",
                                          "icon-pack": "feather",
                                          icon: "icon-trash-2"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
                    1
                  )
                : _c("div", { staticClass: "text-center mt-6" }, [
                    _c("strong", [_vm._v("No customer found")])
                  ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-row",
            [
              _c(
                "vs-col",
                {
                  staticClass: "mt-2 pagi",
                  attrs: { "vs-type": "flex", "vs-justify": "flex-end" }
                },
                [
                  _c("vs-pagination", {
                    attrs: {
                      total: _vm.roles.pagination.total_pages,
                      "prev-icon": "arrow_back",
                      "next-icon": "arrow_forward"
                    },
                    model: {
                      value: _vm.filters.page,
                      callback: function($$v) {
                        _vm.$set(_vm.filters, "page", $$v)
                      },
                      expression: "filters.page"
                    }
                  })
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

/***/ "./resources/js/Pages/Admin/Role/Index.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Admin/Role/Index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_7281c1e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=7281c1e2& */ "./resources/js/Pages/Admin/Role/Index.vue?vue&type=template&id=7281c1e2&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Role/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_7281c1e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_7281c1e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Role/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Role/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Role/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Role/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Role/Index.vue?vue&type=template&id=7281c1e2&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Role/Index.vue?vue&type=template&id=7281c1e2& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7281c1e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=7281c1e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Role/Index.vue?vue&type=template&id=7281c1e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7281c1e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_7281c1e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);