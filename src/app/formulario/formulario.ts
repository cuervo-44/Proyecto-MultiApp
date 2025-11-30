import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LocalStorage } from '../Services/local-storage';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCheckboxModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {

  formulario: FormGroup;


  constructor(private fb: FormBuilder, private almacenamiento: LocalStorage) {
     this.formulario = this.fb.group({
    nombre: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    edad: ['', Validators.required],
    pais: ['',Validators.required ],
    aceptaCondiciones: [false],
    comentario: ['',]
    });
  }


  mostrar() {
    if (this.formulario.invalid) {
      console.log("el campo no es válido")
    
    }else {
      const datos = this.formulario.value;
      this.almacenamiento.setItem('formularioHalloween', JSON.stringify(datos));
      console.log("Datos guardados:", datos);
      this.formulario.reset();
    }
  }

  reset() {
     this.formulario.reset({
      nombre: '',
      email: '',
      edad:'',
      pais:'',
      aceptaCondiciones:false,
      comentario:''
    });
  }
} 
