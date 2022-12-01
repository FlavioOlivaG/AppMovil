import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SregService } from 'src/app/login/sreg.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.page.html',
  styleUrls: ['./eliminar-producto.page.scss'],
})
export class EliminarProductoPage  {

  producto = {

    id: 0,
    nombre: "",
    forma: "",
    tipoProducto: "",
    color: "",
    tamanno: "",
    marca: ""


  }

  constructor(private router:Router, private productoServ:SregService) { }

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
          marca: resp[0].marca
        }
      }
    )
    
  }

  eliminarProducto(){
    this.productoServ.eliminarProducto(this.producto).subscribe()
    this.router.navigateByUrl("Tu-Tienda/tu-tienda")
  }

}
