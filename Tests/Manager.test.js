const Manager = require("../lib/Manager");

describe("newManager", () => {
    it("should set office number via constructor", () => {
        const testValue = 100;
        const e = new Manager("bob", 1, "test@test.com", testValue);
        expect(e.officeNumber).toBe(testValue);
    });

    it("getRole should return Manager", () => {
        const testValue = "Manager";
        const e = new Manager("bob", 1, "test@test.com", 100);
        expect(e.getRole()).toBe(testValue);
    });

    it("can get office number via getOfficeNumber()", () => {
        const testValue = 100;
        const e = new Manager("bob", 1, "test@test.com", testValue);
        expect(e.getOfficeNumber()).toBe(testValue);
    });
});