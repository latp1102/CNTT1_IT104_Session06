// method có phần thân, khai báo đc trong hoặc ngoài abstract class, ko bắt buộc override
// abstract method ko có phần thân, khai báo bên trong abstract class, bắt buộc có override
abstract class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat(): void {
        console.log(`${this.name}`);
    }
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound(): void {
        console.log(`${this.name} gâu gâu`);
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log(`${this.name} meo meo`);
    }
}
const dog = new Dog("lu");
dog.eat();
dog.makeSound();

const cat = new Cat("miu");
cat.eat();
cat.makeSound();
