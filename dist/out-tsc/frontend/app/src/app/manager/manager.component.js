import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ManagerComponent = class ManagerComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        this.userService.login(this.username, this.password).subscribe((userFromDB) => {
            if (userFromDB != null) {
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
};
ManagerComponent = __decorate([
    Component({
        selector: 'app-manager',
        templateUrl: './manager.component.html',
        styleUrls: ['./manager.component.css']
    })
], ManagerComponent);
export { ManagerComponent };
//# sourceMappingURL=manager.component.js.map