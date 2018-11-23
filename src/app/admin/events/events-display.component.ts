import { Component } from "@angular/core";
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
    templateUrl: 'events-display.component.html'
})
export class EventsDisplayComponent{
    private events = ['Event1', 'event2', 'event3'];
    
    public beforeChange($event: NgbTabChangeEvent) {
        if ($event.nextId === 'tab-preventchange2') {
          $event.preventDefault();
        }
      };
}