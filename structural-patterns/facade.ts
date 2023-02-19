class Product {
    getProduct(name: string) {
        console.log(`${name} Retrieved from`)
    }
}

class Payment {
    makePayment(name: string) {
        console.log(`${name} Payment has been made for the`)
    }
}

class Invoice {
    sendInvoice(name: string) {
        console.log(`${name} Invoice has been sent for`)
    }
}

class Order {
    placeOrder(name: string) {
        console.log('Start Order')

        const product = new Product();
        product.getProduct(name);

        const payment = new Payment();
        payment.makePayment(name);

        const invoice = new Invoice();
        invoice.sendInvoice(name);

        console.log('Order Successfully accepted')
    }
}

function main() {
    const order = new Order();
    const name = 'clean code';
    order.placeOrder(name);
}

main();