(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Accountant/Dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Accountant/Dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_clock2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-clock2 */ "./node_modules/vue-clock2/dist/vue-clock.min.js");
/* harmony import */ var vue_clock2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_clock2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var vue_sweet_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-sweet-calendar */ "./node_modules/vue-sweet-calendar/dist/SweetCalendar.umd.min.js");
/* harmony import */ var vue_sweet_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_sweet_calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_sweet_calendar_dist_SweetCalendar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-sweet-calendar/dist/SweetCalendar.css */ "./node_modules/vue-sweet-calendar/dist/SweetCalendar.css");
/* harmony import */ var vue_sweet_calendar_dist_SweetCalendar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_sweet_calendar_dist_SweetCalendar_css__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // Importing Component and style



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    settings: Object,
    posts: Array
  },
  components: {
    Clock: vue_clock2__WEBPACK_IMPORTED_MODULE_0___default.a,
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],
    Calendar: vue_sweet_calendar__WEBPACK_IMPORTED_MODULE_2__["Calendar"]
  },
  data: function data() {
    return {
      post: "",
      getPostImage: "",
      form: {
        content: "",
        image: ""
      },
      profileImage: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/avatar-s-11.1a620230.jpg",
      postImage: "http://wsg.com.gt/v6/uploads/news_images/932895c41d.jpg",
      suggestedPages: [{
        img: "page-09.jpg",
        title: "Rockose",
        type: "Company"
      }, {
        img: "page-08.jpg",
        title: "The Devil's",
        type: "Clothing Store"
      }, {
        img: "page-03.jpg",
        title: "The Magician",
        type: "Public Figure"
      }, {
        img: "page-02.jpg",
        title: "AC/DC",
        type: "Music"
      }, {
        img: "page-07.jpg",
        title: "eat hard",
        type: "restaurant / bar"
      }, {
        img: "page-04.jpg",
        title: "B4B",
        type: "Beauty Store"
      }, {
        img: "page-05.jpg",
        title: "Kylie Jenner",
        type: "Public Figure"
      }, {
        img: "page-01.jpg",
        title: "RDJ",
        type: "Actor"
      }, {
        img: "page-06.jpg",
        title: "Taylor Swift",
        type: "Music"
      }],
      twitterFeeds: [{
        authorAvatar: "avatar-s-12.png",
        authorUsername: "tiana59",
        authorDisplayName: "Tiana Vercetti",
        content: "I love cookie chupa chups sweet tart apple pie chocolate bar. Jelly-o oat cake chupa chups.",
        tags: ["js", "vuejs"],
        time: "Mon Dec 12 2018 07:46:05 GMT+0000 (GMT)"
      }, {
        authorAvatar: "avatar-s-12.png",
        authorUsername: "tiana59",
        authorDisplayName: "Tiana Vercetti",
        content: "Carrot cake cake gummies I love I love tiramisu. Biscuit marzipan cookie lemon drops.",
        tags: ["python"],
        time: "Mon Dec 11 2018 01:05:05 GMT+0000 (GMT)"
      }, {
        authorAvatar: "avatar-s-12.png",
        authorUsername: "tiana59",
        authorDisplayName: "Tiana Vercetti",
        content: "I love cookie chupa chups sweet tart apple pie chocolate bar. Jelly-o oat cake chupa chups .",
        tags: [],
        time: "Mon Dec 10 2018 03:33:05 GMT+0000 (GMT)"
      }, {
        authorAvatar: "avatar-s-12.png",
        authorUsername: "tiana59",
        authorDisplayName: "Tiana Vercetti",
        content: "Muffin candy caramels. I love caramels tiramisu jelly. Pie I love wafer. Chocolate cake lollipop tootsie roll cake.",
        tags: ["django", "vuejs"],
        time: "Mon Dec 9 2018 08:47:05 GMT+0000 (GMT)"
      }],
      userPosts: [{
        author: "Leeanna Alvord",
        time: "Mon Dec 12 2018 07:46:05 GMT+0000 (GMT)",
        isLiked: true,
        text: "I love jujubes wafer pie ice cream tiramisu. Chocolate I love pastry pastry sesame snaps wafer. Pastry topping biscuit lollipop topping I love lemon drops sweet roll bonbon. Brownie donut icing.",
        media: [{
          img: "2.jpg"
        }],
        likes: 145,
        comments: 77,
        usersLiked: [{
          name: "Trina Lynes",
          img: "avatar-s-1.png"
        }, {
          name: "Lilian Nenez",
          img: "avatar-s-2.png"
        }, {
          name: "Alberto Glotzbach",
          img: "avatar-s-3.png"
        }, {
          name: "George Nordick",
          img: "avatar-s-4.png"
        }, {
          name: "Vennie Mostowy",
          img: "avatar-s-5.png"
        }],
        commentbox: "",
        usersCommented: [{
          comment: "orthoplumbate morningtide naphthaline exarteritis",
          author: "Kitty Allanson",
          img: "avatar-s-6.png",
          time: "Mon Dec 10 2018 08:56:05 GMT+0000 (GMT)"
        }, {
          comment: "blockiness pandemy metaxylene speckle coppy",
          author: "Jeanie Bulgrin",
          img: "avatar-s-8.png",
          time: "Mon Dec 10 2018 08:55:00 GMT+0000 (GMT)"
        }]
      }, {
        author: "Leeanna Alvord",
        time: "Mon Dec 11 2018 08:05:05 GMT+0000 (GMT)",
        isLiked: false,
        text: "Candy jelly beans powder brownie biscuit. Jelly marzipan oat cake cake. Cupcake I love wafer cake. Halvah I love powder jelly I love cheesecake cotton candy tiramisu brownie.",
        media: [{
          img: "25.jpg"
        }],
        likes: 276,
        comments: 105,
        usersLiked: [{
          name: "Lai Lewandowski",
          img: "avatar-s-6.png"
        }, {
          name: "Elicia Rieske",
          img: "avatar-s-7.png"
        }, {
          name: "Darcey Nooner",
          img: "avatar-s-8.png"
        }, {
          name: "Julee Rossignol",
          img: "avatar-s-10.png"
        }, {
          name: "Jeffrey Gerondale",
          img: "avatar-s-9.png"
        }],
        commentbox: "",
        usersCommented: [{
          comment: "I love cupcake danish jujubes sweet.",
          author: "Darcey Nooner",
          img: "avatar-s-8.png",
          time: "Mon Dec 11 2018 09:56:05 GMT+0000 (GMT)"
        }, {
          comment: "Wafer I love brownie jelly bonbon tart apple pie",
          author: "Lai Lewandowski",
          img: "avatar-s-6.png",
          time: "Mon Dec 10 2018 09:50:00 GMT+0000 (GMT)"
        }]
      }, {
        author: "Leeanna Alvord",
        time: "Mon Dec 10 2018 12:05:05 GMT+0000 (GMT)",
        isLiked: false,
        text: "Wafer I love brownie jelly bonbon tart. Candy jelly beans powder brownie biscuit. Jelly marzipan oat cake cake.",
        media: [{
          sources: [{
            type: "video/mp4",
            src: "http://vjs.zencdn.net/v/oceans.mp4"
          }],
          poster: "https://goo.gl/xcCsDd"
        }],
        likes: 269,
        comments: 98,
        usersLiked: [{
          name: "Vennie Mostowy",
          img: "avatar-s-5.png"
        }, {
          name: "Elicia Rieske",
          img: "avatar-s-7.png"
        }, {
          name: "Julee Rossignol",
          img: "avatar-s-10.png"
        }, {
          name: "Darcey Nooner",
          img: "avatar-s-8.png"
        }, {
          name: "Elicia Rieske",
          img: "avatar-s-7.png"
        }],
        commentbox: "",
        usersCommented: [{
          comment: "I love cupcake danish jujubes sweet.",
          author: "Darcey Nooner",
          img: "avatar-s-8.png",
          time: "Mon Dec 11 2018 09:56:05 GMT+0000 (GMT)"
        }, {
          comment: "Wafer I love brownie jelly bonbon tart apple pie",
          author: "Lai Lewandowski",
          img: "avatar-s-6.png",
          time: "Mon Dec 10 2018 09:50:00 GMT+0000 (GMT)"
        }]
      }]
    };
  },
  methods: {
    publishPost: function publishPost() {
      this.$inertia.post(this.route("accountant.posts.store"), this.form, {
        preserveScroll: false,
        preserveState: false
      });
    },
    reset: function reset() {
      this.$inertia.visit(this.route("accountant.dashboard"));
    },
    addPostImage: function addPostImage() {
      this.form.image = this.$refs.post_image.getFile().getFileEncodeDataURL();
    },
    removePostImage: function removePostImage() {
      this.form.image = "";
    },
    postDestroy: function postDestroy(post) {
      this.post = post;
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Confirm",
        text: "Are you sure? you want to delete this.",
        accept: this.acceptDelete
      });
    },
    acceptDelete: function acceptDelete() {
      this.$inertia["delete"](this.route("accountant.posts.destroy", this.post.id), {
        preserveScroll: true,
        preserveState: true
      });
    },
    goToday: function goToday() {
      this.$refs.calendar.goToday();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Accountant/Dashboard.vue?vue&type=template&id=31c4f8e8&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Accountant/Dashboard.vue?vue&type=template&id=31c4f8e8& ***!
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
  return _c("layout", { attrs: { title: "Dashboard" } }, [
    _c(
      "div",
      { staticClass: "router-header flex flex-wrap items-center" },
      [
        _c(
          "div",
          {
            staticClass:
              "content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
          },
          [_c("h2", [_vm._v("Dashboard")])]
        ),
        _vm._v(" "),
        _c("vx-breadcrumb", {
          attrs: {
            links: [
              {
                title: "Dashboard",
                active: true
              }
            ]
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { attrs: { id: "profile-page" } }, [
      _c("div", { staticClass: "vx-row" }, [
        _c(
          "div",
          { staticClass: "vx-col w-full lg:w-1/4" },
          [
            _c("vx-card", { staticClass: "mt-base" }, [
              _c("img", {
                staticClass: "responsive rounded-lg",
                attrs: { src: _vm.settings.school_logo, alt: "content-img" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "my-6" }, [
                _c("h5", { staticClass: "text-center mb-2" }, [
                  _vm._v(_vm._s(_vm.settings.school_name))
                ])
              ])
            ]),
            _vm._v(" "),
            _c("vx-card", { staticClass: "mt-base" }, [
              _c("h3", { staticClass: "mb-4" }, [
                _vm._v("Hey," + _vm._s(_vm.$page.auth.user.name) + " !!")
              ]),
              _vm._v(" "),
              _c("h3", [_vm._v("Welcome to your school dashboard.")])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col w-full lg:w-1/2" },
          [
            _c(
              "vx-card",
              { staticClass: "mt-base" },
              [
                _c(
                  "div",
                  { staticClass: "post-header flex justify-between mb-4" },
                  [
                    _c(
                      "div",
                      { staticClass: "flex items-center" },
                      [
                        _c("vs-avatar", {
                          staticClass: "m-0",
                          attrs: {
                            src: _vm.$page.auth.user.avatar_path,
                            text: _vm.$page.auth.user.name,
                            size: "45px"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "ml-4" }, [
                          _c("h6", [_vm._v(_vm._s(_vm.$page.auth.user.name))])
                        ])
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "post-content" }, [
                  _c(
                    "div",
                    [
                      _c("vs-textarea", {
                        staticClass: "w-full mb-2",
                        attrs: {
                          label:
                            "What's on your mind, " + _vm.$page.auth.user.name
                        },
                        model: {
                          value: _vm.form.content,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "content", $$v)
                          },
                          expression: "form.content"
                        }
                      }),
                      _vm._v(" "),
                      !!_vm.$page.errors.content
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.$page.errors.content[0]))
                          ])
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c("file-pond", {
                        ref: "post_image",
                        attrs: {
                          name: "post_image",
                          "label-idle":
                            "Drop your image here or <span class='filepond--label-action'>Browse</span>",
                          "accepted-file-types": "image/jpeg, image/png",
                          files: _vm.getPostImage
                        },
                        on: {
                          addfile: _vm.addPostImage,
                          removefile: _vm.removePostImage
                        }
                      }),
                      _vm._v(" "),
                      !!_vm.$page.errors.post_image
                        ? _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.$page.errors.post_image[0]))
                          ])
                        : _vm._e()
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "template",
                  { slot: "footer" },
                  [
                    _c(
                      "vs-button",
                      {
                        staticClass: "w-full",
                        attrs: { "icon-pack": "feather", icon: "icon-plus" },
                        on: {
                          click: function($event) {
                            return _vm.publishPost()
                          }
                        }
                      },
                      [_vm._v("Publish")]
                    )
                  ],
                  1
                )
              ],
              2
            ),
            _vm._v(" "),
            _vm.posts.length
              ? [
                  _vm._l(_vm.posts, function(post, index) {
                    return _c(
                      "vx-card",
                      { key: index, staticClass: "mt-base" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "post-header flex justify-between mb-4"
                          },
                          [
                            _c("div", { staticClass: "flex items-center" }, [
                              _c(
                                "div",
                                [
                                  _c("vs-avatar", {
                                    staticClass: "m-0",
                                    attrs: {
                                      src: post.user.avatar_path,
                                      text: post.user.name,
                                      size: "45px"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "ml-4" }, [
                                _c("h6", [_vm._v(_vm._s(post.user.name))]),
                                _vm._v(" "),
                                _c("small", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("date")(post.updated_at, true)
                                    ) +
                                      " at " +
                                      _vm._s(_vm._f("time")(post.updated_at))
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "flex" },
                              [
                                post.user.id == _vm.$page.auth.user.id
                                  ? _c(
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
                                                staticClass: "text-danger",
                                                on: {
                                                  click: function($event) {
                                                    return _vm.postDestroy(post)
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
                                  : _vm._e()
                              ],
                              1
                            )
                          ]
                        ),
                        _vm._v(" "),
                        post.content
                          ? _c("div", { staticClass: "post-content" }, [
                              _c("p", [_vm._v(_vm._s(post.content))])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        post.image_path
                          ? _c(
                              "div",
                              { staticClass: "post-media-container mb-6 mt-4" },
                              [
                                _c(
                                  "ul",
                                  { staticClass: "flex post-media-list" },
                                  [
                                    _c(
                                      "li",
                                      { staticClass: "post-media m-1 w-full" },
                                      [
                                        _c("img", {
                                          staticClass: "responsive rounded",
                                          attrs: {
                                            src: post.image_path,
                                            alt: "user-upload"
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c("vx-card", { staticClass: "mt-base" }, [
                    _c("div", { staticClass: "post-content" }, [
                      _c("h3", { staticClass: "text-center" }, [
                        _vm._v("It looks like you reach the end.")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "post-media-container mb-6 mt-4" },
                      [
                        _c("ul", { staticClass: "flex post-media-list" }, [
                          _c("li", { staticClass: "post-media m-1 w-full" }, [
                            _c("img", {
                              staticClass: "responsive rounded",
                              attrs: {
                                src: __webpack_require__(/*! @assets/images/posts_end.svg */ "./resources/assets/images/posts_end.svg"),
                                alt: "user-upload"
                              }
                            })
                          ])
                        ])
                      ]
                    )
                  ])
                ]
              : [
                  _c("vx-card", { staticClass: "mt-base" }, [
                    _c("div", { staticClass: "post-content" }, [
                      _c("h3", { staticClass: "text-center" }, [
                        _vm._v("Sorry! No post found right now.")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "post-media-container mb-6 mt-4" },
                      [
                        _c("ul", { staticClass: "flex post-media-list" }, [
                          _c("li", { staticClass: "post-media m-1 w-full" }, [
                            _c("img", {
                              staticClass: "responsive rounded",
                              attrs: {
                                src: __webpack_require__(/*! @assets/images/posts_end.svg */ "./resources/assets/images/posts_end.svg"),
                                alt: "user-upload"
                              }
                            })
                          ])
                        ])
                      ]
                    )
                  ])
                ]
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col w-full lg:w-1/4" },
          [
            _c(
              "vx-card",
              { staticClass: "mt-base" },
              [_c("clock", { attrs: { size: "200px", color: "#4AB7BD" } })],
              1
            ),
            _vm._v(" "),
            _c(
              "vx-card",
              { staticClass: "mt-base" },
              [_c("calendar", { ref: "calendar" })],
              1
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/posts_end.svg":
/*!***********************************************!*\
  !*** ./resources/assets/images/posts_end.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/posts_end.svg?8c3d2a79d2974762d90310ec87bec6e6";

/***/ }),

/***/ "./resources/js/Pages/Accountant/Dashboard.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Accountant/Dashboard.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_31c4f8e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=31c4f8e8& */ "./resources/js/Pages/Accountant/Dashboard.vue?vue&type=template&id=31c4f8e8&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Accountant/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_31c4f8e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_31c4f8e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Accountant/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Accountant/Dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Accountant/Dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Accountant/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Accountant/Dashboard.vue?vue&type=template&id=31c4f8e8&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Accountant/Dashboard.vue?vue&type=template&id=31c4f8e8& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_31c4f8e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=31c4f8e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Accountant/Dashboard.vue?vue&type=template&id=31c4f8e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_31c4f8e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_31c4f8e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);