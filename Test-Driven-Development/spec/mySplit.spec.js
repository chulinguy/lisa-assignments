const mySplit = require('../src/mySplit');

describe("Testing that mySplit", () => {
    it("should be defined", () => {
        expect(mySplit).toBeDefined();
    });
    
    it("should contain letters from input string", () => {
        expect(mySplit("dog")).toContain("d");
        expect(mySplit("dog")).toContain("o");
        expect(mySplit("dog")).toContain("g");
    });

    it("should return an empty array if string is empty", () => {
        expect(mySplit("")).toEqual([]);
    });

    it("should provide error message if no string is provided", () => {
        expect(mySplit()).toEqual("Please provide a string");
    })
})