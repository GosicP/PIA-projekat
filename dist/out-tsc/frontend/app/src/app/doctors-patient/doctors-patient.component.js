import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DoctorsPatientComponent = class DoctorsPatientComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.allDoctors = [];
        this.searchedDoctors = [];
    }
    ngOnInit() {
        this.userService.getDoctors().subscribe((data) => {
            this.allDoctors = data;
        });
    }
    sortTableByName() {
        let alldoctors = this.allDoctors;
        if (this.sortType == 0) {
            return alldoctors.sort((d1, d2) => {
                if (d1.firstname.toLowerCase() < d2.firstname.toLowerCase()) {
                    return -1;
                }
                else if (d1.firstname.toLowerCase() == d2.firstname.toLowerCase()) {
                    return 0;
                }
                else {
                    return 1;
                }
            });
        }
        else {
            return alldoctors.sort((d1, d2) => {
                if (d1.firstname.toLowerCase() < d2.firstname.toLowerCase()) {
                    return 1;
                }
                else if (d1.firstname.toLowerCase() == d2.firstname.toLowerCase()) {
                    return 0;
                }
                else {
                    return -1;
                }
            });
        }
    }
    sortTableBySurname() {
        let alldoctors = this.allDoctors;
        if (this.sortType == 0) {
            return alldoctors.sort((d1, d2) => {
                if (d1.lastname.toLowerCase() < d2.lastname.toLowerCase()) {
                    return -1;
                }
                else if (d1.lastname.toLowerCase() == d2.lastname.toLowerCase()) {
                    return 0;
                }
                else {
                    return 1;
                }
            });
        }
        else {
            return alldoctors.sort((d1, d2) => {
                if (d1.lastname.toLowerCase() < d2.lastname.toLowerCase()) {
                    return 1;
                }
                else if (d1.lastname.toLowerCase() == d2.lastname.toLowerCase()) {
                    return 0;
                }
                else {
                    return -1;
                }
            });
        }
    }
    sortTableBySpecialisation() {
        let alldoctors = this.allDoctors;
        if (this.sortType == 0) {
            return alldoctors.sort((d1, d2) => {
                if (d1.specialization.toLowerCase() < d2.specialization.toLowerCase()) {
                    return -1;
                }
                else if (d1.specialization.toLowerCase() == d2.specialization.toLowerCase()) {
                    return 0;
                }
                else {
                    return 1;
                }
            });
        }
        else {
            return alldoctors.sort((d1, d2) => {
                if (d1.specialization.toLowerCase() < d2.specialization.toLowerCase()) {
                    return 1;
                }
                else if (d1.specialization.toLowerCase() == d2.specialization.toLowerCase()) {
                    return 0;
                }
                else {
                    return -1;
                }
            });
        }
    }
    sortTableByBranch() {
        let alldoctors = this.allDoctors;
        if (this.sortType == 0) {
            return alldoctors.sort((d1, d2) => {
                if (d1.branch.toLowerCase() < d2.branch.toLowerCase()) {
                    return -1;
                }
                else if (d1.branch.toLowerCase() == d2.branch.toLowerCase()) {
                    return 0;
                }
                else {
                    return 1;
                }
            });
        }
        else {
            return alldoctors.sort((d1, d2) => {
                if (d1.branch.toLowerCase() < d2.branch.toLowerCase()) {
                    return 1;
                }
                else if (d1.branch.toLowerCase() == d2.branch.toLowerCase()) {
                    return 0;
                }
                else {
                    return -1;
                }
            });
        }
    }
    searchDoctors() {
        this.userService.searchDoctors(this.firstnameSearch, this.lastnameSearch, this.specializationSearch, this.branchSearch).subscribe((data) => {
            this.searchedDoctors = data;
        });
        //location.reload();
    }
    getDoctorProfile(doctor) {
        let doctorUsername = doctor.username;
        //console.log(doctorUsername)
        this.userService.getDoctor(doctorUsername).subscribe((data) => {
            this.doctor = data;
            localStorage.setItem("doctor", JSON.stringify(this.doctor));
        });
        window.open("http://localhost:4200/doctorProfilePatient");
    }
};
DoctorsPatientComponent = __decorate([
    Component({
        selector: 'app-doctors-patient',
        templateUrl: './doctors-patient.component.html',
        styleUrls: ['./doctors-patient.component.css']
    })
], DoctorsPatientComponent);
export { DoctorsPatientComponent };
//# sourceMappingURL=doctors-patient.component.js.map