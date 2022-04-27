const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
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
    size: [
      {
        type: [String],
        required: [true, 'A product must have sizes'],
      },
    ],
    colors: [
      {
        type: [String],
        required: [true, 'A product must have colors'],
      },
    ],
    slug: {
      type: String,
      default: 'ao-thun-dinosaur-01',
      // required: [true, 'A slug must be provided']
    },
    categorySlug: {
      type: String,
      default: 'ao-thun',
      // required: [true, 'A slug must be provided']
    },
    price: {
      type: Number,
      required: [true, 'A product must have a price'],
    },
    description: {
      type: String,
      trim: true,
    },
    images: {
      type: [String],
      default: ['product-01-1', 'product-01-2'],
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

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
