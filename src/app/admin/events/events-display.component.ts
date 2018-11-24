import { Component, OnInit } from "@angular/core";
import { NgbTabChangeEvent, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from "./events.service";
import { Router } from "@angular/router";
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
    public linkForQR: string;
    closeResult: string;

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

    deleteEvent(name: string) {
        this.eventsService.delete(name).subscribe(_ => {
            this.getAll();
        },
            error => {
                console.log(error);
            }
        );
    }

    editEvent(name: string) {
        this.router.navigateByUrl('/admin/events/create/' + name);
    }

    addQuiz(eventId: number) {
        this.router.navigateByUrl('/admin/events/quiz/' + eventId);
    }

    ngOnInit(): void {
        this.getAll();
    }

    generateQR(quizId: number, content) {
        this.linkForQR = 'https://quizzmee.herokuapp.com/';
        this.open2(content);
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
}