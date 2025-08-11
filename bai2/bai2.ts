abstract class Job {
    type: string;
    constructor(type: stirng) {
        this.type = type;
    }
    printType(): void {
        console.log(`type: ${this.type}`);
    }
    abstract calculateSalary (): number;
}

class Partime extends Job {
    private workingHour: number;
    constructor(type: string, workingHour: number){
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary(): number {
        return 30000*this.workingHour;
    }
}

class FulltimeJob extends Job {
    constructor(type: string){
        super(type);
        this.type = type;
    }
    calculateSalary(): number {
        return 10000000;
    }
}
const partime = new Partime("partime", 40);
const fulltime = new FulltimeJob("fulltime");
console.log(`tien partime: ${partime.calculateSalary()}`);
console.log(`tien fulltime: ${fulltime.calculateSalary()}`);

