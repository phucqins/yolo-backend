const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./../../models/productModel');
const User = require('./../../models/userModel');
const Slider = require('./../../models/sliderModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/products.json`, 'utf-8')
);

const slider = JSON.parse(fs.readFileSync(`${__dirname}/slider.json`, 'utf-8'));

const importData = async () => {
  try {
    await Product.create(products);
    await Slider.create(slider);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Slider.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
