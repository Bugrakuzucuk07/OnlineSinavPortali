import { Cevap } from './../../models/Cevap';
import { ConfirmDialogComponent } from './../dialogs/confirm-dialog/confirm-dialog.component';
import { Sonuc } from './../../models/Sonuc';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MyAlertService } from './../../services/myAlert.service';
import { ApiService } from './../../services/api.service';
import { Sinav } from './../../models/Sinav';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SinavDialogComponent } from '../dialogs/sinav-dialog/sinav-dialog.component';
import { SoruDialogComponent } from '../dialogs/soru-dialog/soru-dialog.component';
 

@Component({
  selector: 'app-sinav',
  templateUrl: './sinav.component.html',
  styleUrls: ['./sinav.component.scss']
})
export class SinavComponent implements OnInit {
sinavlar:Sinav[];
cevaplar:Cevap[];
dataSource:any;
displayedColumns=['sinavAdi','sinavId','sinavKatId','detay','soruSinavId','soruMetin', ];
@ViewChild(MatSort) sort:MatSort;
@ViewChild(MatPaginator) paginator:MatPaginator;
dialogRef:MatDialogRef<SinavDialogComponent>;
confirmDialogRef:MatDialogRef<ConfirmDialogComponent>;



  constructor(
    public apiServis:ApiService,
    public alert:MyAlertService,
    public matDialog:MatDialog,
  ) { }

  ngOnInit() {
    this.SinavListele();
  }
  SinavListele(){
this.apiServis.SinavListe().subscribe((d:Sinav[])=>{
  this.sinavlar=d;
  this.dataSource=new MatTableDataSource(d);
  this.dataSource.sort=this.sort;
  this.dataSource.paginator=this.paginator;
})

  }
  Filtrele(e){
    var deger=e.target.value;
    this.dataSource.filter=deger.trim().toLowerCase();
    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstpage();
    }
  }

  Ekle(){
    var yeniKayit:Sinav=new Sinav();
    this.dialogRef=this.matDialog.open(SinavDialogComponent,{
      width:'400px',
      data:{
        kayit:yeniKayit,
        islem:'ekle'
      }
      
    });
    this.dialogRef.afterClosed().subscribe(d=>{
    if(d){
      this.apiServis.SinavEkle(d).subscribe((s:Sonuc)=>{
        this.alert.AlertUygula(s);
        if(s.islem){
          this.SinavListele();
        }
      })
    }
    });
}
Duzenle(kayit:Sinav){
  this.dialogRef=this.matDialog.open(SinavDialogComponent,{
    width:'400px',
    data:{
      kayit:kayit,
      islem:'duzenle'
    }
  });

  this.dialogRef.afterClosed().subscribe(d=>{
    if(d){
      

      d.sinavId=kayit.sinavId;
      this.apiServis.SinavDuzenle(d).subscribe((s:Sonuc)=>{
        this.alert.AlertUygula(s);
        if(s.islem){
          this.SinavListele();
        }
      })
    }
  })
}

Sinav(kayit:Sinav){
  var yeniKayit:Sinav=new Sinav();
  this.dialogRef=this.matDialog.open(SinavDialogComponent,{
    width:'800px',
    data:{
      kayit:kayit,
      islem:'detay'
    }
  });
  


}

Sil(kayit:Sinav){
this.confirmDialogRef=this.matDialog.open(ConfirmDialogComponent,{
  width:'500px'
});
this.confirmDialogRef.componentInstance.dialogMesaj=kayit.sinavAdi  + " İsimli Sınav Silinecektir Onaylıyor musunuz?"

this.confirmDialogRef.afterClosed().subscribe(d=>{
  if(d){
    this.apiServis.SinavSil(kayit.sinavId).subscribe((s:Sonuc)=>{
      this.alert.AlertUygula(s);
      if(s.islem){
        this.SinavListele();
      }
    })
  }
})
}


}