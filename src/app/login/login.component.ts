import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private services:ServicesService){}
  formgroup=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  })
  ngOnInit(): void {

  }

  login(){
    this.services.login(this.formgroup.value).subscribe((res:any)=>{
      localStorage.setItem('token',JSON.stringify(res.token));
      localStorage.setItem('username',JSON.stringify(res.userName
      ));
      window.location.href=' http://localhost:4200/product'
    })
  }

}
