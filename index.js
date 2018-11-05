"use strict"
class Animal {
    constructor(legs, ears, blood) {
        this._legs = legs;
        this._ears = ears;
        this._blood = blood;
        this._power = new SuperPower
    }
}

class Chicken extends Animal {
    constructor(legs, ears, blood, wings) {
        super(legs, ears, blood)
        this._wings = wings;
    }
}

class Bat extends Animal {
    constructor(legs, ears, blood, wings) {
        super(legs, ears, blood)
        this._wings = wings;
    }
}

class Cow extends Animal {
    constructor(legs, ears, blood) {
        super(legs, ears, blood)
    }
}

class Fox extends Animal {
    constructor(legs, ears, blood) {
        super(legs, ears, blood)
    }
}

class SuperPower {
    constructor() {
    }

    use_laser_vision() {
        console.log('peew peew');
    }

    flying_kick() {
        console.log('ciaaaat...');
    }
}

var cow = new Cow(4, 2, 'warm blooded');
console.log(cow);

var bat = new Bat(2, 2, 'warm blood', 2);
console.log(bat);
bat._power.use_laser_vision();

var chicken = new Chicken(2, 2, 'warm blood', 2);
console.log(chicken);
chicken._power.flying_kick()

var fox = new Fox(4, 2, 'warm blood');
console.log(fox);