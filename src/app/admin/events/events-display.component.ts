import { Component, OnInit } from "@angular/core";
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from "./events.service";
import { Router } from "@angular/router";
@Component({
    templateUrl: 'events-display.component.html'
})
export class EventsDisplayComponent implements OnInit {
    events: any;

    constructor(private eventsService: EventsService, private router: Router) { }

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

    editEvent(name: string){
        this.router.navigateByUrl('/admin/events/create/' + name);
    }

    ngOnInit(): void {
        this.getAll();
    }
}