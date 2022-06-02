import { AdminCevapComponent } from './components/admin-cevap/admin-cevap.component';
import { SinavlisteleComponent } from './components/sinavlistele/sinavlistele.component';
import { SinavComponent } from './components/sinav/sinav.component';
import { OgrenciComponent } from './components/ogrenci/ogrenci.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminKategoriComponent } from './components/admin-kategori/admin-kategori.component';
import { AdminSoruComponent } from './components/admin-soru/admin-soru.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent

  },
  {
    path:'ogrenci',
    component:OgrenciComponent
  },
  {
    path:'sinav',
    component:SinavComponent
  },

  {
    path:'sinavlistele/:sinavKatId',
    component:SinavlisteleComponent
  },
  {
    path:'admin/kategori',
    component:AdminKategoriComponent
  },
  {
    path:'admin/soru',
    component:AdminSoruComponent
  },
  {
    path:'admin/soru/:sinavId',
    component:AdminSoruComponent
  },
  {
    path:'admin/cevap',
    component:AdminCevapComponent
  },
 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
