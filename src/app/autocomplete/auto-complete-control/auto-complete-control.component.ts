import { Component, OnInit } from '@angular/core';
import { AutoCompleteOptions } from 'ionic4-auto-complete';
import {AutoService} from '../autoservice.service';

@Component({
  selector: 'app-auto-complete-control',
  templateUrl: './auto-complete-control.component.html',
  styleUrls: ['./auto-complete-control.component.scss'],
})
export class AutoCompleteControlComponent implements OnInit {
  public options: AutoCompleteOptions;

  public selected:string='';

  constructor(
    private autoService: AutoService
  ) {
    this.options = new AutoCompleteOptions();
    this.options.autocomplete ='on';
    this.options.debounce = 750;
    this.options.placeholder='Ingresa el distrito';    
  }

  ngOnInit() {}

  on(output,event):void {
    console.log(output);
  }

}
