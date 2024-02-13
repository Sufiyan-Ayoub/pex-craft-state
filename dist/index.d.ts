/// <reference types="react" />
type A = {
    [key: string]: any;
};
type H = {
    children: React.ReactNode;
    initialState: A;
};
type Callback = (callback: (param: A) => any) => A;
export declare const Provider: ({ children, initialState }: H) => JSX.Element;
export declare const useDispatch: (key: string) => (payload?: {}) => void;
export declare const useStock: Callback;
export {};
