const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));    
});

app.listen(port, () => {
    console.log(`listening on port ${port}!`)
    console.log(__dirname)
});

app.use(express.static(__dirname + '/'));