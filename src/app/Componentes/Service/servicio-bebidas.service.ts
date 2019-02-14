import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioBebidasService {

    private url = '/MBebidas';
    private cabecera;
  
    constructor(private http: HttpClient) {
      this.cabecera = new HttpHeaders().set('Content-Type','application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Credentials','true');}
  
  
    getMBebidas(){
      return this.http.get<any>(this.url);
    }
  
    postMBebidas(MBebidas){
      return this.http.post<any>( this.url, JSON.stringify(MBebidas) , {headers:this.cabecera}).subscribe(
          (data:any) => {
                  console.log(data);
              },
              error => {
                  console.log(error);
              }
            );
      }
  }
