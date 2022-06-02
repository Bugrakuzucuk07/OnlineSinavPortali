import { Cevap } from './../models/Cevap';
import { Soru } from './../models/Soru';
import { Kategori } from './../models/Kategori';
import { Ogrenci } from './../models/Ogrenci';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sinav } from './../models/Sinav';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
apiUrl="http://localhost:62121/api/"
constructor(
  public http:HttpClient
) { }

  OgrenciListe(){
    return this.http.get(this.apiUrl+"ogrenciliste");
  }
  OgrenciById(ogrId:string){
    return this.http.get(this.apiUrl+"ogrencibyid/"+ogrId)
  }
  OgrenciEkle(ogr:Ogrenci){
    return this.http.post(this.apiUrl+"ogrenciekle",ogr)
  }
  OgrenciDuzenle(ogr:Ogrenci){
    return this.http.put(this.apiUrl+"ogrenciduzenle",ogr)
  }
  OgrenciSil(ogrId:string){
    return this.http.delete(this.apiUrl+"ogrencisil/"+ogrId)
  }

  SinavEkle(sinav:Sinav){
    return this.http.post(this.apiUrl+"sinavekle",sinav)
  }
  SinavDuzenle(sinav:Sinav){
    return this.http.put(this.apiUrl+"sinavduzenle",sinav)
  }
  SinavSil(sinavId:string){
    return this.http.delete(this.apiUrl+"sinavsil/"+sinavId)
  }
  SinavListe(){
    return this.http.get(this.apiUrl+"sinavliste");
  }
  Sinavbyid(sinavId:number){
    return this.http.get(this.apiUrl+"/sinavbyid/"+sinavId);
  }

  KategoriListele(){
    return this.http.get(this.apiUrl+"/kategoriliste");
  }
  KategoriById(katId:number){
    return this.http.get(this.apiUrl+"/kategoribyid/"+katId);
  }
  KategoriEkle(kat:Kategori){
    return this.http.post(this.apiUrl+"/kategoriekle", kat);
  }
  KategoriDuzenle(kat:Kategori){
    return this.http.put(this.apiUrl+"/kategoriduzenle",kat)
  }
  KategoriSil(katId:number){
    return this.http.delete(this.apiUrl+"/kategorisil/"+katId);
  }

  SoruEkle(soru:Soru){
    return this.http.post(this.apiUrl+"Soruekle",soru)
  }
  SoruDuzenle(soru:Soru){
    return this.http.put(this.apiUrl+"soruduzenle",soru)
  }
  SoruSil(soruId:string){
    return this.http.delete(this.apiUrl+"sorusil/"+soruId)
  }
  SoruListele(){
    return this.http.get(this.apiUrl+"Soruliste");
  }
  SoruById(soruId:string){
    return this.http.get(this.apiUrl+"SoruByid/"+soruId)
  } 

  
  CevapEkle(cevap:Cevap){
    return this.http.post(this.apiUrl+"cevapekle",cevap)
  }
  CevapDuzenle(cevap:Cevap){
    return this.http.put(this.apiUrl+"cevapduzenle",cevap)
  }
  CevapSil(cevapId:string){
    return this.http.delete(this.apiUrl+"cevapsil/"+cevapId)
  }
}
