import { OnInit, Component } from "@angular/core";
import { UserService } from "../shared/services/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: 'signup-confirm.component.html'
})
export class SignupConfirmComponent implements OnInit {
    confirmed = false;

    constructor(private userService: UserService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        const email = this.route.snapshot.paramMap.get('email');
        this.userService.confirm(email)
            .subscribe(response => {
                this.confirmed = true;
            }, error => {
                console.log(error);
            });
    }
}