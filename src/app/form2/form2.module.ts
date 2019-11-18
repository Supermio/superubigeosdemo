import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { Form2Component } from './form2.component';
import { RouterModule } from '@angular/router';
import { DynamicFormModule } from '../../common/forms/dynamic-form.module';
import { FormConfigService } from '../service/form-config-service.service';

@NgModule({
  providers: [
    FormConfigService
  ],
  declarations: [
    Form2Component
  ],
  imports: [
    IonicModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Form2Component
      }
    ]),
    DynamicFormModule
  ],
  entryComponents: [
    Form2Component
  ]
})
export class Form2Module { }
