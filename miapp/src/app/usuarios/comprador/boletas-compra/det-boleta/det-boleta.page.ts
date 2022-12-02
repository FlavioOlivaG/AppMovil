import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SregService } from 'src/app/login/sreg.service';
import { IBoleta } from 'src/app/interfaces/iboleta';
@Component({
  selector: 'app-det-boleta',
  templateUrl: './det-boleta.page.html',
  styleUrls: ['./det-boleta.page.scss'],
})
export class DetBoletaPage {
  boleta : IBoleta={
    id: 0,
    detalle: [],
    idComprador: "",
    direccion: {
      Direccion: "",
      nDep: "",
      idComprador: ""
    }
  }

  constructor(private productoServ:SregService, private router:Router) { }

  ionViewWillEnter(){
    this.getBoletaByID(this.getIdFromURL())
  }

  getIdFromURL(){
    let url = this.router.url
    let arr = url.split("/", 3)
    let id = parseInt(arr[2])
    return id 
  }

  
   getBoletaByID(ID:number){
    this.productoServ.getBoletaByID(ID).subscribe(
      (resp:any) => {
        this.boleta = {
          id: resp[0].id,
          detalle: resp[0].detalle,
          idComprador: resp[0].idComprador,
          direccion: resp[0].direccion
        }
      }
    )
    
  }
}

