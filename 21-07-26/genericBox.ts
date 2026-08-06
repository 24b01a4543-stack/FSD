class Box<T> {
    boxValue: T;

    constructor(boxValue: T) {
        this.boxValue = boxValue;
    }

    displayValue(): void {
        console.log("Stored Value: " + this.boxValue);
    }
}

let numberBox = new Box<number>(100);
numberBox.displayValue();

let stringBox = new Box<string>("Hasmitha");
stringBox.displayValue();

let booleanBox = new Box<boolean>(true);
booleanBox.displayValue();