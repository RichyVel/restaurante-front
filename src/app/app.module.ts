import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BienvenidoComponent } from './Componentes/bienvenido/bienvenido.component';
import { NavBarComponent } from './Componentes/nav-bar/nav-bar.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { SelectpromoComponent } from './Componentes/Promociones/selectpromo/selectpromo.component';
import { SigueparticipandoComponent } from './Componentes/Promociones/sigueparticipando/sigueparticipando.component';
import { PromoprocessComponent } from './Componentes/Promociones/promoprocess/promoprocess.component';
import { RouterModule, Routes} from '@angular/router';
<<<<<<< HEAD
import { PlatillosComponent } from './Componentes/menu/platillos/platillos.component';
import { PostresComponent } from './Componentes/menu/postres/postres.component';
import { BebidasComponent } from './Componentes/menu/bebidas/bebidas.component';
=======
import { ComidasComponent } from './Componentes/menu/comidas/comidas.component';
import { BebidasComponent } from './Componentes/menu/bebidas/bebidas.component';
import { PostresComponent } from './Componentes/menu/postres/postres.component';
import { MenucomidaComponent } from './Componentes/menu/menucomida/menucomida.component';
>>>>>>> 7b2ddd649ce338861380fae75622b1844e8d86b5

const rutas:Routes = [
  {path: '', component:BienvenidoComponent}, //pestaña default
  {path: 'Registro',component:RegistroComponent}, //estas tres lineas le decimos al root a donde nos debe de mandar
  {path: 'login',component:LoginComponent},
<<<<<<< HEAD
  {path: 'postres', component:PostresComponent},
  {path: 'Menu',component:MenuComponent}
=======
  {path: 'Menucomidas', component:ComidasComponent},
  {path: 'Menubebidas', component:BebidasComponent},
  {path: 'Menupostre', component:PostresComponent},
  {path: 'Menudemenu', component:MenucomidaComponent}
>>>>>>> 7b2ddd649ce338861380fae75622b1844e8d86b5
]

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    NavBarComponent,
    LoginComponent,
    RegistroComponent,
    SelectpromoComponent,
    SigueparticipandoComponent,
    PromoprocessComponent,
<<<<<<< HEAD
    MenuComponent,
    PlatillosComponent,
    PostresComponent,
    BebidasComponent
=======
    ComidasComponent,
    BebidasComponent,
    PostresComponent,
    MenucomidaComponent,
>>>>>>> 7b2ddd649ce338861380fae75622b1844e8d86b5
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(rutas,{useHash:false}) //Importar las rutas para que funciones y para que no se muestre el #
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
