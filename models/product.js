const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide product name"],
    trim: true,
    maxlength: [120, "Product name should not be more than 120 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please provide product price"],
    maxlength: [5, "Product price should not be more than 5 digits"],
  },
  description: {
    type: String,
    required: [true, "Please provide product description"],
  },
  photos: [
    {
      id: {
        type: String,
        required: true,
      },
      secure_url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [
      true,
      "Please select catrgory from - short-sleeves, long-sleeves, sweat-sleeves, hoodies",
    ],
    enum: {
      values: ["shortsleeves", "longsleeves", "sweatsleeves", "hoodies"],
      message:
        "Please select catrgory ONLY from - short-sleeves, long-sleeves, sweat-sleeves and hoodies",
    },
  },
  brand: {
    type: String,
    require: [true, "Please add brand for clothing"],
  },
  stock: {
    type: Number,
    required: [true, "please add number in stock"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numberofReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
