import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { SignupConfirmComponent } from './signup-confirm.component';

const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'confirm/:email', component: SignupConfirmComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
