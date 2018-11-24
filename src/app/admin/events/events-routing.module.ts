import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsDisplayComponent } from './events-display.component';
import { EventsCreateComponent } from './events-create.component';
import { QuizCreateComponent } from './quiz-create.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Events - Display',
            urls: [{ title: 'Dashboard', url: '/' }, { title: 'ngComponent' }, { title: 'Tabs' }]
        },
        component: EventsDisplayComponent,
    },
    {
        path: 'create',
        component: EventsCreateComponent
    },
    {
        path: 'create/:id',
        component: EventsCreateComponent
    },
    {
        path: 'quiz/:eventId',
        component: QuizCreateComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule { }
