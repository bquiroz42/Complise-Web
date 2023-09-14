import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contacto-formulario',
  templateUrl: './contacto-formulario.component.html',
  styleUrls: ['./contacto-formulario.component.css']
})
export class ContactoFormularioComponent implements OnInit {

  contactForm: FormGroup;
  mostrarMensaje: boolean;
  mensajeExito = document.getElementById("mensajeExito");
  // mensajeVar;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  initForm(): FormGroup{
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      empresa: ['', [Validators.required, Validators.minLength(4)]],
      correo: ['', [Validators.required, Validators.minLength(4)]],
      numeroTelefono: ['', [Validators.required, Validators.minLength(10)]],
      textoInformacion: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  onSubmit(datosUsuario: any){

    if(this.contactForm.valid){

      console.log('Form enviado->')
      console.log(this.contactForm.value);

      this.mostrarMensaje = true;

      setTimeout(() => {

      this.mostrarMensaje = false;
      this.contactForm.reset();
      }, 2000);


    }else if(this.contactForm.invalid){

      this.mostrarMensaje = false;
      console.log('Form vacio->')
      // console.log(this.contactForm.value);
    }

  }

}
