"use strict"
let Bat = require('./bat.js')
let Chicken = require('./chicken.js')
let Chimpanzee = require('./chimpanzee.js')
let Fox = require('./fox.js')
let Frog = require('./frog.js')

let newBat = new Bat(4,true,'Vivipar',2)
let newChick = new Chicken(2,true,'Ovovivipar', 4)
let newChimp = new Chimpanzee(2,true,'Vivipar',10)
let newFox = new Fox(4,true,'Vivipar',10)
let newFrog = new Frog(2,true,'Ovovivipar', 2)

newBat.do_something()
newChick.do_something()
newChimp.do_something()
newFox.do_something()
newFrog.do_something()

// console.log(newBat.power.be_invisible()) 
// let newBat2 = new Bat(4,true)
// console.log(`kaki : ${newBat2.num_legs} warm blood : ${newBat2.is_warm_blooded}`)

