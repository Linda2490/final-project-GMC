const mongoose = require('mongoose')
const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://lindadb2:linda1990@cluster0.jlzfq.mongodb.net/parkAR?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    )
    console.log('database is connected')
  } catch (error) {
    console.log('database is not connected', error)
  }
}
module.exports = connectDB
