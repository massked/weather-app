const express = require('express');
const app = express();
const cors = require('cors');
app.listen(3000, () => console.log('listening on port 3000'));
app.use(cors());
app.use(express.static('public'));