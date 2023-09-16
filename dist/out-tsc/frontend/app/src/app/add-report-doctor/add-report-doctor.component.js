import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AppointmentTable } from '../model/appointment-table';
let AddReportDoctorComponent = class AddReportDoctorComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.schedTemp = [];
        this.pastAppointments = [];
        this.appointmentTableArr = [];
        this.showBool = false;
    }
    ngOnInit() {
        this.usernameDoctor = JSON.parse(localStorage.getItem('doctorUsername'));
        this.userService.findDoctorAppointments(this.usernameDoctor).subscribe((data) => {
            let nextAppointments = data;
            let completedRequests = 0;
            for (let n of nextAppointments) {
                this.userService.getDoctor(n.usernamePatient).subscribe((data) => {
                    let appointmentTable = new AppointmentTable();
                    appointmentTable.appName = n.appointmentName;
                    appointmentTable.date = n.date;
                    appointmentTable.time = n.time;
                    appointmentTable.usernameDoctor = n.usernameDoctor;
                    appointmentTable.usernamePatient = n.usernamePatient;
                    appointmentTable.firstname = data.firstname;
                    appointmentTable.lastname = data.lastname;
                    appointmentTable.branch = data.branch;
                    let date_parts = n.date.split("-");
                    let new_date_string = `${date_parts[2]}-${date_parts[1]}-${date_parts[0]}`;
                    const parse = Date.parse(new_date_string);
                    var inputDate = new Date(parse);
                    const [hours, minutes] = n.time.split(':');
                    inputDate.setHours(Number(hours), Number(minutes), 0, 0);
                    appointmentTable.dateFormat = inputDate;
                    let currentDate = new Date();
                    if (inputDate < currentDate) {
                        this.appointmentTableArr.push(appointmentTable);
                    }
                    completedRequests++;
                    if (completedRequests === nextAppointments.length) {
                        this.sortAppointments();
                    }
                });
            }
        });
    }
    sortAppointments() {
        this.appointmentTableArr = this.appointmentTableArr.sort((a, b) => b.dateFormat.getTime() - a.dateFormat.getTime());
    }
    inputReport(n) {
        this.userService.findAppointmentFull(n.usernamePatient, n.usernameDoctor, n.appName, n.date, n.time).subscribe(resp => {
            if (resp['message'] === "ok") {
                this.message = "You can't add more than one report to this appointment";
                this.showBool = false;
            }
            else {
                this.message = "You can add a report";
                this.showBool = true;
            }
        });
    }
};
AddReportDoctorComponent = __decorate([
    Component({
        selector: 'app-add-report-doctor',
        templateUrl: './add-report-doctor.component.html',
        styleUrls: ['./add-report-doctor.component.css']
    })
], AddReportDoctorComponent);
export { AddReportDoctorComponent };
//# sourceMappingURL=add-report-doctor.component.js.map