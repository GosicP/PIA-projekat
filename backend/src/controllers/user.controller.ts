import express from 'express'
import UserModel from '../models/user'
import { MongoClient } from 'mongodb';

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
            password: req.body.password,
            adress: req.body.adress,
            number: req.body.number,
            email: req.body.email,
            type: 0
        })
        
        let passwordconf = req.body.passwordconf;

        user.save((err, resp)=>{
            if(err || user.password!==passwordconf){ console.log(err);
            res.status(400).json({"message": "error"})
        }else if(user.password!==passwordconf){
             res.json({"message" : "notconf"})
        }else res.json({"message": "ok"})
        })
    }

    changePassword = (req: express.Request, res: express.Response)=>{

        let password = req.body.password
        let username = req.body.username 

      
        UserModel.findOneAndUpdate({'username' : username}, {$set: {'password' : password}}, (err, users)=>{
            if(err) console.log(err);
            else res.json({message : "changed"})
        })
    }

    getDoctors = (req: express.Request, res: express.Response)=>{
        UserModel.find({'type' : 1}, (err, users)=>{
            if(err) console.log(err);
            else res.json(users)
        }) //{} je za uslove
    }

    findUsername = (req: express.Request, res: express.Response)=>{
        UserModel.find({}, (err, users)=>{
            if(err) console.log(err);
            else res.json(users)
        })
    }

    searchDoctors =  (req: express.Request, res: express.Response)=>{
        
    }

}