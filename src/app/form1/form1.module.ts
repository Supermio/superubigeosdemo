import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { Form1Component } from './form1.component';
import { RouterModule } from '@angular/router';
import { DynamicFormModule } from '../../common/forms/dynamic-form.module';
import { FormConfigService } from '../service/form-config-service.service';

@NgModule({
  providers: [    
    FormConfigService
  ],
  declarations: [
    Form1Component
  ],
  imports: [
    IonicModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Form1Component
      }
    ]),
    DynamicFormModule
  ],
  entryComponents: [
    Form1Component
  ]
})
export class Form1Module { }
