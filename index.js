"use strict"
class Animal{
    constructor(legs = 4, blood = true){
        this._num_legs = legs
        this._is_warm_blooded = blood
    }
}

class SuperPower{
    use_laser_vision(){
        return "has laser vision"
    }

    ultra_sonic_sound(){
        return "has ultra sonic sound"
    }

    invisible(){
        return "can be invisible"
    }

    time_manipulation(){
        return "can travel through time"
    }

    super_strength(){
        return "has super strength"
    }
}

class Bat extends Animal{
    constructor(legs, blood){
        super(legs, blood)
        this.superpower = new SuperPower().ultra_sonic_sound()
    }
}

class Chicken extends Animal{
    constructor(legs, blood){
        super(legs, blood)
        this.superpower = new SuperPower().time_manipulation()
    }
}

class Chimpanzee extends Animal{
    constructor(legs, blood){
        super(legs, blood)
        this.superpower = new SuperPower().super_strength()
    }
}

class Frog extends Animal{
    constructor(legs, blood){
        super(legs, blood)
        this.superpower = new SuperPower().invisible()
    }
}

class Fox extends Animal{
    constructor(legs, blood){
        super(legs, blood)
        this.superpower = new SuperPower().use_laser_vision()
    }
}

let bat = new Bat(2, false)
let chicken = new Chicken(2)
let chimpanzee = new Chimpanzee(2)
let frog = new Frog(4, false)
let fox = new Fox()

console.log(bat)
console.log(chicken)
console.log(chimpanzee)
console.log(frog)
console.log(fox)