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
    mail: "",
    contrasenna: "",
  }

  mail: "";
  contrasenna: "";



  constructor(private cliServ:SregService, protected router:Router) { }

  ngOnInit() {

      }
  

  leer(){
    
    if (this.contrasenna == ""  || this.mail == "" || this.contrasenna == null){
      
      console.log("Algun campo vacio?")
      this.router.navigate(['login/loginShopdown'])
      
    }else{

      console.log("Buscando datos de:",this.mail)
      this.cliServ.leerServicio(this.mail)
      .subscribe(reg => {
      console.log(`Recibo ${this.mail}`, reg)
        this.registro = reg })


      if (this.contrasenna == this.registro.contrasenna){

        this.router.navigate(['perfil/Perfil'])

      }else{ 
          console.log("Error contraseña o email incorrecta")
      }

    } 


    

  }    
}
