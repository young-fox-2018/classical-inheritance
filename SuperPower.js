"use strict"

class SuperPower {
    constructor(animal) {
        this.animal = animal
    }
    
    use_laser_vision() {
        console.log(`${this.animal} use laser`)
    }

    use_invicible() {
        console.log(`${this.animal} use invicible`)
    }
}

module.exports = SuperPower