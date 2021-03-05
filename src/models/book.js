const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema  = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    date_added: { type: String, required: true},
    father: { type: String, required: true},
    deleted: { type: Boolean, required: true}
});

module.exports = mongoose.model('Books', BookSchema);