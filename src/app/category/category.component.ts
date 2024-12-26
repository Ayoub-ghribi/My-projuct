import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{
  category:any[]=[]
  product:any[]=[]
  constructor(private service:ServicesService){}
  ngOnInit(): void {
      this.service.getCategory().subscribe((res:any)=>{
        this.category=res
        console.log(res)
      })
      this.service.getProduct().subscribe((res:any)=>{
        this.product=res
        console.log(res)
      })
  }

}
