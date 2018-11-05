"use strict"
const SuperPower = require ('/home/aandroomeedaa/Desktop/hacktiv8/PHASE-1/WEEK-2/day-1/classical-inheritance/superpower.js')
class Animal {
  constructor(legs, blood) {
    this._legs = legs || 2;
    this._warm_blooded = blood || true;
    this._super_power = new SuperPower();
  }
}

class Dog extends Animal {
}

class Cat extends Animal {
}

class Horse extends Animal {
  constructor() {
    super(4, true);
  }
}

let animal = new Animal();
let hachiko = new Dog(4, true);
let minnie = new Cat();
let unicorn = new Horse

console.log(animal._legs); // 2
console.log(hachiko._legs); // 4
console.log(unicorn._legs); // 4
hachiko._super_power.use_laser_vision(); // For Asgard!
minnie._super_power.be_invisible(); //Leave Hulk alone!
