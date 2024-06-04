import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    form:FormGroup

    constructor(private formBuilder:FormBuilder , private router:Router) {
      this.form=this.formBuilder.group({
        email:['',[Validators.required,Validators.email]],
        pass:['',[Validators.required]]
      })
    }

    submit(){
      if(this.form.value.pass=123456 && this.form.value.email=='elomdasultan@gmail.com'){
          this.router.navigate(['/home']);
        // this.router.navigate(['/home']).then( ()=> {
        //   window.location.reload();
        // });
      }
    }

    get f(){
      return this.form.controls;
    }

    register(){
      this.router.navigate(['/register']);
    }
}
