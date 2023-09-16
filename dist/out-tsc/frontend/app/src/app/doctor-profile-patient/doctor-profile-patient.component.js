import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DoctorProfilePatientComponent = class DoctorProfilePatientComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.appointments = [];
        this.filteredAppointments = [];
    }
    ngOnInit() {
        this.doctor = JSON.parse(localStorage.getItem('doctor'));
        this.appointments = this.doctor.appointmentsChosen;
        //this.userService.getAppointments(this.doctor.specialization).subscribe((app : Appointment[])=>{
        //  for(let n of app){
        //    if(n.isChosen===true){
        //      this.appointments.push(n)
        //  }
        //}
        //})
    }
    schedule(app) {
        localStorage.setItem('appointments', JSON.stringify(app));
        window.open("http://localhost:4200/scheduleAppointment");
    }
};
DoctorProfilePatientComponent = __decorate([
    Component({
        selector: 'app-doctor-profile-patient',
        templateUrl: './doctor-profile-patient.component.html',
        styleUrls: ['./doctor-profile-patient.component.css']
    })
], DoctorProfilePatientComponent);
export { DoctorProfilePatientComponent };
//# sourceMappingURL=doctor-profile-patient.component.js.map