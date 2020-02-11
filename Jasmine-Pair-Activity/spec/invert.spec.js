const invert = require("../invert.js")

describe("invert", () => {

    beforeEach( () => {
        object = { 'a': 1, 'b': 2, 'c': 1 }
    });

    it("sets values of input as the key", () => {
        expect(invert(object)['2']).toEqual("b")
    });

    it("overwrites property assignemnts of previous values if object contains duplicate values", () => {
        expect(invert(object)['1']).toEqual("c")
    });

    it("converts objects to string to allow it to be a key", () => {
        object2 = { 'a': {}, 'b': 2, 'c': 1 };
        expect(invert(object2)['{}']).toEqual("a");
        expect('{}' in invert(object2)).toBe(true);
    });

    it("converts arrays to string to allow it to be a key", () => {
        object3 = { 'a': [], 'b': 2, 'c': 1 };
        expect(invert(object3)['[]']).toEqual("a");
        expect('[]' in invert(object3)).toBe(true);
    });
})