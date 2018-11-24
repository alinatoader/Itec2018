import { Component, OnInit } from "@angular/core";
import { NgbPanelChangeEvent, NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { QuestionsService } from "./questions.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    templateUrl: 'questions-display.component.html'
})
export class QuestionsDisplayComponent implements OnInit {
    private questions: any;
    private categories: any;
    closeResult: string;
    uploadForm: FormGroup;

    constructor(private questionsService: QuestionsService, private router: Router,
        private modalService: NgbModal, private modalService2: NgbModal) { }

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
        this.uploadForm = new FormGroup({
            file: new FormControl()
        });
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

    open2(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    open(content) {
        this.modalService2.open(content, { windowClass: 'dark-modal' });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    importQuestions(content: any) {
        this.open2(content);
    }

    uploadFile(event:any) {
        this.questionsService.upload(this.uploadForm.value.file)
            .subscribe(_ => {
               // this.router.navigateByUrl('/admin/questions');
            }, error => {
                console.log(error)
            });
    }
}