const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
        },
        SKU: {
            type: String,
        },
        category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ProductCategory",
            required: true,
        },
        inventory_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ProductInventory",
            required: true,
        },
        price: { type: Number, required: true },
        discount_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Discount",
            required: true,
        },
        deleted_at: { type: Date },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
