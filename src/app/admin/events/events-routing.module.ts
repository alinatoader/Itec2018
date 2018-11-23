import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsDisplayComponent } from './events-display.component';
import { EventsCreateComponent } from './events-create.component';

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
        path: 'create/:name',
        component: EventsCreateComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule { }
