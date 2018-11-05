"use strict"

class Animal {
    constructor(legs, warmBlooded) {
        this._legs = legs || 2
        this._warmBlooded = warmBlooded || false
    }  
}

module.exports = Animal