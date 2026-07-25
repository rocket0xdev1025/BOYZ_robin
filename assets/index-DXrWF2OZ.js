(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) i(l);
  new MutationObserver((l) => {
    for (const c of l)
      if (c.type === "childList")
        for (const f of c.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && i(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(l) {
    const c = {};
    return (
      l.integrity && (c.integrity = l.integrity),
      l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (c.credentials = "omit")
        : (c.credentials = "same-origin"),
      c
    );
  }
  function i(l) {
    if (l.ep) return;
    l.ep = !0;
    const c = r(l);
    fetch(l.href, c);
  }
})();
var zh = { exports: {} },
  ho = {};
var bx;
function wS() {
  if (bx) return ho;
  bx = 1;
  var s = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.fragment");
  function r(i, l, c) {
    var f = null;
    if (
      (c !== void 0 && (f = "" + c),
      l.key !== void 0 && (f = "" + l.key),
      "key" in l)
    ) {
      c = {};
      for (var h in l) h !== "key" && (c[h] = l[h]);
    } else c = l;
    return (
      (l = c.ref),
      { $$typeof: s, type: i, key: f, ref: l !== void 0 ? l : null, props: c }
    );
  }
  return (ho.Fragment = n), (ho.jsx = r), (ho.jsxs = r), ho;
}
var _x;
function TS() {
  return _x || ((_x = 1), (zh.exports = wS())), zh.exports;
}
var y = TS(),
  jh = { exports: {} },
  je = {};
var Sx;
function ES() {
  if (Sx) return je;
  Sx = 1;
  var s = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    v = Symbol.for("react.activity"),
    b = Symbol.iterator;
  function _(O) {
    return O === null || typeof O != "object"
      ? null
      : ((O = (b && O[b]) || O["@@iterator"]),
        typeof O == "function" ? O : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = Object.assign,
    E = {};
  function C(O, K, ne) {
    (this.props = O),
      (this.context = K),
      (this.refs = E),
      (this.updater = ne || w);
  }
  (C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (O, K) {
      if (typeof O != "object" && typeof O != "function" && O != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, O, K, "setState");
    }),
    (C.prototype.forceUpdate = function (O) {
      this.updater.enqueueForceUpdate(this, O, "forceUpdate");
    });
  function A() {}
  A.prototype = C.prototype;
  function R(O, K, ne) {
    (this.props = O),
      (this.context = K),
      (this.refs = E),
      (this.updater = ne || w);
  }
  var D = (R.prototype = new A());
  (D.constructor = R), S(D, C.prototype), (D.isPureReactComponent = !0);
  var H = Array.isArray;
  function G() {}
  var z = { H: null, A: null, T: null, S: null },
    L = Object.prototype.hasOwnProperty;
  function X(O, K, ne) {
    var ee = ne.ref;
    return {
      $$typeof: s,
      type: O,
      key: K,
      ref: ee !== void 0 ? ee : null,
      props: ne,
    };
  }
  function F(O, K) {
    return X(O.type, K, O.props);
  }
  function le(O) {
    return typeof O == "object" && O !== null && O.$$typeof === s;
  }
  function I(O) {
    var K = { "=": "=0", ":": "=2" };
    return (
      "$" +
      O.replace(/[=:]/g, function (ne) {
        return K[ne];
      })
    );
  }
  var xe = /\/+/g;
  function de(O, K) {
    return typeof O == "object" && O !== null && O.key != null
      ? I("" + O.key)
      : K.toString(36);
  }
  function ce(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (
          (typeof O.status == "string"
            ? O.then(G, G)
            : ((O.status = "pending"),
              O.then(
                function (K) {
                  O.status === "pending" &&
                    ((O.status = "fulfilled"), (O.value = K));
                },
                function (K) {
                  O.status === "pending" &&
                    ((O.status = "rejected"), (O.reason = K));
                }
              )),
          O.status)
        ) {
          case "fulfilled":
            return O.value;
          case "rejected":
            throw O.reason;
        }
    }
    throw O;
  }
  function U(O, K, ne, ee, se) {
    var oe = typeof O;
    (oe === "undefined" || oe === "boolean") && (O = null);
    var ue = !1;
    if (O === null) ue = !0;
    else
      switch (oe) {
        case "bigint":
        case "string":
        case "number":
          ue = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case s:
            case n:
              ue = !0;
              break;
            case g:
              return (ue = O._init), U(ue(O._payload), K, ne, ee, se);
          }
      }
    if (ue)
      return (
        (se = se(O)),
        (ue = ee === "" ? "." + de(O, 0) : ee),
        H(se)
          ? ((ne = ""),
            ue != null && (ne = ue.replace(xe, "$&/") + "/"),
            U(se, K, ne, "", function (Ce) {
              return Ce;
            }))
          : se != null &&
            (le(se) &&
              (se = F(
                se,
                ne +
                  (se.key == null || (O && O.key === se.key)
                    ? ""
                    : ("" + se.key).replace(xe, "$&/") + "/") +
                  ue
              )),
            K.push(se)),
        1
      );
    ue = 0;
    var ae = ee === "" ? "." : ee + ":";
    if (H(O))
      for (var ie = 0; ie < O.length; ie++)
        (ee = O[ie]), (oe = ae + de(ee, ie)), (ue += U(ee, K, ne, oe, se));
    else if (((ie = _(O)), typeof ie == "function"))
      for (O = ie.call(O), ie = 0; !(ee = O.next()).done; )
        (ee = ee.value), (oe = ae + de(ee, ie++)), (ue += U(ee, K, ne, oe, se));
    else if (oe === "object") {
      if (typeof O.then == "function") return U(ce(O), K, ne, ee, se);
      throw (
        ((K = String(O)),
        Error(
          "Objects are not valid as a React child (found: " +
            (K === "[object Object]"
              ? "object with keys {" + Object.keys(O).join(", ") + "}"
              : K) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return ue;
  }
  function Q(O, K, ne) {
    if (O == null) return O;
    var ee = [],
      se = 0;
    return (
      U(O, ee, "", "", function (oe) {
        return K.call(ne, oe, se++);
      }),
      ee
    );
  }
  function te(O) {
    if (O._status === -1) {
      var K = O._result;
      (K = K()),
        K.then(
          function (ne) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 1), (O._result = ne));
          },
          function (ne) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 2), (O._result = ne));
          }
        ),
        O._status === -1 && ((O._status = 0), (O._result = K));
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var he =
      typeof reportError == "function"
        ? reportError
        : function (O) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var K = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof O == "object" &&
                  O !== null &&
                  typeof O.message == "string"
                    ? String(O.message)
                    : String(O),
                error: O,
              });
              if (!window.dispatchEvent(K)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", O);
              return;
            }
            console.error(O);
          },
    N = {
      map: Q,
      forEach: function (O, K, ne) {
        Q(
          O,
          function () {
            K.apply(this, arguments);
          },
          ne
        );
      },
      count: function (O) {
        var K = 0;
        return (
          Q(O, function () {
            K++;
          }),
          K
        );
      },
      toArray: function (O) {
        return (
          Q(O, function (K) {
            return K;
          }) || []
        );
      },
      only: function (O) {
        if (!le(O))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return O;
      },
    };
  return (
    (je.Activity = v),
    (je.Children = N),
    (je.Component = C),
    (je.Fragment = r),
    (je.Profiler = l),
    (je.PureComponent = R),
    (je.StrictMode = i),
    (je.Suspense = p),
    (je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = z),
    (je.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (O) {
        return z.H.useMemoCache(O);
      },
    }),
    (je.cache = function (O) {
      return function () {
        return O.apply(null, arguments);
      };
    }),
    (je.cacheSignal = function () {
      return null;
    }),
    (je.cloneElement = function (O, K, ne) {
      if (O == null)
        throw Error(
          "The argument must be a React element, but you passed " + O + "."
        );
      var ee = S({}, O.props),
        se = O.key;
      if (K != null)
        for (oe in (K.key !== void 0 && (se = "" + K.key), K))
          !L.call(K, oe) ||
            oe === "key" ||
            oe === "__self" ||
            oe === "__source" ||
            (oe === "ref" && K.ref === void 0) ||
            (ee[oe] = K[oe]);
      var oe = arguments.length - 2;
      if (oe === 1) ee.children = ne;
      else if (1 < oe) {
        for (var ue = Array(oe), ae = 0; ae < oe; ae++)
          ue[ae] = arguments[ae + 2];
        ee.children = ue;
      }
      return X(O.type, se, ee);
    }),
    (je.createContext = function (O) {
      return (
        (O = {
          $$typeof: f,
          _currentValue: O,
          _currentValue2: O,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (O.Provider = O),
        (O.Consumer = { $$typeof: c, _context: O }),
        O
      );
    }),
    (je.createElement = function (O, K, ne) {
      var ee,
        se = {},
        oe = null;
      if (K != null)
        for (ee in (K.key !== void 0 && (oe = "" + K.key), K))
          L.call(K, ee) &&
            ee !== "key" &&
            ee !== "__self" &&
            ee !== "__source" &&
            (se[ee] = K[ee]);
      var ue = arguments.length - 2;
      if (ue === 1) se.children = ne;
      else if (1 < ue) {
        for (var ae = Array(ue), ie = 0; ie < ue; ie++)
          ae[ie] = arguments[ie + 2];
        se.children = ae;
      }
      if (O && O.defaultProps)
        for (ee in ((ue = O.defaultProps), ue))
          se[ee] === void 0 && (se[ee] = ue[ee]);
      return X(O, oe, se);
    }),
    (je.createRef = function () {
      return { current: null };
    }),
    (je.forwardRef = function (O) {
      return { $$typeof: h, render: O };
    }),
    (je.isValidElement = le),
    (je.lazy = function (O) {
      return { $$typeof: g, _payload: { _status: -1, _result: O }, _init: te };
    }),
    (je.memo = function (O, K) {
      return { $$typeof: m, type: O, compare: K === void 0 ? null : K };
    }),
    (je.startTransition = function (O) {
      var K = z.T,
        ne = {};
      z.T = ne;
      try {
        var ee = O(),
          se = z.S;
        se !== null && se(ne, ee),
          typeof ee == "object" &&
            ee !== null &&
            typeof ee.then == "function" &&
            ee.then(G, he);
      } catch (oe) {
        he(oe);
      } finally {
        K !== null && ne.types !== null && (K.types = ne.types), (z.T = K);
      }
    }),
    (je.unstable_useCacheRefresh = function () {
      return z.H.useCacheRefresh();
    }),
    (je.use = function (O) {
      return z.H.use(O);
    }),
    (je.useActionState = function (O, K, ne) {
      return z.H.useActionState(O, K, ne);
    }),
    (je.useCallback = function (O, K) {
      return z.H.useCallback(O, K);
    }),
    (je.useContext = function (O) {
      return z.H.useContext(O);
    }),
    (je.useDebugValue = function () {}),
    (je.useDeferredValue = function (O, K) {
      return z.H.useDeferredValue(O, K);
    }),
    (je.useEffect = function (O, K) {
      return z.H.useEffect(O, K);
    }),
    (je.useEffectEvent = function (O) {
      return z.H.useEffectEvent(O);
    }),
    (je.useId = function () {
      return z.H.useId();
    }),
    (je.useImperativeHandle = function (O, K, ne) {
      return z.H.useImperativeHandle(O, K, ne);
    }),
    (je.useInsertionEffect = function (O, K) {
      return z.H.useInsertionEffect(O, K);
    }),
    (je.useLayoutEffect = function (O, K) {
      return z.H.useLayoutEffect(O, K);
    }),
    (je.useMemo = function (O, K) {
      return z.H.useMemo(O, K);
    }),
    (je.useOptimistic = function (O, K) {
      return z.H.useOptimistic(O, K);
    }),
    (je.useReducer = function (O, K, ne) {
      return z.H.useReducer(O, K, ne);
    }),
    (je.useRef = function (O) {
      return z.H.useRef(O);
    }),
    (je.useState = function (O) {
      return z.H.useState(O);
    }),
    (je.useSyncExternalStore = function (O, K, ne) {
      return z.H.useSyncExternalStore(O, K, ne);
    }),
    (je.useTransition = function () {
      return z.H.useTransition();
    }),
    (je.version = "19.2.7"),
    je
  );
}
var wx;
function jp() {
  return wx || ((wx = 1), (jh.exports = ES())), jh.exports;
}
var j = jp(),
  Dh = { exports: {} },
  po = {},
  kh = { exports: {} },
  Lh = {};
var Tx;
function CS() {
  return (
    Tx ||
      ((Tx = 1),
      (function (s) {
        function n(U, Q) {
          var te = U.length;
          U.push(Q);
          e: for (; 0 < te; ) {
            var he = (te - 1) >>> 1,
              N = U[he];
            if (0 < l(N, Q)) (U[he] = Q), (U[te] = N), (te = he);
            else break e;
          }
        }
        function r(U) {
          return U.length === 0 ? null : U[0];
        }
        function i(U) {
          if (U.length === 0) return null;
          var Q = U[0],
            te = U.pop();
          if (te !== Q) {
            U[0] = te;
            e: for (var he = 0, N = U.length, O = N >>> 1; he < O; ) {
              var K = 2 * (he + 1) - 1,
                ne = U[K],
                ee = K + 1,
                se = U[ee];
              if (0 > l(ne, te))
                ee < N && 0 > l(se, ne)
                  ? ((U[he] = se), (U[ee] = te), (he = ee))
                  : ((U[he] = ne), (U[K] = te), (he = K));
              else if (ee < N && 0 > l(se, te))
                (U[he] = se), (U[ee] = te), (he = ee);
              else break e;
            }
          }
          return Q;
        }
        function l(U, Q) {
          var te = U.sortIndex - Q.sortIndex;
          return te !== 0 ? te : U.id - Q.id;
        }
        if (
          ((s.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var c = performance;
          s.unstable_now = function () {
            return c.now();
          };
        } else {
          var f = Date,
            h = f.now();
          s.unstable_now = function () {
            return f.now() - h;
          };
        }
        var p = [],
          m = [],
          g = 1,
          v = null,
          b = 3,
          _ = !1,
          w = !1,
          S = !1,
          E = !1,
          C = typeof setTimeout == "function" ? setTimeout : null,
          A = typeof clearTimeout == "function" ? clearTimeout : null,
          R = typeof setImmediate < "u" ? setImmediate : null;
        function D(U) {
          for (var Q = r(m); Q !== null; ) {
            if (Q.callback === null) i(m);
            else if (Q.startTime <= U)
              i(m), (Q.sortIndex = Q.expirationTime), n(p, Q);
            else break;
            Q = r(m);
          }
        }
        function H(U) {
          if (((S = !1), D(U), !w))
            if (r(p) !== null) (w = !0), G || ((G = !0), I());
            else {
              var Q = r(m);
              Q !== null && ce(H, Q.startTime - U);
            }
        }
        var G = !1,
          z = -1,
          L = 5,
          X = -1;
        function F() {
          return E ? !0 : !(s.unstable_now() - X < L);
        }
        function le() {
          if (((E = !1), G)) {
            var U = s.unstable_now();
            X = U;
            var Q = !0;
            try {
              e: {
                (w = !1), S && ((S = !1), A(z), (z = -1)), (_ = !0);
                var te = b;
                try {
                  t: {
                    for (
                      D(U), v = r(p);
                      v !== null && !(v.expirationTime > U && F());

                    ) {
                      var he = v.callback;
                      if (typeof he == "function") {
                        (v.callback = null), (b = v.priorityLevel);
                        var N = he(v.expirationTime <= U);
                        if (((U = s.unstable_now()), typeof N == "function")) {
                          (v.callback = N), D(U), (Q = !0);
                          break t;
                        }
                        v === r(p) && i(p), D(U);
                      } else i(p);
                      v = r(p);
                    }
                    if (v !== null) Q = !0;
                    else {
                      var O = r(m);
                      O !== null && ce(H, O.startTime - U), (Q = !1);
                    }
                  }
                  break e;
                } finally {
                  (v = null), (b = te), (_ = !1);
                }
                Q = void 0;
              }
            } finally {
              Q ? I() : (G = !1);
            }
          }
        }
        var I;
        if (typeof R == "function")
          I = function () {
            R(le);
          };
        else if (typeof MessageChannel < "u") {
          var xe = new MessageChannel(),
            de = xe.port2;
          (xe.port1.onmessage = le),
            (I = function () {
              de.postMessage(null);
            });
        } else
          I = function () {
            C(le, 0);
          };
        function ce(U, Q) {
          z = C(function () {
            U(s.unstable_now());
          }, Q);
        }
        (s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (U) {
            U.callback = null;
          }),
          (s.unstable_forceFrameRate = function (U) {
            0 > U || 125 < U
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (L = 0 < U ? Math.floor(1e3 / U) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (s.unstable_next = function (U) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = b;
            }
            var te = b;
            b = Q;
            try {
              return U();
            } finally {
              b = te;
            }
          }),
          (s.unstable_requestPaint = function () {
            E = !0;
          }),
          (s.unstable_runWithPriority = function (U, Q) {
            switch (U) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                U = 3;
            }
            var te = b;
            b = U;
            try {
              return Q();
            } finally {
              b = te;
            }
          }),
          (s.unstable_scheduleCallback = function (U, Q, te) {
            var he = s.unstable_now();
            switch (
              (typeof te == "object" && te !== null
                ? ((te = te.delay),
                  (te = typeof te == "number" && 0 < te ? he + te : he))
                : (te = he),
              U)
            ) {
              case 1:
                var N = -1;
                break;
              case 2:
                N = 250;
                break;
              case 5:
                N = 1073741823;
                break;
              case 4:
                N = 1e4;
                break;
              default:
                N = 5e3;
            }
            return (
              (N = te + N),
              (U = {
                id: g++,
                callback: Q,
                priorityLevel: U,
                startTime: te,
                expirationTime: N,
                sortIndex: -1,
              }),
              te > he
                ? ((U.sortIndex = te),
                  n(m, U),
                  r(p) === null &&
                    U === r(m) &&
                    (S ? (A(z), (z = -1)) : (S = !0), ce(H, te - he)))
                : ((U.sortIndex = N),
                  n(p, U),
                  w || _ || ((w = !0), G || ((G = !0), I()))),
              U
            );
          }),
          (s.unstable_shouldYield = F),
          (s.unstable_wrapCallback = function (U) {
            var Q = b;
            return function () {
              var te = b;
              b = Q;
              try {
                return U.apply(this, arguments);
              } finally {
                b = te;
              }
            };
          });
      })(Lh)),
    Lh
  );
}
var Ex;
function AS() {
  return Ex || ((Ex = 1), (kh.exports = CS())), kh.exports;
}
var Hh = { exports: {} },
  Sn = {};
var Cx;
function NS() {
  if (Cx) return Sn;
  Cx = 1;
  var s = jp();
  function n(p) {
    var m = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        m += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var i = {
      d: {
        f: r,
        r: function () {
          throw Error(n(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    l = Symbol.for("react.portal");
  function c(p, m, g) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: v == null ? null : "" + v,
      children: p,
      containerInfo: m,
      implementation: g,
    };
  }
  var f = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, m) {
    if (p === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (Sn.createPortal = function (p, m) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(n(299));
      return c(p, m, null, g);
    }),
    (Sn.flushSync = function (p) {
      var m = f.T,
        g = i.p;
      try {
        if (((f.T = null), (i.p = 2), p)) return p();
      } finally {
        (f.T = m), (i.p = g), i.d.f();
      }
    }),
    (Sn.preconnect = function (p, m) {
      typeof p == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        i.d.C(p, m));
    }),
    (Sn.prefetchDNS = function (p) {
      typeof p == "string" && i.d.D(p);
    }),
    (Sn.preinit = function (p, m) {
      if (typeof p == "string" && m && typeof m.as == "string") {
        var g = m.as,
          v = h(g, m.crossOrigin),
          b = typeof m.integrity == "string" ? m.integrity : void 0,
          _ = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        g === "style"
          ? i.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: v,
              integrity: b,
              fetchPriority: _,
            })
          : g === "script" &&
            i.d.X(p, {
              crossOrigin: v,
              integrity: b,
              fetchPriority: _,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (Sn.preinitModule = function (p, m) {
      if (typeof p == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var g = h(m.as, m.crossOrigin);
            i.d.M(p, {
              crossOrigin: g,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && i.d.M(p);
    }),
    (Sn.preload = function (p, m) {
      if (
        typeof p == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var g = m.as,
          v = h(g, m.crossOrigin);
        i.d.L(p, g, {
          crossOrigin: v,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (Sn.preloadModule = function (p, m) {
      if (typeof p == "string")
        if (m) {
          var g = h(m.as, m.crossOrigin);
          i.d.m(p, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: g,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else i.d.m(p);
    }),
    (Sn.requestFormReset = function (p) {
      i.d.r(p);
    }),
    (Sn.unstable_batchedUpdates = function (p, m) {
      return p(m);
    }),
    (Sn.useFormState = function (p, m, g) {
      return f.H.useFormState(p, m, g);
    }),
    (Sn.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (Sn.version = "19.2.7"),
    Sn
  );
}
var Ax;
function RS() {
  if (Ax) return Hh.exports;
  Ax = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (n) {
        console.error(n);
      }
  }
  return s(), (Hh.exports = NS()), Hh.exports;
}
var Nx;
function OS() {
  if (Nx) return po;
  Nx = 1;
  var s = AS(),
    n = jp(),
    r = RS();
  function i(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function c(e) {
    var t = e,
      a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function f(e) {
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
  function h(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (c(e) !== e) throw Error(i(188));
  }
  function m(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = c(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var a = e, o = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var d = u.alternate;
      if (d === null) {
        if (((o = u.return), o !== null)) {
          a = o;
          continue;
        }
        break;
      }
      if (u.child === d.child) {
        for (d = u.child; d; ) {
          if (d === a) return p(u), e;
          if (d === o) return p(u), t;
          d = d.sibling;
        }
        throw Error(i(188));
      }
      if (a.return !== o.return) (a = u), (o = d);
      else {
        for (var x = !1, T = u.child; T; ) {
          if (T === a) {
            (x = !0), (a = u), (o = d);
            break;
          }
          if (T === o) {
            (x = !0), (o = u), (a = d);
            break;
          }
          T = T.sibling;
        }
        if (!x) {
          for (T = d.child; T; ) {
            if (T === a) {
              (x = !0), (a = d), (o = u);
              break;
            }
            if (T === o) {
              (x = !0), (o = d), (a = u);
              break;
            }
            T = T.sibling;
          }
          if (!x) throw Error(i(189));
        }
      }
      if (a.alternate !== o) throw Error(i(190));
    }
    if (a.tag !== 3) throw Error(i(188));
    return a.stateNode.current === a ? e : t;
  }
  function g(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = g(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign,
    b = Symbol.for("react.element"),
    _ = Symbol.for("react.transitional.element"),
    w = Symbol.for("react.portal"),
    S = Symbol.for("react.fragment"),
    E = Symbol.for("react.strict_mode"),
    C = Symbol.for("react.profiler"),
    A = Symbol.for("react.consumer"),
    R = Symbol.for("react.context"),
    D = Symbol.for("react.forward_ref"),
    H = Symbol.for("react.suspense"),
    G = Symbol.for("react.suspense_list"),
    z = Symbol.for("react.memo"),
    L = Symbol.for("react.lazy"),
    X = Symbol.for("react.activity"),
    F = Symbol.for("react.memo_cache_sentinel"),
    le = Symbol.iterator;
  function I(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (le && e[le]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var xe = Symbol.for("react.client.reference");
  function de(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === xe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case S:
        return "Fragment";
      case C:
        return "Profiler";
      case E:
        return "StrictMode";
      case H:
        return "Suspense";
      case G:
        return "SuspenseList";
      case X:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case w:
          return "Portal";
        case R:
          return e.displayName || "Context";
        case A:
          return (e._context.displayName || "Context") + ".Consumer";
        case D:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case z:
          return (
            (t = e.displayName || null), t !== null ? t : de(e.type) || "Memo"
          );
        case L:
          (t = e._payload), (e = e._init);
          try {
            return de(e(t));
          } catch {}
      }
    return null;
  }
  var ce = Array.isArray,
    U = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    te = { pending: !1, data: null, method: null, action: null },
    he = [],
    N = -1;
  function O(e) {
    return { current: e };
  }
  function K(e) {
    0 > N || ((e.current = he[N]), (he[N] = null), N--);
  }
  function ne(e, t) {
    N++, (he[N] = e.current), (e.current = t);
  }
  var ee = O(null),
    se = O(null),
    oe = O(null),
    ue = O(null);
  function ae(e, t) {
    switch ((ne(oe, t), ne(se, e), ne(ee, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? X1(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = X1(t)), (e = V1(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    K(ee), ne(ee, e);
  }
  function ie() {
    K(ee), K(se), K(oe);
  }
  function Ce(e) {
    e.memoizedState !== null && ne(ue, e);
    var t = ee.current,
      a = V1(t, e.type);
    t !== a && (ne(se, e), ne(ee, a));
  }
  function be(e) {
    se.current === e && (K(ee), K(se)),
      ue.current === e && (K(ue), (oo._currentValue = te));
  }
  var re, pe;
  function Se(e) {
    if (re === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        (re = (t && t[1]) || ""),
          (pe =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      re +
      e +
      pe
    );
  }
  var We = !1;
  function ot(e, t) {
    if (!e || We) return "";
    We = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var $ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty($.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct($, []);
                } catch (P) {
                  var V = P;
                }
                Reflect.construct(e, [], $);
              } else {
                try {
                  $.call();
                } catch (P) {
                  V = P;
                }
                e.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (P) {
                V = P;
              }
              ($ = e()) &&
                typeof $.catch == "function" &&
                $.catch(function () {});
            }
          } catch (P) {
            if (P && V && typeof P.stack == "string") return [P.stack, V.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var d = o.DetermineComponentFrameRoot(),
        x = d[0],
        T = d[1];
      if (x && T) {
        var M = x.split(`
`),
          q = T.split(`
`);
        for (
          u = o = 0;
          o < M.length && !M[o].includes("DetermineComponentFrameRoot");

        )
          o++;
        for (; u < q.length && !q[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (o === M.length || u === q.length)
          for (
            o = M.length - 1, u = q.length - 1;
            1 <= o && 0 <= u && M[o] !== q[u];

          )
            u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (M[o] !== q[u]) {
            if (o !== 1 || u !== 1)
              do
                if ((o--, u--, 0 > u || M[o] !== q[u])) {
                  var J =
                    `
` + M[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      J.includes("<anonymous>") &&
                      (J = J.replace("<anonymous>", e.displayName)),
                    J
                  );
                }
              while (1 <= o && 0 <= u);
            break;
          }
      }
    } finally {
      (We = !1), (Error.prepareStackTrace = a);
    }
    return (a = e ? e.displayName || e.name : "") ? Se(a) : "";
  }
  function Z(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Se(e.type);
      case 16:
        return Se("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? Se("Suspense Fallback")
          : Se("Suspense");
      case 19:
        return Se("SuspenseList");
      case 0:
      case 15:
        return ot(e.type, !1);
      case 11:
        return ot(e.type.render, !1);
      case 1:
        return ot(e.type, !0);
      case 31:
        return Se("Activity");
      default:
        return "";
    }
  }
  function St(e) {
    try {
      var t = "",
        a = null;
      do (t += Z(e, a)), (a = e), (e = e.return);
      while (e);
      return t;
    } catch (o) {
      return (
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack
      );
    }
  }
  var Lt = Object.prototype.hasOwnProperty,
    Kt = s.unstable_scheduleCallback,
    et = s.unstable_cancelCallback,
    Nn = s.unstable_shouldYield,
    Gn = s.unstable_requestPaint,
    wt = s.unstable_now,
    At = s.unstable_getCurrentPriorityLevel,
    ia = s.unstable_ImmediatePriority,
    dt = s.unstable_UserBlockingPriority,
    cn = s.unstable_NormalPriority,
    un = s.unstable_LowPriority,
    tn = s.unstable_IdlePriority,
    Pa = s.log,
    gt = s.unstable_setDisableYieldValue,
    Rn = null,
    xt = null;
  function mn(e) {
    if (
      (typeof Pa == "function" && gt(e),
      xt && typeof xt.setStrictMode == "function")
    )
      try {
        xt.setStrictMode(Rn, e);
      } catch {}
  }
  var Ht = Math.clz32 ? Math.clz32 : De,
    Ea = Math.log,
    Ka = Math.LN2;
  function De(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Ea(e) / Ka) | 0)) | 0;
  }
  var Yn = 256,
    nn = 262144,
    an = 4194304;
  function Ut(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
      case 128:
        return 128;
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function qn(e, t, a) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var u = 0,
      d = e.suspendedLanes,
      x = e.pingedLanes;
    e = e.warmLanes;
    var T = o & 134217727;
    return (
      T !== 0
        ? ((o = T & ~d),
          o !== 0
            ? (u = Ut(o))
            : ((x &= T),
              x !== 0
                ? (u = Ut(x))
                : a || ((a = T & ~e), a !== 0 && (u = Ut(a)))))
        : ((T = o & ~d),
          T !== 0
            ? (u = Ut(T))
            : x !== 0
            ? (u = Ut(x))
            : a || ((a = o & ~e), a !== 0 && (u = Ut(a)))),
      u === 0
        ? 0
        : t !== 0 &&
          t !== u &&
          (t & d) === 0 &&
          ((d = u & -u),
          (a = t & -t),
          d >= a || (d === 32 && (a & 4194048) !== 0))
        ? t
        : u
    );
  }
  function On(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Xn(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ni() {
    var e = an;
    return (an <<= 1), (an & 62914560) === 0 && (an = 4194304), e;
  }
  function Me(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function we(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Ie(e, t, a, o, u, d) {
    var x = e.pendingLanes;
    (e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0);
    var T = e.entanglements,
      M = e.expirationTimes,
      q = e.hiddenUpdates;
    for (a = x & ~a; 0 < a; ) {
      var J = 31 - Ht(a),
        $ = 1 << J;
      (T[J] = 0), (M[J] = -1);
      var V = q[J];
      if (V !== null)
        for (q[J] = null, J = 0; J < V.length; J++) {
          var P = V[J];
          P !== null && (P.lane &= -536870913);
        }
      a &= ~$;
    }
    o !== 0 && fe(e, o, 0),
      d !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(x & ~t));
  }
  function fe(e, t, a) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var o = 31 - Ht(t);
    (e.entangledLanes |= t),
      (e.entanglements[o] = e.entanglements[o] | 1073741824 | (a & 261930));
  }
  function ze(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a; ) {
      var o = 31 - Ht(a),
        u = 1 << o;
      (u & t) | (e[o] & t) && (e[o] |= t), (a &= ~u);
    }
  }
  function Te(e, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : Oe(a)),
      (a & (e.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function Oe(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Bt(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Ye() {
    var e = Q.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : hx(e.type));
  }
  function Tt(e, t) {
    var a = Q.p;
    try {
      return (Q.p = e), t();
    } finally {
      Q.p = a;
    }
  }
  var vt = Math.random().toString(36).slice(2),
    He = "__reactFiber$" + vt,
    Ue = "__reactProps$" + vt,
    $e = "__reactContainer$" + vt,
    Mn = "__reactEvents$" + vt,
    yt = "__reactListeners$" + vt,
    zn = "__reactHandles$" + vt,
    ra = "__reactResources$" + vt,
    Nt = "__reactMarker$" + vt;
  function Xt(e) {
    delete e[He], delete e[Ue], delete e[Mn], delete e[yt], delete e[zn];
  }
  function Rt(e) {
    var t = e[He];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if ((t = a[$e] || a[He])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (e = W1(e); e !== null; ) {
            if ((a = e[He])) return a;
            e = W1(e);
          }
        return t;
      }
      (e = a), (a = e.parentNode);
    }
    return null;
  }
  function Vn(e) {
    if ((e = e[He] || e[$e])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function ai(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Ot(e) {
    var t = e[ra];
    return (
      t ||
        (t = e[ra] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function qe(e) {
    e[Nt] = !0;
  }
  var la = new Set(),
    _l = {};
  function ii(e, t) {
    Ca(e, t), Ca(e + "Capture", t);
  }
  function Ca(e, t) {
    for (_l[e] = t, e = 0; e < t.length; e++) la.add(t[e]);
  }
  var Aa = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Pi = {},
    Dr = {};
  function ri(e) {
    return Lt.call(Dr, e)
      ? !0
      : Lt.call(Pi, e)
      ? !1
      : Aa.test(e)
      ? (Dr[e] = !0)
      : ((Pi[e] = !0), !1);
  }
  function cc(e, t, a) {
    if (ri(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var o = t.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function uc(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function yi(e, t, a, o) {
    if (o === null) e.removeAttribute(a);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + o);
    }
  }
  function Na(e) {
    switch (typeof e) {
      case "bigint":
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
  function km(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function g_(e, t, a) {
    var o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof o < "u" &&
      typeof o.get == "function" &&
      typeof o.set == "function"
    ) {
      var u = o.get,
        d = o.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (x) {
            (a = "" + x), d.call(this, x);
          },
        }),
        Object.defineProperty(e, t, { enumerable: o.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (x) {
            a = "" + x;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Ef(e) {
    if (!e._valueTracker) {
      var t = km(e) ? "checked" : "value";
      e._valueTracker = g_(e, t, "" + e[t]);
    }
  }
  function Lm(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      o = "";
    return (
      e && (o = km(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== a ? (t.setValue(e), !0) : !1
    );
  }
  function fc(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var x_ = /[\n"\\]/g;
  function Ra(e) {
    return e.replace(x_, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Cf(e, t, a, o, u, d, x, T) {
    (e.name = ""),
      x != null &&
      typeof x != "function" &&
      typeof x != "symbol" &&
      typeof x != "boolean"
        ? (e.type = x)
        : e.removeAttribute("type"),
      t != null
        ? x === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Na(t))
          : e.value !== "" + Na(t) && (e.value = "" + Na(t))
        : (x !== "submit" && x !== "reset") || e.removeAttribute("value"),
      t != null
        ? Af(e, x, Na(t))
        : a != null
        ? Af(e, x, Na(a))
        : o != null && e.removeAttribute("value"),
      u == null && d != null && (e.defaultChecked = !!d),
      u != null &&
        (e.checked = u && typeof u != "function" && typeof u != "symbol"),
      T != null &&
      typeof T != "function" &&
      typeof T != "symbol" &&
      typeof T != "boolean"
        ? (e.name = "" + Na(T))
        : e.removeAttribute("name");
  }
  function Hm(e, t, a, o, u, d, x, T) {
    if (
      (d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (e.type = d),
      t != null || a != null)
    ) {
      if (!((d !== "submit" && d !== "reset") || t != null)) {
        Ef(e);
        return;
      }
      (a = a != null ? "" + Na(a) : ""),
        (t = t != null ? "" + Na(t) : a),
        T || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (o = o ?? u),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (e.checked = T ? e.checked : !!o),
      (e.defaultChecked = !!o),
      x != null &&
        typeof x != "function" &&
        typeof x != "symbol" &&
        typeof x != "boolean" &&
        (e.name = x),
      Ef(e);
  }
  function Af(e, t, a) {
    (t === "number" && fc(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function Sl(e, t, a, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < a.length; u++) t["$" + a[u]] = !0;
      for (a = 0; a < e.length; a++)
        (u = t.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== u && (e[a].selected = u),
          u && o && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Na(a), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === a) {
          (e[u].selected = !0), o && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Um(e, t, a) {
    if (
      t != null &&
      ((t = "" + Na(t)), t !== e.value && (e.value = t), a == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Na(a) : "";
  }
  function Bm(e, t, a, o) {
    if (t == null) {
      if (o != null) {
        if (a != null) throw Error(i(92));
        if (ce(o)) {
          if (1 < o.length) throw Error(i(93));
          o = o[0];
        }
        a = o;
      }
      a == null && (a = ""), (t = a);
    }
    (a = Na(t)),
      (e.defaultValue = a),
      (o = e.textContent),
      o === a && o !== "" && o !== null && (e.value = o),
      Ef(e);
  }
  function wl(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var v_ = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Gm(e, t, a) {
    var o = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? o
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : o
      ? e.setProperty(t, a)
      : typeof a != "number" || a === 0 || v_.has(t)
      ? t === "float"
        ? (e.cssFloat = a)
        : (e[t] = ("" + a).trim())
      : (e[t] = a + "px");
  }
  function Ym(e, t, a) {
    if (t != null && typeof t != "object") throw Error(i(62));
    if (((e = e.style), a != null)) {
      for (var o in a)
        !a.hasOwnProperty(o) ||
          (t != null && t.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? e.setProperty(o, "")
            : o === "float"
            ? (e.cssFloat = "")
            : (e[o] = ""));
      for (var u in t)
        (o = t[u]), t.hasOwnProperty(u) && a[u] !== o && Gm(e, u, o);
    } else for (var d in t) t.hasOwnProperty(d) && Gm(e, d, t[d]);
  }
  function Nf(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var y_ = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    b_ =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function dc(e) {
    return b_.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function bi() {}
  var Rf = null;
  function Of(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Tl = null,
    El = null;
  function qm(e) {
    var t = Vn(e);
    if (t && (e = t.stateNode)) {
      var a = e[Ue] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Cf(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + Ra("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var o = a[t];
              if (o !== e && o.form === e.form) {
                var u = o[Ue] || null;
                if (!u) throw Error(i(90));
                Cf(
                  o,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              (o = a[t]), o.form === e.form && Lm(o);
          }
          break e;
        case "textarea":
          Um(e, a.value, a.defaultValue);
          break e;
        case "select":
          (t = a.value), t != null && Sl(e, !!a.multiple, t, !1);
      }
    }
  }
  var Mf = !1;
  function Xm(e, t, a) {
    if (Mf) return e(t, a);
    Mf = !0;
    try {
      var o = e(t);
      return o;
    } finally {
      if (
        ((Mf = !1),
        (Tl !== null || El !== null) &&
          (Ic(), Tl && ((t = Tl), (e = El), (El = Tl = null), qm(t), e)))
      )
        for (t = 0; t < e.length; t++) qm(e[t]);
    }
  }
  function Es(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var o = a[Ue] || null;
    if (o === null) return null;
    a = o[t];
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
        (o = !o.disabled) ||
          ((e = e.type),
          (o = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !o);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(i(231, t, typeof a));
    return a;
  }
  var _i = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    zf = !1;
  if (_i)
    try {
      var Cs = {};
      Object.defineProperty(Cs, "passive", {
        get: function () {
          zf = !0;
        },
      }),
        window.addEventListener("test", Cs, Cs),
        window.removeEventListener("test", Cs, Cs);
    } catch {
      zf = !1;
    }
  var Ki = null,
    jf = null,
    hc = null;
  function Vm() {
    if (hc) return hc;
    var e,
      t = jf,
      a = t.length,
      o,
      u = "value" in Ki ? Ki.value : Ki.textContent,
      d = u.length;
    for (e = 0; e < a && t[e] === u[e]; e++);
    var x = a - e;
    for (o = 1; o <= x && t[a - o] === u[d - o]; o++);
    return (hc = u.slice(e, 1 < o ? 1 - o : void 0));
  }
  function pc(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function mc() {
    return !0;
  }
  function Zm() {
    return !1;
  }
  function Zn(e) {
    function t(a, o, u, d, x) {
      (this._reactName = a),
        (this._targetInst = u),
        (this.type = o),
        (this.nativeEvent = d),
        (this.target = x),
        (this.currentTarget = null);
      for (var T in e)
        e.hasOwnProperty(T) && ((a = e[T]), (this[T] = a ? a(d) : d[T]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? mc
          : Zm),
        (this.isPropagationStopped = Zm),
        this
      );
    }
    return (
      v(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = mc));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = mc));
        },
        persist: function () {},
        isPersistent: mc,
      }),
      t
    );
  }
  var kr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    gc = Zn(kr),
    As = v({}, kr, { view: 0, detail: 0 }),
    __ = Zn(As),
    Df,
    kf,
    Ns,
    xc = v({}, As, {
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
      getModifierState: Hf,
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
          : (e !== Ns &&
              (Ns && e.type === "mousemove"
                ? ((Df = e.screenX - Ns.screenX), (kf = e.screenY - Ns.screenY))
                : (kf = Df = 0),
              (Ns = e)),
            Df);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : kf;
      },
    }),
    Qm = Zn(xc),
    S_ = v({}, xc, { dataTransfer: 0 }),
    w_ = Zn(S_),
    T_ = v({}, As, { relatedTarget: 0 }),
    Lf = Zn(T_),
    E_ = v({}, kr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    C_ = Zn(E_),
    A_ = v({}, kr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    N_ = Zn(A_),
    R_ = v({}, kr, { data: 0 }),
    Pm = Zn(R_),
    O_ = {
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
    M_ = {
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
    z_ = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function j_(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = z_[e])
      ? !!t[e]
      : !1;
  }
  function Hf() {
    return j_;
  }
  var D_ = v({}, As, {
      key: function (e) {
        if (e.key) {
          var t = O_[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = pc(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? M_[e.keyCode] || "Unidentified"
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
      getModifierState: Hf,
      charCode: function (e) {
        return e.type === "keypress" ? pc(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? pc(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    k_ = Zn(D_),
    L_ = v({}, xc, {
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
    Km = Zn(L_),
    H_ = v({}, As, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Hf,
    }),
    U_ = Zn(H_),
    B_ = v({}, kr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    G_ = Zn(B_),
    Y_ = v({}, xc, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
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
    q_ = Zn(Y_),
    X_ = v({}, kr, { newState: 0, oldState: 0 }),
    V_ = Zn(X_),
    Z_ = [9, 13, 27, 32],
    Uf = _i && "CompositionEvent" in window,
    Rs = null;
  _i && "documentMode" in document && (Rs = document.documentMode);
  var Q_ = _i && "TextEvent" in window && !Rs,
    Fm = _i && (!Uf || (Rs && 8 < Rs && 11 >= Rs)),
    Jm = " ",
    Wm = !1;
  function $m(e, t) {
    switch (e) {
      case "keyup":
        return Z_.indexOf(t.keyCode) !== -1;
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
  function Im(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Cl = !1;
  function P_(e, t) {
    switch (e) {
      case "compositionend":
        return Im(t);
      case "keypress":
        return t.which !== 32 ? null : ((Wm = !0), Jm);
      case "textInput":
        return (e = t.data), e === Jm && Wm ? null : e;
      default:
        return null;
    }
  }
  function K_(e, t) {
    if (Cl)
      return e === "compositionend" || (!Uf && $m(e, t))
        ? ((e = Vm()), (hc = jf = Ki = null), (Cl = !1), e)
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
        return Fm && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var F_ = {
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
  function eg(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!F_[e.type] : t === "textarea";
  }
  function tg(e, t, a, o) {
    Tl ? (El ? El.push(o) : (El = [o])) : (Tl = o),
      (t = lu(t, "onChange")),
      0 < t.length &&
        ((a = new gc("onChange", "change", null, a, o)),
        e.push({ event: a, listeners: t }));
  }
  var Os = null,
    Ms = null;
  function J_(e) {
    H1(e, 0);
  }
  function vc(e) {
    var t = ai(e);
    if (Lm(t)) return e;
  }
  function ng(e, t) {
    if (e === "change") return t;
  }
  var ag = !1;
  if (_i) {
    var Bf;
    if (_i) {
      var Gf = "oninput" in document;
      if (!Gf) {
        var ig = document.createElement("div");
        ig.setAttribute("oninput", "return;"),
          (Gf = typeof ig.oninput == "function");
      }
      Bf = Gf;
    } else Bf = !1;
    ag = Bf && (!document.documentMode || 9 < document.documentMode);
  }
  function rg() {
    Os && (Os.detachEvent("onpropertychange", lg), (Ms = Os = null));
  }
  function lg(e) {
    if (e.propertyName === "value" && vc(Ms)) {
      var t = [];
      tg(t, Ms, e, Of(e)), Xm(J_, t);
    }
  }
  function W_(e, t, a) {
    e === "focusin"
      ? (rg(), (Os = t), (Ms = a), Os.attachEvent("onpropertychange", lg))
      : e === "focusout" && rg();
  }
  function $_(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return vc(Ms);
  }
  function I_(e, t) {
    if (e === "click") return vc(t);
  }
  function e2(e, t) {
    if (e === "input" || e === "change") return vc(t);
  }
  function t2(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var sa = typeof Object.is == "function" ? Object.is : t2;
  function zs(e, t) {
    if (sa(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(e),
      o = Object.keys(t);
    if (a.length !== o.length) return !1;
    for (o = 0; o < a.length; o++) {
      var u = a[o];
      if (!Lt.call(t, u) || !sa(e[u], t[u])) return !1;
    }
    return !0;
  }
  function sg(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function og(e, t) {
    var a = sg(e);
    e = 0;
    for (var o; a; ) {
      if (a.nodeType === 3) {
        if (((o = e + a.textContent.length), e <= t && o >= t))
          return { node: a, offset: t - e };
        e = o;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = sg(a);
    }
  }
  function cg(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? cg(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function ug(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = fc(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = fc(e.document);
    }
    return t;
  }
  function Yf(e) {
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
  var n2 = _i && "documentMode" in document && 11 >= document.documentMode,
    Al = null,
    qf = null,
    js = null,
    Xf = !1;
  function fg(e, t, a) {
    var o =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Xf ||
      Al == null ||
      Al !== fc(o) ||
      ((o = Al),
      "selectionStart" in o && Yf(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (js && zs(js, o)) ||
        ((js = o),
        (o = lu(qf, "onSelect")),
        0 < o.length &&
          ((t = new gc("onSelect", "select", null, t, a)),
          e.push({ event: t, listeners: o }),
          (t.target = Al))));
  }
  function Lr(e, t) {
    var a = {};
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + e] = "webkit" + t),
      (a["Moz" + e] = "moz" + t),
      a
    );
  }
  var Nl = {
      animationend: Lr("Animation", "AnimationEnd"),
      animationiteration: Lr("Animation", "AnimationIteration"),
      animationstart: Lr("Animation", "AnimationStart"),
      transitionrun: Lr("Transition", "TransitionRun"),
      transitionstart: Lr("Transition", "TransitionStart"),
      transitioncancel: Lr("Transition", "TransitionCancel"),
      transitionend: Lr("Transition", "TransitionEnd"),
    },
    Vf = {},
    dg = {};
  _i &&
    ((dg = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Nl.animationend.animation,
      delete Nl.animationiteration.animation,
      delete Nl.animationstart.animation),
    "TransitionEvent" in window || delete Nl.transitionend.transition);
  function Hr(e) {
    if (Vf[e]) return Vf[e];
    if (!Nl[e]) return e;
    var t = Nl[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in dg) return (Vf[e] = t[a]);
    return e;
  }
  var hg = Hr("animationend"),
    pg = Hr("animationiteration"),
    mg = Hr("animationstart"),
    a2 = Hr("transitionrun"),
    i2 = Hr("transitionstart"),
    r2 = Hr("transitioncancel"),
    gg = Hr("transitionend"),
    xg = new Map(),
    Zf =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Zf.push("scrollEnd");
  function Fa(e, t) {
    xg.set(e, t), ii(t, [e]);
  }
  var yc =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Oa = [],
    Rl = 0,
    Qf = 0;
  function bc() {
    for (var e = Rl, t = (Qf = Rl = 0); t < e; ) {
      var a = Oa[t];
      Oa[t++] = null;
      var o = Oa[t];
      Oa[t++] = null;
      var u = Oa[t];
      Oa[t++] = null;
      var d = Oa[t];
      if (((Oa[t++] = null), o !== null && u !== null)) {
        var x = o.pending;
        x === null ? (u.next = u) : ((u.next = x.next), (x.next = u)),
          (o.pending = u);
      }
      d !== 0 && vg(a, u, d);
    }
  }
  function _c(e, t, a, o) {
    (Oa[Rl++] = e),
      (Oa[Rl++] = t),
      (Oa[Rl++] = a),
      (Oa[Rl++] = o),
      (Qf |= o),
      (e.lanes |= o),
      (e = e.alternate),
      e !== null && (e.lanes |= o);
  }
  function Pf(e, t, a, o) {
    return _c(e, t, a, o), Sc(e);
  }
  function Ur(e, t) {
    return _c(e, null, null, t), Sc(e);
  }
  function vg(e, t, a) {
    e.lanes |= a;
    var o = e.alternate;
    o !== null && (o.lanes |= a);
    for (var u = !1, d = e.return; d !== null; )
      (d.childLanes |= a),
        (o = d.alternate),
        o !== null && (o.childLanes |= a),
        d.tag === 22 &&
          ((e = d.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = d),
        (d = d.return);
    return e.tag === 3
      ? ((d = e.stateNode),
        u &&
          t !== null &&
          ((u = 31 - Ht(a)),
          (e = d.hiddenUpdates),
          (o = e[u]),
          o === null ? (e[u] = [t]) : o.push(t),
          (t.lane = a | 536870912)),
        d)
      : null;
  }
  function Sc(e) {
    if (50 < to) throw ((to = 0), (nh = null), Error(i(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ol = {};
  function l2(e, t, a, o) {
    (this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function oa(e, t, a, o) {
    return new l2(e, t, a, o);
  }
  function Kf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Si(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = oa(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 65011712),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function yg(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function wc(e, t, a, o, u, d) {
    var x = 0;
    if (((o = e), typeof e == "function")) Kf(e) && (x = 1);
    else if (typeof e == "string")
      x = fS(e, a, ee.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case X:
          return (e = oa(31, a, t, u)), (e.elementType = X), (e.lanes = d), e;
        case S:
          return Br(a.children, u, d, t);
        case E:
          (x = 8), (u |= 24);
          break;
        case C:
          return (
            (e = oa(12, a, t, u | 2)), (e.elementType = C), (e.lanes = d), e
          );
        case H:
          return (e = oa(13, a, t, u)), (e.elementType = H), (e.lanes = d), e;
        case G:
          return (e = oa(19, a, t, u)), (e.elementType = G), (e.lanes = d), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case R:
                x = 10;
                break e;
              case A:
                x = 9;
                break e;
              case D:
                x = 11;
                break e;
              case z:
                x = 14;
                break e;
              case L:
                (x = 16), (o = null);
                break e;
            }
          (x = 29),
            (a = Error(i(130, e === null ? "null" : typeof e, ""))),
            (o = null);
      }
    return (
      (t = oa(x, a, t, u)), (t.elementType = e), (t.type = o), (t.lanes = d), t
    );
  }
  function Br(e, t, a, o) {
    return (e = oa(7, e, o, t)), (e.lanes = a), e;
  }
  function Ff(e, t, a) {
    return (e = oa(6, e, null, t)), (e.lanes = a), e;
  }
  function bg(e) {
    var t = oa(18, null, null, 0);
    return (t.stateNode = e), t;
  }
  function Jf(e, t, a) {
    return (
      (t = oa(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var _g = new WeakMap();
  function Ma(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = _g.get(e);
      return a !== void 0
        ? a
        : ((t = { value: e, source: t, stack: St(t) }), _g.set(e, t), t);
    }
    return { value: e, source: t, stack: St(t) };
  }
  var Ml = [],
    zl = 0,
    Tc = null,
    Ds = 0,
    za = [],
    ja = 0,
    Fi = null,
    li = 1,
    si = "";
  function wi(e, t) {
    (Ml[zl++] = Ds), (Ml[zl++] = Tc), (Tc = e), (Ds = t);
  }
  function Sg(e, t, a) {
    (za[ja++] = li), (za[ja++] = si), (za[ja++] = Fi), (Fi = e);
    var o = li;
    e = si;
    var u = 32 - Ht(o) - 1;
    (o &= ~(1 << u)), (a += 1);
    var d = 32 - Ht(t) + u;
    if (30 < d) {
      var x = u - (u % 5);
      (d = (o & ((1 << x) - 1)).toString(32)),
        (o >>= x),
        (u -= x),
        (li = (1 << (32 - Ht(t) + u)) | (a << u) | o),
        (si = d + e);
    } else (li = (1 << d) | (a << u) | o), (si = e);
  }
  function Wf(e) {
    e.return !== null && (wi(e, 1), Sg(e, 1, 0));
  }
  function $f(e) {
    for (; e === Tc; )
      (Tc = Ml[--zl]), (Ml[zl] = null), (Ds = Ml[--zl]), (Ml[zl] = null);
    for (; e === Fi; )
      (Fi = za[--ja]),
        (za[ja] = null),
        (si = za[--ja]),
        (za[ja] = null),
        (li = za[--ja]),
        (za[ja] = null);
  }
  function wg(e, t) {
    (za[ja++] = li),
      (za[ja++] = si),
      (za[ja++] = Fi),
      (li = t.id),
      (si = t.overflow),
      (Fi = e);
  }
  var gn = null,
    bt = null,
    Fe = !1,
    Ji = null,
    Da = !1,
    If = Error(i(519));
  function Wi(e) {
    var t = Error(
      i(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (ks(Ma(t, e)), If);
  }
  function Tg(e) {
    var t = e.stateNode,
      a = e.type,
      o = e.memoizedProps;
    switch (((t[He] = e), (t[Ue] = o), a)) {
      case "dialog":
        Qe("cancel", t), Qe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Qe("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ao.length; a++) Qe(ao[a], t);
        break;
      case "source":
        Qe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Qe("error", t), Qe("load", t);
        break;
      case "details":
        Qe("toggle", t);
        break;
      case "input":
        Qe("invalid", t),
          Hm(
            t,
            o.value,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name,
            !0
          );
        break;
      case "select":
        Qe("invalid", t);
        break;
      case "textarea":
        Qe("invalid", t), Bm(t, o.value, o.defaultValue, o.children);
    }
    (a = o.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      o.suppressHydrationWarning === !0 ||
      Y1(t.textContent, a)
        ? (o.popover != null && (Qe("beforetoggle", t), Qe("toggle", t)),
          o.onScroll != null && Qe("scroll", t),
          o.onScrollEnd != null && Qe("scrollend", t),
          o.onClick != null && (t.onclick = bi),
          (t = !0))
        : (t = !1),
      t || Wi(e, !0);
  }
  function Eg(e) {
    for (gn = e.return; gn; )
      switch (gn.tag) {
        case 5:
        case 31:
        case 13:
          Da = !1;
          return;
        case 27:
        case 3:
          Da = !0;
          return;
        default:
          gn = gn.return;
      }
  }
  function jl(e) {
    if (e !== gn) return !1;
    if (!Fe) return Eg(e), (Fe = !0), !1;
    var t = e.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || xh(e.type, e.memoizedProps))),
        (a = !a)),
      a && bt && Wi(e),
      Eg(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      bt = J1(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      bt = J1(e);
    } else
      t === 27
        ? ((t = bt), fr(e.type) ? ((e = Sh), (Sh = null), (bt = e)) : (bt = t))
        : (bt = gn ? La(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Gr() {
    (bt = gn = null), (Fe = !1);
  }
  function ed() {
    var e = Ji;
    return (
      e !== null &&
        (Fn === null ? (Fn = e) : Fn.push.apply(Fn, e), (Ji = null)),
      e
    );
  }
  function ks(e) {
    Ji === null ? (Ji = [e]) : Ji.push(e);
  }
  var td = O(null),
    Yr = null,
    Ti = null;
  function $i(e, t, a) {
    ne(td, t._currentValue), (t._currentValue = a);
  }
  function Ei(e) {
    (e._currentValue = td.current), K(td);
  }
  function nd(e, t, a) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
          : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function ad(e, t, a, o) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var d = u.dependencies;
      if (d !== null) {
        var x = u.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var T = d;
          d = u;
          for (var M = 0; M < t.length; M++)
            if (T.context === t[M]) {
              (d.lanes |= a),
                (T = d.alternate),
                T !== null && (T.lanes |= a),
                nd(d.return, a, e),
                o || (x = null);
              break e;
            }
          d = T.next;
        }
      } else if (u.tag === 18) {
        if (((x = u.return), x === null)) throw Error(i(341));
        (x.lanes |= a),
          (d = x.alternate),
          d !== null && (d.lanes |= a),
          nd(x, a, e),
          (x = null);
      } else x = u.child;
      if (x !== null) x.return = u;
      else
        for (x = u; x !== null; ) {
          if (x === e) {
            x = null;
            break;
          }
          if (((u = x.sibling), u !== null)) {
            (u.return = x.return), (x = u);
            break;
          }
          x = x.return;
        }
      u = x;
    }
  }
  function Dl(e, t, a, o) {
    e = null;
    for (var u = t, d = !1; u !== null; ) {
      if (!d) {
        if ((u.flags & 524288) !== 0) d = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var x = u.alternate;
        if (x === null) throw Error(i(387));
        if (((x = x.memoizedProps), x !== null)) {
          var T = u.type;
          sa(u.pendingProps.value, x.value) ||
            (e !== null ? e.push(T) : (e = [T]));
        }
      } else if (u === ue.current) {
        if (((x = u.alternate), x === null)) throw Error(i(387));
        x.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(oo) : (e = [oo]));
      }
      u = u.return;
    }
    e !== null && ad(t, e, a, o), (t.flags |= 262144);
  }
  function Ec(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!sa(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function qr(e) {
    (Yr = e),
      (Ti = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function xn(e) {
    return Cg(Yr, e);
  }
  function Cc(e, t) {
    return Yr === null && qr(e), Cg(e, t);
  }
  function Cg(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Ti === null)) {
      if (e === null) throw Error(i(308));
      (Ti = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Ti = Ti.next = t;
    return a;
  }
  var s2 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, o) {
                  e.push(o);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (a) {
                  return a();
                });
            };
          },
    o2 = s.unstable_scheduleCallback,
    c2 = s.unstable_NormalPriority,
    Ft = {
      $$typeof: R,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function id() {
    return { controller: new s2(), data: new Map(), refCount: 0 };
  }
  function Ls(e) {
    e.refCount--,
      e.refCount === 0 &&
        o2(c2, function () {
          e.controller.abort();
        });
  }
  var Hs = null,
    rd = 0,
    kl = 0,
    Ll = null;
  function u2(e, t) {
    if (Hs === null) {
      var a = (Hs = []);
      (rd = 0),
        (kl = oh()),
        (Ll = {
          status: "pending",
          value: void 0,
          then: function (o) {
            a.push(o);
          },
        });
    }
    return rd++, t.then(Ag, Ag), t;
  }
  function Ag() {
    if (--rd === 0 && Hs !== null) {
      Ll !== null && (Ll.status = "fulfilled");
      var e = Hs;
      (Hs = null), (kl = 0), (Ll = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function f2(e, t) {
    var a = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      e.then(
        function () {
          (o.status = "fulfilled"), (o.value = t);
          for (var u = 0; u < a.length; u++) (0, a[u])(t);
        },
        function (u) {
          for (o.status = "rejected", o.reason = u, u = 0; u < a.length; u++)
            (0, a[u])(void 0);
        }
      ),
      o
    );
  }
  var Ng = U.S;
  U.S = function (e, t) {
    (f1 = wt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        u2(e, t),
      Ng !== null && Ng(e, t);
  };
  var Xr = O(null);
  function ld() {
    var e = Xr.current;
    return e !== null ? e : ht.pooledCache;
  }
  function Ac(e, t) {
    t === null ? ne(Xr, Xr.current) : ne(Xr, t.pool);
  }
  function Rg() {
    var e = ld();
    return e === null ? null : { parent: Ft._currentValue, pool: e };
  }
  var Hl = Error(i(460)),
    sd = Error(i(474)),
    Nc = Error(i(542)),
    Rc = { then: function () {} };
  function Og(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function Mg(e, t, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(t) : a !== t && (t.then(bi, bi), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), jg(e), e);
      default:
        if (typeof t.status == "string") t.then(bi, bi);
        else {
          if (((e = ht), e !== null && 100 < e.shellSuspendCounter))
            throw Error(i(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (o) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "fulfilled"), (u.value = o);
                }
              },
              function (o) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "rejected"), (u.reason = o);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), jg(e), e);
        }
        throw ((Zr = t), Hl);
    }
  }
  function Vr(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((Zr = a), Hl)
        : a;
    }
  }
  var Zr = null;
  function zg() {
    if (Zr === null) throw Error(i(459));
    var e = Zr;
    return (Zr = null), e;
  }
  function jg(e) {
    if (e === Hl || e === Nc) throw Error(i(483));
  }
  var Ul = null,
    Us = 0;
  function Oc(e) {
    var t = Us;
    return (Us += 1), Ul === null && (Ul = []), Mg(Ul, e, t);
  }
  function Bs(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Mc(e, t) {
    throw t.$$typeof === b
      ? Error(i(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          i(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function Dg(e) {
    function t(B, k) {
      if (e) {
        var Y = B.deletions;
        Y === null ? ((B.deletions = [k]), (B.flags |= 16)) : Y.push(k);
      }
    }
    function a(B, k) {
      if (!e) return null;
      for (; k !== null; ) t(B, k), (k = k.sibling);
      return null;
    }
    function o(B) {
      for (var k = new Map(); B !== null; )
        B.key !== null ? k.set(B.key, B) : k.set(B.index, B), (B = B.sibling);
      return k;
    }
    function u(B, k) {
      return (B = Si(B, k)), (B.index = 0), (B.sibling = null), B;
    }
    function d(B, k, Y) {
      return (
        (B.index = Y),
        e
          ? ((Y = B.alternate),
            Y !== null
              ? ((Y = Y.index), Y < k ? ((B.flags |= 67108866), k) : Y)
              : ((B.flags |= 67108866), k))
          : ((B.flags |= 1048576), k)
      );
    }
    function x(B) {
      return e && B.alternate === null && (B.flags |= 67108866), B;
    }
    function T(B, k, Y, W) {
      return k === null || k.tag !== 6
        ? ((k = Ff(Y, B.mode, W)), (k.return = B), k)
        : ((k = u(k, Y)), (k.return = B), k);
    }
    function M(B, k, Y, W) {
      var Ee = Y.type;
      return Ee === S
        ? J(B, k, Y.props.children, W, Y.key)
        : k !== null &&
          (k.elementType === Ee ||
            (typeof Ee == "object" &&
              Ee !== null &&
              Ee.$$typeof === L &&
              Vr(Ee) === k.type))
        ? ((k = u(k, Y.props)), Bs(k, Y), (k.return = B), k)
        : ((k = wc(Y.type, Y.key, Y.props, null, B.mode, W)),
          Bs(k, Y),
          (k.return = B),
          k);
    }
    function q(B, k, Y, W) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== Y.containerInfo ||
        k.stateNode.implementation !== Y.implementation
        ? ((k = Jf(Y, B.mode, W)), (k.return = B), k)
        : ((k = u(k, Y.children || [])), (k.return = B), k);
    }
    function J(B, k, Y, W, Ee) {
      return k === null || k.tag !== 7
        ? ((k = Br(Y, B.mode, W, Ee)), (k.return = B), k)
        : ((k = u(k, Y)), (k.return = B), k);
    }
    function $(B, k, Y) {
      if (
        (typeof k == "string" && k !== "") ||
        typeof k == "number" ||
        typeof k == "bigint"
      )
        return (k = Ff("" + k, B.mode, Y)), (k.return = B), k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case _:
            return (
              (Y = wc(k.type, k.key, k.props, null, B.mode, Y)),
              Bs(Y, k),
              (Y.return = B),
              Y
            );
          case w:
            return (k = Jf(k, B.mode, Y)), (k.return = B), k;
          case L:
            return (k = Vr(k)), $(B, k, Y);
        }
        if (ce(k) || I(k))
          return (k = Br(k, B.mode, Y, null)), (k.return = B), k;
        if (typeof k.then == "function") return $(B, Oc(k), Y);
        if (k.$$typeof === R) return $(B, Cc(B, k), Y);
        Mc(B, k);
      }
      return null;
    }
    function V(B, k, Y, W) {
      var Ee = k !== null ? k.key : null;
      if (
        (typeof Y == "string" && Y !== "") ||
        typeof Y == "number" ||
        typeof Y == "bigint"
      )
        return Ee !== null ? null : T(B, k, "" + Y, W);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case _:
            return Y.key === Ee ? M(B, k, Y, W) : null;
          case w:
            return Y.key === Ee ? q(B, k, Y, W) : null;
          case L:
            return (Y = Vr(Y)), V(B, k, Y, W);
        }
        if (ce(Y) || I(Y)) return Ee !== null ? null : J(B, k, Y, W, null);
        if (typeof Y.then == "function") return V(B, k, Oc(Y), W);
        if (Y.$$typeof === R) return V(B, k, Cc(B, Y), W);
        Mc(B, Y);
      }
      return null;
    }
    function P(B, k, Y, W, Ee) {
      if (
        (typeof W == "string" && W !== "") ||
        typeof W == "number" ||
        typeof W == "bigint"
      )
        return (B = B.get(Y) || null), T(k, B, "" + W, Ee);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case _:
            return (
              (B = B.get(W.key === null ? Y : W.key) || null), M(k, B, W, Ee)
            );
          case w:
            return (
              (B = B.get(W.key === null ? Y : W.key) || null), q(k, B, W, Ee)
            );
          case L:
            return (W = Vr(W)), P(B, k, Y, W, Ee);
        }
        if (ce(W) || I(W)) return (B = B.get(Y) || null), J(k, B, W, Ee, null);
        if (typeof W.then == "function") return P(B, k, Y, Oc(W), Ee);
        if (W.$$typeof === R) return P(B, k, Y, Cc(k, W), Ee);
        Mc(k, W);
      }
      return null;
    }
    function ve(B, k, Y, W) {
      for (
        var Ee = null, tt = null, _e = k, Le = (k = 0), Ke = null;
        _e !== null && Le < Y.length;
        Le++
      ) {
        _e.index > Le ? ((Ke = _e), (_e = null)) : (Ke = _e.sibling);
        var nt = V(B, _e, Y[Le], W);
        if (nt === null) {
          _e === null && (_e = Ke);
          break;
        }
        e && _e && nt.alternate === null && t(B, _e),
          (k = d(nt, k, Le)),
          tt === null ? (Ee = nt) : (tt.sibling = nt),
          (tt = nt),
          (_e = Ke);
      }
      if (Le === Y.length) return a(B, _e), Fe && wi(B, Le), Ee;
      if (_e === null) {
        for (; Le < Y.length; Le++)
          (_e = $(B, Y[Le], W)),
            _e !== null &&
              ((k = d(_e, k, Le)),
              tt === null ? (Ee = _e) : (tt.sibling = _e),
              (tt = _e));
        return Fe && wi(B, Le), Ee;
      }
      for (_e = o(_e); Le < Y.length; Le++)
        (Ke = P(_e, B, Le, Y[Le], W)),
          Ke !== null &&
            (e &&
              Ke.alternate !== null &&
              _e.delete(Ke.key === null ? Le : Ke.key),
            (k = d(Ke, k, Le)),
            tt === null ? (Ee = Ke) : (tt.sibling = Ke),
            (tt = Ke));
      return (
        e &&
          _e.forEach(function (gr) {
            return t(B, gr);
          }),
        Fe && wi(B, Le),
        Ee
      );
    }
    function Ae(B, k, Y, W) {
      if (Y == null) throw Error(i(151));
      for (
        var Ee = null,
          tt = null,
          _e = k,
          Le = (k = 0),
          Ke = null,
          nt = Y.next();
        _e !== null && !nt.done;
        Le++, nt = Y.next()
      ) {
        _e.index > Le ? ((Ke = _e), (_e = null)) : (Ke = _e.sibling);
        var gr = V(B, _e, nt.value, W);
        if (gr === null) {
          _e === null && (_e = Ke);
          break;
        }
        e && _e && gr.alternate === null && t(B, _e),
          (k = d(gr, k, Le)),
          tt === null ? (Ee = gr) : (tt.sibling = gr),
          (tt = gr),
          (_e = Ke);
      }
      if (nt.done) return a(B, _e), Fe && wi(B, Le), Ee;
      if (_e === null) {
        for (; !nt.done; Le++, nt = Y.next())
          (nt = $(B, nt.value, W)),
            nt !== null &&
              ((k = d(nt, k, Le)),
              tt === null ? (Ee = nt) : (tt.sibling = nt),
              (tt = nt));
        return Fe && wi(B, Le), Ee;
      }
      for (_e = o(_e); !nt.done; Le++, nt = Y.next())
        (nt = P(_e, B, Le, nt.value, W)),
          nt !== null &&
            (e &&
              nt.alternate !== null &&
              _e.delete(nt.key === null ? Le : nt.key),
            (k = d(nt, k, Le)),
            tt === null ? (Ee = nt) : (tt.sibling = nt),
            (tt = nt));
      return (
        e &&
          _e.forEach(function (SS) {
            return t(B, SS);
          }),
        Fe && wi(B, Le),
        Ee
      );
    }
    function ft(B, k, Y, W) {
      if (
        (typeof Y == "object" &&
          Y !== null &&
          Y.type === S &&
          Y.key === null &&
          (Y = Y.props.children),
        typeof Y == "object" && Y !== null)
      ) {
        switch (Y.$$typeof) {
          case _:
            e: {
              for (var Ee = Y.key; k !== null; ) {
                if (k.key === Ee) {
                  if (((Ee = Y.type), Ee === S)) {
                    if (k.tag === 7) {
                      a(B, k.sibling),
                        (W = u(k, Y.props.children)),
                        (W.return = B),
                        (B = W);
                      break e;
                    }
                  } else if (
                    k.elementType === Ee ||
                    (typeof Ee == "object" &&
                      Ee !== null &&
                      Ee.$$typeof === L &&
                      Vr(Ee) === k.type)
                  ) {
                    a(B, k.sibling),
                      (W = u(k, Y.props)),
                      Bs(W, Y),
                      (W.return = B),
                      (B = W);
                    break e;
                  }
                  a(B, k);
                  break;
                } else t(B, k);
                k = k.sibling;
              }
              Y.type === S
                ? ((W = Br(Y.props.children, B.mode, W, Y.key)),
                  (W.return = B),
                  (B = W))
                : ((W = wc(Y.type, Y.key, Y.props, null, B.mode, W)),
                  Bs(W, Y),
                  (W.return = B),
                  (B = W));
            }
            return x(B);
          case w:
            e: {
              for (Ee = Y.key; k !== null; ) {
                if (k.key === Ee)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo === Y.containerInfo &&
                    k.stateNode.implementation === Y.implementation
                  ) {
                    a(B, k.sibling),
                      (W = u(k, Y.children || [])),
                      (W.return = B),
                      (B = W);
                    break e;
                  } else {
                    a(B, k);
                    break;
                  }
                else t(B, k);
                k = k.sibling;
              }
              (W = Jf(Y, B.mode, W)), (W.return = B), (B = W);
            }
            return x(B);
          case L:
            return (Y = Vr(Y)), ft(B, k, Y, W);
        }
        if (ce(Y)) return ve(B, k, Y, W);
        if (I(Y)) {
          if (((Ee = I(Y)), typeof Ee != "function")) throw Error(i(150));
          return (Y = Ee.call(Y)), Ae(B, k, Y, W);
        }
        if (typeof Y.then == "function") return ft(B, k, Oc(Y), W);
        if (Y.$$typeof === R) return ft(B, k, Cc(B, Y), W);
        Mc(B, Y);
      }
      return (typeof Y == "string" && Y !== "") ||
        typeof Y == "number" ||
        typeof Y == "bigint"
        ? ((Y = "" + Y),
          k !== null && k.tag === 6
            ? (a(B, k.sibling), (W = u(k, Y)), (W.return = B), (B = W))
            : (a(B, k), (W = Ff(Y, B.mode, W)), (W.return = B), (B = W)),
          x(B))
        : a(B, k);
    }
    return function (B, k, Y, W) {
      try {
        Us = 0;
        var Ee = ft(B, k, Y, W);
        return (Ul = null), Ee;
      } catch (_e) {
        if (_e === Hl || _e === Nc) throw _e;
        var tt = oa(29, _e, null, B.mode);
        return (tt.lanes = W), (tt.return = B), tt;
      }
    };
  }
  var Qr = Dg(!0),
    kg = Dg(!1),
    Ii = !1;
  function od(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function cd(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function er(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function tr(e, t, a) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (at & 2) !== 0)) {
      var u = o.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (o.pending = t),
        (t = Sc(e)),
        vg(e, null, a),
        t
      );
    }
    return _c(e, o, t, a), Sc(e);
  }
  function Gs(e, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var o = t.lanes;
      (o &= e.pendingLanes), (a |= o), (t.lanes = a), ze(e, a);
    }
  }
  function ud(e, t) {
    var a = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), a === o)) {
      var u = null,
        d = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var x = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          d === null ? (u = d = x) : (d = d.next = x), (a = a.next);
        } while (a !== null);
        d === null ? (u = d = t) : (d = d.next = t);
      } else u = d = t;
      (a = {
        baseState: o.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: d,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (e.updateQueue = a);
      return;
    }
    (e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t);
  }
  var fd = !1;
  function Ys() {
    if (fd) {
      var e = Ll;
      if (e !== null) throw e;
    }
  }
  function qs(e, t, a, o) {
    fd = !1;
    var u = e.updateQueue;
    Ii = !1;
    var d = u.firstBaseUpdate,
      x = u.lastBaseUpdate,
      T = u.shared.pending;
    if (T !== null) {
      u.shared.pending = null;
      var M = T,
        q = M.next;
      (M.next = null), x === null ? (d = q) : (x.next = q), (x = M);
      var J = e.alternate;
      J !== null &&
        ((J = J.updateQueue),
        (T = J.lastBaseUpdate),
        T !== x &&
          (T === null ? (J.firstBaseUpdate = q) : (T.next = q),
          (J.lastBaseUpdate = M)));
    }
    if (d !== null) {
      var $ = u.baseState;
      (x = 0), (J = q = M = null), (T = d);
      do {
        var V = T.lane & -536870913,
          P = V !== T.lane;
        if (P ? (Pe & V) === V : (o & V) === V) {
          V !== 0 && V === kl && (fd = !0),
            J !== null &&
              (J = J.next =
                {
                  lane: 0,
                  tag: T.tag,
                  payload: T.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var ve = e,
              Ae = T;
            V = t;
            var ft = a;
            switch (Ae.tag) {
              case 1:
                if (((ve = Ae.payload), typeof ve == "function")) {
                  $ = ve.call(ft, $, V);
                  break e;
                }
                $ = ve;
                break e;
              case 3:
                ve.flags = (ve.flags & -65537) | 128;
              case 0:
                if (
                  ((ve = Ae.payload),
                  (V = typeof ve == "function" ? ve.call(ft, $, V) : ve),
                  V == null)
                )
                  break e;
                $ = v({}, $, V);
                break e;
              case 2:
                Ii = !0;
            }
          }
          (V = T.callback),
            V !== null &&
              ((e.flags |= 64),
              P && (e.flags |= 8192),
              (P = u.callbacks),
              P === null ? (u.callbacks = [V]) : P.push(V));
        } else
          (P = {
            lane: V,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null,
          }),
            J === null ? ((q = J = P), (M = $)) : (J = J.next = P),
            (x |= V);
        if (((T = T.next), T === null)) {
          if (((T = u.shared.pending), T === null)) break;
          (P = T),
            (T = P.next),
            (P.next = null),
            (u.lastBaseUpdate = P),
            (u.shared.pending = null);
        }
      } while (!0);
      J === null && (M = $),
        (u.baseState = M),
        (u.firstBaseUpdate = q),
        (u.lastBaseUpdate = J),
        d === null && (u.shared.lanes = 0),
        (lr |= x),
        (e.lanes = x),
        (e.memoizedState = $);
    }
  }
  function Lg(e, t) {
    if (typeof e != "function") throw Error(i(191, e));
    e.call(t);
  }
  function Hg(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) Lg(a[e], t);
  }
  var Bl = O(null),
    zc = O(0);
  function Ug(e, t) {
    (e = Di), ne(zc, e), ne(Bl, t), (Di = e | t.baseLanes);
  }
  function dd() {
    ne(zc, Di), ne(Bl, Bl.current);
  }
  function hd() {
    (Di = zc.current), K(Bl), K(zc);
  }
  var ca = O(null),
    ka = null;
  function nr(e) {
    var t = e.alternate;
    ne(Vt, Vt.current & 1),
      ne(ca, e),
      ka === null &&
        (t === null || Bl.current !== null || t.memoizedState !== null) &&
        (ka = e);
  }
  function pd(e) {
    ne(Vt, Vt.current), ne(ca, e), ka === null && (ka = e);
  }
  function Bg(e) {
    e.tag === 22
      ? (ne(Vt, Vt.current), ne(ca, e), ka === null && (ka = e))
      : ar();
  }
  function ar() {
    ne(Vt, Vt.current), ne(ca, ca.current);
  }
  function ua(e) {
    K(ca), ka === e && (ka = null), K(Vt);
  }
  var Vt = O(0);
  function jc(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || bh(a) || _h(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
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
  var Ci = 0,
    ke = null,
    ct = null,
    Jt = null,
    Dc = !1,
    Gl = !1,
    Pr = !1,
    kc = 0,
    Xs = 0,
    Yl = null,
    d2 = 0;
  function Gt() {
    throw Error(i(321));
  }
  function md(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!sa(e[a], t[a])) return !1;
    return !0;
  }
  function gd(e, t, a, o, u, d) {
    return (
      (Ci = d),
      (ke = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (U.H = e === null || e.memoizedState === null ? S0 : Md),
      (Pr = !1),
      (d = a(o, u)),
      (Pr = !1),
      Gl && (d = Yg(t, a, o, u)),
      Gg(e),
      d
    );
  }
  function Gg(e) {
    U.H = Qs;
    var t = ct !== null && ct.next !== null;
    if (((Ci = 0), (Jt = ct = ke = null), (Dc = !1), (Xs = 0), (Yl = null), t))
      throw Error(i(300));
    e === null ||
      Wt ||
      ((e = e.dependencies), e !== null && Ec(e) && (Wt = !0));
  }
  function Yg(e, t, a, o) {
    ke = e;
    var u = 0;
    do {
      if ((Gl && (Yl = null), (Xs = 0), (Gl = !1), 25 <= u))
        throw Error(i(301));
      if (((u += 1), (Jt = ct = null), e.updateQueue != null)) {
        var d = e.updateQueue;
        (d.lastEffect = null),
          (d.events = null),
          (d.stores = null),
          d.memoCache != null && (d.memoCache.index = 0);
      }
      (U.H = w0), (d = t(a, o));
    } while (Gl);
    return d;
  }
  function h2() {
    var e = U.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Vs(t) : t),
      (e = e.useState()[0]),
      (ct !== null ? ct.memoizedState : null) !== e && (ke.flags |= 1024),
      t
    );
  }
  function xd() {
    var e = kc !== 0;
    return (kc = 0), e;
  }
  function vd(e, t, a) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a);
  }
  function yd(e) {
    if (Dc) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      Dc = !1;
    }
    (Ci = 0), (Jt = ct = ke = null), (Gl = !1), (Xs = kc = 0), (Yl = null);
  }
  function jn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Jt === null ? (ke.memoizedState = Jt = e) : (Jt = Jt.next = e), Jt;
  }
  function Zt() {
    if (ct === null) {
      var e = ke.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ct.next;
    var t = Jt === null ? ke.memoizedState : Jt.next;
    if (t !== null) (Jt = t), (ct = e);
    else {
      if (e === null)
        throw ke.alternate === null ? Error(i(467)) : Error(i(310));
      (ct = e),
        (e = {
          memoizedState: ct.memoizedState,
          baseState: ct.baseState,
          baseQueue: ct.baseQueue,
          queue: ct.queue,
          next: null,
        }),
        Jt === null ? (ke.memoizedState = Jt = e) : (Jt = Jt.next = e);
    }
    return Jt;
  }
  function Lc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Vs(e) {
    var t = Xs;
    return (
      (Xs += 1),
      Yl === null && (Yl = []),
      (e = Mg(Yl, e, t)),
      (t = ke),
      (Jt === null ? t.memoizedState : Jt.next) === null &&
        ((t = t.alternate),
        (U.H = t === null || t.memoizedState === null ? S0 : Md)),
      e
    );
  }
  function Hc(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Vs(e);
      if (e.$$typeof === R) return xn(e);
    }
    throw Error(i(438, String(e)));
  }
  function bd(e) {
    var t = null,
      a = ke.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var o = ke.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (t = {
              data: o.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = Lc()), (ke.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), o = 0; o < e; o++) a[o] = F;
    return t.index++, a;
  }
  function Ai(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Uc(e) {
    var t = Zt();
    return _d(t, ct, e);
  }
  function _d(e, t, a) {
    var o = e.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = a;
    var u = e.baseQueue,
      d = o.pending;
    if (d !== null) {
      if (u !== null) {
        var x = u.next;
        (u.next = d.next), (d.next = x);
      }
      (t.baseQueue = u = d), (o.pending = null);
    }
    if (((d = e.baseState), u === null)) e.memoizedState = d;
    else {
      t = u.next;
      var T = (x = null),
        M = null,
        q = t,
        J = !1;
      do {
        var $ = q.lane & -536870913;
        if ($ !== q.lane ? (Pe & $) === $ : (Ci & $) === $) {
          var V = q.revertLane;
          if (V === 0)
            M !== null &&
              (M = M.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: q.action,
                  hasEagerState: q.hasEagerState,
                  eagerState: q.eagerState,
                  next: null,
                }),
              $ === kl && (J = !0);
          else if ((Ci & V) === V) {
            (q = q.next), V === kl && (J = !0);
            continue;
          } else
            ($ = {
              lane: 0,
              revertLane: q.revertLane,
              gesture: null,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null,
            }),
              M === null ? ((T = M = $), (x = d)) : (M = M.next = $),
              (ke.lanes |= V),
              (lr |= V);
          ($ = q.action),
            Pr && a(d, $),
            (d = q.hasEagerState ? q.eagerState : a(d, $));
        } else
          (V = {
            lane: $,
            revertLane: q.revertLane,
            gesture: q.gesture,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null,
          }),
            M === null ? ((T = M = V), (x = d)) : (M = M.next = V),
            (ke.lanes |= $),
            (lr |= $);
        q = q.next;
      } while (q !== null && q !== t);
      if (
        (M === null ? (x = d) : (M.next = T),
        !sa(d, e.memoizedState) && ((Wt = !0), J && ((a = Ll), a !== null)))
      )
        throw a;
      (e.memoizedState = d),
        (e.baseState = x),
        (e.baseQueue = M),
        (o.lastRenderedState = d);
    }
    return u === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Sd(e) {
    var t = Zt(),
      a = t.queue;
    if (a === null) throw Error(i(311));
    a.lastRenderedReducer = e;
    var o = a.dispatch,
      u = a.pending,
      d = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var x = (u = u.next);
      do (d = e(d, x.action)), (x = x.next);
      while (x !== u);
      sa(d, t.memoizedState) || (Wt = !0),
        (t.memoizedState = d),
        t.baseQueue === null && (t.baseState = d),
        (a.lastRenderedState = d);
    }
    return [d, o];
  }
  function qg(e, t, a) {
    var o = ke,
      u = Zt(),
      d = Fe;
    if (d) {
      if (a === void 0) throw Error(i(407));
      a = a();
    } else a = t();
    var x = !sa((ct || u).memoizedState, a);
    if (
      (x && ((u.memoizedState = a), (Wt = !0)),
      (u = u.queue),
      Ed(Zg.bind(null, o, u, e), [e]),
      u.getSnapshot !== t || x || (Jt !== null && Jt.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        ql(9, { destroy: void 0 }, Vg.bind(null, o, u, a, t), null),
        ht === null)
      )
        throw Error(i(349));
      d || (Ci & 127) !== 0 || Xg(o, t, a);
    }
    return a;
  }
  function Xg(e, t, a) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = ke.updateQueue),
      t === null
        ? ((t = Lc()), (ke.updateQueue = t), (t.stores = [e]))
        : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e));
  }
  function Vg(e, t, a, o) {
    (t.value = a), (t.getSnapshot = o), Qg(t) && Pg(e);
  }
  function Zg(e, t, a) {
    return a(function () {
      Qg(t) && Pg(e);
    });
  }
  function Qg(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !sa(e, a);
    } catch {
      return !0;
    }
  }
  function Pg(e) {
    var t = Ur(e, 2);
    t !== null && Jn(t, e, 2);
  }
  function wd(e) {
    var t = jn();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), Pr)) {
        mn(!0);
        try {
          a();
        } finally {
          mn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ai,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Kg(e, t, a, o) {
    return (e.baseState = a), _d(e, ct, typeof o == "function" ? o : Ai);
  }
  function p2(e, t, a, o, u) {
    if (Yc(e)) throw Error(i(485));
    if (((e = t.action), e !== null)) {
      var d = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (x) {
          d.listeners.push(x);
        },
      };
      U.T !== null ? a(!0) : (d.isTransition = !1),
        o(d),
        (a = t.pending),
        a === null
          ? ((d.next = t.pending = d), Fg(t, d))
          : ((d.next = a.next), (t.pending = a.next = d));
    }
  }
  function Fg(e, t) {
    var a = t.action,
      o = t.payload,
      u = e.state;
    if (t.isTransition) {
      var d = U.T,
        x = {};
      U.T = x;
      try {
        var T = a(u, o),
          M = U.S;
        M !== null && M(x, T), Jg(e, t, T);
      } catch (q) {
        Td(e, t, q);
      } finally {
        d !== null && x.types !== null && (d.types = x.types), (U.T = d);
      }
    } else
      try {
        (d = a(u, o)), Jg(e, t, d);
      } catch (q) {
        Td(e, t, q);
      }
  }
  function Jg(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (o) {
            Wg(e, t, o);
          },
          function (o) {
            return Td(e, t, o);
          }
        )
      : Wg(e, t, a);
  }
  function Wg(e, t, a) {
    (t.status = "fulfilled"),
      (t.value = a),
      $g(t),
      (e.state = a),
      (t = e.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (e.pending = null) : ((a = a.next), (t.next = a), Fg(e, a)));
  }
  function Td(e, t, a) {
    var o = e.pending;
    if (((e.pending = null), o !== null)) {
      o = o.next;
      do (t.status = "rejected"), (t.reason = a), $g(t), (t = t.next);
      while (t !== o);
    }
    e.action = null;
  }
  function $g(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Ig(e, t) {
    return t;
  }
  function e0(e, t) {
    if (Fe) {
      var a = ht.formState;
      if (a !== null) {
        e: {
          var o = ke;
          if (Fe) {
            if (bt) {
              t: {
                for (var u = bt, d = Da; u.nodeType !== 8; ) {
                  if (!d) {
                    u = null;
                    break t;
                  }
                  if (((u = La(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (d = u.data), (u = d === "F!" || d === "F" ? u : null);
              }
              if (u) {
                (bt = La(u.nextSibling)), (o = u.data === "F!");
                break e;
              }
            }
            Wi(o);
          }
          o = !1;
        }
        o && (t = a[0]);
      }
    }
    return (
      (a = jn()),
      (a.memoizedState = a.baseState = t),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ig,
        lastRenderedState: t,
      }),
      (a.queue = o),
      (a = y0.bind(null, ke, o)),
      (o.dispatch = a),
      (o = wd(!1)),
      (d = Od.bind(null, ke, !1, o.queue)),
      (o = jn()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (o.queue = u),
      (a = p2.bind(null, ke, u, d, a)),
      (u.dispatch = a),
      (o.memoizedState = e),
      [t, a, !1]
    );
  }
  function t0(e) {
    var t = Zt();
    return n0(t, ct, e);
  }
  function n0(e, t, a) {
    if (
      ((t = _d(e, t, Ig)[0]),
      (e = Uc(Ai)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var o = Vs(t);
      } catch (x) {
        throw x === Hl ? Nc : x;
      }
    else o = t;
    t = Zt();
    var u = t.queue,
      d = u.dispatch;
    return (
      a !== t.memoizedState &&
        ((ke.flags |= 2048),
        ql(9, { destroy: void 0 }, m2.bind(null, u, a), null)),
      [o, d, e]
    );
  }
  function m2(e, t) {
    e.action = t;
  }
  function a0(e) {
    var t = Zt(),
      a = ct;
    if (a !== null) return n0(t, a, e);
    Zt(), (t = t.memoizedState), (a = Zt());
    var o = a.queue.dispatch;
    return (a.memoizedState = e), [t, o, !1];
  }
  function ql(e, t, a, o) {
    return (
      (e = { tag: e, create: a, deps: o, inst: t, next: null }),
      (t = ke.updateQueue),
      t === null && ((t = Lc()), (ke.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = e.next = e)
        : ((o = a.next), (a.next = e), (e.next = o), (t.lastEffect = e)),
      e
    );
  }
  function i0() {
    return Zt().memoizedState;
  }
  function Bc(e, t, a, o) {
    var u = jn();
    (ke.flags |= e),
      (u.memoizedState = ql(
        1 | t,
        { destroy: void 0 },
        a,
        o === void 0 ? null : o
      ));
  }
  function Gc(e, t, a, o) {
    var u = Zt();
    o = o === void 0 ? null : o;
    var d = u.memoizedState.inst;
    ct !== null && o !== null && md(o, ct.memoizedState.deps)
      ? (u.memoizedState = ql(t, d, a, o))
      : ((ke.flags |= e), (u.memoizedState = ql(1 | t, d, a, o)));
  }
  function r0(e, t) {
    Bc(8390656, 8, e, t);
  }
  function Ed(e, t) {
    Gc(2048, 8, e, t);
  }
  function g2(e) {
    ke.flags |= 4;
    var t = ke.updateQueue;
    if (t === null) (t = Lc()), (ke.updateQueue = t), (t.events = [e]);
    else {
      var a = t.events;
      a === null ? (t.events = [e]) : a.push(e);
    }
  }
  function l0(e) {
    var t = Zt().memoizedState;
    return (
      g2({ ref: t, nextImpl: e }),
      function () {
        if ((at & 2) !== 0) throw Error(i(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function s0(e, t) {
    return Gc(4, 2, e, t);
  }
  function o0(e, t) {
    return Gc(4, 4, e, t);
  }
  function c0(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function u0(e, t, a) {
    (a = a != null ? a.concat([e]) : null), Gc(4, 4, c0.bind(null, t, e), a);
  }
  function Cd() {}
  function f0(e, t) {
    var a = Zt();
    t = t === void 0 ? null : t;
    var o = a.memoizedState;
    return t !== null && md(t, o[1]) ? o[0] : ((a.memoizedState = [e, t]), e);
  }
  function d0(e, t) {
    var a = Zt();
    t = t === void 0 ? null : t;
    var o = a.memoizedState;
    if (t !== null && md(t, o[1])) return o[0];
    if (((o = e()), Pr)) {
      mn(!0);
      try {
        e();
      } finally {
        mn(!1);
      }
    }
    return (a.memoizedState = [o, t]), o;
  }
  function Ad(e, t, a) {
    return a === void 0 || ((Ci & 1073741824) !== 0 && (Pe & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = a), (e = h1()), (ke.lanes |= e), (lr |= e), a);
  }
  function h0(e, t, a, o) {
    return sa(a, t)
      ? a
      : Bl.current !== null
      ? ((e = Ad(e, a, o)), sa(e, t) || (Wt = !0), e)
      : (Ci & 42) === 0 || ((Ci & 1073741824) !== 0 && (Pe & 261930) === 0)
      ? ((Wt = !0), (e.memoizedState = a))
      : ((e = h1()), (ke.lanes |= e), (lr |= e), t);
  }
  function p0(e, t, a, o, u) {
    var d = Q.p;
    Q.p = d !== 0 && 8 > d ? d : 8;
    var x = U.T,
      T = {};
    (U.T = T), Od(e, !1, t, a);
    try {
      var M = u(),
        q = U.S;
      if (
        (q !== null && q(T, M),
        M !== null && typeof M == "object" && typeof M.then == "function")
      ) {
        var J = f2(M, o);
        Zs(e, t, J, ha(e));
      } else Zs(e, t, o, ha(e));
    } catch ($) {
      Zs(e, t, { then: function () {}, status: "rejected", reason: $ }, ha());
    } finally {
      (Q.p = d),
        x !== null && T.types !== null && (x.types = T.types),
        (U.T = x);
    }
  }
  function x2() {}
  function Nd(e, t, a, o) {
    if (e.tag !== 5) throw Error(i(476));
    var u = m0(e).queue;
    p0(
      e,
      u,
      t,
      te,
      a === null
        ? x2
        : function () {
            return g0(e), a(o);
          }
    );
  }
  function m0(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: te,
      baseState: te,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ai,
        lastRenderedState: te,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ai,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function g0(e) {
    var t = m0(e);
    t.next === null && (t = e.alternate.memoizedState),
      Zs(e, t.next.queue, {}, ha());
  }
  function Rd() {
    return xn(oo);
  }
  function x0() {
    return Zt().memoizedState;
  }
  function v0() {
    return Zt().memoizedState;
  }
  function v2(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = ha();
          e = er(a);
          var o = tr(t, e, a);
          o !== null && (Jn(o, t, a), Gs(o, t, a)),
            (t = { cache: id() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function y2(e, t, a) {
    var o = ha();
    (a = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Yc(e)
        ? b0(t, a)
        : ((a = Pf(e, t, a, o)), a !== null && (Jn(a, e, o), _0(a, t, o)));
  }
  function y0(e, t, a) {
    var o = ha();
    Zs(e, t, a, o);
  }
  function Zs(e, t, a, o) {
    var u = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Yc(e)) b0(t, u);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = t.lastRenderedReducer), d !== null)
      )
        try {
          var x = t.lastRenderedState,
            T = d(x, a);
          if (((u.hasEagerState = !0), (u.eagerState = T), sa(T, x)))
            return _c(e, t, u, 0), ht === null && bc(), !1;
        } catch {}
      if (((a = Pf(e, t, u, o)), a !== null))
        return Jn(a, e, o), _0(a, t, o), !0;
    }
    return !1;
  }
  function Od(e, t, a, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: oh(),
        gesture: null,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Yc(e))
    ) {
      if (t) throw Error(i(479));
    } else (t = Pf(e, a, o, 2)), t !== null && Jn(t, e, 2);
  }
  function Yc(e) {
    var t = e.alternate;
    return e === ke || (t !== null && t === ke);
  }
  function b0(e, t) {
    Gl = Dc = !0;
    var a = e.pending;
    a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (e.pending = t);
  }
  function _0(e, t, a) {
    if ((a & 4194048) !== 0) {
      var o = t.lanes;
      (o &= e.pendingLanes), (a |= o), (t.lanes = a), ze(e, a);
    }
  }
  var Qs = {
    readContext: xn,
    use: Hc,
    useCallback: Gt,
    useContext: Gt,
    useEffect: Gt,
    useImperativeHandle: Gt,
    useLayoutEffect: Gt,
    useInsertionEffect: Gt,
    useMemo: Gt,
    useReducer: Gt,
    useRef: Gt,
    useState: Gt,
    useDebugValue: Gt,
    useDeferredValue: Gt,
    useTransition: Gt,
    useSyncExternalStore: Gt,
    useId: Gt,
    useHostTransitionStatus: Gt,
    useFormState: Gt,
    useActionState: Gt,
    useOptimistic: Gt,
    useMemoCache: Gt,
    useCacheRefresh: Gt,
  };
  Qs.useEffectEvent = Gt;
  var S0 = {
      readContext: xn,
      use: Hc,
      useCallback: function (e, t) {
        return (jn().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: xn,
      useEffect: r0,
      useImperativeHandle: function (e, t, a) {
        (a = a != null ? a.concat([e]) : null),
          Bc(4194308, 4, c0.bind(null, t, e), a);
      },
      useLayoutEffect: function (e, t) {
        return Bc(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Bc(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var a = jn();
        t = t === void 0 ? null : t;
        var o = e();
        if (Pr) {
          mn(!0);
          try {
            e();
          } finally {
            mn(!1);
          }
        }
        return (a.memoizedState = [o, t]), o;
      },
      useReducer: function (e, t, a) {
        var o = jn();
        if (a !== void 0) {
          var u = a(t);
          if (Pr) {
            mn(!0);
            try {
              a(t);
            } finally {
              mn(!1);
            }
          }
        } else u = t;
        return (
          (o.memoizedState = o.baseState = u),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: u,
          }),
          (o.queue = e),
          (e = e.dispatch = y2.bind(null, ke, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = jn();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = wd(e);
        var t = e.queue,
          a = y0.bind(null, ke, t);
        return (t.dispatch = a), [e.memoizedState, a];
      },
      useDebugValue: Cd,
      useDeferredValue: function (e, t) {
        var a = jn();
        return Ad(a, e, t);
      },
      useTransition: function () {
        var e = wd(!1);
        return (
          (e = p0.bind(null, ke, e.queue, !0, !1)),
          (jn().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, a) {
        var o = ke,
          u = jn();
        if (Fe) {
          if (a === void 0) throw Error(i(407));
          a = a();
        } else {
          if (((a = t()), ht === null)) throw Error(i(349));
          (Pe & 127) !== 0 || Xg(o, t, a);
        }
        u.memoizedState = a;
        var d = { value: a, getSnapshot: t };
        return (
          (u.queue = d),
          r0(Zg.bind(null, o, d, e), [e]),
          (o.flags |= 2048),
          ql(9, { destroy: void 0 }, Vg.bind(null, o, d, a, t), null),
          a
        );
      },
      useId: function () {
        var e = jn(),
          t = ht.identifierPrefix;
        if (Fe) {
          var a = si,
            o = li;
          (a = (o & ~(1 << (32 - Ht(o) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = kc++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_");
        } else (a = d2++), (t = "_" + t + "r_" + a.toString(32) + "_");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Rd,
      useFormState: e0,
      useActionState: e0,
      useOptimistic: function (e) {
        var t = jn();
        t.memoizedState = t.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = Od.bind(null, ke, !0, a)),
          (a.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: bd,
      useCacheRefresh: function () {
        return (jn().memoizedState = v2.bind(null, ke));
      },
      useEffectEvent: function (e) {
        var t = jn(),
          a = { impl: e };
        return (
          (t.memoizedState = a),
          function () {
            if ((at & 2) !== 0) throw Error(i(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Md = {
      readContext: xn,
      use: Hc,
      useCallback: f0,
      useContext: xn,
      useEffect: Ed,
      useImperativeHandle: u0,
      useInsertionEffect: s0,
      useLayoutEffect: o0,
      useMemo: d0,
      useReducer: Uc,
      useRef: i0,
      useState: function () {
        return Uc(Ai);
      },
      useDebugValue: Cd,
      useDeferredValue: function (e, t) {
        var a = Zt();
        return h0(a, ct.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Uc(Ai)[0],
          t = Zt().memoizedState;
        return [typeof e == "boolean" ? e : Vs(e), t];
      },
      useSyncExternalStore: qg,
      useId: x0,
      useHostTransitionStatus: Rd,
      useFormState: t0,
      useActionState: t0,
      useOptimistic: function (e, t) {
        var a = Zt();
        return Kg(a, ct, e, t);
      },
      useMemoCache: bd,
      useCacheRefresh: v0,
    };
  Md.useEffectEvent = l0;
  var w0 = {
    readContext: xn,
    use: Hc,
    useCallback: f0,
    useContext: xn,
    useEffect: Ed,
    useImperativeHandle: u0,
    useInsertionEffect: s0,
    useLayoutEffect: o0,
    useMemo: d0,
    useReducer: Sd,
    useRef: i0,
    useState: function () {
      return Sd(Ai);
    },
    useDebugValue: Cd,
    useDeferredValue: function (e, t) {
      var a = Zt();
      return ct === null ? Ad(a, e, t) : h0(a, ct.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Sd(Ai)[0],
        t = Zt().memoizedState;
      return [typeof e == "boolean" ? e : Vs(e), t];
    },
    useSyncExternalStore: qg,
    useId: x0,
    useHostTransitionStatus: Rd,
    useFormState: a0,
    useActionState: a0,
    useOptimistic: function (e, t) {
      var a = Zt();
      return ct !== null
        ? Kg(a, ct, e, t)
        : ((a.baseState = e), [e, a.queue.dispatch]);
    },
    useMemoCache: bd,
    useCacheRefresh: v0,
  };
  w0.useEffectEvent = l0;
  function zd(e, t, a, o) {
    (t = e.memoizedState),
      (a = a(o, t)),
      (a = a == null ? t : v({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var jd = {
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var o = ha(),
        u = er(o);
      (u.payload = t),
        a != null && (u.callback = a),
        (t = tr(e, u, o)),
        t !== null && (Jn(t, e, o), Gs(t, e, o));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var o = ha(),
        u = er(o);
      (u.tag = 1),
        (u.payload = t),
        a != null && (u.callback = a),
        (t = tr(e, u, o)),
        t !== null && (Jn(t, e, o), Gs(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = ha(),
        o = er(a);
      (o.tag = 2),
        t != null && (o.callback = t),
        (t = tr(e, o, a)),
        t !== null && (Jn(t, e, a), Gs(t, e, a));
    },
  };
  function T0(e, t, a, o, u, d, x) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, d, x)
        : t.prototype && t.prototype.isPureReactComponent
        ? !zs(a, o) || !zs(u, d)
        : !0
    );
  }
  function E0(e, t, a, o) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, o),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, o),
      t.state !== e && jd.enqueueReplaceState(t, t.state, null);
  }
  function Kr(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var o in t) o !== "ref" && (a[o] = t[o]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = v({}, a));
      for (var u in e) a[u] === void 0 && (a[u] = e[u]);
    }
    return a;
  }
  function C0(e) {
    yc(e);
  }
  function A0(e) {
    console.error(e);
  }
  function N0(e) {
    yc(e);
  }
  function qc(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function R0(e, t, a) {
    try {
      var o = e.onCaughtError;
      o(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Dd(e, t, a) {
    return (
      (a = er(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        qc(e, t);
      }),
      a
    );
  }
  function O0(e) {
    return (e = er(e)), (e.tag = 3), e;
  }
  function M0(e, t, a, o) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = o.value;
      (e.payload = function () {
        return u(d);
      }),
        (e.callback = function () {
          R0(t, a, o);
        });
    }
    var x = a.stateNode;
    x !== null &&
      typeof x.componentDidCatch == "function" &&
      (e.callback = function () {
        R0(t, a, o),
          typeof u != "function" &&
            (sr === null ? (sr = new Set([this])) : sr.add(this));
        var T = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: T !== null ? T : "",
        });
      });
  }
  function b2(e, t, a, o, u) {
    if (
      ((a.flags |= 32768),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && Dl(t, a, u, !0),
        (a = ca.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              ka === null ? eu() : a.alternate === null && Yt === 0 && (Yt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              o === Rc
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([o])) : t.add(o),
                  rh(e, o, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              o === Rc
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([o]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([o])) : a.add(o)),
                  rh(e, o, u)),
              !1
            );
        }
        throw Error(i(435, a.tag));
      }
      return rh(e, o, u), eu(), !1;
    }
    if (Fe)
      return (
        (t = ca.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            o !== If && ((e = Error(i(422), { cause: o })), ks(Ma(e, a))))
          : (o !== If && ((t = Error(i(423), { cause: o })), ks(Ma(t, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (o = Ma(o, a)),
            (u = Dd(e.stateNode, o, u)),
            ud(e, u),
            Yt !== 4 && (Yt = 2)),
        !1
      );
    var d = Error(i(520), { cause: o });
    if (
      ((d = Ma(d, a)),
      eo === null ? (eo = [d]) : eo.push(d),
      Yt !== 4 && (Yt = 2),
      t === null)
    )
      return !0;
    (o = Ma(o, a)), (a = t);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = u & -u),
            (a.lanes |= e),
            (e = Dd(a.stateNode, o, e)),
            ud(a, e),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (d = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (d !== null &&
                  typeof d.componentDidCatch == "function" &&
                  (sr === null || !sr.has(d)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = O0(u)),
              M0(u, e, a, o),
              ud(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var kd = Error(i(461)),
    Wt = !1;
  function vn(e, t, a, o) {
    t.child = e === null ? kg(t, null, a, o) : Qr(t, e.child, a, o);
  }
  function z0(e, t, a, o, u) {
    a = a.render;
    var d = t.ref;
    if ("ref" in o) {
      var x = {};
      for (var T in o) T !== "ref" && (x[T] = o[T]);
    } else x = o;
    return (
      qr(t),
      (o = gd(e, t, a, x, d, u)),
      (T = xd()),
      e !== null && !Wt
        ? (vd(e, t, u), Ni(e, t, u))
        : (Fe && T && Wf(t), (t.flags |= 1), vn(e, t, o, u), t.child)
    );
  }
  function j0(e, t, a, o, u) {
    if (e === null) {
      var d = a.type;
      return typeof d == "function" &&
        !Kf(d) &&
        d.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = d), D0(e, t, d, o, u))
        : ((e = wc(a.type, null, o, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((d = e.child), !Xd(e, u))) {
      var x = d.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : zs), a(x, o) && e.ref === t.ref)
      )
        return Ni(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = Si(d, o)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function D0(e, t, a, o, u) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (zs(d, o) && e.ref === t.ref)
        if (((Wt = !1), (t.pendingProps = o = d), Xd(e, u)))
          (e.flags & 131072) !== 0 && (Wt = !0);
        else return (t.lanes = e.lanes), Ni(e, t, u);
    }
    return Ld(e, t, a, o, u);
  }
  function k0(e, t, a, o) {
    var u = o.children,
      d = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      o.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((d = d !== null ? d.baseLanes | a : a), e !== null)) {
          for (o = t.child = e.child, u = 0; o !== null; )
            (u = u | o.lanes | o.childLanes), (o = o.sibling);
          o = u & ~d;
        } else (o = 0), (t.child = null);
        return L0(e, t, d, a, o);
      }
      if ((a & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Ac(t, d !== null ? d.cachePool : null),
          d !== null ? Ug(t, d) : dd(),
          Bg(t);
      else
        return (
          (o = t.lanes = 536870912),
          L0(e, t, d !== null ? d.baseLanes | a : a, a, o)
        );
    } else
      d !== null
        ? (Ac(t, d.cachePool), Ug(t, d), ar(), (t.memoizedState = null))
        : (e !== null && Ac(t, null), dd(), ar());
    return vn(e, t, u, a), t.child;
  }
  function Ps(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function L0(e, t, a, o, u) {
    var d = ld();
    return (
      (d = d === null ? null : { parent: Ft._currentValue, pool: d }),
      (t.memoizedState = { baseLanes: a, cachePool: d }),
      e !== null && Ac(t, null),
      dd(),
      Bg(t),
      e !== null && Dl(e, t, o, !0),
      (t.childLanes = u),
      null
    );
  }
  function Xc(e, t) {
    return (
      (t = Zc({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function H0(e, t, a) {
    return (
      Qr(t, e.child, null, a),
      (e = Xc(t, t.pendingProps)),
      (e.flags |= 2),
      ua(t),
      (t.memoizedState = null),
      e
    );
  }
  function _2(e, t, a) {
    var o = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Fe) {
        if (o.mode === "hidden")
          return (e = Xc(t, o)), (t.lanes = 536870912), Ps(null, e);
        if (
          (pd(t),
          (e = bt)
            ? ((e = F1(e, Da)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Fi !== null ? { id: li, overflow: si } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = bg(e)),
                (a.return = t),
                (t.child = a),
                (gn = t),
                (bt = null)))
            : (e = null),
          e === null)
        )
          throw Wi(t);
        return (t.lanes = 536870912), null;
      }
      return Xc(t, o);
    }
    var d = e.memoizedState;
    if (d !== null) {
      var x = d.dehydrated;
      if ((pd(t), u))
        if (t.flags & 256) (t.flags &= -257), (t = H0(e, t, a));
        else if (t.memoizedState !== null)
          (t.child = e.child), (t.flags |= 128), (t = null);
        else throw Error(i(558));
      else if (
        (Wt || Dl(e, t, a, !1), (u = (a & e.childLanes) !== 0), Wt || u)
      ) {
        if (
          ((o = ht),
          o !== null && ((x = Te(o, a)), x !== 0 && x !== d.retryLane))
        )
          throw ((d.retryLane = x), Ur(e, x), Jn(o, e, x), kd);
        eu(), (t = H0(e, t, a));
      } else
        (e = d.treeContext),
          (bt = La(x.nextSibling)),
          (gn = t),
          (Fe = !0),
          (Ji = null),
          (Da = !1),
          e !== null && wg(t, e),
          (t = Xc(t, o)),
          (t.flags |= 4096);
      return t;
    }
    return (
      (e = Si(e.child, { mode: o.mode, children: o.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Vc(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(i(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Ld(e, t, a, o, u) {
    return (
      qr(t),
      (a = gd(e, t, a, o, void 0, u)),
      (o = xd()),
      e !== null && !Wt
        ? (vd(e, t, u), Ni(e, t, u))
        : (Fe && o && Wf(t), (t.flags |= 1), vn(e, t, a, u), t.child)
    );
  }
  function U0(e, t, a, o, u, d) {
    return (
      qr(t),
      (t.updateQueue = null),
      (a = Yg(t, o, a, u)),
      Gg(e),
      (o = xd()),
      e !== null && !Wt
        ? (vd(e, t, d), Ni(e, t, d))
        : (Fe && o && Wf(t), (t.flags |= 1), vn(e, t, a, d), t.child)
    );
  }
  function B0(e, t, a, o, u) {
    if ((qr(t), t.stateNode === null)) {
      var d = Ol,
        x = a.contextType;
      typeof x == "object" && x !== null && (d = xn(x)),
        (d = new a(o, d)),
        (t.memoizedState =
          d.state !== null && d.state !== void 0 ? d.state : null),
        (d.updater = jd),
        (t.stateNode = d),
        (d._reactInternals = t),
        (d = t.stateNode),
        (d.props = o),
        (d.state = t.memoizedState),
        (d.refs = {}),
        od(t),
        (x = a.contextType),
        (d.context = typeof x == "object" && x !== null ? xn(x) : Ol),
        (d.state = t.memoizedState),
        (x = a.getDerivedStateFromProps),
        typeof x == "function" && (zd(t, a, x, o), (d.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function" ||
          (typeof d.UNSAFE_componentWillMount != "function" &&
            typeof d.componentWillMount != "function") ||
          ((x = d.state),
          typeof d.componentWillMount == "function" && d.componentWillMount(),
          typeof d.UNSAFE_componentWillMount == "function" &&
            d.UNSAFE_componentWillMount(),
          x !== d.state && jd.enqueueReplaceState(d, d.state, null),
          qs(t, o, d, u),
          Ys(),
          (d.state = t.memoizedState)),
        typeof d.componentDidMount == "function" && (t.flags |= 4194308),
        (o = !0);
    } else if (e === null) {
      d = t.stateNode;
      var T = t.memoizedProps,
        M = Kr(a, T);
      d.props = M;
      var q = d.context,
        J = a.contextType;
      (x = Ol), typeof J == "object" && J !== null && (x = xn(J));
      var $ = a.getDerivedStateFromProps;
      (J =
        typeof $ == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function"),
        (T = t.pendingProps !== T),
        J ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((T || q !== x) && E0(t, d, o, x)),
        (Ii = !1);
      var V = t.memoizedState;
      (d.state = V),
        qs(t, o, d, u),
        Ys(),
        (q = t.memoizedState),
        T || V !== q || Ii
          ? (typeof $ == "function" && (zd(t, a, $, o), (q = t.memoizedState)),
            (M = Ii || T0(t, a, M, o, V, q, x))
              ? (J ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = q)),
            (d.props = o),
            (d.state = q),
            (d.context = x),
            (o = M))
          : (typeof d.componentDidMount == "function" && (t.flags |= 4194308),
            (o = !1));
    } else {
      (d = t.stateNode),
        cd(e, t),
        (x = t.memoizedProps),
        (J = Kr(a, x)),
        (d.props = J),
        ($ = t.pendingProps),
        (V = d.context),
        (q = a.contextType),
        (M = Ol),
        typeof q == "object" && q !== null && (M = xn(q)),
        (T = a.getDerivedStateFromProps),
        (q =
          typeof T == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function") ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((x !== $ || V !== M) && E0(t, d, o, M)),
        (Ii = !1),
        (V = t.memoizedState),
        (d.state = V),
        qs(t, o, d, u),
        Ys();
      var P = t.memoizedState;
      x !== $ ||
      V !== P ||
      Ii ||
      (e !== null && e.dependencies !== null && Ec(e.dependencies))
        ? (typeof T == "function" && (zd(t, a, T, o), (P = t.memoizedState)),
          (J =
            Ii ||
            T0(t, a, J, o, V, P, M) ||
            (e !== null && e.dependencies !== null && Ec(e.dependencies)))
            ? (q ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(o, P, M),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(o, P, M)),
              typeof d.componentDidUpdate == "function" && (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (x === e.memoizedProps && V === e.memoizedState) ||
                (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (x === e.memoizedProps && V === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = P)),
          (d.props = o),
          (d.state = P),
          (d.context = M),
          (o = J))
        : (typeof d.componentDidUpdate != "function" ||
            (x === e.memoizedProps && V === e.memoizedState) ||
            (t.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (x === e.memoizedProps && V === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return (
      (d = o),
      Vc(e, t),
      (o = (t.flags & 128) !== 0),
      d || o
        ? ((d = t.stateNode),
          (a =
            o && typeof a.getDerivedStateFromError != "function"
              ? null
              : d.render()),
          (t.flags |= 1),
          e !== null && o
            ? ((t.child = Qr(t, e.child, null, u)),
              (t.child = Qr(t, null, a, u)))
            : vn(e, t, a, u),
          (t.memoizedState = d.state),
          (e = t.child))
        : (e = Ni(e, t, u)),
      e
    );
  }
  function G0(e, t, a, o) {
    return Gr(), (t.flags |= 256), vn(e, t, a, o), t.child;
  }
  var Hd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Ud(e) {
    return { baseLanes: e, cachePool: Rg() };
  }
  function Bd(e, t, a) {
    return (e = e !== null ? e.childLanes & ~a : 0), t && (e |= da), e;
  }
  function Y0(e, t, a) {
    var o = t.pendingProps,
      u = !1,
      d = (t.flags & 128) !== 0,
      x;
    if (
      ((x = d) ||
        (x =
          e !== null && e.memoizedState === null ? !1 : (Vt.current & 2) !== 0),
      x && ((u = !0), (t.flags &= -129)),
      (x = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Fe) {
        if (
          (u ? nr(t) : ar(),
          (e = bt)
            ? ((e = F1(e, Da)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Fi !== null ? { id: li, overflow: si } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = bg(e)),
                (a.return = t),
                (t.child = a),
                (gn = t),
                (bt = null)))
            : (e = null),
          e === null)
        )
          throw Wi(t);
        return _h(e) ? (t.lanes = 32) : (t.lanes = 536870912), null;
      }
      var T = o.children;
      return (
        (o = o.fallback),
        u
          ? (ar(),
            (u = t.mode),
            (T = Zc({ mode: "hidden", children: T }, u)),
            (o = Br(o, u, a, null)),
            (T.return = t),
            (o.return = t),
            (T.sibling = o),
            (t.child = T),
            (o = t.child),
            (o.memoizedState = Ud(a)),
            (o.childLanes = Bd(e, x, a)),
            (t.memoizedState = Hd),
            Ps(null, o))
          : (nr(t), Gd(t, T))
      );
    }
    var M = e.memoizedState;
    if (M !== null && ((T = M.dehydrated), T !== null)) {
      if (d)
        t.flags & 256
          ? (nr(t), (t.flags &= -257), (t = Yd(e, t, a)))
          : t.memoizedState !== null
          ? (ar(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (ar(),
            (T = o.fallback),
            (u = t.mode),
            (o = Zc({ mode: "visible", children: o.children }, u)),
            (T = Br(T, u, a, null)),
            (T.flags |= 2),
            (o.return = t),
            (T.return = t),
            (o.sibling = T),
            (t.child = o),
            Qr(t, e.child, null, a),
            (o = t.child),
            (o.memoizedState = Ud(a)),
            (o.childLanes = Bd(e, x, a)),
            (t.memoizedState = Hd),
            (t = Ps(null, o)));
      else if ((nr(t), _h(T))) {
        if (((x = T.nextSibling && T.nextSibling.dataset), x)) var q = x.dgst;
        (x = q),
          (o = Error(i(419))),
          (o.stack = ""),
          (o.digest = x),
          ks({ value: o, source: null, stack: null }),
          (t = Yd(e, t, a));
      } else if (
        (Wt || Dl(e, t, a, !1), (x = (a & e.childLanes) !== 0), Wt || x)
      ) {
        if (
          ((x = ht),
          x !== null && ((o = Te(x, a)), o !== 0 && o !== M.retryLane))
        )
          throw ((M.retryLane = o), Ur(e, o), Jn(x, e, o), kd);
        bh(T) || eu(), (t = Yd(e, t, a));
      } else
        bh(T)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = M.treeContext),
            (bt = La(T.nextSibling)),
            (gn = t),
            (Fe = !0),
            (Ji = null),
            (Da = !1),
            e !== null && wg(t, e),
            (t = Gd(t, o.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (ar(),
        (T = o.fallback),
        (u = t.mode),
        (M = e.child),
        (q = M.sibling),
        (o = Si(M, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = M.subtreeFlags & 65011712),
        q !== null ? (T = Si(q, T)) : ((T = Br(T, u, a, null)), (T.flags |= 2)),
        (T.return = t),
        (o.return = t),
        (o.sibling = T),
        (t.child = o),
        Ps(null, o),
        (o = t.child),
        (T = e.child.memoizedState),
        T === null
          ? (T = Ud(a))
          : ((u = T.cachePool),
            u !== null
              ? ((M = Ft._currentValue),
                (u = u.parent !== M ? { parent: M, pool: M } : u))
              : (u = Rg()),
            (T = { baseLanes: T.baseLanes | a, cachePool: u })),
        (o.memoizedState = T),
        (o.childLanes = Bd(e, x, a)),
        (t.memoizedState = Hd),
        Ps(e.child, o))
      : (nr(t),
        (a = e.child),
        (e = a.sibling),
        (a = Si(a, { mode: "visible", children: o.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null &&
          ((x = t.deletions),
          x === null ? ((t.deletions = [e]), (t.flags |= 16)) : x.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function Gd(e, t) {
    return (
      (t = Zc({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Zc(e, t) {
    return (e = oa(22, e, null, t)), (e.lanes = 0), e;
  }
  function Yd(e, t, a) {
    return (
      Qr(t, e.child, null, a),
      (e = Gd(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function q0(e, t, a) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), nd(e.return, t, a);
  }
  function qd(e, t, a, o, u, d) {
    var x = e.memoizedState;
    x === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: a,
          tailMode: u,
          treeForkCount: d,
        })
      : ((x.isBackwards = t),
        (x.rendering = null),
        (x.renderingStartTime = 0),
        (x.last = o),
        (x.tail = a),
        (x.tailMode = u),
        (x.treeForkCount = d));
  }
  function X0(e, t, a) {
    var o = t.pendingProps,
      u = o.revealOrder,
      d = o.tail;
    o = o.children;
    var x = Vt.current,
      T = (x & 2) !== 0;
    if (
      (T ? ((x = (x & 1) | 2), (t.flags |= 128)) : (x &= 1),
      ne(Vt, x),
      vn(e, t, o, a),
      (o = Fe ? Ds : 0),
      !T && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && q0(e, a, t);
        else if (e.tag === 19) q0(e, a, t);
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
    switch (u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          (e = a.alternate),
            e !== null && jc(e) === null && (u = a),
            (a = a.sibling);
        (a = u),
          a === null
            ? ((u = t.child), (t.child = null))
            : ((u = a.sibling), (a.sibling = null)),
          qd(t, !1, u, a, d, o);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && jc(e) === null)) {
            t.child = u;
            break;
          }
          (e = u.sibling), (u.sibling = a), (a = u), (u = e);
        }
        qd(t, !0, a, null, d, o);
        break;
      case "together":
        qd(t, !1, null, null, void 0, o);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ni(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (lr |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Dl(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        e = t.child, a = Si(e, e.pendingProps), t.child = a, a.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (a = a.sibling = Si(e, e.pendingProps)),
          (a.return = t);
      a.sibling = null;
    }
    return t.child;
  }
  function Xd(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Ec(e)));
  }
  function S2(e, t, a) {
    switch (t.tag) {
      case 3:
        ae(t, t.stateNode.containerInfo),
          $i(t, Ft, e.memoizedState.cache),
          Gr();
        break;
      case 27:
      case 5:
        Ce(t);
        break;
      case 4:
        ae(t, t.stateNode.containerInfo);
        break;
      case 10:
        $i(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return (t.flags |= 128), pd(t), null;
        break;
      case 13:
        var o = t.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (nr(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
            ? Y0(e, t, a)
            : (nr(t), (e = Ni(e, t, a)), e !== null ? e.sibling : null);
        nr(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((o = (a & t.childLanes) !== 0),
          o || (Dl(e, t, a, !1), (o = (a & t.childLanes) !== 0)),
          u)
        ) {
          if (o) return X0(e, t, a);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          ne(Vt, Vt.current),
          o)
        )
          break;
        return null;
      case 22:
        return (t.lanes = 0), k0(e, t, a, t.pendingProps);
      case 24:
        $i(t, Ft, e.memoizedState.cache);
    }
    return Ni(e, t, a);
  }
  function V0(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Wt = !0;
      else {
        if (!Xd(e, a) && (t.flags & 128) === 0) return (Wt = !1), S2(e, t, a);
        Wt = (e.flags & 131072) !== 0;
      }
    else (Wt = !1), Fe && (t.flags & 1048576) !== 0 && Sg(t, Ds, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var o = t.pendingProps;
          if (((e = Vr(t.elementType)), (t.type = e), typeof e == "function"))
            Kf(e)
              ? ((o = Kr(e, o)), (t.tag = 1), (t = B0(null, t, e, o, a)))
              : ((t.tag = 0), (t = Ld(null, t, e, o, a)));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === D) {
                (t.tag = 11), (t = z0(null, t, e, o, a));
                break e;
              } else if (u === z) {
                (t.tag = 14), (t = j0(null, t, e, o, a));
                break e;
              }
            }
            throw ((t = de(e) || e), Error(i(306, t, "")));
          }
        }
        return t;
      case 0:
        return Ld(e, t, t.type, t.pendingProps, a);
      case 1:
        return (o = t.type), (u = Kr(o, t.pendingProps)), B0(e, t, o, u, a);
      case 3:
        e: {
          if ((ae(t, t.stateNode.containerInfo), e === null))
            throw Error(i(387));
          o = t.pendingProps;
          var d = t.memoizedState;
          (u = d.element), cd(e, t), qs(t, o, null, a);
          var x = t.memoizedState;
          if (
            ((o = x.cache),
            $i(t, Ft, o),
            o !== d.cache && ad(t, [Ft], a, !0),
            Ys(),
            (o = x.element),
            d.isDehydrated)
          )
            if (
              ((d = { element: o, isDehydrated: !1, cache: x.cache }),
              (t.updateQueue.baseState = d),
              (t.memoizedState = d),
              t.flags & 256)
            ) {
              t = G0(e, t, o, a);
              break e;
            } else if (o !== u) {
              (u = Ma(Error(i(424)), t)), ks(u), (t = G0(e, t, o, a));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  bt = La(e.firstChild),
                  gn = t,
                  Fe = !0,
                  Ji = null,
                  Da = !0,
                  a = kg(t, null, o, a),
                  t.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
          else {
            if ((Gr(), o === u)) {
              t = Ni(e, t, a);
              break e;
            }
            vn(e, t, o, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Vc(e, t),
          e === null
            ? (a = tx(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : Fe ||
                ((a = t.type),
                (e = t.pendingProps),
                (o = su(oe.current).createElement(a)),
                (o[He] = t),
                (o[Ue] = e),
                yn(o, a, e),
                qe(o),
                (t.stateNode = o))
            : (t.memoizedState = tx(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          Ce(t),
          e === null &&
            Fe &&
            ((o = t.stateNode = $1(t.type, t.pendingProps, oe.current)),
            (gn = t),
            (Da = !0),
            (u = bt),
            fr(t.type) ? ((Sh = u), (bt = La(o.firstChild))) : (bt = u)),
          vn(e, t, t.pendingProps.children, a),
          Vc(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Fe &&
            ((u = o = bt) &&
              ((o = $2(o, t.type, t.pendingProps, Da)),
              o !== null
                ? ((t.stateNode = o),
                  (gn = t),
                  (bt = La(o.firstChild)),
                  (Da = !1),
                  (u = !0))
                : (u = !1)),
            u || Wi(t)),
          Ce(t),
          (u = t.type),
          (d = t.pendingProps),
          (x = e !== null ? e.memoizedProps : null),
          (o = d.children),
          xh(u, d) ? (o = null) : x !== null && xh(u, x) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = gd(e, t, h2, null, null, a)), (oo._currentValue = u)),
          Vc(e, t),
          vn(e, t, o, a),
          t.child
        );
      case 6:
        return (
          e === null &&
            Fe &&
            ((e = a = bt) &&
              ((a = I2(a, t.pendingProps, Da)),
              a !== null
                ? ((t.stateNode = a), (gn = t), (bt = null), (e = !0))
                : (e = !1)),
            e || Wi(t)),
          null
        );
      case 13:
        return Y0(e, t, a);
      case 4:
        return (
          ae(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = Qr(t, null, o, a)) : vn(e, t, o, a),
          t.child
        );
      case 11:
        return z0(e, t, t.type, t.pendingProps, a);
      case 7:
        return vn(e, t, t.pendingProps, a), t.child;
      case 8:
        return vn(e, t, t.pendingProps.children, a), t.child;
      case 12:
        return vn(e, t, t.pendingProps.children, a), t.child;
      case 10:
        return (
          (o = t.pendingProps),
          $i(t, t.type, o.value),
          vn(e, t, o.children, a),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (o = t.pendingProps.children),
          qr(t),
          (u = xn(u)),
          (o = o(u)),
          (t.flags |= 1),
          vn(e, t, o, a),
          t.child
        );
      case 14:
        return j0(e, t, t.type, t.pendingProps, a);
      case 15:
        return D0(e, t, t.type, t.pendingProps, a);
      case 19:
        return X0(e, t, a);
      case 31:
        return _2(e, t, a);
      case 22:
        return k0(e, t, a, t.pendingProps);
      case 24:
        return (
          qr(t),
          (o = xn(Ft)),
          e === null
            ? ((u = ld()),
              u === null &&
                ((u = ht),
                (d = id()),
                (u.pooledCache = d),
                d.refCount++,
                d !== null && (u.pooledCacheLanes |= a),
                (u = d)),
              (t.memoizedState = { parent: o, cache: u }),
              od(t),
              $i(t, Ft, u))
            : ((e.lanes & a) !== 0 && (cd(e, t), qs(t, null, null, a), Ys()),
              (u = e.memoizedState),
              (d = t.memoizedState),
              u.parent !== o
                ? ((u = { parent: o, cache: o }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  $i(t, Ft, o))
                : ((o = d.cache),
                  $i(t, Ft, o),
                  o !== u.cache && ad(t, [Ft], a, !0))),
          vn(e, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function Ri(e) {
    e.flags |= 4;
  }
  function Vd(e, t, a, o, u) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (u & 335544128) === u))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (x1()) e.flags |= 8192;
        else throw ((Zr = Rc), sd);
    } else e.flags &= -16777217;
  }
  function Z0(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !lx(t)))
      if (x1()) e.flags |= 8192;
      else throw ((Zr = Rc), sd);
  }
  function Qc(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? ni() : 536870912), (e.lanes |= t), (Ql |= t));
  }
  function Ks(e, t) {
    if (!Fe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), (t = t.sibling);
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var o = null; a !== null; )
            a.alternate !== null && (o = a), (a = a.sibling);
          o === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function _t(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      o = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (a |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags & 65011712),
          (o |= u.flags & 65011712),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (a |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags),
          (o |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= o), (e.childLanes = a), t;
  }
  function w2(e, t, a) {
    var o = t.pendingProps;
    switch (($f(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _t(t), null;
      case 1:
        return _t(t), null;
      case 3:
        return (
          (a = t.stateNode),
          (o = null),
          e !== null && (o = e.memoizedState.cache),
          t.memoizedState.cache !== o && (t.flags |= 2048),
          Ei(Ft),
          ie(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (jl(t)
              ? Ri(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ed())),
          _t(t),
          null
        );
      case 26:
        var u = t.type,
          d = t.memoizedState;
        return (
          e === null
            ? (Ri(t),
              d !== null ? (_t(t), Z0(t, d)) : (_t(t), Vd(t, u, null, o, a)))
            : d
            ? d !== e.memoizedState
              ? (Ri(t), _t(t), Z0(t, d))
              : (_t(t), (t.flags &= -16777217))
            : ((e = e.memoizedProps),
              e !== o && Ri(t),
              _t(t),
              Vd(t, u, e, o, a)),
          null
        );
      case 27:
        if (
          (be(t),
          (a = oe.current),
          (u = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== o && Ri(t);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(i(166));
            return _t(t), null;
          }
          (e = ee.current),
            jl(t) ? Tg(t) : ((e = $1(u, o, a)), (t.stateNode = e), Ri(t));
        }
        return _t(t), null;
      case 5:
        if ((be(t), (u = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== o && Ri(t);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(i(166));
            return _t(t), null;
          }
          if (((d = ee.current), jl(t))) Tg(t);
          else {
            var x = su(oe.current);
            switch (d) {
              case 1:
                d = x.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                d = x.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    d = x.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    d = x.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    (d = x.createElement("div")),
                      (d.innerHTML = "<script></script>"),
                      (d = d.removeChild(d.firstChild));
                    break;
                  case "select":
                    (d =
                      typeof o.is == "string"
                        ? x.createElement("select", { is: o.is })
                        : x.createElement("select")),
                      o.multiple
                        ? (d.multiple = !0)
                        : o.size && (d.size = o.size);
                    break;
                  default:
                    d =
                      typeof o.is == "string"
                        ? x.createElement(u, { is: o.is })
                        : x.createElement(u);
                }
            }
            (d[He] = t), (d[Ue] = o);
            e: for (x = t.child; x !== null; ) {
              if (x.tag === 5 || x.tag === 6) d.appendChild(x.stateNode);
              else if (x.tag !== 4 && x.tag !== 27 && x.child !== null) {
                (x.child.return = x), (x = x.child);
                continue;
              }
              if (x === t) break e;
              for (; x.sibling === null; ) {
                if (x.return === null || x.return === t) break e;
                x = x.return;
              }
              (x.sibling.return = x.return), (x = x.sibling);
            }
            t.stateNode = d;
            e: switch ((yn(d, u, o), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break e;
              case "img":
                o = !0;
                break e;
              default:
                o = !1;
            }
            o && Ri(t);
          }
        }
        return (
          _t(t),
          Vd(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== o && Ri(t);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(i(166));
          if (((e = oe.current), jl(t))) {
            if (
              ((e = t.stateNode),
              (a = t.memoizedProps),
              (o = null),
              (u = gn),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  o = u.memoizedProps;
              }
            (e[He] = t),
              (e = !!(
                e.nodeValue === a ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                Y1(e.nodeValue, a)
              )),
              e || Wi(t, !0);
          } else (e = su(e).createTextNode(o)), (e[He] = t), (t.stateNode = e);
        }
        return _t(t), null;
      case 31:
        if (((a = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((o = jl(t)), a !== null)) {
            if (e === null) {
              if (!o) throw Error(i(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(i(557));
              e[He] = t;
            } else
              Gr(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            _t(t), (e = !1);
          } else
            (a = ed()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = a),
              (e = !0);
          if (!e) return t.flags & 256 ? (ua(t), t) : (ua(t), null);
          if ((t.flags & 128) !== 0) throw Error(i(558));
        }
        return _t(t), null;
      case 13:
        if (
          ((o = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = jl(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(i(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(i(317));
              u[He] = t;
            } else
              Gr(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            _t(t), (u = !1);
          } else
            (u = ed()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return t.flags & 256 ? (ua(t), t) : (ua(t), null);
        }
        return (
          ua(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = o !== null),
              (e = e !== null && e.memoizedState !== null),
              a &&
                ((o = t.child),
                (u = null),
                o.alternate !== null &&
                  o.alternate.memoizedState !== null &&
                  o.alternate.memoizedState.cachePool !== null &&
                  (u = o.alternate.memoizedState.cachePool.pool),
                (d = null),
                o.memoizedState !== null &&
                  o.memoizedState.cachePool !== null &&
                  (d = o.memoizedState.cachePool.pool),
                d !== u && (o.flags |= 2048)),
              a !== e && a && (t.child.flags |= 8192),
              Qc(t, t.updateQueue),
              _t(t),
              null)
        );
      case 4:
        return ie(), e === null && dh(t.stateNode.containerInfo), _t(t), null;
      case 10:
        return Ei(t.type), _t(t), null;
      case 19:
        if ((K(Vt), (o = t.memoizedState), o === null)) return _t(t), null;
        if (((u = (t.flags & 128) !== 0), (d = o.rendering), d === null))
          if (u) Ks(o, !1);
          else {
            if (Yt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((d = jc(e)), d !== null)) {
                  for (
                    t.flags |= 128,
                      Ks(o, !1),
                      e = d.updateQueue,
                      t.updateQueue = e,
                      Qc(t, e),
                      t.subtreeFlags = 0,
                      e = a,
                      a = t.child;
                    a !== null;

                  )
                    yg(a, e), (a = a.sibling);
                  return (
                    ne(Vt, (Vt.current & 1) | 2),
                    Fe && wi(t, o.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            o.tail !== null &&
              wt() > Wc &&
              ((t.flags |= 128), (u = !0), Ks(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = jc(d)), e !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Qc(t, e),
                Ks(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !d.alternate &&
                  !Fe)
              )
                return _t(t), null;
            } else
              2 * wt() - o.renderingStartTime > Wc &&
                a !== 536870912 &&
                ((t.flags |= 128), (u = !0), Ks(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((d.sibling = t.child), (t.child = d))
            : ((e = o.last),
              e !== null ? (e.sibling = d) : (t.child = d),
              (o.last = d));
        }
        return o.tail !== null
          ? ((e = o.tail),
            (o.rendering = e),
            (o.tail = e.sibling),
            (o.renderingStartTime = wt()),
            (e.sibling = null),
            (a = Vt.current),
            ne(Vt, u ? (a & 1) | 2 : a & 1),
            Fe && wi(t, o.treeForkCount),
            e)
          : (_t(t), null);
      case 22:
      case 23:
        return (
          ua(t),
          hd(),
          (o = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== o && (t.flags |= 8192)
            : o && (t.flags |= 8192),
          o
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : _t(t),
          (a = t.updateQueue),
          a !== null && Qc(t, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (o = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (o = t.memoizedState.cachePool.pool),
          o !== a && (t.flags |= 2048),
          e !== null && K(Xr),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Ei(Ft),
          _t(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function T2(e, t) {
    switch (($f(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Ei(Ft),
          ie(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return be(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ((ua(t), t.alternate === null)) throw Error(i(340));
          Gr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (ua(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          Gr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return K(Vt), null;
      case 4:
        return ie(), null;
      case 10:
        return Ei(t.type), null;
      case 22:
      case 23:
        return (
          ua(t),
          hd(),
          e !== null && K(Xr),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return Ei(Ft), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Q0(e, t) {
    switch (($f(t), t.tag)) {
      case 3:
        Ei(Ft), ie();
        break;
      case 26:
      case 27:
      case 5:
        be(t);
        break;
      case 4:
        ie();
        break;
      case 31:
        t.memoizedState !== null && ua(t);
        break;
      case 13:
        ua(t);
        break;
      case 19:
        K(Vt);
        break;
      case 10:
        Ei(t.type);
        break;
      case 22:
      case 23:
        ua(t), hd(), e !== null && K(Xr);
        break;
      case 24:
        Ei(Ft);
    }
  }
  function Fs(e, t) {
    try {
      var a = t.updateQueue,
        o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            o = void 0;
            var d = a.create,
              x = a.inst;
            (o = d()), (x.destroy = o);
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (T) {
      lt(t, t.return, T);
    }
  }
  function ir(e, t, a) {
    try {
      var o = t.updateQueue,
        u = o !== null ? o.lastEffect : null;
      if (u !== null) {
        var d = u.next;
        o = d;
        do {
          if ((o.tag & e) === e) {
            var x = o.inst,
              T = x.destroy;
            if (T !== void 0) {
              (x.destroy = void 0), (u = t);
              var M = a,
                q = T;
              try {
                q();
              } catch (J) {
                lt(u, M, J);
              }
            }
          }
          o = o.next;
        } while (o !== d);
      }
    } catch (J) {
      lt(t, t.return, J);
    }
  }
  function P0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Hg(t, a);
      } catch (o) {
        lt(e, e.return, o);
      }
    }
  }
  function K0(e, t, a) {
    (a.props = Kr(e.type, e.memoizedProps)), (a.state = e.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (o) {
      lt(e, t, o);
    }
  }
  function Js(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof a == "function" ? (e.refCleanup = a(o)) : (a.current = o);
      }
    } catch (u) {
      lt(e, t, u);
    }
  }
  function oi(e, t) {
    var a = e.ref,
      o = e.refCleanup;
    if (a !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (u) {
          lt(e, t, u);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          lt(e, t, u);
        }
      else a.current = null;
  }
  function F0(e) {
    var t = e.type,
      a = e.memoizedProps,
      o = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && o.focus();
          break e;
        case "img":
          a.src ? (o.src = a.src) : a.srcSet && (o.srcset = a.srcSet);
      }
    } catch (u) {
      lt(e, e.return, u);
    }
  }
  function Zd(e, t, a) {
    try {
      var o = e.stateNode;
      Q2(o, e.type, a, t), (o[Ue] = t);
    } catch (u) {
      lt(e, e.return, u);
    }
  }
  function J0(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && fr(e.type)) ||
      e.tag === 4
    );
  }
  function Qd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || J0(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && fr(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Pd(e, t, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
              ? a.ownerDocument.body
              : a
            ).insertBefore(e, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a),
            t.appendChild(e),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = bi));
    else if (
      o !== 4 &&
      (o === 27 && fr(e.type) && ((a = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Pd(e, t, a), e = e.sibling; e !== null; )
        Pd(e, t, a), (e = e.sibling);
  }
  function Pc(e, t, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (
      o !== 4 &&
      (o === 27 && fr(e.type) && (a = e.stateNode), (e = e.child), e !== null)
    )
      for (Pc(e, t, a), e = e.sibling; e !== null; )
        Pc(e, t, a), (e = e.sibling);
  }
  function W0(e) {
    var t = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var o = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      yn(t, o, a), (t[He] = e), (t[Ue] = a);
    } catch (d) {
      lt(e, e.return, d);
    }
  }
  var Oi = !1,
    $t = !1,
    Kd = !1,
    $0 = typeof WeakSet == "function" ? WeakSet : Set,
    fn = null;
  function E2(e, t) {
    if (((e = e.containerInfo), (mh = pu), (e = ug(e)), Yf(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var o = a.getSelection && a.getSelection();
          if (o && o.rangeCount !== 0) {
            a = o.anchorNode;
            var u = o.anchorOffset,
              d = o.focusNode;
            o = o.focusOffset;
            try {
              a.nodeType, d.nodeType;
            } catch {
              a = null;
              break e;
            }
            var x = 0,
              T = -1,
              M = -1,
              q = 0,
              J = 0,
              $ = e,
              V = null;
            t: for (;;) {
              for (
                var P;
                $ !== a || (u !== 0 && $.nodeType !== 3) || (T = x + u),
                  $ !== d || (o !== 0 && $.nodeType !== 3) || (M = x + o),
                  $.nodeType === 3 && (x += $.nodeValue.length),
                  (P = $.firstChild) !== null;

              )
                (V = $), ($ = P);
              for (;;) {
                if ($ === e) break t;
                if (
                  (V === a && ++q === u && (T = x),
                  V === d && ++J === o && (M = x),
                  (P = $.nextSibling) !== null)
                )
                  break;
                ($ = V), (V = $.parentNode);
              }
              $ = P;
            }
            a = T === -1 || M === -1 ? null : { start: T, end: M };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      gh = { focusedElem: e, selectionRange: a }, pu = !1, fn = t;
      fn !== null;

    )
      if (
        ((t = fn), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (fn = e);
      else
        for (; fn !== null; ) {
          switch (((t = fn), (d = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (a = 0; a < e.length; a++)
                  (u = e[a]), (u.ref.impl = u.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && d !== null) {
                (e = void 0),
                  (a = t),
                  (u = d.memoizedProps),
                  (d = d.memoizedState),
                  (o = a.stateNode);
                try {
                  var ve = Kr(a.type, u);
                  (e = o.getSnapshotBeforeUpdate(ve, d)),
                    (o.__reactInternalSnapshotBeforeUpdate = e);
                } catch (Ae) {
                  lt(a, a.return, Ae);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  yh(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      yh(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(i(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (fn = e);
            break;
          }
          fn = t.return;
        }
  }
  function I0(e, t, a) {
    var o = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        zi(e, a), o & 4 && Fs(5, a);
        break;
      case 1:
        if ((zi(e, a), o & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (x) {
              lt(a, a.return, x);
            }
          else {
            var u = Kr(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (x) {
              lt(a, a.return, x);
            }
          }
        o & 64 && P0(a), o & 512 && Js(a, a.return);
        break;
      case 3:
        if ((zi(e, a), o & 64 && ((e = a.updateQueue), e !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Hg(e, t);
          } catch (x) {
            lt(a, a.return, x);
          }
        }
        break;
      case 27:
        t === null && o & 4 && W0(a);
      case 26:
      case 5:
        zi(e, a), t === null && o & 4 && F0(a), o & 512 && Js(a, a.return);
        break;
      case 12:
        zi(e, a);
        break;
      case 31:
        zi(e, a), o & 4 && n1(e, a);
        break;
      case 13:
        zi(e, a),
          o & 4 && a1(e, a),
          o & 64 &&
            ((e = a.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((a = D2.bind(null, a)), eS(e, a))));
        break;
      case 22:
        if (((o = a.memoizedState !== null || Oi), !o)) {
          (t = (t !== null && t.memoizedState !== null) || $t), (u = Oi);
          var d = $t;
          (Oi = o),
            ($t = t) && !d ? ji(e, a, (a.subtreeFlags & 8772) !== 0) : zi(e, a),
            (Oi = u),
            ($t = d);
        }
        break;
      case 30:
        break;
      default:
        zi(e, a);
    }
  }
  function e1(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), e1(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Xt(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Et = null,
    Qn = !1;
  function Mi(e, t, a) {
    for (a = a.child; a !== null; ) t1(e, t, a), (a = a.sibling);
  }
  function t1(e, t, a) {
    if (xt && typeof xt.onCommitFiberUnmount == "function")
      try {
        xt.onCommitFiberUnmount(Rn, a);
      } catch {}
    switch (a.tag) {
      case 26:
        $t || oi(a, t),
          Mi(e, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        $t || oi(a, t);
        var o = Et,
          u = Qn;
        fr(a.type) && ((Et = a.stateNode), (Qn = !1)),
          Mi(e, t, a),
          ro(a.stateNode),
          (Et = o),
          (Qn = u);
        break;
      case 5:
        $t || oi(a, t);
      case 6:
        if (
          ((o = Et),
          (u = Qn),
          (Et = null),
          Mi(e, t, a),
          (Et = o),
          (Qn = u),
          Et !== null)
        )
          if (Qn)
            try {
              (Et.nodeType === 9
                ? Et.body
                : Et.nodeName === "HTML"
                ? Et.ownerDocument.body
                : Et
              ).removeChild(a.stateNode);
            } catch (d) {
              lt(a, t, d);
            }
          else
            try {
              Et.removeChild(a.stateNode);
            } catch (d) {
              lt(a, t, d);
            }
        break;
      case 18:
        Et !== null &&
          (Qn
            ? ((e = Et),
              P1(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                a.stateNode
              ),
              es(e))
            : P1(Et, a.stateNode));
        break;
      case 4:
        (o = Et),
          (u = Qn),
          (Et = a.stateNode.containerInfo),
          (Qn = !0),
          Mi(e, t, a),
          (Et = o),
          (Qn = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ir(2, a, t), $t || ir(4, a, t), Mi(e, t, a);
        break;
      case 1:
        $t ||
          (oi(a, t),
          (o = a.stateNode),
          typeof o.componentWillUnmount == "function" && K0(a, t, o)),
          Mi(e, t, a);
        break;
      case 21:
        Mi(e, t, a);
        break;
      case 22:
        ($t = (o = $t) || a.memoizedState !== null), Mi(e, t, a), ($t = o);
        break;
      default:
        Mi(e, t, a);
    }
  }
  function n1(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        es(e);
      } catch (a) {
        lt(t, t.return, a);
      }
    }
  }
  function a1(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        es(e);
      } catch (a) {
        lt(t, t.return, a);
      }
  }
  function C2(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new $0()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new $0()),
          t
        );
      default:
        throw Error(i(435, e.tag));
    }
  }
  function Kc(e, t) {
    var a = C2(e);
    t.forEach(function (o) {
      if (!a.has(o)) {
        a.add(o);
        var u = k2.bind(null, e, o);
        o.then(u, u);
      }
    });
  }
  function Pn(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var u = a[o],
          d = e,
          x = t,
          T = x;
        e: for (; T !== null; ) {
          switch (T.tag) {
            case 27:
              if (fr(T.type)) {
                (Et = T.stateNode), (Qn = !1);
                break e;
              }
              break;
            case 5:
              (Et = T.stateNode), (Qn = !1);
              break e;
            case 3:
            case 4:
              (Et = T.stateNode.containerInfo), (Qn = !0);
              break e;
          }
          T = T.return;
        }
        if (Et === null) throw Error(i(160));
        t1(d, x, u),
          (Et = null),
          (Qn = !1),
          (d = u.alternate),
          d !== null && (d.return = null),
          (u.return = null);
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) i1(t, e), (t = t.sibling);
  }
  var Ja = null;
  function i1(e, t) {
    var a = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pn(t, e),
          Kn(e),
          o & 4 && (ir(3, e, e.return), Fs(3, e), ir(5, e, e.return));
        break;
      case 1:
        Pn(t, e),
          Kn(e),
          o & 512 && ($t || a === null || oi(a, a.return)),
          o & 64 &&
            Oi &&
            ((e = e.updateQueue),
            e !== null &&
              ((o = e.callbacks),
              o !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? o : a.concat(o)))));
        break;
      case 26:
        var u = Ja;
        if (
          (Pn(t, e),
          Kn(e),
          o & 512 && ($t || a === null || oi(a, a.return)),
          o & 4)
        ) {
          var d = a !== null ? a.memoizedState : null;
          if (((o = e.memoizedState), a === null))
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  (o = e.type),
                    (a = e.memoizedProps),
                    (u = u.ownerDocument || u);
                  t: switch (o) {
                    case "title":
                      (d = u.getElementsByTagName("title")[0]),
                        (!d ||
                          d[Nt] ||
                          d[He] ||
                          d.namespaceURI === "http://www.w3.org/2000/svg" ||
                          d.hasAttribute("itemprop")) &&
                          ((d = u.createElement(o)),
                          u.head.insertBefore(
                            d,
                            u.querySelector("head > title")
                          )),
                        yn(d, o, a),
                        (d[He] = e),
                        qe(d),
                        (o = d);
                      break e;
                    case "link":
                      var x = ix("link", "href", u).get(o + (a.href || ""));
                      if (x) {
                        for (var T = 0; T < x.length; T++)
                          if (
                            ((d = x[T]),
                            d.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              d.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              d.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              d.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            x.splice(T, 1);
                            break t;
                          }
                      }
                      (d = u.createElement(o)),
                        yn(d, o, a),
                        u.head.appendChild(d);
                      break;
                    case "meta":
                      if (
                        (x = ix("meta", "content", u).get(
                          o + (a.content || "")
                        ))
                      ) {
                        for (T = 0; T < x.length; T++)
                          if (
                            ((d = x[T]),
                            d.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              d.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              d.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              d.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              d.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            x.splice(T, 1);
                            break t;
                          }
                      }
                      (d = u.createElement(o)),
                        yn(d, o, a),
                        u.head.appendChild(d);
                      break;
                    default:
                      throw Error(i(468, o));
                  }
                  (d[He] = e), qe(d), (o = d);
                }
                e.stateNode = o;
              } else rx(u, e.type, e.stateNode);
            else e.stateNode = ax(u, o, e.memoizedProps);
          else
            d !== o
              ? (d === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : d.count--,
                o === null
                  ? rx(u, e.type, e.stateNode)
                  : ax(u, o, e.memoizedProps))
              : o === null &&
                e.stateNode !== null &&
                Zd(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        Pn(t, e),
          Kn(e),
          o & 512 && ($t || a === null || oi(a, a.return)),
          a !== null && o & 4 && Zd(e, e.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (
          (Pn(t, e),
          Kn(e),
          o & 512 && ($t || a === null || oi(a, a.return)),
          e.flags & 32)
        ) {
          u = e.stateNode;
          try {
            wl(u, "");
          } catch (ve) {
            lt(e, e.return, ve);
          }
        }
        o & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), Zd(e, u, a !== null ? a.memoizedProps : u)),
          o & 1024 && (Kd = !0);
        break;
      case 6:
        if ((Pn(t, e), Kn(e), o & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (o = e.memoizedProps), (a = e.stateNode);
          try {
            a.nodeValue = o;
          } catch (ve) {
            lt(e, e.return, ve);
          }
        }
        break;
      case 3:
        if (
          ((uu = null),
          (u = Ja),
          (Ja = ou(t.containerInfo)),
          Pn(t, e),
          (Ja = u),
          Kn(e),
          o & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            es(t.containerInfo);
          } catch (ve) {
            lt(e, e.return, ve);
          }
        Kd && ((Kd = !1), r1(e));
        break;
      case 4:
        (o = Ja),
          (Ja = ou(e.stateNode.containerInfo)),
          Pn(t, e),
          Kn(e),
          (Ja = o);
        break;
      case 12:
        Pn(t, e), Kn(e);
        break;
      case 31:
        Pn(t, e),
          Kn(e),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), Kc(e, o)));
        break;
      case 13:
        Pn(t, e),
          Kn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Jc = wt()),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), Kc(e, o)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var M = a !== null && a.memoizedState !== null,
          q = Oi,
          J = $t;
        if (
          ((Oi = q || u),
          ($t = J || M),
          Pn(t, e),
          ($t = J),
          (Oi = q),
          Kn(e),
          o & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (a === null || M || Oi || $t || Fr(e)),
              a = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                M = a = t;
                try {
                  if (((d = M.stateNode), u))
                    (x = d.style),
                      typeof x.setProperty == "function"
                        ? x.setProperty("display", "none", "important")
                        : (x.display = "none");
                  else {
                    T = M.stateNode;
                    var $ = M.memoizedProps.style,
                      V =
                        $ != null && $.hasOwnProperty("display")
                          ? $.display
                          : null;
                    T.style.display =
                      V == null || typeof V == "boolean" ? "" : ("" + V).trim();
                  }
                } catch (ve) {
                  lt(M, M.return, ve);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                M = t;
                try {
                  M.stateNode.nodeValue = u ? "" : M.memoizedProps;
                } catch (ve) {
                  lt(M, M.return, ve);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                M = t;
                try {
                  var P = M.stateNode;
                  u ? K1(P, !0) : K1(M.stateNode, !1);
                } catch (ve) {
                  lt(M, M.return, ve);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              a === t && (a = null), (t = t.return);
            }
            a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        o & 4 &&
          ((o = e.updateQueue),
          o !== null &&
            ((a = o.retryQueue),
            a !== null && ((o.retryQueue = null), Kc(e, a))));
        break;
      case 19:
        Pn(t, e),
          Kn(e),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), Kc(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pn(t, e), Kn(e);
    }
  }
  function Kn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, o = e.return; o !== null; ) {
          if (J0(o)) {
            a = o;
            break;
          }
          o = o.return;
        }
        if (a == null) throw Error(i(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode,
              d = Qd(e);
            Pc(e, d, u);
            break;
          case 5:
            var x = a.stateNode;
            a.flags & 32 && (wl(x, ""), (a.flags &= -33));
            var T = Qd(e);
            Pc(e, T, x);
            break;
          case 3:
          case 4:
            var M = a.stateNode.containerInfo,
              q = Qd(e);
            Pd(e, q, M);
            break;
          default:
            throw Error(i(161));
        }
      } catch (J) {
        lt(e, e.return, J);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function r1(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        r1(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function zi(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) I0(e, t.alternate, t), (t = t.sibling);
  }
  function Fr(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ir(4, t, t.return), Fr(t);
          break;
        case 1:
          oi(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && K0(t, t.return, a),
            Fr(t);
          break;
        case 27:
          ro(t.stateNode);
        case 26:
        case 5:
          oi(t, t.return), Fr(t);
          break;
        case 22:
          t.memoizedState === null && Fr(t);
          break;
        case 30:
          Fr(t);
          break;
        default:
          Fr(t);
      }
      e = e.sibling;
    }
  }
  function ji(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var o = t.alternate,
        u = e,
        d = t,
        x = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          ji(u, d, a), Fs(4, d);
          break;
        case 1:
          if (
            (ji(u, d, a),
            (o = d),
            (u = o.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (q) {
              lt(o, o.return, q);
            }
          if (((o = d), (u = o.updateQueue), u !== null)) {
            var T = o.stateNode;
            try {
              var M = u.shared.hiddenCallbacks;
              if (M !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < M.length; u++)
                  Lg(M[u], T);
            } catch (q) {
              lt(o, o.return, q);
            }
          }
          a && x & 64 && P0(d), Js(d, d.return);
          break;
        case 27:
          W0(d);
        case 26:
        case 5:
          ji(u, d, a), a && o === null && x & 4 && F0(d), Js(d, d.return);
          break;
        case 12:
          ji(u, d, a);
          break;
        case 31:
          ji(u, d, a), a && x & 4 && n1(u, d);
          break;
        case 13:
          ji(u, d, a), a && x & 4 && a1(u, d);
          break;
        case 22:
          d.memoizedState === null && ji(u, d, a), Js(d, d.return);
          break;
        case 30:
          break;
        default:
          ji(u, d, a);
      }
      t = t.sibling;
    }
  }
  function Fd(e, t) {
    var a = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && Ls(a));
  }
  function Jd(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Ls(e));
  }
  function Wa(e, t, a, o) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) l1(e, t, a, o), (t = t.sibling);
  }
  function l1(e, t, a, o) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Wa(e, t, a, o), u & 2048 && Fs(9, t);
        break;
      case 1:
        Wa(e, t, a, o);
        break;
      case 3:
        Wa(e, t, a, o),
          u & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Ls(e)));
        break;
      case 12:
        if (u & 2048) {
          Wa(e, t, a, o), (e = t.stateNode);
          try {
            var d = t.memoizedProps,
              x = d.id,
              T = d.onPostCommit;
            typeof T == "function" &&
              T(
                x,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (M) {
            lt(t, t.return, M);
          }
        } else Wa(e, t, a, o);
        break;
      case 31:
        Wa(e, t, a, o);
        break;
      case 13:
        Wa(e, t, a, o);
        break;
      case 23:
        break;
      case 22:
        (d = t.stateNode),
          (x = t.alternate),
          t.memoizedState !== null
            ? d._visibility & 2
              ? Wa(e, t, a, o)
              : Ws(e, t)
            : d._visibility & 2
            ? Wa(e, t, a, o)
            : ((d._visibility |= 2),
              Xl(e, t, a, o, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && Fd(x, t);
        break;
      case 24:
        Wa(e, t, a, o), u & 2048 && Jd(t.alternate, t);
        break;
      default:
        Wa(e, t, a, o);
    }
  }
  function Xl(e, t, a, o, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var d = e,
        x = t,
        T = a,
        M = o,
        q = x.flags;
      switch (x.tag) {
        case 0:
        case 11:
        case 15:
          Xl(d, x, T, M, u), Fs(8, x);
          break;
        case 23:
          break;
        case 22:
          var J = x.stateNode;
          x.memoizedState !== null
            ? J._visibility & 2
              ? Xl(d, x, T, M, u)
              : Ws(d, x)
            : ((J._visibility |= 2), Xl(d, x, T, M, u)),
            u && q & 2048 && Fd(x.alternate, x);
          break;
        case 24:
          Xl(d, x, T, M, u), u && q & 2048 && Jd(x.alternate, x);
          break;
        default:
          Xl(d, x, T, M, u);
      }
      t = t.sibling;
    }
  }
  function Ws(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e,
          o = t,
          u = o.flags;
        switch (o.tag) {
          case 22:
            Ws(a, o), u & 2048 && Fd(o.alternate, o);
            break;
          case 24:
            Ws(a, o), u & 2048 && Jd(o.alternate, o);
            break;
          default:
            Ws(a, o);
        }
        t = t.sibling;
      }
  }
  var $s = 8192;
  function Vl(e, t, a) {
    if (e.subtreeFlags & $s)
      for (e = e.child; e !== null; ) s1(e, t, a), (e = e.sibling);
  }
  function s1(e, t, a) {
    switch (e.tag) {
      case 26:
        Vl(e, t, a),
          e.flags & $s &&
            e.memoizedState !== null &&
            dS(a, Ja, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Vl(e, t, a);
        break;
      case 3:
      case 4:
        var o = Ja;
        (Ja = ou(e.stateNode.containerInfo)), Vl(e, t, a), (Ja = o);
        break;
      case 22:
        e.memoizedState === null &&
          ((o = e.alternate),
          o !== null && o.memoizedState !== null
            ? ((o = $s), ($s = 16777216), Vl(e, t, a), ($s = o))
            : Vl(e, t, a));
        break;
      default:
        Vl(e, t, a);
    }
  }
  function o1(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Is(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var o = t[a];
          (fn = o), u1(o, e);
        }
      o1(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) c1(e), (e = e.sibling);
  }
  function c1(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Is(e), e.flags & 2048 && ir(9, e, e.return);
        break;
      case 3:
        Is(e);
        break;
      case 12:
        Is(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Fc(e))
          : Is(e);
        break;
      default:
        Is(e);
    }
  }
  function Fc(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var o = t[a];
          (fn = o), u1(o, e);
        }
      o1(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          ir(8, t, t.return), Fc(t);
          break;
        case 22:
          (a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), Fc(t));
          break;
        default:
          Fc(t);
      }
      e = e.sibling;
    }
  }
  function u1(e, t) {
    for (; fn !== null; ) {
      var a = fn;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ir(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var o = a.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Ls(a.memoizedState.cache);
      }
      if (((o = a.child), o !== null)) (o.return = a), (fn = o);
      else
        e: for (a = e; fn !== null; ) {
          o = fn;
          var u = o.sibling,
            d = o.return;
          if ((e1(o), o === a)) {
            fn = null;
            break e;
          }
          if (u !== null) {
            (u.return = d), (fn = u);
            break e;
          }
          fn = d;
        }
    }
  }
  var A2 = {
      getCacheForType: function (e) {
        var t = xn(Ft),
          a = t.data.get(e);
        return a === void 0 && ((a = e()), t.data.set(e, a)), a;
      },
      cacheSignal: function () {
        return xn(Ft).controller.signal;
      },
    },
    N2 = typeof WeakMap == "function" ? WeakMap : Map,
    at = 0,
    ht = null,
    Ze = null,
    Pe = 0,
    rt = 0,
    fa = null,
    rr = !1,
    Zl = !1,
    Wd = !1,
    Di = 0,
    Yt = 0,
    lr = 0,
    Jr = 0,
    $d = 0,
    da = 0,
    Ql = 0,
    eo = null,
    Fn = null,
    Id = !1,
    Jc = 0,
    f1 = 0,
    Wc = 1 / 0,
    $c = null,
    sr = null,
    rn = 0,
    or = null,
    Pl = null,
    ki = 0,
    eh = 0,
    th = null,
    d1 = null,
    to = 0,
    nh = null;
  function ha() {
    return (at & 2) !== 0 && Pe !== 0 ? Pe & -Pe : U.T !== null ? oh() : Ye();
  }
  function h1() {
    if (da === 0)
      if ((Pe & 536870912) === 0 || Fe) {
        var e = nn;
        (nn <<= 1), (nn & 3932160) === 0 && (nn = 262144), (da = e);
      } else da = 536870912;
    return (e = ca.current), e !== null && (e.flags |= 32), da;
  }
  function Jn(e, t, a) {
    ((e === ht && (rt === 2 || rt === 9)) || e.cancelPendingCommit !== null) &&
      (Kl(e, 0), cr(e, Pe, da, !1)),
      we(e, a),
      ((at & 2) === 0 || e !== ht) &&
        (e === ht &&
          ((at & 2) === 0 && (Jr |= a), Yt === 4 && cr(e, Pe, da, !1)),
        ci(e));
  }
  function p1(e, t, a) {
    if ((at & 6) !== 0) throw Error(i(327));
    var o = (!a && (t & 127) === 0 && (t & e.expiredLanes) === 0) || On(e, t),
      u = o ? M2(e, t) : ih(e, t, !0),
      d = o;
    do {
      if (u === 0) {
        Zl && !o && cr(e, t, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), d && !R2(a))) {
          (u = ih(e, t, !1)), (d = !1);
          continue;
        }
        if (u === 2) {
          if (((d = t), e.errorRecoveryDisabledLanes & d)) var x = 0;
          else
            (x = e.pendingLanes & -536870913),
              (x = x !== 0 ? x : x & 536870912 ? 536870912 : 0);
          if (x !== 0) {
            t = x;
            e: {
              var T = e;
              u = eo;
              var M = T.current.memoizedState.isDehydrated;
              if ((M && (Kl(T, x).flags |= 256), (x = ih(T, x, !1)), x !== 2)) {
                if (Wd && !M) {
                  (T.errorRecoveryDisabledLanes |= d), (Jr |= d), (u = 4);
                  break e;
                }
                (d = Fn),
                  (Fn = u),
                  d !== null && (Fn === null ? (Fn = d) : Fn.push.apply(Fn, d));
              }
              u = x;
            }
            if (((d = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Kl(e, 0), cr(e, t, 0, !0);
          break;
        }
        e: {
          switch (((o = e), (d = u), d)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              cr(o, t, da, !rr);
              break e;
            case 2:
              Fn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && ((u = Jc + 300 - wt()), 10 < u)) {
            if ((cr(o, t, da, !rr), qn(o, 0, !0) !== 0)) break e;
            (ki = t),
              (o.timeoutHandle = Z1(
                m1.bind(
                  null,
                  o,
                  a,
                  Fn,
                  $c,
                  Id,
                  t,
                  da,
                  Jr,
                  Ql,
                  rr,
                  d,
                  "Throttled",
                  -0,
                  0
                ),
                u
              ));
            break e;
          }
          m1(o, a, Fn, $c, Id, t, da, Jr, Ql, rr, d, null, -0, 0);
        }
      }
      break;
    } while (!0);
    ci(e);
  }
  function m1(e, t, a, o, u, d, x, T, M, q, J, $, V, P) {
    if (
      ((e.timeoutHandle = -1),
      ($ = t.subtreeFlags),
      $ & 8192 || ($ & 16785408) === 16785408)
    ) {
      ($ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: bi,
      }),
        s1(t, d, $);
      var ve =
        (d & 62914560) === d ? Jc - wt() : (d & 4194048) === d ? f1 - wt() : 0;
      if (((ve = hS($, ve)), ve !== null)) {
        (ki = d),
          (e.cancelPendingCommit = ve(
            w1.bind(null, e, t, d, a, o, u, x, T, M, J, $, null, V, P)
          )),
          cr(e, d, x, !q);
        return;
      }
    }
    w1(e, t, d, a, o, u, x, T, M);
  }
  function R2(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var o = 0; o < a.length; o++) {
          var u = a[o],
            d = u.getSnapshot;
          u = u.value;
          try {
            if (!sa(d(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        (a.return = t), (t = a);
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
  function cr(e, t, a, o) {
    (t &= ~$d),
      (t &= ~Jr),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      o && (e.warmLanes |= t),
      (o = e.expirationTimes);
    for (var u = t; 0 < u; ) {
      var d = 31 - Ht(u),
        x = 1 << d;
      (o[d] = -1), (u &= ~x);
    }
    a !== 0 && fe(e, a, t);
  }
  function Ic() {
    return (at & 6) === 0 ? (no(0), !1) : !0;
  }
  function ah() {
    if (Ze !== null) {
      if (rt === 0) var e = Ze.return;
      else (e = Ze), (Ti = Yr = null), yd(e), (Ul = null), (Us = 0), (e = Ze);
      for (; e !== null; ) Q0(e.alternate, e), (e = e.return);
      Ze = null;
    }
  }
  function Kl(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && ((e.timeoutHandle = -1), F2(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      (ki = 0),
      ah(),
      (ht = e),
      (Ze = a = Si(e.current, null)),
      (Pe = t),
      (rt = 0),
      (fa = null),
      (rr = !1),
      (Zl = On(e, t)),
      (Wd = !1),
      (Ql = da = $d = Jr = lr = Yt = 0),
      (Fn = eo = null),
      (Id = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= t; 0 < o; ) {
        var u = 31 - Ht(o),
          d = 1 << u;
        (t |= e[u]), (o &= ~d);
      }
    return (Di = t), bc(), a;
  }
  function g1(e, t) {
    (ke = null),
      (U.H = Qs),
      t === Hl || t === Nc
        ? ((t = zg()), (rt = 3))
        : t === sd
        ? ((t = zg()), (rt = 4))
        : (rt =
            t === kd
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (fa = t),
      Ze === null && ((Yt = 1), qc(e, Ma(t, e.current)));
  }
  function x1() {
    var e = ca.current;
    return e === null
      ? !0
      : (Pe & 4194048) === Pe
      ? ka === null
      : (Pe & 62914560) === Pe || (Pe & 536870912) !== 0
      ? e === ka
      : !1;
  }
  function v1() {
    var e = U.H;
    return (U.H = Qs), e === null ? Qs : e;
  }
  function y1() {
    var e = U.A;
    return (U.A = A2), e;
  }
  function eu() {
    (Yt = 4),
      rr || ((Pe & 4194048) !== Pe && ca.current !== null) || (Zl = !0),
      ((lr & 134217727) === 0 && (Jr & 134217727) === 0) ||
        ht === null ||
        cr(ht, Pe, da, !1);
  }
  function ih(e, t, a) {
    var o = at;
    at |= 2;
    var u = v1(),
      d = y1();
    (ht !== e || Pe !== t) && (($c = null), Kl(e, t)), (t = !1);
    var x = Yt;
    e: do
      try {
        if (rt !== 0 && Ze !== null) {
          var T = Ze,
            M = fa;
          switch (rt) {
            case 8:
              ah(), (x = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ca.current === null && (t = !0);
              var q = rt;
              if (((rt = 0), (fa = null), Fl(e, T, M, q), a && Zl)) {
                x = 0;
                break e;
              }
              break;
            default:
              (q = rt), (rt = 0), (fa = null), Fl(e, T, M, q);
          }
        }
        O2(), (x = Yt);
        break;
      } catch (J) {
        g1(e, J);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Ti = Yr = null),
      (at = o),
      (U.H = u),
      (U.A = d),
      Ze === null && ((ht = null), (Pe = 0), bc()),
      x
    );
  }
  function O2() {
    for (; Ze !== null; ) b1(Ze);
  }
  function M2(e, t) {
    var a = at;
    at |= 2;
    var o = v1(),
      u = y1();
    ht !== e || Pe !== t
      ? (($c = null), (Wc = wt() + 500), Kl(e, t))
      : (Zl = On(e, t));
    e: do
      try {
        if (rt !== 0 && Ze !== null) {
          t = Ze;
          var d = fa;
          t: switch (rt) {
            case 1:
              (rt = 0), (fa = null), Fl(e, t, d, 1);
              break;
            case 2:
            case 9:
              if (Og(d)) {
                (rt = 0), (fa = null), _1(t);
                break;
              }
              (t = function () {
                (rt !== 2 && rt !== 9) || ht !== e || (rt = 7), ci(e);
              }),
                d.then(t, t);
              break e;
            case 3:
              rt = 7;
              break e;
            case 4:
              rt = 5;
              break e;
            case 7:
              Og(d)
                ? ((rt = 0), (fa = null), _1(t))
                : ((rt = 0), (fa = null), Fl(e, t, d, 7));
              break;
            case 5:
              var x = null;
              switch (Ze.tag) {
                case 26:
                  x = Ze.memoizedState;
                case 5:
                case 27:
                  var T = Ze;
                  if (x ? lx(x) : T.stateNode.complete) {
                    (rt = 0), (fa = null);
                    var M = T.sibling;
                    if (M !== null) Ze = M;
                    else {
                      var q = T.return;
                      q !== null ? ((Ze = q), tu(q)) : (Ze = null);
                    }
                    break t;
                  }
              }
              (rt = 0), (fa = null), Fl(e, t, d, 5);
              break;
            case 6:
              (rt = 0), (fa = null), Fl(e, t, d, 6);
              break;
            case 8:
              ah(), (Yt = 6);
              break e;
            default:
              throw Error(i(462));
          }
        }
        z2();
        break;
      } catch (J) {
        g1(e, J);
      }
    while (!0);
    return (
      (Ti = Yr = null),
      (U.H = o),
      (U.A = u),
      (at = a),
      Ze !== null ? 0 : ((ht = null), (Pe = 0), bc(), Yt)
    );
  }
  function z2() {
    for (; Ze !== null && !Nn(); ) b1(Ze);
  }
  function b1(e) {
    var t = V0(e.alternate, e, Di);
    (e.memoizedProps = e.pendingProps), t === null ? tu(e) : (Ze = t);
  }
  function _1(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = U0(a, t, t.pendingProps, t.type, void 0, Pe);
        break;
      case 11:
        t = U0(a, t, t.pendingProps, t.type.render, t.ref, Pe);
        break;
      case 5:
        yd(t);
      default:
        Q0(a, t), (t = Ze = yg(t, Di)), (t = V0(a, t, Di));
    }
    (e.memoizedProps = e.pendingProps), t === null ? tu(e) : (Ze = t);
  }
  function Fl(e, t, a, o) {
    (Ti = Yr = null), yd(t), (Ul = null), (Us = 0);
    var u = t.return;
    try {
      if (b2(e, u, t, a, Pe)) {
        (Yt = 1), qc(e, Ma(a, e.current)), (Ze = null);
        return;
      }
    } catch (d) {
      if (u !== null) throw ((Ze = u), d);
      (Yt = 1), qc(e, Ma(a, e.current)), (Ze = null);
      return;
    }
    t.flags & 32768
      ? (Fe || o === 1
          ? (e = !0)
          : Zl || (Pe & 536870912) !== 0
          ? (e = !1)
          : ((rr = e = !0),
            (o === 2 || o === 9 || o === 3 || o === 6) &&
              ((o = ca.current),
              o !== null && o.tag === 13 && (o.flags |= 16384))),
        S1(t, e))
      : tu(t);
  }
  function tu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        S1(t, rr);
        return;
      }
      e = t.return;
      var a = w2(t.alternate, t, Di);
      if (a !== null) {
        Ze = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ze = t;
        return;
      }
      Ze = t = e;
    } while (t !== null);
    Yt === 0 && (Yt = 5);
  }
  function S1(e, t) {
    do {
      var a = T2(e.alternate, e);
      if (a !== null) {
        (a.flags &= 32767), (Ze = a);
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Ze = e;
        return;
      }
      Ze = e = a;
    } while (e !== null);
    (Yt = 6), (Ze = null);
  }
  function w1(e, t, a, o, u, d, x, T, M) {
    e.cancelPendingCommit = null;
    do nu();
    while (rn !== 0);
    if ((at & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (
        ((d = t.lanes | t.childLanes),
        (d |= Qf),
        Ie(e, a, d, x, T, M),
        e === ht && ((Ze = ht = null), (Pe = 0)),
        (Pl = t),
        (or = e),
        (ki = a),
        (eh = d),
        (th = u),
        (d1 = o),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            L2(cn, function () {
              return N1(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (o = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || o)
      ) {
        (o = U.T), (U.T = null), (u = Q.p), (Q.p = 2), (x = at), (at |= 4);
        try {
          E2(e, t, a);
        } finally {
          (at = x), (Q.p = u), (U.T = o);
        }
      }
      (rn = 1), T1(), E1(), C1();
    }
  }
  function T1() {
    if (rn === 1) {
      rn = 0;
      var e = or,
        t = Pl,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        (a = U.T), (U.T = null);
        var o = Q.p;
        Q.p = 2;
        var u = at;
        at |= 4;
        try {
          i1(t, e);
          var d = gh,
            x = ug(e.containerInfo),
            T = d.focusedElem,
            M = d.selectionRange;
          if (
            x !== T &&
            T &&
            T.ownerDocument &&
            cg(T.ownerDocument.documentElement, T)
          ) {
            if (M !== null && Yf(T)) {
              var q = M.start,
                J = M.end;
              if ((J === void 0 && (J = q), "selectionStart" in T))
                (T.selectionStart = q),
                  (T.selectionEnd = Math.min(J, T.value.length));
              else {
                var $ = T.ownerDocument || document,
                  V = ($ && $.defaultView) || window;
                if (V.getSelection) {
                  var P = V.getSelection(),
                    ve = T.textContent.length,
                    Ae = Math.min(M.start, ve),
                    ft = M.end === void 0 ? Ae : Math.min(M.end, ve);
                  !P.extend && Ae > ft && ((x = ft), (ft = Ae), (Ae = x));
                  var B = og(T, Ae),
                    k = og(T, ft);
                  if (
                    B &&
                    k &&
                    (P.rangeCount !== 1 ||
                      P.anchorNode !== B.node ||
                      P.anchorOffset !== B.offset ||
                      P.focusNode !== k.node ||
                      P.focusOffset !== k.offset)
                  ) {
                    var Y = $.createRange();
                    Y.setStart(B.node, B.offset),
                      P.removeAllRanges(),
                      Ae > ft
                        ? (P.addRange(Y), P.extend(k.node, k.offset))
                        : (Y.setEnd(k.node, k.offset), P.addRange(Y));
                  }
                }
              }
            }
            for ($ = [], P = T; (P = P.parentNode); )
              P.nodeType === 1 &&
                $.push({ element: P, left: P.scrollLeft, top: P.scrollTop });
            for (
              typeof T.focus == "function" && T.focus(), T = 0;
              T < $.length;
              T++
            ) {
              var W = $[T];
              (W.element.scrollLeft = W.left), (W.element.scrollTop = W.top);
            }
          }
          (pu = !!mh), (gh = mh = null);
        } finally {
          (at = u), (Q.p = o), (U.T = a);
        }
      }
      (e.current = t), (rn = 2);
    }
  }
  function E1() {
    if (rn === 2) {
      rn = 0;
      var e = or,
        t = Pl,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        (a = U.T), (U.T = null);
        var o = Q.p;
        Q.p = 2;
        var u = at;
        at |= 4;
        try {
          I0(e, t.alternate, t);
        } finally {
          (at = u), (Q.p = o), (U.T = a);
        }
      }
      rn = 3;
    }
  }
  function C1() {
    if (rn === 4 || rn === 3) {
      (rn = 0), Gn();
      var e = or,
        t = Pl,
        a = ki,
        o = d1;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (rn = 5)
        : ((rn = 0), (Pl = or = null), A1(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (
        (u === 0 && (sr = null),
        Bt(a),
        (t = t.stateNode),
        xt && typeof xt.onCommitFiberRoot == "function")
      )
        try {
          xt.onCommitFiberRoot(Rn, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (o !== null) {
        (t = U.T), (u = Q.p), (Q.p = 2), (U.T = null);
        try {
          for (var d = e.onRecoverableError, x = 0; x < o.length; x++) {
            var T = o[x];
            d(T.value, { componentStack: T.stack });
          }
        } finally {
          (U.T = t), (Q.p = u);
        }
      }
      (ki & 3) !== 0 && nu(),
        ci(e),
        (u = e.pendingLanes),
        (a & 261930) !== 0 && (u & 42) !== 0
          ? e === nh
            ? to++
            : ((to = 0), (nh = e))
          : (to = 0),
        no(0);
    }
  }
  function A1(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ls(t)));
  }
  function nu() {
    return T1(), E1(), C1(), N1();
  }
  function N1() {
    if (rn !== 5) return !1;
    var e = or,
      t = eh;
    eh = 0;
    var a = Bt(ki),
      o = U.T,
      u = Q.p;
    try {
      (Q.p = 32 > a ? 32 : a), (U.T = null), (a = th), (th = null);
      var d = or,
        x = ki;
      if (((rn = 0), (Pl = or = null), (ki = 0), (at & 6) !== 0))
        throw Error(i(331));
      var T = at;
      if (
        ((at |= 4),
        c1(d.current),
        l1(d, d.current, x, a),
        (at = T),
        no(0, !1),
        xt && typeof xt.onPostCommitFiberRoot == "function")
      )
        try {
          xt.onPostCommitFiberRoot(Rn, d);
        } catch {}
      return !0;
    } finally {
      (Q.p = u), (U.T = o), A1(e, t);
    }
  }
  function R1(e, t, a) {
    (t = Ma(a, t)),
      (t = Dd(e.stateNode, t, 2)),
      (e = tr(e, t, 2)),
      e !== null && (we(e, 2), ci(e));
  }
  function lt(e, t, a) {
    if (e.tag === 3) R1(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          R1(t, e, a);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (sr === null || !sr.has(o)))
          ) {
            (e = Ma(a, e)),
              (a = O0(2)),
              (o = tr(t, a, 2)),
              o !== null && (M0(a, o, t, e), we(o, 2), ci(o));
            break;
          }
        }
        t = t.return;
      }
  }
  function rh(e, t, a) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new N2();
      var u = new Set();
      o.set(t, u);
    } else (u = o.get(t)), u === void 0 && ((u = new Set()), o.set(t, u));
    u.has(a) ||
      ((Wd = !0), u.add(a), (e = j2.bind(null, e, t, a)), t.then(e, e));
  }
  function j2(e, t, a) {
    var o = e.pingCache;
    o !== null && o.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      ht === e &&
        (Pe & a) === a &&
        (Yt === 4 || (Yt === 3 && (Pe & 62914560) === Pe && 300 > wt() - Jc)
          ? (at & 2) === 0 && Kl(e, 0)
          : ($d |= a),
        Ql === Pe && (Ql = 0)),
      ci(e);
  }
  function O1(e, t) {
    t === 0 && (t = ni()), (e = Ur(e, t)), e !== null && (we(e, t), ci(e));
  }
  function D2(e) {
    var t = e.memoizedState,
      a = 0;
    t !== null && (a = t.retryLane), O1(e, a);
  }
  function k2(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var o = e.stateNode,
          u = e.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    o !== null && o.delete(t), O1(e, a);
  }
  function L2(e, t) {
    return Kt(e, t);
  }
  var au = null,
    Jl = null,
    lh = !1,
    iu = !1,
    sh = !1,
    ur = 0;
  function ci(e) {
    e !== Jl &&
      e.next === null &&
      (Jl === null ? (au = Jl = e) : (Jl = Jl.next = e)),
      (iu = !0),
      lh || ((lh = !0), U2());
  }
  function no(e, t) {
    if (!sh && iu) {
      sh = !0;
      do
        for (var a = !1, o = au; o !== null; ) {
          if (e !== 0) {
            var u = o.pendingLanes;
            if (u === 0) var d = 0;
            else {
              var x = o.suspendedLanes,
                T = o.pingedLanes;
              (d = (1 << (31 - Ht(42 | e) + 1)) - 1),
                (d &= u & ~(x & ~T)),
                (d = d & 201326741 ? (d & 201326741) | 1 : d ? d | 2 : 0);
            }
            d !== 0 && ((a = !0), D1(o, d));
          } else
            (d = Pe),
              (d = qn(
                o,
                o === ht ? d : 0,
                o.cancelPendingCommit !== null || o.timeoutHandle !== -1
              )),
              (d & 3) === 0 || On(o, d) || ((a = !0), D1(o, d));
          o = o.next;
        }
      while (a);
      sh = !1;
    }
  }
  function H2() {
    M1();
  }
  function M1() {
    iu = lh = !1;
    var e = 0;
    ur !== 0 && K2() && (e = ur);
    for (var t = wt(), a = null, o = au; o !== null; ) {
      var u = o.next,
        d = z1(o, t);
      d === 0
        ? ((o.next = null),
          a === null ? (au = u) : (a.next = u),
          u === null && (Jl = a))
        : ((a = o), (e !== 0 || (d & 3) !== 0) && (iu = !0)),
        (o = u);
    }
    (rn !== 0 && rn !== 5) || no(e), ur !== 0 && (ur = 0);
  }
  function z1(e, t) {
    for (
      var a = e.suspendedLanes,
        o = e.pingedLanes,
        u = e.expirationTimes,
        d = e.pendingLanes & -62914561;
      0 < d;

    ) {
      var x = 31 - Ht(d),
        T = 1 << x,
        M = u[x];
      M === -1
        ? ((T & a) === 0 || (T & o) !== 0) && (u[x] = Xn(T, t))
        : M <= t && (e.expiredLanes |= T),
        (d &= ~T);
    }
    if (
      ((t = ht),
      (a = Pe),
      (a = qn(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (o = e.callbackNode),
      a === 0 ||
        (e === t && (rt === 2 || rt === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        o !== null && o !== null && et(o),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || On(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((o !== null && et(o), Bt(a))) {
        case 2:
        case 8:
          a = dt;
          break;
        case 32:
          a = cn;
          break;
        case 268435456:
          a = tn;
          break;
        default:
          a = cn;
      }
      return (
        (o = j1.bind(null, e)),
        (a = Kt(a, o)),
        (e.callbackPriority = t),
        (e.callbackNode = a),
        t
      );
    }
    return (
      o !== null && o !== null && et(o),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function j1(e, t) {
    if (rn !== 0 && rn !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var a = e.callbackNode;
    if (nu() && e.callbackNode !== a) return null;
    var o = Pe;
    return (
      (o = qn(
        e,
        e === ht ? o : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      o === 0
        ? null
        : (p1(e, o, t),
          z1(e, wt()),
          e.callbackNode != null && e.callbackNode === a
            ? j1.bind(null, e)
            : null)
    );
  }
  function D1(e, t) {
    if (nu()) return null;
    p1(e, t, !0);
  }
  function U2() {
    J2(function () {
      (at & 6) !== 0 ? Kt(ia, H2) : M1();
    });
  }
  function oh() {
    if (ur === 0) {
      var e = kl;
      e === 0 && ((e = Yn), (Yn <<= 1), (Yn & 261888) === 0 && (Yn = 256)),
        (ur = e);
    }
    return ur;
  }
  function k1(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : dc("" + e);
  }
  function L1(e, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      e.id && a.setAttribute("form", e.id),
      t.parentNode.insertBefore(a, t),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function B2(e, t, a, o, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var d = k1((u[Ue] || null).action),
        x = o.submitter;
      x &&
        ((t = (t = x[Ue] || null)
          ? k1(t.formAction)
          : x.getAttribute("formAction")),
        t !== null && ((d = t), (x = null)));
      var T = new gc("action", "action", null, o, u);
      e.push({
        event: T,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (ur !== 0) {
                  var M = x ? L1(u, x) : new FormData(u);
                  Nd(
                    a,
                    { pending: !0, data: M, method: u.method, action: d },
                    null,
                    M
                  );
                }
              } else
                typeof d == "function" &&
                  (T.preventDefault(),
                  (M = x ? L1(u, x) : new FormData(u)),
                  Nd(
                    a,
                    { pending: !0, data: M, method: u.method, action: d },
                    d,
                    M
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var ch = 0; ch < Zf.length; ch++) {
    var uh = Zf[ch],
      G2 = uh.toLowerCase(),
      Y2 = uh[0].toUpperCase() + uh.slice(1);
    Fa(G2, "on" + Y2);
  }
  Fa(hg, "onAnimationEnd"),
    Fa(pg, "onAnimationIteration"),
    Fa(mg, "onAnimationStart"),
    Fa("dblclick", "onDoubleClick"),
    Fa("focusin", "onFocus"),
    Fa("focusout", "onBlur"),
    Fa(a2, "onTransitionRun"),
    Fa(i2, "onTransitionStart"),
    Fa(r2, "onTransitionCancel"),
    Fa(gg, "onTransitionEnd"),
    Ca("onMouseEnter", ["mouseout", "mouseover"]),
    Ca("onMouseLeave", ["mouseout", "mouseover"]),
    Ca("onPointerEnter", ["pointerout", "pointerover"]),
    Ca("onPointerLeave", ["pointerout", "pointerover"]),
    ii(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    ii(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    ii("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ii(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    ii(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    ii(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ao =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    q2 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ao)
    );
  function H1(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var o = e[a],
        u = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var x = o.length - 1; 0 <= x; x--) {
            var T = o[x],
              M = T.instance,
              q = T.currentTarget;
            if (((T = T.listener), M !== d && u.isPropagationStopped()))
              break e;
            (d = T), (u.currentTarget = q);
            try {
              d(u);
            } catch (J) {
              yc(J);
            }
            (u.currentTarget = null), (d = M);
          }
        else
          for (x = 0; x < o.length; x++) {
            if (
              ((T = o[x]),
              (M = T.instance),
              (q = T.currentTarget),
              (T = T.listener),
              M !== d && u.isPropagationStopped())
            )
              break e;
            (d = T), (u.currentTarget = q);
            try {
              d(u);
            } catch (J) {
              yc(J);
            }
            (u.currentTarget = null), (d = M);
          }
      }
    }
  }
  function Qe(e, t) {
    var a = t[Mn];
    a === void 0 && (a = t[Mn] = new Set());
    var o = e + "__bubble";
    a.has(o) || (U1(t, e, 2, !1), a.add(o));
  }
  function fh(e, t, a) {
    var o = 0;
    t && (o |= 4), U1(a, e, o, t);
  }
  var ru = "_reactListening" + Math.random().toString(36).slice(2);
  function dh(e) {
    if (!e[ru]) {
      (e[ru] = !0),
        la.forEach(function (a) {
          a !== "selectionchange" && (q2.has(a) || fh(a, !1, e), fh(a, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ru] || ((t[ru] = !0), fh("selectionchange", !1, t));
    }
  }
  function U1(e, t, a, o) {
    switch (hx(t)) {
      case 2:
        var u = gS;
        break;
      case 8:
        u = xS;
        break;
      default:
        u = Ah;
    }
    (a = u.bind(null, t, a, e)),
      (u = void 0),
      !zf ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      o
        ? u !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: u })
          : e.addEventListener(t, a, !0)
        : u !== void 0
        ? e.addEventListener(t, a, { passive: u })
        : e.addEventListener(t, a, !1);
  }
  function hh(e, t, a, o, u) {
    var d = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var x = o.tag;
        if (x === 3 || x === 4) {
          var T = o.stateNode.containerInfo;
          if (T === u) break;
          if (x === 4)
            for (x = o.return; x !== null; ) {
              var M = x.tag;
              if ((M === 3 || M === 4) && x.stateNode.containerInfo === u)
                return;
              x = x.return;
            }
          for (; T !== null; ) {
            if (((x = Rt(T)), x === null)) return;
            if (((M = x.tag), M === 5 || M === 6 || M === 26 || M === 27)) {
              o = d = x;
              continue e;
            }
            T = T.parentNode;
          }
        }
        o = o.return;
      }
    Xm(function () {
      var q = d,
        J = Of(a),
        $ = [];
      e: {
        var V = xg.get(e);
        if (V !== void 0) {
          var P = gc,
            ve = e;
          switch (e) {
            case "keypress":
              if (pc(a) === 0) break e;
            case "keydown":
            case "keyup":
              P = k_;
              break;
            case "focusin":
              (ve = "focus"), (P = Lf);
              break;
            case "focusout":
              (ve = "blur"), (P = Lf);
              break;
            case "beforeblur":
            case "afterblur":
              P = Lf;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              P = Qm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              P = w_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              P = U_;
              break;
            case hg:
            case pg:
            case mg:
              P = C_;
              break;
            case gg:
              P = G_;
              break;
            case "scroll":
            case "scrollend":
              P = __;
              break;
            case "wheel":
              P = q_;
              break;
            case "copy":
            case "cut":
            case "paste":
              P = N_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              P = Km;
              break;
            case "toggle":
            case "beforetoggle":
              P = V_;
          }
          var Ae = (t & 4) !== 0,
            ft = !Ae && (e === "scroll" || e === "scrollend"),
            B = Ae ? (V !== null ? V + "Capture" : null) : V;
          Ae = [];
          for (var k = q, Y; k !== null; ) {
            var W = k;
            if (
              ((Y = W.stateNode),
              (W = W.tag),
              (W !== 5 && W !== 26 && W !== 27) ||
                Y === null ||
                B === null ||
                ((W = Es(k, B)), W != null && Ae.push(io(k, W, Y))),
              ft)
            )
              break;
            k = k.return;
          }
          0 < Ae.length &&
            ((V = new P(V, ve, null, a, J)),
            $.push({ event: V, listeners: Ae }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((V = e === "mouseover" || e === "pointerover"),
            (P = e === "mouseout" || e === "pointerout"),
            V &&
              a !== Rf &&
              (ve = a.relatedTarget || a.fromElement) &&
              (Rt(ve) || ve[$e]))
          )
            break e;
          if (
            (P || V) &&
            ((V =
              J.window === J
                ? J
                : (V = J.ownerDocument)
                ? V.defaultView || V.parentWindow
                : window),
            P
              ? ((ve = a.relatedTarget || a.toElement),
                (P = q),
                (ve = ve ? Rt(ve) : null),
                ve !== null &&
                  ((ft = c(ve)),
                  (Ae = ve.tag),
                  ve !== ft || (Ae !== 5 && Ae !== 27 && Ae !== 6)) &&
                  (ve = null))
              : ((P = null), (ve = q)),
            P !== ve)
          ) {
            if (
              ((Ae = Qm),
              (W = "onMouseLeave"),
              (B = "onMouseEnter"),
              (k = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Ae = Km),
                (W = "onPointerLeave"),
                (B = "onPointerEnter"),
                (k = "pointer")),
              (ft = P == null ? V : ai(P)),
              (Y = ve == null ? V : ai(ve)),
              (V = new Ae(W, k + "leave", P, a, J)),
              (V.target = ft),
              (V.relatedTarget = Y),
              (W = null),
              Rt(J) === q &&
                ((Ae = new Ae(B, k + "enter", ve, a, J)),
                (Ae.target = Y),
                (Ae.relatedTarget = ft),
                (W = Ae)),
              (ft = W),
              P && ve)
            )
              t: {
                for (Ae = X2, B = P, k = ve, Y = 0, W = B; W; W = Ae(W)) Y++;
                W = 0;
                for (var Ee = k; Ee; Ee = Ae(Ee)) W++;
                for (; 0 < Y - W; ) (B = Ae(B)), Y--;
                for (; 0 < W - Y; ) (k = Ae(k)), W--;
                for (; Y--; ) {
                  if (B === k || (k !== null && B === k.alternate)) {
                    Ae = B;
                    break t;
                  }
                  (B = Ae(B)), (k = Ae(k));
                }
                Ae = null;
              }
            else Ae = null;
            P !== null && B1($, V, P, Ae, !1),
              ve !== null && ft !== null && B1($, ft, ve, Ae, !0);
          }
        }
        e: {
          if (
            ((V = q ? ai(q) : window),
            (P = V.nodeName && V.nodeName.toLowerCase()),
            P === "select" || (P === "input" && V.type === "file"))
          )
            var tt = ng;
          else if (eg(V))
            if (ag) tt = e2;
            else {
              tt = $_;
              var _e = W_;
            }
          else
            (P = V.nodeName),
              !P ||
              P.toLowerCase() !== "input" ||
              (V.type !== "checkbox" && V.type !== "radio")
                ? q && Nf(q.elementType) && (tt = ng)
                : (tt = I_);
          if (tt && (tt = tt(e, q))) {
            tg($, tt, a, J);
            break e;
          }
          _e && _e(e, V, q),
            e === "focusout" &&
              q &&
              V.type === "number" &&
              q.memoizedProps.value != null &&
              Af(V, "number", V.value);
        }
        switch (((_e = q ? ai(q) : window), e)) {
          case "focusin":
            (eg(_e) || _e.contentEditable === "true") &&
              ((Al = _e), (qf = q), (js = null));
            break;
          case "focusout":
            js = qf = Al = null;
            break;
          case "mousedown":
            Xf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Xf = !1), fg($, a, J);
            break;
          case "selectionchange":
            if (n2) break;
          case "keydown":
          case "keyup":
            fg($, a, J);
        }
        var Le;
        if (Uf)
          e: {
            switch (e) {
              case "compositionstart":
                var Ke = "onCompositionStart";
                break e;
              case "compositionend":
                Ke = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ke = "onCompositionUpdate";
                break e;
            }
            Ke = void 0;
          }
        else
          Cl
            ? $m(e, a) && (Ke = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (Ke = "onCompositionStart");
        Ke &&
          (Fm &&
            a.locale !== "ko" &&
            (Cl || Ke !== "onCompositionStart"
              ? Ke === "onCompositionEnd" && Cl && (Le = Vm())
              : ((Ki = J),
                (jf = "value" in Ki ? Ki.value : Ki.textContent),
                (Cl = !0))),
          (_e = lu(q, Ke)),
          0 < _e.length &&
            ((Ke = new Pm(Ke, e, null, a, J)),
            $.push({ event: Ke, listeners: _e }),
            Le
              ? (Ke.data = Le)
              : ((Le = Im(a)), Le !== null && (Ke.data = Le)))),
          (Le = Q_ ? P_(e, a) : K_(e, a)) &&
            ((Ke = lu(q, "onBeforeInput")),
            0 < Ke.length &&
              ((_e = new Pm("onBeforeInput", "beforeinput", null, a, J)),
              $.push({ event: _e, listeners: Ke }),
              (_e.data = Le))),
          B2($, e, q, a, J);
      }
      H1($, t);
    });
  }
  function io(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function lu(e, t) {
    for (var a = t + "Capture", o = []; e !== null; ) {
      var u = e,
        d = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          d === null ||
          ((u = Es(e, a)),
          u != null && o.unshift(io(e, u, d)),
          (u = Es(e, t)),
          u != null && o.push(io(e, u, d))),
        e.tag === 3)
      )
        return o;
      e = e.return;
    }
    return [];
  }
  function X2(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function B1(e, t, a, o, u) {
    for (var d = t._reactName, x = []; a !== null && a !== o; ) {
      var T = a,
        M = T.alternate,
        q = T.stateNode;
      if (((T = T.tag), M !== null && M === o)) break;
      (T !== 5 && T !== 26 && T !== 27) ||
        q === null ||
        ((M = q),
        u
          ? ((q = Es(a, d)), q != null && x.unshift(io(a, q, M)))
          : u || ((q = Es(a, d)), q != null && x.push(io(a, q, M)))),
        (a = a.return);
    }
    x.length !== 0 && e.push({ event: t, listeners: x });
  }
  var V2 = /\r\n?/g,
    Z2 = /\u0000|\uFFFD/g;
  function G1(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        V2,
        `
`
      )
      .replace(Z2, "");
  }
  function Y1(e, t) {
    return (t = G1(t)), G1(e) === t;
  }
  function ut(e, t, a, o, u, d) {
    switch (a) {
      case "children":
        typeof o == "string"
          ? t === "body" || (t === "textarea" && o === "") || wl(e, o)
          : (typeof o == "number" || typeof o == "bigint") &&
            t !== "body" &&
            wl(e, "" + o);
        break;
      case "className":
        uc(e, "class", o);
        break;
      case "tabIndex":
        uc(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        uc(e, a, o);
        break;
      case "style":
        Ym(e, o, d);
        break;
      case "data":
        if (t !== "object") {
          uc(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "symbol" ||
          typeof o == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        (o = dc("" + o)), e.setAttribute(a, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof d == "function" &&
            (a === "formAction"
              ? (t !== "input" && ut(e, t, "name", u.name, u, null),
                ut(e, t, "formEncType", u.formEncType, u, null),
                ut(e, t, "formMethod", u.formMethod, u, null),
                ut(e, t, "formTarget", u.formTarget, u, null))
              : (ut(e, t, "encType", u.encType, u, null),
                ut(e, t, "method", u.method, u, null),
                ut(e, t, "target", u.target, u, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        (o = dc("" + o)), e.setAttribute(a, o);
        break;
      case "onClick":
        o != null && (e.onclick = bi);
        break;
      case "onScroll":
        o != null && Qe("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Qe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(i(61));
          if (((a = o.__html), a != null)) {
            if (u.children != null) throw Error(i(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "boolean" ||
          typeof o == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (a = dc("" + o)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol"
          ? e.setAttribute(a, "" + o)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        o === !0
          ? e.setAttribute(a, "")
          : o !== !1 &&
            o != null &&
            typeof o != "function" &&
            typeof o != "symbol"
          ? e.setAttribute(a, o)
          : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        !isNaN(o) &&
        1 <= o
          ? e.setAttribute(a, o)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? e.removeAttribute(a)
          : e.setAttribute(a, o);
        break;
      case "popover":
        Qe("beforetoggle", e), Qe("toggle", e), cc(e, "popover", o);
        break;
      case "xlinkActuate":
        yi(e, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        yi(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        yi(e, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        yi(e, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        yi(e, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        yi(e, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        yi(e, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        yi(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        yi(e, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        cc(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = y_.get(a) || a), cc(e, a, o));
    }
  }
  function ph(e, t, a, o, u, d) {
    switch (a) {
      case "style":
        Ym(e, o, d);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(i(61));
          if (((a = o.__html), a != null)) {
            if (u.children != null) throw Error(i(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? wl(e, o)
          : (typeof o == "number" || typeof o == "bigint") && wl(e, "" + o);
        break;
      case "onScroll":
        o != null && Qe("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Qe("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = bi);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!_l.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (t = a.slice(2, u ? a.length - 7 : void 0)),
              (d = e[Ue] || null),
              (d = d != null ? d[a] : null),
              typeof d == "function" && e.removeEventListener(t, d, u),
              typeof o == "function")
            ) {
              typeof d != "function" &&
                d !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(t, o, u);
              break e;
            }
            a in e
              ? (e[a] = o)
              : o === !0
              ? e.setAttribute(a, "")
              : cc(e, a, o);
          }
    }
  }
  function yn(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Qe("error", e), Qe("load", e);
        var o = !1,
          u = !1,
          d;
        for (d in a)
          if (a.hasOwnProperty(d)) {
            var x = a[d];
            if (x != null)
              switch (d) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, t));
                default:
                  ut(e, t, d, x, a, null);
              }
          }
        u && ut(e, t, "srcSet", a.srcSet, a, null),
          o && ut(e, t, "src", a.src, a, null);
        return;
      case "input":
        Qe("invalid", e);
        var T = (d = x = u = null),
          M = null,
          q = null;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var J = a[o];
            if (J != null)
              switch (o) {
                case "name":
                  u = J;
                  break;
                case "type":
                  x = J;
                  break;
                case "checked":
                  M = J;
                  break;
                case "defaultChecked":
                  q = J;
                  break;
                case "value":
                  d = J;
                  break;
                case "defaultValue":
                  T = J;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (J != null) throw Error(i(137, t));
                  break;
                default:
                  ut(e, t, o, J, a, null);
              }
          }
        Hm(e, d, T, M, q, x, u, !1);
        return;
      case "select":
        Qe("invalid", e), (o = x = d = null);
        for (u in a)
          if (a.hasOwnProperty(u) && ((T = a[u]), T != null))
            switch (u) {
              case "value":
                d = T;
                break;
              case "defaultValue":
                x = T;
                break;
              case "multiple":
                o = T;
              default:
                ut(e, t, u, T, a, null);
            }
        (t = d),
          (a = x),
          (e.multiple = !!o),
          t != null ? Sl(e, !!o, t, !1) : a != null && Sl(e, !!o, a, !0);
        return;
      case "textarea":
        Qe("invalid", e), (d = u = o = null);
        for (x in a)
          if (a.hasOwnProperty(x) && ((T = a[x]), T != null))
            switch (x) {
              case "value":
                o = T;
                break;
              case "defaultValue":
                u = T;
                break;
              case "children":
                d = T;
                break;
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(i(91));
                break;
              default:
                ut(e, t, x, T, a, null);
            }
        Bm(e, o, u, d);
        return;
      case "option":
        for (M in a)
          a.hasOwnProperty(M) &&
            ((o = a[M]), o != null) &&
            (M === "selected"
              ? (e.selected =
                  o && typeof o != "function" && typeof o != "symbol")
              : ut(e, t, M, o, a, null));
        return;
      case "dialog":
        Qe("beforetoggle", e), Qe("toggle", e), Qe("cancel", e), Qe("close", e);
        break;
      case "iframe":
      case "object":
        Qe("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < ao.length; o++) Qe(ao[o], e);
        break;
      case "image":
        Qe("error", e), Qe("load", e);
        break;
      case "details":
        Qe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Qe("error", e), Qe("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (q in a)
          if (a.hasOwnProperty(q) && ((o = a[q]), o != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, t));
              default:
                ut(e, t, q, o, a, null);
            }
        return;
      default:
        if (Nf(t)) {
          for (J in a)
            a.hasOwnProperty(J) &&
              ((o = a[J]), o !== void 0 && ph(e, t, J, o, a, void 0));
          return;
        }
    }
    for (T in a)
      a.hasOwnProperty(T) && ((o = a[T]), o != null && ut(e, t, T, o, a, null));
  }
  function Q2(e, t, a, o) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          d = null,
          x = null,
          T = null,
          M = null,
          q = null,
          J = null;
        for (P in a) {
          var $ = a[P];
          if (a.hasOwnProperty(P) && $ != null)
            switch (P) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                M = $;
              default:
                o.hasOwnProperty(P) || ut(e, t, P, null, o, $);
            }
        }
        for (var V in o) {
          var P = o[V];
          if ((($ = a[V]), o.hasOwnProperty(V) && (P != null || $ != null)))
            switch (V) {
              case "type":
                d = P;
                break;
              case "name":
                u = P;
                break;
              case "checked":
                q = P;
                break;
              case "defaultChecked":
                J = P;
                break;
              case "value":
                x = P;
                break;
              case "defaultValue":
                T = P;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (P != null) throw Error(i(137, t));
                break;
              default:
                P !== $ && ut(e, t, V, P, o, $);
            }
        }
        Cf(e, x, T, M, q, J, d, u);
        return;
      case "select":
        P = x = T = V = null;
        for (d in a)
          if (((M = a[d]), a.hasOwnProperty(d) && M != null))
            switch (d) {
              case "value":
                break;
              case "multiple":
                P = M;
              default:
                o.hasOwnProperty(d) || ut(e, t, d, null, o, M);
            }
        for (u in o)
          if (
            ((d = o[u]),
            (M = a[u]),
            o.hasOwnProperty(u) && (d != null || M != null))
          )
            switch (u) {
              case "value":
                V = d;
                break;
              case "defaultValue":
                T = d;
                break;
              case "multiple":
                x = d;
              default:
                d !== M && ut(e, t, u, d, o, M);
            }
        (t = T),
          (a = x),
          (o = P),
          V != null
            ? Sl(e, !!a, V, !1)
            : !!o != !!a &&
              (t != null ? Sl(e, !!a, t, !0) : Sl(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        P = V = null;
        for (T in a)
          if (
            ((u = a[T]),
            a.hasOwnProperty(T) && u != null && !o.hasOwnProperty(T))
          )
            switch (T) {
              case "value":
                break;
              case "children":
                break;
              default:
                ut(e, t, T, null, o, u);
            }
        for (x in o)
          if (
            ((u = o[x]),
            (d = a[x]),
            o.hasOwnProperty(x) && (u != null || d != null))
          )
            switch (x) {
              case "value":
                V = u;
                break;
              case "defaultValue":
                P = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(i(91));
                break;
              default:
                u !== d && ut(e, t, x, u, o, d);
            }
        Um(e, V, P);
        return;
      case "option":
        for (var ve in a)
          (V = a[ve]),
            a.hasOwnProperty(ve) &&
              V != null &&
              !o.hasOwnProperty(ve) &&
              (ve === "selected"
                ? (e.selected = !1)
                : ut(e, t, ve, null, o, V));
        for (M in o)
          (V = o[M]),
            (P = a[M]),
            o.hasOwnProperty(M) &&
              V !== P &&
              (V != null || P != null) &&
              (M === "selected"
                ? (e.selected =
                    V && typeof V != "function" && typeof V != "symbol")
                : ut(e, t, M, V, o, P));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Ae in a)
          (V = a[Ae]),
            a.hasOwnProperty(Ae) &&
              V != null &&
              !o.hasOwnProperty(Ae) &&
              ut(e, t, Ae, null, o, V);
        for (q in o)
          if (
            ((V = o[q]),
            (P = a[q]),
            o.hasOwnProperty(q) && V !== P && (V != null || P != null))
          )
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null) throw Error(i(137, t));
                break;
              default:
                ut(e, t, q, V, o, P);
            }
        return;
      default:
        if (Nf(t)) {
          for (var ft in a)
            (V = a[ft]),
              a.hasOwnProperty(ft) &&
                V !== void 0 &&
                !o.hasOwnProperty(ft) &&
                ph(e, t, ft, void 0, o, V);
          for (J in o)
            (V = o[J]),
              (P = a[J]),
              !o.hasOwnProperty(J) ||
                V === P ||
                (V === void 0 && P === void 0) ||
                ph(e, t, J, V, o, P);
          return;
        }
    }
    for (var B in a)
      (V = a[B]),
        a.hasOwnProperty(B) &&
          V != null &&
          !o.hasOwnProperty(B) &&
          ut(e, t, B, null, o, V);
    for ($ in o)
      (V = o[$]),
        (P = a[$]),
        !o.hasOwnProperty($) ||
          V === P ||
          (V == null && P == null) ||
          ut(e, t, $, V, o, P);
  }
  function q1(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function P2() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, a = performance.getEntriesByType("resource"), o = 0;
        o < a.length;
        o++
      ) {
        var u = a[o],
          d = u.transferSize,
          x = u.initiatorType,
          T = u.duration;
        if (d && T && q1(x)) {
          for (x = 0, T = u.responseEnd, o += 1; o < a.length; o++) {
            var M = a[o],
              q = M.startTime;
            if (q > T) break;
            var J = M.transferSize,
              $ = M.initiatorType;
            J &&
              q1($) &&
              ((M = M.responseEnd), (x += J * (M < T ? 1 : (T - q) / (M - q))));
          }
          if ((--o, (t += (8 * (d + x)) / (u.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var mh = null,
    gh = null;
  function su(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function X1(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function V1(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function xh(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var vh = null;
  function K2() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === vh
        ? !1
        : ((vh = e), !0)
      : ((vh = null), !1);
  }
  var Z1 = typeof setTimeout == "function" ? setTimeout : void 0,
    F2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Q1 = typeof Promise == "function" ? Promise : void 0,
    J2 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Q1 < "u"
        ? function (e) {
            return Q1.resolve(null).then(e).catch(W2);
          }
        : Z1;
  function W2(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function fr(e) {
    return e === "head";
  }
  function P1(e, t) {
    var a = t,
      o = 0;
    do {
      var u = a.nextSibling;
      if ((e.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$" || a === "/&")) {
          if (o === 0) {
            e.removeChild(u), es(t);
            return;
          }
          o--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          o++;
        else if (a === "html") ro(e.ownerDocument.documentElement);
        else if (a === "head") {
          (a = e.ownerDocument.head), ro(a);
          for (var d = a.firstChild; d; ) {
            var x = d.nextSibling,
              T = d.nodeName;
            d[Nt] ||
              T === "SCRIPT" ||
              T === "STYLE" ||
              (T === "LINK" && d.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(d),
              (d = x);
          }
        } else a === "body" && ro(e.ownerDocument.body);
      a = u;
    } while (a);
    es(t);
  }
  function K1(e, t) {
    var a = e;
    e = 0;
    do {
      var o = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        o && o.nodeType === 8)
      )
        if (((a = o.data), a === "/$")) {
          if (e === 0) break;
          e--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || e++;
      a = o;
    } while (a);
  }
  function yh(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          yh(a), Xt(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function $2(e, t, a, o) {
    for (; e.nodeType === 1; ) {
      var u = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (o) {
        if (!e[Nt])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((d = e.getAttribute("rel")),
                d === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                d !== u.rel ||
                e.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                e.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((d = e.getAttribute("src")),
                (d !== (u.src == null ? null : u.src) ||
                  e.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  e.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  d &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var d = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === d) return e;
      } else return e;
      if (((e = La(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function I2(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = La(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function F1(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = La(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function bh(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function _h(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function eS(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading") t();
    else {
      var o = function () {
        t(), a.removeEventListener("DOMContentLoaded", o);
      };
      a.addEventListener("DOMContentLoaded", o), (e._reactRetry = o);
    }
  }
  function La(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Sh = null;
  function J1(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return La(e.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function W1(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function $1(e, t, a) {
    switch (((t = su(a)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(i(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(i(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function ro(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Xt(e);
  }
  var Ha = new Map(),
    I1 = new Set();
  function ou(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var Li = Q.d;
  Q.d = { f: tS, r: nS, D: aS, C: iS, L: rS, m: lS, X: oS, S: sS, M: cS };
  function tS() {
    var e = Li.f(),
      t = Ic();
    return e || t;
  }
  function nS(e) {
    var t = Vn(e);
    t !== null && t.tag === 5 && t.type === "form" ? g0(t) : Li.r(e);
  }
  var Wl = typeof document > "u" ? null : document;
  function ex(e, t, a) {
    var o = Wl;
    if (o && typeof t == "string" && t) {
      var u = Ra(t);
      (u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        I1.has(u) ||
          (I1.add(u),
          (e = { rel: e, crossOrigin: a, href: t }),
          o.querySelector(u) === null &&
            ((t = o.createElement("link")),
            yn(t, "link", e),
            qe(t),
            o.head.appendChild(t)));
    }
  }
  function aS(e) {
    Li.D(e), ex("dns-prefetch", e, null);
  }
  function iS(e, t) {
    Li.C(e, t), ex("preconnect", e, t);
  }
  function rS(e, t, a) {
    Li.L(e, t, a);
    var o = Wl;
    if (o && e && t) {
      var u = 'link[rel="preload"][as="' + Ra(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + Ra(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (u += '[imagesizes="' + Ra(a.imageSizes) + '"]'))
        : (u += '[href="' + Ra(e) + '"]');
      var d = u;
      switch (t) {
        case "style":
          d = $l(e);
          break;
        case "script":
          d = Il(e);
      }
      Ha.has(d) ||
        ((e = v(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : e,
            as: t,
          },
          a
        )),
        Ha.set(d, e),
        o.querySelector(u) !== null ||
          (t === "style" && o.querySelector(lo(d))) ||
          (t === "script" && o.querySelector(so(d))) ||
          ((t = o.createElement("link")),
          yn(t, "link", e),
          qe(t),
          o.head.appendChild(t)));
    }
  }
  function lS(e, t) {
    Li.m(e, t);
    var a = Wl;
    if (a && e) {
      var o = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + Ra(o) + '"][href="' + Ra(e) + '"]',
        d = u;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = Il(e);
      }
      if (
        !Ha.has(d) &&
        ((e = v({ rel: "modulepreload", href: e }, t)),
        Ha.set(d, e),
        a.querySelector(u) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(so(d))) return;
        }
        (o = a.createElement("link")),
          yn(o, "link", e),
          qe(o),
          a.head.appendChild(o);
      }
    }
  }
  function sS(e, t, a) {
    Li.S(e, t, a);
    var o = Wl;
    if (o && e) {
      var u = Ot(o).hoistableStyles,
        d = $l(e);
      t = t || "default";
      var x = u.get(d);
      if (!x) {
        var T = { loading: 0, preload: null };
        if ((x = o.querySelector(lo(d)))) T.loading = 5;
        else {
          (e = v({ rel: "stylesheet", href: e, "data-precedence": t }, a)),
            (a = Ha.get(d)) && wh(e, a);
          var M = (x = o.createElement("link"));
          qe(M),
            yn(M, "link", e),
            (M._p = new Promise(function (q, J) {
              (M.onload = q), (M.onerror = J);
            })),
            M.addEventListener("load", function () {
              T.loading |= 1;
            }),
            M.addEventListener("error", function () {
              T.loading |= 2;
            }),
            (T.loading |= 4),
            cu(x, t, o);
        }
        (x = { type: "stylesheet", instance: x, count: 1, state: T }),
          u.set(d, x);
      }
    }
  }
  function oS(e, t) {
    Li.X(e, t);
    var a = Wl;
    if (a && e) {
      var o = Ot(a).hoistableScripts,
        u = Il(e),
        d = o.get(u);
      d ||
        ((d = a.querySelector(so(u))),
        d ||
          ((e = v({ src: e, async: !0 }, t)),
          (t = Ha.get(u)) && Th(e, t),
          (d = a.createElement("script")),
          qe(d),
          yn(d, "link", e),
          a.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        o.set(u, d));
    }
  }
  function cS(e, t) {
    Li.M(e, t);
    var a = Wl;
    if (a && e) {
      var o = Ot(a).hoistableScripts,
        u = Il(e),
        d = o.get(u);
      d ||
        ((d = a.querySelector(so(u))),
        d ||
          ((e = v({ src: e, async: !0, type: "module" }, t)),
          (t = Ha.get(u)) && Th(e, t),
          (d = a.createElement("script")),
          qe(d),
          yn(d, "link", e),
          a.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        o.set(u, d));
    }
  }
  function tx(e, t, a, o) {
    var u = (u = oe.current) ? ou(u) : null;
    if (!u) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = $l(a.href)),
            (a = Ot(u).hoistableStyles),
            (o = a.get(t)),
            o ||
              ((o = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = $l(a.href);
          var d = Ot(u).hoistableStyles,
            x = d.get(e);
          if (
            (x ||
              ((u = u.ownerDocument || u),
              (x = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              d.set(e, x),
              (d = u.querySelector(lo(e))) &&
                !d._p &&
                ((x.instance = d), (x.state.loading = 5)),
              Ha.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Ha.set(e, a),
                d || uS(u, e, a, x.state))),
            t && o === null)
          )
            throw Error(i(528, ""));
          return x;
        }
        if (t && o !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Il(a)),
              (a = Ot(u).hoistableScripts),
              (o = a.get(t)),
              o ||
                ((o = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, e));
    }
  }
  function $l(e) {
    return 'href="' + Ra(e) + '"';
  }
  function lo(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function nx(e) {
    return v({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function uS(e, t, a, o) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (o.loading = 1)
      : ((t = e.createElement("link")),
        (o.preload = t),
        t.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        yn(t, "link", a),
        qe(t),
        e.head.appendChild(t));
  }
  function Il(e) {
    return '[src="' + Ra(e) + '"]';
  }
  function so(e) {
    return "script[async]" + e;
  }
  function ax(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var o = e.querySelector('style[data-href~="' + Ra(a.href) + '"]');
          if (o) return (t.instance = o), qe(o), o;
          var u = v({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (e.ownerDocument || e).createElement("style")),
            qe(o),
            yn(o, "style", u),
            cu(o, a.precedence, e),
            (t.instance = o)
          );
        case "stylesheet":
          u = $l(a.href);
          var d = e.querySelector(lo(u));
          if (d) return (t.state.loading |= 4), (t.instance = d), qe(d), d;
          (o = nx(a)),
            (u = Ha.get(u)) && wh(o, u),
            (d = (e.ownerDocument || e).createElement("link")),
            qe(d);
          var x = d;
          return (
            (x._p = new Promise(function (T, M) {
              (x.onload = T), (x.onerror = M);
            })),
            yn(d, "link", o),
            (t.state.loading |= 4),
            cu(d, a.precedence, e),
            (t.instance = d)
          );
        case "script":
          return (
            (d = Il(a.src)),
            (u = e.querySelector(so(d)))
              ? ((t.instance = u), qe(u), u)
              : ((o = a),
                (u = Ha.get(d)) && ((o = v({}, a)), Th(o, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement("script")),
                qe(u),
                yn(u, "link", o),
                e.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((o = t.instance), (t.state.loading |= 4), cu(o, a.precedence, e));
    return t.instance;
  }
  function cu(e, t, a) {
    for (
      var o = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = o.length ? o[o.length - 1] : null,
        d = u,
        x = 0;
      x < o.length;
      x++
    ) {
      var T = o[x];
      if (T.dataset.precedence === t) d = T;
      else if (d !== u) break;
    }
    d
      ? d.parentNode.insertBefore(e, d.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
  }
  function wh(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Th(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var uu = null;
  function ix(e, t, a) {
    if (uu === null) {
      var o = new Map(),
        u = (uu = new Map());
      u.set(a, o);
    } else (u = uu), (o = u.get(a)), o || ((o = new Map()), u.set(a, o));
    if (o.has(e)) return o;
    for (
      o.set(e, null), a = a.getElementsByTagName(e), u = 0;
      u < a.length;
      u++
    ) {
      var d = a[u];
      if (
        !(
          d[Nt] ||
          d[He] ||
          (e === "link" && d.getAttribute("rel") === "stylesheet")
        ) &&
        d.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var x = d.getAttribute(t) || "";
        x = e + x;
        var T = o.get(x);
        T ? T.push(d) : o.set(x, [d]);
      }
    }
    return o;
  }
  function rx(e, t, a) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function fS(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function lx(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function dS(e, t, a, o) {
    if (
      a.type === "stylesheet" &&
      (typeof o.media != "string" || matchMedia(o.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var u = $l(o.href),
          d = t.querySelector(lo(u));
        if (d) {
          (t = d._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = fu.bind(e)), t.then(e, e)),
            (a.state.loading |= 4),
            (a.instance = d),
            qe(d);
          return;
        }
        (d = t.ownerDocument || t),
          (o = nx(o)),
          (u = Ha.get(u)) && wh(o, u),
          (d = d.createElement("link")),
          qe(d);
        var x = d;
        (x._p = new Promise(function (T, M) {
          (x.onload = T), (x.onerror = M);
        })),
          yn(d, "link", o),
          (a.instance = d);
      }
      e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (e.count++,
          (a = fu.bind(e)),
          t.addEventListener("load", a),
          t.addEventListener("error", a));
    }
  }
  var Eh = 0;
  function hS(e, t) {
    return (
      e.stylesheets && e.count === 0 && hu(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (a) {
            var o = setTimeout(function () {
              if ((e.stylesheets && hu(e, e.stylesheets), e.unsuspend)) {
                var d = e.unsuspend;
                (e.unsuspend = null), d();
              }
            }, 6e4 + t);
            0 < e.imgBytes && Eh === 0 && (Eh = 62500 * P2());
            var u = setTimeout(function () {
              if (
                ((e.waitingForImages = !1),
                e.count === 0 &&
                  (e.stylesheets && hu(e, e.stylesheets), e.unsuspend))
              ) {
                var d = e.unsuspend;
                (e.unsuspend = null), d();
              }
            }, (e.imgBytes > Eh ? 50 : 800) + t);
            return (
              (e.unsuspend = a),
              function () {
                (e.unsuspend = null), clearTimeout(o), clearTimeout(u);
              }
            );
          }
        : null
    );
  }
  function fu() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) hu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var du = null;
  function hu(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (du = new Map()),
        t.forEach(pS, e),
        (du = null),
        fu.call(e));
  }
  function pS(e, t) {
    if (!(t.state.loading & 4)) {
      var a = du.get(e);
      if (a) var o = a.get(null);
      else {
        (a = new Map()), du.set(e, a);
        for (
          var u = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            d = 0;
          d < u.length;
          d++
        ) {
          var x = u[d];
          (x.nodeName === "LINK" || x.getAttribute("media") !== "not all") &&
            (a.set(x.dataset.precedence, x), (o = x));
        }
        o && a.set(null, o);
      }
      (u = t.instance),
        (x = u.getAttribute("data-precedence")),
        (d = a.get(x) || o),
        d === o && a.set(null, u),
        a.set(x, u),
        this.count++,
        (o = fu.bind(this)),
        u.addEventListener("load", o),
        u.addEventListener("error", o),
        d
          ? d.parentNode.insertBefore(u, d.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var oo = {
    $$typeof: R,
    Provider: null,
    Consumer: null,
    _currentValue: te,
    _currentValue2: te,
    _threadCount: 0,
  };
  function mS(e, t, a, o, u, d, x, T, M) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Me(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Me(0)),
      (this.hiddenUpdates = Me(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = u),
      (this.onCaughtError = d),
      (this.onRecoverableError = x),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = M),
      (this.incompleteTransitions = new Map());
  }
  function sx(e, t, a, o, u, d, x, T, M, q, J, $) {
    return (
      (e = new mS(e, t, a, x, M, q, J, $, T)),
      (t = 1),
      d === !0 && (t |= 24),
      (d = oa(3, null, null, t)),
      (e.current = d),
      (d.stateNode = e),
      (t = id()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (d.memoizedState = { element: o, isDehydrated: a, cache: t }),
      od(d),
      e
    );
  }
  function ox(e) {
    return e ? ((e = Ol), e) : Ol;
  }
  function cx(e, t, a, o, u, d) {
    (u = ox(u)),
      o.context === null ? (o.context = u) : (o.pendingContext = u),
      (o = er(t)),
      (o.payload = { element: a }),
      (d = d === void 0 ? null : d),
      d !== null && (o.callback = d),
      (a = tr(e, o, t)),
      a !== null && (Jn(a, e, t), Gs(a, e, t));
  }
  function ux(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Ch(e, t) {
    ux(e, t), (e = e.alternate) && ux(e, t);
  }
  function fx(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ur(e, 67108864);
      t !== null && Jn(t, e, 67108864), Ch(e, 67108864);
    }
  }
  function dx(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ha();
      t = Oe(t);
      var a = Ur(e, t);
      a !== null && Jn(a, e, t), Ch(e, t);
    }
  }
  var pu = !0;
  function gS(e, t, a, o) {
    var u = U.T;
    U.T = null;
    var d = Q.p;
    try {
      (Q.p = 2), Ah(e, t, a, o);
    } finally {
      (Q.p = d), (U.T = u);
    }
  }
  function xS(e, t, a, o) {
    var u = U.T;
    U.T = null;
    var d = Q.p;
    try {
      (Q.p = 8), Ah(e, t, a, o);
    } finally {
      (Q.p = d), (U.T = u);
    }
  }
  function Ah(e, t, a, o) {
    if (pu) {
      var u = Nh(o);
      if (u === null) hh(e, t, o, mu, a), px(e, o);
      else if (yS(u, e, t, a, o)) o.stopPropagation();
      else if ((px(e, o), t & 4 && -1 < vS.indexOf(e))) {
        for (; u !== null; ) {
          var d = Vn(u);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (((d = d.stateNode), d.current.memoizedState.isDehydrated)) {
                  var x = Ut(d.pendingLanes);
                  if (x !== 0) {
                    var T = d;
                    for (T.pendingLanes |= 2, T.entangledLanes |= 2; x; ) {
                      var M = 1 << (31 - Ht(x));
                      (T.entanglements[1] |= M), (x &= ~M);
                    }
                    ci(d), (at & 6) === 0 && ((Wc = wt() + 500), no(0));
                  }
                }
                break;
              case 31:
              case 13:
                (T = Ur(d, 2)), T !== null && Jn(T, d, 2), Ic(), Ch(d, 2);
            }
          if (((d = Nh(o)), d === null && hh(e, t, o, mu, a), d === u)) break;
          u = d;
        }
        u !== null && o.stopPropagation();
      } else hh(e, t, o, null, a);
    }
  }
  function Nh(e) {
    return (e = Of(e)), Rh(e);
  }
  var mu = null;
  function Rh(e) {
    if (((mu = null), (e = Rt(e)), e !== null)) {
      var t = c(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = f(t)), e !== null)) return e;
          e = null;
        } else if (a === 31) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (mu = e), null;
  }
  function hx(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (At()) {
          case ia:
            return 2;
          case dt:
            return 8;
          case cn:
          case un:
            return 32;
          case tn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Oh = !1,
    dr = null,
    hr = null,
    pr = null,
    co = new Map(),
    uo = new Map(),
    mr = [],
    vS =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function px(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        dr = null;
        break;
      case "dragenter":
      case "dragleave":
        hr = null;
        break;
      case "mouseover":
      case "mouseout":
        pr = null;
        break;
      case "pointerover":
      case "pointerout":
        co.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        uo.delete(t.pointerId);
    }
  }
  function fo(e, t, a, o, u, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: o,
          nativeEvent: d,
          targetContainers: [u],
        }),
        t !== null && ((t = Vn(t)), t !== null && fx(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function yS(e, t, a, o, u) {
    switch (t) {
      case "focusin":
        return (dr = fo(dr, e, t, a, o, u)), !0;
      case "dragenter":
        return (hr = fo(hr, e, t, a, o, u)), !0;
      case "mouseover":
        return (pr = fo(pr, e, t, a, o, u)), !0;
      case "pointerover":
        var d = u.pointerId;
        return co.set(d, fo(co.get(d) || null, e, t, a, o, u)), !0;
      case "gotpointercapture":
        return (
          (d = u.pointerId), uo.set(d, fo(uo.get(d) || null, e, t, a, o, u)), !0
        );
    }
    return !1;
  }
  function mx(e) {
    var t = Rt(e.target);
    if (t !== null) {
      var a = c(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = f(a)), t !== null)) {
            (e.blockedOn = t),
              Tt(e.priority, function () {
                dx(a);
              });
            return;
          }
        } else if (t === 31) {
          if (((t = h(a)), t !== null)) {
            (e.blockedOn = t),
              Tt(e.priority, function () {
                dx(a);
              });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function gu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Nh(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var o = new a.constructor(a.type, a);
        (Rf = o), a.target.dispatchEvent(o), (Rf = null);
      } else return (t = Vn(a)), t !== null && fx(t), (e.blockedOn = a), !1;
      t.shift();
    }
    return !0;
  }
  function gx(e, t, a) {
    gu(e) && a.delete(t);
  }
  function bS() {
    (Oh = !1),
      dr !== null && gu(dr) && (dr = null),
      hr !== null && gu(hr) && (hr = null),
      pr !== null && gu(pr) && (pr = null),
      co.forEach(gx),
      uo.forEach(gx);
  }
  function xu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Oh ||
        ((Oh = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, bS)));
  }
  var vu = null;
  function xx(e) {
    vu !== e &&
      ((vu = e),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        vu === e && (vu = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            o = e[t + 1],
            u = e[t + 2];
          if (typeof o != "function") {
            if (Rh(o || a) === null) continue;
            break;
          }
          var d = Vn(a);
          d !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Nd(d, { pending: !0, data: u, method: a.method, action: o }, o, u));
        }
      }));
  }
  function es(e) {
    function t(M) {
      return xu(M, e);
    }
    dr !== null && xu(dr, e),
      hr !== null && xu(hr, e),
      pr !== null && xu(pr, e),
      co.forEach(t),
      uo.forEach(t);
    for (var a = 0; a < mr.length; a++) {
      var o = mr[a];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < mr.length && ((a = mr[0]), a.blockedOn === null); )
      mx(a), a.blockedOn === null && mr.shift();
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (o = 0; o < a.length; o += 3) {
        var u = a[o],
          d = a[o + 1],
          x = u[Ue] || null;
        if (typeof d == "function") x || xx(a);
        else if (x) {
          var T = null;
          if (d && d.hasAttribute("formAction")) {
            if (((u = d), (x = d[Ue] || null))) T = x.formAction;
            else if (Rh(u) !== null) continue;
          } else T = x.action;
          typeof T == "function" ? (a[o + 1] = T) : (a.splice(o, 3), (o -= 3)),
            xx(a);
        }
      }
  }
  function vx() {
    function e(d) {
      d.canIntercept &&
        d.info === "react-transition" &&
        d.intercept({
          handler: function () {
            return new Promise(function (x) {
              return (u = x);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      u !== null && (u(), (u = null)), o || setTimeout(a, 20);
    }
    function a() {
      if (!o && !navigation.transition) {
        var d = navigation.currentEntry;
        d &&
          d.url != null &&
          navigation.navigate(d.url, {
            state: d.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var o = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          (o = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null));
        }
      );
    }
  }
  function Mh(e) {
    this._internalRoot = e;
  }
  (yu.prototype.render = Mh.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      var a = t.current,
        o = ha();
      cx(a, o, e, t, null, null);
    }),
    (yu.prototype.unmount = Mh.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          cx(e.current, 2, null, e, null, null), Ic(), (t[$e] = null);
        }
      });
  function yu(e) {
    this._internalRoot = e;
  }
  yu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ye();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < mr.length && t !== 0 && t < mr[a].priority; a++);
      mr.splice(a, 0, e), a === 0 && mx(e);
    }
  };
  var yx = n.version;
  if (yx !== "19.2.7") throw Error(i(527, yx, "19.2.7"));
  Q.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(i(188))
        : ((e = Object.keys(e).join(",")), Error(i(268, e)));
    return (
      (e = m(t)),
      (e = e !== null ? g(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var _S = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.2.7",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bu.isDisabled && bu.supportsFiber)
      try {
        (Rn = bu.inject(_S)), (xt = bu);
      } catch {}
  }
  return (
    (po.createRoot = function (e, t) {
      if (!l(e)) throw Error(i(299));
      var a = !1,
        o = "",
        u = C0,
        d = A0,
        x = N0;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (d = t.onCaughtError),
          t.onRecoverableError !== void 0 && (x = t.onRecoverableError)),
        (t = sx(e, 1, !1, null, null, a, o, null, u, d, x, vx)),
        (e[$e] = t.current),
        dh(e),
        new Mh(t)
      );
    }),
    (po.hydrateRoot = function (e, t, a) {
      if (!l(e)) throw Error(i(299));
      var o = !1,
        u = "",
        d = C0,
        x = A0,
        T = N0,
        M = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (o = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (d = a.onUncaughtError),
          a.onCaughtError !== void 0 && (x = a.onCaughtError),
          a.onRecoverableError !== void 0 && (T = a.onRecoverableError),
          a.formState !== void 0 && (M = a.formState)),
        (t = sx(e, 1, !0, t, a ?? null, o, u, M, d, x, T, vx)),
        (t.context = ox(null)),
        (a = t.current),
        (o = ha()),
        (o = Oe(o)),
        (u = er(o)),
        (u.callback = null),
        tr(a, u, o),
        (a = o),
        (t.current.lanes = a),
        we(t, a),
        ci(t),
        (e[$e] = t.current),
        dh(e),
        new yu(t)
      );
    }),
    (po.version = "19.2.7"),
    po
  );
}
var Rx;
function MS() {
  if (Rx) return Dh.exports;
  Rx = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (n) {
        console.error(n);
      }
  }
  return s(), (Dh.exports = OS()), Dh.exports;
}
var zS = MS();
var Dp = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,
  qv = /^[\\/]{2}/;
function jS(s, n) {
  return n + s.replace(/\\/g, "/");
}
var Ox = "popstate";
function Mx(s) {
  return (
    typeof s == "object" &&
    s != null &&
    "pathname" in s &&
    "search" in s &&
    "hash" in s &&
    "state" in s &&
    "key" in s
  );
}
function DS(s = {}) {
  function n(i, l) {
    let c = l.state?.masked,
      { pathname: f, search: h, hash: p } = c || i.location;
    return ip(
      "",
      { pathname: f, search: h, hash: p },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
      c
        ? {
            pathname: i.location.pathname,
            search: i.location.search,
            hash: i.location.hash,
          }
        : void 0
    );
  }
  function r(i, l) {
    return typeof l == "string" ? l : Xo(l);
  }
  return LS(n, r, null, s);
}
function kt(s, n) {
  if (s === !1 || s === null || typeof s > "u") throw new Error(n);
}
function xi(s, n) {
  if (!s) {
    typeof console < "u" && console.warn(n);
    try {
      throw new Error(n);
    } catch {}
  }
}
function kS() {
  return Math.random().toString(36).substring(2, 10);
}
function zx(s, n) {
  return {
    usr: s.state,
    key: s.key,
    idx: n,
    masked: s.mask
      ? { pathname: s.pathname, search: s.search, hash: s.hash }
      : void 0,
  };
}
function ip(s, n, r = null, i, l) {
  return {
    pathname: typeof s == "string" ? s : s.pathname,
    search: "",
    hash: "",
    ...(typeof n == "string" ? ws(n) : n),
    state: r,
    key: (n && n.key) || i || kS(),
    mask: l,
  };
}
function Xo({ pathname: s = "/", search: n = "", hash: r = "" }) {
  return (
    n && n !== "?" && (s += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (s += r.charAt(0) === "#" ? r : "#" + r),
    s
  );
}
function ws(s) {
  let n = {};
  if (s) {
    let r = s.indexOf("#");
    r >= 0 && ((n.hash = s.substring(r)), (s = s.substring(0, r)));
    let i = s.indexOf("?");
    i >= 0 && ((n.search = s.substring(i)), (s = s.substring(0, i))),
      s && (n.pathname = s);
  }
  return n;
}
function LS(s, n, r, i = {}) {
  let { window: l = document.defaultView, v5Compat: c = !1 } = i,
    f = l.history,
    h = "POP",
    p = null,
    m = g();
  m == null && ((m = 0), f.replaceState({ ...f.state, idx: m }, ""));
  function g() {
    return (f.state || { idx: null }).idx;
  }
  function v() {
    h = "POP";
    let E = g(),
      C = E == null ? null : E - m;
    (m = E), p && p({ action: h, location: S.location, delta: C });
  }
  function b(E, C) {
    h = "PUSH";
    let A = Mx(E) ? E : ip(S.location, E, C);
    m = g() + 1;
    let R = zx(A, m),
      D = S.createHref(A.mask || A);
    try {
      f.pushState(R, "", D);
    } catch (H) {
      if (H instanceof DOMException && H.name === "DataCloneError") throw H;
      l.location.assign(D);
    }
    c && p && p({ action: h, location: S.location, delta: 1 });
  }
  function _(E, C) {
    h = "REPLACE";
    let A = Mx(E) ? E : ip(S.location, E, C);
    m = g();
    let R = zx(A, m),
      D = S.createHref(A.mask || A);
    f.replaceState(R, "", D),
      c && p && p({ action: h, location: S.location, delta: 0 });
  }
  function w(E) {
    return HS(l, E);
  }
  let S = {
    get action() {
      return h;
    },
    get location() {
      return s(l, f);
    },
    listen(E) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Ox, v),
        (p = E),
        () => {
          l.removeEventListener(Ox, v), (p = null);
        }
      );
    },
    createHref(E) {
      return n(l, E);
    },
    createURL: w,
    encodeLocation(E) {
      let C = w(E);
      return { pathname: C.pathname, search: C.search, hash: C.hash };
    },
    push: b,
    replace: _,
    go(E) {
      return f.go(E);
    },
  };
  return S;
}
function HS(s, n, r = !1) {
  let i = "http://localhost";
  s && (i = s.location.origin !== "null" ? s.location.origin : s.location.href),
    kt(i, "No window.location.(origin|href) available to create URL");
  let l = typeof n == "string" ? n : Xo(n);
  return (
    (l = l.replace(/ $/, "%20")), !r && qv.test(l) && (l = i + l), new URL(l, i)
  );
}
function Xv(s, n, r = "/") {
  return US(s, n, r, !1);
}
function US(s, n, r, i, l) {
  let c = typeof n == "string" ? ws(n) : n,
    f = Xi(c.pathname || "/", r);
  if (f == null) return null;
  let h = BS(s),
    p = null,
    m = JS(f);
  for (let g = 0; p == null && g < h.length; ++g) p = FS(h[g], m, i);
  return p;
}
function BS(s) {
  let n = Vv(s);
  return GS(n), n;
}
function Vv(s, n = [], r = [], i = "", l = !1) {
  let c = (f, h, p = l, m) => {
    let g = {
      relativePath: m === void 0 ? f.path || "" : m,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: h,
      route: f,
    };
    if (g.relativePath.startsWith("/")) {
      if (!g.relativePath.startsWith(i) && p) return;
      kt(
        g.relativePath.startsWith(i),
        `Absolute route path "${g.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (g.relativePath = g.relativePath.slice(i.length));
    }
    let v = ei([i, g.relativePath]),
      b = r.concat(g);
    f.children &&
      f.children.length > 0 &&
      (kt(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${v}".`
      ),
      Vv(f.children, n, b, v, p)),
      !(f.path == null && !f.index) &&
        n.push({
          path: v,
          score: PS(v, f.index),
          routesMeta: b.map((_, w) => {
            let [S, E] = Pv(
              _.relativePath,
              _.caseSensitive,
              w === b.length - 1
            );
            return { ..._, matcher: S, compiledParams: E };
          }),
        });
  };
  return (
    s.forEach((f, h) => {
      if (f.path === "" || !f.path?.includes("?")) c(f, h);
      else for (let p of Zv(f.path)) c(f, h, !0, p);
    }),
    n
  );
}
function Zv(s) {
  let n = s.split("/");
  if (n.length === 0) return [];
  let [r, ...i] = n,
    l = r.endsWith("?"),
    c = r.replace(/\?$/, "");
  if (i.length === 0) return l ? [c, ""] : [c];
  let f = Zv(i.join("/")),
    h = [];
  return (
    h.push(...f.map((p) => (p === "" ? c : [c, p].join("/")))),
    l && h.push(...f),
    h.map((p) => (s.startsWith("/") && p === "" ? "/" : p))
  );
}
function GS(s) {
  s.sort((n, r) =>
    n.score !== r.score
      ? r.score - n.score
      : KS(
          n.routesMeta.map((i) => i.childrenIndex),
          r.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
var YS = /^:[\w-]+$/,
  qS = 3,
  XS = 2,
  VS = 1,
  ZS = 10,
  QS = -2,
  jx = (s) => s === "*";
function PS(s, n) {
  let r = s.split("/"),
    i = r.length;
  return (
    r.some(jx) && (i += QS),
    n && (i += XS),
    r
      .filter((l) => !jx(l))
      .reduce((l, c) => l + (YS.test(c) ? qS : c === "" ? VS : ZS), i)
  );
}
function KS(s, n) {
  return s.length === n.length && s.slice(0, -1).every((i, l) => i === n[l])
    ? s[s.length - 1] - n[n.length - 1]
    : 0;
}
function FS(s, n, r = !1) {
  let { routesMeta: i } = s,
    l = {},
    c = "/",
    f = [];
  for (let h = 0; h < i.length; ++h) {
    let p = i[h],
      m = h === i.length - 1,
      g = c === "/" ? n : n.slice(c.length) || "/",
      v = { path: p.relativePath, caseSensitive: p.caseSensitive, end: m },
      b =
        p.matcher && p.compiledParams
          ? Qv(v, g, p.matcher, p.compiledParams)
          : Ku(v, g),
      _ = p.route;
    if (
      (!b &&
        m &&
        r &&
        !i[i.length - 1].route.index &&
        (b = Ku(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          g
        )),
      !b)
    )
      return null;
    Object.assign(l, b.params),
      f.push({
        params: l,
        pathname: ei([c, b.pathname]),
        pathnameBase: IS(ei([c, b.pathnameBase])),
        route: _,
      }),
      b.pathnameBase !== "/" && (c = ei([c, b.pathnameBase]));
  }
  return f;
}
function Ku(s, n) {
  typeof s == "string" && (s = { path: s, caseSensitive: !1, end: !0 });
  let [r, i] = Pv(s.path, s.caseSensitive, s.end);
  return Qv(s, n, r, i);
}
function Qv(s, n, r, i) {
  let l = n.match(r);
  if (!l) return null;
  let c = l[0],
    f = c.replace(/(.)\/+$/, "$1"),
    h = l.slice(1);
  return {
    params: i.reduce((m, { paramName: g, isOptional: v }, b) => {
      if (g === "*") {
        let w = h[b] || "";
        f = c.slice(0, c.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const _ = h[b];
      return (
        v && !_ ? (m[g] = void 0) : (m[g] = (_ || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: c,
    pathnameBase: f,
    pattern: s,
  };
}
function Pv(s, n = !1, r = !0) {
  xi(
    s === "*" || !s.endsWith("*") || s.endsWith("/*"),
    `Route path "${s}" will be treated as if it were "${s.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let i = [],
    l =
      "^" +
      s
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(/\/:([\w-]+)(\?)?/g, (f, h, p, m, g) => {
          if ((i.push({ paramName: h, isOptional: p != null }), p)) {
            let v = g.charAt(m + f.length);
            return v && v !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
          }
          return "/([^\\/]+)";
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    s.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (l += s === "*" || s === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (l += "\\/*$")
      : s !== "" && s !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, n ? void 0 : "i"), i]
  );
}
function JS(s) {
  try {
    return s
      .split("/")
      .map((n) => decodeURIComponent(n).replace(/\//g, "%2F"))
      .join("/");
  } catch (n) {
    return (
      xi(
        !1,
        `The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`
      ),
      s
    );
  }
}
function Xi(s, n) {
  if (n === "/") return s;
  if (!s.toLowerCase().startsWith(n.toLowerCase())) return null;
  let r = n.endsWith("/") ? n.length - 1 : n.length,
    i = s.charAt(r);
  return i && i !== "/" ? null : s.slice(r) || "/";
}
function WS(s, n = "/") {
  let {
      pathname: r,
      search: i = "",
      hash: l = "",
    } = typeof s == "string" ? ws(s) : s,
    c;
  return (
    r
      ? ((r = Fv(r)),
        r.startsWith("/") ? (c = Dx(r.substring(1), "/")) : (c = Dx(r, n)))
      : (c = n),
    { pathname: c, search: e3(i), hash: t3(l) }
  );
}
function Dx(s, n) {
  let r = Fu(n).split("/");
  return (
    s.split("/").forEach((l) => {
      l === ".." ? r.length > 1 && r.pop() : l !== "." && r.push(l);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Uh(s, n, r, i) {
  return `Cannot include a '${s}' character in a manually specified \`to.${n}\` field [${JSON.stringify(
    i
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function $S(s) {
  return s.filter(
    (n, r) => r === 0 || (n.route.path && n.route.path.length > 0)
  );
}
function Kv(s) {
  let n = $S(s);
  return n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase));
}
function kp(s, n, r, i = !1) {
  let l;
  typeof s == "string"
    ? (l = ws(s))
    : ((l = { ...s }),
      kt(
        !l.pathname || !l.pathname.includes("?"),
        Uh("?", "pathname", "search", l)
      ),
      kt(
        !l.pathname || !l.pathname.includes("#"),
        Uh("#", "pathname", "hash", l)
      ),
      kt(!l.search || !l.search.includes("#"), Uh("#", "search", "hash", l)));
  let c = s === "" || l.pathname === "",
    f = c ? "/" : l.pathname,
    h;
  if (f == null) h = r;
  else {
    let v = n.length - 1;
    if (!i && f.startsWith("..")) {
      let b = f.split("/");
      for (; b[0] === ".."; ) b.shift(), (v -= 1);
      l.pathname = b.join("/");
    }
    h = v >= 0 ? n[v] : "/";
  }
  let p = WS(l, h),
    m = f && f !== "/" && f.endsWith("/"),
    g = (c || f === ".") && r.endsWith("/");
  return !p.pathname.endsWith("/") && (m || g) && (p.pathname += "/"), p;
}
var Fv = (s) => s.replace(/[\\/]{2,}/g, "/"),
  ei = (s) => Fv(s.join("/")),
  Fu = (s) => s.replace(/\/+$/, ""),
  IS = (s) => Fu(s).replace(/^\/*/, "/"),
  e3 = (s) => (!s || s === "?" ? "" : s.startsWith("?") ? s : "?" + s),
  t3 = (s) => (!s || s === "#" ? "" : s.startsWith("#") ? s : "#" + s),
  n3 = class {
    constructor(s, n, r, i = !1) {
      (this.status = s),
        (this.statusText = n || ""),
        (this.internal = i),
        r instanceof Error
          ? ((this.data = r.toString()), (this.error = r))
          : (this.data = r);
    }
  };
function a3(s) {
  return (
    s != null &&
    typeof s.status == "number" &&
    typeof s.statusText == "string" &&
    typeof s.internal == "boolean" &&
    "data" in s
  );
}
function i3(s) {
  let n = s.map((r) => r.route.path).filter(Boolean);
  return ei(n) || "/";
}
var Jv =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function Wv(s, n) {
  let r = s;
  if (typeof r != "string" || !Dp.test(r))
    return { absoluteURL: void 0, isExternal: !1, to: r };
  let i = r,
    l = !1;
  if (Jv)
    try {
      let c = new URL(window.location.href),
        f = qv.test(r) ? new URL(jS(r, c.protocol)) : new URL(r),
        h = Xi(f.pathname, n);
      f.origin === c.origin && h != null
        ? (r = h + f.search + f.hash)
        : (l = !0);
    } catch {
      xi(
        !1,
        `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: i, isExternal: l, to: r };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var $v = ["POST", "PUT", "PATCH", "DELETE"];
new Set($v);
var r3 = ["GET", ...$v];
new Set(r3);
var l3 = [
  "about:",
  "blob:",
  "chrome:",
  "chrome-untrusted:",
  "content:",
  "data:",
  "devtools:",
  "file:",
  "filesystem:",
  "javascript:",
];
function s3(s) {
  try {
    return l3.includes(new URL(s).protocol);
  } catch {
    return !1;
  }
}
var Ts = j.createContext(null);
Ts.displayName = "DataRouter";
var uf = j.createContext(null);
uf.displayName = "DataRouterState";
var Iv = j.createContext(!1);
function o3() {
  return j.useContext(Iv);
}
var ey = j.createContext({ isTransitioning: !1 });
ey.displayName = "ViewTransition";
var c3 = j.createContext(new Map());
c3.displayName = "Fetchers";
var u3 = j.createContext(null);
u3.displayName = "Await";
var Za = j.createContext(null);
Za.displayName = "Navigation";
var ic = j.createContext(null);
ic.displayName = "Location";
var Qi = j.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Qi.displayName = "Route";
var Lp = j.createContext(null);
Lp.displayName = "RouteError";
var ty = "REACT_ROUTER_ERROR",
  f3 = "REDIRECT",
  d3 = "ROUTE_ERROR_RESPONSE";
function h3(s) {
  if (s.startsWith(`${ty}:${f3}:{`))
    try {
      let n = JSON.parse(s.slice(28));
      if (
        typeof n == "object" &&
        n &&
        typeof n.status == "number" &&
        typeof n.statusText == "string" &&
        typeof n.location == "string" &&
        typeof n.reloadDocument == "boolean" &&
        typeof n.replace == "boolean"
      )
        return n;
    } catch {}
}
function p3(s) {
  if (s.startsWith(`${ty}:${d3}:{`))
    try {
      let n = JSON.parse(s.slice(40));
      if (
        typeof n == "object" &&
        n &&
        typeof n.status == "number" &&
        typeof n.statusText == "string"
      )
        return new n3(n.status, n.statusText, n.data);
    } catch {}
}
function m3(s, { relative: n } = {}) {
  kt(
    rc(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: i } = j.useContext(Za),
    { hash: l, pathname: c, search: f } = lc(s, { relative: n }),
    h = c;
  return (
    r !== "/" && (h = c === "/" ? r : ei([r, c])),
    i.createHref({ pathname: h, search: f, hash: l })
  );
}
function rc() {
  return j.useContext(ic) != null;
}
function Qa() {
  return (
    kt(
      rc(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    j.useContext(ic).location
  );
}
var ny =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ay(s) {
  j.useContext(Za).static || j.useLayoutEffect(s);
}
function iy() {
  let { isDataRoute: s } = j.useContext(Qi);
  return s ? N3() : g3();
}
function g3() {
  kt(
    rc(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let s = j.useContext(Ts),
    { basename: n, navigator: r } = j.useContext(Za),
    { matches: i } = j.useContext(Qi),
    { pathname: l } = Qa(),
    c = JSON.stringify(Kv(i)),
    f = j.useRef(!1);
  return (
    ay(() => {
      f.current = !0;
    }),
    j.useCallback(
      (p, m = {}) => {
        if ((xi(f.current, ny), !f.current)) return;
        if (typeof p == "number") {
          r.go(p);
          return;
        }
        let g = kp(p, JSON.parse(c), l, m.relative === "path");
        s == null &&
          n !== "/" &&
          (g.pathname = g.pathname === "/" ? n : ei([n, g.pathname])),
          (m.replace ? r.replace : r.push)(g, m.state, m);
      },
      [n, r, c, l, s]
    )
  );
}
j.createContext(null);
function lc(s, { relative: n } = {}) {
  let { matches: r } = j.useContext(Qi),
    { pathname: i } = Qa(),
    l = JSON.stringify(Kv(r));
  return j.useMemo(() => kp(s, JSON.parse(l), i, n === "path"), [s, l, i, n]);
}
function x3(s, n) {
  return ry(s, n);
}
function ry(s, n, r) {
  kt(
    rc(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: i } = j.useContext(Za),
    { matches: l } = j.useContext(Qi),
    c = l[l.length - 1],
    f = c ? c.params : {},
    h = c ? c.pathname : "/",
    p = c ? c.pathnameBase : "/",
    m = c && c.route;
  {
    let E = (m && m.path) || "";
    sy(
      h,
      !m || E.endsWith("*") || E.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${
        E === "/" ? "*" : `${E}/*`
      }">.`
    );
  }
  let g = Qa(),
    v;
  if (n) {
    let E = typeof n == "string" ? ws(n) : n;
    kt(
      p === "/" || E.pathname?.startsWith(p),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${E.pathname}" was given in the \`location\` prop.`
    ),
      (v = E);
  } else v = g;
  let b = v.pathname || "/",
    _ = b;
  if (p !== "/") {
    let E = p.replace(/^\//, "").split("/");
    _ = "/" + b.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let w =
    r && r.state.matches.length
      ? r.state.matches.map((E) =>
          Object.assign(E, { route: r.manifest[E.route.id] || E.route })
        )
      : Xv(s, { pathname: _ });
  xi(
    m || w != null,
    `No routes matched location "${v.pathname}${v.search}${v.hash}" `
  ),
    xi(
      w == null ||
        w[w.length - 1].route.element !== void 0 ||
        w[w.length - 1].route.Component !== void 0 ||
        w[w.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let S = S3(
    w &&
      w.map((E) =>
        Object.assign({}, E, {
          params: Object.assign({}, f, E.params),
          pathname: ei([
            p,
            i.encodeLocation
              ? i.encodeLocation(
                  E.pathname
                    .replace(/%/g, "%25")
                    .replace(/\?/g, "%3F")
                    .replace(/#/g, "%23")
                ).pathname
              : E.pathname,
          ]),
          pathnameBase:
            E.pathnameBase === "/"
              ? p
              : ei([
                  p,
                  i.encodeLocation
                    ? i.encodeLocation(
                        E.pathnameBase
                          .replace(/%/g, "%25")
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23")
                      ).pathname
                    : E.pathnameBase,
                ]),
        })
      ),
    l,
    r
  );
  return n && S
    ? j.createElement(
        ic.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              mask: void 0,
              ...v,
            },
            navigationType: "POP",
          },
        },
        S
      )
    : S;
}
function v3() {
  let s = A3(),
    n = a3(s)
      ? `${s.status} ${s.statusText}`
      : s instanceof Error
      ? s.message
      : JSON.stringify(s),
    r = s instanceof Error ? s.stack : null,
    i = "rgba(200,200,200, 0.5)",
    l = { padding: "0.5rem", backgroundColor: i },
    c = { padding: "2px 4px", backgroundColor: i },
    f = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", s),
    (f = j.createElement(
      j.Fragment,
      null,
      j.createElement("p", null, "💿 Hey developer 👋"),
      j.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        j.createElement("code", { style: c }, "ErrorBoundary"),
        " or",
        " ",
        j.createElement("code", { style: c }, "errorElement"),
        " prop on your route."
      )
    )),
    j.createElement(
      j.Fragment,
      null,
      j.createElement("h2", null, "Unexpected Application Error!"),
      j.createElement("h3", { style: { fontStyle: "italic" } }, n),
      r ? j.createElement("pre", { style: l }, r) : null,
      f
    )
  );
}
var y3 = j.createElement(v3, null),
  ly = class extends j.Component {
    constructor(s) {
      super(s),
        (this.state = {
          location: s.location,
          revalidation: s.revalidation,
          error: s.error,
        });
    }
    static getDerivedStateFromError(s) {
      return { error: s };
    }
    static getDerivedStateFromProps(s, n) {
      return n.location !== s.location ||
        (n.revalidation !== "idle" && s.revalidation === "idle")
        ? { error: s.error, location: s.location, revalidation: s.revalidation }
        : {
            error: s.error !== void 0 ? s.error : n.error,
            location: n.location,
            revalidation: s.revalidation || n.revalidation,
          };
    }
    componentDidCatch(s, n) {
      this.props.onError
        ? this.props.onError(s, n)
        : console.error(
            "React Router caught the following error during render",
            s
          );
    }
    render() {
      let s = this.state.error;
      if (
        this.context &&
        typeof s == "object" &&
        s &&
        "digest" in s &&
        typeof s.digest == "string"
      ) {
        const r = p3(s.digest);
        r && (s = r);
      }
      let n =
        s !== void 0
          ? j.createElement(
              Qi.Provider,
              { value: this.props.routeContext },
              j.createElement(Lp.Provider, {
                value: s,
                children: this.props.component,
              })
            )
          : this.props.children;
      return this.context ? j.createElement(b3, { error: s }, n) : n;
    }
  };
ly.contextType = Iv;
var Bh = new WeakMap();
function b3({ children: s, error: n }) {
  let { basename: r } = j.useContext(Za);
  if (
    typeof n == "object" &&
    n &&
    "digest" in n &&
    typeof n.digest == "string"
  ) {
    let i = h3(n.digest);
    if (i) {
      let l = Bh.get(n);
      if (l) throw l;
      let c = Wv(i.location, r),
        f = c.absoluteURL || c.to;
      if (s3(f)) throw new Error("Invalid redirect location");
      if (Jv && !Bh.get(n))
        if (c.isExternal || i.reloadDocument) window.location.href = f;
        else {
          const h = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(c.to, {
              replace: i.replace,
            })
          );
          throw (Bh.set(n, h), h);
        }
      return j.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${f}`,
      });
    }
  }
  return s;
}
function _3({ routeContext: s, match: n, children: r }) {
  let i = j.useContext(Ts);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    j.createElement(Qi.Provider, { value: s }, r)
  );
}
function S3(s, n = [], r) {
  let i = r?.state;
  if (s == null) {
    if (!i) return null;
    if (i.errors) s = i.matches;
    else if (n.length === 0 && !i.initialized && i.matches.length > 0)
      s = i.matches;
    else return null;
  }
  let l = s,
    c = i?.errors;
  if (c != null) {
    let g = l.findIndex((v) => v.route.id && c?.[v.route.id] !== void 0);
    kt(
      g >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        c
      ).join(",")}`
    ),
      (l = l.slice(0, Math.min(l.length, g + 1)));
  }
  let f = !1,
    h = -1;
  if (r && i) {
    f = i.renderFallback;
    for (let g = 0; g < l.length; g++) {
      let v = l[g];
      if (
        ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (h = g),
        v.route.id)
      ) {
        let { loaderData: b, errors: _ } = i,
          w =
            v.route.loader &&
            !b.hasOwnProperty(v.route.id) &&
            (!_ || _[v.route.id] === void 0);
        if (v.route.lazy || w) {
          r.isStatic && (f = !0),
            h >= 0 ? (l = l.slice(0, h + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  }
  let p = r?.onError,
    m =
      i && p
        ? (g, v) => {
            p(g, {
              location: i.location,
              params: i.matches?.[0]?.params ?? {},
              pattern: i3(i.matches),
              errorInfo: v,
            });
          }
        : void 0;
  return l.reduceRight((g, v, b) => {
    let _,
      w = !1,
      S = null,
      E = null;
    i &&
      ((_ = c && v.route.id ? c[v.route.id] : void 0),
      (S = v.route.errorElement || y3),
      f &&
        (h < 0 && b === 0
          ? (sy(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (w = !0),
            (E = null))
          : h === b &&
            ((w = !0), (E = v.route.hydrateFallbackElement || null))));
    let C = n.concat(l.slice(0, b + 1)),
      A = () => {
        let R;
        return (
          _
            ? (R = S)
            : w
            ? (R = E)
            : v.route.Component
            ? (R = j.createElement(v.route.Component, null))
            : v.route.element
            ? (R = v.route.element)
            : (R = g),
          j.createElement(_3, {
            match: v,
            routeContext: { outlet: g, matches: C, isDataRoute: i != null },
            children: R,
          })
        );
      };
    return i && (v.route.ErrorBoundary || v.route.errorElement || b === 0)
      ? j.createElement(ly, {
          location: i.location,
          revalidation: i.revalidation,
          component: S,
          error: _,
          children: A(),
          routeContext: { outlet: null, matches: C, isDataRoute: !0 },
          onError: m,
        })
      : A();
  }, null);
}
function Hp(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function w3(s) {
  let n = j.useContext(Ts);
  return kt(n, Hp(s)), n;
}
function T3(s) {
  let n = j.useContext(uf);
  return kt(n, Hp(s)), n;
}
function E3(s) {
  let n = j.useContext(Qi);
  return kt(n, Hp(s)), n;
}
function Up(s) {
  let n = E3(s),
    r = n.matches[n.matches.length - 1];
  return (
    kt(
      r.route.id,
      `${s} can only be used on routes that contain a unique "id"`
    ),
    r.route.id
  );
}
function C3() {
  return Up("useRouteId");
}
function A3() {
  let s = j.useContext(Lp),
    n = T3("useRouteError"),
    r = Up("useRouteError");
  return s !== void 0 ? s : n.errors?.[r];
}
function N3() {
  let { router: s } = w3("useNavigate"),
    n = Up("useNavigate"),
    r = j.useRef(!1);
  return (
    ay(() => {
      r.current = !0;
    }),
    j.useCallback(
      async (l, c = {}) => {
        xi(r.current, ny),
          r.current &&
            (typeof l == "number"
              ? await s.navigate(l)
              : await s.navigate(l, { fromRouteId: n, ...c }));
      },
      [s, n]
    )
  );
}
var kx = {};
function sy(s, n, r) {
  !n && !kx[s] && ((kx[s] = !0), xi(!1, r));
}
j.memo(R3);
function R3({
  routes: s,
  manifest: n,
  future: r,
  state: i,
  isStatic: l,
  onError: c,
}) {
  return ry(s, void 0, { manifest: n, state: i, isStatic: l, onError: c });
}
function el(s) {
  kt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function O3({
  basename: s = "/",
  children: n = null,
  location: r,
  navigationType: i = "POP",
  navigator: l,
  static: c = !1,
  useTransitions: f,
}) {
  kt(
    !rc(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let h = s.replace(/^\/*/, "/"),
    p = j.useMemo(
      () => ({
        basename: h,
        navigator: l,
        static: c,
        useTransitions: f,
        future: {},
      }),
      [h, l, c, f]
    );
  typeof r == "string" && (r = ws(r));
  let {
      pathname: m = "/",
      search: g = "",
      hash: v = "",
      state: b = null,
      key: _ = "default",
      mask: w,
    } = r,
    S = j.useMemo(() => {
      let E = Xi(m, h);
      return E == null
        ? null
        : {
            location: {
              pathname: E,
              search: g,
              hash: v,
              state: b,
              key: _,
              mask: w,
            },
            navigationType: i,
          };
    }, [h, m, g, v, b, _, i, w]);
  return (
    xi(
      S != null,
      `<Router basename="${h}"> is not able to match the URL "${m}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    S == null
      ? null
      : j.createElement(
          Za.Provider,
          { value: p },
          j.createElement(ic.Provider, { children: n, value: S })
        )
  );
}
function M3({ children: s, location: n }) {
  return x3(rp(s), n);
}
function rp(s, n = []) {
  let r = [];
  return (
    j.Children.forEach(s, (i, l) => {
      if (!j.isValidElement(i)) return;
      let c = [...n, l];
      if (i.type === j.Fragment) {
        r.push.apply(r, rp(i.props.children, c));
        return;
      }
      kt(
        i.type === el,
        `[${
          typeof i.type == "string" ? i.type : i.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        kt(
          !i.props.index || !i.props.children,
          "An index route cannot have child routes."
        );
      let f = {
        id: i.props.id || c.join("-"),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        middleware: i.props.middleware,
        loader: i.props.loader,
        action: i.props.action,
        hydrateFallbackElement: i.props.hydrateFallbackElement,
        HydrateFallback: i.props.HydrateFallback,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.hasErrorBoundary === !0 ||
          i.props.ErrorBoundary != null ||
          i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      i.props.children && (f.children = rp(i.props.children, c)), r.push(f);
    }),
    r
  );
}
var Hu = "get",
  Uu = "application/x-www-form-urlencoded";
function ff(s) {
  return typeof HTMLElement < "u" && s instanceof HTMLElement;
}
function z3(s) {
  return ff(s) && s.tagName.toLowerCase() === "button";
}
function j3(s) {
  return ff(s) && s.tagName.toLowerCase() === "form";
}
function D3(s) {
  return ff(s) && s.tagName.toLowerCase() === "input";
}
function k3(s) {
  return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
}
function L3(s, n) {
  return s.button === 0 && (!n || n === "_self") && !k3(s);
}
var _u = null;
function H3() {
  if (_u === null)
    try {
      new FormData(document.createElement("form"), 0), (_u = !1);
    } catch {
      _u = !0;
    }
  return _u;
}
var U3 = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Gh(s) {
  return s != null && !U3.has(s)
    ? (xi(
        !1,
        `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Uu}"`
      ),
      null)
    : s;
}
function B3(s, n) {
  let r, i, l, c, f;
  if (j3(s)) {
    let h = s.getAttribute("action");
    (i = h ? Xi(h, n) : null),
      (r = s.getAttribute("method") || Hu),
      (l = Gh(s.getAttribute("enctype")) || Uu),
      (c = new FormData(s));
  } else if (z3(s) || (D3(s) && (s.type === "submit" || s.type === "image"))) {
    let h = s.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = s.getAttribute("formaction") || h.getAttribute("action");
    if (
      ((i = p ? Xi(p, n) : null),
      (r = s.getAttribute("formmethod") || h.getAttribute("method") || Hu),
      (l =
        Gh(s.getAttribute("formenctype")) ||
        Gh(h.getAttribute("enctype")) ||
        Uu),
      (c = new FormData(h, s)),
      !H3())
    ) {
      let { name: m, type: g, value: v } = s;
      if (g === "image") {
        let b = m ? `${m}.` : "";
        c.append(`${b}x`, "0"), c.append(`${b}y`, "0");
      } else m && c.append(m, v);
    }
  } else {
    if (ff(s))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (r = Hu), (i = null), (l = Uu), (f = s);
  }
  return (
    c && l === "text/plain" && ((f = c), (c = void 0)),
    { action: i, method: r.toLowerCase(), encType: l, formData: c, body: f }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Bp(s, n) {
  if (s === !1 || s === null || typeof s > "u") throw new Error(n);
}
function oy(s, n, r, i) {
  let l =
    typeof s == "string"
      ? new URL(
          s,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : s;
  return (
    r
      ? l.pathname.endsWith("/")
        ? (l.pathname = `${l.pathname}_.${i}`)
        : (l.pathname = `${l.pathname}.${i}`)
      : l.pathname === "/"
      ? (l.pathname = `_root.${i}`)
      : n && Xi(l.pathname, n) === "/"
      ? (l.pathname = `${Fu(n)}/_root.${i}`)
      : (l.pathname = `${Fu(l.pathname)}.${i}`),
    l
  );
}
async function G3(s, n) {
  if (s.id in n) return n[s.id];
  try {
    let r = await import(s.module);
    return (n[s.id] = r), r;
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${s.module}\`, reloading page...`
      ),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Y3(s) {
  return s == null
    ? !1
    : s.href == null
    ? s.rel === "preload" &&
      typeof s.imageSrcSet == "string" &&
      typeof s.imageSizes == "string"
    : typeof s.rel == "string" && typeof s.href == "string";
}
async function q3(s, n, r) {
  let i = await Promise.all(
    s.map(async (l) => {
      let c = n.routes[l.route.id];
      if (c) {
        let f = await G3(c, r);
        return f.links ? f.links() : [];
      }
      return [];
    })
  );
  return Q3(
    i
      .flat(1)
      .filter(Y3)
      .filter((l) => l.rel === "stylesheet" || l.rel === "preload")
      .map((l) =>
        l.rel === "stylesheet"
          ? { ...l, rel: "prefetch", as: "style" }
          : { ...l, rel: "prefetch" }
      )
  );
}
function Lx(s, n, r, i, l, c) {
  let f = (p, m) => (r[m] ? p.route.id !== r[m].route.id : !0),
    h = (p, m) =>
      r[m].pathname !== p.pathname ||
      (r[m].route.path?.endsWith("*") && r[m].params["*"] !== p.params["*"]);
  return c === "assets"
    ? n.filter((p, m) => f(p, m) || h(p, m))
    : c === "data"
    ? n.filter((p, m) => {
        let g = i.routes[p.route.id];
        if (!g || !g.hasLoader) return !1;
        if (f(p, m) || h(p, m)) return !0;
        if (p.route.shouldRevalidate) {
          let v = p.route.shouldRevalidate({
            currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
            currentParams: r[0]?.params || {},
            nextUrl: new URL(s, window.origin),
            nextParams: p.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof v == "boolean") return v;
        }
        return !0;
      })
    : [];
}
function X3(s, n, { includeHydrateFallback: r } = {}) {
  return V3(
    s
      .map((i) => {
        let l = n.routes[i.route.id];
        if (!l) return [];
        let c = [l.module];
        return (
          l.clientActionModule && (c = c.concat(l.clientActionModule)),
          l.clientLoaderModule && (c = c.concat(l.clientLoaderModule)),
          r &&
            l.hydrateFallbackModule &&
            (c = c.concat(l.hydrateFallbackModule)),
          l.imports && (c = c.concat(l.imports)),
          c
        );
      })
      .flat(1)
  );
}
function V3(s) {
  return [...new Set(s)];
}
function Z3(s) {
  let n = {},
    r = Object.keys(s).sort();
  for (let i of r) n[i] = s[i];
  return n;
}
function Q3(s, n) {
  let r = new Set();
  return (
    new Set(n),
    s.reduce((i, l) => {
      let c = JSON.stringify(Z3(l));
      return r.has(c) || (r.add(c), i.push({ key: c, link: l })), i;
    }, [])
  );
}
function Gp() {
  let s = j.useContext(Ts);
  return (
    Bp(
      s,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    s
  );
}
function P3() {
  let s = j.useContext(uf);
  return (
    Bp(
      s,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    s
  );
}
var Yp = j.createContext(void 0);
Yp.displayName = "FrameworkContext";
function df() {
  let s = j.useContext(Yp);
  return (
    Bp(s, "You must render this element inside a <HydratedRouter> element"), s
  );
}
function K3(s, n) {
  let r = j.useContext(Yp),
    [i, l] = j.useState(!1),
    [c, f] = j.useState(!1),
    {
      onFocus: h,
      onBlur: p,
      onMouseEnter: m,
      onMouseLeave: g,
      onTouchStart: v,
    } = n,
    b = j.useRef(null);
  j.useEffect(() => {
    if ((s === "render" && f(!0), s === "viewport")) {
      let S = (C) => {
          C.forEach((A) => {
            f(A.isIntersecting);
          });
        },
        E = new IntersectionObserver(S, { threshold: 0.5 });
      return (
        b.current && E.observe(b.current),
        () => {
          E.disconnect();
        }
      );
    }
  }, [s]),
    j.useEffect(() => {
      if (i) {
        let S = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(S);
        };
      }
    }, [i]);
  let _ = () => {
      l(!0);
    },
    w = () => {
      l(!1), f(!1);
    };
  return r
    ? s !== "intent"
      ? [c, b, {}]
      : [
          c,
          b,
          {
            onFocus: mo(h, _),
            onBlur: mo(p, w),
            onMouseEnter: mo(m, _),
            onMouseLeave: mo(g, w),
            onTouchStart: mo(v, _),
          },
        ]
    : [!1, b, {}];
}
function mo(s, n) {
  return (r) => {
    s && s(r), r.defaultPrevented || n(r);
  };
}
function F3({ page: s, ...n }) {
  let r = o3(),
    { nonce: i } = df(),
    { router: l } = Gp(),
    c = j.useMemo(() => Xv(l.routes, s, l.basename), [l.routes, s, l.basename]);
  return c
    ? (n.nonce == null && i && (n = { ...n, nonce: i }),
      r
        ? j.createElement(W3, { page: s, matches: c, ...n })
        : j.createElement($3, { page: s, matches: c, ...n }))
    : null;
}
function J3(s) {
  let { manifest: n, routeModules: r } = df(),
    [i, l] = j.useState([]);
  return (
    j.useEffect(() => {
      let c = !1;
      return (
        q3(s, n, r).then((f) => {
          c || l(f);
        }),
        () => {
          c = !0;
        }
      );
    }, [s, n, r]),
    i
  );
}
function W3({ page: s, matches: n, ...r }) {
  let i = Qa(),
    { future: l } = df(),
    { basename: c } = Gp(),
    f = j.useMemo(() => {
      if (s === i.pathname + i.search + i.hash) return [];
      let h = oy(s, c, l.v8_trailingSlashAwareDataRequests, "rsc"),
        p = !1,
        m = [];
      for (let g of n)
        typeof g.route.shouldRevalidate == "function"
          ? (p = !0)
          : m.push(g.route.id);
      return (
        p && m.length > 0 && h.searchParams.set("_routes", m.join(",")),
        [h.pathname + h.search]
      );
    }, [c, l.v8_trailingSlashAwareDataRequests, s, i, n]);
  return j.createElement(
    j.Fragment,
    null,
    f.map((h) =>
      j.createElement("link", {
        key: h,
        rel: "prefetch",
        as: "fetch",
        href: h,
        ...r,
      })
    )
  );
}
function $3({ page: s, matches: n, ...r }) {
  let i = Qa(),
    { future: l, manifest: c, routeModules: f } = df(),
    { basename: h } = Gp(),
    { loaderData: p, matches: m } = P3(),
    g = j.useMemo(() => Lx(s, n, m, c, i, "data"), [s, n, m, c, i]),
    v = j.useMemo(() => Lx(s, n, m, c, i, "assets"), [s, n, m, c, i]),
    b = j.useMemo(() => {
      if (s === i.pathname + i.search + i.hash) return [];
      let S = new Set(),
        E = !1;
      if (
        (n.forEach((A) => {
          let R = c.routes[A.route.id];
          !R ||
            !R.hasLoader ||
            ((!g.some((D) => D.route.id === A.route.id) &&
              A.route.id in p &&
              f[A.route.id]?.shouldRevalidate) ||
            R.hasClientLoader
              ? (E = !0)
              : S.add(A.route.id));
        }),
        S.size === 0)
      )
        return [];
      let C = oy(s, h, l.v8_trailingSlashAwareDataRequests, "data");
      return (
        E &&
          S.size > 0 &&
          C.searchParams.set(
            "_routes",
            n
              .filter((A) => S.has(A.route.id))
              .map((A) => A.route.id)
              .join(",")
          ),
        [C.pathname + C.search]
      );
    }, [h, l.v8_trailingSlashAwareDataRequests, p, i, c, g, n, s, f]),
    _ = j.useMemo(() => X3(v, c), [v, c]),
    w = J3(v);
  return j.createElement(
    j.Fragment,
    null,
    b.map((S) =>
      j.createElement("link", {
        key: S,
        rel: "prefetch",
        as: "fetch",
        href: S,
        ...r,
      })
    ),
    _.map((S) =>
      j.createElement("link", { key: S, rel: "modulepreload", href: S, ...r })
    ),
    w.map(({ key: S, link: E }) =>
      j.createElement("link", {
        key: S,
        nonce: r.nonce,
        ...E,
        crossOrigin: E.crossOrigin ?? r.crossOrigin,
      })
    )
  );
}
function I3(...s) {
  return (n) => {
    s.forEach((r) => {
      typeof r == "function" ? r(n) : r != null && (r.current = n);
    });
  };
}
var ew =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  ew && (window.__reactRouterVersion = "7.18.1");
} catch {}
function tw({ basename: s, children: n, useTransitions: r, window: i }) {
  let l = j.useRef();
  l.current == null && (l.current = DS({ window: i, v5Compat: !0 }));
  let c = l.current,
    [f, h] = j.useState({ action: c.action, location: c.location }),
    p = j.useCallback(
      (m) => {
        r === !1 ? h(m) : j.startTransition(() => h(m));
      },
      [r]
    );
  return (
    j.useLayoutEffect(() => c.listen(p), [c, p]),
    j.createElement(O3, {
      basename: s,
      children: n,
      location: f.location,
      navigationType: f.action,
      navigator: c,
      useTransitions: r,
    })
  );
}
var vl = j.forwardRef(function (
  {
    onClick: n,
    discover: r = "render",
    prefetch: i = "none",
    relative: l,
    reloadDocument: c,
    replace: f,
    mask: h,
    state: p,
    target: m,
    to: g,
    preventScrollReset: v,
    viewTransition: b,
    defaultShouldRevalidate: _,
    ...w
  },
  S
) {
  let { basename: E, navigator: C, useTransitions: A } = j.useContext(Za),
    R = typeof g == "string" && Dp.test(g),
    D = Wv(g, E);
  g = D.to;
  let H = m3(g, { relative: l }),
    G = Qa(),
    z = null;
  if (h) {
    let ce = kp(h, [], G.mask ? G.mask.pathname : "/", !0);
    E !== "/" && (ce.pathname = ce.pathname === "/" ? E : ei([E, ce.pathname])),
      (z = C.createHref(ce));
  }
  let [L, X, F] = K3(i, w),
    le = rw(g, {
      replace: f,
      mask: h,
      state: p,
      target: m,
      preventScrollReset: v,
      relative: l,
      viewTransition: b,
      defaultShouldRevalidate: _,
      useTransitions: A,
    });
  function I(ce) {
    n && n(ce), ce.defaultPrevented || le(ce);
  }
  let xe = !(D.isExternal || c),
    de = j.createElement("a", {
      ...w,
      ...F,
      href: (xe ? z : void 0) || D.absoluteURL || H,
      onClick: xe ? I : n,
      ref: I3(S, X),
      target: m,
      "data-discover": !R && r === "render" ? "true" : void 0,
    });
  return L && !R
    ? j.createElement(j.Fragment, null, de, j.createElement(F3, { page: H }))
    : de;
});
vl.displayName = "Link";
var nw = j.forwardRef(function (
  {
    "aria-current": n = "page",
    caseSensitive: r = !1,
    className: i = "",
    end: l = !1,
    style: c,
    to: f,
    viewTransition: h,
    children: p,
    ...m
  },
  g
) {
  let v = lc(f, { relative: m.relative }),
    b = Qa(),
    _ = j.useContext(uf),
    { navigator: w, basename: S } = j.useContext(Za),
    E = _ != null && uw(v) && h === !0,
    C = w.encodeLocation ? w.encodeLocation(v).pathname : v.pathname,
    A = b.pathname,
    R =
      _ && _.navigation && _.navigation.location
        ? _.navigation.location.pathname
        : null;
  r ||
    ((A = A.toLowerCase()),
    (R = R ? R.toLowerCase() : null),
    (C = C.toLowerCase())),
    R && S && (R = Xi(R, S) || R);
  const D = C !== "/" && C.endsWith("/") ? C.length - 1 : C.length;
  let H = A === C || (!l && A.startsWith(C) && A.charAt(D) === "/"),
    G =
      R != null &&
      (R === C || (!l && R.startsWith(C) && R.charAt(C.length) === "/")),
    z = { isActive: H, isPending: G, isTransitioning: E },
    L = H ? n : void 0,
    X;
  typeof i == "function"
    ? (X = i(z))
    : (X = [
        i,
        H ? "active" : null,
        G ? "pending" : null,
        E ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let F = typeof c == "function" ? c(z) : c;
  return j.createElement(
    vl,
    {
      ...m,
      "aria-current": L,
      className: X,
      ref: g,
      style: F,
      to: f,
      viewTransition: h,
    },
    typeof p == "function" ? p(z) : p
  );
});
nw.displayName = "NavLink";
var aw = j.forwardRef(
  (
    {
      discover: s = "render",
      fetcherKey: n,
      navigate: r,
      reloadDocument: i,
      replace: l,
      state: c,
      method: f = Hu,
      action: h,
      onSubmit: p,
      relative: m,
      preventScrollReset: g,
      viewTransition: v,
      defaultShouldRevalidate: b,
      ..._
    },
    w
  ) => {
    let { useTransitions: S } = j.useContext(Za),
      E = ow(),
      C = cw(h, { relative: m }),
      A = f.toLowerCase() === "get" ? "get" : "post",
      R = typeof h == "string" && Dp.test(h),
      D = (H) => {
        if ((p && p(H), H.defaultPrevented)) return;
        H.preventDefault();
        let G = H.nativeEvent.submitter,
          z = G?.getAttribute("formmethod") || f,
          L = () =>
            E(G || H.currentTarget, {
              fetcherKey: n,
              method: z,
              navigate: r,
              replace: l,
              state: c,
              relative: m,
              preventScrollReset: g,
              viewTransition: v,
              defaultShouldRevalidate: b,
            });
        S && r !== !1 ? j.startTransition(() => L()) : L();
      };
    return j.createElement("form", {
      ref: w,
      method: A,
      action: C,
      onSubmit: i ? p : D,
      ..._,
      "data-discover": !R && s === "render" ? "true" : void 0,
    });
  }
);
aw.displayName = "Form";
function iw(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function cy(s) {
  let n = j.useContext(Ts);
  return kt(n, iw(s)), n;
}
function rw(
  s,
  {
    target: n,
    replace: r,
    mask: i,
    state: l,
    preventScrollReset: c,
    relative: f,
    viewTransition: h,
    defaultShouldRevalidate: p,
    useTransitions: m,
  } = {}
) {
  let g = iy(),
    v = Qa(),
    b = lc(s, { relative: f });
  return j.useCallback(
    (_) => {
      if (L3(_, n)) {
        _.preventDefault();
        let w = r !== void 0 ? r : Xo(v) === Xo(b),
          S = () =>
            g(s, {
              replace: w,
              mask: i,
              state: l,
              preventScrollReset: c,
              relative: f,
              viewTransition: h,
              defaultShouldRevalidate: p,
            });
        m ? j.startTransition(() => S()) : S();
      }
    },
    [v, g, b, r, i, l, n, s, c, f, h, p, m]
  );
}
var lw = 0,
  sw = () => `__${String(++lw)}__`;
function ow() {
  let { router: s } = cy("useSubmit"),
    { basename: n } = j.useContext(Za),
    r = C3(),
    i = s.fetch,
    l = s.navigate;
  return j.useCallback(
    async (c, f = {}) => {
      let { action: h, method: p, encType: m, formData: g, body: v } = B3(c, n);
      if (f.navigate === !1) {
        let b = f.fetcherKey || sw();
        await i(b, r, f.action || h, {
          defaultShouldRevalidate: f.defaultShouldRevalidate,
          preventScrollReset: f.preventScrollReset,
          formData: g,
          body: v,
          formMethod: f.method || p,
          formEncType: f.encType || m,
          flushSync: f.flushSync,
        });
      } else
        await l(f.action || h, {
          defaultShouldRevalidate: f.defaultShouldRevalidate,
          preventScrollReset: f.preventScrollReset,
          formData: g,
          body: v,
          formMethod: f.method || p,
          formEncType: f.encType || m,
          replace: f.replace,
          state: f.state,
          fromRouteId: r,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [i, l, n, r]
  );
}
function cw(s, { relative: n } = {}) {
  let { basename: r } = j.useContext(Za),
    i = j.useContext(Qi);
  kt(i, "useFormAction must be used inside a RouteContext");
  let [l] = i.matches.slice(-1),
    c = { ...lc(s || ".", { relative: n }) },
    f = Qa();
  if (s == null) {
    c.search = f.search;
    let h = new URLSearchParams(c.search),
      p = h.getAll("index");
    if (p.some((g) => g === "")) {
      h.delete("index"),
        p.filter((v) => v).forEach((v) => h.append("index", v));
      let g = h.toString();
      c.search = g ? `?${g}` : "";
    }
  }
  return (
    (!s || s === ".") &&
      l.route.index &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (c.pathname = c.pathname === "/" ? r : ei([r, c.pathname])),
    Xo(c)
  );
}
function uw(s, { relative: n } = {}) {
  let r = j.useContext(ey);
  kt(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = cy("useViewTransitionState"),
    l = lc(s, { relative: n });
  if (!r.isTransitioning) return !1;
  let c = Xi(r.currentLocation.pathname, i) || r.currentLocation.pathname,
    f = Xi(r.nextLocation.pathname, i) || r.nextLocation.pathname;
  return Ku(l.pathname, f) != null || Ku(l.pathname, c) != null;
}
function Ui(s) {
  if (s === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return s;
}
function uy(s, n) {
  (s.prototype = Object.create(n.prototype)),
    (s.prototype.constructor = s),
    (s.__proto__ = n);
}
var Sa = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Vo = { duration: 0.5, overwrite: !1, delay: 0 },
  qp,
  _n,
  Ct,
  Ya = 1e8,
  mt = 1 / Ya,
  lp = Math.PI * 2,
  fw = lp / 4,
  dw = 0,
  fy = Math.sqrt,
  hw = Math.cos,
  pw = Math.sin,
  pn = function (n) {
    return typeof n == "string";
  },
  qt = function (n) {
    return typeof n == "function";
  },
  Vi = function (n) {
    return typeof n == "number";
  },
  Xp = function (n) {
    return typeof n > "u";
  },
  vi = function (n) {
    return typeof n == "object";
  },
  In = function (n) {
    return n !== !1;
  },
  Vp = function () {
    return typeof window < "u";
  },
  Su = function (n) {
    return qt(n) || pn(n);
  },
  dy =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  An = Array.isArray,
  mw = /random\([^)]+\)/g,
  gw = /,\s*/g,
  Hx = /(?:-?\.?\d|\.)+/gi,
  hy = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  ss = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Yh = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  py = /[+-]=-?[.\d]+/,
  xw = /[^,'"\[\]\s]+/gi,
  vw = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  zt,
  fi,
  sp,
  Zp,
  wa = {},
  Ju = {},
  my,
  gy = function (n) {
    return (Ju = xs(n, wa)) && aa;
  },
  Qp = function (n, r) {
    return console.warn(
      "Invalid property",
      n,
      "set to",
      r,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  Zo = function (n, r) {
    return !r && console.warn(n);
  },
  xy = function (n, r) {
    return (n && (wa[n] = r) && Ju && (Ju[n] = r)) || wa;
  },
  Qo = function () {
    return 0;
  },
  yw = { suppressEvents: !0, isStart: !0, kill: !1 },
  Bu = { suppressEvents: !0, kill: !1 },
  bw = { suppressEvents: !0 },
  Pp = {},
  Er = [],
  op = {},
  vy,
  ga = {},
  qh = {},
  Ux = 30,
  Gu = [],
  Kp = "",
  Fp = function (n) {
    var r = n[0],
      i,
      l;
    if ((vi(r) || qt(r) || (n = [n]), !(i = (r._gsap || {}).harness))) {
      for (l = Gu.length; l-- && !Gu[l].targetTest(r); );
      i = Gu[l];
    }
    for (l = n.length; l--; )
      (n[l] && (n[l]._gsap || (n[l]._gsap = new Gy(n[l], i)))) ||
        n.splice(l, 1);
    return n;
  },
  sl = function (n) {
    return n._gsap || Fp(qa(n))[0]._gsap;
  },
  yy = function (n, r, i) {
    return (i = n[r]) && qt(i)
      ? n[r]()
      : (Xp(i) && n.getAttribute && n.getAttribute(r)) || i;
  },
  ea = function (n, r) {
    return (n = n.split(",")).forEach(r) || n;
  },
  Qt = function (n) {
    return Math.round(n * 1e5) / 1e5 || 0;
  },
  Mt = function (n) {
    return Math.round(n * 1e7) / 1e7 || 0;
  },
  us = function (n, r) {
    var i = r.charAt(0),
      l = parseFloat(r.substr(2));
    return (
      (n = parseFloat(n)),
      i === "+" ? n + l : i === "-" ? n - l : i === "*" ? n * l : n / l
    );
  },
  _w = function (n, r) {
    for (var i = r.length, l = 0; n.indexOf(r[l]) < 0 && ++l < i; );
    return l < i;
  },
  Wu = function () {
    var n = Er.length,
      r = Er.slice(0),
      i,
      l;
    for (op = {}, Er.length = 0, i = 0; i < n; i++)
      (l = r[i]),
        l && l._lazy && (l.render(l._lazy[0], l._lazy[1], !0)._lazy = 0);
  },
  Jp = function (n) {
    return !!(n._initted || n._startAt || n.add);
  },
  by = function (n, r, i, l) {
    Er.length && !_n && Wu(),
      n.render(r, i, !!(_n && r < 0 && Jp(n))),
      Er.length && !_n && Wu();
  },
  _y = function (n) {
    var r = parseFloat(n);
    return (r || r === 0) && (n + "").match(xw).length < 2
      ? r
      : pn(n)
      ? n.trim()
      : n;
  },
  Sy = function (n) {
    return n;
  },
  Ta = function (n, r) {
    for (var i in r) i in n || (n[i] = r[i]);
    return n;
  },
  Sw = function (n) {
    return function (r, i) {
      for (var l in i)
        l in r || (l === "duration" && n) || l === "ease" || (r[l] = i[l]);
    };
  },
  xs = function (n, r) {
    for (var i in r) n[i] = r[i];
    return n;
  },
  Bx = function s(n, r) {
    for (var i in r)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (n[i] = vi(r[i]) ? s(n[i] || (n[i] = {}), r[i]) : r[i]);
    return n;
  },
  $u = function (n, r) {
    var i = {},
      l;
    for (l in n) l in r || (i[l] = n[l]);
    return i;
  },
  No = function (n) {
    var r = n.parent || zt,
      i = n.keyframes ? Sw(An(n.keyframes)) : Ta;
    if (In(n.inherit))
      for (; r; ) i(n, r.vars.defaults), (r = r.parent || r._dp);
    return n;
  },
  ww = function (n, r) {
    for (var i = n.length, l = i === r.length; l && i-- && n[i] === r[i]; );
    return i < 0;
  },
  wy = function (n, r, i, l, c) {
    var f = n[l],
      h;
    if (c) for (h = r[c]; f && f[c] > h; ) f = f._prev;
    return (
      f ? ((r._next = f._next), (f._next = r)) : ((r._next = n[i]), (n[i] = r)),
      r._next ? (r._next._prev = r) : (n[l] = r),
      (r._prev = f),
      (r.parent = r._dp = n),
      r
    );
  },
  hf = function (n, r, i, l) {
    i === void 0 && (i = "_first"), l === void 0 && (l = "_last");
    var c = r._prev,
      f = r._next;
    c ? (c._next = f) : n[i] === r && (n[i] = f),
      f ? (f._prev = c) : n[l] === r && (n[l] = c),
      (r._next = r._prev = r.parent = null);
  },
  Nr = function (n, r) {
    n.parent &&
      (!r || n.parent.autoRemoveChildren) &&
      n.parent.remove &&
      n.parent.remove(n),
      (n._act = 0);
  },
  ol = function (n, r) {
    if (n && (!r || r._end > n._dur || r._start < 0))
      for (var i = n; i; ) (i._dirty = 1), (i = i.parent);
    return n;
  },
  Tw = function (n) {
    for (var r = n.parent; r && r.parent; )
      (r._dirty = 1), r.totalDuration(), (r = r.parent);
    return n;
  },
  cp = function (n, r, i, l) {
    return (
      n._startAt &&
      (_n
        ? n._startAt.revert(Bu)
        : (n.vars.immediateRender && !n.vars.autoRevert) ||
          n._startAt.render(r, !0, l))
    );
  },
  Ew = function s(n) {
    return !n || (n._ts && s(n.parent));
  },
  Gx = function (n) {
    return n._repeat ? vs(n._tTime, (n = n.duration() + n._rDelay)) * n : 0;
  },
  vs = function (n, r) {
    var i = Math.floor((n = Mt(n / r)));
    return n && i === n ? i - 1 : i;
  },
  Iu = function (n, r) {
    return (
      (n - r._start) * r._ts +
      (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
    );
  },
  pf = function (n) {
    return (n._end = Mt(
      n._start + (n._tDur / Math.abs(n._ts || n._rts || mt) || 0)
    ));
  },
  mf = function (n, r) {
    var i = n._dp;
    return (
      i &&
        i.smoothChildTiming &&
        n._ts &&
        ((n._start = Mt(
          i._time -
            (n._ts > 0
              ? r / n._ts
              : ((n._dirty ? n.totalDuration() : n._tDur) - r) / -n._ts)
        )),
        pf(n),
        i._dirty || ol(i, n)),
      n
    );
  },
  Ty = function (n, r) {
    var i;
    if (
      ((r._time ||
        (!r._dur && r._initted) ||
        (r._start < n._time && (r._dur || !r.add))) &&
        ((i = Iu(n.rawTime(), r)),
        (!r._dur || sc(0, r.totalDuration(), i) - r._tTime > mt) &&
          r.render(i, !0)),
      ol(n, r)._dp && n._initted && n._time >= n._dur && n._ts)
    ) {
      if (n._dur < n.duration())
        for (i = n; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      n._zTime = -mt;
    }
  },
  hi = function (n, r, i, l) {
    return (
      r.parent && Nr(r),
      (r._start = Mt(
        (Vi(i) ? i : i || n !== zt ? Ua(n, i, r) : n._time) + r._delay
      )),
      (r._end = Mt(
        r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)
      )),
      wy(n, r, "_first", "_last", n._sort ? "_start" : 0),
      up(r) || (n._recent = r),
      l || Ty(n, r),
      n._ts < 0 && mf(n, n._tTime),
      n
    );
  },
  Ey = function (n, r) {
    return (
      (wa.ScrollTrigger || Qp("scrollTrigger", r)) &&
      wa.ScrollTrigger.create(r, n)
    );
  },
  Cy = function (n, r, i, l, c) {
    if (($p(n, r, c), !n._initted)) return 1;
    if (
      !i &&
      n._pt &&
      !_n &&
      ((n._dur && n.vars.lazy !== !1) || (!n._dur && n.vars.lazy)) &&
      vy !== va.frame
    )
      return Er.push(n), (n._lazy = [c, l]), 1;
  },
  Cw = function s(n) {
    var r = n.parent;
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || s(r));
  },
  up = function (n) {
    var r = n.data;
    return r === "isFromStart" || r === "isStart";
  },
  Aw = function (n, r, i, l) {
    var c = n.ratio,
      f =
        r < 0 ||
        (!r &&
          ((!n._start && Cw(n) && !(!n._initted && up(n))) ||
            ((n._ts < 0 || n._dp._ts < 0) && !up(n))))
          ? 0
          : 1,
      h = n._rDelay,
      p = 0,
      m,
      g,
      v;
    if (
      (h &&
        n._repeat &&
        ((p = sc(0, n._tDur, r)),
        (g = vs(p, h)),
        n._yoyo && g & 1 && (f = 1 - f),
        g !== vs(n._tTime, h) &&
          ((c = 1 - f), n.vars.repeatRefresh && n._initted && n.invalidate())),
      f !== c || _n || l || n._zTime === mt || (!r && n._zTime))
    ) {
      if (!n._initted && Cy(n, r, l, i, p)) return;
      for (
        v = n._zTime,
          n._zTime = r || (i ? mt : 0),
          i || (i = r && !v),
          n.ratio = f,
          n._from && (f = 1 - f),
          n._time = 0,
          n._tTime = p,
          m = n._pt;
        m;

      )
        m.r(f, m.d), (m = m._next);
      r < 0 && cp(n, r, i, !0),
        n._onUpdate && !i && ba(n, "onUpdate"),
        p && n._repeat && !i && n.parent && ba(n, "onRepeat"),
        (r >= n._tDur || r < 0) &&
          n.ratio === f &&
          (f && Nr(n, 1),
          !i &&
            !_n &&
            (ba(n, f ? "onComplete" : "onReverseComplete", !0),
            n._prom && n._prom()));
    } else n._zTime || (n._zTime = r);
  },
  Nw = function (n, r, i) {
    var l;
    if (i > r)
      for (l = n._first; l && l._start <= i; ) {
        if (l.data === "isPause" && l._start > r) return l;
        l = l._next;
      }
    else
      for (l = n._last; l && l._start >= i; ) {
        if (l.data === "isPause" && l._start < r) return l;
        l = l._prev;
      }
  },
  ys = function (n, r, i, l) {
    var c = n._repeat,
      f = Mt(r) || 0,
      h = n._tTime / n._tDur;
    return (
      h && !l && (n._time *= f / n._dur),
      (n._dur = f),
      (n._tDur = c ? (c < 0 ? 1e10 : Mt(f * (c + 1) + n._rDelay * c)) : f),
      h > 0 && !l && mf(n, (n._tTime = n._tDur * h)),
      n.parent && pf(n),
      i || ol(n.parent, n),
      n
    );
  },
  Yx = function (n) {
    return n instanceof $n ? ol(n) : ys(n, n._dur);
  },
  Rw = { _start: 0, endTime: Qo, totalDuration: Qo },
  Ua = function s(n, r, i) {
    var l = n.labels,
      c = n._recent || Rw,
      f = n.duration() >= Ya ? c.endTime(!1) : n._dur,
      h,
      p,
      m;
    return pn(r) && (isNaN(r) || r in l)
      ? ((p = r.charAt(0)),
        (m = r.substr(-1) === "%"),
        (h = r.indexOf("=")),
        p === "<" || p === ">"
          ? (h >= 0 && (r = r.replace(/=/, "")),
            (p === "<" ? c._start : c.endTime(c._repeat >= 0)) +
              (parseFloat(r.substr(1)) || 0) *
                (m ? (h < 0 ? c : i).totalDuration() / 100 : 1))
          : h < 0
          ? (r in l || (l[r] = f), l[r])
          : ((p = parseFloat(r.charAt(h - 1) + r.substr(h + 1))),
            m && i && (p = (p / 100) * (An(i) ? i[0] : i).totalDuration()),
            h > 1 ? s(n, r.substr(0, h - 1), i) + p : f + p))
      : r == null
      ? f
      : +r;
  },
  Ro = function (n, r, i) {
    var l = Vi(r[1]),
      c = (l ? 2 : 1) + (n < 2 ? 0 : 1),
      f = r[c],
      h,
      p;
    if ((l && (f.duration = r[1]), (f.parent = i), n)) {
      for (h = f, p = i; p && !("immediateRender" in h); )
        (h = p.vars.defaults || {}), (p = In(p.vars.inherit) && p.parent);
      (f.immediateRender = In(h.immediateRender)),
        n < 2 ? (f.runBackwards = 1) : (f.startAt = r[c - 1]);
    }
    return new en(r[0], f, r[c + 1]);
  },
  zr = function (n, r) {
    return n || n === 0 ? r(n) : r;
  },
  sc = function (n, r, i) {
    return i < n ? n : i > r ? r : i;
  },
  En = function (n, r) {
    return !pn(n) || !(r = vw.exec(n)) ? "" : r[1];
  },
  Ow = function (n, r, i) {
    return zr(i, function (l) {
      return sc(n, r, l);
    });
  },
  fp = [].slice,
  Ay = function (n, r) {
    return (
      n &&
      vi(n) &&
      "length" in n &&
      ((!r && !n.length) || (n.length - 1 in n && vi(n[0]))) &&
      !n.nodeType &&
      n !== fi
    );
  },
  Mw = function (n, r, i) {
    return (
      i === void 0 && (i = []),
      n.forEach(function (l) {
        var c;
        return (pn(l) && !r) || Ay(l, 1)
          ? (c = i).push.apply(c, qa(l))
          : i.push(l);
      }) || i
    );
  },
  qa = function (n, r, i) {
    return Ct && !r && Ct.selector
      ? Ct.selector(n)
      : pn(n) && !i && (sp || !bs())
      ? fp.call((r || Zp).querySelectorAll(n), 0)
      : An(n)
      ? Mw(n, i)
      : Ay(n)
      ? fp.call(n, 0)
      : n
      ? [n]
      : [];
  },
  dp = function (n) {
    return (
      (n = qa(n)[0] || Zo("Invalid scope") || {}),
      function (r) {
        var i = n.current || n.nativeElement || n;
        return qa(
          r,
          i.querySelectorAll
            ? i
            : i === n
            ? Zo("Invalid scope") || Zp.createElement("div")
            : n
        );
      }
    );
  },
  Ny = function (n) {
    return n.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Ry = function (n) {
    if (qt(n)) return n;
    var r = vi(n) ? n : { each: n },
      i = cl(r.ease),
      l = r.from || 0,
      c = parseFloat(r.base) || 0,
      f = {},
      h = l > 0 && l < 1,
      p = isNaN(l) || h,
      m = r.axis,
      g = l,
      v = l;
    return (
      pn(l)
        ? (g = v = { center: 0.5, edges: 0.5, end: 1 }[l] || 0)
        : !h && p && ((g = l[0]), (v = l[1])),
      function (b, _, w) {
        var S = (w || r).length,
          E = f[S],
          C,
          A,
          R,
          D,
          H,
          G,
          z,
          L,
          X;
        if (!E) {
          if (((X = r.grid === "auto" ? 0 : (r.grid || [1, Ya])[1]), !X)) {
            for (
              z = -Ya;
              z < (z = w[X++].getBoundingClientRect().left) && X < S;

            );
            X < S && X--;
          }
          for (
            E = f[S] = [],
              C = p ? Math.min(X, S) * g - 0.5 : l % X,
              A = X === Ya ? 0 : p ? (S * v) / X - 0.5 : (l / X) | 0,
              z = 0,
              L = Ya,
              G = 0;
            G < S;
            G++
          )
            (R = (G % X) - C),
              (D = A - ((G / X) | 0)),
              (E[G] = H = m ? Math.abs(m === "y" ? D : R) : fy(R * R + D * D)),
              H > z && (z = H),
              H < L && (L = H);
          l === "random" && Ny(E),
            (E.max = z - L),
            (E.min = L),
            (E.v = S =
              (parseFloat(r.amount) ||
                parseFloat(r.each) *
                  (X > S
                    ? S - 1
                    : m
                    ? m === "y"
                      ? S / X
                      : X
                    : Math.max(X, S / X)) ||
                0) * (l === "edges" ? -1 : 1)),
            (E.b = S < 0 ? c - S : c),
            (E.u = En(r.amount || r.each) || 0),
            (i = i && S < 0 ? Vw(i) : i);
        }
        return (
          (S = (E[b] - E.min) / E.max || 0),
          Mt(E.b + (i ? i(S) : S) * E.v) + E.u
        );
      }
    );
  },
  hp = function (n) {
    var r = Math.pow(10, ((n + "").split(".")[1] || "").length);
    return function (i) {
      var l = Mt(Math.round(parseFloat(i) / n) * n * r);
      return (l - (l % 1)) / r + (Vi(i) ? 0 : En(i));
    };
  },
  Oy = function (n, r) {
    var i = An(n),
      l,
      c;
    return (
      !i &&
        vi(n) &&
        ((l = i = n.radius || Ya),
        n.values
          ? ((n = qa(n.values)), (c = !Vi(n[0])) && (l *= l))
          : (n = hp(n.increment))),
      zr(
        r,
        i
          ? qt(n)
            ? function (f) {
                return (c = n(f)), Math.abs(c - f) <= l ? c : f;
              }
            : function (f) {
                for (
                  var h = parseFloat(c ? f.x : f),
                    p = parseFloat(c ? f.y : 0),
                    m = Ya,
                    g = 0,
                    v = n.length,
                    b,
                    _;
                  v--;

                )
                  c
                    ? ((b = n[v].x - h), (_ = n[v].y - p), (b = b * b + _ * _))
                    : (b = Math.abs(n[v] - h)),
                    b < m && ((m = b), (g = v));
                return (
                  (g = !l || m <= l ? n[g] : f),
                  c || g === f || Vi(f) ? g : g + En(f)
                );
              }
          : hp(n)
      )
    );
  },
  My = function (n, r, i, l) {
    return zr(An(n) ? !r : i === !0 ? !!(i = 0) : !l, function () {
      return An(n)
        ? n[~~(Math.random() * n.length)]
        : (i = i || 1e-5) &&
            (l = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((n - i / 2 + Math.random() * (r - n + i * 0.99)) / i) *
                i *
                l
            ) / l;
    });
  },
  zw = function () {
    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return function (l) {
      return r.reduce(function (c, f) {
        return f(c);
      }, l);
    };
  },
  jw = function (n, r) {
    return function (i) {
      return n(parseFloat(i)) + (r || En(i));
    };
  },
  Dw = function (n, r, i) {
    return jy(n, r, 0, 1, i);
  },
  zy = function (n, r, i) {
    return zr(i, function (l) {
      return n[~~r(l)];
    });
  },
  kw = function s(n, r, i) {
    var l = r - n;
    return An(n)
      ? zy(n, s(0, n.length), r)
      : zr(i, function (c) {
          return ((l + ((c - n) % l)) % l) + n;
        });
  },
  Lw = function s(n, r, i) {
    var l = r - n,
      c = l * 2;
    return An(n)
      ? zy(n, s(0, n.length - 1), r)
      : zr(i, function (f) {
          return (f = (c + ((f - n) % c)) % c || 0), n + (f > l ? c - f : f);
        });
  },
  Po = function (n) {
    return n.replace(mw, function (r) {
      var i = r.indexOf("[") + 1,
        l = r.substring(i || 7, i ? r.indexOf("]") : r.length - 1).split(gw);
      return My(i ? l : +l[0], i ? 0 : +l[1], +l[2] || 1e-5);
    });
  },
  jy = function (n, r, i, l, c) {
    var f = r - n,
      h = l - i;
    return zr(c, function (p) {
      return i + (((p - n) / f) * h || 0);
    });
  },
  Hw = function s(n, r, i, l) {
    var c = isNaN(n + r)
      ? 0
      : function (_) {
          return (1 - _) * n + _ * r;
        };
    if (!c) {
      var f = pn(n),
        h = {},
        p,
        m,
        g,
        v,
        b;
      if ((i === !0 && (l = 1) && (i = null), f))
        (n = { p: n }), (r = { p: r });
      else if (An(n) && !An(r)) {
        for (g = [], v = n.length, b = v - 2, m = 1; m < v; m++)
          g.push(s(n[m - 1], n[m]));
        v--,
          (c = function (w) {
            w *= v;
            var S = Math.min(b, ~~w);
            return g[S](w - S);
          }),
          (i = r);
      } else l || (n = xs(An(n) ? [] : {}, n));
      if (!g) {
        for (p in r) Wp.call(h, n, p, "get", r[p]);
        c = function (w) {
          return tm(w, h) || (f ? n.p : n);
        };
      }
    }
    return zr(i, c);
  },
  qx = function (n, r, i) {
    var l = n.labels,
      c = Ya,
      f,
      h,
      p;
    for (f in l)
      (h = l[f] - r),
        h < 0 == !!i && h && c > (h = Math.abs(h)) && ((p = f), (c = h));
    return p;
  },
  ba = function (n, r, i) {
    var l = n.vars,
      c = l[r],
      f = Ct,
      h = n._ctx,
      p,
      m,
      g;
    if (c)
      return (
        (p = l[r + "Params"]),
        (m = l.callbackScope || n),
        i && Er.length && Wu(),
        h && (Ct = h),
        (g = p ? c.apply(m, p) : c.call(m)),
        (Ct = f),
        g
      );
  },
  bo = function (n) {
    return (
      Nr(n),
      n.scrollTrigger && n.scrollTrigger.kill(!!_n),
      n.progress() < 1 && ba(n, "onInterrupt"),
      n
    );
  },
  os,
  Dy = [],
  ky = function (n) {
    if (n)
      if (((n = (!n.name && n.default) || n), Vp() || n.headless)) {
        var r = n.name,
          i = qt(n),
          l =
            r && !i && n.init
              ? function () {
                  this._props = [];
                }
              : n,
          c = {
            init: Qo,
            render: tm,
            add: Wp,
            kill: e5,
            modifier: Iw,
            rawVars: 0,
          },
          f = {
            targetTest: 0,
            get: 0,
            getSetter: em,
            aliases: {},
            register: 0,
          };
        if ((bs(), n !== l)) {
          if (ga[r]) return;
          Ta(l, Ta($u(n, c), f)),
            xs(l.prototype, xs(c, $u(n, f))),
            (ga[(l.prop = r)] = l),
            n.targetTest && (Gu.push(l), (Pp[r] = 1)),
            (r =
              (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) +
              "Plugin");
        }
        xy(r, l), n.register && n.register(aa, l, ta);
      } else Dy.push(n);
  },
  pt = 255,
  _o = {
    aqua: [0, pt, pt],
    lime: [0, pt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, pt],
    navy: [0, 0, 128],
    white: [pt, pt, pt],
    olive: [128, 128, 0],
    yellow: [pt, pt, 0],
    orange: [pt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [pt, 0, 0],
    pink: [pt, 192, 203],
    cyan: [0, pt, pt],
    transparent: [pt, pt, pt, 0],
  },
  Xh = function (n, r, i) {
    return (
      (n += n < 0 ? 1 : n > 1 ? -1 : 0),
      ((n * 6 < 1
        ? r + (i - r) * n * 6
        : n < 0.5
        ? i
        : n * 3 < 2
        ? r + (i - r) * (2 / 3 - n) * 6
        : r) *
        pt +
        0.5) |
        0
    );
  },
  Ly = function (n, r, i) {
    var l = n ? (Vi(n) ? [n >> 16, (n >> 8) & pt, n & pt] : 0) : _o.black,
      c,
      f,
      h,
      p,
      m,
      g,
      v,
      b,
      _,
      w;
    if (!l) {
      if ((n.substr(-1) === "," && (n = n.substr(0, n.length - 1)), _o[n]))
        l = _o[n];
      else if (n.charAt(0) === "#") {
        if (
          (n.length < 6 &&
            ((c = n.charAt(1)),
            (f = n.charAt(2)),
            (h = n.charAt(3)),
            (n =
              "#" +
              c +
              c +
              f +
              f +
              h +
              h +
              (n.length === 5 ? n.charAt(4) + n.charAt(4) : ""))),
          n.length === 9)
        )
          return (
            (l = parseInt(n.substr(1, 6), 16)),
            [l >> 16, (l >> 8) & pt, l & pt, parseInt(n.substr(7), 16) / 255]
          );
        (n = parseInt(n.substr(1), 16)), (l = [n >> 16, (n >> 8) & pt, n & pt]);
      } else if (n.substr(0, 3) === "hsl") {
        if (((l = w = n.match(Hx)), !r))
          (p = (+l[0] % 360) / 360),
            (m = +l[1] / 100),
            (g = +l[2] / 100),
            (f = g <= 0.5 ? g * (m + 1) : g + m - g * m),
            (c = g * 2 - f),
            l.length > 3 && (l[3] *= 1),
            (l[0] = Xh(p + 1 / 3, c, f)),
            (l[1] = Xh(p, c, f)),
            (l[2] = Xh(p - 1 / 3, c, f));
        else if (~n.indexOf("="))
          return (l = n.match(hy)), i && l.length < 4 && (l[3] = 1), l;
      } else l = n.match(Hx) || _o.transparent;
      l = l.map(Number);
    }
    return (
      r &&
        !w &&
        ((c = l[0] / pt),
        (f = l[1] / pt),
        (h = l[2] / pt),
        (v = Math.max(c, f, h)),
        (b = Math.min(c, f, h)),
        (g = (v + b) / 2),
        v === b
          ? (p = m = 0)
          : ((_ = v - b),
            (m = g > 0.5 ? _ / (2 - v - b) : _ / (v + b)),
            (p =
              v === c
                ? (f - h) / _ + (f < h ? 6 : 0)
                : v === f
                ? (h - c) / _ + 2
                : (c - f) / _ + 4),
            (p *= 60)),
        (l[0] = ~~(p + 0.5)),
        (l[1] = ~~(m * 100 + 0.5)),
        (l[2] = ~~(g * 100 + 0.5))),
      i && l.length < 4 && (l[3] = 1),
      l
    );
  },
  Hy = function (n) {
    var r = [],
      i = [],
      l = -1;
    return (
      n.split(Cr).forEach(function (c) {
        var f = c.match(ss) || [];
        r.push.apply(r, f), i.push((l += f.length + 1));
      }),
      (r.c = i),
      r
    );
  },
  Xx = function (n, r, i) {
    var l = "",
      c = (n + l).match(Cr),
      f = r ? "hsla(" : "rgba(",
      h = 0,
      p,
      m,
      g,
      v;
    if (!c) return n;
    if (
      ((c = c.map(function (b) {
        return (
          (b = Ly(b, r, 1)) &&
          f +
            (r ? b[0] + "," + b[1] + "%," + b[2] + "%," + b[3] : b.join(",")) +
            ")"
        );
      })),
      i && ((g = Hy(n)), (p = i.c), p.join(l) !== g.c.join(l)))
    )
      for (m = n.replace(Cr, "1").split(ss), v = m.length - 1; h < v; h++)
        l +=
          m[h] +
          (~p.indexOf(h)
            ? c.shift() || f + "0,0,0,0)"
            : (g.length ? g : c.length ? c : i).shift());
    if (!m)
      for (m = n.split(Cr), v = m.length - 1; h < v; h++) l += m[h] + c[h];
    return l + m[v];
  },
  Cr = (function () {
    var s =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      n;
    for (n in _o) s += "|" + n + "\\b";
    return new RegExp(s + ")", "gi");
  })(),
  Uw = /hsl[a]?\(/,
  Uy = function (n) {
    var r = n.join(" "),
      i;
    if (((Cr.lastIndex = 0), Cr.test(r)))
      return (
        (i = Uw.test(r)),
        (n[1] = Xx(n[1], i)),
        (n[0] = Xx(n[0], i, Hy(n[1]))),
        !0
      );
  },
  Ko,
  va = (function () {
    var s = Date.now,
      n = 500,
      r = 33,
      i = s(),
      l = i,
      c = 1e3 / 240,
      f = c,
      h = [],
      p,
      m,
      g,
      v,
      b,
      _,
      w = function S(E) {
        var C = s() - l,
          A = E === !0,
          R,
          D,
          H,
          G;
        if (
          ((C > n || C < 0) && (i += C - r),
          (l += C),
          (H = l - i),
          (R = H - f),
          (R > 0 || A) &&
            ((G = ++v.frame),
            (b = H - v.time * 1e3),
            (v.time = H = H / 1e3),
            (f += R + (R >= c ? 4 : c - R)),
            (D = 1)),
          A || (p = m(S)),
          D)
        )
          for (_ = 0; _ < h.length; _++) h[_](H, b, G, E);
      };
    return (
      (v = {
        time: 0,
        frame: 0,
        tick: function () {
          w(!0);
        },
        deltaRatio: function (E) {
          return b / (1e3 / (E || 60));
        },
        wake: function () {
          my &&
            (!sp &&
              Vp() &&
              ((fi = sp = window),
              (Zp = fi.document || {}),
              (wa.gsap = aa),
              (fi.gsapVersions || (fi.gsapVersions = [])).push(aa.version),
              gy(Ju || fi.GreenSockGlobals || (!fi.gsap && fi) || {}),
              Dy.forEach(ky)),
            (g = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            p && v.sleep(),
            (m =
              g ||
              function (E) {
                return setTimeout(E, (f - v.time * 1e3 + 1) | 0);
              }),
            (Ko = 1),
            w(2));
        },
        sleep: function () {
          (g ? cancelAnimationFrame : clearTimeout)(p), (Ko = 0), (m = Qo);
        },
        lagSmoothing: function (E, C) {
          (n = E || 1 / 0), (r = Math.min(C || 33, n));
        },
        fps: function (E) {
          (c = 1e3 / (E || 240)), (f = v.time * 1e3 + c);
        },
        add: function (E, C, A) {
          var R = C
            ? function (D, H, G, z) {
                E(D, H, G, z), v.remove(R);
              }
            : E;
          return v.remove(E), h[A ? "unshift" : "push"](R), bs(), R;
        },
        remove: function (E, C) {
          ~(C = h.indexOf(E)) && h.splice(C, 1) && _ >= C && _--;
        },
        _listeners: h,
      }),
      v
    );
  })(),
  bs = function () {
    return !Ko && va.wake();
  },
  Je = {},
  Bw = /^[\d.\-M][\d.\-,\s]/,
  Gw = /["']/g,
  Yw = function (n) {
    for (
      var r = {},
        i = n.substr(1, n.length - 3).split(":"),
        l = i[0],
        c = 1,
        f = i.length,
        h,
        p,
        m;
      c < f;
      c++
    )
      (p = i[c]),
        (h = c !== f - 1 ? p.lastIndexOf(",") : p.length),
        (m = p.substr(0, h)),
        (r[l] = isNaN(m) ? m.replace(Gw, "").trim() : +m),
        (l = p.substr(h + 1).trim());
    return r;
  },
  qw = function (n) {
    var r = n.indexOf("(") + 1,
      i = n.indexOf(")"),
      l = n.indexOf("(", r);
    return n.substring(r, ~l && l < i ? n.indexOf(")", i + 1) : i);
  },
  Xw = function (n) {
    var r = (n + "").split("("),
      i = Je[r[0]];
    return i && r.length > 1 && i.config
      ? i.config.apply(
          null,
          ~n.indexOf("{") ? [Yw(r[1])] : qw(n).split(",").map(_y)
        )
      : Je._CE && Bw.test(n)
      ? Je._CE("", n)
      : i;
  },
  Vw = function (n) {
    return function (r) {
      return 1 - n(1 - r);
    };
  },
  cl = function (n, r) {
    return (n && (qt(n) ? n : Je[n] || Xw(n))) || r;
  },
  yl = function (n, r, i, l) {
    i === void 0 &&
      (i = function (p) {
        return 1 - r(1 - p);
      }),
      l === void 0 &&
        (l = function (p) {
          return p < 0.5 ? r(p * 2) / 2 : 1 - r((1 - p) * 2) / 2;
        });
    var c = { easeIn: r, easeOut: i, easeInOut: l },
      f;
    return (
      ea(n, function (h) {
        (Je[h] = wa[h] = c), (Je[(f = h.toLowerCase())] = i);
        for (var p in c)
          Je[
            f + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")
          ] = Je[h + "." + p] = c[p];
      }),
      c
    );
  },
  By = function (n) {
    return function (r) {
      return r < 0.5 ? (1 - n(1 - r * 2)) / 2 : 0.5 + n((r - 0.5) * 2) / 2;
    };
  },
  Vh = function s(n, r, i) {
    var l = r >= 1 ? r : 1,
      c = (i || (n ? 0.3 : 0.45)) / (r < 1 ? r : 1),
      f = (c / lp) * (Math.asin(1 / l) || 0),
      h = function (g) {
        return g === 1 ? 1 : l * Math.pow(2, -10 * g) * pw((g - f) * c) + 1;
      },
      p =
        n === "out"
          ? h
          : n === "in"
          ? function (m) {
              return 1 - h(1 - m);
            }
          : By(h);
    return (
      (c = lp / c),
      (p.config = function (m, g) {
        return s(n, m, g);
      }),
      p
    );
  },
  Zh = function s(n, r) {
    r === void 0 && (r = 1.70158);
    var i = function (f) {
        return f ? --f * f * ((r + 1) * f + r) + 1 : 0;
      },
      l =
        n === "out"
          ? i
          : n === "in"
          ? function (c) {
              return 1 - i(1 - c);
            }
          : By(i);
    return (
      (l.config = function (c) {
        return s(n, c);
      }),
      l
    );
  };
ea("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, n) {
  var r = n < 5 ? n + 1 : n;
  yl(
    s + ",Power" + (r - 1),
    n
      ? function (i) {
          return Math.pow(i, r);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, r);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, r) / 2
        : 1 - Math.pow((1 - i) * 2, r) / 2;
    }
  );
});
Je.Linear.easeNone = Je.none = Je.Linear.easeIn;
yl("Elastic", Vh("in"), Vh("out"), Vh());
(function (s, n) {
  var r = 1 / n,
    i = 2 * r,
    l = 2.5 * r,
    c = function (h) {
      return h < r
        ? s * h * h
        : h < i
        ? s * Math.pow(h - 1.5 / n, 2) + 0.75
        : h < l
        ? s * (h -= 2.25 / n) * h + 0.9375
        : s * Math.pow(h - 2.625 / n, 2) + 0.984375;
    };
  yl(
    "Bounce",
    function (f) {
      return 1 - c(1 - f);
    },
    c
  );
})(7.5625, 2.75);
yl("Expo", function (s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
yl("Circ", function (s) {
  return -(fy(1 - s * s) - 1);
});
yl("Sine", function (s) {
  return s === 1 ? 1 : -hw(s * fw) + 1;
});
yl("Back", Zh("in"), Zh("out"), Zh());
Je.SteppedEase =
  Je.steps =
  wa.SteppedEase =
    {
      config: function (n, r) {
        n === void 0 && (n = 1);
        var i = 1 / n,
          l = n + (r ? 0 : 1),
          c = r ? 1 : 0,
          f = 1 - mt;
        return function (h) {
          return (((l * sc(0, f, h)) | 0) + c) * i;
        };
      },
    };
Vo.ease = Je["quad.out"];
ea(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (s) {
    return (Kp += s + "," + s + "Params,");
  }
);
var Gy = function (n, r) {
    (this.id = dw++),
      (n._gsap = this),
      (this.target = n),
      (this.harness = r),
      (this.get = r ? r.get : yy),
      (this.set = r ? r.getSetter : em);
  },
  Fo = (function () {
    function s(r) {
      (this.vars = r),
        (this._delay = +r.delay || 0),
        (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) &&
          ((this._rDelay = r.repeatDelay || 0),
          (this._yoyo = !!r.yoyo || !!r.yoyoEase)),
        (this._ts = 1),
        ys(this, +r.duration, 1, 1),
        (this.data = r.data),
        Ct && ((this._ctx = Ct), Ct.data.push(this)),
        Ko || va.wake();
    }
    var n = s.prototype;
    return (
      (n.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (n.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur;
      }),
      (n.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            ys(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (n.totalTime = function (i, l) {
        if ((bs(), !arguments.length)) return this._tTime;
        var c = this._dp;
        if (c && c.smoothChildTiming && this._ts) {
          for (mf(this, i), !c._dp || c.parent || Ty(c, this); c && c.parent; )
            c.parent._time !==
              c._start +
                (c._ts >= 0
                  ? c._tTime / c._ts
                  : (c.totalDuration() - c._tTime) / -c._ts) &&
              c.totalTime(c._tTime, !0),
              (c = c.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            hi(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !l) ||
            (this._initted && Math.abs(this._zTime) === mt) ||
            (!this._initted && this._dur && i) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), by(this, i, l)),
          this
        );
      }),
      (n.time = function (i, l) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + Gx(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              l
            )
          : this._time;
      }),
      (n.totalProgress = function (i, l) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, l)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() >= 0 && this._initted
          ? 1
          : 0;
      }),
      (n.progress = function (i, l) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                Gx(this),
              l
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (n.iteration = function (i, l) {
        var c = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * c, l)
          : this._repeat
          ? vs(this._tTime, c) + 1
          : 1;
      }),
      (n.timeScale = function (i, l) {
        if (!arguments.length) return this._rts === -mt ? 0 : this._rts;
        if (this._rts === i) return this;
        var c =
          this.parent && this._ts ? Iu(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -mt ? 0 : this._rts),
          this.totalTime(
            sc(-Math.abs(this._delay), this.totalDuration(), c),
            l !== !1
          ),
          pf(this),
          Tw(this)
        );
      }),
      (n.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (bs(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== mt &&
                      (this._tTime -= mt)
                  ))),
            this)
          : this._ps;
      }),
      (n.startTime = function (i) {
        if (arguments.length) {
          this._start = Mt(i);
          var l = this.parent || this._dp;
          return (
            l &&
              (l._sort || !this.parent) &&
              hi(l, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (n.endTime = function (i) {
        return (
          this._start +
          (In(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (n.rawTime = function (i) {
        var l = this.parent || this._dp;
        return l
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Iu(l.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }),
      (n.revert = function (i) {
        i === void 0 && (i = bw);
        var l = _n;
        return (
          (_n = i),
          Jp(this) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (_n = l),
          this
        );
      }),
      (n.globalTime = function (i) {
        for (var l = this, c = arguments.length ? i : l.rawTime(); l; )
          (c = l._start + c / (Math.abs(l._ts) || 1)), (l = l._dp);
        return !this.parent && this._sat ? this._sat.globalTime(i) : c;
      }),
      (n.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), Yx(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (n.repeatDelay = function (i) {
        if (arguments.length) {
          var l = this._time;
          return (this._rDelay = i), Yx(this), l ? this.time(l) : this;
        }
        return this._rDelay;
      }),
      (n.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (n.seek = function (i, l) {
        return this.totalTime(Ua(this, i), In(l));
      }),
      (n.restart = function (i, l) {
        return (
          this.play().totalTime(i ? -this._delay : 0, In(l)),
          this._dur || (this._zTime = -mt),
          this
        );
      }),
      (n.play = function (i, l) {
        return i != null && this.seek(i, l), this.reversed(!1).paused(!1);
      }),
      (n.reverse = function (i, l) {
        return (
          i != null && this.seek(i || this.totalDuration(), l),
          this.reversed(!0).paused(!1)
        );
      }),
      (n.pause = function (i, l) {
        return i != null && this.seek(i, l), this.paused(!0);
      }),
      (n.resume = function () {
        return this.paused(!1);
      }),
      (n.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -mt : 0)),
            this)
          : this._rts < 0;
      }),
      (n.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -mt), this;
      }),
      (n.isActive = function () {
        var i = this.parent || this._dp,
          l = this._start,
          c;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (c = i.rawTime(!0)) >= l &&
            c < this.endTime(!0) - mt)
        );
      }),
      (n.eventCallback = function (i, l, c) {
        var f = this.vars;
        return arguments.length > 1
          ? (l
              ? ((f[i] = l),
                c && (f[i + "Params"] = c),
                i === "onUpdate" && (this._onUpdate = l))
              : delete f[i],
            this)
          : f[i];
      }),
      (n.then = function (i) {
        var l = this,
          c = l._prom;
        return new Promise(function (f) {
          var h = qt(i) ? i : Sy,
            p = function () {
              var g = l.then;
              (l.then = null),
                c && c(),
                qt(h) && (h = h(l)) && (h.then || h === l) && (l.then = g),
                f(h),
                (l.then = g);
            };
          (l._initted && l.totalProgress() === 1 && l._ts >= 0) ||
          (!l._tTime && l._ts < 0)
            ? p()
            : (l._prom = p);
        });
      }),
      (n.kill = function () {
        bo(this);
      }),
      s
    );
  })();
Ta(Fo.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -mt,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var $n = (function (s) {
  uy(n, s);
  function n(i, l) {
    var c;
    return (
      i === void 0 && (i = {}),
      (c = s.call(this, i) || this),
      (c.labels = {}),
      (c.smoothChildTiming = !!i.smoothChildTiming),
      (c.autoRemoveChildren = !!i.autoRemoveChildren),
      (c._sort = In(i.sortChildren)),
      zt && hi(i.parent || zt, Ui(c), l),
      i.reversed && c.reverse(),
      i.paused && c.paused(!0),
      i.scrollTrigger && Ey(Ui(c), i.scrollTrigger),
      c
    );
  }
  var r = n.prototype;
  return (
    (r.to = function (l, c, f) {
      return Ro(0, arguments, this), this;
    }),
    (r.from = function (l, c, f) {
      return Ro(1, arguments, this), this;
    }),
    (r.fromTo = function (l, c, f, h) {
      return Ro(2, arguments, this), this;
    }),
    (r.set = function (l, c, f) {
      return (
        (c.duration = 0),
        (c.parent = this),
        No(c).repeatDelay || (c.repeat = 0),
        (c.immediateRender = !!c.immediateRender),
        new en(l, c, Ua(this, f), 1),
        this
      );
    }),
    (r.call = function (l, c, f) {
      return hi(this, en.delayedCall(0, l, c), f);
    }),
    (r.staggerTo = function (l, c, f, h, p, m, g) {
      return (
        (f.duration = c),
        (f.stagger = f.stagger || h),
        (f.onComplete = m),
        (f.onCompleteParams = g),
        (f.parent = this),
        new en(l, f, Ua(this, p)),
        this
      );
    }),
    (r.staggerFrom = function (l, c, f, h, p, m, g) {
      return (
        (f.runBackwards = 1),
        (No(f).immediateRender = In(f.immediateRender)),
        this.staggerTo(l, c, f, h, p, m, g)
      );
    }),
    (r.staggerFromTo = function (l, c, f, h, p, m, g, v) {
      return (
        (h.startAt = f),
        (No(h).immediateRender = In(h.immediateRender)),
        this.staggerTo(l, c, h, p, m, g, v)
      );
    }),
    (r.render = function (l, c, f) {
      var h = this._time,
        p = this._dirty ? this.totalDuration() : this._tDur,
        m = this._dur,
        g = l <= 0 ? 0 : Mt(l),
        v = this._zTime < 0 != l < 0 && (this._initted || !m),
        b,
        _,
        w,
        S,
        E,
        C,
        A,
        R,
        D,
        H,
        G,
        z;
      if (
        (this !== zt && g > p && l >= 0 && (g = p), g !== this._tTime || f || v)
      ) {
        if (
          (h !== this._time &&
            m &&
            ((g += this._time - h), (l += this._time - h)),
          (b = g),
          (D = this._start),
          (R = this._ts),
          (C = !R),
          v && (m || (h = this._zTime), (l || !c) && (this._zTime = l)),
          this._repeat)
        ) {
          if (
            ((G = this._yoyo),
            (E = m + this._rDelay),
            this._repeat < -1 && l < 0)
          )
            return this.totalTime(E * 100 + l, c, f);
          if (
            ((b = Mt(g % E)),
            g === p
              ? ((S = this._repeat), (b = m))
              : ((H = Mt(g / E)),
                (S = ~~H),
                S && S === H && ((b = m), S--),
                b > m && (b = m)),
            (H = vs(this._tTime, E)),
            !h &&
              this._tTime &&
              H !== S &&
              this._tTime - H * E - this._dur <= 0 &&
              (H = S),
            G && S & 1 && ((b = m - b), (z = 1)),
            S !== H && !this._lock)
          ) {
            var L = G && H & 1,
              X = L === (G && S & 1);
            if (
              (S < H && (L = !L),
              (h = L ? 0 : g % m ? m : g),
              (this._lock = 1),
              (this.render(h || (z ? 0 : Mt(S * E)), c, !m)._lock = 0),
              (this._tTime = g),
              !c && this.parent && ba(this, "onRepeat"),
              this.vars.repeatRefresh &&
                !z &&
                ((this.invalidate()._lock = 1), (H = S)),
              (h && h !== this._time) ||
                C !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((m = this._dur),
              (p = this._tDur),
              X &&
                ((this._lock = 2),
                (h = L ? m : -1e-4),
                this.render(h, !0),
                this.vars.repeatRefresh && !z && this.invalidate()),
              (this._lock = 0),
              !this._ts && !C)
            )
              return this;
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((A = Nw(this, Mt(h), Mt(b))), A && (g -= b - (b = A._start))),
          (this._tTime = g),
          (this._time = b),
          (this._act = !!R),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = l),
            (h = 0)),
          !h && g && m && !c && !H && (ba(this, "onStart"), this._tTime !== g))
        )
          return this;
        if (b >= h && l >= 0)
          for (_ = this._first; _; ) {
            if (
              ((w = _._next), (_._act || b >= _._start) && _._ts && A !== _)
            ) {
              if (_.parent !== this) return this.render(l, c, f);
              if (
                (_.render(
                  _._ts > 0
                    ? (b - _._start) * _._ts
                    : (_._dirty ? _.totalDuration() : _._tDur) +
                        (b - _._start) * _._ts,
                  c,
                  f
                ),
                b !== this._time || (!this._ts && !C))
              ) {
                (A = 0), w && (g += this._zTime = -mt);
                break;
              }
            }
            _ = w;
          }
        else {
          _ = this._last;
          for (var F = l < 0 ? l : b; _; ) {
            if (((w = _._prev), (_._act || F <= _._end) && _._ts && A !== _)) {
              if (_.parent !== this) return this.render(l, c, f);
              if (
                (_.render(
                  _._ts > 0
                    ? (F - _._start) * _._ts
                    : (_._dirty ? _.totalDuration() : _._tDur) +
                        (F - _._start) * _._ts,
                  c,
                  f || (_n && Jp(_))
                ),
                b !== this._time || (!this._ts && !C))
              ) {
                (A = 0), w && (g += this._zTime = F ? -mt : mt);
                break;
              }
            }
            _ = w;
          }
        }
        if (
          A &&
          !c &&
          (this.pause(),
          (A.render(b >= h ? 0 : -mt)._zTime = b >= h ? 1 : -1),
          this._ts)
        )
          return (this._start = D), pf(this), this.render(l, c, f);
        this._onUpdate && !c && ba(this, "onUpdate", !0),
          ((g === p && this._tTime >= this.totalDuration()) || (!g && h)) &&
            (D === this._start || Math.abs(R) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((l || !m) &&
                ((g === p && this._ts > 0) || (!g && this._ts < 0)) &&
                Nr(this, 1),
              !c &&
                !(l < 0 && !h) &&
                (g || h || !p) &&
                (ba(
                  this,
                  g === p && l >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(g < p && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (r.add = function (l, c) {
      var f = this;
      if ((Vi(c) || (c = Ua(this, c, l)), !(l instanceof Fo))) {
        if (An(l))
          return (
            l.forEach(function (h) {
              return f.add(h, c);
            }),
            this
          );
        if (pn(l)) return this.addLabel(l, c);
        if (qt(l)) l = en.delayedCall(0, l);
        else return this;
      }
      return this !== l ? hi(this, l, c) : this;
    }),
    (r.getChildren = function (l, c, f, h) {
      l === void 0 && (l = !0),
        c === void 0 && (c = !0),
        f === void 0 && (f = !0),
        h === void 0 && (h = -Ya);
      for (var p = [], m = this._first; m; )
        m._start >= h &&
          (m instanceof en
            ? c && p.push(m)
            : (f && p.push(m), l && p.push.apply(p, m.getChildren(!0, c, f)))),
          (m = m._next);
      return p;
    }),
    (r.getById = function (l) {
      for (var c = this.getChildren(1, 1, 1), f = c.length; f--; )
        if (c[f].vars.id === l) return c[f];
    }),
    (r.remove = function (l) {
      return pn(l)
        ? this.removeLabel(l)
        : qt(l)
        ? this.killTweensOf(l)
        : (l.parent === this && hf(this, l),
          l === this._recent && (this._recent = this._last),
          ol(this));
    }),
    (r.totalTime = function (l, c) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Mt(
              va.time -
                (this._ts > 0
                  ? l / this._ts
                  : (this.totalDuration() - l) / -this._ts)
            )),
          s.prototype.totalTime.call(this, l, c),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (r.addLabel = function (l, c) {
      return (this.labels[l] = Ua(this, c)), this;
    }),
    (r.removeLabel = function (l) {
      return delete this.labels[l], this;
    }),
    (r.addPause = function (l, c, f) {
      var h = en.delayedCall(0, c || Qo, f);
      return (
        (h.data = "isPause"), (this._hasPause = 1), hi(this, h, Ua(this, l))
      );
    }),
    (r.removePause = function (l) {
      var c = this._first;
      for (l = Ua(this, l); c; )
        c._start === l && c.data === "isPause" && Nr(c), (c = c._next);
    }),
    (r.killTweensOf = function (l, c, f) {
      for (var h = this.getTweensOf(l, f), p = h.length; p--; )
        br !== h[p] && h[p].kill(l, c);
      return this;
    }),
    (r.getTweensOf = function (l, c) {
      for (var f = [], h = qa(l), p = this._first, m = Vi(c), g; p; )
        p instanceof en
          ? _w(p._targets, h) &&
            (m
              ? (!br || (p._initted && p._ts)) &&
                p.globalTime(0) <= c &&
                p.globalTime(p.totalDuration()) > c
              : !c || p.isActive()) &&
            f.push(p)
          : (g = p.getTweensOf(h, c)).length && f.push.apply(f, g),
          (p = p._next);
      return f;
    }),
    (r.tweenTo = function (l, c) {
      c = c || {};
      var f = this,
        h = Ua(f, l),
        p = c,
        m = p.startAt,
        g = p.onStart,
        v = p.onStartParams,
        b = p.immediateRender,
        _,
        w = en.to(
          f,
          Ta(
            {
              ease: c.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: h,
              overwrite: "auto",
              duration:
                c.duration ||
                Math.abs(
                  (h - (m && "time" in m ? m.time : f._time)) / f.timeScale()
                ) ||
                mt,
              onStart: function () {
                if ((f.pause(), !_)) {
                  var E =
                    c.duration ||
                    Math.abs(
                      (h - (m && "time" in m ? m.time : f._time)) /
                        f.timeScale()
                    );
                  w._dur !== E && ys(w, E, 0, 1).render(w._time, !0, !0),
                    (_ = 1);
                }
                g && g.apply(w, v || []);
              },
            },
            c
          )
        );
      return b ? w.render(0) : w;
    }),
    (r.tweenFromTo = function (l, c, f) {
      return this.tweenTo(c, Ta({ startAt: { time: Ua(this, l) } }, f));
    }),
    (r.recent = function () {
      return this._recent;
    }),
    (r.nextLabel = function (l) {
      return l === void 0 && (l = this._time), qx(this, Ua(this, l));
    }),
    (r.previousLabel = function (l) {
      return l === void 0 && (l = this._time), qx(this, Ua(this, l), 1);
    }),
    (r.currentLabel = function (l) {
      return arguments.length
        ? this.seek(l, !0)
        : this.previousLabel(this._time + mt);
    }),
    (r.shiftChildren = function (l, c, f) {
      f === void 0 && (f = 0);
      var h = this._first,
        p = this.labels,
        m;
      for (l = Mt(l); h; )
        h._start >= f && ((h._start += l), (h._end += l)), (h = h._next);
      if (c) for (m in p) p[m] >= f && (p[m] += l);
      return ol(this);
    }),
    (r.invalidate = function (l) {
      var c = this._first;
      for (this._lock = 0; c; ) c.invalidate(l), (c = c._next);
      return s.prototype.invalidate.call(this, l);
    }),
    (r.clear = function (l) {
      l === void 0 && (l = !0);
      for (var c = this._first, f; c; ) (f = c._next), this.remove(c), (c = f);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        l && (this.labels = {}),
        ol(this)
      );
    }),
    (r.totalDuration = function (l) {
      var c = 0,
        f = this,
        h = f._last,
        p = Ya,
        m,
        g,
        v;
      if (arguments.length)
        return f.timeScale(
          (f._repeat < 0 ? f.duration() : f.totalDuration()) /
            (f.reversed() ? -l : l)
        );
      if (f._dirty) {
        for (v = f.parent; h; )
          (m = h._prev),
            h._dirty && h.totalDuration(),
            (g = h._start),
            g > p && f._sort && h._ts && !f._lock
              ? ((f._lock = 1), (hi(f, h, g - h._delay, 1)._lock = 0))
              : (p = g),
            g < 0 &&
              h._ts &&
              ((c -= g),
              ((!v && !f._dp) || (v && v.smoothChildTiming)) &&
                ((f._start += Mt(g / f._ts)), (f._time -= g), (f._tTime -= g)),
              f.shiftChildren(-g, !1, -1 / 0),
              (p = 0)),
            h._end > c && h._ts && (c = h._end),
            (h = m);
        ys(f, f === zt && f._time > c ? f._time : c, 1, 1), (f._dirty = 0);
      }
      return f._tDur;
    }),
    (n.updateRoot = function (l) {
      if ((zt._ts && (by(zt, Iu(l, zt)), (vy = va.frame)), va.frame >= Ux)) {
        Ux += Sa.autoSleep || 120;
        var c = zt._first;
        if ((!c || !c._ts) && Sa.autoSleep && va._listeners.length < 2) {
          for (; c && !c._ts; ) c = c._next;
          c || va.sleep();
        }
      }
    }),
    n
  );
})(Fo);
Ta($n.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Zw = function (n, r, i, l, c, f, h) {
    var p = new ta(this._pt, n, r, 0, 1, Qy, null, c),
      m = 0,
      g = 0,
      v,
      b,
      _,
      w,
      S,
      E,
      C,
      A;
    for (
      p.b = i,
        p.e = l,
        i += "",
        l += "",
        (C = ~l.indexOf("random(")) && (l = Po(l)),
        f && ((A = [i, l]), f(A, n, r), (i = A[0]), (l = A[1])),
        b = i.match(Yh) || [];
      (v = Yh.exec(l));

    )
      (w = v[0]),
        (S = l.substring(m, v.index)),
        _ ? (_ = (_ + 1) % 5) : S.substr(-5) === "rgba(" && (_ = 1),
        w !== b[g++] &&
          ((E = parseFloat(b[g - 1]) || 0),
          (p._pt = {
            _next: p._pt,
            p: S || g === 1 ? S : ",",
            s: E,
            c: w.charAt(1) === "=" ? us(E, w) - E : parseFloat(w) - E,
            m: _ && _ < 4 ? Math.round : 0,
          }),
          (m = Yh.lastIndex));
    return (
      (p.c = m < l.length ? l.substring(m, l.length) : ""),
      (p.fp = h),
      (py.test(l) || C) && (p.e = 0),
      (this._pt = p),
      p
    );
  },
  Wp = function (n, r, i, l, c, f, h, p, m, g) {
    qt(l) && (l = l(c || 0, n, f));
    var v = n[r],
      b =
        i !== "get"
          ? i
          : qt(v)
          ? m
            ? n[
                r.indexOf("set") || !qt(n["get" + r.substr(3)])
                  ? r
                  : "get" + r.substr(3)
              ](m)
            : n[r]()
          : v,
      _ = qt(v) ? (m ? Jw : Vy) : Ip,
      w;
    if (
      (pn(l) &&
        (~l.indexOf("random(") && (l = Po(l)),
        l.charAt(1) === "=" &&
          ((w = us(b, l) + (En(b) || 0)), (w || w === 0) && (l = w))),
      !g || b !== l || pp)
    )
      return !isNaN(b * l) && l !== ""
        ? ((w = new ta(
            this._pt,
            n,
            r,
            +b || 0,
            l - (b || 0),
            typeof v == "boolean" ? $w : Zy,
            0,
            _
          )),
          m && (w.fp = m),
          h && w.modifier(h, this, n),
          (this._pt = w))
        : (!v && !(r in n) && Qp(r, l),
          Zw.call(this, n, r, b, l, _, p || Sa.stringFilter, m));
  },
  Qw = function (n, r, i, l, c) {
    if (
      (qt(n) && (n = Oo(n, c, r, i, l)),
      !vi(n) || (n.style && n.nodeType) || An(n) || dy(n))
    )
      return pn(n) ? Oo(n, c, r, i, l) : n;
    var f = {},
      h;
    for (h in n) f[h] = Oo(n[h], c, r, i, l);
    return f;
  },
  Yy = function (n, r, i, l, c, f) {
    var h, p, m, g;
    if (
      ga[n] &&
      (h = new ga[n]()).init(
        c,
        h.rawVars ? r[n] : Qw(r[n], l, c, f, i),
        i,
        l,
        f
      ) !== !1 &&
      ((i._pt = p = new ta(i._pt, c, n, 0, 1, h.render, h, 0, h.priority)),
      i !== os)
    )
      for (m = i._ptLookup[i._targets.indexOf(c)], g = h._props.length; g--; )
        m[h._props[g]] = p;
    return h;
  },
  br,
  pp,
  $p = function s(n, r, i) {
    var l = n.vars,
      c = l.ease,
      f = l.startAt,
      h = l.immediateRender,
      p = l.lazy,
      m = l.onUpdate,
      g = l.runBackwards,
      v = l.yoyoEase,
      b = l.keyframes,
      _ = l.autoRevert,
      w = n._dur,
      S = n._startAt,
      E = n._targets,
      C = n.parent,
      A = C && C.data === "nested" ? C.vars.targets : E,
      R = n._overwrite === "auto" && !qp,
      D = n.timeline,
      H = l.easeReverse || v,
      G,
      z,
      L,
      X,
      F,
      le,
      I,
      xe,
      de,
      ce,
      U,
      Q,
      te;
    if (
      (D && (!b || !c) && (c = "none"),
      (n._ease = cl(c, Vo.ease)),
      (n._rEase = H && (cl(H) || n._ease)),
      (n._from = !D && !!l.runBackwards),
      n._from && (n.ratio = 1),
      !D || (b && !l.stagger))
    ) {
      if (
        ((xe = E[0] ? sl(E[0]).harness : 0),
        (Q = xe && l[xe.prop]),
        (G = $u(l, Pp)),
        S &&
          (S._zTime < 0 && S.progress(1),
          r < 0 && g && h && !_ ? S.render(-1, !0) : S.revert(g && w ? Bu : yw),
          (S._lazy = 0)),
        f)
      ) {
        if (
          (Nr(
            (n._startAt = en.set(
              E,
              Ta(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: C,
                  immediateRender: !0,
                  lazy: !S && In(p),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    m &&
                    function () {
                      return ba(n, "onUpdate");
                    },
                  stagger: 0,
                },
                f
              )
            ))
          ),
          (n._startAt._dp = 0),
          (n._startAt._sat = n),
          r < 0 && (_n || (!h && !_)) && n._startAt.revert(Bu),
          h && w && r <= 0 && i <= 0)
        ) {
          r && (n._zTime = r);
          return;
        }
      } else if (g && w && !S) {
        if (
          (r && (h = !1),
          (L = Ta(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: h && !S && In(p),
              immediateRender: h,
              stagger: 0,
              parent: C,
            },
            G
          )),
          Q && (L[xe.prop] = Q),
          Nr((n._startAt = en.set(E, L))),
          (n._startAt._dp = 0),
          (n._startAt._sat = n),
          r < 0 && (_n ? n._startAt.revert(Bu) : n._startAt.render(-1, !0)),
          (n._zTime = r),
          !h)
        )
          s(n._startAt, mt, mt);
        else if (!r) return;
      }
      for (
        n._pt = n._ptCache = 0, p = (w && In(p)) || (p && !w), z = 0;
        z < E.length;
        z++
      ) {
        if (
          ((F = E[z]),
          (I = F._gsap || Fp(E)[z]._gsap),
          (n._ptLookup[z] = ce = {}),
          op[I.id] && Er.length && Wu(),
          (U = A === E ? z : A.indexOf(F)),
          xe &&
            (de = new xe()).init(F, Q || G, n, U, A) !== !1 &&
            ((n._pt = X =
              new ta(n._pt, F, de.name, 0, 1, de.render, de, 0, de.priority)),
            de._props.forEach(function (he) {
              ce[he] = X;
            }),
            de.priority && (le = 1)),
          !xe || Q)
        )
          for (L in G)
            ga[L] && (de = Yy(L, G, n, U, F, A))
              ? de.priority && (le = 1)
              : (ce[L] = X =
                  Wp.call(n, F, L, "get", G[L], U, A, 0, l.stringFilter));
        n._op && n._op[z] && n.kill(F, n._op[z]),
          R &&
            n._pt &&
            ((br = n),
            zt.killTweensOf(F, ce, n.globalTime(r)),
            (te = !n.parent),
            (br = 0)),
          n._pt && p && (op[I.id] = 1);
      }
      le && Py(n), n._onInit && n._onInit(n);
    }
    (n._onUpdate = m),
      (n._initted = (!n._op || n._pt) && !te),
      b && r <= 0 && D.render(Ya, !0, !0);
  },
  Pw = function (n, r, i, l, c, f, h, p) {
    var m = ((n._pt && n._ptCache) || (n._ptCache = {}))[r],
      g,
      v,
      b,
      _;
    if (!m)
      for (
        m = n._ptCache[r] = [], b = n._ptLookup, _ = n._targets.length;
        _--;

      ) {
        if (((g = b[_][r]), g && g.d && g.d._pt))
          for (g = g.d._pt; g && g.p !== r && g.fp !== r; ) g = g._next;
        if (!g)
          return (
            (pp = 1),
            (n.vars[r] = "+=0"),
            $p(n, h),
            (pp = 0),
            p
              ? Zo(
                  r +
                    " not eligible for reset. Try splitting into individual properties"
                )
              : 1
          );
        m.push(g);
      }
    for (_ = m.length; _--; )
      (v = m[_]),
        (g = v._pt || v),
        (g.s = (l || l === 0) && !c ? l : g.s + (l || 0) + f * g.c),
        (g.c = i - g.s),
        v.e && (v.e = Qt(i) + En(v.e)),
        v.b && (v.b = g.s + En(v.b));
  },
  Kw = function (n, r) {
    var i = n[0] ? sl(n[0]).harness : 0,
      l = i && i.aliases,
      c,
      f,
      h,
      p;
    if (!l) return r;
    c = xs({}, r);
    for (f in l)
      if (f in c) for (p = l[f].split(","), h = p.length; h--; ) c[p[h]] = c[f];
    return c;
  },
  Fw = function (n, r, i, l) {
    var c = r.ease || l || "power1.inOut",
      f,
      h;
    if (An(r))
      (h = i[n] || (i[n] = [])),
        r.forEach(function (p, m) {
          return h.push({ t: (m / (r.length - 1)) * 100, v: p, e: c });
        });
    else
      for (f in r)
        (h = i[f] || (i[f] = [])),
          f === "ease" || h.push({ t: parseFloat(n), v: r[f], e: c });
  },
  Oo = function (n, r, i, l, c) {
    return qt(n)
      ? n.call(r, i, l, c)
      : pn(n) && ~n.indexOf("random(")
      ? Po(n)
      : n;
  },
  qy =
    Kp +
    "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",
  Xy = {};
ea(qy + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
  return (Xy[s] = 1);
});
var en = (function (s) {
  uy(n, s);
  function n(i, l, c, f) {
    var h;
    typeof l == "number" && ((c.duration = l), (l = c), (c = null)),
      (h = s.call(this, f ? l : No(l)) || this);
    var p = h.vars,
      m = p.duration,
      g = p.delay,
      v = p.immediateRender,
      b = p.stagger,
      _ = p.overwrite,
      w = p.keyframes,
      S = p.defaults,
      E = p.scrollTrigger,
      C = l.parent || zt,
      A = (An(i) || dy(i) ? Vi(i[0]) : "length" in l) ? [i] : qa(i),
      R,
      D,
      H,
      G,
      z,
      L,
      X,
      F;
    if (
      ((h._targets = A.length
        ? Fp(A)
        : Zo(
            "GSAP target " + i + " not found. https://gsap.com",
            !Sa.nullTargetWarn
          ) || []),
      (h._ptLookup = []),
      (h._overwrite = _),
      w || b || Su(m) || Su(g))
    ) {
      l = h.vars;
      var le = l.easeReverse || l.yoyoEase;
      if (
        ((R = h.timeline =
          new $n({
            data: "nested",
            defaults: S || {},
            targets: C && C.data === "nested" ? C.vars.targets : A,
          })),
        R.kill(),
        (R.parent = R._dp = Ui(h)),
        (R._start = 0),
        b || Su(m) || Su(g))
      ) {
        if (((G = A.length), (X = b && Ry(b)), vi(b)))
          for (z in b) ~qy.indexOf(z) && (F || (F = {}), (F[z] = b[z]));
        for (D = 0; D < G; D++)
          (H = $u(l, Xy)),
            (H.stagger = 0),
            le && (H.easeReverse = le),
            F && xs(H, F),
            (L = A[D]),
            (H.duration = +Oo(m, Ui(h), D, L, A)),
            (H.delay = (+Oo(g, Ui(h), D, L, A) || 0) - h._delay),
            !b &&
              G === 1 &&
              H.delay &&
              ((h._delay = g = H.delay), (h._start += g), (H.delay = 0)),
            R.to(L, H, X ? X(D, L, A) : 0),
            (R._ease = Je.none);
        R.duration() ? (m = g = 0) : (h.timeline = 0);
      } else if (w) {
        No(Ta(R.vars.defaults, { ease: "none" })),
          (R._ease = cl(w.ease || l.ease || "none"));
        var I = 0,
          xe,
          de,
          ce;
        if (An(w))
          w.forEach(function (U) {
            return R.to(A, U, ">");
          }),
            R.duration();
        else {
          H = {};
          for (z in w)
            z === "ease" || z === "easeEach" || Fw(z, w[z], H, w.easeEach);
          for (z in H)
            for (
              xe = H[z].sort(function (U, Q) {
                return U.t - Q.t;
              }),
                I = 0,
                D = 0;
              D < xe.length;
              D++
            )
              (de = xe[D]),
                (ce = {
                  ease: de.e,
                  duration: ((de.t - (D ? xe[D - 1].t : 0)) / 100) * m,
                }),
                (ce[z] = de.v),
                R.to(A, ce, I),
                (I += ce.duration);
          R.duration() < m && R.to({}, { duration: m - R.duration() });
        }
      }
      m || h.duration((m = R.duration()));
    } else h.timeline = 0;
    return (
      _ === !0 && !qp && ((br = Ui(h)), zt.killTweensOf(A), (br = 0)),
      hi(C, Ui(h), c),
      l.reversed && h.reverse(),
      l.paused && h.paused(!0),
      (v ||
        (!m &&
          !w &&
          h._start === Mt(C._time) &&
          In(v) &&
          Ew(Ui(h)) &&
          C.data !== "nested")) &&
        ((h._tTime = -mt), h.render(Math.max(0, -g) || 0)),
      E && Ey(Ui(h), E),
      h
    );
  }
  var r = n.prototype;
  return (
    (r.render = function (l, c, f) {
      var h = this._time,
        p = this._tDur,
        m = this._dur,
        g = l < 0,
        v = l > p - mt && !g ? p : l < mt ? 0 : l,
        b,
        _,
        w,
        S,
        E,
        C,
        A,
        R;
      if (!m) Aw(this, l, c, f);
      else if (
        v !== this._tTime ||
        !l ||
        f ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== g) ||
        this._lazy
      ) {
        if (((b = v), (R = this.timeline), this._repeat)) {
          if (((S = m + this._rDelay), this._repeat < -1 && g))
            return this.totalTime(S * 100 + l, c, f);
          if (
            ((b = Mt(v % S)),
            v === p
              ? ((w = this._repeat), (b = m))
              : ((E = Mt(v / S)),
                (w = ~~E),
                w && w === E ? ((b = m), w--) : b > m && (b = m)),
            (C = this._yoyo && w & 1),
            C && (b = m - b),
            (E = vs(this._tTime, S)),
            b === h && !f && this._initted && w === E)
          )
            return (this._tTime = v), this;
          w !== E &&
            this.vars.repeatRefresh &&
            !C &&
            !this._lock &&
            b !== S &&
            this._initted &&
            ((this._lock = f = 1),
            (this.render(Mt(S * w), !0).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (Cy(this, g ? l : b, f, c, v)) return (this._tTime = 0), this;
          if (h !== this._time && !(f && this.vars.repeatRefresh && w !== E))
            return this;
          if (m !== this._dur) return this.render(l, c, f);
        }
        if (this._rEase) {
          var D = b < h;
          if (D !== this._inv) {
            var H = D ? h : m - h;
            (this._inv = D),
              this._from && (this.ratio = 1 - this.ratio),
              (this._invRatio = this.ratio),
              (this._invTime = h),
              (this._invRecip = H ? (D ? -1 : 1) / H : 0),
              (this._invScale = D ? -this.ratio : 1 - this.ratio),
              (this._invEase = D ? this._rEase : this._ease);
          }
          this.ratio = A =
            this._invRatio +
            this._invScale *
              this._invEase((b - this._invTime) * this._invRecip);
        } else this.ratio = A = this._ease(b / m);
        if (
          (this._from && (this.ratio = A = 1 - A),
          (this._tTime = v),
          (this._time = b),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          !h && v && !c && !E && (ba(this, "onStart"), this._tTime !== v))
        )
          return this;
        for (_ = this._pt; _; ) _.r(A, _.d), (_ = _._next);
        (R && R.render(l < 0 ? l : R._dur * R._ease(b / this._dur), c, f)) ||
          (this._startAt && (this._zTime = l)),
          this._onUpdate &&
            !c &&
            (g && cp(this, l, c, f), ba(this, "onUpdate")),
          this._repeat &&
            w !== E &&
            this.vars.onRepeat &&
            !c &&
            this.parent &&
            ba(this, "onRepeat"),
          (v === this._tDur || !v) &&
            this._tTime === v &&
            (g && !this._onUpdate && cp(this, l, !0, !0),
            (l || !m) &&
              ((v === this._tDur && this._ts > 0) || (!v && this._ts < 0)) &&
              Nr(this, 1),
            !c &&
              !(g && !h) &&
              (v || h || C) &&
              (ba(this, v === p ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(v < p && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (r.targets = function () {
      return this._targets;
    }),
    (r.invalidate = function (l) {
      return (
        (!l || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(l),
        s.prototype.invalidate.call(this, l)
      );
    }),
    (r.resetTo = function (l, c, f, h, p) {
      Ko || va.wake(), this._ts || this.play();
      var m = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        g;
      return (
        this._initted || $p(this, m),
        (g = this._ease(m / this._dur)),
        Pw(this, l, c, f, h, g, m, p)
          ? this.resetTo(l, c, f, h, 1)
          : (mf(this, 0),
            this.parent ||
              wy(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (r.kill = function (l, c) {
      if ((c === void 0 && (c = "all"), !l && (!c || c === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? bo(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!_n),
          this
        );
      if (this.timeline) {
        var f = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(l, c, br && br.vars.overwrite !== !0)
            ._first || bo(this),
          this.parent &&
            f !== this.timeline.totalDuration() &&
            ys(this, (this._dur * this.timeline._tDur) / f, 0, 1),
          this
        );
      }
      var h = this._targets,
        p = l ? qa(l) : h,
        m = this._ptLookup,
        g = this._pt,
        v,
        b,
        _,
        w,
        S,
        E,
        C;
      if ((!c || c === "all") && ww(h, p))
        return c === "all" && (this._pt = 0), bo(this);
      for (
        v = this._op = this._op || [],
          c !== "all" &&
            (pn(c) &&
              ((S = {}),
              ea(c, function (A) {
                return (S[A] = 1);
              }),
              (c = S)),
            (c = Kw(h, c))),
          C = h.length;
        C--;

      )
        if (~p.indexOf(h[C])) {
          (b = m[C]),
            c === "all"
              ? ((v[C] = c), (w = b), (_ = {}))
              : ((_ = v[C] = v[C] || {}), (w = c));
          for (S in w)
            (E = b && b[S]),
              E &&
                ((!("kill" in E.d) || E.d.kill(S) === !0) && hf(this, E, "_pt"),
                delete b[S]),
              _ !== "all" && (_[S] = 1);
        }
      return this._initted && !this._pt && g && bo(this), this;
    }),
    (n.to = function (l, c) {
      return new n(l, c, arguments[2]);
    }),
    (n.from = function (l, c) {
      return Ro(1, arguments);
    }),
    (n.delayedCall = function (l, c, f, h) {
      return new n(c, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: l,
        onComplete: c,
        onReverseComplete: c,
        onCompleteParams: f,
        onReverseCompleteParams: f,
        callbackScope: h,
      });
    }),
    (n.fromTo = function (l, c, f) {
      return Ro(2, arguments);
    }),
    (n.set = function (l, c) {
      return (c.duration = 0), c.repeatDelay || (c.repeat = 0), new n(l, c);
    }),
    (n.killTweensOf = function (l, c, f) {
      return zt.killTweensOf(l, c, f);
    }),
    n
  );
})(Fo);
Ta(en.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
ea("staggerTo,staggerFrom,staggerFromTo", function (s) {
  en[s] = function () {
    var n = new $n(),
      r = fp.call(arguments, 0);
    return r.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), n[s].apply(n, r);
  };
});
var Ip = function (n, r, i) {
    return (n[r] = i);
  },
  Vy = function (n, r, i) {
    return n[r](i);
  },
  Jw = function (n, r, i, l) {
    return n[r](l.fp, i);
  },
  Ww = function (n, r, i) {
    return n.setAttribute(r, i);
  },
  em = function (n, r) {
    return qt(n[r]) ? Vy : Xp(n[r]) && n.setAttribute ? Ww : Ip;
  },
  Zy = function (n, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * n) * 1e6) / 1e6, r);
  },
  $w = function (n, r) {
    return r.set(r.t, r.p, !!(r.s + r.c * n), r);
  },
  Qy = function (n, r) {
    var i = r._pt,
      l = "";
    if (!n && r.b) l = r.b;
    else if (n === 1 && r.e) l = r.e;
    else {
      for (; i; )
        (l =
          i.p +
          (i.m ? i.m(i.s + i.c * n) : Math.round((i.s + i.c * n) * 1e4) / 1e4) +
          l),
          (i = i._next);
      l += r.c;
    }
    r.set(r.t, r.p, l, r);
  },
  tm = function (n, r) {
    for (var i = r._pt; i; ) i.r(n, i.d), (i = i._next);
  },
  Iw = function (n, r, i, l) {
    for (var c = this._pt, f; c; )
      (f = c._next), c.p === l && c.modifier(n, r, i), (c = f);
  },
  e5 = function (n) {
    for (var r = this._pt, i, l; r; )
      (l = r._next),
        (r.p === n && !r.op) || r.op === n
          ? hf(this, r, "_pt")
          : r.dep || (i = 1),
        (r = l);
    return !i;
  },
  t5 = function (n, r, i, l) {
    l.mSet(n, r, l.m.call(l.tween, i, l.mt), l);
  },
  Py = function (n) {
    for (var r = n._pt, i, l, c, f; r; ) {
      for (i = r._next, l = c; l && l.pr > r.pr; ) l = l._next;
      (r._prev = l ? l._prev : f) ? (r._prev._next = r) : (c = r),
        (r._next = l) ? (l._prev = r) : (f = r),
        (r = i);
    }
    n._pt = c;
  },
  ta = (function () {
    function s(r, i, l, c, f, h, p, m, g) {
      (this.t = i),
        (this.s = c),
        (this.c = f),
        (this.p = l),
        (this.r = h || Zy),
        (this.d = p || this),
        (this.set = m || Ip),
        (this.pr = g || 0),
        (this._next = r),
        r && (r._prev = this);
    }
    var n = s.prototype;
    return (
      (n.modifier = function (i, l, c) {
        (this.mSet = this.mSet || this.set),
          (this.set = t5),
          (this.m = i),
          (this.mt = c),
          (this.tween = l);
      }),
      s
    );
  })();
ea(
  Kp +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",
  function (s) {
    return (Pp[s] = 1);
  }
);
wa.TweenMax = wa.TweenLite = en;
wa.TimelineLite = wa.TimelineMax = $n;
zt = new $n({
  sortChildren: !1,
  defaults: Vo,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Sa.stringFilter = Uy;
var ul = [],
  Yu = {},
  n5 = [],
  Vx = 0,
  a5 = 0,
  Qh = function (n) {
    return (Yu[n] || n5).map(function (r) {
      return r();
    });
  },
  mp = function () {
    var n = Date.now(),
      r = [];
    n - Vx > 2 &&
      (Qh("matchMediaInit"),
      ul.forEach(function (i) {
        var l = i.queries,
          c = i.conditions,
          f,
          h,
          p,
          m;
        for (h in l)
          (f = fi.matchMedia(l[h]).matches),
            f && (p = 1),
            f !== c[h] && ((c[h] = f), (m = 1));
        m && (i.revert(), p && r.push(i));
      }),
      Qh("matchMediaRevert"),
      r.forEach(function (i) {
        return i.onMatch(i, function (l) {
          return i.add(null, l);
        });
      }),
      (Vx = n),
      Qh("matchMedia"));
  },
  Ky = (function () {
    function s(r, i) {
      (this.selector = i && dp(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = a5++),
        r && this.add(r);
    }
    var n = s.prototype;
    return (
      (n.add = function (i, l, c) {
        qt(i) && ((c = l), (l = i), (i = qt));
        var f = this,
          h = function () {
            var m = Ct,
              g = f.selector,
              v;
            return (
              m && m !== f && m.data.push(f),
              c && (f.selector = dp(c)),
              (Ct = f),
              (v = l.apply(f, arguments)),
              qt(v) && f._r.push(v),
              (Ct = m),
              (f.selector = g),
              (f.isReverted = !1),
              v
            );
          };
        return (
          (f.last = h),
          i === qt
            ? h(f, function (p) {
                return f.add(null, p);
              })
            : i
            ? (f[i] = h)
            : h
        );
      }),
      (n.ignore = function (i) {
        var l = Ct;
        (Ct = null), i(this), (Ct = l);
      }),
      (n.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (l) {
            return l instanceof s
              ? i.push.apply(i, l.getTweens())
              : l instanceof en &&
                  !(l.parent && l.parent.data === "nested") &&
                  i.push(l);
          }),
          i
        );
      }),
      (n.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (n.kill = function (i, l) {
        var c = this;
        if (
          (i
            ? (function () {
                for (var h = c.getTweens(), p = c.data.length, m; p--; )
                  (m = c.data[p]),
                    m.data === "isFlip" &&
                      (m.revert(),
                      m.getChildren(!0, !0, !1).forEach(function (g) {
                        return h.splice(h.indexOf(g), 1);
                      }));
                for (
                  h
                    .map(function (g) {
                      return {
                        g:
                          g._dur ||
                          g._delay ||
                          (g._sat && !g._sat.vars.immediateRender)
                            ? g.globalTime(0)
                            : -1 / 0,
                        t: g,
                      };
                    })
                    .sort(function (g, v) {
                      return v.g - g.g || -1 / 0;
                    })
                    .forEach(function (g) {
                      return g.t.revert(i);
                    }),
                    p = c.data.length;
                  p--;

                )
                  (m = c.data[p]),
                    m instanceof $n
                      ? m.data !== "nested" &&
                        (m.scrollTrigger && m.scrollTrigger.revert(), m.kill())
                      : !(m instanceof en) && m.revert && m.revert(i);
                c._r.forEach(function (g) {
                  return g(i, c);
                }),
                  (c.isReverted = !0);
              })()
            : this.data.forEach(function (h) {
                return h.kill && h.kill();
              }),
          this.clear(),
          l)
        )
          for (var f = ul.length; f--; )
            ul[f].id === this.id && ul.splice(f, 1);
      }),
      (n.revert = function (i) {
        this.kill(i || {});
      }),
      s
    );
  })(),
  i5 = (function () {
    function s(r) {
      (this.contexts = []), (this.scope = r), Ct && Ct.data.push(this);
    }
    var n = s.prototype;
    return (
      (n.add = function (i, l, c) {
        vi(i) || (i = { matches: i });
        var f = new Ky(0, c || this.scope),
          h = (f.conditions = {}),
          p,
          m,
          g;
        Ct && !f.selector && (f.selector = Ct.selector),
          this.contexts.push(f),
          (l = f.add("onMatch", l)),
          (f.queries = i);
        for (m in i)
          m === "all"
            ? (g = 1)
            : ((p = fi.matchMedia(i[m])),
              p &&
                (ul.indexOf(f) < 0 && ul.push(f),
                (h[m] = p.matches) && (g = 1),
                p.addListener
                  ? p.addListener(mp)
                  : p.addEventListener("change", mp)));
        return (
          g &&
            l(f, function (v) {
              return f.add(null, v);
            }),
          this
        );
      }),
      (n.revert = function (i) {
        this.kill(i || {});
      }),
      (n.kill = function (i) {
        this.contexts.forEach(function (l) {
          return l.kill(i, !0);
        });
      }),
      s
    );
  })(),
  ef = {
    registerPlugin: function () {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      r.forEach(function (l) {
        return ky(l);
      });
    },
    timeline: function (n) {
      return new $n(n);
    },
    getTweensOf: function (n, r) {
      return zt.getTweensOf(n, r);
    },
    getProperty: function (n, r, i, l) {
      pn(n) && (n = qa(n)[0]);
      var c = sl(n || {}).get,
        f = i ? Sy : _y;
      return (
        i === "native" && (i = ""),
        n &&
          (r
            ? f(((ga[r] && ga[r].get) || c)(n, r, i, l))
            : function (h, p, m) {
                return f(((ga[h] && ga[h].get) || c)(n, h, p, m));
              })
      );
    },
    quickSetter: function (n, r, i) {
      if (((n = qa(n)), n.length > 1)) {
        var l = n.map(function (g) {
            return aa.quickSetter(g, r, i);
          }),
          c = l.length;
        return function (g) {
          for (var v = c; v--; ) l[v](g);
        };
      }
      n = n[0] || {};
      var f = ga[r],
        h = sl(n),
        p = (h.harness && (h.harness.aliases || {})[r]) || r,
        m = f
          ? function (g) {
              var v = new f();
              (os._pt = 0),
                v.init(n, i ? g + i : g, os, 0, [n]),
                v.render(1, v),
                os._pt && tm(1, os);
            }
          : h.set(n, p);
      return f
        ? m
        : function (g) {
            return m(n, p, i ? g + i : g, h, 1);
          };
    },
    quickTo: function (n, r, i) {
      var l,
        c = aa.to(
          n,
          Ta(
            ((l = {}), (l[r] = "+=0.1"), (l.paused = !0), (l.stagger = 0), l),
            i || {}
          )
        ),
        f = function (p, m, g) {
          return c.resetTo(r, p, m, g);
        };
      return (f.tween = c), f;
    },
    isTweening: function (n) {
      return zt.getTweensOf(n, !0).length > 0;
    },
    defaults: function (n) {
      return n && n.ease && (n.ease = cl(n.ease, Vo.ease)), Bx(Vo, n || {});
    },
    config: function (n) {
      return Bx(Sa, n || {});
    },
    registerEffect: function (n) {
      var r = n.name,
        i = n.effect,
        l = n.plugins,
        c = n.defaults,
        f = n.extendTimeline;
      (l || "").split(",").forEach(function (h) {
        return (
          h && !ga[h] && !wa[h] && Zo(r + " effect requires " + h + " plugin.")
        );
      }),
        (qh[r] = function (h, p, m) {
          return i(qa(h), Ta(p || {}, c), m);
        }),
        f &&
          ($n.prototype[r] = function (h, p, m) {
            return this.add(qh[r](h, vi(p) ? p : (m = p) && {}, this), m);
          });
    },
    registerEase: function (n, r) {
      Je[n] = cl(r);
    },
    parseEase: function (n, r) {
      return arguments.length ? cl(n, r) : Je;
    },
    getById: function (n) {
      return zt.getById(n);
    },
    exportRoot: function (n, r) {
      n === void 0 && (n = {});
      var i = new $n(n),
        l,
        c;
      for (
        i.smoothChildTiming = In(n.smoothChildTiming),
          zt.remove(i),
          i._dp = 0,
          i._time = i._tTime = zt._time,
          l = zt._first;
        l;

      )
        (c = l._next),
          (r ||
            !(
              !l._dur &&
              l instanceof en &&
              l.vars.onComplete === l._targets[0]
            )) &&
            hi(i, l, l._start - l._delay),
          (l = c);
      return hi(zt, i, 0), i;
    },
    context: function (n, r) {
      return n ? new Ky(n, r) : Ct;
    },
    matchMedia: function (n) {
      return new i5(n);
    },
    matchMediaRefresh: function () {
      return (
        ul.forEach(function (n) {
          var r = n.conditions,
            i,
            l;
          for (l in r) r[l] && ((r[l] = !1), (i = 1));
          i && n.revert();
        }) || mp()
      );
    },
    addEventListener: function (n, r) {
      var i = Yu[n] || (Yu[n] = []);
      ~i.indexOf(r) || i.push(r);
    },
    removeEventListener: function (n, r) {
      var i = Yu[n],
        l = i && i.indexOf(r);
      l >= 0 && i.splice(l, 1);
    },
    utils: {
      wrap: kw,
      wrapYoyo: Lw,
      distribute: Ry,
      random: My,
      snap: Oy,
      normalize: Dw,
      getUnit: En,
      clamp: Ow,
      splitColor: Ly,
      toArray: qa,
      selector: dp,
      mapRange: jy,
      pipe: zw,
      unitize: jw,
      interpolate: Hw,
      shuffle: Ny,
    },
    install: gy,
    effects: qh,
    ticker: va,
    updateRoot: $n.updateRoot,
    plugins: ga,
    globalTimeline: zt,
    core: {
      PropTween: ta,
      globals: xy,
      Tween: en,
      Timeline: $n,
      Animation: Fo,
      getCache: sl,
      _removeLinkedListItem: hf,
      reverting: function () {
        return _n;
      },
      context: function (n) {
        return n && Ct && (Ct.data.push(n), (n._ctx = Ct)), Ct;
      },
      suppressOverwrites: function (n) {
        return (qp = n);
      },
    },
  };
ea("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
  return (ef[s] = en[s]);
});
va.add($n.updateRoot);
os = ef.to({}, { duration: 0 });
var r5 = function (n, r) {
    for (var i = n._pt; i && i.p !== r && i.op !== r && i.fp !== r; )
      i = i._next;
    return i;
  },
  l5 = function (n, r) {
    var i = n._targets,
      l,
      c,
      f;
    for (l in r)
      for (c = i.length; c--; )
        (f = n._ptLookup[c][l]),
          f &&
            (f = f.d) &&
            (f._pt && (f = r5(f, l)),
            f && f.modifier && f.modifier(r[l], n, i[c], l));
  },
  Ph = function (n, r) {
    return {
      name: n,
      headless: 1,
      rawVars: 1,
      init: function (l, c, f) {
        f._onInit = function (h) {
          var p, m;
          if (
            (pn(c) &&
              ((p = {}),
              ea(c, function (g) {
                return (p[g] = 1);
              }),
              (c = p)),
            r)
          ) {
            p = {};
            for (m in c) p[m] = r(c[m]);
            c = p;
          }
          l5(h, c);
        };
      },
    };
  },
  aa =
    ef.registerPlugin(
      {
        name: "attr",
        init: function (n, r, i, l, c) {
          var f, h, p;
          this.tween = i;
          for (f in r)
            (p = n.getAttribute(f) || ""),
              (h = this.add(
                n,
                "setAttribute",
                (p || 0) + "",
                r[f],
                l,
                c,
                0,
                0,
                f
              )),
              (h.op = f),
              (h.b = p),
              this._props.push(f);
        },
        render: function (n, r) {
          for (var i = r._pt; i; )
            _n ? i.set(i.t, i.p, i.b, i) : i.r(n, i.d), (i = i._next);
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (n, r) {
          for (var i = r.length; i--; )
            this.add(n, i, n[i] || 0, r[i], 0, 0, 0, 0, 0, 1);
        },
      },
      Ph("roundProps", hp),
      Ph("modifiers"),
      Ph("snap", Oy)
    ) || ef;
en.version = $n.version = aa.version = "3.15.0";
my = 1;
Vp() && bs();
Je.Power0;
Je.Power1;
Je.Power2;
Je.Power3;
Je.Power4;
Je.Linear;
Je.Quad;
Je.Cubic;
Je.Quart;
Je.Quint;
Je.Strong;
Je.Elastic;
Je.Back;
Je.SteppedEase;
Je.Bounce;
Je.Sine;
Je.Expo;
Je.Circ;
var Zx,
  _r,
  fs,
  nm,
  rl,
  Qx,
  am,
  s5 = function () {
    return typeof window < "u";
  },
  Zi = {},
  tl = 180 / Math.PI,
  ds = Math.PI / 180,
  ts = Math.atan2,
  Px = 1e8,
  im = /([A-Z])/g,
  o5 = /(left|right|width|margin|padding|x)/i,
  c5 = /[\s,\(]\S/,
  pi = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  gp = function (n, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u, r);
  },
  u5 = function (n, r) {
    return r.set(
      r.t,
      r.p,
      n === 1 ? r.e : Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u,
      r
    );
  },
  f5 = function (n, r) {
    return r.set(
      r.t,
      r.p,
      n ? Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u : r.b,
      r
    );
  },
  d5 = function (n, r) {
    return r.set(
      r.t,
      r.p,
      n === 1 ? r.e : n ? Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u : r.b,
      r
    );
  },
  h5 = function (n, r) {
    var i = r.s + r.c * n;
    r.set(r.t, r.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + r.u, r);
  },
  Fy = function (n, r) {
    return r.set(r.t, r.p, n ? r.e : r.b, r);
  },
  Jy = function (n, r) {
    return r.set(r.t, r.p, n !== 1 ? r.b : r.e, r);
  },
  p5 = function (n, r, i) {
    return (n.style[r] = i);
  },
  m5 = function (n, r, i) {
    return n.style.setProperty(r, i);
  },
  g5 = function (n, r, i) {
    return (n._gsap[r] = i);
  },
  x5 = function (n, r, i) {
    return (n._gsap.scaleX = n._gsap.scaleY = i);
  },
  v5 = function (n, r, i, l, c) {
    var f = n._gsap;
    (f.scaleX = f.scaleY = i), f.renderTransform(c, f);
  },
  y5 = function (n, r, i, l, c) {
    var f = n._gsap;
    (f[r] = i), f.renderTransform(c, f);
  },
  jt = "transform",
  na = jt + "Origin",
  b5 = function s(n, r) {
    var i = this,
      l = this.target,
      c = l.style,
      f = l._gsap;
    if (n in Zi && c) {
      if (((this.tfm = this.tfm || {}), n !== "transform"))
        (n = pi[n] || n),
          ~n.indexOf(",")
            ? n.split(",").forEach(function (h) {
                return (i.tfm[h] = Bi(l, h));
              })
            : (this.tfm[n] = f.x ? f[n] : Bi(l, n)),
          n === na && (this.tfm.zOrigin = f.zOrigin);
      else
        return pi.transform.split(",").forEach(function (h) {
          return s.call(i, h, r);
        });
      if (this.props.indexOf(jt) >= 0) return;
      f.svg &&
        ((this.svgo = l.getAttribute("data-svg-origin")),
        this.props.push(na, r, "")),
        (n = jt);
    }
    (c || r) && this.props.push(n, r, c[n]);
  },
  Wy = function (n) {
    n.translate &&
      (n.removeProperty("translate"),
      n.removeProperty("scale"),
      n.removeProperty("rotate"));
  },
  _5 = function () {
    var n = this.props,
      r = this.target,
      i = r.style,
      l = r._gsap,
      c,
      f;
    for (c = 0; c < n.length; c += 3)
      n[c + 1]
        ? n[c + 1] === 2
          ? r[n[c]](n[c + 2])
          : (r[n[c]] = n[c + 2])
        : n[c + 2]
        ? (i[n[c]] = n[c + 2])
        : i.removeProperty(
            n[c].substr(0, 2) === "--"
              ? n[c]
              : n[c].replace(im, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (f in this.tfm) l[f] = this.tfm[f];
      l.svg &&
        (l.renderTransform(),
        r.setAttribute("data-svg-origin", this.svgo || "")),
        (c = am()),
        (!c || !c.isStart) &&
          !i[jt] &&
          (Wy(i),
          l.zOrigin &&
            i[na] &&
            ((i[na] += " " + l.zOrigin + "px"),
            (l.zOrigin = 0),
            l.renderTransform()),
          (l.uncache = 1));
    }
  },
  $y = function (n, r) {
    var i = { target: n, props: [], revert: _5, save: b5 };
    return (
      n._gsap || aa.core.getCache(n),
      r &&
        n.style &&
        n.nodeType &&
        r.split(",").forEach(function (l) {
          return i.save(l);
        }),
      i
    );
  },
  Iy,
  xp = function (n, r) {
    var i = _r.createElementNS
      ? _r.createElementNS(
          (r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          n
        )
      : _r.createElement(n);
    return i && i.style ? i : _r.createElement(n);
  },
  _a = function s(n, r, i) {
    var l = getComputedStyle(n);
    return (
      l[r] ||
      l.getPropertyValue(r.replace(im, "-$1").toLowerCase()) ||
      l.getPropertyValue(r) ||
      (!i && s(n, _s(r) || r, 1)) ||
      ""
    );
  },
  Kx = "O,Moz,ms,Ms,Webkit".split(","),
  _s = function (n, r, i) {
    var l = r || rl,
      c = l.style,
      f = 5;
    if (n in c && !i) return n;
    for (
      n = n.charAt(0).toUpperCase() + n.substr(1);
      f-- && !(Kx[f] + n in c);

    );
    return f < 0 ? null : (f === 3 ? "ms" : f >= 0 ? Kx[f] : "") + n;
  },
  vp = function () {
    s5() &&
      window.document &&
      ((Zx = window),
      (_r = Zx.document),
      (fs = _r.documentElement),
      (rl = xp("div") || { style: {} }),
      xp("div"),
      (jt = _s(jt)),
      (na = jt + "Origin"),
      (rl.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Iy = !!_s("perspective")),
      (am = aa.core.reverting),
      (nm = 1));
  },
  Fx = function (n) {
    var r = n.ownerSVGElement,
      i = xp(
        "svg",
        (r && r.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      l = n.cloneNode(!0),
      c;
    (l.style.display = "block"), i.appendChild(l), fs.appendChild(i);
    try {
      c = l.getBBox();
    } catch {}
    return i.removeChild(l), fs.removeChild(i), c;
  },
  Jx = function (n, r) {
    for (var i = r.length; i--; )
      if (n.hasAttribute(r[i])) return n.getAttribute(r[i]);
  },
  eb = function (n) {
    var r, i;
    try {
      r = n.getBBox();
    } catch {
      (r = Fx(n)), (i = 1);
    }
    return (
      (r && (r.width || r.height)) || i || (r = Fx(n)),
      r && !r.width && !r.x && !r.y
        ? {
            x: +Jx(n, ["x", "cx", "x1"]) || 0,
            y: +Jx(n, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : r
    );
  },
  tb = function (n) {
    return !!(n.getCTM && (!n.parentNode || n.ownerSVGElement) && eb(n));
  },
  Rr = function (n, r) {
    if (r) {
      var i = n.style,
        l;
      r in Zi && r !== na && (r = jt),
        i.removeProperty
          ? ((l = r.substr(0, 2)),
            (l === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r),
            i.removeProperty(
              l === "--" ? r : r.replace(im, "-$1").toLowerCase()
            ))
          : i.removeAttribute(r);
    }
  },
  Sr = function (n, r, i, l, c, f) {
    var h = new ta(n._pt, r, i, 0, 1, f ? Jy : Fy);
    return (n._pt = h), (h.b = l), (h.e = c), n._props.push(i), h;
  },
  Wx = { deg: 1, rad: 1, turn: 1 },
  S5 = { grid: 1, flex: 1 },
  Or = function s(n, r, i, l) {
    var c = parseFloat(i) || 0,
      f = (i + "").trim().substr((c + "").length) || "px",
      h = rl.style,
      p = o5.test(r),
      m = n.tagName.toLowerCase() === "svg",
      g = (m ? "client" : "offset") + (p ? "Width" : "Height"),
      v = 100,
      b = l === "px",
      _ = l === "%",
      w,
      S,
      E,
      C;
    if (l === f || !c || Wx[l] || Wx[f]) return c;
    if (
      (f !== "px" && !b && (c = s(n, r, i, "px")),
      (C = n.getCTM && tb(n)),
      (_ || f === "%") && (Zi[r] || ~r.indexOf("adius")))
    )
      return (
        (w = C ? n.getBBox()[p ? "width" : "height"] : n[g]),
        Qt(_ ? (c / w) * v : (c / 100) * w)
      );
    if (
      ((h[p ? "width" : "height"] = v + (b ? f : l)),
      (S =
        (l !== "rem" && ~r.indexOf("adius")) ||
        (l === "em" && n.appendChild && !m)
          ? n
          : n.parentNode),
      C && (S = (n.ownerSVGElement || {}).parentNode),
      (!S || S === _r || !S.appendChild) && (S = _r.body),
      (E = S._gsap),
      E && _ && E.width && p && E.time === va.time && !E.uncache)
    )
      return Qt((c / E.width) * v);
    if (_ && (r === "height" || r === "width")) {
      var A = n.style[r];
      (n.style[r] = v + l), (w = n[g]), A ? (n.style[r] = A) : Rr(n, r);
    } else
      (_ || f === "%") &&
        !S5[_a(S, "display")] &&
        (h.position = _a(n, "position")),
        S === n && (h.position = "static"),
        S.appendChild(rl),
        (w = rl[g]),
        S.removeChild(rl),
        (h.position = "absolute");
    return (
      p && _ && ((E = sl(S)), (E.time = va.time), (E.width = S[g])),
      Qt(b ? (w * c) / v : w && c ? (v / w) * c : 0)
    );
  },
  Bi = function (n, r, i, l) {
    var c;
    return (
      nm || vp(),
      r in pi &&
        r !== "transform" &&
        ((r = pi[r]), ~r.indexOf(",") && (r = r.split(",")[0])),
      Zi[r] && r !== "transform"
        ? ((c = Wo(n, l)),
          (c =
            r !== "transformOrigin"
              ? c[r]
              : c.svg
              ? c.origin
              : nf(_a(n, na)) + " " + c.zOrigin + "px"))
        : ((c = n.style[r]),
          (!c || c === "auto" || l || ~(c + "").indexOf("calc(")) &&
            (c =
              (tf[r] && tf[r](n, r, i)) ||
              _a(n, r) ||
              yy(n, r) ||
              (r === "opacity" ? 1 : 0))),
      i && !~(c + "").trim().indexOf(" ") ? Or(n, r, c, i) + i : c
    );
  },
  w5 = function (n, r, i, l) {
    if (!i || i === "none") {
      var c = _s(r, n, 1),
        f = c && _a(n, c, 1);
      f && f !== i
        ? ((r = c), (i = f))
        : r === "borderColor" && (i = _a(n, "borderTopColor"));
    }
    var h = new ta(this._pt, n.style, r, 0, 1, Qy),
      p = 0,
      m = 0,
      g,
      v,
      b,
      _,
      w,
      S,
      E,
      C,
      A,
      R,
      D,
      H;
    if (
      ((h.b = i),
      (h.e = l),
      (i += ""),
      (l += ""),
      l.substring(0, 6) === "var(--" &&
        (l = _a(n, l.substring(4, l.indexOf(")")))),
      l === "auto" &&
        ((S = n.style[r]),
        (n.style[r] = l),
        (l = _a(n, r) || l),
        S ? (n.style[r] = S) : Rr(n, r)),
      (g = [i, l]),
      Uy(g),
      (i = g[0]),
      (l = g[1]),
      (b = i.match(ss) || []),
      (H = l.match(ss) || []),
      H.length)
    ) {
      for (; (v = ss.exec(l)); )
        (E = v[0]),
          (A = l.substring(p, v.index)),
          w
            ? (w = (w + 1) % 5)
            : (A.substr(-5) === "rgba(" || A.substr(-5) === "hsla(") && (w = 1),
          E !== (S = b[m++] || "") &&
            ((_ = parseFloat(S) || 0),
            (D = S.substr((_ + "").length)),
            E.charAt(1) === "=" && (E = us(_, E) + D),
            (C = parseFloat(E)),
            (R = E.substr((C + "").length)),
            (p = ss.lastIndex - R.length),
            R ||
              ((R = R || Sa.units[r] || D),
              p === l.length && ((l += R), (h.e += R))),
            D !== R && (_ = Or(n, r, S, R) || 0),
            (h._pt = {
              _next: h._pt,
              p: A || m === 1 ? A : ",",
              s: _,
              c: C - _,
              m: (w && w < 4) || r === "zIndex" ? Math.round : 0,
            }));
      h.c = p < l.length ? l.substring(p, l.length) : "";
    } else h.r = r === "display" && l === "none" ? Jy : Fy;
    return py.test(l) && (h.e = 0), (this._pt = h), h;
  },
  $x = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  T5 = function (n) {
    var r = n.split(" "),
      i = r[0],
      l = r[1] || "50%";
    return (
      (i === "top" || i === "bottom" || l === "left" || l === "right") &&
        ((n = i), (i = l), (l = n)),
      (r[0] = $x[i] || i),
      (r[1] = $x[l] || l),
      r.join(" ")
    );
  },
  E5 = function (n, r) {
    if (r.tween && r.tween._time === r.tween._dur) {
      var i = r.t,
        l = i.style,
        c = r.u,
        f = i._gsap,
        h,
        p,
        m;
      if (c === "all" || c === !0) (l.cssText = ""), (p = 1);
      else
        for (c = c.split(","), m = c.length; --m > -1; )
          (h = c[m]),
            Zi[h] && ((p = 1), (h = h === "transformOrigin" ? na : jt)),
            Rr(i, h);
      p &&
        (Rr(i, jt),
        f &&
          (f.svg && i.removeAttribute("transform"),
          (l.scale = l.rotate = l.translate = "none"),
          Wo(i, 1),
          (f.uncache = 1),
          Wy(l)));
    }
  },
  tf = {
    clearProps: function (n, r, i, l, c) {
      if (c.data !== "isFromStart") {
        var f = (n._pt = new ta(n._pt, r, i, 0, 0, E5));
        return (f.u = l), (f.pr = -10), (f.tween = c), n._props.push(i), 1;
      }
    },
  },
  Jo = [1, 0, 0, 1, 0, 0],
  nb = {},
  ab = function (n) {
    return n === "matrix(1, 0, 0, 1, 0, 0)" || n === "none" || !n;
  },
  Ix = function (n) {
    var r = _a(n, jt);
    return ab(r) ? Jo : r.substr(7).match(hy).map(Qt);
  },
  rm = function (n, r) {
    var i = n._gsap || sl(n),
      l = n.style,
      c = Ix(n),
      f,
      h,
      p,
      m;
    return i.svg && n.getAttribute("transform")
      ? ((p = n.transform.baseVal.consolidate().matrix),
        (c = [p.a, p.b, p.c, p.d, p.e, p.f]),
        c.join(",") === "1,0,0,1,0,0" ? Jo : c)
      : (c === Jo &&
          !n.offsetParent &&
          n !== fs &&
          !i.svg &&
          ((p = l.display),
          (l.display = "block"),
          (f = n.parentNode),
          (!f || (!n.offsetParent && !n.getBoundingClientRect().width)) &&
            ((m = 1), (h = n.nextElementSibling), fs.appendChild(n)),
          (c = Ix(n)),
          p ? (l.display = p) : Rr(n, "display"),
          m &&
            (h
              ? f.insertBefore(n, h)
              : f
              ? f.appendChild(n)
              : fs.removeChild(n))),
        r && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
  },
  yp = function (n, r, i, l, c, f) {
    var h = n._gsap,
      p = c || rm(n, !0),
      m = h.xOrigin || 0,
      g = h.yOrigin || 0,
      v = h.xOffset || 0,
      b = h.yOffset || 0,
      _ = p[0],
      w = p[1],
      S = p[2],
      E = p[3],
      C = p[4],
      A = p[5],
      R = r.split(" "),
      D = parseFloat(R[0]) || 0,
      H = parseFloat(R[1]) || 0,
      G,
      z,
      L,
      X;
    i
      ? p !== Jo &&
        (z = _ * E - w * S) &&
        ((L = D * (E / z) + H * (-S / z) + (S * A - E * C) / z),
        (X = D * (-w / z) + H * (_ / z) - (_ * A - w * C) / z),
        (D = L),
        (H = X))
      : ((G = eb(n)),
        (D = G.x + (~R[0].indexOf("%") ? (D / 100) * G.width : D)),
        (H = G.y + (~(R[1] || R[0]).indexOf("%") ? (H / 100) * G.height : H))),
      l || (l !== !1 && h.smooth)
        ? ((C = D - m),
          (A = H - g),
          (h.xOffset = v + (C * _ + A * S) - C),
          (h.yOffset = b + (C * w + A * E) - A))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = D),
      (h.yOrigin = H),
      (h.smooth = !!l),
      (h.origin = r),
      (h.originIsAbsolute = !!i),
      (n.style[na] = "0px 0px"),
      f &&
        (Sr(f, h, "xOrigin", m, D),
        Sr(f, h, "yOrigin", g, H),
        Sr(f, h, "xOffset", v, h.xOffset),
        Sr(f, h, "yOffset", b, h.yOffset)),
      n.setAttribute("data-svg-origin", D + " " + H);
  },
  Wo = function (n, r) {
    var i = n._gsap || new Gy(n);
    if ("x" in i && !r && !i.uncache) return i;
    var l = n.style,
      c = i.scaleX < 0,
      f = "px",
      h = "deg",
      p = getComputedStyle(n),
      m = _a(n, na) || "0",
      g,
      v,
      b,
      _,
      w,
      S,
      E,
      C,
      A,
      R,
      D,
      H,
      G,
      z,
      L,
      X,
      F,
      le,
      I,
      xe,
      de,
      ce,
      U,
      Q,
      te,
      he,
      N,
      O,
      K,
      ne,
      ee,
      se;
    return (
      (g = v = b = S = E = C = A = R = D = 0),
      (_ = w = 1),
      (i.svg = !!(n.getCTM && tb(n))),
      p.translate &&
        ((p.translate !== "none" ||
          p.scale !== "none" ||
          p.rotate !== "none") &&
          (l[jt] =
            (p.translate !== "none"
              ? "translate3d(" +
                (p.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (p.rotate !== "none" ? "rotate(" + p.rotate + ") " : "") +
            (p.scale !== "none"
              ? "scale(" + p.scale.split(" ").join(",") + ") "
              : "") +
            (p[jt] !== "none" ? p[jt] : "")),
        (l.scale = l.rotate = l.translate = "none")),
      (z = rm(n, i.svg)),
      i.svg &&
        (i.uncache
          ? ((te = n.getBBox()),
            (m = i.xOrigin - te.x + "px " + (i.yOrigin - te.y) + "px"),
            (Q = ""))
          : (Q = !r && n.getAttribute("data-svg-origin")),
        yp(n, Q || m, !!Q || i.originIsAbsolute, i.smooth !== !1, z)),
      (H = i.xOrigin || 0),
      (G = i.yOrigin || 0),
      z !== Jo &&
        ((le = z[0]),
        (I = z[1]),
        (xe = z[2]),
        (de = z[3]),
        (g = ce = z[4]),
        (v = U = z[5]),
        z.length === 6
          ? ((_ = Math.sqrt(le * le + I * I)),
            (w = Math.sqrt(de * de + xe * xe)),
            (S = le || I ? ts(I, le) * tl : 0),
            (A = xe || de ? ts(xe, de) * tl + S : 0),
            A && (w *= Math.abs(Math.cos(A * ds))),
            i.svg &&
              ((g -= H - (H * le + G * xe)), (v -= G - (H * I + G * de))))
          : ((se = z[6]),
            (ne = z[7]),
            (N = z[8]),
            (O = z[9]),
            (K = z[10]),
            (ee = z[11]),
            (g = z[12]),
            (v = z[13]),
            (b = z[14]),
            (L = ts(se, K)),
            (E = L * tl),
            L &&
              ((X = Math.cos(-L)),
              (F = Math.sin(-L)),
              (Q = ce * X + N * F),
              (te = U * X + O * F),
              (he = se * X + K * F),
              (N = ce * -F + N * X),
              (O = U * -F + O * X),
              (K = se * -F + K * X),
              (ee = ne * -F + ee * X),
              (ce = Q),
              (U = te),
              (se = he)),
            (L = ts(-xe, K)),
            (C = L * tl),
            L &&
              ((X = Math.cos(-L)),
              (F = Math.sin(-L)),
              (Q = le * X - N * F),
              (te = I * X - O * F),
              (he = xe * X - K * F),
              (ee = de * F + ee * X),
              (le = Q),
              (I = te),
              (xe = he)),
            (L = ts(I, le)),
            (S = L * tl),
            L &&
              ((X = Math.cos(L)),
              (F = Math.sin(L)),
              (Q = le * X + I * F),
              (te = ce * X + U * F),
              (I = I * X - le * F),
              (U = U * X - ce * F),
              (le = Q),
              (ce = te)),
            E &&
              Math.abs(E) + Math.abs(S) > 359.9 &&
              ((E = S = 0), (C = 180 - C)),
            (_ = Qt(Math.sqrt(le * le + I * I + xe * xe))),
            (w = Qt(Math.sqrt(U * U + se * se))),
            (L = ts(ce, U)),
            (A = Math.abs(L) > 2e-4 ? L * tl : 0),
            (D = ee ? 1 / (ee < 0 ? -ee : ee) : 0)),
        i.svg &&
          ((Q = n.getAttribute("transform")),
          (i.forceCSS = n.setAttribute("transform", "") || !ab(_a(n, jt))),
          Q && n.setAttribute("transform", Q))),
      Math.abs(A) > 90 &&
        Math.abs(A) < 270 &&
        (c
          ? ((_ *= -1), (A += S <= 0 ? 180 : -180), (S += S <= 0 ? 180 : -180))
          : ((w *= -1), (A += A <= 0 ? 180 : -180))),
      (r = r || i.uncache),
      (i.x =
        g -
        ((i.xPercent =
          g &&
          ((!r && i.xPercent) ||
            (Math.round(n.offsetWidth / 2) === Math.round(-g) ? -50 : 0)))
          ? (n.offsetWidth * i.xPercent) / 100
          : 0) +
        f),
      (i.y =
        v -
        ((i.yPercent =
          v &&
          ((!r && i.yPercent) ||
            (Math.round(n.offsetHeight / 2) === Math.round(-v) ? -50 : 0)))
          ? (n.offsetHeight * i.yPercent) / 100
          : 0) +
        f),
      (i.z = b + f),
      (i.scaleX = Qt(_)),
      (i.scaleY = Qt(w)),
      (i.rotation = Qt(S) + h),
      (i.rotationX = Qt(E) + h),
      (i.rotationY = Qt(C) + h),
      (i.skewX = A + h),
      (i.skewY = R + h),
      (i.transformPerspective = D + f),
      (i.zOrigin = parseFloat(m.split(" ")[2]) || (!r && i.zOrigin) || 0) &&
        (l[na] = nf(m)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = Sa.force3D),
      (i.renderTransform = i.svg ? A5 : Iy ? ib : C5),
      (i.uncache = 0),
      i
    );
  },
  nf = function (n) {
    return (n = n.split(" "))[0] + " " + n[1];
  },
  Kh = function (n, r, i) {
    var l = En(r);
    return Qt(parseFloat(r) + parseFloat(Or(n, "x", i + "px", l))) + l;
  },
  C5 = function (n, r) {
    (r.z = "0px"),
      (r.rotationY = r.rotationX = "0deg"),
      (r.force3D = 0),
      ib(n, r);
  },
  Wr = "0deg",
  go = "0px",
  $r = ") ",
  ib = function (n, r) {
    var i = r || this,
      l = i.xPercent,
      c = i.yPercent,
      f = i.x,
      h = i.y,
      p = i.z,
      m = i.rotation,
      g = i.rotationY,
      v = i.rotationX,
      b = i.skewX,
      _ = i.skewY,
      w = i.scaleX,
      S = i.scaleY,
      E = i.transformPerspective,
      C = i.force3D,
      A = i.target,
      R = i.zOrigin,
      D = "",
      H = (C === "auto" && n && n !== 1) || C === !0;
    if (R && (v !== Wr || g !== Wr)) {
      var G = parseFloat(g) * ds,
        z = Math.sin(G),
        L = Math.cos(G),
        X;
      (G = parseFloat(v) * ds),
        (X = Math.cos(G)),
        (f = Kh(A, f, z * X * -R)),
        (h = Kh(A, h, -Math.sin(G) * -R)),
        (p = Kh(A, p, L * X * -R + R));
    }
    E !== go && (D += "perspective(" + E + $r),
      (l || c) && (D += "translate(" + l + "%, " + c + "%) "),
      (H || f !== go || h !== go || p !== go) &&
        (D +=
          p !== go || H
            ? "translate3d(" + f + ", " + h + ", " + p + ") "
            : "translate(" + f + ", " + h + $r),
      m !== Wr && (D += "rotate(" + m + $r),
      g !== Wr && (D += "rotateY(" + g + $r),
      v !== Wr && (D += "rotateX(" + v + $r),
      (b !== Wr || _ !== Wr) && (D += "skew(" + b + ", " + _ + $r),
      (w !== 1 || S !== 1) && (D += "scale(" + w + ", " + S + $r),
      (A.style[jt] = D || "translate(0, 0)");
  },
  A5 = function (n, r) {
    var i = r || this,
      l = i.xPercent,
      c = i.yPercent,
      f = i.x,
      h = i.y,
      p = i.rotation,
      m = i.skewX,
      g = i.skewY,
      v = i.scaleX,
      b = i.scaleY,
      _ = i.target,
      w = i.xOrigin,
      S = i.yOrigin,
      E = i.xOffset,
      C = i.yOffset,
      A = i.forceCSS,
      R = parseFloat(f),
      D = parseFloat(h),
      H,
      G,
      z,
      L,
      X;
    (p = parseFloat(p)),
      (m = parseFloat(m)),
      (g = parseFloat(g)),
      g && ((g = parseFloat(g)), (m += g), (p += g)),
      p || m
        ? ((p *= ds),
          (m *= ds),
          (H = Math.cos(p) * v),
          (G = Math.sin(p) * v),
          (z = Math.sin(p - m) * -b),
          (L = Math.cos(p - m) * b),
          m &&
            ((g *= ds),
            (X = Math.tan(m - g)),
            (X = Math.sqrt(1 + X * X)),
            (z *= X),
            (L *= X),
            g &&
              ((X = Math.tan(g)),
              (X = Math.sqrt(1 + X * X)),
              (H *= X),
              (G *= X))),
          (H = Qt(H)),
          (G = Qt(G)),
          (z = Qt(z)),
          (L = Qt(L)))
        : ((H = v), (L = b), (G = z = 0)),
      ((R && !~(f + "").indexOf("px")) || (D && !~(h + "").indexOf("px"))) &&
        ((R = Or(_, "x", f, "px")), (D = Or(_, "y", h, "px"))),
      (w || S || E || C) &&
        ((R = Qt(R + w - (w * H + S * z) + E)),
        (D = Qt(D + S - (w * G + S * L) + C))),
      (l || c) &&
        ((X = _.getBBox()),
        (R = Qt(R + (l / 100) * X.width)),
        (D = Qt(D + (c / 100) * X.height))),
      (X =
        "matrix(" + H + "," + G + "," + z + "," + L + "," + R + "," + D + ")"),
      _.setAttribute("transform", X),
      A && (_.style[jt] = X);
  },
  N5 = function (n, r, i, l, c) {
    var f = 360,
      h = pn(c),
      p = parseFloat(c) * (h && ~c.indexOf("rad") ? tl : 1),
      m = p - l,
      g = l + m + "deg",
      v,
      b;
    return (
      h &&
        ((v = c.split("_")[1]),
        v === "short" && ((m %= f), m !== m % (f / 2) && (m += m < 0 ? f : -f)),
        v === "cw" && m < 0
          ? (m = ((m + f * Px) % f) - ~~(m / f) * f)
          : v === "ccw" && m > 0 && (m = ((m - f * Px) % f) - ~~(m / f) * f)),
      (n._pt = b = new ta(n._pt, r, i, l, m, u5)),
      (b.e = g),
      (b.u = "deg"),
      n._props.push(i),
      b
    );
  },
  ev = function (n, r) {
    for (var i in r) n[i] = r[i];
    return n;
  },
  R5 = function (n, r, i) {
    var l = ev({}, i._gsap),
      c = "perspective,force3D,transformOrigin,svgOrigin",
      f = i.style,
      h,
      p,
      m,
      g,
      v,
      b,
      _,
      w;
    l.svg
      ? ((m = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (f[jt] = r),
        (h = Wo(i, 1)),
        Rr(i, jt),
        i.setAttribute("transform", m))
      : ((m = getComputedStyle(i)[jt]),
        (f[jt] = r),
        (h = Wo(i, 1)),
        (f[jt] = m));
    for (p in Zi)
      (m = l[p]),
        (g = h[p]),
        m !== g &&
          c.indexOf(p) < 0 &&
          ((_ = En(m)),
          (w = En(g)),
          (v = _ !== w ? Or(i, p, m, w) : parseFloat(m)),
          (b = parseFloat(g)),
          (n._pt = new ta(n._pt, h, p, v, b - v, gp)),
          (n._pt.u = w || 0),
          n._props.push(p));
    ev(h, l);
  };
ea("padding,margin,Width,Radius", function (s, n) {
  var r = "Top",
    i = "Right",
    l = "Bottom",
    c = "Left",
    f = (n < 3 ? [r, i, l, c] : [r + c, r + i, l + i, l + c]).map(function (h) {
      return n < 2 ? s + h : "border" + h + s;
    });
  tf[n > 1 ? "border" + s : s] = function (h, p, m, g, v) {
    var b, _;
    if (arguments.length < 4)
      return (
        (b = f.map(function (w) {
          return Bi(h, w, m);
        })),
        (_ = b.join(" ")),
        _.split(b[0]).length === 5 ? b[0] : _
      );
    (b = (g + "").split(" ")),
      (_ = {}),
      f.forEach(function (w, S) {
        return (_[w] = b[S] = b[S] || b[((S - 1) / 2) | 0]);
      }),
      h.init(p, _, v);
  };
});
var rb = {
  name: "css",
  register: vp,
  targetTest: function (n) {
    return n.style && n.nodeType;
  },
  init: function (n, r, i, l, c) {
    var f = this._props,
      h = n.style,
      p = i.vars.startAt,
      m,
      g,
      v,
      b,
      _,
      w,
      S,
      E,
      C,
      A,
      R,
      D,
      H,
      G,
      z,
      L,
      X;
    nm || vp(),
      (this.styles = this.styles || $y(n)),
      (L = this.styles.props),
      (this.tween = i);
    for (S in r)
      if (S !== "autoRound" && ((g = r[S]), !(ga[S] && Yy(S, r, i, l, n, c)))) {
        if (
          ((_ = typeof g),
          (w = tf[S]),
          _ === "function" && ((g = g.call(i, l, n, c)), (_ = typeof g)),
          _ === "string" && ~g.indexOf("random(") && (g = Po(g)),
          w)
        )
          w(this, n, S, g, i) && (z = 1);
        else if (S.substr(0, 2) === "--")
          (m = (getComputedStyle(n).getPropertyValue(S) + "").trim()),
            (g += ""),
            (Cr.lastIndex = 0),
            Cr.test(m) ||
              ((E = En(m)),
              (C = En(g)),
              C ? E !== C && (m = Or(n, S, m, C) + C) : E && (g += E)),
            this.add(h, "setProperty", m, g, l, c, 0, 0, S),
            f.push(S),
            L.push(S, 0, h[S]);
        else if (_ !== "undefined") {
          if (
            (p && S in p
              ? ((m = typeof p[S] == "function" ? p[S].call(i, l, n, c) : p[S]),
                pn(m) && ~m.indexOf("random(") && (m = Po(m)),
                En(m + "") ||
                  m === "auto" ||
                  (m += Sa.units[S] || En(Bi(n, S)) || ""),
                (m + "").charAt(1) === "=" && (m = Bi(n, S)))
              : (m = Bi(n, S)),
            (b = parseFloat(m)),
            (A = _ === "string" && g.charAt(1) === "=" && g.substr(0, 2)),
            A && (g = g.substr(2)),
            (v = parseFloat(g)),
            S in pi &&
              (S === "autoAlpha" &&
                (b === 1 && Bi(n, "visibility") === "hidden" && v && (b = 0),
                L.push("visibility", 0, h.visibility),
                Sr(
                  this,
                  h,
                  "visibility",
                  b ? "inherit" : "hidden",
                  v ? "inherit" : "hidden",
                  !v
                )),
              S !== "scale" &&
                S !== "transform" &&
                ((S = pi[S]), ~S.indexOf(",") && (S = S.split(",")[0]))),
            (R = S in Zi),
            R)
          ) {
            if (
              (this.styles.save(S),
              (X = g),
              _ === "string" && g.substring(0, 6) === "var(--")
            ) {
              if (
                ((g = _a(n, g.substring(4, g.indexOf(")")))),
                g.substring(0, 5) === "calc(")
              ) {
                var F = n.style.perspective;
                (n.style.perspective = g),
                  (g = _a(n, "perspective")),
                  F ? (n.style.perspective = F) : Rr(n, "perspective");
              }
              v = parseFloat(g);
            }
            if (
              (D ||
                ((H = n._gsap),
                (H.renderTransform && !r.parseTransform) ||
                  Wo(n, r.parseTransform),
                (G = r.smoothOrigin !== !1 && H.smooth),
                (D = this._pt =
                  new ta(this._pt, h, jt, 0, 1, H.renderTransform, H, 0, -1)),
                (D.dep = 1)),
              S === "scale")
            )
              (this._pt = new ta(
                this._pt,
                H,
                "scaleY",
                H.scaleY,
                (A ? us(H.scaleY, A + v) : v) - H.scaleY || 0,
                gp
              )),
                (this._pt.u = 0),
                f.push("scaleY", S),
                (S += "X");
            else if (S === "transformOrigin") {
              L.push(na, 0, h[na]),
                (g = T5(g)),
                H.svg
                  ? yp(n, g, 0, G, 0, this)
                  : ((C = parseFloat(g.split(" ")[2]) || 0),
                    C !== H.zOrigin && Sr(this, H, "zOrigin", H.zOrigin, C),
                    Sr(this, h, S, nf(m), nf(g)));
              continue;
            } else if (S === "svgOrigin") {
              yp(n, g, 1, G, 0, this);
              continue;
            } else if (S in nb) {
              N5(this, H, S, b, A ? us(b, A + g) : g);
              continue;
            } else if (S === "smoothOrigin") {
              Sr(this, H, "smooth", H.smooth, g);
              continue;
            } else if (S === "force3D") {
              H[S] = g;
              continue;
            } else if (S === "transform") {
              R5(this, g, n);
              continue;
            }
          } else S in h || (S = _s(S) || S);
          if (R || ((v || v === 0) && (b || b === 0) && !c5.test(g) && S in h))
            (E = (m + "").substr((b + "").length)),
              v || (v = 0),
              (C = En(g) || (S in Sa.units ? Sa.units[S] : E)),
              E !== C && (b = Or(n, S, m, C)),
              (this._pt = new ta(
                this._pt,
                R ? H : h,
                S,
                b,
                (A ? us(b, A + v) : v) - b,
                !R && (C === "px" || S === "zIndex") && r.autoRound !== !1
                  ? h5
                  : gp
              )),
              (this._pt.u = C || 0),
              R && X !== g
                ? ((this._pt.b = m), (this._pt.e = X), (this._pt.r = d5))
                : E !== C && C !== "%" && ((this._pt.b = m), (this._pt.r = f5));
          else if (S in h) w5.call(this, n, S, m, A ? A + g : g);
          else if (S in n) this.add(n, S, m || n[S], A ? A + g : g, l, c);
          else if (S !== "parseTransform") {
            Qp(S, g);
            continue;
          }
          R ||
            (S in h
              ? L.push(S, 0, h[S])
              : typeof n[S] == "function"
              ? L.push(S, 2, n[S]())
              : L.push(S, 1, m || n[S])),
            f.push(S);
        }
      }
    z && Py(this);
  },
  render: function (n, r) {
    if (r.tween._time || !am())
      for (var i = r._pt; i; ) i.r(n, i.d), (i = i._next);
    else r.styles.revert();
  },
  get: Bi,
  aliases: pi,
  getSetter: function (n, r, i) {
    var l = pi[r];
    return (
      l && l.indexOf(",") < 0 && (r = l),
      r in Zi && r !== na && (n._gsap.x || Bi(n, "x"))
        ? i && Qx === i
          ? r === "scale"
            ? x5
            : g5
          : (Qx = i || {}) && (r === "scale" ? v5 : y5)
        : n.style && !Xp(n.style[r])
        ? p5
        : ~r.indexOf("-")
        ? m5
        : em(n, r)
    );
  },
  core: { _removeProperty: Rr, _getMatrix: rm },
};
aa.utils.checkPrefix = _s;
aa.core.getStyleSaver = $y;
(function (s, n, r, i) {
  var l = ea(s + "," + n + "," + r, function (c) {
    Zi[c] = 1;
  });
  ea(n, function (c) {
    (Sa.units[c] = "deg"), (nb[c] = 1);
  }),
    (pi[l[13]] = s + "," + n),
    ea(i, function (c) {
      var f = c.split(":");
      pi[f[1]] = l[f[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
ea(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (s) {
    Sa.units[s] = "px";
  }
);
aa.registerPlugin(rb);
var Ne = aa.registerPlugin(rb) || aa;
Ne.core.Tween;
function O5(s, n) {
  for (var r = 0; r < n.length; r++) {
    var i = n[r];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(s, i.key, i);
  }
}
function M5(s, n, r) {
  return n && O5(s.prototype, n), s;
}
var bn,
  qu,
  ya,
  wr,
  Tr,
  hs,
  lb,
  nl,
  ps,
  sb,
  Yi,
  Ia,
  ob,
  cb = function () {
    return (
      bn ||
      (typeof window < "u" && (bn = window.gsap) && bn.registerPlugin && bn)
    );
  },
  ub = 1,
  cs = [],
  Ve = [],
  gi = [],
  Mo = Date.now,
  bp = function (n, r) {
    return r;
  },
  z5 = function () {
    var n = ps.core,
      r = n.bridge || {},
      i = n._scrollers,
      l = n._proxies;
    i.push.apply(i, Ve),
      l.push.apply(l, gi),
      (Ve = i),
      (gi = l),
      (bp = function (f, h) {
        return r[f](h);
      });
  },
  Ar = function (n, r) {
    return ~gi.indexOf(n) && gi[gi.indexOf(n) + 1][r];
  },
  zo = function (n) {
    return !!~sb.indexOf(n);
  },
  kn = function (n, r, i, l, c) {
    return n.addEventListener(r, i, { passive: l !== !1, capture: !!c });
  },
  Dn = function (n, r, i, l) {
    return n.removeEventListener(r, i, !!l);
  },
  wu = "scrollLeft",
  Tu = "scrollTop",
  _p = function () {
    return (Yi && Yi.isPressed) || Ve.cache++;
  },
  af = function (n, r) {
    var i = function l(c) {
      if (c || c === 0) {
        ub && (ya.history.scrollRestoration = "manual");
        var f = Yi && Yi.isPressed;
        (c = l.v = Math.round(c) || (Yi && Yi.iOS ? 1 : 0)),
          n(c),
          (l.cacheID = Ve.cache),
          f && bp("ss", c);
      } else
        (r || Ve.cache !== l.cacheID || bp("ref")) &&
          ((l.cacheID = Ve.cache), (l.v = n()));
      return l.v + l.offset;
    };
    return (i.offset = 0), n && i;
  },
  Bn = {
    s: wu,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: af(function (s) {
      return arguments.length
        ? ya.scrollTo(s, on.sc())
        : ya.pageXOffset || wr[wu] || Tr[wu] || hs[wu] || 0;
    }),
  },
  on = {
    s: Tu,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Bn,
    sc: af(function (s) {
      return arguments.length
        ? ya.scrollTo(Bn.sc(), s)
        : ya.pageYOffset || wr[Tu] || Tr[Tu] || hs[Tu] || 0;
    }),
  },
  Wn = function (n, r) {
    return (
      ((r && r._ctx && r._ctx.selector) || bn.utils.toArray)(n)[0] ||
      (typeof n == "string" && bn.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", n)
        : null)
    );
  },
  j5 = function (n, r) {
    for (var i = r.length; i--; ) if (r[i] === n || r[i].contains(n)) return !0;
    return !1;
  },
  Mr = function (n, r) {
    var i = r.s,
      l = r.sc;
    zo(n) && (n = wr.scrollingElement || Tr);
    var c = Ve.indexOf(n),
      f = l === on.sc ? 1 : 2;
    !~c && (c = Ve.push(n) - 1), Ve[c + f] || kn(n, "scroll", _p);
    var h = Ve[c + f],
      p =
        h ||
        (Ve[c + f] =
          af(Ar(n, i), !0) ||
          (zo(n)
            ? l
            : af(function (m) {
                return arguments.length ? (n[i] = m) : n[i];
              })));
    return (
      (p.target = n),
      h || (p.smooth = bn.getProperty(n, "scrollBehavior") === "smooth"),
      p
    );
  },
  Sp = function (n, r, i) {
    var l = n,
      c = n,
      f = Mo(),
      h = f,
      p = r || 50,
      m = Math.max(500, p * 3),
      g = function (w, S) {
        var E = Mo();
        S || E - f > p
          ? ((c = l), (l = w), (h = f), (f = E))
          : i
          ? (l += w)
          : (l = c + ((w - c) / (E - h)) * (f - h));
      },
      v = function () {
        (c = l = i ? 0 : l), (h = f = 0);
      },
      b = function (w) {
        var S = h,
          E = c,
          C = Mo();
        return (
          (w || w === 0) && w !== l && g(w),
          f === h || C - h > m
            ? 0
            : ((l + (i ? E : -E)) / ((i ? C : f) - S)) * 1e3
        );
      };
    return { update: g, reset: v, getVelocity: b };
  },
  xo = function (n, r) {
    return (
      r && !n._gsapAllow && n.cancelable !== !1 && n.preventDefault(),
      n.changedTouches ? n.changedTouches[0] : n
    );
  },
  tv = function (n) {
    var r = Math.max.apply(Math, n),
      i = Math.min.apply(Math, n);
    return Math.abs(r) >= Math.abs(i) ? r : i;
  },
  fb = function () {
    (ps = bn.core.globals().ScrollTrigger), ps && ps.core && z5();
  },
  db = function (n) {
    return (
      (bn = n || cb()),
      !qu &&
        bn &&
        typeof document < "u" &&
        document.body &&
        ((ya = window),
        (wr = document),
        (Tr = wr.documentElement),
        (hs = wr.body),
        (sb = [ya, wr, Tr, hs]),
        bn.utils.clamp,
        (ob = bn.core.context || function () {}),
        (nl = "onpointerenter" in hs ? "pointer" : "mouse"),
        (lb = Pt.isTouch =
          ya.matchMedia &&
          ya.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in ya ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (Ia = Pt.eventTypes =
          (
            "ontouchstart" in Tr
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Tr
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (ub = 0);
        }, 500),
        (qu = 1)),
      ps || fb(),
      qu
    );
  };
Bn.op = on;
Ve.cache = 0;
var Pt = (function () {
  function s(r) {
    this.init(r);
  }
  var n = s.prototype;
  return (
    (n.init = function (i) {
      qu || db(bn) || console.warn("Please gsap.registerPlugin(Observer)"),
        ps || fb();
      var l = i.tolerance,
        c = i.dragMinimum,
        f = i.type,
        h = i.target,
        p = i.lineHeight,
        m = i.debounce,
        g = i.preventDefault,
        v = i.onStop,
        b = i.onStopDelay,
        _ = i.ignore,
        w = i.wheelSpeed,
        S = i.event,
        E = i.onDragStart,
        C = i.onDragEnd,
        A = i.onDrag,
        R = i.onPress,
        D = i.onRelease,
        H = i.onRight,
        G = i.onLeft,
        z = i.onUp,
        L = i.onDown,
        X = i.onChangeX,
        F = i.onChangeY,
        le = i.onChange,
        I = i.onToggleX,
        xe = i.onToggleY,
        de = i.onHover,
        ce = i.onHoverEnd,
        U = i.onMove,
        Q = i.ignoreCheck,
        te = i.isNormalizer,
        he = i.onGestureStart,
        N = i.onGestureEnd,
        O = i.onWheel,
        K = i.onEnable,
        ne = i.onDisable,
        ee = i.onClick,
        se = i.scrollSpeed,
        oe = i.capture,
        ue = i.allowClicks,
        ae = i.lockAxis,
        ie = i.onLockAxis;
      (this.target = h = Wn(h) || Tr),
        (this.vars = i),
        _ && (_ = bn.utils.toArray(_)),
        (l = l || 1e-9),
        (c = c || 0),
        (w = w || 1),
        (se = se || 1),
        (f = f || "wheel,touch,pointer"),
        (m = m !== !1),
        p || (p = parseFloat(ya.getComputedStyle(hs).lineHeight) || 22);
      var Ce,
        be,
        re,
        pe,
        Se,
        We,
        ot,
        Z = this,
        St = 0,
        Lt = 0,
        Kt = i.passive || (!g && i.passive !== !1),
        et = Mr(h, Bn),
        Nn = Mr(h, on),
        Gn = et(),
        wt = Nn(),
        At =
          ~f.indexOf("touch") &&
          !~f.indexOf("pointer") &&
          Ia[0] === "pointerdown",
        ia = zo(h),
        dt = h.ownerDocument || wr,
        cn = [0, 0, 0],
        un = [0, 0, 0],
        tn = 0,
        Pa = function () {
          return (tn = Mo());
        },
        gt = function (we, Ie) {
          return (
            ((Z.event = we) && _ && j5(we.target, _)) ||
            (Ie && At && we.pointerType !== "touch") ||
            (Q && Q(we, Ie))
          );
        },
        Rn = function () {
          Z._vx.reset(), Z._vy.reset(), be.pause(), v && v(Z);
        },
        xt = function () {
          var we = (Z.deltaX = tv(cn)),
            Ie = (Z.deltaY = tv(un)),
            fe = Math.abs(we) >= l,
            ze = Math.abs(Ie) >= l;
          le && (fe || ze) && le(Z, we, Ie, cn, un),
            fe &&
              (H && Z.deltaX > 0 && H(Z),
              G && Z.deltaX < 0 && G(Z),
              X && X(Z),
              I && Z.deltaX < 0 != St < 0 && I(Z),
              (St = Z.deltaX),
              (cn[0] = cn[1] = cn[2] = 0)),
            ze &&
              (L && Z.deltaY > 0 && L(Z),
              z && Z.deltaY < 0 && z(Z),
              F && F(Z),
              xe && Z.deltaY < 0 != Lt < 0 && xe(Z),
              (Lt = Z.deltaY),
              (un[0] = un[1] = un[2] = 0)),
            (pe || re) &&
              (U && U(Z),
              re && (E && re === 1 && E(Z), A && A(Z), (re = 0)),
              (pe = !1)),
            We && !(We = !1) && ie && ie(Z),
            Se && (O(Z), (Se = !1)),
            (Ce = 0);
        },
        mn = function (we, Ie, fe) {
          (cn[fe] += we),
            (un[fe] += Ie),
            Z._vx.update(we),
            Z._vy.update(Ie),
            m ? Ce || (Ce = requestAnimationFrame(xt)) : xt();
        },
        Ht = function (we, Ie) {
          ae &&
            !ot &&
            ((Z.axis = ot = Math.abs(we) > Math.abs(Ie) ? "x" : "y"),
            (We = !0)),
            ot !== "y" && ((cn[2] += we), Z._vx.update(we, !0)),
            ot !== "x" && ((un[2] += Ie), Z._vy.update(Ie, !0)),
            m ? Ce || (Ce = requestAnimationFrame(xt)) : xt();
        },
        Ea = function (we) {
          if (!gt(we, 1)) {
            we = xo(we, g);
            var Ie = we.clientX,
              fe = we.clientY,
              ze = Ie - Z.x,
              Te = fe - Z.y,
              Oe = Z.isDragging;
            (Z.x = Ie),
              (Z.y = fe),
              (Oe ||
                ((ze || Te) &&
                  (Math.abs(Z.startX - Ie) >= c ||
                    Math.abs(Z.startY - fe) >= c))) &&
                (re || (re = Oe ? 2 : 1),
                Oe || (Z.isDragging = !0),
                Ht(ze, Te));
          }
        },
        Ka = (Z.onPress = function (Me) {
          gt(Me, 1) ||
            (Me && Me.button) ||
            ((Z.axis = ot = null),
            be.pause(),
            (Z.isPressed = !0),
            (Me = xo(Me)),
            (St = Lt = 0),
            (Z.startX = Z.x = Me.clientX),
            (Z.startY = Z.y = Me.clientY),
            Z._vx.reset(),
            Z._vy.reset(),
            kn(te ? h : dt, Ia[1], Ea, Kt, !0),
            (Z.deltaX = Z.deltaY = 0),
            R && R(Z));
        }),
        De = (Z.onRelease = function (Me) {
          if (!gt(Me, 1)) {
            Dn(te ? h : dt, Ia[1], Ea, !0);
            var we = !isNaN(Z.y - Z.startY),
              Ie = Z.isDragging,
              fe =
                Ie &&
                (Math.abs(Z.x - Z.startX) > 3 || Math.abs(Z.y - Z.startY) > 3),
              ze = xo(Me);
            !fe &&
              we &&
              (Z._vx.reset(),
              Z._vy.reset(),
              g &&
                ue &&
                bn.delayedCall(0.08, function () {
                  if (Mo() - tn > 300 && !Me.defaultPrevented) {
                    if (Me.target.click) Me.target.click();
                    else if (dt.createEvent) {
                      var Te = dt.createEvent("MouseEvents");
                      Te.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        ya,
                        1,
                        ze.screenX,
                        ze.screenY,
                        ze.clientX,
                        ze.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        Me.target.dispatchEvent(Te);
                    }
                  }
                })),
              (Z.isDragging = Z.isGesturing = Z.isPressed = !1),
              v && Ie && !te && be.restart(!0),
              re && xt(),
              C && Ie && C(Z),
              D && D(Z, fe);
          }
        }),
        Yn = function (we) {
          return (
            we.touches &&
            we.touches.length > 1 &&
            (Z.isGesturing = !0) &&
            he(we, Z.isDragging)
          );
        },
        nn = function () {
          return (Z.isGesturing = !1) || N(Z);
        },
        an = function (we) {
          if (!gt(we)) {
            var Ie = et(),
              fe = Nn();
            mn((Ie - Gn) * se, (fe - wt) * se, 1),
              (Gn = Ie),
              (wt = fe),
              v && be.restart(!0);
          }
        },
        Ut = function (we) {
          if (!gt(we)) {
            (we = xo(we, g)), O && (Se = !0);
            var Ie =
              (we.deltaMode === 1
                ? p
                : we.deltaMode === 2
                ? ya.innerHeight
                : 1) * w;
            mn(we.deltaX * Ie, we.deltaY * Ie, 0), v && !te && be.restart(!0);
          }
        },
        qn = function (we) {
          if (!gt(we)) {
            var Ie = we.clientX,
              fe = we.clientY,
              ze = Ie - Z.x,
              Te = fe - Z.y;
            (Z.x = Ie),
              (Z.y = fe),
              (pe = !0),
              v && be.restart(!0),
              (ze || Te) && Ht(ze, Te);
          }
        },
        On = function (we) {
          (Z.event = we), de(Z);
        },
        Xn = function (we) {
          (Z.event = we), ce(Z);
        },
        ni = function (we) {
          return gt(we) || (xo(we, g) && ee(Z));
        };
      (be = Z._dc = bn.delayedCall(b || 0.25, Rn).pause()),
        (Z.deltaX = Z.deltaY = 0),
        (Z._vx = Sp(0, 50, !0)),
        (Z._vy = Sp(0, 50, !0)),
        (Z.scrollX = et),
        (Z.scrollY = Nn),
        (Z.isDragging = Z.isGesturing = Z.isPressed = !1),
        ob(this),
        (Z.enable = function (Me) {
          return (
            Z.isEnabled ||
              (kn(ia ? dt : h, "scroll", _p),
              f.indexOf("scroll") >= 0 && kn(ia ? dt : h, "scroll", an, Kt, oe),
              f.indexOf("wheel") >= 0 && kn(h, "wheel", Ut, Kt, oe),
              ((f.indexOf("touch") >= 0 && lb) || f.indexOf("pointer") >= 0) &&
                (kn(h, Ia[0], Ka, Kt, oe),
                kn(dt, Ia[2], De),
                kn(dt, Ia[3], De),
                ue && kn(h, "click", Pa, !0, !0),
                ee && kn(h, "click", ni),
                he && kn(dt, "gesturestart", Yn),
                N && kn(dt, "gestureend", nn),
                de && kn(h, nl + "enter", On),
                ce && kn(h, nl + "leave", Xn),
                U && kn(h, nl + "move", qn)),
              (Z.isEnabled = !0),
              (Z.isDragging = Z.isGesturing = Z.isPressed = pe = re = !1),
              Z._vx.reset(),
              Z._vy.reset(),
              (Gn = et()),
              (wt = Nn()),
              Me && Me.type && Ka(Me),
              K && K(Z)),
            Z
          );
        }),
        (Z.disable = function () {
          Z.isEnabled &&
            (cs.filter(function (Me) {
              return Me !== Z && zo(Me.target);
            }).length || Dn(ia ? dt : h, "scroll", _p),
            Z.isPressed &&
              (Z._vx.reset(), Z._vy.reset(), Dn(te ? h : dt, Ia[1], Ea, !0)),
            Dn(ia ? dt : h, "scroll", an, oe),
            Dn(h, "wheel", Ut, oe),
            Dn(h, Ia[0], Ka, oe),
            Dn(dt, Ia[2], De),
            Dn(dt, Ia[3], De),
            Dn(h, "click", Pa, !0),
            Dn(h, "click", ni),
            Dn(dt, "gesturestart", Yn),
            Dn(dt, "gestureend", nn),
            Dn(h, nl + "enter", On),
            Dn(h, nl + "leave", Xn),
            Dn(h, nl + "move", qn),
            (Z.isEnabled = Z.isPressed = Z.isDragging = !1),
            ne && ne(Z));
        }),
        (Z.kill = Z.revert =
          function () {
            Z.disable();
            var Me = cs.indexOf(Z);
            Me >= 0 && cs.splice(Me, 1), Yi === Z && (Yi = 0);
          }),
        cs.push(Z),
        te && zo(h) && (Yi = Z),
        Z.enable(S);
    }),
    M5(s, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    s
  );
})();
Pt.version = "3.15.0";
Pt.create = function (s) {
  return new Pt(s);
};
Pt.register = db;
Pt.getAll = function () {
  return cs.slice();
};
Pt.getById = function (s) {
  return cs.filter(function (n) {
    return n.vars.id === s;
  })[0];
};
cb() && bn.registerPlugin(Pt);
var ye,
  rs,
  Xe,
  st,
  xa,
  it,
  lm,
  rf,
  $o,
  jo,
  So,
  Eu,
  wn,
  gf,
  wp,
  Hn,
  nv,
  av,
  ls,
  hb,
  Fh,
  pb,
  Ln,
  Tp,
  mb,
  gb,
  yr,
  Ep,
  sm,
  ms,
  om,
  Do,
  Cp,
  Jh,
  Cu = 1,
  Tn = Date.now,
  Wh = Tn(),
  Xa = 0,
  wo = 0,
  iv = function (n, r, i) {
    var l = ma(n) && (n.substr(0, 6) === "clamp(" || n.indexOf("max") > -1);
    return (i["_" + r + "Clamp"] = l), l ? n.substr(6, n.length - 7) : n;
  },
  rv = function (n, r) {
    return r && (!ma(n) || n.substr(0, 6) !== "clamp(")
      ? "clamp(" + n + ")"
      : n;
  },
  D5 = function s() {
    return wo && requestAnimationFrame(s);
  },
  lv = function () {
    return (gf = 1);
  },
  sv = function () {
    return (gf = 0);
  },
  di = function (n) {
    return n;
  },
  To = function (n) {
    return Math.round(n * 1e5) / 1e5 || 0;
  },
  xb = function () {
    return typeof window < "u";
  },
  vb = function () {
    return ye || (xb() && (ye = window.gsap) && ye.registerPlugin && ye);
  },
  pl = function (n) {
    return !!~lm.indexOf(n);
  },
  yb = function (n) {
    return (
      (n === "Height" ? om : Xe["inner" + n]) ||
      xa["client" + n] ||
      it["client" + n]
    );
  },
  bb = function (n) {
    return (
      Ar(n, "getBoundingClientRect") ||
      (pl(n)
        ? function () {
            return (Pu.width = Xe.innerWidth), (Pu.height = om), Pu;
          }
        : function () {
            return Gi(n);
          })
    );
  },
  k5 = function (n, r, i) {
    var l = i.d,
      c = i.d2,
      f = i.a;
    return (f = Ar(n, "getBoundingClientRect"))
      ? function () {
          return f()[l];
        }
      : function () {
          return (r ? yb(c) : n["client" + c]) || 0;
        };
  },
  L5 = function (n, r) {
    return !r || ~gi.indexOf(n)
      ? bb(n)
      : function () {
          return Pu;
        };
  },
  mi = function (n, r) {
    var i = r.s,
      l = r.d2,
      c = r.d,
      f = r.a;
    return Math.max(
      0,
      (i = "scroll" + l) && (f = Ar(n, i))
        ? f() - bb(n)()[c]
        : pl(n)
        ? (xa[i] || it[i]) - yb(l)
        : n[i] - n["offset" + l]
    );
  },
  Au = function (n, r) {
    for (var i = 0; i < ls.length; i += 3)
      (!r || ~r.indexOf(ls[i + 1])) && n(ls[i], ls[i + 1], ls[i + 2]);
  },
  ma = function (n) {
    return typeof n == "string";
  },
  Cn = function (n) {
    return typeof n == "function";
  },
  Eo = function (n) {
    return typeof n == "number";
  },
  al = function (n) {
    return typeof n == "object";
  },
  vo = function (n, r, i) {
    return n && n.progress(r ? 0 : 1) && i && n.pause();
  },
  ns = function (n, r, i) {
    if (n.enabled) {
      var l = n._ctx
        ? n._ctx.add(function () {
            return r(n, i);
          })
        : r(n, i);
      l && l.totalTime && (n.callbackAnimation = l);
    }
  },
  as = Math.abs,
  _b = "left",
  Sb = "top",
  cm = "right",
  um = "bottom",
  fl = "width",
  dl = "height",
  ko = "Right",
  Lo = "Left",
  Ho = "Top",
  Uo = "Bottom",
  It = "padding",
  Ba = "margin",
  Ss = "Width",
  fm = "Height",
  sn = "px",
  Ga = function (n) {
    return Xe.getComputedStyle(
      n.nodeType === Node.DOCUMENT_NODE ? n.scrollingElement : n
    );
  },
  H5 = function (n) {
    var r = Ga(n).position;
    n.style.position = r === "absolute" || r === "fixed" ? r : "relative";
  },
  ov = function (n, r) {
    for (var i in r) i in n || (n[i] = r[i]);
    return n;
  },
  Gi = function (n, r) {
    var i =
        r &&
        Ga(n)[wp] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        ye
          .to(n, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      l = n.getBoundingClientRect
        ? n.getBoundingClientRect()
        : n.scrollingElement.getBoundingClientRect();
    return i && i.progress(0).kill(), l;
  },
  lf = function (n, r) {
    var i = r.d2;
    return n["offset" + i] || n["client" + i] || 0;
  },
  wb = function (n) {
    var r = [],
      i = n.labels,
      l = n.duration(),
      c;
    for (c in i) r.push(i[c] / l);
    return r;
  },
  U5 = function (n) {
    return function (r) {
      return ye.utils.snap(wb(n), r);
    };
  },
  dm = function (n) {
    var r = ye.utils.snap(n),
      i =
        Array.isArray(n) &&
        n.slice(0).sort(function (l, c) {
          return l - c;
        });
    return i
      ? function (l, c, f) {
          f === void 0 && (f = 0.001);
          var h;
          if (!c) return r(l);
          if (c > 0) {
            for (l -= f, h = 0; h < i.length; h++) if (i[h] >= l) return i[h];
            return i[h - 1];
          } else for (h = i.length, l += f; h--; ) if (i[h] <= l) return i[h];
          return i[0];
        }
      : function (l, c, f) {
          f === void 0 && (f = 0.001);
          var h = r(l);
          return !c || Math.abs(h - l) < f || h - l < 0 == c < 0
            ? h
            : r(c < 0 ? l - n : l + n);
        };
  },
  B5 = function (n) {
    return function (r, i) {
      return dm(wb(n))(r, i.direction);
    };
  },
  Nu = function (n, r, i, l) {
    return i.split(",").forEach(function (c) {
      return n(r, c, l);
    });
  },
  hn = function (n, r, i, l, c) {
    return n.addEventListener(r, i, { passive: !l, capture: !!c });
  },
  dn = function (n, r, i, l) {
    return n.removeEventListener(r, i, !!l);
  },
  Ru = function (n, r, i) {
    (i = i && i.wheelHandler), i && (n(r, "wheel", i), n(r, "touchmove", i));
  },
  cv = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Ou = { toggleActions: "play", anticipatePin: 0 },
  sf = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Xu = function (n, r) {
    if (ma(n)) {
      var i = n.indexOf("="),
        l = ~i ? +(n.charAt(i - 1) + 1) * parseFloat(n.substr(i + 1)) : 0;
      ~i && (n.indexOf("%") > i && (l *= r / 100), (n = n.substr(0, i - 1))),
        (n =
          l +
          (n in sf
            ? sf[n] * r
            : ~n.indexOf("%")
            ? (parseFloat(n) * r) / 100
            : parseFloat(n) || 0));
    }
    return n;
  },
  Mu = function (n, r, i, l, c, f, h, p) {
    var m = c.startColor,
      g = c.endColor,
      v = c.fontSize,
      b = c.indent,
      _ = c.fontWeight,
      w = st.createElement("div"),
      S = pl(i) || Ar(i, "pinType") === "fixed",
      E = n.indexOf("scroller") !== -1,
      C = S ? it : i.tagName === "IFRAME" ? i.contentDocument.body : i,
      A = n.indexOf("start") !== -1,
      R = A ? m : g,
      D =
        "border-color:" +
        R +
        ";font-size:" +
        v +
        ";color:" +
        R +
        ";font-weight:" +
        _ +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (D += "position:" + ((E || p) && S ? "fixed;" : "absolute;")),
      (E || p || !S) &&
        (D += (l === on ? cm : um) + ":" + (f + parseFloat(b)) + "px;"),
      h &&
        (D +=
          "box-sizing:border-box;text-align:left;width:" +
          h.offsetWidth +
          "px;"),
      (w._isStart = A),
      w.setAttribute("class", "gsap-marker-" + n + (r ? " marker-" + r : "")),
      (w.style.cssText = D),
      (w.innerText = r || r === 0 ? n + "-" + r : n),
      C.children[0] ? C.insertBefore(w, C.children[0]) : C.appendChild(w),
      (w._offset = w["offset" + l.op.d2]),
      Vu(w, 0, l, A),
      w
    );
  },
  Vu = function (n, r, i, l) {
    var c = { display: "block" },
      f = i[l ? "os2" : "p2"],
      h = i[l ? "p2" : "os2"];
    (n._isFlipped = l),
      (c[i.a + "Percent"] = l ? -100 : 0),
      (c[i.a] = l ? "1px" : 0),
      (c["border" + f + Ss] = 1),
      (c["border" + h + Ss] = 0),
      (c[i.p] = r + "px"),
      ye.set(n, c);
  },
  Ge = [],
  Ap = {},
  Io,
  uv = function () {
    return Tn() - Xa > 34 && (Io || (Io = requestAnimationFrame(qi)));
  },
  is = function () {
    (!Ln || !Ln.isPressed || Ln.startX > it.clientWidth) &&
      (Ve.cache++,
      Ln ? Io || (Io = requestAnimationFrame(qi)) : qi(),
      Xa || gl("scrollStart"),
      (Xa = Tn()));
  },
  $h = function () {
    (gb = Xe.innerWidth), (mb = Xe.innerHeight);
  },
  Co = function (n) {
    Ve.cache++,
      (n === !0 ||
        (!wn &&
          !pb &&
          !st.fullscreenElement &&
          !st.webkitFullscreenElement &&
          (!Tp ||
            gb !== Xe.innerWidth ||
            Math.abs(Xe.innerHeight - mb) > Xe.innerHeight * 0.25))) &&
        rf.restart(!0);
  },
  ml = {},
  G5 = [],
  Tb = function s() {
    return dn(Re, "scrollEnd", s) || ll(!0);
  },
  gl = function (n) {
    return (
      (ml[n] &&
        ml[n].map(function (r) {
          return r();
        })) ||
      G5
    );
  },
  pa = [],
  Eb = function (n) {
    for (var r = 0; r < pa.length; r += 5)
      (!n || (pa[r + 4] && pa[r + 4].query === n)) &&
        ((pa[r].style.cssText = pa[r + 1]),
        pa[r].getBBox && pa[r].setAttribute("transform", pa[r + 2] || ""),
        (pa[r + 3].uncache = 1));
  },
  Cb = function () {
    return Ve.forEach(function (n) {
      return Cn(n) && ++n.cacheID && (n.rec = n());
    });
  },
  hm = function (n, r) {
    var i;
    for (Hn = 0; Hn < Ge.length; Hn++)
      (i = Ge[Hn]),
        i && (!r || i._ctx === r) && (n ? i.kill(1) : i.revert(!0, !0));
    (Do = !0), r && Eb(r), r || gl("revert");
  },
  Ab = function (n, r) {
    Ve.cache++,
      (r || !Un) &&
        Ve.forEach(function (i) {
          return Cn(i) && i.cacheID++ && (i.rec = 0);
        }),
      ma(n) && (Xe.history.scrollRestoration = sm = n);
  },
  Un,
  hl = 0,
  fv,
  Y5 = function () {
    if (fv !== hl) {
      var n = (fv = hl);
      requestAnimationFrame(function () {
        return n === hl && ll(!0);
      });
    }
  },
  Nb = function () {
    it.appendChild(ms),
      (om = (!Ln && ms.offsetHeight) || Xe.innerHeight),
      it.removeChild(ms);
  },
  dv = function (n) {
    return $o(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (r) {
      return (r.style.display = n ? "none" : "block");
    });
  },
  ll = function (n, r) {
    if (
      ((xa = st.documentElement),
      (it = st.body),
      (lm = [Xe, st, xa, it]),
      Xa && !n && !Do)
    ) {
      hn(Re, "scrollEnd", Tb);
      return;
    }
    Nb(), (Un = Re.isRefreshing = !0), Do || Cb();
    var i = gl("refreshInit");
    hb && Re.sort(),
      r || hm(),
      Ve.forEach(function (l) {
        Cn(l) && (l.smooth && (l.target.style.scrollBehavior = "auto"), l(0));
      }),
      Ge.slice(0).forEach(function (l) {
        return l.refresh();
      }),
      (Do = !1),
      Ge.forEach(function (l) {
        if (l._subPinOffset && l.pin) {
          var c = l.vars.horizontal ? "offsetWidth" : "offsetHeight",
            f = l.pin[c];
          l.revert(!0, 1), l.adjustPinSpacing(l.pin[c] - f), l.refresh();
        }
      }),
      (Cp = 1),
      dv(!0),
      Ge.forEach(function (l) {
        var c = mi(l.scroller, l._dir),
          f = l.vars.end === "max" || (l._endClamp && l.end > c),
          h = l._startClamp && l.start >= c;
        (f || h) &&
          l.setPositions(
            h ? c - 1 : l.start,
            f ? Math.max(h ? c : l.start + 1, c) : l.end,
            !0
          );
      }),
      dv(!1),
      (Cp = 0),
      i.forEach(function (l) {
        return l && l.render && l.render(-1);
      }),
      Ve.forEach(function (l) {
        Cn(l) &&
          (l.smooth &&
            requestAnimationFrame(function () {
              return (l.target.style.scrollBehavior = "smooth");
            }),
          l.rec && l(l.rec));
      }),
      Ab(sm, 1),
      rf.pause(),
      hl++,
      (Un = 2),
      qi(2),
      Ge.forEach(function (l) {
        return Cn(l.vars.onRefresh) && l.vars.onRefresh(l);
      }),
      (Un = Re.isRefreshing = !1),
      gl("refresh");
  },
  Np = 0,
  Zu = 1,
  Bo,
  qi = function (n) {
    if (n === 2 || (!Un && !Do)) {
      (Re.isUpdating = !0), Bo && Bo.update(0);
      var r = Ge.length,
        i = Tn(),
        l = i - Wh >= 50,
        c = r && Ge[0].scroll();
      if (
        ((Zu = Np > c ? -1 : 1),
        Un || (Np = c),
        l &&
          (Xa && !gf && i - Xa > 200 && ((Xa = 0), gl("scrollEnd")),
          (So = Wh),
          (Wh = i)),
        Zu < 0)
      ) {
        for (Hn = r; Hn-- > 0; ) Ge[Hn] && Ge[Hn].update(0, l);
        Zu = 1;
      } else for (Hn = 0; Hn < r; Hn++) Ge[Hn] && Ge[Hn].update(0, l);
      Re.isUpdating = !1;
    }
    Io = 0;
  },
  Rp = [
    _b,
    Sb,
    um,
    cm,
    Ba + Uo,
    Ba + ko,
    Ba + Ho,
    Ba + Lo,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  Qu = Rp.concat([
    fl,
    dl,
    "boxSizing",
    "max" + Ss,
    "max" + fm,
    "position",
    Ba,
    It,
    It + Ho,
    It + ko,
    It + Uo,
    It + Lo,
  ]),
  q5 = function (n, r, i) {
    gs(i);
    var l = n._gsap;
    if (l.spacerIsNative) gs(l.spacerState);
    else if (n._gsap.swappedIn) {
      var c = r.parentNode;
      c && (c.insertBefore(n, r), c.removeChild(r));
    }
    n._gsap.swappedIn = !1;
  },
  Ih = function (n, r, i, l) {
    if (!n._gsap.swappedIn) {
      for (var c = Rp.length, f = r.style, h = n.style, p; c--; )
        (p = Rp[c]), (f[p] = i[p]);
      (f.position = i.position === "absolute" ? "absolute" : "relative"),
        i.display === "inline" && (f.display = "inline-block"),
        (h[um] = h[cm] = "auto"),
        (f.flexBasis = i.flexBasis || "auto"),
        (f.overflow = "visible"),
        (f.boxSizing = "border-box"),
        (f[fl] = lf(n, Bn) + sn),
        (f[dl] = lf(n, on) + sn),
        (f[It] = h[Ba] = h[Sb] = h[_b] = "0"),
        gs(l),
        (h[fl] = h["max" + Ss] = i[fl]),
        (h[dl] = h["max" + fm] = i[dl]),
        (h[It] = i[It]),
        n.parentNode !== r &&
          (n.parentNode.insertBefore(r, n), r.appendChild(n)),
        (n._gsap.swappedIn = !0);
    }
  },
  X5 = /([A-Z])/g,
  gs = function (n) {
    if (n) {
      var r = n.t.style,
        i = n.length,
        l = 0,
        c,
        f;
      for ((n.t._gsap || ye.core.getCache(n.t)).uncache = 1; l < i; l += 2)
        (f = n[l + 1]),
          (c = n[l]),
          f
            ? (r[c] = f)
            : r[c] && r.removeProperty(c.replace(X5, "-$1").toLowerCase());
    }
  },
  zu = function (n) {
    for (var r = Qu.length, i = n.style, l = [], c = 0; c < r; c++)
      l.push(Qu[c], i[Qu[c]]);
    return (l.t = n), l;
  },
  V5 = function (n, r, i) {
    for (var l = [], c = n.length, f = i ? 8 : 0, h; f < c; f += 2)
      (h = n[f]), l.push(h, h in r ? r[h] : n[f + 1]);
    return (l.t = n.t), l;
  },
  Pu = { left: 0, top: 0 },
  hv = function (n, r, i, l, c, f, h, p, m, g, v, b, _, w) {
    Cn(n) && (n = n(p)),
      ma(n) &&
        n.substr(0, 3) === "max" &&
        (n = b + (n.charAt(4) === "=" ? Xu("0" + n.substr(3), i) : 0));
    var S = _ ? _.time() : 0,
      E,
      C,
      A;
    if ((_ && _.seek(0), isNaN(n) || (n = +n), Eo(n)))
      _ &&
        (n = ye.utils.mapRange(
          _.scrollTrigger.start,
          _.scrollTrigger.end,
          0,
          b,
          n
        )),
        h && Vu(h, i, l, !0);
    else {
      Cn(r) && (r = r(p));
      var R = (n || "0").split(" "),
        D,
        H,
        G,
        z;
      (A = Wn(r, p) || it),
        (D = Gi(A) || {}),
        (!D || (!D.left && !D.top)) &&
          Ga(A).display === "none" &&
          ((z = A.style.display),
          (A.style.display = "block"),
          (D = Gi(A)),
          z ? (A.style.display = z) : A.style.removeProperty("display")),
        (H = Xu(R[0], D[l.d])),
        (G = Xu(R[1] || "0", i)),
        (n = D[l.p] - m[l.p] - g + H + c - G),
        h && Vu(h, G, l, i - G < 20 || (h._isStart && G > 20)),
        (i -= i - G);
    }
    if ((w && ((p[w] = n || -0.001), n < 0 && (n = 0)), f)) {
      var L = n + i,
        X = f._isStart;
      (E = "scroll" + l.d2),
        Vu(
          f,
          L,
          l,
          (X && L > 20) ||
            (!X && (v ? Math.max(it[E], xa[E]) : f.parentNode[E]) <= L + 1)
        ),
        v &&
          ((m = Gi(h)),
          v && (f.style[l.op.p] = m[l.op.p] - l.op.m - f._offset + sn));
    }
    return (
      _ &&
        A &&
        ((E = Gi(A)),
        _.seek(b),
        (C = Gi(A)),
        (_._caScrollDist = E[l.p] - C[l.p]),
        (n = (n / _._caScrollDist) * b)),
      _ && _.seek(S),
      _ ? n : Math.round(n)
    );
  },
  Z5 = /(webkit|moz|length|cssText|inset)/i,
  pv = function (n, r, i, l) {
    if (n.parentNode !== r) {
      var c = n.style,
        f,
        h;
      if (r === it) {
        (n._stOrig = c.cssText), (h = Ga(n));
        for (f in h)
          !+f &&
            !Z5.test(f) &&
            h[f] &&
            typeof c[f] == "string" &&
            f !== "0" &&
            (c[f] = h[f]);
        (c.top = i), (c.left = l);
      } else c.cssText = n._stOrig;
      (ye.core.getCache(n).uncache = 1), r.appendChild(n);
    }
  },
  Rb = function (n, r, i) {
    var l = r,
      c = l;
    return function (f) {
      var h = Math.round(n());
      return (
        h !== l &&
          h !== c &&
          Math.abs(h - l) > 3 &&
          Math.abs(h - c) > 3 &&
          ((f = h), i && i()),
        (c = l),
        (l = Math.round(f)),
        l
      );
    };
  },
  ju = function (n, r, i) {
    var l = {};
    (l[r.p] = "+=" + i), ye.set(n, l);
  },
  mv = function (n, r) {
    var i = Mr(n, r),
      l = "_scroll" + r.p2,
      c = function f(h, p, m, g, v) {
        var b = f.tween,
          _ = p.onComplete,
          w = {};
        m = m || i();
        var S = Rb(i, m, function () {
          b.kill(), (f.tween = 0);
        });
        return (
          (v = (g && v) || 0),
          (g = g || h - m),
          b && b.kill(),
          (p[l] = h),
          (p.inherit = !1),
          (p.modifiers = w),
          (w[l] = function () {
            return S(m + g * b.ratio + v * b.ratio * b.ratio);
          }),
          (p.onUpdate = function () {
            Ve.cache++, f.tween && qi();
          }),
          (p.onComplete = function () {
            (f.tween = 0), _ && _.call(b);
          }),
          (b = f.tween = ye.to(n, p)),
          b
        );
      };
    return (
      (n[l] = i),
      (i.wheelHandler = function () {
        return c.tween && c.tween.kill() && (c.tween = 0);
      }),
      hn(n, "wheel", i.wheelHandler),
      Re.isTouch && hn(n, "touchmove", i.wheelHandler),
      c
    );
  },
  Re = (function () {
    function s(r, i) {
      rs ||
        s.register(ye) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Ep(this),
        this.init(r, i);
    }
    var n = s.prototype;
    return (
      (n.init = function (i, l) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !wo)
        ) {
          this.update = this.refresh = this.kill = di;
          return;
        }
        i = ov(ma(i) || Eo(i) || i.nodeType ? { trigger: i } : i, Ou);
        var c = i,
          f = c.onUpdate,
          h = c.toggleClass,
          p = c.id,
          m = c.onToggle,
          g = c.onRefresh,
          v = c.scrub,
          b = c.trigger,
          _ = c.pin,
          w = c.pinSpacing,
          S = c.invalidateOnRefresh,
          E = c.anticipatePin,
          C = c.onScrubComplete,
          A = c.onSnapComplete,
          R = c.once,
          D = c.snap,
          H = c.pinReparent,
          G = c.pinSpacer,
          z = c.containerAnimation,
          L = c.fastScrollEnd,
          X = c.preventOverlaps,
          F =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? Bn
              : on,
          le = !v && v !== 0,
          I = Wn(i.scroller || Xe),
          xe = ye.core.getCache(I),
          de = pl(I),
          ce =
            ("pinType" in i
              ? i.pinType
              : Ar(I, "pinType") || (de && "fixed")) === "fixed",
          U = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          Q = le && i.toggleActions.split(" "),
          te = "markers" in i ? i.markers : Ou.markers,
          he = de ? 0 : parseFloat(Ga(I)["border" + F.p2 + Ss]) || 0,
          N = this,
          O =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(N);
            },
          K = k5(I, de, F),
          ne = L5(I, de),
          ee = 0,
          se = 0,
          oe = 0,
          ue = Mr(I, F),
          ae,
          ie,
          Ce,
          be,
          re,
          pe,
          Se,
          We,
          ot,
          Z,
          St,
          Lt,
          Kt,
          et,
          Nn,
          Gn,
          wt,
          At,
          ia,
          dt,
          cn,
          un,
          tn,
          Pa,
          gt,
          Rn,
          xt,
          mn,
          Ht,
          Ea,
          Ka,
          De,
          Yn,
          nn,
          an,
          Ut,
          qn,
          On,
          Xn;
        if (
          ((N._startClamp = N._endClamp = !1),
          (N._dir = F),
          (E *= 45),
          (N.scroller = I),
          (N.scroll = z ? z.time.bind(z) : ue),
          (be = ue()),
          (N.vars = i),
          (l = l || i.animation),
          "refreshPriority" in i &&
            ((hb = 1), i.refreshPriority === -9999 && (Bo = N)),
          (xe.tweenScroll = xe.tweenScroll || {
            top: mv(I, on),
            left: mv(I, Bn),
          }),
          (N.tweenTo = ae = xe.tweenScroll[F.p]),
          (N.scrubDuration = function (fe) {
            (Yn = Eo(fe) && fe),
              Yn
                ? De
                  ? De.duration(fe)
                  : (De = ye.to(l, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: Yn,
                      paused: !0,
                      onComplete: function () {
                        return C && C(N);
                      },
                    }))
                : (De && De.progress(1).kill(), (De = 0));
          }),
          l &&
            ((l.vars.lazy = !1),
            (l._initted && !N.isReverted) ||
              (l.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                l.duration() &&
                l.render(0, !0, !0)),
            (N.animation = l.pause()),
            (l.scrollTrigger = N),
            N.scrubDuration(v),
            (Ea = 0),
            p || (p = l.vars.id)),
          D &&
            ((!al(D) || D.push) && (D = { snapTo: D }),
            "scrollBehavior" in it.style &&
              ye.set(de ? [it, xa] : I, { scrollBehavior: "auto" }),
            Ve.forEach(function (fe) {
              return (
                Cn(fe) &&
                fe.target === (de ? st.scrollingElement || xa : I) &&
                (fe.smooth = !1)
              );
            }),
            (Ce = Cn(D.snapTo)
              ? D.snapTo
              : D.snapTo === "labels"
              ? U5(l)
              : D.snapTo === "labelsDirectional"
              ? B5(l)
              : D.directional !== !1
              ? function (fe, ze) {
                  return dm(D.snapTo)(fe, Tn() - se < 500 ? 0 : ze.direction);
                }
              : ye.utils.snap(D.snapTo)),
            (nn = D.duration || { min: 0.1, max: 2 }),
            (nn = al(nn) ? jo(nn.min, nn.max) : jo(nn, nn)),
            (an = ye
              .delayedCall(D.delay || Yn / 2 || 0.1, function () {
                var fe = ue(),
                  ze = Tn() - se < 500,
                  Te = ae.tween;
                if (
                  (ze || Math.abs(N.getVelocity()) < 10) &&
                  !Te &&
                  !gf &&
                  ee !== fe
                ) {
                  var Oe = (fe - pe) / et,
                    Bt = l && !le ? l.totalProgress() : Oe,
                    Ye = ze ? 0 : ((Bt - Ka) / (Tn() - So)) * 1e3 || 0,
                    Tt = ye.utils.clamp(-Oe, 1 - Oe, (as(Ye / 2) * Ye) / 0.185),
                    vt = Oe + (D.inertia === !1 ? 0 : Tt),
                    He,
                    Ue,
                    $e = D,
                    Mn = $e.onStart,
                    yt = $e.onInterrupt,
                    zn = $e.onComplete;
                  if (
                    ((He = Ce(vt, N)),
                    Eo(He) || (He = vt),
                    (Ue = Math.max(0, Math.round(pe + He * et))),
                    fe <= Se && fe >= pe && Ue !== fe)
                  ) {
                    if (Te && !Te._initted && Te.data <= as(Ue - fe)) return;
                    D.inertia === !1 && (Tt = He - Oe),
                      ae(
                        Ue,
                        {
                          duration: nn(
                            as(
                              (Math.max(as(vt - Bt), as(He - Bt)) * 0.185) /
                                Ye /
                                0.05 || 0
                            )
                          ),
                          ease: D.ease || "power3",
                          data: as(Ue - fe),
                          onInterrupt: function () {
                            return an.restart(!0) && yt && ns(N, yt);
                          },
                          onComplete: function () {
                            N.update(),
                              (ee = ue()),
                              l &&
                                !le &&
                                (De
                                  ? De.resetTo(
                                      "totalProgress",
                                      He,
                                      l._tTime / l._tDur
                                    )
                                  : l.progress(He)),
                              (Ea = Ka =
                                l && !le ? l.totalProgress() : N.progress),
                              A && A(N),
                              zn && ns(N, zn);
                          },
                        },
                        fe,
                        Tt * et,
                        Ue - fe - Tt * et
                      ),
                      Mn && ns(N, Mn, ae.tween);
                  }
                } else N.isActive && ee !== fe && an.restart(!0);
              })
              .pause())),
          p && (Ap[p] = N),
          (b = N.trigger = Wn(b || (_ !== !0 && _))),
          (Xn = b && b._gsap && b._gsap.stRevert),
          Xn && (Xn = Xn(N)),
          (_ = _ === !0 ? b : Wn(_)),
          ma(h) && (h = { targets: b, className: h }),
          _ &&
            (w === !1 ||
              w === Ba ||
              (w =
                !w &&
                _.parentNode &&
                _.parentNode.style &&
                Ga(_.parentNode).display === "flex"
                  ? !1
                  : It),
            (N.pin = _),
            (ie = ye.core.getCache(_)),
            ie.spacer
              ? (Nn = ie.pinState)
              : (G &&
                  ((G = Wn(G)),
                  G && !G.nodeType && (G = G.current || G.nativeElement),
                  (ie.spacerIsNative = !!G),
                  G && (ie.spacerState = zu(G))),
                (ie.spacer = At = G || st.createElement("div")),
                At.classList.add("pin-spacer"),
                p && At.classList.add("pin-spacer-" + p),
                (ie.pinState = Nn = zu(_))),
            i.force3D !== !1 && ye.set(_, { force3D: !0 }),
            (N.spacer = At = ie.spacer),
            (Ht = Ga(_)),
            (Pa = Ht[w + F.os2]),
            (dt = ye.getProperty(_)),
            (cn = ye.quickSetter(_, F.a, sn)),
            Ih(_, At, Ht),
            (wt = zu(_))),
          te)
        ) {
          (Lt = al(te) ? ov(te, cv) : cv),
            (Z = Mu("scroller-start", p, I, F, Lt, 0)),
            (St = Mu("scroller-end", p, I, F, Lt, 0, Z)),
            (ia = Z["offset" + F.op.d2]);
          var ni = Wn(Ar(I, "content") || I);
          (We = this.markerStart = Mu("start", p, ni, F, Lt, ia, 0, z)),
            (ot = this.markerEnd = Mu("end", p, ni, F, Lt, ia, 0, z)),
            z && (On = ye.quickSetter([We, ot], F.a, sn)),
            !ce &&
              !(gi.length && Ar(I, "fixedMarkers") === !0) &&
              (H5(de ? it : I),
              ye.set([Z, St], { force3D: !0 }),
              (Rn = ye.quickSetter(Z, F.a, sn)),
              (mn = ye.quickSetter(St, F.a, sn)));
        }
        if (z) {
          var Me = z.vars.onUpdate,
            we = z.vars.onUpdateParams;
          z.eventCallback("onUpdate", function () {
            N.update(0, 0, 1), Me && Me.apply(z, we || []);
          });
        }
        if (
          ((N.previous = function () {
            return Ge[Ge.indexOf(N) - 1];
          }),
          (N.next = function () {
            return Ge[Ge.indexOf(N) + 1];
          }),
          (N.revert = function (fe, ze) {
            if (!ze) return N.kill(!0);
            var Te = fe !== !1 || !N.enabled,
              Oe = wn;
            Te !== N.isReverted &&
              (Te &&
                ((Ut = Math.max(ue(), N.scroll.rec || 0)),
                (oe = N.progress),
                (qn = l && l.progress())),
              We &&
                [We, ot, Z, St].forEach(function (Bt) {
                  return (Bt.style.display = Te ? "none" : "block");
                }),
              Te && ((wn = N), N.update(Te)),
              _ &&
                (!H || !N.isActive) &&
                (Te ? q5(_, At, Nn) : Ih(_, At, Ga(_), gt)),
              Te || N.update(Te),
              (wn = Oe),
              (N.isReverted = Te));
          }),
          (N.refresh = function (fe, ze, Te, Oe) {
            if (!((wn || !N.enabled) && !ze)) {
              if (_ && fe && Xa) {
                hn(s, "scrollEnd", Tb);
                return;
              }
              !Un && O && O(N),
                (wn = N),
                ae.tween && !Te && (ae.tween.kill(), (ae.tween = 0)),
                De && De.pause(),
                S &&
                  l &&
                  (l.revert({ kill: !1 }).invalidate(),
                  l.getChildren
                    ? l.getChildren(!0, !0, !1).forEach(function (ri) {
                        return ri.vars.immediateRender && ri.render(0, !0, !0);
                      })
                    : l.vars.immediateRender && l.render(0, !0, !0)),
                N.isReverted || N.revert(!0, !0),
                (N._subPinOffset = !1);
              var Bt = K(),
                Ye = ne(),
                Tt = z ? z.duration() : mi(I, F),
                vt = et <= 0.01 || !et,
                He = 0,
                Ue = Oe || 0,
                $e = al(Te) ? Te.end : i.end,
                Mn = i.endTrigger || b,
                yt = al(Te)
                  ? Te.start
                  : i.start || (i.start === 0 || !b ? 0 : _ ? "0 0" : "0 100%"),
                zn = (N.pinnedContainer =
                  i.pinnedContainer && Wn(i.pinnedContainer, N)),
                ra = (b && Math.max(0, Ge.indexOf(N))) || 0,
                Nt = ra,
                Xt,
                Rt,
                Vn,
                ai,
                Ot,
                qe,
                la,
                _l,
                ii,
                Ca,
                Aa,
                Pi,
                Dr;
              for (
                te &&
                al(Te) &&
                ((Pi = ye.getProperty(Z, F.p)), (Dr = ye.getProperty(St, F.p)));
                Nt-- > 0;

              )
                (qe = Ge[Nt]),
                  qe.end || qe.refresh(0, 1) || (wn = N),
                  (la = qe.pin),
                  la &&
                    (la === b || la === _ || la === zn) &&
                    !qe.isReverted &&
                    (Ca || (Ca = []), Ca.unshift(qe), qe.revert(!0, !0)),
                  qe !== Ge[Nt] && (ra--, Nt--);
              for (
                Cn(yt) && (yt = yt(N)),
                  yt = iv(yt, "start", N),
                  pe =
                    hv(
                      yt,
                      b,
                      Bt,
                      F,
                      ue(),
                      We,
                      Z,
                      N,
                      Ye,
                      he,
                      ce,
                      Tt,
                      z,
                      N._startClamp && "_startClamp"
                    ) || (_ ? -0.001 : 0),
                  Cn($e) && ($e = $e(N)),
                  ma($e) &&
                    !$e.indexOf("+=") &&
                    (~$e.indexOf(" ")
                      ? ($e = (ma(yt) ? yt.split(" ")[0] : "") + $e)
                      : ((He = Xu($e.substr(2), Bt)),
                        ($e = ma(yt)
                          ? yt
                          : (z
                              ? ye.utils.mapRange(
                                  0,
                                  z.duration(),
                                  z.scrollTrigger.start,
                                  z.scrollTrigger.end,
                                  pe
                                )
                              : pe) + He),
                        (Mn = b))),
                  $e = iv($e, "end", N),
                  Se =
                    Math.max(
                      pe,
                      hv(
                        $e || (Mn ? "100% 0" : Tt),
                        Mn,
                        Bt,
                        F,
                        ue() + He,
                        ot,
                        St,
                        N,
                        Ye,
                        he,
                        ce,
                        Tt,
                        z,
                        N._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  He = 0,
                  Nt = ra;
                Nt--;

              )
                (qe = Ge[Nt] || {}),
                  (la = qe.pin),
                  la &&
                    qe.start - qe._pinPush <= pe &&
                    !z &&
                    qe.end > 0 &&
                    ((Xt =
                      qe.end -
                      (N._startClamp ? Math.max(0, qe.start) : qe.start)),
                    ((la === b && qe.start - qe._pinPush < pe) || la === zn) &&
                      isNaN(yt) &&
                      (He += Xt * (1 - qe.progress)),
                    la === _ && (Ue += Xt));
              if (
                ((pe += He),
                (Se += He),
                N._startClamp && (N._startClamp += He),
                N._endClamp &&
                  !Un &&
                  ((N._endClamp = Se || -0.001), (Se = Math.min(Se, mi(I, F)))),
                (et = Se - pe || ((pe -= 0.01) && 0.001)),
                vt &&
                  (oe = ye.utils.clamp(0, 1, ye.utils.normalize(pe, Se, Ut))),
                (N._pinPush = Ue),
                We &&
                  He &&
                  ((Xt = {}),
                  (Xt[F.a] = "+=" + He),
                  zn && (Xt[F.p] = "-=" + ue()),
                  ye.set([We, ot], Xt)),
                _ && !(Cp && N.end >= mi(I, F)))
              )
                (Xt = Ga(_)),
                  (ai = F === on),
                  (Vn = ue()),
                  (un = parseFloat(dt(F.a)) + Ue),
                  !Tt &&
                    Se > 1 &&
                    ((Aa = (de ? st.scrollingElement || xa : I).style),
                    (Aa = {
                      style: Aa,
                      value: Aa["overflow" + F.a.toUpperCase()],
                    }),
                    de &&
                      Ga(it)["overflow" + F.a.toUpperCase()] !== "scroll" &&
                      (Aa.style["overflow" + F.a.toUpperCase()] = "scroll")),
                  Ih(_, At, Xt),
                  (wt = zu(_)),
                  (Rt = Gi(_, !0)),
                  (_l = ce && Mr(I, ai ? Bn : on)()),
                  w
                    ? ((gt = [w + F.os2, et + Ue + sn]),
                      (gt.t = At),
                      (Nt = w === It ? lf(_, F) + et + Ue : 0),
                      Nt &&
                        (gt.push(F.d, Nt + sn),
                        At.style.flexBasis !== "auto" &&
                          (At.style.flexBasis = Nt + sn)),
                      gs(gt),
                      zn &&
                        Ge.forEach(function (ri) {
                          ri.pin === zn &&
                            ri.vars.pinSpacing !== !1 &&
                            (ri._subPinOffset = !0);
                        }),
                      ce && ue(Ut))
                    : ((Nt = lf(_, F)),
                      Nt &&
                        At.style.flexBasis !== "auto" &&
                        (At.style.flexBasis = Nt + sn)),
                  ce &&
                    ((Ot = {
                      top: Rt.top + (ai ? Vn - pe : _l) + sn,
                      left: Rt.left + (ai ? _l : Vn - pe) + sn,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (Ot[fl] = Ot["max" + Ss] = Math.ceil(Rt.width) + sn),
                    (Ot[dl] = Ot["max" + fm] = Math.ceil(Rt.height) + sn),
                    (Ot[Ba] =
                      Ot[Ba + Ho] =
                      Ot[Ba + ko] =
                      Ot[Ba + Uo] =
                      Ot[Ba + Lo] =
                        "0"),
                    (Ot[It] = Xt[It]),
                    (Ot[It + Ho] = Xt[It + Ho]),
                    (Ot[It + ko] = Xt[It + ko]),
                    (Ot[It + Uo] = Xt[It + Uo]),
                    (Ot[It + Lo] = Xt[It + Lo]),
                    (Gn = V5(Nn, Ot, H)),
                    Un && ue(0)),
                  l
                    ? ((ii = l._initted),
                      Fh(1),
                      l.render(l.duration(), !0, !0),
                      (tn = dt(F.a) - un + et + Ue),
                      (xt = Math.abs(et - tn) > 1),
                      ce && xt && Gn.splice(Gn.length - 2, 2),
                      l.render(0, !0, !0),
                      ii || l.invalidate(!0),
                      l.parent || l.totalTime(l.totalTime()),
                      Fh(0))
                    : (tn = et),
                  Aa &&
                    (Aa.value
                      ? (Aa.style["overflow" + F.a.toUpperCase()] = Aa.value)
                      : Aa.style.removeProperty("overflow-" + F.a));
              else if (b && ue() && !z)
                for (Rt = b.parentNode; Rt && Rt !== it; )
                  Rt._pinOffset &&
                    ((pe -= Rt._pinOffset), (Se -= Rt._pinOffset)),
                    (Rt = Rt.parentNode);
              Ca &&
                Ca.forEach(function (ri) {
                  return ri.revert(!1, !0);
                }),
                (N.start = pe),
                (N.end = Se),
                (be = re = Un ? Ut : ue()),
                !z && !Un && (be < Ut && ue(Ut), (N.scroll.rec = 0)),
                N.revert(!1, !0),
                (se = Tn()),
                an && ((ee = -1), an.restart(!0)),
                (wn = 0),
                l &&
                  le &&
                  (l._initted || qn) &&
                  l.progress() !== qn &&
                  l.progress(qn || 0, !0).render(l.time(), !0, !0),
                (vt || oe !== N.progress || z || S || (l && !l._initted)) &&
                  (l &&
                    !le &&
                    (l._initted || oe || l.vars.immediateRender !== !1) &&
                    l.totalProgress(
                      z && pe < -0.001 && !oe
                        ? ye.utils.normalize(pe, Se, 0)
                        : oe,
                      !0
                    ),
                  (N.progress = vt || (be - pe) / et === oe ? 0 : oe)),
                _ && w && (At._pinOffset = Math.round(N.progress * tn)),
                De && De.invalidate(),
                isNaN(Pi) ||
                  ((Pi -= ye.getProperty(Z, F.p)),
                  (Dr -= ye.getProperty(St, F.p)),
                  ju(Z, F, Pi),
                  ju(We, F, Pi - (Oe || 0)),
                  ju(St, F, Dr),
                  ju(ot, F, Dr - (Oe || 0))),
                vt && !Un && N.update(),
                g && !Un && !Kt && ((Kt = !0), g(N), (Kt = !1));
            }
          }),
          (N.getVelocity = function () {
            return ((ue() - re) / (Tn() - So)) * 1e3 || 0;
          }),
          (N.endAnimation = function () {
            vo(N.callbackAnimation),
              l &&
                (De
                  ? De.progress(1)
                  : l.paused()
                  ? le || vo(l, N.direction < 0, 1)
                  : vo(l, l.reversed()));
          }),
          (N.labelToScroll = function (fe) {
            return (
              (l &&
                l.labels &&
                (pe || N.refresh() || pe) +
                  (l.labels[fe] / l.duration()) * et) ||
              0
            );
          }),
          (N.getTrailing = function (fe) {
            var ze = Ge.indexOf(N),
              Te =
                N.direction > 0 ? Ge.slice(0, ze).reverse() : Ge.slice(ze + 1);
            return (
              ma(fe)
                ? Te.filter(function (Oe) {
                    return Oe.vars.preventOverlaps === fe;
                  })
                : Te
            ).filter(function (Oe) {
              return N.direction > 0 ? Oe.end <= pe : Oe.start >= Se;
            });
          }),
          (N.update = function (fe, ze, Te) {
            if (!(z && !Te && !fe)) {
              var Oe = Un === !0 ? Ut : N.scroll(),
                Bt = fe ? 0 : (Oe - pe) / et,
                Ye = Bt < 0 ? 0 : Bt > 1 ? 1 : Bt || 0,
                Tt = N.progress,
                vt,
                He,
                Ue,
                $e,
                Mn,
                yt,
                zn,
                ra;
              if (
                (ze &&
                  ((re = be),
                  (be = z ? ue() : Oe),
                  D && ((Ka = Ea), (Ea = l && !le ? l.totalProgress() : Ye))),
                E &&
                  _ &&
                  !wn &&
                  !Cu &&
                  Xa &&
                  (!Ye && pe < Oe + ((Oe - re) / (Tn() - So)) * E
                    ? (Ye = 1e-4)
                    : Ye === 1 &&
                      Se > Oe + ((Oe - re) / (Tn() - So)) * E &&
                      (Ye = 0.9999)),
                Ye !== Tt && N.enabled)
              ) {
                if (
                  ((vt = N.isActive = !!Ye && Ye < 1),
                  (He = !!Tt && Tt < 1),
                  (yt = vt !== He),
                  (Mn = yt || !!Ye != !!Tt),
                  (N.direction = Ye > Tt ? 1 : -1),
                  (N.progress = Ye),
                  Mn &&
                    !wn &&
                    ((Ue = Ye && !Tt ? 0 : Ye === 1 ? 1 : Tt === 1 ? 2 : 3),
                    le &&
                      (($e =
                        (!yt && Q[Ue + 1] !== "none" && Q[Ue + 1]) || Q[Ue]),
                      (ra =
                        l &&
                        ($e === "complete" || $e === "reset" || $e in l)))),
                  X &&
                    (yt || ra) &&
                    (ra || v || !l) &&
                    (Cn(X)
                      ? X(N)
                      : N.getTrailing(X).forEach(function (Vn) {
                          return Vn.endAnimation();
                        })),
                  le ||
                    (De && !wn && !Cu
                      ? (De._dp._time - De._start !== De._time &&
                          De.render(De._dp._time - De._start),
                        De.resetTo
                          ? De.resetTo("totalProgress", Ye, l._tTime / l._tDur)
                          : ((De.vars.totalProgress = Ye),
                            De.invalidate().restart()))
                      : l && l.totalProgress(Ye, !!(wn && (se || fe)))),
                  _)
                ) {
                  if ((fe && w && (At.style[w + F.os2] = Pa), !ce))
                    cn(To(un + tn * Ye));
                  else if (Mn) {
                    if (
                      ((zn =
                        !fe && Ye > Tt && Se + 1 > Oe && Oe + 1 >= mi(I, F)),
                      H)
                    )
                      if (!fe && (vt || zn)) {
                        var Nt = Gi(_, !0),
                          Xt = Oe - pe;
                        pv(
                          _,
                          it,
                          Nt.top + (F === on ? Xt : 0) + sn,
                          Nt.left + (F === on ? 0 : Xt) + sn
                        );
                      } else pv(_, At);
                    gs(vt || zn ? Gn : wt),
                      (xt && Ye < 1 && vt) ||
                        cn(un + (Ye === 1 && !zn ? tn : 0));
                  }
                }
                D && !ae.tween && !wn && !Cu && an.restart(!0),
                  h &&
                    (yt || (R && Ye && (Ye < 1 || !Jh))) &&
                    $o(h.targets).forEach(function (Vn) {
                      return Vn.classList[vt || R ? "add" : "remove"](
                        h.className
                      );
                    }),
                  f && !le && !fe && f(N),
                  Mn && !wn
                    ? (le &&
                        (ra &&
                          ($e === "complete"
                            ? l.pause().totalProgress(1)
                            : $e === "reset"
                            ? l.restart(!0).pause()
                            : $e === "restart"
                            ? l.restart(!0)
                            : l[$e]()),
                        f && f(N)),
                      (yt || !Jh) &&
                        (m && yt && ns(N, m),
                        U[Ue] && ns(N, U[Ue]),
                        R && (Ye === 1 ? N.kill(!1, 1) : (U[Ue] = 0)),
                        yt || ((Ue = Ye === 1 ? 1 : 3), U[Ue] && ns(N, U[Ue]))),
                      L &&
                        !vt &&
                        Math.abs(N.getVelocity()) > (Eo(L) ? L : 2500) &&
                        (vo(N.callbackAnimation),
                        De
                          ? De.progress(1)
                          : vo(l, $e === "reverse" ? 1 : !Ye, 1)))
                    : le && f && !wn && f(N);
              }
              if (mn) {
                var Rt = z ? (Oe / z.duration()) * (z._caScrollDist || 0) : Oe;
                Rn(Rt + (Z._isFlipped ? 1 : 0)), mn(Rt);
              }
              On && On((-Oe / z.duration()) * (z._caScrollDist || 0));
            }
          }),
          (N.enable = function (fe, ze) {
            N.enabled ||
              ((N.enabled = !0),
              hn(I, "resize", Co),
              de || hn(I, "scroll", is),
              O && hn(s, "refreshInit", O),
              fe !== !1 && ((N.progress = oe = 0), (be = re = ee = ue())),
              ze !== !1 && N.refresh());
          }),
          (N.getTween = function (fe) {
            return fe && ae ? ae.tween : De;
          }),
          (N.setPositions = function (fe, ze, Te, Oe) {
            if (z) {
              var Bt = z.scrollTrigger,
                Ye = z.duration(),
                Tt = Bt.end - Bt.start;
              (fe = Bt.start + (Tt * fe) / Ye),
                (ze = Bt.start + (Tt * ze) / Ye);
            }
            N.refresh(
              !1,
              !1,
              {
                start: rv(fe, Te && !!N._startClamp),
                end: rv(ze, Te && !!N._endClamp),
              },
              Oe
            ),
              N.update();
          }),
          (N.adjustPinSpacing = function (fe) {
            if (gt && fe) {
              var ze = gt.indexOf(F.d) + 1;
              (gt[ze] = parseFloat(gt[ze]) + fe + sn),
                (gt[1] = parseFloat(gt[1]) + fe + sn),
                gs(gt);
            }
          }),
          (N.disable = function (fe, ze) {
            if (
              (fe !== !1 && N.revert(!0, !0),
              N.enabled &&
                ((N.enabled = N.isActive = !1),
                ze || (De && De.pause()),
                (Ut = 0),
                ie && (ie.uncache = 1),
                O && dn(s, "refreshInit", O),
                an &&
                  (an.pause(), ae.tween && ae.tween.kill() && (ae.tween = 0)),
                !de))
            ) {
              for (var Te = Ge.length; Te--; )
                if (Ge[Te].scroller === I && Ge[Te] !== N) return;
              dn(I, "resize", Co), de || dn(I, "scroll", is);
            }
          }),
          (N.kill = function (fe, ze) {
            N.disable(fe, ze), De && !ze && De.kill(), p && delete Ap[p];
            var Te = Ge.indexOf(N);
            Te >= 0 && Ge.splice(Te, 1),
              Te === Hn && Zu > 0 && Hn--,
              (Te = 0),
              Ge.forEach(function (Oe) {
                return Oe.scroller === N.scroller && (Te = 1);
              }),
              Te || Un || (N.scroll.rec = 0),
              l &&
                ((l.scrollTrigger = null),
                fe && l.revert({ kill: !1 }),
                ze || l.kill()),
              We &&
                [We, ot, Z, St].forEach(function (Oe) {
                  return Oe.parentNode && Oe.parentNode.removeChild(Oe);
                }),
              Bo === N && (Bo = 0),
              _ &&
                (ie && (ie.uncache = 1),
                (Te = 0),
                Ge.forEach(function (Oe) {
                  return Oe.pin === _ && Te++;
                }),
                Te || (ie.spacer = 0)),
              i.onKill && i.onKill(N);
          }),
          Ge.push(N),
          N.enable(!1, !1),
          Xn && Xn(N),
          l && l.add && !et)
        ) {
          var Ie = N.update;
          (N.update = function () {
            (N.update = Ie), Ve.cache++, pe || Se || N.refresh();
          }),
            ye.delayedCall(0.01, N.update),
            (et = 0.01),
            (pe = Se = 0);
        } else N.refresh();
        _ && Y5();
      }),
      (s.register = function (i) {
        return (
          rs ||
            ((ye = i || vb()),
            xb() && window.document && s.enable(),
            (rs = wo)),
          rs
        );
      }),
      (s.defaults = function (i) {
        if (i) for (var l in i) Ou[l] = i[l];
        return Ou;
      }),
      (s.disable = function (i, l) {
        (wo = 0),
          Ge.forEach(function (f) {
            return f[l ? "kill" : "disable"](i);
          }),
          dn(Xe, "wheel", is),
          dn(st, "scroll", is),
          clearInterval(Eu),
          dn(st, "touchcancel", di),
          dn(it, "touchstart", di),
          Nu(dn, st, "pointerdown,touchstart,mousedown", lv),
          Nu(dn, st, "pointerup,touchend,mouseup", sv),
          rf.kill(),
          Au(dn);
        for (var c = 0; c < Ve.length; c += 3)
          Ru(dn, Ve[c], Ve[c + 1]), Ru(dn, Ve[c], Ve[c + 2]);
      }),
      (s.enable = function () {
        if (
          ((Xe = window),
          (st = document),
          (xa = st.documentElement),
          (it = st.body),
          ye)
        ) {
          if (
            (($o = ye.utils.toArray),
            (jo = ye.utils.clamp),
            (Ep = ye.core.context || di),
            (Fh = ye.core.suppressOverwrites || di),
            (sm = Xe.history.scrollRestoration || "auto"),
            (Np = Xe.pageYOffset || 0),
            ye.core.globals("ScrollTrigger", s),
            it)
          ) {
            (wo = 1),
              (ms = document.createElement("div")),
              (ms.style.height = "100vh"),
              (ms.style.position = "absolute"),
              Nb(),
              D5(),
              Pt.register(ye),
              (s.isTouch = Pt.isTouch),
              (yr =
                Pt.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Tp = Pt.isTouch === 1),
              hn(Xe, "wheel", is),
              (lm = [Xe, st, xa, it]),
              ye.matchMedia
                ? ((s.matchMedia = function (g) {
                    var v = ye.matchMedia(),
                      b;
                    for (b in g) v.add(b, g[b]);
                    return v;
                  }),
                  ye.addEventListener("matchMediaInit", function () {
                    Cb(), hm();
                  }),
                  ye.addEventListener("matchMediaRevert", function () {
                    return Eb();
                  }),
                  ye.addEventListener("matchMedia", function () {
                    ll(0, 1), gl("matchMedia");
                  }),
                  ye.matchMedia().add("(orientation: portrait)", function () {
                    return $h(), $h;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              $h(),
              hn(st, "scroll", is);
            var i = it.hasAttribute("style"),
              l = it.style,
              c = l.borderTopStyle,
              f = ye.core.Animation.prototype,
              h,
              p;
            for (
              f.revert ||
                Object.defineProperty(f, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                l.borderTopStyle = "solid",
                h = Gi(it),
                on.m = Math.round(h.top + on.sc()) || 0,
                Bn.m = Math.round(h.left + Bn.sc()) || 0,
                c
                  ? (l.borderTopStyle = c)
                  : l.removeProperty("border-top-style"),
                i ||
                  (it.setAttribute("style", ""), it.removeAttribute("style")),
                Eu = setInterval(uv, 250),
                ye.delayedCall(0.5, function () {
                  return (Cu = 0);
                }),
                hn(st, "touchcancel", di),
                hn(it, "touchstart", di),
                Nu(hn, st, "pointerdown,touchstart,mousedown", lv),
                Nu(hn, st, "pointerup,touchend,mouseup", sv),
                wp = ye.utils.checkPrefix("transform"),
                Qu.push(wp),
                rs = Tn(),
                rf = ye.delayedCall(0.2, ll).pause(),
                ls = [
                  st,
                  "visibilitychange",
                  function () {
                    var g = Xe.innerWidth,
                      v = Xe.innerHeight;
                    st.hidden
                      ? ((nv = g), (av = v))
                      : (nv !== g || av !== v) && Co();
                  },
                  st,
                  "DOMContentLoaded",
                  ll,
                  Xe,
                  "load",
                  ll,
                  Xe,
                  "resize",
                  Co,
                ],
                Au(hn),
                Ge.forEach(function (g) {
                  return g.enable(0, 1);
                }),
                p = 0;
              p < Ve.length;
              p += 3
            )
              Ru(dn, Ve[p], Ve[p + 1]), Ru(dn, Ve[p], Ve[p + 2]);
          } else if (st) {
            var m = function g() {
              s.enable(), st.removeEventListener("DOMContentLoaded", g);
            };
            st.addEventListener("DOMContentLoaded", m);
          }
        }
      }),
      (s.config = function (i) {
        "limitCallbacks" in i && (Jh = !!i.limitCallbacks);
        var l = i.syncInterval;
        (l && clearInterval(Eu)) || ((Eu = l) && setInterval(uv, l)),
          "ignoreMobileResize" in i &&
            (Tp = s.isTouch === 1 && i.ignoreMobileResize),
          "autoRefreshEvents" in i &&
            (Au(dn) || Au(hn, i.autoRefreshEvents || "none"),
            (pb = (i.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (s.scrollerProxy = function (i, l) {
        var c = Wn(i),
          f = Ve.indexOf(c),
          h = pl(c);
        ~f && Ve.splice(f, h ? 6 : 2),
          l && (h ? gi.unshift(Xe, l, it, l, xa, l) : gi.unshift(c, l));
      }),
      (s.clearMatchMedia = function (i) {
        Ge.forEach(function (l) {
          return l._ctx && l._ctx.query === i && l._ctx.kill(!0, !0);
        });
      }),
      (s.isInViewport = function (i, l, c) {
        var f = (ma(i) ? Wn(i) : i).getBoundingClientRect(),
          h = f[c ? fl : dl] * l || 0;
        return c
          ? f.right - h > 0 && f.left + h < Xe.innerWidth
          : f.bottom - h > 0 && f.top + h < Xe.innerHeight;
      }),
      (s.positionInViewport = function (i, l, c) {
        ma(i) && (i = Wn(i));
        var f = i.getBoundingClientRect(),
          h = f[c ? fl : dl],
          p =
            l == null
              ? h / 2
              : l in sf
              ? sf[l] * h
              : ~l.indexOf("%")
              ? (parseFloat(l) * h) / 100
              : parseFloat(l) || 0;
        return c ? (f.left + p) / Xe.innerWidth : (f.top + p) / Xe.innerHeight;
      }),
      (s.killAll = function (i) {
        if (
          (Ge.slice(0).forEach(function (c) {
            return c.vars.id !== "ScrollSmoother" && c.kill();
          }),
          i !== !0)
        ) {
          var l = ml.killAll || [];
          (ml = {}),
            l.forEach(function (c) {
              return c();
            });
        }
      }),
      s
    );
  })();
Re.version = "3.15.0";
Re.saveStyles = function (s) {
  return s
    ? $o(s).forEach(function (n) {
        if (n && n.style) {
          var r = pa.indexOf(n);
          r >= 0 && pa.splice(r, 5),
            pa.push(
              n,
              n.style.cssText,
              n.getBBox && n.getAttribute("transform"),
              ye.core.getCache(n),
              Ep()
            );
        }
      })
    : pa;
};
Re.revert = function (s, n) {
  return hm(!s, n);
};
Re.create = function (s, n) {
  return new Re(s, n);
};
Re.refresh = function (s) {
  return s ? Co(!0) : (rs || Re.register()) && ll(!0);
};
Re.update = function (s) {
  return ++Ve.cache && qi(s === !0 ? 2 : 0);
};
Re.clearScrollMemory = Ab;
Re.maxScroll = function (s, n) {
  return mi(s, n ? Bn : on);
};
Re.getScrollFunc = function (s, n) {
  return Mr(Wn(s), n ? Bn : on);
};
Re.getById = function (s) {
  return Ap[s];
};
Re.getAll = function () {
  return Ge.filter(function (s) {
    return s.vars.id !== "ScrollSmoother";
  });
};
Re.isScrolling = function () {
  return !!Xa;
};
Re.snapDirectional = dm;
Re.addEventListener = function (s, n) {
  var r = ml[s] || (ml[s] = []);
  ~r.indexOf(n) || r.push(n);
};
Re.removeEventListener = function (s, n) {
  var r = ml[s],
    i = r && r.indexOf(n);
  i >= 0 && r.splice(i, 1);
};
Re.batch = function (s, n) {
  var r = [],
    i = {},
    l = n.interval || 0.016,
    c = n.batchMax || 1e9,
    f = function (m, g) {
      var v = [],
        b = [],
        _ = ye
          .delayedCall(l, function () {
            g(v, b), (v = []), (b = []);
          })
          .pause();
      return function (w) {
        v.length || _.restart(!0),
          v.push(w.trigger),
          b.push(w),
          c <= v.length && _.progress(1);
      };
    },
    h;
  for (h in n)
    i[h] =
      h.substr(0, 2) === "on" && Cn(n[h]) && h !== "onRefreshInit"
        ? f(h, n[h])
        : n[h];
  return (
    Cn(c) &&
      ((c = c()),
      hn(Re, "refresh", function () {
        return (c = n.batchMax());
      })),
    $o(s).forEach(function (p) {
      var m = {};
      for (h in i) m[h] = i[h];
      (m.trigger = p), r.push(Re.create(m));
    }),
    r
  );
};
var gv = function (n, r, i, l) {
    return (
      r > l ? n(l) : r < 0 && n(0),
      i > l ? (l - r) / (i - r) : i < 0 ? r / (r - i) : 1
    );
  },
  ep = function s(n, r) {
    r === !0
      ? n.style.removeProperty("touch-action")
      : (n.style.touchAction =
          r === !0
            ? "auto"
            : r
            ? "pan-" + r + (Pt.isTouch ? " pinch-zoom" : "")
            : "none"),
      n === xa && s(it, r);
  },
  Du = { auto: 1, scroll: 1 },
  Q5 = function (n) {
    var r = n.event,
      i = n.target,
      l = n.axis,
      c = (r.changedTouches ? r.changedTouches[0] : r).target,
      f = c._gsap || ye.core.getCache(c),
      h = Tn(),
      p;
    if (!f._isScrollT || h - f._isScrollT > 2e3) {
      for (
        ;
        c &&
        c !== it &&
        ((c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth) ||
          !(Du[(p = Ga(c)).overflowY] || Du[p.overflowX]));

      )
        c = c.parentNode;
      (f._isScroll =
        c &&
        c !== i &&
        !pl(c) &&
        (Du[(p = Ga(c)).overflowY] || Du[p.overflowX])),
        (f._isScrollT = h);
    }
    (f._isScroll || l === "x") && (r.stopPropagation(), (r._gsapAllow = !0));
  },
  Ob = function (n, r, i, l) {
    return Pt.create({
      target: n,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: r,
      onWheel: (l = l && Q5),
      onPress: l,
      onDrag: l,
      onScroll: l,
      onEnable: function () {
        return i && hn(st, Pt.eventTypes[0], vv, !1, !0);
      },
      onDisable: function () {
        return dn(st, Pt.eventTypes[0], vv, !0);
      },
    });
  },
  P5 = /(input|label|select|textarea)/i,
  xv,
  vv = function (n) {
    var r = P5.test(n.target.tagName);
    (r || xv) && ((n._gsapAllow = !0), (xv = r));
  },
  K5 = function (n) {
    al(n) || (n = {}),
      (n.preventDefault = n.isNormalizer = n.allowClicks = !0),
      n.type || (n.type = "wheel,touch"),
      (n.debounce = !!n.debounce),
      (n.id = n.id || "normalizer");
    var r = n,
      i = r.normalizeScrollX,
      l = r.momentum,
      c = r.allowNestedScroll,
      f = r.onRelease,
      h,
      p,
      m = Wn(n.target) || xa,
      g = ye.core.globals().ScrollSmoother,
      v = g && g.get(),
      b =
        yr &&
        ((n.content && Wn(n.content)) ||
          (v && n.content !== !1 && !v.smooth() && v.content())),
      _ = Mr(m, on),
      w = Mr(m, Bn),
      S = 1,
      E =
        (Pt.isTouch && Xe.visualViewport
          ? Xe.visualViewport.scale * Xe.visualViewport.width
          : Xe.outerWidth) / Xe.innerWidth,
      C = 0,
      A = Cn(l)
        ? function () {
            return l(h);
          }
        : function () {
            return l || 2.8;
          },
      R,
      D,
      H = Ob(m, n.type, !0, c),
      G = function () {
        return (D = !1);
      },
      z = di,
      L = di,
      X = function () {
        (p = mi(m, on)),
          (L = jo(yr ? 1 : 0, p)),
          i && (z = jo(0, mi(m, Bn))),
          (R = hl);
      },
      F = function () {
        (b._gsap.y = To(parseFloat(b._gsap.y) + _.offset) + "px"),
          (b.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(b._gsap.y) +
            ", 0, 1)"),
          (_.offset = _.cacheID = 0);
      },
      le = function () {
        if (D) {
          requestAnimationFrame(G);
          var te = To(h.deltaY / 2),
            he = L(_.v - te);
          if (b && he !== _.v + _.offset) {
            _.offset = he - _.v;
            var N = To((parseFloat(b && b._gsap.y) || 0) - _.offset);
            (b.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              N +
              ", 0, 1)"),
              (b._gsap.y = N + "px"),
              (_.cacheID = Ve.cache),
              qi();
          }
          return !0;
        }
        _.offset && F(), (D = !0);
      },
      I,
      xe,
      de,
      ce,
      U = function () {
        X(),
          I.isActive() &&
            I.vars.scrollY > p &&
            (_() > p ? I.progress(1) && _(p) : I.resetTo("scrollY", p));
      };
    return (
      b && ye.set(b, { y: "+=0" }),
      (n.ignoreCheck = function (Q) {
        return (
          (yr && Q.type === "touchmove" && le()) ||
          (S > 1.05 && Q.type !== "touchstart") ||
          h.isGesturing ||
          (Q.touches && Q.touches.length > 1)
        );
      }),
      (n.onPress = function () {
        D = !1;
        var Q = S;
        (S = To(((Xe.visualViewport && Xe.visualViewport.scale) || 1) / E)),
          I.pause(),
          Q !== S && ep(m, S > 1.01 ? !0 : i ? !1 : "x"),
          (xe = w()),
          (de = _()),
          X(),
          (R = hl);
      }),
      (n.onRelease = n.onGestureStart =
        function (Q, te) {
          if ((_.offset && F(), !te)) ce.restart(!0);
          else {
            Ve.cache++;
            var he = A(),
              N,
              O;
            i &&
              ((N = w()),
              (O = N + (he * 0.05 * -Q.velocityX) / 0.227),
              (he *= gv(w, N, O, mi(m, Bn))),
              (I.vars.scrollX = z(O))),
              (N = _()),
              (O = N + (he * 0.05 * -Q.velocityY) / 0.227),
              (he *= gv(_, N, O, mi(m, on))),
              (I.vars.scrollY = L(O)),
              I.invalidate().duration(he).play(0.01),
              ((yr && I.vars.scrollY >= p) || N >= p - 1) &&
                ye.to({}, { onUpdate: U, duration: he });
          }
          f && f(Q);
        }),
      (n.onWheel = function () {
        I._ts && I.pause(), Tn() - C > 1e3 && ((R = 0), (C = Tn()));
      }),
      (n.onChange = function (Q, te, he, N, O) {
        if (
          (hl !== R && X(),
          te &&
            i &&
            w(z(N[2] === te ? xe + (Q.startX - Q.x) : w() + te - N[1])),
          he)
        ) {
          _.offset && F();
          var K = O[2] === he,
            ne = K ? de + Q.startY - Q.y : _() + he - O[1],
            ee = L(ne);
          K && ne !== ee && (de += ee - ne), _(ee);
        }
        (he || te) && qi();
      }),
      (n.onEnable = function () {
        ep(m, i ? !1 : "x"),
          Re.addEventListener("refresh", U),
          hn(Xe, "resize", U),
          _.smooth &&
            ((_.target.style.scrollBehavior = "auto"),
            (_.smooth = w.smooth = !1)),
          H.enable();
      }),
      (n.onDisable = function () {
        ep(m, !0),
          dn(Xe, "resize", U),
          Re.removeEventListener("refresh", U),
          H.kill();
      }),
      (n.lockAxis = n.lockAxis !== !1),
      (h = new Pt(n)),
      (h.iOS = yr),
      yr && !_() && _(1),
      yr && ye.ticker.add(di),
      (ce = h._dc),
      (I = ye.to(h, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Rb(_, _(), function () {
            return I.pause();
          }),
        },
        onUpdate: qi,
        onComplete: ce.vars.onComplete,
      })),
      h
    );
  };
Re.sort = function (s) {
  if (Cn(s)) return Ge.sort(s);
  var n = Xe.pageYOffset || 0;
  return (
    Re.getAll().forEach(function (r) {
      return (r._sortY = r.trigger
        ? n + r.trigger.getBoundingClientRect().top
        : r.start + Xe.innerHeight);
    }),
    Ge.sort(
      s ||
        function (r, i) {
          return (
            (r.vars.refreshPriority || 0) * -1e6 +
            (r.vars.containerAnimation ? 1e6 : r._sortY) -
            ((i.vars.containerAnimation ? 1e6 : i._sortY) +
              (i.vars.refreshPriority || 0) * -1e6)
          );
        }
    )
  );
};
Re.observe = function (s) {
  return new Pt(s);
};
Re.normalizeScroll = function (s) {
  if (typeof s > "u") return Ln;
  if (s === !0 && Ln) return Ln.enable();
  if (s === !1) {
    Ln && Ln.kill(), (Ln = s);
    return;
  }
  var n = s instanceof Pt ? s : K5(s);
  return Ln && Ln.target === n.target && Ln.kill(), pl(n.target) && (Ln = n), n;
};
Re.core = {
  _getVelocityProp: Sp,
  _inputObserver: Ob,
  _scrollers: Ve,
  _proxies: gi,
  bridge: {
    ss: function () {
      Xa || gl("scrollStart"), (Xa = Tn());
    },
    ref: function () {
      return wn;
    },
  },
};
vb() && ye.registerPlugin(Re);
var yv = "1.3.25";
function Mb(s, n, r) {
  return Math.max(s, Math.min(n, r));
}
function F5(s, n, r) {
  return (1 - r) * s + r * n;
}
function J5(s, n, r, i) {
  return F5(s, n, 1 - Math.exp(-r * i));
}
function W5(s, n) {
  return ((s % n) + n) % n;
}
var $5 = class {
  isRunning = !1;
  value = 0;
  from = 0;
  to = 0;
  currentTime = 0;
  lerp;
  duration;
  easing;
  onUpdate;
  advance(s) {
    if (!this.isRunning) return;
    let n = !1;
    if (this.duration && this.easing) {
      this.currentTime += s;
      const r = Mb(0, this.currentTime / this.duration, 1);
      n = r >= 1;
      const i = n ? 1 : this.easing(r);
      this.value = this.from + (this.to - this.from) * i;
    } else
      this.lerp
        ? ((this.value = J5(this.value, this.to, this.lerp * 60, s)),
          Math.round(this.value) === Math.round(this.to) &&
            ((this.value = this.to), (n = !0)))
        : ((this.value = this.to), (n = !0));
    n && this.stop(), this.onUpdate?.(this.value, n);
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(s, n, { lerp: r, duration: i, easing: l, onStart: c, onUpdate: f }) {
    (this.from = this.value = s),
      (this.to = n),
      (this.lerp = r),
      (this.duration = i),
      (this.easing = l),
      (this.currentTime = 0),
      (this.isRunning = !0),
      c?.(),
      (this.onUpdate = f);
  }
};
function I5(s, n) {
  let r;
  return function (...i) {
    clearTimeout(r),
      (r = setTimeout(() => {
        (r = void 0), s.apply(this, i);
      }, n));
  };
}
var e4 = class {
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    constructor(s, n, { autoResize: r = !0, debounce: i = 250 } = {}) {
      (this.wrapper = s),
        (this.content = n),
        r &&
          ((this.debouncedResize = I5(this.resize, i)),
          this.wrapper instanceof Window
            ? window.addEventListener("resize", this.debouncedResize)
            : ((this.wrapperResizeObserver = new ResizeObserver(
                this.debouncedResize
              )),
              this.wrapperResizeObserver.observe(this.wrapper)),
          (this.contentResizeObserver = new ResizeObserver(
            this.debouncedResize
          )),
          this.contentResizeObserver.observe(this.content)),
        this.resize();
    }
    destroy() {
      this.wrapperResizeObserver?.disconnect(),
        this.contentResizeObserver?.disconnect(),
        this.wrapper === window &&
          this.debouncedResize &&
          window.removeEventListener("resize", this.debouncedResize);
    }
    resize = () => {
      this.onWrapperResize(), this.onContentResize();
    };
    onWrapperResize = () => {
      this.wrapper instanceof Window
        ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
        : ((this.width = this.wrapper.clientWidth),
          (this.height = this.wrapper.clientHeight));
    };
    onContentResize = () => {
      this.wrapper instanceof Window
        ? ((this.scrollHeight = this.content.scrollHeight),
          (this.scrollWidth = this.content.scrollWidth))
        : ((this.scrollHeight = this.wrapper.scrollHeight),
          (this.scrollWidth = this.wrapper.scrollWidth));
    };
    get limit() {
      return {
        x: this.scrollWidth - this.width,
        y: this.scrollHeight - this.height,
      };
    }
  },
  zb = class {
    events = {};
    emit(s, ...n) {
      const r = this.events[s] || [];
      for (let i = 0, l = r.length; i < l; i++) r[i]?.(...n);
    }
    on(s, n) {
      return (
        this.events[s] ? this.events[s].push(n) : (this.events[s] = [n]),
        () => {
          this.events[s] = this.events[s]?.filter((r) => n !== r);
        }
      );
    }
    off(s, n) {
      this.events[s] = this.events[s]?.filter((r) => n !== r);
    }
    destroy() {
      this.events = {};
    }
  };
const t4 = 100 / 6,
  xr = { passive: !1 };
function bv(s, n) {
  return s === 1 ? t4 : s === 2 ? n : 1;
}
var n4 = class {
  touchStart = { x: 0, y: 0 };
  lastDelta = { x: 0, y: 0 };
  window = { width: 0, height: 0 };
  emitter = new zb();
  constructor(s, n = { wheelMultiplier: 1, touchMultiplier: 1 }) {
    (this.element = s),
      (this.options = n),
      window.addEventListener("resize", this.onWindowResize),
      this.onWindowResize(),
      this.element.addEventListener("wheel", this.onWheel, xr),
      this.element.addEventListener("touchstart", this.onTouchStart, xr),
      this.element.addEventListener("touchmove", this.onTouchMove, xr),
      this.element.addEventListener("touchend", this.onTouchEnd, xr);
  }
  on(s, n) {
    return this.emitter.on(s, n);
  }
  destroy() {
    this.emitter.destroy(),
      window.removeEventListener("resize", this.onWindowResize),
      this.element.removeEventListener("wheel", this.onWheel, xr),
      this.element.removeEventListener("touchstart", this.onTouchStart, xr),
      this.element.removeEventListener("touchmove", this.onTouchMove, xr),
      this.element.removeEventListener("touchend", this.onTouchEnd, xr);
  }
  onTouchStart = (s) => {
    const { clientX: n, clientY: r } = s.targetTouches ? s.targetTouches[0] : s;
    (this.touchStart.x = n),
      (this.touchStart.y = r),
      (this.lastDelta = { x: 0, y: 0 }),
      this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: s });
  };
  onTouchMove = (s) => {
    const { clientX: n, clientY: r } = s.targetTouches ? s.targetTouches[0] : s,
      i = -(n - this.touchStart.x) * this.options.touchMultiplier,
      l = -(r - this.touchStart.y) * this.options.touchMultiplier;
    (this.touchStart.x = n),
      (this.touchStart.y = r),
      (this.lastDelta = { x: i, y: l }),
      this.emitter.emit("scroll", { deltaX: i, deltaY: l, event: s });
  };
  onTouchEnd = (s) => {
    this.emitter.emit("scroll", {
      deltaX: this.lastDelta.x,
      deltaY: this.lastDelta.y,
      event: s,
    });
  };
  onWheel = (s) => {
    let { deltaX: n, deltaY: r, deltaMode: i } = s;
    const l = bv(i, this.window.width),
      c = bv(i, this.window.height);
    (n *= l),
      (r *= c),
      (n *= this.options.wheelMultiplier),
      (r *= this.options.wheelMultiplier),
      this.emitter.emit("scroll", { deltaX: n, deltaY: r, event: s });
  };
  onWindowResize = () => {
    this.window = { width: window.innerWidth, height: window.innerHeight };
  };
};
const _v = (s) => Math.min(1, 1.001 - 2 ** (-10 * s));
var a4 = class {
  _isScrolling = !1;
  _isStopped = !1;
  _isLocked = !1;
  _preventNextNativeScrollEvent = !1;
  _resetVelocityTimeout = null;
  _rafId = null;
  _isDraggingSelection = !1;
  isTouching;
  isIos;
  time = 0;
  userData = {};
  lastVelocity = 0;
  velocity = 0;
  direction = 0;
  options;
  targetScroll;
  animatedScroll;
  animate = new $5();
  emitter = new zb();
  dimensions;
  virtualScroll;
  constructor({
    wrapper: s = window,
    content: n = document.documentElement,
    eventsTarget: r = s,
    smoothWheel: i = !0,
    syncTouch: l = !1,
    syncTouchLerp: c = 0.075,
    touchInertiaExponent: f = 1.7,
    duration: h,
    easing: p,
    lerp: m = 0.1,
    infinite: g = !1,
    orientation: v = "vertical",
    gestureOrientation: b = v === "horizontal" ? "both" : "vertical",
    touchMultiplier: _ = 1,
    wheelMultiplier: w = 1,
    autoResize: S = !0,
    prevent: E,
    virtualScroll: C,
    overscroll: A = !0,
    autoRaf: R = !1,
    anchors: D = !1,
    autoToggle: H = !1,
    allowNestedScroll: G = !1,
    __experimental__naiveDimensions: z = !1,
    naiveDimensions: L = z,
    stopInertiaOnNavigate: X = !1,
  } = {}) {
    (window.lenisVersion = yv),
      window.lenis || (window.lenis = {}),
      (window.lenis.version = yv),
      v === "horizontal" && (window.lenis.horizontal = !0),
      l === !0 && (window.lenis.touch = !0),
      (this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)),
      (!s || s === document.documentElement) && (s = window),
      typeof h == "number" && typeof p != "function"
        ? (p = _v)
        : typeof p == "function" && typeof h != "number" && (h = 1),
      (this.options = {
        wrapper: s,
        content: n,
        eventsTarget: r,
        smoothWheel: i,
        syncTouch: l,
        syncTouchLerp: c,
        touchInertiaExponent: f,
        duration: h,
        easing: p,
        lerp: m,
        infinite: g,
        gestureOrientation: b,
        orientation: v,
        touchMultiplier: _,
        wheelMultiplier: w,
        autoResize: S,
        prevent: E,
        virtualScroll: C,
        overscroll: A,
        autoRaf: R,
        anchors: D,
        autoToggle: H,
        allowNestedScroll: G,
        naiveDimensions: L,
        stopInertiaOnNavigate: X,
      }),
      (this.dimensions = new e4(s, n, { autoResize: S })),
      this.updateClassName(),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      this.options.wrapper.addEventListener("scroll", this.onNativeScroll),
      this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
        capture: !0,
      }),
      (this.options.anchors || this.options.stopInertiaOnNavigate) &&
        this.options.wrapper.addEventListener("click", this.onClick),
      this.options.wrapper.addEventListener("pointerdown", this.onPointerDown),
      (this.virtualScroll = new n4(r, {
        touchMultiplier: _,
        wheelMultiplier: w,
      })),
      this.virtualScroll.on("scroll", this.onVirtualScroll),
      this.options.autoToggle &&
        (this.checkOverflow(),
        this.rootElement.addEventListener(
          "transitionend",
          this.onTransitionEnd
        )),
      this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
  }
  destroy() {
    this.emitter.destroy(),
      this.options.wrapper.removeEventListener("scroll", this.onNativeScroll),
      this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
        capture: !0,
      }),
      this.options.wrapper.removeEventListener(
        "pointerdown",
        this.onPointerDown
      ),
      (this.options.anchors || this.options.stopInertiaOnNavigate) &&
        this.options.wrapper.removeEventListener("click", this.onClick),
      this.virtualScroll.destroy(),
      this.dimensions.destroy(),
      this.cleanUpClassName(),
      this._rafId && cancelAnimationFrame(this._rafId);
  }
  on(s, n) {
    return this.emitter.on(s, n);
  }
  off(s, n) {
    return this.emitter.off(s, n);
  }
  onScrollEnd = (s) => {
    s instanceof CustomEvent ||
      ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
        s.stopPropagation());
  };
  dispatchScrollendEvent = () => {
    this.options.wrapper.dispatchEvent(
      new CustomEvent("scrollend", {
        bubbles: this.options.wrapper === window,
        detail: { lenisScrollEnd: !0 },
      })
    );
  };
  get overflow() {
    const s = this.isHorizontal ? "overflow-x" : "overflow-y";
    return getComputedStyle(this.rootElement)[s];
  }
  checkOverflow() {
    ["hidden", "clip"].includes(this.overflow)
      ? this.internalStop()
      : this.internalStart();
  }
  onTransitionEnd = (s) => {
    s.propertyName?.includes("overflow") &&
      s.target === this.rootElement &&
      this.checkOverflow();
  };
  setScroll(s) {
    this.isHorizontal
      ? this.options.wrapper.scrollTo({ left: s, behavior: "instant" })
      : this.options.wrapper.scrollTo({ top: s, behavior: "instant" });
  }
  onClick = (s) => {
    const n = s
        .composedPath()
        .filter((i) => i instanceof HTMLAnchorElement && i.href)
        .map((i) => new URL(i.href)),
      r = new URL(window.location.href);
    if (this.options.anchors) {
      const i = n.find(
        (l) => r.host === l.host && r.pathname === l.pathname && l.hash
      );
      if (i) {
        const l =
            typeof this.options.anchors == "object" && this.options.anchors
              ? this.options.anchors
              : void 0,
          c = decodeURIComponent(i.hash);
        this.scrollTo(c, l);
        return;
      }
    }
    if (
      this.options.stopInertiaOnNavigate &&
      n.some((i) => r.host === i.host && r.pathname !== i.pathname)
    ) {
      this.reset();
      return;
    }
  };
  onPointerDown = (s) => {
    s.button === 1 && this.reset();
  };
  isTouchOnSelectionHandle(s) {
    const n = window.getSelection();
    if (!n || n.isCollapsed || n.rangeCount === 0) return !1;
    const r = s.targetTouches[0] ?? s.changedTouches[0];
    if (!r) return !1;
    const i = n.getRangeAt(0).getClientRects();
    if (i.length === 0) return !1;
    const l = i[0],
      c = i[i.length - 1],
      f = 40,
      h = Math.hypot(r.clientX - l.left, r.clientY - l.top) <= f,
      p = Math.hypot(r.clientX - c.right, r.clientY - c.bottom) <= f;
    return h || p;
  }
  onVirtualScroll = (s) => {
    if (
      typeof this.options.virtualScroll == "function" &&
      this.options.virtualScroll(s) === !1
    )
      return;
    const { deltaX: n, deltaY: r, event: i } = s;
    if (
      (this.emitter.emit("virtual-scroll", { deltaX: n, deltaY: r, event: i }),
      i.ctrlKey || i.lenisStopPropagation)
    )
      return;
    const l = i.type.includes("touch"),
      c = i.type.includes("wheel");
    if (
      l &&
      this.isIos &&
      (i.type === "touchstart" &&
        (this._isDraggingSelection = this.isTouchOnSelectionHandle(i)),
      this._isDraggingSelection)
    ) {
      i.type === "touchend" && (this._isDraggingSelection = !1);
      return;
    }
    this.isTouching = i.type === "touchstart" || i.type === "touchmove";
    const f = n === 0 && r === 0;
    if (
      this.options.syncTouch &&
      l &&
      i.type === "touchstart" &&
      f &&
      !this.isStopped &&
      !this.isLocked
    ) {
      this.reset();
      return;
    }
    const h =
      (this.options.gestureOrientation === "vertical" && r === 0) ||
      (this.options.gestureOrientation === "horizontal" && n === 0);
    if (f || h) return;
    let p = i.composedPath();
    p = p.slice(0, p.indexOf(this.rootElement));
    const m = this.options.prevent,
      g = Math.abs(n) >= Math.abs(r) ? "horizontal" : "vertical";
    if (
      p.find(
        (w) =>
          w instanceof HTMLElement &&
          ((typeof m == "function" && m?.(w)) ||
            w.hasAttribute?.("data-lenis-prevent") ||
            (g === "vertical" &&
              w.hasAttribute?.("data-lenis-prevent-vertical")) ||
            (g === "horizontal" &&
              w.hasAttribute?.("data-lenis-prevent-horizontal")) ||
            (l && w.hasAttribute?.("data-lenis-prevent-touch")) ||
            (c && w.hasAttribute?.("data-lenis-prevent-wheel")) ||
            (this.options.allowNestedScroll &&
              this.hasNestedScroll(w, { deltaX: n, deltaY: r })))
      )
    )
      return;
    if (this.isStopped || this.isLocked) {
      i.cancelable && i.preventDefault();
      return;
    }
    if (!((this.options.syncTouch && l) || (this.options.smoothWheel && c))) {
      (this.isScrolling = "native"),
        this.animate.stop(),
        (i.lenisStopPropagation = !0);
      return;
    }
    let v = r;
    this.options.gestureOrientation === "both"
      ? (v = Math.abs(r) > Math.abs(n) ? r : n)
      : this.options.gestureOrientation === "horizontal" && (v = n),
      (!this.options.overscroll ||
        this.options.infinite ||
        (this.options.wrapper !== window &&
          this.limit > 0 &&
          ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
            (this.animatedScroll === 0 && r > 0) ||
            (this.animatedScroll === this.limit && r < 0)))) &&
        (i.lenisStopPropagation = !0),
      i.cancelable && i.preventDefault();
    const b = l && this.options.syncTouch,
      _ = l && i.type === "touchend";
    _ &&
      (v =
        Math.sign(v) *
        Math.abs(this.velocity) ** this.options.touchInertiaExponent),
      this.scrollTo(this.targetScroll + v, {
        programmatic: !1,
        ...(b
          ? { lerp: _ ? this.options.syncTouchLerp : 1 }
          : {
              lerp: this.options.lerp,
              duration: this.options.duration,
              easing: this.options.easing,
            }),
      });
  };
  resize() {
    this.dimensions.resize(),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      this.emit();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  onNativeScroll = () => {
    if (
      (this._resetVelocityTimeout !== null &&
        (clearTimeout(this._resetVelocityTimeout),
        (this._resetVelocityTimeout = null)),
      this._preventNextNativeScrollEvent)
    ) {
      this._preventNextNativeScrollEvent = !1;
      return;
    }
    if (this.isScrolling === !1 || this.isScrolling === "native") {
      const s = this.animatedScroll;
      (this.animatedScroll = this.targetScroll = this.actualScroll),
        (this.lastVelocity = this.velocity),
        (this.velocity = this.animatedScroll - s),
        (this.direction = Math.sign(this.animatedScroll - s)),
        this.isStopped || (this.isScrolling = "native"),
        this.emit(),
        this.velocity !== 0 &&
          (this._resetVelocityTimeout = setTimeout(() => {
            (this.lastVelocity = this.velocity),
              (this.velocity = 0),
              (this.isScrolling = !1),
              this.emit();
          }, 400));
    }
  };
  reset() {
    (this.isLocked = !1),
      (this.isScrolling = !1),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      (this.lastVelocity = this.velocity = 0),
      this.animate.stop();
  }
  start() {
    if (this.isStopped) {
      if (this.options.autoToggle) {
        this.rootElement.style.removeProperty("overflow");
        return;
      }
      this.internalStart();
    }
  }
  internalStart() {
    this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
  }
  stop() {
    if (!this.isStopped) {
      if (this.options.autoToggle) {
        this.rootElement.style.setProperty("overflow", "clip");
        return;
      }
      this.internalStop();
    }
  }
  internalStop() {
    this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
  }
  raf = (s) => {
    const n = s - (this.time || s);
    (this.time = s),
      this.animate.advance(n * 0.001),
      this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
  };
  scrollTo(
    s,
    {
      offset: n = 0,
      immediate: r = !1,
      lock: i = !1,
      programmatic: l = !0,
      lerp: c = l ? this.options.lerp : void 0,
      duration: f = l ? this.options.duration : void 0,
      easing: h = l ? this.options.easing : void 0,
      onStart: p,
      onComplete: m,
      force: g = !1,
      userData: v,
    } = {}
  ) {
    if ((this.isStopped || this.isLocked) && !g) return;
    let b = s,
      _ = n;
    if (typeof b == "string" && ["top", "left", "start", "#"].includes(b))
      b = 0;
    else if (typeof b == "string" && ["bottom", "right", "end"].includes(b))
      b = this.limit;
    else {
      let w = null;
      if (
        (typeof b == "string"
          ? ((w = b.startsWith("#")
              ? document.getElementById(b.slice(1))
              : document.querySelector(b)),
            w ||
              (b === "#top"
                ? (b = 0)
                : console.warn("Lenis: Target not found", b)))
          : b instanceof HTMLElement && b?.nodeType && (w = b),
        w)
      ) {
        if (this.options.wrapper !== window) {
          const D = this.rootElement.getBoundingClientRect();
          _ -= this.isHorizontal ? D.left : D.top;
        }
        const S = w.getBoundingClientRect(),
          E = getComputedStyle(w),
          C = this.isHorizontal
            ? Number.parseFloat(E.scrollMarginLeft)
            : Number.parseFloat(E.scrollMarginTop),
          A = getComputedStyle(this.rootElement),
          R = this.isHorizontal
            ? Number.parseFloat(A.scrollPaddingLeft)
            : Number.parseFloat(A.scrollPaddingTop);
        b =
          (this.isHorizontal ? S.left : S.top) +
          this.animatedScroll -
          (Number.isNaN(C) ? 0 : C) -
          (Number.isNaN(R) ? 0 : R);
      }
    }
    if (typeof b == "number") {
      if (((b += _), this.options.infinite)) {
        if (l) {
          this.targetScroll = this.animatedScroll = this.scroll;
          const w = b - this.animatedScroll;
          w > this.limit / 2
            ? (b -= this.limit)
            : w < -this.limit / 2 && (b += this.limit);
        }
      } else b = Mb(0, b, this.limit);
      if (b === this.targetScroll) {
        p?.(this), m?.(this);
        return;
      }
      if (((this.userData = v ?? {}), r)) {
        (this.animatedScroll = this.targetScroll = b),
          this.setScroll(this.scroll),
          this.reset(),
          this.preventNextNativeScrollEvent(),
          this.emit(),
          m?.(this),
          (this.userData = {}),
          requestAnimationFrame(() => {
            this.dispatchScrollendEvent();
          });
        return;
      }
      l || (this.targetScroll = b),
        typeof f == "number" && typeof h != "function"
          ? (h = _v)
          : typeof h == "function" && typeof f != "number" && (f = 1),
        this.animate.fromTo(this.animatedScroll, b, {
          duration: f,
          easing: h,
          lerp: c,
          onStart: () => {
            i && (this.isLocked = !0), (this.isScrolling = "smooth"), p?.(this);
          },
          onUpdate: (w, S) => {
            (this.isScrolling = "smooth"),
              (this.lastVelocity = this.velocity),
              (this.velocity = w - this.animatedScroll),
              (this.direction = Math.sign(this.velocity)),
              (this.animatedScroll = w),
              this.setScroll(this.scroll),
              l && (this.targetScroll = w),
              S || this.emit(),
              S &&
                (this.reset(),
                this.emit(),
                m?.(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                }),
                this.preventNextNativeScrollEvent());
          },
        });
    }
  }
  preventNextNativeScrollEvent() {
    (this._preventNextNativeScrollEvent = !0),
      requestAnimationFrame(() => {
        this._preventNextNativeScrollEvent = !1;
      });
  }
  hasNestedScroll(s, { deltaX: n, deltaY: r }) {
    const i = Date.now();
    s._lenis || (s._lenis = {});
    const l = s._lenis;
    let c, f, h, p, m, g, v, b, _, w;
    if (i - (l.time ?? 0) > 2e3) {
      l.time = Date.now();
      const G = window.getComputedStyle(s);
      if (
        ((l.computedStyle = G),
        (c = ["auto", "overlay", "scroll"].includes(G.overflowX)),
        (f = ["auto", "overlay", "scroll"].includes(G.overflowY)),
        (m = ["auto"].includes(G.overscrollBehaviorX)),
        (g = ["auto"].includes(G.overscrollBehaviorY)),
        (l.hasOverflowX = c),
        (l.hasOverflowY = f),
        !(c || f))
      )
        return !1;
      (v = s.scrollWidth),
        (b = s.scrollHeight),
        (_ = s.clientWidth),
        (w = s.clientHeight),
        (h = v > _),
        (p = b > w),
        (l.isScrollableX = h),
        (l.isScrollableY = p),
        (l.scrollWidth = v),
        (l.scrollHeight = b),
        (l.clientWidth = _),
        (l.clientHeight = w),
        (l.hasOverscrollBehaviorX = m),
        (l.hasOverscrollBehaviorY = g);
    } else
      (h = l.isScrollableX),
        (p = l.isScrollableY),
        (c = l.hasOverflowX),
        (f = l.hasOverflowY),
        (v = l.scrollWidth),
        (b = l.scrollHeight),
        (_ = l.clientWidth),
        (w = l.clientHeight),
        (m = l.hasOverscrollBehaviorX),
        (g = l.hasOverscrollBehaviorY);
    if (!((c && h) || (f && p))) return !1;
    const S = Math.abs(n) >= Math.abs(r) ? "horizontal" : "vertical";
    let E, C, A, R, D, H;
    if (S === "horizontal")
      (E = Math.round(s.scrollLeft)),
        (C = v - _),
        (A = n),
        (R = c),
        (D = h),
        (H = m);
    else if (S === "vertical")
      (E = Math.round(s.scrollTop)),
        (C = b - w),
        (A = r),
        (R = f),
        (D = p),
        (H = g);
    else return !1;
    return !H && (E >= C || E <= 0) ? !0 : (A > 0 ? E < C : E > 0) && R && D;
  }
  get rootElement() {
    return this.options.wrapper === window
      ? document.documentElement
      : this.options.wrapper;
  }
  get limit() {
    return this.options.naiveDimensions
      ? this.isHorizontal
        ? this.rootElement.scrollWidth - this.rootElement.clientWidth
        : this.rootElement.scrollHeight - this.rootElement.clientHeight
      : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  get actualScroll() {
    const s = this.options.wrapper;
    return this.isHorizontal
      ? s.scrollX ?? s.scrollLeft
      : s.scrollY ?? s.scrollTop;
  }
  get scroll() {
    return this.options.infinite
      ? W5(this.animatedScroll, this.limit)
      : this.animatedScroll;
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  get isScrolling() {
    return this._isScrolling;
  }
  set isScrolling(s) {
    this._isScrolling !== s &&
      ((this._isScrolling = s), this.updateClassName());
  }
  get isStopped() {
    return this._isStopped;
  }
  set isStopped(s) {
    this._isStopped !== s && ((this._isStopped = s), this.updateClassName());
  }
  get isLocked() {
    return this._isLocked;
  }
  set isLocked(s) {
    this._isLocked !== s && ((this._isLocked = s), this.updateClassName());
  }
  get isSmooth() {
    return this.isScrolling === "smooth";
  }
  get className() {
    let s = "lenis";
    return (
      this.options.autoToggle && (s += " lenis-autoToggle"),
      this.isStopped && (s += " lenis-stopped"),
      this.isLocked && (s += " lenis-locked"),
      this.isScrolling && (s += " lenis-scrolling"),
      this.isScrolling === "smooth" && (s += " lenis-smooth"),
      s
    );
  }
  updateClassName() {
    this.cleanUpClassName(),
      this.className.split(" ").forEach((s) => {
        this.rootElement.classList.add(s);
      });
  }
  cleanUpClassName() {
    for (const s of Array.from(this.rootElement.classList))
      (s === "lenis" || s.startsWith("lenis-")) &&
        this.rootElement.classList.remove(s);
  }
};
let ec = null;
function Sv(s) {
  ec = s;
}
function xf(s = !0) {
  ec ? ec.scrollTo(0, { immediate: s }) : window.scrollTo(0, 0);
}
function i4(s) {
  ec ? ec.scrollTo(s, { immediate: !0 }) : s.scrollIntoView({ block: "start" });
}
function r4(s = 2600, n = 5e3) {
  const r = document.getElementById("splash");
  if (!r) return;
  const i = performance.now();
  document.documentElement.style.overflow = "hidden";
  const l = () => {
      const f = Math.max(0, s - (performance.now() - i));
      setTimeout(() => {
        r.classList.add("done"),
          (document.documentElement.style.overflow = ""),
          setTimeout(() => r.remove(), 900);
      }, f);
    },
    c = Promise.all([
      document.fonts?.ready ?? Promise.resolve(),
      new Promise((f) => {
        document.readyState === "complete"
          ? f()
          : window.addEventListener("load", () => f(), { once: !0 });
      }),
    ]);
  Promise.race([c, new Promise((f) => setTimeout(f, n))]).then(l);
}
const Go = "0xcb8d2f2e4c6e8d131d4c3169e4acfbd0fc2ea83b".trim(),
  Va =
    "https://dexscreener.com/robinhood/0xcb8d2f2e4c6e8d131d4c3169e4acfbd0fc2ea83b".trim(),
  wv = Go.length > 0,
  jb = `https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=${encodeURIComponent(
    Go
  )}`,
  Tv = { x: "https://x.com/BOYZ_hoodX", telegram: "https://t.me/BOYZ_hood" },
  Ev = "" + new URL("boyz-logo-5aqT02pA.png", import.meta.url).href,
  l4 = [
    { label: "HOME", to: "/" },
    { label: "THE BOYZ", to: "/characters" },
    { label: "THE HOOD", to: "/places" },
    { label: "THE GANG", to: "/gang" },
    { label: "MEDIA", to: "/media" },
  ];
function vf() {
  const [s, n] = j.useState(!1),
    [r, i] = j.useState(!1),
    l = j.useRef(null),
    c = j.useRef(null),
    f = iy(),
    { pathname: h } = Qa(),
    p = s || h !== "/";
  j.useEffect(() => {
    const g = () => n(window.scrollY > window.innerHeight * 0.55);
    return (
      g(),
      window.addEventListener("scroll", g, { passive: !0 }),
      () => window.removeEventListener("scroll", g)
    );
  }, []),
    j.useEffect(() => {
      l.current &&
        (r
          ? (Ne.set(l.current, { display: "flex" }),
            Ne.fromTo(
              l.current,
              { opacity: 0 },
              { opacity: 1, duration: 0.35, ease: "power2.out" }
            ),
            Ne.fromTo(
              c.current?.children ?? [],
              { y: 60, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.06,
                ease: "power3.out",
                delay: 0.1,
              }
            ),
            (document.documentElement.style.overflow = "hidden"))
          : (Ne.to(l.current, {
              opacity: 0,
              duration: 0.3,
              ease: "power2.in",
              onComplete: () => Ne.set(l.current, { display: "none" }),
            }),
            (document.documentElement.style.overflow = "")));
    }, [r]);
  const m = (g) => {
    i(!1), setTimeout(() => f(g), 300);
  };
  return y.jsxs(y.Fragment, {
    children: [
      y.jsxs("header", {
        "code-path": "src/components/Header.tsx:58:7",
        className: "fixed inset-x-0 top-0 z-50",
        children: [
          y.jsx("div", {
            "code-path": "src/components/Header.tsx:59:9",
            className:
              "pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/55 to-transparent",
          }),
          y.jsxs("div", {
            "code-path": "src/components/Header.tsx:60:9",
            className:
              "relative flex items-center justify-between px-5 py-4 md:px-10 md:py-6",
            children: [
              y.jsx(vl, {
                "code-path": "src/components/Header.tsx:61:11",
                to: "/",
                "aria-label": "BOYZ — home",
                children: y.jsx("img", {
                  "code-path": "src/components/Header.tsx:62:13",
                  src: Ev,
                  alt: "BOYZ",
                  className:
                    "h-9 w-auto drop-shadow-[0_2px_12px_rgba(0,0,0,.6)] md:h-11",
                  draggable: !1,
                }),
              }),
              y.jsxs("div", {
                "code-path": "src/components/Header.tsx:70:11",
                className: "flex items-center gap-3 md:gap-4",
                children: [
                  y.jsx("a", {
                    "code-path": "src/components/Header.tsx:71:13",
                    href: Va,
                    target: "_blank",
                    rel: "noreferrer",
                    className: `rounded-full bg-[var(--brand-green)] px-5 py-2.5 text-[13px] font-bold tracking-wide text-[var(--ink)] transition-all duration-500 hover:brightness-110 md:px-6 md:text-sm ${
                      p
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-3 opacity-0"
                    }`,
                    children: "VIEW CHART",
                  }),
                  y.jsxs("button", {
                    "code-path": "src/components/Header.tsx:81:13",
                    "aria-label": "Open menu",
                    onClick: () => i(!0),
                    className:
                      "group flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full transition hover:bg-white/10",
                    children: [
                      y.jsx("span", {
                        "code-path": "src/components/Header.tsx:86:15",
                        className:
                          "h-[2px] w-6 bg-white transition group-hover:w-7",
                      }),
                      y.jsx("span", {
                        "code-path": "src/components/Header.tsx:87:15",
                        className:
                          "h-[2px] w-6 bg-white transition group-hover:w-7",
                      }),
                      y.jsx("span", {
                        "code-path": "src/components/Header.tsx:88:15",
                        className:
                          "h-[2px] w-6 bg-white transition group-hover:w-7",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      y.jsxs("div", {
        "code-path": "src/components/Header.tsx:95:7",
        ref: l,
        className:
          "fixed inset-0 z-[60] hidden flex-col bg-[#070912]/97 backdrop-blur-sm",
        style: { display: "none" },
        children: [
          y.jsxs("div", {
            "code-path": "src/components/Header.tsx:100:9",
            className:
              "flex items-center justify-between px-5 py-4 md:px-10 md:py-6",
            children: [
              y.jsx("img", {
                "code-path": "src/components/Header.tsx:101:11",
                src: Ev,
                alt: "BOYZ",
                className: "h-9 w-auto md:h-11",
                draggable: !1,
              }),
              y.jsx("button", {
                "code-path": "src/components/Header.tsx:102:11",
                "aria-label": "Close menu",
                onClick: () => i(!1),
                className:
                  "flex h-11 w-11 items-center justify-center rounded-full text-3xl text-white transition hover:bg-white/10",
                children: "×",
              }),
            ],
          }),
          y.jsxs("div", {
            "code-path": "src/components/Header.tsx:110:9",
            ref: c,
            className:
              "flex flex-1 flex-col items-start justify-center gap-2 px-8 md:px-24",
            children: [
              l4.map((g) =>
                y.jsx(
                  "button",
                  {
                    "code-path": "src/components/Header.tsx:112:13",
                    onClick: () => m(g.to),
                    className:
                      "font-display text-[13vw] leading-[1.05] text-[var(--cream)] transition-colors hover:text-[var(--brand-green)] md:text-[6.5vw]",
                    children: g.label,
                  },
                  g.to
                )
              ),
              y.jsx("a", {
                "code-path": "src/components/Header.tsx:120:11",
                href: Va,
                target: "_blank",
                rel: "noreferrer",
                className:
                  "font-display text-[13vw] leading-[1.05] text-[var(--brand-green)] transition-colors hover:brightness-110 md:text-[6.5vw]",
                children: "CHART",
              }),
            ],
          }),
          y.jsx("div", {
            "code-path": "src/components/Header.tsx:129:9",
            className:
              "px-8 pb-10 text-xs tracking-widest text-white/40 md:px-24",
            children: "$BOYZ — A MEME COIN WITH NOTHING TO LOSE",
          }),
        ],
      }),
    ],
  });
}
const pm = "" + new URL("trailer-poster-D4lh7y10.jpg", import.meta.url).href,
  Db = j.createContext(() => {}),
  kb = () => j.useContext(Db);
function s4({ children: s }) {
  const [n, r] = j.useState(!1),
    i = j.useRef(null),
    l = j.useCallback(() => r(!0), []);
  return (
    j.useEffect(() => {
      n
        ? ((document.documentElement.style.overflow = "hidden"),
          i.current?.play().catch(() => {}))
        : ((document.documentElement.style.overflow = ""),
          i.current && (i.current.pause(), (i.current.currentTime = 0)));
    }, [n]),
    j.useEffect(() => {
      const c = (f) => f.key === "Escape" && r(!1);
      return (
        window.addEventListener("keydown", c),
        () => window.removeEventListener("keydown", c)
      );
    }, []),
    y.jsxs(Db.Provider, {
      "code-path": "src/components/TrailerModal.tsx:35:5",
      value: l,
      children: [
        s,
        n &&
          y.jsxs("div", {
            "code-path": "src/components/TrailerModal.tsx:38:9",
            className:
              "fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-10",
            onClick: () => r(!1),
            children: [
              y.jsx("button", {
                "code-path": "src/components/TrailerModal.tsx:42:11",
                "aria-label": "Close trailer",
                className:
                  "absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20",
                onClick: () => r(!1),
                children: "×",
              }),
              y.jsx("video", {
                "code-path": "src/components/TrailerModal.tsx:49:11",
                ref: i,
                src: "/trailer-1.mp4",
                poster: pm,
                controls: !0,
                playsInline: !0,
                className:
                  "max-h-full w-full max-w-6xl rounded-xl shadow-[0_40px_120px_rgba(0,0,0,.8)]",
                onClick: (c) => c.stopPropagation(),
              }),
            ],
          }),
      ],
    })
  );
}
const o4 =
  "" + new URL("boyz-n-the-hood-logo-CrcVxkBw.png", import.meta.url).href;
function yf({ className: s = "" }) {
  return y.jsx("img", {
    "code-path": "src/components/Wordmark.tsx:9:10",
    src: o4,
    alt: "Boyz N The Hood",
    className: s,
    draggable: !1,
  });
}
const mm = "" + new URL("crew-C4hvuhUd.jpg", import.meta.url).href,
  c4 = "" + new URL("mobile-hero-D9pHOctu.jpg", import.meta.url).href,
  Lb = "" + new URL("mobile-hero-960-oI_RD3rA.webp", import.meta.url).href,
  bf = "" + new URL("lowrider-KRon1Q6v.jpg", import.meta.url).href,
  Hb = "" + new URL("lowrider-1280-Ci1ywu0-.webp", import.meta.url).href,
  _f = "" + new URL("city-C9hi73-T.jpg", import.meta.url).href,
  Ub = "" + new URL("city-1280-D9IGhpMh.webp", import.meta.url).href;
Ne.registerPlugin(Re);
function u4() {
  return y.jsxs("section", {
    "code-path": "src/sections/HeroScroll.tsx:23:5",
    className: "bg-[var(--night)] md:hidden",
    children: [
      y.jsxs("div", {
        "code-path": "src/sections/HeroScroll.tsx:24:7",
        className: "relative h-[100svh] min-h-[620px] overflow-hidden",
        children: [
          y.jsx("img", {
            "code-path": "src/sections/HeroScroll.tsx:25:9",
            src: Lb,
            alt: "The crew on the block",
            className: "absolute inset-0 h-full w-full object-cover",
            fetchPriority: "high",
            loading: "eager",
          }),
          y.jsx("div", {
            "code-path": "src/sections/HeroScroll.tsx:32:9",
            className:
              "pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/55 to-transparent",
          }),
          y.jsx("div", {
            "code-path": "src/sections/HeroScroll.tsx:33:9",
            className:
              "pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[var(--night)]/90 to-transparent",
          }),
          y.jsx("div", {
            "code-path": "src/sections/HeroScroll.tsx:34:9",
            className: "vignette pointer-events-none absolute inset-0",
          }),
          y.jsx("div", {
            "code-path": "src/sections/HeroScroll.tsx:36:9",
            className: "absolute inset-0 flex items-center justify-center",
            children: y.jsx(yf, {
              "code-path": "src/sections/HeroScroll.tsx:37:11",
              className:
                "w-[min(70vw,390px)] drop-shadow-[0_10px_30px_rgba(0,0,0,.55)]",
            }),
          }),
          y.jsxs("div", {
            "code-path": "src/sections/HeroScroll.tsx:40:9",
            className:
              "absolute inset-x-0 bottom-[5.5%] flex items-end justify-between gap-5 px-6",
            children: [
              y.jsxs("div", {
                "code-path": "src/sections/HeroScroll.tsx:41:11",
                className:
                  "font-cond text-[13px] font-medium leading-[1.35] tracking-wide text-white/90",
                children: [
                  "ONLY ON",
                  y.jsx("br", {
                    "code-path": "src/sections/HeroScroll.tsx:43:13",
                  }),
                  y.jsx("span", {
                    "code-path": "src/sections/HeroScroll.tsx:44:13",
                    className: "text-[var(--brand-green)]",
                    children: "ROBINHOOD",
                  }),
                ],
              }),
              y.jsx("a", {
                "code-path": "src/sections/HeroScroll.tsx:46:11",
                href: Va,
                target: "_blank",
                rel: "noreferrer",
                className:
                  "rounded-full bg-[var(--brand-green)] px-5 py-2.5 text-xs font-bold tracking-wide text-[var(--ink)]",
                children: "VIEW CHART",
              }),
            ],
          }),
          y.jsxs("div", {
            "code-path": "src/sections/HeroScroll.tsx:56:9",
            className:
              "absolute inset-x-0 bottom-[1.4%] flex flex-col items-center gap-1",
            children: [
              y.jsx("span", {
                "code-path": "src/sections/HeroScroll.tsx:57:11",
                className: "text-[10px] tracking-[0.22em] text-white/55",
                children: "SCROLL FOR MORE",
              }),
              y.jsx("svg", {
                "code-path": "src/sections/HeroScroll.tsx:58:11",
                width: "22",
                height: "12",
                viewBox: "0 0 22 12",
                className: "chevron-bob",
                children: y.jsx("path", {
                  "code-path": "src/sections/HeroScroll.tsx:59:13",
                  d: "M2 2 L11 10 L20 2",
                  fill: "none",
                  stroke: "#d5fc04",
                  strokeWidth: "2.4",
                  strokeLinecap: "round",
                }),
              }),
            ],
          }),
        ],
      }),
      y.jsxs("div", {
        "code-path": "src/sections/HeroScroll.tsx:64:7",
        className: "vignette relative h-[100svh] min-h-[620px] overflow-hidden",
        children: [
          y.jsx("img", {
            "code-path": "src/sections/HeroScroll.tsx:65:9",
            src: Hb,
            alt: "Lowrider cruising at night",
            className: "absolute inset-0 h-full w-full object-cover",
            loading: "eager",
          }),
          y.jsx("div", {
            "code-path": "src/sections/HeroScroll.tsx:71:9",
            className:
              "pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--night)]/80 to-transparent",
          }),
          y.jsx("div", {
            "code-path": "src/sections/HeroScroll.tsx:72:9",
            className:
              "pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--night)]/90 to-transparent",
          }),
        ],
      }),
      y.jsxs("div", {
        "code-path": "src/sections/HeroScroll.tsx:75:7",
        className: "vignette relative h-[100svh] min-h-[620px] overflow-hidden",
        children: [
          y.jsx("img", {
            "code-path": "src/sections/HeroScroll.tsx:76:9",
            src: Ub,
            alt: "The hood from above",
            className: "absolute inset-0 h-full w-full object-cover",
            loading: "eager",
          }),
          y.jsx("div", {
            "code-path": "src/sections/HeroScroll.tsx:82:9",
            className:
              "pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--night)]/80 to-transparent",
          }),
          y.jsx("div", {
            "code-path": "src/sections/HeroScroll.tsx:83:9",
            className:
              "pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[var(--night)]/95 to-transparent",
          }),
          y.jsxs("div", {
            "code-path": "src/sections/HeroScroll.tsx:84:9",
            className:
              "absolute inset-x-0 bottom-[10%] flex flex-col items-center px-6 text-center",
            style: { textShadow: "0 2px 14px rgba(0,0,0,.65)" },
            children: [
              y.jsx("div", {
                "code-path": "src/sections/HeroScroll.tsx:85:11",
                className:
                  "text-[11px] font-semibold tracking-[0.3em] text-white/85",
                children: "A ROBINHOOD STORY",
              }),
              y.jsx("h2", {
                "code-path": "src/sections/HeroScroll.tsx:86:11",
                className:
                  "font-display mt-3 text-[13vw] leading-[0.95] text-[var(--cream)]",
                children: "BOYZ N THE HOOD",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function f4() {
  const s = j.useRef(null);
  return (
    j.useLayoutEffect(() => {
      if (window.matchMedia("(max-width: 767px)").matches) return;
      let n,
        r = !1;
      const i = Array.from(s.current?.querySelectorAll("img") ?? []);
      return (
        Promise.all(i.map((l) => l.decode().catch(() => {}))).then(() => {
          r ||
            ((n = Ne.context(() => {
              Ne.timeline({
                defaults: { ease: "none" },
                scrollTrigger: {
                  trigger: s.current,
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 1,
                  invalidateOnRefresh: !0,
                },
              })
                .fromTo(
                  "#layA",
                  { clipPath: "inset(11% 16% 21.5% 16% round 10px)" },
                  { clipPath: "inset(0% 0% 0% 0% round 0px)", duration: 0.14 },
                  0
                )
                .to(".hero-ui", { opacity: 0, y: -34, duration: 0.09 }, 0.01)
                .to(".hero-cue", { opacity: 0, duration: 0.05 }, 0.01)
                .fromTo(
                  ".hero-mark",
                  { scale: 1, opacity: 1 },
                  { scale: 1.7, opacity: 0, duration: 0.12, ease: "power1.in" },
                  0.07
                )
                .fromTo(
                  "#layA",
                  {
                    scale: 1,
                    xPercent: 0,
                    yPercent: 0,
                    transformOrigin: "46% 58%",
                  },
                  {
                    scale: 1.52,
                    xPercent: -2.5,
                    yPercent: -1.5,
                    duration: 0.3,
                  },
                  0.12
                )
                .to("#layA", { opacity: 0, duration: 0.09 }, 0.36)
                .fromTo(
                  "#layB",
                  { opacity: 0 },
                  { opacity: 1, duration: 0.09 },
                  0.36
                )
                .fromTo(
                  "#layB",
                  {
                    scale: 1.28,
                    xPercent: 3.5,
                    yPercent: 0,
                    transformOrigin: "55% 55%",
                  },
                  { scale: 1.62, xPercent: -4, yPercent: -1, duration: 0.28 },
                  0.36
                )
                .to("#layB", { opacity: 0, duration: 0.09 }, 0.57)
                .fromTo(
                  "#layC",
                  { opacity: 0 },
                  { opacity: 1, duration: 0.09 },
                  0.57
                )
                .fromTo(
                  "#layC",
                  { scale: 1.42, yPercent: 2.5, transformOrigin: "50% 50%" },
                  { scale: 1.07, yPercent: 0, duration: 0.31 },
                  0.57
                )
                .fromTo(
                  ".hero-endcard",
                  { opacity: 0, y: 56 },
                  { opacity: 1, y: 0, duration: 0.09, ease: "power2.out" },
                  0.8
                )
                .to({}, { duration: 0.11 });
            }, s)),
            Re.refresh());
        }),
        () => {
          (r = !0), n?.revert();
        }
      );
    }, []),
    y.jsxs("div", {
      "code-path": "src/sections/HeroScroll.tsx:204:5",
      id: "home",
      children: [
        y.jsx(u4, { "code-path": "src/sections/HeroScroll.tsx:205:7" }),
        y.jsx("section", {
          "code-path": "src/sections/HeroScroll.tsx:206:7",
          ref: s,
          className: "relative hidden h-[520vh] md:block",
          children: y.jsxs("div", {
            "code-path": "src/sections/HeroScroll.tsx:207:7",
            className:
              "sticky top-0 h-screen overflow-hidden bg-[var(--night)]",
            children: [
              y.jsxs("picture", {
                "code-path": "src/sections/HeroScroll.tsx:209:9",
                id: "layA",
                className: "absolute inset-0 will-change-transform",
                children: [
                  y.jsx("source", {
                    "code-path": "src/sections/HeroScroll.tsx:210:11",
                    media: "(max-width: 640px)",
                    srcSet: Lb,
                    type: "image/webp",
                  }),
                  y.jsx("source", {
                    "code-path": "src/sections/HeroScroll.tsx:211:11",
                    media: "(max-width: 640px)",
                    srcSet: c4,
                  }),
                  y.jsx("img", {
                    "code-path": "src/sections/HeroScroll.tsx:212:11",
                    src: mm,
                    alt: "The crew on the block",
                    className: "h-full w-full object-cover",
                    fetchPriority: "high",
                    loading: "eager",
                    decoding: "async",
                  }),
                ],
              }),
              y.jsxs("picture", {
                "code-path": "src/sections/HeroScroll.tsx:221:9",
                id: "layB",
                className: "absolute inset-0 opacity-0 will-change-transform",
                children: [
                  y.jsx("source", {
                    "code-path": "src/sections/HeroScroll.tsx:222:11",
                    media: "(max-width: 640px)",
                    srcSet: Hb,
                    type: "image/webp",
                  }),
                  y.jsx("img", {
                    "code-path": "src/sections/HeroScroll.tsx:223:11",
                    src: bf,
                    alt: "Lowrider cruising at night",
                    className: "h-full w-full object-cover",
                    fetchPriority: "high",
                    loading: "eager",
                    decoding: "async",
                  }),
                ],
              }),
              y.jsxs("picture", {
                "code-path": "src/sections/HeroScroll.tsx:232:9",
                id: "layC",
                className: "absolute inset-0 opacity-0 will-change-transform",
                children: [
                  y.jsx("source", {
                    "code-path": "src/sections/HeroScroll.tsx:233:11",
                    media: "(max-width: 640px)",
                    srcSet: Ub,
                    type: "image/webp",
                  }),
                  y.jsx("img", {
                    "code-path": "src/sections/HeroScroll.tsx:234:11",
                    src: _f,
                    alt: "The hood from above",
                    className: "h-full w-full object-cover",
                    fetchPriority: "high",
                    loading: "eager",
                    decoding: "async",
                  }),
                ],
              }),
              y.jsx("div", {
                "code-path": "src/sections/HeroScroll.tsx:245:9",
                className:
                  "pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/55 to-transparent",
              }),
              y.jsx("div", {
                "code-path": "src/sections/HeroScroll.tsx:246:9",
                className:
                  "pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[var(--night)]/90 to-transparent",
              }),
              y.jsx("div", {
                "code-path": "src/sections/HeroScroll.tsx:247:9",
                className: "vignette pointer-events-none absolute inset-0",
              }),
              y.jsx("div", {
                "code-path": "src/sections/HeroScroll.tsx:250:9",
                className:
                  "hero-mark absolute inset-0 flex items-center justify-center will-change-transform",
                children: y.jsx(yf, {
                  "code-path": "src/sections/HeroScroll.tsx:251:11",
                  className:
                    "w-[min(46vw,430px)] drop-shadow-[0_10px_30px_rgba(0,0,0,.45)]",
                }),
              }),
              y.jsx("div", {
                "code-path": "src/sections/HeroScroll.tsx:255:9",
                className:
                  "hero-ui absolute inset-x-0 bottom-[5.5%] px-6 md:px-14",
                children: y.jsxs("div", {
                  "code-path": "src/sections/HeroScroll.tsx:256:11",
                  className: "flex items-end justify-between gap-6",
                  children: [
                    y.jsxs("div", {
                      "code-path": "src/sections/HeroScroll.tsx:257:13",
                      className:
                        "font-cond text-[13px] font-medium leading-[1.35] tracking-wide text-white/90 md:text-base",
                      children: [
                        "ONLY ON",
                        y.jsx("br", {
                          "code-path": "src/sections/HeroScroll.tsx:259:15",
                        }),
                        y.jsx("span", {
                          "code-path": "src/sections/HeroScroll.tsx:260:15",
                          className: "text-[var(--brand-green)]",
                          children: "ROBINHOOD",
                        }),
                      ],
                    }),
                    y.jsx("a", {
                      "code-path": "src/sections/HeroScroll.tsx:263:13",
                      href: Va,
                      target: "_blank",
                      rel: "noreferrer",
                      className:
                        "mb-1 rounded-full bg-[var(--brand-green)] px-5 py-2.5 text-xs font-bold tracking-wide text-[var(--ink)] transition hover:brightness-110 md:px-9 md:py-3 md:text-base",
                      children: "VIEW CHART",
                    }),
                    y.jsxs("div", {
                      "code-path": "src/sections/HeroScroll.tsx:272:13",
                      className:
                        "font-cond hidden text-right text-[13px] font-semibold leading-[1.5] tracking-wider md:block md:text-sm",
                      children: [
                        y.jsx("a", {
                          "code-path": "src/sections/HeroScroll.tsx:273:15",
                          href: jb,
                          target: "_blank",
                          rel: "noreferrer",
                          className:
                            "text-white/90 transition hover:text-[var(--brand-green)]",
                          children: "UNISWAP",
                        }),
                        y.jsx("br", {
                          "code-path": "src/sections/HeroScroll.tsx:276:15",
                        }),
                        y.jsx("a", {
                          "code-path": "src/sections/HeroScroll.tsx:277:15",
                          href: Va,
                          target: "_blank",
                          rel: "noreferrer",
                          className:
                            "text-white/90 transition hover:text-[var(--brand-green)]",
                          children: "DEX SCREENER",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              y.jsxs("div", {
                "code-path": "src/sections/HeroScroll.tsx:285:9",
                className:
                  "hero-cue absolute inset-x-0 bottom-[1.4%] flex flex-col items-center gap-1",
                children: [
                  y.jsx("span", {
                    "code-path": "src/sections/HeroScroll.tsx:286:11",
                    className: "text-[10px] tracking-[0.22em] text-white/55",
                    children: "SCROLL FOR MORE",
                  }),
                  y.jsx("svg", {
                    "code-path": "src/sections/HeroScroll.tsx:287:11",
                    width: "22",
                    height: "12",
                    viewBox: "0 0 22 12",
                    className: "chevron-bob",
                    children: y.jsx("path", {
                      "code-path": "src/sections/HeroScroll.tsx:288:13",
                      d: "M2 2 L11 10 L20 2",
                      fill: "none",
                      stroke: "#d5fc04",
                      strokeWidth: "2.4",
                      strokeLinecap: "round",
                    }),
                  }),
                ],
              }),
              y.jsxs("div", {
                "code-path": "src/sections/HeroScroll.tsx:293:9",
                className:
                  "hero-endcard pointer-events-none absolute inset-x-0 bottom-[10%] flex flex-col items-center px-6 text-center opacity-0 md:px-14",
                style: { textShadow: "0 2px 14px rgba(0,0,0,.65)" },
                children: [
                  y.jsx("div", {
                    "code-path": "src/sections/HeroScroll.tsx:294:11",
                    className:
                      "text-[11px] font-semibold tracking-[0.3em] text-white/85 md:text-xs",
                    children: "A ROBINHOOD STORY",
                  }),
                  y.jsx("h2", {
                    "code-path": "src/sections/HeroScroll.tsx:297:11",
                    className:
                      "font-display mt-3 text-[13vw] leading-[0.95] text-[var(--cream)] md:text-[5.6vw]",
                    style: { textShadow: "0 6px 40px rgba(0,0,0,.6)" },
                    children: "BOYZ N THE HOOD",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const Sf = "" + new URL("street-CnwYOzoS.jpg", import.meta.url).href;
Ne.registerPlugin(Re);
function d4() {
  const s = j.useRef(null),
    n = kb();
  return (
    j.useLayoutEffect(() => {
      const r = Ne.context(() => {
        Ne.fromTo(
          ".trailer-img",
          { scale: 1.18 },
          {
            scale: 1.02,
            ease: "none",
            scrollTrigger: {
              trigger: s.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        ),
          Ne.fromTo(
            ".trailer-copy",
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: s.current, start: "top 55%", once: !0 },
            }
          );
      }, s);
      return () => r.revert();
    }, []),
    y.jsxs("section", {
      "code-path": "src/sections/TrailerSection.tsx:43:5",
      id: "trailer",
      ref: s,
      className: "vignette relative h-screen overflow-hidden",
      children: [
        y.jsx("img", {
          "code-path": "src/sections/TrailerSection.tsx:44:7",
          src: Sf,
          alt: "Trailer still — the block at night",
          className:
            "trailer-img absolute inset-0 h-full w-full object-cover will-change-transform",
        }),
        y.jsx("div", {
          "code-path": "src/sections/TrailerSection.tsx:49:7",
          className:
            "pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--night)]/85 to-transparent",
        }),
        y.jsx("div", {
          "code-path": "src/sections/TrailerSection.tsx:50:7",
          className:
            "pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[var(--night)]/95 via-[var(--night)]/55 to-transparent md:h-96",
        }),
        y.jsx("button", {
          "code-path": "src/sections/TrailerSection.tsx:53:7",
          "aria-label": "Play trailer",
          onClick: n,
          className:
            "group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          children: y.jsx("span", {
            "code-path": "src/sections/TrailerSection.tsx:58:9",
            className:
              "flex h-24 w-24 items-center justify-center rounded-full border border-white/25 bg-black/35 backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-black/55 md:h-28 md:w-28",
            children: y.jsx("svg", {
              "code-path": "src/sections/TrailerSection.tsx:59:11",
              width: "30",
              height: "34",
              viewBox: "0 0 30 34",
              className: "ml-1.5",
              children: y.jsx("path", {
                "code-path": "src/sections/TrailerSection.tsx:60:13",
                d: "M2 2 L28 17 L2 32 Z",
                fill: "#fff",
              }),
            }),
          }),
        }),
        y.jsxs("div", {
          "code-path": "src/sections/TrailerSection.tsx:65:7",
          className: "trailer-copy absolute bottom-[7%] left-6 md:left-14",
          style: { textShadow: "0 2px 14px rgba(0,0,0,.65)" },
          children: [
            y.jsx("div", {
              "code-path": "src/sections/TrailerSection.tsx:66:9",
              className:
                "text-[11px] font-semibold tracking-[0.3em] text-white/80 md:text-xs",
              children: "WATCH THE",
            }),
            y.jsx("h3", {
              "code-path": "src/sections/TrailerSection.tsx:67:9",
              className:
                "font-display mt-2 text-4xl text-[var(--cream)] md:text-6xl",
              children: "BOYZ TRAILER",
            }),
            y.jsx("p", {
              "code-path": "src/sections/TrailerSection.tsx:68:9",
              className: "mt-2 max-w-md text-sm text-white/90 md:text-base",
              children:
                "Watch the Boyz take over the hood and take down the Solana cabal.",
            }),
          ],
        }),
      ],
    })
  );
}
Ne.registerPlugin(Re);
function Yo({
  id: s,
  kicker: n,
  title: r,
  copy: i,
  cta: l,
  bg: c,
  bgPosition: f = "center",
  variant: h = "image",
  miniImage: p,
  ctaColor: m = "lime",
  tall: g = !1,
  kickerColor: v = "text-white/50",
  icon: b,
  to: _,
  href: w,
  onClick: S,
}) {
  const E = j.useRef(null);
  j.useLayoutEffect(() => {
    const H = Ne.context(() => {
      Ne.fromTo(
        E.current,
        { opacity: 0, y: 90 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: E.current, start: "top 82%", once: !0 },
        }
      );
    }, E);
    return () => H.revert();
  }, []);
  const C =
      m === "green"
        ? "bg-[var(--brand-green)] text-[var(--ink)]"
        : "bg-[var(--pill-lime)] text-[var(--ink)]",
    A = y.jsxs("span", {
      "code-path": "src/sections/FeatureCard.tsx:70:5",
      className: `mt-2 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] font-bold tracking-wide transition group-hover:brightness-110 md:text-sm ${C}`,
      children: [
        b,
        l,
        !b &&
          y.jsx("span", {
            "code-path": "src/sections/FeatureCard.tsx:73:17",
            "aria-hidden": !0,
            children: "→",
          }),
      ],
    }),
    R = y.jsxs(y.Fragment, {
      children: [
        h === "image" && c
          ? y.jsxs(y.Fragment, {
              children: [
                y.jsx("img", {
                  "code-path": "src/sections/FeatureCard.tsx:82:11",
                  src: c,
                  alt: "",
                  className:
                    "absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]",
                  style: { objectPosition: f },
                }),
                y.jsx("div", {
                  "code-path": "src/sections/FeatureCard.tsx:88:11",
                  className:
                    "absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent",
                }),
              ],
            })
          : y.jsxs("div", {
              "code-path": "src/sections/FeatureCard.tsx:91:9",
              className:
                "absolute inset-0 transition duration-700 group-hover:brightness-[1.15]",
              children: [
                y.jsx("div", {
                  "code-path": "src/sections/FeatureCard.tsx:93:11",
                  className: "absolute inset-0",
                  style: {
                    background:
                      "linear-gradient(160deg,#0a0d1a 0%,#10160e 35%,#2a3407 70%,#546105 100%)",
                  },
                }),
                y.jsx("svg", {
                  "code-path": "src/sections/FeatureCard.tsx:100:11",
                  className: "absolute inset-0 h-full w-full opacity-40",
                  preserveAspectRatio: "xMidYMax slice",
                  viewBox: "0 0 1433 573",
                  children: y.jsxs("g", {
                    "code-path": "src/sections/FeatureCard.tsx:101:13",
                    fill: "#0a0f08",
                    children: [
                      y.jsx("path", {
                        "code-path": "src/sections/FeatureCard.tsx:102:15",
                        d: "M120 573 c-6-140 4-250 22-330 -30 8-52 26-66 52 10-34 34-58 70-72 -26-6-52 0-76 16 22-24 52-34 88-30 6-10 16-18 30-24 -6 26-8 52-6 78 26-14 54-18 84-10 -28 2-52 12-72 30 20 2 36 10 48 26 -18-8-36-8-54 0 8 66 8 162-2 264 z",
                        transform: "translate(60,-40) scale(1.1)",
                      }),
                      y.jsx("path", {
                        "code-path": "src/sections/FeatureCard.tsx:103:15",
                        d: "M1290 573 c6-150 -4-268 -22-356 30 8 52 26 66 52 -10-34-34-58-70-72 26-6 52 0 76 16 -22-24-52-34-88-30 -6-10-16-18-30-24 6 26 8 52 6 78 -26-14-54-18-84-10 28 2 52 12 72 30 -20 2-36 10-48 26 18-8 36-8 54 0 -8 70-8 174 2 290 z",
                        transform: "translate(30,-30)",
                      }),
                    ],
                  }),
                }),
              ],
            }),
        y.jsxs("span", {
          "code-path": "src/sections/FeatureCard.tsx:110:7",
          className: "relative flex h-full items-stretch",
          children: [
            p &&
              y.jsx("span", {
                "code-path": "src/sections/FeatureCard.tsx:112:11",
                className:
                  "hidden w-[46%] items-center justify-center p-10 md:flex lg:p-14",
                children: y.jsx("span", {
                  "code-path": "src/sections/FeatureCard.tsx:113:13",
                  className:
                    "block max-h-full w-full max-w-[430px] overflow-hidden rounded-md border-[5px] border-white/10 shadow-[0_24px_70px_rgba(0,0,0,.5)]",
                  children: y.jsx("img", {
                    "code-path": "src/sections/FeatureCard.tsx:114:15",
                    src: p,
                    alt: "",
                    className: "h-full w-full object-cover",
                  }),
                }),
              }),
            y.jsxs("span", {
              "code-path": "src/sections/FeatureCard.tsx:118:9",
              className: `flex flex-1 flex-col justify-center gap-4 p-8 md:gap-5 md:p-14 ${
                p ? "md:pl-2" : ""
              }`,
              children: [
                y.jsx("span", {
                  "code-path": "src/sections/FeatureCard.tsx:123:11",
                  className: `text-[11px] font-semibold tracking-[0.3em] md:text-xs ${v}`,
                  children: n,
                }),
                y.jsx("span", {
                  "code-path": "src/sections/FeatureCard.tsx:126:11",
                  className:
                    "font-display text-4xl leading-[1.02] text-[var(--cream)] sm:text-5xl md:text-6xl lg:text-[64px]",
                  children: r,
                }),
                y.jsx("span", {
                  "code-path": "src/sections/FeatureCard.tsx:129:11",
                  className:
                    "max-w-md text-sm leading-relaxed text-white/80 md:text-base",
                  children: i,
                }),
                y.jsx("span", {
                  "code-path": "src/sections/FeatureCard.tsx:130:11",
                  children: A,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    D = `group relative mx-auto block w-full max-w-[1433px] overflow-hidden rounded-[22px] text-left md:rounded-[30px] ${
      g
        ? "aspect-[4/5] sm:aspect-[16/10] md:aspect-[1410/762]"
        : "aspect-[4/5] sm:aspect-[16/9] md:aspect-[1433/573]"
    }`;
  return y.jsx("div", {
    "code-path": "src/sections/FeatureCard.tsx:141:5",
    ref: E,
    className: "px-4 py-6 md:px-0 md:py-9",
    id: s,
    children: _
      ? y.jsx(vl, {
          "code-path": "src/sections/FeatureCard.tsx:143:9",
          to: _,
          className: D,
          children: R,
        })
      : w
      ? y.jsx("a", {
          "code-path": "src/sections/FeatureCard.tsx:145:9",
          href: w,
          target: "_blank",
          rel: "noreferrer",
          className: D,
          children: R,
        })
      : y.jsx("button", {
          "code-path": "src/sections/FeatureCard.tsx:147:9",
          type: "button",
          onClick: S,
          className: D,
          children: R,
        }),
  });
}
const gm = "" + new URL("store-CmMJAN-g.jpg", import.meta.url).href,
  h4 = y.jsx("svg", {
    "code-path": "src/sections/Cards.tsx:10:3",
    width: "12",
    height: "14",
    viewBox: "0 0 12 14",
    "aria-hidden": !0,
    children: y.jsx("path", {
      "code-path": "src/sections/Cards.tsx:11:5",
      d: "M1 1 L11 7 L1 13 Z",
      fill: "currentColor",
    }),
  });
function p4() {
  return y.jsxs(y.Fragment, {
    children: [
      y.jsx("div", {
        "code-path": "src/sections/Cards.tsx:19:7",
        id: "editions",
        children: y.jsx(Yo, {
          "code-path": "src/sections/Cards.tsx:20:9",
          variant: "gradient",
          miniImage: mm,
          kicker: "THE CREW",
          title: "MEET THE BOYZ",
          copy: "The block belongs to the Boyz.",
          cta: "MEET THE BOYZ",
          ctaColor: "lime",
          to: "/characters",
          tall: !0,
        }),
      }),
      y.jsx(Yo, {
        "code-path": "src/sections/Cards.tsx:33:7",
        bg: gm,
        bgPosition: "center 12%",
        kicker: "THE HOOD",
        title: "GET TO KNOW THE HOOD",
        copy: "The blocks, the spots and the whips. The full breakdown.",
        cta: "EXPLORE THE HOOD",
        ctaColor: "lime",
        to: "/places",
      }),
    ],
  });
}
function m4() {
  const s = kb();
  return y.jsxs(y.Fragment, {
    children: [
      y.jsx("div", {
        "code-path": "src/sections/Cards.tsx:52:7",
        id: "media",
        children: y.jsx(Yo, {
          "code-path": "src/sections/Cards.tsx:53:9",
          bg: pm,
          bgPosition: "center 40%",
          kicker: "VIDEO",
          title: "BOYZ N THE HOOD TRAILER",
          copy: "The Boyz take over the hood and take down the Solana cabal. Run it back.",
          cta: "WATCH NOW",
          ctaColor: "lime",
          icon: h4,
          onClick: s,
          tall: !0,
        }),
      }),
      y.jsx(Yo, {
        "code-path": "src/sections/Cards.tsx:67:7",
        bg: bf,
        bgPosition: "center 60%",
        kicker: "PEOPLE & PLACES",
        title: "ONLY IN THE HOOD",
        copy: "The boyz, the blocks and everything in between — pick a side and dive in.",
        cta: "EXPLORE MORE",
        ctaColor: "lime",
        to: "/explore",
      }),
      y.jsx(Yo, {
        "code-path": "src/sections/Cards.tsx:78:7",
        bg: Sf,
        bgPosition: "center 20%",
        kicker: "DOWNLOADS",
        title: "MEDIA & ARTWORK",
        copy: "Raw key art, character shots and the trailer — grab it, meme it, share it.",
        cta: "VIEW ALL",
        ctaColor: "lime",
        to: "/media",
      }),
    ],
  });
}
const xm = "" + new URL("pepe1-CIIyZDaE.jpg", import.meta.url).href,
  vm = "" + new URL("pepe2-CO3Fuqc1.jpg", import.meta.url).href,
  Bb = "" + new URL("pepe3-B0pReAj8.jpg", import.meta.url).href,
  Gb = "" + new URL("brett1-CSK9ag3v.jpg", import.meta.url).href,
  Yb = "" + new URL("brett2-DdWxuAD6.jpg", import.meta.url).href,
  qb = "" + new URL("brett3-ky_uMoLg.jpg", import.meta.url).href,
  ym = "" + new URL("andy1-D20vc-78.jpg", import.meta.url).href,
  Xb = "" + new URL("andy2-B0Oe_AGm.jpg", import.meta.url).href,
  Vb = "" + new URL("andy3-pZQ9ejPZ.jpg", import.meta.url).href,
  Zb = "" + new URL("landwolf1-DNaRSnVh.jpg", import.meta.url).href,
  bm = "" + new URL("landwolf2-CvvuPEaA.jpg", import.meta.url).href,
  Qb = "" + new URL("landwolf3-B3YYvLn9.jpg", import.meta.url).href,
  _m = [
    {
      id: "brett",
      name: "BRETT",
      role: "THE PLANNER",
      tagline: "Champagne when the math checks out.",
      bio: [
        "Every crew has one guy who never raises his voice, and in this hood that's Brett. You'll find him at his usual table at the Pump Lounge on 79th, drink untouched, running numbers in his head while the room runs its mouth.",
        "He doesn't drive, doesn't chase, doesn't panic. He plans. Every move the Boyz make started as a quiet sentence from the blue one in the corner — and when Brett disappears to the rooftop, he'll come back down and say one word. That's the word.",
      ],
      stats: [
        { label: "ROLE", value: "The Planner" },
        { label: "TURF", value: "Pump Lounge, 79th St" },
        { label: "SEAT", value: "Shotgun, with the map" },
        { label: "SIGNATURE", value: "Counts it twice" },
      ],
      photos: [Gb, Yb, qb],
    },
    {
      id: "pepe",
      name: "PEPE",
      role: "THE GHOST",
      tagline: "In and out. No noise. No trace.",
      bio: [
        "Pepe's the quietest frog on the block and the one everybody watches. Hoodie up, bandana tied, posted against the chain-link at the midnight court — he's there before you notice him and gone before you think to ask.",
        "He runs the errands nobody talks about: the ATM lobby at 3 a.m., the off-grid motel with the red neon, cash only, checkout whenever he says so. Never leaves fingerprints on anything — not even the group chat.",
      ],
      stats: [
        { label: "ROLE", value: "The Ghost" },
        { label: "TURF", value: "Midnight court" },
        { label: "SEAT", value: "Walks. Always." },
        { label: "SIGNATURE", value: "Zero noise" },
      ],
      photos: [xm, vm, Bb],
    },
    {
      id: "andy",
      name: "ANDY",
      role: "THE HEART",
      tagline: "First through the door. Last to leave.",
      bio: [
        "The loudest laugh on the block lives in the backseat of the '64. Andy reps the Boyz chain everywhere he goes, ties his bandana like it's a crown, and treats every single night like it might be the one they tell stories about.",
        "He's the reason the crew stays a crew. When it goes sideways — and in this hood it always goes sideways — Andy's the one already moving, door open, yelling for everybody to get in.",
      ],
      stats: [
        { label: "ROLE", value: "The Heart" },
        { label: "TURF", value: "Backseat of the '64" },
        { label: "SEAT", value: "Backseat king" },
        { label: "SIGNATURE", value: "The Boyz chain" },
      ],
      photos: [ym, Xb, Vb],
    },
    {
      id: "landwolf",
      name: "LANDWOLF",
      role: "THE VETERAN",
      tagline: "Seen it all. Tells nothing.",
      bio: [
        "Landwolf was running these streets before the rest of the Boyz could see over the dashboard. Now he holds court in the club booth, red glasses glowing, flannel pressed, bottle on ice — the only one who remembers the old hood.",
        "He drives the '64 because nobody else is allowed to. And when the job's done and the vault door swings shut, he's already back at his table, same seat, same pour, like nothing ever happened.",
      ],
      stats: [
        { label: "ROLE", value: "The Veteran" },
        { label: "TURF", value: "Wherever the bottles are" },
        { label: "SEAT", value: "Driver of the '64" },
        { label: "SIGNATURE", value: "Same seat, same pour" },
      ],
      photos: [Zb, bm, Qb],
    },
  ];
Ne.registerPlugin(Re);
function g4() {
  const s = j.useRef(null);
  return (
    j.useLayoutEffect(() => {
      const n = Ne.context(() => {
        Ne.fromTo(
          ".crew-head",
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".crew-head",
              start: "top 85%",
              once: !0,
            },
          }
        ),
          Ne.fromTo(
            ".crew-card",
            { opacity: 0, y: 80 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".crew-grid",
                start: "top 80%",
                once: !0,
              },
            }
          );
      }, s);
      return () => n.revert();
    }, []),
    y.jsxs("section", {
      "code-path": "src/sections/CrewSection.tsx:36:5",
      id: "crew",
      ref: s,
      className: "mx-auto max-w-[1433px] px-6 py-20 md:px-14 md:py-28",
      children: [
        y.jsxs("div", {
          "code-path": "src/sections/CrewSection.tsx:37:7",
          className: "crew-head mb-12 md:mb-16",
          children: [
            y.jsx("div", {
              "code-path": "src/sections/CrewSection.tsx:38:9",
              className:
                "text-[11px] font-semibold tracking-[0.3em] text-white/50 md:text-xs",
              children: "THE CREW",
            }),
            y.jsx("h2", {
              "code-path": "src/sections/CrewSection.tsx:39:9",
              className:
                "font-display mt-3 text-[11vw] leading-[0.95] text-[var(--cream)] md:text-[4.6vw]",
              children: "MEET THE BOYZ",
            }),
          ],
        }),
        y.jsx("div", {
          "code-path": "src/sections/CrewSection.tsx:44:7",
          className:
            "crew-grid grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4",
          children: _m.map((n) =>
            y.jsxs(
              vl,
              {
                "code-path": "src/sections/CrewSection.tsx:46:11",
                to: "/characters",
                className:
                  "crew-card group relative overflow-hidden rounded-2xl bg-white/[0.03]",
                children: [
                  y.jsx("div", {
                    "code-path": "src/sections/CrewSection.tsx:51:13",
                    className: "aspect-[4/5] overflow-hidden",
                    children: y.jsx("img", {
                      "code-path": "src/sections/CrewSection.tsx:52:15",
                      src: n.photos[0],
                      alt: n.name,
                      className:
                        "h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]",
                    }),
                  }),
                  y.jsx("div", {
                    "code-path": "src/sections/CrewSection.tsx:58:13",
                    className:
                      "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent",
                  }),
                  y.jsxs("div", {
                    "code-path": "src/sections/CrewSection.tsx:59:13",
                    className: "absolute inset-x-0 bottom-0 p-5",
                    children: [
                      y.jsx("div", {
                        "code-path": "src/sections/CrewSection.tsx:60:15",
                        className:
                          "text-[10px] font-semibold tracking-[0.28em] text-[var(--pill-lime)]",
                        children: n.role,
                      }),
                      y.jsx("div", {
                        "code-path": "src/sections/CrewSection.tsx:61:15",
                        className:
                          "font-display mt-1 text-3xl text-[var(--cream)]",
                        children: n.name,
                      }),
                      y.jsx("div", {
                        "code-path": "src/sections/CrewSection.tsx:62:15",
                        className:
                          "mt-1 line-clamp-2 text-xs leading-relaxed text-white/65",
                        children: n.tagline,
                      }),
                      y.jsx("div", {
                        "code-path": "src/sections/CrewSection.tsx:63:15",
                        className:
                          "mt-3 text-[11px] font-bold tracking-[0.18em] text-white/80 transition group-hover:text-[var(--brand-green)]",
                        children: "FULL STORY →",
                      }),
                    ],
                  }),
                ],
              },
              n.id
            )
          ),
        }),
      ],
    })
  );
}
Ne.registerPlugin(Re);
function x4() {
  const s = j.useRef(null);
  return (
    j.useLayoutEffect(() => {
      const n = Ne.context(() => {
        Ne.fromTo(
          ".hood-img",
          { scale: 1.22, yPercent: -4 },
          {
            scale: 1.04,
            yPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".hood-visual",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        ),
          Ne.fromTo(
            ".hood-headline",
            { opacity: 0, y: 70 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".hood-headline",
                start: "top 85%",
                once: !0,
              },
            }
          ),
          Ne.fromTo(
            ".hood-copy",
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              delay: 0.12,
              scrollTrigger: {
                trigger: ".hood-copy",
                start: "top 88%",
                once: !0,
              },
            }
          );
      }, s);
      return () => n.revert();
    }, []),
    y.jsxs("section", {
      "code-path": "src/sections/CityHeadline.tsx:47:5",
      id: "hood",
      ref: s,
      className: "relative",
      children: [
        y.jsxs("div", {
          "code-path": "src/sections/CityHeadline.tsx:48:7",
          className:
            "hood-visual vignette relative h-[92vh] overflow-hidden md:h-screen",
          children: [
            y.jsx("img", {
              "code-path": "src/sections/CityHeadline.tsx:49:9",
              src: _f,
              alt: "The hood from above at night",
              className:
                "hood-img absolute inset-0 h-full w-full object-cover will-change-transform",
            }),
            y.jsx("div", {
              "code-path": "src/sections/CityHeadline.tsx:54:9",
              className:
                "pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--night)]/85 to-transparent",
            }),
            y.jsx("div", {
              "code-path": "src/sections/CityHeadline.tsx:55:9",
              className:
                "pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--night)] to-transparent",
            }),
          ],
        }),
        y.jsxs("div", {
          "code-path": "src/sections/CityHeadline.tsx:58:7",
          className: "mx-auto max-w-[1433px] px-6 py-20 md:px-14 md:py-28",
          children: [
            y.jsx("div", {
              "code-path": "src/sections/CityHeadline.tsx:59:9",
              className:
                "hood-headline text-[11px] font-semibold tracking-[0.3em] text-white/50 md:text-xs",
              children: "JOIN THE HOOD",
            }),
            y.jsx("h2", {
              "code-path": "src/sections/CityHeadline.tsx:62:9",
              className:
                "hood-headline font-display mt-3 text-[13vw] leading-[0.95] text-[var(--cream)] sm:text-[11vw] md:text-[6.4vw]",
              children: "THE HOOD, ON-CHAIN.",
            }),
            y.jsx("p", {
              "code-path": "src/sections/CityHeadline.tsx:65:9",
              className:
                "hood-copy mt-8 max-w-3xl text-lg font-medium leading-[1.55] text-white/85 md:mt-10 md:text-[26px] md:leading-[1.5]",
              children:
                "The Boyz represent how a lot of us feel about crypto — tired of short-term thinking, recycled launches, and communities treated like exit liquidity. Solana opened the door to something faster and more community-driven. Now Robinhood and the four Boyz are stepping in to build something bigger, together.",
            }),
            y.jsx("div", {
              "code-path": "src/sections/CityHeadline.tsx:71:9",
              className: "hood-copy mt-8 md:mt-10",
              children: y.jsxs("a", {
                "code-path": "src/sections/CityHeadline.tsx:72:11",
                href: Va,
                target: "_blank",
                rel: "noreferrer",
                className:
                  "inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-8 py-3.5 text-sm font-bold tracking-wide text-[var(--ink)] transition hover:brightness-110",
                children: [
                  "VIEW THE CHART",
                  y.jsx("span", {
                    "code-path": "src/sections/CityHeadline.tsx:79:13",
                    "aria-hidden": !0,
                    children: "→",
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  );
}
const v4 = [
    {
      name: "X",
      url: Tv.x,
      path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    },
    {
      name: "Telegram",
      url: Tv.telegram,
      path: "M9.04 15.37l-.38 5.32c.54 0 .78-.23 1.06-.5l2.55-2.44 5.28 3.87c.97.53 1.66.25 1.92-.9L22.9 3.9c.31-1.42-.51-1.98-1.46-1.63L2.4 9.25c-1.4.54-1.38 1.32-.24 1.67l4.87 1.52L18.3 5.6c.53-.35 1.02-.16.62.2z",
    },
    {
      name: "DEX Screener",
      url: Va,
      path: "M11.3194 1.03032C10.7842 1.07698 10.1201 1.22792 9.56568 1.43101C8.77528 1.71369 7.82296 2.26533 7.14782 2.83068C6.57972 3.30273 5.94575 3.99159 5.54232 4.57067C5.45449 4.69691 5.37765 4.80669 5.37216 4.81218C5.35569 4.83413 4.82053 4.46089 4.52687 4.21938C4.3622 4.0849 4.07404 3.82692 3.88741 3.65127C3.70353 3.47288 3.55259 3.33292 3.55259 3.34115C3.55259 3.38232 3.77215 3.89004 3.91211 4.16449C4.26889 4.88079 4.71349 5.45712 5.56702 6.31339C6.61265 7.36177 7.76532 8.31136 9.16499 9.28015C9.71663 9.66163 10.5482 10.194 10.5921 10.194C10.6086 10.194 10.647 10.1666 10.6772 10.1364C10.7595 10.0458 11.0395 9.85374 11.2343 9.75768C11.4786 9.63418 11.8573 9.55459 12.1016 9.5738C12.4803 9.60399 12.8673 9.76317 13.2323 10.0431C13.3421 10.1254 13.4381 10.194 13.4436 10.194C13.4628 10.194 14.3438 9.63418 14.6676 9.41737C16.7918 7.98202 18.6526 6.32437 19.5555 5.05918C19.9123 4.55969 20.2169 3.99708 20.3871 3.53052L20.4584 3.32743L20.1099 3.65676C19.6653 4.07392 19.2646 4.40325 18.9243 4.63379C18.7761 4.73259 18.6471 4.81492 18.6388 4.81492C18.6306 4.81492 18.5538 4.71338 18.4659 4.58713C18.2162 4.23035 17.8924 3.84064 17.5493 3.48661C15.8175 1.69448 13.6028 0.821744 11.3194 1.03032ZM4.37867 6.74976C4.09874 7.49351 3.98072 8.27842 3.93681 9.65888C3.90388 10.6688 3.85722 11.2726 3.75842 11.8984C3.54161 13.2816 3.23698 14.2586 2.58654 15.639C2.45206 15.9245 2.34777 16.1632 2.35601 16.1687C2.38894 16.2044 3.02291 15.7818 3.41537 15.4634C3.55808 15.3454 3.83527 15.0956 4.03287 14.9063C4.22772 14.7169 4.39239 14.5632 4.39514 14.566C4.40337 14.5769 4.2387 15.3811 4.18381 15.5869C3.92858 16.5365 3.5224 17.4586 2.97076 18.3314C2.79238 18.614 2.39169 19.1849 2.07058 19.613C1.99648 19.7173 1.94434 19.7996 1.95532 19.7996C1.96904 19.7996 2.13645 19.72 2.33405 19.624C3.33303 19.1272 4.18107 18.485 4.98519 17.6096L5.22122 17.3543L5.29532 17.6782C5.47919 18.4713 5.81127 19.3688 6.22569 20.1948C6.46994 20.6833 6.93101 21.5067 6.95022 21.4875C6.95571 21.4847 7.00786 21.3338 7.07098 21.1554C7.20271 20.7684 7.46618 20.1811 7.70495 19.7447C7.8998 19.3907 8.25109 18.8144 8.27305 18.8116C8.28128 18.8116 8.34715 18.9269 8.42125 19.0669C8.91799 19.9945 9.60136 20.9852 10.6635 22.3108C10.9434 22.6566 11.3551 23.1753 11.5801 23.4635C11.8024 23.7489 11.9918 23.9904 12 23.9986C12.0055 24.0069 12.0357 23.9767 12.0686 23.9328C12.0988 23.8889 12.4227 23.4827 12.7849 23.0326C14.3191 21.1252 14.9174 20.2799 15.5651 19.1053C15.6886 18.883 15.7352 18.8171 15.7572 18.8446C15.8395 18.9434 16.1826 19.5307 16.3719 19.8957C16.6519 20.4363 16.8357 20.8453 16.9483 21.1938C17.0004 21.3475 17.0471 21.4737 17.0553 21.4737C17.0992 21.4737 17.5575 20.6504 17.8484 20.0466C18.2354 19.2453 18.5044 18.5097 18.6882 17.7605C18.7404 17.5492 18.787 17.3708 18.7925 17.368C18.798 17.3626 18.9188 17.4888 19.0615 17.648C19.5418 18.1914 20.2032 18.7485 20.8673 19.1684C21.1802 19.366 21.9871 19.7996 22.0447 19.7996C22.0639 19.7996 21.9157 19.5856 21.7209 19.3221C21.1308 18.529 20.774 17.9526 20.4447 17.2638C20.044 16.424 19.8217 15.7131 19.6241 14.6456C19.6104 14.5605 19.6378 14.5824 20.0138 14.9392C20.4502 15.3536 20.7823 15.6336 21.0979 15.8421C21.3202 15.9931 21.6303 16.177 21.6605 16.177C21.6715 16.177 21.5782 15.9711 21.4547 15.7214C20.7631 14.3162 20.3377 12.8781 20.173 11.3797C20.151 11.1793 20.1181 10.699 20.1016 10.3093C20.022 8.36624 19.9891 8.00672 19.8382 7.41392C19.7613 7.11203 19.6433 6.71957 19.6021 6.64547C19.5802 6.60431 19.5006 6.67566 19.0642 7.11477C18.7816 7.4002 18.444 7.73228 18.3095 7.85029L18.0707 8.0671L18.1119 8.20432C18.2409 8.62697 18.2848 9.33778 18.2107 9.75494C17.9939 10.9488 17.0882 11.8435 15.856 12.0767C15.5898 12.1261 14.997 12.1371 14.7527 12.0932L14.6072 12.0685L14.6237 12.1536C14.6319 12.2002 14.6704 12.3677 14.7088 12.5268C14.7445 12.686 14.7856 12.8973 14.7939 12.9989L14.8131 13.1855L15.4333 13.578C16.4488 14.2202 16.7781 14.4342 16.7781 14.448C16.7809 14.4562 16.6848 14.5166 16.5668 14.5824C15.9959 14.9063 15.3428 15.3701 14.9997 15.6967C14.2258 16.4322 13.5561 17.6919 12.6642 20.0878C12.4638 20.6312 12.0686 21.7482 12.0467 21.8388C12.0357 21.8799 12.0192 21.9129 12.0082 21.9129C12 21.9101 11.9506 21.7839 11.8985 21.6302C11.742 21.1472 11.2398 19.7804 11.0175 19.2233C10.2244 17.2391 9.6096 16.2126 8.79724 15.5155C8.51456 15.274 7.9245 14.8651 7.53205 14.6401C7.41952 14.5742 7.30151 14.5056 7.27407 14.4864C7.22741 14.4534 7.26858 14.4205 7.70769 14.1323C7.9739 13.9567 8.41301 13.6768 8.67923 13.5093C8.94544 13.3419 9.17048 13.202 9.17597 13.1965C9.18146 13.191 9.20342 13.0757 9.22263 12.9385C9.2583 12.7025 9.36808 12.2167 9.41474 12.1042C9.43121 12.0603 9.42572 12.0548 9.36534 12.0685C9.01405 12.1563 8.37185 12.1426 7.95469 12.0356C7.17801 11.8352 6.49739 11.3385 6.13512 10.7073C5.73992 10.0157 5.65484 9.12371 5.90459 8.23726L5.9485 8.07533L5.5533 7.70483C5.33648 7.499 4.99617 7.16692 4.79857 6.96108L4.4363 6.59058L4.37867 6.74976ZM6.83495 8.88495C6.76634 9.15665 6.79379 9.57655 6.90082 9.89216C7.18076 10.7182 8.03702 11.226 8.98935 11.1272C9.39004 11.086 9.82366 10.9625 9.76603 10.9076C9.75231 10.8966 9.42023 10.6716 9.02777 10.4081C8.33343 9.9443 7.70495 9.49147 7.17527 9.07431C7.03256 8.96179 6.90082 8.8575 6.88435 8.84378C6.8624 8.82731 6.84593 8.84103 6.83495 8.88495ZM17.0004 8.94807C16.4817 9.37071 15.7352 9.90588 14.8652 10.485C14.1105 10.9872 14.1434 10.9296 14.5578 11.0448C14.8488 11.1272 15.4278 11.1491 15.7242 11.0887C16.0673 11.0201 16.4186 10.8308 16.6738 10.5783C16.8467 10.4081 16.9044 10.3258 17.0086 10.1117C17.0773 9.969 17.1486 9.78238 17.1678 9.70005C17.209 9.53538 17.2117 9.01942 17.1733 8.89867L17.1514 8.82731L17.0004 8.94807ZM11.7777 10.5893C11.2178 10.7896 10.6443 11.5718 10.3616 12.5186C10.293 12.7574 10.2079 13.2212 10.153 13.6795L10.1365 13.8057L9.65076 14.0994C9.38455 14.2613 9.14853 14.404 9.12932 14.4178C9.10462 14.4315 9.16499 14.4946 9.33515 14.6318C9.66174 14.8926 10.1942 15.4497 10.4137 15.7598C10.8885 16.4294 11.3688 17.3543 11.8134 18.4549C11.9067 18.6881 11.989 18.8912 11.9973 18.9022C12.0055 18.9132 12.0933 18.7156 12.1976 18.4631C12.7355 17.132 13.2378 16.1962 13.7812 15.5183C14.0035 15.2411 14.3712 14.8761 14.6704 14.6373L14.9174 14.4397L14.8268 14.3793C14.7774 14.3464 14.5414 14.2064 14.3054 14.0665L13.8745 13.8112L13.8608 13.6987C13.7153 12.5515 13.5506 12.0301 13.1472 11.4208C12.7081 10.7622 12.1839 10.4438 11.7777 10.5893Z",
    },
  ],
  y4 = [
    { label: "THE BOYZ", to: "/characters" },
    { label: "THE HOOD", to: "/places" },
    { label: "THE GANG", to: "/gang" },
    { label: "MEDIA", to: "/media" },
  ];
function wf() {
  const [s, n] = j.useState(!1),
    r = async () => {
      if (wv)
        try {
          await navigator.clipboard.writeText(Go),
            n(!0),
            setTimeout(() => n(!1), 1800);
        } catch {}
    },
    i = `${Go.slice(0, 10)}…${Go.slice(-8)}`;
  return y.jsx("footer", {
    "code-path": "src/sections/Footer.tsx:43:5",
    className:
      "relative mt-16 border-t border-white/5 pb-14 pt-20 md:mt-24 md:pt-28",
    children: y.jsxs("div", {
      "code-path": "src/sections/Footer.tsx:44:7",
      className: "flex flex-col items-center px-6",
      children: [
        y.jsx(yf, {
          "code-path": "src/sections/Footer.tsx:45:9",
          className: "w-[180px] md:w-[220px]",
        }),
        wv
          ? y.jsxs("button", {
              "code-path": "src/sections/Footer.tsx:49:11",
              onClick: r,
              className:
                "mt-14 flex w-full max-w-2xl items-center justify-between gap-4 rounded-full border border-[#d5fc04]/30 bg-[#d5fc04]/[0.06] px-7 py-5 text-left transition hover:border-[#d5fc04]/60",
              children: [
                y.jsxs("span", {
                  "code-path": "src/sections/Footer.tsx:53:13",
                  className: "flex min-w-0 items-center gap-3",
                  children: [
                    y.jsx("span", {
                      "code-path": "src/sections/Footer.tsx:54:15",
                      className:
                        "font-cond shrink-0 text-sm font-bold tracking-[0.18em] text-[var(--brand-green)]",
                      children: "CA",
                    }),
                    y.jsx("span", {
                      "code-path": "src/sections/Footer.tsx:55:15",
                      className:
                        "truncate font-mono text-sm text-white/80 md:text-base",
                      children: i,
                    }),
                  ],
                }),
                y.jsx("span", {
                  "code-path": "src/sections/Footer.tsx:57:13",
                  className: `shrink-0 rounded-full px-5 py-2 text-xs font-bold tracking-wide transition ${
                    s
                      ? "bg-[var(--pill-lime)] text-[var(--ink)]"
                      : "bg-[var(--brand-green)] text-[var(--ink)] hover:brightness-110"
                  }`,
                  children: s ? "COPIED ✓" : "COPY",
                }),
              ],
            })
          : y.jsx("div", {
              "code-path": "src/sections/Footer.tsx:64:11",
              className:
                "mt-14 flex w-full max-w-2xl items-center justify-center rounded-full border border-[#d5fc04]/30 bg-[#d5fc04]/[0.06] px-7 py-7",
              children: y.jsx("span", {
                "code-path": "src/sections/Footer.tsx:65:13",
                className:
                  "font-cond text-sm font-bold tracking-[0.24em] text-[var(--brand-green)]",
                children: "COMING SOON",
              }),
            }),
        y.jsxs("div", {
          "code-path": "src/sections/Footer.tsx:72:9",
          className: "mt-8 flex flex-wrap items-center justify-center gap-4",
          children: [
            y.jsx("a", {
              "code-path": "src/sections/Footer.tsx:73:11",
              href: Va,
              target: "_blank",
              rel: "noreferrer",
              className:
                "rounded-full bg-[var(--brand-green)] px-8 py-3.5 text-sm font-bold tracking-wide text-[var(--ink)] transition hover:brightness-110",
              children: "VIEW CHART",
            }),
            y.jsx("a", {
              "code-path": "src/sections/Footer.tsx:77:11",
              href: jb,
              target: "_blank",
              rel: "noreferrer",
              className:
                "rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold tracking-wide text-white transition hover:border-white/50 hover:bg-white/5",
              children: "BUY ON UNISWAP",
            }),
            y.jsx("a", {
              "code-path": "src/sections/Footer.tsx:81:11",
              href: Va,
              target: "_blank",
              rel: "noreferrer",
              className:
                "rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold tracking-wide text-white transition hover:border-white/50 hover:bg-white/5",
              children: "DEX SCREENER",
            }),
          ],
        }),
        y.jsx("div", {
          "code-path": "src/sections/Footer.tsx:88:9",
          className: "mt-12 flex items-center gap-5 md:gap-7",
          children: v4.map((l) =>
            y.jsx(
              "a",
              {
                "code-path": "src/sections/Footer.tsx:90:13",
                href: l.url,
                target: "_blank",
                rel: "noreferrer",
                "aria-label": l.name,
                className: "text-white/55 transition hover:text-white",
                children: y.jsx("svg", {
                  "code-path": "src/sections/Footer.tsx:98:15",
                  width: "19",
                  height: "19",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  children: y.jsx("path", {
                    "code-path": "src/sections/Footer.tsx:99:17",
                    d: l.path,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }),
                }),
              },
              l.name
            )
          ),
        }),
        y.jsx("nav", {
          "code-path": "src/sections/Footer.tsx:106:9",
          className:
            "mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-7 gap-y-3",
          children: y4.map((l) =>
            y.jsx(
              vl,
              {
                "code-path": "src/sections/Footer.tsx:108:13",
                to: l.to,
                className:
                  "text-[11px] font-medium tracking-[0.14em] text-white/45 transition hover:text-white/80",
                children: l.label,
              },
              l.to
            )
          ),
        }),
        y.jsx("p", {
          "code-path": "src/sections/Footer.tsx:119:9",
          className:
            "mt-12 max-w-2xl text-center text-[11px] leading-relaxed text-white/35",
          children:
            "$BOYZ is a meme coin created for entertainment purposes only. It has no intrinsic value and no expectation of financial return. Nothing on this site is financial advice. Always do your own research. BOYZ N THE HOOD is a fan-made concept and is not affiliated with Rockstar Games, Take-Two Interactive, or Matt Furie.",
        }),
        y.jsx("div", {
          "code-path": "src/sections/Footer.tsx:127:9",
          className: "mt-8 text-[11px] tracking-wider text-white/30",
          children: "© 2026 BOYZ N THE HOOD. THE BLOCK IS OURS.",
        }),
      ],
    }),
  });
}
function b4() {
  return (
    j.useEffect(() => {
      const s = () => Re.refresh();
      window.addEventListener("load", s);
      const n = setTimeout(() => Re.refresh(), 1200);
      return () => {
        window.removeEventListener("load", s), clearTimeout(n);
      };
    }, []),
    y.jsx(s4, {
      "code-path": "src/pages/Home.tsx:25:5",
      children: y.jsxs("div", {
        "code-path": "src/pages/Home.tsx:26:7",
        className: "bg-[var(--night)] text-white",
        children: [
          y.jsx(vf, { "code-path": "src/pages/Home.tsx:27:9" }),
          y.jsxs("main", {
            "code-path": "src/pages/Home.tsx:28:9",
            children: [
              y.jsx(f4, { "code-path": "src/pages/Home.tsx:29:11" }),
              y.jsx(d4, { "code-path": "src/pages/Home.tsx:30:11" }),
              y.jsx(p4, { "code-path": "src/pages/Home.tsx:31:11" }),
              y.jsx(x4, { "code-path": "src/pages/Home.tsx:32:11" }),
              y.jsx(g4, { "code-path": "src/pages/Home.tsx:33:11" }),
              y.jsx(m4, { "code-path": "src/pages/Home.tsx:34:11" }),
            ],
          }),
          y.jsx(wf, { "code-path": "src/pages/Home.tsx:36:9" }),
        ],
      }),
    })
  );
}
const _4 = "" + new URL("car-front-BI0LHFsC.jpg", import.meta.url).href,
  S4 = "" + new URL("car-interior-3CGKr9qs.jpg", import.meta.url).href,
  w4 = "" + new URL("bandana-DVZYWHRs.jpg", import.meta.url).href;
Ne.registerPlugin(Re);
function T4() {
  const s = j.useRef(null);
  return (
    j.useLayoutEffect(() => {
      const n = Ne.context(() => {
        Ne.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: s.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        })
          .fromTo(".cine-a", { scale: 1.14 }, { scale: 1, duration: 0.5 }, 0)
          .fromTo(
            ".cine-b",
            { opacity: 0 },
            { opacity: 1, duration: 0.12 },
            0.44
          )
          .fromTo(
            ".cine-b",
            { scale: 1.16 },
            { scale: 1.02, duration: 0.5 },
            0.44
          )
          .fromTo(".cine-c", { opacity: 0 }, { opacity: 1, duration: 0.1 }, 0.8)
          .fromTo(
            ".cine-c",
            { scale: 1.14 },
            { scale: 1.02, duration: 0.2 },
            0.8
          )
          .to({}, { duration: 0.06 });
      }, s);
      return () => n.revert();
    }, []),
    y.jsx("div", {
      "code-path": "src/pages/Characters.tsx:35:5",
      ref: s,
      className: "relative h-[380vh]",
      children: y.jsxs("div", {
        "code-path": "src/pages/Characters.tsx:36:7",
        className: "vignette sticky top-0 h-screen overflow-hidden",
        children: [
          y.jsx("img", {
            "code-path": "src/pages/Characters.tsx:37:9",
            src: _4,
            alt: "",
            className:
              "cine-a absolute inset-0 h-full w-full object-cover will-change-transform",
          }),
          y.jsx("img", {
            "code-path": "src/pages/Characters.tsx:38:9",
            src: w4,
            alt: "",
            className:
              "cine-b absolute inset-0 h-full w-full object-cover opacity-0 will-change-transform",
          }),
          y.jsx("img", {
            "code-path": "src/pages/Characters.tsx:39:9",
            src: S4,
            alt: "",
            className:
              "cine-c absolute inset-0 h-full w-full object-cover opacity-0 will-change-transform",
          }),
          y.jsx("div", {
            "code-path": "src/pages/Characters.tsx:40:9",
            className:
              "pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/50 to-transparent",
          }),
          y.jsx("div", {
            "code-path": "src/pages/Characters.tsx:41:9",
            className:
              "pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[var(--night)] to-transparent",
          }),
        ],
      }),
    })
  );
}
function E4({ c: s, flip: n }) {
  const r = j.useRef(null);
  return (
    j.useLayoutEffect(() => {
      const i = Ne.context(() => {
        Ne.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: r.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        })
          .fromTo(
            ".p-img1",
            { scale: 1.16 },
            { scale: 1.03, duration: 0.55 },
            0
          )
          .fromTo(
            ".p-img2",
            { opacity: 0 },
            { opacity: 1, duration: 0.12 },
            0.5
          )
          .fromTo(".p-img2", { scale: 1.12 }, { scale: 1, duration: 0.4 }, 0.5),
          Ne.fromTo(
            ".p-text",
            { opacity: 0, y: 90 },
            {
              opacity: 1,
              y: 0,
              ease: "power3.out",
              duration: 0.8,
              scrollTrigger: { trigger: r.current, start: "top 55%", once: !0 },
            }
          );
      }, r);
      return () => i.revert();
    }, []),
    y.jsx("section", {
      "code-path": "src/pages/Characters.tsx:72:5",
      id: s.id,
      ref: r,
      className: "relative h-[300vh] scroll-mt-0",
      children: y.jsxs("div", {
        "code-path": "src/pages/Characters.tsx:73:7",
        className: "sticky top-0 h-screen overflow-hidden",
        children: [
          y.jsx("img", {
            "code-path": "src/pages/Characters.tsx:74:9",
            src: s.photos[0],
            alt: s.name,
            className:
              "p-img1 absolute inset-0 h-full w-full object-cover will-change-transform",
          }),
          y.jsx("img", {
            "code-path": "src/pages/Characters.tsx:75:9",
            src: s.photos[1],
            alt: "",
            className:
              "p-img2 absolute inset-0 h-full w-full object-cover opacity-0 will-change-transform",
          }),
          y.jsx("div", {
            "code-path": "src/pages/Characters.tsx:77:9",
            className: `pointer-events-none absolute inset-0 bg-gradient-to-r ${
              n ? "bg-gradient-to-l" : ""
            } from-black/70 via-black/25 to-transparent`,
          }),
          y.jsx("div", {
            "code-path": "src/pages/Characters.tsx:78:9",
            className:
              "pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent",
          }),
          y.jsx("div", {
            "code-path": "src/pages/Characters.tsx:81:9",
            className: `p-text absolute inset-y-0 flex w-full flex-col justify-center px-6 md:px-16 ${
              n ? "items-end text-right" : "items-start"
            }`,
            children: y.jsxs("div", {
              "code-path": "src/pages/Characters.tsx:86:11",
              className: "max-w-xl",
              children: [
                y.jsx("div", {
                  "code-path": "src/pages/Characters.tsx:87:13",
                  className:
                    "text-[11px] font-semibold tracking-[0.34em] text-[var(--pill-lime)] md:text-xs",
                  children: s.role,
                }),
                y.jsx("h2", {
                  "code-path": "src/pages/Characters.tsx:90:13",
                  className:
                    "font-display mt-2 text-[17vw] leading-[0.92] text-[var(--cream)] sm:text-[13vw] lg:text-[8.5vw]",
                  children: s.name,
                }),
                y.jsx("p", {
                  "code-path": "src/pages/Characters.tsx:93:13",
                  className:
                    "font-cond mt-5 text-xl font-semibold leading-snug text-white/80 md:text-3xl",
                  children: s.tagline,
                }),
                y.jsx("p", {
                  "code-path": "src/pages/Characters.tsx:96:13",
                  className:
                    "mt-4 max-w-md text-sm leading-[1.7] text-white/85 md:text-base",
                  children: s.bio[0],
                }),
              ],
            }),
          }),
        ],
      }),
    })
  );
}
function C4() {
  const s = j.useRef(null);
  return (
    j.useLayoutEffect(() => {
      xf(!0);
      const n = Ne.context(() => {
        Ne.fromTo(
          ".hero-tag",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
        ),
          Ne.fromTo(
            ".hero-mark",
            { opacity: 0, scale: 0.85 },
            {
              opacity: 1,
              scale: 1,
              duration: 1.1,
              ease: "power3.out",
              delay: 0.1,
            }
          ),
          Ne.fromTo(
            ".manifesto",
            { opacity: 0, y: 70 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".manifesto",
                start: "top 82%",
                once: !0,
              },
            }
          );
      }, s);
      return () => n.revert();
    }, []),
    y.jsxs("div", {
      "code-path": "src/pages/Characters.tsx:128:5",
      ref: s,
      className: "bg-[var(--night)] text-white",
      children: [
        y.jsx(vf, { "code-path": "src/pages/Characters.tsx:129:7" }),
        y.jsxs("section", {
          "code-path": "src/pages/Characters.tsx:132:7",
          className:
            "relative flex h-screen flex-col items-center justify-center px-6 text-center",
          children: [
            y.jsx("div", {
              "code-path": "src/pages/Characters.tsx:133:9",
              className: "hero-mark",
              children: y.jsx(yf, {
                "code-path": "src/pages/Characters.tsx:134:11",
                className: "w-[200px] md:w-[260px]",
              }),
            }),
            y.jsx("h1", {
              "code-path": "src/pages/Characters.tsx:136:9",
              className:
                "hero-tag font-display mt-10 max-w-5xl text-[9vw] leading-[1.04] sm:text-[6.5vw] lg:text-[4.6vw]",
              children: y.jsx("span", {
                "code-path": "src/pages/Characters.tsx:137:11",
                className: "text-[var(--cream)]",
                children: "The bandana stays on.",
              }),
            }),
            y.jsxs("div", {
              "code-path": "src/pages/Characters.tsx:141:9",
              className: "absolute bottom-8 flex flex-col items-center gap-1",
              children: [
                y.jsx("span", {
                  "code-path": "src/pages/Characters.tsx:142:11",
                  className: "text-[10px] tracking-[0.22em] text-white/55",
                  children: "SCROLL FOR MORE",
                }),
                y.jsx("svg", {
                  "code-path": "src/pages/Characters.tsx:143:11",
                  width: "22",
                  height: "12",
                  viewBox: "0 0 22 12",
                  className: "chevron-bob",
                  children: y.jsx("path", {
                    "code-path": "src/pages/Characters.tsx:144:13",
                    d: "M2 2 L11 10 L20 2",
                    fill: "none",
                    stroke: "#d5fc04",
                    strokeWidth: "2.4",
                    strokeLinecap: "round",
                  }),
                }),
              ],
            }),
          ],
        }),
        y.jsx(T4, { "code-path": "src/pages/Characters.tsx:150:7" }),
        y.jsx("section", {
          "code-path": "src/pages/Characters.tsx:153:7",
          className: "mx-auto max-w-3xl px-6 py-28 text-center md:py-40",
          children: y.jsx("p", {
            "code-path": "src/pages/Characters.tsx:154:9",
            className:
              "manifesto text-xl font-medium leading-[1.6] text-white/85 md:text-[28px] md:leading-[1.55]",
            children:
              "Four boyz. One block. Zero chance of behaving. They came up off the porch with nothing but a plan, a '64, and a name the whole city would learn to respect. This is the crew file — every member, every vice, every reason the hood runs the way it runs.",
          }),
        }),
        _m.map((n, r) =>
          y.jsx(
            E4,
            {
              "code-path": "src/pages/Characters.tsx:164:9",
              c: n,
              flip: r % 2 === 1,
            },
            n.id
          )
        ),
        y.jsxs("section", {
          "code-path": "src/pages/Characters.tsx:168:7",
          className:
            "flex flex-col items-center px-6 py-28 text-center md:py-36",
          children: [
            y.jsx("h2", {
              "code-path": "src/pages/Characters.tsx:169:9",
              className:
                "font-display text-[10vw] leading-[0.95] text-[var(--cream)] md:text-[4.6vw]",
              children: "THE BLOCK IS OURS.",
            }),
            y.jsx("p", {
              "code-path": "src/pages/Characters.tsx:172:9",
              className:
                "mt-4 max-w-md text-sm leading-relaxed text-white/60 md:text-base",
              children:
                "The crew file is public. The chart is live. Run with the Boyz or watch from the porch.",
            }),
            y.jsx("a", {
              "code-path": "src/pages/Characters.tsx:176:9",
              href: Va,
              target: "_blank",
              rel: "noreferrer",
              className:
                "mt-8 rounded-full bg-[var(--brand-green)] px-9 py-3.5 text-sm font-bold tracking-wide text-[var(--ink)] transition hover:brightness-110",
              children: "VIEW THE CHART",
            }),
          ],
        }),
        y.jsx(wf, { "code-path": "src/pages/Characters.tsx:186:7" }),
      ],
    })
  );
}
const A4 = "" + new URL("aerial-BxBIrMei.jpg", import.meta.url).href,
  N4 = "" + new URL("pump-lounge-aK4xx894.jpg", import.meta.url).href,
  Pb = "" + new URL("hq-DTxMwvb7.webp", import.meta.url).href,
  R4 = "" + new URL("car1-CuFPdi6x.jpg", import.meta.url).href,
  O4 = "" + new URL("car2-Cp47Mm8q.jpg", import.meta.url).href;
Ne.registerPlugin(Re);
const M4 = [
    {
      img: A4,
      script: "The Crossroads",
      name: "49TH & MEZA'S",
      desc: "Where the Boyz' hood ends and Solana cabal territory begins. Both sides keep eyes on this intersection.",
    },
    {
      img: N4,
      script: "Pump Lounge",
      name: "PUMP LOUNGE",
      desc: "Where the Solana cabal hangs out. Or at least, where they used to.",
    },
    {
      img: Pb,
      script: "The HQ",
      name: "HQ",
      desc: "Where the Boyz plot their crimes. Vlad gets the call — the Boyz go handle it.",
    },
    {
      img: xm,
      script: "Midnight Court",
      name: "MIDNIGHT COURT",
      desc: "Where the Boyz hoop after dark. More than one shootout with the Solana cabal has jumped off under these floodlights.",
    },
    {
      img: gm,
      script: "The Corner Store",
      name: "THE CORNER STORE",
      desc: "A front for the biggest crypto-for-cash operation in the city.",
    },
    {
      img: vm,
      script: "The Motel",
      name: "THE MOTEL",
      desc: "With the ops always hunting, the Boyz never sleep in the same room twice. Cash at the desk, no names, gone by sunrise.",
    },
    {
      img: bm,
      script: "The Vault",
      name: "THE VAULT",
      desc: "Where the math ends up. Landwolf's favorite room in the city, and the only one he never talks about.",
    },
  ],
  z4 = [
    {
      img: bf,
      script: "The '64",
      name: "THE '64",
      desc: "The crew's flagship — a '64 Chevy Impala that's caught more bullets than red lights. Ragtop down, hydraulics warm.",
    },
    {
      img: R4,
      script: "The Purple Whip",
      name: "THE PURPLE WHIP",
      desc: "Pepe's coupe. Loud engine, louder paint — nobody hears it twice.",
    },
    {
      img: O4,
      script: "The Silver Bullet",
      name: "THE SILVER BULLET",
      desc: "Brett's Evo — built 4G63, big turbo, 500 to all four wheels. Nothing in the city catches it off the line.",
    },
    {
      img: Sf,
      script: "49th Street",
      name: "49TH STREET",
      desc: "The Boyz' block. If ops set foot on this strip, the Boyz don't sleep until it's handled.",
    },
  ];
function Cv({ spot: s, rotate: n }) {
  return y.jsxs("div", {
    "code-path": "src/pages/Places.tsx:48:5",
    className: "postcard-wrap",
    style: { transform: `rotate(${n}deg)` },
    children: [
      y.jsx("div", {
        "code-path": "src/pages/Places.tsx:49:7",
        className: "postcard relative",
        children: y.jsxs("div", {
          "code-path": "src/pages/Places.tsx:50:9",
          className: "relative overflow-hidden",
          children: [
            y.jsx("img", {
              "code-path": "src/pages/Places.tsx:51:11",
              src: s.img,
              alt: s.name,
              className: "aspect-[16/9] w-full object-cover",
            }),
            y.jsx("span", {
              "code-path": "src/pages/Places.tsx:52:11",
              className:
                "font-script absolute inset-0 flex items-center justify-center px-6 text-center text-white",
              style: {
                fontSize: "clamp(2.4rem, 6vw, 4.6rem)",
                textShadow:
                  "0 3px 0 rgba(0,0,0,.55), 0 10px 28px rgba(0,0,0,.45)",
              },
              children: s.script,
            }),
          ],
        }),
      }),
      y.jsxs("div", {
        "code-path": "src/pages/Places.tsx:63:7",
        className: "mx-auto mt-6 max-w-xl text-center",
        children: [
          y.jsx("div", {
            "code-path": "src/pages/Places.tsx:64:9",
            className:
              "font-cond text-base font-semibold tracking-[0.28em] text-[var(--cream)] md:text-lg",
            children: s.name,
          }),
          y.jsx("p", {
            "code-path": "src/pages/Places.tsx:65:9",
            className:
              "mt-2 text-sm leading-relaxed text-white/80 md:text-base",
            children: s.desc,
          }),
        ],
      }),
    ],
  });
}
function j4() {
  const s = j.useRef(null);
  return (
    j.useLayoutEffect(() => {
      xf(!0);
      const n = Ne.context(() => {
        Ne.fromTo(
          ".visit-head",
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.15 }
        ),
          Ne.utils.toArray(".postcard-wrap").forEach((r) => {
            Ne.fromTo(
              r,
              { opacity: 0, y: 110, rotate: 0 },
              {
                opacity: 1,
                y: 0,
                rotate: Ne.getProperty(r, "rotate"),
                duration: 1,
                ease: "power3.out",
                scrollTrigger: { trigger: r, start: "top 85%", once: !0 },
              }
            );
          });
      }, s);
      return () => n.revert();
    }, []),
    y.jsxs("div", {
      "code-path": "src/pages/Places.tsx:94:5",
      ref: s,
      className: "bg-[var(--night)] text-white",
      children: [
        y.jsx(vf, { "code-path": "src/pages/Places.tsx:95:7" }),
        y.jsxs("section", {
          "code-path": "src/pages/Places.tsx:98:7",
          className:
            "mx-auto flex max-w-[1200px] flex-col gap-8 px-6 pb-16 pt-36 md:flex-row md:items-end md:justify-between md:pt-48",
          children: [
            y.jsxs("div", {
              "code-path": "src/pages/Places.tsx:99:9",
              className: "visit-head",
              children: [
                y.jsx("div", {
                  "code-path": "src/pages/Places.tsx:100:11",
                  className:
                    "font-cond text-sm font-semibold tracking-[0.4em] text-white/60",
                  children: "VISIT",
                }),
                y.jsx("h1", {
                  "code-path": "src/pages/Places.tsx:101:11",
                  className:
                    "font-display text-[13vw] leading-[0.9] text-[var(--cream)] md:text-[7vw]",
                  children: "THE HOOD",
                }),
              ],
            }),
            y.jsx("p", {
              "code-path": "src/pages/Places.tsx:105:9",
              className:
                "visit-head max-w-md text-base font-medium leading-[1.6] text-white/75 md:text-xl",
              children:
                "Where the Boyz post up, do business, and park the whips.",
            }),
          ],
        }),
        y.jsxs("section", {
          "code-path": "src/pages/Places.tsx:111:7",
          className: "mx-auto max-w-[1100px] px-6 pb-10",
          children: [
            y.jsx("h2", {
              "code-path": "src/pages/Places.tsx:112:9",
              className:
                "font-cond mb-14 text-center text-sm font-semibold tracking-[0.4em] text-[var(--pill-lime)]",
              children: "— THE SPOTS —",
            }),
            y.jsx("div", {
              "code-path": "src/pages/Places.tsx:115:9",
              className: "flex flex-col gap-20 md:gap-28",
              children: M4.map((n, r) =>
                y.jsx(
                  Cv,
                  {
                    "code-path": "src/pages/Places.tsx:117:13",
                    spot: n,
                    rotate: r % 2 ? 1.1 : -1.1,
                  },
                  n.name
                )
              ),
            }),
          ],
        }),
        y.jsxs("section", {
          "code-path": "src/pages/Places.tsx:123:7",
          className: "mx-auto max-w-[1100px] px-6 py-20",
          children: [
            y.jsx("h2", {
              "code-path": "src/pages/Places.tsx:124:9",
              className:
                "font-cond mb-14 text-center text-sm font-semibold tracking-[0.4em] text-[var(--pill-lime)]",
              children: "— THE WHIPS —",
            }),
            y.jsx("div", {
              "code-path": "src/pages/Places.tsx:127:9",
              className: "flex flex-col gap-20 md:gap-28",
              children: z4.map((n, r) =>
                y.jsx(
                  Cv,
                  {
                    "code-path": "src/pages/Places.tsx:129:13",
                    spot: n,
                    rotate: r % 2 ? -1.1 : 1.1,
                  },
                  n.name
                )
              ),
            }),
          ],
        }),
        y.jsxs("section", {
          "code-path": "src/pages/Places.tsx:135:7",
          className: "flex flex-col items-center px-6 py-24 text-center",
          children: [
            y.jsx("h2", {
              "code-path": "src/pages/Places.tsx:136:9",
              className:
                "font-display text-[13vw] leading-[0.95] text-[var(--cream)] md:text-[4.2vw]",
              children: "PUT YOUR BANDANA ON.",
            }),
            y.jsx("a", {
              "code-path": "src/pages/Places.tsx:139:9",
              href: Va,
              target: "_blank",
              rel: "noreferrer",
              className:
                "mt-8 rounded-full bg-[var(--brand-green)] px-9 py-3.5 text-sm font-bold tracking-wide text-[var(--ink)] transition hover:brightness-110",
              children: "VIEW THE CHART",
            }),
          ],
        }),
        y.jsx(wf, { "code-path": "src/pages/Places.tsx:149:7" }),
      ],
    })
  );
}
function Sm({ kicker: s, title: n, sub: r, children: i }) {
  const l = Qa();
  return (
    j.useEffect(() => {
      if (l.hash) {
        const c = document.querySelector(l.hash);
        if (c) {
          setTimeout(() => i4(c), 350);
          return;
        }
      }
      xf(!0);
    }, [l.pathname, l.hash]),
    y.jsxs("div", {
      "code-path": "src/components/PageShell.tsx:30:5",
      className: "min-h-screen bg-[var(--night)] text-white",
      children: [
        y.jsx(vf, { "code-path": "src/components/PageShell.tsx:31:7" }),
        y.jsx("div", {
          "code-path": "src/components/PageShell.tsx:32:7",
          className: "px-6 pb-6 pt-32 md:px-14 md:pt-44",
          children: y.jsxs("div", {
            "code-path": "src/components/PageShell.tsx:33:9",
            className: "mx-auto max-w-[1433px]",
            children: [
              y.jsx("div", {
                "code-path": "src/components/PageShell.tsx:34:11",
                className:
                  "text-[11px] font-semibold tracking-[0.3em] text-[var(--pill-lime)] md:text-xs",
                children: s,
              }),
              y.jsx("h1", {
                "code-path": "src/components/PageShell.tsx:35:11",
                className:
                  "font-display mt-3 text-[13vw] leading-[0.95] text-[var(--cream)] md:text-[6vw]",
                children: n,
              }),
              r &&
                y.jsx("p", {
                  "code-path": "src/components/PageShell.tsx:36:19",
                  className:
                    "mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base",
                  children: r,
                }),
            ],
          }),
        }),
        i,
        y.jsx(wf, { "code-path": "src/components/PageShell.tsx:40:7" }),
      ],
    })
  );
}
const D4 = [
  {
    to: "/characters",
    img: ym,
    kicker: "THE CREW",
    title: "CHARACTERS",
    desc: "Brett, Pepe, Andy and Landwolf — full files on every member of the Boyz.",
  },
  {
    to: "/places",
    img: _f,
    kicker: "THE WORLD",
    title: "PLACES",
    desc: "The blocks, the spots and the whips that make the hood what it is.",
  },
];
function k4() {
  return y.jsx(Sm, {
    "code-path": "src/pages/Explore.tsx:26:5",
    kicker: "PEOPLE & PLACES",
    title: "ONLY IN THE HOOD",
    children: y.jsx("div", {
      "code-path": "src/pages/Explore.tsx:30:7",
      className:
        "mx-auto grid max-w-[1433px] gap-6 px-6 pb-16 md:grid-cols-2 md:px-14",
      children: D4.map((s) =>
        y.jsxs(
          vl,
          {
            "code-path": "src/pages/Explore.tsx:32:11",
            to: s.to,
            className:
              "group relative block h-[62vh] overflow-hidden rounded-[26px] md:h-[70vh]",
            children: [
              y.jsx("img", {
                "code-path": "src/pages/Explore.tsx:37:13",
                src: s.img,
                alt: s.title,
                className:
                  "absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]",
              }),
              y.jsx("div", {
                "code-path": "src/pages/Explore.tsx:42:13",
                className:
                  "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 transition group-hover:from-black/70",
              }),
              y.jsxs("div", {
                "code-path": "src/pages/Explore.tsx:43:13",
                className: "absolute inset-x-0 bottom-0 p-8 md:p-12",
                children: [
                  y.jsx("div", {
                    "code-path": "src/pages/Explore.tsx:44:15",
                    className:
                      "text-[11px] font-semibold tracking-[0.3em] text-[var(--pill-lime)]",
                    children: s.kicker,
                  }),
                  y.jsx("div", {
                    "code-path": "src/pages/Explore.tsx:45:15",
                    className:
                      "font-display mt-2 text-5xl text-[var(--cream)] md:text-7xl",
                    children: s.title,
                  }),
                  y.jsx("p", {
                    "code-path": "src/pages/Explore.tsx:46:15",
                    className:
                      "mt-3 max-w-sm text-sm leading-relaxed text-white/70 md:text-base",
                    children: s.desc,
                  }),
                  y.jsxs("div", {
                    "code-path": "src/pages/Explore.tsx:47:15",
                    className:
                      "mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--pill-lime)] px-6 py-3 text-[13px] font-bold tracking-wide text-[var(--ink)] transition group-hover:brightness-110",
                    children: [
                      "DIVE IN ",
                      y.jsx("span", {
                        "code-path": "src/pages/Explore.tsx:48:25",
                        "aria-hidden": !0,
                        children: "→",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          },
          s.to
        )
      ),
    }),
  });
}
const L4 = [
    { src: mm, name: "The Crew", file: "boyz-keyart-crew.jpg" },
    { src: bf, name: "Night Cruise", file: "boyz-keyart-lowrider.jpg" },
    { src: _f, name: "The Hood From Above", file: "boyz-keyart-city.jpg" },
    { src: Sf, name: "49th Street", file: "boyz-keyart-street.jpg" },
    { src: gm, name: "The Corner Store", file: "boyz-keyart-store.jpg" },
    {
      src: pm,
      name: "Boyz N The Hood Trailer",
      file: "boyz-trailer1-poster.jpg",
    },
  ],
  H4 = [
    {
      src: "/media/videos/pill-running-from-the-boyz.mp4",
      poster: "/media/posters/pill-running-from-the-boyz.jpg",
      name: "Pill Running From The BOYZ",
      file: "pill-running-from-the-boyz.mp4",
    },
    {
      src: "/media/videos/mansion-hit.mp4",
      poster: "/media/posters/mansion-hit.jpg",
      name: "Mansion Hit",
      file: "mansion-hit.mp4",
    },
    {
      src: "/media/videos/boyz-in-the-hood-hype-video-2.mp4",
      poster: "/media/posters/boyz-in-the-hood-hype-video-2.jpg",
      name: "BOYZ In The Hood — Hype Video 2",
      file: "boyz-in-the-hood-hype-video-2.mp4",
    },
    {
      src: "/media/videos/boyz-recruit-chud.mp4",
      poster: "/media/posters/boyz-recruit-chud.jpg",
      name: "The BOYZ Recruit Chud",
      file: "boyz-recruit-chud.mp4",
    },
    {
      src: "/media/videos/vlad-enters.mp4",
      poster: "/media/posters/vlad-enters.jpg",
      name: "Vlad Enters",
      file: "vlad-enters.mp4",
    },
    {
      src: "/media/videos/truck-heist.mp4",
      poster: "/media/posters/truck-heist.jpg",
      name: "Truck Heist",
      file: "truck-heist.mp4",
    },
    {
      src: "/media/videos/boyz-in-the-hood-hype-video-3.mp4",
      poster: "/media/posters/boyz-in-the-hood-hype-video-3.jpg",
      name: "BOYZ In The Hood — Hype Video 3",
      file: "boyz-in-the-hood-hype-video-3.mp4",
    },
  ],
  wm = y.jsx("svg", {
    "code-path": "src/pages/Media.tsx:66:3",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": !0,
    children: y.jsx("path", {
      "code-path": "src/pages/Media.tsx:67:5",
      d: "M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 20h16",
    }),
  });
function Av({ src: s, name: n, file: r }) {
  return y.jsxs("a", {
    "code-path": "src/pages/Media.tsx:73:5",
    href: s,
    download: r,
    className: "group block overflow-hidden rounded-2xl bg-white/[0.03]",
    children: [
      y.jsx("span", {
        "code-path": "src/pages/Media.tsx:74:7",
        className: "block aspect-[16/10] overflow-hidden",
        children: y.jsx("img", {
          "code-path": "src/pages/Media.tsx:75:9",
          src: s,
          alt: n,
          className:
            "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]",
        }),
      }),
      y.jsxs("span", {
        "code-path": "src/pages/Media.tsx:77:7",
        className: "flex items-center justify-between gap-3 p-4",
        children: [
          y.jsx("span", {
            "code-path": "src/pages/Media.tsx:78:9",
            className: "truncate text-xs font-medium text-white/70 md:text-sm",
            children: n,
          }),
          y.jsxs("span", {
            "code-path": "src/pages/Media.tsx:79:9",
            className:
              "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[var(--pill-lime)] px-4 py-2 text-[11px] font-bold tracking-wide text-[var(--ink)] transition group-hover:brightness-110",
            children: [wm, " JPG"],
          }),
        ],
      }),
    ],
  });
}
function U4({ src: s, poster: n, name: r, file: i }) {
  return y.jsxs("article", {
    "code-path": "src/pages/Media.tsx:89:5",
    className: "overflow-hidden rounded-2xl bg-white/[0.03]",
    children: [
      y.jsx("div", {
        "code-path": "src/pages/Media.tsx:90:7",
        className: "aspect-video overflow-hidden bg-black",
        children: y.jsx("video", {
          "code-path": "src/pages/Media.tsx:91:9",
          src: s,
          poster: n,
          "aria-label": r,
          controls: !0,
          playsInline: !0,
          preload: "metadata",
          className: "h-full w-full object-cover",
        }),
      }),
      y.jsxs("div", {
        "code-path": "src/pages/Media.tsx:101:7",
        className: "flex items-center justify-between gap-3 p-4",
        children: [
          y.jsx("span", {
            "code-path": "src/pages/Media.tsx:102:9",
            className: "truncate text-xs font-medium text-white/70 md:text-sm",
            children: r,
          }),
          y.jsxs("a", {
            "code-path": "src/pages/Media.tsx:103:9",
            href: s,
            download: i,
            "aria-label": `Download ${r}`,
            className:
              "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[var(--pill-lime)] px-4 py-2 text-[11px] font-bold tracking-wide text-[var(--ink)] transition hover:brightness-110",
            children: [wm, " MP4"],
          }),
        ],
      }),
    ],
  });
}
function B4() {
  const s = _m.flatMap((n) =>
    n.photos.map((r, i) => ({
      src: r,
      name: `${n.name} — Shot ${i + 1}`,
      file: `boyz-${n.id}-${i + 1}.jpg`,
    }))
  );
  return y.jsx(Sm, {
    "code-path": "src/pages/Media.tsx:127:5",
    kicker: "DOWNLOADS",
    title: "MEDIA & ARTWORK",
    sub: "Videos, key art, character shots and the trailer. Grab what you need.",
    children: y.jsxs("div", {
      "code-path": "src/pages/Media.tsx:132:7",
      className: "mx-auto max-w-[1433px] px-6 pb-10 md:px-14",
      children: [
        y.jsxs("section", {
          "code-path": "src/pages/Media.tsx:133:9",
          className: "py-10",
          children: [
            y.jsx("h2", {
              "code-path": "src/pages/Media.tsx:134:11",
              className:
                "font-display mb-8 text-4xl text-[var(--cream)] md:text-5xl",
              children: "VIDEOS",
            }),
            y.jsx("div", {
              "code-path": "src/pages/Media.tsx:135:11",
              className: "grid gap-6 md:grid-cols-2",
              children: H4.map((n) =>
                y.jsx(
                  U4,
                  { "code-path": "src/pages/Media.tsx:136:36", ...n },
                  n.file
                )
              ),
            }),
          ],
        }),
        y.jsxs("section", {
          "code-path": "src/pages/Media.tsx:140:9",
          className: "py-10",
          children: [
            y.jsx("h2", {
              "code-path": "src/pages/Media.tsx:141:11",
              className:
                "font-display mb-8 text-4xl text-[var(--cream)] md:text-5xl",
              children: "KEY ART",
            }),
            y.jsx("div", {
              "code-path": "src/pages/Media.tsx:142:11",
              className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
              children: L4.map((n) =>
                y.jsx(
                  Av,
                  { "code-path": "src/pages/Media.tsx:143:33", ...n },
                  n.file
                )
              ),
            }),
          ],
        }),
        y.jsxs("section", {
          "code-path": "src/pages/Media.tsx:147:9",
          className: "py-10",
          children: [
            y.jsx("h2", {
              "code-path": "src/pages/Media.tsx:148:11",
              className:
                "font-display mb-8 text-4xl text-[var(--cream)] md:text-5xl",
              children: "THE BOYZ",
            }),
            y.jsx("div", {
              "code-path": "src/pages/Media.tsx:149:11",
              className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
              children: s.map((n) =>
                y.jsx(
                  Av,
                  { "code-path": "src/pages/Media.tsx:150:38", ...n },
                  n.file
                )
              ),
            }),
          ],
        }),
        y.jsxs("section", {
          "code-path": "src/pages/Media.tsx:154:9",
          className: "py-10",
          children: [
            y.jsx("h2", {
              "code-path": "src/pages/Media.tsx:155:11",
              className:
                "font-display mb-8 text-4xl text-[var(--cream)] md:text-5xl",
              children: "TRAILER",
            }),
            y.jsxs("div", {
              "code-path": "src/pages/Media.tsx:156:11",
              className: "group overflow-hidden rounded-2xl bg-white/[0.03]",
              children: [
                y.jsx("div", {
                  "code-path": "src/pages/Media.tsx:157:13",
                  className: "aspect-video overflow-hidden",
                  children: y.jsx("img", {
                    "code-path": "src/pages/Media.tsx:158:15",
                    src: Pb,
                    alt: "Boyz N The Hood Trailer",
                    className: "h-full w-full object-cover",
                  }),
                }),
                y.jsxs("div", {
                  "code-path": "src/pages/Media.tsx:160:13",
                  className: "flex items-center justify-between gap-3 p-4",
                  children: [
                    y.jsx("span", {
                      "code-path": "src/pages/Media.tsx:161:15",
                      className:
                        "truncate text-xs font-medium text-white/70 md:text-sm",
                      children: "Boyz N The Hood Trailer",
                    }),
                    y.jsxs("a", {
                      "code-path": "src/pages/Media.tsx:164:15",
                      href: "/trailer-1.mp4",
                      download: "boyz-trailer-1.mp4",
                      className:
                        "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[var(--pill-lime)] px-4 py-2 text-[11px] font-bold tracking-wide text-[var(--ink)] transition hover:brightness-110",
                      children: [wm, " MP4"],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const G4 = "https://boyz-in-the-hood.fly.dev".replace(/\/$/, "");
function Tm(s) {
  return `${G4}${s}`;
}
class Kb extends Error {
  status;
  code;
  retryAfter;
  constructor(n, r, i, l) {
    super(i),
      (this.name = "ApiError"),
      (this.status = n),
      (this.code = r),
      (this.retryAfter = l);
  }
}
function Nv(s, n) {
  const r = s.headers.get(n);
  if (r == null) return null;
  const i = Number(r);
  return Number.isFinite(i) ? i : null;
}
async function Y4(s) {
  const n = await fetch(Tm("/api/bandana"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(s),
    }),
    r = Nv(n, "x-ratelimit-remaining"),
    i = await n.json().catch(() => ({}));
  if (!n.ok) {
    const l = i.error ?? {};
    throw new Kb(
      n.status,
      l.code ?? "error",
      l.message ?? "Something went wrong. Please try again.",
      Nv(n, "retry-after")
    );
  }
  return { data: i, remaining: r };
}
async function Rv(s) {
  const n = s ? `?cursor=${encodeURIComponent(s)}` : "",
    r = await fetch(Tm(`/api/members${n}`));
  if (!r.ok) return { members: [], nextCursor: null };
  const l = await r.json().catch(() => ({}));
  return {
    members: Array.isArray(l.members) ? l.members : [],
    nextCursor: typeof l.nextCursor == "string" ? l.nextCursor : null,
  };
}
const $a = 1024,
  q4 = [
    { value: "random", label: "Random" },
    { value: "curb", label: "49th Street" },
    { value: "court", label: "Midnight Court" },
    { value: "lounge", label: "Pump Lounge" },
    { value: "diner", label: "Late-Nite Diner" },
    { value: "lowrider", label: "The '64" },
    { value: "laundromat", label: "Laundromat" },
    { value: "rooftop", label: "Rooftop" },
    { value: "alley", label: "The Alley" },
    { value: "atm", label: "ATM Run" },
    { value: "motel", label: "The Motel" },
    { value: "club", label: "VIP Club" },
    { value: "office", label: "The HQ" },
    { value: "wheel", label: "Behind the Wheel" },
    { value: "pool", label: "Pool Hall" },
    { value: "stoop", label: "The Stoop" },
    { value: "backseat", label: "Backseat" },
    { value: "vault", label: "The Vault" },
  ],
  X4 = [
    { value: "random", label: "Random" },
    { value: "heavy-lidded", label: "Heavy-Lidded" },
    { value: "mean-mug", label: "Mean Mug" },
    { value: "smirk", label: "Smirk" },
    { value: "stone-face", label: "Stone Face" },
    { value: "scowl", label: "Scowl" },
    { value: "defiant", label: "Defiant" },
    { value: "thousand-yard", label: "1000-Yard Stare" },
    { value: "half-smile", label: "Half Smile" },
  ];
function V4({ onPosted: s }) {
  const n = j.useRef(null),
    r = j.useRef(null),
    i = j.useRef(null),
    l = j.useRef(!1),
    [c, f] = j.useState(!1),
    [h, p] = j.useState(1),
    [m, g] = j.useState({ x: 0, y: 0 }),
    [v, b] = j.useState("random"),
    [_, w] = j.useState("random"),
    [S, E] = j.useState("pro"),
    [C, A] = j.useState("idle"),
    [R, D] = j.useState(null),
    [H, G] = j.useState(null),
    [z, L] = j.useState(null),
    [X, F] = j.useState(!1),
    [le, I] = j.useState(!1),
    xe = j.useRef(0),
    de = j.useCallback(() => {
      const ae = n.current,
        ie = ae?.getContext("2d");
      if (!ae || !ie) return;
      ie.clearRect(0, 0, $a, $a),
        (ie.fillStyle = "#0a0d1a"),
        ie.fillRect(0, 0, $a, $a);
      const Ce = r.current;
      if (Ce) {
        const be = Math.max($a / Ce.width, $a / Ce.height) * h,
          re = Ce.width * be,
          pe = Ce.height * be;
        ie.drawImage(Ce, ($a - re) / 2 + m.x, ($a - pe) / 2 + m.y, re, pe);
      }
    }, [h, m]);
  j.useEffect(() => {
    C !== "done" && de();
  }, [de, C]);
  const ce = (ae) => {
      if (!ae) return;
      const ie = URL.createObjectURL(ae),
        Ce = new Image();
      (Ce.src = ie),
        (Ce.onload = () => {
          (r.current = Ce),
            f(!0),
            p(1),
            g({ x: 0, y: 0 }),
            D(null),
            G(null),
            A("idle"),
            URL.revokeObjectURL(ie);
        });
    },
    U = (ae) => {
      !c ||
        C === "done" ||
        (ae.currentTarget.setPointerCapture(ae.pointerId),
        (i.current = {
          x: m.x,
          y: m.y,
          startX: ae.clientX,
          startY: ae.clientY,
        }));
    },
    Q = (ae) => {
      const ie = i.current;
      if (!ie) return;
      const Ce = ae.currentTarget.getBoundingClientRect(),
        be = $a / Ce.width;
      g({
        x: ie.x + (ae.clientX - ie.startX) * be,
        y: ie.y + (ae.clientY - ie.startY) * be,
      });
    },
    te = () => {
      i.current = null;
    },
    he = (ae) => {
      ae.preventDefault(), C !== "generating" && ((xe.current += 1), I(!0));
    },
    N = (ae) => {
      ae.preventDefault();
    },
    O = (ae) => {
      ae.preventDefault(),
        (xe.current = Math.max(0, xe.current - 1)),
        xe.current === 0 && I(!1);
    },
    K = (ae) => {
      if ((ae.preventDefault(), (xe.current = 0), I(!1), C === "generating"))
        return;
      const ie = Array.from(ae.dataTransfer.files).find((Ce) =>
        Ce.type.startsWith("image/")
      );
      ce(ie);
    },
    ne = async () => {
      const ae = n.current;
      if (!(!ae || !c || l.current)) {
        (l.current = !0), A("generating"), G(null);
        try {
          const ie = ae.toDataURL("image/jpeg", 0.9),
            { data: Ce, remaining: be } = await Y4({
              image: ie,
              scene: v === "random" ? void 0 : v,
              expression: _ === "random" ? void 0 : _,
              model: void 0,
            }),
            re =
              Ce.id ??
              `local-${Date.now()}-${Math.random().toString(36).slice(2)}`;
          D(Ce.imageUrl),
            L(be),
            be === 0 && F(!0),
            A("done"),
            s && s({ id: re, image: Ce.imageUrl, username: null });
        } catch (ie) {
          A("error"),
            ie instanceof Kb
              ? (G(ie.message),
                ie.status === 429 && F(!0),
                typeof ie.retryAfter == "number" && L(0))
              : G(
                  "Couldn't reach the server. Check your connection and try again."
                );
        } finally {
          l.current = !1;
        }
      }
    },
    ee = () => {
      D(null), G(null), A("idle");
    },
    se = async () => {
      if (R)
        try {
          const ie = await (await fetch(R)).blob(),
            Ce = URL.createObjectURL(ie),
            be = document.createElement("a");
          (be.href = Ce),
            (be.download = "boyz-pfp.png"),
            be.click(),
            setTimeout(() => URL.revokeObjectURL(Ce), 0);
        } catch {
          window.open(R, "_blank", "noopener");
        }
    },
    oe =
      "h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-[var(--brand-green)] disabled:cursor-not-allowed",
    ue = !c || C === "generating";
  return y.jsxs("div", {
    "code-path": "src/components/gang/PfpGenerator.tsx:220:5",
    className: "grid gap-8 md:grid-cols-[minmax(0,480px)_1fr] md:items-start",
    children: [
      y.jsxs("div", {
        "code-path": "src/components/gang/PfpGenerator.tsx:222:7",
        className: "relative",
        onDragEnter: he,
        onDragOver: N,
        onDragLeave: O,
        onDrop: K,
        children: [
          y.jsx("canvas", {
            "code-path": "src/components/gang/PfpGenerator.tsx:229:9",
            ref: n,
            width: $a,
            height: $a,
            onPointerDown: U,
            onPointerMove: Q,
            onPointerUp: te,
            className: `aspect-square w-full touch-none rounded-2xl border border-white/10 bg-[var(--night)] ${
              c && C !== "done" ? "cursor-grab active:cursor-grabbing" : ""
            } ${C === "done" ? "hidden" : ""}`,
          }),
          C === "done" &&
            R &&
            y.jsx("img", {
              "code-path": "src/components/gang/PfpGenerator.tsx:242:11",
              src: R,
              alt: "Your bandana PFP",
              className:
                "aspect-square w-full rounded-2xl border border-[var(--brand-green)]/40 object-cover",
            }),
          C === "generating" &&
            y.jsxs("div", {
              "code-path": "src/components/gang/PfpGenerator.tsx:250:11",
              className:
                "absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-black/65 backdrop-blur-sm",
              children: [
                y.jsx("div", {
                  "code-path": "src/components/gang/PfpGenerator.tsx:251:13",
                  className:
                    "h-8 w-8 animate-spin rounded-full border-2 border-white/25 border-t-[var(--brand-green)]",
                }),
                y.jsx("span", {
                  "code-path": "src/components/gang/PfpGenerator.tsx:252:13",
                  className:
                    "text-sm font-semibold tracking-wide text-[var(--cream)]",
                  children: "Tying the bandana on…",
                }),
                y.jsx("span", {
                  "code-path": "src/components/gang/PfpGenerator.tsx:253:13",
                  className: "text-xs text-white/50",
                  children: "This takes a few seconds.",
                }),
              ],
            }),
          le &&
            y.jsx("div", {
              "code-path": "src/components/gang/PfpGenerator.tsx:258:11",
              className:
                "pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-2xl border-2 border-dashed border-[var(--brand-green)] bg-[var(--brand-green)]/10 backdrop-blur-[2px]",
              children: y.jsx("span", {
                "code-path": "src/components/gang/PfpGenerator.tsx:259:13",
                className: "font-display text-3xl text-[var(--brand-green)]",
                children: "DROP IT",
              }),
            }),
          !c &&
            y.jsxs("label", {
              "code-path": "src/components/gang/PfpGenerator.tsx:264:11",
              className:
                "absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-white/15 text-center transition hover:border-[var(--brand-green)]/60",
              children: [
                y.jsx("span", {
                  "code-path": "src/components/gang/PfpGenerator.tsx:265:13",
                  className: "font-display text-2xl text-[var(--cream)]",
                  children: "DROP YOUR FACE IN",
                }),
                y.jsx("span", {
                  "code-path": "src/components/gang/PfpGenerator.tsx:266:13",
                  className:
                    "max-w-[240px] text-xs leading-relaxed text-white/55",
                  children:
                    "Upload a photo, frame your face, and we tie the bandana on.",
                }),
                y.jsx("span", {
                  "code-path": "src/components/gang/PfpGenerator.tsx:269:13",
                  className:
                    "mt-1 rounded-full bg-[var(--brand-green)] px-6 py-2.5 text-xs font-bold tracking-wide text-[var(--ink)]",
                  children: "UPLOAD PHOTO",
                }),
                y.jsx("input", {
                  "code-path": "src/components/gang/PfpGenerator.tsx:272:13",
                  type: "file",
                  accept: "image/*",
                  className: "hidden",
                  onChange: (ae) => ce(ae.target.files?.[0]),
                }),
              ],
            }),
        ],
      }),
      y.jsxs("div", {
        "code-path": "src/components/gang/PfpGenerator.tsx:278:7",
        className: `flex flex-col gap-6 ${
          c ? "" : "pointer-events-none opacity-40"
        }`,
        children: [
          y.jsxs("div", {
            "code-path": "src/components/gang/PfpGenerator.tsx:279:9",
            children: [
              y.jsx("div", {
                "code-path": "src/components/gang/PfpGenerator.tsx:280:11",
                className:
                  "mb-2 text-[11px] font-semibold tracking-[0.3em] text-white/50",
                children: "PHOTO ZOOM",
              }),
              y.jsx("input", {
                "code-path": "src/components/gang/PfpGenerator.tsx:281:11",
                type: "range",
                min: 0.6,
                max: 2.5,
                step: 0.01,
                value: h,
                disabled: ue || C === "done",
                onChange: (ae) => p(parseFloat(ae.target.value)),
                className: oe,
              }),
              y.jsx("div", {
                "code-path": "src/components/gang/PfpGenerator.tsx:286:11",
                className: "mt-1.5 text-[11px] text-white/40",
                children: "Drag the preview to reposition your face.",
              }),
            ],
          }),
          y.jsxs("div", {
            "code-path": "src/components/gang/PfpGenerator.tsx:289:9",
            children: [
              y.jsx("div", {
                "code-path": "src/components/gang/PfpGenerator.tsx:290:11",
                className:
                  "mb-2.5 text-[11px] font-semibold tracking-[0.3em] text-white/50",
                children: "SCENE",
              }),
              y.jsx("div", {
                "code-path": "src/components/gang/PfpGenerator.tsx:291:11",
                className: "flex flex-wrap gap-2",
                children: q4.map((ae) =>
                  y.jsx(
                    "button",
                    {
                      "code-path":
                        "src/components/gang/PfpGenerator.tsx:293:15",
                      type: "button",
                      onClick: () => b(ae.value),
                      disabled: ue || C === "done",
                      className: `rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-wide transition disabled:cursor-not-allowed ${
                        v === ae.value
                          ? "bg-[var(--brand-green)] text-[var(--ink)]"
                          : "border border-white/20 text-white/70 hover:border-white/50 hover:text-white disabled:hover:border-white/20 disabled:hover:text-white/70"
                      }`,
                      children: ae.label.toUpperCase(),
                    },
                    ae.value
                  )
                ),
              }),
            ],
          }),
          y.jsxs("div", {
            "code-path": "src/components/gang/PfpGenerator.tsx:310:9",
            children: [
              y.jsx("div", {
                "code-path": "src/components/gang/PfpGenerator.tsx:311:11",
                className:
                  "mb-2.5 text-[11px] font-semibold tracking-[0.3em] text-white/50",
                children: "MOOD",
              }),
              y.jsx("div", {
                "code-path": "src/components/gang/PfpGenerator.tsx:312:11",
                className: "flex flex-wrap gap-2",
                children: X4.map((ae) =>
                  y.jsx(
                    "button",
                    {
                      "code-path":
                        "src/components/gang/PfpGenerator.tsx:314:15",
                      type: "button",
                      onClick: () => w(ae.value),
                      disabled: ue || C === "done",
                      className: `rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-wide transition disabled:cursor-not-allowed ${
                        _ === ae.value
                          ? "bg-[var(--brand-green)] text-[var(--ink)]"
                          : "border border-white/20 text-white/70 hover:border-white/50 hover:text-white disabled:hover:border-white/20 disabled:hover:text-white/70"
                      }`,
                      children: ae.label.toUpperCase(),
                    },
                    ae.value
                  )
                ),
              }),
            ],
          }),
          !1,
          y.jsxs("div", {
            "code-path": "src/components/gang/PfpGenerator.tsx:356:9",
            className: "flex flex-wrap items-center gap-3 pt-2",
            children: [
              C === "done"
                ? y.jsx("button", {
                    "code-path": "src/components/gang/PfpGenerator.tsx:358:13",
                    type: "button",
                    onClick: ee,
                    className:
                      "rounded-full bg-[var(--brand-green)] px-8 py-3.5 text-sm font-bold tracking-wide text-[var(--ink)] transition hover:brightness-110",
                    children: "MAKE ANOTHER",
                  })
                : y.jsx("button", {
                    "code-path": "src/components/gang/PfpGenerator.tsx:365:13",
                    type: "button",
                    onClick: ne,
                    disabled: ue || X,
                    className: `rounded-full px-8 py-3.5 text-sm font-bold tracking-wide transition ${
                      ue || X
                        ? "cursor-not-allowed bg-white/10 text-white/35"
                        : "bg-[var(--brand-green)] text-[var(--ink)] hover:brightness-110"
                    }`,
                    children: C === "generating" ? "GENERATING…" : "GENERATE",
                  }),
              y.jsx("button", {
                "code-path": "src/components/gang/PfpGenerator.tsx:377:11",
                type: "button",
                onClick: se,
                disabled: C !== "done",
                className: `rounded-full px-8 py-3.5 text-sm font-bold tracking-wide transition ${
                  C === "done"
                    ? "bg-[var(--pill-lime)] text-[var(--ink)] hover:brightness-110"
                    : "cursor-not-allowed bg-white/10 text-white/35"
                }`,
                children: "DOWNLOAD PFP",
              }),
              y.jsxs("label", {
                "code-path": "src/components/gang/PfpGenerator.tsx:388:11",
                className:
                  "cursor-pointer rounded-full border border-white/20 px-6 py-3 text-[13px] font-bold tracking-wide text-white transition hover:border-white/50 hover:bg-white/5",
                children: [
                  "NEW PHOTO",
                  y.jsx("input", {
                    "code-path": "src/components/gang/PfpGenerator.tsx:390:13",
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: (ae) => ce(ae.target.files?.[0]),
                  }),
                ],
              }),
            ],
          }),
          H &&
            y.jsx("div", {
              "code-path": "src/components/gang/PfpGenerator.tsx:394:19",
              className: "text-xs text-red-400",
              children: H,
            }),
          C === "done" &&
            !H &&
            y.jsx("div", {
              "code-path": "src/components/gang/PfpGenerator.tsx:396:11",
              className: "text-xs text-[var(--brand-green)]",
              children: "Bandana's on. Download it and rep the set.",
            }),
          z != null &&
            y.jsx("div", {
              "code-path": "src/components/gang/PfpGenerator.tsx:399:11",
              className: "text-[11px] text-white/40",
              children:
                z > 0 ? `${z} left today.` : "That's your last one for today.",
            }),
        ],
      }),
    ],
  });
}
function Z4(s) {
  return Object.prototype.toString.call(s) === "[object Object]";
}
function Ov(s) {
  return Z4(s) || Array.isArray(s);
}
function Q4() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function Em(s, n) {
  const r = Object.keys(s),
    i = Object.keys(n);
  if (r.length !== i.length) return !1;
  const l = JSON.stringify(Object.keys(s.breakpoints || {})),
    c = JSON.stringify(Object.keys(n.breakpoints || {}));
  return l !== c
    ? !1
    : r.every((f) => {
        const h = s[f],
          p = n[f];
        return typeof h == "function"
          ? `${h}` == `${p}`
          : !Ov(h) || !Ov(p)
          ? h === p
          : Em(h, p);
      });
}
function Mv(s) {
  return s
    .concat()
    .sort((n, r) => (n.name > r.name ? 1 : -1))
    .map((n) => n.options);
}
function P4(s, n) {
  if (s.length !== n.length) return !1;
  const r = Mv(s),
    i = Mv(n);
  return r.every((l, c) => {
    const f = i[c];
    return Em(l, f);
  });
}
function Cm(s) {
  return typeof s == "number";
}
function Op(s) {
  return typeof s == "string";
}
function Tf(s) {
  return typeof s == "boolean";
}
function zv(s) {
  return Object.prototype.toString.call(s) === "[object Object]";
}
function Dt(s) {
  return Math.abs(s);
}
function Am(s) {
  return Math.sign(s);
}
function qo(s, n) {
  return Dt(s - n);
}
function K4(s, n) {
  if (s === 0 || n === 0 || Dt(s) <= Dt(n)) return 0;
  const r = qo(Dt(s), Dt(n));
  return Dt(r / s);
}
function F4(s) {
  return Math.round(s * 100) / 100;
}
function tc(s) {
  return nc(s).map(Number);
}
function ti(s) {
  return s[oc(s)];
}
function oc(s) {
  return Math.max(0, s.length - 1);
}
function Nm(s, n) {
  return n === oc(s);
}
function jv(s, n = 0) {
  return Array.from(Array(s), (r, i) => n + i);
}
function nc(s) {
  return Object.keys(s);
}
function Fb(s, n) {
  return [s, n].reduce(
    (r, i) => (
      nc(i).forEach((l) => {
        const c = r[l],
          f = i[l],
          h = zv(c) && zv(f);
        r[l] = h ? Fb(c, f) : f;
      }),
      r
    ),
    {}
  );
}
function Mp(s, n) {
  return typeof n.MouseEvent < "u" && s instanceof n.MouseEvent;
}
function J4(s, n) {
  const r = { start: i, center: l, end: c };
  function i() {
    return 0;
  }
  function l(p) {
    return c(p) / 2;
  }
  function c(p) {
    return n - p;
  }
  function f(p, m) {
    return Op(s) ? r[s](p) : s(n, p, m);
  }
  return { measure: f };
}
function ac() {
  let s = [];
  function n(l, c, f, h = { passive: !0 }) {
    let p;
    if ("addEventListener" in l)
      l.addEventListener(c, f, h), (p = () => l.removeEventListener(c, f, h));
    else {
      const m = l;
      m.addListener(f), (p = () => m.removeListener(f));
    }
    return s.push(p), i;
  }
  function r() {
    s = s.filter((l) => l());
  }
  const i = { add: n, clear: r };
  return i;
}
function W4(s, n, r, i) {
  const l = ac(),
    c = 1e3 / 60;
  let f = null,
    h = 0,
    p = 0;
  function m() {
    l.add(s, "visibilitychange", () => {
      s.hidden && w();
    });
  }
  function g() {
    _(), l.clear();
  }
  function v(E) {
    if (!p) return;
    f || ((f = E), r(), r());
    const C = E - f;
    for (f = E, h += C; h >= c; ) r(), (h -= c);
    const A = h / c;
    i(A), p && (p = n.requestAnimationFrame(v));
  }
  function b() {
    p || (p = n.requestAnimationFrame(v));
  }
  function _() {
    n.cancelAnimationFrame(p), (f = null), (h = 0), (p = 0);
  }
  function w() {
    (f = null), (h = 0);
  }
  return { init: m, destroy: g, start: b, stop: _, update: r, render: i };
}
function $4(s, n) {
  const r = n === "rtl",
    i = s === "y",
    l = i ? "y" : "x",
    c = i ? "x" : "y",
    f = !i && r ? -1 : 1,
    h = g(),
    p = v();
  function m(w) {
    const { height: S, width: E } = w;
    return i ? S : E;
  }
  function g() {
    return i ? "top" : r ? "right" : "left";
  }
  function v() {
    return i ? "bottom" : r ? "left" : "right";
  }
  function b(w) {
    return w * f;
  }
  return {
    scroll: l,
    cross: c,
    startEdge: h,
    endEdge: p,
    measureSize: m,
    direction: b,
  };
}
function xl(s = 0, n = 0) {
  const r = Dt(s - n);
  function i(m) {
    return m < s;
  }
  function l(m) {
    return m > n;
  }
  function c(m) {
    return i(m) || l(m);
  }
  function f(m) {
    return c(m) ? (i(m) ? s : n) : m;
  }
  function h(m) {
    return r ? m - r * Math.ceil((m - n) / r) : m;
  }
  return {
    length: r,
    max: n,
    min: s,
    constrain: f,
    reachedAny: c,
    reachedMax: l,
    reachedMin: i,
    removeOffset: h,
  };
}
function Jb(s, n, r) {
  const { constrain: i } = xl(0, s),
    l = s + 1;
  let c = f(n);
  function f(b) {
    return r ? Dt((l + b) % l) : i(b);
  }
  function h() {
    return c;
  }
  function p(b) {
    return (c = f(b)), v;
  }
  function m(b) {
    return g().set(h() + b);
  }
  function g() {
    return Jb(s, h(), r);
  }
  const v = { get: h, set: p, add: m, clone: g };
  return v;
}
function I4(s, n, r, i, l, c, f, h, p, m, g, v, b, _, w, S, E, C, A) {
  const { cross: R, direction: D } = s,
    H = ["INPUT", "SELECT", "TEXTAREA"],
    G = { passive: !1 },
    z = ac(),
    L = ac(),
    X = xl(50, 225).constrain(_.measure(20)),
    F = { mouse: 300, touch: 400 },
    le = { mouse: 500, touch: 600 },
    I = w ? 43 : 25;
  let xe = !1,
    de = 0,
    ce = 0,
    U = !1,
    Q = !1,
    te = !1,
    he = !1;
  function N(re) {
    if (!A) return;
    function pe(We) {
      (Tf(A) || A(re, We)) && oe(We);
    }
    const Se = n;
    z.add(Se, "dragstart", (We) => We.preventDefault(), G)
      .add(Se, "touchmove", () => {}, G)
      .add(Se, "touchend", () => {})
      .add(Se, "touchstart", pe)
      .add(Se, "mousedown", pe)
      .add(Se, "touchcancel", ae)
      .add(Se, "contextmenu", ae)
      .add(Se, "click", ie, !0);
  }
  function O() {
    z.clear(), L.clear();
  }
  function K() {
    const re = he ? r : n;
    L.add(re, "touchmove", ue, G)
      .add(re, "touchend", ae)
      .add(re, "mousemove", ue, G)
      .add(re, "mouseup", ae);
  }
  function ne(re) {
    const pe = re.nodeName || "";
    return H.includes(pe);
  }
  function ee() {
    return (w ? le : F)[he ? "mouse" : "touch"];
  }
  function se(re, pe) {
    const Se = v.add(Am(re) * -1),
      We = g.byDistance(re, !w).distance;
    return w || Dt(re) < X
      ? We
      : E && pe
      ? We * 0.5
      : g.byIndex(Se.get(), 0).distance;
  }
  function oe(re) {
    const pe = Mp(re, i);
    (he = pe),
      (te = w && pe && !re.buttons && xe),
      (xe = qo(l.get(), f.get()) >= 2),
      !(pe && re.button !== 0) &&
        (ne(re.target) ||
          ((U = !0),
          c.pointerDown(re),
          m.useFriction(0).useDuration(0),
          l.set(f),
          K(),
          (de = c.readPoint(re)),
          (ce = c.readPoint(re, R)),
          b.emit("pointerDown")));
  }
  function ue(re) {
    if (!Mp(re, i) && re.touches.length >= 2) return ae(re);
    const Se = c.readPoint(re),
      We = c.readPoint(re, R),
      ot = qo(Se, de),
      Z = qo(We, ce);
    if (!Q && !he && (!re.cancelable || ((Q = ot > Z), !Q))) return ae(re);
    const St = c.pointerMove(re);
    ot > S && (te = !0),
      m.useFriction(0.3).useDuration(0.75),
      h.start(),
      l.add(D(St)),
      re.preventDefault();
  }
  function ae(re) {
    const Se = g.byDistance(0, !1).index !== v.get(),
      We = c.pointerUp(re) * ee(),
      ot = se(D(We), Se),
      Z = K4(We, ot),
      St = I - 10 * Z,
      Lt = C + Z / 50;
    (Q = !1),
      (U = !1),
      L.clear(),
      m.useDuration(St).useFriction(Lt),
      p.distance(ot, !w),
      (he = !1),
      b.emit("pointerUp");
  }
  function ie(re) {
    te && (re.stopPropagation(), re.preventDefault(), (te = !1));
  }
  function Ce() {
    return U;
  }
  return { init: N, destroy: O, pointerDown: Ce };
}
function eT(s, n) {
  let i, l;
  function c(v) {
    return v.timeStamp;
  }
  function f(v, b) {
    const w = `client${(b || s.scroll) === "x" ? "X" : "Y"}`;
    return (Mp(v, n) ? v : v.touches[0])[w];
  }
  function h(v) {
    return (i = v), (l = v), f(v);
  }
  function p(v) {
    const b = f(v) - f(l),
      _ = c(v) - c(i) > 170;
    return (l = v), _ && (i = v), b;
  }
  function m(v) {
    if (!i || !l) return 0;
    const b = f(l) - f(i),
      _ = c(v) - c(i),
      w = c(v) - c(l) > 170,
      S = b / _;
    return _ && !w && Dt(S) > 0.1 ? S : 0;
  }
  return { pointerDown: h, pointerMove: p, pointerUp: m, readPoint: f };
}
function tT() {
  function s(r) {
    const { offsetTop: i, offsetLeft: l, offsetWidth: c, offsetHeight: f } = r;
    return {
      top: i,
      right: l + c,
      bottom: i + f,
      left: l,
      width: c,
      height: f,
    };
  }
  return { measure: s };
}
function nT(s) {
  function n(i) {
    return s * (i / 100);
  }
  return { measure: n };
}
function aT(s, n, r, i, l, c, f) {
  const h = [s].concat(i);
  let p,
    m,
    g = [],
    v = !1;
  function b(E) {
    return l.measureSize(f.measure(E));
  }
  function _(E) {
    if (!c) return;
    (m = b(s)), (g = i.map(b));
    function C(A) {
      for (const R of A) {
        if (v) return;
        const D = R.target === s,
          H = i.indexOf(R.target),
          G = D ? m : g[H],
          z = b(D ? s : i[H]);
        if (Dt(z - G) >= 0.5) {
          E.reInit(), n.emit("resize");
          break;
        }
      }
    }
    (p = new ResizeObserver((A) => {
      (Tf(c) || c(E, A)) && C(A);
    })),
      r.requestAnimationFrame(() => {
        h.forEach((A) => p.observe(A));
      });
  }
  function w() {
    (v = !0), p && p.disconnect();
  }
  return { init: _, destroy: w };
}
function iT(s, n, r, i, l, c) {
  let f = 0,
    h = 0,
    p = l,
    m = c,
    g = s.get(),
    v = 0;
  function b() {
    const G = i.get() - s.get(),
      z = !p;
    let L = 0;
    return (
      z
        ? ((f = 0), r.set(i), s.set(i), (L = G))
        : (r.set(s), (f += G / p), (f *= m), (g += f), s.add(f), (L = g - v)),
      (h = Am(L)),
      (v = g),
      H
    );
  }
  function _() {
    const G = i.get() - n.get();
    return Dt(G) < 0.001;
  }
  function w() {
    return p;
  }
  function S() {
    return h;
  }
  function E() {
    return f;
  }
  function C() {
    return R(l);
  }
  function A() {
    return D(c);
  }
  function R(G) {
    return (p = G), H;
  }
  function D(G) {
    return (m = G), H;
  }
  const H = {
    direction: S,
    duration: w,
    velocity: E,
    seek: b,
    settled: _,
    useBaseFriction: A,
    useBaseDuration: C,
    useFriction: D,
    useDuration: R,
  };
  return H;
}
function rT(s, n, r, i, l) {
  const c = l.measure(10),
    f = l.measure(50),
    h = xl(0.1, 0.99);
  let p = !1;
  function m() {
    return !(p || !s.reachedAny(r.get()) || !s.reachedAny(n.get()));
  }
  function g(_) {
    if (!m()) return;
    const w = s.reachedMin(n.get()) ? "min" : "max",
      S = Dt(s[w] - n.get()),
      E = r.get() - n.get(),
      C = h.constrain(S / f);
    r.subtract(E * C),
      !_ &&
        Dt(E) < c &&
        (r.set(s.constrain(r.get())), i.useDuration(25).useBaseFriction());
  }
  function v(_) {
    p = !_;
  }
  return { shouldConstrain: m, constrain: g, toggleActive: v };
}
function lT(s, n, r, i, l) {
  const c = xl(-n + s, 0),
    f = v(),
    h = g(),
    p = b();
  function m(w, S) {
    return qo(w, S) <= 1;
  }
  function g() {
    const w = f[0],
      S = ti(f),
      E = f.lastIndexOf(w),
      C = f.indexOf(S) + 1;
    return xl(E, C);
  }
  function v() {
    return r
      .map((w, S) => {
        const { min: E, max: C } = c,
          A = c.constrain(w),
          R = !S,
          D = Nm(r, S);
        return R ? C : D || m(E, A) ? E : m(C, A) ? C : A;
      })
      .map((w) => parseFloat(w.toFixed(3)));
  }
  function b() {
    if (n <= s + l) return [c.max];
    if (i === "keepSnaps") return f;
    const { min: w, max: S } = h;
    return f.slice(w, S);
  }
  return { snapsContained: p, scrollContainLimit: h };
}
function sT(s, n, r) {
  const i = n[0],
    l = r ? i - s : ti(n);
  return { limit: xl(l, i) };
}
function oT(s, n, r, i) {
  const c = n.min + 0.1,
    f = n.max + 0.1,
    { reachedMin: h, reachedMax: p } = xl(c, f);
  function m(b) {
    return b === 1 ? p(r.get()) : b === -1 ? h(r.get()) : !1;
  }
  function g(b) {
    if (!m(b)) return;
    const _ = s * (b * -1);
    i.forEach((w) => w.add(_));
  }
  return { loop: g };
}
function cT(s) {
  const { max: n, length: r } = s;
  function i(c) {
    const f = c - n;
    return r ? f / -r : 0;
  }
  return { get: i };
}
function uT(s, n, r, i, l) {
  const { startEdge: c, endEdge: f } = s,
    { groupSlides: h } = l,
    p = v().map(n.measure),
    m = b(),
    g = _();
  function v() {
    return h(i)
      .map((S) => ti(S)[f] - S[0][c])
      .map(Dt);
  }
  function b() {
    return i.map((S) => r[c] - S[c]).map((S) => -Dt(S));
  }
  function _() {
    return h(m)
      .map((S) => S[0])
      .map((S, E) => S + p[E]);
  }
  return { snaps: m, snapsAligned: g };
}
function fT(s, n, r, i, l, c) {
  const { groupSlides: f } = l,
    { min: h, max: p } = i,
    m = g();
  function g() {
    const b = f(c),
      _ = !s || n === "keepSnaps";
    return r.length === 1
      ? [c]
      : _
      ? b
      : b.slice(h, p).map((w, S, E) => {
          const C = !S,
            A = Nm(E, S);
          if (C) {
            const R = ti(E[0]) + 1;
            return jv(R);
          }
          if (A) {
            const R = oc(c) - ti(E)[0] + 1;
            return jv(R, ti(E)[0]);
          }
          return w;
        });
  }
  return { slideRegistry: m };
}
function dT(s, n, r, i, l) {
  const { reachedAny: c, removeOffset: f, constrain: h } = i;
  function p(w) {
    return w.concat().sort((S, E) => Dt(S) - Dt(E))[0];
  }
  function m(w) {
    const S = s ? f(w) : h(w),
      E = n
        .map((A, R) => ({ diff: g(A - S, 0), index: R }))
        .sort((A, R) => Dt(A.diff) - Dt(R.diff)),
      { index: C } = E[0];
    return { index: C, distance: S };
  }
  function g(w, S) {
    const E = [w, w + r, w - r];
    if (!s) return w;
    if (!S) return p(E);
    const C = E.filter((A) => Am(A) === S);
    return C.length ? p(C) : ti(E) - r;
  }
  function v(w, S) {
    const E = n[w] - l.get(),
      C = g(E, S);
    return { index: w, distance: C };
  }
  function b(w, S) {
    const E = l.get() + w,
      { index: C, distance: A } = m(E),
      R = !s && c(E);
    if (!S || R) return { index: C, distance: w };
    const D = n[C] - A,
      H = w + g(D, 0);
    return { index: C, distance: H };
  }
  return { byDistance: b, byIndex: v, shortcut: g };
}
function hT(s, n, r, i, l, c, f) {
  function h(v) {
    const b = v.distance,
      _ = v.index !== n.get();
    c.add(b),
      b && (i.duration() ? s.start() : (s.update(), s.render(1), s.update())),
      _ && (r.set(n.get()), n.set(v.index), f.emit("select"));
  }
  function p(v, b) {
    const _ = l.byDistance(v, b);
    h(_);
  }
  function m(v, b) {
    const _ = n.clone().set(v),
      w = l.byIndex(_.get(), b);
    h(w);
  }
  return { distance: p, index: m };
}
function pT(s, n, r, i, l, c, f, h) {
  const p = { passive: !0, capture: !0 };
  let m = 0;
  function g(_) {
    if (!h) return;
    function w(S) {
      if (new Date().getTime() - m > 10) return;
      f.emit("slideFocusStart"), (s.scrollLeft = 0);
      const A = r.findIndex((R) => R.includes(S));
      Cm(A) && (l.useDuration(0), i.index(A, 0), f.emit("slideFocus"));
    }
    c.add(document, "keydown", v, !1),
      n.forEach((S, E) => {
        c.add(
          S,
          "focus",
          (C) => {
            (Tf(h) || h(_, C)) && w(E);
          },
          p
        );
      });
  }
  function v(_) {
    _.code === "Tab" && (m = new Date().getTime());
  }
  return { init: g };
}
function Ao(s) {
  let n = s;
  function r() {
    return n;
  }
  function i(p) {
    n = f(p);
  }
  function l(p) {
    n += f(p);
  }
  function c(p) {
    n -= f(p);
  }
  function f(p) {
    return Cm(p) ? p : p.get();
  }
  return { get: r, set: i, add: l, subtract: c };
}
function Wb(s, n) {
  const r = s.scroll === "x" ? f : h,
    i = n.style;
  let l = null,
    c = !1;
  function f(b) {
    return `translate3d(${b}px,0px,0px)`;
  }
  function h(b) {
    return `translate3d(0px,${b}px,0px)`;
  }
  function p(b) {
    if (c) return;
    const _ = F4(s.direction(b));
    _ !== l && ((i.transform = r(_)), (l = _));
  }
  function m(b) {
    c = !b;
  }
  function g() {
    c ||
      ((i.transform = ""),
      n.getAttribute("style") || n.removeAttribute("style"));
  }
  return { clear: g, to: p, toggleActive: m };
}
function mT(s, n, r, i, l, c, f, h, p) {
  const g = tc(l),
    v = tc(l).reverse(),
    b = C().concat(A());
  function _(z, L) {
    return z.reduce((X, F) => X - l[F], L);
  }
  function w(z, L) {
    return z.reduce((X, F) => (_(X, L) > 0 ? X.concat([F]) : X), []);
  }
  function S(z) {
    return c.map((L, X) => ({
      start: L - i[X] + 0.5 + z,
      end: L + n - 0.5 + z,
    }));
  }
  function E(z, L, X) {
    const F = S(L);
    return z.map((le) => {
      const I = X ? 0 : -r,
        xe = X ? r : 0,
        de = X ? "end" : "start",
        ce = F[le][de];
      return {
        index: le,
        loopPoint: ce,
        slideLocation: Ao(-1),
        translate: Wb(s, p[le]),
        target: () => (h.get() > ce ? I : xe),
      };
    });
  }
  function C() {
    const z = f[0],
      L = w(v, z);
    return E(L, r, !1);
  }
  function A() {
    const z = n - f[0] - 1,
      L = w(g, z);
    return E(L, -r, !0);
  }
  function R() {
    return b.every(({ index: z }) => {
      const L = g.filter((X) => X !== z);
      return _(L, n) <= 0.1;
    });
  }
  function D() {
    b.forEach((z) => {
      const { target: L, translate: X, slideLocation: F } = z,
        le = L();
      le !== F.get() && (X.to(le), F.set(le));
    });
  }
  function H() {
    b.forEach((z) => z.translate.clear());
  }
  return { canLoop: R, clear: H, loop: D, loopPoints: b };
}
function gT(s, n, r) {
  let i,
    l = !1;
  function c(p) {
    if (!r) return;
    function m(g) {
      for (const v of g)
        if (v.type === "childList") {
          p.reInit(), n.emit("slidesChanged");
          break;
        }
    }
    (i = new MutationObserver((g) => {
      l || ((Tf(r) || r(p, g)) && m(g));
    })),
      i.observe(s, { childList: !0 });
  }
  function f() {
    i && i.disconnect(), (l = !0);
  }
  return { init: c, destroy: f };
}
function xT(s, n, r, i) {
  const l = {};
  let c = null,
    f = null,
    h,
    p = !1;
  function m() {
    (h = new IntersectionObserver(
      (w) => {
        p ||
          (w.forEach((S) => {
            const E = n.indexOf(S.target);
            l[E] = S;
          }),
          (c = null),
          (f = null),
          r.emit("slidesInView"));
      },
      { root: s.parentElement, threshold: i }
    )),
      n.forEach((w) => h.observe(w));
  }
  function g() {
    h && h.disconnect(), (p = !0);
  }
  function v(w) {
    return nc(l).reduce((S, E) => {
      const C = parseInt(E),
        { isIntersecting: A } = l[C];
      return ((w && A) || (!w && !A)) && S.push(C), S;
    }, []);
  }
  function b(w = !0) {
    if (w && c) return c;
    if (!w && f) return f;
    const S = v(w);
    return w && (c = S), w || (f = S), S;
  }
  return { init: m, destroy: g, get: b };
}
function vT(s, n, r, i, l, c) {
  const { measureSize: f, startEdge: h, endEdge: p } = s,
    m = r[0] && l,
    g = w(),
    v = S(),
    b = r.map(f),
    _ = E();
  function w() {
    if (!m) return 0;
    const A = r[0];
    return Dt(n[h] - A[h]);
  }
  function S() {
    if (!m) return 0;
    const A = c.getComputedStyle(ti(i));
    return parseFloat(A.getPropertyValue(`margin-${p}`));
  }
  function E() {
    return r
      .map((A, R, D) => {
        const H = !R,
          G = Nm(D, R);
        return H ? b[R] + g : G ? b[R] + v : D[R + 1][h] - A[h];
      })
      .map(Dt);
  }
  return { slideSizes: b, slideSizesWithGaps: _, startGap: g, endGap: v };
}
function yT(s, n, r, i, l, c, f, h, p) {
  const { startEdge: m, endEdge: g, direction: v } = s,
    b = Cm(r);
  function _(C, A) {
    return tc(C)
      .filter((R) => R % A === 0)
      .map((R) => C.slice(R, R + A));
  }
  function w(C) {
    return C.length
      ? tc(C)
          .reduce((A, R, D) => {
            const H = ti(A) || 0,
              G = H === 0,
              z = R === oc(C),
              L = l[m] - c[H][m],
              X = l[m] - c[R][g],
              F = !i && G ? v(f) : 0,
              le = !i && z ? v(h) : 0,
              I = Dt(X - le - (L + F));
            return D && I > n + p && A.push(R), z && A.push(C.length), A;
          }, [])
          .map((A, R, D) => {
            const H = Math.max(D[R - 1] || 0);
            return C.slice(H, A);
          })
      : [];
  }
  function S(C) {
    return b ? _(C, r) : w(C);
  }
  return { groupSlides: S };
}
function bT(s, n, r, i, l, c, f) {
  const {
      align: h,
      axis: p,
      direction: m,
      startIndex: g,
      loop: v,
      duration: b,
      dragFree: _,
      dragThreshold: w,
      inViewThreshold: S,
      slidesToScroll: E,
      skipSnaps: C,
      containScroll: A,
      watchResize: R,
      watchSlides: D,
      watchDrag: H,
      watchFocus: G,
    } = c,
    z = 2,
    L = tT(),
    X = L.measure(n),
    F = r.map(L.measure),
    le = $4(p, m),
    I = le.measureSize(X),
    xe = nT(I),
    de = J4(h, I),
    ce = !v && !!A,
    U = v || !!A,
    {
      slideSizes: Q,
      slideSizesWithGaps: te,
      startGap: he,
      endGap: N,
    } = vT(le, X, F, r, U, l),
    O = yT(le, I, E, v, X, F, he, N, z),
    { snaps: K, snapsAligned: ne } = uT(le, de, X, F, O),
    ee = -ti(K) + ti(te),
    { snapsContained: se, scrollContainLimit: oe } = lT(I, ee, ne, A, z),
    ue = ce ? se : ne,
    { limit: ae } = sT(ee, ue, v),
    ie = Jb(oc(ue), g, v),
    Ce = ie.clone(),
    be = tc(r),
    re = ({
      dragHandler: tn,
      scrollBody: Pa,
      scrollBounds: gt,
      options: { loop: Rn },
    }) => {
      Rn || gt.constrain(tn.pointerDown()), Pa.seek();
    },
    pe = (
      {
        scrollBody: tn,
        translate: Pa,
        location: gt,
        offsetLocation: Rn,
        previousLocation: xt,
        scrollLooper: mn,
        slideLooper: Ht,
        dragHandler: Ea,
        animation: Ka,
        eventHandler: De,
        scrollBounds: Yn,
        options: { loop: nn },
      },
      an
    ) => {
      const Ut = tn.settled(),
        qn = !Yn.shouldConstrain(),
        On = nn ? Ut : Ut && qn,
        Xn = On && !Ea.pointerDown();
      Xn && Ka.stop();
      const ni = gt.get() * an + xt.get() * (1 - an);
      Rn.set(ni),
        nn && (mn.loop(tn.direction()), Ht.loop()),
        Pa.to(Rn.get()),
        Xn && De.emit("settle"),
        On || De.emit("scroll");
    },
    Se = W4(
      i,
      l,
      () => re(un),
      (tn) => pe(un, tn)
    ),
    We = 0.68,
    ot = ue[ie.get()],
    Z = Ao(ot),
    St = Ao(ot),
    Lt = Ao(ot),
    Kt = Ao(ot),
    et = iT(Z, Lt, St, Kt, b, We),
    Nn = dT(v, ue, ee, ae, Kt),
    Gn = hT(Se, ie, Ce, et, Nn, Kt, f),
    wt = cT(ae),
    At = ac(),
    ia = xT(n, r, f, S),
    { slideRegistry: dt } = fT(ce, A, ue, oe, O, be),
    cn = pT(s, r, dt, Gn, et, At, f, G),
    un = {
      ownerDocument: i,
      ownerWindow: l,
      eventHandler: f,
      containerRect: X,
      slideRects: F,
      animation: Se,
      axis: le,
      dragHandler: I4(
        le,
        s,
        i,
        l,
        Kt,
        eT(le, l),
        Z,
        Se,
        Gn,
        et,
        Nn,
        ie,
        f,
        xe,
        _,
        w,
        C,
        We,
        H
      ),
      eventStore: At,
      percentOfView: xe,
      index: ie,
      indexPrevious: Ce,
      limit: ae,
      location: Z,
      offsetLocation: Lt,
      previousLocation: St,
      options: c,
      resizeHandler: aT(n, f, l, r, le, R, L),
      scrollBody: et,
      scrollBounds: rT(ae, Lt, Kt, et, xe),
      scrollLooper: oT(ee, ae, Lt, [Z, Lt, St, Kt]),
      scrollProgress: wt,
      scrollSnapList: ue.map(wt.get),
      scrollSnaps: ue,
      scrollTarget: Nn,
      scrollTo: Gn,
      slideLooper: mT(le, I, ee, Q, te, K, ue, Lt, r),
      slideFocus: cn,
      slidesHandler: gT(n, f, D),
      slidesInView: ia,
      slideIndexes: be,
      slideRegistry: dt,
      slidesToScroll: O,
      target: Kt,
      translate: Wb(le, n),
    };
  return un;
}
function _T() {
  let s = {},
    n;
  function r(m) {
    n = m;
  }
  function i(m) {
    return s[m] || [];
  }
  function l(m) {
    return i(m).forEach((g) => g(n, m)), p;
  }
  function c(m, g) {
    return (s[m] = i(m).concat([g])), p;
  }
  function f(m, g) {
    return (s[m] = i(m).filter((v) => v !== g)), p;
  }
  function h() {
    s = {};
  }
  const p = { init: r, emit: l, off: f, on: c, clear: h };
  return p;
}
const ST = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0,
};
function wT(s) {
  function n(c, f) {
    return Fb(c, f || {});
  }
  function r(c) {
    const f = c.breakpoints || {},
      h = nc(f)
        .filter((p) => s.matchMedia(p).matches)
        .map((p) => f[p])
        .reduce((p, m) => n(p, m), {});
    return n(c, h);
  }
  function i(c) {
    return c
      .map((f) => nc(f.breakpoints || {}))
      .reduce((f, h) => f.concat(h), [])
      .map(s.matchMedia);
  }
  return { mergeOptions: n, optionsAtMedia: r, optionsMediaQueries: i };
}
function TT(s) {
  let n = [];
  function r(c, f) {
    return (
      (n = f.filter(({ options: h }) => s.optionsAtMedia(h).active !== !1)),
      n.forEach((h) => h.init(c, s)),
      f.reduce((h, p) => Object.assign(h, { [p.name]: p }), {})
    );
  }
  function i() {
    n = n.filter((c) => c.destroy());
  }
  return { init: r, destroy: i };
}
function of(s, n, r) {
  const i = s.ownerDocument,
    l = i.defaultView,
    c = wT(l),
    f = TT(c),
    h = ac(),
    p = _T(),
    { mergeOptions: m, optionsAtMedia: g, optionsMediaQueries: v } = c,
    { on: b, off: _, emit: w } = p,
    S = le;
  let E = !1,
    C,
    A = m(ST, of.globalOptions),
    R = m(A),
    D = [],
    H,
    G,
    z;
  function L() {
    const { container: be, slides: re } = R;
    G = (Op(be) ? s.querySelector(be) : be) || s.children[0];
    const Se = Op(re) ? G.querySelectorAll(re) : re;
    z = [].slice.call(Se || G.children);
  }
  function X(be) {
    const re = bT(s, G, z, i, l, be, p);
    if (be.loop && !re.slideLooper.canLoop()) {
      const pe = Object.assign({}, be, { loop: !1 });
      return X(pe);
    }
    return re;
  }
  function F(be, re) {
    E ||
      ((A = m(A, be)),
      (R = g(A)),
      (D = re || D),
      L(),
      (C = X(R)),
      v([A, ...D.map(({ options: pe }) => pe)]).forEach((pe) =>
        h.add(pe, "change", le)
      ),
      R.active &&
        (C.translate.to(C.location.get()),
        C.animation.init(),
        C.slidesInView.init(),
        C.slideFocus.init(Ce),
        C.eventHandler.init(Ce),
        C.resizeHandler.init(Ce),
        C.slidesHandler.init(Ce),
        C.options.loop && C.slideLooper.loop(),
        G.offsetParent && z.length && C.dragHandler.init(Ce),
        (H = f.init(Ce, D))));
  }
  function le(be, re) {
    const pe = O();
    I(), F(m({ startIndex: pe }, be), re), p.emit("reInit");
  }
  function I() {
    C.dragHandler.destroy(),
      C.eventStore.clear(),
      C.translate.clear(),
      C.slideLooper.clear(),
      C.resizeHandler.destroy(),
      C.slidesHandler.destroy(),
      C.slidesInView.destroy(),
      C.animation.destroy(),
      f.destroy(),
      h.clear();
  }
  function xe() {
    E || ((E = !0), h.clear(), I(), p.emit("destroy"), p.clear());
  }
  function de(be, re, pe) {
    !R.active ||
      E ||
      (C.scrollBody.useBaseFriction().useDuration(re === !0 ? 0 : R.duration),
      C.scrollTo.index(be, pe || 0));
  }
  function ce(be) {
    const re = C.index.add(1).get();
    de(re, be, -1);
  }
  function U(be) {
    const re = C.index.add(-1).get();
    de(re, be, 1);
  }
  function Q() {
    return C.index.add(1).get() !== O();
  }
  function te() {
    return C.index.add(-1).get() !== O();
  }
  function he() {
    return C.scrollSnapList;
  }
  function N() {
    return C.scrollProgress.get(C.offsetLocation.get());
  }
  function O() {
    return C.index.get();
  }
  function K() {
    return C.indexPrevious.get();
  }
  function ne() {
    return C.slidesInView.get();
  }
  function ee() {
    return C.slidesInView.get(!1);
  }
  function se() {
    return H;
  }
  function oe() {
    return C;
  }
  function ue() {
    return s;
  }
  function ae() {
    return G;
  }
  function ie() {
    return z;
  }
  const Ce = {
    canScrollNext: Q,
    canScrollPrev: te,
    containerNode: ae,
    internalEngine: oe,
    destroy: xe,
    off: _,
    on: b,
    emit: w,
    plugins: se,
    previousScrollSnap: K,
    reInit: S,
    rootNode: ue,
    scrollNext: ce,
    scrollPrev: U,
    scrollProgress: N,
    scrollSnapList: he,
    scrollTo: de,
    selectedScrollSnap: O,
    slideNodes: ie,
    slidesInView: ne,
    slidesNotInView: ee,
  };
  return F(n, r), setTimeout(() => p.emit("init"), 0), Ce;
}
of.globalOptions = void 0;
function Rm(s = {}, n = []) {
  const r = j.useRef(s),
    i = j.useRef(n),
    [l, c] = j.useState(),
    [f, h] = j.useState(),
    p = j.useCallback(() => {
      l && l.reInit(r.current, i.current);
    }, [l]);
  return (
    j.useEffect(() => {
      Em(r.current, s) || ((r.current = s), p());
    }, [s, p]),
    j.useEffect(() => {
      P4(i.current, n) || ((i.current = n), p());
    }, [n, p]),
    j.useEffect(() => {
      if (Q4() && f) {
        of.globalOptions = Rm.globalOptions;
        const m = of(f, r.current, i.current);
        return c(m), () => m.destroy();
      } else c(void 0);
    }, [f, c]),
    [h, l]
  );
}
Rm.globalOptions = void 0;
function $b(s) {
  var n,
    r,
    i = "";
  if (typeof s == "string" || typeof s == "number") i += s;
  else if (typeof s == "object")
    if (Array.isArray(s)) {
      var l = s.length;
      for (n = 0; n < l; n++)
        s[n] && (r = $b(s[n])) && (i && (i += " "), (i += r));
    } else for (r in s) s[r] && (i && (i += " "), (i += r));
  return i;
}
function ET() {
  for (var s, n, r = 0, i = "", l = arguments.length; r < l; r++)
    (s = arguments[r]) && (n = $b(s)) && (i && (i += " "), (i += n));
  return i;
}
const CT = (s, n) => {
    const r = new Array(s.length + n.length);
    for (let i = 0; i < s.length; i++) r[i] = s[i];
    for (let i = 0; i < n.length; i++) r[s.length + i] = n[i];
    return r;
  },
  AT = (s, n) => ({ classGroupId: s, validator: n }),
  Ib = (s = new Map(), n = null, r) => ({
    nextPart: s,
    validators: n,
    classGroupId: r,
  }),
  cf = "-",
  Dv = [],
  NT = "arbitrary..",
  RT = (s) => {
    const n = MT(s),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: i } = s;
    return {
      getClassGroupId: (f) => {
        if (f.startsWith("[") && f.endsWith("]")) return OT(f);
        const h = f.split(cf),
          p = h[0] === "" && h.length > 1 ? 1 : 0;
        return e_(h, p, n);
      },
      getConflictingClassGroupIds: (f, h) => {
        if (h) {
          const p = i[f],
            m = r[f];
          return p ? (m ? CT(m, p) : p) : m || Dv;
        }
        return r[f] || Dv;
      },
    };
  },
  e_ = (s, n, r) => {
    if (s.length - n === 0) return r.classGroupId;
    const l = s[n],
      c = r.nextPart.get(l);
    if (c) {
      const m = e_(s, n + 1, c);
      if (m) return m;
    }
    const f = r.validators;
    if (f === null) return;
    const h = n === 0 ? s.join(cf) : s.slice(n).join(cf),
      p = f.length;
    for (let m = 0; m < p; m++) {
      const g = f[m];
      if (g.validator(h)) return g.classGroupId;
    }
  },
  OT = (s) =>
    s.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const n = s.slice(1, -1),
            r = n.indexOf(":"),
            i = n.slice(0, r);
          return i ? NT + i : void 0;
        })(),
  MT = (s) => {
    const { theme: n, classGroups: r } = s;
    return zT(r, n);
  },
  zT = (s, n) => {
    const r = Ib();
    for (const i in s) {
      const l = s[i];
      Om(l, r, i, n);
    }
    return r;
  },
  Om = (s, n, r, i) => {
    const l = s.length;
    for (let c = 0; c < l; c++) {
      const f = s[c];
      jT(f, n, r, i);
    }
  },
  jT = (s, n, r, i) => {
    if (typeof s == "string") {
      DT(s, n, r);
      return;
    }
    if (typeof s == "function") {
      kT(s, n, r, i);
      return;
    }
    LT(s, n, r, i);
  },
  DT = (s, n, r) => {
    const i = s === "" ? n : t_(n, s);
    i.classGroupId = r;
  },
  kT = (s, n, r, i) => {
    if (HT(s)) {
      Om(s(i), n, r, i);
      return;
    }
    n.validators === null && (n.validators = []), n.validators.push(AT(r, s));
  },
  LT = (s, n, r, i) => {
    const l = Object.entries(s),
      c = l.length;
    for (let f = 0; f < c; f++) {
      const [h, p] = l[f];
      Om(p, t_(n, h), r, i);
    }
  },
  t_ = (s, n) => {
    let r = s;
    const i = n.split(cf),
      l = i.length;
    for (let c = 0; c < l; c++) {
      const f = i[c];
      let h = r.nextPart.get(f);
      h || ((h = Ib()), r.nextPart.set(f, h)), (r = h);
    }
    return r;
  },
  HT = (s) => "isThemeGetter" in s && s.isThemeGetter === !0,
  UT = (s) => {
    if (s < 1) return { get: () => {}, set: () => {} };
    let n = 0,
      r = Object.create(null),
      i = Object.create(null);
    const l = (c, f) => {
      (r[c] = f), n++, n > s && ((n = 0), (i = r), (r = Object.create(null)));
    };
    return {
      get(c) {
        let f = r[c];
        if (f !== void 0) return f;
        if ((f = i[c]) !== void 0) return l(c, f), f;
      },
      set(c, f) {
        c in r ? (r[c] = f) : l(c, f);
      },
    };
  },
  zp = "!",
  kv = ":",
  BT = [],
  Lv = (s, n, r, i, l) => ({
    modifiers: s,
    hasImportantModifier: n,
    baseClassName: r,
    maybePostfixModifierPosition: i,
    isExternal: l,
  }),
  GT = (s) => {
    const { prefix: n, experimentalParseClassName: r } = s;
    let i = (l) => {
      const c = [];
      let f = 0,
        h = 0,
        p = 0,
        m;
      const g = l.length;
      for (let S = 0; S < g; S++) {
        const E = l[S];
        if (f === 0 && h === 0) {
          if (E === kv) {
            c.push(l.slice(p, S)), (p = S + 1);
            continue;
          }
          if (E === "/") {
            m = S;
            continue;
          }
        }
        E === "[" ? f++ : E === "]" ? f-- : E === "(" ? h++ : E === ")" && h--;
      }
      const v = c.length === 0 ? l : l.slice(p);
      let b = v,
        _ = !1;
      v.endsWith(zp)
        ? ((b = v.slice(0, -1)), (_ = !0))
        : v.startsWith(zp) && ((b = v.slice(1)), (_ = !0));
      const w = m && m > p ? m - p : void 0;
      return Lv(c, _, b, w);
    };
    if (n) {
      const l = n + kv,
        c = i;
      i = (f) =>
        f.startsWith(l) ? c(f.slice(l.length)) : Lv(BT, !1, f, void 0, !0);
    }
    if (r) {
      const l = i;
      i = (c) => r({ className: c, parseClassName: l });
    }
    return i;
  },
  YT = (s) => {
    const n = new Map();
    return (
      s.orderSensitiveModifiers.forEach((r, i) => {
        n.set(r, 1e6 + i);
      }),
      (r) => {
        const i = [];
        let l = [];
        for (let c = 0; c < r.length; c++) {
          const f = r[c],
            h = f[0] === "[",
            p = n.has(f);
          h || p
            ? (l.length > 0 && (l.sort(), i.push(...l), (l = [])), i.push(f))
            : l.push(f);
        }
        return l.length > 0 && (l.sort(), i.push(...l)), i;
      }
    );
  },
  qT = (s) => ({
    cache: UT(s.cacheSize),
    parseClassName: GT(s),
    sortModifiers: YT(s),
    postfixLookupClassGroupIds: XT(s),
    ...RT(s),
  }),
  XT = (s) => {
    const n = Object.create(null),
      r = s.postfixLookupClassGroups;
    if (r) for (let i = 0; i < r.length; i++) n[r[i]] = !0;
    return n;
  },
  VT = /\s+/,
  ZT = (s, n) => {
    const {
        parseClassName: r,
        getClassGroupId: i,
        getConflictingClassGroupIds: l,
        sortModifiers: c,
        postfixLookupClassGroupIds: f,
      } = n,
      h = [],
      p = s.trim().split(VT);
    let m = "";
    for (let g = p.length - 1; g >= 0; g -= 1) {
      const v = p[g],
        {
          isExternal: b,
          modifiers: _,
          hasImportantModifier: w,
          baseClassName: S,
          maybePostfixModifierPosition: E,
        } = r(v);
      if (b) {
        m = v + (m.length > 0 ? " " + m : m);
        continue;
      }
      let C = !!E,
        A;
      if (C) {
        const z = S.substring(0, E);
        A = i(z);
        const L = A && f[A] ? i(S) : void 0;
        L && L !== A && ((A = L), (C = !1));
      } else A = i(S);
      if (!A) {
        if (!C) {
          m = v + (m.length > 0 ? " " + m : m);
          continue;
        }
        if (((A = i(S)), !A)) {
          m = v + (m.length > 0 ? " " + m : m);
          continue;
        }
        C = !1;
      }
      const R = _.length === 0 ? "" : _.length === 1 ? _[0] : c(_).join(":"),
        D = w ? R + zp : R,
        H = D + A;
      if (h.indexOf(H) > -1) continue;
      h.push(H);
      const G = l(A, C);
      for (let z = 0; z < G.length; ++z) {
        const L = G[z];
        h.push(D + L);
      }
      m = v + (m.length > 0 ? " " + m : m);
    }
    return m;
  },
  QT = (...s) => {
    let n = 0,
      r,
      i,
      l = "";
    for (; n < s.length; )
      (r = s[n++]) && (i = n_(r)) && (l && (l += " "), (l += i));
    return l;
  },
  n_ = (s) => {
    if (typeof s == "string") return s;
    let n,
      r = "";
    for (let i = 0; i < s.length; i++)
      s[i] && (n = n_(s[i])) && (r && (r += " "), (r += n));
    return r;
  },
  PT = (s, ...n) => {
    let r, i, l, c;
    const f = (p) => {
        const m = n.reduce((g, v) => v(g), s());
        return (r = qT(m)), (i = r.cache.get), (l = r.cache.set), (c = h), h(p);
      },
      h = (p) => {
        const m = i(p);
        if (m) return m;
        const g = ZT(p, r);
        return l(p, g), g;
      };
    return (c = f), (...p) => c(QT(...p));
  },
  KT = [],
  ln = (s) => {
    const n = (r) => r[s] || KT;
    return (n.isThemeGetter = !0), n;
  },
  a_ = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  i_ = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  FT = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  JT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  WT =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  $T = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  IT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  e6 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  vr = (s) => FT.test(s),
  Be = (s) => !!s && !Number.isNaN(Number(s)),
  ui = (s) => !!s && Number.isInteger(Number(s)),
  tp = (s) => s.endsWith("%") && Be(s.slice(0, -1)),
  Hi = (s) => JT.test(s),
  r_ = () => !0,
  t6 = (s) => WT.test(s) && !$T.test(s),
  Mm = () => !1,
  n6 = (s) => IT.test(s),
  a6 = (s) => e6.test(s),
  i6 = (s) => !me(s) && !ge(s),
  r6 = (s) =>
    s.startsWith("@container") &&
    ((s[10] === "/" && s[11] !== void 0) ||
      (s[11] === "s" && s[16] !== void 0 && s.startsWith("-size/", 10)) ||
      (s[11] === "n" && s[18] !== void 0 && s.startsWith("-normal/", 10))),
  l6 = (s) => jr(s, o_, Mm),
  me = (s) => a_.test(s),
  Ir = (s) => jr(s, c_, t6),
  Hv = (s) => jr(s, p6, Be),
  s6 = (s) => jr(s, f_, r_),
  o6 = (s) => jr(s, u_, Mm),
  Uv = (s) => jr(s, l_, Mm),
  c6 = (s) => jr(s, s_, a6),
  ku = (s) => jr(s, d_, n6),
  ge = (s) => i_.test(s),
  yo = (s) => bl(s, c_),
  u6 = (s) => bl(s, u_),
  Bv = (s) => bl(s, l_),
  f6 = (s) => bl(s, o_),
  d6 = (s) => bl(s, s_),
  Lu = (s) => bl(s, d_, !0),
  h6 = (s) => bl(s, f_, !0),
  jr = (s, n, r) => {
    const i = a_.exec(s);
    return i ? (i[1] ? n(i[1]) : r(i[2])) : !1;
  },
  bl = (s, n, r = !1) => {
    const i = i_.exec(s);
    return i ? (i[1] ? n(i[1]) : r) : !1;
  },
  l_ = (s) => s === "position" || s === "percentage",
  s_ = (s) => s === "image" || s === "url",
  o_ = (s) => s === "length" || s === "size" || s === "bg-size",
  c_ = (s) => s === "length",
  p6 = (s) => s === "number",
  u_ = (s) => s === "family-name",
  f_ = (s) => s === "number" || s === "weight",
  d_ = (s) => s === "shadow",
  m6 = () => {
    const s = ln("color"),
      n = ln("font"),
      r = ln("text"),
      i = ln("font-weight"),
      l = ln("tracking"),
      c = ln("leading"),
      f = ln("breakpoint"),
      h = ln("container"),
      p = ln("spacing"),
      m = ln("radius"),
      g = ln("shadow"),
      v = ln("inset-shadow"),
      b = ln("text-shadow"),
      _ = ln("drop-shadow"),
      w = ln("blur"),
      S = ln("perspective"),
      E = ln("aspect"),
      C = ln("ease"),
      A = ln("animate"),
      R = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      D = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      H = () => [...D(), ge, me],
      G = () => ["auto", "hidden", "clip", "visible", "scroll"],
      z = () => ["auto", "contain", "none"],
      L = () => [ge, me, p],
      X = () => [vr, "full", "auto", ...L()],
      F = () => [ui, "none", "subgrid", ge, me],
      le = () => ["auto", { span: ["full", ui, ge, me] }, ui, ge, me],
      I = () => [ui, "auto", ge, me],
      xe = () => ["auto", "min", "max", "fr", ge, me],
      de = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      ce = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      U = () => ["auto", ...L()],
      Q = () => [
        vr,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...L(),
      ],
      te = () => [
        vr,
        "screen",
        "full",
        "dvw",
        "lvw",
        "svw",
        "min",
        "max",
        "fit",
        ...L(),
      ],
      he = () => [
        vr,
        "screen",
        "full",
        "lh",
        "dvh",
        "lvh",
        "svh",
        "min",
        "max",
        "fit",
        ...L(),
      ],
      N = () => [s, ge, me],
      O = () => [...D(), Bv, Uv, { position: [ge, me] }],
      K = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      ne = () => ["auto", "cover", "contain", f6, l6, { size: [ge, me] }],
      ee = () => [tp, yo, Ir],
      se = () => ["", "none", "full", m, ge, me],
      oe = () => ["", Be, yo, Ir],
      ue = () => ["solid", "dashed", "dotted", "double"],
      ae = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      ie = () => [Be, tp, Bv, Uv],
      Ce = () => ["", "none", w, ge, me],
      be = () => ["none", Be, ge, me],
      re = () => ["none", Be, ge, me],
      pe = () => [Be, ge, me],
      Se = () => [vr, "full", ...L()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Hi],
        breakpoint: [Hi],
        color: [r_],
        container: [Hi],
        "drop-shadow": [Hi],
        ease: ["in", "out", "in-out"],
        font: [i6],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Hi],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Hi],
        shadow: [Hi],
        spacing: ["px", Be],
        text: [Hi],
        "text-shadow": [Hi],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", vr, me, ge, E] }],
        container: ["container"],
        "container-type": [{ "@container": ["", "normal", "size", ge, me] }],
        "container-named": [r6],
        columns: [{ columns: [Be, me, ge, h] }],
        "break-after": [{ "break-after": R() }],
        "break-before": [{ "break-before": R() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: H() }],
        overflow: [{ overflow: G() }],
        "overflow-x": [{ "overflow-x": G() }],
        "overflow-y": [{ "overflow-y": G() }],
        overscroll: [{ overscroll: z() }],
        "overscroll-x": [{ "overscroll-x": z() }],
        "overscroll-y": [{ "overscroll-y": z() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: X() }],
        "inset-x": [{ "inset-x": X() }],
        "inset-y": [{ "inset-y": X() }],
        start: [{ "inset-s": X(), start: X() }],
        end: [{ "inset-e": X(), end: X() }],
        "inset-bs": [{ "inset-bs": X() }],
        "inset-be": [{ "inset-be": X() }],
        top: [{ top: X() }],
        right: [{ right: X() }],
        bottom: [{ bottom: X() }],
        left: [{ left: X() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [ui, "auto", ge, me] }],
        basis: [{ basis: [vr, "full", "auto", h, ...L()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [Be, vr, "auto", "initial", "none", me] }],
        grow: [{ grow: ["", Be, ge, me] }],
        shrink: [{ shrink: ["", Be, ge, me] }],
        order: [{ order: [ui, "first", "last", "none", ge, me] }],
        "grid-cols": [{ "grid-cols": F() }],
        "col-start-end": [{ col: le() }],
        "col-start": [{ "col-start": I() }],
        "col-end": [{ "col-end": I() }],
        "grid-rows": [{ "grid-rows": F() }],
        "row-start-end": [{ row: le() }],
        "row-start": [{ "row-start": I() }],
        "row-end": [{ "row-end": I() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": xe() }],
        "auto-rows": [{ "auto-rows": xe() }],
        gap: [{ gap: L() }],
        "gap-x": [{ "gap-x": L() }],
        "gap-y": [{ "gap-y": L() }],
        "justify-content": [{ justify: [...de(), "normal"] }],
        "justify-items": [{ "justify-items": [...ce(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...ce()] }],
        "align-content": [{ content: ["normal", ...de()] }],
        "align-items": [{ items: [...ce(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...ce(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": de() }],
        "place-items": [{ "place-items": [...ce(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...ce()] }],
        p: [{ p: L() }],
        px: [{ px: L() }],
        py: [{ py: L() }],
        ps: [{ ps: L() }],
        pe: [{ pe: L() }],
        pbs: [{ pbs: L() }],
        pbe: [{ pbe: L() }],
        pt: [{ pt: L() }],
        pr: [{ pr: L() }],
        pb: [{ pb: L() }],
        pl: [{ pl: L() }],
        m: [{ m: U() }],
        mx: [{ mx: U() }],
        my: [{ my: U() }],
        ms: [{ ms: U() }],
        me: [{ me: U() }],
        mbs: [{ mbs: U() }],
        mbe: [{ mbe: U() }],
        mt: [{ mt: U() }],
        mr: [{ mr: U() }],
        mb: [{ mb: U() }],
        ml: [{ ml: U() }],
        "space-x": [{ "space-x": L() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": L() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: Q() }],
        "inline-size": [{ inline: ["auto", ...te()] }],
        "min-inline-size": [{ "min-inline": ["auto", ...te()] }],
        "max-inline-size": [{ "max-inline": ["none", ...te()] }],
        "block-size": [{ block: ["auto", ...he()] }],
        "min-block-size": [{ "min-block": ["auto", ...he()] }],
        "max-block-size": [{ "max-block": ["none", ...he()] }],
        w: [{ w: [h, "screen", ...Q()] }],
        "min-w": [{ "min-w": [h, "screen", "none", ...Q()] }],
        "max-w": [
          { "max-w": [h, "screen", "none", "prose", { screen: [f] }, ...Q()] },
        ],
        h: [{ h: ["screen", "lh", ...Q()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...Q()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...Q()] }],
        "font-size": [{ text: ["base", r, yo, Ir] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [i, h6, s6] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              tp,
              me,
            ],
          },
        ],
        "font-family": [{ font: [u6, o6, n] }],
        "font-features": [{ "font-features": [me] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [l, ge, me] }],
        "line-clamp": [{ "line-clamp": [Be, "none", ge, Hv] }],
        leading: [{ leading: [c, ...L()] }],
        "list-image": [{ "list-image": ["none", ge, me] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", ge, me] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: N() }],
        "text-color": [{ text: N() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ue(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [Be, "from-font", "auto", ge, Ir] },
        ],
        "text-decoration-color": [{ decoration: N() }],
        "underline-offset": [{ "underline-offset": [Be, "auto", ge, me] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: L() }],
        "tab-size": [{ tab: [ui, ge, me] }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ge,
              me,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ge, me] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: O() }],
        "bg-repeat": [{ bg: K() }],
        "bg-size": [{ bg: ne() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  ui,
                  ge,
                  me,
                ],
                radial: ["", ge, me],
                conic: [ui, ge, me],
              },
              d6,
              c6,
            ],
          },
        ],
        "bg-color": [{ bg: N() }],
        "gradient-from-pos": [{ from: ee() }],
        "gradient-via-pos": [{ via: ee() }],
        "gradient-to-pos": [{ to: ee() }],
        "gradient-from": [{ from: N() }],
        "gradient-via": [{ via: N() }],
        "gradient-to": [{ to: N() }],
        rounded: [{ rounded: se() }],
        "rounded-s": [{ "rounded-s": se() }],
        "rounded-e": [{ "rounded-e": se() }],
        "rounded-t": [{ "rounded-t": se() }],
        "rounded-r": [{ "rounded-r": se() }],
        "rounded-b": [{ "rounded-b": se() }],
        "rounded-l": [{ "rounded-l": se() }],
        "rounded-ss": [{ "rounded-ss": se() }],
        "rounded-se": [{ "rounded-se": se() }],
        "rounded-ee": [{ "rounded-ee": se() }],
        "rounded-es": [{ "rounded-es": se() }],
        "rounded-tl": [{ "rounded-tl": se() }],
        "rounded-tr": [{ "rounded-tr": se() }],
        "rounded-br": [{ "rounded-br": se() }],
        "rounded-bl": [{ "rounded-bl": se() }],
        "border-w": [{ border: oe() }],
        "border-w-x": [{ "border-x": oe() }],
        "border-w-y": [{ "border-y": oe() }],
        "border-w-s": [{ "border-s": oe() }],
        "border-w-e": [{ "border-e": oe() }],
        "border-w-bs": [{ "border-bs": oe() }],
        "border-w-be": [{ "border-be": oe() }],
        "border-w-t": [{ "border-t": oe() }],
        "border-w-r": [{ "border-r": oe() }],
        "border-w-b": [{ "border-b": oe() }],
        "border-w-l": [{ "border-l": oe() }],
        "divide-x": [{ "divide-x": oe() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": oe() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...ue(), "hidden", "none"] }],
        "divide-style": [{ divide: [...ue(), "hidden", "none"] }],
        "border-color": [{ border: N() }],
        "border-color-x": [{ "border-x": N() }],
        "border-color-y": [{ "border-y": N() }],
        "border-color-s": [{ "border-s": N() }],
        "border-color-e": [{ "border-e": N() }],
        "border-color-bs": [{ "border-bs": N() }],
        "border-color-be": [{ "border-be": N() }],
        "border-color-t": [{ "border-t": N() }],
        "border-color-r": [{ "border-r": N() }],
        "border-color-b": [{ "border-b": N() }],
        "border-color-l": [{ "border-l": N() }],
        "divide-color": [{ divide: N() }],
        "outline-style": [{ outline: [...ue(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [Be, ge, me] }],
        "outline-w": [{ outline: ["", Be, yo, Ir] }],
        "outline-color": [{ outline: N() }],
        shadow: [{ shadow: ["", "none", g, Lu, ku] }],
        "shadow-color": [{ shadow: N() }],
        "inset-shadow": [{ "inset-shadow": ["none", v, Lu, ku] }],
        "inset-shadow-color": [{ "inset-shadow": N() }],
        "ring-w": [{ ring: oe() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: N() }],
        "ring-offset-w": [{ "ring-offset": [Be, Ir] }],
        "ring-offset-color": [{ "ring-offset": N() }],
        "inset-ring-w": [{ "inset-ring": oe() }],
        "inset-ring-color": [{ "inset-ring": N() }],
        "text-shadow": [{ "text-shadow": ["none", b, Lu, ku] }],
        "text-shadow-color": [{ "text-shadow": N() }],
        opacity: [{ opacity: [Be, ge, me] }],
        "mix-blend": [
          { "mix-blend": [...ae(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": ae() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [Be] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": ie() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": ie() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": N() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": N() }],
        "mask-image-t-from-pos": [{ "mask-t-from": ie() }],
        "mask-image-t-to-pos": [{ "mask-t-to": ie() }],
        "mask-image-t-from-color": [{ "mask-t-from": N() }],
        "mask-image-t-to-color": [{ "mask-t-to": N() }],
        "mask-image-r-from-pos": [{ "mask-r-from": ie() }],
        "mask-image-r-to-pos": [{ "mask-r-to": ie() }],
        "mask-image-r-from-color": [{ "mask-r-from": N() }],
        "mask-image-r-to-color": [{ "mask-r-to": N() }],
        "mask-image-b-from-pos": [{ "mask-b-from": ie() }],
        "mask-image-b-to-pos": [{ "mask-b-to": ie() }],
        "mask-image-b-from-color": [{ "mask-b-from": N() }],
        "mask-image-b-to-color": [{ "mask-b-to": N() }],
        "mask-image-l-from-pos": [{ "mask-l-from": ie() }],
        "mask-image-l-to-pos": [{ "mask-l-to": ie() }],
        "mask-image-l-from-color": [{ "mask-l-from": N() }],
        "mask-image-l-to-color": [{ "mask-l-to": N() }],
        "mask-image-x-from-pos": [{ "mask-x-from": ie() }],
        "mask-image-x-to-pos": [{ "mask-x-to": ie() }],
        "mask-image-x-from-color": [{ "mask-x-from": N() }],
        "mask-image-x-to-color": [{ "mask-x-to": N() }],
        "mask-image-y-from-pos": [{ "mask-y-from": ie() }],
        "mask-image-y-to-pos": [{ "mask-y-to": ie() }],
        "mask-image-y-from-color": [{ "mask-y-from": N() }],
        "mask-image-y-to-color": [{ "mask-y-to": N() }],
        "mask-image-radial": [{ "mask-radial": [ge, me] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": ie() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": ie() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": N() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": N() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": D() }],
        "mask-image-conic-pos": [{ "mask-conic": [Be] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": ie() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": ie() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": N() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": N() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: O() }],
        "mask-repeat": [{ mask: K() }],
        "mask-size": [{ mask: ne() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", ge, me] }],
        filter: [{ filter: ["", "none", ge, me] }],
        blur: [{ blur: Ce() }],
        brightness: [{ brightness: [Be, ge, me] }],
        contrast: [{ contrast: [Be, ge, me] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", _, Lu, ku] }],
        "drop-shadow-color": [{ "drop-shadow": N() }],
        grayscale: [{ grayscale: ["", Be, ge, me] }],
        "hue-rotate": [{ "hue-rotate": [Be, ge, me] }],
        invert: [{ invert: ["", Be, ge, me] }],
        saturate: [{ saturate: [Be, ge, me] }],
        sepia: [{ sepia: ["", Be, ge, me] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", ge, me] }],
        "backdrop-blur": [{ "backdrop-blur": Ce() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Be, ge, me] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Be, ge, me] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", Be, ge, me] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Be, ge, me] }],
        "backdrop-invert": [{ "backdrop-invert": ["", Be, ge, me] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Be, ge, me] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Be, ge, me] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", Be, ge, me] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": L() }],
        "border-spacing-x": [{ "border-spacing-x": L() }],
        "border-spacing-y": [{ "border-spacing-y": L() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              ge,
              me,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [Be, "initial", ge, me] }],
        ease: [{ ease: ["linear", "initial", C, ge, me] }],
        delay: [{ delay: [Be, ge, me] }],
        animate: [{ animate: ["none", A, ge, me] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [S, ge, me] }],
        "perspective-origin": [{ "perspective-origin": H() }],
        rotate: [{ rotate: be() }],
        "rotate-x": [{ "rotate-x": be() }],
        "rotate-y": [{ "rotate-y": be() }],
        "rotate-z": [{ "rotate-z": be() }],
        scale: [{ scale: re() }],
        "scale-x": [{ "scale-x": re() }],
        "scale-y": [{ "scale-y": re() }],
        "scale-z": [{ "scale-z": re() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: pe() }],
        "skew-x": [{ "skew-x": pe() }],
        "skew-y": [{ "skew-y": pe() }],
        transform: [{ transform: [ge, me, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: H() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Se() }],
        "translate-x": [{ "translate-x": Se() }],
        "translate-y": [{ "translate-y": Se() }],
        "translate-z": [{ "translate-z": Se() }],
        "translate-none": ["translate-none"],
        zoom: [{ zoom: [ui, ge, me] }],
        accent: [{ accent: N() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: N() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ge,
              me,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": N() }],
        "scrollbar-track-color": [{ "scrollbar-track": N() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": ["auto", "stable", "both"] },
        ],
        "scrollbar-w": [{ scrollbar: ["auto", "thin", "none"] }],
        "scroll-m": [{ "scroll-m": L() }],
        "scroll-mx": [{ "scroll-mx": L() }],
        "scroll-my": [{ "scroll-my": L() }],
        "scroll-ms": [{ "scroll-ms": L() }],
        "scroll-me": [{ "scroll-me": L() }],
        "scroll-mbs": [{ "scroll-mbs": L() }],
        "scroll-mbe": [{ "scroll-mbe": L() }],
        "scroll-mt": [{ "scroll-mt": L() }],
        "scroll-mr": [{ "scroll-mr": L() }],
        "scroll-mb": [{ "scroll-mb": L() }],
        "scroll-ml": [{ "scroll-ml": L() }],
        "scroll-p": [{ "scroll-p": L() }],
        "scroll-px": [{ "scroll-px": L() }],
        "scroll-py": [{ "scroll-py": L() }],
        "scroll-ps": [{ "scroll-ps": L() }],
        "scroll-pe": [{ "scroll-pe": L() }],
        "scroll-pbs": [{ "scroll-pbs": L() }],
        "scroll-pbe": [{ "scroll-pbe": L() }],
        "scroll-pt": [{ "scroll-pt": L() }],
        "scroll-pr": [{ "scroll-pr": L() }],
        "scroll-pb": [{ "scroll-pb": L() }],
        "scroll-pl": [{ "scroll-pl": L() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", ge, me],
          },
        ],
        fill: [{ fill: ["none", ...N()] }],
        "stroke-w": [{ stroke: [Be, yo, Ir, Hv] }],
        stroke: [{ stroke: ["none", ...N()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        "container-named": ["container-type"],
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "inset-bs",
          "inset-be",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mbs",
          "scroll-mbe",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pbs",
          "scroll-pbe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      postfixLookupClassGroups: ["container-type"],
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  g6 = PT(m6);
function zm(...s) {
  return g6(ET(s));
}
const h_ = j.createContext(null);
function p_() {
  const s = j.useContext(h_);
  if (!s) throw new Error("useCarousel must be used within a <Carousel />");
  return s;
}
function x6({
  orientation: s = "horizontal",
  opts: n,
  setApi: r,
  plugins: i,
  className: l,
  children: c,
  ...f
}) {
  const [h, p] = Rm({ ...n, axis: s === "horizontal" ? "x" : "y" }, i),
    [m, g] = j.useState(!1),
    [v, b] = j.useState(!1),
    _ = j.useCallback((C) => {
      C && (g(C.canScrollPrev()), b(C.canScrollNext()));
    }, []),
    w = j.useCallback(() => {
      p?.scrollPrev();
    }, [p]),
    S = j.useCallback(() => {
      p?.scrollNext();
    }, [p]),
    E = j.useCallback(
      (C) => {
        C.key === "ArrowLeft"
          ? (C.preventDefault(), w())
          : C.key === "ArrowRight" && (C.preventDefault(), S());
      },
      [w, S]
    );
  return (
    j.useEffect(() => {
      !p || !r || r(p);
    }, [p, r]),
    j.useEffect(() => {
      if (p)
        return (
          _(p),
          p.on("reInit", _),
          p.on("select", _),
          () => {
            p?.off("select", _);
          }
        );
    }, [p, _]),
    y.jsx(h_.Provider, {
      "code-path": "src/components/ui/carousel.tsx:106:5",
      value: {
        carouselRef: h,
        api: p,
        opts: n,
        orientation: s || (n?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: w,
        scrollNext: S,
        canScrollPrev: m,
        canScrollNext: v,
      },
      children: y.jsx("div", {
        "code-path": "src/components/ui/carousel.tsx:119:7",
        onKeyDownCapture: E,
        className: zm("relative", l),
        role: "region",
        "aria-roledescription": "carousel",
        "data-slot": "carousel",
        ...f,
        children: c,
      }),
    })
  );
}
function v6({ className: s, ...n }) {
  const { carouselRef: r, orientation: i } = p_();
  return y.jsx("div", {
    "code-path": "src/components/ui/carousel.tsx:137:5",
    ref: r,
    className: "overflow-hidden",
    "data-slot": "carousel-content",
    children: y.jsx("div", {
      "code-path": "src/components/ui/carousel.tsx:142:7",
      className: zm("flex", i === "horizontal" ? "-ml-4" : "-mt-4 flex-col", s),
      ...n,
    }),
  });
}
function y6({ className: s, ...n }) {
  const { orientation: r } = p_();
  return y.jsx("div", {
    "code-path": "src/components/ui/carousel.tsx:158:5",
    role: "group",
    "aria-roledescription": "slide",
    "data-slot": "carousel-item",
    className: zm(
      "min-w-0 shrink-0 grow-0 basis-full",
      r === "horizontal" ? "pl-4" : "pt-4",
      s
    ),
    ...n,
  });
}
const b6 = 18;
function _6(s, n) {
  const r = [];
  for (let i = 0; i < s.length; i += n) r.push(s.slice(i, i + n));
  return r;
}
function S6({ members: s, hasMore: n, loading: r, onLoadMore: i }) {
  const [l, c] = j.useState(),
    [f, h] = j.useState(0),
    [p, m] = j.useState(!1),
    [g, v] = j.useState(!1),
    b = j.useMemo(() => _6(s, b6), [s]);
  if (
    (j.useEffect(() => {
      if (!l) return;
      const S = () => {
        h(l.selectedScrollSnap()),
          m(l.canScrollPrev()),
          v(l.canScrollNext()),
          n && !r && i && l.selectedScrollSnap() >= b.length - 2 && i();
      };
      return (
        S(),
        l.on("select", S),
        l.on("reInit", S),
        () => {
          l.off("select", S), l.off("reInit", S);
        }
      );
    }, [l, b.length, n, r, i]),
    s.length === 0)
  )
    return y.jsx("div", {
      "code-path": "src/components/gang/MemberWall.tsx:57:7",
      className:
        "rounded-2xl border border-dashed border-white/12 py-16 text-center text-sm text-white/45",
      children: "No members yet — be the first to put your bandana on.",
    });
  const _ =
      "rounded-full border border-white/20 px-5 py-2 text-[11px] font-bold tracking-[0.25em] text-white transition hover:border-[var(--brand-green)]/70 hover:text-[var(--brand-green)] disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:border-white/20 disabled:hover:text-white",
    w = b.length > 1 || n;
  return y.jsxs("div", {
    "code-path": "src/components/gang/MemberWall.tsx:71:5",
    className: "w-full",
    children: [
      w &&
        y.jsxs("div", {
          "code-path": "src/components/gang/MemberWall.tsx:73:9",
          className: "mb-5 flex items-center justify-between",
          children: [
            y.jsxs("div", {
              "code-path": "src/components/gang/MemberWall.tsx:74:11",
              className:
                "text-[11px] font-semibold tracking-[0.3em] text-white/40",
              children: [
                String(f + 1).padStart(2, "0"),
                y.jsx("span", {
                  "code-path": "src/components/gang/MemberWall.tsx:76:13",
                  className: "mx-1.5 text-white/25",
                  children: "/",
                }),
                String(b.length).padStart(2, "0"),
                n
                  ? y.jsx("span", {
                      "code-path": "src/components/gang/MemberWall.tsx:78:24",
                      className: "text-[var(--brand-green)]/70",
                      children: "+",
                    })
                  : null,
                r &&
                  y.jsx("span", {
                    "code-path": "src/components/gang/MemberWall.tsx:79:25",
                    className: "ml-3 text-white/30",
                    children: "LOADING…",
                  }),
              ],
            }),
            y.jsxs("div", {
              "code-path": "src/components/gang/MemberWall.tsx:82:11",
              className: "hidden items-center gap-2 md:flex",
              children: [
                y.jsx("button", {
                  "code-path": "src/components/gang/MemberWall.tsx:83:13",
                  type: "button",
                  onClick: () => l?.scrollPrev(),
                  disabled: !p,
                  className: _,
                  children: "← PREV",
                }),
                y.jsx("button", {
                  "code-path": "src/components/gang/MemberWall.tsx:86:13",
                  type: "button",
                  onClick: () => l?.scrollNext(),
                  disabled: !g,
                  className: _,
                  children: "NEXT →",
                }),
              ],
            }),
          ],
        }),
      y.jsx(x6, {
        "code-path": "src/components/gang/MemberWall.tsx:94:7",
        setApi: c,
        opts: { align: "start" },
        className: "-m-4",
        children: y.jsx(v6, {
          "code-path": "src/components/gang/MemberWall.tsx:95:9",
          className: "ml-0",
          children: b.map((S, E) =>
            y.jsx(
              y6,
              {
                "code-path": "src/components/gang/MemberWall.tsx:97:13",
                className: "p-4",
                children: y.jsx("div", {
                  "code-path": "src/components/gang/MemberWall.tsx:98:13",
                  className:
                    "grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 md:gap-4",
                  children: S.map((C) =>
                    y.jsxs(
                      "div",
                      {
                        "code-path":
                          "src/components/gang/MemberWall.tsx:100:17",
                        className:
                          "group relative aspect-square overflow-hidden rounded-xl bg-white/[0.03] transition duration-300 hover:shadow-[0_0_24px_rgba(213,252,4,.35)] hover:ring-2 hover:ring-[var(--brand-green)]/70",
                        children: [
                          y.jsx("img", {
                            "code-path":
                              "src/components/gang/MemberWall.tsx:104:19",
                            src: C.image,
                            alt: C.username ?? "Gang member",
                            loading: "lazy",
                            className:
                              "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.07]",
                          }),
                          C.username &&
                            y.jsx("div", {
                              "code-path":
                                "src/components/gang/MemberWall.tsx:111:21",
                              className:
                                "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2.5 pb-2 pt-6 text-[10px] font-semibold tracking-wider text-white/85 opacity-0 transition duration-300 group-hover:opacity-100",
                              children: C.username,
                            }),
                        ],
                      },
                      C.id
                    )
                  ),
                }),
              },
              E
            )
          ),
        }),
      }),
    ],
  });
}
const w6 = "" + new URL("hood-map-Y1Wo4WOn.webp", import.meta.url).href,
  T6 = "" + new URL("boyz-icon-DBRkCeWe.webp", import.meta.url).href,
  E6 = "" + new URL("boyz-detail-BAI-8QSd.webp", import.meta.url).href,
  C6 =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0LDQgQEA0JCQgJCA0HBwcHBw8ICQcKIBEWIiARHxMkKDQsGRoxHRMTLT0tMSkrOi4uFx8/ODMsNygtLisBCgoKDg0NFw4QFy4jFiMrKzc3ODc3Nys3LTc3Nys3LSsrKy0rKy0tKy0rNysrKy0rKystKysrKysrKysrKysrK//AABEIAMAAwAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAABAgUGB//EADgQAAICAQEHAgQEBAUFAAAAAAABAgMRBBITITFBUWEFcQZCgZEiMmLBFDNS0UNTobHSFSOSouH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQMCBAX/xAAgEQEBAQACAgIDAQAAAAAAAAAAAQIDERIhBDETFCJB/9oADAMBAAIRAxEAPwD5eyi2UHSAb4dfuGKa59gFMkNWQ2X4fIyESLw14G0847MTD0S4PwAUqS4P2LIFKEJJcX7lERZCEiuKKGV09iEIFRvn4FpPOQtz5LuBCIWUbrjtPx1AJRDr9gzK7ECrLRksDNdql4l2NCYau7kn9wg2CEyUFVNZT/0FZLGe6Ggd0M8eqCAGq3horBMANZIZqeUu6N4Ipa1fiZgNeuQLARRqpcUVgJQuYBSF4MWPCfdhQbHlsyaKwVFJZx3GorCRimGOPVhAqFlEwBZmdmz5kYnb0X3A5CIUWUASu3HPig6ecChqE2vYBghUZZLChWwx7GBprh4YGVeGHKUvD9w6QKMByEMpHNqeRa2vggWwdCVfBgt0Tyc3RTYC1R4Pyw26Cxq4IeRNFsC93F+EPzhhMUlAsrryLtBKo59kRV5YZLC8Iva9qLKKlLBXTTeAFlueXBFSm37djARZCiwDygn79wUqmvKDkClixiUU/wC4KVbXlBA08Ha+HvSp+oWqCzXVXiep1Djwqh/fwcbB9U+F9JHTaPSw4Kc1v9S+u8f/AM4GHPy+GfX28ny+f8WPX3XkPiiuuvU7mqKro0dMNLFdZT5t+XlnK3WfcPrZWfxGr3nC7+JnvP0vaNwgXN/mNMX+IXjWNUV8wiqDV18jm6ca2GqTCpOlCojo5mfmzvI5rpNukfVPIk6i+ZORyLqxadR1p1cwTp5nc00ztzHVsnW+FYVWap02xVlGspnp5p/LPmnno8oUtrM+nymtTo93xtWpg6/1PaOtX+a73f4q/iL0qfp9rg82VWZnptRs8LYf38HGbyfVvivSR1Oj1MeDsrW/0z67xdPsfKScHJ559/bP4nP+XHv7imQJGtvwgsYpe/c3esGFTfhB4Vpe/dkyWmF6ZUk+qLYoXGbXUIZNIBG59eISNsfYKY0yhvaXNZrjbB2pfNDPE+g6PV/jabWzN8O2T51F5PQ6DVudVfSdWKZvx0Z5fkY8o+d87i85K6fxB6FPVXRtq3alKtQ1MLLVXtTXKX2OfD0PVQ4bpTX6LoP9zqQ9ZSSzGTaXFqRtesV/rj7xPPN8knTx55ubE8evTnx9MvjjNNv0qbNLRyjnaTrgudl0diETpw9TqfzxXvwON6pr9/bOOdqujFcOOVt44nfH5bvVbcOt8uurOjMLKFw3s2l1/h3j/cJvKP8AOj9aZr9jj5Jk9H4Mvd+vl2N5p1/ixftTN/sYlbp3/iT9/wCHeP8Ac5WSZH4Mp+vl1HopPDUXZB/knT+NSMS9Mvlypt+sGgPpmu3FsE5bMLs1/mwtvHA7kvUal88X7cTz8nljXUjw8298WupO3Bn6Fq55/wC0oLvO6Ef3Oh8O+hT0t0rbt25RrcNNCu1WbM3zkNS9XqXWcvaIGz1pNNKMk2uDcji75LOumOufm3PHo7rNXmaSa2K39Mnz3UqG8ucFiqVsnVn5YZ4He12rcKrOe3dmmL8dWeek/oej4+PGPd8Hi8JayzJJWx9wUrX2SPU+gMinJLqhdzb6soIog017EcV2QCyLSDOuPYirQGYD+j1E684w4yWJwnHKkhaNS8jVNXLiZ6Z7ncdGu2E+cZ1vvXPK+zFrtZTCWzv63Lqpxa2fGeQH1SuW7js5dOFvmpPb2/8AicZ0Q/pRxnErHPDm+3oJ34hOa2ZwhFzcq5qaBemzbg2/zym5z9ziR0TcbJLaUK0nOcn+DwvfwdX065NTXVSyaZzI0xiZdDJeQKkVZPEWdtR8k2gFc8xRrIAfUpNQTX5oTU4e4zC/MIzbjCucVNTsmoIR9RuSUF1bych6OWIzkpbFmXU08wl3Xv4ON5lZcmJp6OnXUTls7+tS6KEW9r68g9t0Icozm+9k8L7I8qqI9kdr0quWxLbzucPc5k9uT/4mesSMtcOZ7VrNRO3GcRUFiEILCic+aOhdVz4is6l5O8t8eoVZljG6Xkvdx7GjsuVgZUV2RaXsFUWkLu5+Ct7LuFMkFtt92RP3CHYv2GqZLujm1jdT5GemenWomvdNYa2cqSNr0/T2c6kn3rbrFaOh0tOjDXcebfc+nL+Kpwoo0lVaVcZW7xwXZdSek6TT6leoVytr0muhc79DqrLVCFvetnN+LrNq+GPy1wVf1FNU/wAdnmWTXOb4xpjF8JJfbpfxDqlZXbiF1TxLElNS856op3OeODjDpnnI5MElKt8OFiOjk2jeCq5wzw2odcc4kWq3sq66sTuteK8tJR856IGmc2zDnY+H52CvR+rabT6b/p9ashqtbO1ajX6quanCrtWivhWcL6NXVZFThG3fKD+VM4Ok/mV+JZHPhCzZ1E+kLIOv69DHWb4337YaxZiy327z9O01fKqLfeyTsB3zXHouSWMKI7qEc29PiZZvbPFt+y9sl3QrN+xq18xWxnoy9ORCmLN+5Np92dNDJYtvJdzSufgp2EQMqe7NRrj2ABFN9Aka34QYsCQrXuM1i6ZuFvY5sc6joVSHKrsfQ5Vc+Q3FOUZJPDlFpMxsefUcL1V7xWy6ux2C9c95BP8AxKkoWfqh0f7D2opa24tYbTRxqLHXPPZuM4/1LqjeN/8ADLf+jTHsg4UwSU5tqmf8pfPNBN1DpOcV0zxKv2vaEE+fltj27h1nZJdUuAOdMMOcJZph/MXWKAXsnu4P/MsTUf0w6v8AYY9Klut1LqrFYcy6x2Sz3ajFdl2Ovp6XLZilmWEiX6Tr09LZcKXTJKLjGKb2nGKTYlZYYZjDM9pcxScE/ASVvczk2keiQCdT8MHJPyhojOnRQiGXXF9AcqezAK0Uak0vAGV3b7sKK39Ac7u33AybZYRe1n3CwYGKGYQxjuRLDFS5ZHK58hKMjbtx7s4sZahzUxjbFL51+Sf9J5X1CiVVk01jL20+jPQQtNX6aGog1Lg1/LsXODJL0mb05ONumldHThf+TK08HCLTeVtcPYDYrNO5Vy4Qck00s/VBHTJ4w7JwfFTh+FSRo1i9RBzSSeFniXKOxTcuirw/faRlUSXN2VxXGUp8ooHVG3UuNceMFJybax9WEC0FErbIpLOHtvskep0tcaotcHN85/1AdPpoaeGI8W/5lj5zZidpnb241ezNlgleuePsbVufdcwcpFkXOSkmD2mg9kM56MXkjtoLC7v9wqeRUpPHgqmSwUbu/wB0Fi0/IUrJt8+JCiBFmoxbLhXnwg6WMAVGODRCBU2sA95lmLJ5fhGUyObDMJ8hyNnI59PVh0znpzci6uEbYbMlns/mizz+pplU8PivlkuUkdmyzkCtxNNPin/6ieknpy9NRK2WFwXzSfKKPQ6SEaoKMVjD4z6zYlViCwlhINVZzF9l9m52cxOc+ZuUwFz5DpZlN5gJtZwK5NQsx7M6dSDtmZRyXkjK6LSi0ZGmgFlePKCMFp48FFgTAWurv9gkK1HzI0BRCygqArbOn3NWz2fdizYRshjJqt8fYBmKwkWDdhW+IJbLj7IztAJ3cX7lb0IO5GqpcfdC29LjdxRQ8VJZTBK4tWEUMrJLXx8MxtFDFU+S+wQTTGq57S8oDRZC8BQp1c2vsBGzM61LwwjRCyYCqKk8Jli1s847LkBmTy2ZaNFBGcB4VYS7sxVHLXbmNNABdZiVXMYwZsf4ZEHPdZNyHwQoXVJpVhiAajVyNqs3B8F7G8EAJ18H3QvgeF7IYbKBJBIyw0UkWA1F5waFqrMPwxkLEIQsD//Z",
  A6 = "" + new URL("black-bulls-detail-q5PXxggN.webp", import.meta.url).href,
  N6 = "" + new URL("trolls-icon-2Kh38Ycp.png", import.meta.url).href,
  R6 = "" + new URL("trolls-detail-DtuX96cf.webp", import.meta.url).href,
  O6 = "" + new URL("tung-tungs-icon-CH66m5RS.jpg", import.meta.url).href,
  M6 = "" + new URL("tung-tungs-detail-CZqXgTDl.webp", import.meta.url).href,
  z6 = "" + new URL("jimothys-icon-DaW70JOF.jpg", import.meta.url).href,
  j6 = "" + new URL("jimothys-detail-C2Vl-XKj.webp", import.meta.url).href,
  D6 = "" + new URL("neets-icon-BKQWx4iB.png", import.meta.url).href,
  k6 = "" + new URL("neets-detail-BC3v7zFv.webp", import.meta.url).href,
  il = [
    {
      id: "boyz",
      name: "THE BOYZ",
      pairAddress: null,
      dexUrl: null,
      icon: T6,
      image: E6,
      description:
        "The crew that runs the center of the map. The block belongs to the Boyz.",
      x: 45,
      y: 63,
    },
    {
      id: "black-bulls",
      name: "BLACK BULLS",
      pairAddress: "fnzky6x7entq1er3d225dqyt7ybfka4pskbmqhb8l3cc",
      dexUrl:
        "https://dexscreener.com/solana/fnzky6x7entq1er3d225dqyt7ybfka4pskbmqhb8l3cc",
      icon: C6,
      image: A6,
      description:
        "The Boyz' biggest op. The Bulls are delusional, and that is what makes them the most dangerous gang in all of the hood.",
      x: 27,
      y: 48,
    },
    {
      id: "trolls",
      name: "THE TROLLS",
      pairAddress: "4w2cysotx6czaugmmwg13hdpy4qemg2czekyeqyk9ama",
      dexUrl:
        "https://dexscreener.com/solana/4w2cysotx6czaugmmwg13hdpy4qemg2czekyeqyk9ama",
      icon: N6,
      image: R6,
      description:
        "They don't shoot first — they post first. Known for ragebaiting their ops into traps.",
      x: 23,
      y: 25,
    },
    {
      id: "tung-tungs",
      name: "TUNG TUNGS",
      pairAddress: "3kfcgj5r3zshw8htdbzjsrrksrymkvsmfhc4vo4iddxd",
      dexUrl:
        "https://dexscreener.com/solana/3kfcgj5r3zshw8htdbzjsrrksrymkvsmfhc4vo4iddxd",
      icon: O6,
      image: M6,
      description:
        "Nobody knows what they're saying. Everybody knows what the bats are for.",
      x: 50,
      y: 26,
    },
    {
      id: "jimothys",
      name: "JIMOTHYS",
      pairAddress: "5pghkctym6odbhgo2tkmst2ajmjsb2uzbqrkkn4zuft5",
      dexUrl:
        "https://dexscreener.com/solana/5pghkctym6odbhgo2tkmst2ajmjsb2uzbqrkkn4zuft5",
      icon: z6,
      image: j6,
      description:
        "A rabid, disabled crew of literal animals. The most vicious gang in the hood.",
      x: 67,
      y: 52,
    },
    {
      id: "neets",
      name: "NEETS",
      pairAddress: "5wnu5qhdprgrl37ffcd6tmmqzugqgxwafgz477rshthy",
      dexUrl:
        "https://dexscreener.com/solana/5wnu5qhdprgrl37ffcd6tmmqzugqgxwafgz477rshthy",
      icon: D6,
      image: k6,
      description:
        "No work. No school. The NEETs have nothing but time — and an endless amount of it to cause trouble. They're best known for gooning on their ops.",
      x: 76,
      y: 27,
    },
  ];
async function L6(s) {
  const n = s.filter(Boolean);
  if (n.length === 0) return {};
  const r = await fetch(
    `https://api.dexscreener.com/latest/dex/pairs/solana/${n.join(",")}`
  );
  if (!r.ok) throw new Error(`dexscreener ${r.status}`);
  const i = await r.json(),
    l = {};
  for (const c of i.pairs ?? [])
    c.pairAddress &&
      (l[c.pairAddress.toLowerCase()] = {
        marketCap: c.marketCap ?? c.fdv ?? null,
        priceUsd: c.priceUsd ? parseFloat(c.priceUsd) : null,
        liquidityUsd: c.liquidity?.usd ?? null,
      });
  return l;
}
function jm(s) {
  return s == null || !isFinite(s)
    ? "—"
    : s >= 1e9
    ? `$${(s / 1e9).toFixed(1)}B`
    : s >= 1e6
    ? `$${(s / 1e6).toFixed(1)}M`
    : s >= 1e3
    ? `$${(s / 1e3).toFixed(1)}K`
    : `$${s.toFixed(0)}`;
}
const H6 = 12e4;
let np = null,
  Gv = 0;
const ap = {};
function U6() {
  if (!np || Date.now() - Gv > H6) {
    Gv = Date.now();
    const s = il.map((n) => n.pairAddress).filter((n) => !!n);
    np = fetch(Tm(`/api/holders?pairs=${s.join(",")}`))
      .then((n) => (n.ok ? n.json() : { holders: {} }))
      .then((n) => {
        const r = n.holders ?? {};
        for (const [i, l] of Object.entries(r)) l != null && (ap[i] = l);
        return { ...ap };
      })
      .catch(() => ({ ...ap }));
  }
  return np;
}
async function B6(s) {
  return s.pairAddress
    ? (await U6())[s.pairAddress.toLowerCase()] ?? null
    : null;
}
function Dm(s) {
  return s == null || !isFinite(s)
    ? "—"
    : s >= 1e6
    ? `${(s / 1e6).toFixed(1)}M`
    : s >= 1e3
    ? `${(s / 1e3).toFixed(1)}K`
    : `${s}`;
}
function G6({ gang: s, stats: n, holders: r, rank: i, onBack: l }) {
  const c = j.useRef(null);
  j.useLayoutEffect(() => {
    const h = Ne.context(() => {
      Ne.fromTo(
        c.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.7, ease: "power2.out" }
      ),
        Ne.fromTo(
          ".gang-img",
          { scale: 1.12 },
          { scale: 1.02, duration: 2.4, ease: "power2.out" }
        ),
        Ne.fromTo(
          ".gang-copy",
          { opacity: 0, y: 44 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.35 }
        );
    }, c);
    return () => h.revert();
  }, [s.id]);
  const f = (h, p) =>
    y.jsxs("div", {
      "code-path": "src/components/gang/GangDetail.tsx:39:5",
      children: [
        y.jsx("div", {
          "code-path": "src/components/gang/GangDetail.tsx:40:7",
          className:
            "text-[10px] font-semibold tracking-[0.28em] text-white/55",
          children: h,
        }),
        y.jsx("div", {
          "code-path": "src/components/gang/GangDetail.tsx:41:7",
          className:
            "font-display mt-1 text-2xl text-[var(--brand-green)] md:text-3xl",
          children: p,
        }),
      ],
    });
  return y.jsxs("div", {
    "code-path": "src/components/gang/GangDetail.tsx:46:5",
    ref: c,
    className: "fixed inset-0 z-[70] overflow-hidden bg-[var(--night)]",
    children: [
      y.jsx("img", {
        "code-path": "src/components/gang/GangDetail.tsx:47:7",
        src: s.image,
        alt: s.name,
        className:
          "gang-img absolute inset-0 h-full w-full object-cover will-change-transform",
      }),
      y.jsx("div", {
        "code-path": "src/components/gang/GangDetail.tsx:48:7",
        className:
          "pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[var(--night)]/85 to-transparent",
      }),
      y.jsx("div", {
        "code-path": "src/components/gang/GangDetail.tsx:49:7",
        className:
          "pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[var(--night)]/95 via-[var(--night)]/45 to-transparent",
      }),
      y.jsx("div", {
        "code-path": "src/components/gang/GangDetail.tsx:50:7",
        className: "vignette pointer-events-none absolute inset-0",
      }),
      y.jsx("button", {
        "code-path": "src/components/gang/GangDetail.tsx:52:7",
        type: "button",
        onClick: l,
        className:
          "absolute left-5 top-5 z-10 rounded-full border border-white/25 bg-black/40 px-6 py-2.5 text-[13px] font-bold tracking-wide text-white backdrop-blur-md transition hover:border-[var(--brand-green)]/70 hover:text-[var(--brand-green)] md:left-10 md:top-8",
        children: "← BACK TO MAP",
      }),
      y.jsxs("div", {
        "code-path": "src/components/gang/GangDetail.tsx:60:7",
        className:
          "gang-copy absolute bottom-[7%] left-6 right-6 md:left-14 md:right-auto md:max-w-2xl",
        style: { textShadow: "0 2px 14px rgba(0,0,0,.65)" },
        children: [
          y.jsxs("div", {
            "code-path": "src/components/gang/GangDetail.tsx:64:9",
            className: "flex items-center gap-3",
            children: [
              y.jsx("img", {
                "code-path": "src/components/gang/GangDetail.tsx:65:11",
                src: s.icon,
                alt: "",
                className:
                  "h-10 w-10 rounded-full border border-white/20 object-cover md:h-12 md:w-12",
              }),
              y.jsx("div", {
                "code-path": "src/components/gang/GangDetail.tsx:66:11",
                className:
                  "text-[11px] font-semibold tracking-[0.3em] text-white/80 md:text-xs",
                children: "GANG FILE",
              }),
            ],
          }),
          y.jsx("h3", {
            "code-path": "src/components/gang/GangDetail.tsx:68:9",
            className:
              "font-display mt-2 text-5xl leading-[0.95] text-[var(--cream)] md:text-7xl",
            children: s.name,
          }),
          y.jsx("p", {
            "code-path": "src/components/gang/GangDetail.tsx:69:9",
            className: "mt-3 max-w-md text-sm text-white/90 md:text-base",
            children: s.description,
          }),
          y.jsxs("div", {
            "code-path": "src/components/gang/GangDetail.tsx:71:9",
            className: "mt-6 flex gap-8 md:gap-12",
            children: [
              f("GANG NET WORTH", jm(n?.marketCap)),
              f("GANG MEMBERS", Dm(r)),
              f("RANK", `#${i}`),
            ],
          }),
          s.dexUrl &&
            y.jsx("a", {
              "code-path": "src/components/gang/GangDetail.tsx:78:11",
              href: Va,
              target: "_blank",
              rel: "noreferrer",
              className:
                "mt-7 inline-block rounded-full bg-[var(--brand-green)] px-8 py-3.5 text-sm font-bold tracking-wide text-[var(--ink)] transition hover:brightness-110",
              children: "VIEW THE CHART →",
            }),
        ],
      }),
    ],
  });
}
function m_(s, n) {
  const r = (i) => (i.pairAddress ? n[i.pairAddress]?.marketCap ?? -1 : -1);
  return [...s].sort((i, l) => r(l) - r(i));
}
function Y6({ gangs: s, stats: n, holders: r, onSelect: i }) {
  const l = m_(s, n);
  return y.jsxs("div", {
    "code-path": "src/components/gang/Leaderboard.tsx:22:5",
    className:
      "rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-md md:p-5",
    children: [
      y.jsx("div", {
        "code-path": "src/components/gang/Leaderboard.tsx:23:7",
        className:
          "mb-3 text-[11px] font-semibold tracking-[0.3em] text-white/50",
        children: "RANKINGS",
      }),
      y.jsx("div", {
        "code-path": "src/components/gang/Leaderboard.tsx:24:7",
        className: "flex flex-col gap-1",
        children: l.map((c, f) => {
          const h = c.pairAddress ? n[c.pairAddress] : void 0;
          return y.jsxs(
            "button",
            {
              "code-path": "src/components/gang/Leaderboard.tsx:28:13",
              type: "button",
              onClick: () => i(c),
              className:
                "group flex items-center gap-3 rounded-xl px-2.5 py-2 text-left transition hover:bg-white/5",
              children: [
                y.jsx("span", {
                  "code-path": "src/components/gang/Leaderboard.tsx:34:15",
                  className:
                    "w-5 shrink-0 font-display text-lg text-[var(--brand-green)]",
                  children: f + 1,
                }),
                y.jsx("img", {
                  "code-path": "src/components/gang/Leaderboard.tsx:35:15",
                  src: c.icon,
                  alt: "",
                  className: "h-8 w-8 shrink-0 rounded-full object-cover",
                }),
                y.jsxs("span", {
                  "code-path": "src/components/gang/Leaderboard.tsx:36:15",
                  className: "min-w-0 flex-1",
                  children: [
                    y.jsx("span", {
                      "code-path": "src/components/gang/Leaderboard.tsx:37:17",
                      className:
                        "block truncate text-[13px] font-bold tracking-wide text-[var(--cream)]",
                      children: c.name,
                    }),
                    y.jsxs("span", {
                      "code-path": "src/components/gang/Leaderboard.tsx:40:17",
                      className: "block text-[11px] text-white/50",
                      children: [Dm(r[c.id]), " members"],
                    }),
                  ],
                }),
                y.jsx("span", {
                  "code-path": "src/components/gang/Leaderboard.tsx:44:15",
                  className:
                    "shrink-0 text-sm font-bold text-white/85 transition group-hover:text-[var(--brand-green)]",
                  children: jm(h?.marketCap),
                }),
              ],
            },
            c.id
          );
        }),
      }),
    ],
  });
}
const Yv = 6e4;
function q6(s, n) {
  return !s || n <= 0 ? 44 : 40 + 30 * Math.sqrt(s / n);
}
function X6() {
  const [s, n] = j.useState({}),
    [r, i] = j.useState({}),
    [l, c] = j.useState(null),
    [f, h] = j.useState(null),
    [p, m] = j.useState(!1),
    g = j.useRef(null),
    v = j.useRef(null),
    b = j.useRef(null),
    _ = j.useRef(!1);
  j.useEffect(() => {
    const A = window.matchMedia("(max-width: 640px)"),
      R = () => m(A.matches);
    return (
      R(),
      A.addEventListener("change", R),
      window.addEventListener("resize", R, { passive: !0 }),
      () => {
        A.removeEventListener("change", R),
          window.removeEventListener("resize", R);
      }
    );
  }, []),
    j.useEffect(() => {
      let A = !0;
      const R = () =>
        L6(il.map((H) => H.pairAddress).filter((H) => !!H))
          .then((H) => A && n(H))
          .catch(() => {});
      R();
      const D = setInterval(R, Yv);
      return () => {
        (A = !1), clearInterval(D);
      };
    }, []),
    j.useEffect(() => {
      let A = !0;
      const R = () =>
        Promise.all(il.map(async (H) => [H.id, await B6(H)])).then(
          (H) => A && i(Object.fromEntries(H))
        );
      R();
      const D = setInterval(R, Yv);
      return () => {
        (A = !1), clearInterval(D);
      };
    }, []);
  const w = j.useCallback((A) => {
      if (_.current) return;
      (_.current = !0),
        Ne.timeline({
          onComplete: () => {
            c(A), (_.current = !1);
          },
        })
          .set(v.current, { transformOrigin: `${A.x}% ${A.y}%` })
          .to(
            v.current,
            { scale: 2.6, duration: 1.15, ease: "power3.inOut" },
            0
          )
          .to(
            b.current,
            { opacity: 1, duration: 0.9, ease: "power2.in" },
            0.25
          );
    }, []),
    S = j.useCallback(() => {
      c(null),
        Ne.to(v.current, {
          scale: 1,
          duration: 1.1,
          ease: "power3.inOut",
          delay: 0.05,
        }),
        Ne.to(b.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.15,
        });
    }, []),
    E = Math.max(
      0,
      ...il.map((A) => (A.pairAddress && s[A.pairAddress]?.marketCap) || 0)
    ),
    C = m_(il, s);
  return y.jsxs("div", {
    "code-path": "src/components/gang/HoodMap.tsx:101:5",
    className: "relative",
    children: [
      y.jsxs("div", {
        "code-path": "src/components/gang/HoodMap.tsx:102:7",
        className: "grid gap-6 lg:grid-cols-[1fr_360px]",
        children: [
          y.jsxs("div", {
            "code-path": "src/components/gang/HoodMap.tsx:104:9",
            ref: g,
            className:
              "relative overflow-hidden rounded-[22px] border border-white/10 md:rounded-[30px]",
            children: [
              y.jsxs("div", {
                "code-path": "src/components/gang/HoodMap.tsx:108:11",
                ref: v,
                className: "relative will-change-transform",
                children: [
                  y.jsx("img", {
                    "code-path": "src/components/gang/HoodMap.tsx:109:13",
                    src: w6,
                    alt: "The hood — gang territories",
                    className: "block w-full",
                    draggable: !1,
                  }),
                  il.map((A) => {
                    const R = A.pairAddress ? s[A.pairAddress] : void 0,
                      D = q6(R?.marketCap, E) * (p ? 0.72 : 1),
                      H = f === A.id,
                      G = A.y < 30;
                    return y.jsxs(
                      "button",
                      {
                        "code-path": "src/components/gang/HoodMap.tsx:118:17",
                        type: "button",
                        "aria-label": `Open ${A.name}`,
                        onClick: () => w(A),
                        onMouseEnter: () => h(A.id),
                        onMouseLeave: () => h(null),
                        className: `absolute -translate-x-1/2 -translate-y-1/2 ${
                          H ? "z-30" : "z-10"
                        }`,
                        style: { left: `${A.x}%`, top: `${A.y}%` },
                        children: [
                          y.jsx("img", {
                            "code-path":
                              "src/components/gang/HoodMap.tsx:128:19",
                            src: A.icon,
                            alt: "",
                            draggable: !1,
                            className: `rounded-full border-2 object-cover transition-all duration-500 ease-out ${
                              H
                                ? "scale-110 border-[var(--brand-green)] shadow-[0_0_28px_rgba(213,252,4,.55)]"
                                : "border-white/40 shadow-[0_4px_18px_rgba(0,0,0,.6)]"
                            }`,
                            style: { width: D, height: D },
                          }),
                          y.jsxs("div", {
                            "code-path":
                              "src/components/gang/HoodMap.tsx:140:19",
                            className: `pointer-events-none absolute left-1/2 w-max -translate-x-1/2 rounded-xl border border-white/10 bg-black/80 px-3.5 py-2.5 text-left backdrop-blur-md transition duration-300 ${
                              G ? "top-full mt-2.5" : "bottom-full mb-2.5"
                            } ${
                              H
                                ? "translate-y-0 opacity-100"
                                : `${
                                    G ? "-translate-y-1" : "translate-y-1"
                                  } opacity-0`
                            }`,
                            children: [
                              y.jsx("div", {
                                "code-path":
                                  "src/components/gang/HoodMap.tsx:149:21",
                                className:
                                  "text-[12px] font-bold tracking-wide text-[var(--cream)]",
                                children: A.name,
                              }),
                              y.jsxs("div", {
                                "code-path":
                                  "src/components/gang/HoodMap.tsx:150:21",
                                className: "mt-0.5 text-[11px] text-white/70",
                                children: [
                                  "Net Worth ",
                                  y.jsx("span", {
                                    "code-path":
                                      "src/components/gang/HoodMap.tsx:151:33",
                                    className:
                                      "font-bold text-[var(--brand-green)]",
                                    children: jm(R?.marketCap),
                                  }),
                                ],
                              }),
                              y.jsxs("div", {
                                "code-path":
                                  "src/components/gang/HoodMap.tsx:153:21",
                                className: "text-[11px] text-white/70",
                                children: [
                                  "Members ",
                                  y.jsx("span", {
                                    "code-path":
                                      "src/components/gang/HoodMap.tsx:154:31",
                                    className: "font-bold text-white/90",
                                    children: Dm(r[A.id]),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      A.id
                    );
                  }),
                ],
              }),
              y.jsx("div", {
                "code-path": "src/components/gang/HoodMap.tsx:163:11",
                ref: b,
                className:
                  "pointer-events-none absolute inset-0 bg-[var(--night)] opacity-0",
              }),
            ],
          }),
          y.jsx(Y6, {
            "code-path": "src/components/gang/HoodMap.tsx:167:9",
            gangs: il,
            stats: s,
            holders: r,
            onSelect: w,
          }),
        ],
      }),
      l &&
        y.jsx(G6, {
          "code-path": "src/components/gang/HoodMap.tsx:171:9",
          gang: l,
          stats: l.pairAddress ? s[l.pairAddress] : void 0,
          holders: r[l.id] ?? null,
          rank: C.findIndex((A) => A.id === l.id) + 1,
          onBack: S,
        }),
    ],
  });
}
const V6 = [
    { id: "m1", image: Gb },
    { id: "m2", image: xm },
    { id: "m3", image: ym },
    { id: "m4", image: Zb },
    { id: "m5", image: Yb },
    { id: "m6", image: vm },
    { id: "m7", image: Xb },
    { id: "m8", image: bm },
    { id: "m9", image: qb },
    { id: "m10", image: Bb },
    { id: "m11", image: Vb },
    { id: "m12", image: Qb },
  ],
  Z6 = V6.map((s) => ({
    id: s.id,
    image: s.image,
    username: s.username ?? null,
  }));
function Q6() {
  const [s, n] = j.useState([]),
    [r, i] = j.useState(null),
    [l, c] = j.useState(!1);
  j.useEffect(() => {
    Rv()
      .then((m) => {
        n(m.members), i(m.nextCursor);
      })
      .catch(() => {});
  }, []);
  const f = (m) => {
      n((g) => [m, ...g.filter((v) => v.id !== m.id)]);
    },
    h = async () => {
      if (!(!r || l)) {
        c(!0);
        try {
          const m = await Rv(r);
          n((g) => {
            const v = new Set(g.map((b) => b.id));
            return [...g, ...m.members.filter((b) => !v.has(b.id))];
          }),
            i(m.nextCursor);
        } catch {
        } finally {
          c(!1);
        }
      }
    },
    p = r ? s : [...s, ...Z6];
  return y.jsx(Sm, {
    "code-path": "src/pages/Gang.tsx:59:5",
    kicker: "JOIN THE SET",
    title: "THE GANG",
    sub: "Put your bandana on, claim your block, and watch the map.",
    children: y.jsxs("div", {
      "code-path": "src/pages/Gang.tsx:64:7",
      className: "mx-auto max-w-[1433px] px-6 pb-10 md:px-14",
      children: [
        y.jsxs("section", {
          "code-path": "src/pages/Gang.tsx:65:9",
          className: "py-10",
          children: [
            y.jsx("h2", {
              "code-path": "src/pages/Gang.tsx:66:11",
              className:
                "font-display mb-8 mt-2 text-4xl text-[var(--cream)] md:text-5xl",
              children: "PUT YOUR BANDANA ON",
            }),
            y.jsx(V4, { "code-path": "src/pages/Gang.tsx:69:11", onPosted: f }),
          ],
        }),
        y.jsxs("section", {
          "code-path": "src/pages/Gang.tsx:72:9",
          className: "py-10",
          children: [
            y.jsx("div", {
              "code-path": "src/pages/Gang.tsx:73:11",
              className:
                "text-[11px] font-semibold tracking-[0.3em] text-white/50",
              children: "THE SET",
            }),
            y.jsx("h2", {
              "code-path": "src/pages/Gang.tsx:76:11",
              className:
                "font-display mb-8 mt-2 text-4xl text-[var(--cream)] md:text-5xl",
              children: "GANG MEMBERS",
            }),
            y.jsx(S6, {
              "code-path": "src/pages/Gang.tsx:79:11",
              members: p,
              hasMore: !!r,
              loading: l,
              onLoadMore: h,
            }),
          ],
        }),
        y.jsxs("section", {
          "code-path": "src/pages/Gang.tsx:87:9",
          className: "py-10",
          children: [
            y.jsx("div", {
              "code-path": "src/pages/Gang.tsx:88:11",
              className:
                "text-[11px] font-semibold tracking-[0.3em] text-white/50",
              children: "TURF",
            }),
            y.jsx("h2", {
              "code-path": "src/pages/Gang.tsx:91:11",
              className:
                "font-display mb-3 mt-2 text-4xl text-[var(--cream)] md:text-5xl",
              children: "THE HOOD MAP",
            }),
            y.jsx("p", {
              "code-path": "src/pages/Gang.tsx:94:11",
              className:
                "mb-8 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base",
              children:
                "Every gang holds a block. Tap a set to pull their file.",
            }),
            y.jsx(X6, { "code-path": "src/pages/Gang.tsx:97:11" }),
          ],
        }),
      ],
    }),
  });
}
Ne.registerPlugin(Re);
function P6() {
  const { pathname: s } = Qa();
  return (
    j.useEffect(() => {
      xf(!0), setTimeout(() => Re.refresh(), 80);
    }, [s]),
    null
  );
}
function K6() {
  return (
    j.useEffect(() => {
      r4();
      const s = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        n = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;
      if (s || n) return;
      const r = new a4({
        lerp: 0.09,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
      });
      Sv(r), r.on("scroll", Re.update);
      const i = (l) => r.raf(l * 1e3);
      return (
        Ne.ticker.add(i),
        Ne.ticker.lagSmoothing(0),
        () => {
          Sv(null), r.destroy();
        }
      );
    }, []),
    y.jsxs(y.Fragment, {
      children: [
        y.jsx(P6, { "code-path": "src/App.tsx:46:7" }),
        y.jsxs(M3, {
          "code-path": "src/App.tsx:47:7",
          children: [
            y.jsx(el, {
              "code-path": "src/App.tsx:48:9",
              path: "/",
              element: y.jsx(b4, { "code-path": "src/App.tsx:48:34" }),
            }),
            y.jsx(el, {
              "code-path": "src/App.tsx:49:9",
              path: "/characters",
              element: y.jsx(C4, { "code-path": "src/App.tsx:49:44" }),
            }),
            y.jsx(el, {
              "code-path": "src/App.tsx:50:9",
              path: "/places",
              element: y.jsx(j4, { "code-path": "src/App.tsx:50:40" }),
            }),
            y.jsx(el, {
              "code-path": "src/App.tsx:51:9",
              path: "/explore",
              element: y.jsx(k4, { "code-path": "src/App.tsx:51:41" }),
            }),
            y.jsx(el, {
              "code-path": "src/App.tsx:52:9",
              path: "/media",
              element: y.jsx(B4, { "code-path": "src/App.tsx:52:39" }),
            }),
            y.jsx(el, {
              "code-path": "src/App.tsx:53:9",
              path: "/gang",
              element: y.jsx(Q6, { "code-path": "src/App.tsx:53:38" }),
            }),
          ],
        }),
      ],
    })
  );
}
zS.createRoot(document.getElementById("root")).render(
  y.jsx(j.StrictMode, {
    "code-path": "src/main.tsx:8:3",
    children: y.jsx(tw, {
      "code-path": "src/main.tsx:9:5",
      children: y.jsx(K6, { "code-path": "src/main.tsx:10:7" }),
    }),
  })
);
