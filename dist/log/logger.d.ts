export declare class loggingOptions {
    TID?: string;
    class?: string;
    function?: string;
    path?: string;
    input?: any;
    stack?: any;
    date?: string;
}
export declare class RequestMeta {
    TID: string;
    date?: string;
    tracer?: any;
}
export declare function Info<T>(message: string, meta?: Partial<RequestMeta & T>): void;
export declare function Debug<T>(message: string, debugValues: any, meta?: Partial<RequestMeta & T>): void;
export declare function Error<T>(message: string, errorOptions: Partial<loggingOptions & {
    error: any;
}>, meta?: Partial<RequestMeta & T>): void;
