import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
 import { HttpClientModule } from "@angular/common/http";
 import { HttpModule } from '@angular/http';
 import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BrowserModule,
    CommonModule
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     HttpClientModule ,
     HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     AuthProvider
  ]
})
export class AppModule {}
