const mongoose = require("mongoose");

const goodsSchema = new mongoose.Schema({
  wordID: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String
  },
});

module.exports = mongoose.model("Goods", goodsSchema);