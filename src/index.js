const server = require('express')();
const bodyParser = require('body-parser')

const routes = require('./controllers');

server.use((req, res, next) => {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

server.use(bodyParser.json());
server.use('/', routes);

server.listen(3001);

module.exports = server;
