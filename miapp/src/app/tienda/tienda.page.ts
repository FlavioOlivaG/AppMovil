import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  ;
  //Barra de arriba donde esta el titulo
  public appToolbar = [
    // Cambiar url y crear para favorito
    { title: 'Favorito', url: 'favorito/Favorito', icon: 'heart' },
    //Carro
    { title: 'Carro', url: 'carro/Carro', icon: 'cart' },
    ];
    public appBarra = [
    //Tienda de la pagina
    { title: 'Tienda', url: '/tienda/tiendaShopdown', icon: 'storefront' },
    //Tu-Tienda tienda del usuario
    { title: 'Mi Tienda', url: '/Tu-Tienda/tu-tienda', icon: 'shirt-outline' },
    //Perfil
    { title: 'Perfil', url: '/perfil/Perfil', icon: 'person-circle' },

  ]

}
