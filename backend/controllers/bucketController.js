const BucketItem = require('../models/BucketItem');

exports.createBucketItem = async (req, res) => {
  try {
    const item = await BucketItem.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserBucketItems = async (req, res) => {
  try {
    const { userId } = req.params;
    const items = await BucketItem.find({ userId });
    res.json(items);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.markVisited = async (req, res) => {
  try {
    const { id } = req.params;
    const { imageUrls, diaryEntry } = req.body;
    const updatedItem = await BucketItem.findByIdAndUpdate(
      id,
      { visited: true, imageUrls, diaryEntry },
      { new: true }
    );
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
