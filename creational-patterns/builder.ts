class Computer {
    type: string;
    cpu: string;
    ram: number;
}

interface ComputerBuilder {
    addCpu(cpu: string): void;
    addRam(ram: number): void;
}

class DesktopBuilder implements ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
        this.computer.type = "Desktop";
    }

    addCpu(cpu: string) {
        this.computer.cpu = cpu;
    }

    addRam(ram: number) {
        this.computer.ram = ram;
    }

    getResult(): Computer {
        return this.computer;
    }
}

class LaptopBuilder implements ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
        this.computer.type = "Laptop";
    }

    addCpu(cpu: string) {
        this.computer.cpu = cpu;
    }

    addRam(ram: number) {
        this.computer.ram = ram;
    }

    getResult(): Computer {
        return this.computer;
    }
}

class Director {
    constructor(private builder: ComputerBuilder) {}

    construct() {
        this.builder.addCpu("Core i5");
        this.builder.addRam(16);
    }

    highSpecConstruct() {
        this.builder.addCpu("Core i9");
        this.builder.addRam(64);
    }
}