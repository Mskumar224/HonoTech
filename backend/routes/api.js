const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

module.exports = router;