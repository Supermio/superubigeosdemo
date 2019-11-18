import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../../common/forms/control-base';
import { ControlsService } from '../../common/forms/controls.service';
import { FormConfigService } from '../service/form-config-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss'],
})
export class Form2Component implements OnInit {
  readonly FILENAME = 'form2-conf.json';
  controls: ControlBase<any>[];
  form: FormGroup;

  constructor(
    public controlsService: ControlsService,
    public configService: FormConfigService
  ) {
    this.form = new FormGroup({});
  }
  ngOnInit() {}
  async ionViewWillEnter() {
    let res = await this.configService.getFormConfig(this.FILENAME);
    console.log('El res : ' + res);
    res.pipe(map(res=> res))
    .subscribe( data  => {
      console.log('El data : ' + data);
      this.controls = this.controlsService.getControls(<any>data);      
    });
  }
}
