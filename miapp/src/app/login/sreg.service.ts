import { Injectable } from '@angular/core';
import { IReg } from 'src/app/interfaces/i-reg';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproductoadd } from 'src/app/interfaces/iproductoadd';
import { environment } from 'src/environments/environment';
import { Iprodcutos } from '../interfaces/iprodcutos';
import { IaddBoleta } from '../interfaces/iadd-boleta';
import { IBoleta } from '../interfaces/iboleta';

@Injectable({
  providedIn: 'root'
})
export class SregService {
  baseUrl = 'http://shopdown.ddns.net:3300/usuarios'
  constructor(private http:HttpClient) { }





grabarServicio(reg:IReg):Observable<IReg>{
    console.log("Guardando Datos...",reg)
    const stUrl =`${ this.baseUrl }`
    return this.http.post<IReg>(stUrl, reg )
    //.subscribe( persona => {console.log("recibo Service",persona)} );
  }

  actualizarServicio(reg:IReg):Observable<Iprodcutos>{
    return this.http.put<Iprodcutos>(`${environment.apiURL}/usuarios/${reg.id}`, reg)
  }

  eliminarServicio(id:string):Observable<IReg>{
    console.log("Eliminando el Servicio mi pana...")
    //const stUrl =`${ this.baseUrl }/personas/` + id
    const stUrl =`${ this.baseUrl }/${id}`
    return this.http.delete<IReg>(stUrl)
  }

  leerServicio(mail:string):Observable<IReg>{
    console.log("Now Loading...")
    //const stUrl =`${ this.baseUrl }/personas/` + id
    const stUrl =`${ this.baseUrl }/${mail}`
    return this.http.get<IReg>(stUrl)
  }

  listarServicio(id:String):Observable<IReg[]>{
    console.log("Listandole el Servicio mi pana...")
    const stUrl =`${ this.baseUrl }/?mail=${id}`
    return this.http.get<IReg[]>(stUrl)
  }

/// productos
  crearProducto(newProducto:Iproductoadd):Observable<Iproductoadd>{
    return this.http.post<Iproductoadd>(`${environment.apiURL}/producto`, newProducto)
  }

  listarProducto():Observable<Iprodcutos>{
    return this.http.get<Iprodcutos>(`${environment.apiURL}/producto`)
  }

  getProductoByID(id:Number):Observable<Iprodcutos>{
    return this.http.get<Iprodcutos>(`${environment.apiURL}/producto/?id=${id}`)
  }

  actualizarProducto(producto:any):Observable<Iprodcutos>{
    return this.http.put<Iprodcutos>(`${environment.apiURL}/producto/${producto.id}`, producto)
  }

  eliminarProducto(producto:any):Observable<Iprodcutos>{
    return this.http.delete<Iprodcutos>(`${environment.apiURL}/producto/${producto.id}`)
  }
  getProductoByIDVendedor(id:String):Observable<Iprodcutos>{
    return this.http.get<Iprodcutos>(`${environment.apiURL}/producto/?idVendedor=${id}`)
  }




//Boletas 
  getUsuarioByID(id:String):Observable<IReg>{
    return this.http.get<IReg>(`${environment.apiURL}/usuarios/?id=${id}`)
  }

  listarBoleta():Observable<IBoleta>{
    this.http.get<IBoleta>(`${environment.apiURL}/boleta`)
    return this.http.get<IBoleta>(`${environment.apiURL}/boleta`)
  }
  getBoletaByIDComprador(id:String):Observable<IBoleta>{
    return this.http.get<IBoleta>(`${environment.apiURL}/boleta/?idComprador=${id}`)
  }

  getBoletaByIDVendedor(id:String):Observable<IBoleta>{
    return this.http.get<IBoleta>(`${environment.apiURL}/boleta/?detalle?idVendedor=${id}`)
  }

  getBoletaByID(id:number):Observable<IReg>{
    return this.http.get<IReg>(`${environment.apiURL}/boleta/?id=${id}`)
  }

  crearBoleta(newBoleta:IaddBoleta):Observable<IaddBoleta>{
    return this.http.post<IaddBoleta>(`${environment.apiURL}/boleta`, newBoleta)
  }

}