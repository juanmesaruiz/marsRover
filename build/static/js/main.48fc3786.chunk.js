(this['webpackJsonpmars-rover'] = this['webpackJsonpmars-rover'] || []).push([
  [0],
  {
    32: function (e, t, n) {},
    33: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(1),
        o = n(0),
        c = n.n(o),
        i = n(10),
        a = n.n(i),
        s = n(6),
        l = n(2),
        u = n(3),
        d = 'ROVER@CLEAR',
        b = 'ROVER@CLEAR_POSITION_LOG',
        j = 'ROVER@DELETE_OBSTACLE',
        v = 'ROVER@NEW_INSTRUCTIONS',
        f = 'ROVER@NEW_MOVE',
        h = 'ROVER@SET_OBSTACLES',
        O = 'ROVER@SET_POSITION',
        x = function (e) {
          return { type: h, payload: { obstacles: e } };
        },
        p = n(7),
        g = { x: 50, y: 25 },
        m = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : g,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case d:
              return g;
            default:
              return e;
          }
        },
        y = n(5),
        w = [],
        C = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : w,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case d:
              return w;
            case j:
              var n = t.payload.obstacle,
                r = Object(y.a)(e),
                o = r.findIndex(function (e) {
                  var t = e.x,
                    r = e.y;
                  return t === n.x && r === n.y;
                });
              return r.splice(o, 1), r;
            case h:
              var c = t.payload.obstacles;
              return [].concat(Object(y.a)(e), Object(y.a)(c));
            default:
              return e;
          }
        },
        N = n(4),
        k = 'KeyA',
        R = 'KeyD',
        E = 'KeyW',
        D = 'north',
        P = 'south',
        L = 'east',
        S = 'west',
        M = { F: 'front', L: 'left', R: 'right' },
        I = function (e, t) {
          return (
            -1 !==
            e.findIndex(function (e) {
              return e.x === t.x && e.y === t.y;
            })
          );
        },
        T = function (e) {
          switch (e) {
            case S:
              return Object(r.jsx)(r.Fragment, { children: '\u2190' });
            case L:
              return Object(r.jsx)(r.Fragment, { children: '\u2192' });
            case P:
              return Object(r.jsx)(r.Fragment, { children: '\u2193' });
            case D:
            default:
              return Object(r.jsx)(r.Fragment, { children: '\u2191' });
          }
        },
        _ = function e(t, n, r) {
          var o = A(t, r);
          return o.x === n.x && o.y === n.y ? e(t, n, r) : [o];
        },
        F = function (e) {
          for (
            var t = e.x,
              n = e.y,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1,
              o = [],
              c = 0,
              i = function () {
                var e = Math.floor(Math.random() * (t - 0)),
                  c = Math.floor(Math.random() * (n - 0));
                -1 ===
                o.findIndex(function (t) {
                  return t.x === e && t.y === c;
                })
                  ? o.push({ x: e, y: c })
                  : (r += 1);
              };
            c < r;
            c++
          )
            i();
          return Object(y.a)(new Set(o));
        },
        A = function e(t, n) {
          var r = F(t)[0];
          return I(n, r) ? e(t, n) : r;
        },
        V = function (e) {
          switch (e) {
            case k:
              return M.L;
            case R:
              return M.R;
            case E:
              return M.F;
            default:
              return null;
          }
        },
        W = function (e) {
          var t = e.x,
            n = e.y;
          return 'Obstacle - X '.concat(t, ', Y ').concat(n);
        },
        X = function (e) {
          var t = e.grid,
            n = e.obstaclesCoordinates,
            r = e.newDirection,
            o = e.newPosition,
            c = e.state;
          return (function (e) {
            var t = e.obstaclesCoordinates,
              n = e.newPosition,
              r = e.grid,
              o = I(t, n),
              c = (function (e, t) {
                return t.x >= 0 && t.x <= e.x && t.y >= 0 && t.y <= e.y;
              })(r, n);
            return !o && c;
          })({ grid: t, obstaclesCoordinates: n, newPosition: o })
            ? {
                current: o,
                direction: r,
                log: [c.current].concat(Object(y.a)(c.log)),
              }
            : Object(N.a)(
                Object(N.a)({}, c),
                {},
                { log: [W(o)].concat(Object(y.a)(c.log)) }
              );
        },
        q = function (e) {
          var t = e.current,
            n = e.direction,
            r = e.grid,
            o = e.obstaclesCoordinates,
            c = e.roverMovement,
            i = e.state,
            a = Object(N.a)({}, t);
          switch (c) {
            case M.F:
              switch (n) {
                case D:
                  return (
                    (a.y = a.y + 1),
                    X({
                      grid: r,
                      obstaclesCoordinates: o,
                      newDirection: n,
                      newPosition: a,
                      state: i,
                    })
                  );
                case P:
                  return (
                    (a.y = a.y - 1),
                    X({
                      grid: r,
                      obstaclesCoordinates: o,
                      newDirection: n,
                      newPosition: a,
                      state: i,
                    })
                  );
                case S:
                  return (
                    (a.x = a.x - 1),
                    X({
                      grid: r,
                      obstaclesCoordinates: o,
                      newDirection: n,
                      newPosition: a,
                      state: i,
                    })
                  );
                case L:
                  return (
                    (a.x = a.x + 1),
                    X({
                      grid: r,
                      obstaclesCoordinates: o,
                      newDirection: n,
                      newPosition: a,
                      state: i,
                    })
                  );
                default:
                  return i;
              }
            case M.L:
              switch (n) {
                case D:
                  return (
                    (a.x = a.x - 1),
                    X({
                      grid: r,
                      obstaclesCoordinates: o,
                      newDirection: S,
                      newPosition: a,
                      state: i,
                    })
                  );
                case P:
                  return (
                    (a.x = a.x + 1),
                    X({
                      grid: r,
                      obstaclesCoordinates: o,
                      newDirection: L,
                      newPosition: a,
                      state: i,
                    })
                  );
                case S:
                  return (
                    (a.y = a.y - 1),
                    X({
                      grid: r,
                      obstaclesCoordinates: o,
                      newDirection: P,
                      newPosition: a,
                      state: i,
                    })
                  );
                case L:
                  return (
                    (a.y = a.y + 1),
                    X({
                      grid: r,
                      obstaclesCoordinates: o,
                      newDirection: D,
                      newPosition: a,
                      state: i,
                    })
                  );
                default:
                  return i;
              }
            case M.R:
              switch (n) {
                case D:
                  return (
                    (a.x = a.x + 1),
                    X({
                      grid: r,
                      obstaclesCoordinates: o,
                      newDirection: L,
                      newPosition: a,
                      state: i,
                    })
                  );
                case P:
                  return (
                    (a.x = a.x - 1),
                    X({
                      grid: r,
                      obstaclesCoordinates: o,
                      newDirection: S,
                      newPosition: a,
                      state: i,
                    })
                  );
                case S:
                  return (
                    (a.y = a.y + 1),
                    X({
                      grid: r,
                      obstaclesCoordinates: o,
                      newDirection: D,
                      newPosition: a,
                      state: i,
                    })
                  );
                case L:
                  return (
                    (a.y = a.y - 1),
                    X({
                      grid: r,
                      obstaclesCoordinates: o,
                      newDirection: P,
                      newPosition: a,
                      state: i,
                    })
                  );
                default:
                  return i;
              }
            default:
              return i;
          }
        },
        K = { current: null, direction: D, log: [] },
        Y = {
          grid: m,
          obstacles: C,
          rover: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : K,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case d:
                return K;
              case b:
                return Object(N.a)(Object(N.a)({}, e), {}, { log: [] });
              case v:
                var n = t.payload,
                  r = n.instructions,
                  o = n.grid,
                  c = n.obstaclesCoordinates,
                  i = Object(y.a)(r),
                  a = Object(N.a)({}, e);
                return (
                  i.forEach(function (e) {
                    var t = M[e.toUpperCase()],
                      n = a,
                      r = n.current,
                      i = n.direction;
                    t &&
                      (a = q({
                        current: r,
                        direction: i,
                        grid: o,
                        obstaclesCoordinates: c,
                        roverMovement: t,
                        state: a,
                      }));
                  }),
                  a
                );
              case f:
                var s = t.payload,
                  l = s.code,
                  u = s.grid,
                  j = s.obstaclesCoordinates,
                  h = V(l),
                  x = e.current,
                  p = e.direction;
                return q({
                  current: x,
                  direction: p,
                  grid: u,
                  obstaclesCoordinates: j,
                  roverMovement: h,
                  state: e,
                });
              case O:
                var g = t.payload.position,
                  m = e.current
                    ? [].concat(Object(y.a)(e.log), [e.current, g])
                    : Object(y.a)(e.log);
                return Object(N.a)(
                  Object(N.a)({}, e),
                  {},
                  { current: g, log: m }
                );
              default:
                return e;
            }
          },
        },
        U = function (e) {
          return e.grid;
        },
        B = function (e) {
          return e.obstacles;
        },
        J = function (e) {
          return e.rover;
        },
        z = Object(p.c)(Y);
      function G() {
        var e = Object(l.a)(['\n  ', '\n']);
        return (
          (G = function () {
            return e;
          }),
          e
        );
      }
      var H = c.a.forwardRef(function (e, t) {
          return Object(r.jsx)(
            'input',
            Object(N.a)(Object(N.a)({}, e), {}, { ref: t })
          );
        }),
        Q = Object(u.a)(H)(G(), function (e) {
          return (function (e) {
            switch (e) {
              case 'submit':
              case 'reset':
                return 'cursor: pointer;';
              default:
                return '';
            }
          })(e.type);
        });
      function Z() {
        var e = Object(l.a)([
          '\n  .label {\n    display: block;\n    margin: 0 0 5px;\n  }\n\n  .instructions-send {\n    margin-left: 15px;\n  }\n',
        ]);
        return (
          (Z = function () {
            return e;
          }),
          e
        );
      }
      var $ = Object(u.a)(function (e) {
          var t = e.className,
            n = e.roverNewInstructionsMove,
            c = e.grid,
            i = e.obstaclesCoordinates,
            a = Object(o.useRef)(null),
            s = Object(o.useCallback)(
              function (e) {
                var t, r;
                e.preventDefault();
                var o = (function (e) {
                  var t, n;
                  return null !==
                    (t =
                      null === e ||
                      void 0 === e ||
                      null === (n = e.toUpperCase) ||
                      void 0 === n
                        ? void 0
                        : n
                            .call(e)
                            .split('')
                            .filter(function (e) {
                              return Object.keys(M).includes(e);
                            })
                            .join('')) && void 0 !== t
                    ? t
                    : '';
                })(
                  null === e ||
                    void 0 === e ||
                    null === (t = e.target) ||
                    void 0 === t ||
                    null === (r = t.instructions) ||
                    void 0 === r
                    ? void 0
                    : r.value
                );
                (a.current.value = o),
                  n({ grid: c, instructions: o, obstaclesCoordinates: i });
              },
              [c, i, n]
            );
          return Object(r.jsxs)('form', {
            className: t,
            onSubmit: s,
            children: [
              Object(r.jsxs)('div', {
                children: [
                  Object(r.jsx)('label', {
                    className: 'label',
                    htmlFor: 'instructions',
                    children: 'Rover Instructions:',
                  }),
                  Object(r.jsx)(Q, {
                    type: 'text',
                    name: 'instructions',
                    id: 'instructions',
                    placeholder: 'Type Rover instructions',
                    ref: a,
                  }),
                ],
              }),
              Object(r.jsxs)('p', {
                children: [
                  Object(r.jsx)(Q, { type: 'reset', value: 'Reset' }),
                  Object(r.jsx)(Q, {
                    className: 'instructions-send',
                    type: 'submit',
                    value: 'Send',
                  }),
                ],
              }),
            ],
          });
        })(Z()),
        ee = Object(s.b)(
          function (e) {
            return { grid: U(e), obstaclesCoordinates: B(e) };
          },
          {
            roverNewInstructionsMove: function (e) {
              var t = e.instructions,
                n = e.grid,
                r = e.obstaclesCoordinates;
              return {
                type: v,
                payload: { instructions: t, grid: n, obstaclesCoordinates: r },
              };
            },
          }
        )($),
        te = n(19);
      function ne() {
        var e = Object(l.a)(['\n  cursor: pointer;\n']);
        return (
          (ne = function () {
            return e;
          }),
          e
        );
      }
      var re = Object(u.a)(function (e) {
          var t = e.children,
            n = Object(te.a)(e, ['children']);
          return Object(r.jsx)(
            'button',
            Object(N.a)(Object(N.a)({}, n), {}, { children: t })
          );
        })(ne()),
        oe = Object(s.b)(
          function (e) {
            return { grid: U(e), obstaclesCoordinates: B(e), rover: J(e) };
          },
          { createObstacles: x }
        )(function (e) {
          var t = e.createObstacles,
            n = e.grid,
            c = e.obstaclesCoordinates,
            i = e.rover.current,
            a = Object(o.useCallback)(
              function () {
                return t(_(n, i, c));
              },
              [t, i, n, c]
            );
          return Object(r.jsx)(re, {
            onClick: a,
            children: 'Add random obstacle',
          });
        });
      function ce() {
        var e = Object(l.a)([
          '\n  .delete-button {\n    float: right;\n    margin-right: 20px;\n  }\n\n  .title {\n    margin: 25px 0 0;\n  }\n\n  .positions-container {\n    height: 225px;\n    overflow: auto;\n  }\n',
        ]);
        return (
          (ce = function () {
            return e;
          }),
          e
        );
      }
      var ie = Object(u.a)(function (e) {
          var t = e.className,
            n = e.deleteObstacle,
            c = e.obstacles,
            i = Object(o.useCallback)(
              function (e) {
                return n(e);
              },
              [n]
            );
          return Object(r.jsxs)('div', {
            className: t,
            children: [
              Object(r.jsxs)('h5', {
                className: 'title',
                children: ['Total obstacles ', c.length, ':'],
              }),
              Object(r.jsx)('div', {
                className: 'positions-container',
                children: c.map(function (e) {
                  var t = e.x,
                    n = e.y;
                  return Object(r.jsxs)(
                    'p',
                    {
                      children: [
                        'X ',
                        t,
                        ', Y ',
                        n,
                        Object(r.jsx)(re, {
                          className: 'delete-button',
                          onClick: function () {
                            return i({ x: t, y: n });
                          },
                          children: 'Delete',
                        }),
                      ],
                    },
                    ''.concat(t, '-').concat(n)
                  );
                }),
              }),
            ],
          });
        })(ce()),
        ae = Object(s.b)(
          function (e) {
            return { obstacles: B(e) };
          },
          {
            deleteObstacle: function (e) {
              return { type: j, payload: { obstacle: e } };
            },
          }
        )(ie);
      function se() {
        var e = Object(l.a)([
          '\n  display: inline-block;\n  height: 376px;\n  overflow: hidden;\n  border: 1px solid black;\n  margin-left: 15px;\n  padding: 20px 20px;\n  width: 200px;\n',
        ]);
        return (
          (se = function () {
            return e;
          }),
          e
        );
      }
      var le = Object(u.a)(function (e) {
        var t = e.className;
        return Object(r.jsxs)('div', {
          className: t,
          children: [
            Object(r.jsx)(ee, {}),
            Object(r.jsx)(oe, {}),
            Object(r.jsx)(ae, {}),
          ],
        });
      })(se());
      function ue() {
        var e = Object(l.a)(['\n  text-align: justify;\n']);
        return (
          (ue = function () {
            return e;
          }),
          e
        );
      }
      var de = Object(u.a)(function (e) {
        var t = e.className;
        return Object(r.jsxs)('div', {
          className: t,
          children: [
            Object(r.jsx)('p', {
              children:
                'You\u2019re part of the team that explores Mars by sending remotely controlled vehicles to the surface of the planet. We create a software that translates the commands sent from earth to instructions that are understood by the rover.',
            }),
            Object(r.jsx)('p', {
              children:
                'We can send instructions by keyboard one by one or sending a battery of it with an input.',
            }),
            'The rover can move:',
            Object(r.jsxs)('ul', {
              children: [
                Object(r.jsxs)('li', {
                  children: [
                    'Forward: ',
                    Object(r.jsx)('b', { children: 'F' }),
                    ' in input or ',
                    Object(r.jsx)('b', { children: 'W' }),
                    ' on keyboard',
                  ],
                }),
                Object(r.jsxs)('li', {
                  children: [
                    'Left: ',
                    Object(r.jsx)('b', { children: 'L' }),
                    ' in input or ',
                    Object(r.jsx)('b', { children: 'A' }),
                    ' on keyboard',
                  ],
                }),
                Object(r.jsxs)('li', {
                  children: [
                    'Right: ',
                    Object(r.jsx)('b', { children: 'R' }),
                    ' in input or ',
                    Object(r.jsx)('b', { children: 'D' }),
                    ' on keyboard',
                  ],
                }),
              ],
            }),
            Object(r.jsx)('p', {
              children:
                'The rover will detect if there are an obstacle in the next movement, if there is anything there it will move, if not, it will stay in the same position and direction.',
            }),
            Object(r.jsxs)('p', {
              children: [
                'On the first load we generate randomly ',
                Object(r.jsx)('b', { children: '50 obstacles' }),
                ' and the rover position aswell, so everytime we refresh the page we will get different grid configurations. At the same time, we add a button to add a random obstacle everytime we click on it.',
              ],
            }),
            Object(r.jsxs)('p', {
              children: [
                'We can see in live in the grid the rover movement, and we have',
                ' ',
                Object(r.jsx)('b', { children: '2 logs' }),
                ' to check the coordinates of obstacles and the rover historic movement. At the same obstacle log, if you want, you can remove the obstacle using the Delete button on each one.',
              ],
            }),
          ],
        });
      })(ue());
      function be() {
        var e = Object(l.a)([
          '\n  display: inline-block;\n  margin-bottom: 15px;\n  vertical-align: top;\n\n  .grid-rows {\n    line-height: 0;\n    margin: 0;\n\n    .grid-square {\n      border-top: 1px solid black;\n      border-right: 1px solid black;\n      display: inline-block;\n      height: 1vw;\n      max-width: 15px;\n      max-height: 15px;\n      position: relative;\n      width: 1vw;\n\n      &:first-child {\n        border-left: 1px solid black;\n      }\n      &-obstacle {\n        background-color: black;\n      }\n\n      &-rover {\n        background-color: green;\n      }\n\n      .grid-arrow {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%);\n        font-size: 1vw;\n      }\n    }\n  }\n\n  div:last-of-type .grid-square {\n    border-bottom: 1px solid black;\n  }\n',
        ]);
        return (
          (be = function () {
            return e;
          }),
          e
        );
      }
      var je = Object(u.a)(function (e) {
          var t = e.className,
            n = e.obstacles,
            o = e.grid,
            c = o.x,
            i = o.y,
            a = e.rover,
            s = a.current,
            l = a.direction;
          return Object(r.jsx)('div', {
            className: t,
            children: (function () {
              for (
                var e = [], t = c, o = i, a = 0, u = Object(y.a)(n);
                a <= o;
                a++
              ) {
                for (
                  var d = 0,
                    b = [],
                    j = function () {
                      var e = d,
                        t = o - a,
                        n = ''.concat(e, '-').concat(t),
                        c = !1,
                        i = !1;
                      if (
                        e === (null === s || void 0 === s ? void 0 : s.x) &&
                        t === (null === s || void 0 === s ? void 0 : s.y)
                      )
                        i = !0;
                      else if (u.length) {
                        var j = u.findIndex(function (n) {
                          return n.x === e && n.y === t;
                        });
                        -1 !== j && ((c = !0), u.splice(j, 1));
                      }
                      b.push(
                        Object(r.jsx)(
                          'div',
                          {
                            className: 'grid-square '.concat(
                              i
                                ? 'grid-square-rover'
                                : c
                                ? 'grid-square-obstacle'
                                : ''
                            ),
                            id: n,
                            children: i
                              ? Object(r.jsx)('span', {
                                  className: 'grid-arrow',
                                  children: T(l),
                                })
                              : '',
                          },
                          n
                        )
                      );
                    };
                  d <= t;
                  d++
                )
                  j();
                e.push(
                  Object(r.jsx)(
                    'div',
                    { className: 'grid-rows', children: b },
                    a
                  )
                );
              }
              return e;
            })().map(function (e) {
              return e;
            }),
          });
        })(be()),
        ve = Object(s.b)(function (e) {
          return { obstacles: B(e), grid: U(e), rover: J(e) };
        }, {})(je);
      function fe() {
        var e = Object(l.a)([
          '\n  display: inline-block;\n  height: 376px;\n  overflow: hidden;\n  border: 1px solid black;\n  margin-left: 30px;\n  padding: 20px 20px;\n  width: 200px;\n\n  .current {\n    display: block;\n    margin: 0 0 5px;\n  }\n\n  .direction {\n    margin: 20px 0 18px;\n  }\n\n  .delete-button {\n    float: right;\n    margin-right: 30px;\n  }\n\n  .title {\n    margin: 23px 0 0 0;\n  }\n\n  .positions-container {\n    height: 225px;\n    overflow: auto;\n  }\n',
        ]);
        return (
          (fe = function () {
            return e;
          }),
          e
        );
      }
      var he = function (e) {
          return 'string' === typeof e
            ? e
            : 'X '.concat(e.x, ', Y ').concat(e.y);
        },
        Oe = Object(u.a)(function (e) {
          var t = e.className,
            n = e.rover,
            c = n.current,
            i = n.direction,
            a = n.log,
            s = e.roverClearPositionLog,
            l = Object(o.useCallback)(s, [s]);
          return Object(r.jsxs)('div', {
            className: t,
            children: [
              c &&
                Object(r.jsxs)('div', {
                  children: [
                    Object(r.jsx)('span', {
                      className: 'current',
                      children: 'Current position:',
                    }),
                    Object(r.jsxs)('b', { children: ['X ', c.x, ', Y ', c.y] }),
                  ],
                }),
              Object(r.jsxs)('p', {
                className: 'direction',
                children: [
                  'Current direction: ',
                  Object(r.jsx)('b', { children: i }),
                ],
              }),
              Object(r.jsx)(re, { onClick: l, children: 'Clear Log' }),
              !!a.length &&
                Object(r.jsxs)(r.Fragment, {
                  children: [
                    Object(r.jsx)('h5', {
                      className: 'title',
                      children: 'Last positions: ',
                    }),
                    Object(r.jsx)('div', {
                      className: 'positions-container',
                      children: a.map(function (e, t) {
                        return Object(r.jsx)('p', { children: he(e) }, t);
                      }),
                    }),
                  ],
                }),
            ],
          });
        })(fe()),
        xe = Object(s.b)(
          function (e) {
            return { rover: J(e) };
          },
          {
            roverClearPositionLog: function () {
              return { type: b };
            },
          }
        )(Oe);
      function pe() {
        var e = Object(l.a)(['\n  margin: 0 0 30px;\n']);
        return (
          (pe = function () {
            return e;
          }),
          e
        );
      }
      var ge = Object(u.a)(function (e) {
        var t = e.className;
        return Object(r.jsx)('h1', {
          className: t,
          children: 'Mars Rover Mission',
        });
      })(pe());
      function me() {
        var e = Object(l.a)([
          '\n  padding: 50px;\n  text-align: center;\n\n  .main-container {\n    margin-top: 20px;\n  }\n',
        ]);
        return (
          (me = function () {
            return e;
          }),
          e
        );
      }
      var ye = Object(u.a)(function (e) {
          var t = e.className,
            n = e.createObstacles,
            c = e.grid,
            i = e.obstaclesCoordinates,
            a = e.roverClear,
            s = e.roverNewKeyboardMove,
            l = e.roverSetPosition;
          return (
            Object(o.useEffect)(
              function () {
                var e = F(c, 50),
                  t = A(c, e);
                n(e), l(t);
              },
              [n, c, l]
            ),
            Object(o.useEffect)(
              function () {
                var e = function (e) {
                  var t = e.code;
                  switch (t) {
                    case k:
                    case R:
                    case E:
                      return s({ code: t, grid: c, obstaclesCoordinates: i });
                    default:
                      return null;
                  }
                };
                return (
                  document.addEventListener('keydown', e),
                  function () {
                    return document.removeEventListener('keydown', e);
                  }
                );
              },
              [c, i, s]
            ),
            Object(o.useEffect)(
              function () {
                return function () {
                  a();
                };
              },
              [a]
            ),
            Object(r.jsxs)('div', {
              className: t,
              children: [
                Object(r.jsx)('header', { children: Object(r.jsx)(ge, {}) }),
                Object(r.jsx)('section', { children: Object(r.jsx)(de, {}) }),
                Object(r.jsxs)('main', {
                  className: 'main-container',
                  children: [
                    Object(r.jsx)(ve, {}),
                    Object(r.jsx)(xe, {}),
                    Object(r.jsx)(le, {}),
                  ],
                }),
              ],
            })
          );
        })(me()),
        we = Object(s.b)(
          function (e) {
            return { grid: U(e), obstaclesCoordinates: B(e) };
          },
          {
            createObstacles: x,
            roverClear: function () {
              return { type: d };
            },
            roverNewKeyboardMove: function (e) {
              var t = e.code,
                n = e.grid,
                r = e.obstaclesCoordinates;
              return {
                type: f,
                payload: { code: t, grid: n, obstaclesCoordinates: r },
              };
            },
            roverSetPosition: function (e) {
              return { type: O, payload: { position: e } };
            },
          }
        )(ye),
        Ce = n(18),
        Ne = function () {
          var e = [],
            t = window.__REDUX_DEVTOOLS_EXTENSION__;
          'function' === typeof t && e.push(t({ name: '- ROVER MARS -' }));
          var n = p.d.apply(void 0, [Object(p.a)(Ce.a)].concat(e));
          return { store: Object(p.e)(z, {}, n) };
        },
        ke = (n(32), Ne().store);
      a.a.render(
        Object(r.jsx)(c.a.StrictMode, {
          children: Object(r.jsx)(s.a, {
            store: ke,
            children: Object(r.jsx)(we, {}),
          }),
        }),
        document.getElementById('root')
      );
    },
  },
  [[33, 1, 2]],
]);
//# sourceMappingURL=main.48fc3786.chunk.js.map
