const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const app = express();

dotenv.config();

app.use(express.static('./public'));
app.use('/favicon.ico', express.static('public/img/favicon.png'));
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});
app.listen(process.env.PORT, () => {
    console.log(`Website listening on port ${process.env.PORT}`)
})