import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IReg } from 'src/app/interfaces/i-reg';
import { IaddBoleta } from 'src/app/interfaces/iadd-boleta';
import { IDir } from 'src/app/interfaces/idir';
import { SregService } from 'src/app/login/sreg.service';

@Component({
  selector: 'app-formulario-pago',
  templateUrl: './formulario-pago.page.html',
  styleUrls: ['./formulario-pago.page.scss'],
})
export class FormularioPagoPage  {
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

  direccion : IDir= {
    Direccion: "",
    nDep: "",
    idComprador: "",
  }

  boleta: IaddBoleta={
    detalle: this.registro.carro,
    idComprador: localStorage.getItem('usuario'),
    direccion: this.direccion
  }



  constructor(private cliServ:SregService, private router:Router ,
    private alertService:AlertController) { 
  }
  ionViewWillEnter(){
    this.leer();
    
  }

  pago = localStorage.getItem('Total')

  async leer(){

    this.cliServ.leerServicio(localStorage.getItem('usuario'))
                .subscribe({next:reg => {this.registro = reg
                }})
  } 

  vaciarCarro(){

    let max = this.registro.carro.length;
    for(let i=0; i < max ; i++) {
      this.registro.carro.splice(0,1)
    }
    this.cliServ.actualizarServicio(this.registro).subscribe()


  }

  async aceptar(){

    if(this.direccion.Direccion == "" || this.direccion.Direccion == null){
      const alert = await this.alertService.create({
        header: "Error",
        message: 'Rellenar Direccion',
        buttons: ['OK']
        
      });
      await alert.present();
    }else{



      this.boleta.detalle = this.registro.carro

      this.cliServ.crearBoleta(this.boleta).subscribe()
      localStorage.removeItem('Total')
      this.vaciarCarro()
      const alert = await this.alertService.create({
        header: "Proceso de Pago",
        message: 'Realizado Con Exito',
        buttons: ['Gracias']
        
      });
      await alert.present();
      
      this.router.navigate(['perfil/Perfil'])
    }

    
    
  }











}
