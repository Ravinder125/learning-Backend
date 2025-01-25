import mongoose from "mongoose"



const itemSchema = new mongoose.Schema({
    Product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, "Product name is required"]
    },
    count: {
        type: Number,
        default: 0,
        trim: true,
    },
})


export const Item = mongoose.model('Item', itemSchema)