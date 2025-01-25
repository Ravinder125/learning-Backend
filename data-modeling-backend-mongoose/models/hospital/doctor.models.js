import mongoose from "mongoose";

const doctorSchmema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    specialistOf: {
        type: String,
        required: true
    },
    qualifications: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["MALE", "FEMAL", "OTHER"],
        required: true,
    },
    experienceInYears: {
        type: Number,
        default: 0
    },
    worksInHospital: {
        hospitals:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Hospital',
                required: true,

            }
        ],
        required: true,
    },
    salary: {
        type: String,
        required: true,

    },
    worksInHourInAHosptial: [
        {
            hospital: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Hospital'
            },
            type: Number,
            default: 0,

        }
    ]
    
}, { timestamps: true})



export const Doctor = mongoose.Schema('Doctor', doctorSchmema)