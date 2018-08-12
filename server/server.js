const express = require('express')
const server = express()
const burger = require('./routes/burger')
const path = require('path')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/burger', burger)

module.exports = server
