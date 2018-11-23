import { NgModule } from '@angular/core';
import { EventsRoutingModule } from './events-routing.module';
import { EventsDisplayComponent } from './events-display.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgbModule.forRoot(),
        EventsRoutingModule
    ],
    declarations: [
        EventsDisplayComponent
    ]
})
export class EventsModule { }
