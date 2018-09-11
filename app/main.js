import a from "./a";

const greeter = require('./greeter.js');
document.querySelector("#root").appendChild(greeter());

a.log();