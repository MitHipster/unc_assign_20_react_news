const mongoose = require('mongoose');
// Create schema class
const Schema = mongoose.Schema;

// Define remark schema
const RemarkSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  comment: {
    type: String,
    trim: true,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

// Create model with schema
const Remark = mongoose.model('Remark', RemarkSchema);

// Export the model
module.exports = Remark;
