export declare class CustomError extends Error {
    constructor({ message, ...args }: {
        [x: string]: any;
        message: any;
    });
}
