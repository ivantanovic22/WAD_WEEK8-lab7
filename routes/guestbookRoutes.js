const express = require('express');
const controller = require('../controller/guestbookController.js');
const router = express.Router();
// router.get('/guestbook', controller.entries_list);
router.get('/', controller.landing_page );
router.get('/about', function (req, res) {
    res.redirect('/about.html');
})
router.use(function (req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
})
router.use(function (err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
})
router.get('/peter', controller.peters_entries);
module.exports = router;