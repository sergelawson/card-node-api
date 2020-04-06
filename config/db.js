const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todoapp')
	.then(() => console.log('connected to mongo db...'))
    .catch(err => console.error('Couldn\'t connect to mongodb...', err))
    
module.exports = mongoose