import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormConfigService {
  //readonly BASEURL = 'https://dev.appseed.io.s3.amazonaws.com/mobile-apps/demo-angular-dynamic-forms/';
  readonly BASEURL = 'assets/json/';

  constructor(
    private http: HttpClient
  ) { }
  public async getFormConfig(filename) {
    return await this.http.get(this.BASEURL + filename);
  }
}
