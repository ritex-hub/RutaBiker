const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('RutaBiker API'));
app.listen(3000);