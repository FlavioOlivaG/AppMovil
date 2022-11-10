import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IReg, IRegC } from "../interface/i-reg";
import { SregService } from "../sreg.service";

@Component({
    selector: 'app-login',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss'],
  })
  export class RegisterComponent implements OnInit {
    registro:IReg={
        nombre: "",
        apellido: "",
        rut: "",
        mail: "",
        contrasenna: "",
      }
    cContrasenna:IRegC={
      contrasenna: ""
    }


    constructor(private cliServ:SregService, protected router:Router) { }

    ngOnInit() {
    }
  
    grabar(){

      if (this.registro.contrasenna == ""  || 
          this.registro.nombre == "" ||
          this.registro.apellido == "" ||
          this.registro.rut== "" || 
          this.registro.mail == "" || 
          this.cContrasenna.contrasenna == "")
        {
        console.log("Algun campo vacio?");
        this.router.navigate(['Register/registerShopdown']);
        
      }else {
        if (this.registro.contrasenna == this.cContrasenna.contrasenna){
        console.log("grabando... ",this.registro)
        this.cliServ.grabarServicio(this.registro)
          .subscribe( persona => {console.log("Register component....",persona)} );
          this.router.navigate(['login/loginShopdown']);
        
        }else{

        console.log("Error Contraseña no coincide");
        this.router.navigate(['Register/registerShopdown']);
        }
      }
      
      
    }
  }