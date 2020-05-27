const {User, validate} = require('../models/user_model');
const _ = require('lodash')
const bcrypt = require('bcrypt');

exports.create = async (req, res, next) => {   
    const {error} = validate(req.body)
    if(error) return res.status(400).json(error)
    try { 
        let user = await User.findOne({email: req.body.email})
        if(user) return res.status(400).json({error: 'User already exists'})
        user = new User(_.pick(req.body, ['name', 'email', 'password']))
        salt = await bcrypt.genSalt(11)
        user.password = await bcrypt.hash(user.password, salt)
        data = await user.save();
        res.json(_.pick(data, ['_id', 'name', 'email']));
    } catch (error) {
        res.status(400).json(error);
    }
}
const validateUser = (user) => {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(225).required()
    }
    return Joi.validate(user, schema);
}