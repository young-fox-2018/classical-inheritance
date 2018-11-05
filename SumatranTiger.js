const Animal = require('./Animal.js')

class SumatranTiger extends Animal {
    constructor(endangered, cute, area, dangerous){
        super(endangered, cute, area)
        this._dangerous = dangerous
    }
}
module.exports = SumatranTiger