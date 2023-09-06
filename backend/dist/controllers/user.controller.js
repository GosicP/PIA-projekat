"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = __importDefault(require("../models/user"));
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
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map