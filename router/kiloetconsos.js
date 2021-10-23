const express = require('express')
const isAuth = require('../middleware/isAuth')
const Kiloetconsos = require('../models/Kiloetconsos')
const router = express.Router()

router.post('/addkiloetconso', isAuth, async (req, res) => {
  try {
    const { mission, kilometrage, consommation, vehicule} = req.body
    if (!mission || !kilometrage || !consommation || !vehicule) {
      return res
        .status(400)
        .send('mission, kilometrage, consommation and vehicule are required')
    }
    const kiloetconsoss = await Kiloetconsos.findOne({ mission })
    
    const kiloetconso = new Kiloetconsos({
      mission,
      kilometrage,
      consommation,
      vehicule,
    })
    await kiloetconso.save()

    res.status(200).send({ msg: 'values added', kiloetconso })
  } catch (error) {
    console.log(error)
     res.status(500).send('impossible to add values')
  }
})

router.get('/getkiloetconso', async (req, res) => {
  try {
    const kiloetconsos = await Kiloetconsos.find()
    res.send({ msg: 'all values', kiloetconsos })
  } catch (error) {
     res.status(400).send('impossible to get values')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const result = await Kiloetconsos.findOne({ _id: req.params.id })
    res.send({ response: result, message: 'geting value successfully' })
  } catch (error) {
    res.status(400).send({ message: 'there is no value with this id' })
  }
})

router.delete('/deletekiloetconso/:_id', isAuth, async (req, res) => {
  const { _id } = req.params
  try {
    const kiloetconso = await Kiloetconsos.findOneAndDelete({ _id: _id })

    res.send({ msg: 'value deleted', kiloetconso })
  } catch (error) {
    res.status(400).send({ message: 'value not deleted' })
  }
})

router.put('/editkiloetconso/:_id', isAuth, async (req, res) => {
  const { _id } = req.params
  try {
    const kiloetconso = await Kiloetconsos.findOneAndUpdate(
      { _id },
      { $set: req.body },
    )

    res.send({ msg: 'value edited', kiloetconso })
  } catch (error) {
    res.status(400).send({ message: 'value not edited' })
  }
})

router.get('/currentt', isAuth, (req, res) => {
  res.send({ msg: 'authorized', kiloetconso: req.kiloetconso })
})

module.exports = router
