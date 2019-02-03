import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesDisplayComponent } from './courses-display.component';
import { CoursesCreateComponent } from './courses-create.component';
import { QuizCreateComponent } from './quiz-create.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Courses - Display',
            urls: [{ title: 'Dashboard', url: '/' }, { title: 'ngComponent' }, { title: 'Tabs' }]
        },
        component: CoursesDisplayComponent,
    },
    {
        path: 'create',
        component: CoursesCreateComponent
    },
    {
        path: 'create/:id',
        component: CoursesCreateComponent
    },
    {
        path: 'quiz/:courseId',
        component: QuizCreateComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule { }
