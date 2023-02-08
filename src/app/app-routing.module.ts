import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructionComponent } from './construction/construction.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register/register.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'construction', component: ConstructionComponent },
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterUserComponent },
  // { redirectTo: 'home',  path: '/', component: RegisterUserComponent, pathMatch: "full" },
  
  { path: '**', component: HomeComponent },

  //{ path: '404', component : NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
