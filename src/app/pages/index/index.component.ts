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
    // { nombre: 'Inicio',ruta: '/inicio' },
    { nombre: 'Servicios', ruta: '/servicios'},
    { nombre: 'Productos', ruta: '/productos'},
    { nombre: 'Nosotros', ruta: '/nosotros'}
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
    { nombre: 'Desarrollo de Software a la medida', descripcion: 'Desarrollo de sistemas con soluciones para empresas y clientes.', imagen: 'assets/imgclientes/DESARROLLO.png' , animacion: 'floating', id: 1 },
    { nombre: 'Reparación de equipo', descripcion: 'Reparacion de Equipo de Computo y otros aparatos electronicos.', imagen: 'assets/imgclientes/REDES.png' , animacion: 'floating2' , id: 2 },
    { nombre: 'Soporte Técnico', descripcion: 'Soporte técnico calificado para ayudarte a resolver algún problema.', imagen: 'assets/imgclientes/SOPORTE.png' , animacion: 'floating3', id: 3 },
  ]
  
  productosArray = [
    { nombre: 'Med2k', descripcion: 'Sistema para control de Hospitales', imagen: 'assets/imagenes/med2k.png' , id: 1 },
    { nombre: 'Sia2k', descripcion: 'Sistema de control de inventario', imagen: 'assets/imagenes/ventaEquipos.jpg', id: 2 },
    { nombre: 'Lab2k', descripcion: 'Sistema de control para Laboratorios', imagen: 'assets/imagenes/lab2k.jpg', id: 3 },
  ]

  clienteArray = [
    {imagen: 'assets/imgclientes/artrolab.png', id: 1},
    {imagen: 'assets/imgclientes/caritas.png', id: 2},
    {imagen: 'assets/imgclientes/cem.png', id: 3}, 
    {imagen: 'assets/imgclientes/creasis.png', id: 4},
    {imagen: 'assets/imgclientes/delta.png', id: 5},
    {imagen: 'assets/imgclientes/fertilita.png', id: 6},
    {imagen: 'assets/imgclientes/gineco.png', id: 7}, 
    {imagen: 'assets/imgclientes/iech.png', id: 8},
    {imagen: 'assets/imgclientes/maxicargas.png', id: 9},
    {imagen: 'assets/imgclientes/moreira.png', id: 10},
    {imagen: 'assets/imgclientes/tauro.png', id: 11},
    {imagen: 'assets/imgclientes/uanl.png', id: 12},
  ]

  cambiarImagen = "assets/imagenes/bg_bits.gif"; 
  // itemId: {nombre: string, descripcion: string, imagen: string, id: number};

  objetoServicio: [{}];

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0,0);

  }

  verServicio(id){

    // item = this.objetoServicio;
    // console.log(id);
    // console.log(nombre, descripcion, imagen);

    // this.serviciosArray.forEach( item => {

    //   if(id === item.id){
    //       this.router.navigate(['/servicios/:' + id]);
    //   }
    // })

    console.log(id);

    // localStorage.setItem('servicio', JSON.stringify(item));

    // PARA MANDAR AL USUARIO CON EL ID DEL SERVICIO A LA PAGINA DE SERVICIOS(POR ID)
    this.router.navigate(['/servicios/:' + id]);

    // this.router.navigate('/servicios/' + ´{id}´);
  }

  verProducto(id){
    this.router.navigate(['/productos/:' + id]);
  }

  // AddClassScroll(){
  //   document.body.classList.add('.stop-scrolling')
  //   document.querySelector('body');
  // }

  activarMenu(){
    this.mostrarMenu = true;
    console.log('Menu activado');
  }

  cerrarMenu(){
    this.mostrarMenu = false;
  }


}
