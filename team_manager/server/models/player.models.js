const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
        minlength: [2, "Player name must be at least two characters long!"]
    },
    prefferedPosition: { type: String },
    status: { type: Array }
}, { timestamps: true });

module.exports.Player = mongoose.model('Player', PlayerSchema);
