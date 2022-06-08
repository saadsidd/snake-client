const { INPUT } = require('./constants');

// Variable to store conn object from client.js
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", data => handleUserInput(data));
  return stdin;
};

const handleUserInput = function(key) {
  // Ctrl+C to exit
  if (key === '\u0003') {
    process.exit();
  }

  // W, A, S, D to move Up, Left, Down, Right
  // 1, 2, 3 for a canned message
  if (INPUT[key]) {
    connection.write(INPUT[key]);
  }
};

module.exports = { setupInput };