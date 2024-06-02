const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true, min: 5, max: 100 },
  discription: { type: String, required: true, min: 10, max: 10000 },
  tags: { type: [String], default: ["general"] },
  upvote: { type: Number },
  downvote: { type: Number },
});

// Blog collection you follow blogSchema.
module.exports = mongoose.model("Blog", blogSchema);
