import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IReg } from "../interface/i-reg";
import { SregService } from "../sreg.service";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
  })
export class LoginComponent implements OnInit {
  registro:IReg={
    nombre: "",
    apellido: "",
    rut: "",
    contrasenna: "",
    id: "",
    rol:"",
    foto:""
  }

  mail: '';
  contrasenna: '';

  constructor(private cliServ:SregService, protected router:Router) { }

  ngOnInit() {
  
  }
  

  leer(){

      console.log("Buscando datos:",this.mail)
      this.cliServ.leerServicio(this.mail)
                  .subscribe({next:reg => {this.registro = reg
                    console.log(`Recibo ${this.mail}`, reg)
                    console.log(`datos del mail ${this.registro.id}`, this.registro)
                  }})


    

  }    
}
