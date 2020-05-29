import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodepassComponent } from './components/codepass/codepass.component';

import { HellodemoComponent } from './canales/hellodemo/hellodemo.component';
import { ErrorComponent } from './components/error/error.component';
import { Cliente001Component } from './canales/cliente001/cliente001.component';
import { Cliente002Component } from './canales/cliente002/cliente002.component';
import { Cliente003Component } from './canales/cliente003/cliente003.component';


const routes: Routes = [

  {path: '', component: CodepassComponent}, /*no hay ruta lleva a codepassComponent*/
  {path: 'hellodemo', component: HellodemoComponent},
  {path: 'cliente001', component: Cliente001Component},
  {path: 'cliente002', component: Cliente002Component},
  {path: 'cliente003', component: Cliente003Component},
  {path: '**', component: ErrorComponent}, /*siempre al final sino no funka*/

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
