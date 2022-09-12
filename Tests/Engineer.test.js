const Engineer = require("../lib/Engineer");

describe("newEngineer", () => {
    it("should get github via constructor", () => {
        const testValue = "UserName";
        const e = new Engineer("bob", 1, "test@test.com", testValue);
        expect(e.github).toBe(testValue);
    });

    it("getRole should return Engineer", () => {
        const testValue = "Engineer";
        const e = new Engineer("bob", 1, "test@test.com", "UserName");
        expect(e.getRole()).toBe(testValue);
    });

    it("can get github username via getGithub()", () => {
        const testValue = "UserName";
        const e = new Engineer("bob", 1, "test@test.com", testValue);
        expect(e.getGithub()).toBe(testValue);
    });
});