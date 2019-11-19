import { Component, OnInit } from '@angular/core';
import { UbigeosService } from '../service/ubigeos.service';
import { Level1DTO } from '../model/prov.DTO';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prov',
  templateUrl: './prov.page.html',
  styleUrls: ['./prov.page.scss'],
})
export class ProvPage implements OnInit{
  private ubidep: string;
  private level0: Level1DTO;

  constructor(
    private route: ActivatedRoute,
    private ubigeosService: UbigeosService
  ) { }

  ngOnInit(){}

  ionViewWillEnter(){
    this.ubidep = this.route.snapshot.paramMap.get('id');
    this.getProvs();
  }

  getProvs() {
    this.ubigeosService.getEntidad('level0s','level1s',this.ubidep)
    .subscribe(res => {
      this.level0 = <any>res;      
    })
  }
}
