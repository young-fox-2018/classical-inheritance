"use strict"
const Animal = require('./Animal.js')
const Dog = require('./Dog.js')
const Fish = require('./Fish.js')
const SumatranTiger= require('./SumatranTiger.js')

let newAnimal = new Animal (false, true, "land")
let newDog = new Dog (false, true, "amphibian", true)
let newFish = new Fish (false, false, "water")
let newTiger = new SumatranTiger (true, true, "land", true)

console.log(newAnimal)
console.log(newDog)
console.log(newFish)
console.log(newAnimal._power.get_money())
console.log(newDog._power.be_invisible())
console.log(newFish._power.breathe_fire())
console.log(newTiger._power.kill_thief())