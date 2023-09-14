import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  mostrarMenu: boolean = false;

  // serviciosArray = [
  //   { nombre: 'Desarrollo de Software a la medida', descripcion: 'Desarrollo de sistemas adaptables para empresas y clientes.', imagen: 'assets/imagenes/img12.jpg' , id: 1 },
  //   { nombre: 'Reparación de equipo', descripcion: 'Reparacion de Equipo de Computo y otros aparatos electronicos.', imagen: 'assets/imagenes/img13.jpg' , id: 2 },
  //   { nombre: 'Soporte Técnico', descripcion: 'Soporte técnico calificado para ayudarte a resolver algún problema.', imagen: 'assets/imagenes/soporteTecnico.jpg' , id: 3 },
  // ]

  // serviciosArray = [
  //   { nombre: 'Desarrollo de Software a la medida', descripcion: 'Somos expertos en el desarrollo de software personalizado y adaptado a tus necesidades.\n \nRealizamos servicios de aplicaciones web y de escritorio.\n \nContamos con un equipo de profesionales calificados y con amplia experiencia en el sector.\n \nOfrecemos soluciones innovadoras, eficientes y de calidad, que te ayuden a optimizar tus procesos y a alcanzar tus metas.\n \nContacta con nosotros y solicita un presupuesto sin compromiso.', imagen: 'assets/imagenes/secciones/DESARROLLO.png' , animacion: 'floating', id: 1 },
  //   { nombre: 'Soporte Tecnico', descripcion: 'Contamos con un equipo de profesionales capacitados que te brindarán la mejor atención y asesoría.\n \nReparamos todo tipo de fallas, desde virus y malware hasta hardware y software.\n \nAdemás, ofrecemos mantenimiento preventivo y correctivo, instalación y configuración de redes, recuperación de datos y mucho más.\n \nNo importa si tu equipo es de escritorio o portátil, nosotros lo solucionamos.', imagen: 'assets/imagenes/secciones/SOPORTETECNICO.png' , animacion: 'floating2' , id: 2 },
  //   { nombre: 'Venta de equipo', descripcion: '¿Estás buscando un equipo de cómputo que se adapte a tus necesidades y presupuesto?\n \nAquí lo puedes encontrar, tenemos equipos de cómputo de alta calidad, a precios competitivos, contamos con una amplia variedad de marcas y equipos ensamblados, para satisfacer todos los gustos y requerimientos.\n \nYa sea que necesites una laptop, una tablet, un monitor, un teclado, un mouse o cualquier otro accesorio, lo encontrarás.\n \nAdemás, te ofrecemos un servicio de atención al cliente personalizado y garantía en todos nuestros productos.', imagen: 'assets/imagenes/secciones/VENTA.png' , animacion: 'floating3', id: 3 },
  // ]
  serviciosArray = [
    { nombre: 'Desarrollo de Software a la medida', descripcion: 'Ver más información', imagen: 'assets/imagenes/secciones/DESARROLLO.jpg' , animacion: 'floating', id: 1 },
    { nombre: 'Soporte Tecnico', descripcion: 'Ver más información', imagen: 'assets/imagenes/secciones/SOPORTETECNICO.jpg' , animacion: 'floating2' , id: 2 },
    { nombre: 'Venta de equipo', descripcion: 'Ver más información', imagen: 'assets/imagenes/secciones/VENTA.jpg' , animacion: 'floating3', id: 3 },
  ]

  paginasArray =  [
    { nombre: 'Servicios', ruta: '/servicios'},
    { nombre: 'Productos', ruta: '/productos'},
    { nombre: 'Nosotros', ruta: '/nosotros'},
    { nombre: 'Contacto', ruta: '/contacto'}
  ]
  
  imagenLogo = 'assets/imagenes/logo_complise.png';
  iconoTelefono = 'assets/imagenes/num-contacto 1.png';
  iconoFacebook = 'assets/imagenes/icono-facebook 1.png';
  
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

  verServicio(id){
    console.log(id);

    // PARA MANDAR AL USUARIO CON EL ID DEL SERVICIO A LA PAGINA DE SERVICIOS(POR ID)
    this.router.navigate(['/servicios/:' + id]);
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
