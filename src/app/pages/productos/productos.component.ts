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

  imagenLogo = 'assets/imagenes/logo_complise.png';
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

    const body = document.querySelector('body');

    body.style.position = 'unset';

    // window.scrollTo(0,0);
    
    // LOGICA PARA MANIPULAR LA CANTIDAD DE PIXELES DE LA PANTALLA AL HACER SCROLL

    let fixedMenu = 20;

    let containerTop = document.getElementById("containerTop");

    let carousel = document.getElementById("carousel");

    let containerBottom = document.getElementById("containerBottom")
    let logo = document.getElementById("logo")

    window.onscroll = function(){
      let scrollY = window.scrollY;

      // MOSTRAR MENU FIXED
      if(scrollY >= fixedMenu){

        
        
        containerTop.style.marginTop = '-8px';
        containerTop.style.position = 'fixed';
        
        containerTop.style.transition = 'all linear 0.2s';
        containerTop.style.transform = 'scaleY(0.90)';
        
        // containerTop.style.animationDelay = '2s';
        // carousel.style.paddingTop = '3%';
        
        logo.style.transform = 'scaleY(0.85)';

        // containerBottom.style.transition = 'all linear 0.1s';
        // containerBottom.style.marginTop = '-8px';
        // containerBottom.style.transform = 'scaleY(0.85)';
        
      }

      // MOSTRAR MENU RELATIVE
      if(scrollY <= fixedMenu){

        containerTop.style.animation = '';
        containerTop.style.position = 'relative';

        containerTop.style.transition = 'all linear 0.2s'
        // carousel.style.paddingTop = '0%';

        containerTop.style.marginTop = '0px';
        containerTop.style.transform = 'scaleY(1)';

        logo.style.transform = 'scaleY(1)';
      }

     }


  }


  // REDIRECCIONAR HACIA EL PRODUCTO POR ID
  verProducto(id){
    this.router.navigate(['/productos/:' + id]);
  }

  // MENU DESPLEGABLE EN MOVILES
  activarMenu(){
    this.mostrarMenu = true;
    console.log('Menu activado');
  }

  cerrarMenu(){
    this.mostrarMenu = false;
  }

}
