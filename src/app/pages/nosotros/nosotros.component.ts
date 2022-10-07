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

  textMainInformation = 'Nos encargamos de darte soluciones de tecnologías de la información que proporcionan una solución para tu negocio o empresa.';

  textMision = '(REVISAR PENDIENTE) Generar Utilidades Ofreciendo Soluciones en Informática, maximizando la funcionalidad en base a la utilización de las mejores herramientas tecnológicas y minimizando los costos, tiempos de implementación y mantenimiento. (Los casos difíciles los terminamos rápido, con los imposibles, nos tardamos algo más).'
  textVision = '(REVISAR PENDIENTE)Ser la mejor opción en sistemas, con la atención fija en lo más avanzado, buscando el mejor balance entre costo y funcionalidad, integrando la máxima calidad al menor precio. (Nuestros clientes no cuestionan posibilidad ni precio, están seguros de recibir lo mejor disponible al menor costo).';
  textNuestroEquipo = ' Estamos conformados por personas comprometidas y altamente capacitadas para poder brindarle una solución ante su necesidad. Puede tener la certeza de que alguno de nuestros integrantes tendrá la respuesta ante su solicitud.';

  

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