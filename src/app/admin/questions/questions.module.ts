import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsDisplayComponent } from './questions-display.component';
import { QuestionsRoutingModule } from './questions-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        QuestionsRoutingModule,
        FormsModule,
        CommonModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        QuestionsDisplayComponent
    ]
})
export class QuestionsModule { }
