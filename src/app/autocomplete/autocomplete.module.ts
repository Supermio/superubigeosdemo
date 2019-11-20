import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AutocompletePage } from './autocomplete.page';

import { UbigeosService } from '../service/superubigeos/ubigeos.service';
import { AutoService } from './autoservice.service';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { AutoCompleteControlComponent } from './auto-complete-control/auto-complete-control.component';

const routes: Routes = [
  {
    path: '',
    component: AutocompletePage
  }
];

@NgModule({
  imports: [
    AutoCompleteModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AutocompletePage,
    AutoCompleteControlComponent
  ],
  providers: [
    UbigeosService,
    AutoService
  ]
})
export class AutocompletePageModule {}
