import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroresComponent } from '../components/reportes/errores/errores.component';
import { DahboardComponent } from '../components/reportes/dashboard/dashboard.component';
import { ConfiguracionComponent } from '../components/configuracion/formulario/configuracion.component';
import { NuevoComponent } from '../components/prestamoslibros/nuevo/nuevo.component';
import { Cod404Component } from '../components/cod404/cod404.component';
import { PrestamosLibrosComponent } from './prestamoslibros/prestamoslibros.component';
import { HomePrestamoslibrosComponent } from '../components/prestamoslibros/home-prestamos/home-prestamoslibros.component';
import { EditarPrestamosLibrosComponent } from '../components/prestamoslibros/editar-prestamos/editar-prestamoslibros.component';


const routes: Routes = [

    {
      path: 'prestamoslibros',
      component: PrestamosLibrosComponent
    },
    {
      path: 'prestamoslibros/nuevo',
      component: NuevoComponent
    },
    {
      path: 'prestamoslibros/editar',
      component: EditarPrestamosLibrosComponent
    },     
    {
      path: 'errores',
      component: ErroresComponent
    },
    {
      path: 'dashboard',
      component: DahboardComponent
    },
    {
      path: 'configuracion',
      component: ConfiguracionComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
