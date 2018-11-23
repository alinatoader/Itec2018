import { NgModule } from '@angular/core';
import { EventsRoutingModule } from './events-routing.module';
import { EventsDisplayComponent } from './events-display.component';

@NgModule({
    imports: [
        EventsRoutingModule
    ],
    declarations: [
        EventsDisplayComponent
    ]
})
export class EventsModule { }
