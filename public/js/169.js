(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[169],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Exam-seat-plan/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Exam-seat-plan/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    requests: Object,
    seatPlans: Object
  },
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      popup: false,
      editMode: false,
      seatPlan: {},
      filters: {
        perPage: this.requests.perPage ? this.requests.perPage : 10,
        search: this.requests.search,
        page: this.seatPlans.pagination.current_page
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
    },
    "$page.errors": function $pageErrors(val) {
      val.name != null ? this.popup = true : this.popup = false;
    }
  },
  methods: {
    filter: function filter() {
      var query = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pickBy(this.filters);

      this.$inertia.replace(this.route("admin.exam-seat-plans.index", Object.keys(query).length ? query : {
        remember: "forget"
      }), {
        preserveScroll: true,
        preserveState: true
      });
    },
    destroy: function destroy(seatPlan) {
      this.seatPlan = seatPlan;
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
      this.$inertia["delete"](this.route("admin.exam-seat-plans.destroy", this.seatPlan.id), {
        preserveScroll: true,
        preserveState: true
      }).then(function () {
        return _this.$vs.loading.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Exam-seat-plan/Index.vue?vue&type=template&id=193234a2&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Exam-seat-plan/Index.vue?vue&type=template&id=193234a2& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Exam Seat Plans" } },
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
            [_c("h2", { staticClass: "mb-1" }, [_vm._v("Exam Seat Plans")])]
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
                  title: "Exam Seat Plans",
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
                    "vs-justify": "flex-end",
                    "vs-lg": "12",
                    "vs-sm": "6",
                    "vs-xs": "12"
                  }
                },
                [
                  _c(
                    "inertia-link",
                    {
                      attrs: { href: _vm.route("admin.exam-seat-plans.create") }
                    },
                    [
                      _c(
                        "vs-button",
                        { attrs: { color: "primary", type: "filled" } },
                        [_vm._v("New Seat Plan")]
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
                        "vs-w": "2",
                        "vs-type": "flex",
                        "vs-align": "center"
                      }
                    },
                    [_vm._v("Exam Name")]
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
                    [_vm._v("Class")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-w": "1",
                        "vs-type": "flex",
                        "vs-align": "center"
                      }
                    },
                    [_vm._v("Section")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-w": "1",
                        "vs-type": "flex",
                        "vs-align": "center"
                      }
                    },
                    [_vm._v("Shift")]
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
                    [_vm._v("Group")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-w": "1",
                        "vs-type": "flex",
                        "vs-align": "center"
                      }
                    },
                    [_vm._v("Roll Start")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-w": "1",
                        "vs-type": "flex",
                        "vs-align": "center"
                      }
                    },
                    [_vm._v("Roll End")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-w": "1",
                        "vs-type": "flex",
                        "vs-align": "center"
                      }
                    },
                    [_vm._v("Room Number")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.seatPlans.data.length
                ? _c(
                    "div",
                    _vm._l(_vm.seatPlans.data, function(seatPlan, index) {
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
                                        "vs-lg": "2",
                                        "vs-sm": "6",
                                        "vs-xs": "12",
                                        "vs-type": "flex",
                                        "vs-align": "center"
                                      }
                                    },
                                    [_vm._v(_vm._s(seatPlan.exam.name))]
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
                                    [_vm._v(_vm._s(seatPlan.class.name))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-col",
                                    {
                                      staticClass: "text-truncate mb_1",
                                      attrs: {
                                        "vs-lg": "1",
                                        "vs-sm": "6",
                                        "vs-xs": "12",
                                        "vs-type": "flex",
                                        "vs-align": "center"
                                      }
                                    },
                                    [_vm._v(_vm._s(seatPlan.section.name))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-col",
                                    {
                                      staticClass: "text-truncate mb_1",
                                      attrs: {
                                        "vs-lg": "1",
                                        "vs-sm": "6",
                                        "vs-xs": "12",
                                        "vs-type": "flex",
                                        "vs-align": "center"
                                      }
                                    },
                                    [_vm._v(_vm._s(seatPlan.shift.name))]
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
                                    [_vm._v(_vm._s(seatPlan.group.name))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-col",
                                    {
                                      staticClass: "text-truncate mb_1",
                                      attrs: {
                                        "vs-lg": "1",
                                        "vs-sm": "6",
                                        "vs-xs": "12",
                                        "vs-type": "flex",
                                        "vs-align": "center"
                                      }
                                    },
                                    [_vm._v(_vm._s(seatPlan.roll_start))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-col",
                                    {
                                      staticClass: "text-truncate mb_1",
                                      attrs: {
                                        "vs-lg": "1",
                                        "vs-sm": "6",
                                        "vs-xs": "12",
                                        "vs-type": "flex",
                                        "vs-align": "center"
                                      }
                                    },
                                    [_vm._v(_vm._s(seatPlan.roll_end))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-col",
                                    {
                                      staticClass: "text-truncate mb_1",
                                      attrs: {
                                        "vs-lg": "1",
                                        "vs-sm": "6",
                                        "vs-xs": "12",
                                        "vs-type": "flex",
                                        "vs-align": "center"
                                      }
                                    },
                                    [_vm._v(_vm._s(seatPlan.room_number))]
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
                                    title: "View",
                                    text: "View exam seat plan info."
                                  }
                                },
                                [
                                  _c(
                                    "inertia-link",
                                    {
                                      attrs: {
                                        href: _vm.route(
                                          "admin.exam-seat-plans.show",
                                          seatPlan.id
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
                                          icon: "icon-eye"
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
                                "vx-tooltip",
                                {
                                  attrs: {
                                    color: "primary",
                                    title: "Edit",
                                    text: "Edit exam seat plan info."
                                  }
                                },
                                [
                                  _c(
                                    "inertia-link",
                                    {
                                      attrs: {
                                        href: _vm.route(
                                          "admin.exam-seat-plans.edit",
                                          seatPlan.id
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
                              _c(
                                "vx-tooltip",
                                {
                                  attrs: {
                                    color: "danger",
                                    title: "Delete",
                                    text: "Delete this exam seat plan."
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
                                        return _vm.destroy(seatPlan)
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
                      total: _vm.seatPlans.pagination.total_pages,
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

/***/ "./resources/js/Pages/Admin/Exam-seat-plan/Index.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/Admin/Exam-seat-plan/Index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_193234a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=193234a2& */ "./resources/js/Pages/Admin/Exam-seat-plan/Index.vue?vue&type=template&id=193234a2&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Exam-seat-plan/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_193234a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_193234a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Exam-seat-plan/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Exam-seat-plan/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Exam-seat-plan/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Exam-seat-plan/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Exam-seat-plan/Index.vue?vue&type=template&id=193234a2&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Exam-seat-plan/Index.vue?vue&type=template&id=193234a2& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_193234a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=193234a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Exam-seat-plan/Index.vue?vue&type=template&id=193234a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_193234a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_193234a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);