import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  serviciosArray = [
    { nombre: 'Desarrollo de Software a la medida', descripcion: 'Desarrollo de programas que facilitaran tu dia a dia solucionando tus problemas y necesidades.', imagen: 'assets/imagenes/img1.jpg' , id: 1 },
    { nombre: 'Reparación de equipo', descripcion: 'Reparacion de computadores, laptops, impresoras, etc.', imagen: 'assets/imagenes/img2.jpg' , id: 2 },
    { nombre: 'Soporte Técnico', descripcion: 'Soporte técnico calificado para ayudarte a resolver algún problema.', imagen: 'assets/imagenes/img3.jpg' , id: 3 },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  verServicio(id){
    console.log(id);

    // PARA MANDAR AL USUARIO CON EL ID DEL SERVICIO A LA PAGINA DE SERVICIOS(POR ID)
    this.router.navigate(['/servicios/:' + id]);
  }

}
