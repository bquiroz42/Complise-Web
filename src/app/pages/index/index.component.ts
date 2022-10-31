import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

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

  // carouselArray = [
  //   { imagen: 'assets/imagenes/bg_bits.gif', title: 'IMAGEN1', description: 'DESCRIPTION1' },
  //   { imagen: 'assets/imagenes/soporteImg.jpg', title: 'IMAGEN2', description: 'DESCRIPTION2' },
  //   { imagen: 'assets/imagenes/ventaEquipos.jpg', title: 'IMAGEN3', description: 'DESCRIPTION3'},
  // ]

  bgImg1 = 'assets/imagenes/bg_bits.gif';
  bgImg2 = 'assets/imagenes/soporteImg2.jpg';
  bgImg3 = 'assets/imagenes/ventaEquipos3.jpg';

  /*promoArray = [
    { nombre: 'Promo 1', descripcion: 'Escriba su promocion.', imagen: 'assets/imagenes/promo.png' , id: 1 },
    { nombre: 'Promo 2', descripcion: 'Escriba su promocion.', imagen: 'assets/imagenes/promo.png' , id: 2 },
    { nombre: 'Promo 3', descripcion: 'Escriba su promocion.', imagen: 'assets/imagenes/promo.png' , id: 3 },
  ]*/

  serviciosArray = [
    { nombre: 'Desarrollo de Software a la medida', descripcion: 'Desarollamos sistemas a la medida personzalizados, brindando soluciones a todos sus requerimientos.', imagen: 'assets/imagenes/secciones/DESARROLLO.png' , animacion: 'floating', id: 1 },
    { nombre: 'Reparación de equipo', descripcion: 'Reparación de computadoras, impresoras, mantenimientos preventivos y correctivos, instalación de antivirus, impresoras a domicilio o en nuestras instalaciones y en tiempo record.', imagen: 'assets/imagenes/secciones/SOPORTETECNICO.png' , animacion: 'floating2' , id: 2 },
    { nombre: 'Soporte Técnico', descripcion: 'Contamos con equipos de computo de las marcas mas reconocidas en el mercado, así como equipos ensamblados a según tus necesidades.', imagen: 'assets/imagenes/secciones/VENTA.png' , animacion: 'floating3', id: 3 },
  ]
  
  productosArray = [
    { nombre: 'Med2k', descripcion: 'Sistema para control de Hospitales', imagen: 'assets/imagenes/secciones/med2k.jpg' , id: 1 },
    { nombre: 'Sia2k', descripcion: 'Sistema de control de inventario', imagen: 'assets/imagenes/secciones/sia2k.png', id: 2 },
    { nombre: 'Lab2k', descripcion: 'Sistema de control para Laboratorios', imagen: 'assets/imagenes/secciones/lab2k.jpg', id: 3 },
  ]

  clienteArray = [
    {imagen: 'assets/imgclientes/artrolab.png', id: 1},
    {imagen: 'assets/imgclientes/caritas.png', id: 2},
    {imagen: 'assets/imgclientes/cem.png', id: 3}, 
    {imagen: 'assets/imgclientes/uanl.png', id: 4},
    {imagen: 'assets/imgclientes/creasis.png', id: 5},
    {imagen: 'assets/imgclientes/delta.png', id: 6},
    {imagen: 'assets/imgclientes/fertilita.png', id: 7},
    {imagen: 'assets/imgclientes/gineco.png', id: 8}, 
    {imagen: 'assets/imgclientes/iech.png', id: 9},
    {imagen: 'assets/imgclientes/maxicargas.png', id: 10},
    {imagen: 'assets/imgclientes/moreira.png', id: 11},
    {imagen: 'assets/imgclientes/tauro.png', id: 12},
  ]

  cambiarImagen = "assets/imagenes/bg_bits.gif"; 

  objetoServicio: [{}];


  textoProductoMed2k = 'Con ME2K - Sistema de Control de Expedientes Electrónico, encargado de administrar y gestionar los registros de los pacientes de un hospital, facturación y registro del expediente clinico del paciente, entre otros...';
  textoProductoSia2k = 'Con SIA2K - Sistema Integral Administrativo, controla las entradas y salidas de tus inventarios. Obten reportes de tus existencias, articulos, proveedores, etc.';
  textoProductoLab2k = 'Con LAB2K - Sistema de Control de Laboratorios puedes administrar y gestionar las pruebas medicas de tus pacientes y realizar distintos estudios.... Cuenta con reportes de graficas y datos para ver a detalle la informacion.';

  constructor(private router: Router) { }

  
  ngOnInit(): void {
    
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

        carousel.style.paddingTop = '10%';
        
        containerTop.style.position = 'fixed';

        containerTop.style.transition = 'all linear 0.3s';
        containerTop.style.marginTop = '-6px';
        containerTop.style.transform = 'scaleY(0.95)';

        logo.style.transform = 'scaleY(0.80)';

        // containerBottom.style.transition = 'all linear 0.1s';
        // containerBottom.style.marginTop = '-8px';
        // containerBottom.style.transform = 'scaleY(0.85)';
        
      }

      // MOSTRAR MENU RELATIVE
      if(scrollY <= fixedMenu){

        containerTop.style.animation = '';
        containerTop.style.position = 'relative';

        carousel.style.paddingTop = '0%';

        containerTop.style.marginTop = '0px';
        containerTop.style.transform = 'scaleY(1)';

        logo.style.transform = 'scaleY(1)';
      }

     }
    
  }
  

  verServicio(id){
    // PARA MANDAR AL USUARIO CON EL ID DEL SERVICIO A LA PAGINA DE SERVICIOS(POR ID)
    this.router.navigate(['/servicios/:' + id]);
  }

  verProducto(id){
    this.router.navigate(['/productos/:' + id]);
  }

  activarMenu(){
    this.mostrarMenu = true;
    console.log('Menu activado');
  }

  cerrarMenu(){
    this.mostrarMenu = false;
  }


}