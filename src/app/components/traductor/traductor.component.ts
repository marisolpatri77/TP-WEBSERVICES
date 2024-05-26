import { Component } from '@angular/core';
import { TraductorService } from '../../services/traductor.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-traductor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './traductor.component.html',
  styleUrl: './traductor.component.css'
})
export class TraductorComponent {

  lenguajes: Array<any> = [];
  text: string = '';
  source: string = '';
  target: string = '';
  textoTraducido: string = '';

  constructor(private traductorService : TraductorService) {
    this.obtenerLenguajes();
  }

  obtenerLenguajes(): void {
    this.traductorService.getLenguages().subscribe(
      data => {
        console.log(data);
        //this.lenguajes = data.data.languages;
        //console.log(this.lenguajes);
      },
      error => {
        console.log(error);
      }
    )
  }


  traducirTexto(): void {
    this.traductorService.tranlateText(this.source, this.target, this.text).subscribe(
      result => {
        console.log(result);
        this.textoTraducido = result.data.translations[0].translatedText;
      },
      error => {
        console.log(error);
      }
    )
  }
}
