"use strict"
class Animals{
    constructor (food, legs, live, eyes){
        this.food = food
        this.legs = legs
        this.live = live
        this.eyes = eyes
    }

}

class Frog extends Animals{
    constructor(food, legs, live, eyes) {
        super (food, legs, live, eyes)
        this.POWA = new SuperPower
    }
}

class Bat extends Animals{
    constructor(food, legs, live, eyes){
        super(food, legs, live, eyes)
        this.POWA = new SuperPower 
    }
}

class Chimpanzee extends Animals{
    constructor(food, legs, live, eyes) {
        super(food, legs, live, eyes)
        this.POWA = new SuperPower
    }
}

class Fox extends Animals{
    constructor(food, legs, live, eyes) {
        super(food, legs, live, eyes)
        this.POWA = new SuperPower()
    }
}

class Chicken extends Animals{
    constructor(food, legs, live, eyes) {
        super(food, legs, live, eyes)
        this.POWA = new SuperPower()
    }
}   
class SuperPower {
    be_invisible(){
        return "Where the f i am?"
    }
    fire_fist(){
        return "Burn baby burn!"
    }
    warp_spit(){
        return "See u in wherever u are!"
    }
    hunger_breath(){
        return "I guess hunger was your last friends"
    }
    moisture_sucker(){
        return "Gah! im dying, nope just trying to imitate you"
    }
}   
let BINATANG = new Animals();  
let kodokKelindes = new Frog('carnivore','four','daylight','side');
let kelelahar = new Bat('omnivore','two','nocturnal','front');
let simpangsein = new Chimpanzee('herbivore','two','daylight','front');
let rubahEkor9 = new Fox('carnivore','four','daylight','front');
let ayem = new Chicken('omnivore','two','daylight','sides');

console.log(kodokKelindes)
console.log('my special power is : warp_spit. '+kodokKelindes.POWA.warp_spit()+'\n')
console.log(kelelahar)
console.log('my special power is : moisture_sucker. '+kelelahar.POWA.moisture_sucker()+'\n')
console.log(simpangsein)
console.log('my special power is : fire_fist. '+simpangsein.POWA.fire_fist()+'\n')
console.log(rubahEkor9)
console.log('my special power is : be_invisible. '+rubahEkor9.POWA.be_invisible()+'\n')
console.log(ayem)
console.log('my special power is : hunger_breath. '+ayem.POWA.hunger_breath()+'\n')