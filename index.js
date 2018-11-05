"use strict"
const SuperPower = require("./superPower")
const Animal = require("./animal")

class Frog extends Animal {
    constructor(num_leg, is_warm_blooded) {
        super(num_leg, is_warm_blooded);
        this.power = new SuperPower()
        // return "frog power animal amfibi"
    }

}
class Bat extends Animal {
    constructor(num_leg, is_warm_blooded) {
        super(num_leg, is_warm_blooded);
        this.power = new SuperPower()
    }

}

class Chimpanzee extends Animal {
    constructor(num_leg, is_warm_blooded) {
        super(num_leg, is_warm_blooded);
        this.power = new SuperPower()

    }
}
class Fox extends Animal {
    constructor(num_leg, is_warm_blooded) {
        super(num_leg, is_warm_blooded);
        this.power = new SuperPower()

    }
}
class Chicken extends Animal {
    constructor(num_leg, is_warm_blooded) {
        super(num_leg, is_warm_blooded);
        this.power = new SuperPower()

    }
}

var Animals = new Animal(2, false)
var Frogs = new Frog(4, false)
var Bats = new Bat(2, true)
var Chimpanzees = new Chimpanzee(2, true)
var Foxs = new Fox(4, true)
var Chickens = new Chicken(2, false)

console.log(Frogs.power.use_laser_vision() + '\n');


console.log(Bats.power.be_invisible() + '\n');

console.log(Chimpanzees.power.use_laser_vision() + '\n');

console.log(Foxs.power.be_invisible() + '\n');

console.log(Chickens.power.use_laser_vision() + '\n');



