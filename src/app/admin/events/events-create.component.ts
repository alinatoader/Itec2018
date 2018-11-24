import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { EventsService } from "./events.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-events-create',
    templateUrl: 'events-create.component.html'
})
export class EventsCreateComponent implements OnInit {
    id: any;
    events: any;
    eventCreateForm: FormGroup;

    constructor(private eventsService: EventsService, private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.eventCreateForm = new FormGroup({
            id: new FormControl(0),
            name: new FormControl(''),
            description: new FormControl(''),
            startDate: new FormControl(''),
            endDate: new FormControl(''),
            quizzes: new FormControl('')
        });
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.getEventByName(this.id);
        }
    }

    addEvent() {
        this.eventsService.create(this.eventCreateForm.value)
            .subscribe(response => {
                console.log(response);
                this.router.navigateByUrl('/admin/events');
            }, error => {
                console.log(error);
            }
            );
    }

    saveEvent() {
        if (this.id) {
            this.updateEvent();
        } else {
            this.addEvent();
        }
    }

    updateEvent() {
        this.eventsService.update(this.id, this.eventCreateForm.value)
            .subscribe(response => {
                console.log(response);
                this.router.navigateByUrl('/admin/events');
            }, error => {
                console.log(error);
            }
            );
    }

    getEventByName(id: number) {
        this.eventsService.getById(id).subscribe(
            response => {
                console.log(response);
                this.eventCreateForm.setValue(response);
            }, error => console.log(error)
        );
    }
}