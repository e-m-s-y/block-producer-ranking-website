const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const path = require('path');
const app = express();

dotenv.config();

app.use(express.static('./public'));
app.use('/favicon.ico', express.static('public/img/favicon.png'));
app.get('/api/delegates/ranking', async (req, res) => {
    const response = await axios.get(process.env.DELEGATE_RANKING_ENDPOINT);

    if (response.status === 200) {
        return res.send(response.data);
    }

    res.status(500).send("Could not get delegate ranking from relay.");
});
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});
app.listen(process.env.PORT, () => {
    console.log(`Website listening on port ${process.env.PORT}`)
})