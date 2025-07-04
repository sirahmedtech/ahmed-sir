const mongoose = require('mongoose');
const TestimonialSchema = new mongoose.Schema({
  author: { type: String, required: true },
  content: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', TestimonialSchema);