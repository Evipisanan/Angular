import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { FooterComponent } from './room/footer/footer.component';
import { NavbarComponent } from './room/navbar/navbar.component';
import { HomeComponent } from './room/navbar/home/home.component';
import { PhotoGalleryComponent } from './room/navbar/home/photo-gallery/photo-gallery.component';
import { ImagesComponent } from './room/navbar/home/photoGallery/images/images.component';
import { WhatWeDoComponent } from './room/navbar/what-we-do/what-we-do.component';
import { ProgramsComponent } from './room/navbar/programs/programs.component';
import { ProTableComponent } from './room/navbar/programs/pro-table/pro-table.component';
import { NewsComponent } from './room/navbar/news/news.component';
import { DailyComponent } from './room/navbar/news/daily/daily.component';
import { DailyBarComponent } from './room/navbar/news/daily-bar/daily-bar.component';
import { DailyChuvadiComponent } from './room/navbar/news/daily-chuvadi/daily-chuvadi.component';
import { SpecialChuvadiComponent } from './room/navbar/news/special-chuvadi/special-chuvadi.component';
import { GeneralComponent } from './room/navbar/news/general/general.component';
import { ContentComponent } from './room/navbar/news/general/content/content.component';
import { BookSubscriptionComponent } from './room/navbar/book-subscription/book-subscription.component';
import { SubsriptionBoxComponent } from './room/navbar/bookSubscription/subsription-box/subsription-box.component';
import { BookStallComponent } from './room/navbar/book-stall/book-stall.component';
import { ContactComponent } from './room/navbar/contact/contact.component';
import { LoginComponent } from './room/navbar/login/login.component';
import { AccountLoginComponent } from './room/navbar/login/account-login/account-login.component';
import { AccountRegisterComponent } from './room/navbar/login/account-register/account-register.component';
import { TouchWithUsComponent } from './room/navbar/contact/touch-with-us/touch-with-us.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    PhotoGalleryComponent,
    ImagesComponent,
    WhatWeDoComponent,
    ProgramsComponent,
    ProTableComponent,
    NewsComponent,
    DailyComponent,
    DailyBarComponent,
    DailyChuvadiComponent,
    SpecialChuvadiComponent,
    GeneralComponent,
    ContentComponent,
    BookSubscriptionComponent,
    SubsriptionBoxComponent,
    BookStallComponent,
    ContactComponent,
    LoginComponent,
    AccountLoginComponent,
    AccountRegisterComponent,
    TouchWithUsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
