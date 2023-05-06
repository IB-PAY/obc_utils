export declare class loggingOptions {
    TID?: string;
    class?: string;
    function?: string;
    path?: string;
    input?: any;
    stack?: any;
    date?: string;
}
export declare class InfoRequestMeta {
    TID: string;
    date?: Date;
}
export declare function Info<T>(message: string, meta?: Partial<InfoRequestMeta & T>): void;
export declare class DebugRequestMeta {
    TID: string;
    date?: string;
    tracer: any;
}
export declare function Debug<T>(message: string, debugValues: any, meta?: Partial<DebugRequestMeta & T>): void;
export declare class ErrorRequestMeta {
    TID: string;
    className?: string;
    func?: string;
    date?: Date;
}
export declare function Error<T>(message: string, errorOptions: Partial<loggingOptions & {
    error: any;
}>, meta?: Partial<ErrorRequestMeta & T>): void;
