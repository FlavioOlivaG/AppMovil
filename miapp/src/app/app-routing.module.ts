import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Folders',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./login/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login/loginShopdown',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./login/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'Register/registerShopdown',
    loadChildren: () => import('./login/Register/register.module').then( m => m.RegisterModule)
  },
  {
    path: 'tienda/tiendaShopdown',
    loadChildren: () => import('./usuarios/comprador/tienda/tienda.module').then( m => m.TiendaPageModule)
  },
  {
    path: 'Configuracion/configuracion',
    loadChildren: () => import('./usuarios/Configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'Ayuda/ayuda',
    loadChildren: () => import('./usuarios/Ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'Tu-Tienda/tu-tienda',
    loadChildren: () => import('./usuarios/vendedor/Tu-Tienda/tu-tienda.module').then( m => m.TuTiendaPageModule)
  },
  {
    path: 'carro/Carro',
    loadChildren: () => import('./usuarios/comprador/carro/carro.module').then( m => m.CarroPageModule)
  },
  {
    path: 'favorito/Favorito',
    loadChildren: () => import('./usuarios/comprador/favorito/favorito.module').then( m => m.FavoritoPageModule)
  },
  {
    path: 'perfil/Perfil',
    loadChildren: () => import('./usuarios/vendedor/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'agregar/productos',
    loadChildren: () => import('./usuarios/vendedor/agregar-productos/agregar-productos.module').then( m => m.AgregarProductosPageModule)
  }

  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}







