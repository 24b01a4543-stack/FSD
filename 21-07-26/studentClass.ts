class Student {
    studentId: number;
    studentName: string;
    studentCourse: string;
    constructor(studentId: number, studentName: string, studentCourse: string) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.studentCourse = studentCourse;
    }
    displayStudentDetails(): void {
        console.log("Student ID: " + this.studentId);
        console.log("Student Name: " + this.studentName);
        console.log("Student Course: " + this.studentCourse);
    }
}
let studentObject = new Student(101, "Hasmitha", "CSE (AI & DS)");
studentObject.displayStudentDetails();