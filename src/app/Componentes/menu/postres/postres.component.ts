import { Component, OnInit } from '@angular/core';
import { ServicioPostresService } from '../../Service/servicio-postres.service';
import {MPostres} from '../../../bean/MPostres';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent implements OnInit {
  private PostresData:any;

  constructor(private ServicioPostresService : ServicioPostresService)  { }

  ngOnInit() {
    this.ServicioPostresService.getMPostres().subscribe(data => {
      this.PostresData = data;
      console.log(this.PostresData);
    })
  }
  private MPostres:MPostres

  public crearMPostres(idPostre,NombrePostre,ODescripPostres){
    this.MPostres= new MPostres(idPostre,NombrePostre,ODescripPostres);
    console.log(this.MPostres);
    this.ServicioPostresService.postMPostres(this.MPostres);
  }

}
