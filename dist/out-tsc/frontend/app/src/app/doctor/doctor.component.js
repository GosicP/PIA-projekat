import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DoctorComponent = class DoctorComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.allDoctors = [];
        this.appointments = [];
    }
    ngOnInit() {
        let usernamenew = JSON.parse(localStorage.getItem('username'));
        this.userService.getDoctor(usernamenew).subscribe((user) => {
            this.users = user;
            this.userService.getAppointments(this.users?.specialization).subscribe((apps) => {
                this.appointments = apps;
            });
        });
    }
    chooseAppointment(appointment) {
        this.userService.changeAppointmentChoice(appointment.specializationApp, appointment.AppointmentName, appointment.Duration, appointment.Price, 'true', this.users.username).subscribe((resp) => {
            if (resp['message'] === "Appointment already exists") {
                this.message = "Appointment already exists";
            }
            else {
                this.message = "Appointment added";
            }
        });
    }
    removeAppointment(appointment) {
        this.userService.removeAppointment(appointment.specializationApp, appointment.AppointmentName, appointment.Duration, appointment.Price, 'true', this.users.username).subscribe((resp) => {
            if (resp['message'] === "Appointment removed") {
                this.message = "Appointment removed";
            }
            else {
                this.message = "Doctor not found";
            }
        });
    }
};
DoctorComponent = __decorate([
    Component({
        selector: 'app-doctor',
        templateUrl: './doctor.component.html',
        styleUrls: ['./doctor.component.css']
    })
], DoctorComponent);
export { DoctorComponent };
//# sourceMappingURL=doctor.component.js.map