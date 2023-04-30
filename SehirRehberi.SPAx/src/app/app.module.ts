import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import { CityAddComponent } from './city/city-add/city-add.component';
import { FormsModule, FormBuilder } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { NgxEditorModule } from 'ngx-editor';
import { FileUploadModule } from 'ng2-file-upload';
import { RegisterComponent } from './register/register.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [		
    AppComponent,
    NavComponent,
    CityComponent,
    CityDetailComponent,
    CityAddComponent,
    RegisterComponent,
    PhotoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxEditorModule,
    FileUploadModule,
  ],
  providers: [AlertifyService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}