const Pet = require("../src/pet")

describe("constructor", () => {
    test("returns an object", () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    test("returns the name properly", () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual("Fido");
    });
    test("it has an initial age of 0", () => {
        const pet = new Pet("Fido");
        expect(pet.age).toEqual(0);
    })
});