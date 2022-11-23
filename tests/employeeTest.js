const Employee = require("../lib/Employee");

//Create Employee OBJ//
describe("Employee", () => {
  test("Generate an Employee Obj", () => {
    const x = new Employee();
    expect(typeof x).toBe("object");
  });

  test("create employee obj above")
  const x = new Employee("Khi", 03, "khifakeemail@gmail.com");

expect(employee.name).toBe ('string');
expect(employee.id).toBe('number');
expect(employee.email).toBe('string');
});

//new.employee constructor
test("create job title of employee",() => {
    const x = new Employee("Khi", 03, "khifakeemail@gmail.com");
    expect(x.jobTitle ()).toBe("Employee");
});

//new.name constructor
test('get employee name', () => {
   const name ="Khi";
   const x = new Employee(name);
   expect (x.name).toEqual("Khi");
});

//new.id constructor
test('get employee ID', () => {
    const id ="03";
   const x = new Employee ("Khi", 03, "khifakeemail@gmail.com");
   expect (x.getId()).toEqual(03);
});

//new.email constructor
test('get employee email()', () => {
    const x = new Employee("Khi", 03, "khifakeemail@gmail.com");
    expect(x.getEmail()).toBe("khifakeemail@.com");
});
