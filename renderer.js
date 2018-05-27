// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//     // Affiche la page d'accueil de Google dans l'application
//     document.querySelector('body').innerHTML = body;
// });

var datetime = require('node-datetime');
var dt = datetime.create();
var formatted = dt.format('m/d/Y H:M:S');

document.getElementById('heure').innerHTML=formatted;