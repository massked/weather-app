const express = require('express');
const app = express();
const cors = require('cors');
app.listen(3000, () => console.log('listening on port 3000'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.post('/api', (req, res) => {
    console.log(req.body);
    const data = req.body;
    res.json({
        status: 'success',
        latitude: data.lat,
        longitute: data.lon
    });
});