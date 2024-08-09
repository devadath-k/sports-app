const express = require("express");
const { getGames, createGame } = require("../controler/gameController");
const router = express.Router();

router.get('/', getGames).post('/', createGame)

module.exports = router