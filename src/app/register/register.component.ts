import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form:FormGroup

    constructor(private formBuilder:FormBuilder , private router:Router) {
      this.form=this.formBuilder.group({
        name:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        pass:['',[Validators.required]],
        repass:['',[Validators.required]]
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

    // equlePass(){
    //   // console.log(this.form.value.pass , this.form.value.repass);
    //   return this.form. != this.form.value.repass
    // }

    login(){
      this.router.navigate(['/login']);
    }
}
