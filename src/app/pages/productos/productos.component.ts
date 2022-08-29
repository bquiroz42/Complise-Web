import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productosArray = [
    { nombre: 'Med2k', descripcion: 'Sistema de gestion para control y administracion para Hospitales', imagen: 'assets/imagenes/med2k.png' , id: 1 },
    { nombre: 'Sia2k', descripcion: 'Sistema de control de inventario', imagen: 'assets/imagenes/ventaEquipos.jpg', id: 2 },
    { nombre: 'Lab2k', descripcion: 'Sistema de control para Laboratorios', imagen: 'assets/imagenes/lab2k.jpg', id: 3 },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }


  verProducto(id){
    this.router.navigate(['/productos/:' + id]);
  }

}
