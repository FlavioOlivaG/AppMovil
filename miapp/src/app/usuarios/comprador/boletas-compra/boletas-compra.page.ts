import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { IBoleta } from 'src/app/interfaces/iboleta';
import { SregService } from 'src/app/login/sreg.service';

@Component({
  selector: 'app-boletas-compra',
  templateUrl: './boletas-compra.page.html',
  styleUrls: ['./boletas-compra.page.scss'],
})
export class BoletasCompraPage {

  boletas : IBoleta[]


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


    this.productosServ.getBoletaByIDComprador(localStorage.getItem('usuario')).subscribe(
      (resp) =>{
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.boletas = JSON.parse(listString)
        event?.target.complete()
      },
      (err) =>{
        console.log(err.message)
        loading.dismiss();
      }
    )
  }





}
