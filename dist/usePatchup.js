import { useContext } from "react";
import { AppContext } from "./AppContext";
const usePatchup = (key) => {
    const state = useContext(AppContext);
    const dispatch = state['patchup'];
    const build = (key, payload) => {
        Object.keys(payload).map((q) => {
            if (key[q] !== payload[q]) {
                key[q] = payload[q];
            }
        });
        return Object.assign(Object.assign({}, key), payload);
    };
    if (state[key]) {
        return (payload = {}) => {
            dispatch({
                action: key,
                payload: {
                    [key]: build(state[key], payload)
                }
            });
        };
    }
    return () => { };
};
export default usePatchup;
