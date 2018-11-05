"use strict"

const SuperPower = require('./SuperPower')

class Animal {
    constructor (name, golongan, legs, tipeHewan) {
        this.name = name
        this.golongan = golongan || 'mamalia'
        this.num_legs = legs || 4
        this.tipeHewan = tipeHewan || 'karnivora'
        this.power = new SuperPower()
    }

    // get power () {
    //     return this
    // }

    // be_invisible() {
    //     this.addPower = new SuperPower().be_invisible()

    //     return this
    // }

    // addWing () {
    //     this.addPower = new SuperPower().addWing()

    //     return this
    // }
}

console.log(new SuperPower())

module.exports = Animal