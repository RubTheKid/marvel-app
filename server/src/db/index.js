const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vote', {useMongoClient: true});

mongoose.Promise = global.Promise;

module.exports = mongoose;