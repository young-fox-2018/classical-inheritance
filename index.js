"use strict"

class SuperPower {
    constructor() {

    }
    super_leap() {
        console.log(`I belive i can fly`)
    }
    sound_good() {
        console.log(`cit cit cit cuitt.....`)
    }
    invisibility() {
        console.log(`cant seee in the darknesss`)
    }
}


class Animal {
    constructor(legs, bloodType) {
        this._legs = legs
        this._bloodType = bloodType
        this._superPower = new SuperPower
    }
    get superpower() {
        return this._superPower
    }
}

class Frog extends Animal {
    constructor() {
        super(4, 'warm Blooded')
    }
}

class Human extends Animal {
    constructor() {
        super(2, 'warm Blooded')
    }
}
class Snake extends Animal {
    constructor() {
        super(0, 'warm Blooded')
    }
}
class Bird extends Animal {
    constructor() {
        super(0, 'warm Blooded')
    }
}
let frog = new Frog()
let human = new Human()
let snake = new Snake()
let bird = new Bird()


frog.superpower.super_leap()
bird.superpower.sound_good()