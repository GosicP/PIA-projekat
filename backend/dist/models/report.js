"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Report = new Schema({
    usernamePatient: {
        type: String
    },
    usernameDoctor: {
        type: String
    },
    firstnameDoctor: {
        type: String
    },
    lastnameDoctor: {
        type: String
    },
    time: {
        type: String
    },
    date: {
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
    diagnosis: {
        type: String
    },
    therapy: {
        type: String
    },
    nextAppDate: {
        type: String
    }
});
exports.default = mongoose_1.default.model('ReportModel', Report, 'reports');
//# sourceMappingURL=report.js.map