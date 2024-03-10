const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Products");
}
main()
  .then(console.log("connection successful"))
  .catch((err) => console.log(err));

//create product category schema
const productCategorySchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  modified_at: {
    type: Date,
    default: Date.now(),
  },
  deleted_at: {
    type: Date,
    default: null,
  },
});
//create category model
const Category = mongoose.model("Category", productCategorySchema);

//create product-inventory schema
const productInventorySchema = new mongoose.Schema({
  _id: {
    type: Number,
  },
  quantity: {
    type: Number,
    required: true,
  },
  deleted_at: {
    type: Date,
    default: null,
  },
});
//create inventory model
const Inventory = mongoose.model("Inventory", productInventorySchema);

//create discount schema
const productDiscountSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  discount_present: {
    type: Number,
  },
  active: {
    type: Boolean,
  },
  deleted_at: {
    type: Date,
    default: null,
  },
});

//create discount model
const Discount = mongoose.model("Discount", productDiscountSchema);

//create product schema
const productSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  SKU: {
    type: String,
    required: true,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  inventory_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Invetory",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Discount",
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  modified_at: {
    type: Date,
    default: Date.now(),
  },
  deleted_at: {
    type: Date,
    default: null,
  },
});
//create product model
const Product = mongoose.model("Product", productSchema);
