import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private url = '/Cientes';
  private cabecera;

  constructor(private http: HttpClient) {
    this.cabecera = new HttpHeaders().set('Content-Type','application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Credentials','true');}


  getClientes(){
    return this.http.get<any>(this.url);
  }

  postClientes(Clientes){
    return this.http.post<any>( this.url, JSON.stringify(Clientes) , {headers:this.cabecera}).subscribe(
        (data:any) => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
          );
    }
}
