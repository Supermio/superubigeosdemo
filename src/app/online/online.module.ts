import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';

import {AmbPage} from './amb/amb.page';
import {DepPage} from './dep/dep.page';
import {ProvPage} from './prov/prov.page';
import {DistPage} from './dist/dist.page';

import { UbigeosService } from '../service/superubigeos/ubigeos.service';
import { OnlineRouting } from './online-routing';

const routes: Routes = [
  {
    path: '',
    component: DepPage
  }
];

@NgModule({
  declarations: [
    AmbPage,
    DepPage,
    ProvPage,
    DistPage
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    OnlineRouting
  ],
  providers: [
    UbigeosService
  ],
  entryComponents: [
    AmbPage
  ]
})
export class OnlineModule { }
