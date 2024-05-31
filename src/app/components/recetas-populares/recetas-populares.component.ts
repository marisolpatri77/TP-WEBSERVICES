import { Component } from '@angular/core';
import { RecetasPopularesService } from '../../services/recetas-populares.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recetas-populares',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recetas-populares.component.html',
  styleUrl: './recetas-populares.component.css'
})
export class RecetasPopularesComponent {

  recetas: Array<any> = [];
  receta: any = '';
  preparacion: Array<any> = [];
  tituloReceta: string = '';

  constructor(private recetasPopularesService: RecetasPopularesService){
    this.obtenerRecetasPopulares();
    
  }

  obtenerRecetasPopulares(): void {
    this.recetasPopularesService.getRecetasPopulares().subscribe(
      data => {
        console.log(data);
        this.recetas = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  detalleRecetasPopulares(path: string): void {
    this.recetasPopularesService.getDetailReceta(path).subscribe(
      data => {
        console.log(data);
        this.receta = data;
        this.preparacion = data['Pasos de preparacion'];
        this.tituloReceta = data['Titulo de la preparacion']

      },
      error => {
        console.log(error);
      }
    )
  }



  cerrarModal(){
    this.receta = '';
    this.tituloReceta = '';
  }



}
