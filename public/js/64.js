(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Exam-routine/Class/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Exam-routine/Class/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    classId: String,
    routine: Object,
    examId: Array,
    subjects: Array,
    shifts: Array,
    groups: Array
  },
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default.a,
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      form: {
        start_time: this.routine.start_time,
        end_time: this.routine.end_time,
        subject: this.routine.subject.id,
        date: this.routine.date,
        shift: this.routine.shift_id,
        group: this.routine.group_id
      },
      configdateTimePicker: {
        enableTime: true,
        enableSeconds: true,
        noCalendar: true,
        time_24hr: false
      }
    };
  },
  watch: {
    "$page.errors": function $pageErrors(val) {
      val.name != null ? this.routinePopup = true : this.routinePopup = false;
    }
  },
  methods: {
    update: function update() {
      this.$inertia.put(this.route("admin.exam-routines.update", this.routine.id), {
        subject: this.form.subject,
        date: this.form.date,
        start_time: this.form.start_time,
        end_time: this.form.end_time,
        academic_class_id: this.routine.academic_class_id,
        exam: this.examId,
        shift: this.form.shift,
        group: this.form.group
      }, {
        preserveScroll: true,
        preserveState: true
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Exam-routine/Class/Edit.vue?vue&type=template&id=a6948b3e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Exam-routine/Class/Edit.vue?vue&type=template&id=a6948b3e& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Academic Section" } },
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
            [
              _c("h2", { staticClass: "mb-1" }, [
                _vm._v("\n        Routine\n        ")
              ])
            ]
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
                  title: "Exam Routine",
                  url: _vm.route("admin.exam-routines.index", {
                    examId: _vm.examId,
                    classId: _vm.classId
                  })
                },
                {
                  title: "Edit Routine",
                  active: true
                }
              ]
            }
          })
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
                return _vm.update($event)
              }
            }
          },
          [
            _c(
              "vs-select",
              {
                staticClass: "w-full selectExample mb-2",
                attrs: {
                  label: "Subject",
                  placeholder: "Select Subject",
                  danger: !!_vm.$page.errors.subject,
                  "danger-text":
                    _vm.$page.errors.subject != null
                      ? _vm.$page.errors.subject[0]
                      : ""
                },
                model: {
                  value: _vm.form.subject,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "subject", $$v)
                  },
                  expression: "form.subject"
                }
              },
              _vm._l(_vm.subjects, function(item, index) {
                return _c("vs-select-item", {
                  key: index,
                  attrs: { value: item.id, text: item.name }
                })
              }),
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("label", { attrs: { for: "form" } }, [_vm._v("Date")]),
                _vm._v(" "),
                _c("flat-pickr", {
                  staticClass: "w-full mb-2",
                  attrs: {
                    placeholder: "Select Date",
                    danger: !!_vm.$page.errors.date,
                    "danger-text":
                      _vm.$page.errors.date != null
                        ? _vm.$page.errors.date[0]
                        : ""
                  },
                  model: {
                    value: _vm.form.date,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "date", $$v)
                    },
                    expression: "form.date"
                  }
                }),
                _vm._v(" "),
                !!_vm.$page.errors.date
                  ? _c("span", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.$page.errors.date[0]))
                    ])
                  : _vm._e()
              ],
              1
            ),
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
            _c(
              "div",
              [
                _c("label", { attrs: { for: "form" } }, [_vm._v("Start time")]),
                _vm._v(" "),
                _c("flat-pickr", {
                  staticClass: "w-full",
                  attrs: {
                    config: _vm.configdateTimePicker,
                    placeholder: "Start time"
                  },
                  model: {
                    value: _vm.form.start_time,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "start_time", $$v)
                    },
                    expression: "form.start_time"
                  }
                }),
                _vm._v(" "),
                !!_vm.$page.errors.start_time
                  ? _c("span", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.$page.errors.start_time[0]))
                    ])
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("label", { attrs: { for: "form" } }, [_vm._v("End time")]),
                _vm._v(" "),
                _c("flat-pickr", {
                  staticClass: "w-full mt-2",
                  attrs: {
                    config: _vm.configdateTimePicker,
                    placeholder: "End time"
                  },
                  model: {
                    value: _vm.form.end_time,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "end_time", $$v)
                    },
                    expression: "form.end_time"
                  }
                }),
                _vm._v(" "),
                !!_vm.$page.errors.end_time
                  ? _c("span", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.$page.errors.end_time[0]))
                    ])
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "mt-2",
                attrs: { button: "submit", color: "primary", type: "filled" }
              },
              [_vm._v("Save Changes")]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Admin/Exam-routine/Class/Edit.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Admin/Exam-routine/Class/Edit.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_a6948b3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=a6948b3e& */ "./resources/js/Pages/Admin/Exam-routine/Class/Edit.vue?vue&type=template&id=a6948b3e&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Exam-routine/Class/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_a6948b3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_a6948b3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Exam-routine/Class/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Exam-routine/Class/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Exam-routine/Class/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Exam-routine/Class/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Exam-routine/Class/Edit.vue?vue&type=template&id=a6948b3e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Exam-routine/Class/Edit.vue?vue&type=template&id=a6948b3e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_a6948b3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=a6948b3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Exam-routine/Class/Edit.vue?vue&type=template&id=a6948b3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_a6948b3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_a6948b3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);