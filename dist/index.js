"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStock = exports.useDispatch = exports.Provider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var AppContext = (0, react_1.createContext)({});
var Provider = function (_a) {
    var children = _a.children, initialState = _a.initialState;
    var mounted = true;
    var build = (0, react_1.useMemo)(function () { return (__assign({}, initialState)); }, [initialState]);
    var Reducer = function (state, action) { return (__assign(__assign({}, state), action.payload)); };
    var _b = (0, react_1.useReducer)(Reducer, build), _state = _b[0], patcher = _b[1];
    var patchup = (0, react_1.useCallback)(function (q) {
        if (mounted)
            patcher(__assign({}, q));
    }, [patcher]);
    var state = (0, react_1.useMemo)(function () { return (__assign(__assign({}, _state), { patchup: patchup })); }, [_state]);
    (0, react_1.useEffect)(function () {
        mounted = true;
        return function () {
            mounted = false;
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)(AppContext.Provider, { value: state, children: children }));
};
exports.Provider = Provider;
var useDispatch = function (key) {
    var state = (0, react_1.useContext)(AppContext);
    var dispatch = state['patchup'];
    var build = function (key, payload) {
        Object.keys(payload).map(function (q) {
            if (key[q] !== payload[q]) {
                key[q] = payload[q];
            }
        });
        return __assign(__assign({}, key), payload);
    };
    if (state[key]) {
        return function (payload) {
            var _a;
            if (payload === void 0) { payload = {}; }
            dispatch({
                action: key,
                payload: (_a = {},
                    _a[key] = build(state[key], payload),
                    _a)
            });
        };
    }
    return function () { };
};
exports.useDispatch = useDispatch;
var useStock = function (callback) {
    var _a = (0, react_1.useContext)(AppContext), patchup = _a.patchup, context = __rest(_a, ["patchup"]);
    return callback(context);
};
exports.useStock = useStock;
