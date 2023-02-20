abstract class ValidationHandler {
    private nextHandler: ValidationHandler;

    setHandler(handler: ValidationHandler) {
        this.nextHandler = handler;
    }

    protected abstract execValidation(input: string): boolean;
    protected abstract getErrorMessage(): void;

    validate(input: string): boolean {
        const result = this.execValidation(input);
        if (!result) {
            this.getErrorMessage();
            return false;
        } else if (this.nextHandler) {
            return this.nextHandler.validate(input);
        } else {
            return true;
        }
    }
}

class NotNullValidationHandler extends ValidationHandler {
    protected execValidation(input: string): boolean {
        let result = false;
        if (input) {
            result = true;
        }
        console.log(`Result of NotNullValidation: ${result}`);
        return result;
    }

    protected getErrorMessage() {
        console.log("D Nothing entered");
    }
}

class AlphabetValidationHandler extends ValidationHandler {
    protected execValidation(input: string): boolean {
        const reg = new RegExp(/^[a-zA-Z]+$/);
        const result = reg.test(input);
        console.log(`AlphabetValidation Results: ${result}`);
        return result;
    }

    protected getErrorMessage() {
        console.log("please use singleByte alphabetical characters");
    }
}

class MinLengthValidationHandler extends ValidationHandler {
    protected execValidation(input: string): boolean {
        const result = input.length >= 8;
        console.log(`Result of dMinLengthValidation: ${result}`);
        return result;
    }

    protected getErrorMessage() {
        console.log("Please enter at least 8 characters");
    }
}

function run() {
    const notNullHandler = new NotNullValidationHandler();
    const alphabetHandler = new AlphabetValidationHandler();
    const minLengthHandler = new MinLengthValidationHandler();

    alphabetHandler.setHandler(minLengthHandler);
    notNullHandler.setHandler(alphabetHandler);

    const result = notNullHandler.validate("Hello World");
    if (result) {
        console.log("All validations succeeded");
    }
}

run();