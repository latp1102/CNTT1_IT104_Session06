interface Sale {
    name: string;
    sale(): void;
}

interface Marketing {
    name: string;
    marketing(): void;
}

interface DGMarketing extends Marketing {
    dgMarketing(): void;
}

class RK implements Sale, Marketing, DGMarketing {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    sale(): void {
        console.log("doing sale");
    }
    marketing(): void {
        console.log("doing marketing");
    }
    dgMarketing(): void {
        console.log("Doing DGMarketing");
    }
}
const result: Marketing = new RK("rikkei");
result.marketing();

// const result1: Sale = new RK("PTIT");
// result.sale();