import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login/loginShopdown',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'Register/registerShopdown',
    loadChildren: () => import('./Register/register.module').then( m => m.RegisterModule)
  },
  {
    path: 'tienda/tiendaShopdown',
    loadChildren: () => import('./tienda/tienda.module').then( m => m.TiendaPageModule)
  },
  {
    path: 'Configuracion/configuracion',
    loadChildren: () => import('./Configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'Ayuda/ayuda',
    loadChildren: () => import('./Ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'Tu-Tienda/tu-tienda',
    loadChildren: () => import('./Tu-Tienda/tu-tienda.module').then( m => m.TuTiendaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}







