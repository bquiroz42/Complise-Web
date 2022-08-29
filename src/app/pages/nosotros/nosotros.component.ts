import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  listCheck = [
    {text: 'Análisis y diseño de sistemas'},
    {text: 'Instalación y configuración de equipos'},
    {text: 'Comunicaciones'},
    {text: 'Redes locales y amplias'},
    {text: 'Diseño gráfico publicitario'},
    {text: 'Asesoría y capacitación'},
    {text: 'Internet é Intranets'},
    {text: 'Configuración de estaciones'},
    {text: 'Configuración de servidores'}, 
  ]

  textMision = 'Generar Utilidades Ofreciendo Soluciones en Informática, maximizando la funcionalidad en base a la utilización de las mejores herramientas tecnológicas y minimizando los costos, tiempos de implementación y mantenimiento. (Los casos difíciles los terminamos rápido, con los imposibles, nos tardamos algo más).'
  textVision = 'Ser la mejor opción en sistemas, con la atención fija en lo más avanzado, buscando el mejor balance entre costo y funcionalidad, integrando la máxima calidad al menor precio. (Nuestros clientes no cuestionan posibilidad ni precio, están seguros de recibir lo mejor disponible al menor costo).';
  textNuestroEquipo = 'Estamos conformados por un equipo de más de 20 personas comprometidas y altamente capacitadas para poder brindarle una solución ante su necesidad. Puede tener la certeza de que alguno de nuestros integrantes tendrá la respuesta ante su solicitud. Contamos con personal especializado en áreas de TI como soporte técnico y desarrollo de aplicaciones a la medida que estarán disponibles para usted.';


  constructor() { }

  ngOnInit(): void {
  }

}
