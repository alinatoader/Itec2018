import { OnInit, Component } from "@angular/core";
import { UserService } from "../../shared/services/user.service";

@Component({
    templateUrl: 'admin-add.component.html'
})
export class AdminAddComponent implements OnInit {
    users: any;

    constructor(private userService: UserService) { }

    getAll() {
        this.userService.getAll()
            .subscribe(users => {
                this.users = users;
            }, error => {
                console.log(error);
            })
    }

    modifyAdminRole(email: string) {
        this.userService.modifyAdminRole(email)
            .subscribe(_ => {
                this.getAll();
            }, error => {
                console.log(error);
            })
    }

    ngOnInit(): void {
        this.getAll();
    }

}