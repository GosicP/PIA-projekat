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

export default userRouter;