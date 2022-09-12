const Intern = require("../lib/Intern");

describe("newIntern", () => {
    it("should get school via constructor", () => {
        const testValue = "UNC";
        const e = new Intern("bob", 1, "test@test.com", testValue);
        expect(e.school).toBe(testValue);
    });

    it("getRole should return Intern", () => {
        const testValue = "Intern";
        const e = new Intern("bob", 1, "test@test.com", "UNC");
        expect(e.getRole()).toBe(testValue);
    });

    it("can get school name via getSchool()", () => {
        const testValue = "UNC";
        const e = new Intern("bob", 1, "test@test.com", testValue);
        expect(e.getSchool()).toBe(testValue);
    });
});