const mongoose = require('../config/db')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required please']
      },
    email: {
        type: String, 
        required: [true, 'Email is required please'],
        unique: true
    }, 
    password: {
        type: String, 
        required: [true, 'Password is required']
    },
    avatar: {
        type: String
    },
    date: { type: Date, default: Date.now },
    
});

const User = mongoose.model('User', userSchema)

module.exports = User