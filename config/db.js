const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_COLLECTION}`)
	.then(() => console.log('connected to mongo db...'))
    .catch(err => console.error('Couldn\'t connect to mongodb...', err))
    
module.exports = mongoose