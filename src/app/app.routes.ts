import { Routes } from '@angular/router';
import { HemsidaComponent } from './hemsida/hemsida.component';
import { BildComponent } from './bild/bild.component';
import { FooterComponent } from './footer/footer.component';
import { KonverteraComponent } from './konvertera/konvertera.component';
import { MenyComponent } from './meny/meny.component';
import { NotFindComponent } from './not-find/not-find.component';

export const routes: Routes = [
    {path: 'hemsida', component:HemsidaComponent},
    {path: 'bild', component: BildComponent},
    {path: 'footer', component:FooterComponent},
    {path: 'konvertera', component: KonverteraComponent},
    {path: 'meny', component:MenyComponent},
    {path: '', redirectTo: '/hemsida' , pathMatch: 'full'},
    {path: '404', component: NotFindComponent},
    {path: '**', component: NotFindComponent}
];
