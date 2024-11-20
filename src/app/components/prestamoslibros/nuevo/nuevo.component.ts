import { Component,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { soloTexto, validarCorreo, validarDecimalConDosDecimales } from 'src/app/validators/validatorFn';
import { PrestamosLibrosService } from 'src/app/service/prestamosdelibros.service';
import { EmpleadosService } from 'src/app/service/empleado.services';
import { EstudiantesService } from 'src/app/service/estudiantes.services';
import { LibrosService } from 'src/app/service/libros.services';
import { librosprest } from 'src/app/interface/librosprest';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {
  @Output() modoOculto = new EventEmitter();
  formulario: FormGroup;
  variablelibros!: librosprest;
  existe: boolean = false;
  maestrosEmpleados!: any[];
  maestrosEstudiantes!: any[];
  maestrosLibros!: any[];
  datosaobtener!: any[];
  sourceAgregarzonas!: any;
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

    let Id= 0;
    let Empleado ="string";

    let empleado_id = this.formulario.controls['empleado'].value;
    empleado_id = (empleado_id !== '') ? parseInt(empleado_id, 10) : null;

    let Estudiantes ="string";

    let estudiante_id = this.formulario.controls['estudiantes'].value;
    estudiante_id = (estudiante_id !== '') ? parseInt(estudiante_id, 10) : null;

    let Libro ="string";

    let Libro_id = this.formulario.controls['libros'].value;
    Libro_id = (Libro_id !== '') ? parseInt(Libro_id, 10) : null;

    let estado ="string";

    const model = {
      Id,
      Empleado,
      empleado_id,
      Estudiantes,
      estudiante_id,
      Libro,
      Libro_id,
      Fecha_Inicio: this.formulario.controls['fecha_inicio'].value,
      Fecha_Fin: this.formulario.controls['fecha_finalizacion'].value,
      estado,
      Fecha_Retorno: this.formulario.controls['fecha_finalizacion'].value,
    }
    this.sourceAgregarzonas = model;
    return model;
   }



   cargademaestros(){
    this.empleadosService.getData().subscribe(data => { this.maestrosEmpleados = data;});
    this.estudiantesService.getData().subscribe(data => { this.maestrosEstudiantes = data;});
    this.librosService.getData().subscribe(data => { this.maestrosLibros = data;});
   }

   Grabar(){

    if (this.formulario.valid) {
      console.log('El formulario es válido. Enviar solicitud...');
    } else {
      Object.values(this.formulario.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    //this.datosaobtener = datoss;
    this.prestamosLibrosService.enviarDatos(this.datoslibrosprestados).subscribe(data => {  
     alert('Datos registrados correctamente');
     this.formulario.reset();
     this.modoOculto.emit();
    }, error => {
      console.error('Error al enviar datos:', error);
      alert(error);	
   
    } ); 
   }
}
