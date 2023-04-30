import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // bunu ekledik
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { AlertifyService } from './services/alertify.service';
import { ProductAddClassicComponent } from './product/product-add-classic/product-add-classic.component';
import { ProductAddReactiveComponent } from './product/product-add-reactive/product-add-reactive.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AccountService } from './services/account.service';
import { LoginGuard } from './login/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddClassicComponent,
    ProductAddReactiveComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Ekledi
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AlertifyService, AccountService, LoginGuard], // Böyle olunca global oldu
  bootstrap: [AppComponent]
})
export class AppModule { }
