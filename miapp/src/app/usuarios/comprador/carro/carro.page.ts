import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { IReg } from 'src/app/interfaces/i-reg';
import { SregService } from 'src/app/login/sreg.service';
@Component({
  selector: 'app-carro',
  templateUrl: './carro.page.html',
  styleUrls: ['./carro.page.scss'],
})
export class CarroPage {
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

  total =0;



  constructor(private productoServ:SregService,
     private router:Router,
     private loadingCtrl:LoadingController) { }

  ionViewWillEnter(){
    this.leer()
    this.loadTotal()
  }



  leer(){

    this.productoServ.leerServicio(localStorage.getItem('usuario'))
                .subscribe({next:reg => {this.usuario = reg
                }})
  }

  borrarProd(index){
    this.usuario.carro.splice(index, 1);
    this.productoServ.actualizarServicio(this.usuario).subscribe()
    this.loadTotal();
  }


  

  async loadTotal(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: "Cargando...",
      spinner: "bubbles"
    }

    );
    await loading.present();


    this.productoServ.getUsuarioByID(localStorage.getItem('usuario')).subscribe(
      (resp) =>{
        loading.dismiss();



        let sub= 0;
        let max = this.usuario.carro.length;
        for(let i=0; i < max ; i++) {
          sub = (this.usuario.carro[i].precio * this.usuario.carro[i].cantidad) + sub;
        }
        this.total=sub;


        event?.target.complete()
      },
      (err) =>{
        console.log(err.message)
        loading.dismiss();
      }
    )
  }


  vaciarCarro(){

    let max = this.usuario.carro.length;
    for(let i=0; i < max ; i++) {
      this.usuario.carro.splice(0,1)
    }
    this.productoServ.actualizarServicio(this.usuario).subscribe()
    this.loadTotal();


  }

  masProd(index){
    this.usuario.carro[index].cantidad = this.usuario.carro[index].cantidad + 1;
    this.productoServ.actualizarServicio(this.usuario).subscribe()
    this.loadTotal();


  }
  menProd(index){
    this.usuario.carro[index].cantidad -= 1;
    if(this.usuario.carro[index].cantidad < 1){
      this.usuario.carro[index].cantidad = 1
    }else{

    }
    this.productoServ.actualizarServicio(this.usuario).subscribe()
    this.loadTotal();
  }

  pagar(){
    localStorage.setItem("Total", this.total.toString());
    this.router.navigate(['formulario-pago'])
  }




















}
