import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UbigeosService {
  paramValue: string;
  readonly BASE = 'http://192.168.1.100:3000/';
  readonly FILTER = 'filter[include][][relation]';
  
  
  constructor(
    public http: HttpClient
  ) { }

  getRemoteData(pEntity:string){
    return this.http.get(this.BASE+pEntity)
    .pipe(map(res => res));
  }
  
  getEntidad(
    pPadre:string, 
    pEntidad: string,
    pValorEntidad: string
    ){
      const consulta = `${this.BASE}${pPadre}/${pValorEntidad}?${this.FILTER}=${pEntidad}`;
      return this.http.get(consulta);
  }
}
