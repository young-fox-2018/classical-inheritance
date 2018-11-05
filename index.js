"use strict"

const Animal = require('./Animal')
const Frog = require('./Frog')
const Chicken = require('./Chicken')
const Bat = require('./Bat')
const Chimpanzee = require('./Chimpanzee')
const Fox = require('./Fox')
const superower = require('./SuperPower')

let animal = new Animal ('singa') 
let frog = new Frog()
let chicken = new Chicken()
let bat = new Bat()
let chimpanzee = new Chimpanzee()
let fox = new Fox()

console.log(animal)
console.log(frog)
console.log(chicken)
console.log(bat)
console.log(chimpanzee.power.addWing())
console.log(fox.power.be_invisible())