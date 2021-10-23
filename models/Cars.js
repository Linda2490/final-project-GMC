const mongoose = require('mongoose')
const { Schema, model } = mongoose
const carSchema = new Schema({
  Brand: { type: String, required: true },
  reference: { type: Number, required: true },
  drived_by: [{
    type: Schema.ObjectId,
    ref: 'driver',
  }]
})

module.exports = Cars = model('cars', carSchema)
