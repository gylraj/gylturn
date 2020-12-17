var Turn = require('node-turn');
var server = new Turn({
  // set options
  authMech: 'long-term',
  credentials: {
    gyl: "password"
  }
});
server.start();