import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  mostrarMenu: boolean = false;

  /*
  QUIENES SOMOS
En Complise Sistemas somos expertos en brindarte las mejores soluciones informáticas para tu negocio o empresa. Nuestra pasión es crear y diseñar sistemas que te ayuden a optimizar tus procesos, mejorar tu productividad y alcanzar tus objetivos.

Nuestros servicios incluyen:

- Análisis y diseño de sistemas personalizados y a la medida de tus necesidades.
- Instalación y configuración de computadoras, redes locales y amplias, servidores y estaciones de trabajo.
- Diseño gráfico publicitario para darle una imagen profesional y atractiva a tu marca.
- Reparación de equipo de cómputo con garantía de calidad y rapidez.
- Venta y Renta de equipo de Cómputo.
- Asesoría y atención al cliente personalizada y eficiente.

Somos una empresa con más de 10 años de experiencia en el sector informático, comprometida con la innovación, la excelencia y la satisfacción de nuestros clientes. Contamos con un equipo de profesionales altamente cualificados y certificados, que te ofrecerán un trato cercano y amable.

Si buscas una solución informática que se adapte a tu presupuesto, a tu tiempo y a tus expectativas, no dudes en contactarnos. Estaremos encantados de atenderte.
  */


  // INFORMACION TEMPORALMENTE MODIFICABLE. *MANEJAR BASE DE DATOS PARA EL LLENADO CORRECTO*
  // listCheck = [
  //   {text: 'Análisis y diseño de sistemas.'},
  //   {text: 'Instalación y configuración de computadoras.'},
  //   {text: 'Redes locales y amplias.'},
  //   {text: 'Diseño gráfico publicitario.'},
  //   {text: 'Configuración de estaciones.'},
  //   {text: 'Instalacion y configuración de servidores.'},
  //   {text: 'Reparación de equipo de computo.'},
  //   {text: 'Asesoría y atención a cliente.'},
  // ]


  listCheck = [
    {text: 'Análisis y diseño de sistemas personalizados y a la medida de tus necesidades.'},
    {text: 'Instalación y configuración de computadoras, redes locales y amplias, servidores y estaciones de trabajo.'},
    {text: 'Diseño gráfico publicitario para darle una imagen profesional y atractiva a tu marca.'},
    {text: 'Reparación de equipo de cómputo con garantía de calidad y rapidez.'},
    {text: 'Venta y Renta de equipo de Cómputo.'},
    {text: 'Asesoría y atención al cliente personalizada y eficiente..'},
  ]

  // INFORMACION DE LA EMPRESA - POR PREFERENCIA UTILIZAR UN SERVICIO JSON POR METODO GET

  // textMainInformation = 'Nos encargamos de crear y darte soluciones computacionales que proporcionan esa respuesta clave para tu negocio o empresa.';
  textMainInformation = 'En Complise Sistemas somos expertos en brindarte las mejores soluciones informáticas para tu negocio o empresa. Nuestra pasión es crear y diseñar sistemas que te ayuden a optimizar tus procesos, mejorar tu productividad y alcanzar tus objetivos.' + `\n` + ' Nuestros servicios incluyen:'



  textMision = 'Generar utilidades ofreciendo soluciones en informática, maximizando la funcionalidad en base a la utilización de las mejores herramientas tecnológicas y minimizando los costos, tiempos de implementación y mantenimiento.'
  textVision = 'Ser la mejor opción en sistemas, con la atención fija en lo más avanzado, buscando el mejor balance entre costo y funcionalidad, integrando la máxima calidad al menor precio.';

  /* textNuestrosValores = [
    { texto: 'Creatividad' },
    { texto: 'Honestidad'},
    { texto: 'Compromiso'},
    { texto: 'Flexibilidad'},
    { texto: 'Empatía'},
  ];*/


  textNuestrosValores = '-Creativad\n'+ '-Honestidad\n' + '-Compromiso\n' + '-Flexibilidad\n ' + '-Empatía';
  

  // textNuestroEquipo = ' Estamos conformados por personas comprometidas y altamente capacitadas para poder brindarle una solución ante su necesidad. Puede tener la certeza de que alguno de nuestros integrantes tendrá la respuesta ante su solicitud.';
  // textNuestroEquipo = 'Ellas y ellos son los pilares de nuestra empresa, en complise sistemas encontrarás a los mejores profesionales del sector de la informática, con amplia experiencia y formación en desarrollo de software, soporte técnico, venta y renta de equipo de computo.\n \nSomos una empresa comprometida con la calidad, la innovación y la satisfacción de nuestros clientes.\n \nOfrecemos soluciones a medida, adaptadas a las necesidades y objetivos de cada proyecto.\n \nNos apasiona lo que hacemos y nos esforzamos por superar las expectativas de quienes confían en nosotros.\n \nSi buscas un servicio integral, eficiente y personalizado, ¡somos tu mejor opción!';
  textNuestroEquipo = 'Los pilares de la empresa es nuestro personal, por lo que, en Complise Sistemas encontrarás a los mejores profesionales del sector de la informática, con amplia experiencia y formación en desarrollo de software, soporte técnico, venta y renta de equipo de computo.\n \nSomos una empresa comprometida con la calidad, la innovación y la satisfacción de nuestros clientes.\n \nOfrecemos soluciones a medida, adaptadas a las necesidades y objetivos de cada proyecto.\n \nNos apasiona lo que hacemos y nos esforzamos por superar las expectativas de quienes confían en nosotros.\n \nSi buscas un servicio integral, eficiente y personalizado, ¡somos tu mejor opción!';

  empresaInfoArray = [
    { titulo: 'Mision', imagen: '/assets/imagenes/secciones/objetos - svg/earth.png', descripcion: this.textMision}, 
    { titulo: 'Vision', imagen: '/assets/imagenes/secciones/objetos - svg/eye.png', descripcion: 'Ser la mejor opción en sistemas, con la atención fija en lo más avanzado, buscando el mejor balance entre costo y funcionalidad, integrando la máxima calidad al menor precio. (Nuestros clientes no cuestionan posibilidad ni precio, están seguros de recibir lo mejor disponible al menor costo).' }, 
    { titulo: 'Valores', imagen: '/assets/imagenes/secciones/objetos - svg/hand.png', descripcion: this.textNuestrosValores }, 
    // { titulo: 'Nuestro Equipo', imagen: '/assets/imagenes/secciones/hand.png', descripcion: 'Estamos conformados por personas comprometidas y altamente capacitadas para poder brindarle una solución ante su necesidad. Puede tener la certeza de que alguno de nuestros integrantes tendrá la respuesta ante su solicitud.'},
  ]

  // empresaInfoArray = [
  //   { titulo: 'Mision', imagen: '/assets/imagenes/secciones/earth.png', descripcion: 'Generar utilidades ofreciendo soluciones en informática, maximizando la funcionalidad en base a la utilización de las mejores herramientas tecnológicas y minimizando los costos, tiempos de implementación y mantenimiento. (Los casos dificiles los terminamos rapido, con los imposibles nos tardamos algo más).'}, 
  //   { titulo: 'Vision', imagen: '/assets/imagenes/secciones/eye.png', descripcion: 'Ser la mejor opción en sistemas, con la atención fija en lo más avanzado, buscando el mejor balance entre costo y funcionalidad, integrando la máxima calidad al menor precio. (Nuestros clientes no cuestionan posibilidad ni precio, están seguros de recibir lo mejor disponible al menor costo).' }, 
  //   { titulo: 'Nuestro Equipo', imagen: '/assets/imagenes/secciones/hand.png', descripcion: 'Estamos conformados por personas comprometidas y altamente capacitadas para poder brindarle una solución ante su necesidad. Puede tener la certeza de que alguno de nuestros integrantes tendrá la respuesta ante su solicitud.'},
  // ]

  // ICONOS E IMAGENES DEL MENU

  imagenLogo = 'assets/imagenes/logo_complise.png';
  iconoTelefono = 'assets/imagenes/num-contacto 1.png';
  iconoFacebook = 'assets/imagenes/icono-facebook 1.png';


  paginasArray =  [
    { nombre: 'Servicios', ruta: '/servicios'},
    { nombre: 'Productos', ruta: '/productos'},
    { nombre: 'Nosotros', ruta: '/nosotros'},
    { nombre: 'Contacto', ruta: '/contacto'}
  ]

  constructor() { }

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


  // MENU DESPLEGABLE EN MOVILES
  activarMenu(){
    this.mostrarMenu = true;
    console.log('Menu activado');
  }

  cerrarMenu(){
    this.mostrarMenu = false;
  }

}














/*
{text: 'Análisis y diseño de sistemas'},
    {text: 'Instalación y configuración de equipos'},
    {text: 'Comunicaciones'},
    {text: 'Redes locales y amplias'},
    {text: 'Diseño gráfico publicitario'},
    {text: 'Asesoría y capacitación'},
    {text: 'Internet é Intranets'},
    {text: 'Configuración de estaciones'},
    {text: 'Configuración de servidores'}, 
*/