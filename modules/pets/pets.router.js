const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.

  // Dummy test return data.
  // return [cats, dogs];
  Pets.all()
    .then(pets => {
      if (!pets) {
        return res.status(400).json({error: {message: 'No pets list'}})
      }
      res.json(pets);
      next();
    })
    .catch(next);
})

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
})

module.exports = router
