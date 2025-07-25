const express = require('express');
const app = express();
const port = 3000;

const names = ['Sameer', 'Robin', 'Mayank'];

app.get('/', (req, res) => {
    res.send('Home page of express');
});

names.forEach((value, index) => {
    app.get(`/${index}`, (req, res) => {
        res.send("Name : ",value);
    });
});

app.listen(port, () => {
    console.log('server is running on port', port);
});
