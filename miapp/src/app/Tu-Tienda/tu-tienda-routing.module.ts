import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuTiendaPage } from './tu-tienda.page';
const routes: Routes = [
  {
    path: '',
    component: TuTiendaPage
  },
  {
    path: 'tienda/tiendaShopdown',
    loadChildren: () => import('../tienda/tienda.module').then( m => m.TiendaPageModule)
  },  
  {
    path: 'Tu-Tienda/tu-tienda',
    loadChildren: () => import('../Tu-Tienda/tu-tienda.module').then( m => m.TuTiendaPageModule)
  },
  {
    path: 'carro/Carro',
    loadChildren: () => import('../carro/carro.module').then( m => m.CarroPageModule)
  },
  {
    path: 'favorito/Favorito',
    loadChildren: () => import('../favorito/favorito.module').then( m => m.FavoritoPageModule)
  },
  {
    path: 'perfil/Perfil',
    loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuTiendaPageRoutingModule {}
