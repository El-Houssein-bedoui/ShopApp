var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productID: {
        type: Number,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    qte: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}
);

const Product = mongoose.model('Product',productSchema)
module.exports= Product;