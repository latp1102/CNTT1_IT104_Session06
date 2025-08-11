var Vehicle = /** @class */ (function () {
    function Vehicle(speed) {
        this.speed = speed;
    }
    Vehicle.prototype.speedUp = function () {
        this.speed += 10;
        console.log("t\u0103ng t\u1ED1c: ".concat(this.speed));
    };
    Vehicle.prototype.slowUp = function () {
        if (this.speed >= 6) {
            this.speed -= 6;
        }
        console.log("gi\u1EA3m t\u1ED1c: ".concat(this.speed));
    };
    Vehicle.prototype.stop = function () {
        this.speed = 0;
        console.log("d\u1EEBng l\u1EA1i: ".concat(this.speed));
    };
    Vehicle.prototype.getSpeed = function () {
        return this.speed;
    };
    return Vehicle;
}());
var vehicle = new Vehicle(0);
vehicle.speedUp();
vehicle.speedUp();
vehicle.slowUp();
vehicle.stop();
