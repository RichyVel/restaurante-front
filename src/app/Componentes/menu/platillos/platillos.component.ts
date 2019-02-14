import { Component, OnInit } from '@angular/core';
import { MPlatillos } from '../../../bean/MPlatillos';
import { ServicioplatilloService } from '../../Service/servicioplatillo.service';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent implements OnInit {
    private PlatilloData:any;

    constructor(private ServicioPlatilloService : ServicioPlatilloServicio)  { }
  
    ngOnInit() {
      this.ServicioPlatilloService.getMPlatillos().subscribe(data => {
        this.PlatilloData = data;
        console.log(this.PlatilloData);
      })
    }
    private MPlatillos:MPlatillos
  
    public crearMPostres(idPlatillo,NombrePlatillo,ODescripPlatillo){
      this.MPlatillos= new MPlatillos(idPlatillo,NombrePlatillo,ODescripPlatillo);
      console.log(this.MPlatillos);
      this.ServicioPlatilloService.postMPlatillo(this.MPlatillos);
    }
  
  }
