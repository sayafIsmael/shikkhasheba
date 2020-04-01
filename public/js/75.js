(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Leave/Applications/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Leave/Applications/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill/dist/quill.core.css */ "./node_modules/quill/dist/quill.core.css");
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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


 // quillEditor




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    leaveApplication: Object,
    leaveTypes: Array,
    leaveStatus: Array
  },
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_5__["quillEditor"]
  },
  data: function data() {
    return {
      user: this.leaveApplication.user,
      form: {
        title: this.leaveApplication.title,
        description: this.leaveApplication.description,
        type: this.leaveApplication.leave_type.id,
        form: this.leaveApplication.form,
        until: this.leaveApplication.until,
        status: this.leaveApplication.status
      }
    };
  },
  methods: {
    store: function store() {
      var _this = this;

      this.$vs.loading();
      this.$inertia.put(this.route("admin.leave-applications.update", this.leaveApplication.id), this.form, {
        preserveScroll: true,
        preserveState: true
      }).then(function () {
        return _this.$vs.loading.close();
      });
    },
    reset: function reset() {
      var _this2 = this;

      this.$vs.loading();
      this.$inertia.visit(this.route("admin.leave-applications.edit", this.leaveApplication.id)).then(function () {
        return _this2.$vs.loading.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Leave/Applications/Edit.vue?vue&type=template&id=73aa4b65&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Leave/Applications/Edit.vue?vue&type=template&id=73aa4b65& ***!
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
    { attrs: { title: "Leave Appliction" } },
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
                _vm._v("Edit Leave Application")
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
                  title: "Leave Application",
                  url: _vm.route("admin.leave-applications.index")
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
                {
                  attrs: { href: _vm.route("admin.leave-applications.index") }
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
                { staticClass: "vx-col text-center sm:w-1/1 w-full mb-2" },
                [
                  _c("vs-avatar", {
                    attrs: {
                      size: "75px",
                      src: _vm.user.avatar_path,
                      text: _vm.user.name
                    }
                  }),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("strong", [_vm._v(_vm._s(_vm.user.name))]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("p", [_vm._v("Role: " + _vm._s(_vm.user.role.name))])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
                [
                  _c(
                    "vs-select",
                    {
                      staticClass: "w-full mb-2",
                      attrs: {
                        label: "Select Type",
                        danger: !!_vm.$page.errors.type,
                        "danger-text":
                          _vm.$page.errors.type != null
                            ? _vm.$page.errors.type[0]
                            : ""
                      },
                      model: {
                        value: _vm.form.type,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "type", $$v)
                        },
                        expression: "form.type"
                      }
                    },
                    _vm._l(_vm.leaveTypes, function(item, index) {
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
                      staticClass: "w-full mb-2",
                      attrs: {
                        label: "Select Status",
                        danger: !!_vm.$page.errors.status,
                        "danger-text":
                          _vm.$page.errors.status != null
                            ? _vm.$page.errors.status[0]
                            : ""
                      },
                      model: {
                        value: _vm.form.status,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "status", $$v)
                        },
                        expression: "form.status"
                      }
                    },
                    _vm._l(_vm.leaveStatus, function(item, index) {
                      return _c("vs-select-item", {
                        key: index,
                        attrs: { value: item, text: item }
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "vx-col sm:w-1/2 w-full mb-2" }, [
                _c(
                  "div",
                  [
                    _c("label", { attrs: { for: "form" } }, [_vm._v("Form")]),
                    _vm._v(" "),
                    _c("flat-pickr", {
                      staticClass: "w-full mb-2",
                      attrs: {
                        placeholder: "Select Date",
                        danger: !!_vm.$page.errors.form,
                        "danger-text":
                          _vm.$page.errors.form != null
                            ? _vm.$page.errors.form[0]
                            : ""
                      },
                      model: {
                        value: _vm.form.form,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "form", $$v)
                        },
                        expression: "form.form"
                      }
                    }),
                    _vm._v(" "),
                    !!_vm.$page.errors.form
                      ? _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.$page.errors.form[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("label", { attrs: { for: "until" } }, [_vm._v("Until")]),
                    _vm._v(" "),
                    _c("flat-pickr", {
                      staticClass: "w-full mb-2",
                      attrs: {
                        placeholder: "Select Date",
                        danger: !!_vm.$page.errors.until,
                        "danger-text":
                          _vm.$page.errors.until != null
                            ? _vm.$page.errors.until[0]
                            : ""
                      },
                      model: {
                        value: _vm.form.until,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "until", $$v)
                        },
                        expression: "form.until"
                      }
                    }),
                    _vm._v(" "),
                    !!_vm.$page.errors.until
                      ? _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.$page.errors.until[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col sm:w-1/1 w-full mb-2" },
                [
                  _c("vs-input", {
                    staticClass: "w-full mb-2",
                    attrs: {
                      "label-placeholder": "Title",
                      danger: !!_vm.$page.errors.title,
                      "danger-text":
                        _vm.$page.errors.title != null
                          ? _vm.$page.errors.title[0]
                          : ""
                    },
                    model: {
                      value: _vm.form.title,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "title", $$v)
                      },
                      expression: "form.title"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c("label", { attrs: { for: "description" } }, [
                        _vm._v("Description")
                      ]),
                      _vm._v(" "),
                      !!_vm.$page.errors.description
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.$page.errors.description[0]))
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("quill-editor", {
                        model: {
                          value: _vm.form.description,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "description", $$v)
                          },
                          expression: "form.description"
                        }
                      })
                    ],
                    1
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

/***/ "./resources/js/Pages/Admin/Leave/Applications/Edit.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Admin/Leave/Applications/Edit.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_73aa4b65___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=73aa4b65& */ "./resources/js/Pages/Admin/Leave/Applications/Edit.vue?vue&type=template&id=73aa4b65&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Leave/Applications/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_73aa4b65___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_73aa4b65___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Leave/Applications/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Leave/Applications/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Leave/Applications/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Leave/Applications/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Leave/Applications/Edit.vue?vue&type=template&id=73aa4b65&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Leave/Applications/Edit.vue?vue&type=template&id=73aa4b65& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_73aa4b65___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=73aa4b65& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Leave/Applications/Edit.vue?vue&type=template&id=73aa4b65&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_73aa4b65___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_73aa4b65___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);