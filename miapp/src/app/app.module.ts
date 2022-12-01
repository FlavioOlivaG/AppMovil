import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },ImagePicker,WebView],
  bootstrap: [AppComponent],
})
export class AppModule {}
