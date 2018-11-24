import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupConfirmComponent } from './signup-confirm.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignupRoutingModule,
    NgbModule
  ],
  declarations: [
    SignupComponent,
    SignupConfirmComponent
  ]
})
export class SignupModule { }
