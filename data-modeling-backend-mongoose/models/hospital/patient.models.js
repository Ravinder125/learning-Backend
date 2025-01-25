import mongoose from "mongoose";



const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    diagnosedWith: {
        type: String,
        required: true,
    },
    medicalRecord: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MedicalRecord',
        required: true,
    }
}, { timestamps: true })



export const Patient = mongoose.model('Patient', patientSchema)