const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  originalFilename: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  password: String,
  downloadCount: { type: Number, required: true, default: 0 },
});

exports.File = mongoose.model("File", fileSchema);
