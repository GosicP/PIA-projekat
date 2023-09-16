import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ManagerComponent } from './manager/manager.component';
import { AboutComponent } from './about/about.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { DoctorsPatientComponent } from './doctors-patient/doctors-patient.component';
import { DoctorProfilePatientComponent } from './doctor-profile-patient/doctor-profile-patient.component';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';
import { PatientAppointmentsComponent } from './patient-appointments/patient-appointments.component';
import { DoctorAppointmentsComponent } from './doctor-appointments/doctor-appointments.component';
import { AddReportDoctorComponent } from './add-report-doctor/add-report-doctor.component';
const routes = [
    { path: "", component: LoginComponent },
    { path: "user", component: UserComponent },
    { path: "register", component: RegisterComponent },
    { path: "doctor", component: DoctorComponent },
    { path: "manager", component: ManagerComponent },
    { path: "about", component: AboutComponent },
    { path: "changePassword", component: ChangePasswordComponent },
    { path: "profile", component: ProfileComponent },
    { path: "doctorsPatient", component: DoctorsPatientComponent },
    { path: "doctorProfilePatient", component: DoctorProfilePatientComponent },
    { path: "scheduleAppointment", component: ScheduleAppointmentComponent },
    { path: "patientAppointments", component: PatientAppointmentsComponent },
    { path: "doctorAppointments", component: DoctorAppointmentsComponent },
    { path: "addReportDoctor", component: AddReportDoctorComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map