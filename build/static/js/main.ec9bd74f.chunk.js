(this.webpackJsonpapp = this.webpackJsonpapp || []).push([
  [0],
  {
    134: function (e, t, n) {
      'use strict';
      n.r(t);
      var r,
        c,
        a,
        s,
        o,
        l,
        i = n(0),
        u = n.n(i),
        d = n(18),
        b = n.n(d),
        j = (n(73), n(8)),
        O = function (e) {
          return e.orderReducer.orders;
        },
        p = n(4),
        h = 'GET_PRODUCTS',
        m = 'PRODUCTS_RECEIVED',
        f = 'GET_PRODUCTS_FAILED',
        g = 'GET_COMPANIES',
        x = 'COMPANIES_RECEIVED',
        v = 'COMPANIES_FAILED',
        y = 'SET_TAGS',
        N = 'SET_ALL_TAGS',
        _ = 'SET_BRANDS',
        T = 'SET_ALL_BRANDS',
        R = 'SET_SORT',
        E = 'SET_PAGE_NUMBER',
        w = 'SET_ORDER',
        S = 'INCREMENT_ORDER',
        k = 'DECREMENT_ORDER',
        C = 'SET_ITEM_TYPE',
        I = function () {
          return { type: h };
        },
        L = function (e) {
          return { type: R, sort: e };
        },
        A = function (e) {
          return { type: S, order: e };
        },
        P = function () {
          var e = Object(j.c)(O),
            t = Object(j.b)();
          return {
            models: { orders: e },
            operations: {
              handleDecrementOrder: function (e) {
                return t(
                  (function (e) {
                    return { type: k, order: e };
                  })(e),
                );
              },
              handleIncrementOrder: function (e) {
                return t(A(e));
              },
              totalOrder: function (e) {
                return e.reduce(function (e, t) {
                  return e + Number(t.price) * t.count;
                }, 0);
              },
            },
          };
        },
        D = n(1),
        H = function () {
          var e = P(),
            t = e.models,
            n = e.operations,
            r = t.orders,
            c = n.totalOrder,
            a = c(r) > 0;
          return Object(D.jsxs)(D.Fragment, {
            children: [
              Object(D.jsx)('div', {
                className: 'w-6/12 flex justify-end relative',
                children: Object(D.jsx)('img', {
                  className: 'Header-logo',
                  src: '/icons/market.svg',
                  alt: 'Logo',
                }),
              }),
              a &&
                Object(D.jsx)('div', {
                  className: 'w-6/12 flex justify-end absolute top-0 right-0',
                  children: Object(D.jsxs)('span', {
                    className: 'font-sans  text-xs mr-32 flex py-5 px-4',
                    style: { backgroundColor: '#147594' },
                    children: [
                      Object(D.jsx)('span', {
                        children: Object(D.jsx)('img', {
                          className: 'Header-logo',
                          src: '/icons/lock.svg',
                          alt: 'Logo',
                        }),
                      }),
                      Object(D.jsxs)('span', {
                        className: 'text-white font-semibold text-base',
                        children: ['\xa3 ', c(r)],
                      }),
                    ],
                  }),
                }),
            ],
          });
        },
        W = function () {
          return Object(D.jsxs)('div', {
            className:
              'flex justify-center text-blue-400 font-normal text-sm relative',
            children: [
              Object(D.jsxs)('span', {
                className: 'mr-4',
                children: ['\xa9', new Date().getFullYear(), ' Market'],
              }),
              Object(D.jsx)('span', {
                className: 'absolute bottom-1',
                children: '.',
              }),
              Object(D.jsx)('span', {
                className: 'ml-4',
                children: 'Privacy Policy',
              }),
            ],
          });
        };
      !(function (e) {
        (e.Radio = 'Radio'), (e.Square = 'Square');
      })(r || (r = {})),
        (function (e) {
          (e.mug = 'mug'), (e.shirt = 'shirt');
        })(c || (c = {})),
        (function (e) {
          (e.PRICE_LOW_TO_HIGH = 'PRICE_LOW_TO_HIGH'),
            (e.PRICE_HIGH_TO_LOW = 'PRICE_HIGH_TO_LOW'),
            (e.NEW_TO_OLD = 'NEW_TO_OLD'),
            (e.OLD_TO_NEW = 'OLD_TO_NEW');
        })(a || (a = {})),
        ((o = s || (s = {})).All = 'All'),
        (o.Trees = 'Trees'),
        (o.Beach = 'Beach'),
        (o.Ocean = 'Ocean'),
        (o.Water = 'Water'),
        (o.Animal = 'Animal'),
        (o.Bear = 'Bear'),
        (o.Road = 'Road'),
        (o.Rocks = 'Rocks'),
        (o.Sunset = 'Sunset'),
        (o.Rust = 'Rust'),
        (o.Old = 'Old'),
        (o.Car = 'Car'),
        (o.Coffee = 'Coffee'),
        (o.Fog = 'Fog'),
        (o.People = 'People'),
        (o.Dock = 'Dock'),
        (o.Person = 'Person'),
        (o.Hills = 'Hills'),
        (o.Animals = 'Animals'),
        (o.Sheep = 'Sheep'),
        (o.Lake = 'Lake'),
        (o.Building = 'Building'),
        (o.Metal = 'Metal'),
        (o.Woman = 'Woman'),
        (function (e) {
          (e.Shirt = 'shirt'), (e.Mug = 'mug');
        })(l || (l = {}));
      var B = function (e) {
          var t = e.checked;
          return Object(D.jsx)('div', {
            children: t
              ? Object(D.jsx)('img', {
                  className: 'Header-logo',
                  src: '/icons/radio-check-box-on.svg',
                  alt: 'Logo',
                })
              : Object(D.jsx)('img', {
                  className: 'Header-logo',
                  src: '/icons/radio-check-box-off.svg',
                  alt: 'Logo',
                }),
          });
        },
        G = function (e) {
          var t = e.checked;
          return Object(D.jsx)('div', {
            children: t
              ? Object(D.jsx)('img', {
                  className: 'Header-logo',
                  src: '/icons/square-check-box-on.svg',
                  alt: 'Logo',
                })
              : Object(D.jsx)('img', {
                  className: 'Header-logo',
                  src: '/icons/square-check-box-off.svg',
                  alt: 'Logo',
                }),
          });
        },
        M = function (e) {
          var t = e.checked,
            n = e.type;
          return Object(D.jsx)('div', {
            className: 'inline-block align-middle',
            children:
              n === r.Radio
                ? Object(D.jsx)(B, { checked: t })
                : Object(D.jsx)(G, { checked: t }),
          });
        },
        V = n(17),
        F = function () {
          var e = (function () {
              var e = Object(i.useState)(''),
                t = Object(V.a)(e, 2),
                n = t[0],
                r = t[1],
                c = Object(j.b)();
              return {
                models: { sortBy: n },
                operations: {
                  handleSort: function (e) {
                    n === e ? (r(''), c(L(''))) : (r(e), c(L(e))), c(I());
                  },
                },
              };
            })(),
            t = e.models,
            n = e.operations,
            c = t.sortBy,
            s = n.handleSort;
          return Object(D.jsxs)('div', {
            className: 'px-2 py-4',
            children: [
              Object(D.jsx)('h3', {
                className: 'p-2 mb-2 text-gray-700 font-normal text-base',
                children: 'Sorting',
              }),
              Object(D.jsxs)('ul', {
                className: 'bg-white py-4',
                children: [
                  Object(D.jsxs)('li', {
                    className:
                      'p-2 text-gray-700 font-normal text-base cursor-pointer focus:outline-none',
                    onClick: function () {
                      return s(a.PRICE_LOW_TO_HIGH);
                    },
                    children: [
                      Object(D.jsx)('span', {
                        className: 'm-2',
                        children: Object(D.jsx)(M, {
                          checked: a.PRICE_LOW_TO_HIGH === c,
                          type: r.Radio,
                        }),
                      }),
                      ' Price low to high',
                    ],
                  }),
                  Object(D.jsxs)('li', {
                    className:
                      'p-2 text-gray-700 font-normal text-base cursor-pointer focus:outline-none',
                    onClick: function () {
                      return s(a.PRICE_HIGH_TO_LOW);
                    },
                    children: [
                      Object(D.jsx)('span', {
                        className: 'm-2',
                        children: Object(D.jsx)(M, {
                          checked: a.PRICE_HIGH_TO_LOW === c,
                          type: r.Radio,
                        }),
                      }),
                      ' Price high to low',
                    ],
                  }),
                  Object(D.jsxs)('li', {
                    className:
                      'p-2 text-gray-700 font-normal text-base cursor-pointer focus:outline-none',
                    onClick: function () {
                      return s(a.NEW_TO_OLD);
                    },
                    children: [
                      Object(D.jsx)('span', {
                        className: 'm-2',
                        children: Object(D.jsx)(M, {
                          checked: a.NEW_TO_OLD === c,
                          type: r.Radio,
                        }),
                      }),
                      ' New to old',
                    ],
                  }),
                  Object(D.jsxs)('li', {
                    className:
                      'p-2 text-gray-700 font-normal text-base cursor-pointer focus:outline-none',
                    onClick: function () {
                      return s(a.OLD_TO_NEW);
                    },
                    children: [
                      Object(D.jsx)('span', {
                        className: 'm-2',
                        children: Object(D.jsx)(M, {
                          checked: a.OLD_TO_NEW === c,
                          type: r.Radio,
                        }),
                      }),
                      ' Old to new',
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        q = function (e) {
          var t = e.order,
            n = e.handleDecrementOrder,
            r = e.handleIncrementOrder;
          return Object(D.jsxs)('div', {
            className: 'flex flex-row p-2 justify-between border-b-2',
            children: [
              Object(D.jsxs)('div', {
                className: 'p-2',
                children: [
                  Object(D.jsx)('h3', {
                    className: 'text-gray-600 text-base font-medium',
                    children: t.slug,
                  }),
                  Object(D.jsxs)('span', {
                    className: 'text-blue-400 font-semibold',
                    children: ['\xa3 ', t.price],
                  }),
                ],
              }),
              Object(D.jsxs)('div', {
                className: 'flex flex-row cursor-pointer',
                children: [
                  Object(D.jsx)('img', {
                    className: '',
                    src: '/icons/minus.svg',
                    alt: 'minus',
                    onClick: function () {
                      return n(t);
                    },
                  }),
                  Object(D.jsx)('button', {
                    className: 'bg-blue-400 p-4 text-white font-semibold mx-2 ',
                    children: t.count,
                  }),
                  Object(D.jsx)('img', {
                    className: '',
                    src: '/icons/plus.svg',
                    alt: 'plus',
                    onClick: function () {
                      return r(t);
                    },
                  }),
                ],
              }),
            ],
          });
        },
        U = function () {
          var e = P(),
            t = e.models,
            n = e.operations,
            r = t.orders,
            c = n.handleDecrementOrder,
            a = n.handleIncrementOrder,
            s = n.totalOrder;
          return 0 === r.length
            ? null
            : Object(D.jsxs)('div', {
                className: 'border-8 border-blue-400 bg-white p-2 ',
                children: [
                  Object(D.jsx)('div', {
                    className: 'h-80 overflow-y-scroll',
                    children: r.map(function (e, t) {
                      return Object(D.jsx)(
                        q,
                        {
                          order: e,
                          handleDecrementOrder: c,
                          handleIncrementOrder: a,
                        },
                        'ord-'.concat(t),
                      );
                    }),
                  }),
                  Object(D.jsx)('div', {
                    className: 'flex justify-end mb-2 mt-4',
                    children: Object(D.jsxs)('button', {
                      className:
                        'border-2 border-blue-400 p-3 text-blue-400 font-semibold',
                      children: ['\xa3 ', s(r)],
                    }),
                  }),
                ],
              });
        },
        J = function (e) {
          var t = e.product;
          return Object(D.jsxs)('div', {
            className: 'w-32 p-4',
            children: [
              Object(D.jsx)('div', {
                className: 'p-4 bg-gray-100 rounded-md',
                children: Object(D.jsx)('img', {
                  className: '',
                  src: '/icons/product.jpeg',
                  alt: 'Product',
                }),
              }),
              Object(D.jsxs)('div', {
                children: [
                  Object(D.jsx)('div', {
                    className: ' p-2',
                    children: Object(D.jsxs)('span', {
                      className: 'text-blue-400 font-semibold',
                      children: ['\xa3 ', t.price],
                    }),
                  }),
                  Object(D.jsx)('div', {
                    children: Object(D.jsx)('span', {
                      className:
                        'text-gray-900 font-semibold leading-3 text-sm',
                      children: t.name,
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        Y = function (e) {
          return e.productReducer.products;
        },
        Z = function () {
          var e = Object(j.c)(Y),
            t = Object(j.c)(O),
            n = Object(j.b)();
          return {
            models: { products: e },
            operations: {
              handleSetProduct: function (e) {
                if (
                  0 !== t.length &&
                  0 !==
                    t.filter(function (t) {
                      return t.slug === e.slug;
                    }).length
                )
                  return void n(A(e));
                n(
                  (function (e) {
                    return {
                      type: w,
                      order: Object(p.a)(Object(p.a)({}, e), {}, { count: 1 }),
                    };
                  })(e),
                );
              },
              handleSetItemType: function (e) {
                n(
                  (function (e) {
                    return { type: C, itemType: e };
                  })(e),
                ),
                  n(I());
              },
            },
          };
        },
        z = n(66),
        K = function () {
          return Object(D.jsx)('div', {
            className: 'w-full h-1/3 flex justify-center items-center',
            children: Object(D.jsx)(z.a, {
              className: 'absolute mt-36 animate-spin h-10 w-10 text-primary',
            }),
          });
        },
        Q = n(62),
        X = n.n(Q),
        $ = function () {
          var e = Z(),
            t = e.models,
            n = e.operations,
            r = t.products,
            c = n.handleSetProduct,
            a = n.handleSetItemType;
          return X()(r)
            ? Object(D.jsx)(K, {})
            : Object(D.jsxs)('div', {
                className: 'px-2 py-4 ',
                children: [
                  Object(D.jsx)('h3', {
                    className: 'p-2 mb-2 text-gray-700 font-normal text-lg',
                    children: 'Products',
                  }),
                  Object(D.jsxs)('div', {
                    className: 'p-2 mb-2',
                    children: [
                      Object(D.jsx)('button', {
                        className:
                          'bg-blue-400 mr-2 px-4 py-1 font-semibold rounded-sm text-white',
                        onClick: function () {
                          return a(l.Mug);
                        },
                        children: l.Mug,
                      }),
                      Object(D.jsx)('button', {
                        className:
                          'bg-pink-100 px-4 py-1 font-normal rounded-sm text-blue-400',
                        onClick: function () {
                          return a(l.Shirt);
                        },
                        children: l.Shirt,
                      }),
                    ],
                  }),
                  Object(D.jsx)('div', {
                    className:
                      'flex flex-wrap justify-center align-center p-4 bg-white',
                    children:
                      null === r || void 0 === r
                        ? void 0
                        : r.map(function (e, t) {
                            return Object(D.jsxs)(
                              'div',
                              {
                                children: [
                                  Object(D.jsx)(J, { product: e }),
                                  Object(D.jsx)('div', {
                                    className: 'p-4',
                                    children: Object(D.jsx)('button', {
                                      className:
                                        'bg-blue-400 w-full rounded text-white font-medium',
                                      onClick: function () {
                                        return c(e);
                                      },
                                      children: 'Add',
                                    }),
                                  }),
                                ],
                              },
                              ''.concat(e.name, '-').concat(t),
                            );
                          }),
                  }),
                ],
              });
        },
        ee = function (e) {
          var t = e.brand,
            n = e.checked,
            c = e.handleBrand,
            a = e.handleBrandCount;
          return Object(D.jsxs)('li', {
            className:
              'p-2 text-gray-700 font-normal text-base cursor-pointer focus:outline-none',
            onClick: function () {
              return c(t);
            },
            children: [
              Object(D.jsx)('span', {
                className: 'm-2 ',
                children: Object(D.jsx)(M, { checked: n, type: r.Square }),
              }),
              Object(D.jsxs)('span', { children: [t.name, ' (', a(t), ')'] }),
            ],
          });
        },
        te = function (e) {
          var t = e.searchValue,
            n = e.placeholder,
            r = e.handleChange;
          return Object(D.jsx)('div', {
            children: Object(D.jsx)('input', {
              name: 'searchTerm',
              value: t,
              className:
                'pl-12 w-full h-12 border focus:bg-white border-primary focus:border-primary focus:outline-none',
              placeholder: n,
              onChange: r,
            }),
          });
        },
        ne = n(12),
        re = n(21),
        ce = n.n(re),
        ae = function (e) {
          return e.companyReducer.companies;
        },
        se = function (e) {
          return e.brandReducer.brands;
        },
        oe = function (e, t) {
          return function (n) {
            return e
              ? n.map(function (n) {
                  return (t && n.toLowerCase().includes(e.toLowerCase())) ||
                    n.toLowerCase().includes(e.toLowerCase())
                    ? n
                    : void 0;
                })
              : [];
          };
        },
        le = function () {
          var e = Object(j.c)(ae),
            t = Object(j.c)(se),
            n = Object(j.c)(Y),
            r = Object(i.useState)([]),
            c = Object(V.a)(r, 2),
            a = c[0],
            s = c[1],
            o = Object(i.useState)(''),
            l = Object(V.a)(o, 2),
            u = l[0],
            d = l[1],
            b = Object(j.b)();
          Object(i.useEffect)(
            function () {
              e && s([{ slug: 'All', name: 'All' }].concat(Object(ne.a)(e)));
            },
            [e],
          );
          return {
            operations: {
              handleSearch: function (t) {
                var n = t.target.value;
                if ((d(n), a))
                  if (n) {
                    var r = oe(n, 'name')(e);
                    s(ce()(Object(ne.a)(r)));
                  } else s(e);
              },
              handleBrand: function (t) {
                'All' === t.slug
                  ? b(
                      (function (e) {
                        return { type: T, brands: e };
                      })(
                        (function (e) {
                          return e.map(function (e) {
                            return e.slug;
                          });
                        })(
                          [{ slug: 'All', name: 'All' }].concat(
                            Object(ne.a)(e),
                          ),
                        ),
                      ),
                    )
                  : b(
                      (function (e) {
                        return { type: _, brand: e };
                      })(t.slug),
                    ),
                  b(I());
              },
              countBrand: function (e) {
                var t = n.filter(function (t) {
                  return t.manufacturer === e.slug;
                });
                return 'All' === e.slug ? n.length : t.length;
              },
              isBrandSelected: function (e) {
                return t.includes(e);
              },
            },
            models: { brands: a, searchValue: u },
          };
        },
        ie = function () {
          var e = le(),
            t = e.models,
            n = e.operations,
            r = t.brands,
            c = t.searchValue,
            a = n.handleSearch,
            s = n.handleBrand,
            o = n.countBrand,
            l = n.isBrandSelected;
          return r && (null === r || void 0 === r ? void 0 : r.length) <= 1
            ? Object(D.jsx)(K, {})
            : Object(D.jsxs)('div', {
                className: ' px-2 py-4 mt-10',
                children: [
                  Object(D.jsx)('h3', {
                    className: 'p-2 mb-2 text-gray-700 font-normal text-base',
                    children: 'Brands',
                  }),
                  Object(D.jsxs)('div', {
                    className: 'bg-white py-4',
                    children: [
                      Object(D.jsx)(te, {
                        searchValue: c,
                        placeholder: 'Search Brand',
                        handleChange: a,
                      }),
                      r &&
                        Object(D.jsx)('ul', {
                          className: 'h-64 overflow-y-scroll',
                          children:
                            null === r || void 0 === r
                              ? void 0
                              : r.map(function (e, t) {
                                  return Object(D.jsx)(
                                    u.a.Fragment,
                                    {
                                      children: Object(D.jsx)(ee, {
                                        brand: e,
                                        checked: l(e.slug),
                                        handleBrand: s,
                                        handleBrandCount: o,
                                      }),
                                    },
                                    ''.concat(e, '-').concat(t),
                                  );
                                }),
                        }),
                    ],
                  }),
                ],
              });
        },
        ue = function (e) {
          var t = e.tag,
            n = e.checked,
            c = e.handleTag,
            a = (e.count, e.handleTagCount);
          return Object(D.jsxs)('li', {
            className:
              'p-2 text-gray-700 font-normal text-base cursor-pointer focus:outline-none',
            onClick: function () {
              return c(t);
            },
            children: [
              Object(D.jsx)('span', {
                className: 'm-2 ',
                children: Object(D.jsx)(M, { checked: n, type: r.Square }),
              }),
              ' ',
              t,
              ' (',
              a(t),
              ')',
            ],
          });
        },
        de = n(63),
        be = n.n(de),
        je = n(64),
        Oe = n.n(je),
        pe = function (e) {
          return e.tagReducer.tags;
        },
        he = Object.values(s),
        me = function () {
          var e = Object(j.c)(pe),
            t = Object(j.c)(Y),
            n = Object(i.useState)(he),
            r = Object(V.a)(n, 2),
            c = r[0],
            a = r[1],
            s = Object(i.useState)(''),
            o = Object(V.a)(s, 2),
            l = o[0],
            u = o[1],
            d = Object(j.b)();
          return {
            models: { tags: c, searchValue: l },
            operations: {
              handleSearch: function (e) {
                var t = e.target.value;
                if ((u(t), c))
                  if (t) {
                    var n = oe(t)(he);
                    a(ce()(Object(ne.a)(n)));
                  } else a(he);
              },
              handleTag: function (e) {
                d(
                  'All' === e
                    ? (function (e) {
                        return { type: N, tags: e };
                      })(he)
                    : (function (e) {
                        return { type: y, tag: e };
                      })(e),
                ),
                  d(I());
              },
              countTag: function (e) {
                var n = be()(
                    t.map(function (e) {
                      return e.tags;
                    }),
                  ),
                  r = n.filter(function (t) {
                    return t === e;
                  });
                return 'All' === e ? n.length - Oe()(n).length : r.length;
              },
              isTagSelected: function (t) {
                return e.includes(t);
              },
            },
          };
        },
        fe = function () {
          var e = me(),
            t = e.models,
            n = t.tags,
            r = t.searchValue,
            c = e.operations,
            a = c.handleSearch,
            s = c.handleTag,
            o = c.countTag,
            l = c.isTagSelected;
          return Object(D.jsxs)('div', {
            className: 'px-2 py-4',
            children: [
              Object(D.jsx)('h3', {
                className: 'p-2 mb-2 text-gray-700 font-normal text-base',
                children: 'Tags',
              }),
              Object(D.jsxs)('div', {
                className: 'bg-white py-4',
                children: [
                  Object(D.jsx)(te, {
                    searchValue: r,
                    placeholder: 'Search Tag',
                    handleChange: a,
                  }),
                  Object(D.jsx)('ul', {
                    className: 'h-64 overflow-y-scroll',
                    children: n.map(function (e, t) {
                      return Object(D.jsx)(
                        u.a.Fragment,
                        {
                          children: Object(D.jsx)(ue, {
                            tag: e,
                            checked: l(e),
                            handleTag: s,
                            handleTagCount: o,
                          }),
                        },
                        ''.concat(e, '-').concat(t),
                      );
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        ge = n(152),
        xe = n(154),
        ve = Object(ge.a)(function (e) {
          return { root: { '& > * + *': { marginTop: e.spacing(12) } } };
        });
      function ye() {
        var e = Object(j.c)(function (e) {
            return e.productReducer.count;
          }),
          t = Object(j.b)(),
          n = ve(),
          r = u.a.useState(1),
          c = Object(V.a)(r, 2),
          a = c[0],
          s = c[1];
        return Object(D.jsx)('div', {
          className: n.root,
          children: Object(D.jsx)(xe.a, {
            count: e,
            page: a,
            onChange: function (e, n) {
              s(n),
                t(
                  (function (e) {
                    return { type: E, page: e };
                  })(n),
                ),
                t(I());
            },
            shape: 'rounded',
            color: 'primary',
            boundaryCount: 4,
          }),
        });
      }
      var Ne = function () {
          var e = Object(j.b)();
          return (
            Object(i.useEffect)(function () {
              e(I()), e({ type: g });
            }, []),
            Object(D.jsxs)('div', {
              className: 'grid grid-cols-12 gap-2  bg-gray-50',
              children: [
                Object(D.jsx)('header', {
                  className: 'row-auto col-span-12 bg-blue-400 py-3 flex',
                  children: Object(D.jsx)(H, {}),
                }),
                Object(D.jsxs)('aside', {
                  className:
                    'col-span-3 xl:col-span-3 row-span-4 px-4 hidden lg:block',
                  children: [
                    Object(D.jsx)(F, {}),
                    Object(D.jsx)(ie, {}),
                    Object(D.jsx)(fe, {}),
                  ],
                }),
                Object(D.jsxs)('main', {
                  className:
                    'col-span-2 md:col-span-7 lg:col-span-6 xl:col-span-6 bg-transparent row-span-4 flex flex-wrap align-center',
                  children: [Object(D.jsx)($, {}), Object(D.jsx)(ye, {})],
                }),
                Object(D.jsx)('aside', {
                  className:
                    'col-span-5 lg:col-span-3 xl:col-span-3  row-span-4 px-4',
                  children: Object(D.jsx)(U, {}),
                }),
                Object(D.jsx)('footer', {
                  className: 'row-auto col-span-12 p-8',
                  children: Object(D.jsx)(W, {}),
                }),
              ],
            })
          );
        },
        _e = n(19),
        Te = n(67),
        Re = n(14),
        Ee = n.n(Re),
        we = n(9),
        Se = n(35),
        ke = n.n(Se),
        Ce = function (e) {
          return e.sortReducer.sort;
        },
        Ie = function (e) {
          return e.pageReducer.page;
        },
        Le = function (e) {
          return e.itemTypeReducer.itemType;
        },
        Ae = n(44),
        Pe = n.n(Ae),
        De = Pe.a.get('REACT_APP_API_URL').asString(),
        He = Pe.a.get('REACT_APP_PAGE_SIZE').asString(),
        We = function (e) {
          var t = e.tags,
            n = e.brands,
            r = e.page,
            c = e.sort,
            s = e.itemType,
            o = (function (e) {
              if (e) {
                if (e === a.PRICE_HIGH_TO_LOW) return ['price', 'desc'];
                if (e === a.PRICE_LOW_TO_HIGH) return ['price', 'asc'];
                if (e === a.NEW_TO_OLD) return ['added', 'desc'];
                if (e === a.OLD_TO_NEW) return ['added', 'asc'];
              }
              return '';
            })(c),
            l = t
              .filter(function (e) {
                return 'All' !== e;
              })
              .map(function (e) {
                return '&tags_like='.concat(e);
              })
              .join(''),
            i = n
              .filter(function (e) {
                return 'All' !== e;
              })
              .map(function (e) {
                return '&manufacturer='.concat(e);
              })
              .join(''),
            u = o ? '&_sort='.concat(o[0], '&_order=').concat(o[1]) : '',
            d = 0 === t.length ? '' : l,
            b = 0 === n.length ? '' : i,
            j = s ? '&itemType_like='.concat(s) : '';
          return ''
            .concat(De, '/products?_page=')
            .concat(null !== r && void 0 !== r ? r : 1, '&_limit=')
            .concat(He)
            .concat(u)
            .concat(d)
            .concat(b)
            .concat(j);
        },
        Be = Ee.a.mark(Ve),
        Ge = Ee.a.mark(Fe),
        Me = function (e) {
          var t = e.tags,
            n = e.brands,
            r = e.page,
            c = e.sort,
            a = e.itemType;
          return ke.a.get(
            We({ tags: t, brands: n, page: r, sort: c, itemType: a }),
          );
        };
      function Ve(e) {
        var t, n, r, c, a, s;
        return Ee.a.wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.prev = 0), (e.next = 3), Object(we.d)(pe);
                case 3:
                  return (t = e.sent), (e.next = 6), Object(we.d)(se);
                case 6:
                  return (n = e.sent), (e.next = 9), Object(we.d)(Ie);
                case 9:
                  return (r = e.sent), (e.next = 12), Object(we.d)(Ce);
                case 12:
                  return (c = e.sent), (e.next = 15), Object(we.d)(Le);
                case 15:
                  return (
                    (a = e.sent),
                    (e.next = 18),
                    Object(we.b)(Me, {
                      tags: t,
                      brands: n,
                      page: r,
                      sort: c,
                      itemType: a,
                    })
                  );
                case 18:
                  return (
                    (s = e.sent),
                    (e.next = 21),
                    Object(we.c)({
                      type: m,
                      products: s.data,
                      count: parseInt(s.headers['x-total-count']),
                    })
                  );
                case 21:
                  e.next = 27;
                  break;
                case 23:
                  return (
                    (e.prev = 23),
                    (e.t0 = e.catch(0)),
                    (e.next = 27),
                    Object(we.c)({ type: f, message: e.t0.message })
                  );
                case 27:
                case 'end':
                  return e.stop();
              }
          },
          Be,
          null,
          [[0, 23]],
        );
      }
      function Fe() {
        return Ee.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(we.e)(h, Ve);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ge);
      }
      var qe = Fe,
        Ue = Ee.a.mark(Ze),
        Je = Ee.a.mark(ze),
        Ye = function () {
          return ke.a.get(''.concat(De, '/companies'));
        };
      function Ze() {
        var e;
        return Ee.a.wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.prev = 0), (t.next = 3), Object(we.b)(Ye);
                case 3:
                  return (
                    (e = t.sent),
                    (t.next = 6),
                    Object(we.c)(((r = e.data), { type: x, companies: r }))
                  );
                case 6:
                  t.next = 12;
                  break;
                case 8:
                  return (
                    (t.prev = 8),
                    (t.t0 = t.catch(0)),
                    (t.next = 12),
                    Object(we.c)(((n = t.t0.message), { type: v, message: n }))
                  );
                case 12:
                case 'end':
                  return t.stop();
              }
            var n, r;
          },
          Ue,
          null,
          [[0, 8]],
        );
      }
      function ze() {
        return Ee.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(we.e)(g, Ze);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Je);
      }
      var Ke = Ee.a.mark(Qe);
      function Qe() {
        return Ee.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(we.a)([qe(), ze()]);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Ke);
      }
      var Xe = Object(_e.combineReducers)({
          companyReducer: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case g:
                return Object(p.a)(Object(p.a)({}, e), {}, { loading: !0 });
              case x:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { companies: t.companies, loading: !1 },
                );
              case v:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { message: t.message, loading: !1 },
                );
              default:
                return e;
            }
          },
          productReducer: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case h:
                return Object(p.a)(Object(p.a)({}, e), {}, { loading: !0 });
              case m:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { products: t.products, count: t.count, loading: !1 },
                );
              case f:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { message: t.message, loading: !1 },
                );
              default:
                return e;
            }
          },
          tagReducer: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { tags: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case y:
                if (0 === e.tags.length)
                  return Object(p.a)(Object(p.a)({}, e), {}, { tags: [t.tag] });
                if (e.tags.includes('All'))
                  return Object(p.a)(Object(p.a)({}, e), {}, { tags: [] });
                if (e.tags.includes(t.tag)) {
                  var n = e.tags.filter(function (e) {
                    return e !== t.tag;
                  });
                  return Object(p.a)(Object(p.a)({}, e), {}, { tags: n });
                }
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { tags: [].concat(Object(ne.a)(e.tags), [t.tag]) },
                );
              case N:
                return e.tags.length === t.tags.length
                  ? Object(p.a)(Object(p.a)({}, e), {}, { tags: [] })
                  : Object(p.a)(
                      Object(p.a)({}, e),
                      {},
                      { tags: Object(ne.a)(t.tags) },
                    );
              default:
                return e;
            }
          },
          sortReducer: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case R:
                return Object(p.a)(Object(p.a)({}, e), {}, { sort: t.sort });
              default:
                return e;
            }
          },
          brandReducer: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { brands: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case _:
                if (0 === e.brands.length)
                  return Object(p.a)(
                    Object(p.a)({}, e),
                    {},
                    { brands: [t.brand] },
                  );
                if (e.brands.includes('All'))
                  return Object(p.a)(Object(p.a)({}, e), {}, { brands: [] });
                if (e.brands.includes(t.brand)) {
                  var n = e.brands.filter(function (e) {
                    return e !== t.brand;
                  });
                  return Object(p.a)(Object(p.a)({}, e), {}, { brands: n });
                }
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { brands: [].concat(Object(ne.a)(e.brands), [t.brand]) },
                );
              case T:
                return e.brands.length === t.brands.length
                  ? Object(p.a)(Object(p.a)({}, e), {}, { brands: [] })
                  : Object(p.a)(
                      Object(p.a)({}, e),
                      {},
                      { brands: Object(ne.a)(t.brands) },
                    );
              default:
                return e;
            }
          },
          pageReducer: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case E:
                return Object(p.a)(Object(p.a)({}, e), {}, { page: t.page });
              default:
                return e;
            }
          },
          orderReducer: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { orders: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case w:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    orders: [].concat(
                      Object(ne.a)(
                        null === e || void 0 === e ? void 0 : e.orders,
                      ),
                      [t.order],
                    ),
                  },
                );
              case S:
                var n = e.orders.map(function (e) {
                  return e.slug === t.order.slug
                    ? {
                        slug: e.slug,
                        name: e.name,
                        count: e.count + 1,
                        price: e.price,
                      }
                    : e;
                });
                return Object(p.a)(Object(p.a)({}, e), {}, { orders: n });
              case k:
                var r = e.orders.map(function (e) {
                  if (e.slug === t.order.slug) {
                    if (1 === t.order.count) return;
                    return {
                      slug: e.slug,
                      name: e.name,
                      count: e.count - 1,
                      price: e.price,
                    };
                  }
                  return e;
                });
                return Object(p.a)(Object(p.a)({}, e), {}, { orders: ce()(r) });
              default:
                return e;
            }
          },
          itemTypeReducer: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { itemType: '' },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case C:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { itemType: t.itemType },
                );
              default:
                return e;
            }
          },
        }),
        $e = {
          orderReducer: { orders: [] },
          tagReducer: { tags: [] },
          productReducer: { products: [] },
          companyReducer: { companies: [] },
          brandReducer: { brands: [] },
          sortReducer: {},
          pageReducer: {},
          itemTypeReducer: { itemType: '' },
        },
        et = n(65),
        tt = Object(Te.a)(),
        nt = Object(_e.createStore)(function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : $e,
            t = arguments.length > 1 ? arguments[1] : void 0;
          return Xe(e, t);
        }, Object(et.composeWithDevTools)(Object(_e.applyMiddleware)(tt)));
      tt.run(Qe),
        b.a.render(
          Object(D.jsx)(u.a.StrictMode, {
            children: Object(D.jsx)(j.a, {
              store: nt,
              children: Object(D.jsx)(Ne, {}),
            }),
          }),
          document.getElementById('root'),
        );
    },
    73: function (e, t, n) {},
  },
  [[134, 1, 2]],
]);
//# sourceMappingURL=main.ec9bd74f.chunk.js.map
