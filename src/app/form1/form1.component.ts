import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../../common/forms/control-base';
import { ControlsService } from '../../common/forms/controls.service';
import { FormConfigService } from '../service/form-config-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss'],
})
export class Form1Component implements OnInit {
  readonly FILENAME = 'form1-conf.json';
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
    res.pipe(map(res=> res))
    .subscribe( data  => {
      this.controls = this.controlsService.getControls(<any>data);      
    });
  }

}
