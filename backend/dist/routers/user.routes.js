"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const userRouter = express_1.default.Router();
userRouter.route('/login').post((req, res) => new user_controller_1.UserController().login(req, res));
userRouter.route('/register').post((req, res) => new user_controller_1.UserController().register(req, res));
userRouter.route('/getDoctors').get((req, res) => new user_controller_1.UserController().getDoctors(req, res));
userRouter.route('/findUsername').get((req, res) => new user_controller_1.UserController().findUsername(req, res));
userRouter.route('/changePassword').post((req, res) => new user_controller_1.UserController().changePassword(req, res));
userRouter.route('/searchDoctors').post((req, res) => new user_controller_1.UserController().searchDoctors(req, res));
userRouter.route('/getPatient').post((req, res) => new user_controller_1.UserController().getPatient(req, res));
userRouter.route('/getDoctor').post((req, res) => new user_controller_1.UserController().getDoctor(req, res));
userRouter.route('/getAppointments').post((req, res) => new user_controller_1.UserController().getAppointments(req, res));
userRouter.route('/scheduleAppointment').post((req, res) => new user_controller_1.UserController().scheduleAppointment(req, res));
userRouter.route('/findDoctorAppointments').post((req, res) => new user_controller_1.UserController().findDoctorAppointments(req, res));
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map