import UserModel from '../models/user';
import AppointmentModel from '../models/appointment';
import ScheduledModel from '../models/scheduled';
import ReportModel from '../models/report';
export class UserController {
    constructor() {
        this.login = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            UserModel.findOne({ 'username': username, 'password': password }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.register = (req, res) => {
            let user = new UserModel({
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
            UserModel.findOneAndUpdate({ 'username': username }, { $set: { 'password': password } }, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json({ message: "changed" });
            });
        };
        this.getDoctors = (req, res) => {
            UserModel.find({ 'type': 1 }, (err, users) => {
                if (err)
                    console.log(err);
                else
                    res.json(users);
            }); //{} je za uslove
        };
        this.findUsername = (req, res) => {
            UserModel.find({}, (err, users) => {
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
                UserModel.find({ 'firstname': firstname, 'lastname': lastname, 'specialization': specialization, 'branch': branch, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (firstname != null && lastname != null && specialization != null) {
                UserModel.find({ 'firstname': firstname, 'lastname': lastname, 'specialization': specialization, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (firstname != null && lastname != null && branch != null) {
                UserModel.find({ 'firstname': firstname, 'lastname': lastname, 'branch': branch, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (firstname != null && specialization != null && branch != null) {
                UserModel.find({ 'firstname': firstname, 'specialization': specialization, 'branch': branch, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (lastname != null && specialization != null && branch != null) {
                UserModel.find({ 'lastname': lastname, 'specialization': specialization, 'branch': branch, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (firstname != null && lastname != null) {
                //console.log("trazim ime prezime")
                UserModel.find({ 'firstname': firstname, 'lastname': lastname, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (firstname != null && specialization != null) {
                //console.log("trazim ime specijalizaciju")
                UserModel.find({ 'firstname': firstname, 'specialization': specialization, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (firstname != null && branch != null) {
                UserModel.find({ 'firstname': firstname, 'branch': branch, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (lastname != null && specialization != null) {
                //console.log("trazim prezime specijalizaciju")
                UserModel.find({ 'lastname': lastname, 'specialization': specialization, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (lastname != null && branch != null) {
                UserModel.find({ 'lastname': lastname, 'branch': branch, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (branch != null && specialization != null) {
                UserModel.find({ 'branch': branch, 'specialization': specialization, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (firstname != null) {
                //console.log("trazim po imenu")
                UserModel.find({ 'firstname': firstname, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
                //console.log("trazim po imenu")
            }
            else if (lastname != null) {
                //console.log("trazim po prezimenu")
                UserModel.find({ 'lastname': lastname, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (specialization != null) {
                //console.log("trazim po specijalizaciji")
                UserModel.find({ 'specialization': specialization, 'type': 1 }, (err, users) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(users);
                });
            }
            else if (branch != null) {
                UserModel.find({ 'branch': branch, 'type': 1 }, (err, users) => {
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
            UserModel.findOne({ 'username': username }, (err, users) => {
                if (err)
                    console.log(err);
                else {
                    res.json(users);
                }
            });
        };
        this.getDoctor = (req, res) => {
            let username = req.body.username;
            UserModel.findOne({ 'username': username }, (err, users) => {
                if (err)
                    console.log(err);
                else {
                    res.json(users);
                }
            });
        };
        this.getAppointments = (req, res) => {
            let specialization = req.body.specialization;
            AppointmentModel.find({ 'specializationApp': specialization }, (err, appts) => {
                if (err)
                    console.log(err);
                else {
                    res.json(appts);
                }
            });
        };
        this.scheduleAppointment = (req, res) => {
            let appointment = new ScheduledModel({
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
            ScheduledModel.find({ 'usernameDoctor': usernameDoctor }, (err, docs) => {
                if (err)
                    console.log(err);
                else {
                    res.json(docs);
                }
            });
        };
        this.getScheduledAppointments = (req, res) => {
            let usernamePatient = req.body.usernamePatient;
            ScheduledModel.find({ 'usernamePatient': usernamePatient }, (err, pats) => {
                if (err)
                    console.log(err);
                else {
                    res.json(pats);
                }
            });
        };
        this.findScheduledAppointmentAndDelete = async (req, res) => {
            let usernamePatient = req.body.usernamePatient;
            let usernameDoctor = req.body.usernameDoctor;
            let appointmentName = req.body.appointmentName;
            let time = req.body.time;
            let date = req.body.date;
            ScheduledModel.deleteOne({ 'usernamePatient': usernamePatient, 'usernameDoctor': usernameDoctor, 'appointmentName': appointmentName, 'time': time, 'date': date }, (err, resp) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ "message": "error" });
                }
                else
                    res.json({ "message": "ok" });
            });
        };
        this.findPatientAppointments = (req, res) => {
            let usernamePatient = req.body.usernamePatient;
            ScheduledModel.find({ 'usernamePatient': usernamePatient }, (err, docs) => {
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
            UserModel.findOne({ 'username': usernameDoctor, 'appointmentsChosen': { $elemMatch: appointment } }, (err, result) => {
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
                        UserModel.findOneAndUpdate({ 'username': usernameDoctor }, { $push: { 'appointmentsChosen': appointment } }, (err, users) => {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                res.json({ message: "Appointment added" });
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
                Duration: req.body.Duration,
                Price: req.body.Price,
                isChosen: req.body.isChosen
            };
            // Remove the appointment from the array
            UserModel.findOneAndUpdate({ 'username': usernameDoctor }, { $pull: { 'appointmentsChosen': appointment } }, { new: true }, (err, users) => {
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
            ReportModel.find({ 'usernamePatient': usernamePatient }, (err, docs) => {
                if (err)
                    console.log(err);
                else {
                    res.json(docs);
                }
            });
        };
        this.addReport = (req, res) => {
            let report = new ReportModel({
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
        this.findAppointmentFull = async (req, res) => {
            let usernamePatient = req.body.usernamePatient;
            let usernameDoctor = req.body.usernameDoctor;
            let appointmentName = req.body.appointmentName;
            let time = req.body.time;
            let date = req.body.date;
            ReportModel.findOne({ 'usernamePatient': usernamePatient, 'usernameDoctor': usernameDoctor, 'appointmentName': appointmentName, 'time': time, 'date': date }, (err, resp) => {
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
        };
    }
}
//# sourceMappingURL=user.controller.js.map