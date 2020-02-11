const sleepingIn = require('../src/sleepingIn');

describe("Testing that sleepIn function", () => {
    it("should be defined", () => {
        expect(sleepingIn).toBeDefined();
    });

    it("should be true if weekday is true and vacation is true", () => {
        expect(sleepingIn(true, true)).toBeTruthy();
    });

    it("should be true if weekday is false and vacation is true", () => {
        expect(sleepingIn(false, true)).toBeTruthy();
    });
    
    it("should be false if weekday is true and vacation is false", () => {
        expect(sleepingIn(true, false)).toBeFalsy();
    });

    it("should be true if weekday is false and vacation is false", () => {
        expect(sleepingIn(false, false)).toBeTruthy();
    });
})