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

export default userRouter;