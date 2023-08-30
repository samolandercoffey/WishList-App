const mongoose = require('mongoose')

const WishSchema = new mongoose.Schema({
  wish: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Wish', WishSchema)  
