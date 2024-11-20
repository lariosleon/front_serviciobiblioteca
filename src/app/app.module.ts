import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrestamosLibrosComponent } from './page/prestamoslibros/prestamoslibros.component';
import { MenuComponent } from './components/menu/menu.component';
import { Cod404Component } from './components/cod404/cod404.component';
import { NuevoComponent } from './components/prestamoslibros/nuevo/nuevo.component';
import { HomePrestamoslibrosComponent } from './components/prestamoslibros/home-prestamos/home-prestamoslibros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './page/login/login.component';
import { PageModule } from './page/page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarPrestamosLibrosComponent } from './components/prestamoslibros/editar-prestamos/editar-prestamoslibros.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PrestamosLibrosComponent,
    MenuComponent,
    HomePrestamoslibrosComponent,
    EditarPrestamosLibrosComponent,
    Cod404Component,
    NuevoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // PageModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
