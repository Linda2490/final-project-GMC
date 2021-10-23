const Driver = require('../models/Driver')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.Login = async (req, res) => {
  const { email, password } = req.body

  try {
    const findDriver = await Driver.findOne({ email })
    if (!findDriver) {
      return res.status(400).send({ errors: [{ msg: 'driver not found' }] })
    }
    const comparePass = await bcrypt.compare(password, findDriver.password)
    if (!comparePass) {
      return res.status(400).send({ errors: [{ msg: 'bad credential' }] })
    }
    // create token
    const token = jwt.sign(
      {
        id: findDriver._id,
      },
      'MySECRETKEY',
      { expiresIn: '3h' },
    )
    res
      .status(200)
      .send({ msg: 'login successfully', driver: findDriver, token })
  } catch (error) {
    console.log(error)
    res.status(500).send({ errors: [{ msg: 'Login failed' }] })
  }
}
