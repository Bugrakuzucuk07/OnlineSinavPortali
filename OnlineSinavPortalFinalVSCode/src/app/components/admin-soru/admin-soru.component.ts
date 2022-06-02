import { Sinav } from './../../models/Sinav';
import { ActivatedRoute } from '@angular/router';
import { MyAlertService } from './../../services/myAlert.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from './../../services/api.service';
import { Soru } from './../../models/Soru';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Sonuc } from 'src/app/models/Sonuc';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { KategoriDialogComponent } from '../dialogs/kategori-dialog/kategori-dialog.component';
import { SoruDialogComponent } from '../dialogs/soru-dialog/soru-dialog.component';

@Component({
  selector: 'app-admin-soru',
  templateUrl: './admin-soru.component.html',
  styleUrls: ['./admin-soru.component.scss']
})
export class AdminSoruComponent implements OnInit {
  sorular:Soru[];
  secSoru:Soru;
  secSinav:Sinav;
  sinavId:string;
  dataSource:any;
  displayedColumns=['soruSinavId','soruMetin','detay']; 
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  dialogRef:MatDialogRef<SoruDialogComponent>;
  dialogRefConfirm:MatDialogRef<ConfirmDialogComponent>;
  
    constructor(
      public apiServis:ApiService,
      public matDialog:MatDialog,
      public alert:MyAlertService,
      public route:ActivatedRoute
    ) { }
  
    ngOnInit() {
      this.route.params.subscribe(p=>{
        if(p){
          this.sinavId=p.sinavId;
        }
      });
   
    }
  
    SoruListe(){
      this.apiServis.SoruListele().subscribe((d:Soru[])=>{
        this.sorular=d;
        this.dataSource=new MatTableDataSource(d);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
      });
    }

   
  
  
    Ekle(){
      var yeniKayit:Soru=new Soru();
      this.dialogRef=this.matDialog.open(SoruDialogComponent,{
        width:'800px',
        data:{
          kayit:yeniKayit,
          islem:'ekle'
        }
      });
      this.dialogRef.afterClosed().subscribe(d=>{
        if(d){
          this.apiServis.SoruEkle(d).subscribe((s:Sonuc)=>{
            this.alert.AlertUygula(s);
            if(s.islem){
              this.SoruListe();
          }
          });
        }
      });
    }
  
    Duzenle(kayit:Soru){
      var yeniKayit:Soru=new Soru();
      this.dialogRef=this.matDialog.open(SoruDialogComponent,{
        width:'800px',
        data:{
          kayit:kayit,
          islem:'duzenle'
        }
      });
      this.dialogRef.afterClosed().subscribe(d=>{
        if(d){
          kayit.soruId=d.soruId;
          this.apiServis.SoruDuzenle(kayit).subscribe((s:Sonuc)=>{
          this.alert.AlertUygula(s);
          if(s.islem){
            this.SoruListe();
          }
          });
        }
      });
  
  
    }
  
    Sil(kayit:Soru){
      this.dialogRefConfirm=this.matDialog.open(ConfirmDialogComponent,{
        width:'400px',
      });
    
      this.dialogRefConfirm.componentInstance.dialogMesaj=kayit.soruMetin+ " Kategorisi Silinecektir Onaylıyor Musunuz?"
  
      this.dialogRefConfirm.afterClosed().subscribe(d=>{
        if(d){
          this.apiServis.SoruSil(kayit.soruId).subscribe((s:Sonuc)=>{
            this.alert.AlertUygula(s);
            if(s.islem){
              this.SoruListe();
            }
            });
        }
      });
  
    }
  
  }
  