var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setName = function (newName) {
        this.name = newName;
    };
    return Student;
}());
var students = [
    new Student(1, "A"),
    new Student(2, "B"),
    new Student(3, "C"),
    new Student(4, "D"),
    new Student(5, "E"),
    new Student(6, "F"),
];
var Classroom = /** @class */ (function () {
    function Classroom() {
        this.students = [];
    }
    Classroom.prototype.showStudents = function () {
        this.students.forEach(function (student) {
            console.log("id: ".concat(student.getId(), ", name: ").concat(student.getName()));
        });
    };
    Classroom.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Classroom.prototype.filterStudent = function (id) {
        return this.students.find(function (student) { return student.getId() === id; });
    };
    Classroom.prototype.addStudentStudents = function (id, IStudent) {
        var index = IStudent.findIndex(function (s) { return s.getId() === id; });
        this.students.push(students[index]);
        IStudent.splice(index, 1);
    };
    Classroom.prototype.removeStudent = function (id, IStudent) {
        var index = this.students.findIndex(function (s) { return s.getId() === id; });
        IStudent.push(this.students[index]);
        this.students.splice(index, 1);
    };
    Classroom.prototype.editStudent = function (id, newName) {
        var student = this.filterStudent(id);
        if (student) {
            student.setName(newName);
        }
    };
    return Classroom;
}());
var classroom1 = new Classroom();
var classroom2 = new Classroom();
classroom1.addStudent(students[0]);
classroom1.addStudent(students[1]);
classroom1.addStudent(students[2]);
classroom2.addStudent(students[3]);
classroom2.addStudent(students[4]);
classroom2.addStudent(students[5]);
classroom1.showStudents();
classroom2.showStudents();
classroom1.removeStudent(2, students);
classroom1.editStudent(1, "E");
classroom1.showStudents();
students.forEach(function (s) { return console.log("ID: ".concat(s.getId(), ", Name: ").concat(s.getName())); });
