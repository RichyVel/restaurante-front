import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpHeaders, HttpClient } from '@angular/common/http';
=======
>>>>>>> 7b2ddd649ce338861380fae75622b1844e8d86b5

@Injectable({
  providedIn: 'root'
})
export class ServicioPostresService {

<<<<<<< HEAD
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
=======
  constructor() { }
}
>>>>>>> 7b2ddd649ce338861380fae75622b1844e8d86b5