import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Folders',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./login/folder/folder.module').then( m => m.FolderPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'login/loginShopdown',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./login/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'Register/registerShopdown',
    loadChildren: () => import('./login/Register/register.module').then( m => m.RegisterModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'tienda/tiendaShopdown',
    loadChildren: () => import('./usuarios/comprador/tienda/tienda.module').then( m => m.TiendaPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'Tu-Tienda/tu-tienda',
    loadChildren: () => import('./usuarios/vendedor/Tu-Tienda/tu-tienda.module').then( m => m.TuTiendaPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'carro/Carro',
    loadChildren: () => import('./usuarios/comprador/carro/carro.module').then( m => m.CarroPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'favorito/Favorito',
    loadChildren: () => import('./usuarios/comprador/favorito/favorito.module').then( m => m.FavoritoPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'perfil/Perfil',
    loadChildren: () => import('./usuarios/vendedor/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'agregar/productos',
    loadChildren: () => import('./usuarios/vendedor/agregar-productos/agregar-productos.module').then( m => m.AgregarProductosPageModule),
    canActivate: [IngresadoGuard]
  }

  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}







