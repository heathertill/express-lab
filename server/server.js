const express = require('express');
const path = require('path');
let app = express();


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/css/styles.css'));
// });

app.use(express.static(path.join(__dirname, '../public')));

// app.get('/', (req, res) => {
//     res.send('Hello from the web server side...');
// });



app.listen(3000);
