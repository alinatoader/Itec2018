import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsDisplayComponent } from './events-display.component';

const routes: Routes = [
    {
        path: '',
        component: EventsDisplayComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule { }
