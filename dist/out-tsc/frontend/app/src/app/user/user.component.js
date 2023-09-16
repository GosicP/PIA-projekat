import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UserComponent = class UserComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
    }
    //moras da promenis, da te button vodi na drugi window, gde ces dobiti formu za popunjavanje ovih polja, i onda se zapravo zove changepassword
    logout() {
        sessionStorage.clear();
        //localstorage.clear
        this.router.navigate(['']);
    }
};
UserComponent = __decorate([
    Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.css']
    })
], UserComponent);
export { UserComponent };
//# sourceMappingURL=user.component.js.map