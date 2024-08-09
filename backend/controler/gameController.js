const asyncHandler = require('express-async-handler')

const Game = require('../models/gameModel')
const User = require('../models/userModel')

//@desc Get games
//@route GET /api/games
//@access Private
const getGames = asyncHandler(async (req, res) => {
    const games = await Game.find()
    res.status(200).json(games)
})

//@desc Create game
//@route POST /api/games
//@access Private
const createGame = asyncHandler(async (req, res) => {
    const { gameType, location, date, startTime, maxPlayers } = req.body
    const game = await Game.create({
        // user: req.user,
        gameType, location, date, startTime, maxPlayers
    })
    res.status(200).json(game)
})



module.exports = {
    getGames,
    createGame
}
