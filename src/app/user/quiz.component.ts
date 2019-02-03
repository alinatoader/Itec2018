import { Component, OnInit, AfterViewInit } from "@angular/core";
import { QuizService } from "./quiz.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../shared/services/user.service";

@Component({
    templateUrl: 'quiz.component.html'
})
export class QuizComponent implements OnInit, AfterViewInit {
    quizId: number;
    questions: any;
    email: string;
    errorMessage: string;

    constructor(private quizService: QuizService, private route: ActivatedRoute,
        private userService: UserService, private router: Router) { }

    ngOnInit(): void {
        this.quizId = Number(this.route.snapshot.paramMap.get('id'));
        this.email = this.route.snapshot.paramMap.get('email');
        const loggedUser = this.userService.getUserFromLocalStorage();
        if (loggedUser.email !== this.email) {
            this.errorMessage = 'You are not allowed to enter this page!';
            console.log(this.errorMessage);
            this.router.navigateByUrl('/404');
        }
        this.getQuizCompleted();
    }

    getQuizCompleted() {
        this.quizService.getQuizCompleted(this.email, this.quizId)
            .subscribe(response => {
                if (response) {
                    this.errorMessage = 'You have already completed this quiz!';
                    console.log(this.errorMessage);
                    this.router.navigateByUrl('/404');
                } else {
                    this.errorMessage = undefined;
                    this.getQuestions();
                }
            })
    }

    getQuestions() {
        this.quizService.getQuestions(this.quizId)
            .subscribe(response => {
                console.log(response);
                this.questions = response;
                for (let i = 0; i < this.questions.length; i++) {
                    for (let j = 0; j < this.questions[i].answersList.length; j++) {
                        this.questions[i].answersList[j].checked = false;
                    }
                }
                console.log(this.questions);
            }, error => {
                console.log(error);
            })
    }

    toggleChecked(questionId: number, answerId: number) {
        for (let i = 0; i < this.questions.length; i++) {
            if (this.questions[i].id == questionId) {
                for (let j = 0; j < this.questions[i].answersList.length; j++) {
                    if (this.questions[i].answersList[j].id == answerId) {
                        let a = this.questions[i].answersList[j];
                        a.checked = a.checked ? false : true;
                        break;
                    }
                }
                break;
            }
        }
    }

    submitQuiz() {
        let score = 0;
        let responseModel = {
            quizId: this.quizId,
            emailUser: this.email,
            score: 0,
            answerModels: []
        };
        for (let i = 0; i < this.questions.length; i++) {
            const q = this.questions[i];
            let correct = true;
            for (let j = 0; j < q.answersList.length; j++) {
                let a = q.answersList[j];
                if (a.correct !== a.checked) {
                    correct = false;
                    break;
                }
            }
            if (correct) { score = score + q.score; }
            responseModel.answerModels.push({ questionId: q.id, isCorrect: correct });
        }
        responseModel.score = score;
        console.log(responseModel);
        this.quizService.postResult(responseModel)
            .subscribe(_ => {
                console.log('success');
                this.router.navigateByUrl('/admin/quizzes');
            }, error => {
                console.log(error);
            })
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