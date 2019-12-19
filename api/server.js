const express = require('express');

const server = express();

server.use(express.json());

server.get('/',(req,res) => {
    res.status(200).json({api: "Up and running"})
})

//  Time Stamp:
//  server.get('/now', (req,res) => {
//     const now = new Date().toISOString();
//     res.send(now);
// })
module.exports = server;