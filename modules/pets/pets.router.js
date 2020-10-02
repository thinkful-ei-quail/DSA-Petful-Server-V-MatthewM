const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption. One cat and One dog.
  let pets = Pets.get()
  if (!pets) {
    return res.status(400).json({error: {message: 'No pets list'}})
  }
  res.json(pets);
})

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  let {type} = req.body;
  try {
    Pets.dequeue(type);
  } catch (error) {
    return res.status(400).json(error.message);
  }
  res.status(200);
})

module.exports = router
