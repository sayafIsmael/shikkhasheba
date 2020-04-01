(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[156],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Attendances/Student/Create.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Attendances/Student/Create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // date picker



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    academicClass: Object,
    section: Object,
    students: Array
  },
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      form: {
        "class": this.academicClass.id,
        section: this.section.id,
        date: "",
        students: this.students
      }
    };
  },
  methods: {
    store: function store() {
      var _this = this;

      this.$vs.loading();
      this.$inertia.post(this.route("admin.student-attendances.store"), this.form, {
        preserveScroll: true,
        preserveState: true
      }).then(function () {
        return _this.$vs.loading.close();
      });
    },
    reset: function reset() {
      var _this2 = this;

      this.$vs.loading();
      this.$inertia.visit(this.route("admin.student-attendances.create")).then(function () {
        return _this2.$vs.loading.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Attendances/Student/Create.vue?vue&type=template&id=6910bcc4&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Attendances/Student/Create.vue?vue&type=template&id=6910bcc4& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Student Attendance" } },
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
            [_c("h2", { staticClass: "mb-1" }, [_vm._v("Student Attendance")])]
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
                  title: "Student Attendance",
                  url: _vm.route("admin.student-attendances.index")
                },
                {
                  title: "Create",
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
                {
                  attrs: { href: _vm.route("admin.student-attendances.index") }
                },
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
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                { staticClass: "vx-col sm:w-1/1 w-full mb-2" },
                [
                  _c(
                    "div",
                    [
                      _c("label", { attrs: { for: "date" } }, [_vm._v("Date")]),
                      _vm._v(" "),
                      _c("flat-pickr", {
                        staticClass: "w-full mb-2",
                        attrs: { placeholder: "Select Date" },
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
                    "vs-table",
                    { attrs: { data: _vm.students } },
                    [
                      _c("template", { slot: "header" }, [
                        _c("h3", [_vm._v("Students")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "template",
                        { slot: "thead" },
                        [
                          _c("vs-th", [_vm._v("Name")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("User ID")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Status")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Remark")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.form.students, function(student, index) {
                        return _c(
                          "vs-tr",
                          { key: index },
                          [
                            _c("vs-td", [
                              _c("span", [_vm._v(_vm._s(student.user.name))]),
                              _vm._v(" "),
                              _c("br")
                            ]),
                            _vm._v(" "),
                            _c("vs-td", [_vm._v(_vm._s(student.user.user_id))]),
                            _vm._v(" "),
                            _c(
                              "vs-td",
                              [
                                _c(
                                  "vs-switch",
                                  {
                                    model: {
                                      value: student.status,
                                      callback: function($$v) {
                                        _vm.$set(student, "status", $$v)
                                      },
                                      expression: "student.status"
                                    }
                                  },
                                  [
                                    _c(
                                      "span",
                                      { attrs: { slot: "on" }, slot: "on" },
                                      [_vm._v("Present")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { attrs: { slot: "off" }, slot: "off" },
                                      [_vm._v("Absence")]
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-td",
                              [
                                _c("vs-textarea", {
                                  model: {
                                    value: student.remark,
                                    callback: function($$v) {
                                      _vm.$set(student, "remark", $$v)
                                    },
                                    expression: "student.remark"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      })
                    ],
                    2
                  )
                ],
                1
              )
            ]),
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

/***/ "./resources/js/Pages/Admin/Attendances/Student/Create.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Admin/Attendances/Student/Create.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_6910bcc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=6910bcc4& */ "./resources/js/Pages/Admin/Attendances/Student/Create.vue?vue&type=template&id=6910bcc4&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Attendances/Student/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_6910bcc4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_6910bcc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Attendances/Student/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Attendances/Student/Create.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Attendances/Student/Create.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Attendances/Student/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Attendances/Student/Create.vue?vue&type=template&id=6910bcc4&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Attendances/Student/Create.vue?vue&type=template&id=6910bcc4& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_6910bcc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=6910bcc4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Attendances/Student/Create.vue?vue&type=template&id=6910bcc4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_6910bcc4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_6910bcc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);