import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {


  productosArray = [
    { nombre: 'Med2k', descripcion: 'Sistema de gestion para control y administracion para Hospitales', imagen: 'assets/imagenes/med2k.png' , id: 1 },
    { nombre: 'Sia2k', descripcion: 'Sistema de control de inventario', imagen: 'assets/imagenes/ventaEquipos.jpg', id: 2 },
    { nombre: 'Lab2k', descripcion: 'Sistema de control para Laboratorios', imagen: 'assets/imagenes/lab2k.jpg', id: 3 },
  ]

  nombre: string;
  descripcion: string;
  imagen: string;


  constructor(private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {

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
        // let descripcion = 'xd';
        let imagen = this.productosArray[2]['imagen'];

        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
      }

    })


  }

}
