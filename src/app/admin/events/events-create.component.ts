import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { EventsService } from "./events.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-events-create',
    templateUrl: 'events-create.component.html'
})
export class EventsCreateComponent implements OnInit {
    name: any;
    events: any;
    eventCreateForm: FormGroup;

    constructor(private eventsService: EventsService, private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.eventCreateForm = new FormGroup({
            name: new FormControl(''),
            description: new FormControl(''),
            startDate: new FormControl(''),
            endDate: new FormControl(''),
            quizzes: new FormControl('')
        });
        this.name = this.route.snapshot.paramMap.get('name');
        if (this.name) {
            this.getEventByName(this.name);
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
        if (this.name) {
            this.updateEvent();
        } else {
            this.addEvent();
        }
    }

    updateEvent() {
        //const formValue = this.eventCreateForm.value;
        //const event = { name: formValue.name, description: formValue.description, startDate: formValue.startDate, endDate: formValue.endDate };
        this.eventsService.update(this.name, this.eventCreateForm.value)
            .subscribe(response => {
                console.log(response);
                this.router.navigateByUrl('/admin/events');
            }, error => {
                console.log(error);
            }
            );
    }

    getEventByName(name: string) {
        this.eventsService.getByName(name).subscribe(
            response => {
                console.log(response);
                this.eventCreateForm.setValue(response);
            }, error => console.log(error)
        );
    }
}