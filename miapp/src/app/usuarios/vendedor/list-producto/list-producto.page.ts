import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { SregService } from 'src/app/login/sreg.service';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.page.html',
  styleUrls: ['./list-producto.page.scss'],
})
export class ListProductoPage {
  public appBarra = [
    //Tienda de la pagina
    { title: 'Tienda', url: '/tienda/tiendaShopdown', icon: 'storefront' },
    //Tu-Tienda tienda del usuario
    { title: 'Mi Tienda', url: '/Tu-Tienda/tu-tienda', icon: 'shirt-outline' },
    //Perfil
    { title: 'Perfil', url: '/perfil/Perfil', icon: 'person-circle' },

  ];

  productos = []

  constructor(private productosServ:SregService, private loadingCtrl:LoadingController) { }

  ionViewWillEnter(){
    this.loadProductos()
  }

  async loadProductos(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: "Cargando...",
      spinner: "bubbles"
    }

    );
    await loading.present();


    this.productosServ.getProductoByIDVendedor(localStorage.getItem('usuario')).subscribe(
      (resp) =>{
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.productos = JSON.parse(listString)
        event?.target.complete()
      },
      (err) =>{
        console.log(err.message)
        loading.dismiss();
      }
    )
  }

}
