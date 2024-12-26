import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  constructor(private router:Router){}
  login:string='Sign-in'

  ngOnInit(): void {
if(localStorage.getItem('token')!=null){

this.login="hello"
}else{
  this.login="Sign-in"
}
  }
  actionlogin(){
    if(this.login == "Sign-in"){
      this.router.navigate(['/login']);
    }else
    {
        localStorage.removeItem('token')
        this.router.navigate(['/product']);
    }


  }
}
