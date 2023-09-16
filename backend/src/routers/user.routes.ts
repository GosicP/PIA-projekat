import express from 'express'
import { UserController } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.route('/login').post(
    (req, res)=>new UserController().login(req, res)
)
    
userRouter.route('/register').post(
    (req, res)=>new UserController().register(req, res)
)

userRouter.route('/getDoctors').get(
    (req, res)=>new UserController().getDoctors(req, res)
)

userRouter.route('/findUsername').get(
    (req, res)=>new UserController().findUsername(req, res)
)

userRouter.route('/changePassword').post(
    (req, res)=>new UserController().changePassword(req, res)
)

userRouter.route('/searchDoctors').post(
    (req, res)=>new UserController().searchDoctors(req, res)
)

userRouter.route('/getPatient').post(
    (req, res)=>new UserController().getPatient(req, res)
)

userRouter.route('/getDoctor').post(
    (req, res)=>new UserController().getDoctor(req, res)
)

userRouter.route('/getAppointments').post(
    (req, res)=>new UserController().getAppointments(req, res)
)

userRouter.route('/scheduleAppointment').post(
    (req, res)=>new UserController().scheduleAppointment(req, res)
)

userRouter.route('/findDoctorAppointments').post(
    (req,res) => new UserController().findDoctorAppointments(req, res)
)

userRouter.route('/getScheduledAppointments').post(
    (req, res) => new UserController().getScheduledAppointments(req, res)
)

userRouter.route('/findScheduledAppointmentAndDelete').post(
    (req, res) => new UserController().findScheduledAppointmentAndDelete(req, res)
)

userRouter.route('/findPatientAppointments').post(
    (req,res) => new UserController().findPatientAppointments(req, res)
)

userRouter.route('/changeAppointmentChoice').post(
    (req, res) => new UserController().changeAppointmentChoice(req, res)
)

userRouter.route('/removeAppointment').post(
    (req, res) => new UserController().removeAppointment(req, res)
)

userRouter.route('/getReports').post(
    (req, res) => new UserController().getReports(req, res)
)

userRouter.route('/addReport').post(
    (req, res) => new UserController().addReport(req, res)
)

userRouter.route('/findAppointmentFull').post(
    (req, res) => new UserController().findAppointmentFull(req, res)
)

userRouter.route('/addAppointment').post(
    (req, res) => new UserController().addAppointment(req, res)
)

userRouter.route('/getPatients').get(
    (req, res) => new UserController().getPatients(req, res)
)

userRouter.route('/updateUser').post(
    (req, res) => new UserController().updateUser(req, res)
)

userRouter.route('/updateDoctor').post(
    (req, res) => new UserController().updateDoctor(req, res)
)

export default userRouter;