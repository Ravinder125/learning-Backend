import mongoose, { Mongoose, Schema } from "mongoose";



const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        min: [6, "must be longer than 6 characters"] ,
        lowercase: true

    },
    email: {
        type: String,
        required: true,
        // lowercase: true,
        unique: true
    },
    noOfcompletedTasks: {
        required: true,
        type: Number,
        default: 0,
    },
    todos: {
        type: [],
        required: true,
    },
    totalTodos: {
        type: Number,
        required: true,
        default: 0
    }
},
{
    timestamps: true
})


export const User = mongoose.model('User', userSchema)