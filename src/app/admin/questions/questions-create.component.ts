import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { QuestionsService } from "./questions.service";

@Component({
    templateUrl: 'questions-create.component.html'
})
export class QuestionsCreateComponent implements OnInit {
    id: number;
    question: any;
    questionCreateForm: FormGroup;

    constructor(private questionsService: QuestionsService, private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.questionCreateForm = new FormGroup({
            id: new FormControl(''),
            quizId: new FormControl(''),
            answersList: new FormArray([]),
            text: new FormControl(''),
            image: new FormControl(''),
            time: new FormControl(''),
            difficulty: new FormControl(''),
            score: new FormControl(''),
            category: new FormControl('')
        });
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        if (this.id) {
            this.getQuestionById(this.id);
        }
    }

    addNewAnswer() {
        (this.questionCreateForm.get('answersList') as FormArray).push(new FormGroup({
            value: new FormControl(''),
            correct: new FormControl(false)
        }));
    }

    addQuestion() {
        console.log(this.questionCreateForm.value);
        this.questionsService.create(this.questionCreateForm.value)
            .subscribe(response => {
                console.log(response);
                this.router.navigateByUrl('/admin/questions');
            }, error => {
                console.log(error);
            }
            );
    }

    saveQuestion() {
        if (this.id) {
            this.updateQuestion();
        } else {
            this.addQuestion();
        }
    }

    updateQuestion() {
        this.questionsService.update(this.id, this.questionCreateForm.value)
            .subscribe(response => {
                this.router.navigateByUrl('/admin/questions');
            }, error => {
                console.log(error);
            }
            );
    }

    getQuestionById(id: number) {
        this.questionsService.getById(id).subscribe(
            response => {
                const question = response as any; console.log(question);
                this.questionCreateForm.get('text').setValue(question.text);
                this.questionCreateForm.get('image').setValue(question.image);
                this.questionCreateForm.get('time').setValue(question.time);
                this.questionCreateForm.get('difficulty').setValue(question.difficulty);
                this.questionCreateForm.get('score').setValue(question.score);
                this.questionCreateForm.get('category').setValue(question.category);
                for (let index = 0; index < question.answersList.length; index++) {
                    (this.questionCreateForm.get('answersList') as FormArray).push(new FormGroup({
                        value: new FormControl(question.answersList[index].value),
                        correct: new FormControl(question.answersList[index].correct)
                    }));
                }
            }, error => console.log(error)
        );
    }
}