import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { soloTexto, validarCorreo, validarDecimalConDosDecimales } from 'src/app/validators/validatorFn';
import { PrestamosLibrosService } from 'src/app/service/prestamosdelibros.service';
import { EmpleadosService } from 'src/app/service/empleado.services';
import { EstudiantesService } from 'src/app/service/estudiantes.services';
import { LibrosService } from 'src/app/service/libros.services';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {

  formulario: FormGroup;
  existe: boolean = false;
  maestrosEmpleados!: any[];
  maestrosEstudiantes!: any[];
  maestrosLibros!: any[];
  constructor(
    private formBuilder: FormBuilder, 
    private prestamosLibrosService: PrestamosLibrosService,
    private empleadosService: EmpleadosService,
    private estudiantesService: EstudiantesService,
    private librosService: LibrosService) {
    this.formulario = this.formBuilder.group({
      empleado: [''],
      estudiantes: [''],
      libros: [''],
      fecha_inicio: [''],
      fecha_finalizacion: [''],
    });
  }
  ngOnInit() :void{
    this.cargademaestros();
   }

   get f(): any { return this.formulario.controls; }
   get datoslibrosprestados():any{

    let id= 0;
    let empleado ="string";

    let empleado_id = this.formulario.controls['empleado'].value;
    empleado_id = (empleado_id !== '') ? parseInt(empleado_id, 10) : null;

    let estudiantes ="string";

    let estudiante_id = this.formulario.controls['estudiantes'].value;
    estudiante_id = (estudiante_id !== '') ? parseInt(estudiante_id, 10) : null;

    let libro ="string";

    let libro_id = this.formulario.controls['libros'].value;
    libro_id = (libro_id !== '') ? parseInt(libro_id, 10) : null;

    let estado ="string";

    const model = {
      id,
      empleado,
      empleado_id,
      estudiantes,
      estudiante_id,
      libro,
      libro_id,
      fecha_Inicio: this.formulario.controls['fecha_inicio'].value,
      fecha_Fin: this.formulario.controls['fecha_finalizacion'].value,
      estado,
      fecha_Retorno: this.formulario.controls['fecha_finalizacion'].value,
    }
    return model;
   }

   cargademaestros(){
    this.empleadosService.getData().subscribe(data => { this.maestrosEmpleados = data;});
    this.estudiantesService.getData().subscribe(data => { this.maestrosEstudiantes = data;});
    this.librosService.getData().subscribe(data => { this.maestrosLibros = data;});
   }

  onSubmit() {
    debugger;
    console.log('datoslibrosprestados',this.datoslibrosprestados);
      if (this.formulario.valid) {
      console.log('El formulario es válido. Enviar solicitud...');
    } else {
      Object.values(this.formulario.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    this.prestamosLibrosService.enviarDatos(this.datoslibrosprestados).subscribe(response => {
      console.log('Datos enviados correctamente:', response);
     
       console.log('Datos enviados correctamente:', response);
      alert('Datos registrados correctamente');
      this.formulario.reset();
     }, error => {
       console.error('Error al enviar datos:', error);
       alert('Error al enviar datos: los campos no cumplen con los formatos requeridos');	
    
     });  
  }
}
