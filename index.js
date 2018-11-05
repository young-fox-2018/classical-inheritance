"use strict"

const Bat = require('./bat')
const Chicken = require('./chicken')
const Chimpanzee = require('./chimpanzee')
const Fox = require('./fox')
const Frog = require('./frog')

let bat = new Bat(2)
let chicken = new Chicken(2)
let chimpanzee = new Chimpanzee(2)
let frog = new Frog(4, false)
let fox = new Fox()

console.log(bat)
console.log(chicken)
console.log(chimpanzee)
console.log(frog)
console.log(fox)