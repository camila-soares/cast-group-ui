import { Routes, ActivatedRoute } from '@angular/router';
import { AppComponent } from "./app.component";
import { UnidadeComponent } from './unidade/unidade.component';

export const APP_ROUTES: Routes = [
    { path: '', component: AppComponent},
    { path: 'unidade', component: UnidadeComponent}
];

//export const routing: ModuleWithProviders = ActivatedRoute.(APP_ROUTES);