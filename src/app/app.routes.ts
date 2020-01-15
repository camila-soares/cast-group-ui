import { Routes, ActivatedRoute } from '@angular/router';
import { UpdatePessoaComponent } from './update-pessoa/update-pessoa.component';
import { PessoaComponent } from './pessoa/pessoa.component';

export const APP_ROUTES: Routes = [
    { path: '', component: PessoaComponent},
    { path: 'update/:codigo', component: UpdatePessoaComponent}
];

//export const routing: ModuleWithProviders = ActivatedRoute.(APP_ROUTES);