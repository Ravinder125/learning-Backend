import mongoose from "mongoose";





const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: [32, 'Name is too long'],
        minlength: [3, 'Name is too short'],
    },
    email: {
        unique: true,
        type: String,
        required: true,
        trim: true,

    },
    password: {
        type: String,
        required: true,
        minglength: [8, "Password must be at least 8 characters long"],
        maxlength: [32, "Password must be less than 32 characters long"],

    },
    role: {
        type: String,
        enum: ["CUSTOMER", "ADMIN", "ROOTE"],
        default: 'CUSTOMER',
    },
    favourites: {
        items: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item'
            }
        ],
        count: {
            type: Number,
            default: 1
        },
        totalValue: {
            type: Number,
            default: 0
        }
    },
    cart: {
        items:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item',
            }
        ],
        count: {
            type: Number,
            default: 1
        },
        totalValue: {
            type: Number,
            default: 0,
        }
    },

    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
    }

}, { timestamps: true })



export const User = mongoose.model('User', userSchema)

