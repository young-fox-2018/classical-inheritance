"use strict"
class Animal {
  constructor(legs, eye, blood) {
    this.num_legs = legs
    this.num_eye = eye
    this.blood_color = blood
    this.superpower = new SuperPower
  }
}

class Bat extends Animal{
  constructor(legs, eye, blood, wings) {
    super(legs, eye, blood)
    this.wings = wing
  }
}

class Frog extends Animal{
  constructor(legs, eye, blood, metamorph) {
    super(legs, eye, blood)
    this.metamorph = metamorph
  }
}

class Fox extends Animal{
  constructor(legs, eye, blood, tail, mamals) {
    super(legs, eye, blood)
    this.tail = tail
    this.mamals = mamals
  }
}

class Chicken extends Animal{
  constructor(legs, eye, blood) {
    super(legs, eye, blood)
  }
}

class SuperPower {
  constructor() {

  }

  use_laser_vision() {
    console.log("Menggunakan laser vision");
  }

  be_invisible() {
    console.log("Dia menghilang");
  }

  kage_bunshin() {
    console.log("Mengeluarkan 1000 banyangan");
  }
  sexy_jutsu() {
    console.log("Berubah jadi perempuan nakal");
  }
}

let fox = new Fox(2, 2, "merah", 1, true)
fox.superpower.sexy_jutsu()
// console.log(fox);
