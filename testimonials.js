const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');
const verifyToken = require('../middleware/auth');

router.get('/', async (req, res) => {
  const testimonials = await Testimonial.find().sort({ createdAt: -1 });
  res.json(testimonials);
});

router.post('/', verifyToken, async (req, res) => {
  const { author, content } = req.body;
  const newTestimonial = new Testimonial({ author, content });
  await newTestimonial.save();
  res.status(201).json(newTestimonial);
});

module.exports = router;