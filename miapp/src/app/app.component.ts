import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  //barra del menu
  public appPages = [

    //Carro y favorito mientras no se solucione el toolbar
    { title: 'Carro', url: '/carro/Carro', icon: 'cart' },
    { title: 'Favorito', url: '/favorito/Favorito', icon: 'heart' },
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


