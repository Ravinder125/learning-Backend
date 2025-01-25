import mongoose from "mongoose";


const favouriteSchema = new mongoose.Schema({
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,

        }
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true })



export const Favourite = mongoose.model('Favourite', favouriteSchema)