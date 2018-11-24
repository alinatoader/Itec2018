import { Component, OnInit } from "@angular/core";
import { NgbPanelChangeEvent } from "@ng-bootstrap/ng-bootstrap";
import { QuestionsService } from "./questions.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: 'questions-display.component.html'
})
export class QuestionsDisplayComponent implements OnInit {
    private questions: any;
    private categories: any;

    constructor(private questionsService: QuestionsService, private router: Router) { }

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
        this.questionsService.getAll()
            .subscribe(questions => {
                this.questions = questions;
                this.categories = [];
                for (let category in this.questions) {
                    this.categories.push(category);
                }
            }, error => {
                console.log(error);
            });
    }

    ngOnInit(): void {
        this.getAll();
    }

    editQuestion(id: number) {
        this.router.navigateByUrl('/admin/questions/create/' + id);
    }

    deleteQuestion(id: number) {
        this.questionsService.delete(id).subscribe(_ => {
            this.getAll();
        },
            error => {
                console.log(error);
            }
        );
    }

    search(event, category, difficultySelect, sortSelect) {
        let searchText = event.target.value;
        const body = {
            searchedText: searchText,
            difficulty: difficultySelect.value,
            category: category,
            sortBoolean: sortSelect.value === 'ASC' ? true : false
        }
        this.questionsService.filter(body)
            .subscribe(response => {
                this.questions[category] = response;
            }, error => console.log(error))
    }

    filter(event, category, sortSelect, searchInput) {
        const filterDifficulty = event.target.value;
        const body = {
            searchedText: searchInput.value,
            difficulty: filterDifficulty === 'Difficulty' ? null : filterDifficulty,
            category: category,
            sortBoolean: sortSelect.value === 'ASC' ? true : false
        }
        this.questionsService.filter(body)
            .subscribe(response => {
                this.questions[category] = response;
            }, error => console.log(error));
    }

    sort(event, category, difficultySelect, searchInput) {
        let sortDir = event.target.value;
        const body = {
            searchedText: searchInput.value,
            difficulty: difficultySelect.value,
            category: category,
            sortBoolean: sortDir === 'ASC' ? true : false
        };
        this.questionsService.filter(body)
            .subscribe(response => {
                this.questions[category] = response;
            }, error => console.log(error));
    }
}