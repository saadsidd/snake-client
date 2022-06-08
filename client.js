const net = require('net');
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function() {

  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Check for successful connection
  // Set player name
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: AFK');
  });

  // logging data sent from server
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;

};

module.exports = { connect };