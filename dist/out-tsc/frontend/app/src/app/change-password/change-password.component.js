import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
    }
    //moram da napisem neku proveru passworda i checkpassworda, sa starim passwordom, to se isto salje preko lokalnog storaga, 
    //i da shvatim kako username isti da iskoristim, preko localstoraga
    //proveri takodje da li dobro pozivam funkciju, i da li je dobro rutiranje funkcije, i da li funkcija radi
    changePassword() {
        const oldusername = JSON.parse(localStorage.getItem('username'));
        const oldpasswordconf = JSON.parse(localStorage.getItem('password'));
        console.log(oldusername);
        if (this.confirmnewpassword === this.newpassword && this.oldpassword === oldpasswordconf) {
            this.userService.changePassword(oldusername, this.newpassword).subscribe((resp) => {
                if (resp === "changed") {
                    this.message = "Password not changed";
                }
                else {
                    this.message = "Password changed";
                }
            });
        }
        else if (this.confirmnewpassword !== this.newpassword) {
            this.message = "Passwords do not match";
        }
        else if (this.oldpassword !== oldpasswordconf) {
            this.message = "Old password is incorrect";
        }
    }
};
ChangePasswordComponent = __decorate([
    Component({
        selector: 'app-change-password',
        templateUrl: './change-password.component.html',
        styleUrls: ['./change-password.component.css']
    })
], ChangePasswordComponent);
export { ChangePasswordComponent };
//# sourceMappingURL=change-password.component.js.map