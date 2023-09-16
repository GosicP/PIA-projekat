import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            LoginComponent,
            UserComponent,
            RegisterComponent,
            DoctorComponent,
            ManagerComponent,
            AboutComponent,
            ChangePasswordComponent,
            ProfileComponent,
            DoctorsPatientComponent,
            DoctorProfilePatientComponent,
            ScheduleAppointmentComponent,
            PatientAppointmentsComponent,
            DoctorAppointmentsComponent,
            AddReportDoctorComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            HttpClientModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map