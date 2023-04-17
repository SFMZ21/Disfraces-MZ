import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './Pages/auth-page/auth-page.component';

const routes: Routes = [
  {
    path:'login',
    component: AuthPageComponent
  },
  {
    path:'**',
    redirectTo: '/login'
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
