(window.webpackJsonp = window.webpackJsonp || []).push([
    [163], {
        5661: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o, i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                r = (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, i) {
                    var r = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {}), t && r)
                        for (var s in r) void 0 === t[s] && (t[s] = r[s]);
                    else t || (t = r || {});
                    if (1 === a) t.children = i;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    return {
                        $$typeof: o,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }),
                a = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                s = M(n(3)),
                l = M(n(6328)),
                u = n(524),
                f = M(n(6327)),
                c = M(n(6898)),
                d = n(588),
                p = M(n(6895)),
                h = M(n(86)),
                m = M(n(6325)),
                v = M(n(6891)),
                y = M(n(6888)),
                g = M(n(6885)),
                E = M(n(6884)),
                _ = M(n(6882)),
                I = M(n(6881)),
                S = n(6163),
                N = n(943),
                T = M(n(6008)),
                A = M(n(274)),
                O = M(n(17)),
                b = M(n(6869)),
                R = n(0);

            function M(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            s.default.initialize();
            var C = (0, _.default)(f.default),
                w = (0, _.default)(c.default),
                L = (0, _.default)(p.default),
                P = (0, _.default)(m.default),
                D = (0, _.default)(v.default),
                x = (0, _.default)(y.default),
                B = (0, _.default)(g.default),
                F = (0, _.default)(E.default),
                k = function(e) {
                    function t(n) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var o = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, e.call(this, n)),
                            i = (0, u.parse)(location.search).redirect_to;
                        null != i && (0, d.isSafeRedirect)(i) && !i.startsWith(R.Routes.ME) || (i = null);
                        var r = null;
                        return null == n.invite && (r = (0, S.getArtForPath)(i)), o.state = {
                            splash: r,
                            redirectTo: i
                        }, o
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.getDerivedStateFromProps = function(e) {
                        var t = e.invite;
                        if (null != t && t.state === R.InviteStates.RESOLVED) {
                            var n = t.guild;
                            if (null != n && "string" == typeof n.splash) return {
                                splash: h.default.getGuildSplashURL({
                                    id: n.id,
                                    splash: n.splash
                                })
                            }
                        }
                        return {}
                    }, t.prototype.componentDidMount = function() {
                        var e = this.props.inviteCode;
                        null != e && O.default.track(R.AnalyticEvents.INVITE_OPENED, {
                            invite_code: e,
                            load_time: b.default.getTimeSinceNavigationStart()
                        }, !0), this.resolveInvite(this.props)
                    }, t.prototype.resolveInvite = function(e) {
                        var t = e.inviteCode;
                        null != t && (A.default.resolveInvite(t, R.PageAnalyticsLocations.INVITE), A.default.openNativeAppModal(t))
                    }, t.prototype.render = function() {
                        var e = this.state,
                            t = e.splash,
                            n = e.redirectTo;
                        return r(I.default, {
                            splash: t,
                            redirectTo: n
                        }, void 0, r(l.default.Route, {
                            path: R.Routes.LOGIN,
                            render: function(e) {
                                return a.createElement(C, i({}, e, {
                                    redirectTo: n
                                }))
                            }
                        }), r(l.default.Route, {
                            path: R.Routes.REGISTER,
                            render: function(e) {
                                return a.createElement(P, i({}, e, {
                                    redirectTo: n
                                }))
                            }
                        }), r(l.default.Route, {
                            path: R.Routes.INVITE_LOGIN(":invitecode"),
                            render: function(e) {
                                return N.isMobile || N.isTablet ? a.createElement(L, e) : a.createElement(w, i({
                                    login: !0
                                }, e))
                            }
                        }), r(l.default.Route, {
                            path: R.Routes.INVITE(":invitecode"),
                            render: function(e) {
                                return N.isMobile || N.isTablet ? a.createElement(L, e) : a.createElement(w, e)
                            }
                        }), r(l.default.Route, {
                            path: R.Routes.VERIFY,
                            render: function(e) {
                                return a.createElement(x, e)
                            }
                        }), r(l.default.Route, {
                            path: R.Routes.DISABLE_EMAIL_NOTIFICATIONS,
                            render: function(e) {
                                return a.createElement(F, e)
                            }
                        }), r(l.default.Route, {
                            path: R.Routes.AUTHORIZE_IP,
                            render: function(e) {
                                return a.createElement(D, e)
                            }
                        }), r(l.default.Route, {
                            path: R.Routes.RESET,
                            render: function(e) {
                                return a.createElement(B, e)
                            }
                        }))
                    }, t
                }(a.PureComponent);
            k.displayName = "ViewsWithAuth", t.default = s.default.connectStores([T.default], function(e) {
                var t = function(e) {
                    return null != e && null != e.params && null != e.params.invitecode ? e.params.invitecode : null
                }(e.match);
                return {
                    inviteCode: t,
                    invite: null != t ? T.default.getInvite(t) : null
                }
            })(k), e.exports = t.default
        },
        5985: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o, i = n(2),
                r = (o = i) && o.__esModule ? o : {
                    default: o
                },
                a = n(0);
            t.default = {
                trigger: function(e) {
                    r.default.dirtyDispatch({
                        type: a.ActionTypes.EXPERIMENT_TRIGGER,
                        experimentDescriptor: e
                    })
                },
                register: function(e, t) {
                    r.default.dispatch({
                        type: a.ActionTypes.EXPERIMENT_REGISTER,
                        store: e,
                        renderFunctions: t
                    })
                },
                overrideType: function(e, t) {
                    r.default.dispatch({
                        type: a.ActionTypes.EXPERIMENT_OVERRIDE_TYPE,
                        experimentId: e,
                        experimentType: t
                    })
                },
                overrideBucket: function(e, t) {
                    r.default.dispatch({
                        type: a.ActionTypes.EXPERIMENT_OVERRIDE_BUCKET,
                        experimentId: e,
                        experimentBucket: t
                    })
                }
            }, e.exports = t.default
        },
        5987: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.ActivityCount = t.AuthSpinner = t.SubText = t.Block = t.Input = t.ChannelIcon = t.GuildIcon = t.Avatar = t.Button = t.Image = t.VerifiedIcon = t.Subtitle = t.Title = void 0;
            var o, i = (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, i) {
                    var r = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {}), t && r)
                        for (var s in r) void 0 === t[s] && (t[s] = r[s]);
                    else t || (t = r || {});
                    if (1 === a) t.children = i;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    return {
                        $$typeof: o,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }),
                r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                a = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                s = S(n(9)),
                l = S(n(6)),
                u = S(n(71)),
                f = S(n(106)),
                c = S(n(59)),
                d = S(n(29)),
                p = S(n(43)),
                h = S(n(269)),
                m = S(n(164)),
                v = S(n(6061)),
                y = S(n(5991)),
                g = n(266),
                E = n(0),
                _ = S(n(6060)),
                I = S(n(5549));

            function S(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function N(e, t) {
                var n = {};
                for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            var T = function(e) {
                var t = e.className,
                    n = e.children,
                    o = N(e, ["className", "children"]);
                return a.createElement(u.default, r({}, o, {
                    color: u.default.Colors.WHITE,
                    weight: u.default.Weights.LIGHT,
                    className: (0, s.default)(I.default.title, t)
                }), n)
            };
            T.displayName = "Title", t.Title = T;
            var A = function(e) {
                var t = e.className,
                    n = e.children,
                    o = N(e, ["className", "children"]);
                return a.createElement(u.default, r({}, o, {
                    weight: u.default.Weights.NORMAL,
                    className: (0, s.default)(I.default.subTitle, t)
                }), n)
            };
            A.displayName = "Subtitle", t.Subtitle = A, (t.VerifiedIcon = function(e) {
                var t = e.theme,
                    n = void 0 === t ? E.ThemeTypes.DARK : t;
                return i(f.default, {
                    text: l.default.Messages.GUILD_VERIFIED,
                    position: f.default.Positions.LEFT,
                    color: f.default.Colors.BRAND
                }, void 0, i(c.default, {
                    className: I.default.verified,
                    name: c.default.Names.VERIFIED,
                    inner: n === E.ThemeTypes.DARK ? E.Colors.PRIMARY : E.Colors.PRIMARY_300,
                    checkmark: E.Colors.WHITE,
                    width: 25,
                    height: 25
                }))
            }).displayName = "VerifiedIcon";
            var O = function(e) {
                var t = e.className,
                    n = N(e, ["className"]);
                return a.createElement("img", r({
                    alt: ""
                }, n, {
                    className: (0, s.default)(I.default.image, t)
                }))
            };
            O.displayName = "Image", t.Image = O;
            var b = function(e) {
                var t, n = e.className,
                    o = N(e, ["className"]),
                    i = o.look === p.default.Looks.LINK;
                return a.createElement(p.default, r({
                    size: i ? p.default.Sizes.MIN : p.default.Sizes.LARGE,
                    fullWidth: !i,
                    className: (0, s.default)(n, (t = {}, t[I.default.button] = !i, t[I.default.linkButton] = i, t))
                }, o))
            };
            b.displayName = "Button", t.Button = b, b.Looks = p.default.Looks, b.Colors = p.default.Colors, b.Sizes = p.default.Sizes;
            var R = function(e) {
                var t = e.className,
                    n = e.src,
                    o = N(e, ["className", "src"]);
                return a.createElement(g.AvatarImage, r({
                    src: n,
                    className: (0, s.default)(I.default.inviteLargeIcon, t)
                }, o))
            };
            R.displayName = "Avatar", t.Avatar = R, R.Sizes = g.AvatarSizes;
            var M = function e(t) {
                var n = t.className,
                    o = t.guild,
                    i = t.size,
                    l = N(t, ["className", "guild", "size"]);
                return a.createElement(y.default, r({
                    guild: o,
                    size: i,
                    className: (0, s.default)(i === e.Sizes.XLARGE ? I.default.inviteLargeIcon : I.default.inviteSmallIcon, n)
                }, l))
            };
            M.displayName = "GuildIcon", t.GuildIcon = M, M.Sizes = y.default.Sizes;
            var C = function e(t) {
                var n = t.className,
                    o = t.channel,
                    i = t.size,
                    l = N(t, ["className", "channel", "size"]);
                return a.createElement(g.AvatarImage, r({
                    src: o.getIconURL(),
                    size: i,
                    className: (0, s.default)(i === e.Sizes.XLARGE ? I.default.inviteLargeIcon : I.default.inviteSmallIcon, n)
                }, l))
            };
            C.displayName = "ChannelIcon", t.ChannelIcon = C, C.Sizes = g.AvatarSizes;
            var w = function(e) {
                var t, n = e.label,
                    o = e.error,
                    l = e.placeholder,
                    u = e.value,
                    f = e.className,
                    c = e.inputClassName,
                    d = e.setRef,
                    p = N(e, ["label", "error", "placeholder", "value", "className", "inputClassName", "setRef"]);
                return i(h.default, {
                    title: n,
                    error: o,
                    className: f
                }, void 0, a.createElement(m.default, r({}, p, {
                    value: u,
                    inputRef: d,
                    placeholder: l,
                    className: I.default.input,
                    inputClassName: (0, s.default)(c, (t = {}, t[I.default.inputError] = null != o, t))
                })))
            };
            w.displayName = "Input", t.Input = w, (t.Block = function(e) {
                var t = e.className,
                    n = e.children;
                return i("div", {
                    className: (0, s.default)(I.default.block, t)
                }, void 0, n)
            }).displayName = "Block", (t.SubText = function(e) {
                var t = e.className,
                    n = e.children;
                return i(u.default, {
                    size: u.default.Sizes.SMALL,
                    className: (0, s.default)(I.default.subText, t)
                }, void 0, n)
            }).displayName = "SubText", (t.AuthSpinner = function(e) {
                var t = e.className,
                    n = e.hideQuote,
                    o = void 0 !== n && n;
                return i(d.default, {
                    direction: d.default.Direction.VERTICAL,
                    align: d.default.Align.CENTER,
                    className: t
                }, void 0, i(v.default, {
                    className: I.default.spinnerVideo
                }), o ? null : i(A, {
                    className: I.default.spinnerText
                }, void 0, _.default[Math.floor(Math.random() * _.default.length)][0]))
            }).displayName = "AuthSpinner", (t.ActivityCount = function(e) {
                var t = e.online,
                    n = e.total,
                    o = e.className;
                if (null == n) return null;
                var r = void 0;
                return null != t && t > 0 && (r = i("div", {
                    className: (0, s.default)(I.default.pill, I.default.pillOnline)
                }, void 0, i("i", {
                    className: I.default.pillIconOnline
                }), i(u.default, {
                    tag: "span",
                    size: u.default.Sizes.MEDIUM,
                    className: I.default.pillMessage
                }, void 0, l.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                    membersOnline: t
                })))), i(d.default, {
                    justify: d.default.Justify.CENTER,
                    className: o
                }, void 0, r, i("div", {
                    className: I.default.pill
                }, void 0, i("i", {
                    className: I.default.pillIconTotal
                }), i(u.default, {
                    tag: "span",
                    size: u.default.Sizes.MEDIUM,
                    className: I.default.pillMessage
                }, void 0, l.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                    count: n
                }))))
            }).displayName = "ActivityCount";
            var L = function(e) {
                var t = e.className,
                    n = e.tag,
                    o = void 0 === n ? "section" : n,
                    r = e.onSubmit,
                    a = e.children;
                return i(o, {
                    onSubmit: r,
                    className: (0, s.default)(I.default.authBox, "theme-dark", t)
                }, void 0, i("div", {
                    className: I.default.centeringWrapper
                }, void 0, a))
            };
            L.displayName = "AuthBox", t.default = L
        },
        5991: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o, i, r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                a = (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, i) {
                    var r = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {}), t && r)
                        for (var s in r) void 0 === t[s] && (t[s] = r[s]);
                    else t || (t = r || {});
                    if (1 === a) t.children = i;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    return {
                        $$typeof: o,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }),
                s = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                l = y(n(9)),
                u = n(225),
                f = n(107),
                c = y(n(106)),
                d = y(n(59)),
                p = y(n(80)),
                h = y(n(6)),
                m = n(0),
                v = y(n(5548));

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var g = {
                    MINI: "Mini",
                    SMALL: "Small",
                    MEDIUM: "Medium",
                    LARGE: "Large",
                    XLARGE: "XLarge"
                },
                E = ((i = {})[g.MINI] = [12, 12, 10, 10, 8, 6, 4], i[g.SMALL] = [14, 14, 12, 12, 10, 8, 6], i[g.MEDIUM] = [16, 16, 14, 14, 12, 10, 8], i[g.LARGE] = [18, 18, 16, 16, 14, 12, 10], i[g.XLARGE] = [20, 20, 18, 18, 16, 14, 12], i),
                _ = function(e) {
                    function t() {
                        return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t),
                            function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, e.apply(this, arguments))
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.renderAcronym = function() {
                        var e = this.props.guild;
                        return null != e.icon ? null : e.acronym
                    }, t.prototype.renderVerifiedIcon = function() {
                        var e = this.props,
                            t = e.showVerified,
                            n = e.guild,
                            o = e.verifiedIconOuterColor;
                        return !t || !n.hasFeature || n.hasFeature && !n.hasFeature(m.GuildFeatures.VERIFIED) ? null : a(c.default, {
                            color: c.default.Colors.BRAND,
                            text: h.default.Messages.GUILD_VERIFIED
                        }, void 0, a(d.default, {
                            className: v.default.verifiedIcon,
                            name: d.default.Names.VERIFIED,
                            outer: o,
                            inner: m.Colors.BRAND,
                            checkmark: m.Colors.WHITE
                        }))
                    }, t.prototype.renderIcon = function() {
                        var e, t = this.props,
                            n = t.guild,
                            o = t.iconSrc,
                            i = t.className,
                            a = (t.showVerified, t.active),
                            u = t.size,
                            c = t.style,
                            d = t.textScale,
                            h = (t.showTooltip, t.tooltipPosition, t.onClick),
                            m = t.to,
                            y = (t.verifiedIconOuterColor, function(e, t) {
                                var n = {};
                                for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                                return n
                            }(t, ["guild", "iconSrc", "className", "showVerified", "active", "size", "style", "textScale", "showTooltip", "tooltipPosition", "onClick", "to", "verifiedIconOuterColor"])),
                            g = E[u],
                            _ = null == n.icon ? {
                                fontSize: (g[n.acronym.length] || g[g.length - 1]) * d
                            } : {
                                backgroundImage: "url('" + (o || n.getIconURL && n.getIconURL() || "") + "')"
                            };
                        return s.createElement(p.default, r({
                            className: (0, l.default)(v.default.icon, i, (0, f.getClass)(v.default, "iconSize", u), (e = {}, e[(0, f.getClass)(v.default, "iconActive", u)] = a, e[v.default.iconInactive] = !a, e[v.default.noIcon] = null == n.icon, e)),
                            style: r({}, _, c),
                            onClick: null != m || null == h ? null : h
                        }, y), this.renderAcronym(), this.renderVerifiedIcon())
                    }, t.prototype.renderTooltip = function() {
                        var e = this.props,
                            t = e.guild,
                            n = e.showTooltip,
                            o = e.tooltipPosition;
                        return n ? a(c.default, {
                            text: t.name,
                            position: o
                        }, void 0, this.renderIcon()) : this.renderIcon()
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.to,
                            n = e.guild;
                        return null != t ? a(u.Link, {
                            to: t,
                            "aria-label": n.toString()
                        }, void 0, this.renderTooltip()) : this.renderTooltip()
                    }, t
                }(s.PureComponent);
            _.Sizes = g, _.defaultProps = {
                size: g.LARGE,
                textScale: 1,
                showVerified: !1,
                showTooltip: !1,
                active: !1,
                tooltipPosition: c.default.Positions.TOP,
                verifiedIconOuterColor: m.Colors.WHITE
            }, _.displayName = "GuildIcon", t.default = _, e.exports = t.default
        },
        5995: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.default = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                null != t && u.default.register(e, t);
                var p = e.getExperimentId();
                return (0, o.default)({
                    displayName: "ExperimentContainer",
                    mixins: [i.default.LazyStoreListenerMixin(e, a.default, s.default, l.default, c.default)],
                    getDefaultProps: function() {
                        return {
                            renderFunctions: t
                        }
                    },
                    getInitialState: function() {
                        return this.getStateFromStores()
                    },
                    shouldComponentUpdate: function(e, t) {
                        return !(0, r.default)(this.props, e) || t.guildId !== this.state.guildId || t.channelId !== this.state.channelId || !f.default.experimentDescriptorEquals(t.experimentDescriptor, this.state.experimentDescriptor)
                    },
                    getStateFromStores: function() {
                        var t = this.props.guildId || s.default.getGuildId(),
                            n = this.props.channelId || a.default.getChannelId(t),
                            o = null,
                            i = c.default.getOverrideExperimentDescriptor(p);
                        return o = i || e.getExperimentDescriptor(t, n), {
                            guildId: t,
                            channelId: n,
                            experimentDescriptor: o
                        }
                    },
                    getRenderFunction: function() {
                        var e = this.state.experimentDescriptor,
                            t = this.props.renderFunctions;
                        if (null == e) return t[d.ExperimentTypes.NONE] || h;
                        var n = e.type,
                            o = e.bucket,
                            i = t[n];
                        return null == i ? t[d.ExperimentTypes.NONE] || h : null != i[o] ? i[o] : t[d.ExperimentTypes.NONE] || h
                    },
                    handleExperimentTriggered: function() {
                        var e = this.state.experimentDescriptor;
                        if (null != e && !e.override) {
                            if (null != n && !1 === n(e, this.props)) return;
                            u.default.trigger(e)
                        }
                    },
                    componentDidMount: function() {
                        this.handleExperimentTriggered()
                    },
                    componentDidUpdate: function(e, t) {
                        var n = this.state.experimentDescriptor;
                        f.default.experimentDescriptorEquals(n, t.experimentDescriptor) || this.handleExperimentTriggered()
                    },
                    render: function() {
                        var e = this.getRenderFunction(),
                            t = this.state.experimentDescriptor,
                            n = this.props,
                            o = (n.renderFunctions, function(e, t) {
                                var n = {};
                                for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                                return n
                            }(n, ["renderFunctions"]));
                        return e(o, t)
                    }
                })
            };
            var o = p(n(53)),
                i = p(n(3)),
                r = p(n(277)),
                a = p(n(65)),
                s = p(n(192)),
                l = p(n(14)),
                u = p(n(5985)),
                f = p(n(6021)),
                c = p(n(193)),
                d = n(0);

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var h = function() {
                return null
            };
            e.exports = t.default
        },
        6008: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                i = u(n(3)),
                r = u(n(2)),
                a = u(n(6246)),
                s = n(0),
                l = n(284);

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = {},
                c = new Set;

            function d(e, t) {
                var n = o({
                    code: e,
                    state: s.InviteStates.RESOLVING
                }, f[e]);
                t(n), f[e] = o({}, n)
            }

            function p(e) {
                if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && !c.has(e.channel_id)) return !1;
                var t = (0, l.findInvites)(e.content);
                if (null == t || 0 === t.length) return !1;
                t.forEach(function(e) {
                    null == f[e] && (h({
                        code: e
                    }), (0, l.resolveInvite)(e).then(function(e) {
                        var t = e.invite,
                            n = e.code;
                        null != t ? r.default.dispatch({
                            type: s.ActionTypes.INVITE_RESOLVE_SUCCESS,
                            invite: t,
                            code: n
                        }) : r.default.dispatch({
                            type: s.ActionTypes.INVITE_RESOLVE_FAILURE,
                            code: n
                        })
                    }))
                })
            }

            function h(e) {
                f[e.code] = {
                    code: e.code,
                    state: s.InviteStates.RESOLVING
                }
            }

            function m(e) {
                return d(e.code, function(e) {
                    e.state = s.InviteStates.EXPIRED
                })
            }

            function v(e) {
                return p(e.message, !0)
            }

            function y(e) {
                var t = e.channelId,
                    n = e.messages;
                c.add(t), n.forEach(function(e) {
                    return p(e, !0)
                })
            }
            var g = function(e) {
                function t() {
                    return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t),
                        function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, e.apply(this, arguments))
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), t.prototype.getInvite = function(e) {
                    return f[e]
                }, t.prototype.getInvites = function(e) {
                    return null != e ? (0, a.default)(f).filter(function(t) {
                        return null != t.guild && t.guild.id === e
                    }) : (0, a.default)(f)
                }, t
            }(i.default.Store);
            t.default = new g(r.default, {
                CONNECTION_OPEN: function(e) {
                    return c.clear(), !1
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    return null != t && c.add(t), !1
                },
                INVITE_RESOLVE: h,
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, function(t) {
                        t.state = s.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null != e.invite.approximate_member_count ? e.invite.approximate_member_count : null, t.approximate_presence_count = null != e.invite.approximate_presence_count ? e.invite.approximate_presence_count : null
                    })
                },
                INVITE_RESOLVE_FAILURE: m,
                INSTANT_INVITE_REVOKE_SUCCESS: m,
                INVITE_ACCEPT: function(e) {
                    return d(e.code, function(e) {
                        e.state = s.InviteStates.ACCEPTED
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, function(t) {
                        t.state = s.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.channel = o({}, t.channel, e.invite.channel)
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return d(e.code, function(e) {
                        e.state = s.InviteStates.EXPIRED
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, function(e) {
                        e.state = s.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, function(e) {
                        e.state = s.InviteStates.APP_OPENED
                    })
                },
                INVITE_NATIVE_APP_MODAL_OPENING: function(e) {
                    return d(e.code, function(e) {
                        e.nativeAppState = s.InviteNativeAppStates.OPENING
                    })
                },
                INVITE_NATIVE_APP_MODAL_OPENED: function(e) {
                    return d(e.code, function(e) {
                        e.nativeAppState = s.InviteNativeAppStates.OPEN
                    })
                },
                INVITE_NATIVE_APP_MODAL_OPEN_FAILED: function(e) {
                    return d(e.code, function(e) {
                        e.nativeAppState = s.InviteNativeAppStates.OPEN_FAIL
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, function(e) {
                        e.state = s.InviteStates.APP_NOT_OPENED
                    })
                },
                MESSAGE_CREATE: v,
                MESSAGE_UPDATE: v,
                LOAD_MESSAGES_SUCCESS: y,
                LOAD_MESSAGES_AROUND_SUCCESS: y,
                LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
                    e.messages.forEach(function(e) {
                        return p(e)
                    })
                },
                LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
                    e.messages.forEach(function(e) {
                        return p(e)
                    })
                },
                SEARCH_FINISH: function(e) {
                    e.messages.forEach(function(e) {
                        e.forEach(function(e) {
                            return p(e)
                        })
                    })
                }
            }), e.exports = t.default
        },
        6021: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o = s(n(6112)),
                i = n(0),
                r = s(n(5985)),
                a = s(n(193));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e) {
                var t = e,
                    n = Array.isArray(t),
                    o = 0;
                for (t = n ? t : t[Symbol.iterator]();;) {
                    var i;
                    if (n) {
                        if (o >= t.length) break;
                        i = t[o++]
                    } else {
                        if ((o = t.next()).done) break;
                        i = o.value
                    }
                    var r = i,
                        s = a.default.getEligibleExperiment(r);
                    if (null != s) return s
                }
                return null
            }
            t.default = {
                getFirstEligibleUserExperiment: l,
                isInExperimentBucket: function(e, t) {
                    return a.default.getExperimentBucket(e) === t
                },
                experimentDescriptorEquals: function(e, t) {
                    if (null == e && null == t) return !0;
                    if (e === t) return !0;
                    if (null == e && null != t) return !1;
                    if (null != e && null == t) return !1;
                    if (null != e && null != t) {
                        if (e.type !== t.type) return !1;
                        if (e.bucket !== t.bucket) return !1;
                        if (e.revision !== t.revision) return !1;
                        if (e.name !== t.name) return !1;
                        if (e.type === i.ExperimentTypes.USER && t.type === i.ExperimentTypes.USER) return (0, o.default)(e.context, t.context)
                    }
                    return !0
                },
                triggerFirstEligibleUserExperiment: function(e) {
                    var t = l(e);
                    if (t) return r.default.trigger(t), t
                },
                getExperimentBucketName: function(e) {
                    return e === i.ExperimentBuckets.CONTROL ? "Control" : e === i.ExperimentBuckets.NOT_ELIGIBLE ? "Not Eligible" : "Treatment " + e
                }
            }, e.exports = t.default
        },
        6035: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            t.NOOP = function() {}, t.MIN_RADIUS = 780, t.MAX_RADIUS = 1e3, t.TWO_PI = 2 * Math.PI, t.POINT_TENSION_DEFAULT = 150, t.WaveStates = {
                INITIAL: 0,
                ENTERED: 1,
                FILLING: 2,
                FILLED: 3
            }
        },
        6036: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.InviteResolvingHeader = void 0;
            var o, i = (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, i) {
                    var r = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {}), t && r)
                        for (var s in r) void 0 === t[s] && (t[s] = r[s]);
                    else t || (t = r || {});
                    if (1 === a) t.children = i;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    return {
                        $$typeof: o,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }),
                r = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                a = m(n(6)),
                s = m(n(9)),
                l = n(5987),
                u = m(n(229)),
                f = m(n(127)),
                c = m(n(93)),
                d = n(0),
                p = m(n(516)),
                h = m(n(933));

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(t.InviteResolvingHeader = function() {
                return i(r.Fragment, {}, void 0, i(l.Avatar, {
                    src: null,
                    size: l.Avatar.Sizes.XXLARGE,
                    className: p.default.marginBottom20
                }), i(l.Subtitle, {}, void 0, a.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN), i(l.Title, {
                    className: (0, s.default)(p.default.marginTop8, h.default.flexCenter)
                }, void 0, a.default.Messages.LOADING))
            }).displayName = "InviteResolvingHeader";
            var v = function(e) {
                    var t = e.guild,
                        n = e.user;
                    return n ? i(l.Avatar, {
                        src: null != n ? n.getAvatarURL() : null,
                        size: l.Avatar.Sizes.XXLARGE,
                        className: p.default.marginBottom20
                    }) : t ? i(l.GuildIcon, {
                        guild: t,
                        size: l.GuildIcon.Sizes.XLARGE,
                        className: p.default.marginBottom20
                    }) : null
                },
                y = function(e) {
                    var t = e.invite,
                        n = e.disableUser,
                        o = void 0 !== n && n,
                        m = e.error,
                        y = e.theme;
                    if (null == t) return null;
                    var g = null != t.guild ? new u.default(t.guild) : null,
                        E = null != t.channel ? new f.default(t.channel) : null,
                        _ = o || null == t.inviter ? null : new c.default(t.inviter),
                        I = null != t.approximate_member_count && t.approximate_member_count > 100,
                        S = null != g && g.hasFeature(d.GuildFeatures.VERIFIED),
                        N = null,
                        T = void 0,
                        A = void 0;
                    if (null != g) N = null == _ ? a.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : a.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                        username: _.username
                    }), I || S || (T = i(l.GuildIcon, {
                        guild: g,
                        size: l.GuildIcon.Sizes.SMALL
                    })), A = g.name;
                    else if (null != E) {
                        if (null == _) throw new Error("no inviter in group DM invite");
                        var O = _.username;
                        E.name ? (N = a.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                            username: O
                        }), A = E.name, null != E.icon && (T = i(l.ChannelIcon, {
                            channel: E,
                            size: l.Avatar.Sizes.SMALL
                        }))) : (N = a.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, A = O)
                    }
                    return i(r.Fragment, {}, void 0, i(v, {
                        guild: g,
                        user: o || I ? null : _
                    }), m ? i(r.Fragment, {}, void 0, i(l.Subtitle, {}, void 0, a.default.Messages.INVITE_MODAL_ERROR_TITLE), i(l.Title, {}, void 0, m)) : i(r.Fragment, {}, void 0, i(l.Subtitle, {}, void 0, N), i(l.Title, {
                        className: (0, s.default)(p.default.marginTop8, h.default.flexCenter)
                    }, void 0, S ? i(l.VerifiedIcon, {
                        theme: y
                    }) : null, T, A)), i(l.ActivityCount, {
                        className: p.default.marginTop8,
                        online: t.approximate_presence_count,
                        total: t.approximate_member_count
                    }))
                };
            y.displayName = "InviteHeader", t.default = y
        },
        6060: function(e) {
            e.exports = [
                ["Upsorbing the Contents", null, null],
                ["Additive Parsing the Load", null, null],
                ["Commence Monosaturated Goodening", null, null],
                ["Kick Off the Multi-Core Widening", null, null],
                ["Bastening the Game Turkey", null, null],
                ["Abstracting the Rummage Disc", null, null],
                ["Undecerealenizing the Process", null, null],
                ["Postrefragmenting the Widget Layer", null, null],
                ["Satisfying the Constraints", null, null],
                ["Abnoramalzing Some of the Matrices", null, null],
                ["Optimizing the People", null, null],
                ["Proclaigerizing the Network", null, null]
            ]
        },
        6061: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o, i = (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, i) {
                    var r = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {}), t && r)
                        for (var s in r) void 0 === t[s] && (t[s] = r[s]);
                    else t || (t = r || {});
                    if (1 === a) t.children = i;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    return {
                        $$typeof: o,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }),
                r = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                a = n(987);

            function s(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            var l = function(e) {
                function t() {
                    var n, o;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var i = arguments.length, r = Array(i), l = 0; l < i; l++) r[l] = arguments[l];
                    return n = o = s(this, e.call.apply(e, [this].concat(r))), o.chromeVersion = (0, a.getChromeVersion)(), o.handleReady = function() {
                        var e = o.props.onReady;
                        null != e && e()
                    }, s(o, n)
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), t.prototype.renderSources = function() {
                    var e = [i("source", {
                        src: n(6093),
                        type: "video/mp4"
                    }, "mp4"), i("img", {
                        alt: "",
                        src: n(6092)
                    }, "png")];
                    return (this.chromeVersion > 52 || -1 === this.chromeVersion) && e.unshift(i("source", {
                        src: n(6091),
                        type: "video/webm"
                    }, "webm")), e
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.setRef,
                        n = e.loop,
                        o = e.autoPlay,
                        i = e.className;
                    return r.createElement("video", {
                        ref: t,
                        onLoadedData: this.handleReady,
                        className: i,
                        loop: n,
                        autoPlay: o,
                        playsInline: !0
                    }, this.renderSources())
                }, t
            }(r.PureComponent);
            l.defaultProps = {
                loop: !0,
                autoPlay: !0
            }, l.displayName = "AppSpinner", t.default = l, e.exports = t.default
        },
        6091: function(e, t, n) {
            e.exports = n.p + "0bdc0497eb3a19e66f2b1e3d5741634c.webm"
        },
        6092: function(e, t, n) {
            e.exports = n.p + "5ccabf62108d5a8074ddd95af2211727.png"
        },
        6093: function(e, t, n) {
            e.exports = n.p + "ffac5bb3fb919ce8bf7137d79e9defc9.mp4"
        },
        6095: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.randomNumber = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1) + e)
            }, t.applySpringForce = function(e, t, n, o) {
                return o.tension * (e - t) - o.friction * n
            }
        },
        6153: function(e, t, n) {
            e.exports = n.p + "0f4d1ff76624bb45a3fee4189279ee92.svg"
        },
        6160: function(e, t, n) {
            e.exports = n.p + "edaed5daf032643e89ba411a3b99014b.jpg"
        },
        6161: function(e, t, n) {
            e.exports = n.p + "14c037b7102f18b2d2ccf065a52bb595.jpg"
        },
        6162: function(e, t, n) {
            e.exports = n.p + "fd91131ea693096d6be5e8aa99d18f9e.jpg"
        },
        6163: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.getArtForPath = void 0;
            var o, i = (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, i) {
                var r = e && e.defaultProps,
                    a = arguments.length - 3;
                if (t || 0 === a || (t = {}), t && r)
                    for (var s in r) void 0 === t[s] && (t[s] = r[s]);
                else t || (t = r || {});
                if (1 === a) t.children = i;
                else if (a > 1) {
                    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                    t.children = l
                }
                return {
                    $$typeof: o,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            });
            t.makeAuthenticated = function(e, t) {
                var n = i(t, {});
                return function(o) {
                    if (!s.default.isAuthenticated()) {
                        if (null != t) return n;
                        var u = location.pathname + location.search;
                        return i(a.Redirect, {
                            to: (0, l.getLoginPath)(u, !1)
                        })
                    }
                    return r.createElement(e, o)
                }
            };
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                a = n(225),
                s = c(n(14)),
                l = n(970),
                u = c(n(6162)),
                f = c(n(6161));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.getArtForPath = function(e) {
                if (null != e && /^\/developers/.test(e)) return n(6160);
                var t = (new Date).getHours();
                return t >= 6 && t < 20 ? u.default : f.default
            }
        },
        6322: function(e, t, n) {
            e.exports = n.p + "bdcfee0c4d9fb22ce3c47b593df14254.svg"
        },
        6323: function(e, t, n) {
            e.exports = n.p + "375217725f8ad1df6310e6738a7306e4.svg"
        },
        6324: function(e, t, n) {
            e.exports = n.p + "ab4f6c12a1ced9de8b5d279056f21334.svg"
        },
        6325: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o, i = (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, i) {
                    var r = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {}), t && r)
                        for (var s in r) void 0 === t[s] && (t[s] = r[s]);
                    else t || (t = r || {});
                    if (1 === a) t.children = i;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    return {
                        $$typeof: o,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }),
                r = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                a = n(524),
                s = b(n(3)),
                l = b(n(6)),
                u = n(6036),
                f = b(u),
                c = b(n(6326)),
                d = n(5987),
                p = b(d),
                h = b(n(81)),
                m = b(n(106)),
                v = b(n(379)),
                y = b(n(29)),
                g = b(n(945)),
                E = b(n(14)),
                _ = b(n(934)),
                I = b(n(17)),
                S = n(140),
                N = n(970),
                T = n(0),
                A = b(n(516)),
                O = b(n(5659));

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            s.default.initialize();
            var R = /\.$/,
                M = function(e) {
                    return Array.isArray(e) ? e.map(function(e) {
                        return e.replace(R, "")
                    }).join(". ").trim() : e
                },
                C = i(u.InviteResolvingHeader, {}),
                w = function(e) {
                    function t(n) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var o = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, e.call(this, n));
                        o.handleCaptchaVerify = function(e) {
                            return o.setState({
                                captchaKey: e
                            }, function() {
                                return o.handleRegister()
                            })
                        }, o.handleGotoLogin = function() {
                            var e = o.props,
                                t = e.onLoginStart,
                                n = e.transitionTo,
                                i = e.invite,
                                r = e.redirectTo,
                                a = "" !== o.state.email ? "email=" + o.state.email : "",
                                s = void 0;
                            s = null != i ? T.Routes.INVITE_LOGIN(i.code) : null != r ? T.Routes.LOGIN_AND_REDIRECT(r) : (0, N.getLoginPath)(T.Routes.APP, !1, a), _.default.loginReset(), n(s), null != t && t(), S.ComponentDispatch.dispatch(T.ComponentActions.WAVE_EMPHASIZE)
                        }, o.handleSubmit = function(e) {
                            e && e.preventDefault(), o.handleRegister()
                        };
                        var i = null != n.location ? (0, a.parse)(n.location.search) : {};
                        return o.state = {
                            email: i.email || "",
                            username: "",
                            password: "",
                            captchaKey: null,
                            consent: !n.consentRequired
                        }, o
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.hasConsent = function() {
                        var e = this.props.consentRequired,
                            t = this.state.consent;
                        return null != e && t
                    }, t.prototype.componentDidMount = function() {
                        this.redirectIfAuthenticated(), null == this.props.invite && I.default.track(T.AnalyticEvents.REGISTER_VIEWED, {}, !0), null == this.props.consentRequired && _.default.getConsentRequired()
                    }, t.prototype.UNSAFE_componentWillReceiveProps = function(e) {
                        null == this.props.consentRequired && null != e.consentRequired && (e.consentRequired ? this.setState({
                            consent: !1
                        }) : e.consentRequired || this.setState({
                            consent: !0
                        }))
                    }, t.prototype.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.errors,
                            o = t.authenticated;
                        e.errors !== n && (this.hasError("email") ? null != this.emailRef && this.emailRef.focus() : this.hasError("username") ? null != this.usernameRef && this.usernameRef.focus() : this.hasError("password") && null != this.passwordRef && this.passwordRef.focus()), o && !e.authenticated && this.redirectIfAuthenticated()
                    }, t.prototype.redirectIfAuthenticated = function() {
                        var e = this.props,
                            t = e.authenticated,
                            n = e.transitionTo,
                            o = e.redirectTo;
                        t && n(null != o ? o : g.default.defaultRoute)
                    }, t.prototype.handleRegister = function() {
                        var e = this.state,
                            t = e.email,
                            n = e.username,
                            o = e.password,
                            i = e.captchaKey,
                            r = e.consent,
                            a = this.props,
                            s = a.invite,
                            l = a.consentRequired,
                            u = null != s ? s.code : null;
                        null !== l && (null != s ? _.default.register(n, r, u, i) : _.default.registerFull(t, n, r, o, u, i), S.ComponentDispatch.dispatch(T.ComponentActions.WAVE_EMPHASIZE))
                    }, t.prototype.hasError = function(e) {
                        return null != this.props.errors[e]
                    }, t.prototype.renderConsentComponents = function() {
                        var e = this,
                            t = this.state.consent,
                            n = null,
                            o = null;
                        return this.props.consentRequired ? o = i(y.default, {
                            className: A.default.marginTop20,
                            align: y.default.Align.CENTER
                        }, void 0, i(v.default, {
                            value: t,
                            type: v.default.Types.INVERTED,
                            onChange: function(t, n) {
                                return e.setState({
                                    consent: n
                                })
                            },
                            className: O.default.checkbox
                        }), i(d.SubText, {}, void 0, l.default.Messages.TERMS_PRIVACY_OPT_IN.format({
                            termsURL: T.MarketingURLs.TERMS,
                            privacyURL: T.MarketingURLs.PRIVACY
                        }))) : n = i(d.SubText, {
                            className: A.default.marginTop20
                        }, void 0, l.default.Messages.TERMS_PRIVACY.format({
                            termsURL: T.MarketingURLs.TERMS,
                            privacyURL: T.MarketingURLs.PRIVACY
                        })), {
                            subText: n,
                            consentText: o
                        }
                    }, t.prototype.renderInviteResolving = function() {
                        var e = this;
                        return i(p.default, {}, void 0, C, i(d.Block, {
                            className: A.default.marginTop40
                        }, void 0, i(h.default, {}, void 0, l.default.Messages.FORM_LABEL_USERNAME), i(m.default, {
                            text: l.default.Messages.AUTH_USERNAME_TOOLTIP,
                            position: m.default.Positions.RIGHT,
                            color: m.default.Colors.BRAND
                        }, void 0, i(d.Input, {
                            autoFocus: !0,
                            className: A.default.marginBottom8,
                            name: "username",
                            value: this.state.username,
                            placeholder: l.default.Messages.FORM_PLACEHOLDER_USERNAME,
                            onChange: function(t) {
                                return e.setState({
                                    username: t
                                })
                            }
                        })), i(d.Button, {
                            className: A.default.marginTop20,
                            disabled: !0
                        }, void 0, l.default.Messages.CONTINUE), i(d.Button, {
                            look: d.Button.Looks.LINK,
                            disabled: !0,
                            className: A.default.marginTop8
                        }, void 0, l.default.Messages.ALREADY_HAVE_ACCOUNT), i(d.SubText, {
                            disabled: !0,
                            className: A.default.marginTop20
                        }, void 0, l.default.Messages.TERMS_PRIVACY.format({
                            termsURL: T.MarketingURLs.TERMS,
                            privacyURL: T.MarketingURLs.PRIVACY
                        }))))
                    }, t.prototype.renderInvite = function() {
                        var e = this,
                            t = this.props,
                            n = t.invite,
                            o = t.registering,
                            r = t.consentRequired,
                            a = t.errors.username,
                            s = this.state.consent,
                            u = this.renderConsentComponents(),
                            c = u.subText,
                            v = u.consentText,
                            y = i(d.Button, {
                                className: A.default.marginTop20,
                                type: "submit",
                                submitting: o,
                                disabled: !this.hasConsent()
                            }, void 0, l.default.Messages.CONTINUE);
                        return !s && r && (y = i(m.default, {
                            text: l.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP
                        }, void 0, y)), i(p.default, {
                            onSubmit: this.handleSubmit,
                            tag: "form"
                        }, void 0, i(f.default, {
                            invite: n
                        }), i(d.Block, {
                            className: A.default.marginTop40
                        }, void 0, i(h.default, {
                            error: M(a)
                        }, void 0, l.default.Messages.FORM_LABEL_USERNAME), i(m.default, {
                            text: l.default.Messages.AUTH_USERNAME_TOOLTIP,
                            position: m.default.Positions.RIGHT,
                            color: m.default.Colors.BRAND
                        }, void 0, i(d.Input, {
                            autoFocus: !0,
                            className: A.default.marginBottom8,
                            name: "username",
                            value: this.state.username,
                            placeholder: l.default.Messages.FORM_PLACEHOLDER_USERNAME,
                            onChange: function(t) {
                                return e.setState({
                                    username: t
                                })
                            },
                            error: null != a ? "" : null
                        })), v, y, i(d.Button, {
                            look: d.Button.Looks.LINK,
                            onClick: this.handleGotoLogin,
                            className: A.default.marginTop8
                        }, void 0, l.default.Messages.ALREADY_HAVE_ACCOUNT), c))
                    }, t.prototype.renderFull = function() {
                        var e = this,
                            t = this.state,
                            n = t.email,
                            o = t.username,
                            r = t.password,
                            a = t.consent,
                            s = this.props,
                            u = s.registering,
                            f = s.consentRequired,
                            c = s.errors,
                            h = (c = void 0 === c ? {} : c).email,
                            v = c.username,
                            y = c.password,
                            g = this.renderConsentComponents(),
                            E = g.subText,
                            _ = g.consentText,
                            I = i(d.Button, {
                                type: "submit",
                                submitting: u,
                                disabled: !this.hasConsent(),
                                className: A.default.marginTop20
                            }, void 0, l.default.Messages.CONTINUE);
                        return !a && f && (I = i(m.default, {
                            text: l.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP
                        }, void 0, I)), i(p.default, {
                            onSubmit: this.handleSubmit,
                            tag: "form"
                        }, void 0, i(d.Title, {}, void 0, l.default.Messages.REGISTER_TITLE), i(d.Block, {
                            className: A.default.marginTop20
                        }, void 0, i(d.Input, {
                            autoFocus: !0,
                            label: l.default.Messages.FORM_LABEL_EMAIL,
                            className: A.default.marginBottom20,
                            name: "email",
                            value: n,
                            onChange: function(t) {
                                return e.setState({
                                    email: t
                                })
                            },
                            error: M(h),
                            type: "email",
                            setRef: function(t) {
                                e.emailRef = t
                            }
                        }), i(d.Input, {
                            label: l.default.Messages.FORM_LABEL_USERNAME,
                            className: A.default.marginBottom20,
                            name: "username",
                            value: o,
                            onChange: function(t) {
                                return e.setState({
                                    username: t
                                })
                            },
                            error: M(v),
                            setRef: function(t) {
                                e.usernameRef = t
                            }
                        }), i(d.Input, {
                            label: l.default.Messages.FORM_LABEL_PASSWORD,
                            name: "password",
                            value: r,
                            onChange: function(t) {
                                return e.setState({
                                    password: t
                                })
                            },
                            error: M(y),
                            type: "password",
                            setRef: function(t) {
                                e.passwordRef = t
                            }
                        }), _, I, i(d.Button, {
                            look: d.Button.Looks.LINK,
                            onClick: this.handleGotoLogin,
                            className: A.default.marginTop8
                        }, void 0, l.default.Messages.ALREADY_HAVE_ACCOUNT), E))
                    }, t.prototype.render = function() {
                        /*if (this.hasError("captcha_key")) return i(c.default, {
                            onVerify: this.handleCaptchaVerify,
                            title: l.default.Messages.REGISTER_TITLE
                        });*/
                        var e = this.props.invite;
                        return null == e ? this.renderFull() : e.state === T.InviteStates.RESOLVING ? this.renderInviteResolving() : this.renderInvite()
                    }, t
                }(r.PureComponent);
            w.displayName = "Register", t.default = s.default.connectStores([E.default], function() {
                return {
                    consentRequired: E.default.getConsentRequired(),
                    authenticated: E.default.isAuthenticated(),
                    registering: E.default.getRegisterStatus(),
                    errors: E.default.getErrors()
                }
            })(w), e.exports = t.default
        },
        6326: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o, i = (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, i) {
                    var r = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {}), t && r)
                        for (var s in r) void 0 === t[s] && (t[s] = r[s]);
                    else t || (t = r || {});
                    if (1 === a) t.children = i;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    return {
                        $$typeof: o,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }),
                r = (function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    t.default = e
                }(n(1)), c(n(6))),
                a = n(5987),
                s = c(a),
                l = c(n(979)),
                u = c(n(516)),
                f = c(n(933));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = function(e) {
                var t = e.title,
                    o = e.onVerify;
                return i(s.default, {}, void 0, i("img", {
                    alt: "",
                    src: n(6153),
                    className: u.default.marginBottom20
                }), i(a.Title, {
                    className: u.default.marginBottom8
                }, void 0, t), i(a.Subtitle, {
                    className: u.default.marginBottom40
                }, void 0, r.default.Messages.BEEP_BOOP), i("div", {
                    className: f.default.flexCenter
                }, void 0, i(l.default, {
                    onVerify: o,
                    theme: l.default.Themes.DARK
                })))
            };
            d.displayName = "AuthCaptcha", t.default = d, e.exports = t.default
        },
        6327: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o, i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                r = (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, i) {
                    var r = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {}), t && r)
                        for (var s in r) void 0 === t[s] && (t[s] = r[s]);
                    else t || (t = r || {});
                    if (1 === a) t.children = i;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    return {
                        $$typeof: o,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }),
                a = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                s = w(n(3)),
                l = w(n(6)),
                u = n(524),
                f = w(n(9)),
                c = n(5987),
                d = w(c),
                p = w(n(71)),
                h = n(6036),
                m = w(h),
                v = w(n(6326)),
                y = w(n(167)),
                g = w(n(14)),
                E = w(n(945)),
                _ = w(n(1027)),
                I = w(n(934)),
                S = n(589),
                N = w(n(37)),
                T = n(943),
                A = w(n(17)),
                O = n(140),
                b = n(0),
                R = w(n(516)),
                M = w(n(1224)),
                C = w(n(5660));

            function w(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var L = r(c.AuthSpinner, {
                    hideQuote: !0
                }),
                P = r(h.InviteResolvingHeader, {}),
                D = function(e) {
                    function t(n) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var o = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, e.call(this, n));
                        x.call(o);
                        var i = null != n.location ? (0, u.parse)(n.location.search) : {};
                        return o.state = {
                            redirecting: n.authenticated,
                            checkingHandoff: n.handoffAvailable,
                            email: i.email || "",
                            password: "",
                            code: "",
                            smsCode: "",
                            captchaKey: null,
                            undelete: !1
                        }, o
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.componentDidMount = function() {
                        var e = this.props,
                            t = e.handoffAvailable,
                            n = e.authenticated;
                        t && !n ? (0, S.handoffBegin)() : n && this.loginOrSSO(n, location, !0), null == this.props.invite && A.default.track(b.AnalyticEvents.LOGIN_VIEWED, {}, !0)
                    }, t.prototype.UNSAFE_componentWillReceiveProps = function(e) {
                        var t = this.props.handoffAvailable;
                        e.handoffAvailable || !t || e.authenticated || this.setState({
                            checkingHandoff: !1
                        })
                    }, t.prototype.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.authenticated,
                            o = t.location,
                            i = this.state.checkingHandoff;
                        !n || e.authenticated || i || this.loginOrSSO(n, o), e.errors !== this.props.errors && (this.hasError("email") ? null != this.emailRef && this.emailRef.focus() : this.hasError("password") ? null != this.passwordRef && this.passwordRef.focus() : this.hasError("code") && null != this.codeRef && this.codeRef.focus())
                    }, t.prototype.loginOrSSO = function(e, t) {
                        var n = this,
                            o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e && null != t && (o ? I.default.verifySSOToken().then(function() {
                            return n.transitionSSO(t)
                        }) : this.transitionSSO(t))
                    }, t.prototype.transitionSSO = function(e) {
                        var t = (0, u.parse)(e.search),
                            n = this.props,
                            o = n.transitionTo,
                            i = n.redirectTo;
                        if (null != i) o(i);
                        else if (null == t.service) o(b.Routes.APP);
                        else {
                            var r = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + b.Endpoints.SSO;
                            window.location = r + "?token=" + (g.default.getToken() || "") + "&" + (0, u.stringify)(t)
                        }
                    }, t.prototype.hasError = function(e) {
                        return null != this.props.errors[e]
                    }, t.prototype.renderHandOffAvailable = function() {
                        return r(d.default, {}, void 0, L, r(c.Title, {
                            className: R.default.marginBottom8
                        }, void 0, l.default.Messages.BROWSER_HANDOFF_DETECTING_TITLE), r(c.Subtitle, {}, void 0, l.default.Messages.AUTH_BROWSER_HANDOFF_DETECTING_DESCRIPTION))
                    }, t.prototype.renderHandOffContinue = function() {
                        var e = this.props,
                            t = e.user,
                            n = e.transitionTo;
                        return null == t ? null : r(d.default, {}, void 0, r(c.Avatar, {
                            src: t.getAvatarURL(),
                            size: c.Avatar.Sizes.XXLARGE,
                            className: R.default.marginBottom20
                        }), r(c.Title, {
                            className: R.default.marginBottom8
                        }, void 0, l.default.Messages.BROWSER_HANDOFF_SUCCESS_TITLE.format({
                            name: t.toString()
                        })), r(c.Subtitle, {
                            className: R.default.marginBottom40
                        }, void 0, l.default.Messages.BROWSER_HANDOFF_SUCCESS_BODY), r(c.Block, {}, void 0, r(c.Button, {
                            onClick: function() {
                                return n(b.Routes.APP)
                            },
                            className: R.default.marginBottom8
                        }, void 0, l.default.Messages.BROWSER_HANDOFF_SUCCESS_ACTION.format({
                            name: t.toString()
                        })), r(c.Button, {
                            look: c.Button.Looks.LINK,
                            onClick: this.handleReset
                        }, void 0, l.default.Messages.BROWSER_HANDOFF_SUCCESS_CANCEL)))
                    }, t.prototype.renderDisabledAccount = function() {
                        var e = this.props.loginStatus === b.LoginStates.ACCOUNT_DISABLED,
                            t = e ? l.default.Messages.ACCOUNT_DISABLED_TITLE : l.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE,
                            n = e ? l.default.Messages.ACCOUNT_DISABLED_DESCRIPTION : l.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
                        return r(d.default, {
                            tag: "form",
                            onSubmit: this.handleReset
                        }, void 0, r(c.Title, {
                            className: R.default.marginBottom8
                        }, void 0, t), r(c.Subtitle, {
                            className: R.default.marginBottom20
                        }, void 0, n), r(c.Block, {}, void 0, r(c.Button, {
                            color: c.Button.Colors.BRAND,
                            type: "submit"
                        }, void 0, l.default.Messages.RETURN_TO_LOGIN), r("div", {
                            className: (0, f.default)(R.default.marginTop8, C.default.needAccount)
                        }, void 0, l.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({
                            onClick: this.handleCancelAccountDeletion
                        }))))
                    }, t.prototype.renderResolving = function() {
                        var e = this;
                        return r(d.default, {}, void 0, P, r(c.Block, {
                            className: R.default.marginTop20
                        }, void 0, r(c.Input, {
                            className: R.default.marginBottom20,
                            label: l.default.Messages.FORM_LABEL_EMAIL,
                            onChange: function(t) {
                                return e.setState({
                                    email: t
                                })
                            },
                            type: "email",
                            setRef: this.setEmailRef,
                            autoComplete: "off",
                            spellCheck: "false",
                            value: this.state.email,
                            autoFocus: !0
                        }), r(c.Input, {
                            className: R.default.marginBottom20,
                            label: l.default.Messages.FORM_LABEL_PASSWORD,
                            onChange: function(t) {
                                return e.setState({
                                    password: t
                                })
                            },
                            type: "password",
                            setRef: this.setPasswordRef,
                            autoComplete: "off",
                            spellCheck: "false",
                            value: this.state.password
                        }), r(c.Button, {
                            className: R.default.marginBottom8,
                            type: "submit",
                            disabled: !0
                        }, void 0, l.default.Messages.LOGIN), r(c.Button, {
                            disabled: !0,
                            look: c.Button.Looks.LINK
                        }, void 0, l.default.Messages.FORGOT_PASSWORD), r(c.Button, {
                            disabled: !0,
                            className: R.default.marginTop4,
                            look: c.Button.Looks.LINK
                        }, void 0, l.default.Messages.NEED_ACCOUNT)))
                    }, t.prototype.renderDefault = function() {
                        var e = this,
                            t = this.props,
                            n = t.invite,
                            o = t.loginStatus,
                            i = !this.hasError("email") && this.hasError("password"),
                            s = void 0;
                        return s = null != n && null != n.channel ? r(m.default, {
                            invite: n
                        }) : r(a.Fragment, {}, void 0, r(c.Title, {
                            className: R.default.marginBottom8
                        }, "title", l.default.Messages.LOGIN_TITLE), r(c.Subtitle, {}, "subtitle", l.default.Messages.AUTH_LOGIN_BODY)), r(d.default, {
                            onSubmit: this.handleLogin,
                            tag: "form"
                        }, void 0, s, r(c.Block, {
                            className: R.default.marginTop20
                        }, void 0, r(c.Input, {
                            className: R.default.marginBottom20,
                            label: l.default.Messages.FORM_LABEL_EMAIL,
                            error: this.renderError("email"),
                            onChange: function(t) {
                                return e.setState({
                                    email: t
                                })
                            },
                            type: "email",
                            setRef: this.setEmailRef,
                            autoComplete: "off",
                            spellCheck: "false",
                            value: this.state.email,
                            autoFocus: !i
                        }), r(c.Input, {
                            label: l.default.Messages.FORM_LABEL_PASSWORD,
                            error: this.renderError("password"),
                            onChange: function(t) {
                                return e.setState({
                                    password: t
                                })
                            },
                            type: "password",
                            setRef: this.setPasswordRef,
                            autoComplete: "off",
                            spellCheck: "false",
                            autoFocus: i,
                            value: this.state.password
                        }), r(c.Button, {
                            tabIndex: 10,
                            onClick: this.handleForgotPassword,
                            look: c.Button.Looks.LINK,
                            className: (0, f.default)(R.default.marginBottom20, R.default.marginTop4)
                        }, void 0, l.default.Messages.FORGOT_PASSWORD), r(c.Button, {
                            type: "submit",
                            submitting: o === b.LoginStates.LOGGING_IN,
                            className: R.default.marginBottom8
                        }, void 0, l.default.Messages.LOGIN), r("div", {
                            className: R.default.marginTop4
                        }, void 0, r("span", {
                            className: C.default.needAccount
                        }, void 0, l.default.Messages.NEED_ACCOUNT), r(c.Button, {
                            onClick: this.handleGotoRegister,
                            look: c.Button.Looks.LINK,
                            className: C.default.smallRegisterLink
                        }, void 0, l.default.Messages.REGISTER))))
                    }, t.prototype.renderMFA = function() {
                        var e = this,
                            t = this.props,
                            o = t.loginStatus,
                            i = t.mfaSMS;
                        return r(d.default, {
                            onSubmit: this.handleTokenSubmit,
                            tag: "form"
                        }, void 0, r("img", {
                            alt: "",
                            src: n(6153),
                            className: R.default.marginBottom20
                        }), r(c.Title, {
                            className: R.default.marginBottom8
                        }, void 0, l.default.Messages.TWO_FA), r(c.Subtitle, {}, void 0, l.default.Messages.TWO_FA_ENTER_TOKEN_BODY), r(c.Block, {
                            className: R.default.marginTop40
                        }, void 0, r(c.Input, {
                            className: R.default.marginBottom20,
                            error: this.renderError("code"),
                            setRef: this.setCodeRef,
                            onChange: function(t) {
                                return e.setState({
                                    code: t
                                })
                            },
                            autoComplete: "off",
                            placeholder: l.default.Messages.TWO_FA_AUTH_CODE,
                            spellCheck: "false",
                            maxLength: 10,
                            autoFocus: !0,
                            label: l.default.Messages.TWO_FA_ENTER_TOKEN_LABEL,
                            value: this.state.code
                        }, "totpCode"), r(c.Button, {
                            type: "submit",
                            submitting: o === b.LoginStates.LOGGING_IN_MFA
                        }, void 0, l.default.Messages.LOGIN), i ? r(c.Button, {
                            onClick: this.handleToggleSMSLogin,
                            submitting: o === b.LoginStates.LOGGING_IN_MFA_SMS,
                            className: R.default.marginTop8,
                            look: c.Button.Looks.LINK
                        }, void 0, l.default.Messages.MFA_SMS_RECEIVE_CODE) : null, r(c.Button, {
                            look: c.Button.Looks.LINK,
                            className: R.default.marginTop4,
                            onClick: this.handleReset
                        }, void 0, l.default.Messages.TWO_FA_LOGIN_FOOTER)))
                    }, t.prototype.renderMFASMS = function() {
                        var e = this,
                            t = this.props,
                            o = t.loginStatus,
                            i = t.maskedPhone,
                            a = o === b.LoginStates.LOGGING_IN_MFA_SMS || "" === i;
                        return r(d.default, {
                            onSubmit: this.handleSMSTokenSubmit,
                            tag: "form"
                        }, void 0, r("img", {
                            alt: "",
                            src: n(6153),
                            className: R.default.marginBottom20
                        }), r(c.Title, {
                            className: R.default.marginBottom8
                        }, void 0, l.default.Messages.TWO_FA), r(c.Subtitle, {
                            className: R.default.marginBottom8
                        }, void 0, a ? l.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENDING : l.default.Messages.TWO_FA_ENTER_SMS_TOKEN_SENT.format({
                            phoneNumber: i
                        })), r(c.Block, {
                            className: R.default.marginTop40
                        }, void 0, r(c.Input, {
                            className: R.default.marginBottom20,
                            error: this.renderError("code"),
                            setRef: this.setCodeRef,
                            onChange: function(t) {
                                return e.setState({
                                    smsCode: t
                                })
                            },
                            autoComplete: "off",
                            placeholder: l.default.Messages.TWO_FA_AUTH_CODE,
                            spellCheck: "false",
                            maxLength: 10,
                            autoFocus: !0,
                            label: l.default.Messages.TWO_FA_ENTER_SMS_TOKEN_LABEL,
                            value: this.state.smsCode
                        }, "smsCode"), r(c.Button, {
                            type: "submit",
                            submitting: a,
                            color: a ? c.Button.Colors.TRANSPARENT : c.Button.Colors.BRAND
                        }, void 0, l.default.Messages.LOGIN), a ? null : r(c.Button, {
                            onClick: this.handleToggleSMSLogin,
                            className: R.default.marginTop8,
                            look: c.Button.Looks.LINK
                        }, void 0, l.default.Messages.MFA_SMS_RESEND), r(c.Button, {
                            look: c.Button.Looks.LINK,
                            className: R.default.marginTop4,
                            onClick: this.handleReset
                        }, void 0, l.default.Messages.TWO_FA_LOGIN_FOOTER)))
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.authenticated,
                            n = e.invite,
                            o = e.loginStatus,
                            i = e.handoffAvailable,
                            a = this.state,
                            s = a.checkingHandoff;
                        if (a.redirecting) return null;
                        /*if (this.hasError("captcha_key")) return r(v.default, {
                            onVerify: this.handleCaptchaVerify,
                            title: l.default.Messages.LOGIN_TITLE
                        });*/
                        if (i) return this.renderHandOffAvailable();
                        if (t && s) return this.renderHandOffContinue();
                        switch (o) {
                            case b.LoginStates.LOGGING_IN_MFA_SMS:
                            case b.LoginStates.MFA_SMS_STEP:
                                return this.renderMFASMS();
                            case b.LoginStates.LOGGING_IN_MFA:
                            case b.LoginStates.MFA_STEP:
                                return this.renderMFA();
                            case b.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION:
                            case b.LoginStates.ACCOUNT_DISABLED:
                                return this.renderDisabledAccount();
                            case b.LoginStates.LOGGING_IN:
                            case b.LoginStates.NONE:
                            default:
                                return null != n && n.state === b.InviteStates.RESOLVING ? this.renderResolving() : this.renderDefault()
                        }
                    }, t
                }(a.PureComponent),
                x = function() {
                    var e = this;
                    this.setEmailRef = function(t) {
                        e.emailRef = t
                    }, this.setPasswordRef = function(t) {
                        e.passwordRef = t
                    }, this.setCodeRef = function(t) {
                        e.codeRef = t
                    }, this.renderError = function(t) {
                        var n = e.props.errors;
                        if (e.hasError(t)) {
                            var o = n[t];
                            return Array.isArray(o) ? o[0] : o
                        }
                        return null
                    }, this.handleLogin = function(t) {
                        var n = e.state,
                            o = n.email,
                            i = n.password,
                            r = n.captchaKey,
                            a = n.undelete;
                        null != t && t.preventDefault(), I.default.login(o, i, a, r), O.ComponentDispatch.dispatch(b.ComponentActions.WAVE_EMPHASIZE)
                    }, this.handleTokenSubmit = function(t) {
                        var n = e.state.code,
                            o = e.props.mfaTicket;
                        null != t && t.preventDefault(), I.default.loginMFA(n.replace(/ /g, ""), o), O.ComponentDispatch.dispatch(b.ComponentActions.WAVE_EMPHASIZE)
                    }, this.handleSMSTokenSubmit = function(t) {
                        var n = e.state.smsCode,
                            o = e.props.mfaTicket;
                        null != t && t.preventDefault(), I.default.loginSMS(n.replace(/ /g, ""), o), O.ComponentDispatch.dispatch(b.ComponentActions.WAVE_EMPHASIZE)
                    }, this.handleToggleSMSLogin = function(t) {
                        var n = e.props.mfaTicket;
                        null != t && t.preventDefault(), I.default.requestSMSToken(n), O.ComponentDispatch.dispatch(b.ComponentActions.WAVE_EMPHASIZE)
                    }, this.handleForgotPassword = function() {
                        var t = e.state.email;
                        null != e.emailRef && e.emailRef.focus(), I.default.forgotPassword(t, function() {
                            N.default.push(function(e) {
                                return a.createElement(y.default, i({
                                    header: l.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                                    confirmText: l.default.Messages.OKAY,
                                    red: !1,
                                    className: T.isMobile ? M.default.mobile : ""
                                }, e), r(p.default, {
                                    size: p.default.Sizes.MEDIUM,
                                    color: p.default.Colors.PRIMARY
                                }, void 0, l.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({
                                    email: t
                                })))
                            })
                        }), O.ComponentDispatch.dispatch(b.ComponentActions.WAVE_EMPHASIZE)
                    }, this.handleReset = function(t) {
                        null != t && t.preventDefault(), I.default.loginReset(), e.setState({
                            password: "",
                            email: "",
                            code: "",
                            smsCode: "",
                            captchaKey: null,
                            undelete: !1,
                            checkingHandoff: !1
                        })
                    }, this.handleCancelAccountDeletion = function() {
                        e.setState({
                            undelete: !0
                        }, e.handleLogin)
                    }, this.handleCaptchaVerify = function(t) {
                        e.setState({
                            captchaKey: t
                        }, e.handleLogin)
                    }, this.handleGotoRegister = function() {
                        var t = e.state.email,
                            n = e.props,
                            o = n.invite,
                            i = n.location,
                            r = n.transitionTo,
                            a = n.redirectTo,
                            s = null != i ? (0, u.parse)(i.search) : {};
                        "" !== t && (s.email = t);
                        var l = void 0;
                        null != o ? (s.mode = "register", l = b.Routes.INVITE(o.code)) : l = null != a ? b.Routes.REGISTER_AND_REDIRECT(a) : b.Routes.REGISTER, I.default.loginReset(), r(l, {
                            search: (0, u.stringify)(s)
                        }), O.ComponentDispatch.dispatch(b.ComponentActions.WAVE_EMPHASIZE)
                    }
                };
            D.displayName = "Login", t.default = s.default.connectStores([g.default, _.default, E.default], function() {
                return {
                    authenticated: g.default.isAuthenticated(),
                    handoffAvailable: _.default.isHandoffAvailable(),
                    user: _.default.user,
                    loginStatus: g.default.getLoginStatus(),
                    mfaTicket: g.default.getMFATicket(),
                    mfaSMS: g.default.getMFASMS(),
                    maskedPhone: g.default.getMaskedPhone(),
                    errors: g.default.getErrors(),
                    defaultRoute: E.default.defaultRoute
                }
            })(D), e.exports = t.default
        },
        6328: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.TransitionRoute = void 0;
            var o, i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                r = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                a = n(6724),
                s = n(225),
                l = n(370),
                u = (o = l) && o.__esModule ? o : {
                    default: o
                };

            function f(e, t) {
                var n = {};
                for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            var c = t.TransitionRoute = function() {
                    return null
                },
                d = function(e) {
                    function t() {
                        return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t),
                            function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, e.apply(this, arguments))
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.render = function() {
                        var e = this.context.router,
                            t = e.route,
                            n = e.history,
                            o = e.staticContext,
                            s = this.props,
                            l = s.children,
                            c = s.location,
                            d = s.childProps,
                            p = f(s, ["children", "location", "childProps"]),
                            h = c || t.location,
                            m = void 0,
                            v = void 0,
                            y = void 0;
                        return r.Children.forEach(l, function(e) {
                            if (null == m && r.isValidElement(e)) {
                                var s = e.props,
                                    l = s.path,
                                    u = s.exact,
                                    c = s.strict,
                                    p = s.sensitive,
                                    g = s.from,
                                    E = s.component,
                                    _ = s.render,
                                    I = f(s, ["path", "exact", "strict", "sensitive", "from", "component", "render"]),
                                    S = l || g;
                                if (null == (m = (0, a.matchPath)(h.pathname, {
                                        path: S,
                                        exact: u,
                                        strict: c,
                                        sensitive: p
                                    }, t.match))) return;
                                y = i({
                                    key: l,
                                    location: h,
                                    match: m,
                                    history: n,
                                    staticContext: o
                                }, d, I), null != E ? v = r.createElement(E, y) : null != _ && (v = _(y))
                            }
                        }), r.createElement(u.default, p, v)
                    }, t
                }(r.Component);
            d.Route = c, d.contextTypes = i({}, s.Switch.contextTypes), d.displayName = "TransitionSwitch", t.default = d
        },
        6869: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o = a(n(42)),
                i = n(590),
                r = a(n(11));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = {
                getIdleTime: function(e) {
                    r.default.getIdleMilliseconds(e)
                },
                dump: function(e) {
                    var t = void 0;
                    performance.memory && (t = {
                        jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                        totalJSHeapSize: performance.memory.totalJSHeapSize,
                        usedJSHeapSize: performance.memory.usedJSHeapSize
                    });
                    var n = {
                        browser: {
                            name: o.default.name,
                            version: o.default.version
                        },
                        os: {
                            name: o.default.os.family,
                            version: o.default.os.version
                        },
                        memory: t
                    };
                    e(n)
                },
                getTimeSinceNavigationStart: function() {
                    return Date.now() - i.navigationStart
                }
            }, e.exports = t.default
        },
        6870: function(e, t, n) {
            e.exports = n.p + "c8f0b54f79a9fd1ef60ad74c73a1ee1a.png"
        },
        6871: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o, i = n(6095),
                r = n(6870),
                a = (o = r) && o.__esModule ? o : {
                    default: o
                };
            var s = 20,
                l = function() {
                    function e() {
                        var t = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.img = null, this.loaded = !1, this.isFilled = !1, this.alpha = 0, this.mx = 0, this.my = 0, this.x = 0, this.y = 0, this.velX = 0, this.velY = 0, this.targetX = 2 * s, this.targetY = 2 * s, this.spring = {
                            friction: 60,
                            tension: 100
                        }, this.handleMouseMove = function(e) {
                            var n = e.clientX,
                                o = e.clientY;
                            t.targetX = n / window.innerWidth * s + s, t.targetY = o / window.innerWidth * s + s
                        }
                    }
                    return e.prototype.initialize = function() {
                        var e = this;
                        this.img = new Image, this.img.onload = function() {
                            e.loaded = !0
                        }, this.img.src = a.default, this.bind()
                    }, e.prototype.bind = function() {
                        window.addEventListener("mousemove", this.handleMouseMove, !1)
                    }, e.prototype.unbind = function() {
                        window.removeEventListener("mousemove", this.handleMouseMove, !1)
                    }, e.prototype.terminate = function() {
                        this.img = null, this.loaded = !1, this.isFilled = !1, this.alpha = 0, this.unbind()
                    }, e.prototype.update = function(e) {
                        this.loaded && (!this.isFilled && this.alpha < 1 ? this.alpha = Math.min(1, this.alpha + e) : this.isFilled && this.alpha > 0 && (this.alpha = Math.max(0, this.alpha - 3 * e)), this.velX += (0, i.applySpringForce)(this.targetX, this.x, this.velX, this.spring) * e, this.velY += (0, i.applySpringForce)(this.targetY, this.y, this.velY, this.spring) * e, this.x += this.velX * e, this.y += this.velY * e)
                    }, e.prototype.render = function(e) {
                        var t = this.img;
                        this.loaded && null != t && (e.save(), e.globalCompositeOperation = "source-atop", e.globalAlpha = this.alpha, e.drawImage(t, this.x + s, this.y + s), e.restore())
                    }, e.prototype.fill = function() {
                        this.isFilled = !0
                    }, e
                }();
            l.displayName = "Blobs", t.default = l, e.exports = t.default
        },
        6872: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o = 30;

            function i(e, t) {
                return Math.max(Math.min((e - t) / o, 1), -1)
            }
            var r = function() {
                function e() {
                    var t = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.resistance = .98, this.px = 0, this.py = 0, this.x = 0, this.y = 0, this.forceX = 0, this.forceY = 0, this.handleMouseMove = function(e) {
                        var n = e.clientX,
                            o = e.clientY;
                        t.x = n, t.y = o
                    }
                }
                return e.prototype.initialize = function() {
                    window.addEventListener("mousemove", this.handleMouseMove)
                }, e.prototype.terminate = function() {
                    window.removeEventListener("mousemove", this.handleMouseMove)
                }, e.prototype.update = function() {
                    this.x !== this.px && this.y !== this.py && (this.forceX += i(this.x, this.px), this.forceY += i(this.y, this.py), this.px = this.x, this.py = this.y), 0 !== this.forceX && (this.forceX = this.forceX * this.resistance), 0 !== this.forceY && (this.forceY = this.forceY * this.resistance)
                }, e.prototype.render = function() {}, e
            }();
            r.displayName = "Wind", t.default = r, e.exports = t.default
        },
        6873: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o = n(6095),
                i = n(6035);
            var r = 2,
                a = 3,
                s = 1,
                l = 4,
                u = ["#7d8187", "#18191c", "#8fa2df", "#4f545c"],
                f = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.size = (0, o.randomNumber)(r, a), this.depth = (0, o.randomNumber)(s, l), this.positionMultiplier = this.depth / l, this.color = u[l - this.depth], this.offscreenX = i.MAX_RADIUS + this.size, this.offscreenY = i.MAX_RADIUS + this.size, this.x = (0, o.randomNumber)(-this.size, this.offscreenX), this.y = (0, o.randomNumber)(-this.size, this.offscreenY)
                    }
                    return e.prototype.checkBounds = function() {
                        this.x > this.offscreenX ? this.x = -this.size : this.y > this.offscreenY ? this.y = -this.size : this.x < -this.size ? this.x = this.offscreenX : this.y < -this.size && (this.y = this.offscreenY)
                    }, e.prototype.update = function(e, t) {
                        this.checkBounds(), this.y += t * this.positionMultiplier, this.x += e * this.positionMultiplier
                    }, e.prototype.render = function(e, t) {
                        e.beginPath(), e.globalAlpha = t * this.depth / 4, e.arc(this.x, this.y, this.size, 0, i.TWO_PI, !0), e.fillStyle = this.color, e.fill(), e.globalAlpha = 1
                    }, e
                }();
            f.displayName = "Particle", t.default = f, e.exports = t.default
        },
        6874: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o = r(n(6873)),
                i = r(n(6872));

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var a = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.particles = [], this.wind = new i.default, this.alpha = 0, this.isFilled = !1, this.loadInTimer = null
                }
                return e.prototype.initialize = function() {
                    var e = this;
                    this.particles = [], this.wind.initialize(), this.loadInTimer = setTimeout(function() {
                        for (var t = 0; t < 75; t++) e.particles.push(new o.default)
                    }, 250)
                }, e.prototype.terminate = function() {
                    this.particles = [], this.wind.terminate(), null != this.loadInTimer && clearTimeout(this.loadInTimer)
                }, e.prototype.update = function(e) {
                    var t = this;
                    0 !== this.particles.length && (!this.isFilled && this.alpha < 1 ? this.alpha = Math.min(1, this.alpha + e) : this.isFilled && this.alpha > 0 && (this.alpha = Math.max(0, this.alpha - 3 * e)), this.wind.update(), this.particles.forEach(function(n) {
                        return n.update(10 * t.wind.forceX * e, 10 * Math.min(t.wind.forceY, -.001) * e - .1)
                    }))
                }, e.prototype.render = function(e) {
                    var t = this;
                    0 !== this.particles.length && (e.save(), e.globalCompositeOperation = "source-atop", this.particles.forEach(function(n) {
                        return n.render(e, t.alpha)
                    }), e.restore())
                }, e.prototype.fill = function() {
                    this.isFilled = !0
                }, e
            }();
            a.displayName = "Particles", t.default = a, e.exports = t.default
        },
        6875: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o = n(6095),
                i = n(6035);
            var r = 60,
                a = 2.15 * Math.cos(Math.PI),
                s = function() {
                    function e(t) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.x = -40, this.y = -40, this.targetX = 0, this.targetY = 0, this.oscillate = !0, this.velX = 0, this.velY = 0, this.angle = 0, this.speedUp = 1.5, this.waveRange = r, this.spring = {
                            friction: 15,
                            tension: i.POINT_TENSION_DEFAULT
                        }, this.index = t, this.spring.tension = i.POINT_TENSION_DEFAULT * Math.max(.1, t / 7) + i.POINT_TENSION_DEFAULT, this.count = a * t
                    }
                    return e.prototype.updateStatic = function() {
                        this.targetX = this.targetX + 30 * Math.cos(this.angle) * Math.sin(this.count), this.targetY = this.targetY + 30 * Math.sin(this.angle) * Math.sin(this.count), this.x = this.targetX, this.y = this.targetY
                    }, e.prototype.update = function(e) {
                        this.speedUp > 0 ? (this.speedUp = Math.max(0, this.speedUp - e), this.count += e * (10 * Math.min(this.speedUp, 1) + .4)) : this.count += .4 * e;
                        var t = void 0,
                            n = void 0;
                        if (t = (0, o.applySpringForce)(this.targetX, this.x, this.velX, this.spring), n = (0, o.applySpringForce)(this.targetY, this.y, this.velY, this.spring), this.velX += t * e, this.velY += n * e, this.oscillate) {
                            var i = this.targetX + this.waveRange * Math.cos(this.angle) * Math.sin(this.count),
                                r = this.targetY + this.waveRange * Math.sin(this.angle) * Math.sin(this.count);
                            t = (0, o.applySpringForce)(i, this.x, this.velX, this.spring), n = (0, o.applySpringForce)(r, this.y, this.velY, this.spring), this.velX += t * e, this.velY += n * e
                        }
                        this.x += this.velX * e, this.y += this.velY * e
                    }, e.prototype.render = function(e) {
                        e.fillStyle = "#fff", e.fillRect(this.x, this.y, 4, 4)
                    }, e
                }();
            s.displayName = "Point", t.default = s, e.exports = t.default
        },
        6876: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o = u(n(6022)),
                i = u(n(6875)),
                r = n(6095),
                a = n(233),
                s = n(6035),
                l = u(n(5545));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = 15,
                c = f / 2,
                d = (0, a.cssValueToNumber)(l.default.responsiveWidthMobile);

            function p(e, t, n, o) {
                return t * (n / o) + e
            }

            function h() {
                return Math.min(Math.max(Math.min(.8 * window.innerWidth, .8 * window.innerHeight), s.MIN_RADIUS), s.MAX_RADIUS)
            }
            var m = 30,
                v = function() {
                    function e(t) {
                        var n, a = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.points = [], this.hasEntered = !1, this.isFilling = !1, this._resizeWave = function() {
                            var e = h();
                            a.points.forEach(function(t, n) {
                                var o = e * Math.cos(s.TWO_PI * p(0, .25, n, f)) - 40,
                                    i = e * Math.sin(s.TWO_PI * p(0, .25, n, f)) - 40;
                                0 !== n ? i += (0, r.randomNumber)(0, m) - m / 2 : n !== f && (o += (0, r.randomNumber)(0, m) - m / 2), t.targetX = o, t.targetY = i, t.angle = Math.atan2(i, o)
                            })
                        }, this.resizeWave = (0, o.default)(this._resizeWave, 200), this.updateWaveState = t, this.hasEntered = !1;
                        for (var l = 0; l <= f; l++) this.points.push(new i.default((n = l, Math.floor(c - Math.floor(Math.abs(n - c))))))
                    }
                    return e.prototype.initialize = function() {
                        this._resizeWave()
                    }, e.prototype.emphasize = function() {
                        this.points.forEach(function(e) {
                            return e.speedUp = 1
                        })
                    }, e.prototype.terminate = function() {
                        this.points = []
                    }, e.prototype.update = function(e) {
                        0 !== this.points.length && (this.points.forEach(function(t) {
                            return t.update(Math.min(e, 1 / 60))
                        }), this.hasEntered || this.points[0].x > d && (this.hasEntered = !0, this.updateWaveState(s.WaveStates.ENTERED)), this.isFilling && this.points[0].x > this.points[0].targetX && (this.isFilling = !1, this.updateWaveState(s.WaveStates.FILLED)))
                    }, e.prototype.render = function(e) {
                        if (0 !== this.points.length) {
                            var t = this.points,
                                n = t[0],
                                o = t.slice(1);
                            e.save(), e.beginPath(), e.moveTo(n.x, n.y), o.forEach(function(t, n) {
                                if (null == o[n + 1]) e.quadraticCurveTo(t.x, t.y, t.x, t.y);
                                else {
                                    var i = (t.x + o[n + 1].x) / 2,
                                        r = (t.y + o[n + 1].y) / 2;
                                    e.quadraticCurveTo(t.x, t.y, i, r)
                                }
                            }), e.lineTo(0, 0), e.closePath(), e.fillStyle = "#000", e.globalCompositeOperation = "destination-in", e.fill(), e.restore()
                        }
                    }, e.prototype.fill = function() {
                        var e = this,
                            t = Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight) + 100,
                            n = h() - 140,
                            o = function(e, t, n, o) {
                                e.targetX = t * Math.cos(s.TWO_PI * p(0, .25, n, f)) - 40, e.targetY = t * Math.sin(s.TWO_PI * p(0, .25, n, f)) - 40, o && (e.targetX += (0, r.randomNumber)(0, m) - m / 2, e.targetY += (0, r.randomNumber)(0, m) - m / 2, e.speedUp = 3, e.spring.tension = s.POINT_TENSION_DEFAULT * Math.random() * .5 + s.POINT_TENSION_DEFAULT)
                            };
                        this.points.forEach(function(e, t) {
                            return o(e, n, t, !0)
                        }), setTimeout(function() {
                            e.points.forEach(function(e, n) {
                                o(e, t, n, !1);
                                var i = 1 - e.index / (f / 2);
                                e.spring.friction += e.spring.friction + e.spring.friction * i, e.spring.tension = .7 * s.POINT_TENSION_DEFAULT + 80 * Math.random(), e.waveRange = 2 * e.waveRange
                            }), e.isFilling = !0, e.updateWaveState(s.WaveStates.FILLING)
                        }, 250)
                    }, e
                }();
            v.displayName = "Wave", t.default = v, e.exports = t.default
        },
        6877: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                i = n(140),
                r = p(n(6876)),
                a = p(n(6874)),
                s = p(n(6871)),
                l = n(233),
                u = n(0),
                f = n(6035),
                c = p(n(5653)),
                d = p(n(5545));

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var h = (0, l.cssValueToNumber)(d.default.responsiveWidthMobile),
                m = 1 / 120,
                v = 4e3,
                y = function(e) {
                    function t(n) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var o = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, e.call(this, n));
                        return o.width = 0, o.height = 0, o.children = [], o.ratio = 0, o._lastTick = 0, o._reqAnimId = null, o.setCanvas = function(e) {
                            if (null != e) {
                                o.canvas = e, o.canvasContext = o.canvas.getContext("2d");
                                var t = window.devicePixelRatio || 1,
                                    n = o.canvasContext.webkitBackingStorePixelRatio || o.canvasContext.mozBackingStorePixelRatio || o.canvasContext.msBackingStorePixelRatio || o.canvasContext.oBackingStorePixelRatio || o.canvasContext.backingStorePixelRatio || 1;
                                o.ratio = t / n
                            }
                        }, o.resizeCanvas = function() {
                            o.width = window.innerWidth, o.height = window.innerHeight;
                            var e = o.canvas,
                                t = o.canvasContext,
                                n = o.width,
                                i = o.height,
                                r = o.ratio;
                            null != e && null != t && (e.width = n * r, e.height = i * r, e.style.width = n + "px", e.style.height = i + "px", t.scale(r, r)), n <= h ? o.pause() : o.play(), o.wave.resizeWave(), o.renderAnimation()
                        }, o.handleVisibilityChange = function() {
                            document.hidden ? o.delayedPause() : o.play()
                        }, o.play = function() {
                            clearTimeout(o._pauseTimeout), null == o._reqAnimId && o.run()
                        }, o.pause = function() {
                            clearTimeout(o._pauseTimeout), window.cancelAnimationFrame(o._reqAnimId), o._reqAnimId = null, o.advanceTransitionalState()
                        }, o.delayedPause = function() {
                            clearTimeout(o._pauseTimeout), o._pauseTimeout = setTimeout(o.pause, v)
                        }, o.updateWaveState = function(e) {
                            (0, o.props.updateWaveState)(e)
                        }, o.handleWaveEmphasize = function() {
                            o.wave.emphasize()
                        }, o.run = function() {
                            if (0 === o._lastTick) return o._lastTick = Date.now(), void(o._reqAnimId = requestAnimationFrame(o.run));
                            for (var e = Date.now(), t = Math.min((e - o._lastTick) / 1e3, 8 * m); t > 0;) {
                                var n = t < m ? t : m;
                                o.updateAnimation(n), t -= n
                            }
                            o.renderAnimation(), o._lastTick = e, o._reqAnimId = requestAnimationFrame(o.run)
                        }, o.wave = new r.default(o.updateWaveState), o.children = [new s.default, new a.default, o.wave], o
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.componentDidMount = function() {
                        this.initialize()
                    }, t.prototype.componentDidUpdate = function(e) {
                        var t = this.props.waveState;
                        t === f.WaveStates.FILLING && t !== e.waveState && this.waveFill()
                    }, t.prototype.componentWillUnmount = function() {
                        this.terminate()
                    }, t.prototype.initialize = function() {
                        this.children.forEach(function(e) {
                            return e.initialize()
                        }), this.bindEvents(), this.resizeCanvas(), document.hidden && this.delayedPause()
                    }, t.prototype.terminate = function() {
                        this.pause(), this.unbindEvents(), this.children.forEach(function(e) {
                            return e.terminate()
                        })
                    }, t.prototype.bindEvents = function() {
                        window.addEventListener("resize", this.resizeCanvas, !1), window.addEventListener("blur", this.delayedPause, !1), window.addEventListener("focus", this.play, !1), document.addEventListener("visibilitychange", this.handleVisibilityChange, !1), i.ComponentDispatch.subscribe(u.ComponentActions.WAVE_EMPHASIZE, this.handleWaveEmphasize)
                    }, t.prototype.unbindEvents = function() {
                        window.removeEventListener("resize", this.resizeCanvas, !1), window.removeEventListener("blur", this.delayedPause, !1), window.removeEventListener("focus", this.play, !1), document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1), i.ComponentDispatch.unsubscribe(u.ComponentActions.WAVE_EMPHASIZE, this.handleWaveEmphasize)
                    }, t.prototype.advanceTransitionalState = function() {
                        var e = this.props.waveState;
                        e !== f.WaveStates.INITIAL && e !== f.WaveStates.FILLING || this.updateWaveState(e + 1)
                    }, t.prototype.waveFill = function() {
                        null == this._reqAnimId ? this.updateWaveState(f.WaveStates.FILLED) : this.children.forEach(function(e) {
                            return e.fill()
                        })
                    }, t.prototype.updateAnimation = function(e) {
                        this.children.forEach(function(t) {
                            return t.update(e)
                        })
                    }, t.prototype.renderAnimation = function() {
                        var e = this.canvasContext;
                        null != e && (e.fillStyle = u.Colors.PRIMARY_630, e.fillRect(0, 0, this.width, this.height), this.children.forEach(function(t) {
                            return t.render(e)
                        }))
                    }, t.prototype.render = function() {
                        return o.createElement("canvas", {
                            className: c.default.canvas,
                            ref: this.setCanvas
                        })
                    }, t
                }(o.Component);
            y.displayName = "WaveAnimation", t.default = y, e.exports = t.default
        },
        6878: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o, i = (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, i) {
                    var r = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {}), t && r)
                        for (var s in r) void 0 === t[s] && (t[s] = r[s]);
                    else t || (t = r || {});
                    if (1 === a) t.children = i;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    return {
                        $$typeof: o,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }),
                r = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                a = u(n(161)),
                s = n(0),
                l = u(n(5654));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            var c = function(e) {
                function t() {
                    var n, o;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var i = arguments.length, r = Array(i), s = 0; s < i; s++) r[s] = arguments[s];
                    return n = o = f(this, e.call.apply(e, [this].concat(r))), o.anim = new a.default.Value(0), o.animate = function(e) {
                        a.default.spring(o.anim, {
                            toValue: e,
                            friction: 10,
                            tension: 100
                        }).start()
                    }, f(o, n)
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), t.prototype.UNSAFE_componentWillReceiveProps = function(e) {
                    e.show !== this.props.show && this.animate(e.show ? 1 : 0)
                }, t.prototype.getAnimatedStyle = function() {
                    var e = this.anim;
                    return {
                        opacity: e,
                        transform: [{
                            translateY: e.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["-100px", "0px"]
                            })
                        }, {
                            translateZ: 0
                        }]
                    }
                }, t.prototype.render = function() {
                    return i(a.default.a, {
                        href: s.Routes.INDEX,
                        target: "_blank",
                        rel: "noopener",
                        className: l.default.logo,
                        style: this.getAnimatedStyle()
                    })
                }, t
            }(r.PureComponent);
            c.displayName = "AuthLogo", t.default = c, e.exports = t.default
        },
        6879: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o, i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                r = (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, i) {
                    var r = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {}), t && r)
                        for (var s in r) void 0 === t[s] && (t[s] = r[s]);
                    else t || (t = r || {});
                    if (1 === a) t.children = i;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    return {
                        $$typeof: o,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }),
                a = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                s = u(n(9)),
                l = u(n(5655));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            var c = function(e) {
                function t() {
                    var n, o;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
                    return n = o = f(this, e.call.apply(e, [this].concat(r))), o.unmounting = !1, o.state = {
                        loaded: !1
                    }, f(o, n)
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), t.prototype.UNSAFE_componentWillMount = function() {
                    this.initialize()
                }, t.prototype.UNSAFE_componentWillReceiveProps = function(e) {
                    var t = this;
                    e.src !== this.props.src && this.setState({
                        loaded: !1
                    }, function() {
                        return t.initialize()
                    })
                }, t.prototype.initialize = function() {
                    var e, t = this;
                    (e = this.props.src, new Promise(function(t, n) {
                        null == e && n(new Error("No image src passed"));
                        var o = new Image;
                        o.src = e, o.onload = function() {
                            return t(o)
                        }, o.onerror = function(e) {
                            return n(e)
                        }
                    })).then(function() {
                        t.unmounting || t.setState({
                            loaded: !0
                        })
                    })
                }, t.prototype.componentWillUnmount = function() {
                    this.unmounting = !0
                }, t.prototype.render = function() {
                    var e, t = this.props,
                        n = t.className,
                        o = t.src,
                        a = t.alt,
                        u = t.width,
                        f = t.height,
                        c = t.onLoad,
                        d = t.style,
                        p = this.state.loaded;
                    return r("div", {
                        className: n,
                        style: i({}, d, {
                            width: u,
                            height: f
                        })
                    }, void 0, r("img", {
                        className: (0, s.default)(l.default.image, (e = {}, e[l.default.loaded] = p, e)),
                        width: u,
                        height: f,
                        src: o,
                        alt: a,
                        onLoad: c
                    }))
                }, t
            }(a.PureComponent);
            c.defaultProps = {
                width: 0,
                height: 0,
                alt: ""
            }, c.displayName = "LazySplash", t.default = c, e.exports = t.default
        },
        6880: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o, i = (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, i) {
                    var r = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {}), t && r)
                        for (var s in r) void 0 === t[s] && (t[s] = r[s]);
                    else t || (t = r || {});
                    if (1 === a) t.children = i;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    return {
                        $$typeof: o,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }),
                r = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                a = d(n(9)),
                s = d(n(6879)),
                l = d(n(6878)),
                u = d(n(6877)),
                f = n(6035),
                c = d(n(5545));

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function p(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            var h = function(e) {
                function t() {
                    var n, o;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
                    return n = o = p(this, e.call.apply(e, [this].concat(r))), o.state = {
                        naturalWidth: 0,
                        naturalHeight: 0,
                        width: 0,
                        height: 0
                    }, o.resizeImage = function() {
                        var e = o.state,
                            t = e.naturalWidth,
                            n = e.naturalHeight;
                        o.setState(o.calculateDimensions(t, n))
                    }, o.handleLoad = function(e) {
                        var t = e.currentTarget,
                            n = t.naturalWidth,
                            i = t.naturalHeight;
                        o.setState(o.calculateDimensions(n, i)), window.removeEventListener("resize", o.resizeImage), window.addEventListener("resize", o.resizeImage)
                    }, p(o, n)
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.resizeImage)
                }, t.prototype.calculateDimensions = function(e, t) {
                    var n = window,
                        o = n.innerWidth,
                        i = n.innerHeight;
                    if (0 === e || 0 === t) return null;
                    var r = t / e,
                        a = o,
                        s = Math.round(o * r);
                    return s < i && (s = i, r = e / t, a = Math.round(i * r)), {
                        naturalWidth: e,
                        naturalHeight: t,
                        width: a,
                        height: s
                    }
                }, t.prototype.renderSplashArt = function() {
                    var e = this.props.splash,
                        t = this.state,
                        n = t.width,
                        o = t.height;
                    return null != e ? i(s.default, {
                        className: c.default.rightSplit,
                        src: e,
                        width: n,
                        height: o,
                        onLoad: this.handleLoad
                    }) : null
                }, t.prototype.renderContent = function() {
                    var e, t = this.props,
                        n = t.children,
                        o = t.waveState,
                        s = t.updateWaveState,
                        d = t.showLogo;
                    return i(r.Fragment, {}, void 0, i(u.default, {
                        waveState: o,
                        updateWaveState: s
                    }), i("div", {
                        className: (0, a.default)(c.default.leftSplit, (e = {}, e[c.default.hasLogo] = d, e))
                    }, void 0, d ? i(l.default, {
                        show: o === f.WaveStates.ENTERED && o !== f.WaveStates.FILLING
                    }) : null, n))
                }, t.prototype.render = function() {
                    var e = this.props.className;
                    return i("div", {
                        className: (0, a.default)(e, c.default.wrapper)
                    }, void 0, this.renderSplashArt(), this.renderContent())
                }, t
            }(r.PureComponent);
            h.displayName = "WaveSplash", t.default = h, e.exports = t.default
        },
        6881: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o, i = (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, i) {
                    var r = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {}), t && r)
                        for (var s in r) void 0 === t[s] && (t[s] = r[s]);
                    else t || (t = r || {});
                    if (1 === a) t.children = i;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    return {
                        $$typeof: o,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }),
                r = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                a = m(n(9)),
                s = m(n(6328)),
                l = m(n(6880)),
                u = n(943),
                f = m(n(40)),
                c = m(n(11)),
                d = n(0),
                p = n(6035),
                h = m(n(5652));

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var v = [d.Routes.LOGIN, d.Routes.REGISTER, d.Routes.INVITE(""), d.Routes.DISABLE_EMAIL_NOTIFICATIONS, d.Routes.VERIFY, d.Routes.AUTHORIZE_IP, d.Routes.RESET, d.Routes.HANDOFF],
                y = [d.Routes.APP, d.Routes.ACTIVITY, d.Routes.GAME_LIBRARY, d.Routes.APPLICATION_STORE, d.Routes.GUILD(""), "/welcome/", "/settings/", d.Routes.USERS("")];

            function g(e) {
                return v.some(function(t) {
                    return e.startsWith(t)
                })
            }
            var E = function(e) {
                function t(n) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var o = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, e.call(this, n));
                    return o.updateWaveState = function(e) {
                        var t = o.state.waveState;
                        o.setState({
                            waveState: Math.max(t, e)
                        })
                    }, o.transitionTo = function(e, t) {
                        var n = o.state.waveState;
                        g(e) ? f.default.transitionTo(e) : o.setState({
                            route: e,
                            extra: t,
                            waveState: Math.max(n, p.WaveStates.FILLING)
                        })
                    }, o.replaceWith = function(e) {
                        var t = o.state.waveState;
                        g(e) ? f.default.replaceWith(e) : o.setState({
                            route: e,
                            replaceWith: !0,
                            waveState: Math.max(t, p.WaveStates.FILLING)
                        })
                    }, o.state = {
                        waveState: p.WaveStates.INITIAL,
                        extra: {},
                        replaceWith: !1,
                        route: null
                    }, o
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), t.prototype.componentDidUpdate = function(e, t) {
                    var n = this.state,
                        o = n.waveState,
                        i = n.replaceWith,
                        r = n.extra,
                        a = n.route;
                    if (o === p.WaveStates.FILLED && o !== t.waveState && null != a) {
                        if (function(e) {
                                return y.some(function(t) {
                                    return e.startsWith(t)
                                })
                            }(a)) return i ? f.default.replaceWith(a) : f.default.transitionTo(a, r);
                        window.location = a
                    }
                }, t.prototype.mobileTransitionTo = function(e, t) {
                    g(e) ? f.default.transitionTo(e, t) : window.location = e
                }, t.prototype.mobileReplaceWith = function(e) {
                    g(e) ? f.default.replaceWith(e) : window.location = e
                }, t.prototype.renderDefault = function() {
                    var e, t = this,
                        n = this.props,
                        o = n.splash,
                        u = n.children,
                        f = this.state,
                        d = f.waveState,
                        m = null;
                    return null == f.route && (m = r.Children.map(u, function(e) {
                        return r.cloneElement(e, {
                            transitionTo: t.transitionTo,
                            replaceWith: t.replaceWith
                        })
                    })), i(l.default, {
                        className: (0, a.default)(h.default.splashBackground, (e = {}, e[h.default.loggingIn] = d >= p.WaveStates.FILLING, e)),
                        splash: o,
                        waveState: d,
                        showLogo: !c.default.isWindows(),
                        updateWaveState: this.updateWaveState
                    }, void 0, i(s.default, {
                        component: r.Fragment
                    }, void 0, m))
                }, t.prototype.renderMobile = function() {
                    var e = this;
                    return i(s.default, {
                        component: r.Fragment
                    }, void 0, r.Children.map(this.props.children, function(t) {
                        return r.cloneElement(t, {
                            transitionTo: e.mobileTransitionTo,
                            replaceWith: e.mobileReplaceWith
                        })
                    }))
                }, t.prototype.render = function() {
                    return u.isMobile ? this.renderMobile() : this.renderDefault()
                }, t
            }(r.Component);
            E.displayName = "AuthWrapper", t.default = E, e.exports = t.default
        },
        6882: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o, i = (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, i) {
                    var r = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {}), t && r)
                        for (var s in r) void 0 === t[s] && (t[s] = r[s]);
                    else t || (t = r || {});
                    if (1 === a) t.children = i;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    return {
                        $$typeof: o,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }),
                r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                a = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                s = p(n(161)),
                l = p(n(6022)),
                u = n(943),
                f = n(233),
                c = p(n(5656)),
                d = p(n(5545));

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function h(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            var m = (0, f.cssValueToNumber)(d.default.responsiveWidthMobile),
                v = {
                    START: 0,
                    END: 1,
                    OPACITY_INPUT_START: .5,
                    OPACITY_INPUT_END: .7,
                    OPACITY_OUTPUT_START: 0,
                    OPACITY_OUTPUT_END: 1,
                    SCALE_INPUT_START: 0,
                    SCALE_INPUT_END: 1,
                    SCALE_OUTPUT_START: .8,
                    SCALE_OUTPUT_END: 1
                },
                y = {
                    friction: 10,
                    tension: 130
                };
            t.default = function(e) {
                return function(t) {
                    function n() {
                        var e, o;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n);
                        for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
                        return e = o = h(this, t.call.apply(t, [this].concat(r))), o.anim = new s.default.Value(v.START), o.state = {
                            shouldAnimate: !u.isMobile
                        }, o.handleResize = function() {
                            var e = window.innerWidth > m;
                            !o.state.shouldAnimate && e && o.anim.setValue(v.END), o.setState({
                                shouldAnimate: e
                            })
                        }, o.handleResizeDebounced = (0, l.default)(o.handleResize, 60), h(o, e)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(n, t), n.prototype.UNSAFE_componentWillMount = function() {
                        u.isMobile || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize())
                    }, n.prototype.componentWillUnmount = function() {
                        clearTimeout(this.timeout), window.removeEventListener("resize", this.handleResizeDebounced)
                    }, n.prototype.componentWillAppear = function(e) {
                        this.state.shouldAnimate ? this.animateTo(v.END, e) : e()
                    }, n.prototype.componentWillEnter = function(e) {
                        var t = this;
                        this.state.shouldAnimate ? (clearTimeout(this.timeout), this.timeout = setTimeout(function() {
                            return t.animateTo(v.END, e)
                        }, 40)) : e()
                    }, n.prototype.componentWillLeave = function(e) {
                        this.state.shouldAnimate ? this.animateTo(v.START, e) : e()
                    }, n.prototype.animateTo = function(e, t) {
                        s.default.spring(this.anim, r({
                            toValue: e
                        }, y)).start(t)
                    }, n.prototype.getAnimatedStyle = function() {
                        return this.state.shouldAnimate ? {
                            opacity: this.anim,
                            transform: [{
                                scale: this.anim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1.05, 1]
                                })
                            }, {
                                translateY: this.anim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["-70px", "0px"]
                                })
                            }, {
                                translateZ: 0
                            }]
                        } : null
                    }, n.prototype.render = function() {
                        return i(s.default.div, {
                            className: c.default.wrapper,
                            style: this.getAnimatedStyle()
                        }, void 0, a.createElement(e, this.props))
                    }, n
                }(a.Component)
            }, e.exports = t.default
        },
        6883: function(e, t, n) {
            e.exports = n.p + "4dfc23421736b1eaf2a19bcb16633bad.svg"
        },
        6884: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o, i = (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, i) {
                    var r = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {}), t && r)
                        for (var s in r) void 0 === t[s] && (t[s] = r[s]);
                    else t || (t = r || {});
                    if (1 === a) t.children = i;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    return {
                        $$typeof: o,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }),
                r = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                a = v(n(3)),
                s = v(n(13)),
                l = v(n(6)),
                u = n(524),
                f = n(5987),
                c = v(f),
                d = v(n(945)),
                p = v(n(93)),
                h = n(0),
                m = v(n(516));

            function v(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function y(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            a.default.initialize();
            var g = i(c.default, {}, void 0, i(f.AuthSpinner, {})),
                E = function(e) {
                    function t() {
                        var n, o;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
                        return n = o = y(this, e.call.apply(e, [this].concat(r))), o.state = {
                            busy: !0,
                            success: !1,
                            user: null
                        }, y(o, n)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.componentDidMount = function() {
                        var e = this,
                            t = (0, u.parse)(this.props.location.search);
                        s.default.post({
                            url: h.Endpoints.DISABLE_EMAIL_NOTIFICATIONS,
                            body: {
                                token: t.token,
                                pixel_uuid: t.hash
                            }
                        }).then(function(t) {
                            var n = t.body.user,
                                o = new p.default(n);
                            e.setState({
                                success: !0,
                                busy: !1,
                                user: o
                            })
                        }, function() {
                            return e.setState({
                                success: !1,
                                busy: !1
                            })
                        })
                    }, t.prototype.renderBusy = function() {
                        return g
                    }, t.prototype.renderSuccess = function() {
                        var e = this.props,
                            t = e.defaultRoute,
                            n = e.transitionTo,
                            o = this.state.user;
                        return i(c.default, {}, void 0, i(f.Avatar, {
                            src: o ? o.getAvatarURL() : null,
                            size: f.Avatar.Sizes.XXLARGE,
                            className: m.default.marginBottom20
                        }), i(f.Title, {
                            className: m.default.marginBottom8
                        }, void 0, l.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_HEADER), i(f.Subtitle, {}, void 0, l.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_SUCCESS_BODY), i(f.Button, {
                            className: m.default.marginTop40,
                            onClick: function() {
                                return n(t)
                            }
                        }, void 0, l.default.Messages.CONTINUE_TO_WEBAPP))
                    }, t.prototype.renderError = function() {
                        var e = this.props,
                            t = e.defaultRoute,
                            o = e.transitionTo;
                        return i(c.default, {}, void 0, i(f.Image, {
                            src: n(6883),
                            className: m.default.marginBottom20
                        }), i(f.Title, {
                            className: m.default.marginBottom8
                        }, void 0, l.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_HEADER), i(f.Subtitle, {}, void 0, l.default.Messages.AUTH_DISABLE_EMAIL_NOTIFICATIONS_FAILURE_BODY), i(f.Button, {
                            className: m.default.marginTop40,
                            onClick: function() {
                                return o(t)
                            }
                        }, void 0, l.default.Messages.CONTINUE_TO_WEBAPP))
                    }, t.prototype.render = function() {
                        var e = this.state,
                            t = e.busy,
                            n = e.success;
                        return t ? this.renderBusy() : n ? this.renderSuccess() : this.renderError()
                    }, t
                }(r.PureComponent);
            E.displayName = "DisableEmailNotifications", t.default = a.default.connectStores([d.default], function() {
                return {
                    defaultRoute: d.default.defaultRoute
                }
            })(E), e.exports = t.default
        },
        6885: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o, i = (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, i) {
                    var r = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {}), t && r)
                        for (var s in r) void 0 === t[s] && (t[s] = r[s]);
                    else t || (t = r || {});
                    if (1 === a) t.children = i;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    return {
                        $$typeof: o,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }),
                r = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                a = g(n(3)),
                s = g(n(9)),
                l = n(524),
                u = g(n(6)),
                f = n(5987),
                c = g(f),
                d = g(n(14)),
                p = g(n(934)),
                h = n(140),
                m = n(943),
                v = n(0),
                y = g(n(516));

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function E(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            a.default.initialize();
            var _ = function(e) {
                function t() {
                    var n, o;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
                    return n = o = E(this, e.call.apply(e, [this].concat(r))), o.state = {
                        password: "",
                        code: "",
                        error: null
                    }, o.handleSubmit = function(e) {
                        var t = o.props,
                            n = t.location,
                            i = t.replaceWith,
                            r = o.state,
                            a = r.password,
                            s = r.error;
                        if (null != e && e.preventDefault(), 0 === a.length) return o.setState({
                            error: u.default.Messages.PASSWORD_REQUIRED
                        }), void h.ComponentDispatch.dispatch(v.ComponentActions.WAVE_EMPHASIZE);
                        null != s && o.setState({
                            error: null
                        });
                        var f = (0, l.parse)(n.search);
                        null != f.token && p.default.resetPassword(f.token, a, i)
                    }, o.handleTokenSubmit = function(e) {
                        var t = o.props,
                            n = t.location,
                            i = t.replaceWith,
                            r = t.mfaTicket,
                            a = o.state,
                            s = a.code,
                            f = a.password,
                            c = a.error;
                        if (null != e && e.preventDefault(), 0 === f.length) return o.setState({
                            error: u.default.Messages.PASSWORD_REQUIRED
                        }), void h.ComponentDispatch.dispatch(v.ComponentActions.WAVE_EMPHASIZE);
                        null != c && o.setState({
                            error: null
                        });
                        var d = (0, l.parse)(n.search);
                        null != d.token && p.default.resetPasswordMFA(s, r, f, d.token, i)
                    }, o.renderError = function(e) {
                        var t = o.props.errors;
                        if (o.hasError(e)) {
                            var n = t[e];
                            return Array.isArray(n) ? n[0] : n
                        }
                        return null
                    }, E(o, n)
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), t.prototype.hasError = function(e) {
                    return null != this.props.errors[e] || null != this.state.error
                }, t.prototype.renderPasswordReset = function() {
                    var e = this,
                        t = this.state,
                        o = t.password,
                        r = t.error,
                        a = this.props.loginStatus,
                        s = r || this.renderError("password");
                    return i(c.default, {
                        onSubmit: this.handleSubmit,
                        tag: "form"
                    }, void 0, i("img", {
                        alt: "",
                        src: n(null == s ? 6323 : 6322),
                        className: y.default.marginBottom20
                    }), i(f.Title, {}, void 0, u.default.Messages.RESET_PASSWORD_TITLE), i(f.Block, {
                        className: y.default.marginTop20
                    }, void 0, i(f.Input, {
                        label: u.default.Messages.FORM_LABEL_NEW_PASSWORD,
                        className: y.default.marginBottom20,
                        name: "password",
                        value: o,
                        onChange: function(t) {
                            return e.setState({
                                password: t
                            })
                        },
                        error: s,
                        type: "password"
                    }), i(f.Button, {
                        type: "submit",
                        submitting: a === v.LoginStates.LOGGING_IN_MFA
                    }, void 0, u.default.Messages.CHANGE_PASSWORD)))
                }, t.prototype.renderMFA = function() {
                    var e = this,
                        t = this.state.error,
                        o = this.props.loginStatus,
                        r = t || this.renderError("code");
                    return i(c.default, {
                        onSubmit: this.handleTokenSubmit,
                        tag: "form"
                    }, void 0, i("img", {
                        alt: "",
                        src: n(null == r ? 6323 : 6322),
                        className: (0, s.default)(y.default.marginBottom20, m.isMobile ? y.default.marginTop20 : "")
                    }), i(f.Title, {
                        className: y.default.marginBottom8
                    }, void 0, u.default.Messages.TWO_FA_ENTER_TOKEN_LABEL), i(f.Subtitle, {}, void 0, u.default.Messages.TWO_FA_ENTER_TOKEN_BODY), i(f.Block, {
                        className: y.default.marginTop20
                    }, void 0, i(f.Input, {
                        className: y.default.marginBottom8,
                        error: r,
                        onChange: function(t) {
                            return e.setState({
                                code: t
                            })
                        },
                        autoComplete: "off",
                        placeholder: u.default.Messages.TWO_FA_AUTH_CODE,
                        spellCheck: "false",
                        maxLength: 10,
                        autoFocus: !0,
                        value: this.state.code
                    }), i(f.Button, {
                        type: "submit",
                        submitting: o === v.LoginStates.LOGGING_IN_MFA
                    }, void 0, u.default.Messages.LOGIN)))
                }, t.prototype.render = function() {
                    return this.props.mfaTicket ? this.renderMFA() : this.renderPasswordReset()
                }, t
            }(r.PureComponent);
            _.displayName = "ResetPassword", t.default = a.default.connectStores([d.default], function() {
                return {
                    loginStatus: d.default.getLoginStatus(),
                    mfaTicket: d.default.getMFATicket(),
                    errors: d.default.getErrors()
                }
            })(_), e.exports = t.default
        },
        6886: function(e, t, n) {
            e.exports = n.p + "17192d3fe939ecf404e8cdd64b340469.svg"
        },
        6887: function(e, t, n) {
            e.exports = n.p + "1a06a76c7ea3e0facf0d6635e10c5898.svg"
        },
        6888: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o, i = (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, i) {
                    var r = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {}), t && r)
                        for (var s in r) void 0 === t[s] && (t[s] = r[s]);
                    else t || (t = r || {});
                    if (1 === a) t.children = i;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    return {
                        $$typeof: o,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }),
                r = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                a = T(n(3)),
                s = T(n(9)),
                l = T(n(6)),
                u = n(524),
                f = T(n(42)),
                c = n(5987),
                d = T(c),
                p = T(n(979)),
                h = T(n(40)),
                m = T(n(17)),
                v = T(n(934)),
                y = T(n(14)),
                g = T(n(945)),
                E = T(n(1017)),
                _ = n(0),
                I = T(n(5657)),
                S = T(n(516)),
                N = T(n(933));

            function T(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function A(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            a.default.initialize();
            var O = function(e) {
                function t() {
                    var n, o;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
                    return n = o = A(this, e.call.apply(e, [this].concat(r))), o.handleVerify = function(e) {
                        var t = (0, u.parse)(o.props.location.search);
                        v.default.verify(t.token, e)
                    }, o.handleLogin = function() {
                        (0, o.props.transitionTo)(_.Routes.LOGIN)
                    }, o.handleOpenApp = function() {
                        var e = o.props.verifyingUserId;
                        m.default.track(_.AnalyticEvents.VERIFY_ACCOUNT_APP_OPENED, {
                            verifying_user_id: e
                        }), o.openAppWithFingerprint()
                    }, A(o, n)
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), t.prototype.componentDidMount = function() {
                    this.handleVerify()
                }, t.prototype.openAppWithFingerprint = function() {
                    var e = this.props.fingerprint,
                        t = void 0;
                    t = "Android" === f.default.os.family || "iOS" === f.default.os.family ? _.DownloadLinks.DYNAMIC("verify_email", {
                        queryString: (0, u.stringify)({
                            fingerprint: e
                        })
                    }) : "discord://", E.default.launch(t, function(e) {
                        e || h.default.replaceWith(g.default.defaultRoute)
                    })
                }, t.prototype.renderVerifyCaptcha = function() {
                    return i(d.default, {}, void 0, i(c.Image, {
                        src: n(6324),
                        className: (0, s.default)(I.default.image, S.default.marginBottom20)
                    }), i(c.Title, {
                        className: S.default.marginBottom8
                    }, void 0, l.default.Messages.VERIFICATION_VERIFYING), i(c.Subtitle, {
                        className: S.default.marginBottom40
                    }, void 0, l.default.Messages.VERIFICATION_BODY_ALT), i("div", {
                        className: N.default.flexCenter
                    }, void 0, i(p.default, {
                        onVerify: this.handleVerify,
                        theme: p.default.Themes.DARK
                    })))
                }, t.prototype.renderVerifyFailed = function() {
                    return i(d.default, {}, void 0, i(c.Image, {
                        src: n(6887),
                        className: (0, s.default)(I.default.image, S.default.marginBottom20)
                    }), i(c.Title, {
                        className: S.default.marginBottom8
                    }, void 0, l.default.Messages.VERFICATION_EXPIRED), i(c.Subtitle, {
                        className: S.default.marginBottom40
                    }, void 0, l.default.Messages.AUTH_VERFICATION_EXPIRED_SUGGESTION), i(c.Button, {
                        onClick: this.handleLogin
                    }, void 0, l.default.Messages.LOGIN))
                }, t.prototype.renderVerifySucceeded = function() {
                    return i(d.default, {}, void 0, i(c.Image, {
                        src: n(6324),
                        className: (0, s.default)(I.default.image, S.default.marginBottom20)
                    }), i(c.Title, {
                        className: S.default.marginBottom40
                    }, void 0, l.default.Messages.VERIFICATION_VERIFIED), i(c.Button, {
                        onClick: this.handleOpenApp
                    }, void 0, l.default.Messages.VERIFICATION_OPEN_DISCORD))
                }, t.prototype.renderVerifying = function() {
                    return i(d.default, {}, void 0, i(c.Image, {
                        src: n(6886),
                        className: (0, s.default)(I.default.image, S.default.marginBottom20)
                    }), i(c.Title, {
                        className: S.default.marginBottom8
                    }, void 0, l.default.Messages.VERIFICATION_VERIFYING), i(c.Subtitle, {
                        className: S.default.marginBottom40
                    }, void 0, l.default.Messages.ACTION_MAY_TAKE_A_MOMENT), i(c.Button, {
                        submitting: !0,
                        color: c.Button.Colors.PRIMARY
                    }))
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.verifyErrors,
                        n = e.verifyFailed,
                        o = e.verifySucceeded;
                    return null != t && t.captcha_key ? this.renderVerifyCaptcha() : n ? this.renderVerifyFailed() : o ? this.renderVerifySucceeded() : this.renderVerifying()
                }, t
            }(r.PureComponent);
            O.displayName = "VerifyEmail", t.default = a.default.connectStores([y.default], function() {
                return {
                    verifyFailed: y.default.didVerifyFail(),
                    verifyErrors: y.default.getVerifyErrors(),
                    verifySucceeded: y.default.didVerifySucceed(),
                    fingerprint: y.default.getFingerprint(),
                    verifyingUserId: y.default.getVerifyingUserId()
                }
            })(O), e.exports = t.default
        },
        6889: function(e, t, n) {
            e.exports = n.p + "004dd8db75dd498bf03f6b0e7fcb51fd.svg"
        },
        6890: function(e, t, n) {
            e.exports = n.p + "5ed6422f4a60342227db5d2678ecf911.svg"
        },
        6891: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o, i = (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, i) {
                    var r = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {}), t && r)
                        for (var s in r) void 0 === t[s] && (t[s] = r[s]);
                    else t || (t = r || {});
                    if (1 === a) t.children = i;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    return {
                        $$typeof: o,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }),
                r = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                a = v(n(3)),
                s = v(n(6)),
                l = n(524),
                u = v(n(42)),
                f = n(5987),
                c = v(f),
                d = v(n(14)),
                p = v(n(934)),
                h = n(0),
                m = v(n(516));

            function v(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            a.default.initialize();
            var y = i(f.AuthSpinner, {
                    hideQuote: !0
                }),
                g = function(e) {
                    function t() {
                        return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t),
                            function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, e.apply(this, arguments))
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.componentDidMount = function() {
                        var e = (0, l.parse)(this.props.location.search);
                        p.default.authorizeIPAddress(e.token)
                    }, t.prototype.renderLoginButton = function() {
                        if ("Android" === u.default.os.family || "iOS" === u.default.os.family) return null;
                        var e = this.props.transitionTo;
                        return i(f.Button, {
                            onClick: function() {
                                return e(h.Routes.LOGIN)
                            }
                        }, void 0, s.default.Messages.LOGIN)
                    }, t.prototype.renderFailed = function() {
                        return i(c.default, {}, void 0, i("img", {
                            alt: "",
                            src: n(6890),
                            className: m.default.marginBottom20
                        }), i(f.Title, {
                            className: m.default.marginBottom8
                        }, void 0, s.default.Messages.AUTHORIZATION_EXPIRED), i(f.Subtitle, {
                            className: m.default.marginBottom40
                        }, void 0, s.default.Messages.AUTH_EXPIRED_SUGGESTION), this.renderLoginButton())
                    }, t.prototype.renderSucceeded = function() {
                        return i(c.default, {}, void 0, i("img", {
                            alt: "",
                            src: n(6889),
                            className: m.default.marginBottom20
                        }), i(f.Title, {
                            className: m.default.marginBottom8
                        }, void 0, s.default.Messages.IP_AUTHORIZATION_SUCCEEDED), i(f.Subtitle, {
                            className: m.default.marginBottom40
                        }, void 0, s.default.Messages.AUTH_IP_AUTH_SUCCEEDED_SUGGESTION), this.renderLoginButton())
                    }, t.prototype.renderDefault = function() {
                        return i(c.default, {}, void 0, y, i(f.Title, {}, void 0, s.default.Messages.AUTHORIZING))
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.verifyFailed,
                            n = e.verifySucceeded;
                        return t ? this.renderFailed() : n ? this.renderSucceeded() : this.renderDefault()
                    }, t
                }(r.PureComponent);
            g.displayName = "AuthorizeIPAddress", t.default = a.default.connectStores([d.default], function() {
                return {
                    verifyFailed: d.default.didVerifyFail(),
                    verifySucceeded: d.default.didVerifySucceed()
                }
            })(g), e.exports = t.default
        },
        6892: function(e, t, n) {
            e.exports = n.p + "acb452cda03a99894210f832308c055d.svg"
        },
        6893: function(e, t, n) {
            e.exports = n.p + "96191331272ece160a85126d54e49f3d.svg"
        },
        6894: function(e, t, n) {
            e.exports = n.p + "07c4931451dfa8c32fc8551b48a89536.svg"
        },
        6895: function(e, t, n) {
            "use strict";
            var o, i;
            t.__esModule = !0;
            var r, a = (r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, o) {
                    var i = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {}), t && i)
                        for (var s in i) void 0 === t[s] && (t[s] = i[s]);
                    else t || (t = i || {});
                    if (1 === a) t.children = o;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    return {
                        $$typeof: r,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }),
                s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                l = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(1)),
                u = w(n(3)),
                f = w(n(9)),
                c = n(5987),
                d = w(c),
                p = w(n(269)),
                h = w(n(518)),
                m = w(n(29)),
                v = w(n(71)),
                y = w(n(6036)),
                g = w(n(17)),
                E = w(n(274)),
                _ = w(n(14)),
                I = w(n(6008)),
                S = w(n(6)),
                N = w(n(5658)),
                T = w(n(1231)),
                A = w(n(516)),
                O = w(n(933)),
                b = n(0),
                R = w(n(5995)),
                M = w(n(968)),
                C = w(n(164));

            function w(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function L(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            u.default.initialize();
            var P = function(e) {
                function t() {
                    var n, o;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
                    return n = o = L(this, e.call.apply(e, [this].concat(r))), o.state = {}, o.handleOpenApp = function(e) {
                        e.preventDefault(), o.track(b.AnalyticEvents.INVITE_APP_OPENED, !0), o.openAppWithFingerprint()
                    }, L(o, n)
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), t.prototype.componentDidMount = function() {
                    g.default.track(b.AnalyticEvents.INVITE_VIEWED, {}, !0)
                }, t.prototype.track = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = this.props,
                        i = o.invite,
                        r = o.code,
                        a = this.state.username,
                        l = {
                            invite_code: r
                        };
                    t && (l.guild_id = i.guild ? i.guild.id : null, l.channel_id = i.channel ? i.channel.id : null, l.inviter_id = i.inviter ? i.inviter.id : null, l.has_username = null != a && a.length > 0), g.default.track(e, s({}, l, n))
                }, t.prototype.isValidInvite = function(e) {
                    return e.state !== b.InviteStates.EXPIRED
                }, t.prototype.openAppWithFingerprint = function() {
                    var e = this.props,
                        t = e.code,
                        n = e.invite,
                        o = e.fingerprint,
                        i = this.state.username;
                    E.default.openApp(this.isValidInvite(n) ? t : void 0, void 0, o, i)
                }, t.prototype.renderInvalid = function() {
                    return a(d.default, {}, void 0, a(c.Image, {
                        src: n(6894)
                    }), a(c.Title, {
                        className: (0, f.default)(A.default.marginTop20, A.default.marginBottom8, O.default.flexCenter)
                    }, void 0, S.default.Messages.DISCORD_DESC_SHORT), a(c.Subtitle, {
                        className: A.default.marginBottom40
                    }, void 0, S.default.Messages.DISCORD_DESC_LONG), a(h.default, {
                        className: N.default.card,
                        type: h.default.Types.CUSTOM
                    }, void 0, a("img", {
                        alt: "",
                        className: N.default.cardAccentLeft,
                        src: n(6893)
                    }), a("img", {
                        alt: "",
                        className: N.default.cardAccentRight,
                        src: n(6892)
                    }), a(m.default, {
                        className: N.default.cardContents,
                        direction: m.default.Direction.VERTICAL,
                        align: m.default.Align.STRETCH,
                        grow: 0
                    }, void 0, a(v.default, {
                        className: N.default.buttonTitle,
                        color: T.default.primary300,
                        size: v.default.Sizes.MEDIUM,
                        weight: v.default.Weights.MEDIUM
                    }, void 0, S.default.Messages.INVITE_INVALID_ERROR), a(c.Button, {
                        className: N.default.button,
                        onClick: this.handleOpenApp
                    }, void 0, S.default.Messages.INVITE_INVALID_CTA))))
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.invite,
                        n = this.state.username;
                    return this.isValidInvite(t) ? a(B, {
                        invite: t,
                        onClick: this.handleOpenApp,
                        username: n,
                        onUserNameChange: function(t) {
                            return e.setState({
                                username: t
                            })
                        }
                    }) : this.renderInvalid()
                }, t
            }(l.PureComponent);
            P.displayName = "InviteMobile";
            var D = function(e) {
                var t = e.invite,
                    n = e.onClick;
                return a(d.default, {}, void 0, a(y.default, {
                    invite: t
                }), a(c.Button, {
                    onClick: n,
                    className: A.default.marginTop20
                }, void 0, S.default.Messages.INSTANT_INVITE_ACCEPT))
            };
            D.displayName = "ValidInvite";
            var x = function(e) {
                var t = e.invite,
                    n = e.onClick,
                    o = e.username,
                    i = e.onUserNameChange;
                return a(d.default, {}, void 0, a(y.default, {
                    invite: t
                }), a("div", {
                    className: N.default.text
                }, void 0, a(p.default, {
                    title: S.default.Messages.FORM_LABEL_NEW_USER,
                    className: A.default.marginTop20
                }, void 0, a(C.default, {
                    label: S.default.Messages.FORM_LABEL_USERNAME,
                    placeholder: S.default.Messages.FORM_PLACEHOLDER_USERNAME,
                    onChange: i,
                    autoComplete: "off",
                    spellCheck: "false",
                    value: o,
                    autoFocus: !0
                }), a(c.Button, {
                    onClick: n,
                    className: A.default.marginTop8
                }, void 0, S.default.Messages.INSTANT_INVITE_JOIN)), a(p.default, {
                    title: S.default.Messages.ALREADY_HAVE_ACCOUNT,
                    className: A.default.marginTop20
                }, void 0, a(c.Button, {
                    onClick: n,
                    className: (0, f.default)(A.default.marginTop8),
                    color: c.Button.Colors.GREEN
                }, void 0, S.default.Messages.INSTANT_INVITE_ACCEPT))))
            };
            x.displayName = "ValidInviteUsername";
            var B = (0, R.default)((0, M.default)(b.Experiments.MOBILE_INVITE, "Mobile Invite Experiment", ["Allow mobile invite landings to enter a username", "Control: No username UI shown", "Treatment 1: Username required"]), ((i = {})[b.ExperimentTypes.NONE] = function(e) {
                return l.createElement(D, e)
            }, i[b.ExperimentTypes.USER] = ((o = {})[b.ExperimentBuckets.NOT_ELIGIBLE] = function(e) {
                return l.createElement(D, e)
            }, o[b.ExperimentBuckets.CONTROL] = function(e) {
                return l.createElement(D, e)
            }, o[b.ExperimentBuckets.TREATMENT_1] = function(e) {
                return l.createElement(x, e)
            }, o), i));
            t.default = u.default.connectStores([I.default, _.default], function(e) {
                var t = e.match.params.invitecode;
                return {
                    code: t,
                    invite: I.default.getInvite(t) || {},
                    fingerprint: _.default.getFingerprint()
                }
            })(P), e.exports = t.default
        },
        6896: function(e, t, n) {
            e.exports = n.p + "e0c782560fd96acd7f01fda1f8c6ff24.svg"
        },
        6897: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o = n(413);
            Object.defineProperty(t, "extractId", {
                enumerable: !0,
                get: function() {
                    return o.extractId
                }
            })
        },
        6898: function(e, t, n) {
            "use strict";
            t.__esModule = !0;
            var o, i = (o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, function(e, t, n, i) {
                    var r = e && e.defaultProps,
                        a = arguments.length - 3;
                    if (t || 0 === a || (t = {}), t && r)
                        for (var s in r) void 0 === t[s] && (t[s] = r[s]);
                    else t || (t = r || {});
                    if (1 === a) t.children = i;
                    else if (a > 1) {
                        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 3];
                        t.children = l
                    }
                    return {
                        $$typeof: o,
                        type: e,
                        key: void 0 === n ? null : "" + n,
                        ref: null,
                        props: t,
                        _owner: null
                    }
                }),
                r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                a = O(n(1)),
                s = A(n(3)),
                l = A(n(24)),
                u = A(n(9)),
                f = A(n(6)),
                c = A(n(6036)),
                d = A(n(6325)),
                p = A(n(6327)),
                h = n(5987),
                m = A(h),
                v = A(n(14)),
                y = A(n(6008)),
                g = A(n(945)),
                E = A(n(274)),
                _ = A(n(17)),
                I = O(n(6897)),
                S = A(n(517)),
                N = n(0),
                T = A(n(516));

            function A(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function O(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }

            function b(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            s.default.initialize();
            var R = "Accept Invite Page",
                M = "register",
                C = "login",
                w = i(h.AuthSpinner, {}),
                L = function(e) {
                    function t() {
                        var n, o;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
                        return n = o = b(this, e.call.apply(e, [this].concat(r))), o.getAcceptInviteContext = function(e) {
                            return E.default.getInviteContext(e, o.props.invite)
                        }, o.handleContinue = function() {
                            var e = o.props,
                                t = e.invite,
                                n = e.transitionTo;
                            if (null != t.channel) {
                                var i = null != t.guild ? t.guild.id : N.ME;
                                E.default.transitionToInviteChannel(i, t.channel.id, t.channel.type, n)
                            }
                        }, o.handleAccept = function() {
                            var e = o.props.invite,
                                t = o.getCode();
                            E.default.acceptInvite(t, o.getAcceptInviteContext(R), function() {
                                null != e.channel && E.default.openApp(t, e.channel.id)
                            })
                        }, b(o, n)
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.componentDidMount = function() {
                        _.default.track(N.AnalyticEvents.INVITE_VIEWED, {}, !0)
                    }, t.prototype.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = t.invite,
                            o = t.authenticated,
                            i = t.transitionTo,
                            r = this.getCode();
                        if (r !== this.getCode(e)) E.default.resolveInvite(r, R);
                        else if (n.state === N.InviteStates.APP_NOT_OPENED) this.handleContinue();
                        else if (this.getMode() === C && o !== e.authenticated && o) {
                            var a = v.default.getFingerprint();
                            if (null != a) {
                                var s = I.extractId(a);
                                this.track(N.AnalyticEvents.INVITE_LOGIN_SUCCESSFUL, !0, {
                                    prev_user_id: s
                                })
                            }
                            E.default.acceptInvite(r, this.getAcceptInviteContext(R), this.handleContinue)
                        }
                        if (n.nativeAppState !== e.invite.nativeAppState && n.nativeAppState === N.InviteNativeAppStates.OPEN && this.track(N.AnalyticEvents.INVITE_APP_INVOKED, !1), this.getMode() === M && o && !e.authenticated) {
                            var u = n.guild,
                                f = n.channel;
                            if (null != f) {
                                var c = null != u ? u.id : N.ME;
                                l.default.set("homepageNUFComplete", !0), i(N.Routes.WELCOME(c, f.id, f.type))
                            }
                        }
                    }, t.prototype.getCode = function() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props).match.params.invitecode
                    }, t.prototype.getMode = function() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props).login ? C : M
                    }, t.prototype.track = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = this.props.invite,
                            i = {
                                invite_code: this.getCode()
                            };
                        t && (i.guild_id = o.guild ? o.guild.id : null, i.channel_id = o.channel ? o.channel.id : null, i.inviter_id = o.inviter ? o.inviter.id : null), _.default.track(e, r({}, i, n))
                    }, t.prototype.renderSpinner = function(e) {
                        return i(m.default, {}, void 0, i(h.Title, {}, void 0, e), w)
                    }, t.prototype.renderExpiredInvite = function() {
                        var e = this.props,
                            t = e.defaultRoute,
                            o = e.transitionTo;
                        return i(m.default, {}, void 0, i(h.Image, {
                            src: n(6896),
                            className: T.default.marginBottom8
                        }), i(h.Title, {
                            className: (0, u.default)(T.default.marginTop8, T.default.marginBottom8)
                        }, void 0, f.default.Messages.AUTH_INVALID_INVITE_TITLE), i(h.Subtitle, {}, void 0, f.default.Messages.AUTH_INVALID_INVITE_BODY), i(h.Button, {
                            className: (0, u.default)(T.default.marginTop40, T.default.marginBottom8),
                            onClick: function() {
                                return o(t)
                            }
                        }, void 0, f.default.Messages.CONTINUE_TO_WEBAPP), i(h.Button, {
                            onClick: function() {
                                return window.open(S.default.getArticleURL(N.HelpdeskArticles.INVALID_INVITES), "_blank")
                            },
                            look: h.Button.Looks.LINK
                        }, void 0, f.default.Messages.AUTH_INVALID_INVITE_TIP))
                    }, t.prototype.renderAppOpened = function() {
                        return i(m.default, {}, void 0, i(h.Title, {
                            className: T.default.marginBottom8
                        }, void 0, f.default.Messages.APP_OPENED_TITLE), i(h.Subtitle, {}, void 0, f.default.Messages.APP_OPENED_BODY), i(h.Button, {
                            className: T.default.marginTop40,
                            onClick: this.handleContinue
                        }, void 0, f.default.Messages.CONTINUE_TO_WEBAPP))
                    }, t.prototype.renderAuthenticated = function() {
                        var e = this.props.invite;
                        return i(m.default, {}, void 0, i(c.default, {
                            invite: e
                        }), i(h.Button, {
                            className: T.default.marginTop40,
                            onClick: this.handleAccept
                        }, void 0, f.default.Messages.INSTANT_INVITE_ACCEPT))
                    }, t.prototype.renderContinue = function() {
                        var e = this.props,
                            t = e.defaultRoute,
                            n = e.transitionTo;
                        return i(m.default, {}, void 0, i(h.Title, {}, void 0, f.default.Messages.APP_NOT_OPENED), i(h.Button, {
                            className: T.default.marginTop40,
                            onClick: function() {
                                return n(t)
                            }
                        }, void 0, f.default.Messages.CONTINUE_TO_WEBAPP))
                    }, t.prototype.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.invite,
                            o = t.authenticated,
                            r = t.transitionTo,
                            a = t.location;
                        if (n.nativeAppState === N.InviteNativeAppStates.OPEN) return this.renderAppOpened();
                        switch (n.state) {
                            case N.InviteStates.APP_OPENED:
                                return this.renderAppOpened();
                            case N.InviteStates.APP_NOT_OPENED:
                                return this.renderContinue();
                            case N.InviteStates.APP_OPENING:
                                return this.renderSpinner(f.default.Messages.APP_OPENING);
                            case N.InviteStates.RESOLVING:
                            case N.InviteStates.RESOLVED:
                                return o ? this.renderAuthenticated() : this.getMode() === C ? i(p.default, {
                                    invite: n,
                                    transitionTo: r,
                                    location: a
                                }) : i(d.default, {
                                    invite: n,
                                    onLoginStart: function() {
                                        return e.track(N.AnalyticEvents.INVITE_LOGIN, !0)
                                    },
                                    location: a,
                                    transitionTo: r
                                });
                            case N.InviteStates.ACCEPTING:
                                return this.renderSpinner(f.default.Messages.INSTANT_INVITE_ACCEPTING);
                            case N.InviteStates.EXPIRED:
                                return this.renderExpiredInvite();
                            case N.InviteStates.ACCEPTED:
                            default:
                                return null
                        }
                    }, t
                }(a.PureComponent);
            L.displayName = "Invite", t.default = s.default.connectStores([y.default, g.default, v.default], function(e) {
                return {
                    invite: y.default.getInvite(e.match.params.invitecode) || {},
                    authenticated: v.default.isAuthenticated(),
                    defaultRoute: g.default.defaultRoute
                }
            })(L), e.exports = t.default
        }
    }
]);
//# sourceMappingURL=fdfd220fa54f0fb61120.js.map