const mongoose = require('../config/db')
const Joi = require('joi');
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
const validateUser = (user) =>{
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(225).required()
    }
    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;