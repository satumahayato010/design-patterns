abstract class CreditCard {
    constructor(public owner: string) {}

    getOwner(): string {
        return this.owner
    }

    abstract getCardType(): string;
    abstract getAnnualCharge(): number;
}

class Platinum extends CreditCard {
    getCardType(): string {
        return "Platinum";
    }

    getAnnualCharge(): number {
        return 30000;
    }
}

class Gold extends CreditCard {
    getCardType(): string {
        return "Gold";
    }

    getAnnualCharge(): number {
        return 10000;
    }
}

abstract class CreditCardFactory {
    abstract createCreditCard(owner: string): CreditCard;
    abstract registerCreditCard(creditCard: CreditCard): void;

    create(owner: string): CreditCard {
        const creditCard = this.createCreditCard(owner);
        this.registerCreditCard(creditCard);
        return creditCard;
    }
}

const creditCardDB = [];

class PlatinumCreditCardFactory extends CreditCardFactory {
    createCreditCard(owner: string): CreditCard {
        return new Platinum(owner);
    }

    registerCreditCard(creditCard: CreditCard) {
        creditCardDB.push(creditCard);
    }
}

class GoldCreditCardFactory extends CreditCardFactory {
    createCreditCard(owner: string): CreditCard {
        return new Gold(owner);
    }

    registerCreditCard(creditCard: CreditCard) {
        creditCardDB.push(creditCard);
    }
}
