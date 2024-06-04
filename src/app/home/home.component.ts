import { Component, Type } from '@angular/core';
import { Router } from '@angular/router';
import {NgxTypedJsModule} from 'ngx-typed-js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  courses=[{src:'../../assets/gc c++.webp',title:'C++ Programming Language',description:'Learn C++ Programming Language',},
  {src:'../../assets/gc python.jpg',title:'Py Programming Language',description:'Learn Python Programming Language',},
  {src:'../../assets/gc c charb.png',title:'C# Programming Language',description:'Learn C# Programming Language',},
  {src:'../../assets/gc c.webp',title:'C Programming Language',description:'Learn C Programming Language',}
  ];

  constructor(private router:Router){

  }

  golearn(){
    this.router.navigate(['/coursedetials']);
  }
}
