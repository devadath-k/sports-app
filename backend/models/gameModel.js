const mongoose = require('mongoose')

const gameSchema = mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // },
    gameType: {
        type: String,
        required: [true, 'Please add a game type']
    },
    location: {
        type: String,
        required: [true, 'Please add a location']
    },
    date: {
        type: Date,
        required: [true, 'Please add a date']
    },
    startTime: {
        type: String,
        required: [true, 'Please add a start time']
    },
    maxPlayers: {
        type: Number,
        required: [true, 'Please add a max players']
    },
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)
