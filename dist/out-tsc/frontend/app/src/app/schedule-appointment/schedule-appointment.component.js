import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ScheduleAppointmentComponent = class ScheduleAppointmentComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.appoinmentsDoctor = [];
        this.appoinmentsPatient = [];
        this.isDoctorScheduled = false;
        this.isUserScheduled = false;
    }
    ngOnInit() {
        this.appointment = JSON.parse(localStorage.getItem('appointments'));
        this.usernamePatient = JSON.parse(localStorage.getItem('username'));
        this.doctor = JSON.parse(localStorage.getItem('doctor'));
        this.usernameDoctor = this.doctor.username;
        this.userService.findDoctorAppointments(this.usernameDoctor).subscribe((data) => {
            this.appoinmentsDoctor = data;
        });
        this.userService.getScheduledAppointments(this.usernamePatient).subscribe((data) => {
            this.appoinmentsPatient = data;
        });
    }
    makeAppointment() {
        function validateDate(date) {
            const regex = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
            return regex.test(date);
        }
        function validateTime(time) {
            const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
            return regex.test(time);
        }
        this.isDateGood = validateDate(this.date);
        this.isTimeGood = validateTime(this.time);
        //proveri da li je lekar + datum/vreme zauzet u tom trenutku
        //lepo nadje sve appointmente sada treba da napravim provere
        //treba da prebacis bool vrednost na isdoctor scheduled true ako nadjes scheduled, ovde
        //dolazi ona provera vremena i datuma
        //izgleda da mozes u sam date da stavis minute, to moras da ispitas
        if (this.isDateGood === true && this.isTimeGood === true) {
            let date_parts = this.date.split("-");
            let new_date_string = `${date_parts[2]}-${date_parts[1]}-${date_parts[0]}`;
            const parse = Date.parse(new_date_string);
            var inputDate = new Date(parse);
            const [hours, minutes] = this.time.split(':');
            inputDate.setHours(Number(hours), Number(minutes), 0, 0);
            var currentDate = new Date();
            for (let app of this.appoinmentsDoctor) {
                let date_parts = app.date.split("-");
                let new_date_string = `${date_parts[2]}-${date_parts[1]}-${date_parts[0]}`;
                const parse = Date.parse(new_date_string);
                let dummyDateApp = new Date(parse);
                let dummyTimeApp = app.time;
                let [hoursss, minutesss] = dummyTimeApp.split(':');
                dummyDateApp.setHours(Number(hoursss), Number(minutesss));
                //on ti ovde uveca i dummy vreme
                let duration = this.appointment.Duration;
                let dummyDateAppIncremented = new Date(parse);
                dummyDateAppIncremented.setHours(Number(hoursss), Number(minutesss) + duration.valueOf());
                if (inputDate >= dummyDateApp && inputDate <= dummyDateAppIncremented) {
                    this.isDoctorScheduled = true;
                    console.log(this.isDoctorScheduled);
                }
            }
            for (let app of this.appoinmentsPatient) {
                let date_parts = app.date.split("-");
                let new_date_string = `${date_parts[2]}-${date_parts[1]}-${date_parts[0]}`;
                const parse = Date.parse(new_date_string);
                let dummyDateApp = new Date(parse);
                let dummyTimeApp = app.time;
                let [hoursss, minutesss] = dummyTimeApp.split(':');
                dummyDateApp.setHours(Number(hoursss), Number(minutesss));
                //on ti ovde uveca i dummy vreme
                let duration = this.appointment.Duration;
                let dummyDateAppIncremented = new Date(parse);
                dummyDateAppIncremented.setHours(Number(hoursss), Number(minutesss) + duration.valueOf());
                //ostalo je samo da ne pitas iskljucivo koliko je sati samo
                //vec i da ubacis u racunicu koliko traje pregled
                if (inputDate >= dummyDateApp && inputDate <= dummyDateAppIncremented) {
                    this.isUserScheduled = true;
                    console.log(this.isUserScheduled);
                }
            }
            if (inputDate >= currentDate && this.isDoctorScheduled === false && this.isUserScheduled === false) {
                this.userService.scheduleAppointment(this.usernamePatient, this.usernameDoctor, this.appointment.AppointmentName, this.date, this.time).subscribe(respObj => {
                    {
                        if (respObj['message'] == 'ok') {
                            this.message = 'appointment scheduled';
                        }
                        else if (respObj['message'] == 'notconf') {
                            this.message = 'appointment error';
                        }
                    }
                });
            }
            else if (inputDate < currentDate) {
                this.message = "Uneli ste datum koji je prosao";
            }
            else if (this.isDoctorScheduled === true) {
                this.message = "Doktor je zauzet u tom terminu";
            }
            else if (this.isUserScheduled === true) {
                this.message = "Korisnik je rezervisao pregled u ovom terminu";
            }
        }
        else if (this.isDateGood === false) {
            this.message = "Lose napisan datum";
        }
        else if (this.isTimeGood === false) {
            this.message = "Lose uneto vreme";
        }
        this.isDoctorScheduled = false;
    }
};
ScheduleAppointmentComponent = __decorate([
    Component({
        selector: 'app-schedule-appointment',
        templateUrl: './schedule-appointment.component.html',
        styleUrls: ['./schedule-appointment.component.css']
    })
], ScheduleAppointmentComponent);
export { ScheduleAppointmentComponent };
//# sourceMappingURL=schedule-appointment.component.js.map