import { Component, OnInit } from "@angular/core";
import { IReg } from "./i-reg";
import { SregService } from "./sreg.service";

@Component({
    selector: 'app-login',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss'],
  })
  export class RegisterComponent implements OnInit {
    registro:IReg={
        nombre: "Elchan",
        apellido: "Güito",
        rut: "19222333-k",
        mail: "el.güito@duocuc.cl",
        contrasenna: "111eee",
      }


    constructor(private cliServ:SregService) { }

    ngOnInit() {
    }
  
    grabar(){
      console.log("grabando ",this.registro)
      this.cliServ.grabarServicio(this.registro)
          .subscribe( persona => {console.log("reciboPage",persona)} );
  
    }
  }