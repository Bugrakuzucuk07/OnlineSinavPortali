import { Ogrenci } from './../../../models/Ogrenci';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from './../../../services/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ogrenci-dialog',
  templateUrl: './ogrenci-dialog.component.html',
  styleUrls: ['./ogrenci-dialog.component.scss']
})
export class OgrenciDialogComponent implements OnInit {
dialogBaslik:string;
islem:string;
frm:FormGroup;
yeniKayit:Ogrenci;

  constructor(
    public ApiServis:ApiService,
    public matDialog:MatDialog,
    public frmBuild:FormBuilder,
    public dialogRef:MatDialogRef<OgrenciDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
this.yeniKayit=data.kayit;
this.islem=data.islem;
if(this.islem=='ekle'){
  this.dialogBaslik="Öğrenci Ekle"
}

if(this.islem=='duzenle'){
  this.dialogBaslik="Öğrenci Düzenle"
}

this.frm=this.FormOlustur();

   }

  ngOnInit() {
  }

FormOlustur(){
  return this.frmBuild.group({
    ogrTel:[this.yeniKayit.ogrTel],
    ogrAdi:[this.yeniKayit.ogrAdi],
    ogrSoyadi:[this.yeniKayit.ogrSoyadi]

  });
}



}
