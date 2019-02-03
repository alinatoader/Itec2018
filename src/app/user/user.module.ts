import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user.routing-module';
import { QuizComponent } from './quiz.component';
import { AdminModule } from '../admin/admin.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        UserRoutingModule,
        AdminModule,

    ],
    declarations: [
        QuizComponent,
        
    ],

})
export class UserModule { }
