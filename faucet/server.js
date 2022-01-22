const dotenv = require('dotenv');
dotenv.config();
const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use('/', function(req,res){res.sendFile(path.join(__dirname+'/public/index.html'));
});

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
    console.log('Server listening on port '+ process.env.PORT + '!');
});
