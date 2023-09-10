"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
    Price: {
        type: Number
    },
    isChosen: {
        type: Boolean
    }
});
exports.default = mongoose_1.default.model('AppointmentModel', Appointment, 'appointments');
//# sourceMappingURL=appointment.js.map