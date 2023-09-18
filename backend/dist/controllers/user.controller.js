"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = __importDefault(require("../models/user"));
const appointment_1 = __importDefault(require("../models/appointment"));
const scheduled_1 = __importDefault(require("../models/scheduled"));
const report_1 = __importDefault(require("../models/report"));
const specialization_1 = __importDefault(require("../models/specialization"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
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
                type: 0,
                isApproved: false,
                isRejected: false,
                avatar: req.body.avatar
            });
            let profilePic = user.avatar;
            if (!profilePic) {
                const pathPic = path_1.default.join(__dirname, '../../../frontend/app/src/assets/default-picture.jpg');
                profilePic = fs_1.default.readFileSync(pathPic, 'base64');
            }
            user.avatar = profilePic;
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
        this.getScheduledAppointments = (req, res) => {
            let usernamePatient = req.body.usernamePatient;
            scheduled_1.default.find({ 'usernamePatient': usernamePatient }, (err, pats) => {
                if (err)
                    console.log(err);
                else {
                    res.json(pats);
                }
            });
        };
        this.findScheduledAppointmentAndDelete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let usernamePatient = req.body.usernamePatient;
            let usernameDoctor = req.body.usernameDoctor;
            let appointmentName = req.body.appointmentName;
            let time = req.body.time;
            let date = req.body.date;
            scheduled_1.default.deleteOne({ 'usernamePatient': usernamePatient, 'usernameDoctor': usernameDoctor, 'appointmentName': appointmentName, 'time': time, 'date': date }, (err, resp) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ "message": "error" });
                }
                else
                    res.json({ "message": "ok" });
            });
        });
        this.findPatientAppointments = (req, res) => {
            let usernamePatient = req.body.usernamePatient;
            scheduled_1.default.find({ 'usernamePatient': usernamePatient }, (err, docs) => {
                if (err)
                    console.log(err);
                else {
                    res.json(docs);
                }
            });
        };
        this.changeAppointmentChoice = (req, res) => {
            let usernameDoctor = req.body.usernameDoctor;
            let appointment = {
                specializationApp: req.body.specializationApp,
                AppointmentName: req.body.AppointmentName,
                Duration: req.body.Duration,
                Price: req.body.Price,
                isChosen: req.body.isChosen
            };
            // Check if the appointment already exists for the given doctor
            user_1.default.findOne({ 'username': usernameDoctor, 'appointmentsChosen': { $elemMatch: appointment } }, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    if (result) {
                        // Appointment already exists
                        res.json({ message: "Appointment already exists" });
                    }
                    else {
                        // Appointment doesn't exist, add it to the array
                        user_1.default.findOneAndUpdate({ 'username': usernameDoctor }, { $push: { 'appointmentsChosen': appointment } }, (err, users) => {
                            if (err) {
                                console.log(err);
                            }
                            else if (users) {
                                res.json({ message: "Appointment added" });
                            }
                            else {
                                res.status(404).json({ message: "User not found or appointment not updated" });
                            }
                        });
                    }
                }
            });
        };
        this.removeAppointment = (req, res) => {
            let usernameDoctor = req.body.usernameDoctor;
            let appointment = {
                specializationApp: req.body.specializationApp,
                AppointmentName: req.body.AppointmentName,
                //Duration: req.body.Duration,
                //Price: req.body.Price,
                isChosen: req.body.isChosen
            };
            // Remove the appointment from the array
            user_1.default.findOneAndUpdate({ 'username': usernameDoctor }, { $pull: { 'appointmentsChosen': appointment } }, { new: true }, (err, users) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: "An error occurred while removing the appointment." });
                }
                else {
                    if (users) {
                        res.json({ message: "Appointment removed" });
                    }
                    else {
                        res.json({ message: "Doctor not found" });
                    }
                }
            });
        };
        this.getReports = (req, res) => {
            let usernamePatient = req.body.usernamePatient;
            report_1.default.find({ 'usernamePatient': usernamePatient }, (err, docs) => {
                if (err)
                    console.log(err);
                else {
                    res.json(docs);
                }
            });
        };
        this.addReport = (req, res) => {
            let report = new report_1.default({
                usernamePatient: req.body.usernamePatient,
                usernameDoctor: req.body.usernameDoctor,
                firstnameDoctor: req.body.firstnameDoctor,
                lastnameDoctor: req.body.lastnameDoctor,
                time: req.body.time,
                date: req.body.date,
                specialization: req.body.specialization,
                appointmentName: req.body.appointmentName,
                reasonCome: req.body.reasonCome,
                diagnosis: req.body.diagnosis,
                therapy: req.body.therapy,
                nextAppDate: req.body.nextAppDate
            });
            report.save((err, resp) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ "message": "error" });
                }
                else
                    res.json({ "message": "ok" });
            });
        };
        this.findAppointmentFull = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let usernamePatient = req.body.usernamePatient;
            let usernameDoctor = req.body.usernameDoctor;
            let appointmentName = req.body.appointmentName;
            let time = req.body.time;
            let date = req.body.date;
            report_1.default.findOne({ 'usernamePatient': usernamePatient, 'usernameDoctor': usernameDoctor, 'appointmentName': appointmentName, 'time': time, 'date': date }, (err, resp) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ "message": "not ok" });
                }
                else {
                    if (resp) {
                        // Report found
                        res.json({ "message": "ok" });
                    }
                    else {
                        // Report not found
                        res.json({ "message": "not ok" });
                    }
                }
            });
        });
        this.addAppointment = (req, res) => {
            let appointment = new appointment_1.default({
                specializationApp: req.body.specialization,
                AppointmentName: req.body.appointmentName,
                Duration: req.body.appointmentDuration,
                Price: req.body.appointmentPrice,
                isChosen: "true",
                isApproved: req.body.isApproved
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
        this.getPatients = (req, res) => {
            user_1.default.find({ 'type': 0 }, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json(users);
            }); //{} je za uslove
        };
        this.updateUser = (req, res) => {
            let username = req.body.username;
            let firstname = req.body.firstname;
            let lastname = req.body.lastname;
            let adress = req.body.adress;
            let email = req.body.email;
            let number = req.body.number;
            let avatar = req.body.avatar;
            let profilePic = avatar;
            if (!profilePic) {
                const pathPic = path_1.default.join(__dirname, '../../../frontend/app/src/assets/default-picture.jpg');
                profilePic = fs_1.default.readFileSync(pathPic, 'base64');
            }
            avatar = profilePic;
            user_1.default.findOneAndUpdate({ 'username': username }, { $set: { 'firstname': firstname, 'lastname': lastname, 'adress': adress,
                    'email': email, 'number': number, 'avatar': avatar } }, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json({ message: "changed" });
            });
        };
        this.updateDoctor = (req, res) => {
            let username = req.body.username;
            let firstname = req.body.firstname;
            let lastname = req.body.lastname;
            let adress = req.body.adress;
            let email = req.body.email;
            let number = req.body.number;
            let specialization = req.body.specialization;
            let branch = req.body.branch;
            let licenceNr = req.body.licenceNr;
            let avatar = req.body.avatar;
            let profilePic = avatar;
            if (!profilePic) {
                const pathPic = path_1.default.join(__dirname, '../../../frontend/app/src/assets/default-picture.jpg');
                profilePic = fs_1.default.readFileSync(pathPic, 'base64');
            }
            avatar = profilePic;
            user_1.default.findOneAndUpdate({ 'username': username }, { $set: { 'firstname': firstname, 'lastname': lastname, 'adress': adress,
                    'email': email, 'number': number, 'specialization': specialization,
                    'branch': branch, 'licenceNr': licenceNr, 'avatar': avatar } }, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json({ message: "changed" });
            });
        };
        this.deleteUser = (req, res) => {
            let username = req.body.username;
            user_1.default.deleteOne({ 'username': username }, (err, resp) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ "message": "error" });
                }
                else
                    res.json({ "message": "ok" });
            });
        };
        this.registerDoctor = (req, res) => {
            let user = new user_1.default({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.username,
                password: req.body.password,
                adress: req.body.adress,
                number: req.body.number,
                email: req.body.email,
                specialization: req.body.specialization,
                branch: req.body.branch,
                licenceNr: req.body.licenceNr,
                type: 1,
                isApproved: true,
                isRejected: false,
                avatar: req.body.avatar
            });
            let profilePic = user.avatar;
            if (!profilePic) {
                const pathPic = path_1.default.join(__dirname, '../../../frontend/app/src/assets/default-picture.jpg');
                profilePic = fs_1.default.readFileSync(pathPic, 'base64');
            }
            user.avatar = profilePic;
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
        this.findPendingRequests = (req, res) => {
            user_1.default.find({ 'isApproved': false, 'isRejected': false }, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json(users);
            });
        };
        this.approveUser = (req, res) => {
            let username = req.body.username;
            user_1.default.findOneAndUpdate({ 'username': username }, { $set: { 'isApproved': true, 'isRejected': false } }, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json({ message: "changed" });
            });
        };
        this.rejectUser = (req, res) => {
            let username = req.body.username;
            user_1.default.findOneAndUpdate({ 'username': username }, { $set: { 'isApproved': false, 'isRejected': true } }, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json({ message: "changed" });
            });
        };
        this.getSpecializations = (req, res) => {
            specialization_1.default.find({}, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json(users);
            });
        };
        this.getAppointmentsWaiting = (req, res) => {
            appointment_1.default.find({ 'isApproved': false }, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json(users);
            });
        };
        this.approveAppointment = (req, res) => {
            let specializationApp = req.body.specialization;
            let AppointmentName = req.body.appointmentName;
            let Duration = req.body.appointmentDuration;
            let Price = req.body.appointmentPrice;
            appointment_1.default.findOneAndUpdate({ 'specializationApp': specializationApp, 'AppointmentName': AppointmentName, 'Duration': Duration, 'Price': Price }, { $set: { 'isApproved': true } }, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json({ message: "changed" });
            });
        };
        this.rejectAppointment = (req, res) => {
            let specializationApp = req.body.specialization;
            let AppointmentName = req.body.appointmentName;
            let Duration = req.body.appointmentDuration;
            let Price = req.body.appointmentPrice;
            appointment_1.default.deleteOne({ 'specializationApp': specializationApp, 'AppointmentName': AppointmentName, 'Duration': Duration, 'Price': Price }, (err, resp) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ "message": "error" });
                }
                else
                    res.json({ "message": "ok" });
            });
        };
        this.addSpecialization = (req, res) => {
            let specialization = new specialization_1.default({
                specializationName: req.body.specializationName
            });
            specialization.save((err, resp) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ "message": "error" });
                }
                else
                    res.json({ "message": "ok" });
            });
        };
        this.findAppointmentAndDelete = (req, res) => {
            let specializationApp = req.body.specialization;
            let AppointmentName = req.body.appointmentName;
            let Duration = req.body.appointmentDuration;
            let Price = req.body.appointmentPrice;
            appointment_1.default.deleteOne({ 'specializationApp': specializationApp, 'AppointmentName': AppointmentName, 'Duration': Duration, 'Price': Price }, (err, resp) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ "message": "error" });
                }
                else
                    res.json({ "message": "ok" });
            });
        };
        this.updateAppointment = (req, res) => {
            let specializationApp = req.body.specialization;
            let AppointmentName = req.body.appointmentName;
            let Duration = req.body.appointmentDuration;
            let Price = req.body.appointmentPrice;
            appointment_1.default.findOneAndUpdate({ 'specializationApp': specializationApp, 'AppointmentName': AppointmentName }, { $set: { 'Duration': Duration, 'Price': Price } }, (err, users) => {
                //console.log(users.appointmentName)
                if (err)
                    console.log(err);
                else
                    res.json({ message: "changed" });
            });
        };
        this.checkIfAppointmentExists = (req, res) => {
            let specializationApp = req.body.specialization;
            let AppointmentName = req.body.appointmentName;
            appointment_1.default.findOne({ 'specializationApp': specializationApp, 'AppointmentName': AppointmentName }, (err, users) => {
                //console.log(users.appointmentName)
                if (err)
                    console.log(err);
                else if (users) {
                    res.json({ message: "ok" });
                }
                else {
                    res.json({ message: "not ok" });
                }
            });
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map