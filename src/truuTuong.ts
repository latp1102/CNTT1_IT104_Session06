abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log("dang di chuyen...");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("gau gau");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("cat cat");
    }
}

const animal: Animal[] = [new Dog(), new Cat()];

animal.forEach((animal) => {
    animal.makeSound();
    animal.move();
});

