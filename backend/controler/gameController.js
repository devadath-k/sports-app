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
        user: req.user,
        gameType, location, date, startTime, maxPlayers,
        participants: [req.user]
    })
    res.status(200).json(game)
})

//@desc Get specific game details
//@route GET /api/games
//@access Private
const getGameDetails = asyncHandler(async (req, res) => {
    const game = await Game.findById(req.params.id)
    if(!game){
        res.status(400)
        throw new Error('Game not found')
    }
    res.status(200).json(game)
})

//@desc Join a game
//@route PUT /api/games
//@access Private
const joinGame = asyncHandler(async (req, res) => {

    const game = await Game.findById(req.params.id)
    if(!game){
        res.status(400)
        throw new Error('Game not found')
    }

    if(game.participants.includes(req.user.id)){
        res.status(400)
        throw new Error('User already joined')
    }

    if(game.participants.length >= game.maxPlayers){
        res.status(400)
        throw new Error('Game is full')
    }

    game.participants.push(req.user)
    await game.save()
    res.status(200).json(game)
})

//@desc Delete a game
//@route DELETE /api/games
//@access Private
const deleteGame = asyncHandler(async (req, res) => {

    const game = await Game.findById(req.params.id)
    if(!game){
        res.status(400)
        throw new Error('Game not found')
    }

    if(game.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await Game.findByIdAndDelete(req.params.id)

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGames,
    createGame,
    joinGame,
    deleteGame,
    getGameDetails
}
