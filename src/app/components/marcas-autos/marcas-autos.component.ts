import { Component } from '@angular/core';
import { MarcasAutosService } from '../../services/marcas-autos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marcas-autos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marcas-autos.component.html',
  styleUrl: './marcas-autos.component.css'
})
export class MarcasAutosComponent {

  marcasAutos: Array<any> = [];
  modelosAutos: Array<any> = [];
  marcasAutosParte1: Array<any> = [];
  marcasAutosParte2: Array<any> = [];
  marcasAutosParte3: Array<any> = [];
  marcasAutosParte4: Array<any> = [];

  mostrarModal: boolean = false;
  marcaSeleccionada: any = null;

  constructor(private marcaAutosService: MarcasAutosService) { 
    this.obtenerMarcasAutos();
  }

  obtenerMarcasAutos(): void {
    this.marcaAutosService.getMakes().subscribe(
      data => {
        console.log(data);
        this.marcasAutos = data;
        this.dividirMarcasAutos();
      },
      error => {
        console.log(error);
      }
    );
  }

  dividirMarcasAutos(): void {
    let parte = Math.ceil(this.marcasAutos.length / 4);
    this.marcasAutosParte1 = this.marcasAutos.slice(0, parte);
    this.marcasAutosParte2 = this.marcasAutos.slice(parte, parte * 2);
    this.marcasAutosParte3 = this.marcasAutos.slice(parte * 2, parte * 3);
    this.marcasAutosParte4 = this.marcasAutos.slice(parte * 3);
  }

  obtenerModelosAutos(marca: any): void {
    this.marcaSeleccionada = marca;
    this.marcaAutosService.getModelsByMarkId(marca.id).subscribe(
      data => {
        //console.log(data);
        this.modelosAutos = data;
        console.log(this.modelosAutos);
        this.mostrarModal = true;

      },
      error => {
        console.log(error);
      }
    )
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.modelosAutos = [];
  }




}
