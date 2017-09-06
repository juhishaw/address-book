var express = require('express');
var router = express.Router();
var Contact = require('../models/contacts');

//retreving contact
router.get('/contacts', function(req, res, next) {
    Contact.find({}, function(err, contacts) {
        res.json(contacts);
    })
});

//add contact
router.post('/contact', function(req, res, nex) {
    var newContact = new Contact({
        First_Name: req.body.First_Name,
        Last_Name: req.body.Last_Name,
        Address: req.body.Address,
        Tel: req.body.Tel
    })

    newContact.save(function(err, contact) {
        if (err) {
            res.json({
                msg: 'Failed to add Contact!'
            });
        } else {
            res.json({
                msg: 'Contact added successfully!'
            });
        }
    });
});

//delete contact
router.delete('/contact/:id', function(req, res) {
    Contact.remove({
        _id: req.params.id
    }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;