const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js')
const productsRouter = require('../products/products-router.js')
const categoriesRouter = require('../categories/categories-router.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());


server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter)
server.use('/api/products', productsRouter)
server.use('/api/categories', categoriesRouter)

server.get('/',(req,res) => {
    res.status(200).json({api: "Up and running"})
})


module.exports = server;