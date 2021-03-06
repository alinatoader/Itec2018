import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewInit {
    registerForm: FormGroup;
    errorMessage: string = null;
    returnUrl: string;

    constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
        this.registerForm = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            confirmPassword: new FormControl('', Validators.required),
            name: new FormControl('', Validators.required),
            phone: new FormControl('', Validators.required),
            image: new FormControl('')
        });
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onRegister() {
        const user = this.registerForm.value;
        if (user.password != user.confirmPassword) {
            this.errorMessage = 'Password doesn\'t match! Try again!';
            return;
        }
        const registerUser = {
            name: user.name,
            email: user.email,
            password: user.password,
            image: user.image,
            phone: user.phone,
            confirmUrl: 'https://quizzmee.herokuapp.com/#/signup/confirm/' + user.email
        };
        this.userService.register(registerUser).toPromise()
            .then(response => {
                if (response == null) {
                    this.errorMessage = 'This user already exists!';
                } else {
                    this.router.navigate(['/'], { queryParams: { returnUrl: this.returnUrl } });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    ngAfterViewInit() {
        $(function () {
            $(".preloader").fadeOut();
        });
        $(function () {
            (<any>$('[data-toggle="tooltip"]')).tooltip()
        });
        $('#to-recover').on("click", function () {
            $("#loginform").slideUp();
            $("#recoverform").fadeIn();
        });
    }
}
