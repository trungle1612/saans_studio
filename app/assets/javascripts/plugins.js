;
window.Modernizr = function(a, b, c) {
        function x(a) {
            j.cssText = a
        }

        function y(a, b) {
            return x(prefixes.join(a + ";") + (b || ""))
        }

        function z(a, b) {
            return typeof a === b
        }

        function A(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function B(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!A(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function C(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function D(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + n.join(d + " ") + d).split(" ");
            return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
        }
        var d = "2.6.2",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = "Webkit Moz O ms",
            n = m.split(" "),
            o = m.toLowerCase().split(" "),
            p = {},
            q = {},
            r = {},
            s = [],
            t = s.slice,
            u, v = {}.hasOwnProperty,
            w;
        !z(v, "undefined") && !z(v.call, "undefined") ? w = function(a, b) {
            return v.call(a, b)
        } : w = function(a, b) {
            return b in a && z(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = t.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(t.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(t.call(arguments)))
                };
            return e
        }), p.csstransitions = function() {
            return D("transition")
        };
        for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
        return e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) w(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, x(""), i = k = null,
            function(a, b) {
                function k(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function l() {
                    var a = r.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function m(a) {
                    var b = i[a[g]];
                    return b || (b = {}, h++, a[g] = h, i[h] = b), b
                }

                function n(a, c, f) {
                    c || (c = b);
                    if (j) return c.createElement(a);
                    f || (f = m(c));
                    var g;
                    return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
                }

                function o(a, c) {
                    a || (a = b);
                    if (j) return a.createDocumentFragment();
                    c = c || m(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = l(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function p(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return r.shivMethods ? n(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(r, b.frag)
                }

                function q(a) {
                    a || (a = b);
                    var c = m(a);
                    return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
                }
                var c = a.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f, g = "_html5shiv",
                    h = 0,
                    i = {},
                    j;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        f = !0, j = !0
                    }
                })();
                var r = {
                    elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: c.shivCSS !== !1,
                    supportsUnknownElements: j,
                    shivMethods: c.shivMethods !== !1,
                    type: "default",
                    shivDocument: q,
                    createElement: n,
                    createDocumentFragment: o
                };
                a.html5 = r, q(b)
            }(this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function(a) {
                return B([a])
            }, e.testAllProps = D, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});
(function(t) {
    function e() {}

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function n(e, i) {
            t.fn[e] = function(n) {
                if ("string" == typeof n) {
                    for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                        var p = this[a],
                            h = t.data(p, e);
                        if (h)
                            if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
                                var f = h[n].apply(h, s);
                                if (void 0 !== f) return f
                            } else r("no such method '" + n + "' for " + e + " instance");
                        else r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var o = t.data(this, e);
                    o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o))
                })
            }
        }
        if (t) {
            var r = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            };
            return t.bridget = function(t, e) {
                i(e), n(t, e)
            }, t.bridget
        }
    }
    var o = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i(t.jQuery)
})(window),
function(t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }
    var i = document.documentElement,
        o = function() {};
    i.addEventListener ? o = function(t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (o = function(t, i, o) {
        t[i + o] = o.handleEvent ? function() {
            var i = e(t);
            o.handleEvent.call(o, i)
        } : function() {
            var i = e(t);
            o.call(t, i)
        }, t.attachEvent("on" + i, t[i + o])
    });
    var n = function() {};
    i.removeEventListener ? n = function(t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (n = function(t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (o) {
            t[e + i] = void 0
        }
    });
    var r = {
        bind: o,
        unbind: n
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(this),
function(t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : r.push(t))
    }

    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== n.readyState;
        if (!e.isReady && !i) {
            e.isReady = !0;
            for (var o = 0, s = r.length; s > o; o++) {
                var a = r[o];
                a()
            }
        }
    }

    function o(o) {
        return o.bind(n, "DOMContentLoaded", i), o.bind(n, "readystatechange", i), o.bind(t, "load", i), e
    }
    var n = t.document,
        r = [];
    e.isReady = !1, "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], o)) : t.docReady = o(t.eventie)
}(this),
function() {
    function t() {}

    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var o = t.prototype,
        n = this,
        r = n.EventEmitter;
    o.getListeners = function(t) {
        var e, i, o = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
        } else e = o[t] || (o[t] = []);
        return e
    }, o.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
        return i
    }, o.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, o.addListener = function(t, i) {
        var o, n = this.getListenersAsObject(t),
            r = "object" == typeof i;
        for (o in n) n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {
            listener: i,
            once: !1
        });
        return this
    }, o.on = i("addListener"), o.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, o.once = i("addOnceListener"), o.defineEvent = function(t) {
        return this.getListeners(t), this
    }, o.defineEvents = function(t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this
    }, o.removeListener = function(t, i) {
        var o, n, r = this.getListenersAsObject(t);
        for (n in r) r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1));
        return this
    }, o.off = i("removeListener"), o.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, o.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, o.manipulateListeners = function(t, e, i) {
        var o, n, r = t ? this.removeListener : this.addListener,
            s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (o = i.length; o--;) r.call(this, e, i[o]);
        else
            for (o in e) e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
        return this
    }, o.removeEvent = function(t) {
        var e, i = typeof t,
            o = this._getEvents();
        if ("string" === i) delete o[t];
        else if (t instanceof RegExp)
            for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e];
        else delete this._events;
        return this
    }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function(t, e) {
        var i, o, n, r, s = this.getListenersAsObject(t);
        for (n in s)
            if (s.hasOwnProperty(n))
                for (o = s[n].length; o--;) i = s[n][o], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, o.trigger = i("emitEvent"), o.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, o.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, o._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, o._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return n.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof o[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, n = 0, r = i.length; r > n; n++)
                    if (e = i[n] + t, "string" == typeof o[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            o = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function(t) {
        function e(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function i() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, i = s.length; i > e; e++) {
                var o = s[e];
                t[o] = 0
            }
            return t
        }

        function o(t) {
            function o(t) {
                if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var o = r(t);
                    if ("none" === o.display) return i();
                    var n = {};
                    n.width = t.offsetWidth, n.height = t.offsetHeight;
                    for (var h = n.isBorderBox = !(!p || !o[p] || "border-box" !== o[p]), f = 0, d = s.length; d > f; f++) {
                        var l = s[f],
                            c = o[l];
                        c = a(t, c);
                        var y = parseFloat(c);
                        n[l] = isNaN(y) ? 0 : y
                    }
                    var m = n.paddingLeft + n.paddingRight,
                        g = n.paddingTop + n.paddingBottom,
                        v = n.marginLeft + n.marginRight,
                        _ = n.marginTop + n.marginBottom,
                        I = n.borderLeftWidth + n.borderRightWidth,
                        L = n.borderTopWidth + n.borderBottomWidth,
                        z = h && u,
                        S = e(o.width);
                    S !== !1 && (n.width = S + (z ? 0 : m + I));
                    var b = e(o.height);
                    return b !== !1 && (n.height = b + (z ? 0 : g + L)), n.innerWidth = n.width - (m + I), n.innerHeight = n.height - (g + L), n.outerWidth = n.width + v, n.outerHeight = n.height + _, n
                }
            }

            function a(t, e) {
                if (n || -1 === e.indexOf("%")) return e;
                var i = t.style,
                    o = i.left,
                    r = t.runtimeStyle,
                    s = r && r.left;
                return s && (r.left = t.currentStyle.left), i.left = e, e = i.pixelLeft, i.left = o, s && (r.left = s), e
            }
            var u, p = t("boxSizing");
            return function() {
                if (p) {
                    var t = document.createElement("div");
                    t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[p] = "border-box";
                    var i = document.body || document.documentElement;
                    i.appendChild(t);
                    var o = r(t);
                    u = 200 === e(o.width), i.removeChild(t)
                }
            }(), o
        }
        var n = t.getComputedStyle,
            r = n ? function(t) {
                return n(t, null)
            } : function(t) {
                return t.currentStyle
            },
            s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("get-style-property")) : t.getSize = o(t.getStyleProperty)
    }(window),
    function(t, e) {
        function i(t, e) {
            return t[a](e)
        }

        function o(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function n(t, e) {
            o(t);
            for (var i = t.parentNode.querySelectorAll(e), n = 0, r = i.length; r > n; n++)
                if (i[n] === t) return !0;
            return !1
        }

        function r(t, e) {
            return o(t), i(t, e)
        }
        var s, a = function() {
            if (e.matchesSelector) return "matchesSelector";
            for (var t = ["webkit", "moz", "ms", "o"], i = 0, o = t.length; o > i; i++) {
                var n = t[i],
                    r = n + "MatchesSelector";
                if (e[r]) return r
            }
        }();
        if (a) {
            var u = document.createElement("div"),
                p = i(u, "div");
            s = p ? i : r
        } else s = n;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return s
        }) : window.matchesSelector = s
    }(this, Element.prototype),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function o(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }

        function n(t, n, r) {
            function a(t, e) {
                t && (this.element = t, this.layout = e, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var u = r("transition"),
                p = r("transform"),
                h = u && p,
                f = !!r("perspective"),
                d = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                } [u],
                l = ["transform", "transition", "transitionDuration", "transitionProperty"],
                c = function() {
                    for (var t = {}, e = 0, i = l.length; i > e; e++) {
                        var o = l[e],
                            n = r(o);
                        n && n !== o && (t[o] = n)
                    }
                    return t
                }();
            e(a.prototype, t.prototype), a.prototype._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, a.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, a.prototype.getSize = function() {
                this.size = n(this.element)
            }, a.prototype.css = function(t) {
                var e = this.element.style;
                for (var i in t) {
                    var o = c[i] || i;
                    e[o] = t[i]
                }
            }, a.prototype.getPosition = function() {
                var t = s(this.element),
                    e = this.layout.options,
                    i = e.isOriginLeft,
                    o = e.isOriginTop,
                    n = parseInt(t[i ? "left" : "right"], 10),
                    r = parseInt(t[o ? "top" : "bottom"], 10);
                n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r;
                var a = this.layout.size;
                n -= i ? a.paddingLeft : a.paddingRight, r -= o ? a.paddingTop : a.paddingBottom, this.position.x = n, this.position.y = r
            }, a.prototype.layoutPosition = function() {
                var t = this.layout.size,
                    e = this.layout.options,
                    i = {};
                e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
            };
            var y = f ? function(t, e) {
                return "translate3d(" + t + "px, " + e + "px, 0)"
            } : function(t, e) {
                return "translate(" + t + "px, " + e + "px)"
            };
            a.prototype._transitionTo = function(t, e) {
                this.getPosition();
                var i = this.position.x,
                    o = this.position.y,
                    n = parseInt(t, 10),
                    r = parseInt(e, 10),
                    s = n === this.position.x && r === this.position.y;
                if (this.setPosition(t, e), s && !this.isTransitioning) return this.layoutPosition(), void 0;
                var a = t - i,
                    u = e - o,
                    p = {},
                    h = this.layout.options;
                a = h.isOriginLeft ? a : -a, u = h.isOriginTop ? u : -u, p.transform = y(a, u), this.transition({
                    to: p,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, a.prototype.goTo = function(t, e) {
                this.setPosition(t, e), this.layoutPosition()
            }, a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t, e) {
                this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
            }, a.prototype._nonTransition = function(t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
            }, a.prototype._transition = function(t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(t), void 0;
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var o = this.element.offsetHeight;
                    o = null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            };
            var m = p && o(p) + ",opacity";
            a.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: m,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(d, this, !1))
            }, a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t) {
                this.ontransitionend(t)
            }, a.prototype.onotransitionend = function(t) {
                this.ontransitionend(t)
            };
            var g = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            a.prototype.ontransitionend = function(t) {
                if (t.target === this.element) {
                    var e = this._transn,
                        o = g[t.propertyName] || t.propertyName;
                    if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                        var n = e.onEnd[o];
                        n.call(this), delete e.onEnd[o]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, a.prototype.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
            }, a.prototype._removeStyles = function(t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e)
            };
            var v = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return a.prototype.removeTransitionStyles = function() {
                this.css(v)
            }, a.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, a.prototype.remove = function() {
                if (!u || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0;
                var t = this;
                this.on("transitionEnd", function() {
                    return t.removeElem(), !0
                }), this.hide()
            }, a.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.hiddenStyle,
                    to: t.visibleStyle,
                    isCleaning: !0
                })
            }, a.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.visibleStyle,
                    to: t.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, a.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, a
        }
        var r = t.getComputedStyle,
            s = r ? function(t) {
                return r(t, null)
            } : function(t) {
                return t.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n) : (t.Outlayer = {}, t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty))
    }(window),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            return "[object Array]" === f.call(t)
        }

        function o(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
            else e.push(t);
            return e
        }

        function n(t, e) {
            var i = l(e, t); - 1 !== i && e.splice(i, 1)
        }

        function r(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        }

        function s(i, s, f, l, c, y) {
            function m(t, i) {
                if ("string" == typeof t && (t = a.querySelector(t)), !t || !d(t)) return u && u.error("Bad " + this.constructor.namespace + " element: " + t), void 0;
                this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
                var o = ++g;
                this.element.outlayerGUID = o, v[o] = this, this._create(), this.options.isInitLayout && this.layout()
            }
            var g = 0,
                v = {};
            return m.namespace = "outlayer", m.Item = y, m.defaults = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                isResizingContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, e(m.prototype, f.prototype), m.prototype.option = function(t) {
                e(this.options, t)
            }, m.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, m.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, m.prototype._itemize = function(t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
                    var s = e[n],
                        a = new i(s, this);
                    o.push(a)
                }
                return o
            }, m.prototype._filterFindItemElements = function(t) {
                t = o(t);
                for (var e = this.options.itemSelector, i = [], n = 0, r = t.length; r > n; n++) {
                    var s = t[n];
                    if (d(s))
                        if (e) {
                            c(s, e) && i.push(s);
                            for (var a = s.querySelectorAll(e), u = 0, p = a.length; p > u; u++) i.push(a[u])
                        } else i.push(s)
                }
                return i
            }, m.prototype.getItemElements = function() {
                for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
                return t
            }, m.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, t), this._isLayoutInited = !0
            }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function() {
                this.getSize()
            }, m.prototype.getSize = function() {
                this.size = l(this.element)
            }, m.prototype._getMeasurement = function(t, e) {
                var i, o = this.options[t];
                o ? ("string" == typeof o ? i = this.element.querySelector(o) : d(o) && (i = o), this[t] = i ? l(i)[e] : o) : this[t] = 0
            }, m.prototype.layoutItems = function(t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
            }, m.prototype._getItemsForLayout = function(t) {
                for (var e = [], i = 0, o = t.length; o > i; i++) {
                    var n = t[i];
                    n.isIgnored || e.push(n)
                }
                return e
            }, m.prototype._layoutItems = function(t, e) {
                function i() {
                    o.emitEvent("layoutComplete", [o, t])
                }
                var o = this;
                if (!t || !t.length) return i(), void 0;
                this._itemsOn(t, "layout", i);
                for (var n = [], r = 0, s = t.length; s > r; r++) {
                    var a = t[r],
                        u = this._getItemLayoutPosition(a);
                    u.item = a, u.isInstant = e || a.isLayoutInstant, n.push(u)
                }
                this._processLayoutQueue(n)
            }, m.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, m.prototype._processLayoutQueue = function(t) {
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    this._positionItem(o.item, o.x, o.y, o.isInstant)
                }
            }, m.prototype._positionItem = function(t, e, i, o) {
                o ? t.goTo(e, i) : t.moveTo(e, i)
            }, m.prototype._postLayout = function() {
                this.resizeContainer()
            }, m.prototype.resizeContainer = function() {
                if (this.options.isResizingContainer) {
                    var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
                }
            }, m.prototype._getContainerSize = h, m.prototype._setContainerMeasure = function(t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
                }
            }, m.prototype._itemsOn = function(t, e, i) {
                function o() {
                    return n++, n === r && i.call(s), !0
                }
                for (var n = 0, r = t.length, s = this, a = 0, u = t.length; u > a; a++) {
                    var p = t[a];
                    p.on(e, o)
                }
            }, m.prototype.ignore = function(t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }, m.prototype.unignore = function(t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }, m.prototype.stamp = function(t) {
                if (t = this._find(t)) {
                    this.stamps = this.stamps.concat(t);
                    for (var e = 0, i = t.length; i > e; e++) {
                        var o = t[e];
                        this.ignore(o)
                    }
                }
            }, m.prototype.unstamp = function(t) {
                if (t = this._find(t))
                    for (var e = 0, i = t.length; i > e; e++) {
                        var o = t[e];
                        n(o, this.stamps), this.unignore(o)
                    }
            }, m.prototype._find = function(t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o(t)) : void 0
            }, m.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var t = 0, e = this.stamps.length; e > t; t++) {
                        var i = this.stamps[t];
                        this._manageStamp(i)
                    }
                }
            }, m.prototype._getBoundingRect = function() {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }, m.prototype._manageStamp = h, m.prototype._getElementOffset = function(t) {
                var e = t.getBoundingClientRect(),
                    i = this._boundingRect,
                    o = l(t),
                    n = {
                        left: e.left - i.left - o.marginLeft,
                        top: e.top - i.top - o.marginTop,
                        right: i.right - e.right - o.marginRight,
                        bottom: i.bottom - e.bottom - o.marginBottom
                    };
                return n
            }, m.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, m.prototype.bindResize = function() {
                this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
            }, m.prototype.unbindResize = function() {
                this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
            }, m.prototype.onresize = function() {
                function t() {
                    e.resize(), delete e.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var e = this;
                this.resizeTimeout = setTimeout(t, 100)
            }, m.prototype.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, m.prototype.needsResizeLayout = function() {
                var t = l(this.element),
                    e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth
            }, m.prototype.addItems = function(t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e
            }, m.prototype.appended = function(t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e))
            }, m.prototype.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
                }
            }, m.prototype.reveal = function(t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) {
                        var o = t[i];
                        o.reveal()
                    }
            }, m.prototype.hide = function(t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) {
                        var o = t[i];
                        o.hide()
                    }
            }, m.prototype.getItem = function(t) {
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var o = this.items[e];
                    if (o.element === t) return o
                }
            }, m.prototype.getItems = function(t) {
                if (t && t.length) {
                    for (var e = [], i = 0, o = t.length; o > i; i++) {
                        var n = t[i],
                            r = this.getItem(n);
                        r && e.push(r)
                    }
                    return e
                }
            }, m.prototype.remove = function(t) {
                t = o(t);
                var e = this.getItems(t);
                if (e && e.length) {
                    this._itemsOn(e, "remove", function() {
                        this.emitEvent("removeComplete", [this, e])
                    });
                    for (var i = 0, r = e.length; r > i; i++) {
                        var s = e[i];
                        s.remove(), n(s, this.items)
                    }
                }
            }, m.prototype.destroy = function() {
                var t = this.element.style;
                t.height = "", t.position = "", t.width = "";
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var o = this.items[e];
                    o.destroy()
                }
                this.unbindResize(), delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace)
            }, m.data = function(t) {
                var e = t && t.outlayerGUID;
                return e && v[e]
            }, m.create = function(t, i) {
                function o() {
                    m.apply(this, arguments)
                }
                return Object.create ? o.prototype = Object.create(m.prototype) : e(o.prototype, m.prototype), o.prototype.constructor = o, o.defaults = e({}, m.defaults), e(o.defaults, i), o.prototype.settings = {}, o.namespace = t, o.data = m.data, o.Item = function() {
                    y.apply(this, arguments)
                }, o.Item.prototype = new y, s(function() {
                    for (var e = r(t), i = a.querySelectorAll(".js-" + e), n = "data-" + e + "-options", s = 0, h = i.length; h > s; s++) {
                        var f, d = i[s],
                            l = d.getAttribute(n);
                        try {
                            f = l && JSON.parse(l)
                        } catch (c) {
                            u && u.error("Error parsing " + n + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + c);
                            continue
                        }
                        var y = new o(d, f);
                        p && p.data(d, t, y)
                    }
                }), p && p.bridget && p.bridget(t, o), o
            }, m.Item = y, m
        }
        var a = t.document,
            u = t.console,
            p = t.jQuery,
            h = function() {},
            f = Object.prototype.toString,
            d = "object" == typeof HTMLElement ? function(t) {
                return t instanceof HTMLElement
            } : function(t) {
                return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
            },
            l = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            } : function(t, e) {
                for (var i = 0, o = t.length; o > i; i++)
                    if (t[i] === e) return i;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
    }(window),
    function(t) {
        function e(t) {
            function e() {
                t.Item.apply(this, arguments)
            }
            e.prototype = new t.Item, e.prototype._create = function() {
                this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
            }, e.prototype.updateSortData = function() {
                if (!this.isIgnored) {
                    this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                    var t = this.layout.options.getSortData,
                        e = this.layout._sorters;
                    for (var i in t) {
                        var o = e[i];
                        this.sortData[i] = o(this.element, this)
                    }
                }
            };
            var i = e.prototype.destroy;
            return e.prototype.destroy = function() {
                i.apply(this, arguments), this.css({
                    display: ""
                })
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window),
    function(t) {
        function e(t, e) {
            function i(t) {
                this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
            }
            return function() {
                function t(t) {
                    return function() {
                        return e.prototype[t].apply(this.isotope, arguments)
                    }
                }
                for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
                    var s = o[n];
                    i.prototype[s] = t(s)
                }
            }(), i.prototype.needsVerticalResizeLayout = function() {
                var e = t(this.isotope.element),
                    i = this.isotope.size && e;
                return i && e.innerHeight !== this.isotope.size.innerHeight
            }, i.prototype._getMeasurement = function() {
                this.isotope._getMeasurement.apply(this, arguments)
            }, i.prototype.getColumnWidth = function() {
                this.getSegmentSize("column", "Width")
            }, i.prototype.getRowHeight = function() {
                this.getSegmentSize("row", "Height")
            }, i.prototype.getSegmentSize = function(t, e) {
                var i = t + e,
                    o = "outer" + e;
                if (this._getMeasurement(i, o), !this[i]) {
                    var n = this.getFirstItemSize();
                    this[i] = n && n[o] || this.isotope.size["inner" + e]
                }
            }, i.prototype.getFirstItemSize = function() {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element)
            }, i.prototype.layout = function() {
                this.isotope.layout.apply(this.isotope, arguments)
            }, i.prototype.getSize = function() {
                this.isotope.getSize(), this.size = this.isotope.size
            }, i.modes = {}, i.create = function(t, e) {
                function o() {
                    i.apply(this, arguments)
                }
                return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
            }, i
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window),
    function(t) {
        function e(t, e) {
            var o = t.create("masonry");
            return o.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var t = this.cols;
                for (this.colYs = []; t--;) this.colYs.push(0);
                this.maxY = 0
            }, o.prototype.measureColumns = function() {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var t = this.items[0],
                        i = t && t.element;
                    this.columnWidth = i && e(i).outerWidth || this.containerWidth
                }
                this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, o.prototype.getContainerWidth = function() {
                var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                    i = e(t);
                this.containerWidth = i && i.innerWidth
            }, o.prototype._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    o = e && 1 > e ? "round" : "ceil",
                    n = Math[o](t.size.outerWidth / this.columnWidth);
                n = Math.min(n, this.cols);
                for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i(r, s), u = {
                        x: this.columnWidth * a,
                        y: s
                    }, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++) this.colYs[a + f] = p;
                return u
            }, o.prototype._getColGroup = function(t) {
                if (2 > t) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
                    var n = this.colYs.slice(o, o + t);
                    e[o] = Math.max.apply(Math, n)
                }
                return e
            }, o.prototype._manageStamp = function(t) {
                var i = e(t),
                    o = this._getElementOffset(t),
                    n = this.options.isOriginLeft ? o.left : o.right,
                    r = n + i.outerWidth,
                    s = Math.floor(n / this.columnWidth);
                s = Math.max(0, s);
                var a = Math.floor(r / this.columnWidth);
                a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
                for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++) this.colYs[p] = Math.max(u, this.colYs[p])
            }, o.prototype._getContainerSize = function() {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = {
                    height: this.maxY
                };
                return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
            }, o.prototype._getContainerFitWidth = function() {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
                return (this.cols - t) * this.columnWidth - this.gutter
            }, o.prototype.needsResizeLayout = function() {
                var t = this.containerWidth;
                return this.getContainerWidth(), t !== this.containerWidth
            }, o
        }
        var i = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, o = t.length; o > i; i++) {
                var n = t[i];
                if (n === e) return i
            }
            return -1
        };
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t, i) {
            var o = t.create("masonry"),
                n = o.prototype._getElementOffset,
                r = o.prototype.layout,
                s = o.prototype._getMeasurement;
            e(o.prototype, i.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s;
            var a = o.prototype.measureColumns;
            o.prototype.measureColumns = function() {
                this.items = this.isotope.filteredItems, a.call(this)
            };
            var u = o.prototype._manageStamp;
            return o.prototype._manageStamp = function() {
                this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
            }, o
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : i(t.Isotope.LayoutMode, t.Masonry)
    }(window),
    function(t) {
        function e(t) {
            var e = t.create("fitRows");
            return e.prototype._resetLayout = function() {
                this.x = 0, this.y = 0, this.maxY = 0
            }, e.prototype._getItemLayoutPosition = function(t) {
                t.getSize(), 0 !== this.x && t.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
                var e = {
                    x: this.x,
                    y: this.y
                };
                return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += t.size.outerWidth, e
            }, e.prototype._getContainerSize = function() {
                return {
                    height: this.maxY
                }
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
    }(window),
    function(t) {
        function e(t) {
            var e = t.create("vertical", {
                horizontalAlignment: 0
            });
            return e.prototype._resetLayout = function() {
                this.y = 0
            }, e.prototype._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                    i = this.y;
                return this.y += t.size.outerHeight, {
                    x: e,
                    y: i
                }
            }, e.prototype._getContainerSize = function() {
                return {
                    height: this.y
                }
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
    }(window),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            return "[object Array]" === h.call(t)
        }

        function o(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
            else e.push(t);
            return e
        }

        function n(t, e) {
            var i = f(e, t); - 1 !== i && e.splice(i, 1)
        }

        function r(t, i, r, u, h) {
            function f(t, e) {
                return function(i, o) {
                    for (var n = 0, r = t.length; r > n; n++) {
                        var s = t[n],
                            a = i.sortData[s],
                            u = o.sortData[s];
                        if (a > u || u > a) {
                            var p = void 0 !== e[s] ? e[s] : e,
                                h = p ? 1 : -1;
                            return (a > u ? 1 : -1) * h
                        }
                    }
                    return 0
                }
            }
            var d = t.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
            d.Item = u, d.LayoutMode = h, d.prototype._create = function() {
                this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
                for (var e in h.modes) this._initLayoutMode(e)
            }, d.prototype.reloadItems = function() {
                this.itemGUID = 0, t.prototype.reloadItems.call(this)
            }, d.prototype._itemize = function() {
                for (var e = t.prototype._itemize.apply(this, arguments), i = 0, o = e.length; o > i; i++) {
                    var n = e[i];
                    n.id = this.itemGUID++
                }
                return this._updateItemsSortData(e), e
            }, d.prototype._initLayoutMode = function(t) {
                var i = h.modes[t],
                    o = this.options[t] || {};
                this.options[t] = i.options ? e(i.options, o) : o, this.modes[t] = new i(this)
            }, d.prototype.layout = function() {
                return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
            }, d.prototype._layout = function() {
                var t = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
            }, d.prototype.arrange = function(t) {
                this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
            }, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function() {
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                return this._isInstant = t, t
            }, d.prototype._filter = function(t) {
                function e() {
                    f.reveal(n), f.hide(r)
                }
                var i = this.options.filter;
                i = i || "*";
                for (var o = [], n = [], r = [], s = this._getFilterTest(i), a = 0, u = t.length; u > a; a++) {
                    var p = t[a];
                    if (!p.isIgnored) {
                        var h = s(p);
                        h && o.push(p), h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p)
                    }
                }
                var f = this;
                return this._isInstant ? this._noTransition(e) : e(), o
            }, d.prototype._getFilterTest = function(t) {
                return s && this.options.isJQueryFiltering ? function(e) {
                    return s(e.element).is(t)
                } : "function" == typeof t ? function(e) {
                    return t(e.element)
                } : function(e) {
                    return r(e.element, t)
                }
            }, d.prototype.updateSortData = function(t) {
                this._getSorters(), t = o(t);
                var e = this.getItems(t);
                e = e.length ? e : this.items, this._updateItemsSortData(e)
            }, d.prototype._getSorters = function() {
                var t = this.options.getSortData;
                for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = l(i)
                }
            }, d.prototype._updateItemsSortData = function(t) {
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    o.updateSortData()
                }
            };
            var l = function() {
                function t(t) {
                    if ("string" != typeof t) return t;
                    var i = a(t).split(" "),
                        o = i[0],
                        n = o.match(/^\[(.+)\]$/),
                        r = n && n[1],
                        s = e(r, o),
                        u = d.sortDataParsers[i[1]];
                    return t = u ? function(t) {
                        return t && u(s(t))
                    } : function(t) {
                        return t && s(t)
                    }
                }

                function e(t, e) {
                    var i;
                    return i = t ? function(e) {
                        return e.getAttribute(t)
                    } : function(t) {
                        var i = t.querySelector(e);
                        return i && p(i)
                    }
                }
                return t
            }();
            d.sortDataParsers = {
                parseInt: function(t) {
                    return parseInt(t, 10)
                },
                parseFloat: function(t) {
                    return parseFloat(t)
                }
            }, d.prototype._sort = function() {
                var t = this.options.sortBy;
                if (t) {
                    var e = [].concat.apply(t, this.sortHistory),
                        i = f(e, this.options.sortAscending);
                    this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
                }
            }, d.prototype._mode = function() {
                var t = this.options.layoutMode,
                    e = this.modes[t];
                if (!e) throw Error("No layout mode: " + t);
                return e.options = this.options[t], e
            }, d.prototype._resetLayout = function() {
                t.prototype._resetLayout.call(this), this._mode()._resetLayout()
            }, d.prototype._getItemLayoutPosition = function(t) {
                return this._mode()._getItemLayoutPosition(t)
            }, d.prototype._manageStamp = function(t) {
                this._mode()._manageStamp(t)
            }, d.prototype._getContainerSize = function() {
                return this._mode()._getContainerSize()
            }, d.prototype.needsResizeLayout = function() {
                return this._mode().needsResizeLayout()
            }, d.prototype.appended = function(t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i)
                }
            }, d.prototype.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps();
                    var o = this._filterRevealAdded(e);
                    this.layoutItems(i), this.filteredItems = o.concat(this.filteredItems)
                }
            }, d.prototype._filterRevealAdded = function(t) {
                var e = this._noTransition(function() {
                    return this._filter(t)
                });
                return this.layoutItems(e, !0), this.reveal(e), t
            }, d.prototype.insert = function(t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i, o, n = e.length;
                    for (i = 0; n > i; i++) o = e[i], this.element.appendChild(o.element);
                    var r = this._filter(e);
                    for (this._noTransition(function() {
                            this.hide(r)
                        }), i = 0; n > i; i++) e[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; n > i; i++) delete e[i].isLayoutInstant;
                    this.reveal(r)
                }
            };
            var c = d.prototype.remove;
            return d.prototype.remove = function(t) {
                t = o(t);
                var e = this.getItems(t);
                if (c.call(this, t), e && e.length)
                    for (var i = 0, r = e.length; r > i; i++) {
                        var s = e[i];
                        n(s, this.filteredItems)
                    }
            }, d.prototype.shuffle = function() {
                for (var t = 0, e = this.items.length; e > t; t++) {
                    var i = this.items[t];
                    i.sortData.random = Math.random()
                }
                this.options.sortBy = "random", this._sort(), this._layout()
            }, d.prototype._noTransition = function(t) {
                var e = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var i = t.call(this);
                return this.options.transitionDuration = e, i
            }, d.prototype.getFilteredItemElements = function() {
                for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
                return t
            }, d
        }
        var s = t.jQuery,
            a = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            u = document.documentElement,
            p = u.textContent ? function(t) {
                return t.textContent
            } : function(t) {
                return t.innerText
            },
            h = Object.prototype.toString,
            f = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            } : function(t, e) {
                for (var i = 0, o = t.length; o > i; i++)
                    if (t[i] === e) return i;
                return -1
            };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window);
(function() {
    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        r = this,
        o = r.EventEmitter;
    i.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
            o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
        return this.getListeners(e), this
    }, i.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function(e, n) {
        var i, r, o = this.getListenersAsObject(e);
        for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function(e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) o.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, e.noConflict = function() {
        return r.EventEmitter = o, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function(e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
            return t(e, n, i)
        }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function(e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return "[object Array]" === d.call(e)
        }

        function o(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function s(e, t, n) {
            if (!(this instanceof s)) return new s(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function f(e) {
            this.img = e
        }

        function c(e) {
            this.src = e, v[e] = this
        }
        var a = e.jQuery,
            u = e.console,
            h = u !== void 0,
            d = Object.prototype.toString;
        s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                var i = n.nodeType;
                if (i && (1 === i || 9 === i || 11 === i))
                    for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                        var f = r[o];
                        this.addImage(f)
                    }
            }
        }, s.prototype.addImage = function(e) {
            var t = new f(e);
            this.images.push(t)
        }, s.prototype.check = function() {
            function e(e, r) {
                return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
            }
            var t = this,
                n = 0,
                i = this.images.length;
            if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
            for (var r = 0; i > r; r++) {
                var o = this.images[r];
                o.on("confirm", e), o.check()
            }
        }, s.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
            })
        }, s.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t)
                }
            })
        }, a && (a.fn.imagesLoaded = function(e, t) {
            var n = new s(this, e, t);
            return n.jqDeferred.promise(a(this))
        }), f.prototype = new t, f.prototype.check = function() {
            var e = v[this.img.src] || new c(this.img.src);
            if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
            if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            var t = this;
            e.on("confirm", function(e, n) {
                return t.confirm(e.isLoaded, n), !0
            }), e.check()
        }, f.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emit("confirm", this, t)
        };
        var v = {};
        return c.prototype = new t, c.prototype.check = function() {
            if (!this.isChecked) {
                var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, c.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, c.prototype.onload = function(e) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(e)
        }, c.prototype.onerror = function(e) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
        }, c.prototype.confirm = function(e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, c.prototype.unbindProxyEvents = function(e) {
            n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
        }, s
    });
(function(e) {
    var t, n, i, o, r, a, s, l = "Close",
        c = "BeforeClose",
        d = "AfterClose",
        u = "BeforeAppend",
        p = "MarkupParse",
        f = "Open",
        m = "Change",
        g = "mfp",
        h = "." + g,
        v = "mfp-ready",
        C = "mfp-removing",
        y = "mfp-prevent-close",
        w = function() {},
        b = !!window.jQuery,
        I = e(window),
        x = function(e, n) {
            t.ev.on(g + e + h, n)
        },
        k = function(t, n, i, o) {
            var r = document.createElement("div");
            return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r
        },
        T = function(n, i) {
            t.ev.triggerHandler(g + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
        },
        E = function(n) {
            return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
        },
        _ = function() {
            e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t)
        },
        S = function() {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    w.prototype = {
        constructor: w,
        init: function() {
            var n = navigator.appVersion;
            t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = e(document), t.popupsCache = {}
        },
        open: function(n) {
            i || (i = e(document.body));
            var r;
            if (n.isObj === !1) {
                t.items = n.items.toArray(), t.index = 0;
                var s, l = n.items;
                for (r = 0; l.length > r; r++)
                    if (s = l[r], s.parsed && (s = s.el[0]), s === n.el[0]) {
                        t.index = r;
                        break
                    }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
            if (t.isOpen) return t.updateItemHTML(), void 0;
            t.types = [], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + h, function() {
                t.close()
            }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + h, function(e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
            var c = e.magnificPopup.modules;
            for (r = 0; c.length > r; r++) {
                var d = c[r];
                d = d.charAt(0).toUpperCase() + d.slice(1), t["init" + d].call(t)
            }
            T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function(e, t, n, i) {
                n.close_replaceWith = E(i.type)
            }), a += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: I.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: o.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && o.on("keyup" + h, function(e) {
                27 === e.keyCode && t.close()
            }), I.on("resize" + h, function() {
                t.updateSize()
            }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
            var u = t.wH = I.height(),
                m = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
                var g = t._getScrollbarSize();
                g && (m.marginRight = g)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
            var C = t.st.mainClass;
            return t.isIE7 && (C += " mfp-ie7"), C && t._addClassToMFP(C), t.updateItemHTML(), T("BuildControls"), e("html").css(m), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), o.on("focusin" + h, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(u), T(f), n
        },
        close: function() {
            t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C), setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            T(l);
            var n = C + " " + v + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var i = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
            }
            o.off("keyup" + h + " focusin" + h), t.ev.off(h), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(d)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * n;
                t.wrap.css("height", i), t.wH = i
            } else t.wH = e || I.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
                var o = t.st[i] ? t.st[i].markup : !1;
                T("FirstMarkupParse", o), t.currTemplate[i] = o ? e(o) : !0
            }
            r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
            var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(a, i), n.preloaded = !0, T(m, n), r = n.type, t.container.prepend(t.contentContainer), T("AfterChange")
        },
        appendContent: function(e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function(n) {
            var i, o = t.items[n];
            if (o.tagName ? o = {
                    el: e(o)
                } : (i = o.type, o = {
                    data: o,
                    src: o.src
                }), o.el) {
                for (var r = t.types, a = 0; r.length > a; a++)
                    if (o.el.hasClass("mfp-" + r[a])) {
                        i = r[a];
                        break
                    } o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, T("ElementParse", o), t.items[n]
        },
        addGroup: function(e, n) {
            var i = function(i) {
                i.mfpEl = this, t._openClick(i, e, n)
            };
            n || (n = {});
            var o = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)))
        },
        _openClick: function(n, i, o) {
            var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
            if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
                var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (a)
                    if (e.isFunction(a)) {
                        if (!a.call(t)) return !0
                    } else if (a > I.width()) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o)
            }
        },
        updateStatus: function(e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
                var o = {
                    status: e,
                    text: i
                };
                T("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(y)) {
                var i = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (i && o) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i) return !0
                } else if (o && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
        },
        _parseMarkup: function(t, n, i) {
            var o;
            i.data && (n = e.extend(i.data, n)), T(p, [t, n, i]), e.each(n, function(e, n) {
                if (void 0 === n || n === !1) return !0;
                if (o = e.split("_"), o.length > 1) {
                    var i = t.find(h + "-" + o[0]);
                    if (i.length > 0) {
                        var r = o[1];
                        "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
                    }
                } else t.find(h + "-" + e).html(n)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: w.prototype,
        modules: [],
        open: function(t, n) {
            return _(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, e.fn.magnificPopup = function(n) {
        _();
        var i = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var o, r = b ? i.data("magnificPopup") : i[0].magnificPopup,
                    a = parseInt(arguments[1], 10) || 0;
                r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), t._openClick({
                    mfpEl: o
                }, i, r)
            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
        return i
    };
    var P, O, z, M = "inline",
        B = function() {
            z && (O.after(z.addClass(P)).detach(), z = null)
        };
    e.magnificPopup.registerModule(M, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(M), x(l + "." + M, function() {
                    B()
                })
            },
            getInline: function(n, i) {
                if (B(), n.src) {
                    var o = t.st.inline,
                        r = e(n.src);
                    if (r.length) {
                        var a = r[0].parentNode;
                        a && a.tagName && (O || (P = o.hiddenClass, O = k(P), P = "mfp-" + P), z = r.after(O).detach().removeClass(P)), t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound), r = e("<div>");
                    return n.inlineElement = r, r
                }
                return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
            }
        }
    });
    var F, H = "ajax",
        L = function() {
            F && i.removeClass(F)
        },
        A = function() {
            L(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule(H, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(H), F = t.st.ajax.cursor, x(l + "." + H, A), x("BeforeChange." + H, A)
            },
            getAjax: function(n) {
                F && i.addClass(F), t.updateStatus("loading");
                var o = e.extend({
                    url: n.src,
                    success: function(i, o, r) {
                        var a = {
                            data: i,
                            xhr: r
                        };
                        T("ParseAjax", a), t.appendContent(e(a.data), H), n.finished = !0, L(), t._setFocus(), setTimeout(function() {
                            t.wrap.addClass(v)
                        }, 16), t.updateStatus("ready"), T("AjaxContentAdded")
                    },
                    error: function() {
                        L(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(o), ""
            }
        }
    });
    var j, N = function(n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
            if (e.isFunction(i)) return i.call(t, n);
            if (n.el) return n.el.attr(i) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = t.st.image,
                    n = ".image";
                t.types.push("image"), x(f + n, function() {
                    "image" === t.currItem.type && e.cursor && i.addClass(e.cursor)
                }), x(l + n, function() {
                    e.cursor && i.removeClass(e.cursor), I.off("resize" + h)
                }), x("Resize" + n, t.resizeImage), t.isLowIE && x("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, j && clearInterval(j), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var n = 0,
                    i = e.img[0],
                    o = function(r) {
                        j && clearInterval(j), j = setInterval(function() {
                            return i.naturalWidth > 0 ? (t._onImageHasSize(e), void 0) : (n > 200 && clearInterval(j), n++, 3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500), void 0)
                        }, r)
                    };
                o(1)
            },
            getImage: function(n, i) {
                var o = 0,
                    r = function() {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : a()))
                    },
                    a = function() {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    },
                    s = t.st.image,
                    l = i.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", n.img = e(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                }
                return t._parseMarkup(i, {
                    title: N(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (j && clearInterval(j), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
            }
        }
    });
    var W, R = function() {
        return void 0 === W && (W = void 0 !== document.createElement("p").style.MozTransform), W
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom,
                    i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o, r, a = n.duration,
                        s = function(e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + n.duration / 1e3 + "s " + n.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                r = "transition";
                            return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t
                        },
                        d = function() {
                            t.content.css("visibility", "visible")
                        };
                    x("BuildControls" + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return d(), void 0;
                            r = s(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function() {
                                r.css(t._getOffset(!0)), o = setTimeout(function() {
                                    d(), setTimeout(function() {
                                        r.remove(), e = r = null, T("ZoomAnimationEnded")
                                    }, 16)
                                }, a)
                            }, 16)
                        }
                    }), x(c + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = a, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                r = s(e)
                            }
                            r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function() {
                                r.css(t._getOffset())
                            }, 16)
                        }
                    }), x(l + i, function() {
                        t._allowZoom() && (d(), r && r.remove(), e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function(n) {
                var i;
                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = i.offset(),
                    r = parseInt(i.css("padding-top"), 10),
                    a = parseInt(i.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - r;
                var s = {
                    width: i.width(),
                    height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r
                };
                return R() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
            }
        }
    });
    var Z = "iframe",
        q = "//about:blank",
        D = function(e) {
            if (t.currTemplate[Z]) {
                var n = t.currTemplate[Z].find("iframe");
                n.length && (e || (n[0].src = q), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(Z, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(Z), x("BeforeChange", function(e, t, n) {
                    t !== n && (t === Z ? D() : n === Z && D(!0))
                }), x(l + "." + Z, function() {
                    D()
                })
            },
            getIframe: function(n, i) {
                var o = n.src,
                    r = t.st.iframe;
                e.each(r.patterns, function() {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                });
                var a = {};
                return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(i, a, n), t.updateStatus("ready"), i
            }
        }
    });
    var K = function(e) {
            var n = t.items.length;
            return e > n - 1 ? e - n : 0 > e ? n + e : e
        },
        Y = function(e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var n = t.st.gallery,
                    i = ".mfp-gallery",
                    r = Boolean(e.fn.mfpFastClick);
                return t.direction = !0, n && n.enabled ? (a += " mfp-gallery", x(f + i, function() {
                    n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function() {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }), o.on("keydown" + i, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), x("UpdateStatus" + i, function(e, n) {
                    n.text && (n.text = Y(n.text, t.currItem.index, t.items.length))
                }), x(p + i, function(e, i, o, r) {
                    var a = t.items.length;
                    o.counter = a > 1 ? Y(n.tCounter, r.index, a) : ""
                }), x("BuildControls" + i, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup,
                            o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                            a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
                            s = r ? "mfpFastClick" : "click";
                        o[s](function() {
                            t.prev()
                        }), a[s](function() {
                            t.next()
                        }), t.isIE7 && (k("b", o[0], !1, !0), k("a", o[0], !1, !0), k("b", a[0], !1, !0), k("a", a[0], !1, !0)), t.container.append(o.add(a))
                    }
                }), x(m + i, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), x(l + i, function() {
                    o.off(i), t.wrap.off("click" + i), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                }), void 0) : !1
            },
            next: function() {
                t.direction = !0, t.index = K(t.index + 1), t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1, t.index = K(t.index - 1), t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload,
                    i = Math.min(n[0], t.items.length),
                    o = Math.min(n[1], t.items.length);
                for (e = 1;
                    (t.direction ? o : i) >= e; e++) t._preloadItem(t.index + e);
                for (e = 1;
                    (t.direction ? i : o) >= e; e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function(n) {
                if (n = K(n), !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)), T("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        i.hasSize = !0
                    }).on("error.mfploader", function() {
                        i.hasSize = !0, i.loadError = !0, T("LazyLoadError", i)
                    }).attr("src", i.src)), i.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    e.magnificPopup.registerModule(U, {
            options: {
                replaceSrc: function(e) {
                    return e.src.replace(/\.\w+$/, function(e) {
                        return "@2x" + e
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var e = t.st.retina,
                            n = e.ratio;
                        n = isNaN(n) ? n() : n, n > 1 && (x("ImageHasSize." + U, function(e, t) {
                            t.img.css({
                                "max-width": t.img[0].naturalWidth / n,
                                width: "100%"
                            })
                        }), x("ElementParse." + U, function(t, i) {
                            i.src = e.replaceSrc(i, n)
                        }))
                    }
                }
            }
        }),
        function() {
            var t = 1e3,
                n = "ontouchstart" in window,
                i = function() {
                    I.off("touchmove" + r + " touchend" + r)
                },
                o = "mfpFastClick",
                r = "." + o;
            e.fn.mfpFastClick = function(o) {
                return e(this).each(function() {
                    var a, s = e(this);
                    if (n) {
                        var l, c, d, u, p, f;
                        s.on("touchstart" + r, function(e) {
                            u = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, d = p.clientY, I.on("touchmove" + r, function(e) {
                                p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - d) > 10) && (u = !0, i())
                            }).on("touchend" + r, function(e) {
                                i(), u || f > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function() {
                                    a = !1
                                }, t), o())
                            })
                        })
                    }
                    s.on("click" + r, function() {
                        a || o()
                    })
                })
            }, e.fn.destroyMfpFastClick = function() {
                e(this).off("touchstart" + r + " click" + r), n && I.off("touchmove" + r + " touchend" + r)
            }
        }(), _()
})(window.jQuery || window.Zepto);
"function" !== typeof Object.create && (Object.create = function(f) {
    function g() {}
    g.prototype = f;
    return new g
});
(function(f, g, k) {
    var l = {
        init: function(a, b) {
            this.$elem = f(b);
            this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);
            this.userOptions = a;
            this.loadContent()
        },
        loadContent: function() {
            function a(a) {
                var d, e = "";
                if ("function" === typeof b.options.jsonSuccess) b.options.jsonSuccess.apply(this, [a]);
                else {
                    for (d in a.owl) a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
                    b.$elem.html(e)
                }
                b.logIn()
            }
            var b = this,
                e;
            "function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);
            "string" === typeof b.options.jsonPath ?
                (e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn()
        },
        logIn: function() {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
            this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
            this.$elem.css({
                opacity: 0
            });
            this.orignalItems = this.options.items;
            this.checkBrowser();
            this.wrapperWidth = 0;
            this.checkVisible = null;
            this.setVars()
        },
        setVars: function() {
            if (0 === this.$elem.children().length) return !1;
            this.baseClass();
            this.eventTypes();
            this.$userItems = this.$elem.children();
            this.itemsAmount = this.$userItems.length;
            this.wrapItems();
            this.$owlItems = this.$elem.find(".owl-item");
            this.$owlWrapper = this.$elem.find(".owl-wrapper");
            this.playDirection = "next";
            this.prevItem = 0;
            this.prevArr = [0];
            this.currentItem = 0;
            this.customEvents();
            this.onStartup()
        },
        onStartup: function() {
            this.updateItems();
            this.calculateAll();
            this.buildControls();
            this.updateControls();
            this.response();
            this.moveEvents();
            this.stopOnHover();
            this.owlStatus();
            !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
            !0 === this.options.autoPlay &&
                (this.options.autoPlay = 5E3);
            this.play();
            this.$elem.find(".owl-wrapper").css("display", "block");
            this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
            this.onstartup = !1;
            this.eachMoveUpdate();
            "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
        },
        eachMoveUpdate: function() {
            !0 === this.options.lazyLoad && this.lazyLoad();
            !0 === this.options.autoHeight && this.autoHeight();
            this.onVisibleItems();
            "function" === typeof this.options.afterAction && this.options.afterAction.apply(this,
                [this.$elem])
        },
        updateVars: function() {
            "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
            this.watchVisibility();
            this.updateItems();
            this.calculateAll();
            this.updatePosition();
            this.updateControls();
            this.eachMoveUpdate();
            "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        },
        reload: function() {
            var a = this;
            g.setTimeout(function() {
                a.updateVars()
            }, 0)
        },
        watchVisibility: function() {
            var a = this;
            if (!1 === a.$elem.is(":visible")) a.$elem.css({
                    opacity: 0
                }),
                g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible);
            else return !1;
            a.checkVisible = g.setInterval(function() {
                a.$elem.is(":visible") && (a.reload(), a.$elem.animate({
                    opacity: 1
                }, 200), g.clearInterval(a.checkVisible))
            }, 500)
        },
        wrapItems: function() {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
            this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
            this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
            this.$elem.css("display", "block")
        },
        baseClass: function() {
            var a = this.$elem.hasClass(this.options.baseClass),
                b = this.$elem.hasClass(this.options.theme);
            a || this.$elem.addClass(this.options.baseClass);
            b || this.$elem.addClass(this.options.theme)
        },
        updateItems: function() {
            var a, b;
            if (!1 === this.options.responsive) return !1;
            if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
            a = f(this.options.responsiveBaseWidth).width();
            a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
            if (!1 !== this.options.itemsCustom)
                for (this.options.itemsCustom.sort(function(a, b) {
                        return a[0] - b[0]
                    }), b = 0; b < this.options.itemsCustom.length; b += 1) this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);
            else a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]),
                a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount &&
                !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        },
        response: function() {
            var a = this,
                b, e;
            if (!0 !== a.options.responsive) return !1;
            e = f(g).width();
            a.resizer = function() {
                f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function() {
                    e = f(g).width();
                    a.updateVars()
                }, a.options.responsiveRefreshRate))
            };
            f(g).resize(a.resizer)
        },
        updatePosition: function() {
            this.jumpTo(this.currentItem);
            !1 !== this.options.autoPlay && this.checkAp()
        },
        appendItemsSizes: function() {
            var a =
                this,
                b = 0,
                e = a.itemsAmount - a.options.items;
            a.$owlItems.each(function(c) {
                var d = f(this);
                d.css({
                    width: a.itemWidth
                }).data("owl-item", Number(c));
                if (0 === c % a.options.items || c === e) c > e || (b += 1);
                d.data("owl-roundPages", b)
            })
        },
        appendWrapperSizes: function() {
            this.$owlWrapper.css({
                width: this.$owlItems.length * this.itemWidth * 2,
                left: 0
            });
            this.appendItemsSizes()
        },
        calculateAll: function() {
            this.calculateWidth();
            this.appendWrapperSizes();
            this.loops();
            this.max()
        },
        calculateWidth: function() {
            this.itemWidth = Math.round(this.$elem.width() /
                this.options.items)
        },
        max: function() {
            var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a);
            return a
        },
        min: function() {
            return 0
        },
        loops: function() {
            var a = 0,
                b = 0,
                e, c;
            this.positionsInArray = [0];
            this.pagesInArray = [];
            for (e = 0; e < this.itemsAmount; e += 1) b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]),
                c = c.data("owl-roundPages"), c !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = c))
        },
        buildControls: function() {
            if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);
            !0 === this.options.pagination && this.buildPagination();
            !0 === this.options.navigation && this.buildButtons()
        },
        buildButtons: function() {
            var a = this,
                b = f('<div class="owl-buttons"/>');
            a.owlControls.append(b);
            a.buttonPrev =
                f("<div/>", {
                    "class": "owl-prev",
                    html: a.options.navigationText[0] || ""
                });
            a.buttonNext = f("<div/>", {
                "class": "owl-next",
                html: a.options.navigationText[1] || ""
            });
            b.append(a.buttonPrev).append(a.buttonNext);
            b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(a) {
                a.preventDefault()
            });
            b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(b) {
                b.preventDefault();
                f(this).hasClass("owl-next") ? a.next() : a.prev()
            })
        },
        buildPagination: function() {
            var a = this;
            a.paginationWrapper =
                f('<div class="owl-pagination"/>');
            a.owlControls.append(a.paginationWrapper);
            a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(b) {
                b.preventDefault();
                Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0)
            })
        },
        updatePagination: function() {
            var a, b, e, c, d, g;
            if (!1 === this.options.pagination) return !1;
            this.paginationWrapper.html("");
            a = 0;
            b = this.itemsAmount - this.itemsAmount % this.options.items;
            for (c = 0; c < this.itemsAmount; c += 1) 0 === c % this.options.items &&
                (a += 1, b === c && (e = this.itemsAmount - this.options.items), d = f("<div/>", {
                    "class": "owl-page"
                }), g = f("<span></span>", {
                    text: !0 === this.options.paginationNumbers ? a : "",
                    "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
                }), d.append(g), d.data("owl-page", b === c ? e : c), d.data("owl-roundPages", a), this.paginationWrapper.append(d));
            this.checkPagination()
        },
        checkPagination: function() {
            var a = this;
            if (!1 === a.options.pagination) return !1;
            a.paginationWrapper.find(".owl-page").each(function() {
                f(this).data("owl-roundPages") ===
                    f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"))
            })
        },
        checkNavigation: function() {
            if (!1 === this.options.navigation) return !1;
            !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem ===
                this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
        },
        updateControls: function() {
            this.updatePagination();
            this.checkNavigation();
            this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        },
        destroyControls: function() {
            this.owlControls && this.owlControls.remove()
        },
        next: function(a) {
            if (this.isTransition) return !1;
            this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
            if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
                if (!0 === this.options.rewindNav) this.currentItem = 0, a = "rewind";
                else return this.currentItem = this.maximumItem, !1;
            this.goTo(this.currentItem, a)
        },
        prev: function(a) {
            if (this.isTransition) return !1;
            this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ?
                this.options.items : 1);
            if (0 > this.currentItem)
                if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, a = "rewind";
                else return this.currentItem = 0, !1;
            this.goTo(this.currentItem, a)
        },
        goTo: function(a, b, e) {
            var c = this;
            if (c.isTransition) return !1;
            "function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);
            a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);
            c.currentItem = c.owl.currentItem = a;
            if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d) return c.swapSpeed(0),
                !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1;
            a = c.positionsInArray[a];
            !0 === c.browser.support3d ? (c.isCss3Finish = !1, !0 === b ? (c.swapSpeed("paginationSpeed"), g.setTimeout(function() {
                c.isCss3Finish = !0
            }, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed), g.setTimeout(function() {
                c.isCss3Finish = !0
            }, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"), g.setTimeout(function() {
                    c.isCss3Finish = !0
                },
                c.options.slideSpeed)), c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);
            c.afterGo()
        },
        jumpTo: function(a) {
            "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
            a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);
            this.swapSpeed(0);
            !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);
            this.currentItem =
                this.owl.currentItem = a;
            this.afterGo()
        },
        afterGo: function() {
            this.prevArr.push(this.currentItem);
            this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
            this.prevArr.shift(0);
            this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
            "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        },
        stop: function() {
            this.apStatus = "stop";
            g.clearInterval(this.autoPlayInterval)
        },
        checkAp: function() {
            "stop" !== this.apStatus && this.play()
        },
        play: function() {
            var a = this;
            a.apStatus = "play";
            if (!1 === a.options.autoPlay) return !1;
            g.clearInterval(a.autoPlayInterval);
            a.autoPlayInterval = g.setInterval(function() {
                a.next(!0)
            }, a.options.autoPlay)
        },
        swapSpeed: function(a) {
            "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
        },
        addCssSpeed: function(a) {
            return {
                "-webkit-transition": "all " + a + "ms ease",
                "-moz-transition": "all " + a + "ms ease",
                "-o-transition": "all " + a + "ms ease",
                transition: "all " + a + "ms ease"
            }
        },
        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function(a) {
            return {
                "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" +
                    a + "px, 0px, 0px)",
                transform: "translate3d(" + a + "px, 0px,0px)"
            }
        },
        transition3d: function(a) {
            this.$owlWrapper.css(this.doTranslate(a))
        },
        css2move: function(a) {
            this.$owlWrapper.css({
                left: a
            })
        },
        css2slide: function(a, b) {
            var e = this;
            e.isCssFinish = !1;
            e.$owlWrapper.stop(!0, !0).animate({
                left: a
            }, {
                duration: b || e.options.slideSpeed,
                complete: function() {
                    e.isCssFinish = !0
                }
            })
        },
        checkBrowser: function() {
            var a = k.createElement("div");
            a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
            a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
            this.browser = {
                support3d: null !== a && 1 === a.length,
                isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints
            }
        },
        moveEvents: function() {
            if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents()
        },
        eventTypes: function() {
            var a = ["s", "e", "x"];
            this.ev_types = {};
            !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] :
                !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
            this.ev_types.start = a[0];
            this.ev_types.move = a[1];
            this.ev_types.end = a[2]
        },
        disabledEvents: function() {
            this.$elem.on("dragstart.owl", function(a) {
                a.preventDefault()
            });
            this.$elem.on("mousedown.disableTextSelect", function(a) {
                return f(a.target).is("input, textarea, select, option")
            })
        },
        gestures: function() {
            function a(a) {
                if (void 0 !== a.touches) return {
                    x: a.touches[0].pageX,
                    y: a.touches[0].pageY
                };
                if (void 0 === a.touches) {
                    if (void 0 !== a.pageX) return {
                        x: a.pageX,
                        y: a.pageY
                    };
                    if (void 0 === a.pageX) return {
                        x: a.clientX,
                        y: a.clientY
                    }
                }
            }

            function b(a) {
                "on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end))
            }

            function e(b) {
                b = b.originalEvent || b || g.event;
                d.newPosX = a(b).x - h.offsetX;
                d.newPosY = a(b).y - h.offsetY;
                d.newRelativeX = d.newPosX - h.relativePos;
                "function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0, d.options.startDragging.apply(d, [d.$elem]));
                (8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);
                (10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");
                d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);
                !0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX)
            }

            function c(a) {
                a = a.originalEvent || a || g.event;
                var c;
                a.target = a.target || a.srcElement;
                h.dragging = !1;
                !0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");
                d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";
                0 !== d.newRelativeX && (c = d.getNewPosition(), d.goTo(c, !1, "drag"), h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function(a) {
                        a.stopImmediatePropagation();
                        a.stopPropagation();
                        a.preventDefault();
                        f(a.target).off("click.disable")
                    }),
                    a = f._data(a.target, "events").click, c = a.pop(), a.splice(0, 0, c)));
                b("off")
            }
            var d = this,
                h = {
                    offsetX: 0,
                    offsetY: 0,
                    baseElWidth: 0,
                    relativePos: 0,
                    position: null,
                    minSwipe: null,
                    maxSwipe: null,
                    sliding: null,
                    dargging: null,
                    targetElement: null
                };
            d.isCssFinish = !0;
            d.$elem.on(d.ev_types.start, ".owl-wrapper", function(c) {
                c = c.originalEvent || c || g.event;
                var e;
                if (3 === c.which) return !1;
                if (!(d.itemsAmount <= d.options.items)) {
                    if (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish) return !1;
                    !1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);
                    !0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");
                    d.newPosX = 0;
                    d.newRelativeX = 0;
                    f(this).css(d.removeTransition());
                    e = f(this).position();
                    h.relativePos = e.left;
                    h.offsetX = a(c).x - e.left;
                    h.offsetY = a(c).y - e.top;
                    b("on");
                    h.sliding = !1;
                    h.targetElement = c.target || c.srcElement
                }
            })
        },
        getNewPosition: function() {
            var a = this.closestItem();
            a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem =
                a = 0);
            return a
        },
        closestItem: function() {
            var a = this,
                b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
                e = a.newPosX,
                c = null;
            f.each(b, function(d, g) {
                e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1], a.currentItem = f.inArray(c, a.positionsInArray)) :
                    (c = b[d + 1], a.currentItem = d + 1))
            });
            return a.currentItem
        },
        moveDirection: function() {
            var a;
            0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");
            return a
        },
        customEvents: function() {
            var a = this;
            a.$elem.on("owl.next", function() {
                a.next()
            });
            a.$elem.on("owl.prev", function() {
                a.prev()
            });
            a.$elem.on("owl.play", function(b, e) {
                a.options.autoPlay = e;
                a.play();
                a.hoverStatus = "play"
            });
            a.$elem.on("owl.stop", function() {
                a.stop();
                a.hoverStatus = "stop"
            });
            a.$elem.on("owl.goTo", function(b, e) {
                a.goTo(e)
            });
            a.$elem.on("owl.jumpTo", function(b, e) {
                a.jumpTo(e)
            })
        },
        stopOnHover: function() {
            var a = this;
            !0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function() {
                a.stop()
            }), a.$elem.on("mouseout", function() {
                "stop" !== a.hoverStatus && a.play()
            }))
        },
        lazyLoad: function() {
            var a, b, e, c, d;
            if (!1 === this.options.lazyLoad) return !1;
            for (a = 0; a < this.itemsAmount; a += 1) b = f(this.$owlItems[a]), "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"), c = b.find(".lazyOwl"), "string" !== typeof c.data("src") ?
                b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")), (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)))
        },
        lazyPreload: function(a, b) {
            function e() {
                a.data("owl-loaded", "loaded").removeClass("loading");
                b.removeAttr("data-src");
                "fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();
                "function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this,
                    [d.$elem])
            }

            function c() {
                f += 1;
                d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e()
            }
            var d = this,
                f = 0,
                k;
            "DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");
            c()
        },
        autoHeight: function() {
            function a() {
                var a = f(e.$owlItems[e.currentItem]).height();
                e.wrapperOuter.css("height", a + "px");
                e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function() {
                    e.wrapperOuter.addClass("autoHeight")
                }, 0)
            }

            function b() {
                d += 1;
                e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b,
                    100) : e.wrapperOuter.css("height", "")
            }
            var e = this,
                c = f(e.$owlItems[e.currentItem]).find("img"),
                d;
            void 0 !== c.get(0) ? (d = 0, b()) : a()
        },
        completeImg: function(a) {
            return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0
        },
        onVisibleItems: function() {
            var a;
            !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
            this.visibleItems = [];
            for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
            this.owl.visibleItems = this.visibleItems
        },
        transitionTypes: function(a) {
            this.outClass = "owl-" + a + "-out";
            this.inClass = "owl-" + a + "-in"
        },
        singleItemTransition: function() {
            var a = this,
                b = a.outClass,
                e = a.inClass,
                c = a.$owlItems.eq(a.currentItem),
                d = a.$owlItems.eq(a.prevItem),
                f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
                g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
            a.isTransition = !0;
            a.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": g + "px",
                "-moz-perspective-origin": g +
                    "px",
                "perspective-origin": g + "px"
            });
            d.css({
                position: "relative",
                left: f + "px"
            }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endPrev = !0;
                d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(d, b)
            });
            c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endCurrent = !0;
                c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(c, e)
            })
        },
        clearTransStyle: function(a,
            b) {
            a.css({
                position: "",
                left: ""
            }).removeClass(b);
            this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
        },
        owlStatus: function() {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        },
        clearEvents: function() {
            this.$elem.off(".owl owl mousedown.disableTextSelect");
            f(k).off(".owl owl");
            f(g).off("resize", this.resizer)
        },
        unWrap: function() {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
            this.clearEvents();
            this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        },
        destroy: function() {
            this.stop();
            g.clearInterval(this.checkVisible);
            this.unWrap();
            this.$elem.removeData()
        },
        reinit: function(a) {
            a = f.extend({}, this.userOptions,
                a);
            this.unWrap();
            this.init(a, this.$elem)
        },
        addItem: function(a, b) {
            var e;
            if (!a) return !1;
            if (0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;
            this.unWrap();
            e = void 0 === b || -1 === b ? -1 : b;
            e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);
            this.setVars()
        },
        removeItem: function(a) {
            if (0 === this.$elem.children().length) return !1;
            a = void 0 === a || -1 === a ? -1 : a;
            this.unWrap();
            this.$userItems.eq(a).remove();
            this.setVars()
        }
    };
    f.fn.owlCarousel = function(a) {
        return this.each(function() {
            if (!0 ===
                f(this).data("owl-init")) return !1;
            f(this).data("owl-init", !0);
            var b = Object.create(l);
            b.init(a, this);
            f.data(this, "owlCarousel", b)
        })
    };
    f.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1E3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: g,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
})(jQuery, window, document);
! function(a) {
    a.fn.gMap = function(b, c) {
        switch (b) {
            case "addMarker":
                return a(this).trigger("gMap.addMarker", [c.latitude, c.longitude, c.content, c.icon, c.popup]);
            case "centerAt":
                return a(this).trigger("gMap.centerAt", [c.latitude, c.longitude, c.zoom]);
            case "clearMarkers":
                return a(this).trigger("gMap.clearMarkers")
        }
        var d = a.extend({}, a.fn.gMap.defaults, b);
        return this.each(function() {
            var b = new google.maps.Map(this);
            a(this).data("gMap.reference", b);
            var c = new google.maps.Geocoder;
            d.address ? c.geocode({
                address: d.address
            }, function(a) {
                a && a.length && b.setCenter(a[0].geometry.location)
            }) : d.latitude && d.longitude ? b.setCenter(new google.maps.LatLng(d.latitude, d.longitude)) : a.isArray(d.markers) && d.markers.length > 0 ? d.markers[0].address ? c.geocode({
                address: d.markers[0].address
            }, function(a) {
                a && a.length > 0 && b.setCenter(a[0].geometry.location)
            }) : b.setCenter(new google.maps.LatLng(d.markers[0].latitude, d.markers[0].longitude)) : b.setCenter(new google.maps.LatLng(34.885931, 9.84375)), b.setZoom(d.zoom), b.setMapTypeId(google.maps.MapTypeId[d.maptype]);
            var e = {
                scrollwheel: d.scrollwheel,
                disableDoubleClickZoom: !d.doubleclickzoom
            };
            d.controls === !1 ? a.extend(e, {
                disableDefaultUI: !0
            }) : 0 !== d.controls.length && a.extend(e, d.controls, {
                disableDefaultUI: !0
            }), b.setOptions(e);
            var f, g, h = new google.maps.Marker;
            f = new google.maps.MarkerImage(d.icon.image), f.size = new google.maps.Size(d.icon.iconsize[0], d.icon.iconsize[1]), f.anchor = new google.maps.Point(d.icon.iconanchor[0], d.icon.iconanchor[1]), h.setIcon(f), d.icon.shadow && (g = new google.maps.MarkerImage(d.icon.shadow), g.size = new google.maps.Size(d.icon.shadowsize[0], d.icon.shadowsize[1]), g.anchor = new google.maps.Point(d.icon.shadowanchor[0], d.icon.shadowanchor[1]), h.setShadow(g)), a(this).bind("gMap.centerAt", function(a, c, d, e) {
                e && b.setZoom(e), b.panTo(new google.maps.LatLng(parseFloat(c), parseFloat(d)))
            });
            var i = [];
            a(this).bind("gMap.clearMarkers", function() {
                for (; i[0];) i.pop().setMap(null)
            });
            var j;
            a(this).bind("gMap.addMarker", function(a, c, e, f, g, k) {
                var l, m, n = new google.maps.LatLng(parseFloat(c), parseFloat(e)),
                    o = new google.maps.Marker({
                        position: n
                    });
                if (g ? (l = new google.maps.MarkerImage(g.image), l.size = new google.maps.Size(g.iconsize[0], g.iconsize[1]), l.anchor = new google.maps.Point(g.iconanchor[0], g.iconanchor[1]), o.setIcon(l), g.shadow && (m = new google.maps.MarkerImage(g.shadow), m.size = new google.maps.Size(g.shadowsize[0], g.shadowsize[1]), m.anchor = new google.maps.Point(g.shadowanchor[0], g.shadowanchor[1]), h.setShadow(m))) : (o.setIcon(h.getIcon()), o.setShadow(h.getShadow())), f) {
                    "_latlng" === f && (f = c + ", " + e);
                    var p = new google.maps.InfoWindow({
                        content: d.html_prepend + f + d.html_append
                    });
                    google.maps.event.addListener(o, "click", function() {
                        j && j.close(), p.open(b, o), j = p
                    }), k && google.maps.event.addListenerOnce(b, "tilesloaded", function() {
                        p.open(b, o)
                    })
                }
                o.setMap(b), i.push(o)
            });
            for (var k, l = this, m = function(b) {
                    return function(c) {
                        c && c.length > 0 && a(l).trigger("gMap.addMarker", [c[0].geometry.location.lat(), c[0].geometry.location.lng(), b.html, b.icon, b.popup])
                    }
                }, n = 0; n < d.markers.length; n++) k = d.markers[n], k.address ? ("_address" === k.html && (k.html = k.address), c.geocode({
                address: k.address
            }, m(k))) : a(this).trigger("gMap.addMarker", [k.latitude, k.longitude, k.html, k.icon, k.popup])
        })
    }, a.fn.gMap.defaults = {
        address: "",
        latitude: 0,
        longitude: 0,
        zoom: 1,
        markers: [],
        controls: [],
        scrollwheel: !1,
        doubleclickzoom: !0,
        maptype: "ROADMAP",
        html_prepend: '<div class="gmap_marker">',
        html_append: "</div>",
        icon: {
            image: "http://www.google.com/mapfiles/marker.png",
            shadow: "http://www.google.com/mapfiles/shadow50.png",
            iconsize: [20, 34],
            shadowsize: [37, 34],
            iconanchor: [9, 34],
            shadowanchor: [6, 34]
        }
    }
}(jQuery);;
(function($) {
    var eventNamespace = 'waitForImages';
    $.waitForImages = {
        hasImageProperties: ['backgroundImage', 'listStyleImage', 'borderImage', 'borderCornerImage', 'cursor'],
        hasImageAttributes: ['srcset']
    };
    $.expr[':'].uncached = function(obj) {
        if (!$(obj).is('img[src][src!=""]')) {
            return false
        }
        var img = new Image();
        img.src = obj.src;
        return !img.complete
    };
    $.fn.waitForImages = function() {
        var allImgsLength = 0;
        var allImgsLoaded = 0;
        var deferred = $.Deferred();
        var finishedCallback;
        var eachCallback;
        var waitForAll;
        if ($.isPlainObject(arguments[0])) {
            waitForAll = arguments[0].waitForAll;
            eachCallback = arguments[0].each;
            finishedCallback = arguments[0].finished
        } else {
            if (arguments.length === 1 && $.type(arguments[0]) === 'boolean') {
                waitForAll = arguments[0]
            } else {
                finishedCallback = arguments[0];
                eachCallback = arguments[1];
                waitForAll = arguments[2]
            }
        }
        finishedCallback = finishedCallback || $.noop;
        eachCallback = eachCallback || $.noop;
        waitForAll = !!waitForAll;
        if (!$.isFunction(finishedCallback) || !$.isFunction(eachCallback)) {
            throw new TypeError('An invalid callback was supplied.');
        }
        this.each(function() {
            var obj = $(this);
            var allImgs = [];
            var hasImgProperties = $.waitForImages.hasImageProperties || [];
            var hasImageAttributes = $.waitForImages.hasImageAttributes || [];
            var matchUrl = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
            if (waitForAll) {
                obj.find('*').addBack().each(function() {
                    var element = $(this);
                    if (element.is('img:uncached')) {
                        allImgs.push({
                            src: element.attr('src'),
                            element: element[0]
                        })
                    }
                    $.each(hasImgProperties, function(i, property) {
                        var propertyValue = element.css(property);
                        var match;
                        if (!propertyValue) {
                            return true
                        }
                        while (match = matchUrl.exec(propertyValue)) {
                            allImgs.push({
                                src: match[2],
                                element: element[0]
                            })
                        }
                    });
                    $.each(hasImageAttributes, function(i, attribute) {
                        var attributeValue = element.attr(attribute);
                        var attributeValues;
                        if (!attributeValue) {
                            return true
                        }
                        attributeValues = attributeValue.split(',');
                        $.each(attributeValues, function(i, value) {
                            value = $.trim(value).split(' ')[0];
                            allImgs.push({
                                src: value,
                                element: element[0]
                            })
                        })
                    })
                })
            } else {
                obj.find('img:uncached').each(function() {
                    allImgs.push({
                        src: this.src,
                        element: this
                    })
                })
            }
            allImgsLength = allImgs.length;
            allImgsLoaded = 0;
            if (allImgsLength === 0) {
                finishedCallback.call(obj[0]);
                deferred.resolveWith(obj[0])
            }
            $.each(allImgs, function(i, img) {
                var image = new Image();
                var events = 'load.' + eventNamespace + ' error.' + eventNamespace;
                $(image).one(events, function me(event) {
                    var eachArguments = [allImgsLoaded, allImgsLength, event.type == 'load'];
                    allImgsLoaded++;
                    eachCallback.apply(img.element, eachArguments);
                    deferred.notifyWith(img.element, eachArguments);
                    $(this).off(events, me);
                    if (allImgsLoaded == allImgsLength) {
                        finishedCallback.call(obj[0]);
                        deferred.resolveWith(obj[0]);
                        return false
                    }
                });
                image.src = img.src
            })
        });
        return deferred.promise()
    }
}(jQuery));
(function(e, t, r) {
    "use strict";

    function n(r) {
        if (o = t.documentElement, a = t.body, Y(), lt = this, r = r || {}, mt = r.constants || {}, r.easing)
            for (var n in r.easing) X[n] = r.easing[n];
        Tt = r.edgeStrategy || "set", ft = {
            beforerender: r.beforerender,
            render: r.render,
            keyframe: r.keyframe
        }, ut = r.forceHeight !== !1, ut && (zt = r.scale || 1), pt = r.mobileDeceleration || x, gt = r.smoothScrolling !== !1, vt = r.smoothScrollingDuration || A, ht = {
            targetTop: lt.getScrollTop()
        }, Kt = (r.mobileCheck || function() {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || e.opera)
        })(), Kt ? (ct = t.getElementById(r.skrollrBody || E), ct && it(), j(), Dt(o, [y, S], [T])) : Dt(o, [y, b], [T]), lt.refresh(), kt(e, "resize orientationchange", function() {
            var e = o.clientWidth,
                t = o.clientHeight;
            (t !== Bt || e !== $t) && (Bt = t, $t = e, _t = !0)
        });
        var i = R();
        return function l() {
            J(), St = i(l)
        }(), lt
    }
    var o, a, i = {
            get: function() {
                return lt
            },
            init: function(e) {
                return lt || new n(e)
            },
            VERSION: "0.6.29"
        },
        l = Object.prototype.hasOwnProperty,
        s = e.Math,
        c = e.getComputedStyle,
        f = "touchstart",
        u = "touchmove",
        m = "touchcancel",
        p = "touchend",
        d = "skrollable",
        g = d + "-before",
        v = d + "-between",
        h = d + "-after",
        y = "skrollr",
        T = "no-" + y,
        b = y + "-desktop",
        S = y + "-mobile",
        k = "linear",
        w = 1e3,
        x = .004,
        E = "skrollr-body",
        A = 200,
        F = "start",
        C = "end",
        H = "center",
        D = "bottom",
        I = "___skrollable_id",
        P = /^(?:input|textarea|button|select)$/i,
        N = /^\s+|\s+$/g,
        O = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        V = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
        z = /^(@?[a-z\-]+)\[(\w+)\]$/,
        q = /-([a-z0-9_])/g,
        L = function(e, t) {
            return t.toUpperCase()
        },
        M = /[\-+]?[\d]*\.?[\d]+/g,
        $ = /\{\?\}/g,
        B = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
        _ = /[a-z\-]+-gradient/g,
        G = "",
        K = "",
        Y = function() {
            var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
            if (c) {
                var t = c(a, null);
                for (var n in t)
                    if (G = n.match(e) || +n == n && t[n].match(e)) break;
                if (!G) return G = K = "", r;
                G = G[0], "-" === G.slice(0, 1) ? (K = G, G = {
                    "-webkit-": "webkit",
                    "-moz-": "Moz",
                    "-ms-": "ms",
                    "-o-": "O"
                } [G]) : K = "-" + G.toLowerCase() + "-"
            }
        },
        R = function() {
            var t = e.requestAnimationFrame || e[G.toLowerCase() + "RequestAnimationFrame"],
                r = Nt();
            return (Kt || !t) && (t = function(t) {
                var n = Nt() - r,
                    o = s.max(0, 1e3 / 60 - n);
                return e.setTimeout(function() {
                    r = Nt(), t()
                }, o)
            }), t
        },
        U = function() {
            var t = e.cancelAnimationFrame || e[G.toLowerCase() + "CancelAnimationFrame"];
            return (Kt || !t) && (t = function(t) {
                return e.clearTimeout(t)
            }), t
        },
        X = {
            begin: function() {
                return 0
            },
            end: function() {
                return 1
            },
            linear: function(e) {
                return e
            },
            quadratic: function(e) {
                return e * e
            },
            cubic: function(e) {
                return e * e * e
            },
            swing: function(e) {
                return -s.cos(e * s.PI) / 2 + .5
            },
            sqrt: function(e) {
                return s.sqrt(e)
            },
            outCubic: function(e) {
                return s.pow(e - 1, 3) + 1
            },
            bounce: function(e) {
                var t;
                if (.5083 >= e) t = 3;
                else if (.8489 >= e) t = 9;
                else if (.96208 >= e) t = 27;
                else {
                    if (!(.99981 >= e)) return 1;
                    t = 91
                }
                return 1 - s.abs(3 * s.cos(1.028 * e * t) / t)
            }
        };
    n.prototype.refresh = function(e) {
        var n, o, a = !1;
        for (e === r ? (a = !0, st = [], Gt = 0, e = t.getElementsByTagName("*")) : e.length === r && (e = [e]), n = 0, o = e.length; o > n; n++) {
            var i = e[n],
                l = i,
                s = [],
                c = gt,
                f = Tt,
                u = !1;
            if (a && I in i && delete i[I], i.attributes) {
                for (var m = 0, p = i.attributes.length; p > m; m++) {
                    var g = i.attributes[m];
                    if ("data-anchor-target" !== g.name)
                        if ("data-smooth-scrolling" !== g.name)
                            if ("data-edge-strategy" !== g.name)
                                if ("data-emit-events" !== g.name) {
                                    var v = g.name.match(O);
                                    if (null !== v) {
                                        var h = {
                                            props: g.value,
                                            element: i,
                                            eventType: g.name.replace(q, L)
                                        };
                                        s.push(h);
                                        var y = v[1];
                                        y && (h.constant = y.substr(1));
                                        var T = v[2];
                                        /p$/.test(T) ? (h.isPercentage = !0, h.offset = (0 | T.slice(0, -1)) / 100) : h.offset = 0 | T;
                                        var b = v[3],
                                            S = v[4] || b;
                                        b && b !== F && b !== C ? (h.mode = "relative", h.anchors = [b, S]) : (h.mode = "absolute", b === C ? h.isEnd = !0 : h.isPercentage || (h.offset = h.offset * zt))
                                    }
                                } else u = !0;
                    else f = g.value;
                    else c = "off" !== g.value;
                    else if (l = t.querySelector(g.value), null === l) throw 'Unable to find anchor target "' + g.value + '"'
                }
                if (s.length) {
                    var k, w, x;
                    !a && I in i ? (x = i[I], k = st[x].styleAttr, w = st[x].classAttr) : (x = i[I] = Gt++, k = i.style.cssText, w = Ht(i)), st[x] = {
                        element: i,
                        styleAttr: k,
                        classAttr: w,
                        anchorTarget: l,
                        keyFrames: s,
                        smoothScrolling: c,
                        edgeStrategy: f,
                        emitEvents: u,
                        lastFrameIndex: -1
                    }, Dt(i, [d], [])
                }
            }
        }
        for (At(), n = 0, o = e.length; o > n; n++) {
            var E = st[e[n][I]];
            E !== r && (Q(E), tt(E))
        }
        return lt
    }, n.prototype.relativeToAbsolute = function(e, t, r) {
        var n = o.clientHeight,
            a = e.getBoundingClientRect(),
            i = a.top,
            l = a.bottom - a.top;
        return t === D ? i -= n : t === H && (i -= n / 2), r === D ? i += l : r === H && (i += l / 2), i += lt.getScrollTop(), 0 | i + .5
    }, n.prototype.animateTo = function(e, t) {
        t = t || {};
        var n = Nt(),
            o = lt.getScrollTop();
        return dt = {
            startTop: o,
            topDiff: e - o,
            targetTop: e,
            duration: t.duration || w,
            startTime: n,
            endTime: n + (t.duration || w),
            easing: X[t.easing || k],
            done: t.done
        }, dt.topDiff || (dt.done && dt.done.call(lt, !1), dt = r), lt
    }, n.prototype.stopAnimateTo = function() {
        dt && dt.done && dt.done.call(lt, !0), dt = r
    }, n.prototype.isAnimatingTo = function() {
        return !!dt
    }, n.prototype.isMobile = function() {
        return Kt
    }, n.prototype.setScrollTop = function(t, r) {
        return yt = r === !0, Kt ? Yt = s.min(s.max(t, 0), Vt) : e.scrollTo(0, t), lt
    }, n.prototype.getScrollTop = function() {
        return Kt ? Yt : e.pageYOffset || o.scrollTop || a.scrollTop || 0
    }, n.prototype.getMaxScrollTop = function() {
        return Vt
    }, n.prototype.on = function(e, t) {
        return ft[e] = t, lt
    }, n.prototype.off = function(e) {
        return delete ft[e], lt
    }, n.prototype.destroy = function() {
        var e = U();
        e(St), xt(), Dt(o, [T], [y, b, S]);
        for (var t = 0, n = st.length; n > t; t++) at(st[t].element);
        o.style.overflow = a.style.overflow = "", o.style.height = a.style.height = "", ct && i.setStyle(ct, "transform", "none"), lt = r, ct = r, ft = r, ut = r, Vt = 0, zt = 1, mt = r, pt = r, qt = "down", Lt = -1, $t = 0, Bt = 0, _t = !1, dt = r, gt = r, vt = r, ht = r, yt = r, Gt = 0, Tt = r, Kt = !1, Yt = 0, bt = r
    };
    var j = function() {
            var n, i, l, c, d, g, v, h, y, T, b, S;
            kt(o, [f, u, m, p].join(" "), function(e) {
                var o = e.changedTouches[0];
                for (c = e.target; 3 === c.nodeType;) c = c.parentNode;
                switch (d = o.clientY, g = o.clientX, T = e.timeStamp, P.test(c.tagName) || e.preventDefault(), e.type) {
                    case f:
                        n && n.blur(), lt.stopAnimateTo(), n = c, i = v = d, l = g, y = T;
                        break;
                    case u:
                        P.test(c.tagName) && t.activeElement !== c && e.preventDefault(), h = d - v, S = T - b, lt.setScrollTop(Yt - h, !0), v = d, b = T;
                        break;
                    default:
                    case m:
                    case p:
                        var a = i - d,
                            k = l - g,
                            w = k * k + a * a;
                        if (49 > w) {
                            if (!P.test(n.tagName)) {
                                n.focus();
                                var x = t.createEvent("MouseEvents");
                                x.initMouseEvent("click", !0, !0, e.view, 1, o.screenX, o.screenY, o.clientX, o.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), n.dispatchEvent(x)
                            }
                            return
                        }
                        n = r;
                        var E = h / S;
                        E = s.max(s.min(E, 3), -3);
                        var A = s.abs(E / pt),
                            F = E * A + .5 * pt * A * A,
                            C = lt.getScrollTop() - F,
                            H = 0;
                        C > Vt ? (H = (Vt - C) / F, C = Vt) : 0 > C && (H = -C / F, C = 0), A *= 1 - H, lt.animateTo(0 | C + .5, {
                            easing: "outCubic",
                            duration: A
                        })
                }
            }), e.scrollTo(0, 0), o.style.overflow = a.style.overflow = "hidden"
        },
        W = function() {
            var e, t, r, n, a, i, l, c, f, u, m, p = o.clientHeight,
                d = Ft();
            for (c = 0, f = st.length; f > c; c++)
                for (e = st[c], t = e.element, r = e.anchorTarget, n = e.keyFrames, a = 0, i = n.length; i > a; a++) l = n[a], u = l.offset, m = d[l.constant] || 0, l.frame = u, l.isPercentage && (u *= p, l.frame = u), "relative" === l.mode && (at(t), l.frame = lt.relativeToAbsolute(r, l.anchors[0], l.anchors[1]) - u, at(t, !0)), l.frame += m, ut && !l.isEnd && l.frame > Vt && (Vt = l.frame);
            for (Vt = s.max(Vt, Ct()), c = 0, f = st.length; f > c; c++) {
                for (e = st[c], n = e.keyFrames, a = 0, i = n.length; i > a; a++) l = n[a], m = d[l.constant] || 0, l.isEnd && (l.frame = Vt - l.offset + m);
                e.keyFrames.sort(Ot)
            }
        },
        Z = function(e, t) {
            for (var r = 0, n = st.length; n > r; r++) {
                var o, a, s = st[r],
                    c = s.element,
                    f = s.smoothScrolling ? e : t,
                    u = s.keyFrames,
                    m = u.length,
                    p = u[0],
                    y = u[u.length - 1],
                    T = p.frame > f,
                    b = f > y.frame,
                    S = T ? p : y,
                    k = s.emitEvents,
                    w = s.lastFrameIndex;
                if (T || b) {
                    if (T && -1 === s.edge || b && 1 === s.edge) continue;
                    switch (T ? (Dt(c, [g], [h, v]), k && w > -1 && (Et(c, p.eventType, qt), s.lastFrameIndex = -1)) : (Dt(c, [h], [g, v]), k && m > w && (Et(c, y.eventType, qt), s.lastFrameIndex = m)), s.edge = T ? -1 : 1, s.edgeStrategy) {
                        case "reset":
                            at(c);
                            continue;
                        case "ease":
                            f = S.frame;
                            break;
                        default:
                        case "set":
                            var x = S.props;
                            for (o in x) l.call(x, o) && (a = ot(x[o].value), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), a) : i.setStyle(c, o, a));
                            continue
                    }
                } else 0 !== s.edge && (Dt(c, [d, v], [g, h]), s.edge = 0);
                for (var E = 0; m - 1 > E; E++)
                    if (f >= u[E].frame && u[E + 1].frame >= f) {
                        var A = u[E],
                            F = u[E + 1];
                        for (o in A.props)
                            if (l.call(A.props, o)) {
                                var C = (f - A.frame) / (F.frame - A.frame);
                                C = A.props[o].easing(C), a = nt(A.props[o].value, F.props[o].value, C), a = ot(a), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), a) : i.setStyle(c, o, a)
                            } k && w !== E && ("down" === qt ? Et(c, A.eventType, qt) : Et(c, F.eventType, qt), s.lastFrameIndex = E);
                        break
                    }
            }
        },
        J = function() {
            _t && (_t = !1, At());
            var e, t, n = lt.getScrollTop(),
                o = Nt();
            if (dt) o >= dt.endTime ? (n = dt.targetTop, e = dt.done, dt = r) : (t = dt.easing((o - dt.startTime) / dt.duration), n = 0 | dt.startTop + t * dt.topDiff), lt.setScrollTop(n, !0);
            else if (!yt) {
                var a = ht.targetTop - n;
                a && (ht = {
                    startTop: Lt,
                    topDiff: n - Lt,
                    targetTop: n,
                    startTime: Mt,
                    endTime: Mt + vt
                }), ht.endTime >= o && (t = X.sqrt((o - ht.startTime) / vt), n = 0 | ht.startTop + t * ht.topDiff)
            }
            if (Kt && ct && i.setStyle(ct, "transform", "translate(0, " + -Yt + "px) " + bt), yt || Lt !== n) {
                qt = n > Lt ? "down" : Lt > n ? "up" : qt, yt = !1;
                var l = {
                        curTop: n,
                        lastTop: Lt,
                        maxTop: Vt,
                        direction: qt
                    },
                    s = ft.beforerender && ft.beforerender.call(lt, l);
                s !== !1 && (Z(n, lt.getScrollTop()), Lt = n, ft.render && ft.render.call(lt, l)), e && e.call(lt, !1)
            }
            Mt = o
        },
        Q = function(e) {
            for (var t = 0, r = e.keyFrames.length; r > t; t++) {
                for (var n, o, a, i, l = e.keyFrames[t], s = {}; null !== (i = V.exec(l.props));) a = i[1], o = i[2], n = a.match(z), null !== n ? (a = n[1], n = n[2]) : n = k, o = o.indexOf("!") ? et(o) : [o.slice(1)], s[a] = {
                    value: o,
                    easing: X[n]
                };
                l.props = s
            }
        },
        et = function(e) {
            var t = [];
            return B.lastIndex = 0, e = e.replace(B, function(e) {
                return e.replace(M, function(e) {
                    return 100 * (e / 255) + "%"
                })
            }), K && (_.lastIndex = 0, e = e.replace(_, function(e) {
                return K + e
            })), e = e.replace(M, function(e) {
                return t.push(+e), "{?}"
            }), t.unshift(e), t
        },
        tt = function(e) {
            var t, r, n = {};
            for (t = 0, r = e.keyFrames.length; r > t; t++) rt(e.keyFrames[t], n);
            for (n = {}, t = e.keyFrames.length - 1; t >= 0; t--) rt(e.keyFrames[t], n)
        },
        rt = function(e, t) {
            var r;
            for (r in t) l.call(e.props, r) || (e.props[r] = t[r]);
            for (r in e.props) t[r] = e.props[r]
        },
        nt = function(e, t, r) {
            var n, o = e.length;
            if (o !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
            var a = [e[0]];
            for (n = 1; o > n; n++) a[n] = e[n] + (t[n] - e[n]) * r;
            return a
        },
        ot = function(e) {
            var t = 1;
            return $.lastIndex = 0, e[0].replace($, function() {
                return e[t++]
            })
        },
        at = function(e, t) {
            e = [].concat(e);
            for (var r, n, o = 0, a = e.length; a > o; o++) n = e[o], r = st[n[I]], r && (t ? (n.style.cssText = r.dirtyStyleAttr, Dt(n, r.dirtyClassAttr)) : (r.dirtyStyleAttr = n.style.cssText, r.dirtyClassAttr = Ht(n), n.style.cssText = r.styleAttr, Dt(n, r.classAttr)))
        },
        it = function() {
            bt = "translateZ(0)", i.setStyle(ct, "transform", bt);
            var e = c(ct),
                t = e.getPropertyValue("transform"),
                r = e.getPropertyValue(K + "transform"),
                n = t && "none" !== t || r && "none" !== r;
            n || (bt = "")
        };
    i.setStyle = function(e, t, r) {
        var n = e.style;
        if (t = t.replace(q, L).replace("-", ""), "zIndex" === t) n[t] = isNaN(r) ? r : "" + (0 | r);
        else if ("float" === t) n.styleFloat = n.cssFloat = r;
        else try {
            G && (n[G + t.slice(0, 1).toUpperCase() + t.slice(1)] = r), n[t] = r
        } catch (o) {}
    };
    var lt, st, ct, ft, ut, mt, pt, dt, gt, vt, ht, yt, Tt, bt, St, kt = i.addEvent = function(t, r, n) {
            var o = function(t) {
                return t = t || e.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function() {
                    t.returnValue = !1, t.defaultPrevented = !0
                }), n.call(this, t)
            };
            r = r.split(" ");
            for (var a, i = 0, l = r.length; l > i; i++) a = r[i], t.addEventListener ? t.addEventListener(a, n, !1) : t.attachEvent("on" + a, o), Rt.push({
                element: t,
                name: a,
                listener: n
            })
        },
        wt = i.removeEvent = function(e, t, r) {
            t = t.split(" ");
            for (var n = 0, o = t.length; o > n; n++) e.removeEventListener ? e.removeEventListener(t[n], r, !1) : e.detachEvent("on" + t[n], r)
        },
        xt = function() {
            for (var e, t = 0, r = Rt.length; r > t; t++) e = Rt[t], wt(e.element, e.name, e.listener);
            Rt = []
        },
        Et = function(e, t, r) {
            ft.keyframe && ft.keyframe.call(lt, e, t, r)
        },
        At = function() {
            var e = lt.getScrollTop();
            Vt = 0, ut && !Kt && (a.style.height = ""), W(), ut && !Kt && (a.style.height = Vt + o.clientHeight + "px"), Kt ? lt.setScrollTop(s.min(lt.getScrollTop(), Vt)) : lt.setScrollTop(e, !0), yt = !0
        },
        Ft = function() {
            var e, t, r = o.clientHeight,
                n = {};
            for (e in mt) t = mt[e], "function" == typeof t ? t = t.call(lt) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * r), n[e] = t;
            return n
        },
        Ct = function() {
            var e, t = 0;
            return ct && (t = s.max(ct.offsetHeight, ct.scrollHeight)), e = s.max(t, a.scrollHeight, a.offsetHeight, o.scrollHeight, o.offsetHeight, o.clientHeight), e - o.clientHeight
        },
        Ht = function(t) {
            var r = "className";
            return e.SVGElement && t instanceof e.SVGElement && (t = t[r], r = "baseVal"), t[r]
        },
        Dt = function(t, n, o) {
            var a = "className";
            if (e.SVGElement && t instanceof e.SVGElement && (t = t[a], a = "baseVal"), o === r) return t[a] = n, r;
            for (var i = t[a], l = 0, s = o.length; s > l; l++) i = Pt(i).replace(Pt(o[l]), " ");
            i = It(i);
            for (var c = 0, f = n.length; f > c; c++) - 1 === Pt(i).indexOf(Pt(n[c])) && (i += " " + n[c]);
            t[a] = It(i)
        },
        It = function(e) {
            return e.replace(N, "")
        },
        Pt = function(e) {
            return " " + e + " "
        },
        Nt = Date.now || function() {
            return +new Date
        },
        Ot = function(e, t) {
            return e.frame - t.frame
        },
        Vt = 0,
        zt = 1,
        qt = "down",
        Lt = -1,
        Mt = Nt(),
        $t = 0,
        Bt = 0,
        _t = !1,
        Gt = 0,
        Kt = !1,
        Yt = 0,
        Rt = [];
    "function" == typeof define && define.amd ? define([], function() {
        return i
    }) : "undefined" != typeof module && module.exports ? module.exports = i : e.skrollr = i
})(window, document);
var Swiper = function(f, b) {
    function g(a) {
        return document.querySelectorAll ? document.querySelectorAll(a) : jQuery(a)
    }

    function h() {
        var c = y - l;
        b.freeMode && (c = y - l);
        b.slidesPerView > a.slides.length && (c = 0);
        0 > c && (c = 0);
        return c
    }

    function n() {
        function c(c) {
            var d = new Image;
            d.onload = function() {
                a.imagesLoaded++;
                if (a.imagesLoaded == a.imagesToLoad.length && (a.reInit(), b.onImagesReady)) b.onImagesReady(a)
            };
            d.src = c
        }
        a.browser.ie10 ? (a.h.addEventListener(a.wrapper, a.touchEvents.touchStart, z, !1), a.h.addEventListener(document, a.touchEvents.touchMove,
            A, !1), a.h.addEventListener(document, a.touchEvents.touchEnd, B, !1)) : (a.support.touch && (a.h.addEventListener(a.wrapper, "touchstart", z, !1), a.h.addEventListener(a.wrapper, "touchmove", A, !1), a.h.addEventListener(a.wrapper, "touchend", B, !1)), b.simulateTouch && (a.h.addEventListener(a.wrapper, "mousedown", z, !1), a.h.addEventListener(document, "mousemove", A, !1), a.h.addEventListener(document, "mouseup", B, !1)));
        b.autoResize && a.h.addEventListener(window, "resize", a.resizeFix, !1);
        t();
        a._wheelEvent = !1;
        if (b.mousewheelControl) {
            void 0 !==
                document.onmousewheel && (a._wheelEvent = "mousewheel");
            try {
                WheelEvent("wheel"), a._wheelEvent = "wheel"
            } catch (d) {}
            a._wheelEvent || (a._wheelEvent = "DOMMouseScroll");
            a._wheelEvent && a.h.addEventListener(a.container, a._wheelEvent, N, !1)
        }
        b.keyboardControl && a.h.addEventListener(document, "keydown", O, !1);
        if (b.updateOnImagesReady) {
            document.querySelectorAll ? a.imagesToLoad = a.container.querySelectorAll("img") : window.jQuery && (a.imagesToLoad = g(a.container).find("img"));
            for (var e = 0; e < a.imagesToLoad.length; e++) c(a.imagesToLoad[e].getAttribute("src"))
        }
    }

    function t() {
        if (b.preventLinks) {
            var c = [];
            document.querySelectorAll ? c = a.container.querySelectorAll("a") : window.jQuery && (c = g(a.container).find("a"));
            for (var d = 0; d < c.length; d++) a.h.addEventListener(c[d], "click", P, !1)
        }
        if (b.releaseFormElements)
            for (c = document.querySelectorAll ? a.container.querySelectorAll("input, textarea, select") : g(a.container).find("input, textarea, select"), d = 0; d < c.length; d++) a.h.addEventListener(c[d], a.touchEvents.touchStart, Q, !0);
        if (b.onSlideClick)
            for (d = 0; d < a.slides.length; d++) a.h.addEventListener(a.slides[d],
                "click", R, !1);
        if (b.onSlideTouch)
            for (d = 0; d < a.slides.length; d++) a.h.addEventListener(a.slides[d], a.touchEvents.touchStart, S, !1)
    }

    function v() {
        if (b.onSlideClick)
            for (var c = 0; c < a.slides.length; c++) a.h.removeEventListener(a.slides[c], "click", R, !1);
        if (b.onSlideTouch)
            for (c = 0; c < a.slides.length; c++) a.h.removeEventListener(a.slides[c], a.touchEvents.touchStart, S, !1);
        if (b.releaseFormElements)
            for (var d = document.querySelectorAll ? a.container.querySelectorAll("input, textarea, select") : g(a.container).find("input, textarea, select"),
                    c = 0; c < d.length; c++) a.h.removeEventListener(d[c], a.touchEvents.touchStart, Q, !0);
        if (b.preventLinks)
            for (d = [], document.querySelectorAll ? d = a.container.querySelectorAll("a") : window.jQuery && (d = g(a.container).find("a")), c = 0; c < d.length; c++) a.h.removeEventListener(d[c], "click", P, !1)
    }

    function O(c) {
        var b = c.keyCode || c.charCode;
        if (37 == b || 39 == b || 38 == b || 40 == b) {
            for (var e = !1, f = a.h.getOffset(a.container), h = a.h.windowScroll().left, g = a.h.windowScroll().top, m = a.h.windowWidth(), l = a.h.windowHeight(), f = [
                    [f.left, f.top],
                    [f.left +
                        a.width, f.top
                    ],
                    [f.left, f.top + a.height],
                    [f.left + a.width, f.top + a.height]
                ], p = 0; p < f.length; p++) {
                var r = f[p];
                r[0] >= h && (r[0] <= h + m && r[1] >= g && r[1] <= g + l) && (e = !0)
            }
            if (!e) return
        }
        if (k) {
            if (37 == b || 39 == b) c.preventDefault ? c.preventDefault() : c.returnValue = !1;
            39 == b && a.swipeNext();
            37 == b && a.swipePrev()
        } else {
            if (38 == b || 40 == b) c.preventDefault ? c.preventDefault() : c.returnValue = !1;
            40 == b && a.swipeNext();
            38 == b && a.swipePrev()
        }
    }

    function N(c) {
        var d = a._wheelEvent,
            e;
        c.detail ? e = -c.detail : "mousewheel" == d ? e = c.wheelDelta : "DOMMouseScroll" ==
            d ? e = -c.detail : "wheel" == d && (e = Math.abs(c.deltaX) > Math.abs(c.deltaY) ? -c.deltaX : -c.deltaY);
        b.freeMode ? (k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y"), k ? (d = a.getWrapperTranslate("x") + e, e = a.getWrapperTranslate("y"), 0 < d && (d = 0), d < -h() && (d = -h())) : (d = a.getWrapperTranslate("x"), e = a.getWrapperTranslate("y") + e, 0 < e && (e = 0), e < -h() && (e = -h())), a.setWrapperTransition(0), a.setWrapperTranslate(d, e, 0), k ? a.updateActiveSlide(d) : a.updateActiveSlide(e)) : 0 > e ? a.swipeNext() : a.swipePrev();
        b.autoplay && a.stopAutoplay();
        c.preventDefault ? c.preventDefault() : c.returnValue = !1;
        return !1
    }

    function T(a) {
        for (var d = !1; !d;) - 1 < a.className.indexOf(b.slideClass) && (d = a), a = a.parentElement;
        return d
    }

    function R(c) {
        a.allowSlideClick && (c.target ? (a.clickedSlide = this, a.clickedSlideIndex = a.slides.indexOf(this)) : (a.clickedSlide = T(c.srcElement), a.clickedSlideIndex = a.slides.indexOf(a.clickedSlide)), b.onSlideClick(a))
    }

    function S(c) {
        a.clickedSlide = c.target ? this : T(c.srcElement);
        a.clickedSlideIndex = a.slides.indexOf(a.clickedSlide);
        b.onSlideTouch(a)
    }

    function P(b) {
        if (!a.allowLinks) return b.preventDefault ? b.preventDefault() : b.returnValue = !1, !1
    }

    function Q(a) {
        a.stopPropagation ? a.stopPropagation() : a.returnValue = !1;
        return !1
    }

    function z(c) {
        b.preventLinks && (a.allowLinks = !0);
        if (a.isTouched || b.onlyExternal) return !1;
        var d;
        if (d = b.noSwiping)
            if (d = c.target || c.srcElement) {
                d = c.target || c.srcElement;
                var e = !1;
                do -1 < d.className.indexOf(b.noSwipingClass) && (e = !0), d = d.parentElement; while (!e && d.parentElement && -1 == d.className.indexOf(b.wrapperClass));
                !e && (-1 < d.className.indexOf(b.wrapperClass) &&
                    -1 < d.className.indexOf(b.noSwipingClass)) && (e = !0);
                d = e
            } if (d) return !1;
        G = !1;
        a.isTouched = !0;
        u = "touchstart" == c.type;
        if (!u || 1 == c.targetTouches.length) {
            b.loop && a.fixLoop();
            a.callPlugins("onTouchStartBegin");
            u || (c.preventDefault ? c.preventDefault() : c.returnValue = !1);
            d = u ? c.targetTouches[0].pageX : c.pageX || c.clientX;
            c = u ? c.targetTouches[0].pageY : c.pageY || c.clientY;
            a.touches.startX = a.touches.currentX = d;
            a.touches.startY = a.touches.currentY = c;
            a.touches.start = a.touches.current = k ? d : c;
            a.setWrapperTransition(0);
            a.positions.start =
                a.positions.current = k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y");
            k ? a.setWrapperTranslate(a.positions.start, 0, 0) : a.setWrapperTranslate(0, a.positions.start, 0);
            a.times.start = (new Date).getTime();
            x = void 0;
            0 < b.moveStartThreshold && (M = !1);
            if (b.onTouchStart) b.onTouchStart(a);
            a.callPlugins("onTouchStartEnd")
        }
    }

    function A(c) {
        if (a.isTouched && !b.onlyExternal && (!u || "mousemove" != c.type)) {
            var d = u ? c.targetTouches[0].pageX : c.pageX || c.clientX,
                e = u ? c.targetTouches[0].pageY : c.pageY || c.clientY;
            "undefined" ===
            typeof x && k && (x = !!(x || Math.abs(e - a.touches.startY) > Math.abs(d - a.touches.startX)));
            "undefined" !== typeof x || k || (x = !!(x || Math.abs(e - a.touches.startY) < Math.abs(d - a.touches.startX)));
            if (x) a.isTouched = !1;
            else if (c.assignedToSwiper) a.isTouched = !1;
            else if (c.assignedToSwiper = !0, a.isMoved = !0, b.preventLinks && (a.allowLinks = !1), b.onSlideClick && (a.allowSlideClick = !1), b.autoplay && a.stopAutoplay(), !u || 1 == c.touches.length) {
                a.callPlugins("onTouchMoveStart");
                c.preventDefault ? c.preventDefault() : c.returnValue = !1;
                a.touches.current =
                    k ? d : e;
                a.positions.current = (a.touches.current - a.touches.start) * b.touchRatio + a.positions.start;
                if (0 < a.positions.current && b.onResistanceBefore) b.onResistanceBefore(a, a.positions.current);
                if (a.positions.current < -h() && b.onResistanceAfter) b.onResistanceAfter(a, Math.abs(a.positions.current + h()));
                b.resistance && "100%" != b.resistance && (0 < a.positions.current && (c = 1 - a.positions.current / l / 2, a.positions.current = 0.5 > c ? l / 2 : a.positions.current * c), a.positions.current < -h() && (d = (a.touches.current - a.touches.start) * b.touchRatio +
                    (h() + a.positions.start), c = (l + d) / l, d = a.positions.current - d * (1 - c) / 2, e = -h() - l / 2, a.positions.current = d < e || 0 >= c ? e : d));
                b.resistance && "100%" == b.resistance && (0 < a.positions.current && (!b.freeMode || b.freeModeFluid) && (a.positions.current = 0), a.positions.current < -h() && (!b.freeMode || b.freeModeFluid) && (a.positions.current = -h()));
                if (b.followFinger) {
                    b.moveStartThreshold ? Math.abs(a.touches.current - a.touches.start) > b.moveStartThreshold || M ? (M = !0, k ? a.setWrapperTranslate(a.positions.current, 0, 0) : a.setWrapperTranslate(0,
                        a.positions.current, 0)) : a.positions.current = a.positions.start : k ? a.setWrapperTranslate(a.positions.current, 0, 0) : a.setWrapperTranslate(0, a.positions.current, 0);
                    (b.freeMode || b.watchActiveIndex) && a.updateActiveSlide(a.positions.current);
                    b.grabCursor && (a.container.style.cursor = "move", a.container.style.cursor = "grabbing", a.container.style.cursor = "-moz-grabbin", a.container.style.cursor = "-webkit-grabbing");
                    D || (D = a.touches.current);
                    H || (H = (new Date).getTime());
                    a.velocity = (a.touches.current - D) / ((new Date).getTime() -
                        H) / 2;
                    2 > Math.abs(a.touches.current - D) && (a.velocity = 0);
                    D = a.touches.current;
                    H = (new Date).getTime();
                    a.callPlugins("onTouchMoveEnd");
                    if (b.onTouchMove) b.onTouchMove(a);
                    return !1
                }
            }
        }
    }

    function B(c) {
        x && a.swipeReset();
        if (!b.onlyExternal && a.isTouched) {
            a.isTouched = !1;
            b.grabCursor && (a.container.style.cursor = "move", a.container.style.cursor = "grab", a.container.style.cursor = "-moz-grab", a.container.style.cursor = "-webkit-grab");
            a.positions.current || 0 === a.positions.current || (a.positions.current = a.positions.start);
            b.followFinger &&
                (k ? a.setWrapperTranslate(a.positions.current, 0, 0) : a.setWrapperTranslate(0, a.positions.current, 0));
            a.times.end = (new Date).getTime();
            a.touches.diff = a.touches.current - a.touches.start;
            a.touches.abs = Math.abs(a.touches.diff);
            a.positions.diff = a.positions.current - a.positions.start;
            a.positions.abs = Math.abs(a.positions.diff);
            var d = a.positions.diff,
                e = a.positions.abs;
            c = a.times.end - a.times.start;
            5 > e && (300 > c && !1 == a.allowLinks) && (b.freeMode || 0 == e || a.swipeReset(), b.preventLinks && (a.allowLinks = !0), b.onSlideClick &&
                (a.allowSlideClick = !0));
            setTimeout(function() {
                b.preventLinks && (a.allowLinks = !0);
                b.onSlideClick && (a.allowSlideClick = !0)
            }, 100);
            if (a.isMoved) {
                a.isMoved = !1;
                var f = h();
                if (0 < a.positions.current) a.swipeReset();
                else if (a.positions.current < -f) a.swipeReset();
                else if (b.freeMode) {
                    if (b.freeModeFluid) {
                        var e = 1E3 * b.momentumRatio,
                            d = a.positions.current + a.velocity * e,
                            g = !1,
                            F, m = 20 * Math.abs(a.velocity) * b.momentumBounceRatio;
                        d < -f && (b.momentumBounce && a.support.transitions ? (d + f < -m && (d = -f - m), F = -f, G = g = !0) : d = -f);
                        0 < d && (b.momentumBounce &&
                            a.support.transitions ? (d > m && (d = m), F = 0, G = g = !0) : d = 0);
                        0 != a.velocity && (e = Math.abs((d - a.positions.current) / a.velocity));
                        k ? a.setWrapperTranslate(d, 0, 0) : a.setWrapperTranslate(0, d, 0);
                        a.setWrapperTransition(e);
                        b.momentumBounce && g && a.wrapperTransitionEnd(function() {
                            if (G) {
                                if (b.onMomentumBounce) b.onMomentumBounce(a);
                                k ? a.setWrapperTranslate(F, 0, 0) : a.setWrapperTranslate(0, F, 0);
                                a.setWrapperTransition(300)
                            }
                        });
                        a.updateActiveSlide(d)
                    }(!b.freeModeFluid || 300 <= c) && a.updateActiveSlide(a.positions.current)
                } else {
                    E = 0 > d ? "toNext" :
                        "toPrev";
                    "toNext" == E && 300 >= c && (30 > e || !b.shortSwipes ? a.swipeReset() : a.swipeNext(!0));
                    "toPrev" == E && 300 >= c && (30 > e || !b.shortSwipes ? a.swipeReset() : a.swipePrev(!0));
                    f = 0;
                    if ("auto" == b.slidesPerView) {
                        for (var d = Math.abs(k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y")), q = g = 0; q < a.slides.length; q++)
                            if (m = k ? a.slides[q].getWidth(!0) : a.slides[q].getHeight(!0), g += m, g > d) {
                                f = m;
                                break
                            } f > l && (f = l)
                    } else f = p * b.slidesPerView;
                    "toNext" == E && 300 < c && (e >= 0.5 * f ? a.swipeNext(!0) : a.swipeReset());
                    "toPrev" == E && 300 < c && (e >= 0.5 * f ?
                        a.swipePrev(!0) : a.swipeReset())
                }
                if (b.onTouchEnd) b.onTouchEnd(a);
                a.callPlugins("onTouchEnd")
            } else {
                a.isMoved = !1;
                if (b.onTouchEnd) b.onTouchEnd(a);
                a.callPlugins("onTouchEnd");
                a.swipeReset()
            }
        }
    }

    function I(c, d, e) {
        function f() {
            g += m;
            if (p = "toNext" == l ? g > c : g < c) k ? a.setWrapperTranslate(Math.round(g), 0) : a.setWrapperTranslate(0, Math.round(g)), a._DOMAnimating = !0, window.setTimeout(function() {
                f()
            }, 1E3 / 60);
            else {
                if (b.onSlideChangeEnd) b.onSlideChangeEnd(a);
                k ? a.setWrapperTranslate(c, 0) : a.setWrapperTranslate(0, c);
                a._DOMAnimating = !1
            }
        }
        if (a.support.transitions || !b.DOMAnimation) {
            k ? a.setWrapperTranslate(c, 0, 0) : a.setWrapperTranslate(0, c, 0);
            var h = "to" == d && 0 <= e.speed ? e.speed : b.speed;
            a.setWrapperTransition(h)
        } else {
            var g = k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y"),
                h = "to" == d && 0 <= e.speed ? e.speed : b.speed,
                m = Math.ceil((c - g) / h * (1E3 / 60)),
                l = g > c ? "toNext" : "toPrev",
                p = "toNext" == l ? g > c : g < c;
            if (a._DOMAnimating) return;
            f()
        }
        a.updateActiveSlide(c);
        if (b.onSlideNext && "next" == d) b.onSlideNext(a, c);
        if (b.onSlidePrev && "prev" == d) b.onSlidePrev(a, c);
        if (b.onSlideReset && "reset" == d) b.onSlideReset(a, c);
        ("next" == d || "prev" == d || "to" == d && !0 == e.runCallbacks) && W()
    }

    function W() {
        a.callPlugins("onSlideChangeStart");
        if (b.onSlideChangeStart)
            if (b.queueStartCallbacks && a.support.transitions) {
                if (a._queueStartCallbacks) return;
                a._queueStartCallbacks = !0;
                b.onSlideChangeStart(a);
                a.wrapperTransitionEnd(function() {
                    a._queueStartCallbacks = !1
                })
            } else b.onSlideChangeStart(a);
        b.onSlideChangeEnd && (a.support.transitions ? b.queueEndCallbacks ? a._queueEndCallbacks || (a._queueEndCallbacks = !0, a.wrapperTransitionEnd(b.onSlideChangeEnd)) : a.wrapperTransitionEnd(b.onSlideChangeEnd) : b.DOMAnimation || setTimeout(function() {
            b.onSlideChangeEnd(a)
        }, 10))
    }

    function U() {
        for (var b = a.paginationButtons, d = 0; d < b.length; d++) a.h.removeEventListener(b[d], "click", V, !1)
    }

    function V(b) {
        var d;
        b = b.target || b.srcElement;
        for (var e = a.paginationButtons, f = 0; f < e.length; f++) b === e[f] && (d = f);
        a.swipeTo(d)
    }
    if (document.body.__defineGetter__ && HTMLElement) {
        var s = HTMLElement.prototype;
        s.__defineGetter__ && s.__defineGetter__("outerHTML",
            function() {
                return (new XMLSerializer).serializeToString(this)
            })
    }
    window.getComputedStyle || (window.getComputedStyle = function(a, b) {
        this.el = a;
        this.getPropertyValue = function(b) {
            var d = /(\-([a-z]){1})/g;
            "float" === b && (b = "styleFloat");
            d.test(b) && (b = b.replace(d, function(a, b, c) {
                return c.toUpperCase()
            }));
            return a.currentStyle[b] ? a.currentStyle[b] : null
        };
        return this
    });
    Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
        for (var e = b || 0, f = this.length; e < f; e++)
            if (this[e] === a) return e;
        return -1
    });
    if ((document.querySelectorAll ||
            window.jQuery) && "undefined" !== typeof f && (f.nodeType || 0 !== g(f).length)) {
        var a = this;
        a.touches = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            diff: 0,
            abs: 0
        };
        a.positions = {
            start: 0,
            abs: 0,
            diff: 0,
            current: 0
        };
        a.times = {
            start: 0,
            end: 0
        };
        a.id = (new Date).getTime();
        a.container = f.nodeType ? f : g(f)[0];
        a.isTouched = !1;
        a.isMoved = !1;
        a.activeIndex = 0;
        a.activeLoaderIndex = 0;
        a.activeLoopIndex = 0;
        a.previousIndex = null;
        a.velocity = 0;
        a.snapGrid = [];
        a.slidesGrid = [];
        a.imagesToLoad = [];
        a.imagesLoaded = 0;
        a.wrapperLeft = 0;
        a.wrapperRight =
            0;
        a.wrapperTop = 0;
        a.wrapperBottom = 0;
        var J, p, y, E, x, l, s = {
            mode: "horizontal",
            touchRatio: 1,
            speed: 300,
            freeMode: !1,
            freeModeFluid: !1,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            slidesPerView: 1,
            slidesPerGroup: 1,
            simulateTouch: !0,
            followFinger: !0,
            shortSwipes: !0,
            moveStartThreshold: !1,
            autoplay: !1,
            onlyExternal: !1,
            createPagination: !0,
            pagination: !1,
            paginationElement: "span",
            paginationClickable: !1,
            paginationAsRange: !0,
            resistance: !0,
            scrollContainer: !1,
            preventLinks: !0,
            noSwiping: !1,
            noSwipingClass: "swiper-no-swiping",
            initialSlide: 0,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelDebounce: 600,
            useCSS3Transforms: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            calculateHeight: !1,
            updateOnImagesReady: !0,
            releaseFormElements: !0,
            watchActiveIndex: !1,
            visibilityFullFit: !1,
            offsetPxBefore: 0,
            offsetPxAfter: 0,
            offsetSlidesBefore: 0,
            offsetSlidesAfter: 0,
            centeredSlides: !1,
            queueStartCallbacks: !1,
            queueEndCallbacks: !1,
            autoResize: !0,
            resizeReInit: !1,
            DOMAnimation: !0,
            loader: {
                slides: [],
                slidesHTMLType: "inner",
                surroundGroups: 1,
                logic: "reload",
                loadAllSlides: !1
            },
            slideElement: "div",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            wrapperClass: "swiper-wrapper",
            paginationElementClass: "swiper-pagination-switch",
            paginationActiveClass: "swiper-active-switch",
            paginationVisibleClass: "swiper-visible-switch"
        };
        b = b || {};
        for (var q in s)
            if (q in b && "object" === typeof b[q])
                for (var C in s[q]) C in b[q] || (b[q][C] = s[q][C]);
            else q in b || (b[q] = s[q]);
        a.params = b;
        b.scrollContainer && (b.freeMode = !0, b.freeModeFluid = !0);
        b.loop && (b.resistance =
            "100%");
        var k = "horizontal" === b.mode;
        a.touchEvents = {
            touchStart: a.support.touch || !b.simulateTouch ? "touchstart" : a.browser.ie10 ? "MSPointerDown" : "mousedown",
            touchMove: a.support.touch || !b.simulateTouch ? "touchmove" : a.browser.ie10 ? "MSPointerMove" : "mousemove",
            touchEnd: a.support.touch || !b.simulateTouch ? "touchend" : a.browser.ie10 ? "MSPointerUp" : "mouseup"
        };
        for (q = a.container.childNodes.length - 1; 0 <= q; q--)
            if (a.container.childNodes[q].className)
                for (C = a.container.childNodes[q].className.split(" "), s = 0; s < C.length; s++) C[s] ===
                    b.wrapperClass && (J = a.container.childNodes[q]);
        a.wrapper = J;
        a._extendSwiperSlide = function(c) {
            c.append = function() {
                b.loop ? (c.insertAfter(a.slides.length - a.loopedSlides), a.removeLoopedSlides(), a.calcSlides(), a.createLoop()) : a.wrapper.appendChild(c);
                a.reInit();
                return c
            };
            c.prepend = function() {
                b.loop ? (a.wrapper.insertBefore(c, a.slides[a.loopedSlides]), a.removeLoopedSlides(), a.calcSlides(), a.createLoop()) : a.wrapper.insertBefore(c, a.wrapper.firstChild);
                a.reInit();
                return c
            };
            c.insertAfter = function(d) {
                if ("undefined" ===
                    typeof d) return !1;
                b.loop ? (d = a.slides[d + 1 + a.loopedSlides], a.wrapper.insertBefore(c, d), a.removeLoopedSlides(), a.calcSlides(), a.createLoop()) : (d = a.slides[d + 1], a.wrapper.insertBefore(c, d));
                a.reInit();
                return c
            };
            c.clone = function() {
                return a._extendSwiperSlide(c.cloneNode(!0))
            };
            c.remove = function() {
                a.wrapper.removeChild(c);
                a.reInit()
            };
            c.html = function(a) {
                if ("undefined" === typeof a) return c.innerHTML;
                c.innerHTML = a;
                return c
            };
            c.index = function() {
                for (var b, e = a.slides.length - 1; 0 <= e; e--) c === a.slides[e] && (b = e);
                return b
            };
            c.isActive = function() {
                return c.index() === a.activeIndex ? !0 : !1
            };
            c.swiperSlideDataStorage || (c.swiperSlideDataStorage = {});
            c.getData = function(a) {
                return c.swiperSlideDataStorage[a]
            };
            c.setData = function(a, b) {
                c.swiperSlideDataStorage[a] = b;
                return c
            };
            c.data = function(a, b) {
                return b ? (c.setAttribute("data-" + a, b), c) : c.getAttribute("data-" + a)
            };
            c.getWidth = function(b) {
                return a.h.getWidth(c, b)
            };
            c.getHeight = function(b) {
                return a.h.getHeight(c, b)
            };
            c.getOffset = function() {
                return a.h.getOffset(c)
            };
            return c
        };
        a.calcSlides = function(c) {
            var d =
                a.slides ? a.slides.length : !1;
            a.slides = [];
            a.displaySlides = [];
            for (var e = 0; e < a.wrapper.childNodes.length; e++)
                if (a.wrapper.childNodes[e].className)
                    for (var f = a.wrapper.childNodes[e].className.split(" "), g = 0; g < f.length; g++) f[g] === b.slideClass && a.slides.push(a.wrapper.childNodes[e]);
            for (e = a.slides.length - 1; 0 <= e; e--) a._extendSwiperSlide(a.slides[e]);
            d && (d !== a.slides.length || c) && (v(), t(), a.updateActiveSlide(), b.createPagination && a.params.pagination && a.createPagination(), a.callPlugins("numberOfSlidesChanged"))
        };
        a.createSlide = function(c, d, e) {
            d = d || a.params.slideClass;
            e = e || b.slideElement;
            e = document.createElement(e);
            e.innerHTML = c || "";
            e.className = d;
            return a._extendSwiperSlide(e)
        };
        a.appendSlide = function(b, d, e) {
            if (b) return b.nodeType ? a._extendSwiperSlide(b).append() : a.createSlide(b, d, e).append()
        };
        a.prependSlide = function(b, d, e) {
            if (b) return b.nodeType ? a._extendSwiperSlide(b).prepend() : a.createSlide(b, d, e).prepend()
        };
        a.insertSlideAfter = function(b, d, e, f) {
            return "undefined" === typeof b ? !1 : d.nodeType ? a._extendSwiperSlide(d).insertAfter(b) :
                a.createSlide(d, e, f).insertAfter(b)
        };
        a.removeSlide = function(c) {
            if (a.slides[c]) {
                if (b.loop) {
                    if (!a.slides[c + a.loopedSlides]) return !1;
                    a.slides[c + a.loopedSlides].remove();
                    a.removeLoopedSlides();
                    a.calcSlides();
                    a.createLoop()
                } else a.slides[c].remove();
                return !0
            }
            return !1
        };
        a.removeLastSlide = function() {
            return 0 < a.slides.length ? (b.loop ? (a.slides[a.slides.length - 1 - a.loopedSlides].remove(), a.removeLoopedSlides(), a.calcSlides(), a.createLoop()) : a.slides[a.slides.length - 1].remove(), !0) : !1
        };
        a.removeAllSlides = function() {
            for (var b =
                    a.slides.length - 1; 0 <= b; b--) a.slides[b].remove()
        };
        a.getSlide = function(b) {
            return a.slides[b]
        };
        a.getLastSlide = function() {
            return a.slides[a.slides.length - 1]
        };
        a.getFirstSlide = function() {
            return a.slides[0]
        };
        a.activeSlide = function() {
            return a.slides[a.activeIndex]
        };
        var K = [],
            L;
        for (L in a.plugins) b[L] && (q = a.plugins[L](a, b[L])) && K.push(q);
        a.callPlugins = function(a, b) {
            b || (b = {});
            for (var e = 0; e < K.length; e++)
                if (a in K[e]) K[e][a](b)
        };
        a.browser.ie10 && !b.onlyExternal && (k ? a.wrapper.classList.add("swiper-wp8-horizontal") :
            a.wrapper.classList.add("swiper-wp8-vertical"));
        b.freeMode && (a.container.className += " swiper-free-mode");
        a.initialized = !1;
        a.init = function(c, d) {
            var e = a.h.getWidth(a.container),
                f = a.h.getHeight(a.container);
            if (e !== a.width || f !== a.height || c) {
                a.width = e;
                a.height = f;
                l = k ? e : f;
                e = a.wrapper;
                c && a.calcSlides(d);
                if ("auto" === b.slidesPerView) {
                    var g = 0,
                        h = 0;
                    0 < b.slidesOffset && (e.style.paddingLeft = "", e.style.paddingRight = "", e.style.paddingTop = "", e.style.paddingBottom = "");
                    e.style.width = "";
                    e.style.height = "";
                    0 < b.offsetPxBefore &&
                        (k ? a.wrapperLeft = b.offsetPxBefore : a.wrapperTop = b.offsetPxBefore);
                    0 < b.offsetPxAfter && (k ? a.wrapperRight = b.offsetPxAfter : a.wrapperBottom = b.offsetPxAfter);
                    b.centeredSlides && (k ? (a.wrapperLeft = (l - this.slides[0].getWidth(!0)) / 2, a.wrapperRight = (l - a.slides[a.slides.length - 1].getWidth(!0)) / 2) : (a.wrapperTop = (l - a.slides[0].getHeight(!0)) / 2, a.wrapperBottom = (l - a.slides[a.slides.length - 1].getHeight(!0)) / 2));
                    k ? (0 <= a.wrapperLeft && (e.style.paddingLeft = a.wrapperLeft + "px"), 0 <= a.wrapperRight && (e.style.paddingRight = a.wrapperRight +
                        "px")) : (0 <= a.wrapperTop && (e.style.paddingTop = a.wrapperTop + "px"), 0 <= a.wrapperBottom && (e.style.paddingBottom = a.wrapperBottom + "px"));
                    var m = 0,
                        q = 0;
                    a.snapGrid = [];
                    a.slidesGrid = [];
                    for (var n = 0, r = 0; r < a.slides.length; r++) {
                        var f = a.slides[r].getWidth(!0),
                            s = a.slides[r].getHeight(!0);
                        b.calculateHeight && (n = Math.max(n, s));
                        var t = k ? f : s;
                        if (b.centeredSlides) {
                            var u = r === a.slides.length - 1 ? 0 : a.slides[r + 1].getWidth(!0),
                                w = r === a.slides.length - 1 ? 0 : a.slides[r + 1].getHeight(!0),
                                u = k ? u : w;
                            if (t > l) {
                                for (w = 0; w <= Math.floor(t / (l + a.wrapperLeft)); w++) 0 ===
                                    w ? a.snapGrid.push(m + a.wrapperLeft) : a.snapGrid.push(m + a.wrapperLeft + l * w);
                                a.slidesGrid.push(m + a.wrapperLeft)
                            } else a.snapGrid.push(q), a.slidesGrid.push(q);
                            q += t / 2 + u / 2
                        } else {
                            if (t > l)
                                for (w = 0; w <= Math.floor(t / l); w++) a.snapGrid.push(m + l * w);
                            else a.snapGrid.push(m);
                            a.slidesGrid.push(m)
                        }
                        m += t;
                        g += f;
                        h += s
                    }
                    b.calculateHeight && (a.height = n);
                    k ? (y = g + a.wrapperRight + a.wrapperLeft, e.style.width = g + "px", e.style.height = a.height + "px") : (y = h + a.wrapperTop + a.wrapperBottom, e.style.width = a.width + "px", e.style.height = h + "px")
                } else if (b.scrollContainer) e.style.width =
                    "", e.style.height = "", n = a.slides[0].getWidth(!0), g = a.slides[0].getHeight(!0), y = k ? n : g, e.style.width = n + "px", e.style.height = g + "px", p = k ? n : g;
                else {
                    if (b.calculateHeight) {
                        g = n = 0;
                        k || (a.container.style.height = "");
                        e.style.height = "";
                        for (r = 0; r < a.slides.length; r++) a.slides[r].style.height = "", n = Math.max(a.slides[r].getHeight(!0), n), k || (g += a.slides[r].getHeight(!0));
                        s = n;
                        a.height = s;
                        k ? g = s : (l = s, a.container.style.height = l + "px")
                    } else s = k ? a.height : a.height / b.slidesPerView, g = k ? a.height : a.slides.length * s;
                    f = k ? a.width / b.slidesPerView :
                        a.width;
                    n = k ? a.slides.length * f : a.width;
                    p = k ? f : s;
                    0 < b.offsetSlidesBefore && (k ? a.wrapperLeft = p * b.offsetSlidesBefore : a.wrapperTop = p * b.offsetSlidesBefore);
                    0 < b.offsetSlidesAfter && (k ? a.wrapperRight = p * b.offsetSlidesAfter : a.wrapperBottom = p * b.offsetSlidesAfter);
                    0 < b.offsetPxBefore && (k ? a.wrapperLeft = b.offsetPxBefore : a.wrapperTop = b.offsetPxBefore);
                    0 < b.offsetPxAfter && (k ? a.wrapperRight = b.offsetPxAfter : a.wrapperBottom = b.offsetPxAfter);
                    b.centeredSlides && (k ? (a.wrapperLeft = (l - p) / 2, a.wrapperRight = (l - p) / 2) : (a.wrapperTop =
                        (l - p) / 2, a.wrapperBottom = (l - p) / 2));
                    k ? (0 < a.wrapperLeft && (e.style.paddingLeft = a.wrapperLeft + "px"), 0 < a.wrapperRight && (e.style.paddingRight = a.wrapperRight + "px")) : (0 < a.wrapperTop && (e.style.paddingTop = a.wrapperTop + "px"), 0 < a.wrapperBottom && (e.style.paddingBottom = a.wrapperBottom + "px"));
                    y = k ? n + a.wrapperRight + a.wrapperLeft : g + a.wrapperTop + a.wrapperBottom;
                    e.style.width = n + "px";
                    e.style.height = g + "px";
                    m = 0;
                    a.snapGrid = [];
                    a.slidesGrid = [];
                    for (r = 0; r < a.slides.length; r++) a.snapGrid.push(m), a.slidesGrid.push(m), m += p, a.slides[r].style.width =
                        f + "px", a.slides[r].style.height = s + "px"
                }
                if (a.initialized) {
                    if (a.callPlugins("onInit"), b.onFirstInit) b.onInit(a)
                } else if (a.callPlugins("onFirstInit"), b.onFirstInit) b.onFirstInit(a);
                a.initialized = !0
            }
        };
        a.reInit = function(b) {
            a.init(!0, b)
        };
        a.resizeFix = function(c) {
            a.callPlugins("beforeResizeFix");
            a.init(b.resizeReInit || c);
            if (!b.freeMode) b.loop ? a.swipeTo(a.activeLoopIndex, 0, !1) : a.swipeTo(a.activeIndex, 0, !1);
            else if ((k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y")) < -h()) {
                c = k ? -h() : 0;
                var d = k ? 0 : -h();
                a.setWrapperTransition(0);
                a.setWrapperTranslate(c, d, 0)
            }
            a.callPlugins("afterResizeFix")
        };
        a.destroy = function(c) {
            a.browser.ie10 ? (a.h.removeEventListener(a.wrapper, a.touchEvents.touchStart, z, !1), a.h.removeEventListener(document, a.touchEvents.touchMove, A, !1), a.h.removeEventListener(document, a.touchEvents.touchEnd, B, !1)) : (a.support.touch && (a.h.removeEventListener(a.wrapper, "touchstart", z, !1), a.h.removeEventListener(a.wrapper, "touchmove", A, !1), a.h.removeEventListener(a.wrapper, "touchend", B, !1)), b.simulateTouch && (a.h.removeEventListener(a.wrapper,
                "mousedown", z, !1), a.h.removeEventListener(document, "mousemove", A, !1), a.h.removeEventListener(document, "mouseup", B, !1)));
            b.autoResize && a.h.removeEventListener(window, "resize", a.resizeFix, !1);
            v();
            b.paginationClickable && U();
            b.mousewheelControl && a._wheelEvent && a.h.removeEventListener(a.container, a._wheelEvent, N, !1);
            b.keyboardControl && a.h.removeEventListener(document, "keydown", O, !1);
            b.autoplay && a.stopAutoplay();
            a.callPlugins("onDestroy");
            a = null
        };
        b.grabCursor && (a.container.style.cursor = "move", a.container.style.cursor =
            "grab", a.container.style.cursor = "-moz-grab", a.container.style.cursor = "-webkit-grab");
        a.allowSlideClick = !0;
        a.allowLinks = !0;
        var u = !1,
            M, G = !0,
            D, H;
        a.swipeNext = function(c) {
            !c && b.loop && a.fixLoop();
            a.callPlugins("onSwipeNext");
            var d = c = k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y");
            if ("auto" == b.slidesPerView)
                for (var e = 0; e < a.snapGrid.length; e++) {
                    if (-c >= a.snapGrid[e] && -c < a.snapGrid[e + 1]) {
                        d = -a.snapGrid[e + 1];
                        break
                    }
                } else d = p * b.slidesPerGroup, d = -(Math.floor(Math.abs(c) / Math.floor(d)) * d + d);
            d < -h() && (d = -h());
            if (d == c) return !1;
            I(d, "next");
            return !0
        };
        a.swipePrev = function(c) {
            !c && b.loop && a.fixLoop();
            !c && b.autoplay && a.stopAutoplay();
            a.callPlugins("onSwipePrev");
            c = Math.ceil(k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y"));
            var d;
            if ("auto" == b.slidesPerView) {
                d = 0;
                for (var e = 1; e < a.snapGrid.length; e++) {
                    if (-c == a.snapGrid[e]) {
                        d = -a.snapGrid[e - 1];
                        break
                    }
                    if (-c > a.snapGrid[e] && -c < a.snapGrid[e + 1]) {
                        d = -a.snapGrid[e];
                        break
                    }
                }
            } else d = p * b.slidesPerGroup, d *= -(Math.ceil(-c / d) - 1);
            0 < d && (d = 0);
            if (d == c) return !1;
            I(d, "prev");
            return !0
        };
        a.swipeReset = function() {
            a.callPlugins("onSwipeReset");
            var c = k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y"),
                d = p * b.slidesPerGroup;
            h();
            if ("auto" == b.slidesPerView) {
                for (var e = d = 0; e < a.snapGrid.length; e++) {
                    if (-c === a.snapGrid[e]) return;
                    if (-c >= a.snapGrid[e] && -c < a.snapGrid[e + 1]) {
                        d = 0 < a.positions.diff ? -a.snapGrid[e + 1] : -a.snapGrid[e];
                        break
                    }
                } - c >= a.snapGrid[a.snapGrid.length - 1] && (d = -a.snapGrid[a.snapGrid.length - 1]);
                c <= -h() && (d = -h())
            } else d = 0 > c ? Math.round(c / d) * d : 0;
            b.scrollContainer && (d = 0 > c ? c : 0);
            d < -h() &&
                (d = -h());
            b.scrollContainer && l > p && (d = 0);
            if (d == c) return !1;
            I(d, "reset");
            return !0
        };
        a.swipeTo = function(c, d, e) {
            c = parseInt(c, 10);
            a.callPlugins("onSwipeTo", {
                index: c,
                speed: d
            });
            b.loop && (c += a.loopedSlides);
            var f = k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y");
            if (!(c > a.slides.length - 1 || 0 > c)) {
                var g;
                g = "auto" == b.slidesPerView ? -a.slidesGrid[c] : -c * p;
                g < -h() && (g = -h());
                if (g == f) return !1;
                I(g, "to", {
                    index: c,
                    speed: d,
                    runCallbacks: !1 === e ? !1 : !0
                });
                return !0
            }
        };
        a._queueStartCallbacks = !1;
        a._queueEndCallbacks = !1;
        a.updateActiveSlide =
            function(c) {
                if (a.initialized && 0 != a.slides.length) {
                    a.previousIndex = a.activeIndex;
                    0 < c && (c = 0);
                    "undefined" == typeof c && (c = k ? a.getWrapperTranslate("x") : a.getWrapperTranslate("y"));
                    if ("auto" == b.slidesPerView) {
                        if (a.activeIndex = a.slidesGrid.indexOf(-c), 0 > a.activeIndex) {
                            for (var d = 0; d < a.slidesGrid.length - 1 && !(-c > a.slidesGrid[d] && -c < a.slidesGrid[d + 1]); d++);
                            var e = Math.abs(a.slidesGrid[d] + c),
                                f = Math.abs(a.slidesGrid[d + 1] + c);
                            a.activeIndex = e <= f ? d : d + 1
                        }
                    } else a.activeIndex = b.visibilityFullFit ? Math.ceil(-c / p) : Math.round(-c /
                        p);
                    a.activeIndex == a.slides.length && (a.activeIndex = a.slides.length - 1);
                    0 > a.activeIndex && (a.activeIndex = 0);
                    if (a.slides[a.activeIndex]) {
                        a.calcVisibleSlides(c);
                        e = RegExp("\\s*" + b.slideActiveClass);
                        f = RegExp("\\s*" + b.slideVisibleClass);
                        for (d = 0; d < a.slides.length; d++) a.slides[d].className = a.slides[d].className.replace(e, "").replace(f, ""), 0 <= a.visibleSlides.indexOf(a.slides[d]) && (a.slides[d].className += " " + b.slideVisibleClass);
                        a.slides[a.activeIndex].className += " " + b.slideActiveClass;
                        b.loop ? (d = a.loopedSlides,
                            a.activeLoopIndex = a.activeIndex - d, a.activeLoopIndex >= a.slides.length - 2 * d && (a.activeLoopIndex = a.slides.length - 2 * d - a.activeLoopIndex), 0 > a.activeLoopIndex && (a.activeLoopIndex = a.slides.length - 2 * d + a.activeLoopIndex)) : a.activeLoopIndex = a.activeIndex;
                        b.pagination && a.updatePagination(c)
                    }
                }
            };
        a.createPagination = function(c) {
            b.paginationClickable && a.paginationButtons && U();
            var d = "",
                e = a.slides.length;
            b.loop && (e -= 2 * a.loopedSlides);
            for (var f = 0; f < e; f++) d += "<" + b.paginationElement + ' class="' + b.paginationElementClass +
                '"></' + b.paginationElement + ">";
            a.paginationContainer = b.pagination.nodeType ? b.pagination : g(b.pagination)[0];
            a.paginationContainer.innerHTML = d;
            a.paginationButtons = [];
            document.querySelectorAll ? a.paginationButtons = a.paginationContainer.querySelectorAll("." + b.paginationElementClass) : window.jQuery && (a.paginationButtons = g(a.paginationContainer).find("." + b.paginationElementClass));
            c || a.updatePagination();
            a.callPlugins("onCreatePagination");
            if (b.paginationClickable)
                for (c = a.paginationButtons, d = 0; d < c.length; d++) a.h.addEventListener(c[d],
                    "click", V, !1)
        };
        a.updatePagination = function(c) {
            if (b.pagination && !(1 > a.slides.length)) {
                if (document.querySelectorAll) var d = a.paginationContainer.querySelectorAll("." + b.paginationActiveClass);
                else window.jQuery && (d = g(a.paginationContainer).find("." + b.paginationActiveClass));
                if (d && (d = a.paginationButtons, 0 != d.length)) {
                    for (var e = 0; e < d.length; e++) d[e].className = b.paginationElementClass;
                    var f = b.loop ? a.loopedSlides : 0;
                    if (b.paginationAsRange) {
                        a.visibleSlides || a.calcVisibleSlides(c);
                        c = [];
                        for (e = 0; e < a.visibleSlides.length; e++) {
                            var h =
                                a.slides.indexOf(a.visibleSlides[e]) - f;
                            b.loop && 0 > h && (h = a.slides.length - 2 * a.loopedSlides + h);
                            b.loop && h >= a.slides.length - 2 * a.loopedSlides && (h = a.slides.length - 2 * a.loopedSlides - h, h = Math.abs(h));
                            c.push(h)
                        }
                        for (e = 0; e < c.length; e++) d[c[e]] && (d[c[e]].className += " " + b.paginationVisibleClass);
                        b.loop ? d[a.activeLoopIndex].className += " " + b.paginationActiveClass : d[a.activeIndex].className += " " + b.paginationActiveClass
                    } else b.loop ? d[a.activeLoopIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass :
                        d[a.activeIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass
                }
            }
        };
        a.calcVisibleSlides = function(c) {
            var d = [],
                e = 0,
                f = 0,
                g = 0;
            k && 0 < a.wrapperLeft && (c += a.wrapperLeft);
            !k && 0 < a.wrapperTop && (c += a.wrapperTop);
            for (var h = 0; h < a.slides.length; h++) {
                var e = e + f,
                    f = "auto" == b.slidesPerView ? k ? a.h.getWidth(a.slides[h], !0) : a.h.getHeight(a.slides[h], !0) : p,
                    g = e + f,
                    m = !1;
                b.visibilityFullFit ? (e >= -c && g <= -c + l && (m = !0), e <= -c && g >= -c + l && (m = !0)) : (g > -c && g <= -c + l && (m = !0), e >= -c && e < -c + l && (m = !0), e < -c && g > -c + l && (m = !0));
                m &&
                    d.push(a.slides[h])
            }
            0 == d.length && (d = [a.slides[a.activeIndex]]);
            a.visibleSlides = d
        };
        a.autoPlayIntervalId = void 0;
        a.startAutoplay = function() {
            if ("undefined" !== typeof a.autoPlayIntervalId) return !1;
            b.autoplay && !b.loop && (a.autoPlayIntervalId = setInterval(function() {
                a.swipeNext(!0) || a.swipeTo(0)
            }, b.autoplay));
            b.autoplay && b.loop && (a.autoPlayIntervalId = setInterval(function() {
                a.swipeNext()
            }, b.autoplay));
            a.callPlugins("onAutoplayStart")
        };
        a.stopAutoplay = function() {
            a.autoPlayIntervalId && clearInterval(a.autoPlayIntervalId);
            a.autoPlayIntervalId = void 0;
            a.callPlugins("onAutoplayStop")
        };
        a.loopCreated = !1;
        a.removeLoopedSlides = function() {
            if (a.loopCreated)
                for (var b = 0; b < a.slides.length; b++) !0 === a.slides[b].getData("looped") && a.wrapper.removeChild(a.slides[b])
        };
        a.createLoop = function() {
            if (0 != a.slides.length) {
                a.loopedSlides = b.slidesPerView + b.loopAdditionalSlides;
                for (var c = "", d = "", e = 0; e < a.loopedSlides; e++) c += a.slides[e].outerHTML;
                for (e = a.slides.length - a.loopedSlides; e < a.slides.length; e++) d += a.slides[e].outerHTML;
                J.innerHTML = d + J.innerHTML +
                    c;
                a.loopCreated = !0;
                a.calcSlides();
                for (e = 0; e < a.slides.length; e++)(e < a.loopedSlides || e >= a.slides.length - a.loopedSlides) && a.slides[e].setData("looped", !0);
                a.callPlugins("onCreateLoop")
            }
        };
        a.fixLoop = function() {
            if (a.activeIndex < a.loopedSlides) {
                var c = a.slides.length - 3 * a.loopedSlides + a.activeIndex;
                a.swipeTo(c, 0, !1)
            } else a.activeIndex > a.slides.length - 2 * b.slidesPerView && (c = -a.slides.length + a.activeIndex + a.loopedSlides, a.swipeTo(c, 0, !1))
        };
        a.loadSlides = function() {
            var c = "";
            a.activeLoaderIndex = 0;
            for (var d = b.loader.slides,
                    e = b.loader.loadAllSlides ? d.length : b.slidesPerView * (1 + b.loader.surroundGroups), f = 0; f < e; f++) c = "outer" == b.loader.slidesHTMLType ? c + d[f] : c + ("<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + f + '">' + d[f] + "</" + b.slideElement + ">");
            a.wrapper.innerHTML = c;
            a.calcSlides(!0);
            b.loader.loadAllSlides || a.wrapperTransitionEnd(a.reloadSlides, !0)
        };
        a.reloadSlides = function() {
            var c = b.loader.slides,
                d = parseInt(a.activeSlide().data("swiperindex"), 10);
            if (!(0 > d || d > c.length - 1)) {
                a.activeLoaderIndex = d;
                var e = Math.max(0,
                        d - b.slidesPerView * b.loader.surroundGroups),
                    f = Math.min(d + b.slidesPerView * (1 + b.loader.surroundGroups) - 1, c.length - 1);
                0 < d && (d = -p * (d - e), k ? a.setWrapperTranslate(d, 0, 0) : a.setWrapperTranslate(0, d, 0), a.setWrapperTransition(0));
                if ("reload" === b.loader.logic) {
                    for (var g = a.wrapper.innerHTML = "", d = e; d <= f; d++) g += "outer" == b.loader.slidesHTMLType ? c[d] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + d + '">' + c[d] + "</" + b.slideElement + ">";
                    a.wrapper.innerHTML = g
                } else {
                    for (var g = 1E3, h = 0, d = 0; d < a.slides.length; d++) {
                        var l =
                            a.slides[d].data("swiperindex");
                        l < e || l > f ? a.wrapper.removeChild(a.slides[d]) : (g = Math.min(l, g), h = Math.max(l, h))
                    }
                    for (d = e; d <= f; d++) d < g && (e = document.createElement(b.slideElement), e.className = b.slideClass, e.setAttribute("data-swiperindex", d), e.innerHTML = c[d], a.wrapper.insertBefore(e, a.wrapper.firstChild)), d > h && (e = document.createElement(b.slideElement), e.className = b.slideClass, e.setAttribute("data-swiperindex", d), e.innerHTML = c[d], a.wrapper.appendChild(e))
                }
                a.reInit(!0)
            }
        };
        a.calcSlides();
        0 < b.loader.slides.length &&
            0 == a.slides.length && a.loadSlides();
        b.loop && a.createLoop();
        a.init();
        n();
        b.pagination && b.createPagination && a.createPagination(!0);
        b.loop || 0 < b.initialSlide ? a.swipeTo(b.initialSlide, 0, !1) : a.updateActiveSlide(0);
        b.autoplay && a.startAutoplay()
    }
};
Swiper.prototype = {
    plugins: {},
    wrapperTransitionEnd: function(f, b) {
        function g() {
            f(h);
            h.params.queueEndCallbacks && (h._queueEndCallbacks = !1);
            if (!b)
                for (var v = 0; v < t.length; v++) h.h.removeEventListener(n, t[v], g, !1)
        }
        var h = this,
            n = h.wrapper,
            t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
        if (f)
            for (var v = 0; v < t.length; v++) h.h.addEventListener(n, t[v], g, !1)
    },
    getWrapperTranslate: function(f) {
        var b = this.wrapper,
            g, h, n = window.WebKitCSSMatrix ? new WebKitCSSMatrix(window.getComputedStyle(b,
                null).webkitTransform) : window.getComputedStyle(b, null).MozTransform || window.getComputedStyle(b, null).OTransform || window.getComputedStyle(b, null).MsTransform || window.getComputedStyle(b, null).msTransform || window.getComputedStyle(b, null).transform || window.getComputedStyle(b, null).getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
        g = n.toString().split(",");
        this.params.useCSS3Transforms ? ("x" == f && (h = 16 == g.length ? parseFloat(g[12]) : window.WebKitCSSMatrix ? n.m41 : parseFloat(g[4])), "y" ==
            f && (h = 16 == g.length ? parseFloat(g[13]) : window.WebKitCSSMatrix ? n.m42 : parseFloat(g[5]))) : ("x" == f && (h = parseFloat(b.style.left, 10) || 0), "y" == f && (h = parseFloat(b.style.top, 10) || 0));
        return h || 0
    },
    setWrapperTranslate: function(f, b, g) {
        var h = this.wrapper.style;
        f = f || 0;
        b = b || 0;
        g = g || 0;
        this.params.useCSS3Transforms ? this.support.transforms3d ? h.webkitTransform = h.MsTransform = h.msTransform = h.MozTransform = h.OTransform = h.transform = "translate3d(" + f + "px, " + b + "px, " + g + "px)" : (h.webkitTransform = h.MsTransform = h.msTransform = h.MozTransform =
            h.OTransform = h.transform = "translate(" + f + "px, " + b + "px)", this.support.transforms || (h.left = f + "px", h.top = b + "px")) : (h.left = f + "px", h.top = b + "px");
        this.callPlugins("onSetWrapperTransform", {
            x: f,
            y: b,
            z: g
        })
    },
    setWrapperTransition: function(f) {
        var b = this.wrapper.style;
        b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = f / 1E3 + "s";
        this.callPlugins("onSetWrapperTransition", {
            duration: f
        })
    },
    h: {
        getWidth: function(f, b) {
            var g = window.getComputedStyle(f,
                    null).getPropertyValue("width"),
                h = parseFloat(g);
            if (isNaN(h) || 0 < g.indexOf("%")) h = f.offsetWidth - parseFloat(window.getComputedStyle(f, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(f, null).getPropertyValue("padding-right"));
            b && (h += parseFloat(window.getComputedStyle(f, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(f, null).getPropertyValue("padding-right")));
            return h
        },
        getHeight: function(f, b) {
            if (b) return f.offsetHeight;
            var g = window.getComputedStyle(f,
                    null).getPropertyValue("height"),
                h = parseFloat(g);
            if (isNaN(h) || 0 < g.indexOf("%")) h = f.offsetHeight - parseFloat(window.getComputedStyle(f, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(f, null).getPropertyValue("padding-bottom"));
            b && (h += parseFloat(window.getComputedStyle(f, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(f, null).getPropertyValue("padding-bottom")));
            return h
        },
        getOffset: function(f) {
            var b = f.getBoundingClientRect(),
                g = document.body,
                h = f.clientTop ||
                g.clientTop || 0,
                g = f.clientLeft || g.clientLeft || 0,
                n = window.pageYOffset || f.scrollTop;
            f = window.pageXOffset || f.scrollLeft;
            document.documentElement && !window.pageYOffset && (n = document.documentElement.scrollTop, f = document.documentElement.scrollLeft);
            return {
                top: b.top + n - h,
                left: b.left + f - g
            }
        },
        windowWidth: function() {
            if (window.innerWidth) return window.innerWidth;
            if (document.documentElement && document.documentElement.clientWidth) return document.documentElement.clientWidth
        },
        windowHeight: function() {
            if (window.innerHeight) return window.innerHeight;
            if (document.documentElement && document.documentElement.clientHeight) return document.documentElement.clientHeight
        },
        windowScroll: function() {
            if ("undefined" != typeof pageYOffset) return {
                left: window.pageXOffset,
                top: window.pageYOffset
            };
            if (document.documentElement) return {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            }
        },
        addEventListener: function(f, b, g, h) {
            f.addEventListener ? f.addEventListener(b, g, h) : f.attachEvent && f.attachEvent("on" + b, g)
        },
        removeEventListener: function(f, b, g, h) {
            f.removeEventListener ?
                f.removeEventListener(b, g, h) : f.detachEvent && f.detachEvent("on" + b, g)
        }
    },
    setTransform: function(f, b) {
        var g = f.style;
        g.webkitTransform = g.MsTransform = g.msTransform = g.MozTransform = g.OTransform = g.transform = b
    },
    setTranslate: function(f, b) {
        var g = f.style,
            h = b.x || 0,
            n = b.y || 0,
            t = b.z || 0;
        g.webkitTransform = g.MsTransform = g.msTransform = g.MozTransform = g.OTransform = g.transform = this.support.transforms3d ? "translate3d(" + h + "px," + n + "px," + t + "px)" : "translate(" + h + "px," + n + "px)";
        this.support.transforms || (g.left = h + "px", g.top = n + "px")
    },
    setTransition: function(f, b) {
        var g = f.style;
        g.webkitTransitionDuration = g.MsTransitionDuration = g.msTransitionDuration = g.MozTransitionDuration = g.OTransitionDuration = g.transitionDuration = b + "ms"
    },
    support: {
        touch: window.Modernizr && !0 === Modernizr.touch || function() {
            return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
        }(),
        transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function() {
            var f = document.createElement("div");
            return "webkitPerspective" in f.style || "MozPerspective" in
                f.style || "OPerspective" in f.style || "MsPerspective" in f.style || "perspective" in f.style
        }(),
        transforms: window.Modernizr && !0 === Modernizr.csstransforms || function() {
            var f = document.createElement("div").style;
            return "transform" in f || "WebkitTransform" in f || "MozTransform" in f || "msTransform" in f || "MsTransform" in f || "OTransform" in f
        }(),
        transitions: window.Modernizr && !0 === Modernizr.csstransitions || function() {
            var f = document.createElement("div").style;
            return "transition" in f || "WebkitTransition" in f || "MozTransition" in
                f || "msTransition" in f || "MsTransition" in f || "OTransition" in f
        }()
    },
    browser: {
        ie8: function() {
            var f = -1;
            "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (f = parseFloat(RegExp.$1));
            return -1 != f && 9 > f
        }(),
        ie10: window.navigator.msPointerEnabled
    }
};
(window.jQuery || window.Zepto) && function(f) {
    f.fn.swiper = function(b) {
        b = new Swiper(f(this)[0], b);
        f(this).data("swiper", b);
        return b
    }
}(window.jQuery || window.Zepto);
"undefined" !== typeof module && (module.exports = Swiper);
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
window.cancelRequestAnimFrame = (function() {
    return window.cancelAnimationFrame ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame ||
        window.msCancelRequestAnimationFrame ||
        clearTimeout
})();
var Intense = (function() {
    'use strict';
    var KEYCODE_ESC = 27;
    var mouse = {
        xCurr: 0,
        yCurr: 0,
        xDest: 0,
        yDest: 0
    };
    var horizontalOrientation = true;
    var looper;
    var lastPosition, currentPosition = 0;
    var sourceDimensions, target;
    var targetDimensions = {
        w: 0,
        h: 0
    };
    var container;
    var containerDimensions = {
        w: 0,
        h: 0
    };
    var overflowArea = {
        x: 0,
        y: 0
    };
    var overflowValue;

    function extend(target, source) {
        for (var key in source)
            if (!(key in target))
                target[key] = source[key];
        return target;
    }

    function applyProperties(target, properties) {
        for (var key in properties) {
            target.style[key] = properties[key];
        }
    }

    function getFit(
        source) {
        var heightRatio = window.innerHeight / source.h;
        if ((source.w * heightRatio) > window.innerWidth) {
            return {
                w: source.w * heightRatio,
                h: source.h * heightRatio,
                fit: true
            };
        } else {
            var widthRatio = window.innerWidth / source.w;
            return {
                w: source.w * widthRatio,
                h: source.h * widthRatio,
                fit: false
            };
        }
    }

    function startTracking(passedElements) {
        var i;
        if (passedElements.length) {
            for (i = 0; i < passedElements.length; i++) {
                track(passedElements[i]);
            }
        } else {
            track(passedElements);
        }
    }

    function track(element) {
        if (element.src) {
            element.addEventListener('click', function() {
                init(this);
            }, false);
        }
    }

    function start() {
        loop();
    }

    function stop() {
        cancelRequestAnimFrame(looper);
    }

    function loop() {
        looper = requestAnimFrame(loop);
        positionTarget();
    }

    function lockBody() {
        overflowValue = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
    }

    function unlockBody() {
        document.body.style.overflow = overflowValue;
    }

    function createViewer(title, caption) {
        var containerProperties = {
            'backgroundColor': 'rgba(0,0,0,0.8)',
            'width': '100%',
            'height': '100%',
            'position': 'fixed',
            'top': '0px',
            'left': '0px',
            'overflow': 'hidden',
            'zIndex': '999999',
            'margin': '0px',
            'webkitTransition': 'opacity 150ms cubic-bezier( 0, 0, .26, 1 )',
            'MozTransition': 'opacity 150ms cubic-bezier( 0, 0, .26, 1 )',
            'transition': 'opacity 150ms cubic-bezier( 0, 0, .26, 1 )',
            'opacity': '0'
        }
        container = document.createElement('figure');
        container.appendChild(target);
        applyProperties(container, containerProperties);

        var imageProperties = {
            'cursor': 'url( "'
        }
        applyProperties(target, imageProperties);
        var captionContainerProperties = {
            'fontFamily': 'Georgia, Times, "Times New Roman", serif',
            'position': 'fixed',
            'bottom': '0px',
            'left': '0px',
            'padding': '20px',
            'color': '#fff',
            'wordSpacing': '0.2px',
            'webkitFontSmoothing': 'antialiased',
            'textShadow': '-1px 0px 1px rgba(0,0,0,0.4)'
        }
        var captionContainer = document.createElement('figcaption');
        applyProperties(captionContainer, captionContainerProperties);
        if (title) {
            var captionTitleProperties = {
                'margin': '0px',
                'padding': '0px',
                'fontWeight': 'normal',
                'fontSize': '40px',
                'letterSpacing': '0.5px',
                'lineHeight': '35px',
                'textAlign': 'left'
            }
            var captionTitle = document.createElement('h1');
            applyProperties(captionTitle, captionTitleProperties);
            captionTitle.innerHTML = title;
            captionContainer.appendChild(captionTitle);
        }
        if (caption) {
            var captionTextProperties = {
                'margin': '0px',
                'padding': '0px',
                'fontWeight': 'normal',
                'fontSize': '20px',
                'letterSpacing': '0.1px',
                'maxWidth': '500px',
                'textAlign': 'left',
                'background': 'none',
                'marginTop': '5px'
            }
            var captionText = document.createElement('h2');
            applyProperties(captionText, captionTextProperties);
            captionText.innerHTML = caption;
            captionContainer.appendChild(captionText);
        }
        container.appendChild(captionContainer);
        setDimensions();
        mouse.xCurr = mouse.xDest = window.innerWidth / 2;
        mouse.yCurr = mouse.yDest = window.innerHeight / 2;
        document.body.appendChild(container);
        setTimeout(function() {
            container.style['opacity'] = '1';
        }, 10);
    }

    function removeViewer() {
        unlockBody();
        unbindEvents();
        stop();
        document.body.removeChild(container);
    }

    function setDimensions() {
        var imageDimensions = getFit(sourceDimensions);
        target.width = imageDimensions.w;
        target.height = imageDimensions.h;
        horizontalOrientation = imageDimensions.fit;
        targetDimensions = {
            w: target.width,
            h: target.height
        };
        containerDimensions = {
            w: window.innerWidth,
            h: window.innerHeight
        };
        overflowArea = {
            x: containerDimensions.w - targetDimensions.w,
            y: containerDimensions.h - targetDimensions.h
        };
    }

    function init(element) {
        var imageSource = element.src;
        var title = element.getAttribute('data-title');
        var caption = element.getAttribute('data-caption');
        var img = new Image();
        img.onload = function() {
            sourceDimensions = {
                w: img.width,
                h: img.height
            };
            target = this;
            createViewer(title, caption);
            lockBody();
            bindEvents();
            loop();
        }
        img.src = imageSource;
    }

    function bindEvents() {
        container.addEventListener('mousemove', onMouseMove, false);
        container.addEventListener('touchmove', onTouchMove, false);
        window.addEventListener('resize', setDimensions, false);
        window.addEventListener('keyup', onKeyUp, false);
        target.addEventListener('click', removeViewer, false);
    }

    function unbindEvents() {
        container.removeEventListener('mousemove', onMouseMove, false);
        container.removeEventListener('touchmove', onTouchMove, false);
        window.removeEventListener('resize', setDimensions, false);
        window.removeEventListener('keyup', onKeyUp, false);
        target.removeEventListener('click', removeViewer, false)
    }

    function onMouseMove(event) {
        mouse.xDest = event.clientX;
        mouse.yDest = event.clientY;
    }

    function onTouchMove(event) {
        event.preventDefault();
        mouse.xDest = event.touches[0].clientX;
        mouse.yDest = event.touches[0].clientY;
    }

    function onKeyUp(event) {
        event.preventDefault();
        if (event.keyCode === KEYCODE_ESC) {
            removeViewer();
        }
    }

    function positionTarget() {
        mouse.xCurr += (mouse.xDest - mouse.xCurr) * 0.05;
        mouse.yCurr += (mouse.yDest - mouse.yCurr) * 0.05;
        if (horizontalOrientation === true) {
            currentPosition += (mouse.xCurr - currentPosition);
            if (mouse.xCurr !== lastPosition) {
                var position = parseFloat(currentPosition / containerDimensions.w);
                position = overflowArea.x * position;
                target.style['webkitTransform'] = 'translate3d(' + position + 'px, 0px, 0px)';
                target.style['MozTransform'] = 'translate3d(' + position + 'px, 0px, 0px)';
                target.style['msTransform'] = 'translate3d(' + position + 'px, 0px, 0px)';
                lastPosition = mouse.xCurr;
            }
        } else if (horizontalOrientation === false) {
            currentPosition += (mouse.yCurr - currentPosition);
            if (mouse.yCurr !== lastPosition) {
                var position = parseFloat(currentPosition / containerDimensions.h);
                position = overflowArea.y * position;
                target.style['webkitTransform'] = 'translate3d( 0px, ' + position + 'px, 0px)';
                target.style['MozTransform'] = 'translate3d( 0px, ' + position + 'px, 0px)';
                target.style['msTransform'] = 'translate3d( 0px, ' + position + 'px, 0px)';
                lastPosition = mouse.yCurr;
            }
        }
    }

    function main(element) {
        if (!element) {
            throw 'You need to pass an element!';
        }
        startTracking(element);
    }
    return extend(main, {
        resize: setDimensions,
        start: start,
        stop: stop
    });

})();
(function($) {
    $.fn.extend({
        socialShare: function(options) {
            var defaults = {
                social: '',
                title: document.title,
                shareUrl: window.location.href,
                description: $('meta[name="description"]').attr('content'),
                animation: 'launchpad',
                chainAnimationSpeed: 100,
                whenSelect: false,
                selectContainer: '.share-container',
                blur: false
            };
            var options = $.extend(true, defaults, options);
            var beforeDivs = '<div class="arthref arthrefSocialShare"><div class="overla ' + options.animation + '"><div class="icon-container"><div class="centered"><ul>';
            var afterDivs = '</ul></div></div></div></div>';
            return this.each(function() {
                var o = options;
                var obj = $(this);
                if (o.whenSelect) {
                    $(o.selectContainer).mouseup(function(e) {
                        var selection = getSelected();
                        if (selection && (selection = new String(selection).replace(/^\s+|\s+$/g, ''))) {
                            options.title = selection
                        }
                    })
                }
                obj.click(function() {
                    createContainer();
                    if (o.blur) {}
                    setTimeout(function() {
                        ;
                        $('.arthrefSocialShare').find('ul').addClass('active');
                        if (o.animation == 'chain') chainAnimation($('.arthrefSocialShare').find('li'), o.chainAnimationSpeed, '1')
                    }, 0)
                });
                $(document).on("click touchstart", ".arthrefSocialShare .overlay", function(e) {
                    destroyContainer(o)
                });
                $(document).on("keydown", function(e) {
                    if (e.keyCode == 27) destroyContainer(o)
                });
                $(document).on("click touchstart", ".arthrefSocialShare li", function(e) {
                    e.stopPropagation()
                })
            });

            function getSelected() {
                if (window.getSelection) {
                    return window.getSelection()
                } else if (document.getSelection) {
                    return document.getSelection()
                } else {
                    var selection = document.selection && document.selection.createRange();
                    if (selection.text) {
                        return selection.text
                    }
                    return false
                }
                return false
            };

            function chainAnimation(e, s, o) {
                var $fade = $(e);
                $fade.each(function(i) {
                    $(this).delay(i * s).fadeTo(s, o)
                })
            };

            function createContainer() {
                var siteSettings = {
                    'blogger': {
                        text: 'Blogger',
                        className: 'aBlogger',
                        url: 'http://www.blogger.com/blog_this.pyra?t=&amp;u={u}&amp;n={t}'
                    },
                    'delicious': {
                        text: 'Delicious',
                        className: 'aDelicious',
                        url: 'http://del.icio.us/post?url={u}&amp;title={t}'
                    },
                    'digg': {
                        text: 'aDigg',
                        className: 'Digg',
                        url: 'http://digg.com/submit?phase=2&amp;url={u}&amp;title={t}'
                    },
                    'facebook': {
                        text: 'Facebook',
                        className: 'aFacebook',
                        url: 'http://www.facebook.com/sharer.php?u={u}&amp;t={t}'
                    },
                    'friendfeed': {
                        text: 'FriendFeed',
                        className: 'aFriendFeed',
                        url: 'http://friendfeed.com/share?url={u}&amp;title={t}'
                    },
                    'google': {
                        text: 'Google Plus',
                        className: 'aGooglePlus',
                        url: 'https://plus.google.com/share?url={u}'
                    },
                    'linkedin': {
                        text: 'LinkedIn',
                        className: 'aLinkedIn',
                        url: 'http://www.linkedin.com/shareArticle?mini=true&amp;url={u}&amp;title={t}&amp;ro=false&amp;summary={d}&amp;source='
                    },
                    'myspace': {
                        text: 'MySpace',
                        className: 'aMySpace',
                        url: 'http://www.myspace.com/Modules/PostTo/Pages/?u={u}&amp;t={t}'
                    },
                    'pinterest': {
                        text: 'Pinterest',
                        className: 'aPinterest',
                        url: 'http://pinterest.com/pin/create/button/?url={u}&amp;description={d}'
                    },
                    'reddit': {
                        text: 'Reddit',
                        className: 'aReddit',
                        url: 'http://reddit.com/submit?url={u}&amp;title={t}'
                    },
                    'stumbleupon': {
                        text: 'StumbleUpon',
                        className: 'aStumbleUpon',
                        url: 'http://www.stumbleupon.com/submit?url={u}&amp;title={t}'
                    },
                    'tumblr': {
                        text: 'Tumblr',
                        className: 'aTumblr',
                        url: 'http://www.tumblr.com/share/link?url={u}&name={t}&description={d}'
                    },
                    'twitter': {
                        text: 'Twitter',
                        className: 'aTwitter',
                        url: 'http://twitter.com/home?status={t}%20{u}'
                    },
                    'windows': {
                        text: 'Windows',
                        className: 'aWindows',
                        url: 'http://profile.live.com/badge?url={u}'
                    },
                    'yahoo': {
                        text: 'Yahoo',
                        className: 'aYahoo',
                        url: 'http://bookmarks.yahoo.com/toolbar/savebm?opener=tb&amp;u={u}&amp;t={t}'
                    }
                };
                var sites = options.social.split(',');
                var listItem = '';
                for (var i = 0; i <= sites.length - 1; i++) {
                    siteSettings[sites[i]]['url'] = siteSettings[sites[i]]['url'].replace('{t}', encodeURIComponent(options.title)).replace('{u}', encodeURI(options.shareUrl)).replace('{d}', encodeURIComponent(options.description));
                    listItem += '<li><a href="' + siteSettings[sites[i]]['url'] + '" target="_blank" rel="nofollow" class="' + siteSettings[sites[i]]['className'] + '"></a><span class="transition">' + siteSettings[sites[i]]['text'] + '</span></li>'
                };
                $('.share-container').append(beforeDivs + listItem + afterDivs)
            }

            function destroyContainer(o) {
                if (o.blur) $('.share-container').children().removeClass('blurred');
                $('.arthrefSocialShare').find('.overlay').removeClass('active');
                $('.arthrefSocialShare').find('ul').removeClass('active');
                setTimeout(function() {
                    $('.arthrefSocialShare').remove()
                }, 300)
            }
        }
    })
})(jQuery);
(function($) {
    var selectors = [];
    var check_binded = false;
    var check_lock = false;
    var defaults = {
        interval: 250,
        force_process: false
    };
    var $window = $(window);
    var $prior_appeared;

    function process() {
        check_lock = false;
        for (var index in selectors) {
            var $appeared = $(selectors[index]).filter(function() {
                return $(this).is(':appeared');
            });
            $appeared.trigger('appear', [$appeared]);
            if ($prior_appeared) {
                var $disappeared = $prior_appeared.not($appeared);
                $disappeared.trigger('disappear', [$disappeared]);
            }
            $prior_appeared = $appeared;
        }
    }
    $.expr[':']['appeared'] = function(element) {
        var $element = $(element);
        if (!$element.is(':visible')) {
            return false;
        }
        var window_left = $window.scrollLeft();
        var window_top = $window.scrollTop();
        var offset = $element.offset();
        var left = offset.left;
        var top = offset.top;
        if (top + $element.height() >= window_top && top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() && left + $element.width() >= window_left && left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
            return true;
        } else {
            return false;
        }
    };
    $.fn.extend({
        appear: function(options) {
            var opts = $.extend({}, defaults, options || {});
            var selector = this.selector || this;
            if (!check_binded) {
                var on_check = function() {
                    if (check_lock) {
                        return;
                    }
                    check_lock = true;
                    setTimeout(process, opts.interval);
                };
                $(window).scroll(on_check).resize(on_check);
                check_binded = true;
            }
            if (opts.force_process) {
                setTimeout(process, opts.interval);
            }
            selectors.push(selector);
            return $(selector);
        }
    });
    $.extend({
        force_appear: function() {
            if (check_binded) {
                process();
                return true;
            };
            return false;
        }
    });
})(jQuery);
if (typeof Object.create !== "function") {
    Object.create = function(obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}
(function($, window, document) {
    var
        loadAPI = function loadAPI(callback) {
            var tag = document.createElement('script'),
                head = document.getElementsByTagName('head')[0];
            tag.src = location.protocol + '//www.youtube.com/iframe_api';
            head.appendChild(tag);
            head = null;
            tag = null;

            iframeIsReady(callback);
        },
        iframeIsReady = function iframeIsReady(callback) {
            if (typeof YT === 'undefined' && typeof window.loadingPlayer === 'undefined') {
                window.loadingPlayer = true;
                window.dfd = $.Deferred();
                window.onYouTubeIframeAPIReady = function() {
                    window.onYouTubeIframeAPIReady = null;
                    window.dfd.resolve("John");
                    callback();
                };
            } else {
                window.dfd.done(function(name) {
                    callback();
                });
            }
        };
    YTPlayer = {
        player: null,
        defaults: {
            ratio: 16 / 9,
            videoId: 'LSmgKRx5pBo',
            mute: true,
            repeat: true,
            width: $(window).width(),
            playButtonClass: 'YTPlayer-play',
            pauseButtonClass: 'YTPlayer-pause',
            muteButtonClass: 'YTPlayer-mute',
            volumeUpClass: 'YTPlayer-volume-up',
            volumeDownClass: 'YTPlayer-volume-down',
            start: 0,
            pauseOnScroll: false,
            fitToBackground: true,
            playerVars: {
                modestbranding: 1,
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                wmode: 'transparent',
                branding: 0,
                rel: 0,
                autohide: 0,
                origin: window.location.origin
            },
            events: null
        },
        init: function init(node, userOptions) {
            var self = this;
            self.userOptions = userOptions;
            self.$body = $('body'),
                self.$node = $(node),
                self.$window = $(window);
            self.defaults.events = {
                onReady: function(e) {
                    self.onPlayerReady(e);
                    if (self.options.pauseOnScroll) {
                        self.pauseOnScroll();
                    }
                    if (typeof self.options.callback == 'function') {
                        self.options.callback.call(this);
                    }
                },
                onStateChange: function(e) {
                    if (e.data === 1) {
                        self.$node.addClass('loaded');
                    } else if (e.data === 0 && self.options.repeat) {
                        self.player.seekTo(self.options.start);
                    }
                }
            }
            self.options = $.extend(true, {}, self.defaults, self.userOptions);
            self.ID = (new Date()).getTime();
            self.holderID = 'YTPlayer-ID-' + self.ID;
            if (self.options.fitToBackground) {
                self.createBackgroundVideo();
            } else {
                self.createContainerVideo();
            }
            self.$window.on('resize.YTplayer' + self.ID, function() {
                self.resize(self);
            });

            loadAPI(self.onYouTubeIframeAPIReady.bind(self));

            self.resize(self);

            return self;
        },
        pauseOnScroll: function pauseOnScroll() {
            var self = this;
            self.$window.on('scroll.YTplayer' + self.ID, function() {
                var state = self.player.getPlayerState();
                if (state === 1) {
                    self.player.pauseVideo();
                }
            });
            self.$window.scrollStopped(function() {
                var state = self.player.getPlayerState();
                if (state === 2) {
                    self.player.playVideo();
                }
            });
        },
        createContainerVideo: function createContainerVideo() {
            var self = this;
            var $YTPlayerString = $('<div id="ytplayer-container' + self.ID + '" >\
                                    <div id="' + self.holderID + '" class="ytplayer-player"></div> \
                                    </div> \
                                    <div id="ytplayer-shield"></div>');

            self.$node.append($YTPlayerString);
            self.$YTPlayerString = $YTPlayerString;
            $YTPlayerString = null;
        },
        createBackgroundVideo: function createBackgroundVideo() {
            var self = this,
                $YTPlayerString = $('<div id="ytplayer-container' + self.ID + '" class="ytplayer-container background">\
                                    <div id="' + self.holderID + '" class="ytplayer-player"></div>\
                                    </div>\
                                    <div id="ytplayer-shield"></div>');

            self.$node.append($YTPlayerString);
            self.$YTPlayerString = $YTPlayerString;
            $YTPlayerString = null;
        },
        resize: function resize(self) {
            var container = $(window);

            if (!self.options.fitToBackground) {
                container = self.$node;
            }
            var width = container.width(),
                pWidth,
                height = container.height(),
                pHeight,
                $YTPlayerPlayer = $('#' + self.holderID);
            if (width / self.options.ratio < height) {
                pWidth = Math.ceil(height * self.options.ratio);
                $YTPlayerPlayer.width(pWidth).height(height).css({
                    left: (width - pWidth) / 2,
                    top: 0
                });
            } else {
                pHeight = Math.ceil(width / self.options.ratio); // get new player height
                $YTPlayerPlayer.width(width).height(pHeight).css({
                    left: 0,
                    top: 0
                });
            }
            $YTPlayerPlayer = null;
            container = null;
        },
        onYouTubeIframeAPIReady: function onYouTubeIframeAPIReady() {
            var self = this;

            self.player = new window.YT.Player(self.holderID, {
                width: self.options.width,
                height: Math.ceil(self.options.width / self.options.ratio),
                videoId: self.options.videoId,
                playerVars: self.options.playerVars,
                events: self.options.events
            });
        },
        onPlayerReady: function onPlayerReady(e) {
            if (this.options.mute) {
                e.target.mute();
            }
            e.target.playVideo();
        },
        getPlayer: function getPlayer() {
            return this.player;
        },
        destroy: function destroy() {
            var self = this;
            self.$node
                .removeData('yt-init')
                .removeData('ytPlayer')
                .removeClass('loaded');
            self.$YTPlayerString.remove();
            $(window).off('resize.YTplayer' + self.ID);
            $(window).off('scroll.YTplayer' + self.ID);
            self.$body = null;
            self.$node = null;
            self.$YTPlayerString = null;
            self.player.destroy();
            self.player = null;
        }
    };
    $.fn.scrollStopped = function(callback) {
        var $this = $(this),
            self = this;
        $this.scroll(function() {
            if ($this.data('scrollTimeout')) {
                clearTimeout($this.data('scrollTimeout'));
            }
            $this.data('scrollTimeout', setTimeout(callback, 250, self));
        });
    };
    $.fn.YTPlayer = function(options) {
        return this.each(function() {
            var el = this;
            $(el).data("yt-init", true);
            var player = Object.create(YTPlayer);
            player.init(el, options);
            $.data(el, "ytPlayer", player);
        });
    };
})(jQuery, window, document);
//
// SmoothScroll for websites v1.4.10 (Balazs Galambosi)
// http://www.smoothscroll.net/
//
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me. 
// It is also free to use on any individual website.
//
// Exception:
// The only restriction is to not publish any  
// extension for browsers or native application
// without getting a written permission first.
//

(function() {
    var ac = {
        frameRate: 350,
        animationTime: 700,
        stepSize: 45,
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,
        accelerationDelta: 50,
        accelerationMax: 3,
        keyboardSupport: true,
        arrowScroll: 50,
        fixedBackground: true,
        excluded: ""
    };
    var I = ac;
    var G = false;
    var C = false;
    var m = {
        x: 0,
        y: 0
    };
    var b = false;
    var K = document.documentElement;
    var h;
    var R;
    var t;
    var ai = [];
    var i;
    var ad = /^Mac/.test(navigator.platform);
    var B = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
    };
    var T = {
        37: 1,
        38: 1,
        39: 1,
        40: 1
    };

    function am() {
        if (I.keyboardSupport) {
            k("keydown", H)
        }
    }

    function af() {
        if (b || !document.body) {
            return
        }
        b = true;
        var e = document.body;
        var ar = document.documentElement;
        var au = window.innerHeight;
        var at = e.scrollHeight;
        K = (document.compatMode.indexOf("CSS") >= 0) ? ar : e;
        h = e;
        am();
        if (top != self) {
            C = true
        } else {
            if (X && at > au && (e.offsetHeight <= au || ar.offsetHeight <= au)) {
                var ap = document.createElement("div");
                ap.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + K.scrollHeight + "px";
                document.body.appendChild(ap);
                var an;
                t = function() {
                    if (an) {
                        return
                    }
                    an = setTimeout(function() {
                        if (G) {
                            return
                        }
                        ap.style.height = "0";
                        ap.style.height = K.scrollHeight + "px";
                        an = null
                    }, 500)
                };
                setTimeout(t, 10);
                k("resize", t);
                var aq = {
                    attributes: true,
                    childList: true,
                    characterData: false
                };
                R = new L(t);
                R.observe(e, aq);
                if (K.offsetHeight <= au) {
                    var ao = document.createElement("div");
                    ao.style.clear = "both";
                    e.appendChild(ao)
                }
            }
        }
        if (!I.fixedBackground && !G) {
            e.style.backgroundAttachment = "scroll";
            ar.style.backgroundAttachment = "scroll"
        }
    }

    function d() {
        R && R.disconnect();
        a(S, u);
        a("mousedown", w);
        a("keydown", H);
        a("resize", t);
        a("load", af)
    }
    var V = [];
    var l = false;
    var v = Date.now();

    function ag(ap, ao, at) {
        M(ao, at);
        if (I.accelerationMax != 1) {
            var e = Date.now();
            var av = e - v;
            if (av < I.accelerationDelta) {
                var ar = (1 + (50 / av)) / 2;
                if (ar > 1) {
                    ar = Math.min(ar, I.accelerationMax);
                    ao *= ar;
                    at *= ar
                }
            }
            v = Date.now()
        }
        V.push({
            x: ao,
            y: at,
            lastX: (ao < 0) ? 0.99 : -0.99,
            lastY: (at < 0) ? 0.99 : -0.99,
            start: Date.now()
        });
        if (l) {
            return
        }
        var au = D();
        var aq = (ap === au || ap === document.body);
        if (ap.$scrollBehavior == null && O(ap)) {
            ap.$scrollBehavior = ap.style.scrollBehavior;
            ap.style.scrollBehavior = "auto"
        }
        var an = function(ax) {
            var aw = Date.now();
            var aE = 0;
            var aD = 0;
            for (var az = 0; az < V.length; az++) {
                var aG = V[az];
                var aF = aw - aG.start;
                var ay = (aF >= I.animationTime);
                var aA = (ay) ? 1 : aF / I.animationTime;
                if (I.pulseAlgorithm) {
                    aA = p(aA)
                }
                var aC = (aG.x * aA - aG.lastX) >> 0;
                var aB = (aG.y * aA - aG.lastY) >> 0;
                aE += aC;
                aD += aB;
                aG.lastX += aC;
                aG.lastY += aB;
                if (ay) {
                    V.splice(az, 1);
                    az--
                }
            }
            if (aq) {
                window.scrollBy(aE, aD)
            } else {
                if (aE) {
                    ap.scrollLeft += aE
                }
                if (aD) {
                    ap.scrollTop += aD
                }
            }
            if (!ao && !at) {
                V = []
            }
            if (V.length) {
                U(an, ap, (1000 / I.frameRate + 1))
            } else {
                l = false;
                if (ap.$scrollBehavior != null) {
                    ap.style.scrollBehavior = ap.$scrollBehavior;
                    ap.$scrollBehavior = null
                }
            }
        };
        U(an, ap, 0);
        l = true
    }

    function u(ap) {
        if (!b) {
            af()
        }
        var aq = ap.target;
        if (ap.defaultPrevented || ap.ctrlKey) {
            return true
        }
        if (s(h, "embed") || (s(aq, "embed") && /\.pdf/i.test(aq.src)) || s(h, "object") || aq.shadowRoot) {
            return true
        }
        var an = -ap.wheelDeltaX || ap.deltaX || 0;
        var e = -ap.wheelDeltaY || ap.deltaY || 0;
        if (ad) {
            if (ap.wheelDeltaX && A(ap.wheelDeltaX, 120)) {
                an = -120 * (ap.wheelDeltaX / Math.abs(ap.wheelDeltaX))
            }
            if (ap.wheelDeltaY && A(ap.wheelDeltaY, 120)) {
                e = -120 * (ap.wheelDeltaY / Math.abs(ap.wheelDeltaY))
            }
        }
        if (!an && !e) {
            e = -ap.wheelDelta || 0
        }
        if (ap.deltaMode === 1) {
            an *= 40;
            e *= 40
        }
        var ao = Y(aq);
        if (!ao) {
            if (C && ah) {
                Object.defineProperty(ap, "target", {
                    value: window.frameElement
                });
                return parent.wheel(ap)
            }
            return true
        }
        if (ak(e)) {
            return true
        }
        if (Math.abs(an) > 1.2) {
            an *= I.stepSize / 120
        }
        if (Math.abs(e) > 1.2) {
            e *= I.stepSize / 120
        }
        ag(ao, an, e);
        ap.preventDefault();
        r()
    }

    function H(e) {
        var au = e.target;
        var aq = e.ctrlKey || e.altKey || e.metaKey || (e.shiftKey && e.keyCode !== B.spacebar);
        if (!document.body.contains(h)) {
            h = document.activeElement
        }
        var an = /^(textarea|select|embed|object)$/i;
        var ao = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (e.defaultPrevented || an.test(au.nodeName) || s(au, "input") && !ao.test(au.type) || s(h, "video") || z(e) || au.isContentEditable || aq) {
            return true
        }
        if ((s(au, "button") || s(au, "input") && ao.test(au.type)) && e.keyCode === B.spacebar) {
            return true
        }
        if (s(au, "input") && au.type == "radio" && T[e.keyCode]) {
            return true
        }
        var ap, ay = 0,
            aw = 0;
        var at = Y(h);
        if (!at) {
            return (C && ah) ? parent.keydown(e) : true
        }
        var ar = at.clientHeight;
        if (at == document.body) {
            ar = window.innerHeight
        }
        switch (e.keyCode) {
            case B.up:
                aw = -I.arrowScroll;
                break;
            case B.down:
                aw = I.arrowScroll;
                break;
            case B.spacebar:
                ap = e.shiftKey ? 1 : -1;
                aw = -ap * ar * 0.9;
                break;
            case B.pageup:
                aw = -ar * 0.9;
                break;
            case B.pagedown:
                aw = ar * 0.9;
                break;
            case B.home:
                if (at == document.body && document.scrollingElement) {
                    at = document.scrollingElement
                }
                aw = -at.scrollTop;
                break;
            case B.end:
                var ax = at.scrollHeight - at.scrollTop;
                var av = ax - ar;
                aw = (av > 0) ? av + 10 : 0;
                break;
            case B.left:
                ay = -I.arrowScroll;
                break;
            case B.right:
                ay = I.arrowScroll;
                break;
            default:
                return true
        }
        ag(at, ay, aw);
        e.preventDefault();
        r()
    }

    function w(e) {
        h = e.target
    }
    var J = (function() {
        var e = 0;
        return function(an) {
            return an.uniqueID || (an.uniqueID = e++)
        }
    })();
    var o = {};
    var n = {};
    var ae;
    var al = {};

    function r() {
        clearTimeout(ae);
        ae = setInterval(function() {
            o = n = al = {}
        }, 1 * 1000)
    }

    function g(ap, ao, e) {
        var an = e ? o : n;
        for (var aq = ap.length; aq--;) {
            an[J(ap[aq])] = ao
        }
        return ao
    }

    function j(an, e) {
        return (e ? o : n)[J(an)]
    }

    function Y(ar) {
        var ao = [];
        var e = document.body;
        var an = K.scrollHeight;
        do {
            var aq = j(ar, false);
            if (aq) {
                return g(ao, aq)
            }
            ao.push(ar);
            if (an === ar.scrollHeight) {
                var at = W(K) && W(e);
                var ap = at || N(K);
                if (C && Z(K) || !C && ap) {
                    return g(ao, D())
                }
            } else {
                if (Z(ar) && N(ar)) {
                    return g(ao, ar)
                }
            }
        } while ((ar = ar.parentElement))
    }

    function Z(e) {
        return (e.clientHeight + 10 < e.scrollHeight)
    }

    function W(e) {
        var an = getComputedStyle(e, "").getPropertyValue("overflow-y");
        return (an !== "hidden")
    }

    function N(e) {
        var an = getComputedStyle(e, "").getPropertyValue("overflow-y");
        return (an === "scroll" || an === "auto")
    }

    function O(e) {
        var ao = J(e);
        if (al[ao] == null) {
            var an = getComputedStyle(e, "")["scroll-behavior"];
            al[ao] = ("smooth" == an)
        }
        return al[ao]
    }

    function k(ao, an, e) {
        window.addEventListener(ao, an, e || false)
    }

    function a(ao, an, e) {
        window.removeEventListener(ao, an, e || false)
    }

    function s(an, e) {
        return an && (an.nodeName || "").toLowerCase() === e.toLowerCase()
    }

    function M(e, an) {
        e = (e > 0) ? 1 : -1;
        an = (an > 0) ? 1 : -1;
        if (m.x !== e || m.y !== an) {
            m.x = e;
            m.y = an;
            V = [];
            v = 0
        }
    }
    if (window.localStorage && localStorage.SS_deltaBuffer) {
        try {
            ai = localStorage.SS_deltaBuffer.split(",")
        } catch (aj) {}
    }

    function ak(e) {
        if (!e) {
            return
        }
        if (!ai.length) {
            ai = [e, e, e]
        }
        e = Math.abs(e);
        ai.push(e);
        ai.shift();
        clearTimeout(i);
        i = setTimeout(function() {
            try {
                localStorage.SS_deltaBuffer = ai.join(",")
            } catch (ap) {}
        }, 1000);
        var an = e > 120 && F(e);
        var ao = !F(120) && !F(100) && !an;
        if (e < 50) {
            return true
        }
        return ao
    }

    function A(an, e) {
        return (Math.floor(an / e) == an / e)
    }

    function F(e) {
        return (A(ai[0], e) && A(ai[1], e) && A(ai[2], e))
    }

    function z(ao) {
        var an = ao.target;
        var e = false;
        if (document.URL.indexOf("www.youtube.com/watch") != -1) {
            do {
                e = (an.classList && an.classList.contains("html5-video-controls"));
                if (e) {
                    break
                }
            } while ((an = an.parentNode))
        }
        return e
    }
    var U = (function() {
        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(ao, an, e) {
            window.setTimeout(ao, e || (1000 / 60))
        })
    })();
    var L = (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver);
    var D = (function() {
        var e = document.scrollingElement;
        return function() {
            if (!e) {
                var ap = document.createElement("div");
                ap.style.cssText = "height:10000px;width:1px;";
                document.body.appendChild(ap);
                var ao = document.body.scrollTop;
                var an = document.documentElement.scrollTop;
                window.scrollBy(0, 3);
                if (document.body.scrollTop != ao) {
                    (e = document.body)
                } else {
                    (e = document.documentElement)
                }
                window.scrollBy(0, -3);
                document.body.removeChild(ap)
            }
            return e
        }
    })();

    function ab(e) {
        var ao, ap, an;
        e = e * I.pulseScale;
        if (e < 1) {
            ao = e - (1 - Math.exp(-e))
        } else {
            ap = Math.exp(-1);
            e -= 1;
            an = 1 - Math.exp(-e);
            ao = ap + (an * (1 - ap))
        }
        return ao * I.pulseNormalize
    }

    function p(e) {
        if (e >= 1) {
            return 1
        }
        if (e <= 0) {
            return 0
        }
        if (I.pulseNormalize == 1) {
            I.pulseNormalize /= ab(1)
        }
        return ab(e)
    }
    var Q = window.navigator.userAgent;
    var aa = /Edge/.test(Q);
    var ah = /chrome/i.test(Q) && !aa;
    var f = /safari/i.test(Q) && !aa;
    var c = /firefox/i.test(Q);
    var P = /mobile/i.test(Q);
    var y = /Windows NT 6.1/i.test(Q) && /rv:11/i.test(Q);
    var X = f && (/Version\/8/i.test(Q) || /Version\/9/i.test(Q));
    var x = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function() {
                x = true
            }
        }))
    } catch (aj) {}
    var E = x ? {
        passive: false
    } : false;
    var S = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
    if (S) {
        k(S, u, E);
        k("mousedown", w);
        k("load", af)
    }

    function q(an) {
        for (var e in an) {
            if (ac.hasOwnProperty(e)) {
                I[e] = an[e]
            }
        }
    }
    q.destroy = d;
    if (window.SmoothScrollOptions) {
        q(window.SmoothScrollOptions)
    }
    if (typeof define === "function" && define.amd) {
        define(function() {
            return q
        })
    } else {
        if ("object" == typeof exports) {
            module.exports = q
        } else {
            window.SmoothScroll = q
        }
    }
})();
