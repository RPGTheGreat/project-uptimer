const fetch = require("node-fetch")
const express = require("express")
const app = express()

module.exports = {

url: async function(url, interval) {
  
let status = 404;
app.get('/', (req, res) => {
    res.status(status).send('HEY!');
    console.log('Ping!');
});

const port = 4200;
let int = interval || 60000
  
app.listen(port);
console.log(port);
setInterval(async () => {
    const response = await fetch(url);
    console.log(`Status - ${response.status}`);
    status = response.status;
}, int);
  
}
}