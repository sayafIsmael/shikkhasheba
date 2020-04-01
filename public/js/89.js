(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Settings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Settings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    settings: Object
  },
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      getSchoolLogo: this.settings.school_logo,
      form: {
        school_logo: "",
        //   general settings
        school_name: this.settings.school_name,
        school_address: this.settings.school_address,
        // sms settings
        muthofun_username: this.settings.muthofun_username,
        muthofun_password: this.settings.muthofun_password
      }
    };
  },
  methods: {
    store: function store() {
      var _this = this;

      this.$vs.loading();
      this.$inertia.put(this.route("admin.settings.update"), this.form, {
        preserveScroll: true,
        preserveState: true
      }).then(function () {
        return _this.$vs.loading.close();
      });
    },
    reset: function reset() {
      var _this2 = this;

      this.$vs.loading();
      this.$inertia.visit(this.route("admin.settings.index")).then(function () {
        return _this2.$vs.loading.close();
      });
    },
    addSchoolLogo: function addSchoolLogo() {
      this.form.school_logo = this.$refs.school_logo.getFile().getFileEncodeDataURL();
    },
    removeSchoolLogo: function removeSchoolLogo() {
      this.form.school_logo = "";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Settings.vue?vue&type=template&id=c8837928&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Settings.vue?vue&type=template&id=c8837928& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c("layout", { attrs: { title: "Settings" } }, [
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
          [_c("h2", { staticClass: "mb-1" }, [_vm._v("Settings")])]
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
                title: "Settings",
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
        { staticClass: "vx-col sm:w-3/4" },
        [
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
                  "vs-tabs",
                  { attrs: { alignment: "fixed" } },
                  [
                    _c(
                      "vs-tab",
                      { attrs: { label: "General" } },
                      [
                        _c(
                          "div",
                          { attrs: { id: "school_logo" } },
                          [
                            _c("file-pond", {
                              ref: "school_logo",
                              staticClass: "p-2",
                              attrs: {
                                name: "school_logo",
                                "label-idle":
                                  "Drop your school logo here or <span class='filepond--label-action'>Browse</span>",
                                "accepted-file-types": "image/jpeg, image/png",
                                files: _vm.getSchoolLogo
                              },
                              on: {
                                addfile: _vm.addSchoolLogo,
                                removefile: _vm.removeSchoolLogo
                              }
                            }),
                            _vm._v(" "),
                            !!_vm.$page.errors.school_logo
                              ? _c("span", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    _vm._s(_vm.$page.errors.school_logo[0])
                                  )
                                ])
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("vs-input", {
                          staticClass: "w-full mb-2",
                          attrs: {
                            "label-placeholder": "School Name",
                            danger: !!_vm.$page.errors.school_name,
                            "danger-text":
                              _vm.$page.errors.school_name != null
                                ? _vm.$page.errors.school_name[0]
                                : ""
                          },
                          model: {
                            value: _vm.form.school_name,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "school_name", $$v)
                            },
                            expression: "form.school_name"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "w-full mb-2" },
                          [
                            _c("vs-textarea", {
                              staticClass: "w-full mb-2",
                              attrs: { label: "School Address " },
                              model: {
                                value: _vm.form.school_address,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "school_address", $$v)
                                },
                                expression: "form.school_address"
                              }
                            }),
                            _vm._v(" "),
                            !!_vm.$page.errors.school_address
                              ? _c("span", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    _vm._s(_vm.$page.errors.school_address[0])
                                  )
                                ])
                              : _vm._e()
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-tab",
                      { attrs: { label: "SMS Setting" } },
                      [
                        _c("vs-input", {
                          staticClass: "w-full mb-2",
                          attrs: {
                            "label-placeholder": "Muthofun Username",
                            danger: !!_vm.$page.errors.muthofun_username,
                            "danger-text":
                              _vm.$page.errors.muthofun_username != null
                                ? _vm.$page.errors.muthofun_username[0]
                                : ""
                          },
                          model: {
                            value: _vm.form.muthofun_username,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "muthofun_username", $$v)
                            },
                            expression: "form.muthofun_username"
                          }
                        }),
                        _vm._v(" "),
                        _c("vs-input", {
                          staticClass: "w-full mb-2",
                          attrs: {
                            type: "password",
                            "label-placeholder": "Muthofun Password",
                            danger: !!_vm.$page.errors.muthofun_password,
                            "danger-text":
                              _vm.$page.errors.muthofun_password != null
                                ? _vm.$page.errors.muthofun_username[0]
                                : ""
                          },
                          model: {
                            value: _vm.form.muthofun_password,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "muthofun_password", $$v)
                            },
                            expression: "form.muthofun_password"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-full px-6" },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "mr-3 mb-2",
                          attrs: { button: "submit" }
                        },
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
              ],
              1
            )
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Admin/Settings.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Admin/Settings.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_c8837928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=c8837928& */ "./resources/js/Pages/Admin/Settings.vue?vue&type=template&id=c8837928&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_c8837928___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_c8837928___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Settings.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Settings.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Settings.vue?vue&type=template&id=c8837928&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Settings.vue?vue&type=template&id=c8837928& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_c8837928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=c8837928& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Settings.vue?vue&type=template&id=c8837928&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_c8837928___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_c8837928___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);