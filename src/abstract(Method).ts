// abstract class Rikkei {
//     private getName(): string;
//     private getArea(): number;

//     getInfo(): void {
//         console.log(`day là hinh ${this.getName()} có diện tích ${this.getArea()}`);
        
//     }

// }
// class Square extends Rikkei {
//     constructor(private side: number){
//         super();
//     }
//     getName(): string {
//         return "Hinh vuong";
//     }
//     getArea(): number {
//         return this.side ** 2;
//     }
// }

// class Triangle extends Rikkei {
//     constructor(private width:number, private height: number) {
//         super();
//     }
//     getName(): string {
//         return "Hinh cn";
//     }
//     getArea(): number {
//         return this.side ** 2;
//     }
// }

// const squaret: Rikkei  = [new Square(5), new Triangle(2,5)];

// squaret.forEach((squaret) => {
//     squaret.getInfo();
// });