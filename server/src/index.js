const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const CONNECTION_URL = 'mongodb+srv://jadercardoso:1234567890@cluster0.hddos.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ;
const PORT = 5000 || 27017 ;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology : true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

app.get('/', (req,res) => {
    res.send(`server running on port ${PORT}`)
    });

app.post('/', (req,res) => {

    console.log(req.body)

    res.status(201).json({
        "voteN":req.body["voteN"],
        "id":req.body["charId"],
    
        });

});

// require ('.controllers/vote')(app);

// app.listen(PORT);


