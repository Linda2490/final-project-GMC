const mongoose = require('mongoose')
const { Schema, model } = mongoose
const driverSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'driver'], default: 'driver' },
  photo: {
    type: String,
  },
  vehicule : [{   
    type: Schema.Types.ObjectId,
    ref: 'cars',
  }]
})

module.exports = Driver = model('driver', driverSchema)
