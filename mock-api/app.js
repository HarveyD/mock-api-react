const express = require('express');
const apiMocker = require('connect-api-mocker');

const port = 9000;
const app = express();
 
app.use('/api', apiMocker('.'));
 
console.log(`Mock API Server is up and running at: http://localhost:${port}`);
app.listen(port);
