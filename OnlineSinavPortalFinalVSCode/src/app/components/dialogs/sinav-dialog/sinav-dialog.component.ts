
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sinav } from './../../../models/Sinav';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sinav-dialog',
  templateUrl: './sinav-dialog.component.html',
  styleUrls: ['./sinav-dialog.component.scss']
})
export class SinavDialogComponent implements OnInit {
  dialogBaslik:string;
  islem:string;
  frm:FormGroup;
  yeniKayit:Sinav;
  Jconfig={};

  
    constructor(
    
      public matDialog:MatDialog,
      public frmBuild:FormBuilder,
      public dialogRef:MatDialogRef<SinavDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data:any
    ) {
  this.yeniKayit=data.kayit;
  this.islem=data.islem;
  if(this.islem=='ekle'){
    this.dialogBaslik="Sınav Ekle"
  }
  
  if(this.islem=='duzenle'){
    this.dialogBaslik="Sınav Düzenle"
  }

  if(this.islem=='detay'){
    this.dialogBaslik="Sınav Detay"
  }
  
  this.frm=this.FormOlustur();
  
     }
  
    ngOnInit() {
    }
  
  FormOlustur(){
    return this.frmBuild.group({
      sinavAdi:[this.yeniKayit.sinavAdi],
      sinavKatId:[this.yeniKayit.sinavKatId],
      sinavId:[this.yeniKayit.sinavId],
      soruSinavId:[this.yeniKayit.soruSinavId],
      soruMetin:[this.yeniKayit.soruMetin]


      
  
    });
  }
  
  
}
