const express = require('express')
const json = require('body-parser').json()

// Remove when pets.services is ready.
const {cats, dogs} = require('../../store');

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.

  // Dummy test return data.
  return [cats, dogs];
})

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
})

module.exports = router
