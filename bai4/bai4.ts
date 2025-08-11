interface Geometry {
    calculateArea: number;
    calculatePerimeter: number;
}

class Circle implements Geometry {
    private radius: number;
    constructor(radius: number){
        this.radius = radius;
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Geometry {
    private width: number;
    private height: number;
    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }
    calculateArea(): number{
        return this.width * this.height;
    }
    calculatePerimeter(): number{
        return 2* (this.width + this.height);
    }
}
const circle = new Circle(2);
console.log("diện tích", circle.calculateArea());
console.log("chu vi", circle.calculatePerimeter());

const rectangle = new Rectangle(2,3);
console.log("diện tich ", rectangle.calculateArea());
console.log("chu vi ", rectangle.calculatePerimeter());



