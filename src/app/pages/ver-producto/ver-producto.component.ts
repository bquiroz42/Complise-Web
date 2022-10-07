import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {

// ARRAY TEMPORALMENTE CREADO PARA MOSTRAR LOS PRODUCTOS
  productosArray = [
    { nombre: 'Med2k', descripcion: 'Sistema encargado de manejar y administrar las areas de tu hospital/consultorio con el que podrás areas especializadas como recepción, enfermeria, archivo, etc. Adaptable con el sistema Sia2k para un manejo más completo del sistema', imagen: 'assets/imagenes/med2k.png' , id: 1 },
    { nombre: 'Sia2k', descripcion: 'Sistema para control de inventario, utilizado comunmente en almacenes para manejar entradas y salidas. Adaptable con el sistema Med2k para un manejo más completo del sistema.', imagen: 'assets/imagenes/ventaEquipos.jpg', id: 2 },
    { nombre: 'Lab2k', descripcion: 'Sistema de control para Laboratorios con el que podrás realizar tus estudios y manejar las pruebas de tus pacientes.', imagen: 'assets/imagenes/lab2k.jpg', id: 3 },
  ]

  nombre: string;
  descripcion: string;
  imagen: string;


  constructor(private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

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

}
