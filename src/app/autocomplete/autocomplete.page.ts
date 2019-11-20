import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl,Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import {AutoService} from './autoservice.service';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.page.html',
  styleUrls: ['./autocomplete.page.scss'],
})
export class AutocompletePage implements OnInit {
  myForm: FormGroup;

  constructor(    
    public navCtrl: NavController,
    public autoService: AutoService
  ) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      distrito: new FormControl('',[
        Validators.required
      ])
    })
  }
  submit() {
    console.log(this.myForm.value.distrito);
  }

}
