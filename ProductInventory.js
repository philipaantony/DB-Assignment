const mongoose = require('mongoose');

const productInventorySchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    deleted_at: {
        type: Date
    },
}, {
    timestamps: true,
});

const ProductInventory = mongoose.model('ProductInventory', productInventorySchema);

module.exports = ProductInventory;
