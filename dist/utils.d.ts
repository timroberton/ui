declare type ErrorBoundaryReturn<T> = {
    error: {
        msg: string;
    };
    data: null;
} | {
    error: null;
    data: T;
};
export declare function errorBoundary<T>(func: () => Promise<T>): Promise<ErrorBoundaryReturn<T>>;
export {};
//# sourceMappingURL=utils.d.ts.map