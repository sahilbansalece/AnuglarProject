import { AuthGuard } from './auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';



const routes: Routes = [
  {
    path:  '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path : 'register',
    component : RegistrationComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'home',
    component: HomepageComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
