const User = require('../models/user');
const jwt = require('jsonwebtoken');

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ name, email, password });
    res.status(201).json({ _id: user._id, name: user.name, token: generateToken(user._id) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.json({ _id: user._id, name: user.name, token: generateToken(user._id) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
