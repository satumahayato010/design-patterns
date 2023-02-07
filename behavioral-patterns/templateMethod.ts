abstract class TestTemplate {
    test() {
        this.setup();
        this.execute();
        this.teardown();
    }

    abstract setup(): void;
    abstract execute(): void;

    teardown() {
        console.log("teardown")
    }
}

class ItemServiceTest extends TestTemplate {
    setup() {
       console.log("setup: ItemServiceTest")
    }

    execute() {
        console.log("execute: ItemServiceTest")
    }
}

class UserServiceTest extends TestTemplate {
    setup() {
        console.log("setup: UserServiceTest")
    }

    execute() {
        console.log("execute: UserServiceTest")
    }
}

function client(testTemplate: TestTemplate) {
    testTemplate.test();
}

const itemTest = new ItemServiceTest();
const userTest = new UserServiceTest();

client(itemTest);
console.log("####################")
client(userTest);

export {}