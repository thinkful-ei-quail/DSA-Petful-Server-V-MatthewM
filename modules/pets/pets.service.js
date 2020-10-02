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
    return [[...pets.cats.all()], [...pets.dogs.all()]];
  },

  dequeue(type) {
    // Remove a pet from the queue.
    if (type === 'cat') {
      pets.cats.dequeue();
    } else if (type === 'dog') {
      pets.dogs.dequeue();
    } else if (type === 'both') {
      pets.cats.dequeue();
      pets.dogs.dequeue();
    } else {
      return new Error({error: {message: `${type} is not a valid type. 'cat' or 'dog' only.`}})
    }
    return false;
  },
}
