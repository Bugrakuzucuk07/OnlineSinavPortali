import { Cevap } from './../../models/Cevap';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Kategori } from 'src/app/models/Kategori';
import { Sonuc } from 'src/app/models/Sonuc';
import { ApiService } from 'src/app/services/api.service';
import { MyAlertService } from 'src/app/services/myAlert.service';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { KategoriDialogComponent } from '../dialogs/kategori-dialog/kategori-dialog.component';
import { SinavDialogComponent } from '../dialogs/sinav-dialog/sinav-dialog.component';

@Component({
  selector: 'app-admin-cevap',
  templateUrl: './admin-cevap.component.html',
  styleUrls: ['./admin-cevap.component.scss']
})
export class AdminCevapComponent implements OnInit {
cevaplar:Cevap
dataSource:any;
displayedColumns=['katId','katAdi','detay','cevapId']; 
@ViewChild(MatSort) sort:MatSort;
@ViewChild(MatPaginator) paginator:MatPaginator;
dialogRef:MatDialogRef<KategoriDialogComponent>;
dialogRefConfirm:MatDialogRef<ConfirmDialogComponent>;
  
    constructor(
      public apiServis:ApiService,
      public matDialog:MatDialog,
      public alert:MyAlertService
    ) { }
  
    ngOnInit() {
     
    }
  
   
  
  
    Ekle(){
      var yeniKayit:Cevap=new Cevap();
      this.dialogRef=this.matDialog.open(KategoriDialogComponent,{
        width:'400px',
        data:{
          kayit:yeniKayit,
          islem:'ekle'
        }
      });
      this.dialogRef.afterClosed().subscribe(d=>{
        if(d){
          this.apiServis.CevapEkle(d).subscribe((s:Sonuc)=>{
          this.alert.AlertUygula(s);
        
          });
        }
      });
    }
  
    
  }
  