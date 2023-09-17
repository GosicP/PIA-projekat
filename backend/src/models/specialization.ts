import mongoose from "mongoose";

const Schema = mongoose.Schema

let Specialization = new Schema({
    specializationName: {
        type: String
    }
})

export default mongoose.model('SpecializationModel', Specialization, 'specializations')