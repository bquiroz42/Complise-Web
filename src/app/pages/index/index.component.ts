import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  imagenLogo = 'assets/imagenes/logo_complise.png';
  iconoTelefono = 'assets/imagenes/num-contacto 1.png';
  iconoFacebook = 'assets/imagenes/icono-facebook 1.png';

  mostrarMenu: boolean = false;

  correoMayorInformacion = 'mailto:complise.soporte@gmail.com?Subject=Buenas%20tardes,%20quisiera%20saber%20más%20sobre%20este%20servicio.%20(Escriba%20el%20producto/servicio%20requerido)'

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


  // APARTADO DE LAS IMAGENES DE CAROUSEL

  // bgImg1 = 'assets/imagenes/bg_bits.gif';
  // bgImg1 = 'assets/imagenes/secciones/dibujo3.svg';
  // bgImg1 = 'assets/imagenes/secciones/prueba_back1_2.svg';
  // bgImg1 = 'assets/imagenes/secciones/pruebaback1.PNG';
  bgImg1 = 'assets/imagenes/secciones/support_background.png';

  // IMAGENES 1 IZQUIERDA CAROUSEL
  fondo1 = 'assets/imagenes/secciones/fondos carousel/fondo1.jpg';
  fondo1_mobile = 'assets/imagenes/secciones/fondos carousel/fondo1_mobile.png';
  // fondo1 = 'assets/imagenes/secciones/fondos carousel/fondo1_mobile.png';
  imagenes1 = 'assets/imagenes/secciones/imagenes1.png';
  sombra1 = 'assets/imagenes/secciones/sombra1.png';

  // IMAGENES 2 CENTRO CAROUSEL
  fondo2 = 'assets/imagenes/secciones/fondos carousel/fondo2.png';
  imagenes2 = 'assets/imagenes/secciones/imagenes2.png';
  sombra2 = 'assets/imagenes/secciones/sombra2.png';

  // IMAGENES 2 DERECHA CAROUSEL
  fondo3 = 'assets/imagenes/secciones/fondos carousel/fondo3.png';
  imagenes3 = 'assets/imagenes/secciones/imagenes3.png';
  sombra3 = 'assets/imagenes/secciones/sombra3.png';

  // bgImg2 = 'assets/imagenes/soporteImg2.jpg';
  // bgImg2 = 'assets/imagenes/secciones/prueba_back2_2.svg';
  // bgImg2 = 'assets/imagenes/secciones/pruebaback2.png';
  bgImg2 = 'assets/imagenes/secciones/dev_background.png';
  // bgImg3 = 'assets/imagenes/secciones/prueba_back3_2.svg';
  // bgImg3 = 'assets/imagenes/secciones/pruebaback3.png';
  bgImg3 = 'assets/imagenes/secciones/shop_background.png';

 

  // ARRAY DE SERVICIOS - POR RECOMENDACIÓN UTILIZAR UN SERVICIO JSON POR METODO GET PARA OBTENER ESTOS DATOS

  desarrollo = 'Somos expertos en el desarrollo de software personalizado y adaptado a tus necesidades. ' + '\nRealizamos servicios de aplicaciones web y de escritorio. \nContamos con un equipo de profesionales calificados y con amplia experiencia en el sector.  Ofrecemos soluciones innovadoras, eficientes y de calidad, que te ayuden a optimizar tus procesos y a alcanzar tus metas. \nContacta con nosotros y solicita un presupuesto sin compromiso.';
  soporte_tecnico = "Contamos con un equipo de profesionales capacitados que te brindarán la mejor atención y asesoría. Reparamos todo tipo de fallas, desde virus y malware hasta hardware y software. Además, ofrecemos mantenimiento preventivo y correctivo, instalación y configuración de redes, recuperación de datos y mucho más. No importa si tu equipo es de escritorio o portátil, nosotros lo solucionamos.";
  venta_equipo = "¿Estás buscando un equipo de cómputo que se adapte a tus necesidades y presupuesto? Aquí lo puedes encontrar, tenemos equipos de cómputo de alta calidad, a precios competitivos, contamos con una amplia variedad de marcas y equipos ensamblados, para satisfacer todos los gustos y requerimientos. Ya sea que necesites una laptop, una tablet, un monitor, un teclado, un mouse o cualquier otro accesorio, lo encontrarás. Además, te ofrecemos un servicio de atención al cliente personalizado y garantía en todos nuestros productos.";


  serviciosArray = [
    { nombre: 'Desarrollo de Software a la medida', descripcion: 'Somos expertos en el desarrollo de software personalizado y adaptado a tus necesidades. Realizamos servicios de aplicaciones web y de escritorio.\n \nContamos con un equipo de profesionales calificados y con amplia experiencia en el sector.\n \nOfrecemos soluciones innovadoras, eficientes y de calidad, que te ayuden a optimizar tus procesos y a alcanzar tus metas.\n \nContacta con nosotros y solicita un presupuesto sin compromiso.', imagen: 'assets/imagenes/secciones/DESARROLLO.jpg' , animacion: 'floating', id: 1 },
    { nombre: 'Soporte Tecnico', descripcion: 'Contamos con un equipo de profesionales capacitados que te brindarán la mejor atención y asesoría.\n \nReparamos todo tipo de fallas, desde virus y malware hasta hardware y software.\n \nAdemás, ofrecemos mantenimiento preventivo y correctivo, instalación y configuración de redes, recuperación de datos y mucho más.\n \nNo importa si tu equipo es de escritorio o portátil, nosotros lo solucionamos.', imagen: 'assets/imagenes/secciones/SOPORTETECNICO.jpg' , animacion: 'floating2' , id: 2 },
    { nombre: 'Venta de equipo', descripcion: '¿Estás buscando un equipo de cómputo que se adapte a tus necesidades y presupuesto?\n \nAquí lo puedes encontrar, tenemos equipos de cómputo de alta calidad, a precios competitivos, contamos con una amplia variedad de marcas y equipos ensamblados, para satisfacer todos los gustos y requerimientos.\n \nYa sea que necesites una laptop, una tablet, un monitor, un teclado, un mouse o cualquier otro accesorio, lo encontrarás.\n \nAdemás, te ofrecemos un servicio de atención al cliente personalizado y garantía en todos nuestros productos.', imagen: 'assets/imagenes/secciones/VENTA.jpg' , animacion: 'floating3', id: 3 },
  ]

  serviciosArrayTitleHover = [
    { nombre: 'Desarrollo de Software a la medida', ruta: '/servicios:1', id: 1},
    { nombre: 'Soporte Tecnico', ruta: '/servicios:2', id: 2},
    { nombre: 'Venta de equipo', ruta: '/servicios:3', id: 3 },
  ]
  
  // ARRAY DE PRODUCTOS - POR RECOMENDACIÓN UTILIZAR UN SERVICIO JSON POR METODO GET PARA OBTENER ESTOS DATOS
  productosArray = [
    { nombre: 'Med2k', descripcion: 'Sistema para control de Hospitales', imagen: 'assets/imagenes/secciones/med2k.jpg' , id: 1 },
    { nombre: 'Sia2k', descripcion: 'Sistema de control de inventario', imagen: 'assets/imagenes/secciones/sia2k.jpg', id: 2 },
    { nombre: 'Lab2k', descripcion: 'Sistema de control para Laboratorios', imagen: 'assets/imagenes/secciones/lab2k.jpg', id: 3 },
  ]

  // NOTA: EN CASO DE QUE SE MANEJE ESTO POR BASE DE DATOS, 
  // UTILIZAR UN SERVICIO PARA MANEJAR LAS IMAGENES EN UN SERVICIO JSON, METODO GET

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

  // cambiarImagen = "assets/imagenes/bg_bits.gif"; 
  // objetoServicio: [{}];

  // textoProductoMed2k = 'Con ME2K - Sistema de Control de Expedientes Electrónico, encargado de administrar y gestionar los registros de los pacientes de un hospital, facturación y registro del expediente clinico del paciente, entre otros...';

  // textoProductoSia2k = 'Con SIA2K - Sistema Integral Administrativo, controla las entradas y salidas de tus inventarios. Obten reportes de tus existencias, articulos, proveedores, etc.';
  // textoProductoLab2k = 'Con LAB2K - Sistema de Control de Laboratorios puedes administrar y gestionar las pruebas medicas de tus pacientes y realizar distintos estudios.... Cuenta con reportes de graficas y datos para ver a detalle la informacion.';
  
  textoProductoLab2k = [
    {texto: 'Lab2k es una potente herramienta  que permite llevar el control de todo el proceso, desde la toma de muestras hasta la entrega de resultados. Nuestro software te ofrece las siguientes ventajas:'},
    {texto: '- Acceso online a los resultados de los estudios clínicos por parte de los pacientes, con la opción de descargarlos en formato digital.'},
    {texto: '- Seguimiento del nivel de avance del flujo del proceso de los estudios realizados, con alertas y notificaciones en tiempo real.'},
    {texto: '- Módulo de banco de sangre, con registro y control de donantes, unidades, transfusiones y pruebas serológicas.'},
    {texto: '- Interfaz con los equipos clínicos más utilizados en el mercado, como Vitros, Emeral, Architec, etc., para automatizar la captura y el análisis de los datos.'},
    {texto: '- Control de los estudios ambientales realizados a aguas residuales, cloros, lodos, etc., con generación de etiquetas, edición de formatos y reportes gerenciales.'}
  ]

  textoProductoMed2k = [
    {texto: '¿Está buscando una solución eficiente y segura para gestionar su centro de salud? Conozca nuestro Sistema de Expediente Electrónico MED2K, una herramienta que le permite llevar el control clínico y administrativo de hospitales, consultorios y clínicas. Med2k le ofrece las siguientes ventajas:'},
    {texto: '- Registro completo de la ficha de identificación del paciente, con sus datos personales, antecedentes médicos, alergias, tratamientos y más.'},
    {texto: '- Seguimiento detallado del historial clínico del paciente, con acceso a sus consultas, diagnósticos, pruebas, recetas y resultados.'},
    {texto: '- Organización eficaz de la agenda de citas, con recordatorios automáticos por correo electrónico o SMS, y posibilidad de cancelar o reprogramar citas.'},
    {texto: '- Gestión integral de los estados de cuenta del paciente, con cobros, pagos, descuentos y facturación electrónica.'},
    {texto: '- Cumplimiento de las normas de seguridad y privacidad de la información médica, con encriptación de datos, copias de seguridad y permisos de acceso personalizados.'},
    {texto: 'No pierda más tiempo ni dinero con sistemas obsoletos o incompletos. Solicite una demostración gratuita de nuestro software y compruebe cómo puede mejorar la calidad y rentabilidad de su servicio de salud.'}
  ]

  textoProductoSia2k = [
    {texto: '¿Sabes cuánto tiempo y dinero pierdes al no tener un control eficiente de tu inventario? '},
    {texto: 'Con nuestro Sistema Integral Administrativo - SIA, podrás gestionar todos tus productos de forma fácil, rápida y segura. el SIA te permite registrar entradas y salidas, generar reportes, alertas y estadísticas, y sincronizar tu información con el sistema contable CON2K.'},
    {texto: 'Así, podrás optimizar tu espacio, evitar el desabastecimiento o el sobrestock, y mejorar tu rentabilidad.'},
    {texto: 'No esperes más y solicita una demostración gratuita de nuestro software.'},
    {texto: 'Te garantizamos que será la mejor inversión para tu negocio.'},
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    
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
        containerTop.style.transform = 'scaleY(0.90)';
        
        containerTop.style.position = 'fixed';

        containerTop.style.transition = 'all linear 0.2s';
        carousel.style.paddingTop = '3%';
        

        // containerTop.style.animationDelay = '2s';

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
        carousel.style.paddingTop = '0%';

        containerTop.style.marginTop = '0px';
        containerTop.style.transform = 'scaleY(1)';

        logo.style.transform = 'scaleY(1)';
      }

     }
    
  }
  
  // ENVIAR AL USUARIO AL SERVICIO SELECCIONADO (POR ID)
  verServicio(id){
    this.router.navigate(['/servicios/:' + id]);
  }

  // ENVIAR AL USUARIO AL PRODUCTO SELECCIONADO (POR ID)
  verProducto(id){
    this.router.navigate(['/productos/:' + id]);
  }

  // MENU DESPLEGABLE EN MOVILES
  activarMenu(){
    this.mostrarMenu = true;
    console.log('Menu activado');

    // if(this.mostrarMenu == true){
    //   const body = document.querySelector('body');

    //   setTimeout(() => {
    //     body.style.position = 'fixed';
    //   }, 600);

    // }

    const body = document.querySelector('body');
    const menuContainer = document.getElementById('fa-bars');

    menuContainer.style.display = 'none';
    body.style.position = 'fixed';
    

    // document.getElementsByTagName("html")[0].style.overflow = "hidden";
    // document.getElementsByTagName("html")[0].style.overflow = "auto"
    
    body.style.overflow = 'hidden'

  }

  cerrarMenu(){
    this.mostrarMenu = false;
   
    const body = document.querySelector('body');
    const menuContainer = document.getElementById('fa-bars');

    menuContainer.style.display = 'block';
    body.style.position = 'unset';

}

}
 /*promoArray = [
    { nombre: 'Promo 1', descripcion: 'Escriba su promocion.', imagen: 'assets/imagenes/promo.png' , id: 1 },
    { nombre: 'Promo 2', descripcion: 'Escriba su promocion.', imagen: 'assets/imagenes/promo.png' , id: 2 },
    { nombre: 'Promo 3', descripcion: 'Escriba su promocion.', imagen: 'assets/imagenes/promo.png' , id: 3 },
  ]*/