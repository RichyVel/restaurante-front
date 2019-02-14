import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioPostresService {

  private url = '/MPostres';
  private cabecera;

  constructor(private http: HttpClient) {
    this.cabecera = new HttpHeaders().set('Content-Type','application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Credentials','true');}


  getMPostres(){
    return this.http.get<any>(this.url);
  }

  postMPostres(MPostres){
    return this.http.post<any>( this.url, JSON.stringify(MPostres) , {headers:this.cabecera}).subscribe(
        (data:any) => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
          );
    }
}
