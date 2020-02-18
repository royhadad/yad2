const express = require('express');
PORT_NUMBER = 3000;
const getRequests = require('./routes/getRequests.js');
const app = express();
app.use(express.json());

app.use(getRequests);

app.listen(PORT_NUMBER, () => console.log(`listening on port ${PORT_NUMBER}...`));