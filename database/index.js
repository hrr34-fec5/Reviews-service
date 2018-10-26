const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/Reviews';

const db = mongoose.connect(mongoUri);

module.exports = db;
