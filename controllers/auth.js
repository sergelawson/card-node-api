const {User} = require('../models/user_model');
const Joi = require('joi');
const _ = require('lodash');
const bcrypt = require('bcrypt');

exports.create = async (req, res, next) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).json(error) 
    try {
        const user = await User.findOne({email: req.body.email})
        if (!user) return res.status(400).json({error: 'User doesn\'t exists'})
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) return res.status(400).json({error: 'Invalid password'})
        res.json(_.pick(user, ['_id', 'name', 'email']));
    } catch (error) {
        res.status(400).json(error);
    }
}

const validate = (req) => {
    const schema = {
        email: Joi.string().max(225).required(),
        password: Joi.string().max(225).required()
    }
    return Joi.validate(req, schema);
}