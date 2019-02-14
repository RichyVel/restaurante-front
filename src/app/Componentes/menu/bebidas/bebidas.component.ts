import { Component, OnInit } from '@angular/core';
import { MBebidas } from '../../../bean/MBebidas';
import { ServicioBebidasService } from '../../Service/servicio-bebidas.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {
  private BebidasData:any;

  constructor(private ServicioBebidasService : ServicioBebidasService)  { }

  ngOnInit() {
    this.ServicioBebidasService.getMBebidas().subscribe(data => {
      this.BebidasData = data;
      console.log(this.BebidasData);
    })
  }
  private MBebidas:MBebidas

  public crearMBebidas(idBebida,NombreBebidas,ODescripBebidas){
    this.MBebidas= new MBebidas(idBebida,NombreBebidas,ODescripBebidas);
    console.log(this.MBebidas);
    this.ServicioBebidasService.postMBebidas(this.MBebidas);
  }
}
