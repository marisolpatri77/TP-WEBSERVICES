import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { MarcasAutosComponent } from './components/marcas-autos/marcas-autos.component';
import { IpInfoComponent } from './components/ip-info/ip-info.component';
import { ObjetosComponent } from './components/objetos/objetos.component';
import { EjPrintingComponent } from './components/ej-printing/ej-printing.component';
import { RecetasPopularesComponent } from './components/recetas-populares/recetas-populares.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'noticia',
        component: NoticiaComponent
    },
    {
        path: 'traductor',
        component: TraductorComponent
    },
    {
        path: 'marcas-autos',
        component: MarcasAutosComponent
    },
    {
        path: 'ip-info',
        component: IpInfoComponent
    },
    {
        path: 'objetos',
        component: ObjetosComponent
    },
    {
        path: 'ej-printing',
        component: EjPrintingComponent
    },
    {
        path: 'recetas-populares',
        component: RecetasPopularesComponent
    }
   
];
