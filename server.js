const express = require('express');
const app = express();
const axios = require('axios');

app.get('/ping', async (req, res) => {
    const source_ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    const start = Date.now();
    try {
        await axios.get('https://google.com'); // can change to anything you like, including http
    } catch (error) {
        console.log(error);
    }
    const latency_ms = Date.now() - start;

    const time_now = new Date().toISOString();

    res.json({
        source_ip,
        latency_ms,
        time: time_now
    });
});

app.listen(4856, () => console.log('Server running on port 4856'));
