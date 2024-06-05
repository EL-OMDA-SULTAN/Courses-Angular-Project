import { Component } from '@angular/core';

@Component({
  selector: 'app-coursedetials',
  templateUrl: './coursedetials.component.html',
  styleUrls: ['./coursedetials.component.css']
})
export class CoursedetialsComponent {
  isH:boolean=false;
  value1='fa-regular';
  value2='fa-regular';
  value3='fa-regular';
  value4='fa-regular';
  value5='fa-regular';

  isHover(x:number){
    this.isH=!this.isH;
    if(x == 1){
      if(this.value1=='fa-regular'){
          this.value1='fa-solid'
      }
      else{
        this.value1='fa-regular'
      }
    }
    if(x == 2){
      if(this.value2=='fa-regular'){
          this.value2='fa-solid'
      }
      else{
        this.value2='fa-regular'
      }
    }
    if(x == 3){
      if(this.value3=='fa-regular'){
          this.value3='fa-solid'
      }
      else{
        this.value3='fa-regular'
      }
    }
    if(x == 4){
      if(this.value4=='fa-regular'){
          this.value4='fa-solid'
      }
      else{
        this.value4='fa-regular'
      }
    }
    if(x == 5){
      if(this.value5=='fa-regular'){
          this.value5='fa-solid'
      }
      else{
        this.value5='fa-regular'
      }
    }
  }
}
