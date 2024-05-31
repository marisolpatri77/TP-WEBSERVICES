import { Component } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent {

  noticias: Array<any> = [];
  noticia:any = null;

  info: string= '';
  tituloModal: string= '';

  constructor(private noticiaService: NoticiaService) { 
    //this.obtenerNoticias();
  }

  obtenerNoticias(): void {
    this.noticiaService.getNoticias().subscribe(
      data =>{
        console.log(data);
        this.noticias = data.homepageArticles[0].articles;
        console.log(this.noticias);
      }, 
      error =>{
        console.log(error);
      }
    )
  }


  mostrarInfo(id: string): void {
    this.noticiaService.getNoticiaById(id).subscribe(
      data =>{
        //console.log(data);
        this.noticia = data.article.body;
        //console.log(this.noticia);     
    
        if (Array.isArray(this.noticia)){
          this.info = this.noticia
                        .filter(item => item.data && item.data.content)
                        .map(item => item.data.content)
                        .join('');
        } else{
          this.info = '';
        }

        this.tituloModal = data.article.title;

        //console.log(this.info);
      },
      error =>{
        console.error();
      }
    )
  }

  cerrarModal(): void {
    this.noticia = null;
    this.info = '';
    this.tituloModal = '';
  }
}
