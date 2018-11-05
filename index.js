"use strict"

class Animal {
    constructor(legs, eyes, blood){
        this.num_legs = legs
        this.eyes = eyes
        this.blood_type = blood
        this.powerup = new SuperPower
    }
}

class Frog extends Animal {
    constructor(legs, eyes, blood, type){
        super(legs, eyes, blood)
        this.type = type
    }
}

class Bat extends Animal {
    constructor(legs, eyes, blood, type, tail, wings){
        super(legs, eyes, blood)
        this.type = type
        this.tail = tail
        this.wings = wings
    }
}

class Chimpanzee extends Animal {
    constructor(legs, eyes, blood, type, tail){
        super(legs, eyes, blood)
        this.type = type
        this.tail = tail
    }
}

class Fox extends Animal {
    constructor(legs, eyes, blood, type, tail){
        super(legs, eyes, blood)
        this.type = type
        this.tail = tail
    }
}

class SuperPower {
    constructor () {

    }

    use_laser_vision() {
        console.log("A secret agent")
    }

    be_invisible() {
        console.log("shadow asassin")
    }

    secret_ninja() {
        console.log("Then perish")
    }

    extreme_hiding_skills() {
        console.log("HOOT HOOT hoot~")
    }
    
}


// const animalsClass = new Animal(2, "cold");
const frog = new Frog(4, 2, "Cold Blooded", "Amphibi", false);
const bat = new Bat(2, 2, "Warm Blooded", "Mamals", false, true);
const chimp = new Chimpanzee(2, 2, "Warm Blooded", "Mamals", false);
const fox = new Fox(4, 2, "Warm Blooded", "Mamals", true)

chimp.powerup.extreme_hiding_skills();
fox.powerup.secret_ninja();
bat.powerup.use_laser_vision();
frog.powerup.be_invisible();

console.log(chimp)
