import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';

import {DepPage} from './dep/dep.page';
import {ProvPage} from './prov/prov.page';
import {DistPage} from './dist/dist.page';

import { UbigeosService } from './service/ubigeos.service';
import { OnlineRouting } from './online-routing';

const routes: Routes = [
  {
    path: '',
    component: DepPage
  }
];

@NgModule({
  declarations: [
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
    DepPage
  ]
})
export class OnlineModule { }
