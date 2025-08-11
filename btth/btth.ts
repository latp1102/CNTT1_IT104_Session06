interface IAnimal {
    name: string;
    age: number;
    category: string;
    foodType: string;
    sound(): string;
    getDetails(): string;
    move(): void;
    feed(): void;
}
abstract class Animal implements IAnimal{
    name: string;
    category: string;
    age: number;
    foodType: string;
    constructor(name: string, category: string, age: number, foodType: string){
        this.name = name;
        this.category = category;
        this.age = age;
        this.foodType = foodType;
    }
    getDetails(): string {
    return `name ${this.name}, category ${this.category}, age ${this.age}, foodType ${ this.foodType}`
    }
    abstract sound(): string;
    abstract move(): void;
    abstract feed(): void;
}

class Mammal extends Animal {
    furcolor: string;
    getFurColor(){
        return this.furcolor;
    }
    setFurColor(){
        return this.furcolor;
    }
    constructor(name: string, age: number, furColor: string) {
        super(name, "Mammal", age, "Mammal foodType");
        this.furcolor = furColor;
    }
    sound(): string {
        throw new Error("Method not implemented.");
    }
    feed(): void {
        throw new Error("Method not implemented.");
    }
    move(): void{
        console.log("kj");
        
    }
}

class Bird extends Animal {
    wingSapm: number;
    constructor(name: string, age: number, wingSapm: string) {
        super(name,"Bird",age, "BirdType");
        this.wingSapm = this.wingSapm;
    }
    sound(): string {
        throw new Error("Method not implemented.");
    }
    feed(): void {
        throw new Error("Method not implemented.");
    }
    move(): void {
        console.log("kjo");
        
    }
}

class Reptile extends Animal {
    venomous: string;
    constructor(name: string, age: number, venomous: string) {
        super(name, "Reptile",age, "ReptileType");
        this.venomous = venomous;
    }
    sound(): string {
        throw new Error("Method not implemented.");
    }
    feed(): void {
        throw new Error("Method not implemented.");
    }
    move(): void {
        console.log("di");
        
    }
}

const animal: Animal[] = [
    new Mammal("lion", 10, "white"),
    new Bird("chicken", 100, "1"),
    new Reptile("Snake", 1, true),
];
