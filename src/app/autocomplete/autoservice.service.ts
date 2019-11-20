import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';

import { UbigeosService } from '../service/superubigeos/ubigeos.service';
import { DistDTO } from '../model/dist.DTO';

import {AutoCompleteService } from 'ionic4-auto-complete';

@Injectable()
export class AutoService implements AutoCompleteService{
  labelAttribute = 'ubigeo';
  formValueAttribute = 'nombre';
  constructor(
    private ubigeoService: UbigeosService
  ) { }

  getResults(keyword: string){
    if (!keyword) { return false; }
    return this.ubigeoService.getFilterDist(keyword)
    .pipe(map(res => res));
  }
}
