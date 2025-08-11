var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Job = /** @class */ (function () {
    function Job(type) {
        this.type = type;
    }
    Job.prototype.printType = function () {
        console.log("type: ".concat(this.type));
    };
    return Job;
}());
var Partime = /** @class */ (function (_super) {
    __extends(Partime, _super);
    function Partime(type, workingHour) {
        var _this = _super.call(this, type) || this;
        _this.workingHour = workingHour;
        return _this;
    }
    Partime.prototype.calculateSalary = function () {
        return 30000 * this.workingHour;
    };
    return Partime;
}(Job));
var FulltimeJob = /** @class */ (function (_super) {
    __extends(FulltimeJob, _super);
    function FulltimeJob(type) {
        var _this = _super.call(this, type) || this;
        _this.type = type;
        return _this;
    }
    FulltimeJob.prototype.calculateSalary = function () {
        return 10000000;
    };
    return FulltimeJob;
}(Job));
var partime = new Partime("partime", 40);
var fulltime = new FulltimeJob("fulltime");
console.log("tien partime: ".concat(partime.calculateSalary()));
console.log("tien fulltime: ".concat(fulltime.calculateSalary()));
