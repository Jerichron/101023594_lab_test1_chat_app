const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({

    from_user: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    room: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    message: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    date_sent: {
        type: Date,
        default: Date.now,
    }
});

const Message = mongoose.model("ChatApp", MessageSchema, "ChatApp");
module.exports = Message;