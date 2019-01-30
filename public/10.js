webpackJsonp([10],{

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(258);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("3a3d3796", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d55059d4\",\"scoped\":false,\"hasInlineConfig\":true}!./noTask.css", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d55059d4\",\"scoped\":false,\"hasInlineConfig\":true}!./noTask.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.m-no-main {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  width: 1200px;\r\n  height: 770px;\r\n  background: #fff;\r\n  margin: 0 auto;\r\n  padding: 282px 0 0 334px;\r\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n  -moz-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\n}\n.m-no-main .m-no-icon {\r\n    float: left;\r\n    margin-right: 61px;\n}\n.m-no-main .m-no-txt {\r\n    padding-top: 15px;\n}\n.m-no-main .m-no-txt p {\r\n      margin-bottom: 17px;\n}\n.m-no-main .m-no-txt .line1 {\r\n      font-size: 30px;\r\n      color: #5D9CEC;\n}\n.m-no-main .m-no-txt .line2 {\r\n      font-size: 20px;\r\n      color: #999999;\r\n      margin-bottom: 29px;\n}\n.m-no-main .m-no-txt a {\r\n      display: inline-block;\r\n      width: 160px;\r\n      height: 45px;\r\n      line-height: 45px;\r\n      text-align: center;\r\n      border-radius: 5px;\r\n      background: #5D9CEC;\r\n      color: #fff;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "m-no-main" }, [
      _c("div", { staticClass: "m-no-icon" }, [
        _c("img", {
          attrs: {
            src: __webpack_require__(260),
            width: "204",
            height: "181"
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "m-no-txt" }, [
        _c("p", { staticClass: "line1" }, [
          _vm._v("很抱歉！你访问的页面不存在")
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d55059d4", module.exports)
  }
}

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "/images/no-task-icon.png?2a161c5fa5dddf76607ab374235c44ad";

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(257)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(259)
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
Component.options.__file = "resources\\assets\\js\\page\\error\\404.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d55059d4", Component.options)
  } else {
    hotAPI.reload("data-v-d55059d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});