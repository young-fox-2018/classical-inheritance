"use strict"
class Animal {
    constructor (eye, legs, blood) {
        this.eye = eye 
        this.legs = legs 
        this.blood_color = blood 
        this.superPower = new SuperPower()
    }
}

class Frog extends Animal {
    constructor (eye, legs, blood_color) {
        super(eye, legs, blood_color)
    }
}

class Bat extends Animal {
    constructor (eye, legs, blood_color, wing) {
        super(eye, legs, blood_color, wing)
        this.wings = wing
    }
}

class Fox extends Animal {
    constructor (eye, legs, blood_color, tail) {
        super(eye, legs, blood_color)
        this.tail = tail 
    }
}

class SuperPower {
    constructor () {
        this.superPower = 'laser vision, invisible, super jump, super voice'
    }

    use_laser_vision () {
        console.log('ciuwwwww')
    }

    use_invisible () {
        console.log('lah kemana dah?')
    }

    use_super_jump () {
        console.log('bujug tinggi amat!')
    }

    use_super_voice () {
        console.log('wikwikwikwik')
    }
}

let frog = new Frog(2, 4, 'red')
let bat = new Bat(2, 2, 'red', 2)
let fox = new Fox(2, 4, 'red', 1)

console.log(fox)
frog.superPower.use_super_voice()