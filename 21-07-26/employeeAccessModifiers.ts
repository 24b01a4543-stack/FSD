class Employee {


    public employeeName: string;

    private employeeSalary: number;

    protected employeeDepartment: string;

    constructor(employeeName: string, employeeSalary: number, employeeDepartment: string) {
        this.employeeName = employeeName;
        this.employeeSalary = employeeSalary;
        this.employeeDepartment = employeeDepartment;
    }

    displayEmployeeDetails(): void {
        console.log("Employee Name: " + this.employeeName);
        console.log("Employee Salary: " + this.employeeSalary);
        console.log("Employee Department: " + this.employeeDepartment);
    }
}

let employeeObject = new Employee("Hasmitha", 50000, "AI & DS");
console.log("Employee Name: " + employeeObject.employeeName);
employeeObject.displayEmployeeDetails();