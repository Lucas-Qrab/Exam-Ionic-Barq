import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


import { ErrorComponent } from 'src/app/components/error/error.component';
import { LoaderComponent } from './../../components/loader/loader.component';
import { OeuvreComponent } from './../../components/oeuvre/oeuvre.component';
import { HeaderComponent } from './../../components/header/header.component';


const modules: Array<any> = [
  HeaderComponent,
  OeuvreComponent,
  LoaderComponent,
  ErrorComponent,
]

@NgModule({
  declarations: modules,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: modules,
})
export class SharedModule { }
