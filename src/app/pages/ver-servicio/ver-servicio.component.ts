import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-servicio',
  templateUrl: './ver-servicio.component.html',
  styleUrls: ['./ver-servicio.component.css']
})
export class VerServicioComponent implements OnInit {

  paginasArray =  [
    { nombre: 'Servicios', ruta: '/servicios'},
    { nombre: 'Productos', ruta: '/productos'},
    { nombre: 'Nosotros', ruta: '/nosotros'},
    { nombre: 'Contacto', ruta: '/contacto'}
  ]

  mostrarMenu: boolean = false;

  // ARRAY TEMPORALMENTE CREADO PARA MOSTRAR LOS SERVICIOS
  // serviciosArray = [
  //   { nombre: 'Desarrollo de Software a la medida', descripcion: 'Hemos desarrollado una gran cantidad de soluciones y contamos con sistemas que pueden adaptarse a tus necesidades, como lo son nuestro sistema de expediente clínico para el control de tus pacientes, el sistema de servicios para el seguimiento de tus servicios con clientes, el sistema de nóminas para tu área administrativa, el sistema de laboratorio para la obtención de resultados, así como el sistema de reloj checador para el registro de llegada del personal de tu empresa.', imagen: 'assets/imagenes/secciones/servicio_desarrollo.png' , id: 1 },
  //   { nombre: 'Soporte Técnico', descripcion: 'Sabemos que a diario se presentan obstaculos que pueden ocasionarte grandes problemas en tu negocio, por lo que ofrecemos nuestros servicios de soporte remoto o en sitio para brindarte una ayuda profesional con nuestro personal altamente calificado, así como tambien ofrecemos servicios de reparación y mantenimiento de equipos, servidores e impresoras, además de servicios de cableo de red e infraestructura.', imagen: 'assets/imagenes/secciones/servicio_soporte.jpg' , id: 2 },
  //   { nombre: 'Venta de Equipo', descripcion: 'Contamos con el equipo de las marcas mas reconocidas y de calidad que tu ya conoces, por lo que siente seguro de que encontraras lo mejor para ti y tu dia a dia dentro del mundo de la tecnologia. Siente libre de pedir lo que necesites, nosotros te podemos ayudar.', imagen: 'assets/imagenes/secciones/servicio_venta.png' , id: 3 },
  // ]
  serviciosArray = [
    { nombre: 'Desarrollo de Software a la medida', descripcion: 'Somos expertos en el desarrollo de software personalizado y adaptado a tus necesidades.\n \nRealizamos servicios de aplicaciones web y de escritorio.\n \nContamos con un equipo de profesionales calificados y con amplia experiencia en el sector.\n \nOfrecemos soluciones innovadoras, eficientes y de calidad, que te ayuden a optimizar tus procesos y a alcanzar tus metas.\n \nContacta con nosotros y solicita un presupuesto sin compromiso.', imagen: 'assets/imagenes/secciones/DESARROLLO.jpg' , animacion: 'floating', id: 1 },
    { nombre: 'Soporte Tecnico', descripcion: 'Contamos con un equipo de profesionales capacitados que te brindarán la mejor atención y asesoría.\n \nReparamos todo tipo de fallas, desde virus y malware hasta hardware y software.\n \nAdemás, ofrecemos mantenimiento preventivo y correctivo, instalación y configuración de redes, recuperación de datos y mucho más.\n \nNo importa si tu equipo es de escritorio o portátil, nosotros lo solucionamos.', imagen: 'assets/imagenes/secciones/SOPORTETECNICO.jpg' , animacion: 'floating2' , id: 2 },
    { nombre: 'Venta de equipo', descripcion: '¿Estás buscando un equipo de cómputo que se adapte a tus necesidades y presupuesto?\n \nAquí lo puedes encontrar, tenemos equipos de cómputo de alta calidad, a precios competitivos, contamos con una amplia variedad de marcas y equipos ensamblados, para satisfacer todos los gustos y requerimientos.\n \nYa sea que necesites una laptop, una tablet, un monitor, un teclado, un mouse o cualquier otro accesorio, lo encontrarás.\n \nAdemás, te ofrecemos un servicio de atención al cliente personalizado y garantía en todos nuestros productos.', imagen: 'assets/imagenes/secciones/VENTA.jpg' , animacion: 'floating3', id: 3 },
  ]

  textoProductoMed2k = 'Con ME2K - Sistema de Control de Expedientes Electronico, encargado de administrar y gestionar los registros de los pacientes de un hospital, facturación y registro del expediente clinico del paciente, entre otros...';
  textoProductoSia2k = 'Con ME2K - Sistema de Control de Expedientes Electronico, encargado de administrar y gestionar los registros de los pacientes de un hospital, facturación y registro del expediente clinico del paciente, entre otros...';
  textoProductoLab2k = 'Con ME2K - Sistema de Control de Expedientes Electronico, encargado de administrar y gestionar los registros de los pacientes de un hospital, facturación y registro del expediente clinico del paciente, entre otros...';

  imagenLogo = 'assets/imagenes/logo_complise.png';
  iconoTelefono = 'assets/imagenes/num-contacto 1.png';
  iconoFacebook = 'assets/imagenes/icono-facebook 1.png';

  // Reparacion de computadores, laptops, impresoras, etc. Siente seguro de que podras encontrar una solucion a tu equipo de computo con nuestro grupo de trabajo.

  // servicio1 = { 
  //   nombre: 'Desarrollo de Software a la medida',
  //   descripcion: 'Desarrollo de programas que facilitaran tu dia a dia solucionando tus problemas y necesidades.', 
  //   imagen: 'assets/imagenes/img1.jpg',
  //   id: 1 };
    
  // servicio2 = { 
  //   nombre: 'Reparación de equipo',
  //   descripcion: 'Reparacion de computadores, laptops, impresoras, etc.',
  //   imagen: 'assets/imagenes/img2.jpg' ,
  //   id: 2 };

  // servicio3 = {
  //   nombre: 'Soporte Técnico',
  //   descripcion: 'Sabemos que a diario se presentan obstaculos que pueden ocasionarte grandes problemas en tu negocio, por lo que ofrecemos nuestros servicios de soporte remoto o en sitio para brindarte una ayuda profesional con nuestro personal altamente calificado, así como tambien ofrecemos servicios de reparación y mantenimiento de equipos, servidores e impresoras, así como servicios de cableo de red e infraestructura.',
  //   imagen: 'assets/imagenes/img3.jpg' ,
  //    id: 3 };

  constructor(private activatedRoute: ActivatedRoute) { }

  nombre: string;
  descripcion: string;
  imagen: string;
  id: number;

  ngOnInit(): void {

    window.scrollTo(0,0);

    const body = document.querySelector('body');

    body.style.position = 'unset'

    this.activatedRoute.params.subscribe((params) => {

      if(params.id === ':1'){
        let nombre = this.serviciosArray[0]['nombre'];
        let descripcion = this.serviciosArray[0]['descripcion'];
        let imagen = this.serviciosArray[0]['imagen'];

        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;

        console.log(params.id)
      }else if(params.id === ':2'){

        let nombre = this.serviciosArray[1]['nombre'];
        let descripcion = this.serviciosArray[1]['descripcion'];
        let imagen = this.serviciosArray[1]['imagen'];

        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        
      }else if(params.id === ':3'){
        let nombre = this.serviciosArray[2]['nombre'];
        let descripcion = this.serviciosArray[2]['descripcion'];
        // let descripcion = 'xd';
        let imagen = this.serviciosArray[2]['imagen'];

        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
      }

    })

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


    // let obtenerServicio = localStorage.getItem('servicio');
    
    // this.nombre = obtenerServicio['nombre'];
    // this.descripcion = obtenerServicio['descripcion'];
    // this.imagen = obtenerServicio['imagen'];

    // obtenerServicio['nombre'] = this.nombre;


    // this.activatedRoute.params.subscribe( (params) => {
    //   // this.servicioItem = params;
    //   console.log(params);
    // })

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
