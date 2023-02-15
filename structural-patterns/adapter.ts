interface Target {
    getCsvData(): void;
}

class NewLibrary {
    getJsonData() {}
}


class JsonToCsvAdapter implements Target {
    constructor(private adaptee: NewLibrary) {}

    getCsvData() {}
}
