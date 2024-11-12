var Ei = Object.defineProperty;
var Ci = (e, t, r) => t in e ? Ei(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var w = (e, t, r) => Ci(e, typeof t != "symbol" ? t + "" : t, r);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const a of o.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function n(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = r(i);
        fetch(i.href, o)
    }
})();
const rn = () => {
        const e = new Date().toLocaleString("en-US", {
                timeZone: "Asia/Bangkok"
            }),
            t = new Date(e);
        return {
            month: t.getMonth() + 1,
            day: t.getDate()
        }
    },
    nn = (e, t) => t.some(({
        month: r,
        days: n
    }) => e.month === r && (Array.isArray(n) ? n.includes(e.day) : e.day >= n.start && e.day <= (n.end ? ? 31))),
    $i = () => nn(rn(), [{
        month: 12,
        days: {
            start: 24
        }
    }]),
    Ti = () => nn(rn(), [{
        month: 10,
        days: [31]
    }, {
        month: 11,
        days: [1]
    }]),
    dr = (e = 0) => {
        const t = Math.floor(e / 60),
            r = e % 60;
        return `${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`
    },
    on = (e, t) => {
        let r;
        return (...n) => {
            clearTimeout(r), r = setTimeout(() => e(...n), t)
        }
    };
var O = function() {
    return O = Object.assign || function(t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
            r = arguments[n];
            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o])
        }
        return t
    }, O.apply(this, arguments)
};

function Ae(e, t, r) {
    if (r || arguments.length === 2)
        for (var n = 0, i = t.length, o; n < i; n++)(o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
    return e.concat(o || Array.prototype.slice.call(t))
}
var He, b, sn, Vt, le, pr, an, $t, Ut, Tt, Pt, cn, Me = {},
    ln = [],
    Pi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    at = Array.isArray;

function Q(e, t) {
    for (var r in t) e[r] = t[r];
    return e
}

function un(e) {
    e && e.parentNode && e.parentNode.removeChild(e)
}

function D(e, t, r) {
    var n, i, o, a = {};
    for (o in t) o == "key" ? n = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
    if (arguments.length > 2 && (a.children = arguments.length > 3 ? He.call(arguments, 2) : r), typeof e == "function" && e.defaultProps != null)
        for (o in e.defaultProps) a[o] === void 0 && (a[o] = e.defaultProps[o]);
    return Le(e, a, n, i, null)
}

function Le(e, t, r, n, i) {
    var o = {
        type: e,
        props: t,
        key: r,
        ref: n,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: i ? ? ++sn,
        __i: -1,
        __u: 0
    };
    return i == null && b.vnode != null && b.vnode(o), o
}

function Ri() {
    return {
        current: null
    }
}

function A(e) {
    return e.children
}

function K(e, t) {
    this.props = e, this.context = t
}

function ge(e, t) {
    if (t == null) return e.__ ? ge(e.__, e.__i + 1) : null;
    for (var r; t < e.__k.length; t++)
        if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
    return typeof e.type == "function" ? ge(e) : null
}

function hn(e) {
    var t, r;
    if ((e = e.__) != null && e.__c != null) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if ((r = e.__k[t]) != null && r.__e != null) {
                e.__e = e.__c.base = r.__e;
                break
            }
        return hn(e)
    }
}

function Rt(e) {
    (!e.__d && (e.__d = !0) && le.push(e) && !nt.__r++ || pr !== b.debounceRendering) && ((pr = b.debounceRendering) || an)(nt)
}

function nt() {
    var e, t, r, n, i, o, a, l;
    for (le.sort($t); e = le.shift();) e.__d && (t = le.length, n = void 0, o = (i = (r = e).__v).__e, a = [], l = [], r.__P && ((n = Q({}, i)).__v = i.__v + 1, b.vnode && b.vnode(n), Gt(r.__P, n, i, r.__n, r.__P.namespaceURI, 32 & i.__u ? [o] : null, a, o ? ? ge(i), !!(32 & i.__u), l), n.__v = i.__v, n.__.__k[n.__i] = n, fn(a, n, l), n.__e != o && hn(n)), le.length > t && le.sort($t));
    nt.__r = 0
}

function dn(e, t, r, n, i, o, a, l, h, u, d) {
    var c, f, p, m, v, _ = n && n.__k || ln,
        g = t.length;
    for (r.__d = h, Ii(r, t, _), h = r.__d, c = 0; c < g; c++)(p = r.__k[c]) != null && (f = p.__i === -1 ? Me : _[p.__i] || Me, p.__i = c, Gt(e, p, f, i, o, a, l, h, u, d), m = p.__e, p.ref && f.ref != p.ref && (f.ref && Zt(f.ref, null, p), d.push(p.ref, p.__c || m, p)), v == null && m != null && (v = m), 65536 & p.__u || f.__k === p.__k ? h = pn(p, h, e) : typeof p.type == "function" && p.__d !== void 0 ? h = p.__d : m && (h = m.nextSibling), p.__d = void 0, p.__u &= -196609);
    r.__d = h, r.__e = v
}

function Ii(e, t, r) {
    var n, i, o, a, l, h = t.length,
        u = r.length,
        d = u,
        c = 0;
    for (e.__k = [], n = 0; n < h; n++)(i = t[n]) != null && typeof i != "boolean" && typeof i != "function" ? (a = n + c, (i = e.__k[n] = typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? Le(null, i, null, null, null) : at(i) ? Le(A, {
        children: i
    }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? Le(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i).__ = e, i.__b = e.__b + 1, o = null, (l = i.__i = Li(i, r, a, d)) !== -1 && (d--, (o = r[l]) && (o.__u |= 131072)), o == null || o.__v === null ? (l == -1 && c--, typeof i.type != "function" && (i.__u |= 65536)) : l !== a && (l == a - 1 ? c-- : l == a + 1 ? c++ : (l > a ? c-- : c++, i.__u |= 65536))) : i = e.__k[n] = null;
    if (d)
        for (n = 0; n < u; n++)(o = r[n]) != null && !(131072 & o.__u) && (o.__e == e.__d && (e.__d = ge(o)), _n(o, o))
}

function pn(e, t, r) {
    var n, i;
    if (typeof e.type == "function") {
        for (n = e.__k, i = 0; n && i < n.length; i++) n[i] && (n[i].__ = e, t = pn(n[i], t, r));
        return t
    }
    e.__e != t && (t && e.type && !r.contains(t) && (t = ge(e)), r.insertBefore(e.__e, t || null), t = e.__e);
    do t = t && t.nextSibling; while (t != null && t.nodeType === 8);
    return t
}

function ee(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (at(e) ? e.some(function(r) {
        ee(r, t)
    }) : t.push(e)), t
}

function Li(e, t, r, n) {
    var i = e.key,
        o = e.type,
        a = r - 1,
        l = r + 1,
        h = t[r];
    if (h === null || h && i == h.key && o === h.type && !(131072 & h.__u)) return r;
    if (n > (h != null && !(131072 & h.__u) ? 1 : 0))
        for (; a >= 0 || l < t.length;) {
            if (a >= 0) {
                if ((h = t[a]) && !(131072 & h.__u) && i == h.key && o === h.type) return a;
                a--
            }
            if (l < t.length) {
                if ((h = t[l]) && !(131072 & h.__u) && i == h.key && o === h.type) return l;
                l++
            }
        }
    return -1
}

function fr(e, t, r) {
    t[0] === "-" ? e.setProperty(t, r ? ? "") : e[t] = r == null ? "" : typeof r != "number" || Pi.test(t) ? r : r + "px"
}

function Ge(e, t, r, n, i) {
    var o;
    e: if (t === "style")
        if (typeof r == "string") e.style.cssText = r;
        else {
            if (typeof n == "string" && (e.style.cssText = n = ""), n)
                for (t in n) r && t in r || fr(e.style, t, "");
            if (r)
                for (t in r) n && r[t] === n[t] || fr(e.style, t, r[t])
        }
    else if (t[0] === "o" && t[1] === "n") o = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = r, r ? n ? r.u = n.u : (r.u = Ut, e.addEventListener(t, o ? Pt : Tt, o)) : e.removeEventListener(t, o ? Pt : Tt, o);
    else {
        if (i == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
            e[t] = r ? ? "";
            break e
        } catch {}
        typeof r == "function" || (r == null || r === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && r == 1 ? "" : r))
    }
}

function _r(e) {
    return function(t) {
        if (this.l) {
            var r = this.l[t.type + e];
            if (t.t == null) t.t = Ut++;
            else if (t.t < r.u) return;
            return r(b.event ? b.event(t) : t)
        }
    }
}

function Gt(e, t, r, n, i, o, a, l, h, u) {
    var d, c, f, p, m, v, _, g, y, S, N, $, E, k, Z, re, j = t.type;
    if (t.constructor !== void 0) return null;
    128 & r.__u && (h = !!(32 & r.__u), o = [l = t.__e = r.__e]), (d = b.__b) && d(t);
    e: if (typeof j == "function") try {
        if (g = t.props, y = "prototype" in j && j.prototype.render, S = (d = j.contextType) && n[d.__c], N = d ? S ? S.props.value : d.__ : n, r.__c ? _ = (c = t.__c = r.__c).__ = c.__E : (y ? t.__c = c = new j(g, N) : (t.__c = c = new K(g, N), c.constructor = j, c.render = Ai), S && S.sub(c), c.props = g, c.state || (c.state = {}), c.context = N, c.__n = n, f = c.__d = !0, c.__h = [], c._sb = []), y && c.__s == null && (c.__s = c.state), y && j.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Q({}, c.__s)), Q(c.__s, j.getDerivedStateFromProps(g, c.__s))), p = c.props, m = c.state, c.__v = t, f) y && j.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), y && c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
            if (y && j.getDerivedStateFromProps == null && g !== p && c.componentWillReceiveProps != null && c.componentWillReceiveProps(g, N), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(g, c.__s, N) === !1 || t.__v === r.__v)) {
                for (t.__v !== r.__v && (c.props = g, c.state = c.__s, c.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(fe) {
                        fe && (fe.__ = t)
                    }), $ = 0; $ < c._sb.length; $++) c.__h.push(c._sb[$]);
                c._sb = [], c.__h.length && a.push(c);
                break e
            }
            c.componentWillUpdate != null && c.componentWillUpdate(g, c.__s, N), y && c.componentDidUpdate != null && c.__h.push(function() {
                c.componentDidUpdate(p, m, v)
            })
        }
        if (c.context = N, c.props = g, c.__P = e, c.__e = !1, E = b.__r, k = 0, y) {
            for (c.state = c.__s, c.__d = !1, E && E(t), d = c.render(c.props, c.state, c.context), Z = 0; Z < c._sb.length; Z++) c.__h.push(c._sb[Z]);
            c._sb = []
        } else
            do c.__d = !1, E && E(t), d = c.render(c.props, c.state, c.context), c.state = c.__s; while (c.__d && ++k < 25);
        c.state = c.__s, c.getChildContext != null && (n = Q(Q({}, n), c.getChildContext())), y && !f && c.getSnapshotBeforeUpdate != null && (v = c.getSnapshotBeforeUpdate(p, m)), dn(e, at(re = d != null && d.type === A && d.key == null ? d.props.children : d) ? re : [re], t, r, n, i, o, a, l, h, u), c.base = t.__e, t.__u &= -161, c.__h.length && a.push(c), _ && (c.__E = c.__ = null)
    } catch (fe) {
        if (t.__v = null, h || o != null) {
            for (t.__u |= h ? 160 : 128; l && l.nodeType === 8 && l.nextSibling;) l = l.nextSibling;
            o[o.indexOf(l)] = null, t.__e = l
        } else t.__e = r.__e, t.__k = r.__k;
        b.__e(fe, t, r)
    } else o == null && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = zi(r.__e, t, r, n, i, o, a, h, u);
    (d = b.diffed) && d(t)
}

function fn(e, t, r) {
    t.__d = void 0;
    for (var n = 0; n < r.length; n++) Zt(r[n], r[++n], r[++n]);
    b.__c && b.__c(t, e), e.some(function(i) {
        try {
            e = i.__h, i.__h = [], e.some(function(o) {
                o.call(i)
            })
        } catch (o) {
            b.__e(o, i.__v)
        }
    })
}

function zi(e, t, r, n, i, o, a, l, h) {
    var u, d, c, f, p, m, v, _ = r.props,
        g = t.props,
        y = t.type;
    if (y === "svg" ? i = "http://www.w3.org/2000/svg" : y === "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), o != null) {
        for (u = 0; u < o.length; u++)
            if ((p = o[u]) && "setAttribute" in p == !!y && (y ? p.localName === y : p.nodeType === 3)) {
                e = p, o[u] = null;
                break
            }
    }
    if (e == null) {
        if (y === null) return document.createTextNode(g);
        e = document.createElementNS(i, y, g.is && g), l && (b.__m && b.__m(t, o), l = !1), o = null
    }
    if (y === null) _ === g || l && e.data === g || (e.data = g);
    else {
        if (o = o && He.call(e.childNodes), _ = r.props || Me, !l && o != null)
            for (_ = {}, u = 0; u < e.attributes.length; u++) _[(p = e.attributes[u]).name] = p.value;
        for (u in _)
            if (p = _[u], u != "children") {
                if (u == "dangerouslySetInnerHTML") c = p;
                else if (!(u in g)) {
                    if (u == "value" && "defaultValue" in g || u == "checked" && "defaultChecked" in g) continue;
                    Ge(e, u, null, p, i)
                }
            }
        for (u in g) p = g[u], u == "children" ? f = p : u == "dangerouslySetInnerHTML" ? d = p : u == "value" ? m = p : u == "checked" ? v = p : l && typeof p != "function" || _[u] === p || Ge(e, u, p, _[u], i);
        if (d) l || c && (d.__html === c.__html || d.__html === e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
        else if (c && (e.innerHTML = ""), dn(e, at(f) ? f : [f], t, r, n, y === "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, o, a, o ? o[0] : r.__k && ge(r, 0), l, h), o != null)
            for (u = o.length; u--;) un(o[u]);
        l || (u = "value", y === "progress" && m == null ? e.removeAttribute("value") : m !== void 0 && (m !== e[u] || y === "progress" && !m || y === "option" && m !== _[u]) && Ge(e, u, m, _[u], i), u = "checked", v !== void 0 && v !== e[u] && Ge(e, u, v, _[u], i))
    }
    return e
}

function Zt(e, t, r) {
    try {
        if (typeof e == "function") {
            var n = typeof e.__u == "function";
            n && e.__u(), n && t == null || (e.__u = e(t))
        } else e.current = t
    } catch (i) {
        b.__e(i, r)
    }
}

function _n(e, t, r) {
    var n, i;
    if (b.unmount && b.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || Zt(n, null, t)), (n = e.__c) != null) {
        if (n.componentWillUnmount) try {
            n.componentWillUnmount()
        } catch (o) {
            b.__e(o, t)
        }
        n.base = n.__P = null
    }
    if (n = e.__k)
        for (i = 0; i < n.length; i++) n[i] && _n(n[i], t, r || typeof e.type != "function");
    r || un(e.__e), e.__c = e.__ = e.__e = e.__d = void 0
}

function Ai(e, t, r) {
    return this.constructor(e, r)
}

function ve(e, t, r) {
    var n, i, o, a;
    b.__ && b.__(e, t), i = (n = typeof r == "function") ? null : r && r.__k || t.__k, o = [], a = [], Gt(t, e = (!n && r || t).__k = D(A, null, [e]), i || Me, Me, t.namespaceURI, !n && r ? [r] : i ? null : t.firstChild ? He.call(t.childNodes) : null, o, !n && r ? r : i ? i.__e : t.firstChild, n, a), fn(o, e, a)
}

function mn(e, t) {
    ve(e, t, mn)
}

function Yt(e, t, r) {
    var n, i, o, a, l = Q({}, e.props);
    for (o in e.type && e.type.defaultProps && (a = e.type.defaultProps), t) o == "key" ? n = t[o] : o == "ref" ? i = t[o] : l[o] = t[o] === void 0 && a !== void 0 ? a[o] : t[o];
    return arguments.length > 2 && (l.children = arguments.length > 3 ? He.call(arguments, 2) : r), Le(e.type, l, n || e.key, i || e.ref, null)
}

function ct(e, t) {
    var r = {
        __c: t = "__cC" + cn++,
        __: e,
        Consumer: function(n, i) {
            return n.children(i)
        },
        Provider: function(n) {
            var i, o;
            return this.getChildContext || (i = new Set, (o = {})[t] = this, this.getChildContext = function() {
                return o
            }, this.componentWillUnmount = function() {
                i = null
            }, this.shouldComponentUpdate = function(a) {
                this.props.value !== a.value && i.forEach(function(l) {
                    l.__e = !0, Rt(l)
                })
            }, this.sub = function(a) {
                i.add(a);
                var l = a.componentWillUnmount;
                a.componentWillUnmount = function() {
                    i && i.delete(a), l && l.call(a)
                }
            }), n.children
        }
    };
    return r.Provider.__ = r.Consumer.contextType = r
}
He = ln.slice, b = {
    __e: function(e, t, r, n) {
        for (var i, o, a; t = t.__;)
            if ((i = t.__c) && !i.__) try {
                if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, n || {}), a = i.__d), a) return i.__E = i
            } catch (l) {
                e = l
            }
        throw e
    }
}, sn = 0, Vt = function(e) {
    return e != null && e.constructor == null
}, K.prototype.setState = function(e, t) {
    var r;
    r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Q({}, this.state), typeof e == "function" && (e = e(Q({}, r), this.props)), e && Q(r, e), e != null && this.__v && (t && this._sb.push(t), Rt(this))
}, K.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), Rt(this))
}, K.prototype.render = A, le = [], an = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $t = function(e, t) {
    return e.__v.__b - t.__v.__b
}, nt.__r = 0, Ut = 0, Tt = _r(!1), Pt = _r(!0), cn = 0;
var ae, P, bt, mr, ye = 0,
    gn = [],
    I = b,
    gr = I.__b,
    vr = I.__r,
    yr = I.diffed,
    wr = I.__c,
    br = I.unmount,
    xr = I.__;

function Ne(e, t) {
    I.__h && I.__h(P, e, ye || t), ye = 0;
    var r = P.__H || (P.__H = {
        __: [],
        __h: []
    });
    return e >= r.__.length && r.__.push({}), r.__[e]
}

function M(e) {
    return ye = 1, qt(wn, e)
}

function qt(e, t, r) {
    var n = Ne(ae++, 2);
    if (n.t = e, !n.__c && (n.__ = [r ? r(t) : wn(void 0, t), function(l) {
            var h = n.__N ? n.__N[0] : n.__[0],
                u = n.t(h, l);
            h !== u && (n.__N = [u, n.__[1]], n.__c.setState({}))
        }], n.__c = P, !P.u)) {
        var i = function(l, h, u) {
            if (!n.__c.__H) return !0;
            var d = n.__c.__H.__.filter(function(f) {
                return !!f.__c
            });
            if (d.every(function(f) {
                    return !f.__N
                })) return !o || o.call(this, l, h, u);
            var c = !1;
            return d.forEach(function(f) {
                if (f.__N) {
                    var p = f.__[0];
                    f.__ = f.__N, f.__N = void 0, p !== f.__[0] && (c = !0)
                }
            }), !(!c && n.__c.props === l) && (!o || o.call(this, l, h, u))
        };
        P.u = !0;
        var o = P.shouldComponentUpdate,
            a = P.componentWillUpdate;
        P.componentWillUpdate = function(l, h, u) {
            if (this.__e) {
                var d = o;
                o = void 0, i(l, h, u), o = d
            }
            a && a.call(this, l, h, u)
        }, P.shouldComponentUpdate = i
    }
    return n.__N || n.__
}

function B(e, t) {
    var r = Ne(ae++, 3);
    !I.__s && Jt(r.__H, t) && (r.__ = e, r.i = t, P.__H.__h.push(r))
}

function pe(e, t) {
    var r = Ne(ae++, 4);
    !I.__s && Jt(r.__H, t) && (r.__ = e, r.i = t, P.__h.push(r))
}

function H(e) {
    return ye = 5, te(function() {
        return {
            current: e
        }
    }, [])
}

function Kt(e, t, r) {
    ye = 6, pe(function() {
        return typeof e == "function" ? (e(t()), function() {
            return e(null)
        }) : e ? (e.current = t(), function() {
            return e.current = null
        }) : void 0
    }, r == null ? r : r.concat(e))
}

function te(e, t) {
    var r = Ne(ae++, 7);
    return Jt(r.__H, t) && (r.__ = e(), r.__H = t, r.__h = e), r.__
}

function U(e, t) {
    return ye = 8, te(function() {
        return e
    }, t)
}

function We(e) {
    var t = P.context[e.__c],
        r = Ne(ae++, 9);
    return r.c = e, t ? (r.__ == null && (r.__ = !0, t.sub(P)), t.props.value) : e.__
}

function vn(e, t) {
    I.useDebugValue && I.useDebugValue(t ? t(e) : e)
}

function yn() {
    var e = Ne(ae++, 11);
    if (!e.__) {
        for (var t = P.__v; t !== null && !t.__m && t.__ !== null;) t = t.__;
        var r = t.__m || (t.__m = [0, 0]);
        e.__ = "P" + r[0] + "-" + r[1]++
    }
    return e.__
}

function Mi() {
    for (var e; e = gn.shift();)
        if (e.__P && e.__H) try {
            e.__H.__h.forEach(Ke), e.__H.__h.forEach(It), e.__H.__h = []
        } catch (t) {
            e.__H.__h = [], I.__e(t, e.__v)
        }
}
I.__b = function(e) {
    P = null, gr && gr(e)
}, I.__ = function(e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), xr && xr(e, t)
}, I.__r = function(e) {
    vr && vr(e), ae = 0;
    var t = (P = e.__c).__H;
    t && (bt === P ? (t.__h = [], P.__h = [], t.__.forEach(function(r) {
        r.__N && (r.__ = r.__N), r.i = r.__N = void 0
    })) : (t.__h.forEach(Ke), t.__h.forEach(It), t.__h = [], ae = 0)), bt = P
}, I.diffed = function(e) {
    yr && yr(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (gn.push(t) !== 1 && mr === I.requestAnimationFrame || ((mr = I.requestAnimationFrame) || Di)(Mi)), t.__H.__.forEach(function(r) {
        r.i && (r.__H = r.i), r.i = void 0
    })), bt = P = null
}, I.__c = function(e, t) {
    t.some(function(r) {
        try {
            r.__h.forEach(Ke), r.__h = r.__h.filter(function(n) {
                return !n.__ || It(n)
            })
        } catch (n) {
            t.some(function(i) {
                i.__h && (i.__h = [])
            }), t = [], I.__e(n, r.__v)
        }
    }), wr && wr(e, t)
}, I.unmount = function(e) {
    br && br(e);
    var t, r = e.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            Ke(n)
        } catch (i) {
            t = i
        }
    }), r.__H = void 0, t && I.__e(t, r.__v))
};
var kr = typeof requestAnimationFrame == "function";

function Di(e) {
    var t, r = function() {
            clearTimeout(n), kr && cancelAnimationFrame(t), setTimeout(e)
        },
        n = setTimeout(r, 100);
    kr && (t = requestAnimationFrame(r))
}

function Ke(e) {
    var t = P,
        r = e.__c;
    typeof r == "function" && (e.__c = void 0, r()), P = t
}

function It(e) {
    var t = P;
    e.__c = e.__(), P = t
}

function Jt(e, t) {
    return !e || e.length !== t.length || t.some(function(r, n) {
        return r !== e[n]
    })
}

function wn(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Lt(e, t) {
    for (var r in e)
        if (r !== "__source" && !(r in t)) return !0;
    for (var n in t)
        if (n !== "__source" && e[n] !== t[n]) return !0;
    return !1
}

function zt(e, t) {
    this.props = e, this.context = t
}

function Oi(e, t) {
    function r(i) {
        var o = this.props.ref,
            a = o == i.ref;
        return !a && o && (o.call ? o(null) : o.current = null), t ? !t(this.props, i) || !a : Lt(this.props, i)
    }

    function n(i) {
        return this.shouldComponentUpdate = r, D(e, i)
    }
    return n.displayName = "Memo(" + (e.displayName || e.name) + ")", n.prototype.isReactComponent = !0, n.__f = !0, n
}(zt.prototype = new K).isPureReactComponent = !0, zt.prototype.shouldComponentUpdate = function(e, t) {
    return Lt(this.props, e) || Lt(this.state, t)
};
var Sr = b.__b;
b.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Sr && Sr(e)
};
var Hi = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function bn(e) {
    function t(r) {
        if (!("ref" in r)) return e(r, null);
        var n = r.ref;
        delete r.ref;
        var i = e(r, n);
        return r.ref = n, i
    }
    return t.$$typeof = Hi, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
}
var Nr = function(e, t) {
        return e == null ? null : ee(ee(e).map(t))
    },
    Wi = {
        map: Nr,
        forEach: Nr,
        count: function(e) {
            return e ? ee(e).length : 0
        },
        only: function(e) {
            var t = ee(e);
            if (t.length !== 1) throw "Children.only";
            return t[0]
        },
        toArray: ee
    },
    Bi = b.__e;
b.__e = function(e, t, r, n) {
    if (e.then) {
        for (var i, o = t; o = o.__;)
            if ((i = o.__c) && i.__c) return t.__e == null && (t.__e = r.__e, t.__k = r.__k), i.__c(e, t)
    }
    Bi(e, t, r, n)
};
var Er = b.unmount;

function xn(e, t, r) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
        typeof n.__c == "function" && n.__c()
    }), e.__c.__H = null), (e = function(n, i) {
        for (var o in i) n[o] = i[o];
        return n
    }({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
        return xn(n, t, r)
    })), e
}

function kn(e, t, r) {
    return e && r && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
        return kn(n, t, r)
    }), e.__c && e.__c.__P === t && (e.__e && r.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = r)), e
}

function Je() {
    this.__u = 0, this.t = null, this.__b = null
}

function Sn(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e)
}

function ji(e) {
    var t, r, n;

    function i(o) {
        if (t || (t = e()).then(function(a) {
                r = a.default || a
            }, function(a) {
                n = a
            }), n) throw n;
        if (!r) throw t;
        return D(r, o)
    }
    return i.displayName = "Lazy", i.__f = !0, i
}

function Pe() {
    this.u = null, this.o = null
}
b.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Er && Er(e)
}, (Je.prototype = new K).__c = function(e, t) {
    var r = t.__c,
        n = this;
    n.t == null && (n.t = []), n.t.push(r);
    var i = Sn(n.__v),
        o = !1,
        a = function() {
            o || (o = !0, r.__R = null, i ? i(l) : l())
        };
    r.__R = a;
    var l = function() {
        if (!--n.__u) {
            if (n.state.__a) {
                var h = n.state.__a;
                n.__v.__k[0] = kn(h, h.__c.__P, h.__c.__O)
            }
            var u;
            for (n.setState({
                    __a: n.__b = null
                }); u = n.t.pop();) u.forceUpdate()
        }
    };
    n.__u++ || 32 & t.__u || n.setState({
        __a: n.__b = n.__v.__k[0]
    }), e.then(a, a)
}, Je.prototype.componentWillUnmount = function() {
    this.t = []
}, Je.prototype.render = function(e, t) {
    if (this.__b) {
        if (this.__v.__k) {
            var r = document.createElement("div"),
                n = this.__v.__k[0].__c;
            this.__v.__k[0] = xn(this.__b, r, n.__O = n.__P)
        }
        this.__b = null
    }
    var i = t.__a && D(A, null, e.fallback);
    return i && (i.__u &= -33), [D(A, null, t.__a ? null : e.children), i]
};
var Cr = function(e, t, r) {
    if (++r[1] === r[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
        for (r = e.u; r;) {
            for (; r.length > 3;) r.pop()();
            if (r[1] < r[0]) break;
            e.u = r = r[2]
        }
};

function Fi(e) {
    return this.getChildContext = function() {
        return e.context
    }, e.children
}

function Vi(e) {
    var t = this,
        r = e.i;
    t.componentWillUnmount = function() {
        ve(null, t.l), t.l = null, t.i = null
    }, t.i && t.i !== r && t.componentWillUnmount(), t.l || (t.i = r, t.l = {
        nodeType: 1,
        parentNode: r,
        childNodes: [],
        contains: function() {
            return !0
        },
        appendChild: function(n) {
            this.childNodes.push(n), t.i.appendChild(n)
        },
        insertBefore: function(n, i) {
            this.childNodes.push(n), t.i.appendChild(n)
        },
        removeChild: function(n) {
            this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.i.removeChild(n)
        }
    }), ve(D(Fi, {
        context: t.context
    }, e.__v), t.l)
}

function Ui(e, t) {
    var r = D(Vi, {
        __v: e,
        i: t
    });
    return r.containerInfo = t, r
}(Pe.prototype = new K).__a = function(e) {
    var t = this,
        r = Sn(t.__v),
        n = t.o.get(e);
    return n[0]++,
        function(i) {
            var o = function() {
                t.props.revealOrder ? (n.push(i), Cr(t, e, n)) : i()
            };
            r ? r(o) : o()
        }
}, Pe.prototype.render = function(e) {
    this.u = null, this.o = new Map;
    var t = ee(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var r = t.length; r--;) this.o.set(t[r], this.u = [1, 0, this.u]);
    return e.children
}, Pe.prototype.componentDidUpdate = Pe.prototype.componentDidMount = function() {
    var e = this;
    this.o.forEach(function(t, r) {
        Cr(e, r, t)
    })
};
var Nn = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103,
    Gi = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Zi = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    Yi = /[A-Z0-9]/g,
    qi = typeof document < "u",
    Ki = function(e) {
        return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e)
    };

function Ji(e, t, r) {
    return t.__k == null && (t.textContent = ""), ve(e, t), typeof r == "function" && r(), e ? e.__c : null
}

function Xi(e, t, r) {
    return mn(e, t), typeof r == "function" && r(), e ? e.__c : null
}
K.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(K.prototype, e, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + e]
        },
        set: function(t) {
            Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    })
});
var $r = b.event;

function Qi() {}

function eo() {
    return this.cancelBubble
}

function to() {
    return this.defaultPrevented
}
b.event = function(e) {
    return $r && (e = $r(e)), e.persist = Qi, e.isPropagationStopped = eo, e.isDefaultPrevented = to, e.nativeEvent = e
};
var Xt, ro = {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this.class
        }
    },
    Tr = b.vnode;
b.vnode = function(e) {
    typeof e.type == "string" && function(t) {
        var r = t.props,
            n = t.type,
            i = {},
            o = n.indexOf("-") === -1;
        for (var a in r) {
            var l = r[a];
            if (!(a === "value" && "defaultValue" in r && l == null || qi && a === "children" && n === "noscript" || a === "class" || a === "className")) {
                var h = a.toLowerCase();
                a === "defaultValue" && "value" in r && r.value == null ? a = "value" : a === "download" && l === !0 ? l = "" : h === "translate" && l === "no" ? l = !1 : h[0] === "o" && h[1] === "n" ? h === "ondoubleclick" ? a = "ondblclick" : h !== "onchange" || n !== "input" && n !== "textarea" || Ki(r.type) ? h === "onfocus" ? a = "onfocusin" : h === "onblur" ? a = "onfocusout" : Zi.test(a) && (a = h) : h = a = "oninput" : o && Gi.test(a) ? a = a.replace(Yi, "-$&").toLowerCase() : l === null && (l = void 0), h === "oninput" && i[a = h] && (a = "oninputCapture"), i[a] = l
            }
        }
        n == "select" && i.multiple && Array.isArray(i.value) && (i.value = ee(r.children).forEach(function(u) {
            u.props.selected = i.value.indexOf(u.props.value) != -1
        })), n == "select" && i.defaultValue != null && (i.value = ee(r.children).forEach(function(u) {
            u.props.selected = i.multiple ? i.defaultValue.indexOf(u.props.value) != -1 : i.defaultValue == u.props.value
        })), r.class && !r.className ? (i.class = r.class, Object.defineProperty(i, "className", ro)) : (r.className && !r.class || r.class && r.className) && (i.class = i.className = r.className), t.props = i
    }(e), e.$$typeof = Nn, Tr && Tr(e)
};
var Pr = b.__r;
b.__r = function(e) {
    Pr && Pr(e), Xt = e.__c
};
var Rr = b.diffed;
b.diffed = function(e) {
    Rr && Rr(e);
    var t = e.props,
        r = e.__e;
    r != null && e.type === "textarea" && "value" in t && t.value !== r.value && (r.value = t.value == null ? "" : t.value), Xt = null
};
var no = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function(e) {
                return Xt.__n[e.__c].props.value
            },
            useCallback: U,
            useContext: We,
            useDebugValue: vn,
            useDeferredValue: $n,
            useEffect: B,
            useId: yn,
            useImperativeHandle: Kt,
            useInsertionEffect: Pn,
            useLayoutEffect: pe,
            useMemo: te,
            useReducer: qt,
            useRef: H,
            useState: M,
            useSyncExternalStore: Rn,
            useTransition: Tn
        }
    }
};

function io(e) {
    return D.bind(null, e)
}

function lt(e) {
    return !!e && e.$$typeof === Nn
}

function oo(e) {
    return lt(e) && e.type === A
}

function so(e) {
    return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(")
}

function ao(e) {
    return lt(e) ? Yt.apply(null, arguments) : e
}

function co(e) {
    return !!e.__k && (ve(null, e), !0)
}

function lo(e) {
    return e && (e.base || e.nodeType === 1 && e) || null
}
var uo = function(e, t) {
        return e(t)
    },
    ho = function(e, t) {
        return e(t)
    },
    En = A;

function Cn(e) {
    e()
}

function $n(e) {
    return e
}

function Tn() {
    return [!1, Cn]
}
var Pn = pe,
    po = lt;

function Rn(e, t) {
    var r = t(),
        n = M({
            h: {
                __: r,
                v: t
            }
        }),
        i = n[0].h,
        o = n[1];
    return pe(function() {
        i.__ = r, i.v = t, xt(i) && o({
            h: i
        })
    }, [e, r, t]), B(function() {
        return xt(i) && o({
            h: i
        }), e(function() {
            xt(i) && o({
                h: i
            })
        })
    }, [e]), r
}

function xt(e) {
    var t, r, n = e.v,
        i = e.__;
    try {
        var o = n();
        return !((t = i) === (r = o) && (t !== 0 || 1 / t == 1 / r) || t != t && r != r)
    } catch {
        return !0
    }
}
var De = {
        useState: M,
        useId: yn,
        useReducer: qt,
        useEffect: B,
        useLayoutEffect: pe,
        useInsertionEffect: Pn,
        useTransition: Tn,
        useDeferredValue: $n,
        useSyncExternalStore: Rn,
        startTransition: Cn,
        useRef: H,
        useImperativeHandle: Kt,
        useMemo: te,
        useCallback: U,
        useContext: We,
        useDebugValue: vn,
        version: "18.3.1",
        Children: Wi,
        render: Ji,
        hydrate: Xi,
        unmountComponentAtNode: co,
        createPortal: Ui,
        createElement: D,
        createContext: ct,
        createFactory: io,
        cloneElement: ao,
        createRef: Ri,
        Fragment: A,
        isValidElement: lt,
        isElement: po,
        isFragment: oo,
        isMemo: so,
        findDOMNode: lo,
        Component: K,
        PureComponent: zt,
        memo: Oi,
        forwardRef: bn,
        flushSync: ho,
        unstable_batchedUpdates: uo,
        StrictMode: En,
        Suspense: Je,
        SuspenseList: Pe,
        lazy: ji,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: no
    },
    T = "-ms-",
    ze = "-moz-",
    C = "-webkit-",
    In = "comm",
    ut = "rule",
    Qt = "decl",
    fo = "@import",
    Ln = "@keyframes",
    _o = "@layer",
    zn = Math.abs,
    er = String.fromCharCode,
    At = Object.assign;

function mo(e, t) {
    return z(e, 0) ^ 45 ? (((t << 2 ^ z(e, 0)) << 2 ^ z(e, 1)) << 2 ^ z(e, 2)) << 2 ^ z(e, 3) : 0
}

function An(e) {
    return e.trim()
}

function X(e, t) {
    return (e = t.exec(e)) ? e[0] : e
}

function x(e, t, r) {
    return e.replace(t, r)
}

function Xe(e, t, r) {
    return e.indexOf(t, r)
}

function z(e, t) {
    return e.charCodeAt(t) | 0
}

function we(e, t, r) {
    return e.slice(t, r)
}

function q(e) {
    return e.length
}

function Mn(e) {
    return e.length
}

function Re(e, t) {
    return t.push(e), e
}

function go(e, t) {
    return e.map(t).join("")
}

function Ir(e, t) {
    return e.filter(function(r) {
        return !X(r, t)
    })
}
var ht = 1,
    be = 1,
    Dn = 0,
    F = 0,
    L = 0,
    Ee = "";

function dt(e, t, r, n, i, o, a, l) {
    return {
        value: e,
        root: t,
        parent: r,
        type: n,
        props: i,
        children: o,
        line: ht,
        column: be,
        length: a,
        return: "",
        siblings: l
    }
}

function se(e, t) {
    return At(dt("", null, null, "", null, null, 0, e.siblings), e, {
        length: -e.length
    }, t)
}

function _e(e) {
    for (; e.root;) e = se(e.root, {
        children: [e]
    });
    Re(e, e.siblings)
}

function vo() {
    return L
}

function yo() {
    return L = F > 0 ? z(Ee, --F) : 0, be--, L === 10 && (be = 1, ht--), L
}

function G() {
    return L = F < Dn ? z(Ee, F++) : 0, be++, L === 10 && (be = 1, ht++), L
}

function he() {
    return z(Ee, F)
}

function Qe() {
    return F
}

function pt(e, t) {
    return we(Ee, e, t)
}

function Mt(e) {
    switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1
    }
    return 0
}

function wo(e) {
    return ht = be = 1, Dn = q(Ee = e), F = 0, []
}

function bo(e) {
    return Ee = "", e
}

function kt(e) {
    return An(pt(F - 1, Dt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}

function xo(e) {
    for (;
        (L = he()) && L < 33;) G();
    return Mt(e) > 2 || Mt(L) > 3 ? "" : " "
}

function ko(e, t) {
    for (; --t && G() && !(L < 48 || L > 102 || L > 57 && L < 65 || L > 70 && L < 97););
    return pt(e, Qe() + (t < 6 && he() == 32 && G() == 32))
}

function Dt(e) {
    for (; G();) switch (L) {
        case e:
            return F;
        case 34:
        case 39:
            e !== 34 && e !== 39 && Dt(L);
            break;
        case 40:
            e === 41 && Dt(e);
            break;
        case 92:
            G();
            break
    }
    return F
}

function So(e, t) {
    for (; G() && e + L !== 57;)
        if (e + L === 84 && he() === 47) break;
    return "/*" + pt(t, F - 1) + "*" + er(e === 47 ? e : G())
}

function No(e) {
    for (; !Mt(he());) G();
    return pt(e, F)
}

function Eo(e) {
    return bo(et("", null, null, null, [""], e = wo(e), 0, [0], e))
}

function et(e, t, r, n, i, o, a, l, h) {
    for (var u = 0, d = 0, c = a, f = 0, p = 0, m = 0, v = 1, _ = 1, g = 1, y = 0, S = "", N = i, $ = o, E = n, k = S; _;) switch (m = y, y = G()) {
        case 40:
            if (m != 108 && z(k, c - 1) == 58) {
                Xe(k += x(kt(y), "&", "&\f"), "&\f", zn(u ? l[u - 1] : 0)) != -1 && (g = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            k += kt(y);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            k += xo(m);
            break;
        case 92:
            k += ko(Qe() - 1, 7);
            continue;
        case 47:
            switch (he()) {
                case 42:
                case 47:
                    Re(Co(So(G(), Qe()), t, r, h), h);
                    break;
                default:
                    k += "/"
            }
            break;
        case 123 * v:
            l[u++] = q(k) * g;
        case 125 * v:
        case 59:
        case 0:
            switch (y) {
                case 0:
                case 125:
                    _ = 0;
                case 59 + d:
                    g == -1 && (k = x(k, /\f/g, "")), p > 0 && q(k) - c && Re(p > 32 ? zr(k + ";", n, r, c - 1, h) : zr(x(k, " ", "") + ";", n, r, c - 2, h), h);
                    break;
                case 59:
                    k += ";";
                default:
                    if (Re(E = Lr(k, t, r, u, d, i, l, S, N = [], $ = [], c, o), o), y === 123)
                        if (d === 0) et(k, t, E, E, N, o, c, l, $);
                        else switch (f === 99 && z(k, 3) === 110 ? 100 : f) {
                            case 100:
                            case 108:
                            case 109:
                            case 115:
                                et(e, E, E, n && Re(Lr(e, E, E, 0, 0, i, l, S, i, N = [], c, $), $), i, $, c, l, n ? N : $);
                                break;
                            default:
                                et(k, E, E, E, [""], $, 0, l, $)
                        }
            }
            u = d = p = 0, v = g = 1, S = k = "", c = a;
            break;
        case 58:
            c = 1 + q(k), p = m;
        default:
            if (v < 1) {
                if (y == 123) --v;
                else if (y == 125 && v++ == 0 && yo() == 125) continue
            }
            switch (k += er(y), y * v) {
                case 38:
                    g = d > 0 ? 1 : (k += "\f", -1);
                    break;
                case 44:
                    l[u++] = (q(k) - 1) * g, g = 1;
                    break;
                case 64:
                    he() === 45 && (k += kt(G())), f = he(), d = c = q(S = k += No(Qe())), y++;
                    break;
                case 45:
                    m === 45 && q(k) == 2 && (v = 0)
            }
    }
    return o
}

function Lr(e, t, r, n, i, o, a, l, h, u, d, c) {
    for (var f = i - 1, p = i === 0 ? o : [""], m = Mn(p), v = 0, _ = 0, g = 0; v < n; ++v)
        for (var y = 0, S = we(e, f + 1, f = zn(_ = a[v])), N = e; y < m; ++y)(N = An(_ > 0 ? p[y] + " " + S : x(S, /&\f/g, p[y]))) && (h[g++] = N);
    return dt(e, t, r, i === 0 ? ut : l, h, u, d, c)
}

function Co(e, t, r, n) {
    return dt(e, t, r, In, er(vo()), we(e, 2, -2), 0, n)
}

function zr(e, t, r, n, i) {
    return dt(e, t, r, Qt, we(e, 0, n), we(e, n + 1, -1), n, i)
}

function On(e, t, r) {
    switch (mo(e, t)) {
        case 5103:
            return C + "print-" + e + e;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return C + e + e;
        case 4789:
            return ze + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return C + e + ze + e + T + e + e;
        case 5936:
            switch (z(e, t + 11)) {
                case 114:
                    return C + e + T + x(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                case 108:
                    return C + e + T + x(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                case 45:
                    return C + e + T + x(e, /[svh]\w+-[tblr]{2}/, "lr") + e
            }
        case 6828:
        case 4268:
        case 2903:
            return C + e + T + e + e;
        case 6165:
            return C + e + T + "flex-" + e + e;
        case 5187:
            return C + e + x(e, /(\w+).+(:[^]+)/, C + "box-$1$2" + T + "flex-$1$2") + e;
        case 5443:
            return C + e + T + "flex-item-" + x(e, /flex-|-self/g, "") + (X(e, /flex-|baseline/) ? "" : T + "grid-row-" + x(e, /flex-|-self/g, "")) + e;
        case 4675:
            return C + e + T + "flex-line-pack" + x(e, /align-content|flex-|-self/g, "") + e;
        case 5548:
            return C + e + T + x(e, "shrink", "negative") + e;
        case 5292:
            return C + e + T + x(e, "basis", "preferred-size") + e;
        case 6060:
            return C + "box-" + x(e, "-grow", "") + C + e + T + x(e, "grow", "positive") + e;
        case 4554:
            return C + x(e, /([^-])(transform)/g, "$1" + C + "$2") + e;
        case 6187:
            return x(x(x(e, /(zoom-|grab)/, C + "$1"), /(image-set)/, C + "$1"), e, "") + e;
        case 5495:
        case 3959:
            return x(e, /(image-set\([^]*)/, C + "$1$`$1");
        case 4968:
            return x(x(e, /(.+:)(flex-)?(.*)/, C + "box-pack:$3" + T + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + C + e + e;
        case 4200:
            if (!X(e, /flex-|baseline/)) return T + "grid-column-align" + we(e, t) + e;
            break;
        case 2592:
        case 3360:
            return T + x(e, "template-", "") + e;
        case 4384:
        case 3616:
            return r && r.some(function(n, i) {
                return t = i, X(n.props, /grid-\w+-end/)
            }) ? ~Xe(e + (r = r[t].value), "span", 0) ? e : T + x(e, "-start", "") + e + T + "grid-row-span:" + (~Xe(r, "span", 0) ? X(r, /\d+/) : +X(r, /\d+/) - +X(e, /\d+/)) + ";" : T + x(e, "-start", "") + e;
        case 4896:
        case 4128:
            return r && r.some(function(n) {
                return X(n.props, /grid-\w+-start/)
            }) ? e : T + x(x(e, "-end", "-span"), "span ", "") + e;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return x(e, /(.+)-inline(.+)/, C + "$1$2") + e;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (q(e) - 1 - t > 6) switch (z(e, t + 1)) {
                case 109:
                    if (z(e, t + 4) !== 45) break;
                case 102:
                    return x(e, /(.+:)(.+)-([^]+)/, "$1" + C + "$2-$3$1" + ze + (z(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
                case 115:
                    return ~Xe(e, "stretch", 0) ? On(x(e, "stretch", "fill-available"), t, r) + e : e
            }
            break;
        case 5152:
        case 5920:
            return x(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, i, o, a, l, h, u) {
                return T + i + ":" + o + u + (a ? T + i + "-span:" + (l ? h : +h - +o) + u : "") + e
            });
        case 4949:
            if (z(e, t + 6) === 121) return x(e, ":", ":" + C) + e;
            break;
        case 6444:
            switch (z(e, z(e, 14) === 45 ? 18 : 11)) {
                case 120:
                    return x(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + C + (z(e, 14) === 45 ? "inline-" : "") + "box$3$1" + C + "$2$3$1" + T + "$2box$3") + e;
                case 100:
                    return x(e, ":", ":" + T) + e
            }
            break;
        case 5719:
        case 2647:
        case 2135:
        case 3927:
        case 2391:
            return x(e, "scroll-", "scroll-snap-") + e
    }
    return e
}

function it(e, t) {
    for (var r = "", n = 0; n < e.length; n++) r += t(e[n], n, e, t) || "";
    return r
}

function $o(e, t, r, n) {
    switch (e.type) {
        case _o:
            if (e.children.length) break;
        case fo:
        case Qt:
            return e.return = e.return || e.value;
        case In:
            return "";
        case Ln:
            return e.return = e.value + "{" + it(e.children, n) + "}";
        case ut:
            if (!q(e.value = e.props.join(","))) return ""
    }
    return q(r = it(e.children, n)) ? e.return = e.value + "{" + r + "}" : ""
}

function To(e) {
    var t = Mn(e);
    return function(r, n, i, o) {
        for (var a = "", l = 0; l < t; l++) a += e[l](r, n, i, o) || "";
        return a
    }
}

function Po(e) {
    return function(t) {
        t.root || (t = t.return) && e(t)
    }
}

function Ro(e, t, r, n) {
    if (e.length > -1 && !e.return) switch (e.type) {
        case Qt:
            e.return = On(e.value, e.length, r);
            return;
        case Ln:
            return it([se(e, {
                value: x(e.value, "@", "@" + C)
            })], n);
        case ut:
            if (e.length) return go(r = e.props, function(i) {
                switch (X(i, n = /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                        _e(se(e, {
                            props: [x(i, /:(read-\w+)/, ":" + ze + "$1")]
                        })), _e(se(e, {
                            props: [i]
                        })), At(e, {
                            props: Ir(r, n)
                        });
                        break;
                    case "::placeholder":
                        _e(se(e, {
                            props: [x(i, /:(plac\w+)/, ":" + C + "input-$1")]
                        })), _e(se(e, {
                            props: [x(i, /:(plac\w+)/, ":" + ze + "$1")]
                        })), _e(se(e, {
                            props: [x(i, /:(plac\w+)/, T + "input-$1")]
                        })), _e(se(e, {
                            props: [i]
                        })), At(e, {
                            props: Ir(r, n)
                        });
                        break
                }
                return ""
            })
    }
}
var Io = {
        animationIterationCount: 1,
        aspectRatio: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
    },
    W = {},
    xe = typeof process < "u" && W !== void 0 && (W.REACT_APP_SC_ATTR || W.SC_ATTR) || "data-styled",
    Hn = "active",
    Wn = "data-styled-version",
    ft = "6.1.13",
    tr = `/*!sc*/
`,
    ot = typeof window < "u" && "HTMLElement" in window,
    Lo = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && W !== void 0 && W.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && W.REACT_APP_SC_DISABLE_SPEEDY !== "" ? W.REACT_APP_SC_DISABLE_SPEEDY !== "false" && W.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && W !== void 0 && W.SC_DISABLE_SPEEDY !== void 0 && W.SC_DISABLE_SPEEDY !== "" && W.SC_DISABLE_SPEEDY !== "false" && W.SC_DISABLE_SPEEDY),
    _t = Object.freeze([]),
    ke = Object.freeze({});

function zo(e, t, r) {
    return r === void 0 && (r = ke), e.theme !== r.theme && e.theme || t || r.theme
}
var Bn = new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]),
    Ao = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    Mo = /(^-|-$)/g;

function Ar(e) {
    return e.replace(Ao, "-").replace(Mo, "")
}
var Do = /(a)(d)/gi,
    Ze = 52,
    Mr = function(e) {
        return String.fromCharCode(e + (e > 25 ? 39 : 97))
    };

function Ot(e) {
    var t, r = "";
    for (t = Math.abs(e); t > Ze; t = t / Ze | 0) r = Mr(t % Ze) + r;
    return (Mr(t % Ze) + r).replace(Do, "$1-$2")
}
var St, jn = 5381,
    me = function(e, t) {
        for (var r = t.length; r;) e = 33 * e ^ t.charCodeAt(--r);
        return e
    },
    Fn = function(e) {
        return me(jn, e)
    };

function Vn(e) {
    return Ot(Fn(e) >>> 0)
}

function Oo(e) {
    return e.displayName || e.name || "Component"
}

function Nt(e) {
    return typeof e == "string" && !0
}
var Un = typeof Symbol == "function" && Symbol.for,
    Gn = Un ? Symbol.for("react.memo") : 60115,
    Ho = Un ? Symbol.for("react.forward_ref") : 60112,
    Wo = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    },
    Bo = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    },
    Zn = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    },
    jo = ((St = {})[Ho] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    }, St[Gn] = Zn, St);

function Dr(e) {
    return ("type" in (t = e) && t.type.$$typeof) === Gn ? Zn : "$$typeof" in e ? jo[e.$$typeof] : Wo;
    var t
}
var Fo = Object.defineProperty,
    Vo = Object.getOwnPropertyNames,
    Or = Object.getOwnPropertySymbols,
    Uo = Object.getOwnPropertyDescriptor,
    Go = Object.getPrototypeOf,
    Hr = Object.prototype;

function Yn(e, t, r) {
    if (typeof t != "string") {
        if (Hr) {
            var n = Go(t);
            n && n !== Hr && Yn(e, n, r)
        }
        var i = Vo(t);
        Or && (i = i.concat(Or(t)));
        for (var o = Dr(e), a = Dr(t), l = 0; l < i.length; ++l) {
            var h = i[l];
            if (!(h in Bo || r && r[h] || a && h in a || o && h in o)) {
                var u = Uo(t, h);
                try {
                    Fo(e, h, u)
                } catch {}
            }
        }
    }
    return e
}

function Se(e) {
    return typeof e == "function"
}

function rr(e) {
    return typeof e == "object" && "styledComponentId" in e
}

function ue(e, t) {
    return e && t ? "".concat(e, " ").concat(t) : e || t || ""
}

function Ht(e, t) {
    if (e.length === 0) return "";
    for (var r = e[0], n = 1; n < e.length; n++) r += e[n];
    return r
}

function Oe(e) {
    return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof)
}

function Wt(e, t, r) {
    if (r === void 0 && (r = !1), !r && !Oe(e) && !Array.isArray(e)) return t;
    if (Array.isArray(t))
        for (var n = 0; n < t.length; n++) e[n] = Wt(e[n], t[n]);
    else if (Oe(t))
        for (var n in t) e[n] = Wt(e[n], t[n]);
    return e
}

function nr(e, t) {
    Object.defineProperty(e, "toString", {
        value: t
    })
}

function Be(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""))
}
var Zo = function() {
        function e(t) {
            this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t
        }
        return e.prototype.indexOfGroup = function(t) {
            for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
            return r
        }, e.prototype.insertRules = function(t, r) {
            if (t >= this.groupSizes.length) {
                for (var n = this.groupSizes, i = n.length, o = i; t >= o;)
                    if ((o <<= 1) < 0) throw Be(16, "".concat(t));
                this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
                for (var a = i; a < o; a++) this.groupSizes[a] = 0
            }
            for (var l = this.indexOfGroup(t + 1), h = (a = 0, r.length); a < h; a++) this.tag.insertRule(l, r[a]) && (this.groupSizes[t]++, l++)
        }, e.prototype.clearGroup = function(t) {
            if (t < this.length) {
                var r = this.groupSizes[t],
                    n = this.indexOfGroup(t),
                    i = n + r;
                this.groupSizes[t] = 0;
                for (var o = n; o < i; o++) this.tag.deleteRule(n)
            }
        }, e.prototype.getGroup = function(t) {
            var r = "";
            if (t >= this.length || this.groupSizes[t] === 0) return r;
            for (var n = this.groupSizes[t], i = this.indexOfGroup(t), o = i + n, a = i; a < o; a++) r += "".concat(this.tag.getRule(a)).concat(tr);
            return r
        }, e
    }(),
    tt = new Map,
    st = new Map,
    rt = 1,
    Ye = function(e) {
        if (tt.has(e)) return tt.get(e);
        for (; st.has(rt);) rt++;
        var t = rt++;
        return tt.set(e, t), st.set(t, e), t
    },
    Yo = function(e, t) {
        rt = t + 1, tt.set(e, t), st.set(t, e)
    },
    qo = "style[".concat(xe, "][").concat(Wn, '="').concat(ft, '"]'),
    Ko = new RegExp("^".concat(xe, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
    Jo = function(e, t, r) {
        for (var n, i = r.split(","), o = 0, a = i.length; o < a; o++)(n = i[o]) && e.registerName(t, n)
    },
    Xo = function(e, t) {
        for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(tr), i = [], o = 0, a = n.length; o < a; o++) {
            var l = n[o].trim();
            if (l) {
                var h = l.match(Ko);
                if (h) {
                    var u = 0 | parseInt(h[1], 10),
                        d = h[2];
                    u !== 0 && (Yo(d, u), Jo(e, d, h[3]), e.getTag().insertRules(u, i)), i.length = 0
                } else i.push(l)
            }
        }
    },
    Wr = function(e) {
        for (var t = document.querySelectorAll(qo), r = 0, n = t.length; r < n; r++) {
            var i = t[r];
            i && i.getAttribute(xe) !== Hn && (Xo(e, i), i.parentNode && i.parentNode.removeChild(i))
        }
    };

function Qo() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null
}
var qn = function(e) {
        var t = document.head,
            r = e || t,
            n = document.createElement("style"),
            i = function(l) {
                var h = Array.from(l.querySelectorAll("style[".concat(xe, "]")));
                return h[h.length - 1]
            }(r),
            o = i !== void 0 ? i.nextSibling : null;
        n.setAttribute(xe, Hn), n.setAttribute(Wn, ft);
        var a = Qo();
        return a && n.setAttribute("nonce", a), r.insertBefore(n, o), n
    },
    es = function() {
        function e(t) {
            this.element = qn(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
                if (r.sheet) return r.sheet;
                for (var n = document.styleSheets, i = 0, o = n.length; i < o; i++) {
                    var a = n[i];
                    if (a.ownerNode === r) return a
                }
                throw Be(17)
            }(this.element), this.length = 0
        }
        return e.prototype.insertRule = function(t, r) {
            try {
                return this.sheet.insertRule(r, t), this.length++, !0
            } catch {
                return !1
            }
        }, e.prototype.deleteRule = function(t) {
            this.sheet.deleteRule(t), this.length--
        }, e.prototype.getRule = function(t) {
            var r = this.sheet.cssRules[t];
            return r && r.cssText ? r.cssText : ""
        }, e
    }(),
    ts = function() {
        function e(t) {
            this.element = qn(t), this.nodes = this.element.childNodes, this.length = 0
        }
        return e.prototype.insertRule = function(t, r) {
            if (t <= this.length && t >= 0) {
                var n = document.createTextNode(r);
                return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0
            }
            return !1
        }, e.prototype.deleteRule = function(t) {
            this.element.removeChild(this.nodes[t]), this.length--
        }, e.prototype.getRule = function(t) {
            return t < this.length ? this.nodes[t].textContent : ""
        }, e
    }(),
    rs = function() {
        function e(t) {
            this.rules = [], this.length = 0
        }
        return e.prototype.insertRule = function(t, r) {
            return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0)
        }, e.prototype.deleteRule = function(t) {
            this.rules.splice(t, 1), this.length--
        }, e.prototype.getRule = function(t) {
            return t < this.length ? this.rules[t] : ""
        }, e
    }(),
    Br = ot,
    ns = {
        isServer: !ot,
        useCSSOMInjection: !Lo
    },
    Kn = function() {
        function e(t, r, n) {
            t === void 0 && (t = ke), r === void 0 && (r = {});
            var i = this;
            this.options = O(O({}, ns), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && ot && Br && (Br = !1, Wr(this)), nr(this, function() {
                return function(o) {
                    for (var a = o.getTag(), l = a.length, h = "", u = function(c) {
                            var f = function(g) {
                                return st.get(g)
                            }(c);
                            if (f === void 0) return "continue";
                            var p = o.names.get(f),
                                m = a.getGroup(c);
                            if (p === void 0 || !p.size || m.length === 0) return "continue";
                            var v = "".concat(xe, ".g").concat(c, '[id="').concat(f, '"]'),
                                _ = "";
                            p !== void 0 && p.forEach(function(g) {
                                g.length > 0 && (_ += "".concat(g, ","))
                            }), h += "".concat(m).concat(v, '{content:"').concat(_, '"}').concat(tr)
                        }, d = 0; d < l; d++) u(d);
                    return h
                }(i)
            })
        }
        return e.registerId = function(t) {
            return Ye(t)
        }, e.prototype.rehydrate = function() {
            !this.server && ot && Wr(this)
        }, e.prototype.reconstructWithOptions = function(t, r) {
            return r === void 0 && (r = !0), new e(O(O({}, this.options), t), this.gs, r && this.names || void 0)
        }, e.prototype.allocateGSInstance = function(t) {
            return this.gs[t] = (this.gs[t] || 0) + 1
        }, e.prototype.getTag = function() {
            return this.tag || (this.tag = (t = function(r) {
                var n = r.useCSSOMInjection,
                    i = r.target;
                return r.isServer ? new rs(i) : n ? new es(i) : new ts(i)
            }(this.options), new Zo(t)));
            var t
        }, e.prototype.hasNameForId = function(t, r) {
            return this.names.has(t) && this.names.get(t).has(r)
        }, e.prototype.registerName = function(t, r) {
            if (Ye(t), this.names.has(t)) this.names.get(t).add(r);
            else {
                var n = new Set;
                n.add(r), this.names.set(t, n)
            }
        }, e.prototype.insertRules = function(t, r, n) {
            this.registerName(t, r), this.getTag().insertRules(Ye(t), n)
        }, e.prototype.clearNames = function(t) {
            this.names.has(t) && this.names.get(t).clear()
        }, e.prototype.clearRules = function(t) {
            this.getTag().clearGroup(Ye(t)), this.clearNames(t)
        }, e.prototype.clearTag = function() {
            this.tag = void 0
        }, e
    }(),
    is = /&/g,
    os = /^\s*\/\/.*$/gm;

function Jn(e, t) {
    return e.map(function(r) {
        return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
            return "".concat(t, " ").concat(n)
        })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Jn(r.children, t)), r
    })
}

function ss(e) {
    var t, r, n, i = ke,
        o = i.options,
        a = o === void 0 ? ke : o,
        l = i.plugins,
        h = l === void 0 ? _t : l,
        u = function(f, p, m) {
            return m.startsWith(r) && m.endsWith(r) && m.replaceAll(r, "").length > 0 ? ".".concat(t) : f
        },
        d = h.slice();
    d.push(function(f) {
        f.type === ut && f.value.includes("&") && (f.props[0] = f.props[0].replace(is, r).replace(n, u))
    }), a.prefix && d.push(Ro), d.push($o);
    var c = function(f, p, m, v) {
        p === void 0 && (p = ""), m === void 0 && (m = ""), v === void 0 && (v = "&"), t = v, r = p, n = new RegExp("\\".concat(r, "\\b"), "g");
        var _ = f.replace(os, ""),
            g = Eo(m || p ? "".concat(m, " ").concat(p, " { ").concat(_, " }") : _);
        a.namespace && (g = Jn(g, a.namespace));
        var y = [];
        return it(g, To(d.concat(Po(function(S) {
            return y.push(S)
        })))), y
    };
    return c.hash = h.length ? h.reduce(function(f, p) {
        return p.name || Be(15), me(f, p.name)
    }, jn).toString() : "", c
}
var as = new Kn,
    Bt = ss(),
    Xn = De.createContext({
        shouldForwardProp: void 0,
        styleSheet: as,
        stylis: Bt
    });
Xn.Consumer;
De.createContext(void 0);

function jr() {
    return We(Xn)
}
var Qn = function() {
        function e(t, r) {
            var n = this;
            this.inject = function(i, o) {
                o === void 0 && (o = Bt);
                var a = n.name + o.hash;
                i.hasNameForId(n.id, a) || i.insertRules(n.id, a, o(n.rules, a, "@keyframes"))
            }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, nr(this, function() {
                throw Be(12, String(n.name))
            })
        }
        return e.prototype.getName = function(t) {
            return t === void 0 && (t = Bt), this.name + t.hash
        }, e
    }(),
    cs = function(e) {
        return e >= "A" && e <= "Z"
    };

function Fr(e) {
    for (var t = "", r = 0; r < e.length; r++) {
        var n = e[r];
        if (r === 1 && n === "-" && e[0] === "-") return e;
        cs(n) ? t += "-" + n.toLowerCase() : t += n
    }
    return t.startsWith("ms-") ? "-" + t : t
}
var ei = function(e) {
        return e == null || e === !1 || e === ""
    },
    ti = function(e) {
        var t, r, n = [];
        for (var i in e) {
            var o = e[i];
            e.hasOwnProperty(i) && !ei(o) && (Array.isArray(o) && o.isCss || Se(o) ? n.push("".concat(Fr(i), ":"), o, ";") : Oe(o) ? n.push.apply(n, Ae(Ae(["".concat(i, " {")], ti(o), !1), ["}"], !1)) : n.push("".concat(Fr(i), ": ").concat((t = i, (r = o) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Io || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")))
        }
        return n
    };

function de(e, t, r, n) {
    if (ei(e)) return [];
    if (rr(e)) return [".".concat(e.styledComponentId)];
    if (Se(e)) {
        if (!Se(o = e) || o.prototype && o.prototype.isReactComponent || !t) return [e];
        var i = e(t);
        return de(i, t, r, n)
    }
    var o;
    return e instanceof Qn ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : Oe(e) ? ti(e) : Array.isArray(e) ? Array.prototype.concat.apply(_t, e.map(function(a) {
        return de(a, t, r, n)
    })) : [e.toString()]
}

function ls(e) {
    for (var t = 0; t < e.length; t += 1) {
        var r = e[t];
        if (Se(r) && !rr(r)) return !1
    }
    return !0
}
var us = Fn(ft),
    hs = function() {
        function e(t, r, n) {
            this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && ls(t), this.componentId = r, this.baseHash = me(us, r), this.baseStyle = n, Kn.registerId(r)
        }
        return e.prototype.generateAndInjectStyles = function(t, r, n) {
            var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
            if (this.isStatic && !n.hash)
                if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) i = ue(i, this.staticRulesId);
                else {
                    var o = Ht(de(this.rules, t, r, n)),
                        a = Ot(me(this.baseHash, o) >>> 0);
                    if (!r.hasNameForId(this.componentId, a)) {
                        var l = n(o, ".".concat(a), void 0, this.componentId);
                        r.insertRules(this.componentId, a, l)
                    }
                    i = ue(i, a), this.staticRulesId = a
                }
            else {
                for (var h = me(this.baseHash, n.hash), u = "", d = 0; d < this.rules.length; d++) {
                    var c = this.rules[d];
                    if (typeof c == "string") u += c;
                    else if (c) {
                        var f = Ht(de(c, t, r, n));
                        h = me(h, f + d), u += f
                    }
                }
                if (u) {
                    var p = Ot(h >>> 0);
                    r.hasNameForId(this.componentId, p) || r.insertRules(this.componentId, p, n(u, ".".concat(p), void 0, this.componentId)), i = ue(i, p)
                }
            }
            return i
        }, e
    }(),
    ri = De.createContext(void 0);
ri.Consumer;
var Et = {};

function ds(e, t, r) {
    var n = rr(e),
        i = e,
        o = !Nt(e),
        a = t.attrs,
        l = a === void 0 ? _t : a,
        h = t.componentId,
        u = h === void 0 ? function(N, $) {
            var E = typeof N != "string" ? "sc" : Ar(N);
            Et[E] = (Et[E] || 0) + 1;
            var k = "".concat(E, "-").concat(Vn(ft + E + Et[E]));
            return $ ? "".concat($, "-").concat(k) : k
        }(t.displayName, t.parentComponentId) : h,
        d = t.displayName,
        c = d === void 0 ? function(N) {
            return Nt(N) ? "styled.".concat(N) : "Styled(".concat(Oo(N), ")")
        }(e) : d,
        f = t.displayName && t.componentId ? "".concat(Ar(t.displayName), "-").concat(t.componentId) : t.componentId || u,
        p = n && i.attrs ? i.attrs.concat(l).filter(Boolean) : l,
        m = t.shouldForwardProp;
    if (n && i.shouldForwardProp) {
        var v = i.shouldForwardProp;
        if (t.shouldForwardProp) {
            var _ = t.shouldForwardProp;
            m = function(N, $) {
                return v(N, $) && _(N, $)
            }
        } else m = v
    }
    var g = new hs(r, f, n ? i.componentStyle : void 0);

    function y(N, $) {
        return function(E, k, Z) {
            var re = E.attrs,
                j = E.componentStyle,
                fe = E.defaultProps,
                bi = E.foldedComponentIds,
                xi = E.styledComponentId,
                ki = E.target,
                Si = De.useContext(ri),
                Ni = jr(),
                vt = E.shouldForwardProp || Ni.shouldForwardProp,
                ur = zo(k, Si, fe) || ke,
                J = function(Fe, $e, Ve) {
                    for (var Te, ce = O(O({}, $e), {
                            className: void 0,
                            theme: Ve
                        }), wt = 0; wt < Fe.length; wt += 1) {
                        var Ue = Se(Te = Fe[wt]) ? Te(ce) : Te;
                        for (var ie in Ue) ce[ie] = ie === "className" ? ue(ce[ie], Ue[ie]) : ie === "style" ? O(O({}, ce[ie]), Ue[ie]) : Ue[ie]
                    }
                    return $e.className && (ce.className = ue(ce.className, $e.className)), ce
                }(re, k, ur),
                je = J.as || ki,
                Ce = {};
            for (var ne in J) J[ne] === void 0 || ne[0] === "$" || ne === "as" || ne === "theme" && J.theme === ur || (ne === "forwardedAs" ? Ce.as = J.forwardedAs : vt && !vt(ne, je) || (Ce[ne] = J[ne]));
            var hr = function(Fe, $e) {
                    var Ve = jr(),
                        Te = Fe.generateAndInjectStyles($e, Ve.styleSheet, Ve.stylis);
                    return Te
                }(j, J),
                yt = ue(bi, xi);
            return hr && (yt += " " + hr), J.className && (yt += " " + J.className), Ce[Nt(je) && !Bn.has(je) ? "class" : "className"] = yt, Ce.ref = Z, D(je, Ce)
        }(S, N, $)
    }
    y.displayName = c;
    var S = De.forwardRef(y);
    return S.attrs = p, S.componentStyle = g, S.displayName = c, S.shouldForwardProp = m, S.foldedComponentIds = n ? ue(i.foldedComponentIds, i.styledComponentId) : "", S.styledComponentId = f, S.target = n ? i.target : e, Object.defineProperty(S, "defaultProps", {
        get: function() {
            return this._foldedDefaultProps
        },
        set: function(N) {
            this._foldedDefaultProps = n ? function($) {
                for (var E = [], k = 1; k < arguments.length; k++) E[k - 1] = arguments[k];
                for (var Z = 0, re = E; Z < re.length; Z++) Wt($, re[Z], !0);
                return $
            }({}, i.defaultProps, N) : N
        }
    }), nr(S, function() {
        return ".".concat(S.styledComponentId)
    }), o && Yn(S, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0
    }), S
}

function Vr(e, t) {
    for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1) r.push(t[n], e[n + 1]);
    return r
}
var Ur = function(e) {
    return Object.assign(e, {
        isCss: !0
    })
};

function ni(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    if (Se(e) || Oe(e)) return Ur(de(Vr(_t, Ae([e], t, !0))));
    var n = e;
    return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? de(n) : Ur(de(Vr(n, t)))
}

function jt(e, t, r) {
    if (r === void 0 && (r = ke), !t) throw Be(1, t);
    var n = function(i) {
        for (var o = [], a = 1; a < arguments.length; a++) o[a - 1] = arguments[a];
        return e(t, r, ni.apply(void 0, Ae([i], o, !1)))
    };
    return n.attrs = function(i) {
        return jt(e, t, O(O({}, r), {
            attrs: Array.prototype.concat(r.attrs, i).filter(Boolean)
        }))
    }, n.withConfig = function(i) {
        return jt(e, t, O(O({}, r), i))
    }, n
}
var ii = function(e) {
        return jt(ds, e)
    },
    R = ii;
Bn.forEach(function(e) {
    R[e] = ii(e)
});

function ir(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    var n = Ht(ni.apply(void 0, Ae([e], t, !1))),
        i = Vn(n);
    return new Qn(i, n)
}
const or = ir(["from{opacity:0;}to{opacity:1;}"]);
var ps = 0;

function s(e, t, r, n, i, o) {
    t || (t = {});
    var a, l, h = t;
    "ref" in t && (a = t.ref, delete t.ref);
    var u = {
        type: e,
        props: h,
        key: r,
        ref: a,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: --ps,
        __i: -1,
        __u: 0,
        __source: i,
        __self: o
    };
    if (typeof e == "function" && (a = e.defaultProps))
        for (l in a) h[l] === void 0 && (h[l] = a[l]);
    return b.vnode && b.vnode(u), u
}
const oi = R.div(["position:relative;display:inline-block;"]),
    fs = R.div(["position:absolute;z-index:9999;background-color:var(--primary-color);color:#000;text-align:center;border-radius:8px;padding:3px;font-size:0.75rem;width:60px;margin:-2.5px 0 0 -12.5px;box-shadow:0 4px 8px rgba(0,0,0,0.1);opacity:0;visibility:hidden;transition:opacity 0.3s ease,visibility 0.3s ease;animation:", " 0.3s ease;", ":hover &{opacity:1;visibility:visible;}&::after{content:'';position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent var(--primary-color) transparent;}"], or, oi),
    si = ({
        content: e,
        children: t
    }) => {
        const [r, n] = M(!1), i = H(null), o = () => n(!0), a = () => n(!1), l = U(() => {
            n(!1)
        }, []);
        return B(() => {
            const h = on(l, 100);
            return window.addEventListener("scroll", h, !0), () => {
                window.removeEventListener("scroll", h, !0)
            }
        }, [l]), s(oi, {
            onMouseEnter: o,
            onMouseLeave: a,
            children: [t, s(fs, {
                ref: i,
                isVisible: r,
                children: e
            })]
        })
    };

function _s(e, t) {
    if (e instanceof RegExp) return {
        keys: !1,
        pattern: e
    };
    var r, n, i, o, a = [],
        l = "",
        h = e.split("/");
    for (h[0] || h.shift(); i = h.shift();) r = i[0], r === "*" ? (a.push(r), l += i[1] === "?" ? "(?:/(.*))?" : "/(.*)") : r === ":" ? (n = i.indexOf("?", 1), o = i.indexOf(".", 1), a.push(i.substring(1, ~n ? n : ~o ? o : i.length)), l += ~n && !~o ? "(?:/([^/]+?))?" : "/([^/]+?)", ~o && (l += (~n ? "?" : "") + "\\" + i.substring(o))) : l += "/" + i;
    return {
        keys: a,
        pattern: new RegExp("^" + l + (t ? "(?=$|/)" : "/?$"), "i")
    }
}
const ms = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";

function Ct(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}

function gs(e, t, r) {
    r && !ms && (t = r);
    const n = t(),
        [{
            _instance: i
        }, o] = M({
            _instance: {
                _value: n,
                _getSnapshot: t
            }
        });
    return pe(() => {
        i._value = n, i._getSnapshot = t, Ct(i._value, t()) || o({
            _instance: i
        })
    }, [e, n, t]), B(() => (Ct(i._value, i._getSnapshot()) || o({
        _instance: i
    }), e(() => {
        Ct(i._value, i._getSnapshot()) || o({
            _instance: i
        })
    })), [e]), n
}
const ai = e => {
        const t = H([e, (...r) => t[0](...r)]).current;
        return pe(() => {
            t[0] = e
        }), t[1]
    },
    vs = "popstate",
    sr = "pushState",
    ar = "replaceState",
    ys = "hashchange",
    Gr = [vs, sr, ar, ys],
    ws = e => {
        for (const t of Gr) addEventListener(t, e);
        return () => {
            for (const t of Gr) removeEventListener(t, e)
        }
    },
    ci = (e, t) => gs(ws, e, t),
    bs = () => location.search,
    xs = ({
        ssrSearch: e = ""
    } = {}) => ci(bs, () => e),
    Zr = () => location.pathname,
    ks = ({
        ssrPath: e
    } = {}) => ci(Zr, e ? () => e : Zr),
    Ss = (e, {
        replace: t = !1,
        state: r = null
    } = {}) => history[t ? ar : sr](r, "", e),
    Ns = (e = {}) => [ks(e), Ss],
    Yr = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Yr] > "u") {
    for (const e of [sr, ar]) {
        const t = history[e];
        history[e] = function() {
            const r = t.apply(this, arguments),
                n = new Event(e);
            return n.arguments = arguments, dispatchEvent(n), r
        }
    }
    Object.defineProperty(window, Yr, {
        value: !0
    })
}
const Es = (e, t) => t.toLowerCase().indexOf(e.toLowerCase()) ? "~" + t : t.slice(e.length) || "/",
    li = (e = "") => e === "/" ? "" : e,
    Cs = (e, t) => e[0] === "~" ? e.slice(1) : li(t) + e,
    $s = (e = "", t) => Es(qr(li(e)), qr(t)),
    qr = e => {
        try {
            return decodeURI(e)
        } catch {
            return e
        }
    },
    ui = {
        hook: Ns,
        searchHook: xs,
        parser: _s,
        base: "",
        ssrPath: void 0,
        ssrSearch: void 0,
        hrefs: e => e
    },
    hi = ct(ui),
    mt = () => We(hi),
    di = {},
    pi = ct(di),
    Ts = () => We(pi),
    cr = e => {
        const [t, r] = e.hook(e);
        return [$s(e.base, t), ai((n, i) => r(Cs(n, e.base), i))]
    },
    fi = (e, t, r, n) => {
        const {
            pattern: i,
            keys: o
        } = t instanceof RegExp ? {
            keys: !1,
            pattern: t
        } : e(t || "*", n), a = i.exec(r) || [], [l, ...h] = a;
        return l !== void 0 ? [!0, (() => {
            const u = o !== !1 ? Object.fromEntries(o.map((c, f) => [c, h[f]])) : a.groups;
            let d = { ...h
            };
            return u && Object.assign(d, u), d
        })(), ...n ? [l] : []] : [!1, null]
    },
    Ps = ({
        children: e,
        ...t
    }) => {
        var d, c;
        const r = mt(),
            n = t.hook ? ui : r;
        let i = n;
        const [o, a] = ((d = t.ssrPath) == null ? void 0 : d.split("?")) ? ? [];
        a && (t.ssrSearch = a, t.ssrPath = o), t.hrefs = t.hrefs ? ? ((c = t.hook) == null ? void 0 : c.hrefs);
        let l = H({}),
            h = l.current,
            u = h;
        for (let f in n) {
            const p = f === "base" ? n[f] + (t[f] || "") : t[f] || n[f];
            h === u && p !== u[f] && (l.current = u = { ...u
            }), u[f] = p, p !== n[f] && (i = u)
        }
        return D(hi.Provider, {
            value: i,
            children: e
        })
    },
    Kr = ({
        children: e,
        component: t
    }, r) => t ? D(t, {
        params: r
    }) : typeof e == "function" ? e(r) : e,
    Rs = e => {
        let t = H(di),
            r = t.current;
        for (const n in e) e[n] !== r[n] && (r = e);
        return Object.keys(e).length === 0 && (r = e), t.current = r
    },
    qe = ({
        path: e,
        nest: t,
        match: r,
        ...n
    }) => {
        const i = mt(),
            [o] = cr(i),
            [a, l, h] = r ? ? fi(i.parser, e, o, t),
            u = Rs({ ...Ts(),
                ...l
            });
        if (!a) return null;
        const d = h ? D(Ps, {
            base: h
        }, Kr(n, u)) : Kr(n, u);
        return D(pi.Provider, {
            value: u,
            children: d
        })
    },
    _i = (e, t) => {
        const r = mt(),
            [n, i] = cr(r),
            {
                to: o = "",
                href: a = o,
                onClick: l,
                asChild: h,
                children: u,
                className: d,
                replace: c,
                state: f,
                ...p
            } = e,
            m = ai(_ => {
                _.ctrlKey || _.metaKey || _.altKey || _.shiftKey || _.button !== 0 || (l == null || l(_), _.defaultPrevented || (_.preventDefault(), i(a, e)))
            }),
            v = r.hrefs(a[0] === "~" ? a.slice(1) : r.base + a, r);
        return h && Vt(u) ? Yt(u, {
            onClick: m,
            href: v
        }) : D("a", { ...p,
            onClick: m,
            href: v,
            className: d != null && d.call ? d(n === a) : d,
            children: u,
            ref: t
        })
    },
    mi = e => Array.isArray(e) ? e.flatMap(t => mi(t && t.type === A ? t.props.children : t)) : [e],
    Is = ({
        children: e,
        location: t
    }) => {
        const r = mt(),
            [n] = cr(r);
        for (const i of mi(e)) {
            let o = 0;
            if (Vt(i) && (o = fi(r.parser, i.props.path, t || n, i.props.nest))[0]) return Yt(i, {
                match: o
            })
        }
        return null
    },
    lr = {
        MOBILE: "768px"
    },
    Ls = [{
        to: "/",
        label: "Home",
        icon: s(A, {
            children: [s("path", {
                d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
            }), s("path", {
                d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            })]
        })
    }, {
        to: "/project",
        label: "Project",
        icon: s(A, {
            children: [s("path", {
                d: "M2 6h4"
            }), s("path", {
                d: "M2 10h4"
            }), s("path", {
                d: "M2 14h4"
            }), s("path", {
                d: "M2 18h4"
            }), s("rect", {
                width: "16",
                height: "20",
                x: "4",
                y: "2",
                rx: "2"
            }), s("path", {
                d: "M9.5 8h5"
            }), s("path", {
                d: "M9.5 12H16"
            }), s("path", {
                d: "M9.5 16H14"
            })]
        })
    }, {
        to: "/social",
        label: "Social",
        icon: s(A, {
            children: [s("path", {
                d: "M15 3h6v6"
            }), s("path", {
                d: "M10 14 21 3"
            }), s("path", {
                d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            })]
        })
    }],
    zs = R.div(["width:100%;max-width:700px;margin:10px auto;display:flex;justify-content:space-between;align-items:center;padding:1.25rem 1.35rem;background-color:var(--primary-color);border-radius:12px;backdrop-filter:blur(10px);box-shadow:0 0 10px rgba(0,0,0,0.2);overflow:hidden;@media only screen and (max-width:", "){max-width:95%;padding:1.05rem 0.75rem;}"], lr.MOBILE),
    As = R.span(["display:inline-block;position:relative;padding:0.2rem 0.5rem;margin:0;border-radius:6px;background-color:var(--secondary-color);color:var(--nayuki-black);font-size:0.75rem;font-weight:500;box-shadow:0 0 5px rgba(0,0,0,0.1);"]),
    Ms = R.section(["color:black;font-size:1.15rem;margin:5px 20px 0;"]),
    Ds = R.p(["display:block;margin-top:5px;font-size:0.75em;@media only screen and (max-width:", "){font-size:0.65em;}"], lr.MOBILE),
    Os = R.button(["display:inline-block;font-size:0;height:35px;width:35px;margin:10px 5px 0 -0.5px;padding:0 5px;cursor:pointer;background-color:var(--secondary-color);border:1px solid var(--nayuki-black);border-radius:6px;box-shadow:0 0 5px rgba(0,0,0,0.1);&:hover,&:active{filter:brightness(1.2);}"]),
    Hs = R.div(["position:relative;display:inline-block;.profile{border-radius:50%;height:80px;width:80px;margin:10px 15px 15px 0;vertical-align:top;transition:all 0.3s ease;filter:saturate(1.25);box-shadow:0 0 10px rgba(0,0,0,0.1);@media only screen and (max-width:", "){height:70px;width:70px;}}"], lr.MOBILE),
    Jr = R.img(["position:absolute;pointer-events:none;z-index:9999;", " ", ""], e => e.holiday === "christmas" && `
    width: 60px;
    height: 60px;
    top: -10px;
    left: 35px;
    transform: rotate(-5deg);
  `, e => e.holiday === "halloween" && `
    width: 45px;
    height: 45px;
    top: -5px;
    left: 45px;
    transform: rotate(68deg);
  `);

function Ws() {
    return $i() ? s(Jr, {
        holiday: "christmas",
        alt: "hat",
        src: "./assets/chrismashat.webp"
    }) : Ti() ? s(Jr, {
        holiday: "halloween",
        alt: "hat",
        src: "./assets/halloween-hat.webp"
    }) : null
}
const Bs = () => s(Hs, {
    children: [Ws(), s("img", {
        alt: "nayuki",
        src: "./assets/chino.webp",
        className: "profile"
    })]
});

function js({
    to: e,
    label: t,
    icon: r
}) {
    return s(_i, {
        to: e,
        children: s(si, {
            content: t,
            children: s(Os, {
                "data-tooltip-id": "nav",
                "data-tooltip-content": t,
                children: [s("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 16,
                    height: 16,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "#000",
                    strokeWidth: 1.3,
                    children: r
                }), s("span", {
                    children: t
                })]
            })
        })
    }, e)
}

function Fs() {
    return s(zs, {
        children: [s(Ms, {
            children: [s("p", {
                children: ["Nayuki ", s(As, {
                    children: "Busy!"
                })]
            }), s(Ds, {
                children: "Student, Developer & Anime Enjoyer!"
            }), s("nav", {
                children: Ls.map(js)
            })]
        }), s(Bs, {})]
    })
}
const Vs = R.img(["position:fixed;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:-1;filter:blur(15px) saturate(1.35) brightness(0.45);"]),
    Ft = R.div(["display:flex;flex-direction:column;justify-content:center;align-items:center;overflow-y:hidden;padding:0 10px;@media only screen and (max-width:768px){padding:0 5px;}"]),
    Us = R.div(["margin:120px auto 0;max-width:960px;padding:0 5px;width:100%;.fade-in{animation:", " 1.15s ease;}@media only screen and (max-width:768px){margin-top:10px;}"], or),
    Gs = ir(["0%{background-position:0 50%;}50%{background-position:100% 50%;}100%{background-position:0 50%;}"]),
    Zs = R.a(["position:fixed;right:12px;bottom:12px;width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;padding:10px;background-color:var(--secondary-color);transition:background-color 0.3s linear;box-shadow:0 0 10px 0 rgba(0,0,0,0.2);z-index:999;img{width:25px;height:25px;transition:transform 0.3s linear;}&:hover{animation:", " 10s linear infinite;background-color:transparent;background-image:linear-gradient( 100deg,var(--nayuki-red),var(--nayuki-orange),var(--nayuki-yellow),var(--nayuki-green),var(--nayuki-blue),var(--nayuki-purple),var(--nayuki-pink),var(--nayuki-red) );background-size:800%;color:white;cursor:pointer;img{transform:rotate(360deg);}}"], Gs),
    gt = R.div(["width:100%;max-width:700px;margin:10px auto;padding:1.25rem 1.75rem;background-color:var(--primary-color);border-radius:12px;overflow:hidden;backdrop-filter:blur(10px);box-shadow:0 0 10px 0 rgba(0,0,0,0.2);color:black;.paragraph{text-align:center;font-size:0.85rem;margin:15px 0 10px;}.title{display:inline-block;font-size:1.15rem;margin:5px 20px 0;vertical-align:top;.subtitle{display:block;margin-top:5px;font-size:0.75em;}}.description{display:flex;flex-direction:column;text-rendering:optimizeLegibility;font-size:0.8rem;line-height:1.65rem;margin:5px 0 20px 30px;.header{display:flex;justify-content:flex-start;align-items:center;font-size:1.15rem;font-weight:600;margin:5px -25px 5px;}li{margin-top:2px;}}@media only screen and (max-width:768px){max-width:95%;padding:1.05rem 1.45rem;.title{font-size:1rem;margin:10px 5px 0;}.description{font-size:0.75rem;line-height:1.5rem;margin:10px 0 20px 20px;li{margin-top:5px;}}}"]),
    Ys = R.img(["width:100%;max-width:500px;border-radius:5px;box-shadow:0 0 10px 0 rgba(0,0,0,0.1);border:1px solid rgba(0,0,0,0.1);"]);

function qs() {
    const e = H(null);
    return B(() => {
        const t = e.current,
            r = ["Hi there! I'm Chino, It seems like you're lost, but don't worry, I'm here to help you!", "Whoops! It seems like you're lost, but don't worry, I'm here to help you!", "He.. Hello? It seems like you're lost, but don't worry, I'm here to help you!", "C.. Can you hear me? It seems like you're lost, but don't worry, I'm here to help you!"];
        return t && (t.textContent = r[Math.floor(Math.random() * r.length)]), () => {
            t && (t.textContent = "")
        }
    }, []), s(gt, {
        className: "fade-in",
        children: [s("h2", {
            className: "title",
            children: "Not Found"
        }), s("hr", {}), s(Ft, {
            children: [s("p", {
                className: "description",
                ref: e
            }), s(Ys, {
                alt: "404",
                src: "./assets/chino-notfound.webp"
            })]
        })]
    })
}
const Ks = ({
        timeZone: e
    }) => {
        const [t, r] = M(""), [n, i] = M(!0), o = U(() => {
            const l = new Date,
                h = new Intl.DateTimeFormat("en-US", {
                    timeZone: e,
                    timeZoneName: "short",
                    hour: "numeric",
                    minute: "2-digit"
                });
            r(h.format(l));
            const u = l.getHours();
            i(u >= 6 && u < 18)
        }, [e]);
        B(() => {
            o();
            const l = setInterval(o, 1e4);
            return () => clearInterval(l)
        }, [o]);
        const a = te(() => n ? "🌞" : "🌜", [n]);
        return s("small", {
            children: ["(", t, ") ", a]
        })
    },
    gi = ir(["to{transform:rotate(360deg);}"]),
    Js = R.svg(["display:block;margin:auto;width:40px;height:40px;stroke:#000;stroke-opacity:0.3;animation:", " 1.2s linear infinite;& > g{fill:none;fill-rule:evenodd;stroke-width:2;& > circle{stroke-opacity:0.15;stroke:white;}}"], gi);

function vi() {
    return s(Js, {
        viewBox: "0 0 38 38",
        children: s("g", {
            fill: "none",
            fillRule: "evenodd",
            children: s("g", {
                transform: "translate(1 1)",
                strokeWidth: "2",
                children: [s("circle", {
                    strokeOpacity: ".15",
                    stroke: "white",
                    cx: "18",
                    cy: "18",
                    r: "18"
                }), s("path", {
                    d: "M36 18c0-9.94-8.06-18-18-18"
                })]
            })
        })
    })
}
const Xs = R.div(["background-color:var(--secondary-color);border-radius:16px;display:flex;justify-content:space-between;margin:0 auto;width:var(--lanyard-box-width);max-width:100%;padding:var(--lanyard-box-spacing);transition:all 0.3s ease;box-shadow:0 0 10px rgba(0,0,0,0.1);.user-profile{width:60px;height:60px;border-radius:50%;display:inline-flex;justify-content:flex-end;align-items:center;filter:saturate(1.25) contrast(0.95) drop-shadow(0 0 10px rgba(0,0,0,0.25));}.spotify-button{background-color:#1db954;border-radius:6px;display:inline-block;height:30px;margin:var(--lanyard-box-spacing) 0 0 2px;padding:5px;width:30px;border:1px solid var(--nayuki-black);&:hover,&:focus,&:active{background-color:#1ed760;}}.user-name,.user-status{display:inline-block;margin:auto 0;color:#000000;font-size:1rem;font-weight:600;text-align:right;}.user-status{font-size:0.85rem;line-height:0.85rem;word-spacing:3px;.circle-green,.circle-orange,.circle-red,.circle-gray{border-radius:50%;display:inline-block;height:10px;width:10px;margin:2px 8px 0 0;filter:brightness(0.85) saturate(1.25) contrast(1.5) drop-shadow(0 0 5px rgba(0,0,0,0.25));animation:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite;}.circle-green{background-color:var(--nayuki-green);}.circle-orange{background-color:var(--nayuki-orange);}.circle-red{background-color:var(--nayuki-red);}.circle-gray{background-color:var(--nayuki-gray);}}@media only screen and (max-width:375px){flex-direction:column;align-items:center;padding:0.85rem;.user-profile{display:inline-block;margin-bottom:5px;width:50px;height:50px;}.user-name,.user-status{display:inline-block;margin-bottom:5px;text-align:center;}.spotify-button{margin:5px 0 10px 0;}}@keyframes pulse{50%{opacity:0.5;}}"]),
    Qs = R.div(["display:flex;position:fixed;flex-direction:column;justify-content:center;align-items:center;height:100vh;width:100vw;top:0;left:0;z-index:9999;background-color:rgba(0,0,0,0.85);padding:15px;overflow:hidden;animation:", " 0.35s ease;.header,.song-name,.progress-time{color:#fff;font-size:1.5rem;font-weight:600;margin-top:5px;text-align:center;user-select:text;}.song-album{width:100%;max-width:250px;max-height:250px;margin:10px 0;border-radius:50%;animation:", " 10s linear infinite;}.close-button{color:var(--nayuki-red);cursor:pointer;scale:4;font-weight:600;position:absolute;top:20px;right:20px;}.progress{display:flex;justify-content:center;align-items:center;flex-direction:row;width:100%;padding:10px;box-sizing:border-box;&-time{font-size:1rem;font-weight:400;color:var(--secondary-color);margin:5px 10px;white-space:nowrap;background-color:rgba(0,0,0,0.35);padding:5px 10px;border-radius:10px;transition:color 0.35s ease;}&-bar{width:100%;max-width:300px;height:10px;background-color:#fff;border-radius:5px;margin:10px 0;overflow:hidden;box-shadow:inset 0 1px 3px rgba(0,0,0,0.2);position:relative;&-fill{height:100%;background-color:var(--nayuki-green);border-radius:5px;width:0;transition:width 0.35s ease-out;&::after{content:'';position:absolute;top:0;left:0;bottom:0;right:0;background-image:linear-gradient( 45deg,rgba(255,255,255,0.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.2) 50%,rgba(255,255,255,0.2) 75%,transparent 75%,transparent 100% );background-size:50px 50px;animation:move 2s linear infinite;overflow:hidden;}}}}@media only screen and (max-width:768px){.header,.song-name{font-size:1.2rem;}.song-album{max-width:200px;max-height:200px;}}"], or, gi);
var Ie = (e => (e.Online = "online", e.Idle = "idle", e.DoNotDisturb = "dnd", e.Offline = "offline", e))(Ie || {});
const ea = "wss://api.lanyard.rest/socket";

function ta(e) {
    const [t, r] = M(), n = H(0), i = H(null), o = H(null), a = U(() => {
        const c = performance.now();
        console.log(`%c[Lanyard] Connected in ${Math.round(c-n.current)}ms.`, "color: #00ff00")
    }, []);

    function l() {
        var c;
        ((c = i.current) == null ? void 0 : c.readyState) === WebSocket.OPEN && i.current.send(JSON.stringify({
            op: 3
        }))
    }
    const h = U(c => {
            var v;
            const {
                op: f,
                t: p,
                d: m
            } = JSON.parse(c.data);
            switch (f) {
                case 1:
                    {
                        o.current && clearInterval(o.current),
                        o.current = setInterval(l, 5e3),
                        (v = i.current) == null || v.send(JSON.stringify({
                            op: 2,
                            d: {
                                subscribe_to_id: e
                            }
                        }));
                        break
                    }
                case 0:
                    {
                        p && m && ["INIT_STATE", "PRESENCE_UPDATE"].includes(p) && r(m);
                        break
                    }
            }
        }, [e]),
        u = U(() => {
            o.current && (clearInterval(o.current), o.current = null), i.current && (i.current.removeEventListener("open", a), i.current.removeEventListener("message", h), i.current.removeEventListener("close", u), i.current.close(), i.current = null)
        }, [a, h]);

    function d() {
        u()
    }
    return B(() => {
        if (!(typeof globalThis > "u" || !("WebSocket" in globalThis || "MozWebSocket" in globalThis))) return i.current || (i.current = new WebSocket(ea), n.current = performance.now(), i.current.addEventListener("open", a), i.current.addEventListener("message", h), i.current.addEventListener("close", u)), d
    }, [a, h, u]), t
}
const ra = {
        [Ie.Online]: {
            color: "green",
            status: "Online"
        },
        [Ie.Idle]: {
            color: "orange",
            status: "Idle"
        },
        [Ie.DoNotDisturb]: {
            color: "red",
            status: "Busy"
        },
        [Ie.Offline]: {
            color: "gray",
            status: "Sleeping"
        }
    },
    Xr = R.span(["display:inline-block;width:1.25em;height:1.25em;margin:0 0.65em 0 0.1em;svg{fill:var(--secondary-color);}"]);

function na() {
    const e = H(null),
        [t, r] = M(!1),
        [n, i] = M(0),
        [o, a] = M("00:00"),
        [l, h] = M("00:00"),
        {
            discord_user: u,
            spotify: d,
            discord_status: c
        } = ta("505777744710336542") || {},
        f = ra[c || "offline"];

    function p() {
        r(!1)
    }
    const m = U(() => {
        const _ = e.current;
        if (_) {
            _.style.animation = "fadeOut 0.5s";
            const g = setTimeout(p, 500);
            return () => clearTimeout(g)
        }
    }, []);

    function v() {
        const {
            start: _,
            end: g
        } = d.timestamps, y = Math.floor((g - _) / 1e3), S = Math.floor((Date.now() - _) / 1e3), N = S / y;
        i(N), a(dr(S)), h(dr(y))
    }
    return B(() => {
        if (!t || !d) return;
        const _ = v;
        _();
        const g = setInterval(_, 1e3);
        return () => {
            clearInterval(g)
        }
    }, [d, t]), s(A, {
        children: [d && t ? s(Qs, {
            ref: e,
            children: [s("span", {
                className: "close-button",
                onClick: m,
                children: "×"
            }), s("h2", {
                className: "header",
                children: ["Now Playing", " ", s("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 -1 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    style: {
                        marginTop: "5px"
                    },
                    children: [s("circle", {
                        cx: "8",
                        cy: "18",
                        r: "4"
                    }), s("path", {
                        d: "M12 18V2l7 4"
                    })]
                })]
            }), s("h4", {
                className: "song-name",
                children: [d.song, s("br", {}), s("span", {
                    style: {
                        fontSize: "0.75em",
                        fontWeight: 400,
                        color: "var(--secondary-color)",
                        marginTop: "0.5em"
                    },
                    children: d.artist
                })]
            }), s("img", {
                className: "song-album",
                src: d.album_art_url || "",
                alt: "album-art"
            }), s("div", {
                className: "progress",
                children: [s("span", {
                    className: "progress-time",
                    children: o
                }), s("div", {
                    className: "progress-bar",
                    children: s("div", {
                        className: "progress-bar-fill",
                        style: {
                            width: `${Math.round(n*100)}%`
                        }
                    })
                }), s("span", {
                    className: "progress-time",
                    children: l
                })]
            })]
        }) : null, s(gt, {
            className: "fade-in",
            children: [s("ul", {
                className: "description",
                children: [s("li", {
                    className: "header",
                    children: [s(Xr, {
                        children: s("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [s("path", {
                                d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                            }), s("circle", {
                                cx: "12",
                                cy: "12",
                                r: "3"
                            })]
                        })
                    }), "Dev Stacks"]
                }), s("li", {
                    children: [s("b", {
                        children: "Languages:"
                    }), " JavaScript, TypeScript, PHP, Java, C#, C, SQL, Go (Learning)"]
                }), s("li", {
                    children: [s("b", {
                        children: "Frameworks:"
                    }), " Vite.js, Solid.js, React.js, Preact, Express.js, Discord.js, Bootstrap, TailwindCSS, styled-components, Emotion"]
                }), s("li", {
                    children: [s("b", {
                        children: "Tools:"
                    }), " Git, Docker, zsh, Oh My Zsh"]
                }), s("li", {
                    children: [s("b", {
                        children: "IDEs:"
                    }), " Jetbrains IDEs, Visual Studio Code"]
                }), s("li", {
                    children: [s("b", {
                        children: "Etc:"
                    }), " Cloudflare, Vercel, Railway, AWS, Grafana, MariaDB, Babel, Trello"]
                })]
            }), s("ul", {
                className: "description",
                children: [s("li", {
                    className: "header",
                    children: [s(Xr, {
                        children: s("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: s("path", {
                                d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                            })
                        })
                    }), "Personal Information"]
                }), s("li", {
                    children: [s("b", {
                        children: "Pronouns:"
                    }), " He/Him ", s("b", {
                        children: ":~:?"
                    })]
                }), s("li", {
                    children: [s("b", {
                        children: "Age:"
                    }), " 17 years old, pretty young, right? ", s("b", {
                        children: "=w="
                    })]
                }), s("li", {
                    children: [s("b", {
                        children: "Lives in:"
                    }), " Ayutthaya, Thailand ", s(Ks, {
                        timeZone: "Asia/Bangkok"
                    })]
                }), s("li", {
                    children: [s("b", {
                        children: "Hobbies:"
                    }), " Listening to music, watching anime, coding and sleeping ❤️"]
                }), s("li", {
                    children: [s("b", {
                        children: "Learn more:"
                    }), " About me on", " ", s("b", {
                        children: [s("u", {
                            children: s(_i, {
                                to: "/about",
                                children: "/about"
                            })
                        }), " ", "(Lazy to do it rn!)"]
                    }), " ", "✨"]
                })]
            }), s(Xs, {
                children: c ? s(A, {
                    children: [s("img", {
                        className: "user-profile",
                        src: u != null && u.avatar && u.avatar !== null ? `https://cdn.discordapp.com/avatars/${u==null?void 0:u.id}/${u==null?void 0:u.avatar}.${u!=null&&u.avatar.startsWith("a_")?"gif":"webp"}` : "https://avatars.githubusercontent.com/u/69802296",
                        alt: "user-profile"
                    }), s("p", {
                        className: "user-name",
                        children: ["@", (u == null ? void 0 : u.username) || "nayuki."]
                    }), s(si, {
                        content: d ? "Spotify" : "Disabled",
                        children: s("button", {
                            className: "spotify-button",
                            onClick: () => r(!t),
                            style: d ? void 0 : {
                                cursor: "not-allowed",
                                backgroundColor: "var(--nayuki-red)"
                            },
                            title: "Spotify",
                            children: d ? s("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 3 16 16",
                                width: "18",
                                height: "25",
                                fill: "white",
                                children: s("path", {
                                    d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"
                                })
                            }) : s("span", {
                                role: "img",
                                "aria-label": "Disabled",
                                style: {
                                    fontSize: "0.85rem"
                                },
                                children: "❌"
                            })
                        })
                    }), s("div", {
                        className: "user-status",
                        children: [s("div", {
                            className: `circle-${f.color}`
                        }), s("span", {
                            children: f.status
                        })]
                    })]
                }) : s(vi, {})
            })]
        })]
    })
}
const ia = R.div(["display:flex;justify-content:center;margin-top:10px;button{background-color:var(--secondary-color);border:1px solid black;border-radius:6px;color:#000;cursor:pointer;font-size:15px;font-weight:600;margin:0 10px;padding:13px 15px;&:hover{border:1px solid var(--nayuki-dark-gray);background-color:var(--nayuki-light-gray);}&:disabled{border:none;background-color:var(--nayuki-dark-gray);cursor:not-allowed;}}@media only screen and (max-width:768px){button{font-size:12px;padding:10px 12.5px;svg{width:12px;height:12px;}}}"]),
    oa = ({
        flip: e
    }) => s("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        width: "16",
        height: "16",
        fill: "currentColor",
        style: {
            transform: e ? "rotate(180deg)" : ""
        },
        children: s("path", {
            d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
        })
    }),
    sa = ({
        page: e,
        totalPages: t,
        onPageChange: r
    }) => {
        const n = te(() => {
            const i = [];
            for (let o = 0; o < 2; o++) {
                const a = o === 0 ? "prevButton" : "nextButton",
                    l = o === 0 ? e === 1 : e === t,
                    h = () => r(o === 0 ? e - 1 : e + 1);
                i.push(s("button", {
                    disabled: l,
                    onClick: h,
                    children: s(oa, {
                        flip: o !== 0
                    })
                }, a))
            }
            return i
        }, [e, t, r]);
        return s(ia, {
            children: n
        })
    },
    Qr = R.div(["display:flex;flex-direction:column;align-items:center;background-color:var(--secondary-color);border-radius:16px;margin:20px auto;overflow:hidden;padding:50px;max-width:500px;color:black;transition:all 0.3s ease;&:hover{filter:brightness(0.75) saturate(1.25);}.header,.description{margin:5px auto;text-align:center;}.header{font-size:1.5rem;font-weight:600;}.description{font-size:0.85rem;}.status{padding:1px 5px;border:1px solid #000;margin:15px auto;border-radius:12px;font-size:0.85rem;text-align:center;p{margin:5px;}&.active{background-color:var(--nayuki-green);}&.inactive{background-color:var(--nayuki-yellow);}&.archived{background-color:var(--nayuki-red);}}.programming-languages-list{display:flex;flex-wrap:wrap;justify-content:center;margin:10px auto;max-width:100%;.programming-language{background-color:var(--nayuki-light-gray);border:1px solid black;border-radius:5px;margin:3px;padding:5px 10px;font-size:0.8rem;text-align:center;}}.image{max-height:150px;border:1px solid black;border-radius:30px;display:block;max-width:100%;margin:0 auto;transition:all 0.3s ease;}@media only screen and (max-width:600px){padding:20px;.image{max-height:100px;border-radius:20px;}}"]);

function aa(e, t) {
    const r = (e - 1) * t,
        n = r + t;
    return {
        startIndex: r,
        endIndex: n
    }
}

function ca() {
    return {
        JavaScript: "#ffffe0",
        HTML: "#ffc1cb",
        CSS: "#d9d4e8",
        Java: "#fde0c7",
        Python: "#d1e0e9",
        Shell: "#e3f7ca",
        TypeScript: "#c2dfff",
        Go: "#b3e5fc",
        Scss: "#f7d7e4",
        C: "#d3d3d3",
        EJS: "#f2d4e2",
        JSON: "#f2f2f2",
        Markdown: "#d0e3f1",
        Ruby: "#f7cac9",
        PHP: "#e2e8f0",
        Swift: "#ffe0b2",
        Kotlin: "#f9dbc6",
        Rust: "#f3e2d5",
        Dart: "#bed7e8",
        Vue: "#d4e8d9",
        Batchfile: "#e6f9c0"
    }
}

function la() {
    const [e, t] = M([]), r = 2, [n, i] = M(1), [o, a] = M(!0), l = aa, h = te(ca, []), {
        startIndex: u,
        endIndex: d
    } = l(n, r), c = te(() => Math.ceil(e.length / r), [e, r]), f = U(_ => {
        i(_)
    }, [i]), p = te(() => on(f, 50), [f]);
    async function m() {
        try {
            const _ = await fetch("https://raw.githubusercontent.com/Kuuuuuuuu/assets/main/data.json");
            if (!_.ok) throw new Error("Network response was not ok");
            const g = await _.json();
            t(Array.isArray(g) ? g : Object.values(g))
        } catch (_) {
            console.error("Failed to fetch data:", _), t([])
        } finally {
            a(!1)
        }
    }
    B(() => {
        m()
    }, []);

    function v(_) {
        return s("div", {
            className: "programming-language",
            style: {
                backgroundColor: h[_] || "#FFF"
            },
            children: _
        }, _)
    }
    return s(gt, {
        className: "fade-in",
        children: [s("h1", {
            className: "title",
            children: "My Personal Projects"
        }), s("hr", {}), o ? s(vi, {}) : e.length === 0 ? s(Qr, {
            children: [s("h1", {
                className: "header",
                children: "No Projects"
            }), s("p", {
                className: "description",
                children: "There are no projects to show."
            })]
        }) : s(A, {
            children: [e.slice(u, d).map(_ => s("a", {
                href: _.link,
                target: "_blank",
                rel: "noreferrer",
                children: s(Qr, {
                    children: [s("h1", {
                        className: "header",
                        children: _.name
                    }), s("p", {
                        className: "description",
                        children: _.description
                    }), _.status && s("div", {
                        className: `status ${_.status.toLowerCase()}`,
                        children: s("p", {
                            children: _.status
                        })
                    }), s("div", {
                        className: "programming-languages-list",
                        children: _.languages && _.languages.length > 0 && s(A, {
                            children: _.languages.map(v)
                        })
                    }), s("img", {
                        src: _.image,
                        alt: _.name,
                        className: "image"
                    })]
                })
            }, _.name)), s("p", {
                className: "text-center text-black",
                children: ["Page ", n, " of ", c]
            }), s(sa, {
                page: n,
                totalPages: c,
                onPageChange: p
            })]
        })]
    })
}
var V = (e => (e.Discord = "https://discord.com/users/505777744710336542", e.Twitter = "https://twitter.com/nayuukki", e.Github = "https://github.com/Kuuuuuuuu", e.Spotify = "https://open.spotify.com/user/31wgdtovulrsqngiukket6f5a55i?si=4f3f85f7dff44362", e.Steam = "https://steamcommunity.com/id/nayuukki", e.Twitch = "https://www.twitch.tv/nayukivrc", e.Telegram = "https://t.me/nayuukki", e.Email = "mailto:me@nayuki.cyou", e.StatsFM = "https://stats.fm/nayuki", e.Wakatime = "https://wakatime.com/@Nayuki", e))(V || {});
const ua = R.div(["display:flex;flex-wrap:wrap;justify-content:center;margin:0 auto;"]),
    Y = R.button(["align-items:center;background-color:var(--secondary-color);border-radius:8px;color:black;display:flex;font-size:15px;height:60px;justify-content:center;margin:5px 5px;padding:10px;width:130px;transition:background 0.3s linear,color 0.3s linear;svg{margin-right:10px;}&:hover{background:#444;}&:hover{color:white !important;}&.steam:hover{background-color:#000000;}&.twitch:hover{background-color:#6441a5;}&.email:hover{background-color:pink;}&.twitter:hover{background-color:#00b7ff;}&.github:hover{background-color:#333;}&.spotify:hover{background-color:#25da64;}&.statsfm:hover{background-color:#1ed760;}&.discord:hover{background-color:#737ff2;}&.telegram:hover{background-color:#0088cc;}&.wakatime:hover{background-color:#48baf3;}"]);

function ha() {
    return s(gt, {
        className: "fade-in",
        children: [s("h1", {
            className: "title",
            children: "My Social Accounts"
        }), s("hr", {}), s(ua, {
            children: [s("a", {
                href: V.Twitter,
                target: "_blank",
                rel: "noreferrer",
                title: "Twitter",
                children: s(Y, {
                    className: "twitter",
                    children: [s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 16 16",
                        width: "20",
                        height: "20",
                        fill: "white",
                        children: s("path", {
                            d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                        })
                    }), s("span", {
                        children: "Twitter"
                    })]
                })
            }), s("a", {
                href: V.Github,
                target: "_blank",
                rel: "noreferrer",
                title: "Github",
                children: s(Y, {
                    className: "github",
                    children: [s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 16 16",
                        width: "25",
                        height: "25",
                        fill: "white",
                        children: s("path", {
                            d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.20-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                        })
                    }), s("span", {
                        children: "Github"
                    })]
                })
            }), s("a", {
                href: V.Steam,
                target: "_blank",
                rel: "noreferrer",
                title: "Steam",
                children: s(Y, {
                    className: "steam",
                    children: [s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 16 16",
                        width: "25",
                        height: "25",
                        fill: "white",
                        children: [s("path", {
                            d: "M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.198 2.198 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.217 2.217 0 0 1-1.312-1.568L.33 10.333Z"
                        }), s("path", {
                            d: "M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.705 1.705 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027Zm2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048Z"
                        })]
                    }), s("span", {
                        children: "Steam"
                    })]
                })
            }), s("a", {
                href: V.Twitch,
                target: "_blank",
                rel: "noreferrer",
                title: "Twitch",
                children: s(Y, {
                    className: "twitch",
                    children: [s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 16 16",
                        width: "25",
                        height: "25",
                        fill: "white",
                        children: [s("path", {
                            d: "M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"
                        }), s("path", {
                            d: "M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"
                        })]
                    }), s("span", {
                        children: "Twitch"
                    })]
                })
            }), s("a", {
                href: V.Email,
                target: "_blank",
                rel: "noreferrer",
                title: "Email",
                children: s(Y, {
                    className: "email",
                    children: [s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25",
                        height: "25",
                        viewBox: "0 0 16 16",
                        fill: "white",
                        children: s("path", {
                            d: "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                        })
                    }), s("span", {
                        children: "Email"
                    })]
                })
            }), s("a", {
                href: V.Discord,
                target: "_blank",
                rel: "noreferrer",
                title: "Discord",
                children: s(Y, {
                    className: "discord",
                    children: [s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 16 16",
                        width: "25",
                        height: "25",
                        fill: "white",
                        children: s("path", {
                            d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011a.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0a8.258 8.258 0 0 0-.412-.833a.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02a.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059a.051.051 0 0 0-.018-.011a8.875 8.875 0 0 1-1.248-.595a.05.05 0 0 1-.02-.066a.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085a8.254 8.254 0 0 1-1.249.594a.05.05 0 0 0-.03.03a.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019a13.235 13.235 0 0 0 4.001-2.02a.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612c0-.889.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613c0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612c0-.889.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613c0 .888-.631 1.612-1.438 1.612Z"
                        })
                    }), s("span", {
                        children: "Discord"
                    })]
                })
            }), s("a", {
                href: V.Spotify,
                target: "_blank",
                rel: "noreferrer",
                title: "Spotify",
                children: s(Y, {
                    className: "spotify",
                    children: [s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 16 16",
                        width: "25",
                        height: "25",
                        fill: "white",
                        children: s("path", {
                            d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"
                        })
                    }), s("span", {
                        children: "Spotify"
                    })]
                })
            }), s("a", {
                href: V.Telegram,
                target: "_blank",
                rel: "noreferrer",
                title: "Telegram",
                children: s(Y, {
                    className: "telegram",
                    children: [s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 16 16",
                        width: "25",
                        height: "25",
                        fill: "white",
                        children: s("path", {
                            d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01c-.378.15-.577.298-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294c.26.006.549-.1.868-.32c2.179-1.471 3.304-2.214 3.374-2.23c.05-.012.12-.026.166.016c.047.041.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817c-.193.18-.33.307-.358.336c-.188.186-.188.186-.188.186c-.38.366-.664.64.015 1.088c.327.216.589.393.85.571c.284.194.568.387.936.629c.093.06.183.125.27.187c.331.236.63.448.997.414c.214-.02.435-.22.547-.82c.265-1.417.786-4.486.906-5.751c-.013-.315-.013-.315-.013-.315a.337.337 0 0 0-.114-.217a.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
                        })
                    }), s("span", {
                        children: "Telegram"
                    })]
                })
            }), s("a", {
                href: V.StatsFM,
                target: "_blank",
                rel: "noreferrer",
                title: "Stats.fm",
                children: s(Y, {
                    className: "statsfm",
                    children: [s("svg", {
                        width: "25",
                        height: "25",
                        viewBox: "0 0 512 512",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [s("path", {
                            fill: "white",
                            d: "M77.7698 151.964H31.8607C14.3745 151.964 0.199219 166.169 0.199219 183.691V477.17C0.199219 494.691 14.3745 508.896 31.8607 508.896H77.7698C95.256 508.896 109.431 494.691 109.431 477.17V183.691C109.431 166.169 95.256 151.964 77.7698 151.964Z"
                        }), s("path", {
                            fill: "white",
                            d: "M277.239 0.72998H231.33C213.843 0.72998 199.668 14.9348 199.668 32.4574V477.17C199.668 494.691 213.843 508.896 231.33 508.896H277.239C294.726 508.896 308.9 494.691 308.9 477.17V32.4574C308.9 14.9348 294.726 0.72998 277.239 0.72998Z"
                        }), s("path", {
                            fill: "white",
                            d: "M476.702 291.035H430.794C413.306 291.035 399.133 305.24 399.133 322.761V477.168C399.133 494.691 413.306 508.896 430.794 508.896H476.702C494.19 508.896 508.363 494.691 508.363 477.168V322.761C508.363 305.24 494.19 291.035 476.702 291.035Z"
                        })]
                    }), s("span", {
                        children: "Stats.fm"
                    })]
                })
            }), s("a", {
                href: V.Wakatime,
                target: "_blank",
                rel: "noreferrer",
                title: "WakaTime",
                children: s(Y, {
                    className: "wakatime",
                    children: [s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "25",
                        height: "25",
                        fill: "white",
                        viewBox: "0 0 16 16",
                        children: [s("path", {
                            d: "M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
                        }), s("path", {
                            d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
                        })]
                    }), s("span", {
                        children: "WakaTime"
                    })]
                })
            })]
        }), s("p", {
            className: "paragraph",
            children: [s("strong", {
                children: "Alias:"
            }), " ", s("p", {
                style: {
                    display: "inline",
                    textDecoration: "underline"
                },
                children: "Nayuki, nayuukki, NayukiVRC, NayukiTuna, etc"
            }), s("br", {}), "Here are some of my social accounts. Feel free to ", s("strong", {
                children: "follow me"
            }), " on any platform you like!"]
        })]
    })
}
var da = "1.1.16";

function yi(e, t, r) {
    return Math.max(e, Math.min(t, r))
}

function pa(e, t, r) {
    return (1 - r) * e + r * t
}

function fa(e, t, r, n) {
    return pa(e, t, 1 - Math.exp(-r * n))
}

function _a(e, t) {
    return (e % t + t) % t
}
var ma = class {
    constructor() {
        w(this, "isRunning", !1);
        w(this, "value", 0);
        w(this, "from", 0);
        w(this, "to", 0);
        w(this, "currentTime", 0);
        w(this, "lerp");
        w(this, "duration");
        w(this, "easing");
        w(this, "onUpdate")
    }
    advance(e) {
        var r;
        if (!this.isRunning) return;
        let t = !1;
        if (this.duration && this.easing) {
            this.currentTime += e;
            const n = yi(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            const i = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * i
        } else this.lerp ? (this.value = fa(this.value, this.to, this.lerp * 60, e), Math.round(this.value) === this.to && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0);
        t && this.stop(), (r = this.onUpdate) == null || r.call(this, this.value, t)
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(e, t, {
        lerp: r,
        duration: n,
        easing: i,
        onStart: o,
        onUpdate: a
    }) {
        this.from = this.value = e, this.to = t, this.lerp = r, this.duration = n, this.easing = i, this.currentTime = 0, this.isRunning = !0, o == null || o(), this.onUpdate = a
    }
};

function ga(e, t) {
    let r;
    return function(...n) {
        let i = this;
        clearTimeout(r), r = setTimeout(() => {
            r = void 0, e.apply(i, n)
        }, t)
    }
}
var va = class {
        constructor(e, t, {
            autoResize: r = !0,
            debounce: n = 250
        } = {}) {
            w(this, "width", 0);
            w(this, "height", 0);
            w(this, "scrollHeight", 0);
            w(this, "scrollWidth", 0);
            w(this, "debouncedResize");
            w(this, "wrapperResizeObserver");
            w(this, "contentResizeObserver");
            w(this, "resize", () => {
                this.onWrapperResize(), this.onContentResize()
            });
            w(this, "onWrapperResize", () => {
                this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
            });
            w(this, "onContentResize", () => {
                this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
            });
            this.wrapper = e, this.content = t, r && (this.debouncedResize = ga(this.resize, n), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
        }
        destroy() {
            var e, t;
            (e = this.wrapperResizeObserver) == null || e.disconnect(), (t = this.contentResizeObserver) == null || t.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize, !1)
        }
        get limit() {
            return {
                x: this.scrollWidth - this.width,
                y: this.scrollHeight - this.height
            }
        }
    },
    wi = class {
        constructor() {
            w(this, "events", {})
        }
        emit(e, ...t) {
            var n;
            let r = this.events[e] || [];
            for (let i = 0, o = r.length; i < o; i++)(n = r[i]) == null || n.call(r, ...t)
        }
        on(e, t) {
            var r;
            return (r = this.events[e]) != null && r.push(t) || (this.events[e] = [t]), () => {
                var n;
                this.events[e] = (n = this.events[e]) == null ? void 0 : n.filter(i => t !== i)
            }
        }
        off(e, t) {
            var r;
            this.events[e] = (r = this.events[e]) == null ? void 0 : r.filter(n => t !== n)
        }
        destroy() {
            this.events = {}
        }
    },
    en = 100 / 6,
    oe = {
        passive: !1
    },
    ya = class {
        constructor(e, t = {
            wheelMultiplier: 1,
            touchMultiplier: 1
        }) {
            w(this, "touchStart", {
                x: 0,
                y: 0
            });
            w(this, "lastDelta", {
                x: 0,
                y: 0
            });
            w(this, "window", {
                width: 0,
                height: 0
            });
            w(this, "emitter", new wi);
            w(this, "onTouchStart", e => {
                const {
                    clientX: t,
                    clientY: r
                } = e.targetTouches ? e.targetTouches[0] : e;
                this.touchStart.x = t, this.touchStart.y = r, this.lastDelta = {
                    x: 0,
                    y: 0
                }, this.emitter.emit("scroll", {
                    deltaX: 0,
                    deltaY: 0,
                    event: e
                })
            });
            w(this, "onTouchMove", e => {
                const {
                    clientX: t,
                    clientY: r
                } = e.targetTouches ? e.targetTouches[0] : e, n = -(t - this.touchStart.x) * this.options.touchMultiplier, i = -(r - this.touchStart.y) * this.options.touchMultiplier;
                this.touchStart.x = t, this.touchStart.y = r, this.lastDelta = {
                    x: n,
                    y: i
                }, this.emitter.emit("scroll", {
                    deltaX: n,
                    deltaY: i,
                    event: e
                })
            });
            w(this, "onTouchEnd", e => {
                this.emitter.emit("scroll", {
                    deltaX: this.lastDelta.x,
                    deltaY: this.lastDelta.y,
                    event: e
                })
            });
            w(this, "onWheel", e => {
                let {
                    deltaX: t,
                    deltaY: r,
                    deltaMode: n
                } = e;
                const i = n === 1 ? en : n === 2 ? this.window.width : 1,
                    o = n === 1 ? en : n === 2 ? this.window.height : 1;
                t *= i, r *= o, t *= this.options.wheelMultiplier, r *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
                    deltaX: t,
                    deltaY: r,
                    event: e
                })
            });
            w(this, "onWindowResize", () => {
                this.window = {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            });
            this.element = e, this.options = t, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, oe), this.element.addEventListener("touchstart", this.onTouchStart, oe), this.element.addEventListener("touchmove", this.onTouchMove, oe), this.element.addEventListener("touchend", this.onTouchEnd, oe)
        }
        on(e, t) {
            return this.emitter.on(e, t)
        }
        destroy() {
            this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, oe), this.element.removeEventListener("touchstart", this.onTouchStart, oe), this.element.removeEventListener("touchmove", this.onTouchMove, oe), this.element.removeEventListener("touchend", this.onTouchEnd, oe)
        }
    },
    wa = class {
        constructor({
            wrapper: e = window,
            content: t = document.documentElement,
            eventsTarget: r = e,
            smoothWheel: n = !0,
            syncTouch: i = !1,
            syncTouchLerp: o = .075,
            touchInertiaMultiplier: a = 35,
            duration: l,
            easing: h = $ => Math.min(1, 1.001 - Math.pow(2, -10 * $)),
            lerp: u = .1,
            infinite: d = !1,
            orientation: c = "vertical",
            gestureOrientation: f = "vertical",
            touchMultiplier: p = 1,
            wheelMultiplier: m = 1,
            autoResize: v = !0,
            prevent: _,
            virtualScroll: g,
            overscroll: y = !0,
            autoRaf: S = !1,
            __experimental__naiveDimensions: N = !1
        } = {}) {
            w(this, "_isScrolling", !1);
            w(this, "_isStopped", !1);
            w(this, "_isLocked", !1);
            w(this, "_preventNextNativeScrollEvent", !1);
            w(this, "_resetVelocityTimeout", null);
            w(this, "__rafID", null);
            w(this, "isTouching");
            w(this, "time", 0);
            w(this, "userData", {});
            w(this, "lastVelocity", 0);
            w(this, "velocity", 0);
            w(this, "direction", 0);
            w(this, "options");
            w(this, "targetScroll");
            w(this, "animatedScroll");
            w(this, "animate", new ma);
            w(this, "emitter", new wi);
            w(this, "dimensions");
            w(this, "virtualScroll");
            w(this, "onPointerDown", e => {
                e.button === 1 && this.reset()
            });
            w(this, "onVirtualScroll", e => {
                if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(e) === !1) return;
                const {
                    deltaX: t,
                    deltaY: r,
                    event: n
                } = e;
                if (this.emitter.emit("virtual-scroll", {
                        deltaX: t,
                        deltaY: r,
                        event: n
                    }), n.ctrlKey || n.lenisStopPropagation) return;
                const i = n.type.includes("touch"),
                    o = n.type.includes("wheel");
                if (this.isTouching = n.type === "touchstart" || n.type === "touchmove", this.options.syncTouch && i && n.type === "touchstart" && !this.isStopped && !this.isLocked) {
                    this.reset();
                    return
                }
                const l = t === 0 && r === 0,
                    h = this.options.gestureOrientation === "vertical" && r === 0 || this.options.gestureOrientation === "horizontal" && t === 0;
                if (l || h) return;
                let u = n.composedPath();
                u = u.slice(0, u.indexOf(this.rootElement));
                const d = this.options.prevent;
                if (u.find(_ => {
                        var g, y, S;
                        return _ instanceof HTMLElement && (typeof d == "function" && (d == null ? void 0 : d(_)) || ((g = _.hasAttribute) == null ? void 0 : g.call(_, "data-lenis-prevent")) || i && ((y = _.hasAttribute) == null ? void 0 : y.call(_, "data-lenis-prevent-touch")) || o && ((S = _.hasAttribute) == null ? void 0 : S.call(_, "data-lenis-prevent-wheel")))
                    })) return;
                if (this.isStopped || this.isLocked) {
                    n.preventDefault();
                    return
                }
                if (!(this.options.syncTouch && i || this.options.smoothWheel && o)) {
                    this.isScrolling = "native", this.animate.stop(), n.lenisStopPropagation = !0;
                    return
                }
                let f = r;
                this.options.gestureOrientation === "both" ? f = Math.abs(r) > Math.abs(t) ? r : t : this.options.gestureOrientation === "horizontal" && (f = t), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && r > 0 || this.animatedScroll === this.limit && r < 0)) && (n.lenisStopPropagation = !0), n.preventDefault();
                const p = i && this.options.syncTouch,
                    v = i && n.type === "touchend" && Math.abs(f) > 5;
                v && (f = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + f, {
                    programmatic: !1,
                    ...p ? {
                        lerp: v ? this.options.syncTouchLerp : 1
                    } : {
                        lerp: this.options.lerp,
                        duration: this.options.duration,
                        easing: this.options.easing
                    }
                })
            });
            w(this, "onNativeScroll", () => {
                if (this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
                    this._preventNextNativeScrollEvent = !1;
                    return
                }
                if (this.isScrolling === !1 || this.isScrolling === "native") {
                    const e = this.animatedScroll;
                    this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - e, this.direction = Math.sign(this.animatedScroll - e), this.isScrolling = "native", this.emit(), this.velocity !== 0 && (this._resetVelocityTimeout = setTimeout(() => {
                        this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit()
                    }, 400))
                }
            });
            w(this, "raf", e => {
                const t = e - (this.time || e);
                this.time = e, this.animate.advance(t * .001), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
            });
            window.lenisVersion = da, (!e || e === document.documentElement || e === document.body) && (e = window), this.options = {
                wrapper: e,
                content: t,
                eventsTarget: r,
                smoothWheel: n,
                syncTouch: i,
                syncTouchLerp: o,
                touchInertiaMultiplier: a,
                duration: l,
                easing: h,
                lerp: u,
                infinite: d,
                gestureOrientation: f,
                orientation: c,
                touchMultiplier: p,
                wheelMultiplier: m,
                autoResize: v,
                prevent: _,
                virtualScroll: g,
                overscroll: y,
                autoRaf: S,
                __experimental__naiveDimensions: N
            }, this.dimensions = new va(e, t, {
                autoResize: v
            }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll = new ya(r, {
                touchMultiplier: p,
                wheelMultiplier: m
            }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
        }
        destroy() {
            this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this.__rafID && cancelAnimationFrame(this.__rafID)
        }
        on(e, t) {
            return this.emitter.on(e, t)
        }
        off(e, t) {
            return this.emitter.off(e, t)
        }
        setScroll(e) {
            this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
        }
        resize() {
            this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit()
        }
        emit() {
            this.emitter.emit("scroll", this)
        }
        reset() {
            this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop()
        }
        start() {
            this.isStopped && (this.isStopped = !1, this.reset())
        }
        stop() {
            this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset())
        }
        scrollTo(e, {
            offset: t = 0,
            immediate: r = !1,
            lock: n = !1,
            duration: i = this.options.duration,
            easing: o = this.options.easing,
            lerp: a = this.options.lerp,
            onStart: l,
            onComplete: h,
            force: u = !1,
            programmatic: d = !0,
            userData: c
        } = {}) {
            if (!((this.isStopped || this.isLocked) && !u)) {
                if (typeof e == "string" && ["top", "left", "start"].includes(e)) e = 0;
                else if (typeof e == "string" && ["bottom", "right", "end"].includes(e)) e = this.limit;
                else {
                    let f;
                    if (typeof e == "string" ? f = document.querySelector(e) : e instanceof HTMLElement && (e != null && e.nodeType) && (f = e), f) {
                        if (this.options.wrapper !== window) {
                            const m = this.rootElement.getBoundingClientRect();
                            t -= this.isHorizontal ? m.left : m.top
                        }
                        const p = f.getBoundingClientRect();
                        e = (this.isHorizontal ? p.left : p.top) + this.animatedScroll
                    }
                }
                if (typeof e == "number") {
                    if (e += t, e = Math.round(e), this.options.infinite ? d && (this.targetScroll = this.animatedScroll = this.scroll) : e = yi(0, e, this.limit), e === this.targetScroll) {
                        l == null || l(this), h == null || h(this);
                        return
                    }
                    if (this.userData = c ? ? {}, r) {
                        this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), h == null || h(this), this.userData = {};
                        return
                    }
                    d || (this.targetScroll = e), this.animate.fromTo(this.animatedScroll, e, {
                        duration: i,
                        easing: o,
                        lerp: a,
                        onStart: () => {
                            n && (this.isLocked = !0), this.isScrolling = "smooth", l == null || l(this)
                        },
                        onUpdate: (f, p) => {
                            this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = f - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = f, this.setScroll(this.scroll), d && (this.targetScroll = f), p || this.emit(), p && (this.reset(), this.emit(), h == null || h(this), this.userData = {}, this.preventNextNativeScrollEvent())
                        }
                    })
                }
            }
        }
        preventNextNativeScrollEvent() {
            this._preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
                this._preventNextNativeScrollEvent = !1
            })
        }
        get rootElement() {
            return this.options.wrapper === window ? document.documentElement : this.options.wrapper
        }
        get limit() {
            return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
        }
        get isHorizontal() {
            return this.options.orientation === "horizontal"
        }
        get actualScroll() {
            return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
        }
        get scroll() {
            return this.options.infinite ? _a(this.animatedScroll, this.limit) : this.animatedScroll
        }
        get progress() {
            return this.limit === 0 ? 1 : this.scroll / this.limit
        }
        get isScrolling() {
            return this._isScrolling
        }
        set isScrolling(e) {
            this._isScrolling !== e && (this._isScrolling = e, this.updateClassName())
        }
        get isStopped() {
            return this._isStopped
        }
        set isStopped(e) {
            this._isStopped !== e && (this._isStopped = e, this.updateClassName())
        }
        get isLocked() {
            return this._isLocked
        }
        set isLocked(e) {
            this._isLocked !== e && (this._isLocked = e, this.updateClassName())
        }
        get isSmooth() {
            return this.isScrolling === "smooth"
        }
        get className() {
            let e = "lenis";
            return this.isStopped && (e += " lenis-stopped"), this.isLocked && (e += " lenis-locked"), this.isScrolling && (e += " lenis-scrolling"), this.isScrolling === "smooth" && (e += " lenis-smooth"), e
        }
        updateClassName() {
            this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
        }
        cleanUpClassName() {
            this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
        }
    },
    ba = class {
        constructor(e) {
            w(this, "listeners", []);
            this.state = e
        }
        set(e) {
            this.state = e;
            for (let t of this.listeners) t(this.state)
        }
        subscribe(e) {
            return this.listeners = [...this.listeners, e], () => {
                this.listeners = this.listeners.filter(t => t !== e)
            }
        }
        get() {
            return this.state
        }
    },
    xa = ct(null),
    tn = new ba(null),
    ka = bn(({
        children: e,
        root: t = !1,
        options: r = {},
        className: n,
        autoRaf: i = !0,
        props: o
    }, a) => {
        const l = H(null),
            h = H(null),
            [u, d] = M(void 0);
        Kt(a, () => ({
            wrapper: l.current,
            content: h.current,
            lenis: u
        }), [u]), B(() => {
            const m = new wa({ ...r,
                ...!t && {
                    wrapper: l.current,
                    content: h.current
                },
                autoRaf: (r == null ? void 0 : r.autoRaf) ? ? i
            });
            return d(m), () => {
                m.destroy(), d(void 0)
            }
        }, [t, JSON.stringify(r)]);
        const c = H([]),
            f = U((m, v) => {
                c.current.push({
                    callback: m,
                    priority: v
                }), c.current.sort((_, g) => _.priority - g.priority)
            }, []),
            p = U(m => {
                c.current = c.current.filter(v => v.callback !== m)
            }, []);
        return B(() => {
            if (t && u) return tn.set({
                lenis: u,
                addCallback: f,
                removeCallback: p
            }), () => tn.set(null)
        }, [t, u, f, p]), B(() => {
            if (!u) return;
            const m = v => {
                var _;
                for (let g = 0; g < c.current.length; g++)(_ = c.current[g]) == null || _.callback(v)
            };
            return u.on("scroll", m), () => {
                u.off("scroll", m)
            }
        }, [u]), s(xa.Provider, {
            value: {
                lenis: u,
                addCallback: f,
                removeCallback: p
            },
            children: t ? e : s("div", {
                ref: l,
                className: n,
                ...o,
                children: s("div", {
                    ref: h,
                    children: e
                })
            })
        })
    });

function Sa() {
    return s(Us, {
        children: [s(Ft, {
            children: [s(Vs, {
                src: "./assets/wallpaperv2.webp",
                alt: "wallpaper"
            }), s(Fs, {}), s(Zs, {
                href: "https://webring.wonderful.software#nayuki.cyou",
                title: "วงแหวนเว็บ",
                children: s("img", {
                    alt: "วงแหวนเว็บ",
                    width: "32",
                    height: "32",
                    src: "https://webring.wonderful.software/webring.black.svg"
                })
            })]
        }), s(ka, {
            root: !0,
            options: {
                smoothWheel: !0,
                wheelMultiplier: 2,
                touchMultiplier: 2,
                autoResize: !0,
                duration: .85
            },
            children: s(Ft, {
                children: s(Is, {
                    children: [s(qe, {
                        component: na,
                        path: "/"
                    }), s(qe, {
                        component: la,
                        path: "project"
                    }), s(qe, {
                        component: ha,
                        path: "social"
                    }), s(qe, {
                        component: qs
                    })]
                })
            })
        })]
    })
}
ve(s(En, {
    children: s(Sa, {})
}), document.querySelector("#root"));