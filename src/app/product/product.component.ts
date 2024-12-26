import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  product:any[]=[]
  category:any[]=[]
  cartProduct:any[]=[]
  Ifbool:boolean=false
  amouant:number=0
  image:any[] =[]

  //Quantity:any

  constructor(private service:ServicesService){}
ngOnInit(): void {
  this.getImgAnimation();
  this.getallproduct();
  this.getCategories();
}
getCategories(){
  this.service.getCategory().subscribe((res:any)=>{
    this.category=res
 })
}
getImgAnimation(){
  this.service.getImgAnimations().subscribe((res:any)=>{
    this.image=res
  })
}
getallproduct(){
  this.service.getProduct().subscribe((res:any)=>{
    this.product=res
    console.log(res)

  })
}
filter(event:any){
  if(event.target.value=="all"){
    this.getallproduct();
  }
  let value = event.target.value
  this.service.getFitre(value).subscribe((res:any)=>{
    this.product=res
  })

 console.log(event.target.value)
}
addtocart(item:any){


  if("cart" in localStorage){
    this.cartProduct=JSON.parse(localStorage.getItem("cart")!)
    let exist = this.cartProduct.find(x=>x.id==item.id);
    if(exist){
      alert("product is already in your cart");
    }else{
       this.cartProduct.push({item:item,quantity:this.amouant})
    localStorage.setItem("cart", JSON.stringify(this.cartProduct))
    }
 }else{
  this.cartProduct.push(item)
  localStorage.setItem("cart", JSON.stringify(this.cartProduct))
}

}

}
