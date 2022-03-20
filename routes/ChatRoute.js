const express = require('express');
const messageModel = require('../models/Chat');
const app = express();


//Create MessageModel
app.post('/chat', async (req, res) => {

    console.log(req.body)
    const message = new messageModel(req.body);
    try {
        await message.save((err) => {
            if (err) {

                res.send(err)
            } else {
                res.send(message);
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
});


//Get MessageModel
app.get('/chat', async (req, res) => {
    const message = await messageModel.find({});

    try {
        console.log(message[0].name)
        res.status(200).send(message);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = app