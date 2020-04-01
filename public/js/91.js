(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/SmsManager/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/SmsManager/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    sms_credit: String,
    today_total_sent: Number,
    roles: Array,
    requests: Object,
    sms_logs: Object
  },
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      selectRolePopup: false,
      role: "",
      popup: false,
      editMode: false,
      sms_log: {},
      filters: {
        perPage: this.requests.perPage ? this.requests.perPage : 10,
        search: this.requests.search,
        page: this.sms_logs.pagination.current_page
      }
    };
  },
  mounted: function mounted() {},
  watch: {
    "filters.perPage": function filtersPerPage() {
      this.filter();
    },
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

      this.$inertia.replace(this.route("admin.sms-manager.index", Object.keys(query).length ? query : {
        remember: "forget"
      }), {
        preserveScroll: true,
        preserveState: true
      });
    },
    destroy: function destroy(sms_log) {
      this.sms_log = sms_log;
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Confirm",
        text: "Are you sure? you went to delete this.",
        accept: this.acceptDelete
      });
    },
    acceptDelete: function acceptDelete() {
      var _this = this;

      this.$vs.loading();
      this.$inertia["delete"](this.route("admin.sms-manager.logs.destroy", this.sms_log.id), {
        preserveScroll: true,
        preserveState: true
      }).then(function () {
        return _this.$vs.loading.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/SmsManager/Index.vue?vue&type=template&id=c7328180&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/SmsManager/Index.vue?vue&type=template&id=c7328180& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Sms Manager" } },
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
            [_c("h2", { staticClass: "mb-1" }, [_vm._v("Sms Manager")])]
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
                  title: "Sms Manager",
                  active: true
                }
              ]
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "vx-row" }, [
        _c(
          "div",
          { staticClass: "vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4" },
          [
            _c("vs-card", { staticClass: "p-1" }, [
              _c("div", { staticClass: "text-center" }, [
                _c("h6", [_vm._v("Remaining Credit")]),
                _vm._v(" "),
                _c("h4", { staticClass: "pt-2" }, [
                  _vm._v(_vm._s(_vm.sms_credit))
                ])
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4" },
          [
            _c("vs-card", { staticClass: "p-1" }, [
              _c("div", { staticClass: "text-center" }, [
                _c("h6", [_vm._v("Today Total Sent")]),
                _vm._v(" "),
                _c("h4", { staticClass: "pt-2" }, [
                  _vm._v(_vm._s(_vm.today_total_sent))
                ])
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4" },
          [
            _c(
              "inertia-link",
              { attrs: { href: _vm.route("admin.sms-manager.to-all") } },
              [
                _c(
                  "vs-button",
                  {
                    staticClass: "mb-2",
                    attrs: {
                      color: "primary",
                      type: "filled",
                      icon: "icon-users",
                      "icon-pack": "feather"
                    }
                  },
                  [_vm._v("Send SMS To All Users")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "inertia-link",
              { attrs: { href: _vm.route("admin.sms-manager.to-by-role") } },
              [
                _c(
                  "vs-button",
                  {
                    attrs: {
                      color: "primary",
                      type: "filled",
                      icon: "icon-user-check",
                      "icon-pack": "feather"
                    }
                  },
                  [_vm._v("Send SMS By Role")]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4" })
      ]),
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
                    "vs-lg": "6",
                    "vs-sm": "6",
                    "vs-xs": "12"
                  }
                },
                [
                  _c(
                    "vs-dropdown",
                    {
                      staticClass: "cursor-pointer mr-1",
                      attrs: { "vs-trigger-click": "" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "p-3 border border-solid rounded-full d-theme-border-grey-light flex items-center justify-between"
                        },
                        [
                          _c("span", { staticClass: "mr-2" }, [
                            _vm._v(_vm._s(_vm.filters.perPage))
                          ]),
                          _vm._v(" "),
                          _c("feather-icon", {
                            attrs: {
                              icon: "ChevronDownIcon",
                              svgClasses: "h-4 w-4"
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
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.filters.perPage = 10
                                }
                              }
                            },
                            [_vm._v("10")]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.filters.perPage = 20
                                }
                              }
                            },
                            [_vm._v("20")]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.filters.perPage = 50
                                }
                              }
                            },
                            [_vm._v("50")]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.filters.perPage = 75
                                }
                              }
                            },
                            [_vm._v("75")]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.filters.perPage = 100
                                }
                              }
                            },
                            [_vm._v("100")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
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
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "mb-2",
                  attrs: {
                    "vs-type": "flex",
                    "vs-justify": "flex-end",
                    "vs-lg": "6",
                    "vs-sm": "6",
                    "vs-xs": "12"
                  }
                },
                [
                  _c(
                    "inertia-link",
                    { attrs: { href: _vm.route("admin.sms-manager.compose") } },
                    [
                      _c(
                        "vs-button",
                        {
                          attrs: {
                            color: "primary",
                            type: "filled",
                            icon: "icon-plus",
                            "icon-pack": "feather"
                          }
                        },
                        [_vm._v("Compose")]
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
                        "vs-w": "1",
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
                    [_vm._v("Phone Number")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-w": "6",
                        "vs-type": "flex",
                        "vs-align": "center"
                      }
                    },
                    [_vm._v("Message")]
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
                    [_vm._v("Timestamp")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.sms_logs.data.length
                ? _c(
                    "div",
                    _vm._l(_vm.sms_logs.data, function(sms_log, index) {
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
                                        "vs-lg": "1",
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
                                    [_vm._v(_vm._s(sms_log.phone_number))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-col",
                                    {
                                      staticClass: "text-truncate mb_1",
                                      attrs: {
                                        "vs-lg": "6",
                                        "vs-sm": "6",
                                        "vs-xs": "12",
                                        "vs-type": "flex",
                                        "vs-align": "center"
                                      }
                                    },
                                    [_vm._v(_vm._s(sms_log.message))]
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
                                    [_vm._v(_vm._s(sms_log.updated_at))]
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
                                    color: "danger",
                                    title: "Delete",
                                    text: "Delete this leave application."
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
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.destroy(sms_log)
                                      }
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
                    }),
                    1
                  )
                : _c(
                    "div",
                    { staticClass: "text-center mt-6" },
                    [
                      _c(
                        "vs-alert",
                        {
                          attrs: {
                            color: "danger",
                            title: "Sorry :(",
                            active: "true"
                          }
                        },
                        [_vm._v("No data found.")]
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
            [
              _c(
                "vs-col",
                {
                  staticClass: "mt-2 pagi",
                  attrs: { "vs-type": "flex", "vs-justify": "center" }
                },
                [
                  _c("vs-pagination", {
                    attrs: {
                      total: _vm.sms_logs.pagination.total_pages,
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
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: {
            title: "Select Class and Section",
            active: _vm.selectRolePopup
          },
          on: {
            "update:active": function($event) {
              _vm.selectRolePopup = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "vx-row" },
            [
              _c(
                "vs-select",
                {
                  staticClass: "w-full selectExample m-2",
                  attrs: {
                    placeholder: "Select Role",
                    label: "Role",
                    "label-placeholder": "Role",
                    autocomplete: "",
                    danger: !!_vm.$page.errors.role,
                    "danger-text":
                      _vm.$page.errors.role != null
                        ? _vm.$page.errors.role[0]
                        : ""
                  },
                  model: {
                    value: _vm.role,
                    callback: function($$v) {
                      _vm.role = $$v
                    },
                    expression: "role"
                  }
                },
                _vm._l(_vm.roles, function(item, index) {
                  return _c("vs-select-item", {
                    key: index,
                    attrs: { value: item.id, text: item.name }
                  })
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "inertia-link",
            {
              attrs: {
                href: _vm.route("admin.sms-manager.to-by-role"),
                method: "get",
                data: { role_id: _vm.role }
              }
            },
            [
              _c(
                "vs-button",
                {
                  attrs: { button: "submit", color: "primary", type: "filled" }
                },
                [_vm._v("Go")]
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

/***/ "./resources/js/Pages/Admin/SmsManager/Index.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Admin/SmsManager/Index.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_c7328180___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=c7328180& */ "./resources/js/Pages/Admin/SmsManager/Index.vue?vue&type=template&id=c7328180&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/SmsManager/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_c7328180___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_c7328180___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/SmsManager/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/SmsManager/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/SmsManager/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/SmsManager/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/SmsManager/Index.vue?vue&type=template&id=c7328180&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/SmsManager/Index.vue?vue&type=template&id=c7328180& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c7328180___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=c7328180& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/SmsManager/Index.vue?vue&type=template&id=c7328180&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c7328180___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_c7328180___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);