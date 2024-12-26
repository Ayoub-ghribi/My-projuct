import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  constructor(private service:ServicesService){}
  formgrop = new FormGroup({
    userName:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    phoneNumber:new FormControl(''),
  })

  ngOnInit(): void {
  }
  resistration(){
    this.service.resistration(this.formgrop.value).subscribe((res:any)=>{

    })
console.log(this.formgrop.value)
  }
}
