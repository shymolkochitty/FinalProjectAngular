import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Loginuser } from '../loginuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  isSubmitted: boolean;
  loginuser: Loginuser;
  
  

  constructor(private loginService:LoginService,
    private router:Router,
    private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.loginform=this.formBuilder.group(
      {
        username:['', Validators.compose([Validators.required])],
         password:['',Validators.required]


      }
    );
  }


  get formControls(){
    return this.loginform.controls;
  }


    login(){
      console.log(this.loginform.value);
      this.isSubmitted=true;
      if(this.loginform.valid){
         
        this.loginService.login(this.loginform.value).subscribe(
            data =>{
              this.loginuser=data;
              console.log(data);
              console.log(data.roleid)

                if(data.roleid!=null && data.roleid==1){
                  this.isSubmitted=true;
                  console.log("entered valid login credentials");
                  this.router.navigateByUrl('/vendorlist');
                }

                else{
                  window.alert("wrong username or password");
                }
              }

          );

        }
        else{
          window.alert('user form is invalid');
          return;
        }
      }
}
