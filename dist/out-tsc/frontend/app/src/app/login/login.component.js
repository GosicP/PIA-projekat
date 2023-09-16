import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
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
    login() {
        this.userService.login(this.username, this.password).subscribe((userFromDB) => {
            if (userFromDB != null) {
                localStorage.setItem("username", JSON.stringify(this.username));
                localStorage.setItem('password', JSON.stringify(this.password));
                if (userFromDB.type == 0) {
                    this.router.navigate(['user']);
                }
                else {
                    this.router.navigate(['doctor']);
                }
            }
            else {
                this.message = "Pogresno unet username ili password";
            }
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
    searchDoctors() {
        this.userService.searchDoctors(this.firstnameSearch, this.lastnameSearch, this.specializationSearch, '').subscribe((data) => {
            this.searchedDoctors = data;
        });
        //location.reload();
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map