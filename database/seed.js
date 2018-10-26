const db  = require('./index.js');
const Reviews = require('./Reviews.js');
const faker = require('faker');

const generateRandomReview=()=> {
  return {
    author: faker.name.firstName(),
    avatarUrl: faker.image.avatar(),
    reviewText: faker.lorem.sentences(10+Math.floor(Math.random()*3),Math.floor(Math.random()*3)+7),
    reply: (Math.random()<.1)? generateRandomReview(): {},
    ratings: {
      Accuracy: Math.floor(Math.random()*2)+3,
      Communication: Math.floor(Math.random()*2)+3,
      Cleanliness: Math.floor(Math.random()*2)+3,
      Location: Math.floor(Math.random()*2)+3,
      Checkin: Math.floor(Math.random()*2)+3,
      Value: Math.floor(Math.random()*2)+3
      }
    };
};

const qtyRandomReviews = 21; // change to 10^3 scale on deploy
const sampleReviewsStore = [];

for (var i =0;i< qtyRandomReviews;i++){
  sampleReviewsStore.push(generateRandomReview());
}

const insertSampleReviews =()=> {
  Reviews.create(sampleReviewsStore)
    .then( () => db.disconnect() );
};

insertSampleReviews();