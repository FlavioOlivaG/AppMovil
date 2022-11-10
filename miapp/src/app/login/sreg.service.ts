import { Injectable } from '@angular/core';
import { IReg } from './Interface/i-reg';
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
    const stUrl =`${ this.baseUrl }usuarios`
    return this.http.post<IReg>(stUrl, reg )
    //.subscribe( persona => {console.log("recibo Service",persona)} );
  }

  actualizarServicio(id:string, registro:IReg):Observable<IReg>{
    console.log("Actualizando el Servicio mi pana...")
    //const stUrl =`${ this.baseUrl }/personas/` + id
    const stUrl =`${ this.baseUrl }/personas/${id}`
    return this.http.put<IReg>(stUrl, registro)
  }

  eliminarServicio(id:string):Observable<IReg>{
    console.log("Eliminando el Servicio mi pana...")
    //const stUrl =`${ this.baseUrl }/personas/` + id
    const stUrl =`${ this.baseUrl }/personas/${id}`
    return this.http.delete<IReg>(stUrl)
  }

  leerServicio(id:string):Observable<IReg>{
    console.log("Leyendole el Servicio mi pana...")
    //const stUrl =`${ this.baseUrl }/personas/` + id
    const stUrl =`${ this.baseUrl }/personas/${id}`
    return this.http.get<IReg>(stUrl)
  }

  listarServicio():Observable<IReg[]>{
    console.log("Listandole el Servicio mi pana...")
    const stUrl =`${ this.baseUrl }/personas`
    return this.http.get<IReg[]>(stUrl)
  }

  setRegistroLista() {
    throw new Error('Method not implemented.');
  }
  getRegistroLista() {
    throw new Error('Method not implemented.');
  }

}