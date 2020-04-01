(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Exam-seat-plan/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Exam-seat-plan/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    seatPlan: Object,
    exams: Array,
    academicClasses: Array,
    shifts: Array,
    groups: Array
  },
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  watch: {
    academicClass: function academicClass(val) {
      var selectedClass = this.academicClasses.find(function (o) {
        return o.id == val;
      });
      this.sections = selectedClass.sections;
      this.form.section = null;
    }
  },
  data: function data() {
    return {
      academicClass: this.seatPlan.academic_class_id,
      sections: this.seatPlan["class"].sections,
      form: {
        exam: this.seatPlan.exam_id,
        "class": null,
        section: this.seatPlan.section_id,
        shift: this.seatPlan.shift_id,
        group: this.seatPlan.group_id,
        roll_start: this.seatPlan.roll_start,
        roll_end: this.seatPlan.roll_end,
        room_number: this.seatPlan.room_number
      }
    };
  },
  methods: {
    store: function store() {
      var _this = this;

      this.$vs.loading();
      this.form["class"] = this.academicClass;
      this.$inertia.put(this.route("admin.exam-seat-plans.update", this.seatPlan.id), this.form, {
        preserveScroll: true,
        preserveState: true
      }).then(function () {
        return _this.$vs.loading.close();
      });
    },
    reset: function reset() {
      var _this2 = this;

      this.$vs.loading();
      this.$inertia.visit(this.route("admin.exam-seat-plans.edit", this.seatPlans.id)).then(function () {
        return _this2.$vs.loading.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Exam-seat-plan/Edit.vue?vue&type=template&id=fccb6886&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Exam-seat-plan/Edit.vue?vue&type=template&id=fccb6886& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Exam Seat Plan" } },
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
            [_c("h2", { staticClass: "mb-1" }, [_vm._v("Edit Exam Seat Plan")])]
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
                  title: "Exam Seat Plan",
                  url: _vm.route("admin.exam-seat-plans.index")
                },
                {
                  title: "Edit",
                  active: true
                }
              ]
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "ml-auto md:block hidden cursor-pointer" },
            [
              _c(
                "inertia-link",
                { attrs: { href: _vm.route("admin.exam-seat-plans.index") } },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "mb-2",
                      attrs: {
                        color: "danger",
                        icon: "icon-arrow-left",
                        "icon-pack": "feather"
                      }
                    },
                    [_vm._v("Back")]
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
      _c("vx-card", [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.store($event)
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
                    staticClass: "w-full selectExample mb-2",
                    attrs: {
                      label: "Exam",
                      placeholder: "Select Exam",
                      danger: !!_vm.$page.errors.exam,
                      "danger-text":
                        _vm.$page.errors.exam != null
                          ? _vm.$page.errors.exam[0]
                          : ""
                    },
                    model: {
                      value: _vm.form.exam,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "exam", $$v)
                      },
                      expression: "form.exam"
                    }
                  },
                  _vm._l(_vm.exams, function(item, index) {
                    return _c("vs-select-item", {
                      key: index,
                      attrs: { value: item.id, text: item.name }
                    })
                  }),
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-select",
                  {
                    staticClass: "w-full selectExample mb-2",
                    attrs: {
                      label: "Class",
                      placeholder: "Select class",
                      danger: !!_vm.$page.errors.class,
                      "danger-text":
                        _vm.$page.errors.class != null
                          ? _vm.$page.errors.class[0]
                          : ""
                    },
                    model: {
                      value: _vm.academicClass,
                      callback: function($$v) {
                        _vm.academicClass = $$v
                      },
                      expression: "academicClass"
                    }
                  },
                  _vm._l(_vm.academicClasses, function(item, index) {
                    return _c("vs-select-item", {
                      key: index,
                      attrs: { value: item.id, text: item.name }
                    })
                  }),
                  1
                ),
                _vm._v(" "),
                _vm.sections.length
                  ? _c(
                      "vs-select",
                      {
                        staticClass: "w-full selectExample mb-2",
                        attrs: {
                          label: "section",
                          placeholder: "Select section",
                          danger: !!_vm.$page.errors.section,
                          "danger-text":
                            _vm.$page.errors.section != null
                              ? _vm.$page.errors.section[0]
                              : ""
                        },
                        model: {
                          value: _vm.form.section,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "section", $$v)
                          },
                          expression: "form.section"
                        }
                      },
                      _vm._l(_vm.sections, function(item, index) {
                        return _c("vs-select-item", {
                          key: index,
                          attrs: { value: item.id, text: item.name }
                        })
                      }),
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "vs-select",
                  {
                    staticClass: "w-full selectExample mb-2",
                    attrs: {
                      label: "Shift",
                      placeholder: "Select Shift",
                      danger: !!_vm.$page.errors.shift,
                      "danger-text":
                        _vm.$page.errors.shift != null
                          ? _vm.$page.errors.shift[0]
                          : ""
                    },
                    model: {
                      value: _vm.form.shift,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "shift", $$v)
                      },
                      expression: "form.shift"
                    }
                  },
                  _vm._l(_vm.shifts, function(item, index) {
                    return _c("vs-select-item", {
                      key: index,
                      attrs: { value: item.id, text: item.name }
                    })
                  }),
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-select",
                  {
                    staticClass: "w-full selectExample mb-2",
                    attrs: {
                      label: "Group",
                      placeholder: "Select Group",
                      danger: !!_vm.$page.errors.group,
                      "danger-text":
                        _vm.$page.errors.group != null
                          ? _vm.$page.errors.group[0]
                          : ""
                    },
                    model: {
                      value: _vm.form.group,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "group", $$v)
                      },
                      expression: "form.group"
                    }
                  },
                  _vm._l(_vm.groups, function(item, index) {
                    return _c("vs-select-item", {
                      key: index,
                      attrs: { value: item.id, text: item.name }
                    })
                  }),
                  1
                ),
                _vm._v(" "),
                _c("vs-input", {
                  staticClass: "w-full mb-2",
                  attrs: {
                    label: "Roll start",
                    placeholder: "Roll start",
                    danger: !!_vm.$page.errors.roll_start,
                    "danger-text":
                      _vm.$page.errors.roll_start != null
                        ? _vm.$page.errors.roll_start[0]
                        : ""
                  },
                  model: {
                    value: _vm.form.roll_start,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "roll_start", $$v)
                    },
                    expression: "form.roll_start"
                  }
                }),
                _vm._v(" "),
                _c("vs-input", {
                  staticClass: "w-full mb-2",
                  attrs: {
                    label: "Roll end",
                    placeholder: "Roll end",
                    danger: !!_vm.$page.errors.roll_end,
                    "danger-text":
                      _vm.$page.errors.roll_end != null
                        ? _vm.$page.errors.roll_end[0]
                        : ""
                  },
                  model: {
                    value: _vm.form.roll_end,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "roll_end", $$v)
                    },
                    expression: "form.roll_end"
                  }
                }),
                _vm._v(" "),
                _c("vs-input", {
                  staticClass: "w-full mb-2",
                  attrs: {
                    label: "Room number",
                    placeholder: "Room number",
                    danger: !!_vm.$page.errors.room_number,
                    "danger-text":
                      _vm.$page.errors.room_number != null
                        ? _vm.$page.errors.room_number[0]
                        : ""
                  },
                  model: {
                    value: _vm.form.room_number,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "room_number", $$v)
                    },
                    expression: "form.room_number"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                { staticClass: "vx-col w-full" },
                [
                  _c(
                    "vs-button",
                    { staticClass: "mr-3 mb-2", attrs: { button: "submit" } },
                    [_vm._v("Submit")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      staticClass: "mb-2",
                      attrs: { color: "warning", type: "border" },
                      on: { click: _vm.reset }
                    },
                    [_vm._v("Reset")]
                  )
                ],
                1
              )
            ])
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Admin/Exam-seat-plan/Edit.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Admin/Exam-seat-plan/Edit.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_fccb6886___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=fccb6886& */ "./resources/js/Pages/Admin/Exam-seat-plan/Edit.vue?vue&type=template&id=fccb6886&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Exam-seat-plan/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_fccb6886___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_fccb6886___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Exam-seat-plan/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Exam-seat-plan/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Exam-seat-plan/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Exam-seat-plan/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Exam-seat-plan/Edit.vue?vue&type=template&id=fccb6886&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Exam-seat-plan/Edit.vue?vue&type=template&id=fccb6886& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_fccb6886___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=fccb6886& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Exam-seat-plan/Edit.vue?vue&type=template&id=fccb6886&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_fccb6886___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_fccb6886___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);