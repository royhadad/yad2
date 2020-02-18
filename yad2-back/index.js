const express = require('express');
PORT_NUMBER = 8080;
const getRequests = require('./routes/getRequests.js');
var cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())

app.use(getRequests);

app.listen(PORT_NUMBER, () => console.log(`listening on port ${PORT_NUMBER}...`));