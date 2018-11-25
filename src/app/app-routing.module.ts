import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './shared/guard/auth.guard';
import { NotFoundComponent } from './404/not-found.component';
import { UserGuard } from './user/user.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'signup',
    loadChildren: './signup/signup.module#SignupModule'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
    canActivate: [UserGuard]
  },
  {
    path: '**',
    loadChildren: './404/not-found.module#NotFoundModule',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    NgbModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
