const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving services data matrix', error: err.message });
  }
});

// POST seed helper (Use once via Postman to fill initial 6-8 mock categories if empty)
router.post('/seed', async (req, res) => {
  try {
    await Service.deleteMany({});
    const seeds = [
      { name: "Deep Home Cleaning", description: "Intense full sanitization of bedrooms, living zones, and kitchens.", price: 120, image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600" },
      { name: "Office Cleaning", description: "Premium sanitation built to maximize workplace workspace performance.", price: 250, image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=600" },
      { name: "Sofa Express", description: "Deep foam extraction removing deep stains from upholstery fabrics.", price: 65, image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600" },
      { name: "Post-Construction Clean", description: "Industrial scale vacuuming and particulate scrubbing.", price: 399, image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600" },
      { name: "Window Care", description: "Streakless squeegee crystal washing for exterior/interior glass panes.", price: 45, image: "https://images.unsplash.com/photo-1603712449988-809924848392?q=80&w=600" },
      { name: "Kitchen Sanitization", description: "Oven de-greasing and appliance steam treatment cycles.", price: 85, image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600" }
    ];
    const created = await Service.insertMany(seeds);
    res.json({ message: "Seed injection complete", services: created });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;