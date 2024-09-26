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
'function' == typeof SuppressedError && SuppressedError;
var a,
  t = { exports: {} },
  n = {};
var o,
  r = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'production' === process.env.NODE_ENV
  ? (t.exports = (function () {
      if (a) return n;
      a = 1;
      var e = l,
        t = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        r = Object.prototype.hasOwnProperty,
        s =
          e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        i = { key: !0, ref: !0, __self: !0, __source: !0 };
      function c(l, e, a) {
        var n,
          o = {},
          c = null,
          d = null;
        for (n in (void 0 !== a && (c = '' + a),
        void 0 !== e.key && (c = '' + e.key),
        void 0 !== e.ref && (d = e.ref),
        e))
          r.call(e, n) && !i.hasOwnProperty(n) && (o[n] = e[n]);
        if (l && l.defaultProps)
          for (n in (e = l.defaultProps)) void 0 === o[n] && (o[n] = e[n]);
        return {
          $$typeof: t,
          type: l,
          key: c,
          ref: d,
          props: o,
          _owner: s.current,
        };
      }
      return (n.Fragment = o), (n.jsx = c), (n.jsxs = c), n;
    })())
  : (t.exports =
      (o ||
        ((o = 1),
        'production' !== process.env.NODE_ENV &&
          (function () {
            var e = l,
              a = Symbol.for('react.element'),
              t = Symbol.for('react.portal'),
              n = Symbol.for('react.fragment'),
              o = Symbol.for('react.strict_mode'),
              s = Symbol.for('react.profiler'),
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
            function b(l) {
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
            var k,
              M = !1,
              x = !1,
              N = !1,
              C = !1,
              E = !1;
            function S(l) {
              return l.displayName || 'Context';
            }
            function w(l) {
              if (null == l) return null;
              if (
                ('number' == typeof l.tag &&
                  b(
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
                case s:
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
                      r = a._payload,
                      m = a._init;
                    try {
                      return w(m(r));
                    } catch (l) {
                      return null;
                    }
                }
              return null;
            }
            k = Symbol.for('react.module.reference');
            var j,
              L,
              V,
              T,
              A,
              I,
              z,
              O = Object.assign,
              D = 0;
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
            function $(l, e) {
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
                  if (0 === D) {
                    (j = console.log),
                      (L = console.info),
                      (V = console.warn),
                      (T = console.error),
                      (A = console.group),
                      (I = console.groupCollapsed),
                      (z = console.groupEnd);
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
                  D++;
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
                    if (0 == --D) {
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
                        group: O({}, l, { value: A }),
                        groupCollapsed: O({}, l, { value: I }),
                        groupEnd: O({}, l, { value: z }),
                      });
                    }
                    D < 0 &&
                      b(
                        'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
                      );
                  })(),
                  (Error.prepareStackTrace = o);
              }
              var p = l ? l.displayName || l.name : '',
                f = p ? _(p) : '';
              return 'function' == typeof l && F.set(l, f), f;
            }
            function Y(l, e, a) {
              if (null == l) return '';
              if ('function' == typeof l)
                return $(l, !(!(t = l.prototype) || !t.isReactComponent));
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
                    return $(l.render, !1);
                  case f:
                    return Y(l.type, e, a);
                  case v:
                    var n = l,
                      o = n._payload,
                      r = n._init;
                    try {
                      return Y(r(o), e, a);
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
                  a = Y(l.type, l._source, e ? e.type : null);
                B.setExtraStackFrame(a);
              } else B.setExtraStackFrame(null);
            }
            var X = Array.isArray;
            function q(l) {
              return X(l);
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
                  b(
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
                      (b(
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
                        b(
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
                          b(
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
                  a = Y(l.type, l._source, e ? e.type : null);
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
                    b(
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
                if (q(l))
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
                          b(
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
                            b('Failed %s type: %s', a, s.message),
                            G(null));
                      }
                  })(e, l.props, 'prop', t, l);
                } else
                  void 0 === a.PropTypes ||
                    sl ||
                    ((sl = !0),
                    b(
                      'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                      w(a) || 'Unknown'
                    ));
                'function' != typeof a.getDefaultProps ||
                  a.getDefaultProps.isReactClassApproved ||
                  b(
                    'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
                  );
              }
            }
            var gl = {};
            function yl(l, e, t, r, h, g) {
              var y = (function (l) {
                return (
                  'string' == typeof l ||
                  'function' == typeof l ||
                  !!(
                    l === n ||
                    l === s ||
                    E ||
                    l === o ||
                    l === u ||
                    l === p ||
                    C ||
                    l === m ||
                    M ||
                    x ||
                    N
                  ) ||
                  ('object' == typeof l &&
                    null !== l &&
                    (l.$$typeof === v ||
                      l.$$typeof === f ||
                      l.$$typeof === i ||
                      l.$$typeof === c ||
                      l.$$typeof === d ||
                      l.$$typeof === k ||
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
                    : q(l)
                      ? (S = 'array')
                      : void 0 !== l && l.$$typeof === a
                        ? ((S = '<' + (w(l.type) || 'Unknown') + ' />'),
                          (j =
                            ' Did you accidentally export a JSX literal instead of a component?'))
                        : (S = typeof l),
                  b(
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
                  if (r)
                    if (q(V)) {
                      for (var T = 0; T < V.length; T++) ml(V[T], l);
                      Object.freeze && Object.freeze(V);
                    } else
                      b(
                        'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
                      );
                  else ml(V, l);
              }
              if (J.call(e, 'key')) {
                var A = w(l),
                  I = Object.keys(e).filter(function (l) {
                    return 'key' !== l;
                  }),
                  z =
                    I.length > 0
                      ? '{key: someKey, ' + I.join(': ..., ') + ': ...}'
                      : '{key: someKey}';
                gl[A + z] ||
                  (b(
                    'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
                    z,
                    A,
                    I.length > 0 ? '{' + I.join(': ..., ') + ': ...}' : '{}',
                    A
                  ),
                  (gl[A + z] = !0));
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
                            b(
                              'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                              t
                            ),
                            dl(null);
                          break;
                        }
                      }
                      null !== l.ref &&
                        (dl(l),
                        b(
                          'Invalid attribute `ref` supplied to `React.Fragment`.'
                        ),
                        dl(null));
                    })(L)
                  : hl(L),
                L
              );
            }
            var bl = function (l, e, a) {
                return yl(l, e, a, !1);
              },
              kl = function (l, e, a) {
                return yl(l, e, a, !0);
              };
            (r.Fragment = n), (r.jsx = bl), (r.jsxs = kl);
          })()),
      r));
var s = t.exports,
  i = function (l) {
    return (l / 538) * 100;
  },
  c = function (l) {
    return l.findIndex(function (l) {
      return l > 50;
    });
  },
  d = function (l) {
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
  u = function (l) {
    var e = {};
    return (
      l.map(function (l) {
        return (
          -1 === l.name.indexOf('-CD') && (e[l.stateCode] = d(l.winner)), e
        );
      }),
      e
    );
  },
  p = function (l) {
    void 0 === l && (l = '');
    var e = '';
    switch (l) {
      case '1':
        e = 'gop';
        break;
      case '2':
        e = 'dem';
        break;
      case '3':
        e = 'lib';
        break;
      case '4':
        e = 'grn';
        break;
      case '5':
        e = 'ind';
        break;
      default:
        e = '';
    }
    return e;
  },
  f = function (l) {
    return s.jsxs(
      'div',
      e(
        { className: 'electoralVotesWrapper' },
        {
          children: [
            s.jsx(
              'p',
              e(
                { className: 'electoralVotesLabel' },
                { children: 'Winner-Take-All:' }
              )
            ),
            s.jsx(
              'span',
              e(
                { className: 'electoralVotes', id: ''.concat(l.party, '-wta') },
                { children: l.winnerTakeAllTotal }
              )
            ),
            s.jsx(
              'p',
              e(
                { className: 'electoralVotesLabel' },
                { children: 'Proportional:' }
              )
            ),
            s.jsx(
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
  v = function (l) {
    var a = l.imageSrc,
      t = l.name,
      n = l.party,
      o = l.popularVoteTotals,
      r = l.winnerTakeAllTotal;
    return s.jsxs(
      'div',
      e(
        { className: 'candidate candidate-'.concat(n) },
        {
          children: [
            s.jsx('h2', { children: l.name }),
            a && s.jsx('img', { src: a, alt: t }),
            s.jsx(f, { party: n, popularVoteTotals: o, winnerTakeAllTotal: r }),
          ],
        }
      )
    );
  },
  m = function (l) {
    var a = l.candidateImageSources,
      t = l.candidatesData,
      n = l.popularVoteTotals,
      o = l.winnerTakeAllTotals,
      r = t.map(function (l, e) {
        return s.jsx(
          v,
          {
            imageSrc: null == a ? void 0 : a[l.party],
            name: l.name,
            party: l.party,
            popularVoteTotals: n[e],
            winnerTakeAllTotal: o[e],
          },
          'candidate-'.concat(e)
        );
      });
    return s.jsx('div', e({ className: 'candidatesWrapper' }, { children: r }));
  },
  h = function (a) {
    var t = a.candidateImageSources,
      n = a.candidates,
      o = a.evPct,
      r = a.popVoteTotals,
      i = a.pvPct,
      u = a.winnerTakeAllTotals,
      f = l.useState(c(u)),
      v = f[0],
      h = f[1],
      g = l.useState(c(r)),
      y = g[0],
      b = g[1],
      k = l.useState(d(String(v + 1))),
      M = k[0],
      x = k[1],
      N = l.useState(d(String(y + 1))),
      C = N[0],
      E = N[1],
      S = l.useState(p(String(v + 1))),
      w = S[0],
      j = S[1],
      L = l.useState(p(String(y + 1))),
      V = L[0],
      T = L[1];
    l.useEffect(
      function () {
        b(c(i));
      },
      [i]
    ),
      l.useEffect(
        function () {
          h(c(o));
        },
        [o]
      ),
      l.useEffect(
        function () {
          var l = String(y + 1),
            e = d(l);
          E(e), T(p(l));
        },
        [y]
      ),
      l.useEffect(
        function () {
          var l = String(v + 1),
            e = d(l);
          x(e), j(p(l));
        },
        [v]
      );
    var A = function (l) {
      return (
        100 -
        l.reduce(function (l, e) {
          return l + e;
        }, 0)
      );
    };
    return s.jsxs('div', {
      children: [
        s.jsx('h1', { children: 'Electoral College 2024' }),
        s.jsxs(
          'div',
          e(
            { className: 'votes-counter', id: 'ev-votes-counter' },
            {
              children: [
                s.jsx('h3', {
                  children: 'Winner-Take-All Electoral Votes Counter',
                }),
                s.jsx(
                  'h3',
                  e(
                    {
                      className: 'wta-winner '
                        .concat(w, ' ')
                        .concat(v > -1 ? 'show' : 'hide'),
                    },
                    { children: 'Winner: '.concat(M) }
                  )
                ),
                s.jsxs('div', {
                  children: [
                    s.jsx('div', { className: 'votes-winner-line' }),
                    s.jsxs(
                      'div',
                      e(
                        { className: 'votes-parties' },
                        {
                          children: [
                            s.jsx('span', {
                              className: 'gop-votes',
                              style: { width: o[0] + '%' },
                            }),
                            s.jsx('span', {
                              className: 'lib-votes',
                              style: { width: o[2] + '%' },
                            }),
                            s.jsx('span', {
                              className: 'unawarded-votes',
                              style: { width: A(o) + '%' },
                            }),
                            s.jsx('span', {
                              className: 'grn-votes',
                              style: { width: o[3] + '%' },
                            }),
                            s.jsx('span', {
                              className: 'ind-votes',
                              style: { width: o[4] + '%' },
                            }),
                            s.jsx('span', {
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
        s.jsxs(
          'div',
          e(
            { className: 'votes-counter', id: 'pop-votes-counter' },
            {
              children: [
                s.jsx('h3', {
                  children: 'Proportional Electoral Votes Counter',
                }),
                s.jsx(
                  'h3',
                  e(
                    {
                      className: 'prop-winner '
                        .concat(V, ' ')
                        .concat(y > -1 ? 'show' : 'hide'),
                    },
                    { children: 'Winner: '.concat(C) }
                  )
                ),
                s.jsxs('div', {
                  children: [
                    s.jsx('div', { className: 'votes-winner-line' }),
                    s.jsxs(
                      'div',
                      e(
                        { className: 'votes-parties' },
                        {
                          children: [
                            s.jsx('span', {
                              className: 'gop-votes',
                              style: { width: i[0] + '%' },
                            }),
                            s.jsx('span', {
                              className: 'lib-votes',
                              style: { width: i[2] + '%' },
                            }),
                            s.jsx('span', {
                              className: 'unawarded-votes',
                              style: { width: A(i) + '%' },
                            }),
                            s.jsx('span', {
                              className: 'grn-votes',
                              style: { width: i[3] + '%' },
                            }),
                            s.jsx('span', {
                              className: 'ind-votes',
                              style: { width: i[4] + '%' },
                            }),
                            s.jsx('span', {
                              className: 'dem-votes',
                              style: { width: i[1] + '%' },
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
        s.jsx(m, {
          candidateImageSources: t,
          candidatesData: n,
          popularVoteTotals: r,
          winnerTakeAllTotals: u,
        }),
      ],
    });
  },
  g = function (l) {
    var a = l.handleClear;
    return s.jsx(
      'div',
      e(
        { className: 'buttonWrapper' },
        {
          children: s.jsx(
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
  y = function (l) {
    var a = l.currentEVTotals,
      t = l.currentPVTotals,
      n = l.handleSave;
    return s.jsx(
      'div',
      e(
        { className: 'buttonWrapper' },
        {
          children: s.jsx(
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
  b = function (a) {
    var t = a.handleMapStateClick,
      n = a.hasClearedSavedData,
      o = a.mapSize,
      r = a.newStateData,
      i = a.stateWinnerNames,
      c = a.statesData,
      d = 'Hide Map',
      u = l.useState(d),
      f = u[0],
      v = u[1],
      m = l.useState(!0),
      h = m[0],
      g = m[1],
      y = l.useState(''),
      b = y[0],
      k = y[1],
      M = l.useState(''),
      x = M[0],
      N = M[1],
      C = l.useState(i),
      E = C[0],
      S = C[1],
      w = l.useState({}),
      j = w[0],
      L = w[1],
      V = h ? '' : 'hide';
    l.useEffect(
      function () {
        n && L({});
      },
      [n]
    ),
      l.useEffect(
        function () {
          var l,
            a = null == r ? void 0 : r.stateId,
            t = p(null == r ? void 0 : r.newWinningParty);
          if (a) {
            var n = (((l = {})[a] = t), l);
            L(function (l) {
              return e(e({}, l), n);
            });
          }
        },
        [r]
      ),
      l.useEffect(
        function () {
          S(i),
            N(function (l) {
              var e,
                a = i,
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
        [b, i]
      );
    var T,
      A,
      I,
      z,
      O,
      D = function (l) {
        var e = l.target.id;
        t(''.concat(e, '-').concat(l.currentTarget.classList));
      },
      W = function (l) {
        var e = l.target.id;
        k(e), N(l.currentTarget.dataset.info);
      },
      P = function () {
        N('');
      },
      R = function (l) {
        var e = c.find(function (e) {
          return e.stateCode === l;
        });
        return (
          (-1 === Object.keys(j).indexOf(l) &&
            p(null == e ? void 0 : e.winner)) ||
          ''
        );
      };
    return s.jsxs(
      'div',
      e(
        { id: 'map-wrapper' },
        {
          children: [
            s.jsx(
              'button',
              e(
                {
                  type: 'button',
                  onClick: function () {
                    var l = d;
                    h && (l = 'Show Map'), v(l), g(!h);
                  },
                },
                { children: f }
              )
            ),
            s.jsx(
              'div',
              e(
                {
                  id: 'info-box',
                  className: x
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
                          return p(e);
                        })(x)
                      )
                    : '',
                },
                {
                  children:
                    ((T = x),
                    (A = T.split('--')),
                    (I = A[0]),
                    (z = A[1]),
                    (O = A[2] || ''),
                    s.jsxs('div', {
                      children: [
                        s.jsx(
                          'p',
                          e(
                            { className: 'map-info-statename' },
                            { children: I }
                          )
                        ),
                        s.jsx(
                          'p',
                          e({ className: 'map-info-stateevs' }, { children: z })
                        ),
                        s.jsx(
                          'p',
                          e(
                            { className: 'map-infor-statewinner' },
                            { children: 'Winner: '.concat(O) }
                          )
                        ),
                      ],
                    })),
                }
              )
            ),
            s.jsxs(
              'svg',
              e(
                {
                  className: ''.concat(o, ' ').concat(V),
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
                    s.jsxs(
                      'g',
                      e(
                        { id: 'g5' },
                        {
                          children: [
                            s.jsx('path', {
                              id: 'HI',
                              className: j.HI ? j.HI : R('HI'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Hawaii--4 EVs--'.concat(E.HI),
                              d: 'M407.1,619.3l1.9-3.6l2.3-0.3l0.3,0.8l-2.1,3.1H407.1z M417.3,615.6l6.1,2.6l2.1-0.3l1.6-3.9   l-0.6-3.4l-4.2-0.5l-4,1.8L417.3,615.6z M448,625.6l3.7,5.5l2.4-0.3l1.1-0.5l1.5,1.3l3.7-0.2l1-1.5l-2.9-1.8l-1.9-3.7l-2.1-3.6   l-5.8,2.9L448,625.6z M468.2,634.5l1.3-1.9l4.7,1l0.6-0.5l6.1,0.6l-0.3,1.3l-2.6,1.5l-4.4-0.3L468.2,634.5z M473.5,639.7l1.9,3.9   l3.1-1.1l0.3-1.6l-1.6-2.1l-3.7-0.3V639.7z M480.5,638.5l2.3-2.9l4.7,2.4l4.4,1.1l4.4,2.7v1.9l-3.6,1.8l-4.8,1l-2.4-1.5   L480.5,638.5z M497.1,654.1l1.6-1.3l3.4,1.6l7.6,3.6l3.4,2.1l1.6,2.4l1.9,4.4l4,2.6l-0.3,1.3l-3.9,3.2l-4.2,1.5l-1.5-0.6l-3.1,1.8   l-2.4,3.2l-2.3,2.9l-1.8-0.2l-3.6-2.6l-0.3-4.5l0.6-2.4l-1.6-5.7l-2.1-1.8l-0.2-2.6l2.3-1l2.1-3.1l0.5-1l-1.6-1.8L497.1,654.1z',
                            }),
                            s.jsx('path', {
                              id: 'AK',
                              className: j.AK ? j.AK : R('AK'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Alaska--3 EVs--'.concat(E.AK),
                              d: 'M332.1,553.7l-0.3,85.4l1.6,1l3.1,0.2l1.5-1.1h2.6l0.2,2.9l7,6.8l0.5,2.6l3.4-1.9l0.6-0.2l0.3-3.1   l1.5-1.6l1.1-0.2l1.9-1.5l3.1,2.1l0.6,2.9l1.9,1.1l1.1,2.4l3.9,1.8l3.4,6l2.7,3.9l2.3,2.7l1.5,3.7l5,1.8l5.2,2.1l1,4.4l0.5,3.1   l-1,3.4l-1.8,2.3l-1.6-0.8l-1.5-3.1l-2.7-1.5l-1.8-1.1l-0.8,0.8l1.5,2.7l0.2,3.7l-1.1,0.5l-1.9-1.9l-2.1-1.3l0.5,1.6l1.3,1.8   l-0.8,0.8c0,0-0.8-0.3-1.3-1c-0.5-0.6-2.1-3.4-2.1-3.4l-1-2.3c0,0-0.3,1.3-1,1c-0.6-0.3-1.3-1.5-1.3-1.5l1.8-1.9l-1.5-1.5v-5h-0.8   l-0.8,3.4l-1.1,0.5l-1-3.7l-0.6-3.7l-0.8-0.5l0.3,5.7v1.1l-1.5-1.3l-3.6-6l-2.1-0.5l-0.6-3.7l-1.6-2.9l-1.6-1.1v-2.3l2.1-1.3   l-0.5-0.3l-2.6,0.6l-3.4-2.4l-2.6-2.9l-4.8-2.6l-4-2.6l1.3-3.2v-1.6l-1.8,1.6l-2.9,1.1l-3.7-1.1l-5.7-2.4h-5.5l-0.6,0.5l-6.5-3.9   l-2.1-0.3l-2.7-5.8l-3.6,0.3l-3.6,1.5l0.5,4.5l1.1-2.9l1,0.3l-1.5,4.4l3.2-2.7l0.6,1.6l-3.9,4.4l-1.3-0.3l-0.5-1.9l-1.3-0.8   l-1.3,1.1l-2.7-1.8l-3.1,2.1l-1.8,2.1l-3.4,2.1l-4.7-0.2l-0.5-2.1l3.7-0.6v-1.3l-2.3-0.6l1-2.4l2.3-3.9v-1.8l0.2-0.8l4.4-2.3l1,1.3   h2.7l-1.3-2.6l-3.7-0.3l-5,2.7l-2.4,3.4l-1.8,2.6l-1.1,2.3l-4.2,1.5l-3.1,2.6l-0.3,1.6l2.3,1l0.8,2.1l-2.7,3.2l-6.5,4.2l-7.8,4.2   l-2.1,1.1l-5.3,1.1l-5.3,2.3l1.8,1.3l-1.5,1.5l-0.5,1.1l-2.7-1l-3.2,0.2l-0.8,2.3h-1l0.3-2.4l-3.6,1.3l-2.9,1l-3.4-1.3l-2.9,1.9   h-3.2l-2.1,1.3l-1.6,0.8l-2.1-0.3l-2.6-1.1l-2.3,0.6l-1,1l-1.6-1.1v-1.9l3.1-1.3l6.3,0.6l4.4-1.6l2.1-2.1l2.9-0.6l1.8-0.8l2.7,0.2   l1.6,1.3l1-0.3l2.3-2.7l3.1-1l3.4-0.6l1.3-0.3l0.6,0.5h0.8l1.3-3.7l4-1.5l1.9-3.7l2.3-4.5l1.6-1.5l0.3-2.6l-1.6,1.3l-3.4,0.6   l-0.6-2.4l-1.3-0.3l-1,1l-0.2,2.9l-1.5-0.2l-1.5-5.8l-1.3,1.3l-1.1-0.5l-0.3-1.9l-4,0.2l-2.1,1.1l-2.6-0.3l1.5-1.5l0.5-2.6   l-0.6-1.9l1.5-1l1.3-0.2l-0.6-1.8v-4.4l-1-1l-0.8,1.5h-6.1l-1.5-1.3l-0.6-3.9l-2.1-3.6v-1l2.1-0.8l0.2-2.1l1.1-1.1l-0.8-0.5   l-1.3,0.5l-1.1-2.7l1-5l4.5-3.2l2.6-1.6l1.9-3.7l2.7-1.3l2.6,1.1l0.3,2.4l2.4-0.3l3.2-2.4l1.6,0.6l1,0.6h1.6l2.3-1.3l0.8-4.4   c0,0,0.3-2.9,1-3.4c0.6-0.5,1-1,1-1l-1.1-1.9l-2.6,0.8l-3.2,0.8l-1.9-0.5l-3.6-1.8l-5-0.2l-3.6-3.7l0.5-3.9l0.6-2.4l-2.1-1.8   l-1.9-3.7l0.5-0.8l6.8-0.5h2.1l1,1h0.6l-0.2-1.6l3.9-0.6l2.6,0.3l1.5,1.1l-1.5,2.1l-0.5,1.5l2.7,1.6l5,1.8l1.8-1l-2.3-4.4l-1-3.2   l1-0.8l-3.4-1.9l-0.5-1.1l0.5-1.6l-0.8-3.9l-2.9-4.7l-2.4-4.2l2.9-1.9h3.2l1.8,0.6l4.2-0.2l3.7-3.6l1.1-3.1l3.7-2.4l1.6,1l2.7-0.6   l3.7-2.1l1.1-0.2l1,0.8l4.5-0.2l2.7-3.1h1.1l3.6,2.4l1.9,2.1l-0.5,1.1l0.6,1.1l1.6-1.6l3.9,0.3l0.3,3.7l1.9,1.5l7.1,0.6l6.3,4.2   l1.5-1l5.2,2.6l2.1-0.6l1.9-0.8l4.8,1.9L332.1,553.7z M217,582.6l2.1,5.3l-0.2,1l-2.9-0.3l-1.8-4l-1.8-1.5H210l-0.2-2.6l1.8-2.4   l1.1,2.4l1.5,1.5L217,582.6z M214.4,616.1l3.7,0.8l3.7,1l0.8,1l-1.6,3.7l-3.1-0.2l-3.4-3.6L214.4,616.1z M193.7,602l1.1,2.6   l1.1,1.6l-1.1,0.8l-2.1-3.1V602H193.7z M180,675.1l3.4-2.3l3.4-1l2.6,0.3l0.5,1.6l1.9,0.5l1.9-1.9l-0.3-1.6l2.7-0.6l2.9,2.6   l-1.1,1.8l-4.4,1.1l-2.7-0.5l-3.7-1.1l-4.4,1.5l-1.6,0.3L180,675.1z M228.9,670.6l1.6,1.9l2.1-1.6l-1.5-1.3L228.9,670.6z    M231.8,673.6l1.1-2.3l2.1,0.3l-0.8,1.9H231.8z M255.4,671.7l1.5,1.8l1-1.1l-0.8-1.9L255.4,671.7z M264.2,659.2l1.1,5.8l2.9,0.8   l5-2.9l4.4-2.6l-1.6-2.4l0.5-2.4l-2.1,1.3l-2.9-0.8l1.6-1.1l1.9,0.8l3.9-1.8l0.5-1.5l-2.4-0.8l0.8-1.9l-2.7,1.9l-4.7,3.6l-4.8,2.9   L264.2,659.2z M306.5,639.4l2.4-1.5l-1-1.8l-1.8,1L306.5,639.4z',
                            }),
                            s.jsx('path', {
                              id: 'FL',
                              className: j.FL ? j.FL : R('FL'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Florida--30 EVs--'.concat(E.FL),
                              d: 'M929.4,545.5l2.3,7.3l3.7,9.7l5.3,9.4l3.7,6.3l4.8,5.5l4,3.7l1.6,2.9l-1.1,1.3L953,593l2.9,7.4   l2.9,2.9l2.6,5.3l3.6,5.8l4.5,8.2l1.3,7.6l0.5,12l0.6,1.8l-0.3,3.4l-2.4,1.3l0.3,1.9l-0.6,1.9l0.3,2.4l0.5,1.9l-2.7,3.2l-3.1,1.5   l-3.9,0.2l-1.5,1.6l-2.4,1l-1.3-0.5l-1.1-1l-0.3-2.9l-0.8-3.4l-3.4-5.2l-3.6-2.3l-3.9-0.3l-0.8,1.3l-3.1-4.4l-0.6-3.6l-2.6-4   l-1.8-1.1l-1.6,2.1l-1.8-0.3l-2.1-5l-2.9-3.9l-2.9-5.3l-2.6-3.1l-3.6-3.7l2.1-2.4l3.2-5.5l-0.2-1.6l-4.5-1l-1.6,0.6l0.3,0.6l2.6,1   l-1.5,4.5l-0.8,0.5l-1.8-4l-1.3-4.8l-0.3-2.7l1.5-4.7v-9.5L910,585l-1.3-3.1l-5.2-1.3l-1.9-0.6l-1.6-2.6l-3.4-1.6l-1.1-3.4l-2.7-1   l-2.4-3.7l-4.2-1.5l-2.9-1.5h-2.6l-4,0.8l-0.2,1.9l0.8,1l-0.5,1.1l-3.1-0.2l-3.7,3.6l-3.6,1.9h-3.9l-3.2,1.3l-0.3-2.7l-1.6-1.9   l-2.9-1.1l-1.6-1.5l-8.1-3.9l-7.6-1.8l-4.4,0.6l-6,0.5l-6,2.1l-3.5,0.6l-0.2-8l-2.6-1.9l-1.8-1.8l0.3-3.1l10.2-1.3l25.5-2.9   l6.8-0.6l5.4,0.3l2.6,3.9l1.5,1.5l8.1,0.5l10.8-0.6l21.5-1.3l5.4-0.7l4.6,0l0.2,2.9l3.8,0.8l0.3-4.8l-1.6-4.5l1-0.7l5.1,0.5   L929.4,545.5z M941.9,677.9l2.4-0.6l1.3-0.2l1.5-2.3l2.3-1.6l1.3,0.5l1.7,0.3l0.4,1.1l-3.5,1.2l-4.2,1.5l-2.3,1.2L941.9,677.9z    M955.4,672.9l1.2,1.1l2.7-2.1l5.3-4.2l3.7-3.9l2.5-6.6l1-1.7l0.2-3.4l-0.7,0.5l-1,2.8l-1.5,4.6l-3.2,5.3l-4.4,4.2l-3.4,1.9   L955.4,672.9z',
                            }),
                            s.jsx('path', {
                              id: 'SC',
                              className: j.SC ? j.SC : R('SC'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'South Carolina--9 EVs--'.concat(
                                E.SC
                              ),
                              d: 'M935.2,512.9l-1.8,1l-2.6-1.3l-0.6-2.1l-1.3-3.6l-2.3-2.1l-2.6-0.6l-1.6-4.8l-2.7-6l-4.2-1.9   l-2.1-1.9l-1.3-2.6L910,485l-2.3-1.3l-2.3-2.9l-3.1-2.3l-4.5-1.8l-0.5-1.5l-2.4-2.9l-0.5-1.5l-3.4-5.2l-3.4,0.2l-4-2.4l-1.3-1.3   l-0.3-1.8l0.8-1.9l2.3-1l-0.3-2.1l6.1-2.6l9.1-4.5l7.3-0.8l16.5-0.5l2.3,1.9l1.6,3.2l4.4-0.5l12.6-1.5l2.9,0.8l12.6,7.6l10.1,8.1   l-5.4,5.5l-2.6,6.1l-0.5,6.3l-1.6,0.8l-1.1,2.7l-2.4,0.6l-2.1,3.6l-2.7,2.7l-2.3,3.4l-1.6,0.8l-3.6,3.4l-2.9,0.2l1,3.2l-5,5.5   L935.2,512.9z',
                            }),
                            s.jsx('path', {
                              id: 'GA',
                              className: j.GA ? j.GA : R('GA'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Georgia--16 EVs--'.concat(E.GA),
                              d: 'M863.6,458l-4.8,0.8l-8.4,1.1l-8.6,0.9v2.2l0.2,2.1l0.6,3.4l3.4,7.9l2.4,9.9l1.5,6.1l1.6,4.8l1.5,7   l2.1,6.3l2.6,3.4l0.5,3.4l1.9,0.8l0.2,2.1l-1.8,4.8l-0.5,3.2l-0.2,1.9l1.6,4.4l0.3,5.3l-0.8,2.4l0.6,0.8l1.5,0.8l0.6,3.4l2.6,3.9   l1.5,1.5l7.9,0.2l10.8-0.6l21.5-1.3l5.4-0.7l4.6,0l0.2,2.9l2.6,0.8l0.3-4.4l-1.6-4.5l1.1-1.6l5.8,0.8l5,0.3l-0.8-6.3l2.3-10   l1.5-4.2l-0.5-2.6l3.3-6.2l-0.5-1.4l-1.9,0.7l-2.6-1.3l-0.6-2.1l-1.3-3.6l-2.3-2.1l-2.6-0.6l-1.6-4.8l-2.9-6.3l-4.2-1.9l-2.1-1.9   l-1.3-2.6l-2.1-1.9l-2.3-1.3l-2.3-2.9l-3.1-2.3l-4.5-1.8l-0.5-1.5l-2.4-2.9l-0.5-1.5l-3.4-4.9l-3.4,0.2l-4.1-3l-1.3-1.3l-0.3-1.8   l0.8-1.9l2.4-1.2l-1.1-1.2l0.1-0.3l-5.8,1l-7,0.8L863.6,458z',
                            }),
                            s.jsx('path', {
                              id: 'AL',
                              className: j.AL ? j.AL : R('AL'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Alabama--9 EVs--'.concat(E.AL),
                              d: 'M799.6,566.8l-1.6-15.2l-2.7-18.8l0.2-14.1l0.8-31l-0.2-16.7l0.2-6.4l7.8-0.4l27.8-2.6l8.9-0.7   l-0.1,2.2l0.2,2.1l0.6,3.4l3.4,7.9l2.4,9.9l1.5,6.1l1.6,4.8l1.5,7l2.1,6.3l2.6,3.4l0.5,3.4l1.9,0.8l0.2,2.1l-1.8,4.8l-0.5,3.2   l-0.2,1.9l1.6,4.4l0.3,5.3l-0.8,2.4l0.6,0.8l1.5,0.8l1,2.5h-6.3l-6.8,0.6l-25.5,2.9l-10.4,1.4l-0.1,3.8l1.8,1.8l2.6,1.9l0.6,7.9   l-5.5,2.6l-2.7-0.3l2.7-1.9v-1l-3.1-6l-2.3-0.6l-1.5,4.4l-1.3,2.7l-0.6-0.2H799.6z',
                            }),
                            s.jsx('path', {
                              id: 'NC',
                              className: j.NC ? j.NC : R('NC'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'North Carolina--16 EVs--'.concat(
                                E.NC
                              ),
                              d: 'M1006.1,398.5l1.7,4.7l3.6,6.5l2.4,2.4l0.6,2.3l-2.4,0.2l0.8,0.6l-0.3,4.2l-2.6,1.3l-0.6,2.1   l-1.3,2.9l-3.7,1.6l-2.4-0.3l-1.5-0.2l-1.6-1.3l0.3,1.3v1h1.9l0.8,1.3l-1.9,6.3h4.2l0.6,1.6l2.3-2.3l1.3-0.5l-1.9,3.6l-3.1,4.8   h-1.3l-1.1-0.5l-2.7,0.6l-5.2,2.4l-6.5,5.3l-3.4,4.7l-1.9,6.5l-0.5,2.4l-4.7,0.5l-5.5,1.3l-9.9-8.2l-12.6-7.6l-2.9-0.8l-12.6,1.5   l-4.3,0.8l-1.6-3.2l-3-2.1l-16.5,0.5l-7.3,0.8l-9.1,4.5l-6.1,2.6l-1.6,0.3l-5.8,1l-7,0.8l-6.8,0.5l0.5-4.1l1.8-1.5l2.7-0.6l0.6-3.7   l4.2-2.7l3.9-1.5l4.2-3.6l4.4-2.1l0.6-3.1l3.9-3.9l0.6-0.2c0,0,0,1.1,0.8,1.1c0.8,0,1.9,0.3,1.9,0.3l2.3-3.6l2.1-0.6l2.3,0.3   l1.6-3.6l2.9-2.6l0.5-2.1v-4l4.5,0.7l7.1-1.3l15.8-1.9l17.1-2.6l19.9-4l19.7-4.2l11.4-2.8L1006.1,398.5z M1010,431.5l2.6-2.5   l3.2-2.6l1.5-0.6l0.2-2l-0.6-6.1l-1.5-2.3l-0.6-1.9l0.7-0.2l2.7,5.5l0.4,4.4l-0.2,3.4l-3.4,1.5l-2.8,2.4l-1.1,1.2L1010,431.5z',
                            }),
                            s.jsx('path', {
                              id: 'TN',
                              className: j.TN ? j.TN : R('TN'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Tennessee--11 EVs--'.concat(E.TN),
                              d: 'M871.1,420.6l-51.9,5l-15.8,1.8l-4.6,0.5l-3.9,0v3.9l-8.4,0.5l-7,0.6l-11.1,0.1l-0.3,5.8l-2.1,6.3   l-1,3l-1.3,4.4l-0.3,2.6l-4,2.3l1.5,3.6l-1,4.4l-1,0.8l7.3-0.2l24.1-1.9l5.3-0.2l8.1-0.5l27.8-2.6l10.2-0.8l8.4-1l8.4-1.1l4.8-0.8   l-0.1-4.5l1.8-1.5l2.7-0.6l0.6-3.7l4.2-2.7l3.9-1.5l4.2-3.6l4.4-2.1l0.9-3.5l4.3-3.9l0.6-0.2c0,0,0,1.1,0.8,1.1s1.9,0.3,1.9,0.3   l2.3-3.6l2.1-0.6l2.3,0.3l1.6-3.6l2.1-2.2l0.6-1l0.2-3.9l-1.5-0.3l-2.4,1.9l-7.9,0.2l-12,1.9L871.1,420.6z',
                            }),
                            s.jsx('path', {
                              id: 'RI',
                              className: j.RI ? j.RI : R('RI'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Rhode Island--4 EVs--'.concat(E.RI),
                              d: 'M1048.1,279.8l-0.5-4.2l-0.8-4.4l-1.7-5.9l5.7-1.5l1.6,1.1l3.4,4.4l2.9,4.4l-2.9,1.5l-1.3-0.2   l-1.1,1.8l-2.4,1.9L1048.1,279.8z',
                            }),
                            s.jsx('path', {
                              id: 'CT',
                              className: j.CT ? j.CT : R('CT'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Connecticut--7 EVs--'.concat(E.CT),
                              d: 'M1047.2,280.1l-0.6-4.2l-0.8-4.4l-1.6-6l-4.2,0.9l-21.8,4.8l0.6,3.3l1.5,7.3v8.1l-1.1,2.3l1.8,2.1   l5-3.4l3.6-3.2l1.9-2.1l0.8,0.6l2.7-1.5l5.2-1.1L1047.2,280.1z',
                            }),
                            s.jsx('path', {
                              id: 'MA',
                              className: j.MA ? j.MA : R('MA'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Massachusetts--11 EVs--'.concat(
                                E.MA
                              ),
                              d: 'M1074,273.9l2.2-0.7l0.5-1.7l1,0.1l1,2.3l-1.3,0.5l-3.9,0.1L1074,273.9z M1064.6,274.7l2.3-2.6h1.6   l1.8,1.5l-2.4,1l-2.2,1L1064.6,274.7z M1029.8,252.7l17.5-4.2l2.3-0.6l2.1-3.2l3.7-1.7l2.9,4.4l-2.4,5.2l-0.3,1.5l1.9,2.6l1.1-0.8   h1.8l2.3,2.6l3.9,6l3.6,0.5l2.3-1l1.8-1.8l-0.8-2.7l-2.1-1.6l-1.5,0.8l-1-1.3l0.5-0.5l2.1-0.2l1.8,0.8l1.9,2.4l1,2.9l0.3,2.4   l-4.2,1.5l-3.9,1.9l-3.9,4.5l-1.9,1.5v-1l2.4-1.5l0.5-1.8l-0.8-3.1l-2.9,1.5l-0.8,1.5l0.5,2.3l-2.1,1l-2.7-4.5l-3.4-4.4l-2.1-1.8   l-6.5,1.9l-5.1,1.1l-21.8,4.8l-0.4-4.9l0.6-10.6l5.2-0.9L1029.8,252.7z',
                            }),
                            s.jsx('path', {
                              id: 'ME',
                              className: j.ME ? j.ME : R('ME'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Maine--4 Split EVs--'.concat(E.ME),
                              d: 'M1097.2,177.3l1.9,2.1l2.3,3.7v1.9l-2.1,4.7l-1.9,0.6l-3.4,3.1l-4.8,5.5c0,0-0.6,0-1.3,0   c-0.6,0-1-2.1-1-2.1l-1.8,0.2l-1,1.5l-2.4,1.5l-1,1.5l1.6,1.5l-0.5,0.6l-0.5,2.7l-1.9-0.2v-1.6l-0.3-1.3l-1.5,0.3l-1.8-3.2   l-2.1,1.3l1.3,1.5l0.3,1.1l-0.8,1.3l0.3,3.1l0.2,1.6l-1.6,2.6l-2.9,0.5l-0.3,2.9l-5.3,3.1l-1.3,0.5l-1.6-1.5l-3.1,3.6l1,3.2   l-1.5,1.3l-0.2,4.4l-1.1,6.3l-2.5-1.2l-0.5-3.1l-3.9-1.1l-0.3-2.7l-7.3-23.4l-4.2-13.6l1.4-0.1l1.5,0.4v-2.6l0.8-5.5l2.6-4.7l1.5-4   l-1.9-2.4v-6l0.8-1l0.8-2.7l-0.2-1.5l-0.2-4.8l1.8-4.8l2.9-8.9l2.1-4.2h1.3l1.3,0.2v1.1l1.3,2.3l2.7,0.6l0.8-0.8v-1l4-2.9l1.8-1.8   l1.5,0.2l6,2.4l1.9,1l9.1,29.9h6l0.8,1.9l0.2,4.8l2.9,2.3h0.8l0.2-0.5l-0.5-1.1L1097.2,177.3z M1076.3,207.5l1.5-1.5l1.4,1.1   l0.6,2.4l-1.7,0.9L1076.3,207.5z M1083,201.6l1.8,1.9c0,0,1.3,0.1,1.3-0.2s0.2-2,0.2-2l0.9-0.8l-0.8-1.8l-2,0.7L1083,201.6z',
                            }),
                            s.jsx('path', {
                              id: 'NH',
                              className: j.NH ? j.NH : R('NH'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'New Hampshire--4 EVs--'.concat(
                                E.NH
                              ),
                              d: 'M1054.8,242.4l0.9-1.1l1.1-3.3l-2.5-0.9l-0.5-3.1l-3.9-1.1l-0.3-2.7l-7.3-23.4l-4.6-14.5l-0.9,0   l-0.6,1.6l-0.6-0.5l-1-1l-1.5,1.9l0,5l0.3,5.7l1.9,2.7v4l-3.7,5.1l-2.6,1.1v1.1l1.1,1.8v8.6l-0.8,9.2l-0.2,4.8l1,1.3l-0.2,4.5   l-0.5,1.8l1.5,0.9l16.4-4.7l2.3-0.6l1.5-2.6L1054.8,242.4z',
                            }),
                            s.jsx('path', {
                              id: 'VT',
                              className: j.VT ? j.VT : R('VT'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Vermont--3 EVs--'.concat(E.VT),
                              d: 'M1018.3,253.7l-0.8-5.7l-2.4-10l-0.6-0.3l-2.9-1.3l0.8-2.9l-0.8-2.1l-2.7-4.6l1-3.9l-0.8-5.2   l-2.4-6.5l-0.8-4.9l26.2-6.7l0.3,5.8l1.9,2.7v4l-3.7,4l-2.6,1.1v1.1l1.1,1.8v8.6l-0.8,9.2l-0.2,4.8l1,1.3l-0.2,4.5l-0.5,1.8   l0.7,1.6l-7,1.4L1018.3,253.7z',
                            }),
                            s.jsx('path', {
                              id: 'NY',
                              className: j.NY ? j.NY : R('NY'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'New York--28 EVs--'.concat(E.NY),
                              d: 'M1002.6,289.4l-1.1-1l-2.6-0.2l-2.3-1.9l-1.6-6.1l-3.5,0.1l-2.4-2.7l-19.4,4.4l-43,8.7l-7.5,1.2   l-0.7-6.5l1.4-1.1l1.3-1.1l1-1.6l1.8-1.1l1.9-1.8l0.5-1.6l2.1-2.7l1.1-1l-0.2-1l-1.3-3.1l-1.8-0.2l-1.9-6.1l2.9-1.8l4.4-1.5l4-1.3   l3.2-0.5l6.3-0.2l1.9,1.3l1.6,0.2l2.1-1.3l2.6-1.1l5.2-0.5l2.1-1.8l1.8-3.2l1.6-1.9h2.1l1.9-1.1l0.2-2.3l-1.5-2.1l-0.3-1.5l1.1-2.1   v-1.5h-1.8l-1.8-0.8l-0.8-1.1l-0.2-2.6l5.8-5.5l0.6-0.8l1.5-2.9l2.9-4.5l2.7-3.7l2.1-2.4l2.4-1.8l3.1-1.2l5.5-1.3l3.2,0.2l4.5-1.5   l7.6-2.1l0.5,5l2.4,6.5l0.8,5.2l-1,3.9l2.6,4.5l0.8,2.1l-0.8,2.9l2.9,1.3l0.6,0.3l3.1,11l-0.5,5.1l-0.5,10.8l0.8,5.5l0.8,3.6   l1.5,7.3v8.1l-1.1,2.3l1.8,2l0.8,1.7l-1.9,1.8l0.3,1.3l1.3-0.3l1.5-1.3l2.3-2.6l1.1-0.6l1.6,0.6l2.3,0.2l7.9-3.9l2.9-2.7l1.3-1.5   l4.2,1.6l-3.4,3.6l-3.9,2.9l-7.1,5.3l-2.6,1l-5.8,1.9l-4,1.1l-1.2-0.5l-0.2-3.7l0.5-2.7l-0.2-2.1l-2.8-1.7l-4.5-1l-3.9-1.1   L1002.6,289.4z',
                            }),
                            s.jsx('path', {
                              id: 'NJ',
                              className: j.NJ ? j.NJ : R('NJ'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'New Jersey--14 EVs--'.concat(E.NJ),
                              d: 'M1002.2,290.3l-2.1,2.4v3.1l-1.9,3.1l-0.2,1.6l1.3,1.3l-0.2,2.4l-2.3,1.1l0.8,2.7l0.2,1.1l2.7,0.3   l1,2.6l3.6,2.4l2.4,1.6v0.8l-3.2,3.1l-1.6,2.3l-1.5,2.7l-2.3,1.3l-1.2,0.7l-0.2,1.2l-0.6,2.6l1.1,2.2l3.2,2.9l4.8,2.3l4,0.6   l0.2,1.5l-0.8,1l0.3,2.7h0.8l2.1-2.4l0.8-4.8l2.7-4l3.1-6.5l1.1-5.5l-0.6-1.1l-0.2-9.4l-1.6-3.4l-1.1,0.8l-2.7,0.3l-0.5-0.5l1.1-1   l2.1-1.9l0.1-1.1l-0.4-3.4l0.5-2.7l-0.2-2.1l-2.6-1.1l-4.5-1l-3.9-1.1L1002.2,290.3z',
                            }),
                            s.jsx('path', {
                              id: 'PA',
                              className: j.PA ? j.PA : R('PA'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Pennsylvania--19 EVs--'.concat(
                                E.PA
                              ),
                              d: 'M996.2,326.5l1.1-0.6l2.3-0.6l1.5-2.7l1.6-2.3l3.2-3.1v-0.8l-2.4-1.6l-3.6-2.4l-1-2.6l-2.7-0.3   l-0.2-1.1l-0.8-2.7l2.3-1.1l0.2-2.4l-1.3-1.3l0.2-1.6l1.9-3.1v-3.1l2.3-2.4l0.2-1.1l-2.6-0.2l-2.3-1.9l-2.4-5.3l-3-0.9l-2.3-2.1   l-18.6,4l-43,8.7l-8.9,1.5l-0.5-7.1l-5.5,5.6l-1.3,0.5l-4.2,3l2.9,19.1l2.5,9.7l3.6,19.3l3.3-0.6l11.9-1.5l37.9-7.7l14.9-2.8   l8.3-1.6l0.3-0.2l2.1-1.6L996.2,326.5z',
                            }),
                            s.jsx('path', {
                              id: 'DE',
                              className: j.DE ? j.DE : R('DE'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Delaware--3 EVs--'.concat(E.DE),
                              d: 'M996.4,330.4l0.6-2.1l0-1.2l-1.3-0.1l-2.1,1.6l-1.5,1.5l1.5,4.2l2.3,5.7l2.1,9.7l1.6,6.3l5-0.2   l6.1-1.2l-2.3-7.4l-1,0.5l-3.6-2.4l-1.8-4.7l-1.9-3.6l-2.3-1l-2.1-3.6L996.4,330.4z',
                            }),
                            s.jsx('path', {
                              id: 'MD',
                              className: j.MD ? j.MD : R('MD'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Maryland--10 EVs--'.concat(E.MD),
                              d: 'M1011,355.3l-6.1,1.3l-5.8,0.2l-1.8-7.1l-2.1-9.7l-2.3-5.7l-1.3-4.4l-7.5,1.6l-14.9,2.8l-37.5,7.6   l1.1,5l1,5.7l0.3-0.3l2.1-2.4l2.3-2.6l2.4-0.6l1.5-1.5l1.8-2.6l1.3,0.6l2.9-0.3l2.6-2.1l2-1.5l1.8-0.5l1.6,1.1l2.9,1.5l1.9,1.8   l1.2,1.5l4.1,1.7v2.9l5.5,1.3l1.1,0.5l1.4-2l2.9,2l-1.3,2.5l-0.8,4l-1.8,2.6v2.1l0.6,1.8l5.1,1.4l4.3-0.1l3.1,1l2.1,0.3l1-2.1   l-1.5-2.1v-1.8l-2.4-2.1l-2.1-5.5l1.3-5.3l-0.2-2.1l-1.3-1.3c0,0,1.5-1.6,1.5-2.3c0-0.6,0.5-2.1,0.5-2.1l1.9-1.3l1.9-1.6l0.5,1   l-1.5,1.6l-1.3,3.7l0.3,1.1l1.8,0.3l0.5,5.5l-2.1,1l0.3,3.6l0.5-0.2l1.1-1.9l1.6,1.8l-1.6,1.3l-0.3,3.4l2.6,3.4l3.9,0.5l1.6-0.8   l3.2,4.2l1.4,0.5l6.7-2.8l2-4L1011,355.3z M994.3,364.3l1.1,2.5l0.2,1.8l1.1,1.9c0,0,0.9-0.9,0.9-1.2c0-0.3-0.7-3.1-0.7-3.1   l-0.7-2.3L994.3,364.3z',
                            }),
                            s.jsx('path', {
                              id: 'WV',
                              className: j.WV ? j.WV : R('WV'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'West Virginia--4 EVs--'.concat(
                                E.WV
                              ),
                              d: 'M930.6,342l1.1,4.9l1.1,6.9l3.6-2.7l2.3-3.1l2.5-0.6l1.5-1.5l1.8-2.6l1.2,0.6l2.9-0.3l2.6-2.1   l2-1.5l1.8-0.5l1.3,1l2.2,1.1l1.9,1.8l1.4,1.3l-0.1,4.7l-5.7-3.1l-4.5-1.8l-0.2,5.3l-0.5,2.1l-1.6,2.7l-0.6,1.6l-3.1,2.4l-0.5,2.3   l-3.4,0.3l-0.3,3.1l-1.1,5.5h-2.6l-1.3-0.8l-1.6-2.7l-1.8,0.2l-0.3,4.4l-2.1,6.6l-5,10.8l0.8,1.3l-0.2,2.7l-2.1,1.9l-1.5-0.3   l-3.2,2.4l-2.6-1l-1.8,4.7c0,0-3.7,0.8-4.4,1c-0.6,0.2-2.4-1.3-2.4-1.3l-2.4,2.3l-2.6,0.6l-2.9-0.8l-1.3-1.3l-2.2-3l-3.1-2   l-2.6-2.7l-2.9-3.7l-0.6-2.3l-2.6-1.5l-0.8-1.6l-0.2-5.3l2.2-0.1l1.9-0.8l0.2-2.7l1.6-1.5l0.2-5l1-3.9l1.3-0.6l1.3,1.1l0.5,1.8   l1.8-1l0.5-1.6l-1.1-1.8v-2.4l1-1.3l2.3-3.4l1.3-1.5l2.1,0.5l2.3-1.6l3.1-3.4l2.3-3.9l0.3-5.7l0.5-5v-4.7l-1.1-3.1l1-1.5l1.3-1.3   l3.5,19.8l4.6-0.8L930.6,342z',
                            }),
                            s.jsx('path', {
                              id: 'KY',
                              className: j.KY ? j.KY : R('KY'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Kentucky--8 EVs--'.concat(E.KY),
                              d: 'M895.8,397.8l-2.3,2.7l-4.2,3.6L885,410l-1.8,1.8v2.1l-3.9,2.1l-5.7,3.4l-3.5,0.4l-51.9,4.9   l-15.8,1.8l-4.6,0.5l-3.9,0l-0.2,4.2l-8.2,0.1l-7,0.6l-10.4,0.2l1.9-0.2l2.2-1.8l2.1-1.1l0.2-3.2l0.9-1.8l-1.6-2.5l0.8-1.9l2.3-1.8   l2.1-0.6l2.7,1.3l3.6,1.3l1.1-0.3l0.2-2.3l-1.3-2.4l0.3-2.3l1.9-1.5l2.6-0.6l1.6-0.6l-0.8-1.8l-0.6-1.9l1.1-0.8l1.1-3.3l3-1.7   l5.8-1l3.6-0.5l1.5,1.9l1.8,0.8l1.8-3.2l2.9-1.5l1.9,1.6l0.8,1.1l2.1-0.5l-0.2-3.4l2.9-1.6l1.1-0.8l1.1,1.6h4.7l0.8-2.1l-0.3-2.3   l2.9-3.6l4.7-3.9l0.5-4.5l2.7-0.3l3.9-1.8l2.7-1.9l-0.3-1.9l-1.5-1.5l0.6-2.2l4.1-0.2l2.4-0.8l2.9,1.6l1.6,4.4l5.8,0.3l1.8,1.8   l2.1,0.2l2.4-1.5l3.1,0.5l1.3,1.5l2.7-2.6l1.8-1.3h1.6l0.6,2.7l1.8,1l2.4,2.2l0.2,5.5l0.8,1.6l2.6,1.5l0.6,2.3l2.9,3.7l2.6,2.7   L895.8,397.8z',
                            }),
                            s.jsx('path', {
                              id: 'OH',
                              className: j.OH ? j.OH : R('OH'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Ohio--17 EVs--'.concat(E.OH),
                              d: 'M905.4,295l-6.1,4.1l-3.9,2.3l-3.4,3.7l-4,3.9l-3.2,0.8l-2.9,0.5l-5.5,2.6l-2.1,0.2l-3.4-3.1   l-5.2,0.6l-2.6-1.5l-2.4-1.4l-4.9,0.7l-10.2,1.6l-7.8,1.2l1.3,14.6l1.8,13.7l2.6,23.4l0.6,4.8l4.1-0.1l2.4-0.8l3.4,1.5l2.1,4.4   l5.1,0l1.9,2.1l1.8-0.1l2.5-1.3l2.5,0.4l2,1.5l1.7-2.1l2.3-1.3l2.1-0.7l0.6,2.7l1.8,1l3.5,2.3l2.2-0.1l1.1-1.1l-0.1-1.4l1.6-1.5   l0.2-5l1-3.9l1.5-1.4l1.5,0.9l0.8,1.2l1.2-0.2l-0.4-2.4l-0.6-0.6v-2.4l1-1.3l2.3-3.4l1.3-1.5l2.1,0.5l2.3-1.6l3.1-3.4l2.3-3.9   l0.2-5.4l0.5-5v-4.7l-1.1-3.1l1-1.5l0.9-1l-1.4-9.8L905.4,295z',
                            }),
                            s.jsx('path', {
                              id: 'MI',
                              className: j.MI ? j.MI : R('MI'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Michigan--15 EVs--'.concat(E.MI),
                              d: 'M755.6,182.1l1.8-2.1l2.2-0.8l5.4-3.9l2.3-0.6l0.5,0.5l-5.1,5.1l-3.3,1.9l-2.1,0.9L755.6,182.1z    M841.8,214.2l0.6,2.5l3.2,0.2l1.3-1.2c0,0-0.1-1.5-0.4-1.6c-0.3-0.2-1.6-1.9-1.6-1.9l-2.2,0.2l-1.6,0.2l-0.3,1.1L841.8,214.2z    M871.9,277.2l-3.2-8.2l-2.3-9.1l-2.4-3.2l-2.6-1.8l-1.6,1.1l-3.9,1.8l-1.9,5l-2.7,3.7l-1.1,0.6l-1.5-0.6c0,0-2.6-1.5-2.4-2.1   c0.2-0.6,0.5-5,0.5-5l3.4-1.3l0.8-3.4l0.6-2.6l2.4-1.6l-0.3-10l-1.6-2.3l-1.3-0.8l-0.8-2.1l0.8-0.8l1.6,0.3l0.2-1.6L850,231   l-1.3-2.6h-2.6l-4.5-1.5l-5.5-3.4h-2.7l-0.6,0.6l-1-0.5l-3.1-2.3l-2.9,1.8l-2.9,2.3l0.3,3.6l1,0.3l2.1,0.5l0.5,0.8l-2.6,0.8   l-2.6,0.3l-1.5,1.8l-0.3,2.1l0.3,1.6l0.3,5.5l-3.6,2.1l-0.6-0.2v-4.2l1.3-2.4l0.6-2.4l-0.8-0.8l-1.9,0.8l-1,4.2l-2.7,1.1l-1.8,1.9   l-0.2,1l0.6,0.8l-0.6,2.6l-2.3,0.5v1.1l0.8,2.4l-1.1,6.1l-1.6,4l0.6,4.7l0.5,1.1l-0.8,2.4l-0.3,0.8l-0.3,2.7l3.6,6l2.9,6.5l1.5,4.8   l-0.8,4.7l-1,6l-2.4,5.2l-0.3,2.7l-3.3,3.1l4.4-0.2l21.4-2.3l7.3-1l0.1,1.7l6.9-1.2l10.3-1.5l3.9-0.5l0.1-0.6l0.2-1.5l2.1-3.7   l2-1.7l-0.2-5.1l1.6-1.6l1.1-0.3l0.2-3.6l1.5-3l1.1,0.6l0.2,0.6l0.8,0.2l1.9-1L871.9,277.2z M741.5,211.2l0.7-0.6l2.7-0.8l3.6-2.3   v-1l0.6-0.6l6-1l2.4-1.9l4.4-2.1l0.2-1.3l1.9-2.9l1.8-0.8l1.3-1.8l2.3-2.3l4.4-2.4l4.7-0.5l1.1,1.1l-0.3,1l-3.7,1l-1.5,3.1   l-2.3,0.8l-0.5,2.4l-2.4,3.2l-0.3,2.6l0.8,0.5l1-1.1l3.6-2.9l1.3,1.3h2.3l3.2,1l1.5,1.1l1.5,3.1l2.7,2.7l3.9-0.2l1.5-1l1.6,1.3   l1.6,0.5l1.3-0.8h1.1l1.6-1l4-3.6l3.4-1.1l6.6-0.3l4.5-1.9l2.6-1.3l1.5,0.2v5.7l0.5,0.3l2.9,0.8l1.9-0.5l6.1-1.6l1.1-1.1l1.5,0.5v7   l3.2,3.1l1.3,0.6l1.3,1l-1.3,0.3l-0.8-0.3l-3.7-0.5l-2.1,0.6l-2.3-0.2l-3.2,1.5h-1.8l-5.8-1.3l-5.2,0.2l-1.9,2.6l-7,0.6l-2.4,0.8   l-1.1,3.1l-1.3,1.1l-0.5-0.2l-1.5-1.6l-4.5,2.4h-0.6l-1.1-1.6l-0.8,0.2l-1.9,4.4l-1,4l-3.2,7l-1.2-1l-1.4-1l-1.9-10.3l-3.5-1.4   l-2.1-2.3l-12.1-2.7l-2.9-1l-8.2-2.2l-7.9-1.1L741.5,211.2z',
                            }),
                            s.jsx('path', {
                              id: 'WY',
                              className: j.WY ? j.WY : R('WY'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Wyoming--3 EVs--'.concat(E.WY),
                              d: 'M528.3,243.8l-10.5-0.8l-32.1-3.3l-16.2-2.1l-28.3-4.1l-19.9-3l-1.4,11.2l-3.8,24.3l-5.3,30.4   l-1.5,10.5l-1.7,11.9l6.5,0.9l25.9,2.5l20.6,2.3l36.8,4.1l23.8,2.9l4.5-44.2l1.4-25.4L528.3,243.8z',
                            }),
                            s.jsx('path', {
                              id: 'MT',
                              className: j.MT ? j.MT : R('MT'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Montana--3 EVs--'.concat(E.MT),
                              d: 'M530.7,222.3l0.6-11.2l2.3-24.8c0.5-5,1.1-8.5,1.4-15.4l0.9-14.6l-30.7-2.8L476,150l-29.3-4   l-32.3-5.3l-18.4-3.4l-32.7-6.9l-4.5,21.3l3.4,7.5l-1.4,4.6l1.8,4.6l3.2,1.4l4.6,10.8l2.7,3.2l0.5,1.1l3.4,1.1l0.5,2.1l-7.1,17.6   v2.5l2.5,3.2h0.9l4.8-3l0.7-1.1l1.6,0.7l-0.2,5.3l2.7,12.6l3,2.5l0.9,0.7l1.8,2.3l-0.5,3.4l0.7,3.4l1.1,0.9l2.3-2.3h2.7l3.2,1.6   l2.5-0.9h4.1l3.7,1.6l2.7-0.5l0.5-3l3-0.7l1.4,1.4l0.5,3.2l1.8,1.4l1.5-11.6l20.7,3l28.2,4l16.6,1.9l31.4,3.5l11,1.5l1.1-15.4   L530.7,222.3z',
                            }),
                            s.jsx('path', {
                              id: 'ID',
                              className: j.ID ? j.ID : R('ID'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Idaho--4 EVs--'.concat(E.ID),
                              d: 'M336.1,281c-22.6-4.3-14.1-2.8-21.1-4.4l4.4-17.5l4.3-17.7l1.4-4.2l2.5-5.9l-1.3-2.3l-2.5,0.1   l-0.8-1l0.5-1.1l0.3-3.1l4.5-5.5l1.8-0.5l1.1-1.1l0.6-3.2l0.9-0.7l3.9-5.8l3.9-4.3l0.2-3.8l-3.4-2.6l-1.3-4.4l0.4-9.7l3.7-16.5   l4.5-20.8l3.8-13.5l0.8-3.8l13,2.5l-4.2,21.5l2.9,7.7l-1.1,4.6l2,4.6l3.2,1.7l4.5,9.8l2.7,3.8l0.6,1.1l3.4,1.1l0.5,2.5l-6.9,16.8   l0.3,3.3l2.7,2.9l1.9,0.5l4.8-3.6l0.4-0.5l0.2,0.8l0.3,4.1l2.6,12.9l3.5,2.7l0.4,0.8l2.1,2.4l-0.8,2.8l0.7,3.8l1.9,0.9l2.1-1.6   l2.6-0.5l3.4,1.6l2.5-0.6l3.8-0.2l4,1.6l2.7-0.3l0.9-2.3l2.5-1.6l0.7,1.7l0.6,2.2l2.3,2.5l-3.8,24l-5.1,29l-4.2-0.3l-8.2-1.5   l-9.8-1.8l-12.2-2.4l-12.5-2.5l-8.5-1.8l-9.3-1.7L336.1,281z',
                            }),
                            s.jsx('path', {
                              id: 'WA',
                              className: j.WA ? j.WA : R('WA'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Washington--12 EVs--'.concat(E.WA),
                              d: 'M267.6,106.4l4.4,1.5l9.7,2.7l8.6,1.9l20,5.7l23,5.7l15.2,3.4l-1,3.9l-4.1,13.8l-4.5,20.8   l-3.2,16.1l-0.4,9.4l-13.2-3.9l-15.6-3.4l-13.7,0.6l-1.6-1.5l-5.3,1.9l-4-0.3l-2.7-1.8l-1.6,0.5l-4.2-0.2l-1.9-1.4l-4.8-1.7   l-1.4-0.2l-5-1.3l-1.8,1.5l-5.7-0.3l-4.8-3.8l0.2-0.8l0.1-7.9l-2.1-3.9l-4.1-0.7l-0.4-2.4l-2.5-0.6l-2.9-0.5l-1.8,1l-2.3-2.9   l0.3-2.9l2.7-0.3l1.6-4l-2.6-1.1l0.2-3.7l4.4-0.6l-2.7-2.7l-1.5-7.1l0.6-2.9v-7.9l-1.8-3.2l2.3-9.4l2.1,0.5l2.4,2.9l2.7,2.6   l3.2,1.9l4.5,2.1l3.1,0.6l2.9,1.5l3.4,1l2.3-0.2v-2.4l1.3-1.1l2.1-1.3l0.3,1.1l0.3,1.8l-2.3,0.5l-0.3,2.1l1.8,1.5l1.1,2.4l0.6,1.9   l1.5-0.2l0.2-1.3l-1-1.3l-0.5-3.2l0.8-1.8l-0.6-1.5V119l1.8-3.6l-1.1-2.6l-2.4-4.8l0.3-0.8L267.6,106.4z M258.1,112.3l2-0.2   l0.5,1.4l1.5-1.6h2.3l0.8,1.5l-1.5,1.7l0.6,0.8l-0.7,2l-1.4,0.4c0,0-0.9,0.1-0.9-0.2s1.5-2.6,1.5-2.6l-1.7-0.6l-0.3,1.5l-0.7,0.6   l-1.5-2.3L258.1,112.3z',
                            }),
                            s.jsx('path', {
                              id: 'TX',
                              className: j.TX ? j.TX : R('TX'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Texas--40 EVs--'.concat(E.TX),
                              d: 'M531.1,433.4l22.7,1.1l31.1,1.1l-2.3,23.5l-0.3,18.2l0.1,2.1l4.3,3.8l1.7,0.8l1.8,0.3l0.7-1.3   l0.9,0.9l1.7,0.5l1.6-0.7l1.1,0.4l-0.3,3.4l4.3,1l2.7,0.8l4,0.5l2.2,1.8l3.2-1.6l2.8,0.4l2,2.8l1.1,0.3l-0.2,2l3.1,1.2l2.8-1.8   l1.5,0.4l2.4,0.2l0.4,1.9l4.6,2l2.7-0.2l2-4.1h0.3l1.1,1.9l4.4,1l3.3,1.2l3.3,0.8l2.1-0.8l0.8-2.5h3.7l1.9,0.8l3.1-1.6h0.7l0.4,1.1   h4.3l2.4-1.3l1.7,0.3l1.4,1.9l2.9,1.7l3.5,1.1l2.7,1.4l2.4,1.6l3.3-0.9l1.9,1l0.5,10.1l0.3,9.7l0.7,9.5l0.5,4l2.7,4.6l1.1,4.1   l3.9,6.3l0.5,2.9l0.5,1l-0.7,7.5l-2.7,4.4l1,2.9l-0.4,2.5l-0.8,7.3l-1.4,2.7l0.6,4.4l-5.7,1.6l-9.9,4.5l-1,1.9l-2.6,1.9l-2.1,1.5   l-1.3,0.8l-5.7,5.3l-2.7,2.1l-5.3,3.2l-5.7,2.4l-6.3,3.4l-1.8,1.5l-5.8,3.6l-3.4,0.6l-3.9,5.5l-4,0.3l-1,1.9l2.3,1.9l-1.5,5.5   l-1.3,4.5l-1.1,3.9l-0.8,4.5l0.8,2.4l1.8,7l1,6.1l1.8,2.7l-1,1.5l-3.1,1.9l-5.7-3.9l-5.5-1.1l-1.3,0.5l-3.2-0.6l-4.2-3.1l-5.2-1.1   l-7.6-3.4l-2.1-3.9l-1.3-6.5l-3.2-1.9l-0.6-2.3l0.6-0.6l0.3-3.4l-1.3-0.6l-0.6-1l1.3-4.4l-1.6-2.3l-3.2-1.3l-3.4-4.4l-3.6-6.6   l-4.2-2.6l0.2-1.9l-5.3-12.3l-0.8-4.2l-1.8-1.9l-0.2-1.5l-6-5.3l-2.6-3.1v-1.1l-2.6-2.1l-6.8-1.1l-7.4-0.6l-3.1-2.3l-4.5,1.8   l-3.6,1.5l-2.3,3.2l-1,3.7l-4.4,6.1l-2.4,2.4l-2.6-1l-1.8-1.1l-1.9-0.6l-3.9-2.3v-0.6l-1.8-1.9l-5.2-2.1l-7.4-7.8l-2.3-4.7v-8.1   l-3.2-6.5l-0.5-2.7l-1.6-1l-1.1-2.1l-5-2.1l-1.3-1.6l-7.1-7.9l-1.3-3.2l-4.7-2.3l-1.5-4.4l-2.6-2.9l-1.9-0.5l-0.6-4.7l8,0.7l29,2.7   l29,1.6l2.3-23.8l3.9-55.6l1.6-18.7l1.4,0 M631.2,667.3l-0.6-7.1l-2.7-7.2l-0.6-7l1.5-8.2l3.3-6.9l3.5-5.4l3.2-3.6l0.6,0.2   l-4.8,6.6l-4.4,6.5l-2,6.6l-0.3,5.2l0.9,6.1l2.6,7.2l0.5,5.2l0.2,1.5L631.2,667.3z',
                            }),
                            s.jsx('path', {
                              id: 'CA',
                              className: j.CA ? j.CA : R('CA'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'California--54 EVs--'.concat(E.CA),
                              d: 'M310.7,486.8l3.8-0.5l1.5-2l0.7-1.9l-3.2-0.1l-1.1-1.8l0.8-1.7l0-6.2l2.2-1.3l2.7-2.6l0.4-4.9   l1.6-3.5l1.9-2.1l3.3-1.7l1.3-0.7l0.8-1.5l-0.9-0.9l-1-1.5l-0.9-5.3l-2.9-5.2l0.1-2.8l-2.2-3.2l-15-23.2l-19.4-28.7l-22.4-33   l-12.7-19.5l1.8-7.2l6.8-25.9l8.1-31.4l-12.4-3.3l-13.5-3.4l-12.6-4.1l-7.5-2.1l-11.4-3l-7.1-2.4l-1.6,4.7l-0.2,7.4l-5.2,11.8   l-3.1,2.6l-0.3,1.1l-1.8,0.8l-1.5,4.2l-0.8,3.2l2.7,4.2l1.6,4.2l1.1,3.6l-0.3,6.5l-1.8,3.1l-0.6,5.8l-1,3.7l1.8,3.9l2.7,4.5   l2.3,4.8l1.3,4l-0.3,3.2l-0.3,0.5v2.1l5.7,6.3l-0.5,2.4l-0.6,2.3l-0.6,1.9l0.2,8.2l2.1,3.7l1.9,2.6l2.7,0.5l1,2.7l-1.1,3.6   l-2.1,1.6h-1.1l-0.8,3.9l0.5,2.9l3.2,4.4l1.6,5.3l1.5,4.7l1.3,3.1l3.4,5.8l1.5,2.6l0.5,2.9l1.6,1v2.4l-0.8,1.9l-1.8,7.1l-0.5,1.9   l2.4,2.7l4.2,0.5l4.5,1.8l3.9,2.1h2.9l2.9,3.1l2.6,4.8l1.1,2.3l3.9,2.1l4.8,0.8l1.5,2.1l0.6,3.2l-1.5,0.6l0.3,1l3.2,0.8l2.7,0.2   l2.9,4.7l3.9,4.2l0.8,2.3l2.6,4.2l0.3,3.2v9.4l0.5,1.8l10,1.5l19.7,2.7L310.7,486.8z M222.8,437l1.3,1.5l-0.2,1.3l-3.2-0.1   l-0.6-1.2l-0.6-1.5L222.8,437z M224.7,437l1.2-0.6l3.6,2.1l3.1,1.2l-0.9,0.6l-4.5-0.2l-1.6-1.6L224.7,437z M245.4,456.8l1.8,2.3   l0.8,1l1.5,0.6l0.6-1.5l-1-1.8l-2.7-2l-1.1,0.2V456.8z M244,465.5l1.8,3.2l1.2,1.9l-1.5,0.2l-1.3-1.2c0,0-0.7-1.5-0.7-1.9   s0-2.2,0-2.2L244,465.5z',
                            }),
                            s.jsx('path', {
                              id: 'AZ',
                              className: j.AZ ? j.AZ : R('AZ'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Arizona--11 EVs--'.concat(E.AZ),
                              d: 'M311.7,487.5l-2.6,2.2l-0.3,1.5l0.5,1l18.9,10.7l12.1,7.6l14.7,8.6l16.8,10l12.3,2.4l25.1,2.7   l2.5-12.5l3.8-27.2l7-52.9l4.3-31l-24.6-3.7l-27.2-4.6l-33.4-6.3l-2.9,18.1l-0.5,0.5l-1.7,2.6l-2.5-0.1l-1.3-2.7l-2.7-0.3l-0.9-1.1   h-0.9l-0.9,0.6l-1.9,1l-0.1,7l-0.2,1.7l-0.6,12.6l-1.5,2.2l-0.6,3.3l2.7,4.9l1.3,5.8l0.8,1l1,0.6l-0.1,2.3l-1.6,1.4l-3.4,1.7   l-1.9,1.9l-1.5,3.7l-0.6,4.9l-2.9,2.7l-2.1,0.7l-0.1,5.8l-0.5,1.7l0.5,0.8l3.7,0.6l-0.6,2.7l-1.5,2.2L311.7,487.5z',
                            }),
                            s.jsx('path', {
                              id: 'NV',
                              className: j.NV ? j.NV : R('NV'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Nevada--6 EVs--'.concat(E.NV),
                              d: 'M314.7,277.6l21,4.5l9.7,1.9l9.3,1.8l6.6,1.6l-0.6,5.9l-3.5,17.3l-4.1,20l-1.9,9.7l-2.2,13.3   l-3.2,16.4l-3.5,15.7l-2,10.2l-2.5,16.8l-0.5,1.1l-1.1,2.5l-1.9-0.1l-1.1-2.7l-2.7-0.5l-1.4-1l-2,0.3l-0.9,0.7l-1.3,1.3l-0.4,7   l-0.5,1.7l-0.4,12.1l-1.3,1.7l-1.9-2.3l-14.5-22.7l-19.4-29L263.6,349l-12.4-18.6l1.6-6.6l7-25.9l7.9-31.3l33.6,8.1l13.7,3',
                            }),
                            s.jsx('path', {
                              id: 'UT',
                              className: j.UT ? j.UT : R('UT'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Utah--6 EVs--'.concat(E.UT),
                              d: 'M427,409.3l-24.6-3.5l-26.6-4.9l-33.8-6l1.6-9.2l3.2-15.2L350,354l2.2-13.6l1.9-8.9l3.8-20.5   l3.5-17.5l1.1-5.6l12.7,2.3l12,2.1l10.3,1.8l8.3,1.4l3.7,0.5l-1.5,10.6l-2.3,13.2l7.8,0.9l16.4,1.8l8.2,0.9l-2.1,22l-3.2,22.6   l-3.8,27.8l-1.7,11.1L427,409.3z',
                            }),
                            s.jsx('path', {
                              id: 'CO',
                              className: j.CO ? j.CO : R('CO'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Colorado--10 EVs--'.concat(E.CO),
                              d: 'M552.6,356.8l1.4-21.3l-32.1-3.1l-24.5-2.7l-37.3-4.1l-20.7-2.5l-2.6,22.2l-3.2,22.4l-3.8,28   l-1.5,11.1l-0.3,2.8l33.9,3.8l37.7,4.3l32,3.2l16.6,0.8',
                            }),
                            s.jsx('path', {
                              id: 'NM',
                              className: j.NM ? j.NM : R('NM'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'New Mexico--5 EVs--'.concat(E.NM),
                              d: 'M456.7,531l-0.7-6.1l8.6,0.5l29.5,3.1l28.4,1.4l2-22.3l3.7-55.9l1.1-19.4l2,0.3l0-11.1l-32.2-2.4   l-36.9-4.4l-34.5-4.1l-4.2,30.8l-7,53.2l-3.8,26.9l-2,13.3l15.5,2l1.3-10l16.7,2.6L456.7,531z',
                            }),
                            s.jsx('path', {
                              id: 'OR',
                              className: j.OR ? j.OR : R('OR'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Oregon--8 EVs--'.concat(E.OR),
                              d: 'M314.3,276.7l4.3-17.9l4.7-17.9l1.1-4.2l2.4-5.6l-0.6-1.2l-2.5,0l-1.3-1.7l0.5-1.5l0.5-3.2l4.5-5.5   l1.8-1.1l1.1-1.1l1.5-3.6l4-5.7l3.6-3.9l0.2-3.5l-3.3-2.5l-1.2-4.5l-13.2-3.7l-15.1-3.5l-15.4,0.1l-0.5-1.4l-5.5,2.1l-4.5-0.6   l-2.4-1.6l-1.3,0.7L273,184l-1.7-1.4l-5.3-2.1l-0.8,0.1l-4.3-1.5l-1.9,1.8l-6.2-0.3l-5.9-4.1l0.7-0.8l0.2-7.8l-2.3-3.9l-4.1-0.6   l-0.7-2.5l-2.4-0.5l-5.8,2.1l-2.3,6.5l-3.2,10l-3.2,6.5l-5,14.1l-6.5,13.6l-8.1,12.6l-1.9,2.9l-0.8,8.6l-1.3,6l2.7,3.5l6.7,2.3   l11.6,3.3l7.9,2.5l12.4,3.6l13.3,3.6l13.2,3.6',
                            }),
                            s.jsx('path', {
                              id: 'ND',
                              className: j.ND ? j.ND : R('ND'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'North Dakota--3 EVs--'.concat(E.ND),
                              d: 'M645.3,227.7l-0.4-7.5l-2-7.3l-1.8-13.6l-0.5-9.8l-2-3.1l-1.6-5.4v-10.3l0.7-3.9l-2.1-5.5   l-28.4-0.6l-18.6-0.6l-26.5-1.3l-24.9-1.9l-1.3,14.2l-1.4,15.1l-2.3,24.9l-0.5,11l56.8,3.8L645.3,227.7z',
                            }),
                            s.jsx('path', {
                              id: 'SD',
                              className: j.SD ? j.SD : R('SD'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'South Dakota--3 EVs--'.concat(E.SD),
                              d: 'M646.8,303.2l-1-1.1l-1.5-3.6l1.8-3.7l1.1-5.6l-2.6-2.1l-0.3-2.7l0.6-3l2.2-0.8l0.3-5.7l-0.1-30.1   l-0.6-3l-4.1-3.6l-1-2v-1.9l1.9-1.3l1.5-1.9l0.2-2.7l-57.4-1.6l-56.2-3.9l-0.8,5.3l-1.6,15.9l-1.3,17.9l-1.6,24.6l16,1l19.6,1.1   l18,1.3l23.8,1.3l10.7-0.8l2.9,2.3l4.3,3l1,0.8l3.5-0.9l4-0.3l2.7-0.1l3.1,1.2l4.5,1.4l3.1,1.8l0.6,1.9l0.9,1.9l0.7-0.5   L646.8,303.2z',
                            }),
                            s.jsx('path', {
                              id: 'NE',
                              className: j.NE ? j.NE : R('NE'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Nebraska--5 Split EVs--'.concat(
                                E.NE
                              ),
                              d: 'M658.2,347l1.4,2.7l0.1,2.1l2.4,3.7l2.7,3.2h-5l-43.5-0.9l-40.8-0.9l-21.2-1l1.1-21.3l-33.4-2.7   l4.3-44l15.5,1L562,290l17.8,1.1l23.8,1.1l10.7-0.5l2.1,2.3l4.8,3l1.1,0.9l4.3-1.4l3.9-0.5l2.7-0.2l1.8,1.4l5,1.6l3,1.6l0.5,1.6   l0.9,2.1h1.8l0.8,0l1,5.2l2.7,8l1.2,4.6l2.1,3.8l0.5,4.9l1.4,4.3l0.5,6.5',
                            }),
                            s.jsx('path', {
                              id: 'IA',
                              className: j.IA ? j.IA : R('IA'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Iowa--6 EVs--'.concat(E.IA),
                              d: 'M740.6,301.6l0.2,1.9l2.3,1.1l1.1,1.3l0.3,1.3l3.9,3.2l0.7,2.2l-0.8,2.9l-1.5,3.5l-0.8,2.7   l-2.2,1.6l-1.7,0.6l-5.5,1.5l-0.7,2.3l-0.8,2.3l0.6,1.4l1.7,1.7l0,3.7l-2.2,1.6l-0.5,1.5v2.5l-1.5,0.5l-1.7,1.4l-0.5,1.5l0.5,1.7   l-1.4,1.2l-2.3-2.7l-1.5-2.6l-8.3,0.8l-10.2,0.6l-25,0.7l-13,0.2l-9.4,0.2l-1.3,0.1l-1.7-4.5l-0.2-6.6l-1.6-4.1l-0.7-5.3l-2.3-3.7   l-0.9-4.8l-2.7-7.5l-1.1-5.4l-1.4-2.2l-1.6-2.7l1.8-4.3l1.4-5.7l-2.7-2.1l-0.5-2.7l0.9-2.5h1.7h11.5l49.6-0.7l19.9-0.7l1.9,2.7   l1.8,2.6l0.5,0.8l-1.8,2.7l0.5,4.2l2.5,3.9l3,1.8l2.4,0.2L740.6,301.6z',
                            }),
                            s.jsx('path', {
                              id: 'MS',
                              className: j.MS ? j.MS : R('MS'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Mississippi--6 EVs--'.concat(E.MS),
                              d: 'M798.6,567l-0.3,1.3h-5.2l-1.5-0.8l-2.1-0.3l-6.8,1.9l-1.8-0.8l-2.6,4.2l-1.1,0.8l-1.1-2.5   l-1.1-3.9l-3.4-3.2l1.1-7.5l-0.7-0.9l-1.8,0.2l-8.2,0.7l-24.2,0.7l-0.5-1.6l0.7-8l3.4-6.2l5.3-9.1l-0.9-2.1h1.1l0.7-3.2l-2.3-1.8   l0.2-1.8l-2.1-4.6l-0.3-5.3l1.4-2.7l-0.4-4.3l-1.4-3l1.4-1.4l-1.4-2.1l0.5-1.8l0.9-6.2l3-2.7l-0.7-2.1l3.7-5.3l2.7-0.9v-2.5   l-0.7-1.4l2.7-5.3l2.7-1.1l0.1-3.4l8.7-0.1l24.1-1.9l4.6-0.2l0,6.4l0.2,16.7l-0.8,31l-0.2,14.1l2.7,18.8L798.6,567z',
                            }),
                            s.jsx('path', {
                              id: 'IN',
                              className: j.IN ? j.IN : R('IN'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Indiana--11 EVs--'.concat(E.IN),
                              d: 'M792.4,400.9l0.1-2.9l0.5-4.5l2.3-2.9l1.8-3.9l2.6-4.2l-0.5-5.8l-1.8-2.7l-0.3-3.2l0.8-5.5l-0.5-7   l-1.3-16l-1.3-15.4l-1-11.7l3.1,0.9l1.5,1l1.1-0.3l2.1-1.9l2.8-1.6l5.1-0.2l22-2.3l5.6-0.5l1.5,16l4.3,36.8l0.6,5.8L843,371   l1.2,1.8l0.1,1.4l-2.5,1.6l-3.5,1.6l-3.2,0.6l-0.6,4.9l-4.6,3.3l-2.8,4l0.3,2.4l-0.6,1.5h-3.3l-1.6-1.6l-2.5,1.3l-2.7,1.5l0.2,3.1   l-1.2,0.3l-0.5-1l-2.2-1.5l-3.3,1.3l-1.6,3l-1.4-0.8l-1.5-1.6l-4.5,0.5l-5.6,1L792.4,400.9z',
                            }),
                            s.jsx('path', {
                              id: 'IL',
                              className: j.IL ? j.IL : R('IL'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Illinois--19 EVs--'.concat(E.IL),
                              d: 'M791.8,401.6V398l0.3-4.9l2.4-3.1l1.8-3.8l2.6-3.9l-0.4-5.3l-2-3.5l-0.1-3.3l0.7-5.3l-0.8-7.2   l-1.1-15.8l-1.3-15l-0.9-11.6l-0.3-0.9l-0.8-2.6l-1.3-3.7l-1.6-1.8l-1.5-2.6l-0.2-5.5l-9.9,1.3l-27.2,1.7l-8.7-0.4l0.2,2.4l2.3,0.7   l0.9,1.1l0.5,1.8l3.9,3.4l0.7,2.3l-0.7,3.4l-1.8,3.7l-0.7,2.5l-2.3,1.8l-1.8,0.7l-5.3,1.4l-0.7,1.8L736,330l0.7,1.4l1.8,1.6   l-0.2,4.1l-1.8,1.6l-0.7,1.6v2.7l-1.8,0.5l-1.6,1.1l-0.2,1.4l0.2,2.1l-1.7,1.3l-1,2.8l0.5,3.7l2.3,7.3l7.3,7.5l5.5,3.7l-0.2,4.3   l0.9,1.4l6.4,0.5l2.7,1.4l-0.7,3.7l-2.3,5.9l-0.7,3.2l2.3,3.9l6.4,5.3l4.6,0.7l2.1,5l2.1,3.2l-0.9,3l1.6,4.1l1.8,2.1l1.9-0.8   l0.7-2.2l2-1.4l3.2-1.1l3.1,1.2l2.9,1.1l0.8-0.2l-0.1-1.2l-1.1-2.8l0.4-2.4l2.3-1.6l2.4-1l1.2-0.4l-0.6-1.3l-0.8-2.2l1.2-1.3   L791.8,401.6z',
                            }),
                            s.jsx('path', {
                              id: 'MN',
                              className: j.MN ? j.MN : R('MN'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Minnesota--10 EVs--'.concat(E.MN),
                              d: 'M645.9,228.5l-0.5-8.5l-1.8-7.3l-1.8-13.5l-0.5-9.8l-1.8-3.4l-1.6-5v-10.3l0.7-3.9l-1.8-5.5l30.1,0   l0.3-8.2l0.6-0.2l2.3,0.5l1.9,0.8l0.8,5.5l1.5,6.1l1.6,1.6h4.8l0.3,1.5l6.3,0.3v2.1h4.8l0.3-1.3l1.1-1.1l2.3-0.6l1.3,1h2.9l3.9,2.6   l5.3,2.4l2.4,0.5l0.5-1l1.5-0.5l0.5,2.9l2.6,1.3l0.5-0.5l1.3,0.2v2.1l2.6,1h3.1l1.6-0.8l3.2-3.2l2.6-0.5l0.8,1.8l0.5,1.3h1l1-0.8   l8.9-0.3l1.8,3.1h0.6l0.7-1.1l4.4-0.4l-0.6,2.3l-3.9,1.8l-9.2,4.1l-4.8,2l-3.1,2.6l-2.4,3.6l-2.3,3.9l-1.8,0.8l-4.5,5l-1.3,0.2   l-3.8,2.9l-2.8,3.2l-0.2,3l0.2,7.8l-1.6,1.6L704,228l-1.8,5.7l2.5,3.6l0.5,2.5l-1.1,3l-0.2,3.7l0.5,7.1l3.4,4.1h3l2.5,2.3l3.2,1.4   l3.7,5l7.1,5l1.8,2.1l0.2,5.5l-20.6,0.7l-60.2,0.5l-0.3-35.7l-0.5-3l-4.1-3.4l-1.1-1.8v-1.6l2.1-1.6l1.4-1.4L645.9,228.5z',
                            }),
                            s.jsx('path', {
                              id: 'WI',
                              className: j.WI ? j.WI : R('WI'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Wisconsin--10 EVs--'.concat(E.WI),
                              d: 'M786.9,297.2l0.4-3l-1.6-4.5l-0.6-6.1l-1.1-2.4l1-3.1l0.8-2.9l1.5-2.6l-0.6-3.4l-0.6-3.6l0.5-1.8   l1.9-2.4l0.2-2.7l-0.8-1.3l0.6-2.6l0.5-3.2l2.7-5.7l2.9-6.8l0.2-2.3l-0.3-1l-0.8,0.5l-4.2,6.3l-2.7,4l-1.9,1.8l-0.8,2.3l-1.5,0.8   l-1.1,1.9l-1.5-0.3l-0.2-1.8l1.3-2.4l2.1-4.7l1.8-1.6l1.1-2.3l-1.6-0.9l-1.4-1.4l-1.6-10.3l-3.7-1.1l-1.4-2.3l-12.6-2.7l-2.5-1.1   l-8.2-2.3l-8.2-1.1l-4.2-5.4l-0.5,1.3l-1.1-0.2l-0.6-1.1l-2.7-0.8l-1.1,0.2l-1.8,1l-1-0.6l0.6-1.9l1.9-3.1l1.1-1.1l-1.9-1.5   l-2.1,0.8l-2.9,1.9l-7.4,3.2l-2.9,0.6l-2.9-0.5l-1-0.9l-2.1,2.8l-0.2,2.7v8.5l-1.1,1.6l-5.3,3.9l-2.3,5.9l0.5,0.2l2.5,2.1l0.7,3.2   l-1.8,3.2v3.9l0.5,6.6l3,3h3.4l1.8,3.2l3.4,0.5l3.9,5.7l7.1,4.1l2.1,2.7l0.9,7.4l0.7,3.3l2.3,1.6l0.2,1.4l-2.1,3.4l0.2,3.2l2.5,3.9   l2.5,1.1l3,0.5l1.3,1.4l9.2,0l26.1-1.5L786.9,297.2z',
                            }),
                            s.jsx('path', {
                              id: 'MO',
                              className: j.MO ? j.MO : R('MO'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Missouri--10 EVs--'.concat(E.MO),
                              d: 'M729.8,349.5l-2.5-3.1l-1.1-2.3l-7.8,0.7l-9.8,0.5l-25.4,0.9l-13.5,0.2l-7.9,0.1l-2.3,0.1l1.3,2.5   l-0.2,2.3l2.5,3.9l3.1,4.1l3.1,2.7l2.3,0.2l1.4,0.9v3l-1.8,1.6l-0.5,2.3l2.1,3.4l2.5,3l2.5,1.8l1.4,11.7l-0.7,35.3l0.2,4.7l0.5,5.4   l23.4-0.1l23.2-0.7l20.8-0.8l11.7-0.2l2.2,3.4l-0.7,3.3l-3.1,2.4l-0.6,1.8l5.4,0.5l3.9-0.7l1.7-5.5l0.7-5.9l2.3-2l1.7-1.5l2.1-1   l0.1-2.9l0.6-1.7l-1-1.7l-2.7,0.1l-2.2-2.6l-1.4-4.2l0.8-2.5l-1.9-3.4l-1.8-4.6l-4.8-0.8l-7-5.6l-1.7-4.1l0.8-3.2l2.1-6.1l0.5-2.9   l-1.9-1l-6.9-0.8l-1-1.7l-0.1-4.2l-5.5-3.4l-7-7.8l-2.3-7.3l-0.2-4.2L729.8,349.5z',
                            }),
                            s.jsx('path', {
                              id: 'AR',
                              className: j.AR ? j.AR : R('AR'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Arkansas--6 EVs--'.concat(E.AR),
                              d: 'M765,445l-3.8,0.9l-6.2-0.5l0.7-3l3.2-2.7l0.5-2.3l-1.8-3l-11,0.5l-20.8,0.9l-23.3,0.7L679,437   l1.6,6.9v8.2l1.4,11l0.2,37.8l2.3,1.9l3-1.4l2.7,1.1l0.4,10.3l22.9-0.1l18.9-0.8l10.1-0.2l1.1-2.1l-0.3-3.5l-1.8-3l1.6-1.5   l-1.6-2.5l0.7-2.5l1.4-5.6l2.5-2.1l-0.7-2.3l3.7-5.4l2.7-1.4l-0.1-1.5l-0.3-1.8l2.9-5.6l2.4-1.3l0.4-3.4l1.8-1.2l0.9-4.2l-1.3-4   l4-2.4l0.6-2l1.2-4.3L765,445z',
                            }),
                            s.jsx('path', {
                              id: 'OK',
                              className: j.OK ? j.OK : R('OK'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Oklahoma--7 EVs--'.concat(E.OK),
                              d: 'M549.3,422.6l-10.7-0.5l-6.4-0.5l0.3,0.2l-0.7,10.4l22,1.4l32.1,1.3l-2.3,24.4l-0.5,17.8l0.2,1.6   l4.3,3.7l2.1,1.1l0.7-0.2l0.7-2.1l1.4,1.8h2.1v-1.4l2.7,1.4l-0.5,3.9l4.1,0.2l2.5,1.1l4.1,0.7l2.5,1.8l2.3-2.1l3.4,0.7l2.5,3.4h0.9   v2.3l2.3,0.7l2.3-2.3l1.8,0.7h2.5l0.9,2.5l4.8,1.8l1.4-0.7l1.8-4.1h1.1l1.1,2.1l4.1,0.7l3.7,1.4l3,0.9l1.8-0.9l0.7-2.5h4.3l2.1,0.9   l2.7-2.1h1.1l0.7,1.6h4.1l1.6-2.1l1.8,0.5l2.1,2.5l3.2,1.8l3.2,0.9l1.9,1.1l-0.4-37.2l-1.4-11l-0.2-8.9l-1.4-6.5l-0.8-7.2l-0.1-3.8   l-12.1,0.3l-46.4-0.5l-45-2.1L549.3,422.6z',
                            }),
                            s.jsx('path', {
                              id: 'KS',
                              className: j.KS ? j.KS : R('KS'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Kansas--6 EVs--'.concat(E.KS),
                              d: 'M677.4,425.1l-12.6,0.2l-46.1-0.5l-44.6-2.1l-24.6-1.3l4.1-64.7l21.8,0.8l40.5,1.4l44.1,0.5h5.1   l3.2,3.2l2.8,0.2l0.9,1.1v2l-1.8,1.6l-0.5,2.6l2.2,3.6l2.5,3.1l2.5,2l1.1,11.2L677.4,425.1z',
                            }),
                            s.jsx('path', {
                              id: 'LA',
                              className: j.LA ? j.LA : R('LA'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Louisiana--8 EVs--'.concat(E.LA),
                              d: 'M776.2,573l-1-2.6l-1.1-3.1l-3.3-3.5l0.9-6.8l-0.1-1.1l-1.3,0.3l-8.2,0.9l-25,0.5l-0.7-2.4l0.9-8.5   l3.3-5.9l5-8.7l-0.6-2.4l1.3-0.7l0.5-2l-2.3-2.1l-0.1-1.9l-1.8-4.3l-0.5-5.9l-9.7,0.1l-19.2,0.9l-22.2,0l0,9.6l0.7,9.4l0.7,3.9   l2.5,4.1l0.9,5l4.3,5.5l0.2,3.2l0.7,0.7l-0.7,8.5l-3,5l1.6,2.1l-0.7,2.5l-0.7,7.3l-1.4,3.2l0.1,3.6l4.7-1.5l8.1-0.3l10.3,3.6   l6.5,1.1l3.7-1.5l3.2,1.1l3.2,1l0.8-2.1l-3.2-1.1l-2.6,0.5l-2.7-1.6c0,0,0.2-1.3,0.8-1.5c0.6-0.2,3.1-1,3.1-1l1.8,1.5l1.8-1   l3.2,0.6l1.5,2.4l0.3,2.3l4.5,0.3l1.8,1.8l-0.8,1.6l-1.3,0.8l1.6,1.6l8.4,3.6l3.6-1.3l1-2.4l2.6-0.6l1.8-1.5l1.3,1l0.8,2.9   l-2.3,0.8l0.6,0.6l3.4-1.3l2.3-3.4l0.8-0.5l-2.1-0.3l0.8-1.6l-0.2-1.5l2.1-0.5l1.1-1.3l0.6,0.8c0,0-0.2,3.1,0.6,3.1   c0.8,0,4.2,0.6,4.2,0.6l4,1.9l1,1.5h2.9l1.1,1l2.3-3.1v-1.5h-1.3l-3.4-2.7l-5.8-0.8l-3.2-2.3l1.1-2.7l2.3,0.3l0.2-0.6l-1.8-1v-0.5   h3.2l1.8-3.1l-1.3-1.9l-0.3-2.7l-1.5,0.2l-1.9,2.1l-0.6,2.6l-3.1-0.6l-1-1.8l1.8-1.9l2-1.8L776.2,573z',
                            }),
                            s.jsx('path', {
                              id: 'VA',
                              className: j.VA ? j.VA : R('VA'),
                              onClick: D,
                              onMouseEnter: W,
                              onMouseLeave: P,
                              stroke: '#a9a9a9',
                              'data-info': 'Virginia--13 EVs--'.concat(E.VA),
                              d: 'M1002.9,369.2l-0.1-1.9l6.5-2.5l-0.8,3.2l-2.9,3.8l-0.4,4.6l0.5,3.4l-1.8,5l-2.2,1.9l-1.5-4.6   l0.4-5.4l1.6-4.2L1002.9,369.2z M1005.2,397.5L947,410.1l-37.4,5.3l-6.7-0.4l-2.6,1.9l-7.3,0.2l-8.4,1l-8.9,1l8.5-4.9l0-2.1   l1.5-2.1l10.6-11.5l3.9,4.5l3.8,1l2.5-1.1l2.2-1.3l2.5,1.3l3.9-1.4l1.9-4.6l2.6,0.5l2.9-2.1l1.8,0.5l2.8-3.7l0.3-2.1l-1-1.3l1-1.9   l5.3-12.3l0.6-5.7l1.2-0.5l2.2,2.4l3.9-0.3l1.9-7.6l2.8-0.6l1-2.7l2.6-2.3l1.3-2.3l1.5-3.4l0.1-5.1l9.8,3.8   c0.7,0.3,0.7-4.8,0.7-4.8l4.1,1.4l-0.5,2.6l8.2,2.9l1.3,1.8l-0.9,3.7l-1.3,1.3l-0.5,1.7l0.5,2.4l2,1.3l3.9,1.4l2.9,1l4.9,0.9   l2.2,2.1l3.2,0.4l0.9,1.2l-0.4,4.7l1.4,1.1l-0.5,1.9l1.2,0.8l-0.2,1.4l-2.7-0.1l0.1,1.6l2.3,1.5l0.1,1.4l1.8,1.8l0.5,2.5l-2.6,1.4   l1.6,1.5l5.8-1.7L1005.2,397.5z',
                            }),
                            s.jsxs(
                              'g',
                              e(
                                { id: 'DC-circle' },
                                {
                                  children: [
                                    s.jsx('path', {
                                      id: 'path58',
                                      fill: '#fff',
                                      d: 'M975.8,353.8l-1.1-1.6l-1-0.8l1.1-1.6l2.2,1.5L975.8,353.8z',
                                    }),
                                    s.jsx('circle', {
                                      id: 'DC',
                                      className: j.DC ? j.DC : R('DC'),
                                      onClick: function (l) {
                                        var e = l.target.id;
                                        t(
                                          ''
                                            .concat(e, '-')
                                            .concat(l.currentTarget.classList)
                                        );
                                      },
                                      onMouseEnter: function (l) {
                                        var e = l.target.id;
                                        k(e), N(l.currentTarget.dataset.info);
                                      },
                                      onMouseLeave: P,
                                      'data-info':
                                        'Washington, D.C.--3 EVs--'.concat(
                                          E.DC
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
                    s.jsx('path', {
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
  k = function (a) {
    var t = a.currentPVTotals,
      n = a.evs,
      o = a.handlePropVotes,
      r = a.hasClearedSavedData,
      i = a.name,
      c = a.party,
      d = a.percent,
      u = a.stateEvs,
      p = Number(d) > 0 ? d : '',
      f = l.useState(0),
      v = f[0],
      m = f[1],
      h = l.useState(p),
      g = h[0],
      y = h[1],
      b = l.useState(''),
      k = b[0],
      M = b[1],
      x = ''.concat(c, 'PopVoteInput'),
      N = ''.concat(c.toUpperCase(), ' %');
    l.useEffect(
      function () {
        'true' === r && y('');
      },
      [r]
    );
    var C = function (l, e) {
      var a = null == l ? void 0 : l.target,
        r = null == a ? void 0 : a.value,
        s = e ? Number(e) : a ? Number(r) : 0,
        c = null != u ? u : n;
      'Maine' === i ? (c = '4') : 'Nebraska' === i && (c = '5');
      var p = Boolean(s) || d ? s / 100 : 0,
        f = Math.round(Number(c) * p),
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
        b = t[4];
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
            b += f;
        }
        var k = [m, h, g, y, b];
        if (a) a.setAttribute('data-evsawarded', String(f)), o(k);
        else if (d) return f;
      }
    };
    return s.jsx(
      'div',
      e(
        { className: 'pvInputWrapper' },
        {
          children: s.jsx('input', {
            className: 'pvInput',
            'data-evsawarded': String(C(null, g)),
            'data-party': c,
            'data-statename': i,
            defaultValue: g,
            id: x,
            onBlur: function (l) {
              l.persist();
              var e = l.currentTarget.value;
              '' !== g && '' === e ? (y(k), C(null, k)) : C(l);
            },
            onChange: function (l) {
              var e = l.target;
              y(e.value);
            },
            onFocus: function (l) {
              var e = Number(l.currentTarget.dataset.evsawarded),
                a = isNaN(e) ? v : e;
              l.persist(),
                m(a),
                M(g),
                y(''),
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
            type: 'text',
          }),
        }
      )
    );
  },
  M = ['gop', 'dem', 'lib', 'grn', 'ind'],
  x = [
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
  N = function (a) {
    var t = a.currentPVTotals,
      n = a.evs,
      o = a.handlePropVotes,
      r = a.hasClearedSavedData,
      i = a.name,
      c = a.popVotesData,
      d = a.showPopVotes,
      u = a.stateEvs,
      p = c ? c.values : ['0', '0', '0', '0', '0'],
      f = d ? '' : 'hide',
      v = l.useState(r),
      m = v[0],
      h = v[1];
    l.useEffect(
      function () {
        h(r);
      },
      [r]
    );
    return s.jsx(
      'div',
      e(
        { className: 'popVotesWrapper '.concat(f) },
        {
          children: p.map(function (l, e) {
            return s.jsx(
              k,
              {
                currentPVTotals: t,
                evs: n,
                handlePropVotes: o,
                hasClearedSavedData: m,
                name: i,
                party: M[e],
                percent: 'true' === m ? '0' : c && l,
                stateEvs: u,
              },
              ''.concat(i, '-').concat(M[e])
            );
          }),
        }
      )
    );
  },
  C = function (a) {
    var t = a.evs,
      n = a.isFromStorage,
      o = a.name,
      r = a.stateClickedFromMap,
      i = a.stateCode,
      c = a.stateEvs,
      d = a.toggleWinner,
      u = a.winner,
      f = l.useRef(null),
      v = l.useState(n ? Number(u) : 0),
      m = v[0],
      h = v[1],
      g = l.useState(p(u)),
      y = g[0],
      b = g[1];
    l.useEffect(
      function () {
        var l;
        'false' !== r &&
          (null === (l = null == f ? void 0 : f.current) ||
            void 0 === l ||
            l.click());
      },
      [r]
    );
    return (
      l.useEffect(
        function () {
          '0' === u && (h(0), b(''));
        },
        [u]
      ),
      s.jsxs(
        'div',
        e(
          { className: 'stateWrapper', id: o.trim() },
          {
            children: [
              s.jsx(
                'div',
                e(
                  {
                    className: 'state '.concat(y),
                    'data-evs': t,
                    'data-stateevs': c,
                    'data-fromstorage': n,
                    'data-statecode': i,
                    'data-statename': o,
                    'data-winner': m,
                    onClick: function (l) {
                      var e = 5 === m ? 0 : m + 1,
                        a = '';
                      switch (e) {
                        case 1:
                          a = 'gop';
                          break;
                        case 2:
                          a = 'dem';
                          break;
                        case 3:
                          a = 'lib';
                          break;
                        case 4:
                          a = 'grn';
                          break;
                        case 5:
                          a = 'ind';
                          break;
                        default:
                          a = '';
                      }
                      var n = {
                        evs: parseInt(t),
                        newWinningParty: String(e),
                        stateId: l.currentTarget.dataset.statecode,
                      };
                      h(e), b(a), d(n);
                    },
                    ref: f,
                    tabIndex: 0,
                  },
                  {
                    children: s.jsx(
                      'span',
                      e({ className: 'evs' }, { children: t })
                    ),
                  }
                )
              ),
              s.jsx('p', e({ className: 'stateName' }, { children: o })),
            ],
          }
        )
      )
    );
  },
  E = function (a) {
    var t = a.currentEVTotals,
      n = a.currentPVTotals,
      o = a.handlePropVotes,
      r = a.handleStateWinner,
      i = a.hasClearedSavedData,
      c = a.isFromStorage,
      p = a.mapSize,
      f = a.popVotesData,
      v = a.stateControlSize,
      m = a.statesData,
      h = 'Hide Popular Votes',
      g = l.useState(h),
      y = g[0],
      k = g[1],
      M = l.useState(!0),
      x = M[0],
      E = M[1],
      S = l.useState(m),
      w = S[0],
      j = S[1],
      L = l.useState(null),
      V = L[0],
      T = L[1],
      A = l.useState(u(m)),
      I = A[0],
      z = A[1],
      O = l.useState(''),
      D = O[0],
      W = O[1],
      P = l.useState(i),
      R = P[0],
      _ = P[1],
      F = l.useState(i),
      H = F[0],
      K = F[1];
    l.useEffect(
      function () {
        j(m), z(u(m));
      },
      [u, z, j, m]
    ),
      l.useEffect(
        function () {
          _(i), K(i);
        },
        [i]
      );
    var $,
      Y = function (l) {
        var a,
          n = t[0],
          o = t[1],
          s = t[2],
          i = t[3],
          c = t[4];
        switch (l.newWinningParty) {
          case '1':
            n += l.evs;
            break;
          case '2':
            (o += l.evs), (n -= l.evs);
            break;
          case '3':
            (s += l.evs), (o -= l.evs);
            break;
          case '4':
            (i += l.evs), (s -= l.evs);
            break;
          case '5':
            (c += l.evs), (i -= l.evs);
            break;
          default:
            c -= l.evs;
        }
        r([n, o, s, i, c]);
        var u = (((a = {})[l.stateId] = d(l.newWinningParty)), a);
        T({ newWinningParty: l.newWinningParty, stateId: l.stateId }),
          z(e(e({}, I), u));
      };
    return s.jsxs(
      'div',
      e(
        { className: 'statesPopVotes' },
        {
          children: [
            s.jsx(b, {
              handleMapStateClick: function (l) {
                W(l);
              },
              hasClearedSavedData: R,
              mapSize: p,
              newStateData: V,
              stateWinnerNames: I,
              statesData: w,
            }),
            s.jsxs(
              'div',
              e(
                { className: 'statesWrapper' },
                {
                  children: [
                    s.jsx(
                      'button',
                      e(
                        {
                          type: 'button',
                          onClick: function () {
                            var l = h;
                            x && (l = 'Show Popular Votes'), k(l), E(!x);
                          },
                        },
                        { children: y }
                      )
                    ),
                    (($ = D),
                    w.map(function (l, a) {
                      var t, r;
                      return -1 === l.name.indexOf('-CD')
                        ? s.jsxs(
                            'div',
                            e(
                              { className: 'state-control '.concat(v) },
                              {
                                children: [
                                  s.jsx(C, {
                                    evs: l.evs,
                                    isFromStorage: c,
                                    name: l.name,
                                    stateClickedFromMap:
                                      (null == $ ? void 0 : $.split('-')[0]) ===
                                      l.stateCode
                                        ? $
                                        : 'false',
                                    stateCode: l.stateCode,
                                    stateEvs: l.stateEvs,
                                    toggleWinner: Y,
                                    winner:
                                      null !== (t = l.winner) && void 0 !== t
                                        ? t
                                        : '0',
                                  }),
                                  s.jsx(N, {
                                    currentPVTotals: n,
                                    evs: l.evs,
                                    handlePropVotes: o,
                                    hasClearedSavedData: H,
                                    name: l.name,
                                    popVotesData: null == f ? void 0 : f[a],
                                    stateEvs: l.stateEvs,
                                    showPopVotes: x,
                                  }),
                                ],
                              }
                            ),
                            'state-'.concat(a)
                          )
                        : s.jsx(
                            'div',
                            e(
                              { className: 'state-control '.concat(v) },
                              {
                                children: s.jsx(C, {
                                  evs: l.evs,
                                  isFromStorage: c,
                                  name: l.name,
                                  stateClickedFromMap: 'false',
                                  stateCode: l.stateCode,
                                  stateEvs: l.stateEvs,
                                  toggleWinner: Y,
                                  winner:
                                    null !== (r = l.winner) && void 0 !== r
                                      ? r
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
  S = [],
  w = [];
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
      var r = S.indexOf(o);
      -1 === r && ((r = S.push(o) - 1), (w[r] = {})),
        (a = w[r] && w[r][t] ? w[r][t] : (w[r][t] = s()));
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
  '.electoral-college-root {\n  font-family: Helvetica;\n}\n\n.candidatesWrapper {\n  display: flex;\n  justify-content: space-around;\n  text-align: center;\n}\n.candidatesWrapper.sticky {\n  background-color: #fff;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n}\n.candidatesWrapper.sticky h2 {\n  font-size: 1.35em;\n  margin-block: 0.5em;\n}\n.candidatesWrapper.sticky .candidate {\n  height: 100%;\n  margin: 0;\n}\n.candidatesWrapper.sticky img {\n  display: none;\n}\n.candidatesWrapper.sticky .electoralVotes {\n  font-size: 25px;\n  height: 30px;\n}\n.candidatesWrapper.sticky .electoralVotesLabel {\n  margin-block: 0.5em;\n}\n\n.candidate {\n  margin: 10px;\n}\n.candidate img {\n  height: 100px;\n}\n\n.candidate-gop,\n.gop-votes {\n  background-color: rgba(255, 0, 0, 0.75);\n}\n\n.candidate-dem,\n.dem-votes {\n  background-color: rgba(0, 70, 255, 0.75);\n}\n\n.candidate-lib,\n.lib-votes {\n  background-color: rgba(255, 215, 0, 0.75);\n}\n\n.candidate-grn,\n.grn-votes {\n  background-color: rgba(0, 200, 0, 0.75);\n}\n\n.candidate-ind,\n.ind-votes {\n  background-color: #d3d3d3;\n}\n\n.electoralVotesWrapper {\n  font-size: 35px;\n  margin-top: 5px;\n}\n\n.electoralVotesLabel {\n  font-size: 16px;\n}\n\n.electoralVotes {\n  background-color: #ffffff;\n  border: 1px solid #000000;\n  display: flex;\n  height: 40px;\n  justify-content: space-around;\n}\n\n.electoralVotes#gop-wta,\n.electoralVotes#gop-prop {\n  color: rgba(255, 0, 0, 0.75);\n}\n\n.electoralVotes#dem-wta,\n.electoralVotes#dem-prop {\n  color: rgba(0, 70, 255, 0.75);\n}\n\n.electoralVotes#lib-wta,\n.electoralVotes#lib-prop {\n  color: rgba(255, 215, 0, 0.75);\n}\n\n.electoralVotes#grn-wta,\n.electoralVotes#grn-prop {\n  color: rgba(0, 200, 0, 0.75);\n}\n\n.electoralVotes#ind-wta,\n.electoralVotes#ind-prop {\n  color: #d3d3d3;\n}\n\n.votes-winner-line {\n  border-top: 15px solid #000000;\n  border-right: 15px solid transparent;\n  border-left: 15px solid transparent;\n  height: 0px;\n  width: 0px;\n  margin: 0 auto 1px;\n}\n\n.votes-parties {\n  border: 1px solid #777777;\n  height: 20px;\n}\n\n.votes-parties > span {\n  display: inline-block;\n  height: inherit;\n}\n\n.statesWrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  margin-top: 10px;\n}\n.statesWrapper button {\n  cursor: pointer;\n}\n\n.state-control {\n  flex: 0;\n  margin-top: 10px;\n}\n.state-control .state {\n  background-color: transparent;\n  border: 1px solid #000000;\n  border-radius: 3px;\n  cursor: pointer;\n  height: 30px;\n  margin: 0 auto;\n  width: 100px;\n}\n.state-control.small .state {\n  width: 70px;\n}\n.state-control.small .evs {\n  font-size: 20px;\n}\n.state-control.small .stateName {\n  font-size: 0.75em;\n  height: 25px;\n}\n.state-control.small .pvInput {\n  width: 85%;\n}\n.state-control.medium .pvInput {\n  width: 90%;\n}\n\n.stateWrapper {\n  margin: 5px;\n  text-align: center;\n}\n\n.wta-winner,\n.prop-winner {\n  background-color: none;\n  border: 1px solid #000000;\n  border-radius: 3px;\n}\n\n.state.gop,\n.wta-winner.gop,\n.prop-winner.gop {\n  background-color: rgba(255, 0, 0, 0.75);\n  border: 1px solid rgba(255, 0, 0, 0.75);\n}\n\n.state.dem,\n.wta-winner.dem,\n.prop-winner.dem {\n  background-color: rgba(0, 70, 255, 0.75);\n  border: 1px solid rgba(0, 70, 255, 0.75);\n}\n\n.state.lib,\n.wta-winner.lib,\n.prop-winner.lib {\n  background-color: rgba(255, 215, 0, 0.75);\n  border: 1px solid rgba(255, 215, 0, 0.75);\n}\n\n.state.grn,\n.wta-winner.grn,\n.wta-winner.grn {\n  background-color: rgba(0, 200, 0, 0.75);\n  border: 1px solid rgba(0, 200, 0, 0.75);\n}\n\n.state.ind,\n.wta-winner.ind,\n.prop-winner.ind {\n  background-color: #d3d3d3;\n  border: 1px solid #d3d3d3;\n}\n\n.evs {\n  font-size: 22px;\n  position: relative;\n  top: 10%;\n}\n\n.pvInputWrapper {\n  margin-bottom: 3px;\n}\n\n.pvInput {\n  border-radius: 3px;\n  border: 2px solid;\n}\n.pvInput[data-party=gop] {\n  border-color: rgba(255, 0, 0, 0.75);\n}\n.pvInput[data-party=dem] {\n  border-color: rgba(0, 70, 255, 0.75);\n}\n.pvInput[data-party=lib] {\n  border-color: rgba(255, 215, 0, 0.75);\n}\n.pvInput[data-party=grn] {\n  border-color: rgba(0, 200, 0, 0.75);\n}\n.pvInput[data-party=ind] {\n  border-color: #d3d3d3;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n#buttons .show {\n  display: inline-block;\n}\n\n.buttonWrapper {\n  display: inline-block;\n  margin: 10px 20px 0 0;\n}\n.buttonWrapper button {\n  border: 0;\n  cursor: pointer;\n  display: block;\n  font-family: Helvetica;\n  font-size: 30px;\n}\n\n#saveButton {\n  background-color: #00ff00;\n}\n\n#clearButton {\n  background-color: #ff0000;\n}\n\n#map-wrapper {\n  position: relative;\n}\n#map-wrapper button {\n  margin: 20px;\n  padding: 20px;\n}\n\n#us-map {\n  display: block;\n}\n#us-map.hide {\n  display: none;\n}\n#us-map.small {\n  height: 50%;\n  width: 50%;\n}\n#us-map.medium {\n  height: 75%;\n  width: 75%;\n}\n#us-map.large {\n  height: 100%;\n  width: 100%;\n}\n\npath:hover,\ncircle:hover {\n  stroke: #000 !important;\n  stroke-width: 2px;\n  stroke-linejoin: round;\n  fill: #fff;\n  cursor: pointer;\n}\n\n#path67 {\n  fill: none !important;\n  stroke: #a9a9a9 !important;\n  cursor: default;\n}\n\n#info-box {\n  background-color: #ffffff;\n  border: 5px solid rgba(0, 0, 0, 0.75);\n  border-radius: 5px;\n  display: none;\n  font-family: arial;\n  padding: 5px 20px;\n  position: fixed;\n  right: 0;\n  top: 0;\n  width: 20%;\n  z-index: 1000;\n}\n#info-box.show {\n  display: block;\n}\n#info-box.gop {\n  border-color: rgba(255, 0, 0, 0.75);\n}\n#info-box.dem {\n  border-color: rgba(0, 70, 255, 0.75);\n}\n#info-box.lib {\n  border-color: rgba(255, 215, 0, 0.75);\n}\n#info-box.grn {\n  border-color: rgba(0, 200, 0, 0.75);\n}\n#info-box.ind {\n  border-color: #d3d3d3;\n}\n\nsvg path,\ncircle,\npath:hover,\ncircle:hover {\n  fill: #fff;\n}\n\nsvg .gop,\npath.gop:hover,\ncircle.gop:hover {\n  fill: rgba(255, 0, 0, 0.75);\n}\n\nsvg .dem,\npath.dem:hover,\ncircle.dem:hover {\n  fill: rgba(0, 70, 255, 0.75);\n}\n\nsvg .lib,\npath.lib:hover,\ncircle.lib:hover {\n  fill: rgba(255, 215, 0, 0.75);\n}\n\nsvg .grn,\npath.grn:hover,\ncircle.grn:hover {\n  fill: rgba(0, 200, 0, 0.75);\n}\n\nsvg .ind,\npath.ind:hover,\ncircle.ind:hover {\n  fill: #d3d3d3;\n}',
  {}
);
module.exports = function (a) {
  var t = a.candidateImageSources,
    n = a.candidatesData,
    o = a.enableStickyEVCounter,
    r = void 0 === o || o,
    c = a.mapSize,
    d = void 0 === c ? 'large' : c,
    u = a.stateControlSize,
    p = void 0 === u ? 'large' : u,
    f = l.useState(
      Boolean(
        null === localStorage || void 0 === localStorage
          ? void 0
          : localStorage.getItem('ElectoralCollegeStatus')
      )
    ),
    v = f[0],
    m = f[1],
    b = v
      ? JSON.parse(
          null === localStorage || void 0 === localStorage
            ? void 0
            : localStorage.getItem('WinnerTakeAllTotals')
        )
      : [0, 0, 0, 0, 0],
    k = l.useState(
      v
        ? JSON.parse(
            null === localStorage || void 0 === localStorage
              ? void 0
              : localStorage.getItem('PopularVoteTotals')
          )
        : [0, 0, 0, 0, 0]
    ),
    M = k[0],
    N = k[1],
    C = l.useState(b[0]),
    S = C[0],
    w = C[1],
    j = l.useState(b[1]),
    L = j[0],
    V = j[1],
    T = l.useState(b[2]),
    A = T[0],
    I = T[1],
    z = l.useState(b[3]),
    O = z[0],
    D = z[1],
    W = l.useState(b[4]),
    P = W[0],
    R = W[1],
    _ = l.useState([S, L, A, O, P]),
    F = _[0],
    H = _[1],
    K = l.useState(
      F.map(function (l) {
        return i(l);
      })
    ),
    $ = K[0],
    Y = K[1],
    J = l.useState(
      M.map(function (l) {
        return i(l);
      })
    ),
    U = J[0],
    B = J[1],
    G = l.useState(!1),
    X = G[0],
    q = G[1],
    Z = l.useState(!1),
    Q = Z[0],
    ll = Z[1],
    el = l.useState('false'),
    al = el[0],
    tl = el[1],
    nl = l.useState(
      v ? JSON.parse(localStorage.getItem('ElectoralCollegeStatus')) : x
    ),
    ol = nl[0],
    rl = nl[1],
    sl = l.useState(
      v ? JSON.parse(localStorage.getItem('PopularVoteStatus')) : []
    ),
    il = sl[0],
    cl = sl[1];
  l.useEffect(function () {
    r &&
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
      });
  }),
    l.useEffect(
      function () {
        ll(Q);
      },
      [Q]
    ),
    l.useEffect(
      function () {
        q(X);
      },
      [X]
    );
  var dl = function (l) {
      var e = i(l[0]),
        a = i(l[1]),
        t = i(l[2]),
        n = i(l[3]),
        o = i(l[4]);
      N(l), B([e, a, t, n, o]);
    },
    ul = function (l) {
      var e = i(l[0]),
        a = i(l[1]),
        t = i(l[2]),
        n = i(l[3]),
        o = i(l[4]);
      w(l[0]), V(l[1]), I(l[2]), D(l[3]), R(l[4]), H(l), Y([e, a, t, n, o]);
    };
  return s.jsxs(
    'div',
    e(
      { className: 'electoral-college-root' },
      {
        children: [
          s.jsx(h, {
            candidateImageSources: t,
            candidates: n,
            evPct: $,
            pvPct: U,
            popVoteTotals: M,
            winnerTakeAllTotals: F,
          }),
          s.jsx(E, {
            currentEVTotals: F,
            currentPVTotals: M,
            handlePropVotes: dl,
            handleStateWinner: ul,
            hasClearedSavedData: al,
            isFromStorage: v,
            mapSize: d,
            popVotesData: il,
            stateControlSize: p,
            statesData: ol,
          }),
          'undefined' != typeof Storage &&
            s.jsxs(
              'div',
              e(
                { id: 'buttons' },
                {
                  children: [
                    s.jsx(y, {
                      currentEVTotals: F,
                      currentPVTotals: M,
                      handleSave: function () {
                        rl(
                          JSON.parse(
                            localStorage.getItem('ElectoralCollegeStatus')
                          )
                        ),
                          m(!0),
                          ll(!1),
                          q(!0),
                          setTimeout(function () {
                            return q(!1);
                          }, 3e3);
                      },
                    }),
                    v &&
                      s.jsx(g, {
                        handleClear: function () {
                          localStorage.removeItem('ElectoralCollegeStatus'),
                            localStorage.removeItem('PopularVoteStatus'),
                            localStorage.removeItem('PopularVoteTotals'),
                            localStorage.removeItem('WinnerTakeAllTotals'),
                            ul([0, 0, 0, 0, 0]),
                            dl([0, 0, 0, 0, 0]),
                            rl(x),
                            cl([]),
                            N([0, 0, 0, 0, 0]),
                            tl('true'),
                            m(!1),
                            q(!1),
                            ll(!0),
                            setTimeout(function () {
                              ll(!1), tl('false');
                            }, 3e3);
                        },
                      }),
                    s.jsx(
                      'p',
                      e(
                        { className: ''.concat(X ? 'show' : 'hide') },
                        { children: 'Saved!' }
                      )
                    ),
                    s.jsx(
                      'p',
                      e(
                        { className: ''.concat(Q ? 'show' : 'hide') },
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
