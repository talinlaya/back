const mongoose = require("mongoose");
const ActicleSckima = new mongoose.Schema({
  image: String,
  title: String,
  body: String,
});

module.exports = mongoose.model("post", ActicleSckima);
