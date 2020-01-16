import { Routes, ActivatedRoute } from '@angular/router';
import { UpdatePessoaComponent } from './update-pessoa/update-pessoa.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { LoginComponent } from './login/login.component';

export const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', component: LoginComponent},
    { path: 'pessoa', component: PessoaComponent},
    { path: 'update/:codigo', component: UpdatePessoaComponent}
];

//export const routing: ModuleWithProviders = ActivatedRoute.(APP_ROUTES);