import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import printJS from 'print-js';

@Component({
  selector: 'app-ej-printing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ej-printing.component.html',
  styleUrl: './ej-printing.component.css'
})
export class EjPrintingComponent {
  usuarios = [];

  imprimir() {
    let usuariosPrint: Array<any> = this.procesarListado(this.usuarios);
    printJS({
      printable: this.usuarios, properties: ['id', 'username', 'emal'], type:
        'json'
    })
  }
  procesarListado(usuarios: Array<any>): Array<any> {
    let usuariosProcess: Array<any> = new Array<any>();
    usuarios.forEach(usu => {
      let usuarioTemp = {
        id: usu.id,
        username: usu.username,
        email: usu.email
      }
      usuariosProcess.push(usuarioTemp);
    });
    return usuariosProcess;
  }

}
