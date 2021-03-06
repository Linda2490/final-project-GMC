console.clear()
const express = require('express')
const connectDB = require('./config/connectDB')
const driverRoutes=require("./router/driver")
const app = express()


connectDB()


app.use(express.json())
// router
// driver
app.use('/api/driver', driverRoutes)
// router
// car
app.use('/api/car', require('./router/cars'))
// router
// kiloetconso
app.use('/api/kiloetconso', require('./router/kiloetconsos'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}else{
  require("dotenv").config()
}



const PORT = process.env.PORT
app.listen(PORT, (err) => {
  err ? console.error(err) : console.log(`server is running on PORT ${PORT}`)
})
