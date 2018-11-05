"use strict"

const Frog = require('./Frog')
const Bat = require('./Bat')
const Cat = require('./Cat')
const Dog = require('./Dog')

let frog = new Frog(4, true)
let bat = new Bat(5, true)
let dog = new Dog(6, true)
let cat = new Cat(10, true)

console.log(frog)
console.log(bat)
console.log(dog)
console.log(cat)

bat._superpower.use_invicible()
cat._superpower.use_laser_vision()
dog._superpower.use_invicible()
frog._superpower.use_laser_vision()