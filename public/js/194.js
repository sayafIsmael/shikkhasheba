(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[194],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Student/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Student/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    parent: Object
  },
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      getAvatar: this.parent.avatar_path,
      form: {
        avatar: '',
        name: this.parent.name,
        email: this.parent.email,
        parent_id: this.parent.user_id,
        password: "",
        password_confirmation: "",
        role: this.parent.role_id,
        gender: this.parent.gender,
        date_of_birth: this.parent.dob,
        contact_no: this.parent.contact_no,
        address: this.parent.address,
        nid_number: this.parent.nid_number,
        birth_certificate_number: this.parent.birth_certificate_number,
        position: this.parent.position,
        yearly_leave: this.parent.yearly_leave
      },
      genders: [{
        label: "Male",
        value: "Male"
      }, {
        label: "Female",
        value: "Female"
      }]
    };
  },
  methods: {
    update: function update() {
      this.$inertia.put(this.route("admin.parents.update", this.parent.id), this.form, {
        preserveScroll: true,
        preserveState: true
      });
    },
    addAvatar: function addAvatar() {
      this.form.avatar = this.$refs.avatar.getFile().getFileEncodeDataURL();
    },
    removeAvatar: function removeAvatar() {
      this.form.avatar = "";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Student/Edit.vue?vue&type=template&id=1ebe8272&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Student/Edit.vue?vue&type=template&id=1ebe8272& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Edit" } },
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
            [_c("h2", { staticClass: "mb-1" }, [_vm._v("Edit Parent")])]
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
                  title: "Parents",
                  url: _vm.route("admin.parents.index")
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
                { attrs: { href: _vm.route("admin.parents.index") } },
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
                return _vm.update($event)
              }
            }
          },
          [
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                { staticClass: "vx-col sm:w-1/1 w-full mb-2" },
                [
                  _c("file-pond", {
                    ref: "avatar",
                    attrs: {
                      name: "avatar",
                      "label-idle":
                        "Drop your avatar image here or <span class='filepond--label-action'>Browse</span>",
                      "accepted-file-types": "image/jpeg, image/png",
                      files: _vm.getAvatar
                    },
                    on: { addfile: _vm.addAvatar, removefile: _vm.removeAvatar }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
                [
                  _c("vs-input", {
                    staticClass: "w-full mb-2",
                    attrs: {
                      "label-placeholder": "Name",
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
                    staticClass: "w-full mb-2",
                    attrs: {
                      type: "email",
                      "label-placeholder": "Email",
                      danger: !!_vm.$page.errors.email,
                      "danger-text":
                        _vm.$page.errors.email != null
                          ? _vm.$page.errors.email[0]
                          : ""
                    },
                    model: {
                      value: _vm.form.email,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "email", $$v)
                      },
                      expression: "form.email"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-2",
                    attrs: {
                      "label-placeholder": "parent Id (Unique)",
                      danger: !!_vm.$page.errors.parent_id,
                      "danger-text":
                        _vm.$page.errors.parent_id != null
                          ? _vm.$page.errors.parent_id[0]
                          : ""
                    },
                    model: {
                      value: _vm.form.parent_id,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "parent_id", $$v)
                      },
                      expression: "form.parent_id"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-2",
                    attrs: {
                      type: "password",
                      "label-placeholder": "Pin Number",
                      danger: !!_vm.$page.errors.password,
                      "danger-text":
                        _vm.$page.errors.password != null
                          ? _vm.$page.errors.password[0]
                          : ""
                    },
                    model: {
                      value: _vm.form.password,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "password", $$v)
                      },
                      expression: "form.password"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-2",
                    attrs: {
                      type: "password",
                      "label-placeholder": "Confirm Pin Number",
                      danger: !!_vm.$page.errors.password_confirmation,
                      "danger-text":
                        _vm.$page.errors.password_confirmation != null
                          ? _vm.$page.errors.password_confirmation[0]
                          : ""
                    },
                    model: {
                      value: _vm.form.password_confirmation,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "password_confirmation", $$v)
                      },
                      expression: "form.password_confirmation"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "vs-select",
                    {
                      staticClass: "w-full mb-2",
                      attrs: {
                        label: "Select Gender",
                        danger: !!_vm.$page.errors.gender,
                        "danger-text":
                          _vm.$page.errors.gender != null
                            ? _vm.$page.errors.gender[0]
                            : ""
                      },
                      model: {
                        value: _vm.form.gender,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "gender", $$v)
                        },
                        expression: "form.gender"
                      }
                    },
                    _vm._l(_vm.genders, function(gender, index) {
                      return _c("vs-select-item", {
                        key: index,
                        attrs: { value: gender.value, text: gender.label }
                      })
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c("flat-pickr", {
                    staticClass: "w-full mb-2",
                    attrs: {
                      placeholder: "Date of Birth",
                      danger: !!_vm.$page.errors.date_of_birth,
                      "danger-text":
                        _vm.$page.errors.date_of_birth != null
                          ? _vm.$page.errors.date_of_birth[0]
                          : ""
                    },
                    model: {
                      value: _vm.form.date_of_birth,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "date_of_birth", $$v)
                      },
                      expression: "form.date_of_birth"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
                [
                  _c("vs-input", {
                    staticClass: "w-full mb-2",
                    attrs: {
                      type: "number",
                      "label-placeholder": "Contact No",
                      danger: !!_vm.$page.errors.contact_no,
                      "danger-text":
                        _vm.$page.errors.contact_no != null
                          ? _vm.$page.errors.contact_no[0]
                          : ""
                    },
                    model: {
                      value: _vm.form.contact_no,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "contact_no", $$v)
                      },
                      expression: "form.contact_no"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-textarea", {
                    staticClass: "w-full mb-2",
                    attrs: {
                      label: "Address",
                      danger: !!_vm.$page.errors.address,
                      "danger-text":
                        _vm.$page.errors.address != null
                          ? _vm.$page.errors.address[0]
                          : ""
                    },
                    model: {
                      value: _vm.form.address,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "address", $$v)
                      },
                      expression: "form.address"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-2",
                    attrs: {
                      type: "number",
                      "label-placeholder": "NID Number",
                      danger: !!_vm.$page.errors.nid_number,
                      "danger-text":
                        _vm.$page.errors.nid_number != null
                          ? _vm.$page.errors.nid_number[0]
                          : ""
                    },
                    model: {
                      value: _vm.form.nid_number,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "nid_number", $$v)
                      },
                      expression: "form.nid_number"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-2",
                    attrs: {
                      type: "number",
                      "label-placeholder": "Birth Certificate Number",
                      danger: !!_vm.$page.errors.birth_certificate_number,
                      "danger-text":
                        _vm.$page.errors.birth_certificate_number != null
                          ? _vm.$page.errors.birth_certificate_number[0]
                          : ""
                    },
                    model: {
                      value: _vm.form.birth_certificate_number,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "birth_certificate_number", $$v)
                      },
                      expression: "form.birth_certificate_number"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-2",
                    attrs: {
                      "label-placeholder": "Position",
                      danger: !!_vm.$page.errors.position,
                      "danger-text":
                        _vm.$page.errors.position != null
                          ? _vm.$page.errors.position[0]
                          : ""
                    },
                    model: {
                      value: _vm.form.position,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "position", $$v)
                      },
                      expression: "form.position"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-2",
                    attrs: {
                      type: "number",
                      "label-placeholder": "Yearly Leave",
                      danger: !!_vm.$page.errors.yearly_leave,
                      "danger-text":
                        _vm.$page.errors.yearly_leave != null
                          ? _vm.$page.errors.yearly_leave[0]
                          : ""
                    },
                    model: {
                      value: _vm.form.yearly_leave,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "yearly_leave", $$v)
                      },
                      expression: "form.yearly_leave"
                    }
                  })
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
                    [_vm._v("Update")]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      staticClass: "mb-2",
                      attrs: { color: "warning", type: "border" }
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

/***/ "./resources/js/Pages/Admin/Student/Edit.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Admin/Student/Edit.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_1ebe8272___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=1ebe8272& */ "./resources/js/Pages/Admin/Student/Edit.vue?vue&type=template&id=1ebe8272&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Student/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_1ebe8272___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_1ebe8272___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Student/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Student/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Student/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Student/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Student/Edit.vue?vue&type=template&id=1ebe8272&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Student/Edit.vue?vue&type=template&id=1ebe8272& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_1ebe8272___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=1ebe8272& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Student/Edit.vue?vue&type=template&id=1ebe8272&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_1ebe8272___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_1ebe8272___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);