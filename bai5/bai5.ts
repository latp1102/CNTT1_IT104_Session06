interface ChangeSpeed {
    speedUp(): void;
    slowUp(): void;
    stop(): void;
}

class Vehicle implements ChangeSpeed {
    private speed: number;
    constructor(speed: number) {
        this.speed = speed;
    }
    speedUp(): void {
        this.speed += 10;
        console.log(`tăng tốc: ${this.speed}`);
    }
    slowUp(): void {
        if (this.speed >= 6) {
            this.speed -= 6;
        }
        console.log(`giảm tốc: ${this.speed}`);
    }
    stop(): void {
        this.speed = 0;
        console.log(`dừng lại: ${this.speed}`);
    }
    getSpeed(): number {
        return this.speed;
    }
}
const vehicle = new Vehicle(0);
vehicle.speedUp();
vehicle.speedUp();
vehicle.slowUp();
vehicle.stop();