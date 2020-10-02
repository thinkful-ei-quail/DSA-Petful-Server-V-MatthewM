const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  people = People.all()// TODO Temporary function for testing and setting up client.
  if (!people) {
    return res.status(400).json({error: {message: 'No people list'}});
  }
  res.json(people);
})

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
})

module.exports = router
