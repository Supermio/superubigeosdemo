import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UbigeosService {
  paramValue: string;
  // readonly BASE = 'http://192.168.1.100:3000/';
  readonly BASE = 'https://superubigeos.mybluemix.net/';
  readonly FILTER = 'filter[include][][relation]';
  readonly key = 'cf8b7b6f-9ee8-4e6a-9e51-ebb203492d78';
  readonly secret = 'bfbf0g3j--b89c';


  constructor(
    public http: HttpClient
  ) { }

  getRemoteData(pEntity: string) {
    return this.http.get(this.BASE + pEntity)
    .pipe(map(res => res));
  }

  getEntidad(
    pPadre: string,
    pEntidad: string,
    pValorEntidad: string
    ) {
      const consulta = `${this.BASE}${pPadre}/${pValorEntidad}?${this.FILTER}=${pEntidad}`;
      let headers = new HttpHeaders();
      headers = headers.set('X-IBM-Client-Id', this.key).set('X-IBM-Client-Secret', this.secret);
      return this.http.get(consulta,
        {
          headers: {
            'X-IBM-Client-Id': this.key,
            'X-IBM-Client-Secret': this.secret
          }
        }
      );
  }
  getAmbitos(
    ) {
      const pPadre = 'ambitos';
      const consulta = `${this.BASE}${pPadre}`;
      let headers = new HttpHeaders();
      headers = headers.set('X-IBM-Client-Id', this.key).set('X-IBM-Client-Secret', this.secret);
      return this.http.get(consulta,
        {
          headers: {
            'X-IBM-Client-Id': this.key,
            'X-IBM-Client-Secret': this.secret
          }
        }
      );
  }
  getDist(pOffset: number, pLimit: number) {
    const pPadre = 'level2s';
    const filter = `filter[offset]=${pOffset}&filter[limit]=${pLimit}`;
    const consulta = `${this.BASE}${pPadre}?${filter}`;
    let headers = new HttpHeaders();
    headers = headers.set('X-IBM-Client-Id', this.key).set('X-IBM-Client-Secret', this.secret);
    return this.http.get(consulta,
      {
        headers: {
          'X-IBM-Client-Id': this.key,
          'X-IBM-Client-Secret': this.secret
        }
      }
    );
  }
  getFilterDist(pKeyword: string) {
    const pPadre = 'level2s';
    const pField = 'nombresunat';
    const filter = `filter[where][${pField}][like]=${pKeyword.toUpperCase()}%25`;
    // const filter = `filter={%22where%22:{%22${pField}%22:{%22like%22:%22${pKeyword.toUpperCase()}%25%22}}}`;
    const consulta = `${this.BASE}${pPadre}?${filter}`;
    let headers = new HttpHeaders();
    headers = headers.set('X-IBM-Client-Id', this.key).set('X-IBM-Client-Secret', this.secret);
    return this.http.get(consulta,
      {
        headers: {
          'X-IBM-Client-Id': this.key,
          'X-IBM-Client-Secret': this.secret
        }
      }
    );
  }
}
