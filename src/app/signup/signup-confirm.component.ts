import { OnInit, Component } from "@angular/core";
import { UserService } from "../shared/services/user.service";

@Component({
    templateUrl: 'signup-confirm.component.html'
})
export class SignupConfirmComponent implements OnInit {
    confirmed = false;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.userService.confirm()
            .subscribe(response => {
                this.confirmed = true;
            }, error => {
                console.log(error);
            });
    }
}