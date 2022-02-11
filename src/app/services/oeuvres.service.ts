import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@capacitor/storage';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Oeuvre } from '../models/oeuvre';


@Injectable({
  providedIn: 'root'
})
export class OeuvresService {

  constructor(private http: HttpClient) { }

  private api = environment.api;

  FunctionGetAll(){
    const observable = new Observable<Array<any>>(observer => {
      Storage.get({
          key: 'oeuvres',
      }).then(cached => {
          if(cached.value){
              observer.next(JSON.parse(cached.value));
          }else{
              this.http.get<Array<any>>(this.api).subscribe(data => {
                  observer.next(data);
                  Storage.set({
                      key: 'ouvres',
                      value: JSON.stringify(data),
                  });
              });
          }
      });
  });

  return observable;
  }
  get(id: number){
    return this.http.get<any>(this.api + id);
  }

  add(oeuvre: Oeuvre){
    return this.http.post(this.api, oeuvre);
  }

  uptdate(oeuvre: Oeuvre){
    return this.http.patch(this.api, oeuvre);
  }

}
