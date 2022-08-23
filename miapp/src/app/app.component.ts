import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Tienda', url: 'tienda/tiendaShopdown', icon: 'heart' },
    { title: 'Carro de Compras', url: '/folder/Carro', icon: 'cart' },
    { title: '', url: '/folder/Trash', icon: 'trash' },
    { title: '', url: '/folder/Spam', icon: 'warning' },
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
