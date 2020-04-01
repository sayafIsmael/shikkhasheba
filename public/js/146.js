(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[146],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Academic/Class/Section/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Academic/Class/Section/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    academicClass: Object,
    requests: Object,
    sections: Object,
    teachers: Array
  },
  components: {
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      sectionPopup: false,
      // section: [],
      editMode: false,
      section: {
        id: "",
        name: "",
        // academic_class_id: "",
        slug: "",
        room_number: "",
        teacher: ""
      },
      filters: {
        classId: this.academicClass.id,
        perPage: this.requests.perPage ? this.requests.perPage : 10,
        search: this.requests.search,
        page: this.sections.pagination.current_page
      }
    };
  },
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
      val.name != null ? this.sectionPopup = true : this.sectionPopup = false;
    }
  },
  methods: {
    filter: function filter() {
      var query = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pickBy(this.filters);

      this.$inertia.replace(this.route("admin.academic.classes.sections.index", Object.keys(query).length ? query : {
        remember: "forget"
      }), {
        preserveScroll: true,
        preserveState: true
      });
    },
    create: function create() {
      this.editMode = false;
      this.section.name = "";
      this.section.id = "";
      this.section.room_number = "";
      this.section.teacher = "";
      this.sectionPopup = true;
    },
    store: function store() {
      this.$inertia.post(this.route("admin.academic.classes.sections.store", this.academicClass.id), {
        name: this.section.name,
        room_number: this.section.room_number,
        teacher_id: this.section.teacher
      }, {
        preserveScroll: true,
        preserveState: true
      });
      this.sectionPopup = false;
    },
    edit: function edit(section) {
      this.section.id = section.id;
      this.section.name = section.name;
      this.section.room_number = section.room_number;
      this.section.teacher = section.teacher.id;
      this.editMode = true;
      this.sectionPopup = true;
    },
    update: function update() {
      this.$inertia.put(this.route("admin.academic.classes.sections.update", [this.academicClass.id, this.section.id]), {
        name: this.section.name,
        room_number: this.section.room_number,
        teacher_id: this.section.teacher
      }, {
        preserveScroll: true,
        preserveState: true
      });
      this.sectionPopup = false;
    },
    destroy: function destroy(section) {
      this.section = section;
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Confirm",
        text: "Are you sure? you went to delete this.",
        accept: this.acceptDelete
      });
    },
    acceptDelete: function acceptDelete() {
      this.$inertia["delete"](this.route("admin.academic.classes.sections.destroy", [this.academicClass.id, this.section.id]), {
        preserveScroll: true,
        preserveState: true
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Academic/Class/Section/Index.vue?vue&type=template&id=60657132&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Academic/Class/Section/Index.vue?vue&type=template&id=60657132& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
              _c(
                "h2",
                { staticClass: "mb-1" },
                [
                  _vm._v("\n        All Sections of class:\n        "),
                  _c(
                    "inertia-link",
                    {
                      attrs: { href: _vm.route("admin.academic.classes.index") }
                    },
                    [_vm._v(_vm._s(_vm.academicClass.name))]
                  )
                ],
                1
              )
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
                  title: "Academic Classes",
                  url: _vm.route("admin.academic.classes.index")
                },
                {
                  title: "Sections",
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
                { attrs: { href: _vm.route("admin.academic.classes.index") } },
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
              _c(
                "vs-dropdown",
                {
                  staticClass: "cursor-pointer mr-1",
                  attrs: { "vs-trigger-click": "" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "p-3 border border-solid rounded-full d-theme-border-grey-light flex items-center justify-between"
                    },
                    [
                      _c("span", { staticClass: "mr-2" }, [
                        _vm._v(_vm._s(_vm.filters.perPage))
                      ]),
                      _vm._v(" "),
                      _c("feather-icon", {
                        attrs: {
                          icon: "ChevronDownIcon",
                          svgClasses: "h-4 w-4"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown-menu",
                    [
                      _c(
                        "vs-dropdown-item",
                        {
                          on: {
                            click: function($event) {
                              _vm.filters.perPage = 10
                            }
                          }
                        },
                        [_vm._v("10")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-item",
                        {
                          on: {
                            click: function($event) {
                              _vm.filters.perPage = 20
                            }
                          }
                        },
                        [_vm._v("20")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-item",
                        {
                          on: {
                            click: function($event) {
                              _vm.filters.perPage = 50
                            }
                          }
                        },
                        [_vm._v("50")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-item",
                        {
                          on: {
                            click: function($event) {
                              _vm.filters.perPage = 75
                            }
                          }
                        },
                        [_vm._v("75")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-item",
                        {
                          on: {
                            click: function($event) {
                              _vm.filters.perPage = 100
                            }
                          }
                        },
                        [_vm._v("100")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "w-full",
                attrs: {
                  icon: "icon-search",
                  "icon-pack": "feather",
                  placeholder: "Search"
                },
                model: {
                  value: _vm.filters.search,
                  callback: function($$v) {
                    _vm.$set(_vm.filters, "search", $$v)
                  },
                  expression: "filters.search"
                }
              })
            ],
            1
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
                "vs-button",
                {
                  attrs: { color: "primary", type: "filled" },
                  on: { click: _vm.create }
                },
                [_vm._v("Add Section")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.sections.data.length
        ? _c(
            "div",
            [
              _c(
                "vs-row",
                { staticClass: "mt-4", attrs: { "vs-type": "flex" } },
                _vm._l(_vm.sections.data, function(section, index) {
                  return _c(
                    "vs-col",
                    {
                      key: index,
                      attrs: {
                        "vs-type": "flex",
                        "vs-justify": "center",
                        "vs-align": "center",
                        "vs-w": "3",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
                    [
                      _c(
                        "vx-card",
                        { staticClass: "mb-3" },
                        [
                          _c(
                            "vs-row",
                            [
                              _c(
                                "vs-col",
                                {
                                  attrs: {
                                    "vs-type": "flex",
                                    "vs-justify": "flex-end"
                                  }
                                },
                                [
                                  _c(
                                    "vs-dropdown",
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "flex items-center",
                                          attrs: { href: "#" }
                                        },
                                        [
                                          _c("feather-icon", {
                                            attrs: {
                                              icon: "MoreHorizontalIcon",
                                              svgClasses: "w-6 h-6 text-grey"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-dropdown-menu",
                                        [
                                          _c(
                                            "vs-dropdown-item",
                                            {
                                              staticClass: "text-primary",
                                              attrs: { divider: "" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.edit(section)
                                                }
                                              }
                                            },
                                            [_vm._v("Edit")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-dropdown-item",
                                            {
                                              staticClass: "text-danger",
                                              on: {
                                                click: function($event) {
                                                  return _vm.destroy(section)
                                                }
                                              }
                                            },
                                            [_vm._v("Delete")]
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
                          ),
                          _vm._v(" "),
                          _c(
                            "inertia-link",
                            {
                              attrs: {
                                href: _vm.route(
                                  "admin.academic.classes.show",
                                  section.id
                                )
                              }
                            },
                            [
                              _c("vs-avatar", {
                                staticClass: "mx-auto mb-6 block",
                                attrs: {
                                  size: "80px",
                                  color: "success",
                                  text: section.name
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "text-center" },
                            [
                              _c(
                                "inertia-link",
                                {
                                  attrs: {
                                    href: _vm.route(
                                      "admin.academic.classes.show",
                                      section.id
                                    )
                                  }
                                },
                                [_c("h4", [_vm._v(_vm._s(section.name))])]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-grey" }, [
                                _vm._v(_vm._s(section.teacher.name))
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-grey" }, [
                                _vm._v(
                                  "Room number: " + _vm._s(section.room_number)
                                )
                              ])
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
            ],
            1
          )
        : _c(
            "vs-row",
            { staticClass: "mt-2", attrs: { "vs-type": "flex" } },
            [
              _c(
                "vs-alert",
                {
                  attrs: { color: "danger", title: "Sorry :(", active: "true" }
                },
                [_vm._v("No section found.")]
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
              attrs: { "vs-type": "flex", "vs-justify": "flex-end" }
            },
            [
              _c("vs-pagination", {
                attrs: {
                  total: _vm.sections.pagination.total_pages,
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
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "holamundo",
          attrs: {
            title: _vm.editMode ? "Edit Section" : "Add New Section",
            active: _vm.sectionPopup
          },
          on: {
            "update:active": function($event) {
              _vm.sectionPopup = $event
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
                  "label-placeholder": "Section Name",
                  danger: !!_vm.$page.errors.name,
                  "danger-text":
                    _vm.$page.errors.name != null
                      ? _vm.$page.errors.name[0]
                      : ""
                },
                model: {
                  value: _vm.section.name,
                  callback: function($$v) {
                    _vm.$set(_vm.section, "name", $$v)
                  },
                  expression: "section.name"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "w-full my-5 no-icon-border",
                attrs: {
                  icon: "icon icon-book",
                  "icon-pack": "feather",
                  "label-placeholder": "Room number",
                  type: "number",
                  danger: !!_vm.$page.errors.room_number,
                  "danger-text":
                    _vm.$page.errors.room_number != null
                      ? _vm.$page.errors.room_number[0]
                      : ""
                },
                model: {
                  value: _vm.section.room_number,
                  callback: function($$v) {
                    _vm.$set(_vm.section, "room_number", $$v)
                  },
                  expression: "section.room_number"
                }
              }),
              _vm._v(" "),
              _c(
                "vs-select",
                {
                  staticClass: "w-full selectExample mb-2",
                  attrs: {
                    placeholder: "Search teacher",
                    label: "Teacher",
                    "label-placeholder": "Teacher",
                    autocomplete: ""
                  },
                  model: {
                    value: _vm.section.teacher,
                    callback: function($$v) {
                      _vm.$set(_vm.section, "teacher", $$v)
                    },
                    expression: "section.teacher"
                  }
                },
                _vm._l(_vm.teachers, function(item, index) {
                  return _c("vs-select-item", {
                    key: index,
                    attrs: { value: item.id, text: item.name }
                  })
                }),
                1
              ),
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

/***/ "./resources/js/Pages/Admin/Academic/Class/Section/Index.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Admin/Academic/Class/Section/Index.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_60657132___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=60657132& */ "./resources/js/Pages/Admin/Academic/Class/Section/Index.vue?vue&type=template&id=60657132&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Academic/Class/Section/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_60657132___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_60657132___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Academic/Class/Section/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Academic/Class/Section/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Academic/Class/Section/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Academic/Class/Section/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Academic/Class/Section/Index.vue?vue&type=template&id=60657132&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Academic/Class/Section/Index.vue?vue&type=template&id=60657132& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_60657132___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=60657132& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Academic/Class/Section/Index.vue?vue&type=template&id=60657132&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_60657132___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_60657132___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);