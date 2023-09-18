"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let User = new Schema({
    firstname: {
        type: String
    },
    lastname: {
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
    appointmentsChosen: {
        type: Array
    },
    isApproved: {
        type: Boolean
    },
    isRejected: {
        type: Boolean
    },
    avatar: {
        type: String
    }
});
exports.default = mongoose_1.default.model('UserModel', User, 'users');
//# sourceMappingURL=user.js.map