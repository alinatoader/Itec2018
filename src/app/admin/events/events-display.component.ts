import { Component, OnInit, ViewChild } from "@angular/core";
import { NgbTabChangeEvent, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from "./events.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
    templateUrl: 'events-display.component.html',
    styles: [`
    .dark-modal .modal-content {
      background-color: #009efb;
      color: white;
    }
    .dark-modal .close {
      color: white;   
    }
  `]
})
export class EventsDisplayComponent implements OnInit {
    events: any;
    public linkForQR: string = null;
    closeResult: string;
    emailForm: FormGroup;
    quizId = 0;

    constructor(private eventsService: EventsService, private router: Router,
        private modalService: NgbModal, private modalService2: NgbModal) { }

    public beforeChange($event: NgbTabChangeEvent) {
        if ($event.nextId === 'tab-preventchange2') {
            $event.preventDefault();
        }
    };

    getAll() {
        this.eventsService.getAll().subscribe(events => {
            this.events = events;
        },
            error => {
                console.log(error);
            })
    }

    deleteEvent(id:number) {
        this.eventsService.delete(id).subscribe(_ => {
            this.getAll();
        },
            error => {
                console.log(error);
            }
        );
    }

    editEvent(id:number) {
        this.router.navigateByUrl('/admin/events/create/' + id);
    }

    addQuiz(eventId: number) {
        this.router.navigateByUrl('/admin/events/quiz/' + eventId);
    }

    ngOnInit(): void {
        this.getAll();
        this.emailForm = new FormGroup({
            email: new FormControl('', Validators.email)
        })
    }

    generateQR(quizId: number, content) {
        this.linkForQR = null;
        this.emailForm.reset();
        this.quizId = quizId;
        this.open2(content);
    }

    onEmailChange(event) {
        const emailInput = this.emailForm.get('email');
        if (emailInput.valid) {
            this.linkForQR = 'https://quizzmee.herokuapp.com/#/quiz/' + this.quizId + '/' + emailInput.value;
        }
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

    search(event, statusSelect, sortSelect) {
        const searchValue = event.target.value;
        const body = {
            searchName: searchValue,
            eventStatus: statusSelect.value,
            sortByDate: sortSelect.value === 'ASC' ? true : false,
        }
        this.eventsService.filter(body)
            .subscribe(response => {
                this.events = response;
            }, error => console.log(error));
    }

    filter(event, sortSelect, searchInput) {
        const filterStatus = event.target.value;
        const body = {
            searchName: searchInput.value,
            eventStatus: filterStatus,
            sortByDate: sortSelect.value === 'ASC' ? true : false,
        }
        this.eventsService.filter(body)
            .subscribe(response => {
                this.events = response;
            }, error => console.log(error));
    }

    sort(event, statusSelect, searchInput) {
        const sortDir = event.target.value;
        const body = {
            searchName: searchInput.value,
            eventStatus: statusSelect.value,
            sortByDate: sortDir === 'ASC' ? true : false,
        }
        this.eventsService.filter(body)
            .subscribe(response => {
                this.events = response;
            }, error => console.log(error));
    }
}