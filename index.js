"use strict"

class Animal{
    constructor(blood,smart){
        this.num_legs = 2
        this.is_warm_blooded = blood || true
        this.is_smart = smart || false
        this.superpower = new SuperPower()
    }

}

class Chimpanzee extends Animal{
    constructor(){
        super(true,true)
    }
}

class Frog extends Animal{
    constructor(){
        super(true,false)
        this.num_legs = 2
    }
}

class Duck extends Animal{
    constructor(){
        super(true, false)
        this.num_legs = 2
    }
}

class Fox extends Animal{
    constructor(){
        super(true,true)
        this.num_legs = 4
    }
}
class Chicken extends Animal{
    constructor(){
        super()
        this.num_legs = 2
    }
}

class SuperPower{
    use_laser_vision(){
        console.log("lazeeeer")
    }

    be_invisible(){
        console.log("guess where am i")
    }

    superpunch(){
        console.log("take this")
    }

    fly(){
        console.log("yeay i'm free")
    }

}

let animal = new Animal()
let chimpanzee = new Chimpanzee()
let frog = new Frog()
let fox = new Fox()
let chicken = new Chicken()
let duck = new Duck()

console.log(animal)
console.log(chimpanzee)
console.log(fox)
console.log(duck)
console.log("")

//macam hewan chimpanzee,frog,fox,chicken,duck
//macam super power : use_laser_vision(), be_invisible(), superpunch(), fly()
//cara penggunaan: panggil <hewan>.superpower.<macam superpower>
fox.superpower.use_laser_vision()
duck.superpower.fly()
