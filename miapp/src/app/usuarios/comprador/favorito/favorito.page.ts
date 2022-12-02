import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { IReg } from 'src/app/interfaces/i-reg';
import { Iprodcutos } from 'src/app/interfaces/iprodcutos';
import { SregService } from 'src/app/login/sreg.service';
@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.page.html',
  styleUrls: ['./favorito.page.scss'],
})
export class FavoritoPage {
  public appBarra = [
    //Tienda de la pagina
    { title: 'Tienda', url: '/tienda/tiendaShopdown', icon: 'storefront' },
    //Tu-Tienda tienda del usuario
    { title: 'Mi Tienda', url: '/Tu-Tienda/tu-tienda', icon: 'shirt-outline' },
    //Perfil
    { title: 'Perfil', url: '/perfil/Perfil', icon: 'person-circle' },

  ];
  //Barra de arriba donde esta el titulo
  public appToolbar = [
    //Favorito
    { title: 'Favorito', url: 'favorito/Favorito', icon: 'heart' },
    //Carro
    { title: 'Carro', url: 'carro/Carro', icon: 'cart' },
    
  ]

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


  producto= {
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
    cantidad:0
  }

  constructor(private productoServ:SregService, private router:Router, private loadingCtrl:LoadingController) { }


  ionViewWillEnter(){
    this.leer()
  }

  leer(){

    this.productoServ.leerServicio(localStorage.getItem('usuario'))
                .subscribe({next:reg => {this.usuario = reg
                }})
  }

  borrarProd(index){
    this.usuario.favorito.splice(index, 1);
    this.productoServ.actualizarServicio(this.usuario).subscribe()
  }

  ponerCarrito(index){
    this.usuario.carro.push(this.usuario.favorito[index])
    this.productoServ.actualizarServicio(this.usuario).subscribe()
    this.borrarProd(index)
    this.router.navigateByUrl("carro/Carro")

  }





}
