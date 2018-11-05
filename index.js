"use strict"

class Animals {
    constructor(numLegs, foodType, size) {
        this._num_legs = numLegs;
        this._foodType = foodType;
        this._size = size;
    }
}

class Frog extends Animals {
    constructor(numLegs, foodType, size) {
        super(numLegs, foodType, size);
        this._specialPower = new Superpower();

    }
}

class Bat extends Animals {
    constructor(numLegs, foodType, size) {
        super(numLegs, foodType, size);
        this._specialPower = new Superpower();
    }
}

class Lion extends Animals {
    constructor(numLegs, foodType, size) {
        super(numLegs, foodType, size);
        this._specialPower = new Superpower();
    }
}

class Hawk extends Animals {
    constructor(numLegs, foodType, size) {
        super(numLegs, foodType, size);
        this._specialPower = new Superpower();
    }
}

class Cheetah extends Animals {
    constructor(numLegs, foodType, size) {
        super(numLegs, foodType, size);
        this._specialPower = new Superpower();
    }
}
class Superpower {
    amphibi_power() {
        console.log('SPLASH!');
        return 'Frog says: I can live everywhere!';
    }
    laserNightVision_power() {
        console.log('SSST!!')
        return 'Bat says: Dark is my friend';
    }
    beast_power() {
        console.log('ROARR!!!');
        return 'Lion says: I am king of the jungle!!';
    }
    flyHigh_power() {
        console.log('WHOOOSH!')
        return 'Hawk says: You cant hide!';
    }
    speed_power() {
        console.log('RUSH RUSH RUSH!!')
        return 'Cheetah says: the fastest creatures in the world? its me!';
    }

}

let kodok = new Frog('2', 'Carnivore', 'Small');
let kelelawar = new Bat('2', 'Omnivore', 'Small');
let singa = new Lion('4', 'Carnivore', 'Big');
let elang = new Hawk('2', 'Omnivore', 'Medium');
let macan = new Cheetah('4', 'Carnivore', 'Big');

// console.log(kodok);
console.log(kodok._specialPower.amphibi_power() + '\n');
// console.log(kelelawar);
console.log(kelelawar._specialPower.laserNightVision_power() + '\n');
// console.log(singa);
console.log(singa._specialPower.beast_power() + '\n');
// console.log(elang);
console.log(elang._specialPower.flyHigh_power() + '\n');
// console.log(macan);
console.log(macan._specialPower.speed_power() + '\n');
