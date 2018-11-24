import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsDisplayComponent } from './questions-display.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionsCreateComponent } from './questions-create.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Questions - Display',
            urls: [{ title: 'Dashboard', url: '/' }, { title: 'ngComponent' }, { title: 'Accordion' }]
        },
        component: QuestionsDisplayComponent,
    },
    {
        path: 'create',
        component: QuestionsCreateComponent
    },
    {
        path: 'create/:id',
        component: QuestionsCreateComponent
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
export class QuestionsRoutingModule { }
