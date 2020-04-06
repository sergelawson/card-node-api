const mongoose = require('../config/db')

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title required please']
      },
    content: {
        type: String, 
        required: [true, 'Content required please']
    }, 
    date: { type: Date, default: Date.now },
    isPublished: Boolean 
});

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo