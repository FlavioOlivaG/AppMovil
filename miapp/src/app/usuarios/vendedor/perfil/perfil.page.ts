import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IReg } from 'src/app/interfaces/i-reg';
import { SregService } from 'src/app/login/sreg.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss']
})
export class PerfilPage implements OnInit{


  ngOnInit() {
   this.leer();
  }
  public appBarra = [
    //Tienda de la pagina
    { title: 'Tienda', url: '/tienda/tiendaShopdown', icon: 'storefront' },
    //Tu-Tienda tienda del usuario
    { title: 'Mi Tienda', url: '/Tu-Tienda/tu-tienda', icon: 'shirt-outline' },
    //Perfil
    { title: 'Perfil', url: '/perfil/Perfil', icon: 'person-circle' },

  ];


  registro:IReg={
    nombre: "",
    apellido: "",
    rut: "",
    contrasenna: "",
    id: "",
    rol:"",
    foto:"",
    carro:null,
    favorito: null
  }

  constructor(private cliServ:SregService) { 
  }

  async leer(){

    this.cliServ.leerServicio(localStorage.getItem('usuario'))
                .subscribe({next:reg => {this.registro = reg
                }})
    
   
  

}    




}
