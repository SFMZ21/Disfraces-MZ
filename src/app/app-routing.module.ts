import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './modules/auth/Pages/auth-page/auth-page.component';
import { HomePageComponent } from '@modules/home/Pages/home-page/home-page.component';


const routes: Routes = [
  {
    path:'login',
    component:AuthPageComponent
  },
  {
    path:'home',
    component:HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
