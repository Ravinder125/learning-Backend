import mongoose from "mongoose";



const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        }
    ]
}, { timestamps: true })


const Category = mongoose.model('Category', categorySchema);