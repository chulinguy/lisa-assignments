const {Parrot, ApprenticeParrot} = require('../src/parrotClass');

describe("The Parrot class", () => {
    it("should be defined", () => {
        expect(Parrot).toBeDefined();
    })
    
    beforeEach( () => {
        p = new Parrot("Polly");
    })

    describe("constructor", () => {
        it("has the name that's the same as the parameter", () => {
            expect(p.name).toEqual("Polly");
        });
    })

    describe("speak", () => {
        it("returns name of Parrot and want a cracker", () => {
            expect(p.speak()).toEqual("Polly want a cracker!")
        });

        it("has the name 'A nameless parrot' if no arguments passed in", () => {
            n = new Parrot();
            expect(n.speak()).toEqual("A nameless parrot want a cracker!");
        })
    })
});

describe("The ApprenticeParrot class", () => {
    it("should be defined", () => {
        expect(ApprenticeParrot).toBeDefined();
    });

    beforeEach( () => {
        a = new ApprenticeParrot("Bilbo");
    });

    describe("constructor", () => {
        it("has the name that's the same as the parameter", () => {
            expect(a.name).toEqual("Bilbo");
        });
    });

    describe("speak", () => {
        it("returns emoji the first 3 times", () => {
            expect(a.counter < 4).toBe(true);
            expect(a.speak()).toEqual("😴");
        })

        it("returns name + want a cracker! on 4th invocation and after", () => {
            expect(a.counter).toEqual(0)
            a.speak();

            expect(a.counter).toEqual(1)
            a.speak();

            expect(a.counter).toEqual(2)
            a.speak();

            expect(a.counter).toEqual(3)
            a.speak();
            
            
            expect(a.counter).toEqual(4)
            expect(a.speak()).toEqual("Bilbo want a cracker!");
            
            expect(a.counter).toEqual(5)
            expect(a.speak()).toEqual("Bilbo want a cracker!");

            expect(a.counter >= 4).toBe(true);
        });
    });
})
