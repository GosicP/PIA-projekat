import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.uri = 'http://localhost:4000';
    }
    login(usernameFromForm, passwordFromForm) {
        const data = {
            username: usernameFromForm,
            password: passwordFromForm
        };
        return this.http.post(`${this.uri}/users/login`, data);
    }
    register(firstnameForm, lastnameForm, usernameForm, passwordForm, passwordconfForm, adressForm, numberForm, emailForm) {
        const data = {
            firstname: firstnameForm,
            lastname: lastnameForm,
            username: usernameForm,
            password: passwordForm,
            passwordconf: passwordconfForm,
            adress: adressForm,
            number: numberForm,
            email: emailForm,
            type: 0
        };
        return this.http.post(`${this.uri}/users/register`, data);
    }
    getDoctors() {
        return this.http.get(`${this.uri}/users/getDoctors`);
    }
    findUsername() {
        return this.http.get(`${this.uri}/users/findUsername`);
    }
    changePassword(newUsername, newPassword) {
        const data = {
            username: newUsername,
            password: newPassword,
        };
        return this.http.post(`${this.uri}/users/changePassword`, data);
    }
    searchDoctors(firstnameForm, lastnameForm, specializationForm, branchForm) {
        const data = {
            firstname: firstnameForm,
            lastname: lastnameForm,
            specialization: specializationForm,
            branch: branchForm
        };
        return this.http.post(`${this.uri}/users/searchDoctors`, data);
    }
    getPatient(usernameForm, passwordForm) {
        const data = {
            username: usernameForm,
            password: passwordForm
        };
        return this.http.post(`${this.uri}/users/getPatient`, data);
    }
    getDoctor(usernameForm) {
        const data = {
            username: usernameForm
        };
        return this.http.post(`${this.uri}/users/getDoctor`, data);
    }
    getAppointments(specializationForm) {
        const data = {
            specialization: specializationForm
        };
        return this.http.post(`${this.uri}/users/getAppointments`, data);
    }
    scheduleAppointment(usernamePatientForm, usernameDoctorForm, appointmentNameForm, dateForm, timeForm) {
        const data = {
            usernamePatient: usernamePatientForm,
            usernameDoctor: usernameDoctorForm,
            appointmentName: appointmentNameForm,
            date: dateForm,
            time: timeForm
        };
        return this.http.post(`${this.uri}/users/scheduleAppointment`, data);
    }
    findDoctorAppointments(usernameDoctorForm) {
        const data = {
            usernameDoctor: usernameDoctorForm
        };
        return this.http.post(`${this.uri}/users/findDoctorAppointments`, data);
    }
    getScheduledAppointments(usernamePatientForm) {
        const data = {
            usernamePatient: usernamePatientForm
        };
        return this.http.post(`${this.uri}/users/getScheduledAppointments`, data);
    }
    findScheduledAppointmentAndDelete(usernamePatientForm, usernameDoctorForm, appointmentNameForm, dateForm, timeForm) {
        const data = {
            usernamePatient: usernamePatientForm,
            usernameDoctor: usernameDoctorForm,
            appointmentName: appointmentNameForm,
            date: dateForm,
            time: timeForm
        };
        return this.http.post(`${this.uri}/users/findScheduledAppointmentAndDelete`, data);
    }
    findPatientAppointments(usernamePatientForm) {
        const data = {
            usernamePatient: usernamePatientForm
        };
        return this.http.post(`${this.uri}/users/findPatientAppointments`, data);
    }
    changeAppointmentChoice(specializationAppForm, AppointmentNameForm, DurationForm, PriceForm, isChosenForm, usernameDoctorForm) {
        const data = {
            usernameDoctor: usernameDoctorForm,
            specializationApp: specializationAppForm,
            AppointmentName: AppointmentNameForm,
            Duration: DurationForm,
            Price: PriceForm,
            isChosen: isChosenForm
        };
        return this.http.post(`${this.uri}/users/changeAppointmentChoice`, data);
    }
    removeAppointment(specializationAppForm, AppointmentNameForm, DurationForm, PriceForm, isChosenForm, usernameDoctorForm) {
        const data = {
            usernameDoctor: usernameDoctorForm,
            specializationApp: specializationAppForm,
            AppointmentName: AppointmentNameForm,
            Duration: DurationForm,
            Price: PriceForm,
            isChosen: isChosenForm
        };
        return this.http.post(`${this.uri}/users/removeAppointment`, data);
    }
    getReports(usernamePatientForm) {
        const data = {
            usernamePatient: usernamePatientForm
        };
        return this.http.post(`${this.uri}/users/getReports`, data);
    }
    addReport(usernamePatientForm, usernameDoctorForm, firstnameDoctorForm, lastnameDoctorForm, timeForm, dateForm, specializationForm, appointmentNameForm, reasonComeForm, diagnosisForm, therapyForm, nextAppDateForm) {
        const data = {
            usernamePatient: usernamePatientForm,
            usernameDoctor: usernameDoctorForm,
            firstnameDoctor: firstnameDoctorForm,
            lastnameDoctor: lastnameDoctorForm,
            time: timeForm,
            date: dateForm,
            specialization: specializationForm,
            appointmentName: appointmentNameForm,
            reasonCome: reasonComeForm,
            diagnosis: diagnosisForm,
            therapy: therapyForm,
            nextAppDate: nextAppDateForm
        };
        return this.http.post(`${this.uri}/users/addReport`, data);
    }
    findAppointmentFull(usernamePatientForm, usernameDoctorForm, appointmentNameForm, dateForm, timeForm) {
        const data = {
            usernamePatient: usernamePatientForm,
            usernameDoctor: usernameDoctorForm,
            appointmentName: appointmentNameForm,
            date: dateForm,
            time: timeForm
        };
        return this.http.post(`${this.uri}/users/findAppointmentFull`, data);
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map