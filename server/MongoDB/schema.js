const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb://localhost/${process.env.DATABASE}`)

const products = new mongoose.Schema({
id: {type: Number, unique: true},
name: String,
slogan: String,
description: String,
category: String,
default_price: String
})

const Product = mongoose.model('Product', products);

const features = new mongoose.Schema({
  id: {type: Number, unique: true},
  product_id: Number,
  feature: String,
  value: String,
})

const Feature = mongoose.model('Feature', features);

const styles = new mongoose.Schema({
  id: {type: Number, unique: true},
  product_id: Number,
  name: String,
  sale_price: String,
  original_price: String,
  default_style: Boolean
})

const Style = mongoose.model('Style', styles);

const photos = new mongoose.Schema({
  id: {type: Number, unique: true},
  style_id: Number,
  url: String,
  thumbnail_url: String
})

const Photo = mongoose.model('Photo', photos);

const related = new mongoose.Schema({
  id: {type: Number, unique: true},
  current_product_id: Number,
  related_product_id: Number
})

const Related = mongoose.model('Related', related);

const skus = new mongoose.Schema({
  id: {type: Number, unique: true},
  style_id: Number,
  size: String,
  quantity: Number
})

const Sku = mongoose.model('Sku', skus)