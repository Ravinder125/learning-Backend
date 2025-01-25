import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name should be provided'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'product should be described'],
        trim: true,
    },
    modelNum: {
        type: String,
        required: [true, 'Model number is requird'],
        trim: true,
        unique: true,
    },
    price: {
        type: Number,
        required: [true, 'product price is required'],
        trim: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    rating: {
        rate: {
            type: Number,
            default: 0,
            required: true, 
            trim: true,
        },
        count: Number,
        trim: true,
    }
}, { timestamps: true });

export const Product = mongoose.model('Product', productSchema);