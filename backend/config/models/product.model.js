import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      required: true
   },
   image: {
      type: String,
      required: true
   },
}, {
   timestamps: true // created at, updated at.
});


// tells mongoose to create a model / collection called product and use the schema provided for the product

const Product = mongoose.model("Product", productSchema);

export default Product;