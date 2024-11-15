import { Component } from '@angular/core';
import { PrestamosLibrosService } from 'src/app/service/prestamosdelibros.service';
@Component({
  selector: 'app-home-prestamoslibros',
  templateUrl: './home-prestamoslibros.component.html',
  styleUrls: ['./home-prestamoslibros.component.css']
})
export class HomePrestamoslibrosComponent {

  prestamoslibros: any ; 
  prestamoslibrosEditar: any;
  filtroPrestamosLibros: any;
  modoOculto: boolean = true;
  constructor(private prestamosLibrosService: PrestamosLibrosService) {
  }
  ngOnInit() {
   this.getData();
  }
  
  getData(){
    this.prestamosLibrosService.getData().subscribe(data => {
      this.prestamoslibros = data;
      this.filtroPrestamosLibros = data;
      
    })
  }
  
  eliminarPorId(id: number) {
    console.log(id)
    this.prestamosLibrosService.eliminarPorId(id).subscribe(
      (response) => {
      console.log('Persona eliminada correctamente');
      this.getData();
    }, error => {
      console.error('Error al eliminar persona:', error);
    });
  }
  buscar(texto: Event) {
    const input = texto.target as HTMLInputElement;
    console.log(input.value);
    console.log(this.prestamoslibros);
    this.filtroPrestamosLibros = this.prestamoslibros.filter( (prestamos_libros: any) =>
      prestamos_libros.id.toString().includes(input.value.toLowerCase()) ||
    prestamos_libros.empleados.toLowerCase().includes(input.value.toLowerCase()) ||
    prestamos_libros.estudiantes.toLowerCase().includes(input.value.toLowerCase()) ||
    prestamos_libros.libro.toLowerCase().includes(input.value.toLowerCase()) ||
    prestamos_libros.fecha_Inicio.toLowerCase().includes(input.value.toLowerCase())||
    prestamos_libros.fecha_Fin.toLowerCase().includes(input.value.toLowerCase())||
    prestamos_libros.estado.toLowerCase().includes(input.value.toLowerCase())||
    prestamos_libros.fecha_Retorno.toLowerCase().includes(input.value.toLowerCase())
    );
    console.log(this.filtroPrestamosLibros)
  }

  toggleModoEdicion(libros: any) {
    this.prestamoslibrosEditar = libros;
    this.editarModoOcuto()
    console.log("algoooo*", this.prestamoslibrosEditar);
  }

  editarModoOcuto(){
    this.modoOculto = !this.modoOculto;
    this.getData();
  }



}
