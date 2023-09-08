"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = __importDefault(require("../models/user"));
const appointment_1 = __importDefault(require("../models/appointment"));
const scheduled_1 = __importDefault(require("../models/scheduled"));
class UserController {
    constructor() {
        this.login = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            user_1.default.findOne({ 'username': username, 'password': password }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.register = (req, res) => {
            let user = new user_1.default({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.username,
                password: req.body.password,
                adress: req.body.adress,
                number: req.body.number,
                email: req.body.email,
                type: 0
            });
            let passwordconf = req.body.passwordconf;
            user.save((err, resp) => {
                if (err || user.password !== passwordconf) {
                    console.log(err);
                    res.status(400).json({ "message": "error" });
                }
                else if (user.password !== passwordconf) {
                    res.json({ "message": "notconf" });
                }
                else
                    res.json({ "message": "ok" });
            });
        };
        this.changePassword = (req, res) => {
            let password = req.body.password;
            let username = req.body.username;
            user_1.default.findOneAndUpdate({ 'username': username }, { $set: { 'password': password } }, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json({ message: "changed" });
            });
        };
        this.getDoctors = (req, res) => {
            user_1.default.find({ 'type': 1 }, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json(users);
            }); //{} je za uslove
        };
        this.findUsername = (req, res) => {
            user_1.default.find({}, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json(users);
            });
        };
        this.searchDoctors = (req, res) => {
            let firstname = req.body.firstname;
            let lastname = req.body.lastname;
            let specialization = req.body.specialization;
            let branch = req.body.branch;
            if (firstname === '' || firstname == '') {
                firstname = null;
            }
            if (lastname === '' || lastname == '') {
                lastname = null;
            }
            if (specialization === '' || specialization == '') {
                specialization = null;
            }
            if (branch === '' || branch == '') {
                branch = null;
            }
            if (firstname != null && lastname != null && specialization != null && branch != null) {
                //console.log("trazim po sva 3")
                user_1.default.find({ 'firstname': firstname, 'lastname': lastname, 'specialization': specialization, 'branch': branch, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (firstname != null && lastname != null && specialization != null) {
                user_1.default.find({ 'firstname': firstname, 'lastname': lastname, 'specialization': specialization, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (firstname != null && lastname != null && branch != null) {
                user_1.default.find({ 'firstname': firstname, 'lastname': lastname, 'branch': branch, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (firstname != null && specialization != null && branch != null) {
                user_1.default.find({ 'firstname': firstname, 'specialization': specialization, 'branch': branch, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (lastname != null && specialization != null && branch != null) {
                user_1.default.find({ 'lastname': lastname, 'specialization': specialization, 'branch': branch, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (firstname != null && lastname != null) {
                //console.log("trazim ime prezime")
                user_1.default.find({ 'firstname': firstname, 'lastname': lastname, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (firstname != null && specialization != null) {
                //console.log("trazim ime specijalizaciju")
                user_1.default.find({ 'firstname': firstname, 'specialization': specialization, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (firstname != null && branch != null) {
                user_1.default.find({ 'firstname': firstname, 'branch': branch, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (lastname != null && specialization != null) {
                //console.log("trazim prezime specijalizaciju")
                user_1.default.find({ 'lastname': lastname, 'specialization': specialization, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (lastname != null && branch != null) {
                user_1.default.find({ 'lastname': lastname, 'branch': branch, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (branch != null && specialization != null) {
                user_1.default.find({ 'branch': branch, 'specialization': specialization, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (firstname != null) {
                //console.log("trazim po imenu")
                user_1.default.find({ 'firstname': firstname, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
                //console.log("trazim po imenu")
            }
            else if (lastname != null) {
                //console.log("trazim po prezimenu")
                user_1.default.find({ 'lastname': lastname, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (specialization != null) {
                //console.log("trazim po specijalizaciji")
                user_1.default.find({ 'specialization': specialization, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (branch != null) {
                user_1.default.find({ 'branch': branch, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
        };
        this.getPatient = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            user_1.default.findOne({ 'username': username }, (err, users) => {
                if (err)
                    console.log(err);
                else {
                    res.json(users);
                }
            });
        };
        this.getDoctor = (req, res) => {
            let username = req.body.username;
            user_1.default.findOne({ 'username': username }, (err, users) => {
                if (err)
                    console.log(err);
                else {
                    res.json(users);
                }
            });
        };
        this.getAppointments = (req, res) => {
            let specialization = req.body.specialization;
            appointment_1.default.find({ 'specializationApp': specialization }, (err, appts) => {
                if (err)
                    console.log(err);
                else {
                    res.json(appts);
                }
            });
        };
        this.scheduleAppointment = (req, res) => {
            let appointment = new scheduled_1.default({
                usernamePatient: req.body.usernamePatient,
                usernameDoctor: req.body.usernameDoctor,
                appointmentName: req.body.appointmentName,
                time: req.body.time,
                date: req.body.date
            });
            appointment.save((err, resp) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ "message": "error" });
                }
                else
                    res.json({ "message": "ok" });
            });
        };
        this.findDoctorAppointments = (req, res) => {
            let usernameDoctor = req.body.usernameDoctor;
            scheduled_1.default.find({ 'usernameDoctor': usernameDoctor }, (err, docs) => {
                if (err)
                    console.log(err);
                else {
                    res.json(docs);
                }
            });
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map