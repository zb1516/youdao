webpackJsonp([2],{

/***/ 110:
/***/ (function(module, exports) {

module.exports = "/images/vendor/vue-ztree/src/ztree/zTreeStandard.png?2155096c99a3cc089a4262647e45dd02";

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

module.exports = "/images/vendor/vue-ztree/src/ztree/zTreeStandard.gif?83765e815357fafe0d62eee580928439";

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

module.exports = "/images/no-task-icon.png?2a161c5fa5dddf76607ab374235c44ad";

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(121)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(125)
/* template */
var __vue_template__ = __webpack_require__(134)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources\\assets\\js\\components\\QuestionOptions.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-711dc49e", Component.options)
  } else {
    hotAPI.reload("data-v-711dc49e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(122);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("b63a35be", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-711dc49e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./QuestionOptions.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-711dc49e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./QuestionOptions.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(19);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.m-main .opration-wrapper .paper-topic  .ztree{ overflow: auto;height: 493px;\n}\n.m-main .opration-wrapper .paper-topic  .ztree * {font-size:14px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li {\n    line-height: 30px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li a {\n    width: 200px;\n    height: 30px;\n    padding-top: 0px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li a:hover {\n    color:#333;\n    text-decoration: none;\n    background-color: #E7E7E7;\n}\n.m-main .opration-wrapper .paper-topic .ztree li a span.button.switch {\n    visibility: hidden;\n}\n.m-main .opration-wrapper .paper-topic .ztree.showIcon li a span.button.switch {\n    visibility: visible;\n}\n.m-main .opration-wrapper .paper-topic .ztree li a.curSelectedNode {\n    color:#333;\n    background-color: #D4D4D4;\n    border: 0;\n    height: 30px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span {\n    line-height: 30px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button {\n    margin-top: -7px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button.switch {\n    width: 16px;\n    height: 16px;\n}\n.m-main  .ztree > li > a .node_name {\n    font-size: 14px;\n    font-weight: bold;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button {\n    background-repeat:inherit;\n    background-image: url(" + escape(__webpack_require__(123)) + ");\n    *background-image: url(" + escape(__webpack_require__(124)) + ");\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button.switch.level0 {\n    width: 20px;\n    height: 20px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button.switch.level1 {\n    width: 20px;\n    height: 20px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button.noline_open {\n    background-position: 0 0;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button.noline_close {\n    background-position: -18px 0;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button.noline_open.level0 {\n    background-position: 0 -18px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button.noline_close.level0 {\n    background-position: -18px -18px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button {background-position:-92px -18px\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button.center_open{background-position:-74px -18px\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button.center_close{background-position:-92px -18px\n}\n.m-main .ztree li li span.button.bottom_docu {background-position: -18px -36px!important;\n}\n.m-main .ztree li li a .node_name {font-size: 13px!important;\n}\n.i-btn {\n    display: inline-block;\n    width: 80px;\n    height: 32px;\n    line-height: 30px;\n    color: #FFFFFF;\n    font-size: 14px;\n    text-align: center;\n    background: #6699ff;\n    outline: 0;\n    border: 0;\n    cursor: pointer;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n.i-input {\n    display: inline-block;\n    width: 280px;\n    height: 32px;\n    line-height: 1.5;\n    padding: 4px 7px;\n    font-size: 12px;\n    border: 1px solid #dddee1;\n    border-radius: 4px;\n    color: #495060;\n    background-color: #fff;\n    background-image: none;\n    position: relative;\n    cursor: text;\n    -webkit-transition: border .2s ease-in-out,background .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;\n    transition: border .2s ease-in-out,background .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;\n    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;\n    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n", ""]);

// exports


/***/ }),

/***/ 123:
/***/ (function(module, exports) {

module.exports = "/images/left_menuForOutLook.png?a79070500ed4e0bacda7a3ca26487907";

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

module.exports = "/images/left_menuForOutLook.gif?c85a8da7ce70a2e89b1342ed388a6426";

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_css_questionOptions_css__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_css_questionOptions_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_css_questionOptions_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_ztree_src_components_vue_ztree__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_ztree_src_components_vue_ztree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_ztree_src_components_vue_ztree__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        VueZtree: __WEBPACK_IMPORTED_MODULE_1_vue_ztree_src_components_vue_ztree___default.a
    },
    props: ['subjectId', 'userKey', 'questionNoFinishCount', 'questionFinishCount'],
    data: function data() {
        return {
            questionTypeList: [],
            questionTypeIndex: 0,
            questionTypeId: 0,
            questionTypeName: '',
            gradeList: [],
            gradeIndex: 0,
            gradeName: '',
            gradeId: 0,
            knowledgeDisabled: false,
            difficultyId: 1,
            difficultyName: '',
            difficultyIndex: 0,
            difficultyList: [{ id: 1, title: '易' }, { id: 2, title: '中' }, { id: 3, title: '难' }],
            typeList: [{ id: 1, title: '同步' }, { id: 2, title: '升学' }],
            typeId: 1,
            typeIndex: 0,
            type: '同步',
            questionCategoryList: [],
            questionCategoryIndex: 0,
            questionCategoryId: 0,
            questionCategoryName: '',
            ztreeDataSource: [],
            dataList: [],
            treeDeepCopy: [],
            parentNodeModel: [], //当前点击节点父亲对象
            nodeModel: null, // 当前点击节点对象,
            knowledgeKeyword: ''
        };
    },

    methods: {
        findById: function findById(data, parentId) {
            var vm = this;

            for (var i = 0; i < data.length; i++) {
                if (parentId == data[i].id) {
                    vm.dataList.push(data[i]);
                    vm.findById(vm.ztreeDataSource, data[i].parentId);
                    return data[i];
                }

                if (data[i].hasOwnProperty('children')) {
                    vm.findById(data[i].nodes, parentId);
                }
            }
        },
        // 点击节点
        nodeClick: function nodeClick(m, parent, trees) {
            this.treeDeepCopy = trees;
            this.nodeModel = m; // 当前点击节点对象
            this.parentNodeModel = parent; //当前点击节点父亲对象
            // 导航菜单
            this.dataList = [];
            this.findById(this.ztreeDataSource, m.parentId);
            this.dataList = this.dataList.reverse();
            this.dataList.push(m);
        },
        knowledgeSearch: function knowledgeSearch() {
            var that = this;
            if (that.knowledgeKeyword == '') {
                that.$message.error('请输入搜索知识点');return false;
            }
            that.knowledgeDisabled = true;
            axios.get("/label/knowledge/getKnowledgeSearch", {
                params: {
                    userKey: that.userKey,
                    subjectId: that.subjectId,
                    keyword: that.knowledgeKeyword
                }
            }).then(function (res) {
                that.knowledgeDisabled = false;
                if (res.data.status == 0) {
                    that.$message.error(res.data.errorMsg);return false;
                } else {
                    that.ztreeDataSource = res.data.data;
                    that.$refs.ztreeType.initTreeData();
                }
            });
        },
        keySpace: function keySpace() {
            this.$emit('unBoundSpace');
        },
        keyBindSapce: function keyBindSapce() {
            this.$emit('boundSpace');
        },
        questionCategoryCheck: function questionCategoryCheck(index) {
            var that = this;
            that.questionCategoryIndex = index;
            that.questionCategoryId = that.questionCategoryList[index].id;
            that.questionCategoryName = that.questionCategoryList[index].name;
        },
        typeCheck: function typeCheck(index) {
            var that = this;
            that.typeIndex = index;
            that.typeId = that.typeList[index].id;
            that.type = that.typeList[index].title;
        },
        difficultyCheck: function difficultyCheck(index) {
            var that = this;
            that.difficultyIndex = index;
            that.difficultyId = that.difficultyList[index].id;
            that.difficultyName = that.difficultyList[index].title;
        },
        gradeCheck: function gradeCheck(index) {
            var that = this;
            that.gradeIndex = index;
            that.gradeId = that.gradeList[index].gradeId;
            that.gradeName = that.gradeList[index].gradeName;
        },
        getGrade: function getGrade() {
            var that = this;
            axios.get('label/common/getAllGrade').then(function (res) {
                that.gradeList = res.data;
                that.gradeId = that.gradeList[that.gradeIndex].gradeId;
                that.gradeName = that.gradeList[that.gradeIndex].gradeName;
            });
        },
        questionTypeCheck: function questionTypeCheck(index) {
            var that = this;
            that.questionTypeIndex = index;
            that.questionTypeId = that.questionTypeList[index].id;
            that.questionTypeName = that.questionTypeList[index].title;
        },
        getQuestionType: function getQuestionType(subjectId) {
            var that = this;
            axios.get('label/common/getQuestionTypeAjaxSearch', {
                params: {
                    subjectId: subjectId
                }
            }).then(function (res) {
                that.questionTypeList = res.data;
                that.questionTypeId = that.questionTypeList[that.questionTypeIndex].id;
                that.questionTypeName = that.questionTypeList[that.questionTypeIndex].title;
            });
        },
        getKnowledge: function getKnowledge(subjectId) {
            var that = this;
            axios.get("/label/knowledge/getKnowledgeList", {
                params: {
                    userKey: that.userKey,
                    subjectId: subjectId
                }
            }).then(function (res) {
                if (res.data.status == 0) {
                    that.$message.error(res.data.errorMsg);return false;
                } else {
                    that.ztreeDataSource = res.data.data;
                }
            });
        },
        getQuestionCategory: function getQuestionCategory() {
            var that = this;
            axios.get('/label/common/getQuestionCategorySearch', {
                params: {
                    userKey: that.userKey,
                    subjectId: that.subjectId
                }
            }).then(function (res) {
                that.questionCategoryList = res.data;
                that.questionCategoryId = that.questionCategoryList[that.questionCategoryIndex].id;
                that.questionCategoryName = that.questionCategoryList[that.questionCategoryIndex].name;
            });
        },
        getDifficulty: function getDifficulty() {
            var that = this;
            that.difficultyId = that.difficultyList[that.difficultyIndex].id;
            that.difficultyName = that.difficultyList[that.difficultyIndex].title;
        },
        getType: function getType() {
            var that = this;
            that.typeId = that.typeList[that.typeIndex].id;
            that.type = that.typeList[that.typeIndex].title;
        }
    },
    computed: {
        subjectIsShow: function subjectIsShow() {
            if (this.subjectId == 60) {
                this.getQuestionCategory(); //请求获取题类
                return true;
            } else {
                return false;
            }
        }
    },
    mounted: function mounted() {
        var that = this;
        that.getQuestionType(that.subjectId);
        that.getGrade();
        that.getKnowledge(that.subjectId); //获取知识点
        that.getDifficulty();
        that.getType();
    }
});

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(21)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!./questionOptions.css", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!./questionOptions.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".m-main .opration-wrapper {\r\n    float: right;\r\n    font-size: 14px;\r\n    color: #333333; }\r\n.m-main .opration-wrapper .paper-topic {\r\n    position: relative;\r\n    z-index: 2;\r\n    background-color: #fff;\r\n    min-height: 493px;\r\n    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n    -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n    -moz-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13); }\r\n.m-main .opration-wrapper .paper-topic .topic-title {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    border-bottom: 1px solid #ddd;\r\n    color: #5d9cec;\r\n    text-align: center; }\r\n.m-main .opration-wrapper .paper-label-select {\r\n    width: 351px;\r\n    padding: 17px 22px 13px 13px;\r\n    margin-bottom: 15px;\r\n    background-color: #fff;\r\n    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n    -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n    -moz-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13); }\r\n.m-main .opration-wrapper .paper-label-select .title {\r\n    margin-bottom: 10px;\r\n    font-size: 0;\r\n    color: #333333; }\r\n.m-main .opration-wrapper .paper-label-select .title .t {\r\n    font-size: 14px; }\r\n.m-main .opration-wrapper .paper-label-select .title .t.t1 {\r\n    float: left; }\r\n.m-main .opration-wrapper .paper-label-select .title .t.t2 {\r\n    float: right; }\r\n.m-main .opration-wrapper .paper-label-select .title .count1 {\r\n    font-size: 16px;\r\n    color: #5d9cec; }\r\n.m-main .opration-wrapper .paper-label-select .title .count2 {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    color: #f68411; }\r\n.m-main .opration-wrapper .paper-label-select .title::after {\r\n    display: block;\r\n    content: ' ';\r\n    clear: both;\r\n    overflow: hidden;\r\n    visibility: hidden; }\r\n.m-main .opration-wrapper .paper-label-select .option-box {\r\n    margin-left: 3px;\r\n    font-size: 0; }\r\n.m-main .opration-wrapper .paper-label-select .option-box .label {\r\n    color: #333333;\r\n    font-weight: normal;\r\n    font-size: 14px; }\r\n.m-main .opration-wrapper .paper-label-select .option-box .label.grade {\r\n    float: left;\r\n    position: relative;\r\n    top: 8px; }\r\n.m-main .opration-wrapper .paper-label-select .option-box .radio-inline__input {\r\n    position: absolute;\r\n    clip: rect(1px, 1px, 1px, 1px); }\r\n.m-main .opration-wrapper .paper-label-select .option-box .radio-inline__label {\r\n    display: inline-block;\r\n    width: 75px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    margin: 8px 7px 0 0;\r\n    border: 1px solid #999999;\r\n    border-radius: 5px;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    cursor: pointer; }\r\n.m-main .opration-wrapper .paper-label-select .option-box .radio-inline__label.checked {\r\n    background: #5d9cec;\r\n    border: 1px solid #1da0f1;\r\n    color: #fff; }\r\n.m-main .opration-wrapper .paper-label-select .option-box .grade-data {\r\n    /*float: left;*/\r\n    width: 306px; }\r\n.m-main .opration-wrapper .paper-label-select .option-box.grade::after {\r\n    display: block;\r\n    content: ' ';\r\n    clear: both;\r\n    overflow: hidden;\r\n    visibility: hidden; }\r\n", ""]);

// exports


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(129)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(132)
/* template */
var __vue_template__ = __webpack_require__(133)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "node_modules\\vue-ztree\\src\\components\\vue-ztree.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40e604e2", Component.options)
  } else {
    hotAPI.reload("data-v-40e604e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(130);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("6c14594b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../css-loader/index.js!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-40e604e2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../vue-loader/lib/selector.js?type=styles&index=0!./vue-ztree.vue", function() {
     var newContent = require("!!../../../css-loader/index.js!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-40e604e2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../vue-loader/lib/selector.js?type=styles&index=0!./vue-ztree.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(19);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\ndiv.ztree_content_wrap {height:380px;\n}\ndiv.ztree_content_wrap div.left{float: left;width: 100%;\n}\ndiv.zTreeDemoBackground {width:100%;height:500px;text-align:left;\n}\n.expendIcon {\n\t\tbackground-position: -74px -36px;\n\t\tline-height: 0;\n\t    margin: 0;\n\t    width: 16px;\n\t    height: 16px;\n\t    display: inline-block;\n\t    vertical-align: middle;\n\t    border: 0 none;\n\t    cursor: pointer;\n\t    outline: none;\n\t    position: absolute;\n\t    top:4px;\n\t    background-color: transparent;\n\t    background-repeat: no-repeat;\n\t    background-attachment: scroll;\n\t    background-image: url(" + escape(__webpack_require__(110)) + ");\n}\nul.ztree {border:1px solid #ddd;background: #ffffff;width:100%;height:auto;overflow-y:scroll;overflow-x:auto;\n}\n.ztree * {padding:0; margin:0; font-size:15px; font-family: Verdana, Arial, Helvetica, AppleGothic, sans-serif\n}\n.ztree {margin:0; padding:5px; color:#333 ;\n}\n.ztree li{position: relative; padding:0; margin:0; list-style:none; line-height:24px; text-align:left; white-space:nowrap; outline:0\n}\n.ztree li ul{ margin:0; padding:0 0 0 18px\n}\n.ztree li ul.line{ background:url(" + escape(__webpack_require__(131)) + ") 0 0 repeat-y;\n}\n.ztree li a {padding:1px 3px 0 5px; margin:0; cursor:pointer; height:17px; color:#333; background-color: transparent;\n\t\ttext-decoration:none; vertical-align:top; display: inline-block\n}\n.ztree li a:hover {text-decoration:underline;color:blue;\n}\n.ztree li a.curSelectedNode {padding-top:0px; background-color:#191d22; color:#fff; height:24px; border:1px #191d22 solid; opacity:0.8;\n}\n.ztree li a.curSelectedNode_Edit {padding-top:0px; background-color:#FFE6B0; color:black; height:16px; border:1px #FFB951 solid; opacity:0.8;\n}\n.ztree li a.tmpTargetNode_inner {padding-top:0px; background-color:#316AC5; color:white; height:16px; border:1px #316AC5 solid;\n\t\topacity:0.8; filter:alpha(opacity=80)\n}\n.ztree li a.tmpTargetNode_prev {\n}\n.ztree li a.tmpTargetNode_next {\n}\n.ztree li a input.rename {height:14px; width:80px; padding:0; margin:0;\n\t\tfont-size:12px; border:1px #7EC4CC solid; *border:0px\n}\n.ztree li span {line-height:16px; margin-right:2px; top: 3px; display: inline-block;\n}\n.ztree li span.button {line-height:0; margin:0; width:16px; height:16px; display: inline-block; vertical-align:middle;\n\t\tborder:0 none; cursor: pointer;outline:none;\n\t\tbackground-color:transparent; background-repeat:no-repeat; background-attachment: scroll;\n\t\tbackground-image:url(" + escape(__webpack_require__(110)) + "); *background-image:url(" + escape(__webpack_require__(114)) + ")\n}\n.ztree li span.button.chk {width:13px; height:13px; margin:0 3px 0 0; cursor: auto\n}\n.ztree li span.button.chk.checkbox_false_full {background-position:0 0\n}\n.ztree li span.button.chk.checkbox_false_full_focus {background-position:0 -14px\n}\n.ztree li span.button.chk.checkbox_false_part {background-position:0 -28px\n}\n.ztree li span.button.chk.checkbox_false_part_focus {background-position:0 -42px\n}\n.ztree li span.button.chk.checkbox_false_disable {background-position:0 -56px\n}\n.ztree li span.button.chk.checkbox_true_full {background-position:-14px 0\n}\n.ztree li span.button.chk.checkbox_true_full_focus {background-position:-14px -14px\n}\n.ztree li span.button.chk.checkbox_true_part {background-position:-14px -28px\n}\n.ztree li span.button.chk.checkbox_true_part_focus {background-position:-14px -42px\n}\n.ztree li span.button.chk.checkbox_true_disable {background-position:-14px -56px\n}\n.ztree li span.button.chk.radio_false_full {background-position:-28px 0\n}\n.ztree li span.button.chk.radio_false_full_focus {background-position:-28px -14px\n}\n.ztree li span.button.chk.radio_false_part {background-position:-28px -28px\n}\n.ztree li span.button.chk.radio_false_part_focus {background-position:-28px -42px\n}\n.ztree li span.button.chk.radio_false_disable {background-position:-28px -56px\n}\n.ztree li span.button.chk.radio_true_full {background-position:-42px 0\n}\n.ztree li span.button.chk.radio_true_full_focus {background-position:-42px -14px\n}\n.ztree li span.button.chk.radio_true_part {background-position:-42px -28px\n}\n.ztree li span.button.chk.radio_true_part_focus {background-position:-42px -42px\n}\n.ztree li span.button.chk.radio_true_disable {background-position:-42px -56px\n}\n.ztree li span.button.switch {width:18px; height:18px\n}\n.ztree li span.button.root_open{background-position:-92px -54px\n}\n.ztree li span.button.root_close{background-position:-74px -54px\n}\n.ztree li span.button.roots_open{background-position:-92px 0\n}\n.ztree li span.button.roots_close{background-position:-74px 0\n}\n.ztree li span.button.center_open{background-position:-92px -18px\n}\n.ztree li span.button.center_close{background-position:-74px -18px\n}\n.ztree li span.button.bottom_open{background-position:-92px -36px\n}\n.ztree li span.button.bottom_close{background-position:-74px -36px\n}\n.ztree li span.button.noline_open{background-position:-92px -72px\n}\n.ztree li span.button.noline_close{background-position:-74px -72px\n}\n.ztree li span.button.root_docu{ background:none;\n}\n.ztree li span.button.roots_docu{background-position:-56px 0\n}\n.ztree li span.button.center_docu{background-position:-56px -18px\n}\n.ztree li span.button.bottom_docu{background-position:-56px -36px\n}\n.ztree li span.button.noline_docu{ background:none;\n}\n.ztree li span.button.ico_open{margin-right:2px; background-position:-110px -16px; vertical-align:top; *vertical-align:middle\n}\n.ztree li span.button.ico_close{margin-right:2px; background-position:-110px 0; vertical-align:top; *vertical-align:middle\n}\n.ztree li span.button.ico_docu{margin-right:2px; background-position:-110px -32px; vertical-align:top; *vertical-align:middle\n}\n.ztree li span.button.edit {margin-right:2px; background-position:-110px -48px; vertical-align:top; *vertical-align:middle\n}\n.ztree li span.button.remove {margin-right:2px; background-position:-110px -64px; vertical-align:top; *vertical-align:middle\n}\n\n\t/*.ztree li span.button.ico_loading{margin-right:2px; background:url('../images/ztree/loading.gif') no-repeat scroll 0 0 transparent; \n\t            vertical-align:top; *vertical-align:middle}*/\nul.tmpTargetzTree {background-color:#FFE6B0; opacity:0.8; filter:alpha(opacity=80)\n}\nspan.tmpzTreeMove_arrow {width:16px; height:16px; display: inline-block; padding:0; margin:2px 0 0 1px; border:0 none; position:absolute;\n\t\tbackground-color:white; background-repeat:no-repeat; background-attachment: scroll;\n\t\tbackground-position:-110px -80px; background-image:url(" + escape(__webpack_require__(110)) + "); *background-image:url(" + escape(__webpack_require__(114)) + ")\n}\nul.ztree.zTreeDragUL {margin:0; padding:0; position:absolute; width:auto; height:auto;overflow:hidden; \n\t             background-color:#cfcfcf; border:1px #00B83F dotted; opacity:0.8; filter:alpha(opacity=80)\n}\n.zTreeMask {z-index:10000; background-color:#cfcfcf; opacity:0.0; filter:alpha(opacity=0); position:absolute\n}\n.loadSyncNode {\n\t\twidth: 16px;\n        height: 16px;\n        position: relative;\n        display: inline-block;\n\t\tbackground-image:url(\"data:image/gif;base64,R0lGODlhEAAQAMQAAP///+7u7t3d3bu7u6qqqpmZmYiIiHd3d2ZmZlVVVURERDMzMyIiIhEREQARAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAQACwAAAAAEAAQAAAFdyAkQgGJJOWoQgIjBM8jkKsoPEzgyMGsCjPDw7ADpkQBxRDmSCRetpRA6Rj4kFBkgLC4IlUGhbNQIwXOYYWCXDufzYPDMaoKGBoKb886OjAKdgZAAgQkfCwzAgsDBAUCgl8jAQkHEAVkAoA1AgczlyIDczUDA2UhACH5BAUHABAALAAAAAAPABAAAAVjICSO0IGIATkqIiMKDaGKC8Q49jPMYsE0hQdrlABCGgvT45FKiRKQhWA0mPKGPAgBcTjsspBCAoH4gl+FmXNEUEBVAYHToJAVZK/XWoQQDAgBZioHaX8igigFKYYQVlkCjiMhACH5BAUHABAALAAAAAAQAA8AAAVgICSOUGGQqIiIChMESyo6CdQGdRqUENESI8FAdFgAFwqDISYwPB4CVSMnEhSej+FogNhtHyfRQFmIol5owmEta/fcKITB6y4choMBmk7yGgSAEAJ8JAVDgQFmKUCCZnwhACH5BAUHABAALAAAAAAQABAAAAViICSOYkGe4hFAiSImAwotB+si6Co2QxvjAYHIgBAqDoWCK2Bq6A40iA4yYMggNZKwGFgVCAQZotFwwJIF4QnxaC9IsZNgLtAJDKbraJCGzPVSIgEDXVNXA0JdgH6ChoCKKCEAIfkEBQcAEAAsAAAAABAADgAABUkgJI7QcZComIjPw6bs2kINLB5uW9Bo0gyQx8LkKgVHiccKVdyRlqjFSAApOKOtR810StVeU9RAmLqOxi0qRG3LptikAVQEh4UAACH5BAUHABAALAAAAAAQABAAAAVxICSO0DCQKBQQonGIh5AGB2sYkMHIqYAIN0EDRxoQZIaC6bAoMRSiwMAwCIwCggRkwRMJWKSAomBVCc5lUiGRUBjO6FSBwWggwijBooDCdiFfIlBRAlYBZQ0PWRANaSkED1oQYHgjDA8nM3kPfCmejiEAIfkEBQcAEAAsAAAAABAAEAAABWAgJI6QIJCoOIhFwabsSbiFAotGMEMKgZoB3cBUQIgURpFgmEI0EqjACYXwiYJBGAGBgGIDWsVicbiNEgSsGbKCIMCwA4IBCRgXt8bDACkvYQF6U1OADg8mDlaACQtwJCEAIfkEBQcAEAAsAAABABAADwAABV4gJEKCOAwiMa4Q2qIDwq4wiriBmItCCREHUsIwCgh2q8MiyEKODK7ZbHCoqqSjWGKI1d2kRp+RAWGyHg+DQUEmKliGx4HBKECIMwG61AgssAQPKA19EAxRKz4QCVIhACH5BAUHABAALAAAAAAQABAAAAVjICSOUBCQqHhCgiAOKyqcLVvEZOC2geGiK5NpQBAZCilgAYFMogo/J0lgqEpHgoO2+GIMUL6p4vFojhQNg8rxWLgYBQJCASkwEKLC17hYFJtRIwwBfRAJDk4ObwsidEkrWkkhACH5BAUHABAALAAAAQAQAA8AAAVcICSOUGAGAqmKpjis6vmuqSrUxQyPhDEEtpUOgmgYETCCcrB4OBWwQsGHEhQatVFhB/mNAojFVsQgBhgKpSHRTRxEhGwhoRg0CCXYAkKHHPZCZRAKUERZMAYGMCEAIfkEBQcAEAAsAAABABAADwAABV0gJI4kFJToGAilwKLCST6PUcrB8A70844CXenwILRkIoYyBRk4BQlHo3FIOQmvAEGBMpYSop/IgPBCFpCqIuEsIESHgkgoJxwQAjSzwb1DClwwgQhgAVVMIgVyKCEAIfkECQcAEAAsAAAAABAAEAAABWQgJI5kSQ6NYK7Dw6xr8hCw+ELC85hCIAq3Am0U6JUKjkHJNzIsFAqDqShQHRhY6bKqgvgGCZOSFDhAUiWCYQwJSxGHKqGAE/5EqIHBjOgyRQELCBB7EAQHfySDhGYQdDWGQyUhADs=\")\n}\n", ""]);

// exports


/***/ }),

/***/ 131:
/***/ (function(module, exports) {

module.exports = "/images/vendor/vue-ztree/src/ztree/line_conn.gif?a2649b0b087ae0f894092a090d95d3e2";

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      treeDataSource: []
    };
  },

  props: {
    // 树数据
    list: {
      type: Array,
      twoWay: true
    },
    // 点击节点回调
    func: {
      type: Function,
      default: null
    },
    // 点击展开回调
    expand: {
      type: Function,
      default: null
    },
    // 右击事件
    contextmenu: {
      type: Function,
      default: function _default() {
        console.log("defalt click contextmenu");
      }
    },
    // 是否展开
    isOpen: {
      type: Boolean,
      twoWay: true,
      default: false
    }
  },
  watch: {
    'list': {
      handler: function handler() {
        this.initTreeData();
      },
      deep: true
    }
  },
  methods: {
    initTreeData: function initTreeData() {
      var _this = this;

      var tempList = JSON.parse(JSON.stringify(this.list));

      // 递归操作，增加删除一些属性。比如: 展开/收起
      var recurrenceFunc = function recurrenceFunc(data) {
        data.forEach(function (m) {
          if (!m.hasOwnProperty("clickNode")) {
            m.clickNode = m.hasOwnProperty("clickNode") ? m.clickNode : false;
          }

          m.children = m.children || [];

          if (!m.hasOwnProperty("isFolder")) {
            m.isFolder = m.hasOwnProperty("open") ? m.open : _this.isOpen;
          }

          if (!m.hasOwnProperty("isExpand")) {
            m.isExpand = m.hasOwnProperty("open") ? m.open : _this.isOpen;
          }

          m.loadNode = 0;

          recurrenceFunc(m.children);
        });
      };

      recurrenceFunc(tempList);

      this.treeDataSource = tempList;
    }
  },
  components: {
    // 组件
    ztreeItem: {
      name: 'ztreeItem',
      props: {
        model: {
          type: Object,
          twoWay: true
        },
        num: {
          type: Number,
          twoWay: true
        },
        nodes: {
          type: Number,
          twoWay: true,
          default: 0
        },
        trees: {
          type: Array,
          twoWay: true,
          default: []
        },
        root: {
          type: String,
          twoWay: true
        },
        callback: {
          type: Function
        },
        expandfunc: {
          type: Function
        },
        cxtmenufunc: {
          type: Function
        }
      },
      methods: {
        Func: function Func(m) {
          var _this2 = this;

          // 查找点击的子节点
          var recurFunc = function recurFunc(data, list) {
            data.forEach(function (i) {
              if (i.id == m.id) {
                i.clickNode = true;

                if (typeof _this2.callback == "function") {
                  _this2.callback.call(null, m, list, _this2.trees);
                }
              } else {
                i.clickNode = false;
              }

              if (i.children) {
                recurFunc(i.children, i);
              }
            });
          };

          recurFunc(this.trees, this.trees);
        },
        open: function open(m) {
          //
          m.isExpand = !m.isExpand;

          if (typeof this.expandfunc == "function" && m.isExpand) {
            if (m.loadNode != 2) {
              //
              this.expandfunc.call(null, m);
            } else {
              m.isFolder = !m.isFolder;
            }
          } else {
            m.isFolder = !m.isFolder;
          }
        }
      },
      computed: {
        // 给（根 和 子树）赋值不同的样式
        rootClass: function rootClass() {
          var strRootClass = '';

          // 根判断
          if (this.root == '0') {

            strRootClass = this.num == 0 && this.model.children.length == 0 ? "roots_docu" : this.nodes == 1 || this.num == 0 && this.nodes != this.num + 1 ? "root_" : this.nodes == this.num + 1 ? "bottom_" : "center_";

            // 子树判断
          } else if (this.root == '1') {

            strRootClass = this.nodes > 1 && this.model.children.length > 0 && this.nodes != this.num + 1 ? "center_" : this.num == 0 && this.nodes > 1 || this.nodes != this.num + 1 ? "center_docu" : this.nodes == 1 && this.num != 0 || this.nodes == this.num + 1 && this.model.children.length > 0 ? "bottom_" : "bottom_docu";
          }

          return strRootClass;
        },

        // 是否有儿子节点
        isChildren: function isChildren() {
          return this.num + 1 != this.nodes;
        },

        // 展开/收起
        prefixClass: function prefixClass() {
          var returnChar = "";
          if (this.rootClass.indexOf("docu") == -1) {
            if (this.model.isFolder) {
              returnChar = "open";
            } else {
              returnChar = 'close';
            }
          }

          if (this.model.children.length == 0 && this.rootClass.indexOf("docu") == -1) {
            returnChar = 'docu';
          }

          return returnChar;
        },
        liClassVal: function liClassVal() {
          return "level" + this.num;
        },
        spanClassVal: function spanClassVal() {
          return "button level" + this.num + " switch " + this.rootClass + this.prefixClass;
        },
        aClassVal: function aClassVal() {
          return this.model.clickNode ? "level" + this.num + ' curSelectedNode' : "level" + this.num;
        },
        ulClassVal: function ulClassVal() {
          return this.isChildren && this.model.children.length > 0 ? "level" + this.num + ' line' : "level" + this.num;
        }
      },
      template: '<li :class="liClassVal">\n\t\t\t\t<span :class="spanClassVal" @click=\'open(model)\'></span>\n\t\t\t\t<a :class="aClassVal" @click=\'Func(model)\' @contextmenu.prevent=\'cxtmenufunc(model)\'>\n\t\t\t\t    <span :class="{loadSyncNode:model.loadNode==1}" v-if=\'model.loadNode==1\'></span>\n\t\t\t\t    <span :class=\'model.iconClass\' v-show=\'model.iconClass\' v-else></span>\n\t\t\t\t\t<span class="node_name">{{model.name}}</span>\n\t\t\t\t</a>\n\t\t\t\t<ul :class="ulClassVal" v-show=\'model.isFolder\'>\n\t\t\t\t\t<ztree-item v-for="(item,i) in model.children" :key=\'i\' :callback=\'callback\' :expandfunc=\'expandfunc\' :cxtmenufunc=\'cxtmenufunc\' :model.sync="item" :num.sync=\'i\' root=\'1\' :nodes.sync=\'model.children.length\' :trees.sync=\'trees\'></ztree-item>\n\t\t\t\t</ul>\n\t\t\t</li>'
    }
  },
  update: function update() {
    this.initTreeData();
  },
  mounted: function mounted() {
    var _this3 = this;

    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.nextTick(function () {
      _this3.initTreeData();
    });
  }
});

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.treeDataSource.length > 0
    ? _c("div", { staticClass: "ztree_content_wrap" }, [
        _c("div", { staticClass: "zTreeDemoBackground left" }, [
          _c(
            "ul",
            { staticClass: "ztree" },
            _vm._l(_vm.treeDataSource, function(m, i) {
              return _c("ztree-item", {
                key: i,
                attrs: {
                  model: m,
                  num: i,
                  root: "0",
                  nodes: _vm.treeDataSource.length,
                  callback: _vm.func,
                  expandfunc: _vm.expand,
                  cxtmenufunc: _vm.contextmenu,
                  trees: _vm.treeDataSource
                },
                on: {
                  "update:model": function($event) {
                    m = $event
                  },
                  "update:num": function($event) {
                    i = $event
                  },
                  "update:nodes": function($event) {
                    _vm.$set(_vm.treeDataSource, "length", $event)
                  },
                  "update:trees": function($event) {
                    _vm.treeDataSource = $event
                  }
                }
              })
            })
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-40e604e2", module.exports)
  }
}

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "opration-wrapper" }, [
    _c("div", { staticClass: "paper-label-select" }, [
      _c("div", { staticClass: "title" }, [
        _c("span", { staticClass: "t t1" }, [
          _vm._v("累计完成 "),
          _c("i", { staticClass: "count1" }, [
            _vm._v(_vm._s(_vm.questionFinishCount))
          ]),
          _vm._v(" 道")
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "t t2" }, [
          _vm._v("剩余："),
          _c("i", { staticClass: "count2" }, [
            _vm._v(_vm._s(_vm.questionNoFinishCount))
          ]),
          _vm._v(" 道")
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "option-box" },
        [
          _c("span", { staticClass: "label" }, [_vm._v("题型：")]),
          _vm._v(" "),
          _vm._l(_vm.questionTypeList, function(questionType, index) {
            return _c(
              "label",
              {
                staticClass: "radio-inline__label",
                class: { checked: index == _vm.questionTypeIndex },
                on: {
                  click: function($event) {
                    _vm.questionTypeCheck(index)
                  }
                }
              },
              [
                _c("input", {
                  staticClass: "radio-inline__input",
                  attrs: { type: "radio", name: "accessible-radio", value: "" }
                }),
                _vm._v(" "),
                _c("label", [_vm._v(_vm._s(questionType.title))])
              ]
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "option-box" },
        [
          _c("span", { staticClass: "label" }, [_vm._v("难度：")]),
          _vm._v(" "),
          _vm._l(_vm.difficultyList, function(difficulty, index) {
            return _c(
              "label",
              {
                staticClass: "radio-inline__label",
                class: { checked: index == _vm.difficultyIndex },
                on: {
                  click: function($event) {
                    _vm.difficultyCheck(index)
                  }
                }
              },
              [
                _c("input", {
                  staticClass: "radio-inline__input",
                  attrs: { type: "radio", name: "accessible-radio1", value: "" }
                }),
                _vm._v(" "),
                _c("label", [_vm._v(_vm._s(difficulty.title))])
              ]
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "option-box" },
        [
          _c("span", { staticClass: "label" }, [_vm._v("类型：")]),
          _vm._v(" "),
          _vm._l(_vm.typeList, function(type, index) {
            return _c(
              "label",
              {
                staticClass: "radio-inline__label",
                class: { checked: index === _vm.typeIndex },
                on: {
                  click: function($event) {
                    _vm.typeCheck(index)
                  }
                }
              },
              [
                _c("input", {
                  staticClass: "radio-inline__input",
                  attrs: { type: "radio", name: "accessible-radio4", value: "" }
                }),
                _vm._v(" "),
                _c("label", [_vm._v(_vm._s(type.title))])
              ]
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "option-box grade" }, [
        _c("span", { staticClass: "label grade" }, [_vm._v("年级：")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "grade-data" },
          _vm._l(_vm.gradeList, function(grade, index) {
            return _c(
              "label",
              {
                staticClass: "radio-inline__label",
                class: { checked: index == _vm.gradeIndex },
                on: {
                  click: function($event) {
                    _vm.gradeCheck(index)
                  }
                }
              },
              [
                _c("input", {
                  staticClass: "radio-inline__input",
                  attrs: { type: "radio", name: "accessible-radio2", value: "" }
                }),
                _vm._v(" "),
                _c("label", [_vm._v(_vm._s(grade.gradeName))])
              ]
            )
          })
        )
      ]),
      _vm._v(" "),
      _vm.subjectIsShow
        ? _c(
            "div",
            { staticClass: "option-box grade" },
            [
              _c("span", { staticClass: "label grade" }, [_vm._v("题类：")]),
              _vm._v(" "),
              _vm._l(_vm.questionCategoryList, function(
                questionCategory,
                index
              ) {
                return _c(
                  "label",
                  {
                    staticClass: "radio-inline__label",
                    class: { checked: index == _vm.questionCategoryIndex },
                    on: {
                      click: function($event) {
                        _vm.questionCategoryCheck(index)
                      }
                    }
                  },
                  [
                    _c("input", {
                      staticClass: "radio-inline__input",
                      attrs: {
                        type: "radio",
                        name: "accessible-radio3",
                        value: ""
                      }
                    }),
                    _vm._v(" "),
                    _c("label", [_vm._v(_vm._s(questionCategory.name))])
                  ]
                )
              })
            ],
            2
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "paper-topic" },
      [
        _c("p", { staticClass: "topic-title" }, [_vm._v("知识点体系")]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "i-wrap",
            staticStyle: { margin: "10px 0px 10px 10px" }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.knowledgeKeyword,
                  expression: "knowledgeKeyword"
                }
              ],
              staticClass: "i-input",
              attrs: { type: "text", placeholder: "请输入..." },
              domProps: { value: _vm.knowledgeKeyword },
              on: {
                focus: _vm.keySpace,
                blur: _vm.keyBindSapce,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.knowledgeKeyword = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "i-btn",
                attrs: { disabled: _vm.knowledgeDisabled },
                on: { click: _vm.knowledgeSearch }
              },
              [_vm._v("搜索")]
            )
          ]
        ),
        _vm._v(" "),
        _c("vue-ztree", {
          ref: "ztreeType",
          attrs: { list: _vm.ztreeDataSource, func: _vm.nodeClick },
          on: {
            "update:list": function($event) {
              _vm.ztreeDataSource = $event
            }
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-711dc49e", module.exports)
  }
}

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(136)
/* template */
var __vue_template__ = __webpack_require__(137)
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
Component.options.__file = "resources\\assets\\js\\components\\QuestionError.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8adf724a", Component.options)
  } else {
    hotAPI.reload("data-v-8adf724a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 136:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['errorShow', 'errorClose', 'questionId'],
    data: function data() {
        return {
            errorType: [],
            errorDesc: ''
        };
    },

    methods: {
        close: function close() {
            this.$emit('errorClose');
        },
        errorSubmit: function errorSubmit() {
            var that = this;
            if (that.questionId <= 0 || that.errorType.length <= 0 || that.errorDesc.length <= 0) {
                that.$message.error('请将纠错表单填写完整');return false;
            }
            var obj = that.$qs.stringify({
                questionId: that.questionId,
                errorType: that.errorType,
                errorDesc: that.errorDesc,
                userKey: that.userKey,
                agencyId: that.user.agency_id,
                agencyName: that.user.agency_name,
                userName: that.user.user_name,
                userRealname: that.user.user_realname
            });
            axios.post("/label/question/questionErrorReport", obj).then(function (res) {
                if (res.status == 0) {
                    that.$message.error(res.errorMsg);return false;
                }
                that.close();
            }).catch(function (error) {
                that.$message.error(error.message);
            });
        }
    },
    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])({
        user: 'getUser',
        userKey: 'getUserKey'
    }))
});

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.errorShow
    ? _c("div", { staticClass: "m-layer" }, [
        _c("div", { staticClass: "mask-error" }, [
          _c("div", { staticClass: "mask-error-title" }, [
            _vm._v("纠错\n            "),
            _c(
              "span",
              { staticClass: "icon-close", on: { click: _vm.close } },
              [_vm._v("×")]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mask-error-con" }, [
            _c("div", { staticClass: "mask-error-con-title" }, [
              _vm._v("错误类型")
            ]),
            _vm._v(" "),
            _c("div", [
              _c("div", { attrs: { id: "check_css3" } }, [
                _c("div", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.errorType,
                        expression: "errorType"
                      }
                    ],
                    staticClass: "magic-checkbox",
                    attrs: {
                      id: "check1",
                      type: "checkbox",
                      value: "题干有误"
                    },
                    domProps: {
                      checked: Array.isArray(_vm.errorType)
                        ? _vm._i(_vm.errorType, "题干有误") > -1
                        : _vm.errorType
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.errorType,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = "题干有误",
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.errorType = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.errorType = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.errorType = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "check1" } }, [
                    _vm._v("题干有误")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.errorType,
                        expression: "errorType"
                      }
                    ],
                    staticClass: "magic-checkbox",
                    attrs: {
                      id: "check2",
                      type: "checkbox",
                      value: "答案有误"
                    },
                    domProps: {
                      checked: Array.isArray(_vm.errorType)
                        ? _vm._i(_vm.errorType, "答案有误") > -1
                        : _vm.errorType
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.errorType,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = "答案有误",
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.errorType = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.errorType = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.errorType = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "check2" } }, [
                    _vm._v("答案有误")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.errorType,
                        expression: "errorType"
                      }
                    ],
                    staticClass: "magic-checkbox",
                    attrs: {
                      id: "check3",
                      type: "checkbox",
                      value: "解析有误"
                    },
                    domProps: {
                      checked: Array.isArray(_vm.errorType)
                        ? _vm._i(_vm.errorType, "解析有误") > -1
                        : _vm.errorType
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.errorType,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = "解析有误",
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.errorType = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.errorType = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.errorType = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "check3" } }, [
                    _vm._v("解析有误")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.errorType,
                        expression: "errorType"
                      }
                    ],
                    staticClass: "magic-checkbox",
                    attrs: {
                      id: "check4",
                      type: "checkbox",
                      value: "知识点标注有误"
                    },
                    domProps: {
                      checked: Array.isArray(_vm.errorType)
                        ? _vm._i(_vm.errorType, "知识点标注有误") > -1
                        : _vm.errorType
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.errorType,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = "知识点标注有误",
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.errorType = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.errorType = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.errorType = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "check4" } }, [
                    _vm._v("知识点标注有误")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mask-error-con-title" }, [
              _vm._v("错误描述:")
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.errorDesc,
                  expression: "errorDesc"
                }
              ],
              attrs: { name: "", placeholder: "请输入错误描述，最多100字。" },
              domProps: { value: _vm.errorDesc },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.errorDesc = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "mask-error-tip" }, [
              _vm._v("字数不能超过100字哦。")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mask-error-btn" }, [
              _c(
                "button",
                {
                  staticClass: "mask-error-confirm",
                  on: { click: _vm.errorSubmit }
                },
                [_vm._v("确认")]
              )
            ])
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8adf724a", module.exports)
  }
}

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function (f) {
  function A(a, b, d) {
    var c = a[0],
        g = /er/.test(d) ? _indeterminate : /bl/.test(d) ? n : k,
        e = d == _update ? { checked: c[k], disabled: c[n], indeterminate: "true" == a.attr(_indeterminate) || "false" == a.attr(_determinate) } : c[g];if (/^(ch|di|in)/.test(d) && !e) x(a, g);else if (/^(un|en|de)/.test(d) && e) q(a, g);else if (d == _update) for (var f in e) {
      e[f] ? x(a, f, !0) : q(a, f, !0);
    } else if (!b || "toggle" == d) {
      if (!b) a[_callback]("ifClicked");e ? c[_type] !== r && q(a, g) : x(a, g);
    }
  }function x(a, b, d) {
    var c = a[0],
        g = a.parent(),
        e = b == k,
        u = b == _indeterminate,
        v = b == n,
        s = u ? _determinate : e ? y : "enabled",
        F = l(a, s + t(c[_type])),
        B = l(a, b + t(c[_type]));if (!0 !== c[b]) {
      if (!d && b == k && c[_type] == r && c.name) {
        var w = a.closest("form"),
            p = 'input[name="' + c.name + '"]',
            p = w.length ? w.find(p) : f(p);p.each(function () {
          this !== c && f(this).data(m) && q(f(this), b);
        });
      }u ? (c[b] = !0, c[k] && q(a, k, "force")) : (d || (c[b] = !0), e && c[_indeterminate] && q(a, _indeterminate, !1));D(a, e, b, d);
    }c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "default");g[_add](B || l(a, b) || "");g.attr("role") && !u && g.attr("aria-" + (v ? n : k), "true");
    g[_remove](F || l(a, s) || "");
  }function q(a, b, d) {
    var c = a[0],
        g = a.parent(),
        e = b == k,
        f = b == _indeterminate,
        m = b == n,
        s = f ? _determinate : e ? y : "enabled",
        q = l(a, s + t(c[_type])),
        r = l(a, b + t(c[_type]));if (!1 !== c[b]) {
      if (f || !d || "force" == d) c[b] = !1;D(a, e, s, d);
    }!c[n] && l(a, _cursor, !0) && g.find("." + C).css(_cursor, "pointer");g[_remove](r || l(a, b) || "");g.attr("role") && !f && g.attr("aria-" + (m ? n : k), "false");g[_add](q || l(a, s) || "");
  }function E(a, b) {
    if (a.data(m)) {
      a.parent().html(a.attr("style", a.data(m).s || ""));if (b) a[_callback](b);a.off(".i").unwrap();
      f(_label + '[for="' + a[0].id + '"]').add(a.closest(_label)).off(".i");
    }
  }function l(a, b, f) {
    if (a.data(m)) return a.data(m).o[b + (f ? "" : "Class")];
  }function t(a) {
    return a.charAt(0).toUpperCase() + a.slice(1);
  }function D(a, b, f, c) {
    if (!c) {
      if (b) a[_callback]("ifToggled");a[_callback]("ifChanged")[_callback]("if" + t(f));
    }
  }var m = "iCheck",
      C = m + "-helper",
      r = "radio",
      k = "checked",
      y = "un" + k,
      n = "disabled";_determinate = "determinate";_indeterminate = "in" + _determinate;_update = "update";_type = "type";_click = "click";_touch = "touchbegin.i touchend.i";
  _add = "addClass";_remove = "removeClass";_callback = "trigger";_label = "label";_cursor = "cursor";_mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);f.fn[m] = function (a, b) {
    var d = 'input[type="checkbox"], input[type="' + r + '"]',
        c = f(),
        g = function g(a) {
      a.each(function () {
        var a = f(this);c = a.is(d) ? c.add(a) : c.add(a.find(d));
      });
    };if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a)) return a = a.toLowerCase(), g(this), c.each(function () {
      var c = f(this);"destroy" == a ? E(c, "ifDestroyed") : A(c, !0, a);f.isFunction(b) && b();
    });if ("object" != (typeof a === "undefined" ? "undefined" : _typeof(a)) && a) return this;var e = f.extend({ checkedClass: k, disabledClass: n, indeterminateClass: _indeterminate, labelHover: !0 }, a),
        l = e.handle,
        v = e.hoverClass || "hover",
        s = e.focusClass || "focus",
        t = e.activeClass || "active",
        B = !!e.labelHover,
        w = e.labelHoverClass || "hover",
        p = ("" + e.increaseArea).replace("%", "") | 0;if ("checkbox" == l || l == r) d = 'input[type="' + l + '"]';-50 > p && (p = -50);g(this);return c.each(function () {
      var a = f(this);E(a);var c = this,
          b = c.id,
          g = -p + "%",
          d = 100 + 2 * p + "%",
          d = { position: "absolute", top: g, left: g, display: "block", width: d, height: d, margin: 0, padding: 0, background: "#fff", border: 0, opacity: 0 },
          g = _mobile ? { position: "absolute", visibility: "hidden" } : p ? d : { position: "absolute", opacity: 0 },
          l = "checkbox" == c[_type] ? e.checkboxClass || "icheckbox" : e.radioClass || "i" + r,
          z = f(_label + '[for="' + b + '"]').add(a.closest(_label)),
          u = !!e.aria,
          y = m + "-" + Math.random().toString(36).substr(2, 6),
          h = '<div class="' + l + '" ' + (u ? 'role="' + c[_type] + '" ' : "");u && z.each(function () {
        h += 'aria-labelledby="';this.id ? h += this.id : (this.id = y, h += y);h += '"';
      });h = a.wrap(h + "/>")[_callback]("ifCreated").parent().append(e.insert);d = f('<ins class="' + C + '"/>').css(d).appendTo(h);a.data(m, { o: e, s: a.attr("style") }).css(g);e.inheritClass && h[_add](c.className || "");e.inheritID && b && h.attr("id", m + "-" + b);"static" == h.css("position") && h.css("position", "relative");A(a, !0, _update);if (z.length) z.on(_click + ".i mouseover.i mouseout.i " + _touch, function (b) {
        var d = b[_type],
            e = f(this);if (!c[n]) {
          if (d == _click) {
            if (f(b.target).is("a")) return;
            A(a, !1, !0);
          } else B && (/ut|nd/.test(d) ? (h[_remove](v), e[_remove](w)) : (h[_add](v), e[_add](w)));if (_mobile) b.stopPropagation();else return !1;
        }
      });a.on(_click + ".i focus.i blur.i keyup.i keydown.i keypress.i", function (b) {
        var d = b[_type];b = b.keyCode;if (d == _click) return !1;if ("keydown" == d && 32 == b) return c[_type] == r && c[k] || (c[k] ? q(a, k) : x(a, k)), !1;if ("keyup" == d && c[_type] == r) !c[k] && x(a, k);else if (/us|ur/.test(d)) h["blur" == d ? _remove : _add](s);
      });d.on(_click + " mousedown mouseup mouseover mouseout " + _touch, function (b) {
        var d = b[_type],
            e = /wn|up/.test(d) ? t : v;if (!c[n]) {
          if (d == _click) A(a, !1, !0);else {
            if (/wn|er|in/.test(d)) h[_add](e);else h[_remove](e + " " + t);if (z.length && B && e == v) z[/ut|nd/.test(d) ? _remove : _add](w);
          }if (_mobile) b.stopPropagation();else return !1;
        }
      });
    });
  };
})(window.jQuery || window.Zepto);

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

module.exports = "/images/search.png?9172a5e68298dd0d398023fef91acd94";

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "/images/singleq_fnish_bg.png?f306a790fcb45ba567ccaaeeb0247eae";

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * JQuery zTree core v3.5.35
 * http://treejs.cn/
 *
 * Copyright (c) 2010 Hunter.z
 *
 * Licensed same as jquery - MIT License
 * http://www.opensource.org/licenses/mit-license.php
 *
 * email: hunter.z@263.net
 * Date: 2018-03-30
 */
(function (q) {
  var H,
      I,
      J,
      K,
      L,
      M,
      u,
      s = {},
      v = {},
      w = {},
      N = { treeId: "", treeObj: null, view: { addDiyDom: null, autoCancelSelected: !0, dblClickExpand: !0, expandSpeed: "fast", fontCss: {}, nameIsHTML: !1, selectedMulti: !0, showIcon: !0, showLine: !0, showTitle: !0, txtSelectedEnable: !1 }, data: { key: { isParent: "isParent", children: "children", name: "name", title: "", url: "url", icon: "icon" }, simpleData: { enable: !1, idKey: "id", pIdKey: "pId", rootPId: null }, keep: { parent: !1, leaf: !1 } }, async: { enable: !1, contentType: "application/x-www-form-urlencoded", type: "post",
      dataType: "text", url: "", autoParam: [], otherParam: [], dataFilter: null }, callback: { beforeAsync: null, beforeClick: null, beforeDblClick: null, beforeRightClick: null, beforeMouseDown: null, beforeMouseUp: null, beforeExpand: null, beforeCollapse: null, beforeRemove: null, onAsyncError: null, onAsyncSuccess: null, onNodeCreated: null, onClick: null, onDblClick: null, onRightClick: null, onMouseDown: null, onMouseUp: null, onExpand: null, onCollapse: null, onRemove: null } },
      x = [function (a) {
    var b = a.treeObj,
        c = f.event;b.bind(c.NODECREATED, function (b, c, h) {
      j.apply(a.callback.onNodeCreated, [b, c, h]);
    });b.bind(c.CLICK, function (b, c, h, e, m) {
      j.apply(a.callback.onClick, [c, h, e, m]);
    });b.bind(c.EXPAND, function (b, c, h) {
      j.apply(a.callback.onExpand, [b, c, h]);
    });b.bind(c.COLLAPSE, function (b, c, h) {
      j.apply(a.callback.onCollapse, [b, c, h]);
    });b.bind(c.ASYNC_SUCCESS, function (b, c, h, e) {
      j.apply(a.callback.onAsyncSuccess, [b, c, h, e]);
    });b.bind(c.ASYNC_ERROR, function (b, c, h, e, m, f) {
      j.apply(a.callback.onAsyncError, [b, c, h, e, m, f]);
    });b.bind(c.REMOVE, function (b, c, h) {
      j.apply(a.callback.onRemove, [b, c, h]);
    });b.bind(c.SELECTED, function (b, c, h) {
      j.apply(a.callback.onSelected, [c, h]);
    });b.bind(c.UNSELECTED, function (b, c, h) {
      j.apply(a.callback.onUnSelected, [c, h]);
    });
  }],
      y = [function (a) {
    var b = f.event;a.treeObj.unbind(b.NODECREATED).unbind(b.CLICK).unbind(b.EXPAND).unbind(b.COLLAPSE).unbind(b.ASYNC_SUCCESS).unbind(b.ASYNC_ERROR).unbind(b.REMOVE).unbind(b.SELECTED).unbind(b.UNSELECTED);
  }],
      z = [function (a) {
    var b = e.getCache(a);b || (b = {}, e.setCache(a, b));b.nodes = [];b.doms = [];
  }],
      A = [function (a, b, c, d, g, h) {
    if (c) {
      var k = e.getRoot(a),
          m = e.nodeChildren(a, c);c.level = b;c.tId = a.treeId + "_" + ++k.zId;c.parentTId = d ? d.tId : null;c.open = typeof c.open == "string" ? j.eqs(c.open, "true") : !!c.open;b = e.nodeIsParent(a, c);j.isArray(m) && !(b === !1 || typeof b == "string" && j.eqs(b, "false")) ? (e.nodeIsParent(a, c, !0), c.zAsync = !0) : (b = e.nodeIsParent(a, c, b), c.open = b && !a.async.enable ? c.open : !1, c.zAsync = !b);c.isFirstNode = g;c.isLastNode = h;c.getParentNode = function () {
        return e.getNodeCache(a, c.parentTId);
      };c.getPreNode = function () {
        return e.getPreNode(a, c);
      };c.getNextNode = function () {
        return e.getNextNode(a, c);
      };c.getIndex = function () {
        return e.getNodeIndex(a, c);
      };c.getPath = function () {
        return e.getNodePath(a, c);
      };c.isAjaxing = !1;e.fixPIdKeyValue(a, c);
    }
  }],
      t = [function (a) {
    var b = a.target,
        c = e.getSetting(a.data.treeId),
        d = "",
        g = null,
        h = "",
        k = "",
        m = null,
        i = null,
        o = null;if (j.eqs(a.type, "mousedown")) k = "mousedown";else if (j.eqs(a.type, "mouseup")) k = "mouseup";else if (j.eqs(a.type, "contextmenu")) k = "contextmenu";else if (j.eqs(a.type, "click")) {
      if (j.eqs(b.tagName, "span") && b.getAttribute("treeNode" + f.id.SWITCH) !== null) d = j.getNodeMainDom(b).id, h = "switchNode";else {
        if (o = j.getMDom(c, b, [{ tagName: "a", attrName: "treeNode" + f.id.A }])) d = j.getNodeMainDom(o).id, h = "clickNode";
      }
    } else if (j.eqs(a.type, "dblclick") && (k = "dblclick", o = j.getMDom(c, b, [{ tagName: "a", attrName: "treeNode" + f.id.A }]))) d = j.getNodeMainDom(o).id, h = "switchNode";if (k.length > 0 && d.length == 0 && (o = j.getMDom(c, b, [{ tagName: "a", attrName: "treeNode" + f.id.A }]))) d = j.getNodeMainDom(o).id;if (d.length > 0) switch (g = e.getNodeCache(c, d), h) {case "switchNode":
        e.nodeIsParent(c, g) ? j.eqs(a.type, "click") || j.eqs(a.type, "dblclick") && j.apply(c.view.dblClickExpand, [c.treeId, g], c.view.dblClickExpand) ? m = H : h = "" : h = "";break;case "clickNode":
        m = I;}switch (k) {case "mousedown":
        i = J;break;case "mouseup":
        i = K;break;case "dblclick":
        i = L;break;case "contextmenu":
        i = M;}return { stop: !1, node: g, nodeEventType: h, nodeEventCallback: m, treeEventType: k, treeEventCallback: i };
  }],
      B = [function (a) {
    var b = e.getRoot(a);b || (b = {}, e.setRoot(a, b));e.nodeChildren(a, b, []);b.expandTriggerFlag = !1;b.curSelectedList = [];b.noSelection = !0;b.createdNodes = [];b.zId = 0;b._ver = new Date().getTime();
  }],
      C = [],
      D = [],
      E = [],
      F = [],
      G = [],
      e = { addNodeCache: function addNodeCache(a, b) {
      e.getCache(a).nodes[e.getNodeCacheId(b.tId)] = b;
    }, getNodeCacheId: function getNodeCacheId(a) {
      return a.substring(a.lastIndexOf("_") + 1);
    }, addAfterA: function addAfterA(a) {
      D.push(a);
    }, addBeforeA: function addBeforeA(a) {
      C.push(a);
    }, addInnerAfterA: function addInnerAfterA(a) {
      F.push(a);
    }, addInnerBeforeA: function addInnerBeforeA(a) {
      E.push(a);
    }, addInitBind: function addInitBind(a) {
      x.push(a);
    }, addInitUnBind: function addInitUnBind(a) {
      y.push(a);
    }, addInitCache: function addInitCache(a) {
      z.push(a);
    }, addInitNode: function addInitNode(a) {
      A.push(a);
    },
    addInitProxy: function addInitProxy(a, b) {
      b ? t.splice(0, 0, a) : t.push(a);
    }, addInitRoot: function addInitRoot(a) {
      B.push(a);
    }, addNodesData: function addNodesData(a, b, c, d) {
      var g = e.nodeChildren(a, b);g ? c >= g.length && (c = -1) : (g = e.nodeChildren(a, b, []), c = -1);if (g.length > 0 && c === 0) g[0].isFirstNode = !1, i.setNodeLineIcos(a, g[0]);else if (g.length > 0 && c < 0) g[g.length - 1].isLastNode = !1, i.setNodeLineIcos(a, g[g.length - 1]);e.nodeIsParent(a, b, !0);c < 0 ? e.nodeChildren(a, b, g.concat(d)) : (a = [c, 0].concat(d), g.splice.apply(g, a));
    }, addSelectedNode: function addSelectedNode(a, b) {
      var c = e.getRoot(a);
      e.isSelectedNode(a, b) || c.curSelectedList.push(b);
    }, addCreatedNode: function addCreatedNode(a, b) {
      (a.callback.onNodeCreated || a.view.addDiyDom) && e.getRoot(a).createdNodes.push(b);
    }, addZTreeTools: function addZTreeTools(a) {
      G.push(a);
    }, exSetting: function exSetting(a) {
      q.extend(!0, N, a);
    }, fixPIdKeyValue: function fixPIdKeyValue(a, b) {
      a.data.simpleData.enable && (b[a.data.simpleData.pIdKey] = b.parentTId ? b.getParentNode()[a.data.simpleData.idKey] : a.data.simpleData.rootPId);
    }, getAfterA: function getAfterA(a, b, c) {
      for (var d = 0, e = D.length; d < e; d++) {
        D[d].apply(this, arguments);
      }
    }, getBeforeA: function getBeforeA(a, b, c) {
      for (var d = 0, e = C.length; d < e; d++) {
        C[d].apply(this, arguments);
      }
    }, getInnerAfterA: function getInnerAfterA(a, b, c) {
      for (var d = 0, e = F.length; d < e; d++) {
        F[d].apply(this, arguments);
      }
    }, getInnerBeforeA: function getInnerBeforeA(a, b, c) {
      for (var d = 0, e = E.length; d < e; d++) {
        E[d].apply(this, arguments);
      }
    }, getCache: function getCache(a) {
      return w[a.treeId];
    }, getNodeIndex: function getNodeIndex(a, b) {
      if (!b) return null;for (var c = b.parentTId ? b.getParentNode() : e.getRoot(a), c = e.nodeChildren(a, c), d = 0, g = c.length - 1; d <= g; d++) {
        if (c[d] === b) return d;
      }return -1;
    }, getNextNode: function getNextNode(a, b) {
      if (!b) return null;
      for (var c = b.parentTId ? b.getParentNode() : e.getRoot(a), c = e.nodeChildren(a, c), d = 0, g = c.length - 1; d <= g; d++) {
        if (c[d] === b) return d == g ? null : c[d + 1];
      }return null;
    }, getNodeByParam: function getNodeByParam(a, b, c, d) {
      if (!b || !c) return null;for (var g = 0, h = b.length; g < h; g++) {
        var k = b[g];if (k[c] == d) return b[g];k = e.nodeChildren(a, k);if (k = e.getNodeByParam(a, k, c, d)) return k;
      }return null;
    }, getNodeCache: function getNodeCache(a, b) {
      if (!b) return null;var c = w[a.treeId].nodes[e.getNodeCacheId(b)];return c ? c : null;
    }, getNodePath: function getNodePath(a, b) {
      if (!b) return null;var c;
      (c = b.parentTId ? b.getParentNode().getPath() : []) && c.push(b);return c;
    }, getNodes: function getNodes(a) {
      return e.nodeChildren(a, e.getRoot(a));
    }, getNodesByParam: function getNodesByParam(a, b, c, d) {
      if (!b || !c) return [];for (var g = [], h = 0, k = b.length; h < k; h++) {
        var m = b[h];m[c] == d && g.push(m);m = e.nodeChildren(a, m);g = g.concat(e.getNodesByParam(a, m, c, d));
      }return g;
    }, getNodesByParamFuzzy: function getNodesByParamFuzzy(a, b, c, d) {
      if (!b || !c) return [];for (var g = [], d = d.toLowerCase(), h = 0, k = b.length; h < k; h++) {
        var m = b[h];typeof m[c] == "string" && b[h][c].toLowerCase().indexOf(d) > -1 && g.push(m);m = e.nodeChildren(a, m);g = g.concat(e.getNodesByParamFuzzy(a, m, c, d));
      }return g;
    }, getNodesByFilter: function getNodesByFilter(a, b, c, d, g) {
      if (!b) return d ? null : [];for (var h = d ? null : [], k = 0, m = b.length; k < m; k++) {
        var f = b[k];if (j.apply(c, [f, g], !1)) {
          if (d) return f;h.push(f);
        }f = e.nodeChildren(a, f);f = e.getNodesByFilter(a, f, c, d, g);if (d && f) return f;h = d ? f : h.concat(f);
      }return h;
    }, getPreNode: function getPreNode(a, b) {
      if (!b) return null;for (var c = b.parentTId ? b.getParentNode() : e.getRoot(a), c = e.nodeChildren(a, c), d = 0, g = c.length; d < g; d++) {
        if (c[d] === b) return d == 0 ? null : c[d - 1];
      }return null;
    }, getRoot: function getRoot(a) {
      return a ? v[a.treeId] : null;
    }, getRoots: function getRoots() {
      return v;
    }, getSetting: function getSetting(a) {
      return s[a];
    }, getSettings: function getSettings() {
      return s;
    }, getZTreeTools: function getZTreeTools(a) {
      return (a = this.getRoot(this.getSetting(a))) ? a.treeTools : null;
    }, initCache: function initCache(a) {
      for (var b = 0, c = z.length; b < c; b++) {
        z[b].apply(this, arguments);
      }
    }, initNode: function initNode(a, b, c, d, e, h) {
      for (var k = 0, f = A.length; k < f; k++) {
        A[k].apply(this, arguments);
      }
    }, initRoot: function initRoot(a) {
      for (var b = 0, c = B.length; b < c; b++) {
        B[b].apply(this, arguments);
      }
    },
    isSelectedNode: function isSelectedNode(a, b) {
      for (var c = e.getRoot(a), d = 0, g = c.curSelectedList.length; d < g; d++) {
        if (b === c.curSelectedList[d]) return !0;
      }return !1;
    }, nodeChildren: function nodeChildren(a, b, c) {
      if (!b) return null;a = a.data.key.children;typeof c !== "undefined" && (b[a] = c);return b[a];
    }, nodeIsParent: function nodeIsParent(a, b, c) {
      if (!b) return !1;a = a.data.key.isParent;typeof c !== "undefined" && (typeof c === "string" && (c = j.eqs(c, "true")), b[a] = !!c);return b[a];
    }, nodeName: function nodeName(a, b, c) {
      a = a.data.key.name;typeof c !== "undefined" && (b[a] = c);return "" + b[a];
    }, nodeTitle: function nodeTitle(a, b) {
      return "" + b[a.data.key.title === "" ? a.data.key.name : a.data.key.title];
    }, removeNodeCache: function removeNodeCache(a, b) {
      var c = e.nodeChildren(a, b);if (c) for (var d = 0, g = c.length; d < g; d++) {
        e.removeNodeCache(a, c[d]);
      }e.getCache(a).nodes[e.getNodeCacheId(b.tId)] = null;
    }, removeSelectedNode: function removeSelectedNode(a, b) {
      for (var c = e.getRoot(a), d = 0, g = c.curSelectedList.length; d < g; d++) {
        if (b === c.curSelectedList[d] || !e.getNodeCache(a, c.curSelectedList[d].tId)) c.curSelectedList.splice(d, 1), a.treeObj.trigger(f.event.UNSELECTED, [a.treeId, b]), d--, g--;
      }
    }, setCache: function setCache(a, b) {
      w[a.treeId] = b;
    }, setRoot: function setRoot(a, b) {
      v[a.treeId] = b;
    }, setZTreeTools: function setZTreeTools(a, b) {
      for (var c = 0, d = G.length; c < d; c++) {
        G[c].apply(this, arguments);
      }
    }, transformToArrayFormat: function transformToArrayFormat(a, b) {
      function c(b) {
        d.push(b);(b = e.nodeChildren(a, b)) && (d = d.concat(e.transformToArrayFormat(a, b)));
      }if (!b) return [];var d = [];if (j.isArray(b)) for (var g = 0, h = b.length; g < h; g++) {
        c(b[g]);
      } else c(b);return d;
    }, transformTozTreeFormat: function transformTozTreeFormat(a, b) {
      var c,
          d,
          g = a.data.simpleData.idKey,
          h = a.data.simpleData.pIdKey;if (!g || g == "" || !b) return [];if (j.isArray(b)) {
        var k = [],
            f = {};for (c = 0, d = b.length; c < d; c++) {
          f[b[c][g]] = b[c];
        }for (c = 0, d = b.length; c < d; c++) {
          var i = f[b[c][h]];if (i && b[c][g] != b[c][h]) {
            var o = e.nodeChildren(a, i);o || (o = e.nodeChildren(a, i, []));o.push(b[c]);
          } else k.push(b[c]);
        }return k;
      } else return [b];
    } },
      n = { bindEvent: function bindEvent(a) {
      for (var b = 0, c = x.length; b < c; b++) {
        x[b].apply(this, arguments);
      }
    }, unbindEvent: function unbindEvent(a) {
      for (var b = 0, c = y.length; b < c; b++) {
        y[b].apply(this, arguments);
      }
    }, bindTree: function bindTree(a) {
      var b = { treeId: a.treeId },
          c = a.treeObj;a.view.txtSelectedEnable || c.bind("selectstart", u).css({ "-moz-user-select": "-moz-none" });c.bind("click", b, n.proxy);c.bind("dblclick", b, n.proxy);c.bind("mouseover", b, n.proxy);c.bind("mouseout", b, n.proxy);c.bind("mousedown", b, n.proxy);c.bind("mouseup", b, n.proxy);c.bind("contextmenu", b, n.proxy);
    }, unbindTree: function unbindTree(a) {
      a.treeObj.unbind("selectstart", u).unbind("click", n.proxy).unbind("dblclick", n.proxy).unbind("mouseover", n.proxy).unbind("mouseout", n.proxy).unbind("mousedown", n.proxy).unbind("mouseup", n.proxy).unbind("contextmenu", n.proxy);
    }, doProxy: function doProxy(a) {
      for (var b = [], c = 0, d = t.length; c < d; c++) {
        var e = t[c].apply(this, arguments);b.push(e);if (e.stop) break;
      }return b;
    }, proxy: function proxy(a) {
      var b = e.getSetting(a.data.treeId);if (!j.uCanDo(b, a)) return !0;for (var b = n.doProxy(a), c = !0, d = 0, g = b.length; d < g; d++) {
        var h = b[d];h.nodeEventCallback && (c = h.nodeEventCallback.apply(h, [a, h.node]) && c);h.treeEventCallback && (c = h.treeEventCallback.apply(h, [a, h.node]) && c);
      }return c;
    } };H = function H(a, b) {
    var c = e.getSetting(a.data.treeId);if (b.open) {
      if (j.apply(c.callback.beforeCollapse, [c.treeId, b], !0) == !1) return !0;
    } else if (j.apply(c.callback.beforeExpand, [c.treeId, b], !0) == !1) return !0;e.getRoot(c).expandTriggerFlag = !0;i.switchNode(c, b);return !0;
  };I = function I(a, b) {
    var c = e.getSetting(a.data.treeId),
        d = c.view.autoCancelSelected && (a.ctrlKey || a.metaKey) && e.isSelectedNode(c, b) ? 0 : c.view.autoCancelSelected && (a.ctrlKey || a.metaKey) && c.view.selectedMulti ? 2 : 1;if (j.apply(c.callback.beforeClick, [c.treeId, b, d], !0) == !1) return !0;d === 0 ? i.cancelPreSelectedNode(c, b) : i.selectNode(c, b, d === 2);c.treeObj.trigger(f.event.CLICK, [a, c.treeId, b, d]);return !0;
  };J = function J(a, b) {
    var c = e.getSetting(a.data.treeId);j.apply(c.callback.beforeMouseDown, [c.treeId, b], !0) && j.apply(c.callback.onMouseDown, [a, c.treeId, b]);return !0;
  };K = function K(a, b) {
    var c = e.getSetting(a.data.treeId);j.apply(c.callback.beforeMouseUp, [c.treeId, b], !0) && j.apply(c.callback.onMouseUp, [a, c.treeId, b]);return !0;
  };L = function L(a, b) {
    var c = e.getSetting(a.data.treeId);j.apply(c.callback.beforeDblClick, [c.treeId, b], !0) && j.apply(c.callback.onDblClick, [a, c.treeId, b]);return !0;
  };
  M = function M(a, b) {
    var c = e.getSetting(a.data.treeId);j.apply(c.callback.beforeRightClick, [c.treeId, b], !0) && j.apply(c.callback.onRightClick, [a, c.treeId, b]);return typeof c.callback.onRightClick != "function";
  };u = function u(a) {
    a = a.originalEvent.srcElement.nodeName.toLowerCase();return a === "input" || a === "textarea";
  };var j = { apply: function apply(a, b, c) {
      return typeof a == "function" ? a.apply(O, b ? b : []) : c;
    }, canAsync: function canAsync(a, b) {
      var c = e.nodeChildren(a, b),
          d = e.nodeIsParent(a, b);return a.async.enable && b && d && !(b.zAsync || c && c.length > 0);
    }, clone: function clone(a) {
      if (a === null) return null;var b = j.isArray(a) ? [] : {},
          c;for (c in a) {
        b[c] = a[c] instanceof Date ? new Date(a[c].getTime()) : _typeof(a[c]) === "object" ? j.clone(a[c]) : a[c];
      }return b;
    }, eqs: function eqs(a, b) {
      return a.toLowerCase() === b.toLowerCase();
    }, isArray: function isArray(a) {
      return Object.prototype.toString.apply(a) === "[object Array]";
    }, isElement: function isElement(a) {
      return (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object" ? a instanceof HTMLElement : a && (typeof a === "undefined" ? "undefined" : _typeof(a)) === "object" && a !== null && a.nodeType === 1 && typeof a.nodeName === "string";
    }, $: function $(a, b, c) {
      b && typeof b != "string" && (c = b, b = "");return typeof a == "string" ? q(a, c ? c.treeObj.get(0).ownerDocument : null) : q("#" + a.tId + b, c ? c.treeObj : null);
    }, getMDom: function getMDom(a, b, c) {
      if (!b) return null;for (; b && b.id !== a.treeId;) {
        for (var d = 0, e = c.length; b.tagName && d < e; d++) {
          if (j.eqs(b.tagName, c[d].tagName) && b.getAttribute(c[d].attrName) !== null) return b;
        }b = b.parentNode;
      }return null;
    }, getNodeMainDom: function getNodeMainDom(a) {
      return q(a).parent("li").get(0) || q(a).parentsUntil("li").parent().get(0);
    }, isChildOrSelf: function isChildOrSelf(a, b) {
      return q(a).closest("#" + b).length > 0;
    }, uCanDo: function uCanDo() {
      return !0;
    } },
      i = { addNodes: function addNodes(a, b, c, d, g) {
      var h = e.nodeIsParent(a, b);if (!a.data.keep.leaf || !b || h) if (j.isArray(d) || (d = [d]), a.data.simpleData.enable && (d = e.transformTozTreeFormat(a, d)), b) {
        var h = l(b, f.id.SWITCH, a),
            k = l(b, f.id.ICON, a),
            m = l(b, f.id.UL, a);if (!b.open) i.replaceSwitchClass(b, h, f.folder.CLOSE), i.replaceIcoClass(b, k, f.folder.CLOSE), b.open = !1, m.css({ display: "none" });e.addNodesData(a, b, c, d);i.createNodes(a, b.level + 1, d, b, c);g || i.expandCollapseParentNode(a, b, !0);
      } else e.addNodesData(a, e.getRoot(a), c, d), i.createNodes(a, 0, d, null, c);
    }, appendNodes: function appendNodes(a, b, c, d, g, h, k) {
      if (!c) return [];var f = [],
          j = d ? d : e.getRoot(a),
          j = e.nodeChildren(a, j),
          o,
          l;if (!j || g >= j.length - c.length) g = -1;for (var n = 0, Q = c.length; n < Q; n++) {
        var p = c[n];h && (o = (g === 0 || j.length == c.length) && n == 0, l = g < 0 && n == c.length - 1, e.initNode(a, b, p, d, o, l, k), e.addNodeCache(a, p));o = e.nodeIsParent(a, p);l = [];var q = e.nodeChildren(a, p);q && q.length > 0 && (l = i.appendNodes(a, b + 1, q, p, -1, h, k && p.open));k && (i.makeDOMNodeMainBefore(f, a, p), i.makeDOMNodeLine(f, a, p), e.getBeforeA(a, p, f), i.makeDOMNodeNameBefore(f, a, p), e.getInnerBeforeA(a, p, f), i.makeDOMNodeIcon(f, a, p), e.getInnerAfterA(a, p, f), i.makeDOMNodeNameAfter(f, a, p), e.getAfterA(a, p, f), o && p.open && i.makeUlHtml(a, p, f, l.join("")), i.makeDOMNodeMainAfter(f, a, p), e.addCreatedNode(a, p));
      }return f;
    }, appendParentULDom: function appendParentULDom(a, b) {
      var c = [],
          d = l(b, a);!d.get(0) && b.parentTId && (i.appendParentULDom(a, b.getParentNode()), d = l(b, a));var g = l(b, f.id.UL, a);g.get(0) && g.remove();g = e.nodeChildren(a, b);g = i.appendNodes(a, b.level + 1, g, b, -1, !1, !0);i.makeUlHtml(a, b, c, g.join(""));d.append(c.join(""));
    }, asyncNode: function asyncNode(a, b, c, d) {
      var g, h;g = e.nodeIsParent(a, b);if (b && !g) return j.apply(d), !1;else if (b && b.isAjaxing) return !1;else if (j.apply(a.callback.beforeAsync, [a.treeId, b], !0) == !1) return j.apply(d), !1;if (b) b.isAjaxing = !0, l(b, f.id.ICON, a).attr({ style: "", "class": f.className.BUTTON + " " + f.className.ICO_LOADING });var k = {},
          m = j.apply(a.async.autoParam, [a.treeId, b], a.async.autoParam);for (g = 0, h = m.length; b && g < h; g++) {
        var r = m[g].split("="),
            o = r;r.length > 1 && (o = r[1], r = r[0]);k[o] = b[r];
      }m = j.apply(a.async.otherParam, [a.treeId, b], a.async.otherParam);if (j.isArray(m)) for (g = 0, h = m.length; g < h; g += 2) {
        k[m[g]] = m[g + 1];
      } else for (var n in m) {
        k[n] = m[n];
      }var P = e.getRoot(a)._ver;q.ajax({ contentType: a.async.contentType, cache: !1, type: a.async.type, url: j.apply(a.async.url, [a.treeId, b], a.async.url), data: a.async.contentType.indexOf("application/json") > -1 ? JSON.stringify(k) : k, dataType: a.async.dataType, success: function success(h) {
          if (P == e.getRoot(a)._ver) {
            var k = [];try {
              k = !h || h.length == 0 ? [] : typeof h == "string" ? eval("(" + h + ")") : h;
            } catch (g) {
              k = h;
            }if (b) b.isAjaxing = null, b.zAsync = !0;i.setNodeLineIcos(a, b);k && k !== "" ? (k = j.apply(a.async.dataFilter, [a.treeId, b, k], k), i.addNodes(a, b, -1, k ? j.clone(k) : [], !!c)) : i.addNodes(a, b, -1, [], !!c);a.treeObj.trigger(f.event.ASYNC_SUCCESS, [a.treeId, b, h]);j.apply(d);
          }
        }, error: function error(c, d, h) {
          if (P == e.getRoot(a)._ver) {
            if (b) b.isAjaxing = null;i.setNodeLineIcos(a, b);a.treeObj.trigger(f.event.ASYNC_ERROR, [a.treeId, b, c, d, h]);
          }
        } });return !0;
    }, cancelPreSelectedNode: function cancelPreSelectedNode(a, b, c) {
      var d = e.getRoot(a).curSelectedList,
          g,
          h;for (g = d.length - 1; g >= 0; g--) {
        if (h = d[g], b === h || !b && (!c || c !== h)) if (l(h, f.id.A, a).removeClass(f.node.CURSELECTED), b) {
          e.removeSelectedNode(a, b);break;
        } else d.splice(g, 1), a.treeObj.trigger(f.event.UNSELECTED, [a.treeId, h]);
      }
    }, createNodeCallback: function createNodeCallback(a) {
      if (a.callback.onNodeCreated || a.view.addDiyDom) for (var b = e.getRoot(a); b.createdNodes.length > 0;) {
        var c = b.createdNodes.shift();j.apply(a.view.addDiyDom, [a.treeId, c]);a.callback.onNodeCreated && a.treeObj.trigger(f.event.NODECREATED, [a.treeId, c]);
      }
    }, createNodes: function createNodes(a, b, c, d, g) {
      if (c && c.length != 0) {
        var h = e.getRoot(a),
            k = !d || d.open || !!l(e.nodeChildren(a, d)[0], a).get(0);h.createdNodes = [];var b = i.appendNodes(a, b, c, d, g, !0, k),
            m,
            j;d ? (d = l(d, f.id.UL, a), d.get(0) && (m = d)) : m = a.treeObj;m && (g >= 0 && (j = m.children()[g]), g >= 0 && j ? q(j).before(b.join("")) : m.append(b.join("")));i.createNodeCallback(a);
      }
    }, destroy: function destroy(a) {
      a && (e.initCache(a), e.initRoot(a), n.unbindTree(a), n.unbindEvent(a), a.treeObj.empty(), delete s[a.treeId]);
    }, expandCollapseNode: function expandCollapseNode(a, b, c, d, g) {
      var h = e.getRoot(a),
          k;if (b) {
        var m = e.nodeChildren(a, b),
            r = e.nodeIsParent(a, b);if (h.expandTriggerFlag) k = g, g = function g() {
          k && k();b.open ? a.treeObj.trigger(f.event.EXPAND, [a.treeId, b]) : a.treeObj.trigger(f.event.COLLAPSE, [a.treeId, b]);
        }, h.expandTriggerFlag = !1;if (!b.open && r && (!l(b, f.id.UL, a).get(0) || m && m.length > 0 && !l(m[0], a).get(0))) i.appendParentULDom(a, b), i.createNodeCallback(a);if (b.open == c) j.apply(g, []);else {
          var c = l(b, f.id.UL, a),
              h = l(b, f.id.SWITCH, a),
              o = l(b, f.id.ICON, a);r ? (b.open = !b.open, b.iconOpen && b.iconClose && o.attr("style", i.makeNodeIcoStyle(a, b)), b.open ? (i.replaceSwitchClass(b, h, f.folder.OPEN), i.replaceIcoClass(b, o, f.folder.OPEN), d == !1 || a.view.expandSpeed == "" ? (c.show(), j.apply(g, [])) : m && m.length > 0 ? c.slideDown(a.view.expandSpeed, g) : (c.show(), j.apply(g, []))) : (i.replaceSwitchClass(b, h, f.folder.CLOSE), i.replaceIcoClass(b, o, f.folder.CLOSE), d == !1 || a.view.expandSpeed == "" || !(m && m.length > 0) ? (c.hide(), j.apply(g, [])) : c.slideUp(a.view.expandSpeed, g))) : j.apply(g, []);
        }
      } else j.apply(g, []);
    }, expandCollapseParentNode: function expandCollapseParentNode(a, b, c, d, e) {
      b && (b.parentTId ? (i.expandCollapseNode(a, b, c, d), b.parentTId && i.expandCollapseParentNode(a, b.getParentNode(), c, d, e)) : i.expandCollapseNode(a, b, c, d, e));
    }, expandCollapseSonNode: function expandCollapseSonNode(a, b, c, d, g) {
      var h = e.getRoot(a),
          h = b ? e.nodeChildren(a, b) : e.nodeChildren(a, h),
          k = b ? !1 : d,
          f = e.getRoot(a).expandTriggerFlag;e.getRoot(a).expandTriggerFlag = !1;if (h) for (var j = 0, l = h.length; j < l; j++) {
        h[j] && i.expandCollapseSonNode(a, h[j], c, k);
      }e.getRoot(a).expandTriggerFlag = f;i.expandCollapseNode(a, b, c, d, g);
    }, isSelectedNode: function isSelectedNode(a, b) {
      if (!b) return !1;var c = e.getRoot(a).curSelectedList,
          d;for (d = c.length - 1; d >= 0; d--) {
        if (b === c[d]) return !0;
      }return !1;
    }, makeDOMNodeIcon: function makeDOMNodeIcon(a, b, c) {
      var d = e.nodeName(b, c),
          d = b.view.nameIsHTML ? d : d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");a.push("<span id='", c.tId, f.id.ICON, "' title='' treeNode", f.id.ICON, " class='", i.makeNodeIcoClass(b, c), "' style='", i.makeNodeIcoStyle(b, c), "'></span><span id='", c.tId, f.id.SPAN, "' class='", f.className.NAME, "'>", d, "</span>");
    }, makeDOMNodeLine: function makeDOMNodeLine(a, b, c) {
      a.push("<span id='", c.tId, f.id.SWITCH, "' title='' class='", i.makeNodeLineClass(b, c), "' treeNode", f.id.SWITCH, "></span>");
    }, makeDOMNodeMainAfter: function makeDOMNodeMainAfter(a) {
      a.push("</li>");
    }, makeDOMNodeMainBefore: function makeDOMNodeMainBefore(a, b, c) {
      a.push("<li id='", c.tId, "' class='", f.className.LEVEL, c.level, "' tabindex='0' hidefocus='true' treenode>");
    }, makeDOMNodeNameAfter: function makeDOMNodeNameAfter(a) {
      a.push("</a>");
    }, makeDOMNodeNameBefore: function makeDOMNodeNameBefore(a, b, c) {
      var d = e.nodeTitle(b, c),
          g = i.makeNodeUrl(b, c),
          h = i.makeNodeFontCss(b, c),
          k = [],
          m;for (m in h) {
        k.push(m, ":", h[m], ";");
      }a.push("<a id='", c.tId, f.id.A, "' class='", f.className.LEVEL, c.level, "' treeNode", f.id.A, ' onclick="', c.click || "", '" ', g != null && g.length > 0 ? "href='" + g + "'" : "", " target='", i.makeNodeTarget(c), "' style='", k.join(""), "'");j.apply(b.view.showTitle, [b.treeId, c], b.view.showTitle) && d && a.push("title='", d.replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), "'");a.push(">");
    }, makeNodeFontCss: function makeNodeFontCss(a, b) {
      var c = j.apply(a.view.fontCss, [a.treeId, b], a.view.fontCss);return c && typeof c != "function" ? c : {};
    }, makeNodeIcoClass: function makeNodeIcoClass(a, b) {
      var c = ["ico"];if (!b.isAjaxing) {
        var d = e.nodeIsParent(a, b);c[0] = (b.iconSkin ? b.iconSkin + "_" : "") + c[0];d ? c.push(b.open ? f.folder.OPEN : f.folder.CLOSE) : c.push(f.folder.DOCU);
      }return f.className.BUTTON + " " + c.join("_");
    }, makeNodeIcoStyle: function makeNodeIcoStyle(a, b) {
      var c = [];if (!b.isAjaxing) {
        var d = e.nodeIsParent(a, b) && b.iconOpen && b.iconClose ? b.open ? b.iconOpen : b.iconClose : b[a.data.key.icon];d && c.push("background:url(", d, ") 0 0 no-repeat;");(a.view.showIcon == !1 || !j.apply(a.view.showIcon, [a.treeId, b], !0)) && c.push("width:0px;height:0px;");
      }return c.join("");
    }, makeNodeLineClass: function makeNodeLineClass(a, b) {
      var c = [];a.view.showLine ? b.level == 0 && b.isFirstNode && b.isLastNode ? c.push(f.line.ROOT) : b.level == 0 && b.isFirstNode ? c.push(f.line.ROOTS) : b.isLastNode ? c.push(f.line.BOTTOM) : c.push(f.line.CENTER) : c.push(f.line.NOLINE);e.nodeIsParent(a, b) ? c.push(b.open ? f.folder.OPEN : f.folder.CLOSE) : c.push(f.folder.DOCU);return i.makeNodeLineClassEx(b) + c.join("_");
    }, makeNodeLineClassEx: function makeNodeLineClassEx(a) {
      return f.className.BUTTON + " " + f.className.LEVEL + a.level + " " + f.className.SWITCH + " ";
    }, makeNodeTarget: function makeNodeTarget(a) {
      return a.target || "_blank";
    }, makeNodeUrl: function makeNodeUrl(a, b) {
      var c = a.data.key.url;return b[c] ? b[c] : null;
    }, makeUlHtml: function makeUlHtml(a, b, c, d) {
      c.push("<ul id='", b.tId, f.id.UL, "' class='", f.className.LEVEL, b.level, " ", i.makeUlLineClass(a, b), "' style='display:", b.open ? "block" : "none", "'>");c.push(d);c.push("</ul>");
    }, makeUlLineClass: function makeUlLineClass(a, b) {
      return a.view.showLine && !b.isLastNode ? f.line.LINE : "";
    }, removeChildNodes: function removeChildNodes(a, b) {
      if (b) {
        var c = e.nodeChildren(a, b);if (c) {
          for (var d = 0, g = c.length; d < g; d++) {
            e.removeNodeCache(a, c[d]);
          }e.removeSelectedNode(a);delete b[a.data.key.children];a.data.keep.parent ? l(b, f.id.UL, a).empty() : (e.nodeIsParent(a, b, !1), b.open = !1, c = l(b, f.id.SWITCH, a), d = l(b, f.id.ICON, a), i.replaceSwitchClass(b, c, f.folder.DOCU), i.replaceIcoClass(b, d, f.folder.DOCU), l(b, f.id.UL, a).remove());
        }
      }
    }, scrollIntoView: function scrollIntoView(a, b) {
      if (b) if (typeof Element === "undefined") {
        var c = a.treeObj.get(0).getBoundingClientRect(),
            d = b.getBoundingClientRect();(d.top < c.top || d.bottom > c.bottom || d.right > c.right || d.left < c.left) && b.scrollIntoView();
      } else {
        if (!Element.prototype.scrollIntoViewIfNeeded) Element.prototype.scrollIntoViewIfNeeded = function (a) {
          function b(a, c, d, f) {
            return { left: a, top: c, width: d, height: f, right: a + d, bottom: c + f, translate: function translate(e, g) {
                return b(e + a, g + c, d, f);
              }, relativeFromTo: function relativeFromTo(g, k) {
                var i = a,
                    j = c,
                    g = g.offsetParent,
                    k = k.offsetParent;if (g === k) return e;for (; g; g = g.offsetParent) {
                  i += g.offsetLeft + g.clientLeft, j += g.offsetTop + g.clientTop;
                }for (; k; k = k.offsetParent) {
                  i -= k.offsetLeft + k.clientLeft, j -= k.offsetTop + k.clientTop;
                }return b(i, j, d, f);
              } };
          }for (var c, d = this, e = b(this.offsetLeft, this.offsetTop, this.offsetWidth, this.offsetHeight); j.isElement(c = d.parentNode);) {
            var f = c.offsetLeft + c.clientLeft,
                i = c.offsetTop + c.clientTop,
                e = e.relativeFromTo(d, c).translate(-f, -i);c.scrollLeft = !1 === a || e.left <= c.scrollLeft + c.clientWidth && c.scrollLeft <= e.right - c.clientWidth + c.clientWidth ? Math.min(e.left, Math.max(e.right - c.clientWidth, c.scrollLeft)) : (e.right - c.clientWidth + e.left) / 2;c.scrollTop = !1 === a || e.top <= c.scrollTop + c.clientHeight && c.scrollTop <= e.bottom - c.clientHeight + c.clientHeight ? Math.min(e.top, Math.max(e.bottom - c.clientHeight, c.scrollTop)) : (e.bottom - c.clientHeight + e.top) / 2;e = e.translate(f - c.scrollLeft, i - c.scrollTop);d = c;
          }
        };b.scrollIntoViewIfNeeded();
      }
    }, setFirstNode: function setFirstNode(a, b) {
      var c = e.nodeChildren(a, b);if (c.length > 0) c[0].isFirstNode = !0;
    }, setLastNode: function setLastNode(a, b) {
      var c = e.nodeChildren(a, b);if (c.length > 0) c[c.length - 1].isLastNode = !0;
    }, removeNode: function removeNode(a, b) {
      var c = e.getRoot(a),
          d = b.parentTId ? b.getParentNode() : c;b.isFirstNode = !1;b.isLastNode = !1;b.getPreNode = function () {
        return null;
      };b.getNextNode = function () {
        return null;
      };if (e.getNodeCache(a, b.tId)) {
        l(b, a).remove();e.removeNodeCache(a, b);e.removeSelectedNode(a, b);for (var g = e.nodeChildren(a, d), h = 0, k = g.length; h < k; h++) {
          if (g[h].tId == b.tId) {
            g.splice(h, 1);break;
          }
        }i.setFirstNode(a, d);i.setLastNode(a, d);var j,
            h = g.length;if (!a.data.keep.parent && h == 0) e.nodeIsParent(a, d, !1), d.open = !1, delete d[a.data.key.children], h = l(d, f.id.UL, a), k = l(d, f.id.SWITCH, a), j = l(d, f.id.ICON, a), i.replaceSwitchClass(d, k, f.folder.DOCU), i.replaceIcoClass(d, j, f.folder.DOCU), h.css("display", "none");else if (a.view.showLine && h > 0) {
          var r = g[h - 1],
              h = l(r, f.id.UL, a),
              k = l(r, f.id.SWITCH, a);j = l(r, f.id.ICON, a);d == c ? g.length == 1 ? i.replaceSwitchClass(r, k, f.line.ROOT) : (c = l(g[0], f.id.SWITCH, a), i.replaceSwitchClass(g[0], c, f.line.ROOTS), i.replaceSwitchClass(r, k, f.line.BOTTOM)) : i.replaceSwitchClass(r, k, f.line.BOTTOM);h.removeClass(f.line.LINE);
        }
      }
    }, replaceIcoClass: function replaceIcoClass(a, b, c) {
      if (b && !a.isAjaxing && (a = b.attr("class"), a != void 0)) {
        a = a.split("_");switch (c) {case f.folder.OPEN:case f.folder.CLOSE:case f.folder.DOCU:
            a[a.length - 1] = c;}b.attr("class", a.join("_"));
      }
    }, replaceSwitchClass: function replaceSwitchClass(a, b, c) {
      if (b) {
        var d = b.attr("class");if (d != void 0) {
          d = d.split("_");switch (c) {case f.line.ROOT:case f.line.ROOTS:case f.line.CENTER:case f.line.BOTTOM:case f.line.NOLINE:
              d[0] = i.makeNodeLineClassEx(a) + c;break;case f.folder.OPEN:case f.folder.CLOSE:case f.folder.DOCU:
              d[1] = c;}b.attr("class", d.join("_"));c !== f.folder.DOCU ? b.removeAttr("disabled") : b.attr("disabled", "disabled");
        }
      }
    }, selectNode: function selectNode(a, b, c) {
      c || i.cancelPreSelectedNode(a, null, b);l(b, f.id.A, a).addClass(f.node.CURSELECTED);e.addSelectedNode(a, b);a.treeObj.trigger(f.event.SELECTED, [a.treeId, b]);
    }, setNodeFontCss: function setNodeFontCss(a, b) {
      var c = l(b, f.id.A, a),
          d = i.makeNodeFontCss(a, b);d && c.css(d);
    }, setNodeLineIcos: function setNodeLineIcos(a, b) {
      if (b) {
        var c = l(b, f.id.SWITCH, a),
            d = l(b, f.id.UL, a),
            g = l(b, f.id.ICON, a),
            h = i.makeUlLineClass(a, b);h.length == 0 ? d.removeClass(f.line.LINE) : d.addClass(h);c.attr("class", i.makeNodeLineClass(a, b));e.nodeIsParent(a, b) ? c.removeAttr("disabled") : c.attr("disabled", "disabled");g.removeAttr("style");g.attr("style", i.makeNodeIcoStyle(a, b));g.attr("class", i.makeNodeIcoClass(a, b));
      }
    }, setNodeName: function setNodeName(a, b) {
      var c = e.nodeTitle(a, b),
          d = l(b, f.id.SPAN, a);d.empty();a.view.nameIsHTML ? d.html(e.nodeName(a, b)) : d.text(e.nodeName(a, b));j.apply(a.view.showTitle, [a.treeId, b], a.view.showTitle) && l(b, f.id.A, a).attr("title", !c ? "" : c);
    }, setNodeTarget: function setNodeTarget(a, b) {
      l(b, f.id.A, a).attr("target", i.makeNodeTarget(b));
    }, setNodeUrl: function setNodeUrl(a, b) {
      var c = l(b, f.id.A, a),
          d = i.makeNodeUrl(a, b);d == null || d.length == 0 ? c.removeAttr("href") : c.attr("href", d);
    }, switchNode: function switchNode(a, b) {
      b.open || !j.canAsync(a, b) ? i.expandCollapseNode(a, b, !b.open) : a.async.enable ? i.asyncNode(a, b) || i.expandCollapseNode(a, b, !b.open) : b && i.expandCollapseNode(a, b, !b.open);
    } };q.fn.zTree = { consts: { className: { BUTTON: "button", LEVEL: "level", ICO_LOADING: "ico_loading", SWITCH: "switch", NAME: "node_name" }, event: { NODECREATED: "ztree_nodeCreated", CLICK: "ztree_click", EXPAND: "ztree_expand", COLLAPSE: "ztree_collapse",
        ASYNC_SUCCESS: "ztree_async_success", ASYNC_ERROR: "ztree_async_error", REMOVE: "ztree_remove", SELECTED: "ztree_selected", UNSELECTED: "ztree_unselected" }, id: { A: "_a", ICON: "_ico", SPAN: "_span", SWITCH: "_switch", UL: "_ul" }, line: { ROOT: "root", ROOTS: "roots", CENTER: "center", BOTTOM: "bottom", NOLINE: "noline", LINE: "line" }, folder: { OPEN: "open", CLOSE: "close", DOCU: "docu" }, node: { CURSELECTED: "curSelectedNode" } }, _z: { tools: j, view: i, event: n, data: e }, getZTreeObj: function getZTreeObj(a) {
      return (a = e.getZTreeTools(a)) ? a : null;
    }, destroy: function destroy(a) {
      if (a && a.length > 0) i.destroy(e.getSetting(a));else for (var b in s) {
        i.destroy(s[b]);
      }
    }, init: function init(a, b, c) {
      var d = j.clone(N);q.extend(!0, d, b);d.treeId = a.attr("id");d.treeObj = a;d.treeObj.empty();s[d.treeId] = d;if (typeof document.body.style.maxHeight === "undefined") d.view.expandSpeed = "";e.initRoot(d);a = e.getRoot(d);c = c ? j.clone(j.isArray(c) ? c : [c]) : [];d.data.simpleData.enable ? e.nodeChildren(d, a, e.transformTozTreeFormat(d, c)) : e.nodeChildren(d, a, c);e.initCache(d);n.unbindTree(d);n.bindTree(d);n.unbindEvent(d);n.bindEvent(d);
      var g = { setting: d, addNodes: function addNodes(a, b, c, g) {
          function f() {
            i.addNodes(d, a, b, n, g == !0);
          }a || (a = null);var l = e.nodeIsParent(d, a);if (a && !l && d.data.keep.leaf) return null;l = parseInt(b, 10);isNaN(l) ? (g = !!c, c = b, b = -1) : b = l;if (!c) return null;var n = j.clone(j.isArray(c) ? c : [c]);j.canAsync(d, a) ? i.asyncNode(d, a, g, f) : f();return n;
        }, cancelSelectedNode: function cancelSelectedNode(a) {
          i.cancelPreSelectedNode(d, a);
        }, destroy: function destroy() {
          i.destroy(d);
        }, expandAll: function expandAll(a) {
          a = !!a;i.expandCollapseSonNode(d, null, a, !0);return a;
        }, expandNode: function expandNode(a, b, c, g, f) {
          function n() {
            var b = l(a, d).get(0);b && g !== !1 && i.scrollIntoView(d, b);
          }if (!a || !e.nodeIsParent(d, a)) return null;b !== !0 && b !== !1 && (b = !a.open);if ((f = !!f) && b && j.apply(d.callback.beforeExpand, [d.treeId, a], !0) == !1) return null;else if (f && !b && j.apply(d.callback.beforeCollapse, [d.treeId, a], !0) == !1) return null;b && a.parentTId && i.expandCollapseParentNode(d, a.getParentNode(), b, !1);if (b === a.open && !c) return null;e.getRoot(d).expandTriggerFlag = f;!j.canAsync(d, a) && c ? i.expandCollapseSonNode(d, a, b, !0, n) : (a.open = !b, i.switchNode(this.setting, a), n());return b;
        }, getNodes: function getNodes() {
          return e.getNodes(d);
        }, getNodeByParam: function getNodeByParam(a, b, c) {
          return !a ? null : e.getNodeByParam(d, c ? e.nodeChildren(d, c) : e.getNodes(d), a, b);
        }, getNodeByTId: function getNodeByTId(a) {
          return e.getNodeCache(d, a);
        }, getNodesByParam: function getNodesByParam(a, b, c) {
          return !a ? null : e.getNodesByParam(d, c ? e.nodeChildren(d, c) : e.getNodes(d), a, b);
        }, getNodesByParamFuzzy: function getNodesByParamFuzzy(a, b, c) {
          return !a ? null : e.getNodesByParamFuzzy(d, c ? e.nodeChildren(d, c) : e.getNodes(d), a, b);
        }, getNodesByFilter: function getNodesByFilter(a, b, c, f) {
          b = !!b;return !a || typeof a != "function" ? b ? null : [] : e.getNodesByFilter(d, c ? e.nodeChildren(d, c) : e.getNodes(d), a, b, f);
        }, getNodeIndex: function getNodeIndex(a) {
          if (!a) return null;for (var b = a.parentTId ? a.getParentNode() : e.getRoot(d), b = e.nodeChildren(d, b), c = 0, f = b.length; c < f; c++) {
            if (b[c] == a) return c;
          }return -1;
        }, getSelectedNodes: function getSelectedNodes() {
          for (var a = [], b = e.getRoot(d).curSelectedList, c = 0, f = b.length; c < f; c++) {
            a.push(b[c]);
          }return a;
        }, isSelectedNode: function isSelectedNode(a) {
          return e.isSelectedNode(d, a);
        }, reAsyncChildNodesPromise: function reAsyncChildNodesPromise(a, b, c) {
          return new Promise(function (d, e) {
            try {
              g.reAsyncChildNodes(a, b, c, function () {
                d(a);
              });
            } catch (f) {
              e(f);
            }
          });
        }, reAsyncChildNodes: function reAsyncChildNodes(a, b, c, g) {
          if (this.setting.async.enable) {
            var j = !a;j && (a = e.getRoot(d));if (b == "refresh") {
              for (var b = e.nodeChildren(d, a), n = 0, q = b ? b.length : 0; n < q; n++) {
                e.removeNodeCache(d, b[n]);
              }e.removeSelectedNode(d);e.nodeChildren(d, a, []);j ? this.setting.treeObj.empty() : l(a, f.id.UL, d).empty();
            }i.asyncNode(this.setting, j ? null : a, !!c, g);
          }
        }, refresh: function refresh() {
          this.setting.treeObj.empty();var a = e.getRoot(d),
              b = e.nodeChildren(d, a);e.initRoot(d);e.nodeChildren(d, a, b);e.initCache(d);i.createNodes(d, 0, e.nodeChildren(d, a), null, -1);
        }, removeChildNodes: function removeChildNodes(a) {
          if (!a) return null;var b = e.nodeChildren(d, a);i.removeChildNodes(d, a);return b ? b : null;
        }, removeNode: function removeNode(a, b) {
          a && (b = !!b, b && j.apply(d.callback.beforeRemove, [d.treeId, a], !0) == !1 || (i.removeNode(d, a), b && this.setting.treeObj.trigger(f.event.REMOVE, [d.treeId, a])));
        }, selectNode: function selectNode(a, b, c) {
          function e() {
            if (!c) {
              var b = l(a, d).get(0);i.scrollIntoView(d, b);
            }
          }if (a && j.uCanDo(d)) {
            b = d.view.selectedMulti && b;if (a.parentTId) i.expandCollapseParentNode(d, a.getParentNode(), !0, !1, e);else if (!c) try {
              l(a, d).focus().blur();
            } catch (f) {}i.selectNode(d, a, b);
          }
        }, transformTozTreeNodes: function transformTozTreeNodes(a) {
          return e.transformTozTreeFormat(d, a);
        }, transformToArray: function transformToArray(a) {
          return e.transformToArrayFormat(d, a);
        }, updateNode: function updateNode(a) {
          a && l(a, d).get(0) && j.uCanDo(d) && (i.setNodeName(d, a), i.setNodeTarget(d, a), i.setNodeUrl(d, a), i.setNodeLineIcos(d, a), i.setNodeFontCss(d, a));
        } };a.treeTools = g;e.setZTreeTools(d, g);(c = e.nodeChildren(d, a)) && c.length > 0 ? i.createNodes(d, 0, c, null, -1) : d.async.enable && d.async.url && d.async.url !== "" && i.asyncNode(d);return g;
    } };var O = q.fn.zTree,
      l = j.$,
      f = O.consts;
})(jQuery);

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(183);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3d096fcf", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-67830934\",\"scoped\":true,\"hasInlineConfig\":true}!./noTask.css", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-67830934\",\"scoped\":true,\"hasInlineConfig\":true}!./noTask.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.m-no-main[data-v-67830934] {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  width: 1200px;\r\n  height: 770px;\r\n  background: #fff;\r\n  margin: 0 auto;\r\n  padding: 282px 0 0 334px;\r\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n  -moz-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\n}\n.m-no-main .m-no-icon[data-v-67830934] {\r\n    float: left;\r\n    margin-right: 61px;\n}\n.m-no-main .m-no-txt[data-v-67830934] {\r\n    padding-top: 15px;\n}\n.m-no-main .m-no-txt p[data-v-67830934] {\r\n      margin-bottom: 17px;\n}\n.m-no-main .m-no-txt .line1[data-v-67830934] {\r\n      font-size: 30px;\r\n      color: #5D9CEC;\n}\n.m-no-main .m-no-txt .line2[data-v-67830934] {\r\n      font-size: 20px;\r\n      color: #999999;\r\n      margin-bottom: 29px;\n}\n.m-no-main .m-no-txt a[data-v-67830934] {\r\n      display: inline-block;\r\n      width: 160px;\r\n      height: 45px;\r\n      line-height: 45px;\r\n      text-align: center;\r\n      border-radius: 5px;\r\n      background: #5D9CEC;\r\n      color: #fff;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(185);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7a9f58c2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-67830934\",\"scoped\":true,\"hasInlineConfig\":true}!./singleQuestion.css", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-67830934\",\"scoped\":true,\"hasInlineConfig\":true}!./singleQuestion.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(19);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\ni[data-v-67830934] {\r\n  font-style: normal;\n}\n.m-main[data-v-67830934] {\r\n  position: relative;\r\n  width: 1200px;\r\n  min-height: 700px;\r\n  margin: 0 auto;\n}\n.m-main .paper-detail[data-v-67830934] {\r\n    position: relative;\r\n    z-index: 2;\r\n    float: left;\r\n    width: 722px;\r\n    min-height: 700px;\r\n    padding: 18px 39px 0 39px;\r\n    background-color: #fff;\r\n    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n    -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n    -moz-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n    overflow: auto;\n}\n.m-main .paper-detail .grades-select[data-v-67830934] {\r\n      font-size: 0;\r\n      margin-bottom: 21px;\n}\n.m-main .paper-detail .grades-select .radio-inline__input[data-v-67830934] {\r\n        clip: rect(1px, 1px, 1px, 1px);\r\n        position: absolute;\n}\n.m-main .paper-detail .grades-select .radio-inline__label[data-v-67830934] {\r\n        display: inline-block;\r\n        width: 161px;\r\n        height: 22px;\r\n        line-height: 22px;\r\n        margin: 6px 17px 0 0;\r\n        border-radius: 5px;\r\n        border: 1px solid #eeeeee;\r\n        font-size: 14px;\r\n        text-align: center;\r\n        color: #0f0f0f;\r\n        cursor: pointer;\n}\n.m-main .paper-detail .grades-select .radio-inline__label.active[data-v-67830934] {\r\n        background: #5d9cec;\r\n        border: 1px solid #eeeeee;\r\n        color: #fff;\n}\n.m-main .paper-detail .paper-content[data-v-67830934] {\r\n      margin-bottom: 25px;\r\n      color: #0f0f0f;\r\n      position: relative;\n}\n.m-main .paper-detail .paper-content .move[data-v-67830934] {\r\n        position: relative;\n}\n.m-main .paper-detail .paper-content .select-option[data-v-67830934] {\r\n        margin-top: 15px;\r\n        font-size: 0;\n}\n.m-main .paper-detail .paper-content .select-option .option[data-v-67830934] {\r\n          font-size: 14px;\r\n          margin-right: 53px;\n}\n.m-main .paper-detail .paper-content .hide-answer[data-v-67830934] {\r\n        display: block;\r\n        margin: 16px 0 12px 11px;\r\n        color: #169BD5;\r\n        font-size: 14px;\r\n        cursor: pointer;\n}\n.m-main .paper-detail .paper-content .paper-answer[data-v-67830934] {\r\n        display: none;\r\n        width: 686px;\r\n        min-height: 48px;\r\n        padding: 14px 10px 5px 10px;\r\n        margin-bottom: 15px;\r\n        background-color: #f2f2f2;\n}\n.m-main .paper-detail .paper-content .paper-answer .answer[data-v-67830934] {\r\n          margin-bottom: 20px;\r\n          font-size: 14px;\n}\n.m-main .paper-detail .paper-content .paper-answer .answer[data-v-67830934]:last-child {\r\n          margin-bottom: 0;\n}\n.m-main .paper-detail .paper-content .judge-paper-id[data-v-67830934] {\r\n        position: relative;\r\n        margin-bottom: 30px;\n}\n.m-main .paper-detail .paper-content .judge-paper-id .id-search[data-v-67830934] {\r\n          width: 130px;\r\n          height: 24px;\r\n          border-radius: 5px;\r\n          border: 1px solid #ddd;\r\n          text-indent: 5px;\r\n          float: right;\r\n          padding-right: 25px;\n}\n.m-main .paper-detail .paper-content .judge-paper-id .search-icon[data-v-67830934] {\r\n          background: url(" + escape(__webpack_require__(141)) + ") no-repeat;\r\n          background-size: cover;\r\n          width: 14px;\r\n          height: 14px;\r\n          position: absolute;\r\n          right: 10px;\r\n          top: 6px;\n}\n.m-main .paper-detail .paper-content .hide-answer[data-v-67830934] {\r\n        position: relative;\r\n        left: 6px;\r\n        color: #169BD5;\r\n        font-size: 14px;\r\n        cursor: pointer;\n}\n.m-main .paper-detail .paper-content .paper-answer[data-v-67830934] {\r\n        margin-top: 17px;\r\n        width: 700px;\r\n        min-height: 70px;\r\n        background-color: #f2f2f2;\n}\n.m-main .paper-detail .paper-content .paper-id[data-v-67830934] {\r\n        font-size: 14px;\r\n        color: #5D9CEC;\n}\n.m-main .paper-detail .paper-content .paper-id .paper-label[data-v-67830934] {\r\n          height: 25px;\r\n          line-height: 25px;\r\n          margin-left: 40px;\r\n          padding: 5px 20px 5px 10px;\r\n          background-color: #f68411;\r\n          border-radius: 20px;\r\n          font-size: 13px;\r\n          -webkit-box-shadow: 0 0 4px rgba(235, 99, 0, 0.3);\r\n                  box-shadow: 0 0 4px rgba(235, 99, 0, 0.3);\n}\n.m-main .paper-detail .paper-content .paper-id .paper-label i[data-v-67830934] {\r\n            color: #fff;\r\n            margin-right: 12px;\n}\n.m-main .paper-detail .paper-content .paper-id .paper-label i[data-v-67830934]:last-child {\r\n            margin-right: 0;\n}\n.m-main .paper-detail .paper-content .paper-info[data-v-67830934] {\r\n        font-size: 14px;\n}\n.m-main .paper-detail .paper-content .paper-info .title[data-v-67830934] {\r\n          margin-bottom: 15px;\r\n          color: #5d9cec;\n}\n.m-main .paper-detail .paper-content .paper-info .paper-label[data-v-67830934] {\r\n          display: inline-block;\r\n          height: 25px;\r\n          line-height: 25px;\r\n          padding: 0 20px;\r\n          margin-right: 20px;\r\n          border-radius: 13px;\r\n          border: 1px solid #5D9CEC;\r\n          background-color: #fff;\n}\n.m-main .paper-detail .paper-content .paper-info .paper-label i[data-v-67830934] {\r\n            color: #000;\r\n            margin-right: 15px;\n}\n.m-main .paper-detail .paper-content .paper-info .paper-label i[data-v-67830934]:last-child {\r\n              margin-right: 0;\n}\n.m-main .paper-detail .paper-content .paper-info .paper-label i.diff[data-v-67830934] {\r\n            color: #5D9CEC;\n}\n.m-main .paper-detail .paper-content .paper-info .paper-label[data-v-67830934]:last-child {\r\n          margin-right: 0;\n}\n.m-main .paper-detail .paper-content .judge-label-wrapper .judge-label[data-v-67830934] {\r\n        display: inline-block;\r\n        height: 25px;\r\n        line-height: 25px;\r\n        padding: 0 20px;\r\n        margin-top: 10px;\r\n        margin-right: 15px;\r\n        border-radius: 13px;\r\n        background-color: #fff;\r\n        border: 1px solid #f68411;\r\n        font-size: 14px;\n}\n.m-main .paper-detail .paper-content .judge-label-wrapper .judge-label i[data-v-67830934] {\r\n          color: #000;\r\n          margin-right: 15px;\n}\n.m-main .paper-detail .paper-content .judge-label-wrapper .judge-label i[data-v-67830934]:last-child {\r\n            margin-right: 0;\n}\n.m-main .paper-detail .paper-content .judge-label-wrapper .judge-label .diffrence[data-v-67830934] {\r\n          color: #f68411;\n}\n.m-main .paper-detail .paper-content .judge-label-wrapper .judge-label[data-v-67830934]:last-child {\r\n        margin-right: 0;\n}\n.paper-btn[data-v-67830934] {\r\n  position: relative;\r\n  padding: 30px 0 20px 0px;\r\n  width: 642px;\r\n  text-align: center;\n}\n.paper-btn .btn[data-v-67830934] {\r\n    width: 121px;\r\n    height: 41px;\r\n    border: 0;\r\n    border-radius: 10px;\r\n    outline: none;\n}\n.paper-btn .btn.paper-error[data-v-67830934] {\r\n    float: left;\r\n    border: 1px solid #f68411;\r\n    font-size: 16px;\r\n    color: #f68411;\r\n    background-color: #fff;\n}\n.paper-btn .btn.paper-error[data-v-67830934]:hover {\r\n    box-shadow: 1px 2px 8px rgba(235, 99, 0, 0.56);\r\n    -webkit-box-shadow: 1px 2px 8px rgba(235, 99, 0, 0.56);\r\n    -moz-box-shadow: 1px 2px 8px rgba(235, 99, 0, 0.56);\r\n    color: #fff;\r\n    background-color: #f68411;\n}\n.paper-btn .btn.paper-save[data-v-67830934] {\r\n    float: right;\r\n    border: 1px solid #4b89de;\r\n    font-size: 16px;\r\n    color: #fff;\r\n    text-align: center;\r\n    background-color: #4b89de;\n}\n.paper-btn .btn.paper-save[data-v-67830934]:hover,\r\n  .paper-btn .btn.paper-slip[data-v-67830934]:hover {\r\n    box-shadow: 1px 2px 8px rgba(75, 137, 222, 0.56);\r\n    -webkit-box-shadow: 1px 2px 8px rgba(75, 137, 222, 0.56);\r\n    -moz-box-shadow: 1px 2px 8px rgba(75, 137, 222, 0.56);\r\n    color: #fff;\r\n    background-color: #4b89de;\n}\n.paper-btn .btn.paper-slip[data-v-67830934] {\r\n    border: 1px solid #4b89de;\r\n    font-size: 16px;\r\n    color: #4b89de;\r\n    text-align: center;\r\n    background-color: #fff;\n}\n@media screen and (max-width: 1600px) {\n.paper-btn[data-v-67830934] {\r\n    padding: 30px 0 20px 250px;\n}\n}\n@media screen and (max-width: 1500px) {\n.paper-btn[data-v-67830934] {\r\n    padding: 30px 0 20px 110px;\n}\n}\r\n\r\n/* 单题完成 */\n.fnish-main[data-v-67830934] {\r\n  width: 1200px;\r\n  min-height: 700px;\r\n  margin: 0 auto;\r\n  background-color: #ffffff;\n}\n.fnish-main .count-wrapper[data-v-67830934] {\r\n    height: 50px;\r\n    line-height: 50px;\r\n    padding-left: 40px;\r\n    font-size: 0;\n}\n.fnish-main .count-wrapper .text[data-v-67830934] {\r\n      margin-right: 14px;\r\n      font-size: 14px;\r\n      color: #333333;\n}\n.fnish-main .count-wrapper .number[data-v-67830934] {\r\n      margin: 0 5px;\r\n      font-size: 16px;\n}\n.fnish-main .count-wrapper .number.n1[data-v-67830934] {\r\n      color: #5d9cec;\n}\n.fnish-main .count-wrapper .number.n2[data-v-67830934] {\r\n      font-weight: bold;\r\n      color: #f68411;\n}\n.fnish-main .sign[data-v-67830934] {\r\n    position: relative;\r\n    top: 99px;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n    width: 502px;\r\n    height: 348px;\r\n    background: url(" + escape(__webpack_require__(142)) + ") no-repeat;\r\n    background-size: 100%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_js_ztree_js_jquery_ztree_core_min_js__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_js_ztree_js_jquery_ztree_core_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_js_ztree_js_jquery_ztree_core_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_js_icheck_icheck_min_js__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_js_icheck_icheck_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_js_icheck_icheck_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_QuestionOptions__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_QuestionOptions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_QuestionOptions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_QuestionError__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_QuestionError___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_QuestionError__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(9);
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






/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'v-question-options': __WEBPACK_IMPORTED_MODULE_2__components_QuestionOptions___default.a,
        'v-question-error': __WEBPACK_IMPORTED_MODULE_3__components_QuestionError___default.a
    },
    data: function data() {
        return {
            errorShow: false,
            successShow: false,
            questionErrorShow: false,
            guideIsShow: false,
            guideIsDisable: false,
            isDisable: false,
            subjectIndex: 0,
            subjectId: 0,
            question: {},
            questionId: 0,
            labelList: [],
            questionOption: {
                questionNoFinishCount: 0,
                questionFinishCount: 0
            }
        };
    },

    methods: {
        subjectCheck: function subjectCheck(index) {
            var that = this;
            that.subjectIndex = index;
            that.subjectId = that.subjectList[index].subjectId;
            that.getQuestionInfo();
            that.$refs.questionType.getQuestionType(that.subjectId); //调用子组件方法
            that.$refs.questionType.getKnowledge(that.subjectId); //调用子组件方法
        },
        getQuestionInfo: function getQuestionInfo() {
            var that = this;
            axios.get("/label/question/getQuestionInfo", {
                params: {
                    userKey: that.userKey,
                    subjectId: that.subjectId
                }
            }).then(function (res) {
                that.question = res.data.data;
            }).catch(function (error) {
                that.$message.error(error.message);
            });
        },

        //获取是否有领取单题
        getQuestion: function getQuestion() {
            var that = this;
            axios.get('/label/question/getQuestion', {
                params: {
                    userKey: that.userKey
                }
            }).then(function (res) {
                if (Object.keys(res.data.data).length > 0) {
                    that.errorShow = true;
                    that.getQuestionInfo(); //获取套卷列表
                } else {
                    that.errorShow = false;
                }
            }).catch(function (error) {
                that.$message.error(error.message);
            });
        },
        showAnswer: function showAnswer(qid) {
            $('#questionShow_' + qid).next(".paper-answer").css('display') == 'block' ? $('#questionShow_' + qid).next(".paper-answer").hide() : $('#questionShow_' + qid).next(".paper-answer").show();
            $('#questionShow_' + qid).next(".paper-answer").css('display') == 'block' ? $('#questionShow_' + qid).html('隐藏答案') : $('#questionShow_' + qid).html('显示答案');
        },
        errorReport: function errorReport() {
            var that = this;
            that.questionId = Object.keys(that.question).length <= 0 ? 0 : that.question.ques_id;
            that.questionErrorShow = true;
            that.unboundSpace();
        },
        errorClose: function errorClose() {
            var that = this;
            that.questionErrorShow = false;
            that.boundSpace;
        },

        //跳过
        jumpQuestion: function jumpQuestion() {
            var that = this;
            if (that.question == null) {
                that.$message.error('抱歉，没有下一道了！');
                return false;
            }
            axios.get('/label/question/jumpQuestion', {
                params: {
                    userKey: that.userKey,
                    subjectId: that.subjectId,
                    questionId: that.question.ques_id
                }
            }).then(function (res) {
                if (res.status == 0) {
                    that.$message.error(res.errorMsg);
                    return false;
                }
                if (res.data.data == null) {
                    that.$message.error('抱歉，没有下一道了！');
                    return false;
                }
                that.question = res.data.data;
            }).catch(function (error) {
                that.$message.error(error.message);
            });
        },
        questionSave: function questionSave() {
            var that = this;
            if (that.question.ques_id <= 0) {
                that.$message.error('缺少试题id');return false;
            }
            if (that.$refs.questionType.nodeModel == null) {
                that.$message.error('请选择知识点');return false;
            }
            if (that.$refs.questionType.gradeId <= 0) {
                that.$message.error('请选择年级');return false;
            }
            if (that.$refs.questionType.difficultyId <= 0) {
                that.$message.error('请选择难度');return false;
            }
            if (that.$refs.questionType.typeId <= 0) {
                that.$message.error('请选择类型');return false;
            }
            if (that.$refs.questionType.questionTypeId <= 0) {
                that.$message.error('请选择题型');return false;
            }
            if (that.subjectId == 60 && that.$refs.questionType.questionCategoryId <= 0) {
                that.$message.error('请选择题类');return false;
            }
            that.isDisable = true;
            var obj = that.$qs.stringify({
                questionId: that.question.ques_id,
                paperId: that.question.paper_id,
                subjectId: that.subjectId,
                userKey: that.userKey,
                userType: 'teacher',
                questionType: 'question',
                knowledgeId: that.$refs.questionType.nodeModel.id, //知识点id
                knowledgeName: that.$refs.questionType.nodeModel.title, //知识点名称
                gradeId: that.$refs.questionType.gradeId, //年级id
                difficultyId: that.$refs.questionType.difficultyId, //难度id
                typeId: that.$refs.questionType.typeId, //类型id
                questionTypeId: that.$refs.questionType.questionTypeId, //题型id
                questionCategoryId: that.$refs.questionType.questionCategoryId, //题类id
                gradeName: that.$refs.questionType.gradeName, //年级名称
                difficultyName: that.$refs.questionType.difficultyName, //难度名称
                type: that.$refs.questionType.type, //类型名称
                questionTypeName: that.$refs.questionType.questionTypeName, //题型名称
                questionCategoryName: that.$refs.questionType.questionCategoryName //题类名称
            });
            axios.post("/label/question/questionSave", obj).then(function (res) {
                that.isDisable = false;
                if (res.data.status == 0) {
                    that.$message.error(res.data.errorMsg);return false;
                } else {
                    that.labelList = res.data.data;
                    that.successShow = true;
                    setTimeout(function () {
                        that.successShow = false;
                        that.labelList = []; //清空标签数组
                        that.jumpQuestion(); //获取试题列表
                        that.getQuestionCount(); //调用获取试题统计
                    }, 1000);
                }
            }).catch(function (error) {
                that.$message.error(error.message);
            });
        },
        getQuestionCount: function getQuestionCount() {
            var that = this;
            axios.get('/label/question/getQuestionCount', {
                params: {
                    userKey: that.userKey
                }
            }).then(function (res) {
                that.questionOption.questionNoFinishCount = res.data.data.questionNoFinishCount;
                that.questionOption.questionFinishCount = res.data.data.questionFinishCount;
            }).catch(function (error) {
                that.$message.error(error.message);
            });
        },
        checkIsRemind: function checkIsRemind() {
            var that = this;
            axios.get("/label/question/checkIsRemind", {
                params: {
                    userKey: that.userKey
                }
            }).then(function (res) {
                if (res.data.status == 0) {
                    that.guideIsShow = true;
                }
            });
        },
        addRemind: function addRemind() {
            var that = this;
            var obj = that.$qs.stringify({
                userKey: that.userKey
            });
            that.guideIsDisable = true;
            axios.post('/label/question/addRemind', obj).then(function (res) {
                that.guideIsDisable = false;
                if (res.data.status == 1) {
                    that.guideIsShow = false;
                }
            });
        },
        init: function init() {
            var that = this;
            axios.get("/label/common/getSubjects", { params: { userKey: that.userKey } }).then(function (res) {
                that.subjectId = res.data[that.subjectIndex].subjectId;
                that.getQuestion();
                that.getQuestionCount();
            });
        },
        spacePreventDefault: function spacePreventDefault(e) {
            e.preventDefault();
            var key = window.event.keyCode;
            if (key == 32) {
                this.questionSave();
            }
        },
        boundSpace: function boundSpace() {
            document.onkeydown = this.spacePreventDefault;
        },
        unboundSpace: function unboundSpace() {
            document.onkeydown = '';
        }
    },
    computed: _extends({
        questionShow: function questionShow() {
            var that = this;
            return Object.keys(that.question).length > 0 ? true : false;
        },
        labelShow: function labelShow() {
            var that = this;
            return Object.keys(that.labelList).length > 0 ? true : false;
        }
    }, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["c" /* mapGetters */])({
        userKey: 'getUserKey',
        subjectList: 'getSubject'
    })),
    mounted: function mounted() {
        var that = this;
        that.checkIsRemind();
        that.init();
    },
    created: function created() {
        document.onkeydown = this.spacePreventDefault;
    }
});

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.errorShow
    ? _c(
        "div",
        [
          _c(
            "div",
            { staticClass: "m-main" },
            [
              _c(
                "div",
                {
                  staticClass: "paper-detail",
                  staticStyle: { margin: "0px 0px 10px 0px" }
                },
                [
                  _c(
                    "p",
                    { staticClass: "grades-select" },
                    _vm._l(_vm.subjectList, function(subject, index) {
                      return _c(
                        "label",
                        {
                          staticClass: "radio-inline__label math",
                          class: { active: index == _vm.subjectIndex },
                          on: {
                            click: function($event) {
                              _vm.subjectCheck(index)
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
                  ),
                  _vm._v(" "),
                  _vm.questionShow
                    ? _c("div", { staticClass: "paper-content" }, [
                        _c("p", {
                          staticClass: "q-title",
                          domProps: {
                            innerHTML: _vm._s(_vm.question.ques_content)
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "hide-answer",
                            attrs: {
                              id: "questionShow_" + _vm.question.ques_id
                            },
                            on: {
                              click: function($event) {
                                _vm.showAnswer(_vm.question.ques_id)
                              }
                            }
                          },
                          [_vm._v("显示答案")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "paper-answer" }, [
                          _c("p", { staticClass: "answer" }, [
                            _vm._v("答案："),
                            _c("span", {
                              staticClass: "answer1",
                              domProps: {
                                innerHTML: _vm._s(_vm.question.ques_answer)
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "answer" }, [
                            _vm._v("解析："),
                            _c("span", {
                              staticClass: "answer2",
                              domProps: {
                                innerHTML: _vm._s(_vm.question.ques_analysis)
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "paper-id" }, [
                          _vm._v("题目ID："),
                          _c("span", [_vm._v(_vm._s(_vm.question.ques_id))]),
                          _vm._v(" "),
                          _vm.labelShow
                            ? _c(
                                "span",
                                { staticClass: "paper-label teacher" },
                                _vm._l(_vm.labelList, function(label) {
                                  return _c("i", { staticClass: "z-label" }, [
                                    _vm._v(_vm._s(label.tag_content))
                                  ])
                                })
                              )
                            : _vm._e()
                        ])
                      ])
                    : _c("div", [
                        _vm._v(
                          "\n                该学科下暂无任务\n            "
                        )
                      ])
                ]
              ),
              _vm._v(" "),
              _c("v-question-options", {
                ref: "questionType",
                attrs: {
                  subjectId: _vm.subjectId,
                  userKey: _vm.userKey,
                  questionNoFinishCount:
                    _vm.questionOption.questionNoFinishCount,
                  questionFinishCount: _vm.questionOption.questionFinishCount
                },
                on: {
                  boundSpace: _vm.boundSpace,
                  unBoundSpace: _vm.unboundSpace
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "paper-btn",
              staticStyle: {
                width: "1200px",
                margin: "30px auto",
                padding: "0 !important"
              }
            },
            [
              _c(
                "div",
                { staticStyle: { width: "722px", padding: "0 39px" } },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn paper-error",
                      on: { click: _vm.errorReport }
                    },
                    [_vm._v("报错")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn paper-slip",
                      on: { click: _vm.jumpQuestion }
                    },
                    [_vm._v("跳过")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn paper-save",
                      attrs: { id: "paperSave", disabled: _vm.isDisable },
                      on: { click: _vm.questionSave }
                    },
                    [_vm._v("保存")]
                  ),
                  _vm._v(" "),
                  _vm.guideIsShow
                    ? _c("div", { staticClass: "m-layer" }, [
                        _c("div", { staticClass: "guide-cover" }, [
                          _c(
                            "div",
                            {
                              staticClass: "btn-know",
                              attrs: { disabled: _vm.guideIsDisable },
                              on: { click: _vm.addRemind }
                            },
                            [_vm._v("知道了")]
                          )
                        ])
                      ])
                    : _vm._e()
                ]
              )
            ]
          ),
          _vm._v(" "),
          _vm.successShow
            ? _c("div", { staticClass: "status-success" }, [_vm._v("保存成功")])
            : _vm._e(),
          _vm._v(" "),
          _c("v-question-error", {
            attrs: {
              errorShow: _vm.questionErrorShow,
              questionId: _vm.questionId
            },
            on: { errorClose: _vm.errorClose }
          })
        ],
        1
      )
    : _c("div", { staticClass: "m-no-main" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "m-no-txt" },
          [
            _c("p", { staticClass: "line1" }, [_vm._v("矮油，没有领取任务")]),
            _vm._v(" "),
            _c("p", { staticClass: "line2" }, [_vm._v("快去领取任务吧...")]),
            _vm._v(" "),
            _c(
              "router-link",
              {
                attrs: {
                  to: { name: "tasks-task", params: { userKey: _vm.userKey } }
                }
              },
              [_vm._v("领取任务")]
            )
          ],
          1
        )
      ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "m-no-icon" }, [
      _c("img", {
        attrs: {
          src: __webpack_require__(115),
          alt: "无任务",
          width: "204",
          height: "181"
        }
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-67830934", module.exports)
  }
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(182)
  __webpack_require__(184)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(186)
/* template */
var __vue_template__ = __webpack_require__(187)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-67830934"
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
Component.options.__file = "resources\\assets\\js\\page\\teacher\\SingleQuestion.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67830934", Component.options)
  } else {
    hotAPI.reload("data-v-67830934", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});