//amd
import a from "./a";

//导入CSS
import acss from "../css/a.css";

//导入json
import ajson from "../data/a.json";

//require
const greeter = require('./greeter.js');

document.querySelector("#root").appendChild(greeter());

a.log(ajson);