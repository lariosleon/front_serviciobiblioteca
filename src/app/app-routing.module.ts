import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestamosLibrosComponent } from './page/prestamoslibros/prestamoslibros.component';
import { Cod404Component } from './components/cod404/cod404.component';
import { NuevoComponent } from './components/prestamoslibros/nuevo/nuevo.component';
import { LoginComponent } from './page/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { AuthGuard } from './guards/guard.guard';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [

  {
    path: '',
    component: MenuComponent,
     canActivate: [AuthGuard], 
  },
  {
    path: 'app',
    component: MenuComponent,
     canActivate: [AuthGuard], 
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  },
    
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loginGuard],
  },
  {
    path: '**',
    component: Cod404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
