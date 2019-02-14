import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ServicioPostresService } from '../../Service/servicio-postres.service';
import {MPostres} from '../../../bean/MPostres';
=======
>>>>>>> 7b2ddd649ce338861380fae75622b1844e8d86b5

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent implements OnInit {
<<<<<<< HEAD
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
=======

  constructor() { }

  ngOnInit() {
>>>>>>> 7b2ddd649ce338861380fae75622b1844e8d86b5
  }

}
