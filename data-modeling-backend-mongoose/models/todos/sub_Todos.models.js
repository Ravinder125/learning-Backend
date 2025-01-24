import mongoose, { model } from "mongoose";    


const subToDoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    isCompleted: {
        required: true,
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{ timestamps: true })


export const SubToDos = mongoose.model('SubToDos', subToDoSchema);