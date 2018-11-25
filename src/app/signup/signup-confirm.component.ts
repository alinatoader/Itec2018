import { OnInit, Component, AfterViewInit } from "@angular/core";
import { UserService } from "../shared/services/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: 'signup-confirm.component.html'
})
export class SignupConfirmComponent implements OnInit, AfterViewInit {
    confirmed = false;

    constructor(private userService: UserService, private route: ActivatedRoute) { }

    confirm(email: string) {
        this.userService.confirm(email)
            .subscribe(response => {
                this.confirmed = true;
                console.log('confirmed');
            }, error => {
                console.log(error);
            });
    }

    ngOnInit(): void {
        const email = this.route.snapshot.paramMap.get('email');
        this.confirm(email);
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