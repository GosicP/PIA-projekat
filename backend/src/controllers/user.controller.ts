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
        let firstname = req.body.firstname
        let lastname = req.body.lastname
        let specialization = req.body.specialization
        let branch = req.body.branch
        if(firstname === '' || firstname == ''){
            firstname=null
        }
        if(lastname === '' || lastname == ''){
            lastname=null
        }
        if(specialization === '' || specialization == ''){
            specialization=null
        }
        if(branch === '' || branch == ''){
            branch=null
        }
        if(firstname!=null && lastname!=null && specialization!=null && branch!=null){
           //console.log("trazim po sva 3")
            UserModel.find({'firstname' : firstname, 'lastname' : lastname, 'specialization' : specialization, 'branch' : branch, 'type' : 1}, (err, users)=>{
                if(err) console.log(err);
                else res.json(users)
            })
        }else if(firstname!=null && lastname!=null && specialization!=null){
            UserModel.find({'firstname' : firstname, 'lastname' : lastname, 'specialization' : specialization, 'type' : 1}, (err, users)=>{
                if(err) console.log(err);
                else res.json(users)
            })
        }else if(firstname!=null && lastname!=null && branch!=null){
            UserModel.find({'firstname' : firstname, 'lastname' : lastname, 'branch' : branch, 'type' : 1}, (err, users)=>{
                if(err) console.log(err);
                else res.json(users)
            })
        }else if(firstname!=null && specialization!=null && branch!=null){
            UserModel.find({'firstname' : firstname, 'specialization' : specialization, 'branch' : branch, 'type' : 1}, (err, users)=>{
                if(err) console.log(err);
                else res.json(users)
            })
        }else if(lastname!=null && specialization!=null && branch!=null){
            UserModel.find({'lastname' : lastname, 'specialization' : specialization, 'branch' : branch, 'type' : 1}, (err, users)=>{
                if(err) console.log(err);
                else res.json(users)
            })
        }else if(firstname!=null && lastname!=null) {
            //console.log("trazim ime prezime")
            UserModel.find({'firstname' : firstname, 'lastname' : lastname, 'type' : 1}, (err, users)=>{
                if(err) console.log(err);
                else res.json(users)
            })
        }else if(firstname!=null && specialization!=null) {
            //console.log("trazim ime specijalizaciju")
            UserModel.find({'firstname' : firstname, 'specialization' : specialization, 'type' : 1}, (err, users)=>{
                if(err) console.log(err);
                else res.json(users)
            })
        }else if(firstname!=null && branch!=null){
            UserModel.find({'firstname' : firstname, 'branch' : branch, 'type' : 1}, (err, users)=>{
                if(err) console.log(err);
                else res.json(users)
            })
        }else if(lastname!=null && specialization!=null) {
            //console.log("trazim prezime specijalizaciju")
            UserModel.find({'lastname' : lastname, 'specialization' : specialization, 'type' : 1}, (err, users)=>{
                if(err) console.log(err);
                else res.json(users)
            })
        }else if(lastname!=null && branch!=null){
            UserModel.find({'lastname' : lastname, 'branch' : branch, 'type' : 1}, (err, users)=>{
                if(err) console.log(err);
                else res.json(users)
            })
        }else if(branch!=null && specialization!=null){
            UserModel.find({'branch' : branch, 'specialization' : specialization, 'type' : 1}, (err, users)=>{
                if(err) console.log(err);
                else res.json(users)
            })
        }else if(firstname!=null){
            //console.log("trazim po imenu")
            UserModel.find({'firstname' : firstname, 'type' : 1}, (err, users)=>{
                if(err) console.log(err);
                else res.json(users)
            })
            //console.log("trazim po imenu")
        }
        else if(lastname!=null){
            //console.log("trazim po prezimenu")
            UserModel.find({'lastname' : lastname, 'type' : 1}, (err, users)=>{
                if(err) console.log(err);
                else res.json(users)
            })
        }else if(specialization!=null) {
            //console.log("trazim po specijalizaciji")
            UserModel.find({'specialization' : specialization, 'type' : 1}, (err, users)=>{
                if(err) console.log(err);
                else res.json(users)
            })
        }else if(branch!=null){
            UserModel.find({'branch' : branch, 'type' : 1}, (err, users)=>{
                if(err) console.log(err);
                else res.json(users)
            })
        }
    }

    getPatient =  (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;

        UserModel.findOne({'username': username}, (err, users)=>{
            if(err) console.log(err);
            else {res.json(users)}
        })


    }
}