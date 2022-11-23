const Employee = require("../team_library/Employee");

//Create Employee OBJ//
profile("Employee", () => {
  test("Generate an Employee Obj", () => {
    const x = new Employee();
    expect(typeof(x)).toBe("object");
  });

  test("create employee obj ");
  const x = new Employee("Khi", 03, "khifakeemail@gmail.com");

  expect(typeof (x.name)).toBe("string");
  expect(typeof (x.id)).toBe("number");
  expect(typeof (x.email)).toBe("string");
});

//create new.employee constructor
test("create job title of employee", () => {
  const x = new Employee("Khi", 03, "khifakeemail@gmail.com");
  expect(x.jobTitle()).toBe("Employee");
});

//create new.name constructor
test("get employee name", () => {
  const name = "Khi";
  const x = new Employee(name);
  expect(x.name).toEqual("Khi");
});

//create new.id constructor
test("get employee ID", () => {
  const id = 03;
  const x = new Employee("Khi", 03, "khifakeemail@gmail.com");
  expect(x.id).toEqual(03);
});

//create new.email constructor
test("get employee email()", () => {
  const x = new Employee("Khi", 03, "khifakeemail@gmail.com");
  expect(x.email).toBe("khifakeemail@.com");
});

///get get get get get get get get get get get get//
test("get.name using getName()", () => {
  const x = new Employee("Khi", 03, "khifakeemail@gmail.com");
  expect(x.getName()).toBe(313);
});

test("get.id using getName()", () => {
  const x = new Employee("Khi", 03, "khifakeemail@gmail.com");
  expect(x.getId()).toBe(03);
});
