export class UnhandledException {
	constructor(
        private readonly className: string, 
        private readonly func: string, 
        private readonly error: any, 
        private readonly date = new Date()
    ) {}
}
