var BS = Object.defineProperty,
  US = Object.defineProperties;
var WS = Object.getOwnPropertyDescriptors;
var Wv = Object.getOwnPropertySymbols;
var HS = Object.prototype.hasOwnProperty,
  VS = Object.prototype.propertyIsEnumerable;
var Hv = (e, t, r) =>
    t in e
      ? BS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  ae = (e, t) => {
    for (var r in t || (t = {})) HS.call(t, r) && Hv(e, r, t[r]);
    if (Wv) for (var r of Wv(t)) VS.call(t, r) && Hv(e, r, t[r]);
    return e;
  },
  ge = (e, t) => US(e, WS(t));
const qS = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerpolicy && (a.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = r(i);
    fetch(i.href, a);
  }
};
qS();
var nn =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
    ? window
    : typeof global != "undefined"
    ? global
    : typeof self != "undefined"
    ? self
    : {};
function A1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function GS(e) {
  if (e.__esModule) return e;
  var t = Object.defineProperty({}, "__esModule", { value: !0 });
  return (
    Object.keys(e).forEach(function (r) {
      var n = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        t,
        r,
        n.get
          ? n
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    t
  );
}
function KS(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var V = { exports: {} },
  se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Po = Symbol.for("react.element"),
  XS = Symbol.for("react.portal"),
  YS = Symbol.for("react.fragment"),
  QS = Symbol.for("react.strict_mode"),
  JS = Symbol.for("react.profiler"),
  ZS = Symbol.for("react.provider"),
  eO = Symbol.for("react.context"),
  tO = Symbol.for("react.forward_ref"),
  rO = Symbol.for("react.suspense"),
  nO = Symbol.for("react.memo"),
  iO = Symbol.for("react.lazy"),
  Vv = Symbol.iterator;
function aO(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Vv && e[Vv]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var k1 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  E1 = Object.assign,
  T1 = {};
function Ji(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = T1),
    (this.updater = r || k1);
}
Ji.prototype.isReactComponent = {};
Ji.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ji.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function P1() {}
P1.prototype = Ji.prototype;
function Wd(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = T1),
    (this.updater = r || k1);
}
var Hd = (Wd.prototype = new P1());
Hd.constructor = Wd;
E1(Hd, Ji.prototype);
Hd.isPureReactComponent = !0;
var qv = Array.isArray,
  $1 = Object.prototype.hasOwnProperty,
  Vd = { current: null },
  C1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function M1(e, t, r) {
  var n,
    i = {},
    a = null,
    o = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      $1.call(t, n) && !C1.hasOwnProperty(n) && (i[n] = t[n]);
  var u = arguments.length - 2;
  if (u === 1) i.children = r;
  else if (1 < u) {
    for (var l = Array(u), s = 0; s < u; s++) l[s] = arguments[s + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (n in ((u = e.defaultProps), u)) i[n] === void 0 && (i[n] = u[n]);
  return {
    $$typeof: Po,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: Vd.current,
  };
}
function oO(e, t) {
  return {
    $$typeof: Po,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function qd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Po;
}
function uO(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Gv = /\/+/g;
function bc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? uO("" + e.key)
    : t.toString(36);
}
function Eu(e, t, r, n, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (a) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Po:
          case XS:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = n === "" ? "." + bc(o, 0) : n),
      qv(i)
        ? ((r = ""),
          e != null && (r = e.replace(Gv, "$&/") + "/"),
          Eu(i, t, r, "", function (s) {
            return s;
          }))
        : i != null &&
          (qd(i) &&
            (i = oO(
              i,
              r +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Gv, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (n = n === "" ? "." : n + ":"), qv(e)))
    for (var u = 0; u < e.length; u++) {
      a = e[u];
      var l = n + bc(a, u);
      o += Eu(a, t, r, l, i);
    }
  else if (((l = aO(e)), typeof l == "function"))
    for (e = l.call(e), u = 0; !(a = e.next()).done; )
      (a = a.value), (l = n + bc(a, u++)), (o += Eu(a, t, r, l, i));
  else if (a === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Xo(e, t, r) {
  if (e == null) return e;
  var n = [],
    i = 0;
  return (
    Eu(e, n, "", "", function (a) {
      return t.call(r, a, i++);
    }),
    n
  );
}
function lO(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var wt = { current: null },
  Tu = { transition: null },
  sO = {
    ReactCurrentDispatcher: wt,
    ReactCurrentBatchConfig: Tu,
    ReactCurrentOwner: Vd,
  };
se.Children = {
  map: Xo,
  forEach: function (e, t, r) {
    Xo(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Xo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Xo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!qd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
se.Component = Ji;
se.Fragment = YS;
se.Profiler = JS;
se.PureComponent = Wd;
se.StrictMode = QS;
se.Suspense = rO;
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sO;
se.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var n = E1({}, e.props),
    i = e.key,
    a = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (o = Vd.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (l in t)
      $1.call(t, l) &&
        !C1.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && u !== void 0 ? u[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    u = Array(l);
    for (var s = 0; s < l; s++) u[s] = arguments[s + 2];
    n.children = u;
  }
  return { $$typeof: Po, type: e.type, key: i, ref: a, props: n, _owner: o };
};
se.createContext = function (e) {
  return (
    (e = {
      $$typeof: eO,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ZS, _context: e }),
    (e.Consumer = e)
  );
};
se.createElement = M1;
se.createFactory = function (e) {
  var t = M1.bind(null, e);
  return (t.type = e), t;
};
se.createRef = function () {
  return { current: null };
};
se.forwardRef = function (e) {
  return { $$typeof: tO, render: e };
};
se.isValidElement = qd;
se.lazy = function (e) {
  return { $$typeof: iO, _payload: { _status: -1, _result: e }, _init: lO };
};
se.memo = function (e, t) {
  return { $$typeof: nO, type: e, compare: t === void 0 ? null : t };
};
se.startTransition = function (e) {
  var t = Tu.transition;
  Tu.transition = {};
  try {
    e();
  } finally {
    Tu.transition = t;
  }
};
se.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
se.useCallback = function (e, t) {
  return wt.current.useCallback(e, t);
};
se.useContext = function (e) {
  return wt.current.useContext(e);
};
se.useDebugValue = function () {};
se.useDeferredValue = function (e) {
  return wt.current.useDeferredValue(e);
};
se.useEffect = function (e, t) {
  return wt.current.useEffect(e, t);
};
se.useId = function () {
  return wt.current.useId();
};
se.useImperativeHandle = function (e, t, r) {
  return wt.current.useImperativeHandle(e, t, r);
};
se.useInsertionEffect = function (e, t) {
  return wt.current.useInsertionEffect(e, t);
};
se.useLayoutEffect = function (e, t) {
  return wt.current.useLayoutEffect(e, t);
};
se.useMemo = function (e, t) {
  return wt.current.useMemo(e, t);
};
se.useReducer = function (e, t, r) {
  return wt.current.useReducer(e, t, r);
};
se.useRef = function (e) {
  return wt.current.useRef(e);
};
se.useState = function (e) {
  return wt.current.useState(e);
};
se.useSyncExternalStore = function (e, t, r) {
  return wt.current.useSyncExternalStore(e, t, r);
};
se.useTransition = function () {
  return wt.current.useTransition();
};
se.version = "18.0.0-fc46dba67-20220329";
V.exports = se;
var oe = V.exports,
  Tf = {},
  Gd = { exports: {} },
  Ut = {},
  I1 = { exports: {} },
  N1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, R) {
    var U = T.length;
    T.push(R);
    e: for (; 0 < U; ) {
      var Y = (U - 1) >>> 1,
        X = T[Y];
      if (0 < i(X, R)) (T[Y] = R), (T[U] = X), (U = Y);
      else break e;
    }
  }
  function r(T) {
    return T.length === 0 ? null : T[0];
  }
  function n(T) {
    if (T.length === 0) return null;
    var R = T[0],
      U = T.pop();
    if (U !== R) {
      T[0] = U;
      e: for (var Y = 0, X = T.length, le = X >>> 1; Y < le; ) {
        var ce = 2 * (Y + 1) - 1,
          je = T[ce],
          Pe = ce + 1,
          yt = T[Pe];
        if (0 > i(je, U))
          Pe < X && 0 > i(yt, je)
            ? ((T[Y] = yt), (T[Pe] = U), (Y = Pe))
            : ((T[Y] = je), (T[ce] = U), (Y = ce));
        else if (Pe < X && 0 > i(yt, U)) (T[Y] = yt), (T[Pe] = U), (Y = Pe);
        else break e;
      }
    }
    return R;
  }
  function i(T, R) {
    var U = T.sortIndex - R.sortIndex;
    return U !== 0 ? U : T.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var l = [],
    s = [],
    c = 1,
    f = null,
    h = 3,
    x = !1,
    v = !1,
    d = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate != "undefined" ? setImmediate : null;
  typeof navigator != "undefined" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(T) {
    for (var R = r(s); R !== null; ) {
      if (R.callback === null) n(s);
      else if (R.startTime <= T)
        n(s), (R.sortIndex = R.expirationTime), t(l, R);
      else break;
      R = r(s);
    }
  }
  function y(T) {
    if (((d = !1), g(T), !v))
      if (r(l) !== null) (v = !0), N(w);
      else {
        var R = r(s);
        R !== null && W(y, R.startTime - T);
      }
  }
  function w(T, R) {
    (v = !1), d && ((d = !1), p(O), (O = -1)), (x = !0);
    var U = h;
    try {
      for (
        g(R), f = r(l);
        f !== null && (!(f.expirationTime > R) || (T && !k()));

      ) {
        var Y = f.callback;
        if (typeof Y == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var X = Y(f.expirationTime <= R);
          (R = e.unstable_now()),
            typeof X == "function" ? (f.callback = X) : f === r(l) && n(l),
            g(R);
        } else n(l);
        f = r(l);
      }
      if (f !== null) var le = !0;
      else {
        var ce = r(s);
        ce !== null && W(y, ce.startTime - R), (le = !1);
      }
      return le;
    } finally {
      (f = null), (h = U), (x = !1);
    }
  }
  var b = !1,
    S = null,
    O = -1,
    A = 5,
    E = -1;
  function k() {
    return !(e.unstable_now() - E < A);
  }
  function $() {
    if (S !== null) {
      var T = e.unstable_now();
      E = T;
      var R = !0;
      try {
        R = S(!0, T);
      } finally {
        R ? P() : ((b = !1), (S = null));
      }
    } else b = !1;
  }
  var P;
  if (typeof m == "function")
    P = function () {
      m($);
    };
  else if (typeof MessageChannel != "undefined") {
    var M = new MessageChannel(),
      D = M.port2;
    (M.port1.onmessage = $),
      (P = function () {
        D.postMessage(null);
      });
  } else
    P = function () {
      _($, 0);
    };
  function N(T) {
    (S = T), b || ((b = !0), P());
  }
  function W(T, R) {
    O = _(function () {
      T(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || x || ((v = !0), N(w));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l);
    }),
    (e.unstable_next = function (T) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = h;
      }
      var U = h;
      h = R;
      try {
        return T();
      } finally {
        h = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, R) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var U = h;
      h = T;
      try {
        return R();
      } finally {
        h = U;
      }
    }),
    (e.unstable_scheduleCallback = function (T, R, U) {
      var Y = e.unstable_now();
      switch (
        (typeof U == "object" && U !== null
          ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? Y + U : Y))
          : (U = Y),
        T)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = U + X),
        (T = {
          id: c++,
          callback: R,
          priorityLevel: T,
          startTime: U,
          expirationTime: X,
          sortIndex: -1,
        }),
        U > Y
          ? ((T.sortIndex = U),
            t(s, T),
            r(l) === null &&
              T === r(s) &&
              (d ? (p(O), (O = -1)) : (d = !0), W(y, U - Y)))
          : ((T.sortIndex = X), t(l, T), v || x || ((v = !0), N(w))),
        T
      );
    }),
    (e.unstable_shouldYield = k),
    (e.unstable_wrapCallback = function (T) {
      var R = h;
      return function () {
        var U = h;
        h = R;
        try {
          return T.apply(this, arguments);
        } finally {
          h = U;
        }
      };
    });
})(N1);
I1.exports = N1;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var R1 = V.exports,
  Bt = I1.exports;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var j1 = new Set(),
  Ja = {};
function ti(e, t) {
  Ri(e, t), Ri(e + "Capture", t);
}
function Ri(e, t) {
  for (Ja[e] = t, e = 0; e < t.length; e++) j1.add(t[e]);
}
var Wr = !(
    typeof window == "undefined" ||
    typeof window.document == "undefined" ||
    typeof window.document.createElement == "undefined"
  ),
  Pf = Object.prototype.hasOwnProperty,
  cO =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Kv = {},
  Xv = {};
function fO(e) {
  return Pf.call(Xv, e)
    ? !0
    : Pf.call(Kv, e)
    ? !1
    : cO.test(e)
    ? (Xv[e] = !0)
    : ((Kv[e] = !0), !1);
}
function hO(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function dO(e, t, r, n) {
  if (t === null || typeof t == "undefined" || hO(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function bt(e, t, r, n, i, a, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = i),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
var ct = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ct[e] = new bt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ct[t] = new bt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ct[e] = new bt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ct[e] = new bt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ct[e] = new bt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ct[e] = new bt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ct[e] = new bt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ct[e] = new bt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ct[e] = new bt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Kd = /[\-:]([a-z])/g;
function Xd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Kd, Xd);
    ct[t] = new bt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Kd, Xd);
    ct[t] = new bt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Kd, Xd);
  ct[t] = new bt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ct[e] = new bt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ct.xlinkHref = new bt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ct[e] = new bt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yd(e, t, r, n) {
  var i = ct.hasOwnProperty(t) ? ct[t] : null;
  (i !== null
    ? i.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (dO(t, r, i, n) && (r = null),
    n || i === null
      ? fO(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : i.mustUseProperty
      ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : "") : r)
      : ((t = i.attributeName),
        (n = i.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (r = i === 3 || (i === 4 && r === !0) ? "" : "" + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var qr = R1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Yo = Symbol.for("react.element"),
  hi = Symbol.for("react.portal"),
  di = Symbol.for("react.fragment"),
  Qd = Symbol.for("react.strict_mode"),
  $f = Symbol.for("react.profiler"),
  D1 = Symbol.for("react.provider"),
  L1 = Symbol.for("react.context"),
  Jd = Symbol.for("react.forward_ref"),
  Cf = Symbol.for("react.suspense"),
  Mf = Symbol.for("react.suspense_list"),
  Zd = Symbol.for("react.memo"),
  Jr = Symbol.for("react.lazy"),
  F1 = Symbol.for("react.offscreen"),
  Yv = Symbol.iterator;
function va(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Yv && e[Yv]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var We = Object.assign,
  Sc;
function Na(e) {
  if (Sc === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Sc = (t && t[1]) || "";
    }
  return (
    `
` +
    Sc +
    e
  );
}
var Oc = !1;
function Ac(e, t) {
  if (!e || Oc) return "";
  Oc = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var n = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          n = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        n = s;
      }
      e();
    }
  } catch (s) {
    if (s && n && typeof s.stack == "string") {
      for (
        var i = s.stack.split(`
`),
          a = n.stack.split(`
`),
          o = i.length - 1,
          u = a.length - 1;
        1 <= o && 0 <= u && i[o] !== a[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (i[o] !== a[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || i[o] !== a[u])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Oc = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? Na(e) : "";
}
function pO(e) {
  switch (e.tag) {
    case 5:
      return Na(e.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ac(e.type, !1)), e;
    case 11:
      return (e = Ac(e.type.render, !1)), e;
    case 1:
      return (e = Ac(e.type, !0)), e;
    default:
      return "";
  }
}
function If(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case di:
      return "Fragment";
    case hi:
      return "Portal";
    case $f:
      return "Profiler";
    case Qd:
      return "StrictMode";
    case Cf:
      return "Suspense";
    case Mf:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case L1:
        return (e.displayName || "Context") + ".Consumer";
      case D1:
        return (e._context.displayName || "Context") + ".Provider";
      case Jd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Zd:
        return (
          (t = e.displayName || null), t !== null ? t : If(e.type) || "Memo"
        );
      case Jr:
        (t = e._payload), (e = e._init);
        try {
          return If(e(t));
        } catch {}
    }
  return null;
}
function vO(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return If(t);
    case 8:
      return t === Qd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function yn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function z1(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function yO(e) {
  var t = z1(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r != "undefined" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var i = r.get,
      a = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (n = "" + o), a.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (o) {
          n = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Qo(e) {
  e._valueTracker || (e._valueTracker = yO(e));
}
function B1(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = z1(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function nl(e) {
  if (
    ((e = e || (typeof document != "undefined" ? document : void 0)),
    typeof e == "undefined")
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Nf(e, t) {
  var r = t.checked;
  return We({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r != null ? r : e._wrapperState.initialChecked,
  });
}
function Qv(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = yn(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function U1(e, t) {
  (t = t.checked), t != null && Yd(e, "checked", t, !1);
}
function Rf(e, t) {
  U1(e, t);
  var r = yn(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? jf(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && jf(e, t.type, yn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Jv(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function jf(e, t, r) {
  (t !== "number" || nl(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Ra = Array.isArray;
function Ai(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
    for (r = 0; r < e.length; r++)
      (i = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== i && (e[r].selected = i),
        i && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + yn(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        (e[i].selected = !0), n && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Df(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return We({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Zv(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(L(92));
      if (Ra(r)) {
        if (1 < r.length) throw Error(L(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: yn(r) };
}
function W1(e, t) {
  var r = yn(t.value),
    n = yn(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function ey(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function H1(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Lf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? H1(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Jo,
  V1 = (function (e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Jo = Jo || document.createElement("div"),
          Jo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Jo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Za(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ba = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  gO = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ba).forEach(function (e) {
  gO.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ba[t] = Ba[e]);
  });
});
function q1(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (Ba.hasOwnProperty(e) && Ba[e])
    ? ("" + t).trim()
    : t + "px";
}
function G1(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        i = q1(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : (e[r] = i);
    }
}
var mO = We(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ff(e, t) {
  if (t) {
    if (mO[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function zf(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Bf = null;
function ep(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Uf = null,
  ki = null,
  Ei = null;
function ty(e) {
  if ((e = Mo(e))) {
    if (typeof Uf != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = bs(t)), Uf(e.stateNode, e.type, t));
  }
}
function K1(e) {
  ki ? (Ei ? Ei.push(e) : (Ei = [e])) : (ki = e);
}
function X1() {
  if (ki) {
    var e = ki,
      t = Ei;
    if (((Ei = ki = null), ty(e), t)) for (e = 0; e < t.length; e++) ty(t[e]);
  }
}
function Y1(e, t) {
  return e(t);
}
function Q1() {}
var kc = !1;
function J1(e, t, r) {
  if (kc) return e(t, r);
  kc = !0;
  try {
    return Y1(e, t, r);
  } finally {
    (kc = !1), (ki !== null || Ei !== null) && (Q1(), X1());
  }
}
function eo(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = bs(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(L(231, t, typeof r));
  return r;
}
var Wf = !1;
if (Wr)
  try {
    var ya = {};
    Object.defineProperty(ya, "passive", {
      get: function () {
        Wf = !0;
      },
    }),
      window.addEventListener("test", ya, ya),
      window.removeEventListener("test", ya, ya);
  } catch {
    Wf = !1;
  }
function xO(e, t, r, n, i, a, o, u, l) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, s);
  } catch (c) {
    this.onError(c);
  }
}
var Ua = !1,
  il = null,
  al = !1,
  Hf = null,
  _O = {
    onError: function (e) {
      (Ua = !0), (il = e);
    },
  };
function wO(e, t, r, n, i, a, o, u, l) {
  (Ua = !1), (il = null), xO.apply(_O, arguments);
}
function bO(e, t, r, n, i, a, o, u, l) {
  if ((wO.apply(this, arguments), Ua)) {
    if (Ua) {
      var s = il;
      (Ua = !1), (il = null);
    } else throw Error(L(198));
    al || ((al = !0), (Hf = s));
  }
}
function ri(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Z1(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ry(e) {
  if (ri(e) !== e) throw Error(L(188));
}
function SO(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ri(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((n = i.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === r) return ry(i), e;
        if (a === n) return ry(i), t;
        a = a.sibling;
      }
      throw Error(L(188));
    }
    if (r.return !== n.return) (r = i), (n = a);
    else {
      for (var o = !1, u = i.child; u; ) {
        if (u === r) {
          (o = !0), (r = i), (n = a);
          break;
        }
        if (u === n) {
          (o = !0), (n = i), (r = a);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = a.child; u; ) {
          if (u === r) {
            (o = !0), (r = a), (n = i);
            break;
          }
          if (u === n) {
            (o = !0), (n = a), (r = i);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(L(189));
      }
    }
    if (r.alternate !== n) throw Error(L(190));
  }
  if (r.tag !== 3) throw Error(L(188));
  return r.stateNode.current === r ? e : t;
}
function ex(e) {
  return (e = SO(e)), e !== null ? tx(e) : null;
}
function tx(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = tx(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var rx = Bt.unstable_scheduleCallback,
  ny = Bt.unstable_cancelCallback,
  OO = Bt.unstable_shouldYield,
  AO = Bt.unstable_requestPaint,
  qe = Bt.unstable_now,
  kO = Bt.unstable_getCurrentPriorityLevel,
  tp = Bt.unstable_ImmediatePriority,
  nx = Bt.unstable_UserBlockingPriority,
  ol = Bt.unstable_NormalPriority,
  EO = Bt.unstable_LowPriority,
  ix = Bt.unstable_IdlePriority,
  ms = null,
  _r = null;
function TO(e) {
  if (_r && typeof _r.onCommitFiberRoot == "function")
    try {
      _r.onCommitFiberRoot(ms, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var dr = Math.clz32 ? Math.clz32 : CO,
  PO = Math.log,
  $O = Math.LN2;
function CO(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((PO(e) / $O) | 0)) | 0;
}
var Zo = 64,
  eu = 4194304;
function ja(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ul(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    o = r & 268435455;
  if (o !== 0) {
    var u = o & ~i;
    u !== 0 ? (n = ja(u)) : ((a &= o), a !== 0 && (n = ja(a)));
  } else (o = r & ~i), o !== 0 ? (n = ja(o)) : a !== 0 && (n = ja(a));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    (t & i) === 0 &&
    ((i = n & -n), (a = t & -t), i >= a || (i === 16 && (a & 4194240) !== 0))
  )
    return t;
  if (((n & 4) !== 0 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - dr(t)), (i = 1 << r), (n |= e[r]), (t &= ~i);
  return n;
}
function MO(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function IO(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var o = 31 - dr(a),
      u = 1 << o,
      l = i[o];
    l === -1
      ? ((u & r) === 0 || (u & n) !== 0) && (i[o] = MO(u, t))
      : l <= t && (e.expiredLanes |= u),
      (a &= ~u);
  }
}
function Vf(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ec(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function $o(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - dr(t)),
    (e[t] = r);
}
function NO(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - dr(r),
      a = 1 << i;
    (t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~a);
  }
}
function rp(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - dr(r),
      i = 1 << n;
    (i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i);
  }
}
var we = 0;
function ax(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var ox,
  np,
  ux,
  lx,
  sx,
  qf = !1,
  tu = [],
  un = null,
  ln = null,
  sn = null,
  to = new Map(),
  ro = new Map(),
  tn = [],
  RO =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function iy(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      un = null;
      break;
    case "dragenter":
    case "dragleave":
      ln = null;
      break;
    case "mouseover":
    case "mouseout":
      sn = null;
      break;
    case "pointerover":
    case "pointerout":
      to.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ro.delete(t.pointerId);
  }
}
function ga(e, t, r, n, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: a,
        targetContainers: [i],
      }),
      t !== null && ((t = Mo(t)), t !== null && np(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function jO(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return (un = ga(un, e, t, r, n, i)), !0;
    case "dragenter":
      return (ln = ga(ln, e, t, r, n, i)), !0;
    case "mouseover":
      return (sn = ga(sn, e, t, r, n, i)), !0;
    case "pointerover":
      var a = i.pointerId;
      return to.set(a, ga(to.get(a) || null, e, t, r, n, i)), !0;
    case "gotpointercapture":
      return (
        (a = i.pointerId), ro.set(a, ga(ro.get(a) || null, e, t, r, n, i)), !0
      );
  }
  return !1;
}
function cx(e) {
  var t = zn(e.target);
  if (t !== null) {
    var r = ri(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Z1(r)), t !== null)) {
          (e.blockedOn = t),
            sx(e.priority, function () {
              ux(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Pu(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Gf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (Bf = n), r.target.dispatchEvent(n), (Bf = null);
    } else return (t = Mo(r)), t !== null && np(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function ay(e, t, r) {
  Pu(e) && r.delete(t);
}
function DO() {
  (qf = !1),
    un !== null && Pu(un) && (un = null),
    ln !== null && Pu(ln) && (ln = null),
    sn !== null && Pu(sn) && (sn = null),
    to.forEach(ay),
    ro.forEach(ay);
}
function ma(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    qf ||
      ((qf = !0),
      Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority, DO)));
}
function no(e) {
  function t(i) {
    return ma(i, e);
  }
  if (0 < tu.length) {
    ma(tu[0], e);
    for (var r = 1; r < tu.length; r++) {
      var n = tu[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    un !== null && ma(un, e),
      ln !== null && ma(ln, e),
      sn !== null && ma(sn, e),
      to.forEach(t),
      ro.forEach(t),
      r = 0;
    r < tn.length;
    r++
  )
    (n = tn[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < tn.length && ((r = tn[0]), r.blockedOn === null); )
    cx(r), r.blockedOn === null && tn.shift();
}
var Ti = qr.ReactCurrentBatchConfig;
function LO(e, t, r, n) {
  var i = we,
    a = Ti.transition;
  Ti.transition = null;
  try {
    (we = 1), ip(e, t, r, n);
  } finally {
    (we = i), (Ti.transition = a);
  }
}
function FO(e, t, r, n) {
  var i = we,
    a = Ti.transition;
  Ti.transition = null;
  try {
    (we = 4), ip(e, t, r, n);
  } finally {
    (we = i), (Ti.transition = a);
  }
}
function ip(e, t, r, n) {
  var i = Gf(e, t, r, n);
  if (i === null) Dc(e, t, n, ll, r), iy(e, n);
  else if (jO(i, e, t, r, n)) n.stopPropagation();
  else if ((iy(e, n), t & 4 && -1 < RO.indexOf(e))) {
    for (; i !== null; ) {
      var a = Mo(i);
      if (
        (a !== null && ox(a),
        (a = Gf(e, t, r, n)),
        a === null && Dc(e, t, n, ll, r),
        a === i)
      )
        break;
      i = a;
    }
    i !== null && n.stopPropagation();
  } else Dc(e, t, n, null, r);
}
var ll = null;
function Gf(e, t, r, n) {
  if (((ll = null), (e = ep(n)), (e = zn(e)), e !== null))
    if (((t = ri(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = Z1(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ll = e), null;
}
function fx(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (kO()) {
        case tp:
          return 1;
        case nx:
          return 4;
        case ol:
        case EO:
          return 16;
        case ix:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var an = null,
  ap = null,
  $u = null;
function hx() {
  if ($u) return $u;
  var e,
    t = ap,
    r = t.length,
    n,
    i = "value" in an ? an.value : an.textContent,
    a = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++);
  var o = r - e;
  for (n = 1; n <= o && t[r - n] === i[a - n]; n++);
  return ($u = i.slice(e, 1 < n ? 1 - n : void 0));
}
function Cu(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ru() {
  return !0;
}
function oy() {
  return !1;
}
function Wt(e) {
  function t(r, n, i, a, o) {
    (this._reactName = r),
      (this._targetInst = i),
      (this.type = n),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((r = e[u]), (this[u] = r ? r(a) : a[u]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? ru
        : oy),
      (this.isPropagationStopped = oy),
      this
    );
  }
  return (
    We(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = ru));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = ru));
      },
      persist: function () {},
      isPersistent: ru,
    }),
    t
  );
}
var Zi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  op = Wt(Zi),
  Co = We({}, Zi, { view: 0, detail: 0 }),
  zO = Wt(Co),
  Tc,
  Pc,
  xa,
  xs = We({}, Co, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: up,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== xa &&
            (xa && e.type === "mousemove"
              ? ((Tc = e.screenX - xa.screenX), (Pc = e.screenY - xa.screenY))
              : (Pc = Tc = 0),
            (xa = e)),
          Tc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Pc;
    },
  }),
  uy = Wt(xs),
  BO = We({}, xs, { dataTransfer: 0 }),
  UO = Wt(BO),
  WO = We({}, Co, { relatedTarget: 0 }),
  $c = Wt(WO),
  HO = We({}, Zi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  VO = Wt(HO),
  qO = We({}, Zi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  GO = Wt(qO),
  KO = We({}, Zi, { data: 0 }),
  ly = Wt(KO),
  XO = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  YO = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  QO = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function JO(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = QO[e]) ? !!t[e] : !1;
}
function up() {
  return JO;
}
var ZO = We({}, Co, {
    key: function (e) {
      if (e.key) {
        var t = XO[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Cu(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? YO[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: up,
    charCode: function (e) {
      return e.type === "keypress" ? Cu(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Cu(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  eA = Wt(ZO),
  tA = We({}, xs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  sy = Wt(tA),
  rA = We({}, Co, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: up,
  }),
  nA = Wt(rA),
  iA = We({}, Zi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  aA = Wt(iA),
  oA = We({}, xs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  uA = Wt(oA),
  lA = [9, 13, 27, 32],
  lp = Wr && "CompositionEvent" in window,
  Wa = null;
Wr && "documentMode" in document && (Wa = document.documentMode);
var sA = Wr && "TextEvent" in window && !Wa,
  dx = Wr && (!lp || (Wa && 8 < Wa && 11 >= Wa)),
  cy = String.fromCharCode(32),
  fy = !1;
function px(e, t) {
  switch (e) {
    case "keyup":
      return lA.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function vx(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var pi = !1;
function cA(e, t) {
  switch (e) {
    case "compositionend":
      return vx(t);
    case "keypress":
      return t.which !== 32 ? null : ((fy = !0), cy);
    case "textInput":
      return (e = t.data), e === cy && fy ? null : e;
    default:
      return null;
  }
}
function fA(e, t) {
  if (pi)
    return e === "compositionend" || (!lp && px(e, t))
      ? ((e = hx()), ($u = ap = an = null), (pi = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return dx && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var hA = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function hy(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!hA[e.type] : t === "textarea";
}
function yx(e, t, r, n) {
  K1(n),
    (t = sl(t, "onChange")),
    0 < t.length &&
      ((r = new op("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var Ha = null,
  io = null;
function dA(e) {
  Ex(e, 0);
}
function _s(e) {
  var t = gi(e);
  if (B1(t)) return e;
}
function pA(e, t) {
  if (e === "change") return t;
}
var gx = !1;
if (Wr) {
  var Cc;
  if (Wr) {
    var Mc = "oninput" in document;
    if (!Mc) {
      var dy = document.createElement("div");
      dy.setAttribute("oninput", "return;"),
        (Mc = typeof dy.oninput == "function");
    }
    Cc = Mc;
  } else Cc = !1;
  gx = Cc && (!document.documentMode || 9 < document.documentMode);
}
function py() {
  Ha && (Ha.detachEvent("onpropertychange", mx), (io = Ha = null));
}
function mx(e) {
  if (e.propertyName === "value" && _s(io)) {
    var t = [];
    yx(t, io, e, ep(e)), J1(dA, t);
  }
}
function vA(e, t, r) {
  e === "focusin"
    ? (py(), (Ha = t), (io = r), Ha.attachEvent("onpropertychange", mx))
    : e === "focusout" && py();
}
function yA(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return _s(io);
}
function gA(e, t) {
  if (e === "click") return _s(t);
}
function mA(e, t) {
  if (e === "input" || e === "change") return _s(t);
}
function xA(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ar = typeof Object.is == "function" ? Object.is : xA;
function ao(e, t) {
  if (Ar(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!Pf.call(t, i) || !Ar(e[i], t[i])) return !1;
  }
  return !0;
}
function vy(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function yy(e, t) {
  var r = vy(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = vy(r);
  }
}
function xx(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? xx(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function _x() {
  for (var e = window, t = nl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = nl(e.document);
  }
  return t;
}
function sp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function _A(e) {
  var t = _x(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    xx(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && sp(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = r.textContent.length,
          a = Math.min(n.start, i);
        (n = n.end === void 0 ? a : Math.min(n.end, i)),
          !e.extend && a > n && ((i = n), (n = a), (a = i)),
          (i = yy(r, a));
        var o = yy(r, n);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > n
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var wA = Wr && "documentMode" in document && 11 >= document.documentMode,
  vi = null,
  Kf = null,
  Va = null,
  Xf = !1;
function gy(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Xf ||
    vi == null ||
    vi !== nl(n) ||
    ((n = vi),
    "selectionStart" in n && sp(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (Va && ao(Va, n)) ||
      ((Va = n),
      (n = sl(Kf, "onSelect")),
      0 < n.length &&
        ((t = new op("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = vi))));
}
function nu(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var yi = {
    animationend: nu("Animation", "AnimationEnd"),
    animationiteration: nu("Animation", "AnimationIteration"),
    animationstart: nu("Animation", "AnimationStart"),
    transitionend: nu("Transition", "TransitionEnd"),
  },
  Ic = {},
  wx = {};
Wr &&
  ((wx = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete yi.animationend.animation,
    delete yi.animationiteration.animation,
    delete yi.animationstart.animation),
  "TransitionEvent" in window || delete yi.transitionend.transition);
function ws(e) {
  if (Ic[e]) return Ic[e];
  if (!yi[e]) return e;
  var t = yi[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in wx) return (Ic[e] = t[r]);
  return e;
}
var bx = ws("animationend"),
  Sx = ws("animationiteration"),
  Ox = ws("animationstart"),
  Ax = ws("transitionend"),
  kx = new Map(),
  my =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function _n(e, t) {
  kx.set(e, t), ti(t, [e]);
}
for (var Nc = 0; Nc < my.length; Nc++) {
  var Rc = my[Nc],
    bA = Rc.toLowerCase(),
    SA = Rc[0].toUpperCase() + Rc.slice(1);
  _n(bA, "on" + SA);
}
_n(bx, "onAnimationEnd");
_n(Sx, "onAnimationIteration");
_n(Ox, "onAnimationStart");
_n("dblclick", "onDoubleClick");
_n("focusin", "onFocus");
_n("focusout", "onBlur");
_n(Ax, "onTransitionEnd");
Ri("onMouseEnter", ["mouseout", "mouseover"]);
Ri("onMouseLeave", ["mouseout", "mouseover"]);
Ri("onPointerEnter", ["pointerout", "pointerover"]);
Ri("onPointerLeave", ["pointerout", "pointerover"]);
ti(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ti(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ti("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ti(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ti(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ti(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Da =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  OA = new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));
function xy(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), bO(n, t, void 0, e), (e.currentTarget = null);
}
function Ex(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      i = n.event;
    n = n.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = n.length - 1; 0 <= o; o--) {
          var u = n[o],
            l = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), l !== a && i.isPropagationStopped())) break e;
          xy(i, u, s), (a = l);
        }
      else
        for (o = 0; o < n.length; o++) {
          if (
            ((u = n[o]),
            (l = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            l !== a && i.isPropagationStopped())
          )
            break e;
          xy(i, u, s), (a = l);
        }
    }
  }
  if (al) throw ((e = Hf), (al = !1), (Hf = null), e);
}
function Me(e, t) {
  var r = t[Zf];
  r === void 0 && (r = t[Zf] = new Set());
  var n = e + "__bubble";
  r.has(n) || (Tx(t, e, 2, !1), r.add(n));
}
function jc(e, t, r) {
  var n = 0;
  t && (n |= 4), Tx(r, e, n, t);
}
var iu = "_reactListening" + Math.random().toString(36).slice(2);
function oo(e) {
  if (!e[iu]) {
    (e[iu] = !0),
      j1.forEach(function (r) {
        r !== "selectionchange" && (OA.has(r) || jc(r, !1, e), jc(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[iu] || ((t[iu] = !0), jc("selectionchange", !1, t));
  }
}
function Tx(e, t, r, n) {
  switch (fx(t)) {
    case 1:
      var i = LO;
      break;
    case 4:
      i = FO;
      break;
    default:
      i = ip;
  }
  (r = i.bind(null, t, r, e)),
    (i = void 0),
    !Wf ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    n
      ? i !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: i })
        : e.addEventListener(t, r, !0)
      : i !== void 0
      ? e.addEventListener(t, r, { passive: i })
      : e.addEventListener(t, r, !1);
}
function Dc(e, t, r, n, i) {
  var a = n;
  if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
    e: for (;;) {
      if (n === null) return;
      var o = n.tag;
      if (o === 3 || o === 4) {
        var u = n.stateNode.containerInfo;
        if (u === i || (u.nodeType === 8 && u.parentNode === i)) break;
        if (o === 4)
          for (o = n.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = zn(u)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            n = a = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      n = n.return;
    }
  J1(function () {
    var s = a,
      c = ep(r),
      f = [];
    e: {
      var h = kx.get(e);
      if (h !== void 0) {
        var x = op,
          v = e;
        switch (e) {
          case "keypress":
            if (Cu(r) === 0) break e;
          case "keydown":
          case "keyup":
            x = eA;
            break;
          case "focusin":
            (v = "focus"), (x = $c);
            break;
          case "focusout":
            (v = "blur"), (x = $c);
            break;
          case "beforeblur":
          case "afterblur":
            x = $c;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = uy;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = UO;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = nA;
            break;
          case bx:
          case Sx:
          case Ox:
            x = VO;
            break;
          case Ax:
            x = aA;
            break;
          case "scroll":
            x = zO;
            break;
          case "wheel":
            x = uA;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = GO;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = sy;
        }
        var d = (t & 4) !== 0,
          _ = !d && e === "scroll",
          p = d ? (h !== null ? h + "Capture" : null) : h;
        d = [];
        for (var m = s, g; m !== null; ) {
          g = m;
          var y = g.stateNode;
          if (
            (g.tag === 5 &&
              y !== null &&
              ((g = y),
              p !== null && ((y = eo(m, p)), y != null && d.push(uo(m, y, g)))),
            _)
          )
            break;
          m = m.return;
        }
        0 < d.length &&
          ((h = new x(h, v, null, r, c)), f.push({ event: h, listeners: d }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          h &&
            r !== Bf &&
            (v = r.relatedTarget || r.fromElement) &&
            (zn(v) || v[Hr]))
        )
          break e;
        if (
          (x || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          x
            ? ((v = r.relatedTarget || r.toElement),
              (x = s),
              (v = v ? zn(v) : null),
              v !== null &&
                ((_ = ri(v)), v !== _ || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((x = null), (v = s)),
          x !== v)
        ) {
          if (
            ((d = uy),
            (y = "onMouseLeave"),
            (p = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((d = sy),
              (y = "onPointerLeave"),
              (p = "onPointerEnter"),
              (m = "pointer")),
            (_ = x == null ? h : gi(x)),
            (g = v == null ? h : gi(v)),
            (h = new d(y, m + "leave", x, r, c)),
            (h.target = _),
            (h.relatedTarget = g),
            (y = null),
            zn(c) === s &&
              ((d = new d(p, m + "enter", v, r, c)),
              (d.target = g),
              (d.relatedTarget = _),
              (y = d)),
            (_ = y),
            x && v)
          )
            t: {
              for (d = x, p = v, m = 0, g = d; g; g = li(g)) m++;
              for (g = 0, y = p; y; y = li(y)) g++;
              for (; 0 < m - g; ) (d = li(d)), m--;
              for (; 0 < g - m; ) (p = li(p)), g--;
              for (; m--; ) {
                if (d === p || (p !== null && d === p.alternate)) break t;
                (d = li(d)), (p = li(p));
              }
              d = null;
            }
          else d = null;
          x !== null && _y(f, h, x, d, !1),
            v !== null && _ !== null && _y(f, _, v, d, !0);
        }
      }
      e: {
        if (
          ((h = s ? gi(s) : window),
          (x = h.nodeName && h.nodeName.toLowerCase()),
          x === "select" || (x === "input" && h.type === "file"))
        )
          var w = pA;
        else if (hy(h))
          if (gx) w = mA;
          else {
            w = yA;
            var b = vA;
          }
        else
          (x = h.nodeName) &&
            x.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (w = gA);
        if (w && (w = w(e, s))) {
          yx(f, w, r, c);
          break e;
        }
        b && b(e, h, s),
          e === "focusout" &&
            (b = h._wrapperState) &&
            b.controlled &&
            h.type === "number" &&
            jf(h, "number", h.value);
      }
      switch (((b = s ? gi(s) : window), e)) {
        case "focusin":
          (hy(b) || b.contentEditable === "true") &&
            ((vi = b), (Kf = s), (Va = null));
          break;
        case "focusout":
          Va = Kf = vi = null;
          break;
        case "mousedown":
          Xf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Xf = !1), gy(f, r, c);
          break;
        case "selectionchange":
          if (wA) break;
        case "keydown":
        case "keyup":
          gy(f, r, c);
      }
      var S;
      if (lp)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        pi
          ? px(e, r) && (O = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (dx &&
          r.locale !== "ko" &&
          (pi || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && pi && (S = hx())
            : ((an = c),
              (ap = "value" in an ? an.value : an.textContent),
              (pi = !0))),
        (b = sl(s, O)),
        0 < b.length &&
          ((O = new ly(O, e, null, r, c)),
          f.push({ event: O, listeners: b }),
          S ? (O.data = S) : ((S = vx(r)), S !== null && (O.data = S)))),
        (S = sA ? cA(e, r) : fA(e, r)) &&
          ((s = sl(s, "onBeforeInput")),
          0 < s.length &&
            ((c = new ly("onBeforeInput", "beforeinput", null, r, c)),
            f.push({ event: c, listeners: s }),
            (c.data = S)));
    }
    Ex(f, t);
  });
}
function uo(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function sl(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    i.tag === 5 &&
      a !== null &&
      ((i = a),
      (a = eo(e, r)),
      a != null && n.unshift(uo(e, a, i)),
      (a = eo(e, t)),
      a != null && n.push(uo(e, a, i))),
      (e = e.return);
  }
  return n;
}
function li(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function _y(e, t, r, n, i) {
  for (var a = t._reactName, o = []; r !== null && r !== n; ) {
    var u = r,
      l = u.alternate,
      s = u.stateNode;
    if (l !== null && l === n) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      i
        ? ((l = eo(r, a)), l != null && o.unshift(uo(r, l, u)))
        : i || ((l = eo(r, a)), l != null && o.push(uo(r, l, u)))),
      (r = r.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var AA = /\r\n?/g,
  kA = /\u0000|\uFFFD/g;
function wy(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      AA,
      `
`
    )
    .replace(kA, "");
}
function au(e, t, r) {
  if (((t = wy(t)), wy(e) !== t && r)) throw Error(L(425));
}
function cl() {}
var Yf = null;
function Qf(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Jf = typeof setTimeout == "function" ? setTimeout : void 0,
  EA = typeof clearTimeout == "function" ? clearTimeout : void 0,
  by = typeof Promise == "function" ? Promise : void 0,
  TA =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof by != "undefined"
      ? function (e) {
          return by.resolve(null).then(e).catch(PA);
        }
      : Jf;
function PA(e) {
  setTimeout(function () {
    throw e;
  });
}
function Lc(e, t) {
  var r = t,
    n = 0;
  do {
    var i = r.nextSibling;
    if ((e.removeChild(r), i && i.nodeType === 8))
      if (((r = i.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(i), no(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = i;
  } while (r);
  no(t);
}
function Nr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Sy(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ea = Math.random().toString(36).slice(2),
  vr = "__reactFiber$" + ea,
  lo = "__reactProps$" + ea,
  Hr = "__reactContainer$" + ea,
  Zf = "__reactEvents$" + ea,
  $A = "__reactListeners$" + ea,
  CA = "__reactHandles$" + ea;
function zn(e) {
  var t = e[vr];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[Hr] || r[vr])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Sy(e); e !== null; ) {
          if ((r = e[vr])) return r;
          e = Sy(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function Mo(e) {
  return (
    (e = e[vr] || e[Hr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function gi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function bs(e) {
  return e[lo] || null;
}
var eh = [],
  mi = -1;
function wn(e) {
  return { current: e };
}
function Re(e) {
  0 > mi || ((e.current = eh[mi]), (eh[mi] = null), mi--);
}
function Ee(e, t) {
  mi++, (eh[mi] = e.current), (e.current = t);
}
var gn = {},
  vt = wn(gn),
  Et = wn(!1),
  Kn = gn;
function ji(e, t) {
  var r = e.type.contextTypes;
  if (!r) return gn;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    a;
  for (a in r) i[a] = t[a];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Tt(e) {
  return (e = e.childContextTypes), e != null;
}
function fl() {
  Re(Et), Re(vt);
}
function Oy(e, t, r) {
  if (vt.current !== gn) throw Error(L(168));
  Ee(vt, t), Ee(Et, r);
}
function Px(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(L(108, vO(e) || "Unknown", i));
  return We({}, r, n);
}
function hl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gn),
    (Kn = vt.current),
    Ee(vt, e),
    Ee(Et, Et.current),
    !0
  );
}
function Ay(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(L(169));
  r
    ? ((e = Px(e, t, Kn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      Re(Et),
      Re(vt),
      Ee(vt, e))
    : Re(Et),
    Ee(Et, r);
}
var Ir = null,
  Ss = !1,
  Fc = !1;
function $x(e) {
  Ir === null ? (Ir = [e]) : Ir.push(e);
}
function MA(e) {
  (Ss = !0), $x(e);
}
function bn() {
  if (!Fc && Ir !== null) {
    Fc = !0;
    var e = 0,
      t = we;
    try {
      var r = Ir;
      for (we = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (Ir = null), (Ss = !1);
    } catch (i) {
      throw (Ir !== null && (Ir = Ir.slice(e + 1)), rx(tp, bn), i);
    } finally {
      (we = t), (Fc = !1);
    }
  }
  return null;
}
var IA = qr.ReactCurrentBatchConfig;
function cr(e, t) {
  if (e && e.defaultProps) {
    (t = We({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var dl = wn(null),
  pl = null,
  xi = null,
  cp = null;
function fp() {
  cp = xi = pl = null;
}
function hp(e) {
  var t = dl.current;
  Re(dl), (e._currentValue = t);
}
function th(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function Pi(e, t) {
  (pl = e),
    (cp = xi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (Dt = !0), (e.firstContext = null));
}
function nr(e) {
  var t = e._currentValue;
  if (cp !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), xi === null)) {
      if (pl === null) throw Error(L(308));
      (xi = e), (pl.dependencies = { lanes: 0, firstContext: e });
    } else xi = xi.next = e;
  return t;
}
var gr = null,
  Zr = !1;
function dp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Cx(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function zr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function cn(e, t) {
  var r = e.updateQueue;
  r !== null &&
    ((r = r.shared),
    Ke !== null && (e.mode & 1) !== 0 && (fe & 2) === 0
      ? ((e = r.interleaved),
        e === null
          ? ((t.next = t), gr === null ? (gr = [r]) : gr.push(r))
          : ((t.next = e.next), (e.next = t)),
        (r.interleaved = t))
      : ((e = r.pending),
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (r.pending = t)));
}
function Mu(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), rp(e, r);
  }
}
function ky(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var i = null,
      a = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var o = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        a === null ? (i = a = o) : (a = a.next = o), (r = r.next);
      } while (r !== null);
      a === null ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: a,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function vl(e, t, r, n) {
  var i = e.updateQueue;
  Zr = !1;
  var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var l = u,
      s = l.next;
    (l.next = null), o === null ? (a = s) : (o.next = s), (o = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (u = c.lastBaseUpdate),
      u !== o &&
        (u === null ? (c.firstBaseUpdate = s) : (u.next = s),
        (c.lastBaseUpdate = l)));
  }
  if (a !== null) {
    var f = i.baseState;
    (o = 0), (c = s = l = null), (u = a);
    do {
      var h = u.lane,
        x = u.eventTime;
      if ((n & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: x,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var v = e,
            d = u;
          switch (((h = t), (x = r), d.tag)) {
            case 1:
              if (((v = d.payload), typeof v == "function")) {
                f = v.call(x, f, h);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = d.payload),
                (h = typeof v == "function" ? v.call(x, f, h) : v),
                h == null)
              )
                break e;
              f = We({}, f, h);
              break e;
            case 2:
              Zr = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [u]) : h.push(u));
      } else
        (x = {
          eventTime: x,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          c === null ? ((s = c = x), (l = f)) : (c = c.next = x),
          (o |= h);
      if (((u = u.next), u === null)) {
        if (((u = i.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = s),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    (Bi |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function Ey(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        i = n.callback;
      if (i !== null) {
        if (((n.callback = null), (n = r), typeof i != "function"))
          throw Error(L(191, i));
        i.call(n);
      }
    }
}
var Mx = new R1.Component().refs;
function rh(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : We({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Os = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ri(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = _t(),
      i = hn(e),
      a = zr(n, i);
    (a.payload = t),
      r != null && (a.callback = r),
      cn(e, a),
      (t = rr(e, i, n)),
      t !== null && Mu(t, e, i);
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = _t(),
      i = hn(e),
      a = zr(n, i);
    (a.tag = 1),
      (a.payload = t),
      r != null && (a.callback = r),
      cn(e, a),
      (t = rr(e, i, n)),
      t !== null && Mu(t, e, i);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = _t(),
      n = hn(e),
      i = zr(r, n);
    (i.tag = 2),
      t != null && (i.callback = t),
      cn(e, i),
      (t = rr(e, n, r)),
      t !== null && Mu(t, e, n);
  },
};
function Ty(e, t, r, n, i, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, a, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ao(r, n) || !ao(i, a)
      : !0
  );
}
function Ix(e, t, r) {
  var n = !1,
    i = gn,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = nr(a))
      : ((i = Tt(t) ? Kn : vt.current),
        (n = t.contextTypes),
        (a = (n = n != null) ? ji(e, i) : gn)),
    (t = new t(r, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Os),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function Py(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && Os.enqueueReplaceState(t, t.state, null);
}
function nh(e, t, r, n) {
  var i = e.stateNode;
  (i.props = r), (i.state = e.memoizedState), (i.refs = Mx), dp(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (i.context = nr(a))
    : ((a = Tt(t) ? Kn : vt.current), (i.context = ji(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (rh(e, t, a, r), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Os.enqueueReplaceState(i, i.state, null),
      vl(e, r, i, n),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
var _i = [],
  wi = 0,
  yl = null,
  gl = 0,
  Yt = [],
  Qt = 0,
  Xn = null,
  Rr = 1,
  jr = "";
function In(e, t) {
  (_i[wi++] = gl), (_i[wi++] = yl), (yl = e), (gl = t);
}
function Nx(e, t, r) {
  (Yt[Qt++] = Rr), (Yt[Qt++] = jr), (Yt[Qt++] = Xn), (Xn = e);
  var n = Rr;
  e = jr;
  var i = 32 - dr(n) - 1;
  (n &= ~(1 << i)), (r += 1);
  var a = 32 - dr(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    (a = (n & ((1 << o) - 1)).toString(32)),
      (n >>= o),
      (i -= o),
      (Rr = (1 << (32 - dr(t) + i)) | (r << i) | n),
      (jr = a + e);
  } else (Rr = (1 << a) | (r << i) | n), (jr = e);
}
function pp(e) {
  e.return !== null && (In(e, 1), Nx(e, 1, 0));
}
function vp(e) {
  for (; e === yl; )
    (yl = _i[--wi]), (_i[wi] = null), (gl = _i[--wi]), (_i[wi] = null);
  for (; e === Xn; )
    (Xn = Yt[--Qt]),
      (Yt[Qt] = null),
      (jr = Yt[--Qt]),
      (Yt[Qt] = null),
      (Rr = Yt[--Qt]),
      (Yt[Qt] = null);
}
var Ft = null,
  At = null,
  Le = !1,
  hr = null;
function Rx(e, t) {
  var r = Jt(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function $y(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ft = e), (At = Nr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ft = e), (At = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Xn !== null ? { id: Rr, overflow: jr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Jt(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (Ft = e),
            (At = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ih(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ah(e) {
  if (Le) {
    var t = At;
    if (t) {
      var r = t;
      if (!$y(e, t)) {
        if (ih(e)) throw Error(L(418));
        t = Nr(r.nextSibling);
        var n = Ft;
        t && $y(e, t)
          ? Rx(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (Le = !1), (Ft = e));
      }
    } else {
      if (ih(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (Le = !1), (Ft = e);
    }
  }
}
function Cy(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ft = e;
}
function _a(e) {
  if (e !== Ft) return !1;
  if (!Le) return Cy(e), (Le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Qf(e.type, e.memoizedProps))),
    t && (t = At))
  ) {
    if (ih(e)) {
      for (e = At; e; ) e = Nr(e.nextSibling);
      throw Error(L(418));
    }
    for (; t; ) Rx(e, t), (t = Nr(t.nextSibling));
  }
  if ((Cy(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              At = Nr(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      At = null;
    }
  } else At = Ft ? Nr(e.stateNode.nextSibling) : null;
  return !0;
}
function Di() {
  (At = Ft = null), (Le = !1);
}
function yp(e) {
  hr === null ? (hr = [e]) : hr.push(e);
}
function wa(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(L(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(L(147, e));
      var i = n,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (o) {
            var u = i.refs;
            u === Mx && (u = i.refs = {}),
              o === null ? delete u[a] : (u[a] = o);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!r._owner) throw Error(L(290, e));
  }
  return e;
}
function ou(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function My(e) {
  var t = e._init;
  return t(e._payload);
}
function jx(e) {
  function t(p, m) {
    if (e) {
      var g = p.deletions;
      g === null ? ((p.deletions = [m]), (p.flags |= 16)) : g.push(m);
    }
  }
  function r(p, m) {
    if (!e) return null;
    for (; m !== null; ) t(p, m), (m = m.sibling);
    return null;
  }
  function n(p, m) {
    for (p = new Map(); m !== null; )
      m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling);
    return p;
  }
  function i(p, m) {
    return (p = mn(p, m)), (p.index = 0), (p.sibling = null), p;
  }
  function a(p, m, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate),
          g !== null
            ? ((g = g.index), g < m ? ((p.flags |= 2), m) : g)
            : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, m, g, y) {
    return m === null || m.tag !== 6
      ? ((m = Vc(g, p.mode, y)), (m.return = p), m)
      : ((m = i(m, g)), (m.return = p), m);
  }
  function l(p, m, g, y) {
    var w = g.type;
    return w === di
      ? c(p, m, g.props.children, y, g.key)
      : m !== null &&
        (m.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === Jr &&
            My(w) === m.type))
      ? ((y = i(m, g.props)), (y.ref = wa(p, m, g)), (y.return = p), y)
      : ((y = Du(g.type, g.key, g.props, null, p.mode, y)),
        (y.ref = wa(p, m, g)),
        (y.return = p),
        y);
  }
  function s(p, m, g, y) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== g.containerInfo ||
      m.stateNode.implementation !== g.implementation
      ? ((m = qc(g, p.mode, y)), (m.return = p), m)
      : ((m = i(m, g.children || [])), (m.return = p), m);
  }
  function c(p, m, g, y, w) {
    return m === null || m.tag !== 7
      ? ((m = qn(g, p.mode, y, w)), (m.return = p), m)
      : ((m = i(m, g)), (m.return = p), m);
  }
  function f(p, m, g) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Vc("" + m, p.mode, g)), (m.return = p), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Yo:
          return (
            (g = Du(m.type, m.key, m.props, null, p.mode, g)),
            (g.ref = wa(p, null, m)),
            (g.return = p),
            g
          );
        case hi:
          return (m = qc(m, p.mode, g)), (m.return = p), m;
        case Jr:
          var y = m._init;
          return f(p, y(m._payload), g);
      }
      if (Ra(m) || va(m))
        return (m = qn(m, p.mode, g, null)), (m.return = p), m;
      ou(p, m);
    }
    return null;
  }
  function h(p, m, g, y) {
    var w = m !== null ? m.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return w !== null ? null : u(p, m, "" + g, y);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Yo:
          return g.key === w ? l(p, m, g, y) : null;
        case hi:
          return g.key === w ? s(p, m, g, y) : null;
        case Jr:
          return (w = g._init), h(p, m, w(g._payload), y);
      }
      if (Ra(g) || va(g)) return w !== null ? null : c(p, m, g, y, null);
      ou(p, g);
    }
    return null;
  }
  function x(p, m, g, y, w) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (p = p.get(g) || null), u(m, p, "" + y, w);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Yo:
          return (p = p.get(y.key === null ? g : y.key) || null), l(m, p, y, w);
        case hi:
          return (p = p.get(y.key === null ? g : y.key) || null), s(m, p, y, w);
        case Jr:
          var b = y._init;
          return x(p, m, g, b(y._payload), w);
      }
      if (Ra(y) || va(y)) return (p = p.get(g) || null), c(m, p, y, w, null);
      ou(m, y);
    }
    return null;
  }
  function v(p, m, g, y) {
    for (
      var w = null, b = null, S = m, O = (m = 0), A = null;
      S !== null && O < g.length;
      O++
    ) {
      S.index > O ? ((A = S), (S = null)) : (A = S.sibling);
      var E = h(p, S, g[O], y);
      if (E === null) {
        S === null && (S = A);
        break;
      }
      e && S && E.alternate === null && t(p, S),
        (m = a(E, m, O)),
        b === null ? (w = E) : (b.sibling = E),
        (b = E),
        (S = A);
    }
    if (O === g.length) return r(p, S), Le && In(p, O), w;
    if (S === null) {
      for (; O < g.length; O++)
        (S = f(p, g[O], y)),
          S !== null &&
            ((m = a(S, m, O)), b === null ? (w = S) : (b.sibling = S), (b = S));
      return Le && In(p, O), w;
    }
    for (S = n(p, S); O < g.length; O++)
      (A = x(S, p, O, g[O], y)),
        A !== null &&
          (e && A.alternate !== null && S.delete(A.key === null ? O : A.key),
          (m = a(A, m, O)),
          b === null ? (w = A) : (b.sibling = A),
          (b = A));
    return (
      e &&
        S.forEach(function (k) {
          return t(p, k);
        }),
      Le && In(p, O),
      w
    );
  }
  function d(p, m, g, y) {
    var w = va(g);
    if (typeof w != "function") throw Error(L(150));
    if (((g = w.call(g)), g == null)) throw Error(L(151));
    for (
      var b = (w = null), S = m, O = (m = 0), A = null, E = g.next();
      S !== null && !E.done;
      O++, E = g.next()
    ) {
      S.index > O ? ((A = S), (S = null)) : (A = S.sibling);
      var k = h(p, S, E.value, y);
      if (k === null) {
        S === null && (S = A);
        break;
      }
      e && S && k.alternate === null && t(p, S),
        (m = a(k, m, O)),
        b === null ? (w = k) : (b.sibling = k),
        (b = k),
        (S = A);
    }
    if (E.done) return r(p, S), Le && In(p, O), w;
    if (S === null) {
      for (; !E.done; O++, E = g.next())
        (E = f(p, E.value, y)),
          E !== null &&
            ((m = a(E, m, O)), b === null ? (w = E) : (b.sibling = E), (b = E));
      return Le && In(p, O), w;
    }
    for (S = n(p, S); !E.done; O++, E = g.next())
      (E = x(S, p, O, E.value, y)),
        E !== null &&
          (e && E.alternate !== null && S.delete(E.key === null ? O : E.key),
          (m = a(E, m, O)),
          b === null ? (w = E) : (b.sibling = E),
          (b = E));
    return (
      e &&
        S.forEach(function ($) {
          return t(p, $);
        }),
      Le && In(p, O),
      w
    );
  }
  function _(p, m, g, y) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === di &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Yo:
          e: {
            for (var w = g.key, b = m; b !== null; ) {
              if (b.key === w) {
                if (((w = g.type), w === di)) {
                  if (b.tag === 7) {
                    r(p, b.sibling),
                      (m = i(b, g.props.children)),
                      (m.return = p),
                      (p = m);
                    break e;
                  }
                } else if (
                  b.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === Jr &&
                    My(w) === b.type)
                ) {
                  r(p, b.sibling),
                    (m = i(b, g.props)),
                    (m.ref = wa(p, b, g)),
                    (m.return = p),
                    (p = m);
                  break e;
                }
                r(p, b);
                break;
              } else t(p, b);
              b = b.sibling;
            }
            g.type === di
              ? ((m = qn(g.props.children, p.mode, y, g.key)),
                (m.return = p),
                (p = m))
              : ((y = Du(g.type, g.key, g.props, null, p.mode, y)),
                (y.ref = wa(p, m, g)),
                (y.return = p),
                (p = y));
          }
          return o(p);
        case hi:
          e: {
            for (b = g.key; m !== null; ) {
              if (m.key === b)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === g.containerInfo &&
                  m.stateNode.implementation === g.implementation
                ) {
                  r(p, m.sibling),
                    (m = i(m, g.children || [])),
                    (m.return = p),
                    (p = m);
                  break e;
                } else {
                  r(p, m);
                  break;
                }
              else t(p, m);
              m = m.sibling;
            }
            (m = qc(g, p.mode, y)), (m.return = p), (p = m);
          }
          return o(p);
        case Jr:
          return (b = g._init), _(p, m, b(g._payload), y);
      }
      if (Ra(g)) return v(p, m, g, y);
      if (va(g)) return d(p, m, g, y);
      ou(p, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        m !== null && m.tag === 6
          ? (r(p, m.sibling), (m = i(m, g)), (m.return = p), (p = m))
          : (r(p, m), (m = Vc(g, p.mode, y)), (m.return = p), (p = m)),
        o(p))
      : r(p, m);
  }
  return _;
}
var Li = jx(!0),
  Dx = jx(!1),
  Io = {},
  wr = wn(Io),
  so = wn(Io),
  co = wn(Io);
function Bn(e) {
  if (e === Io) throw Error(L(174));
  return e;
}
function gp(e, t) {
  switch ((Ee(co, t), Ee(so, e), Ee(wr, Io), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Lf(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Lf(t, e));
  }
  Re(wr), Ee(wr, t);
}
function Fi() {
  Re(wr), Re(so), Re(co);
}
function Lx(e) {
  Bn(co.current);
  var t = Bn(wr.current),
    r = Lf(t, e.type);
  t !== r && (Ee(so, e), Ee(wr, r));
}
function mp(e) {
  so.current === e && (Re(wr), Re(so));
}
var Ue = wn(0);
function ml(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var zc = [];
function xp() {
  for (var e = 0; e < zc.length; e++)
    zc[e]._workInProgressVersionPrimary = null;
  zc.length = 0;
}
var Iu = qr.ReactCurrentDispatcher,
  er = qr.ReactCurrentBatchConfig,
  zi = 0,
  He = null,
  pt = null,
  rt = null,
  xl = !1,
  qa = !1,
  fo = 0,
  NA = 0;
function ft() {
  throw Error(L(321));
}
function _p(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Ar(e[r], t[r])) return !1;
  return !0;
}
function wp(e, t, r, n, i, a) {
  if (
    ((zi = a),
    (He = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Iu.current = e === null || e.memoizedState === null ? LA : FA),
    (e = r(n, i)),
    qa)
  ) {
    a = 0;
    do {
      if (((qa = !1), (fo = 0), 25 <= a)) throw Error(L(301));
      (a += 1),
        (rt = pt = null),
        (t.updateQueue = null),
        (Iu.current = zA),
        (e = r(n, i));
    } while (qa);
  }
  if (
    ((Iu.current = _l),
    (t = pt !== null && pt.next !== null),
    (zi = 0),
    (rt = pt = He = null),
    (xl = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function bp() {
  var e = fo !== 0;
  return (fo = 0), e;
}
function Mr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return rt === null ? (He.memoizedState = rt = e) : (rt = rt.next = e), rt;
}
function Tr() {
  if (pt === null) {
    var e = He.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = pt.next;
  var t = rt === null ? He.memoizedState : rt.next;
  if (t !== null) (rt = t), (pt = e);
  else {
    if (e === null) throw Error(L(310));
    (pt = e),
      (e = {
        memoizedState: pt.memoizedState,
        baseState: pt.baseState,
        baseQueue: pt.baseQueue,
        queue: pt.queue,
        next: null,
      }),
      rt === null ? (He.memoizedState = rt = e) : (rt = rt.next = e);
  }
  return rt;
}
function Hn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function uu(e) {
  var t = Tr(),
    r = t.queue;
  if (r === null) throw Error(L(311));
  r.lastRenderedReducer = e;
  var n = pt,
    i = n.baseQueue,
    a = r.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = a.next), (a.next = o);
    }
    (n.baseQueue = i = a), (r.pending = null);
  }
  if (i !== null) {
    (a = i.next), (n = n.baseState);
    var u = (o = null),
      l = null,
      s = a;
    do {
      var c = s.lane;
      if ((zi & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (n = s.hasEagerState ? s.eagerState : e(n, s.action));
      else {
        var f = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        l === null ? ((u = l = f), (o = n)) : (l = l.next = f),
          (He.lanes |= c),
          (Bi |= c);
      }
      s = s.next;
    } while (s !== null && s !== a);
    l === null ? (o = n) : (l.next = u),
      Ar(n, t.memoizedState) || (Dt = !0),
      (t.memoizedState = n),
      (t.baseState = o),
      (t.baseQueue = l),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    i = e;
    do (a = i.lane), (He.lanes |= a), (Bi |= a), (i = i.next);
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function lu(e) {
  var t = Tr(),
    r = t.queue;
  if (r === null) throw Error(L(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    i = r.pending,
    a = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var o = (i = i.next);
    do (a = e(a, o.action)), (o = o.next);
    while (o !== i);
    Ar(a, t.memoizedState) || (Dt = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (r.lastRenderedState = a);
  }
  return [a, n];
}
function Fx() {}
function zx(e, t) {
  var r = He,
    n = Tr(),
    i = t(),
    a = !Ar(n.memoizedState, i);
  if (
    (a && ((n.memoizedState = i), (Dt = !0)),
    (n = n.queue),
    po(Wx.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || a || (rt !== null && rt.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      ho(9, Ux.bind(null, r, n, i, t), void 0, null),
      Ke === null)
    )
      throw Error(L(349));
    (zi & 30) !== 0 || Bx(r, t, i);
  }
  return i;
}
function Bx(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = He.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (He.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function Ux(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), Hx(t) && rr(e, 1, -1);
}
function Wx(e, t, r) {
  return r(function () {
    Hx(t) && rr(e, 1, -1);
  });
}
function Hx(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Ar(e, r);
  } catch {
    return !0;
  }
}
function Bc(e) {
  var t = Mr();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Hn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = DA.bind(null, He, e)),
    [t.memoizedState, e]
  );
}
function ho(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = He.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (He.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function Vx() {
  return Tr().memoizedState;
}
function Nu(e, t, r, n) {
  var i = Mr();
  (He.flags |= e),
    (i.memoizedState = ho(1 | t, r, void 0, n === void 0 ? null : n));
}
function As(e, t, r, n) {
  var i = Tr();
  n = n === void 0 ? null : n;
  var a = void 0;
  if (pt !== null) {
    var o = pt.memoizedState;
    if (((a = o.destroy), n !== null && _p(n, o.deps))) {
      i.memoizedState = ho(t, r, a, n);
      return;
    }
  }
  (He.flags |= e), (i.memoizedState = ho(1 | t, r, a, n));
}
function Uc(e, t) {
  return Nu(8390656, 8, e, t);
}
function po(e, t) {
  return As(2048, 8, e, t);
}
function qx(e, t) {
  return As(4, 2, e, t);
}
function Gx(e, t) {
  return As(4, 4, e, t);
}
function Kx(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Xx(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), As(4, 4, Kx.bind(null, t, e), r)
  );
}
function Sp() {}
function Yx(e, t) {
  var r = Tr();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && _p(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function Qx(e, t) {
  var r = Tr();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && _p(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function RA(e, t) {
  var r = we;
  (we = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = er.transition;
  er.transition = {};
  try {
    e(!1), t();
  } finally {
    (we = r), (er.transition = n);
  }
}
function Jx() {
  return Tr().memoizedState;
}
function jA(e, t, r) {
  var n = hn(e);
  (r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }),
    Zx(e)
      ? e_(t, r)
      : (t_(e, t, r), (r = _t()), (e = rr(e, n, r)), e !== null && r_(e, t, n));
}
function DA(e, t, r) {
  var n = hn(e),
    i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Zx(e)) e_(t, i);
  else {
    t_(e, t, i);
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = a(o, r);
        if (((i.hasEagerState = !0), (i.eagerState = u), Ar(u, o))) return;
      } catch {
      } finally {
      }
    (r = _t()), (e = rr(e, n, r)), e !== null && r_(e, t, n);
  }
}
function Zx(e) {
  var t = e.alternate;
  return e === He || (t !== null && t === He);
}
function e_(e, t) {
  qa = xl = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function t_(e, t, r) {
  Ke !== null && (e.mode & 1) !== 0 && (fe & 2) === 0
    ? ((e = t.interleaved),
      e === null
        ? ((r.next = r), gr === null ? (gr = [t]) : gr.push(t))
        : ((r.next = e.next), (e.next = r)),
      (t.interleaved = r))
    : ((e = t.pending),
      e === null ? (r.next = r) : ((r.next = e.next), (e.next = r)),
      (t.pending = r));
}
function r_(e, t, r) {
  if ((r & 4194240) !== 0) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), rp(e, r);
  }
}
var _l = {
    readContext: nr,
    useCallback: ft,
    useContext: ft,
    useEffect: ft,
    useImperativeHandle: ft,
    useInsertionEffect: ft,
    useLayoutEffect: ft,
    useMemo: ft,
    useReducer: ft,
    useRef: ft,
    useState: ft,
    useDebugValue: ft,
    useDeferredValue: ft,
    useTransition: ft,
    useMutableSource: ft,
    useSyncExternalStore: ft,
    useId: ft,
    unstable_isNewReconciler: !1,
  },
  LA = {
    readContext: nr,
    useCallback: function (e, t) {
      return (Mr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nr,
    useEffect: Uc,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        Nu(4194308, 4, Kx.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return Nu(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Nu(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = Mr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = Mr();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = jA.bind(null, He, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Mr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Bc,
    useDebugValue: Sp,
    useDeferredValue: function (e) {
      var t = Bc(e),
        r = t[0],
        n = t[1];
      return (
        Uc(
          function () {
            var i = er.transition;
            er.transition = {};
            try {
              n(e);
            } finally {
              er.transition = i;
            }
          },
          [e]
        ),
        r
      );
    },
    useTransition: function () {
      var e = Bc(!1),
        t = e[0];
      return (e = RA.bind(null, e[1])), (Mr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = He,
        i = Mr();
      if (Le) {
        if (r === void 0) throw Error(L(407));
        r = r();
      } else {
        if (((r = t()), Ke === null)) throw Error(L(349));
        (zi & 30) !== 0 || Bx(n, t, r);
      }
      i.memoizedState = r;
      var a = { value: r, getSnapshot: t };
      return (
        (i.queue = a),
        Uc(Wx.bind(null, n, a, e), [e]),
        (n.flags |= 2048),
        ho(9, Ux.bind(null, n, a, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = Mr(),
        t = Ke.identifierPrefix;
      if (Le) {
        var r = jr,
          n = Rr;
        (r = (n & ~(1 << (32 - dr(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = fo++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = NA++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  FA = {
    readContext: nr,
    useCallback: Yx,
    useContext: nr,
    useEffect: po,
    useImperativeHandle: Xx,
    useInsertionEffect: qx,
    useLayoutEffect: Gx,
    useMemo: Qx,
    useReducer: uu,
    useRef: Vx,
    useState: function () {
      return uu(Hn);
    },
    useDebugValue: Sp,
    useDeferredValue: function (e) {
      var t = uu(Hn),
        r = t[0],
        n = t[1];
      return (
        po(
          function () {
            var i = er.transition;
            er.transition = {};
            try {
              n(e);
            } finally {
              er.transition = i;
            }
          },
          [e]
        ),
        r
      );
    },
    useTransition: function () {
      var e = uu(Hn)[0],
        t = Tr().memoizedState;
      return [e, t];
    },
    useMutableSource: Fx,
    useSyncExternalStore: zx,
    useId: Jx,
    unstable_isNewReconciler: !1,
  },
  zA = {
    readContext: nr,
    useCallback: Yx,
    useContext: nr,
    useEffect: po,
    useImperativeHandle: Xx,
    useInsertionEffect: qx,
    useLayoutEffect: Gx,
    useMemo: Qx,
    useReducer: lu,
    useRef: Vx,
    useState: function () {
      return lu(Hn);
    },
    useDebugValue: Sp,
    useDeferredValue: function (e) {
      var t = lu(Hn),
        r = t[0],
        n = t[1];
      return (
        po(
          function () {
            var i = er.transition;
            er.transition = {};
            try {
              n(e);
            } finally {
              er.transition = i;
            }
          },
          [e]
        ),
        r
      );
    },
    useTransition: function () {
      var e = lu(Hn)[0],
        t = Tr().memoizedState;
      return [e, t];
    },
    useMutableSource: Fx,
    useSyncExternalStore: zx,
    useId: Jx,
    unstable_isNewReconciler: !1,
  };
function Op(e, t) {
  try {
    var r = "",
      n = t;
    do (r += pO(n)), (n = n.return);
    while (n);
    var i = r;
  } catch (a) {
    i =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: i };
}
function oh(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var BA = typeof WeakMap == "function" ? WeakMap : Map;
function n_(e, t, r) {
  (r = zr(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      Sl || ((Sl = !0), (vh = n)), oh(e, t);
    }),
    r
  );
}
function i_(e, t, r) {
  (r = zr(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    (r.payload = function () {
      return n(i);
    }),
      (r.callback = function () {
        oh(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (r.callback = function () {
        oh(e, t),
          typeof n != "function" &&
            (fn === null ? (fn = new Set([this])) : fn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    r
  );
}
function Iy(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new BA();
    var i = new Set();
    n.set(t, i);
  } else (i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i));
  i.has(r) || (i.add(r), (e = tk.bind(null, e, t, r)), t.then(e, e));
}
function Ny(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ry(e, t, r, n, i) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = zr(-1, 1)), (t.tag = 2), cn(r, t))),
          (r.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = i), e);
}
var a_, uh, o_, u_;
a_ = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
uh = function () {};
o_ = function (e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    (e = t.stateNode), Bn(wr.current);
    var a = null;
    switch (r) {
      case "input":
        (i = Nf(e, i)), (n = Nf(e, n)), (a = []);
        break;
      case "select":
        (i = We({}, i, { value: void 0 })),
          (n = We({}, n, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (i = Df(e, i)), (n = Df(e, n)), (a = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = cl);
    }
    Ff(r, n);
    var o;
    r = null;
    for (s in i)
      if (!n.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
        if (s === "style") {
          var u = i[s];
          for (o in u) u.hasOwnProperty(o) && (r || (r = {}), (r[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Ja.hasOwnProperty(s)
              ? a || (a = [])
              : (a = a || []).push(s, null));
    for (s in n) {
      var l = n[s];
      if (
        ((u = i != null ? i[s] : void 0),
        n.hasOwnProperty(s) && l !== u && (l != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (r || (r = {}), (r[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                u[o] !== l[o] &&
                (r || (r = {}), (r[o] = l[o]));
          } else r || (a || (a = []), a.push(s, r)), (r = l);
        else
          s === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (u = u ? u.__html : void 0),
              l != null && u !== l && (a = a || []).push(s, l))
            : s === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (a = a || []).push(s, "" + l)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Ja.hasOwnProperty(s)
                ? (l != null && s === "onScroll" && Me("scroll", e),
                  a || u === l || (a = []))
                : (a = a || []).push(s, l));
    }
    r && (a = a || []).push("style", r);
    var s = a;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
u_ = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function ba(e, t) {
  if (!Le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function ht(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags & 14680064),
        (n |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags),
        (n |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function UA(e, t, r) {
  var n = t.pendingProps;
  switch ((vp(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ht(t), null;
    case 1:
      return Tt(t.type) && fl(), ht(t), null;
    case 3:
      return (
        (n = t.stateNode),
        Fi(),
        Re(Et),
        Re(vt),
        xp(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (_a(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), hr !== null && (mh(hr), (hr = null)))),
        uh(e, t),
        ht(t),
        null
      );
    case 5:
      mp(t);
      var i = Bn(co.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        o_(e, t, r, n, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(L(166));
          return ht(t), null;
        }
        if (((e = Bn(wr.current)), _a(t))) {
          (n = t.stateNode), (r = t.type);
          var a = t.memoizedProps;
          switch (((n[vr] = t), (n[lo] = a), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              Me("cancel", n), Me("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              Me("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Da.length; i++) Me(Da[i], n);
              break;
            case "source":
              Me("error", n);
              break;
            case "img":
            case "image":
            case "link":
              Me("error", n), Me("load", n);
              break;
            case "details":
              Me("toggle", n);
              break;
            case "input":
              Qv(n, a), Me("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!a.multiple }),
                Me("invalid", n);
              break;
            case "textarea":
              Zv(n, a), Me("invalid", n);
          }
          Ff(r, a), (i = null);
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var u = a[o];
              o === "children"
                ? typeof u == "string"
                  ? n.textContent !== u &&
                    (au(n.textContent, u, e), (i = ["children", u]))
                  : typeof u == "number" &&
                    n.textContent !== "" + u &&
                    (au(n.textContent, u, e), (i = ["children", "" + u]))
                : Ja.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  Me("scroll", n);
            }
          switch (r) {
            case "input":
              Qo(n), Jv(n, a, !0);
              break;
            case "textarea":
              Qo(n), ey(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (n.onclick = cl);
          }
          (n = i), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = H1(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = o.createElement(r, { is: n.is }))
                : ((e = o.createElement(r)),
                  r === "select" &&
                    ((o = e),
                    n.multiple
                      ? (o.multiple = !0)
                      : n.size && (o.size = n.size)))
              : (e = o.createElementNS(e, r)),
            (e[vr] = t),
            (e[lo] = n),
            a_(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = zf(r, n)), r)) {
              case "dialog":
                Me("cancel", e), Me("close", e), (i = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                Me("load", e), (i = n);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Da.length; i++) Me(Da[i], e);
                i = n;
                break;
              case "source":
                Me("error", e), (i = n);
                break;
              case "img":
              case "image":
              case "link":
                Me("error", e), Me("load", e), (i = n);
                break;
              case "details":
                Me("toggle", e), (i = n);
                break;
              case "input":
                Qv(e, n), (i = Nf(e, n)), Me("invalid", e);
                break;
              case "option":
                i = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (i = We({}, n, { value: void 0 })),
                  Me("invalid", e);
                break;
              case "textarea":
                Zv(e, n), (i = Df(e, n)), Me("invalid", e);
                break;
              default:
                i = n;
            }
            Ff(r, i), (u = i);
            for (a in u)
              if (u.hasOwnProperty(a)) {
                var l = u[a];
                a === "style"
                  ? G1(e, l)
                  : a === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && V1(e, l))
                  : a === "children"
                  ? typeof l == "string"
                    ? (r !== "textarea" || l !== "") && Za(e, l)
                    : typeof l == "number" && Za(e, "" + l)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    (Ja.hasOwnProperty(a)
                      ? l != null && a === "onScroll" && Me("scroll", e)
                      : l != null && Yd(e, a, l, o));
              }
            switch (r) {
              case "input":
                Qo(e), Jv(e, n, !1);
                break;
              case "textarea":
                Qo(e), ey(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + yn(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (a = n.value),
                  a != null
                    ? Ai(e, !!n.multiple, a, !1)
                    : n.defaultValue != null &&
                      Ai(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = cl);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ht(t), null;
    case 6:
      if (e && t.stateNode != null) u_(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(L(166));
        if (((r = Bn(co.current)), Bn(wr.current), _a(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[vr] = t),
            (a = n.nodeValue !== r) && ((e = Ft), e !== null))
          )
            switch (((o = (e.mode & 1) !== 0), e.tag)) {
              case 3:
                au(n.nodeValue, r, o);
                break;
              case 5:
                e.memoizedProps[void 0] !== !0 && au(n.nodeValue, r, o);
            }
          a && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[vr] = t),
            (t.stateNode = n);
      }
      return ht(t), null;
    case 13:
      if (
        (Re(Ue),
        (n = t.memoizedState),
        Le && At !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
      ) {
        for (n = At; n; ) n = Nr(n.nextSibling);
        return Di(), (t.flags |= 98560), t;
      }
      if (n !== null && n.dehydrated !== null) {
        if (((n = _a(t)), e === null)) {
          if (!n) throw Error(L(318));
          if (
            ((n = t.memoizedState), (n = n !== null ? n.dehydrated : null), !n)
          )
            throw Error(L(317));
          n[vr] = t;
        } else
          Di(),
            (t.flags & 128) === 0 && (t.memoizedState = null),
            (t.flags |= 4);
        return ht(t), null;
      }
      return (
        hr !== null && (mh(hr), (hr = null)),
        (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((n = n !== null),
            (r = !1),
            e === null ? _a(t) : (r = e.memoizedState !== null),
            n &&
              !r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Ue.current & 1) !== 0
                  ? Qe === 0 && (Qe = 3)
                  : $p())),
            t.updateQueue !== null && (t.flags |= 4),
            ht(t),
            null)
      );
    case 4:
      return (
        Fi(), uh(e, t), e === null && oo(t.stateNode.containerInfo), ht(t), null
      );
    case 10:
      return hp(t.type._context), ht(t), null;
    case 17:
      return Tt(t.type) && fl(), ht(t), null;
    case 19:
      if ((Re(Ue), (a = t.memoizedState), a === null)) return ht(t), null;
      if (((n = (t.flags & 128) !== 0), (o = a.rendering), o === null))
        if (n) ba(a, !1);
        else {
          if (Qe !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((o = ml(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    ba(a, !1),
                    n = o.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (a = r),
                    (e = n),
                    (a.flags &= 14680066),
                    (o = a.alternate),
                    o === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return Ee(Ue, (Ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            qe() > Ui &&
            ((t.flags |= 128), (n = !0), ba(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = ml(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              ba(a, !0),
              a.tail === null && a.tailMode === "hidden" && !o.alternate && !Le)
            )
              return ht(t), null;
          } else
            2 * qe() - a.renderingStartTime > Ui &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), ba(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((r = a.last),
            r !== null ? (r.sibling = o) : (t.child = o),
            (a.last = o));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = qe()),
          (t.sibling = null),
          (r = Ue.current),
          Ee(Ue, n ? (r & 1) | 2 : r & 1),
          t)
        : (ht(t), null);
    case 22:
    case 23:
      return (
        Pp(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && (t.mode & 1) !== 0
          ? (Nt & 1073741824) !== 0 &&
            (ht(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ht(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
var WA = qr.ReactCurrentOwner,
  Dt = !1;
function gt(e, t, r, n) {
  t.child = e === null ? Dx(t, null, r, n) : Li(t, e.child, r, n);
}
function jy(e, t, r, n, i) {
  r = r.render;
  var a = t.ref;
  return (
    Pi(t, i),
    (n = wp(e, t, r, n, a, i)),
    (r = bp()),
    e !== null && !Dt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Vr(e, t, i))
      : (Le && r && pp(t), (t.flags |= 1), gt(e, t, n, i), t.child)
  );
}
function Dy(e, t, r, n, i) {
  if (e === null) {
    var a = r.type;
    return typeof a == "function" &&
      !Cp(a) &&
      a.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), l_(e, t, a, n, i))
      : ((e = Du(r.type, null, n, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), (e.lanes & i) === 0)) {
    var o = a.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : ao), r(o, n) && e.ref === t.ref)
    )
      return Vr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = mn(a, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function l_(e, t, r, n, i) {
  if (e !== null && ao(e.memoizedProps, n) && e.ref === t.ref)
    if (((Dt = !1), (e.lanes & i) !== 0)) (e.flags & 131072) !== 0 && (Dt = !0);
    else return (t.lanes = e.lanes), Vr(e, t, i);
  return lh(e, t, r, n, i);
}
function s_(e, t, r) {
  var n = t.pendingProps,
    i = n.children,
    a = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null }),
        Ee(bi, Nt),
        (Nt |= r);
    else if ((r & 1073741824) !== 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null }),
        (n = a !== null ? a.baseLanes : r),
        Ee(bi, Nt),
        (Nt |= n);
    else
      return (
        (e = a !== null ? a.baseLanes | r : r),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = { baseLanes: e, cachePool: null }),
        (t.updateQueue = null),
        Ee(bi, Nt),
        (Nt |= e),
        null
      );
  else
    a !== null ? ((n = a.baseLanes | r), (t.memoizedState = null)) : (n = r),
      Ee(bi, Nt),
      (Nt |= n);
  return gt(e, t, i, r), t.child;
}
function c_(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function lh(e, t, r, n, i) {
  var a = Tt(r) ? Kn : vt.current;
  return (
    (a = ji(t, a)),
    Pi(t, i),
    (r = wp(e, t, r, n, a, i)),
    (n = bp()),
    e !== null && !Dt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Vr(e, t, i))
      : (Le && n && pp(t), (t.flags |= 1), gt(e, t, r, i), t.child)
  );
}
function Ly(e, t, r, n, i) {
  if (Tt(r)) {
    var a = !0;
    hl(t);
  } else a = !1;
  if ((Pi(t, i), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      Ix(t, r, n),
      nh(t, r, n, i),
      (n = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var l = o.context,
      s = r.contextType;
    typeof s == "object" && s !== null
      ? (s = nr(s))
      : ((s = Tt(r) ? Kn : vt.current), (s = ji(t, s)));
    var c = r.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== n || l !== s) && Py(t, o, n, s)),
      (Zr = !1);
    var h = t.memoizedState;
    (o.state = h),
      vl(t, n, o, i),
      (l = t.memoizedState),
      u !== n || h !== l || Et.current || Zr
        ? (typeof c == "function" && (rh(t, r, c, n), (l = t.memoizedState)),
          (u = Zr || Ty(t, r, u, n, h, l, s))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (o.props = n),
          (o.state = l),
          (o.context = s),
          (n = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (o = t.stateNode),
      Cx(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : cr(t.type, u)),
      (o.props = s),
      (f = t.pendingProps),
      (h = o.context),
      (l = r.contextType),
      typeof l == "object" && l !== null
        ? (l = nr(l))
        : ((l = Tt(r) ? Kn : vt.current), (l = ji(t, l)));
    var x = r.getDerivedStateFromProps;
    (c =
      typeof x == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== f || h !== l) && Py(t, o, n, l)),
      (Zr = !1),
      (h = t.memoizedState),
      (o.state = h),
      vl(t, n, o, i);
    var v = t.memoizedState;
    u !== f || h !== v || Et.current || Zr
      ? (typeof x == "function" && (rh(t, r, x, n), (v = t.memoizedState)),
        (s = Zr || Ty(t, r, s, n, h, v, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(n, v, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(n, v, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = v)),
        (o.props = n),
        (o.state = v),
        (o.context = l),
        (n = s))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return sh(e, t, r, n, a, i);
}
function sh(e, t, r, n, i, a) {
  c_(e, t);
  var o = (t.flags & 128) !== 0;
  if (!n && !o) return i && Ay(t, r, !1), Vr(e, t, a);
  (n = t.stateNode), (WA.current = t);
  var u =
    o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Li(t, e.child, null, a)), (t.child = Li(t, null, u, a)))
      : gt(e, t, u, a),
    (t.memoizedState = n.state),
    i && Ay(t, r, !0),
    t.child
  );
}
function f_(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Oy(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Oy(e, t.context, !1),
    gp(e, t.containerInfo);
}
function Fy(e, t, r, n, i) {
  return Di(), yp(i), (t.flags |= 256), gt(e, t, r, n), t.child;
}
var su = { dehydrated: null, treeContext: null, retryLane: 0 };
function cu(e) {
  return { baseLanes: e, cachePool: null };
}
function h_(e, t, r) {
  var n = t.pendingProps,
    i = Ue.current,
    a = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    u
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Ee(Ue, i & 1),
    e === null)
  )
    return (
      ah(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((i = n.children),
          (e = n.fallback),
          a
            ? ((n = t.mode),
              (a = t.child),
              (i = { mode: "hidden", children: i }),
              (n & 1) === 0 && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = i))
                : (a = kl(i, n, 0, null)),
              (e = qn(e, n, r, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = cu(r)),
              (t.memoizedState = su),
              e)
            : ch(t, i))
    );
  if (((i = e.memoizedState), i !== null)) {
    if (((u = i.dehydrated), u !== null)) {
      if (o)
        return t.flags & 256
          ? ((t.flags &= -257), fu(e, t, r, Error(L(422))))
          : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((a = n.fallback),
            (i = t.mode),
            (n = kl({ mode: "visible", children: n.children }, i, 0, null)),
            (a = qn(a, i, r, null)),
            (a.flags |= 2),
            (n.return = t),
            (a.return = t),
            (n.sibling = a),
            (t.child = n),
            (t.mode & 1) !== 0 && Li(t, e.child, null, r),
            (t.child.memoizedState = cu(r)),
            (t.memoizedState = su),
            a);
      if ((t.mode & 1) === 0) t = fu(e, t, r, null);
      else if (u.data === "$!") t = fu(e, t, r, Error(L(419)));
      else if (((n = (r & e.childLanes) !== 0), Dt || n)) {
        if (((n = Ke), n !== null)) {
          switch (r & -r) {
            case 4:
              a = 2;
              break;
            case 16:
              a = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              a = 32;
              break;
            case 536870912:
              a = 268435456;
              break;
            default:
              a = 0;
          }
          (n = (a & (n.suspendedLanes | r)) !== 0 ? 0 : a),
            n !== 0 && n !== i.retryLane && ((i.retryLane = n), rr(e, n, -1));
        }
        $p(), (t = fu(e, t, r, Error(L(421))));
      } else
        u.data === "$?"
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = rk.bind(null, e)),
            (u._reactRetry = t),
            (t = null))
          : ((r = i.treeContext),
            (At = Nr(u.nextSibling)),
            (Ft = t),
            (Le = !0),
            (hr = null),
            r !== null &&
              ((Yt[Qt++] = Rr),
              (Yt[Qt++] = jr),
              (Yt[Qt++] = Xn),
              (Rr = r.id),
              (jr = r.overflow),
              (Xn = t)),
            (t = ch(t, t.pendingProps.children)),
            (t.flags |= 4096));
      return t;
    }
    return a
      ? ((n = By(e, t, n.children, n.fallback, r)),
        (a = t.child),
        (i = e.child.memoizedState),
        (a.memoizedState =
          i === null ? cu(r) : { baseLanes: i.baseLanes | r, cachePool: null }),
        (a.childLanes = e.childLanes & ~r),
        (t.memoizedState = su),
        n)
      : ((r = zy(e, t, n.children, r)), (t.memoizedState = null), r);
  }
  return a
    ? ((n = By(e, t, n.children, n.fallback, r)),
      (a = t.child),
      (i = e.child.memoizedState),
      (a.memoizedState =
        i === null ? cu(r) : { baseLanes: i.baseLanes | r, cachePool: null }),
      (a.childLanes = e.childLanes & ~r),
      (t.memoizedState = su),
      n)
    : ((r = zy(e, t, n.children, r)), (t.memoizedState = null), r);
}
function ch(e, t) {
  return (
    (t = kl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function zy(e, t, r, n) {
  var i = e.child;
  return (
    (e = i.sibling),
    (r = mn(i, { mode: "visible", children: r })),
    (t.mode & 1) === 0 && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r)
  );
}
function By(e, t, r, n, i) {
  var a = t.mode;
  e = e.child;
  var o = e.sibling,
    u = { mode: "hidden", children: r };
  return (
    (a & 1) === 0 && t.child !== e
      ? ((r = t.child),
        (r.childLanes = 0),
        (r.pendingProps = u),
        (t.deletions = null))
      : ((r = mn(e, u)), (r.subtreeFlags = e.subtreeFlags & 14680064)),
    o !== null ? (n = mn(o, n)) : ((n = qn(n, a, i, null)), (n.flags |= 2)),
    (n.return = t),
    (r.return = t),
    (r.sibling = n),
    (t.child = r),
    n
  );
}
function fu(e, t, r, n) {
  return (
    n !== null && yp(n),
    Li(t, e.child, null, r),
    (e = ch(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Uy(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), th(e.return, t, r);
}
function Wc(e, t, r, n, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: i,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = n),
      (a.tail = r),
      (a.tailMode = i));
}
function d_(e, t, r) {
  var n = t.pendingProps,
    i = n.revealOrder,
    a = n.tail;
  if ((gt(e, t, n.children, r), (n = Ue.current), (n & 2) !== 0))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Uy(e, r, t);
        else if (e.tag === 19) Uy(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((Ee(Ue, n), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (r = t.child, i = null; r !== null; )
          (e = r.alternate),
            e !== null && ml(e) === null && (i = r),
            (r = r.sibling);
        (r = i),
          r === null
            ? ((i = t.child), (t.child = null))
            : ((i = r.sibling), (r.sibling = null)),
          Wc(t, !1, i, r, a);
        break;
      case "backwards":
        for (r = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ml(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = r), (r = i), (i = e);
        }
        Wc(t, !0, r, null, a);
        break;
      case "together":
        Wc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vr(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Bi |= t.lanes),
    (r & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, r = mn(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = mn(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function HA(e, t, r) {
  switch (t.tag) {
    case 3:
      f_(t), Di();
      break;
    case 5:
      Lx(t);
      break;
    case 1:
      Tt(t.type) && hl(t);
      break;
    case 4:
      gp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        i = t.memoizedProps.value;
      Ee(dl, n._currentValue), (n._currentValue = i);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (Ee(Ue, Ue.current & 1), (t.flags |= 128), null)
          : (r & t.child.childLanes) !== 0
          ? h_(e, t, r)
          : (Ee(Ue, Ue.current & 1),
            (e = Vr(e, t, r)),
            e !== null ? e.sibling : null);
      Ee(Ue, Ue.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (n) return d_(e, t, r);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Ee(Ue, Ue.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), s_(e, t, r);
  }
  return Vr(e, t, r);
}
function VA(e, t) {
  switch ((vp(t), t.tag)) {
    case 1:
      return (
        Tt(t.type) && fl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Fi(),
        Re(Et),
        Re(vt),
        xp(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return mp(t), null;
    case 13:
      if (
        (Re(Ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        Di();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Re(Ue), null;
    case 4:
      return Fi(), null;
    case 10:
      return hp(t.type._context), null;
    case 22:
    case 23:
      return Pp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var hu = !1,
  Un = !1,
  qA = typeof WeakSet == "function" ? WeakSet : Set,
  H = null;
function wl(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        kt(e, t, n);
      }
    else r.current = null;
}
function fh(e, t, r) {
  try {
    r();
  } catch (n) {
    kt(e, t, n);
  }
}
var Wy = !1;
function GA(e, t) {
  if (((e = _x()), sp(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var i = n.anchorOffset,
            a = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, a.nodeType;
          } catch {
            r = null;
            break e;
          }
          var o = 0,
            u = -1,
            l = -1,
            s = 0,
            c = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var x;
              f !== r || (i !== 0 && f.nodeType !== 3) || (u = o + i),
                f !== a || (n !== 0 && f.nodeType !== 3) || (l = o + n),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (x = f.firstChild) !== null;

            )
              (h = f), (f = x);
            for (;;) {
              if (f === e) break t;
              if (
                (h === r && ++s === i && (u = o),
                h === a && ++c === n && (l = o),
                (x = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = x;
          }
          r = u === -1 || l === -1 ? null : { start: u, end: l };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Yf = { focusedElem: e, selectionRange: r }, H = t; H !== null; )
    if (((t = H), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (H = e);
    else
      for (; H !== null; ) {
        t = H;
        try {
          var v = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var d = v.memoizedProps,
                    _ = v.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? d : cr(t.type, d),
                      _
                    );
                  p.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                if (g.nodeType === 1) g.textContent = "";
                else if (g.nodeType === 9) {
                  var y = g.body;
                  y != null && (y.textContent = "");
                }
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (w) {
          kt(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (H = e);
          break;
        }
        H = t.return;
      }
  return (v = Wy), (Wy = !1), v;
}
function vo(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var i = (n = n.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        (i.destroy = void 0), a !== void 0 && fh(t, r, a);
      }
      i = i.next;
    } while (i !== n);
  }
}
function ks(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function hh(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Hy(e, t, r) {
  if (_r && typeof _r.onCommitFiberUnmount == "function")
    try {
      _r.onCommitFiberUnmount(ms, t);
    } catch {}
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        ((e = t.updateQueue), e !== null && ((e = e.lastEffect), e !== null))
      ) {
        var n = (e = e.next);
        do {
          var i = n,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && fh(t, r, a),
            (n = n.next);
        } while (n !== e);
      }
      break;
    case 1:
      if (
        (wl(t, r),
        (e = t.stateNode),
        typeof e.componentWillUnmount == "function")
      )
        try {
          (e.props = t.memoizedProps),
            (e.state = t.memoizedState),
            e.componentWillUnmount();
        } catch (o) {
          kt(t, r, o);
        }
      break;
    case 5:
      wl(t, r);
      break;
    case 4:
      y_(e, t, r);
  }
}
function p_(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), p_(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[vr], delete t[lo], delete t[Zf], delete t[$A], delete t[CA])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function v_(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Vy(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || v_(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function qy(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (v_(t)) break e;
      t = t.return;
    }
    throw Error(L(160));
  }
  var r = t;
  switch (r.tag) {
    case 5:
      (t = r.stateNode),
        r.flags & 32 && (Za(t, ""), (r.flags &= -33)),
        (r = Vy(e)),
        ph(e, r, t);
      break;
    case 3:
    case 4:
      (t = r.stateNode.containerInfo), (r = Vy(e)), dh(e, r, t);
      break;
    default:
      throw Error(L(161));
  }
}
function dh(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = cl));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (dh(e, t, r), e = e.sibling; e !== null; ) dh(e, t, r), (e = e.sibling);
}
function ph(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (ph(e, t, r), e = e.sibling; e !== null; ) ph(e, t, r), (e = e.sibling);
}
function y_(e, t, r) {
  for (var n = t, i = !1, a, o; ; ) {
    if (!i) {
      i = n.return;
      e: for (;;) {
        if (i === null) throw Error(L(160));
        switch (((a = i.stateNode), i.tag)) {
          case 5:
            o = !1;
            break e;
          case 3:
            (a = a.containerInfo), (o = !0);
            break e;
          case 4:
            (a = a.containerInfo), (o = !0);
            break e;
        }
        i = i.return;
      }
      i = !0;
    }
    if (n.tag === 5 || n.tag === 6) {
      e: for (var u = e, l = n, s = r, c = l; ; )
        if ((Hy(u, c, s), c.child !== null && c.tag !== 4))
          (c.child.return = c), (c = c.child);
        else {
          if (c === l) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === l) break e;
            c = c.return;
          }
          (c.sibling.return = c.return), (c = c.sibling);
        }
      o
        ? ((u = a),
          (l = n.stateNode),
          u.nodeType === 8 ? u.parentNode.removeChild(l) : u.removeChild(l))
        : a.removeChild(n.stateNode);
    } else if (n.tag === 18)
      o
        ? ((u = a),
          (l = n.stateNode),
          u.nodeType === 8 ? Lc(u.parentNode, l) : u.nodeType === 1 && Lc(u, l),
          no(u))
        : Lc(a, n.stateNode);
    else if (n.tag === 4) {
      if (n.child !== null) {
        (a = n.stateNode.containerInfo),
          (o = !0),
          (n.child.return = n),
          (n = n.child);
        continue;
      }
    } else if ((Hy(e, n, r), n.child !== null)) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      (n = n.return), n.tag === 4 && (i = !1);
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function Hc(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      vo(3, t, t.return), ks(3, t), vo(5, t, t.return);
      return;
    case 1:
      return;
    case 5:
      var r = t.stateNode;
      if (r != null) {
        var n = t.memoizedProps,
          i = e !== null ? e.memoizedProps : n;
        e = t.type;
        var a = t.updateQueue;
        if (((t.updateQueue = null), a !== null)) {
          for (
            e === "input" && n.type === "radio" && n.name != null && U1(r, n),
              zf(e, i),
              t = zf(e, n),
              i = 0;
            i < a.length;
            i += 2
          ) {
            var o = a[i],
              u = a[i + 1];
            o === "style"
              ? G1(r, u)
              : o === "dangerouslySetInnerHTML"
              ? V1(r, u)
              : o === "children"
              ? Za(r, u)
              : Yd(r, o, u, t);
          }
          switch (e) {
            case "input":
              Rf(r, n);
              break;
            case "textarea":
              W1(r, n);
              break;
            case "select":
              (e = r._wrapperState.wasMultiple),
                (r._wrapperState.wasMultiple = !!n.multiple),
                (a = n.value),
                a != null
                  ? Ai(r, !!n.multiple, a, !1)
                  : e !== !!n.multiple &&
                    (n.defaultValue != null
                      ? Ai(r, !!n.multiple, n.defaultValue, !0)
                      : Ai(r, !!n.multiple, n.multiple ? [] : "", !1));
          }
          r[lo] = n;
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(L(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      e !== null &&
        e.memoizedState.isDehydrated &&
        no(t.stateNode.containerInfo);
      return;
    case 12:
      return;
    case 13:
      Gy(t);
      return;
    case 19:
      Gy(t);
      return;
    case 17:
      return;
  }
  throw Error(L(163));
}
function Gy(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new qA()),
      t.forEach(function (n) {
        var i = nk.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(i, i));
      });
  }
}
function KA(e, t) {
  for (H = t; H !== null; ) {
    t = H;
    var r = t.deletions;
    if (r !== null)
      for (var n = 0; n < r.length; n++) {
        var i = r[n];
        try {
          y_(e, i, t);
          var a = i.alternate;
          a !== null && (a.return = null), (i.return = null);
        } catch (O) {
          kt(i, t, O);
        }
      }
    if (((r = t.child), (t.subtreeFlags & 12854) !== 0 && r !== null))
      (r.return = t), (H = r);
    else
      for (; H !== null; ) {
        t = H;
        try {
          var o = t.flags;
          if ((o & 32 && Za(t.stateNode, ""), o & 512)) {
            var u = t.alternate;
            if (u !== null) {
              var l = u.ref;
              l !== null &&
                (typeof l == "function" ? l(null) : (l.current = null));
            }
          }
          if (o & 8192)
            switch (t.tag) {
              case 13:
                if (t.memoizedState !== null) {
                  var s = t.alternate;
                  (s === null || s.memoizedState === null) && (Ep = qe());
                }
                break;
              case 22:
                var c = t.memoizedState !== null,
                  f = t.alternate,
                  h = f !== null && f.memoizedState !== null;
                r = t;
                e: {
                  (n = r), (i = c);
                  for (var x = null, v = n; ; ) {
                    if (v.tag === 5) {
                      if (x === null) {
                        x = v;
                        var d = v.stateNode;
                        if (i) {
                          var _ = d.style;
                          typeof _.setProperty == "function"
                            ? _.setProperty("display", "none", "important")
                            : (_.display = "none");
                        } else {
                          var p = v.stateNode,
                            m = v.memoizedProps.style,
                            g =
                              m != null && m.hasOwnProperty("display")
                                ? m.display
                                : null;
                          p.style.display = q1("display", g);
                        }
                      }
                    } else if (v.tag === 6)
                      x === null &&
                        (v.stateNode.nodeValue = i ? "" : v.memoizedProps);
                    else if (
                      ((v.tag !== 22 && v.tag !== 23) ||
                        v.memoizedState === null ||
                        v === n) &&
                      v.child !== null
                    ) {
                      (v.child.return = v), (v = v.child);
                      continue;
                    }
                    if (v === n) break;
                    for (; v.sibling === null; ) {
                      if (v.return === null || v.return === n) break e;
                      x === v && (x = null), (v = v.return);
                    }
                    x === v && (x = null),
                      (v.sibling.return = v.return),
                      (v = v.sibling);
                  }
                }
                if (c && !h && (r.mode & 1) !== 0) {
                  H = r;
                  for (var y = r.child; y !== null; ) {
                    for (r = H = y; H !== null; ) {
                      n = H;
                      var w = n.child;
                      switch (n.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          vo(4, n, n.return);
                          break;
                        case 1:
                          wl(n, n.return);
                          var b = n.stateNode;
                          if (typeof b.componentWillUnmount == "function") {
                            var S = n.return;
                            try {
                              (b.props = n.memoizedProps),
                                (b.state = n.memoizedState),
                                b.componentWillUnmount();
                            } catch (O) {
                              kt(n, S, O);
                            }
                          }
                          break;
                        case 5:
                          wl(n, n.return);
                          break;
                        case 22:
                          if (n.memoizedState !== null) {
                            Xy(r);
                            continue;
                          }
                      }
                      w !== null ? ((w.return = n), (H = w)) : Xy(r);
                    }
                    y = y.sibling;
                  }
                }
            }
          switch (o & 4102) {
            case 2:
              qy(t), (t.flags &= -3);
              break;
            case 6:
              qy(t), (t.flags &= -3), Hc(t.alternate, t);
              break;
            case 4096:
              t.flags &= -4097;
              break;
            case 4100:
              (t.flags &= -4097), Hc(t.alternate, t);
              break;
            case 4:
              Hc(t.alternate, t);
          }
        } catch (O) {
          kt(t, t.return, O);
        }
        if (((r = t.sibling), r !== null)) {
          (r.return = t.return), (H = r);
          break;
        }
        H = t.return;
      }
  }
}
function XA(e, t, r) {
  (H = e), g_(e);
}
function g_(e, t, r) {
  for (var n = (e.mode & 1) !== 0; H !== null; ) {
    var i = H,
      a = i.child;
    if (i.tag === 22 && n) {
      var o = i.memoizedState !== null || hu;
      if (!o) {
        var u = i.alternate,
          l = (u !== null && u.memoizedState !== null) || Un;
        u = hu;
        var s = Un;
        if (((hu = o), (Un = l) && !s))
          for (H = i; H !== null; )
            (o = H),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Yy(i)
                : l !== null
                ? ((l.return = o), (H = l))
                : Yy(i);
        for (; a !== null; ) (H = a), g_(a), (a = a.sibling);
        (H = i), (hu = u), (Un = s);
      }
      Ky(e);
    } else
      (i.subtreeFlags & 8772) !== 0 && a !== null
        ? ((a.return = i), (H = a))
        : Ky(e);
  }
}
function Ky(e) {
  for (; H !== null; ) {
    var t = H;
    if ((t.flags & 8772) !== 0) {
      var r = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Un || ks(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !Un)
                if (r === null) n.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : cr(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    i,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && Ey(t, a, n);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                Ey(t, o, r);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (r === null && t.flags & 4) {
                r = u;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && no(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break;
            default:
              throw Error(L(163));
          }
        Un || (t.flags & 512 && hh(t));
      } catch (h) {
        kt(t, t.return, h);
      }
    }
    if (t === e) {
      H = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (H = r);
      break;
    }
    H = t.return;
  }
}
function Xy(e) {
  for (; H !== null; ) {
    var t = H;
    if (t === e) {
      H = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (H = r);
      break;
    }
    H = t.return;
  }
}
function Yy(e) {
  for (; H !== null; ) {
    var t = H;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            ks(4, t);
          } catch (l) {
            kt(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              kt(t, i, l);
            }
          }
          var a = t.return;
          try {
            hh(t);
          } catch (l) {
            kt(t, a, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            hh(t);
          } catch (l) {
            kt(t, o, l);
          }
      }
    } catch (l) {
      kt(t, t.return, l);
    }
    if (t === e) {
      H = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (H = u);
      break;
    }
    H = t.return;
  }
}
var YA = Math.ceil,
  bl = qr.ReactCurrentDispatcher,
  Ap = qr.ReactCurrentOwner,
  tr = qr.ReactCurrentBatchConfig,
  fe = 0,
  Ke = null,
  Ge = null,
  st = 0,
  Nt = 0,
  bi = wn(0),
  Qe = 0,
  yo = null,
  Bi = 0,
  Es = 0,
  kp = 0,
  Ga = null,
  St = null,
  Ep = 0,
  Ui = 1 / 0,
  Sl = !1,
  vh = null,
  fn = null,
  du = !1,
  on = null,
  Ol = 0,
  Ka = 0,
  yh = null,
  Ru = -1,
  ju = 0;
function _t() {
  return (fe & 6) !== 0 ? qe() : Ru !== -1 ? Ru : (Ru = qe());
}
function hn(e) {
  return (e.mode & 1) === 0
    ? 1
    : (fe & 2) !== 0 && st !== 0
    ? st & -st
    : IA.transition !== null
    ? (ju === 0 &&
        ((e = Zo), (Zo <<= 1), (Zo & 4194240) === 0 && (Zo = 64), (ju = e)),
      ju)
    : ((e = we),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : fx(e.type))),
      e);
}
function rr(e, t, r) {
  if (50 < Ka) throw ((Ka = 0), (yh = null), Error(L(185)));
  var n = Ts(e, t);
  return n === null
    ? null
    : ($o(n, t, r),
      ((fe & 2) === 0 || n !== Ke) &&
        (n === Ke && ((fe & 2) === 0 && (Es |= t), Qe === 4 && rn(n, st)),
        Pt(n, r),
        t === 1 &&
          fe === 0 &&
          (e.mode & 1) === 0 &&
          ((Ui = qe() + 500), Ss && bn())),
      n);
}
function Ts(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
function Pt(e, t) {
  var r = e.callbackNode;
  IO(e, t);
  var n = ul(e, e === Ke ? st : 0);
  if (n === 0)
    r !== null && ny(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && ny(r), t === 1))
      e.tag === 0 ? MA(Qy.bind(null, e)) : $x(Qy.bind(null, e)),
        TA(function () {
          fe === 0 && bn();
        }),
        (r = null);
    else {
      switch (ax(n)) {
        case 1:
          r = tp;
          break;
        case 4:
          r = nx;
          break;
        case 16:
          r = ol;
          break;
        case 536870912:
          r = ix;
          break;
        default:
          r = ol;
      }
      r = A_(r, m_.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function m_(e, t) {
  if (((Ru = -1), (ju = 0), (fe & 6) !== 0)) throw Error(L(327));
  var r = e.callbackNode;
  if ($i() && e.callbackNode !== r) return null;
  var n = ul(e, e === Ke ? st : 0);
  if (n === 0) return null;
  if ((n & 30) !== 0 || (n & e.expiredLanes) !== 0 || t) t = Al(e, n);
  else {
    t = n;
    var i = fe;
    fe |= 2;
    var a = __();
    (Ke !== e || st !== t) && ((Ui = qe() + 500), Vn(e, t));
    do
      try {
        ZA();
        break;
      } catch (u) {
        x_(e, u);
      }
    while (1);
    fp(),
      (bl.current = a),
      (fe = i),
      Ge !== null ? (t = 0) : ((Ke = null), (st = 0), (t = Qe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Vf(e)), i !== 0 && ((n = i), (t = gh(e, i)))), t === 1)
    )
      throw ((r = yo), Vn(e, 0), rn(e, n), Pt(e, qe()), r);
    if (t === 6) rn(e, n);
    else {
      if (
        ((i = e.current.alternate),
        (n & 30) === 0 &&
          !QA(i) &&
          ((t = Al(e, n)),
          t === 2 && ((a = Vf(e)), a !== 0 && ((n = a), (t = gh(e, a)))),
          t === 1))
      )
        throw ((r = yo), Vn(e, 0), rn(e, n), Pt(e, qe()), r);
      switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Nn(e, St);
          break;
        case 3:
          if (
            (rn(e, n), (n & 130023424) === n && ((t = Ep + 500 - qe()), 10 < t))
          ) {
            if (ul(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & n) !== n)) {
              _t(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Jf(Nn.bind(null, e, St), t);
            break;
          }
          Nn(e, St);
          break;
        case 4:
          if ((rn(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var o = 31 - dr(n);
            (a = 1 << o), (o = t[o]), o > i && (i = o), (n &= ~a);
          }
          if (
            ((n = i),
            (n = qe() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * YA(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Jf(Nn.bind(null, e, St), n);
            break;
          }
          Nn(e, St);
          break;
        case 5:
          Nn(e, St);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return Pt(e, qe()), e.callbackNode === r ? m_.bind(null, e) : null;
}
function gh(e, t) {
  var r = Ga;
  return (
    e.current.memoizedState.isDehydrated && (Vn(e, t).flags |= 256),
    (e = Al(e, t)),
    e !== 2 && ((t = St), (St = r), t !== null && mh(t)),
    e
  );
}
function mh(e) {
  St === null ? (St = e) : St.push.apply(St, e);
}
function QA(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var i = r[n],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!Ar(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function rn(e, t) {
  for (
    t &= ~kp,
      t &= ~Es,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - dr(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function Qy(e) {
  if ((fe & 6) !== 0) throw Error(L(327));
  $i();
  var t = ul(e, 0);
  if ((t & 1) === 0) return Pt(e, qe()), null;
  var r = Al(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Vf(e);
    n !== 0 && ((t = n), (r = gh(e, n)));
  }
  if (r === 1) throw ((r = yo), Vn(e, 0), rn(e, t), Pt(e, qe()), r);
  if (r === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Nn(e, St),
    Pt(e, qe()),
    null
  );
}
function Tp(e, t) {
  var r = fe;
  fe |= 1;
  try {
    return e(t);
  } finally {
    (fe = r), fe === 0 && ((Ui = qe() + 500), Ss && bn());
  }
}
function Yn(e) {
  on !== null && on.tag === 0 && (fe & 6) === 0 && $i();
  var t = fe;
  fe |= 1;
  var r = tr.transition,
    n = we;
  try {
    if (((tr.transition = null), (we = 1), e)) return e();
  } finally {
    (we = n), (tr.transition = r), (fe = t), (fe & 6) === 0 && bn();
  }
}
function Pp() {
  (Nt = bi.current), Re(bi);
}
function Vn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), EA(r)), Ge !== null))
    for (r = Ge.return; r !== null; ) {
      var n = r;
      switch ((vp(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && fl();
          break;
        case 3:
          Fi(), Re(Et), Re(vt), xp();
          break;
        case 5:
          mp(n);
          break;
        case 4:
          Fi();
          break;
        case 13:
          Re(Ue);
          break;
        case 19:
          Re(Ue);
          break;
        case 10:
          hp(n.type._context);
          break;
        case 22:
        case 23:
          Pp();
      }
      r = r.return;
    }
  if (
    ((Ke = e),
    (Ge = e = mn(e.current, null)),
    (st = Nt = t),
    (Qe = 0),
    (yo = null),
    (kp = Es = Bi = 0),
    (St = Ga = null),
    gr !== null)
  ) {
    for (t = 0; t < gr.length; t++)
      if (((r = gr[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var i = n.next,
          a = r.pending;
        if (a !== null) {
          var o = a.next;
          (a.next = i), (n.next = o);
        }
        r.pending = n;
      }
    gr = null;
  }
  return e;
}
function x_(e, t) {
  do {
    var r = Ge;
    try {
      if ((fp(), (Iu.current = _l), xl)) {
        for (var n = He.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), (n = n.next);
        }
        xl = !1;
      }
      if (
        ((zi = 0),
        (rt = pt = He = null),
        (qa = !1),
        (fo = 0),
        (Ap.current = null),
        r === null || r.return === null)
      ) {
        (Qe = 1), (yo = t), (Ge = null);
        break;
      }
      e: {
        var a = e,
          o = r.return,
          u = r,
          l = t;
        if (
          ((t = st),
          (u.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var s = l,
            c = u,
            f = c.tag;
          if ((c.mode & 1) === 0 && (f === 0 || f === 11 || f === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var x = Ny(o);
          if (x !== null) {
            (x.flags &= -257),
              Ry(x, o, u, a, t),
              x.mode & 1 && Iy(a, s, t),
              (t = x),
              (l = s);
            var v = t.updateQueue;
            if (v === null) {
              var d = new Set();
              d.add(l), (t.updateQueue = d);
            } else v.add(l);
            break e;
          } else {
            if ((t & 1) === 0) {
              Iy(a, s, t), $p();
              break e;
            }
            l = Error(L(426));
          }
        } else if (Le && u.mode & 1) {
          var _ = Ny(o);
          if (_ !== null) {
            (_.flags & 65536) === 0 && (_.flags |= 256),
              Ry(_, o, u, a, t),
              yp(l);
            break e;
          }
        }
        (a = l),
          Qe !== 4 && (Qe = 2),
          Ga === null ? (Ga = [a]) : Ga.push(a),
          (l = Op(l, u)),
          (u = o);
        do {
          switch (u.tag) {
            case 3:
              (u.flags |= 65536), (t &= -t), (u.lanes |= t);
              var p = n_(u, l, t);
              ky(u, p);
              break e;
            case 1:
              a = l;
              var m = u.type,
                g = u.stateNode;
              if (
                (u.flags & 128) === 0 &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (fn === null || !fn.has(g))))
              ) {
                (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                var y = i_(u, a, t);
                ky(u, y);
                break e;
              }
          }
          u = u.return;
        } while (u !== null);
      }
      b_(r);
    } catch (w) {
      (t = w), Ge === r && r !== null && (Ge = r = r.return);
      continue;
    }
    break;
  } while (1);
}
function __() {
  var e = bl.current;
  return (bl.current = _l), e === null ? _l : e;
}
function $p() {
  (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4),
    Ke === null ||
      ((Bi & 268435455) === 0 && (Es & 268435455) === 0) ||
      rn(Ke, st);
}
function Al(e, t) {
  var r = fe;
  fe |= 2;
  var n = __();
  (Ke === e && st === t) || Vn(e, t);
  do
    try {
      JA();
      break;
    } catch (i) {
      x_(e, i);
    }
  while (1);
  if ((fp(), (fe = r), (bl.current = n), Ge !== null)) throw Error(L(261));
  return (Ke = null), (st = 0), Qe;
}
function JA() {
  for (; Ge !== null; ) w_(Ge);
}
function ZA() {
  for (; Ge !== null && !OO(); ) w_(Ge);
}
function w_(e) {
  var t = O_(e.alternate, e, Nt);
  (e.memoizedProps = e.pendingProps),
    t === null ? b_(e) : (Ge = t),
    (Ap.current = null);
}
function b_(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((r = UA(r, t, Nt)), r !== null)) {
        Ge = r;
        return;
      }
    } else {
      if (((r = VA(r, t)), r !== null)) {
        (r.flags &= 32767), (Ge = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Qe = 6), (Ge = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      Ge = t;
      return;
    }
    Ge = t = e;
  } while (t !== null);
  Qe === 0 && (Qe = 5);
}
function Nn(e, t) {
  var r = we,
    n = tr.transition;
  try {
    (tr.transition = null), (we = 1), ek(e, t, r);
  } finally {
    (tr.transition = n), (we = r);
  }
  return null;
}
function ek(e, t, r) {
  do $i();
  while (on !== null);
  if ((fe & 6) !== 0) throw Error(L(327));
  var n = e.finishedWork,
    i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (NO(e, a),
    e === Ke && ((Ge = Ke = null), (st = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      du ||
      ((du = !0),
      A_(ol, function () {
        return $i(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || a)
  ) {
    (a = tr.transition), (tr.transition = null);
    var o = we;
    we = 1;
    var u = fe;
    (fe |= 4),
      (Ap.current = null),
      GA(e, n),
      KA(e, n),
      _A(Yf),
      (Yf = null),
      (e.current = n),
      XA(n),
      AO(),
      (fe = u),
      (we = o),
      (tr.transition = a);
  } else e.current = n;
  if (
    (du && ((du = !1), (on = e), (Ol = i)),
    (a = e.pendingLanes),
    a === 0 && (fn = null),
    TO(n.stateNode),
    Pt(e, qe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) r(t[n]);
  if (Sl) throw ((Sl = !1), (e = vh), (vh = null), e);
  return (
    (Ol & 1) !== 0 && e.tag !== 0 && $i(),
    (a = e.pendingLanes),
    (a & 1) !== 0 ? (e === yh ? Ka++ : ((Ka = 0), (yh = e))) : (Ka = 0),
    bn(),
    null
  );
}
function $i() {
  if (on !== null) {
    var e = ax(Ol),
      t = tr.transition,
      r = we;
    try {
      if (((tr.transition = null), (we = 16 > e ? 16 : e), on === null))
        var n = !1;
      else {
        if (((e = on), (on = null), (Ol = 0), (fe & 6) !== 0))
          throw Error(L(331));
        var i = fe;
        for (fe |= 4, H = e.current; H !== null; ) {
          var a = H,
            o = a.child;
          if ((H.flags & 16) !== 0) {
            var u = a.deletions;
            if (u !== null) {
              for (var l = 0; l < u.length; l++) {
                var s = u[l];
                for (H = s; H !== null; ) {
                  var c = H;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vo(8, c, a);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (H = f);
                  else
                    for (; H !== null; ) {
                      c = H;
                      var h = c.sibling,
                        x = c.return;
                      if ((p_(c), c === s)) {
                        H = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = x), (H = h);
                        break;
                      }
                      H = x;
                    }
                }
              }
              var v = a.alternate;
              if (v !== null) {
                var d = v.child;
                if (d !== null) {
                  v.child = null;
                  do {
                    var _ = d.sibling;
                    (d.sibling = null), (d = _);
                  } while (d !== null);
                }
              }
              H = a;
            }
          }
          if ((a.subtreeFlags & 2064) !== 0 && o !== null)
            (o.return = a), (H = o);
          else
            e: for (; H !== null; ) {
              if (((a = H), (a.flags & 2048) !== 0))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    vo(9, a, a.return);
                }
              var p = a.sibling;
              if (p !== null) {
                (p.return = a.return), (H = p);
                break e;
              }
              H = a.return;
            }
        }
        var m = e.current;
        for (H = m; H !== null; ) {
          o = H;
          var g = o.child;
          if ((o.subtreeFlags & 2064) !== 0 && g !== null)
            (g.return = o), (H = g);
          else
            e: for (o = m; H !== null; ) {
              if (((u = H), (u.flags & 2048) !== 0))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ks(9, u);
                  }
                } catch (w) {
                  kt(u, u.return, w);
                }
              if (u === o) {
                H = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (H = y);
                break e;
              }
              H = u.return;
            }
        }
        if (
          ((fe = i), bn(), _r && typeof _r.onPostCommitFiberRoot == "function")
        )
          try {
            _r.onPostCommitFiberRoot(ms, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (we = r), (tr.transition = t);
    }
  }
  return !1;
}
function Jy(e, t, r) {
  (t = Op(r, t)),
    (t = n_(e, t, 1)),
    cn(e, t),
    (t = _t()),
    (e = Ts(e, 1)),
    e !== null && ($o(e, 1, t), Pt(e, t));
}
function kt(e, t, r) {
  if (e.tag === 3) Jy(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Jy(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (fn === null || !fn.has(n)))
        ) {
          (e = Op(r, e)),
            (e = i_(t, e, 1)),
            cn(t, e),
            (e = _t()),
            (t = Ts(t, 1)),
            t !== null && ($o(t, 1, e), Pt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function tk(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = _t()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Ke === e &&
      (st & r) === r &&
      (Qe === 4 || (Qe === 3 && (st & 130023424) === st && 500 > qe() - Ep)
        ? Vn(e, 0)
        : (kp |= r)),
    Pt(e, t);
}
function S_(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = eu), (eu <<= 1), (eu & 130023424) === 0 && (eu = 4194304)));
  var r = _t();
  (e = Ts(e, t)), e !== null && ($o(e, t, r), Pt(e, r));
}
function rk(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), S_(e, r);
}
function nk(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        i = e.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  n !== null && n.delete(t), S_(e, r);
}
var O_;
O_ = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Et.current) Dt = !0;
    else {
      if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
        return (Dt = !1), HA(e, t, r);
      Dt = (e.flags & 131072) !== 0;
    }
  else (Dt = !1), Le && (t.flags & 1048576) !== 0 && Nx(t, gl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps);
      var i = ji(t, vt.current);
      Pi(t, r), (i = wp(null, t, n, e, i, r));
      var a = bp();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Tt(n) ? ((a = !0), hl(t)) : (a = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            dp(t),
            (i.updater = Os),
            (t.stateNode = i),
            (i._reactInternals = t),
            nh(t, n, e, r),
            (t = sh(null, t, n, !0, a, r)))
          : ((t.tag = 0), Le && a && pp(t), gt(null, t, i, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (i = n._init),
          (n = i(n._payload)),
          (t.type = n),
          (i = t.tag = ak(n)),
          (e = cr(n, e)),
          i)
        ) {
          case 0:
            t = lh(null, t, n, e, r);
            break e;
          case 1:
            t = Ly(null, t, n, e, r);
            break e;
          case 11:
            t = jy(null, t, n, e, r);
            break e;
          case 14:
            t = Dy(null, t, n, cr(n.type, e), r);
            break e;
        }
        throw Error(L(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : cr(n, i)),
        lh(e, t, n, i, r)
      );
    case 1:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : cr(n, i)),
        Ly(e, t, n, i, r)
      );
    case 3:
      e: {
        if ((f_(t), e === null)) throw Error(L(387));
        (n = t.pendingProps),
          (a = t.memoizedState),
          (i = a.element),
          Cx(e, t),
          vl(t, n, null, r);
        var o = t.memoizedState;
        if (((n = o.element), a.isDehydrated))
          if (
            ((a = {
              element: n,
              isDehydrated: !1,
              cache: o.cache,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (i = Error(L(423))), (t = Fy(e, t, n, r, i));
            break e;
          } else if (n !== i) {
            (i = Error(L(424))), (t = Fy(e, t, n, r, i));
            break e;
          } else
            for (
              At = Nr(t.stateNode.containerInfo.firstChild),
                Ft = t,
                Le = !0,
                hr = null,
                r = Dx(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Di(), n === i)) {
            t = Vr(e, t, r);
            break e;
          }
          gt(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Lx(t),
        e === null && ah(t),
        (n = t.type),
        (i = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Qf(n, i) ? (o = null) : a !== null && Qf(n, a) && (t.flags |= 32),
        c_(e, t),
        gt(e, t, o, r),
        t.child
      );
    case 6:
      return e === null && ah(t), null;
    case 13:
      return h_(e, t, r);
    case 4:
      return (
        gp(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Li(t, null, n, r)) : gt(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : cr(n, i)),
        jy(e, t, n, i, r)
      );
    case 7:
      return gt(e, t, t.pendingProps, r), t.child;
    case 8:
      return gt(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return gt(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (o = i.value),
          Ee(dl, n._currentValue),
          (n._currentValue = o),
          a !== null)
        )
          if (Ar(a.value, o)) {
            if (a.children === i.children && !Et.current) {
              t = Vr(e, t, r);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var u = a.dependencies;
              if (u !== null) {
                o = a.child;
                for (var l = u.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (a.tag === 1) {
                      (l = zr(-1, r & -r)), (l.tag = 2);
                      var s = a.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (s.pending = l);
                      }
                    }
                    (a.lanes |= r),
                      (l = a.alternate),
                      l !== null && (l.lanes |= r),
                      th(a.return, r, t),
                      (u.lanes |= r);
                    break;
                  }
                  l = l.next;
                }
              } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((o = a.return), o === null)) throw Error(L(341));
                (o.lanes |= r),
                  (u = o.alternate),
                  u !== null && (u.lanes |= r),
                  th(o, r, t),
                  (o = a.sibling);
              } else o = a.child;
              if (o !== null) o.return = a;
              else
                for (o = a; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((a = o.sibling), a !== null)) {
                    (a.return = o.return), (o = a);
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        gt(e, t, i.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (n = t.pendingProps.children),
        Pi(t, r),
        (i = nr(i)),
        (n = n(i)),
        (t.flags |= 1),
        gt(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (i = cr(n, t.pendingProps)),
        (i = cr(n.type, i)),
        Dy(e, t, n, i, r)
      );
    case 15:
      return l_(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : cr(n, i)),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        Tt(n) ? ((e = !0), hl(t)) : (e = !1),
        Pi(t, r),
        Ix(t, n, i),
        nh(t, n, i, r),
        sh(null, t, n, !0, e, r)
      );
    case 19:
      return d_(e, t, r);
    case 22:
      return s_(e, t, r);
  }
  throw Error(L(156, t.tag));
};
function A_(e, t) {
  return rx(e, t);
}
function ik(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Jt(e, t, r, n) {
  return new ik(e, t, r, n);
}
function Cp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function ak(e) {
  if (typeof e == "function") return Cp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Jd)) return 11;
    if (e === Zd) return 14;
  }
  return 2;
}
function mn(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Jt(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function Du(e, t, r, n, i, a) {
  var o = 2;
  if (((n = e), typeof e == "function")) Cp(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case di:
        return qn(r.children, i, a, t);
      case Qd:
        (o = 8), (i |= 8);
        break;
      case $f:
        return (
          (e = Jt(12, r, t, i | 2)), (e.elementType = $f), (e.lanes = a), e
        );
      case Cf:
        return (e = Jt(13, r, t, i)), (e.elementType = Cf), (e.lanes = a), e;
      case Mf:
        return (e = Jt(19, r, t, i)), (e.elementType = Mf), (e.lanes = a), e;
      case F1:
        return kl(r, i, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case D1:
              o = 10;
              break e;
            case L1:
              o = 9;
              break e;
            case Jd:
              o = 11;
              break e;
            case Zd:
              o = 14;
              break e;
            case Jr:
              (o = 16), (n = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Jt(o, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = a), t
  );
}
function qn(e, t, r, n) {
  return (e = Jt(7, e, n, t)), (e.lanes = r), e;
}
function kl(e, t, r, n) {
  return (
    (e = Jt(22, e, n, t)),
    (e.elementType = F1),
    (e.lanes = r),
    (e.stateNode = {}),
    e
  );
}
function Vc(e, t, r) {
  return (e = Jt(6, e, null, t)), (e.lanes = r), e;
}
function qc(e, t, r) {
  return (
    (t = Jt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ok(e, t, r, n, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ec(0)),
    (this.expirationTimes = Ec(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ec(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Mp(e, t, r, n, i, a, o, u, l) {
  return (
    (e = new ok(e, t, r, u, l)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = Jt(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
    }),
    dp(a),
    e
  );
}
function uk(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: hi,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function k_(e) {
  if (!e) return gn;
  e = e._reactInternals;
  e: {
    if (ri(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Tt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (Tt(r)) return Px(e, r, t);
  }
  return t;
}
function E_(e, t, r, n, i, a, o, u, l) {
  return (
    (e = Mp(r, n, !0, e, i, a, o, u, l)),
    (e.context = k_(null)),
    (r = e.current),
    (n = _t()),
    (i = hn(r)),
    (a = zr(n, i)),
    (a.callback = t != null ? t : null),
    cn(r, a),
    (e.current.lanes = i),
    $o(e, i, n),
    Pt(e, n),
    e
  );
}
function Ps(e, t, r, n) {
  var i = t.current,
    a = _t(),
    o = hn(i);
  return (
    (r = k_(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = zr(a, o)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    cn(i, t),
    (e = rr(i, o, a)),
    e !== null && Mu(e, i, o),
    o
  );
}
function El(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zy(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Ip(e, t) {
  Zy(e, t), (e = e.alternate) && Zy(e, t);
}
function lk() {
  return null;
}
var T_ =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Np(e) {
  this._internalRoot = e;
}
$s.prototype.render = Np.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Ps(e, t, null, null);
};
$s.prototype.unmount = Np.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yn(function () {
      Ps(null, e, null, null);
    }),
      (t[Hr] = null);
  }
};
function $s(e) {
  this._internalRoot = e;
}
$s.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = lx();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < tn.length && t !== 0 && t < tn[r].priority; r++);
    tn.splice(r, 0, e), r === 0 && cx(e);
  }
};
function Rp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Cs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function eg() {}
function sk(e, t, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var a = n;
      n = function () {
        var s = El(o);
        a.call(s);
      };
    }
    var o = E_(t, n, e, 0, null, !1, !1, "", eg);
    return (
      (e._reactRootContainer = o),
      (e[Hr] = o.current),
      oo(e.nodeType === 8 ? e.parentNode : e),
      Yn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof n == "function") {
    var u = n;
    n = function () {
      var s = El(l);
      u.call(s);
    };
  }
  var l = Mp(e, 0, !1, null, null, !1, !1, "", eg);
  return (
    (e._reactRootContainer = l),
    (e[Hr] = l.current),
    oo(e.nodeType === 8 ? e.parentNode : e),
    Yn(function () {
      Ps(t, l, r, n);
    }),
    l
  );
}
function Ms(e, t, r, n, i) {
  var a = r._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var u = i;
      i = function () {
        var l = El(o);
        u.call(l);
      };
    }
    Ps(t, o, e, i);
  } else o = sk(r, t, e, i, n);
  return El(o);
}
ox = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = ja(t.pendingLanes);
        r !== 0 &&
          (rp(t, r | 1),
          Pt(t, qe()),
          (fe & 6) === 0 && ((Ui = qe() + 500), bn()));
      }
      break;
    case 13:
      var n = _t();
      Yn(function () {
        return rr(e, 1, n);
      }),
        Ip(e, 1);
  }
};
np = function (e) {
  if (e.tag === 13) {
    var t = _t();
    rr(e, 134217728, t), Ip(e, 134217728);
  }
};
ux = function (e) {
  if (e.tag === 13) {
    var t = _t(),
      r = hn(e);
    rr(e, r, t), Ip(e, r);
  }
};
lx = function () {
  return we;
};
sx = function (e, t) {
  var r = we;
  try {
    return (we = e), t();
  } finally {
    we = r;
  }
};
Uf = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Rf(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = bs(n);
            if (!i) throw Error(L(90));
            B1(n), Rf(n, i);
          }
        }
      }
      break;
    case "textarea":
      W1(e, r);
      break;
    case "select":
      (t = r.value), t != null && Ai(e, !!r.multiple, t, !1);
  }
};
Y1 = Tp;
Q1 = Yn;
var ck = { usingClientEntryPoint: !1, Events: [Mo, gi, bs, K1, X1, Tp] },
  Sa = {
    findFiberByHostInstance: zn,
    bundleType: 0,
    version: "18.0.0-fc46dba67-20220329",
    rendererPackageName: "react-dom",
  },
  fk = {
    bundleType: Sa.bundleType,
    version: Sa.version,
    rendererPackageName: Sa.rendererPackageName,
    rendererConfig: Sa.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: qr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ex(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Sa.findFiberByHostInstance || lk,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.0.0-fc46dba67-20220329",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
  var pu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!pu.isDisabled && pu.supportsFiber)
    try {
      (ms = pu.inject(fk)), (_r = pu);
    } catch {}
}
Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ck;
Ut.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Rp(t)) throw Error(L(200));
  return uk(e, t, null, r);
};
Ut.createRoot = function (e, t) {
  if (!Rp(e)) throw Error(L(299));
  var r = !1,
    n = "",
    i = T_;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Mp(e, 1, !1, null, null, r, !1, n, i)),
    (e[Hr] = t.current),
    oo(e.nodeType === 8 ? e.parentNode : e),
    new Np(t)
  );
};
Ut.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = ex(t)), (e = e === null ? null : e.stateNode), e;
};
Ut.flushSync = function (e) {
  return Yn(e);
};
Ut.hydrate = function (e, t, r) {
  if (!Cs(t)) throw Error(L(200));
  return Ms(null, e, t, !0, r);
};
Ut.hydrateRoot = function (e, t, r) {
  if (!Rp(e)) throw Error(L(405));
  var n = (r != null && r.hydratedSources) || null,
    i = !1,
    a = "",
    o = T_;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (i = !0),
      r.identifierPrefix !== void 0 && (a = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (o = r.onRecoverableError)),
    (t = E_(t, null, e, 1, r != null ? r : null, i, !1, a, o)),
    (e[Hr] = t.current),
    oo(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (i = r._getVersion),
        (i = i(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, i])
          : t.mutableSourceEagerHydrationData.push(r, i);
  return new $s(t);
};
Ut.render = function (e, t, r) {
  if (!Cs(t)) throw Error(L(200));
  return Ms(null, e, t, !1, r);
};
Ut.unmountComponentAtNode = function (e) {
  if (!Cs(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (Yn(function () {
        Ms(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Hr] = null);
        });
      }),
      !0)
    : !1;
};
Ut.unstable_batchedUpdates = Tp;
Ut.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!Cs(r)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return Ms(e, t, r, !1, n);
};
Ut.version = "18.0.0-fc46dba67-20220329";
function P_() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(P_);
    } catch (e) {
      console.error(e);
    }
}
P_(), (Gd.exports = Ut);
var tg = Gd.exports;
(Tf.createRoot = tg.createRoot), (Tf.hydrateRoot = tg.hydrateRoot);
const $_ = async (e) => {
    const t = "https://opendata.resas-portal.go.jp",
      r = "7p5zn1cmMGISoqdFhb6rJC4zIiEWCqSqf5JjzRtu";
    return await (
      await fetch(`${t}${e}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "X-API-KEY": r },
      })
    ).json();
  },
  hk = async () => await $_("/api/v1/prefectures"),
  dk = async (e) => {
    const t = { prefCode: "" + e, cityCode: "-" },
      n = `/api/v1/population/composition/perYear?${new URLSearchParams(t)}`;
    return await $_(n);
  };
var C_ = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        if (!!a) {
          var o = typeof a;
          if (o === "string" || o === "number") n.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var u = r.apply(null, a);
              u && n.push(u);
            }
          } else if (o === "object")
            if (a.toString === Object.prototype.toString)
              for (var l in a) t.call(a, l) && a[l] && n.push(l);
            else n.push(a.toString());
        }
      }
      return n.join(" ");
    }
    e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
  })();
})(C_);
var Te = C_.exports;
function pk(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ht = pk;
function Lu(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Lu = function (r) {
          return typeof r;
        })
      : (Lu = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Lu(e)
  );
}
var vk = ["viewBox", "children"],
  yk = [
    "className",
    "color",
    "height",
    "id",
    "lang",
    "max",
    "media",
    "method",
    "min",
    "name",
    "style",
    "target",
    "type",
    "width",
    "role",
    "tabIndex",
    "accentHeight",
    "accumulate",
    "additive",
    "alignmentBaseline",
    "allowReorder",
    "alphabetic",
    "amplitude",
    "arabicForm",
    "ascent",
    "attributeName",
    "attributeType",
    "autoReverse",
    "azimuth",
    "baseFrequency",
    "baselineShift",
    "baseProfile",
    "bbox",
    "begin",
    "bias",
    "by",
    "calcMode",
    "capHeight",
    "clip",
    "clipPath",
    "clipPathUnits",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "colorProfile",
    "colorRendering",
    "contentScriptType",
    "contentStyleType",
    "cursor",
    "cx",
    "cy",
    "d",
    "decelerate",
    "descent",
    "diffuseConstant",
    "direction",
    "display",
    "divisor",
    "dominantBaseline",
    "dur",
    "dx",
    "dy",
    "edgeMode",
    "elevation",
    "enableBackground",
    "end",
    "exponent",
    "externalResourcesRequired",
    "fill",
    "fillOpacity",
    "fillRule",
    "filter",
    "filterRes",
    "filterUnits",
    "floodColor",
    "floodOpacity",
    "focusable",
    "fontFamily",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "format",
    "from",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyphName",
    "glyphOrientationHorizontal",
    "glyphOrientationVertical",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "hanging",
    "horizAdvX",
    "horizOriginX",
    "href",
    "ideographic",
    "imageRendering",
    "in2",
    "in",
    "intercept",
    "k1",
    "k2",
    "k3",
    "k4",
    "k",
    "kernelMatrix",
    "kernelUnitLength",
    "kerning",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "letterSpacing",
    "lightingColor",
    "limitingConeAngle",
    "local",
    "markerEnd",
    "markerHeight",
    "markerMid",
    "markerStart",
    "markerUnits",
    "markerWidth",
    "mask",
    "maskContentUnits",
    "maskUnits",
    "mathematical",
    "mode",
    "numOctaves",
    "offset",
    "opacity",
    "operator",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "overlinePosition",
    "overlineThickness",
    "paintOrder",
    "panose1",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointerEvents",
    "points",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "r",
    "radius",
    "refX",
    "refY",
    "renderingIntent",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "restart",
    "result",
    "rotate",
    "rx",
    "ry",
    "seed",
    "shapeRendering",
    "slope",
    "spacing",
    "specularConstant",
    "specularExponent",
    "speed",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stemh",
    "stemv",
    "stitchTiles",
    "stopColor",
    "stopOpacity",
    "strikethroughPosition",
    "strikethroughThickness",
    "string",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textAnchor",
    "textDecoration",
    "textLength",
    "textRendering",
    "to",
    "transform",
    "u1",
    "u2",
    "underlinePosition",
    "underlineThickness",
    "unicode",
    "unicodeBidi",
    "unicodeRange",
    "unitsPerEm",
    "vAlphabetic",
    "values",
    "vectorEffect",
    "version",
    "vertAdvY",
    "vertOriginX",
    "vertOriginY",
    "vHanging",
    "vIdeographic",
    "viewTarget",
    "visibility",
    "vMathematical",
    "widths",
    "wordSpacing",
    "writingMode",
    "x1",
    "x2",
    "x",
    "xChannelSelector",
    "xHeight",
    "xlinkActuate",
    "xlinkArcrole",
    "xlinkHref",
    "xlinkRole",
    "xlinkShow",
    "xlinkTitle",
    "xlinkType",
    "xmlBase",
    "xmlLang",
    "xmlns",
    "xmlnsXlink",
    "xmlSpace",
    "y1",
    "y2",
    "y",
    "yChannelSelector",
    "z",
    "zoomAndPan",
    "ref",
    "key",
    "angle",
  ],
  jp = [
    "dangerouslySetInnerHTML",
    "onCopy",
    "onCopyCapture",
    "onCut",
    "onCutCapture",
    "onPaste",
    "onPasteCapture",
    "onCompositionEnd",
    "onCompositionEndCapture",
    "onCompositionStart",
    "onCompositionStartCapture",
    "onCompositionUpdate",
    "onCompositionUpdateCapture",
    "onFocus",
    "onFocusCapture",
    "onBlur",
    "onBlurCapture",
    "onChange",
    "onChangeCapture",
    "onBeforeInput",
    "onBeforeInputCapture",
    "onInput",
    "onInputCapture",
    "onReset",
    "onResetCapture",
    "onSubmit",
    "onSubmitCapture",
    "onInvalid",
    "onInvalidCapture",
    "onLoad",
    "onLoadCapture",
    "onError",
    "onErrorCapture",
    "onKeyDown",
    "onKeyDownCapture",
    "onKeyPress",
    "onKeyPressCapture",
    "onKeyUp",
    "onKeyUpCapture",
    "onAbort",
    "onAbortCapture",
    "onCanPlay",
    "onCanPlayCapture",
    "onCanPlayThrough",
    "onCanPlayThroughCapture",
    "onDurationChange",
    "onDurationChangeCapture",
    "onEmptied",
    "onEmptiedCapture",
    "onEncrypted",
    "onEncryptedCapture",
    "onEnded",
    "onEndedCapture",
    "onLoadedData",
    "onLoadedDataCapture",
    "onLoadedMetadata",
    "onLoadedMetadataCapture",
    "onLoadStart",
    "onLoadStartCapture",
    "onPause",
    "onPauseCapture",
    "onPlay",
    "onPlayCapture",
    "onPlaying",
    "onPlayingCapture",
    "onProgress",
    "onProgressCapture",
    "onRateChange",
    "onRateChangeCapture",
    "onSeeked",
    "onSeekedCapture",
    "onSeeking",
    "onSeekingCapture",
    "onStalled",
    "onStalledCapture",
    "onSuspend",
    "onSuspendCapture",
    "onTimeUpdate",
    "onTimeUpdateCapture",
    "onVolumeChange",
    "onVolumeChangeCapture",
    "onWaiting",
    "onWaitingCapture",
    "onAuxClick",
    "onAuxClickCapture",
    "onClick",
    "onClickCapture",
    "onContextMenu",
    "onContextMenuCapture",
    "onDoubleClick",
    "onDoubleClickCapture",
    "onDrag",
    "onDragCapture",
    "onDragEnd",
    "onDragEndCapture",
    "onDragEnter",
    "onDragEnterCapture",
    "onDragExit",
    "onDragExitCapture",
    "onDragLeave",
    "onDragLeaveCapture",
    "onDragOver",
    "onDragOverCapture",
    "onDragStart",
    "onDragStartCapture",
    "onDrop",
    "onDropCapture",
    "onMouseDown",
    "onMouseDownCapture",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseMoveCapture",
    "onMouseOut",
    "onMouseOutCapture",
    "onMouseOver",
    "onMouseOverCapture",
    "onMouseUp",
    "onMouseUpCapture",
    "onSelect",
    "onSelectCapture",
    "onTouchCancel",
    "onTouchCancelCapture",
    "onTouchEnd",
    "onTouchEndCapture",
    "onTouchMove",
    "onTouchMoveCapture",
    "onTouchStart",
    "onTouchStartCapture",
    "onPointerDown",
    "onPointerDownCapture",
    "onPointerMove",
    "onPointerMoveCapture",
    "onPointerUp",
    "onPointerUpCapture",
    "onPointerCancel",
    "onPointerCancelCapture",
    "onPointerEnter",
    "onPointerEnterCapture",
    "onPointerLeave",
    "onPointerLeaveCapture",
    "onPointerOver",
    "onPointerOverCapture",
    "onPointerOut",
    "onPointerOutCapture",
    "onGotPointerCapture",
    "onGotPointerCaptureCapture",
    "onLostPointerCapture",
    "onLostPointerCaptureCapture",
    "onScroll",
    "onScrollCapture",
    "onWheel",
    "onWheelCapture",
    "onAnimationStart",
    "onAnimationStartCapture",
    "onAnimationEnd",
    "onAnimationEndCapture",
    "onAnimationIteration",
    "onAnimationIterationCapture",
    "onTransitionEnd",
    "onTransitionEndCapture",
  ],
  me = function (t, r, n) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var i = t;
    if ((V.exports.isValidElement(t) && (i = t.props), !Ht(i))) return null;
    var a = {};
    return (
      Object.keys(i).forEach(function (o) {
        (yk.includes(o) || (n && vk.includes(o)) || (r && jp.includes(o))) &&
          (a[o] = i[o]);
      }),
      a
    );
  },
  Tl = function (t, r) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var n = t;
    if ((V.exports.isValidElement(t) && (n = t.props), !Ht(n))) return null;
    var i = {};
    return (
      Object.keys(n).forEach(function (a) {
        jp.includes(a) &&
          (i[a] =
            r ||
            function (o) {
              return n[a](n, o);
            });
      }),
      i
    );
  },
  gk = function (t, r, n) {
    return function (i) {
      return t(r, n, i), null;
    };
  },
  M_ = function (t, r, n) {
    if (!Ht(t) || Lu(t) !== "object") return null;
    var i = null;
    return (
      Object.keys(t).forEach(function (a) {
        var o = t[a];
        jp.includes(a) &&
          typeof o == "function" &&
          (i || (i = {}), (i[a] = gk(o, r, n)));
      }),
      i
    );
  };
function xh() {
  return (
    (xh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    xh.apply(this, arguments)
  );
}
function mk(e, t) {
  if (e == null) return {};
  var r = xk(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function xk(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function _h(e) {
  var t = e.children,
    r = e.width,
    n = e.height,
    i = e.viewBox,
    a = e.className,
    o = e.style,
    u = mk(e, ["children", "width", "height", "viewBox", "className", "style"]),
    l = i || { width: r, height: n, x: 0, y: 0 },
    s = Te("recharts-surface", a);
  return oe.createElement(
    "svg",
    xh({}, me(u, !0, !0), {
      className: s,
      width: r,
      height: n,
      style: o,
      viewBox: ""
        .concat(l.x, " ")
        .concat(l.y, " ")
        .concat(l.width, " ")
        .concat(l.height),
      version: "1.1",
    }),
    t
  );
}
function wh() {
  return (
    (wh =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    wh.apply(this, arguments)
  );
}
function _k(e, t) {
  if (e == null) return {};
  var r = wk(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function wk(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function $t(e) {
  var t = e.children,
    r = e.className,
    n = _k(e, ["children", "className"]),
    i = Te("recharts-layer", r);
  return oe.createElement("g", wh({ className: i }, me(n, !0)), t);
}
var bk = typeof nn == "object" && nn && nn.Object === Object && nn,
  I_ = bk,
  Sk = I_,
  Ok = typeof self == "object" && self && self.Object === Object && self,
  Ak = Sk || Ok || Function("return this")(),
  Pr = Ak,
  kk = Pr,
  Ek = kk.Symbol,
  No = Ek,
  rg = No,
  N_ = Object.prototype,
  Tk = N_.hasOwnProperty,
  Pk = N_.toString,
  Oa = rg ? rg.toStringTag : void 0;
function $k(e) {
  var t = Tk.call(e, Oa),
    r = e[Oa];
  try {
    e[Oa] = void 0;
    var n = !0;
  } catch {}
  var i = Pk.call(e);
  return n && (t ? (e[Oa] = r) : delete e[Oa]), i;
}
var Ck = $k,
  Mk = Object.prototype,
  Ik = Mk.toString;
function Nk(e) {
  return Ik.call(e);
}
var Rk = Nk,
  ng = No,
  jk = Ck,
  Dk = Rk,
  Lk = "[object Null]",
  Fk = "[object Undefined]",
  ig = ng ? ng.toStringTag : void 0;
function zk(e) {
  return e == null
    ? e === void 0
      ? Fk
      : Lk
    : ig && ig in Object(e)
    ? jk(e)
    : Dk(e);
}
var Sn = zk,
  Bk = Sn,
  Uk = Ht,
  Wk = "[object AsyncFunction]",
  Hk = "[object Function]",
  Vk = "[object GeneratorFunction]",
  qk = "[object Proxy]";
function Gk(e) {
  if (!Uk(e)) return !1;
  var t = Bk(e);
  return t == Hk || t == Vk || t == Wk || t == qk;
}
var te = Gk;
function Kk() {
  (this.__data__ = []), (this.size = 0);
}
var Xk = Kk;
function Yk(e, t) {
  return e === t || (e !== e && t !== t);
}
var Dp = Yk,
  Qk = Dp;
function Jk(e, t) {
  for (var r = e.length; r--; ) if (Qk(e[r][0], t)) return r;
  return -1;
}
var Is = Jk,
  Zk = Is,
  eE = Array.prototype,
  tE = eE.splice;
function rE(e) {
  var t = this.__data__,
    r = Zk(t, e);
  if (r < 0) return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : tE.call(t, r, 1), --this.size, !0;
}
var nE = rE,
  iE = Is;
function aE(e) {
  var t = this.__data__,
    r = iE(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var oE = aE,
  uE = Is;
function lE(e) {
  return uE(this.__data__, e) > -1;
}
var sE = lE,
  cE = Is;
function fE(e, t) {
  var r = this.__data__,
    n = cE(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
}
var hE = fE,
  dE = Xk,
  pE = nE,
  vE = oE,
  yE = sE,
  gE = hE;
function ta(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ta.prototype.clear = dE;
ta.prototype.delete = pE;
ta.prototype.get = vE;
ta.prototype.has = yE;
ta.prototype.set = gE;
var Ns = ta,
  mE = Ns;
function xE() {
  (this.__data__ = new mE()), (this.size = 0);
}
var _E = xE;
function wE(e) {
  var t = this.__data__,
    r = t.delete(e);
  return (this.size = t.size), r;
}
var bE = wE;
function SE(e) {
  return this.__data__.get(e);
}
var OE = SE;
function AE(e) {
  return this.__data__.has(e);
}
var kE = AE,
  EE = Pr,
  TE = EE["__core-js_shared__"],
  PE = TE,
  Gc = PE,
  ag = (function () {
    var e = /[^.]+$/.exec((Gc && Gc.keys && Gc.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function $E(e) {
  return !!ag && ag in e;
}
var CE = $E,
  ME = Function.prototype,
  IE = ME.toString;
function NE(e) {
  if (e != null) {
    try {
      return IE.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var R_ = NE,
  RE = te,
  jE = CE,
  DE = Ht,
  LE = R_,
  FE = /[\\^$.*+?()[\]{}|]/g,
  zE = /^\[object .+?Constructor\]$/,
  BE = Function.prototype,
  UE = Object.prototype,
  WE = BE.toString,
  HE = UE.hasOwnProperty,
  VE = RegExp(
    "^" +
      WE.call(HE)
        .replace(FE, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function qE(e) {
  if (!DE(e) || jE(e)) return !1;
  var t = RE(e) ? VE : zE;
  return t.test(LE(e));
}
var GE = qE;
function KE(e, t) {
  return e == null ? void 0 : e[t];
}
var XE = KE,
  YE = GE,
  QE = XE;
function JE(e, t) {
  var r = QE(e, t);
  return YE(r) ? r : void 0;
}
var ni = JE,
  ZE = ni,
  eT = Pr,
  tT = ZE(eT, "Map"),
  Lp = tT,
  rT = ni,
  nT = rT(Object, "create"),
  Rs = nT,
  og = Rs;
function iT() {
  (this.__data__ = og ? og(null) : {}), (this.size = 0);
}
var aT = iT;
function oT(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var uT = oT,
  lT = Rs,
  sT = "__lodash_hash_undefined__",
  cT = Object.prototype,
  fT = cT.hasOwnProperty;
function hT(e) {
  var t = this.__data__;
  if (lT) {
    var r = t[e];
    return r === sT ? void 0 : r;
  }
  return fT.call(t, e) ? t[e] : void 0;
}
var dT = hT,
  pT = Rs,
  vT = Object.prototype,
  yT = vT.hasOwnProperty;
function gT(e) {
  var t = this.__data__;
  return pT ? t[e] !== void 0 : yT.call(t, e);
}
var mT = gT,
  xT = Rs,
  _T = "__lodash_hash_undefined__";
function wT(e, t) {
  var r = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (r[e] = xT && t === void 0 ? _T : t),
    this
  );
}
var bT = wT,
  ST = aT,
  OT = uT,
  AT = dT,
  kT = mT,
  ET = bT;
function ra(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ra.prototype.clear = ST;
ra.prototype.delete = OT;
ra.prototype.get = AT;
ra.prototype.has = kT;
ra.prototype.set = ET;
var TT = ra,
  ug = TT,
  PT = Ns,
  $T = Lp;
function CT() {
  (this.size = 0),
    (this.__data__ = {
      hash: new ug(),
      map: new ($T || PT)(),
      string: new ug(),
    });
}
var MT = CT;
function IT(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
var NT = IT,
  RT = NT;
function jT(e, t) {
  var r = e.__data__;
  return RT(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var js = jT,
  DT = js;
function LT(e) {
  var t = DT(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var FT = LT,
  zT = js;
function BT(e) {
  return zT(this, e).get(e);
}
var UT = BT,
  WT = js;
function HT(e) {
  return WT(this, e).has(e);
}
var VT = HT,
  qT = js;
function GT(e, t) {
  var r = qT(this, e),
    n = r.size;
  return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
}
var KT = GT,
  XT = MT,
  YT = FT,
  QT = UT,
  JT = VT,
  ZT = KT;
function na(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
na.prototype.clear = XT;
na.prototype.delete = YT;
na.prototype.get = QT;
na.prototype.has = JT;
na.prototype.set = ZT;
var Fp = na,
  eP = Ns,
  tP = Lp,
  rP = Fp,
  nP = 200;
function iP(e, t) {
  var r = this.__data__;
  if (r instanceof eP) {
    var n = r.__data__;
    if (!tP || n.length < nP - 1)
      return n.push([e, t]), (this.size = ++r.size), this;
    r = this.__data__ = new rP(n);
  }
  return r.set(e, t), (this.size = r.size), this;
}
var aP = iP,
  oP = Ns,
  uP = _E,
  lP = bE,
  sP = OE,
  cP = kE,
  fP = aP;
function ia(e) {
  var t = (this.__data__ = new oP(e));
  this.size = t.size;
}
ia.prototype.clear = uP;
ia.prototype.delete = lP;
ia.prototype.get = sP;
ia.prototype.has = cP;
ia.prototype.set = fP;
var j_ = ia,
  hP = "__lodash_hash_undefined__";
function dP(e) {
  return this.__data__.set(e, hP), this;
}
var pP = dP;
function vP(e) {
  return this.__data__.has(e);
}
var yP = vP,
  gP = Fp,
  mP = pP,
  xP = yP;
function Pl(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.__data__ = new gP(); ++t < r; ) this.add(e[t]);
}
Pl.prototype.add = Pl.prototype.push = mP;
Pl.prototype.has = xP;
var D_ = Pl;
function _P(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e)) return !0;
  return !1;
}
var L_ = _P;
function wP(e, t) {
  return e.has(t);
}
var F_ = wP,
  bP = D_,
  SP = L_,
  OP = F_,
  AP = 1,
  kP = 2;
function EP(e, t, r, n, i, a) {
  var o = r & AP,
    u = e.length,
    l = t.length;
  if (u != l && !(o && l > u)) return !1;
  var s = a.get(e),
    c = a.get(t);
  if (s && c) return s == t && c == e;
  var f = -1,
    h = !0,
    x = r & kP ? new bP() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < u; ) {
    var v = e[f],
      d = t[f];
    if (n) var _ = o ? n(d, v, f, t, e, a) : n(v, d, f, e, t, a);
    if (_ !== void 0) {
      if (_) continue;
      h = !1;
      break;
    }
    if (x) {
      if (
        !SP(t, function (p, m) {
          if (!OP(x, m) && (v === p || i(v, p, r, n, a))) return x.push(m);
        })
      ) {
        h = !1;
        break;
      }
    } else if (!(v === d || i(v, d, r, n, a))) {
      h = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), h;
}
var z_ = EP,
  TP = Pr,
  PP = TP.Uint8Array,
  $P = PP;
function CP(e) {
  var t = -1,
    r = Array(e.size);
  return (
    e.forEach(function (n, i) {
      r[++t] = [i, n];
    }),
    r
  );
}
var MP = CP;
function IP(e) {
  var t = -1,
    r = Array(e.size);
  return (
    e.forEach(function (n) {
      r[++t] = n;
    }),
    r
  );
}
var zp = IP,
  lg = No,
  sg = $P,
  NP = Dp,
  RP = z_,
  jP = MP,
  DP = zp,
  LP = 1,
  FP = 2,
  zP = "[object Boolean]",
  BP = "[object Date]",
  UP = "[object Error]",
  WP = "[object Map]",
  HP = "[object Number]",
  VP = "[object RegExp]",
  qP = "[object Set]",
  GP = "[object String]",
  KP = "[object Symbol]",
  XP = "[object ArrayBuffer]",
  YP = "[object DataView]",
  cg = lg ? lg.prototype : void 0,
  Kc = cg ? cg.valueOf : void 0;
function QP(e, t, r, n, i, a, o) {
  switch (r) {
    case YP:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      (e = e.buffer), (t = t.buffer);
    case XP:
      return !(e.byteLength != t.byteLength || !a(new sg(e), new sg(t)));
    case zP:
    case BP:
    case HP:
      return NP(+e, +t);
    case UP:
      return e.name == t.name && e.message == t.message;
    case VP:
    case GP:
      return e == t + "";
    case WP:
      var u = jP;
    case qP:
      var l = n & LP;
      if ((u || (u = DP), e.size != t.size && !l)) return !1;
      var s = o.get(e);
      if (s) return s == t;
      (n |= FP), o.set(e, t);
      var c = RP(u(e), u(t), n, i, a, o);
      return o.delete(e), c;
    case KP:
      if (Kc) return Kc.call(e) == Kc.call(t);
  }
  return !1;
}
var JP = QP;
function ZP(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
  return e;
}
var B_ = ZP,
  e2 = Array.isArray,
  xe = e2,
  t2 = B_,
  r2 = xe;
function n2(e, t, r) {
  var n = t(e);
  return r2(e) ? n : t2(n, r(e));
}
var i2 = n2;
function a2(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
var o2 = a2;
function u2() {
  return [];
}
var l2 = u2,
  s2 = o2,
  c2 = l2,
  f2 = Object.prototype,
  h2 = f2.propertyIsEnumerable,
  fg = Object.getOwnPropertySymbols,
  d2 = fg
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            s2(fg(e), function (t) {
              return h2.call(e, t);
            }));
      }
    : c2,
  p2 = d2;
function v2(e, t) {
  for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
  return n;
}
var y2 = v2;
function g2(e) {
  return e != null && typeof e == "object";
}
var On = g2,
  m2 = Sn,
  x2 = On,
  _2 = "[object Arguments]";
function w2(e) {
  return x2(e) && m2(e) == _2;
}
var b2 = w2,
  hg = b2,
  S2 = On,
  U_ = Object.prototype,
  O2 = U_.hasOwnProperty,
  A2 = U_.propertyIsEnumerable,
  k2 = hg(
    (function () {
      return arguments;
    })()
  )
    ? hg
    : function (e) {
        return S2(e) && O2.call(e, "callee") && !A2.call(e, "callee");
      },
  Bp = k2,
  $l = { exports: {} };
function E2() {
  return !1;
}
var T2 = E2;
(function (e, t) {
  var r = Pr,
    n = T2,
    i = t && !t.nodeType && t,
    a = i && !0 && e && !e.nodeType && e,
    o = a && a.exports === i,
    u = o ? r.Buffer : void 0,
    l = u ? u.isBuffer : void 0,
    s = l || n;
  e.exports = s;
})($l, $l.exports);
var P2 = 9007199254740991,
  $2 = /^(?:0|[1-9]\d*)$/;
function C2(e, t) {
  var r = typeof e;
  return (
    (t = t == null ? P2 : t),
    !!t &&
      (r == "number" || (r != "symbol" && $2.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var Up = C2,
  M2 = 9007199254740991;
function I2(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= M2;
}
var Wp = I2,
  N2 = Sn,
  R2 = Wp,
  j2 = On,
  D2 = "[object Arguments]",
  L2 = "[object Array]",
  F2 = "[object Boolean]",
  z2 = "[object Date]",
  B2 = "[object Error]",
  U2 = "[object Function]",
  W2 = "[object Map]",
  H2 = "[object Number]",
  V2 = "[object Object]",
  q2 = "[object RegExp]",
  G2 = "[object Set]",
  K2 = "[object String]",
  X2 = "[object WeakMap]",
  Y2 = "[object ArrayBuffer]",
  Q2 = "[object DataView]",
  J2 = "[object Float32Array]",
  Z2 = "[object Float64Array]",
  e$ = "[object Int8Array]",
  t$ = "[object Int16Array]",
  r$ = "[object Int32Array]",
  n$ = "[object Uint8Array]",
  i$ = "[object Uint8ClampedArray]",
  a$ = "[object Uint16Array]",
  o$ = "[object Uint32Array]",
  Ie = {};
Ie[J2] =
  Ie[Z2] =
  Ie[e$] =
  Ie[t$] =
  Ie[r$] =
  Ie[n$] =
  Ie[i$] =
  Ie[a$] =
  Ie[o$] =
    !0;
Ie[D2] =
  Ie[L2] =
  Ie[Y2] =
  Ie[F2] =
  Ie[Q2] =
  Ie[z2] =
  Ie[B2] =
  Ie[U2] =
  Ie[W2] =
  Ie[H2] =
  Ie[V2] =
  Ie[q2] =
  Ie[G2] =
  Ie[K2] =
  Ie[X2] =
    !1;
function u$(e) {
  return j2(e) && R2(e.length) && !!Ie[N2(e)];
}
var l$ = u$;
function s$(e) {
  return function (t) {
    return e(t);
  };
}
var W_ = s$,
  bh = { exports: {} };
(function (e, t) {
  var r = I_,
    n = t && !t.nodeType && t,
    i = n && !0 && e && !e.nodeType && e,
    a = i && i.exports === n,
    o = a && r.process,
    u = (function () {
      try {
        var l = i && i.require && i.require("util").types;
        return l || (o && o.binding && o.binding("util"));
      } catch {}
    })();
  e.exports = u;
})(bh, bh.exports);
var c$ = l$,
  f$ = W_,
  dg = bh.exports,
  pg = dg && dg.isTypedArray,
  h$ = pg ? f$(pg) : c$,
  H_ = h$,
  d$ = y2,
  p$ = Bp,
  v$ = xe,
  y$ = $l.exports,
  g$ = Up,
  m$ = H_,
  x$ = Object.prototype,
  _$ = x$.hasOwnProperty;
function w$(e, t) {
  var r = v$(e),
    n = !r && p$(e),
    i = !r && !n && y$(e),
    a = !r && !n && !i && m$(e),
    o = r || n || i || a,
    u = o ? d$(e.length, String) : [],
    l = u.length;
  for (var s in e)
    (t || _$.call(e, s)) &&
      !(
        o &&
        (s == "length" ||
          (i && (s == "offset" || s == "parent")) ||
          (a && (s == "buffer" || s == "byteLength" || s == "byteOffset")) ||
          g$(s, l))
      ) &&
      u.push(s);
  return u;
}
var b$ = w$,
  S$ = Object.prototype;
function O$(e) {
  var t = e && e.constructor,
    r = (typeof t == "function" && t.prototype) || S$;
  return e === r;
}
var A$ = O$;
function k$(e, t) {
  return function (r) {
    return e(t(r));
  };
}
var E$ = k$,
  T$ = E$,
  P$ = T$(Object.keys, Object),
  $$ = P$,
  C$ = A$,
  M$ = $$,
  I$ = Object.prototype,
  N$ = I$.hasOwnProperty;
function R$(e) {
  if (!C$(e)) return M$(e);
  var t = [];
  for (var r in Object(e)) N$.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var j$ = R$,
  D$ = te,
  L$ = Wp;
function F$(e) {
  return e != null && L$(e.length) && !D$(e);
}
var Ro = F$,
  z$ = b$,
  B$ = j$,
  U$ = Ro;
function W$(e) {
  return U$(e) ? z$(e) : B$(e);
}
var Ds = W$,
  H$ = i2,
  V$ = p2,
  q$ = Ds;
function G$(e) {
  return H$(e, q$, V$);
}
var K$ = G$,
  vg = K$,
  X$ = 1,
  Y$ = Object.prototype,
  Q$ = Y$.hasOwnProperty;
function J$(e, t, r, n, i, a) {
  var o = r & X$,
    u = vg(e),
    l = u.length,
    s = vg(t),
    c = s.length;
  if (l != c && !o) return !1;
  for (var f = l; f--; ) {
    var h = u[f];
    if (!(o ? h in t : Q$.call(t, h))) return !1;
  }
  var x = a.get(e),
    v = a.get(t);
  if (x && v) return x == t && v == e;
  var d = !0;
  a.set(e, t), a.set(t, e);
  for (var _ = o; ++f < l; ) {
    h = u[f];
    var p = e[h],
      m = t[h];
    if (n) var g = o ? n(m, p, h, t, e, a) : n(p, m, h, e, t, a);
    if (!(g === void 0 ? p === m || i(p, m, r, n, a) : g)) {
      d = !1;
      break;
    }
    _ || (_ = h == "constructor");
  }
  if (d && !_) {
    var y = e.constructor,
      w = t.constructor;
    y != w &&
      "constructor" in e &&
      "constructor" in t &&
      !(
        typeof y == "function" &&
        y instanceof y &&
        typeof w == "function" &&
        w instanceof w
      ) &&
      (d = !1);
  }
  return a.delete(e), a.delete(t), d;
}
var Z$ = J$,
  eC = ni,
  tC = Pr,
  rC = eC(tC, "DataView"),
  nC = rC,
  iC = ni,
  aC = Pr,
  oC = iC(aC, "Promise"),
  uC = oC,
  lC = ni,
  sC = Pr,
  cC = lC(sC, "Set"),
  V_ = cC,
  fC = ni,
  hC = Pr,
  dC = fC(hC, "WeakMap"),
  pC = dC,
  Sh = nC,
  Oh = Lp,
  Ah = uC,
  kh = V_,
  Eh = pC,
  q_ = Sn,
  aa = R_,
  yg = "[object Map]",
  vC = "[object Object]",
  gg = "[object Promise]",
  mg = "[object Set]",
  xg = "[object WeakMap]",
  _g = "[object DataView]",
  yC = aa(Sh),
  gC = aa(Oh),
  mC = aa(Ah),
  xC = aa(kh),
  _C = aa(Eh),
  Rn = q_;
((Sh && Rn(new Sh(new ArrayBuffer(1))) != _g) ||
  (Oh && Rn(new Oh()) != yg) ||
  (Ah && Rn(Ah.resolve()) != gg) ||
  (kh && Rn(new kh()) != mg) ||
  (Eh && Rn(new Eh()) != xg)) &&
  (Rn = function (e) {
    var t = q_(e),
      r = t == vC ? e.constructor : void 0,
      n = r ? aa(r) : "";
    if (n)
      switch (n) {
        case yC:
          return _g;
        case gC:
          return yg;
        case mC:
          return gg;
        case xC:
          return mg;
        case _C:
          return xg;
      }
    return t;
  });
var wC = Rn,
  Xc = j_,
  bC = z_,
  SC = JP,
  OC = Z$,
  wg = wC,
  bg = xe,
  Sg = $l.exports,
  AC = H_,
  kC = 1,
  Og = "[object Arguments]",
  Ag = "[object Array]",
  vu = "[object Object]",
  EC = Object.prototype,
  kg = EC.hasOwnProperty;
function TC(e, t, r, n, i, a) {
  var o = bg(e),
    u = bg(t),
    l = o ? Ag : wg(e),
    s = u ? Ag : wg(t);
  (l = l == Og ? vu : l), (s = s == Og ? vu : s);
  var c = l == vu,
    f = s == vu,
    h = l == s;
  if (h && Sg(e)) {
    if (!Sg(t)) return !1;
    (o = !0), (c = !1);
  }
  if (h && !c)
    return (
      a || (a = new Xc()),
      o || AC(e) ? bC(e, t, r, n, i, a) : SC(e, t, l, r, n, i, a)
    );
  if (!(r & kC)) {
    var x = c && kg.call(e, "__wrapped__"),
      v = f && kg.call(t, "__wrapped__");
    if (x || v) {
      var d = x ? e.value() : e,
        _ = v ? t.value() : t;
      return a || (a = new Xc()), i(d, _, r, n, a);
    }
  }
  return h ? (a || (a = new Xc()), OC(e, t, r, n, i, a)) : !1;
}
var PC = TC,
  $C = PC,
  Eg = On;
function G_(e, t, r, n, i) {
  return e === t
    ? !0
    : e == null || t == null || (!Eg(e) && !Eg(t))
    ? e !== e && t !== t
    : $C(e, t, r, n, G_, i);
}
var Hp = G_,
  CC = j_,
  MC = Hp,
  IC = 1,
  NC = 2;
function RC(e, t, r, n) {
  var i = r.length,
    a = i,
    o = !n;
  if (e == null) return !a;
  for (e = Object(e); i--; ) {
    var u = r[i];
    if (o && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
  }
  for (; ++i < a; ) {
    u = r[i];
    var l = u[0],
      s = e[l],
      c = u[1];
    if (o && u[2]) {
      if (s === void 0 && !(l in e)) return !1;
    } else {
      var f = new CC();
      if (n) var h = n(s, c, l, e, t, f);
      if (!(h === void 0 ? MC(c, s, IC | NC, n, f) : h)) return !1;
    }
  }
  return !0;
}
var jC = RC,
  DC = Ht;
function LC(e) {
  return e === e && !DC(e);
}
var K_ = LC,
  FC = K_,
  zC = Ds;
function BC(e) {
  for (var t = zC(e), r = t.length; r--; ) {
    var n = t[r],
      i = e[n];
    t[r] = [n, i, FC(i)];
  }
  return t;
}
var UC = BC;
function WC(e, t) {
  return function (r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var X_ = WC,
  HC = jC,
  VC = UC,
  qC = X_;
function GC(e) {
  var t = VC(e);
  return t.length == 1 && t[0][2]
    ? qC(t[0][0], t[0][1])
    : function (r) {
        return r === e || HC(r, e, t);
      };
}
var KC = GC,
  XC = Sn,
  YC = On,
  QC = "[object Symbol]";
function JC(e) {
  return typeof e == "symbol" || (YC(e) && XC(e) == QC);
}
var oa = JC,
  ZC = xe,
  eM = oa,
  tM = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  rM = /^\w*$/;
function nM(e, t) {
  if (ZC(e)) return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || eM(e)
    ? !0
    : rM.test(e) || !tM.test(e) || (t != null && e in Object(t));
}
var Vp = nM,
  Y_ = Fp,
  iM = "Expected a function";
function qp(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(iM);
  var r = function () {
    var n = arguments,
      i = t ? t.apply(this, n) : n[0],
      a = r.cache;
    if (a.has(i)) return a.get(i);
    var o = e.apply(this, n);
    return (r.cache = a.set(i, o) || a), o;
  };
  return (r.cache = new (qp.Cache || Y_)()), r;
}
qp.Cache = Y_;
var aM = qp,
  oM = aM,
  uM = 500;
function lM(e) {
  var t = oM(e, function (n) {
      return r.size === uM && r.clear(), n;
    }),
    r = t.cache;
  return t;
}
var sM = lM,
  cM = sM,
  fM =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  hM = /\\(\\)?/g,
  dM = cM(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(fM, function (r, n, i, a) {
        t.push(i ? a.replace(hM, "$1") : n || r);
      }),
      t
    );
  }),
  pM = dM;
function vM(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Gp = vM,
  Tg = No,
  yM = Gp,
  gM = xe,
  mM = oa,
  xM = 1 / 0,
  Pg = Tg ? Tg.prototype : void 0,
  $g = Pg ? Pg.toString : void 0;
function Q_(e) {
  if (typeof e == "string") return e;
  if (gM(e)) return yM(e, Q_) + "";
  if (mM(e)) return $g ? $g.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -xM ? "-0" : t;
}
var _M = Q_,
  wM = _M;
function bM(e) {
  return e == null ? "" : wM(e);
}
var J_ = bM,
  SM = xe,
  OM = Vp,
  AM = pM,
  kM = J_;
function EM(e, t) {
  return SM(e) ? e : OM(e, t) ? [e] : AM(kM(e));
}
var Z_ = EM,
  TM = oa,
  PM = 1 / 0;
function $M(e) {
  if (typeof e == "string" || TM(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -PM ? "-0" : t;
}
var Ls = $M,
  CM = Z_,
  MM = Ls;
function IM(e, t) {
  t = CM(t, e);
  for (var r = 0, n = t.length; e != null && r < n; ) e = e[MM(t[r++])];
  return r && r == n ? e : void 0;
}
var Kp = IM,
  NM = Kp;
function RM(e, t, r) {
  var n = e == null ? void 0 : NM(e, t);
  return n === void 0 ? r : n;
}
var zt = RM;
function jM(e, t) {
  return e != null && t in Object(e);
}
var DM = jM,
  LM = Z_,
  FM = Bp,
  zM = xe,
  BM = Up,
  UM = Wp,
  WM = Ls;
function HM(e, t, r) {
  t = LM(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = WM(t[n]);
    if (!(a = e != null && r(e, o))) break;
    e = e[o];
  }
  return a || ++n != i
    ? a
    : ((i = e == null ? 0 : e.length),
      !!i && UM(i) && BM(o, i) && (zM(e) || FM(e)));
}
var VM = HM,
  qM = DM,
  GM = VM;
function KM(e, t) {
  return e != null && GM(e, t, qM);
}
var XM = KM,
  YM = Hp,
  QM = zt,
  JM = XM,
  ZM = Vp,
  eI = K_,
  tI = X_,
  rI = Ls,
  nI = 1,
  iI = 2;
function aI(e, t) {
  return ZM(e) && eI(t)
    ? tI(rI(e), t)
    : function (r) {
        var n = QM(r, e);
        return n === void 0 && n === t ? JM(r, e) : YM(t, n, nI | iI);
      };
}
var oI = aI;
function uI(e) {
  return e;
}
var ua = uI;
function lI(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
var sI = lI,
  cI = Kp;
function fI(e) {
  return function (t) {
    return cI(t, e);
  };
}
var hI = fI,
  dI = sI,
  pI = hI,
  vI = Vp,
  yI = Ls;
function gI(e) {
  return vI(e) ? dI(yI(e)) : pI(e);
}
var mI = gI,
  xI = KC,
  _I = oI,
  wI = ua,
  bI = xe,
  SI = mI;
function OI(e) {
  return typeof e == "function"
    ? e
    : e == null
    ? wI
    : typeof e == "object"
    ? bI(e)
      ? _I(e[0], e[1])
      : xI(e)
    : SI(e);
}
var An = OI;
function AI(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e)) return a;
  return -1;
}
var ew = AI;
function kI(e) {
  return e !== e;
}
var EI = kI;
function TI(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; ) if (e[n] === t) return n;
  return -1;
}
var PI = TI,
  $I = ew,
  CI = EI,
  MI = PI;
function II(e, t, r) {
  return t === t ? MI(e, t, r) : $I(e, CI, r);
}
var NI = II,
  RI = NI;
function jI(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && RI(e, t, 0) > -1;
}
var DI = jI;
function LI(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n])) return !0;
  return !1;
}
var FI = LI;
function zI() {}
var BI = zI,
  Yc = V_,
  UI = BI,
  WI = zp,
  HI = 1 / 0,
  VI =
    Yc && 1 / WI(new Yc([, -0]))[1] == HI
      ? function (e) {
          return new Yc(e);
        }
      : UI,
  qI = VI,
  GI = D_,
  KI = DI,
  XI = FI,
  YI = F_,
  QI = qI,
  JI = zp,
  ZI = 200;
function eN(e, t, r) {
  var n = -1,
    i = KI,
    a = e.length,
    o = !0,
    u = [],
    l = u;
  if (r) (o = !1), (i = XI);
  else if (a >= ZI) {
    var s = t ? null : QI(e);
    if (s) return JI(s);
    (o = !1), (i = YI), (l = new GI());
  } else l = t ? [] : u;
  e: for (; ++n < a; ) {
    var c = e[n],
      f = t ? t(c) : c;
    if (((c = r || c !== 0 ? c : 0), o && f === f)) {
      for (var h = l.length; h--; ) if (l[h] === f) continue e;
      t && l.push(f), u.push(c);
    } else i(l, f, r) || (l !== u && l.push(f), u.push(c));
  }
  return u;
}
var tN = eN,
  rN = An,
  nN = tN;
function iN(e, t) {
  return e && e.length ? nN(e, rN(t)) : [];
}
var Cl = iN;
function aN(e, t, r) {
  var n = -1,
    i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t),
    (r = r > i ? i : r),
    r < 0 && (r += i),
    (i = t > r ? 0 : (r - t) >>> 0),
    (t >>>= 0);
  for (var a = Array(i); ++n < i; ) a[n] = e[n + t];
  return a;
}
var oN = aN,
  uN = oN;
function lN(e, t, r) {
  var n = e.length;
  return (r = r === void 0 ? n : r), !t && r >= n ? e : uN(e, t, r);
}
var sN = lN,
  cN = "\\ud800-\\udfff",
  fN = "\\u0300-\\u036f",
  hN = "\\ufe20-\\ufe2f",
  dN = "\\u20d0-\\u20ff",
  pN = fN + hN + dN,
  vN = "\\ufe0e\\ufe0f",
  yN = "\\u200d",
  gN = RegExp("[" + yN + cN + pN + vN + "]");
function mN(e) {
  return gN.test(e);
}
var tw = mN;
function xN(e) {
  return e.split("");
}
var _N = xN,
  rw = "\\ud800-\\udfff",
  wN = "\\u0300-\\u036f",
  bN = "\\ufe20-\\ufe2f",
  SN = "\\u20d0-\\u20ff",
  ON = wN + bN + SN,
  AN = "\\ufe0e\\ufe0f",
  kN = "[" + rw + "]",
  Th = "[" + ON + "]",
  Ph = "\\ud83c[\\udffb-\\udfff]",
  EN = "(?:" + Th + "|" + Ph + ")",
  nw = "[^" + rw + "]",
  iw = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  aw = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  TN = "\\u200d",
  ow = EN + "?",
  uw = "[" + AN + "]?",
  PN = "(?:" + TN + "(?:" + [nw, iw, aw].join("|") + ")" + uw + ow + ")*",
  $N = uw + ow + PN,
  CN = "(?:" + [nw + Th + "?", Th, iw, aw, kN].join("|") + ")",
  MN = RegExp(Ph + "(?=" + Ph + ")|" + CN + $N, "g");
function IN(e) {
  return e.match(MN) || [];
}
var NN = IN,
  RN = _N,
  jN = tw,
  DN = NN;
function LN(e) {
  return jN(e) ? DN(e) : RN(e);
}
var FN = LN,
  zN = sN,
  BN = tw,
  UN = FN,
  WN = J_;
function HN(e) {
  return function (t) {
    t = WN(t);
    var r = BN(t) ? UN(t) : void 0,
      n = r ? r[0] : t.charAt(0),
      i = r ? zN(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var VN = HN,
  qN = VN,
  GN = qN("toUpperCase"),
  Fs = GN;
const $h = Math.PI,
  Ch = 2 * $h,
  jn = 1e-6,
  KN = Ch - jn;
function Mh() {
  (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
}
function zs() {
  return new Mh();
}
Mh.prototype = zs.prototype = {
  constructor: Mh,
  moveTo: function (e, t) {
    this._ +=
      "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
  },
  closePath: function () {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
  },
  lineTo: function (e, t) {
    this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
  },
  quadraticCurveTo: function (e, t, r, n) {
    this._ +=
      "Q" + +e + "," + +t + "," + (this._x1 = +r) + "," + (this._y1 = +n);
  },
  bezierCurveTo: function (e, t, r, n, i, a) {
    this._ +=
      "C" +
      +e +
      "," +
      +t +
      "," +
      +r +
      "," +
      +n +
      "," +
      (this._x1 = +i) +
      "," +
      (this._y1 = +a);
  },
  arcTo: function (e, t, r, n, i) {
    (e = +e), (t = +t), (r = +r), (n = +n), (i = +i);
    var a = this._x1,
      o = this._y1,
      u = r - e,
      l = n - t,
      s = a - e,
      c = o - t,
      f = s * s + c * c;
    if (i < 0) throw new Error("negative radius: " + i);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (f > jn)
      if (!(Math.abs(c * u - l * s) > jn) || !i)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var h = r - a,
          x = n - o,
          v = u * u + l * l,
          d = h * h + x * x,
          _ = Math.sqrt(v),
          p = Math.sqrt(f),
          m = i * Math.tan(($h - Math.acos((v + f - d) / (2 * _ * p))) / 2),
          g = m / p,
          y = m / _;
        Math.abs(g - 1) > jn &&
          (this._ += "L" + (e + g * s) + "," + (t + g * c)),
          (this._ +=
            "A" +
            i +
            "," +
            i +
            ",0,0," +
            +(c * h > s * x) +
            "," +
            (this._x1 = e + y * u) +
            "," +
            (this._y1 = t + y * l));
      }
  },
  arc: function (e, t, r, n, i, a) {
    (e = +e), (t = +t), (r = +r), (a = !!a);
    var o = r * Math.cos(n),
      u = r * Math.sin(n),
      l = e + o,
      s = t + u,
      c = 1 ^ a,
      f = a ? n - i : i - n;
    if (r < 0) throw new Error("negative radius: " + r);
    this._x1 === null
      ? (this._ += "M" + l + "," + s)
      : (Math.abs(this._x1 - l) > jn || Math.abs(this._y1 - s) > jn) &&
        (this._ += "L" + l + "," + s),
      r &&
        (f < 0 && (f = (f % Ch) + Ch),
        f > KN
          ? (this._ +=
              "A" +
              r +
              "," +
              r +
              ",0,1," +
              c +
              "," +
              (e - o) +
              "," +
              (t - u) +
              "A" +
              r +
              "," +
              r +
              ",0,1," +
              c +
              "," +
              (this._x1 = l) +
              "," +
              (this._y1 = s))
          : f > jn &&
            (this._ +=
              "A" +
              r +
              "," +
              r +
              ",0," +
              +(f >= $h) +
              "," +
              c +
              "," +
              (this._x1 = e + r * Math.cos(i)) +
              "," +
              (this._y1 = t + r * Math.sin(i))));
  },
  rect: function (e, t, r, n) {
    this._ +=
      "M" +
      (this._x0 = this._x1 = +e) +
      "," +
      (this._y0 = this._y1 = +t) +
      "h" +
      +r +
      "v" +
      +n +
      "h" +
      -r +
      "Z";
  },
  toString: function () {
    return this._;
  },
};
function ke(e) {
  return function () {
    return e;
  };
}
var Ml = Math.PI,
  Bs = 2 * Ml;
function Xp(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function lw(e) {
  this._context = e;
}
lw.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  },
};
function Us(e) {
  return new lw(e);
}
function sw(e) {
  return e[0];
}
function cw(e) {
  return e[1];
}
function fw(e, t) {
  var r = ke(!0),
    n = null,
    i = Us,
    a = null;
  (e = typeof e == "function" ? e : e === void 0 ? sw : ke(e)),
    (t = typeof t == "function" ? t : t === void 0 ? cw : ke(t));
  function o(u) {
    var l,
      s = (u = Xp(u)).length,
      c,
      f = !1,
      h;
    for (n == null && (a = i((h = zs()))), l = 0; l <= s; ++l)
      !(l < s && r((c = u[l]), l, u)) === f &&
        ((f = !f) ? a.lineStart() : a.lineEnd()),
        f && a.point(+e(c, l, u), +t(c, l, u));
    if (h) return (a = null), h + "" || null;
  }
  return (
    (o.x = function (u) {
      return arguments.length
        ? ((e = typeof u == "function" ? u : ke(+u)), o)
        : e;
    }),
    (o.y = function (u) {
      return arguments.length
        ? ((t = typeof u == "function" ? u : ke(+u)), o)
        : t;
    }),
    (o.defined = function (u) {
      return arguments.length
        ? ((r = typeof u == "function" ? u : ke(!!u)), o)
        : r;
    }),
    (o.curve = function (u) {
      return arguments.length ? ((i = u), n != null && (a = i(n)), o) : i;
    }),
    (o.context = function (u) {
      return arguments.length
        ? (u == null ? (n = a = null) : (a = i((n = u))), o)
        : n;
    }),
    o
  );
}
function yu(e, t, r) {
  var n = null,
    i = ke(!0),
    a = null,
    o = Us,
    u = null;
  (e = typeof e == "function" ? e : e === void 0 ? sw : ke(+e)),
    (t = typeof t == "function" ? t : ke(t === void 0 ? 0 : +t)),
    (r = typeof r == "function" ? r : r === void 0 ? cw : ke(+r));
  function l(c) {
    var f,
      h,
      x,
      v = (c = Xp(c)).length,
      d,
      _ = !1,
      p,
      m = new Array(v),
      g = new Array(v);
    for (a == null && (u = o((p = zs()))), f = 0; f <= v; ++f) {
      if (!(f < v && i((d = c[f]), f, c)) === _)
        if ((_ = !_)) (h = f), u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), x = f - 1; x >= h; --x)
            u.point(m[x], g[x]);
          u.lineEnd(), u.areaEnd();
        }
      _ &&
        ((m[f] = +e(d, f, c)),
        (g[f] = +t(d, f, c)),
        u.point(n ? +n(d, f, c) : m[f], r ? +r(d, f, c) : g[f]));
    }
    if (p) return (u = null), p + "" || null;
  }
  function s() {
    return fw().defined(i).curve(o).context(a);
  }
  return (
    (l.x = function (c) {
      return arguments.length
        ? ((e = typeof c == "function" ? c : ke(+c)), (n = null), l)
        : e;
    }),
    (l.x0 = function (c) {
      return arguments.length
        ? ((e = typeof c == "function" ? c : ke(+c)), l)
        : e;
    }),
    (l.x1 = function (c) {
      return arguments.length
        ? ((n = c == null ? null : typeof c == "function" ? c : ke(+c)), l)
        : n;
    }),
    (l.y = function (c) {
      return arguments.length
        ? ((t = typeof c == "function" ? c : ke(+c)), (r = null), l)
        : t;
    }),
    (l.y0 = function (c) {
      return arguments.length
        ? ((t = typeof c == "function" ? c : ke(+c)), l)
        : t;
    }),
    (l.y1 = function (c) {
      return arguments.length
        ? ((r = c == null ? null : typeof c == "function" ? c : ke(+c)), l)
        : r;
    }),
    (l.lineX0 = l.lineY0 =
      function () {
        return s().x(e).y(t);
      }),
    (l.lineY1 = function () {
      return s().x(e).y(r);
    }),
    (l.lineX1 = function () {
      return s().x(n).y(t);
    }),
    (l.defined = function (c) {
      return arguments.length
        ? ((i = typeof c == "function" ? c : ke(!!c)), l)
        : i;
    }),
    (l.curve = function (c) {
      return arguments.length ? ((o = c), a != null && (u = o(a)), l) : o;
    }),
    (l.context = function (c) {
      return arguments.length
        ? (c == null ? (a = u = null) : (u = o((a = c))), l)
        : a;
    }),
    l
  );
}
var Yp = {
    draw: function (e, t) {
      var r = Math.sqrt(t / Ml);
      e.moveTo(r, 0), e.arc(0, 0, r, 0, Bs);
    },
  },
  XN = {
    draw: function (e, t) {
      var r = Math.sqrt(t / 5) / 2;
      e.moveTo(-3 * r, -r),
        e.lineTo(-r, -r),
        e.lineTo(-r, -3 * r),
        e.lineTo(r, -3 * r),
        e.lineTo(r, -r),
        e.lineTo(3 * r, -r),
        e.lineTo(3 * r, r),
        e.lineTo(r, r),
        e.lineTo(r, 3 * r),
        e.lineTo(-r, 3 * r),
        e.lineTo(-r, r),
        e.lineTo(-3 * r, r),
        e.closePath();
    },
  },
  hw = Math.sqrt(1 / 3),
  YN = hw * 2,
  QN = {
    draw: function (e, t) {
      var r = Math.sqrt(t / YN),
        n = r * hw;
      e.moveTo(0, -r),
        e.lineTo(n, 0),
        e.lineTo(0, r),
        e.lineTo(-n, 0),
        e.closePath();
    },
  },
  JN = 0.8908130915292852,
  dw = Math.sin(Ml / 10) / Math.sin((7 * Ml) / 10),
  ZN = Math.sin(Bs / 10) * dw,
  eR = -Math.cos(Bs / 10) * dw,
  tR = {
    draw: function (e, t) {
      var r = Math.sqrt(t * JN),
        n = ZN * r,
        i = eR * r;
      e.moveTo(0, -r), e.lineTo(n, i);
      for (var a = 1; a < 5; ++a) {
        var o = (Bs * a) / 5,
          u = Math.cos(o),
          l = Math.sin(o);
        e.lineTo(l * r, -u * r), e.lineTo(u * n - l * i, l * n + u * i);
      }
      e.closePath();
    },
  },
  rR = {
    draw: function (e, t) {
      var r = Math.sqrt(t),
        n = -r / 2;
      e.rect(n, n, r, r);
    },
  },
  Qc = Math.sqrt(3),
  nR = {
    draw: function (e, t) {
      var r = -Math.sqrt(t / (Qc * 3));
      e.moveTo(0, r * 2),
        e.lineTo(-Qc * r, -r),
        e.lineTo(Qc * r, -r),
        e.closePath();
    },
  },
  Gt = -0.5,
  Kt = Math.sqrt(3) / 2,
  Ih = 1 / Math.sqrt(12),
  iR = (Ih / 2 + 1) * 3,
  aR = {
    draw: function (e, t) {
      var r = Math.sqrt(t / iR),
        n = r / 2,
        i = r * Ih,
        a = n,
        o = r * Ih + r,
        u = -a,
        l = o;
      e.moveTo(n, i),
        e.lineTo(a, o),
        e.lineTo(u, l),
        e.lineTo(Gt * n - Kt * i, Kt * n + Gt * i),
        e.lineTo(Gt * a - Kt * o, Kt * a + Gt * o),
        e.lineTo(Gt * u - Kt * l, Kt * u + Gt * l),
        e.lineTo(Gt * n + Kt * i, Gt * i - Kt * n),
        e.lineTo(Gt * a + Kt * o, Gt * o - Kt * a),
        e.lineTo(Gt * u + Kt * l, Gt * l - Kt * u),
        e.closePath();
    },
  };
function oR(e, t) {
  var r = null;
  (e = typeof e == "function" ? e : ke(e || Yp)),
    (t = typeof t == "function" ? t : ke(t === void 0 ? 64 : +t));
  function n() {
    var i;
    if (
      (r || (r = i = zs()),
      e.apply(this, arguments).draw(r, +t.apply(this, arguments)),
      i)
    )
      return (r = null), i + "" || null;
  }
  return (
    (n.type = function (i) {
      return arguments.length
        ? ((e = typeof i == "function" ? i : ke(i)), n)
        : e;
    }),
    (n.size = function (i) {
      return arguments.length
        ? ((t = typeof i == "function" ? i : ke(+i)), n)
        : t;
    }),
    (n.context = function (i) {
      return arguments.length ? ((r = i == null ? null : i), n) : r;
    }),
    n
  );
}
function Il() {}
function Nl(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function pw(e) {
  this._context = e;
}
pw.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        Nl(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        (this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6
          );
      default:
        Nl(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function uR(e) {
  return new pw(e);
}
function vw(e) {
  this._context = e;
}
vw.prototype = {
  areaStart: Il,
  areaEnd: Il,
  lineStart: function () {
    (this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3
        ),
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3
          ),
          this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1), (this._x2 = e), (this._y2 = t);
        break;
      case 1:
        (this._point = 2), (this._x3 = e), (this._y3 = t);
        break;
      case 2:
        (this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6
          );
        break;
      default:
        Nl(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function lR(e) {
  return new vw(e);
}
function yw(e) {
  this._context = e;
}
yw.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6,
          n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        Nl(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function sR(e) {
  return new yw(e);
}
function gw(e) {
  this._context = e;
}
gw.prototype = {
  areaStart: Il,
  areaEnd: Il,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    (e = +e),
      (t = +t),
      this._point
        ? this._context.lineTo(e, t)
        : ((this._point = 1), this._context.moveTo(e, t));
  },
};
function cR(e) {
  return new gw(e);
}
function Cg(e) {
  return e < 0 ? -1 : 1;
}
function Mg(e, t, r) {
  var n = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (n || (i < 0 && -0)),
    o = (r - e._y1) / (i || (n < 0 && -0)),
    u = (a * i + o * n) / (n + i);
  return (
    (Cg(a) + Cg(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0
  );
}
function Ig(e, t) {
  var r = e._x1 - e._x0;
  return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
}
function Jc(e, t, r) {
  var n = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function Rl(e) {
  this._context = e;
}
Rl.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Jc(this, this._t0, Ig(this, this._t0));
        break;
    }
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    var r = NaN;
    if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
      switch (this._point) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(e, t)
              : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          (this._point = 3), Jc(this, Ig(this, (r = Mg(this, e, t))), r);
          break;
        default:
          Jc(this, this._t0, (r = Mg(this, e, t)));
          break;
      }
      (this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = r);
    }
  },
};
function mw(e) {
  this._context = new xw(e);
}
(mw.prototype = Object.create(Rl.prototype)).point = function (e, t) {
  Rl.prototype.point.call(this, t, e);
};
function xw(e) {
  this._context = e;
}
xw.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  },
};
function fR(e) {
  return new Rl(e);
}
function hR(e) {
  return new mw(e);
}
function _w(e) {
  this._context = e;
}
_w.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = []), (this._y = []);
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      r = e.length;
    if (r)
      if (
        (this._line
          ? this._context.lineTo(e[0], t[0])
          : this._context.moveTo(e[0], t[0]),
        r === 2)
      )
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = Ng(e), i = Ng(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(
            n[0][a],
            i[0][a],
            n[1][a],
            i[1][a],
            e[o],
            t[o]
          );
    (this._line || (this._line !== 0 && r === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null);
  },
  point: function (e, t) {
    this._x.push(+e), this._y.push(+t);
  },
};
function Ng(e) {
  var t,
    r = e.length - 1,
    n,
    i = new Array(r),
    a = new Array(r),
    o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    (i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]);
  for (
    i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1;
    t < r;
    ++t
  )
    (n = i[t] / a[t - 1]), (a[t] -= n), (o[t] -= n * o[t - 1]);
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t)
    i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t)
    a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function dR(e) {
  return new _w(e);
}
function Ws(e, t) {
  (this._context = e), (this._t = t);
}
Ws.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = this._y = NaN), (this._point = 0);
  },
  lineEnd: function () {
    0 < this._t &&
      this._t < 1 &&
      this._point === 2 &&
      this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
      this._line >= 0 &&
        ((this._t = 1 - this._t), (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    (this._x = e), (this._y = t);
  },
};
function pR(e) {
  return new Ws(e, 0.5);
}
function vR(e) {
  return new Ws(e, 0);
}
function yR(e) {
  return new Ws(e, 1);
}
function Wi(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Nh(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function gR(e, t) {
  return e[t];
}
function mR(e) {
  const t = [];
  return (t.key = e), t;
}
function xR() {
  var e = ke([]),
    t = Nh,
    r = Wi,
    n = gR;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), mR),
      u,
      l = o.length,
      s = -1,
      c;
    for (const f of a)
      for (u = 0, ++s; u < l; ++u)
        (o[u][s] = [0, +n(f, o[u].key, s, a)]).data = f;
    for (u = 0, c = Xp(t(o)); u < l; ++u) o[c[u]].index = u;
    return r(o, c), o;
  }
  return (
    (i.keys = function (a) {
      return arguments.length
        ? ((e = typeof a == "function" ? a : ke(Array.from(a))), i)
        : e;
    }),
    (i.value = function (a) {
      return arguments.length
        ? ((n = typeof a == "function" ? a : ke(+a)), i)
        : n;
    }),
    (i.order = function (a) {
      return arguments.length
        ? ((t =
            a == null ? Nh : typeof a == "function" ? a : ke(Array.from(a))),
          i)
        : t;
    }),
    (i.offset = function (a) {
      return arguments.length ? ((r = a == null ? Wi : a), i) : r;
    }),
    i
  );
}
function _R(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    Wi(e, t);
  }
}
function wR(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    Wi(e, t);
  }
}
function bR(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, l = 0, s = 0; u < o; ++u) {
        for (
          var c = e[t[u]],
            f = c[n][1] || 0,
            h = c[n - 1][1] || 0,
            x = (f - h) / 2,
            v = 0;
          v < u;
          ++v
        ) {
          var d = e[t[v]],
            _ = d[n][1] || 0,
            p = d[n - 1][1] || 0;
          x += _ - p;
        }
        (l += f), (s += x * f);
      }
      (i[n - 1][1] += i[n - 1][0] = r), l && (r -= s / l);
    }
    (i[n - 1][1] += i[n - 1][0] = r), Wi(e, t);
  }
}
var Hs = { exports: {} },
  Vs = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var SR = V.exports,
  OR = Symbol.for("react.element"),
  AR = Symbol.for("react.fragment"),
  kR = Object.prototype.hasOwnProperty,
  ER = SR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  TR = { key: !0, ref: !0, __self: !0, __source: !0 };
function ww(e, t, r) {
  var n,
    i = {},
    a = null,
    o = null;
  r !== void 0 && (a = "" + r),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (n in t) kR.call(t, n) && !TR.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n]);
  return {
    $$typeof: OR,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: ER.current,
  };
}
Vs.Fragment = AR;
Vs.jsx = ww;
Vs.jsxs = ww;
Hs.exports = Vs;
const F = Hs.exports.jsx,
  Ze = Hs.exports.jsxs,
  PR = Hs.exports.Fragment;
function Fu(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Fu = function (r) {
          return typeof r;
        })
      : (Fu = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Fu(e)
  );
}
function $R(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Rg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function CR(e, t, r) {
  return t && Rg(e.prototype, t), r && Rg(e, r), e;
}
function MR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Rh(e, t);
}
function Rh(e, t) {
  return (
    (Rh =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    Rh(e, t)
  );
}
function IR(e) {
  var t = jR();
  return function () {
    var n = jl(e),
      i;
    if (t) {
      var a = jl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return NR(this, i);
  };
}
function NR(e, t) {
  return t && (Fu(t) === "object" || typeof t == "function") ? t : RR(e);
}
function RR(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function jR() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function jl(e) {
  return (
    (jl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    jl(e)
  );
}
var bw = {
    symbolCircle: Yp,
    symbolCross: XN,
    symbolDiamond: QN,
    symbolSquare: rR,
    symbolStar: tR,
    symbolTriangle: nR,
    symbolWye: aR,
  },
  DR = Math.PI / 180,
  LR = function (t) {
    var r = "symbol".concat(Fs(t));
    return bw[r] || Yp;
  },
  FR = function (t, r, n) {
    if (r === "area") return t;
    switch (n) {
      case "cross":
        return (5 * t * t) / 9;
      case "diamond":
        return (0.5 * t * t) / Math.sqrt(3);
      case "square":
        return t * t;
      case "star": {
        var i = 18 * DR;
        return (
          1.25 *
          t *
          t *
          (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2))
        );
      }
      case "triangle":
        return (Math.sqrt(3) * t * t) / 4;
      case "wye":
        return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
      default:
        return (Math.PI * t * t) / 4;
    }
  },
  Qp = (function (e) {
    MR(r, e);
    var t = IR(r);
    function r() {
      return $R(this, r), t.apply(this, arguments);
    }
    return (
      CR(r, [
        {
          key: "getPath",
          value: function () {
            var i = this.props,
              a = i.size,
              o = i.sizeType,
              u = i.type,
              l = LR(u),
              s = oR().type(l).size(FR(a, o, u));
            return s();
          },
        },
        {
          key: "render",
          value: function () {
            var i = this.props,
              a = i.className,
              o = i.cx,
              u = i.cy,
              l = i.size;
            return o === +o && u === +u && l === +l
              ? F(
                  "path",
                  ge(ae({}, me(this.props, !0)), {
                    className: Te("recharts-symbols", a),
                    transform: "translate(".concat(o, ", ").concat(u, ")"),
                    d: this.getPath(),
                  })
                )
              : null;
          },
        },
      ]),
      r
    );
  })(V.exports.PureComponent);
Qp.defaultProps = { type: "circle", size: 64, sizeType: "area" };
Qp.registerSymbol = function (e, t) {
  bw["symbol".concat(Fs(e))] = t;
};
function zu(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (zu = function (r) {
          return typeof r;
        })
      : (zu = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    zu(e)
  );
}
function jg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function zR(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jg(Object(r), !0).forEach(function (n) {
          jh(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : jg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function jh(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function BR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function UR(e, t, r) {
  return t && Dg(e.prototype, t), r && Dg(e, r), e;
}
function WR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Dh(e, t);
}
function Dh(e, t) {
  return (
    (Dh =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    Dh(e, t)
  );
}
function HR(e) {
  var t = GR();
  return function () {
    var n = Dl(e),
      i;
    if (t) {
      var a = Dl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return VR(this, i);
  };
}
function VR(e, t) {
  return t && (zu(t) === "object" || typeof t == "function") ? t : qR(e);
}
function qR(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function GR() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Dl(e) {
  return (
    (Dl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Dl(e)
  );
}
var Xt = 32,
  Jp = (function (e) {
    WR(r, e);
    var t = HR(r);
    function r() {
      return BR(this, r), t.apply(this, arguments);
    }
    return (
      UR(r, [
        {
          key: "renderIcon",
          value: function (i) {
            var a = this.props.inactiveColor,
              o = Xt / 2,
              u = Xt / 6,
              l = Xt / 3,
              s = i.inactive ? a : i.color;
            if (i.type === "plainline")
              return F("line", {
                strokeWidth: 4,
                fill: "none",
                stroke: s,
                strokeDasharray: i.payload.strokeDasharray,
                x1: 0,
                y1: o,
                x2: Xt,
                y2: o,
                className: "recharts-legend-icon",
              });
            if (i.type === "line")
              return F("path", {
                strokeWidth: 4,
                fill: "none",
                stroke: s,
                d: "M0,"
                  .concat(o, "h")
                  .concat(
                    l,
                    `
            A`
                  )
                  .concat(u, ",")
                  .concat(u, ",0,1,1,")
                  .concat(2 * l, ",")
                  .concat(
                    o,
                    `
            H`
                  )
                  .concat(Xt, "M")
                  .concat(2 * l, ",")
                  .concat(
                    o,
                    `
            A`
                  )
                  .concat(u, ",")
                  .concat(u, ",0,1,1,")
                  .concat(l, ",")
                  .concat(o),
                className: "recharts-legend-icon",
              });
            if (i.type === "rect")
              return F("path", {
                stroke: "none",
                fill: s,
                d: "M0,"
                  .concat(Xt / 8, "h")
                  .concat(Xt, "v")
                  .concat((Xt * 3) / 4, "h")
                  .concat(-Xt, "z"),
                className: "recharts-legend-icon",
              });
            if (oe.isValidElement(i.legendIcon)) {
              var c = zR({}, i);
              return delete c.legendIcon, oe.cloneElement(i.legendIcon, c);
            }
            return F(Qp, {
              fill: s,
              cx: o,
              cy: o,
              size: Xt,
              sizeType: "diameter",
              type: i.type,
            });
          },
        },
        {
          key: "renderItems",
          value: function () {
            var i = this,
              a = this.props,
              o = a.payload,
              u = a.iconSize,
              l = a.layout,
              s = a.formatter,
              c = a.inactiveColor,
              f = { x: 0, y: 0, width: Xt, height: Xt },
              h = {
                display: l === "horizontal" ? "inline-block" : "block",
                marginRight: 10,
              },
              x = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4,
              };
            return o.map(function (v, d) {
              var _,
                p = v.formatter || s,
                m = Te(
                  ((_ = { "recharts-legend-item": !0 }),
                  jh(_, "legend-item-".concat(d), !0),
                  jh(_, "inactive", v.inactive),
                  _)
                );
              if (v.type === "none") return null;
              var g = v.inactive ? c : v.color;
              return Ze(
                "li",
                ge(ae({ className: m, style: h }, M_(i.props, v, d)), {
                  children: [
                    F(_h, {
                      width: u,
                      height: u,
                      viewBox: f,
                      style: x,
                      children: i.renderIcon(v),
                    }),
                    F("span", {
                      className: "recharts-legend-item-text",
                      style: { color: g },
                      children: p ? p(v.value, v, d) : v.value,
                    }),
                  ],
                }),
                "legend-item-".concat(d)
              );
            });
          },
        },
        {
          key: "render",
          value: function () {
            var i = this.props,
              a = i.payload,
              o = i.layout,
              u = i.align;
            if (!a || !a.length) return null;
            var l = {
              padding: 0,
              margin: 0,
              textAlign: o === "horizontal" ? u : "left",
            };
            return F("ul", {
              className: "recharts-default-legend",
              style: l,
              children: this.renderItems(),
            });
          },
        },
      ]),
      r
    );
  })(V.exports.PureComponent);
Jp.displayName = "Legend";
Jp.defaultProps = {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc",
};
var KR = Sn,
  XR = On,
  YR = "[object Number]";
function QR(e) {
  return typeof e == "number" || (XR(e) && KR(e) == YR);
}
var Sw = QR,
  JR = Sw;
function ZR(e) {
  return JR(e) && e != +e;
}
var qs = ZR,
  ej = Sn,
  tj = xe,
  rj = On,
  nj = "[object String]";
function ij(e) {
  return typeof e == "string" || (!tj(e) && rj(e) && ej(e) == nj);
}
var jo = ij,
  mr = function (t) {
    return t === 0 ? 0 : t > 0 ? 1 : -1;
  },
  Wn = function (t) {
    return jo(t) && t.indexOf("%") === t.length - 1;
  },
  q = function (t) {
    return Sw(t) && !qs(t);
  },
  Je = function (t) {
    return q(t) || jo(t);
  },
  aj = 0,
  Gs = function (t) {
    var r = ++aj;
    return "".concat(t || "").concat(r);
  },
  Hi = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!q(t) && !jo(t)) return n;
    var a;
    if (Wn(t)) {
      var o = t.indexOf("%");
      a = (r * parseFloat(t.slice(0, o))) / 100;
    } else a = +t;
    return qs(a) && (a = n), i && a > r && (a = r), a;
  },
  Yr = function (t) {
    if (!t) return null;
    var r = Object.keys(t);
    return r && r.length ? t[r[0]] : null;
  },
  oj = function (t) {
    if (!xe(t)) return !1;
    for (var r = t.length, n = {}, i = 0; i < r; i++)
      if (!n[t[i]]) n[t[i]] = !0;
      else return !0;
    return !1;
  },
  Aa = function (t, r) {
    return q(t) && q(r)
      ? function (n) {
          return t + n * (r - t);
        }
      : function () {
          return r;
        };
  };
function Ll(e, t, r) {
  return !e || !e.length
    ? null
    : e.find(function (n) {
        return n && (typeof t == "function" ? t(n) : zt(n, t)) === r;
      });
}
function Bu(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Bu = function (r) {
          return typeof r;
        })
      : (Bu = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Bu(e)
  );
}
function Lg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function si(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lg(Object(r), !0).forEach(function (n) {
          uj(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Lg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function uj(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function lj(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function sj(e, t, r) {
  return t && Fg(e.prototype, t), r && Fg(e, r), e;
}
function cj(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Lh(e, t);
}
function Lh(e, t) {
  return (
    (Lh =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    Lh(e, t)
  );
}
function fj(e) {
  var t = pj();
  return function () {
    var n = Fl(e),
      i;
    if (t) {
      var a = Fl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return hj(this, i);
  };
}
function hj(e, t) {
  return t && (Bu(t) === "object" || typeof t == "function") ? t : dj(e);
}
function dj(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function pj() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Fl(e) {
  return (
    (Fl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Fl(e)
  );
}
function vj(e, t) {
  if (e == null) return {};
  var r = yj(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function yj(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function gj(e) {
  return e.value;
}
function mj(e, t) {
  return e === !0 ? Cl(t, gj) : te(e) ? Cl(t, e) : t;
}
function xj(e, t) {
  if (oe.isValidElement(e)) return oe.cloneElement(e, t);
  if (te(e)) return oe.createElement(e, t);
  t.ref;
  var r = vj(t, ["ref"]);
  return F(Jp, ae({}, r));
}
var zg = 1,
  Vi = (function (e) {
    cj(r, e);
    var t = fj(r);
    function r() {
      var n;
      lj(this, r);
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
        a[o] = arguments[o];
      return (
        (n = t.call.apply(t, [this].concat(a))),
        (n.wrapperNode = void 0),
        (n.state = { boxWidth: -1, boxHeight: -1 }),
        n
      );
    }
    return (
      sj(
        r,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "getBBox",
            value: function () {
              return this.wrapperNode && this.wrapperNode.getBoundingClientRect
                ? this.wrapperNode.getBoundingClientRect()
                : null;
            },
          },
          {
            key: "getBBoxSnapshot",
            value: function () {
              var i = this.state,
                a = i.boxWidth,
                o = i.boxHeight;
              return a >= 0 && o >= 0 ? { width: a, height: o } : null;
            },
          },
          {
            key: "getDefaultPosition",
            value: function (i) {
              var a = this.props,
                o = a.layout,
                u = a.align,
                l = a.verticalAlign,
                s = a.margin,
                c = a.chartWidth,
                f = a.chartHeight,
                h,
                x;
              if (
                !i ||
                ((i.left === void 0 || i.left === null) &&
                  (i.right === void 0 || i.right === null))
              )
                if (u === "center" && o === "vertical") {
                  var v = this.getBBoxSnapshot() || { width: 0 };
                  h = { left: ((c || 0) - v.width) / 2 };
                } else
                  h =
                    u === "right"
                      ? { right: (s && s.right) || 0 }
                      : { left: (s && s.left) || 0 };
              if (
                !i ||
                ((i.top === void 0 || i.top === null) &&
                  (i.bottom === void 0 || i.bottom === null))
              )
                if (l === "middle") {
                  var d = this.getBBoxSnapshot() || { height: 0 };
                  x = { top: ((f || 0) - d.height) / 2 };
                } else
                  x =
                    l === "bottom"
                      ? { bottom: (s && s.bottom) || 0 }
                      : { top: (s && s.top) || 0 };
              return si(si({}, h), x);
            },
          },
          {
            key: "updateBBox",
            value: function () {
              var i = this.state,
                a = i.boxWidth,
                o = i.boxHeight,
                u = this.props.onBBoxUpdate;
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var l = this.wrapperNode.getBoundingClientRect();
                (Math.abs(l.width - a) > zg || Math.abs(l.height - o) > zg) &&
                  this.setState(
                    { boxWidth: l.width, boxHeight: l.height },
                    function () {
                      u && u(l);
                    }
                  );
              } else
                (a !== -1 || o !== -1) &&
                  this.setState({ boxWidth: -1, boxHeight: -1 }, function () {
                    u && u(null);
                  });
            },
          },
          {
            key: "render",
            value: function () {
              var i = this,
                a = this.props,
                o = a.content,
                u = a.width,
                l = a.height,
                s = a.wrapperStyle,
                c = a.payloadUniqBy,
                f = a.payload,
                h = si(
                  si(
                    {
                      position: "absolute",
                      width: u || "auto",
                      height: l || "auto",
                    },
                    this.getDefaultPosition(s)
                  ),
                  s
                );
              return F("div", {
                className: "recharts-legend-wrapper",
                style: h,
                ref: function (v) {
                  i.wrapperNode = v;
                },
                children: xj(
                  o,
                  si(si({}, this.props), {}, { payload: mj(c, f) })
                ),
              });
            },
          },
        ],
        [
          {
            key: "getWithHeight",
            value: function (i, a) {
              var o = i.props.layout;
              return o === "vertical" && q(i.props.height)
                ? { height: i.props.height }
                : o === "horizontal"
                ? { width: i.props.width || a }
                : null;
            },
          },
        ]
      ),
      r
    );
  })(V.exports.PureComponent);
Vi.displayName = "Legend";
Vi.defaultProps = {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom",
};
function _j(e) {
  return e == null;
}
var Z = _j,
  Ow = { exports: {} },
  wj = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  bj = wj,
  Sj = bj;
function Aw() {}
function kw() {}
kw.resetWarningCache = Aw;
var Oj = function () {
  function e(n, i, a, o, u, l) {
    if (l !== Sj) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((s.name = "Invariant Violation"), s);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: kw,
    resetWarningCache: Aw,
  };
  return (r.PropTypes = r), r;
};
Ow.exports = Oj();
var re = Ow.exports,
  Aj = typeof WeakSet == "function",
  Bg = Object.keys;
function Zp(e, t) {
  return e === t || (e !== e && t !== t);
}
function Ug(e) {
  return e.constructor === Object || e.constructor == null;
}
function Wg(e) {
  return !!e && typeof e.then == "function";
}
function Hg(e) {
  return !!(e && e.$$typeof);
}
function kj() {
  var e = [];
  return {
    add: function (t) {
      e.push(t);
    },
    has: function (t) {
      return e.indexOf(t) !== -1;
    },
  };
}
var Ej = (function (e) {
  return e
    ? function () {
        return new WeakSet();
      }
    : kj;
})(Aj);
function Ew(e) {
  return function (r) {
    var n = e || r;
    return function (a, o, u) {
      u === void 0 && (u = Ej());
      var l = !!a && typeof a == "object",
        s = !!o && typeof o == "object";
      if (l || s) {
        var c = l && u.has(a),
          f = s && u.has(o);
        if (c || f) return c && f;
        l && u.add(a), s && u.add(o);
      }
      return n(a, o, u);
    };
  };
}
function Tj(e, t, r, n) {
  var i = e.length;
  if (t.length !== i) return !1;
  for (; i-- > 0; ) if (!r(e[i], t[i], n)) return !1;
  return !0;
}
function Pj(e, t, r, n) {
  var i = e.size === t.size;
  if (i && e.size) {
    var a = {};
    e.forEach(function (o, u) {
      if (i) {
        var l = !1,
          s = 0;
        t.forEach(function (c, f) {
          !l && !a[s] && ((l = r(u, f, n) && r(o, c, n)), l && (a[s] = !0)),
            s++;
        }),
          (i = l);
      }
    });
  }
  return i;
}
var $j = "_owner",
  Cj = Function.prototype.bind.call(
    Function.prototype.call,
    Object.prototype.hasOwnProperty
  );
function Vg(e, t, r, n) {
  var i = Bg(e),
    a = i.length;
  if (Bg(t).length !== a) return !1;
  if (a)
    for (var o = void 0; a-- > 0; ) {
      if (((o = i[a]), o === $j)) {
        var u = Hg(e),
          l = Hg(t);
        if ((u || l) && u !== l) return !1;
      }
      if (!Cj(t, o) || !r(e[o], t[o], n)) return !1;
    }
  return !0;
}
function Mj(e, t) {
  return (
    e.source === t.source &&
    e.global === t.global &&
    e.ignoreCase === t.ignoreCase &&
    e.multiline === t.multiline &&
    e.unicode === t.unicode &&
    e.sticky === t.sticky &&
    e.lastIndex === t.lastIndex
  );
}
function Ij(e, t, r, n) {
  var i = e.size === t.size;
  if (i && e.size) {
    var a = {};
    e.forEach(function (o) {
      if (i) {
        var u = !1,
          l = 0;
        t.forEach(function (s) {
          !u && !a[l] && ((u = r(o, s, n)), u && (a[l] = !0)), l++;
        }),
          (i = u);
      }
    });
  }
  return i;
}
var Nj = typeof Map == "function",
  Rj = typeof Set == "function";
function Ks(e) {
  var t = typeof e == "function" ? e(r) : r;
  function r(n, i, a) {
    if (n === i) return !0;
    if (n && i && typeof n == "object" && typeof i == "object") {
      if (Ug(n) && Ug(i)) return Vg(n, i, t, a);
      var o = Array.isArray(n),
        u = Array.isArray(i);
      return o || u
        ? o === u && Tj(n, i, t, a)
        : ((o = n instanceof Date),
          (u = i instanceof Date),
          o || u
            ? o === u && Zp(n.getTime(), i.getTime())
            : ((o = n instanceof RegExp),
              (u = i instanceof RegExp),
              o || u
                ? o === u && Mj(n, i)
                : Wg(n) || Wg(i)
                ? n === i
                : Nj && ((o = n instanceof Map), (u = i instanceof Map), o || u)
                ? o === u && Pj(n, i, t, a)
                : Rj && ((o = n instanceof Set), (u = i instanceof Set), o || u)
                ? o === u && Ij(n, i, t, a)
                : Vg(n, i, t, a)));
    }
    return n !== n && i !== i;
  }
  return r;
}
var jj = Ks();
Ks(function () {
  return Zp;
});
Ks(Ew());
Ks(Ew(Zp));
var Xs = { exports: {} },
  La = { exports: {} };
(function () {
  var e, t, r, n, i, a;
  typeof performance != "undefined" && performance !== null && performance.now
    ? (La.exports = function () {
        return performance.now();
      })
    : typeof process != "undefined" && process !== null && process.hrtime
    ? ((La.exports = function () {
        return (e() - i) / 1e6;
      }),
      (t = process.hrtime),
      (e = function () {
        var o;
        return (o = t()), o[0] * 1e9 + o[1];
      }),
      (n = e()),
      (a = process.uptime() * 1e9),
      (i = n - a))
    : Date.now
    ? ((La.exports = function () {
        return Date.now() - r;
      }),
      (r = Date.now()))
    : ((La.exports = function () {
        return new Date().getTime() - r;
      }),
      (r = new Date().getTime()));
}.call(nn));
var Dj = La.exports,
  Br = typeof window == "undefined" ? nn : window,
  gu = ["moz", "webkit"],
  Ci = "AnimationFrame",
  qi = Br["request" + Ci],
  go = Br["cancel" + Ci] || Br["cancelRequest" + Ci];
for (var ka = 0; !qi && ka < gu.length; ka++)
  (qi = Br[gu[ka] + "Request" + Ci]),
    (go = Br[gu[ka] + "Cancel" + Ci] || Br[gu[ka] + "CancelRequest" + Ci]);
if (!qi || !go) {
  var Zc = 0,
    qg = 0,
    Cn = [],
    Lj = 1e3 / 60;
  (qi = function (e) {
    if (Cn.length === 0) {
      var t = Dj(),
        r = Math.max(0, Lj - (t - Zc));
      (Zc = r + t),
        setTimeout(function () {
          var n = Cn.slice(0);
          Cn.length = 0;
          for (var i = 0; i < n.length; i++)
            if (!n[i].cancelled)
              try {
                n[i].callback(Zc);
              } catch (a) {
                setTimeout(function () {
                  throw a;
                }, 0);
              }
        }, Math.round(r));
    }
    return Cn.push({ handle: ++qg, callback: e, cancelled: !1 }), qg;
  }),
    (go = function (e) {
      for (var t = 0; t < Cn.length; t++)
        Cn[t].handle === e && (Cn[t].cancelled = !0);
    });
}
Xs.exports = function (e) {
  return qi.call(Br, e);
};
var Fj = (Xs.exports.cancel = function () {
  go.apply(Br, arguments);
});
Xs.exports.polyfill = function (e) {
  e || (e = Br), (e.requestAnimationFrame = qi), (e.cancelAnimationFrame = go);
};
var Xa = Xs.exports;
function Gg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = -1,
    n = function i(a) {
      r < 0 && (r = a), a - r > t ? (e(a), (r = -1)) : Xa(i);
    };
  Xa(n);
}
function Uu(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Uu = function (r) {
          return typeof r;
        })
      : (Uu = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Uu(e)
  );
}
function zj(e) {
  return Hj(e) || Wj(e) || Uj(e) || Bj();
}
function Bj() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Uj(e, t) {
  if (!!e) {
    if (typeof e == "string") return Kg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Kg(e, t);
  }
}
function Kg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Wj(e) {
  if (typeof Symbol != "undefined" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function Hj(e) {
  if (Array.isArray(e)) return e;
}
function Vj() {
  var e = {},
    t = function () {
      return null;
    },
    r = !1,
    n = function i(a) {
      if (!r) {
        if (Array.isArray(a)) {
          if (!a.length) return;
          var o = a,
            u = zj(o),
            l = u[0],
            s = u.slice(1);
          if (typeof l == "number") {
            Gg(i.bind(null, s), l);
            return;
          }
          i(l), Gg(i.bind(null, s));
          return;
        }
        Uu(a) === "object" && ((e = a), t(e)), typeof a == "function" && a();
      }
    };
  return {
    stop: function () {
      r = !0;
    },
    start: function (a) {
      (r = !1), n(a);
    },
    subscribe: function (a) {
      return (
        (t = a),
        function () {
          t = function () {
            return null;
          };
        }
      );
    },
  };
}
function Xg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Gi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xg(Object(r), !0).forEach(function (n) {
          zl(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Xg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function zl(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var qj = ["Webkit", "Moz", "O", "ms"],
  Gj = ["-webkit-", "-moz-", "-o-", "-ms-"],
  Kj = ["transform", "transformOrigin", "transition"],
  Xj = function (t, r) {
    return [Object.keys(t), Object.keys(r)].reduce(function (n, i) {
      return n.filter(function (a) {
        return i.includes(a);
      });
    });
  },
  Yj = function (t) {
    return t;
  },
  Qj = function (t) {
    return t.replace(/([A-Z])/g, function (r) {
      return "-".concat(r.toLowerCase());
    });
  },
  Jj = function (t, r) {
    if (Kj.indexOf(t) === -1) return zl({}, t, r);
    var n = t === "transition",
      i = t.replace(/(\w)/, function (o) {
        return o.toUpperCase();
      }),
      a = r;
    return qj.reduce(function (o, u, l) {
      return (
        n &&
          (a = r.replace(
            /(transform|transform-origin)/gim,
            "".concat(Gj[l], "$1")
          )),
        Gi(Gi({}, o), {}, zl({}, u + i, a))
      );
    }, {});
  },
  Ya = function (t, r) {
    return Object.keys(r).reduce(function (n, i) {
      return Gi(Gi({}, n), {}, zl({}, i, t(i, r[i])));
    }, {});
  },
  Fh = function (t) {
    return Object.keys(t).reduce(function (r, n) {
      return Gi(Gi({}, r), Jj(n, r[n]));
    }, t);
  },
  Yg = function (t, r, n) {
    return t
      .map(function (i) {
        return "".concat(Qj(i), " ").concat(r, "ms ").concat(n);
      })
      .join(",");
  };
function Zj(e, t) {
  return rD(e) || tD(e, t) || Tw(e, t) || eD();
}
function eD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tD(e, t) {
  if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (l) {
      (i = !0), (a = l);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function rD(e) {
  if (Array.isArray(e)) return e;
}
function nD(e) {
  return oD(e) || aD(e) || Tw(e) || iD();
}
function iD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tw(e, t) {
  if (!!e) {
    if (typeof e == "string") return zh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return zh(e, t);
  }
}
function aD(e) {
  if (typeof Symbol != "undefined" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function oD(e) {
  if (Array.isArray(e)) return zh(e);
}
function zh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Bl = 1e-4,
  Pw = function (t, r) {
    return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
  },
  $w = function (t, r) {
    return t
      .map(function (n, i) {
        return n * Math.pow(r, i);
      })
      .reduce(function (n, i) {
        return n + i;
      });
  },
  Qg = function (t, r) {
    return function (n) {
      var i = Pw(t, r);
      return $w(i, n);
    };
  },
  uD = function (t, r) {
    return function (n) {
      var i = Pw(t, r),
        a = [].concat(
          nD(
            i
              .map(function (o, u) {
                return o * u;
              })
              .slice(1)
          ),
          [0]
        );
      return $w(a, n);
    };
  },
  Jg = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var i = r[0],
      a = r[1],
      o = r[2],
      u = r[3];
    if (r.length === 1)
      switch (r[0]) {
        case "linear":
          (i = 0), (a = 0), (o = 1), (u = 1);
          break;
        case "ease":
          (i = 0.25), (a = 0.1), (o = 0.25), (u = 1);
          break;
        case "ease-in":
          (i = 0.42), (a = 0), (o = 1), (u = 1);
          break;
        case "ease-out":
          (i = 0.42), (a = 0), (o = 0.58), (u = 1);
          break;
        case "ease-in-out":
          (i = 0), (a = 0), (o = 0.58), (u = 1);
          break;
        default: {
          var l = r[0].split("(");
          if (
            l[0] === "cubic-bezier" &&
            l[1].split(")")[0].split(",").length === 4
          ) {
            var s = l[1]
                .split(")")[0]
                .split(",")
                .map(function (_) {
                  return parseFloat(_);
                }),
              c = Zj(s, 4);
            (i = c[0]), (a = c[1]), (o = c[2]), (u = c[3]);
          }
        }
      }
    var f = Qg(i, o),
      h = Qg(a, u),
      x = uD(i, o),
      v = function (p) {
        return p > 1 ? 1 : p < 0 ? 0 : p;
      },
      d = function (p) {
        for (var m = p > 1 ? 1 : p, g = m, y = 0; y < 8; ++y) {
          var w = f(g) - m,
            b = x(g);
          if (Math.abs(w - m) < Bl || b < Bl) return h(g);
          g = v(g - w / b);
        }
        return h(g);
      };
    return (d.isStepper = !1), d;
  },
  lD = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.stiff,
      n = r === void 0 ? 100 : r,
      i = t.damping,
      a = i === void 0 ? 8 : i,
      o = t.dt,
      u = o === void 0 ? 17 : o,
      l = function (c, f, h) {
        var x = -(c - f) * n,
          v = h * a,
          d = h + ((x - v) * u) / 1e3,
          _ = (h * u) / 1e3 + c;
        return Math.abs(_ - f) < Bl && Math.abs(d) < Bl ? [f, 0] : [_, d];
      };
    return (l.isStepper = !0), (l.dt = u), l;
  },
  sD = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var i = r[0];
    if (typeof i == "string")
      switch (i) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
          return Jg(i);
        case "spring":
          return lD();
        default:
          if (i.split("(")[0] === "cubic-bezier") return Jg(i);
      }
    return typeof i == "function" ? i : null;
  };
function Zg(e) {
  return hD(e) || fD(e) || Cw(e) || cD();
}
function cD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fD(e) {
  if (typeof Symbol != "undefined" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function hD(e) {
  if (Array.isArray(e)) return Uh(e);
}
function em(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? em(Object(r), !0).forEach(function (n) {
          Bh(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : em(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Bh(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function dD(e, t) {
  return yD(e) || vD(e, t) || Cw(e, t) || pD();
}
function pD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Cw(e, t) {
  if (!!e) {
    if (typeof e == "string") return Uh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Uh(e, t);
  }
}
function Uh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function vD(e, t) {
  if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (l) {
      (i = !0), (a = l);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function yD(e) {
  if (Array.isArray(e)) return e;
}
var Ul = function (t, r, n) {
    return t + (r - t) * n;
  },
  Wh = function (t) {
    var r = t.from,
      n = t.to;
    return r !== n;
  },
  gD = function e(t, r, n) {
    var i = Ya(function (a, o) {
      if (Wh(o)) {
        var u = t(o.from, o.to, o.velocity),
          l = dD(u, 2),
          s = l[0],
          c = l[1];
        return ot(ot({}, o), {}, { from: s, velocity: c });
      }
      return o;
    }, r);
    return n < 1
      ? Ya(function (a, o) {
          return Wh(o)
            ? ot(
                ot({}, o),
                {},
                {
                  velocity: Ul(o.velocity, i[a].velocity, n),
                  from: Ul(o.from, i[a].from, n),
                }
              )
            : o;
        }, r)
      : e(t, i, n - 1);
  },
  mD = function (e, t, r, n, i) {
    var a = Xj(e, t),
      o = a.reduce(function (_, p) {
        return ot(ot({}, _), {}, Bh({}, p, [e[p], t[p]]));
      }, {}),
      u = a.reduce(function (_, p) {
        return ot(
          ot({}, _),
          {},
          Bh({}, p, { from: e[p], velocity: 0, to: t[p] })
        );
      }, {}),
      l = -1,
      s,
      c,
      f = function () {
        return null;
      },
      h = function () {
        return Ya(function (p, m) {
          return m.from;
        }, u);
      },
      x = function () {
        return !Object.values(u).filter(Wh).length;
      },
      v = function (p) {
        s || (s = p);
        var m = p - s,
          g = m / r.dt;
        (u = gD(r, u, g)),
          i(ot(ot(ot({}, e), t), h())),
          (s = p),
          x() || (l = Xa(f));
      },
      d = function (p) {
        c || (c = p);
        var m = (p - c) / n,
          g = Ya(function (w, b) {
            return Ul.apply(void 0, Zg(b).concat([r(m)]));
          }, o);
        if ((i(ot(ot(ot({}, e), t), g)), m < 1)) l = Xa(f);
        else {
          var y = Ya(function (w, b) {
            return Ul.apply(void 0, Zg(b).concat([r(1)]));
          }, o);
          i(ot(ot(ot({}, e), t), y));
        }
      };
    return (
      (f = r.isStepper ? v : d),
      function () {
        return (
          Xa(f),
          function () {
            Fj(l);
          }
        );
      }
    );
  };
function Wu(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Wu = function (r) {
          return typeof r;
        })
      : (Wu = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Wu(e)
  );
}
function xD(e, t) {
  if (e == null) return {};
  var r = _D(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function _D(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function ef(e) {
  return OD(e) || SD(e) || bD(e) || wD();
}
function wD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bD(e, t) {
  if (!!e) {
    if (typeof e == "string") return Hh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Hh(e, t);
  }
}
function SD(e) {
  if (typeof Symbol != "undefined" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function OD(e) {
  if (Array.isArray(e)) return Hh(e);
}
function Hh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function tm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function sr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tm(Object(r), !0).forEach(function (n) {
          Fa(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : tm(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Fa(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function AD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function kD(e, t, r) {
  return t && rm(e.prototype, t), r && rm(e, r), e;
}
function ED(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Vh(e, t);
}
function Vh(e, t) {
  return (
    (Vh =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    Vh(e, t)
  );
}
function TD(e) {
  var t = PD();
  return function () {
    var n = Wl(e),
      i;
    if (t) {
      var a = Wl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return qh(this, i);
  };
}
function qh(e, t) {
  return t && (Wu(t) === "object" || typeof t == "function") ? t : Gh(e);
}
function Gh(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function PD() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Wl(e) {
  return (
    (Wl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Wl(e)
  );
}
var Ki = (function (e) {
  ED(r, e);
  var t = TD(r);
  function r(n, i) {
    var a;
    AD(this, r), (a = t.call(this, n, i));
    var o = a.props,
      u = o.isActive,
      l = o.attributeName,
      s = o.from,
      c = o.to,
      f = o.steps,
      h = o.children;
    if (
      ((a.handleStyleChange = a.handleStyleChange.bind(Gh(a))),
      (a.changeStyle = a.changeStyle.bind(Gh(a))),
      !u)
    )
      return (
        (a.state = { style: {} }),
        typeof h == "function" && (a.state = { style: c }),
        qh(a)
      );
    if (f && f.length) a.state = { style: f[0].style };
    else if (s) {
      if (typeof h == "function") return (a.state = { style: s }), qh(a);
      a.state = { style: l ? Fa({}, l, s) : s };
    } else a.state = { style: {} };
    return a;
  }
  return (
    kD(r, [
      {
        key: "componentDidMount",
        value: function () {
          var i = this.props,
            a = i.isActive,
            o = i.canBegin;
          (this.mounted = !0), !(!a || !o) && this.runAnimation(this.props);
        },
      },
      {
        key: "componentDidUpdate",
        value: function (i) {
          var a = this.props,
            o = a.isActive,
            u = a.canBegin,
            l = a.attributeName,
            s = a.shouldReAnimate;
          if (!!u) {
            if (!o) {
              var c = { style: l ? Fa({}, l, this.props.to) : this.props.to };
              this.state &&
                this.state.style &&
                ((l && this.state.style[l] !== this.props.to) ||
                  (!l && this.state.style !== this.props.to)) &&
                this.setState(c);
              return;
            }
            if (!(jj(i.to, this.props.to) && i.canBegin && i.isActive)) {
              var f = !i.canBegin || !i.isActive;
              this.manager && this.manager.stop(),
                this.stopJSAnimation && this.stopJSAnimation();
              var h = f || s ? this.props.from : i.to;
              if (this.state && this.state.style) {
                var x = { style: l ? Fa({}, l, h) : h };
                ((l && this.state.style[l] !== h) ||
                  (!l && this.state.style !== h)) &&
                  this.setState(x);
              }
              this.runAnimation(
                sr(sr({}, this.props), {}, { from: h, begin: 0 })
              );
            }
          }
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          (this.mounted = !1),
            this.unSubscribe && this.unSubscribe(),
            this.manager && (this.manager.stop(), (this.manager = null)),
            this.stopJSAnimation && this.stopJSAnimation();
        },
      },
      {
        key: "runJSAnimation",
        value: function (i) {
          var a = this,
            o = i.from,
            u = i.to,
            l = i.duration,
            s = i.easing,
            c = i.begin,
            f = i.onAnimationEnd,
            h = i.onAnimationStart,
            x = mD(o, u, sD(s), l, this.changeStyle),
            v = function () {
              a.stopJSAnimation = x();
            };
          this.manager.start([h, c, v, l, f]);
        },
      },
      {
        key: "runStepAnimation",
        value: function (i) {
          var a = this,
            o = i.steps,
            u = i.begin,
            l = i.onAnimationStart,
            s = o[0],
            c = s.style,
            f = s.duration,
            h = f === void 0 ? 0 : f,
            x = function (d, _, p) {
              if (p === 0) return d;
              var m = _.duration,
                g = _.easing,
                y = g === void 0 ? "ease" : g,
                w = _.style,
                b = _.properties,
                S = _.onAnimationEnd,
                O = p > 0 ? o[p - 1] : _,
                A = b || Object.keys(w);
              if (typeof y == "function" || y === "spring")
                return [].concat(ef(d), [
                  a.runJSAnimation.bind(a, {
                    from: O.style,
                    to: w,
                    duration: m,
                    easing: y,
                  }),
                  m,
                ]);
              var E = Yg(A, m, y),
                k = sr(sr(sr({}, O.style), w), {}, { transition: E });
              return [].concat(ef(d), [k, m, S]).filter(Yj);
            };
          return this.manager.start(
            [l].concat(ef(o.reduce(x, [c, Math.max(h, u)])), [i.onAnimationEnd])
          );
        },
      },
      {
        key: "runAnimation",
        value: function (i) {
          this.manager || (this.manager = Vj());
          var a = i.begin,
            o = i.duration,
            u = i.attributeName,
            l = i.to,
            s = i.easing,
            c = i.onAnimationStart,
            f = i.onAnimationEnd,
            h = i.steps,
            x = i.children,
            v = this.manager;
          if (
            ((this.unSubscribe = v.subscribe(this.handleStyleChange)),
            typeof s == "function" || typeof x == "function" || s === "spring")
          ) {
            this.runJSAnimation(i);
            return;
          }
          if (h.length > 1) {
            this.runStepAnimation(i);
            return;
          }
          var d = u ? Fa({}, u, l) : l,
            _ = Yg(Object.keys(d), o, s);
          v.start([c, a, sr(sr({}, d), {}, { transition: _ }), o, f]);
        },
      },
      {
        key: "handleStyleChange",
        value: function (i) {
          this.changeStyle(i);
        },
      },
      {
        key: "changeStyle",
        value: function (i) {
          this.mounted && this.setState({ style: i });
        },
      },
      {
        key: "render",
        value: function () {
          var i = this.props,
            a = i.children;
          i.begin, i.duration, i.attributeName, i.easing;
          var o = i.isActive;
          i.steps,
            i.from,
            i.to,
            i.canBegin,
            i.onAnimationEnd,
            i.shouldReAnimate,
            i.onAnimationReStart;
          var u = xD(i, [
              "children",
              "begin",
              "duration",
              "attributeName",
              "easing",
              "isActive",
              "steps",
              "from",
              "to",
              "canBegin",
              "onAnimationEnd",
              "shouldReAnimate",
              "onAnimationReStart",
            ]),
            l = V.exports.Children.count(a),
            s = Fh(this.state.style);
          if (typeof a == "function") return a(s);
          if (!o || l === 0) return a;
          var c = function (h) {
            var x = h.props,
              v = x.style,
              d = v === void 0 ? {} : v,
              _ = x.className,
              p = V.exports.cloneElement(
                h,
                sr(sr({}, u), {}, { style: sr(sr({}, d), s), className: _ })
              );
            return p;
          };
          return l === 1
            ? c(V.exports.Children.only(a))
            : F("div", {
                children: V.exports.Children.map(a, function (f) {
                  return c(f);
                }),
              });
        },
      },
    ]),
    r
  );
})(V.exports.PureComponent);
Ki.displayName = "Animate";
Ki.propTypes = {
  from: re.oneOfType([re.object, re.string]),
  to: re.oneOfType([re.object, re.string]),
  attributeName: re.string,
  duration: re.number,
  begin: re.number,
  easing: re.oneOfType([re.string, re.func]),
  steps: re.arrayOf(
    re.shape({
      duration: re.number.isRequired,
      style: re.object.isRequired,
      easing: re.oneOfType([
        re.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]),
        re.func,
      ]),
      properties: re.arrayOf("string"),
      onAnimationEnd: re.func,
    })
  ),
  children: re.oneOfType([re.node, re.func]),
  isActive: re.bool,
  canBegin: re.bool,
  onAnimationEnd: re.func,
  shouldReAnimate: re.bool,
  onAnimationStart: re.func,
  onAnimationReStart: re.func,
};
Ki.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function () {},
  onAnimationStart: function () {},
};
Number.isFinite === void 0 &&
  (Number.isFinite = function (e) {
    return typeof e == "number" && isFinite(e);
  });
re.object, re.object, re.object, re.element;
re.object, re.object, re.object, re.oneOfType([re.array, re.element]), re.any;
var nm = No,
  $D = Bp,
  CD = xe,
  im = nm ? nm.isConcatSpreadable : void 0;
function MD(e) {
  return CD(e) || $D(e) || !!(im && e && e[im]);
}
var ID = MD,
  ND = B_,
  RD = ID;
function Mw(e, t, r, n, i) {
  var a = -1,
    o = e.length;
  for (r || (r = RD), i || (i = []); ++a < o; ) {
    var u = e[a];
    t > 0 && r(u)
      ? t > 1
        ? Mw(u, t - 1, r, n, i)
        : ND(i, u)
      : n || (i[i.length] = u);
  }
  return i;
}
var Iw = Mw;
function jD(e) {
  return function (t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), u = o.length; u--; ) {
      var l = o[e ? u : ++i];
      if (r(a[l], l, a) === !1) break;
    }
    return t;
  };
}
var DD = jD,
  LD = DD,
  FD = LD(),
  zD = FD,
  BD = zD,
  UD = Ds;
function WD(e, t) {
  return e && BD(e, t, UD);
}
var Nw = WD,
  HD = Ro;
function VD(e, t) {
  return function (r, n) {
    if (r == null) return r;
    if (!HD(r)) return e(r, n);
    for (
      var i = r.length, a = t ? i : -1, o = Object(r);
      (t ? a-- : ++a < i) && n(o[a], a, o) !== !1;

    );
    return r;
  };
}
var qD = VD,
  GD = Nw,
  KD = qD,
  XD = KD(GD),
  ev = XD,
  YD = ev,
  QD = Ro;
function JD(e, t) {
  var r = -1,
    n = QD(e) ? Array(e.length) : [];
  return (
    YD(e, function (i, a, o) {
      n[++r] = t(i, a, o);
    }),
    n
  );
}
var Rw = JD;
function ZD(e, t) {
  var r = e.length;
  for (e.sort(t); r--; ) e[r] = e[r].value;
  return e;
}
var eL = ZD,
  am = oa;
function tL(e, t) {
  if (e !== t) {
    var r = e !== void 0,
      n = e === null,
      i = e === e,
      a = am(e),
      o = t !== void 0,
      u = t === null,
      l = t === t,
      s = am(t);
    if (
      (!u && !s && !a && e > t) ||
      (a && o && l && !u && !s) ||
      (n && o && l) ||
      (!r && l) ||
      !i
    )
      return 1;
    if (
      (!n && !a && !s && e < t) ||
      (s && r && i && !n && !a) ||
      (u && r && i) ||
      (!o && i) ||
      !l
    )
      return -1;
  }
  return 0;
}
var rL = tL,
  nL = rL;
function iL(e, t, r) {
  for (
    var n = -1, i = e.criteria, a = t.criteria, o = i.length, u = r.length;
    ++n < o;

  ) {
    var l = nL(i[n], a[n]);
    if (l) {
      if (n >= u) return l;
      var s = r[n];
      return l * (s == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var aL = iL,
  tf = Gp,
  oL = Kp,
  uL = An,
  lL = Rw,
  sL = eL,
  cL = W_,
  fL = aL,
  hL = ua,
  dL = xe;
function pL(e, t, r) {
  t.length
    ? (t = tf(t, function (a) {
        return dL(a)
          ? function (o) {
              return oL(o, a.length === 1 ? a[0] : a);
            }
          : a;
      }))
    : (t = [hL]);
  var n = -1;
  t = tf(t, cL(uL));
  var i = lL(e, function (a, o, u) {
    var l = tf(t, function (s) {
      return s(a);
    });
    return { criteria: l, index: ++n, value: a };
  });
  return sL(i, function (a, o) {
    return fL(a, o, r);
  });
}
var vL = pL;
function yL(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var gL = yL,
  mL = gL,
  om = Math.max;
function xL(e, t, r) {
  return (
    (t = om(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var n = arguments, i = -1, a = om(n.length - t, 0), o = Array(a);
        ++i < a;

      )
        o[i] = n[t + i];
      i = -1;
      for (var u = Array(t + 1); ++i < t; ) u[i] = n[i];
      return (u[t] = r(o)), mL(e, this, u);
    }
  );
}
var _L = xL;
function wL(e) {
  return function () {
    return e;
  };
}
var bL = wL,
  SL = ni,
  OL = (function () {
    try {
      var e = SL(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })(),
  jw = OL,
  AL = bL,
  um = jw,
  kL = ua,
  EL = um
    ? function (e, t) {
        return um(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: AL(t),
          writable: !0,
        });
      }
    : kL,
  TL = EL,
  PL = 800,
  $L = 16,
  CL = Date.now;
function ML(e) {
  var t = 0,
    r = 0;
  return function () {
    var n = CL(),
      i = $L - (n - r);
    if (((r = n), i > 0)) {
      if (++t >= PL) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var IL = ML,
  NL = TL,
  RL = IL,
  jL = RL(NL),
  DL = jL,
  LL = ua,
  FL = _L,
  zL = DL;
function BL(e, t) {
  return zL(FL(e, t, LL), e + "");
}
var UL = BL,
  WL = Dp,
  HL = Ro,
  VL = Up,
  qL = Ht;
function GL(e, t, r) {
  if (!qL(r)) return !1;
  var n = typeof t;
  return (n == "number" ? HL(r) && VL(t, r.length) : n == "string" && t in r)
    ? WL(r[t], e)
    : !1;
}
var Ys = GL,
  KL = Iw,
  XL = vL,
  YL = UL,
  lm = Ys,
  QL = YL(function (e, t) {
    if (e == null) return [];
    var r = t.length;
    return (
      r > 1 && lm(e, t[0], t[1])
        ? (t = [])
        : r > 2 && lm(t[0], t[1], t[2]) && (t = [t[0]]),
      XL(e, KL(t, 1), [])
    );
  }),
  tv = QL;
function Hu(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Hu = function (r) {
          return typeof r;
        })
      : (Hu = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Hu(e)
  );
}
function JL(e, t) {
  return r3(e) || t3(e, t) || e3(e, t) || ZL();
}
function ZL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function e3(e, t) {
  if (!!e) {
    if (typeof e == "string") return sm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return sm(e, t);
  }
}
function sm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function t3(e, t) {
  if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (l) {
      (i = !0), (a = l);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function r3(e) {
  if (Array.isArray(e)) return e;
}
function cm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function rf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cm(Object(r), !0).forEach(function (n) {
          n3(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : cm(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function n3(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function i3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function a3(e, t, r) {
  return t && fm(e.prototype, t), r && fm(e, r), e;
}
function o3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Kh(e, t);
}
function Kh(e, t) {
  return (
    (Kh =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    Kh(e, t)
  );
}
function u3(e) {
  var t = c3();
  return function () {
    var n = Hl(e),
      i;
    if (t) {
      var a = Hl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return l3(this, i);
  };
}
function l3(e, t) {
  return t && (Hu(t) === "object" || typeof t == "function") ? t : s3(e);
}
function s3(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function c3() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Hl(e) {
  return (
    (Hl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Hl(e)
  );
}
function f3(e) {
  return xe(e) && Je(e[0]) && Je(e[1]) ? e.join(" ~ ") : e;
}
var rv = (function (e) {
  o3(r, e);
  var t = u3(r);
  function r() {
    return i3(this, r), t.apply(this, arguments);
  }
  return (
    a3(r, [
      {
        key: "renderContent",
        value: function () {
          var i = this.props,
            a = i.payload,
            o = i.separator,
            u = i.formatter,
            l = i.itemStyle,
            s = i.itemSorter;
          if (a && a.length) {
            var c = { padding: 0, margin: 0 },
              f = (s ? tv(a, s) : a).map(function (h, x) {
                if (h.type === "none") return null;
                var v = rf(
                    {
                      display: "block",
                      paddingTop: 4,
                      paddingBottom: 4,
                      color: h.color || "#000",
                    },
                    l
                  ),
                  d = h.formatter || u || f3,
                  _ = h.name,
                  p = h.value;
                if (d) {
                  var m = d(p, _, h, x, a);
                  if (Array.isArray(m)) {
                    var g = JL(m, 2);
                    (p = g[0]), (_ = g[1]);
                  } else p = m;
                }
                return Ze(
                  "li",
                  {
                    className: "recharts-tooltip-item",
                    style: v,
                    children: [
                      Je(_)
                        ? F("span", {
                            className: "recharts-tooltip-item-name",
                            children: _,
                          })
                        : null,
                      Je(_)
                        ? F("span", {
                            className: "recharts-tooltip-item-separator",
                            children: o,
                          })
                        : null,
                      F("span", {
                        className: "recharts-tooltip-item-value",
                        children: p,
                      }),
                      F("span", {
                        className: "recharts-tooltip-item-unit",
                        children: h.unit || "",
                      }),
                    ],
                  },
                  "tooltip-item-".concat(x)
                );
              });
            return F("ul", {
              className: "recharts-tooltip-item-list",
              style: c,
              children: f,
            });
          }
          return null;
        },
      },
      {
        key: "render",
        value: function () {
          var i = this.props,
            a = i.wrapperClassName,
            o = i.contentStyle,
            u = i.labelClassName,
            l = i.labelStyle,
            s = i.label,
            c = i.labelFormatter,
            f = i.payload,
            h = rf(
              {
                margin: 0,
                padding: 10,
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                whiteSpace: "nowrap",
              },
              o
            ),
            x = rf({ margin: 0 }, l),
            v = !Z(s),
            d = v ? s : "",
            _ = Te("recharts-default-tooltip", a),
            p = Te("recharts-tooltip-label", u);
          return (
            v && c && (d = c(s, f)),
            Ze("div", {
              className: _,
              style: h,
              children: [
                F("p", {
                  className: p,
                  style: x,
                  children: oe.isValidElement(d) ? d : "".concat(d),
                }),
                this.renderContent(),
              ],
            })
          );
        },
      },
    ]),
    r
  );
})(V.exports.PureComponent);
rv.displayName = "DefaultTooltipContent";
rv.defaultProps = {
  separator: " : ",
  contentStyle: {},
  itemStyle: {},
  labelStyle: {},
};
var h3 = function () {
    return !(
      typeof window != "undefined" &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    );
  },
  dn = {
    isSsr: h3(),
    get: function (t) {
      return dn[t];
    },
    set: function (t, r) {
      if (typeof t == "string") dn[t] = r;
      else {
        var n = Object.keys(t);
        n &&
          n.length &&
          n.forEach(function (i) {
            dn[i] = t[i];
          });
      }
    },
  };
function Vu(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Vu = function (r) {
          return typeof r;
        })
      : (Vu = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Vu(e)
  );
}
function hm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Mn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hm(Object(r), !0).forEach(function (n) {
          za(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : hm(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function za(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function d3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function p3(e, t, r) {
  return t && dm(e.prototype, t), r && dm(e, r), e;
}
function v3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Xh(e, t);
}
function Xh(e, t) {
  return (
    (Xh =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    Xh(e, t)
  );
}
function y3(e) {
  var t = x3();
  return function () {
    var n = Vl(e),
      i;
    if (t) {
      var a = Vl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return g3(this, i);
  };
}
function g3(e, t) {
  return t && (Vu(t) === "object" || typeof t == "function") ? t : m3(e);
}
function m3(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function x3() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Vl(e) {
  return (
    (Vl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Vl(e)
  );
}
var Ea = "recharts-tooltip-wrapper",
  pm = 1;
function _3(e) {
  return e.dataKey;
}
function w3(e, t) {
  return e === !0 ? Cl(t, _3) : te(e) ? Cl(t, e) : t;
}
function b3(e, t) {
  return oe.isValidElement(e)
    ? oe.cloneElement(e, t)
    : te(e)
    ? oe.createElement(e, t)
    : F(rv, ae({}, t));
}
var Si = (function (e) {
  v3(r, e);
  var t = y3(r);
  function r() {
    var n;
    d3(this, r);
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return (
      (n = t.call.apply(t, [this].concat(a))),
      (n.state = { boxWidth: -1, boxHeight: -1 }),
      (n.wrapperNode = void 0),
      (n.getTranslate = function (u) {
        var l = u.key,
          s = u.tooltipDimension,
          c = u.viewBoxDimension,
          f = n.props,
          h = f.allowEscapeViewBox,
          x = f.coordinate,
          v = f.offset,
          d = f.position,
          _ = f.viewBox;
        if (d && q(d[l])) return d[l];
        var p = x[l] - s - v,
          m = x[l] + v;
        if (h[l]) return m;
        var g = x[l] + s + v,
          y = _[l] + c;
        return g > y ? Math.max(p, _[l]) : Math.max(m, _[l]);
      }),
      n
    );
  }
  return (
    p3(r, [
      {
        key: "componentDidMount",
        value: function () {
          this.updateBBox();
        },
      },
      {
        key: "componentDidUpdate",
        value: function () {
          this.updateBBox();
        },
      },
      {
        key: "updateBBox",
        value: function () {
          var i = this.state,
            a = i.boxWidth,
            o = i.boxHeight;
          if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
            var u = this.wrapperNode.getBoundingClientRect();
            (Math.abs(u.width - a) > pm || Math.abs(u.height - o) > pm) &&
              this.setState({ boxWidth: u.width, boxHeight: u.height });
          } else
            (a !== -1 || o !== -1) &&
              this.setState({ boxWidth: -1, boxHeight: -1 });
        },
      },
      {
        key: "render",
        value: function () {
          var i,
            a = this,
            o = this.props,
            u = o.payload,
            l = o.isAnimationActive,
            s = o.animationDuration,
            c = o.animationEasing,
            f = o.filterNull,
            h = o.payloadUniqBy,
            x = w3(
              h,
              f && u && u.length
                ? u.filter(function (P) {
                    return !Z(P.value);
                  })
                : u
            ),
            v = x && x.length,
            d = this.props,
            _ = d.content,
            p = d.viewBox,
            m = d.coordinate,
            g = d.position,
            y = d.active,
            w = d.wrapperStyle,
            b = Mn(
              {
                pointerEvents: "none",
                visibility: y && v ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0,
              },
              w
            ),
            S,
            O;
          if (g && q(g.x) && q(g.y)) (S = g.x), (O = g.y);
          else {
            var A = this.state,
              E = A.boxWidth,
              k = A.boxHeight;
            E > 0 && k > 0 && m
              ? ((S = this.getTranslate({
                  key: "x",
                  tooltipDimension: E,
                  viewBoxDimension: p.width,
                })),
                (O = this.getTranslate({
                  key: "y",
                  tooltipDimension: k,
                  viewBoxDimension: p.height,
                })))
              : (b.visibility = "hidden");
          }
          (b = Mn(
            Mn(
              {},
              Fh({
                transform: this.props.useTranslate3d
                  ? "translate3d(".concat(S, "px, ").concat(O, "px, 0)")
                  : "translate(".concat(S, "px, ").concat(O, "px)"),
              })
            ),
            b
          )),
            l &&
              y &&
              (b = Mn(
                Mn(
                  {},
                  Fh({ transition: "transform ".concat(s, "ms ").concat(c) })
                ),
                b
              ));
          var $ = Te(
            Ea,
            ((i = {}),
            za(i, "".concat(Ea, "-right"), q(S) && m && q(m.x) && S >= m.x),
            za(i, "".concat(Ea, "-left"), q(S) && m && q(m.x) && S < m.x),
            za(i, "".concat(Ea, "-bottom"), q(O) && m && q(m.y) && O >= m.y),
            za(i, "".concat(Ea, "-top"), q(O) && m && q(m.y) && O < m.y),
            i)
          );
          return F("div", {
            className: $,
            style: b,
            ref: function (M) {
              a.wrapperNode = M;
            },
            children: b3(_, Mn(Mn({}, this.props), {}, { payload: x })),
          });
        },
      },
    ]),
    r
  );
})(V.exports.PureComponent);
Si.displayName = "Tooltip";
Si.defaultProps = {
  active: !1,
  allowEscapeViewBox: { x: !1, y: !1 },
  offset: 10,
  viewBox: { x1: 0, x2: 0, y1: 0, y2: 0 },
  coordinate: { x: 0, y: 0 },
  cursorStyle: {},
  separator: " : ",
  wrapperStyle: {},
  contentStyle: {},
  itemStyle: {},
  labelStyle: {},
  cursor: !0,
  trigger: "hover",
  isAnimationActive: !dn.isSsr,
  animationEasing: "ease",
  animationDuration: 400,
  filterNull: !0,
  useTranslate3d: !1,
};
var S3 = Pr,
  O3 = function () {
    return S3.Date.now();
  },
  A3 = O3,
  k3 = /\s/;
function E3(e) {
  for (var t = e.length; t-- && k3.test(e.charAt(t)); );
  return t;
}
var T3 = E3,
  P3 = T3,
  $3 = /^\s+/;
function C3(e) {
  return e && e.slice(0, P3(e) + 1).replace($3, "");
}
var M3 = C3,
  I3 = M3,
  vm = Ht,
  N3 = oa,
  ym = 0 / 0,
  R3 = /^[-+]0x[0-9a-f]+$/i,
  j3 = /^0b[01]+$/i,
  D3 = /^0o[0-7]+$/i,
  L3 = parseInt;
function F3(e) {
  if (typeof e == "number") return e;
  if (N3(e)) return ym;
  if (vm(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = vm(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = I3(e);
  var r = j3.test(e);
  return r || D3.test(e) ? L3(e.slice(2), r ? 2 : 8) : R3.test(e) ? ym : +e;
}
var Dw = F3,
  z3 = Ht,
  nf = A3,
  gm = Dw,
  B3 = "Expected a function",
  U3 = Math.max,
  W3 = Math.min;
function H3(e, t, r) {
  var n,
    i,
    a,
    o,
    u,
    l,
    s = 0,
    c = !1,
    f = !1,
    h = !0;
  if (typeof e != "function") throw new TypeError(B3);
  (t = gm(t) || 0),
    z3(r) &&
      ((c = !!r.leading),
      (f = "maxWait" in r),
      (a = f ? U3(gm(r.maxWait) || 0, t) : a),
      (h = "trailing" in r ? !!r.trailing : h));
  function x(b) {
    var S = n,
      O = i;
    return (n = i = void 0), (s = b), (o = e.apply(O, S)), o;
  }
  function v(b) {
    return (s = b), (u = setTimeout(p, t)), c ? x(b) : o;
  }
  function d(b) {
    var S = b - l,
      O = b - s,
      A = t - S;
    return f ? W3(A, a - O) : A;
  }
  function _(b) {
    var S = b - l,
      O = b - s;
    return l === void 0 || S >= t || S < 0 || (f && O >= a);
  }
  function p() {
    var b = nf();
    if (_(b)) return m(b);
    u = setTimeout(p, d(b));
  }
  function m(b) {
    return (u = void 0), h && n ? x(b) : ((n = i = void 0), o);
  }
  function g() {
    u !== void 0 && clearTimeout(u), (s = 0), (n = l = i = u = void 0);
  }
  function y() {
    return u === void 0 ? o : m(nf());
  }
  function w() {
    var b = nf(),
      S = _(b);
    if (((n = arguments), (i = this), (l = b), S)) {
      if (u === void 0) return v(l);
      if (f) return clearTimeout(u), (u = setTimeout(p, t)), x(l);
    }
    return u === void 0 && (u = setTimeout(p, t)), o;
  }
  return (w.cancel = g), (w.flush = y), w;
}
var Lw = H3,
  Fw = {},
  zw = (function () {
    if (typeof Map != "undefined") return Map;
    function e(t, r) {
      var n = -1;
      return (
        t.some(function (i, a) {
          return i[0] === r ? ((n = a), !0) : !1;
        }),
        n
      );
    }
    return (function () {
      function t() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (r) {
          var n = e(this.__entries__, r),
            i = this.__entries__[n];
          return i && i[1];
        }),
        (t.prototype.set = function (r, n) {
          var i = e(this.__entries__, r);
          ~i ? (this.__entries__[i][1] = n) : this.__entries__.push([r, n]);
        }),
        (t.prototype.delete = function (r) {
          var n = this.__entries__,
            i = e(n, r);
          ~i && n.splice(i, 1);
        }),
        (t.prototype.has = function (r) {
          return !!~e(this.__entries__, r);
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (t.prototype.forEach = function (r, n) {
          n === void 0 && (n = null);
          for (var i = 0, a = this.__entries__; i < a.length; i++) {
            var o = a[i];
            r.call(n, o[1], o[0]);
          }
        }),
        t
      );
    })();
  })(),
  Yh =
    typeof window != "undefined" &&
    typeof document != "undefined" &&
    window.document === document,
  ql = (function () {
    return typeof global != "undefined" && global.Math === Math
      ? global
      : typeof self != "undefined" && self.Math === Math
      ? self
      : typeof window != "undefined" && window.Math === Math
      ? window
      : Function("return this")();
  })(),
  V3 = (function () {
    return typeof requestAnimationFrame == "function"
      ? requestAnimationFrame.bind(ql)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now());
          }, 1e3 / 60);
        };
  })(),
  q3 = 2;
function G3(e, t) {
  var r = !1,
    n = !1,
    i = 0;
  function a() {
    r && ((r = !1), e()), n && u();
  }
  function o() {
    V3(a);
  }
  function u() {
    var l = Date.now();
    if (r) {
      if (l - i < q3) return;
      n = !0;
    } else (r = !0), (n = !1), setTimeout(o, t);
    i = l;
  }
  return u;
}
var K3 = 20,
  X3 = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
  Y3 = typeof MutationObserver != "undefined",
  Q3 = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = G3(this.refresh.bind(this), K3));
    }
    return (
      (e.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
          this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function (t) {
        var r = this.observers_,
          n = r.indexOf(t);
        ~n && r.splice(n, 1),
          !r.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function () {
        var t = this.updateObservers_();
        t && this.refresh();
      }),
      (e.prototype.updateObservers_ = function () {
        var t = this.observers_.filter(function (r) {
          return r.gatherActive(), r.hasActive();
        });
        return (
          t.forEach(function (r) {
            return r.broadcastActive();
          }),
          t.length > 0
        );
      }),
      (e.prototype.connect_ = function () {
        !Yh ||
          this.connected_ ||
          (document.addEventListener("transitionend", this.onTransitionEnd_),
          window.addEventListener("resize", this.refresh),
          Y3
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener("DOMSubtreeModified", this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function () {
        !Yh ||
          !this.connected_ ||
          (document.removeEventListener("transitionend", this.onTransitionEnd_),
          window.removeEventListener("resize", this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener("DOMSubtreeModified", this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function (t) {
        var r = t.propertyName,
          n = r === void 0 ? "" : r,
          i = X3.some(function (a) {
            return !!~n.indexOf(a);
          });
        i && this.refresh();
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  Bw = function (e, t) {
    for (var r = 0, n = Object.keys(t); r < n.length; r++) {
      var i = n[r];
      Object.defineProperty(e, i, {
        value: t[i],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return e;
  },
  Xi = function (e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || ql;
  },
  Uw = Qs(0, 0, 0, 0);
function Gl(e) {
  return parseFloat(e) || 0;
}
function mm(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  return t.reduce(function (n, i) {
    var a = e["border-" + i + "-width"];
    return n + Gl(a);
  }, 0);
}
function J3(e) {
  for (
    var t = ["top", "right", "bottom", "left"], r = {}, n = 0, i = t;
    n < i.length;
    n++
  ) {
    var a = i[n],
      o = e["padding-" + a];
    r[a] = Gl(o);
  }
  return r;
}
function Z3(e) {
  var t = e.getBBox();
  return Qs(0, 0, t.width, t.height);
}
function e4(e) {
  var t = e.clientWidth,
    r = e.clientHeight;
  if (!t && !r) return Uw;
  var n = Xi(e).getComputedStyle(e),
    i = J3(n),
    a = i.left + i.right,
    o = i.top + i.bottom,
    u = Gl(n.width),
    l = Gl(n.height);
  if (
    (n.boxSizing === "border-box" &&
      (Math.round(u + a) !== t && (u -= mm(n, "left", "right") + a),
      Math.round(l + o) !== r && (l -= mm(n, "top", "bottom") + o)),
    !r4(e))
  ) {
    var s = Math.round(u + a) - t,
      c = Math.round(l + o) - r;
    Math.abs(s) !== 1 && (u -= s), Math.abs(c) !== 1 && (l -= c);
  }
  return Qs(i.left, i.top, u, l);
}
var t4 = (function () {
  return typeof SVGGraphicsElement != "undefined"
    ? function (e) {
        return e instanceof Xi(e).SVGGraphicsElement;
      }
    : function (e) {
        return e instanceof Xi(e).SVGElement && typeof e.getBBox == "function";
      };
})();
function r4(e) {
  return e === Xi(e).document.documentElement;
}
function n4(e) {
  return Yh ? (t4(e) ? Z3(e) : e4(e)) : Uw;
}
function i4(e) {
  var t = e.x,
    r = e.y,
    n = e.width,
    i = e.height,
    a = typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object,
    o = Object.create(a.prototype);
  return (
    Bw(o, {
      x: t,
      y: r,
      width: n,
      height: i,
      top: r,
      right: t + n,
      bottom: i + r,
      left: t,
    }),
    o
  );
}
function Qs(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var a4 = (function () {
    function e(t) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = Qs(0, 0, 0, 0)),
        (this.target = t);
    }
    return (
      (e.prototype.isActive = function () {
        var t = n4(this.target);
        return (
          (this.contentRect_ = t),
          t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        );
      }),
      (e.prototype.broadcastRect = function () {
        var t = this.contentRect_;
        return (
          (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
        );
      }),
      e
    );
  })(),
  o4 = (function () {
    function e(t, r) {
      var n = i4(r);
      Bw(this, { target: t, contentRect: n });
    }
    return e;
  })(),
  u4 = (function () {
    function e(t, r, n) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new zw()),
        typeof t != "function")
      )
        throw new TypeError(
          "The callback provided as parameter 1 is not a function."
        );
      (this.callback_ = t), (this.controller_ = r), (this.callbackCtx_ = n);
    }
    return (
      (e.prototype.observe = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
          if (!(t instanceof Xi(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var r = this.observations_;
          r.has(t) ||
            (r.set(t, new a4(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
          if (!(t instanceof Xi(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var r = this.observations_;
          !r.has(t) ||
            (r.delete(t), r.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function () {
        var t = this;
        this.clearActive(),
          this.observations_.forEach(function (r) {
            r.isActive() && t.activeObservations_.push(r);
          });
      }),
      (e.prototype.broadcastActive = function () {
        if (!!this.hasActive()) {
          var t = this.callbackCtx_,
            r = this.activeObservations_.map(function (n) {
              return new o4(n.target, n.broadcastRect());
            });
          this.callback_.call(t, r, t), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  Ww = typeof WeakMap != "undefined" ? new WeakMap() : new zw(),
  Hw = (function () {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = Q3.getInstance(),
        n = new u4(t, r, this);
      Ww.set(this, n);
    }
    return e;
  })();
["observe", "unobserve", "disconnect"].forEach(function (e) {
  Hw.prototype[e] = function () {
    var t;
    return (t = Ww.get(this))[e].apply(t, arguments);
  };
});
var l4 = (function () {
    return typeof ql.ResizeObserver != "undefined" ? ql.ResizeObserver : Hw;
  })(),
  s4 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: l4 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  c4 = GS(s4);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = c4,
    r = V.exports,
    n = Gd.exports;
  function i(C) {
    return C && typeof C == "object" && "default" in C ? C : { default: C };
  }
  function a(C) {
    if (C && C.__esModule) return C;
    var K = Object.create(null);
    return (
      C &&
        Object.keys(C).forEach(function (Q) {
          if (Q !== "default") {
            var B = Object.getOwnPropertyDescriptor(C, Q);
            Object.defineProperty(
              K,
              Q,
              B.get
                ? B
                : {
                    enumerable: !0,
                    get: function () {
                      return C[Q];
                    },
                  }
            );
          }
        }),
      (K.default = C),
      Object.freeze(K)
    );
  }
  var o = i(t),
    u = a(r);
  /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var l =
    function (C, K) {
      return (
        (l =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (Q, B) {
              Q.__proto__ = B;
            }) ||
          function (Q, B) {
            for (var ue in B)
              Object.prototype.hasOwnProperty.call(B, ue) && (Q[ue] = B[ue]);
          }),
        l(C, K)
      );
    };
  function s(C, K) {
    if (typeof K != "function" && K !== null)
      throw new TypeError(
        "Class extends value " + String(K) + " is not a constructor or null"
      );
    l(C, K);
    function Q() {
      this.constructor = C;
    }
    C.prototype =
      K === null ? Object.create(K) : ((Q.prototype = K.prototype), new Q());
  }
  var c = function () {
    return (
      (c =
        Object.assign ||
        function (K) {
          for (var Q, B = 1, ue = arguments.length; B < ue; B++) {
            Q = arguments[B];
            for (var Se in Q)
              Object.prototype.hasOwnProperty.call(Q, Se) && (K[Se] = Q[Se]);
          }
          return K;
        }),
      c.apply(this, arguments)
    );
  };
  function f(C, K) {
    var Q = {};
    for (var B in C)
      Object.prototype.hasOwnProperty.call(C, B) &&
        K.indexOf(B) < 0 &&
        (Q[B] = C[B]);
    if (C != null && typeof Object.getOwnPropertySymbols == "function")
      for (var ue = 0, B = Object.getOwnPropertySymbols(C); ue < B.length; ue++)
        K.indexOf(B[ue]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(C, B[ue]) &&
          (Q[B[ue]] = C[B[ue]]);
    return Q;
  }
  var h =
    typeof globalThis != "undefined"
      ? globalThis
      : typeof window != "undefined"
      ? window
      : typeof nn != "undefined"
      ? nn
      : typeof self != "undefined"
      ? self
      : {};
  function x(C) {
    var K = typeof C;
    return C != null && (K == "object" || K == "function");
  }
  var v = x,
    d = typeof h == "object" && h && h.Object === Object && h,
    _ = d,
    p = _,
    m = typeof self == "object" && self && self.Object === Object && self,
    g = p || m || Function("return this")(),
    y = g,
    w = y,
    b = function () {
      return w.Date.now();
    },
    S = b,
    O = /\s/;
  function A(C) {
    for (var K = C.length; K-- && O.test(C.charAt(K)); );
    return K;
  }
  var E = A,
    k = E,
    $ = /^\s+/;
  function P(C) {
    return C && C.slice(0, k(C) + 1).replace($, "");
  }
  var M = P,
    D = y,
    N = D.Symbol,
    W = N,
    T = W,
    R = Object.prototype,
    U = R.hasOwnProperty,
    Y = R.toString,
    X = T ? T.toStringTag : void 0;
  function le(C) {
    var K = U.call(C, X),
      Q = C[X];
    try {
      C[X] = void 0;
      var B = !0;
    } catch {}
    var ue = Y.call(C);
    return B && (K ? (C[X] = Q) : delete C[X]), ue;
  }
  var ce = le,
    je = Object.prototype,
    Pe = je.toString;
  function yt(C) {
    return Pe.call(C);
  }
  var ne = yt,
    z = W,
    J = ce,
    ee = ne,
    j = "[object Null]",
    pe = "[object Undefined]",
    ie = z ? z.toStringTag : void 0;
  function $e(C) {
    return C == null
      ? C === void 0
        ? pe
        : j
      : ie && ie in Object(C)
      ? J(C)
      : ee(C);
  }
  var ze = $e;
  function qt(C) {
    return C != null && typeof C == "object";
  }
  var $r = qt,
    Vo = ze,
    Tn = $r,
    Pn = "[object Symbol]";
  function oi(C) {
    return typeof C == "symbol" || (Tn(C) && Vo(C) == Pn);
  }
  var ui = oi,
    qo = M,
    Go = v,
    Ko = ui,
    Rv = 0 / 0,
    xS = /^[-+]0x[0-9a-f]+$/i,
    _S = /^0b[01]+$/i,
    wS = /^0o[0-7]+$/i,
    bS = parseInt;
  function SS(C) {
    if (typeof C == "number") return C;
    if (Ko(C)) return Rv;
    if (Go(C)) {
      var K = typeof C.valueOf == "function" ? C.valueOf() : C;
      C = Go(K) ? K + "" : K;
    }
    if (typeof C != "string") return C === 0 ? C : +C;
    C = qo(C);
    var Q = _S.test(C);
    return Q || wS.test(C) ? bS(C.slice(2), Q ? 2 : 8) : xS.test(C) ? Rv : +C;
  }
  var OS = SS,
    AS = v,
    _c = S,
    jv = OS,
    kS = "Expected a function",
    ES = Math.max,
    TS = Math.min;
  function PS(C, K, Q) {
    var B,
      ue,
      Se,
      Ce,
      he,
      Ye,
      Be = 0,
      _e = !1,
      De = !1,
      ve = !0;
    if (typeof C != "function") throw new TypeError(kS);
    (K = jv(K) || 0),
      AS(Q) &&
        ((_e = !!Q.leading),
        (De = "maxWait" in Q),
        (Se = De ? ES(jv(Q.maxWait) || 0, K) : Se),
        (ve = "trailing" in Q ? !!Q.trailing : ve));
    function Ct(Ve) {
      var ur = B,
        lr = ue;
      return (B = ue = void 0), (Be = Ve), (Ce = C.apply(lr, ur)), Ce;
    }
    function pr(Ve) {
      return (Be = Ve), (he = setTimeout(or, K)), _e ? Ct(Ve) : Ce;
    }
    function fa(Ve) {
      var ur = Ve - Ye,
        lr = Ve - Be,
        pa = K - ur;
      return De ? TS(pa, Se - lr) : pa;
    }
    function Cr(Ve) {
      var ur = Ve - Ye,
        lr = Ve - Be;
      return Ye === void 0 || ur >= K || ur < 0 || (De && lr >= Se);
    }
    function or() {
      var Ve = _c();
      if (Cr(Ve)) return Xr(Ve);
      he = setTimeout(or, fa(Ve));
    }
    function Xr(Ve) {
      return (he = void 0), ve && B ? Ct(Ve) : ((B = ue = void 0), Ce);
    }
    function ha() {
      he !== void 0 && clearTimeout(he), (Be = 0), (B = Ye = ue = he = void 0);
    }
    function da() {
      return he === void 0 ? Ce : Xr(_c());
    }
    function $n() {
      var Ve = _c(),
        ur = Cr(Ve);
      if (((B = arguments), (ue = this), (Ye = Ve), ur)) {
        if (he === void 0) return pr(Ye);
        if (De) return clearTimeout(he), (he = setTimeout(or, K)), Ct(Ye);
      }
      return he === void 0 && (he = setTimeout(or, K)), Ce;
    }
    return ($n.cancel = ha), ($n.flush = da), $n;
  }
  var Dv = PS,
    $S = Dv,
    CS = v,
    MS = "Expected a function";
  function IS(C, K, Q) {
    var B = !0,
      ue = !0;
    if (typeof C != "function") throw new TypeError(MS);
    return (
      CS(Q) &&
        ((B = "leading" in Q ? !!Q.leading : B),
        (ue = "trailing" in Q ? !!Q.trailing : ue)),
      $S(C, K, { leading: B, maxWait: K, trailing: ue })
    );
  }
  var NS = IS,
    Lv = function (C, K, Q, B) {
      switch (K) {
        case "debounce":
          return Dv(C, Q, B);
        case "throttle":
          return NS(C, Q, B);
        default:
          return C;
      }
    },
    wc = function (C) {
      return typeof C == "function";
    },
    Kr = function () {
      return typeof window == "undefined";
    },
    Fv = function (C) {
      return C instanceof Element || C instanceof HTMLDocument;
    },
    zv = function (C, K, Q, B) {
      return function (ue) {
        var Se = ue.width,
          Ce = ue.height;
        K(function (he) {
          return (he.width === Se && he.height === Ce) ||
            (he.width === Se && !B) ||
            (he.height === Ce && !Q)
            ? he
            : (C && wc(C) && C(Se, Ce), { width: Se, height: Ce });
        });
      };
    },
    Bv = (function (C) {
      s(K, C);
      function K(Q) {
        var B = C.call(this, Q) || this;
        (B.cancelHandler = function () {
          B.resizeHandler &&
            B.resizeHandler.cancel &&
            (B.resizeHandler.cancel(), (B.resizeHandler = null));
        }),
          (B.attachObserver = function () {
            var Be = B.props,
              _e = Be.targetRef,
              De = Be.observerOptions;
            if (!Kr()) {
              _e && _e.current && (B.targetRef.current = _e.current);
              var ve = B.getElement();
              !ve ||
                (B.observableElement && B.observableElement === ve) ||
                ((B.observableElement = ve), B.resizeObserver.observe(ve, De));
            }
          }),
          (B.getElement = function () {
            var Be = B.props,
              _e = Be.querySelector,
              De = Be.targetDomEl;
            if (Kr()) return null;
            if (_e) return document.querySelector(_e);
            if (De && Fv(De)) return De;
            if (B.targetRef && Fv(B.targetRef.current))
              return B.targetRef.current;
            var ve = n.findDOMNode(B);
            if (!ve) return null;
            var Ct = B.getRenderType();
            switch (Ct) {
              case "renderProp":
                return ve;
              case "childFunction":
                return ve;
              case "child":
                return ve;
              case "childArray":
                return ve;
              default:
                return ve.parentElement;
            }
          }),
          (B.createResizeHandler = function (Be) {
            var _e = B.props,
              De = _e.handleWidth,
              ve = De === void 0 ? !0 : De,
              Ct = _e.handleHeight,
              pr = Ct === void 0 ? !0 : Ct,
              fa = _e.onResize;
            if (!(!ve && !pr)) {
              var Cr = zv(fa, B.setState.bind(B), ve, pr);
              Be.forEach(function (or) {
                var Xr = (or && or.contentRect) || {},
                  ha = Xr.width,
                  da = Xr.height,
                  $n = !B.skipOnMount && !Kr();
                $n && Cr({ width: ha, height: da }), (B.skipOnMount = !1);
              });
            }
          }),
          (B.getRenderType = function () {
            var Be = B.props,
              _e = Be.render,
              De = Be.children;
            return wc(_e)
              ? "renderProp"
              : wc(De)
              ? "childFunction"
              : r.isValidElement(De)
              ? "child"
              : Array.isArray(De)
              ? "childArray"
              : "parent";
          });
        var ue = Q.skipOnMount,
          Se = Q.refreshMode,
          Ce = Q.refreshRate,
          he = Ce === void 0 ? 1e3 : Ce,
          Ye = Q.refreshOptions;
        return (
          (B.state = { width: void 0, height: void 0 }),
          (B.skipOnMount = ue),
          (B.targetRef = r.createRef()),
          (B.observableElement = null),
          Kr() ||
            ((B.resizeHandler = Lv(B.createResizeHandler, Se, he, Ye)),
            (B.resizeObserver = new o.default(B.resizeHandler))),
          B
        );
      }
      return (
        (K.prototype.componentDidMount = function () {
          this.attachObserver();
        }),
        (K.prototype.componentDidUpdate = function () {
          this.attachObserver();
        }),
        (K.prototype.componentWillUnmount = function () {
          Kr() || (this.resizeObserver.disconnect(), this.cancelHandler());
        }),
        (K.prototype.render = function () {
          var Q = this.props,
            B = Q.render,
            ue = Q.children,
            Se = Q.nodeType,
            Ce = Se === void 0 ? "div" : Se,
            he = this.state,
            Ye = he.width,
            Be = he.height,
            _e = { width: Ye, height: Be, targetRef: this.targetRef },
            De = this.getRenderType(),
            ve;
          switch (De) {
            case "renderProp":
              return B && B(_e);
            case "childFunction":
              return (ve = ue), ve(_e);
            case "child":
              if (((ve = ue), ve.type && typeof ve.type == "string")) {
                _e.targetRef;
                var Ct = f(_e, ["targetRef"]);
                return r.cloneElement(ve, Ct);
              }
              return r.cloneElement(ve, _e);
            case "childArray":
              return (
                (ve = ue),
                ve.map(function (pr) {
                  return !!pr && r.cloneElement(pr, _e);
                })
              );
            default:
              return u.createElement(Ce, null);
          }
        }),
        K
      );
    })(r.PureComponent);
  function RS(C, K) {
    K === void 0 && (K = {});
    var Q = (function (Se) {
      s(Ce, Se);
      function Ce() {
        var he = (Se !== null && Se.apply(this, arguments)) || this;
        return (he.ref = r.createRef()), he;
      }
      return (
        (Ce.prototype.render = function () {
          var he = this.props,
            Ye = he.forwardedRef,
            Be = f(he, ["forwardedRef"]),
            _e = Ye != null ? Ye : this.ref;
          return u.createElement(
            Bv,
            c({}, K, { targetRef: _e }),
            u.createElement(C, c({ targetRef: _e }, Be))
          );
        }),
        Ce
      );
    })(r.Component);
    function B(Se, Ce) {
      return u.createElement(Q, c({}, Se, { forwardedRef: Ce }));
    }
    var ue = C.displayName || C.name;
    return (
      (B.displayName = "withResizeDetector(".concat(ue, ")")), r.forwardRef(B)
    );
  }
  var jS = Kr() ? r.useEffect : r.useLayoutEffect;
  function DS(C) {
    C === void 0 && (C = {});
    var K = C.skipOnMount,
      Q = K === void 0 ? !1 : K,
      B = C.refreshMode,
      ue = C.refreshRate,
      Se = ue === void 0 ? 1e3 : ue,
      Ce = C.refreshOptions,
      he = C.handleWidth,
      Ye = he === void 0 ? !0 : he,
      Be = C.handleHeight,
      _e = Be === void 0 ? !0 : Be,
      De = C.targetRef,
      ve = C.observerOptions,
      Ct = C.onResize,
      pr = r.useRef(Q),
      fa = r.useRef(null),
      Cr = De != null ? De : fa,
      or = r.useRef(),
      Xr = r.useState({ width: void 0, height: void 0 }),
      ha = Xr[0],
      da = Xr[1];
    return (
      jS(
        function () {
          if (!Kr()) {
            var $n = zv(Ct, da, Ye, _e),
              Ve = function (lr) {
                (!Ye && !_e) ||
                  lr.forEach(function (pa) {
                    var Uv = (pa && pa.contentRect) || {},
                      LS = Uv.width,
                      FS = Uv.height,
                      zS = !pr.current && !Kr();
                    zS && $n({ width: LS, height: FS }), (pr.current = !1);
                  });
              };
            or.current = Lv(Ve, B, Se, Ce);
            var ur = new o.default(or.current);
            return (
              Cr.current && ur.observe(Cr.current, ve),
              function () {
                ur.disconnect();
                var lr = or.current;
                lr && lr.cancel && lr.cancel();
              }
            );
          }
        },
        [B, Se, Ce, Ye, _e, Ct, ve, Cr.current]
      ),
      c({ ref: Cr }, ha)
    );
  }
  (e.default = Bv), (e.useResizeDetector = DS), (e.withResizeDetector = RS);
})(Fw);
var f4 = A1(Fw),
  Mi = function (t, r) {
    for (
      var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2;
      a < n;
      a++
    )
      i[a - 2] = arguments[a];
  };
function xm(e, t) {
  return v4(e) || p4(e, t) || d4(e, t) || h4();
}
function h4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function d4(e, t) {
  if (!!e) {
    if (typeof e == "string") return _m(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return _m(e, t);
  }
}
function _m(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function p4(e, t) {
  if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (l) {
      (i = !0), (a = l);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function v4(e) {
  if (Array.isArray(e)) return e;
}
var y4 = V.exports.forwardRef(function (e, t) {
    var r = e.aspect,
      n = e.width,
      i = n === void 0 ? "100%" : n,
      a = e.height,
      o = a === void 0 ? "100%" : a,
      u = e.minWidth,
      l = e.minHeight,
      s = e.maxHeight,
      c = e.children,
      f = e.debounce,
      h = f === void 0 ? 0 : f,
      x = e.id,
      v = e.className,
      d = V.exports.useState({ containerWidth: -1, containerHeight: -1 }),
      _ = xm(d, 2),
      p = _[0],
      m = _[1],
      g = V.exports.useRef(null);
    V.exports.useImperativeHandle(
      t,
      function () {
        return g;
      },
      [g]
    );
    var y = V.exports.useState(!1),
      w = xm(y, 2),
      b = w[0],
      S = w[1],
      O = function () {
        return g.current
          ? {
              containerWidth: g.current.clientWidth,
              containerHeight: g.current.clientHeight,
            }
          : null;
      },
      A = function () {
        if (!!b) {
          var M = O();
          if (M) {
            var D = p.containerWidth,
              N = p.containerHeight,
              W = M.containerWidth,
              T = M.containerHeight;
            (W !== D || T !== N) &&
              m({ containerWidth: W, containerHeight: T });
          }
        }
      },
      E = h > 0 ? Lw(A, h) : A,
      k = function () {
        var M = p.containerWidth,
          D = p.containerHeight;
        if (M < 0 || D < 0) return null;
        Mi(
          Wn(i) || Wn(o),
          `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
          i,
          o
        ),
          Mi(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
        var N = Wn(i) ? M : i,
          W = Wn(o) ? D : o;
        return (
          r &&
            r > 0 &&
            (N ? (W = N / r) : W && (N = W * r), s && W > s && (W = s)),
          Mi(
            N > 0 || W > 0,
            `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
            N,
            W,
            i,
            o,
            u,
            l,
            r
          ),
          V.exports.cloneElement(c, { width: N, height: W })
        );
      };
    V.exports.useEffect(
      function () {
        if (b) {
          var P = O();
          P && m(P);
        }
      },
      [b]
    ),
      V.exports.useEffect(function () {
        S(!0);
      }, []);
    var $ = { width: i, height: o, minWidth: u, minHeight: l, maxHeight: s };
    return F(f4, {
      handleWidth: !0,
      handleHeight: !0,
      onResize: E,
      targetRef: g,
      children: F(
        "div",
        ge(ae({}, x != null ? { id: "".concat(x) } : {}), {
          className: Te("recharts-responsive-container", v),
          style: $,
          ref: g,
          children: k(),
        })
      ),
    });
  }),
  Qh = { exports: {} },
  af = "(".charCodeAt(0),
  of = ")".charCodeAt(0),
  mu = "'".charCodeAt(0),
  uf = '"'.charCodeAt(0),
  lf = "\\".charCodeAt(0),
  xu = "/".charCodeAt(0),
  sf = ",".charCodeAt(0),
  cf = ":".charCodeAt(0),
  wm = "*".charCodeAt(0),
  g4 = function (e) {
    for (
      var t = [],
        r = e,
        n,
        i,
        a,
        o,
        u,
        l,
        s,
        c = 0,
        f = r.charCodeAt(c),
        h = r.length,
        x = [{ nodes: t }],
        v = 0,
        d,
        _ = "",
        p = "",
        m = "";
      c < h;

    )
      if (f <= 32) {
        n = c;
        do (n += 1), (f = r.charCodeAt(n));
        while (f <= 32);
        (o = r.slice(c, n)),
          (a = t[t.length - 1]),
          f === of && v
            ? (m = o)
            : a && a.type === "div"
            ? (a.after = o)
            : f === sf || f === cf || (f === xu && r.charCodeAt(n + 1) !== wm)
            ? (p = o)
            : t.push({ type: "space", sourceIndex: c, value: o }),
          (c = n);
      } else if (f === mu || f === uf) {
        (n = c),
          (i = f === mu ? "'" : '"'),
          (o = { type: "string", sourceIndex: c, quote: i });
        do
          if (((u = !1), (n = r.indexOf(i, n + 1)), ~n))
            for (l = n; r.charCodeAt(l - 1) === lf; ) (l -= 1), (u = !u);
          else (r += i), (n = r.length - 1), (o.unclosed = !0);
        while (u);
        (o.value = r.slice(c + 1, n)),
          t.push(o),
          (c = n + 1),
          (f = r.charCodeAt(c));
      } else if (f === xu && r.charCodeAt(c + 1) === wm)
        (o = { type: "comment", sourceIndex: c }),
          (n = r.indexOf("*/", c)),
          n === -1 && ((o.unclosed = !0), (n = r.length)),
          (o.value = r.slice(c + 2, n)),
          t.push(o),
          (c = n + 2),
          (f = r.charCodeAt(c));
      else if (f === xu || f === sf || f === cf)
        (o = r[c]),
          t.push({
            type: "div",
            sourceIndex: c - p.length,
            value: o,
            before: p,
            after: "",
          }),
          (p = ""),
          (c += 1),
          (f = r.charCodeAt(c));
      else if (af === f) {
        n = c;
        do (n += 1), (f = r.charCodeAt(n));
        while (f <= 32);
        if (
          ((o = {
            type: "function",
            sourceIndex: c - _.length,
            value: _,
            before: r.slice(c + 1, n),
          }),
          (c = n),
          _ === "url" && f !== mu && f !== uf)
        ) {
          n -= 1;
          do
            if (((u = !1), (n = r.indexOf(")", n + 1)), ~n))
              for (l = n; r.charCodeAt(l - 1) === lf; ) (l -= 1), (u = !u);
            else (r += ")"), (n = r.length - 1), (o.unclosed = !0);
          while (u);
          s = n;
          do (s -= 1), (f = r.charCodeAt(s));
          while (f <= 32);
          c !== s + 1
            ? (o.nodes = [
                { type: "word", sourceIndex: c, value: r.slice(c, s + 1) },
              ])
            : (o.nodes = []),
            o.unclosed && s + 1 !== n
              ? ((o.after = ""),
                o.nodes.push({
                  type: "space",
                  sourceIndex: s + 1,
                  value: r.slice(s + 1, n),
                }))
              : (o.after = r.slice(s + 1, n)),
            (c = n + 1),
            (f = r.charCodeAt(c)),
            t.push(o);
        } else
          (v += 1),
            (o.after = ""),
            t.push(o),
            x.push(o),
            (t = o.nodes = []),
            (d = o);
        _ = "";
      } else if (of === f && v)
        (c += 1),
          (f = r.charCodeAt(c)),
          (d.after = m),
          (m = ""),
          (v -= 1),
          x.pop(),
          (d = x[v]),
          (t = d.nodes);
      else {
        n = c;
        do f === lf && (n += 1), (n += 1), (f = r.charCodeAt(n));
        while (
          n < h &&
          !(
            f <= 32 ||
            f === mu ||
            f === uf ||
            f === sf ||
            f === cf ||
            f === xu ||
            f === af ||
            (f === of && v)
          )
        );
        (o = r.slice(c, n)),
          af === f
            ? (_ = o)
            : t.push({ type: "word", sourceIndex: c, value: o }),
          (c = n);
      }
    for (c = x.length - 1; c; c -= 1) x[c].unclosed = !0;
    return x[0].nodes;
  },
  m4 = function e(t, r, n) {
    var i, a, o, u;
    for (i = 0, a = t.length; i < a; i += 1)
      (o = t[i]),
        n || (u = r(o, i, t)),
        u !== !1 &&
          o.type === "function" &&
          Array.isArray(o.nodes) &&
          e(o.nodes, r, n),
        n && r(o, i, t);
  };
function bm(e, t) {
  var r = e.type,
    n = e.value,
    i,
    a;
  return t && (a = t(e)) !== void 0
    ? a
    : r === "word" || r === "space"
    ? n
    : r === "string"
    ? ((i = e.quote || ""), i + n + (e.unclosed ? "" : i))
    : r === "comment"
    ? "/*" + n + (e.unclosed ? "" : "*/")
    : r === "div"
    ? (e.before || "") + n + (e.after || "")
    : Array.isArray(e.nodes)
    ? ((i = Vw(e.nodes)),
      r !== "function"
        ? i
        : n +
          "(" +
          (e.before || "") +
          i +
          (e.after || "") +
          (e.unclosed ? "" : ")"))
    : n;
}
function Vw(e, t) {
  var r, n;
  if (Array.isArray(e)) {
    for (r = "", n = e.length - 1; ~n; n -= 1) r = bm(e[n], t) + r;
    return r;
  }
  return bm(e, t);
}
var x4 = Vw,
  _4 = "-".charCodeAt(0),
  w4 = "+".charCodeAt(0),
  b4 = ".".charCodeAt(0),
  S4 = "e".charCodeAt(0),
  O4 = "E".charCodeAt(0),
  A4 = function (e) {
    for (var t = 0, r = e.length, n = !1, i = -1, a = !1, o; t < r; ) {
      if (((o = e.charCodeAt(t)), o >= 48 && o <= 57)) a = !0;
      else if (o === S4 || o === O4) {
        if (i > -1) break;
        i = t;
      } else if (o === b4) {
        if (n) break;
        n = !0;
      } else if (o === w4 || o === _4) {
        if (t !== 0) break;
      } else break;
      t += 1;
    }
    return (
      i + 1 === t && t--, a ? { number: e.slice(0, t), unit: e.slice(t) } : !1
    );
  },
  k4 = g4,
  qw = m4,
  Gw = x4;
function xn(e) {
  return this instanceof xn ? ((this.nodes = k4(e)), this) : new xn(e);
}
xn.prototype.toString = function () {
  return Array.isArray(this.nodes) ? Gw(this.nodes) : "";
};
xn.prototype.walk = function (e, t) {
  return qw(this.nodes, e, t), this;
};
xn.unit = A4;
xn.walk = qw;
xn.stringify = Gw;
var E4 = xn,
  Kw = {};
(function (e) {
  var t = (function () {
    function r(h, x) {
      Object.defineProperty(this, "name", {
        enumerable: !1,
        writable: !1,
        value: "JisonParserError",
      }),
        h == null && (h = "???"),
        Object.defineProperty(this, "message", {
          enumerable: !1,
          writable: !0,
          value: h,
        }),
        (this.hash = x);
      var v;
      if (x && x.exception instanceof Error) {
        var d = x.exception;
        (this.message = d.message || h), (v = d.stack);
      }
      v ||
        (Error.hasOwnProperty("captureStackTrace")
          ? Error.captureStackTrace(this, this.constructor)
          : (v = new Error(h).stack)),
        v &&
          Object.defineProperty(this, "stack", {
            enumerable: !1,
            writable: !1,
            value: v,
          });
    }
    typeof Object.setPrototypeOf == "function"
      ? Object.setPrototypeOf(r.prototype, Error.prototype)
      : (r.prototype = Object.create(Error.prototype)),
      (r.prototype.constructor = r),
      (r.prototype.name = "JisonParserError");
    function n(h) {
      for (var x = [], v = h.pop, d = h.rule, _ = 0, p = v.length; _ < p; _++)
        x.push([v[_], d[_]]);
      return x;
    }
    function i(h) {
      for (var x = {}, v = h.idx, d = h.goto, _ = 0, p = v.length; _ < p; _++) {
        var m = v[_];
        x[m] = d[_];
      }
      return x;
    }
    function a(h) {
      for (
        var x = [],
          v = h.len,
          d = h.symbol,
          _ = h.type,
          p = h.state,
          m = h.mode,
          g = h.goto,
          y = 0,
          w = v.length;
        y < w;
        y++
      ) {
        for (var b = v[y], S = {}, O = 0; O < b; O++) {
          var A = d.shift();
          switch (_.shift()) {
            case 2:
              S[A] = [m.shift(), g.shift()];
              break;
            case 0:
              S[A] = p.shift();
              break;
            default:
              S[A] = [3];
          }
        }
        x.push(S);
      }
      return x;
    }
    function o(h, x, v) {
      v = v || 0;
      for (var d = 0; d < x; d++) this.push(h), (h += v);
    }
    function u(h, x) {
      for (h = this.length - h, x += h; h < x; h++) this.push(this[h]);
    }
    function l(h) {
      for (var x = [], v = 0, d = h.length; v < d; v++) {
        var _ = h[v];
        typeof _ == "function" ? (v++, _.apply(x, h[v])) : x.push(_);
      }
      return x;
    }
    var s = {
      trace: function () {},
      JisonParserError: r,
      yy: {},
      options: {
        type: "lalr",
        hasPartialLrUpgradeOnConflict: !0,
        errorRecoveryTokenDiscardCount: 3,
      },
      symbols_: {
        $accept: 0,
        $end: 1,
        ADD: 3,
        ANGLE: 16,
        CHS: 22,
        COMMA: 14,
        CSS_CPROP: 13,
        CSS_VAR: 12,
        DIV: 6,
        EMS: 20,
        EOF: 1,
        EXS: 21,
        FREQ: 18,
        LENGTH: 15,
        LPAREN: 7,
        MUL: 5,
        NESTED_CALC: 9,
        NUMBER: 11,
        PERCENTAGE: 28,
        PREFIX: 10,
        REMS: 23,
        RES: 19,
        RPAREN: 8,
        SUB: 4,
        TIME: 17,
        VHS: 24,
        VMAXS: 27,
        VMINS: 26,
        VWS: 25,
        css_value: 33,
        css_variable: 32,
        error: 2,
        expression: 29,
        math_expression: 30,
        value: 31,
      },
      terminals_: {
        1: "EOF",
        2: "error",
        3: "ADD",
        4: "SUB",
        5: "MUL",
        6: "DIV",
        7: "LPAREN",
        8: "RPAREN",
        9: "NESTED_CALC",
        10: "PREFIX",
        11: "NUMBER",
        12: "CSS_VAR",
        13: "CSS_CPROP",
        14: "COMMA",
        15: "LENGTH",
        16: "ANGLE",
        17: "TIME",
        18: "FREQ",
        19: "RES",
        20: "EMS",
        21: "EXS",
        22: "CHS",
        23: "REMS",
        24: "VHS",
        25: "VWS",
        26: "VMINS",
        27: "VMAXS",
        28: "PERCENTAGE",
      },
      TERROR: 2,
      EOF: 1,
      originalQuoteName: null,
      originalParseError: null,
      cleanupAfterParse: null,
      constructParseErrorInfo: null,
      yyMergeLocationInfo: null,
      __reentrant_call_depth: 0,
      __error_infos: [],
      __error_recovery_infos: [],
      quoteName: function (x) {
        return '"' + x + '"';
      },
      getSymbolName: function (x) {
        if (this.terminals_[x]) return this.terminals_[x];
        var v = this.symbols_;
        for (var d in v) if (v[d] === x) return d;
        return null;
      },
      describeSymbol: function (x) {
        if (
          x !== this.EOF &&
          this.terminal_descriptions_ &&
          this.terminal_descriptions_[x]
        )
          return this.terminal_descriptions_[x];
        if (x === this.EOF) return "end of input";
        var v = this.getSymbolName(x);
        return v ? this.quoteName(v) : null;
      },
      collect_expected_token_set: function (x, v) {
        var d = this.TERROR,
          _ = [],
          p = {};
        if (!v && this.state_descriptions_ && this.state_descriptions_[x])
          return [this.state_descriptions_[x]];
        for (var m in this.table[x])
          if (((m = +m), m !== d)) {
            var g = v ? m : this.describeSymbol(m);
            g && !p[g] && (_.push(g), (p[g] = !0));
          }
        return _;
      },
      productions_: n({
        pop: l([29, o, [30, 10], 31, 31, 32, 32, o, [33, 15]]),
        rule: l([2, o, [3, 5], 4, 7, o, [1, 4], 2, 4, 6, o, [1, 14], 2]),
      }),
      performAction: function (x, v, d) {
        var _ = this.yy;
        switch ((_.parser, _.lexer, x)) {
          case 0:
            this.$ = d[v - 1];
            break;
          case 1:
            return (this.$ = d[v - 1]), d[v - 1];
          case 2:
          case 3:
          case 4:
          case 5:
            this.$ = {
              type: "MathExpression",
              operator: d[v - 1],
              left: d[v - 2],
              right: d[v],
            };
            break;
          case 6:
            this.$ = d[v - 1];
            break;
          case 7:
            this.$ = { type: "Calc", value: d[v - 1] };
            break;
          case 8:
            this.$ = { type: "Calc", value: d[v - 1], prefix: d[v - 5] };
            break;
          case 9:
          case 10:
          case 11:
            this.$ = d[v];
            break;
          case 12:
            this.$ = { type: "Value", value: parseFloat(d[v]) };
            break;
          case 13:
            this.$ = { type: "Value", value: parseFloat(d[v]) * -1 };
            break;
          case 14:
            this.$ = { type: "CssVariable", value: d[v - 1] };
            break;
          case 15:
            this.$ = {
              type: "CssVariable",
              value: d[v - 3],
              fallback: d[v - 1],
            };
            break;
          case 16:
            this.$ = {
              type: "LengthValue",
              value: parseFloat(d[v]),
              unit: /[a-z]+/.exec(d[v])[0],
            };
            break;
          case 17:
            this.$ = {
              type: "AngleValue",
              value: parseFloat(d[v]),
              unit: /[a-z]+/.exec(d[v])[0],
            };
            break;
          case 18:
            this.$ = {
              type: "TimeValue",
              value: parseFloat(d[v]),
              unit: /[a-z]+/.exec(d[v])[0],
            };
            break;
          case 19:
            this.$ = {
              type: "FrequencyValue",
              value: parseFloat(d[v]),
              unit: /[a-z]+/.exec(d[v])[0],
            };
            break;
          case 20:
            this.$ = {
              type: "ResolutionValue",
              value: parseFloat(d[v]),
              unit: /[a-z]+/.exec(d[v])[0],
            };
            break;
          case 21:
            this.$ = { type: "EmValue", value: parseFloat(d[v]), unit: "em" };
            break;
          case 22:
            this.$ = { type: "ExValue", value: parseFloat(d[v]), unit: "ex" };
            break;
          case 23:
            this.$ = { type: "ChValue", value: parseFloat(d[v]), unit: "ch" };
            break;
          case 24:
            this.$ = { type: "RemValue", value: parseFloat(d[v]), unit: "rem" };
            break;
          case 25:
            this.$ = { type: "VhValue", value: parseFloat(d[v]), unit: "vh" };
            break;
          case 26:
            this.$ = { type: "VwValue", value: parseFloat(d[v]), unit: "vw" };
            break;
          case 27:
            this.$ = {
              type: "VminValue",
              value: parseFloat(d[v]),
              unit: "vmin",
            };
            break;
          case 28:
            this.$ = {
              type: "VmaxValue",
              value: parseFloat(d[v]),
              unit: "vmax",
            };
            break;
          case 29:
            this.$ = {
              type: "PercentageValue",
              value: parseFloat(d[v]),
              unit: "%",
            };
            break;
          case 30:
            var p = d[v];
            (p.value *= -1), (this.$ = p);
            break;
        }
      },
      table: a({
        len: l([
          24,
          1,
          5,
          23,
          1,
          18,
          o,
          [0, 3],
          1,
          o,
          [0, 16],
          o,
          [23, 4],
          u,
          [28, 3],
          0,
          0,
          16,
          1,
          6,
          6,
          o,
          [0, 3],
          5,
          1,
          2,
          u,
          [37, 3],
          u,
          [20, 3],
          5,
          0,
          0,
        ]),
        symbol: l([
          4,
          7,
          9,
          11,
          12,
          o,
          [15, 19, 1],
          1,
          1,
          o,
          [3, 4, 1],
          u,
          [30, 19],
          u,
          [29, 4],
          7,
          4,
          10,
          11,
          u,
          [22, 14],
          u,
          [19, 3],
          u,
          [43, 22],
          u,
          [23, 69],
          u,
          [139, 4],
          8,
          u,
          [51, 24],
          4,
          u,
          [138, 15],
          13,
          u,
          [186, 5],
          8,
          u,
          [6, 6],
          u,
          [5, 5],
          9,
          8,
          14,
          u,
          [159, 47],
          u,
          [60, 10],
        ]),
        type: l([
          o,
          [2, 19],
          o,
          [0, 5],
          1,
          o,
          [2, 24],
          o,
          [0, 4],
          u,
          [22, 19],
          u,
          [43, 42],
          u,
          [23, 70],
          u,
          [28, 25],
          u,
          [45, 25],
          u,
          [113, 54],
        ]),
        state: l([
          1,
          2,
          8,
          6,
          7,
          30,
          u,
          [4, 3],
          33,
          37,
          u,
          [5, 3],
          38,
          u,
          [4, 3],
          39,
          u,
          [4, 3],
          40,
          u,
          [4, 3],
          42,
          u,
          [21, 4],
          50,
          u,
          [5, 3],
          51,
          u,
          [4, 3],
        ]),
        mode: l([o, [1, 179], o, [2, 3], u, [5, 5], u, [6, 4], o, [1, 57]]),
        goto: l([
          5,
          3,
          4,
          24,
          o,
          [9, 15, 1],
          o,
          [25, 5, 1],
          u,
          [24, 19],
          31,
          35,
          32,
          34,
          u,
          [18, 14],
          36,
          u,
          [38, 19],
          u,
          [19, 57],
          u,
          [118, 4],
          41,
          u,
          [24, 19],
          43,
          35,
          u,
          [16, 14],
          44,
          o,
          [2, 3],
          28,
          29,
          2,
          o,
          [3, 3],
          28,
          29,
          3,
          u,
          [53, 4],
          o,
          [45, 5, 1],
          u,
          [100, 42],
          52,
          u,
          [5, 4],
          53,
        ]),
      }),
      defaultActions: i({
        idx: l([6, 7, 8, o, [10, 16, 1], 33, 34, 39, 40, 41, 45, 47, 52, 53]),
        goto: l([
          9,
          10,
          11,
          o,
          [16, 14, 1],
          12,
          1,
          30,
          13,
          o,
          [4, 4, 1],
          14,
          15,
          8,
        ]),
      }),
      parseError: function (x, v, d) {
        if (v.recoverable)
          typeof this.trace == "function" && this.trace(x), v.destroy();
        else
          throw (
            (typeof this.trace == "function" && this.trace(x),
            d || (d = this.JisonParserError),
            new d(x, v))
          );
      },
      parse: function (x) {
        var v = this,
          d = new Array(128),
          _ = new Array(128),
          p = new Array(128),
          m = this.table,
          g = 0,
          y = 0;
        this.TERROR;
        var w = this.EOF;
        this.options.errorRecoveryTokenDiscardCount | 0;
        var b = [0, 54],
          S;
        this.__lexer__
          ? (S = this.__lexer__)
          : (S = this.__lexer__ = Object.create(this.lexer));
        var O = {
          parseError: void 0,
          quoteName: void 0,
          lexer: void 0,
          parser: void 0,
          pre_parse: void 0,
          post_parse: void 0,
          pre_lex: void 0,
          post_lex: void 0,
        };
        typeof assert != "function" || assert,
          (this.yyGetSharedState = function () {
            return O;
          });
        function A(ne, z) {
          for (var J in z)
            typeof ne[J] == "undefined" &&
              Object.prototype.hasOwnProperty.call(z, J) &&
              (ne[J] = z[J]);
        }
        A(O, this.yy),
          (O.lexer = S),
          (O.parser = this),
          typeof O.parseError == "function"
            ? (this.parseError = function (z, J, ee) {
                return (
                  ee || (ee = this.JisonParserError),
                  O.parseError.call(this, z, J, ee)
                );
              })
            : (this.parseError = this.originalParseError),
          typeof O.quoteName == "function"
            ? (this.quoteName = function (z) {
                return O.quoteName.call(this, z);
              })
            : (this.quoteName = this.originalQuoteName),
          (this.cleanupAfterParse = function (z, J, ee) {
            var j;
            if (J) {
              var pe;
              (O.post_parse || this.post_parse) &&
                (pe = this.constructParseErrorInfo(null, null, null, !1)),
                O.post_parse &&
                  ((j = O.post_parse.call(this, O, z, pe)),
                  typeof j != "undefined" && (z = j)),
                this.post_parse &&
                  ((j = this.post_parse.call(this, O, z, pe)),
                  typeof j != "undefined" && (z = j)),
                pe && pe.destroy && pe.destroy();
            }
            if (this.__reentrant_call_depth > 1) return z;
            if (
              (S.cleanupAfterLex && S.cleanupAfterLex(ee),
              O &&
                ((O.lexer = void 0),
                (O.parser = void 0),
                S.yy === O && (S.yy = void 0)),
              (O = void 0),
              (this.parseError = this.originalParseError),
              (this.quoteName = this.originalQuoteName),
              (d.length = 0),
              (_.length = 0),
              (p.length = 0),
              (g = 0),
              !ee)
            ) {
              for (var ie = this.__error_infos.length - 1; ie >= 0; ie--) {
                var $e = this.__error_infos[ie];
                $e && typeof $e.destroy == "function" && $e.destroy();
              }
              this.__error_infos.length = 0;
            }
            return z;
          }),
          (this.constructParseErrorInfo = function (z, J, ee, j) {
            var pe = {
              errStr: z,
              exception: J,
              text: S.match,
              value: S.yytext,
              token: this.describeSymbol(y) || y,
              token_id: y,
              line: S.yylineno,
              expected: ee,
              recoverable: j,
              state: P,
              action: M,
              new_state: Y,
              symbol_stack: d,
              state_stack: _,
              value_stack: p,
              stack_pointer: g,
              yy: O,
              lexer: S,
              parser: this,
              destroy: function () {
                var $e = !!this.recoverable;
                for (var ze in this)
                  this.hasOwnProperty(ze) &&
                    typeof ze == "object" &&
                    (this[ze] = void 0);
                this.recoverable = $e;
              },
            };
            return this.__error_infos.push(pe), pe;
          });
        function E() {
          var ne = S.lex();
          return typeof ne != "number" && (ne = v.symbols_[ne] || ne), ne || w;
        }
        function k() {
          var ne = S.fastLex();
          return typeof ne != "number" && (ne = v.symbols_[ne] || ne), ne || w;
        }
        var $ = E,
          P,
          M,
          D,
          N,
          W = { $: !0, _$: void 0, yy: O },
          T,
          R,
          U,
          Y,
          X = !1;
        try {
          if (
            (this.__reentrant_call_depth++,
            S.setInput(x, O),
            typeof S.canIUse == "function")
          ) {
            var le = S.canIUse();
            le.fastLex && typeof k == "function" && ($ = k);
          }
          for (
            p[g] = null,
              _[g] = 0,
              d[g] = 0,
              ++g,
              this.pre_parse && this.pre_parse.call(this, O),
              O.pre_parse && O.pre_parse.call(this, O),
              Y = _[g - 1];
            ;

          ) {
            if (((P = Y), this.defaultActions[P]))
              (M = 2), (Y = this.defaultActions[P]);
            else if (
              (y || (y = $()),
              (N = (m[P] && m[P][y]) || b),
              (Y = N[1]),
              (M = N[0]),
              !M)
            ) {
              var ce,
                je = this.describeSymbol(y) || y,
                Pe = this.collect_expected_token_set(P);
              typeof S.yylineno == "number"
                ? (ce = "Parse error on line " + (S.yylineno + 1) + ": ")
                : (ce = "Parse error: "),
                typeof S.showPosition == "function" &&
                  (ce +=
                    `
` +
                    S.showPosition(79 - 10, 10) +
                    `
`),
                Pe.length
                  ? (ce +=
                      "Expecting " + Pe.join(", ") + ", got unexpected " + je)
                  : (ce += "Unexpected " + je),
                (T = this.constructParseErrorInfo(ce, null, Pe, !1)),
                (D = this.parseError(T.errStr, T, this.JisonParserError)),
                typeof D != "undefined" && (X = D);
              break;
            }
            switch (M) {
              default:
                if (M instanceof Array) {
                  (T = this.constructParseErrorInfo(
                    "Parse Error: multiple actions possible at state: " +
                      P +
                      ", token: " +
                      y,
                    null,
                    null,
                    !1
                  )),
                    (D = this.parseError(T.errStr, T, this.JisonParserError)),
                    typeof D != "undefined" && (X = D);
                  break;
                }
                (T = this.constructParseErrorInfo(
                  "Parsing halted. No viable error recovery approach available due to internal system failure.",
                  null,
                  null,
                  !1
                )),
                  (D = this.parseError(T.errStr, T, this.JisonParserError)),
                  typeof D != "undefined" && (X = D);
                break;
              case 1:
                (d[g] = y), (p[g] = S.yytext), (_[g] = Y), ++g, (y = 0);
                continue;
              case 2:
                if (
                  ((U = this.productions_[Y - 1]),
                  (R = U[1]),
                  (D = this.performAction.call(W, Y, g - 1, p)),
                  typeof D != "undefined")
                ) {
                  X = D;
                  break;
                }
                g -= R;
                var yt = U[0];
                (d[g] = yt),
                  (p[g] = W.$),
                  (Y = m[_[g - 1]][yt]),
                  (_[g] = Y),
                  ++g;
                continue;
              case 3:
                g !== -2 &&
                  ((X = !0), g--, typeof p[g] != "undefined" && (X = p[g]));
                break;
            }
            break;
          }
        } catch (ne) {
          if (ne instanceof this.JisonParserError) throw ne;
          if (
            S &&
            typeof S.JisonLexerError == "function" &&
            ne instanceof S.JisonLexerError
          )
            throw ne;
          (T = this.constructParseErrorInfo(
            "Parsing aborted due to exception.",
            ne,
            null,
            !1
          )),
            (X = !1),
            (D = this.parseError(T.errStr, T, this.JisonParserError)),
            typeof D != "undefined" && (X = D);
        } finally {
          (X = this.cleanupAfterParse(X, !0, !0)),
            this.__reentrant_call_depth--;
        }
        return X;
      },
    };
    (s.originalParseError = s.parseError), (s.originalQuoteName = s.quoteName);
    var c = (function () {
      function h(v, d) {
        Object.defineProperty(this, "name", {
          enumerable: !1,
          writable: !1,
          value: "JisonLexerError",
        }),
          v == null && (v = "???"),
          Object.defineProperty(this, "message", {
            enumerable: !1,
            writable: !0,
            value: v,
          }),
          (this.hash = d);
        var _;
        if (d && d.exception instanceof Error) {
          var p = d.exception;
          (this.message = p.message || v), (_ = p.stack);
        }
        _ ||
          (Error.hasOwnProperty("captureStackTrace")
            ? Error.captureStackTrace(this, this.constructor)
            : (_ = new Error(v).stack)),
          _ &&
            Object.defineProperty(this, "stack", {
              enumerable: !1,
              writable: !1,
              value: _,
            });
      }
      typeof Object.setPrototypeOf == "function"
        ? Object.setPrototypeOf(h.prototype, Error.prototype)
        : (h.prototype = Object.create(Error.prototype)),
        (h.prototype.constructor = h),
        (h.prototype.name = "JisonLexerError");
      var x = {
        EOF: 1,
        ERROR: 2,
        __currentRuleSet__: null,
        __error_infos: [],
        __decompressed: !1,
        done: !1,
        _backtrack: !1,
        _input: "",
        _more: !1,
        _signaled_error_token: !1,
        conditionStack: [],
        match: "",
        matched: "",
        matches: !1,
        yytext: "",
        offset: 0,
        yyleng: 0,
        yylineno: 0,
        yylloc: null,
        constructLexErrorInfo: function (d, _, p) {
          if (
            ((d = "" + d),
            p == null &&
              (p = !(
                d.indexOf(`
`) > 0 && d.indexOf("^") > 0
              )),
            this.yylloc && p)
          ) {
            if (typeof this.prettyPrintRange == "function")
              this.prettyPrintRange(this.yylloc),
                /\n\s*$/.test(d) ||
                  (d += `
`),
                (d +=
                  `
  Erroneous area:
` + this.prettyPrintRange(this.yylloc));
            else if (typeof this.showPosition == "function") {
              var m = this.showPosition();
              m &&
                (d.length &&
                d[d.length - 1] !==
                  `
` &&
                m[0] !==
                  `
`
                  ? (d +=
                      `
` + m)
                  : (d += m));
            }
          }
          var g = {
            errStr: d,
            recoverable: !!_,
            text: this.match,
            token: null,
            line: this.yylineno,
            loc: this.yylloc,
            yy: this.yy,
            lexer: this,
            destroy: function () {
              var w = !!this.recoverable;
              for (var b in this)
                this.hasOwnProperty(b) &&
                  typeof b == "object" &&
                  (this[b] = void 0);
              this.recoverable = w;
            },
          };
          return this.__error_infos.push(g), g;
        },
        parseError: function (d, _, p) {
          if ((p || (p = this.JisonLexerError), this.yy)) {
            if (
              this.yy.parser &&
              typeof this.yy.parser.parseError == "function"
            )
              return (
                this.yy.parser.parseError.call(this, d, _, p) || this.ERROR
              );
            if (typeof this.yy.parseError == "function")
              return this.yy.parseError.call(this, d, _, p) || this.ERROR;
          }
          throw new p(d, _);
        },
        yyerror: function (d) {
          var _ = "";
          this.yylloc && (_ = " on line " + (this.yylineno + 1));
          var p = this.constructLexErrorInfo(
              "Lexical error" + _ + ": " + d,
              this.options.lexerErrorsAreRecoverable
            ),
            m = Array.prototype.slice.call(arguments, 1);
          return (
            m.length && (p.extra_error_attributes = m),
            this.parseError(p.errStr, p, this.JisonLexerError) || this.ERROR
          );
        },
        cleanupAfterLex: function (d) {
          if ((this.setInput("", {}), !d)) {
            for (var _ = this.__error_infos.length - 1; _ >= 0; _--) {
              var p = this.__error_infos[_];
              p && typeof p.destroy == "function" && p.destroy();
            }
            this.__error_infos.length = 0;
          }
          return this;
        },
        clear: function () {
          (this.yytext = ""),
            (this.yyleng = 0),
            (this.match = ""),
            (this.matches = !1),
            (this._more = !1),
            (this._backtrack = !1);
          var d = this.yylloc ? this.yylloc.last_column : 0;
          this.yylloc = {
            first_line: this.yylineno + 1,
            first_column: d,
            last_line: this.yylineno + 1,
            last_column: d,
            range: [this.offset, this.offset],
          };
        },
        setInput: function (d, _) {
          if (((this.yy = _ || this.yy || {}), !this.__decompressed)) {
            for (var p = this.rules, m = 0, g = p.length; m < g; m++) {
              var y = p[m];
              typeof y == "number" && (p[m] = p[y]);
            }
            var w = this.conditions;
            for (var b in w) {
              for (
                var S = w[b],
                  O = S.rules,
                  g = O.length,
                  A = new Array(g + 1),
                  E = new Array(g + 1),
                  m = 0;
                m < g;
                m++
              ) {
                var k = O[m],
                  y = p[k];
                (A[m + 1] = y), (E[m + 1] = k);
              }
              (S.rules = E), (S.__rule_regexes = A), (S.__rule_count = g);
            }
            this.__decompressed = !0;
          }
          return (
            (this._input = d || ""),
            this.clear(),
            (this._signaled_error_token = !1),
            (this.done = !1),
            (this.yylineno = 0),
            (this.matched = ""),
            (this.conditionStack = ["INITIAL"]),
            (this.__currentRuleSet__ = null),
            (this.yylloc = {
              first_line: 1,
              first_column: 0,
              last_line: 1,
              last_column: 0,
              range: [0, 0],
            }),
            (this.offset = 0),
            this
          );
        },
        editRemainingInput: function (d, _) {
          var p = d.call(this, this._input, _);
          return (
            typeof p != "string"
              ? p && (this._input = "" + p)
              : (this._input = p),
            this
          );
        },
        input: function () {
          if (!this._input) return null;
          var d = this._input[0];
          (this.yytext += d),
            this.yyleng++,
            this.offset++,
            (this.match += d),
            (this.matched += d);
          var _ = 1,
            p = !1;
          if (
            d ===
            `
`
          )
            p = !0;
          else if (d === "\r") {
            p = !0;
            var m = this._input[1];
            m ===
              `
` &&
              (_++,
              (d += m),
              (this.yytext += m),
              this.yyleng++,
              this.offset++,
              (this.match += m),
              (this.matched += m),
              this.yylloc.range[1]++);
          }
          return (
            p
              ? (this.yylineno++,
                this.yylloc.last_line++,
                (this.yylloc.last_column = 0))
              : this.yylloc.last_column++,
            this.yylloc.range[1]++,
            (this._input = this._input.slice(_)),
            d
          );
        },
        unput: function (d) {
          var _ = d.length,
            p = d.split(/(?:\r\n?|\n)/g);
          if (
            ((this._input = d + this._input),
            (this.yytext = this.yytext.substr(0, this.yytext.length - _)),
            (this.yyleng = this.yytext.length),
            (this.offset -= _),
            (this.match = this.match.substr(0, this.match.length - _)),
            (this.matched = this.matched.substr(0, this.matched.length - _)),
            p.length > 1)
          ) {
            (this.yylineno -= p.length - 1),
              (this.yylloc.last_line = this.yylineno + 1);
            var m = this.match,
              g = m.split(/(?:\r\n?|\n)/g);
            g.length === 1 &&
              ((m = this.matched), (g = m.split(/(?:\r\n?|\n)/g))),
              (this.yylloc.last_column = g[g.length - 1].length);
          } else this.yylloc.last_column -= _;
          return (
            (this.yylloc.range[1] = this.yylloc.range[0] + this.yyleng),
            (this.done = !1),
            this
          );
        },
        more: function () {
          return (this._more = !0), this;
        },
        reject: function () {
          if (this.options.backtrack_lexer) this._backtrack = !0;
          else {
            var d = "";
            this.yylloc && (d = " on line " + (this.yylineno + 1));
            var _ = this.constructLexErrorInfo(
              "Lexical error" +
                d +
                ": You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).",
              !1
            );
            this._signaled_error_token =
              this.parseError(_.errStr, _, this.JisonLexerError) || this.ERROR;
          }
          return this;
        },
        less: function (d) {
          return this.unput(this.match.slice(d));
        },
        pastInput: function (d, _) {
          var p = this.matched.substring(
            0,
            this.matched.length - this.match.length
          );
          d < 0 ? (d = p.length) : d || (d = 20),
            _ < 0 ? (_ = p.length) : _ || (_ = 1),
            (p = p.substr(-d * 2 - 2));
          var m = p.replace(
            /\r\n|\r/g,
            `
`
          ).split(`
`);
          return (
            (m = m.slice(-_)),
            (p = m.join(`
`)),
            p.length > d && (p = "..." + p.substr(-d)),
            p
          );
        },
        upcomingInput: function (d, _) {
          var p = this.match;
          d < 0 ? (d = p.length + this._input.length) : d || (d = 20),
            _ < 0 ? (_ = d) : _ || (_ = 1),
            p.length < d * 2 + 2 && (p += this._input.substring(0, d * 2 + 2));
          var m = p.replace(
            /\r\n|\r/g,
            `
`
          ).split(`
`);
          return (
            (m = m.slice(0, _)),
            (p = m.join(`
`)),
            p.length > d && (p = p.substring(0, d) + "..."),
            p
          );
        },
        showPosition: function (d, _) {
          var p = this.pastInput(d).replace(/\s/g, " "),
            m = new Array(p.length + 1).join("-");
          return (
            p +
            this.upcomingInput(_).replace(/\s/g, " ") +
            `
` +
            m +
            "^"
          );
        },
        deriveLocationInfo: function (d, _, p, m) {
          var g = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0,
            range: [0, 0],
          };
          return (
            d &&
              ((g.first_line = d.first_line | 0),
              (g.last_line = d.last_line | 0),
              (g.first_column = d.first_column | 0),
              (g.last_column = d.last_column | 0),
              d.range &&
                ((g.range[0] = d.range[0] | 0), (g.range[1] = d.range[1] | 0))),
            (g.first_line <= 0 || g.last_line < g.first_line) &&
              (g.first_line <= 0 &&
                _ &&
                ((g.first_line = _.last_line | 0),
                (g.first_column = _.last_column | 0),
                _.range && (g.range[0] = d.range[1] | 0)),
              (g.last_line <= 0 || g.last_line < g.first_line) &&
                p &&
                ((g.last_line = p.first_line | 0),
                (g.last_column = p.first_column | 0),
                p.range && (g.range[1] = d.range[0] | 0)),
              g.first_line <= 0 &&
                m &&
                (g.last_line <= 0 || m.last_line <= g.last_line) &&
                ((g.first_line = m.first_line | 0),
                (g.first_column = m.first_column | 0),
                m.range && (g.range[0] = m.range[0] | 0)),
              g.last_line <= 0 &&
                m &&
                (g.first_line <= 0 || m.first_line >= g.first_line) &&
                ((g.last_line = m.last_line | 0),
                (g.last_column = m.last_column | 0),
                m.range && (g.range[1] = m.range[1] | 0))),
            g.last_line <= 0 &&
              (g.first_line <= 0
                ? ((g.first_line = this.yylloc.first_line),
                  (g.last_line = this.yylloc.last_line),
                  (g.first_column = this.yylloc.first_column),
                  (g.last_column = this.yylloc.last_column),
                  (g.range[0] = this.yylloc.range[0]),
                  (g.range[1] = this.yylloc.range[1]))
                : ((g.last_line = this.yylloc.last_line),
                  (g.last_column = this.yylloc.last_column),
                  (g.range[1] = this.yylloc.range[1]))),
            g.first_line <= 0 &&
              ((g.first_line = g.last_line),
              (g.first_column = 0),
              (g.range[1] = g.range[0])),
            g.first_column < 0 && (g.first_column = 0),
            g.last_column < 0 &&
              (g.last_column = g.first_column > 0 ? g.first_column : 80),
            g
          );
        },
        prettyPrintRange: function (d, _, p) {
          d = this.deriveLocationInfo(d, _, p);
          const m = 3,
            g = 1,
            y = 2;
          var w = this.matched + this._input,
            b = w.split(`
`),
            S = Math.max(1, _ ? _.first_line : d.first_line - m),
            O = Math.max(1, p ? p.last_line : d.last_line + g),
            A = (1 + Math.log10(O | 1)) | 0,
            E = new Array(A).join(" "),
            k = [],
            $ = b.slice(S - 1, O + 1).map(function (W, T) {
              var R = T + S,
                U = (E + R).substr(-A),
                Y = U + ": " + W,
                X = new Array(A + 1).join("^"),
                le = 2 + 1,
                ce = 0;
              if (
                (R === d.first_line
                  ? ((le += d.first_column),
                    (ce = Math.max(
                      2,
                      (R === d.last_line ? d.last_column : W.length) -
                        d.first_column +
                        1
                    )))
                  : R === d.last_line
                  ? (ce = Math.max(2, d.last_column + 1))
                  : R > d.first_line &&
                    R < d.last_line &&
                    (ce = Math.max(2, W.length + 1)),
                ce)
              ) {
                var je = new Array(le).join("."),
                  Pe = new Array(ce).join("^");
                (Y +=
                  `
` +
                  X +
                  je +
                  Pe),
                  W.trim().length > 0 && k.push(T);
              }
              return (Y = Y.replace(/\t/g, " ")), Y;
            });
          if (k.length > 2 * y) {
            var P = k[y - 1] + 1,
              M = k[k.length - y] - 1,
              D = new Array(A + 1).join(" ") + "  (...continued...)";
            (D +=
              `
` +
              new Array(A + 1).join("-") +
              "  (---------------)"),
              $.splice(P, M - P + 1, D);
          }
          return $.join(`
`);
        },
        describeYYLLOC: function (d, _) {
          var p = d.first_line,
            m = d.last_line,
            g = d.first_column,
            y = d.last_column,
            w = m - p,
            b = y - g,
            S;
          if (
            (w === 0
              ? ((S = "line " + p + ", "),
                b <= 1
                  ? (S += "column " + g)
                  : (S += "columns " + g + " .. " + y))
              : (S =
                  "lines " +
                  p +
                  "(column " +
                  g +
                  ") .. " +
                  m +
                  "(column " +
                  y +
                  ")"),
            d.range && _)
          ) {
            var O = d.range[0],
              A = d.range[1] - 1;
            A <= O
              ? (S += " {String Offset: " + O + "}")
              : (S += " {String Offset range: " + O + " .. " + A + "}");
          }
          return S;
        },
        test_match: function (d, _) {
          var p, m, g, y, w;
          if (
            (this.options.backtrack_lexer &&
              (g = {
                yylineno: this.yylineno,
                yylloc: {
                  first_line: this.yylloc.first_line,
                  last_line: this.yylloc.last_line,
                  first_column: this.yylloc.first_column,
                  last_column: this.yylloc.last_column,
                  range: this.yylloc.range.slice(0),
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done,
              }),
            (y = d[0]),
            (w = y.length),
            (m = y.split(/(?:\r\n?|\n)/g)),
            m.length > 1
              ? ((this.yylineno += m.length - 1),
                (this.yylloc.last_line = this.yylineno + 1),
                (this.yylloc.last_column = m[m.length - 1].length))
              : (this.yylloc.last_column += w),
            (this.yytext += y),
            (this.match += y),
            (this.matched += y),
            (this.matches = d),
            (this.yyleng = this.yytext.length),
            (this.yylloc.range[1] += w),
            (this.offset += w),
            (this._more = !1),
            (this._backtrack = !1),
            (this._input = this._input.slice(w)),
            (p = this.performAction.call(
              this,
              this.yy,
              _,
              this.conditionStack[this.conditionStack.length - 1]
            )),
            this.done && this._input && (this.done = !1),
            p)
          )
            return p;
          if (this._backtrack) {
            for (var b in g) this[b] = g[b];
            return (this.__currentRuleSet__ = null), !1;
          } else if (this._signaled_error_token)
            return (
              (p = this._signaled_error_token),
              (this._signaled_error_token = !1),
              p
            );
          return !1;
        },
        next: function () {
          if (this.done) return this.clear(), this.EOF;
          this._input || (this.done = !0);
          var d, _, p, m;
          this._more || this.clear();
          var g = this.__currentRuleSet__;
          if (
            !g &&
            ((g = this.__currentRuleSet__ = this._currentRules()),
            !g || !g.rules)
          ) {
            var y = "";
            this.options.trackPosition &&
              (y = " on line " + (this.yylineno + 1));
            var w = this.constructLexErrorInfo(
              "Internal lexer engine error" +
                y +
                ': The lex grammar programmer pushed a non-existing condition name "' +
                this.topState() +
                '"; this is a fatal error and should be reported to the application programmer team!',
              !1
            );
            return (
              this.parseError(w.errStr, w, this.JisonLexerError) || this.ERROR
            );
          }
          for (
            var b = g.rules, S = g.__rule_regexes, O = g.__rule_count, A = 1;
            A <= O;
            A++
          )
            if (
              ((p = this._input.match(S[A])),
              p && (!_ || p[0].length > _[0].length))
            ) {
              if (((_ = p), (m = A), this.options.backtrack_lexer)) {
                if (((d = this.test_match(p, b[A])), d !== !1)) return d;
                if (this._backtrack) {
                  _ = void 0;
                  continue;
                } else return !1;
              } else if (!this.options.flex) break;
            }
          if (_) return (d = this.test_match(_, b[m])), d !== !1 ? d : !1;
          if (this._input) {
            var y = "";
            this.options.trackPosition &&
              (y = " on line " + (this.yylineno + 1));
            var w = this.constructLexErrorInfo(
                "Lexical error" + y + ": Unrecognized text.",
                this.options.lexerErrorsAreRecoverable
              ),
              E = this._input,
              k = this.topState(),
              $ = this.conditionStack.length;
            return (
              (d =
                this.parseError(w.errStr, w, this.JisonLexerError) ||
                this.ERROR),
              d === this.ERROR &&
                !this.matches &&
                E === this._input &&
                k === this.topState() &&
                $ === this.conditionStack.length &&
                this.input(),
              d
            );
          } else return (this.done = !0), this.clear(), this.EOF;
        },
        lex: function () {
          var d;
          for (
            typeof this.pre_lex == "function" &&
              (d = this.pre_lex.call(this, 0)),
              typeof this.options.pre_lex == "function" &&
                (d = this.options.pre_lex.call(this, d) || d),
              this.yy &&
                typeof this.yy.pre_lex == "function" &&
                (d = this.yy.pre_lex.call(this, d) || d);
            !d;

          )
            d = this.next();
          return (
            this.yy &&
              typeof this.yy.post_lex == "function" &&
              (d = this.yy.post_lex.call(this, d) || d),
            typeof this.options.post_lex == "function" &&
              (d = this.options.post_lex.call(this, d) || d),
            typeof this.post_lex == "function" &&
              (d = this.post_lex.call(this, d) || d),
            d
          );
        },
        fastLex: function () {
          for (var d; !d; ) d = this.next();
          return d;
        },
        canIUse: function () {
          var d = {
            fastLex:
              !(
                typeof this.pre_lex == "function" ||
                typeof this.options.pre_lex == "function" ||
                (this.yy && typeof this.yy.pre_lex == "function") ||
                (this.yy && typeof this.yy.post_lex == "function") ||
                typeof this.options.post_lex == "function" ||
                typeof this.post_lex == "function"
              ) && typeof this.fastLex == "function",
          };
          return d;
        },
        begin: function (d) {
          return this.pushState(d);
        },
        pushState: function (d) {
          return (
            this.conditionStack.push(d), (this.__currentRuleSet__ = null), this
          );
        },
        popState: function () {
          var d = this.conditionStack.length - 1;
          return d > 0
            ? ((this.__currentRuleSet__ = null), this.conditionStack.pop())
            : this.conditionStack[0];
        },
        topState: function (d) {
          return (
            (d = this.conditionStack.length - 1 - Math.abs(d || 0)),
            d >= 0 ? this.conditionStack[d] : "INITIAL"
          );
        },
        _currentRules: function () {
          return this.conditionStack.length &&
            this.conditionStack[this.conditionStack.length - 1]
            ? this.conditions[
                this.conditionStack[this.conditionStack.length - 1]
              ]
            : this.conditions.INITIAL;
        },
        stateStackSize: function () {
          return this.conditionStack.length;
        },
        options: { trackPosition: !0 },
        JisonLexerError: h,
        performAction: function (d, _, p) {
          switch (_) {
            case 1:
              break;
            default:
              return this.simpleCaseActionClusters[_];
          }
        },
        simpleCaseActionClusters: {
          0: 13,
          2: 5,
          3: 6,
          4: 3,
          5: 4,
          6: 15,
          7: 15,
          8: 15,
          9: 15,
          10: 15,
          11: 15,
          12: 16,
          13: 16,
          14: 16,
          15: 16,
          16: 17,
          17: 17,
          18: 18,
          19: 18,
          20: 19,
          21: 19,
          22: 19,
          23: 20,
          24: 21,
          25: 22,
          26: 23,
          27: 25,
          28: 24,
          29: 26,
          30: 27,
          31: 28,
          32: 11,
          33: 9,
          34: 12,
          35: 10,
          36: 7,
          37: 8,
          38: 14,
          39: 1,
        },
        rules: [
          /^(?:(--[\d\-A-Za-z]*))/,
          /^(?:\s+)/,
          /^(?:\*)/,
          /^(?:\/)/,
          /^(?:\+)/,
          /^(?:-)/,
          /^(?:(\d+(\.\d*)?|\.\d+)px\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)cm\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)mm\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)in\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)pt\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)pc\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)deg\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)grad\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)rad\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)turn\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)s\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)ms\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)Hz\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)kHz\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)dpi\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)dpcm\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)dppx\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)em\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)ex\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)ch\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)rem\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)vw\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)vh\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)vmin\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)vmax\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)%)/,
          /^(?:(\d+(\.\d*)?|\.\d+)\b)/,
          /^(?:(calc))/,
          /^(?:(var))/,
          /^(?:([a-z]+))/,
          /^(?:\()/,
          /^(?:\))/,
          /^(?:,)/,
          /^(?:$)/,
        ],
        conditions: {
          INITIAL: {
            rules: [
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
              35, 36, 37, 38, 39,
            ],
            inclusive: !0,
          },
        },
      };
      return x;
    })();
    s.lexer = c;
    function f() {
      this.yy = {};
    }
    return (f.prototype = s), (s.Parser = f), new f();
  })();
  typeof KS != "undefined" &&
    ((e.parser = t),
    (e.Parser = t.Parser),
    (e.parse = function () {
      return t.parse.apply(t, arguments);
    }));
})(Kw);
var Do = {},
  Jh = { exports: {} },
  ff = {
    px: { px: 1, cm: 96 / 2.54, mm: 96 / 25.4, in: 96, pt: 96 / 72, pc: 16 },
    cm: {
      px: 2.54 / 96,
      cm: 1,
      mm: 0.1,
      in: 2.54,
      pt: 2.54 / 72,
      pc: 2.54 / 6,
    },
    mm: { px: 25.4 / 96, cm: 10, mm: 1, in: 25.4, pt: 25.4 / 72, pc: 25.4 / 6 },
    in: {
      px: 1 / 96,
      cm: 1 / 2.54,
      mm: 1 / 25.4,
      in: 1,
      pt: 1 / 72,
      pc: 1 / 6,
    },
    pt: { px: 0.75, cm: 72 / 2.54, mm: 72 / 25.4, in: 72, pt: 1, pc: 12 },
    pc: { px: 6 / 96, cm: 6 / 2.54, mm: 6 / 25.4, in: 6, pt: 6 / 72, pc: 1 },
    deg: { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 },
    grad: { deg: 400 / 360, grad: 1, rad: 200 / Math.PI, turn: 400 },
    rad: { deg: Math.PI / 180, grad: Math.PI / 200, rad: 1, turn: Math.PI * 2 },
    turn: { deg: 1 / 360, grad: 1 / 400, rad: 0.5 / Math.PI, turn: 1 },
    s: { s: 1, ms: 1 / 1e3 },
    ms: { s: 1e3, ms: 1 },
    Hz: { Hz: 1, kHz: 1e3 },
    kHz: { Hz: 1 / 1e3, kHz: 1 },
    dpi: { dpi: 1, dpcm: 1 / 2.54, dppx: 1 / 96 },
    dpcm: { dpi: 2.54, dpcm: 1, dppx: 2.54 / 96 },
    dppx: { dpi: 96, dpcm: 96 / 2.54, dppx: 1 },
  },
  T4 = function (e, t, r, n) {
    if (!ff.hasOwnProperty(r)) throw new Error("Cannot convert to " + r);
    if (!ff[r].hasOwnProperty(t))
      throw new Error("Cannot convert from " + t + " to " + r);
    var i = ff[r][t] * e;
    return n !== !1
      ? ((n = Math.pow(10, parseInt(n) || 5)), Math.round(i * n) / n)
      : i;
  };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var r = T4,
    n = i(r);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u, l, s) {
    switch (u.type) {
      case "LengthValue":
      case "AngleValue":
      case "TimeValue":
      case "FrequencyValue":
      case "ResolutionValue":
        return o(u, l, s);
      default:
        return { left: u, right: l };
    }
  }
  function o(u, l, s) {
    return (
      l.type === u.type &&
        (l = {
          type: u.type,
          value: (0, n.default)(l.value, l.unit, u.unit, s),
          unit: u.unit,
        }),
      { left: u, right: l }
    );
  }
  (t.default = a), (e.exports = t.default);
})(Jh, Jh.exports);
Object.defineProperty(Do, "__esModule", { value: !0 });
Do.flip = Zh;
var P4 = Jh.exports,
  hf = $4(P4);
function $4(e) {
  return e && e.__esModule ? e : { default: e };
}
function dt(e, t) {
  return e.type === "MathExpression"
    ? R4(e, t)
    : e.type === "Calc"
    ? dt(e.value, t)
    : e;
}
function Sm(e, t) {
  return e.type === t.type && e.value === t.value;
}
function Ot(e) {
  switch (e) {
    case "LengthValue":
    case "AngleValue":
    case "TimeValue":
    case "FrequencyValue":
    case "ResolutionValue":
    case "EmValue":
    case "ExValue":
    case "ChValue":
    case "RemValue":
    case "VhValue":
    case "VwValue":
    case "VminValue":
    case "VmaxValue":
    case "PercentageValue":
    case "Value":
      return !0;
  }
  return !1;
}
function C4(e, t) {
  var r = (0, hf.default)(e.left, e.right, t),
    n = dt(r.left, t),
    i = dt(r.right, t);
  return (
    n.type === "MathExpression" &&
      i.type === "MathExpression" &&
      ((n.operator === "/" && i.operator === "*") ||
        (n.operator === "-" && i.operator === "+") ||
        (n.operator === "*" && i.operator === "/") ||
        (n.operator === "+" && i.operator === "-")) &&
      (Sm(n.right, i.right)
        ? (r = (0, hf.default)(n.left, i.left, t))
        : Sm(n.right, i.left) && (r = (0, hf.default)(n.left, i.right, t)),
      (n = dt(r.left, t)),
      (i = dt(r.right, t))),
    (e.left = n),
    (e.right = i),
    e
  );
}
function Zh(e) {
  return e === "+" ? "-" : "+";
}
function ed(e) {
  return (
    Ot(e.type)
      ? (e.value = -e.value)
      : e.type == "MathExpression" &&
        ((e.left = ed(e.left)), (e.right = ed(e.right))),
    e
  );
}
function M4(e, t) {
  var r = e,
    n = r.left,
    i = r.right,
    a = r.operator;
  if (n.type === "CssVariable" || i.type === "CssVariable") return e;
  if (i.value === 0) return n;
  if (n.value === 0 && a === "+") return i;
  if (n.value === 0 && a === "-") return ed(i);
  if (
    (n.type === i.type &&
      Ot(n.type) &&
      ((e = Object.assign({}, n)),
      a === "+"
        ? (e.value = n.value + i.value)
        : (e.value = n.value - i.value)),
    Ot(n.type) &&
      (i.operator === "+" || i.operator === "-") &&
      i.type === "MathExpression")
  ) {
    if (n.type === i.left.type)
      return (
        (e = Object.assign({}, e)),
        (e.left = dt(
          { type: "MathExpression", operator: a, left: n, right: i.left },
          t
        )),
        (e.right = i.right),
        (e.operator = a === "-" ? Zh(i.operator) : i.operator),
        dt(e, t)
      );
    if (n.type === i.right.type)
      return (
        (e = Object.assign({}, e)),
        (e.left = dt(
          {
            type: "MathExpression",
            operator: a === "-" ? Zh(i.operator) : i.operator,
            left: n,
            right: i.right,
          },
          t
        )),
        (e.right = i.left),
        dt(e, t)
      );
  }
  if (
    n.type === "MathExpression" &&
    (n.operator === "+" || n.operator === "-") &&
    Ot(i.type)
  ) {
    if (i.type === n.left.type)
      return (
        (e = Object.assign({}, n)),
        (e.left = dt(
          { type: "MathExpression", operator: a, left: n.left, right: i },
          t
        )),
        dt(e, t)
      );
    if (i.type === n.right.type)
      return (
        (e = Object.assign({}, n)),
        n.operator === "-"
          ? ((e.right = dt(
              {
                type: "MathExpression",
                operator: a === "-" ? "+" : "-",
                left: i,
                right: n.right,
              },
              t
            )),
            (e.operator = a === "-" ? "-" : "+"))
          : (e.right = dt(
              { type: "MathExpression", operator: a, left: n.right, right: i },
              t
            )),
        e.right.value < 0 &&
          ((e.right.value *= -1),
          (e.operator = e.operator === "-" ? "+" : "-")),
        dt(e, t)
      );
  }
  return e;
}
function I4(e, t) {
  if (!Ot(e.right.type)) return e;
  if (e.right.type !== "Value")
    throw new Error('Cannot divide by "' + e.right.unit + '", number expected');
  if (e.right.value === 0) throw new Error("Cannot divide by zero");
  return e.left.type === "MathExpression"
    ? Ot(e.left.left.type) && Ot(e.left.right.type)
      ? ((e.left.left.value /= e.right.value),
        (e.left.right.value /= e.right.value),
        dt(e.left, t))
      : e
    : Ot(e.left.type)
    ? ((e.left.value /= e.right.value), e.left)
    : e;
}
function N4(e) {
  if (e.left.type === "MathExpression" && e.right.type === "Value") {
    if (Ot(e.left.left.type) && Ot(e.left.right.type))
      return (
        (e.left.left.value *= e.right.value),
        (e.left.right.value *= e.right.value),
        e.left
      );
  } else {
    if (Ot(e.left.type) && e.right.type === "Value")
      return (e.left.value *= e.right.value), e.left;
    if (e.left.type === "Value" && e.right.type === "MathExpression") {
      if (Ot(e.right.left.type) && Ot(e.right.right.type))
        return (
          (e.right.left.value *= e.left.value),
          (e.right.right.value *= e.left.value),
          e.right
        );
    } else if (e.left.type === "Value" && Ot(e.right.type))
      return (e.right.value *= e.left.value), e.right;
  }
  return e;
}
function R4(e, t) {
  switch (((e = C4(e, t)), e.operator)) {
    case "+":
    case "-":
      return M4(e, t);
    case "/":
      return I4(e, t);
    case "*":
      return N4(e);
  }
  return e;
}
Do.default = dt;
var td = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.default = function (o, u, l) {
      var s = a(u, l);
      return u.type === "MathExpression" && (s = o + "(" + s + ")"), s;
    });
  var r = Do,
    n = { "*": 0, "/": 0, "+": 1, "-": 1 };
  function i(o, u) {
    if (u !== !1) {
      var l = Math.pow(10, u);
      return Math.round(o * l) / l;
    }
    return o;
  }
  function a(o, u) {
    switch (o.type) {
      case "MathExpression": {
        var l = o.left,
          s = o.right,
          c = o.operator,
          f = "";
        return (
          l.type === "MathExpression" && n[c] < n[l.operator]
            ? (f += "(" + a(l, u) + ")")
            : (f += a(l, u)),
          (f += " " + o.operator + " "),
          s.type === "MathExpression" && n[c] < n[s.operator]
            ? (f += "(" + a(s, u) + ")")
            : (s.type === "MathExpression" &&
                c === "-" &&
                ["+", "-"].includes(s.operator) &&
                (s.operator = (0, r.flip)(s.operator)),
              (f += a(s, u))),
          f
        );
      }
      case "Value":
        return i(o.value, u);
      case "CssVariable":
        return o.fallback
          ? "var(" + o.value + ", " + a(o.fallback, u) + ")"
          : "var(" + o.value + ")";
      case "Calc":
        return o.prefix
          ? "-" + o.prefix + "-calc(" + a(o.value, u) + ")"
          : "calc(" + a(o.value, u) + ")";
      default:
        return i(o.value, u) + o.unit;
    }
  }
  e.exports = t.default;
})(td, td.exports);
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var r = E4,
    n = s(r),
    i = Kw,
    a = Do,
    o = s(a),
    u = td.exports,
    l = s(u);
  function s(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var c = /((?:\-[a-z]+\-)?calc)/;
  (t.default = function (f) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
    return (0, n.default)(f)
      .walk(function (x) {
        if (!(x.type !== "function" || !c.test(x.value))) {
          var v = n.default.stringify(x.nodes);
          if (!(v.indexOf("constant") >= 0 || v.indexOf("env") >= 0)) {
            var d = i.parser.parse(v),
              _ = (0, o.default)(d, h);
            (x.type = "word"), (x.value = (0, l.default)(x.value, _, h));
          }
        }
      }, !0)
      .toString();
  }),
    (e.exports = t.default);
})(Qh, Qh.exports);
var df = A1(Qh.exports);
function Om(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Am(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Om(Object(r), !0).forEach(function (n) {
          j4(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Om(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function j4(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function km(e) {
  return z4(e) || F4(e) || L4(e) || D4();
}
function D4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L4(e, t) {
  if (!!e) {
    if (typeof e == "string") return rd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return rd(e, t);
  }
}
function F4(e) {
  if (typeof Symbol != "undefined" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function z4(e) {
  if (Array.isArray(e)) return rd(e);
}
function rd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var ci = { widthCache: {}, cacheCount: 0 },
  B4 = 2e3,
  U4 = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre",
  },
  W4 = [
    "minWidth",
    "maxWidth",
    "width",
    "minHeight",
    "maxHeight",
    "height",
    "top",
    "left",
    "fontSize",
    "lineHeight",
    "padding",
    "margin",
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "paddingBottom",
    "marginLeft",
    "marginRight",
    "marginTop",
    "marginBottom",
  ],
  Em = "recharts_measurement_span";
function H4(e, t) {
  return W4.indexOf(e) >= 0 && t === +t ? "".concat(t, "px") : t;
}
function V4(e) {
  var t = e.split(""),
    r = t.reduce(function (n, i) {
      return i === i.toUpperCase()
        ? [].concat(km(n), ["-", i.toLowerCase()])
        : [].concat(km(n), [i]);
    }, []);
  return r.join("");
}
var q4 = function (t) {
    return Object.keys(t).reduce(function (r, n) {
      return "".concat(r).concat(V4(n), ":").concat(H4(n, t[n]), ";");
    }, "");
  },
  Ln = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t == null || dn.isSsr) return { width: 0, height: 0 };
    var n = "".concat(t),
      i = q4(r),
      a = "".concat(n, "-").concat(i);
    if (ci.widthCache[a]) return ci.widthCache[a];
    try {
      var o = document.getElementById(Em);
      o ||
        ((o = document.createElement("span")),
        o.setAttribute("id", Em),
        o.setAttribute("aria-hidden", "true"),
        document.body.appendChild(o));
      var u = Am(Am({}, U4), r);
      Object.keys(u).map(function (c) {
        return (o.style[c] = u[c]), c;
      }),
        (o.textContent = n);
      var l = o.getBoundingClientRect(),
        s = { width: l.width, height: l.height };
      return (
        (ci.widthCache[a] = s),
        ++ci.cacheCount > B4 && ((ci.cacheCount = 0), (ci.widthCache = {})),
        s
      );
    } catch {
      return { width: 0, height: 0 };
    }
  },
  G4 = function (t) {
    var r = t.ownerDocument.documentElement,
      n = { top: 0, left: 0 };
    return (
      typeof t.getBoundingClientRect != "undefined" &&
        (n = t.getBoundingClientRect()),
      {
        top: n.top + window.pageYOffset - r.clientTop,
        left: n.left + window.pageXOffset - r.clientLeft,
      }
    );
  },
  K4 = function (t, r) {
    return {
      chartX: Math.round(t.pageX - r.left),
      chartY: Math.round(t.pageY - r.top),
    };
  };
function qu(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (qu = function (r) {
          return typeof r;
        })
      : (qu = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    qu(e)
  );
}
function X4(e, t) {
  if (e == null) return {};
  var r = Y4(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function Y4(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Q4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function J4(e, t, r) {
  return t && Tm(e.prototype, t), r && Tm(e, r), e;
}
function Z4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && nd(e, t);
}
function nd(e, t) {
  return (
    (nd =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    nd(e, t)
  );
}
function e5(e) {
  var t = n5();
  return function () {
    var n = Kl(e),
      i;
    if (t) {
      var a = Kl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return t5(this, i);
  };
}
function t5(e, t) {
  return t && (qu(t) === "object" || typeof t == "function") ? t : r5(e);
}
function r5(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function n5() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Kl(e) {
  return (
    (Kl = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Kl(e)
  );
}
function Pm(e, t) {
  return u5(e) || o5(e, t) || a5(e, t) || i5();
}
function i5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a5(e, t) {
  if (!!e) {
    if (typeof e == "string") return $m(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return $m(e, t);
  }
}
function $m(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function o5(e, t) {
  if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (l) {
      (i = !0), (a = l);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function u5(e) {
  if (Array.isArray(e)) return e;
}
function Cm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Mm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cm(Object(r), !0).forEach(function (n) {
          l5(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Cm(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function l5(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var Xw = /[ \f\n\r\t\v\u2028\u2029]+/,
  Yw = function (t) {
    try {
      var r = [];
      Z(t.children) ||
        (t.breakAll
          ? (r = t.children.toString().split(""))
          : (r = t.children.toString().split(Xw)));
      var n = r.map(function (a) {
          return { word: a, width: Ln(a, t.style).width };
        }),
        i = t.breakAll ? 0 : Ln("\xA0", t.style).width;
      return { wordsWithComputedWidth: n, spaceWidth: i };
    } catch {
      return null;
    }
  },
  s5 = function (t, r, n, i, a) {
    var o = q(t.maxLines),
      u = t.children,
      l = function () {
        var k =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return k.reduce(function ($, P) {
          var M = P.word,
            D = P.width,
            N = $[$.length - 1];
          if (N && (i == null || a || N.width + D + n < i))
            N.words.push(M), (N.width += D + n);
          else {
            var W = { words: [M], width: D };
            $.push(W);
          }
          return $;
        }, []);
      },
      s = l(r),
      c = function (k) {
        return k.reduce(function ($, P) {
          return $.width > P.width ? $ : P;
        });
      };
    if (!o) return s;
    for (
      var f = "\u2026",
        h = function (k) {
          var $ = u.slice(0, k),
            P = Yw(
              Mm(Mm({}, t), {}, { children: $ + f })
            ).wordsWithComputedWidth,
            M = l(P),
            D = M.length > t.maxLines || c(M).width > i;
          return [D, M];
        },
        x = 0,
        v = u.length - 1,
        d = 0,
        _;
      x <= v && d <= u.length - 1;

    ) {
      var p = Math.floor((x + v) / 2),
        m = p - 1,
        g = h(m),
        y = Pm(g, 2),
        w = y[0],
        b = y[1],
        S = h(p),
        O = Pm(S, 1),
        A = O[0];
      if ((!w && !A && (x = p + 1), w && A && (v = p - 1), !w && A)) {
        _ = b;
        break;
      }
      d++;
    }
    return _ || s;
  },
  Im = function (t) {
    var r = Z(t) ? [] : t.toString().split(Xw);
    return [{ words: r }];
  },
  c5 = function (t, r) {
    if ((t.width || t.scaleToFit) && !dn.isSsr) {
      var n, i;
      if (r) {
        var a = Yw(t);
        if (a) {
          var o = a.wordsWithComputedWidth,
            u = a.spaceWidth;
          (n = o), (i = u);
        } else return Im(t.children);
        return s5(t, n, i, t.width, t.scaleToFit);
      }
    }
    return Im(t.children);
  },
  mo = (function (e) {
    Z4(r, e);
    var t = e5(r);
    function r() {
      var n;
      Q4(this, r);
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
        a[o] = arguments[o];
      return (n = t.call.apply(t, [this].concat(a))), (n.state = {}), n;
    }
    return (
      J4(
        r,
        [
          {
            key: "render",
            value: function () {
              var i = this.props,
                a = i.dx,
                o = i.dy,
                u = i.textAnchor,
                l = i.verticalAnchor,
                s = i.scaleToFit,
                c = i.angle,
                f = i.lineHeight,
                h = i.capHeight,
                x = i.className,
                v = i.breakAll,
                d = X4(i, [
                  "dx",
                  "dy",
                  "textAnchor",
                  "verticalAnchor",
                  "scaleToFit",
                  "angle",
                  "lineHeight",
                  "capHeight",
                  "className",
                  "breakAll",
                ]),
                _ = this.state.wordsByLines;
              if (!Je(d.x) || !Je(d.y)) return null;
              var p = d.x + (q(a) ? a : 0),
                m = d.y + (q(o) ? o : 0),
                g;
              switch (l) {
                case "start":
                  g = df("calc(".concat(h, ")"));
                  break;
                case "middle":
                  g = df(
                    "calc("
                      .concat((_.length - 1) / 2, " * -")
                      .concat(f, " + (")
                      .concat(h, " / 2))")
                  );
                  break;
                default:
                  g = df("calc(".concat(_.length - 1, " * -").concat(f, ")"));
                  break;
              }
              var y = [];
              if (s) {
                var w = _[0].width,
                  b = this.props.width;
                y.push("scale(".concat((q(b) ? b / w : 1) / w, ")"));
              }
              return (
                c &&
                  y.push(
                    "rotate(".concat(c, ", ").concat(p, ", ").concat(m, ")")
                  ),
                y.length && (d.transform = y.join(" ")),
                F(
                  "text",
                  ge(ae({}, me(d, !0)), {
                    x: p,
                    y: m,
                    className: Te("recharts-text", x),
                    textAnchor: u,
                    children: _.map(function (S, O) {
                      return F(
                        "tspan",
                        {
                          x: p,
                          dy: O === 0 ? g : f,
                          children: S.words.join(v ? "" : " "),
                        },
                        O
                      );
                    }),
                  })
                )
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (i, a) {
              if (
                i.width !== a.prevWidth ||
                i.scaleToFit !== a.prevScaleToFit ||
                i.children !== a.prevChildren ||
                i.style !== a.prevStyle ||
                i.breakAll !== a.prevBreakAll
              ) {
                var o =
                  i.children !== a.prevChildren ||
                  i.style !== a.prevStyle ||
                  i.breakAll !== a.prevBreakAll;
                return {
                  prevWidth: i.width,
                  prevScaleToFit: i.scaleToFit,
                  prevChildren: i.children,
                  prevStyle: i.style,
                  wordsByLines: c5(i, o),
                };
              }
              return null;
            },
          },
        ]
      ),
      r
    );
  })(V.exports.Component);
mo.defaultProps = {
  x: 0,
  y: 0,
  lineHeight: "1em",
  capHeight: "0.71em",
  scaleToFit: !1,
  textAnchor: "start",
  verticalAnchor: "end",
};
var Qw = { exports: {} },
  be = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nt = typeof Symbol == "function" && Symbol.for,
  nv = nt ? Symbol.for("react.element") : 60103,
  iv = nt ? Symbol.for("react.portal") : 60106,
  Js = nt ? Symbol.for("react.fragment") : 60107,
  Zs = nt ? Symbol.for("react.strict_mode") : 60108,
  ec = nt ? Symbol.for("react.profiler") : 60114,
  tc = nt ? Symbol.for("react.provider") : 60109,
  rc = nt ? Symbol.for("react.context") : 60110,
  av = nt ? Symbol.for("react.async_mode") : 60111,
  nc = nt ? Symbol.for("react.concurrent_mode") : 60111,
  ic = nt ? Symbol.for("react.forward_ref") : 60112,
  ac = nt ? Symbol.for("react.suspense") : 60113,
  f5 = nt ? Symbol.for("react.suspense_list") : 60120,
  oc = nt ? Symbol.for("react.memo") : 60115,
  uc = nt ? Symbol.for("react.lazy") : 60116,
  h5 = nt ? Symbol.for("react.block") : 60121,
  d5 = nt ? Symbol.for("react.fundamental") : 60117,
  p5 = nt ? Symbol.for("react.responder") : 60118,
  v5 = nt ? Symbol.for("react.scope") : 60119;
function Vt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case nv:
        switch (((e = e.type), e)) {
          case av:
          case nc:
          case Js:
          case ec:
          case Zs:
          case ac:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case rc:
              case ic:
              case uc:
              case oc:
              case tc:
                return e;
              default:
                return t;
            }
        }
      case iv:
        return t;
    }
  }
}
function Jw(e) {
  return Vt(e) === nc;
}
be.AsyncMode = av;
be.ConcurrentMode = nc;
be.ContextConsumer = rc;
be.ContextProvider = tc;
be.Element = nv;
be.ForwardRef = ic;
be.Fragment = Js;
be.Lazy = uc;
be.Memo = oc;
be.Portal = iv;
be.Profiler = ec;
be.StrictMode = Zs;
be.Suspense = ac;
be.isAsyncMode = function (e) {
  return Jw(e) || Vt(e) === av;
};
be.isConcurrentMode = Jw;
be.isContextConsumer = function (e) {
  return Vt(e) === rc;
};
be.isContextProvider = function (e) {
  return Vt(e) === tc;
};
be.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === nv;
};
be.isForwardRef = function (e) {
  return Vt(e) === ic;
};
be.isFragment = function (e) {
  return Vt(e) === Js;
};
be.isLazy = function (e) {
  return Vt(e) === uc;
};
be.isMemo = function (e) {
  return Vt(e) === oc;
};
be.isPortal = function (e) {
  return Vt(e) === iv;
};
be.isProfiler = function (e) {
  return Vt(e) === ec;
};
be.isStrictMode = function (e) {
  return Vt(e) === Zs;
};
be.isSuspense = function (e) {
  return Vt(e) === ac;
};
be.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Js ||
    e === nc ||
    e === ec ||
    e === Zs ||
    e === ac ||
    e === f5 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === uc ||
        e.$$typeof === oc ||
        e.$$typeof === tc ||
        e.$$typeof === rc ||
        e.$$typeof === ic ||
        e.$$typeof === d5 ||
        e.$$typeof === p5 ||
        e.$$typeof === v5 ||
        e.$$typeof === h5))
  );
};
be.typeOf = Vt;
Qw.exports = be;
function xo(e, t) {
  for (var r in e)
    if (
      {}.hasOwnProperty.call(e, r) &&
      (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])
    )
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function Nm(e, t) {
  if (e == null) return {};
  var r = y5(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function y5(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Rm = {
    click: "onClick",
    mousedown: "onMouseDown",
    mouseup: "onMouseUp",
    mouseover: "onMouseOver",
    mousemove: "onMouseMove",
    mouseout: "onMouseOut",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart",
  },
  pn = function (t) {
    return typeof t == "string"
      ? t
      : t
      ? t.displayName || t.name || "Component"
      : "";
  },
  jm = null,
  pf = null,
  ov = function e(t) {
    if (t === jm && xe(pf)) return pf;
    var r = [];
    return (
      V.exports.Children.forEach(t, function (n) {
        Z(n) ||
          (Qw.exports.isFragment(n)
            ? (r = r.concat(e(n.props.children)))
            : r.push(n));
      }),
      (pf = r),
      (jm = t),
      r
    );
  },
  br = function (t, r) {
    var n = [],
      i = [];
    return (
      xe(r)
        ? (i = r.map(function (a) {
            return pn(a);
          }))
        : (i = [pn(r)]),
      ov(t).forEach(function (a) {
        var o = zt(a, "type.displayName") || zt(a, "type.name");
        i.indexOf(o) !== -1 && n.push(a);
      }),
      n
    );
  },
  Dr = function (t, r) {
    var n = br(t, r);
    return n && n[0];
  },
  Dm = function (t) {
    if (!t || !t.props) return !1;
    var r = t.props,
      n = r.width,
      i = r.height;
    return !(!q(n) || n <= 0 || !q(i) || i <= 0);
  },
  g5 = [
    "a",
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColormatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-url",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "lineGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "script",
    "set",
    "stop",
    "style",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "title",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern",
  ],
  m5 = function (t) {
    return t && t.type && jo(t.type) && g5.indexOf(t.type) >= 0;
  },
  Zw = function e(t, r) {
    if (t === r) return !0;
    var n = V.exports.Children.count(t);
    if (n !== V.exports.Children.count(r)) return !1;
    if (n === 0) return !0;
    if (n === 1) return Lm(xe(t) ? t[0] : t, xe(r) ? r[0] : r);
    for (var i = 0; i < n; i++) {
      var a = t[i],
        o = r[i];
      if (xe(a) || xe(o)) {
        if (!e(a, o)) return !1;
      } else if (!Lm(a, o)) return !1;
    }
    return !0;
  },
  Lm = function (t, r) {
    if (Z(t) && Z(r)) return !0;
    if (!Z(t) && !Z(r)) {
      var n = t.props || {},
        i = n.children,
        a = Nm(n, ["children"]),
        o = r.props || {},
        u = o.children,
        l = Nm(o, ["children"]);
      return i && u ? xo(a, l) && Zw(i, u) : !i && !u ? xo(a, l) : !1;
    }
    return !1;
  },
  Fm = function (t, r) {
    var n = [],
      i = {};
    return (
      ov(t).forEach(function (a, o) {
        if (m5(a)) n.push(a);
        else if (a) {
          var u = pn(a.type),
            l = r[u] || {},
            s = l.handler,
            c = l.once;
          if (s && (!c || !i[u])) {
            var f = s(a, u, o);
            n.push(f), (i[u] = !0);
          }
        }
      }),
      n
    );
  },
  x5 = function (t) {
    var r = t && t.type;
    return r && Rm[r] ? Rm[r] : null;
  },
  _5 = function (t, r) {
    return ov(r).indexOf(t);
  },
  w5 = Hp;
function b5(e, t) {
  return w5(e, t);
}
var eb = b5,
  S5 = oa;
function O5(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var a = e[n],
      o = t(a);
    if (o != null && (u === void 0 ? o === o && !S5(o) : r(o, u)))
      var u = o,
        l = a;
  }
  return l;
}
var tb = O5;
function A5(e, t) {
  return e > t;
}
var k5 = A5,
  E5 = tb,
  T5 = k5,
  P5 = ua;
function $5(e) {
  return e && e.length ? E5(e, P5, T5) : void 0;
}
var lc = $5;
function C5(e, t) {
  return e < t;
}
var M5 = C5,
  I5 = tb,
  N5 = M5,
  R5 = ua;
function j5(e) {
  return e && e.length ? I5(e, R5, N5) : void 0;
}
var sc = j5,
  D5 = Gp,
  L5 = An,
  F5 = Rw,
  z5 = xe;
function B5(e, t) {
  var r = z5(e) ? D5 : F5;
  return r(e, L5(t));
}
var U5 = B5,
  W5 = Iw,
  H5 = U5;
function V5(e, t) {
  return W5(H5(e, t), 1);
}
var q5 = V5,
  la = 1e9,
  G5 = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
  },
  lv,
  Fe = !0,
  ir = "[DecimalError] ",
  Gn = ir + "Invalid argument: ",
  uv = ir + "Exponent out of range: ",
  sa = Math.floor,
  Dn = Math.pow,
  K5 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  jt,
  tt = 1e7,
  Ne = 7,
  rb = 9007199254740991,
  Xl = sa(rb / Ne),
  G = {};
G.absoluteValue = G.abs = function () {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
G.comparedTo = G.cmp = function (e) {
  var t,
    r,
    n,
    i,
    a = this;
  if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
  if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (a.s < 0) ? 1 : -1;
};
G.decimalPlaces = G.dp = function () {
  var e = this,
    t = e.d.length - 1,
    r = (t - e.e) * Ne;
  if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
G.dividedBy = G.div = function (e) {
  return Ur(this, new this.constructor(e));
};
G.dividedToIntegerBy = G.idiv = function (e) {
  var t = this,
    r = t.constructor;
  return Ae(Ur(t, new r(e), 0, 1), r.precision);
};
G.equals = G.eq = function (e) {
  return !this.cmp(e);
};
G.exponent = function () {
  return Xe(this);
};
G.greaterThan = G.gt = function (e) {
  return this.cmp(e) > 0;
};
G.greaterThanOrEqualTo = G.gte = function (e) {
  return this.cmp(e) >= 0;
};
G.isInteger = G.isint = function () {
  return this.e > this.d.length - 2;
};
G.isNegative = G.isneg = function () {
  return this.s < 0;
};
G.isPositive = G.ispos = function () {
  return this.s > 0;
};
G.isZero = function () {
  return this.s === 0;
};
G.lessThan = G.lt = function (e) {
  return this.cmp(e) < 0;
};
G.lessThanOrEqualTo = G.lte = function (e) {
  return this.cmp(e) < 1;
};
G.logarithm = G.log = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision,
    a = i + 5;
  if (e === void 0) e = new n(10);
  else if (((e = new n(e)), e.s < 1 || e.eq(jt))) throw Error(ir + "NaN");
  if (r.s < 1) throw Error(ir + (r.s ? "NaN" : "-Infinity"));
  return r.eq(jt)
    ? new n(0)
    : ((Fe = !1), (t = Ur(_o(r, a), _o(e, a), a)), (Fe = !0), Ae(t, i));
};
G.minus = G.sub = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)), t.s == e.s ? ab(t, e) : nb(t, ((e.s = -e.s), e))
  );
};
G.modulo = G.mod = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision;
  if (((e = new n(e)), !e.s)) throw Error(ir + "NaN");
  return r.s
    ? ((Fe = !1), (t = Ur(r, e, 0, 1).times(e)), (Fe = !0), r.minus(t))
    : Ae(new n(r), i);
};
G.naturalExponential = G.exp = function () {
  return ib(this);
};
G.naturalLogarithm = G.ln = function () {
  return _o(this);
};
G.negated = G.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s || 0), e;
};
G.plus = G.add = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)), t.s == e.s ? nb(t, e) : ab(t, ((e.s = -e.s), e))
  );
};
G.precision = G.sd = function (e) {
  var t,
    r,
    n,
    i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Gn + e);
  if (
    ((t = Xe(i) + 1), (n = i.d.length - 1), (r = n * Ne + 1), (n = i.d[n]), n)
  ) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
G.squareRoot = G.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    a,
    o,
    u = this,
    l = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new l(0);
    throw Error(ir + "NaN");
  }
  for (
    e = Xe(u),
      Fe = !1,
      i = Math.sqrt(+u),
      i == 0 || i == 1 / 0
        ? ((t = xr(u.d)),
          (t.length + e) % 2 == 0 && (t += "0"),
          (i = Math.sqrt(t)),
          (e = sa((e + 1) / 2) - (e < 0 || e % 2)),
          i == 1 / 0
            ? (t = "5e" + e)
            : ((t = i.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + e)),
          (n = new l(t)))
        : (n = new l(i.toString())),
      r = l.precision,
      i = o = r + 3;
    ;

  )
    if (
      ((a = n),
      (n = a.plus(Ur(u, a, o + 2)).times(0.5)),
      xr(a.d).slice(0, o) === (t = xr(n.d)).slice(0, o))
    ) {
      if (((t = t.slice(o - 3, o + 1)), i == o && t == "4999")) {
        if ((Ae(a, r + 1, 0), a.times(a).eq(u))) {
          n = a;
          break;
        }
      } else if (t != "9999") break;
      o += 4;
    }
  return (Fe = !0), Ae(n, r);
};
G.times = G.mul = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u,
    l,
    s,
    c = this,
    f = c.constructor,
    h = c.d,
    x = (e = new f(e)).d;
  if (!c.s || !e.s) return new f(0);
  for (
    e.s *= c.s,
      r = c.e + e.e,
      l = h.length,
      s = x.length,
      l < s && ((a = h), (h = x), (x = a), (o = l), (l = s), (s = o)),
      a = [],
      o = l + s,
      n = o;
    n--;

  )
    a.push(0);
  for (n = s; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      (u = a[i] + x[n] * h[i - n - 1] + t),
        (a[i--] = u % tt | 0),
        (t = (u / tt) | 0);
    a[i] = (a[i] + t) % tt | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), (e.d = a), (e.e = r), Fe ? Ae(e, f.precision) : e;
};
G.toDecimalPlaces = G.todp = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (kr(e, 0, la),
        t === void 0 ? (t = n.rounding) : kr(t, 0, 8),
        Ae(r, e + Xe(r) + 1, t))
  );
};
G.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = Qn(n, !0))
      : (kr(e, 0, la),
        t === void 0 ? (t = i.rounding) : kr(t, 0, 8),
        (n = Ae(new i(n), e + 1, t)),
        (r = Qn(n, !0, e + 1))),
    r
  );
};
G.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return e === void 0
    ? Qn(i)
    : (kr(e, 0, la),
      t === void 0 ? (t = a.rounding) : kr(t, 0, 8),
      (n = Ae(new a(i), e + Xe(i) + 1, t)),
      (r = Qn(n.abs(), !1, e + Xe(n) + 1)),
      i.isneg() && !i.isZero() ? "-" + r : r);
};
G.toInteger = G.toint = function () {
  var e = this,
    t = e.constructor;
  return Ae(new t(e), Xe(e) + 1, t.rounding);
};
G.toNumber = function () {
  return +this;
};
G.toPower = G.pow = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    u = this,
    l = u.constructor,
    s = 12,
    c = +(e = new l(e));
  if (!e.s) return new l(jt);
  if (((u = new l(u)), !u.s)) {
    if (e.s < 1) throw Error(ir + "Infinity");
    return u;
  }
  if (u.eq(jt)) return u;
  if (((n = l.precision), e.eq(jt))) return Ae(u, n);
  if (((t = e.e), (r = e.d.length - 1), (o = t >= r), (a = u.s), o)) {
    if ((r = c < 0 ? -c : c) <= rb) {
      for (
        i = new l(jt), t = Math.ceil(n / Ne + 4), Fe = !1;
        r % 2 && ((i = i.times(u)), Bm(i.d, t)), (r = sa(r / 2)), r !== 0;

      )
        (u = u.times(u)), Bm(u.d, t);
      return (Fe = !0), e.s < 0 ? new l(jt).div(i) : Ae(i, n);
    }
  } else if (a < 0) throw Error(ir + "NaN");
  return (
    (a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1),
    (u.s = 1),
    (Fe = !1),
    (i = e.times(_o(u, n + s))),
    (Fe = !0),
    (i = ib(i)),
    (i.s = a),
    i
  );
};
G.toPrecision = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return (
    e === void 0
      ? ((r = Xe(i)), (n = Qn(i, r <= a.toExpNeg || r >= a.toExpPos)))
      : (kr(e, 1, la),
        t === void 0 ? (t = a.rounding) : kr(t, 0, 8),
        (i = Ae(new a(i), e, t)),
        (r = Xe(i)),
        (n = Qn(i, e <= r || r <= a.toExpNeg, e))),
    n
  );
};
G.toSignificantDigits = G.tosd = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (kr(e, 1, la), t === void 0 ? (t = n.rounding) : kr(t, 0, 8)),
    Ae(new n(r), e, t)
  );
};
G.toString =
  G.valueOf =
  G.val =
  G.toJSON =
  G[Symbol.for("nodejs.util.inspect.custom")] =
    function () {
      var e = this,
        t = Xe(e),
        r = e.constructor;
      return Qn(e, t <= r.toExpNeg || t >= r.toExpPos);
    };
function nb(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    l,
    s,
    c = e.constructor,
    f = c.precision;
  if (!e.s || !t.s) return t.s || (t = new c(e)), Fe ? Ae(t, f) : t;
  if (
    ((l = e.d),
    (s = t.d),
    (o = e.e),
    (i = t.e),
    (l = l.slice()),
    (a = o - i),
    a)
  ) {
    for (
      a < 0
        ? ((n = l), (a = -a), (u = s.length))
        : ((n = s), (i = o), (u = l.length)),
        o = Math.ceil(f / Ne),
        u = o > u ? o + 1 : u + 1,
        a > u && ((a = u), (n.length = 1)),
        n.reverse();
      a--;

    )
      n.push(0);
    n.reverse();
  }
  for (
    u = l.length,
      a = s.length,
      u - a < 0 && ((a = u), (n = s), (s = l), (l = n)),
      r = 0;
    a;

  )
    (r = ((l[--a] = l[a] + s[a] + r) / tt) | 0), (l[a] %= tt);
  for (r && (l.unshift(r), ++i), u = l.length; l[--u] == 0; ) l.pop();
  return (t.d = l), (t.e = i), Fe ? Ae(t, f) : t;
}
function kr(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Gn + e);
}
function xr(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    a = "",
    o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      (n = e[t] + ""), (r = Ne - n.length), r && (a += en(r)), (a += n);
    (o = e[t]), (n = o + ""), (r = Ne - n.length), r && (a += en(r));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Ur = (function () {
  function e(n, i) {
    var a,
      o = 0,
      u = n.length;
    for (n = n.slice(); u--; )
      (a = n[u] * i + o), (n[u] = a % tt | 0), (o = (a / tt) | 0);
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var u, l;
    if (a != o) l = a > o ? 1 : -1;
    else
      for (u = l = 0; u < a; u++)
        if (n[u] != i[u]) {
          l = n[u] > i[u] ? 1 : -1;
          break;
        }
    return l;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      (n[a] -= o), (o = n[a] < i[a] ? 1 : 0), (n[a] = o * tt + n[a] - i[a]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, a, o) {
    var u,
      l,
      s,
      c,
      f,
      h,
      x,
      v,
      d,
      _,
      p,
      m,
      g,
      y,
      w,
      b,
      S,
      O,
      A = n.constructor,
      E = n.s == i.s ? 1 : -1,
      k = n.d,
      $ = i.d;
    if (!n.s) return new A(n);
    if (!i.s) throw Error(ir + "Division by zero");
    for (
      l = n.e - i.e,
        S = $.length,
        w = k.length,
        x = new A(E),
        v = x.d = [],
        s = 0;
      $[s] == (k[s] || 0);

    )
      ++s;
    if (
      ($[s] > (k[s] || 0) && --l,
      a == null
        ? (m = a = A.precision)
        : o
        ? (m = a + (Xe(n) - Xe(i)) + 1)
        : (m = a),
      m < 0)
    )
      return new A(0);
    if (((m = (m / Ne + 2) | 0), (s = 0), S == 1))
      for (c = 0, $ = $[0], m++; (s < w || c) && m--; s++)
        (g = c * tt + (k[s] || 0)), (v[s] = (g / $) | 0), (c = g % $ | 0);
    else {
      for (
        c = (tt / ($[0] + 1)) | 0,
          c > 1 &&
            (($ = e($, c)), (k = e(k, c)), (S = $.length), (w = k.length)),
          y = S,
          d = k.slice(0, S),
          _ = d.length;
        _ < S;

      )
        d[_++] = 0;
      (O = $.slice()), O.unshift(0), (b = $[0]), $[1] >= tt / 2 && ++b;
      do
        (c = 0),
          (u = t($, d, S, _)),
          u < 0
            ? ((p = d[0]),
              S != _ && (p = p * tt + (d[1] || 0)),
              (c = (p / b) | 0),
              c > 1
                ? (c >= tt && (c = tt - 1),
                  (f = e($, c)),
                  (h = f.length),
                  (_ = d.length),
                  (u = t(f, d, h, _)),
                  u == 1 && (c--, r(f, S < h ? O : $, h)))
                : (c == 0 && (u = c = 1), (f = $.slice())),
              (h = f.length),
              h < _ && f.unshift(0),
              r(d, f, _),
              u == -1 &&
                ((_ = d.length),
                (u = t($, d, S, _)),
                u < 1 && (c++, r(d, S < _ ? O : $, _))),
              (_ = d.length))
            : u === 0 && (c++, (d = [0])),
          (v[s++] = c),
          u && d[0] ? (d[_++] = k[y] || 0) : ((d = [k[y]]), (_ = 1));
      while ((y++ < w || d[0] !== void 0) && m--);
    }
    return v[0] || v.shift(), (x.e = l), Ae(x, o ? a + Xe(x) + 1 : a);
  };
})();
function ib(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    l = 0,
    s = 0,
    c = e.constructor,
    f = c.precision;
  if (Xe(e) > 16) throw Error(uv + Xe(e));
  if (!e.s) return new c(jt);
  for (
    t == null ? ((Fe = !1), (u = f)) : (u = t), o = new c(0.03125);
    e.abs().gte(0.1);

  )
    (e = e.times(o)), (s += 5);
  for (
    n = ((Math.log(Dn(2, s)) / Math.LN10) * 2 + 5) | 0,
      u += n,
      r = i = a = new c(jt),
      c.precision = u;
    ;

  ) {
    if (
      ((i = Ae(i.times(e), u)),
      (r = r.times(++l)),
      (o = a.plus(Ur(i, r, u))),
      xr(o.d).slice(0, u) === xr(a.d).slice(0, u))
    ) {
      for (; s--; ) a = Ae(a.times(a), u);
      return (c.precision = f), t == null ? ((Fe = !0), Ae(a, f)) : a;
    }
    a = o;
  }
}
function Xe(e) {
  for (var t = e.e * Ne, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function vf(e, t, r) {
  if (t > e.LN10.sd())
    throw (
      ((Fe = !0),
      r && (e.precision = r),
      Error(ir + "LN10 precision limit exceeded"))
    );
  return Ae(new e(e.LN10), t);
}
function en(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function _o(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    l,
    s,
    c,
    f = 1,
    h = 10,
    x = e,
    v = x.d,
    d = x.constructor,
    _ = d.precision;
  if (x.s < 1) throw Error(ir + (x.s ? "NaN" : "-Infinity"));
  if (x.eq(jt)) return new d(0);
  if ((t == null ? ((Fe = !1), (s = _)) : (s = t), x.eq(10)))
    return t == null && (Fe = !0), vf(d, s);
  if (
    ((s += h),
    (d.precision = s),
    (r = xr(v)),
    (n = r.charAt(0)),
    (a = Xe(x)),
    Math.abs(a) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (x = x.times(e)), (r = xr(x.d)), (n = r.charAt(0)), f++;
    (a = Xe(x)),
      n > 1 ? ((x = new d("0." + r)), a++) : (x = new d(n + "." + r.slice(1)));
  } else
    return (
      (l = vf(d, s + 2, _).times(a + "")),
      (x = _o(new d(n + "." + r.slice(1)), s - h).plus(l)),
      (d.precision = _),
      t == null ? ((Fe = !0), Ae(x, _)) : x
    );
  for (
    u = o = x = Ur(x.minus(jt), x.plus(jt), s), c = Ae(x.times(x), s), i = 3;
    ;

  ) {
    if (
      ((o = Ae(o.times(c), s)),
      (l = u.plus(Ur(o, new d(i), s))),
      xr(l.d).slice(0, s) === xr(u.d).slice(0, s))
    )
      return (
        (u = u.times(2)),
        a !== 0 && (u = u.plus(vf(d, s + 2, _).times(a + ""))),
        (u = Ur(u, new d(f), s)),
        (d.precision = _),
        t == null ? ((Fe = !0), Ae(u, _)) : u
      );
    (u = l), (i += 2);
  }
}
function zm(e, t) {
  var r, n, i;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;

  )
    ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (((t = t.slice(n, i)), t)) {
    if (
      ((i -= n),
      (r = r - n - 1),
      (e.e = sa(r / Ne)),
      (e.d = []),
      (n = (r + 1) % Ne),
      r < 0 && (n += Ne),
      n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= Ne; n < i; )
        e.d.push(+t.slice(n, (n += Ne)));
      (t = t.slice(n)), (n = Ne - t.length);
    } else n -= i;
    for (; n--; ) t += "0";
    if ((e.d.push(+t), Fe && (e.e > Xl || e.e < -Xl))) throw Error(uv + r);
  } else (e.s = 0), (e.e = 0), (e.d = [0]);
  return e;
}
function Ae(e, t, r) {
  var n,
    i,
    a,
    o,
    u,
    l,
    s,
    c,
    f = e.d;
  for (o = 1, a = f[0]; a >= 10; a /= 10) o++;
  if (((n = t - o), n < 0)) (n += Ne), (i = t), (s = f[(c = 0)]);
  else {
    if (((c = Math.ceil((n + 1) / Ne)), (a = f.length), c >= a)) return e;
    for (s = a = f[c], o = 1; a >= 10; a /= 10) o++;
    (n %= Ne), (i = n - Ne + o);
  }
  if (
    (r !== void 0 &&
      ((a = Dn(10, o - i - 1)),
      (u = (s / a) % 10 | 0),
      (l = t < 0 || f[c + 1] !== void 0 || s % a),
      (l =
        r < 4
          ? (u || l) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : u > 5 ||
            (u == 5 &&
              (r == 4 ||
                l ||
                (r == 6 &&
                  (n > 0 ? (i > 0 ? s / Dn(10, o - i) : 0) : f[c - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7))))),
    t < 1 || !f[0])
  )
    return (
      l
        ? ((a = Xe(e)),
          (f.length = 1),
          (t = t - a - 1),
          (f[0] = Dn(10, (Ne - (t % Ne)) % Ne)),
          (e.e = sa(-t / Ne) || 0))
        : ((f.length = 1), (f[0] = e.e = e.s = 0)),
      e
    );
  if (
    (n == 0
      ? ((f.length = c), (a = 1), c--)
      : ((f.length = c + 1),
        (a = Dn(10, Ne - n)),
        (f[c] = i > 0 ? ((s / Dn(10, o - i)) % Dn(10, i) | 0) * a : 0)),
    l)
  )
    for (;;)
      if (c == 0) {
        (f[0] += a) == tt && ((f[0] = 1), ++e.e);
        break;
      } else {
        if (((f[c] += a), f[c] != tt)) break;
        (f[c--] = 0), (a = 1);
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (Fe && (e.e > Xl || e.e < -Xl)) throw Error(uv + Xe(e));
  return e;
}
function ab(e, t) {
  var r,
    n,
    i,
    a,
    o,
    u,
    l,
    s,
    c,
    f,
    h = e.constructor,
    x = h.precision;
  if (!e.s || !t.s)
    return t.s ? (t.s = -t.s) : (t = new h(e)), Fe ? Ae(t, x) : t;
  if (
    ((l = e.d),
    (f = t.d),
    (n = t.e),
    (s = e.e),
    (l = l.slice()),
    (o = s - n),
    o)
  ) {
    for (
      c = o < 0,
        c
          ? ((r = l), (o = -o), (u = f.length))
          : ((r = f), (n = s), (u = l.length)),
        i = Math.max(Math.ceil(x / Ne), u) + 2,
        o > i && ((o = i), (r.length = 1)),
        r.reverse(),
        i = o;
      i--;

    )
      r.push(0);
    r.reverse();
  } else {
    for (i = l.length, u = f.length, c = i < u, c && (u = i), i = 0; i < u; i++)
      if (l[i] != f[i]) {
        c = l[i] < f[i];
        break;
      }
    o = 0;
  }
  for (
    c && ((r = l), (l = f), (f = r), (t.s = -t.s)),
      u = l.length,
      i = f.length - u;
    i > 0;
    --i
  )
    l[u++] = 0;
  for (i = f.length; i > o; ) {
    if (l[--i] < f[i]) {
      for (a = i; a && l[--a] === 0; ) l[a] = tt - 1;
      --l[a], (l[i] += tt);
    }
    l[i] -= f[i];
  }
  for (; l[--u] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? ((t.d = l), (t.e = n), Fe ? Ae(t, x) : t) : new h(0);
}
function Qn(e, t, r) {
  var n,
    i = Xe(e),
    a = xr(e.d),
    o = a.length;
  return (
    t
      ? (r && (n = r - o) > 0
          ? (a = a.charAt(0) + "." + a.slice(1) + en(n))
          : o > 1 && (a = a.charAt(0) + "." + a.slice(1)),
        (a = a + (i < 0 ? "e" : "e+") + i))
      : i < 0
      ? ((a = "0." + en(-i - 1) + a), r && (n = r - o) > 0 && (a += en(n)))
      : i >= o
      ? ((a += en(i + 1 - o)),
        r && (n = r - i - 1) > 0 && (a = a + "." + en(n)))
      : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)),
        r && (n = r - o) > 0 && (i + 1 === o && (a += "."), (a += en(n)))),
    e.s < 0 ? "-" + a : a
  );
}
function Bm(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function ob(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (((o.constructor = i), a instanceof i)) {
      (o.s = a.s), (o.e = a.e), (o.d = (a = a.d) ? a.slice() : a);
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0) throw Error(Gn + a);
      if (a > 0) o.s = 1;
      else if (a < 0) (a = -a), (o.s = -1);
      else {
        (o.s = 0), (o.e = 0), (o.d = [0]);
        return;
      }
      if (a === ~~a && a < 1e7) {
        (o.e = 0), (o.d = [a]);
        return;
      }
      return zm(o, a.toString());
    } else if (typeof a != "string") throw Error(Gn + a);
    if (
      (a.charCodeAt(0) === 45 ? ((a = a.slice(1)), (o.s = -1)) : (o.s = 1),
      K5.test(a))
    )
      zm(o, a);
    else throw Error(Gn + a);
  }
  if (
    ((i.prototype = G),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.clone = ob),
    (i.config = i.set = X5),
    e === void 0 && (e = {}),
    e)
  )
    for (
      n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0;
      t < n.length;

    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return i.config(e), i;
}
function X5(e) {
  if (!e || typeof e != "object") throw Error(ir + "Object expected");
  var t,
    r,
    n,
    i = [
      "precision",
      1,
      la,
      "rounding",
      0,
      8,
      "toExpNeg",
      -1 / 0,
      0,
      "toExpPos",
      0,
      1 / 0,
    ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[(r = i[t])]) !== void 0)
      if (sa(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Gn + r + ": " + n);
  if ((n = e[(r = "LN10")]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Gn + r + ": " + n);
  return this;
}
var lv = ob(G5);
jt = new lv(1);
var Oe = lv;
function Y5(e) {
  return e6(e) || Z5(e) || J5(e) || Q5();
}
function Q5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function J5(e, t) {
  if (!!e) {
    if (typeof e == "string") return id(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return id(e, t);
  }
}
function Z5(e) {
  if (typeof Symbol != "undefined" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function e6(e) {
  if (Array.isArray(e)) return id(e);
}
function id(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var t6 = function (t) {
    return t;
  },
  ub = { "@@functional/placeholder": !0 },
  lb = function (t) {
    return t === ub;
  },
  Um = function (t) {
    return function r() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          lb(arguments.length <= 0 ? void 0 : arguments[0]))
        ? r
        : t.apply(void 0, arguments);
    };
  },
  r6 = function e(t, r) {
    return t === 1
      ? r
      : Um(function () {
          for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
          var o = i.filter(function (u) {
            return u !== ub;
          }).length;
          return o >= t
            ? r.apply(void 0, i)
            : e(
                t - o,
                Um(function () {
                  for (
                    var u = arguments.length, l = new Array(u), s = 0;
                    s < u;
                    s++
                  )
                    l[s] = arguments[s];
                  var c = i.map(function (f) {
                    return lb(f) ? l.shift() : f;
                  });
                  return r.apply(void 0, Y5(c).concat(l));
                })
              );
        });
  },
  cc = function (t) {
    return r6(t.length, t);
  },
  ad = function (t, r) {
    for (var n = [], i = t; i < r; ++i) n[i - t] = i;
    return n;
  },
  n6 = cc(function (e, t) {
    return Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map(function (r) {
            return t[r];
          })
          .map(e);
  }),
  i6 = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    if (!r.length) return t6;
    var i = r.reverse(),
      a = i[0],
      o = i.slice(1);
    return function () {
      return o.reduce(function (u, l) {
        return l(u);
      }, a.apply(void 0, arguments));
    };
  },
  od = function (t) {
    return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
  },
  sb = function (t) {
    var r = null,
      n = null;
    return function () {
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
        a[o] = arguments[o];
      return (
        (r &&
          a.every(function (u, l) {
            return u === r[l];
          })) ||
          ((r = a), (n = t.apply(void 0, a))),
        n
      );
    };
  };
function a6(e) {
  var t;
  return (
    e === 0
      ? (t = 1)
      : (t = Math.floor(new Oe(e).abs().log(10).toNumber()) + 1),
    t
  );
}
function o6(e, t, r) {
  for (var n = new Oe(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), (n = n.add(r)), i++;
  return a;
}
var u6 = cc(function (e, t, r) {
    var n = +e,
      i = +t;
    return n + r * (i - n);
  }),
  l6 = cc(function (e, t, r) {
    var n = t - +e;
    return (n = n || 1 / 0), (r - e) / n;
  }),
  s6 = cc(function (e, t, r) {
    var n = t - +e;
    return (n = n || 1 / 0), Math.max(0, Math.min(1, (r - e) / n));
  }),
  fc = {
    rangeStep: o6,
    getDigitCount: a6,
    interpolateNumber: u6,
    uninterpolateNumber: l6,
    uninterpolateTruncation: s6,
  };
function ud(e) {
  return h6(e) || f6(e) || cb(e) || c6();
}
function c6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f6(e) {
  if (typeof Symbol != "undefined" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function h6(e) {
  if (Array.isArray(e)) return ld(e);
}
function wo(e, t) {
  return v6(e) || p6(e, t) || cb(e, t) || d6();
}
function d6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cb(e, t) {
  if (!!e) {
    if (typeof e == "string") return ld(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ld(e, t);
  }
}
function ld(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function p6(e, t) {
  if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (l) {
      (i = !0), (a = l);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function v6(e) {
  if (Array.isArray(e)) return e;
}
function fb(e) {
  var t = wo(e, 2),
    r = t[0],
    n = t[1],
    i = r,
    a = n;
  return r > n && ((i = n), (a = r)), [i, a];
}
function hb(e, t, r) {
  if (e.lte(0)) return new Oe(0);
  var n = fc.getDigitCount(e.toNumber()),
    i = new Oe(10).pow(n),
    a = e.div(i),
    o = n !== 1 ? 0.05 : 0.1,
    u = new Oe(Math.ceil(a.div(o).toNumber())).add(r).mul(o),
    l = u.mul(i);
  return t ? l : new Oe(Math.ceil(l));
}
function y6(e, t, r) {
  var n = 1,
    i = new Oe(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1
      ? ((n = new Oe(10).pow(fc.getDigitCount(e) - 1)),
        (i = new Oe(Math.floor(i.div(n).toNumber())).mul(n)))
      : a > 1 && (i = new Oe(Math.floor(e)));
  } else
    e === 0
      ? (i = new Oe(Math.floor((t - 1) / 2)))
      : r || (i = new Oe(Math.floor(e)));
  var o = Math.floor((t - 1) / 2),
    u = i6(
      n6(function (l) {
        return i.add(new Oe(l - o).mul(n)).toNumber();
      }),
      ad
    );
  return u(0, t);
}
function db(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return { step: new Oe(0), tickMin: new Oe(0), tickMax: new Oe(0) };
  var a = hb(new Oe(t).sub(e).div(r - 1), n, i),
    o;
  e <= 0 && t >= 0
    ? (o = new Oe(0))
    : ((o = new Oe(e).add(t).div(2)), (o = o.sub(new Oe(o).mod(a))));
  var u = Math.ceil(o.sub(e).div(a).toNumber()),
    l = Math.ceil(new Oe(t).sub(o).div(a).toNumber()),
    s = u + l + 1;
  return s > r
    ? db(e, t, r, n, i + 1)
    : (s < r && ((l = t > 0 ? l + (r - s) : l), (u = t > 0 ? u : u + (r - s))),
      {
        step: a,
        tickMin: o.sub(new Oe(u).mul(a)),
        tickMax: o.add(new Oe(l).mul(a)),
      });
}
function g6(e) {
  var t = wo(e, 2),
    r = t[0],
    n = t[1],
    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = Math.max(i, 2),
    u = fb([r, n]),
    l = wo(u, 2),
    s = l[0],
    c = l[1];
  if (s === -1 / 0 || c === 1 / 0) {
    var f =
      c === 1 / 0
        ? [s].concat(
            ud(
              ad(0, i - 1).map(function () {
                return 1 / 0;
              })
            )
          )
        : [].concat(
            ud(
              ad(0, i - 1).map(function () {
                return -1 / 0;
              })
            ),
            [c]
          );
    return r > n ? od(f) : f;
  }
  if (s === c) return y6(s, i, a);
  var h = db(s, c, o, a),
    x = h.step,
    v = h.tickMin,
    d = h.tickMax,
    _ = fc.rangeStep(v, d.add(new Oe(0.1).mul(x)), x);
  return r > n ? od(_) : _;
}
function m6(e, t) {
  var r = wo(e, 2),
    n = r[0],
    i = r[1],
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = fb([n, i]),
    u = wo(o, 2),
    l = u[0],
    s = u[1];
  if (l === -1 / 0 || s === 1 / 0) return [n, i];
  if (l === s) return [l];
  var c = Math.max(t, 2),
    f = hb(new Oe(s).sub(l).div(c - 1), a, 0),
    h = [].concat(
      ud(fc.rangeStep(new Oe(l), new Oe(s).sub(new Oe(0.99).mul(f)), f)),
      [s]
    );
  return n > i ? od(h) : h;
}
var x6 = sb(g6),
  _6 = sb(m6);
function Lo(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function sv(e) {
  let t = e,
    r = e;
  e.length === 1 && ((t = (o, u) => e(o) - u), (r = w6(e)));
  function n(o, u, l, s) {
    for (l == null && (l = 0), s == null && (s = o.length); l < s; ) {
      const c = (l + s) >>> 1;
      r(o[c], u) < 0 ? (l = c + 1) : (s = c);
    }
    return l;
  }
  function i(o, u, l, s) {
    for (l == null && (l = 0), s == null && (s = o.length); l < s; ) {
      const c = (l + s) >>> 1;
      r(o[c], u) > 0 ? (s = c) : (l = c + 1);
    }
    return l;
  }
  function a(o, u, l, s) {
    l == null && (l = 0), s == null && (s = o.length);
    const c = n(o, u, l, s - 1);
    return c > l && t(o[c - 1], u) > -t(o[c], u) ? c - 1 : c;
  }
  return { left: n, center: a, right: i };
}
function w6(e) {
  return (t, r) => Lo(e(t), r);
}
function pb(e) {
  return e === null ? NaN : +e;
}
function* b6(e, t) {
  if (t === void 0) for (let r of e) r != null && (r = +r) >= r && (yield r);
  else {
    let r = -1;
    for (let n of e) (n = t(n, ++r, e)) != null && (n = +n) >= n && (yield n);
  }
}
const S6 = sv(Lo),
  O6 = S6.right;
sv(pb).center;
var Fo = O6,
  sd = Math.sqrt(50),
  cd = Math.sqrt(10),
  fd = Math.sqrt(2);
function hd(e, t, r) {
  var n,
    i = -1,
    a,
    o,
    u;
  if (((t = +t), (e = +e), (r = +r), e === t && r > 0)) return [e];
  if (
    ((n = t < e) && ((a = e), (e = t), (t = a)),
    (u = vb(e, t, r)) === 0 || !isFinite(u))
  )
    return [];
  if (u > 0) {
    let l = Math.round(e / u),
      s = Math.round(t / u);
    for (
      l * u < e && ++l, s * u > t && --s, o = new Array((a = s - l + 1));
      ++i < a;

    )
      o[i] = (l + i) * u;
  } else {
    u = -u;
    let l = Math.round(e * u),
      s = Math.round(t * u);
    for (
      l / u < e && ++l, s / u > t && --s, o = new Array((a = s - l + 1));
      ++i < a;

    )
      o[i] = (l + i) / u;
  }
  return n && o.reverse(), o;
}
function vb(e, t, r) {
  var n = (t - e) / Math.max(0, r),
    i = Math.floor(Math.log(n) / Math.LN10),
    a = n / Math.pow(10, i);
  return i >= 0
    ? (a >= sd ? 10 : a >= cd ? 5 : a >= fd ? 2 : 1) * Math.pow(10, i)
    : -Math.pow(10, -i) / (a >= sd ? 10 : a >= cd ? 5 : a >= fd ? 2 : 1);
}
function dd(e, t, r) {
  var n = Math.abs(t - e) / Math.max(0, r),
    i = Math.pow(10, Math.floor(Math.log(n) / Math.LN10)),
    a = n / i;
  return (
    a >= sd ? (i *= 10) : a >= cd ? (i *= 5) : a >= fd && (i *= 2),
    t < e ? -i : i
  );
}
function Wm(e, t) {
  let r;
  if (t === void 0)
    for (const n of e)
      n != null && (r < n || (r === void 0 && n >= n)) && (r = n);
  else {
    let n = -1;
    for (let i of e)
      (i = t(i, ++n, e)) != null &&
        (r < i || (r === void 0 && i >= i)) &&
        (r = i);
  }
  return r;
}
function Hm(e, t) {
  let r;
  if (t === void 0)
    for (const n of e)
      n != null && (r > n || (r === void 0 && n >= n)) && (r = n);
  else {
    let n = -1;
    for (let i of e)
      (i = t(i, ++n, e)) != null &&
        (r > i || (r === void 0 && i >= i)) &&
        (r = i);
  }
  return r;
}
function yb(e, t, r = 0, n = e.length - 1, i = Lo) {
  for (; n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1,
        s = t - r + 1,
        c = Math.log(l),
        f = 0.5 * Math.exp((2 * c) / 3),
        h = 0.5 * Math.sqrt((c * f * (l - f)) / l) * (s - l / 2 < 0 ? -1 : 1),
        x = Math.max(r, Math.floor(t - (s * f) / l + h)),
        v = Math.min(n, Math.floor(t + ((l - s) * f) / l + h));
      yb(e, t, x, v, i);
    }
    const a = e[t];
    let o = r,
      u = n;
    for (Ta(e, r, t), i(e[n], a) > 0 && Ta(e, r, n); o < u; ) {
      for (Ta(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
      for (; i(e[u], a) > 0; ) --u;
    }
    i(e[r], a) === 0 ? Ta(e, r, u) : (++u, Ta(e, u, n)),
      u <= t && (r = u + 1),
      t <= u && (n = u - 1);
  }
  return e;
}
function Ta(e, t, r) {
  const n = e[t];
  (e[t] = e[r]), (e[r] = n);
}
function A6(e, t, r) {
  if (((e = Float64Array.from(b6(e, r))), !!(n = e.length))) {
    if ((t = +t) <= 0 || n < 2) return Hm(e);
    if (t >= 1) return Wm(e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = Wm(yb(e, a).subarray(0, a + 1)),
      u = Hm(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function k6(e, t, r = pb) {
  if (!!(n = e.length)) {
    if ((t = +t) <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = +r(e[a], a, e),
      u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}
function E6(e, t, r) {
  (e = +e),
    (t = +t),
    (r = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +r);
  for (
    var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i);
    ++n < i;

  )
    a[n] = e + n * r;
  return a;
}
function ar(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Gr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e),
        typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const pd = Symbol("implicit");
function cv() {
  var e = new Map(),
    t = [],
    r = [],
    n = pd;
  function i(a) {
    var o = a + "",
      u = e.get(o);
    if (!u) {
      if (n !== pd) return n;
      e.set(o, (u = t.push(a)));
    }
    return r[(u - 1) % r.length];
  }
  return (
    (i.domain = function (a) {
      if (!arguments.length) return t.slice();
      (t = []), (e = new Map());
      for (const o of a) {
        const u = o + "";
        e.has(u) || e.set(u, t.push(o));
      }
      return i;
    }),
    (i.range = function (a) {
      return arguments.length ? ((r = Array.from(a)), i) : r.slice();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return cv(t, r).unknown(n);
    }),
    ar.apply(i, arguments),
    i
  );
}
function bo() {
  var e = cv().unknown(void 0),
    t = e.domain,
    r = e.range,
    n = 0,
    i = 1,
    a,
    o,
    u = !1,
    l = 0,
    s = 0,
    c = 0.5;
  delete e.unknown;
  function f() {
    var h = t().length,
      x = i < n,
      v = x ? i : n,
      d = x ? n : i;
    (a = (d - v) / Math.max(1, h - l + s * 2)),
      u && (a = Math.floor(a)),
      (v += (d - v - a * (h - l)) * c),
      (o = a * (1 - l)),
      u && ((v = Math.round(v)), (o = Math.round(o)));
    var _ = E6(h).map(function (p) {
      return v + a * p;
    });
    return r(x ? _.reverse() : _);
  }
  return (
    (e.domain = function (h) {
      return arguments.length ? (t(h), f()) : t();
    }),
    (e.range = function (h) {
      return arguments.length
        ? (([n, i] = h), (n = +n), (i = +i), f())
        : [n, i];
    }),
    (e.rangeRound = function (h) {
      return ([n, i] = h), (n = +n), (i = +i), (u = !0), f();
    }),
    (e.bandwidth = function () {
      return o;
    }),
    (e.step = function () {
      return a;
    }),
    (e.round = function (h) {
      return arguments.length ? ((u = !!h), f()) : u;
    }),
    (e.padding = function (h) {
      return arguments.length ? ((l = Math.min(1, (s = +h))), f()) : l;
    }),
    (e.paddingInner = function (h) {
      return arguments.length ? ((l = Math.min(1, h)), f()) : l;
    }),
    (e.paddingOuter = function (h) {
      return arguments.length ? ((s = +h), f()) : s;
    }),
    (e.align = function (h) {
      return arguments.length ? ((c = Math.max(0, Math.min(1, h))), f()) : c;
    }),
    (e.copy = function () {
      return bo(t(), [n, i]).round(u).paddingInner(l).paddingOuter(s).align(c);
    }),
    ar.apply(f(), arguments)
  );
}
function gb(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return gb(t());
    }),
    e
  );
}
function Qa() {
  return gb(bo.apply(null, arguments).paddingInner(1));
}
function fv(e, t, r) {
  (e.prototype = t.prototype = r), (r.constructor = e);
}
function mb(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function zo() {}
var So = 0.7,
  Yl = 1 / So,
  Ii = "\\s*([+-]?\\d+)\\s*",
  Oo = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  Sr = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  T6 = /^#([0-9a-f]{3,8})$/,
  P6 = new RegExp("^rgb\\(" + [Ii, Ii, Ii] + "\\)$"),
  $6 = new RegExp("^rgb\\(" + [Sr, Sr, Sr] + "\\)$"),
  C6 = new RegExp("^rgba\\(" + [Ii, Ii, Ii, Oo] + "\\)$"),
  M6 = new RegExp("^rgba\\(" + [Sr, Sr, Sr, Oo] + "\\)$"),
  I6 = new RegExp("^hsl\\(" + [Oo, Sr, Sr] + "\\)$"),
  N6 = new RegExp("^hsla\\(" + [Oo, Sr, Sr, Oo] + "\\)$"),
  Vm = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
fv(zo, Ao, {
  copy: function (e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable: function () {
    return this.rgb().displayable();
  },
  hex: qm,
  formatHex: qm,
  formatHsl: R6,
  formatRgb: Gm,
  toString: Gm,
});
function qm() {
  return this.rgb().formatHex();
}
function R6() {
  return xb(this).formatHsl();
}
function Gm() {
  return this.rgb().formatRgb();
}
function Ao(e) {
  var t, r;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = T6.exec(e))
      ? ((r = t[1].length),
        (t = parseInt(t[1], 16)),
        r === 6
          ? Km(t)
          : r === 3
          ? new Lt(
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              ((t & 15) << 4) | (t & 15),
              1
            )
          : r === 8
          ? _u(
              (t >> 24) & 255,
              (t >> 16) & 255,
              (t >> 8) & 255,
              (t & 255) / 255
            )
          : r === 4
          ? _u(
              ((t >> 12) & 15) | ((t >> 8) & 240),
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              (((t & 15) << 4) | (t & 15)) / 255
            )
          : null)
      : (t = P6.exec(e))
      ? new Lt(t[1], t[2], t[3], 1)
      : (t = $6.exec(e))
      ? new Lt((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
      : (t = C6.exec(e))
      ? _u(t[1], t[2], t[3], t[4])
      : (t = M6.exec(e))
      ? _u((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
      : (t = I6.exec(e))
      ? Qm(t[1], t[2] / 100, t[3] / 100, 1)
      : (t = N6.exec(e))
      ? Qm(t[1], t[2] / 100, t[3] / 100, t[4])
      : Vm.hasOwnProperty(e)
      ? Km(Vm[e])
      : e === "transparent"
      ? new Lt(NaN, NaN, NaN, 0)
      : null
  );
}
function Km(e) {
  return new Lt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function _u(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Lt(e, t, r, n);
}
function j6(e) {
  return (
    e instanceof zo || (e = Ao(e)),
    e ? ((e = e.rgb()), new Lt(e.r, e.g, e.b, e.opacity)) : new Lt()
  );
}
function vd(e, t, r, n) {
  return arguments.length === 1 ? j6(e) : new Lt(e, t, r, n == null ? 1 : n);
}
function Lt(e, t, r, n) {
  (this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n);
}
fv(
  Lt,
  vd,
  mb(zo, {
    brighter: function (e) {
      return (
        (e = e == null ? Yl : Math.pow(Yl, e)),
        new Lt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker: function (e) {
      return (
        (e = e == null ? So : Math.pow(So, e)),
        new Lt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb: function () {
      return this;
    },
    displayable: function () {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: Xm,
    formatHex: Xm,
    formatRgb: Ym,
    toString: Ym,
  })
);
function Xm() {
  return "#" + yf(this.r) + yf(this.g) + yf(this.b);
}
function Ym() {
  var e = this.opacity;
  return (
    (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))),
    (e === 1 ? "rgb(" : "rgba(") +
      Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
      ", " +
      Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
      ", " +
      Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
      (e === 1 ? ")" : ", " + e + ")")
  );
}
function yf(e) {
  return (
    (e = Math.max(0, Math.min(255, Math.round(e) || 0))),
    (e < 16 ? "0" : "") + e.toString(16)
  );
}
function Qm(e, t, r, n) {
  return (
    n <= 0
      ? (e = t = r = NaN)
      : r <= 0 || r >= 1
      ? (e = t = NaN)
      : t <= 0 && (e = NaN),
    new yr(e, t, r, n)
  );
}
function xb(e) {
  if (e instanceof yr) return new yr(e.h, e.s, e.l, e.opacity);
  if ((e instanceof zo || (e = Ao(e)), !e)) return new yr();
  if (e instanceof yr) return e;
  e = e.rgb();
  var t = e.r / 255,
    r = e.g / 255,
    n = e.b / 255,
    i = Math.min(t, r, n),
    a = Math.max(t, r, n),
    o = NaN,
    u = a - i,
    l = (a + i) / 2;
  return (
    u
      ? (t === a
          ? (o = (r - n) / u + (r < n) * 6)
          : r === a
          ? (o = (n - t) / u + 2)
          : (o = (t - r) / u + 4),
        (u /= l < 0.5 ? a + i : 2 - a - i),
        (o *= 60))
      : (u = l > 0 && l < 1 ? 0 : o),
    new yr(o, u, l, e.opacity)
  );
}
function D6(e, t, r, n) {
  return arguments.length === 1 ? xb(e) : new yr(e, t, r, n == null ? 1 : n);
}
function yr(e, t, r, n) {
  (this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n);
}
fv(
  yr,
  D6,
  mb(zo, {
    brighter: function (e) {
      return (
        (e = e == null ? Yl : Math.pow(Yl, e)),
        new yr(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker: function (e) {
      return (
        (e = e == null ? So : Math.pow(So, e)),
        new yr(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb: function () {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        n = r + (r < 0.5 ? r : 1 - r) * t,
        i = 2 * r - n;
      return new Lt(
        gf(e >= 240 ? e - 240 : e + 120, i, n),
        gf(e, i, n),
        gf(e < 120 ? e + 240 : e - 120, i, n),
        this.opacity
      );
    },
    displayable: function () {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl: function () {
      var e = this.opacity;
      return (
        (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))),
        (e === 1 ? "hsl(" : "hsla(") +
          (this.h || 0) +
          ", " +
          (this.s || 0) * 100 +
          "%, " +
          (this.l || 0) * 100 +
          "%" +
          (e === 1 ? ")" : ", " + e + ")")
      );
    },
  })
);
function gf(e, t, r) {
  return (
    (e < 60
      ? t + ((r - t) * e) / 60
      : e < 180
      ? r
      : e < 240
      ? t + ((r - t) * (240 - e)) / 60
      : t) * 255
  );
}
var hv = (e) => () => e;
function L6(e, t) {
  return function (r) {
    return e + r * t;
  };
}
function F6(e, t, r) {
  return (
    (e = Math.pow(e, r)),
    (t = Math.pow(t, r) - e),
    (r = 1 / r),
    function (n) {
      return Math.pow(e + n * t, r);
    }
  );
}
function z6(e) {
  return (e = +e) == 1
    ? _b
    : function (t, r) {
        return r - t ? F6(t, r, e) : hv(isNaN(t) ? r : t);
      };
}
function _b(e, t) {
  var r = t - e;
  return r ? L6(e, r) : hv(isNaN(e) ? t : e);
}
var Jm = (function e(t) {
  var r = z6(t);
  function n(i, a) {
    var o = r((i = vd(i)).r, (a = vd(a)).r),
      u = r(i.g, a.g),
      l = r(i.b, a.b),
      s = _b(i.opacity, a.opacity);
    return function (c) {
      return (
        (i.r = o(c)), (i.g = u(c)), (i.b = l(c)), (i.opacity = s(c)), i + ""
      );
    };
  }
  return (n.gamma = e), n;
})(1);
function B6(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0,
    n = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function U6(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function W6(e, t) {
  var r = t ? t.length : 0,
    n = e ? Math.min(r, e.length) : 0,
    i = new Array(n),
    a = new Array(r),
    o;
  for (o = 0; o < n; ++o) i[o] = ca(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function (u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function H6(e, t) {
  var r = new Date();
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return r.setTime(e * (1 - n) + t * n), r;
    }
  );
}
function Ql(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return e * (1 - r) + t * r;
    }
  );
}
function V6(e, t) {
  var r = {},
    n = {},
    i;
  (e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {});
  for (i in t) i in e ? (r[i] = ca(e[i], t[i])) : (n[i] = t[i]);
  return function (a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var yd = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  mf = new RegExp(yd.source, "g");
function q6(e) {
  return function () {
    return e;
  };
}
function G6(e) {
  return function (t) {
    return e(t) + "";
  };
}
function K6(e, t) {
  var r = (yd.lastIndex = mf.lastIndex = 0),
    n,
    i,
    a,
    o = -1,
    u = [],
    l = [];
  for (e = e + "", t = t + ""; (n = yd.exec(e)) && (i = mf.exec(t)); )
    (a = i.index) > r &&
      ((a = t.slice(r, a)), u[o] ? (u[o] += a) : (u[++o] = a)),
      (n = n[0]) === (i = i[0])
        ? u[o]
          ? (u[o] += i)
          : (u[++o] = i)
        : ((u[++o] = null), l.push({ i: o, x: Ql(n, i) })),
      (r = mf.lastIndex);
  return (
    r < t.length && ((a = t.slice(r)), u[o] ? (u[o] += a) : (u[++o] = a)),
    u.length < 2
      ? l[0]
        ? G6(l[0].x)
        : q6(t)
      : ((t = l.length),
        function (s) {
          for (var c = 0, f; c < t; ++c) u[(f = l[c]).i] = f.x(s);
          return u.join("");
        })
  );
}
function ca(e, t) {
  var r = typeof t,
    n;
  return t == null || r === "boolean"
    ? hv(t)
    : (r === "number"
        ? Ql
        : r === "string"
        ? (n = Ao(t))
          ? ((t = n), Jm)
          : K6
        : t instanceof Ao
        ? Jm
        : t instanceof Date
        ? H6
        : U6(t)
        ? B6
        : Array.isArray(t)
        ? W6
        : (typeof t.valueOf != "function" && typeof t.toString != "function") ||
          isNaN(t)
        ? V6
        : Ql)(e, t);
}
function dv(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return Math.round(e * (1 - r) + t * r);
    }
  );
}
function X6(e, t) {
  t === void 0 && ((t = e), (e = ca));
  for (
    var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n);
    r < n;

  )
    a[r] = e(i, (i = t[++r]));
  return function (o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor((o *= n))));
    return a[u](o - u);
  };
}
function Y6(e) {
  return function () {
    return e;
  };
}
function Jl(e) {
  return +e;
}
var Zm = [0, 1];
function xt(e) {
  return e;
}
function gd(e, t) {
  return (t -= e = +e)
    ? function (r) {
        return (r - e) / t;
      }
    : Y6(isNaN(t) ? NaN : 0.5);
}
function Q6(e, t) {
  var r;
  return (
    e > t && ((r = e), (e = t), (t = r)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function J6(e, t, r) {
  var n = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < n ? ((n = gd(i, n)), (a = r(o, a))) : ((n = gd(n, i)), (a = r(a, o))),
    function (u) {
      return a(n(u));
    }
  );
}
function Z6(e, t, r) {
  var n = Math.min(e.length, t.length) - 1,
    i = new Array(n),
    a = new Array(n),
    o = -1;
  for (
    e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < n;

  )
    (i[o] = gd(e[o], e[o + 1])), (a[o] = r(t[o], t[o + 1]));
  return function (u) {
    var l = Fo(e, u, 1, n) - 1;
    return a[l](i[l](u));
  };
}
function Bo(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function hc() {
  var e = Zm,
    t = Zm,
    r = ca,
    n,
    i,
    a,
    o = xt,
    u,
    l,
    s;
  function c() {
    var h = Math.min(e.length, t.length);
    return (
      o !== xt && (o = Q6(e[0], e[h - 1])),
      (u = h > 2 ? Z6 : J6),
      (l = s = null),
      f
    );
  }
  function f(h) {
    return h == null || isNaN((h = +h))
      ? a
      : (l || (l = u(e.map(n), t, r)))(n(o(h)));
  }
  return (
    (f.invert = function (h) {
      return o(i((s || (s = u(t, e.map(n), Ql)))(h)));
    }),
    (f.domain = function (h) {
      return arguments.length ? ((e = Array.from(h, Jl)), c()) : e.slice();
    }),
    (f.range = function (h) {
      return arguments.length ? ((t = Array.from(h)), c()) : t.slice();
    }),
    (f.rangeRound = function (h) {
      return (t = Array.from(h)), (r = dv), c();
    }),
    (f.clamp = function (h) {
      return arguments.length ? ((o = h ? !0 : xt), c()) : o !== xt;
    }),
    (f.interpolate = function (h) {
      return arguments.length ? ((r = h), c()) : r;
    }),
    (f.unknown = function (h) {
      return arguments.length ? ((a = h), f) : a;
    }),
    function (h, x) {
      return (n = h), (i = x), c();
    }
  );
}
function pv() {
  return hc()(xt, xt);
}
function eF(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString("en").replace(/,/g, "")
    : e.toString(10);
}
function Zl(e, t) {
  if (
    (r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0
  )
    return null;
  var r,
    n = e.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
}
function Yi(e) {
  return (e = Zl(Math.abs(e))), e ? e[1] : NaN;
}
function tF(e, t) {
  return function (r, n) {
    for (
      var i = r.length, a = [], o = 0, u = e[0], l = 0;
      i > 0 &&
      u > 0 &&
      (l + u + 1 > n && (u = Math.max(1, n - l)),
      a.push(r.substring((i -= u), i + u)),
      !((l += u + 1) > n));

    )
      u = e[(o = (o + 1) % e.length)];
    return a.reverse().join(t);
  };
}
function rF(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (r) {
      return e[+r];
    });
  };
}
var nF =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function es(e) {
  if (!(t = nF.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new vv({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
es.prototype = vv.prototype;
function vv(e) {
  (this.fill = e.fill === void 0 ? " " : e.fill + ""),
    (this.align = e.align === void 0 ? ">" : e.align + ""),
    (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
    (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? "" : e.type + "");
}
vv.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function iF(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), (i = r);
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var wb;
function aF(e, t) {
  var r = Zl(e, t);
  if (!r) return e + "";
  var n = r[0],
    i = r[1],
    a = i - (wb = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = n.length;
  return a === o
    ? n
    : a > o
    ? n + new Array(a - o + 1).join("0")
    : a > 0
    ? n.slice(0, a) + "." + n.slice(a)
    : "0." + new Array(1 - a).join("0") + Zl(e, Math.max(0, t + a - 1))[0];
}
function e0(e, t) {
  var r = Zl(e, t);
  if (!r) return e + "";
  var n = r[0],
    i = r[1];
  return i < 0
    ? "0." + new Array(-i).join("0") + n
    : n.length > i + 1
    ? n.slice(0, i + 1) + "." + n.slice(i + 1)
    : n + new Array(i - n.length + 2).join("0");
}
var t0 = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: eF,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => e0(e * 100, t),
  r: e0,
  s: aF,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function r0(e) {
  return e;
}
var n0 = Array.prototype.map,
  i0 = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "\xB5",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function oF(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? r0
        : tF(n0.call(e.grouping, Number), e.thousands + ""),
    r = e.currency === void 0 ? "" : e.currency[0] + "",
    n = e.currency === void 0 ? "" : e.currency[1] + "",
    i = e.decimal === void 0 ? "." : e.decimal + "",
    a = e.numerals === void 0 ? r0 : rF(n0.call(e.numerals, String)),
    o = e.percent === void 0 ? "%" : e.percent + "",
    u = e.minus === void 0 ? "\u2212" : e.minus + "",
    l = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(f) {
    f = es(f);
    var h = f.fill,
      x = f.align,
      v = f.sign,
      d = f.symbol,
      _ = f.zero,
      p = f.width,
      m = f.comma,
      g = f.precision,
      y = f.trim,
      w = f.type;
    w === "n"
      ? ((m = !0), (w = "g"))
      : t0[w] || (g === void 0 && (g = 12), (y = !0), (w = "g")),
      (_ || (h === "0" && x === "=")) && ((_ = !0), (h = "0"), (x = "="));
    var b =
        d === "$"
          ? r
          : d === "#" && /[boxX]/.test(w)
          ? "0" + w.toLowerCase()
          : "",
      S = d === "$" ? n : /[%p]/.test(w) ? o : "",
      O = t0[w],
      A = /[defgprs%]/.test(w);
    g =
      g === void 0
        ? 6
        : /[gprs]/.test(w)
        ? Math.max(1, Math.min(21, g))
        : Math.max(0, Math.min(20, g));
    function E(k) {
      var $ = b,
        P = S,
        M,
        D,
        N;
      if (w === "c") (P = O(k) + P), (k = "");
      else {
        k = +k;
        var W = k < 0 || 1 / k < 0;
        if (
          ((k = isNaN(k) ? l : O(Math.abs(k), g)),
          y && (k = iF(k)),
          W && +k == 0 && v !== "+" && (W = !1),
          ($ = (W ? (v === "(" ? v : u) : v === "-" || v === "(" ? "" : v) + $),
          (P =
            (w === "s" ? i0[8 + wb / 3] : "") +
            P +
            (W && v === "(" ? ")" : "")),
          A)
        ) {
          for (M = -1, D = k.length; ++M < D; )
            if (((N = k.charCodeAt(M)), 48 > N || N > 57)) {
              (P = (N === 46 ? i + k.slice(M + 1) : k.slice(M)) + P),
                (k = k.slice(0, M));
              break;
            }
        }
      }
      m && !_ && (k = t(k, 1 / 0));
      var T = $.length + k.length + P.length,
        R = T < p ? new Array(p - T + 1).join(h) : "";
      switch (
        (m && _ && ((k = t(R + k, R.length ? p - P.length : 1 / 0)), (R = "")),
        x)
      ) {
        case "<":
          k = $ + k + P + R;
          break;
        case "=":
          k = $ + R + k + P;
          break;
        case "^":
          k = R.slice(0, (T = R.length >> 1)) + $ + k + P + R.slice(T);
          break;
        default:
          k = R + $ + k + P;
          break;
      }
      return a(k);
    }
    return (
      (E.toString = function () {
        return f + "";
      }),
      E
    );
  }
  function c(f, h) {
    var x = s(((f = es(f)), (f.type = "f"), f)),
      v = Math.max(-8, Math.min(8, Math.floor(Yi(h) / 3))) * 3,
      d = Math.pow(10, -v),
      _ = i0[8 + v / 3];
    return function (p) {
      return x(d * p) + _;
    };
  }
  return { format: s, formatPrefix: c };
}
var wu, yv, bb;
uF({ thousands: ",", grouping: [3], currency: ["$", ""] });
function uF(e) {
  return (wu = oF(e)), (yv = wu.format), (bb = wu.formatPrefix), wu;
}
function lF(e) {
  return Math.max(0, -Yi(Math.abs(e)));
}
function sF(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(Yi(t) / 3))) * 3 - Yi(Math.abs(e))
  );
}
function cF(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, Yi(t) - Yi(e)) + 1
  );
}
function Sb(e, t, r, n) {
  var i = dd(e, t, r),
    a;
  switch (((n = es(n == null ? ",f" : n)), n.type)) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        n.precision == null && !isNaN((a = sF(i, o))) && (n.precision = a),
        bb(n, o)
      );
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null &&
        !isNaN((a = cF(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null &&
        !isNaN((a = lF(i))) &&
        (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return yv(n);
}
function kn(e) {
  var t = e.domain;
  return (
    (e.ticks = function (r) {
      var n = t();
      return hd(n[0], n[n.length - 1], r == null ? 10 : r);
    }),
    (e.tickFormat = function (r, n) {
      var i = t();
      return Sb(i[0], i[i.length - 1], r == null ? 10 : r, n);
    }),
    (e.nice = function (r) {
      r == null && (r = 10);
      var n = t(),
        i = 0,
        a = n.length - 1,
        o = n[i],
        u = n[a],
        l,
        s,
        c = 10;
      for (
        u < o && ((s = o), (o = u), (u = s), (s = i), (i = a), (a = s));
        c-- > 0;

      ) {
        if (((s = vb(o, u, r)), s === l)) return (n[i] = o), (n[a] = u), t(n);
        if (s > 0) (o = Math.floor(o / s) * s), (u = Math.ceil(u / s) * s);
        else if (s < 0) (o = Math.ceil(o * s) / s), (u = Math.floor(u * s) / s);
        else break;
        l = s;
      }
      return e;
    }),
    e
  );
}
function ts() {
  var e = pv();
  return (
    (e.copy = function () {
      return Bo(e, ts());
    }),
    ar.apply(e, arguments),
    kn(e)
  );
}
function Ob(e) {
  var t;
  function r(n) {
    return n == null || isNaN((n = +n)) ? t : n;
  }
  return (
    (r.invert = r),
    (r.domain = r.range =
      function (n) {
        return arguments.length ? ((e = Array.from(n, Jl)), r) : e.slice();
      }),
    (r.unknown = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.copy = function () {
      return Ob(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, Jl) : [0, 1]),
    kn(r)
  );
}
function Ab(e, t) {
  e = e.slice();
  var r = 0,
    n = e.length - 1,
    i = e[r],
    a = e[n],
    o;
  return (
    a < i && ((o = r), (r = n), (n = o), (o = i), (i = a), (a = o)),
    (e[r] = t.floor(i)),
    (e[n] = t.ceil(a)),
    e
  );
}
function a0(e) {
  return Math.log(e);
}
function o0(e) {
  return Math.exp(e);
}
function fF(e) {
  return -Math.log(-e);
}
function hF(e) {
  return -Math.exp(-e);
}
function dF(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function pF(e) {
  return e === 10
    ? dF
    : e === Math.E
    ? Math.exp
    : function (t) {
        return Math.pow(e, t);
      };
}
function vF(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)),
        function (t) {
          return Math.log(t) / e;
        });
}
function u0(e) {
  return function (t) {
    return -e(-t);
  };
}
function gv(e) {
  var t = e(a0, o0),
    r = t.domain,
    n = 10,
    i,
    a;
  function o() {
    return (
      (i = vF(n)),
      (a = pF(n)),
      r()[0] < 0 ? ((i = u0(i)), (a = u0(a)), e(fF, hF)) : e(a0, o0),
      t
    );
  }
  return (
    (t.base = function (u) {
      return arguments.length ? ((n = +u), o()) : n;
    }),
    (t.domain = function (u) {
      return arguments.length ? (r(u), o()) : r();
    }),
    (t.ticks = function (u) {
      var l = r(),
        s = l[0],
        c = l[l.length - 1],
        f;
      (f = c < s) && ((h = s), (s = c), (c = h));
      var h = i(s),
        x = i(c),
        v,
        d,
        _,
        p = u == null ? 10 : +u,
        m = [];
      if (!(n % 1) && x - h < p) {
        if (((h = Math.floor(h)), (x = Math.ceil(x)), s > 0)) {
          for (; h <= x; ++h)
            for (d = 1, v = a(h); d < n; ++d)
              if (((_ = v * d), !(_ < s))) {
                if (_ > c) break;
                m.push(_);
              }
        } else
          for (; h <= x; ++h)
            for (d = n - 1, v = a(h); d >= 1; --d)
              if (((_ = v * d), !(_ < s))) {
                if (_ > c) break;
                m.push(_);
              }
        m.length * 2 < p && (m = hd(s, c, p));
      } else m = hd(h, x, Math.min(x - h, p)).map(a);
      return f ? m.reverse() : m;
    }),
    (t.tickFormat = function (u, l) {
      if (
        (l == null && (l = n === 10 ? ".0e" : ","),
        typeof l != "function" && (l = yv(l)),
        u === 1 / 0)
      )
        return l;
      u == null && (u = 10);
      var s = Math.max(1, (n * u) / t.ticks().length);
      return function (c) {
        var f = c / a(Math.round(i(c)));
        return f * n < n - 0.5 && (f *= n), f <= s ? l(c) : "";
      };
    }),
    (t.nice = function () {
      return r(
        Ab(r(), {
          floor: function (u) {
            return a(Math.floor(i(u)));
          },
          ceil: function (u) {
            return a(Math.ceil(i(u)));
          },
        })
      );
    }),
    t
  );
}
function kb() {
  var e = gv(hc()).domain([1, 10]);
  return (
    (e.copy = function () {
      return Bo(e, kb()).base(e.base());
    }),
    ar.apply(e, arguments),
    e
  );
}
function l0(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function s0(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function mv(e) {
  var t = 1,
    r = e(l0(t), s0(t));
  return (
    (r.constant = function (n) {
      return arguments.length ? e(l0((t = +n)), s0(t)) : t;
    }),
    kn(r)
  );
}
function Eb() {
  var e = mv(hc());
  return (
    (e.copy = function () {
      return Bo(e, Eb()).constant(e.constant());
    }),
    ar.apply(e, arguments)
  );
}
function c0(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function yF(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function gF(e) {
  return e < 0 ? -e * e : e * e;
}
function xv(e) {
  var t = e(xt, xt),
    r = 1;
  function n() {
    return r === 1 ? e(xt, xt) : r === 0.5 ? e(yF, gF) : e(c0(r), c0(1 / r));
  }
  return (
    (t.exponent = function (i) {
      return arguments.length ? ((r = +i), n()) : r;
    }),
    kn(t)
  );
}
function _v() {
  var e = xv(hc());
  return (
    (e.copy = function () {
      return Bo(e, _v()).exponent(e.exponent());
    }),
    ar.apply(e, arguments),
    e
  );
}
function mF() {
  return _v.apply(null, arguments).exponent(0.5);
}
function f0(e) {
  return Math.sign(e) * e * e;
}
function xF(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Tb() {
  var e = pv(),
    t = [0, 1],
    r = !1,
    n;
  function i(a) {
    var o = xF(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return (
    (i.invert = function (a) {
      return e.invert(f0(a));
    }),
    (i.domain = function (a) {
      return arguments.length ? (e.domain(a), i) : e.domain();
    }),
    (i.range = function (a) {
      return arguments.length
        ? (e.range((t = Array.from(a, Jl)).map(f0)), i)
        : t.slice();
    }),
    (i.rangeRound = function (a) {
      return i.range(a).round(!0);
    }),
    (i.round = function (a) {
      return arguments.length ? ((r = !!a), i) : r;
    }),
    (i.clamp = function (a) {
      return arguments.length ? (e.clamp(a), i) : e.clamp();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return Tb(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
    }),
    ar.apply(i, arguments),
    kn(i)
  );
}
function Pb() {
  var e = [],
    t = [],
    r = [],
    n;
  function i() {
    var o = 0,
      u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = k6(e, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN((o = +o)) ? n : t[Fo(r, o)];
  }
  return (
    (a.invertExtent = function (o) {
      var u = t.indexOf(o);
      return u < 0
        ? [NaN, NaN]
        : [u > 0 ? r[u - 1] : e[0], u < r.length ? r[u] : e[e.length - 1]];
    }),
    (a.domain = function (o) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let u of o) u != null && !isNaN((u = +u)) && e.push(u);
      return e.sort(Lo), i();
    }),
    (a.range = function (o) {
      return arguments.length ? ((t = Array.from(o)), i()) : t.slice();
    }),
    (a.unknown = function (o) {
      return arguments.length ? ((n = o), a) : n;
    }),
    (a.quantiles = function () {
      return r.slice();
    }),
    (a.copy = function () {
      return Pb().domain(e).range(t).unknown(n);
    }),
    ar.apply(a, arguments)
  );
}
function $b() {
  var e = 0,
    t = 1,
    r = 1,
    n = [0.5],
    i = [0, 1],
    a;
  function o(l) {
    return l != null && l <= l ? i[Fo(n, l, 0, r)] : a;
  }
  function u() {
    var l = -1;
    for (n = new Array(r); ++l < r; )
      n[l] = ((l + 1) * t - (l - r) * e) / (r + 1);
    return o;
  }
  return (
    (o.domain = function (l) {
      return arguments.length
        ? (([e, t] = l), (e = +e), (t = +t), u())
        : [e, t];
    }),
    (o.range = function (l) {
      return arguments.length
        ? ((r = (i = Array.from(l)).length - 1), u())
        : i.slice();
    }),
    (o.invertExtent = function (l) {
      var s = i.indexOf(l);
      return s < 0
        ? [NaN, NaN]
        : s < 1
        ? [e, n[0]]
        : s >= r
        ? [n[r - 1], t]
        : [n[s - 1], n[s]];
    }),
    (o.unknown = function (l) {
      return arguments.length && (a = l), o;
    }),
    (o.thresholds = function () {
      return n.slice();
    }),
    (o.copy = function () {
      return $b().domain([e, t]).range(i).unknown(a);
    }),
    ar.apply(kn(o), arguments)
  );
}
function Cb() {
  var e = [0.5],
    t = [0, 1],
    r,
    n = 1;
  function i(a) {
    return a != null && a <= a ? t[Fo(e, a, 0, n)] : r;
  }
  return (
    (i.domain = function (a) {
      return arguments.length
        ? ((e = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
        : e.slice();
    }),
    (i.range = function (a) {
      return arguments.length
        ? ((t = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
        : t.slice();
    }),
    (i.invertExtent = function (a) {
      var o = t.indexOf(a);
      return [e[o - 1], e[o]];
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((r = a), i) : r;
    }),
    (i.copy = function () {
      return Cb().domain(e).range(t).unknown(r);
    }),
    ar.apply(i, arguments)
  );
}
var xf = new Date(),
  _f = new Date();
function it(e, t, r, n) {
  function i(a) {
    return e((a = arguments.length === 0 ? new Date() : new Date(+a))), a;
  }
  return (
    (i.floor = function (a) {
      return e((a = new Date(+a))), a;
    }),
    (i.ceil = function (a) {
      return e((a = new Date(a - 1))), t(a, 1), e(a), a;
    }),
    (i.round = function (a) {
      var o = i(a),
        u = i.ceil(a);
      return a - o < u - a ? o : u;
    }),
    (i.offset = function (a, o) {
      return t((a = new Date(+a)), o == null ? 1 : Math.floor(o)), a;
    }),
    (i.range = function (a, o, u) {
      var l = [],
        s;
      if (
        ((a = i.ceil(a)),
        (u = u == null ? 1 : Math.floor(u)),
        !(a < o) || !(u > 0))
      )
        return l;
      do l.push((s = new Date(+a))), t(a, u), e(a);
      while (s < a && a < o);
      return l;
    }),
    (i.filter = function (a) {
      return it(
        function (o) {
          if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
        },
        function (o, u) {
          if (o >= o)
            if (u < 0) for (; ++u <= 0; ) for (; t(o, -1), !a(o); );
            else for (; --u >= 0; ) for (; t(o, 1), !a(o); );
        }
      );
    }),
    r &&
      ((i.count = function (a, o) {
        return (
          xf.setTime(+a), _f.setTime(+o), e(xf), e(_f), Math.floor(r(xf, _f))
        );
      }),
      (i.every = function (a) {
        return (
          (a = Math.floor(a)),
          !isFinite(a) || !(a > 0)
            ? null
            : a > 1
            ? i.filter(
                n
                  ? function (o) {
                      return n(o) % a === 0;
                    }
                  : function (o) {
                      return i.count(0, o) % a === 0;
                    }
              )
            : i
        );
      })),
    i
  );
}
var md = it(
  function () {},
  function (e, t) {
    e.setTime(+e + t);
  },
  function (e, t) {
    return t - e;
  }
);
md.every = function (e) {
  return (
    (e = Math.floor(e)),
    !isFinite(e) || !(e > 0)
      ? null
      : e > 1
      ? it(
          function (t) {
            t.setTime(Math.floor(t / e) * e);
          },
          function (t, r) {
            t.setTime(+t + r * e);
          },
          function (t, r) {
            return (r - t) / e;
          }
        )
      : md
  );
};
var _F = md;
const Lr = 1e3,
  Zt = Lr * 60,
  Fr = Zt * 60,
  Jn = Fr * 24,
  wv = Jn * 7,
  h0 = Jn * 30,
  wf = Jn * 365;
var wF = it(
    function (e) {
      e.setTime(e - e.getMilliseconds());
    },
    function (e, t) {
      e.setTime(+e + t * Lr);
    },
    function (e, t) {
      return (t - e) / Lr;
    },
    function (e) {
      return e.getUTCSeconds();
    }
  ),
  Oi = wF,
  bF = it(
    function (e) {
      e.setTime(e - e.getMilliseconds() - e.getSeconds() * Lr);
    },
    function (e, t) {
      e.setTime(+e + t * Zt);
    },
    function (e, t) {
      return (t - e) / Zt;
    },
    function (e) {
      return e.getMinutes();
    }
  ),
  Mb = bF,
  SF = it(
    function (e) {
      e.setTime(
        e - e.getMilliseconds() - e.getSeconds() * Lr - e.getMinutes() * Zt
      );
    },
    function (e, t) {
      e.setTime(+e + t * Fr);
    },
    function (e, t) {
      return (t - e) / Fr;
    },
    function (e) {
      return e.getHours();
    }
  ),
  Ib = SF,
  OF = it(
    (e) => e.setHours(0, 0, 0, 0),
    (e, t) => e.setDate(e.getDate() + t),
    (e, t) =>
      (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Zt) / Jn,
    (e) => e.getDate() - 1
  ),
  dc = OF;
function ii(e) {
  return it(
    function (t) {
      t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0);
    },
    function (t, r) {
      t.setDate(t.getDate() + r * 7);
    },
    function (t, r) {
      return (
        (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Zt) / wv
      );
    }
  );
}
var bv = ii(0),
  xd = ii(1);
ii(2);
ii(3);
var ko = ii(4);
ii(5);
ii(6);
var AF = it(
    function (e) {
      e.setDate(1), e.setHours(0, 0, 0, 0);
    },
    function (e, t) {
      e.setMonth(e.getMonth() + t);
    },
    function (e, t) {
      return (
        t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12
      );
    },
    function (e) {
      return e.getMonth();
    }
  ),
  Nb = AF,
  Rb = it(
    function (e) {
      e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
    },
    function (e, t) {
      e.setFullYear(e.getFullYear() + t);
    },
    function (e, t) {
      return t.getFullYear() - e.getFullYear();
    },
    function (e) {
      return e.getFullYear();
    }
  );
Rb.every = function (e) {
  return !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : it(
        function (t) {
          t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0);
        },
        function (t, r) {
          t.setFullYear(t.getFullYear() + r * e);
        }
      );
};
var Zn = Rb,
  kF = it(
    function (e) {
      e.setUTCSeconds(0, 0);
    },
    function (e, t) {
      e.setTime(+e + t * Zt);
    },
    function (e, t) {
      return (t - e) / Zt;
    },
    function (e) {
      return e.getUTCMinutes();
    }
  ),
  jb = kF,
  EF = it(
    function (e) {
      e.setUTCMinutes(0, 0, 0);
    },
    function (e, t) {
      e.setTime(+e + t * Fr);
    },
    function (e, t) {
      return (t - e) / Fr;
    },
    function (e) {
      return e.getUTCHours();
    }
  ),
  Db = EF,
  TF = it(
    function (e) {
      e.setUTCHours(0, 0, 0, 0);
    },
    function (e, t) {
      e.setUTCDate(e.getUTCDate() + t);
    },
    function (e, t) {
      return (t - e) / Jn;
    },
    function (e) {
      return e.getUTCDate() - 1;
    }
  ),
  pc = TF;
function ai(e) {
  return it(
    function (t) {
      t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0);
    },
    function (t, r) {
      t.setUTCDate(t.getUTCDate() + r * 7);
    },
    function (t, r) {
      return (r - t) / wv;
    }
  );
}
var Sv = ai(0),
  _d = ai(1);
ai(2);
ai(3);
var Eo = ai(4);
ai(5);
ai(6);
var PF = it(
    function (e) {
      e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
    },
    function (e, t) {
      e.setUTCMonth(e.getUTCMonth() + t);
    },
    function (e, t) {
      return (
        t.getUTCMonth() -
        e.getUTCMonth() +
        (t.getUTCFullYear() - e.getUTCFullYear()) * 12
      );
    },
    function (e) {
      return e.getUTCMonth();
    }
  ),
  Lb = PF,
  Fb = it(
    function (e) {
      e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
    },
    function (e, t) {
      e.setUTCFullYear(e.getUTCFullYear() + t);
    },
    function (e, t) {
      return t.getUTCFullYear() - e.getUTCFullYear();
    },
    function (e) {
      return e.getUTCFullYear();
    }
  );
Fb.every = function (e) {
  return !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : it(
        function (t) {
          t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0);
        },
        function (t, r) {
          t.setUTCFullYear(t.getUTCFullYear() + r * e);
        }
      );
};
var ei = Fb;
function zb(e, t, r, n, i, a) {
  const o = [
    [Oi, 1, Lr],
    [Oi, 5, 5 * Lr],
    [Oi, 15, 15 * Lr],
    [Oi, 30, 30 * Lr],
    [a, 1, Zt],
    [a, 5, 5 * Zt],
    [a, 15, 15 * Zt],
    [a, 30, 30 * Zt],
    [i, 1, Fr],
    [i, 3, 3 * Fr],
    [i, 6, 6 * Fr],
    [i, 12, 12 * Fr],
    [n, 1, Jn],
    [n, 2, 2 * Jn],
    [r, 1, wv],
    [t, 1, h0],
    [t, 3, 3 * h0],
    [e, 1, wf],
  ];
  function u(s, c, f) {
    const h = c < s;
    h && ([s, c] = [c, s]);
    const x = f && typeof f.range == "function" ? f : l(s, c, f),
      v = x ? x.range(s, +c + 1) : [];
    return h ? v.reverse() : v;
  }
  function l(s, c, f) {
    const h = Math.abs(c - s) / f,
      x = sv(([, , _]) => _).right(o, h);
    if (x === o.length) return e.every(dd(s / wf, c / wf, f));
    if (x === 0) return _F.every(Math.max(dd(s, c, f), 1));
    const [v, d] = o[h / o[x - 1][2] < o[x][2] / h ? x - 1 : x];
    return v.every(d);
  }
  return [u, l];
}
const [$F, CF] = zb(ei, Lb, Sv, pc, Db, jb),
  [MF, IF] = zb(Zn, Nb, bv, dc, Ib, Mb);
function bf(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Sf(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Pa(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function NF(e) {
  var t = e.dateTime,
    r = e.date,
    n = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    u = e.months,
    l = e.shortMonths,
    s = $a(i),
    c = Ca(i),
    f = $a(a),
    h = Ca(a),
    x = $a(o),
    v = Ca(o),
    d = $a(u),
    _ = Ca(u),
    p = $a(l),
    m = Ca(l),
    g = {
      a: W,
      A: T,
      b: R,
      B: U,
      c: null,
      d: m0,
      e: m0,
      f: nz,
      g: dz,
      G: vz,
      H: ez,
      I: tz,
      j: rz,
      L: Bb,
      m: iz,
      M: az,
      p: Y,
      q: X,
      Q: w0,
      s: b0,
      S: oz,
      u: uz,
      U: lz,
      V: sz,
      w: cz,
      W: fz,
      x: null,
      X: null,
      y: hz,
      Y: pz,
      Z: yz,
      "%": _0,
    },
    y = {
      a: le,
      A: ce,
      b: je,
      B: Pe,
      c: null,
      d: x0,
      e: x0,
      f: _z,
      g: $z,
      G: Mz,
      H: gz,
      I: mz,
      j: xz,
      L: Wb,
      m: wz,
      M: bz,
      p: yt,
      q: ne,
      Q: w0,
      s: b0,
      S: Sz,
      u: Oz,
      U: Az,
      V: kz,
      w: Ez,
      W: Tz,
      x: null,
      X: null,
      y: Pz,
      Y: Cz,
      Z: Iz,
      "%": _0,
    },
    w = {
      a: E,
      A: k,
      b: $,
      B: P,
      c: M,
      d: y0,
      e: y0,
      f: YF,
      g: v0,
      G: p0,
      H: g0,
      I: g0,
      j: qF,
      L: XF,
      m: VF,
      M: GF,
      p: A,
      q: HF,
      Q: JF,
      s: ZF,
      S: KF,
      u: FF,
      U: zF,
      V: BF,
      w: LF,
      W: UF,
      x: D,
      X: N,
      y: v0,
      Y: p0,
      Z: WF,
      "%": QF,
    };
  (g.x = b(r, g)),
    (g.X = b(n, g)),
    (g.c = b(t, g)),
    (y.x = b(r, y)),
    (y.X = b(n, y)),
    (y.c = b(t, y));
  function b(z, J) {
    return function (ee) {
      var j = [],
        pe = -1,
        ie = 0,
        $e = z.length,
        ze,
        qt,
        $r;
      for (ee instanceof Date || (ee = new Date(+ee)); ++pe < $e; )
        z.charCodeAt(pe) === 37 &&
          (j.push(z.slice(ie, pe)),
          (qt = d0[(ze = z.charAt(++pe))]) != null
            ? (ze = z.charAt(++pe))
            : (qt = ze === "e" ? " " : "0"),
          ($r = J[ze]) && (ze = $r(ee, qt)),
          j.push(ze),
          (ie = pe + 1));
      return j.push(z.slice(ie, pe)), j.join("");
    };
  }
  function S(z, J) {
    return function (ee) {
      var j = Pa(1900, void 0, 1),
        pe = O(j, z, (ee += ""), 0),
        ie,
        $e;
      if (pe != ee.length) return null;
      if ("Q" in j) return new Date(j.Q);
      if ("s" in j) return new Date(j.s * 1e3 + ("L" in j ? j.L : 0));
      if (
        (J && !("Z" in j) && (j.Z = 0),
        "p" in j && (j.H = (j.H % 12) + j.p * 12),
        j.m === void 0 && (j.m = "q" in j ? j.q : 0),
        "V" in j)
      ) {
        if (j.V < 1 || j.V > 53) return null;
        "w" in j || (j.w = 1),
          "Z" in j
            ? ((ie = Sf(Pa(j.y, 0, 1))),
              ($e = ie.getUTCDay()),
              (ie = $e > 4 || $e === 0 ? _d.ceil(ie) : _d(ie)),
              (ie = pc.offset(ie, (j.V - 1) * 7)),
              (j.y = ie.getUTCFullYear()),
              (j.m = ie.getUTCMonth()),
              (j.d = ie.getUTCDate() + ((j.w + 6) % 7)))
            : ((ie = bf(Pa(j.y, 0, 1))),
              ($e = ie.getDay()),
              (ie = $e > 4 || $e === 0 ? xd.ceil(ie) : xd(ie)),
              (ie = dc.offset(ie, (j.V - 1) * 7)),
              (j.y = ie.getFullYear()),
              (j.m = ie.getMonth()),
              (j.d = ie.getDate() + ((j.w + 6) % 7)));
      } else
        ("W" in j || "U" in j) &&
          ("w" in j || (j.w = "u" in j ? j.u % 7 : "W" in j ? 1 : 0),
          ($e =
            "Z" in j
              ? Sf(Pa(j.y, 0, 1)).getUTCDay()
              : bf(Pa(j.y, 0, 1)).getDay()),
          (j.m = 0),
          (j.d =
            "W" in j
              ? ((j.w + 6) % 7) + j.W * 7 - (($e + 5) % 7)
              : j.w + j.U * 7 - (($e + 6) % 7)));
      return "Z" in j
        ? ((j.H += (j.Z / 100) | 0), (j.M += j.Z % 100), Sf(j))
        : bf(j);
    };
  }
  function O(z, J, ee, j) {
    for (var pe = 0, ie = J.length, $e = ee.length, ze, qt; pe < ie; ) {
      if (j >= $e) return -1;
      if (((ze = J.charCodeAt(pe++)), ze === 37)) {
        if (
          ((ze = J.charAt(pe++)),
          (qt = w[ze in d0 ? J.charAt(pe++) : ze]),
          !qt || (j = qt(z, ee, j)) < 0)
        )
          return -1;
      } else if (ze != ee.charCodeAt(j++)) return -1;
    }
    return j;
  }
  function A(z, J, ee) {
    var j = s.exec(J.slice(ee));
    return j ? ((z.p = c.get(j[0].toLowerCase())), ee + j[0].length) : -1;
  }
  function E(z, J, ee) {
    var j = x.exec(J.slice(ee));
    return j ? ((z.w = v.get(j[0].toLowerCase())), ee + j[0].length) : -1;
  }
  function k(z, J, ee) {
    var j = f.exec(J.slice(ee));
    return j ? ((z.w = h.get(j[0].toLowerCase())), ee + j[0].length) : -1;
  }
  function $(z, J, ee) {
    var j = p.exec(J.slice(ee));
    return j ? ((z.m = m.get(j[0].toLowerCase())), ee + j[0].length) : -1;
  }
  function P(z, J, ee) {
    var j = d.exec(J.slice(ee));
    return j ? ((z.m = _.get(j[0].toLowerCase())), ee + j[0].length) : -1;
  }
  function M(z, J, ee) {
    return O(z, t, J, ee);
  }
  function D(z, J, ee) {
    return O(z, r, J, ee);
  }
  function N(z, J, ee) {
    return O(z, n, J, ee);
  }
  function W(z) {
    return o[z.getDay()];
  }
  function T(z) {
    return a[z.getDay()];
  }
  function R(z) {
    return l[z.getMonth()];
  }
  function U(z) {
    return u[z.getMonth()];
  }
  function Y(z) {
    return i[+(z.getHours() >= 12)];
  }
  function X(z) {
    return 1 + ~~(z.getMonth() / 3);
  }
  function le(z) {
    return o[z.getUTCDay()];
  }
  function ce(z) {
    return a[z.getUTCDay()];
  }
  function je(z) {
    return l[z.getUTCMonth()];
  }
  function Pe(z) {
    return u[z.getUTCMonth()];
  }
  function yt(z) {
    return i[+(z.getUTCHours() >= 12)];
  }
  function ne(z) {
    return 1 + ~~(z.getUTCMonth() / 3);
  }
  return {
    format: function (z) {
      var J = b((z += ""), g);
      return (
        (J.toString = function () {
          return z;
        }),
        J
      );
    },
    parse: function (z) {
      var J = S((z += ""), !1);
      return (
        (J.toString = function () {
          return z;
        }),
        J
      );
    },
    utcFormat: function (z) {
      var J = b((z += ""), y);
      return (
        (J.toString = function () {
          return z;
        }),
        J
      );
    },
    utcParse: function (z) {
      var J = S((z += ""), !0);
      return (
        (J.toString = function () {
          return z;
        }),
        J
      );
    },
  };
}
var d0 = { "-": "", _: " ", 0: "0" },
  at = /^\s*\d+/,
  RF = /^%/,
  jF = /[\\^$*+?|[\]().{}]/g;
function de(e, t, r) {
  var n = e < 0 ? "-" : "",
    i = (n ? -e : e) + "",
    a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function DF(e) {
  return e.replace(jF, "\\$&");
}
function $a(e) {
  return new RegExp("^(?:" + e.map(DF).join("|") + ")", "i");
}
function Ca(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function LF(e, t, r) {
  var n = at.exec(t.slice(r, r + 1));
  return n ? ((e.w = +n[0]), r + n[0].length) : -1;
}
function FF(e, t, r) {
  var n = at.exec(t.slice(r, r + 1));
  return n ? ((e.u = +n[0]), r + n[0].length) : -1;
}
function zF(e, t, r) {
  var n = at.exec(t.slice(r, r + 2));
  return n ? ((e.U = +n[0]), r + n[0].length) : -1;
}
function BF(e, t, r) {
  var n = at.exec(t.slice(r, r + 2));
  return n ? ((e.V = +n[0]), r + n[0].length) : -1;
}
function UF(e, t, r) {
  var n = at.exec(t.slice(r, r + 2));
  return n ? ((e.W = +n[0]), r + n[0].length) : -1;
}
function p0(e, t, r) {
  var n = at.exec(t.slice(r, r + 4));
  return n ? ((e.y = +n[0]), r + n[0].length) : -1;
}
function v0(e, t, r) {
  var n = at.exec(t.slice(r, r + 2));
  return n ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1;
}
function WF(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n
    ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length)
    : -1;
}
function HF(e, t, r) {
  var n = at.exec(t.slice(r, r + 1));
  return n ? ((e.q = n[0] * 3 - 3), r + n[0].length) : -1;
}
function VF(e, t, r) {
  var n = at.exec(t.slice(r, r + 2));
  return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
}
function y0(e, t, r) {
  var n = at.exec(t.slice(r, r + 2));
  return n ? ((e.d = +n[0]), r + n[0].length) : -1;
}
function qF(e, t, r) {
  var n = at.exec(t.slice(r, r + 3));
  return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
}
function g0(e, t, r) {
  var n = at.exec(t.slice(r, r + 2));
  return n ? ((e.H = +n[0]), r + n[0].length) : -1;
}
function GF(e, t, r) {
  var n = at.exec(t.slice(r, r + 2));
  return n ? ((e.M = +n[0]), r + n[0].length) : -1;
}
function KF(e, t, r) {
  var n = at.exec(t.slice(r, r + 2));
  return n ? ((e.S = +n[0]), r + n[0].length) : -1;
}
function XF(e, t, r) {
  var n = at.exec(t.slice(r, r + 3));
  return n ? ((e.L = +n[0]), r + n[0].length) : -1;
}
function YF(e, t, r) {
  var n = at.exec(t.slice(r, r + 6));
  return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
}
function QF(e, t, r) {
  var n = RF.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function JF(e, t, r) {
  var n = at.exec(t.slice(r));
  return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
}
function ZF(e, t, r) {
  var n = at.exec(t.slice(r));
  return n ? ((e.s = +n[0]), r + n[0].length) : -1;
}
function m0(e, t) {
  return de(e.getDate(), t, 2);
}
function ez(e, t) {
  return de(e.getHours(), t, 2);
}
function tz(e, t) {
  return de(e.getHours() % 12 || 12, t, 2);
}
function rz(e, t) {
  return de(1 + dc.count(Zn(e), e), t, 3);
}
function Bb(e, t) {
  return de(e.getMilliseconds(), t, 3);
}
function nz(e, t) {
  return Bb(e, t) + "000";
}
function iz(e, t) {
  return de(e.getMonth() + 1, t, 2);
}
function az(e, t) {
  return de(e.getMinutes(), t, 2);
}
function oz(e, t) {
  return de(e.getSeconds(), t, 2);
}
function uz(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function lz(e, t) {
  return de(bv.count(Zn(e) - 1, e), t, 2);
}
function Ub(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? ko(e) : ko.ceil(e);
}
function sz(e, t) {
  return (e = Ub(e)), de(ko.count(Zn(e), e) + (Zn(e).getDay() === 4), t, 2);
}
function cz(e) {
  return e.getDay();
}
function fz(e, t) {
  return de(xd.count(Zn(e) - 1, e), t, 2);
}
function hz(e, t) {
  return de(e.getFullYear() % 100, t, 2);
}
function dz(e, t) {
  return (e = Ub(e)), de(e.getFullYear() % 100, t, 2);
}
function pz(e, t) {
  return de(e.getFullYear() % 1e4, t, 4);
}
function vz(e, t) {
  var r = e.getDay();
  return (
    (e = r >= 4 || r === 0 ? ko(e) : ko.ceil(e)),
    de(e.getFullYear() % 1e4, t, 4)
  );
}
function yz(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? "-" : ((t *= -1), "+")) +
    de((t / 60) | 0, "0", 2) +
    de(t % 60, "0", 2)
  );
}
function x0(e, t) {
  return de(e.getUTCDate(), t, 2);
}
function gz(e, t) {
  return de(e.getUTCHours(), t, 2);
}
function mz(e, t) {
  return de(e.getUTCHours() % 12 || 12, t, 2);
}
function xz(e, t) {
  return de(1 + pc.count(ei(e), e), t, 3);
}
function Wb(e, t) {
  return de(e.getUTCMilliseconds(), t, 3);
}
function _z(e, t) {
  return Wb(e, t) + "000";
}
function wz(e, t) {
  return de(e.getUTCMonth() + 1, t, 2);
}
function bz(e, t) {
  return de(e.getUTCMinutes(), t, 2);
}
function Sz(e, t) {
  return de(e.getUTCSeconds(), t, 2);
}
function Oz(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Az(e, t) {
  return de(Sv.count(ei(e) - 1, e), t, 2);
}
function Hb(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Eo(e) : Eo.ceil(e);
}
function kz(e, t) {
  return (e = Hb(e)), de(Eo.count(ei(e), e) + (ei(e).getUTCDay() === 4), t, 2);
}
function Ez(e) {
  return e.getUTCDay();
}
function Tz(e, t) {
  return de(_d.count(ei(e) - 1, e), t, 2);
}
function Pz(e, t) {
  return de(e.getUTCFullYear() % 100, t, 2);
}
function $z(e, t) {
  return (e = Hb(e)), de(e.getUTCFullYear() % 100, t, 2);
}
function Cz(e, t) {
  return de(e.getUTCFullYear() % 1e4, t, 4);
}
function Mz(e, t) {
  var r = e.getUTCDay();
  return (
    (e = r >= 4 || r === 0 ? Eo(e) : Eo.ceil(e)),
    de(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function Iz() {
  return "+0000";
}
function _0() {
  return "%";
}
function w0(e) {
  return +e;
}
function b0(e) {
  return Math.floor(+e / 1e3);
}
var bu, Vb, qb;
Nz({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
});
function Nz(e) {
  return (bu = NF(e)), (Vb = bu.format), (qb = bu.utcFormat), bu;
}
function Rz(e) {
  return new Date(e);
}
function jz(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function Ov(e, t, r, n, i, a, o, u, l, s) {
  var c = pv(),
    f = c.invert,
    h = c.domain,
    x = s(".%L"),
    v = s(":%S"),
    d = s("%I:%M"),
    _ = s("%I %p"),
    p = s("%a %d"),
    m = s("%b %d"),
    g = s("%B"),
    y = s("%Y");
  function w(b) {
    return (
      l(b) < b
        ? x
        : u(b) < b
        ? v
        : o(b) < b
        ? d
        : a(b) < b
        ? _
        : n(b) < b
        ? i(b) < b
          ? p
          : m
        : r(b) < b
        ? g
        : y
    )(b);
  }
  return (
    (c.invert = function (b) {
      return new Date(f(b));
    }),
    (c.domain = function (b) {
      return arguments.length ? h(Array.from(b, jz)) : h().map(Rz);
    }),
    (c.ticks = function (b) {
      var S = h();
      return e(S[0], S[S.length - 1], b == null ? 10 : b);
    }),
    (c.tickFormat = function (b, S) {
      return S == null ? w : s(S);
    }),
    (c.nice = function (b) {
      var S = h();
      return (
        (!b || typeof b.range != "function") &&
          (b = t(S[0], S[S.length - 1], b == null ? 10 : b)),
        b ? h(Ab(S, b)) : c
      );
    }),
    (c.copy = function () {
      return Bo(c, Ov(e, t, r, n, i, a, o, u, l, s));
    }),
    c
  );
}
function Dz() {
  return ar.apply(
    Ov(MF, IF, Zn, Nb, bv, dc, Ib, Mb, Oi, Vb).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments
  );
}
function Lz() {
  return ar.apply(
    Ov($F, CF, ei, Lb, Sv, pc, Db, jb, Oi, qb).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments
  );
}
function vc() {
  var e = 0,
    t = 1,
    r,
    n,
    i,
    a,
    o = xt,
    u = !1,
    l;
  function s(f) {
    return f == null || isNaN((f = +f))
      ? l
      : o(
          i === 0
            ? 0.5
            : ((f = (a(f) - r) * i), u ? Math.max(0, Math.min(1, f)) : f)
        );
  }
  (s.domain = function (f) {
    return arguments.length
      ? (([e, t] = f),
        (r = a((e = +e))),
        (n = a((t = +t))),
        (i = r === n ? 0 : 1 / (n - r)),
        s)
      : [e, t];
  }),
    (s.clamp = function (f) {
      return arguments.length ? ((u = !!f), s) : u;
    }),
    (s.interpolator = function (f) {
      return arguments.length ? ((o = f), s) : o;
    });
  function c(f) {
    return function (h) {
      var x, v;
      return arguments.length ? (([x, v] = h), (o = f(x, v)), s) : [o(0), o(1)];
    };
  }
  return (
    (s.range = c(ca)),
    (s.rangeRound = c(dv)),
    (s.unknown = function (f) {
      return arguments.length ? ((l = f), s) : l;
    }),
    function (f) {
      return (
        (a = f), (r = f(e)), (n = f(t)), (i = r === n ? 0 : 1 / (n - r)), s
      );
    }
  );
}
function En(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function Gb() {
  var e = kn(vc()(xt));
  return (
    (e.copy = function () {
      return En(e, Gb());
    }),
    Gr.apply(e, arguments)
  );
}
function Kb() {
  var e = gv(vc()).domain([1, 10]);
  return (
    (e.copy = function () {
      return En(e, Kb()).base(e.base());
    }),
    Gr.apply(e, arguments)
  );
}
function Xb() {
  var e = mv(vc());
  return (
    (e.copy = function () {
      return En(e, Xb()).constant(e.constant());
    }),
    Gr.apply(e, arguments)
  );
}
function Av() {
  var e = xv(vc());
  return (
    (e.copy = function () {
      return En(e, Av()).exponent(e.exponent());
    }),
    Gr.apply(e, arguments)
  );
}
function Fz() {
  return Av.apply(null, arguments).exponent(0.5);
}
function Yb() {
  var e = [],
    t = xt;
  function r(n) {
    if (n != null && !isNaN((n = +n)))
      return t((Fo(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (r.domain = function (n) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let i of n) i != null && !isNaN((i = +i)) && e.push(i);
      return e.sort(Lo), r;
    }),
    (r.interpolator = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.range = function () {
      return e.map((n, i) => t(i / (e.length - 1)));
    }),
    (r.quantiles = function (n) {
      return Array.from({ length: n + 1 }, (i, a) => A6(e, a / n));
    }),
    (r.copy = function () {
      return Yb(t).domain(e);
    }),
    Gr.apply(r, arguments)
  );
}
function yc() {
  var e = 0,
    t = 0.5,
    r = 1,
    n = 1,
    i,
    a,
    o,
    u,
    l,
    s = xt,
    c,
    f = !1,
    h;
  function x(d) {
    return isNaN((d = +d))
      ? h
      : ((d = 0.5 + ((d = +c(d)) - a) * (n * d < n * a ? u : l)),
        s(f ? Math.max(0, Math.min(1, d)) : d));
  }
  (x.domain = function (d) {
    return arguments.length
      ? (([e, t, r] = d),
        (i = c((e = +e))),
        (a = c((t = +t))),
        (o = c((r = +r))),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (l = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        x)
      : [e, t, r];
  }),
    (x.clamp = function (d) {
      return arguments.length ? ((f = !!d), x) : f;
    }),
    (x.interpolator = function (d) {
      return arguments.length ? ((s = d), x) : s;
    });
  function v(d) {
    return function (_) {
      var p, m, g;
      return arguments.length
        ? (([p, m, g] = _), (s = X6(d, [p, m, g])), x)
        : [s(0), s(0.5), s(1)];
    };
  }
  return (
    (x.range = v(ca)),
    (x.rangeRound = v(dv)),
    (x.unknown = function (d) {
      return arguments.length ? ((h = d), x) : h;
    }),
    function (d) {
      return (
        (c = d),
        (i = d(e)),
        (a = d(t)),
        (o = d(r)),
        (u = i === a ? 0 : 0.5 / (a - i)),
        (l = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        x
      );
    }
  );
}
function Qb() {
  var e = kn(yc()(xt));
  return (
    (e.copy = function () {
      return En(e, Qb());
    }),
    Gr.apply(e, arguments)
  );
}
function Jb() {
  var e = gv(yc()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return En(e, Jb()).base(e.base());
    }),
    Gr.apply(e, arguments)
  );
}
function Zb() {
  var e = mv(yc());
  return (
    (e.copy = function () {
      return En(e, Zb()).constant(e.constant());
    }),
    Gr.apply(e, arguments)
  );
}
function kv() {
  var e = xv(yc());
  return (
    (e.copy = function () {
      return En(e, kv()).exponent(e.exponent());
    }),
    Gr.apply(e, arguments)
  );
}
function zz() {
  return kv.apply(null, arguments).exponent(0.5);
}
var S0 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: bo,
      scalePoint: Qa,
      scaleIdentity: Ob,
      scaleLinear: ts,
      scaleLog: kb,
      scaleSymlog: Eb,
      scaleOrdinal: cv,
      scaleImplicit: pd,
      scalePow: _v,
      scaleSqrt: mF,
      scaleRadial: Tb,
      scaleQuantile: Pb,
      scaleQuantize: $b,
      scaleThreshold: Cb,
      scaleTime: Dz,
      scaleUtc: Lz,
      scaleSequential: Gb,
      scaleSequentialLog: Kb,
      scaleSequentialPow: Av,
      scaleSequentialSqrt: Fz,
      scaleSequentialSymlog: Xb,
      scaleSequentialQuantile: Yb,
      scaleDiverging: Qb,
      scaleDivergingLog: Jb,
      scaleDivergingPow: kv,
      scaleDivergingSqrt: zz,
      scaleDivergingSymlog: Zb,
      tickFormat: Sb,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function O0(e) {
  return Hz(e) || Wz(e) || Uz(e) || Bz();
}
function Bz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Uz(e, t) {
  if (!!e) {
    if (typeof e == "string") return wd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return wd(e, t);
  }
}
function Wz(e) {
  if (typeof Symbol != "undefined" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function Hz(e) {
  if (Array.isArray(e)) return wd(e);
}
function wd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function A0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? A0(Object(r), !0).forEach(function (n) {
          Ni(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : A0(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Ni(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Er(e, t, r) {
  return Z(e) || Z(t) ? r : Je(t) ? zt(e, t, r) : te(t) ? t(e) : r;
}
function rs(e, t, r, n) {
  var i = q5(e, function (u) {
    return Er(u, t);
  });
  if (r === "number") {
    var a = i.filter(function (u) {
      return q(u) || parseFloat(u);
    });
    return a.length ? [sc(a), lc(a)] : [1 / 0, -1 / 0];
  }
  var o = n
    ? i.filter(function (u) {
        return !Z(u);
      })
    : i;
  return o.map(function (u) {
    return Je(u) || u instanceof Date ? u : "";
  });
}
var Vz = function (t) {
    var r,
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      i = arguments.length > 2 ? arguments[2] : void 0,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = -1,
      u = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
    if (u > 1) {
      if (
        a &&
        a.axisType === "angleAxis" &&
        Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6
      )
        for (var l = a.range, s = 0; s < u; s++) {
          var c = s > 0 ? i[s - 1].coordinate : i[u - 1].coordinate,
            f = i[s].coordinate,
            h = s >= u - 1 ? i[0].coordinate : i[s + 1].coordinate,
            x = void 0;
          if (mr(f - c) !== mr(h - f)) {
            var v = [];
            if (mr(h - f) === mr(l[1] - l[0])) {
              x = h;
              var d = f + l[1] - l[0];
              (v[0] = Math.min(d, (d + c) / 2)),
                (v[1] = Math.max(d, (d + c) / 2));
            } else {
              x = c;
              var _ = h + l[1] - l[0];
              (v[0] = Math.min(f, (_ + f) / 2)),
                (v[1] = Math.max(f, (_ + f) / 2));
            }
            var p = [Math.min(f, (x + f) / 2), Math.max(f, (x + f) / 2)];
            if ((t > p[0] && t <= p[1]) || (t >= v[0] && t <= v[1])) {
              o = i[s].index;
              break;
            }
          } else {
            var m = Math.min(c, h),
              g = Math.max(c, h);
            if (t > (m + f) / 2 && t <= (g + f) / 2) {
              o = i[s].index;
              break;
            }
          }
        }
      else
        for (var y = 0; y < u; y++)
          if (
            (y === 0 && t <= (n[y].coordinate + n[y + 1].coordinate) / 2) ||
            (y > 0 &&
              y < u - 1 &&
              t > (n[y].coordinate + n[y - 1].coordinate) / 2 &&
              t <= (n[y].coordinate + n[y + 1].coordinate) / 2) ||
            (y === u - 1 && t > (n[y].coordinate + n[y - 1].coordinate) / 2)
          ) {
            o = n[y].index;
            break;
          }
    } else o = 0;
    return o;
  },
  Ev = function (t) {
    var r = t,
      n = r.type.displayName,
      i = t.props,
      a = i.stroke,
      o = i.fill,
      u;
    switch (n) {
      case "Line":
        u = a;
        break;
      case "Area":
      case "Radar":
        u = a && a !== "none" ? a : o;
        break;
      default:
        u = o;
        break;
    }
    return u;
  },
  eS = function (t) {
    var r = t.children,
      n = t.formattedGraphicalItems,
      i = t.legendWidth,
      a = t.legendContent,
      o = Dr(r, Vi.displayName);
    if (!o) return null;
    var u;
    return (
      o.props && o.props.payload
        ? (u = o.props && o.props.payload)
        : a === "children"
        ? (u = (n || []).reduce(function (l, s) {
            var c = s.item,
              f = s.props,
              h = f.sectors || f.data || [];
            return l.concat(
              h.map(function (x) {
                return {
                  type: o.props.iconType || c.props.legendType,
                  value: x.name,
                  color: x.fill,
                  payload: x,
                };
              })
            );
          }, []))
        : (u = (n || []).map(function (l) {
            var s = l.item,
              c = s.props,
              f = c.dataKey,
              h = c.name,
              x = c.legendType,
              v = c.hide;
            return {
              inactive: v,
              dataKey: f,
              type: o.props.iconType || x || "square",
              color: Ev(s),
              value: h || f,
              payload: s.props,
            };
          })),
      mt(
        mt(mt({}, o.props), Vi.getWithHeight(o, i)),
        {},
        { payload: u, item: o }
      )
    );
  },
  qz = function (t) {
    var r = t.barSize,
      n = t.stackGroups,
      i = n === void 0 ? {} : n;
    if (!i) return {};
    for (var a = {}, o = Object.keys(i), u = 0, l = o.length; u < l; u++)
      for (
        var s = i[o[u]].stackGroups, c = Object.keys(s), f = 0, h = c.length;
        f < h;
        f++
      ) {
        var x = s[c[f]],
          v = x.items,
          d = x.cateAxisId,
          _ = v.filter(function (g) {
            return pn(g.type).indexOf("Bar") >= 0;
          });
        if (_ && _.length) {
          var p = _[0].props.barSize,
            m = _[0].props[d];
          a[m] || (a[m] = []),
            a[m].push({
              item: _[0],
              stackList: _.slice(1),
              barSize: Z(p) ? r : p,
            });
        }
      }
    return a;
  },
  Gz = function (t) {
    var r = t.barGap,
      n = t.barCategoryGap,
      i = t.bandSize,
      a = t.sizeList,
      o = a === void 0 ? [] : a,
      u = t.maxBarSize,
      l = o.length;
    if (l < 1) return null;
    var s = Hi(r, i, 0, !0),
      c;
    if (o[0].barSize === +o[0].barSize) {
      var f = !1,
        h = i / l,
        x = o.reduce(function (g, y) {
          return g + y.barSize || 0;
        }, 0);
      (x += (l - 1) * s),
        x >= i && ((x -= (l - 1) * s), (s = 0)),
        x >= i && h > 0 && ((f = !0), (h *= 0.9), (x = l * h));
      var v = ((i - x) / 2) >> 0,
        d = { offset: v - s, size: 0 };
      c = o.reduce(function (g, y) {
        var w = [].concat(O0(g), [
          {
            item: y.item,
            position: {
              offset: d.offset + d.size + s,
              size: f ? h : y.barSize,
            },
          },
        ]);
        return (
          (d = w[w.length - 1].position),
          y.stackList &&
            y.stackList.length &&
            y.stackList.forEach(function (b) {
              w.push({ item: b, position: d });
            }),
          w
        );
      }, []);
    } else {
      var _ = Hi(n, i, 0, !0);
      i - 2 * _ - (l - 1) * s <= 0 && (s = 0);
      var p = (i - 2 * _ - (l - 1) * s) / l;
      p > 1 && (p >>= 0);
      var m = u === +u ? Math.min(p, u) : p;
      c = o.reduce(function (g, y, w) {
        var b = [].concat(O0(g), [
          {
            item: y.item,
            position: { offset: _ + (p + s) * w + (p - m) / 2, size: m },
          },
        ]);
        return (
          y.stackList &&
            y.stackList.length &&
            y.stackList.forEach(function (S) {
              b.push({ item: S, position: b[b.length - 1].position });
            }),
          b
        );
      }, []);
    }
    return c;
  },
  Kz = function (t, r, n, i) {
    var a = n.children,
      o = n.width,
      u = n.margin,
      l = o - (u.left || 0) - (u.right || 0),
      s = eS({ children: a, legendWidth: l }),
      c = t;
    if (s) {
      var f = i || {},
        h = s.align,
        x = s.verticalAlign,
        v = s.layout;
      (v === "vertical" || (v === "horizontal" && x === "center")) &&
        q(t[h]) &&
        (c = mt(mt({}, t), {}, Ni({}, h, c[h] + (f.width || 0)))),
        (v === "horizontal" || (v === "vertical" && h === "center")) &&
          q(t[x]) &&
          (c = mt(mt({}, t), {}, Ni({}, x, c[x] + (f.height || 0))));
    }
    return c;
  },
  tS = function (t, r, n, i) {
    var a = r.props.children,
      o = br(a, "ErrorBar").filter(function (l) {
        var s = l.props.direction;
        return Z(s) || Z(i) ? !0 : i.indexOf(s) >= 0;
      });
    if (o && o.length) {
      var u = o.map(function (l) {
        return l.props.dataKey;
      });
      return t.reduce(
        function (l, s) {
          var c = Er(s, n, 0),
            f = xe(c) ? [sc(c), lc(c)] : [c, c],
            h = u.reduce(
              function (x, v) {
                var d = Er(s, v, 0),
                  _ = f[0] - Math.abs(xe(d) ? d[0] : d),
                  p = f[1] + Math.abs(xe(d) ? d[1] : d);
                return [Math.min(_, x[0]), Math.max(p, x[1])];
              },
              [1 / 0, -1 / 0]
            );
          return [Math.min(h[0], l[0]), Math.max(h[1], l[1])];
        },
        [1 / 0, -1 / 0]
      );
    }
    return null;
  },
  Xz = function (t, r, n, i) {
    var a = r
      .map(function (o) {
        return tS(t, o, n, i);
      })
      .filter(function (o) {
        return !Z(o);
      });
    return a && a.length
      ? a.reduce(
          function (o, u) {
            return [Math.min(o[0], u[0]), Math.max(o[1], u[1])];
          },
          [1 / 0, -1 / 0]
        )
      : null;
  },
  rS = function (t, r, n, i) {
    var a = r.map(function (u) {
      var l = u.props.dataKey;
      return (n === "number" && l && tS(t, u, l)) || rs(t, l, n, i);
    });
    if (n === "number")
      return a.reduce(
        function (u, l) {
          return [Math.min(u[0], l[0]), Math.max(u[1], l[1])];
        },
        [1 / 0, -1 / 0]
      );
    var o = {};
    return a.reduce(function (u, l) {
      for (var s = 0, c = l.length; s < c; s++)
        o[l[s]] || ((o[l[s]] = !0), u.push(l[s]));
      return u;
    }, []);
  },
  nS = function (t, r) {
    return (
      (t === "horizontal" && r === "xAxis") ||
      (t === "vertical" && r === "yAxis") ||
      (t === "centric" && r === "angleAxis") ||
      (t === "radial" && r === "radiusAxis")
    );
  },
  k0 = function (t, r, n) {
    var i,
      a,
      o = t.map(function (u) {
        return (
          u.coordinate === r && (i = !0),
          u.coordinate === n && (a = !0),
          u.coordinate
        );
      });
    return i || o.push(r), a || o.push(n), o;
  },
  Qr = function (t, r, n) {
    if (!t) return null;
    var i = t.scale,
      a = t.duplicateDomain,
      o = t.type,
      u = t.range,
      l = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / 2 : 0;
    return (
      (l = t.axisType === "angleAxis" ? mr(u[0] - u[1]) * 2 * l : l),
      r && (t.ticks || t.niceTicks)
        ? (t.ticks || t.niceTicks).map(function (s) {
            var c = a ? a.indexOf(s) : s;
            return { coordinate: i(c) + l, value: s, offset: l };
          })
        : t.isCategorical && t.categoricalDomain
        ? t.categoricalDomain.map(function (s, c) {
            return { coordinate: i(s) + l, value: s, index: c, offset: l };
          })
        : i.ticks && !n
        ? i.ticks(t.tickCount).map(function (s) {
            return { coordinate: i(s) + l, value: s, offset: l };
          })
        : i.domain().map(function (s, c) {
            return {
              coordinate: i(s) + l,
              value: a ? a[s] : s,
              index: c,
              offset: l,
            };
          })
    );
  },
  Su = function (t, r, n) {
    var i;
    return (
      te(n) ? (i = n) : te(r) && (i = r),
      te(t) || i
        ? function (a, o, u, l) {
            te(t) && t(a, o, u, l), te(i) && i(a, o, u, l);
          }
        : null
    );
  },
  Yz = function (t, r, n) {
    var i = t.scale,
      a = t.type,
      o = t.layout,
      u = t.axisType;
    if (i === "auto")
      return o === "radial" && u === "radiusAxis"
        ? { scale: bo(), realScaleType: "band" }
        : o === "radial" && u === "angleAxis"
        ? { scale: ts(), realScaleType: "linear" }
        : a === "category" &&
          r &&
          (r.indexOf("LineChart") >= 0 ||
            r.indexOf("AreaChart") >= 0 ||
            (r.indexOf("ComposedChart") >= 0 && !n))
        ? { scale: Qa(), realScaleType: "point" }
        : a === "category"
        ? { scale: bo(), realScaleType: "band" }
        : { scale: ts(), realScaleType: "linear" };
    if (jo(i)) {
      var l = "scale".concat(Fs(i));
      return { scale: (S0[l] || Qa)(), realScaleType: S0[l] ? l : "point" };
    }
    return te(i) ? { scale: i } : { scale: Qa(), realScaleType: "point" };
  },
  E0 = 1e-4,
  Qz = function (t) {
    var r = t.domain();
    if (!(!r || r.length <= 2)) {
      var n = r.length,
        i = t.range(),
        a = Math.min(i[0], i[1]) - E0,
        o = Math.max(i[0], i[1]) + E0,
        u = t(r[0]),
        l = t(r[n - 1]);
      (u < a || u > o || l < a || l > o) && t.domain([r[0], r[n - 1]]);
    }
  },
  Jz = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0, u = 0; u < r; ++u) {
          var l = qs(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
          l >= 0
            ? ((t[u][n][0] = a), (t[u][n][1] = a + l), (a = t[u][n][1]))
            : ((t[u][n][0] = o), (t[u][n][1] = o + l), (o = t[u][n][1]));
        }
  },
  Zz = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0; o < r; ++o) {
          var u = qs(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
          u >= 0
            ? ((t[o][n][0] = a), (t[o][n][1] = a + u), (a = t[o][n][1]))
            : ((t[o][n][0] = 0), (t[o][n][1] = 0));
        }
  },
  e8 = {
    sign: Jz,
    expand: _R,
    none: Wi,
    silhouette: wR,
    wiggle: bR,
    positive: Zz,
  },
  t8 = function (t, r, n) {
    var i = r.map(function (o) {
        return o.props.dataKey;
      }),
      a = xR()
        .keys(i)
        .value(function (o, u) {
          return +Er(o, u, 0);
        })
        .order(Nh)
        .offset(e8[n]);
    return a(t);
  },
  r8 = function (t, r, n, i, a, o) {
    if (!t) return null;
    var u = o ? r.reverse() : r,
      l = u.reduce(function (s, c) {
        var f = c.props,
          h = f.stackId,
          x = f.hide;
        if (x) return s;
        var v = c.props[n],
          d = s[v] || { hasStack: !1, stackGroups: {} };
        if (Je(h)) {
          var _ = d.stackGroups[h] || {
            numericAxisId: n,
            cateAxisId: i,
            items: [],
          };
          _.items.push(c), (d.hasStack = !0), (d.stackGroups[h] = _);
        } else d.stackGroups[Gs("_stackId_")] = { numericAxisId: n, cateAxisId: i, items: [c] };
        return mt(mt({}, s), {}, Ni({}, v, d));
      }, {});
    return Object.keys(l).reduce(function (s, c) {
      var f = l[c];
      return (
        f.hasStack &&
          (f.stackGroups = Object.keys(f.stackGroups).reduce(function (h, x) {
            var v = f.stackGroups[x];
            return mt(
              mt({}, h),
              {},
              Ni({}, x, {
                numericAxisId: n,
                cateAxisId: i,
                items: v.items,
                stackedData: t8(t, v.items, a),
              })
            );
          }, {})),
        mt(mt({}, s), {}, Ni({}, c, f))
      );
    }, {});
  },
  n8 = function (t, r) {
    return r === "number" ? [sc(t), lc(t)] : t;
  },
  i8 = function (t, r) {
    var n = r.realScaleType,
      i = r.type,
      a = r.tickCount,
      o = r.originalDomain,
      u = r.allowDecimals,
      l = n || r.scale;
    if (l !== "auto" && l !== "linear") return null;
    if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
      var s = t.domain();
      if (!s.length) return null;
      var c = x6(s, a, u);
      return t.domain(n8(c, i)), { niceTicks: c };
    }
    if (a && i === "number") {
      var f = t.domain(),
        h = _6(f, a, u);
      return { niceTicks: h };
    }
    return null;
  },
  T0 = function (t) {
    var r = t.axis,
      n = t.ticks,
      i = t.bandSize,
      a = t.entry,
      o = t.index,
      u = t.dataKey;
    if (r.type === "category") {
      if (!r.allowDuplicatedCategory && r.dataKey && !Z(a[r.dataKey])) {
        var l = Ll(n, "value", a[r.dataKey]);
        if (l) return l.coordinate + i / 2;
      }
      return n[o] ? n[o].coordinate + i / 2 : null;
    }
    var s = Er(a, Z(u) ? r.dataKey : u);
    return Z(s) ? null : r.scale(s);
  },
  a8 = function (t, r) {
    var n = t.props.stackId;
    if (Je(n)) {
      var i = r[n];
      if (i && i.items.length) {
        for (var a = -1, o = 0, u = i.items.length; o < u; o++)
          if (i.items[o] === t) {
            a = o;
            break;
          }
        return a >= 0 ? i.stackedData[a] : null;
      }
    }
    return null;
  },
  o8 = function (t) {
    return t.reduce(
      function (r, n) {
        return [sc(n.concat([r[0]]).filter(q)), lc(n.concat([r[1]]).filter(q))];
      },
      [1 / 0, -1 / 0]
    );
  },
  iS = function (t, r, n) {
    return Object.keys(t)
      .reduce(
        function (i, a) {
          var o = t[a],
            u = o.stackedData,
            l = u.reduce(
              function (s, c) {
                var f = o8(c.slice(r, n + 1));
                return [Math.min(s[0], f[0]), Math.max(s[1], f[1])];
              },
              [1 / 0, -1 / 0]
            );
          return [Math.min(l[0], i[0]), Math.max(l[1], i[1])];
        },
        [1 / 0, -1 / 0]
      )
      .map(function (i) {
        return i === 1 / 0 || i === -1 / 0 ? 0 : i;
      });
  },
  P0 = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  $0 = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  aS = function (t, r, n) {
    if (te(t)) return t(r, n);
    if (!xe(t)) return r;
    var i = [];
    if (q(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
    else if (P0.test(t[0])) {
      var a = +P0.exec(t[0])[1];
      i[0] = r[0] - a;
    } else te(t[0]) ? (i[0] = t[0](r[0])) : (i[0] = r[0]);
    if (q(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
    else if ($0.test(t[1])) {
      var o = +$0.exec(t[1])[1];
      i[1] = r[1] + o;
    } else te(t[1]) ? (i[1] = t[1](r[1])) : (i[1] = r[1]);
    return i;
  },
  ns = function (t, r, n) {
    if (t && t.scale && t.scale.bandwidth) {
      var i = t.scale.bandwidth();
      if (!n || i > 0) return i;
    }
    if (t && r && r.length >= 2) {
      for (
        var a = tv(r, function (f) {
            return f.coordinate;
          }),
          o = 1 / 0,
          u = 1,
          l = a.length;
        u < l;
        u++
      ) {
        var s = a[u],
          c = a[u - 1];
        o = Math.min((s.coordinate || 0) - (c.coordinate || 0), o);
      }
      return o === 1 / 0 ? 0 : o;
    }
    return n ? void 0 : 0;
  },
  C0 = function (t, r, n) {
    return !t || !t.length || eb(t, zt(n, "type.defaultProps.domain")) ? r : t;
  },
  u8 = function (t, r) {
    var n = t.props,
      i = n.dataKey,
      a = n.name,
      o = n.unit,
      u = n.formatter,
      l = n.tooltipType,
      s = n.chartType;
    return mt(
      mt({}, me(t)),
      {},
      {
        dataKey: i,
        unit: o,
        formatter: u,
        name: a || i,
        color: Ev(t),
        value: Er(r, i),
        type: l,
        payload: r,
        chartType: s,
      }
    );
  };
function M0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function I0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? M0(Object(r), !0).forEach(function (n) {
          l8(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : M0(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function l8(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var is = Math.PI / 180,
  s8 = function (t) {
    return (t * 180) / Math.PI;
  },
  lt = function (t, r, n, i) {
    return { x: t + Math.cos(-is * i) * n, y: r + Math.sin(-is * i) * n };
  },
  c8 = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y;
    return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
  },
  f8 = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.cx,
      o = r.cy,
      u = c8({ x: n, y: i }, { x: a, y: o });
    if (u <= 0) return { radius: u };
    var l = (n - a) / u,
      s = Math.acos(l);
    return (
      i > o && (s = 2 * Math.PI - s),
      { radius: u, angle: s8(s), angleInRadian: s }
    );
  },
  h8 = function (t) {
    var r = t.startAngle,
      n = t.endAngle,
      i = Math.floor(r / 360),
      a = Math.floor(n / 360),
      o = Math.min(i, a);
    return { startAngle: r - o * 360, endAngle: n - o * 360 };
  },
  d8 = function (t, r) {
    var n = r.startAngle,
      i = r.endAngle,
      a = Math.floor(n / 360),
      o = Math.floor(i / 360),
      u = Math.min(a, o);
    return t + u * 360;
  },
  N0 = function (t, r) {
    var n = t.x,
      i = t.y,
      a = f8({ x: n, y: i }, r),
      o = a.radius,
      u = a.angle,
      l = r.innerRadius,
      s = r.outerRadius;
    if (o < l || o > s) return !1;
    if (o === 0) return !0;
    var c = h8(r),
      f = c.startAngle,
      h = c.endAngle,
      x = u,
      v;
    if (f <= h) {
      for (; x > h; ) x -= 360;
      for (; x < f; ) x += 360;
      v = x >= f && x <= h;
    } else {
      for (; x > f; ) x -= 360;
      for (; x < h; ) x += 360;
      v = x >= h && x <= f;
    }
    return v ? I0(I0({}, r), {}, { radius: o, angle: d8(x, r) }) : null;
  };
function p8(e) {
  return m8(e) || g8(e) || y8(e) || v8();
}
function v8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function y8(e, t) {
  if (!!e) {
    if (typeof e == "string") return bd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return bd(e, t);
  }
}
function g8(e) {
  if (typeof Symbol != "undefined" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function m8(e) {
  if (Array.isArray(e)) return bd(e);
}
function bd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function R0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? R0(Object(r), !0).forEach(function (n) {
          x8(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : R0(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function x8(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var _8 = function (t) {
    var r = t.value,
      n = t.formatter,
      i = Z(t.children) ? r : t.children;
    return te(n) ? n(i) : i;
  },
  w8 = function (t, r) {
    var n = mr(r - t),
      i = Math.min(Math.abs(r - t), 360);
    return n * i;
  },
  b8 = function (t, r, n) {
    var i = t.position,
      a = t.viewBox,
      o = t.offset,
      u = t.className,
      l = a,
      s = l.cx,
      c = l.cy,
      f = l.innerRadius,
      h = l.outerRadius,
      x = l.startAngle,
      v = l.endAngle,
      d = l.clockWise,
      _ = (f + h) / 2,
      p = w8(x, v),
      m = p >= 0 ? 1 : -1,
      g,
      y;
    i === "insideStart"
      ? ((g = x + m * o), (y = d))
      : i === "insideEnd"
      ? ((g = v - m * o), (y = !d))
      : i === "end" && ((g = v + m * o), (y = d)),
      (y = p <= 0 ? y : !y);
    var w = lt(s, c, _, g),
      b = lt(s, c, _, g + (y ? 1 : -1) * 359),
      S = "M"
        .concat(w.x, ",")
        .concat(
          w.y,
          `
    A`
        )
        .concat(_, ",")
        .concat(_, ",0,1,")
        .concat(
          y ? 0 : 1,
          `,
    `
        )
        .concat(b.x, ",")
        .concat(b.y),
      O = Z(t.id) ? Gs("recharts-radial-line-") : t.id;
    return Ze(
      "text",
      ge(ae({}, n), {
        dominantBaseline: "central",
        className: Te("recharts-radial-bar-label", u),
        children: [
          F("defs", { children: F("path", { id: O, d: S }) }),
          F("textPath", { xlinkHref: "#".concat(O), children: r }),
        ],
      })
    );
  },
  S8 = function (t) {
    var r = t.viewBox,
      n = t.offset,
      i = t.position,
      a = r,
      o = a.cx,
      u = a.cy,
      l = a.innerRadius,
      s = a.outerRadius,
      c = a.startAngle,
      f = a.endAngle,
      h = (c + f) / 2;
    if (i === "outside") {
      var x = lt(o, u, s + n, h),
        v = x.x,
        d = x.y;
      return {
        x: v,
        y: d,
        textAnchor: v >= o ? "start" : "end",
        verticalAnchor: "middle",
      };
    }
    if (i === "center")
      return { x: o, y: u, textAnchor: "middle", verticalAnchor: "middle" };
    if (i === "centerTop")
      return { x: o, y: u, textAnchor: "middle", verticalAnchor: "start" };
    if (i === "centerBottom")
      return { x: o, y: u, textAnchor: "middle", verticalAnchor: "end" };
    var _ = (l + s) / 2,
      p = lt(o, u, _, h),
      m = p.x,
      g = p.y;
    return { x: m, y: g, textAnchor: "middle", verticalAnchor: "middle" };
  },
  O8 = function (t) {
    var r = t.viewBox,
      n = t.parentViewBox,
      i = t.offset,
      a = t.position,
      o = r,
      u = o.x,
      l = o.y,
      s = o.width,
      c = o.height,
      f = c >= 0 ? 1 : -1,
      h = f * i,
      x = f > 0 ? "end" : "start",
      v = f > 0 ? "start" : "end",
      d = s >= 0 ? 1 : -1,
      _ = d * i,
      p = d > 0 ? "end" : "start",
      m = d > 0 ? "start" : "end";
    if (a === "top") {
      var g = {
        x: u + s / 2,
        y: l - f * i,
        textAnchor: "middle",
        verticalAnchor: x,
      };
      return et(et({}, g), n ? { height: Math.max(l - n.y, 0), width: s } : {});
    }
    if (a === "bottom") {
      var y = {
        x: u + s / 2,
        y: l + c + h,
        textAnchor: "middle",
        verticalAnchor: v,
      };
      return et(
        et({}, y),
        n ? { height: Math.max(n.y + n.height - (l + c), 0), width: s } : {}
      );
    }
    if (a === "left") {
      var w = {
        x: u - _,
        y: l + c / 2,
        textAnchor: p,
        verticalAnchor: "middle",
      };
      return et(
        et({}, w),
        n ? { width: Math.max(w.x - n.x, 0), height: c } : {}
      );
    }
    if (a === "right") {
      var b = {
        x: u + s + _,
        y: l + c / 2,
        textAnchor: m,
        verticalAnchor: "middle",
      };
      return et(
        et({}, b),
        n ? { width: Math.max(n.x + n.width - b.x, 0), height: c } : {}
      );
    }
    var S = n ? { width: s, height: c } : {};
    return a === "insideLeft"
      ? et(
          { x: u + _, y: l + c / 2, textAnchor: m, verticalAnchor: "middle" },
          S
        )
      : a === "insideRight"
      ? et(
          {
            x: u + s - _,
            y: l + c / 2,
            textAnchor: p,
            verticalAnchor: "middle",
          },
          S
        )
      : a === "insideTop"
      ? et(
          { x: u + s / 2, y: l + h, textAnchor: "middle", verticalAnchor: v },
          S
        )
      : a === "insideBottom"
      ? et(
          {
            x: u + s / 2,
            y: l + c - h,
            textAnchor: "middle",
            verticalAnchor: x,
          },
          S
        )
      : a === "insideTopLeft"
      ? et({ x: u + _, y: l + h, textAnchor: m, verticalAnchor: v }, S)
      : a === "insideTopRight"
      ? et({ x: u + s - _, y: l + h, textAnchor: p, verticalAnchor: v }, S)
      : a === "insideBottomLeft"
      ? et({ x: u + _, y: l + c - h, textAnchor: m, verticalAnchor: x }, S)
      : a === "insideBottomRight"
      ? et({ x: u + s - _, y: l + c - h, textAnchor: p, verticalAnchor: x }, S)
      : Ht(a) && (q(a.x) || Wn(a.x)) && (q(a.y) || Wn(a.y))
      ? et(
          {
            x: u + Hi(a.x, s),
            y: l + Hi(a.y, c),
            textAnchor: "end",
            verticalAnchor: "end",
          },
          S
        )
      : et(
          {
            x: u + s / 2,
            y: l + c / 2,
            textAnchor: "middle",
            verticalAnchor: "middle",
          },
          S
        );
  },
  A8 = function (t) {
    return q(t.cx);
  };
function ut(e) {
  var t = e.viewBox,
    r = e.position,
    n = e.value,
    i = e.children,
    a = e.content,
    o = e.className,
    u = o === void 0 ? "" : o,
    l = e.textBreakAll;
  if (!t || (Z(n) && Z(i) && !V.exports.isValidElement(a) && !te(a)))
    return null;
  if (V.exports.isValidElement(a)) return V.exports.cloneElement(a, e);
  var s;
  if (te(a)) {
    if (((s = V.exports.createElement(a, e)), V.exports.isValidElement(s)))
      return s;
  } else s = _8(e);
  var c = A8(t),
    f = me(e, !0);
  if (c && (r === "insideStart" || r === "insideEnd" || r === "end"))
    return b8(e, s, f);
  var h = c ? S8(e) : O8(e);
  return F(
    mo,
    ge(ae(ae({ className: Te("recharts-label", u) }, f), h), {
      breakAll: l,
      children: s,
    })
  );
}
ut.displayName = "Label";
ut.defaultProps = { offset: 5 };
var oS = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.angle,
      a = t.startAngle,
      o = t.endAngle,
      u = t.r,
      l = t.radius,
      s = t.innerRadius,
      c = t.outerRadius,
      f = t.x,
      h = t.y,
      x = t.top,
      v = t.left,
      d = t.width,
      _ = t.height,
      p = t.clockWise,
      m = t.labelViewBox;
    if (m) return m;
    if (q(d) && q(_)) {
      if (q(f) && q(h)) return { x: f, y: h, width: d, height: _ };
      if (q(x) && q(v)) return { x, y: v, width: d, height: _ };
    }
    return q(f) && q(h)
      ? { x: f, y: h, width: 0, height: 0 }
      : q(r) && q(n)
      ? {
          cx: r,
          cy: n,
          startAngle: a || i || 0,
          endAngle: o || i || 0,
          innerRadius: s || 0,
          outerRadius: c || l || u || 0,
          clockWise: p,
        }
      : t.viewBox
      ? t.viewBox
      : {};
  },
  k8 = function (t, r) {
    return t
      ? t === !0
        ? F(ut, { viewBox: r }, "label-implicit")
        : Je(t)
        ? F(ut, { viewBox: r, value: t }, "label-implicit")
        : V.exports.isValidElement(t)
        ? t.type === ut
          ? V.exports.cloneElement(t, { key: "label-implicit", viewBox: r })
          : F(ut, { content: t, viewBox: r }, "label-implicit")
        : te(t)
        ? F(ut, { content: t, viewBox: r }, "label-implicit")
        : Ht(t)
        ? V.exports.createElement(
            ut,
            ge(ae({ viewBox: r }, t), { key: "label-implicit" })
          )
        : null
      : null;
  },
  E8 = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!t || (!t.children && n && !t.label)) return null;
    var i = t.children,
      a = oS(t),
      o = br(i, ut.displayName).map(function (l, s) {
        return V.exports.cloneElement(l, {
          viewBox: r || a,
          key: "label-".concat(s),
        });
      });
    if (!n) return o;
    var u = k8(t.label, r || a);
    return [u].concat(p8(o));
  };
ut.parseViewBox = oS;
ut.renderCallByParent = E8;
function T8(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var P8 = T8;
function $8(e) {
  return N8(e) || I8(e) || M8(e) || C8();
}
function C8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function M8(e, t) {
  if (!!e) {
    if (typeof e == "string") return Sd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Sd(e, t);
  }
}
function I8(e) {
  if (typeof Symbol != "undefined" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function N8(e) {
  if (Array.isArray(e)) return Sd(e);
}
function Sd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function j0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function D0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? j0(Object(r), !0).forEach(function (n) {
          R8(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : j0(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function R8(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function j8(e, t) {
  if (e == null) return {};
  var r = D8(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function D8(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var L8 = {
  valueAccessor: function (t) {
    return xe(t.value) ? P8(t.value) : t.value;
  },
};
function vn(e) {
  var t = e.data,
    r = e.valueAccessor,
    n = e.dataKey,
    i = e.clockWise,
    a = e.id,
    o = e.textBreakAll,
    u = j8(e, [
      "data",
      "valueAccessor",
      "dataKey",
      "clockWise",
      "id",
      "textBreakAll",
    ]);
  return !t || !t.length
    ? null
    : F($t, {
        className: "recharts-label-list",
        children: t.map(function (l, s) {
          var c = Z(n) ? r(l, s) : Er(l && l.payload, n),
            f = Z(a) ? {} : { id: "".concat(a, "-").concat(s) };
          return V.exports.createElement(
            ut,
            ge(ae(ae(ae({}, me(l, !0)), u), f), {
              parentViewBox: l.parentViewBox,
              index: s,
              value: c,
              textBreakAll: o,
              viewBox: ut.parseViewBox(
                Z(i) ? l : D0(D0({}, l), {}, { clockWise: i })
              ),
              key: "label-".concat(s),
            })
          );
        }),
      });
}
vn.displayName = "LabelList";
function F8(e, t) {
  return e
    ? e === !0
      ? F(vn, { data: t }, "labelList-implicit")
      : oe.isValidElement(e) || te(e)
      ? F(vn, { data: t, content: e }, "labelList-implicit")
      : Ht(e)
      ? V.exports.createElement(
          vn,
          ge(ae({ data: t }, e), { key: "labelList-implicit" })
        )
      : null
    : null;
}
function z8(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || (!e.children && r && !e.label)) return null;
  var n = e.children,
    i = br(n, vn.displayName).map(function (o, u) {
      return V.exports.cloneElement(o, {
        data: t,
        key: "labelList-".concat(u),
      });
    });
  if (!r) return i;
  var a = F8(e.label, t);
  return [a].concat($8(i));
}
vn.renderCallByParent = z8;
vn.defaultProps = L8;
function Gu(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Gu = function (r) {
          return typeof r;
        })
      : (Gu = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Gu(e)
  );
}
function B8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function L0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function U8(e, t, r) {
  return t && L0(e.prototype, t), r && L0(e, r), e;
}
function W8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Od(e, t);
}
function Od(e, t) {
  return (
    (Od =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    Od(e, t)
  );
}
function H8(e) {
  var t = G8();
  return function () {
    var n = as(e),
      i;
    if (t) {
      var a = as(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return V8(this, i);
  };
}
function V8(e, t) {
  return t && (Gu(t) === "object" || typeof t == "function") ? t : q8(e);
}
function q8(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function G8() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function as(e) {
  return (
    (as = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    as(e)
  );
}
var K8 = function (t, r) {
    var n = mr(r - t),
      i = Math.min(Math.abs(r - t), 359.999);
    return n * i;
  },
  Ou = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.radius,
      a = t.angle,
      o = t.sign,
      u = t.isExternal,
      l = t.cornerRadius,
      s = t.cornerIsExternal,
      c = l * (u ? 1 : -1) + i,
      f = Math.asin(l / c) / is,
      h = s ? a : a + o * f,
      x = lt(r, n, c, h),
      v = lt(r, n, i, h),
      d = s ? a - o * f : a,
      _ = lt(r, n, c * Math.cos(f * is), d);
    return { center: x, circleTangency: v, lineTangency: _, theta: f };
  },
  uS = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.startAngle,
      u = t.endAngle,
      l = K8(o, u),
      s = o + l,
      c = lt(r, n, a, o),
      f = lt(r, n, a, s),
      h = "M "
        .concat(c.x, ",")
        .concat(
          c.y,
          `
    A `
        )
        .concat(a, ",")
        .concat(
          a,
          `,0,
    `
        )
        .concat(+(Math.abs(l) > 180), ",")
        .concat(
          +(o > s),
          `,
    `
        )
        .concat(f.x, ",")
        .concat(
          f.y,
          `
  `
        );
    if (i > 0) {
      var x = lt(r, n, i, o),
        v = lt(r, n, i, s);
      h += "L "
        .concat(v.x, ",")
        .concat(
          v.y,
          `
            A `
        )
        .concat(i, ",")
        .concat(
          i,
          `,0,
            `
        )
        .concat(+(Math.abs(l) > 180), ",")
        .concat(
          +(o <= s),
          `,
            `
        )
        .concat(x.x, ",")
        .concat(x.y, " Z");
    } else h += "L ".concat(r, ",").concat(n, " Z");
    return h;
  },
  X8 = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.cornerRadius,
      u = t.forceCornerRadius,
      l = t.cornerIsExternal,
      s = t.startAngle,
      c = t.endAngle,
      f = mr(c - s),
      h = Ou({
        cx: r,
        cy: n,
        radius: a,
        angle: s,
        sign: f,
        cornerRadius: o,
        cornerIsExternal: l,
      }),
      x = h.circleTangency,
      v = h.lineTangency,
      d = h.theta,
      _ = Ou({
        cx: r,
        cy: n,
        radius: a,
        angle: c,
        sign: -f,
        cornerRadius: o,
        cornerIsExternal: l,
      }),
      p = _.circleTangency,
      m = _.lineTangency,
      g = _.theta,
      y = l ? Math.abs(s - c) : Math.abs(s - c) - d - g;
    if (y < 0)
      return u
        ? "M "
            .concat(v.x, ",")
            .concat(
              v.y,
              `
        a`
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              o * 2,
              `,0
        a`
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              -o * 2,
              `,0
      `
            )
        : uS({
            cx: r,
            cy: n,
            innerRadius: i,
            outerRadius: a,
            startAngle: s,
            endAngle: c,
          });
    var w = "M "
      .concat(v.x, ",")
      .concat(
        v.y,
        `
    A`
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(f < 0), ",")
      .concat(x.x, ",")
      .concat(
        x.y,
        `
    A`
      )
      .concat(a, ",")
      .concat(a, ",0,")
      .concat(+(y > 180), ",")
      .concat(+(f < 0), ",")
      .concat(p.x, ",")
      .concat(
        p.y,
        `
    A`
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(f < 0), ",")
      .concat(m.x, ",")
      .concat(
        m.y,
        `
  `
      );
    if (i > 0) {
      var b = Ou({
          cx: r,
          cy: n,
          radius: i,
          angle: s,
          sign: f,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: l,
        }),
        S = b.circleTangency,
        O = b.lineTangency,
        A = b.theta,
        E = Ou({
          cx: r,
          cy: n,
          radius: i,
          angle: c,
          sign: -f,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: l,
        }),
        k = E.circleTangency,
        $ = E.lineTangency,
        P = E.theta,
        M = l ? Math.abs(s - c) : Math.abs(s - c) - A - P;
      if (M < 0 && o === 0)
        return "".concat(w, "L").concat(r, ",").concat(n, "Z");
      w += "L"
        .concat($.x, ",")
        .concat(
          $.y,
          `
      A`
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(f < 0), ",")
        .concat(k.x, ",")
        .concat(
          k.y,
          `
      A`
        )
        .concat(i, ",")
        .concat(i, ",0,")
        .concat(+(M > 180), ",")
        .concat(+(f > 0), ",")
        .concat(S.x, ",")
        .concat(
          S.y,
          `
      A`
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(f < 0), ",")
        .concat(O.x, ",")
        .concat(O.y, "Z");
    } else w += "L".concat(r, ",").concat(n, "Z");
    return w;
  },
  lS = (function (e) {
    W8(r, e);
    var t = H8(r);
    function r() {
      return B8(this, r), t.apply(this, arguments);
    }
    return (
      U8(r, [
        {
          key: "render",
          value: function () {
            var i = this.props,
              a = i.cx,
              o = i.cy,
              u = i.innerRadius,
              l = i.outerRadius,
              s = i.cornerRadius,
              c = i.forceCornerRadius,
              f = i.cornerIsExternal,
              h = i.startAngle,
              x = i.endAngle,
              v = i.className;
            if (l < u || h === x) return null;
            var d = Te("recharts-sector", v),
              _ = l - u,
              p = Hi(s, _, 0, !0),
              m;
            return (
              p > 0 && Math.abs(h - x) < 360
                ? (m = X8({
                    cx: a,
                    cy: o,
                    innerRadius: u,
                    outerRadius: l,
                    cornerRadius: Math.min(p, _ / 2),
                    forceCornerRadius: c,
                    cornerIsExternal: f,
                    startAngle: h,
                    endAngle: x,
                  }))
                : (m = uS({
                    cx: a,
                    cy: o,
                    innerRadius: u,
                    outerRadius: l,
                    startAngle: h,
                    endAngle: x,
                  })),
              F("path", ge(ae({}, me(this.props, !0)), { className: d, d: m }))
            );
          },
        },
      ]),
      r
    );
  })(V.exports.PureComponent);
lS.defaultProps = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1,
};
function Ku(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Ku = function (r) {
          return typeof r;
        })
      : (Ku = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Ku(e)
  );
}
function F0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function z0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? F0(Object(r), !0).forEach(function (n) {
          Y8(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : F0(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Y8(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Q8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function B0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function J8(e, t, r) {
  return t && B0(e.prototype, t), r && B0(e, r), e;
}
function Z8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Ad(e, t);
}
function Ad(e, t) {
  return (
    (Ad =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    Ad(e, t)
  );
}
function eB(e) {
  var t = nB();
  return function () {
    var n = os(e),
      i;
    if (t) {
      var a = os(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return tB(this, i);
  };
}
function tB(e, t) {
  return t && (Ku(t) === "object" || typeof t == "function") ? t : rB(e);
}
function rB(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function nB() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function os(e) {
  return (
    (os = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    os(e)
  );
}
var U0 = {
    curveBasisClosed: lR,
    curveBasisOpen: sR,
    curveBasis: uR,
    curveLinearClosed: cR,
    curveLinear: Us,
    curveMonotoneX: fR,
    curveMonotoneY: hR,
    curveNatural: dR,
    curveStep: pR,
    curveStepAfter: yR,
    curveStepBefore: vR,
  },
  Au = function (t) {
    return t.x === +t.x && t.y === +t.y;
  },
  Ma = function (t) {
    return t.x;
  },
  Ia = function (t) {
    return t.y;
  },
  iB = function (t, r) {
    if (te(t)) return t;
    var n = "curve".concat(Fs(t));
    return n === "curveMonotone" && r
      ? U0["".concat(n).concat(r === "vertical" ? "Y" : "X")]
      : U0[n] || Us;
  },
  us = (function (e) {
    Z8(r, e);
    var t = eB(r);
    function r() {
      return Q8(this, r), t.apply(this, arguments);
    }
    return (
      J8(r, [
        {
          key: "getPath",
          value: function () {
            var i = this.props,
              a = i.type,
              o = i.points,
              u = i.baseLine,
              l = i.layout,
              s = i.connectNulls,
              c = iB(a, l),
              f = s
                ? o.filter(function (d) {
                    return Au(d);
                  })
                : o,
              h;
            if (xe(u)) {
              var x = s
                  ? u.filter(function (d) {
                      return Au(d);
                    })
                  : u,
                v = f.map(function (d, _) {
                  return z0(z0({}, d), {}, { base: x[_] });
                });
              return (
                l === "vertical"
                  ? (h = yu()
                      .y(Ia)
                      .x1(Ma)
                      .x0(function (d) {
                        return d.base.x;
                      }))
                  : (h = yu()
                      .x(Ma)
                      .y1(Ia)
                      .y0(function (d) {
                        return d.base.y;
                      })),
                h.defined(Au).curve(c),
                h(v)
              );
            }
            return (
              l === "vertical" && q(u)
                ? (h = yu().y(Ia).x1(Ma).x0(u))
                : q(u)
                ? (h = yu().x(Ma).y1(Ia).y0(u))
                : (h = fw().x(Ma).y(Ia)),
              h.defined(Au).curve(c),
              h(f)
            );
          },
        },
        {
          key: "render",
          value: function () {
            var i = this.props,
              a = i.className,
              o = i.points,
              u = i.path,
              l = i.pathRef;
            if ((!o || !o.length) && !u) return null;
            var s = o && o.length ? this.getPath() : u;
            return F(
              "path",
              ge(ae(ae({}, me(this.props)), Tl(this.props)), {
                className: Te("recharts-curve", a),
                d: s,
                ref: l,
              })
            );
          },
        },
      ]),
      r
    );
  })(V.exports.PureComponent);
us.defaultProps = { type: "linear", points: [], connectNulls: !1 };
function Xu(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Xu = function (r) {
          return typeof r;
        })
      : (Xu = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Xu(e)
  );
}
function aB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function W0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function oB(e, t, r) {
  return t && W0(e.prototype, t), r && W0(e, r), e;
}
function uB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && kd(e, t);
}
function kd(e, t) {
  return (
    (kd =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    kd(e, t)
  );
}
function lB(e) {
  var t = fB();
  return function () {
    var n = ls(e),
      i;
    if (t) {
      var a = ls(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return sB(this, i);
  };
}
function sB(e, t) {
  return t && (Xu(t) === "object" || typeof t == "function") ? t : cB(e);
}
function cB(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function fB() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function ls(e) {
  return (
    (ls = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ls(e)
  );
}
var H0 = function (t, r, n, i, a) {
    var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2),
      u = i >= 0 ? 1 : -1,
      l = n >= 0 ? 1 : -1,
      s = (i >= 0 && n >= 0) || (i < 0 && n < 0) ? 1 : 0,
      c;
    if (o > 0 && a instanceof Array) {
      for (var f = [0, 0, 0, 0], h = 0, x = 4; h < x; h++)
        f[h] = a[h] > o ? o : a[h];
      (c = "M".concat(t, ",").concat(r + u * f[0])),
        f[0] > 0 &&
          (c += "A "
            .concat(f[0], ",")
            .concat(f[0], ",0,0,")
            .concat(s, ",")
            .concat(t + l * f[0], ",")
            .concat(r)),
        (c += "L ".concat(t + n - l * f[1], ",").concat(r)),
        f[1] > 0 &&
          (c += "A "
            .concat(f[1], ",")
            .concat(f[1], ",0,0,")
            .concat(
              s,
              `,
        `
            )
            .concat(t + n, ",")
            .concat(r + u * f[1])),
        (c += "L ".concat(t + n, ",").concat(r + i - u * f[2])),
        f[2] > 0 &&
          (c += "A "
            .concat(f[2], ",")
            .concat(f[2], ",0,0,")
            .concat(
              s,
              `,
        `
            )
            .concat(t + n - l * f[2], ",")
            .concat(r + i)),
        (c += "L ".concat(t + l * f[3], ",").concat(r + i)),
        f[3] > 0 &&
          (c += "A "
            .concat(f[3], ",")
            .concat(f[3], ",0,0,")
            .concat(
              s,
              `,
        `
            )
            .concat(t, ",")
            .concat(r + i - u * f[3])),
        (c += "Z");
    } else if (o > 0 && a === +a && a > 0) {
      var v = Math.min(o, a);
      c = "M "
        .concat(t, ",")
        .concat(
          r + u * v,
          `
            A `
        )
        .concat(v, ",")
        .concat(v, ",0,0,")
        .concat(s, ",")
        .concat(t + l * v, ",")
        .concat(
          r,
          `
            L `
        )
        .concat(t + n - l * v, ",")
        .concat(
          r,
          `
            A `
        )
        .concat(v, ",")
        .concat(v, ",0,0,")
        .concat(s, ",")
        .concat(t + n, ",")
        .concat(
          r + u * v,
          `
            L `
        )
        .concat(t + n, ",")
        .concat(
          r + i - u * v,
          `
            A `
        )
        .concat(v, ",")
        .concat(v, ",0,0,")
        .concat(s, ",")
        .concat(t + n - l * v, ",")
        .concat(
          r + i,
          `
            L `
        )
        .concat(t + l * v, ",")
        .concat(
          r + i,
          `
            A `
        )
        .concat(v, ",")
        .concat(v, ",0,0,")
        .concat(s, ",")
        .concat(t, ",")
        .concat(r + i - u * v, " Z");
    } else
      c = "M "
        .concat(t, ",")
        .concat(r, " h ")
        .concat(n, " v ")
        .concat(i, " h ")
        .concat(-n, " Z");
    return c;
  },
  hB = function (t, r) {
    if (!t || !r) return !1;
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y,
      u = r.width,
      l = r.height;
    if (Math.abs(u) > 0 && Math.abs(l) > 0) {
      var s = Math.min(a, a + u),
        c = Math.max(a, a + u),
        f = Math.min(o, o + l),
        h = Math.max(o, o + l);
      return n >= s && n <= c && i >= f && i <= h;
    }
    return !1;
  },
  Tv = (function (e) {
    uB(r, e);
    var t = lB(r);
    function r() {
      var n;
      aB(this, r);
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
        a[o] = arguments[o];
      return (
        (n = t.call.apply(t, [this].concat(a))),
        (n.state = { totalLength: -1 }),
        (n.node = void 0),
        n
      );
    }
    return (
      oB(r, [
        {
          key: "componentDidMount",
          value: function () {
            if (this.node && this.node.getTotalLength)
              try {
                var i = this.node.getTotalLength();
                i && this.setState({ totalLength: i });
              } catch {}
          },
        },
        {
          key: "render",
          value: function () {
            var i = this,
              a = this.props,
              o = a.x,
              u = a.y,
              l = a.width,
              s = a.height,
              c = a.radius,
              f = a.className,
              h = this.state.totalLength,
              x = this.props,
              v = x.animationEasing,
              d = x.animationDuration,
              _ = x.animationBegin,
              p = x.isAnimationActive,
              m = x.isUpdateAnimationActive;
            if (
              o !== +o ||
              u !== +u ||
              l !== +l ||
              s !== +s ||
              l === 0 ||
              s === 0
            )
              return null;
            var g = Te("recharts-rectangle", f);
            return m
              ? F(Ki, {
                  canBegin: h > 0,
                  from: { width: l, height: s, x: o, y: u },
                  to: { width: l, height: s, x: o, y: u },
                  duration: d,
                  animationEasing: v,
                  isActive: m,
                  children: function (y) {
                    var w = y.width,
                      b = y.height,
                      S = y.x,
                      O = y.y;
                    return F(Ki, {
                      canBegin: h > 0,
                      from: "0px ".concat(h === -1 ? 1 : h, "px"),
                      to: "".concat(h, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: _,
                      duration: d,
                      isActive: p,
                      easing: v,
                      children: F(
                        "path",
                        ge(ae({}, me(i.props, !0)), {
                          className: g,
                          d: H0(S, O, w, b, c),
                          ref: function (E) {
                            i.node = E;
                          },
                        })
                      ),
                    });
                  },
                })
              : F(
                  "path",
                  ge(ae({}, me(this.props, !0)), {
                    className: g,
                    d: H0(o, u, l, s, c),
                  })
                );
          },
        },
      ]),
      r
    );
  })(V.exports.PureComponent);
Tv.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
};
function Yu(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Yu = function (r) {
          return typeof r;
        })
      : (Yu = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Yu(e)
  );
}
function dB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function V0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function pB(e, t, r) {
  return t && V0(e.prototype, t), r && V0(e, r), e;
}
function vB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Ed(e, t);
}
function Ed(e, t) {
  return (
    (Ed =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    Ed(e, t)
  );
}
function yB(e) {
  var t = xB();
  return function () {
    var n = ss(e),
      i;
    if (t) {
      var a = ss(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return gB(this, i);
  };
}
function gB(e, t) {
  return t && (Yu(t) === "object" || typeof t == "function") ? t : mB(e);
}
function mB(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function xB() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function ss(e) {
  return (
    (ss = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ss(e)
  );
}
var Pv = (function (e) {
  vB(r, e);
  var t = yB(r);
  function r() {
    return dB(this, r), t.apply(this, arguments);
  }
  return (
    pB(r, [
      {
        key: "render",
        value: function () {
          var i = this.props,
            a = i.cx,
            o = i.cy,
            u = i.r,
            l = i.className,
            s = Te("recharts-dot", l);
          return a === +a && o === +o && u === +u
            ? F(
                "circle",
                ge(ae(ae({}, me(this.props)), Tl(this.props)), {
                  className: s,
                  cx: a,
                  cy: o,
                  r: u,
                })
              )
            : null;
        },
      },
    ]),
    r
  );
})(V.exports.PureComponent);
function Qu(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Qu = function (r) {
          return typeof r;
        })
      : (Qu = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Qu(e)
  );
}
function _B(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function q0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function wB(e, t, r) {
  return t && q0(e.prototype, t), r && q0(e, r), e;
}
function bB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Td(e, t);
}
function Td(e, t) {
  return (
    (Td =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    Td(e, t)
  );
}
function SB(e) {
  var t = kB();
  return function () {
    var n = cs(e),
      i;
    if (t) {
      var a = cs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return OB(this, i);
  };
}
function OB(e, t) {
  return t && (Qu(t) === "object" || typeof t == "function") ? t : AB(e);
}
function AB(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function kB() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function cs(e) {
  return (
    (cs = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    cs(e)
  );
}
var sS = (function (e) {
  bB(r, e);
  var t = SB(r);
  function r() {
    return _B(this, r), t.apply(this, arguments);
  }
  return (
    wB(
      r,
      [
        {
          key: "render",
          value: function () {
            var i = this.props,
              a = i.x,
              o = i.y,
              u = i.width,
              l = i.height,
              s = i.top,
              c = i.left,
              f = i.className;
            return !q(a) || !q(o) || !q(u) || !q(l) || !q(s) || !q(c)
              ? null
              : F(
                  "path",
                  ge(ae({}, me(this.props, !0)), {
                    className: Te("recharts-cross", f),
                    d: r.getPath(a, o, u, l, s, c),
                  })
                );
          },
        },
      ],
      [
        {
          key: "getPath",
          value: function (i, a, o, u, l, s) {
            return "M"
              .concat(i, ",")
              .concat(l, "v")
              .concat(u, "M")
              .concat(s, ",")
              .concat(a, "h")
              .concat(o);
          },
        },
      ]
    ),
    r
  );
})(V.exports.PureComponent);
sS.defaultProps = { x: 0, y: 0, top: 0, left: 0, width: 0, height: 0 };
var EB = Math.ceil,
  TB = Math.max;
function PB(e, t, r, n) {
  for (var i = -1, a = TB(EB((t - e) / (r || 1)), 0), o = Array(a); a--; )
    (o[n ? a : ++i] = e), (e += r);
  return o;
}
var $B = PB,
  CB = Dw,
  G0 = 1 / 0,
  MB = 17976931348623157e292;
function IB(e) {
  if (!e) return e === 0 ? e : 0;
  if (((e = CB(e)), e === G0 || e === -G0)) {
    var t = e < 0 ? -1 : 1;
    return t * MB;
  }
  return e === e ? e : 0;
}
var cS = IB,
  NB = $B,
  RB = Ys,
  Of = cS;
function jB(e) {
  return function (t, r, n) {
    return (
      n && typeof n != "number" && RB(t, r, n) && (r = n = void 0),
      (t = Of(t)),
      r === void 0 ? ((r = t), (t = 0)) : (r = Of(r)),
      (n = n === void 0 ? (t < r ? 1 : -1) : Of(n)),
      NB(t, r, n, e)
    );
  };
}
var DB = jB,
  LB = DB,
  FB = LB(),
  fs = FB;
function K0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function X0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? K0(Object(r), !0).forEach(function (n) {
          fS(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : K0(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function fS(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var zB = ["Webkit", "Moz", "O", "ms"],
  BB = function (t, r) {
    if (!t) return null;
    var n = t.replace(/(\w)/, function (a) {
        return a.toUpperCase();
      }),
      i = zB.reduce(function (a, o) {
        return X0(X0({}, a), {}, fS({}, o + n, r));
      }, {});
    return (i[t] = r), i;
  };
function Ju(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Ju = function (r) {
          return typeof r;
        })
      : (Ju = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Ju(e)
  );
}
function Y0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Af(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Y0(Object(r), !0).forEach(function (n) {
          Pd(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Y0(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Pd(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function UB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Q0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function WB(e, t, r) {
  return t && Q0(e.prototype, t), r && Q0(e, r), e;
}
function HB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && $d(e, t);
}
function $d(e, t) {
  return (
    ($d =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    $d(e, t)
  );
}
function VB(e) {
  var t = GB();
  return function () {
    var n = hs(e),
      i;
    if (t) {
      var a = hs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return qB(this, i);
  };
}
function qB(e, t) {
  return t && (Ju(t) === "object" || typeof t == "function") ? t : Cd(e);
}
function Cd(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function GB() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function hs(e) {
  return (
    (hs = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    hs(e)
  );
}
var KB = function (t) {
    var r = t.data,
      n = t.startIndex,
      i = t.endIndex,
      a = t.x,
      o = t.width,
      u = t.travellerWidth;
    if (!r || !r.length) return {};
    var l = r.length,
      s = Qa()
        .domain(fs(0, l))
        .range([a, a + o - u]),
      c = s.domain().map(function (f) {
        return s(f);
      });
    return {
      isTextActive: !1,
      isSlideMoving: !1,
      isTravellerMoving: !1,
      startX: s(n),
      endX: s(i),
      scale: s,
      scaleValues: c,
    };
  },
  J0 = function (t) {
    return t.changedTouches && !!t.changedTouches.length;
  },
  To = (function (e) {
    HB(r, e);
    var t = VB(r);
    function r(n) {
      var i;
      return (
        UB(this, r),
        (i = t.call(this, n)),
        (i.leaveTimer = void 0),
        (i.travellerDragStartHandlers = void 0),
        (i.handleDrag = function (a) {
          i.leaveTimer && (clearTimeout(i.leaveTimer), (i.leaveTimer = null)),
            i.state.isTravellerMoving
              ? i.handleTravellerMove(a)
              : i.state.isSlideMoving && i.handleSlideDrag(a);
        }),
        (i.handleTouchMove = function (a) {
          a.changedTouches != null &&
            a.changedTouches.length > 0 &&
            i.handleDrag(a.changedTouches[0]);
        }),
        (i.handleDragEnd = function () {
          i.setState({ isTravellerMoving: !1, isSlideMoving: !1 }),
            i.detachDragEndListener();
        }),
        (i.handleLeaveWrapper = function () {
          (i.state.isTravellerMoving || i.state.isSlideMoving) &&
            (i.leaveTimer = window.setTimeout(
              i.handleDragEnd,
              i.props.leaveTimeOut
            ));
        }),
        (i.handleEnterSlideOrTraveller = function () {
          i.setState({ isTextActive: !0 });
        }),
        (i.handleLeaveSlideOrTraveller = function () {
          i.setState({ isTextActive: !1 });
        }),
        (i.handleSlideDragStart = function (a) {
          var o = J0(a) ? a.changedTouches[0] : a;
          i.setState({
            isTravellerMoving: !1,
            isSlideMoving: !0,
            slideMoveStartX: o.pageX,
          }),
            i.attachDragEndListener();
        }),
        (i.travellerDragStartHandlers = {
          startX: i.handleTravellerDragStart.bind(Cd(i), "startX"),
          endX: i.handleTravellerDragStart.bind(Cd(i), "endX"),
        }),
        (i.state = {}),
        i
      );
    }
    return (
      WB(
        r,
        [
          {
            key: "componentWillUnmount",
            value: function () {
              this.leaveTimer &&
                (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                this.detachDragEndListener();
            },
          },
          {
            key: "getIndex",
            value: function (i) {
              var a = i.startX,
                o = i.endX,
                u = this.state.scaleValues,
                l = this.props,
                s = l.gap,
                c = l.data,
                f = c.length - 1,
                h = Math.min(a, o),
                x = Math.max(a, o),
                v = r.getIndexInRange(u, h),
                d = r.getIndexInRange(u, x);
              return {
                startIndex: v - (v % s),
                endIndex: d === f ? f : d - (d % s),
              };
            },
          },
          {
            key: "getTextOfTick",
            value: function (i) {
              var a = this.props,
                o = a.data,
                u = a.tickFormatter,
                l = a.dataKey,
                s = Er(o[i], l, i);
              return te(u) ? u(s, i) : s;
            },
          },
          {
            key: "attachDragEndListener",
            value: function () {
              window.addEventListener("mouseup", this.handleDragEnd, !0),
                window.addEventListener("touchend", this.handleDragEnd, !0);
            },
          },
          {
            key: "detachDragEndListener",
            value: function () {
              window.removeEventListener("mouseup", this.handleDragEnd, !0),
                window.removeEventListener("touchend", this.handleDragEnd, !0);
            },
          },
          {
            key: "handleSlideDrag",
            value: function (i) {
              var a = this.state,
                o = a.slideMoveStartX,
                u = a.startX,
                l = a.endX,
                s = this.props,
                c = s.x,
                f = s.width,
                h = s.travellerWidth,
                x = s.startIndex,
                v = s.endIndex,
                d = s.onChange,
                _ = i.pageX - o;
              _ > 0
                ? (_ = Math.min(_, c + f - h - l, c + f - h - u))
                : _ < 0 && (_ = Math.max(_, c - u, c - l));
              var p = this.getIndex({ startX: u + _, endX: l + _ });
              (p.startIndex !== x || p.endIndex !== v) && d && d(p),
                this.setState({
                  startX: u + _,
                  endX: l + _,
                  slideMoveStartX: i.pageX,
                });
            },
          },
          {
            key: "handleTravellerDragStart",
            value: function (i, a) {
              var o = J0(a) ? a.changedTouches[0] : a;
              this.setState({
                isSlideMoving: !1,
                isTravellerMoving: !0,
                movingTravellerId: i,
                brushMoveStartX: o.pageX,
              }),
                this.attachDragEndListener();
            },
          },
          {
            key: "handleTravellerMove",
            value: function (i) {
              var a,
                o = this.state,
                u = o.brushMoveStartX,
                l = o.movingTravellerId,
                s = o.endX,
                c = o.startX,
                f = this.state[l],
                h = this.props,
                x = h.x,
                v = h.width,
                d = h.travellerWidth,
                _ = h.onChange,
                p = h.gap,
                m = h.data,
                g = { startX: this.state.startX, endX: this.state.endX },
                y = i.pageX - u;
              y > 0
                ? (y = Math.min(y, x + v - d - f))
                : y < 0 && (y = Math.max(y, x - f)),
                (g[l] = f + y);
              var w = this.getIndex(g),
                b = w.startIndex,
                S = w.endIndex,
                O = function () {
                  var E = m.length - 1;
                  return (
                    (l === "startX" && (s > c ? b % p === 0 : S % p === 0)) ||
                    (s < c && S === E) ||
                    (l === "endX" && (s > c ? S % p === 0 : b % p === 0)) ||
                    (s > c && S === E)
                  );
                };
              this.setState(
                ((a = {}),
                Pd(a, l, f + y),
                Pd(a, "brushMoveStartX", i.pageX),
                a),
                function () {
                  _ && O() && _(w);
                }
              );
            },
          },
          {
            key: "renderBackground",
            value: function () {
              var i = this.props,
                a = i.x,
                o = i.y,
                u = i.width,
                l = i.height,
                s = i.fill,
                c = i.stroke;
              return F("rect", {
                stroke: c,
                fill: s,
                x: a,
                y: o,
                width: u,
                height: l,
              });
            },
          },
          {
            key: "renderPanorama",
            value: function () {
              var i = this.props,
                a = i.x,
                o = i.y,
                u = i.width,
                l = i.height,
                s = i.data,
                c = i.children,
                f = i.padding,
                h = V.exports.Children.only(c);
              return h
                ? oe.cloneElement(h, {
                    x: a,
                    y: o,
                    width: u,
                    height: l,
                    margin: f,
                    compact: !0,
                    data: s,
                  })
                : null;
            },
          },
          {
            key: "renderTravellerLayer",
            value: function (i, a) {
              var o = this.props,
                u = o.y,
                l = o.travellerWidth,
                s = o.height,
                c = o.traveller,
                f = Math.max(i, this.props.x),
                h = Af(
                  Af({}, me(this.props)),
                  {},
                  { x: f, y: u, width: l, height: s }
                );
              return F($t, {
                className: "recharts-brush-traveller",
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.travellerDragStartHandlers[a],
                onTouchStart: this.travellerDragStartHandlers[a],
                style: { cursor: "col-resize" },
                children: r.renderTraveller(c, h),
              });
            },
          },
          {
            key: "renderSlide",
            value: function (i, a) {
              var o = this.props,
                u = o.y,
                l = o.height,
                s = o.stroke,
                c = o.travellerWidth,
                f = Math.min(i, a) + c,
                h = Math.max(Math.abs(a - i) - c, 0);
              return F("rect", {
                className: "recharts-brush-slide",
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.handleSlideDragStart,
                onTouchStart: this.handleSlideDragStart,
                style: { cursor: "move" },
                stroke: "none",
                fill: s,
                fillOpacity: 0.2,
                x: f,
                y: u,
                width: h,
                height: l,
              });
            },
          },
          {
            key: "renderText",
            value: function () {
              var i = this.props,
                a = i.startIndex,
                o = i.endIndex,
                u = i.y,
                l = i.height,
                s = i.travellerWidth,
                c = i.stroke,
                f = this.state,
                h = f.startX,
                x = f.endX,
                v = 5,
                d = { pointerEvents: "none", fill: c };
              return Ze($t, {
                className: "recharts-brush-texts",
                children: [
                  F(
                    mo,
                    ge(
                      ae(
                        {
                          textAnchor: "end",
                          verticalAnchor: "middle",
                          x: Math.min(h, x) - v,
                          y: u + l / 2,
                        },
                        d
                      ),
                      { children: this.getTextOfTick(a) }
                    )
                  ),
                  F(
                    mo,
                    ge(
                      ae(
                        {
                          textAnchor: "start",
                          verticalAnchor: "middle",
                          x: Math.max(h, x) + s + v,
                          y: u + l / 2,
                        },
                        d
                      ),
                      { children: this.getTextOfTick(o) }
                    )
                  ),
                ],
              });
            },
          },
          {
            key: "render",
            value: function () {
              var i = this.props,
                a = i.data,
                o = i.className,
                u = i.children,
                l = i.x,
                s = i.y,
                c = i.width,
                f = i.height,
                h = i.alwaysShowText,
                x = this.state,
                v = x.startX,
                d = x.endX,
                _ = x.isTextActive,
                p = x.isSlideMoving,
                m = x.isTravellerMoving;
              if (
                !a ||
                !a.length ||
                !q(l) ||
                !q(s) ||
                !q(c) ||
                !q(f) ||
                c <= 0 ||
                f <= 0
              )
                return null;
              var g = Te("recharts-brush", o),
                y = oe.Children.count(u) === 1,
                w = BB("userSelect", "none");
              return Ze($t, {
                className: g,
                onMouseMove: this.handleDrag,
                onMouseLeave: this.handleLeaveWrapper,
                onTouchMove: this.handleTouchMove,
                style: w,
                children: [
                  this.renderBackground(),
                  y && this.renderPanorama(),
                  this.renderSlide(v, d),
                  this.renderTravellerLayer(v, "startX"),
                  this.renderTravellerLayer(d, "endX"),
                  (_ || p || m || h) && this.renderText(),
                ],
              });
            },
          },
        ],
        [
          {
            key: "renderDefaultTraveller",
            value: function (i) {
              var a = i.x,
                o = i.y,
                u = i.width,
                l = i.height,
                s = i.stroke,
                c = Math.floor(o + l / 2) - 1;
              return Ze(PR, {
                children: [
                  F("rect", {
                    x: a,
                    y: o,
                    width: u,
                    height: l,
                    fill: s,
                    stroke: "none",
                  }),
                  F("line", {
                    x1: a + 1,
                    y1: c,
                    x2: a + u - 1,
                    y2: c,
                    fill: "none",
                    stroke: "#fff",
                  }),
                  F("line", {
                    x1: a + 1,
                    y1: c + 2,
                    x2: a + u - 1,
                    y2: c + 2,
                    fill: "none",
                    stroke: "#fff",
                  }),
                ],
              });
            },
          },
          {
            key: "renderTraveller",
            value: function (i, a) {
              var o;
              return (
                oe.isValidElement(i)
                  ? (o = oe.cloneElement(i, a))
                  : te(i)
                  ? (o = i(a))
                  : (o = r.renderDefaultTraveller(a)),
                o
              );
            },
          },
          {
            key: "getDerivedStateFromProps",
            value: function (i, a) {
              var o = i.data,
                u = i.width,
                l = i.x,
                s = i.travellerWidth,
                c = i.updateId,
                f = i.startIndex,
                h = i.endIndex;
              if (o !== a.prevData || c !== a.prevUpdateId)
                return Af(
                  {
                    prevData: o,
                    prevTravellerWidth: s,
                    prevUpdateId: c,
                    prevX: l,
                    prevWidth: u,
                  },
                  o && o.length
                    ? KB({
                        data: o,
                        width: u,
                        x: l,
                        travellerWidth: s,
                        startIndex: f,
                        endIndex: h,
                      })
                    : { scale: null, scaleValues: null }
                );
              if (
                a.scale &&
                (u !== a.prevWidth ||
                  l !== a.prevX ||
                  s !== a.prevTravellerWidth)
              ) {
                a.scale.range([l, l + u - s]);
                var x = a.scale.domain().map(function (v) {
                  return a.scale(v);
                });
                return {
                  prevData: o,
                  prevTravellerWidth: s,
                  prevUpdateId: c,
                  prevX: l,
                  prevWidth: u,
                  startX: a.scale(i.startIndex),
                  endX: a.scale(i.endIndex),
                  scaleValues: x,
                };
              }
              return null;
            },
          },
          {
            key: "getIndexInRange",
            value: function (i, a) {
              for (var o = i.length, u = 0, l = o - 1; l - u > 1; ) {
                var s = Math.floor((u + l) / 2);
                i[s] > a ? (l = s) : (u = s);
              }
              return a >= i[l] ? l : u;
            },
          },
        ]
      ),
      r
    );
  })(V.exports.PureComponent);
To.displayName = "Brush";
To.defaultProps = {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: { top: 1, right: 1, bottom: 1, left: 1 },
  leaveTimeOut: 1e3,
  alwaysShowText: !1,
};
var XB = ev;
function YB(e, t) {
  var r;
  return (
    XB(e, function (n, i, a) {
      return (r = t(n, i, a)), !r;
    }),
    !!r
  );
}
var QB = YB,
  JB = L_,
  ZB = An,
  eU = QB,
  tU = xe,
  rU = Ys;
function nU(e, t, r) {
  var n = tU(e) ? JB : eU;
  return r && rU(e, t, r) && (t = void 0), n(e, ZB(t));
}
var iU = nU,
  Or = function (t, r) {
    var n = t.alwaysShow,
      i = t.ifOverflow;
    return n && (i = "extendDomain"), i === r;
  };
function aU(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e)) return !1;
  return !0;
}
var oU = aU,
  uU = ev;
function lU(e, t) {
  var r = !0;
  return (
    uU(e, function (n, i, a) {
      return (r = !!t(n, i, a)), r;
    }),
    r
  );
}
var sU = lU,
  cU = oU,
  fU = sU,
  hU = An,
  dU = xe,
  pU = Ys;
function vU(e, t, r) {
  var n = dU(e) ? cU : fU;
  return r && pU(e, t, r) && (t = void 0), n(e, hU(t));
}
var hS = vU,
  Z0 = jw;
function yU(e, t, r) {
  t == "__proto__" && Z0
    ? Z0(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
    : (e[t] = r);
}
var gU = yU,
  mU = gU,
  xU = Nw,
  _U = An;
function wU(e, t) {
  var r = {};
  return (
    (t = _U(t)),
    xU(e, function (n, i, a) {
      mU(r, i, t(n, i, a));
    }),
    r
  );
}
var bU = wU;
function SU(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function e1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function OU(e, t, r) {
  return t && e1(e.prototype, t), r && e1(e, r), e;
}
function t1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function fr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? t1(Object(r), !0).forEach(function (n) {
          $v(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : t1(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function $v(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var AU = function (t, r, n, i, a) {
    var o = t.width,
      u = t.height,
      l = t.layout,
      s = t.children,
      c = Object.keys(r),
      f = {
        left: n.left,
        leftMirror: n.left,
        right: o - n.right,
        rightMirror: o - n.right,
        top: n.top,
        topMirror: n.top,
        bottom: u - n.bottom,
        bottomMirror: u - n.bottom,
      },
      h = !!Dr(s, "Bar");
    return c.reduce(function (x, v) {
      var d = r[v],
        _ = d.orientation,
        p = d.domain,
        m = d.padding,
        g = m === void 0 ? {} : m,
        y = d.mirror,
        w = d.reversed,
        b = "".concat(_).concat(y ? "Mirror" : ""),
        S,
        O,
        A,
        E,
        k;
      if (
        d.type === "number" &&
        (d.padding === "gap" || d.padding === "no-gap")
      ) {
        var $ = p[1] - p[0],
          P = 1 / 0,
          M = d.categoricalDomain.sort();
        M.forEach(function (ce, je) {
          je > 0 && (P = Math.min((ce || 0) - (M[je - 1] || 0), P));
        });
        var D = P / $,
          N = d.layout === "vertical" ? n.height : n.width;
        if (
          (d.padding === "gap" && (S = (D * N) / 2), d.padding === "no-gap")
        ) {
          var W = Hi(t.barCategoryGap, D * N),
            T = (D * N) / 2;
          S = T - W - ((T - W) / N) * W;
        }
      }
      i === "xAxis"
        ? (O = [
            n.left + (g.left || 0) + (S || 0),
            n.left + n.width - (g.right || 0) - (S || 0),
          ])
        : i === "yAxis"
        ? (O =
            l === "horizontal"
              ? [n.top + n.height - (g.bottom || 0), n.top + (g.top || 0)]
              : [
                  n.top + (g.top || 0) + (S || 0),
                  n.top + n.height - (g.bottom || 0) - (S || 0),
                ])
        : (O = d.range),
        w && (O = [O[1], O[0]]);
      var R = Yz(d, a, h),
        U = R.scale,
        Y = R.realScaleType;
      U.domain(p).range(O), Qz(U);
      var X = i8(U, fr(fr({}, d), {}, { realScaleType: Y }));
      i === "xAxis"
        ? ((k = (_ === "top" && !y) || (_ === "bottom" && y)),
          (A = n.left),
          (E = f[b] - k * d.height))
        : i === "yAxis" &&
          ((k = (_ === "left" && !y) || (_ === "right" && y)),
          (A = f[b] - k * d.width),
          (E = n.top));
      var le = fr(
        fr(fr({}, d), X),
        {},
        {
          realScaleType: Y,
          x: A,
          y: E,
          scale: U,
          width: i === "xAxis" ? n.width : d.width,
          height: i === "yAxis" ? n.height : d.height,
        }
      );
      return (
        (le.bandSize = ns(le, X)),
        !d.hide && i === "xAxis"
          ? (f[b] += (k ? -1 : 1) * le.height)
          : d.hide || (f[b] += (k ? -1 : 1) * le.width),
        fr(fr({}, x), {}, $v({}, v, le))
      );
    }, {});
  },
  dS = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y;
    return {
      x: Math.min(n, a),
      y: Math.min(i, o),
      width: Math.abs(a - n),
      height: Math.abs(o - i),
    };
  },
  kU = function (t) {
    var r = t.x1,
      n = t.y1,
      i = t.x2,
      a = t.y2;
    return dS({ x: r, y: n }, { x: i, y: a });
  },
  pS = (function () {
    function e(t) {
      SU(this, e), (this.scale = void 0), (this.scale = t);
    }
    return (
      OU(
        e,
        [
          {
            key: "domain",
            get: function () {
              return this.scale.domain;
            },
          },
          {
            key: "range",
            get: function () {
              return this.scale.range;
            },
          },
          {
            key: "rangeMin",
            get: function () {
              return this.range()[0];
            },
          },
          {
            key: "rangeMax",
            get: function () {
              return this.range()[1];
            },
          },
          {
            key: "bandwidth",
            get: function () {
              return this.scale.bandwidth;
            },
          },
          {
            key: "apply",
            value: function (r) {
              var n =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                i = n.bandAware,
                a = n.position;
              if (r !== void 0) {
                if (a)
                  switch (a) {
                    case "start":
                      return this.scale(r);
                    case "middle": {
                      var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                      return this.scale(r) + o;
                    }
                    case "end": {
                      var u = this.bandwidth ? this.bandwidth() : 0;
                      return this.scale(r) + u;
                    }
                    default:
                      return this.scale(r);
                  }
                if (i) {
                  var l = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(r) + l;
                }
                return this.scale(r);
              }
            },
          },
          {
            key: "isInRange",
            value: function (r) {
              var n = this.range(),
                i = n[0],
                a = n[n.length - 1];
              return i <= a ? r >= i && r <= a : r >= a && r <= i;
            },
          },
        ],
        [
          {
            key: "create",
            value: function (r) {
              return new e(r);
            },
          },
        ]
      ),
      e
    );
  })();
pS.EPS = 1e-4;
var Cv = function (t) {
  var r = Object.keys(t).reduce(function (n, i) {
    return fr(fr({}, n), {}, $v({}, i, pS.create(t[i])));
  }, {});
  return fr(
    fr({}, r),
    {},
    {
      apply: function (i) {
        var a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o = a.bandAware,
          u = a.position;
        return bU(i, function (l, s) {
          return r[s].apply(l, { bandAware: o, position: u });
        });
      },
      isInRange: function (i) {
        return hS(i, function (a, o) {
          return r[o].isInRange(a);
        });
      },
    }
  );
};
function r1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function n1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? r1(Object(r), !0).forEach(function (n) {
          EU(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : r1(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function EU(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function TU(e, t) {
  return MU(e) || CU(e, t) || $U(e, t) || PU();
}
function PU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $U(e, t) {
  if (!!e) {
    if (typeof e == "string") return i1(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return i1(e, t);
  }
}
function i1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function CU(e, t) {
  if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (l) {
      (i = !0), (a = l);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function MU(e) {
  if (Array.isArray(e)) return e;
}
function Md() {
  return (
    (Md =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Md.apply(this, arguments)
  );
}
var IU = function (t, r) {
    var n;
    return (
      oe.isValidElement(t)
        ? (n = oe.cloneElement(t, r))
        : te(t)
        ? (n = t(r))
        : (n = oe.createElement(
            "line",
            Md({}, r, { className: "recharts-reference-line-line" })
          )),
      n
    );
  },
  NU = function (t, r, n, i, a) {
    var o = a.viewBox,
      u = o.x,
      l = o.y,
      s = o.width,
      c = o.height,
      f = a.position;
    if (n) {
      var h = a.y,
        x = a.yAxis.orientation,
        v = t.y.apply(h, { position: f });
      if (Or(a, "discard") && !t.y.isInRange(v)) return null;
      var d = [
        { x: u + s, y: v },
        { x: u, y: v },
      ];
      return x === "left" ? d.reverse() : d;
    }
    if (r) {
      var _ = a.x,
        p = a.xAxis.orientation,
        m = t.x.apply(_, { position: f });
      if (Or(a, "discard") && !t.x.isInRange(m)) return null;
      var g = [
        { x: m, y: l + c },
        { x: m, y: l },
      ];
      return p === "top" ? g.reverse() : g;
    }
    if (i) {
      var y = a.segment,
        w = y.map(function (b) {
          return t.apply(b, { position: f });
        });
      return Or(a, "discard") &&
        iU(w, function (b) {
          return !t.isInRange(b);
        })
        ? null
        : w;
    }
    return null;
  };
function Mv(e) {
  var t = e.x,
    r = e.y,
    n = e.segment,
    i = e.xAxis,
    a = e.yAxis,
    o = e.shape,
    u = e.className,
    l = e.alwaysShow,
    s = e.clipPathId;
  Mi(
    l === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
  );
  var c = Cv({ x: i.scale, y: a.scale }),
    f = Je(t),
    h = Je(r),
    x = n && n.length === 2,
    v = NU(c, f, h, x, e);
  if (!v) return null;
  var d = TU(v, 2),
    _ = d[0],
    p = _.x,
    m = _.y,
    g = d[1],
    y = g.x,
    w = g.y,
    b = Or(e, "hidden") ? "url(#".concat(s, ")") : void 0,
    S = n1(n1({ clipPath: b }, me(e, !0)), {}, { x1: p, y1: m, x2: y, y2: w });
  return oe.createElement(
    $t,
    { className: Te("recharts-reference-line", u) },
    IU(o, S),
    ut.renderCallByParent(e, kU({ x1: p, y1: m, x2: y, y2: w }))
  );
}
Mv.displayName = "ReferenceLine";
Mv.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle",
};
function Id() {
  return (
    (Id =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Id.apply(this, arguments)
  );
}
function a1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function o1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? a1(Object(r), !0).forEach(function (n) {
          RU(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : a1(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function RU(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var jU = function (t) {
  var r = t.x,
    n = t.y,
    i = t.xAxis,
    a = t.yAxis,
    o = Cv({ x: i.scale, y: a.scale }),
    u = o.apply({ x: r, y: n }, { bandAware: !0 });
  return Or(t, "discard") && !o.isInRange(u) ? null : u;
};
function Uo(e) {
  var t = e.x,
    r = e.y,
    n = e.r,
    i = e.alwaysShow,
    a = e.clipPathId,
    o = Je(t),
    u = Je(r);
  if (
    (Mi(
      i === void 0,
      'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
    ),
    !o || !u)
  )
    return null;
  var l = jU(e);
  if (!l) return null;
  var s = l.x,
    c = l.y,
    f = e.shape,
    h = e.className,
    x = Or(e, "hidden") ? "url(#".concat(a, ")") : void 0,
    v = o1(o1({ clipPath: x }, me(e, !0)), {}, { cx: s, cy: c });
  return oe.createElement(
    $t,
    { className: Te("recharts-reference-dot", h) },
    Uo.renderDot(f, v),
    ut.renderCallByParent(e, {
      x: s - n,
      y: c - n,
      width: 2 * n,
      height: 2 * n,
    })
  );
}
Uo.displayName = "ReferenceDot";
Uo.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
};
Uo.renderDot = function (e, t) {
  var r;
  return (
    oe.isValidElement(e)
      ? (r = oe.cloneElement(e, t))
      : te(e)
      ? (r = e(t))
      : (r = oe.createElement(
          Pv,
          Id({}, t, {
            cx: t.cx,
            cy: t.cy,
            className: "recharts-reference-dot-dot",
          })
        )),
    r
  );
};
function Nd() {
  return (
    (Nd =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Nd.apply(this, arguments)
  );
}
function u1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function l1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? u1(Object(r), !0).forEach(function (n) {
          DU(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : u1(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function DU(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var LU = function (t, r, n, i, a) {
  var o = a.x1,
    u = a.x2,
    l = a.y1,
    s = a.y2,
    c = a.xAxis,
    f = a.yAxis;
  if (!c || !f) return null;
  var h = Cv({ x: c.scale, y: f.scale }),
    x = {
      x: t ? h.x.apply(o, { position: "start" }) : h.x.rangeMin,
      y: n ? h.y.apply(l, { position: "start" }) : h.y.rangeMin,
    },
    v = {
      x: r ? h.x.apply(u, { position: "end" }) : h.x.rangeMax,
      y: i ? h.y.apply(s, { position: "end" }) : h.y.rangeMax,
    };
  return Or(a, "discard") && (!h.isInRange(x) || !h.isInRange(v))
    ? null
    : dS(x, v);
};
function Wo(e) {
  var t = e.x1,
    r = e.x2,
    n = e.y1,
    i = e.y2,
    a = e.className,
    o = e.alwaysShow,
    u = e.clipPathId;
  Mi(
    o === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
  );
  var l = Je(t),
    s = Je(r),
    c = Je(n),
    f = Je(i),
    h = e.shape;
  if (!l && !s && !c && !f && !h) return null;
  var x = LU(l, s, c, f, e);
  if (!x && !h) return null;
  var v = Or(e, "hidden") ? "url(#".concat(u, ")") : void 0;
  return oe.createElement(
    $t,
    { className: Te("recharts-reference-area", a) },
    Wo.renderRect(h, l1(l1({ clipPath: v }, me(e, !0)), x)),
    ut.renderCallByParent(e, x)
  );
}
Wo.displayName = "ReferenceArea";
Wo.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1,
};
Wo.renderRect = function (e, t) {
  var r;
  return (
    oe.isValidElement(e)
      ? (r = oe.cloneElement(e, t))
      : te(e)
      ? (r = e(t))
      : (r = oe.createElement(
          Tv,
          Nd({}, t, { className: "recharts-reference-area-rect" })
        )),
    r
  );
};
function Zu(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Zu = function (r) {
          return typeof r;
        })
      : (Zu = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    Zu(e)
  );
}
function s1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? s1(Object(r), !0).forEach(function (n) {
          FU(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : s1(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function FU(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function kf(e, t) {
  if (e == null) return {};
  var r = zU(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function zU(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function BU(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function c1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function UU(e, t, r) {
  return t && c1(e.prototype, t), r && c1(e, r), e;
}
function WU(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Rd(e, t);
}
function Rd(e, t) {
  return (
    (Rd =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    Rd(e, t)
  );
}
function HU(e) {
  var t = GU();
  return function () {
    var n = ds(e),
      i;
    if (t) {
      var a = ds(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return VU(this, i);
  };
}
function VU(e, t) {
  return t && (Zu(t) === "object" || typeof t == "function") ? t : qU(e);
}
function qU(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function GU() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function ds(e) {
  return (
    (ds = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ds(e)
  );
}
var Fn = (function (e) {
  WU(r, e);
  var t = HU(r);
  function r() {
    return BU(this, r), t.apply(this, arguments);
  }
  return (
    UU(
      r,
      [
        {
          key: "shouldComponentUpdate",
          value: function (i) {
            var a = i.viewBox,
              o = kf(i, ["viewBox"]),
              u = this.props,
              l = u.viewBox,
              s = kf(u, ["viewBox"]);
            return !xo(a, l) || !xo(o, s);
          },
        },
        {
          key: "getTickLineCoord",
          value: function (i) {
            var a = this.props,
              o = a.x,
              u = a.y,
              l = a.width,
              s = a.height,
              c = a.orientation,
              f = a.tickSize,
              h = a.mirror,
              x = a.tickMargin,
              v,
              d,
              _,
              p,
              m,
              g,
              y = h ? -1 : 1,
              w = i.tickSize || f,
              b = q(i.tickCoord) ? i.tickCoord : i.coordinate;
            switch (c) {
              case "top":
                (v = d = i.coordinate),
                  (p = u + +!h * s),
                  (_ = p - y * w),
                  (g = _ - y * x),
                  (m = b);
                break;
              case "left":
                (_ = p = i.coordinate),
                  (d = o + +!h * l),
                  (v = d - y * w),
                  (m = v - y * x),
                  (g = b);
                break;
              case "right":
                (_ = p = i.coordinate),
                  (d = o + +h * l),
                  (v = d + y * w),
                  (m = v + y * x),
                  (g = b);
                break;
              default:
                (v = d = i.coordinate),
                  (p = u + +h * s),
                  (_ = p + y * w),
                  (g = _ + y * x),
                  (m = b);
                break;
            }
            return {
              line: { x1: v, y1: _, x2: d, y2: p },
              tick: { x: m, y: g },
            };
          },
        },
        {
          key: "getTickTextAnchor",
          value: function () {
            var i = this.props,
              a = i.orientation,
              o = i.mirror,
              u;
            switch (a) {
              case "left":
                u = o ? "start" : "end";
                break;
              case "right":
                u = o ? "end" : "start";
                break;
              default:
                u = "middle";
                break;
            }
            return u;
          },
        },
        {
          key: "getTickVerticalAnchor",
          value: function () {
            var i = this.props,
              a = i.orientation,
              o = i.mirror,
              u = "end";
            switch (a) {
              case "left":
              case "right":
                u = "middle";
                break;
              case "top":
                u = o ? "start" : "end";
                break;
              default:
                u = o ? "end" : "start";
                break;
            }
            return u;
          },
        },
        {
          key: "renderAxisLine",
          value: function () {
            var i = this.props,
              a = i.x,
              o = i.y,
              u = i.width,
              l = i.height,
              s = i.orientation,
              c = i.mirror,
              f = i.axisLine,
              h = ye(ye(ye({}, me(this.props)), me(f)), {}, { fill: "none" });
            if (s === "top" || s === "bottom") {
              var x = +((s === "top" && !c) || (s === "bottom" && c));
              h = ye(
                ye({}, h),
                {},
                { x1: a, y1: o + x * l, x2: a + u, y2: o + x * l }
              );
            } else {
              var v = +((s === "left" && !c) || (s === "right" && c));
              h = ye(
                ye({}, h),
                {},
                { x1: a + v * u, y1: o, x2: a + v * u, y2: o + l }
              );
            }
            return F(
              "line",
              ge(ae({}, h), {
                className: Te(
                  "recharts-cartesian-axis-line",
                  zt(f, "className")
                ),
              })
            );
          },
        },
        {
          key: "renderTicks",
          value: function (i) {
            var a = this,
              o = this.props,
              u = o.tickLine,
              l = o.stroke,
              s = o.tick,
              c = o.tickFormatter,
              f = o.unit,
              h = r.getTicks(ye(ye({}, this.props), {}, { ticks: i })),
              x = this.getTickTextAnchor(),
              v = this.getTickVerticalAnchor(),
              d = me(this.props),
              _ = me(s),
              p = ye(ye({}, d), {}, { fill: "none" }, me(u)),
              m = h.map(function (g, y) {
                var w = a.getTickLineCoord(g),
                  b = w.line,
                  S = w.tick,
                  O = ye(
                    ye(
                      ye(
                        ye({ textAnchor: x, verticalAnchor: v }, d),
                        {},
                        { stroke: "none", fill: l },
                        _
                      ),
                      S
                    ),
                    {},
                    {
                      index: y,
                      payload: g,
                      visibleTicksCount: h.length,
                      tickFormatter: c,
                    }
                  );
                return Ze(
                  $t,
                  ge(
                    ae(
                      { className: "recharts-cartesian-axis-tick" },
                      M_(a.props, g, y)
                    ),
                    {
                      children: [
                        u &&
                          F(
                            "line",
                            ge(ae(ae({}, p), b), {
                              className: Te(
                                "recharts-cartesian-axis-tick-line",
                                zt(u, "className")
                              ),
                            })
                          ),
                        s &&
                          r.renderTickItem(
                            s,
                            O,
                            ""
                              .concat(te(c) ? c(g.value, y) : g.value)
                              .concat(f || "")
                          ),
                      ],
                    }
                  ),
                  "tick-".concat(y)
                );
              });
            return F("g", {
              className: "recharts-cartesian-axis-ticks",
              children: m,
            });
          },
        },
        {
          key: "render",
          value: function () {
            var i = this.props,
              a = i.axisLine,
              o = i.width,
              u = i.height,
              l = i.ticksGenerator,
              s = i.className,
              c = i.hide;
            if (c) return null;
            var f = this.props,
              h = f.ticks,
              x = kf(f, ["ticks"]),
              v = h;
            return (
              te(l) && (v = h && h.length > 0 ? l(this.props) : l(x)),
              o <= 0 || u <= 0 || !v || !v.length
                ? null
                : Ze($t, {
                    className: Te("recharts-cartesian-axis", s),
                    children: [
                      a && this.renderAxisLine(),
                      this.renderTicks(v),
                      ut.renderCallByParent(this.props),
                    ],
                  })
            );
          },
        },
      ],
      [
        {
          key: "getTicks",
          value: function (i) {
            var a = i.tick,
              o = i.ticks,
              u = i.viewBox,
              l = i.minTickGap,
              s = i.orientation,
              c = i.interval,
              f = i.tickFormatter,
              h = i.unit;
            return !o || !o.length || !a
              ? []
              : q(c) || dn.isSsr
              ? r.getNumberIntervalTicks(
                  o,
                  typeof c == "number" && q(c) ? c : 0
                )
              : c === "preserveStartEnd"
              ? r.getTicksStart(
                  {
                    ticks: o,
                    tickFormatter: f,
                    viewBox: u,
                    orientation: s,
                    minTickGap: l,
                    unit: h,
                  },
                  !0
                )
              : c === "preserveStart"
              ? r.getTicksStart({
                  ticks: o,
                  tickFormatter: f,
                  viewBox: u,
                  orientation: s,
                  minTickGap: l,
                  unit: h,
                })
              : r.getTicksEnd({
                  ticks: o,
                  tickFormatter: f,
                  viewBox: u,
                  orientation: s,
                  minTickGap: l,
                  unit: h,
                });
          },
        },
        {
          key: "getNumberIntervalTicks",
          value: function (i, a) {
            return i.filter(function (o, u) {
              return u % (a + 1) === 0;
            });
          },
        },
        {
          key: "getTicksStart",
          value: function (i, a) {
            var o = i.ticks,
              u = i.tickFormatter,
              l = i.viewBox,
              s = i.orientation,
              c = i.minTickGap,
              f = i.unit,
              h = l.x,
              x = l.y,
              v = l.width,
              d = l.height,
              _ = s === "top" || s === "bottom" ? "width" : "height",
              p = (o || []).slice(),
              m = f && _ === "width" ? Ln(f)[_] : 0,
              g = p.length,
              y = g >= 2 ? mr(p[1].coordinate - p[0].coordinate) : 1,
              w,
              b;
            if (
              (y === 1
                ? ((w = _ === "width" ? h : x),
                  (b = _ === "width" ? h + v : x + d))
                : ((w = _ === "width" ? h + v : x + d),
                  (b = _ === "width" ? h : x)),
              a)
            ) {
              var S = o[g - 1],
                O = te(u) ? u(S.value, g - 1) : S.value,
                A = Ln(O)[_] + m,
                E = y * (S.coordinate + (y * A) / 2 - b);
              p[g - 1] = S = ye(
                ye({}, S),
                {},
                { tickCoord: E > 0 ? S.coordinate - E * y : S.coordinate }
              );
              var k =
                y * (S.tickCoord - (y * A) / 2 - w) >= 0 &&
                y * (S.tickCoord + (y * A) / 2 - b) <= 0;
              k &&
                ((b = S.tickCoord - y * (A / 2 + c)),
                (p[g - 1] = ye(ye({}, S), {}, { isShow: !0 })));
            }
            for (var $ = a ? g - 1 : g, P = 0; P < $; P++) {
              var M = p[P],
                D = te(u) ? u(M.value, P) : M.value,
                N = Ln(D)[_] + m;
              if (P === 0) {
                var W = y * (M.coordinate - (y * N) / 2 - w);
                p[P] = M = ye(
                  ye({}, M),
                  {},
                  { tickCoord: W < 0 ? M.coordinate - W * y : M.coordinate }
                );
              } else p[P] = M = ye(ye({}, M), {}, { tickCoord: M.coordinate });
              var T =
                y * (M.tickCoord - (y * N) / 2 - w) >= 0 &&
                y * (M.tickCoord + (y * N) / 2 - b) <= 0;
              T &&
                ((w = M.tickCoord + y * (N / 2 + c)),
                (p[P] = ye(ye({}, M), {}, { isShow: !0 })));
            }
            return p.filter(function (R) {
              return R.isShow;
            });
          },
        },
        {
          key: "getTicksEnd",
          value: function (i) {
            var a = i.ticks,
              o = i.tickFormatter,
              u = i.viewBox,
              l = i.orientation,
              s = i.minTickGap,
              c = i.unit,
              f = u.x,
              h = u.y,
              x = u.width,
              v = u.height,
              d = l === "top" || l === "bottom" ? "width" : "height",
              _ = c && d === "width" ? Ln(c)[d] : 0,
              p = (a || []).slice(),
              m = p.length,
              g = m >= 2 ? mr(p[1].coordinate - p[0].coordinate) : 1,
              y,
              w;
            g === 1
              ? ((y = d === "width" ? f : h),
                (w = d === "width" ? f + x : h + v))
              : ((y = d === "width" ? f + x : h + v),
                (w = d === "width" ? f : h));
            for (var b = m - 1; b >= 0; b--) {
              var S = p[b],
                O = te(o) ? o(S.value, m - b - 1) : S.value,
                A = Ln(O)[d] + _;
              if (b === m - 1) {
                var E = g * (S.coordinate + (g * A) / 2 - w);
                p[b] = S = ye(
                  ye({}, S),
                  {},
                  { tickCoord: E > 0 ? S.coordinate - E * g : S.coordinate }
                );
              } else p[b] = S = ye(ye({}, S), {}, { tickCoord: S.coordinate });
              var k =
                g * (S.tickCoord - (g * A) / 2 - y) >= 0 &&
                g * (S.tickCoord + (g * A) / 2 - w) <= 0;
              k &&
                ((w = S.tickCoord - g * (A / 2 + s)),
                (p[b] = ye(ye({}, S), {}, { isShow: !0 })));
            }
            return p.filter(function ($) {
              return $.isShow;
            });
          },
        },
        {
          key: "renderTickItem",
          value: function (i, a, o) {
            var u;
            return (
              oe.isValidElement(i)
                ? (u = oe.cloneElement(i, a))
                : te(i)
                ? (u = i(a))
                : (u = F(
                    mo,
                    ge(ae({}, a), {
                      className: "recharts-cartesian-axis-tick-value",
                      children: o,
                    })
                  )),
              u
            );
          },
        },
      ]
    ),
    r
  );
})(V.exports.Component);
Fn.displayName = "CartesianAxis";
Fn.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: "bottom",
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
};
function el(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (el = function (r) {
          return typeof r;
        })
      : (el = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    el(e)
  );
}
function KU(e, t) {
  if (e == null) return {};
  var r = XU(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function XU(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function f1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ku(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? f1(Object(r), !0).forEach(function (n) {
          YU(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : f1(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function YU(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function QU(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function h1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function JU(e, t, r) {
  return t && h1(e.prototype, t), r && h1(e, r), e;
}
function ZU(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && jd(e, t);
}
function jd(e, t) {
  return (
    (jd =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    jd(e, t)
  );
}
function e9(e) {
  var t = n9();
  return function () {
    var n = ps(e),
      i;
    if (t) {
      var a = ps(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return t9(this, i);
  };
}
function t9(e, t) {
  return t && (el(t) === "object" || typeof t == "function") ? t : r9(e);
}
function r9(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function n9() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function ps(e) {
  return (
    (ps = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ps(e)
  );
}
var Iv = (function (e) {
  ZU(r, e);
  var t = e9(r);
  function r() {
    return QU(this, r), t.apply(this, arguments);
  }
  return (
    JU(
      r,
      [
        {
          key: "renderHorizontal",
          value: function (i) {
            var a = this,
              o = this.props,
              u = o.x,
              l = o.width,
              s = o.horizontal;
            if (!i || !i.length) return null;
            var c = i.map(function (f, h) {
              var x = ku(
                ku({}, a.props),
                {},
                {
                  x1: u,
                  y1: f,
                  x2: u + l,
                  y2: f,
                  key: "line-".concat(h),
                  index: h,
                }
              );
              return r.renderLineItem(s, x);
            });
            return F("g", {
              className: "recharts-cartesian-grid-horizontal",
              children: c,
            });
          },
        },
        {
          key: "renderVertical",
          value: function (i) {
            var a = this,
              o = this.props,
              u = o.y,
              l = o.height,
              s = o.vertical;
            if (!i || !i.length) return null;
            var c = i.map(function (f, h) {
              var x = ku(
                ku({}, a.props),
                {},
                {
                  x1: f,
                  y1: u,
                  x2: f,
                  y2: u + l,
                  key: "line-".concat(h),
                  index: h,
                }
              );
              return r.renderLineItem(s, x);
            });
            return F("g", {
              className: "recharts-cartesian-grid-vertical",
              children: c,
            });
          },
        },
        {
          key: "renderVerticalStripes",
          value: function (i) {
            var a = this.props.verticalFill;
            if (!a || !a.length) return null;
            var o = this.props,
              u = o.fillOpacity,
              l = o.x,
              s = o.y,
              c = o.width,
              f = o.height,
              h = i.slice().sort(function (v, d) {
                return v - d;
              });
            l !== h[0] && h.unshift(0);
            var x = h.map(function (v, d) {
              var _ = h[d + 1] ? h[d + 1] - v : l + c - v;
              if (_ <= 0) return null;
              var p = d % a.length;
              return F(
                "rect",
                {
                  x: Math.round(v + l - l),
                  y: s,
                  width: _,
                  height: f,
                  stroke: "none",
                  fill: a[p],
                  fillOpacity: u,
                  className: "recharts-cartesian-grid-bg",
                },
                "react-".concat(d)
              );
            });
            return F("g", {
              className: "recharts-cartesian-gridstripes-vertical",
              children: x,
            });
          },
        },
        {
          key: "renderHorizontalStripes",
          value: function (i) {
            var a = this.props.horizontalFill;
            if (!a || !a.length) return null;
            var o = this.props,
              u = o.fillOpacity,
              l = o.x,
              s = o.y,
              c = o.width,
              f = o.height,
              h = i.slice().sort(function (v, d) {
                return v - d;
              });
            s !== h[0] && h.unshift(0);
            var x = h.map(function (v, d) {
              var _ = h[d + 1] ? h[d + 1] - v : s + f - v;
              if (_ <= 0) return null;
              var p = d % a.length;
              return F(
                "rect",
                {
                  y: Math.round(v + s - s),
                  x: l,
                  height: _,
                  width: c,
                  stroke: "none",
                  fill: a[p],
                  fillOpacity: u,
                  className: "recharts-cartesian-grid-bg",
                },
                "react-".concat(d)
              );
            });
            return F("g", {
              className: "recharts-cartesian-gridstripes-horizontal",
              children: x,
            });
          },
        },
        {
          key: "renderBackground",
          value: function () {
            var i = this.props.fill;
            if (!i || i === "none") return null;
            var a = this.props,
              o = a.fillOpacity,
              u = a.x,
              l = a.y,
              s = a.width,
              c = a.height;
            return F("rect", {
              x: u,
              y: l,
              width: s,
              height: c,
              stroke: "none",
              fill: i,
              fillOpacity: o,
              className: "recharts-cartesian-grid-bg",
            });
          },
        },
        {
          key: "render",
          value: function () {
            var i = this.props,
              a = i.x,
              o = i.y,
              u = i.width,
              l = i.height,
              s = i.horizontal,
              c = i.vertical,
              f = i.horizontalCoordinatesGenerator,
              h = i.verticalCoordinatesGenerator,
              x = i.xAxis,
              v = i.yAxis,
              d = i.offset,
              _ = i.chartWidth,
              p = i.chartHeight;
            if (
              !q(u) ||
              u <= 0 ||
              !q(l) ||
              l <= 0 ||
              !q(a) ||
              a !== +a ||
              !q(o) ||
              o !== +o
            )
              return null;
            var m = this.props,
              g = m.horizontalPoints,
              y = m.verticalPoints;
            return (
              (!g || !g.length) &&
                te(f) &&
                (g = f({ yAxis: v, width: _, height: p, offset: d })),
              (!y || !y.length) &&
                te(h) &&
                (y = h({ xAxis: x, width: _, height: p, offset: d })),
              Ze("g", {
                className: "recharts-cartesian-grid",
                children: [
                  this.renderBackground(),
                  s && this.renderHorizontal(g),
                  c && this.renderVertical(y),
                  s && this.renderHorizontalStripes(g),
                  c && this.renderVerticalStripes(y),
                ],
              })
            );
          },
        },
      ],
      [
        {
          key: "renderLineItem",
          value: function (i, a) {
            var o;
            if (oe.isValidElement(i)) o = oe.cloneElement(i, a);
            else if (te(i)) o = i(a);
            else {
              var u = a.x1,
                l = a.y1,
                s = a.x2,
                c = a.y2,
                f = a.key,
                h = KU(a, ["x1", "y1", "x2", "y2", "key"]);
              o = V.exports.createElement(
                "line",
                ge(ae({}, me(h)), {
                  x1: u,
                  y1: l,
                  x2: s,
                  y2: c,
                  fill: "none",
                  key: f,
                })
              );
            }
            return o;
          },
        },
      ]
    ),
    r
  );
})(V.exports.PureComponent);
Iv.displayName = "CartesianGrid";
Iv.defaultProps = {
  horizontal: !0,
  vertical: !0,
  horizontalPoints: [],
  verticalPoints: [],
  stroke: "#ccc",
  fill: "none",
  verticalFill: [],
  horizontalFill: [],
};
function vs() {
  return (
    (vs =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    vs.apply(this, arguments)
  );
}
function i9(e, t) {
  return l9(e) || u9(e, t) || o9(e, t) || a9();
}
function a9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function o9(e, t) {
  if (!!e) {
    if (typeof e == "string") return d1(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return d1(e, t);
  }
}
function d1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function u9(e, t) {
  if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (l) {
      (i = !0), (a = l);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function l9(e) {
  if (Array.isArray(e)) return e;
}
function s9(e, t) {
  if (e == null) return {};
  var r = c9(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function c9(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Nv(e) {
  var t = e.offset,
    r = e.layout,
    n = e.width,
    i = e.dataKey,
    a = e.data,
    o = e.dataPointFormatter,
    u = e.xAxis,
    l = e.yAxis,
    s = s9(e, [
      "offset",
      "layout",
      "width",
      "dataKey",
      "data",
      "dataPointFormatter",
      "xAxis",
      "yAxis",
    ]),
    c = me(s),
    f = a.map(function (h, x) {
      var v = o(h, i),
        d = v.x,
        _ = v.y,
        p = v.value,
        m = v.errorVal;
      if (!m) return null;
      var g = [],
        y,
        w;
      if (Array.isArray(m)) {
        var b = i9(m, 2);
        (y = b[0]), (w = b[1]);
      } else y = w = m;
      if (r === "vertical") {
        var S = u.scale,
          O = _ + t,
          A = O + n,
          E = O - n,
          k = S(p - y),
          $ = S(p + w);
        g.push({ x1: $, y1: A, x2: $, y2: E }),
          g.push({ x1: k, y1: O, x2: $, y2: O }),
          g.push({ x1: k, y1: A, x2: k, y2: E });
      } else if (r === "horizontal") {
        var P = l.scale,
          M = d + t,
          D = M - n,
          N = M + n,
          W = P(p - y),
          T = P(p + w);
        g.push({ x1: D, y1: T, x2: N, y2: T }),
          g.push({ x1: M, y1: W, x2: M, y2: T }),
          g.push({ x1: D, y1: W, x2: N, y2: W });
      }
      return oe.createElement(
        $t,
        vs({ className: "recharts-errorBar", key: "bar-".concat(x) }, c),
        g.map(function (R, U) {
          return oe.createElement(
            "line",
            vs({}, R, { key: "line-".concat(U) })
          );
        })
      );
    });
  return oe.createElement($t, { className: "recharts-errorBars" }, f);
}
Nv.defaultProps = {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal",
};
Nv.displayName = "ErrorBar";
function tl(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (tl = function (r) {
          return typeof r;
        })
      : (tl = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    tl(e)
  );
}
function f9(e, t) {
  if (e == null) return {};
  var r = h9(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function h9(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function p1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? p1(Object(r), !0).forEach(function (n) {
          d9(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : p1(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function d9(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function fi(e) {
  return g9(e) || y9(e) || v9(e) || p9();
}
function p9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function v9(e, t) {
  if (!!e) {
    if (typeof e == "string") return Dd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Dd(e, t);
  }
}
function y9(e) {
  if (typeof Symbol != "undefined" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function g9(e) {
  if (Array.isArray(e)) return Dd(e);
}
function Dd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function m9(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function v1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function x9(e, t, r) {
  return t && v1(e.prototype, t), r && v1(e, r), e;
}
function _9(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Ld(e, t);
}
function Ld(e, t) {
  return (
    (Ld =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    Ld(e, t)
  );
}
function w9(e) {
  var t = O9();
  return function () {
    var n = ys(e),
      i;
    if (t) {
      var a = ys(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return b9(this, i);
  };
}
function b9(e, t) {
  return t && (tl(t) === "object" || typeof t == "function") ? t : S9(e);
}
function S9(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function O9() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function ys(e) {
  return (
    (ys = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ys(e)
  );
}
var Ho = (function (e) {
  _9(r, e);
  var t = w9(r);
  function r() {
    var n;
    m9(this, r);
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return (
      (n = t.call.apply(t, [this].concat(a))),
      (n.mainCurve = void 0),
      (n.state = { isAnimationFinished: !0, totalLength: 0 }),
      (n.getStrokeDasharray = function (u, l, s) {
        for (
          var c = s.reduce(function (m, g) {
              return m + g;
            }),
            f = Math.floor(u / c),
            h = u % c,
            x = l - u,
            v = [],
            d = 0,
            _ = 0;
          ;
          _ += s[d], ++d
        )
          if (_ + s[d] > h) {
            v = [].concat(fi(s.slice(0, d)), [h - _]);
            break;
          }
        var p = v.length % 2 === 0 ? [0, x] : [x];
        return []
          .concat(fi(r.repeat(s, f)), fi(v), p)
          .map(function (m) {
            return "".concat(m, "px");
          })
          .join(", ");
      }),
      (n.id = Gs("recharts-line-")),
      (n.pathRef = function (u) {
        n.mainCurve = u;
      }),
      (n.handleAnimationEnd = function () {
        n.setState({ isAnimationFinished: !0 }),
          n.props.onAnimationEnd && n.props.onAnimationEnd();
      }),
      (n.handleAnimationStart = function () {
        n.setState({ isAnimationFinished: !1 }),
          n.props.onAnimationStart && n.props.onAnimationStart();
      }),
      n
    );
  }
  return (
    x9(
      r,
      [
        {
          key: "componentDidMount",
          value: function () {
            if (!!this.props.isAnimationActive) {
              var i = this.getTotalLength();
              this.setState({ totalLength: i });
            }
          },
        },
        {
          key: "getTotalLength",
          value: function () {
            var i = this.mainCurve;
            try {
              return (i && i.getTotalLength && i.getTotalLength()) || 0;
            } catch {
              return 0;
            }
          },
        },
        {
          key: "renderErrorBar",
          value: function () {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished)
              return null;
            var i = this.props,
              a = i.points,
              o = i.xAxis,
              u = i.yAxis,
              l = i.layout,
              s = i.children,
              c = br(s, Nv.displayName);
            if (!c) return null;
            function f(h, x) {
              return {
                x: h.x,
                y: h.y,
                value: h.value,
                errorVal: Er(h.payload, x),
              };
            }
            return c.map(function (h, x) {
              return oe.cloneElement(h, {
                key: "bar-".concat(x),
                data: a,
                xAxis: o,
                yAxis: u,
                layout: l,
                dataPointFormatter: f,
              });
            });
          },
        },
        {
          key: "renderDots",
          value: function (i, a) {
            var o = this.props.isAnimationActive;
            if (o && !this.state.isAnimationFinished) return null;
            var u = this.props,
              l = u.dot,
              s = u.points,
              c = u.dataKey,
              f = me(this.props),
              h = me(l, !0),
              x = s.map(function (d, _) {
                var p = Mt(
                  Mt(Mt({ key: "dot-".concat(_), r: 3 }, f), h),
                  {},
                  {
                    value: d.value,
                    dataKey: c,
                    cx: d.x,
                    cy: d.y,
                    index: _,
                    payload: d.payload,
                  }
                );
                return r.renderDotItem(l, p);
              }),
              v = { clipPath: i ? "url(#clipPath-".concat(a, ")") : null };
            return F(
              $t,
              ge(ae({ className: "recharts-line-dots" }, v), { children: x }),
              "dots"
            );
          },
        },
        {
          key: "renderCurveStatically",
          value: function (i, a, o, u) {
            var l = this.props,
              s = l.type,
              c = l.layout,
              f = l.connectNulls;
            l.ref;
            var h = f9(l, ["type", "layout", "connectNulls", "ref"]),
              x = Mt(
                Mt(
                  Mt({}, me(h, !0)),
                  {},
                  {
                    fill: "none",
                    className: "recharts-line-curve",
                    clipPath: a ? "url(#clipPath-".concat(o, ")") : null,
                    points: i,
                  },
                  u
                ),
                {},
                { type: s, layout: c, connectNulls: f }
              );
            return F(us, ge(ae({}, x), { pathRef: this.pathRef }));
          },
        },
        {
          key: "renderCurveWithAnimation",
          value: function (i, a) {
            var o = this,
              u = this.props,
              l = u.points,
              s = u.strokeDasharray,
              c = u.isAnimationActive,
              f = u.animationBegin,
              h = u.animationDuration,
              x = u.animationEasing,
              v = u.animationId,
              d = u.animateNewValues,
              _ = u.width,
              p = u.height,
              m = this.state,
              g = m.prevPoints,
              y = m.totalLength;
            return F(
              Ki,
              {
                begin: f,
                duration: h,
                isActive: c,
                easing: x,
                from: { t: 0 },
                to: { t: 1 },
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
                children: function (w) {
                  var b = w.t;
                  if (g) {
                    var S = g.length / l.length,
                      O = l.map(function (P, M) {
                        var D = Math.floor(M * S);
                        if (g[D]) {
                          var N = g[D],
                            W = Aa(N.x, P.x),
                            T = Aa(N.y, P.y);
                          return Mt(Mt({}, P), {}, { x: W(b), y: T(b) });
                        }
                        if (d) {
                          var R = Aa(_ * 2, P.x),
                            U = Aa(p / 2, P.y);
                          return Mt(Mt({}, P), {}, { x: R(b), y: U(b) });
                        }
                        return Mt(Mt({}, P), {}, { x: P.x, y: P.y });
                      });
                    return o.renderCurveStatically(O, i, a);
                  }
                  var A = Aa(0, y),
                    E = A(b),
                    k;
                  if (s) {
                    var $ = ""
                      .concat(s)
                      .split(/[,\s]+/gim)
                      .map(function (P) {
                        return parseFloat(P);
                      });
                    k = o.getStrokeDasharray(E, y, $);
                  } else k = "".concat(E, "px ").concat(y - E, "px");
                  return o.renderCurveStatically(l, i, a, {
                    strokeDasharray: k,
                  });
                },
              },
              "line-".concat(v)
            );
          },
        },
        {
          key: "renderCurve",
          value: function (i, a) {
            var o = this.props,
              u = o.points,
              l = o.isAnimationActive,
              s = this.state,
              c = s.prevPoints,
              f = s.totalLength;
            return l && u && u.length && ((!c && f > 0) || !eb(c, u))
              ? this.renderCurveWithAnimation(i, a)
              : this.renderCurveStatically(u, i, a);
          },
        },
        {
          key: "render",
          value: function () {
            var i = this.props,
              a = i.hide,
              o = i.dot,
              u = i.points,
              l = i.className,
              s = i.xAxis,
              c = i.yAxis,
              f = i.top,
              h = i.left,
              x = i.width,
              v = i.height,
              d = i.isAnimationActive,
              _ = i.id;
            if (a || !u || !u.length) return null;
            var p = this.state.isAnimationFinished,
              m = u.length === 1,
              g = Te("recharts-line", l),
              y = (s && s.allowDataOverflow) || (c && c.allowDataOverflow),
              w = Z(_) ? this.id : _;
            return Ze($t, {
              className: g,
              children: [
                y
                  ? F("defs", {
                      children: F("clipPath", {
                        id: "clipPath-".concat(w),
                        children: F("rect", {
                          x: h,
                          y: f,
                          width: x,
                          height: v,
                        }),
                      }),
                    })
                  : null,
                !m && this.renderCurve(y, w),
                this.renderErrorBar(),
                (m || o) && this.renderDots(y, w),
                (!d || p) && vn.renderCallByParent(this.props, u),
              ],
            });
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (i, a) {
            return i.animationId !== a.prevAnimationId
              ? {
                  prevAnimationId: i.animationId,
                  curPoints: i.points,
                  prevPoints: a.curPoints,
                }
              : i.points !== a.curPoints
              ? { curPoints: i.points }
              : null;
          },
        },
        {
          key: "repeat",
          value: function (i, a) {
            for (
              var o = i.length % 2 !== 0 ? [].concat(fi(i), [0]) : i,
                u = [],
                l = 0;
              l < a;
              ++l
            )
              u = [].concat(fi(u), fi(o));
            return u;
          },
        },
        {
          key: "renderDotItem",
          value: function (i, a) {
            var o;
            if (oe.isValidElement(i)) o = oe.cloneElement(i, a);
            else if (te(i)) o = i(a);
            else {
              var u = Te("recharts-line-dot", i ? i.className : "");
              o = F(Pv, ge(ae({}, a), { className: u }));
            }
            return o;
          },
        },
      ]
    ),
    r
  );
})(V.exports.PureComponent);
Ho.displayName = "Line";
Ho.defaultProps = {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: !1,
  activeDot: !0,
  dot: !0,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  fill: "#fff",
  points: [],
  isAnimationActive: !dn.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
};
Ho.getComposedData = function (e) {
  var t = e.props,
    r = e.xAxis,
    n = e.yAxis,
    i = e.xAxisTicks,
    a = e.yAxisTicks,
    o = e.dataKey,
    u = e.bandSize,
    l = e.displayedData,
    s = e.offset,
    c = t.layout,
    f = l.map(function (h, x) {
      var v = Er(h, o);
      return c === "horizontal"
        ? {
            x: T0({ axis: r, ticks: i, bandSize: u, entry: h, index: x }),
            y: Z(v) ? null : n.scale(v),
            value: v,
            payload: h,
          }
        : {
            x: Z(v) ? null : r.scale(v),
            y: T0({ axis: n, ticks: a, bandSize: u, entry: h, index: x }),
            value: v,
            payload: h,
          };
    });
  return Mt({ points: f, layout: c }, s);
};
var gc = function () {
  return null;
};
gc.displayName = "XAxis";
gc.defaultProps = {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  domain: [0, "auto"],
  padding: { left: 0, right: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0,
};
var mc = function () {
  return null;
};
mc.displayName = "YAxis";
mc.defaultProps = {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  domain: [0, "auto"],
  padding: { top: 0, bottom: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
};
var A9 = An,
  k9 = Ro,
  E9 = Ds;
function T9(e) {
  return function (t, r, n) {
    var i = Object(t);
    if (!k9(t)) {
      var a = A9(r);
      (t = E9(t)),
        (r = function (u) {
          return a(i[u], u, i);
        });
    }
    var o = e(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var P9 = T9,
  $9 = cS;
function C9(e) {
  var t = $9(e),
    r = t % 1;
  return t === t ? (r ? t - r : t) : 0;
}
var M9 = C9,
  I9 = ew,
  N9 = An,
  R9 = M9,
  j9 = Math.max;
function D9(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n) return -1;
  var i = r == null ? 0 : R9(r);
  return i < 0 && (i = j9(n + i, 0)), I9(e, N9(t), i);
}
var L9 = D9,
  F9 = P9,
  z9 = L9,
  B9 = F9(z9),
  U9 = B9,
  W9 = Lw,
  H9 = Ht,
  V9 = "Expected a function";
function q9(e, t, r) {
  var n = !0,
    i = !0;
  if (typeof e != "function") throw new TypeError(V9);
  return (
    H9(r) &&
      ((n = "leading" in r ? !!r.leading : n),
      (i = "trailing" in r ? !!r.trailing : i)),
    W9(e, t, { leading: n, maxWait: t, trailing: i })
  );
}
var G9 = q9,
  K9 = Sn,
  X9 = On,
  Y9 = "[object Boolean]";
function Q9(e) {
  return e === !0 || e === !1 || (X9(e) && K9(e) == Y9);
}
var J9 = Q9,
  Fd = function (t, r, n, i, a) {
    var o = br(t, Mv.displayName),
      u = br(t, Uo.displayName),
      l = o.concat(u),
      s = br(t, Wo.displayName),
      c = "".concat(i, "Id"),
      f = i[0],
      h = r;
    if (
      (l.length &&
        (h = l.reduce(function (d, _) {
          if (
            _.props[c] === n &&
            Or(_.props, "extendDomain") &&
            q(_.props[f])
          ) {
            var p = _.props[f];
            return [Math.min(d[0], p), Math.max(d[1], p)];
          }
          return d;
        }, h)),
      s.length)
    ) {
      var x = "".concat(f, "1"),
        v = "".concat(f, "2");
      h = s.reduce(function (d, _) {
        if (
          _.props[c] === n &&
          Or(_.props, "extendDomain") &&
          q(_.props[x]) &&
          q(_.props[v])
        ) {
          var p = _.props[x],
            m = _.props[v];
          return [Math.min(d[0], p, m), Math.max(d[1], p, m)];
        }
        return d;
      }, h);
    }
    return (
      a &&
        a.length &&
        (h = a.reduce(function (d, _) {
          return q(_) ? [Math.min(d[0], _), Math.max(d[1], _)] : d;
        }, h)),
      h
    );
  },
  vS = { exports: {} };
(function (e) {
  var t = Object.prototype.hasOwnProperty,
    r = "~";
  function n() {}
  Object.create &&
    ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
  function i(l, s, c) {
    (this.fn = l), (this.context = s), (this.once = c || !1);
  }
  function a(l, s, c, f, h) {
    if (typeof c != "function")
      throw new TypeError("The listener must be a function");
    var x = new i(c, f || l, h),
      v = r ? r + s : s;
    return (
      l._events[v]
        ? l._events[v].fn
          ? (l._events[v] = [l._events[v], x])
          : l._events[v].push(x)
        : ((l._events[v] = x), l._eventsCount++),
      l
    );
  }
  function o(l, s) {
    --l._eventsCount === 0 ? (l._events = new n()) : delete l._events[s];
  }
  function u() {
    (this._events = new n()), (this._eventsCount = 0);
  }
  (u.prototype.eventNames = function () {
    var s = [],
      c,
      f;
    if (this._eventsCount === 0) return s;
    for (f in (c = this._events)) t.call(c, f) && s.push(r ? f.slice(1) : f);
    return Object.getOwnPropertySymbols
      ? s.concat(Object.getOwnPropertySymbols(c))
      : s;
  }),
    (u.prototype.listeners = function (s) {
      var c = r ? r + s : s,
        f = this._events[c];
      if (!f) return [];
      if (f.fn) return [f.fn];
      for (var h = 0, x = f.length, v = new Array(x); h < x; h++)
        v[h] = f[h].fn;
      return v;
    }),
    (u.prototype.listenerCount = function (s) {
      var c = r ? r + s : s,
        f = this._events[c];
      return f ? (f.fn ? 1 : f.length) : 0;
    }),
    (u.prototype.emit = function (s, c, f, h, x, v) {
      var d = r ? r + s : s;
      if (!this._events[d]) return !1;
      var _ = this._events[d],
        p = arguments.length,
        m,
        g;
      if (_.fn) {
        switch ((_.once && this.removeListener(s, _.fn, void 0, !0), p)) {
          case 1:
            return _.fn.call(_.context), !0;
          case 2:
            return _.fn.call(_.context, c), !0;
          case 3:
            return _.fn.call(_.context, c, f), !0;
          case 4:
            return _.fn.call(_.context, c, f, h), !0;
          case 5:
            return _.fn.call(_.context, c, f, h, x), !0;
          case 6:
            return _.fn.call(_.context, c, f, h, x, v), !0;
        }
        for (g = 1, m = new Array(p - 1); g < p; g++) m[g - 1] = arguments[g];
        _.fn.apply(_.context, m);
      } else {
        var y = _.length,
          w;
        for (g = 0; g < y; g++)
          switch (
            (_[g].once && this.removeListener(s, _[g].fn, void 0, !0), p)
          ) {
            case 1:
              _[g].fn.call(_[g].context);
              break;
            case 2:
              _[g].fn.call(_[g].context, c);
              break;
            case 3:
              _[g].fn.call(_[g].context, c, f);
              break;
            case 4:
              _[g].fn.call(_[g].context, c, f, h);
              break;
            default:
              if (!m)
                for (w = 1, m = new Array(p - 1); w < p; w++)
                  m[w - 1] = arguments[w];
              _[g].fn.apply(_[g].context, m);
          }
      }
      return !0;
    }),
    (u.prototype.on = function (s, c, f) {
      return a(this, s, c, f, !1);
    }),
    (u.prototype.once = function (s, c, f) {
      return a(this, s, c, f, !0);
    }),
    (u.prototype.removeListener = function (s, c, f, h) {
      var x = r ? r + s : s;
      if (!this._events[x]) return this;
      if (!c) return o(this, x), this;
      var v = this._events[x];
      if (v.fn)
        v.fn === c && (!h || v.once) && (!f || v.context === f) && o(this, x);
      else {
        for (var d = 0, _ = [], p = v.length; d < p; d++)
          (v[d].fn !== c || (h && !v[d].once) || (f && v[d].context !== f)) &&
            _.push(v[d]);
        _.length ? (this._events[x] = _.length === 1 ? _[0] : _) : o(this, x);
      }
      return this;
    }),
    (u.prototype.removeAllListeners = function (s) {
      var c;
      return (
        s
          ? ((c = r ? r + s : s), this._events[c] && o(this, c))
          : ((this._events = new n()), (this._eventsCount = 0)),
        this
      );
    }),
    (u.prototype.off = u.prototype.removeListener),
    (u.prototype.addListener = u.prototype.on),
    (u.prefixed = r),
    (u.EventEmitter = u),
    (e.exports = u);
})(vS);
var Z9 = vS.exports,
  It = new Z9();
It.setMaxListeners && It.setMaxListeners(10);
var Ef = "recharts.syncMouseEvents";
function rl(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (rl = function (r) {
          return typeof r;
        })
      : (rl = function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        }),
    rl(e)
  );
}
function y1(e, t) {
  return rW(e) || tW(e, t) || yS(e, t) || eW();
}
function eW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tW(e, t) {
  if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), u;
        !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t));
        n = !0
      );
    } catch (l) {
      (i = !0), (a = l);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function rW(e) {
  if (Array.isArray(e)) return e;
}
function g1(e, t) {
  if (e == null) return {};
  var r = nW(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function nW(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function iW(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function m1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function aW(e, t, r) {
  return t && m1(e.prototype, t), r && m1(e, r), e;
}
function oW(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && zd(e, t);
}
function zd(e, t) {
  return (
    (zd =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    zd(e, t)
  );
}
function uW(e) {
  var t = sW();
  return function () {
    var n = gs(e),
      i;
    if (t) {
      var a = gs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return lW(this, i);
  };
}
function lW(e, t) {
  return t && (rl(t) === "object" || typeof t == "function") ? t : Bd(e);
}
function Bd(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function sW() {
  if (
    typeof Reflect == "undefined" ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function gs(e) {
  return (
    (gs = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    gs(e)
  );
}
function Qi(e) {
  return hW(e) || fW(e) || yS(e) || cW();
}
function cW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yS(e, t) {
  if (!!e) {
    if (typeof e == "string") return Ud(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ud(e, t);
  }
}
function fW(e) {
  if (typeof Symbol != "undefined" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function hW(e) {
  if (Array.isArray(e)) return Ud(e);
}
function Ud(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function x1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? x1(Object(r), !0).forEach(function (n) {
          Rt(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : x1(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Rt(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var dW = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
  gS = { x: 0, y: 0 },
  pW = Number.isFinite ? Number.isFinite : isFinite,
  _1 =
    typeof requestAnimationFrame == "function"
      ? requestAnimationFrame
      : typeof setImmediate == "function"
      ? setImmediate
      : setTimeout,
  w1 =
    typeof cancelAnimationFrame == "function"
      ? cancelAnimationFrame
      : typeof clearImmediate == "function"
      ? clearImmediate
      : clearTimeout,
  vW = function (t, r) {
    return r === "horizontal"
      ? t.x
      : r === "vertical"
      ? t.y
      : r === "centric"
      ? t.angle
      : t.radius;
  },
  yW = function (t, r, n, i) {
    var a = r.find(function (c) {
      return c && c.index === n;
    });
    if (a) {
      if (t === "horizontal") return { x: a.coordinate, y: i.y };
      if (t === "vertical") return { x: i.x, y: a.coordinate };
      if (t === "centric") {
        var o = a.coordinate,
          u = i.radius;
        return I(
          I(I({}, i), lt(i.cx, i.cy, u, o)),
          {},
          { angle: o, radius: u }
        );
      }
      var l = a.coordinate,
        s = i.angle;
      return I(I(I({}, i), lt(i.cx, i.cy, l, s)), {}, { angle: s, radius: l });
    }
    return gS;
  },
  xc = function (t, r, n) {
    var i = r.graphicalItems,
      a = r.dataStartIndex,
      o = r.dataEndIndex,
      u = (i || []).reduce(function (l, s) {
        var c = s.props.data;
        return c && c.length ? [].concat(Qi(l), Qi(c)) : l;
      }, []);
    return u && u.length > 0
      ? u
      : n && n.props && n.props.data && n.props.data.length > 0
      ? n.props.data
      : t && t.length && q(a) && q(o)
      ? t.slice(a, o + 1)
      : [];
  },
  mS = function (t, r, n, i) {
    var a = t.graphicalItems,
      o = t.tooltipAxis,
      u = xc(r, t);
    return n < 0 || !a || !a.length || n >= u.length
      ? null
      : a.reduce(function (l, s) {
          var c = s.props.hide;
          if (c) return l;
          var f = s.props.data,
            h;
          if (o.dataKey && !o.allowDuplicatedCategory) {
            var x = f === void 0 ? u : f;
            h = Ll(x, o.dataKey, i);
          } else h = (f && f[n]) || u[n];
          return h ? [].concat(Qi(l), [u8(s, h)]) : l;
        }, []);
  },
  b1 = function (t, r, n, i) {
    var a = i || { x: t.chartX, y: t.chartY },
      o = vW(a, n),
      u = t.orderedTooltipTicks,
      l = t.tooltipAxis,
      s = t.tooltipTicks,
      c = Vz(o, u, s, l);
    if (c >= 0 && s) {
      var f = s[c] && s[c].value,
        h = mS(t, r, c, f),
        x = yW(n, u, c, a);
      return {
        activeTooltipIndex: c,
        activeLabel: f,
        activePayload: h,
        activeCoordinate: x,
      };
    }
    return null;
  },
  gW = function (t, r) {
    var n = r.axes,
      i = r.graphicalItems,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      l = r.dataStartIndex,
      s = r.dataEndIndex,
      c = t.layout,
      f = t.children,
      h = t.stackOffset,
      x = nS(c, a),
      v = n.reduce(function (d, _) {
        var p = _.props,
          m = p.type,
          g = p.dataKey,
          y = p.allowDataOverflow,
          w = p.allowDuplicatedCategory,
          b = p.scale,
          S = p.ticks,
          O = _.props[o],
          A = xc(t.data, {
            graphicalItems: i.filter(function (T) {
              return T.props[o] === O;
            }),
            dataStartIndex: l,
            dataEndIndex: s,
          }),
          E = A.length;
        if (!d[O]) {
          var k, $, P;
          if (g) {
            if (((k = rs(A, g, m)), m === "category" && x)) {
              var M = oj(k);
              w && M
                ? (($ = k), (k = fs(0, E)))
                : w ||
                  (k = C0(_.props.domain, k, _).reduce(function (T, R) {
                    return T.indexOf(R) >= 0 ? T : [].concat(Qi(T), [R]);
                  }, []));
            } else if (m === "category")
              w
                ? (k = k.filter(function (T) {
                    return T !== "" && !Z(T);
                  }))
                : (k = C0(_.props.domain, k, _).reduce(function (T, R) {
                    return T.indexOf(R) >= 0 || R === "" || Z(R)
                      ? T
                      : [].concat(Qi(T), [R]);
                  }, []));
            else if (m === "number") {
              var D = Xz(
                A,
                i.filter(function (T) {
                  return T.props[o] === O && !T.props.hide;
                }),
                g,
                a
              );
              D && (k = D);
            }
            x && (m === "number" || b !== "auto") && (P = rs(A, g, "category"));
          } else
            x
              ? (k = fs(0, E))
              : u && u[O] && u[O].hasStack && m === "number"
              ? (k = h === "expand" ? [0, 1] : iS(u[O].stackGroups, l, s))
              : (k = rS(
                  A,
                  i.filter(function (T) {
                    return T.props[o] === O && !T.props.hide;
                  }),
                  m,
                  !0
                ));
          if (m === "number")
            (k = Fd(f, k, O, a, S)),
              _.props.domain && (k = aS(_.props.domain, k, y));
          else if (m === "category" && _.props.domain) {
            var N = _.props.domain,
              W = k.every(function (T) {
                return N.indexOf(T) >= 0;
              });
            W && (k = N);
          }
          return I(
            I({}, d),
            {},
            Rt(
              {},
              O,
              I(
                I({}, _.props),
                {},
                {
                  axisType: a,
                  domain: k,
                  categoricalDomain: P,
                  duplicateDomain: $,
                  originalDomain: _.props.domain,
                  isCategorical: x,
                  layout: c,
                }
              )
            )
          );
        }
        return d;
      }, {});
    return v;
  },
  mW = function (t, r) {
    var n = r.graphicalItems,
      i = r.Axis,
      a = r.axisType,
      o = r.axisIdKey,
      u = r.stackGroups,
      l = r.dataStartIndex,
      s = r.dataEndIndex,
      c = t.layout,
      f = t.children,
      h = xc(t.data, { graphicalItems: n, dataStartIndex: l, dataEndIndex: s }),
      x = h.length,
      v = nS(c, a),
      d = -1,
      _ = n.reduce(function (p, m) {
        var g = m.props[o];
        if (!p[g]) {
          d++;
          var y;
          return (
            v
              ? (y = fs(0, x))
              : u && u[g] && u[g].hasStack
              ? ((y = iS(u[g].stackGroups, l, s)), (y = Fd(f, y, g, a)))
              : ((y = aS(
                  i.defaultProps.domain,
                  rS(
                    h,
                    n.filter(function (w) {
                      return w.props[o] === g && !w.props.hide;
                    }),
                    "number"
                  ),
                  i.defaultProps.allowDataOverflow
                )),
                (y = Fd(f, y, g, a))),
            I(
              I({}, p),
              {},
              Rt(
                {},
                g,
                I(
                  I({ axisType: a }, i.defaultProps),
                  {},
                  {
                    hide: !0,
                    orientation: zt(dW, "".concat(a, ".").concat(d % 2), null),
                    domain: y,
                    originalDomain: i.defaultProps.domain,
                    isCategorical: v,
                    layout: c,
                  }
                )
              )
            )
          );
        }
        return p;
      }, {});
    return _;
  },
  xW = function (t, r) {
    var n = r.axisType,
      i = n === void 0 ? "xAxis" : n,
      a = r.AxisComp,
      o = r.graphicalItems,
      u = r.stackGroups,
      l = r.dataStartIndex,
      s = r.dataEndIndex,
      c = t.children,
      f = "".concat(i, "Id"),
      h = br(c, a),
      x = {};
    return (
      h && h.length
        ? (x = gW(t, {
            axes: h,
            graphicalItems: o,
            axisType: i,
            axisIdKey: f,
            stackGroups: u,
            dataStartIndex: l,
            dataEndIndex: s,
          }))
        : o &&
          o.length &&
          (x = mW(t, {
            Axis: a,
            graphicalItems: o,
            axisType: i,
            axisIdKey: f,
            stackGroups: u,
            dataStartIndex: l,
            dataEndIndex: s,
          })),
      x
    );
  },
  _W = function (t) {
    var r = Yr(t),
      n = Qr(r, !1, !0);
    return {
      tooltipTicks: n,
      orderedTooltipTicks: tv(n, function (i) {
        return i.coordinate;
      }),
      tooltipAxis: r,
      tooltipAxisBandSize: ns(r, n),
    };
  },
  S1 = function (t) {
    var r = t.children,
      n = t.defaultShowTooltip,
      i = Dr(r, To.displayName),
      a = (i && i.props && i.props.startIndex) || 0,
      o =
        (i && i.props && i.props.endIndex) ||
        (t.data && t.data.length - 1) ||
        0;
    return {
      chartX: 0,
      chartY: 0,
      dataStartIndex: a,
      dataEndIndex: o,
      activeTooltipIndex: -1,
      isTooltipActive: Z(n) ? !1 : n,
    };
  },
  wW = function (t) {
    return !t || !t.length
      ? !1
      : t.some(function (r) {
          var n = pn(r && r.type);
          return n && n.indexOf("Bar") >= 0;
        });
  },
  O1 = function (t) {
    return t === "horizontal"
      ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
      : t === "vertical"
      ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
      : t === "centric"
      ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
      : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
  },
  bW = function (t, r) {
    var n = t.props,
      i = t.graphicalItems,
      a = t.xAxisMap,
      o = a === void 0 ? {} : a,
      u = t.yAxisMap,
      l = u === void 0 ? {} : u,
      s = n.width,
      c = n.height,
      f = n.children,
      h = n.margin || {},
      x = Dr(f, To.displayName),
      v = Dr(f, Vi.displayName),
      d = Object.keys(l).reduce(
        function (g, y) {
          var w = l[y],
            b = w.orientation;
          return !w.mirror && !w.hide
            ? I(I({}, g), {}, Rt({}, b, g[b] + w.width))
            : g;
        },
        { left: h.left || 0, right: h.right || 0 }
      ),
      _ = Object.keys(o).reduce(
        function (g, y) {
          var w = o[y],
            b = w.orientation;
          return !w.mirror && !w.hide
            ? I(I({}, g), {}, Rt({}, b, zt(g, "".concat(b)) + w.height))
            : g;
        },
        { top: h.top || 0, bottom: h.bottom || 0 }
      ),
      p = I(I({}, _), d),
      m = p.bottom;
    return (
      x && (p.bottom += x.props.height || To.defaultProps.height),
      v && r && (p = Kz(p, i, n, r)),
      I(
        I({ brushBottom: m }, p),
        {},
        { width: s - p.left - p.right, height: c - p.top - p.bottom }
      )
    );
  },
  SW = function (t) {
    var r,
      n,
      i = t.chartName,
      a = t.GraphicalChild,
      o = t.defaultTooltipEventType,
      u = o === void 0 ? "axis" : o,
      l = t.validateTooltipEventTypes,
      s = l === void 0 ? ["axis"] : l,
      c = t.axisComponents,
      f = t.legendContent,
      h = t.formatAxisMap,
      x = t.defaultProps,
      v = function (p, m) {
        var g = m.graphicalItems,
          y = m.stackGroups,
          w = m.offset,
          b = m.updateId,
          S = m.dataStartIndex,
          O = m.dataEndIndex,
          A = p.barSize,
          E = p.layout,
          k = p.barGap,
          $ = p.barCategoryGap,
          P = p.maxBarSize,
          M = O1(E),
          D = M.numericAxisName,
          N = M.cateAxisName,
          W = wW(g),
          T = W && qz({ barSize: A, stackGroups: y }),
          R = [];
        return (
          g.forEach(function (U, Y) {
            var X = xc(p.data, { dataStartIndex: S, dataEndIndex: O }, U),
              le = U.props,
              ce = le.dataKey,
              je = le.maxBarSize,
              Pe = U.props["".concat(D, "Id")],
              yt = U.props["".concat(N, "Id")],
              ne = c.reduce(function (Pn, oi) {
                var ui,
                  qo = m["".concat(oi.axisType, "Map")],
                  Go = U.props["".concat(oi.axisType, "Id")],
                  Ko = qo && qo[Go];
                return I(
                  I({}, Pn),
                  {},
                  ((ui = {}),
                  Rt(ui, oi.axisType, Ko),
                  Rt(ui, "".concat(oi.axisType, "Ticks"), Qr(Ko)),
                  ui)
                );
              }, {}),
              z = ne[N],
              J = ne["".concat(N, "Ticks")],
              ee = y && y[Pe] && y[Pe].hasStack && a8(U, y[Pe].stackGroups),
              j = pn(U.type).indexOf("Bar") >= 0,
              pe = ns(z, J),
              ie = [];
            if (j) {
              var $e,
                ze,
                qt = Z(je) ? P : je,
                $r =
                  ($e =
                    (ze = ns(z, J, !0)) !== null && ze !== void 0 ? ze : qt) !==
                    null && $e !== void 0
                    ? $e
                    : 0;
              (ie = Gz({
                barGap: k,
                barCategoryGap: $,
                bandSize: $r !== pe ? $r : pe,
                sizeList: T[yt],
                maxBarSize: qt,
              })),
                $r !== pe &&
                  (ie = ie.map(function (Pn) {
                    return I(
                      I({}, Pn),
                      {},
                      {
                        position: I(
                          I({}, Pn.position),
                          {},
                          { offset: Pn.position.offset - $r / 2 }
                        ),
                      }
                    );
                  }));
            }
            var Vo = U && U.type && U.type.getComposedData;
            if (Vo) {
              var Tn;
              R.push({
                props: I(
                  I(
                    {},
                    Vo(
                      I(
                        I({}, ne),
                        {},
                        {
                          displayedData: X,
                          props: p,
                          dataKey: ce,
                          item: U,
                          bandSize: pe,
                          barPosition: ie,
                          offset: w,
                          stackedData: ee,
                          layout: E,
                          dataStartIndex: S,
                          dataEndIndex: O,
                        }
                      )
                    )
                  ),
                  {},
                  ((Tn = { key: U.key || "item-".concat(Y) }),
                  Rt(Tn, D, ne[D]),
                  Rt(Tn, N, ne[N]),
                  Rt(Tn, "animationId", b),
                  Tn)
                ),
                childIndex: _5(U, p.children),
                item: U,
              });
            }
          }),
          R
        );
      },
      d = function (p, m) {
        var g = p.props,
          y = p.dataStartIndex,
          w = p.dataEndIndex,
          b = p.updateId;
        if (!Dm({ props: g })) return null;
        var S = g.children,
          O = g.layout,
          A = g.stackOffset,
          E = g.data,
          k = g.reverseStackOrder,
          $ = O1(O),
          P = $.numericAxisName,
          M = $.cateAxisName,
          D = br(S, a),
          N = r8(E, D, "".concat(P, "Id"), "".concat(M, "Id"), A, k),
          W = c.reduce(function (X, le) {
            var ce = "".concat(le.axisType, "Map");
            return I(
              I({}, X),
              {},
              Rt(
                {},
                ce,
                xW(
                  g,
                  I(
                    I({}, le),
                    {},
                    {
                      graphicalItems: D,
                      stackGroups: le.axisType === P && N,
                      dataStartIndex: y,
                      dataEndIndex: w,
                    }
                  )
                )
              )
            );
          }, {}),
          T = bW(
            I(I({}, W), {}, { props: g, graphicalItems: D }),
            m == null ? void 0 : m.legendBBox
          );
        Object.keys(W).forEach(function (X) {
          W[X] = h(g, W[X], T, X.replace("Map", ""), i);
        });
        var R = W["".concat(M, "Map")],
          U = _W(R),
          Y = v(
            g,
            I(
              I({}, W),
              {},
              {
                dataStartIndex: y,
                dataEndIndex: w,
                updateId: b,
                graphicalItems: D,
                stackGroups: N,
                offset: T,
              }
            )
          );
        return I(
          I(
            {
              formattedGraphicalItems: Y,
              graphicalItems: D,
              offset: T,
              stackGroups: N,
            },
            U
          ),
          W
        );
      };
    return (
      (n = r =
        (function (_) {
          oW(m, _);
          var p = uW(m);
          function m(g) {
            var y;
            return (
              iW(this, m),
              (y = p.call(this, g)),
              (y.uniqueChartId = void 0),
              (y.clipPathId = void 0),
              (y.legendInstance = void 0),
              (y.deferId = void 0),
              (y.container = void 0),
              (y.clearDeferId = function () {
                !Z(y.deferId) && w1 && w1(y.deferId), (y.deferId = null);
              }),
              (y.handleLegendBBoxUpdate = function (w) {
                if (w) {
                  var b = y.state,
                    S = b.dataStartIndex,
                    O = b.dataEndIndex,
                    A = b.updateId;
                  y.setState(
                    I(
                      { legendBBox: w },
                      d(
                        {
                          props: y.props,
                          dataStartIndex: S,
                          dataEndIndex: O,
                          updateId: A,
                        },
                        I(I({}, y.state), {}, { legendBBox: w })
                      )
                    )
                  );
                }
              }),
              (y.handleReceiveSyncEvent = function (w, b, S) {
                var O = y.props.syncId;
                O === w &&
                  b !== y.uniqueChartId &&
                  (y.clearDeferId(),
                  (y.deferId = _1 && _1(y.applySyncEvent.bind(Bd(y), S))));
              }),
              (y.handleBrushChange = function (w) {
                var b = w.startIndex,
                  S = w.endIndex;
                if (
                  b !== y.state.dataStartIndex ||
                  S !== y.state.dataEndIndex
                ) {
                  var O = y.state.updateId;
                  y.setState(function () {
                    return I(
                      { dataStartIndex: b, dataEndIndex: S },
                      d(
                        {
                          props: y.props,
                          dataStartIndex: b,
                          dataEndIndex: S,
                          updateId: O,
                        },
                        y.state
                      )
                    );
                  }),
                    y.triggerSyncEvent({ dataStartIndex: b, dataEndIndex: S });
                }
              }),
              (y.handleMouseEnter = function (w) {
                var b = y.props.onMouseEnter,
                  S = y.getMouseInfo(w);
                if (S) {
                  var O = I(I({}, S), {}, { isTooltipActive: !0 });
                  y.setState(O), y.triggerSyncEvent(O), te(b) && b(O, w);
                }
              }),
              (y.triggeredAfterMouseMove = function (w) {
                var b = y.props.onMouseMove,
                  S = y.getMouseInfo(w),
                  O = S
                    ? I(I({}, S), {}, { isTooltipActive: !0 })
                    : { isTooltipActive: !1 };
                y.setState(O), y.triggerSyncEvent(O), te(b) && b(O, w);
              }),
              (y.handleItemMouseEnter = function (w) {
                y.setState(function () {
                  return {
                    isTooltipActive: !0,
                    activeItem: w,
                    activePayload: w.tooltipPayload,
                    activeCoordinate: w.tooltipPosition || { x: w.cx, y: w.cy },
                  };
                });
              }),
              (y.handleItemMouseLeave = function () {
                y.setState(function () {
                  return { isTooltipActive: !1 };
                });
              }),
              (y.handleMouseMove = function (w) {
                w && te(w.persist) && w.persist(), y.triggeredAfterMouseMove(w);
              }),
              (y.handleMouseLeave = function (w) {
                var b = y.props.onMouseLeave,
                  S = { isTooltipActive: !1 };
                y.setState(S),
                  y.triggerSyncEvent(S),
                  te(b) && b(S, w),
                  y.cancelThrottledTriggerAfterMouseMove();
              }),
              (y.handleOuterEvent = function (w) {
                var b = x5(w),
                  S = zt(y.props, "".concat(b));
                if (b && te(S)) {
                  var O;
                  /.*touch.*/i.test(b)
                    ? (O = y.getMouseInfo(w.changedTouches[0]))
                    : (O = y.getMouseInfo(w));
                  var A = S;
                  A(O, w);
                }
              }),
              (y.handleClick = function (w) {
                var b = y.props.onClick,
                  S = y.getMouseInfo(w);
                if (S) {
                  var O = I(I({}, S), {}, { isTooltipActive: !0 });
                  y.setState(O), y.triggerSyncEvent(O), te(b) && b(O, w);
                }
              }),
              (y.handleMouseDown = function (w) {
                var b = y.props.onMouseDown;
                if (te(b)) {
                  var S = y.getMouseInfo(w);
                  b(S, w);
                }
              }),
              (y.handleMouseUp = function (w) {
                var b = y.props.onMouseUp;
                if (te(b)) {
                  var S = y.getMouseInfo(w);
                  b(S, w);
                }
              }),
              (y.handleTouchMove = function (w) {
                w.changedTouches != null &&
                  w.changedTouches.length > 0 &&
                  y.handleMouseMove(w.changedTouches[0]);
              }),
              (y.handleTouchStart = function (w) {
                w.changedTouches != null &&
                  w.changedTouches.length > 0 &&
                  y.handleMouseDown(w.changedTouches[0]);
              }),
              (y.handleTouchEnd = function (w) {
                w.changedTouches != null &&
                  w.changedTouches.length > 0 &&
                  y.handleMouseUp(w.changedTouches[0]);
              }),
              (y.verticalCoordinatesGenerator = function (w) {
                var b = w.xAxis,
                  S = w.width,
                  O = w.height,
                  A = w.offset;
                return k0(
                  Fn.getTicks(
                    I(
                      I(I({}, Fn.defaultProps), b),
                      {},
                      {
                        ticks: Qr(b, !0),
                        viewBox: { x: 0, y: 0, width: S, height: O },
                      }
                    )
                  ),
                  A.left,
                  A.left + A.width
                );
              }),
              (y.horizontalCoordinatesGenerator = function (w) {
                var b = w.yAxis,
                  S = w.width,
                  O = w.height,
                  A = w.offset;
                return k0(
                  Fn.getTicks(
                    I(
                      I(I({}, Fn.defaultProps), b),
                      {},
                      {
                        ticks: Qr(b, !0),
                        viewBox: { x: 0, y: 0, width: S, height: O },
                      }
                    )
                  ),
                  A.top,
                  A.top + A.height
                );
              }),
              (y.axesTicksGenerator = function (w) {
                return Qr(w, !0);
              }),
              (y.renderCursor = function (w) {
                var b = y.state,
                  S = b.isTooltipActive,
                  O = b.activeCoordinate,
                  A = b.activePayload,
                  E = b.offset,
                  k = b.activeTooltipIndex,
                  $ = y.getTooltipEventType();
                if (
                  !w ||
                  !w.props.cursor ||
                  !S ||
                  !O ||
                  (i !== "ScatterChart" && $ !== "axis")
                )
                  return null;
                var P = y.props.layout,
                  M,
                  D = us;
                if (i === "ScatterChart") (M = O), (D = sS);
                else if (i === "BarChart")
                  (M = y.getCursorRectangle()), (D = Tv);
                else if (P === "radial") {
                  var N = y.getCursorPoints(),
                    W = N.cx,
                    T = N.cy,
                    R = N.radius,
                    U = N.startAngle,
                    Y = N.endAngle;
                  (M = {
                    cx: W,
                    cy: T,
                    startAngle: U,
                    endAngle: Y,
                    innerRadius: R,
                    outerRadius: R,
                  }),
                    (D = lS);
                } else (M = { points: y.getCursorPoints() }), (D = us);
                var X = w.key || "_recharts-cursor",
                  le = I(
                    I(
                      I(I({ stroke: "#ccc", pointerEvents: "none" }, E), M),
                      me(w.props.cursor)
                    ),
                    {},
                    {
                      payload: A,
                      payloadIndex: k,
                      key: X,
                      className: "recharts-tooltip-cursor",
                    }
                  );
                return V.exports.isValidElement(w.props.cursor)
                  ? V.exports.cloneElement(w.props.cursor, le)
                  : V.exports.createElement(D, le);
              }),
              (y.renderPolarAxis = function (w, b, S) {
                var O = zt(w, "type.axisType"),
                  A = zt(y.state, "".concat(O, "Map")),
                  E = A[w.props["".concat(O, "Id")]];
                return V.exports.cloneElement(
                  w,
                  I(
                    I({}, E),
                    {},
                    {
                      className: O,
                      key: w.key || "".concat(b, "-").concat(S),
                      ticks: Qr(E, !0),
                    }
                  )
                );
              }),
              (y.renderXAxis = function (w, b, S) {
                var O = y.state.xAxisMap,
                  A = O[w.props.xAxisId];
                return y.renderAxis(A, w, b, S);
              }),
              (y.renderYAxis = function (w, b, S) {
                var O = y.state.yAxisMap,
                  A = O[w.props.yAxisId];
                return y.renderAxis(A, w, b, S);
              }),
              (y.renderGrid = function (w) {
                var b = y.state,
                  S = b.xAxisMap,
                  O = b.yAxisMap,
                  A = b.offset,
                  E = y.props,
                  k = E.width,
                  $ = E.height,
                  P = Yr(S),
                  M = U9(O, function (W) {
                    return hS(W.domain, pW);
                  }),
                  D = M || Yr(O),
                  N = w.props || {};
                return V.exports.cloneElement(w, {
                  key: w.key || "grid",
                  x: q(N.x) ? N.x : A.left,
                  y: q(N.y) ? N.y : A.top,
                  width: q(N.width) ? N.width : A.width,
                  height: q(N.height) ? N.height : A.height,
                  xAxis: P,
                  yAxis: D,
                  offset: A,
                  chartWidth: k,
                  chartHeight: $,
                  verticalCoordinatesGenerator:
                    N.verticalCoordinatesGenerator ||
                    y.verticalCoordinatesGenerator,
                  horizontalCoordinatesGenerator:
                    N.horizontalCoordinatesGenerator ||
                    y.horizontalCoordinatesGenerator,
                });
              }),
              (y.renderPolarGrid = function (w) {
                var b = w.props,
                  S = b.radialLines,
                  O = b.polarAngles,
                  A = b.polarRadius,
                  E = y.state,
                  k = E.radiusAxisMap,
                  $ = E.angleAxisMap,
                  P = Yr(k),
                  M = Yr($),
                  D = M.cx,
                  N = M.cy,
                  W = M.innerRadius,
                  T = M.outerRadius;
                return V.exports.cloneElement(w, {
                  polarAngles: xe(O)
                    ? O
                    : Qr(M, !0).map(function (R) {
                        return R.coordinate;
                      }),
                  polarRadius: xe(A)
                    ? A
                    : Qr(P, !0).map(function (R) {
                        return R.coordinate;
                      }),
                  cx: D,
                  cy: N,
                  innerRadius: W,
                  outerRadius: T,
                  key: w.key || "polar-grid",
                  radialLines: S,
                });
              }),
              (y.renderLegend = function () {
                var w = y.state.formattedGraphicalItems,
                  b = y.props,
                  S = b.children,
                  O = b.width,
                  A = b.height,
                  E = y.props.margin || {},
                  k = O - (E.left || 0) - (E.right || 0),
                  $ = eS({
                    children: S,
                    formattedGraphicalItems: w,
                    legendWidth: k,
                    legendContent: f,
                  });
                if (!$) return null;
                var P = $.item,
                  M = g1($, ["item"]);
                return V.exports.cloneElement(
                  P,
                  I(
                    I({}, M),
                    {},
                    {
                      chartWidth: O,
                      chartHeight: A,
                      margin: E,
                      ref: function (N) {
                        y.legendInstance = N;
                      },
                      onBBoxUpdate: y.handleLegendBBoxUpdate,
                    }
                  )
                );
              }),
              (y.renderTooltip = function () {
                var w = y.props.children,
                  b = Dr(w, Si.displayName);
                if (!b) return null;
                var S = y.state,
                  O = S.isTooltipActive,
                  A = S.activeCoordinate,
                  E = S.activePayload,
                  k = S.activeLabel,
                  $ = S.offset;
                return V.exports.cloneElement(b, {
                  viewBox: I(I({}, $), {}, { x: $.left, y: $.top }),
                  active: O,
                  label: k,
                  payload: O ? E : [],
                  coordinate: A,
                });
              }),
              (y.renderBrush = function (w) {
                var b = y.props,
                  S = b.margin,
                  O = b.data,
                  A = y.state,
                  E = A.offset,
                  k = A.dataStartIndex,
                  $ = A.dataEndIndex,
                  P = A.updateId;
                return V.exports.cloneElement(w, {
                  key: w.key || "_recharts-brush",
                  onChange: Su(y.handleBrushChange, null, w.props.onChange),
                  data: O,
                  x: q(w.props.x) ? w.props.x : E.left,
                  y: q(w.props.y)
                    ? w.props.y
                    : E.top + E.height + E.brushBottom - (S.bottom || 0),
                  width: q(w.props.width) ? w.props.width : E.width,
                  startIndex: k,
                  endIndex: $,
                  updateId: "brush-".concat(P),
                });
              }),
              (y.renderReferenceElement = function (w, b, S) {
                if (!w) return null;
                var O = Bd(y),
                  A = O.clipPathId,
                  E = y.state,
                  k = E.xAxisMap,
                  $ = E.yAxisMap,
                  P = E.offset,
                  M = w.props,
                  D = M.xAxisId,
                  N = M.yAxisId;
                return V.exports.cloneElement(w, {
                  key: w.key || "".concat(b, "-").concat(S),
                  xAxis: k[D],
                  yAxis: $[N],
                  viewBox: {
                    x: P.left,
                    y: P.top,
                    width: P.width,
                    height: P.height,
                  },
                  clipPathId: A,
                });
              }),
              (y.renderActivePoints = function (w) {
                var b = w.item,
                  S = w.activePoint,
                  O = w.basePoint,
                  A = w.childIndex,
                  E = w.isRange,
                  k = [],
                  $ = b.props.key,
                  P = b.item.props,
                  M = P.activeDot,
                  D = P.dataKey,
                  N = I(
                    I(
                      {
                        index: A,
                        dataKey: D,
                        cx: S.x,
                        cy: S.y,
                        r: 4,
                        fill: Ev(b.item),
                        strokeWidth: 2,
                        stroke: "#fff",
                        payload: S.payload,
                        value: S.value,
                        key: "".concat($, "-activePoint-").concat(A),
                      },
                      me(M)
                    ),
                    Tl(M)
                  );
                return (
                  k.push(m.renderActiveDot(M, N)),
                  O
                    ? k.push(
                        m.renderActiveDot(
                          M,
                          I(
                            I({}, N),
                            {},
                            {
                              cx: O.x,
                              cy: O.y,
                              key: "".concat($, "-basePoint-").concat(A),
                            }
                          )
                        )
                      )
                    : E && k.push(null),
                  k
                );
              }),
              (y.renderGraphicChild = function (w, b, S) {
                var O = y.filterFormatItem(w, b, S);
                if (!O) return null;
                var A = y.getTooltipEventType(),
                  E = y.state,
                  k = E.isTooltipActive,
                  $ = E.tooltipAxis,
                  P = E.activeTooltipIndex,
                  M = E.activeLabel,
                  D = y.props.children,
                  N = Dr(D, Si.displayName),
                  W = O.props,
                  T = W.points,
                  R = W.isRange,
                  U = W.baseLine,
                  Y = O.item.props,
                  X = Y.activeDot,
                  le = Y.hide,
                  ce = !le && k && N && X && P >= 0,
                  je = {};
                A !== "axis" && N && N.props.trigger === "click"
                  ? (je = {
                      onClick: Su(
                        y.handleItemMouseEnter,
                        null,
                        w.props.onCLick
                      ),
                    })
                  : A !== "axis" &&
                    (je = {
                      onMouseLeave: Su(
                        y.handleItemMouseLeave,
                        null,
                        w.props.onMouseLeave
                      ),
                      onMouseEnter: Su(
                        y.handleItemMouseEnter,
                        null,
                        w.props.onMouseEnter
                      ),
                    });
                var Pe = V.exports.cloneElement(w, I(I({}, O.props), je));
                function yt(ee) {
                  return typeof $.dataKey == "function"
                    ? $.dataKey(ee.payload)
                    : null;
                }
                if (ce) {
                  var ne, z;
                  if ($.dataKey && !$.allowDuplicatedCategory) {
                    var J =
                      typeof $.dataKey == "function"
                        ? yt
                        : "payload.".concat($.dataKey.toString());
                    (ne = Ll(T, J, M)), (z = R && U && Ll(U, J, M));
                  } else (ne = T[P]), (z = R && U && U[P]);
                  if (!Z(ne))
                    return [Pe].concat(
                      Qi(
                        y.renderActivePoints({
                          item: O,
                          activePoint: ne,
                          basePoint: z,
                          childIndex: P,
                          isRange: R,
                        })
                      )
                    );
                }
                return R ? [Pe, null, null] : [Pe, null];
              }),
              (y.renderCustomized = function (w, b, S) {
                return V.exports.cloneElement(
                  w,
                  I(
                    I({ key: "recharts-customized-".concat(S) }, y.props),
                    y.state
                  )
                );
              }),
              (y.uniqueChartId = Z(g.id) ? Gs("recharts") : g.id),
              (y.clipPathId = "".concat(y.uniqueChartId, "-clip")),
              g.throttleDelay &&
                (y.triggeredAfterMouseMove = G9(
                  y.triggeredAfterMouseMove,
                  g.throttleDelay
                )),
              (y.state = {}),
              y
            );
          }
          return (
            aW(m, [
              {
                key: "componentDidMount",
                value: function () {
                  Z(this.props.syncId) || this.addListener();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (y) {
                  Z(y.syncId) && !Z(this.props.syncId) && this.addListener(),
                    !Z(y.syncId) &&
                      Z(this.props.syncId) &&
                      this.removeListener();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.clearDeferId(),
                    Z(this.props.syncId) || this.removeListener(),
                    this.cancelThrottledTriggerAfterMouseMove();
                },
              },
              {
                key: "cancelThrottledTriggerAfterMouseMove",
                value: function () {
                  typeof this.triggeredAfterMouseMove.cancel == "function" &&
                    this.triggeredAfterMouseMove.cancel();
                },
              },
              {
                key: "getTooltipEventType",
                value: function () {
                  var y = Dr(this.props.children, Si.displayName);
                  if (y && J9(y.props.shared)) {
                    var w = y.props.shared ? "axis" : "item";
                    return s.indexOf(w) >= 0 ? w : u;
                  }
                  return u;
                },
              },
              {
                key: "getMouseInfo",
                value: function (y) {
                  if (!this.container) return null;
                  var w = G4(this.container),
                    b = K4(y, w),
                    S = this.inRange(b.chartX, b.chartY);
                  if (!S) return null;
                  var O = this.state,
                    A = O.xAxisMap,
                    E = O.yAxisMap,
                    k = this.getTooltipEventType();
                  if (k !== "axis" && A && E) {
                    var $ = Yr(A).scale,
                      P = Yr(E).scale,
                      M = $ && $.invert ? $.invert(b.chartX) : null,
                      D = P && P.invert ? P.invert(b.chartY) : null;
                    return I(I({}, b), {}, { xValue: M, yValue: D });
                  }
                  var N = b1(this.state, this.props.data, this.props.layout, S);
                  return N ? I(I({}, b), N) : null;
                },
              },
              {
                key: "getCursorRectangle",
                value: function () {
                  var y = this.props.layout,
                    w = this.state,
                    b = w.activeCoordinate,
                    S = w.offset,
                    O = w.tooltipAxisBandSize,
                    A = O / 2;
                  return {
                    stroke: "none",
                    fill: "#ccc",
                    x: y === "horizontal" ? b.x - A : S.left + 0.5,
                    y: y === "horizontal" ? S.top + 0.5 : b.y - A,
                    width: y === "horizontal" ? O : S.width - 1,
                    height: y === "horizontal" ? S.height - 1 : O,
                  };
                },
              },
              {
                key: "getCursorPoints",
                value: function () {
                  var y = this.props.layout,
                    w = this.state,
                    b = w.activeCoordinate,
                    S = w.offset,
                    O,
                    A,
                    E,
                    k;
                  if (y === "horizontal")
                    (O = b.x), (E = O), (A = S.top), (k = S.top + S.height);
                  else if (y === "vertical")
                    (A = b.y), (k = A), (O = S.left), (E = S.left + S.width);
                  else if (!Z(b.cx) || !Z(b.cy))
                    if (y === "centric") {
                      var $ = b.cx,
                        P = b.cy,
                        M = b.innerRadius,
                        D = b.outerRadius,
                        N = b.angle,
                        W = lt($, P, M, N),
                        T = lt($, P, D, N);
                      (O = W.x), (A = W.y), (E = T.x), (k = T.y);
                    } else {
                      var R = b.cx,
                        U = b.cy,
                        Y = b.radius,
                        X = b.startAngle,
                        le = b.endAngle,
                        ce = lt(R, U, Y, X),
                        je = lt(R, U, Y, le);
                      return {
                        points: [ce, je],
                        cx: R,
                        cy: U,
                        radius: Y,
                        startAngle: X,
                        endAngle: le,
                      };
                    }
                  return [
                    { x: O, y: A },
                    { x: E, y: k },
                  ];
                },
              },
              {
                key: "inRange",
                value: function (y, w) {
                  var b = this.props.layout;
                  if (b === "horizontal" || b === "vertical") {
                    var S = this.state.offset,
                      O =
                        y >= S.left &&
                        y <= S.left + S.width &&
                        w >= S.top &&
                        w <= S.top + S.height;
                    return O ? { x: y, y: w } : null;
                  }
                  var A = this.state,
                    E = A.angleAxisMap,
                    k = A.radiusAxisMap;
                  if (E && k) {
                    var $ = Yr(E);
                    return N0({ x: y, y: w }, $);
                  }
                  return null;
                },
              },
              {
                key: "parseEventsOfWrapper",
                value: function () {
                  var y = this.props.children,
                    w = this.getTooltipEventType(),
                    b = Dr(y, Si.displayName),
                    S = {};
                  b &&
                    w === "axis" &&
                    (b.props.trigger === "click"
                      ? (S = { onClick: this.handleClick })
                      : (S = {
                          onMouseEnter: this.handleMouseEnter,
                          onMouseMove: this.handleMouseMove,
                          onMouseLeave: this.handleMouseLeave,
                          onTouchMove: this.handleTouchMove,
                          onTouchStart: this.handleTouchStart,
                          onTouchEnd: this.handleTouchEnd,
                        }));
                  var O = Tl(this.props, this.handleOuterEvent);
                  return I(I({}, O), S);
                },
              },
              {
                key: "addListener",
                value: function () {
                  It.on(Ef, this.handleReceiveSyncEvent),
                    It.setMaxListeners &&
                      It._maxListeners &&
                      It.setMaxListeners(It._maxListeners + 1);
                },
              },
              {
                key: "removeListener",
                value: function () {
                  It.removeListener(Ef, this.handleReceiveSyncEvent),
                    It.setMaxListeners &&
                      It._maxListeners &&
                      It.setMaxListeners(It._maxListeners - 1);
                },
              },
              {
                key: "triggerSyncEvent",
                value: function (y) {
                  var w = this.props.syncId;
                  Z(w) || It.emit(Ef, w, this.uniqueChartId, y);
                },
              },
              {
                key: "applySyncEvent",
                value: function (y) {
                  var w = this.props,
                    b = w.layout,
                    S = w.syncMethod,
                    O = this.state.updateId,
                    A = y.dataStartIndex,
                    E = y.dataEndIndex;
                  if (!Z(y.dataStartIndex) || !Z(y.dataEndIndex))
                    this.setState(
                      I(
                        { dataStartIndex: A, dataEndIndex: E },
                        d(
                          {
                            props: this.props,
                            dataStartIndex: A,
                            dataEndIndex: E,
                            updateId: O,
                          },
                          this.state
                        )
                      )
                    );
                  else if (Z(y.activeTooltipIndex)) this.setState(y);
                  else {
                    var k = y.chartX,
                      $ = y.chartY,
                      P = y.activeTooltipIndex,
                      M = this.state,
                      D = M.offset,
                      N = M.tooltipTicks;
                    if (!D) return;
                    if (typeof S == "function") P = S(N, y);
                    else if (S === "value") {
                      P = -1;
                      for (var W = 0; W < N.length; W++)
                        if (N[W].value === y.activeLabel) {
                          P = W;
                          break;
                        }
                    }
                    var T = I(I({}, D), {}, { x: D.left, y: D.top }),
                      R = Math.min(k, T.x + T.width),
                      U = Math.min($, T.y + T.height),
                      Y = N[P] && N[P].value,
                      X = mS(this.state, this.props.data, P),
                      le = N[P]
                        ? {
                            x: b === "horizontal" ? N[P].coordinate : R,
                            y: b === "horizontal" ? U : N[P].coordinate,
                          }
                        : gS;
                    this.setState(
                      I(
                        I({}, y),
                        {},
                        {
                          activeLabel: Y,
                          activeCoordinate: le,
                          activePayload: X,
                          activeTooltipIndex: P,
                        }
                      )
                    );
                  }
                },
              },
              {
                key: "filterFormatItem",
                value: function (y, w, b) {
                  for (
                    var S = this.state.formattedGraphicalItems,
                      O = 0,
                      A = S.length;
                    O < A;
                    O++
                  ) {
                    var E = S[O];
                    if (
                      E.item === y ||
                      E.props.key === y.key ||
                      (w === pn(E.item.type) && b === E.childIndex)
                    )
                      return E;
                  }
                  return null;
                },
              },
              {
                key: "renderAxis",
                value: function (y, w, b, S) {
                  var O = this.props,
                    A = O.width,
                    E = O.height;
                  return V.exports.createElement(
                    Fn,
                    ge(ae({}, y), {
                      className: "recharts-"
                        .concat(y.axisType, " ")
                        .concat(y.axisType),
                      key: w.key || "".concat(b, "-").concat(S),
                      viewBox: { x: 0, y: 0, width: A, height: E },
                      ticksGenerator: this.axesTicksGenerator,
                    })
                  );
                },
              },
              {
                key: "renderClipPath",
                value: function () {
                  var y = this.clipPathId,
                    w = this.state.offset,
                    b = w.left,
                    S = w.top,
                    O = w.height,
                    A = w.width;
                  return F("defs", {
                    children: F("clipPath", {
                      id: y,
                      children: F("rect", { x: b, y: S, height: O, width: A }),
                    }),
                  });
                },
              },
              {
                key: "getXScales",
                value: function () {
                  var y = this.state.xAxisMap;
                  return y
                    ? Object.entries(y).reduce(function (w, b) {
                        var S = y1(b, 2),
                          O = S[0],
                          A = S[1];
                        return I(I({}, w), {}, Rt({}, O, A.scale));
                      }, {})
                    : null;
                },
              },
              {
                key: "getYScales",
                value: function () {
                  var y = this.state.yAxisMap;
                  return y
                    ? Object.entries(y).reduce(function (w, b) {
                        var S = y1(b, 2),
                          O = S[0],
                          A = S[1];
                        return I(I({}, w), {}, Rt({}, O, A.scale));
                      }, {})
                    : null;
                },
              },
              {
                key: "getXScaleByAxisId",
                value: function (y) {
                  var w, b;
                  return (w = this.state.xAxisMap) === null ||
                    w === void 0 ||
                    (b = w[y]) === null ||
                    b === void 0
                    ? void 0
                    : b.scale;
                },
              },
              {
                key: "getYScaleByAxisId",
                value: function (y) {
                  var w, b;
                  return (w = this.state.yAxisMap) === null ||
                    w === void 0 ||
                    (b = w[y]) === null ||
                    b === void 0
                    ? void 0
                    : b.scale;
                },
              },
              {
                key: "getItemByXY",
                value: function (y) {
                  var w = this.state.formattedGraphicalItems;
                  if (w && w.length)
                    for (var b = 0, S = w.length; b < S; b++) {
                      var O = w[b],
                        A = O.props,
                        E = O.item,
                        k = pn(E.type);
                      if (k === "Bar") {
                        var $ = (A.data || []).find(function (M) {
                          return hB(y, M);
                        });
                        if ($) return { graphicalItem: O, payload: $ };
                      } else if (k === "RadialBar") {
                        var P = (A.data || []).find(function (M) {
                          return N0(y, M);
                        });
                        if (P) return { graphicalItem: O, payload: P };
                      }
                    }
                  return null;
                },
              },
              {
                key: "render",
                value: function () {
                  var y = this;
                  if (!Dm(this)) return null;
                  var w = this.props,
                    b = w.children,
                    S = w.className,
                    O = w.width,
                    A = w.height,
                    E = w.style,
                    k = w.compact,
                    $ = g1(w, [
                      "children",
                      "className",
                      "width",
                      "height",
                      "style",
                      "compact",
                    ]),
                    P = me($),
                    M = {
                      CartesianGrid: { handler: this.renderGrid, once: !0 },
                      ReferenceArea: { handler: this.renderReferenceElement },
                      ReferenceLine: { handler: this.renderReferenceElement },
                      ReferenceDot: { handler: this.renderReferenceElement },
                      XAxis: { handler: this.renderXAxis },
                      YAxis: { handler: this.renderYAxis },
                      Brush: { handler: this.renderBrush, once: !0 },
                      Bar: { handler: this.renderGraphicChild },
                      Line: { handler: this.renderGraphicChild },
                      Area: { handler: this.renderGraphicChild },
                      Radar: { handler: this.renderGraphicChild },
                      RadialBar: { handler: this.renderGraphicChild },
                      Scatter: { handler: this.renderGraphicChild },
                      Pie: { handler: this.renderGraphicChild },
                      Funnel: { handler: this.renderGraphicChild },
                      Tooltip: { handler: this.renderCursor, once: !0 },
                      PolarGrid: { handler: this.renderPolarGrid, once: !0 },
                      PolarAngleAxis: { handler: this.renderPolarAxis },
                      PolarRadiusAxis: { handler: this.renderPolarAxis },
                      Customized: { handler: this.renderCustomized },
                    };
                  if (k)
                    return Ze(
                      _h,
                      ge(ae({}, P), {
                        width: O,
                        height: A,
                        children: [this.renderClipPath(), Fm(b, M)],
                      })
                    );
                  var D = this.parseEventsOfWrapper();
                  return Ze(
                    "div",
                    ge(
                      ae(
                        {
                          className: Te("recharts-wrapper", S),
                          style: I(
                            {
                              position: "relative",
                              cursor: "default",
                              width: O,
                              height: A,
                            },
                            E
                          ),
                        },
                        D
                      ),
                      {
                        ref: function (W) {
                          y.container = W;
                        },
                        children: [
                          Ze(
                            _h,
                            ge(ae({}, P), {
                              width: O,
                              height: A,
                              children: [this.renderClipPath(), Fm(b, M)],
                            })
                          ),
                          this.renderLegend(),
                          this.renderTooltip(),
                        ],
                      }
                    )
                  );
                },
              },
            ]),
            m
          );
        })(V.exports.Component)),
      (r.displayName = i),
      (r.defaultProps = I(
        {
          layout: "horizontal",
          stackOffset: "none",
          barCategoryGap: "10%",
          barGap: 4,
          margin: { top: 5, right: 5, bottom: 5, left: 5 },
          reverseStackOrder: !1,
          syncMethod: "index",
        },
        x
      )),
      (r.getDerivedStateFromProps = function (_, p) {
        var m = _.data,
          g = _.children,
          y = _.width,
          w = _.height,
          b = _.layout,
          S = _.stackOffset,
          O = _.margin;
        if (Z(p.updateId)) {
          var A = S1(_);
          return I(
            I(
              I({}, A),
              {},
              { updateId: 0 },
              d(I(I({ props: _ }, A), {}, { updateId: 0 }), p)
            ),
            {},
            {
              prevData: m,
              prevWidth: y,
              prevHeight: w,
              prevLayout: b,
              prevStackOffset: S,
              prevMargin: O,
              prevChildren: g,
            }
          );
        }
        if (
          m !== p.prevData ||
          y !== p.prevWidth ||
          w !== p.prevHeight ||
          b !== p.prevLayout ||
          S !== p.prevStackOffset ||
          !xo(O, p.prevMargin)
        ) {
          var E = S1(_),
            k = {
              chartX: p.chartX,
              chartY: p.chartY,
              isTooltipActive: p.isTooltipActive,
            },
            $ = I(I({}, b1(p, m, b)), {}, { updateId: p.updateId + 1 }),
            P = I(I(I({}, E), k), $);
          return I(
            I(I({}, P), d(I({ props: _ }, P), p)),
            {},
            {
              prevData: m,
              prevWidth: y,
              prevHeight: w,
              prevLayout: b,
              prevStackOffset: S,
              prevMargin: O,
              prevChildren: g,
            }
          );
        }
        if (!Zw(g, p.prevChildren)) {
          var M = !Z(m),
            D = M ? p.updateId : p.updateId + 1;
          return I(
            I(
              { updateId: D },
              d(I(I({ props: _ }, p), {}, { updateId: D }), p)
            ),
            {},
            { prevChildren: g }
          );
        }
        return null;
      }),
      (r.renderActiveDot = function (_, p) {
        var m;
        return (
          V.exports.isValidElement(_)
            ? (m = V.exports.cloneElement(_, p))
            : te(_)
            ? (m = _(p))
            : (m = F(Pv, ae({}, p))),
          F($t, { className: "recharts-active-dot", children: m }, p.key)
        );
      }),
      n
    );
  },
  OW = SW({
    chartName: "LineChart",
    GraphicalChild: Ho,
    axisComponents: [
      { axisType: "xAxis", AxisComp: gc },
      { axisType: "yAxis", AxisComp: mc },
    ],
    formatAxisMap: AU,
  });
const AW = ({ chart: e }) => {
    const [t, r] = V.exports.useState(""),
      n = async () => {
        const i = [],
          a = {};
        let o = sessionStorage.getItem("totalPersonsData");
        o ? (o = JSON.parse(o)) : (o = {}),
          await Promise.all(
            e.map(async (l) => {
              const s = l.prefName;
              i.push(s);
              let c;
              return (
                typeof o[s] == "undefined"
                  ? ((c = (await dk(l.prefCode)).result.data[0].data),
                    (o[s] = c))
                  : (c = o[s]),
                c.map((f) => {
                  const h = "" + f.year;
                  typeof a[h] == "undefined" && ((a[h] = {}), (a[h].name = h)),
                    (a[h][s] = "" + f.value);
                }),
                Promise.resolve()
              );
            })
          ),
          sessionStorage.setItem("totalPersonsData", JSON.stringify(o));
        const u = [];
        for (let l in a) u.push(a[l]);
        r(
          F("div", {
            className: "chart-wrapper",
            children: F(y4, {
              children: Ze(OW, {
                width: 600,
                height: 300,
                data: u,
                margin: { top: 80, right: 80, bottom: 20, left: 20 },
                children: [
                  i.map((l, s) => {
                    const f = `hsl(${s * 30},80%,60%)`;
                    return F(
                      Ho,
                      { type: "monotone", dataKey: l, stroke: f },
                      s
                    );
                  }),
                  F(Iv, { stroke: "#ccc", strokeDasharray: "5 5" }),
                  F(gc, {
                    dataKey: "name",
                    label: {
                      value: "\u5E74\u5EA6",
                      position: "right",
                      offset: 30,
                    },
                  }),
                  F(mc, {
                    label: {
                      value: "\u4EBA\u53E3\u6570",
                      position: "top",
                      offset: 10,
                    },
                  }),
                  F(Vi, {}),
                ],
              }),
            }),
          })
        );
      };
    return (
      V.exports.useEffect(() => {
        n();
      }, [e]),
      F("div", { children: t })
    );
  },
  kW = () => {
    const [e, t] = V.exports.useState([
        { prefName: "\u90FD\u9053\u5E9C\u770C", prefCode: 0 },
      ]),
      [r, n] = V.exports.useState([]),
      i = async () => {
        let o = sessionStorage.getItem("prefecturesData");
        if (o) t(JSON.parse(o));
        else {
          const l = (await hk()).result;
          t(l), sessionStorage.setItem("prefecturesData", JSON.stringify(l));
        }
      },
      a = (o, u) => {
        const l = r.findIndex((c) => c.prefCode === o),
          s = [...r];
        l > -1 ? s.splice(l, 1) : s.push({ prefCode: o, prefName: u }), n(s);
      };
    return (
      V.exports.useEffect(() => {
        i();
      }, []),
      Ze("div", {
        className: "",
        children: [
          F("div", {
            className: "pref-container",
            children: e.map((o, u) => {
              const l = `pref_${o.prefCode}`;
              return Ze(
                "div",
                {
                  className: "pref-grid",
                  children: [
                    F("input", {
                      type: "checkbox",
                      value: o.prefCode,
                      id: l,
                      onClick: () => a(o.prefCode, o.prefName),
                    }),
                    F("label", { htmlFor: l, children: o.prefName }),
                  ],
                },
                u
              );
            }),
          }),
          Ze("div", {
            className: "chart-container",
            children: [F(AW, { chart: r }), ";"],
          }),
        ],
      })
    );
  };
function EW() {
  return (
    V.exports.useState(0),
    Ze("div", {
      className: "App",
      children: [
        F("header", { children: "Title" }),
        F("h1", { children: "\u90FD\u9053\u5E9C\u770C" }),
        F(kW, {}),
      ],
    })
  );
}
Tf.createRoot(document.getElementById("root")).render(
  F(oe.StrictMode, { children: F(EW, {}) })
);
