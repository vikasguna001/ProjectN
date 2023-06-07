import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from 'src/app/landingpage/landingpage.component';
import { LoginComponent } from './login.component';
import { LoginModule } from './login.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
