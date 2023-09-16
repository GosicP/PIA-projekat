import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AppointmentTable } from '../model/appointment-table';
import { Report } from '../model/report';
let PatientAppointmentsComponent = class PatientAppointmentsComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.appoinmentsPatient = [];
        this.doctors = [];
        this.appointmentTableArr = [];
        this.reportsArr = [];
        this.reportFinal = [];
    }
    ngOnInit() {
        this.usernamePatient = JSON.parse(localStorage.getItem('username'));
        this.userService.getScheduledAppointments(this.usernamePatient).subscribe((data) => {
            this.appoinmentsPatient = data;
            let completedRequests = 0;
            for (let n of this.appoinmentsPatient) {
                this.userService.getDoctor(n.usernameDoctor).subscribe((data) => {
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
                    //console.log(inputDate)
                    appointmentTable.dateFormat = inputDate;
                    let currentDate = new Date();
                    if (inputDate > currentDate) {
                        this.appointmentTableArr.push(appointmentTable);
                    }
                    completedRequests++;
                    if (completedRequests === this.appoinmentsPatient.length) {
                        this.sortAppointments();
                    }
                });
            }
        });
        //oba
        //this.usernamePatient = JSON.parse(localStorage.getItem('username'));
        //this.userService.getScheduledAppointments(this.usernamePatient).subscribe((data : Scheduled[])=>{
        //    this.appoinmentsPatient = data;
        //    const fetchDoctorInfo = (n: Scheduled) => {
        //        return this.userService.getDoctor(n.usernameDoctor).pipe(
        //            map((data: User) => {
        //                let appointmentTable : AppointmentTable = new AppointmentTable();
        //                appointmentTable.appName = n.appointmentName;
        //                appointmentTable.date = n.date;
        //                appointmentTable.time = n.time;
        //                appointmentTable.firstname = data.firstname;
        //                appointmentTable.lastname = data.lastname;
        //                appointmentTable.branch = data.branch;
        //                let date_parts: string[] = n.date.split("-");
        //                let new_date_string: string = `${date_parts[2]}-${date_parts[1]}-${date_parts[0]}`;
        //                const parse = Date.parse(new_date_string);
        //                var inputDate = new Date(parse);
        //                const [hours, minutes] = n.time.split(':');
        //                inputDate.setHours(Number(hours), Number(minutes), 0, 0);
        //                appointmentTable.dateFormat = inputDate;
        //                return appointmentTable;
        //            })
        //        );
        //    };
        //
        //    forkJoin(this.appoinmentsPatient.map(fetchDoctorInfo)).subscribe(appointmentTableArr => {
        //        this.appointmentTableArr = appointmentTableArr;
        //        this.sortAppointments();
        //    });
        //});
        this.userService.getReports(this.usernamePatient).subscribe((data) => {
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
    sortAppointments() {
        //let appointments = this.
        //return appointments.sort((a,b)=>a.dateFormat.getTime()-b.dateFormat.getTime())
        this.appointmentTableArr = this.appointmentTableArr.sort((a, b) => a.dateFormat.getTime() - b.dateFormat.getTime());
    }
    sortReports() {
        this.reportFinal = this.reportFinal.sort((a, b) => a.dateFormat.getTime() - b.dateFormat.getTime());
    }
    cancelAppointment(n) {
        this.userService.findScheduledAppointmentAndDelete(n.usernamePatient, n.usernameDoctor, n.appName, n.date, n.time).subscribe((resp) => {
            if (resp === "ok") {
                this.message = "appointment deleted";
            }
            else {
                this.message = "appointment not deleted";
            }
        });
        setTimeout(function () {
            location.reload();
        }, 4000);
    }
};
PatientAppointmentsComponent = __decorate([
    Component({
        selector: 'app-patient-appointments',
        templateUrl: './patient-appointments.component.html',
        styleUrls: ['./patient-appointments.component.css']
    })
], PatientAppointmentsComponent);
export { PatientAppointmentsComponent };
//# sourceMappingURL=patient-appointments.component.js.map