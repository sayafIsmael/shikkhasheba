(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Exam-routine/Class/Routine.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Exam-routine/Class/Routine.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    academiClass: Object,
    examId: String,
    exam: Object,
    routines: Array,
    schoolName: String
  },
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      editMode: false,
      start_time: null,
      end_time: null,
      subject: "",
      day: "",
      routine: "",
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
    create: function create() {},
    update: function update() {},
    store: function store() {
      this.$inertia.post(this.route("admin.exam-routines.store"), {
        subject_id: this.subject,
        day: this.day,
        start_time: this.start_time,
        end_time: this.end_time,
        section_id: this.section.id,
        academic_class_id: this.classId
      }, {
        preserveScroll: true,
        preserveState: true
      }, this.routinePopup = false);
    },
    destroy: function destroy(routine) {
      this.routine = routine;
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Confirm",
        text: "Are you sure? you want to delete this.",
        accept: this.acceptDelete
      });
    },
    acceptDelete: function acceptDelete() {
      this.$inertia["delete"](this.route("admin.exam-routines.destroy", this.routine.id), {
        preserveScroll: true,
        preserveState: true
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Exam-routine/Class/Routine.vue?vue&type=template&id=d7631386&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Exam-routine/Class/Routine.vue?vue&type=template&id=d7631386& ***!
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
                  title: "Routine",
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
        {
          staticClass: "pb-2",
          attrs: { "vs-type": "flex", "vs-justify": "space-between" }
        },
        [
          _c(
            "vs-col",
            {
              staticClass: "mb-2",
              attrs: {
                "vs-type": "flex",
                "vs-justify": "flex-end",
                "vs-lg": "12",
                "vs-sm": "12",
                "vs-xs": "12"
              }
            },
            [
              _c(
                "a",
                {
                  staticClass: "pr-2",
                  attrs: {
                    href: _vm.route("admin.exam-routines.download", {
                      examId: _vm.examId,
                      classId: _vm.classId
                    })
                  }
                },
                [
                  _c(
                    "vs-button",
                    { attrs: { color: "primary", type: "filled" } },
                    [_vm._v("Print")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "inertia-link",
                {
                  attrs: {
                    href: _vm.route("admin.exam-routines.create", {
                      examId: _vm.examId,
                      classId: _vm.classId
                    })
                  }
                },
                [
                  _c(
                    "vs-button",
                    { attrs: { color: "primary", type: "filled" } },
                    [_vm._v("Add Routine")]
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
        "vs-card",
        [
          _c("div", { staticClass: "text-center p-3" }, [
            _c("h2", [_vm._v(_vm._s(_vm.schoolName))]),
            _vm._v(" "),
            _c("h3", [_vm._v(_vm._s(_vm.exam.name) + " exam")]),
            _vm._v(" "),
            _c("h4", [_vm._v("Class : " + _vm._s(_vm.academiClass.name))])
          ]),
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
                    [_vm._v("Date")]
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
                        "vs-w": "2",
                        "vs-type": "flex",
                        "vs-align": "center"
                      }
                    },
                    [_vm._v("Subject Title")]
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
                    [_vm._v("Start Time")]
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
                    [_vm._v("End Time")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.routines.length
                ? _c(
                    "div",
                    _vm._l(_vm.routines, function(routine, index) {
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
                                    [_vm._v(_vm._s(routine.date))]
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
                                    [_vm._v(_vm._s(routine.shift.name))]
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
                                    [_vm._v(_vm._s(routine.group.name))]
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
                                    [_vm._v(_vm._s(routine.subject.name))]
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
                                    [_vm._v(_vm._s(routine.start_time))]
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
                                    [_vm._v(_vm._s(routine.end_time))]
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
                                    text: "Edit routine info."
                                  }
                                },
                                [
                                  _c(
                                    "inertia-link",
                                    {
                                      attrs: {
                                        href: _vm.route(
                                          "admin.exam-routines.edit",
                                          routine.id
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
                                    text: "Delete this routine."
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
                                        return _vm.destroy(routine)
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
                    "vs-row",
                    { staticClass: "mt-2", attrs: { "vs-type": "flex" } },
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
                        [_vm._v("No routine found.")]
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

/***/ "./resources/js/Pages/Admin/Exam-routine/Class/Routine.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Admin/Exam-routine/Class/Routine.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Routine_vue_vue_type_template_id_d7631386___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Routine.vue?vue&type=template&id=d7631386& */ "./resources/js/Pages/Admin/Exam-routine/Class/Routine.vue?vue&type=template&id=d7631386&");
/* harmony import */ var _Routine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Routine.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Exam-routine/Class/Routine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Routine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Routine_vue_vue_type_template_id_d7631386___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Routine_vue_vue_type_template_id_d7631386___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Exam-routine/Class/Routine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Exam-routine/Class/Routine.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Exam-routine/Class/Routine.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Routine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Routine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Exam-routine/Class/Routine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Routine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Exam-routine/Class/Routine.vue?vue&type=template&id=d7631386&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Exam-routine/Class/Routine.vue?vue&type=template&id=d7631386& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Routine_vue_vue_type_template_id_d7631386___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Routine.vue?vue&type=template&id=d7631386& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Exam-routine/Class/Routine.vue?vue&type=template&id=d7631386&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Routine_vue_vue_type_template_id_d7631386___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Routine_vue_vue_type_template_id_d7631386___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);