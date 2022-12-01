import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SregService } from 'src/app/login/sreg.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.page.html',
  styleUrls: ['./actualizar-producto.page.scss'],
})
export class ActualizarProductoPage {

  producto = {
    id: 0,
    nombre: "",
    forma: "",
    tipoProducto: "",
    color: "",
    tamanno: "",
    marca: "",
    precio: 0,
    detalle: "",
    foto: ""

  }

  constructor(private productoServ:SregService, private router:Router) { }

  ionViewWillEnter(){
    this.getProductoByID(this.getIdFromURL())
  }

  getIdFromURL(){
    let url = this.router.url
    let arr = url.split("/", 3)
    let id = parseInt(arr[2])
    return id 
  }

  getProductoByID(productoID:Number){
    this.productoServ.getProductoByID(productoID).subscribe(
      (resp:any) => {
        this.producto = {
          id: resp[0].id,
          nombre: resp[0].nombre,
          forma: resp[0].forma,
          tipoProducto: resp[0].tipoProducto,
          color: resp[0].color,
          tamanno: resp[0].tamanno,
          marca: resp[0].marca,
          precio: resp[0].precio,
          detalle: resp[0].detalle,
          foto: resp[0].foto
        }
      }
    )
    
  }

  updateProducto(){
    this.productoServ.actualizarProducto(this.producto).subscribe()
    this.router.navigateByUrl("Tu-Tienda/tu-tienda")
  }



}
