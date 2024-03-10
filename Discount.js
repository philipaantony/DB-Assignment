const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
        },
        discount_percent: {
            type: Number,
            required: true,
        },
        active: {
            type: Boolean,
            default: true,
        },
        deleted_at: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

const Discount = mongoose.model("Discount", discountSchema);

module.exports = Discount;
