const guestbookDAO = require('../models/guestbookModel');
const db = new guestbookDAO();
// exports.entries_list = function (req, res) {
//     res.send('<h1>Guestbook Messages</h1><p>Not yet implemented: will show a list of guest book entries.</p>');
// }
exports.landing_page = function (req, res) {
    res.send('<h1>Welcome to the guestbook application.</h1>');
}
exports.landing_page = function(req, res) {
    res.render("entries", {
        'title': 'Guest Book',
        'messages': [ {
        'subject' : 'Good day out',
        'contents' :'We had a really good time visiting the museum.'
        },
        {
        'subject' : 'Good place to be on a rainy day.',
        'contents' : 'Nice paintings too.'
        
        },
        {
        'subject' : 'Yummy',
        'contents': 'Good food :-).'
        }
        ]
        }); 
    }
exports.new_entry = function (req, res) {
    res.send('<h1>Not yet implemented: show a new entry page.</h1>');
}
exports.entries_list = function(req, res) {
    res.send('<h1>Not yet implemented: show a list of guest book entries.</h1>');
    db.getAllEntries();
}
exports.peters_entries = function(req, res) {
    res.send('<h1>Processing Peter\'s Entries, see terminal</h1>');
    db.getPetersEntries();
    }
