import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuaracion',
  templateUrl: './configuaracion.page.html',
  styleUrls: ['./configuaracion.page.scss'],
})
export class ConfiguaracionPage {

  public detalles = [
    { title: 'Boletas Compras', url: 'boletas-compra', icon: 'receipt' },
    { title: 'Boletas Ventas', url: 'boleta-venta', icon: 'reader' }
  ]

  public appBarraBarra = [
    { title: 'Ayuda', url: 'Ayuda/ayuda', icon: 'help' },
  ];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  salir(){
    localStorage.clear();
    this.router.navigateByUrl("carro/Carro")
  }
  ir(url:string){
    this.router.navigateByUrl(url)
  }

}
