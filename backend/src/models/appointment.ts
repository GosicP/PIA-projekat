import mongoose from "mongoose"

const Schema=mongoose.Schema;

let Appointment = new Schema({
    specializationApp: {
        type: String
    },
    AppointmentName: {
        type: String
    },
    Duration: {
        type: Number
    },
    Price : {
        type: Number
    },
    isChosen : {
        type: Boolean
    }
})

export default mongoose.model('AppointmentModel', Appointment, 'appointments')
