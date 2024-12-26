import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './Shard/header/header.component';
import { ProComponent } from './Shard/pro/pro.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { tokenInterceptor } from './token.interceptor';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    HeaderComponent,
    ProComponent,
    RegistrationComponent,
    LoginComponent,
    ProductDetailesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass:tokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
