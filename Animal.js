"use strict"
const SuperPower = require('./SuperPower.js')

class Animal {
    constructor(endangered, cute, area){
        this._endangered = endangered
        this._cute = cute
        this._area = area
        this._power = new SuperPower()

    }

    get endangered(){
        return this._endangered
    }

    get cute(){
        return this._cute
    }

    get area(){
        return this._area
    }

}

module.exports = Animal