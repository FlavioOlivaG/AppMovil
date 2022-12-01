import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ImagePickerOptions } from "@awesome-cordova-plugins/image-picker/ngx";
import { ImagePicker } from "@awesome-cordova-plugins/image-picker/ngx";
import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';


import { AlertController } from "@ionic/angular";
import { IReg } from "src/app/interfaces/i-reg";
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


  constructor(private cliServ:SregService, protected router:Router,
              private alertService:AlertController,
              private imagePicker:ImagePicker,
              private webView:WebView) { }

  ngOnInit() {


  }

  foto: string


  abrirGaleria() {

    let options: ImagePickerOptions = {
      maximumImagesCount:1
    }

    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
          let finalVar = this.webView.convertFileSrc(results[i]);
          this.registro.foto = finalVar;
          this.foto = finalVar;
      }
    }, (err) => { });
  }









  async grabar(){
    
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
        const alert = await this.alertService.create({
          header: "Error",
          message: 'Correo invalido',
          buttons: ['OK']
          
        });
        await alert.present();
      }
    }
      
      
   




      

        
        



      
    }
}
 

