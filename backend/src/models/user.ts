import mongoose from "mongoose"

const Schema=mongoose.Schema;

let User = new Schema({
    firstname: {
        type: String
    },
    lastname:{
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    adress: {
        type: String
    },
    number: {
        type: Number
    },
    email: {
        type: String
    }, 
    licenceNr: {
        type: Number
    },
    specialization: {
        type: String
    },
    branch: {
        type: String
    },
    type: {
        type: Number
    },
    appointmentsChosen :{ 
        type: Array
    },
    isApproved : {
        type : Boolean
    },
    isRejected : {
        type: Boolean
    },
    avatar: {
        type: String
    }
})

export default mongoose.model('UserModel', User, 'users')