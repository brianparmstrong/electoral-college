'use strict';
var l = require('react'),
  e = function () {
    return (
      (e =
        Object.assign ||
        function (l) {
          for (var e, a = 1, t = arguments.length; a < t; a++)
            for (var n in (e = arguments[a]))
              Object.prototype.hasOwnProperty.call(e, n) && (l[n] = e[n]);
          return l;
        }),
      e.apply(this, arguments)
    );
  };
function a(l, e, a) {
  if (a || 2 === arguments.length)
    for (var t, n = 0, o = e.length; n < o; n++)
      (!t && n in e) ||
        (t || (t = Array.prototype.slice.call(e, 0, n)), (t[n] = e[n]));
  return l.concat(t || Array.prototype.slice.call(e));
}
'function' == typeof SuppressedError && SuppressedError;
var t,
  n = { exports: {} },
  o = {};
var r,
  s = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'production' === process.env.NODE_ENV
  ? (n.exports = (function () {
      if (t) return o;
      t = 1;
      var e = l,
        a = Symbol.for('react.element'),
        n = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        s =
          e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        i = { key: !0, ref: !0, __self: !0, __source: !0 };
      function c(l, e, t) {
        var n,
          o = {},
          c = null,
          d = null;
        for (n in (void 0 !== t && (c = '' + t),
        void 0 !== e.key && (c = '' + e.key),
        void 0 !== e.ref && (d = e.ref),
        e))
          r.call(e, n) && !i.hasOwnProperty(n) && (o[n] = e[n]);
        if (l && l.defaultProps)
          for (n in (e = l.defaultProps)) void 0 === o[n] && (o[n] = e[n]);
        return {
          $$typeof: a,
          type: l,
          key: c,
          ref: d,
          props: o,
          _owner: s.current,
        };
      }
      return (o.Fragment = n), (o.jsx = c), (o.jsxs = c), o;
    })())
  : (n.exports =
      (r ||
        ((r = 1),
        'production' !== process.env.NODE_ENV &&
          (function () {
            var e = l,
              a = Symbol.for('react.element'),
              t = Symbol.for('react.portal'),
              n = Symbol.for('react.fragment'),
              o = Symbol.for('react.strict_mode'),
              r = Symbol.for('react.profiler'),
              i = Symbol.for('react.provider'),
              c = Symbol.for('react.context'),
              d = Symbol.for('react.forward_ref'),
              u = Symbol.for('react.suspense'),
              p = Symbol.for('react.suspense_list'),
              f = Symbol.for('react.memo'),
              v = Symbol.for('react.lazy'),
              m = Symbol.for('react.offscreen'),
              h = Symbol.iterator,
              g = '@@iterator',
              y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            function M(l) {
              for (
                var e = arguments.length,
                  a = new Array(e > 1 ? e - 1 : 0),
                  t = 1;
                t < e;
                t++
              )
                a[t - 1] = arguments[t];
              !(function (l, e, a) {
                var t = y.ReactDebugCurrentFrame.getStackAddendum();
                '' !== t && ((e += '%s'), (a = a.concat([t])));
                var n = a.map(function (l) {
                  return String(l);
                });
                n.unshift('Warning: ' + e),
                  Function.prototype.apply.call(console[l], console, n);
              })('error', l, a);
            }
            var b,
              k = !1,
              x = !1,
              E = !1,
              N = !1,
              C = !1;
            function S(l) {
              return l.displayName || 'Context';
            }
            function w(l) {
              if (null == l) return null;
              if (
                ('number' == typeof l.tag &&
                  M(
                    'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
                  ),
                'function' == typeof l)
              )
                return l.displayName || l.name || null;
              if ('string' == typeof l) return l;
              switch (l) {
                case n:
                  return 'Fragment';
                case t:
                  return 'Portal';
                case r:
                  return 'Profiler';
                case o:
                  return 'StrictMode';
                case u:
                  return 'Suspense';
                case p:
                  return 'SuspenseList';
              }
              if ('object' == typeof l)
                switch (l.$$typeof) {
                  case c:
                    return S(l) + '.Consumer';
                  case i:
                    return S(l._context) + '.Provider';
                  case d:
                    return (function (l, e, a) {
                      var t = l.displayName;
                      if (t) return t;
                      var n = e.displayName || e.name || '';
                      return '' !== n ? a + '(' + n + ')' : a;
                    })(l, l.render, 'ForwardRef');
                  case f:
                    var e = l.displayName || null;
                    return null !== e ? e : w(l.type) || 'Memo';
                  case v:
                    var a = l,
                      s = a._payload,
                      m = a._init;
                    try {
                      return w(m(s));
                    } catch (l) {
                      return null;
                    }
                }
              return null;
            }
            b = Symbol.for('react.module.reference');
            var j,
              L,
              V,
              T,
              I,
              A,
              D,
              O = Object.assign,
              z = 0;
            function W() {}
            W.__reactDisabledLog = !0;
            var P,
              R = y.ReactCurrentDispatcher;
            function _(l, e, a) {
              if (void 0 === P)
                try {
                  throw Error();
                } catch (l) {
                  var t = l.stack.trim().match(/\n( *(at )?)/);
                  P = (t && t[1]) || '';
                }
              return '\n' + P + l;
            }
            var F,
              H = !1,
              K = 'function' == typeof WeakMap ? WeakMap : Map;
            function Y(l, e) {
              if (!l || H) return '';
              var a,
                t = F.get(l);
              if (void 0 !== t) return t;
              H = !0;
              var n,
                o = Error.prepareStackTrace;
              (Error.prepareStackTrace = void 0),
                (n = R.current),
                (R.current = null),
                (function () {
                  if (0 === z) {
                    (j = console.log),
                      (L = console.info),
                      (V = console.warn),
                      (T = console.error),
                      (I = console.group),
                      (A = console.groupCollapsed),
                      (D = console.groupEnd);
                    var l = {
                      configurable: !0,
                      enumerable: !0,
                      value: W,
                      writable: !0,
                    };
                    Object.defineProperties(console, {
                      info: l,
                      log: l,
                      warn: l,
                      error: l,
                      group: l,
                      groupCollapsed: l,
                      groupEnd: l,
                    });
                  }
                  z++;
                })();
              try {
                if (e) {
                  var r = function () {
                    throw Error();
                  };
                  if (
                    (Object.defineProperty(r.prototype, 'props', {
                      set: function () {
                        throw Error();
                      },
                    }),
                    'object' == typeof Reflect && Reflect.construct)
                  ) {
                    try {
                      Reflect.construct(r, []);
                    } catch (l) {
                      a = l;
                    }
                    Reflect.construct(l, [], r);
                  } else {
                    try {
                      r.call();
                    } catch (l) {
                      a = l;
                    }
                    l.call(r.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (l) {
                    a = l;
                  }
                  l();
                }
              } catch (e) {
                if (e && a && 'string' == typeof e.stack) {
                  for (
                    var s = e.stack.split('\n'),
                      i = a.stack.split('\n'),
                      c = s.length - 1,
                      d = i.length - 1;
                    c >= 1 && d >= 0 && s[c] !== i[d];

                  )
                    d--;
                  for (; c >= 1 && d >= 0; c--, d--)
                    if (s[c] !== i[d]) {
                      if (1 !== c || 1 !== d)
                        do {
                          if ((c--, --d < 0 || s[c] !== i[d])) {
                            var u = '\n' + s[c].replace(' at new ', ' at ');
                            return (
                              l.displayName &&
                                u.includes('<anonymous>') &&
                                (u = u.replace('<anonymous>', l.displayName)),
                              'function' == typeof l && F.set(l, u),
                              u
                            );
                          }
                        } while (c >= 1 && d >= 0);
                      break;
                    }
                }
              } finally {
                (H = !1),
                  (R.current = n),
                  (function () {
                    if (0 == --z) {
                      var l = {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                      };
                      Object.defineProperties(console, {
                        log: O({}, l, { value: j }),
                        info: O({}, l, { value: L }),
                        warn: O({}, l, { value: V }),
                        error: O({}, l, { value: T }),
                        group: O({}, l, { value: I }),
                        groupCollapsed: O({}, l, { value: A }),
                        groupEnd: O({}, l, { value: D }),
                      });
                    }
                    z < 0 &&
                      M(
                        'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
                      );
                  })(),
                  (Error.prepareStackTrace = o);
              }
              var p = l ? l.displayName || l.name : '',
                f = p ? _(p) : '';
              return 'function' == typeof l && F.set(l, f), f;
            }
            function $(l, e, a) {
              if (null == l) return '';
              if ('function' == typeof l)
                return Y(l, !(!(t = l.prototype) || !t.isReactComponent));
              var t;
              if ('string' == typeof l) return _(l);
              switch (l) {
                case u:
                  return _('Suspense');
                case p:
                  return _('SuspenseList');
              }
              if ('object' == typeof l)
                switch (l.$$typeof) {
                  case d:
                    return Y(l.render, !1);
                  case f:
                    return $(l.type, e, a);
                  case v:
                    var n = l,
                      o = n._payload,
                      r = n._init;
                    try {
                      return $(r(o), e, a);
                    } catch (l) {}
                }
              return '';
            }
            F = new K();
            var J = Object.prototype.hasOwnProperty,
              U = {},
              B = y.ReactDebugCurrentFrame;
            function G(l) {
              if (l) {
                var e = l._owner,
                  a = $(l.type, l._source, e ? e.type : null);
                B.setExtraStackFrame(a);
              } else B.setExtraStackFrame(null);
            }
            var q = Array.isArray;
            function X(l) {
              return q(l);
            }
            function Z(l) {
              return '' + l;
            }
            function Q(l) {
              if (
                (function (l) {
                  try {
                    return Z(l), !1;
                  } catch (l) {
                    return !0;
                  }
                })(l)
              )
                return (
                  M(
                    'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                    (function (l) {
                      return (
                        ('function' == typeof Symbol &&
                          Symbol.toStringTag &&
                          l[Symbol.toStringTag]) ||
                        l.constructor.name ||
                        'Object'
                      );
                    })(l)
                  ),
                  Z(l)
                );
            }
            var ll,
              el,
              al,
              tl = y.ReactCurrentOwner,
              nl = { key: !0, ref: !0, __self: !0, __source: !0 };
            al = {};
            var ol = function (l, e, t, n, o, r, s) {
              var i = {
                $$typeof: a,
                type: l,
                key: e,
                ref: t,
                props: s,
                _owner: r,
                _store: {},
              };
              return (
                Object.defineProperty(i._store, 'validated', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !0,
                  value: !1,
                }),
                Object.defineProperty(i, '_self', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !1,
                  value: n,
                }),
                Object.defineProperty(i, '_source', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !1,
                  value: o,
                }),
                Object.freeze && (Object.freeze(i.props), Object.freeze(i)),
                i
              );
            };
            function rl(l, e, a, t, n) {
              var o,
                r = {},
                s = null,
                i = null;
              for (o in (void 0 !== a && (Q(a), (s = '' + a)),
              (function (l) {
                if (J.call(l, 'key')) {
                  var e = Object.getOwnPropertyDescriptor(l, 'key').get;
                  if (e && e.isReactWarning) return !1;
                }
                return void 0 !== l.key;
              })(e) && (Q(e.key), (s = '' + e.key)),
              (function (l) {
                if (J.call(l, 'ref')) {
                  var e = Object.getOwnPropertyDescriptor(l, 'ref').get;
                  if (e && e.isReactWarning) return !1;
                }
                return void 0 !== l.ref;
              })(e) &&
                ((i = e.ref),
                (function (l, e) {
                  if (
                    'string' == typeof l.ref &&
                    tl.current &&
                    e &&
                    tl.current.stateNode !== e
                  ) {
                    var a = w(tl.current.type);
                    al[a] ||
                      (M(
                        'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                        w(tl.current.type),
                        l.ref
                      ),
                      (al[a] = !0));
                  }
                })(e, n)),
              e))
                J.call(e, o) && !nl.hasOwnProperty(o) && (r[o] = e[o]);
              if (l && l.defaultProps) {
                var c = l.defaultProps;
                for (o in c) void 0 === r[o] && (r[o] = c[o]);
              }
              if (s || i) {
                var d =
                  'function' == typeof l
                    ? l.displayName || l.name || 'Unknown'
                    : l;
                s &&
                  (function (l, e) {
                    var a = function () {
                      ll ||
                        ((ll = !0),
                        M(
                          '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                          e
                        ));
                    };
                    (a.isReactWarning = !0),
                      Object.defineProperty(l, 'key', {
                        get: a,
                        configurable: !0,
                      });
                  })(r, d),
                  i &&
                    (function (l, e) {
                      var a = function () {
                        el ||
                          ((el = !0),
                          M(
                            '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                            e
                          ));
                      };
                      (a.isReactWarning = !0),
                        Object.defineProperty(l, 'ref', {
                          get: a,
                          configurable: !0,
                        });
                    })(r, d);
              }
              return ol(l, s, i, n, t, tl.current, r);
            }
            var sl,
              il = y.ReactCurrentOwner,
              cl = y.ReactDebugCurrentFrame;
            function dl(l) {
              if (l) {
                var e = l._owner,
                  a = $(l.type, l._source, e ? e.type : null);
                cl.setExtraStackFrame(a);
              } else cl.setExtraStackFrame(null);
            }
            function ul(l) {
              return 'object' == typeof l && null !== l && l.$$typeof === a;
            }
            function pl() {
              if (il.current) {
                var l = w(il.current.type);
                if (l) return '\n\nCheck the render method of `' + l + '`.';
              }
              return '';
            }
            sl = !1;
            var fl = {};
            function vl(l, e) {
              if (l._store && !l._store.validated && null == l.key) {
                l._store.validated = !0;
                var a = (function (l) {
                  var e = pl();
                  if (!e) {
                    var a = 'string' == typeof l ? l : l.displayName || l.name;
                    a &&
                      (e =
                        '\n\nCheck the top-level render call using <' +
                        a +
                        '>.');
                  }
                  return e;
                })(e);
                if (!fl[a]) {
                  fl[a] = !0;
                  var t = '';
                  l &&
                    l._owner &&
                    l._owner !== il.current &&
                    (t =
                      ' It was passed a child from ' + w(l._owner.type) + '.'),
                    dl(l),
                    M(
                      'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                      a,
                      t
                    ),
                    dl(null);
                }
              }
            }
            function ml(l, e) {
              if ('object' == typeof l)
                if (X(l))
                  for (var a = 0; a < l.length; a++) {
                    var t = l[a];
                    ul(t) && vl(t, e);
                  }
                else if (ul(l)) l._store && (l._store.validated = !0);
                else if (l) {
                  var n = (function (l) {
                    if (null === l || 'object' != typeof l) return null;
                    var e = (h && l[h]) || l[g];
                    return 'function' == typeof e ? e : null;
                  })(l);
                  if ('function' == typeof n && n !== l.entries)
                    for (var o, r = n.call(l); !(o = r.next()).done; )
                      ul(o.value) && vl(o.value, e);
                }
            }
            function hl(l) {
              var e,
                a = l.type;
              if (null != a && 'string' != typeof a) {
                if ('function' == typeof a) e = a.propTypes;
                else {
                  if (
                    'object' != typeof a ||
                    (a.$$typeof !== d && a.$$typeof !== f)
                  )
                    return;
                  e = a.propTypes;
                }
                if (e) {
                  var t = w(a);
                  !(function (l, e, a, t, n) {
                    var o = Function.call.bind(J);
                    for (var r in l)
                      if (o(l, r)) {
                        var s = void 0;
                        try {
                          if ('function' != typeof l[r]) {
                            var i = Error(
                              (t || 'React class') +
                                ': ' +
                                a +
                                ' type `' +
                                r +
                                '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                                typeof l[r] +
                                '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                            );
                            throw ((i.name = 'Invariant Violation'), i);
                          }
                          s = l[r](
                            e,
                            r,
                            t,
                            a,
                            null,
                            'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
                          );
                        } catch (l) {
                          s = l;
                        }
                        !s ||
                          s instanceof Error ||
                          (G(n),
                          M(
                            '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                            t || 'React class',
                            a,
                            r,
                            typeof s
                          ),
                          G(null)),
                          s instanceof Error &&
                            !(s.message in U) &&
                            ((U[s.message] = !0),
                            G(n),
                            M('Failed %s type: %s', a, s.message),
                            G(null));
                      }
                  })(e, l.props, 'prop', t, l);
                } else
                  void 0 === a.PropTypes ||
                    sl ||
                    ((sl = !0),
                    M(
                      'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                      w(a) || 'Unknown'
                    ));
                'function' != typeof a.getDefaultProps ||
                  a.getDefaultProps.isReactClassApproved ||
                  M(
                    'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
                  );
              }
            }
            var gl = {};
            function yl(l, e, t, s, h, g) {
              var y = (function (l) {
                return (
                  'string' == typeof l ||
                  'function' == typeof l ||
                  !!(
                    l === n ||
                    l === r ||
                    C ||
                    l === o ||
                    l === u ||
                    l === p ||
                    N ||
                    l === m ||
                    k ||
                    x ||
                    E
                  ) ||
                  ('object' == typeof l &&
                    null !== l &&
                    (l.$$typeof === v ||
                      l.$$typeof === f ||
                      l.$$typeof === i ||
                      l.$$typeof === c ||
                      l.$$typeof === d ||
                      l.$$typeof === b ||
                      void 0 !== l.getModuleId))
                );
              })(l);
              if (!y) {
                var S,
                  j = '';
                (void 0 === l ||
                  ('object' == typeof l &&
                    null !== l &&
                    0 === Object.keys(l).length)) &&
                  (j +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),
                  (j += pl()),
                  null === l
                    ? (S = 'null')
                    : X(l)
                      ? (S = 'array')
                      : void 0 !== l && l.$$typeof === a
                        ? ((S = '<' + (w(l.type) || 'Unknown') + ' />'),
                          (j =
                            ' Did you accidentally export a JSX literal instead of a component?'))
                        : (S = typeof l),
                  M(
                    'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                    S,
                    j
                  );
              }
              var L = rl(l, e, t, h, g);
              if (null == L) return L;
              if (y) {
                var V = e.children;
                if (void 0 !== V)
                  if (s)
                    if (X(V)) {
                      for (var T = 0; T < V.length; T++) ml(V[T], l);
                      Object.freeze && Object.freeze(V);
                    } else
                      M(
                        'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
                      );
                  else ml(V, l);
              }
              if (J.call(e, 'key')) {
                var I = w(l),
                  A = Object.keys(e).filter(function (l) {
                    return 'key' !== l;
                  }),
                  D =
                    A.length > 0
                      ? '{key: someKey, ' + A.join(': ..., ') + ': ...}'
                      : '{key: someKey}';
                gl[I + D] ||
                  (M(
                    'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
                    D,
                    I,
                    A.length > 0 ? '{' + A.join(': ..., ') + ': ...}' : '{}',
                    I
                  ),
                  (gl[I + D] = !0));
              }
              return (
                l === n
                  ? (function (l) {
                      for (
                        var e = Object.keys(l.props), a = 0;
                        a < e.length;
                        a++
                      ) {
                        var t = e[a];
                        if ('children' !== t && 'key' !== t) {
                          dl(l),
                            M(
                              'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                              t
                            ),
                            dl(null);
                          break;
                        }
                      }
                      null !== l.ref &&
                        (dl(l),
                        M(
                          'Invalid attribute `ref` supplied to `React.Fragment`.'
                        ),
                        dl(null));
                    })(L)
                  : hl(L),
                L
              );
            }
            var Ml = function (l, e, a) {
                return yl(l, e, a, !1);
              },
              bl = function (l, e, a) {
                return yl(l, e, a, !0);
              };
            (s.Fragment = n), (s.jsx = Ml), (s.jsxs = bl);
          })()),
      s));
var i = n.exports,
  c = function (l) {
    return (l / 538) * 100;
  },
  d = function (l) {
    var e = l.proportionalReawardMode,
      t = l.renderPropErrorMessage,
      n = l.stateEVs,
      o = a([], l.voteTotals, !0).map(function (l) {
        return Number(l);
      }),
      r = (function (l, e) {
        return e.map(function (e) {
          return Math.round((e / 100) * l);
        });
      })(n, o),
      s = 0,
      i = a([], r, !0);
    return (
      r.forEach(function (l) {
        return (s += l);
      }),
      s > 0 &&
        s !== n &&
        (i = m({
          calculatedEVTotals: i,
          convertedVoteTotals: o,
          difference: n - s,
          proportionalReawardMode: e,
          renderPropErrorMessage: t,
        })),
      i
    );
  },
  u = function (l) {
    return l.findIndex(function (l) {
      return l > 50;
    });
  },
  p = function (l) {
    void 0 === l && (l = '');
    var e = '';
    switch (l) {
      case '1':
        e = 'Republican';
        break;
      case '2':
        e = 'Democratic';
        break;
      case '3':
        e = 'Libertarian';
        break;
      case '4':
        e = 'Green';
        break;
      case '5':
        e = 'Independent';
        break;
      default:
        e = '';
    }
    return e;
  },
  f = function (l) {
    var e = {};
    return (
      l.map(function (l) {
        return (
          -1 === l.name.indexOf('-CD') && (e[l.stateCode] = p(l.winner)), e
        );
      }),
      e
    );
  },
  v = function (l) {
    void 0 === l && (l = '');
    var e = '';
    switch (l) {
      case '1':
      case 'Republican':
        e = 'gop';
        break;
      case '2':
      case 'Democratic':
        e = 'dem';
        break;
      case '3':
      case 'Libertarian':
        e = 'lib';
        break;
      case '4':
      case 'Green':
        e = 'grn';
        break;
      case '5':
      case 'Independent':
        e = 'ind';
        break;
      default:
        e = '';
    }
    return e;
  },
  m = function (l) {
    var e = l.calculatedEVTotals,
      t = l.convertedVoteTotals,
      n = l.difference,
      o = l.proportionalReawardMode,
      r = l.renderPropErrorMessage,
      s = a([], e, !0),
      i = n > 0,
      c = Math.abs(n),
      d = (function (l, e) {
        for (
          var a,
            t,
            n = -1 / 0,
            o = -1 / 0,
            r = 1 / 0,
            s = 1 / 0,
            i = 1 / 0,
            c = 0,
            d = l;
          c < d.length;
          c++
        ) {
          var u = d[c];
          u > n
            ? ((o = (a = [n, u])[0]), (n = a[1]))
            : u < n && u > o && (o = u),
            u < i
              ? ((r = s), (s = (t = [i, u])[0]), (i = t[1]))
              : u > i && u < s
                ? ((r = s), (s = u))
                : u > i && u > s && (r = u);
        }
        return (
          (n !== o && o !== r && r !== s && s !== i) ||
            e(
              'voteTotals',
              'You must pass unique vote totals for every candidate in every state even if they have not received any votes.'
            ),
          { first: n, second: o, third: r, fourth: s, fifth: i }
        );
      })(t, r),
      u = t.findIndex(function (l) {
        return l === d.first;
      }),
      p = t.findIndex(function (l) {
        return l === d.second;
      }),
      f = function (l) {
        switch (l) {
          case 'fifth':
            return 'fourth';
          case 'fourth':
            return 'third';
          case 'third':
            return 'second';
        }
      },
      v = function (l, e) {
        void 0 === e && (e = 'fifth');
        var a = t.findIndex(function (l) {
            return l === d[e];
          }),
          n = s[a];
        n && n < l
          ? ((s[a] = 0), v(l - n, f(e)))
          : n
            ? (s[a] -= l)
            : v(l, f(e));
      };
    return (
      i
        ? 'stateWinner' === o
          ? (s[u] += c)
          : ((s[u] += Math.ceil(n / 2)), (s[p] += Math.floor(n / 2)))
        : v(c),
      s
    );
  },
  h = function (l) {
    return i.jsxs(
      'div',
      e(
        { className: 'electoralVotesWrapper' },
        {
          children: [
            i.jsx(
              'p',
              e(
                { className: 'electoralVotesLabel' },
                { children: 'Winner-Take-All:' }
              )
            ),
            i.jsx(
              'span',
              e(
                { className: 'electoralVotes', id: ''.concat(l.party, '-wta') },
                { children: l.winnerTakeAllTotal }
              )
            ),
            i.jsx(
              'p',
              e(
                { className: 'electoralVotesLabel' },
                { children: 'Proportional:' }
              )
            ),
            i.jsx(
              'span',
              e(
                {
                  className: 'electoralVotes',
                  id: ''.concat(l.party, '-prop'),
                },
                { children: l.popularVoteTotals }
              )
            ),
          ],
        }
      )
    );
  },
  g = function (l) {
    var a = l.imageSrc,
      t = l.name,
      n = l.party,
      o = l.popularVoteTotals,
      r = l.winnerTakeAllTotal;
    return i.jsxs(
      'div',
      e(
        { className: 'candidate candidate-'.concat(n) },
        {
          children: [
            i.jsx('h2', { children: l.name }),
            a && i.jsx('img', { src: a, alt: t }),
            i.jsx(h, { party: n, popularVoteTotals: o, winnerTakeAllTotal: r }),
          ],
        }
      )
    );
  },
  y = function (l) {
    var a = l.candidateImageSources,
      t = l.candidatesData,
      n = l.popularVoteTotals,
      o = l.renderPropErrorMessage,
      r = l.winnerTakeAllTotals,
      s = t.map(function (l, e) {
        return (
          (l.name && l.party) ||
            o('candidatesData', 'candidatesData prop is malformed'),
          i.jsx(
            g,
            {
              imageSrc: null == a ? void 0 : a[l.party],
              name: l.name,
              party: l.party,
              popularVoteTotals: n[e],
              winnerTakeAllTotal: r[e],
            },
            'candidate-'.concat(e)
          )
        );
      });
    return i.jsx('div', e({ className: 'candidatesWrapper' }, { children: s }));
  },
  M = function (a) {
    var t = a.candidateImageSources,
      n = a.candidates,
      o = a.evPct,
      r = a.popVoteTotals,
      s = a.pvPct,
      c = a.renderPropErrorMessage,
      d = a.winnerTakeAllTotals,
      f = l.useState(u(d)),
      m = f[0],
      h = f[1],
      g = l.useState(u(r)),
      M = g[0],
      b = g[1],
      k = l.useState(p(String(m + 1))),
      x = k[0],
      E = k[1],
      N = l.useState(p(String(M + 1))),
      C = N[0],
      S = N[1],
      w = l.useState(v(String(m + 1))),
      j = w[0],
      L = w[1],
      V = l.useState(v(String(M + 1))),
      T = V[0],
      I = V[1];
    l.useEffect(
      function () {
        b(u(s));
      },
      [s]
    ),
      l.useEffect(
        function () {
          h(u(o));
        },
        [o]
      ),
      l.useEffect(
        function () {
          var l = String(M + 1),
            e = p(l);
          S(e), I(v(l));
        },
        [M]
      ),
      l.useEffect(
        function () {
          var l = String(m + 1),
            e = p(l);
          E(e), L(v(l));
        },
        [m]
      );
    var A = function (l) {
      return (
        100 -
        l.reduce(function (l, e) {
          return l + e;
        }, 0)
      );
    };
    return i.jsxs('div', {
      children: [
        i.jsx('h1', { children: 'Electoral College 2024' }),
        i.jsxs(
          'div',
          e(
            { className: 'votes-counter', id: 'ev-votes-counter' },
            {
              children: [
                i.jsx('h3', {
                  children: 'Winner-Take-All Electoral Votes Counter',
                }),
                i.jsx(
                  'h3',
                  e(
                    {
                      className: 'wta-winner '
                        .concat(j, ' ')
                        .concat(m > -1 ? 'show' : 'hide'),
                    },
                    { children: 'Winner: '.concat(x) }
                  )
                ),
                i.jsxs('div', {
                  children: [
                    i.jsx('div', { className: 'votes-winner-line' }),
                    i.jsxs(
                      'div',
                      e(
                        { className: 'votes-parties' },
                        {
                          children: [
                            i.jsx('span', {
                              className: 'gop-votes',
                              style: { width: o[0] + '%' },
                            }),
                            i.jsx('span', {
                              className: 'lib-votes',
                              style: { width: o[2] + '%' },
                            }),
                            i.jsx('span', {
                              className: 'unawarded-votes',
                              style: { width: A(o) + '%' },
                            }),
                            i.jsx('span', {
                              className: 'grn-votes',
                              style: { width: o[3] + '%' },
                            }),
                            i.jsx('span', {
                              className: 'ind-votes',
                              style: { width: o[4] + '%' },
                            }),
                            i.jsx('span', {
                              className: 'dem-votes',
                              style: { width: o[1] + '%' },
                            }),
                          ],
                        }
                      )
                    ),
                  ],
                }),
              ],
            }
          )
        ),
        i.jsxs(
          'div',
          e(
            { className: 'votes-counter', id: 'pop-votes-counter' },
            {
              children: [
                i.jsx('h3', {
                  children: 'Proportional Electoral Votes Counter',
                }),
                i.jsx(
                  'h3',
                  e(
                    {
                      className: 'prop-winner '
                        .concat(T, ' ')
                        .concat(M > -1 ? 'show' : 'hide'),
                    },
                    { children: 'Winner: '.concat(C) }
                  )
                ),
                i.jsxs('div', {
                  children: [
                    i.jsx('div', { className: 'votes-winner-line' }),
                    i.jsxs(
                      'div',
                      e(
                        { className: 'votes-parties' },
                        {
                          children: [
                            i.jsx('span', {
                              className: 'gop-votes',
                              style: { width: s[0] + '%' },
                            }),
                            i.jsx('span', {
                              className: 'lib-votes',
                              style: { width: s[2] + '%' },
                            }),
                            i.jsx('span', {
                              className: 'unawarded-votes',
                              style: { width: A(s) + '%' },
                            }),
                            i.jsx('span', {
                              className: 'grn-votes',
                              style: { width: s[3] + '%' },
                            }),
                            i.jsx('span', {
                              className: 'ind-votes',
                              style: { width: s[4] + '%' },
                            }),
                            i.jsx('span', {
                              className: 'dem-votes',
                              style: { width: s[1] + '%' },
                            }),
                          ],
                        }
                      )
                    ),
                  ],
                }),
              ],
            }
          )
        ),
        i.jsx(y, {
          candidateImageSources: t,
          candidatesData: n,
          popularVoteTotals: r,
          renderPropErrorMessage: c,
          winnerTakeAllTotals: d,
        }),
      ],
    });
  },
  b = function (l) {
    var a = l.handleClear;
    return i.jsx(
      'div',
      e(
        { className: 'buttonWrapper' },
        {
          children: i.jsx(
            'button',
            e(
              { id: 'clearButton', type: 'button', onClick: a },
              { children: 'Clear' }
            )
          ),
        }
      )
    );
  },
  k = function (l) {
    var a = l.currentEVTotals,
      t = l.currentPVTotals,
      n = l.handleSave;
    return i.jsx(
      'div',
      e(
        { className: 'buttonWrapper' },
        {
          children: i.jsx(
            'button',
            e(
              {
                id: 'saveButton',
                type: 'button',
                onClick: function () {
                  for (
                    var l,
                      e,
                      o,
                      r = document.getElementsByClassName('stateWrapper'),
                      s = r.length,
                      i = [],
                      c = [],
                      d = function (l) {
                        return function (e, a) {
                          return 1 * (e[l] < a[l] ? -1 : e[l] > a[l] ? 1 : 0);
                        };
                      },
                      u = function (l) {
                        return i.push(l), i.sort(d('name')), i;
                      },
                      p = function (l) {
                        var e,
                          a = [],
                          t = { name: '', values: a },
                          n =
                            null === (e = null == l ? void 0 : l.elem) ||
                            void 0 === e
                              ? void 0
                              : e.querySelectorAll('.pvInput');
                        if (n)
                          for (var o = 0; o < n.length; o++) a[o] = n[o].value;
                        return (
                          (t.name = l.name),
                          (t.values = a),
                          c.push(t),
                          c.sort(d('name')),
                          c
                        );
                      },
                      f = 0;
                    f < s;
                    f++
                  ) {
                    var v = r[f].childNodes[0];
                    (e = {
                      evs: v.getAttribute('data-evs'),
                      name: v.getAttribute('data-statename'),
                      stateCode: v.getAttribute('data-statecode'),
                      winner: v.getAttribute('data-winner'),
                    }),
                      (o = {
                        elem:
                          null === (l = r[f].parentElement) || void 0 === l
                            ? void 0
                            : l.childNodes[1],
                        name: v.getAttribute('data-statename'),
                      }),
                      u(e),
                      p(o);
                  }
                  localStorage.setItem(
                    'ElectoralCollegeStatus',
                    JSON.stringify(i)
                  ),
                    localStorage.setItem(
                      'WinnerTakeAllTotals',
                      JSON.stringify(a)
                    ),
                    localStorage.setItem(
                      'PopularVoteStatus',
                      JSON.stringify(c)
                    ),
                    localStorage.setItem(
                      'PopularVoteTotals',
                      JSON.stringify(t)
                    ),
                    (i = []),
                    (c = []),
                    n();
                },
              },
              { children: 'Save' }
            )
          ),
        }
      )
    );
  },
  x = function (a) {
    var t = a.dataMode,
      n = a.handleMapStateClick,
      o = a.hasClearedSavedData,
      r = a.mapSize,
      s = a.newStateData,
      c = a.stateWinnerNames,
      d = a.statesData,
      u = 'Hide Map',
      p = l.useState(u),
      f = p[0],
      m = p[1],
      h = l.useState(!0),
      g = h[0],
      y = h[1],
      M = l.useState(''),
      b = M[0],
      k = M[1],
      x = l.useState(''),
      E = x[0],
      N = x[1],
      C = l.useState(c),
      S = C[0],
      w = C[1],
      j = l.useState({}),
      L = j[0],
      V = j[1],
      T = g ? '' : 'hide';
    l.useEffect(
      function () {
        o && V({});
      },
      [o]
    ),
      l.useEffect(
        function () {
          var l;
          if ('manual' === t) {
            var a = null == s ? void 0 : s.stateId,
              n = v(null == s ? void 0 : s.newWinningParty);
            if (a) {
              var o = (((l = {})[a] = n), l);
              V(function (l) {
                return e(e({}, l), o);
              });
            }
          }
        },
        [s]
      ),
      l.useEffect(
        function () {
          var l;
          if ('auto' === t) {
            var a = {};
            for (var n in c) {
              var o = v(c[n]),
                r = (((l = {})[n] = o), l);
              a = e(e({}, a), r);
            }
            V(function (l) {
              return e(e({}, l), a);
            });
          }
          w(c),
            N(function (l) {
              var e,
                a = c,
                t = [''];
              return (
                l &&
                  ((t = l.split('--'))[2] =
                    null !== (e = null == a ? void 0 : a[b]) && void 0 !== e
                      ? e
                      : ''),
                t.join('--')
              );
            });
        },
        [b, c]
      );
    var I,
      A,
      D,
      O,
      z,
      W = function (l) {
        if ('manual' === t) {
          var e = l.target.id;
          n(''.concat(e, '-').concat(l.currentTarget.classList));
        }
      },
      P = function (l) {
        var e = l.target.id;
        k(e), N(l.currentTarget.dataset.info);
      },
      R = function () {
        N('');
      },
      _ = function (l) {
        var e = d.find(function (e) {
          return e.stateCode === l;
        });
        return (
          (-1 === Object.keys(L).indexOf(l) &&
            v(null == e ? void 0 : e.winner)) ||
          ''
        );
      };
    return i.jsxs(
      'div',
      e(
        { id: 'map-wrapper' },
        {
          children: [
            i.jsx(
              'button',
              e(
                {
                  type: 'button',
                  onClick: function () {
                    var l = u;
                    g && (l = 'Show Map'), m(l), y(!g);
                  },
                },
                { children: f }
              )
            ),
            i.jsx(
              'div',
              e(
                {
                  id: 'info-box',
                  className: E
                    ? 'show '.concat(
                        (function (l) {
                          var e = '';
                          switch (l.split('--')[2] || '') {
                            case 'Republican':
                              e = '1';
                              break;
                            case 'Democratic':
                              e = '2';
                              break;
                            case 'Libertarian':
                              e = '3';
                              break;
                            case 'Green':
                              e = '4';
                              break;
                            case 'Independent':
                              e = '5';
                          }
                          return v(e);
                        })(E)
                      )
                    : '',
                },
                {
                  children:
                    ((I = E),
                    (A = I.split('--')),
                    (D = A[0]),
                    (O = A[1]),
                    (z = A[2] || ''),
                    i.jsxs('div', {
                      children: [
                        i.jsx(
                          'p',
                          e(
                            { className: 'map-info-statename' },
                            { children: D }
                          )
                        ),
                        i.jsx(
                          'p',
                          e({ className: 'map-info-stateevs' }, { children: O })
                        ),
                        i.jsx(
                          'p',
                          e(
                            { className: 'map-infor-statewinner' },
                            { children: 'Winner: '.concat(z) }
                          )
                        ),
                      ],
                    })),
                }
              )
            ),
            i.jsxs(
              'svg',
              e(
                {
                  className: ''.concat(r, ' ').concat(T),
                  xmlns: 'http://www.w3.org/2000/svg',
                  xlinkHref: 'http://www.w3.org/1999/xlink',
                  version: '1.1',
                  id: 'us-map',
                  preserveAspectRatio: 'xMinYMin meet',
                  x: '0px',
                  y: '0px',
                  width: '959px',
                  height: '593px',
                  viewBox: '174 100 959 593',
                  enableBackground: 'new 174 100 959 593',
                  xmlSpace: 'preserve',
                },
                {
                  children: [
                    i.jsxs(
                      'g',
                      e(
                        { id: 'g5' },
                        {
                          children: [
                            i.jsx('path', {
                              id: 'HI',
                              className: L.HI ? L.HI : _('HI'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Hawaii--4 EVs--'.concat(S.HI),
                              d: 'M407.1,619.3l1.9-3.6l2.3-0.3l0.3,0.8l-2.1,3.1H407.1z M417.3,615.6l6.1,2.6l2.1-0.3l1.6-3.9   l-0.6-3.4l-4.2-0.5l-4,1.8L417.3,615.6z M448,625.6l3.7,5.5l2.4-0.3l1.1-0.5l1.5,1.3l3.7-0.2l1-1.5l-2.9-1.8l-1.9-3.7l-2.1-3.6   l-5.8,2.9L448,625.6z M468.2,634.5l1.3-1.9l4.7,1l0.6-0.5l6.1,0.6l-0.3,1.3l-2.6,1.5l-4.4-0.3L468.2,634.5z M473.5,639.7l1.9,3.9   l3.1-1.1l0.3-1.6l-1.6-2.1l-3.7-0.3V639.7z M480.5,638.5l2.3-2.9l4.7,2.4l4.4,1.1l4.4,2.7v1.9l-3.6,1.8l-4.8,1l-2.4-1.5   L480.5,638.5z M497.1,654.1l1.6-1.3l3.4,1.6l7.6,3.6l3.4,2.1l1.6,2.4l1.9,4.4l4,2.6l-0.3,1.3l-3.9,3.2l-4.2,1.5l-1.5-0.6l-3.1,1.8   l-2.4,3.2l-2.3,2.9l-1.8-0.2l-3.6-2.6l-0.3-4.5l0.6-2.4l-1.6-5.7l-2.1-1.8l-0.2-2.6l2.3-1l2.1-3.1l0.5-1l-1.6-1.8L497.1,654.1z',
                            }),
                            i.jsx('path', {
                              id: 'AK',
                              className: L.AK ? L.AK : _('AK'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Alaska--3 EVs--'.concat(S.AK),
                              d: 'M332.1,553.7l-0.3,85.4l1.6,1l3.1,0.2l1.5-1.1h2.6l0.2,2.9l7,6.8l0.5,2.6l3.4-1.9l0.6-0.2l0.3-3.1   l1.5-1.6l1.1-0.2l1.9-1.5l3.1,2.1l0.6,2.9l1.9,1.1l1.1,2.4l3.9,1.8l3.4,6l2.7,3.9l2.3,2.7l1.5,3.7l5,1.8l5.2,2.1l1,4.4l0.5,3.1   l-1,3.4l-1.8,2.3l-1.6-0.8l-1.5-3.1l-2.7-1.5l-1.8-1.1l-0.8,0.8l1.5,2.7l0.2,3.7l-1.1,0.5l-1.9-1.9l-2.1-1.3l0.5,1.6l1.3,1.8   l-0.8,0.8c0,0-0.8-0.3-1.3-1c-0.5-0.6-2.1-3.4-2.1-3.4l-1-2.3c0,0-0.3,1.3-1,1c-0.6-0.3-1.3-1.5-1.3-1.5l1.8-1.9l-1.5-1.5v-5h-0.8   l-0.8,3.4l-1.1,0.5l-1-3.7l-0.6-3.7l-0.8-0.5l0.3,5.7v1.1l-1.5-1.3l-3.6-6l-2.1-0.5l-0.6-3.7l-1.6-2.9l-1.6-1.1v-2.3l2.1-1.3   l-0.5-0.3l-2.6,0.6l-3.4-2.4l-2.6-2.9l-4.8-2.6l-4-2.6l1.3-3.2v-1.6l-1.8,1.6l-2.9,1.1l-3.7-1.1l-5.7-2.4h-5.5l-0.6,0.5l-6.5-3.9   l-2.1-0.3l-2.7-5.8l-3.6,0.3l-3.6,1.5l0.5,4.5l1.1-2.9l1,0.3l-1.5,4.4l3.2-2.7l0.6,1.6l-3.9,4.4l-1.3-0.3l-0.5-1.9l-1.3-0.8   l-1.3,1.1l-2.7-1.8l-3.1,2.1l-1.8,2.1l-3.4,2.1l-4.7-0.2l-0.5-2.1l3.7-0.6v-1.3l-2.3-0.6l1-2.4l2.3-3.9v-1.8l0.2-0.8l4.4-2.3l1,1.3   h2.7l-1.3-2.6l-3.7-0.3l-5,2.7l-2.4,3.4l-1.8,2.6l-1.1,2.3l-4.2,1.5l-3.1,2.6l-0.3,1.6l2.3,1l0.8,2.1l-2.7,3.2l-6.5,4.2l-7.8,4.2   l-2.1,1.1l-5.3,1.1l-5.3,2.3l1.8,1.3l-1.5,1.5l-0.5,1.1l-2.7-1l-3.2,0.2l-0.8,2.3h-1l0.3-2.4l-3.6,1.3l-2.9,1l-3.4-1.3l-2.9,1.9   h-3.2l-2.1,1.3l-1.6,0.8l-2.1-0.3l-2.6-1.1l-2.3,0.6l-1,1l-1.6-1.1v-1.9l3.1-1.3l6.3,0.6l4.4-1.6l2.1-2.1l2.9-0.6l1.8-0.8l2.7,0.2   l1.6,1.3l1-0.3l2.3-2.7l3.1-1l3.4-0.6l1.3-0.3l0.6,0.5h0.8l1.3-3.7l4-1.5l1.9-3.7l2.3-4.5l1.6-1.5l0.3-2.6l-1.6,1.3l-3.4,0.6   l-0.6-2.4l-1.3-0.3l-1,1l-0.2,2.9l-1.5-0.2l-1.5-5.8l-1.3,1.3l-1.1-0.5l-0.3-1.9l-4,0.2l-2.1,1.1l-2.6-0.3l1.5-1.5l0.5-2.6   l-0.6-1.9l1.5-1l1.3-0.2l-0.6-1.8v-4.4l-1-1l-0.8,1.5h-6.1l-1.5-1.3l-0.6-3.9l-2.1-3.6v-1l2.1-0.8l0.2-2.1l1.1-1.1l-0.8-0.5   l-1.3,0.5l-1.1-2.7l1-5l4.5-3.2l2.6-1.6l1.9-3.7l2.7-1.3l2.6,1.1l0.3,2.4l2.4-0.3l3.2-2.4l1.6,0.6l1,0.6h1.6l2.3-1.3l0.8-4.4   c0,0,0.3-2.9,1-3.4c0.6-0.5,1-1,1-1l-1.1-1.9l-2.6,0.8l-3.2,0.8l-1.9-0.5l-3.6-1.8l-5-0.2l-3.6-3.7l0.5-3.9l0.6-2.4l-2.1-1.8   l-1.9-3.7l0.5-0.8l6.8-0.5h2.1l1,1h0.6l-0.2-1.6l3.9-0.6l2.6,0.3l1.5,1.1l-1.5,2.1l-0.5,1.5l2.7,1.6l5,1.8l1.8-1l-2.3-4.4l-1-3.2   l1-0.8l-3.4-1.9l-0.5-1.1l0.5-1.6l-0.8-3.9l-2.9-4.7l-2.4-4.2l2.9-1.9h3.2l1.8,0.6l4.2-0.2l3.7-3.6l1.1-3.1l3.7-2.4l1.6,1l2.7-0.6   l3.7-2.1l1.1-0.2l1,0.8l4.5-0.2l2.7-3.1h1.1l3.6,2.4l1.9,2.1l-0.5,1.1l0.6,1.1l1.6-1.6l3.9,0.3l0.3,3.7l1.9,1.5l7.1,0.6l6.3,4.2   l1.5-1l5.2,2.6l2.1-0.6l1.9-0.8l4.8,1.9L332.1,553.7z M217,582.6l2.1,5.3l-0.2,1l-2.9-0.3l-1.8-4l-1.8-1.5H210l-0.2-2.6l1.8-2.4   l1.1,2.4l1.5,1.5L217,582.6z M214.4,616.1l3.7,0.8l3.7,1l0.8,1l-1.6,3.7l-3.1-0.2l-3.4-3.6L214.4,616.1z M193.7,602l1.1,2.6   l1.1,1.6l-1.1,0.8l-2.1-3.1V602H193.7z M180,675.1l3.4-2.3l3.4-1l2.6,0.3l0.5,1.6l1.9,0.5l1.9-1.9l-0.3-1.6l2.7-0.6l2.9,2.6   l-1.1,1.8l-4.4,1.1l-2.7-0.5l-3.7-1.1l-4.4,1.5l-1.6,0.3L180,675.1z M228.9,670.6l1.6,1.9l2.1-1.6l-1.5-1.3L228.9,670.6z    M231.8,673.6l1.1-2.3l2.1,0.3l-0.8,1.9H231.8z M255.4,671.7l1.5,1.8l1-1.1l-0.8-1.9L255.4,671.7z M264.2,659.2l1.1,5.8l2.9,0.8   l5-2.9l4.4-2.6l-1.6-2.4l0.5-2.4l-2.1,1.3l-2.9-0.8l1.6-1.1l1.9,0.8l3.9-1.8l0.5-1.5l-2.4-0.8l0.8-1.9l-2.7,1.9l-4.7,3.6l-4.8,2.9   L264.2,659.2z M306.5,639.4l2.4-1.5l-1-1.8l-1.8,1L306.5,639.4z',
                            }),
                            i.jsx('path', {
                              id: 'FL',
                              className: L.FL ? L.FL : _('FL'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Florida--30 EVs--'.concat(S.FL),
                              d: 'M929.4,545.5l2.3,7.3l3.7,9.7l5.3,9.4l3.7,6.3l4.8,5.5l4,3.7l1.6,2.9l-1.1,1.3L953,593l2.9,7.4   l2.9,2.9l2.6,5.3l3.6,5.8l4.5,8.2l1.3,7.6l0.5,12l0.6,1.8l-0.3,3.4l-2.4,1.3l0.3,1.9l-0.6,1.9l0.3,2.4l0.5,1.9l-2.7,3.2l-3.1,1.5   l-3.9,0.2l-1.5,1.6l-2.4,1l-1.3-0.5l-1.1-1l-0.3-2.9l-0.8-3.4l-3.4-5.2l-3.6-2.3l-3.9-0.3l-0.8,1.3l-3.1-4.4l-0.6-3.6l-2.6-4   l-1.8-1.1l-1.6,2.1l-1.8-0.3l-2.1-5l-2.9-3.9l-2.9-5.3l-2.6-3.1l-3.6-3.7l2.1-2.4l3.2-5.5l-0.2-1.6l-4.5-1l-1.6,0.6l0.3,0.6l2.6,1   l-1.5,4.5l-0.8,0.5l-1.8-4l-1.3-4.8l-0.3-2.7l1.5-4.7v-9.5L910,585l-1.3-3.1l-5.2-1.3l-1.9-0.6l-1.6-2.6l-3.4-1.6l-1.1-3.4l-2.7-1   l-2.4-3.7l-4.2-1.5l-2.9-1.5h-2.6l-4,0.8l-0.2,1.9l0.8,1l-0.5,1.1l-3.1-0.2l-3.7,3.6l-3.6,1.9h-3.9l-3.2,1.3l-0.3-2.7l-1.6-1.9   l-2.9-1.1l-1.6-1.5l-8.1-3.9l-7.6-1.8l-4.4,0.6l-6,0.5l-6,2.1l-3.5,0.6l-0.2-8l-2.6-1.9l-1.8-1.8l0.3-3.1l10.2-1.3l25.5-2.9   l6.8-0.6l5.4,0.3l2.6,3.9l1.5,1.5l8.1,0.5l10.8-0.6l21.5-1.3l5.4-0.7l4.6,0l0.2,2.9l3.8,0.8l0.3-4.8l-1.6-4.5l1-0.7l5.1,0.5   L929.4,545.5z M941.9,677.9l2.4-0.6l1.3-0.2l1.5-2.3l2.3-1.6l1.3,0.5l1.7,0.3l0.4,1.1l-3.5,1.2l-4.2,1.5l-2.3,1.2L941.9,677.9z    M955.4,672.9l1.2,1.1l2.7-2.1l5.3-4.2l3.7-3.9l2.5-6.6l1-1.7l0.2-3.4l-0.7,0.5l-1,2.8l-1.5,4.6l-3.2,5.3l-4.4,4.2l-3.4,1.9   L955.4,672.9z',
                            }),
                            i.jsx('path', {
                              id: 'SC',
                              className: L.SC ? L.SC : _('SC'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'South Carolina--9 EVs--'.concat(
                                S.SC
                              ),
                              d: 'M935.2,512.9l-1.8,1l-2.6-1.3l-0.6-2.1l-1.3-3.6l-2.3-2.1l-2.6-0.6l-1.6-4.8l-2.7-6l-4.2-1.9   l-2.1-1.9l-1.3-2.6L910,485l-2.3-1.3l-2.3-2.9l-3.1-2.3l-4.5-1.8l-0.5-1.5l-2.4-2.9l-0.5-1.5l-3.4-5.2l-3.4,0.2l-4-2.4l-1.3-1.3   l-0.3-1.8l0.8-1.9l2.3-1l-0.3-2.1l6.1-2.6l9.1-4.5l7.3-0.8l16.5-0.5l2.3,1.9l1.6,3.2l4.4-0.5l12.6-1.5l2.9,0.8l12.6,7.6l10.1,8.1   l-5.4,5.5l-2.6,6.1l-0.5,6.3l-1.6,0.8l-1.1,2.7l-2.4,0.6l-2.1,3.6l-2.7,2.7l-2.3,3.4l-1.6,0.8l-3.6,3.4l-2.9,0.2l1,3.2l-5,5.5   L935.2,512.9z',
                            }),
                            i.jsx('path', {
                              id: 'GA',
                              className: L.GA ? L.GA : _('GA'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Georgia--16 EVs--'.concat(S.GA),
                              d: 'M863.6,458l-4.8,0.8l-8.4,1.1l-8.6,0.9v2.2l0.2,2.1l0.6,3.4l3.4,7.9l2.4,9.9l1.5,6.1l1.6,4.8l1.5,7   l2.1,6.3l2.6,3.4l0.5,3.4l1.9,0.8l0.2,2.1l-1.8,4.8l-0.5,3.2l-0.2,1.9l1.6,4.4l0.3,5.3l-0.8,2.4l0.6,0.8l1.5,0.8l0.6,3.4l2.6,3.9   l1.5,1.5l7.9,0.2l10.8-0.6l21.5-1.3l5.4-0.7l4.6,0l0.2,2.9l2.6,0.8l0.3-4.4l-1.6-4.5l1.1-1.6l5.8,0.8l5,0.3l-0.8-6.3l2.3-10   l1.5-4.2l-0.5-2.6l3.3-6.2l-0.5-1.4l-1.9,0.7l-2.6-1.3l-0.6-2.1l-1.3-3.6l-2.3-2.1l-2.6-0.6l-1.6-4.8l-2.9-6.3l-4.2-1.9l-2.1-1.9   l-1.3-2.6l-2.1-1.9l-2.3-1.3l-2.3-2.9l-3.1-2.3l-4.5-1.8l-0.5-1.5l-2.4-2.9l-0.5-1.5l-3.4-4.9l-3.4,0.2l-4.1-3l-1.3-1.3l-0.3-1.8   l0.8-1.9l2.4-1.2l-1.1-1.2l0.1-0.3l-5.8,1l-7,0.8L863.6,458z',
                            }),
                            i.jsx('path', {
                              id: 'AL',
                              className: L.AL ? L.AL : _('AL'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Alabama--9 EVs--'.concat(S.AL),
                              d: 'M799.6,566.8l-1.6-15.2l-2.7-18.8l0.2-14.1l0.8-31l-0.2-16.7l0.2-6.4l7.8-0.4l27.8-2.6l8.9-0.7   l-0.1,2.2l0.2,2.1l0.6,3.4l3.4,7.9l2.4,9.9l1.5,6.1l1.6,4.8l1.5,7l2.1,6.3l2.6,3.4l0.5,3.4l1.9,0.8l0.2,2.1l-1.8,4.8l-0.5,3.2   l-0.2,1.9l1.6,4.4l0.3,5.3l-0.8,2.4l0.6,0.8l1.5,0.8l1,2.5h-6.3l-6.8,0.6l-25.5,2.9l-10.4,1.4l-0.1,3.8l1.8,1.8l2.6,1.9l0.6,7.9   l-5.5,2.6l-2.7-0.3l2.7-1.9v-1l-3.1-6l-2.3-0.6l-1.5,4.4l-1.3,2.7l-0.6-0.2H799.6z',
                            }),
                            i.jsx('path', {
                              id: 'NC',
                              className: L.NC ? L.NC : _('NC'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'North Carolina--16 EVs--'.concat(
                                S.NC
                              ),
                              d: 'M1006.1,398.5l1.7,4.7l3.6,6.5l2.4,2.4l0.6,2.3l-2.4,0.2l0.8,0.6l-0.3,4.2l-2.6,1.3l-0.6,2.1   l-1.3,2.9l-3.7,1.6l-2.4-0.3l-1.5-0.2l-1.6-1.3l0.3,1.3v1h1.9l0.8,1.3l-1.9,6.3h4.2l0.6,1.6l2.3-2.3l1.3-0.5l-1.9,3.6l-3.1,4.8   h-1.3l-1.1-0.5l-2.7,0.6l-5.2,2.4l-6.5,5.3l-3.4,4.7l-1.9,6.5l-0.5,2.4l-4.7,0.5l-5.5,1.3l-9.9-8.2l-12.6-7.6l-2.9-0.8l-12.6,1.5   l-4.3,0.8l-1.6-3.2l-3-2.1l-16.5,0.5l-7.3,0.8l-9.1,4.5l-6.1,2.6l-1.6,0.3l-5.8,1l-7,0.8l-6.8,0.5l0.5-4.1l1.8-1.5l2.7-0.6l0.6-3.7   l4.2-2.7l3.9-1.5l4.2-3.6l4.4-2.1l0.6-3.1l3.9-3.9l0.6-0.2c0,0,0,1.1,0.8,1.1c0.8,0,1.9,0.3,1.9,0.3l2.3-3.6l2.1-0.6l2.3,0.3   l1.6-3.6l2.9-2.6l0.5-2.1v-4l4.5,0.7l7.1-1.3l15.8-1.9l17.1-2.6l19.9-4l19.7-4.2l11.4-2.8L1006.1,398.5z M1010,431.5l2.6-2.5   l3.2-2.6l1.5-0.6l0.2-2l-0.6-6.1l-1.5-2.3l-0.6-1.9l0.7-0.2l2.7,5.5l0.4,4.4l-0.2,3.4l-3.4,1.5l-2.8,2.4l-1.1,1.2L1010,431.5z',
                            }),
                            i.jsx('path', {
                              id: 'TN',
                              className: L.TN ? L.TN : _('TN'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Tennessee--11 EVs--'.concat(S.TN),
                              d: 'M871.1,420.6l-51.9,5l-15.8,1.8l-4.6,0.5l-3.9,0v3.9l-8.4,0.5l-7,0.6l-11.1,0.1l-0.3,5.8l-2.1,6.3   l-1,3l-1.3,4.4l-0.3,2.6l-4,2.3l1.5,3.6l-1,4.4l-1,0.8l7.3-0.2l24.1-1.9l5.3-0.2l8.1-0.5l27.8-2.6l10.2-0.8l8.4-1l8.4-1.1l4.8-0.8   l-0.1-4.5l1.8-1.5l2.7-0.6l0.6-3.7l4.2-2.7l3.9-1.5l4.2-3.6l4.4-2.1l0.9-3.5l4.3-3.9l0.6-0.2c0,0,0,1.1,0.8,1.1s1.9,0.3,1.9,0.3   l2.3-3.6l2.1-0.6l2.3,0.3l1.6-3.6l2.1-2.2l0.6-1l0.2-3.9l-1.5-0.3l-2.4,1.9l-7.9,0.2l-12,1.9L871.1,420.6z',
                            }),
                            i.jsx('path', {
                              id: 'RI',
                              className: L.RI ? L.RI : _('RI'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Rhode Island--4 EVs--'.concat(S.RI),
                              d: 'M1048.1,279.8l-0.5-4.2l-0.8-4.4l-1.7-5.9l5.7-1.5l1.6,1.1l3.4,4.4l2.9,4.4l-2.9,1.5l-1.3-0.2   l-1.1,1.8l-2.4,1.9L1048.1,279.8z',
                            }),
                            i.jsx('path', {
                              id: 'CT',
                              className: L.CT ? L.CT : _('CT'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Connecticut--7 EVs--'.concat(S.CT),
                              d: 'M1047.2,280.1l-0.6-4.2l-0.8-4.4l-1.6-6l-4.2,0.9l-21.8,4.8l0.6,3.3l1.5,7.3v8.1l-1.1,2.3l1.8,2.1   l5-3.4l3.6-3.2l1.9-2.1l0.8,0.6l2.7-1.5l5.2-1.1L1047.2,280.1z',
                            }),
                            i.jsx('path', {
                              id: 'MA',
                              className: L.MA ? L.MA : _('MA'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Massachusetts--11 EVs--'.concat(
                                S.MA
                              ),
                              d: 'M1074,273.9l2.2-0.7l0.5-1.7l1,0.1l1,2.3l-1.3,0.5l-3.9,0.1L1074,273.9z M1064.6,274.7l2.3-2.6h1.6   l1.8,1.5l-2.4,1l-2.2,1L1064.6,274.7z M1029.8,252.7l17.5-4.2l2.3-0.6l2.1-3.2l3.7-1.7l2.9,4.4l-2.4,5.2l-0.3,1.5l1.9,2.6l1.1-0.8   h1.8l2.3,2.6l3.9,6l3.6,0.5l2.3-1l1.8-1.8l-0.8-2.7l-2.1-1.6l-1.5,0.8l-1-1.3l0.5-0.5l2.1-0.2l1.8,0.8l1.9,2.4l1,2.9l0.3,2.4   l-4.2,1.5l-3.9,1.9l-3.9,4.5l-1.9,1.5v-1l2.4-1.5l0.5-1.8l-0.8-3.1l-2.9,1.5l-0.8,1.5l0.5,2.3l-2.1,1l-2.7-4.5l-3.4-4.4l-2.1-1.8   l-6.5,1.9l-5.1,1.1l-21.8,4.8l-0.4-4.9l0.6-10.6l5.2-0.9L1029.8,252.7z',
                            }),
                            i.jsx('path', {
                              id: 'ME',
                              className: L.ME ? L.ME : _('ME'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Maine--4 Split EVs--'.concat(S.ME),
                              d: 'M1097.2,177.3l1.9,2.1l2.3,3.7v1.9l-2.1,4.7l-1.9,0.6l-3.4,3.1l-4.8,5.5c0,0-0.6,0-1.3,0   c-0.6,0-1-2.1-1-2.1l-1.8,0.2l-1,1.5l-2.4,1.5l-1,1.5l1.6,1.5l-0.5,0.6l-0.5,2.7l-1.9-0.2v-1.6l-0.3-1.3l-1.5,0.3l-1.8-3.2   l-2.1,1.3l1.3,1.5l0.3,1.1l-0.8,1.3l0.3,3.1l0.2,1.6l-1.6,2.6l-2.9,0.5l-0.3,2.9l-5.3,3.1l-1.3,0.5l-1.6-1.5l-3.1,3.6l1,3.2   l-1.5,1.3l-0.2,4.4l-1.1,6.3l-2.5-1.2l-0.5-3.1l-3.9-1.1l-0.3-2.7l-7.3-23.4l-4.2-13.6l1.4-0.1l1.5,0.4v-2.6l0.8-5.5l2.6-4.7l1.5-4   l-1.9-2.4v-6l0.8-1l0.8-2.7l-0.2-1.5l-0.2-4.8l1.8-4.8l2.9-8.9l2.1-4.2h1.3l1.3,0.2v1.1l1.3,2.3l2.7,0.6l0.8-0.8v-1l4-2.9l1.8-1.8   l1.5,0.2l6,2.4l1.9,1l9.1,29.9h6l0.8,1.9l0.2,4.8l2.9,2.3h0.8l0.2-0.5l-0.5-1.1L1097.2,177.3z M1076.3,207.5l1.5-1.5l1.4,1.1   l0.6,2.4l-1.7,0.9L1076.3,207.5z M1083,201.6l1.8,1.9c0,0,1.3,0.1,1.3-0.2s0.2-2,0.2-2l0.9-0.8l-0.8-1.8l-2,0.7L1083,201.6z',
                            }),
                            i.jsx('path', {
                              id: 'NH',
                              className: L.NH ? L.NH : _('NH'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'New Hampshire--4 EVs--'.concat(
                                S.NH
                              ),
                              d: 'M1054.8,242.4l0.9-1.1l1.1-3.3l-2.5-0.9l-0.5-3.1l-3.9-1.1l-0.3-2.7l-7.3-23.4l-4.6-14.5l-0.9,0   l-0.6,1.6l-0.6-0.5l-1-1l-1.5,1.9l0,5l0.3,5.7l1.9,2.7v4l-3.7,5.1l-2.6,1.1v1.1l1.1,1.8v8.6l-0.8,9.2l-0.2,4.8l1,1.3l-0.2,4.5   l-0.5,1.8l1.5,0.9l16.4-4.7l2.3-0.6l1.5-2.6L1054.8,242.4z',
                            }),
                            i.jsx('path', {
                              id: 'VT',
                              className: L.VT ? L.VT : _('VT'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Vermont--3 EVs--'.concat(S.VT),
                              d: 'M1018.3,253.7l-0.8-5.7l-2.4-10l-0.6-0.3l-2.9-1.3l0.8-2.9l-0.8-2.1l-2.7-4.6l1-3.9l-0.8-5.2   l-2.4-6.5l-0.8-4.9l26.2-6.7l0.3,5.8l1.9,2.7v4l-3.7,4l-2.6,1.1v1.1l1.1,1.8v8.6l-0.8,9.2l-0.2,4.8l1,1.3l-0.2,4.5l-0.5,1.8   l0.7,1.6l-7,1.4L1018.3,253.7z',
                            }),
                            i.jsx('path', {
                              id: 'NY',
                              className: L.NY ? L.NY : _('NY'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'New York--28 EVs--'.concat(S.NY),
                              d: 'M1002.6,289.4l-1.1-1l-2.6-0.2l-2.3-1.9l-1.6-6.1l-3.5,0.1l-2.4-2.7l-19.4,4.4l-43,8.7l-7.5,1.2   l-0.7-6.5l1.4-1.1l1.3-1.1l1-1.6l1.8-1.1l1.9-1.8l0.5-1.6l2.1-2.7l1.1-1l-0.2-1l-1.3-3.1l-1.8-0.2l-1.9-6.1l2.9-1.8l4.4-1.5l4-1.3   l3.2-0.5l6.3-0.2l1.9,1.3l1.6,0.2l2.1-1.3l2.6-1.1l5.2-0.5l2.1-1.8l1.8-3.2l1.6-1.9h2.1l1.9-1.1l0.2-2.3l-1.5-2.1l-0.3-1.5l1.1-2.1   v-1.5h-1.8l-1.8-0.8l-0.8-1.1l-0.2-2.6l5.8-5.5l0.6-0.8l1.5-2.9l2.9-4.5l2.7-3.7l2.1-2.4l2.4-1.8l3.1-1.2l5.5-1.3l3.2,0.2l4.5-1.5   l7.6-2.1l0.5,5l2.4,6.5l0.8,5.2l-1,3.9l2.6,4.5l0.8,2.1l-0.8,2.9l2.9,1.3l0.6,0.3l3.1,11l-0.5,5.1l-0.5,10.8l0.8,5.5l0.8,3.6   l1.5,7.3v8.1l-1.1,2.3l1.8,2l0.8,1.7l-1.9,1.8l0.3,1.3l1.3-0.3l1.5-1.3l2.3-2.6l1.1-0.6l1.6,0.6l2.3,0.2l7.9-3.9l2.9-2.7l1.3-1.5   l4.2,1.6l-3.4,3.6l-3.9,2.9l-7.1,5.3l-2.6,1l-5.8,1.9l-4,1.1l-1.2-0.5l-0.2-3.7l0.5-2.7l-0.2-2.1l-2.8-1.7l-4.5-1l-3.9-1.1   L1002.6,289.4z',
                            }),
                            i.jsx('path', {
                              id: 'NJ',
                              className: L.NJ ? L.NJ : _('NJ'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'New Jersey--14 EVs--'.concat(S.NJ),
                              d: 'M1002.2,290.3l-2.1,2.4v3.1l-1.9,3.1l-0.2,1.6l1.3,1.3l-0.2,2.4l-2.3,1.1l0.8,2.7l0.2,1.1l2.7,0.3   l1,2.6l3.6,2.4l2.4,1.6v0.8l-3.2,3.1l-1.6,2.3l-1.5,2.7l-2.3,1.3l-1.2,0.7l-0.2,1.2l-0.6,2.6l1.1,2.2l3.2,2.9l4.8,2.3l4,0.6   l0.2,1.5l-0.8,1l0.3,2.7h0.8l2.1-2.4l0.8-4.8l2.7-4l3.1-6.5l1.1-5.5l-0.6-1.1l-0.2-9.4l-1.6-3.4l-1.1,0.8l-2.7,0.3l-0.5-0.5l1.1-1   l2.1-1.9l0.1-1.1l-0.4-3.4l0.5-2.7l-0.2-2.1l-2.6-1.1l-4.5-1l-3.9-1.1L1002.2,290.3z',
                            }),
                            i.jsx('path', {
                              id: 'PA',
                              className: L.PA ? L.PA : _('PA'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Pennsylvania--19 EVs--'.concat(
                                S.PA
                              ),
                              d: 'M996.2,326.5l1.1-0.6l2.3-0.6l1.5-2.7l1.6-2.3l3.2-3.1v-0.8l-2.4-1.6l-3.6-2.4l-1-2.6l-2.7-0.3   l-0.2-1.1l-0.8-2.7l2.3-1.1l0.2-2.4l-1.3-1.3l0.2-1.6l1.9-3.1v-3.1l2.3-2.4l0.2-1.1l-2.6-0.2l-2.3-1.9l-2.4-5.3l-3-0.9l-2.3-2.1   l-18.6,4l-43,8.7l-8.9,1.5l-0.5-7.1l-5.5,5.6l-1.3,0.5l-4.2,3l2.9,19.1l2.5,9.7l3.6,19.3l3.3-0.6l11.9-1.5l37.9-7.7l14.9-2.8   l8.3-1.6l0.3-0.2l2.1-1.6L996.2,326.5z',
                            }),
                            i.jsx('path', {
                              id: 'DE',
                              className: L.DE ? L.DE : _('DE'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Delaware--3 EVs--'.concat(S.DE),
                              d: 'M996.4,330.4l0.6-2.1l0-1.2l-1.3-0.1l-2.1,1.6l-1.5,1.5l1.5,4.2l2.3,5.7l2.1,9.7l1.6,6.3l5-0.2   l6.1-1.2l-2.3-7.4l-1,0.5l-3.6-2.4l-1.8-4.7l-1.9-3.6l-2.3-1l-2.1-3.6L996.4,330.4z',
                            }),
                            i.jsx('path', {
                              id: 'MD',
                              className: L.MD ? L.MD : _('MD'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Maryland--10 EVs--'.concat(S.MD),
                              d: 'M1011,355.3l-6.1,1.3l-5.8,0.2l-1.8-7.1l-2.1-9.7l-2.3-5.7l-1.3-4.4l-7.5,1.6l-14.9,2.8l-37.5,7.6   l1.1,5l1,5.7l0.3-0.3l2.1-2.4l2.3-2.6l2.4-0.6l1.5-1.5l1.8-2.6l1.3,0.6l2.9-0.3l2.6-2.1l2-1.5l1.8-0.5l1.6,1.1l2.9,1.5l1.9,1.8   l1.2,1.5l4.1,1.7v2.9l5.5,1.3l1.1,0.5l1.4-2l2.9,2l-1.3,2.5l-0.8,4l-1.8,2.6v2.1l0.6,1.8l5.1,1.4l4.3-0.1l3.1,1l2.1,0.3l1-2.1   l-1.5-2.1v-1.8l-2.4-2.1l-2.1-5.5l1.3-5.3l-0.2-2.1l-1.3-1.3c0,0,1.5-1.6,1.5-2.3c0-0.6,0.5-2.1,0.5-2.1l1.9-1.3l1.9-1.6l0.5,1   l-1.5,1.6l-1.3,3.7l0.3,1.1l1.8,0.3l0.5,5.5l-2.1,1l0.3,3.6l0.5-0.2l1.1-1.9l1.6,1.8l-1.6,1.3l-0.3,3.4l2.6,3.4l3.9,0.5l1.6-0.8   l3.2,4.2l1.4,0.5l6.7-2.8l2-4L1011,355.3z M994.3,364.3l1.1,2.5l0.2,1.8l1.1,1.9c0,0,0.9-0.9,0.9-1.2c0-0.3-0.7-3.1-0.7-3.1   l-0.7-2.3L994.3,364.3z',
                            }),
                            i.jsx('path', {
                              id: 'WV',
                              className: L.WV ? L.WV : _('WV'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'West Virginia--4 EVs--'.concat(
                                S.WV
                              ),
                              d: 'M930.6,342l1.1,4.9l1.1,6.9l3.6-2.7l2.3-3.1l2.5-0.6l1.5-1.5l1.8-2.6l1.2,0.6l2.9-0.3l2.6-2.1   l2-1.5l1.8-0.5l1.3,1l2.2,1.1l1.9,1.8l1.4,1.3l-0.1,4.7l-5.7-3.1l-4.5-1.8l-0.2,5.3l-0.5,2.1l-1.6,2.7l-0.6,1.6l-3.1,2.4l-0.5,2.3   l-3.4,0.3l-0.3,3.1l-1.1,5.5h-2.6l-1.3-0.8l-1.6-2.7l-1.8,0.2l-0.3,4.4l-2.1,6.6l-5,10.8l0.8,1.3l-0.2,2.7l-2.1,1.9l-1.5-0.3   l-3.2,2.4l-2.6-1l-1.8,4.7c0,0-3.7,0.8-4.4,1c-0.6,0.2-2.4-1.3-2.4-1.3l-2.4,2.3l-2.6,0.6l-2.9-0.8l-1.3-1.3l-2.2-3l-3.1-2   l-2.6-2.7l-2.9-3.7l-0.6-2.3l-2.6-1.5l-0.8-1.6l-0.2-5.3l2.2-0.1l1.9-0.8l0.2-2.7l1.6-1.5l0.2-5l1-3.9l1.3-0.6l1.3,1.1l0.5,1.8   l1.8-1l0.5-1.6l-1.1-1.8v-2.4l1-1.3l2.3-3.4l1.3-1.5l2.1,0.5l2.3-1.6l3.1-3.4l2.3-3.9l0.3-5.7l0.5-5v-4.7l-1.1-3.1l1-1.5l1.3-1.3   l3.5,19.8l4.6-0.8L930.6,342z',
                            }),
                            i.jsx('path', {
                              id: 'KY',
                              className: L.KY ? L.KY : _('KY'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Kentucky--8 EVs--'.concat(S.KY),
                              d: 'M895.8,397.8l-2.3,2.7l-4.2,3.6L885,410l-1.8,1.8v2.1l-3.9,2.1l-5.7,3.4l-3.5,0.4l-51.9,4.9   l-15.8,1.8l-4.6,0.5l-3.9,0l-0.2,4.2l-8.2,0.1l-7,0.6l-10.4,0.2l1.9-0.2l2.2-1.8l2.1-1.1l0.2-3.2l0.9-1.8l-1.6-2.5l0.8-1.9l2.3-1.8   l2.1-0.6l2.7,1.3l3.6,1.3l1.1-0.3l0.2-2.3l-1.3-2.4l0.3-2.3l1.9-1.5l2.6-0.6l1.6-0.6l-0.8-1.8l-0.6-1.9l1.1-0.8l1.1-3.3l3-1.7   l5.8-1l3.6-0.5l1.5,1.9l1.8,0.8l1.8-3.2l2.9-1.5l1.9,1.6l0.8,1.1l2.1-0.5l-0.2-3.4l2.9-1.6l1.1-0.8l1.1,1.6h4.7l0.8-2.1l-0.3-2.3   l2.9-3.6l4.7-3.9l0.5-4.5l2.7-0.3l3.9-1.8l2.7-1.9l-0.3-1.9l-1.5-1.5l0.6-2.2l4.1-0.2l2.4-0.8l2.9,1.6l1.6,4.4l5.8,0.3l1.8,1.8   l2.1,0.2l2.4-1.5l3.1,0.5l1.3,1.5l2.7-2.6l1.8-1.3h1.6l0.6,2.7l1.8,1l2.4,2.2l0.2,5.5l0.8,1.6l2.6,1.5l0.6,2.3l2.9,3.7l2.6,2.7   L895.8,397.8z',
                            }),
                            i.jsx('path', {
                              id: 'OH',
                              className: L.OH ? L.OH : _('OH'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Ohio--17 EVs--'.concat(S.OH),
                              d: 'M905.4,295l-6.1,4.1l-3.9,2.3l-3.4,3.7l-4,3.9l-3.2,0.8l-2.9,0.5l-5.5,2.6l-2.1,0.2l-3.4-3.1   l-5.2,0.6l-2.6-1.5l-2.4-1.4l-4.9,0.7l-10.2,1.6l-7.8,1.2l1.3,14.6l1.8,13.7l2.6,23.4l0.6,4.8l4.1-0.1l2.4-0.8l3.4,1.5l2.1,4.4   l5.1,0l1.9,2.1l1.8-0.1l2.5-1.3l2.5,0.4l2,1.5l1.7-2.1l2.3-1.3l2.1-0.7l0.6,2.7l1.8,1l3.5,2.3l2.2-0.1l1.1-1.1l-0.1-1.4l1.6-1.5   l0.2-5l1-3.9l1.5-1.4l1.5,0.9l0.8,1.2l1.2-0.2l-0.4-2.4l-0.6-0.6v-2.4l1-1.3l2.3-3.4l1.3-1.5l2.1,0.5l2.3-1.6l3.1-3.4l2.3-3.9   l0.2-5.4l0.5-5v-4.7l-1.1-3.1l1-1.5l0.9-1l-1.4-9.8L905.4,295z',
                            }),
                            i.jsx('path', {
                              id: 'MI',
                              className: L.MI ? L.MI : _('MI'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Michigan--15 EVs--'.concat(S.MI),
                              d: 'M755.6,182.1l1.8-2.1l2.2-0.8l5.4-3.9l2.3-0.6l0.5,0.5l-5.1,5.1l-3.3,1.9l-2.1,0.9L755.6,182.1z    M841.8,214.2l0.6,2.5l3.2,0.2l1.3-1.2c0,0-0.1-1.5-0.4-1.6c-0.3-0.2-1.6-1.9-1.6-1.9l-2.2,0.2l-1.6,0.2l-0.3,1.1L841.8,214.2z    M871.9,277.2l-3.2-8.2l-2.3-9.1l-2.4-3.2l-2.6-1.8l-1.6,1.1l-3.9,1.8l-1.9,5l-2.7,3.7l-1.1,0.6l-1.5-0.6c0,0-2.6-1.5-2.4-2.1   c0.2-0.6,0.5-5,0.5-5l3.4-1.3l0.8-3.4l0.6-2.6l2.4-1.6l-0.3-10l-1.6-2.3l-1.3-0.8l-0.8-2.1l0.8-0.8l1.6,0.3l0.2-1.6L850,231   l-1.3-2.6h-2.6l-4.5-1.5l-5.5-3.4h-2.7l-0.6,0.6l-1-0.5l-3.1-2.3l-2.9,1.8l-2.9,2.3l0.3,3.6l1,0.3l2.1,0.5l0.5,0.8l-2.6,0.8   l-2.6,0.3l-1.5,1.8l-0.3,2.1l0.3,1.6l0.3,5.5l-3.6,2.1l-0.6-0.2v-4.2l1.3-2.4l0.6-2.4l-0.8-0.8l-1.9,0.8l-1,4.2l-2.7,1.1l-1.8,1.9   l-0.2,1l0.6,0.8l-0.6,2.6l-2.3,0.5v1.1l0.8,2.4l-1.1,6.1l-1.6,4l0.6,4.7l0.5,1.1l-0.8,2.4l-0.3,0.8l-0.3,2.7l3.6,6l2.9,6.5l1.5,4.8   l-0.8,4.7l-1,6l-2.4,5.2l-0.3,2.7l-3.3,3.1l4.4-0.2l21.4-2.3l7.3-1l0.1,1.7l6.9-1.2l10.3-1.5l3.9-0.5l0.1-0.6l0.2-1.5l2.1-3.7   l2-1.7l-0.2-5.1l1.6-1.6l1.1-0.3l0.2-3.6l1.5-3l1.1,0.6l0.2,0.6l0.8,0.2l1.9-1L871.9,277.2z M741.5,211.2l0.7-0.6l2.7-0.8l3.6-2.3   v-1l0.6-0.6l6-1l2.4-1.9l4.4-2.1l0.2-1.3l1.9-2.9l1.8-0.8l1.3-1.8l2.3-2.3l4.4-2.4l4.7-0.5l1.1,1.1l-0.3,1l-3.7,1l-1.5,3.1   l-2.3,0.8l-0.5,2.4l-2.4,3.2l-0.3,2.6l0.8,0.5l1-1.1l3.6-2.9l1.3,1.3h2.3l3.2,1l1.5,1.1l1.5,3.1l2.7,2.7l3.9-0.2l1.5-1l1.6,1.3   l1.6,0.5l1.3-0.8h1.1l1.6-1l4-3.6l3.4-1.1l6.6-0.3l4.5-1.9l2.6-1.3l1.5,0.2v5.7l0.5,0.3l2.9,0.8l1.9-0.5l6.1-1.6l1.1-1.1l1.5,0.5v7   l3.2,3.1l1.3,0.6l1.3,1l-1.3,0.3l-0.8-0.3l-3.7-0.5l-2.1,0.6l-2.3-0.2l-3.2,1.5h-1.8l-5.8-1.3l-5.2,0.2l-1.9,2.6l-7,0.6l-2.4,0.8   l-1.1,3.1l-1.3,1.1l-0.5-0.2l-1.5-1.6l-4.5,2.4h-0.6l-1.1-1.6l-0.8,0.2l-1.9,4.4l-1,4l-3.2,7l-1.2-1l-1.4-1l-1.9-10.3l-3.5-1.4   l-2.1-2.3l-12.1-2.7l-2.9-1l-8.2-2.2l-7.9-1.1L741.5,211.2z',
                            }),
                            i.jsx('path', {
                              id: 'WY',
                              className: L.WY ? L.WY : _('WY'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Wyoming--3 EVs--'.concat(S.WY),
                              d: 'M528.3,243.8l-10.5-0.8l-32.1-3.3l-16.2-2.1l-28.3-4.1l-19.9-3l-1.4,11.2l-3.8,24.3l-5.3,30.4   l-1.5,10.5l-1.7,11.9l6.5,0.9l25.9,2.5l20.6,2.3l36.8,4.1l23.8,2.9l4.5-44.2l1.4-25.4L528.3,243.8z',
                            }),
                            i.jsx('path', {
                              id: 'MT',
                              className: L.MT ? L.MT : _('MT'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Montana--3 EVs--'.concat(S.MT),
                              d: 'M530.7,222.3l0.6-11.2l2.3-24.8c0.5-5,1.1-8.5,1.4-15.4l0.9-14.6l-30.7-2.8L476,150l-29.3-4   l-32.3-5.3l-18.4-3.4l-32.7-6.9l-4.5,21.3l3.4,7.5l-1.4,4.6l1.8,4.6l3.2,1.4l4.6,10.8l2.7,3.2l0.5,1.1l3.4,1.1l0.5,2.1l-7.1,17.6   v2.5l2.5,3.2h0.9l4.8-3l0.7-1.1l1.6,0.7l-0.2,5.3l2.7,12.6l3,2.5l0.9,0.7l1.8,2.3l-0.5,3.4l0.7,3.4l1.1,0.9l2.3-2.3h2.7l3.2,1.6   l2.5-0.9h4.1l3.7,1.6l2.7-0.5l0.5-3l3-0.7l1.4,1.4l0.5,3.2l1.8,1.4l1.5-11.6l20.7,3l28.2,4l16.6,1.9l31.4,3.5l11,1.5l1.1-15.4   L530.7,222.3z',
                            }),
                            i.jsx('path', {
                              id: 'ID',
                              className: L.ID ? L.ID : _('ID'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Idaho--4 EVs--'.concat(S.ID),
                              d: 'M336.1,281c-22.6-4.3-14.1-2.8-21.1-4.4l4.4-17.5l4.3-17.7l1.4-4.2l2.5-5.9l-1.3-2.3l-2.5,0.1   l-0.8-1l0.5-1.1l0.3-3.1l4.5-5.5l1.8-0.5l1.1-1.1l0.6-3.2l0.9-0.7l3.9-5.8l3.9-4.3l0.2-3.8l-3.4-2.6l-1.3-4.4l0.4-9.7l3.7-16.5   l4.5-20.8l3.8-13.5l0.8-3.8l13,2.5l-4.2,21.5l2.9,7.7l-1.1,4.6l2,4.6l3.2,1.7l4.5,9.8l2.7,3.8l0.6,1.1l3.4,1.1l0.5,2.5l-6.9,16.8   l0.3,3.3l2.7,2.9l1.9,0.5l4.8-3.6l0.4-0.5l0.2,0.8l0.3,4.1l2.6,12.9l3.5,2.7l0.4,0.8l2.1,2.4l-0.8,2.8l0.7,3.8l1.9,0.9l2.1-1.6   l2.6-0.5l3.4,1.6l2.5-0.6l3.8-0.2l4,1.6l2.7-0.3l0.9-2.3l2.5-1.6l0.7,1.7l0.6,2.2l2.3,2.5l-3.8,24l-5.1,29l-4.2-0.3l-8.2-1.5   l-9.8-1.8l-12.2-2.4l-12.5-2.5l-8.5-1.8l-9.3-1.7L336.1,281z',
                            }),
                            i.jsx('path', {
                              id: 'WA',
                              className: L.WA ? L.WA : _('WA'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Washington--12 EVs--'.concat(S.WA),
                              d: 'M267.6,106.4l4.4,1.5l9.7,2.7l8.6,1.9l20,5.7l23,5.7l15.2,3.4l-1,3.9l-4.1,13.8l-4.5,20.8   l-3.2,16.1l-0.4,9.4l-13.2-3.9l-15.6-3.4l-13.7,0.6l-1.6-1.5l-5.3,1.9l-4-0.3l-2.7-1.8l-1.6,0.5l-4.2-0.2l-1.9-1.4l-4.8-1.7   l-1.4-0.2l-5-1.3l-1.8,1.5l-5.7-0.3l-4.8-3.8l0.2-0.8l0.1-7.9l-2.1-3.9l-4.1-0.7l-0.4-2.4l-2.5-0.6l-2.9-0.5l-1.8,1l-2.3-2.9   l0.3-2.9l2.7-0.3l1.6-4l-2.6-1.1l0.2-3.7l4.4-0.6l-2.7-2.7l-1.5-7.1l0.6-2.9v-7.9l-1.8-3.2l2.3-9.4l2.1,0.5l2.4,2.9l2.7,2.6   l3.2,1.9l4.5,2.1l3.1,0.6l2.9,1.5l3.4,1l2.3-0.2v-2.4l1.3-1.1l2.1-1.3l0.3,1.1l0.3,1.8l-2.3,0.5l-0.3,2.1l1.8,1.5l1.1,2.4l0.6,1.9   l1.5-0.2l0.2-1.3l-1-1.3l-0.5-3.2l0.8-1.8l-0.6-1.5V119l1.8-3.6l-1.1-2.6l-2.4-4.8l0.3-0.8L267.6,106.4z M258.1,112.3l2-0.2   l0.5,1.4l1.5-1.6h2.3l0.8,1.5l-1.5,1.7l0.6,0.8l-0.7,2l-1.4,0.4c0,0-0.9,0.1-0.9-0.2s1.5-2.6,1.5-2.6l-1.7-0.6l-0.3,1.5l-0.7,0.6   l-1.5-2.3L258.1,112.3z',
                            }),
                            i.jsx('path', {
                              id: 'TX',
                              className: L.TX ? L.TX : _('TX'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Texas--40 EVs--'.concat(S.TX),
                              d: 'M531.1,433.4l22.7,1.1l31.1,1.1l-2.3,23.5l-0.3,18.2l0.1,2.1l4.3,3.8l1.7,0.8l1.8,0.3l0.7-1.3   l0.9,0.9l1.7,0.5l1.6-0.7l1.1,0.4l-0.3,3.4l4.3,1l2.7,0.8l4,0.5l2.2,1.8l3.2-1.6l2.8,0.4l2,2.8l1.1,0.3l-0.2,2l3.1,1.2l2.8-1.8   l1.5,0.4l2.4,0.2l0.4,1.9l4.6,2l2.7-0.2l2-4.1h0.3l1.1,1.9l4.4,1l3.3,1.2l3.3,0.8l2.1-0.8l0.8-2.5h3.7l1.9,0.8l3.1-1.6h0.7l0.4,1.1   h4.3l2.4-1.3l1.7,0.3l1.4,1.9l2.9,1.7l3.5,1.1l2.7,1.4l2.4,1.6l3.3-0.9l1.9,1l0.5,10.1l0.3,9.7l0.7,9.5l0.5,4l2.7,4.6l1.1,4.1   l3.9,6.3l0.5,2.9l0.5,1l-0.7,7.5l-2.7,4.4l1,2.9l-0.4,2.5l-0.8,7.3l-1.4,2.7l0.6,4.4l-5.7,1.6l-9.9,4.5l-1,1.9l-2.6,1.9l-2.1,1.5   l-1.3,0.8l-5.7,5.3l-2.7,2.1l-5.3,3.2l-5.7,2.4l-6.3,3.4l-1.8,1.5l-5.8,3.6l-3.4,0.6l-3.9,5.5l-4,0.3l-1,1.9l2.3,1.9l-1.5,5.5   l-1.3,4.5l-1.1,3.9l-0.8,4.5l0.8,2.4l1.8,7l1,6.1l1.8,2.7l-1,1.5l-3.1,1.9l-5.7-3.9l-5.5-1.1l-1.3,0.5l-3.2-0.6l-4.2-3.1l-5.2-1.1   l-7.6-3.4l-2.1-3.9l-1.3-6.5l-3.2-1.9l-0.6-2.3l0.6-0.6l0.3-3.4l-1.3-0.6l-0.6-1l1.3-4.4l-1.6-2.3l-3.2-1.3l-3.4-4.4l-3.6-6.6   l-4.2-2.6l0.2-1.9l-5.3-12.3l-0.8-4.2l-1.8-1.9l-0.2-1.5l-6-5.3l-2.6-3.1v-1.1l-2.6-2.1l-6.8-1.1l-7.4-0.6l-3.1-2.3l-4.5,1.8   l-3.6,1.5l-2.3,3.2l-1,3.7l-4.4,6.1l-2.4,2.4l-2.6-1l-1.8-1.1l-1.9-0.6l-3.9-2.3v-0.6l-1.8-1.9l-5.2-2.1l-7.4-7.8l-2.3-4.7v-8.1   l-3.2-6.5l-0.5-2.7l-1.6-1l-1.1-2.1l-5-2.1l-1.3-1.6l-7.1-7.9l-1.3-3.2l-4.7-2.3l-1.5-4.4l-2.6-2.9l-1.9-0.5l-0.6-4.7l8,0.7l29,2.7   l29,1.6l2.3-23.8l3.9-55.6l1.6-18.7l1.4,0 M631.2,667.3l-0.6-7.1l-2.7-7.2l-0.6-7l1.5-8.2l3.3-6.9l3.5-5.4l3.2-3.6l0.6,0.2   l-4.8,6.6l-4.4,6.5l-2,6.6l-0.3,5.2l0.9,6.1l2.6,7.2l0.5,5.2l0.2,1.5L631.2,667.3z',
                            }),
                            i.jsx('path', {
                              id: 'CA',
                              className: L.CA ? L.CA : _('CA'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'California--54 EVs--'.concat(S.CA),
                              d: 'M310.7,486.8l3.8-0.5l1.5-2l0.7-1.9l-3.2-0.1l-1.1-1.8l0.8-1.7l0-6.2l2.2-1.3l2.7-2.6l0.4-4.9   l1.6-3.5l1.9-2.1l3.3-1.7l1.3-0.7l0.8-1.5l-0.9-0.9l-1-1.5l-0.9-5.3l-2.9-5.2l0.1-2.8l-2.2-3.2l-15-23.2l-19.4-28.7l-22.4-33   l-12.7-19.5l1.8-7.2l6.8-25.9l8.1-31.4l-12.4-3.3l-13.5-3.4l-12.6-4.1l-7.5-2.1l-11.4-3l-7.1-2.4l-1.6,4.7l-0.2,7.4l-5.2,11.8   l-3.1,2.6l-0.3,1.1l-1.8,0.8l-1.5,4.2l-0.8,3.2l2.7,4.2l1.6,4.2l1.1,3.6l-0.3,6.5l-1.8,3.1l-0.6,5.8l-1,3.7l1.8,3.9l2.7,4.5   l2.3,4.8l1.3,4l-0.3,3.2l-0.3,0.5v2.1l5.7,6.3l-0.5,2.4l-0.6,2.3l-0.6,1.9l0.2,8.2l2.1,3.7l1.9,2.6l2.7,0.5l1,2.7l-1.1,3.6   l-2.1,1.6h-1.1l-0.8,3.9l0.5,2.9l3.2,4.4l1.6,5.3l1.5,4.7l1.3,3.1l3.4,5.8l1.5,2.6l0.5,2.9l1.6,1v2.4l-0.8,1.9l-1.8,7.1l-0.5,1.9   l2.4,2.7l4.2,0.5l4.5,1.8l3.9,2.1h2.9l2.9,3.1l2.6,4.8l1.1,2.3l3.9,2.1l4.8,0.8l1.5,2.1l0.6,3.2l-1.5,0.6l0.3,1l3.2,0.8l2.7,0.2   l2.9,4.7l3.9,4.2l0.8,2.3l2.6,4.2l0.3,3.2v9.4l0.5,1.8l10,1.5l19.7,2.7L310.7,486.8z M222.8,437l1.3,1.5l-0.2,1.3l-3.2-0.1   l-0.6-1.2l-0.6-1.5L222.8,437z M224.7,437l1.2-0.6l3.6,2.1l3.1,1.2l-0.9,0.6l-4.5-0.2l-1.6-1.6L224.7,437z M245.4,456.8l1.8,2.3   l0.8,1l1.5,0.6l0.6-1.5l-1-1.8l-2.7-2l-1.1,0.2V456.8z M244,465.5l1.8,3.2l1.2,1.9l-1.5,0.2l-1.3-1.2c0,0-0.7-1.5-0.7-1.9   s0-2.2,0-2.2L244,465.5z',
                            }),
                            i.jsx('path', {
                              id: 'AZ',
                              className: L.AZ ? L.AZ : _('AZ'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Arizona--11 EVs--'.concat(S.AZ),
                              d: 'M311.7,487.5l-2.6,2.2l-0.3,1.5l0.5,1l18.9,10.7l12.1,7.6l14.7,8.6l16.8,10l12.3,2.4l25.1,2.7   l2.5-12.5l3.8-27.2l7-52.9l4.3-31l-24.6-3.7l-27.2-4.6l-33.4-6.3l-2.9,18.1l-0.5,0.5l-1.7,2.6l-2.5-0.1l-1.3-2.7l-2.7-0.3l-0.9-1.1   h-0.9l-0.9,0.6l-1.9,1l-0.1,7l-0.2,1.7l-0.6,12.6l-1.5,2.2l-0.6,3.3l2.7,4.9l1.3,5.8l0.8,1l1,0.6l-0.1,2.3l-1.6,1.4l-3.4,1.7   l-1.9,1.9l-1.5,3.7l-0.6,4.9l-2.9,2.7l-2.1,0.7l-0.1,5.8l-0.5,1.7l0.5,0.8l3.7,0.6l-0.6,2.7l-1.5,2.2L311.7,487.5z',
                            }),
                            i.jsx('path', {
                              id: 'NV',
                              className: L.NV ? L.NV : _('NV'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Nevada--6 EVs--'.concat(S.NV),
                              d: 'M314.7,277.6l21,4.5l9.7,1.9l9.3,1.8l6.6,1.6l-0.6,5.9l-3.5,17.3l-4.1,20l-1.9,9.7l-2.2,13.3   l-3.2,16.4l-3.5,15.7l-2,10.2l-2.5,16.8l-0.5,1.1l-1.1,2.5l-1.9-0.1l-1.1-2.7l-2.7-0.5l-1.4-1l-2,0.3l-0.9,0.7l-1.3,1.3l-0.4,7   l-0.5,1.7l-0.4,12.1l-1.3,1.7l-1.9-2.3l-14.5-22.7l-19.4-29L263.6,349l-12.4-18.6l1.6-6.6l7-25.9l7.9-31.3l33.6,8.1l13.7,3',
                            }),
                            i.jsx('path', {
                              id: 'UT',
                              className: L.UT ? L.UT : _('UT'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Utah--6 EVs--'.concat(S.UT),
                              d: 'M427,409.3l-24.6-3.5l-26.6-4.9l-33.8-6l1.6-9.2l3.2-15.2L350,354l2.2-13.6l1.9-8.9l3.8-20.5   l3.5-17.5l1.1-5.6l12.7,2.3l12,2.1l10.3,1.8l8.3,1.4l3.7,0.5l-1.5,10.6l-2.3,13.2l7.8,0.9l16.4,1.8l8.2,0.9l-2.1,22l-3.2,22.6   l-3.8,27.8l-1.7,11.1L427,409.3z',
                            }),
                            i.jsx('path', {
                              id: 'CO',
                              className: L.CO ? L.CO : _('CO'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Colorado--10 EVs--'.concat(S.CO),
                              d: 'M552.6,356.8l1.4-21.3l-32.1-3.1l-24.5-2.7l-37.3-4.1l-20.7-2.5l-2.6,22.2l-3.2,22.4l-3.8,28   l-1.5,11.1l-0.3,2.8l33.9,3.8l37.7,4.3l32,3.2l16.6,0.8',
                            }),
                            i.jsx('path', {
                              id: 'NM',
                              className: L.NM ? L.NM : _('NM'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'New Mexico--5 EVs--'.concat(S.NM),
                              d: 'M456.7,531l-0.7-6.1l8.6,0.5l29.5,3.1l28.4,1.4l2-22.3l3.7-55.9l1.1-19.4l2,0.3l0-11.1l-32.2-2.4   l-36.9-4.4l-34.5-4.1l-4.2,30.8l-7,53.2l-3.8,26.9l-2,13.3l15.5,2l1.3-10l16.7,2.6L456.7,531z',
                            }),
                            i.jsx('path', {
                              id: 'OR',
                              className: L.OR ? L.OR : _('OR'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Oregon--8 EVs--'.concat(S.OR),
                              d: 'M314.3,276.7l4.3-17.9l4.7-17.9l1.1-4.2l2.4-5.6l-0.6-1.2l-2.5,0l-1.3-1.7l0.5-1.5l0.5-3.2l4.5-5.5   l1.8-1.1l1.1-1.1l1.5-3.6l4-5.7l3.6-3.9l0.2-3.5l-3.3-2.5l-1.2-4.5l-13.2-3.7l-15.1-3.5l-15.4,0.1l-0.5-1.4l-5.5,2.1l-4.5-0.6   l-2.4-1.6l-1.3,0.7L273,184l-1.7-1.4l-5.3-2.1l-0.8,0.1l-4.3-1.5l-1.9,1.8l-6.2-0.3l-5.9-4.1l0.7-0.8l0.2-7.8l-2.3-3.9l-4.1-0.6   l-0.7-2.5l-2.4-0.5l-5.8,2.1l-2.3,6.5l-3.2,10l-3.2,6.5l-5,14.1l-6.5,13.6l-8.1,12.6l-1.9,2.9l-0.8,8.6l-1.3,6l2.7,3.5l6.7,2.3   l11.6,3.3l7.9,2.5l12.4,3.6l13.3,3.6l13.2,3.6',
                            }),
                            i.jsx('path', {
                              id: 'ND',
                              className: L.ND ? L.ND : _('ND'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'North Dakota--3 EVs--'.concat(S.ND),
                              d: 'M645.3,227.7l-0.4-7.5l-2-7.3l-1.8-13.6l-0.5-9.8l-2-3.1l-1.6-5.4v-10.3l0.7-3.9l-2.1-5.5   l-28.4-0.6l-18.6-0.6l-26.5-1.3l-24.9-1.9l-1.3,14.2l-1.4,15.1l-2.3,24.9l-0.5,11l56.8,3.8L645.3,227.7z',
                            }),
                            i.jsx('path', {
                              id: 'SD',
                              className: L.SD ? L.SD : _('SD'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'South Dakota--3 EVs--'.concat(S.SD),
                              d: 'M646.8,303.2l-1-1.1l-1.5-3.6l1.8-3.7l1.1-5.6l-2.6-2.1l-0.3-2.7l0.6-3l2.2-0.8l0.3-5.7l-0.1-30.1   l-0.6-3l-4.1-3.6l-1-2v-1.9l1.9-1.3l1.5-1.9l0.2-2.7l-57.4-1.6l-56.2-3.9l-0.8,5.3l-1.6,15.9l-1.3,17.9l-1.6,24.6l16,1l19.6,1.1   l18,1.3l23.8,1.3l10.7-0.8l2.9,2.3l4.3,3l1,0.8l3.5-0.9l4-0.3l2.7-0.1l3.1,1.2l4.5,1.4l3.1,1.8l0.6,1.9l0.9,1.9l0.7-0.5   L646.8,303.2z',
                            }),
                            i.jsx('path', {
                              id: 'NE',
                              className: L.NE ? L.NE : _('NE'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Nebraska--5 Split EVs--'.concat(
                                S.NE
                              ),
                              d: 'M658.2,347l1.4,2.7l0.1,2.1l2.4,3.7l2.7,3.2h-5l-43.5-0.9l-40.8-0.9l-21.2-1l1.1-21.3l-33.4-2.7   l4.3-44l15.5,1L562,290l17.8,1.1l23.8,1.1l10.7-0.5l2.1,2.3l4.8,3l1.1,0.9l4.3-1.4l3.9-0.5l2.7-0.2l1.8,1.4l5,1.6l3,1.6l0.5,1.6   l0.9,2.1h1.8l0.8,0l1,5.2l2.7,8l1.2,4.6l2.1,3.8l0.5,4.9l1.4,4.3l0.5,6.5',
                            }),
                            i.jsx('path', {
                              id: 'IA',
                              className: L.IA ? L.IA : _('IA'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Iowa--6 EVs--'.concat(S.IA),
                              d: 'M740.6,301.6l0.2,1.9l2.3,1.1l1.1,1.3l0.3,1.3l3.9,3.2l0.7,2.2l-0.8,2.9l-1.5,3.5l-0.8,2.7   l-2.2,1.6l-1.7,0.6l-5.5,1.5l-0.7,2.3l-0.8,2.3l0.6,1.4l1.7,1.7l0,3.7l-2.2,1.6l-0.5,1.5v2.5l-1.5,0.5l-1.7,1.4l-0.5,1.5l0.5,1.7   l-1.4,1.2l-2.3-2.7l-1.5-2.6l-8.3,0.8l-10.2,0.6l-25,0.7l-13,0.2l-9.4,0.2l-1.3,0.1l-1.7-4.5l-0.2-6.6l-1.6-4.1l-0.7-5.3l-2.3-3.7   l-0.9-4.8l-2.7-7.5l-1.1-5.4l-1.4-2.2l-1.6-2.7l1.8-4.3l1.4-5.7l-2.7-2.1l-0.5-2.7l0.9-2.5h1.7h11.5l49.6-0.7l19.9-0.7l1.9,2.7   l1.8,2.6l0.5,0.8l-1.8,2.7l0.5,4.2l2.5,3.9l3,1.8l2.4,0.2L740.6,301.6z',
                            }),
                            i.jsx('path', {
                              id: 'MS',
                              className: L.MS ? L.MS : _('MS'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Mississippi--6 EVs--'.concat(S.MS),
                              d: 'M798.6,567l-0.3,1.3h-5.2l-1.5-0.8l-2.1-0.3l-6.8,1.9l-1.8-0.8l-2.6,4.2l-1.1,0.8l-1.1-2.5   l-1.1-3.9l-3.4-3.2l1.1-7.5l-0.7-0.9l-1.8,0.2l-8.2,0.7l-24.2,0.7l-0.5-1.6l0.7-8l3.4-6.2l5.3-9.1l-0.9-2.1h1.1l0.7-3.2l-2.3-1.8   l0.2-1.8l-2.1-4.6l-0.3-5.3l1.4-2.7l-0.4-4.3l-1.4-3l1.4-1.4l-1.4-2.1l0.5-1.8l0.9-6.2l3-2.7l-0.7-2.1l3.7-5.3l2.7-0.9v-2.5   l-0.7-1.4l2.7-5.3l2.7-1.1l0.1-3.4l8.7-0.1l24.1-1.9l4.6-0.2l0,6.4l0.2,16.7l-0.8,31l-0.2,14.1l2.7,18.8L798.6,567z',
                            }),
                            i.jsx('path', {
                              id: 'IN',
                              className: L.IN ? L.IN : _('IN'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Indiana--11 EVs--'.concat(S.IN),
                              d: 'M792.4,400.9l0.1-2.9l0.5-4.5l2.3-2.9l1.8-3.9l2.6-4.2l-0.5-5.8l-1.8-2.7l-0.3-3.2l0.8-5.5l-0.5-7   l-1.3-16l-1.3-15.4l-1-11.7l3.1,0.9l1.5,1l1.1-0.3l2.1-1.9l2.8-1.6l5.1-0.2l22-2.3l5.6-0.5l1.5,16l4.3,36.8l0.6,5.8L843,371   l1.2,1.8l0.1,1.4l-2.5,1.6l-3.5,1.6l-3.2,0.6l-0.6,4.9l-4.6,3.3l-2.8,4l0.3,2.4l-0.6,1.5h-3.3l-1.6-1.6l-2.5,1.3l-2.7,1.5l0.2,3.1   l-1.2,0.3l-0.5-1l-2.2-1.5l-3.3,1.3l-1.6,3l-1.4-0.8l-1.5-1.6l-4.5,0.5l-5.6,1L792.4,400.9z',
                            }),
                            i.jsx('path', {
                              id: 'IL',
                              className: L.IL ? L.IL : _('IL'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Illinois--19 EVs--'.concat(S.IL),
                              d: 'M791.8,401.6V398l0.3-4.9l2.4-3.1l1.8-3.8l2.6-3.9l-0.4-5.3l-2-3.5l-0.1-3.3l0.7-5.3l-0.8-7.2   l-1.1-15.8l-1.3-15l-0.9-11.6l-0.3-0.9l-0.8-2.6l-1.3-3.7l-1.6-1.8l-1.5-2.6l-0.2-5.5l-9.9,1.3l-27.2,1.7l-8.7-0.4l0.2,2.4l2.3,0.7   l0.9,1.1l0.5,1.8l3.9,3.4l0.7,2.3l-0.7,3.4l-1.8,3.7l-0.7,2.5l-2.3,1.8l-1.8,0.7l-5.3,1.4l-0.7,1.8L736,330l0.7,1.4l1.8,1.6   l-0.2,4.1l-1.8,1.6l-0.7,1.6v2.7l-1.8,0.5l-1.6,1.1l-0.2,1.4l0.2,2.1l-1.7,1.3l-1,2.8l0.5,3.7l2.3,7.3l7.3,7.5l5.5,3.7l-0.2,4.3   l0.9,1.4l6.4,0.5l2.7,1.4l-0.7,3.7l-2.3,5.9l-0.7,3.2l2.3,3.9l6.4,5.3l4.6,0.7l2.1,5l2.1,3.2l-0.9,3l1.6,4.1l1.8,2.1l1.9-0.8   l0.7-2.2l2-1.4l3.2-1.1l3.1,1.2l2.9,1.1l0.8-0.2l-0.1-1.2l-1.1-2.8l0.4-2.4l2.3-1.6l2.4-1l1.2-0.4l-0.6-1.3l-0.8-2.2l1.2-1.3   L791.8,401.6z',
                            }),
                            i.jsx('path', {
                              id: 'MN',
                              className: L.MN ? L.MN : _('MN'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Minnesota--10 EVs--'.concat(S.MN),
                              d: 'M645.9,228.5l-0.5-8.5l-1.8-7.3l-1.8-13.5l-0.5-9.8l-1.8-3.4l-1.6-5v-10.3l0.7-3.9l-1.8-5.5l30.1,0   l0.3-8.2l0.6-0.2l2.3,0.5l1.9,0.8l0.8,5.5l1.5,6.1l1.6,1.6h4.8l0.3,1.5l6.3,0.3v2.1h4.8l0.3-1.3l1.1-1.1l2.3-0.6l1.3,1h2.9l3.9,2.6   l5.3,2.4l2.4,0.5l0.5-1l1.5-0.5l0.5,2.9l2.6,1.3l0.5-0.5l1.3,0.2v2.1l2.6,1h3.1l1.6-0.8l3.2-3.2l2.6-0.5l0.8,1.8l0.5,1.3h1l1-0.8   l8.9-0.3l1.8,3.1h0.6l0.7-1.1l4.4-0.4l-0.6,2.3l-3.9,1.8l-9.2,4.1l-4.8,2l-3.1,2.6l-2.4,3.6l-2.3,3.9l-1.8,0.8l-4.5,5l-1.3,0.2   l-3.8,2.9l-2.8,3.2l-0.2,3l0.2,7.8l-1.6,1.6L704,228l-1.8,5.7l2.5,3.6l0.5,2.5l-1.1,3l-0.2,3.7l0.5,7.1l3.4,4.1h3l2.5,2.3l3.2,1.4   l3.7,5l7.1,5l1.8,2.1l0.2,5.5l-20.6,0.7l-60.2,0.5l-0.3-35.7l-0.5-3l-4.1-3.4l-1.1-1.8v-1.6l2.1-1.6l1.4-1.4L645.9,228.5z',
                            }),
                            i.jsx('path', {
                              id: 'WI',
                              className: L.WI ? L.WI : _('WI'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Wisconsin--10 EVs--'.concat(S.WI),
                              d: 'M786.9,297.2l0.4-3l-1.6-4.5l-0.6-6.1l-1.1-2.4l1-3.1l0.8-2.9l1.5-2.6l-0.6-3.4l-0.6-3.6l0.5-1.8   l1.9-2.4l0.2-2.7l-0.8-1.3l0.6-2.6l0.5-3.2l2.7-5.7l2.9-6.8l0.2-2.3l-0.3-1l-0.8,0.5l-4.2,6.3l-2.7,4l-1.9,1.8l-0.8,2.3l-1.5,0.8   l-1.1,1.9l-1.5-0.3l-0.2-1.8l1.3-2.4l2.1-4.7l1.8-1.6l1.1-2.3l-1.6-0.9l-1.4-1.4l-1.6-10.3l-3.7-1.1l-1.4-2.3l-12.6-2.7l-2.5-1.1   l-8.2-2.3l-8.2-1.1l-4.2-5.4l-0.5,1.3l-1.1-0.2l-0.6-1.1l-2.7-0.8l-1.1,0.2l-1.8,1l-1-0.6l0.6-1.9l1.9-3.1l1.1-1.1l-1.9-1.5   l-2.1,0.8l-2.9,1.9l-7.4,3.2l-2.9,0.6l-2.9-0.5l-1-0.9l-2.1,2.8l-0.2,2.7v8.5l-1.1,1.6l-5.3,3.9l-2.3,5.9l0.5,0.2l2.5,2.1l0.7,3.2   l-1.8,3.2v3.9l0.5,6.6l3,3h3.4l1.8,3.2l3.4,0.5l3.9,5.7l7.1,4.1l2.1,2.7l0.9,7.4l0.7,3.3l2.3,1.6l0.2,1.4l-2.1,3.4l0.2,3.2l2.5,3.9   l2.5,1.1l3,0.5l1.3,1.4l9.2,0l26.1-1.5L786.9,297.2z',
                            }),
                            i.jsx('path', {
                              id: 'MO',
                              className: L.MO ? L.MO : _('MO'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Missouri--10 EVs--'.concat(S.MO),
                              d: 'M729.8,349.5l-2.5-3.1l-1.1-2.3l-7.8,0.7l-9.8,0.5l-25.4,0.9l-13.5,0.2l-7.9,0.1l-2.3,0.1l1.3,2.5   l-0.2,2.3l2.5,3.9l3.1,4.1l3.1,2.7l2.3,0.2l1.4,0.9v3l-1.8,1.6l-0.5,2.3l2.1,3.4l2.5,3l2.5,1.8l1.4,11.7l-0.7,35.3l0.2,4.7l0.5,5.4   l23.4-0.1l23.2-0.7l20.8-0.8l11.7-0.2l2.2,3.4l-0.7,3.3l-3.1,2.4l-0.6,1.8l5.4,0.5l3.9-0.7l1.7-5.5l0.7-5.9l2.3-2l1.7-1.5l2.1-1   l0.1-2.9l0.6-1.7l-1-1.7l-2.7,0.1l-2.2-2.6l-1.4-4.2l0.8-2.5l-1.9-3.4l-1.8-4.6l-4.8-0.8l-7-5.6l-1.7-4.1l0.8-3.2l2.1-6.1l0.5-2.9   l-1.9-1l-6.9-0.8l-1-1.7l-0.1-4.2l-5.5-3.4l-7-7.8l-2.3-7.3l-0.2-4.2L729.8,349.5z',
                            }),
                            i.jsx('path', {
                              id: 'AR',
                              className: L.AR ? L.AR : _('AR'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Arkansas--6 EVs--'.concat(S.AR),
                              d: 'M765,445l-3.8,0.9l-6.2-0.5l0.7-3l3.2-2.7l0.5-2.3l-1.8-3l-11,0.5l-20.8,0.9l-23.3,0.7L679,437   l1.6,6.9v8.2l1.4,11l0.2,37.8l2.3,1.9l3-1.4l2.7,1.1l0.4,10.3l22.9-0.1l18.9-0.8l10.1-0.2l1.1-2.1l-0.3-3.5l-1.8-3l1.6-1.5   l-1.6-2.5l0.7-2.5l1.4-5.6l2.5-2.1l-0.7-2.3l3.7-5.4l2.7-1.4l-0.1-1.5l-0.3-1.8l2.9-5.6l2.4-1.3l0.4-3.4l1.8-1.2l0.9-4.2l-1.3-4   l4-2.4l0.6-2l1.2-4.3L765,445z',
                            }),
                            i.jsx('path', {
                              id: 'OK',
                              className: L.OK ? L.OK : _('OK'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Oklahoma--7 EVs--'.concat(S.OK),
                              d: 'M549.3,422.6l-10.7-0.5l-6.4-0.5l0.3,0.2l-0.7,10.4l22,1.4l32.1,1.3l-2.3,24.4l-0.5,17.8l0.2,1.6   l4.3,3.7l2.1,1.1l0.7-0.2l0.7-2.1l1.4,1.8h2.1v-1.4l2.7,1.4l-0.5,3.9l4.1,0.2l2.5,1.1l4.1,0.7l2.5,1.8l2.3-2.1l3.4,0.7l2.5,3.4h0.9   v2.3l2.3,0.7l2.3-2.3l1.8,0.7h2.5l0.9,2.5l4.8,1.8l1.4-0.7l1.8-4.1h1.1l1.1,2.1l4.1,0.7l3.7,1.4l3,0.9l1.8-0.9l0.7-2.5h4.3l2.1,0.9   l2.7-2.1h1.1l0.7,1.6h4.1l1.6-2.1l1.8,0.5l2.1,2.5l3.2,1.8l3.2,0.9l1.9,1.1l-0.4-37.2l-1.4-11l-0.2-8.9l-1.4-6.5l-0.8-7.2l-0.1-3.8   l-12.1,0.3l-46.4-0.5l-45-2.1L549.3,422.6z',
                            }),
                            i.jsx('path', {
                              id: 'KS',
                              className: L.KS ? L.KS : _('KS'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Kansas--6 EVs--'.concat(S.KS),
                              d: 'M677.4,425.1l-12.6,0.2l-46.1-0.5l-44.6-2.1l-24.6-1.3l4.1-64.7l21.8,0.8l40.5,1.4l44.1,0.5h5.1   l3.2,3.2l2.8,0.2l0.9,1.1v2l-1.8,1.6l-0.5,2.6l2.2,3.6l2.5,3.1l2.5,2l1.1,11.2L677.4,425.1z',
                            }),
                            i.jsx('path', {
                              id: 'LA',
                              className: L.LA ? L.LA : _('LA'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Louisiana--8 EVs--'.concat(S.LA),
                              d: 'M776.2,573l-1-2.6l-1.1-3.1l-3.3-3.5l0.9-6.8l-0.1-1.1l-1.3,0.3l-8.2,0.9l-25,0.5l-0.7-2.4l0.9-8.5   l3.3-5.9l5-8.7l-0.6-2.4l1.3-0.7l0.5-2l-2.3-2.1l-0.1-1.9l-1.8-4.3l-0.5-5.9l-9.7,0.1l-19.2,0.9l-22.2,0l0,9.6l0.7,9.4l0.7,3.9   l2.5,4.1l0.9,5l4.3,5.5l0.2,3.2l0.7,0.7l-0.7,8.5l-3,5l1.6,2.1l-0.7,2.5l-0.7,7.3l-1.4,3.2l0.1,3.6l4.7-1.5l8.1-0.3l10.3,3.6   l6.5,1.1l3.7-1.5l3.2,1.1l3.2,1l0.8-2.1l-3.2-1.1l-2.6,0.5l-2.7-1.6c0,0,0.2-1.3,0.8-1.5c0.6-0.2,3.1-1,3.1-1l1.8,1.5l1.8-1   l3.2,0.6l1.5,2.4l0.3,2.3l4.5,0.3l1.8,1.8l-0.8,1.6l-1.3,0.8l1.6,1.6l8.4,3.6l3.6-1.3l1-2.4l2.6-0.6l1.8-1.5l1.3,1l0.8,2.9   l-2.3,0.8l0.6,0.6l3.4-1.3l2.3-3.4l0.8-0.5l-2.1-0.3l0.8-1.6l-0.2-1.5l2.1-0.5l1.1-1.3l0.6,0.8c0,0-0.2,3.1,0.6,3.1   c0.8,0,4.2,0.6,4.2,0.6l4,1.9l1,1.5h2.9l1.1,1l2.3-3.1v-1.5h-1.3l-3.4-2.7l-5.8-0.8l-3.2-2.3l1.1-2.7l2.3,0.3l0.2-0.6l-1.8-1v-0.5   h3.2l1.8-3.1l-1.3-1.9l-0.3-2.7l-1.5,0.2l-1.9,2.1l-0.6,2.6l-3.1-0.6l-1-1.8l1.8-1.9l2-1.8L776.2,573z',
                            }),
                            i.jsx('path', {
                              id: 'VA',
                              className: L.VA ? L.VA : _('VA'),
                              onClick: W,
                              onMouseEnter: P,
                              onMouseLeave: R,
                              stroke: '#a9a9a9',
                              'data-info': 'Virginia--13 EVs--'.concat(S.VA),
                              d: 'M1002.9,369.2l-0.1-1.9l6.5-2.5l-0.8,3.2l-2.9,3.8l-0.4,4.6l0.5,3.4l-1.8,5l-2.2,1.9l-1.5-4.6   l0.4-5.4l1.6-4.2L1002.9,369.2z M1005.2,397.5L947,410.1l-37.4,5.3l-6.7-0.4l-2.6,1.9l-7.3,0.2l-8.4,1l-8.9,1l8.5-4.9l0-2.1   l1.5-2.1l10.6-11.5l3.9,4.5l3.8,1l2.5-1.1l2.2-1.3l2.5,1.3l3.9-1.4l1.9-4.6l2.6,0.5l2.9-2.1l1.8,0.5l2.8-3.7l0.3-2.1l-1-1.3l1-1.9   l5.3-12.3l0.6-5.7l1.2-0.5l2.2,2.4l3.9-0.3l1.9-7.6l2.8-0.6l1-2.7l2.6-2.3l1.3-2.3l1.5-3.4l0.1-5.1l9.8,3.8   c0.7,0.3,0.7-4.8,0.7-4.8l4.1,1.4l-0.5,2.6l8.2,2.9l1.3,1.8l-0.9,3.7l-1.3,1.3l-0.5,1.7l0.5,2.4l2,1.3l3.9,1.4l2.9,1l4.9,0.9   l2.2,2.1l3.2,0.4l0.9,1.2l-0.4,4.7l1.4,1.1l-0.5,1.9l1.2,0.8l-0.2,1.4l-2.7-0.1l0.1,1.6l2.3,1.5l0.1,1.4l1.8,1.8l0.5,2.5l-2.6,1.4   l1.6,1.5l5.8-1.7L1005.2,397.5z',
                            }),
                            i.jsxs(
                              'g',
                              e(
                                { id: 'DC-circle' },
                                {
                                  children: [
                                    i.jsx('path', {
                                      id: 'path58',
                                      fill: '#fff',
                                      d: 'M975.8,353.8l-1.1-1.6l-1-0.8l1.1-1.6l2.2,1.5L975.8,353.8z',
                                    }),
                                    i.jsx('circle', {
                                      id: 'DC',
                                      className: L.DC ? L.DC : _('DC'),
                                      onClick: function (l) {
                                        if ('manual' === t) {
                                          var e = l.target.id;
                                          n(
                                            ''
                                              .concat(e, '-')
                                              .concat(l.currentTarget.classList)
                                          );
                                        }
                                      },
                                      onMouseEnter: function (l) {
                                        var e = l.target.id;
                                        k(e), N(l.currentTarget.dataset.info);
                                      },
                                      onMouseLeave: R,
                                      'data-info':
                                        'Washington, D.C.--3 EVs--'.concat(
                                          S.DC
                                        ),
                                      stroke: '#a9a9a9',
                                      strokeWidth: '1.5',
                                      cx: '975.3',
                                      cy: '351.8',
                                      r: '5',
                                    }),
                                  ],
                                }
                              )
                            ),
                          ],
                        }
                      )
                    ),
                    i.jsx('path', {
                      id: 'path67',
                      fill: 'none',
                      stroke: '#A9A9A9',
                      strokeWidth: '2',
                      d: 'M385,593v55l36,45 M174,525h144l67,68h86l53,54v46',
                    }),
                  ],
                }
              )
            ),
          ],
        }
      )
    );
  },
  E = function (a) {
    var t = a.currentPVTotals,
      n = a.evs,
      o = a.handlePropVotes,
      r = a.hasClearedSavedData,
      s = a.isReadOnly,
      c = a.name,
      d = a.party,
      u = a.percent,
      p = a.stateEvs,
      f = Number(u) > 0 ? u : '',
      v = l.useState(0),
      m = v[0],
      h = v[1],
      g = l.useState(f),
      y = g[0],
      M = g[1],
      b = l.useState(''),
      k = b[0],
      x = b[1],
      E = ''.concat(d, 'PopVoteInput'),
      N = ''.concat(d.toUpperCase(), ' %');
    l.useEffect(
      function () {
        'true' === r && M('');
      },
      [r]
    );
    var C = function (l, e) {
      var a = null == l ? void 0 : l.target,
        r = null == a ? void 0 : a.value,
        s = e ? Number(e) : a ? Number(r) : 0,
        i = null != p ? p : n;
      'Maine' === c ? (i = '4') : 'Nebraska' === c && (i = '5');
      var d = Boolean(s) || u ? s / 100 : 0,
        f = Math.round(Number(i) * d),
        v =
          e || !1 === Boolean(l)
            ? null
            : null == l
              ? void 0
              : l.target.dataset.party,
        m = t[0],
        h = t[1],
        g = t[2],
        y = t[3],
        M = t[4];
      if (Boolean(f) && s <= 100) {
        switch (v) {
          case 'gop':
            m += f;
            break;
          case 'dem':
            h += f;
            break;
          case 'lib':
            g += f;
            break;
          case 'grn':
            y += f;
            break;
          case 'ind':
            M += f;
        }
        var b = [m, h, g, y, M];
        if (a) a.setAttribute('data-evsawarded', String(f)), o(b);
        else if (u) return f;
      }
    };
    return i.jsx(
      'div',
      e(
        { className: 'pvInputWrapper' },
        {
          children: i.jsx('input', {
            className: 'pvInput',
            'data-evsawarded': String(C(null, y)),
            'data-party': d,
            'data-statename': c,
            defaultValue: y,
            id: E,
            onBlur: function (l) {
              l.persist();
              var e = l.currentTarget.value;
              '' !== y && '' === e ? (M(k), C(null, k)) : C(l);
            },
            onChange: function (l) {
              var e = l.target;
              M(e.value);
            },
            onFocus: function (l) {
              var e = Number(l.currentTarget.dataset.evsawarded),
                a = isNaN(e) ? m : e;
              l.persist(),
                h(a),
                x(y),
                M(''),
                (function (l, e) {
                  var a = l.currentTarget.dataset.party,
                    n = t[0],
                    r = t[1],
                    s = t[2],
                    i = t[3],
                    c = t[4];
                  switch (a) {
                    case 'gop':
                      n -= e;
                      break;
                    case 'dem':
                      r -= e;
                      break;
                    case 'lib':
                      s -= e;
                      break;
                    case 'grn':
                      i -= e;
                      break;
                    case 'ind':
                      c -= e;
                  }
                  var d = [n, r, s, i, c];
                  l.target.setAttribute('data-evsawarded', '0'), o(d);
                })(l, a);
            },
            pattern: '^(100(?:\\.00)?|0(?:\\.\\d\\d)?|\\d?\\d(?:\\.\\d\\d)?)$',
            placeholder: N,
            readOnly: s,
            type: 'text',
          }),
        }
      )
    );
  },
  N = ['gop', 'dem', 'lib', 'grn', 'ind'],
  C = [
    { name: 'Alabama', stateCode: 'AL', evs: '9' },
    { name: 'Alaska', stateCode: 'AK', evs: '3' },
    { name: 'Arizona', stateCode: 'AZ', evs: '11' },
    { name: 'Arkansas', stateCode: 'AR', evs: '6' },
    { name: 'California', stateCode: 'CA', evs: '54' },
    { name: 'Colorado', stateCode: 'CO', evs: '10' },
    { name: 'Connecticut', stateCode: 'CT', evs: '7' },
    { name: 'Delaware', stateCode: 'DE', evs: '3' },
    { name: 'Florida', stateCode: 'FL', evs: '30' },
    { name: 'Georgia', stateCode: 'GA', evs: '16' },
    { name: 'Hawaii', stateCode: 'HI', evs: '4' },
    { name: 'Idaho', stateCode: 'ID', evs: '4' },
    { name: 'Illinois', stateCode: 'IL', evs: '19' },
    { name: 'Indiana', stateCode: 'IN', evs: '11' },
    { name: 'Iowa', stateCode: 'IA', evs: '6' },
    { name: 'Kansas', stateCode: 'KS', evs: '6' },
    { name: 'Kentucky', stateCode: 'KY', evs: '8' },
    { name: 'Louisiana', stateCode: 'LA', evs: '8' },
    { name: 'ME-CD1', stateCode: 'ME1', evs: '1' },
    { name: 'ME-CD2', stateCode: 'ME2', evs: '1' },
    { name: 'Maine', stateCode: 'ME', evs: '2', stateEvs: '4' },
    { name: 'Maryland', stateCode: 'MD', evs: '10' },
    { name: 'Massachusetts', stateCode: 'MA', evs: '11' },
    { name: 'Michigan', stateCode: 'MI', evs: '15' },
    { name: 'Minnesota', stateCode: 'MN', evs: '10' },
    { name: 'Mississippi', stateCode: 'MS', evs: '6' },
    { name: 'Missouri', stateCode: 'MO', evs: '10' },
    { name: 'Montana', stateCode: 'MT', evs: '4' },
    { name: 'NE-CD1', stateCode: 'NE1', evs: '1' },
    { name: 'NE-CD2', stateCode: 'NE2', evs: '1' },
    { name: 'NE-CD3', stateCode: 'NE3', evs: '1' },
    { name: 'Nebraska', stateCode: 'NE', evs: '2', stateEvs: '5' },
    { name: 'Nevada', stateCode: 'NV', evs: '6' },
    { name: 'New Hampshire', stateCode: 'NH', evs: '4' },
    { name: 'New Jersey', stateCode: 'NJ', evs: '14' },
    { name: 'New Mexico', stateCode: 'NM', evs: '5' },
    { name: 'New York', stateCode: 'NY', evs: '28' },
    { name: 'North Carolina', stateCode: 'NC', evs: '16' },
    { name: 'North Dakota', stateCode: 'ND', evs: '3' },
    { name: 'Ohio', stateCode: 'OH', evs: '17' },
    { name: 'Oklahoma', stateCode: 'OK', evs: '7' },
    { name: 'Oregon', stateCode: 'OR', evs: '8' },
    { name: 'Pennsylvania', stateCode: 'PA', evs: '19' },
    { name: 'Rhode Island', stateCode: 'RI', evs: '4' },
    { name: 'South Carolina', stateCode: 'SC', evs: '9' },
    { name: 'South Dakota', stateCode: 'SD', evs: '3' },
    { name: 'Tennessee', stateCode: 'TN', evs: '11' },
    { name: 'Texas', stateCode: 'TX', evs: '40' },
    { name: 'Utah', stateCode: 'UT', evs: '6' },
    { name: 'Vermont', stateCode: 'VT', evs: '3' },
    { name: 'Virginia', stateCode: 'VA', evs: '13' },
    { name: 'Washington', stateCode: 'WA', evs: '12' },
    { name: 'Washington, D.C.', stateCode: 'DC', evs: '3' },
    { name: 'West Virginia', stateCode: 'WV', evs: '4' },
    { name: 'Wisconsin', stateCode: 'WI', evs: '10' },
    { name: 'Wyoming', stateCode: 'WY', evs: '3' },
  ],
  S = function (a) {
    var t = a.autoModeToggleWinner,
      n = a.currentPVTotals,
      o = a.dataMode,
      r = a.evs,
      s = a.handlePropVotes,
      c = a.hasClearedSavedData,
      u = a.name,
      p = a.popVotesData,
      f = a.proportionalReawardMode,
      v = a.renderPropErrorMessage,
      m = a.showPopVotes,
      h = a.stateEvs,
      g = p ? p.values : ['0', '0', '0', '0', '0'],
      y = m ? '' : 'hide',
      M = l.useState(c),
      b = M[0],
      k = M[1],
      x = l.useState(!1),
      S = x[0],
      w = x[1];
    l.useEffect(
      function () {
        k(c);
      },
      [c]
    ),
      l.useEffect(
        function () {
          var l;
          if (
            'auto' === o &&
            !S &&
            g.filter(function (l) {
              return Number(l) > 0;
            }).length > 0
          ) {
            w(!0);
            var e =
                null ===
                  (l = C.find(function (l) {
                    return l.name === u;
                  })) || void 0 === l
                  ? void 0
                  : l.stateCode,
              a = g.map(function (l) {
                return Number(l);
              }),
              n = Math.max.apply(Math, a),
              i = String(
                a.findIndex(function (l) {
                  return l === n;
                }) + 1
              ),
              c = d({
                proportionalReawardMode: f,
                renderPropErrorMessage: v,
                stateEVs: Number(r),
                voteTotals: g,
              });
            s(c), t({ evs: Number(r), newWinningParty: i, stateId: e });
          }
        },
        [o, r, s, S, f, g, w]
      );
    return i.jsx(
      'div',
      e(
        { className: 'popVotesWrapper '.concat(y) },
        {
          children: g.map(function (l, e) {
            return i.jsx(
              E,
              {
                currentPVTotals: n,
                evs: r,
                handlePropVotes: s,
                hasClearedSavedData: b,
                isReadOnly: 'auto' === o,
                name: u,
                party: N[e],
                percent: 'true' === b ? '0' : p && l,
                stateEvs: h,
              },
              ''.concat(u, '-').concat(N[e])
            );
          }),
        }
      )
    );
  },
  w = function (a) {
    var t = a.dataMode,
      n = a.evs,
      o = a.isFromStorage,
      r = a.name,
      s = a.stateClickedFromMap,
      c = a.stateCode,
      d = a.stateEvs,
      u = a.stateWinnerData,
      p = a.toggleWinner,
      f = a.winner,
      m = l.useRef(null),
      h = l.useState(o || 'auto' === t ? Number(f) : 0),
      g = h[0],
      y = h[1],
      M = l.useState(v(f)),
      b = M[0],
      k = M[1];
    l.useEffect(
      function () {
        var l;
        'false' !== s &&
          (null === (l = null == m ? void 0 : m.current) ||
            void 0 === l ||
            l.click());
      },
      [s]
    ),
      l.useEffect(
        function () {
          var l;
          if (
            (null === (l = null == u ? void 0 : u[0]) || void 0 === l
              ? void 0
              : l.stateId) === c
          ) {
            var e = null == u ? void 0 : u[0].newWinningParty,
              a = v(e);
            y(Number(e)), k(a);
          }
        },
        [u]
      );
    return (
      l.useEffect(
        function () {
          y(Number(f)), k(v(f));
        },
        [f]
      ),
      i.jsxs(
        'div',
        e(
          { className: 'stateWrapper', id: r.trim() },
          {
            children: [
              i.jsx(
                'div',
                e(
                  {
                    className: 'state '.concat(b),
                    'data-evs': n,
                    'data-stateevs': d,
                    'data-fromstorage': o,
                    'data-statecode': c,
                    'data-statename': r,
                    'data-winner': g,
                    onClick: function (l) {
                      if ('manual' === t) {
                        var e = 5 === g ? 0 : g + 1,
                          a = v(String(e)),
                          o = {
                            evs: Number(n),
                            newWinningParty: String(e),
                            stateId: l.currentTarget.dataset.statecode,
                          };
                        y(e), k(a), p(o);
                      }
                    },
                    ref: m,
                    tabIndex: 0,
                  },
                  {
                    children: i.jsx(
                      'span',
                      e({ className: 'evs' }, { children: n })
                    ),
                  }
                )
              ),
              i.jsx('p', e({ className: 'stateName' }, { children: r })),
            ],
          }
        )
      )
    );
  },
  j = function (a) {
    var t = a.currentEVTotals,
      n = a.currentPVTotals,
      o = a.dataMode,
      r = a.handlePropVotes,
      s = a.handleStateWinner,
      c = a.hasClearedSavedData,
      d = a.isFromStorage,
      u = a.mapSize,
      v = a.popVotesData,
      m = a.proportionalReawardMode,
      h = a.renderPropErrorMessage,
      g = a.stateControlSize,
      y = a.statesData,
      M = 'Hide Popular Votes',
      b = l.useState(M),
      k = b[0],
      E = b[1],
      N = l.useState(!0),
      C = N[0],
      j = N[1],
      L = l.useState(y),
      V = L[0],
      T = L[1],
      I = l.useState(null),
      A = I[0],
      D = I[1],
      O = l.useState(f(y)),
      z = O[0],
      W = O[1],
      P = l.useState(''),
      R = P[0],
      _ = P[1],
      F = l.useState(c),
      H = F[0],
      K = F[1],
      Y = l.useState(c),
      $ = Y[0],
      J = Y[1],
      U = l.useState(!1),
      B = U[0],
      G = U[1],
      q = {};
    l.useEffect(function () {
      'auto' !== o || B || (W(q), G(!0));
    }),
      l.useEffect(
        function () {
          T(y), 'manual' === o && W(f(y));
        },
        [o, f, W, T, y]
      ),
      l.useEffect(
        function () {
          K(c), J(c);
        },
        [c]
      );
    var X,
      Z,
      Q,
      ll = function (l) {
        var a,
          n = t[0],
          r = t[1],
          i = t[2],
          c = t[3],
          d = t[4];
        switch (l.newWinningParty) {
          case '1':
            n += l.evs;
            break;
          case '2':
            (r += l.evs), 'manual' === o && (n -= l.evs);
            break;
          case '3':
            (i += l.evs), 'manual' === o && (r -= l.evs);
            break;
          case '4':
            (c += l.evs), 'manual' === o && (i -= l.evs);
            break;
          case '5':
            (d += l.evs), 'manual' === o && (c -= l.evs);
            break;
          default:
            'manual' === o && (d -= l.evs);
        }
        s([n, r, i, c, d], l);
        var u = (((a = {})[l.stateId] = p(l.newWinningParty)), a);
        D({ newWinningParty: l.newWinningParty, stateId: l.stateId }),
          'manual' === o ? W(e(e({}, z), u)) : (q = e(e({}, q), u));
      };
    return i.jsxs(
      'div',
      e(
        { className: 'statesPopVotes' },
        {
          children: [
            i.jsx(x, {
              dataMode: o,
              handleMapStateClick: function (l) {
                _(l);
              },
              hasClearedSavedData: H,
              mapSize: u,
              newStateData: A,
              stateWinnerNames: z,
              statesData: V,
            }),
            i.jsxs(
              'div',
              e(
                { className: 'statesWrapper' },
                {
                  children: [
                    i.jsx(
                      'button',
                      e(
                        {
                          type: 'button',
                          onClick: function () {
                            var l = M;
                            C && (l = 'Show Popular Votes'), E(l), j(!C);
                          },
                        },
                        { children: k }
                      )
                    ),
                    ((X = R),
                    (Z = V),
                    (Q = 0),
                    Z.map(function (l, a) {
                      var t;
                      if (-1 === l.name.indexOf('-CD'))
                        return i.jsxs(
                          'div',
                          e(
                            { className: 'state-control '.concat(g) },
                            {
                              children: [
                                i.jsx(w, {
                                  dataMode: o,
                                  evs:
                                    l.stateEvs && 'auto' === o
                                      ? l.stateEvs
                                      : l.evs,
                                  isFromStorage: d,
                                  name: l.name,
                                  stateClickedFromMap:
                                    (null == X ? void 0 : X.split('-')[0]) ===
                                    l.stateCode
                                      ? X
                                      : 'false',
                                  stateCode: l.stateCode,
                                  stateEvs: l.stateEvs,
                                  stateWinnerData: [A],
                                  toggleWinner: ll,
                                  winner: l.winner || '0',
                                }),
                                i.jsx(S, {
                                  autoModeToggleWinner: ll,
                                  currentPVTotals: n,
                                  dataMode: o,
                                  evs:
                                    l.stateEvs && 'auto' === o
                                      ? l.stateEvs
                                      : l.evs,
                                  handlePropVotes: r,
                                  hasClearedSavedData: $,
                                  name: l.name,
                                  popVotesData: null == v ? void 0 : v[a - Q],
                                  proportionalReawardMode: m,
                                  renderPropErrorMessage: h,
                                  stateEvs: l.stateEvs,
                                  showPopVotes: C,
                                }),
                              ],
                            }
                          ),
                          'state-'.concat(a - Q)
                        );
                      if ('auto' === o) Q++;
                      else if ('manual' === o)
                        return i.jsx(
                          'div',
                          e(
                            { className: 'state-control '.concat(g) },
                            {
                              children: i.jsx(w, {
                                dataMode: o,
                                evs: l.evs,
                                isFromStorage: d,
                                name: l.name,
                                stateClickedFromMap: 'false',
                                stateCode: l.stateCode,
                                stateEvs: l.stateEvs,
                                stateWinnerData: [A],
                                toggleWinner: ll,
                                winner:
                                  null !== (t = l.winner) && void 0 !== t
                                    ? t
                                    : '0',
                              }),
                            }
                          ),
                          'state-'.concat(a)
                        );
                    })),
                  ],
                }
              )
            ),
          ],
        }
      )
    );
  },
  L = [],
  V = [];
!(function (l, e) {
  if (l && 'undefined' != typeof document) {
    var a,
      t = !0 === e.prepend ? 'prepend' : 'append',
      n = !0 === e.singleTag,
      o =
        'string' == typeof e.container
          ? document.querySelector(e.container)
          : document.getElementsByTagName('head')[0];
    if (n) {
      var r = L.indexOf(o);
      -1 === r && ((r = L.push(o) - 1), (V[r] = {})),
        (a = V[r] && V[r][t] ? V[r][t] : (V[r][t] = s()));
    } else a = s();
    65279 === l.charCodeAt(0) && (l = l.substring(1)),
      a.styleSheet
        ? (a.styleSheet.cssText += l)
        : a.appendChild(document.createTextNode(l));
  }
  function s() {
    var l = document.createElement('style');
    if ((l.setAttribute('type', 'text/css'), e.attributes))
      for (var a = Object.keys(e.attributes), n = 0; n < a.length; n++)
        l.setAttribute(a[n], e.attributes[a[n]]);
    var r = 'prepend' === t ? 'afterbegin' : 'beforeend';
    return o.insertAdjacentElement(r, l), l;
  }
})(
  '.electoral-college-root {\n  font-family: Helvetica;\n}\n.electoral-college-root.data-mode-auto .state-control .state {\n  cursor: default;\n}\n.electoral-college-root.data-mode-auto path:hover,\n.electoral-college-root.data-mode-auto circle:hover {\n  cursor: default;\n}\n\n.candidatesWrapper {\n  display: flex;\n  justify-content: space-around;\n  text-align: center;\n}\n.candidatesWrapper.sticky {\n  background-color: #fff;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n}\n.candidatesWrapper.sticky h2 {\n  font-size: 1.35em;\n  margin-block: 0.5em;\n}\n.candidatesWrapper.sticky .candidate {\n  height: 100%;\n  margin: 0;\n}\n.candidatesWrapper.sticky img {\n  display: none;\n}\n.candidatesWrapper.sticky .electoralVotes {\n  font-size: 25px;\n  height: 30px;\n}\n.candidatesWrapper.sticky .electoralVotesLabel {\n  margin-block: 0.5em;\n}\n\n.candidate {\n  margin: 10px;\n}\n.candidate img {\n  height: 100px;\n}\n\n.candidate-gop,\n.gop-votes {\n  background-color: rgba(255, 0, 0, 0.75);\n}\n\n.candidate-dem,\n.dem-votes {\n  background-color: rgba(0, 70, 255, 0.75);\n}\n\n.candidate-lib,\n.lib-votes {\n  background-color: rgba(255, 215, 0, 0.75);\n}\n\n.candidate-grn,\n.grn-votes {\n  background-color: rgba(0, 200, 0, 0.75);\n}\n\n.candidate-ind,\n.ind-votes {\n  background-color: #d3d3d3;\n}\n\n.electoralVotesWrapper {\n  font-size: 35px;\n  margin-top: 5px;\n}\n\n.electoralVotesLabel {\n  font-size: 16px;\n}\n\n.electoralVotes {\n  background-color: #ffffff;\n  border: 1px solid #000000;\n  display: flex;\n  height: 40px;\n  justify-content: space-around;\n}\n\n.electoralVotes#gop-wta,\n.electoralVotes#gop-prop {\n  color: rgba(255, 0, 0, 0.75);\n}\n\n.electoralVotes#dem-wta,\n.electoralVotes#dem-prop {\n  color: rgba(0, 70, 255, 0.75);\n}\n\n.electoralVotes#lib-wta,\n.electoralVotes#lib-prop {\n  color: rgba(255, 215, 0, 0.75);\n}\n\n.electoralVotes#grn-wta,\n.electoralVotes#grn-prop {\n  color: rgba(0, 200, 0, 0.75);\n}\n\n.electoralVotes#ind-wta,\n.electoralVotes#ind-prop {\n  color: #d3d3d3;\n}\n\n.votes-winner-line {\n  border-top: 15px solid #000000;\n  border-right: 15px solid transparent;\n  border-left: 15px solid transparent;\n  height: 0px;\n  width: 0px;\n  margin: 0 auto 1px;\n}\n\n.votes-parties {\n  border: 1px solid #777777;\n  height: 20px;\n}\n\n.votes-parties > span {\n  display: inline-block;\n  height: inherit;\n}\n\n.statesWrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  margin-top: 10px;\n}\n.statesWrapper button {\n  cursor: pointer;\n}\n\n.state-control {\n  flex: 0;\n  margin-top: 10px;\n}\n.state-control .state {\n  background-color: transparent;\n  border: 1px solid #000000;\n  border-radius: 3px;\n  cursor: pointer;\n  height: 30px;\n  margin: 0 auto;\n  width: 100px;\n}\n.state-control.small .state {\n  width: 70px;\n}\n.state-control.small .evs {\n  font-size: 20px;\n}\n.state-control.small .stateName {\n  font-size: 0.75em;\n  height: 25px;\n}\n.state-control.small .pvInput {\n  width: 85%;\n}\n.state-control.medium .pvInput {\n  width: 90%;\n}\n\n.stateWrapper {\n  margin: 5px;\n  text-align: center;\n}\n\n.wta-winner,\n.prop-winner {\n  background-color: none;\n  border: 1px solid #000000;\n  border-radius: 3px;\n}\n\n.state.gop,\n.wta-winner.gop,\n.prop-winner.gop {\n  background-color: rgba(255, 0, 0, 0.75);\n  border: 1px solid rgba(255, 0, 0, 0.75);\n}\n\n.state.dem,\n.wta-winner.dem,\n.prop-winner.dem {\n  background-color: rgba(0, 70, 255, 0.75);\n  border: 1px solid rgba(0, 70, 255, 0.75);\n}\n\n.state.lib,\n.wta-winner.lib,\n.prop-winner.lib {\n  background-color: rgba(255, 215, 0, 0.75);\n  border: 1px solid rgba(255, 215, 0, 0.75);\n}\n\n.state.grn,\n.wta-winner.grn,\n.wta-winner.grn {\n  background-color: rgba(0, 200, 0, 0.75);\n  border: 1px solid rgba(0, 200, 0, 0.75);\n}\n\n.state.ind,\n.wta-winner.ind,\n.prop-winner.ind {\n  background-color: #d3d3d3;\n  border: 1px solid #d3d3d3;\n}\n\n.evs {\n  font-size: 22px;\n  position: relative;\n  top: 10%;\n}\n\n.pvInputWrapper {\n  margin-bottom: 3px;\n}\n\n.pvInput {\n  border-radius: 3px;\n  border: 2px solid;\n}\n.pvInput[data-party=gop] {\n  border-color: rgba(255, 0, 0, 0.75);\n}\n.pvInput[data-party=dem] {\n  border-color: rgba(0, 70, 255, 0.75);\n}\n.pvInput[data-party=lib] {\n  border-color: rgba(255, 215, 0, 0.75);\n}\n.pvInput[data-party=grn] {\n  border-color: rgba(0, 200, 0, 0.75);\n}\n.pvInput[data-party=ind] {\n  border-color: #d3d3d3;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n#buttons .show {\n  display: inline-block;\n}\n\n.buttonWrapper {\n  display: inline-block;\n  margin: 10px 20px 0 0;\n}\n.buttonWrapper button {\n  border: 0;\n  cursor: pointer;\n  display: block;\n  font-family: Helvetica;\n  font-size: 30px;\n}\n\n#saveButton {\n  background-color: #00ff00;\n}\n\n#clearButton {\n  background-color: #ff0000;\n}\n\n#map-wrapper {\n  position: relative;\n}\n#map-wrapper button {\n  margin: 20px;\n  padding: 20px;\n}\n\n#us-map {\n  display: block;\n}\n#us-map.hide {\n  display: none;\n}\n#us-map.small {\n  height: 50%;\n  width: 50%;\n}\n#us-map.medium {\n  height: 75%;\n  width: 75%;\n}\n#us-map.large {\n  height: 100%;\n  width: 100%;\n}\n\npath:hover,\ncircle:hover {\n  stroke: #000 !important;\n  stroke-width: 2px;\n  stroke-linejoin: round;\n  fill: #fff;\n  cursor: pointer;\n}\n\n#path67 {\n  fill: none !important;\n  stroke: #a9a9a9 !important;\n  cursor: default;\n}\n\n#info-box {\n  background-color: #ffffff;\n  border: 5px solid rgba(0, 0, 0, 0.75);\n  border-radius: 5px;\n  display: none;\n  font-family: arial;\n  padding: 5px 20px;\n  position: fixed;\n  right: 0;\n  top: 0;\n  width: 20%;\n  z-index: 1000;\n}\n#info-box.show {\n  display: block;\n}\n#info-box.gop {\n  border-color: rgba(255, 0, 0, 0.75);\n}\n#info-box.dem {\n  border-color: rgba(0, 70, 255, 0.75);\n}\n#info-box.lib {\n  border-color: rgba(255, 215, 0, 0.75);\n}\n#info-box.grn {\n  border-color: rgba(0, 200, 0, 0.75);\n}\n#info-box.ind {\n  border-color: #d3d3d3;\n}\n\nsvg path,\ncircle,\npath:hover,\ncircle:hover {\n  fill: #fff;\n}\n\nsvg .gop,\npath.gop:hover,\ncircle.gop:hover {\n  fill: rgba(255, 0, 0, 0.75);\n}\n\nsvg .dem,\npath.dem:hover,\ncircle.dem:hover {\n  fill: rgba(0, 70, 255, 0.75);\n}\n\nsvg .lib,\npath.lib:hover,\ncircle.lib:hover {\n  fill: rgba(255, 215, 0, 0.75);\n}\n\nsvg .grn,\npath.grn:hover,\ncircle.grn:hover {\n  fill: rgba(0, 200, 0, 0.75);\n}\n\nsvg .ind,\npath.ind:hover,\ncircle.ind:hover {\n  fill: #d3d3d3;\n}',
  {}
);
module.exports = function (t) {
  var n = t.candidateImageSources,
    o = t.candidatesData,
    r = t.dataMode,
    s = void 0 === r ? 'manual' : r,
    d = t.enableStickyEVCounter,
    u = void 0 === d || d,
    p = t.handlePropError,
    f = t.mapSize,
    v = void 0 === f ? 'large' : f,
    m = t.proportionalReawardMode,
    h = void 0 === m ? 'stateWinner' : m,
    g = t.stateControlSize,
    y = void 0 === g ? 'large' : g,
    x = t.voteTotals,
    E = function () {
      return i.jsx(i.Fragment, {
        children:
          'This application is currently unable to display the Electoral College widget.',
      });
    };
  if (!o)
    return p && p('candidatesData', 'candidatesData prop is required'), E();
  if ('auto' === s && 51 !== (null == x ? void 0 : x.length))
    return (
      p &&
        p(
          'voteTotals',
          'voteTotals prop is required in auto mode and must contain data for all 50 states plus Washington, D.C. Do not include data for the Congressional Districts of Maine and Nebraska'
        ),
      E()
    );
  var N = l.useState(!1),
    S = N[0],
    w = N[1],
    L = l.useState(
      'manual' === s &&
        Boolean(
          null === localStorage || void 0 === localStorage
            ? void 0
            : localStorage.getItem('ElectoralCollegeStatus')
        )
    ),
    V = L[0],
    T = L[1],
    I = V
      ? JSON.parse(
          null === localStorage || void 0 === localStorage
            ? void 0
            : localStorage.getItem('WinnerTakeAllTotals')
        )
      : [0, 0, 0, 0, 0],
    A = l.useState(
      V
        ? JSON.parse(
            null === localStorage || void 0 === localStorage
              ? void 0
              : localStorage.getItem('PopularVoteTotals')
          )
        : [0, 0, 0, 0, 0]
    ),
    D = A[0],
    O = A[1],
    z = l.useState(I[0]),
    W = z[0],
    P = z[1],
    R = l.useState(I[1]),
    _ = R[0],
    F = R[1],
    H = l.useState(I[2]),
    K = H[0],
    Y = H[1],
    $ = l.useState(I[3]),
    J = $[0],
    U = $[1],
    B = l.useState(I[4]),
    G = B[0],
    q = B[1],
    X = l.useState([W, _, K, J, G]),
    Z = X[0],
    Q = X[1],
    ll = l.useState(
      Z.map(function (l) {
        return c(l);
      })
    ),
    el = ll[0],
    al = ll[1],
    tl = l.useState(
      D.map(function (l) {
        return c(l);
      })
    ),
    nl = tl[0],
    ol = tl[1],
    rl = l.useState(!1),
    sl = rl[0],
    il = rl[1],
    cl = l.useState(!1),
    dl = cl[0],
    ul = cl[1],
    pl = l.useState('false'),
    fl = pl[0],
    vl = pl[1],
    ml = l.useState(
      V ? JSON.parse(localStorage.getItem('ElectoralCollegeStatus')) : C
    ),
    hl = ml[0],
    gl = ml[1],
    yl = l.useState(
      V
        ? JSON.parse(localStorage.getItem('PopularVoteStatus'))
        : 'auto' === s
          ? x
          : []
    ),
    Ml = yl[0],
    bl = yl[1],
    kl = l.useState(!1),
    xl = kl[0],
    El = kl[1],
    Nl = [0, 0, 0, 0, 0],
    Cl = [0, 0, 0, 0, 0],
    Sl = a([], hl, !0);
  l.useEffect(function () {
    if (
      (u &&
        (window.onscroll = function () {
          return (function () {
            var l = document.querySelector('.candidatesWrapper');
            if (l instanceof HTMLElement) {
              var e = l.offsetTop;
              window.pageYOffset > e
                ? l.classList.add('sticky')
                : l.classList.remove('sticky');
            }
          })();
        }),
      'auto' === s && !xl)
    ) {
      El(!0);
      var l = c(Cl[0]),
        e = c(Cl[1]),
        a = c(Cl[2]),
        t = c(Cl[3]),
        n = c(Cl[4]),
        o = c(Nl[0]),
        r = c(Nl[1]),
        i = c(Nl[2]),
        d = c(Nl[3]),
        p = c(Nl[4]);
      O(Nl),
        ol([o, r, i, d, p]),
        P(Cl[0]),
        F(Cl[1]),
        Y(Cl[2]),
        U(Cl[3]),
        q(Cl[4]),
        Q(Cl),
        al([l, e, a, t, n]),
        gl(Sl);
    }
  }),
    l.useEffect(
      function () {
        ul(dl);
      },
      [dl]
    ),
    l.useEffect(
      function () {
        il(sl);
      },
      [sl]
    ),
    l.useEffect(
      function () {
        x && bl(x);
      },
      [bl, x]
    );
  var wl = function (l) {
      var e = c(l[0]),
        a = c(l[1]),
        t = c(l[2]),
        n = c(l[3]),
        o = c(l[4]);
      O(l), ol([e, a, t, n, o]);
    },
    jl = function (l) {
      var e = c(l[0]),
        a = c(l[1]),
        t = c(l[2]),
        n = c(l[3]),
        o = c(l[4]);
      P(l[0]), F(l[1]), Y(l[2]), U(l[3]), q(l[4]), Q(l), al([e, a, t, n, o]);
    },
    Ll = function (l, e) {
      p && p(l, e), w(!0);
    };
  return S
    ? E()
    : i.jsxs(
        'div',
        e(
          { className: 'electoral-college-root data-mode-'.concat(s) },
          {
            children: [
              i.jsx(M, {
                candidateImageSources: n,
                candidates: o,
                evPct: el,
                pvPct: nl,
                popVoteTotals: D,
                renderPropErrorMessage: Ll,
                winnerTakeAllTotals: Z,
              }),
              i.jsx(j, {
                currentEVTotals: Z,
                currentPVTotals: D,
                dataMode: s,
                handlePropVotes:
                  'manual' === s
                    ? wl
                    : function (l) {
                        (Nl[0] += l[0]),
                          (Nl[1] += l[1]),
                          (Nl[2] += l[2]),
                          (Nl[3] += l[3]),
                          (Nl[4] += l[4]);
                      },
                handleStateWinner:
                  'manual' === s
                    ? jl
                    : function (l, e) {
                        (Cl[0] += l[0]),
                          (Cl[1] += l[1]),
                          (Cl[2] += l[2]),
                          (Cl[3] += l[3]),
                          (Cl[4] += l[4]);
                        var a = null == e ? void 0 : e.stateId,
                          t = Sl.findIndex(function (l) {
                            return l.stateCode === a;
                          }),
                          n = Sl.find(function (l) {
                            return l.stateCode === a;
                          });
                        (n.winner = null == e ? void 0 : e.newWinningParty),
                          Sl.splice(t, 1, n);
                      },
                hasClearedSavedData: fl,
                isFromStorage: V,
                mapSize: v,
                popVotesData: Ml,
                proportionalReawardMode: h,
                renderPropErrorMessage: Ll,
                stateControlSize: y,
                statesData: hl,
              }),
              'undefined' != typeof Storage &&
                'manual' === s &&
                i.jsxs(
                  'div',
                  e(
                    { id: 'buttons' },
                    {
                      children: [
                        i.jsx(k, {
                          currentEVTotals: Z,
                          currentPVTotals: D,
                          handleSave: function () {
                            gl(
                              JSON.parse(
                                localStorage.getItem('ElectoralCollegeStatus')
                              )
                            ),
                              T(!0),
                              'manual' === s &&
                                (ul(!1),
                                il(!0),
                                setTimeout(function () {
                                  return il(!1);
                                }, 3e3));
                          },
                        }),
                        V &&
                          i.jsx(b, {
                            handleClear: function () {
                              localStorage.removeItem('ElectoralCollegeStatus'),
                                localStorage.removeItem('PopularVoteStatus'),
                                localStorage.removeItem('PopularVoteTotals'),
                                localStorage.removeItem('WinnerTakeAllTotals'),
                                jl([0, 0, 0, 0, 0]),
                                wl([0, 0, 0, 0, 0]),
                                gl(C),
                                bl([]),
                                O([0, 0, 0, 0, 0]),
                                vl('true'),
                                T(!1),
                                il(!1),
                                ul(!0),
                                setTimeout(function () {
                                  ul(!1), vl('false');
                                }, 3e3);
                            },
                          }),
                        i.jsx(
                          'p',
                          e(
                            { className: ''.concat(sl ? 'show' : 'hide') },
                            { children: 'Saved!' }
                          )
                        ),
                        i.jsx(
                          'p',
                          e(
                            { className: ''.concat(dl ? 'show' : 'hide') },
                            { children: 'Cleared!' }
                          )
                        ),
                      ],
                    }
                  )
                ),
            ],
          }
        )
      );
};
