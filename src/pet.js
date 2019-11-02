const INITIAL_AGE = 0;
const INITIAL_HUNGER = 0;
const INITIAL_FITNESS = 10;
const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const FITNESS_INCREASE = 4;
const HUNGER_DECREASE = 3;

function Pet(name) {
    this.name = name;
    this.age = INITIAL_AGE;
    this.hunger = INITIAL_HUNGER;
    this.fitness = INITIAL_FITNESS;
    Pet.prototype.growUp = function () {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    }
    Pet.prototype = {
        get isAlive() {
            return this.age < 30 && this.hunger < 10 && this.fitness > 0;

        }
    }
    Pet.prototype.walk = function () {
        if ((this.fitness + FITNESS_INCREASE) <= MAXIMUM_FITNESS) {
            this.fitness += FITNESS_INCREASE;
        } else {
            this.fitness = MAXIMUM_FITNESS;
        }
    }
    Pet.prototype.feed = function () {
        if (!this.isAlive) {
            throw new Error("Your pet is no longer alive.")
        }
        if ((this.hunger - HUNGER_DECREASE) >= MINIMUM_HUNGER) {
            this.hunger -= HUNGER_DECREASE;
        } else {
            this.hunger = MINIMUM_HUNGER;
        }
    }
    Pet.prototype.checkUp = function () {
        if ((this.fitness >= 4) && (this.hunger <= 4)) {
            return "I feel great!";
        } if ((this.fitness <= 3) && (this.hunger >= 5)) {
            return "I don't feel so good!";
        } if ((this.hunger >= 5)) {
            return "I'm hungry";
        } if ((this.fitness <= 3)) {
            return "I need a walk";
        }
    }
}
module.exports = Pet;