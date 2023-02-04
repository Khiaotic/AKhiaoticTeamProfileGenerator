const Intern = require("../team_library/Intern");

//Create Employee OBJ//
profile("Intern", () => {
  test("Generate an Intern Obj", () => {
    const x = new Intern();
    expect(typeof(x)).toBe("object");
  });

  test("create intern obj ");
  const x = new Intern("Khi", 03, "khifakeemail@gmail.com");

  expect(typeof (x.name)).toBe("string");
  expect(typeof (x.id)).toBe("number");
  expect(typeof (x.email)).toBe("string");
});

//create new.intern constructor
test("create job title of intern", () => {
  const x = new Intern("Khi", 03, "khifakeemail@gmail.com");
  expect(x.jobTitle()).toBe("Intern");
});

//create new.name constructor
test("get Intern name", () => {
  const name = "Khi";
  const x = new Intern(name);
  expect(x.name).toBe("Khi");
});

//create new.id constructor
test("get Intern School", () => {
  const id = 03;
  const x = new Intern("Khi", school, "khifakeemail@gmail.com");
  expect(x.id).toBe(school);
});

//create new.email constructor
test("get intern email()", () => {
  const x = new Intern("Khi", 03, "khifakeemail@gmail.com");
  expect(x.email).toBe("khifakeemail@.com");
});

///get get get get get get get get get get get get//
test("get.name using getName()", () => {
  const x = new Intern("Khi", 03, "khifakeemail@gmail.com");
  expect(x.getName()).toBe(name);
});

test("get.id using getName()", () => {
  const x = new Intern("Khi", id, "khifakeemail@gmail.com");
  expect(x.getId()).toBe(id);
});
test("get.id using getName()", () => {
  const x = new Intern("Khi", 03, "email");
  expect(x.getEmail()).toBe(email);
});
