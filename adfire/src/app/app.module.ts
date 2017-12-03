import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { jQuery } from 'jquery';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBDV78hIeKyR2mQDhIBmFblIU8OkSnthAs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
