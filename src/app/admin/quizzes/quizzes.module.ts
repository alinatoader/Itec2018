import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { QuizzesComponent } from './quizzes.component';
import { QuizzesRoutingModule } from './quizzes-routing.module';

@NgModule({
    imports: [
        CommonModule,
        QuizzesRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        QuizzesComponent
    ]
})
export class QuizzesModule { }
