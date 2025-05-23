const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const {
  createBucketItem,
  getUserBucketItems,
  markVisited
} = require('../controllers/bucketController');

router.post('/', protect, createBucketItem);
router.get('/:userId', protect, getUserBucketItems);
router.put('/:id/visit', protect, markVisited);

module.exports = router;
