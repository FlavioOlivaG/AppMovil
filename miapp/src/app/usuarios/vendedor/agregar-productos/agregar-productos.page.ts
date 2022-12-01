import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iproductoadd } from 'src/app/interfaces/iproductoadd';
import { SregService } from 'src/app/login/sreg.service';
import { ImagePicker, ImagePickerOptions } from '@awesome-cordova-plugins/image-picker/ngx';
import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';



@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.page.html',
  styleUrls: ['./agregar-productos.page.scss'],
})
export class AgregarProductosPage implements OnInit {


  newProducto: Iproductoadd = {
    nombre: "",
    forma: "",
    tipoProducto: "",
    color: "",
    tamanno: "",
    marca: "",
    precio: 0,
    detalle: "",
    foto: null
  
  }

  fotos: Array<String>;
  

  constructor(
    private productoServ:SregService,
    private router:Router,
    private imagePicker: ImagePicker,
    private webView:WebView

  ) { }


  
  ngOnInit() {
  }

  crearProducto(){
    this.productoServ.crearProducto(this.newProducto).subscribe()
    this.router.navigateByUrl("Tu-Tienda/tu-tienda")
  }

  abrirGaleria() {

    let options: ImagePickerOptions = {
      maximumImagesCount: 3
    }

    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
          let finalVar = this.webView.convertFileSrc(results[i]);
          this.newProducto.foto.push(finalVar);
          this.fotos.push(finalVar);
          
      }
    }, (err) => { });
  }


  borrarFoto(index){
    this.fotos.splice(index, 1);
  }



}
