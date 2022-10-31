import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  // INFORMACION TEMPORALMENTE MODIFICABLE. *MANEJAR BASE DE DATOS PARA EL LLENADO CORRECTO*
  listCheck = [
    {text: 'Análisis y diseño de sistemas.'},
    {text: 'Instalación y configuración de computadoras.'},
    {text: 'Redes locales y amplias.'},
    {text: 'Diseño gráfico publicitario.'},
    {text: 'Configuración de estaciones.'},
    {text: 'Instalacion y configuración de servidores.'},
    {text: 'Reparación de equipo de computo.'},
    {text: 'Asesoría y atención a cliente.'},
  ]

  textMainInformation = 'Nos encargamos de crear y darte soluciones computacionales que proporcionan esa respuesta clave para tu negocio o empresa.';

  textMision = 'Generar utilidades ofreciendo soluciones en informática, maximizando la funcionalidad en base a la utilización de las mejores herramientas tecnológicas y minimizando los costos, tiempos de implementación y mantenimiento.'
  textVision = 'Ser la mejor opción en sistemas, con la atención fija en lo más avanzado, buscando el mejor balance entre costo y funcionalidad, integrando la máxima calidad al menor precio.';
  textNuestroEquipo = ' Estamos conformados por personas comprometidas y altamente capacitadas para poder brindarle una solución ante su necesidad. Puede tener la certeza de que alguno de nuestros integrantes tendrá la respuesta ante su solicitud.';
  

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

  constructor() { }

  ngOnInit(): void {
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