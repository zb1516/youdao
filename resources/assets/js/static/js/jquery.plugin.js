/*!
 * Bootstrap-select v1.13.5 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2018 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

!
function(e, t) {
    void 0 === e && void 0 !== window && (e = window),
    "function" == typeof define && define.amd ? define(["jquery"],
    function(e) {
        return t(e)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
} (this,
function(e) { !
    function(G) {
        "use strict";
        "classList" in document.createElement("_") ||
        function(e) {
            if ("Element" in e) {
                var t = "classList",
                i = "prototype",
                n = e.Element[i],
                s = Object,
                o = function() {
                    var i = G(this);
                    return {
                        add: function(e) {
                            return i.addClass(e)
                        },
                        remove: function(e) {
                            return i.removeClass(e)
                        },
                        toggle: function(e, t) {
                            return i.toggleClass(e, t)
                        },
                        contains: function(e) {
                            return i.hasClass(e)
                        }
                    }
                };
                if (s.defineProperty) {
                    var l = {
                        get: o,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        s.defineProperty(n, t, l)
                    } catch(e) {
                        void 0 !== e.number && -2146823252 !== e.number || (l.enumerable = !1, s.defineProperty(n, t, l))
                    }
                } else s[i].__defineGetter__ && n.__defineGetter__(t, o)
            }
        } (window);
        var e, c, t, i = document.createElement("_");
        if (i.classList.toggle("c3", !1), i.classList.contains("c3")) {
            var n = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(e, t) {
                return 1 in arguments && !this.contains(e) == !t ? t: n.call(this, e)
            }
        }
        function S(e) {
            var t, i = [],
            n = e && e.options;
            if (e.multiple) for (var s = 0,
            o = n.length; s < o; s++)(t = n[s]).selected && i.push(t.value || t.text);
            else i = e.value;
            return i
        }
        i = null,
        String.prototype.startsWith || (e = function() {
            try {
                var e = {},
                t = Object.defineProperty,
                i = t(e, e, e) && t
            } catch(e) {}
            return i
        } (), c = {}.toString, t = function(e) {
            if (null == this) throw new TypeError;
            var t = String(this);
            if (e && "[object RegExp]" == c.call(e)) throw new TypeError;
            var i = t.length,
            n = String(e),
            s = n.length,
            o = 1 < arguments.length ? arguments[1] : void 0,
            l = o ? Number(o) : 0;
            l != l && (l = 0);
            var r = Math.min(Math.max(l, 0), i);
            if (i < s + r) return ! 1;
            for (var a = -1; ++a < s;) if (t.charCodeAt(r + a) != n.charCodeAt(a)) return ! 1;
            return ! 0
        },
        e ? e(String.prototype, "startsWith", {
            value: t,
            configurable: !0,
            writable: !0
        }) : String.prototype.startsWith = t),
        Object.keys || (Object.keys = function(e, t, i) {
            for (t in i = [], e) i.hasOwnProperty.call(e, t) && i.push(t);
            return i
        });
        var s = {
            useDefault: !1,
            _set: G.valHooks.select.set
        };
        G.valHooks.select.set = function(e, t) {
            return t && !s.useDefault && G(e).data("selected", !0),
            s._set.apply(this, arguments)
        };
        var y = null,
        o = function() {
            try {
                return new Event("change"),
                !0
            } catch(e) {
                return ! 1
            }
        } ();
        function $(e, t, i, n) {
            for (var s = ["content", "subtext", "tokens"], o = !1, l = 0; l < s.length; l++) {
                var r = s[l],
                a = e[r];
                if (a && (a = a.toString(), "content" === r && (a = a.replace(/<[^>]+>/g, "")), n && (a = m(a)), a = a.toUpperCase(), o = "contains" === i ? 0 <= a.indexOf(t) : a.startsWith(t))) break
            }
            return o
        }
        function z(e) {
            return parseInt(e, 10) || 0
        }
        G.fn.triggerNative = function(e) {
            var t, i = this[0];
            i.dispatchEvent ? (o ? t = new Event(e, {
                bubbles: !0
            }) : (t = document.createEvent("Event")).initEvent(e, !0, !1), i.dispatchEvent(t)) : i.fireEvent ? ((t = document.createEventObject()).eventType = e, i.fireEvent("on" + e, t)) : this.trigger(e)
        };
        var l = {
            "\xc0": "A",
            "\xc1": "A",
            "\xc2": "A",
            "\xc3": "A",
            "\xc4": "A",
            "\xc5": "A",
            "\xe0": "a",
            "\xe1": "a",
            "\xe2": "a",
            "\xe3": "a",
            "\xe4": "a",
            "\xe5": "a",
            "\xc7": "C",
            "\xe7": "c",
            "\xd0": "D",
            "\xf0": "d",
            "\xc8": "E",
            "\xc9": "E",
            "\xca": "E",
            "\xcb": "E",
            "\xe8": "e",
            "\xe9": "e",
            "\xea": "e",
            "\xeb": "e",
            "\xcc": "I",
            "\xcd": "I",
            "\xce": "I",
            "\xcf": "I",
            "\xec": "i",
            "\xed": "i",
            "\xee": "i",
            "\xef": "i",
            "\xd1": "N",
            "\xf1": "n",
            "\xd2": "O",
            "\xd3": "O",
            "\xd4": "O",
            "\xd5": "O",
            "\xd6": "O",
            "\xd8": "O",
            "\xf2": "o",
            "\xf3": "o",
            "\xf4": "o",
            "\xf5": "o",
            "\xf6": "o",
            "\xf8": "o",
            "\xd9": "U",
            "\xda": "U",
            "\xdb": "U",
            "\xdc": "U",
            "\xf9": "u",
            "\xfa": "u",
            "\xfb": "u",
            "\xfc": "u",
            "\xdd": "Y",
            "\xfd": "y",
            "\xff": "y",
            "\xc6": "Ae",
            "\xe6": "ae",
            "\xde": "Th",
            "\xfe": "th",
            "\xdf": "ss",
            "\u0100": "A",
            "\u0102": "A",
            "\u0104": "A",
            "\u0101": "a",
            "\u0103": "a",
            "\u0105": "a",
            "\u0106": "C",
            "\u0108": "C",
            "\u010a": "C",
            "\u010c": "C",
            "\u0107": "c",
            "\u0109": "c",
            "\u010b": "c",
            "\u010d": "c",
            "\u010e": "D",
            "\u0110": "D",
            "\u010f": "d",
            "\u0111": "d",
            "\u0112": "E",
            "\u0114": "E",
            "\u0116": "E",
            "\u0118": "E",
            "\u011a": "E",
            "\u0113": "e",
            "\u0115": "e",
            "\u0117": "e",
            "\u0119": "e",
            "\u011b": "e",
            "\u011c": "G",
            "\u011e": "G",
            "\u0120": "G",
            "\u0122": "G",
            "\u011d": "g",
            "\u011f": "g",
            "\u0121": "g",
            "\u0123": "g",
            "\u0124": "H",
            "\u0126": "H",
            "\u0125": "h",
            "\u0127": "h",
            "\u0128": "I",
            "\u012a": "I",
            "\u012c": "I",
            "\u012e": "I",
            "\u0130": "I",
            "\u0129": "i",
            "\u012b": "i",
            "\u012d": "i",
            "\u012f": "i",
            "\u0131": "i",
            "\u0134": "J",
            "\u0135": "j",
            "\u0136": "K",
            "\u0137": "k",
            "\u0138": "k",
            "\u0139": "L",
            "\u013b": "L",
            "\u013d": "L",
            "\u013f": "L",
            "\u0141": "L",
            "\u013a": "l",
            "\u013c": "l",
            "\u013e": "l",
            "\u0140": "l",
            "\u0142": "l",
            "\u0143": "N",
            "\u0145": "N",
            "\u0147": "N",
            "\u014a": "N",
            "\u0144": "n",
            "\u0146": "n",
            "\u0148": "n",
            "\u014b": "n",
            "\u014c": "O",
            "\u014e": "O",
            "\u0150": "O",
            "\u014d": "o",
            "\u014f": "o",
            "\u0151": "o",
            "\u0154": "R",
            "\u0156": "R",
            "\u0158": "R",
            "\u0155": "r",
            "\u0157": "r",
            "\u0159": "r",
            "\u015a": "S",
            "\u015c": "S",
            "\u015e": "S",
            "\u0160": "S",
            "\u015b": "s",
            "\u015d": "s",
            "\u015f": "s",
            "\u0161": "s",
            "\u0162": "T",
            "\u0164": "T",
            "\u0166": "T",
            "\u0163": "t",
            "\u0165": "t",
            "\u0167": "t",
            "\u0168": "U",
            "\u016a": "U",
            "\u016c": "U",
            "\u016e": "U",
            "\u0170": "U",
            "\u0172": "U",
            "\u0169": "u",
            "\u016b": "u",
            "\u016d": "u",
            "\u016f": "u",
            "\u0171": "u",
            "\u0173": "u",
            "\u0174": "W",
            "\u0175": "w",
            "\u0176": "Y",
            "\u0177": "y",
            "\u0178": "Y",
            "\u0179": "Z",
            "\u017b": "Z",
            "\u017d": "Z",
            "\u017a": "z",
            "\u017c": "z",
            "\u017e": "z",
            "\u0132": "IJ",
            "\u0133": "ij",
            "\u0152": "Oe",
            "\u0153": "oe",
            "\u0149": "'n",
            "\u017f": "s"
        },
        r = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        a = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]", "g");
        function d(e) {
            return l[e]
        }
        function m(e) {
            return (e = e.toString()) && e.replace(r, d).replace(a, "")
        }
        var h = function(t) {
            var i = function(e) {
                return t[e]
            },
            e = "(?:" + Object.keys(t).join("|") + ")",
            n = RegExp(e),
            s = RegExp(e, "g");
            return function(e) {
                return e = null == e ? "": "" + e,
                n.test(e) ? e.replace(s, i) : e
            }
        },
        q = h({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }),
        v = h({
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#x27;": "'",
            "&#x60;": "`"
        }),
        E = {
            32 : " ",
            48 : "0",
            49 : "1",
            50 : "2",
            51 : "3",
            52 : "4",
            53 : "5",
            54 : "6",
            55 : "7",
            56 : "8",
            57 : "9",
            59 : ";",
            65 : "A",
            66 : "B",
            67 : "C",
            68 : "D",
            69 : "E",
            70 : "F",
            71 : "G",
            72 : "H",
            73 : "I",
            74 : "J",
            75 : "K",
            76 : "L",
            77 : "M",
            78 : "N",
            79 : "O",
            80 : "P",
            81 : "Q",
            82 : "R",
            83 : "S",
            84 : "T",
            85 : "U",
            86 : "V",
            87 : "W",
            88 : "X",
            89 : "Y",
            90 : "Z",
            96 : "0",
            97 : "1",
            98 : "2",
            99 : "3",
            100 : "4",
            101 : "5",
            102 : "6",
            103 : "7",
            104 : "8",
            105 : "9"
        },
        C = 27,
        O = 13,
        T = 32,
        H = 9,
        D = 38,
        L = 40,
        K = {
            success: !1,
            major: "3"
        };
        try {
            K.full = (G.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split("."),
            K.major = K.full[0],
            K.success = !0
        } catch(e) {
            console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.", e)
        }
        var p = 0,
        A = ".bs.select",
        Y = {
            DISABLED: "disabled",
            DIVIDER: "divider",
            SHOW: "open",
            DROPUP: "dropup",
            MENU: "dropdown-menu",
            MENURIGHT: "dropdown-menu-right",
            MENULEFT: "dropdown-menu-left",
            BUTTONCLASS: "btn-default",
            POPOVERHEADER: "popover-title"
        },
        N = {
            MENU: "." + Y.MENU
        };
        "4" === K.major && (Y.DIVIDER = "dropdown-divider", Y.SHOW = "show", Y.BUTTONCLASS = "btn-light", Y.POPOVERHEADER = "popover-header");
        var P = new RegExp(D + "|" + L),
        R = new RegExp("^" + H + "$|" + C),
        u = function(e, t) {
            var i = this;
            s.useDefault || (G.valHooks.select.set = s._set, s.useDefault = !0),
            this.$element = G(e),
            this.$newElement = null,
            this.$button = null,
            this.$menu = null,
            this.options = t,
            this.selectpicker = {
                main: {
                    map: {
                        newIndex: {},
                        originalIndex: {}
                    }
                },
                current: {
                    map: {}
                },
                search: {
                    map: {}
                },
                view: {},
                keydown: {
                    keyHistory: "",
                    resetKeyHistory: {
                        start: function() {
                            return setTimeout(function() {
                                i.selectpicker.keydown.keyHistory = ""
                            },
                            800)
                        }
                    }
                }
            },
            null === this.options.title && (this.options.title = this.$element.attr("title"));
            var n = this.options.windowPadding;
            "number" == typeof n && (this.options.windowPadding = [n, n, n, n]),
            this.val = u.prototype.val,
            this.render = u.prototype.render,
            this.refresh = u.prototype.refresh,
            this.setStyle = u.prototype.setStyle,
            this.selectAll = u.prototype.selectAll,
            this.deselectAll = u.prototype.deselectAll,
            this.destroy = u.prototype.destroy,
            this.remove = u.prototype.remove,
            this.show = u.prototype.show,
            this.hide = u.prototype.hide,
            this.init()
        };
        function f(e) {
            var o, l = arguments,
            r = e;
            if ([].shift.apply(l), !K.success) {
                try {
                    K.full = (G.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split(".")
                } catch(e) {
                    K.full = u.BootstrapVersion.split(" ")[0].split(".")
                }
                K.major = K.full[0],
                K.success = !0,
                "4" === K.major && (Y.DIVIDER = "dropdown-divider", Y.SHOW = "show", Y.BUTTONCLASS = "btn-light", u.DEFAULTS.style = Y.BUTTONCLASS = "btn-light", Y.POPOVERHEADER = "popover-header")
            }
            var t = this.each(function() {
                var e = G(this);
                if (e.is("select")) {
                    var t = e.data("selectpicker"),
                    i = "object" == typeof r && r;
                    if (t) {
                        if (i) for (var n in i) i.hasOwnProperty(n) && (t.options[n] = i[n])
                    } else {
                        var s = G.extend({},
                        u.DEFAULTS, G.fn.selectpicker.defaults || {},
                        e.data(), i);
                        s.template = G.extend({},
                        u.DEFAULTS.template, G.fn.selectpicker.defaults ? G.fn.selectpicker.defaults.template: {},
                        e.data().template, i.template),
                        e.data("selectpicker", t = new u(this, s))
                    }
                    "string" == typeof r && (o = t[r] instanceof Function ? t[r].apply(t, l) : t.options[r])
                }
            });
            return void 0 !== o ? o: t
        }
        u.VERSION = "1.13.5",
        u.BootstrapVersion = K.major,
        u.DEFAULTS = {
            noneSelectedText: "没有选中",
            noneResultsText: "无匹配数据",
            countSelectedText: function(e, t) {
                return 1 == e ? "{0} item selected": "{0} items selected"
            },
            maxOptionsText: function(e, t) {
                return [1 == e ? "Limit reached ({n} item max)": "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)": "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: Y.BUTTONCLASS,
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: "glyphicon",
            tickIcon: "glyphicon-ok",
            showTick: !1,
            template: {
                caret: '<span class="caret"></span>'
            },
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1,
            windowPadding: 0,
            virtualScroll: 600,
            display: !1
        },
        "4" === K.major && (u.DEFAULTS.style = "btn-light", u.DEFAULTS.iconBase = "", u.DEFAULTS.tickIcon = "bs-ok-default"),
        u.prototype = {
            constructor: u,
            init: function() {
                var i = this,
                e = this.$element.attr("id");
                this.selectId = p++,
                this.$element.addClass("bs-select-hidden"),
                this.multiple = this.$element.prop("multiple"),
                this.autofocus = this.$element.prop("autofocus"),
                this.$newElement = this.createDropdown(),
                this.createLi(),
                this.$element.after(this.$newElement).prependTo(this.$newElement),
                this.$button = this.$newElement.children("button"),
                this.$menu = this.$newElement.children(N.MENU),
                this.$menuInner = this.$menu.children(".inner"),
                this.$searchbox = this.$menu.find("input"),
                this.$element.removeClass("bs-select-hidden"),
                !0 === this.options.dropdownAlignRight && this.$menu.addClass(Y.MENURIGHT),
                void 0 !== e && this.$button.attr("data-id", e),
                this.checkDisabled(),
                this.clickListener(),
                this.options.liveSearch && this.liveSearchListener(),
                this.render(),
                this.setStyle(),
                this.setWidth(),
                this.options.container ? this.selectPosition() : this.$element.on("hide" + A,
                function() {
                    if (i.isVirtual()) {
                        var e = i.$menuInner[0],
                        t = e.firstChild.cloneNode(!1);
                        e.replaceChild(t, e.firstChild),
                        e.scrollTop = 0
                    }
                }),
                this.$menu.data("this", this),
                this.$newElement.data("this", this),
                this.options.mobile && this.mobile(),
                this.$newElement.on({
                    "hide.bs.dropdown": function(e) {
                        i.$menuInner.attr("aria-expanded", !1),
                        i.$element.trigger("hide" + A, e)
                    },
                    "hidden.bs.dropdown": function(e) {
                        i.$element.trigger("hidden" + A, e)
                    },
                    "show.bs.dropdown": function(e) {
                        i.$menuInner.attr("aria-expanded", !0),
                        i.$element.trigger("show" + A, e)
                    },
                    "shown.bs.dropdown": function(e) {
                        i.$element.trigger("shown" + A, e)
                    }
                }),
                i.$element[0].hasAttribute("required") && this.$element.on("invalid",
                function() {
                    i.$button.addClass("bs-invalid"),
                    i.$element.on("shown" + A + ".invalid",
                    function() {
                        i.$element.val(i.$element.val()).off("shown" + A + ".invalid")
                    }).on("rendered" + A,
                    function() {
                        this.validity.valid && i.$button.removeClass("bs-invalid"),
                        i.$element.off("rendered" + A)
                    }),
                    i.$button.on("blur" + A,
                    function() {
                        i.$element.focus().blur(),
                        i.$button.off("blur" + A)
                    })
                }),
                setTimeout(function() {
                    i.$element.trigger("loaded" + A)
                })
            },
            createDropdown: function() {
                var e, t = this.multiple || this.options.showTick ? " show-tick": "",
                i = this.autofocus ? " autofocus": "",
                n = "",
                s = "",
                o = "",
                l = "";
                return this.options.header && (n = '<div class="' + Y.POPOVERHEADER + '"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>"),
                this.options.liveSearch && (s = '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "": ' placeholder="' + q(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>'),
                this.multiple && this.options.actionsBox && (o = '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' + Y.BUTTONCLASS + '">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn ' + Y.BUTTONCLASS + '">' + this.options.deselectAllText + "</button></div></div>"),
                this.multiple && this.options.doneButton && (l = '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' + Y.BUTTONCLASS + '">' + this.options.doneButtonText + "</button></div></div>"),
                e = '<div class="dropdown bootstrap-select' + t + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" ' + ("static" === this.options.display ? 'data-display="static"': "") + 'data-toggle="dropdown"' + i + ' role="button"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>' + ("4" === K.major ? "": '<span class="bs-caret">' + this.options.template.caret + "</span>") + '</button><div class="' + Y.MENU + " " + ("4" === K.major ? "": Y.SHOW) + '" role="combobox">' + n + s + o + '<div class="inner ' + Y.SHOW + '" role="listbox" aria-expanded="false" tabindex="-1"><ul class="' + Y.MENU + " inner " + ("4" === K.major ? Y.SHOW: "") + '"></ul></div>' + l + "</div></div>",
                G(e)
            },
            setPositionData: function() {
                this.selectpicker.view.canHighlight = [];
                for (var e = 0; e < this.selectpicker.current.data.length; e++) {
                    var t = this.selectpicker.current.data[e],
                    i = !0;
                    "divider" === t.type ? (i = !1, t.height = this.sizeInfo.dividerHeight) : "optgroup-label" === t.type ? (i = !1, t.height = this.sizeInfo.dropdownHeaderHeight) : t.height = this.sizeInfo.liHeight,
                    t.disabled && (i = !1),
                    this.selectpicker.view.canHighlight.push(i),
                    t.position = (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) + t.height
                }
            },
            isVirtual: function() {
                return ! 1 !== this.options.virtualScroll && this.selectpicker.main.elements.length >= this.options.virtualScroll || !0 === this.options.virtualScroll
            },
            createView: function(C, e) {
                e = e || 0;
                var O = this;
                this.selectpicker.current = C ? this.selectpicker.search: this.selectpicker.main;
                var z, T, H = [];
                function i(e, t) {
                    var i, n, s, o, l, r, a, c, d, h, p = O.selectpicker.current.elements.length,
                    u = [],
                    f = !0,
                    m = O.isVirtual();
                    O.selectpicker.view.scrollTop = e,
                    !0 === m && O.sizeInfo.hasScrollBar && O.$menu[0].offsetWidth > O.sizeInfo.totalMenuWidth && (O.sizeInfo.menuWidth = O.$menu[0].offsetWidth, O.sizeInfo.totalMenuWidth = O.sizeInfo.menuWidth + O.sizeInfo.scrollBarWidth, O.$menu.css("min-width", O.sizeInfo.menuWidth)),
                    i = Math.ceil(O.sizeInfo.menuInnerHeight / O.sizeInfo.liHeight * 1.5),
                    n = Math.round(p / i) || 1;
                    for (var v = 0; v < n; v++) {
                        var g = (v + 1) * i;
                        if (v === n - 1 && (g = p), u[v] = [v * i + (v ? 1 : 0), g], !p) break;
                        void 0 === l && e <= O.selectpicker.current.data[g - 1].position - O.sizeInfo.menuInnerHeight && (l = v)
                    }
                    if (void 0 === l && (l = 0), r = [O.selectpicker.view.position0, O.selectpicker.view.position1], s = Math.max(0, l - 1), o = Math.min(n - 1, l + 1), O.selectpicker.view.position0 = Math.max(0, u[s][0]) || 0, O.selectpicker.view.position1 = Math.min(p, u[o][1]) || 0, a = r[0] !== O.selectpicker.view.position0 || r[1] !== O.selectpicker.view.position1, void 0 !== O.activeIndex && (T = O.selectpicker.current.elements[O.selectpicker.current.map.newIndex[O.prevActiveIndex]], H = O.selectpicker.current.elements[O.selectpicker.current.map.newIndex[O.activeIndex]], z = O.selectpicker.current.elements[O.selectpicker.current.map.newIndex[O.selectedIndex]], t && (O.activeIndex !== O.selectedIndex && (H.classList.remove("active"), H.firstChild && H.firstChild.classList.remove("active")), O.activeIndex = void 0), O.activeIndex && O.activeIndex !== O.selectedIndex && z && z.length && (z.classList.remove("active"), z.firstChild && z.firstChild.classList.remove("active"))), void 0 !== O.prevActiveIndex && O.prevActiveIndex !== O.activeIndex && O.prevActiveIndex !== O.selectedIndex && T && T.length && (T.classList.remove("active"), T.firstChild && T.firstChild.classList.remove("active")), (t || a) && (c = O.selectpicker.view.visibleElements ? O.selectpicker.view.visibleElements.slice() : [], O.selectpicker.view.visibleElements = O.selectpicker.current.elements.slice(O.selectpicker.view.position0, O.selectpicker.view.position1), O.setOptionStatus(), (C || !1 === m && t) && (d = c, h = O.selectpicker.view.visibleElements, f = !(d.length === h.length && d.every(function(e, t) {
                        return e === h[t]
                    }))), (t || !0 === m) && f)) {
                        var b, w, I = O.$menuInner[0],
                        x = document.createDocumentFragment(),
                        k = I.firstChild.cloneNode(!1),
                        $ = !0 === m ? O.selectpicker.view.visibleElements: O.selectpicker.current.elements;
                        I.replaceChild(k, I.firstChild);
                        v = 0;
                        for (var E = $.length; v < E; v++) x.appendChild($[v]); ! 0 === m && (b = 0 === O.selectpicker.view.position0 ? 0 : O.selectpicker.current.data[O.selectpicker.view.position0 - 1].position, w = O.selectpicker.view.position1 > p - 1 ? 0 : O.selectpicker.current.data[p - 1].position - O.selectpicker.current.data[O.selectpicker.view.position1 - 1].position, I.firstChild.style.marginTop = b + "px", I.firstChild.style.marginBottom = w + "px"),
                        I.firstChild.appendChild(x)
                    }
                    if (O.prevActiveIndex = O.activeIndex, O.options.liveSearch) {
                        if (C && t) {
                            var S, y = 0;
                            O.selectpicker.view.canHighlight[y] || (y = 1 + O.selectpicker.view.canHighlight.slice(1).indexOf(!0)),
                            S = O.selectpicker.view.visibleElements[y],
                            O.selectpicker.view.currentActive && (O.selectpicker.view.currentActive.classList.remove("active"), O.selectpicker.view.currentActive.firstChild && O.selectpicker.view.currentActive.firstChild.classList.remove("active")),
                            S && (S.classList.add("active"), S.firstChild && S.firstChild.classList.add("active")),
                            O.activeIndex = O.selectpicker.current.map.originalIndex[y]
                        }
                    } else O.$menuInner.focus()
                }
                this.setPositionData(),
                i(e, !0),
                this.$menuInner.off("scroll.createView").on("scroll.createView",
                function(e, t) {
                    O.noScroll || i(this.scrollTop, t),
                    O.noScroll = !1
                }),
                G(window).off("resize" + A + "." + this.selectId + ".createView").on("resize" + A + "." + this.selectId + ".createView",
                function() {
                    O.$newElement.hasClass(Y.SHOW) && i(O.$menuInner[0].scrollTop)
                })
            },
            createLi: function() {
                var T, H = this,
                D = [],
                L = {},
                A = 0,
                N = 0,
                P = [],
                R = 0,
                W = 0,
                B = -1;
                this.selectpicker.view.titleOption || (this.selectpicker.view.titleOption = document.createElement("option"));
                var e, M = {
                    span: document.createElement("span"),
                    subtext: document.createElement("small"),
                    a: document.createElement("a"),
                    li: document.createElement("li"),
                    whitespace: document.createTextNode("\xa0")
                },
                U = document.createDocumentFragment(); (H.options.showTick || H.multiple) && ((e = M.span.cloneNode(!1)).className = H.options.iconBase + " " + H.options.tickIcon + " check-mark", M.a.appendChild(e)),
                M.a.setAttribute("role", "option"),
                M.subtext.className = "text-muted",
                M.text = M.span.cloneNode(!1),
                M.text.className = "text";
                var V = function(e, t, i) {
                    var n = M.li.cloneNode(!1);
                    return e && (1 === e.nodeType || 11 === e.nodeType ? n.appendChild(e) : n.innerHTML = e),
                    void 0 !== t && "" !== t && (n.className = t),
                    null != i && n.classList.add("optgroup-" + i),
                    n
                },
                j = function(e, t, i) {
                    var n = M.a.cloneNode(!0);
                    return e && (11 === e.nodeType ? n.appendChild(e) : n.insertAdjacentHTML("beforeend", e)),
                    void 0 !== t && "" !== t && (n.className = t),
                    "4" === K.major && n.classList.add("dropdown-item"),
                    i && n.setAttribute("style", i),
                    n
                },
                _ = function(e) {
                    var t, i, n = M.text.cloneNode(!1);
                    if (e.optionContent) n.innerHTML = e.optionContent;
                    else {
                        if (n.textContent = e.text, e.optionIcon) {
                            var s = M.whitespace.cloneNode(!1); (i = M.span.cloneNode(!1)).className = H.options.iconBase + " " + e.optionIcon,
                            U.appendChild(i),
                            U.appendChild(s)
                        }
                        e.optionSubtext && ((t = M.subtext.cloneNode(!1)).innerHTML = e.optionSubtext, n.appendChild(t))
                    }
                    return U.appendChild(n),
                    U
                };
                if (this.options.title && !this.multiple) {
                    B--;
                    var t = this.$element[0],
                    i = !1,
                    n = !this.selectpicker.view.titleOption.parentNode;
                    if (n) this.selectpicker.view.titleOption.className = "bs-title-option",
                    this.selectpicker.view.titleOption.value = "",
                    i = void 0 === G(t.options[t.selectedIndex]).attr("selected") && void 0 === this.$element.data("selected"); (n || 0 !== this.selectpicker.view.titleOption.index) && t.insertBefore(this.selectpicker.view.titleOption, t.firstChild),
                    i && (t.selectedIndex = 0)
                }
                var F = this.$element.find("option");
                F.each(function(e) {
                    var t = G(this);
                    if (B++, !t.hasClass("bs-title-option")) {
                        var i, n, s, o, l = t.data(),
                        r = this.className || "",
                        a = q(this.style.cssText),
                        c = l.content,
                        d = this.textContent,
                        h = l.tokens,
                        p = l.subtext,
                        u = l.icon,
                        f = t.parent(),
                        m = f[0],
                        v = "OPTGROUP" === m.tagName,
                        g = v && m.disabled,
                        b = this.disabled || g,
                        w = this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName,
                        I = f.data();
                        if (!0 === l.hidden || this.hidden || H.options.hideDisabled && (b || g)) return i = l.prevHiddenIndex,
                        t.next().data("prevHiddenIndex", void 0 !== i ? i: e),
                        B--,
                        L[e] = {
                            type: "hidden",
                            data: l
                        },
                        w || void 0 !== i && (o = F[i].previousElementSibling) && "OPTGROUP" === o.tagName && !o.disabled && (w = !0),
                        void(w && "divider" !== P[P.length - 1].type && (B++, D.push(V(!1, Y.DIVIDER, R + "div")), P.push({
                            type: "divider",
                            optID: R
                        })));
                        if (v && !0 !== l.divider) {
                            if (H.options.hideDisabled && b) {
                                if (void 0 === I.allOptionsDisabled) {
                                    var x = f.children();
                                    f.data("allOptionsDisabled", x.filter(":disabled").length === x.length)
                                }
                                if (f.data("allOptionsDisabled")) return void B--
                            }
                            var k = " " + m.className || "",
                            $ = this.previousElementSibling;
                            if (void 0 !== (i = l.prevHiddenIndex) && ($ = F[i].previousElementSibling), !$) {
                                R += 1;
                                var E = m.label,
                                S = q(E),
                                y = I.subtext,
                                C = I.icon;
                                0 !== e && 0 < D.length && (B++, D.push(V(!1, Y.DIVIDER, R + "div")), P.push({
                                    type: "divider",
                                    optID: R
                                })),
                                B++,
                                s = function(e) {
                                    var t, i, n = M.text.cloneNode(!1);
                                    if (n.innerHTML = e.labelEscaped, e.labelIcon) {
                                        var s = M.whitespace.cloneNode(!1); (i = M.span.cloneNode(!1)).className = H.options.iconBase + " " + e.labelIcon,
                                        U.appendChild(i),
                                        U.appendChild(s)
                                    }
                                    return e.labelSubtext && ((t = M.subtext.cloneNode(!1)).textContent = e.labelSubtext, n.appendChild(t)),
                                    U.appendChild(n),
                                    U
                                } ({
                                    labelEscaped: S,
                                    labelSubtext: y,
                                    labelIcon: C
                                }),
                                D.push(V(s, "dropdown-header" + k, R)),
                                P.push({
                                    content: S,
                                    subtext: y,
                                    type: "optgroup-label",
                                    optID: R
                                }),
                                W = B - 1
                            }
                            n = _({
                                text: d,
                                optionContent: c,
                                optionSubtext: p,
                                optionIcon: u
                            }),
                            D.push(V(j(n, "opt " + r + k, a), "", R)),
                            P.push({
                                content: c || d,
                                subtext: p,
                                tokens: h,
                                type: "option",
                                optID: R,
                                headerIndex: W,
                                lastIndex: W + m.childElementCount,
                                originalIndex: e,
                                data: l
                            }),
                            A++
                        } else ! 0 === l.divider ? (D.push(V(!1, Y.DIVIDER)), P.push({
                            type: "divider",
                            originalIndex: e,
                            data: l
                        })) : (!w && H.options.hideDisabled && void 0 !== (i = l.prevHiddenIndex) && (o = F[i].previousElementSibling) && "OPTGROUP" === o.tagName && !o.disabled && (w = !0), w && "divider" !== P[P.length - 1].type && (B++, D.push(V(!1, Y.DIVIDER, R + "div")), P.push({
                            type: "divider",
                            optID: R
                        })), n = _({
                            text: d,
                            optionContent: c,
                            optionSubtext: p,
                            optionIcon: u
                        }), D.push(V(j(n, r, a))), P.push({
                            content: c || d,
                            subtext: p,
                            tokens: h,
                            type: "option",
                            originalIndex: e,
                            data: l
                        }), A++);
                        H.selectpicker.main.map.newIndex[e] = B,
                        H.selectpicker.main.map.originalIndex[B] = e;
                        var O = P[P.length - 1];
                        O.disabled = b;
                        var z = 0;
                        O.content && (z += O.content.length),
                        O.subtext && (z += O.subtext.length),
                        u && (z += 1),
                        N < z && (N = z, T = D[D.length - 1])
                    }
                }),
                this.selectpicker.main.elements = D,
                this.selectpicker.main.data = P,
                this.selectpicker.main.hidden = L,
                this.selectpicker.current = this.selectpicker.main,
                this.selectpicker.view.widestOption = T,
                this.selectpicker.view.availableOptionsCount = A
            },
            findLis: function() {
                return this.$menuInner.find(".inner > li")
            },
            render: function() {
                var e = this,
                t = this.$element.find("option"),
                i = [],
                n = [];
                this.togglePlaceholder(),
                this.tabIndex();
                for (var s = 0,
                o = t.length; s < o; s++) {
                    var l = e.selectpicker.main.map.newIndex[s],
                    r = t[s],
                    a = e.selectpicker.main.data[l] || e.selectpicker.main.hidden[s];
                    if (r && r.selected && a && (i.push(r), n.length < 100 && "count" !== e.options.selectedTextFormat || 1 === i.length)) {
                        var c, d, h = a.data,
                        p = h.icon && e.options.showIcon ? '<i class="' + e.options.iconBase + " " + h.icon + '"></i> ': "";
                        c = e.options.showSubtext && h.subtext && !e.multiple ? ' <small class="text-muted">' + h.subtext + "</small>": "",
                        d = r.title ? r.title: h.content && e.options.showContent ? h.content.toString() : p + r.innerHTML.trim() + c,
                        n.push(d)
                    }
                }
                var u = this.multiple ? n.join(this.options.multipleSeparator) : n[0];
                if (50 < i.length && (u += "..."), this.multiple && -1 !== this.options.selectedTextFormat.indexOf("count")) {
                    var f = this.options.selectedTextFormat.split(">");
                    if (1 < f.length && i.length > f[1] || 1 === f.length && 2 <= i.length) {
                        var m = this.selectpicker.view.availableOptionsCount;
                        u = ("function" == typeof this.options.countSelectedText ? this.options.countSelectedText(i.length, m) : this.options.countSelectedText).replace("{0}", i.length.toString()).replace("{1}", m.toString())
                    }
                }
                null == this.options.title && (this.options.title = this.$element.attr("title")),
                "static" == this.options.selectedTextFormat && (u = this.options.title),
                u || (u = void 0 !== this.options.title ? this.options.title: this.options.noneSelectedText),
                this.$button[0].title = v(u.replace(/<[^>]*>?/g, "").trim()),
                this.$button.find(".filter-option-inner-inner")[0].innerHTML = u,
                this.$element.trigger("rendered" + A)
            },
            setStyle: function(e, t) {
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                var i = e || this.options.style;
                "add" == t ? this.$button.addClass(i) : "remove" == t ? this.$button.removeClass(i) : (this.$button.removeClass(this.options.style), this.$button.addClass(i))
            },
            liHeight: function(e) {
                if (e || !1 !== this.options.size && !this.sizeInfo) {
                    this.sizeInfo || (this.sizeInfo = {});
                    var t = document.createElement("div"),
                    i = document.createElement("div"),
                    n = document.createElement("div"),
                    s = document.createElement("ul"),
                    o = document.createElement("li"),
                    l = document.createElement("li"),
                    r = document.createElement("li"),
                    a = document.createElement("a"),
                    c = document.createElement("span"),
                    d = this.options.header && 0 < this.$menu.find("." + Y.POPOVERHEADER).length ? this.$menu.find("." + Y.POPOVERHEADER)[0].cloneNode(!0) : null,
                    h = this.options.liveSearch ? document.createElement("div") : null,
                    p = this.options.actionsBox && this.multiple && 0 < this.$menu.find(".bs-actionsbox").length ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                    u = this.options.doneButton && this.multiple && 0 < this.$menu.find(".bs-donebutton").length ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null,
                    f = this.$element.find("option")[0];
                    if (this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth, c.className = "text", a.className = "dropdown-item " + (f ? f.className: ""), t.className = this.$menu[0].parentNode.className + " " + Y.SHOW, t.style.width = this.sizeInfo.selectWidth + "px", "auto" === this.options.width && (i.style.minWidth = 0), i.className = Y.MENU + " " + Y.SHOW, n.className = "inner " + Y.SHOW, s.className = Y.MENU + " inner " + ("4" === K.major ? Y.SHOW: ""), o.className = Y.DIVIDER, l.className = "dropdown-header", c.appendChild(document.createTextNode("\u200b")), a.appendChild(c), r.appendChild(a), l.appendChild(c.cloneNode(!0)), this.selectpicker.view.widestOption && s.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)), s.appendChild(r), s.appendChild(o), s.appendChild(l), d && i.appendChild(d), h) {
                        var m = document.createElement("input");
                        h.className = "bs-searchbox",
                        m.className = "form-control",
                        h.appendChild(m),
                        i.appendChild(h)
                    }
                    p && i.appendChild(p),
                    n.appendChild(s),
                    i.appendChild(n),
                    u && i.appendChild(u),
                    t.appendChild(i),
                    document.body.appendChild(t);
                    var v, g = a.offsetHeight,
                    b = l ? l.offsetHeight: 0,
                    w = d ? d.offsetHeight: 0,
                    I = h ? h.offsetHeight: 0,
                    x = p ? p.offsetHeight: 0,
                    k = u ? u.offsetHeight: 0,
                    $ = G(o).outerHeight(!0),
                    E = !!window.getComputedStyle && window.getComputedStyle(i),
                    S = i.offsetWidth,
                    y = E ? null: G(i),
                    C = {
                        vert: z(E ? E.paddingTop: y.css("paddingTop")) + z(E ? E.paddingBottom: y.css("paddingBottom")) + z(E ? E.borderTopWidth: y.css("borderTopWidth")) + z(E ? E.borderBottomWidth: y.css("borderBottomWidth")),
                        horiz: z(E ? E.paddingLeft: y.css("paddingLeft")) + z(E ? E.paddingRight: y.css("paddingRight")) + z(E ? E.borderLeftWidth: y.css("borderLeftWidth")) + z(E ? E.borderRightWidth: y.css("borderRightWidth"))
                    },
                    O = {
                        vert: C.vert + z(E ? E.marginTop: y.css("marginTop")) + z(E ? E.marginBottom: y.css("marginBottom")) + 2,
                        horiz: C.horiz + z(E ? E.marginLeft: y.css("marginLeft")) + z(E ? E.marginRight: y.css("marginRight")) + 2
                    };
                    n.style.overflowY = "scroll",
                    v = i.offsetWidth - S,
                    document.body.removeChild(t),
                    this.sizeInfo.liHeight = g,
                    this.sizeInfo.dropdownHeaderHeight = b,
                    this.sizeInfo.headerHeight = w,
                    this.sizeInfo.searchHeight = I,
                    this.sizeInfo.actionsHeight = x,
                    this.sizeInfo.doneButtonHeight = k,
                    this.sizeInfo.dividerHeight = $,
                    this.sizeInfo.menuPadding = C,
                    this.sizeInfo.menuExtras = O,
                    this.sizeInfo.menuWidth = S,
                    this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth,
                    this.sizeInfo.scrollBarWidth = v,
                    this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight,
                    this.setPositionData()
                }
            },
            getSelectPosition: function() {
                var e, t = G(window),
                i = this.$newElement.offset(),
                n = G(this.options.container);
                this.options.container && !n.is("body") ? ((e = n.offset()).top += parseInt(n.css("borderTopWidth")), e.left += parseInt(n.css("borderLeftWidth"))) : e = {
                    top: 0,
                    left: 0
                };
                var s = this.options.windowPadding;
                this.sizeInfo.selectOffsetTop = i.top - e.top - t.scrollTop(),
                this.sizeInfo.selectOffsetBot = t.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - e.top - s[2],
                this.sizeInfo.selectOffsetLeft = i.left - e.left - t.scrollLeft(),
                this.sizeInfo.selectOffsetRight = t.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - e.left - s[1],
                this.sizeInfo.selectOffsetTop -= s[0],
                this.sizeInfo.selectOffsetLeft -= s[3]
            },
            setMenuSize: function(e) {
                this.getSelectPosition();
                var t, i, n, s, o, l, r, a = this.sizeInfo.selectWidth,
                c = this.sizeInfo.liHeight,
                d = this.sizeInfo.headerHeight,
                h = this.sizeInfo.searchHeight,
                p = this.sizeInfo.actionsHeight,
                u = this.sizeInfo.doneButtonHeight,
                f = this.sizeInfo.dividerHeight,
                m = this.sizeInfo.menuPadding,
                v = 0;
                if (this.options.dropupAuto && (r = c * this.selectpicker.current.elements.length + m.vert, this.$newElement.toggleClass(Y.DROPUP, this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && r + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot)), "auto" === this.options.size) s = 3 < this.selectpicker.current.elements.length ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2 : 0,
                i = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert,
                n = s + d + h + p + u,
                l = Math.max(s - m.vert, 0),
                this.$newElement.hasClass(Y.DROPUP) && (i = this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert),
                t = (o = i) - d - h - p - u - m.vert;
                else if (this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size) {
                    for (var g = 0; g < this.options.size; g++)"divider" === this.selectpicker.current.data[g].type && v++;
                    t = (i = c * this.options.size + v * f + m.vert) - m.vert,
                    o = i + d + h + p + u,
                    n = l = ""
                }
                "auto" === this.options.dropdownAlignRight && this.$menu.toggleClass(Y.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.sizeInfo.totalMenuWidth - a),
                this.$menu.css({
                    "max-height": o + "px",
                    overflow: "hidden",
                    "min-height": n + "px"
                }),
                this.$menuInner.css({
                    "max-height": t + "px",
                    "overflow-y": "auto",
                    "min-height": l + "px"
                }),
                this.sizeInfo.menuInnerHeight = t,
                this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight && (this.sizeInfo.hasScrollBar = !0, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth, this.$menu.css("min-width", this.sizeInfo.totalMenuWidth)),
                this.dropdown && this.dropdown._popper && this.dropdown._popper.update()
            },
            setSize: function(e) {
                if (this.liHeight(e), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) {
                    var t, i = this,
                    n = G(window),
                    s = 0;
                    this.setMenuSize(),
                    "auto" === this.options.size ? (this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize",
                    function() {
                        return i.setMenuSize()
                    }), n.off("resize" + A + "." + this.selectId + ".setMenuSize scroll" + A + "." + this.selectId + ".setMenuSize").on("resize" + A + "." + this.selectId + ".setMenuSize scroll" + A + "." + this.selectId + ".setMenuSize",
                    function() {
                        return i.setMenuSize()
                    })) : this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size && (this.$searchbox.off("input.setMenuSize propertychange.setMenuSize"), n.off("resize" + A + "." + this.selectId + ".setMenuSize scroll" + A + "." + this.selectId + ".setMenuSize")),
                    e ? s = this.$menuInner[0].scrollTop: i.multiple || "number" == typeof(t = i.selectpicker.main.map.newIndex[i.$element[0].selectedIndex]) && !1 !== i.options.size && (s = (s = i.sizeInfo.liHeight * t) - i.sizeInfo.menuInnerHeight / 2 + i.sizeInfo.liHeight / 2),
                    i.createView(!1, s)
                }
            },
            setWidth: function() {
                var i = this;
                "auto" === this.options.width ? requestAnimationFrame(function() {
                    i.$menu.css("min-width", "0"),
                    i.liHeight(),
                    i.setMenuSize();
                    var e = i.$newElement.clone().appendTo("body"),
                    t = e.css("width", "auto").children("button").outerWidth();
                    e.remove(),
                    i.sizeInfo.selectWidth = Math.max(i.sizeInfo.totalMenuWidth, t),
                    i.$newElement.css("width", i.sizeInfo.selectWidth + "px")
                }) : "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", "")),
                this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
            },
            selectPosition: function() {
                this.$bsContainer = G('<div class="bs-container" />');
                var n, s, o, l = this,
                r = G(this.options.container),
                e = function(e) {
                    var t = {},
                    i = l.options.display || !!G.fn.dropdown.Constructor.Default && G.fn.dropdown.Constructor.Default.display;
                    l.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass(Y.DROPUP, e.hasClass(Y.DROPUP)),
                    n = e.offset(),
                    r.is("body") ? s = {
                        top: 0,
                        left: 0
                    }: ((s = r.offset()).top += parseInt(r.css("borderTopWidth")) - r.scrollTop(), s.left += parseInt(r.css("borderLeftWidth")) - r.scrollLeft()),
                    o = e.hasClass(Y.DROPUP) ? 0 : e[0].offsetHeight,
                    (K.major < 4 || "static" === i) && (t.top = n.top - s.top + o, t.left = n.left - s.left),
                    t.width = e[0].offsetWidth,
                    l.$bsContainer.css(t)
                };
                this.$button.on("click.bs.dropdown.data-api",
                function() {
                    l.isDisabled() || (e(l.$newElement), l.$bsContainer.appendTo(l.options.container).toggleClass(Y.SHOW, !l.$button.hasClass(Y.SHOW)).append(l.$menu))
                }),
                G(window).off("resize" + A + "." + this.selectId + " scroll" + A + "." + this.selectId).on("resize" + A + "." + this.selectId + " scroll" + A + "." + this.selectId,
                function() {
                    l.$newElement.hasClass(Y.SHOW) && e(l.$newElement)
                }),
                this.$element.on("hide" + A,
                function() {
                    l.$menu.data("height", l.$menu.height()),
                    l.$bsContainer.detach()
                })
            },
            setOptionStatus: function() {
                var e = this,
                t = this.$element.find("option");
                if (e.noScroll = !1, e.selectpicker.view.visibleElements && e.selectpicker.view.visibleElements.length) for (var i = 0; i < e.selectpicker.view.visibleElements.length; i++) {
                    var n = e.selectpicker.current.map.originalIndex[i + e.selectpicker.view.position0],
                    s = t[n];
                    if (s) {
                        var o = this.selectpicker.main.map.newIndex[n],
                        l = this.selectpicker.main.elements[o];
                        e.setDisabled(n, s.disabled || "OPTGROUP" === s.parentNode.tagName && s.parentNode.disabled, o, l),
                        e.setSelected(n, s.selected, o, l)
                    }
                }
            },
            setSelected: function(e, t, i, n) {
                var s, o, l, r = void 0 !== this.activeIndex,
                a = this.activeIndex === e || t && !this.multiple && !r;
                i || (i = this.selectpicker.main.map.newIndex[e]),
                n || (n = this.selectpicker.main.elements[i]),
                l = n.firstChild,
                t && (this.selectedIndex = e),
                n.classList.toggle("selected", t),
                n.classList.toggle("active", a),
                a && (this.selectpicker.view.currentActive = n, this.activeIndex = e),
                l && (l.classList.toggle("selected", t), l.classList.toggle("active", a), l.setAttribute("aria-selected", t)),
                a || !r && t && void 0 !== this.prevActiveIndex && (s = this.selectpicker.main.map.newIndex[this.prevActiveIndex], (o = this.selectpicker.main.elements[s]).classList.remove("active"), o.firstChild && o.firstChild.classList.remove("active"))
            },
            setDisabled: function(e, t, i, n) {
                var s;
                i || (i = this.selectpicker.main.map.newIndex[e]),
                n || (n = this.selectpicker.main.elements[i]),
                s = n.firstChild,
                n.classList.toggle(Y.DISABLED, t),
                s && ("4" === K.major && s.classList.toggle(Y.DISABLED, t), s.setAttribute("aria-disabled", t), t ? s.setAttribute("tabindex", -1) : s.setAttribute("tabindex", 0))
            },
            isDisabled: function() {
                return this.$element[0].disabled
            },
            checkDisabled: function() {
                var e = this;
                this.isDisabled() ? (this.$newElement.addClass(Y.DISABLED), this.$button.addClass(Y.DISABLED).attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button.hasClass(Y.DISABLED) && (this.$newElement.removeClass(Y.DISABLED), this.$button.removeClass(Y.DISABLED).attr("aria-disabled", !1)), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")),
                this.$button.click(function() {
                    return ! e.isDisabled()
                })
            },
            togglePlaceholder: function() {
                var e = this.$element[0],
                t = e.selectedIndex,
                i = -1 === t;
                i || e.options[t].value || (i = !0),
                this.$button.toggleClass("bs-placeholder", i)
            },
            tabIndex: function() {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))),
                this.$element.attr("tabindex", -98)
            },
            clickListener: function() {
                var E = this,
                t = G(document);
                function e() {
                    E.options.liveSearch ? E.$searchbox.focus() : E.$menuInner.focus()
                }
                function i() {
                    E.dropdown && E.dropdown._popper && E.dropdown._popper.state.isCreated ? e() : requestAnimationFrame(i)
                }
                t.data("spaceSelect", !1),
                this.$button.on("keyup",
                function(e) { / (32) / .test(e.keyCode.toString(10)) && t.data("spaceSelect") && (e.preventDefault(), t.data("spaceSelect", !1))
                }),
                this.$newElement.on("show.bs.dropdown",
                function() {
                    3 < K.major && !E.dropdown && (E.dropdown = E.$button.data("bs.dropdown"), E.dropdown._menu = E.$menu[0])
                }),
                this.$button.on("click.bs.dropdown.data-api",
                function() {
                    E.$newElement.hasClass(Y.SHOW) || E.setSize()
                }),
                this.$element.on("shown" + A,
                function() {
                    E.$menuInner[0].scrollTop !== E.selectpicker.view.scrollTop && (E.$menuInner[0].scrollTop = E.selectpicker.view.scrollTop),
                    3 < K.major ? requestAnimationFrame(i) : e()
                }),
                this.$menuInner.on("click", "li a",
                function(e, t) {
                    var i = G(this),
                    n = E.isVirtual() ? E.selectpicker.view.position0: 0,
                    s = E.selectpicker.current.map.originalIndex[i.parent().index() + n],
                    o = S(E.$element[0]),
                    l = E.$element.prop("selectedIndex"),
                    r = !0;
                    if (E.multiple && 1 !== E.options.maxOptions && e.stopPropagation(), e.preventDefault(), !E.isDisabled() && !i.parent().hasClass(Y.DISABLED)) {
                        var a = E.$element.find("option"),
                        c = a.eq(s),
                        d = c.prop("selected"),
                        h = c.parent("optgroup"),
                        p = h.find("option"),
                        u = E.options.maxOptions,
                        f = h.data("maxOptions") || !1;
                        if (s === E.activeIndex && (t = !0), t || (E.prevActiveIndex = E.activeIndex, E.activeIndex = void 0), E.multiple) {
                            if (c.prop("selected", !d), E.setSelected(s, !d), i.blur(), !1 !== u || !1 !== f) {
                                var m = u < a.filter(":selected").length,
                                v = f < h.find("option:selected").length;
                                if (u && m || f && v) if (u && 1 == u) {
                                    a.prop("selected", !1),
                                    c.prop("selected", !0);
                                    for (var g = 0; g < a.length; g++) E.setSelected(g, !1);
                                    E.setSelected(s, !0)
                                } else if (f && 1 == f) {
                                    h.find("option:selected").prop("selected", !1),
                                    c.prop("selected", !0);
                                    for (g = 0; g < p.length; g++) {
                                        var b = p[g];
                                        E.setSelected(a.index(b), !1)
                                    }
                                    E.setSelected(s, !0)
                                } else {
                                    var w = "string" == typeof E.options.maxOptionsText ? [E.options.maxOptionsText, E.options.maxOptionsText] : E.options.maxOptionsText,
                                    I = "function" == typeof w ? w(u, f) : w,
                                    x = I[0].replace("{n}", u),
                                    k = I[1].replace("{n}", f),
                                    $ = G('<div class="notify"></div>');
                                    I[2] && (x = x.replace("{var}", I[2][1 < u ? 0 : 1]), k = k.replace("{var}", I[2][1 < f ? 0 : 1])),
                                    c.prop("selected", !1),
                                    E.$menu.append($),
                                    u && m && ($.append(G("<div>" + x + "</div>")), r = !1, E.$element.trigger("maxReached" + A)),
                                    f && v && ($.append(G("<div>" + k + "</div>")), r = !1, E.$element.trigger("maxReachedGrp" + A)),
                                    setTimeout(function() {
                                        E.setSelected(s, !1)
                                    },
                                    10),
                                    $.delay(750).fadeOut(300,
                                    function() {
                                        G(this).remove()
                                    })
                                }
                            }
                        } else a.prop("selected", !1),
                        c.prop("selected", !0),
                        E.setSelected(s, !0); ! E.multiple || E.multiple && 1 === E.options.maxOptions ? E.$button.focus() : E.options.liveSearch && E.$searchbox.focus(),
                        r && (o != S(E.$element[0]) && E.multiple || l != E.$element.prop("selectedIndex") && !E.multiple) && (y = [s, c.prop("selected"), o], E.$element.triggerNative("change"))
                    }
                }),
                this.$menu.on("click", "li." + Y.DISABLED + " a, ." + Y.POPOVERHEADER + ", ." + Y.POPOVERHEADER + " :not(.close)",
                function(e) {
                    e.currentTarget == this && (e.preventDefault(), e.stopPropagation(), E.options.liveSearch && !G(e.target).hasClass("close") ? E.$searchbox.focus() : E.$button.focus())
                }),
                this.$menuInner.on("click", ".divider, .dropdown-header",
                function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    E.options.liveSearch ? E.$searchbox.focus() : E.$button.focus()
                }),
                this.$menu.on("click", "." + Y.POPOVERHEADER + " .close",
                function() {
                    E.$button.click()
                }),
                this.$searchbox.on("click",
                function(e) {
                    e.stopPropagation()
                }),
                this.$menu.on("click", ".actions-btn",
                function(e) {
                    E.options.liveSearch ? E.$searchbox.focus() : E.$button.focus(),
                    e.preventDefault(),
                    e.stopPropagation(),
                    G(this).hasClass("bs-select-all") ? E.selectAll() : E.deselectAll()
                }),
                this.$element.on({
                    change: function() {
                        E.render(),
                        E.$element.trigger("changed" + A, y),
                        y = null
                    },
                    focus: function() {
                        E.options.mobile || E.$button.focus()
                    }
                })
            },
            liveSearchListener: function() {
                var u = this,
                f = document.createElement("li");
                this.$button.on("click.bs.dropdown.data-api",
                function() {
                    u.$searchbox.val() && u.$searchbox.val("")
                }),
                this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api",
                function(e) {
                    e.stopPropagation()
                }),
                this.$searchbox.on("input propertychange",
                function() {
                    var e = u.$searchbox.val();
                    if (u.selectpicker.search.map.newIndex = {},
                    u.selectpicker.search.map.originalIndex = {},
                    u.selectpicker.search.elements = [], u.selectpicker.search.data = [], e) {
                        var t = [],
                        i = e.toUpperCase(),
                        n = {},
                        s = [],
                        o = u._searchStyle(),
                        l = u.options.liveSearchNormalize;
                        l && (i = m(i)),
                        u._$lisSelected = u.$menuInner.find(".selected");
                        for (var r = 0; r < u.selectpicker.main.data.length; r++) {
                            var a = u.selectpicker.main.data[r];
                            n[r] || (n[r] = $(a, i, o, l)),
                            n[r] && void 0 !== a.headerIndex && -1 === s.indexOf(a.headerIndex) && (0 < a.headerIndex && (n[a.headerIndex - 1] = !0, s.push(a.headerIndex - 1)), n[a.headerIndex] = !0, s.push(a.headerIndex), n[a.lastIndex + 1] = !0),
                            n[r] && "optgroup-label" !== a.type && s.push(r)
                        }
                        r = 0;
                        for (var c = s.length; r < c; r++) {
                            var d = s[r],
                            h = s[r - 1],
                            p = (a = u.selectpicker.main.data[d], u.selectpicker.main.data[h]); ("divider" !== a.type || "divider" === a.type && p && "divider" !== p.type && c - 1 !== r) && (u.selectpicker.search.data.push(a), t.push(u.selectpicker.main.elements[d]), a.hasOwnProperty("originalIndex") && (u.selectpicker.search.map.newIndex[a.originalIndex] = t.length - 1, u.selectpicker.search.map.originalIndex[t.length - 1] = a.originalIndex))
                        }
                        u.activeIndex = void 0,
                        u.noScroll = !0,
                        u.$menuInner.scrollTop(0),
                        u.selectpicker.search.elements = t,
                        u.createView(!0),
                        t.length || (f.className = "no-results", f.innerHTML = u.options.noneResultsText.replace("{0}", '"' + q(e) + '"'), u.$menuInner[0].firstChild.appendChild(f))
                    } else u.$menuInner.scrollTop(0),
                    u.createView(!1)
                })
            },
            _searchStyle: function() {
                return this.options.liveSearchStyle || "contains"
            },
            val: function(e) {
                return void 0 !== e ? (this.$element.val(e).triggerNative("change"), this.$element) : this.$element.val()
            },
            changeAll: function(e) {
                if (this.multiple) {
                    void 0 === e && (e = !0);
                    var t = this.$element.find("option"),
                    i = 0,
                    n = 0,
                    s = S(this.$element[0]);
                    this.$element.addClass("bs-select-hidden");
                    for (var o = 0; o < this.selectpicker.current.elements.length; o++) {
                        var l = this.selectpicker.current.data[o],
                        r = t[this.selectpicker.current.map.originalIndex[o]];
                        r && !r.disabled && "divider" !== l.type && (r.selected && i++, r.selected = e, r.selected && n++)
                    }
                    this.$element.removeClass("bs-select-hidden"),
                    i !== n && (this.setOptionStatus(), this.togglePlaceholder(), y = [null, null, s], this.$element.triggerNative("change"))
                }
            },
            selectAll: function() {
                return this.changeAll(!0)
            },
            deselectAll: function() {
                return this.changeAll(!1)
            },
            toggle: function(e) { (e = e || window.event) && e.stopPropagation(),
                this.$button.trigger("click.bs.dropdown.data-api")
            },
            keydown: function(e) {
                var t, i, n, s, o, l = G(this),
                r = l.hasClass("dropdown-toggle"),
                a = (r ? l.closest(".dropdown") : l.closest(N.MENU)).data("this"),
                c = a.findLis(),
                d = !1,
                h = e.which === H && !r && !a.options.selectOnTab,
                p = P.test(e.which) || h,
                u = a.$menuInner[0].scrollTop,
                f = a.isVirtual(),
                m = !0 === f ? a.selectpicker.view.position0: 0;
                if (! (i = a.$newElement.hasClass(Y.SHOW)) && (p || 48 <= e.which && e.which <= 57 || 96 <= e.which && e.which <= 105 || 65 <= e.which && e.which <= 90) && a.$button.trigger("click.bs.dropdown.data-api"), e.which === C && i && (e.preventDefault(), a.$button.trigger("click.bs.dropdown.data-api").focus()), p) {
                    if (!c.length) return;
                    void 0 === (t = !0 === f ? c.index(c.filter(".active")) : a.selectpicker.current.map.newIndex[a.activeIndex]) && (t = -1),
                    -1 !== t && ((n = a.selectpicker.current.elements[t + m]).classList.remove("active"), n.firstChild && n.firstChild.classList.remove("active")),
                    e.which === D ? ( - 1 !== t && t--, t + m < 0 && (t += c.length), a.selectpicker.view.canHighlight[t + m] || -1 === (t = a.selectpicker.view.canHighlight.slice(0, t + m).lastIndexOf(!0) - m) && (t = c.length - 1)) : (e.which === L || h) && (++t + m >= a.selectpicker.view.canHighlight.length && (t = 0), a.selectpicker.view.canHighlight[t + m] || (t = t + 1 + a.selectpicker.view.canHighlight.slice(t + m + 1).indexOf(!0))),
                    e.preventDefault();
                    var v = m + t;
                    e.which === D ? 0 === m && t === c.length - 1 ? (a.$menuInner[0].scrollTop = a.$menuInner[0].scrollHeight, v = a.selectpicker.current.elements.length - 1) : d = (o = (s = a.selectpicker.current.data[v]).position - s.height) < u: (e.which === L || h) && (0 === t ? v = a.$menuInner[0].scrollTop = 0 : d = u < (o = (s = a.selectpicker.current.data[v]).position - a.sizeInfo.menuInnerHeight)),
                    (n = a.selectpicker.current.elements[v]) && (n.classList.add("active"), n.firstChild && n.firstChild.classList.add("active")),
                    a.activeIndex = a.selectpicker.current.map.originalIndex[v],
                    a.selectpicker.view.currentActive = n,
                    d && (a.$menuInner[0].scrollTop = o),
                    a.options.liveSearch ? a.$searchbox.focus() : l.focus()
                } else if (!l.is("input") && !R.test(e.which) || e.which === T && a.selectpicker.keydown.keyHistory) {
                    var g, b, w = [];
                    e.preventDefault(),
                    a.selectpicker.keydown.keyHistory += E[e.which],
                    a.selectpicker.keydown.resetKeyHistory.cancel && clearTimeout(a.selectpicker.keydown.resetKeyHistory.cancel),
                    a.selectpicker.keydown.resetKeyHistory.cancel = a.selectpicker.keydown.resetKeyHistory.start(),
                    b = a.selectpicker.keydown.keyHistory,
                    /^(.)\1+$/.test(b) && (b = b.charAt(0));
                    for (var I = 0; I < a.selectpicker.current.data.length; I++) {
                        var x = a.selectpicker.current.data[I];
                        $(x, b, "startsWith", !0) && a.selectpicker.view.canHighlight[I] && (x.index = I, w.push(x.originalIndex))
                    }
                    if (w.length) {
                        var k = 0;
                        c.removeClass("active").find("a").removeClass("active"),
                        1 === b.length && ( - 1 === (k = w.indexOf(a.activeIndex)) || k === w.length - 1 ? k = 0 : k++),
                        g = a.selectpicker.current.map.newIndex[w[k]],
                        0 < u - (s = a.selectpicker.current.data[g]).position ? (o = s.position - s.height, d = !0) : (o = s.position - a.sizeInfo.menuInnerHeight, d = s.position > u + a.sizeInfo.menuInnerHeight),
                        (n = a.selectpicker.current.elements[g]).classList.add("active"),
                        n.firstChild && n.firstChild.classList.add("active"),
                        a.activeIndex = w[k],
                        n.firstChild.focus(),
                        d && (a.$menuInner[0].scrollTop = o),
                        l.focus()
                    }
                }
                i && (e.which === T && !a.selectpicker.keydown.keyHistory || e.which === O || e.which === H && a.options.selectOnTab) && (e.which !== T && e.preventDefault(), a.options.liveSearch && e.which === T || (a.$menuInner.find(".active a").trigger("click", !0), l.focus(), a.options.liveSearch || (e.preventDefault(), G(document).data("spaceSelect", !0))))
            },
            mobile: function() {
                this.$element.addClass("mobile-device")
            },
            refresh: function() {
                var e = G.extend({},
                this.options, this.$element.data());
                this.options = e,
                this.selectpicker.main.map.newIndex = {},
                this.selectpicker.main.map.originalIndex = {},
                this.createLi(),
                this.checkDisabled(),
                this.render(),
                this.setStyle(),
                this.setWidth(),
                this.setSize(!0),
                this.$element.trigger("refreshed" + A)
            },
            hide: function() {
                this.$newElement.hide()
            },
            show: function() {
                this.$newElement.show()
            },
            remove: function() {
                this.$newElement.remove(),
                this.$element.remove()
            },
            destroy: function() {
                this.$newElement.before(this.$element).remove(),
                this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(),
                this.$element.off(A).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"),
                G(window).off(A + "." + this.selectId)
            }
        };
        var g = G.fn.selectpicker;
        G.fn.selectpicker = f,
        G.fn.selectpicker.Constructor = u,
        G.fn.selectpicker.noConflict = function() {
            return G.fn.selectpicker = g,
            this
        },
        G(document).off("keydown.bs.dropdown.data-api").on("keydown" + A, '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', u.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',
        function(e) {
            e.stopPropagation()
        }),
        G(window).on("load" + A + ".data-api",
        function() {
            G(".selectpicker").each(function() {
                var e = G(this);
                f.call(e, e.data())
            })
        })
    } (e)
});
//# sourceMappingURL=bootstrap-select.js.map

// !
// function(e, t) {
//     "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
// } (this,
// function() {
//     "use strict";
//     var e, i;
//     function c() {
//         return e.apply(null, arguments)
//     }
//     function o(e) {
//         return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
//     }
//     function u(e) {
//         return null != e && "[object Object]" === Object.prototype.toString.call(e)
//     }
//     function l(e) {
//         return void 0 === e
//     }
//     function d(e) {
//         return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
//     }
//     function h(e) {
//         return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
//     }
//     function f(e, t) {
//         var n, s = [];
//         for (n = 0; n < e.length; ++n) s.push(t(e[n], n));
//         return s
//     }
//     function m(e, t) {
//         return Object.prototype.hasOwnProperty.call(e, t)
//     }
//     function _(e, t) {
//         for (var n in t) m(t, n) && (e[n] = t[n]);
//         return m(t, "toString") && (e.toString = t.toString),
//         m(t, "valueOf") && (e.valueOf = t.valueOf),
//         e
//     }
//     function y(e, t, n, s) {
//         return Ot(e, t, n, s, !0).utc()
//     }
//     function g(e) {
//         return null == e._pf && (e._pf = {
//             empty: !1,
//             unusedTokens: [],
//             unusedInput: [],
//             overflow: -2,
//             charsLeftOver: 0,
//             nullInput: !1,
//             invalidMonth: null,
//             invalidFormat: !1,
//             userInvalidated: !1,
//             iso: !1,
//             parsedDateParts: [],
//             meridiem: null,
//             rfc2822: !1,
//             weekdayMismatch: !1
//         }),
//         e._pf
//     }
//     function p(e) {
//         if (null == e._isValid) {
//             var t = g(e),
//             n = i.call(t.parsedDateParts,
//             function(e) {
//                 return null != e
//             }),
//             s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
//             if (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return s;
//             e._isValid = s
//         }
//         return e._isValid
//     }
//     function v(e) {
//         var t = y(NaN);
//         return null != e ? _(g(t), e) : g(t).userInvalidated = !0,
//         t
//     }
//     i = Array.prototype.some ? Array.prototype.some: function(e) {
//         for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++) if (s in t && e.call(this, t[s], s, t)) return ! 0;
//         return ! 1
//     };
//     var r = c.momentProperties = [];
//     function w(e, t) {
//         var n, s, i;
//         if (l(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), l(t._i) || (e._i = t._i), l(t._f) || (e._f = t._f), l(t._l) || (e._l = t._l), l(t._strict) || (e._strict = t._strict), l(t._tzm) || (e._tzm = t._tzm), l(t._isUTC) || (e._isUTC = t._isUTC), l(t._offset) || (e._offset = t._offset), l(t._pf) || (e._pf = g(t)), l(t._locale) || (e._locale = t._locale), 0 < r.length) for (n = 0; n < r.length; n++) l(i = t[s = r[n]]) || (e[s] = i);
//         return e
//     }
//     var t = !1;
//     function M(e) {
//         w(this, e),
//         this._d = new Date(null != e._d ? e._d.getTime() : NaN),
//         this.isValid() || (this._d = new Date(NaN)),
//         !1 === t && (t = !0, c.updateOffset(this), t = !1)
//     }
//     function S(e) {
//         return e instanceof M || null != e && null != e._isAMomentObject
//     }
//     function D(e) {
//         return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
//     }
//     function k(e) {
//         var t = +e,
//         n = 0;
//         return 0 !== t && isFinite(t) && (n = D(t)),
//         n
//     }
//     function a(e, t, n) {
//         var s, i = Math.min(e.length, t.length),
//         r = Math.abs(e.length - t.length),
//         a = 0;
//         for (s = 0; s < i; s++)(n && e[s] !== t[s] || !n && k(e[s]) !== k(t[s])) && a++;
//         return a + r
//     }
//     function Y(e) { ! 1 === c.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
//     }
//     function n(i, r) {
//         var a = !0;
//         return _(function() {
//             if (null != c.deprecationHandler && c.deprecationHandler(null, i), a) {
//                 for (var e, t = [], n = 0; n < arguments.length; n++) {
//                     if (e = "", "object" == typeof arguments[n]) {
//                         for (var s in e += "\n[" + n + "] ",
//                         arguments[0]) e += s + ": " + arguments[0][s] + ", ";
//                         e = e.slice(0, -2)
//                     } else e = arguments[n];
//                     t.push(e)
//                 }
//                 Y(i + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + (new Error).stack),
//                 a = !1
//             }
//             return r.apply(this, arguments)
//         },
//         r)
//     }
//     var s, O = {};
//     function T(e, t) {
//         null != c.deprecationHandler && c.deprecationHandler(e, t),
//         O[e] || (Y(t), O[e] = !0)
//     }
//     function x(e) {
//         return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
//     }
//     function b(e, t) {
//         var n, s = _({},
//         e);
//         for (n in t) m(t, n) && (u(e[n]) && u(t[n]) ? (s[n] = {},
//         _(s[n], e[n]), _(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]);
//         for (n in e) m(e, n) && !m(t, n) && u(e[n]) && (s[n] = _({},
//         s[n]));
//         return s
//     }
//     function P(e) {
//         null != e && this.set(e)
//     }
//     c.suppressDeprecationWarnings = !1,
//     c.deprecationHandler = null,
//     s = Object.keys ? Object.keys: function(e) {
//         var t, n = [];
//         for (t in e) m(e, t) && n.push(t);
//         return n
//     };
//     var W = {};
//     function H(e, t) {
//         var n = e.toLowerCase();
//         W[n] = W[n + "s"] = W[t] = e
//     }
//     function R(e) {
//         return "string" == typeof e ? W[e] || W[e.toLowerCase()] : void 0
//     }
//     function C(e) {
//         var t, n, s = {};
//         for (n in e) m(e, n) && (t = R(n)) && (s[t] = e[n]);
//         return s
//     }
//     var F = {};
//     function L(e, t) {
//         F[e] = t
//     }
//     function U(e, t, n) {
//         var s = "" + Math.abs(e),
//         i = t - s.length;
//         return (0 <= e ? n ? "+": "": "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s
//     }
//     var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
//     G = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
//     V = {},
//     E = {};
//     function I(e, t, n, s) {
//         var i = s;
//         "string" == typeof s && (i = function() {
//             return this[s]()
//         }),
//         e && (E[e] = i),
//         t && (E[t[0]] = function() {
//             return U(i.apply(this, arguments), t[1], t[2])
//         }),
//         n && (E[n] = function() {
//             return this.localeData().ordinal(i.apply(this, arguments), e)
//         })
//     }
//     function A(e, t) {
//         return e.isValid() ? (t = j(t, e.localeData()), V[t] = V[t] ||
//         function(s) {
//             var e, i, t, r = s.match(N);
//             for (e = 0, i = r.length; e < i; e++) E[r[e]] ? r[e] = E[r[e]] : r[e] = (t = r[e]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
//             return function(e) {
//                 var t, n = "";
//                 for (t = 0; t < i; t++) n += x(r[t]) ? r[t].call(e, s) : r[t];
//                 return n
//             }
//         } (t), V[t](e)) : e.localeData().invalidDate()
//     }
//     function j(e, t) {
//         var n = 5;
//         function s(e) {
//             return t.longDateFormat(e) || e
//         }
//         for (G.lastIndex = 0; 0 <= n && G.test(e);) e = e.replace(G, s),
//         G.lastIndex = 0,
//         n -= 1;
//         return e
//     }
//     var Z = /\d/,
//     z = /\d\d/,
//     $ = /\d{3}/,
//     q = /\d{4}/,
//     J = /[+-]?\d{6}/,
//     B = /\d\d?/,
//     Q = /\d\d\d\d?/,
//     X = /\d\d\d\d\d\d?/,
//     K = /\d{1,3}/,
//     ee = /\d{1,4}/,
//     te = /[+-]?\d{1,6}/,
//     ne = /\d+/,
//     se = /[+-]?\d+/,
//     ie = /Z|[+-]\d\d:?\d\d/gi,
//     re = /Z|[+-]\d\d(?::?\d\d)?/gi,
//     ae = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
//     oe = {};
//     function ue(e, n, s) {
//         oe[e] = x(n) ? n: function(e, t) {
//             return e && s ? s: n
//         }
//     }
//     function le(e, t) {
//         return m(oe, e) ? oe[e](t._strict, t._locale) : new RegExp(de(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
//         function(e, t, n, s, i) {
//             return t || n || s || i
//         })))
//     }
//     function de(e) {
//         return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
//     }
//     var he = {};
//     function ce(e, n) {
//         var t, s = n;
//         for ("string" == typeof e && (e = [e]), d(n) && (s = function(e, t) {
//             t[n] = k(e)
//         }), t = 0; t < e.length; t++) he[e[t]] = s
//     }
//     function fe(e, i) {
//         ce(e,
//         function(e, t, n, s) {
//             n._w = n._w || {},
//             i(e, n._w, n, s)
//         })
//     }
//     var me = 0,
//     _e = 1,
//     ye = 2,
//     ge = 3,
//     pe = 4,
//     ve = 5,
//     we = 6,
//     Me = 7,
//     Se = 8;
//     function De(e) {
//         return ke(e) ? 366 : 365
//     }
//     function ke(e) {
//         return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
//     }
//     I("Y", 0, 0,
//     function() {
//         var e = this.year();
//         return e <= 9999 ? "" + e: "+" + e
//     }),
//     I(0, ["YY", 2], 0,
//     function() {
//         return this.year() % 100
//     }),
//     I(0, ["YYYY", 4], 0, "year"),
//     I(0, ["YYYYY", 5], 0, "year"),
//     I(0, ["YYYYYY", 6, !0], 0, "year"),
//     H("year", "y"),
//     L("year", 1),
//     ue("Y", se),
//     ue("YY", B, z),
//     ue("YYYY", ee, q),
//     ue("YYYYY", te, J),
//     ue("YYYYYY", te, J),
//     ce(["YYYYY", "YYYYYY"], me),
//     ce("YYYY",
//     function(e, t) {
//         t[me] = 2 === e.length ? c.parseTwoDigitYear(e) : k(e)
//     }),
//     ce("YY",
//     function(e, t) {
//         t[me] = c.parseTwoDigitYear(e)
//     }),
//     ce("Y",
//     function(e, t) {
//         t[me] = parseInt(e, 10)
//     }),
//     c.parseTwoDigitYear = function(e) {
//         return k(e) + (68 < k(e) ? 1900 : 2e3)
//     };
//     var Ye, Oe = Te("FullYear", !0);
//     function Te(t, n) {
//         return function(e) {
//             return null != e ? (be(this, t, e), c.updateOffset(this, n), this) : xe(this, t)
//         }
//     }
//     function xe(e, t) {
//         return e.isValid() ? e._d["get" + (e._isUTC ? "UTC": "") + t]() : NaN
//     }
//     function be(e, t, n) {
//         e.isValid() && !isNaN(n) && ("FullYear" === t && ke(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC": "") + t](n, e.month(), Pe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC": "") + t](n))
//     }
//     function Pe(e, t) {
//         if (isNaN(e) || isNaN(t)) return NaN;
//         var n, s = (t % (n = 12) + n) % n;
//         return e += (t - s) / 12,
//         1 === s ? ke(e) ? 29 : 28 : 31 - s % 7 % 2
//     }
//     Ye = Array.prototype.indexOf ? Array.prototype.indexOf: function(e) {
//         var t;
//         for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
//         return - 1
//     },
//     I("M", ["MM", 2], "Mo",
//     function() {
//         return this.month() + 1
//     }),
//     I("MMM", 0, 0,
//     function(e) {
//         return this.localeData().monthsShort(this, e)
//     }),
//     I("MMMM", 0, 0,
//     function(e) {
//         return this.localeData().months(this, e)
//     }),
//     H("month", "M"),
//     L("month", 8),
//     ue("M", B),
//     ue("MM", B, z),
//     ue("MMM",
//     function(e, t) {
//         return t.monthsShortRegex(e)
//     }),
//     ue("MMMM",
//     function(e, t) {
//         return t.monthsRegex(e)
//     }),
//     ce(["M", "MM"],
//     function(e, t) {
//         t[_e] = k(e) - 1
//     }),
//     ce(["MMM", "MMMM"],
//     function(e, t, n, s) {
//         var i = n._locale.monthsParse(e, s, n._strict);
//         null != i ? t[_e] = i: g(n).invalidMonth = e
//     });
//     var We = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
//     He = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
//     var Re = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
//     function Ce(e, t) {
//         var n;
//         if (!e.isValid()) return e;
//         if ("string" == typeof t) if (/^\d+$/.test(t)) t = k(t);
//         else if (!d(t = e.localeData().monthsParse(t))) return e;
//         return n = Math.min(e.date(), Pe(e.year(), t)),
//         e._d["set" + (e._isUTC ? "UTC": "") + "Month"](t, n),
//         e
//     }
//     function Fe(e) {
//         return null != e ? (Ce(this, e), c.updateOffset(this, !0), this) : xe(this, "Month")
//     }
//     var Le = ae;
//     var Ue = ae;
//     function Ne() {
//         function e(e, t) {
//             return t.length - e.length
//         }
//         var t, n, s = [],
//         i = [],
//         r = [];
//         for (t = 0; t < 12; t++) n = y([2e3, t]),
//         s.push(this.monthsShort(n, "")),
//         i.push(this.months(n, "")),
//         r.push(this.months(n, "")),
//         r.push(this.monthsShort(n, ""));
//         for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++) s[t] = de(s[t]),
//         i[t] = de(i[t]);
//         for (t = 0; t < 24; t++) r[t] = de(r[t]);
//         this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"),
//         this._monthsShortRegex = this._monthsRegex,
//         this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"),
//         this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
//     }
//     function Ge(e) {
//         var t = new Date(Date.UTC.apply(null, arguments));
//         return e < 100 && 0 <= e && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e),
//         t
//     }
//     function Ve(e, t, n) {
//         var s = 7 + t - n;
//         return - ((7 + Ge(e, 0, s).getUTCDay() - t) % 7) + s - 1
//     }
//     function Ee(e, t, n, s, i) {
//         var r, a, o = 1 + 7 * (t - 1) + (7 + n - s) % 7 + Ve(e, s, i);
//         return o <= 0 ? a = De(r = e - 1) + o: o > De(e) ? (r = e + 1, a = o - De(e)) : (r = e, a = o),
//         {
//             year: r,
//             dayOfYear: a
//         }
//     }
//     function Ie(e, t, n) {
//         var s, i, r = Ve(e.year(), t, n),
//         a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
//         return a < 1 ? s = a + Ae(i = e.year() - 1, t, n) : a > Ae(e.year(), t, n) ? (s = a - Ae(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = a),
//         {
//             week: s,
//             year: i
//         }
//     }
//     function Ae(e, t, n) {
//         var s = Ve(e, t, n),
//         i = Ve(e + 1, t, n);
//         return (De(e) - s + i) / 7
//     }
//     I("w", ["ww", 2], "wo", "week"),
//     I("W", ["WW", 2], "Wo", "isoWeek"),
//     H("week", "w"),
//     H("isoWeek", "W"),
//     L("week", 5),
//     L("isoWeek", 5),
//     ue("w", B),
//     ue("ww", B, z),
//     ue("W", B),
//     ue("WW", B, z),
//     fe(["w", "ww", "W", "WW"],
//     function(e, t, n, s) {
//         t[s.substr(0, 1)] = k(e)
//     });
//     I("d", 0, "do", "day"),
//     I("dd", 0, 0,
//     function(e) {
//         return this.localeData().weekdaysMin(this, e)
//     }),
//     I("ddd", 0, 0,
//     function(e) {
//         return this.localeData().weekdaysShort(this, e)
//     }),
//     I("dddd", 0, 0,
//     function(e) {
//         return this.localeData().weekdays(this, e)
//     }),
//     I("e", 0, 0, "weekday"),
//     I("E", 0, 0, "isoWeekday"),
//     H("day", "d"),
//     H("weekday", "e"),
//     H("isoWeekday", "E"),
//     L("day", 11),
//     L("weekday", 11),
//     L("isoWeekday", 11),
//     ue("d", B),
//     ue("e", B),
//     ue("E", B),
//     ue("dd",
//     function(e, t) {
//         return t.weekdaysMinRegex(e)
//     }),
//     ue("ddd",
//     function(e, t) {
//         return t.weekdaysShortRegex(e)
//     }),
//     ue("dddd",
//     function(e, t) {
//         return t.weekdaysRegex(e)
//     }),
//     fe(["dd", "ddd", "dddd"],
//     function(e, t, n, s) {
//         var i = n._locale.weekdaysParse(e, s, n._strict);
//         null != i ? t.d = i: g(n).invalidWeekday = e
//     }),
//     fe(["d", "e", "E"],
//     function(e, t, n, s) {
//         t[s] = k(e)
//     });
//     var je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
//     var Ze = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
//     var ze = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
//     var $e = ae;
//     var qe = ae;
//     var Je = ae;
//     function Be() {
//         function e(e, t) {
//             return t.length - e.length
//         }
//         var t, n, s, i, r, a = [],
//         o = [],
//         u = [],
//         l = [];
//         for (t = 0; t < 7; t++) n = y([2e3, 1]).day(t),
//         s = this.weekdaysMin(n, ""),
//         i = this.weekdaysShort(n, ""),
//         r = this.weekdays(n, ""),
//         a.push(s),
//         o.push(i),
//         u.push(r),
//         l.push(s),
//         l.push(i),
//         l.push(r);
//         for (a.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++) o[t] = de(o[t]),
//         u[t] = de(u[t]),
//         l[t] = de(l[t]);
//         this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"),
//         this._weekdaysShortRegex = this._weekdaysRegex,
//         this._weekdaysMinRegex = this._weekdaysRegex,
//         this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"),
//         this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"),
//         this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
//     }
//     function Qe() {
//         return this.hours() % 12 || 12
//     }
//     function Xe(e, t) {
//         I(e, 0, 0,
//         function() {
//             return this.localeData().meridiem(this.hours(), this.minutes(), t)
//         })
//     }
//     function Ke(e, t) {
//         return t._meridiemParse
//     }
//     I("H", ["HH", 2], 0, "hour"),
//     I("h", ["hh", 2], 0, Qe),
//     I("k", ["kk", 2], 0,
//     function() {
//         return this.hours() || 24
//     }),
//     I("hmm", 0, 0,
//     function() {
//         return "" + Qe.apply(this) + U(this.minutes(), 2)
//     }),
//     I("hmmss", 0, 0,
//     function() {
//         return "" + Qe.apply(this) + U(this.minutes(), 2) + U(this.seconds(), 2)
//     }),
//     I("Hmm", 0, 0,
//     function() {
//         return "" + this.hours() + U(this.minutes(), 2)
//     }),
//     I("Hmmss", 0, 0,
//     function() {
//         return "" + this.hours() + U(this.minutes(), 2) + U(this.seconds(), 2)
//     }),
//     Xe("a", !0),
//     Xe("A", !1),
//     H("hour", "h"),
//     L("hour", 13),
//     ue("a", Ke),
//     ue("A", Ke),
//     ue("H", B),
//     ue("h", B),
//     ue("k", B),
//     ue("HH", B, z),
//     ue("hh", B, z),
//     ue("kk", B, z),
//     ue("hmm", Q),
//     ue("hmmss", X),
//     ue("Hmm", Q),
//     ue("Hmmss", X),
//     ce(["H", "HH"], ge),
//     ce(["k", "kk"],
//     function(e, t, n) {
//         var s = k(e);
//         t[ge] = 24 === s ? 0 : s
//     }),
//     ce(["a", "A"],
//     function(e, t, n) {
//         n._isPm = n._locale.isPM(e),
//         n._meridiem = e
//     }),
//     ce(["h", "hh"],
//     function(e, t, n) {
//         t[ge] = k(e),
//         g(n).bigHour = !0
//     }),
//     ce("hmm",
//     function(e, t, n) {
//         var s = e.length - 2;
//         t[ge] = k(e.substr(0, s)),
//         t[pe] = k(e.substr(s)),
//         g(n).bigHour = !0
//     }),
//     ce("hmmss",
//     function(e, t, n) {
//         var s = e.length - 4,
//         i = e.length - 2;
//         t[ge] = k(e.substr(0, s)),
//         t[pe] = k(e.substr(s, 2)),
//         t[ve] = k(e.substr(i)),
//         g(n).bigHour = !0
//     }),
//     ce("Hmm",
//     function(e, t, n) {
//         var s = e.length - 2;
//         t[ge] = k(e.substr(0, s)),
//         t[pe] = k(e.substr(s))
//     }),
//     ce("Hmmss",
//     function(e, t, n) {
//         var s = e.length - 4,
//         i = e.length - 2;
//         t[ge] = k(e.substr(0, s)),
//         t[pe] = k(e.substr(s, 2)),
//         t[ve] = k(e.substr(i))
//     });
//     var et, tt = Te("Hours", !0),
//     nt = {
//         calendar: {
//             sameDay: "[Today at] LT",
//             nextDay: "[Tomorrow at] LT",
//             nextWeek: "dddd [at] LT",
//             lastDay: "[Yesterday at] LT",
//             lastWeek: "[Last] dddd [at] LT",
//             sameElse: "L"
//         },
//         longDateFormat: {
//             LTS: "h:mm:ss A",
//             LT: "h:mm A",
//             L: "MM/DD/YYYY",
//             LL: "MMMM D, YYYY",
//             LLL: "MMMM D, YYYY h:mm A",
//             LLLL: "dddd, MMMM D, YYYY h:mm A"
//         },
//         invalidDate: "Invalid date",
//         ordinal: "%d",
//         dayOfMonthOrdinalParse: /\d{1,2}/,
//         relativeTime: {
//             future: "in %s",
//             past: "%s ago",
//             s: "a few seconds",
//             ss: "%d seconds",
//             m: "a minute",
//             mm: "%d minutes",
//             h: "an hour",
//             hh: "%d hours",
//             d: "a day",
//             dd: "%d days",
//             M: "a month",
//             MM: "%d months",
//             y: "a year",
//             yy: "%d years"
//         },
//         months: He,
//         monthsShort: Re,
//         week: {
//             dow: 0,
//             doy: 6
//         },
//         weekdays: je,
//         weekdaysMin: ze,
//         weekdaysShort: Ze,
//         meridiemParse: /[ap]\.?m?\.?/i
//     },
//     st = {},
//     it = {};
//     function rt(e) {
//         return e ? e.toLowerCase().replace("_", "-") : e
//     }
//     function at(e) {
//         var t = null;
//         if (!st[e] && "undefined" != typeof module && module && module.exports) try {
//             t = et._abbr,
//             require("./locale/" + e),
//             ot(t)
//         } catch(e) {}
//         return st[e]
//     }
//     function ot(e, t) {
//         var n;
//         return e && ((n = l(t) ? lt(e) : ut(e, t)) ? et = n: "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
//         et._abbr
//     }
//     function ut(e, t) {
//         if (null !== t) {
//             var n, s = nt;
//             if (t.abbr = e, null != st[e]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
//             s = st[e]._config;
//             else if (null != t.parentLocale) if (null != st[t.parentLocale]) s = st[t.parentLocale]._config;
//             else {
//                 if (null == (n = at(t.parentLocale))) return it[t.parentLocale] || (it[t.parentLocale] = []),
//                 it[t.parentLocale].push({
//                     name: e,
//                     config: t
//                 }),
//                 null;
//                 s = n._config
//             }
//             return st[e] = new P(b(s, t)),
//             it[e] && it[e].forEach(function(e) {
//                 ut(e.name, e.config)
//             }),
//             ot(e),
//             st[e]
//         }
//         return delete st[e],
//         null
//     }
//     function lt(e) {
//         var t;
//         if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return et;
//         if (!o(e)) {
//             if (t = at(e)) return t;
//             e = [e]
//         }
//         return function(e) {
//             for (var t, n, s, i, r = 0; r < e.length;) {
//                 for (t = (i = rt(e[r]).split("-")).length, n = (n = rt(e[r + 1])) ? n.split("-") : null; 0 < t;) {
//                     if (s = at(i.slice(0, t).join("-"))) return s;
//                     if (n && n.length >= t && a(i, n, !0) >= t - 1) break;
//                     t--
//                 }
//                 r++
//             }
//             return et
//         } (e)
//     }
//     function dt(e) {
//         var t, n = e._a;
//         return n && -2 === g(e).overflow && (t = n[_e] < 0 || 11 < n[_e] ? _e: n[ye] < 1 || n[ye] > Pe(n[me], n[_e]) ? ye: n[ge] < 0 || 24 < n[ge] || 24 === n[ge] && (0 !== n[pe] || 0 !== n[ve] || 0 !== n[we]) ? ge: n[pe] < 0 || 59 < n[pe] ? pe: n[ve] < 0 || 59 < n[ve] ? ve: n[we] < 0 || 999 < n[we] ? we: -1, g(e)._overflowDayOfYear && (t < me || ye < t) && (t = ye), g(e)._overflowWeeks && -1 === t && (t = Me), g(e)._overflowWeekday && -1 === t && (t = Se), g(e).overflow = t),
//         e
//     }
//     function ht(e, t, n) {
//         return null != e ? e: null != t ? t: n
//     }
//     function ct(e) {
//         var t, n, s, i, r, a = [];
//         if (!e._d) {
//             var o, u;
//             for (o = e, u = new Date(c.now()), s = o._useUTC ? [u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()] : [u.getFullYear(), u.getMonth(), u.getDate()], e._w && null == e._a[ye] && null == e._a[_e] &&
//             function(e) {
//                 var t, n, s, i, r, a, o, u;
//                 if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1,
//                 a = 4,
//                 n = ht(t.GG, e._a[me], Ie(Tt(), 1, 4).year),
//                 s = ht(t.W, 1),
//                 ((i = ht(t.E, 1)) < 1 || 7 < i) && (u = !0);
//                 else {
//                     r = e._locale._week.dow,
//                     a = e._locale._week.doy;
//                     var l = Ie(Tt(), r, a);
//                     n = ht(t.gg, e._a[me], l.year),
//                     s = ht(t.w, l.week),
//                     null != t.d ? ((i = t.d) < 0 || 6 < i) && (u = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || 6 < t.e) && (u = !0)) : i = r
//                 }
//                 s < 1 || s > Ae(n, r, a) ? g(e)._overflowWeeks = !0 : null != u ? g(e)._overflowWeekday = !0 : (o = Ee(n, s, i, r, a), e._a[me] = o.year, e._dayOfYear = o.dayOfYear)
//             } (e), null != e._dayOfYear && (r = ht(e._a[me], s[me]), (e._dayOfYear > De(r) || 0 === e._dayOfYear) && (g(e)._overflowDayOfYear = !0), n = Ge(r, 0, e._dayOfYear), e._a[_e] = n.getUTCMonth(), e._a[ye] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = a[t] = s[t];
//             for (; t < 7; t++) e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
//             24 === e._a[ge] && 0 === e._a[pe] && 0 === e._a[ve] && 0 === e._a[we] && (e._nextDay = !0, e._a[ge] = 0),
//             e._d = (e._useUTC ? Ge: function(e, t, n, s, i, r, a) {
//                 var o = new Date(e, t, n, s, i, r, a);
//                 return e < 100 && 0 <= e && isFinite(o.getFullYear()) && o.setFullYear(e),
//                 o
//             }).apply(null, a),
//             i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
//             null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
//             e._nextDay && (e._a[ge] = 24),
//             e._w && void 0 !== e._w.d && e._w.d !== i && (g(e).weekdayMismatch = !0)
//         }
//     }
//     var ft = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
//     mt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
//     _t = /Z|[+-]\d\d(?::?\d\d)?/,
//     yt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
//     gt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
//     pt = /^\/?Date\((\-?\d+)/i;
//     function vt(e) {
//         var t, n, s, i, r, a, o = e._i,
//         u = ft.exec(o) || mt.exec(o);
//         if (u) {
//             for (g(e).iso = !0, t = 0, n = yt.length; t < n; t++) if (yt[t][1].exec(u[1])) {
//                 i = yt[t][0],
//                 s = !1 !== yt[t][2];
//                 break
//             }
//             if (null == i) return void(e._isValid = !1);
//             if (u[3]) {
//                 for (t = 0, n = gt.length; t < n; t++) if (gt[t][1].exec(u[3])) {
//                     r = (u[2] || " ") + gt[t][0];
//                     break
//                 }
//                 if (null == r) return void(e._isValid = !1)
//             }
//             if (!s && null != r) return void(e._isValid = !1);
//             if (u[4]) {
//                 if (!_t.exec(u[4])) return void(e._isValid = !1);
//                 a = "Z"
//             }
//             e._f = i + (r || "") + (a || ""),
//             kt(e)
//         } else e._isValid = !1
//     }
//     var wt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
//     function Mt(e, t, n, s, i, r) {
//         var a = [function(e) {
//             var t = parseInt(e, 10); {
//                 if (t <= 49) return 2e3 + t;
//                 if (t <= 999) return 1900 + t
//             }
//             return t
//         } (e), Re.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(i, 10)];
//         return r && a.push(parseInt(r, 10)),
//         a
//     }
//     var St = {
//         UT: 0,
//         GMT: 0,
//         EDT: -240,
//         EST: -300,
//         CDT: -300,
//         CST: -360,
//         MDT: -360,
//         MST: -420,
//         PDT: -420,
//         PST: -480
//     };
//     function Dt(e) {
//         var t, n, s, i = wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim());
//         if (i) {
//             var r = Mt(i[4], i[3], i[2], i[5], i[6], i[7]);
//             if (t = i[1], n = r, s = e, t && Ze.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() && (g(s).weekdayMismatch = !0, !(s._isValid = !1))) return;
//             e._a = r,
//             e._tzm = function(e, t, n) {
//                 if (e) return St[e];
//                 if (t) return 0;
//                 var s = parseInt(n, 10),
//                 i = s % 100;
//                 return (s - i) / 100 * 60 + i
//             } (i[8], i[9], i[10]),
//             e._d = Ge.apply(null, e._a),
//             e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
//             g(e).rfc2822 = !0
//         } else e._isValid = !1
//     }
//     function kt(e) {
//         if (e._f !== c.ISO_8601) if (e._f !== c.RFC_2822) {
//             e._a = [],
//             g(e).empty = !0;
//             var t, n, s, i, r, a, o, u, l = "" + e._i,
//             d = l.length,
//             h = 0;
//             for (s = j(e._f, e._locale).match(N) || [], t = 0; t < s.length; t++) i = s[t],
//             (n = (l.match(le(i, e)) || [])[0]) && (0 < (r = l.substr(0, l.indexOf(n))).length && g(e).unusedInput.push(r), l = l.slice(l.indexOf(n) + n.length), h += n.length),
//             E[i] ? (n ? g(e).empty = !1 : g(e).unusedTokens.push(i), a = i, u = e, null != (o = n) && m(he, a) && he[a](o, u._a, u, a)) : e._strict && !n && g(e).unusedTokens.push(i);
//             g(e).charsLeftOver = d - h,
//             0 < l.length && g(e).unusedInput.push(l),
//             e._a[ge] <= 12 && !0 === g(e).bigHour && 0 < e._a[ge] && (g(e).bigHour = void 0),
//             g(e).parsedDateParts = e._a.slice(0),
//             g(e).meridiem = e._meridiem,
//             e._a[ge] = function(e, t, n) {
//                 var s;
//                 if (null == n) return t;
//                 return null != e.meridiemHour ? e.meridiemHour(t, n) : (null != e.isPM && ((s = e.isPM(n)) && t < 12 && (t += 12), s || 12 !== t || (t = 0)), t)
//             } (e._locale, e._a[ge], e._meridiem),
//             ct(e),
//             dt(e)
//         } else Dt(e);
//         else vt(e)
//     }
//     function Yt(e) {
//         var t, n, s, i, r = e._i,
//         a = e._f;
//         return e._locale = e._locale || lt(e._l),
//         null === r || void 0 === a && "" === r ? v({
//             nullInput: !0
//         }) : ("string" == typeof r && (e._i = r = e._locale.preparse(r)), S(r) ? new M(dt(r)) : (h(r) ? e._d = r: o(a) ?
//         function(e) {
//             var t, n, s, i, r;
//             if (0 === e._f.length) return g(e).invalidFormat = !0,
//             e._d = new Date(NaN);
//             for (i = 0; i < e._f.length; i++) r = 0,
//             t = w({},
//             e),
//             null != e._useUTC && (t._useUTC = e._useUTC),
//             t._f = e._f[i],
//             kt(t),
//             p(t) && (r += g(t).charsLeftOver, r += 10 * g(t).unusedTokens.length, g(t).score = r, (null == s || r < s) && (s = r, n = t));
//             _(e, n || t)
//         } (e) : a ? kt(e) : l(n = (t = e)._i) ? t._d = new Date(c.now()) : h(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? (s = t, null === (i = pt.exec(s._i)) ? (vt(s), !1 === s._isValid && (delete s._isValid, Dt(s), !1 === s._isValid && (delete s._isValid, c.createFromInputFallback(s)))) : s._d = new Date( + i[1])) : o(n) ? (t._a = f(n.slice(0),
//         function(e) {
//             return parseInt(e, 10)
//         }), ct(t)) : u(n) ?
//         function(e) {
//             if (!e._d) {
//                 var t = C(e._i);
//                 e._a = f([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond],
//                 function(e) {
//                     return e && parseInt(e, 10)
//                 }),
//                 ct(e)
//             }
//         } (t) : d(n) ? t._d = new Date(n) : c.createFromInputFallback(t), p(e) || (e._d = null), e))
//     }
//     function Ot(e, t, n, s, i) {
//         var r, a = {};
//         return ! 0 !== n && !1 !== n || (s = n, n = void 0),
//         (u(e) &&
//         function(e) {
//             if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
//             var t;
//             for (t in e) if (e.hasOwnProperty(t)) return ! 1;
//             return ! 0
//         } (e) || o(e) && 0 === e.length) && (e = void 0),
//         a._isAMomentObject = !0,
//         a._useUTC = a._isUTC = i,
//         a._l = n,
//         a._i = e,
//         a._f = t,
//         a._strict = s,
//         (r = new M(dt(Yt(a))))._nextDay && (r.add(1, "d"), r._nextDay = void 0),
//         r
//     }
//     function Tt(e, t, n, s) {
//         return Ot(e, t, n, s, !1)
//     }
//     c.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
//     function(e) {
//         e._d = new Date(e._i + (e._useUTC ? " UTC": ""))
//     }),
//     c.ISO_8601 = function() {},
//     c.RFC_2822 = function() {};
//     var xt = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
//     function() {
//         var e = Tt.apply(null, arguments);
//         return this.isValid() && e.isValid() ? e < this ? this: e: v()
//     }),
//     bt = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
//     function() {
//         var e = Tt.apply(null, arguments);
//         return this.isValid() && e.isValid() ? this < e ? this: e: v()
//     });
//     function Pt(e, t) {
//         var n, s;
//         if (1 === t.length && o(t[0]) && (t = t[0]), !t.length) return Tt();
//         for (n = t[0], s = 1; s < t.length; ++s) t[s].isValid() && !t[s][e](n) || (n = t[s]);
//         return n
//     }
//     var Wt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
//     function Ht(e) {
//         var t = C(e),
//         n = t.year || 0,
//         s = t.quarter || 0,
//         i = t.month || 0,
//         r = t.week || 0,
//         a = t.day || 0,
//         o = t.hour || 0,
//         u = t.minute || 0,
//         l = t.second || 0,
//         d = t.millisecond || 0;
//         this._isValid = function(e) {
//             for (var t in e) if ( - 1 === Ye.call(Wt, t) || null != e[t] && isNaN(e[t])) return ! 1;
//             for (var n = !1,
//             s = 0; s < Wt.length; ++s) if (e[Wt[s]]) {
//                 if (n) return ! 1;
//                 parseFloat(e[Wt[s]]) !== k(e[Wt[s]]) && (n = !0)
//             }
//             return ! 0
//         } (t),
//         this._milliseconds = +d + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60,
//         this._days = +a + 7 * r,
//         this._months = +i + 3 * s + 12 * n,
//         this._data = {},
//         this._locale = lt(),
//         this._bubble()
//     }
//     function Rt(e) {
//         return e instanceof Ht
//     }
//     function Ct(e) {
//         return e < 0 ? -1 * Math.round( - 1 * e) : Math.round(e)
//     }
//     function Ft(e, n) {
//         I(e, 0, 0,
//         function() {
//             var e = this.utcOffset(),
//             t = "+";
//             return e < 0 && (e = -e, t = "-"),
//             t + U(~~ (e / 60), 2) + n + U(~~e % 60, 2)
//         })
//     }
//     Ft("Z", ":"),
//     Ft("ZZ", ""),
//     ue("Z", re),
//     ue("ZZ", re),
//     ce(["Z", "ZZ"],
//     function(e, t, n) {
//         n._useUTC = !0,
//         n._tzm = Ut(re, e)
//     });
//     var Lt = /([\+\-]|\d\d)/gi;
//     function Ut(e, t) {
//         var n = (t || "").match(e);
//         if (null === n) return null;
//         var s = ((n[n.length - 1] || []) + "").match(Lt) || ["-", 0, 0],
//         i = 60 * s[1] + k(s[2]);
//         return 0 === i ? 0 : "+" === s[0] ? i: -i
//     }
//     function Nt(e, t) {
//         var n, s;
//         return t._isUTC ? (n = t.clone(), s = (S(e) || h(e) ? e.valueOf() : Tt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + s), c.updateOffset(n, !1), n) : Tt(e).local()
//     }
//     function Gt(e) {
//         return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
//     }
//     function Vt() {
//         return !! this.isValid() && (this._isUTC && 0 === this._offset)
//     }
//     c.updateOffset = function() {};
//     var Et = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
//     It = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
//     function At(e, t) {
//         var n, s, i, r = e,
//         a = null;
//         return Rt(e) ? r = {
//             ms: e._milliseconds,
//             d: e._days,
//             M: e._months
//         }: d(e) ? (r = {},
//         t ? r[t] = e: r.milliseconds = e) : (a = Et.exec(e)) ? (n = "-" === a[1] ? -1 : 1, r = {
//             y: 0,
//             d: k(a[ye]) * n,
//             h: k(a[ge]) * n,
//             m: k(a[pe]) * n,
//             s: k(a[ve]) * n,
//             ms: k(Ct(1e3 * a[we])) * n
//         }) : (a = It.exec(e)) ? (n = "-" === a[1] ? -1 : (a[1], 1), r = {
//             y: jt(a[2], n),
//             M: jt(a[3], n),
//             w: jt(a[4], n),
//             d: jt(a[5], n),
//             h: jt(a[6], n),
//             m: jt(a[7], n),
//             s: jt(a[8], n)
//         }) : null == r ? r = {}: "object" == typeof r && ("from" in r || "to" in r) && (i = function(e, t) {
//             var n;
//             if (!e.isValid() || !t.isValid()) return {
//                 milliseconds: 0,
//                 months: 0
//             };
//             t = Nt(t, e),
//             e.isBefore(t) ? n = Zt(e, t) : ((n = Zt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
//             return n
//         } (Tt(r.from), Tt(r.to)), (r = {}).ms = i.milliseconds, r.M = i.months),
//         s = new Ht(r),
//         Rt(e) && m(e, "_locale") && (s._locale = e._locale),
//         s
//     }
//     function jt(e, t) {
//         var n = e && parseFloat(e.replace(",", "."));
//         return (isNaN(n) ? 0 : n) * t
//     }
//     function Zt(e, t) {
//         var n = {
//             milliseconds: 0,
//             months: 0
//         };
//         return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
//         e.clone().add(n.months, "M").isAfter(t) && --n.months,
//         n.milliseconds = +t - +e.clone().add(n.months, "M"),
//         n
//     }
//     function zt(s, i) {
//         return function(e, t) {
//             var n;
//             return null === t || isNaN( + t) || (T(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = e, e = t, t = n),
//             $t(this, At(e = "string" == typeof e ? +e: e, t), s),
//             this
//         }
//     }
//     function $t(e, t, n, s) {
//         var i = t._milliseconds,
//         r = Ct(t._days),
//         a = Ct(t._months);
//         e.isValid() && (s = null == s || s, a && Ce(e, xe(e, "Month") + a * n), r && be(e, "Date", xe(e, "Date") + r * n), i && e._d.setTime(e._d.valueOf() + i * n), s && c.updateOffset(e, r || a))
//     }
//     At.fn = Ht.prototype,
//     At.invalid = function() {
//         return At(NaN)
//     };
//     var qt = zt(1, "add"),
//     Jt = zt( - 1, "subtract");
//     function Bt(e, t) {
//         var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
//         s = e.clone().add(n, "months");
//         return - (n + (t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(n + 1, "months") - s))) || 0
//     }
//     function Qt(e) {
//         var t;
//         return void 0 === e ? this._locale._abbr: (null != (t = lt(e)) && (this._locale = t), this)
//     }
//     c.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
//     c.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
//     var Xt = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
//     function(e) {
//         return void 0 === e ? this.localeData() : this.locale(e)
//     });
//     function Kt() {
//         return this._locale
//     }
//     function en(e, t) {
//         I(0, [e, e.length], 0, t)
//     }
//     function tn(e, t, n, s, i) {
//         var r;
//         return null == e ? Ie(this, s, i).year: ((r = Ae(e, s, i)) < t && (t = r),
//         function(e, t, n, s, i) {
//             var r = Ee(e, t, n, s, i),
//             a = Ge(r.year, 0, r.dayOfYear);
//             return this.year(a.getUTCFullYear()),
//             this.month(a.getUTCMonth()),
//             this.date(a.getUTCDate()),
//             this
//         }.call(this, e, t, n, s, i))
//     }
//     I(0, ["gg", 2], 0,
//     function() {
//         return this.weekYear() % 100
//     }),
//     I(0, ["GG", 2], 0,
//     function() {
//         return this.isoWeekYear() % 100
//     }),
//     en("gggg", "weekYear"),
//     en("ggggg", "weekYear"),
//     en("GGGG", "isoWeekYear"),
//     en("GGGGG", "isoWeekYear"),
//     H("weekYear", "gg"),
//     H("isoWeekYear", "GG"),
//     L("weekYear", 1),
//     L("isoWeekYear", 1),
//     ue("G", se),
//     ue("g", se),
//     ue("GG", B, z),
//     ue("gg", B, z),
//     ue("GGGG", ee, q),
//     ue("gggg", ee, q),
//     ue("GGGGG", te, J),
//     ue("ggggg", te, J),
//     fe(["gggg", "ggggg", "GGGG", "GGGGG"],
//     function(e, t, n, s) {
//         t[s.substr(0, 2)] = k(e)
//     }),
//     fe(["gg", "GG"],
//     function(e, t, n, s) {
//         t[s] = c.parseTwoDigitYear(e)
//     }),
//     I("Q", 0, "Qo", "quarter"),
//     H("quarter", "Q"),
//     L("quarter", 7),
//     ue("Q", Z),
//     ce("Q",
//     function(e, t) {
//         t[_e] = 3 * (k(e) - 1)
//     }),
//     I("D", ["DD", 2], "Do", "date"),
//     H("date", "D"),
//     L("date", 9),
//     ue("D", B),
//     ue("DD", B, z),
//     ue("Do",
//     function(e, t) {
//         return e ? t._dayOfMonthOrdinalParse || t._ordinalParse: t._dayOfMonthOrdinalParseLenient
//     }),
//     ce(["D", "DD"], ye),
//     ce("Do",
//     function(e, t) {
//         t[ye] = k(e.match(B)[0])
//     });
//     var nn = Te("Date", !0);
//     I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
//     H("dayOfYear", "DDD"),
//     L("dayOfYear", 4),
//     ue("DDD", K),
//     ue("DDDD", $),
//     ce(["DDD", "DDDD"],
//     function(e, t, n) {
//         n._dayOfYear = k(e)
//     }),
//     I("m", ["mm", 2], 0, "minute"),
//     H("minute", "m"),
//     L("minute", 14),
//     ue("m", B),
//     ue("mm", B, z),
//     ce(["m", "mm"], pe);
//     var sn = Te("Minutes", !1);
//     I("s", ["ss", 2], 0, "second"),
//     H("second", "s"),
//     L("second", 15),
//     ue("s", B),
//     ue("ss", B, z),
//     ce(["s", "ss"], ve);
//     var rn, an = Te("Seconds", !1);
//     for (I("S", 0, 0,
//     function() {
//         return~~ (this.millisecond() / 100)
//     }), I(0, ["SS", 2], 0,
//     function() {
//         return~~ (this.millisecond() / 10)
//     }), I(0, ["SSS", 3], 0, "millisecond"), I(0, ["SSSS", 4], 0,
//     function() {
//         return 10 * this.millisecond()
//     }), I(0, ["SSSSS", 5], 0,
//     function() {
//         return 100 * this.millisecond()
//     }), I(0, ["SSSSSS", 6], 0,
//     function() {
//         return 1e3 * this.millisecond()
//     }), I(0, ["SSSSSSS", 7], 0,
//     function() {
//         return 1e4 * this.millisecond()
//     }), I(0, ["SSSSSSSS", 8], 0,
//     function() {
//         return 1e5 * this.millisecond()
//     }), I(0, ["SSSSSSSSS", 9], 0,
//     function() {
//         return 1e6 * this.millisecond()
//     }), H("millisecond", "ms"), L("millisecond", 16), ue("S", K, Z), ue("SS", K, z), ue("SSS", K, $), rn = "SSSS"; rn.length <= 9; rn += "S") ue(rn, ne);
//     function on(e, t) {
//         t[we] = k(1e3 * ("0." + e))
//     }
//     for (rn = "S"; rn.length <= 9; rn += "S") ce(rn, on);
//     var un = Te("Milliseconds", !1);
//     I("z", 0, 0, "zoneAbbr"),
//     I("zz", 0, 0, "zoneName");
//     var ln = M.prototype;
//     function dn(e) {
//         return e
//     }
//     ln.add = qt,
//     ln.calendar = function(e, t) {
//         var n = e || Tt(),
//         s = Nt(n, this).startOf("day"),
//         i = c.calendarFormat(this, s) || "sameElse",
//         r = t && (x(t[i]) ? t[i].call(this, n) : t[i]);
//         return this.format(r || this.localeData().calendar(i, this, Tt(n)))
//     },
//     ln.clone = function() {
//         return new M(this)
//     },
//     ln.diff = function(e, t, n) {
//         var s, i, r;
//         if (!this.isValid()) return NaN;
//         if (! (s = Nt(e, this)).isValid()) return NaN;
//         switch (i = 6e4 * (s.utcOffset() - this.utcOffset()), t = R(t)) {
//         case "year":
//             r = Bt(this, s) / 12;
//             break;
//         case "month":
//             r = Bt(this, s);
//             break;
//         case "quarter":
//             r = Bt(this, s) / 3;
//             break;
//         case "second":
//             r = (this - s) / 1e3;
//             break;
//         case "minute":
//             r = (this - s) / 6e4;
//             break;
//         case "hour":
//             r = (this - s) / 36e5;
//             break;
//         case "day":
//             r = (this - s - i) / 864e5;
//             break;
//         case "week":
//             r = (this - s - i) / 6048e5;
//             break;
//         default:
//             r = this - s
//         }
//         return n ? r: D(r)
//     },
//     ln.endOf = function(e) {
//         return void 0 === (e = R(e)) || "millisecond" === e ? this: ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week": e).subtract(1, "ms"))
//     },
//     ln.format = function(e) {
//         e || (e = this.isUtc() ? c.defaultFormatUtc: c.defaultFormat);
//         var t = A(this, e);
//         return this.localeData().postformat(t)
//     },
//     ln.from = function(e, t) {
//         return this.isValid() && (S(e) && e.isValid() || Tt(e).isValid()) ? At({
//             to: this,
//             from: e
//         }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
//     },
//     ln.fromNow = function(e) {
//         return this.from(Tt(), e)
//     },
//     ln.to = function(e, t) {
//         return this.isValid() && (S(e) && e.isValid() || Tt(e).isValid()) ? At({
//             from: this,
//             to: e
//         }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
//     },
//     ln.toNow = function(e) {
//         return this.to(Tt(), e)
//     },
//     ln.get = function(e) {
//         return x(this[e = R(e)]) ? this[e]() : this
//     },
//     ln.invalidAt = function() {
//         return g(this).overflow
//     },
//     ln.isAfter = function(e, t) {
//         var n = S(e) ? e: Tt(e);
//         return ! (!this.isValid() || !n.isValid()) && ("millisecond" === (t = R(l(t) ? "millisecond": t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
//     },
//     ln.isBefore = function(e, t) {
//         var n = S(e) ? e: Tt(e);
//         return ! (!this.isValid() || !n.isValid()) && ("millisecond" === (t = R(l(t) ? "millisecond": t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
//     },
//     ln.isBetween = function(e, t, n, s) {
//         return ("(" === (s = s || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
//     },
//     ln.isSame = function(e, t) {
//         var n, s = S(e) ? e: Tt(e);
//         return ! (!this.isValid() || !s.isValid()) && ("millisecond" === (t = R(t || "millisecond")) ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
//     },
//     ln.isSameOrAfter = function(e, t) {
//         return this.isSame(e, t) || this.isAfter(e, t)
//     },
//     ln.isSameOrBefore = function(e, t) {
//         return this.isSame(e, t) || this.isBefore(e, t)
//     },
//     ln.isValid = function() {
//         return p(this)
//     },
//     ln.lang = Xt,
//     ln.locale = Qt,
//     ln.localeData = Kt,
//     ln.max = bt,
//     ln.min = xt,
//     ln.parsingFlags = function() {
//         return _({},
//         g(this))
//     },
//     ln.set = function(e, t) {
//         if ("object" == typeof e) for (var n = function(e) {
//             var t = [];
//             for (var n in e) t.push({
//                 unit: n,
//                 priority: F[n]
//             });
//             return t.sort(function(e, t) {
//                 return e.priority - t.priority
//             }),
//             t
//         } (e = C(e)), s = 0; s < n.length; s++) this[n[s].unit](e[n[s].unit]);
//         else if (x(this[e = R(e)])) return this[e](t);
//         return this
//     },
//     ln.startOf = function(e) {
//         switch (e = R(e)) {
//         case "year":
//             this.month(0);
//         case "quarter":
//         case "month":
//             this.date(1);
//         case "week":
//         case "isoWeek":
//         case "day":
//         case "date":
//             this.hours(0);
//         case "hour":
//             this.minutes(0);
//         case "minute":
//             this.seconds(0);
//         case "second":
//             this.milliseconds(0)
//         }
//         return "week" === e && this.weekday(0),
//         "isoWeek" === e && this.isoWeekday(1),
//         "quarter" === e && this.month(3 * Math.floor(this.month() / 3)),
//         this
//     },
//     ln.subtract = Jt,
//     ln.toArray = function() {
//         var e = this;
//         return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
//     },
//     ln.toObject = function() {
//         var e = this;
//         return {
//             years: e.year(),
//             months: e.month(),
//             date: e.date(),
//             hours: e.hours(),
//             minutes: e.minutes(),
//             seconds: e.seconds(),
//             milliseconds: e.milliseconds()
//         }
//     },
//     ln.toDate = function() {
//         return new Date(this.valueOf())
//     },
//     ln.toISOString = function(e) {
//         if (!this.isValid()) return null;
//         var t = !0 !== e,
//         n = t ? this.clone().utc() : this;
//         return n.year() < 0 || 9999 < n.year() ? A(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]": "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : x(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", A(n, "Z")) : A(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]": "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
//     },
//     ln.inspect = function() {
//         if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
//         var e = "moment",
//         t = "";
//         this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc": "moment.parseZone", t = "Z");
//         var n = "[" + e + '("]',
//         s = 0 <= this.year() && this.year() <= 9999 ? "YYYY": "YYYYYY",
//         i = t + '[")]';
//         return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i)
//     },
//     ln.toJSON = function() {
//         return this.isValid() ? this.toISOString() : null
//     },
//     ln.toString = function() {
//         return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
//     },
//     ln.unix = function() {
//         return Math.floor(this.valueOf() / 1e3)
//     },
//     ln.valueOf = function() {
//         return this._d.valueOf() - 6e4 * (this._offset || 0)
//     },
//     ln.creationData = function() {
//         return {
//             input: this._i,
//             format: this._f,
//             locale: this._locale,
//             isUTC: this._isUTC,
//             strict: this._strict
//         }
//     },
//     ln.year = Oe,
//     ln.isLeapYear = function() {
//         return ke(this.year())
//     },
//     ln.weekYear = function(e) {
//         return tn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
//     },
//     ln.isoWeekYear = function(e) {
//         return tn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
//     },
//     ln.quarter = ln.quarters = function(e) {
//         return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
//     },
//     ln.month = Fe,
//     ln.daysInMonth = function() {
//         return Pe(this.year(), this.month())
//     },
//     ln.week = ln.weeks = function(e) {
//         var t = this.localeData().week(this);
//         return null == e ? t: this.add(7 * (e - t), "d")
//     },
//     ln.isoWeek = ln.isoWeeks = function(e) {
//         var t = Ie(this, 1, 4).week;
//         return null == e ? t: this.add(7 * (e - t), "d")
//     },
//     ln.weeksInYear = function() {
//         var e = this.localeData()._week;
//         return Ae(this.year(), e.dow, e.doy)
//     },
//     ln.isoWeeksInYear = function() {
//         return Ae(this.year(), 1, 4)
//     },
//     ln.date = nn,
//     ln.day = ln.days = function(e) {
//         if (!this.isValid()) return null != e ? this: NaN;
//         var t, n, s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
//         return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t: isNaN(t) ? "number" == typeof(t = n.weekdaysParse(t)) ? t: null: parseInt(t, 10), this.add(e - s, "d")) : s
//     },
//     ln.weekday = function(e) {
//         if (!this.isValid()) return null != e ? this: NaN;
//         var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
//         return null == e ? t: this.add(e - t, "d")
//     },
//     ln.isoWeekday = function(e) {
//         if (!this.isValid()) return null != e ? this: NaN;
//         if (null != e) {
//             var t = (n = e, s = this.localeData(), "string" == typeof n ? s.weekdaysParse(n) % 7 || 7 : isNaN(n) ? null: n);
//             return this.day(this.day() % 7 ? t: t - 7)
//         }
//         return this.day() || 7;
//         var n, s
//     }, ln.dayOfYear = function(e) {
//         var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
//         return null == e ? t: this.add(e - t, "d")
//     },
//     ln.hour = ln.hours = tt,
//     ln.minute = ln.minutes = sn,
//     ln.second = ln.seconds = an,
//     ln.millisecond = ln.milliseconds = un,
//     ln.utcOffset = function(e, t, n) {
//         var s, i = this._offset || 0;
//         if (!this.isValid()) return null != e ? this: NaN;
//         if (null != e) {
//             if ("string" == typeof e) {
//                 if (null === (e = Ut(re, e))) return this
//             } else Math.abs(e) < 16 && !n && (e *= 60);
//             return ! this._isUTC && t && (s = Gt(this)),
//             this._offset = e,
//             this._isUTC = !0,
//             null != s && this.add(s, "m"),
//             i !== e && (!t || this._changeInProgress ? $t(this, At(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, c.updateOffset(this, !0), this._changeInProgress = null)),
//             this
//         }
//         return this._isUTC ? i: Gt(this)
//     },
//     ln.utc = function(e) {
//         return this.utcOffset(0, e)
//     },
//     ln.local = function(e) {
//         return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Gt(this), "m")),
//         this
//     },
//     ln.parseZone = function() {
//         if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
//         else if ("string" == typeof this._i) {
//             var e = Ut(ie, this._i);
//             null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
//         }
//         return this
//     },
//     ln.hasAlignedHourOffset = function(e) {
//         return !! this.isValid() && (e = e ? Tt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
//     },
//     ln.isDST = function() {
//         return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
//     },
//     ln.isLocal = function() {
//         return !! this.isValid() && !this._isUTC
//     },
//     ln.isUtcOffset = function() {
//         return !! this.isValid() && this._isUTC
//     },
//     ln.isUtc = Vt,
//     ln.isUTC = Vt,
//     ln.zoneAbbr = function() {
//         return this._isUTC ? "UTC": ""
//     },
//     ln.zoneName = function() {
//         return this._isUTC ? "Coordinated Universal Time": ""
//     },
//     ln.dates = n("dates accessor is deprecated. Use date instead.", nn),
//     ln.months = n("months accessor is deprecated. Use month instead", Fe),
//     ln.years = n("years accessor is deprecated. Use year instead", Oe),
//     ln.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
//     function(e, t) {
//         return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
//     }),
//     ln.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
//     function() {
//         if (!l(this._isDSTShifted)) return this._isDSTShifted;
//         var e = {};
//         if (w(e, this), (e = Yt(e))._a) {
//             var t = e._isUTC ? y(e._a) : Tt(e._a);
//             this._isDSTShifted = this.isValid() && 0 < a(e._a, t.toArray())
//         } else this._isDSTShifted = !1;
//         return this._isDSTShifted
//     });
//     var hn = P.prototype;
//     function cn(e, t, n, s) {
//         var i = lt(),
//         r = y().set(s, t);
//         return i[n](r, e)
//     }
//     function fn(e, t, n) {
//         if (d(e) && (t = e, e = void 0), e = e || "", null != t) return cn(e, t, n, "month");
//         var s, i = [];
//         for (s = 0; s < 12; s++) i[s] = cn(e, s, n, "month");
//         return i
//     }
//     function mn(e, t, n, s) {
//         "boolean" == typeof e ? d(t) && (n = t, t = void 0) : (t = e, e = !1, d(n = t) && (n = t, t = void 0)),
//         t = t || "";
//         var i, r = lt(),
//         a = e ? r._week.dow: 0;
//         if (null != n) return cn(t, (n + a) % 7, s, "day");
//         var o = [];
//         for (i = 0; i < 7; i++) o[i] = cn(t, (i + a) % 7, s, "day");
//         return o
//     }
//     hn.calendar = function(e, t, n) {
//         var s = this._calendar[e] || this._calendar.sameElse;
//         return x(s) ? s.call(t, n) : s
//     },
//     hn.longDateFormat = function(e) {
//         var t = this._longDateFormat[e],
//         n = this._longDateFormat[e.toUpperCase()];
//         return t || !n ? t: (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g,
//         function(e) {
//             return e.slice(1)
//         }), this._longDateFormat[e])
//     },
//     hn.invalidDate = function() {
//         return this._invalidDate
//     },
//     hn.ordinal = function(e) {
//         return this._ordinal.replace("%d", e)
//     },
//     hn.preparse = dn,
//     hn.postformat = dn,
//     hn.relativeTime = function(e, t, n, s) {
//         var i = this._relativeTime[n];
//         return x(i) ? i(e, t, n, s) : i.replace(/%d/i, e)
//     },
//     hn.pastFuture = function(e, t) {
//         var n = this._relativeTime[0 < e ? "future": "past"];
//         return x(n) ? n(t) : n.replace(/%s/i, t)
//     },
//     hn.set = function(e) {
//         var t, n;
//         for (n in e) x(t = e[n]) ? this[n] = t: this["_" + n] = t;
//         this._config = e,
//         this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
//     },
//     hn.months = function(e, t) {
//         return e ? o(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || We).test(t) ? "format": "standalone"][e.month()] : o(this._months) ? this._months: this._months.standalone
//     },
//     hn.monthsShort = function(e, t) {
//         return e ? o(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[We.test(t) ? "format": "standalone"][e.month()] : o(this._monthsShort) ? this._monthsShort: this._monthsShort.standalone
//     },
//     hn.monthsParse = function(e, t, n) {
//         var s, i, r;
//         if (this._monthsParseExact) return function(e, t, n) {
//             var s, i, r, a = e.toLocaleLowerCase();
//             if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) r = y([2e3, s]),
//             this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(),
//             this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
//             return n ? "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i: null: -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i: null: "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i: -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i: null: -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i: -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i: null
//         }.call(this, e, t, n);
//         for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
//             if (i = y([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s;
//             if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
//             if (!n && this._monthsParse[s].test(e)) return s
//         }
//     },
//     hn.monthsRegex = function(e) {
//         return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this), e ? this._monthsStrictRegex: this._monthsRegex) : (m(this, "_monthsRegex") || (this._monthsRegex = Ue), this._monthsStrictRegex && e ? this._monthsStrictRegex: this._monthsRegex)
//     },
//     hn.monthsShortRegex = function(e) {
//         return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this), e ? this._monthsShortStrictRegex: this._monthsShortRegex) : (m(this, "_monthsShortRegex") || (this._monthsShortRegex = Le), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex: this._monthsShortRegex)
//     },
//     hn.week = function(e) {
//         return Ie(e, this._week.dow, this._week.doy).week
//     },
//     hn.firstDayOfYear = function() {
//         return this._week.doy
//     },
//     hn.firstDayOfWeek = function() {
//         return this._week.dow
//     },
//     hn.weekdays = function(e, t) {
//         return e ? o(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format": "standalone"][e.day()] : o(this._weekdays) ? this._weekdays: this._weekdays.standalone
//     },
//     hn.weekdaysMin = function(e) {
//         return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
//     },
//     hn.weekdaysShort = function(e) {
//         return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
//     },
//     hn.weekdaysParse = function(e, t, n) {
//         var s, i, r;
//         if (this._weekdaysParseExact) return function(e, t, n) {
//             var s, i, r, a = e.toLocaleLowerCase();
//             if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) r = y([2e3, 1]).day(s),
//             this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(),
//             this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(),
//             this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
//             return n ? "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i: null: "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i: null: -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i: null: "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i: -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i: -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i: null: "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i: -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i: -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i: null: -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i: -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i: -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i: null
//         }.call(this, e, t, n);
//         for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
//             if (i = y([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s;
//             if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
//             if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
//             if (!n && this._weekdaysParse[s].test(e)) return s
//         }
//     },
//     hn.weekdaysRegex = function(e) {
//         return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysStrictRegex: this._weekdaysRegex) : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = $e), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex: this._weekdaysRegex)
//     },
//     hn.weekdaysShortRegex = function(e) {
//         return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysShortStrictRegex: this._weekdaysShortRegex) : (m(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = qe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex: this._weekdaysShortRegex)
//     },
//     hn.weekdaysMinRegex = function(e) {
//         return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Be.call(this), e ? this._weekdaysMinStrictRegex: this._weekdaysMinRegex) : (m(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Je), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex: this._weekdaysMinRegex)
//     },
//     hn.isPM = function(e) {
//         return "p" === (e + "").toLowerCase().charAt(0)
//     },
//     hn.meridiem = function(e, t, n) {
//         return 11 < e ? n ? "pm": "PM": n ? "am": "AM"
//     },
//     ot("en", {
//         dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
//         ordinal: function(e) {
//             var t = e % 10;
//             return e + (1 === k(e % 100 / 10) ? "th": 1 === t ? "st": 2 === t ? "nd": 3 === t ? "rd": "th")
//         }
//     }),
//     c.lang = n("moment.lang is deprecated. Use moment.locale instead.", ot),
//     c.langData = n("moment.langData is deprecated. Use moment.localeData instead.", lt);
//     var _n = Math.abs;
//     function yn(e, t, n, s) {
//         var i = At(t, n);
//         return e._milliseconds += s * i._milliseconds,
//         e._days += s * i._days,
//         e._months += s * i._months,
//         e._bubble()
//     }
//     function gn(e) {
//         return e < 0 ? Math.floor(e) : Math.ceil(e)
//     }
//     function pn(e) {
//         return 4800 * e / 146097
//     }
//     function vn(e) {
//         return 146097 * e / 4800
//     }
//     function wn(e) {
//         return function() {
//             return this.as(e)
//         }
//     }
//     var Mn = wn("ms"),
//     Sn = wn("s"),
//     Dn = wn("m"),
//     kn = wn("h"),
//     Yn = wn("d"),
//     On = wn("w"),
//     Tn = wn("M"),
//     xn = wn("y");
//     function bn(e) {
//         return function() {
//             return this.isValid() ? this._data[e] : NaN
//         }
//     }
//     var Pn = bn("milliseconds"),
//     Wn = bn("seconds"),
//     Hn = bn("minutes"),
//     Rn = bn("hours"),
//     Cn = bn("days"),
//     Fn = bn("months"),
//     Ln = bn("years");
//     var Un = Math.round,
//     Nn = {
//         ss: 44,
//         s: 45,
//         m: 45,
//         h: 22,
//         d: 26,
//         M: 11
//     };
//     var Gn = Math.abs;
//     function Vn(e) {
//         return (0 < e) - (e < 0) || +e
//     }
//     function En() {
//         if (!this.isValid()) return this.localeData().invalidDate();
//         var e, t, n = Gn(this._milliseconds) / 1e3,
//         s = Gn(this._days),
//         i = Gn(this._months);
//         t = D((e = D(n / 60)) / 60),
//         n %= 60,
//         e %= 60;
//         var r = D(i / 12),
//         a = i %= 12,
//         o = s,
//         u = t,
//         l = e,
//         d = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
//         h = this.asSeconds();
//         if (!h) return "P0D";
//         var c = h < 0 ? "-": "",
//         f = Vn(this._months) !== Vn(h) ? "-": "",
//         m = Vn(this._days) !== Vn(h) ? "-": "",
//         _ = Vn(this._milliseconds) !== Vn(h) ? "-": "";
//         return c + "P" + (r ? f + r + "Y": "") + (a ? f + a + "M": "") + (o ? m + o + "D": "") + (u || l || d ? "T": "") + (u ? _ + u + "H": "") + (l ? _ + l + "M": "") + (d ? _ + d + "S": "")
//     }
//     var In = Ht.prototype;
//     return In.isValid = function() {
//         return this._isValid
//     },
//     In.abs = function() {
//         var e = this._data;
//         return this._milliseconds = _n(this._milliseconds),
//         this._days = _n(this._days),
//         this._months = _n(this._months),
//         e.milliseconds = _n(e.milliseconds),
//         e.seconds = _n(e.seconds),
//         e.minutes = _n(e.minutes),
//         e.hours = _n(e.hours),
//         e.months = _n(e.months),
//         e.years = _n(e.years),
//         this
//     },
//     In.add = function(e, t) {
//         return yn(this, e, t, 1)
//     },
//     In.subtract = function(e, t) {
//         return yn(this, e, t, -1)
//     },
//     In.as = function(e) {
//         if (!this.isValid()) return NaN;
//         var t, n, s = this._milliseconds;
//         if ("month" === (e = R(e)) || "year" === e) return t = this._days + s / 864e5,
//         n = this._months + pn(t),
//         "month" === e ? n: n / 12;
//         switch (t = this._days + Math.round(vn(this._months)), e) {
//         case "week":
//             return t / 7 + s / 6048e5;
//         case "day":
//             return t + s / 864e5;
//         case "hour":
//             return 24 * t + s / 36e5;
//         case "minute":
//             return 1440 * t + s / 6e4;
//         case "second":
//             return 86400 * t + s / 1e3;
//         case "millisecond":
//             return Math.floor(864e5 * t) + s;
//         default:
//             throw new Error("Unknown unit " + e)
//         }
//     },
//     In.asMilliseconds = Mn,
//     In.asSeconds = Sn,
//     In.asMinutes = Dn,
//     In.asHours = kn,
//     In.asDays = Yn,
//     In.asWeeks = On,
//     In.asMonths = Tn,
//     In.asYears = xn,
//     In.valueOf = function() {
//         return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
//     },
//     In._bubble = function() {
//         var e, t, n, s, i, r = this._milliseconds,
//         a = this._days,
//         o = this._months,
//         u = this._data;
//         return 0 <= r && 0 <= a && 0 <= o || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * gn(vn(o) + a), o = a = 0),
//         u.milliseconds = r % 1e3,
//         e = D(r / 1e3),
//         u.seconds = e % 60,
//         t = D(e / 60),
//         u.minutes = t % 60,
//         n = D(t / 60),
//         u.hours = n % 24,
//         o += i = D(pn(a += D(n / 24))),
//         a -= gn(vn(i)),
//         s = D(o / 12),
//         o %= 12,
//         u.days = a,
//         u.months = o,
//         u.years = s,
//         this
//     },
//     In.clone = function() {
//         return At(this)
//     },
//     In.get = function(e) {
//         return e = R(e),
//         this.isValid() ? this[e + "s"]() : NaN
//     },
//     In.milliseconds = Pn,
//     In.seconds = Wn,
//     In.minutes = Hn,
//     In.hours = Rn,
//     In.days = Cn,
//     In.weeks = function() {
//         return D(this.days() / 7)
//     },
//     In.months = Fn,
//     In.years = Ln,
//     In.humanize = function(e) {
//         if (!this.isValid()) return this.localeData().invalidDate();
//         var t, n, s, i, r, a, o, u, l, d, h, c = this.localeData(),
//         f = (n = !e, s = c, i = At(t = this).abs(), r = Un(i.as("s")), a = Un(i.as("m")), o = Un(i.as("h")), u = Un(i.as("d")), l = Un(i.as("M")), d = Un(i.as("y")), (h = r <= Nn.ss && ["s", r] || r < Nn.s && ["ss", r] || a <= 1 && ["m"] || a < Nn.m && ["mm", a] || o <= 1 && ["h"] || o < Nn.h && ["hh", o] || u <= 1 && ["d"] || u < Nn.d && ["dd", u] || l <= 1 && ["M"] || l < Nn.M && ["MM", l] || d <= 1 && ["y"] || ["yy", d])[2] = n, h[3] = 0 < +t, h[4] = s,
//         function(e, t, n, s, i) {
//             return i.relativeTime(t || 1, !!n, e, s)
//         }.apply(null, h));
//         return e && (f = c.pastFuture( + this, f)),
//         c.postformat(f)
//     },
//     In.toISOString = En,
//     In.toString = En,
//     In.toJSON = En,
//     In.locale = Qt,
//     In.localeData = Kt,
//     In.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", En),
//     In.lang = Xt,
//     I("X", 0, 0, "unix"),
//     I("x", 0, 0, "valueOf"),
//     ue("x", se),
//     ue("X", /[+-]?\d+(\.\d{1,3})?/),
//     ce("X",
//     function(e, t, n) {
//         n._d = new Date(1e3 * parseFloat(e, 10))
//     }),
//     ce("x",
//     function(e, t, n) {
//         n._d = new Date(k(e))
//     }),
//     c.version = "2.22.1",
//     e = Tt,
//     c.fn = ln,
//     c.min = function() {
//         return Pt("isBefore", [].slice.call(arguments, 0))
//     },
//     c.max = function() {
//         return Pt("isAfter", [].slice.call(arguments, 0))
//     },
//     c.now = function() {
//         return Date.now ? Date.now() : +new Date
//     },
//     c.utc = y,
//     c.unix = function(e) {
//         return Tt(1e3 * e)
//     },
//     c.months = function(e, t) {
//         return fn(e, t, "months")
//     },
//     c.isDate = h,
//     c.locale = ot,
//     c.invalid = v,
//     c.duration = At,
//     c.isMoment = S,
//     c.weekdays = function(e, t, n) {
//         return mn(e, t, n, "weekdays")
//     },
//     c.parseZone = function() {
//         return Tt.apply(null, arguments).parseZone()
//     },
//     c.localeData = lt,
//     c.isDuration = Rt,
//     c.monthsShort = function(e, t) {
//         return fn(e, t, "monthsShort")
//     },
//     c.weekdaysMin = function(e, t, n) {
//         return mn(e, t, n, "weekdaysMin")
//     },
//     c.defineLocale = ut,
//     c.updateLocale = function(e, t) {
//         if (null != t) {
//             var n, s, i = nt;
//             null != (s = at(e)) && (i = s._config),
//             (n = new P(t = b(i, t))).parentLocale = st[e],
//             st[e] = n,
//             ot(e)
//         } else null != st[e] && (null != st[e].parentLocale ? st[e] = st[e].parentLocale: null != st[e] && delete st[e]);
//         return st[e]
//     },
//     c.locales = function() {
//         return s(st)
//     },
//     c.weekdaysShort = function(e, t, n) {
//         return mn(e, t, n, "weekdaysShort")
//     },
//     c.normalizeUnits = R,
//     c.relativeTimeRounding = function(e) {
//         return void 0 === e ? Un: "function" == typeof e && (Un = e, !0)
//     },
//     c.relativeTimeThreshold = function(e, t) {
//         return void 0 !== Nn[e] && (void 0 === t ? Nn[e] : (Nn[e] = t, "s" === e && (Nn.ss = t - 1), !0))
//     },
//     c.calendarFormat = function(e, t) {
//         var n = e.diff(t, "days", !0);
//         return n < -6 ? "sameElse": n < -1 ? "lastWeek": n < 0 ? "lastDay": n < 1 ? "sameDay": n < 2 ? "nextDay": n < 7 ? "nextWeek": "sameElse"
//     },
//     c.prototype = ln,
//     c.HTML5_FMT = {
//         DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
//         DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
//         DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
//         DATE: "YYYY-MM-DD",
//         TIME: "HH:mm",
//         TIME_SECONDS: "HH:mm:ss",
//         TIME_MS: "HH:mm:ss.SSS",
//         WEEK: "YYYY-[W]WW",
//         MONTH: "YYYY-MM"
//     },
//     c
// });

/**
* @version: 3.0.3
* @author: Dan Grossman http://www.dangrossman.info/
* @copyright: Copyright (c) 2012-2018 Dan Grossman. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
* @website: http://www.daterangepicker.com/
*/
// Following the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Make globaly available as well
        define(['moment', 'jquery'],
        function(moment, jquery) {
            if (!jquery.fn) jquery.fn = {}; // webpack server rendering
            if (typeof moment !== 'function' && moment.
        default) moment = moment.
        default
            return factory(moment, jquery);
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node / Browserify
        //isomorphic issue
        var jQuery = (typeof window != 'undefined') ? window.jQuery: undefined;
        if (!jQuery) {
            jQuery = require('jquery');
            if (!jQuery.fn) jQuery.fn = {};
        }
        var moment = (typeof window != 'undefined' && typeof window.moment != 'undefined') ? window.moment: require('moment');
        module.exports = factory(moment, jQuery);
    } else {
        // Browser globals
        root.daterangepicker = factory(root.moment, root.jQuery);
    }
} (this,
function(moment, $) {
    var DateRangePicker = function(element, options, cb) {

        //default settings for options
        this.parentEl = 'body';
        this.element = $(element);
        this.startDate = moment().startOf('day');
        this.endDate = moment().endOf('day');
        this.minDate = false;
        this.maxDate = false;
        this.maxSpan = false;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.minYear = moment().subtract(100, 'year').format('YYYY');
        this.maxYear = moment().add(100, 'year').format('YYYY');
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.showCustomRangeLabel = true;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.linkedCalendars = true;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.ranges = {};

        this.opens = 'right';
        if (this.element.hasClass('pull-right')) this.opens = 'left';

        this.drops = 'down';
        if (this.element.hasClass('dropup')) this.drops = 'up';

        this.buttonClasses = 'btn btn-sm';
        this.applyButtonClasses = 'btn-primary';
        this.cancelButtonClasses = 'btn-default';

        this.locale = {
            direction: 'ltr',
            format: moment.localeData().longDateFormat('L'),
            separator: ' - ',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek()
        };

        this.callback = function() {};

        //some state information
        this.isShowing = false;
        this.leftCalendar = {};
        this.rightCalendar = {};

        //custom options from user
        if (typeof options !== 'object' || options === null) options = {};

        //allow setting options with data attributes
        //data-api options will be overwritten with custom javascript options
        options = $.extend(this.element.data(), options);

        //html template for the picker UI
        if (typeof options.template !== 'string' && !(options.template instanceof $)) options.template = '<div class="daterangepicker">' + '<div class="ranges"></div>' + '<div class="drp-calendar left">' + '<div class="calendar-table"></div>' + '<div class="calendar-time"></div>' + '</div>' + '<div class="drp-calendar right">' + '<div class="calendar-table"></div>' + '<div class="calendar-time"></div>' + '</div>' + '<div class="drp-buttons">' + '<span class="drp-selected"></span>' + '<button class="cancelBtn" type="button"></button>' + '<button class="applyBtn" disabled="disabled" type="button"></button> ' + '</div>' + '</div>';

        this.parentEl = (options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
        this.container = $(options.template).appendTo(this.parentEl);

        //
        // handle all the possible options overriding defaults
        //
        if (typeof options.locale === 'object') {

            if (typeof options.locale.direction === 'string') this.locale.direction = options.locale.direction;

            if (typeof options.locale.format === 'string') this.locale.format = options.locale.format;

            if (typeof options.locale.separator === 'string') this.locale.separator = options.locale.separator;

            if (typeof options.locale.daysOfWeek === 'object') this.locale.daysOfWeek = options.locale.daysOfWeek.slice();

            if (typeof options.locale.monthNames === 'object') this.locale.monthNames = options.locale.monthNames.slice();

            if (typeof options.locale.firstDay === 'number') this.locale.firstDay = options.locale.firstDay;

            if (typeof options.locale.applyLabel === 'string') this.locale.applyLabel = options.locale.applyLabel;

            if (typeof options.locale.cancelLabel === 'string') this.locale.cancelLabel = options.locale.cancelLabel;

            if (typeof options.locale.weekLabel === 'string') this.locale.weekLabel = options.locale.weekLabel;

            if (typeof options.locale.customRangeLabel === 'string') {
                //Support unicode chars in the custom range name.
                var elem = document.createElement('textarea');
                elem.innerHTML = options.locale.customRangeLabel;
                var rangeHtml = elem.value;
                this.locale.customRangeLabel = rangeHtml;
            }
        }
        this.container.addClass(this.locale.direction);

        if (typeof options.startDate === 'string') this.startDate = moment(options.startDate, this.locale.format);

        if (typeof options.endDate === 'string') this.endDate = moment(options.endDate, this.locale.format);

        if (typeof options.minDate === 'string') this.minDate = moment(options.minDate, this.locale.format);

        if (typeof options.maxDate === 'string') this.maxDate = moment(options.maxDate, this.locale.format);

        if (typeof options.startDate === 'object') this.startDate = moment(options.startDate);

        if (typeof options.endDate === 'object') this.endDate = moment(options.endDate);

        if (typeof options.minDate === 'object') this.minDate = moment(options.minDate);

        if (typeof options.maxDate === 'object') this.maxDate = moment(options.maxDate);

        // sanity check for bad options
        if (this.minDate && this.startDate.isBefore(this.minDate)) this.startDate = this.minDate.clone();

        // sanity check for bad options
        if (this.maxDate && this.endDate.isAfter(this.maxDate)) this.endDate = this.maxDate.clone();

        if (typeof options.applyButtonClasses === 'string') this.applyButtonClasses = options.applyButtonClasses;

        if (typeof options.applyClass === 'string') //backwards compat
        this.applyButtonClasses = options.applyClass;

        if (typeof options.cancelButtonClasses === 'string') this.cancelButtonClasses = options.cancelButtonClasses;

        if (typeof options.cancelClass === 'string') //backwards compat
        this.cancelButtonClasses = options.cancelClass;

        if (typeof options.maxSpan === 'object') this.maxSpan = options.maxSpan;

        if (typeof options.dateLimit === 'object') //backwards compat
        this.maxSpan = options.dateLimit;

        if (typeof options.opens === 'string') this.opens = options.opens;

        if (typeof options.drops === 'string') this.drops = options.drops;

        if (typeof options.showWeekNumbers === 'boolean') this.showWeekNumbers = options.showWeekNumbers;

        if (typeof options.showISOWeekNumbers === 'boolean') this.showISOWeekNumbers = options.showISOWeekNumbers;

        if (typeof options.buttonClasses === 'string') this.buttonClasses = options.buttonClasses;

        if (typeof options.buttonClasses === 'object') this.buttonClasses = options.buttonClasses.join(' ');

        if (typeof options.showDropdowns === 'boolean') this.showDropdowns = options.showDropdowns;

        if (typeof options.minYear === 'number') this.minYear = options.minYear;

        if (typeof options.maxYear === 'number') this.maxYear = options.maxYear;

        if (typeof options.showCustomRangeLabel === 'boolean') this.showCustomRangeLabel = options.showCustomRangeLabel;

        if (typeof options.singleDatePicker === 'boolean') {
            this.singleDatePicker = options.singleDatePicker;
            if (this.singleDatePicker) this.endDate = this.startDate.clone();
        }

        if (typeof options.timePicker === 'boolean') this.timePicker = options.timePicker;

        if (typeof options.timePickerSeconds === 'boolean') this.timePickerSeconds = options.timePickerSeconds;

        if (typeof options.timePickerIncrement === 'number') this.timePickerIncrement = options.timePickerIncrement;

        if (typeof options.timePicker24Hour === 'boolean') this.timePicker24Hour = options.timePicker24Hour;

        if (typeof options.autoApply === 'boolean') this.autoApply = options.autoApply;

        if (typeof options.autoUpdateInput === 'boolean') this.autoUpdateInput = options.autoUpdateInput;

        if (typeof options.linkedCalendars === 'boolean') this.linkedCalendars = options.linkedCalendars;

        if (typeof options.isInvalidDate === 'function') this.isInvalidDate = options.isInvalidDate;

        if (typeof options.isCustomDate === 'function') this.isCustomDate = options.isCustomDate;

        if (typeof options.alwaysShowCalendars === 'boolean') this.alwaysShowCalendars = options.alwaysShowCalendars;

        // update day names order to firstDay
        if (this.locale.firstDay != 0) {
            var iterator = this.locale.firstDay;
            while (iterator > 0) {
                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                iterator--;
            }
        }

        var start, end, range;

        //if no start/end dates set, check if an input element contains initial values
        if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
            if ($(this.element).is(':text')) {
                var val = $(this.element).val(),
                split = val.split(this.locale.separator);

                start = end = null;

                if (split.length == 2) {
                    start = moment(split[0], this.locale.format);
                    end = moment(split[1], this.locale.format);
                } else if (this.singleDatePicker && val !== "") {
                    start = moment(val, this.locale.format);
                    end = moment(val, this.locale.format);
                }
                if (start !== null && end !== null) {
                    this.setStartDate(start);
                    this.setEndDate(end);
                }
            }
        }

        if (typeof options.ranges === 'object') {
            for (range in options.ranges) {

                if (typeof options.ranges[range][0] === 'string') start = moment(options.ranges[range][0], this.locale.format);
                else start = moment(options.ranges[range][0]);

                if (typeof options.ranges[range][1] === 'string') end = moment(options.ranges[range][1], this.locale.format);
                else end = moment(options.ranges[range][1]);

                // If the start or end date exceed those allowed by the minDate or maxSpan
                // options, shorten the range to the allowable period.
                if (this.minDate && start.isBefore(this.minDate)) start = this.minDate.clone();

                var maxDate = this.maxDate;
                if (this.maxSpan && maxDate && start.clone().add(this.maxSpan).isAfter(maxDate)) maxDate = start.clone().add(this.maxSpan);
                if (maxDate && end.isAfter(maxDate)) end = maxDate.clone();

                // If the end of the range is before the minimum or the start of the range is
                // after the maximum, don't display this range option at all.
                if ((this.minDate && end.isBefore(this.minDate, this.timepicker ? 'minute': 'day')) || (maxDate && start.isAfter(maxDate, this.timepicker ? 'minute': 'day'))) continue;

                //Support unicode chars in the range names.
                var elem = document.createElement('textarea');
                elem.innerHTML = range;
                var rangeHtml = elem.value;

                this.ranges[rangeHtml] = [start, end];
            }

            var list = '<ul>';
            for (range in this.ranges) {
                list += '<li data-range-key="' + range + '">' + range + '</li>';
            }
            if (this.showCustomRangeLabel) {
                list += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + '</li>';
            }
            list += '</ul>';
            this.container.find('.ranges').prepend(list);
        }

        if (typeof cb === 'function') {
            this.callback = cb;
        }

        if (!this.timePicker) {
            this.startDate = this.startDate.startOf('day');
            this.endDate = this.endDate.endOf('day');
            this.container.find('.calendar-time').hide();
        }

        //can't be used together for now
        if (this.timePicker && this.autoApply) this.autoApply = false;

        if (this.autoApply) {
            this.container.addClass('auto-apply');
        }

        if (typeof options.ranges === 'object') this.container.addClass('show-ranges');

        if (this.singleDatePicker) {
            this.container.addClass('single');
            this.container.find('.drp-calendar.left').addClass('single');
            this.container.find('.drp-calendar.left').show();
            this.container.find('.drp-calendar.right').hide();
            if (!this.timePicker) {
                this.container.addClass('auto-apply');
            }
        }

        if ((typeof options.ranges === 'undefined' && !this.singleDatePicker) || this.alwaysShowCalendars) {
            this.container.addClass('show-calendar');
        }

        this.container.addClass('opens' + this.opens);

        //apply CSS classes and labels to buttons
        this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
        if (this.applyButtonClasses.length) this.container.find('.applyBtn').addClass(this.applyButtonClasses);
        if (this.cancelButtonClasses.length) this.container.find('.cancelBtn').addClass(this.cancelButtonClasses);
        this.container.find('.applyBtn').html(this.locale.applyLabel);
        this.container.find('.cancelBtn').html(this.locale.cancelLabel);

        //
        // event listeners
        //
        this.container.find('.drp-calendar').on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this)).on('click.daterangepicker', '.next', $.proxy(this.clickNext, this)).on('mousedown.daterangepicker', 'td.available', $.proxy(this.clickDate, this)).on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this)).on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this)).on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this)).on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this))

        this.container.find('.ranges').on('click.daterangepicker', 'li', $.proxy(this.clickRange, this))

        this.container.find('.drp-buttons').on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this)).on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this))

        if (this.element.is('input') || this.element.is('button')) {
            this.element.on({
                'click.daterangepicker': $.proxy(this.show, this),
                'focus.daterangepicker': $.proxy(this.show, this),
                'keyup.daterangepicker': $.proxy(this.elementChanged, this),
                'keydown.daterangepicker': $.proxy(this.keydown, this) //IE 11 compatibility
            });
        } else {
            this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
            this.element.on('keydown.daterangepicker', $.proxy(this.toggle, this));
        }

        //
        // if attached to a text input, set the initial value
        //
        this.updateElement();

    };

    DateRangePicker.prototype = {

        constructor: DateRangePicker,

        setStartDate: function(startDate) {
            if (typeof startDate === 'string') this.startDate = moment(startDate, this.locale.format);

            if (typeof startDate === 'object') this.startDate = moment(startDate);

            if (!this.timePicker) this.startDate = this.startDate.startOf('day');

            if (this.timePicker && this.timePickerIncrement) this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.minDate && this.startDate.isBefore(this.minDate)) {
                this.startDate = this.minDate.clone();
                if (this.timePicker && this.timePickerIncrement) this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
                this.startDate = this.maxDate.clone();
                if (this.timePicker && this.timePickerIncrement) this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (!this.isShowing) this.updateElement();

            this.updateMonthsInView();
        },

        setEndDate: function(endDate) {
            if (typeof endDate === 'string') this.endDate = moment(endDate, this.locale.format);

            if (typeof endDate === 'object') this.endDate = moment(endDate);

            if (!this.timePicker) this.endDate = this.endDate.add(1, 'd').startOf('day').subtract(1, 'second');

            if (this.timePicker && this.timePickerIncrement) this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.endDate.isBefore(this.startDate)) this.endDate = this.startDate.clone();

            if (this.maxDate && this.endDate.isAfter(this.maxDate)) this.endDate = this.maxDate.clone();

            if (this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate)) this.endDate = this.startDate.clone().add(this.maxSpan);

            this.previousRightTime = this.endDate.clone();

            this.container.find('.drp-selected').html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));

            if (!this.isShowing) this.updateElement();

            this.updateMonthsInView();
        },

        isInvalidDate: function() {
            return false;
        },

        isCustomDate: function() {
            return false;
        },

        updateView: function() {
            if (this.timePicker) {
                this.renderTimePicker('left');
                this.renderTimePicker('right');
                if (!this.endDate) {
                    this.container.find('.right .calendar-time select').attr('disabled', 'disabled').addClass('disabled');
                } else {
                    this.container.find('.right .calendar-time select').removeAttr('disabled').removeClass('disabled');
                }
            }
            if (this.endDate) this.container.find('.drp-selected').html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            this.updateMonthsInView();
            this.updateCalendars();
            this.updateFormInputs();
        },

        updateMonthsInView: function() {
            if (this.endDate) {

                //if both dates are visible already, do nothing
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM')) && (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))) {
                    return;
                }

                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                } else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }

            } else {
                if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
                    this.leftCalendar.month = this.startDate.clone().date(2);
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
            }
            if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
                this.rightCalendar.month = this.maxDate.clone().date(2);
                this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
            }
        },

        updateCalendars: function() {

            if (this.timePicker) {
                var hour, minute, second;
                if (this.endDate) {
                    hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12) hour += 12;
                        if (ampm === 'AM' && hour === 12) hour = 0;
                    }
                } else {
                    hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12) hour += 12;
                        if (ampm === 'AM' && hour === 12) hour = 0;
                    }
                }
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                this.rightCalendar.month.hour(hour).minute(minute).second(second);
            }

            this.renderCalendar('left');
            this.renderCalendar('right');

            //highlight any predefined range matching the current start and end dates
            this.container.find('.ranges li').removeClass('active');
            if (this.endDate == null) return;

            this.calculateChosenLabel();
        },

        renderCalendar: function(side) {

            //
            // Build the matrix of dates that will populate the calendar
            //
            var calendar = side == 'left' ? this.leftCalendar: this.rightCalendar;
            var month = calendar.month.month();
            var year = calendar.month.year();
            var hour = calendar.month.hour();
            var minute = calendar.month.minute();
            var second = calendar.month.second();
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, 'month').month();
            var lastYear = moment(firstDay).subtract(1, 'month').year();
            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day();

            //initialize a 6 rows x 7 columns array for the calendar
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;

            for (var i = 0; i < 6; i++) {
                calendar[i] = [];
            }

            //populate the calendar with date objects
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth) startDay -= 7;

            if (dayOfWeek == this.locale.firstDay) startDay = daysInLastMonth - 6;

            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);

            var col, row;
            for (var i = 0,
            col = 0,
            row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
                curDate.hour(12);

                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
                    calendar[row][col] = this.minDate.clone();
                }

                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
                    calendar[row][col] = this.maxDate.clone();
                }

            }

            //make the calendar object available to hoverDate/clickDate
            if (side == 'left') {
                this.leftCalendar.calendar = calendar;
            } else {
                this.rightCalendar.calendar = calendar;
            }

            //
            // Display the calendar
            //
            var minDate = side == 'left' ? this.minDate: this.startDate;
            var maxDate = this.maxDate;
            var selected = side == 'left' ? this.startDate: this.endDate;
            var arrow = this.locale.direction == 'ltr' ? {
                left: 'chevron-left',
                right: 'chevron-right'
            }: {
                left: 'chevron-right',
                right: 'chevron-left'
            };

            var html = '<table class="table-condensed">';
            html += '<thead>';
            html += '<tr>';

            // add empty cell for week number
            if (this.showWeekNumbers || this.showISOWeekNumbers) html += '<th></th>';

            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
                html += '<th class="prev available"><span></span></th>';
            } else {
                html += '<th></th>';
            }

            var dateHtml = calendar[1][1].format("YYYY年") + this.locale.monthNames[calendar[1][1].month()];

            if (this.showDropdowns) {
                var currentMonth = calendar[1][1].month();
                var currentYear = calendar[1][1].year();
                var maxYear = (maxDate && maxDate.year()) || (this.maxYear);
                var minYear = (minDate && minDate.year()) || (this.minYear);
                var inMinYear = currentYear == minYear;
                var inMaxYear = currentYear == maxYear;

                var monthHtml = '<select class="monthselect">';
                for (var m = 0; m < 12; m++) {
                    if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                        monthHtml += "<option value='" + m + "'" + (m === currentMonth ? " selected='selected'": "") + ">" + this.locale.monthNames[m] + "</option>";
                    } else {
                        monthHtml += "<option value='" + m + "'" + (m === currentMonth ? " selected='selected'": "") + " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
                    }
                }
                monthHtml += "</select>";

                var yearHtml = '<select class="yearselect">';
                for (var y = minYear; y <= maxYear; y++) {
                    yearHtml += '<option value="' + y + '"' + (y === currentYear ? ' selected="selected"': '') + '>' + y + '</option>';
                }
                yearHtml += '</select>';

                dateHtml = yearHtml + monthHtml;
            }

            html += '<th colspan="5" class="month">' + dateHtml + '</th>';
            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
                html += '<th class="next available"><span></span></th>';
            } else {
                html += '<th></th>';
            }

            html += '</tr>';
            html += '<tr>';

            // add week number label
            if (this.showWeekNumbers || this.showISOWeekNumbers) html += '<th class="week">' + this.locale.weekLabel + '</th>';

            $.each(this.locale.daysOfWeek,
            function(index, dayOfWeek) {
                html += '<th>' + dayOfWeek + '</th>';
            });

            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';

            //adjust maxDate to reflect the maxSpan setting in order to
            //grey out end dates beyond the maxSpan
            if (this.endDate == null && this.maxSpan) {
                var maxLimit = this.startDate.clone().add(this.maxSpan).endOf('day');
                if (!maxDate || maxLimit.isBefore(maxDate)) {
                    maxDate = maxLimit;
                }
            }

            for (var row = 0; row < 6; row++) {
                html += '<tr>';

                // add week number
                if (this.showWeekNumbers) html += '<td class="week">' + calendar[row][0].week() + '</td>';
                else if (this.showISOWeekNumbers) html += '<td class="week">' + calendar[row][0].isoWeek() + '</td>';

                for (var col = 0; col < 7; col++) {

                    var classes = [];

                    //highlight today's date
                    if (calendar[row][col].isSame(new Date(), "day")) classes.push('today');

                    //highlight weekends
                    if (calendar[row][col].isoWeekday() > 5) classes.push('weekend');

                    //grey out the dates in other months displayed at beginning and end of this calendar
                    if (calendar[row][col].month() != calendar[1][1].month()) classes.push('off');

                    //don't allow selection of dates before the minimum date
                    if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day')) classes.push('off', 'disabled');

                    //don't allow selection of dates after the maximum date
                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day')) classes.push('off', 'disabled');

                    //don't allow selection of date if a custom function decides it's invalid
                    if (this.isInvalidDate(calendar[row][col])) classes.push('off', 'disabled');

                    //highlight the currently selected start date
                    if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD')) classes.push('active', 'start-date');

                    //highlight the currently selected end date
                    if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD')) classes.push('active', 'end-date');

                    //highlight dates in-between the selected dates
                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate) classes.push('in-range');

                    //apply custom classes for this date
                    var isCustom = this.isCustomDate(calendar[row][col]);
                    if (isCustom !== false) {
                        if (typeof isCustom === 'string') classes.push(isCustom);
                        else Array.prototype.push.apply(classes, isCustom);
                    }

                    var cname = '',
                    disabled = false;
                    for (var i = 0; i < classes.length; i++) {
                        cname += classes[i] + ' ';
                        if (classes[i] == 'disabled') disabled = true;
                    }
                    if (!disabled) cname += 'available';

                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';

                }
                html += '</tr>';
            }

            html += '</tbody>';
            html += '</table>';

            this.container.find('.drp-calendar.' + side + ' .calendar-table').html(html);

        },

        renderTimePicker: function(side) {

            // Don't bother updating the time picker if it's currently disabled
            // because an end date hasn't been clicked yet
            if (side == 'right' && !this.endDate) return;

            var html, selected, minDate, maxDate = this.maxDate;

            if (this.maxSpan && (!this.maxDate || this.startDate.clone().add(this.maxSpan).isAfter(this.maxDate))) maxDate = this.startDate.clone().add(this.maxSpan);

            if (side == 'left') {
                selected = this.startDate.clone();
                minDate = this.minDate;
            } else if (side == 'right') {
                selected = this.endDate.clone();
                minDate = this.startDate;

                //Preserve the time already selected
                var timeSelector = this.container.find('.drp-calendar.right .calendar-time');
                if (timeSelector.html() != '') {

                    selected.hour(selected.hour() || timeSelector.find('.hourselect option:selected').val());
                    selected.minute(selected.minute() || timeSelector.find('.minuteselect option:selected').val());
                    selected.second(selected.second() || timeSelector.find('.secondselect option:selected').val());

                    if (!this.timePicker24Hour) {
                        var ampm = timeSelector.find('.ampmselect option:selected').val();
                        if (ampm === 'PM' && selected.hour() < 12) selected.hour(selected.hour() + 12);
                        if (ampm === 'AM' && selected.hour() === 12) selected.hour(0);
                    }

                }

                if (selected.isBefore(this.startDate)) selected = this.startDate.clone();

                if (maxDate && selected.isAfter(maxDate)) selected = maxDate.clone();

            }

            //
            // hours
            //
            html = '<select class="hourselect">';

            var start = this.timePicker24Hour ? 0 : 1;
            var end = this.timePicker24Hour ? 23 : 12;

            for (var i = start; i <= end; i++) {
                var i_in_24 = i;
                if (!this.timePicker24Hour) i_in_24 = selected.hour() >= 12 ? (i == 12 ? 12 : i + 12) : (i == 12 ? 0 : i);

                var time = selected.clone().hour(i_in_24);
                var disabled = false;
                if (minDate && time.minute(59).isBefore(minDate)) disabled = true;
                if (maxDate && time.minute(0).isAfter(maxDate)) disabled = true;

                if (i_in_24 == selected.hour() && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + i + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
                } else {
                    html += '<option value="' + i + '">' + i + '</option>';
                }
            }

            html += '</select> ';

            //
            // minutes
            //
            html += ': <select class="minuteselect">';

            for (var i = 0; i < 60; i += this.timePickerIncrement) {
                var padded = i < 10 ? '0' + i: i;
                var time = selected.clone().minute(i);

                var disabled = false;
                if (minDate && time.second(59).isBefore(minDate)) disabled = true;
                if (maxDate && time.second(0).isAfter(maxDate)) disabled = true;

                if (selected.minute() == i && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                } else {
                    html += '<option value="' + i + '">' + padded + '</option>';
                }
            }

            html += '</select> ';

            //
            // seconds
            //
            if (this.timePickerSeconds) {
                html += ': <select class="secondselect">';

                for (var i = 0; i < 60; i++) {
                    var padded = i < 10 ? '0' + i: i;
                    var time = selected.clone().second(i);

                    var disabled = false;
                    if (minDate && time.isBefore(minDate)) disabled = true;
                    if (maxDate && time.isAfter(maxDate)) disabled = true;

                    if (selected.second() == i && !disabled) {
                        html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                    } else if (disabled) {
                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                    } else {
                        html += '<option value="' + i + '">' + padded + '</option>';
                    }
                }

                html += '</select> ';
            }

            //
            // AM/PM
            //
            if (!this.timePicker24Hour) {
                html += '<select class="ampmselect">';

                var am_html = '';
                var pm_html = '';

                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate)) am_html = ' disabled="disabled" class="disabled"';

                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate)) pm_html = ' disabled="disabled" class="disabled"';

                if (selected.hour() >= 12) {
                    html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
                } else {
                    html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
                }

                html += '</select>';
            }

            this.container.find('.drp-calendar.' + side + ' .calendar-time').html(html);

        },

        updateFormInputs: function() {

            if (this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))) {
                this.container.find('button.applyBtn').removeAttr('disabled');
            } else {
                this.container.find('button.applyBtn').attr('disabled', 'disabled');
            }

        },

        move: function() {
            var parentOffset = {
                top: 0,
                left: 0
            },
            containerTop;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is('body')) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
            }

            if (this.drops == 'up') containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
            else containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
            this.container[this.drops == 'up' ? 'addClass': 'removeClass']('drop-up');

            if (this.opens == 'left') {
                this.container.css({
                    top: containerTop,
                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                    left: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else if (this.opens == 'center') {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                    right: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left,
                    right: 'auto'
                });
                if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                    this.container.css({
                        left: 'auto',
                        right: 0
                    });
                }
            }
        },

        show: function(e) {
            if (this.isShowing) return;

            // Create a click proxy that is private to this instance of datepicker, for unbinding
            this._outsideClickProxy = $.proxy(function(e) {
                this.outsideClick(e);
            },
            this);

            // Bind global datepicker mousedown for hiding and
            $(document).on('mousedown.daterangepicker', this._outsideClickProxy)
            // also support mobile devices
            .on('touchend.daterangepicker', this._outsideClickProxy)
            // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
            .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
            // and also close when focus changes to outside the picker (eg. tabbing between controls)
            .on('focusin.daterangepicker', this._outsideClickProxy);

            // Reposition the picker if the window is resized while it's open
            $(window).on('resize.daterangepicker', $.proxy(function(e) {
                this.move(e);
            },
            this));

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.previousRightTime = this.endDate.clone();

            this.updateView();
            this.container.show();
            this.move();
            this.element.trigger('show.daterangepicker', this);
            this.isShowing = true;
        },

        hide: function(e) {
            if (!this.isShowing) return;

            //incomplete date selection, revert to last values
            if (!this.endDate) {
                this.startDate = this.oldStartDate.clone();
                this.endDate = this.oldEndDate.clone();
            }

            //if a new date range was selected, invoke the user callback function
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate)) this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel);

            //if picker is attached to a text input, update it
            this.updateElement();

            $(document).off('.daterangepicker');
            $(window).off('.daterangepicker');
            this.container.hide();
            this.element.trigger('hide.daterangepicker', this);
            this.isShowing = false;
        },

        toggle: function(e) {
            if (this.isShowing) {
                this.hide();
            } else {
                this.show();
            }
        },

        outsideClick: function(e) {
            var target = $(e.target);
            // if the page is clicked anywhere except within the daterangerpicker/button
            // itself then call this.hide()
            if (
            // ie modal dialog fix
            e.type == "focusin" || target.closest(this.element).length || target.closest(this.container).length || target.closest('.calendar-table').length) return;
            this.hide();
            this.element.trigger('outsideClick.daterangepicker', this);
        },

        showCalendars: function() {
            this.container.addClass('show-calendar');
            this.move();
            this.element.trigger('showCalendar.daterangepicker', this);
        },

        hideCalendars: function() {
            this.container.removeClass('show-calendar');
            this.element.trigger('hideCalendar.daterangepicker', this);
        },

        clickRange: function(e) {
            var label = e.target.getAttribute('data-range-key');
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars();
            } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];

                if (!this.timePicker) {
                    this.startDate.startOf('day');
                    this.endDate.endOf('day');
                }

                if (!this.alwaysShowCalendars) this.hideCalendars();
                this.clickApply();
            }
        },

        clickPrev: function(e) {
            var cal = $(e.target).parents('.drp-calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.subtract(1, 'month');
                if (this.linkedCalendars) this.rightCalendar.month.subtract(1, 'month');
            } else {
                this.rightCalendar.month.subtract(1, 'month');
            }
            this.updateCalendars();
        },

        clickNext: function(e) {
            var cal = $(e.target).parents('.drp-calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.add(1, 'month');
            } else {
                this.rightCalendar.month.add(1, 'month');
                if (this.linkedCalendars) this.leftCalendar.month.add(1, 'month');
            }
            this.updateCalendars();
        },

        hoverDate: function(e) {

            //ignore dates that can't be selected
            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.drp-calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //highlight the dates between the start date and the date being hovered as a potential end date
            var leftCalendar = this.leftCalendar;
            var rightCalendar = this.rightCalendar;
            var startDate = this.startDate;
            if (!this.endDate) {
                this.container.find('.drp-calendar tbody td').each(function(index, el) {

                    //skip week numbers, only look at dates
                    if ($(el).hasClass('week')) return;

                    var title = $(el).attr('data-title');
                    var row = title.substr(1, 1);
                    var col = title.substr(3, 1);
                    var cal = $(el).parents('.drp-calendar');
                    var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

                    if ((dt.isAfter(startDate) && dt.isBefore(date)) || dt.isSame(date, 'day')) {
                        $(el).addClass('in-range');
                    } else {
                        $(el).removeClass('in-range');
                    }

                });
            }

        },

        clickDate: function(e) {

            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.drp-calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //
            // this function needs to do a few things:
            // * alternate between selecting a start and end date for the range,
            // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
            // * if autoapply is enabled, and an end date was chosen, apply the selection
            // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
            // * if one of the inputs above the calendars was focused, cancel that manual input
            //
            if (this.endDate || date.isBefore(this.startDate, 'day')) { //picking start
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12) hour += 12;
                        if (ampm === 'AM' && hour === 12) hour = 0;
                    }
                    var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.endDate = null;
                this.setStartDate(date.clone());
            } else if (!this.endDate && date.isBefore(this.startDate)) {
                //special case: clicking the same date for start/end,
                //but the time of the end date is before the start date
                this.setEndDate(this.startDate.clone());
            } else { // picking end
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12) hour += 12;
                        if (ampm === 'AM' && hour === 12) hour = 0;
                    }
                    var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.setEndDate(date.clone());
                if (this.autoApply) {
                    this.calculateChosenLabel();
                    this.clickApply();
                }
            }

            if (this.singleDatePicker) {
                this.setEndDate(this.startDate);
                if (!this.timePicker) this.clickApply();
            }

            this.updateView();

            //This is to cancel the blur event handler if the mouse was in one of the inputs
            e.stopPropagation();

        },

        calculateChosenLabel: function() {
            var customRange = true;
            var i = 0;
            for (var range in this.ranges) {
                if (this.timePicker) {
                    var format = this.timePickerSeconds ? "YYYY-MM-DD HH:mm:ss": "YYYY-MM-DD HH:mm";
                    //ignore times when comparing dates if time picker seconds is not enabled
                    if (this.startDate.format(format) == this.ranges[range][0].format(format) && this.endDate.format(format) == this.ranges[range][1].format(format)) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').attr('data-range-key');
                        break;
                    }
                } else {
                    //ignore times when comparing dates if time picker is not enabled
                    if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').attr('data-range-key');
                        break;
                    }
                }
                i++;
            }
            if (customRange) {
                if (this.showCustomRangeLabel) {
                    this.chosenLabel = this.container.find('.ranges li:last').addClass('active').attr('data-range-key');
                } else {
                    this.chosenLabel = null;
                }
                this.showCalendars();
            }
        },

        clickApply: function(e) {
            this.hide();
            this.element.trigger('apply.daterangepicker', this);
        },

        clickCancel: function(e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.hide();
            this.element.trigger('cancel.daterangepicker', this);
        },

        monthOrYearChanged: function(e) {
            var isLeft = $(e.target).closest('.drp-calendar').hasClass('left'),
            leftOrRight = isLeft ? 'left': 'right',
            cal = this.container.find('.drp-calendar.' + leftOrRight);

            // Month must be Number for new moment versions
            var month = parseInt(cal.find('.monthselect').val(), 10);
            var year = cal.find('.yearselect').val();

            if (!isLeft) {
                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
                    month = this.startDate.month();
                    year = this.startDate.year();
                }
            }

            if (this.minDate) {
                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
                    month = this.minDate.month();
                    year = this.minDate.year();
                }
            }

            if (this.maxDate) {
                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
                    month = this.maxDate.month();
                    year = this.maxDate.year();
                }
            }

            if (isLeft) {
                this.leftCalendar.month.month(month).year(year);
                if (this.linkedCalendars) this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            } else {
                this.rightCalendar.month.month(month).year(year);
                if (this.linkedCalendars) this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
            this.updateCalendars();
        },

        timeChanged: function(e) {

            var cal = $(e.target).closest('.drp-calendar'),
            isLeft = cal.hasClass('left');

            var hour = parseInt(cal.find('.hourselect').val(), 10);
            var minute = parseInt(cal.find('.minuteselect').val(), 10);
            var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

            if (!this.timePicker24Hour) {
                var ampm = cal.find('.ampmselect').val();
                if (ampm === 'PM' && hour < 12) hour += 12;
                if (ampm === 'AM' && hour === 12) hour = 0;
            }

            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.setStartDate(start);
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone();
                } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
                    this.setEndDate(start.clone());
                }
            } else if (this.endDate) {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.setEndDate(end);
            }

            //update the calendars so all clickable dates reflect the new time component
            this.updateCalendars();

            //update the form inputs above the calendars with the new time
            this.updateFormInputs();

            //re-render the time pickers because changing one selection can affect what's enabled in another
            this.renderTimePicker('left');
            this.renderTimePicker('right');

        },

        elementChanged: function() {
            if (!this.element.is('input')) return;
            if (!this.element.val().length) return;

            var dateString = this.element.val().split(this.locale.separator),
            start = null,
            end = null;

            if (dateString.length === 2) {
                start = moment(dateString[0], this.locale.format);
                end = moment(dateString[1], this.locale.format);
            }

            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.locale.format);
                end = start;
            }

            if (!start.isValid() || !end.isValid()) return;

            this.setStartDate(start);
            this.setEndDate(end);
            this.updateView();
        },

        keydown: function(e) {
            //hide on tab or enter
            if ((e.keyCode === 9) || (e.keyCode === 13)) {
                this.hide();
            }

            //hide on esc and prevent propagation
            if (e.keyCode === 27) {
                e.preventDefault();
                e.stopPropagation();

                this.hide();
            }
        },

        updateElement: function() {
            if (this.element.is('input') && this.autoUpdateInput) {
                var newValue = this.startDate.format(this.locale.format);
                if (!this.singleDatePicker) {
                    newValue += this.locale.separator + this.endDate.format(this.locale.format);
                }
                if (newValue !== this.element.val()) {
                    this.element.val(newValue).trigger('change');
                }
            }
        },

        remove: function() {
            this.container.remove();
            this.element.off('.daterangepicker');
            this.element.removeData();
        }

    };

    $.fn.daterangepicker = function(options, callback) {
        var implementOptions = $.extend(true, {},
        $.fn.daterangepicker.defaultOptions, options);
        this.each(function() {
            var el = $(this);
            if (el.data('daterangepicker')) el.data('daterangepicker').remove();
            el.data('daterangepicker', new DateRangePicker(el, implementOptions, callback));
        });
        return this;
    };

    return DateRangePicker;

}));
