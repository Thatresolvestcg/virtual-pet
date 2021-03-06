const Pet = require("../src/pet")

describe("constructor", () => {
    test("returns an object", () => {
        expect(new Pet('Mickey')).toBeInstanceOf(Object);
    });
    test("returns the name properly", () => {
        const pet = new Pet('Mickey');
        expect(pet.name).toEqual("Mickey");
    });
    test("it has an initial age of 0", () => {
        const pet = new Pet("Mickey");
        expect(pet.age).toEqual(0);
    });
});

describe("grow up", () => {
    test("increments the age by one", () => {
        const pet = new Pet('Mickey');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
    test("increases hunger by five", () => {
        const pet = new Pet("Mickey");
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });
    test("decreases fitness by three", () => {
        const pet = new Pet("Mickey")
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
    test("throws an error if the pet is not alive", () => {
        const pet = new Pet("Mickey");
        pet.age = 30;
        expect(() => pet.growUp()).toThrow("Your pet is no longer alive.")
    });
});

describe("walk", () => {
    test("walking increases fitness by four", () => {
        const pet = new Pet("Mickey");
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
    });
    test("fitness level can't increase above ten", () => {
        const pet = new Pet("Mickey");
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
    test("throws an error if the pet is not alive", () => {
        const pet = new Pet("Mickey");
        pet.age = 30;
        expect(() => pet.walk()).toThrow("Your pet is no longer alive.")
    });
});

describe("feed", () => {
    test("feeding the pet decreases hunger by three", () => {
        const pet = new Pet("Mickey");
        pet.hunger = 6;
        pet.feed();
        expect(pet.hunger).toEqual(3);
    });
    test("hunger level can't decrease below zero", () => {
        const pet = new Pet("Mickey");
        pet.hunger = 1;
        pet.feed();
        expect(pet.hunger).toEqual(0);
    });
    test("throws an error if the pet is not alive", () => {
        const pet = new Pet("Mickey");
        pet.age = 30;
        expect(() => pet.feed()).toThrow("Your pet is no longer alive.")
    })
});
describe("checkup", () => {
    test("Pet in good condition should have a positive checkup result", () => {
        const pet = new Pet("Mickey");
        pet.hunger = 2;
        pet.fitness = 8;
        expect(pet.checkUp()).toEqual("I feel great!")
    });
    test("Pet in bad condition should have a negative checkup result", () => {
        const pet = new Pet("Mickey");
        pet.hunger = 9;
        pet.fitness = 2;
        expect(pet.checkUp()).toEqual("I don't feel so good!");
    });
    test("Pet with high hunger level needs to eat", () => {
        const pet = new Pet("Mickey");
        pet.hunger = 8;
        pet.fitness = 10;
        expect(pet.checkUp()).toEqual("I'm hungry");
    });
    test("Pet with low fitness needs to get some exercise", () => {
        const pet = new Pet("Mickey");
        pet.hunger = 0;
        pet.fitness = 2;
        expect(pet.checkUp()).toEqual("I need a walk");
    });
    test("throws an error if the pet is not alive", () => {
        const pet = new Pet("Mickey");
        pet.age = 30;
        expect(() => pet.checkUp().toThrow("Your pet is no longer alive."));
    });
});
describe("haveChild", () => {
    test("parent pet creates child pet in an array", () => {
        const pet = new Pet("Mickey");
        pet.haveChild("Mickey Junior");
        // expecting to be an instance of an array
    });
    test("health check for the child", () => {
        // put some health checks for the child
    })
    test("child can use the functions", () => {
        // assert that child can use the functions, feed, growUp, walk etc
    })
});



