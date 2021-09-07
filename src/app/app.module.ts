import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';



import { BookingBusModule } from './booking-bus/booking-bus.module';

@NgModule({
  //khai báo những component mà nó quản lý
  declarations: [
    AppComponent,

  ],
  //Khai báo những module mà nó quản lý
  imports: [
    BrowserModule,
  
    BookingBusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
