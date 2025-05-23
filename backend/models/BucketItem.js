const mongoose = require('mongoose');

const bucketItemSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: { type: String, required: true },
  description: String,
  travelDate: Date,
  visited: { type: Boolean, default: false },
  imageUrls: [String], // Array of URLs
  diaryEntry: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BucketItem', bucketItemSchema);
