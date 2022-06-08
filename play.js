const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
// Connect to server and pass conn from client.js
// to setupInput to control snake
setupInput(connect());