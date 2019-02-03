import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { CoursesService } from "./courses.service";

@Component({
    templateUrl: 'quiz-create.component.html'
})
export class QuizCreateComponent implements OnInit {
    courseId: number;
    quizCreateForm: FormGroup;

    constructor(private eventsService: CoursesService, private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.quizCreateForm = new FormGroup({
            name: new FormControl(''),
            score: new FormControl(''),
            time: new FormControl(''),
            ruleList: new FormArray([])
        });
        this.courseId = Number(this.route.snapshot.paramMap.get('courseId'));

    }

    saveQuiz() {
        let quiz = this.quizCreateForm.value;
        quiz.courseId = this.courseId;
        this.eventsService.createQuiz(quiz)
            .subscribe(response => {
                this.router.navigateByUrl('/admin/courses');
            }, error => {
                console.log(error);
            }
            );
    }

    addNewRule() {
        (this.quizCreateForm.get('ruleList') as FormArray).push(new FormGroup({
            category: new FormControl(''),
            difficulty: new FormControl(''),
            nrOfQuiestion: new FormControl('')
        }));
    }
}