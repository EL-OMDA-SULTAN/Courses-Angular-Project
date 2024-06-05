import { GamingcoursesComponent } from './gamingcourses/gamingcourses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WebcoursesComponent } from './webcourses/webcourses.component';
import { MobilecoursesComponent } from './mobilecourses/mobilecourses.component';
import { AicoursesComponent } from './aicourses/aicourses.component';
import { CoursedetialsComponent } from './coursedetials/coursedetials.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'webcourses',component:WebcoursesComponent},
  {path:'mobilecourses',component:MobilecoursesComponent},
  {path:'aicourses',component:AicoursesComponent},
  {path:'gamingcourses',component:GamingcoursesComponent},
  {path:'coursedetials',component:CoursedetialsComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
