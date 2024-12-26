import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

getCategory(){
  return this.http.get("https://localhost:7196/api/Categories")
}
getImgAnimations(){
  return this.http.get("https://localhost:7196/api/ImgAnimations")
}
getProduct(){
  return this.http.get("https://fakestoreapi.com/products")
}
getFitre(keword:any){
  return this.http.get("https://localhost:7196/api/Products/Allproducts/"+keword)
}
resistration(res:any){
  return this.http.post('https://localhost:7196/api/Account/Register',res)
}
login(login:any){
  return this.http.post('https://localhost:7196/api/Account',login)
}
}
