import { Component, OnInit } from '@angular/core';
import { UbigeosService } from '../../service/superubigeos/ubigeos.service';
import { AmbitoDTO } from '../model/amb.DTO';

@Component({
  selector: 'app-amb',
  templateUrl: './amb.page.html',
  styleUrls: ['./amb.page.scss'],
})
export class AmbPage implements OnInit {
  private ambitos: AmbitoDTO[];
  constructor(
    private ubigeosService: UbigeosService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.ubigeosService.getAmbitos()
    .subscribe(res => {
      this.ambitos = <any>res;      
    });
  }
}
