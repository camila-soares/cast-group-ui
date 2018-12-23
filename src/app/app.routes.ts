import { Routes, ActivatedRoute } from '@angular/router';
import { UnidadeComponent } from './unidade/unidade.component';
import { PessoaComponent } from './pessoa/pessoa.component';

export const APP_ROUTES: Routes = [
    { path: '', component: PessoaComponent},
    { path: 'unidade', component: UnidadeComponent}
];

//export const routing: ModuleWithProviders = ActivatedRoute.(APP_ROUTES);