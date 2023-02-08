class Logger {
    private static instance: Logger;

    static getInstance() {
        if (!this.instance) {
            this.instance = new Logger();
        }
        return this.instance
    }

    output(content: string) {
        const now = new Date();
        console.log(`${now.toLocaleString('ja-JP')}: ${content}`)
    }
};

class Test {};

function main() {
    const test1 = new Test();
    const test2 = new Test();
    console.log('TestClass:', test1 === test2);

    const logger1 = Logger.getInstance();
    const logger2 = Logger.getInstance();
    console.log('LoggerClass:', logger1 === logger2);
}

main();