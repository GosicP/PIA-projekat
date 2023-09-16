import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AppointmentTable } from '../model/appointment-table';
import { Report } from '../model/report';
let DoctorAppointmentsComponent = class DoctorAppointmentsComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.nextAppointments = [];
        this.appointmentTableArr = [];
        this.reportsArr = [];
        this.reportFinal = [];
    }
    ngOnInit() {
        this.usernamenew = JSON.parse(localStorage.getItem('username'));
        this.userService.findDoctorAppointments(this.usernamenew).subscribe((data) => {
            this.nextAppointments = data;
            let completedRequests = 0;
            for (let n of this.nextAppointments) {
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
                    if (inputDate > currentDate) {
                        this.appointmentTableArr.push(appointmentTable);
                    }
                    completedRequests++;
                    if (completedRequests === this.nextAppointments.length) {
                        this.sortAppointments();
                    }
                });
            }
        });
    }
    sortAppointments() {
        //let appointments = this.
        //return appointments.sort((a,b)=>a.dateFormat.getTime()-b.dateFormat.getTime())
        this.appointmentTableArr = this.appointmentTableArr.sort((a, b) => a.dateFormat.getTime() - b.dateFormat.getTime());
    }
    openReport(n) {
        this.userService.getReports(n.usernamePatient).subscribe((data) => {
            this.reportsArr = data;
            for (let n of this.reportsArr) {
                let report = new Report();
                report.date = n.date;
                report.time = n.time;
                report.usernameDoctor = n.usernameDoctor;
                report.usernamePatient = n.usernamePatient;
                report.firstnameDoctor = n.firstnameDoctor;
                report.lastnameDoctor = n.lastnameDoctor;
                report.specialization = n.specialization;
                report.appointmentName = n.appointmentName;
                report.reasonCome = n.reasonCome;
                report.diagnosis = n.diagnosis;
                report.therapy = n.therapy;
                report.nextAppDate = n.nextAppDate;
                let date_parts = n.date.split("-");
                let new_date_string = `${date_parts[2]}-${date_parts[1]}-${date_parts[0]}`;
                const parse = Date.parse(new_date_string);
                var inputDate = new Date(parse);
                const [hours, minutes] = n.time.split(':');
                inputDate.setHours(Number(hours), Number(minutes), 0, 0);
                //console.log(inputDate)
                report.dateFormat = inputDate;
                this.reportFinal.push(report);
            }
            this.sortReports();
        });
    }
    sortReports() {
        this.reportFinal = this.reportFinal.sort((a, b) => a.dateFormat.getTime() - b.dateFormat.getTime());
    }
    redirect() {
        localStorage.setItem('doctorUsername', JSON.stringify(this.usernamenew));
        window.open("http://localhost:4200/addReportDoctor");
    }
};
DoctorAppointmentsComponent = __decorate([
    Component({
        selector: 'app-doctor-appointments',
        templateUrl: './doctor-appointments.component.html',
        styleUrls: ['./doctor-appointments.component.css']
    })
], DoctorAppointmentsComponent);
export { DoctorAppointmentsComponent };
//# sourceMappingURL=doctor-appointments.component.js.map