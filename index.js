const express = require('express');
const Datastore = require('nedb');
const app = express();
const cors = require('cors');
app.listen(3000, () => console.log('listening on port 3000'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (req, res) => {
    console.log(req.body);
    const data = req.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    res.json({
        status: 'success',
        timestamp: timestamp,
        latitude: data.lat,
        longitute: data.lon
    });
});