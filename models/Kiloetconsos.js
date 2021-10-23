const mongoose = require ('mongoose')
const {Schema, model} = mongoose
const KiloetconsoShema = new  Schema ({
    mission : { type : String, required : true},
    kilometrage : {type : Number, required : true},
    consommation : { type : Number, required : true},
    date: { type: String, default: Date } ,
    vehicule : {type : String, required : true}
})
module.exports = Kiloetconsos = model('kiloetconsos', KiloetconsoShema)