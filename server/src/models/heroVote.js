const mongoose = require('../db');

const voteSchema = new mongoose.Schema({
    voteN:{
        type: Number, 
    },
    
    charId:{
        type: String, 
    },
   
});

const vote = mongoose.model('vote', voteSchema);

module.exports = vote;