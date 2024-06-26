import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router:Router) {
  }

  show(){
    return !(this.router.url == '/login' || this.router.url =="/register");
  }

  login(){
    this.router.navigate(['/login']);
  }
  homePage(){
    this.router.navigate(['/home']);
  }
  webPage(){
    this.router.navigate(['/webcourses']);
  }
}
