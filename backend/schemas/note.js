const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  title: String,
  content: { type: String },
  isArchived: { type: Boolean, default: false },
  dateOfCreation: { type: Date, default: Date.now },
  dateOfModification: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Note", noteSchema);
