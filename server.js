'use strict';

const express = require('express');

const {nodeEnv} = require('./util.js');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running in ${nodeEnv} mode ...`);
console.log(`Running on http://${HOST}:${PORT}`);