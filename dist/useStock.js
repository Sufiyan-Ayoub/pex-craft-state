import { __rest } from "tslib";
import { useContext } from "react";
import { AppContext } from "./AppContext";
const useStock = callback => {
    const _a = useContext(AppContext), { patchup } = _a, context = __rest(_a, ["patchup"]);
    return callback(context);
};
export default useStock;
