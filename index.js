"use strict"
const SuperPower = require('./superPower')

class Animal {
    constructor(familia, genus, species) {
        this._familia = familia
        this._genus = genus
        this._species = species
    }
}
class Frog extends Animal {
    constructor(familia, genus, species) {
        super(familia, genus, species)
        this.superPower = new SuperPower()
    }
}
class Bat extends Animal {
    constructor(familia, genus, species) {
        super(familia, genus, species)
        this.superPower = new SuperPower()
    }
}
class Chimpanzee extends Animal {
    constructor(familia, genus, species) {
        super(familia, genus, species)
        this.superPower = new SuperPower()
    }
}
class Fox extends Animal {
    constructor(familia, genus, species) {
        super(familia, genus, species)
        this.superPower = new SuperPower()
    }
}
class Chicken extends Animal {
    constructor(familia, genus, species) {
        super(familia, genus, species)
        this.superPower = new SuperPower()
    }
}

let kodokSawah = new Frog('ranidae', 'fejerfarya', 'fejerfarya cancrivora')
let codot = new Bat('pteropodidae', 'cynopterus', 'cynopterus brachyotis')
let orangUtan = new Chimpanzee('hominidae', 'pongo', 'pongo pygmaneus')
let rubah = new Fox('canidae', 'vulpes', 'vulpes vulpes')
let kalkun = new Chicken('phasianidae', 'meleagris', 'meleagris linnaeus')

console.log(kodokSawah.superPower.nightVision())
console.log('')
console.log(codot.superPower.sonarNavigation())
console.log('')
console.log(orangUtan.superPower.groupHunting())
console.log('')
console.log(rubah.superPower.groupHunting())
console.log('')