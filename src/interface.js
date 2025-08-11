var RK = /** @class */ (function () {
    function RK(name) {
        this.name = name;
    }
    RK.prototype.sale = function () {
        console.log("doing sale");
    };
    RK.prototype.marketing = function () {
        console.log("doing marketing");
    };
    RK.prototype.dgMarketing = function () {
        console.log("Doing DGMarketing");
    };
    return RK;
}());
var result = new RK("rikkei");
result.marketing();
var result1 = new RK("PTIT");
result.sale();
