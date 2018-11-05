"use strict"
class Animal {
    constructor(legs) {
        this.legs = 2
    }
}

class Bat extends Animal {
    constructor(legs) {
        super(legs)
        this.foodType = 'herbivore'
        this.flying = true
        this.superPower = new SuperPower()
    }
}


class SuperPower {
    use_laser_vision() {
        console.log('laser vision')
    }
}



let bat = new Bat(2)
bat.superPower.use_laser_vision()
console.log(bat)