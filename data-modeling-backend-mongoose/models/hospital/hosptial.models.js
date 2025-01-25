import mongoose from "mongoose";


const addressSchema = new mongoose.Schema({
    addressLine1: {
        type: String,
        required: true,
        trim: true
    },
    addressLine2: {
        type: String,
        required: true,
        trim: true
        
    },
    street: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    state: {
        type: String,
        required: true,
        trim: true,
    },
    pincode: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
})


const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
     type: addressSchema,
     required:true
    }
}, { timestamps: true })



export const Hospital = mongoose.model('Hospital', hospitalSchema)