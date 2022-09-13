import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tu-tienda',
  templateUrl: './tu-tienda.page.html',
  styleUrls: ['./tu-tienda.page.scss'],
})
export class TuTiendaPage {
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
}

