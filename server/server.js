const express = require('express');
const path = require('path');
const fs = require('fs');


let app = express();

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

app.use(express.static('public'));

app.get('/films', (req, res, next) => {
    fs.readFile(path.join(__dirname, './data/films.json'), (err, data) => {
        if (err) {
            console.log('Error')
            console.log(err);
            res.sendStatus(500);
        }
       
        let films = JSON.parse(data)
       
        res.json(films);

   })
    
});

// app.get('/', (req, res) => {
//     res.send('Hello from the web server side...');
    
// });



app.listen(3000);


