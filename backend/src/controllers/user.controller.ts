import express from 'express'
import UserModel from '../models/user'


export class UserController{
    login = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;

        UserModel.findOne({'username': username, 'password': password}, (err, user)=>{
            if(err) console.log(err);
            else res.json(user)
        })
    }

    register = (req: express.Request, res: express.Response)=>{
        let user = new UserModel({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: req.body.username,
            adress: req.body.adress,
            number: req.body.number,
            email: req.body.email,
            type: 0
        })

        user.save((err, resp)=>{
            if(err){ console.log(err);
            res.status(400).json({"message": "error"})
        }
            else res.json({"message": "ok"})
        })
    }

    getDoctors = (req: express.Request, res: express.Response)=>{
        UserModel.find({'type' : 1}, (err, users)=>{
            if(err) console.log(err);
            else res.json(users)
        }) //{} je za uslove
    }
}