const mongoose = require('mongoose');
const db = require('./index.js');
const faker = require('faker');

mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  author: String,
  avatarUrl: String,
  reviewText: String,
  reply: Object,
  ratings: {
    Accuracy: Number,
    Communication: Number,
    Cleanliness: Number,
    Location: Number,
    Checkin: Number,
    Value: Number
  }
},
  {
    timestamps: true
  }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
