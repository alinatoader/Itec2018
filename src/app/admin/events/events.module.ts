import { NgModule } from '@angular/core';
import { EventsRoutingModule } from './events-routing.module';
import { EventsDisplayComponent } from './events-display.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventsCreateComponent } from './events-create.component';
import { QuizCreateComponent } from './quiz-create.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        NgbModule.forRoot(),
        EventsRoutingModule,
        QRCodeModule
    ],
    declarations: [
        EventsDisplayComponent,
        EventsCreateComponent,
        QuizCreateComponent
    ]
})
export class EventsModule { }
