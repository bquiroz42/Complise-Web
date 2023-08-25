import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  // ARRAY TEMPORALMENTE CREADO PARA MOSTRAR LOS PRODUCTOS
  productosArray = [
    { nombre: 'Lab2k', descripcion: 'Sistema de Laboratorio', imagen: 'assets/imagenes/secciones/lab2k.jpg', id: 1 },
    { nombre: 'Med2k', descripcion: 'Sistema de Expediente Electrónico', imagen: 'assets/imagenes/secciones/med2k.jpg' , id: 2 },
    { nombre: 'Sia2k', descripcion: 'Sistema Integral Administrativo', imagen: 'assets/imagenes/secciones/sia2k.jpg', id: 3 },
  ]

  imagenLogo = 'assets/imagenes/logoComplise.png';
  iconoTelefono = 'assets/imagenes/num-contacto 1.png';
  iconoFacebook = 'assets/imagenes/icono-facebook 1.png';

  mostrarMenu: boolean = false;

  paginasArray =  [
    { nombre: 'Servicios', ruta: '/servicios'},
    { nombre: 'Productos', ruta: '/productos'},
    { nombre: 'Nosotros', ruta: '/nosotros'},
    { nombre: 'Contacto', ruta: '/contacto'}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    // body.style.position = 'unset'

  }


  // REDIRECCIONAR HACIA EL PRODUCTO POR ID
  verProducto(id){
    this.router.navigate(['/productos/:' + id]);
  }

}
