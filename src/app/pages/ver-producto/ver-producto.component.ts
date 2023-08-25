import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {

// ARRAY TEMPORALMENTE CREADO PARA MOSTRAR LOS PRODUCTOS

textoProductoLab2k = [
  {texto: 'Lab2k es una potente herramienta  que permite llevar el control de todo el proceso, desde la toma de muestras hasta la entrega de resultados. Nuestro software te ofrece las siguientes ventajas:'},
  {texto: '- Acceso online a los resultados de los estudios clínicos por parte de los pacientes, con la opción de descargarlos en formato digital.'},
  {texto: '- Seguimiento del nivel de avance del flujo del proceso de los estudios realizados, con alertas y notificaciones en tiempo real.'},
  {texto: '- Módulo de banco de sangre, con registro y control de donantes, unidades, transfusiones y pruebas serológicas.'},
  {texto: '- Interfaz con los equipos clínicos más utilizados en el mercado, como Vitros, Emeral, Architec, etc., para automatizar la captura y el análisis de los datos.'},
  {texto: '- Control de los estudios ambientales realizados a aguas residuales, cloros, lodos, etc., con generación de etiquetas, edición de formatos y reportes gerenciales.'}
]



  

  nombre: string;
  descripcion: string;
  imagen: string;


  constructor(private activatedRoute: ActivatedRoute ) {


   }

  ngOnInit(): void {

    // let br: any;
   
    // FUNCIONALIDAD PARA OBTENER LOS SERVICIOS SELECCIONADO POR ID

    this.activatedRoute.params.subscribe((params) => {

      // LOS PUNTOS DESPUES DEL NUMERO ESTAN PORQUE ANTERIORMENTE SE UTILIZA EN EL ENRUTADOR (ARCHIVO APP-ROUTING).
      if(params.id === ':1'){
        let nombre = this.productosArray[0]['nombre'];
        let descripcion = this.productosArray[0]['descripcion'];
        let imagen = this.productosArray[0]['imagen'];

        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;

        console.log(params.id)
      }else if(params.id === ':2'){

        let nombre = this.productosArray[1]['nombre'];
        let descripcion = this.productosArray[1]['descripcion'];
        let imagen = this.productosArray[1]['imagen'];

        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        
      }else if(params.id === ':3'){
        let nombre = this.productosArray[2]['nombre'];
        let descripcion = this.productosArray[2]['descripcion'];
        let imagen = this.productosArray[2]['imagen'];

        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
      }

    })



  }


  /*
  textoProductoLab2k = [
  {texto: 'Lab2k es una potente herramienta  que permite llevar el control de todo el proceso, desde la toma de muestras hasta la entrega de resultados. Nuestro software te ofrece las siguientes ventajas:'},
  {texto: '- Acceso online a los resultados de los estudios clínicos por parte de los pacientes, con la opción de descargarlos en formato digital.'},
  {texto: '- Seguimiento del nivel de avance del flujo del proceso de los estudios realizados, con alertas y notificaciones en tiempo real.'},
  {texto: '- Módulo de banco de sangre, con registro y control de donantes, unidades, transfusiones y pruebas serológicas.'},
  {texto: '- Interfaz con los equipos clínicos más utilizados en el mercado, como Vitros, Emeral, Architec, etc., para automatizar la captura y el análisis de los datos.'},
  {texto: '- Control de los estudios ambientales realizados a aguas residuales, cloros, lodos, etc., con generación de etiquetas, edición de formatos y reportes gerenciales.'}
]
  */ 

/*
textoProductoMed2k = [
    {texto: '¿Está buscando una solución eficiente y segura para gestionar su centro de salud? Conozca nuestro Sistema de Expediente Electrónico MED2K, una herramienta que le permite llevar el control clínico y administrativo de hospitales, consultorios y clínicas. Med2k le ofrece las siguientes ventajas:'},
    {texto: '- Registro completo de la ficha de identificación del paciente, con sus datos personales, antecedentes médicos, alergias, tratamientos y más.'},
    {texto: '- Seguimiento detallado del historial clínico del paciente, con acceso a sus consultas, diagnósticos, pruebas, recetas y resultados.'},
    {texto: '- Organización eficaz de la agenda de citas, con recordatorios automáticos por correo electrónico o SMS, y posibilidad de cancelar o reprogramar citas.'},
    {texto: '- Gestión integral de los estados de cuenta del paciente, con cobros, pagos, descuentos y facturación electrónica.'},
    {texto: '- Cumplimiento de las normas de seguridad y privacidad de la información médica, con encriptación de datos, copias de seguridad y permisos de acceso personalizados.'},
    {texto: 'No pierda más tiempo ni dinero con sistemas obsoletos o incompletos. Solicite una demostración gratuita de nuestro software y compruebe cómo puede mejorar la calidad y rentabilidad de su servicio de salud.'}
  ]
*/


textoProductoSia2k = [
    {texto: '¿Sabes cuánto tiempo y dinero pierdes al no tener un control eficiente de tu inventario? '},
    {texto: 'Con nuestro Sistema Integral Administrativo - SIA, podrás gestionar todos tus productos de forma fácil, rápida y segura. el SIA te permite registrar entradas y salidas, generar reportes, alertas y estadísticas, y sincronizar tu información con el sistema contable CON2K.'},
    {texto: 'Así, podrás optimizar tu espacio, evitar el desabastecimiento o el sobrestock, y mejorar tu rentabilidad.'},
    {texto: 'No esperes más y solicita una demostración gratuita de nuestro software.'},
    {texto: 'Te garantizamos que será la mejor inversión para tu negocio.'},
  ];

  // text1_1 = 'Lab2k es una potente herramienta  que permite llevar el control de todo el proceso, desde la toma de muestras hasta la entrega de resultados. Nuestro software te ofrece las siguientes ventajas:';
  // text1_2 = '- Acceso online a los resultados de los estudios clínicos por parte de los pacientes, con la opción de descargarlos en formato digital.';
  // text1_3 = '- Seguimiento del nivel de avance del flujo del proceso de los estudios realizados, con alertas y notificaciones en tiempo real.';
  // text1_4 = '- Interfaz con los equipos clínicos más utilizados en el mercado, como Vitros, Emeral, Architec, etc., para automatizar la captura y el análisis de los datos.';
  // text1_5 = '- Control de los estudios ambientales realizados a aguas residuales, cloros, lodos, etc., con generación de etiquetas, edición de formatos y reportes gerenciales.';

  // text2_1 = '¿Está buscando una solución eficiente y segura para gestionar su centro de salud? Conozca nuestro Sistema de Expediente Electrónico MED2K, una herramienta que le permite llevar el control clínico y administrativo de hospitales, consultorios y clínicas. Med2k le ofrece las siguientes ventajas:';
  // text2_2 = '- Registro completo de la ficha de identificación del paciente, con sus datos personales, antecedentes médicos, alergias, tratamientos y más.';
  // text2_3 = '- Seguimiento detallado del historial clínico del paciente, con acceso a sus consultas, diagnósticos, pruebas, recetas y resultados.';
  // text2_4 =  '- Organización eficaz de la agenda de citas, con recordatorios automáticos por correo electrónico o SMS, y posibilidad de cancelar o reprogramar citas.';
  // text2_5 = '- Gestión integral de los estados de cuenta del paciente, con cobros, pagos, descuentos y facturación electrónica.';
  // text2_6 = '- Cumplimiento de las normas de seguridad y privacidad de la información médica, con encriptación de datos, copias de seguridad y permisos de acceso personalizados.';
  // text2_7 = 'No pierda más tiempo ni dinero con sistemas obsoletos o incompletos. Solicite una demostración gratuita de nuestro software y compruebe cómo puede mejorar la calidad y rentabilidad de su servicio de salud.';

  // text3_1 = '¿Sabes cuánto tiempo y dinero pierdes al no tener un control eficiente de tu inventario? ';
  // text3_2 = 'Con nuestro Sistema Integral Administrativo - SIA, podrás gestionar todos tus productos de forma fácil, rápida y segura. el SIA te permite registrar entradas y salidas, generar reportes, alertas y estadísticas, y sincronizar tu información con el sistema contable CON2K.';
  // text3_3 = 'Así, podrás optimizar tu espacio, evitar el desabastecimiento o el sobrestock, y mejorar tu rentabilidad.';
  // text3_4 = 'No esperes más y solicita una demostración gratuita de nuestro software.';
  // text3_5 = 'Te garantizamos que será la mejor inversión para tu negocio.';



  text1 = 'Lab2k es una potente herramienta  que permite llevar el control de todo el proceso, desde la toma de muestras hasta la entrega de resultados.\n' 
  + '\nNuestro software te ofrece las siguientes ventajas:\n'
  +'\n- Acceso online a los resultados de los estudios clínicos por parte de los pacientes, con la opción de descargarlos en formato digital.'
  + '\n- Seguimiento del nivel de avance del flujo del proceso de los estudios realizados, con alertas y notificaciones en tiempo real.'
  + '\n- Interfaz con los equipos clínicos más utilizados en el mercado, como Vitros, Emeral, Architec, etc., para automatizar la captura y el análisis de los datos.'
  + '\n- Control de los estudios ambientales realizados a aguas residuales, cloros, lodos, etc., con generación de etiquetas, edición de formatos y reportes gerenciales.';

  text2 = '¿Está buscando una solución eficiente y segura para gestionar su centro de salud?\n'
  + '\nConozca nuestro Sistema de Expediente Electrónico MED2K, una herramienta que le permite llevar el control clínico y administrativo de hospitales, consultorios y clínicas. ' 
  + '\nMed2k le ofrece las siguientes ventajas:\n'
  + '\n- Registro completo de la ficha de identificación del paciente, con sus datos personales, antecedentes médicos, alergias, tratamientos y más.'
  + '\n- Seguimiento detallado del historial clínico del paciente, con acceso a sus consultas, diagnósticos, pruebas, recetas y resultados.'
  + '\n- Organización eficaz de la agenda de citas, con recordatorios automáticos por correo electrónico o SMS, y posibilidad de cancelar o reprogramar citas.'
  + '\n- Gestión integral de los estados de cuenta del paciente, con cobros, pagos, descuentos y facturación electrónica.'
  + '\n- Cumplimiento de las normas de seguridad y privacidad de la información médica, con encriptación de datos, copias de seguridad y permisos de acceso personalizados.\n'
  + '\nNo pierda más tiempo ni dinero con sistemas obsoletos o incompletos.' 
  + '\nSolicite una demostración gratuita de nuestro software y compruebe cómo puede mejorar la calidad y rentabilidad de su servicio de salud.';

  text3 = '¿Sabes cuánto tiempo y dinero pierdes al no tener un control eficiente de tu inventario?\n'
  + '\nCon nuestro Sistema Integral Administrativo - SIA, podrás gestionar todos tus productos de forma fácil, rápida y segura.'
  + '\nEl SIA te permite registrar entradas y salidas, generar reportes, alertas y estadísticas, y sincronizar tu información con el sistema contable CON2K.'
  + '\nAsí, podrás optimizar tu espacio, evitar el desabastecimiento o el sobrestock, y mejorar tu rentabilidad.\n'
  + '\nNo esperes más y solicita una demostración gratuita de nuestro software, '
  + 'te garantizamos que será la mejor inversión para tu negocio.';


  // clase = document.querySelectorAll('msg-wrapper');

  // textoFinal1 = this.text1_1 + this.text1_2 + this.text1_3 + this.text1_4 + this.text1_5;
  // textoFinal2 = this.text2_1 + this.text2_2 + this.text2_3 + this.text2_4 + this.text2_5 + this.text2_6 + this.text2_7;
  // textoFinal3 = this.text2_1 + this.text2_2 + this.text2_3 + this.text2_4 + this.text2_5;

  productosArray = [
    { 
      nombre: 'Lab2k', 
      descripcion: this.text1,
      imagen: 'assets/imagenes/secciones/lab2k.jpg', 
      id: 1 
    },
    {
      nombre: 'Med2k', 
      descripcion: this.text2, 
      imagen: 'assets/imagenes/secciones/med2k.jpg' , 
      id: 2
    },
    { 
      nombre: 'Sia2k', 
      descripcion: this.text3, 
      imagen: 'assets/imagenes/secciones/sia2k.jpg', 
      id: 3
    },
    ]  

}


