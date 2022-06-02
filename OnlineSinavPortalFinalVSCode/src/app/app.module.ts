import { SoruDialogComponent } from './components/dialogs/soru-dialog/soru-dialog.component';

import { KategoriDialogComponent } from './components/dialogs/kategori-dialog/kategori-dialog.component';
import { SinavDialogComponent } from './components/dialogs/sinav-dialog/sinav-dialog.component';
import { SinavlisteleComponent } from './components/sinavlistele/sinavlistele.component';
import { OgrenciDialogComponent } from './components/dialogs/ogrenci-dialog/ogrenci-dialog.component';
import { SinavComponent } from './components/sinav/sinav.component';
import { OgrenciComponent } from './components/ogrenci/ogrenci.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { MyAlertService } from './services/myAlert.service';
import { AlertDialogComponent } from './components/dialogs/alert-dialog/alert-dialog.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { AdminSoruComponent } from './components/admin-soru/admin-soru.component';
import { AdminCevapComponent } from './components/admin-cevap/admin-cevap.component';
import { AdminKategoriComponent } from './components/admin-kategori/admin-kategori.component';
import { JoditAngularModule } from 'jodit-angular';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    OgrenciComponent,
    SinavComponent,
    SinavlisteleComponent,

    //Dialoglar
    AlertDialogComponent,
    ConfirmDialogComponent,
    OgrenciDialogComponent,
    SinavDialogComponent,
    KategoriDialogComponent,
    SoruDialogComponent,
   

    //Admin
   AdminKategoriComponent,
   AdminComponent,
   AdminSoruComponent,
   AdminCevapComponent
    
   
  ],



  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    JoditAngularModule
  ],
  entryComponents:[
    AlertDialogComponent,
    ConfirmDialogComponent,
    OgrenciDialogComponent,
    SinavDialogComponent,
    KategoriDialogComponent,
    SoruDialogComponent
  
  ],
  providers: [MyAlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
