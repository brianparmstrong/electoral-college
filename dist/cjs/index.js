'use strict';
var e = require('react');
'function' == typeof SuppressedError && SuppressedError;
var n,
  r = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var t,
  o = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'production' === process.env.NODE_ENV
  ? (function () {
      if (n) return r;
      n = 1;
      var t = e,
        o = Symbol.for('react.element'),
        a = Symbol.for('react.fragment'),
        i = Object.prototype.hasOwnProperty,
        s =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = { key: !0, ref: !0, __self: !0, __source: !0 };
      function p(e, n, r) {
        var t,
          a = {},
          p = null,
          c = null;
        for (t in (void 0 !== r && (p = '' + r),
        void 0 !== n.key && (p = '' + n.key),
        void 0 !== n.ref && (c = n.ref),
        n))
          i.call(n, t) && !l.hasOwnProperty(t) && (a[t] = n[t]);
        if (e && e.defaultProps)
          for (t in (n = e.defaultProps)) void 0 === a[t] && (a[t] = n[t]);
        return {
          $$typeof: o,
          type: e,
          key: p,
          ref: c,
          props: a,
          _owner: s.current,
        };
      }
      (r.Fragment = a), (r.jsx = p), (r.jsxs = p);
    })()
  : t ||
    ((t = 1),
    'production' !== process.env.NODE_ENV &&
      (function () {
        var n = e,
          r = Symbol.for('react.element'),
          t = Symbol.for('react.portal'),
          a = Symbol.for('react.fragment'),
          i = Symbol.for('react.strict_mode'),
          s = Symbol.for('react.profiler'),
          l = Symbol.for('react.provider'),
          p = Symbol.for('react.context'),
          c = Symbol.for('react.forward_ref'),
          u = Symbol.for('react.suspense'),
          f = Symbol.for('react.suspense_list'),
          d = Symbol.for('react.memo'),
          y = Symbol.for('react.lazy'),
          g = Symbol.for('react.offscreen'),
          b = Symbol.iterator,
          v = '@@iterator',
          m = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function h(e) {
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), t = 1;
            t < n;
            t++
          )
            r[t - 1] = arguments[t];
          !(function (e, n, r) {
            var t = m.ReactDebugCurrentFrame.getStackAddendum();
            '' !== t && ((n += '%s'), (r = r.concat([t])));
            var o = r.map(function (e) {
              return String(e);
            });
            o.unshift('Warning: ' + n),
              Function.prototype.apply.call(console[e], console, o);
          })('error', e, r);
        }
        var k,
          w = !1,
          x = !1,
          _ = !1,
          S = !1,
          j = !1;
        function O(e) {
          return e.displayName || 'Context';
        }
        function E(e) {
          if (null == e) return null;
          if (
            ('number' == typeof e.tag &&
              h(
                'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
              ),
            'function' == typeof e)
          )
            return e.displayName || e.name || null;
          if ('string' == typeof e) return e;
          switch (e) {
            case a:
              return 'Fragment';
            case t:
              return 'Portal';
            case s:
              return 'Profiler';
            case i:
              return 'StrictMode';
            case u:
              return 'Suspense';
            case f:
              return 'SuspenseList';
          }
          if ('object' == typeof e)
            switch (e.$$typeof) {
              case p:
                return O(e) + '.Consumer';
              case l:
                return O(e._context) + '.Provider';
              case c:
                return (function (e, n, r) {
                  var t = e.displayName;
                  if (t) return t;
                  var o = n.displayName || n.name || '';
                  return '' !== o ? r + '(' + o + ')' : r;
                })(e, e.render, 'ForwardRef');
              case d:
                var n = e.displayName || null;
                return null !== n ? n : E(e.type) || 'Memo';
              case y:
                var r = e,
                  o = r._payload,
                  g = r._init;
                try {
                  return E(g(o));
                } catch (e) {
                  return null;
                }
            }
          return null;
        }
        k = Symbol.for('react.module.reference');
        var R,
          T,
          P,
          $,
          C,
          N,
          I,
          D = Object.assign,
          W = 0;
        function F() {}
        F.__reactDisabledLog = !0;
        var V,
          z = m.ReactCurrentDispatcher;
        function A(e, n, r) {
          if (void 0 === V)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              V = (t && t[1]) || '';
            }
          return '\n' + V + e;
        }
        var L,
          U = !1,
          B = 'function' == typeof WeakMap ? WeakMap : Map;
        function M(e, n) {
          if (!e || U) return '';
          var r,
            t = L.get(e);
          if (void 0 !== t) return t;
          U = !0;
          var o,
            a = Error.prepareStackTrace;
          (Error.prepareStackTrace = void 0),
            (o = z.current),
            (z.current = null),
            (function () {
              if (0 === W) {
                (R = console.log),
                  (T = console.info),
                  (P = console.warn),
                  ($ = console.error),
                  (C = console.group),
                  (N = console.groupCollapsed),
                  (I = console.groupEnd);
                var e = {
                  configurable: !0,
                  enumerable: !0,
                  value: F,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  info: e,
                  log: e,
                  warn: e,
                  error: e,
                  group: e,
                  groupCollapsed: e,
                  groupEnd: e,
                });
              }
              W++;
            })();
          try {
            if (n) {
              var i = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(i.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(i, []);
                } catch (e) {
                  r = e;
                }
                Reflect.construct(e, [], i);
              } else {
                try {
                  i.call();
                } catch (e) {
                  r = e;
                }
                e.call(i.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (n) {
            if (n && r && 'string' == typeof n.stack) {
              for (
                var s = n.stack.split('\n'),
                  l = r.stack.split('\n'),
                  p = s.length - 1,
                  c = l.length - 1;
                p >= 1 && c >= 0 && s[p] !== l[c];

              )
                c--;
              for (; p >= 1 && c >= 0; p--, c--)
                if (s[p] !== l[c]) {
                  if (1 !== p || 1 !== c)
                    do {
                      if ((p--, --c < 0 || s[p] !== l[c])) {
                        var u = '\n' + s[p].replace(' at new ', ' at ');
                        return (
                          e.displayName &&
                            u.includes('<anonymous>') &&
                            (u = u.replace('<anonymous>', e.displayName)),
                          'function' == typeof e && L.set(e, u),
                          u
                        );
                      }
                    } while (p >= 1 && c >= 0);
                  break;
                }
            }
          } finally {
            (U = !1),
              (z.current = o),
              (function () {
                if (0 == --W) {
                  var e = { configurable: !0, enumerable: !0, writable: !0 };
                  Object.defineProperties(console, {
                    log: D({}, e, { value: R }),
                    info: D({}, e, { value: T }),
                    warn: D({}, e, { value: P }),
                    error: D({}, e, { value: $ }),
                    group: D({}, e, { value: C }),
                    groupCollapsed: D({}, e, { value: N }),
                    groupEnd: D({}, e, { value: I }),
                  });
                }
                W < 0 &&
                  h(
                    'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
                  );
              })(),
              (Error.prepareStackTrace = a);
          }
          var f = e ? e.displayName || e.name : '',
            d = f ? A(f) : '';
          return 'function' == typeof e && L.set(e, d), d;
        }
        function Y(e, n, r) {
          if (null == e) return '';
          if ('function' == typeof e)
            return M(e, !(!(t = e.prototype) || !t.isReactComponent));
          var t;
          if ('string' == typeof e) return A(e);
          switch (e) {
            case u:
              return A('Suspense');
            case f:
              return A('SuspenseList');
          }
          if ('object' == typeof e)
            switch (e.$$typeof) {
              case c:
                return M(e.render, !1);
              case d:
                return Y(e.type, n, r);
              case y:
                var o = e,
                  a = o._payload,
                  i = o._init;
                try {
                  return Y(i(a), n, r);
                } catch (e) {}
            }
          return '';
        }
        L = new B();
        var q = Object.prototype.hasOwnProperty,
          K = {},
          H = m.ReactDebugCurrentFrame;
        function J(e) {
          if (e) {
            var n = e._owner,
              r = Y(e.type, e._source, n ? n.type : null);
            H.setExtraStackFrame(r);
          } else H.setExtraStackFrame(null);
        }
        var X = Array.isArray;
        function G(e) {
          return X(e);
        }
        function Q(e) {
          return '' + e;
        }
        function Z(e) {
          if (
            (function (e) {
              try {
                return Q(e), !1;
              } catch (e) {
                return !0;
              }
            })(e)
          )
            return (
              h(
                'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                (function (e) {
                  return (
                    ('function' == typeof Symbol &&
                      Symbol.toStringTag &&
                      e[Symbol.toStringTag]) ||
                    e.constructor.name ||
                    'Object'
                  );
                })(e)
              ),
              Q(e)
            );
        }
        var ee,
          ne,
          re,
          te = m.ReactCurrentOwner,
          oe = { key: !0, ref: !0, __self: !0, __source: !0 };
        re = {};
        var ae = function (e, n, t, o, a, i, s) {
          var l = {
            $$typeof: r,
            type: e,
            key: n,
            ref: t,
            props: s,
            _owner: i,
            _store: {},
          };
          return (
            Object.defineProperty(l._store, 'validated', {
              configurable: !1,
              enumerable: !1,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(l, '_self', {
              configurable: !1,
              enumerable: !1,
              writable: !1,
              value: o,
            }),
            Object.defineProperty(l, '_source', {
              configurable: !1,
              enumerable: !1,
              writable: !1,
              value: a,
            }),
            Object.freeze && (Object.freeze(l.props), Object.freeze(l)),
            l
          );
        };
        function ie(e, n, r, t, o) {
          var a,
            i = {},
            s = null,
            l = null;
          for (a in (void 0 !== r && (Z(r), (s = '' + r)),
          (function (e) {
            if (q.call(e, 'key')) {
              var n = Object.getOwnPropertyDescriptor(e, 'key').get;
              if (n && n.isReactWarning) return !1;
            }
            return void 0 !== e.key;
          })(n) && (Z(n.key), (s = '' + n.key)),
          (function (e) {
            if (q.call(e, 'ref')) {
              var n = Object.getOwnPropertyDescriptor(e, 'ref').get;
              if (n && n.isReactWarning) return !1;
            }
            return void 0 !== e.ref;
          })(n) &&
            ((l = n.ref),
            (function (e, n) {
              if (
                'string' == typeof e.ref &&
                te.current &&
                n &&
                te.current.stateNode !== n
              ) {
                var r = E(te.current.type);
                re[r] ||
                  (h(
                    'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                    E(te.current.type),
                    e.ref
                  ),
                  (re[r] = !0));
              }
            })(n, o)),
          n))
            q.call(n, a) && !oe.hasOwnProperty(a) && (i[a] = n[a]);
          if (e && e.defaultProps) {
            var p = e.defaultProps;
            for (a in p) void 0 === i[a] && (i[a] = p[a]);
          }
          if (s || l) {
            var c =
              'function' == typeof e ? e.displayName || e.name || 'Unknown' : e;
            s &&
              (function (e, n) {
                var r = function () {
                  ee ||
                    ((ee = !0),
                    h(
                      '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                      n
                    ));
                };
                (r.isReactWarning = !0),
                  Object.defineProperty(e, 'key', { get: r, configurable: !0 });
              })(i, c),
              l &&
                (function (e, n) {
                  var r = function () {
                    ne ||
                      ((ne = !0),
                      h(
                        '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                        n
                      ));
                  };
                  (r.isReactWarning = !0),
                    Object.defineProperty(e, 'ref', {
                      get: r,
                      configurable: !0,
                    });
                })(i, c);
          }
          return ae(e, s, l, o, t, te.current, i);
        }
        var se,
          le = m.ReactCurrentOwner,
          pe = m.ReactDebugCurrentFrame;
        function ce(e) {
          if (e) {
            var n = e._owner,
              r = Y(e.type, e._source, n ? n.type : null);
            pe.setExtraStackFrame(r);
          } else pe.setExtraStackFrame(null);
        }
        function ue(e) {
          return 'object' == typeof e && null !== e && e.$$typeof === r;
        }
        function fe() {
          if (le.current) {
            var e = E(le.current.type);
            if (e) return '\n\nCheck the render method of `' + e + '`.';
          }
          return '';
        }
        se = !1;
        var de = {};
        function ye(e, n) {
          if (e._store && !e._store.validated && null == e.key) {
            e._store.validated = !0;
            var r = (function (e) {
              var n = fe();
              if (!n) {
                var r = 'string' == typeof e ? e : e.displayName || e.name;
                r &&
                  (n =
                    '\n\nCheck the top-level render call using <' + r + '>.');
              }
              return n;
            })(n);
            if (!de[r]) {
              de[r] = !0;
              var t = '';
              e &&
                e._owner &&
                e._owner !== le.current &&
                (t = ' It was passed a child from ' + E(e._owner.type) + '.'),
                ce(e),
                h(
                  'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                  r,
                  t
                ),
                ce(null);
            }
          }
        }
        function ge(e, n) {
          if ('object' == typeof e)
            if (G(e))
              for (var r = 0; r < e.length; r++) {
                var t = e[r];
                ue(t) && ye(t, n);
              }
            else if (ue(e)) e._store && (e._store.validated = !0);
            else if (e) {
              var o = (function (e) {
                if (null === e || 'object' != typeof e) return null;
                var n = (b && e[b]) || e[v];
                return 'function' == typeof n ? n : null;
              })(e);
              if ('function' == typeof o && o !== e.entries)
                for (var a, i = o.call(e); !(a = i.next()).done; )
                  ue(a.value) && ye(a.value, n);
            }
        }
        function be(e) {
          var n,
            r = e.type;
          if (null != r && 'string' != typeof r) {
            if ('function' == typeof r) n = r.propTypes;
            else {
              if (
                'object' != typeof r ||
                (r.$$typeof !== c && r.$$typeof !== d)
              )
                return;
              n = r.propTypes;
            }
            if (n) {
              var t = E(r);
              !(function (e, n, r, t, o) {
                var a = Function.call.bind(q);
                for (var i in e)
                  if (a(e, i)) {
                    var s = void 0;
                    try {
                      if ('function' != typeof e[i]) {
                        var l = Error(
                          (t || 'React class') +
                            ': ' +
                            r +
                            ' type `' +
                            i +
                            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                            typeof e[i] +
                            '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                        );
                        throw ((l.name = 'Invariant Violation'), l);
                      }
                      s = e[i](
                        n,
                        i,
                        t,
                        r,
                        null,
                        'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
                      );
                    } catch (e) {
                      s = e;
                    }
                    !s ||
                      s instanceof Error ||
                      (J(o),
                      h(
                        '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                        t || 'React class',
                        r,
                        i,
                        typeof s
                      ),
                      J(null)),
                      s instanceof Error &&
                        !(s.message in K) &&
                        ((K[s.message] = !0),
                        J(o),
                        h('Failed %s type: %s', r, s.message),
                        J(null));
                  }
              })(n, e.props, 'prop', t, e);
            } else
              void 0 === r.PropTypes ||
                se ||
                ((se = !0),
                h(
                  'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                  E(r) || 'Unknown'
                ));
            'function' != typeof r.getDefaultProps ||
              r.getDefaultProps.isReactClassApproved ||
              h(
                'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
              );
          }
        }
        var ve = {};
        function me(e, n, t, o, b, v) {
          var m = (function (e) {
            return (
              'string' == typeof e ||
              'function' == typeof e ||
              !!(
                e === a ||
                e === s ||
                j ||
                e === i ||
                e === u ||
                e === f ||
                S ||
                e === g ||
                w ||
                x ||
                _
              ) ||
              ('object' == typeof e &&
                null !== e &&
                (e.$$typeof === y ||
                  e.$$typeof === d ||
                  e.$$typeof === l ||
                  e.$$typeof === p ||
                  e.$$typeof === c ||
                  e.$$typeof === k ||
                  void 0 !== e.getModuleId))
            );
          })(e);
          if (!m) {
            var O,
              R = '';
            (void 0 === e ||
              ('object' == typeof e &&
                null !== e &&
                0 === Object.keys(e).length)) &&
              (R +=
                " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),
              (R += fe()),
              null === e
                ? (O = 'null')
                : G(e)
                  ? (O = 'array')
                  : void 0 !== e && e.$$typeof === r
                    ? ((O = '<' + (E(e.type) || 'Unknown') + ' />'),
                      (R =
                        ' Did you accidentally export a JSX literal instead of a component?'))
                    : (O = typeof e),
              h(
                'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                O,
                R
              );
          }
          var T = ie(e, n, t, b, v);
          if (null == T) return T;
          if (m) {
            var P = n.children;
            if (void 0 !== P)
              if (o)
                if (G(P)) {
                  for (var $ = 0; $ < P.length; $++) ge(P[$], e);
                  Object.freeze && Object.freeze(P);
                } else
                  h(
                    'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.'
                  );
              else ge(P, e);
          }
          if (q.call(n, 'key')) {
            var C = E(e),
              N = Object.keys(n).filter(function (e) {
                return 'key' !== e;
              }),
              I =
                N.length > 0
                  ? '{key: someKey, ' + N.join(': ..., ') + ': ...}'
                  : '{key: someKey}';
            ve[C + I] ||
              (h(
                'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
                I,
                C,
                N.length > 0 ? '{' + N.join(': ..., ') + ': ...}' : '{}',
                C
              ),
              (ve[C + I] = !0));
          }
          return (
            e === a
              ? (function (e) {
                  for (var n = Object.keys(e.props), r = 0; r < n.length; r++) {
                    var t = n[r];
                    if ('children' !== t && 'key' !== t) {
                      ce(e),
                        h(
                          'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                          t
                        ),
                        ce(null);
                      break;
                    }
                  }
                  null !== e.ref &&
                    (ce(e),
                    h('Invalid attribute `ref` supplied to `React.Fragment`.'),
                    ce(null));
                })(T)
              : be(T),
            T
          );
        }
        var he = function (e, n, r) {
            return me(e, n, r, !1);
          },
          ke = function (e, n, r) {
            return me(e, n, r, !0);
          };
        (o.Fragment = a), (o.jsx = he), (o.jsxs = ke);
      })());
var a = [],
  i = [];
!(function (e, n) {
  if (e && 'undefined' != typeof document) {
    var r,
      t = !0 === n.prepend ? 'prepend' : 'append',
      o = !0 === n.singleTag,
      s =
        'string' == typeof n.container
          ? document.querySelector(n.container)
          : document.getElementsByTagName('head')[0];
    if (o) {
      var l = a.indexOf(s);
      -1 === l && ((l = a.push(s) - 1), (i[l] = {})),
        (r = i[l] && i[l][t] ? i[l][t] : (i[l][t] = p()));
    } else r = p();
    65279 === e.charCodeAt(0) && (e = e.substring(1)),
      r.styleSheet
        ? (r.styleSheet.cssText += e)
        : r.appendChild(document.createTextNode(e));
  }
  function p() {
    var e = document.createElement('style');
    if ((e.setAttribute('type', 'text/css'), n.attributes))
      for (var r = Object.keys(n.attributes), o = 0; o < r.length; o++)
        e.setAttribute(r[o], n.attributes[r[o]]);
    var a = 'prepend' === t ? 'afterbegin' : 'beforeend';
    return s.insertAdjacentElement(a, e), e;
  }
})(
  '#root {\n  font-family: Helvetica;\n}\n\n.candidatesWrapper {\n  display: flex;\n  justify-content: space-around;\n  text-align: center;\n}\n.candidatesWrapper.sticky {\n  background-color: #fff;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n}\n.candidatesWrapper.sticky img {\n  display: none;\n}\n\n.candidate {\n  margin: 10px;\n}\n.candidate img {\n  height: 100px;\n}\n\n#Trump,\n.gop-votes {\n  background-color: rgba(255, 0, 0, 0.75);\n}\n\n#Biden,\n.dem-votes {\n  background-color: rgba(0, 70, 255, 0.75);\n}\n\n#Oliver,\n.lib-votes {\n  background-color: rgba(255, 215, 0, 0.75);\n}\n\n#Stein,\n.grn-votes {\n  background-color: rgba(0, 200, 0, 0.75);\n}\n\n#Kennedy,\n.ind-votes {\n  background-color: #d3d3d3;\n}\n\n.electoralVotesWrapper {\n  font-size: 35px;\n  margin-top: 5px;\n}\n\n.electoralVotesLabel {\n  font-size: 16px;\n}\n\n.electoralVotes {\n  background-color: #ffffff;\n  border: 1px solid #000000;\n  display: flex;\n  height: 40px;\n  justify-content: space-around;\n}\n\n.electoralVotes#gop-wta,\n.electoralVotes#gop-prop {\n  color: rgba(255, 0, 0, 0.75);\n}\n\n.electoralVotes#dem-wta,\n.electoralVotes#dem-prop {\n  color: rgba(0, 70, 255, 0.75);\n}\n\n.electoralVotes#lib-wta,\n.electoralVotes#lib-prop {\n  color: rgba(255, 215, 0, 0.75);\n}\n\n.electoralVotes#grn-wta,\n.electoralVotes#grn-prop {\n  color: rgba(0, 200, 0, 0.75);\n}\n\n.electoralVotes#ind-wta,\n.electoralVotes#ind-prop {\n  color: #d3d3d3;\n}\n\n.votes-winner-line {\n  border-top: 15px solid #000000;\n  border-right: 15px solid transparent;\n  border-left: 15px solid transparent;\n  height: 0px;\n  width: 0px;\n  margin: 0 auto 1px;\n}\n\n.votes-parties {\n  border: 1px solid #777777;\n  height: 20px;\n}\n\n.votes-parties > span {\n  display: inline-block;\n  height: inherit;\n}\n\n.statesWrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  margin-top: 10px;\n}\n.statesWrapper button {\n  cursor: pointer;\n}\n.statesWrapper > div {\n  margin-top: 10px;\n}\n\n.stateWrapper {\n  margin: 5px;\n  text-align: center;\n}\n\n.state {\n  background-color: none;\n  border: 1px solid #000000;\n  border-radius: 3px;\n  cursor: pointer;\n  height: 30px;\n  margin: 0 auto;\n  width: 100px;\n}\n\n.wta-winner,\n.prop-winner {\n  background-color: none;\n  border: 1px solid #000000;\n  border-radius: 3px;\n}\n\n.state.gop,\n.wta-winner.gop,\n.prop-winner.gop {\n  background-color: rgba(255, 0, 0, 0.75);\n  border: 1px solid rgba(255, 0, 0, 0.75);\n}\n\n.state.dem,\n.wta-winner.dem,\n.prop-winner.dem {\n  background-color: rgba(0, 70, 255, 0.75);\n  border: 1px solid rgba(0, 70, 255, 0.75);\n}\n\n.state.lib,\n.wta-winner.lib,\n.prop-winner.lib {\n  background-color: rgba(255, 215, 0, 0.75);\n  border: 1px solid rgba(255, 215, 0, 0.75);\n}\n\n.state.grn,\n.wta-winner.grn,\n.wta-winner.grn {\n  background-color: rgba(0, 200, 0, 0.75);\n  border: 1px solid rgba(0, 200, 0, 0.75);\n}\n\n.state.ind,\n.wta-winner.ind,\n.prop-winner.ind {\n  background-color: #d3d3d3;\n  border: 1px solid #d3d3d3;\n}\n\n.evs {\n  font-size: 22px;\n  position: relative;\n  top: 10%;\n}\n\n.pvInputWrapper {\n  margin-bottom: 3px;\n}\n\n.pvInput {\n  border-radius: 3px;\n  border: 2px solid;\n}\n.pvInput[data-party=gop] {\n  border-color: rgba(255, 0, 0, 0.75);\n}\n.pvInput[data-party=dem] {\n  border-color: rgba(0, 70, 255, 0.75);\n}\n.pvInput[data-party=lib] {\n  border-color: rgba(255, 215, 0, 0.75);\n}\n.pvInput[data-party=grn] {\n  border-color: rgba(0, 200, 0, 0.75);\n}\n.pvInput[data-party=ind] {\n  border-color: #d3d3d3;\n}\n\n.hide {\n  display: none;\n}\n\n.buttonWrapper {\n  display: inline-block;\n  margin: 10px 20px 0 0;\n}\n.buttonWrapper button {\n  border: 0;\n  cursor: pointer;\n  display: block;\n  font-family: Helvetica;\n  font-size: 30px;\n}\n\n#saveButton {\n  background-color: #00ff00;\n}\n\n#clearButton {\n  background-color: #ff0000;\n}\n\n#map-wrapper {\n  position: relative;\n}\n#map-wrapper button {\n  margin: 20px;\n  padding: 20px;\n}\n\n#us-map {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n#us-map.hide {\n  display: none;\n}\n\npath:hover,\ncircle:hover {\n  stroke: #000 !important;\n  stroke-width: 2px;\n  stroke-linejoin: round;\n  fill: #fff;\n  cursor: pointer;\n}\n\n#path67 {\n  fill: none !important;\n  stroke: #a9a9a9 !important;\n  cursor: default;\n}\n\n#info-box {\n  background-color: #ffffff;\n  bottom: 15%;\n  border: 2px solid #000;\n  border-radius: 5px;\n  display: none;\n  font-family: arial;\n  padding: 5px 20px;\n  position: absolute;\n  right: 10px;\n  z-index: 1;\n}\n#info-box.show {\n  display: block;\n}\n\nsvg path,\ncircle,\npath:hover,\ncircle:hover {\n  fill: #fff;\n}\n\nsvg .gop,\npath.gop:hover,\ncircle.gop:hover {\n  fill: rgba(255, 0, 0, 0.75);\n}\n\nsvg .dem,\npath.dem:hover,\ncircle.dem:hover {\n  fill: rgba(0, 70, 255, 0.75);\n}\n\nsvg .lib,\npath.lib:hover,\ncircle.lib:hover {\n  fill: rgba(255, 215, 0, 0.75);\n}\n\nsvg .grn,\npath.grn:hover,\ncircle.grn:hover {\n  fill: rgba(0, 200, 0, 0.75);\n}\n\nsvg .ind,\npath.ind:hover,\ncircle.ind:hover {\n  fill: #d3d3d3;\n}',
  {}
);
//# sourceMappingURL=index.js.map
