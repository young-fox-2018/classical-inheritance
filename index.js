"use strict"

class Animal {
    constructor() {
        this.legs = 4
        this.fur = true
        this.fly = true
        this.swim = true
    }
}

class Frog extends Animal {
    constructor() {
        super()
        this.fur = false
        this.fly = false
    }
}

class Bat extends Animal {
    constructor() {
        super()
        this.legs = 2
        this.swim = false
        this.echolocation = true
    }
}

class Dolphin extends Animal {
    constructor() {
        super()
        this.fly = false
        this.fur = false
        this.legs = 0
        this.sonar = true
    }
}

class Fox extends Animal { // cuman fox aja yang punya super power
    constructor () {
        super()
        this.fly = false
        this.swim = false
        this.superPower = new SuperPower()
    }
}

class SuperPower  {
    constructor() {
    }

    user_laser_vision() {
        console.log("ciu ciu ciu")
    }

    invis() {
        console.log("hihihi")
    }
}

let fox = new Fox()
fox.superPower.user_laser_vision()



