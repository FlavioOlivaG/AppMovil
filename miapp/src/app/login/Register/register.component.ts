import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IReg } from "../interface/i-reg";
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
      contrasenna: "",
      id: "",
      rol: "",
      foto:""
      
    }
  
  contrasenna: ""
  private valCorreo : boolean;


  constructor(private cliServ:SregService, protected router:Router) { }

  ngOnInit() {
  }

  grabar(){
    this.valCorreo = false
    if (this.registro.contrasenna == ""  || this.registro.contrasenna == null || 
      this.registro.id == null || this.registro.id == "" ||
      this.registro.nombre == "" ||
      this.registro.apellido == "" ||
      this.registro.rut== ""  || 
      this.contrasenna == "" || this.contrasenna == null)
      {
        this.router.navigate(['Register/registerShopdown']);
      console.log("Algun campo vacio?");
      
      
    }else {
      
      if(this.registro.id.includes("@")){
        console.log("Correo valido",this.registro.id)
        this.valCorreo = true;
      }
    }
      
      
    if(this.valCorreo == true){
      if (this.registro.contrasenna == this.contrasenna){
        console.log("grabando... ",this.registro)
        this.cliServ.grabarServicio(this.registro)
                    .subscribe( persona => {console.log("Register component....",persona)} );
          this.router.navigate(['folder/Folders']);
        
        }else{

        console.log("Error Contraseña no coincide");
        this.router.navigate(['Register/registerShopdown']);
        
        }

    }else{
      this.router.navigate(['Register/registerShopdown']);
      console.log("Correo invalido")
    }




      

        
        



      
    }
}
 

