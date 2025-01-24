import mongoose, { mongo } from "mongoose";



const todoSchema = new mongoose.Schema({
    titel: {
        type: String,
        required: true,
        unique: [true, 'title must be different from other todo title']

    },
    subToDos: {
        type: [],
        required: true,
    },
    isComleted: {
        type: Boolean,
        default: false,
        required: true
    }
},{})