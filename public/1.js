webpackJsonp([1],{

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(91)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(93)
/* template */
var __vue_template__ = __webpack_require__(94)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2e2f5749"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\page\\judge\\JudgeTask.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e2f5749", Component.options)
  } else {
    hotAPI.reload("data-v-2e2f5749", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("c3a4426a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2e2f5749\",\"scoped\":true,\"hasInlineConfig\":true}!./getTasks.css", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2e2f5749\",\"scoped\":true,\"hasInlineConfig\":true}!./getTasks.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\np[data-v-2e2f5749] {\r\n  margin: 10px 0;\n}\n.fl[data-v-2e2f5749] {\r\n  float: left;\n}\n.fr[data-v-2e2f5749] {\r\n  float: right;\n}\n.m-main[data-v-2e2f5749] {\r\n  max-width: 1200px;\r\n  min-height: 739px;\r\n  padding-top: 20px;\r\n  margin: 0 auto;\r\n  background: #ffffff;\r\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n  -moz-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\n}\n.m-main .m-wrapper[data-v-2e2f5749] {\r\n    padding: 0 33px;\r\n    border-bottom: 1px solid #eee;\n}\n.m-main .m-cateory[data-v-2e2f5749], .m-main .m-subject[data-v-2e2f5749] {\r\n    font-size: 0;\n}\n.m-main .m-cateory .title-box .return-task[data-v-2e2f5749], .m-main .m-subject .title-box .return-task[data-v-2e2f5749] {\r\n      display: inline-block;\r\n      right: 20px;\r\n      top: 15px;\r\n      font-size: 16px;\r\n      color: #5d9cec;\n}\n.m-main .m-cateory .title-box[data-v-2e2f5749]:after, .m-main .m-subject .title-box[data-v-2e2f5749]:after {\r\n      display: block;\r\n      content: ' ';\r\n      clear: both;\r\n      overflow: hidden;\r\n      visibility: hidden;\n}\n.m-main .m-cateory .m-title[data-v-2e2f5749], .m-main .m-subject .m-title[data-v-2e2f5749] {\r\n      margin-bottom: 16px;\r\n      font-size: 16px;\r\n      color: #5d9cec;\n}\n.m-main .m-cateory .label-list .label-list[data-v-2e2f5749], .m-main .m-subject .label-list .label-list[data-v-2e2f5749] {\r\n      margin-right: -18px;\n}\n.m-main .m-cateory .label-list .box[data-v-2e2f5749], .m-main .m-subject .label-list .box[data-v-2e2f5749] {\r\n      max-width: 1000px;\n}\n.m-main .m-cateory .label-list .label[data-v-2e2f5749], .m-main .m-subject .label-list .label[data-v-2e2f5749] {\r\n      display: inline-block;\r\n      -webkit-box-sizing: border-box;\r\n              box-sizing: border-box;\r\n      width: 161px;\r\n      height: 32px;\r\n      color:#5e5d5d;\r\n      line-height: 32px;\r\n      font-weight: normal;\r\n      padding:0;\r\n      margin: 0 18px 14px 0;\r\n      border: 1px solid transparent;\r\n      font-size: 16px;\r\n      text-align: center;\r\n      cursor: pointer;\n}\n.m-main .m-cateory .label-list .label.checked[data-v-2e2f5749], .m-main .m-subject .label-list .label.checked[data-v-2e2f5749] {\r\n      display: inline-block;\r\n      -webkit-box-sizing: border-box;\r\n              box-sizing: border-box;\r\n      width: 161px;\r\n      height: 32px;\r\n      line-height: 32px;\r\n      text-align: center;\r\n      border-radius: 5px;\r\n      border: 1px solid #5d9cec;\r\n      color: #5d9cec;\n}\n.m-main .btn-get-task[data-v-2e2f5749], .m-main .inactive[data-v-2e2f5749] {\r\n    display: block;\r\n    width: 141px;\r\n    height: 43px;\r\n    margin: 119px auto;\r\n    border: 0;\r\n    border-radius: 10px;\r\n    font-size: 18px;\r\n    color: #fff;\r\n    outline: none;\n}\n.m-main .btn-get-task[data-v-2e2f5749] {\r\n    background-color: #5D9CEC;\r\n    cursor: pointer;\n}\n.m-main .btn-get-task[data-v-2e2f5749]:hover {\r\n    box-shadow: 0 0 8px rgba(93, 156, 236, 0.56);\r\n    -webkit-box-shadow: 0 0 8px rgba(93, 156, 236, 0.56);\r\n    -moz-box-shadow: 0 0 8px rgba(93, 156, 236, 0.56);\n}\n.m-main .inactive[data-v-2e2f5749] {\r\n    background-color: #959595;\r\n    cursor: auto;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(9);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    data: function data() {
        return {
            loading: false,
            successRefundShow: false,
            refundTaskIsShow: false,
            taskIsShow: false,
            isDisable: false,
            successIsShow: false,
            errorIsShow: false,
            subjectIndex: -1,
            questionIndex: -1,
            subjectId: 0,
            subjectName: '',
            questionCount: 0,
            questionShowCount: 0,
            taskQuestionCount: 0,
            refundSubjectIndex: 0,
            taskCheck: [],
            questionList: [{ id: 100, name: '100道' }, { id: 300, name: '300道' }, { id: 500, name: '500道' }]
        };
    },

    methods: {
        //显示退回任务弹出窗
        showRefundTask: function showRefundTask() {
            var that = this;
            that.subjectId = that.subjectList[that.refundSubjectIndex].subjectId; //显示页面给选中科目赋值
            that.subjectName = that.subjectList[that.refundSubjectIndex].subjectName; //显示页面给选中科目赋值
            that.getRefundCount(); //获取可退回任务数
        },

        //获取可退回任务数
        getRefundCount: function getRefundCount() {
            var that = this;
            //获取退回
            axios.get("label/task/getJudgeQuesReturnCount", {
                params: {
                    subjectId: that.subjectId,
                    userKey: that.userKey
                }
            }).then(function (res) {
                that.taskQuestionCount = res.data.data.questionCount;
                that.refundTaskIsShow = true;
            }).catch(function (error) {
                that.$message.error(error.message);
            });
        },

        //关闭可退回任务弹出窗
        closeRefundTask: function closeRefundTask() {
            this.taskQuestionCount = 0;
            this.refundTaskIsShow = false;
            this.taskCheck = [];
        },

        //选中可退回任务
        refundSubjectCheck: function refundSubjectCheck(index) {
            var that = this;
            that.refundSubjectIndex = index;
            that.subjectId = that.subjectList[index].subjectId; //选中学科id
            that.subjectName = that.subjectList[index].subjectName; //选中学科名
            that.getRefundCount(); //获取可退回任务数
        },

        //选中单题
        questionCheck: function questionCheck(index) {
            var that = this;
            if (that.questionIndex == index) {
                that.questionIndex = -1;
                that.questionCount = 0;
            } else {
                that.questionIndex = index;
                that.questionCount = that.questionList[index].id;
            }
        },

        //选中科目
        subjectCheck: function subjectCheck(index) {
            var that = this;
            //判断是否选中
            if (that.subjectIndex == index) {
                that.subjectIndex = -1;
                that.subjectId = 0;
            } else {
                that.subjectIndex = index;
                that.subjectId = that.subjectList[index].subjectId;
            }
        },

        //关闭领取任务弹出窗
        closeTask: function closeTask() {
            var that = this;
            that.taskIsShow = false;
            that.errorIsShow = false;
        },

        //领取任务弹出窗
        addTask: function addTask() {
            var that = this,
                questionNums = void 0;
            that.isDisable = true;
            //发送请求
            axios.post("label/task/addJudgeQuestion", this.$qs.stringify({
                subjectId: that.subjectId,
                questionCount: that.questionCount,
                userKey: that.userKey
            })).then(function (res) {
                that.isDisable = false;
                if (res.data.status == 0) {
                    that.$message.error(res.data.errorMsg);return false;
                } else {
                    that.taskIsShow = false;
                    that.successIsShow = true;
                    setTimeout(function () {
                        that.successIsShow = false;
                    }, 3000);
                }
            }).catch(function (error) {
                that.$message.error(error.message);
            });
        },

        //显示领取任务弹出窗
        showTask: function showTask() {
            var that = this;
            that.loading = true;
            //获取剩余套卷数
            axios.get("/label/task/getJudgeQuestionCount", {
                params: {
                    subjectId: that.subjectId,
                    userKey: that.userKey
                }
            }).then(function (res) {
                that.loading = false;
                if (res.data.status == 0) {
                    that.errorIsShow = true;
                } else {
                    if (res.data.data.questionCount <= 0) {
                        that.questionCount = 0;
                        that.errorIsShow = true;
                    } else {
                        that.questionShowCount = res.data.data.questionCount;
                        that.taskIsShow = true;
                    }
                }
            }).catch(function (error) {
                that.$message.error(error.message);
            });
        },

        //删除已领取的任务
        removeTask: function removeTask() {
            var that = this;
            that.isDisable = true;
            if (Object.keys(that.taskCheck).length <= 0) {
                that.$message.error('请选择要退回的任务类型');return false;
            }
            axios.post("label/task/removeJudgeQuestion", this.$qs.stringify({
                userKey: that.userKey,
                subjectId: that.subjectId
            })).then(function (res) {
                that.isDisable = false;
                if (res.data.status == 0) {
                    that.$message.error(res.data.errorMsg);return false;
                } else {
                    that.refundTaskIsShow = false;
                    that.successRefundShow = true;
                    setTimeout(function () {
                        that.successRefundShow = false;
                        that.taskCheck = [];
                    }, 1000);
                }
            }).catch(function (error) {
                that.$message.error(error.message);
            });
        }
    },
    computed: _extends({}, __WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapGetters */]({
        userKey: 'getUserKey',
        subjectList: 'getSubject'
    }))
});

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "m-main" }, [
      _c("div", { staticClass: "m-wrapper" }, [
        _c("div", { staticClass: "m-subject" }, [
          _c("div", { staticClass: "title-box" }, [
            _c("span", { staticClass: "m-title fl" }, [_vm._v("学科")]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "return-task fr",
                attrs: { href: "javascript:;" },
                on: {
                  click: function($event) {
                    _vm.showRefundTask()
                  }
                }
              },
              [_vm._v("退回任务")]
            )
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "label-list" }, [
            _c(
              "li",
              _vm._l(_vm.subjectList, function(subject, index) {
                return _c(
                  "label",
                  {
                    staticClass: "label",
                    class: { checked: index == _vm.subjectIndex },
                    on: {
                      click: function($event) {
                        _vm.subjectCheck(index)
                      }
                    }
                  },
                  [_vm._v(_vm._s(subject.subjectName))]
                )
              })
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "m-wrapper" }, [
        _c("div", { staticClass: "m-cateory" }, [
          _c("p", { staticClass: "m-title" }, [_vm._v("单题")]),
          _vm._v(" "),
          _c("ul", { staticClass: "label-list" }, [
            _c(
              "li",
              _vm._l(_vm.questionList, function(question, index) {
                return _c(
                  "label",
                  {
                    staticClass: "label",
                    class: { checked: index == _vm.questionIndex },
                    on: {
                      click: function($event) {
                        _vm.questionCheck(index)
                      }
                    }
                  },
                  [_vm._v(_vm._s(question.name))]
                )
              })
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.subjectIndex >= 0 && _vm.questionIndex >= 0
        ? _c(
            "button",
            {
              staticClass: "btn-get-task",
              on: {
                click: function($event) {
                  _vm.showTask()
                }
              }
            },
            [_vm._v("领取任务")]
          )
        : _c("button", { staticClass: "inactive" }, [_vm._v("领取任务")])
    ]),
    _vm._v(" "),
    _vm.taskIsShow
      ? _c("div", { staticClass: "m-layer" }, [
          _c("div", { staticClass: "mask-ok" }, [
            _c("div", { staticClass: "mask-title" }, [
              _vm._v("领取任务"),
              _c(
                "span",
                { staticClass: "icon-close", on: { click: _vm.closeTask } },
                [_vm._v("×")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mask-con" }, [
              _c("p", { staticClass: "mask-q" }, [
                _vm._v("待判定试题："),
                _c("span", [_vm._v(_vm._s(_vm.questionShowCount))]),
                _vm._v("道，确认领取吗？")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "btn-group" }, [
                _c(
                  "button",
                  { staticClass: "btn cancel", on: { click: _vm.closeTask } },
                  [_vm._v("取消")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn confirm receive-href",
                    attrs: { disabled: _vm.isDisable },
                    on: { click: _vm.addTask }
                  },
                  [_vm._v("确认")]
                )
              ])
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.errorIsShow
      ? _c("div", { staticClass: "m-layer" }, [
          _c("div", { staticClass: "mask-ok" }, [
            _c("div", { staticClass: "mask-title" }, [
              _vm._v("领取任务"),
              _c(
                "span",
                { staticClass: "icon-close", on: { click: _vm.closeTask } },
                [_vm._v("×")]
              )
            ]),
            _vm._v(" "),
            _vm._m(0)
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.successIsShow
      ? _c("div", { staticClass: "status-success" }, [_vm._v("领取成功")])
      : _vm._e(),
    _vm._v(" "),
    _vm.successRefundShow
      ? _c("div", { staticClass: "status-success" }, [_vm._v("操作成功")])
      : _vm._e(),
    _vm._v(" "),
    _vm.loading ? _c("div", { staticClass: "loading-spinner" }) : _vm._e(),
    _vm._v(" "),
    _vm.refundTaskIsShow
      ? _c("div", { staticClass: "m-layer" }, [
          _c("div", { staticClass: "mask-return" }, [
            _c("div", { staticClass: "makk-return-title" }, [
              _vm._v("退回任务\n                "),
              _c(
                "span",
                {
                  staticClass: "icon-close",
                  on: {
                    click: function($event) {
                      _vm.closeRefundTask()
                    }
                  }
                },
                [_vm._v("×")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mask-return-subject-wrapper" }, [
              _c("div", { staticClass: "mask-return-subject" }, [
                _c(
                  "p",
                  { staticClass: "grades-select" },
                  _vm._l(_vm.subjectList, function(subject, index) {
                    return _c(
                      "span",
                      {
                        staticClass: "radio-inline__label",
                        class: { active: index == _vm.refundSubjectIndex },
                        on: {
                          click: function($event) {
                            _vm.refundSubjectCheck(index)
                          }
                        }
                      },
                      [
                        _c("input", {
                          staticClass: "radio-inline__input",
                          attrs: { type: "radio", name: "accessible" },
                          domProps: { value: subject.subjectId }
                        }),
                        _vm._v(" "),
                        _c("label", [_vm._v(_vm._s(subject.subjectName))])
                      ]
                    )
                  })
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mask-return-con" }, [
              _c("div", { attrs: { id: "check_css3" } }, [
                _c("div", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.taskCheck,
                        expression: "taskCheck"
                      }
                    ],
                    staticClass: "magic-checkbox",
                    attrs: {
                      id: "check1",
                      type: "checkbox",
                      value: "question"
                    },
                    domProps: {
                      checked: Array.isArray(_vm.taskCheck)
                        ? _vm._i(_vm.taskCheck, "question") > -1
                        : _vm.taskCheck
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.taskCheck,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = "question",
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.taskCheck = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.taskCheck = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.taskCheck = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    { staticClass: "mask-return-s", attrs: { for: "check1" } },
                    [_vm._v(_vm._s(_vm.subjectName))]
                  ),
                  _vm._v("剩余\n                        "),
                  _c("label", { staticClass: "mask-return-s-count" }, [
                    _vm._v(_vm._s(_vm.taskQuestionCount))
                  ]),
                  _vm._v(" 道\n                    ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "s-padding" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mask-return-btn-group" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn mask-return-cancel",
                    on: {
                      click: function($event) {
                        _vm.closeRefundTask()
                      }
                    }
                  },
                  [_vm._v("取消")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn mask-return-confirm",
                    attrs: { disabled: _vm.isDisable },
                    on: {
                      click: function($event) {
                        _vm.removeTask()
                      }
                    }
                  },
                  [_vm._v("确认")]
                )
              ])
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mask-con" }, [
      _c("p", { staticClass: "mask-q" }, [
        _vm._v("剩余待判定试题有0道，无法领取!")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2e2f5749", module.exports)
  }
}

/***/ })

});