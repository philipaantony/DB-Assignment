const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        deleted_at: { type: Date },
    },
    {
        timestamps: true,
    }
);

const ProductCategory = mongoose.model(
    "ProductCategory",
    productCategorySchema
);

module.exports = ProductCategory;
