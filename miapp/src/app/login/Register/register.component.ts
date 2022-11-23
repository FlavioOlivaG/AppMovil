import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
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


  constructor(private cliServ:SregService, protected router:Router, private alertService:AlertController) { }

  ngOnInit() {
  }

  async grabar(){
    this.valCorreo = false
    if (this.registro.contrasenna == ""  || this.registro.contrasenna == null || 
      this.registro.id == null || this.registro.id == "" ||
      this.registro.nombre == "" ||
      this.registro.apellido == "" ||
      this.registro.rut== ""  || 
      this.contrasenna == "" || this.contrasenna == null)
      {
        const alert = await this.alertService.create({
          header: "Error",
          message: 'Campo Vacio',
          buttons: ['OK']
          
        });
        await alert.present();


        this.router.navigate(['Register/registerShopdown']);
      
      
    }else {
      
      if(this.registro.id.includes("@")){
        console.log("Correo valido",this.registro.id)
        this.valCorreo = true;
      }else{
        const alert = await this.alertService.create({
          header: "Error",
          message: 'Correo invalido',
          buttons: ['OK']
          
        });
        await alert.present();
      }
    }
      
      
    if(this.valCorreo == true){
      if (this.registro.contrasenna == this.contrasenna){
        console.log("grabando...as ",this.registro)
        this.cliServ.grabarServicio(this.registro)
        .subscribe(() => {console.log("RegisterComponent ",this.registro)})
                    
          this.router.navigate(['folder/Folders']);
        
        }else{
          const alert = await this.alertService.create({
            header: "Error",
            message: 'Contraseña no coincide',
            buttons: ['OK']
            
          });
          await alert.present();

        this.router.navigate(['Register/registerShopdown']);
        
        }

    }else{
      this.router.navigate(['Register/registerShopdown']);
    }




      

        
        



      
    }
}
 

