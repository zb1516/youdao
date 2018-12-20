webpackJsonp([0],Array(90).concat([
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(151)
  __webpack_require__(153)
  __webpack_require__(155)
  __webpack_require__(157)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(159)
/* template */
var __vue_template__ = __webpack_require__(160)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6b5a1360"
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
Component.options.__file = "resources\\assets\\js\\page\\judge\\JudgeLabel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b5a1360", Component.options)
  } else {
    hotAPI.reload("data-v-6b5a1360", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(module, exports) {

module.exports = "/images/vendor/vue-ztree/src/ztree/zTreeStandard.png?2155096c99a3cc089a4262647e45dd02";

/***/ }),
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */
/***/ (function(module, exports) {

module.exports = "/images/vendor/vue-ztree/src/ztree/zTreeStandard.gif?83765e815357fafe0d62eee580928439";

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = "/images/no-task-icon.png?2a161c5fa5dddf76607ab374235c44ad";

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = "/images/zTreeStandard.png?fa9882fe40adeb0a272a47390c59e5ee";

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = "/images/zTreeStandard.gif?158458f766f6817713bc947b63449707";

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = "/images/minimal.png?5374dd98e677fe8171af180e2cd70fe2";

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = "/images/minimal@2x.png?70a48613bab335e8229fbc13d2e8083e";

/***/ }),
/* 120 */
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
/* 121 */
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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(19);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.m-main .opration-wrapper .paper-topic  .ztree{ overflow: auto;height: 493px;\n}\n.m-main .opration-wrapper .paper-topic  .ztree * {font-size:14px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li {\n    line-height: 30px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li a {\n    width: 200px;\n    height: 30px;\n    padding-top: 0px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li a:hover {\n    color:#333;\n    text-decoration: none;\n    background-color: #E7E7E7;\n}\n.m-main .opration-wrapper .paper-topic .ztree li a span.button.switch {\n    visibility: hidden;\n}\n.m-main .opration-wrapper .paper-topic .ztree.showIcon li a span.button.switch {\n    visibility: visible;\n}\n.m-main .opration-wrapper .paper-topic .ztree li a.curSelectedNode {\n    color:#333;\n    background-color: #D4D4D4;\n    border: 0;\n    height: 30px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span {\n    line-height: 30px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button {\n    margin-top: -7px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button.switch {\n    width: 16px;\n    height: 16px;\n}\n.m-main  .ztree > li > a .node_name {\n    font-size: 14px;\n    font-weight: bold;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button {\n    background-repeat:inherit;\n    background-image: url(" + escape(__webpack_require__(123)) + ");\n    *background-image: url(" + escape(__webpack_require__(124)) + ");\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button.switch.level0 {\n    width: 20px;\n    height: 20px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button.switch.level1 {\n    width: 20px;\n    height: 20px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button.noline_open {\n    background-position: 0 0;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button.noline_close {\n    background-position: -18px 0;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button.noline_open.level0 {\n    background-position: 0 -18px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button.noline_close.level0 {\n    background-position: -18px -18px;\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button {background-position:-92px -18px\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button.center_open{background-position:-74px -18px\n}\n.m-main .opration-wrapper .paper-topic .ztree li span.button.center_close{background-position:-92px -18px\n}\n.m-main .ztree li li span.button.bottom_docu {background-position: -18px -36px!important;\n}\n.m-main .ztree li li a .node_name {font-size: 13px!important;\n}\n.i-btn {\n    display: inline-block;\n    width: 80px;\n    height: 32px;\n    line-height: 30px;\n    color: #FFFFFF;\n    font-size: 14px;\n    text-align: center;\n    background: #6699ff;\n    outline: 0;\n    border: 0;\n    cursor: pointer;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n.i-input {\n    display: inline-block;\n    width: 280px;\n    height: 32px;\n    line-height: 1.5;\n    padding: 4px 7px;\n    font-size: 12px;\n    border: 1px solid #dddee1;\n    border-radius: 4px;\n    color: #495060;\n    background-color: #fff;\n    background-image: none;\n    position: relative;\n    cursor: text;\n    -webkit-transition: border .2s ease-in-out,background .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;\n    transition: border .2s ease-in-out,background .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;\n    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;\n    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n", ""]);

// exports


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = "/images/left_menuForOutLook.png?a79070500ed4e0bacda7a3ca26487907";

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = "/images/left_menuForOutLook.gif?c85a8da7ce70a2e89b1342ed388a6426";

/***/ }),
/* 125 */
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
/* 126 */
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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".m-main .opration-wrapper {\r\n    float: right;\r\n    font-size: 14px;\r\n    color: #333333; }\r\n.m-main .opration-wrapper .paper-topic {\r\n    position: relative;\r\n    z-index: 2;\r\n    background-color: #fff;\r\n    min-height: 493px;\r\n    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n    -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n    -moz-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13); }\r\n.m-main .opration-wrapper .paper-topic .topic-title {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    border-bottom: 1px solid #ddd;\r\n    color: #5d9cec;\r\n    text-align: center; }\r\n.m-main .opration-wrapper .paper-label-select {\r\n    width: 351px;\r\n    padding: 17px 22px 13px 13px;\r\n    margin-bottom: 15px;\r\n    background-color: #fff;\r\n    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n    -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n    -moz-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13); }\r\n.m-main .opration-wrapper .paper-label-select .title {\r\n    margin-bottom: 10px;\r\n    font-size: 0;\r\n    color: #333333; }\r\n.m-main .opration-wrapper .paper-label-select .title .t {\r\n    font-size: 14px; }\r\n.m-main .opration-wrapper .paper-label-select .title .t.t1 {\r\n    float: left; }\r\n.m-main .opration-wrapper .paper-label-select .title .t.t2 {\r\n    float: right; }\r\n.m-main .opration-wrapper .paper-label-select .title .count1 {\r\n    font-size: 16px;\r\n    color: #5d9cec; }\r\n.m-main .opration-wrapper .paper-label-select .title .count2 {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    color: #f68411; }\r\n.m-main .opration-wrapper .paper-label-select .title::after {\r\n    display: block;\r\n    content: ' ';\r\n    clear: both;\r\n    overflow: hidden;\r\n    visibility: hidden; }\r\n.m-main .opration-wrapper .paper-label-select .option-box {\r\n    margin-left: 3px;\r\n    font-size: 0; }\r\n.m-main .opration-wrapper .paper-label-select .option-box .label {\r\n    color: #333333;\r\n    font-weight: normal;\r\n    font-size: 14px; }\r\n.m-main .opration-wrapper .paper-label-select .option-box .label.grade {\r\n    float: left;\r\n    position: relative;\r\n    top: 8px; }\r\n.m-main .opration-wrapper .paper-label-select .option-box .radio-inline__input {\r\n    position: absolute;\r\n    clip: rect(1px, 1px, 1px, 1px); }\r\n.m-main .opration-wrapper .paper-label-select .option-box .radio-inline__label {\r\n    display: inline-block;\r\n    width: 75px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    margin: 8px 7px 0 0;\r\n    border: 1px solid #999999;\r\n    border-radius: 5px;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    cursor: pointer; }\r\n.m-main .opration-wrapper .paper-label-select .option-box .radio-inline__label.checked {\r\n    background: #5d9cec;\r\n    border: 1px solid #1da0f1;\r\n    color: #fff; }\r\n.m-main .opration-wrapper .paper-label-select .option-box .grade-data {\r\n    /*float: left;*/\r\n    width: 306px; }\r\n.m-main .opration-wrapper .paper-label-select .option-box.grade::after {\r\n    display: block;\r\n    content: ' ';\r\n    clear: both;\r\n    overflow: hidden;\r\n    visibility: hidden; }\r\n", ""]);

// exports


/***/ }),
/* 128 */
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
/* 129 */
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
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(19);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\ndiv.ztree_content_wrap {height:380px;\n}\ndiv.ztree_content_wrap div.left{float: left;width: 100%;\n}\ndiv.zTreeDemoBackground {width:100%;height:500px;text-align:left;\n}\n.expendIcon {\n\t\tbackground-position: -74px -36px;\n\t\tline-height: 0;\n\t    margin: 0;\n\t    width: 16px;\n\t    height: 16px;\n\t    display: inline-block;\n\t    vertical-align: middle;\n\t    border: 0 none;\n\t    cursor: pointer;\n\t    outline: none;\n\t    position: absolute;\n\t    top:4px;\n\t    background-color: transparent;\n\t    background-repeat: no-repeat;\n\t    background-attachment: scroll;\n\t    background-image: url(" + escape(__webpack_require__(110)) + ");\n}\nul.ztree {border:1px solid #ddd;background: #ffffff;width:100%;height:auto;overflow-y:scroll;overflow-x:auto;\n}\n.ztree * {padding:0; margin:0; font-size:15px; font-family: Verdana, Arial, Helvetica, AppleGothic, sans-serif\n}\n.ztree {margin:0; padding:5px; color:#333 ;\n}\n.ztree li{position: relative; padding:0; margin:0; list-style:none; line-height:24px; text-align:left; white-space:nowrap; outline:0\n}\n.ztree li ul{ margin:0; padding:0 0 0 18px\n}\n.ztree li ul.line{ background:url(" + escape(__webpack_require__(131)) + ") 0 0 repeat-y;\n}\n.ztree li a {padding:1px 3px 0 5px; margin:0; cursor:pointer; height:17px; color:#333; background-color: transparent;\n\t\ttext-decoration:none; vertical-align:top; display: inline-block\n}\n.ztree li a:hover {text-decoration:underline;color:blue;\n}\n.ztree li a.curSelectedNode {padding-top:0px; background-color:#191d22; color:#fff; height:24px; border:1px #191d22 solid; opacity:0.8;\n}\n.ztree li a.curSelectedNode_Edit {padding-top:0px; background-color:#FFE6B0; color:black; height:16px; border:1px #FFB951 solid; opacity:0.8;\n}\n.ztree li a.tmpTargetNode_inner {padding-top:0px; background-color:#316AC5; color:white; height:16px; border:1px #316AC5 solid;\n\t\topacity:0.8; filter:alpha(opacity=80)\n}\n.ztree li a.tmpTargetNode_prev {\n}\n.ztree li a.tmpTargetNode_next {\n}\n.ztree li a input.rename {height:14px; width:80px; padding:0; margin:0;\n\t\tfont-size:12px; border:1px #7EC4CC solid; *border:0px\n}\n.ztree li span {line-height:16px; margin-right:2px; top: 3px; display: inline-block;\n}\n.ztree li span.button {line-height:0; margin:0; width:16px; height:16px; display: inline-block; vertical-align:middle;\n\t\tborder:0 none; cursor: pointer;outline:none;\n\t\tbackground-color:transparent; background-repeat:no-repeat; background-attachment: scroll;\n\t\tbackground-image:url(" + escape(__webpack_require__(110)) + "); *background-image:url(" + escape(__webpack_require__(114)) + ")\n}\n.ztree li span.button.chk {width:13px; height:13px; margin:0 3px 0 0; cursor: auto\n}\n.ztree li span.button.chk.checkbox_false_full {background-position:0 0\n}\n.ztree li span.button.chk.checkbox_false_full_focus {background-position:0 -14px\n}\n.ztree li span.button.chk.checkbox_false_part {background-position:0 -28px\n}\n.ztree li span.button.chk.checkbox_false_part_focus {background-position:0 -42px\n}\n.ztree li span.button.chk.checkbox_false_disable {background-position:0 -56px\n}\n.ztree li span.button.chk.checkbox_true_full {background-position:-14px 0\n}\n.ztree li span.button.chk.checkbox_true_full_focus {background-position:-14px -14px\n}\n.ztree li span.button.chk.checkbox_true_part {background-position:-14px -28px\n}\n.ztree li span.button.chk.checkbox_true_part_focus {background-position:-14px -42px\n}\n.ztree li span.button.chk.checkbox_true_disable {background-position:-14px -56px\n}\n.ztree li span.button.chk.radio_false_full {background-position:-28px 0\n}\n.ztree li span.button.chk.radio_false_full_focus {background-position:-28px -14px\n}\n.ztree li span.button.chk.radio_false_part {background-position:-28px -28px\n}\n.ztree li span.button.chk.radio_false_part_focus {background-position:-28px -42px\n}\n.ztree li span.button.chk.radio_false_disable {background-position:-28px -56px\n}\n.ztree li span.button.chk.radio_true_full {background-position:-42px 0\n}\n.ztree li span.button.chk.radio_true_full_focus {background-position:-42px -14px\n}\n.ztree li span.button.chk.radio_true_part {background-position:-42px -28px\n}\n.ztree li span.button.chk.radio_true_part_focus {background-position:-42px -42px\n}\n.ztree li span.button.chk.radio_true_disable {background-position:-42px -56px\n}\n.ztree li span.button.switch {width:18px; height:18px\n}\n.ztree li span.button.root_open{background-position:-92px -54px\n}\n.ztree li span.button.root_close{background-position:-74px -54px\n}\n.ztree li span.button.roots_open{background-position:-92px 0\n}\n.ztree li span.button.roots_close{background-position:-74px 0\n}\n.ztree li span.button.center_open{background-position:-92px -18px\n}\n.ztree li span.button.center_close{background-position:-74px -18px\n}\n.ztree li span.button.bottom_open{background-position:-92px -36px\n}\n.ztree li span.button.bottom_close{background-position:-74px -36px\n}\n.ztree li span.button.noline_open{background-position:-92px -72px\n}\n.ztree li span.button.noline_close{background-position:-74px -72px\n}\n.ztree li span.button.root_docu{ background:none;\n}\n.ztree li span.button.roots_docu{background-position:-56px 0\n}\n.ztree li span.button.center_docu{background-position:-56px -18px\n}\n.ztree li span.button.bottom_docu{background-position:-56px -36px\n}\n.ztree li span.button.noline_docu{ background:none;\n}\n.ztree li span.button.ico_open{margin-right:2px; background-position:-110px -16px; vertical-align:top; *vertical-align:middle\n}\n.ztree li span.button.ico_close{margin-right:2px; background-position:-110px 0; vertical-align:top; *vertical-align:middle\n}\n.ztree li span.button.ico_docu{margin-right:2px; background-position:-110px -32px; vertical-align:top; *vertical-align:middle\n}\n.ztree li span.button.edit {margin-right:2px; background-position:-110px -48px; vertical-align:top; *vertical-align:middle\n}\n.ztree li span.button.remove {margin-right:2px; background-position:-110px -64px; vertical-align:top; *vertical-align:middle\n}\n\n\t/*.ztree li span.button.ico_loading{margin-right:2px; background:url('../images/ztree/loading.gif') no-repeat scroll 0 0 transparent; \n\t            vertical-align:top; *vertical-align:middle}*/\nul.tmpTargetzTree {background-color:#FFE6B0; opacity:0.8; filter:alpha(opacity=80)\n}\nspan.tmpzTreeMove_arrow {width:16px; height:16px; display: inline-block; padding:0; margin:2px 0 0 1px; border:0 none; position:absolute;\n\t\tbackground-color:white; background-repeat:no-repeat; background-attachment: scroll;\n\t\tbackground-position:-110px -80px; background-image:url(" + escape(__webpack_require__(110)) + "); *background-image:url(" + escape(__webpack_require__(114)) + ")\n}\nul.ztree.zTreeDragUL {margin:0; padding:0; position:absolute; width:auto; height:auto;overflow:hidden; \n\t             background-color:#cfcfcf; border:1px #00B83F dotted; opacity:0.8; filter:alpha(opacity=80)\n}\n.zTreeMask {z-index:10000; background-color:#cfcfcf; opacity:0.0; filter:alpha(opacity=0); position:absolute\n}\n.loadSyncNode {\n\t\twidth: 16px;\n        height: 16px;\n        position: relative;\n        display: inline-block;\n\t\tbackground-image:url(\"data:image/gif;base64,R0lGODlhEAAQAMQAAP///+7u7t3d3bu7u6qqqpmZmYiIiHd3d2ZmZlVVVURERDMzMyIiIhEREQARAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAQACwAAAAAEAAQAAAFdyAkQgGJJOWoQgIjBM8jkKsoPEzgyMGsCjPDw7ADpkQBxRDmSCRetpRA6Rj4kFBkgLC4IlUGhbNQIwXOYYWCXDufzYPDMaoKGBoKb886OjAKdgZAAgQkfCwzAgsDBAUCgl8jAQkHEAVkAoA1AgczlyIDczUDA2UhACH5BAUHABAALAAAAAAPABAAAAVjICSO0IGIATkqIiMKDaGKC8Q49jPMYsE0hQdrlABCGgvT45FKiRKQhWA0mPKGPAgBcTjsspBCAoH4gl+FmXNEUEBVAYHToJAVZK/XWoQQDAgBZioHaX8igigFKYYQVlkCjiMhACH5BAUHABAALAAAAAAQAA8AAAVgICSOUGGQqIiIChMESyo6CdQGdRqUENESI8FAdFgAFwqDISYwPB4CVSMnEhSej+FogNhtHyfRQFmIol5owmEta/fcKITB6y4choMBmk7yGgSAEAJ8JAVDgQFmKUCCZnwhACH5BAUHABAALAAAAAAQABAAAAViICSOYkGe4hFAiSImAwotB+si6Co2QxvjAYHIgBAqDoWCK2Bq6A40iA4yYMggNZKwGFgVCAQZotFwwJIF4QnxaC9IsZNgLtAJDKbraJCGzPVSIgEDXVNXA0JdgH6ChoCKKCEAIfkEBQcAEAAsAAAAABAADgAABUkgJI7QcZComIjPw6bs2kINLB5uW9Bo0gyQx8LkKgVHiccKVdyRlqjFSAApOKOtR810StVeU9RAmLqOxi0qRG3LptikAVQEh4UAACH5BAUHABAALAAAAAAQABAAAAVxICSO0DCQKBQQonGIh5AGB2sYkMHIqYAIN0EDRxoQZIaC6bAoMRSiwMAwCIwCggRkwRMJWKSAomBVCc5lUiGRUBjO6FSBwWggwijBooDCdiFfIlBRAlYBZQ0PWRANaSkED1oQYHgjDA8nM3kPfCmejiEAIfkEBQcAEAAsAAAAABAAEAAABWAgJI6QIJCoOIhFwabsSbiFAotGMEMKgZoB3cBUQIgURpFgmEI0EqjACYXwiYJBGAGBgGIDWsVicbiNEgSsGbKCIMCwA4IBCRgXt8bDACkvYQF6U1OADg8mDlaACQtwJCEAIfkEBQcAEAAsAAABABAADwAABV4gJEKCOAwiMa4Q2qIDwq4wiriBmItCCREHUsIwCgh2q8MiyEKODK7ZbHCoqqSjWGKI1d2kRp+RAWGyHg+DQUEmKliGx4HBKECIMwG61AgssAQPKA19EAxRKz4QCVIhACH5BAUHABAALAAAAAAQABAAAAVjICSOUBCQqHhCgiAOKyqcLVvEZOC2geGiK5NpQBAZCilgAYFMogo/J0lgqEpHgoO2+GIMUL6p4vFojhQNg8rxWLgYBQJCASkwEKLC17hYFJtRIwwBfRAJDk4ObwsidEkrWkkhACH5BAUHABAALAAAAQAQAA8AAAVcICSOUGAGAqmKpjis6vmuqSrUxQyPhDEEtpUOgmgYETCCcrB4OBWwQsGHEhQatVFhB/mNAojFVsQgBhgKpSHRTRxEhGwhoRg0CCXYAkKHHPZCZRAKUERZMAYGMCEAIfkEBQcAEAAsAAABABAADwAABV0gJI4kFJToGAilwKLCST6PUcrB8A70844CXenwILRkIoYyBRk4BQlHo3FIOQmvAEGBMpYSop/IgPBCFpCqIuEsIESHgkgoJxwQAjSzwb1DClwwgQhgAVVMIgVyKCEAIfkECQcAEAAsAAAAABAAEAAABWQgJI5kSQ6NYK7Dw6xr8hCw+ELC85hCIAq3Am0U6JUKjkHJNzIsFAqDqShQHRhY6bKqgvgGCZOSFDhAUiWCYQwJSxGHKqGAE/5EqIHBjOgyRQELCBB7EAQHfySDhGYQdDWGQyUhADs=\")\n}\n", ""]);

// exports


/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = "/images/vendor/vue-ztree/src/ztree/line_conn.gif?a2649b0b087ae0f894092a090d95d3e2";

/***/ }),
/* 132 */
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
/* 133 */
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
/* 134 */
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
/* 135 */
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
/* 136 */
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
/* 137 */
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
/* 138 */,
/* 139 */
/***/ (function(module, exports) {

module.exports = "/images/line_conn.gif?a2649b0b087ae0f894092a090d95d3e2";

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = "/images/loading.gif?4f3236673db18fbb34f4f6a942c2ce12";

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = "/images/search.png?9172a5e68298dd0d398023fef91acd94";

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = "/images/singleq_fnish_bg.png?f306a790fcb45ba567ccaaeeb0247eae";

/***/ }),
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0968076c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b5a1360\",\"scoped\":false,\"hasInlineConfig\":true}!./zTreeStyle.css", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b5a1360\",\"scoped\":false,\"hasInlineConfig\":true}!./zTreeStyle.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(19);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/*-------------------------------------\r\nzTree Style\r\n\r\nversion:\t3.5.19\r\nauthor:\t\tHunter.z\r\nemail:\t\thunter.z@263.net\r\nwebsite:\thttp://code.google.com/p/jquerytree/\r\n\r\n-------------------------------------*/\n.ztree * {padding:0; margin:0; font-size:12px; font-family: Verdana, Arial, Helvetica, AppleGothic, sans-serif\n}\n.ztree {margin:0; padding:5px; color:#333\n}\n.ztree li{padding:0; margin:0; list-style:none; line-height:14px; text-align:left; white-space:nowrap; outline:0\n}\n.ztree li ul{ margin:0; padding:0 0 0 18px\n}\n.ztree li ul.line{ background:url(" + escape(__webpack_require__(139)) + ") 0 0 repeat-y;\n}\n.ztree li a {padding:1px 3px 0 0; margin:0; cursor:pointer; height:17px; color:#333; background-color: transparent;\r\n\ttext-decoration:none; vertical-align:top; display: inline-block\n}\n.ztree li a:hover {text-decoration:underline\n}\n.ztree li a.curSelectedNode {padding-top:0px; background-color:#FFE6B0; color:black; height:16px; border:1px #FFB951 solid; opacity:0.8;\n}\n.ztree li a.curSelectedNode_Edit {padding-top:0px; background-color:#FFE6B0; color:black; height:16px; border:1px #FFB951 solid; opacity:0.8;\n}\n.ztree li a.tmpTargetNode_inner {padding-top:0px; background-color:#316AC5; color:white; height:16px; border:1px #316AC5 solid;\r\n\topacity:0.8; filter:alpha(opacity=80)\n}\n.ztree li a.tmpTargetNode_prev {\n}\n.ztree li a.tmpTargetNode_next {\n}\n.ztree li a input.rename {height:14px; width:80px; padding:0; margin:0;\r\n\tfont-size:12px; border:1px #7EC4CC solid; *border:0px\n}\n.ztree li span {line-height:16px; margin-right:2px\n}\n.ztree li span.button {line-height:0; margin:0; width:16px; height:16px; display: inline-block; vertical-align:middle;\r\n\tborder:0 none; cursor: pointer;outline:none;\r\n\tbackground-color:transparent; background-repeat:no-repeat; background-attachment: scroll;\r\n\tbackground-image:url(" + escape(__webpack_require__(116)) + "); *background-image:url(" + escape(__webpack_require__(117)) + ")\n}\n.ztree li span.button.chk {width:13px; height:13px; margin:0 3px 0 0; cursor: auto\n}\n.ztree li span.button.chk.checkbox_false_full {background-position:0 0\n}\n.ztree li span.button.chk.checkbox_false_full_focus {background-position:0 -14px\n}\n.ztree li span.button.chk.checkbox_false_part {background-position:0 -28px\n}\n.ztree li span.button.chk.checkbox_false_part_focus {background-position:0 -42px\n}\n.ztree li span.button.chk.checkbox_false_disable {background-position:0 -56px\n}\n.ztree li span.button.chk.checkbox_true_full {background-position:-14px 0\n}\n.ztree li span.button.chk.checkbox_true_full_focus {background-position:-14px -14px\n}\n.ztree li span.button.chk.checkbox_true_part {background-position:-14px -28px\n}\n.ztree li span.button.chk.checkbox_true_part_focus {background-position:-14px -42px\n}\n.ztree li span.button.chk.checkbox_true_disable {background-position:-14px -56px\n}\n.ztree li span.button.chk.radio_false_full {background-position:-28px 0\n}\n.ztree li span.button.chk.radio_false_full_focus {background-position:-28px -14px\n}\n.ztree li span.button.chk.radio_false_part {background-position:-28px -28px\n}\n.ztree li span.button.chk.radio_false_part_focus {background-position:-28px -42px\n}\n.ztree li span.button.chk.radio_false_disable {background-position:-28px -56px\n}\n.ztree li span.button.chk.radio_true_full {background-position:-42px 0\n}\n.ztree li span.button.chk.radio_true_full_focus {background-position:-42px -14px\n}\n.ztree li span.button.chk.radio_true_part {background-position:-42px -28px\n}\n.ztree li span.button.chk.radio_true_part_focus {background-position:-42px -42px\n}\n.ztree li span.button.chk.radio_true_disable {background-position:-42px -56px\n}\n.ztree li span.button.switch {width:18px; height:18px\n}\n.ztree li span.button.root_open{background-position:-92px -54px\n}\n.ztree li span.button.root_close{background-position:-74px -54px\n}\n.ztree li span.button.roots_open{background-position:-92px 0\n}\n.ztree li span.button.roots_close{background-position:-74px 0\n}\n.ztree li span.button.center_open{background-position:-92px -18px\n}\n.ztree li span.button.center_close{background-position:-74px -18px\n}\n.ztree li span.button.bottom_open{background-position:-92px -36px\n}\n.ztree li span.button.bottom_close{background-position:-74px -36px\n}\n.ztree li span.button.noline_open{background-position:-92px -72px\n}\n.ztree li span.button.noline_close{background-position:-74px -72px\n}\n.ztree li span.button.root_docu{ background:none;\n}\n.ztree li span.button.roots_docu{background-position:-56px 0\n}\n.ztree li span.button.center_docu{background-position:-56px -18px\n}\n.ztree li span.button.bottom_docu{background-position:-56px -36px\n}\n.ztree li span.button.noline_docu{ background:none;\n}\n.ztree li span.button.ico_open{margin-right:2px; background-position:-110px -16px; vertical-align:top; *vertical-align:middle\n}\n.ztree li span.button.ico_close{margin-right:2px; background-position:-110px 0; vertical-align:top; *vertical-align:middle\n}\n.ztree li span.button.ico_docu{margin-right:2px; background-position:-110px -32px; vertical-align:top; *vertical-align:middle\n}\n.ztree li span.button.edit {margin-right:2px; background-position:-110px -48px; vertical-align:top; *vertical-align:middle\n}\n.ztree li span.button.remove {margin-right:2px; background-position:-110px -64px; vertical-align:top; *vertical-align:middle\n}\n.ztree li span.button.ico_loading{margin-right:2px; background:url(" + escape(__webpack_require__(140)) + ") no-repeat scroll 0 0 transparent; vertical-align:top; *vertical-align:middle\n}\nul.tmpTargetzTree {background-color:#FFE6B0; opacity:0.8; filter:alpha(opacity=80)\n}\nspan.tmpzTreeMove_arrow {width:16px; height:16px; display: inline-block; padding:0; margin:2px 0 0 1px; border:0 none; position:absolute;\r\n\tbackground-color:transparent; background-repeat:no-repeat; background-attachment: scroll;\r\n\tbackground-position:-110px -80px; background-image:url(" + escape(__webpack_require__(116)) + "); *background-image:url(" + escape(__webpack_require__(117)) + ")\n}\nul.ztree.zTreeDragUL {margin:0; padding:0; position:absolute; width:auto; height:auto;overflow:hidden; background-color:#cfcfcf; border:1px #00B83F dotted; opacity:0.8; filter:alpha(opacity=80)\n}\n.zTreeMask {z-index:10000; background-color:#cfcfcf; opacity:0.0; filter:alpha(opacity=0); position:absolute\n}\r\n\r\n/* level style*/\r\n/*.ztree li span.button.level0 {\r\n\tdisplay:none;\r\n}\r\n.ztree li ul.level0 {\r\n\tpadding:0;\r\n\tbackground:none;\r\n}*/", ""]);

// exports


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("228cc37a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b5a1360\",\"scoped\":false,\"hasInlineConfig\":true}!./minimal.css", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b5a1360\",\"scoped\":false,\"hasInlineConfig\":true}!./minimal.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(19);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/* iCheck plugin Minimal skin, black\r\n----------------------------------- */\n.icheckbox_minimal,\r\n.iradio_minimal {\r\n    display: inline-block;\r\n    *display: inline;\r\n    vertical-align: middle;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 18px;\r\n    height: 18px;\r\n    background: url(" + escape(__webpack_require__(118)) + ") no-repeat;\r\n    border: none;\r\n    cursor: pointer;\n}\n.icheckbox_minimal {\r\n    background-position: 0 0;\n}\n.icheckbox_minimal.hover {\r\n        background-position: -20px 0;\n}\n.icheckbox_minimal.checked {\r\n        background-position: -40px 0;\n}\n.icheckbox_minimal.disabled {\r\n        background-position: -60px 0;\r\n        cursor: default;\n}\n.icheckbox_minimal.checked.disabled {\r\n        background-position: -80px 0;\n}\n.iradio_minimal {\r\n    background-position: -100px 0;\n}\n.iradio_minimal.hover {\r\n        background-position: -120px 0;\n}\n.iradio_minimal.checked {\r\n        background-position: -140px 0;\n}\n.iradio_minimal.disabled {\r\n        background-position: -160px 0;\r\n        cursor: default;\n}\n.iradio_minimal.checked.disabled {\r\n        background-position: -180px 0;\n}\r\n\r\n/* HiDPI support */\n@media (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi), (min-resolution: 1.25dppx) {\n.icheckbox_minimal,\r\n    .iradio_minimal {\r\n        background-image: url(" + escape(__webpack_require__(119)) + ");\r\n        background-size: 200px 20px;\n}\n}", ""]);

// exports


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(156);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0543671e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b5a1360\",\"scoped\":true,\"hasInlineConfig\":true}!./singleQuestion.css", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b5a1360\",\"scoped\":true,\"hasInlineConfig\":true}!./singleQuestion.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(19);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\ni[data-v-6b5a1360] {\r\n  font-style: normal;\n}\n.m-main[data-v-6b5a1360] {\r\n  position: relative;\r\n  width: 1200px;\r\n  min-height: 700px;\r\n  margin: 0 auto;\n}\n.m-main .paper-detail[data-v-6b5a1360] {\r\n    position: relative;\r\n    z-index: 2;\r\n    float: left;\r\n    width: 722px;\r\n    min-height: 700px;\r\n    padding: 18px 39px 0 39px;\r\n    background-color: #fff;\r\n    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n    -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n    -moz-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n    overflow: auto;\n}\n.m-main .paper-detail .grades-select[data-v-6b5a1360] {\r\n      font-size: 0;\r\n      margin-bottom: 21px;\n}\n.m-main .paper-detail .grades-select .radio-inline__input[data-v-6b5a1360] {\r\n        clip: rect(1px, 1px, 1px, 1px);\r\n        position: absolute;\n}\n.m-main .paper-detail .grades-select .radio-inline__label[data-v-6b5a1360] {\r\n        display: inline-block;\r\n        width: 161px;\r\n        height: 22px;\r\n        line-height: 22px;\r\n        margin: 6px 17px 0 0;\r\n        border-radius: 5px;\r\n        border: 1px solid #eeeeee;\r\n        font-size: 14px;\r\n        text-align: center;\r\n        color: #0f0f0f;\r\n        cursor: pointer;\n}\n.m-main .paper-detail .grades-select .radio-inline__label.active[data-v-6b5a1360] {\r\n        background: #5d9cec;\r\n        border: 1px solid #eeeeee;\r\n        color: #fff;\n}\n.m-main .paper-detail .paper-content[data-v-6b5a1360] {\r\n      margin-bottom: 25px;\r\n      color: #0f0f0f;\r\n      position: relative;\n}\n.m-main .paper-detail .paper-content .move[data-v-6b5a1360] {\r\n        position: relative;\n}\n.m-main .paper-detail .paper-content .select-option[data-v-6b5a1360] {\r\n        margin-top: 15px;\r\n        font-size: 0;\n}\n.m-main .paper-detail .paper-content .select-option .option[data-v-6b5a1360] {\r\n          font-size: 14px;\r\n          margin-right: 53px;\n}\n.m-main .paper-detail .paper-content .hide-answer[data-v-6b5a1360] {\r\n        display: block;\r\n        margin: 16px 0 12px 11px;\r\n        color: #169BD5;\r\n        font-size: 14px;\r\n        cursor: pointer;\n}\n.m-main .paper-detail .paper-content .paper-answer[data-v-6b5a1360] {\r\n        display: none;\r\n        width: 686px;\r\n        min-height: 48px;\r\n        padding: 14px 10px 5px 10px;\r\n        margin-bottom: 15px;\r\n        background-color: #f2f2f2;\n}\n.m-main .paper-detail .paper-content .paper-answer .answer[data-v-6b5a1360] {\r\n          margin-bottom: 20px;\r\n          font-size: 14px;\n}\n.m-main .paper-detail .paper-content .paper-answer .answer[data-v-6b5a1360]:last-child {\r\n          margin-bottom: 0;\n}\n.m-main .paper-detail .paper-content .judge-paper-id[data-v-6b5a1360] {\r\n        position: relative;\r\n        margin-bottom: 30px;\n}\n.m-main .paper-detail .paper-content .judge-paper-id .id-search[data-v-6b5a1360] {\r\n          width: 130px;\r\n          height: 24px;\r\n          border-radius: 5px;\r\n          border: 1px solid #ddd;\r\n          text-indent: 5px;\r\n          float: right;\r\n          padding-right: 25px;\n}\n.m-main .paper-detail .paper-content .judge-paper-id .search-icon[data-v-6b5a1360] {\r\n          background: url(" + escape(__webpack_require__(141)) + ") no-repeat;\r\n          background-size: cover;\r\n          width: 14px;\r\n          height: 14px;\r\n          position: absolute;\r\n          right: 10px;\r\n          top: 6px;\n}\n.m-main .paper-detail .paper-content .hide-answer[data-v-6b5a1360] {\r\n        position: relative;\r\n        left: 6px;\r\n        color: #169BD5;\r\n        font-size: 14px;\r\n        cursor: pointer;\n}\n.m-main .paper-detail .paper-content .paper-answer[data-v-6b5a1360] {\r\n        margin-top: 17px;\r\n        width: 700px;\r\n        min-height: 70px;\r\n        background-color: #f2f2f2;\n}\n.m-main .paper-detail .paper-content .paper-id[data-v-6b5a1360] {\r\n        font-size: 14px;\r\n        color: #5D9CEC;\n}\n.m-main .paper-detail .paper-content .paper-id .paper-label[data-v-6b5a1360] {\r\n          height: 25px;\r\n          line-height: 25px;\r\n          margin-left: 40px;\r\n          padding: 5px 20px 5px 10px;\r\n          background-color: #f68411;\r\n          border-radius: 20px;\r\n          font-size: 13px;\r\n          -webkit-box-shadow: 0 0 4px rgba(235, 99, 0, 0.3);\r\n                  box-shadow: 0 0 4px rgba(235, 99, 0, 0.3);\n}\n.m-main .paper-detail .paper-content .paper-id .paper-label i[data-v-6b5a1360] {\r\n            color: #fff;\r\n            margin-right: 12px;\n}\n.m-main .paper-detail .paper-content .paper-id .paper-label i[data-v-6b5a1360]:last-child {\r\n            margin-right: 0;\n}\n.m-main .paper-detail .paper-content .paper-info[data-v-6b5a1360] {\r\n        font-size: 14px;\n}\n.m-main .paper-detail .paper-content .paper-info .title[data-v-6b5a1360] {\r\n          margin-bottom: 15px;\r\n          color: #5d9cec;\n}\n.m-main .paper-detail .paper-content .paper-info .paper-label[data-v-6b5a1360] {\r\n          display: inline-block;\r\n          height: 25px;\r\n          line-height: 25px;\r\n          padding: 0 20px;\r\n          margin-right: 20px;\r\n          border-radius: 13px;\r\n          border: 1px solid #5D9CEC;\r\n          background-color: #fff;\n}\n.m-main .paper-detail .paper-content .paper-info .paper-label i[data-v-6b5a1360] {\r\n            color: #000;\r\n            margin-right: 15px;\n}\n.m-main .paper-detail .paper-content .paper-info .paper-label i[data-v-6b5a1360]:last-child {\r\n              margin-right: 0;\n}\n.m-main .paper-detail .paper-content .paper-info .paper-label i.diff[data-v-6b5a1360] {\r\n            color: #5D9CEC;\n}\n.m-main .paper-detail .paper-content .paper-info .paper-label[data-v-6b5a1360]:last-child {\r\n          margin-right: 0;\n}\n.m-main .paper-detail .paper-content .judge-label-wrapper .judge-label[data-v-6b5a1360] {\r\n        display: inline-block;\r\n        height: 25px;\r\n        line-height: 25px;\r\n        padding: 0 20px;\r\n        margin-top: 10px;\r\n        margin-right: 15px;\r\n        border-radius: 13px;\r\n        background-color: #fff;\r\n        border: 1px solid #f68411;\r\n        font-size: 14px;\n}\n.m-main .paper-detail .paper-content .judge-label-wrapper .judge-label i[data-v-6b5a1360] {\r\n          color: #000;\r\n          margin-right: 15px;\n}\n.m-main .paper-detail .paper-content .judge-label-wrapper .judge-label i[data-v-6b5a1360]:last-child {\r\n            margin-right: 0;\n}\n.m-main .paper-detail .paper-content .judge-label-wrapper .judge-label .diffrence[data-v-6b5a1360] {\r\n          color: #f68411;\n}\n.m-main .paper-detail .paper-content .judge-label-wrapper .judge-label[data-v-6b5a1360]:last-child {\r\n        margin-right: 0;\n}\n.paper-btn[data-v-6b5a1360] {\r\n  position: relative;\r\n  padding: 30px 0 20px 0px;\r\n  width: 642px;\r\n  text-align: center;\n}\n.paper-btn .btn[data-v-6b5a1360] {\r\n    width: 121px;\r\n    height: 41px;\r\n    border: 0;\r\n    border-radius: 10px;\r\n    outline: none;\n}\n.paper-btn .btn.paper-error[data-v-6b5a1360] {\r\n    float: left;\r\n    border: 1px solid #f68411;\r\n    font-size: 16px;\r\n    color: #f68411;\r\n    background-color: #fff;\n}\n.paper-btn .btn.paper-error[data-v-6b5a1360]:hover {\r\n    box-shadow: 1px 2px 8px rgba(235, 99, 0, 0.56);\r\n    -webkit-box-shadow: 1px 2px 8px rgba(235, 99, 0, 0.56);\r\n    -moz-box-shadow: 1px 2px 8px rgba(235, 99, 0, 0.56);\r\n    color: #fff;\r\n    background-color: #f68411;\n}\n.paper-btn .btn.paper-save[data-v-6b5a1360] {\r\n    float: right;\r\n    border: 1px solid #4b89de;\r\n    font-size: 16px;\r\n    color: #fff;\r\n    text-align: center;\r\n    background-color: #4b89de;\n}\n.paper-btn .btn.paper-save[data-v-6b5a1360]:hover,\r\n  .paper-btn .btn.paper-slip[data-v-6b5a1360]:hover {\r\n    box-shadow: 1px 2px 8px rgba(75, 137, 222, 0.56);\r\n    -webkit-box-shadow: 1px 2px 8px rgba(75, 137, 222, 0.56);\r\n    -moz-box-shadow: 1px 2px 8px rgba(75, 137, 222, 0.56);\r\n    color: #fff;\r\n    background-color: #4b89de;\n}\n.paper-btn .btn.paper-slip[data-v-6b5a1360] {\r\n    border: 1px solid #4b89de;\r\n    font-size: 16px;\r\n    color: #4b89de;\r\n    text-align: center;\r\n    background-color: #fff;\n}\n@media screen and (max-width: 1600px) {\n.paper-btn[data-v-6b5a1360] {\r\n    padding: 30px 0 20px 250px;\n}\n}\n@media screen and (max-width: 1500px) {\n.paper-btn[data-v-6b5a1360] {\r\n    padding: 30px 0 20px 110px;\n}\n}\r\n\r\n/* 单题完成 */\n.fnish-main[data-v-6b5a1360] {\r\n  width: 1200px;\r\n  min-height: 700px;\r\n  margin: 0 auto;\r\n  background-color: #ffffff;\n}\n.fnish-main .count-wrapper[data-v-6b5a1360] {\r\n    height: 50px;\r\n    line-height: 50px;\r\n    padding-left: 40px;\r\n    font-size: 0;\n}\n.fnish-main .count-wrapper .text[data-v-6b5a1360] {\r\n      margin-right: 14px;\r\n      font-size: 14px;\r\n      color: #333333;\n}\n.fnish-main .count-wrapper .number[data-v-6b5a1360] {\r\n      margin: 0 5px;\r\n      font-size: 16px;\n}\n.fnish-main .count-wrapper .number.n1[data-v-6b5a1360] {\r\n      color: #5d9cec;\n}\n.fnish-main .count-wrapper .number.n2[data-v-6b5a1360] {\r\n      font-weight: bold;\r\n      color: #f68411;\n}\n.fnish-main .sign[data-v-6b5a1360] {\r\n    position: relative;\r\n    top: 99px;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n    width: 502px;\r\n    height: 348px;\r\n    background: url(" + escape(__webpack_require__(142)) + ") no-repeat;\r\n    background-size: 100%;\n}\r\n", ""]);

// exports


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(158);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0b974ca1", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b5a1360\",\"scoped\":true,\"hasInlineConfig\":true}!./noTask.css", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b5a1360\",\"scoped\":true,\"hasInlineConfig\":true}!./noTask.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.m-no-main[data-v-6b5a1360] {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  width: 1200px;\r\n  height: 770px;\r\n  background: #fff;\r\n  margin: 0 auto;\r\n  padding: 282px 0 0 334px;\r\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n  -moz-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\n}\n.m-no-main .m-no-icon[data-v-6b5a1360] {\r\n    float: left;\r\n    margin-right: 61px;\n}\n.m-no-main .m-no-txt[data-v-6b5a1360] {\r\n    padding-top: 15px;\n}\n.m-no-main .m-no-txt p[data-v-6b5a1360] {\r\n      margin-bottom: 17px;\n}\n.m-no-main .m-no-txt .line1[data-v-6b5a1360] {\r\n      font-size: 30px;\r\n      color: #5D9CEC;\n}\n.m-no-main .m-no-txt .line2[data-v-6b5a1360] {\r\n      font-size: 20px;\r\n      color: #999999;\r\n      margin-bottom: 29px;\n}\n.m-no-main .m-no-txt a[data-v-6b5a1360] {\r\n      display: inline-block;\r\n      width: 160px;\r\n      height: 45px;\r\n      line-height: 45px;\r\n      text-align: center;\r\n      border-radius: 5px;\r\n      background: #5D9CEC;\r\n      color: #fff;\n}\r\n", ""]);

// exports


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_QuestionOptions__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_QuestionOptions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_QuestionOptions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_QuestionError__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_QuestionError___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_QuestionError__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(9);
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




/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'v-question-options': __WEBPACK_IMPORTED_MODULE_0__components_QuestionOptions___default.a,
        'v-question-error': __WEBPACK_IMPORTED_MODULE_1__components_QuestionError___default.a
    },
    data: function data() {
        return {
            errorShow: false,
            questionErrorShow: false,
            successShow: false,
            subjectIndex: 0,
            subjectId: 1,
            questionId: '',
            question: {},
            questionOption: {
                questionNoFinishCount: 0,
                questionFinishCount: 0
            },
            labelList: []
        };
    },

    methods: {
        getJudgeQuestion: function getJudgeQuestion() {
            var that = this;
            axios.get("/label/question/getJudgeQuestion", {
                params: { userKey: that.userKey }
            }).then(function (res) {
                if (res.data.status == 0) {
                    that.$message.error(res.data.errorMsg);return false;
                } else {
                    if (Object.keys(res.data.data).length > 0) {
                        that.errorShow = true;
                        that.getJudgeQuestionInfo(); //获取待判定试题
                    } else {
                        that.errorShow = false;
                    }
                }
            }).catch(function (error) {
                that.$message.error(error.message);
            });
        },
        getJudgeQuestionInfo: function getJudgeQuestionInfo() {
            var that = this;
            axios.get("/label/question/getJudgeQuestionInfo", {
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
        getJudgeQuestionSearch: function getJudgeQuestionSearch() {
            var that = this;
            axios.get("/label/question/getJudgeQuestionSearch", {
                params: {
                    userKey: that.userKey,
                    questionId: that.questionId
                }
            }).then(function (res) {
                that.question = res.data.data;
            }).catch(function (error) {
                that.$message.error(error.message);
            });
        },
        subjectCheck: function subjectCheck(index) {
            var that = this;
            that.subjectIndex = index;
            that.subjectId = that.subjectList[index].subjectId;
            that.getJudgeQuestion();
            that.$refs.questionType.getQuestionType(that.subjectId);
            that.$refs.questionType.getKnowledge(that.subjectId);
        },
        errorReport: function errorReport() {
            var that = this;
            that.questionId = that.question == null ? 0 : that.question.ques_id;
            that.questionErrorShow = true;
            that.unboundSpace();
        },
        errorClose: function errorClose() {
            var that = this;
            that.questionErrorShow = false;
            that.boundSpace;
        },
        getJudgeQuestionCount: function getJudgeQuestionCount() {
            var that = this;
            axios.get('/label/question/getJudgeQuestionCount', {
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

        //跳过
        jumpQuestion: function jumpQuestion() {
            var that = this;
            if (that.question == null) {
                that.$message.error('抱歉，没有下一道了！');
                return false;
            }
            axios.get('/label/question/jumpJudgeQuestion', {
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
                that.$message.error('请选择试题');return false;
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
            var obj = that.$qs.stringify({
                questionId: that.question.ques_id,
                paperId: that.question.paper_id,
                subjectId: that.subjectId,
                userKey: that.userKey,
                userType: 'judge',
                questionType: 'question',
                gradeId: that.$refs.questionType.gradeId, //年级
                difficultyId: that.$refs.questionType.difficultyId, //难度
                knowledgeId: that.$refs.questionType.nodeModel.id, //知识点id
                knowledgeName: that.$refs.questionType.nodeModel.title, //知识点名称
                typeId: that.$refs.questionType.typeId, //类型
                questionTypeId: that.$refs.questionType.questionTypeId, //题型
                getQuestionCategoryId: that.$refs.questionType.questionCategoryId, //题类
                gradeName: that.$refs.questionType.gradeName, //年级
                difficultyName: that.$refs.questionType.difficultyName, //难度
                type: that.$refs.questionType.type, //类型
                questionTypeName: that.$refs.questionType.questionTypeName, //题型
                questionCategoryName: that.$refs.questionType.questionCategoryName //题类
            });
            axios.post("/label/question/questionSave", obj).then(function (res) {
                if (res.data.status == 0) {
                    alert(res.data.errorMsg);return false;
                } else {
                    that.labelList = res.data.data;
                    that.successShow = true;
                    setTimeout(function () {
                        that.successShow = false;
                        that.labelList = []; //清空标签数组
                        that.jumpQuestion(); //获取试题列表
                        that.getJudgeQuestionCount(); //调用获取试题统计
                    }, 1000);
                }
            }).catch(function (error) {
                that.$message.error(error.message);
            });
        },
        showAnswer: function showAnswer(qid) {
            $('#questionShow_' + qid).next(".paper-answer").css('display') == 'block' ? $('#questionShow_' + qid).next(".paper-answer").hide() : $('#questionShow_' + qid).next(".paper-answer").show();
            $('#questionShow_' + qid).next(".paper-answer").css('display') == 'block' ? $('#questionShow_' + qid).html('隐藏答案') : $('#questionShow_' + qid).html('显示答案');
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
        },
        keySpace: function keySpace() {
            this.unboundSpace();
        },
        keyBindSapce: function keyBindSapce() {
            this.boundSpace();
        }
    },
    computed: _extends({
        getSubjectId: function getSubjectId() {
            var that = this;
            return that.subjectId;
        },
        questionShow: function questionShow() {
            var that = this;
            return Object.keys(that.question).length > 0 ? true : false;
        },
        labelShow: function labelShow() {
            var that = this;
            return Object.keys(that.labelList).length > 0 ? true : false;
        }
    }, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapGetters */])({
        userKey: 'getUserKey',
        subjectList: 'getSubject'
    })),
    mounted: function mounted() {
        var that = this;
        that.getJudgeQuestion();
        that.getJudgeQuestionCount();
    },
    created: function created() {
        document.onkeydown = this.spacePreventDefault;
    }
});

/***/ }),
/* 160 */
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
              _c("div", { staticClass: "paper-detail" }, [
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
                      _c("p", { staticClass: "judge-paper-id" }, [
                        _c("span", [_vm._v("题目ID：")]),
                        _c("i", [_vm._v(_vm._s(_vm.question.ques_id))]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.questionId,
                              expression: "questionId"
                            }
                          ],
                          staticClass: "id-search",
                          attrs: { type: "text", placeholder: "搜索题目id" },
                          domProps: { value: _vm.questionId },
                          on: {
                            focus: _vm.keySpace,
                            blur: _vm.keyBindSapce,
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.questionId = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", {
                          staticClass: "search-icon",
                          on: { click: _vm.getJudgeQuestionSearch }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "move" }, [
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
                            _vm._v("答案：\n                            "),
                            _c("span", {
                              staticClass: "answer1",
                              domProps: {
                                innerHTML: _vm._s(_vm.question.ques_answer)
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "answer" }, [
                            _vm._v("解析：\n                            "),
                            _c("span", {
                              staticClass: "answer2",
                              domProps: {
                                innerHTML: _vm._s(_vm.question.ques_analysis)
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "paper-info" },
                          [
                            _c("div", { staticClass: "title" }, [
                              _vm._v(_vm._s(_vm.question.paper_name))
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.question.labelData, function(
                              label,
                              index
                            ) {
                              return _c(
                                "span",
                                { staticClass: "paper-label teacher" },
                                [
                                  _c("a", [
                                    _vm._v(_vm._s(label.user_realname) + "：")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "teacher1-label" },
                                    _vm._l(label.tag_content, function(
                                      options
                                    ) {
                                      return _c("i", [_vm._v(_vm._s(options))])
                                    })
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm.labelShow
                          ? _c("p", { staticClass: "judge-label-wrapper" }, [
                              _c(
                                "span",
                                { staticClass: "paper-label judge-label" },
                                [
                                  _c("a", [_vm._v("判定人：")]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "j-label" },
                                    _vm._l(_vm.labelList, function(label) {
                                      return _c(
                                        "i",
                                        { staticClass: "diffrence z-label" },
                                        [_vm._v(_vm._s(label.tag_content))]
                                      )
                                    })
                                  )
                                ]
                              )
                            ])
                          : _vm._e()
                      ])
                    ])
                  : _c("div", [
                      _vm._v("\n                该学科下暂无任务\n            ")
                    ])
              ]),
              _vm._v(" "),
              _c("v-question-options", {
                ref: "questionType",
                attrs: {
                  subjectId: _vm.getSubjectId,
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
          _vm.successShow
            ? _c("div", { staticClass: "status-success" }, [_vm._v("保存成功")])
            : _vm._e(),
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
                      on: { click: _vm.questionSave }
                    },
                    [_vm._v("保存")]
                  )
                ]
              )
            ]
          ),
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
                  to: {
                    name: "judges-judgeTask",
                    params: { userKey: _vm.userKey }
                  }
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
    require("vue-hot-reload-api")      .rerender("data-v-6b5a1360", module.exports)
  }
}

/***/ })
]));