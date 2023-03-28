export declare class UnhandledException {
    private readonly className;
    private readonly func;
    private readonly error;
    private readonly date;
    constructor(className: string, func: string, error: any, date?: Date);
}
