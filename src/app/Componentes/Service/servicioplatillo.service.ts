import { Injectable } from '@angular/core';
import { MPlatillos } from '../../bean/MPlatillos';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioplatilloService {
  
  private url = '/MPlatillos';
  private cabecera;

  constructor(private http: HttpClient) {
    this.cabecera = new HttpHeaders().set('Content-Type','application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Credentials','true');}


  getMPlatillos(){
    return this.http.get<any>(this.url);
  }

  postMPlatillos(MPlatillos){
    return this.http.post<any>( this.url, JSON.stringify(MPlatillos) , {headers:this.cabecera}).subscribe(
        (data:any) => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
          );
    }
}