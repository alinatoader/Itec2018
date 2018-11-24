import { Component, OnInit } from "@angular/core";
import { EventsService } from "./events.service";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: 'quiz-create.component.html'
})
export class QuizCreateComponent implements OnInit {
    eventId: number;
    quizCreateForm: FormGroup;

    constructor(private eventsService: EventsService, private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.quizCreateForm = new FormGroup({
            name: new FormControl(''),
            score: new FormControl(''),
            time: new FormControl(''),
            ruleList: new FormArray([])
        });
        this.eventId = Number(this.route.snapshot.paramMap.get('eventId'));

    }

    saveQuiz() {
        console.log(this.quizCreateForm.value);
        // this.eventsService.create(this.quizCreateForm.value)
        //     .subscribe(response => {
        //         console.log(response);
        //         this.router.navigateByUrl('/admin/events');
        //     }, error => {
        //         console.log(error);
        //     }
        //     );
    }

    addNewRule() {
        (this.quizCreateForm.get('ruleList') as FormArray).push(new FormGroup({
            category: new FormControl(''),
            difficulty: new FormControl(''),
            nrOfQuiestion: new FormControl('')
        }));
    }
}