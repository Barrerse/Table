const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

mongoose.connect(process.env.MONGO_URL);

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    res.json({ name, email, password });
});


app.listen(4000);
