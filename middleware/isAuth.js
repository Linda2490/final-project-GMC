const Driver = require('../models/Driver')
const jwt = require('jsonwebtoken')
const isAuth = async (req, res, next) => {
  try {
    
    const token = req.headers['authorization']
    console.log('test is auth')
    
    if (!token) {
      return res
        .status(401)
        .send({ errors: [{ msg: 'you are not authorized1' }] })
    }
    
    const decoded = jwt.verify(token, 'MySECRETKEY')
    
    const x = await Driver.findOne({ _id: decoded.id }).select('-password')
    
    if (!x) {
      return res
        .status(401)
        .send({ errors: [{ msg: 'you are not authorized2' }] })
    }

    
    
    req.driver = x 
    
    next()
  } catch (error) {
    console.log(error)
    res.status(401).send({ errors: [{ msg: 'you are not authorized' }] })
  }
}

module.exports = isAuth
