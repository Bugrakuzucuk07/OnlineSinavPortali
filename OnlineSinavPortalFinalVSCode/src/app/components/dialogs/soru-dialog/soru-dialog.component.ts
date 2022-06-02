import { ApiService } from './../../../services/api.service';
import { Soru } from './../../../models/Soru';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Kategori } from 'src/app/models/Kategori';
import { KategoriDialogComponent } from '../kategori-dialog/kategori-dialog.component';

@Component({
  selector: 'app-soru-dialog',
  templateUrl: './soru-dialog.component.html',
  styleUrls: ['./soru-dialog.component.scss']
})
export class SoruDialogComponent implements OnInit {
  dialogBaslik:string;
  yeniKayit:Soru;
  islem:string;
  frm:FormGroup;
  sorular:Soru[];
  Jconfig={};
    constructor(
      public dialogRef:MatDialogRef<SoruDialogComponent>,
      public frmBuild:FormBuilder,
      @Inject(MAT_DIALOG_DATA) public data:any,
      public apiServis:ApiService
    ) { 
      this.yeniKayit=data.kayit;
      this.islem=data.islem;
  
      if(this.islem=="ekle"){
        this.dialogBaslik="Soru Ekle";
      
      }
      if(this.islem=="duzenle"){
        this.dialogBaslik="Soru Düzenle";
        
      }
      this.frm=this.FormOlustur();
    }
  
    ngOnInit() {
    }
  
    FormOlustur(){
      return this.frmBuild.group({
      soruMetin:[this.yeniKayit.soruMetin],
      soruSinavId:[this.yeniKayit.soruSinavId],
     
      })
    }
    
  
  }
  