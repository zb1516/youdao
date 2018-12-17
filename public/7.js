webpackJsonp([7],{

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

/***/ 108:
/***/ (function(module, exports) {

module.exports = "/images/ui-icon-datetime.png?846cd3384826497351515e793f9fb685";

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * jQuery JavaScript Library v1.12.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-03-17T17:44Z
 */

(function (global, factory) {

  if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return factory(w);
    };
  } else {
    factory(global);
  }

  // Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

  // Support: Firefox 18+
  // Can't be in strict mode, several libs including ASP.NET trace
  // the stack via arguments.caller.callee and Firefox dies if
  // you try to trace through "use strict" call chains. (#13335)
  //"use strict";
  var deletedIds = [];

  var document = window.document;

  var _slice = deletedIds.slice;

  var concat = deletedIds.concat;

  var push = deletedIds.push;

  var indexOf = deletedIds.indexOf;

  var class2type = {};

  var toString = class2type.toString;

  var hasOwn = class2type.hasOwnProperty;

  var support = {};

  var version = "1.12.2",


  // Define a local copy of jQuery
  jQuery = function jQuery(selector, context) {

    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context);
  },


  // Support: Android<4.1, IE<9
  // Make sure we trim BOM and NBSP
  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


  // Matches dashed string for camelizing
  rmsPrefix = /^-ms-/,
      rdashAlpha = /-([\da-z])/gi,


  // Used by jQuery.camelCase as callback to replace()
  fcamelCase = function fcamelCase(all, letter) {
    return letter.toUpperCase();
  };

  jQuery.fn = jQuery.prototype = {

    // The current version of jQuery being used
    jquery: version,

    constructor: jQuery,

    // Start with an empty selector
    selector: "",

    // The default length of a jQuery object is 0
    length: 0,

    toArray: function toArray() {
      return _slice.call(this);
    },

    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function get(num) {
      return num != null ?

      // Return just the one element from the set
      num < 0 ? this[num + this.length] : this[num] :

      // Return all the elements in a clean array
      _slice.call(this);
    },

    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function pushStack(elems) {

      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems);

      // Add the old object onto the stack (as a reference)
      ret.prevObject = this;
      ret.context = this.context;

      // Return the newly-formed element set
      return ret;
    },

    // Execute a callback for every element in the matched set.
    each: function each(callback) {
      return jQuery.each(this, callback);
    },

    map: function map(callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },

    slice: function slice() {
      return this.pushStack(_slice.apply(this, arguments));
    },

    first: function first() {
      return this.eq(0);
    },

    last: function last() {
      return this.eq(-1);
    },

    eq: function eq(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },

    end: function end() {
      return this.prevObject || this.constructor();
    },

    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: deletedIds.sort,
    splice: deletedIds.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var src,
        copyIsArray,
        copy,
        name,
        options,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;

    // Handle a deep copy situation
    if (typeof target === "boolean") {
      deep = target;

      // skip the boolean and the target
      target = arguments[i] || {};
      i++;
    }

    // Handle case when target is a string or something (possible in deep copy)
    if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
      target = {};
    }

    // extend jQuery itself if only one argument is passed
    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {

      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {

        // Extend the base object
        for (name in options) {
          src = target[name];
          copy = options[name];

          // Prevent never-ending loop
          if (target === copy) {
            continue;
          }

          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {

            if (copyIsArray) {
              copyIsArray = false;
              clone = src && jQuery.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            }

            // Never move original objects, clone them
            target[name] = jQuery.extend(deep, clone, copy);

            // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }

    // Return the modified object
    return target;
  };

  jQuery.extend({

    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

    // Assume jQuery is ready without the ready module
    isReady: true,

    error: function error(msg) {
      throw new Error(msg);
    },

    noop: function noop() {},

    // See test/unit/core.js for details concerning isFunction.
    // Since version 1.3, DOM methods and functions like alert
    // aren't supported. They return false on IE (#2968).
    isFunction: function isFunction(obj) {
      return jQuery.type(obj) === "function";
    },

    isArray: Array.isArray || function (obj) {
      return jQuery.type(obj) === "array";
    },

    isWindow: function isWindow(obj) {
      /* jshint eqeqeq: false */
      return obj != null && obj == obj.window;
    },

    isNumeric: function isNumeric(obj) {

      // parseFloat NaNs numeric-cast false positives (null|true|false|"")
      // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
      // subtraction forces infinities to NaN
      // adding 1 corrects loss of precision from parseFloat (#15100)
      var realStringObj = obj && obj.toString();
      return !jQuery.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0;
    },

    isEmptyObject: function isEmptyObject(obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },

    isPlainObject: function isPlainObject(obj) {
      var key;

      // Must be an Object.
      // Because of IE, we also have to check the presence of the constructor property.
      // Make sure that DOM nodes and window objects don't pass through, as well
      if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
        return false;
      }

      try {

        // Not own constructor property must be Object
        if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
          return false;
        }
      } catch (e) {

        // IE8,9 Will throw exceptions on certain host objects #9897
        return false;
      }

      // Support: IE<9
      // Handle iteration over inherited properties before own properties.
      if (!support.ownFirst) {
        for (key in obj) {
          return hasOwn.call(obj, key);
        }
      }

      // Own properties are enumerated firstly, so to speed up,
      // if last one is own, then all properties are own.
      for (key in obj) {}

      return key === undefined || hasOwn.call(obj, key);
    },

    type: function type(obj) {
      if (obj == null) {
        return obj + "";
      }
      return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
    },

    // Workarounds based on findings by Jim Driscoll
    // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
    globalEval: function globalEval(data) {
      if (data && jQuery.trim(data)) {

        // We use execScript on Internet Explorer
        // We use an anonymous function so that context is window
        // rather than jQuery in Firefox
        (window.execScript || function (data) {
          window["eval"].call(window, data); // jscs:ignore requireDotNotation
        })(data);
      }
    },

    // Convert dashed to camelCase; used by the css and data modules
    // Microsoft forgot to hump their vendor prefix (#9572)
    camelCase: function camelCase(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    },

    nodeName: function nodeName(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },

    each: function each(obj, callback) {
      var length,
          i = 0;

      if (isArrayLike(obj)) {
        length = obj.length;
        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }

      return obj;
    },

    // Support: Android<4.1, IE<9
    trim: function trim(text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },

    // results is for internal usage only
    makeArray: function makeArray(arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },

    inArray: function inArray(elem, arr, i) {
      var len;

      if (arr) {
        if (indexOf) {
          return indexOf.call(arr, elem, i);
        }

        len = arr.length;
        i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

        for (; i < len; i++) {

          // Skip accessing in sparse arrays
          if (i in arr && arr[i] === elem) {
            return i;
          }
        }
      }

      return -1;
    },

    merge: function merge(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;

      while (j < len) {
        first[i++] = second[j++];
      }

      // Support: IE<9
      // Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
      if (len !== len) {
        while (second[j] !== undefined) {
          first[i++] = second[j++];
        }
      }

      first.length = i;

      return first;
    },

    grep: function grep(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert;

      // Go through the array, only saving the items
      // that pass the validator function
      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);
        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }

      return matches;
    },

    // arg is for internal usage only
    map: function map(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = [];

      // Go through the array, translating each of the items to their new values
      if (isArrayLike(elems)) {
        length = elems.length;
        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }

        // Go through every key on the object,
      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }
      }

      // Flatten any nested arrays
      return concat.apply([], ret);
    },

    // A global GUID counter for objects
    guid: 1,

    // Bind a function to a context, optionally partially applying any
    // arguments.
    proxy: function proxy(fn, context) {
      var args, proxy, tmp;

      if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      }

      // Quick check to determine if target is callable, in the spec
      // this throws a TypeError, but we will just return undefined.
      if (!jQuery.isFunction(fn)) {
        return undefined;
      }

      // Simulated bind
      args = _slice.call(arguments, 2);
      proxy = function proxy() {
        return fn.apply(context || this, args.concat(_slice.call(arguments)));
      };

      // Set the guid of unique handler to the same of original handler, so it can be removed
      proxy.guid = fn.guid = fn.guid || jQuery.guid++;

      return proxy;
    },

    now: function now() {
      return +new Date();
    },

    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });

  // JSHint would error on this code due to the Symbol not being defined in ES5.
  // Defining this global in .jshintrc would create a danger of using the global
  // unguarded in another place, it seems safer to just disable JSHint for these
  // three lines.
  /* jshint ignore: start */
  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = deletedIds[Symbol.iterator];
  }
  /* jshint ignore: end */

  // Populate the class2type map
  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArrayLike(obj) {

    // Support: iOS 8.2 (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        type = jQuery.type(obj);

    if (type === "function" || jQuery.isWindow(obj)) {
      return false;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }
  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.2.1
   * http://sizzlejs.com/
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2015-10-17
   */
  function (window) {

    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,


    // Local document vars
    setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,


    // Instance-specific data
    expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        sortOrder = function sortOrder(a, b) {
      if (a === b) {
        hasDuplicate = true;
      }
      return 0;
    },


    // General-purpose constants
    MAX_NEGATIVE = 1 << 31,


    // Instance methods
    hasOwn = {}.hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,

    // Use a stripped-down indexOf as it's faster than native
    // http://jsperf.com/thor-indexof-vs-for/5
    indexOf = function indexOf(list, elem) {
      var i = 0,
          len = list.length;
      for (; i < len; i++) {
        if (list[i] === elem) {
          return i;
        }
      }
      return -1;
    },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


    // Regular expressions

    // http://www.w3.org/TR/css3-selectors/#whitespace
    whitespace = "[\\x20\\t\\r\\n\\f]",


    // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
    identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",


    // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
    // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace +
    // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" +
    // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    // 1. quoted (capture 3; capture 4 or capture 5)
    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
    // 2. simple (capture 6)
    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
    // 3. anything else (capture 2)
    ".*" + ")\\)|)",


    // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
      "ID": new RegExp("^#(" + identifier + ")"),
      "CLASS": new RegExp("^\\.(" + identifier + ")"),
      "TAG": new RegExp("^(" + identifier + "|[*])"),
      "ATTR": new RegExp("^" + attributes),
      "PSEUDO": new RegExp("^" + pseudos),
      "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
      "bool": new RegExp("^(?:" + booleans + ")$", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    },
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,


    // Easily-parseable/retrievable ID or TAG or CLASS selectors
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        rescape = /'|\\/g,


    // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
        funescape = function funescape(_, escaped, escapedWhitespace) {
      var high = "0x" + escaped - 0x10000;
      // NaN means non-codepoint
      // Support: Firefox<24
      // Workaround erroneous numeric interpretation of +"0x"
      return high !== high || escapedWhitespace ? escaped : high < 0 ?
      // BMP codepoint
      String.fromCharCode(high + 0x10000) :
      // Supplemental Plane codepoint (surrogate pair)
      String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
    },


    // Used for iframes
    // See setDocument()
    // Removing the function wrapper causes a "Permission Denied"
    // error in IE
    unloadHandler = function unloadHandler() {
      setDocument();
    };

    // Optimize for push.apply( _, NodeList )
    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
      // Support: Android<4.0
      // Detect silently failing push.apply
      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = { apply: arr.length ?

        // Leverage slice if possible
        function (target, els) {
          push_native.apply(target, slice.call(els));
        } :

        // Support: IE<9
        // Otherwise append directly
        function (target, els) {
          var j = target.length,
              i = 0;
          // Can't trust NodeList.length
          while (target[j++] = els[i++]) {}
          target.length = j - 1;
        }
      };
    }

    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          nidselect,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,


      // nodeType defaults to 9, since context defaults to document
      nodeType = context ? context.nodeType : 9;

      results = results || [];

      // Return early from calls with invalid selector or context
      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

        return results;
      }

      // Try to shortcut find operations (as opposed to filters) in HTML documents
      if (!seed) {

        if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
          setDocument(context);
        }
        context = context || document;

        if (documentIsHTML) {

          // If the selector is sufficiently simple, try using a "get*By*" DOM method
          // (excepting DocumentFragment context, where the methods don't exist)
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

            // ID selector
            if (m = match[1]) {

              // Document context
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {

                  // Support: IE, Opera, Webkit
                  // TODO: identify versions
                  // getElementById can match elements by name instead of ID
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                }

                // Element context
              } else {

                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {

                  results.push(elem);
                  return results;
                }
              }

              // Type selector
            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results;

              // Class selector
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {

              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          }

          // Take advantage of querySelectorAll
          if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {

            if (nodeType !== 1) {
              newContext = context;
              newSelector = selector;

              // qSA looks outside Element context, which is not what we want
              // Thanks to Andrew Dupont for this workaround technique
              // Support: IE <=8
              // Exclude object elements
            } else if (context.nodeName.toLowerCase() !== "object") {

              // Capture the context ID, setting it first if necessary
              if (nid = context.getAttribute("id")) {
                nid = nid.replace(rescape, "\\$&");
              } else {
                context.setAttribute("id", nid = expando);
              }

              // Prefix every selector in the list
              groups = tokenize(selector);
              i = groups.length;
              nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
              while (i--) {
                groups[i] = nidselect + " " + toSelector(groups[i]);
              }
              newSelector = groups.join(",");

              // Expand context for sibling selectors
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
            }

            if (newSelector) {
              try {
                push.apply(results, newContext.querySelectorAll(newSelector));
                return results;
              } catch (qsaError) {} finally {
                if (nid === expando) {
                  context.removeAttribute("id");
                }
              }
            }
          }
        }
      }

      // All others
      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }

    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */
    function createCache() {
      var keys = [];

      function cache(key, value) {
        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
        if (keys.push(key + " ") > Expr.cacheLength) {
          // Only keep the most recent entries
          delete cache[keys.shift()];
        }
        return cache[key + " "] = value;
      }
      return cache;
    }

    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */
    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }

    /**
     * Support testing using an element
     * @param {Function} fn Passed the created div and expects a boolean result
     */
    function assert(fn) {
      var div = document.createElement("div");

      try {
        return !!fn(div);
      } catch (e) {
        return false;
      } finally {
        // Remove from its parent by default
        if (div.parentNode) {
          div.parentNode.removeChild(div);
        }
        // release memory in IE
        div = null;
      }
    }

    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */
    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;

      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }

    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */
    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);

      // Use IE sourceIndex if available on both nodes
      if (diff) {
        return diff;
      }

      // Check if b follows a
      if (cur) {
        while (cur = cur.nextSibling) {
          if (cur === b) {
            return -1;
          }
        }
      }

      return a ? 1 : -1;
    }

    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */
    function createInputPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }

    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */
    function createButtonPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }

    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */
    function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        argument = +argument;
        return markFunction(function (seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length;

          // Match elements found at the specified indexes
          while (i--) {
            if (seed[j = matchIndexes[i]]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }

    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */
    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    }

    // Expose support vars for convenience
    support = Sizzle.support = {};

    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */
    isXML = Sizzle.isXML = function (elem) {
      // documentElement is verified for cases where it doesn't yet exist
      // (such as loading iframes in IE - #4833)
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;
      return documentElement ? documentElement.nodeName !== "HTML" : false;
    };

    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */
    setDocument = Sizzle.setDocument = function (node) {
      var hasCompare,
          parent,
          doc = node ? node.ownerDocument || node : preferredDoc;

      // Return early if doc is invalid or already selected
      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      }

      // Update global variables
      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document);

      // Support: IE 9-11, Edge
      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
      if ((parent = document.defaultView) && parent.top !== parent) {
        // Support: IE 11
        if (parent.addEventListener) {
          parent.addEventListener("unload", unloadHandler, false);

          // Support: IE 9 - 10 only
        } else if (parent.attachEvent) {
          parent.attachEvent("onunload", unloadHandler);
        }
      }

      /* Attributes
       ---------------------------------------------------------------------- */

      // Support: IE<8
      // Verify that getAttribute really returns attributes and not properties
      // (excepting IE8 booleans)
      support.attributes = assert(function (div) {
        div.className = "i";
        return !div.getAttribute("className");
      });

      /* getElement(s)By*
       ---------------------------------------------------------------------- */

      // Check if getElementsByTagName("*") returns only elements
      support.getElementsByTagName = assert(function (div) {
        div.appendChild(document.createComment(""));
        return !div.getElementsByTagName("*").length;
      });

      // Support: IE<9
      support.getElementsByClassName = rnative.test(document.getElementsByClassName);

      // Support: IE<10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programatically-set names,
      // so use a roundabout getElementsByName test
      support.getById = assert(function (div) {
        docElem.appendChild(div).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      });

      // ID find and filter
      if (support.getById) {
        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var m = context.getElementById(id);
            return m ? [m] : [];
          }
        };
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        };
      } else {
        // Support: IE6/7
        // getElementById is not reliable as a find shortcut
        delete Expr.find["ID"];

        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        };
      }

      // Tag
      Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag);

          // DocumentFragment nodes don't have gEBTN
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function (tag, context) {
        var elem,
            tmp = [],
            i = 0,

        // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        results = context.getElementsByTagName(tag);

        // Filter out possible comments
        if (tag === "*") {
          while (elem = results[i++]) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }

          return tmp;
        }
        return results;
      };

      // Class
      Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };

      /* QSA/matchesSelector
       ---------------------------------------------------------------------- */

      // QSA and matchesSelector support

      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
      rbuggyMatches = [];

      // qSa(:focus) reports false when true (Chrome 21)
      // We allow this because of a bug in IE8/9 that throws an error
      // whenever `document.activeElement` is accessed on an iframe
      // So, we allow :focus to pass through QSA all the time to avoid the IE error
      // See http://bugs.jquery.com/ticket/13378
      rbuggyQSA = [];

      if (support.qsa = rnative.test(document.querySelectorAll)) {
        // Build QSA regex
        // Regex strategy adopted from Diego Perini
        assert(function (div) {
          // Select is set to empty string on purpose
          // This is to test IE's treatment of not explicitly
          // setting a boolean content attribute,
          // since its presence should be enough
          // http://bugs.jquery.com/ticket/12359
          docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";

          // Support: IE8, Opera 11-12.16
          // Nothing should be selected when empty strings follow ^= or $= or *=
          // The test attribute must be unknown in Opera but "safe" for WinRT
          // http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
          if (div.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          }

          // Support: IE8
          // Boolean attributes and "value" are not treated correctly
          if (!div.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          }

          // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
          if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          }

          // Webkit/Opera - :checked should return selected option elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          // IE8 throws error here and will not see later tests
          if (!div.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          }

          // Support: Safari 8+, iOS 8+
          // https://bugs.webkit.org/show_bug.cgi?id=136851
          // In-page `selector#id sibing-combinator selector` fails
          if (!div.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
        });

        assert(function (div) {
          // Support: Windows 8 Native Apps
          // The type and name attributes are restricted during .innerHTML assignment
          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          div.appendChild(input).setAttribute("name", "D");

          // Support: IE8
          // Enforce case-sensitivity of name attribute
          if (div.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          }

          // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
          // IE8 throws error here and will not see later tests
          if (!div.querySelectorAll(":enabled").length) {
            rbuggyQSA.push(":enabled", ":disabled");
          }

          // Opera 10-11 does not throw on post-comma invalid pseudos
          div.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }

      if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

        assert(function (div) {
          // Check to see if it's possible to do matchesSelector
          // on a disconnected node (IE 9)
          support.disconnectedMatch = matches.call(div, "div");

          // This should fail with an exception
          // Gecko does not error, returns false instead
          matches.call(div, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }

      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

      /* Contains
       ---------------------------------------------------------------------- */
      hasCompare = rnative.test(docElem.compareDocumentPosition);

      // Element contains another
      // Purposefully self-exclusive
      // As in, an element does not contain itself
      contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = b.parentNode) {
            if (b === a) {
              return true;
            }
          }
        }
        return false;
      };

      /* Sorting
       ---------------------------------------------------------------------- */

      // Document order sorting
      sortOrder = hasCompare ? function (a, b) {

        // Flag for duplicate removal
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }

        // Sort on method existence if only one input has compareDocumentPosition
        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
        if (compare) {
          return compare;
        }

        // Calculate position if both inputs belong to the same document
        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

        // Otherwise we know they are disconnected
        1;

        // Disconnected nodes
        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

          // Choose the first element that is related to our preferred document
          if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
            return -1;
          }
          if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
            return 1;
          }

          // Maintain original order
          return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
        }

        return compare & 4 ? -1 : 1;
      } : function (a, b) {
        // Exit early if the nodes are identical
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }

        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b];

        // Parentless nodes are either documents or disconnected
        if (!aup || !bup) {
          return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

          // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b);
        }

        // Otherwise we need full lists of their ancestors for comparison
        cur = a;
        while (cur = cur.parentNode) {
          ap.unshift(cur);
        }
        cur = b;
        while (cur = cur.parentNode) {
          bp.unshift(cur);
        }

        // Walk down the tree looking for a discrepancy
        while (ap[i] === bp[i]) {
          i++;
        }

        return i ?
        // Do a sibling check if the nodes have a common ancestor
        siblingCheck(ap[i], bp[i]) :

        // Otherwise nodes in our document sort first
        ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      };

      return document;
    };

    Sizzle.matches = function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    };

    Sizzle.matchesSelector = function (elem, expr) {
      // Set document vars if needed
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }

      // Make sure that attribute selectors are quoted
      expr = expr.replace(rattributeQuotes, "='$1']");

      if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

        try {
          var ret = matches.call(elem, expr);

          // IE 9's matchesSelector returns false on disconnected nodes
          if (ret || support.disconnectedMatch ||
          // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {}
      }

      return Sizzle(expr, document, null, [elem]).length > 0;
    };

    Sizzle.contains = function (context, elem) {
      // Set document vars if needed
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }
      return contains(context, elem);
    };

    Sizzle.attr = function (elem, name) {
      // Set document vars if needed
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }

      var fn = Expr.attrHandle[name.toLowerCase()],

      // Don't get fooled by Object.prototype properties (jQuery #13807)
      val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };

    Sizzle.error = function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };

    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */
    Sizzle.uniqueSort = function (results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0;

      // Unless we *know* we can detect duplicates, assume their presence
      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);

      if (hasDuplicate) {
        while (elem = results[i++]) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }
        while (j--) {
          results.splice(duplicates[j], 1);
        }
      }

      // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225
      sortInput = null;

      return results;
    };

    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */
    getText = Sizzle.getText = function (elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;

      if (!nodeType) {
        // If no nodeType, this is expected to be an array
        while (node = elem[i++]) {
          // Do not traverse comment nodes
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        // Use textContent for elements
        // innerText usage removed for consistency of new lines (jQuery #11153)
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          // Traverse its children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      }
      // Do not include comment or processing instruction nodes

      return ret;
    };

    Expr = Sizzle.selectors = {

      // Can be adjusted by the user
      cacheLength: 50,

      createPseudo: markFunction,

      match: matchExpr,

      attrHandle: {},

      find: {},

      relative: {
        ">": { dir: "parentNode", first: true },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: true },
        "~": { dir: "previousSibling" }
      },

      preFilter: {
        "ATTR": function ATTR(match) {
          match[1] = match[1].replace(runescape, funescape);

          // Move the given value to match[3] whether quoted or unquoted
          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }

          return match.slice(0, 4);
        },

        "CHILD": function CHILD(match) {
          /* matches from matchExpr["CHILD"]
           1 type (only|nth|...)
           2 what (child|of-type)
           3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
           4 xn-component of xn+y argument ([+-]?\d*n|)
           5 sign of xn-component
           6 x of xn-component
           7 sign of y-component
           8 y of y-component
           */
          match[1] = match[1].toLowerCase();

          if (match[1].slice(0, 3) === "nth") {
            // nth-* requires argument
            if (!match[3]) {
              Sizzle.error(match[0]);
            }

            // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1
            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +(match[7] + match[8] || match[3] === "odd");

            // other types prohibit arguments
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }

          return match;
        },

        "PSEUDO": function PSEUDO(match) {
          var excess,
              unquoted = !match[6] && match[2];

          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          }

          // Accept quoted arguments as-is
          if (match[3]) {
            match[2] = match[4] || match[5] || "";

            // Strip excess characters from unquoted arguments
          } else if (unquoted && rpseudo.test(unquoted) && (
          // Get excess from tokenize (recursively)
          excess = tokenize(unquoted, true)) && (
          // advance to the next closing parenthesis
          excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

            // excess is a negative index
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          }

          // Return only captures needed by the pseudo filter method (type and argument)
          return match.slice(0, 3);
        }
      },

      filter: {

        "TAG": function TAG(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function () {
            return true;
          } : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },

        "CLASS": function CLASS(className) {
          var pattern = classCache[className + " "];

          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },

        "ATTR": function ATTR(name, operator, check) {
          return function (elem) {
            var result = Sizzle.attr(elem, name);

            if (result == null) {
              return operator === "!=";
            }
            if (!operator) {
              return true;
            }

            result += "";

            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          };
        },

        "CHILD": function CHILD(type, what, argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";

          return first === 1 && last === 0 ?

          // Shortcut for :nth-*(n)
          function (elem) {
            return !!elem.parentNode;
          } : function (elem, context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;

            if (parent) {

              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem;
                  while (node = node[dir]) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {

                      return false;
                    }
                  }
                  // Reverse direction for :only-* (if we haven't yet done so)
                  start = dir = type === "only" && !start && "nextSibling";
                }
                return true;
              }

              start = [forward ? parent.firstChild : parent.lastChild];

              // non-xml :nth-child(...) stores cache data on `parent`
              if (forward && useCache) {

                // Seek `elem` from a previously-cached index

                // ...in a gzip-friendly way
                node = parent;
                outerCache = node[expando] || (node[expando] = {});

                // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)
                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];

                while (node = ++nodeIndex && node && node[dir] || (

                // Fallback to seeking `elem` from the start
                diff = nodeIndex = 0) || start.pop()) {

                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                // Use previously-cached element index if available
                if (useCache) {
                  // ...in a gzip-friendly way
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {});

                  // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)
                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                }

                // xml :nth-child(...)
                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                if (diff === false) {
                  // Use the same loop as above to seek `elem` from the start
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {

                      // Cache the index of each encountered element
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {});

                        // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

                        uniqueCache[type] = [dirruns, diff];
                      }

                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              }

              // Incorporate the offset, then check against cycle size
              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },

        "PSEUDO": function PSEUDO(pseudo, argument) {
          // pseudo-class names are case-insensitive
          // http://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

          // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as Sizzle does
          if (fn[expando]) {
            return fn(argument);
          }

          // But maintain support for old signatures
          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;
              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }

          return fn;
        }
      },

      pseudos: {
        // Potentially complex pseudos
        "not": markFunction(function (selector) {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));

          return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length;

            // Match elements unmatched by `matcher`
            while (i--) {
              if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function (elem, context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results);
            // Don't keep the element (issue #299)
            input[0] = null;
            return !results.pop();
          };
        }),

        "has": markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),

        "contains": markFunction(function (text) {
          text = text.replace(runescape, funescape);
          return function (elem) {
            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
          };
        }),

        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "lang": markFunction(function (lang) {
          // lang value must be a valid identifier
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }
          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            var elemLang;
            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);
            return false;
          };
        }),

        // Miscellaneous
        "target": function target(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },

        "root": function root(elem) {
          return elem === docElem;
        },

        "focus": function focus(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },

        // Boolean properties
        "enabled": function enabled(elem) {
          return elem.disabled === false;
        },

        "disabled": function disabled(elem) {
          return elem.disabled === true;
        },

        "checked": function checked(elem) {
          // In CSS3, :checked should return both checked and selected elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          var nodeName = elem.nodeName.toLowerCase();
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        },

        "selected": function selected(elem) {
          // Accessing this property makes selected-by-default
          // options in Safari work properly
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }

          return elem.selected === true;
        },

        // Contents
        "empty": function empty(elem) {
          // http://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
          //   but not by others (comment: 8; processing instruction: 7; etc.)
          // nodeType < 6 works because attributes (2) do not appear as children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }
          return true;
        },

        "parent": function parent(elem) {
          return !Expr.pseudos["empty"](elem);
        },

        // Element/input types
        "header": function header(elem) {
          return rheader.test(elem.nodeName);
        },

        "input": function input(elem) {
          return rinputs.test(elem.nodeName);
        },

        "button": function button(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },

        "text": function text(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

          // Support: IE<8
          // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
          (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },

        // Position-in-collection
        "first": createPositionalPseudo(function () {
          return [0];
        }),

        "last": createPositionalPseudo(function (matchIndexes, length) {
          return [length - 1];
        }),

        "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),

        "even": createPositionalPseudo(function (matchIndexes, length) {
          var i = 0;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),

        "odd": createPositionalPseudo(function (matchIndexes, length) {
          var i = 1;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),

        "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; --i >= 0;) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),

        "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; ++i < length;) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        })
      }
    };

    Expr.pseudos["nth"] = Expr.pseudos["eq"];

    // Add button/input type pseudos
    for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }
    for (i in { submit: true, reset: true }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    }

    // Easy API for creating new setFilters
    function setFilters() {}
    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();

    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];

      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }

      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;

      while (soFar) {

        // Comma and first run
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            // Don't consume trailing commas as valid
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push(tokens = []);
        }

        matched = false;

        // Combinators
        if (match = rcombinators.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        }

        // Filters
        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }

        if (!matched) {
          break;
        }
      }

      // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens
      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
      // Cache the tokens
      tokenCache(selector, groups).slice(0);
    };

    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";
      for (; i < len; i++) {
        selector += tokens[i].value;
      }
      return selector;
    }

    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          checkNonElements = base && dir === "parentNode",
          doneName = done++;

      return combinator.first ?
      // Check against closest ancestor/preceding element
      function (elem, context, xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }
      } :

      // Check against all ancestor/preceding elements
      function (elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName];

        // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
        if (xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {});

              // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)
              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

              if ((oldCache = uniqueCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

                // Assign to newCache so results back-propagate to previous elements
                return newCache[2] = oldCache[2];
              } else {
                // Reuse newcache so results back-propagate to previous elements
                uniqueCache[dir] = newCache;

                // A match means we're done; a fail means we have to keep checking
                if (newCache[2] = matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          }
        }
      };
    }

    function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = matchers.length;
        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }

    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;
      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }
      return results;
    }

    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;

      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);
            if (mapped) {
              map.push(i);
            }
          }
        }
      }

      return newUnmatched;
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }
      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }
      return markFunction(function (seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,


        // Get initial elements from seed or context
        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


        // Prefilter to get matcher input, preserving a map for seed-results synchronization
        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ?
        // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || (seed ? preFilter : preexisting || postFilter) ?

        // ...intermediate processing is necessary
        [] :

        // ...otherwise use results directly
        results : matcherIn;

        // Find primary matches
        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        }

        // Apply postFilter
        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml);

          // Un-match failing elements by moving them back to matcherIn
          i = temp.length;
          while (i--) {
            if (elem = temp[i]) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }

        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = [];
              i = matcherOut.length;
              while (i--) {
                if (elem = matcherOut[i]) {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = elem);
                }
              }
              postFinder(null, matcherOut = [], temp, xml);
            }

            // Move matched elements from seed to results to keep them synchronized
            i = matcherOut.length;
            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

                seed[temp] = !(results[temp] = elem);
              }
            }
          }

          // Add elements to results, through postFinder if defined
        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }

    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,


      // The foundational matcher ensures that elements are reachable from top-level context(s)
      matchContext = addCombinator(function (elem) {
        return elem === checkContext;
      }, implicitRelative, true),
          matchAnyContext = addCombinator(function (elem) {
        return indexOf(checkContext, elem) > -1;
      }, implicitRelative, true),
          matchers = [function (elem, context, xml) {
        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
        // Avoid hanging onto element (issue #299)
        checkContext = null;
        return ret;
      }];

      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

          // Return special upon seeing a positional matcher
          if (matcher[expando]) {
            // Find the next relative operator (if any) for proper handling
            j = ++i;
            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }
            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
            // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }
          matchers.push(matcher);
        }
      }

      return elementMatcher(matchers);
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function superMatcher(seed, context, xml, results, outermost) {
        var elem,
            j,
            matcher,
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,

        // We must always have either seed elements or outermost context
        elems = seed || byElement && Expr.find["TAG"]("*", outermost),

        // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
            len = elems.length;

        if (outermost) {
          outermostContext = context === document || context || outermost;
        }

        // Add elements passing elementMatchers directly to results
        // Support: IE<9, Safari
        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
        for (; i !== len && (elem = elems[i]) != null; i++) {
          if (byElement && elem) {
            j = 0;
            if (!context && elem.ownerDocument !== document) {
              setDocument(elem);
              xml = !documentIsHTML;
            }
            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context || document, xml)) {
                results.push(elem);
                break;
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
            }
          }

          // Track unmatched elements for set filters
          if (bySet) {
            // They will have gone through all possible matchers
            if (elem = !matcher && elem) {
              matchedCount--;
            }

            // Lengthen the array for every element, matched or not
            if (seed) {
              unmatched.push(elem);
            }
          }
        }

        // `i` is now the count of elements visited above, and adding it to `matchedCount`
        // makes the latter nonnegative.
        matchedCount += i;

        // Apply set filters to unmatched elements
        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
        // no element matchers and no seed.
        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
        // numerically zero.
        if (bySet && i !== matchedCount) {
          j = 0;
          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }

          if (seed) {
            // Reintegrate element matches to eliminate the need for sorting
            if (matchedCount > 0) {
              while (i--) {
                if (!(unmatched[i] || setMatched[i])) {
                  setMatched[i] = pop.call(results);
                }
              }
            }

            // Discard index placeholder values to get only actual matches
            setMatched = condense(setMatched);
          }

          // Add matches to results
          push.apply(results, setMatched);

          // Seedless set matches succeeding multiple successful matchers stipulate sorting
          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

            Sizzle.uniqueSort(results);
          }
        }

        // Override manipulation of globals by nested matchers
        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }

        return unmatched;
      };

      return bySet ? markFunction(superMatcher) : superMatcher;
    }

    compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];

      if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!match) {
          match = tokenize(selector);
        }
        i = match.length;
        while (i--) {
          cached = matcherFromTokens(match[i]);
          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }

        // Cache the compiled function
        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

        // Save selector and tokenization
        cached.selector = selector;
      }
      return cached;
    };

    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */
    select = Sizzle.select = function (selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize(selector = compiled.selector || selector);

      results = results || [];

      // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context)
      if (match.length === 1) {

        // Reduce context if the leading compound selector is an ID
        tokens = match[0] = match[0].slice(0);
        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
          if (!context) {
            return results;

            // Precompiled matchers will still verify ancestry, so step up a level
          } else if (compiled) {
            context = context.parentNode;
          }

          selector = selector.slice(tokens.shift().value.length);
        }

        // Fetch a seed set for right-to-left matching
        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
        while (i--) {
          token = tokens[i];

          // Abort if we hit a combinator
          if (Expr.relative[type = token.type]) {
            break;
          }
          if (find = Expr.find[type]) {
            // Search, expanding context for leading sibling combinators
            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

              // If seed is empty or no tokens remain, we can return early
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);
              if (!selector) {
                push.apply(results, seed);
                return results;
              }

              break;
            }
          }
        }
      }

      // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above
      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    };

    // One-time assignments

    // Sort stability
    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

    // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function
    support.detectDuplicates = !!hasDuplicate;

    // Initialize against the default document
    setDocument();

    // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*
    support.sortDetached = assert(function (div1) {
      // Should return 1, but returns 4 (following)
      return div1.compareDocumentPosition(document.createElement("div")) & 1;
    });

    // Support: IE<8
    // Prevent attribute/property "interpolation"
    // http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
    if (!assert(function (div) {
      div.innerHTML = "<a href='#'></a>";
      return div.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function (elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    }

    // Support: IE<9
    // Use defaultValue in place of getAttribute("value")
    if (!support.attributes || !assert(function (div) {
      div.innerHTML = "<input/>";
      div.firstChild.setAttribute("value", "");
      return div.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function (elem, name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    }

    // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies
    if (!assert(function (div) {
      return div.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function (elem, name, isXML) {
        var val;
        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }

    return Sizzle;
  }(window);

  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;
  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;

  var dir = function dir(elem, _dir, until) {
    var matched = [],
        truncate = until !== undefined;

    while ((elem = elem[_dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }
        matched.push(elem);
      }
    }
    return matched;
  };

  var _siblings = function _siblings(n, elem) {
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }

    return matched;
  };

  var rneedsContext = jQuery.expr.match.needsContext;

  var rsingleTag = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;

  var risSimple = /^.[^:#\[\.,]*$/;

  // Implement the identical functionality for filter and not
  function winnow(elements, qualifier, not) {
    if (jQuery.isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        /* jshint -W018 */
        return !!qualifier.call(elem, i, elem) !== not;
      });
    }

    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    }

    if (typeof qualifier === "string") {
      if (risSimple.test(qualifier)) {
        return jQuery.filter(qualifier, elements, not);
      }

      qualifier = jQuery.filter(qualifier, elements);
    }

    return jQuery.grep(elements, function (elem) {
      return jQuery.inArray(elem, qualifier) > -1 !== not;
    });
  }

  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];

    if (not) {
      expr = ":not(" + expr + ")";
    }

    return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };

  jQuery.fn.extend({
    find: function find(selector) {
      var i,
          ret = [],
          self = this,
          len = self.length;

      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }

      // Needed because $( selector, context ) becomes $( context ).find( selector )
      ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
      ret.selector = this.selector ? this.selector + " " + selector : selector;
      return ret;
    },
    filter: function filter(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function not(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function is(selector) {
      return !!winnow(this,

      // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  });

  // Initialize a jQuery object


  // A central reference to the root jQuery(document)
  var rootjQuery,


  // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      init = jQuery.fn.init = function (selector, context, root) {
    var match, elem;

    // HANDLE: $(""), $(null), $(undefined), $(false)
    if (!selector) {
      return this;
    }

    // init accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)
    root = root || rootjQuery;

    // Handle HTML strings
    if (typeof selector === "string") {
      if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {

        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      }

      // Match html or make sure no context is specified for #id
      if (match && (match[1] || !context)) {

        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context;

          // scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present
          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

          // HANDLE: $(html, props)
          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {

              // Properties of context are called as methods if possible
              if (jQuery.isFunction(this[match])) {
                this[match](context[match]);

                // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this;

          // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]);

          // Check parentNode to catch when Blackberry 4.6 returns
          // nodes that are no longer in the document #6963
          if (elem && elem.parentNode) {

            // Handle the case where IE and Opera return items
            // by name instead of ID
            if (elem.id !== match[2]) {
              return rootjQuery.find(selector);
            }

            // Otherwise, we inject the element directly into the jQuery object
            this.length = 1;
            this[0] = elem;
          }

          this.context = document;
          this.selector = selector;
          return this;
        }

        // HANDLE: $(expr, $(...))
      } else if (!context || context.jquery) {
        return (context || root).find(selector);

        // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector);
      }

      // HANDLE: $(DOMElement)
    } else if (selector.nodeType) {
      this.context = this[0] = selector;
      this.length = 1;
      return this;

      // HANDLE: $(function)
      // Shortcut for document ready
    } else if (jQuery.isFunction(selector)) {
      return typeof root.ready !== "undefined" ? root.ready(selector) :

      // Execute immediately if ready is not present
      selector(jQuery);
    }

    if (selector.selector !== undefined) {
      this.selector = selector.selector;
      this.context = selector.context;
    }

    return jQuery.makeArray(selector, this);
  };

  // Give the init function the jQuery prototype for later instantiation
  init.prototype = jQuery.fn;

  // Initialize central reference
  rootjQuery = jQuery(document);

  var rparentsprev = /^(?:parents|prev(?:Until|All))/,


  // methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };

  jQuery.fn.extend({
    has: function has(target) {
      var i,
          targets = jQuery(target, this),
          len = targets.length;

      return this.filter(function () {
        for (i = 0; i < len; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },

    closest: function closest(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;

      for (; i < l; i++) {
        for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

          // Always skip document fragments
          if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 :

          // Don't pass non-elements to Sizzle
          cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

            matched.push(cur);
            break;
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },

    // Determine the position of an element within
    // the matched set of elements
    index: function index(elem) {

      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }

      // index in selector
      if (typeof elem === "string") {
        return jQuery.inArray(this[0], jQuery(elem));
      }

      // Locate the position of the desired element
      return jQuery.inArray(

      // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem, this);
    },

    add: function add(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },

    addBack: function addBack(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });

  function sibling(cur, dir) {
    do {
      cur = cur[dir];
    } while (cur && cur.nodeType !== 1);

    return cur;
  }

  jQuery.each({
    parent: function parent(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function parents(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function parentsUntil(elem, i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function next(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function prev(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function nextAll(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function prevAll(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function nextUntil(elem, i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function prevUntil(elem, i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function siblings(elem) {
      return _siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function children(elem) {
      return _siblings(elem.firstChild);
    },
    contents: function contents(elem) {
      return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var ret = jQuery.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        ret = jQuery.filter(selector, ret);
      }

      if (this.length > 1) {

        // Remove duplicates
        if (!guaranteedUnique[name]) {
          ret = jQuery.uniqueSort(ret);
        }

        // Reverse order for parents* and prev-derivatives
        if (rparentsprev.test(name)) {
          ret = ret.reverse();
        }
      }

      return this.pushStack(ret);
    };
  });
  var rnotwhite = /\S+/g;

  // Convert String-formatted options into Object-formatted ones
  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }

  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */
  jQuery.Callbacks = function (options) {

    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

    var // Flag to know if list is currently firing
    firing,


    // Last fire value for non-forgettable lists
    memory,


    // Flag to know if list was already fired
    _fired,


    // Flag to prevent firing
    _locked,


    // Actual callback list
    list = [],


    // Queue of execution data for repeatable lists
    queue = [],


    // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,


    // Fire callbacks
    fire = function fire() {

      // Enforce single-firing
      _locked = options.once;

      // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes
      _fired = firing = true;
      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();
        while (++firingIndex < list.length) {

          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {

            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      }

      // Forget the data if we're done with it
      if (!options.memory) {
        memory = false;
      }

      firing = false;

      // Clean up if we're done firing for good
      if (_locked) {

        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = [];

          // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },


    // Actual Callbacks object
    self = {

      // Add a callback or a collection of callbacks to the list
      add: function add() {
        if (list) {

          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              if (jQuery.isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && jQuery.type(arg) !== "string") {

                // Inspect recursively
                add(arg);
              }
            });
          })(arguments);

          if (memory && !firing) {
            fire();
          }
        }
        return this;
      },

      // Remove a callback from the list
      remove: function remove() {
        jQuery.each(arguments, function (_, arg) {
          var index;
          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1);

            // Handle firing indexes
            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },

      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function has(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },

      // Remove all callbacks from the list
      empty: function empty() {
        if (list) {
          list = [];
        }
        return this;
      },

      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function disable() {
        _locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function disabled() {
        return !list;
      },

      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function lock() {
        _locked = true;
        if (!memory) {
          self.disable();
        }
        return this;
      },
      locked: function locked() {
        return !!_locked;
      },

      // Call all callbacks with the given context and arguments
      fireWith: function fireWith(context, args) {
        if (!_locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);
          if (!firing) {
            fire();
          }
        }
        return this;
      },

      // Call all the callbacks with the given arguments
      fire: function fire() {
        self.fireWith(this, arguments);
        return this;
      },

      // To know if the callbacks have already been called at least once
      fired: function fired() {
        return !!_fired;
      }
    };

    return self;
  };

  jQuery.extend({

    Deferred: function Deferred(func) {
      var tuples = [

      // action, add listener, listener list, final state
      ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
          _state = "pending",
          _promise = {
        state: function state() {
          return _state;
        },
        always: function always() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        then: function then() /* fnDone, fnFail, fnProgress */{
          var fns = arguments;
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (i, tuple) {
              var fn = jQuery.isFunction(fns[i]) && fns[i];

              // deferred[ done | fail | progress ] for forwarding actions to newDefer
              deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);
                if (returned && jQuery.isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },

        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function promise(obj) {
          return obj != null ? jQuery.extend(obj, _promise) : _promise;
        }
      },
          deferred = {};

      // Keep pipe for back-compat
      _promise.pipe = _promise.then;

      // Add list-specific methods
      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[3];

        // promise[ done | fail | progress ] = list.add
        _promise[tuple[1]] = list.add;

        // Handle state
        if (stateString) {
          list.add(function () {

            // state = [ resolved | rejected ]
            _state = stateString;

            // [ reject_list | resolve_list ].disable; progress_list.lock
          }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
        }

        // deferred[ resolve | reject | notify ]
        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments);
          return this;
        };
        deferred[tuple[0] + "With"] = list.fireWith;
      });

      // Make the deferred a promise
      _promise.promise(deferred);

      // Call given func if any
      if (func) {
        func.call(deferred, deferred);
      }

      // All done!
      return deferred;
    },

    // Deferred helper
    when: function when(subordinate /* , ..., subordinateN */) {
      var i = 0,
          resolveValues = _slice.call(arguments),
          length = resolveValues.length,


      // the count of uncompleted subordinates
      remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,


      // the master Deferred.
      // If resolveValues consist of only a single Deferred, just use that.
      deferred = remaining === 1 ? subordinate : jQuery.Deferred(),


      // Update function for both resolve and progress values
      updateFunc = function updateFunc(i, contexts, values) {
        return function (value) {
          contexts[i] = this;
          values[i] = arguments.length > 1 ? _slice.call(arguments) : value;
          if (values === progressValues) {
            deferred.notifyWith(contexts, values);
          } else if (! --remaining) {
            deferred.resolveWith(contexts, values);
          }
        };
      },
          progressValues,
          progressContexts,
          resolveContexts;

      // add listeners to Deferred subordinates; treat others as resolved
      if (length > 1) {
        progressValues = new Array(length);
        progressContexts = new Array(length);
        resolveContexts = new Array(length);
        for (; i < length; i++) {
          if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
            resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject);
          } else {
            --remaining;
          }
        }
      }

      // if we're not waiting on anything, resolve the master
      if (!remaining) {
        deferred.resolveWith(resolveContexts, resolveValues);
      }

      return deferred.promise();
    }
  });

  // The deferred used on DOM ready
  var readyList;

  jQuery.fn.ready = function (fn) {

    // Add the callback
    jQuery.ready.promise().done(fn);

    return this;
  };

  jQuery.extend({

    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,

    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,

    // Hold (or release) the ready event
    holdReady: function holdReady(hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    },

    // Handle when the DOM is ready
    ready: function ready(wait) {

      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      }

      // Remember that the DOM is ready
      jQuery.isReady = true;

      // If a normal DOM Ready event fired, decrement, and wait if need be
      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      }

      // If there are functions bound, to execute
      readyList.resolveWith(document, [jQuery]);

      // Trigger any bound ready events
      if (jQuery.fn.triggerHandler) {
        jQuery(document).triggerHandler("ready");
        jQuery(document).off("ready");
      }
    }
  });

  /**
   * Clean-up method for dom ready events
   */
  function detach() {
    if (document.addEventListener) {
      document.removeEventListener("DOMContentLoaded", completed);
      window.removeEventListener("load", completed);
    } else {
      document.detachEvent("onreadystatechange", completed);
      window.detachEvent("onload", completed);
    }
  }

  /**
   * The ready event handler and self cleanup method
   */
  function completed() {

    // readyState === "complete" is good enough for us to call the dom ready in oldIE
    if (document.addEventListener || window.event.type === "load" || document.readyState === "complete") {

      detach();
      jQuery.ready();
    }
  }

  jQuery.ready.promise = function (obj) {
    if (!readyList) {

      readyList = jQuery.Deferred();

      // Catch cases where $(document).ready() is called
      // after the browser event has already occurred.
      // Support: IE6-10
      // Older IE sometimes signals "interactive" too soon
      if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {

        // Handle it asynchronously to allow scripts the opportunity to delay ready
        window.setTimeout(jQuery.ready);

        // Standards-based browsers support DOMContentLoaded
      } else if (document.addEventListener) {

        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed);

        // A fallback to window.onload, that will always work
        window.addEventListener("load", completed);

        // If IE event model is used
      } else {

        // Ensure firing before onload, maybe late but safe also for iframes
        document.attachEvent("onreadystatechange", completed);

        // A fallback to window.onload, that will always work
        window.attachEvent("onload", completed);

        // If IE and not a frame
        // continually check to see if the document is ready
        var top = false;

        try {
          top = window.frameElement == null && document.documentElement;
        } catch (e) {}

        if (top && top.doScroll) {
          (function doScrollCheck() {
            if (!jQuery.isReady) {

              try {

                // Use the trick by Diego Perini
                // http://javascript.nwbox.com/IEContentLoaded/
                top.doScroll("left");
              } catch (e) {
                return window.setTimeout(doScrollCheck, 50);
              }

              // detach all dom ready events
              detach();

              // and execute any waiting functions
              jQuery.ready();
            }
          })();
        }
      }
    }
    return readyList.promise(obj);
  };

  // Kick off the DOM ready check even if the user does not
  jQuery.ready.promise();

  // Support: IE<9
  // Iteration over object's inherited properties before its own
  var i;
  for (i in jQuery(support)) {
    break;
  }
  support.ownFirst = i === "0";

  // Note: most support tests are defined in their respective modules.
  // false until the test is run
  support.inlineBlockNeedsLayout = false;

  // Execute ASAP in case we need to set body.style.zoom
  jQuery(function () {

    // Minified: var a,b,c,d
    var val, div, body, container;

    body = document.getElementsByTagName("body")[0];
    if (!body || !body.style) {

      // Return for frameset docs that don't have a body
      return;
    }

    // Setup
    div = document.createElement("div");
    container = document.createElement("div");
    container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
    body.appendChild(container).appendChild(div);

    if (typeof div.style.zoom !== "undefined") {

      // Support: IE<8
      // Check if natively block-level elements act like inline-block
      // elements when setting their display to 'inline' and giving
      // them layout
      div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

      support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
      if (val) {

        // Prevent IE 6 from affecting layout for positioned elements #11048
        // Prevent IE from shrinking the body in IE 7 mode #12869
        // Support: IE<8
        body.style.zoom = 1;
      }
    }

    body.removeChild(container);
  });

  (function () {
    var div = document.createElement("div");

    // Support: IE<9
    support.deleteExpando = true;
    try {
      delete div.test;
    } catch (e) {
      support.deleteExpando = false;
    }

    // Null elements to avoid leaks in IE.
    div = null;
  })();
  var acceptData = function acceptData(elem) {
    var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()],
        nodeType = +elem.nodeType || 1;

    // Do not set data on non-element DOM nodes because it will not be cleared (#8335).
    return nodeType !== 1 && nodeType !== 9 ? false :

    // Nodes accept data unless otherwise specified; rejection can be conditional
    !noData || noData !== true && elem.getAttribute("classid") === noData;
  };

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /([A-Z])/g;

  function dataAttr(elem, key, data) {

    // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute
    if (data === undefined && elem.nodeType === 1) {

      var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();

      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = data === "true" ? true : data === "false" ? false : data === "null" ? null :

          // Only convert to a number if it doesn't change the string
          +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
        } catch (e) {}

        // Make sure we set the data so it isn't changed later
        jQuery.data(elem, key, data);
      } else {
        data = undefined;
      }
    }

    return data;
  }

  // checks a cache object for emptiness
  function isEmptyDataObject(obj) {
    var name;
    for (name in obj) {

      // if the public data object is empty, the private is still empty
      if (name === "data" && jQuery.isEmptyObject(obj[name])) {
        continue;
      }
      if (name !== "toJSON") {
        return false;
      }
    }

    return true;
  }

  function internalData(elem, name, data, pvt /* Internal Use Only */) {
    if (!acceptData(elem)) {
      return;
    }

    var ret,
        thisCache,
        internalKey = jQuery.expando,


    // We have to handle DOM nodes and JS objects differently because IE6-7
    // can't GC object references properly across the DOM-JS boundary
    isNode = elem.nodeType,


    // Only DOM nodes need the global jQuery cache; JS object data is
    // attached directly to the object so GC can occur automatically
    cache = isNode ? jQuery.cache : elem,


    // Only defining an ID for JS objects if its cache already exists allows
    // the code to shortcut on the same path as a DOM node with no cache
    id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;

    // Avoid doing any more work than we need to when trying to get data on an
    // object that has no data at all
    if ((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === "string") {
      return;
    }

    if (!id) {

      // Only DOM nodes need a new unique ID for each element since their data
      // ends up in the global cache
      if (isNode) {
        id = elem[internalKey] = deletedIds.pop() || jQuery.guid++;
      } else {
        id = internalKey;
      }
    }

    if (!cache[id]) {

      // Avoid exposing jQuery metadata on plain JS objects when the object
      // is serialized using JSON.stringify
      cache[id] = isNode ? {} : { toJSON: jQuery.noop };
    }

    // An object can be passed to jQuery.data instead of a key/value pair; this gets
    // shallow copied over onto the existing cache
    if ((typeof name === "undefined" ? "undefined" : _typeof(name)) === "object" || typeof name === "function") {
      if (pvt) {
        cache[id] = jQuery.extend(cache[id], name);
      } else {
        cache[id].data = jQuery.extend(cache[id].data, name);
      }
    }

    thisCache = cache[id];

    // jQuery data() is stored in a separate object inside the object's internal data
    // cache in order to avoid key collisions between internal data and user-defined
    // data.
    if (!pvt) {
      if (!thisCache.data) {
        thisCache.data = {};
      }

      thisCache = thisCache.data;
    }

    if (data !== undefined) {
      thisCache[jQuery.camelCase(name)] = data;
    }

    // Check for both converted-to-camel and non-converted data property names
    // If a data property was specified
    if (typeof name === "string") {

      // First Try to find as-is property data
      ret = thisCache[name];

      // Test for null|undefined property data
      if (ret == null) {

        // Try to find the camelCased property
        ret = thisCache[jQuery.camelCase(name)];
      }
    } else {
      ret = thisCache;
    }

    return ret;
  }

  function internalRemoveData(elem, name, pvt) {
    if (!acceptData(elem)) {
      return;
    }

    var thisCache,
        i,
        isNode = elem.nodeType,


    // See jQuery.data for more information
    cache = isNode ? jQuery.cache : elem,
        id = isNode ? elem[jQuery.expando] : jQuery.expando;

    // If there is already no cache entry for this object, there is no
    // purpose in continuing
    if (!cache[id]) {
      return;
    }

    if (name) {

      thisCache = pvt ? cache[id] : cache[id].data;

      if (thisCache) {

        // Support array or space separated string names for data keys
        if (!jQuery.isArray(name)) {

          // try the string as a key before any manipulation
          if (name in thisCache) {
            name = [name];
          } else {

            // split the camel cased version by spaces unless a key with the spaces exists
            name = jQuery.camelCase(name);
            if (name in thisCache) {
              name = [name];
            } else {
              name = name.split(" ");
            }
          }
        } else {

          // If "name" is an array of keys...
          // When data is initially created, via ("key", "val") signature,
          // keys will be converted to camelCase.
          // Since there is no way to tell _how_ a key was added, remove
          // both plain key and camelCase key. #12786
          // This will only penalize the array argument path.
          name = name.concat(jQuery.map(name, jQuery.camelCase));
        }

        i = name.length;
        while (i--) {
          delete thisCache[name[i]];
        }

        // If there is no data left in the cache, we want to continue
        // and let the cache object itself get destroyed
        if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
          return;
        }
      }
    }

    // See jQuery.data for more information
    if (!pvt) {
      delete cache[id].data;

      // Don't destroy the parent cache unless the internal data object
      // had been the only thing left in it
      if (!isEmptyDataObject(cache[id])) {
        return;
      }
    }

    // Destroy the cache
    if (isNode) {
      jQuery.cleanData([elem], true);

      // Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
      /* jshint eqeqeq: false */
    } else if (support.deleteExpando || cache != cache.window) {
      /* jshint eqeqeq: true */
      delete cache[id];

      // When all else fails, undefined
    } else {
      cache[id] = undefined;
    }
  }

  jQuery.extend({
    cache: {},

    // The following elements (space-suffixed to avoid Object.prototype collisions)
    // throw uncatchable exceptions if you attempt to set expando properties
    noData: {
      "applet ": true,
      "embed ": true,

      // ...but Flash objects (which have this classid) *can* handle expandos
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },

    hasData: function hasData(elem) {
      elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
      return !!elem && !isEmptyDataObject(elem);
    },

    data: function data(elem, name, _data) {
      return internalData(elem, name, _data);
    },

    removeData: function removeData(elem, name) {
      return internalRemoveData(elem, name);
    },

    // For internal use only.
    _data: function _data(elem, name, data) {
      return internalData(elem, name, data, true);
    },

    _removeData: function _removeData(elem, name) {
      return internalRemoveData(elem, name, true);
    }
  });

  jQuery.fn.extend({
    data: function data(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes;

      // Special expections of .data basically thwart jQuery.access,
      // so implement the relevant behavior ourselves

      // Gets all values
      if (key === undefined) {
        if (this.length) {
          data = jQuery.data(elem);

          if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
            i = attrs.length;
            while (i--) {

              // Support: IE11+
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name;
                if (name.indexOf("data-") === 0) {
                  name = jQuery.camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }
            jQuery._data(elem, "parsedAttrs", true);
          }
        }

        return data;
      }

      // Sets multiple values
      if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
        return this.each(function () {
          jQuery.data(this, key);
        });
      }

      return arguments.length > 1 ?

      // Sets one value
      this.each(function () {
        jQuery.data(this, key, value);
      }) :

      // Gets one value
      // Try to fetch any internally stored data first
      elem ? dataAttr(elem, key, jQuery.data(elem, key)) : undefined;
    },

    removeData: function removeData(key) {
      return this.each(function () {
        jQuery.removeData(this, key);
      });
    }
  });

  jQuery.extend({
    queue: function queue(elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = jQuery._data(elem, type);

        // Speed up dequeue by getting out quickly if this is just a lookup
        if (data) {
          if (!queue || jQuery.isArray(data)) {
            queue = jQuery._data(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },

    dequeue: function dequeue(elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function next() {
        jQuery.dequeue(elem, type);
      };

      // If the fx queue is dequeued, always remove the progress sentinel
      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {

        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        }

        // clear up the last queue stop function
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },

    // not intended for public consumption - generates a queueHooks object,
    // or returns the current one
    _queueHooks: function _queueHooks(elem, type) {
      var key = type + "queueHooks";
      return jQuery._data(elem, key) || jQuery._data(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          jQuery._removeData(elem, type + "queue");
          jQuery._removeData(elem, key);
        })
      });
    }
  });

  jQuery.fn.extend({
    queue: function queue(type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data);

        // ensure a hooks for this queue
        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function dequeue(type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function clearQueue(type) {
      return this.queue(type || "fx", []);
    },

    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function promise(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function resolve() {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }
      type = type || "fx";

      while (i--) {
        tmp = jQuery._data(elements[i], type + "queueHooks");
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    }
  });

  (function () {
    var shrinkWrapBlocksVal;

    support.shrinkWrapBlocks = function () {
      if (shrinkWrapBlocksVal != null) {
        return shrinkWrapBlocksVal;
      }

      // Will be changed later if needed.
      shrinkWrapBlocksVal = false;

      // Minified: var b,c,d
      var div, body, container;

      body = document.getElementsByTagName("body")[0];
      if (!body || !body.style) {

        // Test fired too early or in an unsupported environment, exit.
        return;
      }

      // Setup
      div = document.createElement("div");
      container = document.createElement("div");
      container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
      body.appendChild(container).appendChild(div);

      // Support: IE6
      // Check if elements with layout shrink-wrap their children
      if (typeof div.style.zoom !== "undefined") {

        // Reset CSS: box-sizing; display; margin; border
        div.style.cssText =

        // Support: Firefox<29, Android 2.3
        // Vendor-prefix box-sizing
        "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;" + "padding:1px;width:1px;zoom:1";
        div.appendChild(document.createElement("div")).style.width = "5px";
        shrinkWrapBlocksVal = div.offsetWidth !== 3;
      }

      body.removeChild(container);

      return shrinkWrapBlocksVal;
    };
  })();
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");

  var cssExpand = ["Top", "Right", "Bottom", "Left"];

  var isHidden = function isHidden(elem, el) {

    // isHidden might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem;
    return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
  };

  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale = 1,
        maxIterations = 20,
        currentValue = tween ? function () {
      return tween.cur();
    } : function () {
      return jQuery.css(elem, prop, "");
    },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


    // Starting value computation is required for potential unit mismatches
    initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

    if (initialInUnit && initialInUnit[3] !== unit) {

      // Trust units reported by jQuery.css
      unit = unit || initialInUnit[3];

      // Make sure we update the tween properties later on
      valueParts = valueParts || [];

      // Iteratively approximate from a nonzero starting point
      initialInUnit = +initial || 1;

      do {

        // If previous iteration zeroed out, double until we get *something*.
        // Use string for doubling so we don't accidentally see scale as unchanged below
        scale = scale || ".5";

        // Adjust and apply
        initialInUnit = initialInUnit / scale;
        jQuery.style(elem, prop, initialInUnit + unit);

        // Update scale, tolerating zero or NaN from tween.cur()
        // Break the loop if scale is unchanged or perfect, or if we've just had enough.
      } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0;

      // Apply relative offset (+=/-=) if specified
      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }
    return adjusted;
  }

  // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function
  var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        length = elems.length,
        bulk = key == null;

    // Sets many values
    if (jQuery.type(key) === "object") {
      chainable = true;
      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      }

      // Sets one value
    } else if (value !== undefined) {
      chainable = true;

      if (!jQuery.isFunction(value)) {
        raw = true;
      }

      if (bulk) {

        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null;

          // ...except when executing function values
        } else {
          bulk = fn;
          fn = function fn(elem, key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }

      if (fn) {
        for (; i < length; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }

    return chainable ? elems :

    // Gets
    bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
  };
  var rcheckableType = /^(?:checkbox|radio)$/i;

  var rtagName = /<([\w:-]+)/;

  var rscriptType = /^$|\/(?:java|ecma)script/i;

  var rleadingWhitespace = /^\s+/;

  var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" + "details|dialog|figcaption|figure|footer|header|hgroup|main|" + "mark|meter|nav|output|picture|progress|section|summary|template|time|video";

  function createSafeFragment(document) {
    var list = nodeNames.split("|"),
        safeFrag = document.createDocumentFragment();

    if (safeFrag.createElement) {
      while (list.length) {
        safeFrag.createElement(list.pop());
      }
    }
    return safeFrag;
  }

  (function () {
    var div = document.createElement("div"),
        fragment = document.createDocumentFragment(),
        input = document.createElement("input");

    // Setup
    div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

    // IE strips leading whitespace when .innerHTML is used
    support.leadingWhitespace = div.firstChild.nodeType === 3;

    // Make sure that tbody elements aren't automatically inserted
    // IE will insert them into empty tables
    support.tbody = !div.getElementsByTagName("tbody").length;

    // Make sure that link elements get serialized correctly by innerHTML
    // This requires a wrapper element in IE
    support.htmlSerialize = !!div.getElementsByTagName("link").length;

    // Makes sure cloning an html5 element does not cause problems
    // Where outerHTML is undefined, this still works
    support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";

    // Check if a disconnected checkbox will retain its checked
    // value of true after appended to the DOM (IE6/7)
    input.type = "checkbox";
    input.checked = true;
    fragment.appendChild(input);
    support.appendChecked = input.checked;

    // Make sure textarea (and checkbox) defaultValue is properly cloned
    // Support: IE6-IE11+
    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;

    // #11217 - WebKit loses check when the name is after the checked attribute
    fragment.appendChild(div);

    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)
    input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");

    div.appendChild(input);

    // Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
    // old WebKit doesn't clone checked state correctly in fragments
    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

    // Support: IE<9
    // Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
    support.noCloneEvent = !!div.addEventListener;

    // Support: IE<9
    // Since attributes and properties are the same in IE,
    // cleanData must set properties to undefined rather than use removeAttribute
    div[jQuery.expando] = 1;
    support.attributes = !div.getAttribute(jQuery.expando);
  })();

  // We have to close these tags to support XHTML (#13200)
  var wrapMap = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],

    // Support: IE8
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

    // IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
    // unless wrapped in a div with non-breaking characters in front of it.
    _default: support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  };

  // Support: IE8-IE9
  wrapMap.optgroup = wrapMap.option;

  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;

  function getAll(context, tag) {
    var elems,
        elem,
        i = 0,
        found = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : undefined;

    if (!found) {
      for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
        if (!tag || jQuery.nodeName(elem, tag)) {
          found.push(elem);
        } else {
          jQuery.merge(found, getAll(elem, tag));
        }
      }
    }

    return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found;
  }

  // Mark scripts as having already been evaluated
  function setGlobalEval(elems, refElements) {
    var elem,
        i = 0;
    for (; (elem = elems[i]) != null; i++) {
      jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
    }
  }

  var rhtml = /<|&#?\w+;/,
      rtbody = /<tbody/i;

  function fixDefaultChecked(elem) {
    if (rcheckableType.test(elem.type)) {
      elem.defaultChecked = elem.checked;
    }
  }

  function buildFragment(elems, context, scripts, selection, ignored) {
    var j,
        elem,
        contains,
        tmp,
        tag,
        tbody,
        wrap,
        l = elems.length,


    // Ensure a safe fragment
    safe = createSafeFragment(context),
        nodes = [],
        i = 0;

    for (; i < l; i++) {
      elem = elems[i];

      if (elem || elem === 0) {

        // Add nodes directly
        if (jQuery.type(elem) === "object") {
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

          // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem));

          // Convert html into DOM nodes
        } else {
          tmp = tmp || safe.appendChild(context.createElement("div"));

          // Deserialize a standard representation
          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;

          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

          // Descend through wrappers to the right content
          j = wrap[0];
          while (j--) {
            tmp = tmp.lastChild;
          }

          // Manually add leading whitespace removed by IE
          if (!support.leadingWhitespace && rleadingWhitespace.test(elem)) {
            nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
          }

          // Remove IE's autoinserted <tbody> from table fragments
          if (!support.tbody) {

            // String was a <table>, *may* have spurious <tbody>
            elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild :

            // String was a bare <thead> or <tfoot>
            wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;

            j = elem && elem.childNodes.length;
            while (j--) {
              if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {

                elem.removeChild(tbody);
              }
            }
          }

          jQuery.merge(nodes, tmp.childNodes);

          // Fix #12392 for WebKit and IE > 9
          tmp.textContent = "";

          // Fix #12392 for oldIE
          while (tmp.firstChild) {
            tmp.removeChild(tmp.firstChild);
          }

          // Remember the top-level container for proper cleanup
          tmp = safe.lastChild;
        }
      }
    }

    // Fix #11356: Clear elements from fragment
    if (tmp) {
      safe.removeChild(tmp);
    }

    // Reset defaultChecked for any radios and checkboxes
    // about to be appended to the DOM in IE 6/7 (#8060)
    if (!support.appendChecked) {
      jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
    }

    i = 0;
    while (elem = nodes[i++]) {

      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }

        continue;
      }

      contains = jQuery.contains(elem.ownerDocument, elem);

      // Append to fragment
      tmp = getAll(safe.appendChild(elem), "script");

      // Preserve script evaluation history
      if (contains) {
        setGlobalEval(tmp);
      }

      // Capture executables
      if (scripts) {
        j = 0;
        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }

    tmp = null;

    return safe;
  }

  (function () {
    var i,
        eventName,
        div = document.createElement("div");

    // Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
    for (i in { submit: true, change: true, focusin: true }) {
      eventName = "on" + i;

      if (!(support[i] = eventName in window)) {

        // Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
        div.setAttribute(eventName, "t");
        support[i] = div.attributes[eventName].expando === false;
      }
    }

    // Null elements to avoid leaks in IE.
    div = null;
  })();

  var rformElems = /^(?:input|select|textarea)$/i,
      rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  }

  // Support: IE9
  // See #13393 for more info
  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }

  function _on(elem, types, selector, data, fn, one) {
    var origFn, type;

    // Types can be a map of types/handlers
    if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

      // ( types-Object, selector, data )
      if (typeof selector !== "string") {

        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }
      for (type in types) {
        _on(elem, type, selector, data, types[type], one);
      }
      return elem;
    }

    if (data == null && fn == null) {

      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {

        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {

        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }
    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }

    if (one === 1) {
      origFn = fn;
      fn = function fn(event) {

        // Can use an empty set, since event contains the info
        jQuery().off(event);
        return origFn.apply(this, arguments);
      };

      // Use same guid so caller can remove using origFn
      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }
    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }

  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */
  jQuery.event = {

    global: {},

    add: function add(elem, types, handler, data, selector) {
      var tmp,
          events,
          t,
          handleObjIn,
          special,
          eventHandle,
          handleObj,
          handlers,
          type,
          namespaces,
          origType,
          elemData = jQuery._data(elem);

      // Don't attach events to noData or text/comment nodes (but allow plain objects)
      if (!elemData) {
        return;
      }

      // Caller can pass in an object of custom data in lieu of the handler
      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      }

      // Make sure that the handler has a unique ID, used to find/remove it later
      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      }

      // Init the element's event structure and main handler, if this is the first
      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {

          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
        };

        // Add elem as a property of the handle fn to prevent a memory leak
        // with IE non-native events
        eventHandle.elem = elem;
      }

      // Handle multiple events separated by a space
      types = (types || "").match(rnotwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();

        // There *must* be a type, no attaching namespace-only handlers
        if (!type) {
          continue;
        }

        // If event changes its type, use the special event handlers for the changed type
        special = jQuery.event.special[type] || {};

        // If selector defined, determine special event api type, otherwise given type
        type = (selector ? special.delegateType : special.bindType) || type;

        // Update special based on newly reset type
        special = jQuery.event.special[type] || {};

        // handleObj is passed to all event handlers
        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn);

        // Init the event handler queue if we're the first
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;

          // Only use addEventListener/attachEvent if the special events handler returns false
          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {

            // Bind the global event handler to the element
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle, false);
            } else if (elem.attachEvent) {
              elem.attachEvent("on" + type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        }

        // Add to the element's handler list, delegates in front
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }

        // Keep track of which events have ever been used, for event optimization
        jQuery.event.global[type] = true;
      }

      // Nullify elem to prevent memory leaks in IE
      elem = null;
    },

    // Detach an event or set of events from an element
    remove: function remove(elem, types, handler, selector, mappedTypes) {
      var j,
          handleObj,
          tmp,
          origCount,
          t,
          events,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = jQuery.hasData(elem) && jQuery._data(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      }

      // Once for each type.namespace in types; type may be omitted
      types = (types || "").match(rnotwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();

        // Unbind all events (on this namespace, if provided) for the element
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }
          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

        // Remove matching events
        origCount = j = handlers.length;
        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }

        // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {

            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      }

      // Remove the expando if it's no longer used
      if (jQuery.isEmptyObject(events)) {
        delete elemData.handle;

        // removeData also checks for emptiness and clears the expando if empty
        // so use it instead of delete
        jQuery._removeData(elem, "events");
      }
    },

    trigger: function trigger(event, data, elem, onlyHandlers) {
      var handle,
          ontype,
          cur,
          bubbleType,
          special,
          tmp,
          i,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

      cur = tmp = elem = elem || document;

      // Don't do events on text and comment nodes
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }

      // focus/blur morphs to focusin/out; ensure we're not firing them right now
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") > -1) {

        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }
      ontype = type.indexOf(":") < 0 && "on" + type;

      // Caller can pass in a jQuery.Event object, Object, or just an event type string
      event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event);

      // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

      // Clean up the event in case it is being reused
      event.result = undefined;
      if (!event.target) {
        event.target = elem;
      }

      // Clone any incoming data and prepend the event, creating the handler arg list
      data = data == null ? [event] : jQuery.makeArray(data, [event]);

      // Allow special events to draw outside the lines
      special = jQuery.event.special[type] || {};
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      }

      // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
      if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }

        // Only add window if we got to document (e.g., not plain obj or detached DOM)
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      }

      // Fire handlers on the event path
      i = 0;
      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

        event.type = i > 1 ? bubbleType : special.bindType || type;

        // jQuery handler
        handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");

        if (handle) {
          handle.apply(cur, data);
        }

        // Native handler
        handle = ontype && cur[ontype];
        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);
          if (event.result === false) {
            event.preventDefault();
          }
        }
      }
      event.type = type;

      // If nobody prevented the default action, do it now
      if (!onlyHandlers && !event.isDefaultPrevented()) {

        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {

          // Call a native DOM method on the target with the same name name as the event.
          // Can't use an .isFunction() check here because IE6/7 fails that test.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && elem[type] && !jQuery.isWindow(elem)) {

            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            }

            // Prevent re-triggering of the same event, since we already bubbled it above
            jQuery.event.triggered = type;
            try {
              elem[type]();
            } catch (e) {

              // IE<9 dies on focus/blur to hidden element (#1486,#12518)
              // only reproducible on winXP IE8 native, not IE9 in IE8 mode
            }
            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },

    dispatch: function dispatch(event) {

      // Make a writable jQuery.Event from the native event object
      event = jQuery.event.fix(event);

      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue = [],
          args = _slice.call(arguments),
          handlers = (jQuery._data(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {};

      // Use the fix-ed jQuery.Event rather than the (read-only) native event
      args[0] = event;
      event.delegateTarget = this;

      // Call the preDispatch hook for the mapped type, and let it bail if desired
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }

      // Determine handlers
      handlerQueue = jQuery.event.handlers.call(this, event, handlers);

      // Run delegates first; they may want to stop propagation beneath us
      i = 0;
      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;

        j = 0;
        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

          // Triggered event must either 1) have no namespace, or 2) have namespace(s)
          // a subset or equal to those in the bound event (both can have no namespace).
          if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

            event.handleObj = handleObj;
            event.data = handleObj.data;

            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }

      // Call the postDispatch hook for the mapped type
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },

    handlers: function handlers(event, _handlers) {
      var i,
          matches,
          sel,
          handleObj,
          handlerQueue = [],
          delegateCount = _handlers.delegateCount,
          cur = event.target;

      // Support (at least): Chrome, IE9
      // Find delegate handlers
      // Black-hole SVG <use> instance trees (#13180)
      //
      // Support: Firefox<=42+
      // Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
      if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {

        /* jshint eqeqeq: false */
        for (; cur != this; cur = cur.parentNode || this) {
          /* jshint eqeqeq: true */

          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
            matches = [];
            for (i = 0; i < delegateCount; i++) {
              handleObj = _handlers[i];

              // Don't conflict with Object.prototype properties (#13203)
              sel = handleObj.selector + " ";

              if (matches[sel] === undefined) {
                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }
              if (matches[sel]) {
                matches.push(handleObj);
              }
            }
            if (matches.length) {
              handlerQueue.push({ elem: cur, handlers: matches });
            }
          }
        }
      }

      // Add the remaining (directly-bound) handlers
      if (delegateCount < _handlers.length) {
        handlerQueue.push({ elem: this, handlers: _handlers.slice(delegateCount) });
      }

      return handlerQueue;
    },

    fix: function fix(event) {
      if (event[jQuery.expando]) {
        return event;
      }

      // Create a writable copy of the event object and normalize some properties
      var i,
          prop,
          copy,
          type = event.type,
          originalEvent = event,
          fixHook = this.fixHooks[type];

      if (!fixHook) {
        this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
      }
      copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

      event = new jQuery.Event(originalEvent);

      i = copy.length;
      while (i--) {
        prop = copy[i];
        event[prop] = originalEvent[prop];
      }

      // Support: IE<9
      // Fix target property (#1925)
      if (!event.target) {
        event.target = originalEvent.srcElement || document;
      }

      // Support: Safari 6-8+
      // Target should not be a text node (#504, #13143)
      if (event.target.nodeType === 3) {
        event.target = event.target.parentNode;
      }

      // Support: IE<9
      // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
      event.metaKey = !!event.metaKey;

      return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
    },

    // Includes some event props shared by KeyEvent and MouseEvent
    props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " + "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),

    fixHooks: {},

    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(event, original) {

        // Add which for key events
        if (event.which == null) {
          event.which = original.charCode != null ? original.charCode : original.keyCode;
        }

        return event;
      }
    },

    mouseHooks: {
      props: ("button buttons clientX clientY fromElement offsetX offsetY " + "pageX pageY screenX screenY toElement").split(" "),
      filter: function filter(event, original) {
        var body,
            eventDoc,
            doc,
            button = original.button,
            fromElement = original.fromElement;

        // Calculate pageX/Y if missing and clientX/Y available
        if (event.pageX == null && original.clientX != null) {
          eventDoc = event.target.ownerDocument || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;

          event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
          event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        }

        // Add relatedTarget, if necessary
        if (!event.relatedTarget && fromElement) {
          event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
        }

        // Add which for click: 1 === left; 2 === middle; 3 === right
        // Note: button is not normalized, so don't use it
        if (!event.which && button !== undefined) {
          event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
        }

        return event;
      }
    },

    special: {
      load: {

        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      focus: {

        // Fire native event if possible so blur/focus sequence is correct
        trigger: function trigger() {
          if (this !== safeActiveElement() && this.focus) {
            try {
              this.focus();
              return false;
            } catch (e) {

              // Support: IE<9
              // If we error on focus to hidden element (#1486, #12518),
              // let .trigger() run the handlers
            }
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          if (this === safeActiveElement() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout"
      },
      click: {

        // For checkbox, fire native event so checked state will be right
        trigger: function trigger() {
          if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
            this.click();
            return false;
          }
        },

        // For cross-browser consistency, don't fire native .click() on links
        _default: function _default(event) {
          return jQuery.nodeName(event.target, "a");
        }
      },

      beforeunload: {
        postDispatch: function postDispatch(event) {

          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    },

    // Piggyback on a donor event to simulate a different one
    simulate: function simulate(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true

        // Previously, `originalEvent: {}` was set here, so stopPropagation call
        // would not be triggered on donor event, since in our own
        // jQuery.event.stopPropagation function we had a check for existence of
        // originalEvent.stopPropagation method, so, consequently it would be a noop.
        //
        // Guard for simulated events was moved to jQuery.event.stopPropagation function
        // since `originalEvent` should point to the original event for the
        // constancy with other events and for more focused logic
      });

      jQuery.event.trigger(e, null, elem);

      if (e.isDefaultPrevented()) {
        event.preventDefault();
      }
    }
  };

  jQuery.removeEvent = document.removeEventListener ? function (elem, type, handle) {

    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  } : function (elem, type, handle) {
    var name = "on" + type;

    if (elem.detachEvent) {

      // #8545, #7054, preventing memory leaks for custom events in IE6-8
      // detachEvent needed property on element, by name of that event,
      // to properly expose it to GC
      if (typeof elem[name] === "undefined") {
        elem[name] = null;
      }

      elem.detachEvent(name, handle);
    }
  };

  jQuery.Event = function (src, props) {

    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    }

    // Event object
    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;

      // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.
      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&

      // Support: IE < 9, Android < 4.0
      src.returnValue === false ? returnTrue : returnFalse;

      // Event type
    } else {
      this.type = src;
    }

    // Put explicitly provided properties onto the event object
    if (props) {
      jQuery.extend(this, props);
    }

    // Create a timestamp if incoming event doesn't have one
    this.timeStamp = src && src.timeStamp || jQuery.now();

    // Mark it as fixed
    this[jQuery.expando] = true;
  };

  // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,

    preventDefault: function preventDefault() {
      var e = this.originalEvent;

      this.isDefaultPrevented = returnTrue;
      if (!e) {
        return;
      }

      // If preventDefault exists, run it on the original event
      if (e.preventDefault) {
        e.preventDefault();

        // Support: IE
        // Otherwise set the returnValue property of the original event to false
      } else {
        e.returnValue = false;
      }
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;

      this.isPropagationStopped = returnTrue;

      if (!e || this.isSimulated) {
        return;
      }

      // If stopPropagation exists, run it on the original event
      if (e.stopPropagation) {
        e.stopPropagation();
      }

      // Support: IE
      // Set the cancelBubble property of the original event to true
      e.cancelBubble = true;
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;

      this.isImmediatePropagationStopped = returnTrue;

      if (e && e.stopImmediatePropagation) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  };

  // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://code.google.com/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).
  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,

      handle: function handle(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj;

        // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window
        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }
        return ret;
      }
    };
  });

  // IE submit delegation
  if (!support.submit) {

    jQuery.event.special.submit = {
      setup: function setup() {

        // Only need this for delegated form submit events
        if (jQuery.nodeName(this, "form")) {
          return false;
        }

        // Lazy-add a submit handler when a descendant form may potentially be submitted
        jQuery.event.add(this, "click._submit keypress._submit", function (e) {

          // Node name check avoids a VML-related crash in IE (#9807)
          var elem = e.target,
              form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ?

          // Support: IE <=8
          // We use jQuery.prop instead of elem.form
          // to allow fixing the IE8 delegated submit issue (gh-2332)
          // by 3rd party polyfills/workarounds.
          jQuery.prop(elem, "form") : undefined;

          if (form && !jQuery._data(form, "submit")) {
            jQuery.event.add(form, "submit._submit", function (event) {
              event._submitBubble = true;
            });
            jQuery._data(form, "submit", true);
          }
        });

        // return undefined since we don't need an event listener
      },

      postDispatch: function postDispatch(event) {

        // If form was submitted by the user, bubble the event up the tree
        if (event._submitBubble) {
          delete event._submitBubble;
          if (this.parentNode && !event.isTrigger) {
            jQuery.event.simulate("submit", this.parentNode, event);
          }
        }
      },

      teardown: function teardown() {

        // Only need this for delegated form submit events
        if (jQuery.nodeName(this, "form")) {
          return false;
        }

        // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
        jQuery.event.remove(this, "._submit");
      }
    };
  }

  // IE change delegation and checkbox/radio fix
  if (!support.change) {

    jQuery.event.special.change = {

      setup: function setup() {

        if (rformElems.test(this.nodeName)) {

          // IE doesn't fire change on a check/radio until blur; trigger it on click
          // after a propertychange. Eat the blur-change in special.change.handle.
          // This still fires onchange a second time for check/radio after blur.
          if (this.type === "checkbox" || this.type === "radio") {
            jQuery.event.add(this, "propertychange._change", function (event) {
              if (event.originalEvent.propertyName === "checked") {
                this._justChanged = true;
              }
            });
            jQuery.event.add(this, "click._change", function (event) {
              if (this._justChanged && !event.isTrigger) {
                this._justChanged = false;
              }

              // Allow triggered, simulated change events (#11500)
              jQuery.event.simulate("change", this, event);
            });
          }
          return false;
        }

        // Delegated event; lazy-add a change handler on descendant inputs
        jQuery.event.add(this, "beforeactivate._change", function (e) {
          var elem = e.target;

          if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "change")) {
            jQuery.event.add(elem, "change._change", function (event) {
              if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                jQuery.event.simulate("change", this.parentNode, event);
              }
            });
            jQuery._data(elem, "change", true);
          }
        });
      },

      handle: function handle(event) {
        var elem = event.target;

        // Swallow native change events from checkbox/radio, we already triggered them above
        if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {

          return event.handleObj.handler.apply(this, arguments);
        }
      },

      teardown: function teardown() {
        jQuery.event.remove(this, "._change");

        return !rformElems.test(this.nodeName);
      }
    };
  }

  // Support: Firefox
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome, Safari
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
  if (!support.focusin) {
    jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

      // Attach a single capturing handler on the document while someone wants focusin/focusout
      var handler = function handler(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };

      jQuery.event.special[fix] = {
        setup: function setup() {
          var doc = this.ownerDocument || this,
              attaches = jQuery._data(doc, fix);

          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }
          jQuery._data(doc, fix, (attaches || 0) + 1);
        },
        teardown: function teardown() {
          var doc = this.ownerDocument || this,
              attaches = jQuery._data(doc, fix) - 1;

          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            jQuery._removeData(doc, fix);
          } else {
            jQuery._data(doc, fix, attaches);
          }
        }
      };
    });
  }

  jQuery.fn.extend({

    on: function on(types, selector, data, fn) {
      return _on(this, types, selector, data, fn);
    },
    one: function one(types, selector, data, fn) {
      return _on(this, types, selector, data, fn, 1);
    },
    off: function off(types, selector, fn) {
      var handleObj, type;
      if (types && types.preventDefault && types.handleObj) {

        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }
      if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === "function") {

        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }
      if (fn === false) {
        fn = returnFalse;
      }
      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    },

    trigger: function trigger(type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function triggerHandler(type, data) {
      var elem = this[0];
      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });

  var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
      rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
      rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,


  // Support: IE 10-11, Edge 10240+
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,


  // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rscriptTypeMasked = /^true\/(.*)/,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      safeFragment = createSafeFragment(document),
      fragmentDiv = safeFragment.appendChild(document.createElement("div"));

  // Support: IE<8
  // Manipulating tables requires a tbody
  function manipulationTarget(elem, content) {
    return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
  }

  // Replace/restore the type attribute of script elements for safe DOM manipulation
  function disableScript(elem) {
    elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
    return elem;
  }
  function restoreScript(elem) {
    var match = rscriptTypeMasked.exec(elem.type);
    if (match) {
      elem.type = match[1];
    } else {
      elem.removeAttribute("type");
    }
    return elem;
  }

  function cloneCopyEvent(src, dest) {
    if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
      return;
    }

    var type,
        i,
        l,
        oldData = jQuery._data(src),
        curData = jQuery._data(dest, oldData),
        events = oldData.events;

    if (events) {
      delete curData.handle;
      curData.events = {};

      for (type in events) {
        for (i = 0, l = events[type].length; i < l; i++) {
          jQuery.event.add(dest, type, events[type][i]);
        }
      }
    }

    // make the cloned public data object a copy from the original
    if (curData.data) {
      curData.data = jQuery.extend({}, curData.data);
    }
  }

  function fixCloneNodeIssues(src, dest) {
    var nodeName, e, data;

    // We do not need to do anything for non-Elements
    if (dest.nodeType !== 1) {
      return;
    }

    nodeName = dest.nodeName.toLowerCase();

    // IE6-8 copies events bound via attachEvent when using cloneNode.
    if (!support.noCloneEvent && dest[jQuery.expando]) {
      data = jQuery._data(dest);

      for (e in data.events) {
        jQuery.removeEvent(dest, e, data.handle);
      }

      // Event data gets referenced instead of copied if the expando gets copied too
      dest.removeAttribute(jQuery.expando);
    }

    // IE blanks contents when cloning scripts, and tries to evaluate newly-set text
    if (nodeName === "script" && dest.text !== src.text) {
      disableScript(dest).text = src.text;
      restoreScript(dest);

      // IE6-10 improperly clones children of object elements using classid.
      // IE10 throws NoModificationAllowedError if parent is null, #12132.
    } else if (nodeName === "object") {
      if (dest.parentNode) {
        dest.outerHTML = src.outerHTML;
      }

      // This path appears unavoidable for IE9. When cloning an object
      // element in IE9, the outerHTML strategy above is not sufficient.
      // If the src has innerHTML and the destination does not,
      // copy the src.innerHTML into the dest.innerHTML. #10324
      if (support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) {
        dest.innerHTML = src.innerHTML;
      }
    } else if (nodeName === "input" && rcheckableType.test(src.type)) {

      // IE6-8 fails to persist the checked state of a cloned checkbox
      // or radio button. Worse, IE6-7 fail to give the cloned element
      // a checked appearance if the defaultChecked value isn't also set

      dest.defaultChecked = dest.checked = src.checked;

      // IE6-7 get confused and end up setting the value of a cloned
      // checkbox/radio button to an empty string instead of "on"
      if (dest.value !== src.value) {
        dest.value = src.value;
      }

      // IE6-8 fails to return the selected option to the default selected
      // state when cloning options
    } else if (nodeName === "option") {
      dest.defaultSelected = dest.selected = src.defaultSelected;

      // IE6-8 fails to set the defaultValue to the correct value when
      // cloning other types of input fields
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  function domManip(collection, args, callback, ignored) {

    // Flatten any nested arrays
    args = concat.apply([], args);

    var first,
        node,
        hasScripts,
        scripts,
        doc,
        fragment,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        isFunction = jQuery.isFunction(value);

    // We can't cloneNode fragments that contain checked, in WebKit
    if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function (index) {
        var self = collection.eq(index);
        if (isFunction) {
          args[0] = value.call(this, index, self.html());
        }
        domManip(self, args, callback, ignored);
      });
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;

      if (fragment.childNodes.length === 1) {
        fragment = first;
      }

      // Require either new content or an interest in ignored elements to invoke the callback
      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length;

        // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).
        for (; i < l; i++) {
          node = fragment;

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true);

            // Keep references to cloned scripts for later restoration
            if (hasScripts) {

              // Support: Android<4.1, PhantomJS<2
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }

          callback.call(collection[i], node, i);
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument;

          // Reenable scripts
          jQuery.map(scripts, restoreScript);

          // Evaluate executable scripts on first document insertion
          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];
            if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {

              if (node.src) {

                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl) {
                  jQuery._evalUrl(node.src);
                }
              } else {
                jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
              }
            }
          }
        }

        // Fix #11809: Avoid leaking memory
        fragment = first = null;
      }
    }

    return collection;
  }

  function _remove(elem, selector, keepData) {
    var node,
        elems = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = elems[i]) != null; i++) {

      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }

      if (node.parentNode) {
        if (keepData && jQuery.contains(node.ownerDocument, node)) {
          setGlobalEval(getAll(node, "script"));
        }
        node.parentNode.removeChild(node);
      }
    }

    return elem;
  }

  jQuery.extend({
    htmlPrefilter: function htmlPrefilter(html) {
      return html.replace(rxhtmlTag, "<$1></$2>");
    },

    clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
      var destElements,
          node,
          clone,
          i,
          srcElements,
          inPage = jQuery.contains(elem.ownerDocument, elem);

      if (support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {

        clone = elem.cloneNode(true);

        // IE<=8 does not properly clone detached, unknown element nodes
      } else {
        fragmentDiv.innerHTML = elem.outerHTML;
        fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
      }

      if ((!support.noCloneEvent || !support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

        // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);

        // Fix all IE cloning issues
        for (i = 0; (node = srcElements[i]) != null; ++i) {

          // Ensure that the destination node is not null; Fixes #9587
          if (destElements[i]) {
            fixCloneNodeIssues(node, destElements[i]);
          }
        }
      }

      // Copy the events from the original to the clone
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0; (node = srcElements[i]) != null; i++) {
            cloneCopyEvent(node, destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }

      // Preserve script evaluation history
      destElements = getAll(clone, "script");
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      }

      destElements = srcElements = node = null;

      // Return the cloned set
      return clone;
    },

    cleanData: function cleanData(elems, /* internal */forceAcceptData) {
      var elem,
          type,
          id,
          data,
          i = 0,
          internalKey = jQuery.expando,
          cache = jQuery.cache,
          attributes = support.attributes,
          special = jQuery.event.special;

      for (; (elem = elems[i]) != null; i++) {
        if (forceAcceptData || acceptData(elem)) {

          id = elem[internalKey];
          data = id && cache[id];

          if (data) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type);

                  // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            }

            // Remove cache only if it was not already removed by jQuery.event.remove
            if (cache[id]) {

              delete cache[id];

              // Support: IE<9
              // IE does not allow us to delete expando properties from nodes
              // IE creates expando attributes along with the property
              // IE does not have a removeAttribute function on Document nodes
              if (!attributes && typeof elem.removeAttribute !== "undefined") {
                elem.removeAttribute(internalKey);

                // Webkit & Blink performance suffers when deleting properties
                // from DOM nodes, so set to undefined instead
                // https://code.google.com/p/chromium/issues/detail?id=378607
              } else {
                elem[internalKey] = undefined;
              }

              deletedIds.push(id);
            }
          }
        }
      }
    }
  });

  jQuery.fn.extend({

    // Keep domManip exposed until 3.0 (gh-2225)
    domManip: domManip,

    detach: function detach(selector) {
      return _remove(this, selector, true);
    },

    remove: function remove(selector) {
      return _remove(this, selector);
    },

    text: function text(value) {
      return access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
      }, null, value, arguments.length);
    },

    append: function append() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },

    prepend: function prepend() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },

    before: function before() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },

    after: function after() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },

    empty: function empty() {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {

        // Remove element nodes and prevent memory leaks
        if (elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem, false));
        }

        // Remove any remaining nodes
        while (elem.firstChild) {
          elem.removeChild(elem.firstChild);
        }

        // If this is a select, ensure that it displays empty (#12336)
        // Support: IE<9
        if (elem.options && jQuery.nodeName(elem, "select")) {
          elem.options.length = 0;
        }
      }

      return this;
    },

    clone: function clone(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },

    html: function html(value) {
      return access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;

        if (value === undefined) {
          return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
        }

        // See if we can take a shortcut and just use innerHTML
        if (typeof value === "string" && !rnoInnerhtml.test(value) && (support.htmlSerialize || !rnoshimcache.test(value)) && (support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

          value = jQuery.htmlPrefilter(value);

          try {
            for (; i < l; i++) {

              // Remove element nodes and prevent memory leaks
              elem = this[i] || {};
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0;

            // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },

    replaceWith: function replaceWith() {
      var ignored = [];

      // Make the changes, replacing each non-ignored context element with the new content
      return domManip(this, arguments, function (elem) {
        var parent = this.parentNode;

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));
          if (parent) {
            parent.replaceChild(elem, this);
          }
        }

        // Force callback invocation
      }, ignored);
    }
  });

  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
          i = 0,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems);

        // Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
        push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });

  var iframe,
      elemdisplay = {

    // Support: Firefox
    // We have to pre-define these values for FF (#10227)
    HTML: "block",
    BODY: "block"
  };

  /**
   * Retrieve the actual display of a element
   * @param {String} name nodeName of the element
   * @param {Object} doc Document object
   */

  // Called only from within defaultDisplay
  function actualDisplay(name, doc) {
    var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
        display = jQuery.css(elem[0], "display");

    // We don't have any data stored on the element,
    // so use "detach" method as fast way to get rid of the element
    elem.detach();

    return display;
  }

  /**
   * Try to determine the default display value of an element
   * @param {String} nodeName
   */
  function defaultDisplay(nodeName) {
    var doc = document,
        display = elemdisplay[nodeName];

    if (!display) {
      display = actualDisplay(nodeName, doc);

      // If the simple way fails, read from inside an iframe
      if (display === "none" || !display) {

        // Use the already-created iframe if possible
        iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);

        // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
        doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;

        // Support: IE
        doc.write();
        doc.close();

        display = actualDisplay(nodeName, doc);
        iframe.detach();
      }

      // Store the correct default display
      elemdisplay[nodeName] = display;
    }

    return display;
  }
  var rmargin = /^margin/;

  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

  var swap = function swap(elem, options, callback, args) {
    var ret,
        name,
        old = {};

    // Remember the old values, and insert the new ones
    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.apply(elem, args || []);

    // Revert the old values
    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };

  var documentElement = document.documentElement;

  (function () {
    var pixelPositionVal,
        pixelMarginRightVal,
        boxSizingReliableVal,
        reliableHiddenOffsetsVal,
        reliableMarginRightVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div");

    // Finish early in limited (non-browser) environments
    if (!div.style) {
      return;
    }

    div.style.cssText = "float:left;opacity:.5";

    // Support: IE<9
    // Make sure that element opacity exists (as opposed to filter)
    support.opacity = div.style.opacity === "0.5";

    // Verify style float existence
    // (IE uses styleFloat instead of cssFloat)
    support.cssFloat = !!div.style.cssFloat;

    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";

    container = document.createElement("div");
    container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
    div.innerHTML = "";
    container.appendChild(div);

    // Support: Firefox<29, Android 2.3
    // Vendor-prefix box-sizing
    support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" || div.style.WebkitBoxSizing === "";

    jQuery.extend(support, {
      reliableHiddenOffsets: function reliableHiddenOffsets() {
        if (pixelPositionVal == null) {
          computeStyleTests();
        }
        return reliableHiddenOffsetsVal;
      },

      boxSizingReliable: function boxSizingReliable() {

        // We're checking for pixelPositionVal here instead of boxSizingReliableVal
        // since that compresses better and they're computed together anyway.
        if (pixelPositionVal == null) {
          computeStyleTests();
        }
        return boxSizingReliableVal;
      },

      pixelMarginRight: function pixelMarginRight() {

        // Support: Android 4.0-4.3
        if (pixelPositionVal == null) {
          computeStyleTests();
        }
        return pixelMarginRightVal;
      },

      pixelPosition: function pixelPosition() {
        if (pixelPositionVal == null) {
          computeStyleTests();
        }
        return pixelPositionVal;
      },

      reliableMarginRight: function reliableMarginRight() {

        // Support: Android 2.3
        if (pixelPositionVal == null) {
          computeStyleTests();
        }
        return reliableMarginRightVal;
      },

      reliableMarginLeft: function reliableMarginLeft() {

        // Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
        if (pixelPositionVal == null) {
          computeStyleTests();
        }
        return reliableMarginLeftVal;
      }
    });

    function computeStyleTests() {
      var contents,
          divStyle,
          documentElement = document.documentElement;

      // Setup
      documentElement.appendChild(container);

      div.style.cssText =

      // Support: Android 2.3
      // Vendor-prefix box-sizing
      "-webkit-box-sizing:border-box;box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";

      // Support: IE<9
      // Assume reasonable values in the absence of getComputedStyle
      pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
      pixelMarginRightVal = reliableMarginRightVal = true;

      // Check for getComputedStyle so that this code is not run in IE<9.
      if (window.getComputedStyle) {
        divStyle = window.getComputedStyle(div);
        pixelPositionVal = (divStyle || {}).top !== "1%";
        reliableMarginLeftVal = (divStyle || {}).marginLeft === "2px";
        boxSizingReliableVal = (divStyle || { width: "4px" }).width === "4px";

        // Support: Android 4.0 - 4.3 only
        // Some styles come back with percentage values, even though they shouldn't
        div.style.marginRight = "50%";
        pixelMarginRightVal = (divStyle || { marginRight: "4px" }).marginRight === "4px";

        // Support: Android 2.3 only
        // Div with explicit width and no margin-right incorrectly
        // gets computed margin-right based on width of container (#3333)
        // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
        contents = div.appendChild(document.createElement("div"));

        // Reset CSS: box-sizing; display; margin; border; padding
        contents.style.cssText = div.style.cssText =

        // Support: Android 2.3
        // Vendor-prefix box-sizing
        "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
        contents.style.marginRight = contents.style.width = "0";
        div.style.width = "1px";

        reliableMarginRightVal = !parseFloat((window.getComputedStyle(contents) || {}).marginRight);

        div.removeChild(contents);
      }

      // Support: IE6-8
      // First check that getClientRects works as expected
      // Check if table cells still have offsetWidth/Height when they are set
      // to display:none and there are still other visible table cells in a
      // table row; if so, offsetWidth/Height are not reliable for use when
      // determining if an element has been hidden directly using
      // display:none (it is still safe to use offsets if a parent element is
      // hidden; don safety goggles and see bug #4512 for more information).
      div.style.display = "none";
      reliableHiddenOffsetsVal = div.getClientRects().length === 0;
      if (reliableHiddenOffsetsVal) {
        div.style.display = "";
        div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
        contents = div.getElementsByTagName("td");
        contents[0].style.cssText = "margin:0;border:0;padding:0;display:none";
        reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
        if (reliableHiddenOffsetsVal) {
          contents[0].style.display = "";
          contents[1].style.display = "none";
          reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
        }
      }

      // Teardown
      documentElement.removeChild(container);
    }
  })();

  var getStyles,
      curCSS,
      rposition = /^(top|right|bottom|left)$/;

  if (window.getComputedStyle) {
    getStyles = function getStyles(elem) {

      // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
      // IE throws on elements created in popups
      // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
      var view = elem.ownerDocument.defaultView;

      if (!view || !view.opener) {
        view = window;
      }

      return view.getComputedStyle(elem);
    };

    curCSS = function curCSS(elem, name, computed) {
      var width,
          minWidth,
          maxWidth,
          ret,
          style = elem.style;

      computed = computed || getStyles(elem);

      // getPropertyValue is only needed for .css('filter') in IE9, see #12537
      ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;

      // Support: Opera 12.1x only
      // Fall back to style even without computed
      // computed is undefined for elems on document fragments
      if ((ret === "" || ret === undefined) && !jQuery.contains(elem.ownerDocument, elem)) {
        ret = jQuery.style(elem, name);
      }

      if (computed) {

        // A tribute to the "awesome hack by Dean Edwards"
        // Chrome < 17 and Safari 5.0 uses "computed value"
        // instead of "used value" for margin-right
        // Safari 5.1.7 (at least) returns percentage for a larger set of values,
        // but width seems to be reliably pixels
        // this is against the CSSOM draft spec:
        // http://dev.w3.org/csswg/cssom/#resolved-values
        if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {

          // Remember the original values
          width = style.width;
          minWidth = style.minWidth;
          maxWidth = style.maxWidth;

          // Put in the new values to get a computed value out
          style.minWidth = style.maxWidth = style.width = ret;
          ret = computed.width;

          // Revert the changed values
          style.width = width;
          style.minWidth = minWidth;
          style.maxWidth = maxWidth;
        }
      }

      // Support: IE
      // IE returns zIndex value as an integer.
      return ret === undefined ? ret : ret + "";
    };
  } else if (documentElement.currentStyle) {
    getStyles = function getStyles(elem) {
      return elem.currentStyle;
    };

    curCSS = function curCSS(elem, name, computed) {
      var left,
          rs,
          rsLeft,
          ret,
          style = elem.style;

      computed = computed || getStyles(elem);
      ret = computed ? computed[name] : undefined;

      // Avoid setting ret to empty string here
      // so we don't default to auto
      if (ret == null && style && style[name]) {
        ret = style[name];
      }

      // From the awesome hack by Dean Edwards
      // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

      // If we're not dealing with a regular pixel number
      // but a number that has a weird ending, we need to convert it to pixels
      // but not position css attributes, as those are
      // proportional to the parent element instead
      // and we can't measure the parent instead because it
      // might trigger a "stacking dolls" problem
      if (rnumnonpx.test(ret) && !rposition.test(name)) {

        // Remember the original values
        left = style.left;
        rs = elem.runtimeStyle;
        rsLeft = rs && rs.left;

        // Put in the new values to get a computed value out
        if (rsLeft) {
          rs.left = elem.currentStyle.left;
        }
        style.left = name === "fontSize" ? "1em" : ret;
        ret = style.pixelLeft + "px";

        // Revert the changed values
        style.left = left;
        if (rsLeft) {
          rs.left = rsLeft;
        }
      }

      // Support: IE
      // IE returns zIndex value as an integer.
      return ret === undefined ? ret : ret + "" || "auto";
    };
  }

  function addGetHookIf(conditionFn, hookFn) {

    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function get() {
        if (conditionFn()) {

          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get;
          return;
        }

        // Hook needed; redefine it so that the support test is not executed again.
        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }

  var ralpha = /alpha\([^)]*\)/i,
      ropacity = /opacity\s*=\s*([^)]*)/i,


  // swappable if display is none or starts with table except
  // "table", "table-cell", or "table-caption"
  // see here for display values:
  // https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
      cssShow = { position: "absolute", visibility: "hidden", display: "block" },
      cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      cssPrefixes = ["Webkit", "O", "Moz", "ms"],
      emptyStyle = document.createElement("div").style;

  // return a css property mapped to a potentially vendor prefixed property
  function vendorPropName(name) {

    // shortcut for names that are not vendor prefixed
    if (name in emptyStyle) {
      return name;
    }

    // check for vendor prefixed names
    var capName = name.charAt(0).toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  }

  function showHide(elements, show) {
    var display,
        elem,
        hidden,
        values = [],
        index = 0,
        length = elements.length;

    for (; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }

      values[index] = jQuery._data(elem, "olddisplay");
      display = elem.style.display;
      if (show) {

        // Reset the inline display of this element to learn if it is
        // being hidden by cascaded rules or not
        if (!values[index] && display === "none") {
          elem.style.display = "";
        }

        // Set elements which have been overridden with display: none
        // in a stylesheet to whatever the default browser style is
        // for such an element
        if (elem.style.display === "" && isHidden(elem)) {
          values[index] = jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName));
        }
      } else {
        hidden = isHidden(elem);

        if (display && display !== "none" || !hidden) {
          jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
        }
      }
    }

    // Set the display of most of the elements in a second loop
    // to avoid the constant reflow
    for (index = 0; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      if (!show || elem.style.display === "none" || elem.style.display === "") {
        elem.style.display = show ? values[index] || "" : "none";
      }
    }

    return elements;
  }

  function setPositiveNumber(elem, value, subtract) {
    var matches = rnumsplit.exec(value);
    return matches ?

    // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
  }

  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    var i = extra === (isBorderBox ? "border" : "content") ?

    // If we already have the right measurement, avoid augmentation
    4 :

    // Otherwise initialize for horizontal or vertical properties
    name === "width" ? 1 : 0,
        val = 0;

    for (; i < 4; i += 2) {

      // both box models exclude margin, so add it if we want it
      if (extra === "margin") {
        val += jQuery.css(elem, extra + cssExpand[i], true, styles);
      }

      if (isBorderBox) {

        // border-box includes padding, so remove it if we want content
        if (extra === "content") {
          val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        }

        // at this point, extra isn't border nor margin, so remove border
        if (extra !== "margin") {
          val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      } else {

        // at this point, extra isn't content, so add padding
        val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

        // at this point, extra isn't content nor padding, so add border
        if (extra !== "padding") {
          val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    }

    return val;
  }

  function getWidthOrHeight(elem, name, extra) {

    // Start with offset property, which is equivalent to the border-box value
    var valueIsBorderBox = true,
        val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
        styles = getStyles(elem),
        isBorderBox = support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";

    // Support: IE11 only
    // In IE 11 fullscreen elements inside of an iframe have
    // 100x too small dimensions (gh-1764).
    if (document.msFullscreenElement && window.top !== window) {

      // Support: IE11 only
      // Running getBoundingClientRect on a disconnected node
      // in IE throws an error.
      if (elem.getClientRects().length) {
        val = Math.round(elem.getBoundingClientRect()[name] * 100);
      }
    }

    // some non-html elements return undefined for offsetWidth, so check for null/undefined
    // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
    // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
    if (val <= 0 || val == null) {

      // Fall back to computed then uncomputed css if necessary
      val = curCSS(elem, name, styles);
      if (val < 0 || val == null) {
        val = elem.style[name];
      }

      // Computed unit is not pixels. Stop here and return.
      if (rnumnonpx.test(val)) {
        return val;
      }

      // we need the check for style in case a browser which returns unreliable values
      // for getComputedStyle silently falls back to the reliable elem.style
      valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

      // Normalize "", auto, and prepare for extra
      val = parseFloat(val) || 0;
    }

    // use the active box-sizing model to add/subtract irrelevant styles
    return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
  }

  jQuery.extend({

    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function get(elem, computed) {
          if (computed) {

            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },

    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },

    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {

      // normalize float css property
      "float": support.cssFloat ? "cssFloat" : "styleFloat"
    },

    // Get and set the style property on a DOM Node
    style: function style(elem, name, value, extra) {

      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      }

      // Make sure that we're working with the right name
      var ret,
          type,
          hooks,
          origName = jQuery.camelCase(name),
          style = elem.style;

      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);

      // gets hook for the prefixed version
      // followed by the unprefixed version
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

      // Check if we're setting a value
      if (value !== undefined) {
        type = typeof value === "undefined" ? "undefined" : _typeof(value);

        // Convert "+=" or "-=" to relative numbers (#7345)
        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret);

          // Fixes bug #9237
          type = "number";
        }

        // Make sure that null and NaN values aren't set. See: #7116
        if (value == null || value !== value) {
          return;
        }

        // If a number was passed in, add the unit (except for certain CSS properties)
        if (type === "number") {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        }

        // Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
        // but it would mean to define eight
        // (for every problematic property) identical functions
        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        }

        // If a hook was provided, use that value, otherwise just set the specified value
        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

          // Support: IE
          // Swallow errors from 'invalid' CSS values (#5509)
          try {
            style[name] = value;
          } catch (e) {}
        }
      } else {

        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {

          return ret;
        }

        // Otherwise just get the value from the style object
        return style[name];
      }
    },

    css: function css(elem, name, extra, styles) {
      var num,
          val,
          hooks,
          origName = jQuery.camelCase(name);

      // Make sure that we're working with the right name
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);

      // gets hook for the prefixed version
      // followed by the unprefixed version
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

      // If a hook was provided get the computed value from there
      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      }

      // Otherwise, if a way to get the computed value exists, use that
      if (val === undefined) {
        val = curCSS(elem, name, styles);
      }

      //convert "normal" to computed value
      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      }

      // Return, converting to number if forced or a qualifier was provided and val looks numeric
      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }
      return val;
    }
  });

  jQuery.each(["height", "width"], function (i, name) {
    jQuery.cssHooks[name] = {
      get: function get(elem, computed, extra) {
        if (computed) {

          // certain elements can have dimension info if we invisibly show them
          // however, it must have a current display style that would benefit from this
          return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, name, extra);
          }) : getWidthOrHeight(elem, name, extra);
        }
      },

      set: function set(elem, value, extra) {
        var styles = extra && getStyles(elem);
        return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
      }
    };
  });

  if (!support.opacity) {
    jQuery.cssHooks.opacity = {
      get: function get(elem, computed) {

        // IE uses filters for opacity
        return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
      },

      set: function set(elem, value) {
        var style = elem.style,
            currentStyle = elem.currentStyle,
            opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
            filter = currentStyle && currentStyle.filter || style.filter || "";

        // IE has trouble with opacity if it does not have layout
        // Force it by setting the zoom level
        style.zoom = 1;

        // if setting opacity to 1, and no other filters exist -
        // attempt to remove filter attribute #6652
        // if value === "", then remove inline opacity #12685
        if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {

          // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
          // if "filter:" is present at all, clearType is disabled, we want to avoid this
          // style.removeAttribute is IE Only, but so apparently is this code path...
          style.removeAttribute("filter");

          // if there is no filter style applied in a css rule
          // or unset inline opacity, we are done
          if (value === "" || currentStyle && !currentStyle.filter) {
            return;
          }
        }

        // otherwise, set new filter values
        style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
      }
    };
  }

  jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) {
    if (computed) {
      return swap(elem, { "display": "inline-block" }, curCSS, [elem, "marginRight"]);
    }
  });

  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || (

      // Support: IE<=11+
      // Running getBoundingClientRect on a disconnected node in IE throws an error
      // Support: IE8 only
      // getClientRects() errors on disconnected elems
      jQuery.contains(elem.ownerDocument, elem) ? elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () {
        return elem.getBoundingClientRect().left;
      }) : 0)) + "px";
    }
  });

  // These hooks are used by animate to expand properties
  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function expand(value) {
        var i = 0,
            expanded = {},


        // assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [value];

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }

        return expanded;
      }
    };

    if (!rmargin.test(prefix)) {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });

  jQuery.fn.extend({
    css: function css(name, value) {
      return access(this, function (elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;

        if (jQuery.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }

          return map;
        }

        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    },
    show: function show() {
      return showHide(this, true);
    },
    hide: function hide() {
      return showHide(this);
    },
    toggle: function toggle(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }

      return this.each(function () {
        if (isHidden(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });

  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }
  jQuery.Tween = Tween;

  Tween.prototype = {
    constructor: Tween,
    init: function init(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function cur() {
      var hooks = Tween.propHooks[this.prop];

      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function run(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }
      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }
      return this;
    }
  };

  Tween.prototype.init.prototype = Tween.prototype;

  Tween.propHooks = {
    _default: {
      get: function get(tween) {
        var result;

        // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.
        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        }

        // passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails
        // so, simple values such as "10px" are parsed to Float.
        // complex values such as "rotate(1rad)" are returned as is.
        result = jQuery.css(tween.elem, tween.prop, "");

        // Empty strings, null, undefined and "auto" are converted to 0.
        return !result || result === "auto" ? 0 : result;
      },
      set: function set(tween) {

        // use step hook for back compat - use cssHook if its there - use .style if its
        // available and use plain properties where available
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  };

  // Support: IE <=9
  // Panic based approach to setting things on disconnected nodes

  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function set(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };

  jQuery.easing = {
    linear: function linear(p) {
      return p;
    },
    swing: function swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };

  jQuery.fx = Tween.prototype.init;

  // Back Compat <1.8 extension point
  jQuery.fx.step = {};

  var fxNow,
      timerId,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;

  // Animations created synchronously will run synchronously
  function createFxNow() {
    window.setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = jQuery.now();
  }

  // Generate parameters to create a standard animation
  function genFx(type, includeWidth) {
    var which,
        attrs = { height: type },
        i = 0;

    // if we include width, step value is 1 to do all cssExpand values,
    // if we don't include width, step value is 2 to skip over Left and Right
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }

    return attrs;
  }

  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;
    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {

        // we're done with this property
        return tween;
      }
    }
  }

  function defaultPrefilter(elem, props, opts) {
    /* jshint validthis: true */
    var prop,
        value,
        toggle,
        tween,
        hooks,
        oldfire,
        display,
        checkDisplay,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHidden(elem),
        dataShow = jQuery._data(elem, "fxshow");

    // handle queue: false promises
    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");
      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;
        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;

      anim.always(function () {

        // doing this makes sure that the complete handler will be called
        // before this completes
        anim.always(function () {
          hooks.unqueued--;
          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    }

    // height/width overflow pass
    if (elem.nodeType === 1 && ("height" in props || "width" in props)) {

      // Make sure that nothing sneaks out
      // Record all 3 overflow attributes because IE does not
      // change the overflow attribute when overflowX and
      // overflowY are set to the same value
      opts.overflow = [style.overflow, style.overflowX, style.overflowY];

      // Set display property to inline-block for height/width
      // animations on inline elements that are having width/height animated
      display = jQuery.css(elem, "display");

      // Test default display if display is currently "none"
      checkDisplay = display === "none" ? jQuery._data(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;

      if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {

        // inline-level elements accept inline-block;
        // block-level elements need to be inline with layout
        if (!support.inlineBlockNeedsLayout || defaultDisplay(elem.nodeName) === "inline") {
          style.display = "inline-block";
        } else {
          style.zoom = 1;
        }
      }
    }

    if (opts.overflow) {
      style.overflow = "hidden";
      if (!support.shrinkWrapBlocks()) {
        anim.always(function () {
          style.overflow = opts.overflow[0];
          style.overflowX = opts.overflow[1];
          style.overflowY = opts.overflow[2];
        });
      }
    }

    // show/hide pass
    for (prop in props) {
      value = props[prop];
      if (rfxtypes.exec(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";
        if (value === (hidden ? "hide" : "show")) {

          // If there is dataShow left over from a stopped hide or show
          // and we are going to proceed with show, we should pretend to be hidden
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true;
          } else {
            continue;
          }
        }
        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);

        // Any non-fx value stops us from restoring the original display value
      } else {
        display = undefined;
      }
    }

    if (!jQuery.isEmptyObject(orig)) {
      if (dataShow) {
        if ("hidden" in dataShow) {
          hidden = dataShow.hidden;
        }
      } else {
        dataShow = jQuery._data(elem, "fxshow", {});
      }

      // store state if its toggle - enables .stop().toggle() to "reverse"
      if (toggle) {
        dataShow.hidden = !hidden;
      }
      if (hidden) {
        jQuery(elem).show();
      } else {
        anim.done(function () {
          jQuery(elem).hide();
        });
      }
      anim.done(function () {
        var prop;
        jQuery._removeData(elem, "fxshow");
        for (prop in orig) {
          jQuery.style(elem, prop, orig[prop]);
        }
      });
      for (prop in orig) {
        tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

        if (!(prop in dataShow)) {
          dataShow[prop] = tween.start;
          if (hidden) {
            tween.end = tween.start;
            tween.start = prop === "width" || prop === "height" ? 1 : 0;
          }
        }
      }

      // If this is a noop like .hide().hide(), restore an overwritten display value
    } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
      style.display = display;
    }
  }

  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks;

    // camelCase, specialEasing and expand cssHook pass
    for (index in props) {
      name = jQuery.camelCase(index);
      easing = specialEasing[name];
      value = props[index];
      if (jQuery.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = jQuery.cssHooks[name];
      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name];

        // not quite $.extend, this wont overwrite keys already present.
        // also - reusing 'index' from above because we have the correct "name"
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function () {

      // don't match elem in the :animated selector
      delete tick.elem;
    }),
        tick = function tick() {
      if (stopped) {
        return false;
      }
      var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),


      // Support: Android 2.3
      // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
      temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;

      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }

      deferred.notifyWith(elem, [animation, percent, remaining]);

      if (percent < 1 && length) {
        return remaining;
      } else {
        deferred.resolveWith(elem, [animation]);
        return false;
      }
    },
        animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function createTween(prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function stop(gotoEnd) {
        var index = 0,


        // if we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        length = gotoEnd ? animation.tweens.length : 0;
        if (stopped) {
          return this;
        }
        stopped = true;
        for (; index < length; index++) {
          animation.tweens[index].run(1);
        }

        // resolve when we played the last frame
        // otherwise, reject
        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }
        return this;
      }
    }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
      if (result) {
        if (jQuery.isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
        }
        return result;
      }
    }

    jQuery.map(props, createTween, animation);

    if (jQuery.isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    }

    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));

    // attach callbacks from options
    return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
  }

  jQuery.Animation = jQuery.extend(Animation, {

    tweeners: {
      "*": [function (prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },

    tweener: function tweener(props, callback) {
      if (jQuery.isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnotwhite);
      }

      var prop,
          index = 0,
          length = props.length;

      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },

    prefilters: [defaultPrefilter],

    prefilter: function prefilter(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });

  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
    };

    opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

    // normalize opt.queue - true/undefined/null -> "fx"
    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    }

    // Queueing
    opt.old = opt.complete;

    opt.complete = function () {
      if (jQuery.isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };

    return opt;
  };

  jQuery.fn.extend({
    fadeTo: function fadeTo(speed, to, easing, callback) {

      // show any hidden elements after setting opacity to 0
      return this.filter(isHidden).css("opacity", 0).show()

      // animate to the value specified
      .end().animate({ opacity: to }, speed, easing, callback);
    },
    animate: function animate(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function doAnimation() {

        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation(this, jQuery.extend({}, prop), optall);

        // Empty animations, or finishing resolves immediately
        if (empty || jQuery._data(this, "finish")) {
          anim.stop(true);
        }
      };
      doAnimation.finish = doAnimation;

      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function stop(type, clearQueue, gotoEnd) {
      var stopQueue = function stopQueue(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }
      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = jQuery._data(this);

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {

            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        }

        // start the next in the queue if the last step wasn't forced
        // timers currently will call their complete callbacks, which will dequeue
        // but only if they were gotoEnd
        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function finish(type) {
      if (type !== false) {
        type = type || "fx";
      }
      return this.each(function () {
        var index,
            data = jQuery._data(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0;

        // enable finishing flag on private data
        data.finish = true;

        // empty the queue first
        jQuery.queue(this, type, []);

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }

        // look for any active animations, and finish them
        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }

        // look for any animations in the old queue and finish them
        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }

        // turn off finishing flag
        delete data.finish;
      });
    }
  });

  jQuery.each(["toggle", "show", "hide"], function (i, name) {
    var cssFn = jQuery.fn[name];
    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  });

  // Generate shortcuts for custom animations
  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: { opacity: "show" },
    fadeOut: { opacity: "hide" },
    fadeToggle: { opacity: "toggle" }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });

  jQuery.timers = [];
  jQuery.fx.tick = function () {
    var timer,
        timers = jQuery.timers,
        i = 0;

    fxNow = jQuery.now();

    for (; i < timers.length; i++) {
      timer = timers[i];

      // Checks the timer has not already been removed
      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = undefined;
  };

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    if (timer()) {
      jQuery.fx.start();
    } else {
      jQuery.timers.pop();
    }
  };

  jQuery.fx.interval = 13;

  jQuery.fx.start = function () {
    if (!timerId) {
      timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
    }
  };

  jQuery.fx.stop = function () {
    window.clearInterval(timerId);
    timerId = null;
  };

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,

    // Default speed
    _default: 400
  };

  // Based off of the plugin by Clint Helfers, with permission.
  // http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";

    return this.queue(type, function (next, hooks) {
      var timeout = window.setTimeout(next, time);
      hooks.stop = function () {
        window.clearTimeout(timeout);
      };
    });
  };

  (function () {
    var a,
        input = document.createElement("input"),
        div = document.createElement("div"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));

    // Setup
    div = document.createElement("div");
    div.setAttribute("className", "t");
    div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    a = div.getElementsByTagName("a")[0];

    // Support: Windows Web Apps (WWA)
    // `type` must use .setAttribute for WWA (#14901)
    input.setAttribute("type", "checkbox");
    div.appendChild(input);

    a = div.getElementsByTagName("a")[0];

    // First batch of tests.
    a.style.cssText = "top:1px";

    // Test setAttribute on camelCase class.
    // If it works, we need attrFixes when doing get/setAttribute (ie6/7)
    support.getSetAttribute = div.className !== "t";

    // Get the style information from getAttribute
    // (IE uses .cssText instead)
    support.style = /top/.test(a.getAttribute("style"));

    // Make sure that URLs aren't manipulated
    // (IE normalizes it by default)
    support.hrefNormalized = a.getAttribute("href") === "/a";

    // Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
    support.checkOn = !!input.value;

    // Make sure that a selected-by-default option has a working selected property.
    // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
    support.optSelected = opt.selected;

    // Tests for enctype support on a form (#6743)
    support.enctype = !!document.createElement("form").enctype;

    // Make sure that the options inside disabled selects aren't marked as disabled
    // (WebKit marks them as disabled)
    select.disabled = true;
    support.optDisabled = !opt.disabled;

    // Support: IE8 only
    // Check if we can trust getAttribute("value")
    input = document.createElement("input");
    input.setAttribute("value", "");
    support.input = input.getAttribute("value") === "";

    // Check if an input maintains its value after becoming a radio
    input.value = "t";
    input.setAttribute("type", "radio");
    support.radioValue = input.value === "t";
  })();

  var rreturn = /\r/g,
      rspaces = /[\x20\t\r\n\f]+/g;

  jQuery.fn.extend({
    val: function val(value) {
      var hooks,
          ret,
          isFunction,
          elem = this[0];

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }

          ret = elem.value;

          return typeof ret === "string" ?

          // handle most common string cases
          ret.replace(rreturn, "") :

          // handle cases where value is null/undef or number
          ret == null ? "" : ret;
        }

        return;
      }

      isFunction = jQuery.isFunction(value);

      return this.each(function (i) {
        var val;

        if (this.nodeType !== 1) {
          return;
        }

        if (isFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        }

        // Treat null/undefined as ""; convert numbers to string
        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (jQuery.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

        // If set returns undefined, fall back to normal setting
        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });

  jQuery.extend({
    valHooks: {
      option: {
        get: function get(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val :

          // Support: IE10-11+
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          jQuery.trim(jQuery.text(elem)).replace(rspaces, " ");
        }
      },
      select: {
        get: function get(elem) {
          var value,
              option,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one" || index < 0,
              values = one ? null : [],
              max = one ? index + 1 : options.length,
              i = index < 0 ? max : one ? index : 0;

          // Loop through all the selected options
          for (; i < max; i++) {
            option = options[i];

            // oldIE doesn't update selected after form reset (#2551)
            if ((option.selected || i === index) && (

            // Don't return options that are disabled or in a disabled optgroup
            support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

              // Get the specific value for the option
              value = jQuery(option).val();

              // We don't need an array for one selects
              if (one) {
                return value;
              }

              // Multi-Selects return an array
              values.push(value);
            }
          }

          return values;
        },

        set: function set(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;

          while (i--) {
            option = options[i];

            if (jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {

              // Support: IE6
              // When new option element is added to select box we need to
              // force reflow of newly added node in order to workaround delay
              // of initialization properties
              try {
                option.selected = optionSet = true;
              } catch (_) {

                // Will be executed only in IE6
                option.scrollHeight;
              }
            } else {
              option.selected = false;
            }
          }

          // Force browsers to behave consistently when non-matching value is set
          if (!optionSet) {
            elem.selectedIndex = -1;
          }

          return options;
        }
      }
    }
  });

  // Radios and checkboxes getter/setter
  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
      set: function set(elem, value) {
        if (jQuery.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };
    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  });

  var nodeHook,
      boolHook,
      attrHandle = jQuery.expr.attrHandle,
      ruseDefault = /^(?:checked|selected)$/i,
      getSetAttribute = support.getSetAttribute,
      getSetInput = support.input;

  jQuery.fn.extend({
    attr: function attr(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },

    removeAttr: function removeAttr(name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    }
  });

  jQuery.extend({
    attr: function attr(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType;

      // Don't get/set attributes on text, comment and attribute nodes
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      // Fallback to prop when attributes are not supported
      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      }

      // All attributes are lowercase
      // Grab necessary hook if one is defined
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        name = name.toLowerCase();
        hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }

        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        elem.setAttribute(name, value + "");
        return value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      ret = jQuery.find.attr(elem, name);

      // Non-existent attributes return null, we normalize to undefined
      return ret == null ? undefined : ret;
    },

    attrHooks: {
      type: {
        set: function set(elem, value) {
          if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {

            // Setting the type on a radio button after the value resets the value in IE8-9
            // Reset value to default in case type is set after value during creation
            var val = elem.value;
            elem.setAttribute("type", value);
            if (val) {
              elem.value = val;
            }
            return value;
          }
        }
      }
    },

    removeAttr: function removeAttr(elem, value) {
      var name,
          propName,
          i = 0,
          attrNames = value && value.match(rnotwhite);

      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          propName = jQuery.propFix[name] || name;

          // Boolean attributes get special treatment (#10870)
          if (jQuery.expr.match.bool.test(name)) {

            // Set corresponding property to false
            if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
              elem[propName] = false;

              // Support: IE<9
              // Also clear defaultChecked/defaultSelected (if appropriate)
            } else {
              elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;
            }

            // See #9699 for explanation of this approach (setting first, then removal)
          } else {
            jQuery.attr(elem, name, "");
          }

          elem.removeAttribute(getSetAttribute ? name : propName);
        }
      }
    }
  });

  // Hooks for boolean attributes
  boolHook = {
    set: function set(elem, value, name) {
      if (value === false) {

        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {

        // IE<8 needs the *property* name
        elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
      } else {

        // Support: IE<9
        // Use defaultChecked and defaultSelected for oldIE
        elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
      }
      return name;
    }
  };

  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;

    if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
      attrHandle[name] = function (elem, name, isXML) {
        var ret, handle;
        if (!isXML) {

          // Avoid an infinite loop by temporarily removing this function from the getter
          handle = attrHandle[name];
          attrHandle[name] = ret;
          ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
          attrHandle[name] = handle;
        }
        return ret;
      };
    } else {
      attrHandle[name] = function (elem, name, isXML) {
        if (!isXML) {
          return elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null;
        }
      };
    }
  });

  // fix oldIE attroperties
  if (!getSetInput || !getSetAttribute) {
    jQuery.attrHooks.value = {
      set: function set(elem, value, name) {
        if (jQuery.nodeName(elem, "input")) {

          // Does not return so that setAttribute is also used
          elem.defaultValue = value;
        } else {

          // Use nodeHook if defined (#1954); otherwise setAttribute is fine
          return nodeHook && nodeHook.set(elem, value, name);
        }
      }
    };
  }

  // IE6/7 do not support getting/setting some attributes with get/setAttribute
  if (!getSetAttribute) {

    // Use this for any attribute in IE6/7
    // This fixes almost every IE6/7 issue
    nodeHook = {
      set: function set(elem, value, name) {

        // Set the existing or create a new attribute node
        var ret = elem.getAttributeNode(name);
        if (!ret) {
          elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));
        }

        ret.value = value += "";

        // Break association with cloned elements by also using setAttribute (#9646)
        if (name === "value" || value === elem.getAttribute(name)) {
          return value;
        }
      }
    };

    // Some attributes are constructed with empty-string values when not defined
    attrHandle.id = attrHandle.name = attrHandle.coords = function (elem, name, isXML) {
      var ret;
      if (!isXML) {
        return (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null;
      }
    };

    // Fixing value retrieval on a button requires this module
    jQuery.valHooks.button = {
      get: function get(elem, name) {
        var ret = elem.getAttributeNode(name);
        if (ret && ret.specified) {
          return ret.value;
        }
      },
      set: nodeHook.set
    };

    // Set contenteditable to false on removals(#10429)
    // Setting to empty string throws an error as an invalid value
    jQuery.attrHooks.contenteditable = {
      set: function set(elem, value, name) {
        nodeHook.set(elem, value === "" ? false : value, name);
      }
    };

    // Set width and height to auto instead of 0 on empty string( Bug #8150 )
    // This is for removals
    jQuery.each(["width", "height"], function (i, name) {
      jQuery.attrHooks[name] = {
        set: function set(elem, value) {
          if (value === "") {
            elem.setAttribute(name, "auto");
            return value;
          }
        }
      };
    });
  }

  if (!support.style) {
    jQuery.attrHooks.style = {
      get: function get(elem) {

        // Return undefined in the case of empty string
        // Note: IE uppercases css property names, but if we were to .toLowerCase()
        // .cssText, that would destroy case sensitivity in URL's, like in "background"
        return elem.style.cssText || undefined;
      },
      set: function set(elem, value) {
        return elem.style.cssText = value + "";
      }
    };
  }

  var rfocusable = /^(?:input|select|textarea|button|object)$/i,
      rclickable = /^(?:a|area)$/i;

  jQuery.fn.extend({
    prop: function prop(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },

    removeProp: function removeProp(name) {
      name = jQuery.propFix[name] || name;
      return this.each(function () {

        // try/catch handles cases where IE balks (such as removing a property on window)
        try {
          this[name] = undefined;
          delete this[name];
        } catch (e) {}
      });
    }
  });

  jQuery.extend({
    prop: function prop(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType;

      // Don't get/set properties on text, comment and attribute nodes
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }

      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        return elem[name] = value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      return elem[name];
    },

    propHooks: {
      tabIndex: {
        get: function get(elem) {

          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          var tabindex = jQuery.find.attr(elem, "tabindex");

          return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
        }
      }
    },

    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  });

  // Some attributes require a special call on IE
  // http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
  if (!support.hrefNormalized) {

    // href/src property should get the full normalized URL (#10299/#12915)
    jQuery.each(["href", "src"], function (i, name) {
      jQuery.propHooks[name] = {
        get: function get(elem) {
          return elem.getAttribute(name, 4);
        }
      };
    });
  }

  // Support: Safari, IE9+
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function get(elem) {
        var parent = elem.parentNode;

        if (parent) {
          parent.selectedIndex;

          // Make sure that it also works with optgroups, see #5701
          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
        return null;
      },
      set: function set(elem) {
        var parent = elem.parentNode;
        if (parent) {
          parent.selectedIndex;

          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }

  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  });

  // IE6/7 call enctype encoding
  if (!support.enctype) {
    jQuery.propFix.enctype = "encoding";
  }

  var rclass = /[\t\r\n\f]/g;

  function getClass(elem) {
    return jQuery.attr(elem, "class") || "";
  }

  jQuery.fn.extend({
    addClass: function addClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (jQuery.isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }

      if (typeof value === "string" && value) {
        classes = value.match(rnotwhite) || [];

        while (elem = this[i++]) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");

          if (cur) {
            j = 0;
            while (clazz = classes[j++]) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            }

            // only assign if different to avoid unneeded rendering.
            finalValue = jQuery.trim(cur);
            if (curValue !== finalValue) {
              jQuery.attr(elem, "class", finalValue);
            }
          }
        }
      }

      return this;
    },

    removeClass: function removeClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (jQuery.isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }

      if (!arguments.length) {
        return this.attr("class", "");
      }

      if (typeof value === "string" && value) {
        classes = value.match(rnotwhite) || [];

        while (elem = this[i++]) {
          curValue = getClass(elem);

          // This expression is here for better compressibility (see addClass)
          cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");

          if (cur) {
            j = 0;
            while (clazz = classes[j++]) {

              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            }

            // Only assign if different to avoid unneeded rendering.
            finalValue = jQuery.trim(cur);
            if (curValue !== finalValue) {
              jQuery.attr(elem, "class", finalValue);
            }
          }
        }
      }

      return this;
    },

    toggleClass: function toggleClass(value, stateVal) {
      var type = typeof value === "undefined" ? "undefined" : _typeof(value);

      if (typeof stateVal === "boolean" && type === "string") {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }

      if (jQuery.isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }

      return this.each(function () {
        var className, i, self, classNames;

        if (type === "string") {

          // Toggle individual class names
          i = 0;
          self = jQuery(this);
          classNames = value.match(rnotwhite) || [];

          while (className = classNames[i++]) {

            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          }

          // Toggle whole class name
        } else if (value === undefined || type === "boolean") {
          className = getClass(this);
          if (className) {

            // store className if set
            jQuery._data(this, "__className__", className);
          }

          // If the element has a class name or if we're passed "false",
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.
          jQuery.attr(this, "class", className || value === false ? "" : jQuery._data(this, "__className__") || "");
        }
      });
    },

    hasClass: function hasClass(selector) {
      var className,
          elem,
          i = 0;

      className = " " + selector + " ";
      while (elem = this[i++]) {
        if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) {
          return true;
        }
      }

      return false;
    }
  });

  // Return jQuery for attributes-only inclusion


  jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {

    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });

  jQuery.fn.extend({
    hover: function hover(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });

  var location = window.location;

  var nonce = jQuery.now();

  var rquery = /\?/;

  var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

  jQuery.parseJSON = function (data) {

    // Attempt to parse using the native JSON parser first
    if (window.JSON && window.JSON.parse) {

      // Support: Android 2.3
      // Workaround failure to string-cast null input
      return window.JSON.parse(data + "");
    }

    var requireNonComma,
        depth = null,
        str = jQuery.trim(data + "");

    // Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
    // after removing valid tokens
    return str && !jQuery.trim(str.replace(rvalidtokens, function (token, comma, open, close) {

      // Force termination if we see a misplaced comma
      if (requireNonComma && comma) {
        depth = 0;
      }

      // Perform no more replacements after returning to outermost depth
      if (depth === 0) {
        return token;
      }

      // Commas must not follow "[", "{", or ","
      requireNonComma = open || comma;

      // Determine new depth
      // array/object open ("[" or "{"): depth += true - false (increment)
      // array/object close ("]" or "}"): depth += false - true (decrement)
      // other cases ("," or primitive): depth += true - true (numeric cast)
      depth += !close - !open;

      // Remove this token
      return "";
    })) ? Function("return " + str)() : jQuery.error("Invalid JSON: " + data);
  };

  // Cross-browser xml parsing
  jQuery.parseXML = function (data) {
    var xml, tmp;
    if (!data || typeof data !== "string") {
      return null;
    }
    try {
      if (window.DOMParser) {
        // Standard
        tmp = new window.DOMParser();
        xml = tmp.parseFromString(data, "text/xml");
      } else {
        // IE
        xml = new window.ActiveXObject("Microsoft.XMLDOM");
        xml.async = "false";
        xml.loadXML(data);
      }
    } catch (e) {
      xml = undefined;
    }
    if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }
    return xml;
  };

  var rhash = /#.*$/,
      rts = /([?&])_=[^&]*/,


  // IE leaves an \r character at EOL
  rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,


  // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,
      rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,


  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},


  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},


  // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*"),


  // Document location
  ajaxLocation = location.href,


  // Segment location into parts
  ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

  // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
  function addToPrefiltersOrTransports(structure) {

    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {

      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }

      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];

      if (jQuery.isFunction(func)) {

        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]) {

          // Prepend if requested
          if (dataType.charAt(0) === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func);

            // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  }

  // Base inspection function for prefilters and transports
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

    var inspected = {},
        seekingTransport = structure === transports;

    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {

          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  }

  // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887
  function ajaxExtend(target, src) {
    var deep,
        key,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }
    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }

  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */
  function ajaxHandleResponses(s, jqXHR, responses) {
    var firstDataType,
        ct,
        finalDataType,
        type,
        contents = s.contents,
        dataTypes = s.dataTypes;

    // Remove auto dataType and get content-type in the process
    while (dataTypes[0] === "*") {
      dataTypes.shift();
      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    }

    // Check if we're dealing with a known content-type
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }

    // Check to see if we have a response for the expected dataType
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {

      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          firstDataType = type;
        }
      }

      // Or just use first one
      finalDataType = finalDataType || firstDataType;
    }

    // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }
      return responses[finalDataType];
    }
  }

  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},


    // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice();

    // Create converters map with lowercased keys
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }

    current = dataTypes.shift();

    // Convert to each sequential dataType
    while (current) {

      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      }

      // Apply the dataFilter if provided
      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }

      prev = current;
      current = dataTypes.shift();

      if (current) {

        // There's only work to do if current dataType is non-auto
        if (current === "*") {

          current = prev;

          // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== "*" && prev !== current) {

          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current];

          // If none found, seek a pair
          if (!conv) {
            for (conv2 in converters) {

              // If conv2 outputs current
              tmp = conv2.split(" ");
              if (tmp[1] === current) {

                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                if (conv) {

                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2];

                    // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }
                  break;
                }
              }
            }
          }

          // Apply converter (if not an equivalence)
          if (conv !== true) {

            // Unless errors are allowed to bubble, catch and return them
            if (conv && s["throws"]) {
              // jscs:ignore requireDotNotation
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }

    return { state: "success", data: response };
  }

  jQuery.extend({

    // Counter for holding the number of active queries
    active: 0,

    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},

    ajaxSettings: {
      url: ajaxLocation,
      type: "GET",
      isLocal: rlocalProtocol.test(ajaxLocParts[1]),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      /*
       timeout: 0,
       data: null,
       dataType: null,
       username: null,
       password: null,
       cache: null,
       throws: false,
       traditional: false,
       headers: {},
       */

      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },

      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },

      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },

      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {

        // Convert anything to text
        "* text": String,

        // Text to html (true = no transformation)
        "text html": true,

        // Evaluate text as a json expression
        "text json": jQuery.parseJSON,

        // Parse text as xml
        "text xml": jQuery.parseXML
      },

      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },

    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function ajaxSetup(target, settings) {
      return settings ?

      // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

      // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target);
    },

    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),

    // Main method
    ajax: function ajax(url, options) {

      // If url is an object, simulate pre-1.5 signature
      if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
        options = url;
        url = undefined;
      }

      // Force options to be an object
      options = options || {};

      var

      // Cross-domain detection vars
      parts,


      // Loop variable
      i,


      // URL without anti-cache param
      cacheURL,


      // Response headers as string
      responseHeadersString,


      // timeout handle
      timeoutTimer,


      // To know if global events are to be dispatched
      fireGlobals,
          transport,


      // Response headers
      responseHeaders,


      // Create the final options object
      s = jQuery.ajaxSetup({}, options),


      // Callbacks context
      callbackContext = s.context || s,


      // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,


      // Deferreds
      deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),


      // Status-dependent callbacks
      _statusCode = s.statusCode || {},


      // Headers (they are sent all at once)
      requestHeaders = {},
          requestHeadersNames = {},


      // The jqXHR state
      state = 0,


      // Default abort message
      strAbort = "canceled",


      // Fake xhr
      jqXHR = {
        readyState: 0,

        // Builds headers hashtable if needed
        getResponseHeader: function getResponseHeader(key) {
          var match;
          if (state === 2) {
            if (!responseHeaders) {
              responseHeaders = {};
              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase()] = match[2];
              }
            }
            match = responseHeaders[key.toLowerCase()];
          }
          return match == null ? null : match;
        },

        // Raw string
        getAllResponseHeaders: function getAllResponseHeaders() {
          return state === 2 ? responseHeadersString : null;
        },

        // Caches the header
        setRequestHeader: function setRequestHeader(name, value) {
          var lname = name.toLowerCase();
          if (!state) {
            name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
            requestHeaders[name] = value;
          }
          return this;
        },

        // Overrides response content-type header
        overrideMimeType: function overrideMimeType(type) {
          if (!state) {
            s.mimeType = type;
          }
          return this;
        },

        // Status-dependent callbacks
        statusCode: function statusCode(map) {
          var code;
          if (map) {
            if (state < 2) {
              for (code in map) {

                // Lazy-add the new callback in a way that preserves old ones
                _statusCode[code] = [_statusCode[code], map[code]];
              }
            } else {

              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status]);
            }
          }
          return this;
        },

        // Cancel the request
        abort: function abort(statusText) {
          var finalText = statusText || strAbort;
          if (transport) {
            transport.abort(finalText);
          }
          done(0, finalText);
          return this;
        }
      };

      // Attach deferreds
      deferred.promise(jqXHR).complete = completeDeferred.add;
      jqXHR.success = jqXHR.done;
      jqXHR.error = jqXHR.fail;

      // Remove hash character (#7531: and string promotion)
      // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available
      s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");

      // Alias method option to type as per ticket #12004
      s.type = options.method || options.type || s.method || s.type;

      // Extract dataTypes list
      s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];

      // A cross-domain request is in order when we have a protocol:host:port mismatch
      if (s.crossDomain == null) {
        parts = rurl.exec(s.url.toLowerCase());
        s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
      }

      // Convert data if not already a string
      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      }

      // Apply prefilters
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

      // If request was aborted inside a prefilter, stop there
      if (state === 2) {
        return jqXHR;
      }

      // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
      fireGlobals = jQuery.event && s.global;

      // Watch for a new set of requests
      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      }

      // Uppercase the type
      s.type = s.type.toUpperCase();

      // Determine if request has content
      s.hasContent = !rnoContent.test(s.type);

      // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      cacheURL = s.url;

      // More options handling for requests with no content
      if (!s.hasContent) {

        // If data is available, append data to url
        if (s.data) {
          cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;

          // #9682: remove data so that it's not used in an eventual retry
          delete s.data;
        }

        // Add anti-cache in url if needed
        if (s.cache === false) {
          s.url = rts.test(cacheURL) ?

          // If there is already a '_' parameter, set its value
          cacheURL.replace(rts, "$1_=" + nonce++) :

          // Otherwise add one to the end
          cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
        }
      }

      // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      }

      // Set the correct header, if data is being sent
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      }

      // Set the Accepts header for the server, depending on the dataType
      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

      // Check for headers option
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }

      // Allow custom headers/mimetypes and early abort
      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {

        // Abort if not done already and return
        return jqXHR.abort();
      }

      // aborting is no longer a cancellation
      strAbort = "abort";

      // Install callbacks on deferreds
      for (i in { success: 1, error: 1, complete: 1 }) {
        jqXHR[i](s[i]);
      }

      // Get transport
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

      // If no transport, we auto-abort
      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1;

        // Send global event
        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        }

        // If request was aborted inside ajaxSend, stop there
        if (state === 2) {
          return jqXHR;
        }

        // Timeout
        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }

        try {
          state = 1;
          transport.send(requestHeaders, done);
        } catch (e) {

          // Propagate exception as error if not done
          if (state < 2) {
            done(-1, e);

            // Simply rethrow otherwise
          } else {
            throw e;
          }
        }
      }

      // Callback for when everything is done
      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText;

        // Called once
        if (state === 2) {
          return;
        }

        // State is "done" now
        state = 2;

        // Clear timeout if it exists
        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        }

        // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)
        transport = undefined;

        // Cache response headers
        responseHeadersString = headers || "";

        // Set readyState
        jqXHR.readyState = status > 0 ? 4 : 0;

        // Determine if successful
        isSuccess = status >= 200 && status < 300 || status === 304;

        // Get response data
        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        }

        // Convert no matter what (that way responseXXX fields are always set)
        response = ajaxConvert(s, response, jqXHR, isSuccess);

        // If successful, handle type chaining
        if (isSuccess) {

          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");
            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }
            modified = jqXHR.getResponseHeader("etag");
            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          }

          // if no content
          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent";

            // if not modified
          } else if (status === 304) {
            statusText = "notmodified";

            // If we have data, let's convert it
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {

          // We extract error from statusText
          // then normalize statusText and status for non-aborts
          error = statusText;
          if (status || !statusText) {
            statusText = "error";
            if (status < 0) {
              status = 0;
            }
          }
        }

        // Set data for the fake xhr object
        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + "";

        // Success/Error
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        }

        // Status-dependent callbacks
        jqXHR.statusCode(_statusCode);
        _statusCode = undefined;

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        }

        // Complete
        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

          // Handle the global AJAX counter
          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },

    getJSON: function getJSON(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },

    getScript: function getScript(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });

  jQuery.each(["get", "post"], function (i, method) {
    jQuery[method] = function (url, data, callback, type) {

      // shift arguments if data argument was omitted
      if (jQuery.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      }

      // The url can be an options object (which then must have .url)
      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });

  jQuery._evalUrl = function (url) {
    return jQuery.ajax({
      url: url,

      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      "throws": true
    });
  };

  jQuery.fn.extend({
    wrapAll: function wrapAll(html) {
      if (jQuery.isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapAll(html.call(this, i));
        });
      }

      if (this[0]) {

        // The elements to wrap the target around
        var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = this;

          while (elem.firstChild && elem.firstChild.nodeType === 1) {
            elem = elem.firstChild;
          }

          return elem;
        }).append(this);
      }

      return this;
    },

    wrapInner: function wrapInner(html) {
      if (jQuery.isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = jQuery(this),
            contents = self.contents();

        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },

    wrap: function wrap(html) {
      var isFunction = jQuery.isFunction(html);

      return this.each(function (i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
      });
    },

    unwrap: function unwrap() {
      return this.parent().each(function () {
        if (!jQuery.nodeName(this, "body")) {
          jQuery(this).replaceWith(this.childNodes);
        }
      }).end();
    }
  });

  function getDisplay(elem) {
    return elem.style && elem.style.display || jQuery.css(elem, "display");
  }

  function filterHidden(elem) {
    while (elem && elem.nodeType === 1) {
      if (getDisplay(elem) === "none" || elem.type === "hidden") {
        return true;
      }
      elem = elem.parentNode;
    }
    return false;
  }

  jQuery.expr.filters.hidden = function (elem) {

    // Support: Opera <= 12.12
    // Opera reports offsetWidths and offsetHeights less than zero on some elements
    return support.reliableHiddenOffsets() ? elem.offsetWidth <= 0 && elem.offsetHeight <= 0 && !elem.getClientRects().length : filterHidden(elem);
  };

  jQuery.expr.filters.visible = function (elem) {
    return !jQuery.expr.filters.hidden(elem);
  };

  var r20 = /%20/g,
      rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (jQuery.isArray(obj)) {

      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {

          // Treat each array item as a scalar.
          add(prefix, v);
        } else {

          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && jQuery.type(obj) === "object") {

      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {

      // Serialize scalar item.
      add(prefix, obj);
    }
  }

  // Serialize an array of form elements or a set of
  // key/values into a query string
  jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function add(key, value) {

      // If value is a function, invoke it and return its value
      value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
    };

    // Set traditional to true for jQuery <= 1.3.2 behavior.
    if (traditional === undefined) {
      traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
    }

    // If an array was passed in, assume that it is an array of form elements.
    if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {

      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {

      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    }

    // Return the resulting serialization
    return s.join("&").replace(r20, "+");
  };

  jQuery.fn.extend({
    serialize: function serialize() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {

        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type;

        // Use .is(":disabled") so that fieldset[disabled] works
        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (i, elem) {
        var val = jQuery(this).val();

        return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
          return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
        }) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
      }).get();
    }
  });

  // Create the request object
  // (This is still attached to ajaxSettings for backward compatibility)
  jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

  // Support: IE6-IE8
  function () {

    // XHR cannot access local files, always use ActiveX for that case
    if (this.isLocal) {
      return createActiveXHR();
    }

    // Support: IE 9-11
    // IE seems to error on cross-domain PATCH requests when ActiveX XHR
    // is used. In IE 9+ always use the native XHR.
    // Note: this condition won't catch Edge as it doesn't define
    // document.documentMode but it also doesn't support ActiveX so it won't
    // reach this code.
    if (document.documentMode > 8) {
      return createStandardXHR();
    }

    // Support: IE<9
    // oldIE XHR does not support non-RFC2616 methods (#13240)
    // See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
    // and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
    // Although this check for six methods instead of eight
    // since IE also does not support "trace" and "connect"
    return (/^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR()
    );
  } :

  // For all other browsers, use the standard XMLHttpRequest object
  createStandardXHR;

  var xhrId = 0,
      xhrCallbacks = {},
      xhrSupported = jQuery.ajaxSettings.xhr();

  // Support: IE<10
  // Open requests must be manually aborted on unload (#5280)
  // See https://support.microsoft.com/kb/2856746 for more info
  if (window.attachEvent) {
    window.attachEvent("onunload", function () {
      for (var key in xhrCallbacks) {
        xhrCallbacks[key](undefined, true);
      }
    });
  }

  // Determine support properties
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  xhrSupported = support.ajax = !!xhrSupported;

  // Create transport if the browser can provide an xhr
  if (xhrSupported) {

    jQuery.ajaxTransport(function (options) {

      // Cross domain only allowed if supported through XMLHttpRequest
      if (!options.crossDomain || support.cors) {

        var _callback;

        return {
          send: function send(headers, complete) {
            var i,
                xhr = options.xhr(),
                id = ++xhrId;

            // Open the socket
            xhr.open(options.type, options.url, options.async, options.username, options.password);

            // Apply custom fields if provided
            if (options.xhrFields) {
              for (i in options.xhrFields) {
                xhr[i] = options.xhrFields[i];
              }
            }

            // Override mime type if needed
            if (options.mimeType && xhr.overrideMimeType) {
              xhr.overrideMimeType(options.mimeType);
            }

            // X-Requested-With header
            // For cross-domain requests, seeing as conditions for a preflight are
            // akin to a jigsaw puzzle, we simply never set it to be sure.
            // (it can always be set on a per-request basis or even using ajaxSetup)
            // For same-domain requests, won't change header if already provided.
            if (!options.crossDomain && !headers["X-Requested-With"]) {
              headers["X-Requested-With"] = "XMLHttpRequest";
            }

            // Set headers
            for (i in headers) {

              // Support: IE<9
              // IE's ActiveXObject throws a 'Type Mismatch' exception when setting
              // request header to a null-value.
              //
              // To keep consistent with other XHR implementations, cast the value
              // to string and ignore `undefined`.
              if (headers[i] !== undefined) {
                xhr.setRequestHeader(i, headers[i] + "");
              }
            }

            // Do send the request
            // This may raise an exception which is actually
            // handled in jQuery.ajax (so no try/catch here)
            xhr.send(options.hasContent && options.data || null);

            // Listener
            _callback = function callback(_, isAbort) {
              var status, statusText, responses;

              // Was never called and is aborted or complete
              if (_callback && (isAbort || xhr.readyState === 4)) {

                // Clean up
                delete xhrCallbacks[id];
                _callback = undefined;
                xhr.onreadystatechange = jQuery.noop;

                // Abort manually if needed
                if (isAbort) {
                  if (xhr.readyState !== 4) {
                    xhr.abort();
                  }
                } else {
                  responses = {};
                  status = xhr.status;

                  // Support: IE<10
                  // Accessing binary-data responseText throws an exception
                  // (#11426)
                  if (typeof xhr.responseText === "string") {
                    responses.text = xhr.responseText;
                  }

                  // Firefox throws an exception when accessing
                  // statusText for faulty cross-domain requests
                  try {
                    statusText = xhr.statusText;
                  } catch (e) {

                    // We normalize with Webkit giving an empty statusText
                    statusText = "";
                  }

                  // Filter status for non standard behaviors

                  // If the request is local and we have data: assume a success
                  // (success with no data won't get notified, that's the best we
                  // can do given current implementations)
                  if (!status && options.isLocal && !options.crossDomain) {
                    status = responses.text ? 200 : 404;

                    // IE - #1450: sometimes returns 1223 when it should be 204
                  } else if (status === 1223) {
                    status = 204;
                  }
                }
              }

              // Call complete if needed
              if (responses) {
                complete(status, statusText, responses, xhr.getAllResponseHeaders());
              }
            };

            // Do send the request
            // `xhr.send` may raise an exception, but it will be
            // handled in jQuery.ajax (so no try/catch here)
            if (!options.async) {

              // If we're in sync mode we fire the callback
              _callback();
            } else if (xhr.readyState === 4) {

              // (IE6 & IE7) if it's in cache and has been
              // retrieved directly we need to fire the callback
              window.setTimeout(_callback);
            } else {

              // Register the callback, but delay it in case `xhr.send` throws
              // Add to the list of active xhr callbacks
              xhr.onreadystatechange = xhrCallbacks[id] = _callback;
            }
          },

          abort: function abort() {
            if (_callback) {
              _callback(undefined, true);
            }
          }
        };
      }
    });
  }

  // Functions to create xhrs
  function createStandardXHR() {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  }

  function createActiveXHR() {
    try {
      return new window.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }

  // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
  jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  });

  // Install script dataType
  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  });

  // Handle cache's special case and global
  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }
    if (s.crossDomain) {
      s.type = "GET";
      s.global = false;
    }
  });

  // Bind script tag hack transport
  jQuery.ajaxTransport("script", function (s) {

    // This transport only deals with cross domain requests
    if (s.crossDomain) {

      var script,
          head = document.head || jQuery("head")[0] || document.documentElement;

      return {

        send: function send(_, callback) {

          script = document.createElement("script");

          script.async = true;

          if (s.scriptCharset) {
            script.charset = s.scriptCharset;
          }

          script.src = s.url;

          // Attach handlers for all browsers
          script.onload = script.onreadystatechange = function (_, isAbort) {

            if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {

              // Handle memory leak in IE
              script.onload = script.onreadystatechange = null;

              // Remove the script
              if (script.parentNode) {
                script.parentNode.removeChild(script);
              }

              // Dereference the script
              script = null;

              // Callback if not abort
              if (!isAbort) {
                callback(200, "success");
              }
            }
          };

          // Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
          // Use native DOM manipulation to avoid our domManip AJAX trickery
          head.insertBefore(script, head.firstChild);
        },

        abort: function abort() {
          if (script) {
            script.onload(undefined, true);
          }
        }
      };
    }
  });

  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/;

  // Default jsonp settings
  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
      this[callback] = true;
      return callback;
    }
  });

  // Detect, normalize options and install callbacks for jsonp requests
  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");

    // Handle iff the expected data type is "jsonp" or we have a parameter to set
    if (jsonProp || s.dataTypes[0] === "jsonp") {

      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

      // Insert callback into url or form data
      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      }

      // Use data converter to retrieve json after script execution
      s.converters["script json"] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }
        return responseContainer[0];
      };

      // force json dataType
      s.dataTypes[0] = "json";

      // Install callback
      overwritten = window[callbackName];
      window[callbackName] = function () {
        responseContainer = arguments;
      };

      // Clean-up function (fires after converters)
      jqXHR.always(function () {

        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName);

          // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten;
        }

        // Save back as free
        if (s[callbackName]) {

          // make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback;

          // save the callback name for future use
          oldCallbacks.push(callbackName);
        }

        // Call if it was a function and we have a response
        if (responseContainer && jQuery.isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = overwritten = undefined;
      });

      // Delegate to script
      return "script";
    }
  });

  // data: string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string
  jQuery.parseHTML = function (data, context, keepScripts) {
    if (!data || typeof data !== "string") {
      return null;
    }
    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }
    context = context || document;

    var parsed = rsingleTag.exec(data),
        scripts = !keepScripts && [];

    // Single tag
    if (parsed) {
      return [context.createElement(parsed[1])];
    }

    parsed = buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
  };

  // Keep a copy of the old load method
  var _load = jQuery.fn.load;

  /**
   * Load a url into a page
   */
  jQuery.fn.load = function (url, params, callback) {
    if (typeof url !== "string" && _load) {
      return _load.apply(this, arguments);
    }

    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");

    if (off > -1) {
      selector = jQuery.trim(url.slice(off, url.length));
      url = url.slice(0, off);
    }

    // If it's a function
    if (jQuery.isFunction(params)) {

      // We assume that it's the callback
      callback = params;
      params = undefined;

      // Otherwise, build a param string
    } else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
      type = "POST";
    }

    // If we have elements to modify, make the request
    if (self.length > 0) {
      jQuery.ajax({
        url: url,

        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function (responseText) {

        // Save response for use in complete callback
        response = arguments;

        self.html(selector ?

        // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

        // Otherwise use the full result
        responseText);

        // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(self, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }

    return this;
  };

  // Attach a bunch of functions for handling common AJAX events
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });

  jQuery.expr.filters.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };

  /**
   * Gets a window from an element
   */
  function getWindow(elem) {
    return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
  }

  jQuery.offset = {
    setOffset: function setOffset(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {};

      // set position first, in-case top/left are set even on static elem
      if (position === "static") {
        elem.style.position = "relative";
      }

      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1;

      // need to be able to calculate position if either top or left
      // is auto and position is either absolute or fixed
      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }

      if (jQuery.isFunction(options)) {

        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }

      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }
      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  };

  jQuery.fn.extend({
    offset: function offset(options) {
      if (arguments.length) {
        return options === undefined ? this : this.each(function (i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }

      var docElem,
          win,
          box = { top: 0, left: 0 },
          elem = this[0],
          doc = elem && elem.ownerDocument;

      if (!doc) {
        return;
      }

      docElem = doc.documentElement;

      // Make sure it's not a disconnected DOM node
      if (!jQuery.contains(docElem, elem)) {
        return box;
      }

      // If we don't have gBCR, just use 0,0 rather than error
      // BlackBerry 5, iOS 3 (original iPhone)
      if (typeof elem.getBoundingClientRect !== "undefined") {
        box = elem.getBoundingClientRect();
      }
      win = getWindow(doc);
      return {
        top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
        left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
      };
    },

    position: function position() {
      if (!this[0]) {
        return;
      }

      var offsetParent,
          offset,
          parentOffset = { top: 0, left: 0 },
          elem = this[0];

      // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
      // because it is its only offset parent
      if (jQuery.css(elem, "position") === "fixed") {

        // we assume that getBoundingClientRect is available when computed position is fixed
        offset = elem.getBoundingClientRect();
      } else {

        // Get *real* offsetParent
        offsetParent = this.offsetParent();

        // Get correct offsets
        offset = this.offset();
        if (!jQuery.nodeName(offsetParent[0], "html")) {
          parentOffset = offsetParent.offset();
        }

        // Add offsetParent borders
        parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
        parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
      }

      // Subtract parent offsets and element margins
      // note: when an element has margin: auto the offsetLeft and marginLeft
      // are the same in Safari causing offset.left to incorrectly be 0
      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },

    offsetParent: function offsetParent() {
      return this.map(function () {
        var offsetParent = this.offsetParent;

        while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || documentElement;
      });
    }
  });

  // Create scrollLeft and scrollTop methods
  jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
    var top = /Y/.test(prop);

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        var win = getWindow(elem);

        if (val === undefined) {
          return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
        }

        if (win) {
          win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length, null);
    };
  });

  // Support: Safari<7-8+, Chrome<37-44+
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // getComputedStyle returns percent when specified for top/left/bottom/right
  // rather than make the css module depend on the offset module, we just check for it here
  jQuery.each(["top", "left"], function (i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop);

        // if curCSS returns percentage, fallback to offset
        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  });

  // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
  jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
    jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {

      // margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

        return access(this, function (elem, type, value) {
          var doc;

          if (jQuery.isWindow(elem)) {

            // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
            // isn't a whole lot we can do. See pull request at this URL for discussion:
            // https://github.com/jquery/jquery/pull/764
            return elem.document.documentElement["client" + name];
          }

          // Get document width or height
          if (elem.nodeType === 9) {
            doc = elem.documentElement;

            // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest
            // unfortunately, this causes bug #3838 in IE6/8 only,
            // but there is currently no good, small way to fix it.
            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }

          return value === undefined ?

          // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra) :

          // Set width or height on the element
          jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable, null);
      };
    });
  });

  jQuery.fn.extend({

    bind: function bind(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function unbind(types, fn) {
      return this.off(types, null, fn);
    },

    delegate: function delegate(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function undelegate(selector, types, fn) {

      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    }
  });

  // The number of elements contained in the matched element set
  jQuery.fn.size = function () {
    return this.length;
  };

  jQuery.fn.andSelf = jQuery.fn.addBack;

  // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.

  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return jQuery;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  var

  // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,


  // Map over the $ in case of overwrite
  _$ = window.$;

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  };

  // Expose jQuery and $ identifiers, even in
  // AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)
  if (!noGlobal) {
    window.jQuery = window.$ = jQuery;
  }

  return jQuery;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)(module)))

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2015
 * @version 1.3.3
 *
 * Date formatter utility library that allows formatting date/time variables or Date objects using PHP DateTime format.
 * @see http://php.net/manual/en/function.date.php
 *
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */

if (!window.jQuery) {
    var jQuery = __webpack_require__(18);
} else {
    var jQuery = window.jQuery;
}

var DateFormatter;
(function ($) {
    "use strict";

    var _compare, _lpad2, _extend2, defaultSettings, DAY, HOUR;
    DAY = 1000 * 60 * 60 * 24;
    HOUR = 3600;

    _compare = function _compare(str1, str2) {
        return typeof str1 === 'string' && typeof str2 === 'string' && str1.toLowerCase() === str2.toLowerCase();
    };
    _lpad2 = function _lpad(value, length, char) {
        var chr = char || '0',
            val = value.toString();
        return val.length < length ? _lpad2(chr + val, length) : val;
    };
    _extend2 = function _extend(out) {
        var i, obj;
        out = out || {};
        for (i = 1; i < arguments.length; i++) {
            obj = arguments[i];
            if (!obj) {
                continue;
            }
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (_typeof(obj[key]) === 'object') {
                        _extend2(out[key], obj[key]);
                    } else {
                        out[key] = obj[key];
                    }
                }
            }
        }
        return out;
    };
    defaultSettings = {
        dateSettings: {
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            meridiem: ['AM', 'PM'],
            ordinal: function ordinal(number) {
                var n = number % 10,
                    suffixes = { 1: 'st', 2: 'nd', 3: 'rd' };
                return Math.floor(number % 100 / 10) === 1 || !suffixes[n] ? 'th' : suffixes[n];
            }
        },
        separators: /[ \-+\/\.T:@]/g,
        validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
        intParts: /[djwNzmnyYhHgGis]/g,
        tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        tzClip: /[^-+\dA-Z]/g
    };

    DateFormatter = function DateFormatter(options) {
        var self = this,
            config = _extend2(defaultSettings, options);
        self.dateSettings = config.dateSettings;
        self.separators = config.separators;
        self.validParts = config.validParts;
        self.intParts = config.intParts;
        self.tzParts = config.tzParts;
        self.tzClip = config.tzClip;
    };

    DateFormatter.prototype = {
        constructor: DateFormatter,
        parseDate: function parseDate(vDate, vFormat) {
            var self = this,
                vFormatParts,
                vDateParts,
                i,
                vDateFlag = false,
                vTimeFlag = false,
                vDatePart,
                iDatePart,
                vSettings = self.dateSettings,
                vMonth,
                vMeriIndex,
                vMeriOffset,
                len,
                mer,
                out = { date: null, year: null, month: null, day: null, hour: 0, min: 0, sec: 0 };
            if (!vDate) {
                return undefined;
            }
            if (vDate instanceof Date) {
                return vDate;
            }
            if (typeof vDate === 'number') {
                return new Date(vDate);
            }
            if (vFormat === 'U') {
                i = parseInt(vDate);
                return i ? new Date(i * 1000) : vDate;
            }
            if (typeof vDate !== 'string') {
                return '';
            }
            vFormatParts = vFormat.match(self.validParts);
            if (!vFormatParts || vFormatParts.length === 0) {
                throw new Error("Invalid date format definition.");
            }
            vDateParts = vDate.replace(self.separators, '\0').split('\0');
            for (i = 0; i < vDateParts.length; i++) {
                vDatePart = vDateParts[i];
                iDatePart = parseInt(vDatePart);
                switch (vFormatParts[i]) {
                    case 'y':
                    case 'Y':
                        len = vDatePart.length;
                        if (len === 2) {
                            out.year = parseInt((iDatePart < 70 ? '20' : '19') + vDatePart);
                        } else if (len === 4) {
                            out.year = iDatePart;
                        }
                        vDateFlag = true;
                        break;
                    case 'm':
                    case 'n':
                    case 'M':
                    case 'F':
                        if (isNaN(vDatePart)) {
                            vMonth = vSettings.monthsShort.indexOf(vDatePart);
                            if (vMonth > -1) {
                                out.month = vMonth + 1;
                            }
                            vMonth = vSettings.months.indexOf(vDatePart);
                            if (vMonth > -1) {
                                out.month = vMonth + 1;
                            }
                        } else {
                            if (iDatePart >= 1 && iDatePart <= 12) {
                                out.month = iDatePart;
                            }
                        }
                        vDateFlag = true;
                        break;
                    case 'd':
                    case 'j':
                        if (iDatePart >= 1 && iDatePart <= 31) {
                            out.day = iDatePart;
                        }
                        vDateFlag = true;
                        break;
                    case 'g':
                    case 'h':
                        vMeriIndex = vFormatParts.indexOf('a') > -1 ? vFormatParts.indexOf('a') : vFormatParts.indexOf('A') > -1 ? vFormatParts.indexOf('A') : -1;
                        mer = vDateParts[vMeriIndex];
                        if (vMeriIndex > -1) {
                            vMeriOffset = _compare(mer, vSettings.meridiem[0]) ? 0 : _compare(mer, vSettings.meridiem[1]) ? 12 : -1;
                            if (iDatePart >= 1 && iDatePart <= 12 && vMeriOffset > -1) {
                                out.hour = iDatePart + vMeriOffset;
                            } else if (iDatePart >= 0 && iDatePart <= 23) {
                                out.hour = iDatePart;
                            }
                        } else if (iDatePart >= 0 && iDatePart <= 23) {
                            out.hour = iDatePart;
                        }
                        vTimeFlag = true;
                        break;
                    case 'G':
                    case 'H':
                        if (iDatePart >= 0 && iDatePart <= 23) {
                            out.hour = iDatePart;
                        }
                        vTimeFlag = true;
                        break;
                    case 'i':
                        if (iDatePart >= 0 && iDatePart <= 59) {
                            out.min = iDatePart;
                        }
                        vTimeFlag = true;
                        break;
                    case 's':
                        if (iDatePart >= 0 && iDatePart <= 59) {
                            out.sec = iDatePart;
                        }
                        vTimeFlag = true;
                        break;
                }
            }
            if (vDateFlag === true && out.year && out.month && out.day) {
                out.date = new Date(out.year, out.month - 1, out.day, out.hour, out.min, out.sec, 0);
            } else {
                if (vTimeFlag !== true) {
                    return false;
                }
                out.date = new Date(0, 0, 0, out.hour, out.min, out.sec, 0);
            }
            return out.date;
        },
        guessDate: function guessDate(vDateStr, vFormat) {
            if (typeof vDateStr !== 'string') {
                return vDateStr;
            }
            var self = this,
                vParts = vDateStr.replace(self.separators, '\0').split('\0'),
                vPattern = /^[djmn]/g,
                vFormatParts = vFormat.match(self.validParts),
                vDate = new Date(),
                vDigit = 0,
                vYear,
                i,
                iPart,
                iSec;

            if (!vPattern.test(vFormatParts[0])) {
                return vDateStr;
            }

            for (i = 0; i < vParts.length; i++) {
                vDigit = 2;
                iPart = vParts[i];
                iSec = parseInt(iPart.substr(0, 2));
                switch (i) {
                    case 0:
                        if (vFormatParts[0] === 'm' || vFormatParts[0] === 'n') {
                            vDate.setMonth(iSec - 1);
                        } else {
                            vDate.setDate(iSec);
                        }
                        break;
                    case 1:
                        if (vFormatParts[0] === 'm' || vFormatParts[0] === 'n') {
                            vDate.setDate(iSec);
                        } else {
                            vDate.setMonth(iSec - 1);
                        }
                        break;
                    case 2:
                        vYear = vDate.getFullYear();
                        if (iPart.length < 4) {
                            vDate.setFullYear(parseInt(vYear.toString().substr(0, 4 - iPart.length) + iPart));
                            vDigit = iPart.length;
                        } else {
                            vDate.setFullYear = parseInt(iPart.substr(0, 4));
                            vDigit = 4;
                        }
                        break;
                    case 3:
                        vDate.setHours(iSec);
                        break;
                    case 4:
                        vDate.setMinutes(iSec);
                        break;
                    case 5:
                        vDate.setSeconds(iSec);
                        break;
                }
                if (iPart.substr(vDigit).length > 0) {
                    vParts.splice(i + 1, 0, iPart.substr(vDigit));
                }
            }
            return vDate;
        },
        parseFormat: function parseFormat(vChar, vDate) {
            var self = this,
                vSettings = self.dateSettings,
                fmt,
                backspace = /\\?(.?)/gi,
                doFormat = function doFormat(t, s) {
                return fmt[t] ? fmt[t]() : s;
            };
            fmt = {
                /////////
                // DAY //
                /////////
                /**
                 * Day of month with leading 0: `01..31`
                 * @return {string}
                 */
                d: function d() {
                    return _lpad2(fmt.j(), 2);
                },
                /**
                 * Shorthand day name: `Mon...Sun`
                 * @return {string}
                 */
                D: function D() {
                    return vSettings.daysShort[fmt.w()];
                },
                /**
                 * Day of month: `1..31`
                 * @return {number}
                 */
                j: function j() {
                    return vDate.getDate();
                },
                /**
                 * Full day name: `Monday...Sunday`
                 * @return {number}
                 */
                l: function l() {
                    return vSettings.days[fmt.w()];
                },
                /**
                 * ISO-8601 day of week: `1[Mon]..7[Sun]`
                 * @return {number}
                 */
                N: function N() {
                    return fmt.w() || 7;
                },
                /**
                 * Day of week: `0[Sun]..6[Sat]`
                 * @return {number}
                 */
                w: function w() {
                    return vDate.getDay();
                },
                /**
                 * Day of year: `0..365`
                 * @return {number}
                 */
                z: function z() {
                    var a = new Date(fmt.Y(), fmt.n() - 1, fmt.j()),
                        b = new Date(fmt.Y(), 0, 1);
                    return Math.round((a - b) / DAY);
                },

                //////////
                // WEEK //
                //////////
                /**
                 * ISO-8601 week number
                 * @return {number}
                 */
                W: function W() {
                    var a = new Date(fmt.Y(), fmt.n() - 1, fmt.j() - fmt.N() + 3),
                        b = new Date(a.getFullYear(), 0, 4);
                    return _lpad2(1 + Math.round((a - b) / DAY / 7), 2);
                },

                ///////////
                // MONTH //
                ///////////
                /**
                 * Full month name: `January...December`
                 * @return {string}
                 */
                F: function F() {
                    return vSettings.months[vDate.getMonth()];
                },
                /**
                 * Month w/leading 0: `01..12`
                 * @return {string}
                 */
                m: function m() {
                    return _lpad2(fmt.n(), 2);
                },
                /**
                 * Shorthand month name; `Jan...Dec`
                 * @return {string}
                 */
                M: function M() {
                    return vSettings.monthsShort[vDate.getMonth()];
                },
                /**
                 * Month: `1...12`
                 * @return {number}
                 */
                n: function n() {
                    return vDate.getMonth() + 1;
                },
                /**
                 * Days in month: `28...31`
                 * @return {number}
                 */
                t: function t() {
                    return new Date(fmt.Y(), fmt.n(), 0).getDate();
                },

                //////////
                // YEAR //
                //////////
                /**
                 * Is leap year? `0 or 1`
                 * @return {number}
                 */
                L: function L() {
                    var Y = fmt.Y();
                    return Y % 4 === 0 && Y % 100 !== 0 || Y % 400 === 0 ? 1 : 0;
                },
                /**
                 * ISO-8601 year
                 * @return {number}
                 */
                o: function o() {
                    var n = fmt.n(),
                        W = fmt.W(),
                        Y = fmt.Y();
                    return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
                },
                /**
                 * Full year: `e.g. 1980...2010`
                 * @return {number}
                 */
                Y: function Y() {
                    return vDate.getFullYear();
                },
                /**
                 * Last two digits of year: `00...99`
                 * @return {string}
                 */
                y: function y() {
                    return fmt.Y().toString().slice(-2);
                },

                //////////
                // TIME //
                //////////
                /**
                 * Meridian lower: `am or pm`
                 * @return {string}
                 */
                a: function a() {
                    return fmt.A().toLowerCase();
                },
                /**
                 * Meridian upper: `AM or PM`
                 * @return {string}
                 */
                A: function A() {
                    var n = fmt.G() < 12 ? 0 : 1;
                    return vSettings.meridiem[n];
                },
                /**
                 * Swatch Internet time: `000..999`
                 * @return {string}
                 */
                B: function B() {
                    var H = vDate.getUTCHours() * HOUR,
                        i = vDate.getUTCMinutes() * 60,
                        s = vDate.getUTCSeconds();
                    return _lpad2(Math.floor((H + i + s + HOUR) / 86.4) % 1000, 3);
                },
                /**
                 * 12-Hours: `1..12`
                 * @return {number}
                 */
                g: function g() {
                    return fmt.G() % 12 || 12;
                },
                /**
                 * 24-Hours: `0..23`
                 * @return {number}
                 */
                G: function G() {
                    return vDate.getHours();
                },
                /**
                 * 12-Hours with leading 0: `01..12`
                 * @return {string}
                 */
                h: function h() {
                    return _lpad2(fmt.g(), 2);
                },
                /**
                 * 24-Hours w/leading 0: `00..23`
                 * @return {string}
                 */
                H: function H() {
                    return _lpad2(fmt.G(), 2);
                },
                /**
                 * Minutes w/leading 0: `00..59`
                 * @return {string}
                 */
                i: function i() {
                    return _lpad2(vDate.getMinutes(), 2);
                },
                /**
                 * Seconds w/leading 0: `00..59`
                 * @return {string}
                 */
                s: function s() {
                    return _lpad2(vDate.getSeconds(), 2);
                },
                /**
                 * Microseconds: `000000-999000`
                 * @return {string}
                 */
                u: function u() {
                    return _lpad2(vDate.getMilliseconds() * 1000, 6);
                },

                //////////////
                // TIMEZONE //
                //////////////
                /**
                 * Timezone identifier: `e.g. Atlantic/Azores, ...`
                 * @return {string}
                 */
                e: function e() {
                    var str = /\((.*)\)/.exec(String(vDate))[1];
                    return str || 'Coordinated Universal Time';
                },
                /**
                 * Timezone abbreviation: `e.g. EST, MDT, ...`
                 * @return {string}
                 */
                T: function T() {
                    var str = (String(vDate).match(self.tzParts) || [""]).pop().replace(self.tzClip, "");
                    return str || 'UTC';
                },
                /**
                 * DST observed? `0 or 1`
                 * @return {number}
                 */
                I: function I() {
                    var a = new Date(fmt.Y(), 0),
                        c = Date.UTC(fmt.Y(), 0),
                        b = new Date(fmt.Y(), 6),
                        d = Date.UTC(fmt.Y(), 6);
                    return a - c !== b - d ? 1 : 0;
                },
                /**
                 * Difference to GMT in hour format: `e.g. +0200`
                 * @return {string}
                 */
                O: function O() {
                    var tzo = vDate.getTimezoneOffset(),
                        a = Math.abs(tzo);
                    return (tzo > 0 ? '-' : '+') + _lpad2(Math.floor(a / 60) * 100 + a % 60, 4);
                },
                /**
                 * Difference to GMT with colon: `e.g. +02:00`
                 * @return {string}
                 */
                P: function P() {
                    var O = fmt.O();
                    return O.substr(0, 3) + ':' + O.substr(3, 2);
                },
                /**
                 * Timezone offset in seconds: `-43200...50400`
                 * @return {number}
                 */
                Z: function Z() {
                    return -vDate.getTimezoneOffset() * 60;
                },

                ////////////////////
                // FULL DATE TIME //
                ////////////////////
                /**
                 * ISO-8601 date
                 * @return {string}
                 */
                c: function c() {
                    return 'Y-m-d\\TH:i:sP'.replace(backspace, doFormat);
                },
                /**
                 * RFC 2822 date
                 * @return {string}
                 */
                r: function r() {
                    return 'D, d M Y H:i:s O'.replace(backspace, doFormat);
                },
                /**
                 * Seconds since UNIX epoch
                 * @return {number}
                 */
                U: function U() {
                    return vDate.getTime() / 1000 || 0;
                }
            };
            return doFormat(vChar, vChar);
        },
        formatDate: function formatDate(vDate, vFormat) {
            var self = this,
                i,
                n,
                len,
                str,
                vChar,
                vDateStr = '';
            if (typeof vDate === 'string') {
                vDate = self.parseDate(vDate, vFormat);
                if (vDate === false) {
                    return false;
                }
            }
            if (vDate instanceof Date) {
                len = vFormat.length;
                for (i = 0; i < len; i++) {
                    vChar = vFormat.charAt(i);
                    if (vChar === 'S') {
                        continue;
                    }
                    str = self.parseFormat(vChar, vDate);
                    if (i !== len - 1 && self.intParts.test(vChar) && vFormat.charAt(i + 1) === 'S') {
                        n = parseInt(str);
                        str += self.dateSettings.ordinal(n);
                    }
                    vDateStr += str;
                }
                return vDateStr;
            }
            return '';
        }
    };
})(); /**
      * @preserve jQuery DateTimePicker plugin v2.5.4
      * @homepage http://xdsoft.net/jqplugins/datetimepicker/
      * @author Chupurnov Valeriy (<chupurnov@gmail.com>)
      */
/*global DateFormatter, document,window,jQuery,setTimeout,clearTimeout,HighlightedDate,getCurrentValue*/
;(function (factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(18), __webpack_require__(111)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
})(function ($) {
    'use strict';

    var currentlyScrollingTimeDiv = false;

    var default_options = {
        i18n: {
            ar: { // Arabic
                months: ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
                dayOfWeekShort: ["ن", "ث", "ع", "خ", "ج", "س", "ح"],
                dayOfWeek: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"]
            },
            ro: { // Romanian
                months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
                dayOfWeekShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
                dayOfWeek: ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"]
            },
            id: { // Indonesian
                months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
                dayOfWeekShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
                dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
            },
            is: { // Icelandic
                months: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"],
                dayOfWeekShort: ["Sun", "Mán", "Þrið", "Mið", "Fim", "Fös", "Lau"],
                dayOfWeek: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"]
            },
            bg: { // Bulgarian
                months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
                dayOfWeekShort: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                dayOfWeek: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"]
            },
            fa: { // Persian/Farsi
                months: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
                dayOfWeekShort: ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
                dayOfWeek: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه", "یک‌شنبه"]
            },
            ru: { // Russian
                months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                dayOfWeekShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                dayOfWeek: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
            },
            uk: { // Ukrainian
                months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
                dayOfWeekShort: ["Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"],
                dayOfWeek: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]
            },
            en: { // English
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            el: { // Ελληνικά
                months: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
                dayOfWeekShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
                dayOfWeek: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]
            },
            de: { // German
                months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
                dayOfWeekShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
            },
            nl: { // Dutch
                months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                dayOfWeekShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
                dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
            },
            tr: { // Turkish
                months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
                dayOfWeekShort: ["Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"],
                dayOfWeek: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
            },
            fr: { //French
                months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                dayOfWeekShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
            },
            es: { // Spanish
                months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                dayOfWeekShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
                dayOfWeek: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
            },
            th: { // Thai
                months: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
                dayOfWeekShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
                dayOfWeek: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"]
            },
            pl: { // Polish
                months: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
                dayOfWeekShort: ["nd", "pn", "wt", "śr", "cz", "pt", "sb"],
                dayOfWeek: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
            },
            pt: { // Portuguese
                months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
                dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
            },
            ch: { // Simplified Chinese
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"]
            },
            se: { // Swedish
                months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]
            },
            kr: { // Korean
                months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"],
                dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
            },
            it: { // Italian
                months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
                dayOfWeek: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
            },
            da: { // Dansk
                months: ["January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December"],
                dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
                dayOfWeek: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
            },
            no: { // Norwegian
                months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
                dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
                dayOfWeek: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag']
            },
            ja: { // Japanese
                months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                dayOfWeekShort: ["日", "月", "火", "水", "木", "金", "土"],
                dayOfWeek: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"]
            },
            vi: { // Vietnamese
                months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
                dayOfWeekShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                dayOfWeek: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"]
            },
            sl: { // Slovenščina
                months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
                dayOfWeekShort: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
                dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"]
            },
            cs: { // Čeština
                months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
                dayOfWeekShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]
            },
            hu: { // Hungarian
                months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
                dayOfWeekShort: ["Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"],
                dayOfWeek: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"]
            },
            az: { //Azerbaijanian (Azeri)
                months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
                dayOfWeekShort: ["B", "Be", "Ça", "Ç", "Ca", "C", "Ş"],
                dayOfWeek: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"]
            },
            bs: { //Bosanski
                months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
                dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
                dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
            },
            ca: { //Català
                months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
                dayOfWeekShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
                dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
            },
            'en-GB': { //English (British)
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            et: { //"Eesti"
                months: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
                dayOfWeekShort: ["P", "E", "T", "K", "N", "R", "L"],
                dayOfWeek: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
            },
            eu: { //Euskara
                months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"],
                dayOfWeekShort: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."],
                dayOfWeek: ['Igandea', 'Astelehena', 'Asteartea', 'Asteazkena', 'Osteguna', 'Ostirala', 'Larunbata']
            },
            fi: { //Finnish (Suomi)
                months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
                dayOfWeekShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
                dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
            },
            gl: { //Galego
                months: ["Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"],
                dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"],
                dayOfWeek: ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"]
            },
            hr: { //Hrvatski
                months: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
                dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
                dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
            },
            ko: { //Korean (한국어)
                months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"],
                dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
            },
            lt: { //Lithuanian (lietuvių)
                months: ["Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"],
                dayOfWeekShort: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"],
                dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"]
            },
            lv: { //Latvian (Latviešu)
                months: ["Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
                dayOfWeekShort: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"],
                dayOfWeek: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
            },
            mk: { //Macedonian (Македонски)
                months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
                dayOfWeekShort: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
                dayOfWeek: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"]
            },
            mn: { //Mongolian (Монгол)
                months: ["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"],
                dayOfWeekShort: ["Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"],
                dayOfWeek: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"]
            },
            'pt-BR': { //Português(Brasil)
                months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
            },
            sk: { //Slovenčina
                months: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
                dayOfWeekShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
                dayOfWeek: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"]
            },
            sq: { //Albanian (Shqip)
                months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"],
                dayOfWeekShort: ["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Shtu"],
                dayOfWeek: ["E Diel", "E Hënë", "E Martē", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"]
            },
            'sr-YU': { //Serbian (Srpski)
                months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
                dayOfWeekShort: ["Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"],
                dayOfWeek: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"]
            },
            sr: { //Serbian Cyrillic (Српски)
                months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
                dayOfWeekShort: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"],
                dayOfWeek: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"]
            },
            sv: { //Svenska
                months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
                dayOfWeek: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"]
            },
            'zh-TW': { //Traditional Chinese (繁體中文)
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"],
                dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
            },
            zh: { //Simplified Chinese (简体中文)
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"],
                dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
            },
            he: { //Hebrew (עברית)
                months: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
                dayOfWeekShort: ['א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'],
                dayOfWeek: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון"]
            },
            hy: { // Armenian
                months: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"],
                dayOfWeekShort: ["Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"],
                dayOfWeek: ["Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ"]
            },
            kg: { // Kyrgyz
                months: ['Үчтүн айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш Оона', 'Аяк Оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы'],
                dayOfWeekShort: ["Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"],
                dayOfWeek: ["Жекшемб", "Дүйшөмб", "Шейшемб", "Шаршемб", "Бейшемби", "Жума", "Ишенб"]
            },
            rm: { // Romansh
                months: ["Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"],
                dayOfWeekShort: ["Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"],
                dayOfWeek: ["Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"]
            },
            ka: { // Georgian
                months: ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'],
                dayOfWeekShort: ["კვ", "ორშ", "სამშ", "ოთხ", "ხუთ", "პარ", "შაბ"],
                dayOfWeek: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"]
            }
        },
        value: '',
        rtl: false,

        format: 'Y/m/d H:i',
        formatTime: 'H:i',
        formatDate: 'Y/m/d',

        startDate: false, // new Date(), '1986/12/08', '-1970/01/05','-1970/01/05',
        step: 60,
        monthChangeSpinner: true,

        closeOnDateSelect: false,
        closeOnTimeSelect: true,
        closeOnWithoutClick: true,
        closeOnInputClick: true,

        timepicker: true,
        datepicker: true,
        weeks: false,

        defaultTime: false, // use formatTime format (ex. '10:00' for formatTime:	'H:i')
        defaultDate: false, // use formatDate format (ex new Date() or '1986/12/08' or '-1970/01/05' or '-1970/01/05')

        minDate: false,
        maxDate: false,
        minTime: false,
        maxTime: false,
        disabledMinTime: false,
        disabledMaxTime: false,

        allowTimes: [],
        opened: false,
        initTime: true,
        inline: false,
        theme: '',

        onSelectDate: function onSelectDate() {},
        onSelectTime: function onSelectTime() {},
        onChangeMonth: function onChangeMonth() {},
        onGetWeekOfYear: function onGetWeekOfYear() {},
        onChangeYear: function onChangeYear() {},
        onChangeDateTime: function onChangeDateTime() {},
        onShow: function onShow() {},
        onClose: function onClose() {},
        onGenerate: function onGenerate() {},

        withoutCopyright: true,
        inverseButton: false,
        hours12: false,
        minHours: 0,
        next: 'xdsoft_next',
        prev: 'xdsoft_prev',
        dayOfWeekStart: 0,
        parentID: 'body',
        timeHeightInTimePicker: 25,
        timepickerScrollbar: true,
        todayButton: true,
        prevButton: true,
        nextButton: true,
        defaultSelect: true,

        scrollMonth: true,
        scrollTime: true,
        scrollInput: true,

        lazyInit: false,
        mask: false,
        validateOnBlur: true,
        allowBlank: true,
        yearStart: 1950,
        yearEnd: 2050,
        monthStart: 0,
        monthEnd: 11,
        style: '',
        id: '',
        fixed: false,
        roundTime: 'round', // ceil, floor
        className: '',
        weekends: [],
        highlightedDates: [],
        highlightedPeriods: [],
        allowDates: [],
        allowDateRe: null,
        disabledDates: [],
        disabledWeekDays: [],
        yearOffset: 0,
        beforeShowDay: null,

        enterLikeTab: true,
        showApplyButton: false
    };

    var dateHelper = null,
        globalLocaleDefault = 'en',
        globalLocale = 'en';

    var dateFormatterOptionsDefault = {
        meridiem: ['AM', 'PM']
    };

    var initDateFormatter = function initDateFormatter() {
        var locale = default_options.i18n[globalLocale],
            opts = {
            days: locale.dayOfWeek,
            daysShort: locale.dayOfWeekShort,
            months: locale.months,
            monthsShort: $.map(locale.months, function (n) {
                return n.substring(0, 3);
            })
        };

        dateHelper = new DateFormatter({
            dateSettings: $.extend({}, dateFormatterOptionsDefault, opts)
        });
    };

    // for locale settings
    $.datetimepicker = {
        setLocale: function setLocale(locale) {
            var newLocale = default_options.i18n[locale] ? locale : globalLocaleDefault;
            if (globalLocale != newLocale) {
                globalLocale = newLocale;
                // reinit date formatter
                initDateFormatter();
            }
        },
        setDateFormatter: function setDateFormatter(dateFormatter) {
            dateHelper = dateFormatter;
        },
        RFC_2822: 'D, d M Y H:i:s O',
        ATOM: 'Y-m-d\TH:i:sP',
        ISO_8601: 'Y-m-d\TH:i:sO',
        RFC_822: 'D, d M y H:i:s O',
        RFC_850: 'l, d-M-y H:i:s T',
        RFC_1036: 'D, d M y H:i:s O',
        RFC_1123: 'D, d M Y H:i:s O',
        RSS: 'D, d M Y H:i:s O',
        W3C: 'Y-m-d\TH:i:sP'
    };

    $.datetimepicker.setLocale('ch');
    // first init date formatter
    initDateFormatter();

    // fix for ie8
    if (!window.getComputedStyle) {
        window.getComputedStyle = function (el, pseudo) {
            this.el = el;
            this.getPropertyValue = function (prop) {
                var re = /(\-([a-z]){1})/g;
                if (prop === 'float') {
                    prop = 'styleFloat';
                }
                if (re.test(prop)) {
                    prop = prop.replace(re, function (a, b, c) {
                        return c.toUpperCase();
                    });
                }
                return el.currentStyle[prop] || null;
            };
            return this;
        };
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (obj, start) {
            var i, j;
            for (i = start || 0, j = this.length; i < j; i += 1) {
                if (this[i] === obj) {
                    return i;
                }
            }
            return -1;
        };
    }
    Date.prototype.countDaysInMonth = function () {
        return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
    };
    $.fn.xdsoftScroller = function (percent) {
        return this.each(function () {
            var timeboxparent = $(this),
                pointerEventToXY = function pointerEventToXY(e) {
                var out = { x: 0, y: 0 },
                    touch;
                if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {
                    touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                    out.x = touch.clientX;
                    out.y = touch.clientY;
                } else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'mousemove' || e.type === 'mouseover' || e.type === 'mouseout' || e.type === 'mouseenter' || e.type === 'mouseleave') {
                    out.x = e.clientX;
                    out.y = e.clientY;
                }
                return out;
            },
                timebox,
                parentHeight,
                height,
                scrollbar,
                scroller,
                maximumOffset = 100,
                start = false,
                startY = 0,
                startTop = 0,
                h1 = 0,
                touchStart = false,
                startTopScroll = 0,
                calcOffset = function calcOffset() {};
            if (percent === 'hide') {
                timeboxparent.find('.xdsoft_scrollbar').hide();
                return;
            }
            if (!$(this).hasClass('xdsoft_scroller_box')) {
                timebox = timeboxparent.children().eq(0);
                parentHeight = timeboxparent[0].clientHeight;
                height = timebox[0].offsetHeight;
                scrollbar = $('<div class="xdsoft_scrollbar"></div>');
                scroller = $('<div class="xdsoft_scroller"></div>');
                scrollbar.append(scroller);

                timeboxparent.addClass('xdsoft_scroller_box').append(scrollbar);
                calcOffset = function calcOffset(event) {
                    var offset = pointerEventToXY(event).y - startY + startTopScroll;
                    if (offset < 0) {
                        offset = 0;
                    }
                    if (offset + scroller[0].offsetHeight > h1) {
                        offset = h1 - scroller[0].offsetHeight;
                    }
                    timeboxparent.trigger('scroll_element.xdsoft_scroller', [maximumOffset ? offset / maximumOffset : 0]);
                };

                scroller.on('touchstart.xdsoft_scroller mousedown.xdsoft_scroller', function (event) {
                    if (!parentHeight) {
                        timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
                    }

                    startY = pointerEventToXY(event).y;
                    startTopScroll = parseInt(scroller.css('margin-top'), 10);
                    h1 = scrollbar[0].offsetHeight;

                    if (event.type === 'mousedown' || event.type === 'touchstart') {
                        if (document) {
                            $(document.body).addClass('xdsoft_noselect');
                        }
                        $([document.body, window]).on('touchend mouseup.xdsoft_scroller', function arguments_callee() {
                            $([document.body, window]).off('touchend mouseup.xdsoft_scroller', arguments_callee).off('mousemove.xdsoft_scroller', calcOffset).removeClass('xdsoft_noselect');
                        });
                        $(document.body).on('mousemove.xdsoft_scroller', calcOffset);
                    } else {
                        touchStart = true;
                        event.stopPropagation();
                        event.preventDefault();
                    }
                }).on('touchmove', function (event) {
                    if (touchStart) {
                        event.preventDefault();
                        calcOffset(event);
                    }
                }).on('touchend touchcancel', function () {
                    touchStart = false;
                    startTopScroll = 0;
                });

                timeboxparent.on('scroll_element.xdsoft_scroller', function (event, percentage) {
                    if (!parentHeight) {
                        timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percentage, true]);
                    }
                    percentage = percentage > 1 ? 1 : percentage < 0 || isNaN(percentage) ? 0 : percentage;

                    scroller.css('margin-top', maximumOffset * percentage);

                    setTimeout(function () {
                        timebox.css('marginTop', -parseInt((timebox[0].offsetHeight - parentHeight) * percentage, 10));
                    }, 10);
                }).on('resize_scroll.xdsoft_scroller', function (event, percentage, noTriggerScroll) {
                    var percent, sh;
                    parentHeight = timeboxparent[0].clientHeight;
                    height = timebox[0].offsetHeight;
                    percent = parentHeight / height;
                    sh = percent * scrollbar[0].offsetHeight;
                    if (percent > 1) {
                        scroller.hide();
                    } else {
                        scroller.show();
                        scroller.css('height', parseInt(sh > 10 ? sh : 10, 10));
                        maximumOffset = scrollbar[0].offsetHeight - scroller[0].offsetHeight;
                        if (noTriggerScroll !== true) {
                            timeboxparent.trigger('scroll_element.xdsoft_scroller', [percentage || Math.abs(parseInt(timebox.css('marginTop'), 10)) / (height - parentHeight)]);
                        }
                    }
                });

                timeboxparent.on('mousewheel', function (event) {
                    var top = Math.abs(parseInt(timebox.css('marginTop'), 10));

                    top = top - event.deltaY * 20;
                    if (top < 0) {
                        top = 0;
                    }

                    timeboxparent.trigger('scroll_element.xdsoft_scroller', [top / (height - parentHeight)]);
                    event.stopPropagation();
                    return false;
                });

                timeboxparent.on('touchstart', function (event) {
                    start = pointerEventToXY(event);
                    startTop = Math.abs(parseInt(timebox.css('marginTop'), 10));
                });

                timeboxparent.on('touchmove', function (event) {
                    if (start) {
                        event.preventDefault();
                        var coord = pointerEventToXY(event);
                        timeboxparent.trigger('scroll_element.xdsoft_scroller', [(startTop - (coord.y - start.y)) / (height - parentHeight)]);
                    }
                });

                timeboxparent.on('touchend touchcancel', function () {
                    start = false;
                    startTop = 0;
                });
            }
            timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
        });
    };

    $.fn.datetimepicker = function (opt, opt2) {
        var result = this,
            KEY0 = 48,
            KEY9 = 57,
            _KEY0 = 96,
            _KEY9 = 105,
            CTRLKEY = 17,
            DEL = 46,
            ENTER = 13,
            ESC = 27,
            BACKSPACE = 8,
            ARROWLEFT = 37,
            ARROWUP = 38,
            ARROWRIGHT = 39,
            ARROWDOWN = 40,
            TAB = 9,
            F5 = 116,
            AKEY = 65,
            CKEY = 67,
            VKEY = 86,
            ZKEY = 90,
            YKEY = 89,
            ctrlDown = false,
            options = $.isPlainObject(opt) || !opt ? $.extend(true, {}, default_options, opt) : $.extend(true, {}, default_options),
            lazyInitTimer = 0,
            createDateTimePicker,
            destroyDateTimePicker,
            lazyInit = function lazyInit(input) {
            input.on('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', function initOnActionCallback() {
                if (input.is(':disabled') || input.data('xdsoft_datetimepicker')) {
                    return;
                }
                clearTimeout(lazyInitTimer);
                lazyInitTimer = setTimeout(function () {

                    if (!input.data('xdsoft_datetimepicker')) {
                        createDateTimePicker(input);
                    }
                    input.off('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', initOnActionCallback).trigger('open.xdsoft');
                }, 100);
            });
        };

        createDateTimePicker = function createDateTimePicker(input) {
            var datetimepicker = $('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
                xdsoft_copyright = $('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
                datepicker = $('<div class="xdsoft_datepicker active"></div>'),
                month_picker = $('<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button>' + '<div class="xdsoft_label xdsoft_month"><span></span><i></i></div>' + '<div class="xdsoft_label xdsoft_year"><span></span><i></i></div>' + '<button type="button" class="xdsoft_next"></button></div>'),
                calendar = $('<div class="xdsoft_calendar"></div>'),
                timepicker = $('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
                timeboxparent = timepicker.find('.xdsoft_time_box').eq(0),
                timebox = $('<div class="xdsoft_time_variant"></div>'),
                applyButton = $('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),
                monthselect = $('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
                yearselect = $('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
                triggerAfterOpen = false,
                XDSoft_datetime,
                xchangeTimer,
                timerclick,
                current_time_index,
                setPos,
                timer = 0,
                _xdsoft_datetime,
                forEachAncestorOf,
                throttle;

            if (options.id) {
                datetimepicker.attr('id', options.id);
            }
            if (options.style) {
                datetimepicker.attr('style', options.style);
            }
            if (options.weeks) {
                datetimepicker.addClass('xdsoft_showweeks');
            }
            if (options.rtl) {
                datetimepicker.addClass('xdsoft_rtl');
            }

            datetimepicker.addClass('xdsoft_' + options.theme);
            datetimepicker.addClass(options.className);

            month_picker.find('.xdsoft_month span').after(monthselect);
            month_picker.find('.xdsoft_year span').after(yearselect);

            month_picker.find('.xdsoft_month,.xdsoft_year').on('touchstart mousedown.xdsoft', function (event) {
                var select = $(this).find('.xdsoft_select').eq(0),
                    val = 0,
                    top = 0,
                    visible = select.is(':visible'),
                    items,
                    i;

                month_picker.find('.xdsoft_select').hide();
                if (_xdsoft_datetime.currentTime) {
                    val = _xdsoft_datetime.currentTime[$(this).hasClass('xdsoft_month') ? 'getMonth' : 'getFullYear']();
                }

                select[visible ? 'hide' : 'show']();
                for (items = select.find('div.xdsoft_option'), i = 0; i < items.length; i += 1) {
                    if (items.eq(i).data('value') === val) {
                        break;
                    } else {
                        top += items[0].offsetHeight;
                    }
                }

                select.xdsoftScroller(top / (select.children()[0].offsetHeight - select[0].clientHeight));
                event.stopPropagation();
                return false;
            });

            month_picker.find('.xdsoft_select').xdsoftScroller().on('touchstart mousedown.xdsoft', function (event) {
                event.stopPropagation();
                event.preventDefault();
            }).on('touchstart mousedown.xdsoft', '.xdsoft_option', function () {
                if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
                    _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                }

                var year = _xdsoft_datetime.currentTime.getFullYear();
                if (_xdsoft_datetime && _xdsoft_datetime.currentTime) {
                    _xdsoft_datetime.currentTime[$(this).parent().parent().hasClass('xdsoft_monthselect') ? 'setMonth' : 'setFullYear']($(this).data('value'));
                }

                $(this).parent().parent().hide();

                datetimepicker.trigger('xchange.xdsoft');
                if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
                    options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                }

                if (year !== _xdsoft_datetime.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
                    options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                }
            });

            datetimepicker.getValue = function () {
                return _xdsoft_datetime.getCurrentTime();
            };

            datetimepicker.setOptions = function (_options) {
                var highlightedDates = {};

                options = $.extend(true, {}, options, _options);

                if (_options.allowTimes && $.isArray(_options.allowTimes) && _options.allowTimes.length) {
                    options.allowTimes = $.extend(true, [], _options.allowTimes);
                }

                if (_options.weekends && $.isArray(_options.weekends) && _options.weekends.length) {
                    options.weekends = $.extend(true, [], _options.weekends);
                }

                if (_options.allowDates && $.isArray(_options.allowDates) && _options.allowDates.length) {
                    options.allowDates = $.extend(true, [], _options.allowDates);
                }

                if (_options.allowDateRe && Object.prototype.toString.call(_options.allowDateRe) === "[object String]") {
                    options.allowDateRe = new RegExp(_options.allowDateRe);
                }

                if (_options.highlightedDates && $.isArray(_options.highlightedDates) && _options.highlightedDates.length) {
                    $.each(_options.highlightedDates, function (index, value) {
                        var splitData = $.map(value.split(','), $.trim),
                            exDesc,
                            hDate = new HighlightedDate(dateHelper.parseDate(splitData[0], options.formatDate), splitData[1], splitData[2]),
                            // date, desc, style
                        keyDate = dateHelper.formatDate(hDate.date, options.formatDate);
                        if (highlightedDates[keyDate] !== undefined) {
                            exDesc = highlightedDates[keyDate].desc;
                            if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
                                highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
                            }
                        } else {
                            highlightedDates[keyDate] = hDate;
                        }
                    });

                    options.highlightedDates = $.extend(true, [], highlightedDates);
                }

                if (_options.highlightedPeriods && $.isArray(_options.highlightedPeriods) && _options.highlightedPeriods.length) {
                    highlightedDates = $.extend(true, [], options.highlightedDates);
                    $.each(_options.highlightedPeriods, function (index, value) {
                        var dateTest, // start date
                        dateEnd, desc, hDate, keyDate, exDesc, style;
                        if ($.isArray(value)) {
                            dateTest = value[0];
                            dateEnd = value[1];
                            desc = value[2];
                            style = value[3];
                        } else {
                            var splitData = $.map(value.split(','), $.trim);
                            dateTest = dateHelper.parseDate(splitData[0], options.formatDate);
                            dateEnd = dateHelper.parseDate(splitData[1], options.formatDate);
                            desc = splitData[2];
                            style = splitData[3];
                        }

                        while (dateTest <= dateEnd) {
                            hDate = new HighlightedDate(dateTest, desc, style);
                            keyDate = dateHelper.formatDate(dateTest, options.formatDate);
                            dateTest.setDate(dateTest.getDate() + 1);
                            if (highlightedDates[keyDate] !== undefined) {
                                exDesc = highlightedDates[keyDate].desc;
                                if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
                                    highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
                                }
                            } else {
                                highlightedDates[keyDate] = hDate;
                            }
                        }
                    });

                    options.highlightedDates = $.extend(true, [], highlightedDates);
                }

                if (_options.disabledDates && $.isArray(_options.disabledDates) && _options.disabledDates.length) {
                    options.disabledDates = $.extend(true, [], _options.disabledDates);
                }

                if (_options.disabledWeekDays && $.isArray(_options.disabledWeekDays) && _options.disabledWeekDays.length) {
                    options.disabledWeekDays = $.extend(true, [], _options.disabledWeekDays);
                }

                if ((options.open || options.opened) && !options.inline) {
                    input.trigger('open.xdsoft');
                }

                if (options.inline) {
                    triggerAfterOpen = true;
                    datetimepicker.addClass('xdsoft_inline');
                    input.after(datetimepicker).hide();
                }

                if (options.inverseButton) {
                    options.next = 'xdsoft_prev';
                    options.prev = 'xdsoft_next';
                }

                if (options.datepicker) {
                    datepicker.addClass('active');
                } else {
                    datepicker.removeClass('active');
                }

                if (options.timepicker) {
                    timepicker.addClass('active');
                } else {
                    timepicker.removeClass('active');
                }

                if (options.value) {
                    _xdsoft_datetime.setCurrentTime(options.value);
                    if (input && input.val) {
                        input.val(_xdsoft_datetime.str);
                    }
                }

                if (isNaN(options.dayOfWeekStart)) {
                    options.dayOfWeekStart = 0;
                } else {
                    options.dayOfWeekStart = parseInt(options.dayOfWeekStart, 10) % 7;
                }

                if (!options.timepickerScrollbar) {
                    timeboxparent.xdsoftScroller('hide');
                }

                if (options.minDate && /^[\+\-](.*)$/.test(options.minDate)) {
                    options.minDate = dateHelper.formatDate(_xdsoft_datetime.strToDateTime(options.minDate), options.formatDate);
                }

                if (options.maxDate && /^[\+\-](.*)$/.test(options.maxDate)) {
                    options.maxDate = dateHelper.formatDate(_xdsoft_datetime.strToDateTime(options.maxDate), options.formatDate);
                }

                applyButton.toggle(options.showApplyButton);

                month_picker.find('.xdsoft_today_button').css('visibility', !options.todayButton ? 'hidden' : 'visible');

                month_picker.find('.' + options.prev).css('visibility', !options.prevButton ? 'hidden' : 'visible');

                month_picker.find('.' + options.next).css('visibility', !options.nextButton ? 'hidden' : 'visible');

                setMask(options);

                if (options.validateOnBlur) {
                    input.off('blur.xdsoft').on('blur.xdsoft', function () {
                        if (options.allowBlank && (!$.trim($(this).val()).length || typeof options.mask == "string" && $.trim($(this).val()) === options.mask.replace(/[0-9]/g, '_'))) {
                            $(this).val(null);
                            datetimepicker.data('xdsoft_datetime').empty();
                        } else {
                            var d = dateHelper.parseDate($(this).val(), options.format);
                            if (d) {
                                // parseDate() may skip some invalid parts like date or time, so make it clear for user: show parsed date/time
                                $(this).val(dateHelper.formatDate(d, options.format));
                            } else {
                                var splittedHours = +[$(this).val()[0], $(this).val()[1]].join(''),
                                    splittedMinutes = +[$(this).val()[2], $(this).val()[3]].join('');

                                // parse the numbers as 0312 => 03:12
                                if (!options.datepicker && options.timepicker && splittedHours >= 0 && splittedHours < 24 && splittedMinutes >= 0 && splittedMinutes < 60) {
                                    $(this).val([splittedHours, splittedMinutes].map(function (item) {
                                        return item > 9 ? item : '0' + item;
                                    }).join(':'));
                                } else {
                                    $(this).val(dateHelper.formatDate(_xdsoft_datetime.now(), options.format));
                                }
                            }
                            datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
                        }

                        datetimepicker.trigger('changedatetime.xdsoft');
                        datetimepicker.trigger('close.xdsoft');
                    });
                }
                options.dayOfWeekStartPrev = options.dayOfWeekStart === 0 ? 6 : options.dayOfWeekStart - 1;

                datetimepicker.trigger('xchange.xdsoft').trigger('afterOpen.xdsoft');
            };

            datetimepicker.data('options', options).on('touchstart mousedown.xdsoft', function (event) {
                event.stopPropagation();
                event.preventDefault();
                yearselect.hide();
                monthselect.hide();
                return false;
            });

            //scroll_element = timepicker.find('.xdsoft_time_box');
            timeboxparent.append(timebox);
            timeboxparent.xdsoftScroller();

            datetimepicker.on('afterOpen.xdsoft', function () {
                timeboxparent.xdsoftScroller();
            });

            datetimepicker.append(datepicker).append(timepicker);

            if (options.withoutCopyright !== true) {
                datetimepicker.append(xdsoft_copyright);
            }

            datepicker.append(month_picker).append(calendar).append(applyButton);

            $(options.parentID).append(datetimepicker);

            XDSoft_datetime = function XDSoft_datetime() {
                var _this = this;
                _this.now = function (norecursion) {
                    var d = new Date(),
                        date,
                        time;

                    if (!norecursion && options.defaultDate) {
                        date = _this.strToDateTime(options.defaultDate);
                        d.setFullYear(date.getFullYear());
                        d.setMonth(date.getMonth());
                        d.setDate(date.getDate());
                    }

                    if (options.yearOffset) {
                        d.setFullYear(d.getFullYear() + options.yearOffset);
                    }

                    if (!norecursion && options.defaultTime) {
                        time = _this.strtotime(options.defaultTime);
                        d.setHours(time.getHours());
                        d.setMinutes(time.getMinutes());
                    }
                    return d;
                };

                _this.isValidDate = function (d) {
                    if (Object.prototype.toString.call(d) !== "[object Date]") {
                        return false;
                    }
                    return !isNaN(d.getTime());
                };

                _this.setCurrentTime = function (dTime, requireValidDate) {
                    if (typeof dTime === 'string') {
                        _this.currentTime = _this.strToDateTime(dTime);
                    } else if (_this.isValidDate(dTime)) {
                        _this.currentTime = dTime;
                    } else if (!dTime && !requireValidDate && options.allowBlank) {
                        _this.currentTime = null;
                    } else {
                        _this.currentTime = _this.now();
                    }

                    datetimepicker.trigger('xchange.xdsoft');
                };

                _this.empty = function () {
                    _this.currentTime = null;
                };

                _this.getCurrentTime = function (dTime) {
                    return _this.currentTime;
                };

                _this.nextMonth = function () {

                    if (_this.currentTime === undefined || _this.currentTime === null) {
                        _this.currentTime = _this.now();
                    }

                    var month = _this.currentTime.getMonth() + 1,
                        year;
                    if (month === 12) {
                        _this.currentTime.setFullYear(_this.currentTime.getFullYear() + 1);
                        month = 0;
                    }

                    year = _this.currentTime.getFullYear();

                    _this.currentTime.setDate(Math.min(new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(), _this.currentTime.getDate()));
                    _this.currentTime.setMonth(month);

                    if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
                        options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }

                    if (year !== _this.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
                        options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }

                    datetimepicker.trigger('xchange.xdsoft');
                    return month;
                };

                _this.prevMonth = function () {

                    if (_this.currentTime === undefined || _this.currentTime === null) {
                        _this.currentTime = _this.now();
                    }

                    var month = _this.currentTime.getMonth() - 1;
                    if (month === -1) {
                        _this.currentTime.setFullYear(_this.currentTime.getFullYear() - 1);
                        month = 11;
                    }
                    _this.currentTime.setDate(Math.min(new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(), _this.currentTime.getDate()));
                    _this.currentTime.setMonth(month);
                    if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
                        options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }
                    datetimepicker.trigger('xchange.xdsoft');
                    return month;
                };

                _this.getWeekOfYear = function (datetime) {
                    if (options.onGetWeekOfYear && $.isFunction(options.onGetWeekOfYear)) {
                        var week = options.onGetWeekOfYear.call(datetimepicker, datetime);
                        if (typeof week !== 'undefined') {
                            return week;
                        }
                    }
                    var onejan = new Date(datetime.getFullYear(), 0, 1);
                    //First week of the year is th one with the first Thursday according to ISO8601
                    if (onejan.getDay() != 4) onejan.setMonth(0, 1 + (4 - onejan.getDay() + 7) % 7);
                    return Math.ceil(((datetime - onejan) / 86400000 + onejan.getDay() + 1) / 7);
                };

                _this.strToDateTime = function (sDateTime) {
                    var tmpDate = [],
                        timeOffset,
                        currentTime;

                    if (sDateTime && sDateTime instanceof Date && _this.isValidDate(sDateTime)) {
                        return sDateTime;
                    }

                    tmpDate = /^(\+|\-)(.*)$/.exec(sDateTime);
                    if (tmpDate) {
                        tmpDate[2] = dateHelper.parseDate(tmpDate[2], options.formatDate);
                    }
                    if (tmpDate && tmpDate[2]) {
                        timeOffset = tmpDate[2].getTime() - tmpDate[2].getTimezoneOffset() * 60000;
                        currentTime = new Date(_this.now(true).getTime() + parseInt(tmpDate[1] + '1', 10) * timeOffset);
                    } else {
                        currentTime = sDateTime ? dateHelper.parseDate(sDateTime, options.format) : _this.now();
                    }

                    if (!_this.isValidDate(currentTime)) {
                        currentTime = _this.now();
                    }

                    return currentTime;
                };

                _this.strToDate = function (sDate) {
                    if (sDate && sDate instanceof Date && _this.isValidDate(sDate)) {
                        return sDate;
                    }

                    var currentTime = sDate ? dateHelper.parseDate(sDate, options.formatDate) : _this.now(true);
                    if (!_this.isValidDate(currentTime)) {
                        currentTime = _this.now(true);
                    }
                    return currentTime;
                };

                _this.strtotime = function (sTime) {
                    if (sTime && sTime instanceof Date && _this.isValidDate(sTime)) {
                        return sTime;
                    }
                    var currentTime = sTime ? dateHelper.parseDate(sTime, options.formatTime) : _this.now(true);
                    if (!_this.isValidDate(currentTime)) {
                        currentTime = _this.now(true);
                    }
                    return currentTime;
                };

                _this.str = function () {
                    return dateHelper.formatDate(_this.currentTime, options.format);
                };
                _this.currentTime = this.now();
            };

            _xdsoft_datetime = new XDSoft_datetime();

            applyButton.on('touchend click', function (e) {
                //pathbrite
                e.preventDefault();
                datetimepicker.data('changed', true);
                _xdsoft_datetime.setCurrentTime(getCurrentValue());
                input.val(_xdsoft_datetime.str());
                datetimepicker.trigger('close.xdsoft');
            });
            month_picker.find('.xdsoft_today_button').on('touchend mousedown.xdsoft', function () {
                datetimepicker.data('changed', true);
                _xdsoft_datetime.setCurrentTime(0, true);
                datetimepicker.trigger('afterOpen.xdsoft');
            }).on('dblclick.xdsoft', function () {
                var currentDate = _xdsoft_datetime.getCurrentTime(),
                    minDate,
                    maxDate;
                currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
                minDate = _xdsoft_datetime.strToDate(options.minDate);
                minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
                if (currentDate < minDate) {
                    return;
                }
                maxDate = _xdsoft_datetime.strToDate(options.maxDate);
                maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
                if (currentDate > maxDate) {
                    return;
                }
                input.val(_xdsoft_datetime.str());
                input.trigger('change');
                datetimepicker.trigger('close.xdsoft');
            });
            month_picker.find('.xdsoft_prev,.xdsoft_next').on('touchend mousedown.xdsoft', function () {
                var $this = $(this),
                    timer = 0,
                    stop = false;

                (function arguments_callee1(v) {
                    if ($this.hasClass(options.next)) {
                        _xdsoft_datetime.nextMonth();
                    } else if ($this.hasClass(options.prev)) {
                        _xdsoft_datetime.prevMonth();
                    }
                    if (options.monthChangeSpinner) {
                        if (!stop) {
                            timer = setTimeout(arguments_callee1, v || 100);
                        }
                    }
                })(500);

                $([document.body, window]).on('touchend mouseup.xdsoft', function arguments_callee2() {
                    clearTimeout(timer);
                    stop = true;
                    $([document.body, window]).off('touchend mouseup.xdsoft', arguments_callee2);
                });
            });

            timepicker.find('.xdsoft_prev,.xdsoft_next').on('touchend mousedown.xdsoft', function () {
                var $this = $(this),
                    timer = 0,
                    stop = false,
                    period = 110;
                (function arguments_callee4(v) {
                    var pheight = timeboxparent[0].clientHeight,
                        height = timebox[0].offsetHeight,
                        top = Math.abs(parseInt(timebox.css('marginTop'), 10));
                    if ($this.hasClass(options.next) && height - pheight - options.timeHeightInTimePicker >= top) {
                        timebox.css('marginTop', '-' + (top + options.timeHeightInTimePicker) + 'px');
                    } else if ($this.hasClass(options.prev) && top - options.timeHeightInTimePicker >= 0) {
                        timebox.css('marginTop', '-' + (top - options.timeHeightInTimePicker) + 'px');
                    }
                    /**
                     * Fixed bug:
                     * When using css3 transition, it will cause a bug that you cannot scroll the timepicker list.
                     * The reason is that the transition-duration time, if you set it to 0, all things fine, otherwise, this
                     * would cause a bug when you use jquery.css method.
                     * Let's say: * { transition: all .5s ease; }
                     * jquery timebox.css('marginTop') will return the original value which is before you clicking the next/prev button,
                     * meanwhile the timebox[0].style.marginTop will return the right value which is after you clicking the
                     * next/prev button.
                     *
                     * What we should do:
                     * Replace timebox.css('marginTop') with timebox[0].style.marginTop.
                     */
                    timeboxparent.trigger('scroll_element.xdsoft_scroller', [Math.abs(parseInt(timebox[0].style.marginTop, 10) / (height - pheight))]);
                    period = period > 10 ? 10 : period - 10;
                    if (!stop) {
                        timer = setTimeout(arguments_callee4, v || period);
                    }
                })(500);
                $([document.body, window]).on('touchend mouseup.xdsoft', function arguments_callee5() {
                    clearTimeout(timer);
                    stop = true;
                    $([document.body, window]).off('touchend mouseup.xdsoft', arguments_callee5);
                });
            });

            xchangeTimer = 0;
            // base handler - generating a calendar and timepicker
            datetimepicker.on('xchange.xdsoft', function (event) {
                clearTimeout(xchangeTimer);
                xchangeTimer = setTimeout(function () {

                    if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
                        //In case blanks are allowed, delay construction until we have a valid date
                        if (options.allowBlank) return;

                        _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                    }

                    var table = '',
                        start = new Date(_xdsoft_datetime.currentTime.getFullYear(), _xdsoft_datetime.currentTime.getMonth(), 1, 12, 0, 0),
                        i = 0,
                        j,
                        today = _xdsoft_datetime.now(),
                        maxDate = false,
                        minDate = false,
                        hDate,
                        day,
                        d,
                        y,
                        m,
                        w,
                        classes = [],
                        customDateSettings,
                        newRow = true,
                        time = '',
                        h = '',
                        line_time,
                        description;

                    while (start.getDay() !== options.dayOfWeekStart) {
                        start.setDate(start.getDate() - 1);
                    }

                    table += '<table><thead><tr>';

                    if (options.weeks) {
                        table += '<th></th>';
                    }

                    for (j = 0; j < 7; j += 1) {
                        table += '<th>' + options.i18n[globalLocale].dayOfWeekShort[(j + options.dayOfWeekStart) % 7] + '</th>';
                    }

                    table += '</tr></thead>';
                    table += '<tbody>';

                    if (options.maxDate !== false) {
                        maxDate = _xdsoft_datetime.strToDate(options.maxDate);
                        maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate(), 23, 59, 59, 999);
                    }

                    if (options.minDate !== false) {
                        minDate = _xdsoft_datetime.strToDate(options.minDate);
                        minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
                    }

                    while (i < _xdsoft_datetime.currentTime.countDaysInMonth() || start.getDay() !== options.dayOfWeekStart || _xdsoft_datetime.currentTime.getMonth() === start.getMonth()) {
                        classes = [];
                        i += 1;

                        day = start.getDay();
                        d = start.getDate();
                        y = start.getFullYear();
                        m = start.getMonth();
                        w = _xdsoft_datetime.getWeekOfYear(start);
                        description = '';

                        classes.push('xdsoft_date');

                        if (options.beforeShowDay && $.isFunction(options.beforeShowDay.call)) {
                            customDateSettings = options.beforeShowDay.call(datetimepicker, start);
                        } else {
                            customDateSettings = null;
                        }

                        if (options.allowDateRe && Object.prototype.toString.call(options.allowDateRe) === "[object RegExp]") {
                            if (!options.allowDateRe.test(dateHelper.formatDate(start, options.formatDate))) {
                                classes.push('xdsoft_disabled');
                            }
                        } else if (options.allowDates && options.allowDates.length > 0) {
                            if (options.allowDates.indexOf(dateHelper.formatDate(start, options.formatDate)) === -1) {
                                classes.push('xdsoft_disabled');
                            }
                        } else if (maxDate !== false && start > maxDate || minDate !== false && start < minDate || customDateSettings && customDateSettings[0] === false) {
                            classes.push('xdsoft_disabled');
                        } else if (options.disabledDates.indexOf(dateHelper.formatDate(start, options.formatDate)) !== -1) {
                            classes.push('xdsoft_disabled');
                        } else if (options.disabledWeekDays.indexOf(day) !== -1) {
                            classes.push('xdsoft_disabled');
                        } else if (input.is('[readonly]')) {
                            classes.push('xdsoft_disabled');
                        }

                        if (customDateSettings && customDateSettings[1] !== "") {
                            classes.push(customDateSettings[1]);
                        }

                        if (_xdsoft_datetime.currentTime.getMonth() !== m) {
                            classes.push('xdsoft_other_month');
                        }

                        if ((options.defaultSelect || datetimepicker.data('changed')) && dateHelper.formatDate(_xdsoft_datetime.currentTime, options.formatDate) === dateHelper.formatDate(start, options.formatDate)) {
                            classes.push('xdsoft_current');
                        }

                        if (dateHelper.formatDate(today, options.formatDate) === dateHelper.formatDate(start, options.formatDate)) {
                            classes.push('xdsoft_today');
                        }

                        if (start.getDay() === 0 || start.getDay() === 6 || options.weekends.indexOf(dateHelper.formatDate(start, options.formatDate)) !== -1) {
                            classes.push('xdsoft_weekend');
                        }

                        if (options.highlightedDates[dateHelper.formatDate(start, options.formatDate)] !== undefined) {
                            hDate = options.highlightedDates[dateHelper.formatDate(start, options.formatDate)];
                            classes.push(hDate.style === undefined ? 'xdsoft_highlighted_default' : hDate.style);
                            description = hDate.desc === undefined ? '' : hDate.desc;
                        }

                        if (options.beforeShowDay && $.isFunction(options.beforeShowDay)) {
                            classes.push(options.beforeShowDay(start));
                        }

                        if (newRow) {
                            table += '<tr>';
                            newRow = false;
                            if (options.weeks) {
                                table += '<th>' + w + '</th>';
                            }
                        }

                        table += '<td data-date="' + d + '" data-month="' + m + '" data-year="' + y + '"' + ' class="xdsoft_date xdsoft_day_of_week' + start.getDay() + ' ' + classes.join(' ') + '" title="' + description + '">' + '<div>' + d + '</div>' + '</td>';

                        if (start.getDay() === options.dayOfWeekStartPrev) {
                            table += '</tr>';
                            newRow = true;
                        }

                        start.setDate(d + 1);
                    }
                    table += '</tbody></table>';

                    calendar.html(table);

                    month_picker.find('.xdsoft_label span').eq(0).text(options.i18n[globalLocale].months[_xdsoft_datetime.currentTime.getMonth()]);
                    month_picker.find('.xdsoft_label span').eq(1).text(_xdsoft_datetime.currentTime.getFullYear());

                    // generate timebox
                    time = '';
                    h = '';
                    m = '';

                    line_time = function line_time(h, m) {
                        var now = _xdsoft_datetime.now(),
                            optionDateTime,
                            current_time,
                            isALlowTimesInit = options.allowTimes && $.isArray(options.allowTimes) && options.allowTimes.length;
                        now.setHours(h);
                        h = parseInt(now.getHours(), 10);
                        now.setMinutes(m);
                        m = parseInt(now.getMinutes(), 10);
                        optionDateTime = new Date(_xdsoft_datetime.currentTime);
                        optionDateTime.setHours(h);
                        optionDateTime.setMinutes(m);
                        classes = [];
                        if (options.minDateTime !== false && options.minDateTime > optionDateTime || options.maxTime !== false && _xdsoft_datetime.strtotime(options.maxTime).getTime() < now.getTime() || options.minTime !== false && _xdsoft_datetime.strtotime(options.minTime).getTime() > now.getTime()) {
                            classes.push('xdsoft_disabled');
                        } else if (options.minDateTime !== false && options.minDateTime > optionDateTime || options.disabledMinTime !== false && now.getTime() > _xdsoft_datetime.strtotime(options.disabledMinTime).getTime() && options.disabledMaxTime !== false && now.getTime() < _xdsoft_datetime.strtotime(options.disabledMaxTime).getTime()) {
                            classes.push('xdsoft_disabled');
                        } else if (input.is('[readonly]')) {
                            classes.push('xdsoft_disabled');
                        }

                        current_time = new Date(_xdsoft_datetime.currentTime);
                        current_time.setHours(parseInt(_xdsoft_datetime.currentTime.getHours(), 10));

                        if (!isALlowTimesInit) {
                            current_time.setMinutes(Math[options.roundTime](_xdsoft_datetime.currentTime.getMinutes() / options.step) * options.step);
                        }

                        if ((options.initTime || options.defaultSelect || datetimepicker.data('changed')) && current_time.getHours() === parseInt(h, 10) && (!isALlowTimesInit && options.step > 59 || current_time.getMinutes() === parseInt(m, 10))) {
                            if (options.defaultSelect || datetimepicker.data('changed')) {
                                classes.push('xdsoft_current');
                            } else if (options.initTime) {
                                classes.push('xdsoft_init_time');
                            }
                        }
                        if (parseInt(today.getHours(), 10) === parseInt(h, 10) && parseInt(today.getMinutes(), 10) === parseInt(m, 10)) {
                            classes.push('xdsoft_today');
                        }
                        time += '<div class="xdsoft_time ' + classes.join(' ') + '" data-hour="' + h + '" data-minute="' + m + '">' + dateHelper.formatDate(now, options.formatTime) + '</div>';
                    };
                    if (!options.allowTimes || !$.isArray(options.allowTimes) || !options.allowTimes.length) {
                        for (i = 0, j = 0; i < (options.hours12 ? 12 : 24); i += 1) {
                            if (i >= options.minHours) {
                                for (j = 0; j < 60; j += options.step) {
                                    h = (i < 10 ? '0' : '') + i;
                                    m = (j < 10 ? '0' : '') + j;
                                    line_time(h, m);
                                }
                            }
                        }
                    } else {
                        for (i = 0; i < options.allowTimes.length; i += 1) {
                            h = _xdsoft_datetime.strtotime(options.allowTimes[i]).getHours();
                            m = _xdsoft_datetime.strtotime(options.allowTimes[i]).getMinutes();
                            line_time(h, m);
                        }
                    }

                    timebox.html(time);

                    opt = '';
                    i = 0;

                    for (i = parseInt(options.yearStart, 10) + options.yearOffset; i <= parseInt(options.yearEnd, 10) + options.yearOffset; i += 1) {
                        opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getFullYear() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + i + '</div>';
                    }
                    yearselect.children().eq(0).html(opt);

                    for (i = parseInt(options.monthStart, 10), opt = ''; i <= parseInt(options.monthEnd, 10); i += 1) {
                        opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getMonth() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + options.i18n[globalLocale].months[i] + '</div>';
                    }
                    monthselect.children().eq(0).html(opt);
                    $(datetimepicker).trigger('generate.xdsoft');
                }, 10);
                event.stopPropagation();
            }).on('afterOpen.xdsoft', function () {
                if (options.timepicker) {
                    var classType, pheight, height, top;
                    if (timebox.find('.xdsoft_current').length) {
                        classType = '.xdsoft_current';
                    } else if (timebox.find('.xdsoft_init_time').length) {
                        classType = '.xdsoft_init_time';
                    }
                    if (classType) {
                        pheight = timeboxparent[0].clientHeight;
                        height = timebox[0].offsetHeight;
                        top = timebox.find(classType).index() * options.timeHeightInTimePicker + 1;
                        if (height - pheight < top) {
                            top = height - pheight;
                        }
                        timeboxparent.trigger('scroll_element.xdsoft_scroller', [parseInt(top, 10) / (height - pheight)]);
                    } else {
                        timeboxparent.trigger('scroll_element.xdsoft_scroller', [0]);
                    }
                }
            });

            timerclick = 0;
            calendar.on('touchend click.xdsoft', 'td', function (xdevent) {
                xdevent.stopPropagation(); // Prevents closing of Pop-ups, Modals and Flyouts in Bootstrap
                timerclick += 1;
                var $this = $(this),
                    currentTime = _xdsoft_datetime.currentTime;

                if (currentTime === undefined || currentTime === null) {
                    _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                    currentTime = _xdsoft_datetime.currentTime;
                }

                if ($this.hasClass('xdsoft_disabled')) {
                    return false;
                }

                currentTime.setDate(1);
                currentTime.setFullYear($this.data('year'));
                currentTime.setMonth($this.data('month'));
                currentTime.setDate($this.data('date'));

                datetimepicker.trigger('select.xdsoft', [currentTime]);

                input.val(_xdsoft_datetime.str());

                if (options.onSelectDate && $.isFunction(options.onSelectDate)) {
                    options.onSelectDate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
                }

                datetimepicker.data('changed', true);
                datetimepicker.trigger('xchange.xdsoft');
                datetimepicker.trigger('changedatetime.xdsoft');
                if ((timerclick > 1 || options.closeOnDateSelect === true || options.closeOnDateSelect === false && !options.timepicker) && !options.inline) {
                    datetimepicker.trigger('close.xdsoft');
                }
                setTimeout(function () {
                    timerclick = 0;
                }, 200);
            });

            timebox.on('touchmove', 'div', function () {
                currentlyScrollingTimeDiv = true;
            }).on('touchend click.xdsoft', 'div', function (xdevent) {
                xdevent.stopPropagation();
                if (currentlyScrollingTimeDiv) {
                    currentlyScrollingTimeDiv = false;
                    return;
                }
                var $this = $(this),
                    currentTime = _xdsoft_datetime.currentTime;

                if (currentTime === undefined || currentTime === null) {
                    _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                    currentTime = _xdsoft_datetime.currentTime;
                }

                if ($this.hasClass('xdsoft_disabled')) {
                    return false;
                }
                currentTime.setHours($this.data('hour'));
                currentTime.setMinutes($this.data('minute'));
                datetimepicker.trigger('select.xdsoft', [currentTime]);

                datetimepicker.data('input').val(_xdsoft_datetime.str());

                if (options.onSelectTime && $.isFunction(options.onSelectTime)) {
                    options.onSelectTime.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
                }
                datetimepicker.data('changed', true);
                datetimepicker.trigger('xchange.xdsoft');
                datetimepicker.trigger('changedatetime.xdsoft');
                if (options.inline !== true && options.closeOnTimeSelect === true) {
                    datetimepicker.trigger('close.xdsoft');
                }
            });

            datepicker.on('mousewheel.xdsoft', function (event) {
                if (!options.scrollMonth) {
                    return true;
                }
                if (event.deltaY < 0) {
                    _xdsoft_datetime.nextMonth();
                } else {
                    _xdsoft_datetime.prevMonth();
                }
                return false;
            });

            input.on('mousewheel.xdsoft', function (event) {
                if (!options.scrollInput) {
                    return true;
                }
                if (!options.datepicker && options.timepicker) {
                    current_time_index = timebox.find('.xdsoft_current').length ? timebox.find('.xdsoft_current').eq(0).index() : 0;
                    if (current_time_index + event.deltaY >= 0 && current_time_index + event.deltaY < timebox.children().length) {
                        current_time_index += event.deltaY;
                    }
                    if (timebox.children().eq(current_time_index).length) {
                        timebox.children().eq(current_time_index).trigger('mousedown');
                    }
                    return false;
                }
                if (options.datepicker && !options.timepicker) {
                    datepicker.trigger(event, [event.deltaY, event.deltaX, event.deltaY]);
                    if (input.val) {
                        input.val(_xdsoft_datetime.str());
                    }
                    datetimepicker.trigger('changedatetime.xdsoft');
                    return false;
                }
            });

            datetimepicker.on('changedatetime.xdsoft', function (event) {
                if (options.onChangeDateTime && $.isFunction(options.onChangeDateTime)) {
                    var $input = datetimepicker.data('input');
                    options.onChangeDateTime.call(datetimepicker, _xdsoft_datetime.currentTime, $input, event);
                    delete options.value;
                    $input.trigger('change');
                }
            }).on('generate.xdsoft', function () {
                if (options.onGenerate && $.isFunction(options.onGenerate)) {
                    options.onGenerate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                }
                if (triggerAfterOpen) {
                    datetimepicker.trigger('afterOpen.xdsoft');
                    triggerAfterOpen = false;
                }
            }).on('click.xdsoft', function (xdevent) {
                xdevent.stopPropagation();
            });

            current_time_index = 0;

            /**
             * Runs the callback for each of the specified node's ancestors.
             *
             * Return FALSE from the callback to stop ascending.
             *
             * @param {DOMNode} node
             * @param {Function} callback
             * @returns {undefined}
             */
            forEachAncestorOf = function forEachAncestorOf(node, callback) {
                do {
                    node = node.parentNode;

                    if (callback(node) === false) {
                        break;
                    }
                } while (node.nodeName !== 'HTML');
            };

            /**
             * Sets the position of the picker.
             *
             * @returns {undefined}
             */
            setPos = function setPos() {
                var dateInputOffset, dateInputElem, verticalPosition, left, position, datetimepickerElem, dateInputHasFixedAncestor, $dateInput, windowWidth, verticalAnchorEdge, datetimepickerCss, windowHeight, windowScrollTop;

                $dateInput = datetimepicker.data('input');
                dateInputOffset = $dateInput.offset();
                dateInputElem = $dateInput[0];

                verticalAnchorEdge = 'top';
                verticalPosition = dateInputOffset.top + dateInputElem.offsetHeight - 1;
                left = dateInputOffset.left;
                position = "absolute";

                windowWidth = $(window).width();
                windowHeight = $(window).height();
                windowScrollTop = $(window).scrollTop();

                if (document.documentElement.clientWidth - dateInputOffset.left < datepicker.parent().outerWidth(true)) {
                    var diff = datepicker.parent().outerWidth(true) - dateInputElem.offsetWidth;
                    left = left - diff;
                }

                if ($dateInput.parent().css('direction') === 'rtl') {
                    left -= datetimepicker.outerWidth() - $dateInput.outerWidth();
                }

                if (options.fixed) {
                    verticalPosition -= windowScrollTop;
                    left -= $(window).scrollLeft();
                    position = "fixed";
                } else {
                    dateInputHasFixedAncestor = false;

                    forEachAncestorOf(dateInputElem, function (ancestorNode) {
                        if (window.getComputedStyle(ancestorNode).getPropertyValue('position') === 'fixed') {
                            dateInputHasFixedAncestor = true;
                            return false;
                        }
                    });

                    if (dateInputHasFixedAncestor) {
                        position = 'fixed';

                        //If the picker won't fit entirely within the viewport then display it above the date input.
                        if (verticalPosition + datetimepicker.outerHeight() > windowHeight + windowScrollTop) {
                            verticalAnchorEdge = 'bottom';
                            verticalPosition = windowHeight + windowScrollTop - dateInputOffset.top;
                        } else {
                            verticalPosition -= windowScrollTop;
                        }
                    } else {
                        if (verticalPosition + dateInputElem.offsetHeight > windowHeight + windowScrollTop) {
                            verticalPosition = dateInputOffset.top - dateInputElem.offsetHeight + 1;
                        }
                    }

                    if (verticalPosition < 0) {
                        verticalPosition = 0;
                    }

                    if (left + dateInputElem.offsetWidth > windowWidth) {
                        left = windowWidth - dateInputElem.offsetWidth;
                    }
                }

                datetimepickerElem = datetimepicker[0];

                forEachAncestorOf(datetimepickerElem, function (ancestorNode) {
                    var ancestorNodePosition;

                    ancestorNodePosition = window.getComputedStyle(ancestorNode).getPropertyValue('position');

                    if (ancestorNodePosition === 'relative' && windowWidth >= ancestorNode.offsetWidth) {
                        left = left - (windowWidth - ancestorNode.offsetWidth) / 2;
                        return false;
                    }
                });

                datetimepickerCss = {
                    position: position,
                    left: left,
                    top: '', //Initialize to prevent previous values interfering with new ones.
                    bottom: '' //Initialize to prevent previous values interfering with new ones.
                };

                datetimepickerCss[verticalAnchorEdge] = verticalPosition;

                datetimepicker.css(datetimepickerCss);
            };

            datetimepicker.on('open.xdsoft', function (event) {
                var onShow = true;
                if (options.onShow && $.isFunction(options.onShow)) {
                    onShow = options.onShow.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
                }
                if (onShow !== false) {
                    datetimepicker.show();
                    setPos();
                    $(window).off('resize.xdsoft', setPos).on('resize.xdsoft', setPos);

                    if (options.closeOnWithoutClick) {
                        $([document.body, window]).on('touchstart mousedown.xdsoft', function arguments_callee6() {
                            datetimepicker.trigger('close.xdsoft');
                            $([document.body, window]).off('touchstart mousedown.xdsoft', arguments_callee6);
                        });
                    }
                }
            }).on('close.xdsoft', function (event) {
                var onClose = true;
                month_picker.find('.xdsoft_month,.xdsoft_year').find('.xdsoft_select').hide();
                if (options.onClose && $.isFunction(options.onClose)) {
                    onClose = options.onClose.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
                }
                if (onClose !== false && !options.opened && !options.inline) {
                    datetimepicker.hide();
                }
                event.stopPropagation();
            }).on('toggle.xdsoft', function () {
                if (datetimepicker.is(':visible')) {
                    datetimepicker.trigger('close.xdsoft');
                } else {
                    datetimepicker.trigger('open.xdsoft');
                }
            }).data('input', input);

            timer = 0;

            datetimepicker.data('xdsoft_datetime', _xdsoft_datetime);
            datetimepicker.setOptions(options);

            function getCurrentValue() {
                var ct = false,
                    time;

                if (options.startDate) {
                    ct = _xdsoft_datetime.strToDate(options.startDate);
                } else {
                    ct = options.value || (input && input.val && input.val() ? input.val() : '');
                    if (ct) {
                        ct = _xdsoft_datetime.strToDateTime(ct);
                    } else if (options.defaultDate) {
                        ct = _xdsoft_datetime.strToDateTime(options.defaultDate);
                        if (options.defaultTime) {
                            time = _xdsoft_datetime.strtotime(options.defaultTime);
                            ct.setHours(time.getHours());
                            ct.setMinutes(time.getMinutes());
                        }
                    }
                }

                if (ct && _xdsoft_datetime.isValidDate(ct)) {
                    datetimepicker.data('changed', true);
                } else {
                    ct = '';
                }

                return ct || 0;
            }

            function setMask(options) {

                var isValidValue = function isValidValue(mask, value) {
                    var reg = mask.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, '\\$1').replace(/_/g, '{digit+}').replace(/([0-9]{1})/g, '{digit$1}').replace(/\{digit([0-9]{1})\}/g, '[0-$1_]{1}').replace(/\{digit[\+]\}/g, '[0-9_]{1}');
                    return new RegExp(reg).test(value);
                },
                    getCaretPos = function getCaretPos(input) {
                    try {
                        if (document.selection && document.selection.createRange) {
                            var range = document.selection.createRange();
                            return range.getBookmark().charCodeAt(2) - 2;
                        }
                        if (input.setSelectionRange) {
                            return input.selectionStart;
                        }
                    } catch (e) {
                        return 0;
                    }
                },
                    setCaretPos = function setCaretPos(node, pos) {
                    node = typeof node === "string" || node instanceof String ? document.getElementById(node) : node;
                    if (!node) {
                        return false;
                    }
                    if (node.createTextRange) {
                        var textRange = node.createTextRange();
                        textRange.collapse(true);
                        textRange.moveEnd('character', pos);
                        textRange.moveStart('character', pos);
                        textRange.select();
                        return true;
                    }
                    if (node.setSelectionRange) {
                        node.setSelectionRange(pos, pos);
                        return true;
                    }
                    return false;
                };
                if (options.mask) {
                    input.off('keydown.xdsoft');
                }
                if (options.mask === true) {
                    if (typeof moment != 'undefined') {
                        options.mask = options.format.replace(/Y{4}/g, '9999').replace(/Y{2}/g, '99').replace(/M{2}/g, '19').replace(/D{2}/g, '39').replace(/H{2}/g, '29').replace(/m{2}/g, '59').replace(/s{2}/g, '59');
                    } else {
                        options.mask = options.format.replace(/Y/g, '9999').replace(/F/g, '9999').replace(/m/g, '19').replace(/d/g, '39').replace(/H/g, '29').replace(/i/g, '59').replace(/s/g, '59');
                    }
                }

                if ($.type(options.mask) === 'string') {
                    if (!isValidValue(options.mask, input.val())) {
                        input.val(options.mask.replace(/[0-9]/g, '_'));
                        setCaretPos(input[0], 0);
                    }

                    input.on('keydown.xdsoft', function (event) {
                        var val = this.value,
                            key = event.which,
                            pos,
                            digit;

                        if (key >= KEY0 && key <= KEY9 || key >= _KEY0 && key <= _KEY9 || key === BACKSPACE || key === DEL) {
                            pos = getCaretPos(this);
                            digit = key !== BACKSPACE && key !== DEL ? String.fromCharCode(_KEY0 <= key && key <= _KEY9 ? key - KEY0 : key) : '_';

                            if ((key === BACKSPACE || key === DEL) && pos) {
                                pos -= 1;
                                digit = '_';
                            }

                            while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
                                pos += key === BACKSPACE || key === DEL ? -1 : 1;
                            }

                            val = val.substr(0, pos) + digit + val.substr(pos + 1);
                            if ($.trim(val) === '') {
                                val = options.mask.replace(/[0-9]/g, '_');
                            } else {
                                if (pos === options.mask.length) {
                                    event.preventDefault();
                                    return false;
                                }
                            }

                            pos += key === BACKSPACE || key === DEL ? 0 : 1;
                            while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
                                pos += key === BACKSPACE || key === DEL ? -1 : 1;
                            }

                            if (isValidValue(options.mask, val)) {
                                this.value = val;
                                setCaretPos(this, pos);
                            } else if ($.trim(val) === '') {
                                this.value = options.mask.replace(/[0-9]/g, '_');
                            } else {
                                input.trigger('error_input.xdsoft');
                            }
                        } else {
                            if ([AKEY, CKEY, VKEY, ZKEY, YKEY].indexOf(key) !== -1 && ctrlDown || [ESC, ARROWUP, ARROWDOWN, ARROWLEFT, ARROWRIGHT, F5, CTRLKEY, TAB, ENTER].indexOf(key) !== -1) {
                                return true;
                            }
                        }

                        event.preventDefault();
                        return false;
                    });
                }
            }

            _xdsoft_datetime.setCurrentTime(getCurrentValue());

            input.data('xdsoft_datetimepicker', datetimepicker).on('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', function () {
                if (input.is(':disabled') || input.data('xdsoft_datetimepicker').is(':visible') && options.closeOnInputClick) {
                    return;
                }
                clearTimeout(timer);
                timer = setTimeout(function () {
                    if (input.is(':disabled')) {
                        return;
                    }

                    triggerAfterOpen = true;
                    _xdsoft_datetime.setCurrentTime(getCurrentValue(), true);
                    if (options.mask) {
                        setMask(options);
                    }
                    datetimepicker.trigger('open.xdsoft');
                }, 100);
            }).on('keydown.xdsoft', function (event) {
                var elementSelector,
                    key = event.which;
                if ([ENTER].indexOf(key) !== -1 && options.enterLikeTab) {
                    elementSelector = $("input:visible,textarea:visible,button:visible,a:visible");
                    datetimepicker.trigger('close.xdsoft');
                    elementSelector.eq(elementSelector.index(this) + 1).focus();
                    return false;
                }
                if ([TAB].indexOf(key) !== -1) {
                    datetimepicker.trigger('close.xdsoft');
                    return true;
                }
            }).on('blur.xdsoft', function () {
                datetimepicker.trigger('close.xdsoft');
            });
        };
        destroyDateTimePicker = function destroyDateTimePicker(input) {
            var datetimepicker = input.data('xdsoft_datetimepicker');
            if (datetimepicker) {
                datetimepicker.data('xdsoft_datetime', null);
                datetimepicker.remove();
                input.data('xdsoft_datetimepicker', null).off('.xdsoft');
                $(window).off('resize.xdsoft');
                $([window, document.body]).off('mousedown.xdsoft touchstart');
                if (input.unmousewheel) {
                    input.unmousewheel();
                }
            }
        };
        $(document).off('keydown.xdsoftctrl keyup.xdsoftctrl').on('keydown.xdsoftctrl', function (e) {
            if (e.keyCode === CTRLKEY) {
                ctrlDown = true;
            }
        }).on('keyup.xdsoftctrl', function (e) {
            if (e.keyCode === CTRLKEY) {
                ctrlDown = false;
            }
        });

        this.each(function () {
            var datetimepicker = $(this).data('xdsoft_datetimepicker'),
                $input;
            if (datetimepicker) {
                if ($.type(opt) === 'string') {
                    switch (opt) {
                        case 'show':
                            $(this).select().focus();
                            datetimepicker.trigger('open.xdsoft');
                            break;
                        case 'hide':
                            datetimepicker.trigger('close.xdsoft');
                            break;
                        case 'toggle':
                            datetimepicker.trigger('toggle.xdsoft');
                            break;
                        case 'destroy':
                            destroyDateTimePicker($(this));
                            break;
                        case 'reset':
                            this.value = this.defaultValue;
                            if (!this.value || !datetimepicker.data('xdsoft_datetime').isValidDate(dateHelper.parseDate(this.value, options.format))) {
                                datetimepicker.data('changed', false);
                            }
                            datetimepicker.data('xdsoft_datetime').setCurrentTime(this.value);
                            break;
                        case 'validate':
                            $input = datetimepicker.data('input');
                            $input.trigger('blur.xdsoft');
                            break;
                        default:
                            if (datetimepicker[opt] && $.isFunction(datetimepicker[opt])) {
                                result = datetimepicker[opt](opt2);
                            }
                    }
                } else {
                    datetimepicker.setOptions(opt);
                }
                return 0;
            }
            if ($.type(opt) !== 'string') {
                if (!options.lazyInit || options.open || options.inline) {
                    createDateTimePicker($(this));
                } else {
                    lazyInit($(this));
                }
            }
        });

        return result;
    };

    $.fn.datetimepicker.defaults = default_options;

    function HighlightedDate(date, desc, style) {
        "use strict";

        this.date = date;
        this.desc = desc;
        this.style = style;
    }
});
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(18)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
})(function ($) {

    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice = Array.prototype.slice,
        nullLowestDeltaTimeout,
        lowestDelta;

    if ($.event.fixHooks) {
        for (var i = toFix.length; i;) {
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function setup() {
            if (this.addEventListener) {
                for (var i = toBind.length; i;) {
                    this.addEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function teardown() {
            if (this.removeEventListener) {
                for (var i = toBind.length; i;) {
                    this.removeEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function getLineHeight(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function getPageHeight(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function mousewheel(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function unmousewheel(fn) {
            return this.unbind('mousewheel', fn);
        }
    });

    function handler(event) {
        var orgEvent = event || window.event,
            args = slice.call(arguments, 1),
            delta = 0,
            deltaX = 0,
            deltaY = 0,
            absDelta = 0,
            offsetX = 0,
            offsetY = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ('detail' in orgEvent) {
            deltaY = orgEvent.detail * -1;
        }
        if ('wheelDelta' in orgEvent) {
            deltaY = orgEvent.wheelDelta;
        }
        if ('wheelDeltaY' in orgEvent) {
            deltaY = orgEvent.wheelDeltaY;
        }
        if ('wheelDeltaX' in orgEvent) {
            deltaX = orgEvent.wheelDeltaX * -1;
        }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ('deltaY' in orgEvent) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY;
        }
        if ('deltaX' in orgEvent) {
            deltaX = orgEvent.deltaX;
            if (deltaY === 0) {
                delta = deltaX * -1;
            }
        }

        // No change actually happened, no reason to go any further
        if (deltaY === 0 && deltaX === 0) {
            return;
        }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if (orgEvent.deltaMode === 1) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if (orgEvent.deltaMode === 2) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

        if (!lowestDelta || absDelta < lowestDelta) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
            // Divide all the things by 40!
            delta /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / lowestDelta);
        deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / lowestDelta);
        deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if (special.settings.normalizeOffset && this.getBoundingClientRect) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) {
            clearTimeout(nullLowestDeltaTimeout);
        }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }
});

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( true ) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(18)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));


/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//未曾遗忘的青春
//github  https://github.com/IFmiss/loading
//显示Loading
(function ($) {
	$.fn.loading = function (options) {
		var $this = $(this);
		var _this = this;
		return this.each(function () {
			var loadingPosition = '';
			var defaultProp = {
				direction: 'column', //方向，column纵向   row 横向
				animateIn: 'fadeInNoTransform', //进入类型
				title: '请稍等...', //显示什么内容
				name: 'loadingName', //loading的data-name的属性值  用于删除loading需要的参数
				type: 'origin', //pic   origin  
				discription: '这是一个描述', //loading的描述
				titleColor: 'rgba(255,255,255,0.7)', //title文本颜色
				discColor: 'rgba(255,255,255,0.7)', //disc文本颜色
				loadingWidth: 260, //中间的背景宽度width
				loadingBg: 'rgba(0, 0, 0, 0.6)', //中间的背景色
				borderRadius: 12, //中间的背景色的borderRadius
				loadingMaskBg: 'transparent', //背景遮罩层颜色
				zIndex: 1000001, //层级

				// 这是圆形旋转的loading样式  
				originDivWidth: 60, //loadingDiv的width
				originDivHeight: 60, //loadingDiv的Height

				originWidth: 8, //小圆点width
				originHeight: 8, //小圆点Height
				originBg: '#fefefe', //小圆点背景色
				smallLoading: false, //显示小的loading

				// 这是图片的样式   (pic)
				imgSrc: 'http://www.daiwei.org/index/images/logo/dw.png', //默认的图片地址
				imgDivWidth: 80, //imgDiv的width
				imgDivHeight: 80, //imgDiv的Height

				flexCenter: false, //是否用flex布局让loading-div垂直水平居中
				flexDirection: 'row', //row column  flex的方向   横向 和 纵向				
				mustRelative: false //$this是否规定relative
			};

			var opt = $.extend(defaultProp, options || {});

			//根据用户是针对body还是元素  设置对应的定位方式
			if ($this.selector == 'body') {
				$('body,html').css({
					overflow: 'hidden'
				});
				loadingPosition = 'fixed';
			} else if (opt.mustRelative) {
				$this.css({
					position: 'relative'
				});
				loadingPosition = 'absolute';
			} else {
				loadingPosition = 'absolute';
			}

			defaultProp._showOriginLoading = function () {
				var smallLoadingMargin = opt.smallLoading ? 0 : '-10px';
				if (opt.direction == 'row') {
					smallLoadingMargin = '-6px';
				}

				//悬浮层
				_this.cpt_loading_mask = $('<div class="cpt-loading-mask animated ' + opt.animateIn + ' ' + opt.direction + '" data-name="' + opt.name + '"></div>').css({
					'background': opt.loadingMaskBg,
					'z-index': opt.zIndex,
					'position': loadingPosition
				}).appendTo($this);

				//中间的显示层
				_this.div_loading = $('<div class="div-loading"></div>').css({
					'background': opt.loadingBg,
					'width': opt.loadingWidth,
					'height': opt.loadingHeight,
					'-webkit-border-radius': opt.borderRadius,
					'-moz-border-radius': opt.borderRadius,
					'border-radius': opt.borderRadius
				}).appendTo(_this.cpt_loading_mask);

				if (opt.flexCenter) {
					var _this$div_loading$css;

					_this.div_loading.css((_this$div_loading$css = {
						"display": "-webkit-flex"
					}, _defineProperty(_this$div_loading$css, 'display', "flex"), _defineProperty(_this$div_loading$css, "-webkit-flex-direction", opt.flexDirection), _defineProperty(_this$div_loading$css, "flex-direction", opt.flexDirection), _defineProperty(_this$div_loading$css, "-webkit-align-items", "center"), _defineProperty(_this$div_loading$css, "align-items", "center"), _defineProperty(_this$div_loading$css, "-webkit-justify-content", "center"), _defineProperty(_this$div_loading$css, "justify-content", "center"), _this$div_loading$css));
				}

				//loading标题
				_this.loading_title = $('<p class="loading-title txt-textOneRow"></p>').css({
					color: opt.titleColor
				}).html(opt.title).appendTo(_this.div_loading);

				//loading中间的内容  可以是图片或者转动的小圆球
				_this.loading = $('<div class="loading ' + opt.type + '"></div>').css({
					'width': opt.originDivWidth,
					'height': opt.originDivHeight
				}).appendTo(_this.div_loading);

				//描述
				_this.loading_discription = $('<p class="loading-discription txt-textOneRow"></p>').css({
					color: opt.discColor
				}).html(opt.discription).appendTo(_this.div_loading);

				if (opt.type == 'origin') {
					_this.loadingOrigin = $('<div class="div-loadingOrigin"><span></span></div><div class="div-loadingOrigin"><span></span></div><div class="div_loadingOrigin"><span></span></div><div class="div_loadingOrigin"><span></span></div><div class="div_loadingOrigin"><span></span></div>').appendTo(_this.loading);
					_this.loadingOrigin.children().css({
						"margin-top": smallLoadingMargin,
						"margin-left": smallLoadingMargin,
						"width": opt.originWidth,
						"height": opt.originHeight,
						"background": opt.originBg
					});
				}

				if (opt.type == 'pic') {
					_this.loadingPic = $('<img src="' + opt.imgSrc + '" alt="loading" />').appendTo(_this.loading);
				}

				//关闭事件冒泡  和默认的事件
				_this.cpt_loading_mask.on('touchstart touchend touchmove click', function (e) {
					e.stopPropagation();
					e.preventDefault();
				});
			};
			defaultProp._createLoading = function () {
				//不能生成两个loading data-name 一样的loading
				if ($(".cpt-loading-mask[data-name=" + opt.name + "]").length > 0) {
					// console.error('loading mask cant has same date-name('+opt.name+'), you cant set "date-name" prop when you create it');
					return;
				}

				defaultProp._showOriginLoading();
			};
			defaultProp._createLoading();
		});
	};
})(jQuery);

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(198);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3b67b725", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-20c7d24f\",\"scoped\":true,\"hasInlineConfig\":true}!./topic.css", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-20c7d24f\",\"scoped\":true,\"hasInlineConfig\":true}!./topic.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(19);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\r\n/* 试卷管理--套卷管理 */\nbody .data-table[data-v-20c7d24f] {\r\n    font-size: 14px;\n}\n.header .m-con ul[data-v-20c7d24f] {\r\n    margin: 0;\n}\n.header .m-con ul li a[data-v-20c7d24f] {\r\n    display: inline-block;\r\n    padding: 0 20px;\r\n    line-height: 60px;\r\n    color: #fff;\r\n    text-decoration: none;\n}\nul[data-v-20c7d24f] {\r\n    margin: 0;\n}\n.container[data-v-20c7d24f] {\r\n    /*padding: 20px 0px 30px 0px;*/\r\n    padding: 30px;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    background-color: #ffffff;\r\n    -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);\r\n            box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);\n}\n.container .q-detial-dialog[data-v-20c7d24f] {\r\n    display: none;\r\n    position: fixed;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    width: 790px;\r\n    height: 384px;\r\n    border-radius: 8px;\r\n    z-index: 2;\n}\n.container .q-detial-dialog .title[data-v-20c7d24f] {\r\n    height: 44px;\r\n    line-height: 44px;\r\n    padding: 0 15px;\r\n    background: #5d9cec;\r\n    font-size: 16px;\r\n    color: #fff;\r\n    text-align: center;\n}\n.container .q-detial-dialog .icon-close[data-v-20c7d24f] {\r\n    float: right;\r\n    font-size: 27px;\r\n    cursor: pointer;\n}\n.container .q-detial-dialog .con-wrapper[data-v-20c7d24f] {\r\n    padding: 25px 37px 50px 37px;\r\n    border-left: 1px solid #eeeeee;\r\n    border-bottom: 1px solid #eeeeee;\r\n    border-right: 1px solid #eeeeee;\r\n    background-color: #ffffff;\r\n    height: 400px;\r\n    overflow-y: auto;\n}\n.container .q-detial-dialog .con-wrapper .detial-box[data-v-20c7d24f] {\r\n    margin-bottom: 35px;\n}\n.container .q-detial-dialog .con-wrapper .detial-box .name[data-v-20c7d24f] {\r\n    font-size: 17px;\r\n    color: #000000;\n}\n.container .q-detial-dialog .con-wrapper .detial-box .option-wrapper[data-v-20c7d24f] {\r\n    margin-top: 15px;\r\n    font-size: 0;\n}\n.container .q-detial-dialog .con-wrapper .detial-box .option[data-v-20c7d24f] {\r\n    font-size: 16px;\r\n    margin-right: 90px;\n}\n.container .q-detial-dialog .con-wrapper .detial-box .hide-answer[data-v-20c7d24f] {\r\n    width: 100px;\r\n    margin: 16px 0 12px 11px;\r\n    font-size: 14px;\r\n    color: #169BD5;\r\n    cursor: pointer;\n}\n.container .q-detial-dialog .con-wrapper .detial-box .paper-answer[data-v-20c7d24f] {\r\n    width: 680px;\r\n    min-height: 48px;\r\n    padding: 14px 10px 5px 10px;\r\n    margin-bottom: 15px;\r\n    background-color: #f2f2f2;\n}\n.container .q-detial-dialog .con-wrapper .detial-box .paper-answer .answer[data-v-20c7d24f] {\r\n    margin-bottom: 20px;\r\n    font-size: 14px;\n}\n.container .q-detial-dialog .con-wrapper .detial-box .paper-id[data-v-20c7d24f] {\r\n    font-size: 14px;\r\n    color: #5D9CEC;\n}\n.container .q-detial-dialog .con-wrapper .detial-box .paper-id .id-box[data-v-20c7d24f] {\r\n    margin-bottom: 15px;\n}\n.container .q-detial-dialog .con-wrapper .detial-box .paper-id .paper-label[data-v-20c7d24f] {\r\n    display: inline-block;\r\n    height: 25px;\r\n    line-height: 25px;\r\n    padding: 0 20px;\r\n    margin: 0 40px 10px 0;\r\n    border-radius: 13px;\r\n    border: 1px solid #5D9CEC;\r\n    font-size: 13px;\r\n    color: #000;\n}\n.container .q-detial-dialog .con-wrapper .detial-box .paper-id .p-label[data-v-20c7d24f] {\r\n    margin-right: 12px;\r\n    color: #000;\n}\n.container .q-detial-dialog .con-wrapper .detial-box .paper-id .p-label.b[data-v-20c7d24f] {\r\n    color: #5D9CEC;\n}\n.container .q-detial-dialog .con-wrapper .detial-box .paper-id .p-label.judge[data-v-20c7d24f] {\r\n    color: #f68411;\n}\n.container .q-detial-dialog .con-wrapper .detial-box .paper-id .p-label[data-v-20c7d24f]:last-child {\r\n    margin-right: 0;\n}\n.container .q-detial-dialog .con-wrapper .detial-box .paper-id .paper-label.judge[data-v-20c7d24f] {\r\n    border: 1px solid #f68411;\n}\n.main[data-v-20c7d24f] {\r\n    padding: 20px 0px 30px 0px;\r\n    position: relative;\n}\n.main .search-bar[data-v-20c7d24f] {\r\n    color: #454a54;\r\n    display: inline-block;\r\n    padding: 5px 0;\r\n    width: 100%;\n}\n.main .search-bar .row[data-v-20c7d24f] {\r\n    margin-top: 10px;\n}\n.main .search-bar .s-date .t-datetime[data-v-20c7d24f] {\r\n    width: 118px;\r\n    height: 33px;\r\n    border-radius: 5px;\r\n    border: 1px solid #ccc;\r\n    font-size: 14px;\r\n    padding-left: 3px;\r\n    background: url(" + escape(__webpack_require__(108)) + ") no-repeat 90px center #f5f7fa;\n}\n.main .search-bar .s-date span[data-v-20c7d24f] {\r\n    color: #000;\r\n    font-size: 14px;\r\n    width: 30px;\r\n    display: inline-block;\r\n    text-align: center;\n}\n.main .search-bar .s-date .name[data-v-20c7d24f] {\r\n    color: #000;\r\n    font-size: 14px;\r\n    display: inline-block;\r\n    width: 80px;\r\n    height: 33px;\n}\n.main .search-bar .inlineblock[data-v-20c7d24f] {\r\n    display: inline-block;\r\n    font-size: 14px;\n}\n.main .search-bar .inlineblock .s-label[data-v-20c7d24f] {\r\n    display: inline-block;\r\n    color: #000;\r\n    font-size: 14px;\r\n    height: 33px;\n}\n.main .search-bar .inlineblock select[data-v-20c7d24f] {\r\n    display: inline-block;\r\n    width: 118px;\r\n    font-size: 14px;\r\n    height: 33px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\n}\n.main .search-bar .s-sele[data-v-20c7d24f] {\r\n    display: block;\r\n    margin-left: 20px;\n}\n.main .search-bar .s-sele input[data-v-20c7d24f] {\r\n    height: 33px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    width: 230px;\r\n    padding: 0 5px;\n}\n.main .search-bar .s-sele button[data-v-20c7d24f] {\r\n    background-color: #5d9cec;\r\n    border: none;\r\n    border-radius: 5px;\r\n    color: #fff;\r\n    height: 33px;\r\n    width: 88px;\r\n    text-align: center;\r\n    margin-left: 15px;\n}\n.main .m-sum[data-v-20c7d24f] {\r\n    font-size: 16px;\r\n    color: #4a4a4a;\r\n    margin: 20px 0;\r\n    font-weight: 700;\n}\n.main .m-sum span[data-v-20c7d24f] {\r\n    color: #f68411;\n}\n.main .data-list-wrapper[data-v-20c7d24f] {\r\n    min-width: 1120px;\n}\n.main .data-list-wrapper .data-table[data-v-20c7d24f] {\r\n    width: 100%;\r\n    border-collapse: collapse;\n}\n.main .data-list-wrapper .data-table .t-number[data-v-20c7d24f], .main .data-list-wrapper .data-table .t-name[data-v-20c7d24f], .main .data-list-wrapper .data-table .t-state[data-v-20c7d24f], .main .data-list-wrapper .data-table .t-person1[data-v-20c7d24f], .main .data-list-wrapper .data-table .t-time1[data-v-20c7d24f], .main .data-list-wrapper .data-table .t-person2[data-v-20c7d24f], .main .data-list-wrapper .data-table .t-time2[data-v-20c7d24f], .main .data-list-wrapper .data-table .t-time3[data-v-20c7d24f] {\r\n    border-left: 1px solid #dbdbdb;\r\n    border-bottom: 1px solid #dbdbdb;\n}\n.main .data-list-wrapper .data-table .title[data-v-20c7d24f] {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    background-color: #5d9cec;\r\n    font-size: 16px;\r\n    color: #ffffff;\n}\n.main .data-list-wrapper .data-table .title th[data-v-20c7d24f] {\r\n    text-align: center;\r\n    font-weight: 400;\r\n    color: #fff;\n}\n.main .data-list-wrapper .data-table .t-number[data-v-20c7d24f] {\r\n    width: 6%;\n}\n.main .data-list-wrapper .data-table .t-name[data-v-20c7d24f] {\r\n    width: 10%;\n}\n.main .data-list-wrapper .data-table .t-name .t-name-content[data-v-20c7d24f] {\r\n    display: inline-block;\r\n    width: 258px;\r\n    font-size: 13px;\r\n    color: #5d9cec;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    vertical-align: middle;\r\n    overflow: hidden;\n}\n.main .data-list-wrapper .data-table .t-name .t-name-content[data-v-20c7d24f]:hover {\r\n    text-decoration: underline;\n}\n.main .data-list-wrapper .data-table .t-state[data-v-20c7d24f] {\r\n    width: 9%;\n}\n.main .data-list-wrapper .data-table .t-person1[data-v-20c7d24f] {\r\n    width: 10%;\n}\n.main .data-list-wrapper .data-table .t-time1[data-v-20c7d24f] {\r\n    width: 12%;\n}\n.main .data-list-wrapper .data-table .t-person2[data-v-20c7d24f] {\r\n    width: 9%;\n}\n.main .data-list-wrapper .data-table .t-time2[data-v-20c7d24f] {\r\n    width: 12%;\n}\n.main .data-list-wrapper .data-table .t-time3[data-v-20c7d24f] {\r\n    width: 14%;\r\n    border-right: 1px solid #dbdbdb;\n}\n.main .data-list-wrapper .data-table .t-body td[data-v-20c7d24f] {\r\n    height: 48px;\r\n    border: 1px solid #dbdbdb;\r\n    text-align: center;\n}\n.main .data-list-wrapper .data-table .t-body .b-name[data-v-20c7d24f] {\r\n    color: #5d9cec;\r\n    cursor: pointer;\n}\n.main .m-pages[data-v-20c7d24f] {\r\n    margin: 30px 0;\r\n    position: absolute;\r\n    right: 0;\n}\n.main .data-list-wrapper .data-table .t-body .b-receive[data-v-20c7d24f] {\r\n    color: #337ab7;\n}\n.search-condition[data-v-20c7d24f] {\r\n    display: inline-block;\r\n    border-collapse: separate;\r\n    border-spacing: 2px;\r\n    border-color: grey;\n}\n.container .q-detial-dialog-ops[data-v-20c7d24f] {\r\n    display: none;\r\n    position: fixed;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -40%);\r\n            transform: translate(-50%, -40%);\r\n    width: 790px;\r\n    height: 384px;\r\n    border-radius: 8px;\r\n    z-index: 2;\n}\n.container .q-detial-dialog-ops .title[data-v-20c7d24f] {\r\n    height: 44px;\r\n    line-height: 44px;\r\n    padding: 0 15px;\r\n    background: #5d9cec;\r\n    font-size: 16px;\r\n    color: #fff;\r\n    text-align: center;\n}\n.container .q-detial-dialog-ops .icon-close[data-v-20c7d24f] {\r\n    float: right;\r\n    font-size: 27px;\r\n    cursor: pointer;\n}\n.container .q-detial-dialog-ops .con-wrapper[data-v-20c7d24f] {\r\n    padding: 25px 37px 50px 37px;\r\n    border-left: 1px solid #eeeeee;\r\n    background-color: #ffffff;\r\n    height: 340px;\r\n    overflow-y: auto;\n}\n.container .q-detial-dialog-ops .con-wrapper .detial-box[data-v-20c7d24f] {\r\n    margin-bottom: 35px;\n}\n.container .q-detial-dialog-ops .con-wrapper .detial-box .list[data-v-20c7d24f] {\r\n    padding: 0 30px;\r\n    line-height: 50px;\r\n    color: #666;\r\n    font-size: 14px;\n}\n.container .q-detial-dialog-ops .con-wrapper .detial-box .list span[data-v-20c7d24f] {\r\n    padding: 0 20px;\n}\n.container .q-detial-dialog-ops .con-wrapper .detial-box .list i[data-v-20c7d24f] {\r\n    font-style: normal;\n}", ""]);

// exports


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(200);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("fc514fba", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-20c7d24f\",\"scoped\":false,\"hasInlineConfig\":true}!./jquery.datetimepicker.min.css", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-20c7d24f\",\"scoped\":false,\"hasInlineConfig\":true}!./jquery.datetimepicker.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.xdsoft_datetimepicker{-webkit-box-shadow:0 5px 15px -5px rgba(0,0,0,0.506);box-shadow:0 5px 15px -5px rgba(0,0,0,0.506);background:#fff;border-bottom:1px solid #bbb;border-left:1px solid #ccc;border-right:1px solid #ccc;border-top:1px solid #ccc;color:#333;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;padding:8px;padding-left:0;padding-top:2px;position:absolute;z-index:9999;-webkit-box-sizing:border-box;box-sizing:border-box;display:none\n}\n.xdsoft_datetimepicker.xdsoft_rtl{padding:8px 0 8px 8px\n}\n.xdsoft_datetimepicker iframe{position:absolute;left:0;top:0;width:75px;height:210px;background:transparent;border:0\n}\n.xdsoft_datetimepicker button{border:none !important\n}\n.xdsoft_noselect{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none\n}\n.xdsoft_noselect::-moz-selection{background:transparent\n}\n.xdsoft_noselect::selection{background:transparent\n}\n.xdsoft_noselect::-moz-selection{background:transparent\n}\n.xdsoft_datetimepicker.xdsoft_inline{display:inline-block;position:static;-webkit-box-shadow:none;box-shadow:none\n}\n.xdsoft_datetimepicker *{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;margin:0\n}\n.xdsoft_datetimepicker .xdsoft_datepicker,.xdsoft_datetimepicker .xdsoft_timepicker{display:none\n}\n.xdsoft_datetimepicker .xdsoft_datepicker.active,.xdsoft_datetimepicker .xdsoft_timepicker.active{display:block\n}\n.xdsoft_datetimepicker .xdsoft_datepicker{width:224px;float:left;margin-left:8px\n}\n.xdsoft_datetimepicker.xdsoft_rtl .xdsoft_datepicker{float:right;margin-right:8px;margin-left:0\n}\n.xdsoft_datetimepicker.xdsoft_showweeks .xdsoft_datepicker{width:256px\n}\n.xdsoft_datetimepicker .xdsoft_timepicker{width:58px;float:left;text-align:center;margin-left:8px;margin-top:0\n}\n.xdsoft_datetimepicker.xdsoft_rtl .xdsoft_timepicker{float:right;margin-right:8px;margin-left:0\n}\n.xdsoft_datetimepicker .xdsoft_datepicker.active+.xdsoft_timepicker{margin-top:8px;margin-bottom:3px\n}\n.xdsoft_datetimepicker .xdsoft_monthpicker{position:relative;text-align:center\n}\n.xdsoft_datetimepicker .xdsoft_label i,.xdsoft_datetimepicker .xdsoft_prev,.xdsoft_datetimepicker .xdsoft_next,.xdsoft_datetimepicker .xdsoft_today_button{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAeCAYAAADaW7vzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0NBRjI1NjM0M0UwMTFFNDk4NkFGMzJFQkQzQjEwRUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0NBRjI1NjQ0M0UwMTFFNDk4NkFGMzJFQkQzQjEwRUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQ0FGMjU2MTQzRTAxMUU0OTg2QUYzMkVCRDNCMTBFQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQ0FGMjU2MjQzRTAxMUU0OTg2QUYzMkVCRDNCMTBFQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoNEP54AAAIOSURBVHja7Jq9TsMwEMcxrZD4WpBYeKUCe+kTMCACHZh4BFfHO/AAIHZGFhYkBBsSEqxsLCAgXKhbXYOTxh9pfJVP+qutnZ5s/5Lz2Y5I03QhWji2GIcgAokWgfCxNvcOCCGKqiSqhUp0laHOne05vdEyGMfkdxJDVjgwDlEQgYQBgx+ULJaWSXXS6r/ER5FBVR8VfGftTKcITNs+a1XpcFoExREIDF14AVIFxgQUS+h520cdud6wNkC0UBw6BCO/HoCYwBhD8QCkQ/x1mwDyD4plh4D6DDV0TAGyo4HcawLIBBSLDkHeH0Mg2yVP3l4TQMZQDDsEOl/MgHQqhMNuE0D+oBh0CIr8MAKyazBH9WyBuKxDWgbXfjNf32TZ1KWm/Ap1oSk/R53UtQ5xTh3LUlMmT8gt6g51Q9p+SobxgJQ/qmsfZhWywGFSl0yBjCLJCMgXail3b7+rumdVJ2YRss4cN+r6qAHDkPWjPjdJCF4n9RmAD/V9A/Wp4NQassDjwlB6XBiCxcJQWmZZb8THFilfy/lfrTvLghq2TqTHrRMTKNJ0sIhdo15RT+RpyWwFdY96UZ/LdQKBGjcXpcc1AlSFEfLmouD+1knuxBDUVrvOBmoOC/rEcN7OQxKVeJTCiAdUzUJhA2Oez9QTkp72OTVcxDcXY8iKNkxGAJXmJCOQwOa6dhyXsOa6XwEGAKdeb5ET3rQdAAAAAElFTkSuQmCC)\n}\n.xdsoft_datetimepicker .xdsoft_label i{opacity:.5;background-position:-92px -19px;display:inline-block;width:9px;height:20px;vertical-align:middle\n}\n.xdsoft_datetimepicker .xdsoft_prev{float:left;background-position:-20px 0\n}\n.xdsoft_datetimepicker .xdsoft_today_button{float:left;background-position:-70px 0;margin-left:5px\n}\n.xdsoft_datetimepicker .xdsoft_next{float:right;background-position:0 0\n}\n.xdsoft_datetimepicker .xdsoft_next,.xdsoft_datetimepicker .xdsoft_prev,.xdsoft_datetimepicker .xdsoft_today_button{background-color:transparent;background-repeat:no-repeat;border:0 none;cursor:pointer;display:block;height:30px;opacity:.5;-ms-filter:\"alpha(opacity=50)\";outline:medium none;overflow:hidden;padding:0;position:relative;text-indent:100%;white-space:nowrap;width:20px;min-width:0\n}\n.xdsoft_datetimepicker .xdsoft_timepicker .xdsoft_prev,.xdsoft_datetimepicker .xdsoft_timepicker .xdsoft_next{float:none;background-position:-40px -15px;height:15px;width:30px;display:block;margin-left:14px;margin-top:7px\n}\n.xdsoft_datetimepicker.xdsoft_rtl .xdsoft_timepicker .xdsoft_prev,.xdsoft_datetimepicker.xdsoft_rtl .xdsoft_timepicker .xdsoft_next{float:none;margin-left:0;margin-right:14px\n}\n.xdsoft_datetimepicker .xdsoft_timepicker .xdsoft_prev{background-position:-40px 0;margin-bottom:7px;margin-top:0\n}\n.xdsoft_datetimepicker .xdsoft_timepicker .xdsoft_time_box{height:151px;overflow:hidden;border-bottom:1px solid #ddd\n}\n.xdsoft_datetimepicker .xdsoft_timepicker .xdsoft_time_box>div>div{background:#f5f5f5;border-top:1px solid #ddd;color:#666;font-size:12px;text-align:center;border-collapse:collapse;cursor:pointer;border-bottom-width:0;height:25px;line-height:25px\n}\n.xdsoft_datetimepicker .xdsoft_timepicker .xdsoft_time_box>div>div:first-child{border-top-width:0\n}\n.xdsoft_datetimepicker .xdsoft_today_button:hover,.xdsoft_datetimepicker .xdsoft_next:hover,.xdsoft_datetimepicker .xdsoft_prev:hover{opacity:1;-ms-filter:\"alpha(opacity=100)\"\n}\n.xdsoft_datetimepicker .xdsoft_label{display:inline;position:relative;z-index:9999;margin:0;padding:5px 3px;font-size:14px;line-height:20px;font-weight:bold;background-color:#fff;float:left;width:182px;text-align:center;cursor:pointer\n}\n.xdsoft_datetimepicker .xdsoft_label:hover>span{text-decoration:underline\n}\n.xdsoft_datetimepicker .xdsoft_label:hover i{opacity:1.0\n}\n.xdsoft_datetimepicker .xdsoft_label>.xdsoft_select{border:1px solid #ccc;position:absolute;right:0;top:30px;z-index:101;display:none;background:#fff;max-height:160px;overflow-y:hidden\n}\n.xdsoft_datetimepicker .xdsoft_label>.xdsoft_select.xdsoft_monthselect{right:-7px\n}\n.xdsoft_datetimepicker .xdsoft_label>.xdsoft_select.xdsoft_yearselect{right:2px\n}\n.xdsoft_datetimepicker .xdsoft_label>.xdsoft_select>div>.xdsoft_option:hover{color:#fff;background:#ff8000\n}\n.xdsoft_datetimepicker .xdsoft_label>.xdsoft_select>div>.xdsoft_option{padding:2px 10px 2px 5px;text-decoration:none !important\n}\n.xdsoft_datetimepicker .xdsoft_label>.xdsoft_select>div>.xdsoft_option.xdsoft_current{background:#3af;-webkit-box-shadow:#178fe5 0 1px 3px 0 inset;box-shadow:#178fe5 0 1px 3px 0 inset;color:#fff;font-weight:700\n}\n.xdsoft_datetimepicker .xdsoft_month{width:100px;text-align:right\n}\n.xdsoft_datetimepicker .xdsoft_calendar{clear:both\n}\n.xdsoft_datetimepicker .xdsoft_year{width:48px;margin-left:5px\n}\n.xdsoft_datetimepicker .xdsoft_calendar table{border-collapse:collapse;width:100%\n}\n.xdsoft_datetimepicker .xdsoft_calendar td>div{padding-right:5px\n}\n.xdsoft_datetimepicker .xdsoft_calendar th{height:25px\n}\n.xdsoft_datetimepicker .xdsoft_calendar td,.xdsoft_datetimepicker .xdsoft_calendar th{width:14.2857142%;background:#f5f5f5;border:1px solid #ddd;color:#666;font-size:12px;text-align:right;vertical-align:middle;padding:0;border-collapse:collapse;cursor:pointer;height:25px\n}\n.xdsoft_datetimepicker.xdsoft_showweeks .xdsoft_calendar td,.xdsoft_datetimepicker.xdsoft_showweeks .xdsoft_calendar th{width:12.5%\n}\n.xdsoft_datetimepicker .xdsoft_calendar th{background:#f1f1f1\n}\n.xdsoft_datetimepicker .xdsoft_calendar td.xdsoft_today{color:#3af\n}\n.xdsoft_datetimepicker .xdsoft_calendar td.xdsoft_highlighted_default{background:#ffe9d2;-webkit-box-shadow:#ffb871 0 1px 4px 0 inset;box-shadow:#ffb871 0 1px 4px 0 inset;color:#000\n}\n.xdsoft_datetimepicker .xdsoft_calendar td.xdsoft_highlighted_mint{background:#c1ffc9;-webkit-box-shadow:#00dd1c 0 1px 4px 0 inset;box-shadow:#00dd1c 0 1px 4px 0 inset;color:#000\n}\n.xdsoft_datetimepicker .xdsoft_calendar td.xdsoft_default,.xdsoft_datetimepicker .xdsoft_calendar td.xdsoft_current,.xdsoft_datetimepicker .xdsoft_timepicker .xdsoft_time_box>div>div.xdsoft_current{background:#3af;-webkit-box-shadow:#178fe5 0 1px 3px 0 inset;box-shadow:#178fe5 0 1px 3px 0 inset;color:#fff;font-weight:700\n}\n.xdsoft_datetimepicker .xdsoft_calendar td.xdsoft_other_month,.xdsoft_datetimepicker .xdsoft_calendar td.xdsoft_disabled,.xdsoft_datetimepicker .xdsoft_time_box>div>div.xdsoft_disabled{opacity:.5;-ms-filter:\"alpha(opacity=50)\";cursor:default\n}\n.xdsoft_datetimepicker .xdsoft_calendar td.xdsoft_other_month.xdsoft_disabled{opacity:.2;-ms-filter:\"alpha(opacity=20)\"\n}\n.xdsoft_datetimepicker .xdsoft_calendar td:hover,.xdsoft_datetimepicker .xdsoft_timepicker .xdsoft_time_box>div>div:hover{color:#fff !important;background:#ff8000 !important;-webkit-box-shadow:none !important;box-shadow:none !important\n}\n.xdsoft_datetimepicker .xdsoft_calendar td.xdsoft_current.xdsoft_disabled:hover,.xdsoft_datetimepicker .xdsoft_timepicker .xdsoft_time_box>div>div.xdsoft_current.xdsoft_disabled:hover{background:#3af !important;-webkit-box-shadow:#178fe5 0 1px 3px 0 inset !important;box-shadow:#178fe5 0 1px 3px 0 inset !important;color:#fff !important\n}\n.xdsoft_datetimepicker .xdsoft_calendar td.xdsoft_disabled:hover,.xdsoft_datetimepicker .xdsoft_timepicker .xdsoft_time_box>div>div.xdsoft_disabled:hover{color:inherit !important;background:inherit !important;-webkit-box-shadow:inherit !important;box-shadow:inherit !important\n}\n.xdsoft_datetimepicker .xdsoft_calendar th{font-weight:700;text-align:center;color:#999;cursor:default\n}\n.xdsoft_datetimepicker .xdsoft_copyright{color:#ccc !important;font-size:10px;clear:both;float:none;margin-left:8px\n}\n.xdsoft_datetimepicker .xdsoft_copyright a{color:#eee !important\n}\n.xdsoft_datetimepicker .xdsoft_copyright a:hover{color:#aaa !important\n}\n.xdsoft_time_box{position:relative;border:1px solid #ccc\n}\n.xdsoft_scrollbar>.xdsoft_scroller{background:#ccc !important;height:20px;border-radius:3px\n}\n.xdsoft_scrollbar{position:absolute;width:7px;right:0;top:0;bottom:0;cursor:pointer\n}\n.xdsoft_datetimepicker.xdsoft_rtl .xdsoft_scrollbar{left:0;right:auto\n}\n.xdsoft_scroller_box{position:relative\n}\n.xdsoft_datetimepicker.xdsoft_dark{-webkit-box-shadow:0 5px 15px -5px rgba(255,255,255,0.506);box-shadow:0 5px 15px -5px rgba(255,255,255,0.506);background:#000;border-bottom:1px solid #444;border-left:1px solid #333;border-right:1px solid #333;border-top:1px solid #333;color:#ccc\n}\n.xdsoft_datetimepicker.xdsoft_dark .xdsoft_timepicker .xdsoft_time_box{border-bottom:1px solid #222\n}\n.xdsoft_datetimepicker.xdsoft_dark .xdsoft_timepicker .xdsoft_time_box>div>div{background:#0a0a0a;border-top:1px solid #222;color:#999\n}\n.xdsoft_datetimepicker.xdsoft_dark .xdsoft_label{background-color:#000\n}\n.xdsoft_datetimepicker.xdsoft_dark .xdsoft_label>.xdsoft_select{border:1px solid #333;background:#000\n}\n.xdsoft_datetimepicker.xdsoft_dark .xdsoft_label>.xdsoft_select>div>.xdsoft_option:hover{color:#000;background:#007fff\n}\n.xdsoft_datetimepicker.xdsoft_dark .xdsoft_label>.xdsoft_select>div>.xdsoft_option.xdsoft_current{background:#c50;-webkit-box-shadow:#b03e00 0 1px 3px 0 inset;box-shadow:#b03e00 0 1px 3px 0 inset;color:#000\n}\n.xdsoft_datetimepicker.xdsoft_dark .xdsoft_label i,.xdsoft_datetimepicker.xdsoft_dark .xdsoft_prev,.xdsoft_datetimepicker.xdsoft_dark .xdsoft_next,.xdsoft_datetimepicker.xdsoft_dark .xdsoft_today_button{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAeCAYAAADaW7vzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUExQUUzOTA0M0UyMTFFNDlBM0FFQTJENTExRDVBODYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUExQUUzOTE0M0UyMTFFNDlBM0FFQTJENTExRDVBODYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQTFBRTM4RTQzRTIxMUU0OUEzQUVBMkQ1MTFENUE4NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQTFBRTM4RjQzRTIxMUU0OUEzQUVBMkQ1MTFENUE4NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp0VxGEAAAIASURBVHja7JrNSgMxEMebtgh+3MSLr1T1Xn2CHoSKB08+QmR8Bx9A8e7RixdB9CKCoNdexIugxFlJa7rNZneTbLIpM/CnNLsdMvNjM8l0mRCiQ9Ye61IKCAgZAUnH+mU3MMZaHYChBnJUDzWOFZdVfc5+ZFLbrWDeXPwbxIqrLLfaeS0hEBVGIRQCEiZoHQwtlGSByCCdYBl8g8egTTAWoKQMRBRBcZxYlhzhKegqMOageErsCHVkk3hXIFooDgHB1KkHIHVgzKB4ADJQ/A1jAFmAYhkQqA5TOBtocrKrgXwQA8gcFIuAIO8sQSA7hidvPwaQGZSaAYHOUWJABhWWw2EMIH9QagQERU4SArJXo0ZZL18uvaxejXt/Em8xjVBXmvFr1KVm/AJ10tRe2XnraNqaJvKE3KHuUbfK1E+VHB0q40/y3sdQSxY4FHWeKJCunP8UyDdqJZenT3ntVV5jIYCAh20vT7ioP8tpf6E2lfEMwERe+whV1MHjwZB7PBiCxcGQWwKZKD62lfGNnP/1poFAA60T7rF1UgcKd2id3KDeUS+oLWV8DfWAepOfq00CgQabi9zjcgJVYVD7PVzQUAUGAQkbNJTBICDhgwYTjDYD6XeW08ZKh+A4pYkzenOxXUbvZcWz7E8ykRMnIHGX1XPl+1m2vPYpL+2qdb8CDAARlKFEz/ZVkAAAAABJRU5ErkJggg==)\n}\n.xdsoft_datetimepicker.xdsoft_dark .xdsoft_calendar td,.xdsoft_datetimepicker.xdsoft_dark .xdsoft_calendar th{background:#0a0a0a;border:1px solid #222;color:#999\n}\n.xdsoft_datetimepicker.xdsoft_dark .xdsoft_calendar th{background:#0e0e0e\n}\n.xdsoft_datetimepicker.xdsoft_dark .xdsoft_calendar td.xdsoft_today{color:#c50\n}\n.xdsoft_datetimepicker.xdsoft_dark .xdsoft_calendar td.xdsoft_highlighted_default{background:#ffe9d2;-webkit-box-shadow:#ffb871 0 1px 4px 0 inset;box-shadow:#ffb871 0 1px 4px 0 inset;color:#000\n}\n.xdsoft_datetimepicker.xdsoft_dark .xdsoft_calendar td.xdsoft_highlighted_mint{background:#c1ffc9;-webkit-box-shadow:#00dd1c 0 1px 4px 0 inset;box-shadow:#00dd1c 0 1px 4px 0 inset;color:#000\n}\n.xdsoft_datetimepicker.xdsoft_dark .xdsoft_calendar td.xdsoft_default,.xdsoft_datetimepicker.xdsoft_dark .xdsoft_calendar td.xdsoft_current,.xdsoft_datetimepicker.xdsoft_dark .xdsoft_timepicker .xdsoft_time_box>div>div.xdsoft_current{background:#c50;-webkit-box-shadow:#b03e00 0 1px 3px 0 inset;box-shadow:#b03e00 0 1px 3px 0 inset;color:#000\n}\n.xdsoft_datetimepicker.xdsoft_dark .xdsoft_calendar td:hover,.xdsoft_datetimepicker.xdsoft_dark .xdsoft_timepicker .xdsoft_time_box>div>div:hover{color:#000 !important;background:#007fff !important\n}\n.xdsoft_datetimepicker.xdsoft_dark .xdsoft_calendar th{color:#666\n}\n.xdsoft_datetimepicker.xdsoft_dark .xdsoft_copyright{color:#333 !important\n}\n.xdsoft_datetimepicker.xdsoft_dark .xdsoft_copyright a{color:#111 !important\n}\n.xdsoft_datetimepicker.xdsoft_dark .xdsoft_copyright a:hover{color:#555 !important\n}\n.xdsoft_dark .xdsoft_time_box{border:1px solid #333\n}\n.xdsoft_dark .xdsoft_scrollbar>.xdsoft_scroller{background:#333 !important\n}\n.xdsoft_datetimepicker .xdsoft_save_selected{display:block;border:1px solid #ddd !important;margin-top:5px;width:100%;color:#454551;font-size:13px\n}\n.xdsoft_datetimepicker .blue-gradient-button{font-family:\"museo-sans\",\"Book Antiqua\",sans-serif;font-size:12px;font-weight:300;color:#82878c;height:28px;position:relative;padding:4px 17px 4px 33px;border:1px solid #d7d8da;background:-webkit-gradient(linear,left top, left bottom,color-stop(0, #fff),color-stop(73%, #f4f8fa));background:linear-gradient(to bottom,#fff 0,#f4f8fa 73%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff',endColorstr='#f4f8fa',GradientType=0)\n}\n.xdsoft_datetimepicker .blue-gradient-button:hover,.xdsoft_datetimepicker .blue-gradient-button:focus,.xdsoft_datetimepicker .blue-gradient-button:hover span,.xdsoft_datetimepicker .blue-gradient-button:focus span{color:#454551;background:-webkit-gradient(linear,left top, left bottom,color-stop(0, #f4f8fa),color-stop(73%, #FFF));background:linear-gradient(to bottom,#f4f8fa 0,#FFF 73%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f4f8fa',endColorstr='#FFF',GradientType=0)\n}\n", ""]);

// exports


/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_js_jquery_1_12_2_min_js__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_js_jquery_1_12_2_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_js_jquery_1_12_2_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_js_loading_js_loading_js__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_js_loading_js_loading_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_js_loading_js_loading_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_js_datetimepicker_jquery_datetimepicker_full_js__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_js_datetimepicker_jquery_datetimepicker_full_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_js_datetimepicker_jquery_datetimepicker_full_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Pagination__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Pagination__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        'v-pagination': __WEBPACK_IMPORTED_MODULE_3__components_Pagination___default.a
    },
    data: function data() {
        return {
            beginDate: '',
            endDate: '',
            isGet: '',
            isLabel: '',
            questionId: '',
            curGrade: '',
            optionsGrade: '',
            subjectValue: '',
            optionsSubject: '',
            curQuestionType: '',
            ajaxAllSubjectQuestionType: '',
            questionList: [],
            questionUserInfo: [],
            isShow: false,
            isValue: '显示答案',
            paginationOption: {
                //分页组件数据
                pageSize: 15, //每页显示10条数据
                currentPage: 1, //当前页码
                count: 0, //总记录数
                isShowJump: true //是否显示跳页
            },
            detail: {
                content: '',
                answer: '',
                analysis: '',
                tagContent: '',
                judgeTagContent: ''
            },
            //loading:false,
            labelShow: false
        };
    },

    watch: {
        searchArgs: function searchArgs() {
            var that = this;
            that.paginationOption.currentPage = 1;
        }
    },
    computed: _extends({
        searchArgs: function searchArgs() {
            var that = this;
            return {
                beginDate: that.beginDate,
                endDate: that.endDate,
                gradeNum: that.curGrade,
                subjectId: that.subjectValue,
                questionTypeId: that.curQuestionType,
                questionId: that.questionId,
                isLabel: that.isLabel,
                isGet: that.isGet,
                pageSize: that.paginationOption.pageSize
            };
        }
    }, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["c" /* mapGetters */])({
        userKey: 'getUserKey' //this.userKey  ==  this.$store.getters.getUserKey
    })),
    mounted: function mounted() {
        var that = this;
        that.timeList();
        that.subjectList();
        that.getAllGrade();
        $('#datetimepicker1,#datetimepicker2').datetimepicker({
            format: "Y-m-d",
            timepicker: false,
            onChangeDateTime: function onChangeDateTime(dp, $input) {
                that.beginDate = $("#datetimepicker1").val();
                that.endDate = $("#datetimepicker2").val();
            }
        });
    },

    methods: {
        showQuestionPopout: function showQuestionPopout(qid) {

            $('#questionId').html(qid);
            var that = this;
            axios.get('label/manage/questionDetailAjaxSearch', { params: { questionId: qid } }).then(function (data) {

                if (data.data.errorMsg) {
                    that.$message.error(data.data.errorMsg);
                } else {
                    that.detail.content = data.data.content;
                    that.detail.answer = data.data.answer;
                    that.detail.analysis = data.data.analysis;
                    that.detail.tagContent = data.data.tagContent;
                    that.detail.judgeTagContent = data.data.judgeTagContent;
                }
            });
            $('.m-layer').show();
            $('.q-detial-dialog').show();
        },
        showAnswer: function showAnswer() {
            //隐藏答案
            var that = this;
            if (!that.isShow) {
                that.isValue = '隐藏答案';
            } else {
                that.isValue = '显示答案';
            }
            that.isShow = !that.isShow;
        },
        closePopout: function closePopout() {
            var that = this;
            that.isValue = '显示答案';
            that.isShow = false;
            $('.m-layer').hide();
            $('.q-detial-dialog').hide();
        },
        questionInfo: function questionInfo(questionId) {
            var that = this;
            axios.get('label/manage/getQuestionInfo', { params: { questionId: questionId } }).then(function (data) {
                if (data.data.errorMsg) {
                    that.$message.error(data.data.errorMsg);
                } else {
                    if (data.data['paper_id']) {
                        that.questionUserInfo = data.data[data.data['paper_id']];
                    } else {
                        that.questionUserInfo = data.data[questionId];
                    }
                }
            });
            $('.m-layer').show();
            $('.q-detial-dialog-ops').show();
        },

        closePopoutGet: function closePopoutGet() {
            $('.m-layer').hide();
            $('.q-detial-dialog-ops').hide();
        },
        //从page组件传递过来的当前page
        pageChange: function pageChange(page) {
            this.paginationOption.currentPage = page;
            this.doSearch(); //查询数据
        },
        subjectList: function subjectList() {
            var that = this;
            axios.get('label/common/getSubjects', { params: { userKey: that.userKey } }).then(function (data) {
                if (data.data.errorMsg) {
                    that.$message.error(data.data.errorMsg);
                } else {
                    that.optionsSubject = data.data;
                }
            });
        },
        selectQuestionType: function selectQuestionType() {
            var that = this;
            that.curPaperSource = '';
            axios.get('label/common/getQuestionTypeAjaxSearch', { params: { subjectId: that.subjectValue, userKey: that.userKey } }).then(function (data) {
                that.$nextTick(function () {
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.ajaxAllSubjectQuestionType = data.data;
                    }
                });
            });
        },
        getAllGrade: function getAllGrade() {
            var that = this;
            axios.get('label/common/getAllGrade', { params: {} }).then(function (data) {
                that.optionsGrade = data.data;
            });
        },
        timeList: function timeList() {
            var that = this;
            axios.get('label/common/getMonthTime', { params: { userKey: that.userKey } }).then(function (data) {
                that.$nextTick(function () {
                    that.beginDate = data.data.fristday;
                    that.endDate = data.data.lastday;
                    that.doSearch();
                });
            });
        },

        selectGet: function selectGet() {
            var that = this;
            if (that.isGet == 0) {
                that.isLabel = '';
                // $("#isTag").css("display","none");
                // $('#isTag').hide();
                that.labelShow = false;
            }
            if (that.isGet != 0 && that.isGet != '') {
                // $("#isTag").css("display","block");
                // $('#isTag').show();
                that.labelShow = true;
            }
        },
        doSearch: function doSearch() {
            var that = this;
            var searchArgs = $.extend(true, {}, that.searchArgs);
            searchArgs.currentPage = that.paginationOption.currentPage;
            searchArgs.pageSize = that.paginationOption.pageSize;
            searchArgs.userKey = that.userKey;
            //that.loading=true;
            axios.get('label/manage/question', { params: searchArgs }).then(function (data) {
                if (data.data.errorMsg) {
                    that.$message.error(data.data.errorMsg);
                } else {
                    that.$nextTick(function () {
                        //that.loading=false;
                        that.questionList = data.data.rows;
                        if (data.data.total) {
                            that.paginationOption.count = data.data.total;
                        } else {
                            that.paginationOption.count = 0;
                        }
                    });
                }
            });
        }
    }
});

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      { staticClass: "main" },
      [
        _c("div", { staticClass: "search-bar" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-4 search-condition" }, [
              _c("span", { staticClass: "s-date" }, [
                _c("span", { staticClass: "name" }, [_vm._v("导入日期：")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.beginDate,
                      expression: "beginDate"
                    }
                  ],
                  staticClass: "t-datetime",
                  attrs: { id: "datetimepicker1", type: "text" },
                  domProps: { value: _vm.beginDate },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.beginDate = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", [_vm._v("至")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.endDate,
                      expression: "endDate"
                    }
                  ],
                  staticClass: "t-datetime",
                  attrs: { id: "datetimepicker2", type: "text" },
                  domProps: { value: _vm.endDate },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.endDate = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2 search-condition" }, [
              _c("span", { staticClass: "inlineblock" }, [
                _c("span", { staticClass: "s-label" }, [_vm._v("学科：")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.subjectValue,
                        expression: "subjectValue"
                      }
                    ],
                    staticClass: "selectpicker  form-control selectpicker",
                    attrs: { title: "请选择学科" },
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.subjectValue = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                        _vm.selectQuestionType
                      ]
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("请选择学科")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.optionsSubject, function(option) {
                      return _c(
                        "option",
                        { domProps: { value: option.subjectId } },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(option.subjectName) +
                              "\n                            "
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2 search-condition" }, [
              _c("span", { staticClass: "inlineblock" }, [
                _c("span", { staticClass: "s-label" }, [_vm._v("题型：")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.curQuestionType,
                        expression: "curQuestionType"
                      }
                    ],
                    staticClass: "selectpicker  form-control selectpicker",
                    attrs: { title: "请选择题型" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.curQuestionType = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("请选择题型")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.ajaxAllSubjectQuestionType, function(option) {
                      return _c("option", { domProps: { value: option.id } }, [
                        _vm._v(
                          "\n                                " +
                            _vm._s(option.title) +
                            "\n                            "
                        )
                      ])
                    })
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2 search-condition" }, [
              _c("span", { staticClass: "inlineblock" }, [
                _c("span", { staticClass: "s-label" }, [_vm._v("年级：")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.curGrade,
                        expression: "curGrade"
                      }
                    ],
                    staticClass: "selectpicker  form-control selectpicker",
                    attrs: { title: "请选择年级" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.curGrade = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [
                      _vm._v("请选择类型")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.optionsGrade, function(option) {
                      return _c(
                        "option",
                        { domProps: { value: option.gradeId } },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(option.gradeName) +
                              "\n                            "
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2 search-condition" }, [
              _c("span", { staticClass: "inlineblock" }, [
                _c("span", { staticClass: "s-label" }, [_vm._v("领取：")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.isGet,
                        expression: "isGet"
                      }
                    ],
                    staticClass: "selectpicker  form-control selectpicker",
                    attrs: { title: "" },
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.isGet = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                        _vm.selectGet
                      ]
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [_vm._v("请选择")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "0" } }, [_vm._v("未领取")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "1" } }, [_vm._v("已领取")])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.labelShow,
                    expression: "labelShow"
                  }
                ],
                staticClass: "col-md-2 search-condition"
              },
              [
                _c("span", { staticClass: "inlineblock" }, [
                  _c("span", { staticClass: "s-label" }, [_vm._v("标签：")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.isLabel,
                          expression: "isLabel"
                        }
                      ],
                      staticClass: "selectpicker  form-control selectpicker",
                      attrs: { title: "" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.isLabel = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("请选择")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "0" } }, [
                        _vm._v("未贴完")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "1" } }, [
                        _vm._v("已贴完")
                      ])
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 search-condition" }, [
              _c("span", { staticClass: "s-sele" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.questionId,
                      expression: "questionId"
                    }
                  ],
                  attrs: { type: "text", placeholder: "请输入试题ID" },
                  domProps: { value: _vm.questionId },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.questionId = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("button", { on: { click: _vm.doSearch } }, [_vm._v("查询")])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _vm.loading ? _c("div", { staticClass: "loading-spinner" }) : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "m-sum" }, [
          _vm._v("总试题数："),
          _c("span", [_vm._v(_vm._s(_vm.paginationOption.count))]),
          _vm._v(" 道")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "data-list-wrapper" }, [
          _c(
            "table",
            { staticClass: "data-table" },
            [
              _vm._m(0),
              _vm._v(" "),
              _vm._l(_vm.questionList, function(question) {
                return [
                  _c(
                    "tr",
                    { staticClass: "t-body" },
                    [
                      _c("td", { staticClass: "b-number" }, [
                        _vm._v(_vm._s(question.number))
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "b-name js-q-id",
                          on: {
                            click: function($event) {
                              _vm.showQuestionPopout(question.questionId)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(question.questionId) +
                              "\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "b-state" }, [
                        _vm._v(_vm._s(question.subjectName))
                      ]),
                      _vm._v(" "),
                      question.isGet > 0
                        ? [
                            _c("td", { staticClass: "t-state b-receive" }, [
                              _vm._v(
                                "\n                                已领取\n                            "
                              )
                            ])
                          ]
                        : [
                            _c("td", { staticClass: "b-state" }, [
                              _vm._v(
                                "\n                                未领取\n                            "
                              )
                            ])
                          ],
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "t-time3",
                          staticStyle: {
                            color: "deepskyblue",
                            cursor: "pointer"
                          },
                          on: {
                            click: function($event) {
                              _vm.questionInfo(question.questionId)
                            }
                          }
                        },
                        [_vm._v("详情")]
                      )
                    ],
                    2
                  )
                ]
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _vm.paginationOption.count > 0
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
    ),
    _vm._v(" "),
    _c("div", { staticClass: "m-layer", staticStyle: { display: "none" } }, [
      _c("div", { staticClass: "q-detial-dialog" }, [
        _c("div", { staticClass: "title" }, [
          _vm._v("单题详情"),
          _c(
            "span",
            { staticClass: "icon-close", on: { click: _vm.closePopout } },
            [_vm._v("×")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "con-wrapper" }, [
          _c("div", { staticClass: "detial-box" }, [
            _c("div", {
              attrs: { id: "questionContent" },
              domProps: { innerHTML: _vm._s(_vm.detail.content) }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "hide-answer", on: { click: _vm.showAnswer } },
              [_vm._v(_vm._s(_vm.isValue))]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isShow,
                    expression: "isShow"
                  }
                ],
                staticClass: "paper-answer"
              },
              [
                _c("p", { staticClass: "answer" }, [
                  _vm._v("答案："),
                  _c("span", {
                    attrs: { id: "answerContent" },
                    domProps: { innerHTML: _vm._s(_vm.detail.answer) }
                  })
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "answer" }, [
                  _vm._v("解析："),
                  _c("span", {
                    attrs: { id: "analysisContent" },
                    domProps: { innerHTML: _vm._s(_vm.detail.analysis) }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "paper-id" },
              [
                _vm._m(1),
                _vm._v(" "),
                _vm._l(_vm.detail.tagContent, function(item) {
                  return _c("span", { staticClass: "paper-label" }, [
                    _c("span", [
                      _vm._v("教师"),
                      _c("a", { attrs: { id: "teacherA" } }, [
                        _vm._v("（" + _vm._s(item.user_name) + "）")
                      ]),
                      _vm._v("：")
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass: "p-label",
                        attrs: { id: "teacherAlabel" }
                      },
                      [_vm._v(_vm._s(item.tag_content))]
                    )
                  ])
                }),
                _vm._v(" "),
                _vm._l(_vm.detail.judgeTagContent, function(item) {
                  return _c("span", { staticClass: "paper-label judge" }, [
                    _c("span", [
                      _vm._v("判定人"),
                      _c("a", { attrs: { id: "judgeA" } }, [
                        _vm._v("（" + _vm._s(item.user_name) + "）")
                      ]),
                      _vm._v("：")
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "p-label", attrs: { id: "judgeAlabel" } },
                      [_vm._v(_vm._s(item.tag_content))]
                    )
                  ])
                })
              ],
              2
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "q-detial-dialog-ops" }, [
        _c("div", { staticClass: "title" }, [
          _vm._v("详情"),
          _c(
            "span",
            { staticClass: "icon-close", on: { click: _vm.closePopoutGet } },
            [_vm._v("×")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "con-wrapper" }, [
          _c(
            "div",
            { staticClass: "detial-box" },
            [
              _vm.questionUserInfo
                ? [
                    _vm._l(_vm.questionUserInfo, function(info) {
                      return [
                        _c("p", { staticClass: "list" }, [
                          _c("span", [
                            _vm._v("领取人："),
                            _c("i", [_vm._v(_vm._s(info.user_name))])
                          ]),
                          _vm._v(" "),
                          info.create_time
                            ? _c("span", [
                                _vm._v("领取时间："),
                                _c("i", [_vm._v(_vm._s(info.create_time))])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          info.tag_time
                            ? _c("span", [
                                _vm._v("贴标签时间："),
                                _c("i", [_vm._v(_vm._s(info.tag_time))])
                              ])
                            : _vm._e()
                        ])
                      ]
                    })
                  ]
                : [
                    _vm._v(
                      "\n                    暂时没有领取人\n                "
                    )
                  ]
            ],
            2
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "title" }, [
      _c("th", { staticClass: "t-number" }, [_vm._v("序号")]),
      _vm._v(" "),
      _c("th", { staticClass: "t-name" }, [_vm._v("题目ID")]),
      _vm._v(" "),
      _c("th", { staticClass: "t-state" }, [_vm._v("学科")]),
      _vm._v(" "),
      _c("th", { staticClass: "t-state" }, [_vm._v("任务状态")]),
      _vm._v(" "),
      _c("th", { staticClass: "t-time3" }, [_vm._v("操作")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "id-box" }, [
      _c("span", [_vm._v("题目ID ：")]),
      _c("span", { attrs: { id: "questionId" } })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-20c7d24f", module.exports)
  }
}

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(197)
  __webpack_require__(199)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(201)
/* template */
var __vue_template__ = __webpack_require__(202)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-20c7d24f"
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
Component.options.__file = "resources\\assets\\js\\page\\manage\\Question.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20c7d24f", Component.options)
  } else {
    hotAPI.reload("data-v-20c7d24f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});