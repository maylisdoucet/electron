// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.



var datetime = require('node-datetime');
var dt = datetime.create();
var formatted = dt.format('m/d/Y H:M:S');
document.getElementById('heure').innerHTML = formatted;