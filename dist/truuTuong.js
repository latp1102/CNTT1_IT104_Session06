"use strict";
class Animal {
    move() {
        console.log("dang di chuyen...");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("gau gau");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("cat cat");
    }
}
const animal = [new Dog(), new Cat()];
animal.forEach((animal) => {
    animal.makeSound();
    animal.move();
});
