const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const enconRouter = require('../enCon/enCon-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/encon', authenticate, enconRouter);

server.get('/', (req,res) =>{
    res.json({ api: 'up'})
})

module.exports = server;