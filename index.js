"use strict"
class Animal{
    constructor(data){
        this.num_legs = data.legs
        this.is_warm_blooded = data.blood
        this.is_mamalia = data.mamalia
        this.food = data.food
        this.Habitat = data.Habitat
        this.superPower = new superPower()
    }
}

class superPower{
    constructor(){
        
    }
    use_laser_Vision(){
        console.log("jeng jeng jeng AWAS AWAS")
    }
    fly_trough_sky(){
        console.log("ngengg ngeng ngeeng waaah terbang")
    }
    Sleep_All_Day(){
        console.log("ZZZZZzzzzzz")
    }

}
class duck extends Animal{
    constructor(data){
        super(data)
        this.wings = data.wings
    }
}

class Chimpanzee extends Animal{
}

class dugong extends Animal{
    constructor(data){
        super(data)
        
    }
}


var objbebek = {
    legs: 2,
    blood: true,
    mamalia:false,
    wings: 2,
    food: "worms",
    Habitat: "Sawah"
}
var objsimpanse={
    legs:4,
    blood:true,
    mamalia: true,
    food:"Banana",
    Habitat:"Hutan"

}
var objdugong = {
    legs:0,
    blood: true,
    mamalia: true,
    food: "grass",
    Habitat: "Rawa"
}
var bebek = new duck(objbebek)
var simpanse = new Chimpanzee(objsimpanse)
var Dugong = new dugong(objdugong)
console.log(bebek)
console.log(simpanse)
console.log(Dugong)

bebek.superPower.fly_trough_sky()
simpanse.superPower.use_laser_Vision()
Dugong.superPower.Sleep_All_Day()
