import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ProfileComponent = class ProfileComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.allDoctors = [];
    }
    ngOnInit() {
        const usernamenew = JSON.parse(localStorage.getItem('username'));
        const passwordnew = JSON.parse(localStorage.getItem('password'));
        this.userService.getPatient(usernamenew, passwordnew).subscribe((user) => {
            this.users = user;
        });
        //mozes da uradis azuriranje lako za dodatne poene
    }
};
ProfileComponent = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css']
    })
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map