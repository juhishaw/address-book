var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    First_Name: {
        type: String,
        required: true
    },
    Last_Name: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Tel: {
        type: Number,
        required: true
    }
});

var Contact = module.exports = mongoose.model('Contact', contactSchema);
