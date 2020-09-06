const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title is required'],
  },
  description: {
    type: String,
    required: [true, 'description'],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Posts', PostSchema);
