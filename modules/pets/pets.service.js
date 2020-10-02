const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    return [store.cats, store.dogs];
  },

  dequeue(type) {
    // Remove a pet from the queue.
  },

  // TODO Temporary function for testing and setting up client.
  all() {
    return [cats, dogs];
  }
}
