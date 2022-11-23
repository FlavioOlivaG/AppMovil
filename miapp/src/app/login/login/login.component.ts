import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
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

  constructor(private cliServ:SregService, protected router:Router, private alertService:AlertController) { 
  }

  ngOnInit() {

  }
  

  async leer(){

      console.log("Buscando datos:",this.mail)
      this.cliServ.leerServicio(this.mail)
                  .subscribe({next:reg => {this.registro = reg
                    console.log(`Recibo ${this.mail}`, reg)
                    console.log(`datos del mail ${this.registro.id}`, this.registro)
                  }})
      
      if(this.registro.id == null || this.registro.id == "" || this.registro.contrasenna == "" || this.registro.contrasenna == null){
        const alert = await this.alertService.create({
          header: "Error",
          message: 'Debes llenar todos los datos',
          buttons: ['OK']
          
        });
        await alert.present();
        this.router.navigate(['login/loginShopdown']);
      }else{
        if(this.registro.contrasenna == this.contrasenna){
          localStorage.setItem('ingresado', 'true');
          this.router.navigate(['perfil/Perfil']);

        }else{
          const alert = await this.alertService.create({
            header: "Error",
            message: 'Contraseña incorrecta',
            buttons: ['OK']
            
          });
          await alert.present();



          console.log("contraseña o email incorrecto")
          this.router.navigate(['login/loginShopdown']);
        }

      }
    
  
  }    
}
