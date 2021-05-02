require('dotenv').config();
const mongoose = require('mongoose');


const LinksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: [{ type: String, required: true }],
    required: true
  },
  category: {
    type: String,
    enum: ['hot', 'iced'],
    required: true
  }
  // ,
  // id: {
  //   type: Number,
  //   required: true,
  //   unique: true
  // }
}, { timestamps: true });

module.exports = mongoose.model(process.env.LINKS_COLLECTION, LinksSchema);