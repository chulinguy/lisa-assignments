const {fizzBuzz} = require('../src/fizzBuzz');

describe("Testing that FizzBuzz", () => {
    it("should be defined", () => {
        expect(fizzBuzz).toBeDefined();
    });
    
    it("should return 'fizz' if multiple of 3", () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    });
    
    it("should return 'fizz' if multiple of 5", () => {
        expect(fizzBuzz(5)).toEqual("Buzz");
    });
    
    it("should return 'FizzBuzz' if multiple of 3 and 5", () => {
        expect(fizzBuzz(15)).toEqual("FizzBuzz");
    });
    
    it("should return the number if NOT a multiple of 3 or 5", () => {
        expect(fizzBuzz(7)).toEqual(7);
    });
})
