webpackJsonp([3],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(104)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(106)
/* template */
var __vue_template__ = __webpack_require__(107)
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
Component.options.__file = "resources\\assets\\js\\components\\Pagination.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-96baf55e", Component.options)
  } else {
    hotAPI.reload("data-v-96baf55e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("340e795c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-96baf55e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-96baf55e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.mo-paging {\n    display: inline-block;\n    padding: 0;\n    margin: 30px 0;\n    font-size: 0;\n    list-style: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.paging-item {\n    display: inline;\n    margin-left: 5px;\n    font-size: 14px;\n    position: relative;\n    padding: 6px 12px;\n    line-height: 1.42857143;\n    text-decoration: none;\n    border: 1px solid #e7e9ed;\n    border-radius: 3px;\n    cursor: pointer;\n    /*color: #fff;*/\n}\n.paging-item :first-child {\n    margin-left: 0;\n}\n.paging-item:hover {\n    background-color: #5d9cec;\n    color: #fff;\n}\n.paging-item.paging-item--disabled,\n.paging-item.paging-item--more {\n    background-color: #fff;\n    color: #505050;\n}\n/* 禁用 */\n.paging-item.paging-item--disabled {\n    cursor: not-allowed;\n    opacity: .75;\n}\n.paging-item.paging-item--more,\n.paging-item.paging-item--current {\n    cursor: default;\n}\n/* 选中 */\n.paging-item.paging-item--current {\n    background-color: #5d9cec;\n    color: #fff;\n    position: relative;\n    z-index: 1;\n    border-color: #e7e9ed;\n}\n/* 跳转样式S */\n.pag-jump {\n    margin-left: 10px;\n    display: inline-block;\n    color: #ddd;\n}\n.pag-jump--input {\n    width: 40px;\n    font-size: 14px;\n    padding: 6px 4px;\n    line-height: 1.42857143;\n    color: #fff;\n    border: 1px solid #e7e9ed;\n    border-radius: 3px;\n    background: none;\n    text-align: center;\n}\n/* 跳转样式E */\n/* 数据信息 */\n.pag-msg {\n    margin-right: 10px;\n    display: inline-block;\n    color: #ddd;\n}\n", ""]);

// exports


/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'MoPaging',
    //通过props来接受从父组件传递过来的值
    props: {
        //页面中的可见页码，其他的以...替代, 必须是奇数
        perPages: {
            type: Number,
            default: 5
        },
        //当前页码
        pageIndex: {
            type: Number,
            default: 1
        },
        //每页显示条数
        pageSize: {
            type: Number,
            default: 10
        },
        //总记录数
        total: {
            type: Number,
            default: 1
        },
        //是否显示跳页
        jumpShow: {
            type: Boolean,
            default: true
        }
    },
    data: function data() {
        return {
            jumpPag: '', //跳页数据
            index: this.pageIndex, //当前页码
            limit: this.pageSize, //每页显示条数
            size: this.total || 1, //总记录数
            showPrevMore: false,
            showNextMore: false,
            pageSelect: [{ id: 10, name: '10条/页' }, { id: 20, name: '20条/页' }, { id: 30, name: '30条/页' }, { id: 40, name: '40条/页' }, { id: 50, name: '50条/页' }, { id: 60, name: '60条/页' }, { id: 70, name: '70条/页' }, { id: 80, name: '80条/页' }, { id: 90, name: '90条/页' }, { id: 100, name: '100条/页' }], //每页最大显示条数选择
            selected: 10
        };
    },

    methods: {
        // 上一页
        prev: function prev() {
            if (this.index > 1) {
                this.go(this.index - 1);
            }
        },

        // 下一页
        next: function next() {
            if (this.index < this.pages) {
                this.go(this.index + 1);
            }
        },

        // 首页
        first: function first() {
            if (this.index !== 1) {
                this.go(1);
            }
        },

        // 尾页
        last: function last() {
            if (this.index != this.pages) {
                this.go(this.pages);
            }
        },

        //跳转到指定页数
        go: function go(page) {
            // 校验跳页输入的值是否为(正整数)合理值
            var match = /^\+?[1-9][0-9]*$/;
            if (match.test(page)) {
                var totalPage = this.pages;
                page = page > totalPage ? totalPage : page; //输入的页数大于总页数 默认跳转到最后一页
                if (this.index !== page) {
                    this.index = page;
                    //父组件通过change方法来接受当前的页码
                    this.$emit('change', this.index);
                }
            } else {
                this.jumpPag = '';
            }
        }
    },
    computed: {
        //计算总页码
        pages: function pages() {
            return Math.ceil(this.size / this.limit);
        },

        //计算页码，当count等变化时自动计算
        pagers: function pagers() {
            var array = [];
            var perPages = this.perPages;
            var pageCount = this.pages;
            var current = this.index;
            var _offset = (perPages - 1) / 2;
            var offset = {
                start: current - _offset,
                end: current + _offset
                //-1, 3
            };if (offset.start < 1) {
                offset.end = offset.end + (1 - offset.start);
                offset.start = 1;
            }
            if (offset.end > pageCount) {
                offset.start = offset.start - (offset.end - pageCount);
                offset.end = pageCount;
            }
            if (offset.start < 1) offset.start = 1;
            this.showPrevMore = offset.start > 1;
            this.showNextMore = offset.end < pageCount;
            for (var i = offset.start; i <= offset.end; i++) {
                array.push(i);
            }
            return array;
        }
    },
    watch: {
        pageIndex: function pageIndex(val) {
            this.index = val || 1;
        },
        pageSize: function pageSize(val) {
            this.limit = val || 10;
        },
        total: function total(val) {
            this.size = val || 1;
        }
    }
});

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "page-wrapper " }, [
    _c(
      "ul",
      { staticClass: "mo-paging" },
      [
        _c(
          "li",
          {
            class: [
              "paging-item",
              "paging-item--prev",
              { "paging-item--disabled": _vm.index === 1 }
            ],
            on: { click: _vm.prev }
          },
          [_vm._v("上一页")]
        ),
        _vm._v(" "),
        _vm.showPrevMore
          ? _c("li", { class: ["paging-item", "paging-item--more"] }, [
              _vm._v("...")
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.pagers, function(pager, index1) {
          return _c(
            "li",
            {
              key: index1,
              class: [
                "paging-item",
                { "paging-item--current": _vm.index === pager }
              ],
              on: {
                click: function($event) {
                  _vm.go(pager)
                }
              }
            },
            [_vm._v(_vm._s(pager))]
          )
        }),
        _vm._v(" "),
        _vm.showNextMore
          ? _c("li", { class: ["paging-item", "paging-item--more"] }, [
              _vm._v("...")
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "li",
          {
            class: [
              "paging-item",
              "paging-item--next",
              { "paging-item--disabled": _vm.index === _vm.pages }
            ],
            on: { click: _vm.next }
          },
          [_vm._v("下一页")]
        )
      ],
      2
    ),
    _vm._v(" "),
    _vm.jumpShow
      ? _c("div", { staticClass: "jump-wrapper" }, [
          _c("span", { staticClass: "descri" }, [_vm._v("跳至")]),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.jumpPag,
                expression: "jumpPag"
              }
            ],
            staticClass: "jump-page",
            attrs: { type: "text", name: "", value: "" },
            domProps: { value: _vm.jumpPag },
            on: {
              blur: function($event) {
                _vm.go(parseInt(_vm.jumpPag))
              },
              keyup: function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                _vm.go(parseInt(_vm.jumpPag))
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.jumpPag = $event.target.value
              }
            }
          }),
          _c("span", { staticClass: "descri" }, [_vm._v("页")])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "sum-wrapper" }, [
      _c("span", { staticClass: "descri" }, [_vm._v("共")]),
      _c("span", { staticClass: "sum-page" }, [_vm._v(_vm._s(_vm.pages))]),
      _c("span", { staticClass: "descri" }, [_vm._v("页")])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-96baf55e", module.exports)
  }
}

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

module.exports = "/images/no-task-icon.png?2a161c5fa5dddf76607ab374235c44ad";

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

module.exports = "/images/minimal.png?5374dd98e677fe8171af180e2cd70fe2";

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

module.exports = "/images/minimal@2x.png?70a48613bab335e8229fbc13d2e8083e";

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

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(144)
/* template */
var __vue_template__ = __webpack_require__(145)
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

/***/ 144:
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

/***/ 145:
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

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(166);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0f53328f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b968cb3c\",\"scoped\":true,\"hasInlineConfig\":true}!./teacherPapersList.css", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b968cb3c\",\"scoped\":true,\"hasInlineConfig\":true}!./teacherPapersList.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\ni[data-v-b968cb3c] {\r\n  font-style: normal;\n}\n*[data-v-b968cb3c]{\r\n  -webkit-box-sizing:content-box;\r\n          box-sizing:content-box\n}\n.m-main[data-v-b968cb3c] {\r\n  max-width: 1200px;\r\n  background-color: #fff;\r\n  margin: 0 auto;\r\n  padding-bottom: 49px;\r\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n  -moz-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\n}\n.m-main .paper-count-wrapper[data-v-b968cb3c] {\r\n    min-width: 300px;\r\n    height: 47px;\r\n    line-height: 47px;\r\n    padding-left: 39px;\r\n    border-bottom: 1px solid #eeeeee;\r\n    font-size: 14px;\n}\n.m-main .paper-count-wrapper .paper-remain-count[data-v-b968cb3c], .m-main .paper-count-wrapper .paper-complete-count[data-v-b968cb3c] {\r\n      font-size: 18px;\r\n      font-weight: bold;\r\n      color: #f68411;\n}\n.m-main .grades-select-wrapper[data-v-b968cb3c] {\r\n    min-width: 1122px;\r\n    padding: 12px 39px;\r\n    border-bottom: 1px solid #eeeeee;\n}\n.m-main .grades-select-wrapper .m-sele[data-v-b968cb3c] {\r\n    margin-top: 8px;\n}\n.m-main .grades-select-wrapper .m-sele .m-label[data-v-b968cb3c] {\r\n    position: relative;\r\n    top: 8px;\r\n    left: -12px;\r\n    z-index: 1;\r\n    display: inline-block;\n}\n.m-main .grades-select-wrapper .m-sele p.grades-select[data-v-b968cb3c] {\r\n    z-index: 2;\r\n    margin: -30px -17px 0 40px;\r\n    font-size: 0;\n}\n.m-main .grades-select-wrapper p.grades-select .radio-inline__input[data-v-b968cb3c] {\r\n        position: absolute;\r\n        clip: rect(1px, 1px, 1px, 1px);\n}\n.m-main .grades-select-wrapper p.grades-select .radio-inline__label[data-v-b968cb3c] {\r\n        display: inline-block;\r\n        width: 161px;\r\n        height: 22px;\r\n        line-height: 22px;\r\n        margin: 6px 17px 0 0;\r\n        border-radius: 5px;\r\n        border: 1px solid #eeeeee;\r\n        font-size: 14px;\r\n        text-align: center;\r\n        color: #0f0f0f;\r\n        cursor: pointer;\n}\n.m-main .grades-select-wrapper p.grades-select .radio-inline__label.active[data-v-b968cb3c]{\r\n        background: #5d9cec;\r\n        border: 1px solid transparent;\r\n        color: #fff;\n}\n.m-main .m-paper-list .m-paper-amount[data-v-b968cb3c] {\r\n    height: 30px;\r\n    line-height: 30px;\r\n    padding-left: 39px;\r\n    font-size: 14px;\r\n    color: #999999;\n}\n.m-main .m-paper-list .paper-box[data-v-b968cb3c] {\r\n    min-width: 1110px;\r\n    height: 53px;\r\n    padding: 17px 45px 19px 45px;\r\n    border-bottom: 1px dashed #f0f0f0;\n}\n.m-main .m-paper-list .paper-box .icon-image[data-v-b968cb3c] {\r\n      float: left;\r\n      width: 32px;\r\n      height: 38px;\r\n      margin: 6px 29px 0 0;\n}\n.m-main .m-paper-list .paper-box .icon-image img[data-v-b968cb3c] {\r\n        width: 100%;\r\n        height: 100%;\n}\n.m-main .m-paper-list .paper-box .m-paper-detail[data-v-b968cb3c] {\r\n      float: left;\n}\n.m-main .m-paper-list .paper-box .m-paper-detail .paper-title[data-v-b968cb3c] {\r\n        max-width: 1042px;\r\n        white-space: nowrap;\r\n        text-overflow: ellipsis;\r\n        overflow: hidden;\r\n        margin-bottom: 17px;\n}\n.m-main .m-paper-list .paper-box .m-paper-detail .paper-title .title[data-v-b968cb3c] {\r\n          font-size: 18px;\r\n          color: #0b0b0b;\n}\n.m-main .m-paper-list .paper-box .m-paper-detail .paper-title .title.wc[data-v-b968cb3c] {\r\n          color: #666666;\n}\n.m-main .m-paper-list .paper-box .m-paper-detail .m-paper-desc[data-v-b968cb3c] {\r\n        font-size: 0;\r\n        color: #999999;\n}\n.m-main .m-paper-list .paper-box .m-paper-detail .m-paper-desc .info[data-v-b968cb3c] {\r\n          margin-right: 19px;\r\n          font-size: 14px;\n}\n.m-main .m-paper-list .paper-box .m-paper-detail .m-paper-desc .info-data[data-v-b968cb3c] {\r\n          color: #3671cf;\n}\n.m-main .m-paper-list .paper-box .m-paper-detail .m-paper-desc .info-data.red[data-v-b968cb3c] {\r\n          color: red;\n}\n.m-main .m-paper-list .paper-box .m-paper-detail .m-paper-desc.wc[data-v-b968cb3c] {\r\n        color: #999999;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(168);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("edc1f526", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b968cb3c\",\"scoped\":true,\"hasInlineConfig\":true}!./noTask.css", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b968cb3c\",\"scoped\":true,\"hasInlineConfig\":true}!./noTask.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.m-no-main[data-v-b968cb3c] {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  width: 1200px;\r\n  height: 770px;\r\n  background: #fff;\r\n  margin: 0 auto;\r\n  padding: 282px 0 0 334px;\r\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\r\n  -moz-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.13);\n}\n.m-no-main .m-no-icon[data-v-b968cb3c] {\r\n    float: left;\r\n    margin-right: 61px;\n}\n.m-no-main .m-no-txt[data-v-b968cb3c] {\r\n    padding-top: 15px;\n}\n.m-no-main .m-no-txt p[data-v-b968cb3c] {\r\n      margin-bottom: 17px;\n}\n.m-no-main .m-no-txt .line1[data-v-b968cb3c] {\r\n      font-size: 30px;\r\n      color: #5D9CEC;\n}\n.m-no-main .m-no-txt .line2[data-v-b968cb3c] {\r\n      font-size: 20px;\r\n      color: #999999;\r\n      margin-bottom: 29px;\n}\n.m-no-main .m-no-txt a[data-v-b968cb3c] {\r\n      display: inline-block;\r\n      width: 160px;\r\n      height: 45px;\r\n      line-height: 45px;\r\n      text-align: center;\r\n      border-radius: 5px;\r\n      background: #5D9CEC;\r\n      color: #fff;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(170);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4d13e52e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b968cb3c\",\"scoped\":false,\"hasInlineConfig\":true}!./minimal.css", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b968cb3c\",\"scoped\":false,\"hasInlineConfig\":true}!./minimal.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(19);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/* iCheck plugin Minimal skin, black\r\n----------------------------------- */\n.icheckbox_minimal,\r\n.iradio_minimal {\r\n    display: inline-block;\r\n    *display: inline;\r\n    vertical-align: middle;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 18px;\r\n    height: 18px;\r\n    background: url(" + escape(__webpack_require__(118)) + ") no-repeat;\r\n    border: none;\r\n    cursor: pointer;\n}\n.icheckbox_minimal {\r\n    background-position: 0 0;\n}\n.icheckbox_minimal.hover {\r\n        background-position: -20px 0;\n}\n.icheckbox_minimal.checked {\r\n        background-position: -40px 0;\n}\n.icheckbox_minimal.disabled {\r\n        background-position: -60px 0;\r\n        cursor: default;\n}\n.icheckbox_minimal.checked.disabled {\r\n        background-position: -80px 0;\n}\n.iradio_minimal {\r\n    background-position: -100px 0;\n}\n.iradio_minimal.hover {\r\n        background-position: -120px 0;\n}\n.iradio_minimal.checked {\r\n        background-position: -140px 0;\n}\n.iradio_minimal.disabled {\r\n        background-position: -160px 0;\r\n        cursor: default;\n}\n.iradio_minimal.checked.disabled {\r\n        background-position: -180px 0;\n}\r\n\r\n/* HiDPI support */\n@media (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi), (min-resolution: 1.25dppx) {\n.icheckbox_minimal,\r\n    .iradio_minimal {\r\n        background-image: url(" + escape(__webpack_require__(119)) + ");\r\n        background-size: 200px 20px;\n}\n}", ""]);

// exports


/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_js_icheck_icheck_min_js__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_js_icheck_icheck_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_js_icheck_icheck_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Breadcrumb__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Breadcrumb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Breadcrumb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Pagination__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(9);
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





/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'v-pagination': __WEBPACK_IMPORTED_MODULE_2__components_Pagination___default.a,
        'v-breadcrumb': __WEBPACK_IMPORTED_MODULE_1__components_Breadcrumb___default.a
    },
    data: function data() {
        return {
            errorShow: false,
            finishIndex: 0,
            statusId: 0,
            statusList: [{ id: 0, name: '未完成' }, { id: 1, name: '已完成' }],
            subjectIndex: -1,
            subjectId: 0,
            paperList: [],
            questionOption: {
                questionFinishCount: 0,
                questionNoFinishCount: 0
            },
            paginationOption: {
                //分页组件数据
                pageSize: 10, //每页显示10条数据
                currentPage: 1, //当前页码
                count: 0, //总记录数
                isShowJump: true //是否显示跳页
            }
        };
    },

    methods: {
        handlePaperDetail: function handlePaperDetail(paperId, subjectId) {
            var that = this;
            that.$router.push({
                name: 'tasks-paperList-paperDetail',
                params: {
                    userKey: that.userKey,
                    paperId: paperId,
                    subjectId: subjectId
                }
            });
        },

        //从page组件传递过来的当前page
        pageChange: function pageChange(page) {
            this.paginationOption.currentPage = page;
            this.getPaperList(); //查询数据
        },
        getPaperCount: function getPaperCount() {
            var that = this;
            axios.get('/label/question/getPaperCount', {
                params: {
                    userKey: that.userKey
                }
            }).then(function (res) {
                that.questionOption.questionFinishCount = res.data.data.questionFinishCount;
                that.questionOption.questionNoFinishCount = res.data.data.questionNoFinishCount;
            }).catch(function (error) {
                that.$message.error(error.message);
            });
        },
        getPaperList: function getPaperList() {
            var that = this;
            axios.get('label/question/getPaperList', {
                params: {
                    userKey: that.userKey,
                    subjectId: that.subjectId,
                    is_finish: that.statusId,
                    currentPage: that.paginationOption.currentPage,
                    pageSize: that.paginationOption.pageSize
                }
            }).then(function (res) {
                that.paperList = res.data.data.data;
                that.paginationOption.count = res.data.data.total;
            }).catch(function (error) {
                that.$message.error(error.message);
            });
        },
        getPaper: function getPaper() {
            var that = this;
            axios.get('/label/question/getPaper', {
                params: {
                    userKey: that.userKey
                }
            }).then(function (res) {
                if (Object.keys(res.data.data).length > 0) {
                    that.errorShow = true;
                    that.getPaperList(); //获取套卷列表
                }
            }).catch(function (error) {
                that.$message.error(error.message);
            });
        },

        //选中学科
        subjectCheck: function subjectCheck(index) {
            var that = this;
            that.subjectIndex = index;
            that.subjectId = that.subjectList[index].subjectId;
            that.getPaperList();
        },

        //选中状态
        statusCheck: function statusCheck(index) {
            var that = this;
            that.finishIndex = index;
            that.statusId = that.statusList[index].id;
            that.getPaperList();
        }
    },
    mounted: function mounted() {
        var that = this;
        that.getPaperCount();
        that.getPaper();
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapGetters */])({
        userKey: 'getUserKey',
        subjectList: 'getSubject'
    }))
});

/***/ }),

/***/ 172:
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
      _vm.errorShow
        ? _c(
            "div",
            { staticClass: "m-main" },
            [
              _c("div", { staticClass: "paper-count-wrapper" }, [
                _c("div", { staticClass: "paper-count" }, [
                  _c("span", [
                    _vm._v("剩余 "),
                    _c("i", { staticClass: "paper-remain-count" }, [
                      _vm._v(_vm._s(_vm.questionOption.questionNoFinishCount))
                    ]),
                    _vm._v(" 套，")
                  ]),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v("累计完成 "),
                    _c("i", { staticClass: "paper-complete-count" }, [
                      _vm._v(_vm._s(_vm.questionOption.questionFinishCount))
                    ]),
                    _vm._v(" 套")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "grades-select-wrapper" }, [
                _c("div", { staticClass: "m-sele" }, [
                  _c("p", { staticClass: "m-label" }, [_vm._v("学科:")]),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "grades-select" },
                    _vm._l(_vm.subjectList, function(subject, index) {
                      return _c(
                        "label",
                        {
                          staticClass: "radio-inline__label",
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
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "m-sele" }, [
                  _c("p", { staticClass: "m-label" }, [_vm._v("状态:")]),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "grades-select" },
                    _vm._l(_vm.statusList, function(status, index) {
                      return _c(
                        "label",
                        {
                          staticClass: "radio-inline__label",
                          class: { active: index == _vm.finishIndex }
                        },
                        [
                          _c("input", {
                            staticClass: "radio-inline__input",
                            attrs: {
                              type: "radio",
                              name: "is_finish",
                              value: ""
                            },
                            on: {
                              click: function($event) {
                                _vm.statusCheck(index)
                              }
                            }
                          }),
                          _vm._v(
                            "\n                        " + _vm._s(status.name)
                          )
                        ]
                      )
                    })
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "m-paper-list" },
                [
                  _c("p", { staticClass: "m-paper-amount" }, [
                    _c("span", [_vm._v("共")]),
                    _c("span", [_vm._v(_vm._s(_vm.paginationOption.count))]),
                    _c("span", [_vm._v("套题")])
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.paperList, function(paper) {
                    return _c("div", { staticClass: "paper-box" }, [
                      _vm._m(0, true),
                      _vm._v(" "),
                      _c("div", { staticClass: "m-paper-detail" }, [
                        _c("p", { staticClass: "paper-title" }, [
                          _c(
                            "a",
                            {
                              attrs: { href: "javascript:void (0);" },
                              on: {
                                click: function($event) {
                                  _vm.handlePaperDetail(
                                    paper.task_id,
                                    paper.subject_id
                                  )
                                }
                              }
                            },
                            [_vm._v(_vm._s(paper.file_name))]
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "m-paper-desc" }, [
                          _c("span", { staticClass: "info" }, [
                            _vm._v("年份："),
                            _c("i", { staticClass: "info-data" }, [
                              _vm._v(_vm._s(paper.year))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "info" }, [
                            _vm._v("年级："),
                            _c("i", { staticClass: "info-data" }, [
                              _vm._v(_vm._s(paper.grades))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "info" }, [
                            _vm._v("来源："),
                            _c("i", { staticClass: "info-data" }, [
                              _vm._v(_vm._s(paper.source))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "info" }, [
                            _vm._v("地区："),
                            _c("i", { staticClass: "info-data" }, [
                              _vm._v(_vm._s(paper.province))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "info" }, [
                            _vm._v("学科："),
                            _c("i", { staticClass: "info-data" }, [
                              _vm._v(_vm._s(paper.subject_name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "info" }, [
                            _vm._v("领取日期："),
                            _c("i", { staticClass: "info-data" }, [
                              _vm._v(_vm._s(paper.create_time))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "info" }, [
                            _vm._v("状态："),
                            paper.is_finish == 0
                              ? _c("i", { staticClass: "info-data red" }, [
                                  _vm._v("未完成")
                                ])
                              : _c("i", { staticClass: "info-data red" }, [
                                  _vm._v("已完成")
                                ])
                          ])
                        ])
                      ])
                    ])
                  })
                ],
                2
              ),
              _vm._v(" "),
              _vm.paperList.length > 0
                ? _c("v-pagination", {
                    staticClass: "myadd-pag",
                    attrs: {
                      jumpShow: _vm.paginationOption.isShowJump,
                      pageIndex: _vm.paginationOption.currentPage,
                      total: _vm.paginationOption.count,
                      pageSize: _vm.paginationOption.pageSize
                    },
                    on: { change: _vm.pageChange }
                  })
                : _vm._e()
            ],
            1
          )
        : _c("div", { staticClass: "m-no-main" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "m-no-txt" },
              [
                _c("p", { staticClass: "line1" }, [
                  _vm._v("矮油，没有领取任务")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "line2" }, [
                  _vm._v("快去领取任务吧...")
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: {
                        name: "tasks-task",
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
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "icon-image" }, [
      _c("img", { attrs: { src: __webpack_require__(173) } })
    ])
  },
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
    require("vue-hot-reload-api")      .rerender("data-v-b968cb3c", module.exports)
  }
}

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "/images/paper-no.png?fc374cc78f73cc08ce66592f09becf7c";

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(165)
  __webpack_require__(167)
  __webpack_require__(169)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(171)
/* template */
var __vue_template__ = __webpack_require__(172)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b968cb3c"
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
Component.options.__file = "resources\\assets\\js\\page\\teacher\\PaperList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b968cb3c", Component.options)
  } else {
    hotAPI.reload("data-v-b968cb3c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});