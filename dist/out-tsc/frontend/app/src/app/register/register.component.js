import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RegisterComponent = class RegisterComponent {
    constructor(userService) {
        this.userService = userService;
        this.users = [];
        this.doesUsernameExist = false;
        this.doesEmailExist = false;
        this.isPasswordGood = false;
        this.isEmailGood = false;
        this.isNumberGood = false;
    }
    ngOnInit() {
    }
    usernameTF() {
        this.userService.findUsername().subscribe((data) => {
            data.forEach(user => {
                if (this.username === user.username) {
                    this.doesUsernameExist = true;
                }
                if (this.email === user.email) {
                    this.doesEmailExist = true;
                }
            });
        });
    }
    register() {
        function validatePassword(password) {
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?!.*(.)\1)[A-Za-z\d@$!%*?&]{8,14}$/;
            return regex.test(password);
        }
        function isEmailValid(email) {
            const regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
            return regex.test(email);
        }
        function isNumberValid(number) {
            const regex = /^06/;
            return regex.test(number);
        }
        this.isPasswordGood = validatePassword(this.password);
        this.isEmailGood = isEmailValid(this.email);
        this.isNumberGood = isNumberValid(this.number);
        if (this.passwordconf === this.password && this.doesUsernameExist === false && this.doesEmailExist === false && this.isPasswordGood === true && this.isEmailGood === true && this.isNumberGood == true) {
            this.userService.register(this.firstname, this.lastname, this.username, this.password, this.passwordconf, this.address, this.number, this.email).subscribe(respObj => {
                {
                    if (respObj['message'] == 'ok') {
                        this.message = 'user added';
                    }
                    else if (respObj['message'] == 'notconf') {
                        this.message = 'user error';
                        this.message = 'passwords do not match';
                    }
                }
            });
        }
        else if (this.passwordconf !== this.password) {
            this.message = 'passwords do not match';
        }
        else if (this.doesUsernameExist === true) {
            this.message = 'username already exists';
        }
        else if (this.doesEmailExist == true) {
            this.message = 'email already exists';
        }
        else if (this.isPasswordGood === false) {
            this.message = 'Password needs to have 8 to 14 characters, one special character, one big letter, and no same letter next to each other';
        }
        else if (this.isEmailGood === false) {
            this.message = 'wrong email format';
        }
        else if (this.isNumberGood == false) {
            this.message = 'number needs to start with 06';
        }
        setTimeout(function () {
            location.reload();
        }, 2000);
        //location.reload() //refreshuje stranicu automatski
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map