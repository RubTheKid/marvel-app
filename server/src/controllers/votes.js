const express = require('express'); 
const voteSchema = require ('../models/heroVote');
const router = express.Router();

module.exports = app => app.use('/', router);