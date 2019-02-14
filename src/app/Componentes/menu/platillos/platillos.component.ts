import { Component, OnInit } from '@angular/core';
import { MPlatillos } from '../../../bean/MPlatillos';
import { ServicioplatilloService } from '../../Service/servicioplatillo.service';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent implements OnInit {
  private PlatillosData:any;

  constructor(private ServicioplatilloService : ServicioplatilloService)  { }

  ngOnInit() {
    this.ServicioplatilloService.getMPlatillos().subscribe(data => {
      this.PlatillosData = data;
      console.log(this.PlatillosData);
    })
  }
  private MPlatillos:MPlatillos

  public crearMPlatillos(idPostre,NombrePostre,ODescripPostres){
    this.MPlatillos= new MPlatillos(idPostre,NombrePostre,ODescripPostres);
    console.log(this.MPlatillos);
    this.ServicioplatilloService.postMPlatillos(this.MPlatillos);
  }
}


