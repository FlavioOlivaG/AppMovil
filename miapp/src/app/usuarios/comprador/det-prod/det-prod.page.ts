import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IReg } from 'src/app/interfaces/i-reg';
import { Iprodcutos } from 'src/app/interfaces/iprodcutos';
import { SregService } from 'src/app/login/sreg.service';

@Component({
  selector: 'app-det-prod',
  templateUrl: './det-prod.page.html',
  styleUrls: ['./det-prod.page.scss'],
})
export class DetProdPage{

  producto = {
    id: 0,
    nombre: "",
    tipoProducto: "",
    color: "",
    tamanno: "",
    marca: "",
    precio: 0,
    detalle: "",
    foto: null,
    idVendedor: "",
    cantidad: 1
  }

  usuario: IReg = {
    nombre: "",
    apellido: "",
    rut: "",
    contrasenna: "",
    id: "",
    rol: "",
    foto: null,
    carro: null,
    favorito: null
  }





  constructor(private productoServ:SregService,
    private alertService:AlertController,
    private router:Router) { }


  ionViewWillEnter(){
    this.leer();
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
          tipoProducto: resp[0].tipoProducto,
          color: resp[0].color,
          tamanno: resp[0].tamanno,
          marca: resp[0].marca,
          precio: resp[0].precio,
          detalle: resp[0].detalle,
          foto: resp[0].foto,
          idVendedor: resp[0].idVendedor,
          cantidad: 1
        }
      }
    )
    
  }

  leer(){

    this.productoServ.leerServicio(localStorage.getItem('usuario'))
                .subscribe({next:reg => {this.usuario = reg
                }})
  }


  ponerCarrito(){
    this.usuario.carro.push(this.producto)
    this.productoServ.actualizarServicio(this.usuario).subscribe()
    this.router.navigateByUrl("carro/Carro")

  }

  async ponerFavorito(){
    for (let i = 0; i < this.usuario.favorito.length; i++) {
      if(this.usuario.favorito[i].id == this.producto.id){
        this.usuario.favorito.splice(i,1)
        const alert = await this.alertService.create({
          header: "Error",
          message: 'Producto ya en favoritos',
          buttons: ['OK']
        });
        await alert.present();
      }

    }

    this.usuario.favorito.push(this.producto)
    this.productoServ.actualizarServicio(this.usuario).subscribe()
    this.router.navigateByUrl("favorito/Favorito")

  }

}
