export declare class RequestMeta {
    TID: string;
}
export declare function Info(message: string, meta?: RequestMeta): void;
export declare function Debug(message: string, data: any, meta?: RequestMeta): void;
export declare function Error(message: string, errorObject: any, meta?: RequestMeta): void;
