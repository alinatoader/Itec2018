import { Component } from "@angular/core";
import { NgbPanelChangeEvent } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "../../shared/services/user.service";
import { Router } from "@angular/router";
import { QuizService } from "../../user/quiz.service";

@Component({
    templateUrl: 'quizzes.component.html'
})
export class QuizzesComponent {
    quizzes: any;

    constructor(private quizzesService: QuizService, private userService: UserService,
        private router: Router) { }

    beforeChange($event: NgbPanelChangeEvent) {

        if ($event.panelId === 'preventchange-2') {
            console.log('if 1');
            $event.preventDefault();
        }

        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            console.log('if2');
            $event.preventDefault();
        }
    }

    getAll() {
        this.quizzesService.getAll()
            .subscribe(quizzes => {
                this.quizzes = quizzes;
                const user = this.userService.getUserFromLocalStorage();
                for (let i = 0; i < this.quizzes.length; i++) {
                    this.quizzesService.getQuizCompleted(user.email, this.quizzes[i].id).subscribe(response =>{
                        this,quizzes[i].taken = response;
                    });
                }
            }, error => {
                console.log(error);
            });
    }

    goToQuiz(quizId: number) {
        const loggedUser = this.userService.getUserFromLocalStorage();
        this.router.navigateByUrl('/user/quiz/' + quizId + '/' + loggedUser.email);
    }

    ngOnInit(): void {
        this.getAll();
    }
}