abstract class Shape {
    name: string;
    constructor (name: string){
        this.name = name;
    }
    getName(): string{
        return this.name;
    }
    abstract getSize();
}

class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(name: string, width: number, height: number){
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize(): number {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle("hv", 4,4);
console.log("diện tích tên hình: ",rectangle.getSize());
rectangle.getSize();
