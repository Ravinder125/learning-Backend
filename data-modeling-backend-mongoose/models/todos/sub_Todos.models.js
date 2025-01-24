import mongoose, { model } from "mongoose";    


const subToDoSchema = new mongoose.Schema({
    isCompleted: {
        required: true,
        type: Boolean,
        default: false
    }
},{ timestamps: true })