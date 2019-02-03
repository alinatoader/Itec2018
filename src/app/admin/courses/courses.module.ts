import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizCreateComponent } from './quiz-create.component';
import { QRCodeModule } from 'angularx-qrcode';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesDisplayComponent } from './courses-display.component';
import { CoursesCreateComponent } from './courses-create.component';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        NgbModule.forRoot(),
        CoursesRoutingModule,
        QRCodeModule
    ],
    declarations: [
        CoursesDisplayComponent,
        CoursesCreateComponent,
        QuizCreateComponent
    ]
})
export class CoursesModule { }
