import * as ke from "react";
import zt, { forwardRef as Xt, useRef as Re, useEffect as mt, useState as $e, useCallback as sr } from "react";
import * as lr from "react-dom";
function Jt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var it = { exports: {} }, We = {};
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rt;
function cr() {
  if (Rt) return We;
  Rt = 1;
  var e = zt, t = 60103;
  if (We.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var r = Symbol.for;
    t = r("react.element"), We.Fragment = r("react.fragment");
  }
  var n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = Object.prototype.hasOwnProperty, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(s, o, f) {
    var c, d = {}, b = null, E = null;
    f !== void 0 && (b = "" + f), o.key !== void 0 && (b = "" + o.key), o.ref !== void 0 && (E = o.ref);
    for (c in o) u.call(o, c) && !i.hasOwnProperty(c) && (d[c] = o[c]);
    if (s && s.defaultProps) for (c in o = s.defaultProps, o) d[c] === void 0 && (d[c] = o[c]);
    return { $$typeof: t, type: s, key: b, ref: E, props: d, _owner: n.current };
  }
  return We.jsx = l, We.jsxs = l, We;
}
var Et = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function fr() {
  return _t || (_t = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var t = zt, r = 60103, n = 60106;
      e.Fragment = 60107;
      var u = 60108, i = 60114, l = 60109, s = 60110, o = 60112, f = 60113, c = 60120, d = 60115, b = 60116, E = 60121, F = 60122, h = 60117, v = 60129, A = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var m = Symbol.for;
        r = m("react.element"), n = m("react.portal"), e.Fragment = m("react.fragment"), u = m("react.strict_mode"), i = m("react.profiler"), l = m("react.provider"), s = m("react.context"), o = m("react.forward_ref"), f = m("react.suspense"), c = m("react.suspense_list"), d = m("react.memo"), b = m("react.lazy"), E = m("react.block"), F = m("react.server.block"), h = m("react.fundamental"), m("react.scope"), m("react.opaque.id"), v = m("react.debug_trace_mode"), m("react.offscreen"), A = m("react.legacy_hidden");
      }
      var D = typeof Symbol == "function" && Symbol.iterator, w = "@@iterator";
      function _(a) {
        if (a === null || typeof a != "object")
          return null;
        var p = D && a[D] || a[w];
        return typeof p == "function" ? p : null;
      }
      var T = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function R(a) {
        {
          for (var p = arguments.length, g = new Array(p > 1 ? p - 1 : 0), C = 1; C < p; C++)
            g[C - 1] = arguments[C];
          W("error", a, g);
        }
      }
      function W(a, p, g) {
        {
          var C = T.ReactDebugCurrentFrame, $ = "";
          if (te) {
            var L = P(te.type), B = te._owner;
            $ += J(L, te._source, B && P(B.type));
          }
          $ += C.getStackAddendum(), $ !== "" && (p += "%s", g = g.concat([$]));
          var O = g.map(function(X) {
            return "" + X;
          });
          O.unshift("Warning: " + p), Function.prototype.apply.call(console[a], console, O);
        }
      }
      var U = !1;
      function M(a) {
        return !!(typeof a == "string" || typeof a == "function" || a === e.Fragment || a === i || a === v || a === u || a === f || a === c || a === A || U || typeof a == "object" && a !== null && (a.$$typeof === b || a.$$typeof === d || a.$$typeof === l || a.$$typeof === s || a.$$typeof === o || a.$$typeof === h || a.$$typeof === E || a[0] === F));
      }
      var I = /^(.*)[\\\/]/;
      function J(a, p, g) {
        var C = "";
        if (p) {
          var $ = p.fileName, L = $.replace(I, "");
          if (/^index\./.test(L)) {
            var B = $.match(I);
            if (B) {
              var O = B[1];
              if (O) {
                var X = O.replace(I, "");
                L = X + "/" + L;
              }
            }
          }
          C = " (at " + L + ":" + p.lineNumber + ")";
        } else g && (C = " (created by " + g + ")");
        return `
    in ` + (a || "Unknown") + C;
      }
      var N = 1;
      function Y(a) {
        return a._status === N ? a._result : null;
      }
      function G(a, p, g) {
        var C = p.displayName || p.name || "";
        return a.displayName || (C !== "" ? g + "(" + C + ")" : g);
      }
      function P(a) {
        if (a == null)
          return null;
        if (typeof a.tag == "number" && R("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof a == "function")
          return a.displayName || a.name || null;
        if (typeof a == "string")
          return a;
        switch (a) {
          case e.Fragment:
            return "Fragment";
          case n:
            return "Portal";
          case i:
            return "Profiler";
          case u:
            return "StrictMode";
          case f:
            return "Suspense";
          case c:
            return "SuspenseList";
        }
        if (typeof a == "object")
          switch (a.$$typeof) {
            case s:
              return "Context.Consumer";
            case l:
              return "Context.Provider";
            case o:
              return G(a, a.render, "ForwardRef");
            case d:
              return P(a.type);
            case E:
              return P(a.render);
            case b: {
              var p = a, g = Y(p);
              if (g)
                return P(g);
              break;
            }
          }
        return null;
      }
      var q = {};
      T.ReactDebugCurrentFrame;
      var te = null;
      function Z(a) {
        te = a;
      }
      function me(a, p, g, C, $) {
        {
          var L = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var B in a)
            if (L(a, B)) {
              var O = void 0;
              try {
                if (typeof a[B] != "function") {
                  var X = Error((C || "React class") + ": " + g + " type `" + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[B] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw X.name = "Invariant Violation", X;
                }
                O = a[B](p, B, C, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ie) {
                O = ie;
              }
              O && !(O instanceof Error) && (Z($), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", g, B, typeof O), Z(null)), O instanceof Error && !(O.message in q) && (q[O.message] = !0, Z($), R("Failed %s type: %s", g, O.message), Z(null));
            }
        }
      }
      var Fe = T.ReactCurrentOwner, ce = Object.prototype.hasOwnProperty, Ce = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, re, ne;
      function be(a) {
        if (ce.call(a, "ref")) {
          var p = Object.getOwnPropertyDescriptor(a, "ref").get;
          if (p && p.isReactWarning)
            return !1;
        }
        return a.ref !== void 0;
      }
      function ye(a) {
        if (ce.call(a, "key")) {
          var p = Object.getOwnPropertyDescriptor(a, "key").get;
          if (p && p.isReactWarning)
            return !1;
        }
        return a.key !== void 0;
      }
      function fe(a, p) {
        typeof a.ref == "string" && Fe.current;
      }
      function Te(a, p) {
        {
          var g = function() {
            re || (re = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
          };
          g.isReactWarning = !0, Object.defineProperty(a, "key", {
            get: g,
            configurable: !0
          });
        }
      }
      function Xe(a, p) {
        {
          var g = function() {
            ne || (ne = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
          };
          g.isReactWarning = !0, Object.defineProperty(a, "ref", {
            get: g,
            configurable: !0
          });
        }
      }
      var De = function(a, p, g, C, $, L, B) {
        var O = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: r,
          // Built-in properties that belong on the element
          type: a,
          key: p,
          ref: g,
          props: B,
          // Record the component responsible for creating this element.
          _owner: L
        };
        return O._store = {}, Object.defineProperty(O._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(O, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: C
        }), Object.defineProperty(O, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: $
        }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
      };
      function Be(a, p, g, C, $) {
        {
          var L, B = {}, O = null, X = null;
          g !== void 0 && (O = "" + g), ye(p) && (O = "" + p.key), be(p) && (X = p.ref, fe(p, $));
          for (L in p)
            ce.call(p, L) && !Ce.hasOwnProperty(L) && (B[L] = p[L]);
          if (a && a.defaultProps) {
            var ie = a.defaultProps;
            for (L in ie)
              B[L] === void 0 && (B[L] = ie[L]);
          }
          if (O || X) {
            var Ee = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
            O && Te(B, Ee), X && Xe(B, Ee);
          }
          return De(a, O, X, $, C, Fe.current, B);
        }
      }
      var Ae = T.ReactCurrentOwner;
      T.ReactDebugCurrentFrame;
      function ve(a) {
        te = a;
      }
      var Pe;
      Pe = !1;
      function Oe(a) {
        return typeof a == "object" && a !== null && a.$$typeof === r;
      }
      function je() {
        {
          if (Ae.current) {
            var a = P(Ae.current.type);
            if (a)
              return `

Check the render method of \`` + a + "`.";
          }
          return "";
        }
      }
      function Je(a) {
        return "";
      }
      var Ve = {};
      function pe(a) {
        {
          var p = je();
          if (!p) {
            var g = typeof a == "string" ? a : a.displayName || a.name;
            g && (p = `

Check the top-level render call using <` + g + ">.");
          }
          return p;
        }
      }
      function ae(a, p) {
        {
          if (!a._store || a._store.validated || a.key != null)
            return;
          a._store.validated = !0;
          var g = pe(p);
          if (Ve[g])
            return;
          Ve[g] = !0;
          var C = "";
          a && a._owner && a._owner !== Ae.current && (C = " It was passed a child from " + P(a._owner.type) + "."), ve(a), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, C), ve(null);
        }
      }
      function Se(a, p) {
        {
          if (typeof a != "object")
            return;
          if (Array.isArray(a))
            for (var g = 0; g < a.length; g++) {
              var C = a[g];
              Oe(C) && ae(C, p);
            }
          else if (Oe(a))
            a._store && (a._store.validated = !0);
          else if (a) {
            var $ = _(a);
            if (typeof $ == "function" && $ !== a.entries)
              for (var L = $.call(a), B; !(B = L.next()).done; )
                Oe(B.value) && ae(B.value, p);
          }
        }
      }
      function y(a) {
        {
          var p = a.type;
          if (p == null || typeof p == "string")
            return;
          var g;
          if (typeof p == "function")
            g = p.propTypes;
          else if (typeof p == "object" && (p.$$typeof === o || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          p.$$typeof === d))
            g = p.propTypes;
          else
            return;
          if (g) {
            var C = P(p);
            me(g, a.props, "prop", C, a);
          } else if (p.PropTypes !== void 0 && !Pe) {
            Pe = !0;
            var $ = P(p);
            R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $ || "Unknown");
          }
          typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function x(a) {
        {
          for (var p = Object.keys(a.props), g = 0; g < p.length; g++) {
            var C = p[g];
            if (C !== "children" && C !== "key") {
              ve(a), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), ve(null);
              break;
            }
          }
          a.ref !== null && (ve(a), R("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
        }
      }
      function j(a, p, g, C, $, L) {
        {
          var B = M(a);
          if (!B) {
            var O = "";
            (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var X = Je();
            X ? O += X : O += je();
            var ie;
            a === null ? ie = "null" : Array.isArray(a) ? ie = "array" : a !== void 0 && a.$$typeof === r ? (ie = "<" + (P(a.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : ie = typeof a, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ie, O);
          }
          var Ee = Be(a, p, g, $, L);
          if (Ee == null)
            return Ee;
          if (B) {
            var we = p.children;
            if (we !== void 0)
              if (C)
                if (Array.isArray(we)) {
                  for (var vt = 0; vt < we.length; vt++)
                    Se(we[vt], a);
                  Object.freeze && Object.freeze(we);
                } else
                  R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Se(we, a);
          }
          return a === e.Fragment ? x(Ee) : y(Ee), Ee;
        }
      }
      function S(a, p, g) {
        return j(a, p, g, !0);
      }
      function k(a, p, g) {
        return j(a, p, g, !1);
      }
      var V = k, z = S;
      e.jsx = V, e.jsxs = z;
    }();
  }(Et)), Et;
}
var Tt;
function pr() {
  return Tt || (Tt = 1, process.env.NODE_ENV === "production" ? it.exports = cr() : it.exports = fr()), it.exports;
}
var H = pr(), Bt = function(t) {
  return t.reduce(function(r, n) {
    var u = n[0], i = n[1];
    return r[u] = i, r;
  }, {});
}, Pt = typeof window < "u" && window.document && window.document.createElement ? ke.useLayoutEffect : ke.useEffect, K = "top", se = "bottom", le = "right", ee = "left", At = "auto", nt = [K, se, le, ee], Ye = "start", tt = "end", dr = "clippingParents", Gt = "viewport", Ge = "popper", vr = "reference", jt = /* @__PURE__ */ nt.reduce(function(e, t) {
  return e.concat([t + "-" + Ye, t + "-" + tt]);
}, []), Zt = /* @__PURE__ */ [].concat(nt, [At]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ye, t + "-" + tt]);
}, []), Er = "beforeRead", gr = "read", hr = "afterRead", mr = "beforeMain", br = "main", yr = "afterMain", Ar = "beforeWrite", wr = "write", xr = "afterWrite", Fr = [Er, gr, hr, mr, br, yr, Ar, wr, xr];
function he(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ue(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ie(e) {
  var t = ue(e).Element;
  return e instanceof t || e instanceof Element;
}
function oe(e) {
  var t = ue(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function wt(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ue(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Cr(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, u = t.attributes[r] || {}, i = t.elements[r];
    !oe(i) || !he(i) || (Object.assign(i.style, n), Object.keys(u).forEach(function(l) {
      var s = u[l];
      s === !1 ? i.removeAttribute(l) : i.setAttribute(l, s === !0 ? "" : s);
    }));
  });
}
function Dr(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var u = t.elements[n], i = t.attributes[n] || {}, l = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = l.reduce(function(o, f) {
        return o[f] = "", o;
      }, {});
      !oe(u) || !he(u) || (Object.assign(u.style, s), Object.keys(i).forEach(function(o) {
        u.removeAttribute(o);
      }));
    });
  };
}
const Or = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Cr,
  effect: Dr,
  requires: ["computeStyles"]
};
function ge(e) {
  return e.split("-")[0];
}
var Le = Math.max, ft = Math.min, He = Math.round;
function bt() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Qt() {
  return !/^((?!chrome|android).)*safari/i.test(bt());
}
function Ne(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), u = 1, i = 1;
  t && oe(e) && (u = e.offsetWidth > 0 && He(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && He(n.height) / e.offsetHeight || 1);
  var l = Ie(e) ? ue(e) : window, s = l.visualViewport, o = !Qt() && r, f = (n.left + (o && s ? s.offsetLeft : 0)) / u, c = (n.top + (o && s ? s.offsetTop : 0)) / i, d = n.width / u, b = n.height / i;
  return {
    width: d,
    height: b,
    top: c,
    right: f + d,
    bottom: c + b,
    left: f,
    x: f,
    y: c
  };
}
function xt(e) {
  var t = Ne(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Kt(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && wt(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function xe(e) {
  return ue(e).getComputedStyle(e);
}
function Rr(e) {
  return ["table", "td", "th"].indexOf(he(e)) >= 0;
}
function _e(e) {
  return ((Ie(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function dt(e) {
  return he(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (wt(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    _e(e)
  );
}
function St(e) {
  return !oe(e) || // https://github.com/popperjs/popper-core/issues/837
  xe(e).position === "fixed" ? null : e.offsetParent;
}
function _r(e) {
  var t = /firefox/i.test(bt()), r = /Trident/i.test(bt());
  if (r && oe(e)) {
    var n = xe(e);
    if (n.position === "fixed")
      return null;
  }
  var u = dt(e);
  for (wt(u) && (u = u.host); oe(u) && ["html", "body"].indexOf(he(u)) < 0; ) {
    var i = xe(u);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return u;
    u = u.parentNode;
  }
  return null;
}
function ut(e) {
  for (var t = ue(e), r = St(e); r && Rr(r) && xe(r).position === "static"; )
    r = St(r);
  return r && (he(r) === "html" || he(r) === "body" && xe(r).position === "static") ? t : r || _r(e) || t;
}
function Ft(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Qe(e, t, r) {
  return Le(e, ft(t, r));
}
function Tr(e, t, r) {
  var n = Qe(e, t, r);
  return n > r ? r : n;
}
function er() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function tr(e) {
  return Object.assign({}, er(), e);
}
function rr(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var Br = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, tr(typeof t != "number" ? t : rr(t, nt));
};
function Pr(e) {
  var t, r = e.state, n = e.name, u = e.options, i = r.elements.arrow, l = r.modifiersData.popperOffsets, s = ge(r.placement), o = Ft(s), f = [ee, le].indexOf(s) >= 0, c = f ? "height" : "width";
  if (!(!i || !l)) {
    var d = Br(u.padding, r), b = xt(i), E = o === "y" ? K : ee, F = o === "y" ? se : le, h = r.rects.reference[c] + r.rects.reference[o] - l[o] - r.rects.popper[c], v = l[o] - r.rects.reference[o], A = ut(i), m = A ? o === "y" ? A.clientHeight || 0 : A.clientWidth || 0 : 0, D = h / 2 - v / 2, w = d[E], _ = m - b[c] - d[F], T = m / 2 - b[c] / 2 + D, R = Qe(w, T, _), W = o;
    r.modifiersData[n] = (t = {}, t[W] = R, t.centerOffset = R - T, t);
  }
}
function jr(e) {
  var t = e.state, r = e.options, n = r.element, u = n === void 0 ? "[data-popper-arrow]" : n;
  u != null && (typeof u == "string" && (u = t.elements.popper.querySelector(u), !u) || Kt(t.elements.popper, u) && (t.elements.arrow = u));
}
const Sr = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Pr,
  effect: jr,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function qe(e) {
  return e.split("-")[1];
}
var $r = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function kr(e, t) {
  var r = e.x, n = e.y, u = t.devicePixelRatio || 1;
  return {
    x: He(r * u) / u || 0,
    y: He(n * u) / u || 0
  };
}
function $t(e) {
  var t, r = e.popper, n = e.popperRect, u = e.placement, i = e.variation, l = e.offsets, s = e.position, o = e.gpuAcceleration, f = e.adaptive, c = e.roundOffsets, d = e.isFixed, b = l.x, E = b === void 0 ? 0 : b, F = l.y, h = F === void 0 ? 0 : F, v = typeof c == "function" ? c({
    x: E,
    y: h
  }) : {
    x: E,
    y: h
  };
  E = v.x, h = v.y;
  var A = l.hasOwnProperty("x"), m = l.hasOwnProperty("y"), D = ee, w = K, _ = window;
  if (f) {
    var T = ut(r), R = "clientHeight", W = "clientWidth";
    if (T === ue(r) && (T = _e(r), xe(T).position !== "static" && s === "absolute" && (R = "scrollHeight", W = "scrollWidth")), T = T, u === K || (u === ee || u === le) && i === tt) {
      w = se;
      var U = d && T === _ && _.visualViewport ? _.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        T[R]
      );
      h -= U - n.height, h *= o ? 1 : -1;
    }
    if (u === ee || (u === K || u === se) && i === tt) {
      D = le;
      var M = d && T === _ && _.visualViewport ? _.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        T[W]
      );
      E -= M - n.width, E *= o ? 1 : -1;
    }
  }
  var I = Object.assign({
    position: s
  }, f && $r), J = c === !0 ? kr({
    x: E,
    y: h
  }, ue(r)) : {
    x: E,
    y: h
  };
  if (E = J.x, h = J.y, o) {
    var N;
    return Object.assign({}, I, (N = {}, N[w] = m ? "0" : "", N[D] = A ? "0" : "", N.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + E + "px, " + h + "px)" : "translate3d(" + E + "px, " + h + "px, 0)", N));
  }
  return Object.assign({}, I, (t = {}, t[w] = m ? h + "px" : "", t[D] = A ? E + "px" : "", t.transform = "", t));
}
function Mr(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, u = n === void 0 ? !0 : n, i = r.adaptive, l = i === void 0 ? !0 : i, s = r.roundOffsets, o = s === void 0 ? !0 : s, f = {
    placement: ge(t.placement),
    variation: qe(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: u,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, $t(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: o
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, $t(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: o
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Lr = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Mr,
  data: {}
};
var ot = {
  passive: !0
};
function Ir(e) {
  var t = e.state, r = e.instance, n = e.options, u = n.scroll, i = u === void 0 ? !0 : u, l = n.resize, s = l === void 0 ? !0 : l, o = ue(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && f.forEach(function(c) {
    c.addEventListener("scroll", r.update, ot);
  }), s && o.addEventListener("resize", r.update, ot), function() {
    i && f.forEach(function(c) {
      c.removeEventListener("scroll", r.update, ot);
    }), s && o.removeEventListener("resize", r.update, ot);
  };
}
const Vr = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Ir,
  data: {}
};
var Wr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function st(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Wr[t];
  });
}
var Ur = {
  start: "end",
  end: "start"
};
function kt(e) {
  return e.replace(/start|end/g, function(t) {
    return Ur[t];
  });
}
function Ct(e) {
  var t = ue(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Dt(e) {
  return Ne(_e(e)).left + Ct(e).scrollLeft;
}
function Yr(e, t) {
  var r = ue(e), n = _e(e), u = r.visualViewport, i = n.clientWidth, l = n.clientHeight, s = 0, o = 0;
  if (u) {
    i = u.width, l = u.height;
    var f = Qt();
    (f || !f && t === "fixed") && (s = u.offsetLeft, o = u.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s + Dt(e),
    y: o
  };
}
function Hr(e) {
  var t, r = _e(e), n = Ct(e), u = (t = e.ownerDocument) == null ? void 0 : t.body, i = Le(r.scrollWidth, r.clientWidth, u ? u.scrollWidth : 0, u ? u.clientWidth : 0), l = Le(r.scrollHeight, r.clientHeight, u ? u.scrollHeight : 0, u ? u.clientHeight : 0), s = -n.scrollLeft + Dt(e), o = -n.scrollTop;
  return xe(u || r).direction === "rtl" && (s += Le(r.clientWidth, u ? u.clientWidth : 0) - i), {
    width: i,
    height: l,
    x: s,
    y: o
  };
}
function Ot(e) {
  var t = xe(e), r = t.overflow, n = t.overflowX, u = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + u + n);
}
function nr(e) {
  return ["html", "body", "#document"].indexOf(he(e)) >= 0 ? e.ownerDocument.body : oe(e) && Ot(e) ? e : nr(dt(e));
}
function Ke(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = nr(e), u = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = ue(n), l = u ? [i].concat(i.visualViewport || [], Ot(n) ? n : []) : n, s = t.concat(l);
  return u ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Ke(dt(l)))
  );
}
function yt(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Nr(e, t) {
  var r = Ne(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Mt(e, t, r) {
  return t === Gt ? yt(Yr(e, r)) : Ie(t) ? Nr(t, r) : yt(Hr(_e(e)));
}
function qr(e) {
  var t = Ke(dt(e)), r = ["absolute", "fixed"].indexOf(xe(e).position) >= 0, n = r && oe(e) ? ut(e) : e;
  return Ie(n) ? t.filter(function(u) {
    return Ie(u) && Kt(u, n) && he(u) !== "body";
  }) : [];
}
function zr(e, t, r, n) {
  var u = t === "clippingParents" ? qr(e) : [].concat(t), i = [].concat(u, [r]), l = i[0], s = i.reduce(function(o, f) {
    var c = Mt(e, f, n);
    return o.top = Le(c.top, o.top), o.right = ft(c.right, o.right), o.bottom = ft(c.bottom, o.bottom), o.left = Le(c.left, o.left), o;
  }, Mt(e, l, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function ur(e) {
  var t = e.reference, r = e.element, n = e.placement, u = n ? ge(n) : null, i = n ? qe(n) : null, l = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, o;
  switch (u) {
    case K:
      o = {
        x: l,
        y: t.y - r.height
      };
      break;
    case se:
      o = {
        x: l,
        y: t.y + t.height
      };
      break;
    case le:
      o = {
        x: t.x + t.width,
        y: s
      };
      break;
    case ee:
      o = {
        x: t.x - r.width,
        y: s
      };
      break;
    default:
      o = {
        x: t.x,
        y: t.y
      };
  }
  var f = u ? Ft(u) : null;
  if (f != null) {
    var c = f === "y" ? "height" : "width";
    switch (i) {
      case Ye:
        o[f] = o[f] - (t[c] / 2 - r[c] / 2);
        break;
      case tt:
        o[f] = o[f] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return o;
}
function rt(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, u = n === void 0 ? e.placement : n, i = r.strategy, l = i === void 0 ? e.strategy : i, s = r.boundary, o = s === void 0 ? dr : s, f = r.rootBoundary, c = f === void 0 ? Gt : f, d = r.elementContext, b = d === void 0 ? Ge : d, E = r.altBoundary, F = E === void 0 ? !1 : E, h = r.padding, v = h === void 0 ? 0 : h, A = tr(typeof v != "number" ? v : rr(v, nt)), m = b === Ge ? vr : Ge, D = e.rects.popper, w = e.elements[F ? m : b], _ = zr(Ie(w) ? w : w.contextElement || _e(e.elements.popper), o, c, l), T = Ne(e.elements.reference), R = ur({
    reference: T,
    element: D,
    placement: u
  }), W = yt(Object.assign({}, D, R)), U = b === Ge ? W : T, M = {
    top: _.top - U.top + A.top,
    bottom: U.bottom - _.bottom + A.bottom,
    left: _.left - U.left + A.left,
    right: U.right - _.right + A.right
  }, I = e.modifiersData.offset;
  if (b === Ge && I) {
    var J = I[u];
    Object.keys(M).forEach(function(N) {
      var Y = [le, se].indexOf(N) >= 0 ? 1 : -1, G = [K, se].indexOf(N) >= 0 ? "y" : "x";
      M[N] += J[G] * Y;
    });
  }
  return M;
}
function Xr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, u = r.boundary, i = r.rootBoundary, l = r.padding, s = r.flipVariations, o = r.allowedAutoPlacements, f = o === void 0 ? Zt : o, c = qe(n), d = c ? s ? jt : jt.filter(function(F) {
    return qe(F) === c;
  }) : nt, b = d.filter(function(F) {
    return f.indexOf(F) >= 0;
  });
  b.length === 0 && (b = d);
  var E = b.reduce(function(F, h) {
    return F[h] = rt(e, {
      placement: h,
      boundary: u,
      rootBoundary: i,
      padding: l
    })[ge(h)], F;
  }, {});
  return Object.keys(E).sort(function(F, h) {
    return E[F] - E[h];
  });
}
function Jr(e) {
  if (ge(e) === At)
    return [];
  var t = st(e);
  return [kt(e), t, kt(t)];
}
function Gr(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var u = r.mainAxis, i = u === void 0 ? !0 : u, l = r.altAxis, s = l === void 0 ? !0 : l, o = r.fallbackPlacements, f = r.padding, c = r.boundary, d = r.rootBoundary, b = r.altBoundary, E = r.flipVariations, F = E === void 0 ? !0 : E, h = r.allowedAutoPlacements, v = t.options.placement, A = ge(v), m = A === v, D = o || (m || !F ? [st(v)] : Jr(v)), w = [v].concat(D).reduce(function(re, ne) {
      return re.concat(ge(ne) === At ? Xr(t, {
        placement: ne,
        boundary: c,
        rootBoundary: d,
        padding: f,
        flipVariations: F,
        allowedAutoPlacements: h
      }) : ne);
    }, []), _ = t.rects.reference, T = t.rects.popper, R = /* @__PURE__ */ new Map(), W = !0, U = w[0], M = 0; M < w.length; M++) {
      var I = w[M], J = ge(I), N = qe(I) === Ye, Y = [K, se].indexOf(J) >= 0, G = Y ? "width" : "height", P = rt(t, {
        placement: I,
        boundary: c,
        rootBoundary: d,
        altBoundary: b,
        padding: f
      }), q = Y ? N ? le : ee : N ? se : K;
      _[G] > T[G] && (q = st(q));
      var te = st(q), Z = [];
      if (i && Z.push(P[J] <= 0), s && Z.push(P[q] <= 0, P[te] <= 0), Z.every(function(re) {
        return re;
      })) {
        U = I, W = !1;
        break;
      }
      R.set(I, Z);
    }
    if (W)
      for (var me = F ? 3 : 1, Fe = function(ne) {
        var be = w.find(function(ye) {
          var fe = R.get(ye);
          if (fe)
            return fe.slice(0, ne).every(function(Te) {
              return Te;
            });
        });
        if (be)
          return U = be, "break";
      }, ce = me; ce > 0; ce--) {
        var Ce = Fe(ce);
        if (Ce === "break") break;
      }
    t.placement !== U && (t.modifiersData[n]._skip = !0, t.placement = U, t.reset = !0);
  }
}
const Zr = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Gr,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Lt(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function It(e) {
  return [K, le, se, ee].some(function(t) {
    return e[t] >= 0;
  });
}
function Qr(e) {
  var t = e.state, r = e.name, n = t.rects.reference, u = t.rects.popper, i = t.modifiersData.preventOverflow, l = rt(t, {
    elementContext: "reference"
  }), s = rt(t, {
    altBoundary: !0
  }), o = Lt(l, n), f = Lt(s, u, i), c = It(o), d = It(f);
  t.modifiersData[r] = {
    referenceClippingOffsets: o,
    popperEscapeOffsets: f,
    isReferenceHidden: c,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": d
  });
}
const Kr = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Qr
};
function en(e, t, r) {
  var n = ge(e), u = [ee, K].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, l = i[0], s = i[1];
  return l = l || 0, s = (s || 0) * u, [ee, le].indexOf(n) >= 0 ? {
    x: s,
    y: l
  } : {
    x: l,
    y: s
  };
}
function tn(e) {
  var t = e.state, r = e.options, n = e.name, u = r.offset, i = u === void 0 ? [0, 0] : u, l = Zt.reduce(function(c, d) {
    return c[d] = en(d, t.rects, i), c;
  }, {}), s = l[t.placement], o = s.x, f = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += o, t.modifiersData.popperOffsets.y += f), t.modifiersData[n] = l;
}
const rn = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: tn
};
function nn(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = ur({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const un = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: nn,
  data: {}
};
function an(e) {
  return e === "x" ? "y" : "x";
}
function on(e) {
  var t = e.state, r = e.options, n = e.name, u = r.mainAxis, i = u === void 0 ? !0 : u, l = r.altAxis, s = l === void 0 ? !1 : l, o = r.boundary, f = r.rootBoundary, c = r.altBoundary, d = r.padding, b = r.tether, E = b === void 0 ? !0 : b, F = r.tetherOffset, h = F === void 0 ? 0 : F, v = rt(t, {
    boundary: o,
    rootBoundary: f,
    padding: d,
    altBoundary: c
  }), A = ge(t.placement), m = qe(t.placement), D = !m, w = Ft(A), _ = an(w), T = t.modifiersData.popperOffsets, R = t.rects.reference, W = t.rects.popper, U = typeof h == "function" ? h(Object.assign({}, t.rects, {
    placement: t.placement
  })) : h, M = typeof U == "number" ? {
    mainAxis: U,
    altAxis: U
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, U), I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, J = {
    x: 0,
    y: 0
  };
  if (T) {
    if (i) {
      var N, Y = w === "y" ? K : ee, G = w === "y" ? se : le, P = w === "y" ? "height" : "width", q = T[w], te = q + v[Y], Z = q - v[G], me = E ? -W[P] / 2 : 0, Fe = m === Ye ? R[P] : W[P], ce = m === Ye ? -W[P] : -R[P], Ce = t.elements.arrow, re = E && Ce ? xt(Ce) : {
        width: 0,
        height: 0
      }, ne = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : er(), be = ne[Y], ye = ne[G], fe = Qe(0, R[P], re[P]), Te = D ? R[P] / 2 - me - fe - be - M.mainAxis : Fe - fe - be - M.mainAxis, Xe = D ? -R[P] / 2 + me + fe + ye + M.mainAxis : ce + fe + ye + M.mainAxis, De = t.elements.arrow && ut(t.elements.arrow), Be = De ? w === "y" ? De.clientTop || 0 : De.clientLeft || 0 : 0, Ae = (N = I == null ? void 0 : I[w]) != null ? N : 0, ve = q + Te - Ae - Be, Pe = q + Xe - Ae, Oe = Qe(E ? ft(te, ve) : te, q, E ? Le(Z, Pe) : Z);
      T[w] = Oe, J[w] = Oe - q;
    }
    if (s) {
      var je, Je = w === "x" ? K : ee, Ve = w === "x" ? se : le, pe = T[_], ae = _ === "y" ? "height" : "width", Se = pe + v[Je], y = pe - v[Ve], x = [K, ee].indexOf(A) !== -1, j = (je = I == null ? void 0 : I[_]) != null ? je : 0, S = x ? Se : pe - R[ae] - W[ae] - j + M.altAxis, k = x ? pe + R[ae] + W[ae] - j - M.altAxis : y, V = E && x ? Tr(S, pe, k) : Qe(E ? S : Se, pe, E ? k : y);
      T[_] = V, J[_] = V - pe;
    }
    t.modifiersData[n] = J;
  }
}
const sn = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: on,
  requiresIfExists: ["offset"]
};
function ln(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function cn(e) {
  return e === ue(e) || !oe(e) ? Ct(e) : ln(e);
}
function fn(e) {
  var t = e.getBoundingClientRect(), r = He(t.width) / e.offsetWidth || 1, n = He(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function pn(e, t, r) {
  r === void 0 && (r = !1);
  var n = oe(t), u = oe(t) && fn(t), i = _e(t), l = Ne(e, u, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, o = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((he(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ot(i)) && (s = cn(t)), oe(t) ? (o = Ne(t, !0), o.x += t.clientLeft, o.y += t.clientTop) : i && (o.x = Dt(i))), {
    x: l.left + s.scrollLeft - o.x,
    y: l.top + s.scrollTop - o.y,
    width: l.width,
    height: l.height
  };
}
function dn(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function u(i) {
    r.add(i.name);
    var l = [].concat(i.requires || [], i.requiresIfExists || []);
    l.forEach(function(s) {
      if (!r.has(s)) {
        var o = t.get(s);
        o && u(o);
      }
    }), n.push(i);
  }
  return e.forEach(function(i) {
    r.has(i.name) || u(i);
  }), n;
}
function vn(e) {
  var t = dn(e);
  return Fr.reduce(function(r, n) {
    return r.concat(t.filter(function(u) {
      return u.phase === n;
    }));
  }, []);
}
function En(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function gn(e) {
  var t = e.reduce(function(r, n) {
    var u = r[n.name];
    return r[n.name] = u ? Object.assign({}, u, n, {
      options: Object.assign({}, u.options, n.options),
      data: Object.assign({}, u.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var Vt = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Wt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function hn(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, u = t.defaultOptions, i = u === void 0 ? Vt : u;
  return function(s, o, f) {
    f === void 0 && (f = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Vt, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: o
      },
      attributes: {},
      styles: {}
    }, d = [], b = !1, E = {
      state: c,
      setOptions: function(A) {
        var m = typeof A == "function" ? A(c.options) : A;
        h(), c.options = Object.assign({}, i, c.options, m), c.scrollParents = {
          reference: Ie(s) ? Ke(s) : s.contextElement ? Ke(s.contextElement) : [],
          popper: Ke(o)
        };
        var D = vn(gn([].concat(n, c.options.modifiers)));
        return c.orderedModifiers = D.filter(function(w) {
          return w.enabled;
        }), F(), E.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!b) {
          var A = c.elements, m = A.reference, D = A.popper;
          if (Wt(m, D)) {
            c.rects = {
              reference: pn(m, ut(D), c.options.strategy === "fixed"),
              popper: xt(D)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(M) {
              return c.modifiersData[M.name] = Object.assign({}, M.data);
            });
            for (var w = 0; w < c.orderedModifiers.length; w++) {
              if (c.reset === !0) {
                c.reset = !1, w = -1;
                continue;
              }
              var _ = c.orderedModifiers[w], T = _.fn, R = _.options, W = R === void 0 ? {} : R, U = _.name;
              typeof T == "function" && (c = T({
                state: c,
                options: W,
                name: U,
                instance: E
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: En(function() {
        return new Promise(function(v) {
          E.forceUpdate(), v(c);
        });
      }),
      destroy: function() {
        h(), b = !0;
      }
    };
    if (!Wt(s, o))
      return E;
    E.setOptions(f).then(function(v) {
      !b && f.onFirstUpdate && f.onFirstUpdate(v);
    });
    function F() {
      c.orderedModifiers.forEach(function(v) {
        var A = v.name, m = v.options, D = m === void 0 ? {} : m, w = v.effect;
        if (typeof w == "function") {
          var _ = w({
            state: c,
            name: A,
            instance: E,
            options: D
          }), T = function() {
          };
          d.push(_ || T);
        }
      });
    }
    function h() {
      d.forEach(function(v) {
        return v();
      }), d = [];
    }
    return E;
  };
}
var mn = [Vr, un, Lr, Or, rn, Zr, sn, Sr, Kr], bn = /* @__PURE__ */ hn({
  defaultModifiers: mn
}), gt, Ut;
function yn() {
  if (Ut) return gt;
  Ut = 1;
  var e = typeof Element < "u", t = typeof Map == "function", r = typeof Set == "function", n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function u(i, l) {
    if (i === l) return !0;
    if (i && l && typeof i == "object" && typeof l == "object") {
      if (i.constructor !== l.constructor) return !1;
      var s, o, f;
      if (Array.isArray(i)) {
        if (s = i.length, s != l.length) return !1;
        for (o = s; o-- !== 0; )
          if (!u(i[o], l[o])) return !1;
        return !0;
      }
      var c;
      if (t && i instanceof Map && l instanceof Map) {
        if (i.size !== l.size) return !1;
        for (c = i.entries(); !(o = c.next()).done; )
          if (!l.has(o.value[0])) return !1;
        for (c = i.entries(); !(o = c.next()).done; )
          if (!u(o.value[1], l.get(o.value[0]))) return !1;
        return !0;
      }
      if (r && i instanceof Set && l instanceof Set) {
        if (i.size !== l.size) return !1;
        for (c = i.entries(); !(o = c.next()).done; )
          if (!l.has(o.value[0])) return !1;
        return !0;
      }
      if (n && ArrayBuffer.isView(i) && ArrayBuffer.isView(l)) {
        if (s = i.length, s != l.length) return !1;
        for (o = s; o-- !== 0; )
          if (i[o] !== l[o]) return !1;
        return !0;
      }
      if (i.constructor === RegExp) return i.source === l.source && i.flags === l.flags;
      if (i.valueOf !== Object.prototype.valueOf && typeof i.valueOf == "function" && typeof l.valueOf == "function") return i.valueOf() === l.valueOf();
      if (i.toString !== Object.prototype.toString && typeof i.toString == "function" && typeof l.toString == "function") return i.toString() === l.toString();
      if (f = Object.keys(i), s = f.length, s !== Object.keys(l).length) return !1;
      for (o = s; o-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(l, f[o])) return !1;
      if (e && i instanceof Element) return !1;
      for (o = s; o-- !== 0; )
        if (!((f[o] === "_owner" || f[o] === "__v" || f[o] === "__o") && i.$$typeof) && !u(i[f[o]], l[f[o]]))
          return !1;
      return !0;
    }
    return i !== i && l !== l;
  }
  return gt = function(l, s) {
    try {
      return u(l, s);
    } catch (o) {
      if ((o.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), !1;
      throw o;
    }
  }, gt;
}
var An = yn();
const wn = /* @__PURE__ */ Jt(An);
var xn = [], Fn = function(t, r, n) {
  n === void 0 && (n = {});
  var u = ke.useRef(null), i = {
    onFirstUpdate: n.onFirstUpdate,
    placement: n.placement || "bottom",
    strategy: n.strategy || "absolute",
    modifiers: n.modifiers || xn
  }, l = ke.useState({
    styles: {
      popper: {
        position: i.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), s = l[0], o = l[1], f = ke.useMemo(function() {
    return {
      name: "updateState",
      enabled: !0,
      phase: "write",
      fn: function(E) {
        var F = E.state, h = Object.keys(F.elements);
        lr.flushSync(function() {
          o({
            styles: Bt(h.map(function(v) {
              return [v, F.styles[v] || {}];
            })),
            attributes: Bt(h.map(function(v) {
              return [v, F.attributes[v]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), c = ke.useMemo(function() {
    var b = {
      onFirstUpdate: i.onFirstUpdate,
      placement: i.placement,
      strategy: i.strategy,
      modifiers: [].concat(i.modifiers, [f, {
        name: "applyStyles",
        enabled: !1
      }])
    };
    return wn(u.current, b) ? u.current || b : (u.current = b, b);
  }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, f]), d = ke.useRef();
  return Pt(function() {
    d.current && d.current.setOptions(c);
  }, [c]), Pt(function() {
    if (!(t == null || r == null)) {
      var b = n.createPopper || bn, E = b(t, r, c);
      return d.current = E, function() {
        E.destroy(), d.current = null;
      };
    }
  }, [t, r, n.createPopper]), {
    state: d.current ? d.current.state : null,
    styles: s.styles,
    attributes: s.attributes,
    update: d.current ? d.current.update : null,
    forceUpdate: d.current ? d.current.forceUpdate : null
  };
}, Ue = /* @__PURE__ */ ((e) => (e.Up = "ArrowUp", e.Tab = "Tab", e.Down = "ArrowDown", e.Return = "Enter", e.Escape = "Escape", e))(Ue || {});
const Cn = "@", ze = "@[__display__](__id__)";
var ht, Yt;
function Dn() {
  if (Yt) return ht;
  Yt = 1;
  var e = function(t, r, n, u, i, l, s, o) {
    if (process.env.NODE_ENV !== "production" && r === void 0)
      throw new Error("invariant requires an error message argument");
    if (!t) {
      var f;
      if (r === void 0)
        f = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var c = [n, u, i, l, s, o], d = 0;
        f = new Error(
          r.replace(/%s/g, function() {
            return c[d++];
          })
        ), f.name = "Invariant Violation";
      }
      throw f.framesToPop = 1, f;
    }
  };
  return ht = e, ht;
}
var On = Dn();
const pt = /* @__PURE__ */ Jt(On), ar = (e = ze) => {
  let t = 0;
  return e.indexOf("__id__") >= 0 && t++, e.indexOf("__display__") >= 0 && t++, t;
}, Rn = (e, t = ze) => {
  var u;
  const r = (((u = new RegExp(`${e.toString()}|`).exec("")) == null ? void 0 : u.length) ?? 0) - 1, n = ar(t);
  return pt(
    r === n,
    `Number of capturing groups in RegExp ${e.toString()} (${r}) does not match the number of placeholders in the markup '${t}' (${n})`
  ), e;
}, _n = (e) => {
  const t = /^\/(.+)\/(\w+)?$/;
  return new RegExp(
    e.map((r) => {
      const [, n, u] = t.exec(r.toString()) ?? [];
      return pt(
        !u,
        `RegExp flags are not supported. Change /${n}/${u} into /${n}/`
      ), `(${n})`;
    }).join("|"),
    "g"
  );
};
function ir(e, t, r) {
  return r ? (t == null ? void 0 : t.replace(/ /g, " ")) ?? e.replace(/ /g, " ") : t ?? e;
}
var de = /* @__PURE__ */ ((e) => (e.id = "__id__", e.display = "__display__", e))(de || {});
const Ht = (e, t) => {
  pt(
    t === "id" || t === "display",
    `Second arg must be either "id" or "display", got: "${t}"`
  );
  let r = e.indexOf(de.id), n = e.indexOf(de.display);
  return r < 0 && (r = null), n < 0 && (n = null), pt(
    r !== null || n !== null,
    `The markup '${e}' does not contain either of the placeholders '__id__' or '__display__'`
  ), r !== null && n !== null ? t === "id" && r <= n || t === "display" && n <= r ? 0 : 1 : 0;
}, lt = (e) => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Tn = (e = ze) => {
  const t = lt(e), r = e[e.indexOf(de.display) + de.display.length], n = e[e.indexOf(de.id) + de.id.length];
  return new RegExp(
    t.replace(
      de.display,
      `([^${lt(r || "")}]+?)`
    ).replace(de.id, `([^${lt(n || "")}]+?)`)
  );
}, Bn = () => {
}, at = (e, t, r, n = Bn) => {
  const u = _n(
    t.map(
      (c) => c.regex ? Rn(c.regex, c.markup) : Tn(c.markup)
    )
  );
  let i = 2;
  const l = t.map(({ markup: c }) => {
    const d = i;
    return i += ar(c) + 1, d;
  });
  let s, o = 0, f = 0;
  for (; (s = u.exec(e)) !== null; ) {
    const c = l.find((D) => !!(s != null && s[D]));
    if (c === void 0)
      continue;
    const d = l.indexOf(c), { markup: b, displayTransform: E } = t[d], F = c + Ht(b ?? ze, "id"), h = c + Ht(b ?? ze, "display"), v = s[F], A = (E ?? ir)(
      v,
      s[h]
    ), m = e.substring(o, s.index);
    n(m, o, f), f += m.length, r(
      s[0],
      s.index,
      f,
      v,
      A,
      d,
      o
    ), f += A.length, o = u.lastIndex;
  }
  o < e.length && n(e.substring(o), o, f);
}, Ze = (e, t) => {
  const r = [];
  return at(
    e,
    t,
    (n, u, i, l, s, o) => {
      r.push({
        id: l,
        index: u,
        display: s,
        plainTextIndex: i,
        dataSourceIndex: o
      });
    }
  ), r;
}, et = (e, t, r, n) => e.substring(0, t) + n + e.substring(r), Me = (e, t) => {
  let r = "";
  return at(
    e,
    t,
    (n, u, i, l, s) => {
      r += s;
    },
    (n) => {
      r += n;
    }
  ), r;
};
function Pn(e) {
  const t = { x: 0, y: 0, width: 0, height: 0 };
  if (!e)
    return t;
  const r = getComputedStyle(e);
  return t.width = e.clientWidth, t.width -= parseFloat(r.paddingLeft), t.width -= parseFloat(r.paddingRight), t.height = e.clientHeight, t.height -= parseFloat(r.paddingTop), t.height -= parseFloat(r.paddingBottom), t.x = e.offsetLeft, t.x += parseFloat(r.paddingLeft), t.x += parseFloat(r.borderLeft), t.y = e.offsetTop, t.y += parseFloat(r.paddingTop), t.y += parseFloat(r.borderTop), t;
}
const jn = [
  {
    base: "A",
    letters: /(&#65;|&#9398;|&#65313;|&#192;|&#193;|&#194;|&#7846;|&#7844;|&#7850;|&#7848;|&#195;|&#256;|&#258;|&#7856;|&#7854;|&#7860;|&#7858;|&#550;|&#480;|&#196;|&#478;|&#7842;|&#197;|&#506;|&#461;|&#512;|&#514;|&#7840;|&#7852;|&#7862;|&#7680;|&#260;|&#570;|&#11375;|[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F])/g
  },
  {
    base: "AA",
    letters: /(&#42802;|[\uA732])/g
  },
  {
    base: "AE",
    letters: /(&#198;|&#508;|&#482;|[\u00C6\u01FC\u01E2])/g
  },
  {
    base: "AO",
    letters: /(&#42804;|[\uA734])/g
  },
  {
    base: "AU",
    letters: /(&#42806;|[\uA736])/g
  },
  {
    base: "AV",
    letters: /(&#42808;|&#42810;|[\uA738\uA73A])/g
  },
  {
    base: "AY",
    letters: /(&#42812;|[\uA73C])/g
  },
  {
    base: "B",
    letters: /(&#66;|&#9399;|&#65314;|&#7682;|&#7684;|&#7686;|&#579;|&#386;|&#385;|[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181])/g
  },
  {
    base: "C",
    letters: /(&#67;|&#9400;|&#65315;|&#262;|&#264;|&#266;|&#268;|&#199;|&#7688;|&#391;|&#571;|&#42814;|[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E])/g
  },
  {
    base: "D",
    letters: /(&#68;|&#9401;|&#65316;|&#7690;|&#270;|&#7692;|&#7696;|&#7698;|&#7694;|&#272;|&#395;|&#394;|&#393;|&#42873;|&#208;|[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0])/g
  },
  {
    base: "DZ",
    letters: /(&#497;|&#452;|[\u01F1\u01C4])/g
  },
  {
    base: "Dz",
    letters: /(&#498;|&#453;|[\u01F2\u01C5])/g
  },
  {
    base: "E",
    letters: /(&#69;|&#9402;|&#65317;|&#200;|&#201;|&#202;|&#7872;|&#7870;|&#7876;|&#7874;|&#7868;|&#274;|&#7700;|&#7702;|&#276;|&#278;|&#203;|&#7866;|&#282;|&#516;|&#518;|&#7864;|&#7878;|&#552;|&#7708;|&#280;|&#7704;|&#7706;|&#400;|&#398;|[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E])/g
  },
  {
    base: "F",
    letters: /(&#70;|&#9403;|&#65318;|&#7710;|&#401;|&#42875;|[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B])/g
  },
  {
    base: "G",
    letters: /(&#71;|&#9404;|&#65319;|&#500;|&#284;|&#7712;|&#286;|&#288;|&#486;|&#290;|&#484;|&#403;|&#42912;|&#42877;|&#42878;|[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E])/g
  },
  {
    base: "H",
    letters: /(&#72;|&#9405;|&#65320;|&#292;|&#7714;|&#7718;|&#542;|&#7716;|&#7720;|&#7722;|&#294;|&#11367;|&#11381;|&#42893;|[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D])/g
  },
  {
    base: "I",
    letters: /(&#73;|&#9406;|&#65321;|&#204;|&#205;|&#206;|&#296;|&#298;|&#300;|&#304;|&#207;|&#7726;|&#7880;|&#463;|&#520;|&#522;|&#7882;|&#302;|&#7724;|&#407;|[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197])/g
  },
  {
    base: "J",
    letters: /(&#74;|&#9407;|&#65322;|&#308;|&#584;|[\u004A\u24BF\uFF2A\u0134\u0248])/g
  },
  {
    base: "K",
    letters: /(&#75;|&#9408;|&#65323;|&#7728;|&#488;|&#7730;|&#310;|&#7732;|&#408;|&#11369;|&#42816;|&#42818;|&#42820;|&#42914;|[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2])/g
  },
  {
    base: "L",
    letters: /(&#76;|&#9409;|&#65324;|&#319;|&#313;|&#317;|&#7734;|&#7736;|&#315;|&#7740;|&#7738;|&#321;|&#573;|&#11362;|&#11360;|&#42824;|&#42822;|&#42880;|[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780])/g
  },
  {
    base: "LJ",
    letters: /(&#455;|[\u01C7])/g
  },
  {
    base: "Lj",
    letters: /(&#456;|[\u01C8])/g
  },
  {
    base: "M",
    letters: /(&#77;|&#9410;|&#65325;|&#7742;|&#7744;|&#7746;|&#11374;|&#412;|[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C])/g
  },
  {
    base: "N",
    letters: /(&#78;|&#9411;|&#65326;|&#504;|&#323;|&#209;|&#7748;|&#327;|&#7750;|&#325;|&#7754;|&#7752;|&#544;|&#413;|&#42896;|&#42916;|&#330;|[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4\u014A])/g
  },
  {
    base: "NJ",
    letters: /(&#458;|[\u01CA])/g
  },
  {
    base: "Nj",
    letters: /(&#459;|[\u01CB])/g
  },
  {
    base: "O",
    letters: /(&#79;|&#9412;|&#65327;|&#210;|&#211;|&#212;|&#7890;|&#7888;|&#7894;|&#7892;|&#213;|&#7756;|&#556;|&#7758;|&#332;|&#7760;|&#7762;|&#334;|&#558;|&#560;|&#214;|&#554;|&#7886;|&#336;|&#465;|&#524;|&#526;|&#416;|&#7900;|&#7898;|&#7904;|&#7902;|&#7906;|&#7884;|&#7896;|&#490;|&#492;|&#216;|&#510;|&#390;|&#415;|&#42826;|&#42828;|[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C])/g
  },
  {
    base: "OE",
    letters: /(&#338;|[\u0152])/g
  },
  {
    base: "OI",
    letters: /(&#418;|[\u01A2])/g
  },
  {
    base: "OO",
    letters: /(&#42830;|[\uA74E])/g
  },
  {
    base: "OU",
    letters: /(&#546;|[\u0222])/g
  },
  {
    base: "P",
    letters: /(&#80;|&#9413;|&#65328;|&#7764;|&#7766;|&#420;|&#11363;|&#42832;|&#42834;|&#42836;|[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754])/g
  },
  {
    base: "Q",
    letters: /(&#81;|&#9414;|&#65329;|&#42838;|&#42840;|&#586;|[\u0051\u24C6\uFF31\uA756\uA758\u024A])/g
  },
  {
    base: "R",
    letters: /(&#82;|&#9415;|&#65330;|&#340;|&#7768;|&#344;|&#528;|&#530;|&#7770;|&#7772;|&#342;|&#7774;|&#588;|&#11364;|&#42842;|&#42918;|&#42882;|[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782])/g
  },
  {
    base: "S",
    letters: /(&#83;|&#9416;|&#65331;|&#7838;|&#346;|&#7780;|&#348;|&#7776;|&#352;|&#7782;|&#7778;|&#7784;|&#536;|&#350;|&#11390;|&#42920;|&#42884;|[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784])/g
  },
  {
    base: "T",
    letters: /(&#84;|&#9417;|&#65332;|&#7786;|&#356;|&#7788;|&#538;|&#354;|&#7792;|&#7790;|&#358;|&#428;|&#430;|&#574;|&#42886;|[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786])/g
  },
  {
    base: "TH",
    letters: /(&#222;|[\u00DE])/g
  },
  {
    base: "TZ",
    letters: /(&#42792;|[\uA728])/g
  },
  {
    base: "U",
    letters: /(&#85;|&#9418;|&#65333;|&#217;|&#218;|&#219;|&#360;|&#7800;|&#362;|&#7802;|&#364;|&#220;|&#475;|&#471;|&#469;|&#473;|&#7910;|&#366;|&#368;|&#467;|&#532;|&#534;|&#431;|&#7914;|&#7912;|&#7918;|&#7916;|&#7920;|&#7908;|&#7794;|&#370;|&#7798;|&#7796;|&#580;|[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244])/g
  },
  {
    base: "V",
    letters: /(&#86;|&#9419;|&#65334;|&#7804;|&#7806;|&#434;|&#42846;|&#581;|[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245])/g
  },
  {
    base: "VY",
    letters: /(&#42848;|[\uA760])/g
  },
  {
    base: "W",
    letters: /(&#87;|&#9420;|&#65335;|&#7808;|&#7810;|&#372;|&#7814;|&#7812;|&#7816;|&#11378;|[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72])/g
  },
  {
    base: "X",
    letters: /(&#88;|&#9421;|&#65336;|&#7818;|&#7820;|[\u0058\u24CD\uFF38\u1E8A\u1E8C])/g
  },
  {
    base: "Y",
    letters: /(&#89;|&#9422;|&#65337;|&#7922;|&#221;|&#374;|&#7928;|&#562;|&#7822;|&#376;|&#7926;|&#7924;|&#435;|&#590;|&#7934;|[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE])/g
  },
  {
    base: "Z",
    letters: /(&#90;|&#9423;|&#65338;|&#377;|&#7824;|&#379;|&#381;|&#7826;|&#7828;|&#437;|&#548;|&#11391;|&#11371;|&#42850;|[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762])/g
  },
  {
    base: "a",
    letters: /(&#97;|&#9424;|&#65345;|&#7834;|&#224;|&#225;|&#226;|&#7847;|&#7845;|&#7851;|&#7849;|&#227;|&#257;|&#259;|&#7857;|&#7855;|&#7861;|&#7859;|&#551;|&#481;|&#228;|&#479;|&#7843;|&#229;|&#507;|&#462;|&#513;|&#515;|&#7841;|&#7853;|&#7863;|&#7681;|&#261;|&#11365;|&#592;|[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250])/g
  },
  {
    base: "aa",
    letters: /(&#42803;|[\uA733])/g
  },
  {
    base: "ae",
    letters: /(&#230;|&#509;|&#483;|[\u00E6\u01FD\u01E3])/g
  },
  {
    base: "ao",
    letters: /(&#42805;|[\uA735])/g
  },
  {
    base: "au",
    letters: /(&#42807;|[\uA737])/g
  },
  {
    base: "av",
    letters: /(&#42809;|&#42811;|[\uA739\uA73B])/g
  },
  {
    base: "ay",
    letters: /(&#42813;|[\uA73D])/g
  },
  {
    base: "b",
    letters: /(&#98;|&#9425;|&#65346;|&#7683;|&#7685;|&#7687;|&#384;|&#387;|&#595;|[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253])/g
  },
  {
    base: "c",
    letters: /(&#99;|&#9426;|&#65347;|&#263;|&#265;|&#267;|&#269;|&#231;|&#7689;|&#392;|&#572;|&#42815;|&#8580;|[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184])/g
  },
  {
    base: "d",
    letters: /(&#100;|&#9427;|&#65348;|&#7691;|&#271;|&#7693;|&#7697;|&#7699;|&#7695;|&#273;|&#396;|&#598;|&#599;|&#42874;|&#240;|[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A\u00F0])/g
  },
  {
    base: "dz",
    letters: /(&#499;|&#454;|[\u01F3\u01C6])/g
  },
  {
    base: "e",
    letters: /(&#101;|&#9428;|&#65349;|&#232;|&#233;|&#234;|&#7873;|&#7871;|&#7877;|&#7875;|&#7869;|&#275;|&#7701;|&#7703;|&#277;|&#279;|&#235;|&#7867;|&#283;|&#517;|&#519;|&#7865;|&#7879;|&#553;|&#7709;|&#281;|&#7705;|&#7707;|&#583;|&#603;|&#477;|[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD])/g
  },
  {
    base: "f",
    letters: /(&#102;|&#9429;|&#65350;|&#7711;|&#402;|&#42876;|[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C])/g
  },
  {
    base: "g",
    letters: /(&#103;|&#9430;|&#65351;|&#501;|&#285;|&#7713;|&#287;|&#289;|&#487;|&#291;|&#485;|&#608;|&#42913;|&#7545;|&#42879;|[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F])/g
  },
  {
    base: "h",
    letters: /(&#104;|&#9431;|&#65352;|&#293;|&#7715;|&#7719;|&#543;|&#7717;|&#7721;|&#7723;|&#7830;|&#295;|&#11368;|&#11382;|&#613;|[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265])/g
  },
  {
    base: "hv",
    letters: /(&#405;|[\u0195])/g
  },
  {
    base: "i",
    letters: /(&#105;|&#9432;|&#65353;|&#236;|&#237;|&#238;|&#297;|&#299;|&#301;|&#239;|&#7727;|&#7881;|&#464;|&#521;|&#523;|&#7883;|&#303;|&#7725;|&#616;|&#305;|[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131])/g
  },
  {
    base: "ij",
    letters: /(&#307;|[\u0133])/g
  },
  {
    base: "j",
    letters: /(&#106;|&#9433;|&#65354;|&#309;|&#496;|&#585;|[\u006A\u24D9\uFF4A\u0135\u01F0\u0249])/g
  },
  {
    base: "k",
    letters: /(&#107;|&#9434;|&#65355;|&#7729;|&#489;|&#7731;|&#311;|&#7733;|&#409;|&#11370;|&#42817;|&#42819;|&#42821;|&#42915;|[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3])/g
  },
  {
    base: "l",
    letters: /(&#108;|&#9435;|&#65356;|&#320;|&#314;|&#318;|&#7735;|&#7737;|&#316;|&#7741;|&#7739;|&#322;|&#410;|&#619;|&#11361;|&#42825;|&#42881;|&#42823;|[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u0142\u019A\u026B\u2C61\uA749\uA781\uA747])/g
  },
  {
    base: "lj",
    letters: /(&#457;|[\u01C9])/g
  },
  {
    base: "m",
    letters: /(&#109;|&#9436;|&#65357;|&#7743;|&#7745;|&#7747;|&#625;|&#623;|[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F])/g
  },
  {
    base: "n",
    letters: /(&#110;|&#9437;|&#65358;|&#505;|&#324;|&#241;|&#7749;|&#328;|&#7751;|&#326;|&#7755;|&#7753;|&#414;|&#626;|&#329;|&#42897;|&#42917;|&#331;|[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u014B])/g
  },
  {
    base: "nj",
    letters: /(&#460;|[\u01CC])/g
  },
  {
    base: "o",
    letters: /(&#111;|&#9438;|&#65359;|&#242;|&#243;|&#244;|&#7891;|&#7889;|&#7895;|&#7893;|&#245;|&#7757;|&#557;|&#7759;|&#333;|&#7761;|&#7763;|&#335;|&#559;|&#561;|&#246;|&#555;|&#7887;|&#337;|&#466;|&#525;|&#527;|&#417;|&#7901;|&#7899;|&#7905;|&#7903;|&#7907;|&#7885;|&#7897;|&#491;|&#493;|&#248;|&#511;|&#596;|&#42827;|&#42829;|&#629;|[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275])/g
  },
  {
    base: "oe",
    letters: /(&#339;|[\u0153])/g
  },
  {
    base: "oi",
    letters: /(&#419;|[\u01A3])/g
  },
  {
    base: "ou",
    letters: /(&#547;|[\u0223])/g
  },
  {
    base: "oo",
    letters: /(&#42831;|[\uA74F])/g
  },
  {
    base: "p",
    letters: /(&#112;|&#9439;|&#65360;|&#7765;|&#7767;|&#421;|&#7549;|&#42833;|&#42835;|&#42837;|[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755])/g
  },
  {
    base: "q",
    letters: /(&#113;|&#9440;|&#65361;|&#587;|&#42839;|&#42841;|[\u0071\u24E0\uFF51\u024B\uA757\uA759])/g
  },
  {
    base: "r",
    letters: /(&#114;|&#9441;|&#65362;|&#341;|&#7769;|&#345;|&#529;|&#531;|&#7771;|&#7773;|&#343;|&#7775;|&#589;|&#637;|&#42843;|&#42919;|&#42883;|[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783])/g
  },
  {
    base: "s",
    letters: /(&#115;|&#9442;|&#65363;|&#347;|&#7781;|&#349;|&#7777;|&#353;|&#7783;|&#7779;|&#7785;|&#537;|&#351;|&#575;|&#42921;|&#42885;|&#7835;|&#383;|[\u0073\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u017F])/g
  },
  {
    base: "ss",
    letters: /(&#223;|[\u00DF])/g
  },
  {
    base: "t",
    letters: /(&#116;|&#9443;|&#65364;|&#7787;|&#7831;|&#357;|&#7789;|&#539;|&#355;|&#7793;|&#7791;|&#359;|&#429;|&#648;|&#11366;|&#42887;|[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787])/g
  },
  {
    base: "th",
    letters: /(&#254;|[\u00FE])/g
  },
  {
    base: "tz",
    letters: /(&#42793;|[\uA729])/g
  },
  {
    base: "u",
    letters: /(&#117;|&#9444;|&#65365;|&#249;|&#250;|&#251;|&#361;|&#7801;|&#363;|&#7803;|&#365;|&#252;|&#476;|&#472;|&#470;|&#474;|&#7911;|&#367;|&#369;|&#468;|&#533;|&#535;|&#432;|&#7915;|&#7913;|&#7919;|&#7917;|&#7921;|&#7909;|&#7795;|&#371;|&#7799;|&#7797;|&#649;|[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289])/g
  },
  {
    base: "v",
    letters: /(&#118;|&#9445;|&#65366;|&#7805;|&#7807;|&#651;|&#42847;|&#652;|[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C])/g
  },
  {
    base: "vy",
    letters: /(&#42849;|[\uA761])/g
  },
  {
    base: "w",
    letters: /(&#119;|&#9446;|&#65367;|&#7809;|&#7811;|&#373;|&#7815;|&#7813;|&#7832;|&#7817;|&#11379;|[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73])/g
  },
  {
    base: "x",
    letters: /(&#120;|&#9447;|&#65368;|&#7819;|&#7821;|[\u0078\u24E7\uFF58\u1E8B\u1E8D])/g
  },
  {
    base: "y",
    letters: /(&#121;|&#9448;|&#65369;|&#7923;|&#253;|&#375;|&#7929;|&#563;|&#7823;|&#255;|&#7927;|&#7833;|&#7925;|&#436;|&#591;|&#7935;|[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF])/g
  },
  {
    base: "z",
    letters: /(&#122;|&#9449;|&#65370;|&#378;|&#7825;|&#380;|&#382;|&#7827;|&#7829;|&#438;|&#549;|&#576;|&#11372;|&#42851;|[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763])/g
  }
], Sn = (e) => {
  let t = e;
  return jn.forEach((r) => {
    t = t.replace(
      r.letters,
      r.base
    );
  }), t;
}, Nt = (e) => Sn(e).toLowerCase(), or = (e, t, r) => r ? Nt(e).indexOf(Nt(t)) : e.toLowerCase().indexOf(t.toLowerCase()), $n = (e, t) => Array.isArray(e) ? function(r) {
  const n = [];
  for (let u = 0, i = e.length; u < i; ++u) {
    const l = e[u].display ?? e[u].id;
    or(l, r, t) >= 0 && n.push(e[u]);
  }
  return n;
} : e, ct = (e) => Object.values(e).reduce(
  (t, { results: r }) => t + r.length,
  0
), kn = (e = Cn, t = !1) => {
  if (e instanceof RegExp)
    return e;
  {
    const r = lt(e);
    return new RegExp(
      `(?:^|\\s)(${r}([^${t ? "" : "\\s"}${r}]*))$`
    );
  }
}, Q = (e, t, r, n = "START") => {
  if (typeof r != "number")
    return r;
  let u;
  return at(e, t, (s, o, f, c, d) => {
    u === void 0 && f + d.length > r && (n === "NULL" ? u = null : u = o + (n === "END" ? s.length : 0));
  }, (s, o, f) => {
    u === void 0 && f + s.length >= r && (u = o + r - f);
  }), u === void 0 ? e.length : u;
}, Mn = (e, t, r) => e.replace(de.id, t).replace(de.display, r ?? t), Ln = (e, t, r, n, u, i) => {
  const l = Me(e, i), s = l.length - t.length;
  r === null && (r = u + s), n === null && (n = r), r === n && n === u && l.length === t.length && (r = r - 1);
  let o = t.slice(r, u), f = Math.min(r, u), c = n;
  r === u && (c = Math.max(
    n,
    r + s
  ));
  let d = Q(
    e,
    i,
    f,
    "START"
  ), b = Q(e, i, c, "END");
  const E = Q(
    e,
    i,
    f,
    "NULL"
  ), F = Q(
    e,
    i,
    c,
    "NULL"
  ), h = E === null || F === null;
  let v = et(
    e,
    d ?? 0,
    b ?? 0,
    o
  );
  if (!h) {
    const A = Me(v, i);
    if (A !== t) {
      for (f = 0; t[f] === A[f]; )
        f++;
      o = t.slice(f, u), c = l.lastIndexOf(
        t.substring(u)
      ), d = Q(
        e,
        i,
        f,
        "START"
      ), b = Q(e, i, c, "END"), v = et(
        e,
        d ?? 0,
        b ?? 0,
        o
      );
    }
  }
  return v;
}, In = (e, t) => {
  const r = Ze(e, t), n = r[r.length - 1];
  return n ? n.plainTextIndex + n.display.length : 0;
}, qt = (e, t, r) => {
  let n = r, u = !1;
  if (at(
    e,
    t,
    (i, l, s, o, f) => {
      s <= r && s + f.length > r && (n = s, u = !0);
    }
  ), u)
    return n;
}, Vn = ({ color: e = "yellow", display: t }) => /* @__PURE__ */ H.jsxs(
  "span",
  {
    style: {
      color: "transparent",
      position: "relative",
      fontSize: "inherit",
      fontFamily: "inherit",
      letterSpacing: "inherit"
    },
    children: [
      t,
      /* @__PURE__ */ H.jsx(
        "span",
        {
          style: {
            inset: 0,
            position: "absolute",
            borderRadius: "3px",
            backgroundColor: e
          }
        }
      )
    ]
  }
), Wn = Xt(
  ({
    value: e,
    style: t,
    caretRef: r,
    dataSources: n,
    selectionStart: u,
    selectionEnd: i,
    highlightColor: l
  }, s) => {
    const o = [];
    return at(e, n, (d, b, E, F, h) => {
      o.push(
        /* @__PURE__ */ H.jsx(
          Vn,
          {
            color: l,
            display: h
          },
          `${F}-${b}`
        )
      );
    }, (d, b, E) => {
      if (u && u === i && u >= E && u <= E + d.length) {
        const h = u - E, v = d.substring(0, h), A = d.substring(h);
        v && o.push(
          /* @__PURE__ */ H.jsx(
            "span",
            {
              style: { visibility: "hidden" },
              children: v
            },
            `${b}-${E}-precaret`
          )
        ), o.push(
          /* @__PURE__ */ H.jsx("span", { ref: r, style: { visibility: "hidden" } }, "caret")
        ), A && o.push(
          /* @__PURE__ */ H.jsx(
            "span",
            {
              style: { visibility: "hidden" },
              children: A
            },
            `${b}-${E}-postcaret`
          )
        );
      } else
        o.push(
          /* @__PURE__ */ H.jsx(
            "span",
            {
              style: { visibility: "hidden" },
              children: d
            },
            `${b}-${E}`
          )
        );
    }), /* @__PURE__ */ H.jsxs(
      "div",
      {
        ref: s,
        style: {
          ...t,
          zIndex: -1,
          overflow: "hidden",
          position: "absolute",
          whiteSpace: "pre",
          overscrollBehavior: "none"
        },
        children: [
          o,
          /* @__PURE__ */ H.jsx("span", { style: { visibility: "hidden" }, children: " " })
        ]
      }
    );
  }
), Un = (e, t) => `${e}-${t}`, Yn = ({
  query: e,
  focused: t = !1,
  suggestion: r,
  ignoreAccents: n,
  ...u
}) => {
  const i = () => {
    const l = r.display ?? r.id, s = or(l, e, n);
    return s === -1 ? /* @__PURE__ */ H.jsx("span", { children: l }) : /* @__PURE__ */ H.jsxs("span", { children: [
      l.substring(0, s),
      /* @__PURE__ */ H.jsx("b", { children: l.substring(s, s + e.length) }),
      l.substring(s + e.length)
    ] });
  };
  return /* @__PURE__ */ H.jsx("li", { role: "option", "aria-selected": t, ...u, children: i() });
}, Hn = Xt(
  ({
    id: e,
    focusIndex: t,
    suggestions: r,
    ignoreAccents: n,
    scrollFocusedIntoView: u,
    SuggestionComponent: i = Yn,
    SuggestionsComponent: l = "div",
    SuggestionsListComponent: s = "ul",
    onSelect: o,
    onMouseDown: f,
    onMouseEnter: c,
    ...d
  }, b) => {
    const E = Re(null);
    mt(() => {
      const v = E.current;
      if (!v || v.offsetHeight >= v.scrollHeight || !u)
        return;
      const A = v.scrollTop, { top: m } = v.getBoundingClientRect();
      let { top: D, bottom: w } = v.children[t].getBoundingClientRect();
      D = D - m + A, w = w - m + A, D < A ? v.scrollTop = D : w > v.offsetHeight && (v.scrollTop = w - v.offsetHeight);
    }, [t, u]);
    const F = (v, A, m) => {
      const D = m === t, { dataSourceIndex: w, query: _ } = A;
      return /* @__PURE__ */ H.jsx(
        i,
        {
          id: Un(e, m),
          index: m,
          query: _,
          focused: D,
          suggestion: v,
          ignoreAccents: n,
          onClick: () => o(v, A),
          onMouseEnter: () => c == null ? void 0 : c(m)
        },
        `${w}-${v.id}`
      );
    }, h = () => /* @__PURE__ */ H.jsx(
      s,
      {
        id: e,
        ref: E,
        role: "listbox",
        style: {
          margin: 0,
          padding: 0,
          overflow: "auto",
          listStyleType: "none"
        },
        children: Object.values(r).reduce(
          (A, { results: m, queryInfo: D }) => [
            ...A,
            ...m.map(
              (w, _) => F(w, D, A.length + _)
            )
          ],
          []
        )
      }
    );
    return ct(r) <= 0 ? null : /* @__PURE__ */ H.jsx("div", { ref: b, ...d, children: /* @__PURE__ */ H.jsx(l, { onMouseDown: f, children: h() }) });
  }
), qn = ({
  value: e = "",
  multiline: t = !1,
  dataSources: r,
  ignoreAccents: n = !1,
  highlightColor: u,
  InputComponent: i,
  SuggestionComponent: l,
  SuggestionsComponent: s,
  SuggestionsListComponent: o,
  onBlur: f,
  onSelect: c,
  onChange: d,
  onKeyDown: b
}) => {
  const E = Re(!1), F = Re(""), h = Re(null), v = Re(null), A = Re(0), m = Re({}), D = Re(!1), [w, _] = $e(null), [T, R] = $e(null), [W, U] = $e({}), [M, I] = $e(0), [J, N] = $e(!1), [Y, G] = $e(null), [P, q] = $e(null), { styles: te, attributes: Z } = Fn(w, T, {
    placement: "bottom-start"
  });
  mt(() => {
    F.current = Math.random().toString(16).substring(2);
  }, []), mt(() => {
    !h.current || h.current.selectionStart === Y && h.current.selectionEnd === P || h.current.setSelectionRange(Y, P);
  }, [Y, P]);
  const me = sr(
    (y) => {
      var p, g;
      if (!h.current)
        return;
      const x = h.current.selectionStart, j = h.current.selectionEnd, S = Q(
        e,
        r,
        x,
        "START"
      ), k = Q(
        e,
        r,
        j,
        "END"
      ), z = y.target.value.slice(
        x === null ? void 0 : x,
        j === null ? void 0 : j
      ), a = e.slice(
        S === null ? void 0 : S,
        k === null ? void 0 : k
      );
      (p = y.clipboardData) == null || p.setData("text/plain", z), (g = y.clipboardData) == null || g.setData("text/react-mentions", a);
    },
    [e, r]
  ), Fe = (y) => {
    y.preventDefault(), me(y);
    const x = Q(
      e,
      r,
      Y,
      "START"
    ), j = Q(
      e,
      r,
      P,
      "END"
    ), S = [
      e.slice(0, x ?? void 0),
      e.slice(j ?? void 0)
    ].join(""), k = Me(S, r);
    d == null || d(S, k, Ze(e, r));
  }, ce = (y) => {
    y.preventDefault(), me(y);
  }, Ce = (y) => {
    y.preventDefault();
    const x = Q(
      e,
      r,
      Y,
      "START"
    ), j = Q(
      e,
      r,
      P,
      "END"
    ), S = y.clipboardData.getData("text/plain"), k = y.clipboardData.getData("text/react-mentions"), V = et(
      e,
      x ?? 0,
      j ?? 0,
      k === "" ? S : k
    ).replace(/\r/g, ""), z = Me(V, r);
    if (d == null || d(V, z, Ze(V, r)), typeof Y != "number")
      return;
    const p = (qt(
      e,
      r,
      Y
    ) || Y) + Me(k ?? S, r).length;
    G(p), q(p);
  }, re = () => {
    !h.current || !v.current || (v.current.scrollTop = h.current.scrollTop, v.current.scrollLeft = h.current.scrollLeft, v.current.style.height = `${h.current.clientHeight}px`);
  }, ne = (y, x, j, S, k, V, z) => {
    if (y !== A.current)
      return;
    m.current = {
      ...m.current,
      [x]: {
        queryInfo: {
          dataSourceIndex: x,
          query: j,
          querySequenceStart: S,
          querySequenceEnd: k,
          plainTextValue: V
        },
        results: z
      }
    };
    const a = ct(m.current);
    U(m.current), I(
      M >= a ? Math.max(a - 1, 0) : M
    );
  }, be = (y, x, j, S, k) => {
    const V = r[x], a = $n(V.data, n)(y);
    a instanceof Array && ne(
      A.current,
      x,
      y,
      j,
      S,
      k,
      a
    );
  }, ye = (y, x) => {
    A.current++, m.current = {}, U({});
    const j = Q(
      e,
      r,
      x,
      "NULL"
    );
    if (j === null)
      return;
    const S = In(
      e.substring(0, j),
      r
    ), k = y.substring(
      S,
      x ?? void 0
    );
    r.forEach((V, z) => {
      const a = kn(
        V.trigger,
        V.allowSpaceInQuery
      ), p = k.match(a);
      if (p) {
        const g = S + k.indexOf(p[1], p.index);
        be(
          p[2],
          z,
          g,
          g + p[1].length,
          y
        );
      }
    });
  }, fe = (y) => {
    const x = D.current;
    D.current = !1, x || (G(null), q(null)), setTimeout(() => {
      re();
    }), f == null || f(y, x);
  }, Te = (y) => {
    var C;
    E.current = !1;
    let x = y.target.value, j = Y;
    j == null && (j = y.target.selectionStart);
    let S = P;
    S == null && (S = y.target.selectionEnd);
    const k = Ln(
      e,
      x,
      j,
      S,
      y.target.selectionEnd ?? 0,
      r
    );
    x = Me(k, r);
    let V = y.target.selectionStart, z = y.target.selectionEnd;
    const a = qt(
      e,
      r,
      V ?? 0
    );
    if (a !== void 0 && z !== null && z > a) {
      const { data: $ } = y.nativeEvent;
      V = a + (($ == null ? void 0 : $.length) ?? 0), z = Y;
    }
    G(V), q(z);
    const p = Ze(k, r), { isComposing: g } = y.nativeEvent;
    g && V === z && ye(((C = h.current) == null ? void 0 : C.value) ?? "", V), d == null || d(k, x, p);
  }, Xe = (y) => {
    var j;
    const x = y.target;
    G(x.selectionStart), q(x.selectionEnd), !E.current && (x.selectionStart === x.selectionEnd ? ye(
      ((j = h.current) == null ? void 0 : j.value) ?? "",
      x.selectionStart
    ) : Be(), re(), c == null || c(y));
  }, De = (y) => {
    const x = ct(W);
    I((x + M + y) % x), N(!0);
  }, Be = () => {
    A.current++, m.current = {}, I(0), U({});
  }, Ae = ({ id: y, display: x }, {
    dataSourceIndex: j,
    querySequenceStart: S,
    querySequenceEnd: k,
    plainTextValue: V
  }) => {
    var we;
    const { markup: z, appendSpaceOnAdd: a, onAdd: p, displayTransform: g } = r[j], C = Q(
      e,
      r,
      S,
      "START"
    );
    if (typeof C != "number")
      return;
    const $ = C + k - S;
    let L = Mn(
      z ?? ze,
      y,
      x
    ), B = (g ?? ir)(
      y,
      x
    );
    a && (L += " ", B += " "), (we = h.current) == null || we.focus();
    const O = S + B.length;
    G(O), q(O);
    const X = et(e, C, $, L), ie = Ze(X, r), Ee = et(
      V,
      S,
      k,
      B
    );
    d == null || d(X, Ee, ie), p == null || p({ id: y, display: x }, C, $), Be();
  }, ve = () => {
    const { result: y, queryInfo: x } = Object.values(W).reduce(
      (j, { results: S, queryInfo: k }) => [
        ...j,
        ...S.map((V) => ({ result: V, queryInfo: k }))
      ],
      []
    )[M];
    Ae(y, x), I(0);
  }, Pe = (y) => {
    if (ct(W) === 0) {
      b == null || b(y);
      return;
    }
    switch (y.key) {
      case Ue.Escape: {
        Be();
        break;
      }
      case Ue.Down: {
        De(1);
        break;
      }
      case Ue.Up: {
        De(-1);
        break;
      }
      case Ue.Tab:
      case Ue.Return: {
        ve();
        break;
      }
      default:
        return;
    }
    y.preventDefault(), y.stopPropagation();
  }, Oe = () => {
    E.current = !0;
  }, je = () => {
    E.current = !1;
  }, Je = () => {
    D.current = !0;
  }, Ve = (y) => {
    I(y), N(!1);
  }, pe = {
    ref: h,
    value: Me(e, r),
    onCut: Fe,
    onCopy: ce,
    onPaste: Ce,
    onBlur: fe,
    onScroll: re,
    onChange: Te,
    onSelect: Xe,
    onKeyDown: Pe,
    onCompositionStart: Oe,
    onCompositionEnd: je,
    style: {
      width: "100%",
      fontSize: "inherit",
      fontFamily: "inherit",
      letterSpacing: "inherit",
      background: "none",
      overscrollBehavior: "none"
    }
  }, ae = Pn(h.current), Se = i ?? (t ? "textarea" : "input");
  return /* @__PURE__ */ H.jsxs("div", { style: { position: "relative" }, children: [
    /* @__PURE__ */ H.jsx(
      Wn,
      {
        ref: v,
        value: e,
        caretRef: _,
        dataSources: r,
        selectionStart: Y,
        selectionEnd: P,
        highlightColor: u,
        style: {
          top: `${ae.y}px`,
          left: `${ae.x}px`,
          width: `${ae.width}px`,
          height: `${ae.height}px`
        }
      }
    ),
    /* @__PURE__ */ H.jsx(Se, { ...pe }),
    Y !== null && /* @__PURE__ */ H.jsx(
      Hn,
      {
        ...Z.popper,
        id: F.current,
        ref: R,
        style: te.popper,
        focusIndex: M,
        suggestions: W,
        ignoreAccents: n,
        scrollFocusedIntoView: J,
        onSelect: Ae,
        onMouseDown: Je,
        onMouseEnter: Ve,
        SuggestionComponent: l,
        SuggestionsComponent: s,
        SuggestionsListComponent: o
      }
    )
  ] });
};
export {
  qn as MentionsInput
};
//# sourceMappingURL=index.es.js.map
