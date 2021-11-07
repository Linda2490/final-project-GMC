const express = require('express')
const { Login } = require('../controllers/driver.controllers')
const Driver = require('../models/Driver')
const router = express.Router()
var bcrypt = require('bcrypt')
const isAdmin = require('../middleware/isAdmin')
const isAuth = require('../middleware/isAuth')
const jwt = require('jsonwebtoken')
const {
  validation,

  loginValidate,
} = require('../middleware/validateDriver')

router.get('/', (req, res) => {
  res.send('testing')
})
/*
 @method:POST
 @path:http://localhost:7000/api/driver/Login
 @parameter:req.body
 public
 */
router.post('/Login', loginValidate(), validation, Login)

router.post('/signup', async (req, res) => {
  try {
    const newAdmin = new Driver({ ...req.body })
    console.log('1', newAdmin)
    const hashed = await bcrypt.hash(req.body.password, 10)
    newAdmin.password = hashed
    await newAdmin.save()
    console.log(newAdmin)

    res.send(newAdmin)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
})



router.post('/addDriver', isAuth, isAdmin, async (req, res) => {
  try {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
      return res.status(400).send('name, email and password are required')
    }
    const driverr = await Driver.findOne({ email })
    if (driverr) {
      return res.status(400).send('Driver already exists')
    }

    const newdriver = new Driver({
      name,
      email,
      password,
    })
    const hashed1 = await bcrypt.hash(req.body.password, 10)
    newdriver.password = hashed1
    await newdriver.save()
    const token = jwt.sign(
      {
        id: newdriver._id,
      },
      'MySECRETKEY',
      { expiresIn: '24h' },
    )
    res.status(200).send({ msg: 'driver added', newdriver, token })
  } catch (error) {
    res.status(500).send('impossible to add driver')
  }
})
 
 
 router.put("/editdriverrr/:_id",isAuth, async (req, res) => {
    const { _id } = req.params;
    try {
      const driver = await Driver.findOneAndUpdate({ _id }, { $set: {...req.body} });
      
      res.send({ msg: "profile edited", driver });
    } catch (error) {
      res.status(400).send({ message: 'profile cant be edited' })
    }
  }); 

router.get( '/getdrivers', async (req, res) => {
  try {
    const drivers = await Driver.find().populate('vehicule')

    res.send({ msg: 'all drivers', drivers })
  } catch (error) {
    console.log(error)
    res.status(400).send({ message: 'can not get drivers' })
  }
})

router.get( "/:id", async (req, res) => {
  try {
    const result = await Driver.findOne({ _id: req.params.id });
    res.send({ response: result, message: "geting driver successfully" });
  } catch (error) {
    res.status(400).send({ message: "there is no driver with this id" });
  }
});


router.delete('/deletedriver/:_id', isAuth, isAdmin, async (req, res) => {
  const { _id } = req.params
  try {
    const driver = await Driver.findOneAndDelete({ _id: _id })
    res.send({ msg: 'driver deleted', driver })
  } catch (error) {
    res.status(400).send({ message: "driver can't be deleted" });
  }
})


router.put("/editdriver/:_id",isAuth, isAdmin, async (req, res) => {
    const { _id } = req.params;
    try {
      const driver = await Driver.findOneAndUpdate({ _id }, { $set: {...req.body} });
      
      res.send({ msg: "driver edited", driver });
    } catch (error) {
      res.status(400).send({ message: "driver can't be edited" });
    }
  });


router.get('/current', isAuth, (req, res) => {
  res.send({ msg: 'authorized', driver: req.driver })
})
module.exports = router
