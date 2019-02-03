import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizzesComponent } from './quizzes.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Quizzes - Display',
            urls: [{ title: 'Dashboard', url: '/' }, { title: 'ngComponent' }, { title: 'Accordion' }]
        },
        component: QuizzesComponent,
    }
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgbModule.forRoot(),
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuizzesRoutingModule { }
