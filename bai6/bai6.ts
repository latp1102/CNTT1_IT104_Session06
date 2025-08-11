class Student {
    private id: number;
    private name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    } 
}

const students: Student[] = [
    new Student(1, "A"),
    new Student(2, "B"),
    new Student(3, "C"),
    new Student(4, "D"),
    new Student(5, "E"),
    new Student(6, "F"),
];
class Classroom {
    private students: Student[] = [];
    showStudents(): void {
        this.students.forEach(student => {
            console.log(`id: ${student.getId()}, name: ${student.getName()}`);
        });
    }
    addStudent(student: Student): void {
        this.students.push(student);
    }
    filterStudent(id: number): Student | undefined {
        return this.students.find(student => student.getId() === id);
    }
    addStudentStudents(id: number, IStudent: Student[]): void {
        const index = IStudent.findIndex(s => s.getId() === id);
        this.students.push(IStudent[index]);
        IStudent.splice(index, 1);
    }
}

const classroom1 = new Classroom();
const classroom2 = new Classroom();

classroom1.addStudent(students[0]);
classroom1.addStudent(students[1]);
classroom1.addStudent(students[2]);

classroom2.addStudent(students[3]);
classroom2.addStudent(students[4]);
classroom2.addStudent(students[5]);

classroom1.showStudents();
classroom2.showStudents();