interface Button {
    press(): void;
}

interface Checkbox {
    switch(): void;
}

interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

class WindowsButton implements Button {
    press() {
        console.log("Button for Windows has been pressed");
    }
}

class WindowsCheckbox implements Checkbox {
    switch() {
        console.log("Windows checkboxes have been toggled");
    }
}

class WindowsGUIFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton();
    }
    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

class MacButton implements Button {
    press() {
        console.log("The Button Mac has been pressed");
    }
}

class MacCheckbox implements Checkbox {
    switch() {
        console.log("The checkbox for Mac has been toggled");
    }
}

class MacGUIFactory implements GUIFactory {
    createButton(): Button {
        return new MacButton();
    }
    createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}

function run(factory: GUIFactory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();
    button.press();
    checkbox.switch();
}

run(new WindowsGUIFactory());
run(new MacGUIFactory());