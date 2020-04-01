(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[174],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/FeeManager/Fee/Item/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/FeeManager/Fee/Item/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    fee: Object,
    requests: Object,
    feeItems: Array
  },
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      popup: false,
      editMode: false,
      form: {
        id: "",
        name: "",
        slug: "",
        amount: ""
      } //   filters: {
      //     perPage: this.requests.perPage ? this.requests.perPage : 10,
      //     search: this.requests.search,
      //     page: this.feeItems.pagination.current_page
      //   }

    };
  },
  mounted: function mounted() {},
  watch: {
    // "filters.perPage"() {
    //   this.filter();
    // },
    // "filters.search"() {
    //   this.filters.page = 1;
    //   this.filter();
    // },
    // "filters.page"() {
    //   this.filter();
    // },
    "$page.errors": function $pageErrors(val) {
      val.name != null || val.amount != null ? this.popup = true : this.popup = false;
    }
  },
  methods: {
    // filter() {
    //   let query = _.pickBy(this.filters);
    //   this.$inertia.replace(
    //     this.route("admin.fees.items.index", [
    //       this.fee.id,
    //       Object.keys(query).length ? query : { remember: "forget" }
    //     ]),
    //     {
    //       preserveScroll: true,
    //       preserveState: true
    //     }
    //   );
    // },
    create: function create() {
      this.editMode = false;
      this.form.name = "";
      this.form.amount = "";
      this.popup = true;
    },
    store: function store() {
      var _this = this;

      this.$vs.loading();
      this.$inertia.post(this.route("admin.fees.items.store", this.fee.id), {
        name: this.form.name,
        amount: this.form.amount
      }, {
        preserveScroll: true,
        preserveState: true
      }).then(function () {
        return _this.$vs.loading.close();
      });
    },
    edit: function edit(feeItem) {
      this.$page.errors.name = "";
      this.$page.errors.amount = "";
      this.form = feeItem;
      this.editMode = true;
      this.popup = true;
    },
    update: function update() {
      var _this2 = this;

      this.$vs.loading();
      this.$inertia.put(this.route("admin.fees.items.update", [this.form.fee_id, this.form.id]), {
        name: this.form.name,
        amount: this.form.amount
      }, {
        preserveScroll: true,
        preserveState: true
      }).then(function () {
        return _this2.$vs.loading.close();
      });
    },
    destroy: function destroy(feeItem) {
      this.form = feeItem;
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Confirm",
        text: "Are you sure? you went to delete this.",
        accept: this.acceptDelete
      });
    },
    acceptDelete: function acceptDelete() {
      var _this3 = this;

      this.$vs.loading();
      this.$inertia["delete"](this.route("admin.fees.items.destroy", [this.form.fee_id, this.form.id]), {
        preserveScroll: true,
        preserveState: true
      }).then(function () {
        return _this3.$vs.loading.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/FeeManager/Fee/Item/Index.vue?vue&type=template&id=319d3fee&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/FeeManager/Fee/Item/Index.vue?vue&type=template&id=319d3fee& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Fee Items" } },
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
            [_c("h2", { staticClass: "mb-1" }, [_vm._v("Fee Items")])]
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
                  title: "Fees",
                  url: _vm.route("admin.fees.index")
                },
                {
                  title: "Fee Items",
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
                    "vs-lg": "6",
                    "vs-sm": "6",
                    "vs-xs": "12"
                  }
                },
                [
                  _c("h3", [
                    _vm._v(
                      "Fee Name: " +
                        _vm._s(_vm.fee.name) +
                        ", Total: " +
                        _vm._s(_vm.fee.total)
                    )
                  ])
                ]
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
                    { attrs: { href: _vm.route("admin.fees.index") } },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "mr-2",
                          attrs: {
                            type: "filled",
                            color: "danger",
                            icon: "icon-arrow-left",
                            "icon-pack": "feather"
                          }
                        },
                        [_vm._v("Back")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      attrs: { color: "primary", type: "filled" },
                      on: { click: _vm.create }
                    },
                    [_vm._v("Add New Fee")]
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
                        "vs-w": "3",
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
                    [_vm._v("Amount")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.feeItems.length
                ? _c(
                    "div",
                    _vm._l(_vm.feeItems, function(feeItem, index) {
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
                                        "vs-lg": "3",
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
                                    [_vm._v(_vm._s(feeItem.name))]
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
                                        "vs-chip",
                                        { attrs: { color: "primary" } },
                                        [_vm._v(_vm._s(feeItem.amount))]
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
                                    title: "Edit",
                                    text: "Edit fee type info."
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
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.edit(feeItem)
                                      }
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vx-tooltip",
                                {
                                  attrs: {
                                    color: "danger",
                                    title: "Delete",
                                    text: "Delete this fee type."
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
                                        return _vm.destroy(feeItem)
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
                        [_vm._v("No fee type found.")]
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
        "vs-popup",
        {
          staticClass: "holamundo",
          attrs: {
            title: _vm.editMode ? "Edit Fee Item" : "Add Fee Item",
            active: _vm.popup
          },
          on: {
            "update:active": function($event) {
              _vm.popup = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  _vm.editMode ? _vm.update() : _vm.store()
                }
              }
            },
            [
              _c("vs-input", {
                staticClass: "w-full my-5 no-icon-border",
                attrs: {
                  icon: "icon icon-user",
                  "icon-pack": "feather",
                  "label-placeholder": "Fee Item Name",
                  danger: !!_vm.$page.errors.name,
                  "danger-text":
                    _vm.$page.errors.name != null
                      ? _vm.$page.errors.name[0]
                      : ""
                },
                model: {
                  value: _vm.form.name,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "name", $$v)
                  },
                  expression: "form.name"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "w-full my-5 no-icon-border",
                attrs: {
                  icon: "icon icon-user",
                  "icon-pack": "feather",
                  "label-placeholder": "Amount",
                  danger: !!_vm.$page.errors.amount,
                  "danger-text":
                    _vm.$page.errors.amount != null
                      ? _vm.$page.errors.amount[0]
                      : ""
                },
                model: {
                  value: _vm.form.amount,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "amount", $$v)
                  },
                  expression: "form.amount"
                }
              }),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  attrs: { button: "submit", color: "primary", type: "filled" }
                },
                [_vm._v("Save Changes")]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Admin/FeeManager/Fee/Item/Index.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Admin/FeeManager/Fee/Item/Index.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_319d3fee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=319d3fee& */ "./resources/js/Pages/Admin/FeeManager/Fee/Item/Index.vue?vue&type=template&id=319d3fee&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/FeeManager/Fee/Item/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_319d3fee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_319d3fee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/FeeManager/Fee/Item/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/FeeManager/Fee/Item/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/FeeManager/Fee/Item/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/FeeManager/Fee/Item/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/FeeManager/Fee/Item/Index.vue?vue&type=template&id=319d3fee&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/FeeManager/Fee/Item/Index.vue?vue&type=template&id=319d3fee& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_319d3fee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=319d3fee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/FeeManager/Fee/Item/Index.vue?vue&type=template&id=319d3fee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_319d3fee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_319d3fee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);