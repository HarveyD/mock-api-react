const express = require('express');
const apiMocker = require('connect-api-mocker');

const port = 9000;
const app = express();

// Uncomment if not using create-react-app
// const cors = require('cors');
// app.use(cors());

app.use('/api', apiMocker('mock-api'));
 
console.log(`Mock API Server is up and running at: http://localhost:${port}`);
app.listen(port);
