import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto-formulario',
  templateUrl: './contacto-formulario.component.html',
  styleUrls: ['./contacto-formulario.component.css']
})
export class ContactoFormularioComponent implements OnInit {

  contactForm: UntypedFormGroup;
  mostrarMensaje: boolean;
  // mensajeVar;

  constructor( private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }


  onSubmit(datosUsuario: any){
    console.log('Form enviado->')
    console.log(this.contactForm.value);

    if(this.contactForm.valid){

      this.mostrarMensaje = true;

      setTimeout(() => {

        this.mostrarMensaje = false;
      }, 3000);


    }else if(this.contactForm.invalid){

      this.mostrarMensaje = false;
    }

  }

  initForm(): UntypedFormGroup{
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      empresa: ['', [Validators.required, Validators.minLength(4)]],
      correo: ['', [Validators.required, Validators.minLength(4)]],
      numeroTelefono: ['', [Validators.required, Validators.minLength(10)]],
      textoInformacion: ['', [Validators.required, Validators.minLength(5)]],
    })
  }


}
