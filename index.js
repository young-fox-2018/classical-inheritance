"use strict"
class Animal {
  constructor(data) {
    this.legs = data.legs
    this.is_warm_blooded = data.is_warm_blooded
    this.is_mamalia = data.mamal
    this.superpower = new SuperPower()
  }
}

class Monkey extends Animal {
  constructor(data) {
    super(data)
    this.food = 'banana'
  }
}

class Chicken extends Animal {
  constructor(data) {
    super(data)
    this.wings = 2
  } 
}

class Unicorn extends Animal {
  constructor(data) {
    super(data)
    this.wings = 2
    this.color = 'rainbow'
  }
}

class SuperPower {
  constructor() {
  }

  make_rainbow(){
    console.log('TRALALALILILI TRILILI YEAY dunia semakin berwarna')
  }
  
  use_laser_vision() {
    console.log('NGIIINGGGGGGG NGINGGGGG BAWAHAHAHA hancurkan')
  }

  singing() {
    console.log('I will alwayssss loveee youu uuuuu~~~~')
  }

}

const objMonkey = {
  legs:4,
  is_warm_blooded: true,
  mamal: true
}

const objChicken = {
  legs:2,
  is_warm_blooded:true,
  mamal:false
}

const objUnicorn = {
  legs:4,
  is_warm_blooded: true,
  mamal:true
}

const monyet = new Monkey(objMonkey)
const ayam = new Chicken(objChicken)
const kudamagic = new Unicorn(objUnicorn)

// console.log(new Chicken(objChicken))
// console.log(new Unicorn(objUnicorn))

kudamagic.superpower.singing()
ayam.superpower.use_laser_vision()
monyet.superpower.make_rainbow()