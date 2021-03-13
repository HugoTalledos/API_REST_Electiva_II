const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    author: { type: String, required: true },
    gender: { type: String, required: false },
    editorial: { type: String, required: false },
    deleted: { type: Boolean, required: false, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
BookSchema.set("collection", "Book");

module.exports = mongoose.model("Book", BookSchema);
