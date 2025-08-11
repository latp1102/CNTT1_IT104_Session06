"use strict";
class Rikkei {
    getInfo() {
        console.log(`day là hinh ${this.getName()} có diện tích ${this.getArea()}`);
    }
}
class Square extends Rikkei {
    constructor(side) {
        super();
        this.side = side;
    }
    getName() {
        returnn;
        "Hinh vuong";
    }
    getArea() {
        return Math.pow(this.side, 2);
    }
}
class Triangle extends Rikkei {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getName() {
        returnn;
        "Hinh cn";
    }
    getArea() {
        return Math.pow(this.side, 2);
    }
}
const squaret = [new Square(5), new Triangle(2, 5)];
squaret.forEach((squaret) => {
    squaret.getInfo();
});
