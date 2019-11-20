import { Component, OnInit } from '@angular/core';
import { UbigeosService } from '../../service/superubigeos/ubigeos.service';
import { Level2DTO } from '../model/dist.DTO';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dist',
  templateUrl: './dist.page.html',
  styleUrls: ['./dist.page.scss'],
})
export class DistPage implements OnInit {
  private ubiprov: string;
  private level1: Level2DTO;

  constructor(
    private route: ActivatedRoute,
    private ubigeosService: UbigeosService
  ) { }

  ngOnInit(){}
  ionViewWillEnter() {
    this.ubiprov = this.route.snapshot.paramMap.get('id');
    this.getDists();
  }
  getDists(){
    this.ubigeosService.getEntidad('level1s','level2s',this.ubiprov)
    .subscribe(res => {
      this.level1 =<any>res;
    })
  }

}
