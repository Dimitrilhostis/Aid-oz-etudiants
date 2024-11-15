const express = require('express');
const Event = require('../models/event');
const router = express.Router();

// Récupérer tous les événements
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ajouter un événement
router.post('/', async (req, res) => {
  const { title, description, start, end, type, user } = req.body;

  try {
    const event = new Event({ title, description, start, end, type, user });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
