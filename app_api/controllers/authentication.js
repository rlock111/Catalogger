const mongoose = require('mongoose');
const User = mongoose.model('User');

const register = async function (req, res) {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: "All fields required" });
  }
  try {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password
    });
    res.status(201).json({ _id: user._id, email: user.email });
  } catch (err) {
    res.status(400).json({ message: "Error registering user", error: err.message });
  }
};

const login = async function (req, res) {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: "All fields required" });
  }
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.password !== req.body.password) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  register,
  login
};
