import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { VerProductoComponent } from './pages/ver-producto/ver-producto.component';
import { VerServicioComponent } from './pages/ver-servicio/ver-servicio.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios/:id', component: VerServicioComponent },
  { path: 'productos/:id', component: VerProductoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
