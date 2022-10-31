import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ComponentInformationComponent } from './pages/component-information/component-information.component';
import { FooterComponent } from './component/footer/footer.component';
import { VerServicioComponent } from './pages/ver-servicio/ver-servicio.component';
import { VerProductoComponent } from './pages/ver-producto/ver-producto.component';
import { MapComponent } from './component/map/map.component';
import { ContactComponent } from './component/contact/contact.component';
import { ContactoFormularioComponent } from './pages/contacto-formulario/contacto-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NosotrosComponent,
    ServiciosComponent,
    ProductosComponent,
    ComponentInformationComponent,
    FooterComponent,
    VerServicioComponent,
    VerProductoComponent,
    MapComponent,
    ContactComponent,
    ContactoFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
