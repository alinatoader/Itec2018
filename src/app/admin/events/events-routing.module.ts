import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsDisplayComponent } from './events-display.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Events - Display',
            urls: [{title: 'Dashboard', url: '/'},{title: 'ngComponent'},{title: 'Tabs'}]
          },
        component: EventsDisplayComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule { }
