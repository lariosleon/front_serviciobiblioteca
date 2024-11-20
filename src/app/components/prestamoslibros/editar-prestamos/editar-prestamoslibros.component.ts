import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrestamosLibrosService } from 'src/app/service/prestamosdelibros.service';
import { Router } from '@angular/router';
import { soloTexto, validarCorreo, validarDecimalConDosDecimales } from '../../../validators/validatorFn';
import { EmpleadosService } from 'src/app/service/empleado.services';
import { EstudiantesService } from 'src/app/service/estudiantes.services';
import { LibrosService } from 'src/app/service/libros.services';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editar-prestamoslibros',
  templateUrl: './editar-prestamoslibros.component.html',
  styleUrls: ['./editar-prestamoslibros.component.css']
})
export class EditarPrestamosLibrosComponent {

  
  @Input() prestamoslibrosEditar: any = {};
  @Output() modoOculto = new EventEmitter();
  prestamoseditarlibrosForm: FormGroup;
  maestrosEmpleados!: any[];
  maestrosEstudiantes!: any[];
  maestrosLibros!: any[];

  datosprestamosdelibros: any ; 
  //variable para obtener datos de la busqueda de ID.
  operacionSeleccionadaLibroid!: number;
  operacionSeleccionadaestudianteid!: number;
  operacionSeleccionadaempleadoid!: number;
  //FIN

  //combo box 
  comboxlibro !: string;
  comboxestudiante !: string;
  comboxempleado !: string;
  comboxfecha !: string;
  comboxfinalizacion !: string;
  comboxestado !: string;
  // fin de combo box

  constructor(private fb: FormBuilder, private prestamosLibrosService: PrestamosLibrosService,
    private empleadosService: EmpleadosService,
    private estudiantesService: EstudiantesService,
    private librosService: LibrosService,
    private datePipe: DatePipe
  ) {
    this.prestamoseditarlibrosForm = this.fb.group({
      id: '',
      empleado: [''],
      estudiantes: [''],
      libros: [''],
      fecha_Inicio: [''],
      fecha_finalizacion: [''],
      estado: [''],
      fecha_Retorno: [''],
    });

    console.log("constructor");
    
  }

  get f(): any { return this.prestamoseditarlibrosForm.controls; }
   get datoslibrosprestadosediatar():any{
    let Id= this.prestamoslibrosEditar.id;
    let Empleado =this.comboxempleado;
    let empleado_id = this.operacionSeleccionadaempleadoid;
    let Estudiantes =this.comboxestudiante;
    let estudiante_id = this.operacionSeleccionadaestudianteid;
    let Libro =this.comboxlibro;
    let Libro_id = this.prestamoseditarlibrosForm.controls['libros'].value;
    let Fecha_Inicio =  this.comboxfecha;
    let Fecha_Fin = this.comboxfinalizacion;
    let estado = this.prestamoseditarlibrosForm.controls['estado'].value;
    let Fecha_Retorno = this.prestamoseditarlibrosForm.controls['fecha_Retorno'].value;
    
    const model = {
      Id,
      Empleado,
      empleado_id,
      Estudiantes,
      estudiante_id,
      Libro,
      Libro_id,
      Fecha_Inicio,
      Fecha_Fin,
      estado,
      Fecha_Retorno
    }
    return model;
   }

  ngOnInit() :void{
    this.cargademaestros();
    this.buscarporid();
   }
  opChanged(selectedValue: string){
    console.log(selectedValue);
  }

  optionChanged(selectedValue: string){
    console.log(selectedValue);
  }

  

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['prestamoslibrosEditar'] && this.prestamoslibrosEditar) {
      this.comboxempleado = this.prestamoslibrosEditar.empleado;
      this.comboxestudiante = this.prestamoslibrosEditar.estudiantes;
      this.comboxlibro = this.prestamoslibrosEditar.libro;
      this.comboxfecha = this.prestamoslibrosEditar.fecha_Inicio;
      this.comboxfinalizacion = this.prestamoslibrosEditar.fecha_Fin;
      this.comboxestado = this.prestamoslibrosEditar.estado;

    }
    console.log("onchange");
    this.buscarporid();
  }

  buscarporid(): void {
    this.prestamosLibrosService.buscarPorId(this.prestamoslibrosEditar.id).subscribe(data => {
        this.datosprestamosdelibros = data;
        this.operacionSeleccionadaLibroid = this.datosprestamosdelibros.libro_id;
        this.operacionSeleccionadaestudianteid= this.datosprestamosdelibros.estudiante_id;
        this.operacionSeleccionadaempleadoid= this.datosprestamosdelibros.empleado_id;
    });
}

  cargademaestros(){
    this.empleadosService.getData().subscribe(data => { this.maestrosEmpleados = data;});
    this.estudiantesService.getData().subscribe(data => { this.maestrosEstudiantes = data;});
    this.librosService.getData().subscribe(data => { this.maestrosLibros = data;});
   }


  guardar(): void {
    if (this.prestamoseditarlibrosForm.valid) {
      
      console.log('El formulario es válido. Enviar solicitud...');
    } else {
      
      Object.values(this.prestamoseditarlibrosForm.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
    
    this.prestamosLibrosService.actualizar(this.datoslibrosprestadosediatar).subscribe(
      response => {
        console.log('Persona editada correctamente:', response);
        alert('Prestamo de Libros editado correctamente');
        // window.location.reload();
        this.modoOculto.emit();
      },
      error => {
        console.error('Error al editar persona:', error);
        alert('Error al editar Prestamos de Libros:'+ error);	
      }
    )
  }

}
