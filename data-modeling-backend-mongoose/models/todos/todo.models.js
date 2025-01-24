import mongoose, { mongo } from "mongoose";



const todoSchema = new mongoose.Schema({
    titel: {
        type: String,
        required: true,
        unique: [true, 'title must be different from other todo title'],
        min: [2, 'title must be longer than 2 characters'],
        max: [10, 'title must be equal or shorter than 10']

    },
    subToDos: {
        type: [],
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
})


export const Todo = mongoose.model('Todo', todoSchema);