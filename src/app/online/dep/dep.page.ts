import { Component, OnInit } from '@angular/core';
import { UbigeosService } from '../../service/superubigeos/ubigeos.service';
import { Level0DTO } from '../model/dep.DTO';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dep',
  templateUrl: './dep.page.html',
  styleUrls: ['./dep.page.scss'],
})
export class DepPage implements OnInit {
  private ubiambito: string;
  private ambito: Level0DTO;  
  constructor(
    private ubigeosService: UbigeosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){}

  ionViewWillEnter(){
    this.ubiambito = this.route.snapshot.paramMap.get('id');    
    this.getDeps();
  }
  getDeps(){
    this.ubigeosService.getEntidad('ambitos','level0s',this.ubiambito)
    .subscribe(res => {
      this.ambito = <any>res;      
    });
  }
}
