import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  //barra del menu
  public appPages = [

    //Login De la pagina
    { title: 'Login ShopDown', url: '/login/loginShopdown', icon: 'storefront' },
    //Registrarse en la pagina
    { title: 'Register', url: '/Register/registerShopdown', icon: 'paper-plane' },
    //Folder
    { title: 'Folder', url: '/folder/Favoritos', icon: 'heart' },

    //
    { title: '', url: '/folder/Trash', icon: 'trash' },
    { title: '', url: '/folder/Spam', icon: 'warning' },
  ];

  //Barra de la vista principal
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
    { title: 'Favorito', url: 'favorito/favorito', icon: 'heart' },
    //Carro
    { title: 'Carro', url: 'carro/carro', icon: 'cart' },
    
  ];
  //Barra del menu de la barra del menu
  public appBarraBarra = [
    //Configuracion
    { title: 'Configuracion', url: 'Configuracion/configuracion', icon: 'settings' },
    //Ayuda
    { title: 'Ayuda', url: 'Ayuda/ayuda', icon: 'help' },
  ];


  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}


