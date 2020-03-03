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

app.get('/api', (req, res) => {
    database.find({}, (err, data) => {
        if(err) {
            res.end();
            return;
        }
        res.json(data);
    });
});

app.post('/api', (req, res) => {
    const data = req.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    res.json(data);
});