const mongoose = require('mongoose');

const sliderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Product must have a name/title'],
      unique: true,
      trim: true,
      maxlength: [
        60,
        'A product name must have less or equal then 40 characters',
      ],
      minlength: [
        10,
        'A product name must have more or equal then 10 characters',
      ],
    },
    img: {
      type: String,
      required: [true, 'A product must have an image'],
    },

    path: {
      type: String,
      required: [true, 'A product must have path'],
    },

    color: {
      type: String,
      required: [true, 'A slug must be provided'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Slider = mongoose.model('Slider', sliderSchema);

module.exports = Slider;
