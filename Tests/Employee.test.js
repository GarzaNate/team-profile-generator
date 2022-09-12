const Employee = require ('../lib/Employee');

describe("newEmployee", () => {
    it("should make a new employee object", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object")
    });

    it("should get name via getName()", () => {
        const testValue = "Nate";
        const e = new Employee(testValue);
        expect(e.getName()).toBe(testValue);
    });

    it("should get id via getId()", () => {
        const testValue = 100;
        const e = new Employee("bob", testValue);
        expect(e.getId()).toBe(testValue);
    });

    it("should get email via getEmail()", () => {
        const testValue = "test@test.com";
        const e = new Employee("bob", 1, testValue);
        expect(e.getEmail()).toBe(testValue);
    });

    it("getRole() should return Employee", () => {
        const testValue = "Employee";
        const e = new Employee("bob", 1, "test@test.com");
        expect(e.getRole()).toBe(testValue);
    });
});

