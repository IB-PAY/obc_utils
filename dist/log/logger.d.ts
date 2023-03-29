export declare class InfoRequestMeta {
    TID: string;
    date?: Date;
}
export declare function Info<T>(message: string, meta?: Partial<InfoRequestMeta & T>): void;
export declare class DebugRequestMeta {
    TID: string;
    date?: Date;
}
export declare function Debug<T>(message: string, data: any, meta?: Partial<DebugRequestMeta & T>): void;
export declare class ErrorRequestMeta {
    TID: string;
    className?: string;
    func?: string;
    date?: Date;
}
export declare function Error<T>(message: string, errorObject: ErrorConstructor | any, meta?: Partial<ErrorRequestMeta & T>): void;
