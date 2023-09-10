import mongoose from "mongoose";

const Schema = mongoose.Schema

let Report = new Schema({
    usernamePatient: {
        type: String
    },
    usernameDoctor: {
        type: String
    },
    time : {
        type: String
    },
    date : {
        type: String
    },
    specialization: {
        type: String
    },
    appointmentName: {
        type: String
    },
    reasonCome: {
        type: String
    },
    Diagnosis : {
        type: String
    },
    Therapy : {
        type: String
    },
    nextAppDate : {
        type: String
    }
})

export default mongoose.model('ReportModel', Report, 'reports')

