webpackJsonp([10],{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(143)
/* template */
var __vue_template__ = __webpack_require__(144)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources\\assets\\js\\components\\Breadcrumb.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8167bd8c", Component.options)
  } else {
    hotAPI.reload("data-v-8167bd8c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("p", { staticClass: "location" })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8167bd8c", module.exports)
  }
}

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(161);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("76628828", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74a57dc6\",\"scoped\":true,\"hasInlineConfig\":true}!./getTasks.css", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74a57dc6\",\"scoped\":true,\"hasInlineConfig\":true}!./getTasks.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\np[data-v-74a57dc6] {\n  margin: 10px 0;\n}\n.fl[data-v-74a57dc6] {\n  float: left;\n}\n.fr[data-v-74a57dc6] {\n  float: right;\n}\n.m-main[data-v-74a57dc6] {\n  max-width: 1200px;\n  min-height: 739px;\n  padding-top: 20px;\n  margin: 0 auto;\n  background: #ffffff;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\n  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\n  -moz-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\n}\n.m-main .m-wrapper[data-v-74a57dc6] {\n    padding: 0 33px;\n    border-bottom: 1px solid #eee;\n}\n.m-main .m-cateory[data-v-74a57dc6], .m-main .m-subject[data-v-74a57dc6] {\n    font-size: 0;\n}\n.m-main .m-cateory .title-box .return-task[data-v-74a57dc6], .m-main .m-subject .title-box .return-task[data-v-74a57dc6] {\n      display: inline-block;\n      right: 20px;\n      top: 15px;\n      font-size: 16px;\n      color: #5d9cec;\n}\n.m-main .m-cateory .title-box[data-v-74a57dc6]:after, .m-main .m-subject .title-box[data-v-74a57dc6]:after {\n      display: block;\n      content: ' ';\n      clear: both;\n      overflow: hidden;\n      visibility: hidden;\n}\n.m-main .m-cateory .m-title[data-v-74a57dc6], .m-main .m-subject .m-title[data-v-74a57dc6] {\n      margin-bottom: 16px;\n      font-size: 16px;\n      color: #5d9cec;\n}\n.m-main .m-cateory .label-list .label-list[data-v-74a57dc6], .m-main .m-subject .label-list .label-list[data-v-74a57dc6] {\n      margin-right: -18px;\n}\n.m-main .m-cateory .label-list .box[data-v-74a57dc6], .m-main .m-subject .label-list .box[data-v-74a57dc6] {\n      max-width: 1000px;\n}\n.m-main .m-cateory .label-list .label[data-v-74a57dc6], .m-main .m-subject .label-list .label[data-v-74a57dc6] {\n      display: inline-block;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      width: 161px;\n      height: 32px;\n      color:#5e5d5d;\n      line-height: 32px;\n      font-weight: normal;\n      padding:0;\n      margin: 0 18px 14px 0;\n      border: 1px solid transparent;\n      font-size: 16px;\n      text-align: center;\n      cursor: pointer;\n}\n.m-main .m-cateory .label-list .label.checked[data-v-74a57dc6], .m-main .m-subject .label-list .label.checked[data-v-74a57dc6] {\n      display: inline-block;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      width: 161px;\n      height: 32px;\n      line-height: 32px;\n      text-align: center;\n      border-radius: 5px;\n      border: 1px solid #5d9cec;\n      color: #5d9cec;\n}\n.m-main .btn-get-task[data-v-74a57dc6], .m-main .inactive[data-v-74a57dc6] {\n    display: block;\n    width: 141px;\n    height: 43px;\n    margin: 119px auto;\n    border: 0;\n    border-radius: 10px;\n    font-size: 18px;\n    color: #fff;\n    outline: none;\n}\n.m-main .btn-get-task[data-v-74a57dc6] {\n    background-color: #5D9CEC;\n    cursor: pointer;\n}\n.m-main .btn-get-task[data-v-74a57dc6]:hover {\n    box-shadow: 0 0 8px rgba(93, 156, 236, 0.56);\n    -webkit-box-shadow: 0 0 8px rgba(93, 156, 236, 0.56);\n    -moz-box-shadow: 0 0 8px rgba(93, 156, 236, 0.56);\n}\n.m-main .inactive[data-v-74a57dc6] {\n    background-color: #959595;\n    cursor: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Breadcrumb__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Breadcrumb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Breadcrumb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(9);
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
//
//
//
//
//
//
//
//
//
//
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
    components: {
        'v-breadcrumb': __WEBPACK_IMPORTED_MODULE_0__components_Breadcrumb___default.a
    },
    data: function data() {
        return {
            refundTaskIsShow: false,
            successRefundShow: false,
            taskIsShow: false,
            isDisable: false,
            successShow: false,
            errorIsShow: false,
            loading: false,
            taskCheck: [],
            subjectIndex: -1,
            paperIndex: -1,
            questionIndex: -1,
            subjectCheckId: 0,
            subjectCheckName: '',
            paperCount: 0,
            questionCount: 0,
            taskPaperCount: 0,
            taskQuestionCount: 0,
            refundSubjectIndex: 0,
            paperList: [{ id: 10, name: '10套' }, { id: 30, name: '30套' }, { id: 50, name: '50套' }],
            questionList: [{ id: 100, name: '100道' }, { id: 300, name: '300道' }, { id: 500, name: '500道' }]
        };
    },

    methods: {
        //显示退回任务弹出窗
        showRefundTask: function showRefundTask() {
            var that = this;
            that.subjectCheckId = that.subjectList[that.refundSubjectIndex].subjectId; //显示页面给选中科目赋值
            that.subjectCheckName = that.subjectList[that.refundSubjectIndex].subjectName; //显示选中科目名称
            that.getRefundCount(); //获取可退回任务数
        },

        //获取可退回任务数
        getRefundCount: function getRefundCount() {
            var that = this;
            //获取退回
            axios.get("label/task/getReturnCountByUserKey", {
                params: {
                    subjectId: that.subjectCheckId,
                    userKey: that.userKey
                }
            }).then(function (res) {
                that.taskPaperCount = res.data.paperCount;
                that.taskQuestionCount = res.data.questionCount;
                that.refundTaskIsShow = true;
            }).catch(function (error) {
                that.$message.error(error.message);
            });
        },

        //关闭可退回任务弹出窗
        closeRefundTask: function closeRefundTask() {
            var that = this;
            that.taskQuestionCount = 0;
            that.taskPaperCount = 0;
            that.refundTaskIsShow = false;
        },

        //领取任务弹出窗
        addTask: function addTask() {
            var that = this;
            that.isDisable = true;
            //发送请求
            axios.post("label/task/addTask", this.$qs.stringify({
                subjectId: that.subjectCheckId,
                subjectName: that.subjectCheckName,
                paperCount: that.paperCount,
                questionCount: that.questionCount,
                userKey: that.userKey
            })).then(function (res) {
                that.isDisable = false;
                if (res.data.status == 0) {
                    that.$message.error(res.data.errorMsg);return false;
                } else {
                    that.taskIsShow = false;
                    that.successShow = true;
                    setTimeout(function () {
                        that.successShow = false;
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
            axios.get("label/task/getPaperQuestionCount", {
                params: {
                    subjectId: that.subjectCheckId,
                    paperCount: that.paperCount,
                    questionCount: that.questionCount,
                    userKey: that.userKey
                }
            }).then(function (res) {
                that.loading = false;
                if (res.data.status == 0) {
                    that.errorIsShow = true;
                } else {
                    //判断套卷数和单题数是否不足
                    if (res.data.data.paperCount <= 0 && res.data.data.questionCount <= 0) {
                        that.taskIsShow = false;
                        that.errorIsShow = true;
                    } else {
                        that.paperCount = res.data.data.paperCount;
                        that.questionCount = res.data.data.questionCount;
                        that.taskIsShow = true;
                    }
                }
            }).catch(function (error) {
                that.loading = false;
                that.$message.error(error.message);
            });
        },

        //关闭领取任务弹出窗
        closeTask: function closeTask() {
            var that = this;
            that.taskIsShow = false;
            that.errorIsShow = false;
        },

        //选中科目
        subjectCheck: function subjectCheck(index) {
            var that = this;
            //判断是否选中
            if (that.subjectIndex == index) {
                that.subjectIndex = -1;
                that.subjectCheckId = 0;
                that.subjectCheckName = '';
            } else {
                that.subjectIndex = index;
                that.subjectCheckId = that.subjectList[index].subjectId;
                that.subjectCheckName = that.subjectList[index].subjectName;
            }
        },

        //选中套卷
        paperCheck: function paperCheck(index) {
            var that = this;
            if (that.paperIndex == index) {
                that.paperIndex = -1;
                that.paperCount = 0;
            } else {
                that.paperIndex = index;
                that.paperCount = that.paperList[index].id;
            }
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

        //选中可退回任务
        refundSubjectCheck: function refundSubjectCheck(index) {
            var that = this;
            that.refundSubjectIndex = index;
            that.subjectCheckId = that.subjectList[index].subjectId; //选中学科id
            that.subjectCheckName = that.subjectList[index].subjectName; //选中学科名
            that.getRefundCount(); //获取可退回任务数
        },

        //删除已领取的任务
        removeTask: function removeTask() {
            var that = this;
            that.isDisable = true;
            //判断是否选中
            if (Object.keys(that.taskCheck).length <= 0) {
                alert('请选择要退回的任务类型');return false;
            }
            axios.post("label/task/removeTask", this.$qs.stringify({
                userKey: that.userKey,
                subjectId: that.subjectCheckId,
                taskCheck: that.taskCheck
            })).then(function (res) {
                that.isDisable = false;
                if (res.data.status == 0) {
                    that.$message.error(res.data.errorMsg);return false;
                } else {
                    that.refundTaskIsShow = false;
                    that.taskCheck = [];
                    that.successRefundShow = true;
                    setTimeout(function () {
                        that.successRefundShow = false;
                    }, 1000);
                }
            }).catch(function (error) {
                that.$message.error(error.message);
            });
        }
    },
    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
        userKey: 'getUserKey',
        subjectList: 'getSubject'
    }))
});

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-breadcrumb"),
      _vm._v(" "),
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
            _c("p", { staticClass: "m-title" }, [_vm._v("套卷")]),
            _vm._v(" "),
            _c("ul", { staticClass: "label-list" }, [
              _c(
                "li",
                _vm._l(_vm.paperList, function(paper, index) {
                  return _c(
                    "label",
                    {
                      staticClass: "label",
                      class: { checked: index == _vm.paperIndex },
                      on: {
                        click: function($event) {
                          _vm.paperCheck(index)
                        }
                      }
                    },
                    [_vm._v(_vm._s(paper.name))]
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
        _vm.subjectIndex >= 0 && (_vm.paperIndex >= 0 || _vm.questionIndex >= 0)
          ? _c(
              "button",
              { staticClass: "btn-get-task", on: { click: _vm.showTask } },
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
                  _vm._v("套卷："),
                  _c("span", [_vm._v(_vm._s(_vm.paperCount))]),
                  _vm._v(" 套，单题："),
                  _c("span", [_vm._v(_vm._s(_vm.questionCount))]),
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
      _vm.successShow
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
                _c("div", [
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
                        type: "checkbox",
                        id: "check1",
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
                      {
                        staticClass: "mask-return-s",
                        attrs: { for: "check1" }
                      },
                      [_vm._v(_vm._s(_vm.subjectCheckName))]
                    ),
                    _vm._v("单题：剩余\n                        "),
                    _c("label", { staticClass: "mask-return-s-count" }, [
                      _vm._v(_vm._s(_vm.taskQuestionCount))
                    ]),
                    _vm._v(" 道\n                    ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "s-padding" }),
                  _vm._v(" "),
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
                      attrs: { type: "checkbox", id: "check2", value: "paper" },
                      domProps: {
                        checked: Array.isArray(_vm.taskCheck)
                          ? _vm._i(_vm.taskCheck, "paper") > -1
                          : _vm.taskCheck
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.taskCheck,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = "paper",
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
                      {
                        staticClass: "mask-return-s",
                        attrs: { for: "check2" }
                      },
                      [_vm._v(_vm._s(_vm.subjectCheckName))]
                    ),
                    _vm._v("套卷：剩余\n                        "),
                    _c("label", { staticClass: "mask-return-s-count" }, [
                      _vm._v(_vm._s(_vm.taskPaperCount))
                    ]),
                    _vm._v(" 套\n                    ")
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
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mask-con" }, [
      _c("p", { staticClass: "mask-q" }, [_vm._v("领取任务，任务不足")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-74a57dc6", module.exports)
  }
}

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(160)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(162)
/* template */
var __vue_template__ = __webpack_require__(163)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-74a57dc6"
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
Component.options.__file = "resources\\assets\\js\\page\\teacher\\Task.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74a57dc6", Component.options)
  } else {
    hotAPI.reload("data-v-74a57dc6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});