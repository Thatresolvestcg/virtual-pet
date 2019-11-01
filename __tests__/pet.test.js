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
    });
});

describe("grow up", () => {
    test("increments the age by one", () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
    test("increases hunger by five", () => {
        const pet = new Pet("Fido");
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });
    test("decreases fitness by three", () => {
        const pet = new Pet("Fido")
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
});

describe("walk", () => {
    test("walking increases fitness by four", () => {
        const pet = new Pet("Fido");
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
    });
    test("fitness level can't increase above ten", () => {
        const pet = new Pet("Fido");
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    })
});
