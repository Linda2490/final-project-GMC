const express = require('express')

const Cars = require('../models/Cars')
const router = express.Router()

const isAdmin = require('../middleware/isAdmin')
const isAuth = require('../middleware/isAuth')

router.post('/addcar', isAuth, isAdmin, async (req, res) => {
  try {
    const { Brand, reference } = req.body
    if (!Brand || !reference) {
      return res.status(400).send('Brand and reference are required')
    }
    const carr = await Cars.findOne({ reference })
    if (carr) {
      return res.status(400).send('car already exists')
    }

    const car = new Cars({
      Brand,
      reference,
    })
    await car.save()

    res.status(200).send({ msg: 'car added', car })
  } catch (error) {
    res.status(500).send('impossible to add car')
  }
})

router.get('/getcars', async (req, res) => {
  try {
    const cars = await Cars.find().populate('drived_by', 'name')
    res.send({ msg: 'all cars', cars })
  } catch (error) {
    console.log(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const result = await Cars.findOne({ _id: req.params.id })
    res.send({ response: result, message: 'geting car successfully' })
  } catch (error) {
    res.status(400).send({ message: 'there is no car with this id' })
  }
})

router.delete('/deletecar/:_id', isAuth, isAdmin, async (req, res) => {
  const { _id } = req.params
  try {
    const car = await Cars.findOneAndDelete({ _id: _id })

    res.send({ msg: 'car deleted', car })
  } catch (error) {
    res.status(400).send({ message: 'car cant be deleted' })
  }
})

router.put('/editcar/:_id', isAuth, isAdmin, async (req, res) => {
  const { _id } = req.params
  try {
    const car = await Cars.findOneAndUpdate({ _id }, { $set: req.body })

    res.send({ msg: 'car edited', car })
  } catch (error) {
    res.status(400).send({ message: 'car cant be edited' })
  }
})

module.exports = router
