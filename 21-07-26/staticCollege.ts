class College {
    static collegeName: string = "ABC Engineering College";
    studentName: string;
    constructor(studentName: string) {
        this.studentName = studentName;
    }
    displayStudent(): void {
        console.log("Student Name: " + this.studentName);
    }
    static displayCollege(): void {
        console.log("College Name: " + College.collegeName);
    }
}

let collegeObject = new College("Hasmitha");
collegeObject.displayStudent();
College.displayCollege();