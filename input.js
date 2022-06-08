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

  // WASD to move Up, Left, Down, Right
  if (key === 'w') {
    connection.write('Move: up');
  }

  if (key === 'a') {
    connection.write('Move: left');
  }

  if (key === 's') {
    connection.write('Move: down');
  }

  if (key === 'd') {
    connection.write('Move: right');
  }

};

module.exports = { setupInput };