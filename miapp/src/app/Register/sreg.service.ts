import { Injectable } from '@angular/core';
import { IReg } from './i-reg';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SregService {
  private baseUrl: string = "http://localhost:3000/";
  constructor(private http:HttpClient) { }


  grabarServicio(reg:IReg):Observable<IReg>{
    console.log("Guardando Datos...",reg)
    const stUrl =`${ this.baseUrl }/usuarios`
    return this.http.post<IReg>(stUrl, reg )
    //.subscribe( persona => {console.log("recibo Service",persona)} );
  }
  setRegistroLista() {
    throw new Error('Method not implemented.');
  }
  getRegistroLista() {
    throw new Error('Method not implemented.');
  }

}