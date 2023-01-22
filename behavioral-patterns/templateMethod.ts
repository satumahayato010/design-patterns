abstract class AbstractClass {

    public templateMethod(): void {
        this.baseOperation1();
        this.requiredOperations1();
        this.baseOperation2();
        this.requiredOperation2();
        this.baseOperation3();
    }

    protected baseOperation1(): void {
        console.log("AbstractClassのコメント:仕事の大半は自分がやっている")
    }

    protected baseOperation2(): void {
        console.log("AbstractClassのコメント:しかし、しかし、サブクラスでいくつかの操作をオーバーライドするようにしました。")
    }

    protected baseOperation3(): void {
        console.log("AbstractClassのコメント:でも、とにかく仕事の大半は私がやっています")
    }

    protected abstract requiredOperations1(): void;

    protected abstract requiredOperation2(): void;
}

class ConcreteClass1 extends AbstractClass {
    protected requiredOperations1(): void {
        console.log("ConcreteClass1 のコメント： Operation1 を実装した。")
    }

    protected requiredOperation2(): void {
        console.log("ConcreteClass1 のコメント： Operation2 を実装した。")
    }
}

class ConcreteClass2 extends AbstractClass {
    protected requiredOperations1(): void {
        console.log("ConcreteClass2 のコメント： Operation1 を実装した。")
    }

    protected requiredOperation2(): void {
        console.log("ConcreteClass2 のコメント： Operation2 を実装した。")
    }
}

function clientCode(abstractClass: AbstractClass) {
    abstractClass.templateMethod();
}

clientCode(new ConcreteClass1());
clientCode(new ConcreteClass2());
