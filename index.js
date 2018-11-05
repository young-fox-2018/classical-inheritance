"use strict"

const Chimpanzee = require('./Chimpanzee.js');
const Frog = require('./Frog.js');
const Cat = require('./Cat.js');

let monkey = new Chimpanzee('wild', 'land', 'fruits', 'fur');
let smallFrog = new Frog('wild', 'pond', 'flies', true);
let kitten = new Cat('pet', 'land', 'meat', true);

console.log(monkey);
console.log(smallFrog);
console.log(kitten);

smallFrog.superpower.use_laser_vision();
kitten.superpower.be_invisible();
monkey.superpower.steal_foods();