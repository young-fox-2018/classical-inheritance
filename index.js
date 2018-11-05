"use strict"
class Animal {
    constructor(num_legs, is_warm_blooded) {
        this.num_legs = num_legs
        this.is_warm_blooded = is_warm_blooded
    }

    num_legs() {
        this.num_legs = 2
    }
    is_warm_blooded() {
        this.is_warm_blooded = true
    }

}

class Frog extends Animal {
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded)
        this.num_legs = num_legs
        this.is_warm_blooded = is_warm_blooded
        this.superpower = new SuperPower()
    }
    num_legs() {
        this.num_legs = 4
    }
    is_warm_blooded() {
        this.is_warm_blooded = true
    }
}
class Bat extends Animal{
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded)
        this.num_legs = num_legs
        this.is_warm_blooded = is_warm_blooded
        this.superpower = new SuperPower()
    }
    num_legs() {
        this.num_legs = 2
    }
    is_warm_blooded() {
        this.is_warm_blooded = true
    }
}
class Chimpanzee extends Animal{
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded)
        this.num_legs = num_legs
        this.is_warm_blooded = is_warm_blooded
        this.superpower = new SuperPower()
    }
    num_legs() {
        this.num_legs = 2
    }
    is_warm_blooded() {
        this.is_warm_blooded = false
    }
}
class Fox extends Animal{
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded)
        this.num_legs = num_legs
        this.is_warm_blooded = is_warm_blooded
        this.superpower = new SuperPower()
    }
    num_legs() {
        this.num_legs = 4
    }
    is_warm_blooded() {
        this.is_warm_blooded = false
    }
}
class Chicken extends Animal{
    constructor(num_legs, is_warm_blooded) {
        super(num_legs, is_warm_blooded)
        this.num_legs = num_legs
        this.is_warm_blooded = is_warm_blooded
        this.superpower = new SuperPower()
    }

    num_legs() {
        this.num_legs = 2
    }
    is_warm_blooded() {
        this.is_warm_blooded = false
    }
}

class SuperPower {
    use_laser_vision(){
        return "Dorr"
    }
    be_invisible(){
        return "Ngilang"
    }
}


let jacky = new Chicken(2,true)

console.log(jacky.superpower.use_laser_vision());








