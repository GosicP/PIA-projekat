import mongoose from "mongoose"

const Schema = mongoose.Schema

let Scheduled = new Schema({
    usernamePatient: {
        type: String
    },
    usernameDoctor: {
        type: String
    },
    appointmentName: {
        type: String
    },
    time : {
        type: String
    },
    date : {
        type: String
    }
})

export default mongoose.model('ScheduledModel', Scheduled, 'scheduled-appointments')