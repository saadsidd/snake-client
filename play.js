const connect = require('./client');

// setup interface to handle user input from stdin
const setupInput = function(cb) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", data => cb(data));
  return stdin;
};

const handleUserInput = function(key) {
  // Ctrl+C to exit
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput(handleUserInput);
console.log("Connecting ...");
connect();