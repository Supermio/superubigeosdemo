import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { DepsPage } from './deps/deps.page';
import { ProvsPage } from './provs/provs.page';
import { DistsPage } from './dists/dists.page';

import {BaseUbigeosService } from './service/base-ubigeos.service';
import {Nosqlrouting } from './nosqlrouting'

const routes: Routes = [
  {
    path: '',
    component: DepsPage
  },
  {
    path: 'provs',
    component: ProvsPage
  },
  {
    path: 'dists',
    component: DistsPage
  }
];

@NgModule({
  providers: [
    BaseUbigeosService
  ],
  declarations: [
    DepsPage,
    ProvsPage,
    DistsPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nosqlrouting
  ]
})
export class NosqlModule { }
