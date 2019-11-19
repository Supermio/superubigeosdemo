import { Component, OnInit } from '@angular/core';
import { UbigeosService } from '../service/ubigeos.service';
import { Level0DTO } from '../model/dep.DTO';

@Component({
  selector: 'app-dep',
  templateUrl: './dep.page.html',
  styleUrls: ['./dep.page.scss'],
})
export class DepPage implements OnInit {
  private ambito: Level0DTO;  
  constructor(
    private ubigeosService: UbigeosService
  ) { }

  ngOnInit(){}

  ionViewWillEnter(){
    this.ubigeosService.getEntidad('ambitos','level0s','00')
    .subscribe(res => {
      this.ambito = <any>res;      
    });
  }

}
