"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
    time: {
        type: String
    },
    date: {
        type: String
    }
});
exports.default = mongoose_1.default.model('ScheduledModel', Scheduled, 'scheduled-appointments');
//# sourceMappingURL=scheduled.js.map