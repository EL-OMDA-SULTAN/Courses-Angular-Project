import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebcoursesComponent } from './webcourses/webcourses.component';
import { MobilecoursesComponent } from './mobilecourses/mobilecourses.component';
import { AicoursesComponent } from './aicourses/aicourses.component';
import { GamingcoursesComponent } from './gamingcourses/gamingcourses.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { CoursedetialsComponent } from './coursedetials/coursedetials.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    WebcoursesComponent,
    MobilecoursesComponent,
    AicoursesComponent,
    GamingcoursesComponent,
    CoursedetialsComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
