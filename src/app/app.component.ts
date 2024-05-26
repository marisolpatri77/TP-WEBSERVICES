import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { MarcasAutosComponent } from './components/marcas-autos/marcas-autos.component';
import { IpInfoComponent } from './components/ip-info/ip-info.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, NoticiaComponent, TraductorComponent, MarcasAutosComponent, IpInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP-WEBSERVICES';
}
