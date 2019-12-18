const erxpress = require('express');

const server = express();

server.get('/',(req,res) => {
    res.status(200).json({api: "Up and running"})
})