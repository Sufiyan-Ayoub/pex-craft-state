import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, useReducer, useCallback, useEffect } from "react";
import { AppContext } from "./AppContext";
const ContextProvider = ({ children, initialState }) => {
    let mounted = true;
    const build = useMemo(() => (Object.assign({}, initialState)), [initialState]);
    const Reducer = (state, action) => (Object.assign(Object.assign({}, state), action.payload));
    const [_state, patcher] = useReducer(Reducer, build);
    const patchup = useCallback((q) => {
        if (mounted)
            patcher(Object.assign({}, q));
    }, [patcher]);
    const state = useMemo(() => (Object.assign(Object.assign({}, _state), { patchup })), [_state]);
    useEffect(() => {
        mounted = true;
        return () => {
            mounted = false;
        };
    }, []);
    return (_jsx(AppContext.Provider, { value: state, children: children }));
};
export default ContextProvider;
