import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    addressToDeliver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Address is required',]
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true,
    }],
    count: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELED", "DELIVERED"],
        default: "PENDING"
    },
    totalValue: {
        type: Number,
        default: 0
    }
    

}, { timestamps: true })


export const Order = mongoose.model('Order', orderSchema)