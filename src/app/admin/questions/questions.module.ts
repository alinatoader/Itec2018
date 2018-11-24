import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsDisplayComponent } from './questions-display.component';
import { QuestionsRoutingModule } from './questions-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionsCreateComponent } from './questions-create.component';

@NgModule({
    imports: [
        CommonModule,
        QuestionsRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        QuestionsDisplayComponent,
        QuestionsCreateComponent
    ]
})
export class QuestionsModule { }
