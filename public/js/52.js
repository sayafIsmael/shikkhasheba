(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Admissions/New.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Admissions/New.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    classes: Array,
    sections: Array,
    parents: Array,
    fees: Array,
    shifts: Array,
    groups: Array
  },
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      avatar: "",
      parent_avatar: "",
      form: {
        "class": this.requests.class_id,
        section: "",
        shift: "",
        group: "",
        avatar: "",
        name: "",
        email: "",
        roll_no: "",
        student_id: "",
        password: "",
        password_confirmation: "",
        gender: "",
        date_of_birth: null,
        contact_no: "",
        emergency_no: "",
        address: "",
        birth_certificate_number: "",
        fee: "",
        note: "",
        // parent info
        new_parent: false,
        parent: "",
        parent_avatar: "",
        parent_name: "",
        parent_email: "",
        parent_id: "",
        parent_password: "",
        parent_password_confirmation: "",
        parent_gender: "",
        parent_date_of_birth: null,
        parent_contact_no: "",
        parent_address: "",
        parent_nid_number: "",
        parent_birth_certificate_number: ""
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
    selectClass: function selectClass() {
      this.$inertia.replace(this.route("admin.admissions.new", {
        class_id: this.form["class"]
      }));
    },
    store: function store() {
      this.$inertia.post(this.route("admin.admissions.store"), this.form, {
        preserveScroll: true,
        preserveState: true
      });
    },
    addAvatar: function addAvatar() {
      this.form.avatar = this.$refs.avatar.getFile().getFileEncodeDataURL();
    },
    removeAvatar: function removeAvatar() {
      this.form.avatar = "";
    },
    addParentAvatar: function addParentAvatar() {
      this.form.parent_avatar = this.$refs.parentAvatar.getFile().getFileEncodeDataURL();
    },
    removeParentAvatar: function removeParentAvatar() {
      this.form.parent_avatar = "";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Admissions/New.vue?vue&type=template&id=5642d3f8&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Admissions/New.vue?vue&type=template&id=5642d3f8& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    { attrs: { title: "Student Admission" } },
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
            [_c("h2", { staticClass: "mb-1" }, [_vm._v("Student Admission")])]
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
                  title: "Admissions",
                  url: _vm.route("admin.admissions.index")
                },
                {
                  title: "New",
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
                { attrs: { href: _vm.route("admin.admissions.index") } },
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
              _c("div", { staticClass: "vx-col sm:w-1/1 w-full mb-2" }, [
                _c("h3", [_vm._v("Student Details")])
              ]),
              _vm._v(" "),
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
                      files: _vm.avatar
                    },
                    on: { addfile: _vm.addAvatar, removefile: _vm.removeAvatar }
                  }),
                  _vm._v(" "),
                  !!_vm.$page.errors.avatar
                    ? _c("span", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.$page.errors.avatar[0]))
                      ])
                    : _vm._e()
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
                      staticClass: "w-full selectExample mb-2",
                      attrs: {
                        label: "Class *",
                        placeholder: "Select class",
                        autocomplete: "",
                        danger: !!_vm.$page.errors.class,
                        "danger-text":
                          _vm.$page.errors.class != null
                            ? _vm.$page.errors.class[0]
                            : ""
                      },
                      on: {
                        change: function($event) {
                          return _vm.selectClass()
                        }
                      },
                      model: {
                        value: _vm.form.class,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "class", $$v)
                        },
                        expression: "form.class"
                      }
                    },
                    _vm._l(_vm.classes, function(item, index) {
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
                "div",
                { staticClass: "vx-col sm:w-1/2 w-full mb-2" },
                [
                  _c(
                    "vs-select",
                    {
                      staticClass: "w-full selectExample mb-2",
                      attrs: {
                        label: "Section *",
                        placeholder: "Select section",
                        autocomplete: "",
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
                      staticClass: "w-full selectExample mb-2",
                      attrs: {
                        label: "Shift *",
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
                  )
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
                      staticClass: "w-full selectExample mb-2",
                      attrs: {
                        label: "Group *",
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
                  )
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
                      "label-placeholder": "Name *",
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
                      "label-placeholder": "Email *",
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
                      type: "number",
                      "label-placeholder": "Roll No *",
                      danger: !!_vm.$page.errors.roll_no,
                      "danger-text":
                        _vm.$page.errors.roll_no != null
                          ? _vm.$page.errors.roll_no[0]
                          : ""
                    },
                    model: {
                      value: _vm.form.roll_no,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "roll_no", $$v)
                      },
                      expression: "form.roll_no"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-2",
                    attrs: {
                      type: "number",
                      "label-placeholder": "Student ID *",
                      danger: !!_vm.$page.errors.student_id,
                      "danger-text":
                        _vm.$page.errors.student_id != null
                          ? _vm.$page.errors.student_id[0]
                          : ""
                    },
                    model: {
                      value: _vm.form.student_id,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "student_id", $$v)
                      },
                      expression: "form.student_id"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-2",
                    attrs: {
                      type: "password",
                      "label-placeholder": "Pin Number *",
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
                  _c("flat-pickr", {
                    staticClass: "w-full mb-2",
                    attrs: {
                      placeholder: "Date of Birth *",
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
                  }),
                  _vm._v(" "),
                  !!_vm.$page.errors.date_of_birth
                    ? _c("span", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.$page.errors.date_of_birth[0]))
                      ])
                    : _vm._e()
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
                        label: "Gender *",
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
                  _c("vs-input", {
                    staticClass: "w-full mb-2",
                    attrs: {
                      type: "number",
                      "label-placeholder": "Contact No *",
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
                  _c("vs-input", {
                    staticClass: "w-full mb-2",
                    attrs: {
                      type: "number",
                      "label-placeholder": "Emergency No *",
                      danger: !!_vm.$page.errors.emergency_no,
                      "danger-text":
                        _vm.$page.errors.emergency_no != null
                          ? _vm.$page.errors.emergency_no[0]
                          : ""
                    },
                    model: {
                      value: _vm.form.emergency_no,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "emergency_no", $$v)
                      },
                      expression: "form.emergency_no"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-textarea", {
                    staticClass: "w-full mb-2",
                    attrs: { label: "Address *" },
                    model: {
                      value: _vm.form.address,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "address", $$v)
                      },
                      expression: "form.address"
                    }
                  }),
                  _vm._v(" "),
                  !!_vm.$page.errors.address
                    ? _c("span", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.$page.errors.address[0]))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("vs-input", {
                    staticClass: "w-full mb-2",
                    attrs: {
                      type: "number",
                      "label-placeholder": "Birth Certificate Number *",
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
                  _c(
                    "vs-select",
                    {
                      staticClass: "w-full mb-2",
                      attrs: {
                        label: "Select Fee *",
                        danger: !!_vm.$page.errors.fee,
                        "danger-text":
                          _vm.$page.errors.fee != null
                            ? _vm.$page.errors.fee[0]
                            : ""
                      },
                      model: {
                        value: _vm.form.fee,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "fee", $$v)
                        },
                        expression: "form.fee"
                      }
                    },
                    _vm._l(_vm.fees, function(fee, index) {
                      return _c("vs-select-item", {
                        key: index,
                        attrs: {
                          value: fee.id,
                          text: fee.name + " - " + fee.total + " .tk"
                        }
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col sm:w-1/1 w-full mb-2" },
                [
                  _c("vs-textarea", {
                    staticClass: "w-full mb-2",
                    attrs: { label: "Note " },
                    model: {
                      value: _vm.form.note,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "note", $$v)
                      },
                      expression: "form.note"
                    }
                  }),
                  _vm._v(" "),
                  !!_vm.$page.errors.note
                    ? _c("span", { staticClass: "text-danger" }, [
                        _vm._v(_vm._s(_vm.$page.errors.note[0]))
                      ])
                    : _vm._e()
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row" }, [
              _c("div", { staticClass: "vx-col sm:w-1/1 w-full mb-2" }, [
                _c("h3", [_vm._v("Parent Details")])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col sm:w-1/1 w-full mb-2" },
                [
                  _c("label", [
                    _vm._v("If you want to add a new parent, mark this option")
                  ]),
                  _vm._v(" "),
                  _c(
                    "vs-switch",
                    {
                      staticClass: "mb-2",
                      model: {
                        value: _vm.form.new_parent,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "new_parent", $$v)
                        },
                        expression: "form.new_parent"
                      }
                    },
                    [
                      _c("span", { attrs: { slot: "on" }, slot: "on" }, [
                        _vm._v("Add new parent")
                      ]),
                      _vm._v(" "),
                      _c("span", { attrs: { slot: "off" }, slot: "off" }, [
                        _vm._v("Select parent")
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              !_vm.form.new_parent
                ? _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/1 w-full mb-2" },
                    [
                      _c(
                        "vs-select",
                        {
                          staticClass: "w-full mb-2",
                          attrs: {
                            placeholder: "Select parent",
                            label: "Parent *",
                            autocomplete: "",
                            danger: !!_vm.$page.errors.parent,
                            "danger-text":
                              _vm.$page.errors.parent != null
                                ? _vm.$page.errors.parent[0]
                                : ""
                          },
                          model: {
                            value: _vm.form.parent,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "parent", $$v)
                            },
                            expression: "form.parent"
                          }
                        },
                        _vm._l(_vm.parents, function(item, index) {
                          return _c("vs-select-item", {
                            key: index,
                            attrs: { value: item.id, text: item.name }
                          })
                        }),
                        1
                      )
                    ],
                    1
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _vm.form.new_parent
              ? _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col sm:w-1/1 w-full mb-2" },
                    [
                      _c("file-pond", {
                        ref: "parentAvatar",
                        attrs: {
                          name: "avatar",
                          "label-idle":
                            "Drop your avatar image here or <span class='filepond--label-action'>Browse</span>",
                          "accepted-file-types": "image/jpeg, image/png",
                          files: _vm.parent_avatar
                        },
                        on: {
                          addfile: _vm.addParentAvatar,
                          removefile: _vm.removeParentAvatar
                        }
                      }),
                      _vm._v(" "),
                      !!_vm.$page.errors.parent_avatar
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.$page.errors.parent_avatar[0]))
                          ])
                        : _vm._e()
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
                          "label-placeholder": "Name *",
                          danger: !!_vm.$page.errors.parent_name,
                          "danger-text":
                            _vm.$page.errors.parent_name != null
                              ? _vm.$page.errors.parent_name[0]
                              : ""
                        },
                        model: {
                          value: _vm.form.parent_name,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "parent_name", $$v)
                          },
                          expression: "form.parent_name"
                        }
                      }),
                      _vm._v(" "),
                      _c("vs-input", {
                        staticClass: "w-full mb-2",
                        attrs: {
                          type: "email",
                          "label-placeholder": "Email *",
                          danger: !!_vm.$page.errors.parent_email,
                          "danger-text":
                            _vm.$page.errors.parent_email != null
                              ? _vm.$page.errors.parent_email[0]
                              : ""
                        },
                        model: {
                          value: _vm.form.parent_email,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "parent_email", $$v)
                          },
                          expression: "form.parent_email"
                        }
                      }),
                      _vm._v(" "),
                      _c("vs-input", {
                        staticClass: "w-full mb-2",
                        attrs: {
                          type: "text",
                          "label-placeholder": "Parent ID *",
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
                          "label-placeholder": "Pin Number *",
                          danger: !!_vm.$page.errors.parent_password,
                          "danger-text":
                            _vm.$page.errors.parent_password != null
                              ? _vm.$page.errors.parent_password[0]
                              : ""
                        },
                        model: {
                          value: _vm.form.parent_password,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "parent_password", $$v)
                          },
                          expression: "form.parent_password"
                        }
                      }),
                      _vm._v(" "),
                      _c("vs-input", {
                        staticClass: "w-full mb-2",
                        attrs: {
                          type: "password",
                          "label-placeholder": "Confirm Pin Number",
                          danger: !!_vm.$page.errors
                            .parent_password_confirmation,
                          "danger-text":
                            _vm.$page.errors.parent_password_confirmation !=
                            null
                              ? _vm.$page.errors.parent_password_confirmation[0]
                              : ""
                        },
                        model: {
                          value: _vm.form.parent_password_confirmation,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "parent_password_confirmation",
                              $$v
                            )
                          },
                          expression: "form.parent_password_confirmation"
                        }
                      }),
                      _vm._v(" "),
                      _c("flat-pickr", {
                        staticClass: "w-full mb-2",
                        attrs: { placeholder: "Date of Birth *" },
                        model: {
                          value: _vm.form.parent_date_of_birth,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "parent_date_of_birth", $$v)
                          },
                          expression: "form.parent_date_of_birth"
                        }
                      }),
                      _vm._v(" "),
                      !!_vm.$page.errors.parent_date_of_birth
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(
                              _vm._s(_vm.$page.errors.parent_date_of_birth[0])
                            )
                          ])
                        : _vm._e()
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
                            label: "Select Gender *",
                            danger: !!_vm.$page.errors.parent_gender,
                            "danger-text":
                              _vm.$page.errors.parent_gender != null
                                ? _vm.$page.errors.parent_gender[0]
                                : ""
                          },
                          model: {
                            value: _vm.form.parent_gender,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "parent_gender", $$v)
                            },
                            expression: "form.parent_gender"
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
                      _c("vs-input", {
                        staticClass: "w-full mb-2",
                        attrs: {
                          type: "number",
                          "label-placeholder": "Contact No *",
                          danger: !!_vm.$page.errors.parent_contact_no,
                          "danger-text":
                            _vm.$page.errors.parent_contact_no != null
                              ? _vm.$page.errors.parent_contact_no[0]
                              : ""
                        },
                        model: {
                          value: _vm.form.parent_contact_no,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "parent_contact_no", $$v)
                          },
                          expression: "form.parent_contact_no"
                        }
                      }),
                      _vm._v(" "),
                      _c("vs-textarea", {
                        staticClass: "w-full mb-2",
                        attrs: { label: "Address *" },
                        model: {
                          value: _vm.form.parent_address,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "parent_address", $$v)
                          },
                          expression: "form.parent_address"
                        }
                      }),
                      _vm._v(" "),
                      !!_vm.$page.errors.parent_address
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.$page.errors.parent_address[0]))
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("vs-input", {
                        staticClass: "w-full mb-2",
                        attrs: {
                          type: "number",
                          "label-placeholder": "NID Number *",
                          danger: !!_vm.$page.errors.parent_nid_number,
                          "danger-text":
                            _vm.$page.errors.parent_nid_number != null
                              ? _vm.$page.errors.parent_nid_number[0]
                              : ""
                        },
                        model: {
                          value: _vm.form.parent_nid_number,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "parent_nid_number", $$v)
                          },
                          expression: "form.parent_nid_number"
                        }
                      }),
                      _vm._v(" "),
                      _c("vs-input", {
                        staticClass: "w-full mb-2",
                        attrs: {
                          type: "number",
                          "label-placeholder": "Birth Certificate Number *",
                          danger: !!_vm.$page.errors
                            .parent_birth_certificate_number,
                          "danger-text":
                            _vm.$page.errors.parent_birth_certificate_number !=
                            null
                              ? _vm.$page.errors
                                  .parent_birth_certificate_number[0]
                              : ""
                        },
                        model: {
                          value: _vm.form.parent_birth_certificate_number,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.form,
                              "parent_birth_certificate_number",
                              $$v
                            )
                          },
                          expression: "form.parent_birth_certificate_number"
                        }
                      })
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row" }, [
              _c("div", { staticClass: "vx-col w-full pb-2" }, [
                _c("strong", [_vm._v("All * fields are required.")])
              ]),
              _vm._v(" "),
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

/***/ "./resources/js/Pages/Admin/Admissions/New.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Admin/Admissions/New.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _New_vue_vue_type_template_id_5642d3f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New.vue?vue&type=template&id=5642d3f8& */ "./resources/js/Pages/Admin/Admissions/New.vue?vue&type=template&id=5642d3f8&");
/* harmony import */ var _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Admissions/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_vue_vue_type_template_id_5642d3f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _New_vue_vue_type_template_id_5642d3f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Admissions/New.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Admissions/New.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Admissions/New.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Admissions/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Admissions/New.vue?vue&type=template&id=5642d3f8&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Admissions/New.vue?vue&type=template&id=5642d3f8& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_5642d3f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=template&id=5642d3f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Admissions/New.vue?vue&type=template&id=5642d3f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_5642d3f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_5642d3f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);