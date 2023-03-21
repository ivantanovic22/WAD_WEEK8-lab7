const express = require('express');
const mustache = require('mustache-express');
const app = express();
const router = require('./routes/guestbookRoutes');
const path = require('path');
const public = path.join(__dirname, 'public');
const bodyParser = require('body-parser');
app.use('/', router);
app.get('/', function (req, res) {
    res.send('Hello and welcome to the guestbook application.');
})
app.use(express.static(public));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.listen(3000, () => {
    console.log('Server started on port 3000. Ctrl^c to quit.');
})