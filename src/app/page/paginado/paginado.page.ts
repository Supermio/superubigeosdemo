import { Component, OnInit } from '@angular/core';
import { UbigeosService } from '../../service/superubigeos/ubigeos.service';
import { DistDTO } from '../../online/model/dist.DTO';

@Component({
  selector: 'app-paginado',
  templateUrl: './paginado.page.html',
  styleUrls: ['./paginado.page.scss'],
})
export class PaginadoPage implements OnInit {
  private pagina: number = 1;
  private salto: number = 5;
  private dists: DistDTO[];
  constructor(
    private ubigeoServices: UbigeosService
  ) { }

  ngOnInit() {
    this.getDist();
  }
  getDist() {
    this.ubigeoServices.getDist((this.pagina-1)*this.salto,this.salto)
    .subscribe(res =>{
      this.dists = <any>res;
    })
  }
  anterior() {
    if (this.pagina>1) {
      this.pagina--;
      this.getDist();
    }    
  }
  siguiente(){
    this.pagina++;
    this.getDist();
  }
}
