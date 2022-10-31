import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  serviciosArray = [
    { nombre: 'Desarrollo de Software a la medida', descripcion: 'Desarrollo de sistemas adaptables para empresas y clientes.', imagen: 'assets/imagenes/img12.jpg' , id: 1 },
    { nombre: 'Reparación de equipo', descripcion: 'Reparacion de Equipo de Computo y otros aparatos electronicos.', imagen: 'assets/imagenes/img13.jpg' , id: 2 },
    { nombre: 'Soporte Técnico', descripcion: 'Soporte técnico calificado para ayudarte a resolver algún problema.', imagen: 'assets/imagenes/soporteTecnico.jpg' , id: 3 },
  ]

  paginasArray =  [
    { nombre: 'Servicios', ruta: '/servicios'},
    { nombre: 'Productos', ruta: '/productos'},
    { nombre: 'Nosotros', ruta: '/nosotros'},
    { nombre: 'Contacto', ruta: '/contacto'}
  ]
  
  imagenLogo = 'assets/imagenes/logoComplise.png';
  iconoTelefono = 'assets/imagenes/num-contacto 1.png';
  iconoFacebook = 'assets/imagenes/icono-facebook 1.png';
  
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
